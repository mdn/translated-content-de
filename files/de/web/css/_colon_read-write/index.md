---
title: ":read-write"
slug: Web/CSS/:read-write
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
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

### Bestätigung von Formularinformationen in schreibgeschützten/schreibbaren Steuerungen

Eine Verwendung von `readonly` Formularsteuerungen besteht darin, dem Benutzer die Möglichkeit zu geben, Informationen zu überprüfen und zu bestätigen, die er möglicherweise in einem früheren Formular eingegeben hat (z. B. Versanddetails), während er dennoch in der Lage ist, die Informationen zusammen mit dem Rest des Formulars abzusenden. Genau das machen wir im folgenden Beispiel.

Die `:read-only` Pseudoklasse wird verwendet, um das gesamte Styling zu entfernen, das die Eingabefelder wie anklickbare Felder aussehen lässt, sodass sie eher wie schreibgeschützte Absätze aussehen. Die `:read-write` Pseudoklasse hingegen wird verwendet, um dem bearbeitbaren `<textarea>` ein ansprechenderes Styling zu verleihen.

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

Den vollständigen Quellcode finden Sie unter [readonly-confirmation.html](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html); dies wird wie folgt dargestellt:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

### Styling schreibbarer nicht-Formularsteuerungen

Dieser Selektor wählt nicht nur {{htmlElement("input")}}/{{htmlElement("textarea")}} Elemente aus — er wählt _jedes_ Element aus, das vom Benutzer bearbeitet werden kann, wie z. B. ein {{htmlelement("p")}} Element, bei dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) gesetzt ist.

```html
<p contenteditable>Dieser Absatz ist bearbeitbar; er ist schreibbar.</p>

<p>Dieser Absatz ist nicht bearbeitbar; er ist schreibgeschützt.</p>
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
- HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) Attribut
