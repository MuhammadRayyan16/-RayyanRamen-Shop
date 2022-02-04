import Experience from './Experience.js'
import gsap from 'gsap'

export default class Controller
{
    constructor()
    {
        this.experience = new Experience()
        this.camera = this.experience.camera
        this.resources = this.experience.resources

        this.setLogic()
        this.setProjectControls()
        this.setMenuControls()
        this.setAboutMeControls()
        this.setArcadeScreenControls()
        this.setCamControls()
        this.setVideoControls()

        this.resources.on('ready', () =>
        {
            this.ramenShop = this.experience.world.ramenShop
            this.materials = this.experience.materials
        })
    }

    setLogic()
    {
        this.logic = {}
        this.logic.buttonsLocked = false
        this.logic.mode = 'menu'

        this.logic.lockButtons = async (lockDuration) =>
        {
            this.logic.buttonsLocked = true
            await this.sleep(lockDuration)
            this.logic.buttonsLocked = false
        }
    }

    // Project selection

    setProjectControls()
    {
        this.projectControls = {}
        this.projectControls.project1 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.logic.mode = 'projects1'
                this.screenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project1Texture,
                    0.2
                )
            }
            console.log('project1')
        }
        this.projectControls.project2 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.logic.mode = 'projects2'
                this.screenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project2Texture,
                    0.2
                )
            }
            console.log('project2')
        }
        this.projectControls.project3 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.logic.mode = 'projects3'
                this.screenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project3Texture,
                    0.2
                )
            }
            console.log('project3')
        }
        this.projectControls.project4 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.logic.mode = 'projects4'
                this.screenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project4Texture,
                    0.2
                )
            }
            console.log('project4')
        }
        this.projectControls.project5 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.logic.mode = 'projects5'
                this.screenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project5Texture,
                    0.2
                )
            }
            console.log('project5')
        }
        this.projectControls.project6 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.logic.mode = 'projects6'
                this.screenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project6Texture,
                    0.2
                )
            }
            console.log('project6')
        }
        this.projectControls.project7 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.logic.mode = 'projects7'
                this.screenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project7Texture,
                    0.2
                )
            }
            console.log('project7')
        }
        this.projectControls.project8 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.logic.mode = 'projects8'
                this.screenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project8Texture,
                    0.2
                )
            }
            console.log('project8')
        }

        // Go back
        this.projectControls.projectBack = async () =>
        {
            if(this.logic.buttonsLocked === false && (this.logic.mode === 'projects0'))
            {
                this.logic.lockButtons(1500)
                this.logic.mode = 'menu'
                this.camControls.toDefault()
                this.screenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.vendingMachineDefaultTexture,
                    0.2
                )
            }

            if(this.logic.buttonsLocked === false && (this.logic.mode === 'projects1' || this.logic.mode === 'projects2' || this.logic.mode === 'projects3'|| this.logic.mode === 'projects4'|| this.logic.mode === 'projects5'|| this.logic.mode === 'projects6'|| this.logic.mode === 'projects7'|| this.logic.mode === 'projects8'))
            {
                this.logic.mode = 'projects0'
                this.screenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.vendingMachineMenuTexture,
                    0.2
                )
            }
            console.log('projectBack')
        }

        // Enter
        this.projectControls.projectEnter = async () =>
        {
            console.log('projectEnter')
        }
    }

    // Main menu controls

    setMenuControls()
    {
        this.menuControls = {}
        this.menuControls.projects = async (obj, color) =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'menu')
            {
                this.logic.mode = 'projects0'
                this.menuControls.buttonIndicator(obj, color)
                this.camControls.toProjects()

                this.screenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.vendingMachineMenuTexture,
                    0.2
                )
            }
 
        }
        this.menuControls.jZhou = async (obj, color) =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'menu')
            {
                this.menuControls.buttonIndicator(obj, color)
                this.camera.transitions.jZhou(1.5)
            }
        }
        this.menuControls.articles = async (obj, color) =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'menu')
            {
                this.menuControls.buttonIndicator(obj, color)
                await this.sleep(250)
                window.open('https://medium.com/@jesse-zhou', '_blank');
            }
        }
        this.menuControls.aboutMe = async (obj, color) =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'menu')
            {
                this.logic.mode = 'aboutMe'
                this.menuControls.buttonIndicator(obj, color)
                this.camControls.toAboutMe()

                this.materials.bigScreenMaterial.map = this.resources.items.bigScreenAboutMeTexture
            }
        }
        this.menuControls.credits = async (obj, color) =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'menu')
            {
                this.logic.mode = 'creditsStart'
                this.menuControls.buttonIndicator(obj, color)
                this.camControls.toCredits()
            }
        }

        this.menuControls.buttonIndicator = async (obj, color) =>
        {
            if (color === 'black') {
                obj.material = this.ramenShop.materials.whiteSignMaterial
                await this.sleep(200)
                obj.material = this.ramenShop.materials.blackSignMaterial
            }
            if (color === 'white') {
                obj.material = this.ramenShop.materials.blackSignMaterial
                await this.sleep(200)
                obj.material = this.ramenShop.materials.whiteSignMaterial
            }
        }
    }

    // About me big screen controls

    setAboutMeControls()
    {
        this.aboutMeControls = {}

        this.aboutMeControls.aboutMeScreens = async () =>
        {
            if(this.logic.buttonsLocked === false && (this.logic.mode === 'skills' || this.logic.mode === 'experience'))
            {
                this.logic.mode = 'aboutMe'

                this.materials.bigScreenMaterial.map = this.resources.items.bigScreenAboutMeTexture
            }
        }

        this.aboutMeControls.aboutMeSkills = async () =>
        {
            if(this.logic.buttonsLocked === false && (this.logic.mode === 'aboutMe' || this.logic.mode === 'experience'))
            {
                this.logic.mode = 'skills'

                this.materials.bigScreenMaterial.map = this.resources.items.bigScreenSkillsTexture
            }
        }

        this.aboutMeControls.aboutMeExperience = async () =>
        {
            if(this.logic.buttonsLocked === false && (this.logic.mode === 'aboutMe' || this.logic.mode === 'skills'))
            {
                this.logic.mode = 'experience'

                this.materials.bigScreenMaterial.map = this.resources.items.bigScreenExperienceTexture
            }
        }

        this.aboutMeControls.aboutMeBack = async () =>
        {
            if(this.logic.buttonsLocked === false && (this.logic.mode === 'aboutMe' || this.logic.mode === 'skills' || this.logic.mode === 'experience'))
            {
                this.logic.mode = 'menu'
                this.camControls.toDefault()

                this.materials.bigScreenMaterial.map = this.resources.items.bigScreenDefaultTexture
            }
        }
    }

    //arcade screen credit controls

    setArcadeScreenControls()
    {
        this.screenControls = {}
        this.screenControls.arcadeScreen = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'creditsStart' )
            {
                this.logic.mode = 'credits'
                this.screenTransition(
                    this.materials.arcadeScreenMaterial,
                    this.resources.items.arcadeScreenCreditsTexture,
                    0.2
                )
            }
            else if(this.logic.buttonsLocked === false && this.logic.mode === 'credits' )
            {
                this.logic.mode = 'thanks'
                this.screenTransition(
                    this.materials.arcadeScreenMaterial,
                    this.resources.items.arcadeScreenThanksTexture,
                    0.2
                )
            }
            else if(this.logic.buttonsLocked === false && this.logic.mode === 'thanks' )
            {
                this.logic.mode = 'menu'
                this.camControls.toDefault()
                this.screenTransition(
                    this.materials.arcadeScreenMaterial,
                    this.resources.items.arcadeScreenDefaultTexture,
                    0.2
                )
            }
        }

    }

    // camera transitions and angles

    setCamControls()
    {
        this.camControls = {}
        this.camControls.toProjects = async () =>
        {
            this.logic.lockButtons(1500)
            this.camera.camAngle.unlocked()
            this.camera.transitions.vendingMachine(1.5)
            await this.sleep(1500)
            this.camera.camAngle.vendingMachine()
        }
        this.camControls.toDefault = async () =>
        {
            this.logic.lockButtons(1500)
            this.camera.camAngle.unlocked()
            this.camera.transitions.default(1.5)
            await this.sleep(1500)
            this.camera.camAngle.default()
        }
        this.camControls.toAboutMe = async () =>
        {
            this.logic.lockButtons(1500)
            this.camera.camAngle.unlocked()
            this.camera.transitions.aboutMe(1.5)
            await this.sleep(1500)
            this.camera.camAngle.aboutMe()
        }
        this.camControls.toCredits = async () =>
        {
            this.logic.lockButtons(1500)
            this.camera.camAngle.unlocked()
            this.camera.transitions.credits(1.5)
            await this.sleep(1500)
            this.camera.camAngle.aboutMe()
        }
    }

    // video controls

    setVideoControls()
    {
        this.videoControls = {}

        this.videoControls.bigScreen = async () =>
        {
            console.log('bigScreen')
        }

        this.videoControls.littleTVScreen = async () =>
        {
            this.videoControls.togglePlayback(this.resources.video['littleTVScreenVideoTexture'])
        }

        this.videoControls.tallScreen = async () =>
        {
            this.videoControls.togglePlayback(this.resources.video['tallScreenVideoTexture'])
        }

        this.videoControls.tvScreen = async () =>
        {
            if(this.resources.video['tvScreenVideoTexture'].paused)
            {this.resources.video['tvScreenVideoTexture'].play()}
            else {
                window.open('https://www.youtube.com/watch?v=fYcphQibLek', '_blank');
                this.resources.video['tvScreenVideoTexture'].pause()
            }
        }

        this.videoControls.sideScreen = async () =>
        {
            this.videoControls.togglePlayback(this.resources.video['sideScreenVideoTexture'])
        }

        this.videoControls.smallScreen1 = async () =>
        {
            console.log('smallScreen1')
        }

        this.videoControls.smallScreen2 = async () =>
        {
            console.log('smallScreen2')
        }

        this.videoControls.smallScreen3 = async () =>
        {
            this.videoControls.togglePlayback(this.resources.video['smallScreen3VideoTexture'])
        }

        this.videoControls.smallScreen4 = async () =>
        {
            this.videoControls.togglePlayback(this.resources.video['smallScreen4VideoTexture'])
        }

        this.videoControls.smallScreen5 = async () =>
        {
            this.videoControls.togglePlayback(this.resources.video['smallScreen5VideoTexture'])
        }

        this.videoControls.togglePlayback = async (video) =>
        {
            if(video.paused)
            {video.play()}
            else {video.pause()}
        }


    }

    screenTransition(material,newTexture, duration)
    {
        material.uniforms.texture2.value = newTexture
        gsap.to(material.uniforms.progress, {value:1,
            duration: duration,
            ease: "power1.inOut",
            onComplete: () => {
                material.uniforms.texture1.value = newTexture
                material.uniforms.progress.value = 0
            }
        })
    }

    sleep(ms) 
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}