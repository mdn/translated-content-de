---
title: :read-write
slug: Web/CSS/:read-write
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:read-write`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element (wie `input` oder `textarea`), das vom Benutzer bearbeitet werden kann.

{{InteractiveExample("CSS Demo: :read-write", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
  display: block;
  margin-top: 1em;
}

*:read-write {
  background-color: ivory;
  border: 2px solid darkorange;
  border-radius: 5px;
}
```

```html interactive-example
<p>Please fill in your details:</p>

<form>
  <label for="email">Email Address:</label>
  <input id="email" name="email" type="email" value="test@example.com" />

  <label for="note">Short note about yourself:</label>
  <textarea id="note" name="note">Don't be shy</textarea>

  <label for="pic">Your picture:</label>
  <input id="pic" name="pic" type="file" />

  <input type="submit" value="Submit form" />
</form>
```

## Syntax

```css
:read-write {
  /* ... */
}
```

## Beispiele

### Bestätigung von Formularinformationen in schreibgeschützten/schreibfähigen Steuerungen

Eine Verwendung von `readonly` Formularsteuerungen besteht darin, dem Benutzer zu ermöglichen, Informationen zu überprüfen und zu bestätigen, die er möglicherweise in einem früheren Formular eingegeben hat (zum Beispiel Versanddetails), während er weiterhin in der Lage ist, die Informationen zusammen mit dem Rest des Formulars zu übermitteln. Im folgenden Beispiel tun wir genau das.

Die Pseudoklasse `:read-only` wird verwendet, um das gesamte Styling zu entfernen, das die Eingabefelder wie anklickbare Felder aussehen lässt, damit sie mehr wie schreibgeschützte Absätze erscheinen. Die Pseudoklasse `:read-write` dagegen wird genutzt, um dem bearbeitbaren `<textarea>` ein ansprechenderes Styling zu geben.

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

Sie können den vollständigen Quellcode unter [readonly-confirmation.html](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html) finden; dies wird folgendermaßen gerendert:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

### Stilierung von schreibfähigen Nicht-Formularsteuerungen

Dieser Selektor wählt nicht nur {{htmlElement("input")}}/{{htmlElement("textarea")}} Elemente aus — er wählt _jedes_ Element, das vom Benutzer bearbeitet werden kann, wie ein {{htmlelement("p")}} Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut.

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
