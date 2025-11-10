---
title: ARIA-Zustände und -Eigenschaften (Attribute)
short-title: Attributes
slug: Web/Accessibility/ARIA/Reference/Attributes
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Diese Seite listet Referenzseiten auf, die alle auf MDN besprochenen <abbr>WAI-ARIA</abbr>-Attribute abdecken.

<abbr>ARIA</abbr>-Attribute ermöglichen es, die Zustände und Eigenschaften eines Elements zu ändern, wie im Accessibility-Tree definiert.

> [!NOTE]
> ARIA ändert nur den Accessibility-Tree, indem es beeinflusst, wie assistive Technologie den Inhalt Ihren Nutzern präsentiert. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn semantische HTML-Elemente nicht für ihren beabsichtigten Zweck und ihre Standardfunktionalität verwendet werden, müssen Sie JavaScript verwenden, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

## ARIA-Attributtypen

Es gibt 4 Kategorien von ARIA-Zuständen und -Eigenschaften:

### Widget-Attribute

- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

### Live-Region-Attribute

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)

### Drag-and-Drop-Attribute

- [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [`aria-grabbed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)

### Beziehungs-Attribute

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

## Globale ARIA-Attribute

Einige Zustände und Eigenschaften gelten für alle HTML-Elemente, unabhängig davon, ob eine ARIA-Rolle angewendet wird. Diese werden als "Globale" Attribute definiert. Globale Zustände und Eigenschaften werden von allen Rollen und grundlegenden Markup-Elementen unterstützt.

Viele der oben genannten Attribute sind global, was bedeutet, dass sie, sofern nicht ausdrücklich ausgeschlossen, in jedes Element eingefügt werden können:

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-grabbed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)

Mit "ausdrücklich ausgeschlossen" sind alle oben genannten Attribute global, außer den Eigenschaften `aria-label` und `aria-labelledby`, die nicht auf Elemente mit der Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) oder ihrem Synonym [`none`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role) angewendet werden dürfen.

## Index der Zustände und Eigenschaften

Die folgenden sind die Referenzseiten, die die auf <abbr>WAI-ARIA</abbr>-Zustände und Eigenschaften auf <abbr>MDN</abbr> beschreiben.

{{SubpagesWithSummaries}}

## Siehe auch

- [Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)
