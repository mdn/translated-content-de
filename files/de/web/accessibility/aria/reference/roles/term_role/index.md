---
title: "ARIA: term role"
slug: Web/Accessibility/ARIA/Reference/Roles/term_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die `term` Rolle kann für ein Wort oder eine Phrase mit einer optionalen entsprechenden [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) verwendet werden.

## Beschreibung

Die `term` Rolle kann für ein Wort oder eine Phrase mit einer optionalen entsprechenden [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) verwendet werden. Sie ist semantisch äquivalent zum HTML {{HTMLElement('dfn')}}-Element und dem Definitionsterm ({{HTMLElement('dt')}}) Element innerhalb einer Definitionsliste ({{HTMLElement('dl')}}).

Die `term` Rolle wird verwendet, um explizit ein Wort oder eine Phrase zu identifizieren, für das/die eine Definition vom Autor bereitgestellt oder vom Benutzer erwartet wird. Wenn es bereits eine Definition gibt oder ein Formular oder ein Formularelement, um eine Definition einzugeben, SOLLTEN Autoren [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) festlegen, um auf das verwandte Element zu verweisen.

Verwenden Sie `role="term"` nicht auf interaktive Elemente wie Links, da dies die Fähigkeit von Benutzern assistiver Technologien beeinträchtigen kann, mit dem Element zu interagieren. Auch der Begriff selbst ist der zugängliche Name, daher sollten Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) nicht verwenden.

> [!WARNING]
> Der zugängliche Name sollte der Begriff selbst sein, verwenden Sie daher KEIN `aria-label` oder `aria-labelledby`.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

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

Um bessere Semantik zu gewährleisten, könnte das obige auch folgendermaßen geschrieben werden:

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

oder ohne ARIA (aber möglicherweise nicht so, wie Sie es darstellen möchten)

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

## Barrierefreiheitsaspekte

Verwenden Sie `role="term"` nicht auf interaktiven Elementen wie Links, da dies die Fähigkeit von Benutzern assistiver Technologien beeinträchtigen kann, mit dem Element zu interagieren.

## Best Practices

Erlauben Sie, dass der Begriff selbst den zugänglichen Namen definiert. Verwenden Sie nicht `aria-label` oder `aria-labelledby`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `definition` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role)
- Das HTML {{HTMLElement('dfn')}} Element
