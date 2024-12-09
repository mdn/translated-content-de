---
title: ":has-slotted"
slug: Web/CSS/:has-slotted
l10n:
  sourceCommit: 60b9445fef4448368dbc2cf6333ba22a9a8d092b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`:has-slotted`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) trifft zu, wenn der Inhalt eines {{HTMLElement("slot")}}-Elements nicht leer ist oder nicht den Standardwert verwendet (siehe [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) für weitere Informationen).

> [!NOTE] Selbst ein einzelnes Leerzeichen-Textknoten genügt, damit `:has-slotted` angewendet wird.

Dies funktioniert nur, wenn es in CSS verwendet wird, das innerhalb eines [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) platziert ist.

```css
/* Selects the content of a <slot> element that has content that is not default  */
:has-slotted {
  color: green;
}

/* Selects the content of a <slot> element that has no content or default  */
:not(:has-slotted) {
  color: red;
}
```

## Syntax

```css-nolint
:has-slotted {
  /* ... */
}
```

## Beispiele

Dieses Beispiel enthält zwei `<slot>`-Elemente, von denen einem Inhalt zugewiesen wurde und dem anderen nicht.

### HTML

```html
<p>
  <template shadowrootmode="open">
    <style>
      :has-slotted {
        color: rebeccapurple;
      }
    </style>
    <slot name="one">Placeholder 1</slot>
    <slot name="two">Placeholder 2</slot>
  </template>
  <span slot="one">Slotted content</span>
</p>
```

### Ergebnis

Das `<slot>`-Element, dem Inhalt zugewiesen wurde, entspricht der `:has-slotted` Pseudo-Klasse und hat den `color` Wert `rebeccapurple` angewendet.

{{EmbedLiveSample("simple_example",100,300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("template")}} Element
- HTML {{HTMLElement("slot")}} Element
- {{CSSXRef("::slotted")}}
