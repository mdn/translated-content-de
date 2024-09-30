---
title: "ARIA: definition Rolle"
slug: Web/Accessibility/ARIA/Roles/definition_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `definition` ARIA-Rolle gibt an, dass das Element eine Definition eines Begriffs oder Konzepts ist.

## Beschreibung

Die `definition` ARIA-Rolle kann auf ein Element angewendet werden, das eine Definition eines Begriffs oder Konzepts ist, ähnlich wie das native {{HTMLElement('dfn')}}-Element. Um die Definition mit dem definierten `term` zu verknüpfen und einen zugänglichen Namen bereitzustellen, referenzieren Sie den definierten Begriff mit `role="term"`, unter Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby).

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
> Anstelle eines `<span>` mit den Rollen [`term`](/de/docs/Web/Accessibility/ARIA/Roles/term_role) und `definition`, verwenden Sie das {{HTMLElement('dfn')}}-Element. **Verwenden Sie immer das native Element, wenn verfügbar.**

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
