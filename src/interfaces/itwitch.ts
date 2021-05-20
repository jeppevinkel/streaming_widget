// Config
interface ITwitchConfig {
    userId: number
    clientId: string
    clientSecret: string
    channelName: string
    botName: string
    announcerName: string
    announcerTrigger: string
    doNotSpeak: string[]
    rewards: ITwitchRewardConfig[]
}
interface ITwitchRewardConfig {
    key: string
    id: string
}
interface ITwitchReward {
    id: string
    callback: ITwitchRedemptionCallback
}
interface ITwitchTokens {
    access_token: string
    refresh_token: string
    updated: string
}
interface ITwitchRedemptionMessage {
    timestamp: string
    redemption: ITwitchRedemption
}
interface ITwitchRedemption {
    channel_id: string
    id: string
    redeemed_at: string
    reward: ITwitchRewardData
    status: string
    user: ITwitchUser
    user_input: string
}
interface ITwitchRewardData {
    background_color: string
    channel_id: string
    cooldown_expires_at: string
    cost: number
    default_image: any // !
    global_cooldown: any // !
    id: string
    image: string // ?
    is_enabled: boolean
    is_in_stock: boolean
    is_paused: boolean
    is_sub_only: boolean
    is_user_input_requires: boolean
    max_per_stream: any // !
    max_per_user_per_stream: any // !
    prompt: string
    redemptions_redeemed_current_stream: any // ?
    should_redemptions_skip_request_queue: boolean
    template_id: any // ?
    title: string
    update_for_indicator_at: string
}
interface ITwitchUser {
    display_name:string
    id: string
    login: string
}
interface ITwitchSlashCommand {
    trigger: string
    mods: boolean
    everyone: boolean
    callback: ITwitchSlashCommandCallback
}
interface ITwitchAnnouncement {
    userName: string
    trigger: string
    callback: ITwitchAnnouncementCallback
}


// Callbacks
interface ITwitchChatCallback { // In Twitch
    (userName: string, input: string, isAction: boolean): void
}
interface ITwitchRedemptionCallback {
    (message: ITwitchRedemptionMessage): void
}
interface ITwitchPubsubRewardCallback {
    (id:string, message: ITwitchRedemptionMessage): void
}
interface ITwitchChatMessageCallback { // In TwitchChat
    (message: TwitchMessageCmd): void
}
interface ITwitchSlashCommandCallback {
    (userName: string, input: string): void
}
interface ITwitchAnnouncementCallback {
    (userName: string, input: string): void
}
interface ITwitchChatCheerCallback {
    (userName: string, input: string, bits: number): void
}