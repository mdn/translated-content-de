---
title: ":read-write"
slug: Web/CSS/:read-write
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
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

### Bestätigung von Formularinformationen in Nur-Lese-/Lese-Schreib-Steuerelementen

Eine Verwendung von `readonly` Formularsteuerelementen besteht darin, dem Benutzer zu ermöglichen, Informationen zu überprüfen und zu bestätigen, die er eventuell in einem früheren Formular eingegeben hat (zum Beispiel Versanddetails), während er in der Lage bleibt, die Informationen zusammen mit dem Rest des Formulars einzureichen. Wir tun genau dies im unten stehenden Beispiel.

Die `:read-only` Pseudoklasse wird verwendet, um alle Stile zu entfernen, die die Eingabefelder wie anklickbare Felder aussehen lassen, und sie stattdessen wie Nur-Lese-Absätze aussehen zu lassen. Die `:read-write` Pseudoklasse hingegen wird verwendet, um dem bearbeitbaren `<textarea>` ein ansprechenderes Styling zu verleihen.

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

Der vollständige Quellcode ist bei [readonly-confirmation.html](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html) verfügbar; dieser wird wie folgt gerendert:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

### Styling von Lese-Schreib-Kontrollen, die keine Formularsteuerelemente sind

Dieser Selektor wählt nicht nur {{htmlElement("input")}}/{{htmlElement("textarea")}} Elemente aus — er wählt _jedes_ Element aus, das vom Benutzer bearbeitet werden kann, wie zum Beispiel ein {{htmlelement("p")}} Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut.

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
- HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut
