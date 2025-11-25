---
title: "CSSImportRule: media-Eigenschaft"
short-title: media
slug: Web/API/CSSImportRule/media
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`media`**-Eigenschaft der [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück, das die Medienabfrage-Liste der {{cssxref("@import")}}-Regel darstellt.

## Wert

Ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt.

Obwohl die `media`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `MediaList`-Objekt nicht ersetzen können, können Sie der `media`-Eigenschaft direkt einen Wert zuweisen, was gleichbedeutend ist mit dem Zuweisen zu ihrer [`mediaText`](/de/docs/Web/API/MediaList/mediaText)-Eigenschaft. Sie können das `MediaList`-Objekt auch mit den Methoden [`appendMedium()`](/de/docs/Web/API/MediaList/appendMedium) und [`deleteMedium()`](/de/docs/Web/API/MediaList/deleteMedium) ändern.

## Beispiele

### Die media-Eigenschaft abrufen

Folgendes Stylesheet enthält eine einzelne {{cssxref("@import")}}-Regel. Daher wird das erste Element in der Liste der CSS-Regeln eine `CSSImportRule` sein. Die `media`-Eigenschaft gibt ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt zurück. Dies beinhaltet die `mediaText`-Eigenschaft mit einem Wert von `screen`.

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
