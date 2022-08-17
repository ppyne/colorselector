class NearestHTMLColorName {
    constructor() {
        this.Colors = [{name:'midnightblue',hex:'191970',r:25,g:25,b:112},{name:'dimgray',hex:'696969',r:105,g:105,b:105},{name:'slategray',hex:'708090',r:112,g:128,b:144},{name:'lightslategray',hex:'778899',r:119,g:136,b:153},{name:'maroon',hex:'800000',r:128,g:0,b:0},{name:'purple',hex:'800080',r:128,g:0,b:128},{name:'olive',hex:'808000',r:128,g:128,b:0},{name:'gray',hex:'808080',r:128,g:128,b:128},{name:'indianred',hex:'cd5c5c',r:205,g:92,b:92},{name:'lightcoral',hex:'f08080',r:240,g:128,b:128},{name:'salmon',hex:'fa8072',r:250,g:128,b:114},{name:'darksalmon',hex:'e9967a',r:233,g:150,b:122},{name:'lightsalmon',hex:'ffa07a',r:255,g:160,b:122},{name:'crimson',hex:'dc143c',r:220,g:20,b:60},{name:'red',hex:'ff0000',r:255,g:0,b:0},{name:'firebrick',hex:'b22222',r:178,g:34,b:34},{name:'darkred',hex:'8b0000',r:139,g:0,b:0},{name:'pink',hex:'ffc0cb',r:255,g:192,b:203},{name:'lightpink',hex:'ffb6c1',r:255,g:182,b:193},{name:'hotpink',hex:'ff69b4',r:255,g:105,b:180},{name:'deeppink',hex:'ff1493',r:255,g:20,b:147},{name:'mediumvioletred',hex:'c71585',r:199,g:21,b:133},{name:'palevioletred',hex:'db7093',r:219,g:112,b:147},{name:'coral',hex:'ff7f50',r:255,g:127,b:80},{name:'tomato',hex:'ff6347',r:255,g:99,b:71},{name:'orangered',hex:'ff4500',r:255,g:69,b:0},{name:'darkorange',hex:'ff8c00',r:255,g:140,b:0},{name:'orange',hex:'ffa500',r:255,g:165,b:0},{name:'gold',hex:'ffd700',r:255,g:215,b:0},{name:'yellow',hex:'ffff00',r:255,g:255,b:0},{name:'lightyellow',hex:'ffffe0',r:255,g:255,b:224},{name:'lemonchiffon',hex:'fffacd',r:255,g:250,b:205},{name:'lightgoldenrodyellow',hex:'fafad2',r:250,g:250,b:210},{name:'papayawhip',hex:'ffefd5',r:255,g:239,b:213},{name:'moccasin',hex:'ffe4b5',r:255,g:228,b:181},{name:'peachpuff',hex:'ffdab9',r:255,g:218,b:185},{name:'palegoldenrod',hex:'eee8aa',r:238,g:232,b:170},{name:'khaki',hex:'f0e68c',r:240,g:230,b:140},{name:'darkkhaki',hex:'bdb76b',r:189,g:183,b:107},{name:'lavender',hex:'e6e6fa',r:230,g:230,b:250},{name:'thistle',hex:'d8bfd8',r:216,g:191,b:216},{name:'plum',hex:'dda0dd',r:221,g:160,b:221},{name:'violet',hex:'ee82ee',r:238,g:130,b:238},{name:'orchid',hex:'da70d6',r:218,g:112,b:214},{name:'magenta',hex:'ff00ff',r:255,g:0,b:255},{name:'mediumorchid',hex:'ba55d3',r:186,g:85,b:211},{name:'mediumpurple',hex:'9370db',r:147,g:112,b:219},{name:'blueviolet',hex:'8a2be2',r:138,g:43,b:226},{name:'darkviolet',hex:'9400d3',r:148,g:0,b:211},{name:'darkorchid',hex:'9932cc',r:153,g:50,b:204},{name:'darkmagenta',hex:'8b008b',r:139,g:0,b:139},{name:'indigo',hex:'4b0082',r:75,g:0,b:130},{name:'slateblue',hex:'6a5acd',r:106,g:90,b:205},{name:'darkslateblue',hex:'483d8b',r:72,g:61,b:139},{name:'mediumslateblue',hex:'7b68ee',r:123,g:104,b:238},{name:'greenyellow',hex:'adff2f',r:173,g:255,b:47},{name:'chartreuse',hex:'7fff00',r:127,g:255,b:0},{name:'lawngreen',hex:'7cfc00',r:124,g:252,b:0},{name:'lime',hex:'00ff00',r:0,g:255,b:0},{name:'limegreen',hex:'32cd32',r:50,g:205,b:50},{name:'palegreen',hex:'98fb98',r:152,g:251,b:152},{name:'lightgreen',hex:'90ee90',r:144,g:238,b:144},{name:'mediumspringgreen',hex:'00fa9a',r:0,g:250,b:154},{name:'springgreen',hex:'00ff7f',r:0,g:255,b:127},{name:'mediumseagreen',hex:'3cb371',r:60,g:179,b:113},{name:'seagreen',hex:'2e8b57',r:46,g:139,b:87},{name:'forestgreen',hex:'228b22',r:34,g:139,b:34},{name:'green',hex:'008000',r:0,g:128,b:0},{name:'darkgreen',hex:'006400',r:0,g:100,b:0},{name:'yellowgreen',hex:'9acd32',r:154,g:205,b:50},{name:'olivedrab',hex:'6b8e23',r:107,g:142,b:35},{name:'darkolivegreen',hex:'556b2f',r:85,g:107,b:47},{name:'mediumaquamarine',hex:'66cdaa',r:102,g:205,b:170},{name:'darkseagreen',hex:'8fbc8f',r:143,g:188,b:143},{name:'lightseagreen',hex:'20b2aa',r:32,g:178,b:170},{name:'darkcyan',hex:'008b8b',r:0,g:139,b:139},{name:'teal',hex:'008080',r:0,g:128,b:128},{name:'cyan',hex:'00ffff',r:0,g:255,b:255},{name:'lightcyan',hex:'e0ffff',r:224,g:255,b:255},{name:'paleturquoise',hex:'afeeee',r:175,g:238,b:238},{name:'aquamarine',hex:'7fffd4',r:127,g:255,b:212},{name:'turquoise',hex:'40e0d0',r:64,g:224,b:208},{name:'mediumturquoise',hex:'48d1cc',r:72,g:209,b:204},{name:'darkturquoise',hex:'00ced1',r:0,g:206,b:209},{name:'cadetblue',hex:'5f9ea0',r:95,g:158,b:160},{name:'steelblue',hex:'4682b4',r:70,g:130,b:180},{name:'lightsteelblue',hex:'b0c4de',r:176,g:196,b:222},{name:'powderblue',hex:'b0e0e6',r:176,g:224,b:230},{name:'lightblue',hex:'add8e6',r:173,g:216,b:230},{name:'skyblue',hex:'87ceeb',r:135,g:206,b:235},{name:'lightskyblue',hex:'87cefa',r:135,g:206,b:250},{name:'deepskyblue',hex:'00bfff',r:0,g:191,b:255},{name:'dodgerblue',hex:'1e90ff',r:30,g:144,b:255},{name:'cornflowerblue',hex:'6495ed',r:100,g:149,b:237},{name:'royalblue',hex:'4169e1',r:65,g:105,b:225},{name:'blue',hex:'0000ff',r:0,g:0,b:255},{name:'mediumblue',hex:'0000cd',r:0,g:0,b:205},{name:'darkblue',hex:'00008b',r:0,g:0,b:139},{name:'navy',hex:'000080',r:0,g:0,b:128},{name:'cornsilk',hex:'fff8dc',r:255,g:248,b:220},{name:'blanchedalmond',hex:'ffebcd',r:255,g:235,b:205},{name:'bisque',hex:'ffe4c4',r:255,g:228,b:196},{name:'navajowhite',hex:'ffdead',r:255,g:222,b:173},{name:'wheat',hex:'f5deb3',r:245,g:222,b:179},{name:'burlywood',hex:'deb887',r:222,g:184,b:135},{name:'tan',hex:'d2b48c',r:210,g:180,b:140},{name:'rosybrown',hex:'bc8f8f',r:188,g:143,b:143},{name:'sandybrown',hex:'f4a460',r:244,g:164,b:96},{name:'goldenrod',hex:'daa520',r:218,g:165,b:32},{name:'darkgoldenrod',hex:'b8860b',r:184,g:134,b:11},{name:'peru',hex:'cd853f',r:205,g:133,b:63},{name:'chocolate',hex:'d2691e',r:210,g:105,b:30},{name:'saddlebrown',hex:'8b4513',r:139,g:69,b:19},{name:'sienna',hex:'a0522d',r:160,g:82,b:45},{name:'brown',hex:'a52a2a',r:165,g:42,b:42},{name:'white',hex:'ffffff',r:255,g:255,b:255},{name:'snow',hex:'fffafa',r:255,g:250,b:250},{name:'honeydew',hex:'f0fff0',r:240,g:255,b:240},{name:'mintcream',hex:'f5fffa',r:245,g:255,b:250},{name:'azure',hex:'f0ffff',r:240,g:255,b:255},{name:'aliceblue',hex:'f0f8ff',r:240,g:248,b:255},{name:'ghostwhite',hex:'f8f8ff',r:248,g:248,b:255},{name:'whitesmoke',hex:'f5f5f5',r:245,g:245,b:245},{name:'seashell',hex:'fff5ee',r:255,g:245,b:238},{name:'beige',hex:'f5f5dc',r:245,g:245,b:220},{name:'oldlace',hex:'fdf5e6',r:253,g:245,b:230},{name:'floralwhite',hex:'fffaf0',r:255,g:250,b:240},{name:'ivory',hex:'fffff0',r:255,g:255,b:240},{name:'antiquewhite',hex:'faebd7',r:250,g:235,b:215},{name:'linen',hex:'faf0e6',r:250,g:240,b:230},{name:'lavenderblush',hex:'fff0f5',r:255,g:240,b:245},{name:'mistyrose',hex:'ffe4e1',r:255,g:228,b:225},{name:'gainsboro',hex:'dcdcdc',r:220,g:220,b:220},{name:'lightgray',hex:'d3d3d3',r:211,g:211,b:211},{name:'silver',hex:'c0c0c0',r:192,g:192,b:192},{name:'darkgray',hex:'a9a9a9',r:169,g:169,b:169},{name:'darkslategray',hex:'2f4f4f',r:47,g:79,b:79},{name:'black',hex:'000000',r:0,g:0,b:0}];
    }
    find(r, g, b) {
        var _min = Infinity;
        var elt = this.Colors[this.Colors.length - 1];
        for (var i = 0; i < this.Colors.length; i++) {
            var d = Math.sqrt(Math.pow(r - this.Colors[i].r, 2) + Math.pow(g - this.Colors[i].g, 2) + Math.pow(b - this.Colors[i].b, 2));
            if (d < _min) {
                _min = d;
                elt = this.Colors[i];
            }
        }
        return elt;
    }
    get(r, g, b) {
        for (var i = 0; i < this.Colors.length; i++) {
            if (this.Colors[i].r == r && this.Colors[i].g == g && this.Colors[i].b == b) {
                return this.Colors[i];
            }
        }
        return false;
    }
}
class CSGLSquare {
    constructor(canvas, channel, amount, web) {
        if (typeof channel === 'undefined') channel = 0;
        if (typeof amount === 'undefined') amount = 0;
        if (typeof web === 'undefined') web = 0;
        this.Canvas = canvas;
        this.gl = this.Canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!this.gl) {
            console.log('WebGL not supported');
            return;
        }
        this.Program = this.gl.createProgram();
        this.VertexShader = this.createShader(this.gl.VERTEX_SHADER, '\
            attribute vec2 a_position;\
            attribute vec2 a_texCoord;\
            \
            uniform vec2 u_resolution;\
            \
            varying vec2 v_texCoord;\
            \
            void main() {\
               /* convert the rectangle from pixels to 0.0 to 1.0 */\
               vec2 zeroToOne = a_position / u_resolution;\
            \
               /* convert from 0->1 to 0->2 */\
               vec2 zeroToTwo = zeroToOne * 2.0;\
            \
               /* convert from 0->2 to -1->+1 (clipspace) */\
               vec2 clipSpace = zeroToTwo - 1.0;\
            \
               gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\
            \
               /* pass the texCoord to the fragment shader\
                  The GPU will interpolate this value between points. */\
               v_texCoord = a_texCoord;\
            }\
        ');
        this.FragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, '\
            \
            precision highp float;\
            \
            float toWeb(float v) {\
                return floor(v*5.0+0.5)*0.2;\
            }\
            vec3 toHTML(float r, float g, float b) {\
vec3 colors[138];\
colors[0] = vec3(0.09803921568627451,0.09803921568627451,0.4392156862745098);\
colors[1] = vec3(0.4117647058823529,0.4117647058823529,0.4117647058823529);\
colors[2] = vec3(0.4392156862745098,0.5019607843137255,0.5647058823529412);\
colors[3] = vec3(0.4666666666666667,0.5333333333333333,0.6);\
colors[4] = vec3(0.5019607843137255,0.0,0.0);\
colors[5] = vec3(0.5019607843137255,0.0,0.5019607843137255);\
colors[6] = vec3(0.5019607843137255,0.5019607843137255,0.0);\
colors[7] = vec3(0.5019607843137255,0.5019607843137255,0.5019607843137255);\
colors[8] = vec3(0.803921568627451,0.3607843137254902,0.3607843137254902);\
colors[9] = vec3(0.9411764705882353,0.5019607843137255,0.5019607843137255);\
colors[10] = vec3(0.9803921568627451,0.5019607843137255,0.4470588235294118);\
colors[11] = vec3(0.9137254901960784,0.5882352941176471,0.47843137254901963);\
colors[12] = vec3(1.0,0.6274509803921569,0.47843137254901963);\
colors[13] = vec3(0.8627450980392157,0.0784313725490196,0.23529411764705882);\
colors[14] = vec3(1.0,0.0,0.0);\
colors[15] = vec3(0.6980392156862745,0.13333333333333333,0.13333333333333333);\
colors[16] = vec3(0.5450980392156862,0.0,0.0);\
colors[17] = vec3(1.0,0.7529411764705882,0.796078431372549);\
colors[18] = vec3(1.0,0.7137254901960784,0.7568627450980392);\
colors[19] = vec3(1.0,0.4117647058823529,0.7058823529411765);\
colors[20] = vec3(1.0,0.0784313725490196,0.5764705882352941);\
colors[21] = vec3(0.7803921568627451,0.08235294117647059,0.5215686274509804);\
colors[22] = vec3(0.8588235294117647,0.4392156862745098,0.5764705882352941);\
colors[23] = vec3(1.0,0.4980392156862745,0.3137254901960784);\
colors[24] = vec3(1.0,0.38823529411764707,0.2784313725490196);\
colors[25] = vec3(1.0,0.27058823529411763,0.0);\
colors[26] = vec3(1.0,0.5490196078431373,0.0);\
colors[27] = vec3(1.0,0.6470588235294118,0.0);\
colors[28] = vec3(1.0,0.8431372549019608,0.0);\
colors[29] = vec3(1.0,1.0,0.0);\
colors[30] = vec3(1.0,1.0,0.8784313725490196);\
colors[31] = vec3(1.0,0.9803921568627451,0.803921568627451);\
colors[32] = vec3(0.9803921568627451,0.9803921568627451,0.8235294117647058);\
colors[33] = vec3(1.0,0.9372549019607843,0.8352941176470589);\
colors[34] = vec3(1.0,0.8941176470588236,0.7098039215686275);\
colors[35] = vec3(1.0,0.8549019607843137,0.7254901960784313);\
colors[36] = vec3(0.9333333333333333,0.9098039215686274,0.6666666666666666);\
colors[37] = vec3(0.9411764705882353,0.9019607843137255,0.5490196078431373);\
colors[38] = vec3(0.7411764705882353,0.7176470588235294,0.4196078431372549);\
colors[39] = vec3(0.9019607843137255,0.9019607843137255,0.9803921568627451);\
colors[40] = vec3(0.8470588235294118,0.7490196078431373,0.8470588235294118);\
colors[41] = vec3(0.8666666666666667,0.6274509803921569,0.8666666666666667);\
colors[42] = vec3(0.9333333333333333,0.5098039215686274,0.9333333333333333);\
colors[43] = vec3(0.8549019607843137,0.4392156862745098,0.8392156862745098);\
colors[44] = vec3(1.0,0.0,1.0);\
colors[45] = vec3(0.7294117647058823,0.3333333333333333,0.8274509803921568);\
colors[46] = vec3(0.5764705882352941,0.4392156862745098,0.8588235294117647);\
colors[47] = vec3(0.5411764705882353,0.16862745098039217,0.8862745098039215);\
colors[48] = vec3(0.5803921568627451,0.0,0.8274509803921568);\
colors[49] = vec3(0.6,0.19607843137254902,0.8);\
colors[50] = vec3(0.5450980392156862,0.0,0.5450980392156862);\
colors[51] = vec3(0.29411764705882354,0.0,0.5098039215686274);\
colors[52] = vec3(0.41568627450980394,0.35294117647058826,0.803921568627451);\
colors[53] = vec3(0.2823529411764706,0.23921568627450981,0.5450980392156862);\
colors[54] = vec3(0.4823529411764706,0.40784313725490196,0.9333333333333333);\
colors[55] = vec3(0.6784313725490196,1.0,0.1843137254901961);\
colors[56] = vec3(0.4980392156862745,1.0,0.0);\
colors[57] = vec3(0.48627450980392156,0.9882352941176471,0.0);\
colors[58] = vec3(0.0,1.0,0.0);\
colors[59] = vec3(0.19607843137254902,0.803921568627451,0.19607843137254902);\
colors[60] = vec3(0.596078431372549,0.984313725490196,0.596078431372549);\
colors[61] = vec3(0.5647058823529412,0.9333333333333333,0.5647058823529412);\
colors[62] = vec3(0.0,0.9803921568627451,0.6039215686274509);\
colors[63] = vec3(0.0,1.0,0.4980392156862745);\
colors[64] = vec3(0.23529411764705882,0.7019607843137254,0.44313725490196076);\
colors[65] = vec3(0.1803921568627451,0.5450980392156862,0.3411764705882353);\
colors[66] = vec3(0.13333333333333333,0.5450980392156862,0.13333333333333333);\
colors[67] = vec3(0.0,0.5019607843137255,0.0);\
colors[68] = vec3(0.0,0.39215686274509803,0.0);\
colors[69] = vec3(0.6039215686274509,0.803921568627451,0.19607843137254902);\
colors[70] = vec3(0.4196078431372549,0.5568627450980392,0.13725490196078433);\
colors[71] = vec3(0.3333333333333333,0.4196078431372549,0.1843137254901961);\
colors[72] = vec3(0.4,0.803921568627451,0.6666666666666666);\
colors[73] = vec3(0.5607843137254902,0.7372549019607844,0.5607843137254902);\
colors[74] = vec3(0.12549019607843137,0.6980392156862745,0.6666666666666666);\
colors[75] = vec3(0.0,0.5450980392156862,0.5450980392156862);\
colors[76] = vec3(0.0,0.5019607843137255,0.5019607843137255);\
colors[77] = vec3(0.0,1.0,1.0);\
colors[78] = vec3(0.8784313725490196,1.0,1.0);\
colors[79] = vec3(0.6862745098039216,0.9333333333333333,0.9333333333333333);\
colors[80] = vec3(0.4980392156862745,1.0,0.8313725490196079);\
colors[81] = vec3(0.25098039215686274,0.8784313725490196,0.8156862745098039);\
colors[82] = vec3(0.2823529411764706,0.8196078431372549,0.8);\
colors[83] = vec3(0.0,0.807843137254902,0.8196078431372549);\
colors[84] = vec3(0.37254901960784315,0.6196078431372549,0.6274509803921569);\
colors[85] = vec3(0.27450980392156865,0.5098039215686274,0.7058823529411765);\
colors[86] = vec3(0.6901960784313725,0.7686274509803922,0.8705882352941177);\
colors[87] = vec3(0.6901960784313725,0.8784313725490196,0.9019607843137255);\
colors[88] = vec3(0.6784313725490196,0.8470588235294118,0.9019607843137255);\
colors[89] = vec3(0.5294117647058824,0.807843137254902,0.9215686274509803);\
colors[90] = vec3(0.5294117647058824,0.807843137254902,0.9803921568627451);\
colors[91] = vec3(0.0,0.7490196078431373,1.0);\
colors[92] = vec3(0.11764705882352941,0.5647058823529412,1.0);\
colors[93] = vec3(0.39215686274509803,0.5843137254901961,0.9294117647058824);\
colors[94] = vec3(0.2549019607843137,0.4117647058823529,0.8823529411764706);\
colors[95] = vec3(0.0,0.0,1.0);\
colors[96] = vec3(0.0,0.0,0.803921568627451);\
colors[97] = vec3(0.0,0.0,0.5450980392156862);\
colors[98] = vec3(0.0,0.0,0.5019607843137255);\
colors[99] = vec3(1.0,0.9725490196078431,0.8627450980392157);\
colors[100] = vec3(1.0,0.9215686274509803,0.803921568627451);\
colors[101] = vec3(1.0,0.8941176470588236,0.7686274509803922);\
colors[102] = vec3(1.0,0.8705882352941177,0.6784313725490196);\
colors[103] = vec3(0.9607843137254902,0.8705882352941177,0.7019607843137254);\
colors[104] = vec3(0.8705882352941177,0.7215686274509804,0.5294117647058824);\
colors[105] = vec3(0.8235294117647058,0.7058823529411765,0.5490196078431373);\
colors[106] = vec3(0.7372549019607844,0.5607843137254902,0.5607843137254902);\
colors[107] = vec3(0.9568627450980393,0.6431372549019608,0.3764705882352941);\
colors[108] = vec3(0.8549019607843137,0.6470588235294118,0.12549019607843137);\
colors[109] = vec3(0.7215686274509804,0.5254901960784314,0.043137254901960784);\
colors[110] = vec3(0.803921568627451,0.5215686274509804,0.24705882352941178);\
colors[111] = vec3(0.8235294117647058,0.4117647058823529,0.11764705882352941);\
colors[112] = vec3(0.5450980392156862,0.27058823529411763,0.07450980392156863);\
colors[113] = vec3(0.6274509803921569,0.3215686274509804,0.17647058823529413);\
colors[114] = vec3(0.6470588235294118,0.16470588235294117,0.16470588235294117);\
colors[115] = vec3(1.0,1.0,1.0);\
colors[116] = vec3(1.0,0.9803921568627451,0.9803921568627451);\
colors[117] = vec3(0.9411764705882353,1.0,0.9411764705882353);\
colors[118] = vec3(0.9607843137254902,1.0,0.9803921568627451);\
colors[119] = vec3(0.9411764705882353,1.0,1.0);\
colors[120] = vec3(0.9411764705882353,0.9725490196078431,1.0);\
colors[121] = vec3(0.9725490196078431,0.9725490196078431,1.0);\
colors[122] = vec3(0.9607843137254902,0.9607843137254902,0.9607843137254902);\
colors[123] = vec3(1.0,0.9607843137254902,0.9333333333333333);\
colors[124] = vec3(0.9607843137254902,0.9607843137254902,0.8627450980392157);\
colors[125] = vec3(0.9921568627450981,0.9607843137254902,0.9019607843137255);\
colors[126] = vec3(1.0,0.9803921568627451,0.9411764705882353);\
colors[127] = vec3(1.0,1.0,0.9411764705882353);\
colors[128] = vec3(0.9803921568627451,0.9215686274509803,0.8431372549019608);\
colors[129] = vec3(0.9803921568627451,0.9411764705882353,0.9019607843137255);\
colors[130] = vec3(1.0,0.9411764705882353,0.9607843137254902);\
colors[131] = vec3(1.0,0.8941176470588236,0.8823529411764706);\
colors[132] = vec3(0.8627450980392157,0.8627450980392157,0.8627450980392157);\
colors[133] = vec3(0.8274509803921568,0.8274509803921568,0.8274509803921568);\
colors[134] = vec3(0.7529411764705882,0.7529411764705882,0.7529411764705882);\
colors[135] = vec3(0.6627450980392157,0.6627450980392157,0.6627450980392157);\
colors[136] = vec3(0.1843137254901961,0.30980392156862746,0.30980392156862746);\
colors[137] = vec3(0.0,0.0,0.0);\
                float _min = 1.0 / 0.0;\
                vec3 elt = vec3(0.0, 0.0, 0.0);\
                for (int i = 0; i < 138; i++) {\
                    vec3 v = colors[i];\
                    float d = sqrt(pow(r - v.x, 2.0) + pow(g - v.y, 2.0) + pow(b - v.z, 2.0));\
                    if (d < _min) {\
                        _min = d;\
                        elt = v;\
                    }\
                }\
                return elt;\
            }\
            \
            vec4 labToRgb(float y, float a, float B){\
                float x = (a / 0.00392156863 - 128.0) / 500.0 + y,\
                z = y - (B / 0.00392156863 - 128.0) / 200.0,\
                r, g, b;\
                \
                x = 0.95047 * ((x * x * x > 0.008856) ? x * x * x : (x - 16.0/116.0) / 7.787);\
                y = 1.00000 * ((y * y * y > 0.008856) ? y * y * y : (y - 16.0/116.0) / 7.787);\
                z = 1.08883 * ((z * z * z > 0.008856) ? z * z * z : (z - 16.0/116.0) / 7.787);\
                \
                r = x *  3.2406 + y * -1.5372 + z * -0.4986;\
                g = x * -0.9689 + y *  1.8758 + z *  0.0415;\
                b = x *  0.0557 + y * -0.2040 + z *  1.0570;\
                \
                r = (r > 0.0031308) ? (1.055 * pow(r, 1.0/2.4) - 0.055) : 12.92 * r;\
                g = (g > 0.0031308) ? (1.055 * pow(g, 1.0/2.4) - 0.055) : 12.92 * g;\
                b = (b > 0.0031308) ? (1.055 * pow(b, 1.0/2.4) - 0.055) : 12.92 * b;\
                \
                return vec4(max(0.0, min(1.0, r)), max(0.0, min(1.0, g)), max(0.0, min(1.0, b)), 1.0);\
            }\
            \
            vec4 hsvToRgb(float h, float s, float v) {\
              float r, g, b;\
              \
              float i = floor(h * 6.0);\
              float mi = mod(i, 6.0);\
              float f = h * 6.0 - i;\
              float p = v * (1.0 - s);\
              float q = v * (1.0 - f * s);\
              float t = v * (1.0 - (1.0 - f) * s);\
              \
              if (mi == 0.0) r = v, g = t, b = p;\
              else if (mi == 1.0) r = q, g = v, b = p;\
              else if (mi == 2.0) r = p, g = v, b = t;\
              else if (mi == 3.0) r = p, g = q, b = v;\
              else if (mi == 4.0) r = t, g = p, b = v;\
              else if (mi == 5.0) r = v, g = p, b = q;\
              \
              return vec4(r, g, b, 1.0);\
            }\
            \
            uniform float u_amount;\
            uniform int u_channel;\
            uniform int u_web;\
            \
            /* the texCoords passed in from the vertex shader. */\
            varying vec2 v_texCoord;\
            \
            void main() {\
                vec4 color;\
                if (u_channel == 8) {\
                    color = labToRgb(1.0-v_texCoord.y, v_texCoord.x, u_amount);\
                } else if (u_channel == 7) {\
                    color = labToRgb(1.0-v_texCoord.y, u_amount, v_texCoord.x);\
                } else if (u_channel == 6) {\
                    color = labToRgb(u_amount, v_texCoord.x, 1.0-v_texCoord.y);\
                } else if (u_channel == 5) {\
                    color = hsvToRgb(v_texCoord.x, 1.0-v_texCoord.y, u_amount);\
                } else if (u_channel == 4) {\
                    color = hsvToRgb(v_texCoord.x, u_amount, 1.0-v_texCoord.y);\
                } else if (u_channel == 3) {\
                    color = hsvToRgb(u_amount, v_texCoord.x, 1.0-v_texCoord.y);\
                } else if (u_channel == 2) {\
                    color = vec4(v_texCoord.x, 1.0 - v_texCoord.y, u_amount, 1.0);\
                } else if (u_channel == 1) {\
                    color = vec4(1.0 - v_texCoord.y, u_amount, v_texCoord.x, 1.0);\
                } else {\
                    color = vec4(u_amount, 1.0 - v_texCoord.y, v_texCoord.x, 1.0);\
                }\
                if (u_web == 1) {\
                    gl_FragColor.r = toWeb(color.r);\
                    gl_FragColor.g = toWeb(color.g);\
                    gl_FragColor.b = toWeb(color.b);\
                    gl_FragColor.a = color.a;\
                } else if (u_web == 2) {\
                    vec3 v = toHTML(color.r, color.g, color.b);\
                    gl_FragColor.r = v.x;\
                    gl_FragColor.g = v.y;\
                    gl_FragColor.b = v.z;\
                    gl_FragColor.a = color.a;\
                } else gl_FragColor = color;\
            }\
        ');
        this.gl.linkProgram(this.Program);
        this.PositionLocation = this.gl.getAttribLocation(this.Program, 'a_position');
        this.TexCoordLocation = this.gl.getAttribLocation(this.Program, 'a_texCoord');
        this.PositionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.PositionBuffer);
        this.setRectangle(0, 0, this.Canvas.width, this.Canvas.height);
        this.TexCoordBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.TexCoordBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
          0.0,  0.0,
          1.0,  0.0,
          0.0,  1.0,
          0.0,  1.0,
          1.0,  0.0,
          1.0,  1.0,
        ]), this.gl.STATIC_DRAW);
        this.AmountLocation = this.gl.getUniformLocation(this.Program, "u_amount");
        this.ChannelLocation = this.gl.getUniformLocation(this.Program, "u_channel");
        this.WebLocation = this.gl.getUniformLocation(this.Program, "u_web");
        this.ResolutionLocation = this.gl.getUniformLocation(this.Program, "u_resolution");
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.clear();
        this.gl.useProgram(this.Program);
        this.gl.enableVertexAttribArray(this.PositionLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.PositionBuffer);
        this.gl.vertexAttribPointer(this.PositionLocation, 2, this.gl.FLOAT, false, 0, 0);
        this.gl.enableVertexAttribArray(this.TexCoordLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.TexCoordBuffer);
        this.gl.vertexAttribPointer(this.TexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
        this.gl.uniform2f(this.ResolutionLocation, this.gl.canvas.width, this.gl.canvas.height);
        this.update(channel, amount, web);
    }
    draw() {
        var primitiveType = this.gl.TRIANGLES;
        var offset = 0;
        var count = 6;
        this.gl.drawArrays(primitiveType, offset, count);
    }
    update(channel, amount, web) {
        this.gl.uniform1i(this.ChannelLocation, channel);
        this.gl.uniform1f(this.AmountLocation, amount);
        this.gl.uniform1i(this.WebLocation, web);
        this.draw();
    }
    clear() {
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    setRectangle(x, y, width, height) {
        var x1 = x;
        var x2 = x + width;
        var y1 = y;
        var y2 = y + height;
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
            x1, y1,
            x2, y1,
            x1, y2,
            x1, y2,
            x2, y1,
            x2, y2,
        ]), this.gl.STATIC_DRAW);
    }
    createShader(type, code) {
        var shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, code);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.log(code);
            throw 'Compile error: ' + this.gl.getShaderInfoLog(shader);
        }
        this.gl.attachShader(this.Program, shader);
        return shader;
    }
}

class CSGLBar {
    constructor(canvas, channel, amount, web) {
        if (typeof channel === 'undefined') channel = 0;
        if (typeof amount === 'undefined') amount = [0,0];
        if (typeof web === 'undefined') web = 0;
        this.Canvas = canvas;
        this.gl = this.Canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!this.gl) {
            console.log('WebGL not supported');
            return;
        }
        this.Program = this.gl.createProgram();
        this.VertexShader = this.createShader(this.gl.VERTEX_SHADER, '\
            attribute vec2 a_position;\
            attribute vec2 a_texCoord;\
            \
            uniform vec2 u_resolution;\
            \
            varying vec2 v_texCoord;\
            \
            void main() {\
               /* convert the rectangle from pixels to 0.0 to 1.0 */\
               vec2 zeroToOne = a_position / u_resolution;\
            \
               /* convert from 0->1 to 0->2 */\
               vec2 zeroToTwo = zeroToOne * 2.0;\
            \
               /* convert from 0->2 to -1->+1 (clipspace) */\
               vec2 clipSpace = zeroToTwo - 1.0;\
            \
               gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\
            \
               /* pass the texCoord to the fragment shader\
                  The GPU will interpolate this value between points. */\
               v_texCoord = a_texCoord;\
            }\
        ');
        this.FragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, '\
            \
            precision highp float;\
            \
            float toWeb(float v) {\
                return floor(v*5.0+0.5)*0.2;\
            }\
            \
            vec3 toHTML(float r, float g, float b) {\
vec3 colors[138];\
colors[0] = vec3(0.09803921568627451,0.09803921568627451,0.4392156862745098);\
colors[1] = vec3(0.4117647058823529,0.4117647058823529,0.4117647058823529);\
colors[2] = vec3(0.4392156862745098,0.5019607843137255,0.5647058823529412);\
colors[3] = vec3(0.4666666666666667,0.5333333333333333,0.6);\
colors[4] = vec3(0.5019607843137255,0.0,0.0);\
colors[5] = vec3(0.5019607843137255,0.0,0.5019607843137255);\
colors[6] = vec3(0.5019607843137255,0.5019607843137255,0.0);\
colors[7] = vec3(0.5019607843137255,0.5019607843137255,0.5019607843137255);\
colors[8] = vec3(0.803921568627451,0.3607843137254902,0.3607843137254902);\
colors[9] = vec3(0.9411764705882353,0.5019607843137255,0.5019607843137255);\
colors[10] = vec3(0.9803921568627451,0.5019607843137255,0.4470588235294118);\
colors[11] = vec3(0.9137254901960784,0.5882352941176471,0.47843137254901963);\
colors[12] = vec3(1.0,0.6274509803921569,0.47843137254901963);\
colors[13] = vec3(0.8627450980392157,0.0784313725490196,0.23529411764705882);\
colors[14] = vec3(1.0,0.0,0.0);\
colors[15] = vec3(0.6980392156862745,0.13333333333333333,0.13333333333333333);\
colors[16] = vec3(0.5450980392156862,0.0,0.0);\
colors[17] = vec3(1.0,0.7529411764705882,0.796078431372549);\
colors[18] = vec3(1.0,0.7137254901960784,0.7568627450980392);\
colors[19] = vec3(1.0,0.4117647058823529,0.7058823529411765);\
colors[20] = vec3(1.0,0.0784313725490196,0.5764705882352941);\
colors[21] = vec3(0.7803921568627451,0.08235294117647059,0.5215686274509804);\
colors[22] = vec3(0.8588235294117647,0.4392156862745098,0.5764705882352941);\
colors[23] = vec3(1.0,0.4980392156862745,0.3137254901960784);\
colors[24] = vec3(1.0,0.38823529411764707,0.2784313725490196);\
colors[25] = vec3(1.0,0.27058823529411763,0.0);\
colors[26] = vec3(1.0,0.5490196078431373,0.0);\
colors[27] = vec3(1.0,0.6470588235294118,0.0);\
colors[28] = vec3(1.0,0.8431372549019608,0.0);\
colors[29] = vec3(1.0,1.0,0.0);\
colors[30] = vec3(1.0,1.0,0.8784313725490196);\
colors[31] = vec3(1.0,0.9803921568627451,0.803921568627451);\
colors[32] = vec3(0.9803921568627451,0.9803921568627451,0.8235294117647058);\
colors[33] = vec3(1.0,0.9372549019607843,0.8352941176470589);\
colors[34] = vec3(1.0,0.8941176470588236,0.7098039215686275);\
colors[35] = vec3(1.0,0.8549019607843137,0.7254901960784313);\
colors[36] = vec3(0.9333333333333333,0.9098039215686274,0.6666666666666666);\
colors[37] = vec3(0.9411764705882353,0.9019607843137255,0.5490196078431373);\
colors[38] = vec3(0.7411764705882353,0.7176470588235294,0.4196078431372549);\
colors[39] = vec3(0.9019607843137255,0.9019607843137255,0.9803921568627451);\
colors[40] = vec3(0.8470588235294118,0.7490196078431373,0.8470588235294118);\
colors[41] = vec3(0.8666666666666667,0.6274509803921569,0.8666666666666667);\
colors[42] = vec3(0.9333333333333333,0.5098039215686274,0.9333333333333333);\
colors[43] = vec3(0.8549019607843137,0.4392156862745098,0.8392156862745098);\
colors[44] = vec3(1.0,0.0,1.0);\
colors[45] = vec3(0.7294117647058823,0.3333333333333333,0.8274509803921568);\
colors[46] = vec3(0.5764705882352941,0.4392156862745098,0.8588235294117647);\
colors[47] = vec3(0.5411764705882353,0.16862745098039217,0.8862745098039215);\
colors[48] = vec3(0.5803921568627451,0.0,0.8274509803921568);\
colors[49] = vec3(0.6,0.19607843137254902,0.8);\
colors[50] = vec3(0.5450980392156862,0.0,0.5450980392156862);\
colors[51] = vec3(0.29411764705882354,0.0,0.5098039215686274);\
colors[52] = vec3(0.41568627450980394,0.35294117647058826,0.803921568627451);\
colors[53] = vec3(0.2823529411764706,0.23921568627450981,0.5450980392156862);\
colors[54] = vec3(0.4823529411764706,0.40784313725490196,0.9333333333333333);\
colors[55] = vec3(0.6784313725490196,1.0,0.1843137254901961);\
colors[56] = vec3(0.4980392156862745,1.0,0.0);\
colors[57] = vec3(0.48627450980392156,0.9882352941176471,0.0);\
colors[58] = vec3(0.0,1.0,0.0);\
colors[59] = vec3(0.19607843137254902,0.803921568627451,0.19607843137254902);\
colors[60] = vec3(0.596078431372549,0.984313725490196,0.596078431372549);\
colors[61] = vec3(0.5647058823529412,0.9333333333333333,0.5647058823529412);\
colors[62] = vec3(0.0,0.9803921568627451,0.6039215686274509);\
colors[63] = vec3(0.0,1.0,0.4980392156862745);\
colors[64] = vec3(0.23529411764705882,0.7019607843137254,0.44313725490196076);\
colors[65] = vec3(0.1803921568627451,0.5450980392156862,0.3411764705882353);\
colors[66] = vec3(0.13333333333333333,0.5450980392156862,0.13333333333333333);\
colors[67] = vec3(0.0,0.5019607843137255,0.0);\
colors[68] = vec3(0.0,0.39215686274509803,0.0);\
colors[69] = vec3(0.6039215686274509,0.803921568627451,0.19607843137254902);\
colors[70] = vec3(0.4196078431372549,0.5568627450980392,0.13725490196078433);\
colors[71] = vec3(0.3333333333333333,0.4196078431372549,0.1843137254901961);\
colors[72] = vec3(0.4,0.803921568627451,0.6666666666666666);\
colors[73] = vec3(0.5607843137254902,0.7372549019607844,0.5607843137254902);\
colors[74] = vec3(0.12549019607843137,0.6980392156862745,0.6666666666666666);\
colors[75] = vec3(0.0,0.5450980392156862,0.5450980392156862);\
colors[76] = vec3(0.0,0.5019607843137255,0.5019607843137255);\
colors[77] = vec3(0.0,1.0,1.0);\
colors[78] = vec3(0.8784313725490196,1.0,1.0);\
colors[79] = vec3(0.6862745098039216,0.9333333333333333,0.9333333333333333);\
colors[80] = vec3(0.4980392156862745,1.0,0.8313725490196079);\
colors[81] = vec3(0.25098039215686274,0.8784313725490196,0.8156862745098039);\
colors[82] = vec3(0.2823529411764706,0.8196078431372549,0.8);\
colors[83] = vec3(0.0,0.807843137254902,0.8196078431372549);\
colors[84] = vec3(0.37254901960784315,0.6196078431372549,0.6274509803921569);\
colors[85] = vec3(0.27450980392156865,0.5098039215686274,0.7058823529411765);\
colors[86] = vec3(0.6901960784313725,0.7686274509803922,0.8705882352941177);\
colors[87] = vec3(0.6901960784313725,0.8784313725490196,0.9019607843137255);\
colors[88] = vec3(0.6784313725490196,0.8470588235294118,0.9019607843137255);\
colors[89] = vec3(0.5294117647058824,0.807843137254902,0.9215686274509803);\
colors[90] = vec3(0.5294117647058824,0.807843137254902,0.9803921568627451);\
colors[91] = vec3(0.0,0.7490196078431373,1.0);\
colors[92] = vec3(0.11764705882352941,0.5647058823529412,1.0);\
colors[93] = vec3(0.39215686274509803,0.5843137254901961,0.9294117647058824);\
colors[94] = vec3(0.2549019607843137,0.4117647058823529,0.8823529411764706);\
colors[95] = vec3(0.0,0.0,1.0);\
colors[96] = vec3(0.0,0.0,0.803921568627451);\
colors[97] = vec3(0.0,0.0,0.5450980392156862);\
colors[98] = vec3(0.0,0.0,0.5019607843137255);\
colors[99] = vec3(1.0,0.9725490196078431,0.8627450980392157);\
colors[100] = vec3(1.0,0.9215686274509803,0.803921568627451);\
colors[101] = vec3(1.0,0.8941176470588236,0.7686274509803922);\
colors[102] = vec3(1.0,0.8705882352941177,0.6784313725490196);\
colors[103] = vec3(0.9607843137254902,0.8705882352941177,0.7019607843137254);\
colors[104] = vec3(0.8705882352941177,0.7215686274509804,0.5294117647058824);\
colors[105] = vec3(0.8235294117647058,0.7058823529411765,0.5490196078431373);\
colors[106] = vec3(0.7372549019607844,0.5607843137254902,0.5607843137254902);\
colors[107] = vec3(0.9568627450980393,0.6431372549019608,0.3764705882352941);\
colors[108] = vec3(0.8549019607843137,0.6470588235294118,0.12549019607843137);\
colors[109] = vec3(0.7215686274509804,0.5254901960784314,0.043137254901960784);\
colors[110] = vec3(0.803921568627451,0.5215686274509804,0.24705882352941178);\
colors[111] = vec3(0.8235294117647058,0.4117647058823529,0.11764705882352941);\
colors[112] = vec3(0.5450980392156862,0.27058823529411763,0.07450980392156863);\
colors[113] = vec3(0.6274509803921569,0.3215686274509804,0.17647058823529413);\
colors[114] = vec3(0.6470588235294118,0.16470588235294117,0.16470588235294117);\
colors[115] = vec3(1.0,1.0,1.0);\
colors[116] = vec3(1.0,0.9803921568627451,0.9803921568627451);\
colors[117] = vec3(0.9411764705882353,1.0,0.9411764705882353);\
colors[118] = vec3(0.9607843137254902,1.0,0.9803921568627451);\
colors[119] = vec3(0.9411764705882353,1.0,1.0);\
colors[120] = vec3(0.9411764705882353,0.9725490196078431,1.0);\
colors[121] = vec3(0.9725490196078431,0.9725490196078431,1.0);\
colors[122] = vec3(0.9607843137254902,0.9607843137254902,0.9607843137254902);\
colors[123] = vec3(1.0,0.9607843137254902,0.9333333333333333);\
colors[124] = vec3(0.9607843137254902,0.9607843137254902,0.8627450980392157);\
colors[125] = vec3(0.9921568627450981,0.9607843137254902,0.9019607843137255);\
colors[126] = vec3(1.0,0.9803921568627451,0.9411764705882353);\
colors[127] = vec3(1.0,1.0,0.9411764705882353);\
colors[128] = vec3(0.9803921568627451,0.9215686274509803,0.8431372549019608);\
colors[129] = vec3(0.9803921568627451,0.9411764705882353,0.9019607843137255);\
colors[130] = vec3(1.0,0.9411764705882353,0.9607843137254902);\
colors[131] = vec3(1.0,0.8941176470588236,0.8823529411764706);\
colors[132] = vec3(0.8627450980392157,0.8627450980392157,0.8627450980392157);\
colors[133] = vec3(0.8274509803921568,0.8274509803921568,0.8274509803921568);\
colors[134] = vec3(0.7529411764705882,0.7529411764705882,0.7529411764705882);\
colors[135] = vec3(0.6627450980392157,0.6627450980392157,0.6627450980392157);\
colors[136] = vec3(0.1843137254901961,0.30980392156862746,0.30980392156862746);\
colors[137] = vec3(0.0,0.0,0.0);\
                float _min = 1.0 / 0.0;\
                vec3 elt = vec3(0.0, 0.0, 0.0);\
                for (int i = 0; i < 138; i++) {\
                    vec3 v = colors[i];\
                    float d = sqrt(pow(r - v.x, 2.0) + pow(g - v.y, 2.0) + pow(b - v.z, 2.0));\
                    if (d < _min) {\
                        _min = d;\
                        elt = v;\
                    }\
                }\
                return elt;\
            }\
            \
            vec4 labToRgb(float y, float a, float B){\
                float x = (a / 0.00392156863 - 128.0) / 500.0 + y,\
                z = y - (B / 0.00392156863 - 128.0) / 200.0,\
                r, g, b;\
                \
                x = 0.95047 * ((x * x * x > 0.008856) ? x * x * x : (x - 16.0/116.0) / 7.787);\
                y = 1.00000 * ((y * y * y > 0.008856) ? y * y * y : (y - 16.0/116.0) / 7.787);\
                z = 1.08883 * ((z * z * z > 0.008856) ? z * z * z : (z - 16.0/116.0) / 7.787);\
                \
                r = x *  3.2406 + y * -1.5372 + z * -0.4986;\
                g = x * -0.9689 + y *  1.8758 + z *  0.0415;\
                b = x *  0.0557 + y * -0.2040 + z *  1.0570;\
                \
                r = (r > 0.0031308) ? (1.055 * pow(r, 1.0/2.4) - 0.055) : 12.92 * r;\
                g = (g > 0.0031308) ? (1.055 * pow(g, 1.0/2.4) - 0.055) : 12.92 * g;\
                b = (b > 0.0031308) ? (1.055 * pow(b, 1.0/2.4) - 0.055) : 12.92 * b;\
                \
                return vec4(max(0.0, min(1.0, r)), max(0.0, min(1.0, g)), max(0.0, min(1.0, b)), 1.0);\
            }\
            \
            vec4 hsvToRgb(float h, float s, float v) {\
              float r, g, b;\
              \
              float i = floor(h * 6.0);\
              float mi = mod(i, 6.0);\
              float f = h * 6.0 - i;\
              float p = v * (1.0 - s);\
              float q = v * (1.0 - f * s);\
              float t = v * (1.0 - (1.0 - f) * s);\
              \
              if (mi == 0.0) r = v, g = t, b = p;\
              else if (mi == 1.0) r = q, g = v, b = p;\
              else if (mi == 2.0) r = p, g = v, b = t;\
              else if (mi == 3.0) r = p, g = q, b = v;\
              else if (mi == 4.0) r = t, g = p, b = v;\
              else if (mi == 5.0) r = v, g = p, b = q;\
              \
              return vec4(r, g, b, 1.0);\
            }\
            \
            uniform vec2 u_amount;\
            uniform int u_channel;\
            uniform int u_web;\
            \
            /* the texCoords passed in from the vertex shader. */\
            varying vec2 v_texCoord;\
            \
            void main() {\
                vec4 color;\
                if (u_channel == 8) {\
                    color = labToRgb(1.0-u_amount.y, u_amount.x, 1.0-v_texCoord.y);\
                } else if (u_channel == 7) {\
                    color = labToRgb(1.0-u_amount.y, 1.0-v_texCoord.y, u_amount.x);\
                } else if (u_channel == 6) {\
                    color = labToRgb(1.0-v_texCoord.y, u_amount.x, 1.0-u_amount.y);\
                } else if (u_channel == 5) {\
                    color = hsvToRgb(u_amount.x, 1.0-u_amount.y, 1.0-v_texCoord.y);\
                } else if (u_channel == 4) {\
                    color = hsvToRgb(u_amount.x, 1.0-v_texCoord.y, 1.0-u_amount.y);\
                } else if (u_channel == 3) {\
                    color = hsvToRgb(1.0-v_texCoord.y, 1.0, 1.0);\
                } else if (u_channel == 2) {\
                    color = vec4(u_amount.x, 1.0-u_amount.y, 1.0-v_texCoord.y, 1.0);\
                } else if (u_channel == 1) {\
                    color = vec4(1.0-u_amount.y, 1.0-v_texCoord.y, u_amount.x, 1.0);\
                } else {\
                    color = vec4(1.0-v_texCoord.y, 1.0-u_amount.y, u_amount.x, 1.0);\
                }\
                if (u_web == 1) {\
                    gl_FragColor.r = toWeb(color.r);\
                    gl_FragColor.g = toWeb(color.g);\
                    gl_FragColor.b = toWeb(color.b);\
                    gl_FragColor.a = color.a;\
                } else if (u_web == 2) {\
                    vec3 v = toHTML(color.r, color.g, color.b);\
                    gl_FragColor.r = v.x;\
                    gl_FragColor.g = v.y;\
                    gl_FragColor.b = v.z;\
                    gl_FragColor.a = color.a;\
                } else gl_FragColor = color;\
            }\
        ');
        this.gl.linkProgram(this.Program);
        this.PositionLocation = this.gl.getAttribLocation(this.Program, 'a_position');
        this.TexCoordLocation = this.gl.getAttribLocation(this.Program, 'a_texCoord');
        this.PositionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.PositionBuffer);
        this.setRectangle(0, 0, this.Canvas.width, this.Canvas.height);
        this.TexCoordBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.TexCoordBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
          0.0,  0.0,
          1.0,  0.0,
          0.0,  1.0,
          0.0,  1.0,
          1.0,  0.0,
          1.0,  1.0,
        ]), this.gl.STATIC_DRAW);
        this.AmountLocation = this.gl.getUniformLocation(this.Program, "u_amount");
        this.ChannelLocation = this.gl.getUniformLocation(this.Program, "u_channel");
        this.WebLocation = this.gl.getUniformLocation(this.Program, "u_web");
        this.ResolutionLocation = this.gl.getUniformLocation(this.Program, "u_resolution");
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.clear();
        this.gl.useProgram(this.Program);
        this.gl.enableVertexAttribArray(this.PositionLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.PositionBuffer);
        this.gl.vertexAttribPointer(this.PositionLocation, 2, this.gl.FLOAT, false, 0, 0);
        this.gl.enableVertexAttribArray(this.TexCoordLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.TexCoordBuffer);
        this.gl.vertexAttribPointer(this.TexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
        this.gl.uniform2f(this.ResolutionLocation, this.gl.canvas.width, this.gl.canvas.height);
        this.update(channel, amount, web);
    }
    draw() {
        var primitiveType = this.gl.TRIANGLES;
        var offset = 0;
        var count = 6;
        this.gl.drawArrays(primitiveType, offset, count);
    }
    update(channel, amount, web) {
        this.gl.uniform1i(this.ChannelLocation, channel);
        this.gl.uniform2fv(this.AmountLocation, amount);
        this.gl.uniform1i(this.WebLocation, web);
        this.draw();
    }
    clear() {
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    setRectangle(x, y, width, height) {
        var x1 = x;
        var x2 = x + width;
        var y1 = y;
        var y2 = y + height;
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
            x1, y1,
            x2, y1,
            x1, y2,
            x1, y2,
            x2, y1,
            x2, y2,
        ]), this.gl.STATIC_DRAW);
    }
    createShader(type, code) {
        var shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, code);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.log(code);
            throw 'Compile error: ' + this.gl.getShaderInfoLog(shader);
        }
        this.gl.attachShader(this.Program, shader);
        return shader;
    }
}

class CSGLSquareDragger {
    constructor(selector, onchange) {
        var self = this;
        if (typeof onchange !== 'function') {
            this.onChange = function (x, y) {
                console.log([x,y]);
            }
        } else this.onChange = onchange;
        this.Offset = {X:7, Y:7};
        this.Max = {X:262, Y:262};
        this.Square = $(selector);
        this.Square.data('dragger', this);
        this.Circle = this.Square.children('circle');
        this.StartX = 0;
        this.StartY = 0;
        this.X = 0;
        this.Y = 0;
        self.onChange(this.X, this.Y);
        this.IsDown = false;
        this.Square.on('mousedown', function (e) {
            self.IsDown = true;
            self.StartX = e.pageX - self.Square.offset().left;
            self.StartY = e.pageY - self.Square.offset().top;
            if (self.StartX < self.Offset.X) self.StartX = self.Offset.X;
            if (self.StartY < self.Offset.Y) self.StartY = self.Offset.Y;
            if (self.StartX > self.Max.X) self.StartX = self.Max.X;
            if (self.StartY > self.Max.Y) self.StartY = self.Max.Y;
            self.X = self.StartX - self.Offset.X;
            self.Y = self.StartY - self.Offset.Y;
            self.Circle.attr('cx', Math.round(self.StartX));
            self.Circle.attr('cy', Math.round(self.StartY));
            self.onChange(self.X, self.Y);
            $(document).on('mousemove', function(e) {
                if (self.IsDown) {
                    var posX = e.pageX - self.Square.offset().left;
                    var posY = e.pageY - self.Square.offset().top;
                    if (posX < self.Offset.X) posX = self.Offset.X;
                    if (posY < self.Offset.Y) posY = self.Offset.Y;
                    if (posX > self.Max.X) posX = self.Max.X;
                    if (posY > self.Max.Y) posY = self.Max.Y;
                    self.X = posX - self.Offset.X;
                    self.Y = posY - self.Offset.Y;
                    self.Circle.attr('cx', Math.round(posX));
                    self.Circle.attr('cy', Math.round(posY));
                    self.onChange(self.X, self.Y);
                }
            });
            $(document).on('mouseup', function() {
                self.IsDown = false;
                $(document).off('mousemove');
                $(document).off('mouseup');
            });
            return false;
        });
    }
    valX() {
        return this.X;
    }
    valY() {
        return this.Y;
    }
    update(x, y) {
        console.log('CSGLSquareDragger.update');
        x=Math.min(Math.max(x,0),255);
        y=Math.min(Math.max(y,0),255);
        this.Y = y;
        this.X = x;
        this.Circle.attr('cx', Math.round(this.X + this.Offset.X));
        this.Circle.attr('cy', Math.round(this.Y + this.Offset.Y));
        this.onChange(x,y);
    }
}

class CSGLBarDragger {
    constructor(selector, onchange) {
        var self = this;
        if (typeof onchange !== 'function') {
            this.onChange = function (y) {
                console.log(y);
            }
        } else this.onChange = onchange;
        this.Offset = {Y:0};
        this.Max = {Y:255};
        this.Bar = $(selector);
        this.Bar.data('dragger', this);
        this.Dragger = this.Bar.children('div');
        this.StartY = 0;
        this.Y = 0;
        self.onChange(255-this.Y);
        this.IsDown = false;
        this.Bar.on('mousedown', function (e) {
            self.IsDown = true;
            self.StartY = e.pageY - self.Bar.offset().top-5;
            if (self.StartY < self.Offset.Y) self.StartY = self.Offset.Y;
            if (self.StartY > self.Max.Y) self.StartY = self.Max.Y;
            self.Y = self.StartY;
            self.Dragger.css('top', Math.round(self.StartY));
            self.onChange(255-self.Y);
            $(document).on('mousemove', function(e) {
                if (self.IsDown) {
                    var posY = e.pageY - self.Bar.offset().top-5;
                    if (posY < self.Offset.Y) posY = self.Offset.Y;
                    if (posY > self.Max.Y) posY = self.Max.Y;
                    self.Y = posY;
                    self.Dragger.css('top', Math.round(posY));
                    self.onChange(255-self.Y);
                }
            });
            $(document).on('mouseup', function() {
                self.IsDown = false;
                $(document).off('mousemove');
                $(document).off('mouseup');
            });
            return false;
        });
    }
    update(y) {
        console.log('CSGLBarDragger.update');
        y=Math.min(Math.max(y,0),255);
        this.Y = 255-y;
        this.Dragger.css('top', Math.round(this.Y));
        this.onChange(y);
    }
    val() {
        return 255-this.Y;
    }
}