---
title: "ARIA: Rolle definition"
slug: Web/Accessibility/ARIA/Roles/definition_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `definition` ARIA-Rolle zeigt an, dass das Element eine Definition eines Begriffs oder Konzepts ist.

## Beschreibung

Die `definition` ARIA-Rolle kann auf ein Element angewendet werden, das eine Definition eines Begriffs oder Konzepts darstellt, ähnlich dem nativen {{HTMLElement('dfn')}}-Element. Um die Definition mit dem zu definierenden `Term` zu verknüpfen und einen zugänglichen Namen bereitzustellen, verweisen Sie auf den zu definierenden Begriff mit `role="term"` unter Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby).

```html-nolint
<p>
  <span role="term">Mansplaining</span>,
  <span role="definition">
    ein Kofferwort aus "man" und "explain", ist die herablassende Handlung des
    Erklärens ohne Aufforderung, einer Person, die bereits mit dem Thema
    vertraut ist, oft nachdem es jemand bereits erklärt hat
  </span>.
</p>
```

> [!NOTE]
> Anstelle eines `<span>` mit den Rollen [`term`](/de/docs/Web/Accessibility/ARIA/Roles/term_role) und `definition`, verwenden Sie das {{HTMLElement('dfn')}}-Element. **Verwenden Sie immer das native Element, wenn verfügbar.**

```html
<p>
  <dfn>Mansplaining</dfn>, ein Kofferwort aus "man" und "explain", ist die
  herablassende Handlung des Erklärens ohne Aufforderung, einer Person, die
  bereits mit dem Thema vertraut ist, oft nachdem es jemand bereits erklärt hat.
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
