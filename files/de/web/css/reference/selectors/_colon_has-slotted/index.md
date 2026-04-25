---
title: "`:has-slotted` CSS-Pseudoklasse"
short-title: :has-slotted
slug: Web/CSS/Reference/Selectors/:has-slotted
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:has-slotted`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) trifft zu, wenn der Inhalt eines {{HTMLElement("slot")}}-Elements nicht leer ist oder nicht den Standardwert verwendet (siehe [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) für mehr Informationen).

> [!NOTE]
> Selbst ein einzelner Leerzeichen-Textknoten reicht aus, damit `:has-slotted` angewendet wird.

Dies funktioniert nur, wenn es innerhalb von CSS verwendet wird, das sich im [Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) befindet.

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

Dieses Beispiel enthält zwei `<slot>`-Elemente, von denen eines Inhalt zugewiesen bekommen hat und das andere nicht.

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

Das `<slot>`-Element, dem Inhalt zugewiesen wurde, entspricht der `:has-slotted` Pseudoklasse und der `color`-Wert `rebeccapurple` wird angewendet.

{{EmbedLiveSample("simple_example",100,70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("template")}}-Element
- HTML {{HTMLElement("slot")}}-Element
- {{CSSXRef("::slotted")}}
