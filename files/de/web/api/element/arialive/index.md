---
title: "Element: ariaLive-Eigenschaft"
short-title: ariaLive
slug: Web/API/Element/ariaLive
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaLive`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Attributs wider, welches angibt, dass ein Element aktualisiert wird und beschreibt, welche Art von Updates die Benutzeragenten, unterstützende Technologien und der Benutzer von der [Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) erwarten können.

## Wert

Ein String mit einem der folgenden Werte:

- `"assertive"`
  - : Gibt an, dass Updates an der Region höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `"off"`
  - : Gibt an, dass Updates an der Region dem Benutzer nicht präsentiert werden sollten, es sei denn, der Benutzer fokussiert sich gerade auf diese Region.
- `"polite"`
  - : Gibt an, dass Updates an der Region bei nächster Gelegenheit in einer angemessenen Weise präsentiert werden sollten, z. B. am Ende des aktuellen Satzes oder wenn der Benutzer eine Pause beim Tippen macht.

## Beispiele

In diesem Beispiel wird das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Attribut des Elements mit der ID `planetInfo` auf `"polite"` gesetzt. Dann aktualisieren wir den Wert auf `"assertive"`.

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
