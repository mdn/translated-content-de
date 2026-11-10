---
title: CSS-Pseudoklasse `:has-slotted`
short-title: :has-slotted
slug: Web/CSS/Reference/Selectors/:has-slotted
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:has-slotted`** trifft zu, wenn der Inhalt eines {{HTMLElement("slot")}}-Elements nicht leer ist oder nicht den Standardwert verwendet (weitere Informationen finden Sie unter [Vorlagen und Slots verwenden](/de/docs/Web/API/Web_components/Using_templates_and_slots)).

> [!NOTE]
> Bereits ein einzelner Textknoten, der nur aus einem Leerzeichen besteht, reicht aus, damit `:has-slotted` zutrifft.

Dies funktioniert nur innerhalb von CSS, das sich in einem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) befindet.

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

Dieses Beispiel enthält zwei `<slot>`-Elemente. Einem davon wurde Inhalt zugewiesen, dem anderen nicht.

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

Das `<slot>`-Element, dem Inhalt zugewiesen wurde, entspricht der Pseudoklasse `:has-slotted`. Deshalb wird darauf der `color`-Wert `rebeccapurple` angewendet.

{{EmbedLiveSample("examples",100,70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element {{HTMLElement("template")}}
- HTML-Element {{HTMLElement("slot")}}
- {{CSSXRef("::slotted")}}
