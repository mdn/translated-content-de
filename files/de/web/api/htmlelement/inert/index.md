---
title: "HTMLElement: inert-Eigenschaft"
short-title: inert
slug: Web/API/HTMLElement/inert
l10n:
  sourceCommit: 3ff38e7687b65e43fe821a904ff52778312b8d36
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft **`inert`** spiegelt den Wert des [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attributs des Elements wider. Es handelt sich um einen booleschen Wert, der, wenn er vorhanden ist, bewirkt, dass der Browser Benutzereingabeereignisse für das Element "ignoriert", einschließlich Fokuserereignisse und Ereignisse von unterstützenden Technologien. Der Browser kann auch die Seitensuche und die Textauswahl im Element ignorieren. Dies kann nützlich sein, wenn Sie Benutzeroberflächen wie Modals erstellen, bei denen Sie den Fokus im sichtbaren Modal "einfangen" möchten.

Beachten Sie, dass wenn das `inert`-Attribut nicht angegeben ist, das Element selbst möglicherweise dennoch Trägheit von seinem Elternteil erbt. Diese ererbte Trägheit wird jedoch nicht durch den Wert dieser Eigenschaft widergespiegelt. Die explizite Setzung der Eigenschaft auf `false` kann die von den Eltern geerbte Trägheit nicht rückgängig machen.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Element inert ist; andernfalls ist der Wert `false`.

## Beispiele

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

{{ EmbedLiveSample('Examples', 560, 200) }}

> [!NOTE]
> Dieses Attribut alleine wird keine visuelle Änderung des Inhalts bewirken, wie er im Browser angezeigt wird. Im obigen Beispiel wurde CSS angewendet, sodass jeder direkte Nachfahre eines Elements mit dem inert-Attribut halbtransparent dargestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Globales Attribut: `inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)
- {{HTMLElement("dialog")}}
- CSS {{cssxref("interactivity")}}-Eigenschaft
