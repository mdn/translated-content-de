---
title: "HTMLElement: inert-Eigenschaft"
short-title: inert
slug: Web/API/HTMLElement/inert
l10n:
  sourceCommit: 694a813ca116ab209166ac162fe2fa59a9d20e55
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft **`inert`** spiegelt den Wert des [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attributs des Elements wider. Es handelt sich um einen booleschen Wert, der, wenn er vorhanden ist, den Browser dazu veranlasst, Benutzerinteraktionen für das Element zu "ignorieren". Dazu gehören Fokusevents und Ereignisse von unterstützenden Technologien. Der Browser kann außerdem Such- und Textauswahlfunktionen auf der Seite für das betreffende Element ignorieren. Dies kann nützlich sein, wenn Sie Benutzeroberflächen wie Modals erstellen, bei denen der Fokus innerhalb des Modals gefangen bleiben soll, solange dieses sichtbar ist.

Beachten Sie, dass das Element auch dann Trägheit („inertness“) von seinem Eltern-Element erben kann, wenn das `inert`-Attribut nicht angegeben ist. Diese geerbte Trägheit wird jedoch nicht durch den Wert dieser Eigenschaft widergespiegelt.

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
> Dieses Attribut bewirkt für sich allein keine visuelle Veränderung des Inhalts, wie er im Browser angezeigt wird. Im obigen Beispiel wurde CSS angewendet, um direkte Nachkommen eines Elements mit dem `inert`-Attribut halbtransparent darzustellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Globales Attribut: `inert`](/de/docs/Web/HTML/Global_attributes/inert)
- {{HTMLElement("dialog")}}
- [Inert Polyfill](https://github.com/WICG/inert)
- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)
