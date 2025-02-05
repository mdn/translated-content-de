---
title: ":has-slotted"
slug: Web/CSS/:has-slotted
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{SeeCompatTable}}

Die **`:has-slotted`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) greift, wenn der Inhalt eines {{HTMLElement("slot")}}-Elements nicht leer ist oder keinen Standardwert verwendet (siehe [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) für weitere Informationen).

> [!NOTE] Selbst ein einzelner Leerzeichen-Textknoten reicht aus, damit `:has-slotted` angewendet wird.

Diese Pseudoklasse funktioniert nur, wenn sie innerhalb von CSS verwendet wird, das sich im [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) befindet.

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

Dieses Beispiel enthält zwei `<slot>`-Elemente, von denen eines mit Inhalt belegt wurde und das andere nicht.

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

Das `<slot>`-Element, dem Inhalt zugewiesen wurde, entspricht der Pseudoklasse `:has-slotted` und hat den `color`-Wert `rebeccapurple` erhalten.

{{EmbedLiveSample("simple_example",100,300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-{{HTMLElement("template")}}-Element
- HTML-{{HTMLElement("slot")}}-Element
- {{CSSXRef("::slotted")}}
