---
title: "CSSImportRule: media-Eigenschaft"
short-title: media
slug: Web/API/CSSImportRule/media
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`media`**-Eigenschaft der [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück, das den Wert des `media`-Attributs des zugehörigen Stylesheets enthält.

## Wert

Gibt ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück.

Der Wert von `media` kann festgelegt werden, indem ein String übergeben wird, der das `media`-Attribut enthält; beispielsweise `"print"`.

## Beispiele

### Abrufen der media-Eigenschaft

Das folgende Stylesheet enthält eine einzelne {{cssxref("@import")}}-Regel. Daher wird das erste Element in der Liste der CSS-Regeln eine `CSSImportRule` sein. Die `media`-Eigenschaft gibt ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück. Dies beinhaltet die `mediaText`-Eigenschaft mit einem Wert von `screen`.

```css
@import url("style.css") screen;
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].media); //returns a MediaList
```

### Festlegen der media-Eigenschaft

Um das `media`-Attribut des zugehörigen Stylesheets zu ändern, setzen Sie den Wert von `media` auf einen String mit dem neuen Wert.

```js
let myRules = document.styleSheets[0].cssRules;
myRules[0].media = "print";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
