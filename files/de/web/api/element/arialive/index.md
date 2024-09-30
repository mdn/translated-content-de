---
title: "Element: ariaLive-Eigenschaft"
short-title: ariaLive
slug: Web/API/Element/ariaLive
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaLive`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Attributs wider. Dieses Attribut zeigt an, dass ein Element aktualisiert wird und beschreibt die Art der Aktualisierungen, die von Benutzeragenten, Unterstützungssoftware und Benutzern in der [Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) erwartet werden können.

## Wert

Ein String mit einem der folgenden Werte:

- `"assertive"`
  - : Gibt an, dass Aktualisierungen der Region höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `"off"`
  - : Gibt an, dass Aktualisierungen der Region dem Benutzer nicht präsentiert werden sollten, es sei denn, der Benutzer fokussiert sich gerade auf diese Region.
- `"polite"`
  - : Gibt an, dass Aktualisierungen der Region bei der nächsten passender Gelegenheit präsentiert werden sollten, z.B. am Ende des aktuellen Satzes oder wenn der Benutzer das Tippen unterbricht.

## Beispiele

In diesem Beispiel wird das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Attribut des Elements mit der ID `planetInfo` auf `"polite"` gesetzt. Anschließend ändern wir den Wert auf `"assertive"`.

```html
<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">No planet selected</h2>
  <p id="planetDescription">Select a planet to view its description</p>
</div>
```

```js
let el = document.getElementById("planetInfo");
console.log(el.ariaLive); // "polite"
el.ariaLive = "assertive";
console.log(el.ariaLive); // "assertive"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
