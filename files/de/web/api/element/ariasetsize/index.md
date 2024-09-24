---
title: "Element: ariaSetSize-Eigenschaft"
short-title: ariaSetSize
slug: Web/API/Element/ariaSetSize
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaSetSize`**-Eigenschaft des {{domxref("Element")}}-Interfaces spiegelt den Wert des [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)-Attributes wider, welches die Anzahl der Elemente im aktuellen Set von Listenelementen oder Baumelementen definiert.

## Wert

Ein String, der eine Ganzzahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-setsize`-Attribut des Elements mit der ID `tab-id` auf "3" gesetzt, um einem Gerät mitzuteilen, dass sich derzeit 3 Tabs in der Gruppe befinden. Mit `ariaSetSize` aktualisieren wir den Wert auf "4".

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

- [ARIA: Tabrolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
