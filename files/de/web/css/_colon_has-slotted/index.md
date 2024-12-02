---
title: ":has-slotted"
slug: Web/CSS/:has-slotted
l10n:
  sourceCommit: f47d71927e4dc46f3aabde0a56c7f940da988d9f
---

{{CSSRef}}

Die **`:has-slotted`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) matcht, wenn der Inhalt eines {{HTMLElement("slot")}}-Elements nicht leer ist oder nicht den Standardwert verwendet (siehe [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) für weitere Informationen).

> [!NOTE] Sogar ein einzelnes Leerzeichen-Textknoten reicht aus, damit `:has-slotted` angewendet wird.

Dies funktioniert nur, wenn es innerhalb von CSS verwendet wird, das im [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) platziert ist.

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

Dieses Beispiel enthält zwei `<slot>`-Elemente, von denen eines Inhalte zugewiesen bekommen hat und das andere nicht.

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

Das `<slot>`-Element, dem Inhalte zugewiesen wurden, hat die `:has-slotted` Pseudo-Klasse gematcht und der `color`-Wert `rebeccapurple` wurde angewendet.

{{EmbedLiveSample("simple_example",100,300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("template")}}-Element
- HTML {{HTMLElement("slot")}}-Element
- {{CSSXRef("::slotted")}}
