import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="fireworks">
                <div className="firework"></div>
                <div className="firework"></div>
                <div className="firework"></div>
                <div className="firework"></div>
                <div className="firework"></div>
            </div>
            
            <header className="App-header">
                <div className="lantern-container">
                    <div className="lantern left">🏮</div>
                    <div className="lantern right">🏮</div>
                </div>
                
                <div className="horse-icon">🐴</div>
                
                <h1 className="main-title">
                    <span className="title-line">CHÚC MỪNG NĂM MỚI</span>
                    <span className="year-text">Bính Ngọ 2026</span>
                </h1>
                
                <div className="horse-year">
                    <span className="emoji">🐴</span>
                    <span className="text">NĂM NGỰA</span>
                    <span className="emoji">🐴</span>
                </div>
                
                <div className="wishes">
                    <p className="wish-item">🧧 Vạn Sự Như Ý</p>
                    <p className="wish-item">💰 Tài Lộc Dồi Dào</p>
                    <p className="wish-item">🌸 An Khang Thịnh Vượng</p>
                    <p className="wish-item">🎊 Phúc Lộc Thọ</p>
                </div>
                
                <div className="signature">
                    <p>🎋 Linh.cntt097 🎋</p>
                </div>
                
                <div className="decorations">
                    <span className="decoration">✨</span>
                    <span className="decoration">🎆</span>
                    <span className="decoration">🎉</span>
                    <span className="decoration">🌺</span>
                    <span className="decoration">🎊</span>
                    <span className="decoration">🧨</span>
                </div>
            </header>
        </div>
    );
}

export default App;
