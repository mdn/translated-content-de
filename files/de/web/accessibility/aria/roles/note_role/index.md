---
title: "ARIA: Rolle note"
slug: Web/Accessibility/ARIA/Roles/note_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Eine `note`-Rolle deutet auf einen Abschnitt hin, dessen Inhalt parenthetisch oder ergänzend zum Hauptinhalt ist.

## Beschreibung

Die `note`-Rolle kann zu parenthetischem oder ergänzendem Inhalt hinzugefügt werden, wenn kein anderes natives Element oder keine andere Rolle dieser Funktion entspricht.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) (optional)
  - : Das Benennen einer Notiz ist optional, kann aber Benutzern von Bildschirmlesegeräten helfen, den Kontext und Zweck zu verstehen. Der Name kann mit `aria-labelledby` bereitgestellt werden, wenn ein sichtbares Label vorhanden ist, andernfalls mit `aria-label`.

## Beispiele

```html
<h1>Madam C. J. Walker</h1>
<p>
  Madam C.J. Walker war eine afroamerikanische Unternehmerin, Philanthropin und
  politische und soziale Aktivistin.
</p>
<h2>Frühes Leben</h2>
…
<h2>Karriere</h2>
…
<p role="note" class="hilitebox">
  Auf dem Höhepunkt der Depression bildete Madam C. J. Walker 20.000 Frauen aus,
  um Haarpomade von Tür zu Tür zu verkaufen
</p>
<h2>Aktivismus und Philanthropie</h2>
…
```

In dem obigen Wikipedia-ähnlichen Eintrag über Madam C.J. Walker könnte die `hilitebox` mit der Rolle `note` ein {{HTMLElement('blockquote')}} gewesen sein, wenn sie ein Zitat enthielt, oder ein {{HTMLElement('figcaption')}} in einer {{HTMLElement('figure')}}, wenn es ein zugehöriges Bild gab. In diesem Fall, da keines dieser Elemente Sinn machte, wurde die `note`-Rolle hinzugefügt, um dem parenthetischen Inhalt Semantik zu verleihen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Dokumentenstruktur-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#1._document_structure_roles)
