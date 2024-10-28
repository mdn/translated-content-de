---
title: "ARIA: note-Rolle"
slug: Web/Accessibility/ARIA/Roles/note_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Eine `note`-Rolle deutet auf einen Abschnitt hin, dessen Inhalt ergänzend oder nebensächlich zum Hauptinhalt ist.

## Beschreibung

Die `note`-Rolle kann zu ergänzenden oder nebensächlichen Inhalten hinzugefügt werden, wenn kein anderes nativer Element oder keine andere Rolle passt.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) (optional)
  - : Eine Anmerkung zu benennen ist optional, kann aber Benutzern von Screenreadern helfen, ihren Kontext und Zweck besser zu verstehen. Der Name kann mithilfe von `aria-labelledby` angegeben werden, wenn ein sichtbares Label vorhanden ist, andernfalls mit `aria-label`.

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

Im obigen Wikipedia-ähnlichen Eintrag über Madam C.J. Walker hätte der `highlight-box` mit der Rolle `note` ein {{HTMLElement('blockquote')}} sein können, wenn es ein Zitat enthielt, oder ein {{HTMLElement('figcaption')}} in einer {{HTMLElement('figure')}}, wenn ein zugehöriges Bild vorhanden wäre. In diesem Fall, da keines dieser Elemente sinnvoll war, wurde die `note`-Rolle hinzugefügt, um dem ergänzenden Inhalt eine Semantik zu verleihen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Dokumentstrukturrollen](/de/docs/Web/Accessibility/ARIA/Roles#1._document_structure_roles)
