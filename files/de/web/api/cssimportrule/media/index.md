---
title: "CSSImportRule: media-Eigenschaft"
short-title: media
slug: Web/API/CSSImportRule/media
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`media`**-Eigenschaft der [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück, welches den Wert des `media`-Attributes des zugehörigen Stylesheets enthält.

## Wert

Gibt ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück.

Der Wert von `media` kann gesetzt werden, indem ein String mit dem `media`-Attribut übergeben wird; zum Beispiel `"print"`.

## Beispiele

### Die media-Eigenschaft abrufen

Das folgende Stylesheet enthält eine einzelne {{cssxref("@import")}}-Regel. Daher wird das erste Element in der Liste der CSS-Regeln eine `CSSImportRule` sein. Die `media`-Eigenschaft gibt ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück. Dies beinhaltet die `mediaText`-Eigenschaft mit einem Wert von `screen`.

```css
@import "style.css" screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].media); // A MediaList
```

### Die media-Eigenschaft setzen

Um das `media`-Attribut des zugehörigen Stylesheets zu ändern, setzen Sie den Wert von `media` auf einen String mit dem neuen Wert.

```js
const myRules = document.styleSheets[0].cssRules;
myRules[0].media = "print";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
