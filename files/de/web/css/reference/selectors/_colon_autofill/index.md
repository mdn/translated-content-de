---
title: CSS-Pseudoklasse `:autofill`
short-title: :autofill
slug: Web/CSS/Reference/Selectors/:autofill
l10n:
  sourceCommit: b4f42a2037bcb8f2daec61f6b3d92bfdd13e5386
---

Die **`:autofill`**-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) von [CSS](/de/docs/Web/CSS) trifft zu, wenn der Browser den Wert eines {{HTMLElement("input")}}-Elements automatisch ausgefüllt hat. Sie trifft nicht mehr zu, sobald der Benutzer das Feld bearbeitet.

{{InteractiveExample("CSS Demo: :autofill", "tabbed-shorter")}}

```css interactive-example
input {
  border: 3px solid black;
}
input:autofill {
  outline: 5px solid magenta;
  border: 3px dashed yellow;
}
```

```html interactive-example
<form>
  <p>Click on the text box and choose any option suggested by your browser.</p>
  <p>
    <label for="name">Name</label>
    <input id="name" name="name" type="text" autocomplete="given-name" />
  </p>
  <p>
    <label for="email">Email Address</label>
    <input id="email" name="email" type="email" autocomplete="email" />
  </p>
  <p>
    <label for="country">Country</label>
    <input
      id="country"
      name="country"
      type="text"
      autocomplete="country-name" />
  </p>
</form>
```

## Syntax

```css
:autofill {
  /* ... */
}
```

## Beschreibung

Die Pseudoklasse `:autofill` wählt {{htmlelement("input")}}-Elemente aus, deren Inhalt vom Browser automatisch ausgefüllt und seitdem nicht bearbeitet wurde. Die automatische Vervollständigung kann erfolgen, wenn sie in den Browsereinstellungen aktiviert ist oder das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) am Element selbst gesetzt ist.

Wenn der Benutzer die Funktion zur automatischen Vervollständigung des Browsers verwendet, um ein Formularsteuerelement auszufüllen, werden alle Formularsteuerelemente ausgefüllt, die aufgrund der Auswahl automatisch ausgefüllt werden können. Sie alle entsprechen dann dem UI-Zustand `:autofill`. Bearbeitet der Benutzer eines dieser Steuerelemente, entspricht es nicht mehr `:autofill` – selbst wenn sein Wert danach mit dem automatisch ausgefüllten Wert übereinstimmt.

Die Spezifikation enthält auch die Pseudoklasse `:-webkit-autofill` mit Anbieterpräfix als Alias. Auch sie trifft auf Eingabeelemente zu, die vom Browser automatisch ausgefüllt wurden, und trifft nicht mehr zu, wenn der Benutzer das ausgefüllte Feld bearbeitet.

Beachten Sie, dass die User-Agent-Stylesheets vieler Browser `!important` in ihren Stildeklarationen verwenden. Dadurch lassen sich manche Stile nicht überschreiben. Chrome enthält beispielsweise Folgendes in seinem internen Stylesheet:

```css-nolint
input:-internal-autofill-selected {
  appearance: menulist-button;
  background-image: none !important;
  background-color:
    light-dark(rgb(232 240 254), rgb(70 90 126 / 0.4)) !important;
  color: fieldtext !important;
}
```

Das bedeutet, dass Sie die Standardwerte von {{cssxref('background-color')}}, {{cssxref('background-image')}} und {{cssxref('color')}} für ausgewählte, automatisch ausgefüllte Eingabeelemente nicht mit eigenen Regeln überschreiben können. {{cssxref('appearance')}} können Sie dagegen überschreiben. Für automatisch ausgefüllte Elemente, die derzeit nicht fokussiert sind, können Sie auch die anderen genannten Eigenschaften überschreiben.

## Beispiele

Das folgende Beispiel zeigt, wie Sie mit der Pseudoklasse `:autofill` den Rahmen eines Textfelds ändern, das vom Browser automatisch vervollständigt wurde.

### HTML

Wir verwenden drei HTML-`<input>`-Elemente, denen jeweils ein {{htmlelement("label")}} zugeordnet ist. `name` und `email` werden wahrscheinlich automatisch vervollständigt und entsprechen dann `:autofill`; bei `pet` ist das unwahrscheinlich.

```html
<form method="post" action="">
  <p>
    <label for="name">Name: </label>
    <input name="n" id="name" autocomplete="given-name" />
  </p>
  <p>
    <label for="email">Email: </label>
    <input type="email" name="email" id="email" autocomplete="email" />
  </p>
  <p>
    <label for="pet">Your pet's name: </label>
    <input name="pet" id="pet" />
  </p>
</form>
```

### CSS

Wir wenden {{cssxref("border-radius")}}, {{cssxref("outline")}} und {{cssxref("border-color")}} auf die `<input>`-Elemente an, wenn sie dem Zustand `:autofill` entsprechen.

```css
input {
  border-radius: 0px;
}

input:autofill {
  border-radius: 0.5lh;
  outline: 5px dashed magenta;
  border-color: yellow;
}
```

```css hidden
@supports not selector(:autofill) {
  body::before {
    content: "Your browser doesn't support the :autofill selector.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

Wenn Sie die automatische Vervollständigung für `name` zulassen, erhalten `name` und `email` einen abgerundeten Rahmen und eine magentafarbene Kontur. Der Rahmen selbst ändert sich allerdings wahrscheinlich nicht, weil im User-Agent-Stylesheet `!important` gesetzt ist. Bearbeiten Sie eines der Felder: Sobald Sie den Wert geändert haben, werden die `:autofill`-Stile nicht mehr angewendet – auch dann nicht, wenn Sie den ursprünglichen automatisch vervollständigten Wert wiederherstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Pseudoklassen für `<input>`](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#input_pseudo-classes)
- Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
