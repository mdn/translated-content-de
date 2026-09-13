---
title: "ARIA: Rolle definition"
short-title: definition
slug: Web/Accessibility/ARIA/Reference/Roles/definition_role
l10n:
  sourceCommit: ceb2902838a2752d55e05158584426dd342911c5
---

Die ARIA-Rolle `definition` gibt an, dass das Element die Definition eines Begriffs oder Konzepts ist.

## Beschreibung

Die ARIA-Rolle `definition` kann in ein Element aufgenommen werden, das die Definition eines Begriffs oder Konzepts ist. Kennzeichnen Sie den definierten Begriff mit `role="term"` oder dem nativen {{HTMLElement("dfn")}}-Element. Um den Begriff mit seiner Definition zu verknüpfen, setzen Sie [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) auf dem `term`-Element auf die `id` des `definition`-Elements.

Elemente mit der Rolle `definition` dürfen keinen {{Glossary("accessible_name", "zugänglichen Namen")}} haben; die Eigenschaften [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel), [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) sind nicht zulässig.

```html-nolint
<p>
  <span role="term">Mansplaining</span>,
  <span role="definition">
    a portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it
  </span>.
</p>
```

> [!NOTE]
> Verwenden Sie statt eines `<span>` mit den Rollen [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) und `definition` das {{HTMLElement('dfn')}}-Element. **Verwenden Sie immer ein natives Element, wenn verfügbar.**

```html
<p>
  <dfn>Mansplaining</dfn>, a portmanteau of "man" and "explain", is the
  patronizing act of explaining without being asked to do so, to someone already
  learned on the topic, often after someone has already explained it.
</p>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die Rolle `term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- Das {{HTMLElement('dfn')}}-Element
- Das {{HTMLElement('dd')}}-Element
- Das {{HTMLElement('dl')}}-Element
- Das {{HTMLElement('dt')}}-Element
