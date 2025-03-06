---
title: "ARIA: term Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/term_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `term` Rolle kann für ein Wort oder einen Ausdruck mit einer optional entsprechenden [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) verwendet werden.

## Beschreibung

Die `term` Rolle kann für ein Wort oder einen Ausdruck mit einer optional entsprechenden [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) verwendet werden. Sie ist semantisch äquivalent zum HTML-Element {{HTMLElement('dfn')}} und dem Definitionsterm-Element ({{HTMLElement('dt')}}) innerhalb einer Definitionsliste ({{HTMLElement('dl')}}).

Die `term` Rolle wird verwendet, um explizit ein Wort oder einen Ausdruck zu kennzeichnen, für den eine Definition vom Autor bereitgestellt wurde oder erwartet wird, dass sie vom Benutzer bereitgestellt wird. Wenn eine vorhandene Definition existiert oder ein Formular oder ein Formularelement zum Eingeben einer Definition vorhanden ist, SOLLTEN Autoren [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) setzen, um auf das zugehörige Element zu verweisen.

Verwenden Sie `role="term"` nicht auf interaktiven Elementen wie Links, da dies die Fähigkeit der Benutzer von unterstützender Technologie beeinträchtigen kann, mit dem Element zu interagieren. Auch ist der Begriff selbst der zugängliche Name, daher verwenden Sie nicht [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

> [!WARNING]
> Der zugängliche Name sollte der Begriff selbst sein, verwenden Sie daher NICHT `aria-label` oder `aria-labelledby`.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

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

Unter Berücksichtigung besserer Semantik könnte das obige Beispiel auch so geschrieben werden:

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

Verwenden Sie `role="term"` nicht auf interaktiven Elementen wie Links, da dies die Fähigkeit der Benutzer von unterstützender Technologie beeinträchtigen kann, mit dem Element zu interagieren.

## Best Practices

Lassen Sie den Begriff selbst den zugänglichen Namen definieren. Verwenden Sie nicht `aria-label` oder `aria-labelledby`.

### Bevorzugen Sie HTML

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `definition` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role).
- Das HTML-Element {{HTMLElement('dfn')}}
