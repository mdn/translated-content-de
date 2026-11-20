---
title: "ARIA: Rolle term"
short-title: term
slug: Web/Accessibility/ARIA/Reference/Roles/term_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `term` kann für ein Wort oder eine Wortgruppe verwendet werden, für die es optional eine zugehörige [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) gibt.

## Beschreibung

Die Rolle `term` kann für ein Wort oder eine Wortgruppe verwendet werden, für die es optional eine zugehörige [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) gibt. Sie entspricht semantisch dem HTML-Element {{HTMLElement('dfn')}} und dem Definitionsbegriff-Element ({{HTMLElement('dt')}}) innerhalb einer Definitionsliste ({{HTMLElement('dl')}} ).

Die Rolle `term` kennzeichnet ausdrücklich ein Wort oder eine Wortgruppe, für das bzw. die eine Definition vom Autor bereitgestellt wurde oder von Benutzern bereitgestellt werden soll. Wenn bereits eine Definition oder ein Formular beziehungsweise Formularelement zur Eingabe einer Definition vorhanden ist, SOLLTEN Autoren [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) so setzen, dass es auf das zugehörige Element verweist.

Verwenden Sie `role="term"` nicht für interaktive Elemente wie Links, da dies die Interaktion von Benutzern assistiver Technologien mit dem Element beeinträchtigen kann. Außerdem bildet der Begriff selbst den zugänglichen Namen. Verwenden Sie daher weder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) noch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

> [!WARNING]
> Der zugängliche Name sollte der Begriff selbst sein. Verwenden Sie daher WEDER `aria-label` NOCH `aria-labelledby`.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

## Aspekte der Barrierefreiheit

Verwenden Sie `role="term"` nicht für interaktive Elemente wie Links, da dies die Interaktion von Benutzern assistiver Technologien mit dem Element beeinträchtigen kann.

## Bewährte Verfahren

Lassen Sie den Begriff selbst den zugänglichen Namen bestimmen. Verwenden Sie weder `aria-label` noch `aria-labelledby`.

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

Mit einer passenderen Semantik ließe sich das obige Beispiel auch so schreiben:

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

Oder ganz ohne ARIA (allerdings möglicherweise nicht mit der gewünschten Darstellung):

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: Rolle `definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role).
- Das HTML-Element {{HTMLElement('dfn')}}
