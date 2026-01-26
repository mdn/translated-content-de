---
title: "CSSMediaRule: media-Eigenschaft"
short-title: media
slug: Web/API/CSSMediaRule/media
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`media`**-Eigenschaft des [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Interfaces enthält ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt, das die Media-Query-Liste der {{cssxref("@media")}}-Regel darstellt.

## Wert

Ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt.

Obwohl die `media`-Eigenschaft selbst insofern schreibgeschützt ist, als Sie das `MediaList`-Objekt nicht ersetzen können, können Sie dennoch direkt der `media`-Eigenschaft einen Wert zuweisen, was gleichbedeutend mit der Zuweisung zu ihrer [`mediaText`](/de/docs/Web/API/MediaList/mediaText)-Eigenschaft ist. Sie können auch das `MediaList`-Objekt mit den Methoden [`appendMedium()`](/de/docs/Web/API/MediaList/appendMedium) und [`deleteMedium()`](/de/docs/Web/API/MediaList/deleteMedium) modifizieren.

## Beispiele

Der CSS-Code enthält eine Media-Query mit einer Stilregel. Diese wird die erste
[`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
Ein Aufruf von `myRules[0].media` gibt daher ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück, das die Media-Query darstellt.

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
