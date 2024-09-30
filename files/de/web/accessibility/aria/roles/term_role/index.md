---
title: "ARIA: term Rolle"
slug: Web/Accessibility/ARIA/Roles/term_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `term` Rolle kann für ein Wort oder einen Ausdruck mit einer optionalen entsprechenden [`definition`](/de/docs/Web/Accessibility/ARIA/Roles/definition_role) verwendet werden.

## Beschreibung

Die `term` Rolle kann für ein Wort oder einen Ausdruck mit einer optionalen entsprechenden [`definition`](/de/docs/Web/Accessibility/ARIA/Roles/definition_role) verwendet werden. Sie ist semantisch gleichwertig mit dem HTML {{HTMLElement('dfn')}} Element und dem Definitionsterm ({{HTMLElement('dt')}}) Element innerhalb einer Definitionsliste ({{HTMLElement('dl')}}).

Die `term` Rolle wird verwendet, um ein Wort oder einen Ausdruck explizit zu identifizieren, für den eine Definition vom Autor bereitgestellt wurde oder erwartet wird, dass der Benutzer eine bereitstellt. Wenn bereits eine Definition vorhanden ist oder ein Formular oder ein Formularelement zum Eingeben einer Definition, SOLLTEN Autoren [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) setzen, um auf das verwandte Element zu verweisen.

Verwenden Sie `role="term"` nicht auf interaktiven Elementen wie Links, da dies die Fähigkeit der Benutzer von unterstützenden Technologien zur Interaktion mit dem Element beeinträchtigen kann. Außerdem ist der Begriff selbst der zugängliche Name, daher verwenden Sie nicht [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby).

> [!WARNING]
> Der zugängliche Name sollte der Begriff selbst sein, verwenden Sie daher NICHT `aria-label` oder `aria-labelledby`.

### Zugeordnete WAI-ARIA Rollen, Zustände und Eigenschaften

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

Mit besseren Semantiken könnte das obige Beispiel auch so geschrieben werden:

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

oder ohne jegliche ARIA (aber möglicherweise nicht in der gewünschten Präsentationsform)

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

## Zugänglichkeitsbedenken

Verwenden Sie `role="term"` nicht auf interaktiven Elementen wie Links, da dies die Fähigkeit der Benutzer von unterstützenden Technologien beeinträchtigen kann, mit dem Element zu interagieren.

## Best Practices

Lassen Sie den Begriff selbst den zugänglichen Namen definieren. Verwenden Sie nicht `aria-label` oder `aria-labelledby`.

### Bevorzugen Sie HTML

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `definition` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/definition_role).
- Das HTML {{HTMLElement('dfn')}} Element
