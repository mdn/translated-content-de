---
title: ":has-slotted"
slug: Web/CSS/:has-slotted
l10n:
  sourceCommit: f1f63785fbdd38339554b75cf03e4b8b3274bcbc
---

{{CSSRef}}

Die **`:has-slotted`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) trifft zu, wenn der Inhalt eines {{HTMLElement("slot")}}-Elements nicht leer ist oder nicht den Standardwert verwendet (siehe [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) für weitere Informationen).

> [!NOTE] Selbst ein einzelner Leerzeichentextknoten reicht aus, damit `:has-slotted` anwendbar ist.

Dies funktioniert nur, wenn es innerhalb von CSS verwendet wird, das sich im [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) befindet.

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

Dieses Beispiel enthält zwei `<slot>`-Elemente, von denen eines mit Inhalt belegt ist, während das andere keinen Inhalt hat.

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

Das `<slot>`-Element, dem Inhalt zugewiesen wurde, erfüllt die Bedingungen der `:has-slotted`-Pseudoklasse und hat den `color`-Wert `rebeccapurple` angewendet bekommen.

{{EmbedLiveSample("simple_example",100,70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element {{HTMLElement("template")}}
- HTML-Element {{HTMLElement("slot")}}
- {{CSSXRef("::slotted")}}
