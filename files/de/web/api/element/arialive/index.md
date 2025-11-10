---
title: "Element: ariaLive-Eigenschaft"
short-title: ariaLive
slug: Web/API/Element/ariaLive
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaLive`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Attributs wider, das angibt, dass ein Element aktualisiert wird, und die Arten von Updates beschreibt, die Benutzeragenten, unterstützende Technologien und der Benutzer von der [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) erwarten können.

## Wert

Ein String mit einem der folgenden Werte:

- `"assertive"`
  - : Gibt an, dass Updates in dieser Region höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `"off"`
  - : Gibt an, dass Updates in dieser Region dem Benutzer nur präsentiert werden sollten, wenn der Benutzer gerade auf diese Region fokussiert ist.
- `"polite"`
  - : Gibt an, dass Updates in dieser Region dem Benutzer bei der nächsten günstigen Gelegenheit präsentiert werden sollten, z.B. am Ende des aktuellen Satzes oder wenn der Benutzer eine Pause beim Tippen macht.

## Beispiele

In diesem Beispiel wird das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Attribut auf dem Element mit der ID `planetInfo` auf `"polite"` gesetzt. Wir ändern dann den Wert auf `"assertive"`.

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
