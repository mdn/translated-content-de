---
title: "CSSMediaRule: media-Eigenschaft"
short-title: media
slug: Web/API/CSSMediaRule/media
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`media`**-Eigenschaft des
[`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Interfaces gibt eine [`MediaList`](/de/docs/Web/API/MediaList) zurück, die das beabsichtigte Zielmedium für Stilinformationen darstellt.

## Wert

eine [`MediaList`](/de/docs/Web/API/MediaList)

## Beispiele

Das CSS enthält eine Media Query mit einer Stilregel. Dies wird die erste
[`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
Der Aufruf von `myRules[0].media` gibt daher ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück, das die Media Query darstellt.

```css
@media (width >= 500px) {
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
