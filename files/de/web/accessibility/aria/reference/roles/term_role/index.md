---
title: "ARIA: term-Rolle"
short-title: term
slug: Web/Accessibility/ARIA/Reference/Roles/term_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `term`-Rolle kann für ein Wort oder einen Satz verwendet werden, mit einer optionalen zugehörigen [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role).

## Beschreibung

Die `term`-Rolle kann für ein Wort oder einen Satz verwendet werden, mit einer optionalen zugehörigen [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role). Sie entspricht semantisch dem HTML-Element {{HTMLElement('dfn')}} und dem Definitionsterm-Element ({{HTMLElement('dt')}}) innerhalb einer Definitionsliste ({{HTMLElement('dl')}}).

Die `term`-Rolle wird verwendet, um explizit ein Wort oder einen Satz zu identifizieren, für das/den eine Definition vom Autor bereitgestellt wurde oder vom Benutzer erwartet wird. Wenn eine vorhandene Definition oder ein Formular bzw. Steuerelement zum Eingeben einer Definition existiert, SOLLTEN Autoren [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) festlegen, um auf das zugehörige Element hinzuweisen.

Verwenden Sie `role="term"` nicht bei interaktiven Elementen wie Links, da dies die Fähigkeit der Benutzer von unterstützenden Technologien beeinträchtigen kann, mit dem Element zu interagieren. Auch ist der Begriff selbst der zugängliche Name, daher verwenden Sie nicht [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

> [!WARNING]
> Der zugängliche Name sollte der Begriff selbst sein, verwenden Sie daher NICHT `aria-label` oder `aria-labelledby`.

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

Mit besseren Semantiken könnte das oben genannte auch geschrieben werden als:

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

oder ohne ARIA (aber möglicherweise nicht in der gewünschten Darstellung)

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

Verwenden Sie `role="term"` nicht bei interaktiven Elementen wie Links, da dies die Fähigkeit der Benutzer von unterstützenden Technologien beeinträchtigen kann, mit dem Element zu interagieren.

## Best Practices

Erlauben Sie, dass der Begriff selbst den zugänglichen Namen definiert. Verwenden Sie nicht `aria-label` oder `aria-labelledby`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `definition` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role).
- Das HTML-Element {{HTMLElement('dfn')}}
