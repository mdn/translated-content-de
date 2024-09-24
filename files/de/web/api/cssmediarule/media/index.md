---
title: "CSSMediaRule: Media-Eigenschaft"
short-title: Medien
slug: Web/API/CSSMediaRule/media
l10n:
  sourceCommit: 93e261e5ac12505ce7a8654d158e42482ee14f5f
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`media`**-Eigenschaft der
{{domxref("CSSMediaRule")}}-Schnittstelle gibt eine {{domxref("MediaList")}} zurück, die das vorgesehene Zielmedium für Stilinformationen darstellt.

## Wert

eine {{domxref("MediaList")}}

## Beispiele

Das CSS enthält eine Medienabfrage mit einer Stilregel. Dies wird die erste
{{domxref("CSSRule")}} sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
Der Aufruf von `myRules[0].media` gibt daher ein {{domxref("MediaList")}}-Objekt zurück, das die Medienabfrage darstellt.

```css
@media (min-width: 500px) {
  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].media); // a MediaList
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
