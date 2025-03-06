---
title: "ARIA: `definition` Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/definition_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `definition` ARIA-Rolle weist darauf hin, dass das Element eine Definition eines Begriffs oder Konzepts ist.

## Beschreibung

Die `definition` ARIA-Rolle kann bei einem Element verwendet werden, das eine Definition eines Begriffs oder Konzepts darstellt, ähnlich wie das native {{HTMLElement('dfn')}}-Element. Um die Definition mit dem definierten `term` zu verknüpfen und einen zugänglichen Namen bereitzustellen, referenzieren Sie den definierten Begriff mit `role="term"`, indem Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwenden.

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
> Verwenden Sie anstelle eines `<span>`-Elements mit den Rollen [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) und `definition` das {{HTMLElement('dfn')}}-Element. **Verwenden Sie immer das native Element, wenn verfügbar.**

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

- [Die `term` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- Das {{HTMLElement('dfn')}}-Element
- Das {{HTMLElement('dd')}}-Element
- Das {{HTMLElement('dl')}}-Element
- Das {{HTMLElement('dt')}}-Element
