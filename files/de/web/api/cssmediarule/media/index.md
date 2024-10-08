---
title: "CSSMediaRule: media-Eigenschaft"
short-title: media
slug: Web/API/CSSMediaRule/media
l10n:
  sourceCommit: 93e261e5ac12505ce7a8654d158e42482ee14f5f
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`media`**-Eigenschaft der
[`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Schnittstelle gibt eine [`MediaList`](/de/docs/Web/API/MediaList) zurück, die das vorgesehene
Zielmedium für Stilinformationen darstellt.

## Wert

eine [`MediaList`](/de/docs/Web/API/MediaList)

## Beispiele

Das CSS enthält eine Media Query mit einer Stilregel. Dies wird die erste
[`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
Ein Aufruf von `myRules[0].media` gibt daher ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt
zurück, das die Media Query darstellt.

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
