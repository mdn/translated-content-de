---
title: "HTMLElement: inert-Eigenschaft"
short-title: inert
slug: Web/API/HTMLElement/inert
l10n:
  sourceCommit: 546838eed3bce965975e8c85f193dbd2a241db7c
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft **`inert`** spiegelt den Wert des [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) Attributs des Elements wider. Es handelt sich um einen booleschen Wert, der, wenn er vorhanden ist, bewirkt, dass der Browser Benutzereingabeereignisse für das Element "ignoriert", einschließlich Fokuserereignisse und Ereignisse von unterstützenden Technologien. Der Browser kann auch die Seitensuche und Textauswahl im Element ignorieren. Dies kann nützlich sein, wenn Sie Benutzeroberflächen wie Modale erstellen, bei denen Sie den Fokus auf das sichtbare Modal "fesseln" möchten.

Beachten Sie, dass, wenn das `inert` Attribut nicht angegeben ist, das Element selbst möglicherweise immer noch Inertheit von seinem übergeordneten Element erbt. Diese geerbte Inertheit wird jedoch nicht durch den Wert dieser Eigenschaft widergespiegelt. Das explizite Setzen der Eigenschaft auf `false` kann die von dem übergeordneten Element geerbte Inertheit nicht aufheben.

## Wert

Ein Boolean, der `true` ist, wenn das Element inert ist; andernfalls ist der Wert `false`.

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
> Dieses Attribut allein verursacht keine visuelle Änderung des Inhalts, wie er im Browser angezeigt wird. Im obigen Beispiel wurde CSS angewendet, sodass alle direkten Nachkommen eines Elements mit dem inert-Attribut halbtransparent gerendert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Globales Attribut: `inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
- {{HTMLElement("dialog")}}
- [Inert Polyfill](https://github.com/WICG/inert)
- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)
