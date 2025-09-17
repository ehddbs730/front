import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MenuModal from '../components/MenuModal';
import '../styles/adminMenuManage.css';

function AdminMenuManage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 전달받은 매장 정보
  const store = location.state?.store || { name: '학생회관 식당' };

  // 모달 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 메뉴 목록 상태
  const [menuList, setMenuList] = useState([
    { id: 1, name: '짜장볶음밥', visible: true, price: 5000, tickets: 65, category: '중식' },
    { id: 2, name: '김치 볶음밥', visible: false, price: 5000, tickets: 20, category: '한식' },
    { id: 3, name: '부대찌개 세트', visible: true, price: 6500, tickets: 500, category: '정식' }
  ]);

  // 카테고리 옵션
  const categories = ['한식', '중식', '일식', '정식', '분식'];

  // 메뉴 등록 핸들러
  const handleMenuSubmit = (menuData) => {
    const newMenu = {
      id: Date.now(),
      ...menuData
    };
    setMenuList(prev => [...prev, newMenu]);
  };

  // 모달 열기/닫기 핸들러
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 메뉴 삭제 핸들러
  const handleDelete = (id) => {
    setMenuList(prev => prev.filter(menu => menu.id !== id));
  };

  // 뒤로가기 핸들러
  const handleBack = () => {
    navigate('/admin');
  };

  return (
    <>
      <Navbar />
      <div className="admin-menu-manage-container">
        <div className="admin-menu-manage-header">
          <h1 className="admin-menu-manage-title">{store.name} 학식메뉴 관리</h1>
        </div>

        <div className="admin-menu-manage-content">
          {/* 메뉴 현황 섹션 */}
          <div className="admin-menu-status-section">
            <h2 className="admin-menu-status-title">메뉴 현황</h2>
            <div className="admin-menu-table-container">
              <table className="admin-menu-table">
                <thead>
                  <tr>
                    <th>menu</th>
                    <th>visible</th>
                    <th>price</th>
                    <th>tickets</th>
                    <th>category</th>
                    <th>삭제</th>
                  </tr>
                </thead>
                <tbody>
                  {menuList.map(menu => (
                    <tr key={menu.id}>
                      <td>{menu.name}</td>
                      <td>{menu.visible ? 'Yes' : 'No'}</td>
                      <td>{menu.price.toLocaleString()}</td>
                      <td>{menu.tickets}</td>
                      <td>{menu.category}</td>
                      <td>
                        <button 
                          className="admin-menu-delete-btn"
                          onClick={() => handleDelete(menu.id)}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 등록하기 버튼 */}
        <button className="admin-menu-add-btn" onClick={handleOpenModal}>
          등록하기
        </button>

        <button className="admin-menu-back-btn" onClick={handleBack}>
          이전으로
        </button>
      </div>

      {/* 모달 */}
      <MenuModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleMenuSubmit}
      />
    </>
  );
}

export default AdminMenuManage;
