---
title: :placeholder-shown
slug: Web/CSS/:placeholder-shown
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:placeholder-shown`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein beliebiges {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element, das derzeit [Platzhaltertext](/de/docs/Web/HTML/Element/input#placeholder) anzeigt.

{{InteractiveExample("CSS Demo: :placeholder-shown", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:placeholder-shown {
  background-color: ivory;
  border: 2px solid darkorange;
  border-radius: 5px;
}
```

```html interactive-example
<form>
  <label for="name">Full Name:</label>
  <input id="name" name="name" type="text" />

  <label for="email">Email Address:</label>
  <input id="email" name="email" type="email" placeholder="name@example.com" />

  <label for="age">Your age:</label>
  <input
    id="age"
    name="age"
    type="number"
    value="18"
    placeholder="You must be 18+" />
</form>
```

## Syntax

```css
:placeholder-shown {
  /* ... */
}
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel wendet spezielle Schrift- und Rahmenstile an, wenn der Platzhalter angezeigt wird.

#### HTML

```html
<input placeholder="Type something here!" />
```

#### CSS

```css
input {
  border: 1px solid black;
  padding: 3px;
}

input:placeholder-shown {
  border-color: teal;
  color: purple;
  font-style: italic;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 200, 80)}}

### Überlaufender Text

Wenn Formularfelder zu klein sind, kann Platzhaltertext auf unerwünschte Weise abgeschnitten werden. Sie können die {{cssxref("text-overflow")}} Eigenschaft verwenden, um die Anzeige von überlaufendem Text zu ändern.

#### HTML

```html
<input id="input1" placeholder="Name, Rank, and Serial Number" /> <br /><br />
<input id="input2" placeholder="Name, Rank, and Serial Number" />
```

#### CSS

```css
#input2:placeholder-shown {
  text-overflow: ellipsis;
}
```

#### Ergebnis

{{EmbedLiveSample("Overflowing_text", 200, 80)}}

### Anpassungsfeld für Eingaben

Das folgende Beispiel hebt das Feld für die Studentenausweisnummer mit einem benutzerdefinierten Stil hervor.

#### HTML

```html
<form id="test">
  <p>
    <label for="name">Enter Student Name:</label>
    <input id="name" placeholder="Student Name" />
  </p>
  <p>
    <label for="branch">Enter Student Branch:</label>
    <input id="branch" placeholder="Student Branch" />
  </p>
  <p>
    <label for="sid">Enter Student ID:</label>
    <input
      type="number"
      pattern="[0-9]{8}"
      title="8 digit ID"
      id="sid"
      class="student-id"
      placeholder="8 digit id" />
  </p>
  <input type="submit" />
</form>
```

#### CSS

```css
input {
  background-color: #e8e8e8;
  color: black;
}

input.student-id:placeholder-shown {
  background-color: yellow;
  color: red;
  font-style: italic;
}
```

#### Ergebnis

{{EmbedLiveSample("Customized_input_field", 200, 180)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{CSSxRef("::placeholder")}} Pseudoelement gestaltet den Platzhalter _selbst_.
- Verwandte HTML-Elemente: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
