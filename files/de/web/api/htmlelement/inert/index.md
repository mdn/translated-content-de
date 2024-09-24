---
title: "HTMLElement: inert-Eigenschaft"
short-title: inert
slug: Web/API/HTMLElement/inert
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ APIRef("HTML DOM") }}

Die **`inert`**-Eigenschaft des {{domxref("HTMLElement")}} spiegelt den Wert des [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attributs des Elements wider. Es handelt sich um einen booleschen Wert, der, wenn vorhanden, den Browser dazu veranlasst, Benutzereingabeereignisse für das Element, einschließlich Fokuserereignissen und Ereignissen von unterstützenden Technologien, zu "ignorieren". Der Browser kann auch die Seitensuche und Textauswahl im Element ignorieren. Dies kann nützlich sein, wenn Sie Benutzeroberflächen wie Modals erstellen, bei denen Sie den Fokus im sichtbaren Modal "einsperren" möchten.

> [!NOTE]
> Verschachteln Sie keine interaktiven Elemente oder wichtigen Inhalte innerhalb von Elementen mit dem `inert`-Attribut, da inerte Inhalte und deren Nachkommen für alle Benutzer weder fokussierbar noch wahrnehmbar sind.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Element inert ist; andernfalls ist der Wert `false`.

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
> Dieses Attribut bewirkt allein keine visuelle Änderung des Inhalts, wie im Browser angezeigt. Im obigen Beispiel wurde CSS angewendet, damit alle direkten Nachkommen eines Elements mit dem inert-Attribut halbtransparent dargestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Globales Attribut: `inert`](/de/docs/Web/HTML/Global_attributes/inert)
- {{HTMLElement("dialog")}}
- [Inert Polyfill](https://github.com/WICG/inert)
- {{domxref("HTMLInputElement.disabled", "disabled")}}
