var $1JSLv$react = require("react");
var $1JSLv$emojimart = require("emoji-mart");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $be92a0095b219678$export$2e2bcd8739ae039);

// 커스텀 이모지 정의
const customEmojis = [
  {
    id: 'custom',
    name: 'Custom Emojis',
    emojis: [
      {
        id: 'my_custom_emoji_1',
        name: 'My Custom Emoji 1',
        keywords: ['custom', 'emoji1'],
        skins: [{ src: 'https://github.com/Slime-Inc7/ui/blob/master/es/EmojiPicker/1.png?raw=true' }],
      },
      {
        id: 'my_custom_emoji_2',
        name: 'My Custom Emoji 2',
        keywords: ['custom', 'emoji2'],
        skins: [{ src: 'https://github.com/Slime-Inc7/ui/blob/master/es/EmojiPicker/2.png?raw=true' }],
      },
      {
        id: 'my_custom_emoji_3',
        name: 'My Custom Emoji 3',
        keywords: ['custom', 'emoji3'],
        skins: [{ src: 'https://github.com/Slime-Inc7/ui/blob/master/es/EmojiPicker/3.png?raw=true' }],
      },
      {
        id: 'my_custom_emoji_4',
        name: 'My Custom Emoji 4',
        keywords: ['custom', 'emoji4'],
        skins: [{ src: 'https://github.com/Slime-Inc7/ui/blob/master/es/EmojiPicker/4.png?raw=true' }],
      },
    ],
  },
];

function $be92a0095b219678$export$2e2bcd8739ae039(props) {
    const ref = (0, $1JSLv$react.useRef)(null);
    const instance = (0, $1JSLv$react.useRef)(null);
    if (instance.current) instance.current.update(props);
    (0, $1JSLv$react.useEffect)(()=>{
        instance.current = new (0, $1JSLv$emojimart.Picker)({
            ...props,
            ref: ref,
            data: { ...props.data, frequent: props.data.frequent || [], custom: customEmojis } // frequent 및 custom 이모지 추가
        });
        return ()=>{
            instance.current = null;
        };
    }, []);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($1JSLv$react))).createElement("div", {
        ref: ref
    });
}
