---
title: "ARIA: note-Rolle"
slug: Web/Accessibility/ARIA/Roles/note_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Eine `note`-Rolle schlägt einen Abschnitt vor, dessen Inhalt in Klammern oder unterstützend zum Hauptinhalt steht.

## Beschreibung

Die `note`-Rolle kann zu in Klammern oder unterstützenden Inhalten hinzugefügt werden, wenn kein anderes nativer Element oder eine andere Rolle den Zweck erfüllt.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) (optional)
  - : Das Benennen einer Notiz ist optional, kann aber Bildschirmleser-Nutzern helfen, ihren Kontext und Zweck zu verstehen. Der Name kann mit `aria-labelledby` angegeben werden, wenn ein sichtbares Label vorhanden ist, andernfalls mit `aria-label`.

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
<p role="note" class="hilitebox">
  At the height of the depression, Madam C. J. Walker trained 20,000 women to
  sell hair pomade door-to-door
</p>
<h2>Activism and Philanthropy</h2>
…
```

Im obigen Wikipedia-Stil-Eintrag für Madam C.J. Walker hätte der `hilitebox` mit der Rolle `note` ein {{HTMLElement('blockquote')}} sein können, wenn es ein Zitat enthielt, oder eine {{HTMLElement('figcaption')}} in einem {{HTMLElement('figure')}}, wenn es ein zugehöriges Bild gab. In diesem Fall, da keines von beidem sinnvoll war, wurde die `note`-Rolle hinzugefügt, um dem parenthetischen Inhalt Semantik zu verleihen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Dokumentstruktur-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#1._document_structure_roles)
