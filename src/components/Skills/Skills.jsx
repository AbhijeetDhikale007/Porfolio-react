import {
    HTMLIcon, CSS,
    Sass, VSCode, Windows, Eclipse,
    Threejs, Tailwind, Postman, Mysql,
    Bootstrap, Dart, Flutter, Github, Idea,
    Angular, React, CLang, Javascript, UnocssSVG
} from './Icons'
import './Skills.scss'

const Skills = () => {
    return (
        <div className="Center">
            <div className='Center2 justify-center flex flex-col ScrollAnimation'>
                <div className="Titles text-center" id='Skills'>
                    <div>
                        <h2>WHAT I HAVE LEARNT SO FAR...</h2>
                        <h1>Skills.</h1>
                    </div>
                </div>
                <div className="Skills ScrollAnimation">
                    <div className="S1">
                        <div><p>Languages</p></div>
                        <div><p>Frameworks</p></div>
                        <div><p>Libraries</p></div>
                        <div><p>Databases</p></div>
                        <div><p>Tools</p></div>
                        <div className='BottomBorder'><p>Environments</p></div>
                        <div><p>Microsoft</p></div>
                        <div><p>Windows</p></div>
                        <div><p>Security</p></div>
                    </div>
                    <div className="S2">
                        <div className='Languages'>
                            <a className='tooltip' data-title='C' target='_blank' href="https://en.cppreference.com/w/c">
                                <CLang /></a>
                            <a className='tooltip' data-title='Java Script' target='_blank' href="https://262.ecma-international.org">
                                <Javascript /></a>
                            <a className='tooltip' data-title='HTML' target='_blank' href="https://html.spec.whatwg.org/multipage">
                                <HTMLIcon /></a>
                            <a className='tooltip' data-title='CSS' target='_blank' href="https://www.w3.org/Style/CSS/Overview.en.html">
                                <CSS /></a>
                            <a className='tooltip' data-title='SCSS' target='_blank' href="https://sass-lang.com">
                                <Sass /></a>
                        </div>
                        <div className='Frameworks'>
                            <a className='tooltip' data-title='Angular JS' target='_blank' href="https://angular.dev">
                                <Angular /></a>
                            <a className='tooltip' data-title='Unocss' target='_blank' href="https://unocss.dev">
                                <UnocssSVG /></a>
                            <a className='tooltip' data-title='Bootstrap' target='_blank' href="https://getbootstrap.com">
                                <Bootstrap /></a>
                            <a className='tooltip' data-title='Tailwind CSS' target='_blank' href="https://tailwindcss.com">
                                <Tailwind /></a>
                        </div>
                        <div className='Libraries'>
                            <a className='tooltip' data-title='React JS' target='_blank' href="https://react.dev">
                                <React /></a>
                            <a className='tooltip' data-title='Three JS' target='_blank' href="https://threejs.org">
                                <Threejs /></a>
                        </div>
                        <div className='Databases'>
                            <a className='tooltip' data-title='My SQL' target='_blank' href="https://www.mysql.com">
                                <Mysql /></a>
                        </div>
                        <div className='Tools'>
                            <a className='tooltip' data-title='Postman' target='_blank' href="https://www.postman.com">
                                <Postman /></a>
                        </div>
                        <div className='Environments BottomBorder'>
                            <a className='tooltip' data-title='Visual Studio Code' target='_blank' href="https://code.visualstudio.com">
                                <VSCode /></a>
                            <a className='tooltip' data-title='Eclipse IDE' target='_blank' href="https://eclipseide.org">
                                <Eclipse /></a>
                            <a className='tooltip' data-title='IntelliJ IDEA' target='_blank' href="https://www.jetbrains.com/idea">
                                <Idea /></a>
                            <a className='tooltip' data-title='Project IDX' target='_blank' href="https://idx.google.com/">
                                <img src="/assets/Skills/Project-IDX.png" alt="Project IDX" /></a>
                            <a className='tooltip' data-title='GitHub' target='_blank' href="https://github.com">
                                <Github /></a>
                            <a className='tooltip' data-title='Inno Setup' target='_blank' href="https://jrsoftware.org/isinfo.php">
                                <img src="/assets/Skills/InnoSetup.svg" alt="Inno Setup" /></a>
                        </div>
                        <div className='Microsoft'>
                            <a className='tooltip' data-title='I can use Microsoft Word' target='_blank' href="https://www.microsoft.com/en-in/microsoft-365/word">
                                <img src="/assets/Skills/Word.svg" alt="Word" /></a>
                            <a className='tooltip' data-title='I can use Microsoft Excel' target='_blank' href="https://www.microsoft.com/en-in/microsoft-365/excel">
                                <img src="/assets/Skills/Excel.svg" alt="Excel" /></a>
                            <a className='tooltip' data-title='I can use Microsoft Powerpoint' target='_blank' href="https://www.microsoft.com/en-in/microsoft-365/powerpoint">
                                <img src="/assets/Skills/Powerpoint.svg" alt="Powerpoint" /></a>
                        </div>
                        <div className='Windows'>
                            <a className='tooltip' data-title='I have good knowledge of Microsoft Windows, I know the installation and troubleshooting of Windows' target='_blank' href="https://www.microsoft.com/en-in/windows">
                                <img src="/assets/Skills/Windows.svg" alt="Windows" /></a>
                            <a className='tooltip' data-title='I have good knowledge about Windows X Lite version, which is lighter, faster and safer than normal' target='_blank' href="https://windowsxlite.com">
                                <img src="/assets/Skills/WindowsXLite.png" alt="Windows X Lite" /></a>
                            <a className='tooltip' data-title='I have good knowledge of Driver Booster, installation update and troubleshooting' target='_blank' href="https://www.iobit.com/en/driver-booster.php">
                                <img src="/assets/Skills/DriverBooster.png" alt="Driver Booster" /></a>
                            <a className='tooltip' data-title='Finding game bugs and glitches' target='_blank' href="#">
                                <img src="/assets/Skills/Bug.svg" alt="Bugs and glitches" /></a>
                        </div>
                        <div className='Security'>
                            <a className='tooltip' data-title='I have good knowledge of Antivirus, installation and troubleshooting etc' target='_blank' href="https://www.kaspersky.co.in/">
                                <img src="/assets/Skills/Kaspersky.ico" alt="Kaspersky" /></a>
                            <a className='tooltip' data-title='I have good knowledge of SimpleWall. A firewall that can prevent software/services from using network' target='_blank' href="https://www.simplewall.org">
                                <img src="/assets/Skills/SimpleWall.png" alt="SimpleWall" /></a>
                            <a className='tooltip' data-title='I have good knowledge of Net Limiter. More features than SimpleWall' target='_blank' href="https://www.netlimiter.com">
                                <img src="/assets/Skills/NetLimiter.png" alt="Net Limiter" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills