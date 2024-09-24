---
title: "ARIA: Rolle term"
slug: Web/Accessibility/ARIA/Roles/term_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `term`-Rolle kann für ein Wort oder eine Phrase mit einer optionalen entsprechenden [`definition`](/de/docs/Web/Accessibility/ARIA/Roles/definition_role) verwendet werden.

## Beschreibung

Die `term`-Rolle kann für ein Wort oder eine Phrase mit einer optionalen entsprechenden [`definition`](/de/docs/Web/Accessibility/ARIA/Roles/definition_role) verwendet werden. Sie ist semantisch gleichwertig mit dem HTML-{{HTMLElement('dfn')}}-Element und dem Definitionsterm ({{HTMLElement('dt')}}) innerhalb einer Definitionsliste ({{HTMLElement('dl')}}).

Die `term`-Rolle wird verwendet, um ein Wort oder eine Phrase explizit zu identifizieren, für das bzw. die eine Definition vom Autor bereitgestellt wurde oder von Benutzern erwartet wird. Falls eine vorhandene Definition existiert oder ein Formular oder Formularelement zur Eingabe einer Definition vorhanden ist, SOLLTEN Autoren [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) so setzen, dass es auf das zugehörige Element verweist.

Verwenden Sie `role="term"` nicht auf interaktiven Elementen wie Links, da es das Interaktionsvermögen der Benutzer von unterstützender Technologie beeinträchtigen kann. Auch gilt der Begriff selbst als barrierefreier Name, daher sollten weder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) noch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet werden.

> [!WARNING]
> Der barrierefreie Name sollte der Begriff selbst sein, daher NICHT `aria-label` oder `aria-labelledby` verwenden.

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

Unter Berücksichtigung besserer Semantik könnte das obige auch wie folgt geschrieben werden:

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

oder ohne jegliche ARIA (aber möglicherweise nicht so, wie Sie es präsentieren möchten)

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

## Barrierefreiheitsbedenken

Verwenden Sie `role="term"` nicht auf interaktiven Elementen wie Links, da dies das Interaktionsvermögen der Benutzer von unterstützender Technologie beeinträchtigen kann.

## Beste Praktiken

Lassen Sie den Begriff selbst den barrierefreien Namen definieren. Verwenden Sie weder `aria-label` noch `aria-labelledby`.

### Bevorzugen Sie HTML

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `definition` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/definition_role).
- Das HTML-{{HTMLElement('dfn')}}-Element
