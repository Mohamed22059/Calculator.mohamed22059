
document.querySelector('.one').onclick = function(){
    document.querySelector('.display_input').value += 1
}
document.querySelector('.two').onclick = function(){
    document.querySelector('.display_input').value += 2
}
document.querySelector('.three').onclick = function(){
    document.querySelector('.display_input').value += 3
}
document.querySelector('.four').onclick = function(){
    document.querySelector('.display_input').value += 4
}
document.querySelector('.five').onclick = function(){
    document.querySelector('.display_input').value += 5
}
document.querySelector('.six').onclick = function(){
    document.querySelector('.display_input').value += 6
}
document.querySelector('.seven').onclick = function(){
    document.querySelector('.display_input').value += 7
}
document.querySelector('.eight').onclick = function(){
    document.querySelector('.display_input').value += 8
}
document.querySelector('.nine').onclick = function(){
    document.querySelector('.display_input').value += 9
}
document.querySelector('.zero').onclick = function(){
    document.querySelector('.display_input').value += 0
}
document.querySelector('.dot').onclick = function(){
    document.querySelector('.display_input').value += '.'
}
document.querySelector('.right').onclick = function(){
    document.querySelector('.display_input').value += '('
}
document.querySelector('.lift').onclick = function(){
    document.querySelector('.display_input').value += ')'
}
document.querySelector('.C').onclick = function(){
    document.querySelector('.display_input').value = ' '
}
document.querySelector('.star').onclick = function(){
    document.querySelector('.display_input').value += '*'
}
document.querySelector('.plus').onclick = function(){
    document.querySelector('.display_input').value += '+'
}
document.querySelector('.minus').onclick = function(){
    document.querySelector('.display_input').value += '-'
}
document.querySelector('.divide').onclick = function(){
    document.querySelector('.display_input').value += '/'
}
document.querySelector('.DEL').onclick = function(){
    document.querySelector('.display_input').value =  document.querySelector('.display_input').value.slice(0 ,-1)
}

document.querySelector('.equal').onclick = function(){
    document.querySelector('.display_input').value = eval( document.querySelector('.display_input').value)
}






