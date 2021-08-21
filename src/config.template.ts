class ConfigTemplate { // Refactor this class to just 'Config' to use this as the live config.
    // Static rewards
    static readonly KEY_TTSSPEAK: string = 'TtsSpeak'
    static readonly KEY_TTSSPEAKTIME: string = 'TtsSpeakTime'
    static readonly KEY_TTSSETVOICE: string = 'TtsSetVoice'
    static readonly KEY_TTSSWITCHVOICEGENDER: string = "TtsSwitchVoiceGender"
    static readonly KEY_SCREENSHOT: string = 'Screenshot'
    static readonly KEY_INSTANTSCREENSHOT: string = "InstantScreenshot"
    static readonly KEY_DISCORD_SSSVR: string = 'DiscordSSSRV'
    static readonly KEY_DISCORD_CHAT: string = 'DiscordChat'
    static readonly KEY_FAVORITEVIEWER: string = 'FavoriteViewer'
    
    // Automatically loaded rewards
    static readonly KEY_OBS_EXAMPLE1: string = 'replace_with_twitch_reward_id'
    static readonly KEY_OBS_EXAMPLE2: string = 'replace_with_twitch_reward_id'
    static readonly KEY_COLOR_EXAMPLE1: string = 'replace_with_twitch_reward_id'
    static readonly KEY_COLOR_EXAMPLE2: string = 'replace_with_twitch_reward_id'
    static readonly KEY_SOUND_EXAMPLE1: string = "replace_with_twitch_reward_id"
    static readonly KEY_SOUND_EXAMPLE2: string = "replace_with_twitch_reward_id"

    static instance: IConfig = {
        controller: {
            pipeForAllDefault: true,
            ttsForAllDefault: true,
            logChatToDiscordDefault: true
        },
        google: {
            apiKey: '',
            speakerTimeoutMs: 5000,
            randomizeVoice: false,
            randomizeVoiceLanguageFilter: 'en-', // Matches from the first character and onward, can be extended with regional setting.
            defaultVoice: '', // This will be used if randomization is turned off.
            doNotSpeak: []
        },
        pipe: {
            port: 8077,
            doNotShow: [],
            showRewardsWithKeys: [
                ConfigTemplate.KEY_TTSSPEAK,
                ConfigTemplate.KEY_SCREENSHOT
            ]
        },
        obs: {
            password: '',
            port: 4445,
            rewards: {
                [ConfigTemplate.KEY_OBS_EXAMPLE1]: {
                    sceneNames: ["scene1"],
                    sourceName: "some source",
                    duration: 10000,
                    notificationImage: 'assets/image.png'
                },
                [ConfigTemplate.KEY_OBS_EXAMPLE2]: {
                    sceneNames: ["scene1", "scene2"],
                    sourceName: "some other source",
                    duration: 20000,
                    notificationImage: 'assets/other_image.png'
                }
            },
            filterOnScenes: [''] // WIP
        },
        twitch: {
            userId: 0,
            clientId: '',
            clientSecret: '',
            channelName: '',
            botName: '',
            announcerName: '',
            announcerTrigger: '',
            rewards: {
                [ConfigTemplate.KEY_TTSSPEAK]: '',
                [ConfigTemplate.KEY_TTSSPEAKTIME]: '',
                [ConfigTemplate.KEY_TTSSETVOICE]: '',
                [ConfigTemplate.KEY_TTSSWITCHVOICEGENDER]: '',
                
                [ConfigTemplate.KEY_SCREENSHOT]: '',
                [ConfigTemplate.KEY_INSTANTSCREENSHOT]: '',

                [ConfigTemplate.KEY_FAVORITEVIEWER]: ''
            },
            autoRewards: [
                ConfigTemplate.KEY_OBS_EXAMPLE1,
                ConfigTemplate.KEY_OBS_EXAMPLE2,
                ConfigTemplate.KEY_COLOR_EXAMPLE1,
                ConfigTemplate.KEY_COLOR_EXAMPLE2,
                ConfigTemplate.KEY_SOUND_EXAMPLE1,
                ConfigTemplate.KEY_SOUND_EXAMPLE2
            ]
        },
        screenshots: {
            port: 8807,
            delay: 5
        },
        discord: {
            remoteScreenshotEmbedColor: '#000000',
            manualScreenshotEmbedColor: '#FFFFFF',
            webhooks: {
                [ConfigTemplate.KEY_DISCORD_SSSVR]: {
                    id: '',
                    token: ''
                },
                [ConfigTemplate.KEY_DISCORD_CHAT]: {
                    id: '',
                    token: ''
                }
            },
            prefixCheer: '🙌 ',
            prefixReward: '🏆 '
        },
        philipshue: {
            serverPath: '',
            userName: '',
            lightsToControl: [],
            rewards: {
                [ConfigTemplate.KEY_COLOR_EXAMPLE1]: { x: 0.5, y: 0.5 },
                [ConfigTemplate.KEY_COLOR_EXAMPLE2]: { x: 0.5, y: 0.5 }
            }
        },
        openvr2ws: {
            port: 7708
        },
        audioplayer: {
            rewards: {
                [ConfigTemplate.KEY_SOUND_EXAMPLE1]: {
                    src: 'assets/subfolder/sounds1.wav'
                },
                [ConfigTemplate.KEY_SOUND_EXAMPLE2]: {
                    src: ['assets/sounds1.wav', 'assets/sounds2.wav', 'assets/sounds3.wav']
                }
            }
        }
    }
}