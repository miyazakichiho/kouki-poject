function hyoji()
{ var str = " ①歌を歌うこと　②ショッピング"; var cnt = document.timer.moji.value.length;if ( cnt < 30 ) 
{document.timer.moji.value = str.substr(0,cnt+1);}else{ document.timer.moji.value = ""; } setTimeout("hyoji()",1000);
}
