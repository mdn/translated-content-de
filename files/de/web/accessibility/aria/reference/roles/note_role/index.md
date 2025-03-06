---
title: "ARIA: note-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/note_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Eine `note`-Rolle deutet auf einen Abschnitt hin, dessen Inhalt parenthetisch oder ergänzend zum Hauptinhalt ist.

## Beschreibung

Die `note`-Rolle kann zu parenthetischem oder ergänzendem Inhalt hinzugefügt werden, wenn kein anderes natives Element oder keine andere Rolle für diesen Zweck geeignet ist.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) (optional)
  - : Das Benennen einer Notiz ist optional, kann jedoch Nutzern mit Bildschirmlesegeräten helfen, ihren Kontext und Zweck zu verstehen. Der Name kann mithilfe von `aria-labelledby` bereitgestellt werden, wenn ein sichtbares Label vorhanden ist, andernfalls mit `aria-label`.

## Beispiele

```html
<h1>Madam C. J. Walker</h1>
<p>
  Madam C.J. Walker was an African American entrepreneur, philanthropist, and
  political and social activist.
</p>
<h2>Early Life</h2>
…
<h2>Career</h2>
…
<p role="note" class="highlight-box">
  At the height of the depression, Madam C. J. Walker trained 20,000 women to
  sell hair pomade door-to-door
</p>
<h2>Activism and Philanthropy</h2>
…
```

Im obigen Wikipedia-ähnlichen Eintrag für Madam C.J. Walker könnte die `highlight-box` mit der Rolle `note` ein {{HTMLElement('blockquote')}} gewesen sein, wenn sie ein Zitat enthalten hätte, oder ein {{HTMLElement('figcaption')}} in einem {{HTMLElement('figure')}}, wenn ein zugehöriges Bild vorhanden wäre. Da keines davon sinnvoll gewesen wäre, wurde die `note`-Rolle hinzugefügt, um dem parenthetischen Inhalt Semantik zu verleihen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Dokumentenstruktur-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#1._document_structure_roles)
