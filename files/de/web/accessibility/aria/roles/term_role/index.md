---
title: "ARIA: term-Rolle"
slug: Web/Accessibility/ARIA/Roles/term_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `term`-Rolle kann für ein Wort oder einen Ausdruck mit einer optionalen entsprechenden [`definition`](/de/docs/Web/Accessibility/ARIA/Roles/definition_role) verwendet werden.

## Beschreibung

Die `term`-Rolle kann für ein Wort oder einen Ausdruck mit einer optionalen entsprechenden [`definition`](/de/docs/Web/Accessibility/ARIA/Roles/definition_role) verwendet werden. Sie entspricht in der Semantik dem HTML-{{HTMLElement('dfn')}}-Element und dem Definitionsterm ({{HTMLElement('dt')}}) innerhalb einer Definitionsliste ({{HTMLElement('dl')}}).

Die `term`-Rolle wird verwendet, um ein Wort oder einen Ausdruck explizit zu kennzeichnen, für das oder den eine Definition vom Autor bereitgestellt wurde oder vom Benutzer erwartet wird. Wenn eine bestehende Definition oder ein Formular bzw. ein Formularelement zum Eingeben einer Definition vorhanden ist, SOLLTEN Autoren [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) setzen, um auf das zugehörige Element zu verweisen.

Verwenden Sie `role="term"` nicht auf interaktiven Elementen wie Links, da dies die Fähigkeit von Benutzern assistiver Technologien, mit dem Element zu interagieren, beeinträchtigen kann. Außerdem ist der Begriff selbst der barrierefreie Name, verwenden Sie daher weder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) noch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby).

> [!WARNING]
> Der barrierefreie Name sollte der Begriff selbst sein, daher verwenden Sie NICHT `aria-label` oder `aria-labelledby`.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

Keine.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

## Beispiele

```html
<p>
  <span role="term">Mansplaining</span>,
  <span role="definition"
    >a portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it</span
  >.
</p>
```

Mit besseren Semantiken könnte das obige auch folgendermaßen geschrieben werden:

```html
<p>
  <dfn role="term">Mansplaining</dfn>,
  <span role="definition"
    >a portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it</span
  >.
</p>
```

oder ohne jegliches ARIA (aber möglicherweise nicht so, wie Sie es präsentiert haben möchten)

```html
<dl>
  <dt>Mansplaining</dt>
  <dd>
    A portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it.
  </dd>
</dl>
```

## Barrierefreiheitshinweise

Verwenden Sie `role="term"` nicht auf interaktiven Elementen wie Links, da dies die Fähigkeit von Benutzern assistiver Technologien, mit dem Element zu interagieren, beeinträchtigen kann.

## Beste Praktiken

Erlauben Sie, dass der Begriff selbst den barrierefreien Namen definiert. Verwenden Sie nicht `aria-label` oder `aria-labelledby`.

### Bevorzugen Sie HTML

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `definition`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/definition_role).
- Das HTML-{{HTMLElement('dfn')}}-Element
