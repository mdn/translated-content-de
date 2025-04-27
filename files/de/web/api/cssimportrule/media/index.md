---
title: "CSSImportRule: media-Eigenschaft"
short-title: media
slug: Web/API/CSSImportRule/media
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`media`**-Eigenschaft des
[`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Interfaces gibt ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück,
das den Wert des `media`-Attributs des zugehörigen Stylesheets enthält.

## Wert

Gibt ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück.

Der Wert von `media` kann festgelegt werden, indem eine Zeichenkette übergeben wird, die das `media`-Attribut enthält; zum Beispiel `"print"`.

## Beispiele

### Abrufen der media-Eigenschaft

Das folgende Stylesheet enthält eine einzige {{cssxref("@import")}}-Regel. Daher wird das
erste Element in der Liste der CSS-Regeln eine `CSSImportRule` sein. Die
`media`-Eigenschaft gibt ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück. Dies schließt
die `mediaText`-Eigenschaft mit einem Wert von `screen` ein.

```css
@import url("style.css") screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].media); // A MediaList
```

### Festlegen der media-Eigenschaft

Um das `media`-Attribut des zugehörigen Stylesheets zu ändern, setzen Sie den Wert von `media` auf eine Zeichenkette mit dem neuen Wert.

```js
const myRules = document.styleSheets[0].cssRules;
myRules[0].media = "print";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
