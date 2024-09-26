---
title: ARIA-Zustände und -Eigenschaften
slug: Web/Accessibility/ARIA/Attributes
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Diese Seite listet Referenzseiten auf, die alle auf MDN besprochenen <abbr>WAI-ARIA</abbr>-Attribute abdecken.

<abbr>ARIA</abbr>-Attribute ermöglichen die Modifikation der Zustände und Eigenschaften eines Elements, wie sie im Barrierefreiheitsbaum definiert sind.

> [!NOTE]
> ARIA modifiziert nur den Barrierefreiheitsbaum und verändert, wie unterstützende Technologien den Inhalt Ihren Benutzern präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn semantische HTML-Elemente nicht für ihren beabsichtigten Zweck und deren Standardfunktionalität verwendet werden, müssen Sie JavaScript verwenden, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

## ARIA-Attributtypen

Es gibt vier Kategorien von ARIA-Zuständen und -Eigenschaften:

1. ### Widget-Attribute

   - [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
   - [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
   - [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
   - [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
   - [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
   - [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
   - [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
   - [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
   - [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
   - [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)
   - [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
   - [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)
   - [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
   - [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
   - [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)
   - [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
   - [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
   - [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)
   - [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
   - [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
   - [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
   - [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
   - [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
   - [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

2. ### Live-Region-Attribute

   - [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
   - [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)
   - [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
   - [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)

3. ### Drag-and-Drop-Attribute

   - [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
   - [`aria-grabbed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed)

4. ### Beziehungs-Attribute

   - [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
   - [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
   - [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
   - [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
   - [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
   - [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
   - [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)
   - [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
   - [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
   - [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-flowto)
   - [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
   - [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
   - [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
   - [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)
   - [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
   - [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
   - [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)

## Globale ARIA-Attribute

Einige Zustände und Eigenschaften gelten für alle HTML-Elemente, unabhängig davon, ob eine ARIA-Rolle angewendet wird. Diese werden als "Globale" Attribute definiert. Globale Zustände und Eigenschaften werden von allen Rollen und grundlegenden Markup-Elementen unterstützt.

Viele der oben genannten Attribute sind global, das heißt, sie können in jedes Element aufgenommen werden, es sei denn, es ist ausdrücklich ausgeschlossen:

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-flowto)
- [`aria-grabbed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)

Mit "ausdrücklich ausgeschlossen" sind alle oben genannten Attribute global, außer den Eigenschaften `aria-label` und `aria-labelledby`, die nicht auf Elemente mit der Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) oder deren Synonym [`none`](/de/docs/Web/Accessibility/ARIA/Roles/none_role) Rolle angewendet werden dürfen.

## Auf MDN definierte Zustände und Eigenschaften

Die folgenden sind die Referenzseiten, die die auf <abbr>MDN</abbr> diskutierten <abbr>WAI-ARIA</abbr>-Zustände und -Eigenschaften abdecken.

{{SubpagesWithSummaries}}

## Siehe auch

- [Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)