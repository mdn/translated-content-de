---
title: "HTMLElement: inert-Eigenschaft"
short-title: inert
slug: Web/API/HTMLElement/inert
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft **`inert`** spiegelt den Wert des [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attributs des Elements wider. Es handelt sich um einen booleschen Wert, der, wenn er vorhanden ist, den Browser veranlasst, Benutzereingabeereignisse für das Element zu "ignorieren", einschließlich Fokussiervorgänge und Ereignisse von unterstützenden Technologien. Der Browser kann auch die Seitensuche und die Textauswahl im Element ignorieren. Dies kann nützlich sein, wenn UIs gebaut werden, wie zum Beispiel Modals, bei denen der Fokus eingefangen werden soll, wenn das Modal sichtbar ist.

Beachten Sie, dass, wenn das `inert`-Attribut nicht angegeben ist, das Element selbst immer noch Inertheit von seinem Elternteil erben kann. Diese geerbte Inertheit wird jedoch nicht durch den Wert dieser Eigenschaft widergespiegelt.

## Wert

Ein Boolescher Wert, der `true` ist, wenn das Element inert ist; andernfalls ist der Wert `false`.

## Beispiel

### HTML

```html
<div>
  <label for="button1">Button 1</label>
  <button id="button1">I am not inert</button>
</div>
<div inert>
  <label for="button2">Button 2</label>
  <button id="button2">I am inert</button>
</div>
```

### CSS

```css
[inert] > * {
  opacity: 0.5;
}
```

{{ EmbedLiveSample('Example', 560, 200) }}

> [!NOTE]
> Dieses Attribut allein wird keine visuelle Änderung des Inhalts verursachen, wie er im Browser angezeigt wird. Im obigen Beispiel wurde CSS angewendet, sodass jeder direkte Nachfahre eines Elements mit dem inert-Attribut halbtransparent gerendert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Globales Attribut: `inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
- {{HTMLElement("dialog")}}
- [Inert Polyfill](https://github.com/WICG/inert)
- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)
