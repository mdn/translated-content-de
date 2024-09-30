---
title: ":placeholder-shown"
slug: Web/CSS/:placeholder-shown
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

Die **`:placeholder-shown`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein beliebiges {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element, das derzeit einen [Platzhalter-Text](/de/docs/Web/HTML/Element/input#placeholder) anzeigt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-placeholder-shown.html", "tabbed-shorter")}}

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

Wenn die Formularfelder zu klein sind, kann der Platzhalter-Text auf unerwünschte Weise abgeschnitten werden. Sie können die Eigenschaft {{cssxref("text-overflow")}} verwenden, um die Anzeige von überlaufendem Text zu ändern.

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

### Angepasstes Eingabefeld

Das folgende Beispiel hebt das Studenten-ID-Feld mit einem benutzerdefinierten Stil hervor.

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
      class="studentid"
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

input.studentid:placeholder-shown {
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
- [HTML-Formulare](/de/docs/Learn/Forms)
