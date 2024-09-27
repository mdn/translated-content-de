---
title: "HTMLElement: inert-Eigenschaft"
short-title: inert
slug: Web/API/HTMLElement/inert
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft **`inert`** spiegelt den Wert des [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attributs des Elements wider. Es handelt sich um einen booleschen Wert, der, wenn vorhanden, bewirkt, dass der Browser Benutzereingabeveranstaltungen für das Element "ignoriert", einschließlich Fokussierung und Ereignissen von unterstützenden Technologien. Der Browser kann auch die Seitensuche und die Textauswahl im Element ignorieren. Dies kann nützlich sein, wenn Sie Benutzeroberflächen wie Modale erstellen, bei denen der Fokus im sichtbaren Modal "eingefangen" werden soll.

> [!NOTE]
> Verschachteln Sie keine interaktiven Elemente oder wichtigen Inhalte in Elementen mit dem `inert`-Attribut, da inerte Inhalte und deren Nachkommen weder fokussierbar noch für alle Benutzer wahrnehmbar sind.

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
> Dieses Attribut allein wird keine visuelle Änderung des Inhalts im Browser bewirken. Im obigen Beispiel wurde CSS angewendet, sodass jeder direkte Nachkomme eines Elements mit dem inert-Attribut halbtransparent dargestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Globales Attribut: `inert`](/de/docs/Web/HTML/Global_attributes/inert)
- {{HTMLElement("dialog")}}
- [Inert Polyfill](https://github.com/WICG/inert)
- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)
