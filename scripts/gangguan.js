function onUse(event) {
    

    // 使用正确的声音名称
    var soundName = "gangguan";

    // 播放声音，确保音量和音调参数在0到1之间
    player.getLocation().getWorld().playSound(player.getLocation(), soundName, 1.0, 1.0);
    
}