---
title: :read-write
slug: Web/CSS/:read-write
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:read-write`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element (wie `input` oder `textarea`), das vom Benutzer bearbeitet werden kann.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-read-write.html", "tabbed-shorter")}}

## Syntax

```css
:read-write {
  /* ... */
}
```

## Beispiele

### Formularinformationen in schreibgeschützten/schreibbaren Feldern bestätigen

Eine Verwendung von schreibgeschützten Formularfeldern ist es, dem Benutzer zu ermöglichen, Informationen zu überprüfen und zu bestätigen, die er möglicherweise in einem früheren Formular eingegeben hat (z. B. Versanddetails), während er dennoch diese Informationen zusammen mit dem Rest des Formulars senden kann. Genau das wird im untenstehenden Beispiel gemacht.

Die `:read-only`-Pseudoklasse wird verwendet, um alle Stile zu entfernen, die die Eingabefelder wie anklickbare Felder aussehen lassen, wodurch sie eher wie schreibgeschützte Absätze wirken. Die `:read-write`-Pseudoklasse hingegen wird verwendet, um der bearbeitbaren `<textarea>` ein ansprechenderes Styling zu verleihen.

```css
input:-moz-read-only,
textarea:-moz-read-only,
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:-moz-read-write,
textarea:read-write {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Den vollständigen Quellcode können Sie unter [readonly-confirmation.html](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html) finden; er wird wie folgt dargestellt:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

### Styling von schreibbaren Nicht-Formular-Steuerelementen

Dieser Selektor wählt nicht nur {{htmlElement("input")}}/{{htmlElement("textarea")}}-Elemente aus — er wählt _jedes_ Element aus, das vom Benutzer bearbeitet werden kann, wie z. B. ein {{htmlelement("p")}}-Element mit [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable), das darauf gesetzt ist.

```html
<p contenteditable>This paragraph is editable; it is read-write.</p>

<p>This paragraph is not editable; it is read-only.</p>
```

```css
p {
  font-size: 150%;
  padding: 5px;
  border-radius: 5px;
}

p:read-only {
  background-color: red;
  color: white;
}

p:read-write {
  background-color: lime;
}
```

{{EmbedLiveSample('Styling_read-write_non-form_controls', '100%', 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":read-only")}}
- HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)
