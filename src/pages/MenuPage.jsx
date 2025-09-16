import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/menuPage.css';

function MenuPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(0);
  
  // 전달받은 매장 정보
  const store = location.state?.store || {
    id: 'student-hall',
    name: '학생회관 식당',
    image: '학생회관 식당 이미지',
    categories: [
      {
        name: '한식',
        menus: [
          { id: 1, name: '돼지국밥', description: '메뉴 설명 같은 걸 적어도 좋음', price: 6500 },
          { id: 2, name: '김치볶음밥', description: '메뉴 설명 같은 걸 적어도 좋음', price: 5500 }
        ]
      },
      {
        name: '중식',
        menus: [
          { id: 3, name: '짬뽕밥', description: '메뉴 설명 같은 걸 적어도 좋음', price: 7000 },
          { id: 4, name: '짜장면', description: '메뉴 설명 같은 걸 적어도 좋음', price: 6000 }
        ]
      },
      {
        name: '일식',
        menus: [
          { id: 5, name: '돈까스', description: '메뉴 설명 같은 걸 적어도 좋음', price: 6500 }
        ]
      }
    ]
  };

  const handleMenuClick = (menu) => {
    navigate('/menu-detail', { state: { menu, store } });
  };

  const handleBackToStores = () => {
    navigate('/ticket-purchase');
  };

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  return (
    <>
      <Navbar />
      <div className="menu-container">
        <h1 className="menu-title">{store.name}</h1>
        
        {/* 인기 메뉴 섹션 */}
        <div className="popular-menu-section">
          <div className="popular-menu-icon">!</div>
          <span className="popular-menu-text">현재 인기있는 메뉴 정보 여기에 (카테고리, 요리 이름)</span>
        </div>
        
        {/* 카테고리 탭 */}
        <div className="category-tabs">
          {store.categories.map((category, index) => (
            <button
              key={index}
              className={`category-tab ${activeCategory === index ? 'active' : ''}`}
              onClick={() => handleCategoryClick(index)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* 메뉴 콘텐츠 영역 */}
        <div className="menu-content">
          <div className="menu-list">
            {store.categories[activeCategory].menus.map((menu) => (
              <div key={menu.id} className="menu-item" onClick={() => handleMenuClick(menu)}>
                <div className="menu-image">
                  <div className="menu-image-placeholder">이미지</div>
                </div>
                <div className="menu-info">
                  <h3 className="menu-name">{menu.name}</h3>
                  <p className="menu-description">{menu.description}</p>
                </div>
                <button className="menu-purchase-btn">구매</button>
              </div>
            ))}
          </div>
        </div>
        
        
        <button className="back-to-stores-btn" onClick={handleBackToStores}>
          이전으로
        </button>
      </div>
    </>
  );
}

export default MenuPage;
