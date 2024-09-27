---
title: "ARIA: definition Rolle"
slug: Web/Accessibility/ARIA/Roles/definition_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `definition` ARIA-Rolle zeigt an, dass das Element eine Definition eines Begriffs oder Konzepts ist.

## Beschreibung

Die `definition` ARIA-Rolle kann auf ein Element angewendet werden, das eine Definition eines Begriffs oder Konzepts darstellt, ähnlich dem nativen {{HTMLElement('dfn')}}-Element. Um die Definition mit dem definierten `term` zu verknüpfen und um einen zugänglichen Namen bereitzustellen, beziehen Sie sich auf den definierten Begriff mit `role="term"` und verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby).

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
> Anstatt eines `<span>` mit den Rollen [`term`](/de/docs/Web/Accessibility/ARIA/Roles/term_role) und `definition` verwenden Sie das {{HTMLElement('dfn')}}-Element. **Verwenden Sie immer native Elemente, wenn verfügbar.**

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

- [Die `term` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/term_role)
- Das {{HTMLElement('dfn')}}-Element
- Das {{HTMLElement('dd')}}-Element
- Das {{HTMLElement('dl')}}-Element
- Das {{HTMLElement('dt')}}-Element
