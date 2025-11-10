---
title: "Element: ariaSetSize-Eigenschaft"
short-title: ariaSetSize
slug: Web/API/Element/ariaSetSize
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaSetSize`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)-Attributs wider, welches die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen definiert.

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-setsize`-Attribut auf dem Element mit der ID `tab-id` auf "3" gesetzt, um einem Gerät mitzuteilen, dass es derzeit 3 Tabs in der Gruppe gibt. Mit `ariaSetSize` aktualisieren wir den Wert auf "4".

```html
<button
  role="tab"
  aria-selected="true"
  aria-setsize="3"
  aria-controls="tabpanel-id"
  id="tab-id">
  Tab label
</button>
```

```js
let el = document.getElementById("tab-id");
console.log(el.ariaSetSize); // 3
el.ariaSetSize = "4";
console.log(el.ariaSetSize); // 4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: tab-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
