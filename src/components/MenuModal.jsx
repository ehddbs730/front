import React, { useState, useEffect } from 'react';
import '../styles/menuModal.css';

function MenuModal({ isOpen, onClose, onSubmit, initialData = null }) {
  // 폼 데이터 상태
  const [formData, setFormData] = useState({
    menuName: '',
    price: '',
    tickets: '',
    category: '',
    visible: true
  });

  // 카테고리 옵션
  const categories = ['한식', '중식', '일식', '정식', '분식'];

  // 모달이 열릴 때 초기 데이터 설정
  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setFormData({
          menuName: initialData.name || '',
          price: initialData.price || '',
          tickets: initialData.tickets || '',
          category: initialData.category || '',
          visible: initialData.visible !== undefined ? initialData.visible : true
        });
      } else {
        setFormData({
          menuName: '',
          price: '',
          tickets: '',
          category: '',
          visible: true
        });
      }
    }
  }, [isOpen, initialData]);

  // 폼 입력 핸들러
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.menuName && formData.price && formData.tickets && formData.category) {
      const menuData = {
        name: formData.menuName,
        visible: formData.visible,
        price: parseInt(formData.price),
        tickets: parseInt(formData.tickets),
        category: formData.category
      };
      onSubmit(menuData);
      handleClose();
    }
  };

  // 모달 닫기 핸들러
  const handleClose = () => {
    setFormData({
      menuName: '',
      price: '',
      tickets: '',
      category: '',
      visible: true
    });
    onClose();
  };

  // 오버레이 클릭 핸들러
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="menu-modal-overlay" onClick={handleOverlayClick}>
      <div className="menu-modal" onClick={(e) => e.stopPropagation()}>
        <div className="menu-modal-header">
          <h2 className="menu-modal-title">
            {initialData ? '메뉴 수정' : '메뉴 등록'}
          </h2>
          <button className="menu-modal-close" onClick={handleClose}>
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="menu-modal-form">
          <div className="menu-modal-form-group">
            <label className="menu-modal-form-label">추가할 메뉴</label>
            <input
              type="text"
              name="menuName"
              value={formData.menuName}
              onChange={handleInputChange}
              placeholder="메뉴 이름을 입력하세요."
              className="menu-modal-form-input"
              required
            />
          </div>

          <div className="menu-modal-form-group">
            <label className="menu-modal-form-label">가격</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="가격을 입력하세요."
              className="menu-modal-form-input"
              required
            />
          </div>

          <div className="menu-modal-form-group">
            <label className="menu-modal-form-label">식권 매수</label>
            <input
              type="number"
              name="tickets"
              value={formData.tickets}
              onChange={handleInputChange}
              placeholder="식권 매수를 입력하세요."
              className="menu-modal-form-input"
              required
            />
          </div>

          <div className="menu-modal-form-group">
            <label className="menu-modal-form-label">카테고리</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="menu-modal-form-select"
              required
            >
              <option value="">카테고리를 선택하세요</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="menu-modal-form-group">
            <label className="menu-modal-form-label">메뉴 표시하기</label>
            <div className="menu-modal-checkbox-group">
              <label className="menu-modal-checkbox-label">
                <input
                  type="checkbox"
                  name="visible"
                  checked={formData.visible}
                  onChange={handleInputChange}
                />
                메뉴 표시
              </label>
            </div>
          </div>

          <div className="menu-modal-buttons">
            <button type="button" className="menu-modal-cancel-btn" onClick={handleClose}>
              취소
            </button>
            <button type="submit" className="menu-modal-submit-btn">
              {initialData ? '수정하기' : '등록하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MenuModal;
