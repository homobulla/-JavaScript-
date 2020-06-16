var isValid = function(s) {
    // 长度为奇数则false
    if(s.length % 2) return false;
    const stack = [];
    const obj = {
        '(':')',
        '[':']',
        '{':'}'
    };
    for(let i=0;i<s.length;i++){
        if(s[i] == '(' || s[i] == '{'||s[i] =='['){
            stack.push(s[i])
        } else {
            if(obj[stack.pop()] != s[i]) return false
        }
    }
    return stack.length == 0;
};