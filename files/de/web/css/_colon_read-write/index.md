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

### Bestätigung von Formularinformationen in nur-lesbare/lesbare und beschreibbare Steuerungen

Eine Verwendung von `readonly`-Formularsteuerungen besteht darin, dem Benutzer zu ermöglichen, Informationen zu überprüfen und zu bestätigen, die er möglicherweise in einem früheren Formular eingegeben hat (zum Beispiel Lieferdetails), während er weiterhin in der Lage ist, die Informationen zusammen mit dem Rest des Formulars zu übermitteln. Genau das tun wir im folgenden Beispiel.

Die `:read-only`-Pseudoklasse wird verwendet, um das gesamte Styling zu entfernen, das die Eingaben wie klickbare Felder aussehen lässt, und sie eher wie nur-lesbare Absätze wirken zu lassen. Die `:read-write`-Pseudoklasse hingegen wird verwendet, um dem bearbeitbaren `<textarea>` ein ansprechenderes Styling zu verleihen.

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

Den vollständigen Quellcode finden Sie unter [readonly-confirmation.html](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html); dies wird wie folgt gerendert:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

### Styling von beschreibbaren Nicht-Formular-Steuerungen

Dieser Selektor wählt nicht nur {{htmlElement("input")}}/{{htmlElement("textarea")}}-Elemente aus — er wählt _jedes_ Element aus, das vom Benutzer bearbeitet werden kann, wie etwa ein {{htmlelement("p")}}-Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Attribut.

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
- HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Attribut
