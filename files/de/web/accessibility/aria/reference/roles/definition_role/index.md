---
title: "ARIA: Rolle definition"
short-title: definition
slug: Web/Accessibility/ARIA/Reference/Roles/definition_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die ARIA-Rolle `definition` zeigt an, dass das Element eine Definition eines Begriffs oder Konzepts ist.

## Beschreibung

Die ARIA-Rolle `definition` kann in ein Element eingefügt werden, das eine Definition eines Begriffs oder Konzepts darstellt, ähnlich dem nativen {{HTMLElement('dfn')}}-Element. Um die Definition mit dem `term` zu verknüpfen, das definiert wird, und um einen zugänglichen Namen bereitzustellen, verweisen Sie auf den definierten Begriff mit `role="term"`, unter Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

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
> Anstelle eines `<span>` mit den Rollen [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) und `definition`, verwenden Sie das {{HTMLElement('dfn')}}-Element. **Verwenden Sie immer das native Element, wenn es verfügbar ist.**

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

- [Die `term`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- Das {{HTMLElement('dfn')}}-Element
- Das {{HTMLElement('dd')}}-Element
- Das {{HTMLElement('dl')}}-Element
- Das {{HTMLElement('dt')}}-Element
