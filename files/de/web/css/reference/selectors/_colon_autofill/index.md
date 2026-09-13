---
title: "`:autofill` CSS-Pseudoklasse"
short-title: :autofill
slug: Web/CSS/Reference/Selectors/:autofill
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

Die **`:autofill`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) stimmt überein, wenn ein {{HTMLElement("input")}}-Element vom Browser automatisch ausgefüllt wurde. Die Klasse hört auf zu passen, wenn der Benutzer das Feld bearbeitet.

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

## Beschreibung

Die `:autofill` Pseudoklasse wählt {{htmlelement("input")}}-Elemente aus, die unveränderte Inhalte enthalten, die vom Benutzeragenten automatisch ausgefüllt wurden. Die Autovervollständigung kann auftreten, wenn die Browsereinstellungen so gesetzt sind, dass Autovervollständigung aktiviert ist, oder das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) direkt am Element gesetzt ist.

Wenn der Benutzer die Autovervollständigungsfunktion des Browsers zum automatischen Ausfüllen eines Steuerelements verwendet, werden alle Formularsteuerelemente, die basierend auf der Auswahl automatisch ausgefüllt werden können, befüllt. Diese passen alle zum `:autofill` UI-Zustand. Wenn der Benutzer ein Steuerelement bearbeitet, wird dieses Steuerelement nicht mehr mit `:autofill` übereinstimmen, selbst wenn der Wert der gleiche ist wie der automatisch ausgefüllte Wert.

Die Spezifikation enthält die anbieterpräfixierte `:-webkit-autofill` Pseudoklasse als Alias. Diese stimmt ebenfalls mit Eingabeelementen überein, die vom Benutzeragenten automatisch ausgefüllt wurden, und stimmt nicht mehr, wenn der Benutzer das automatisch ausgefüllte Feld bearbeitet.

Beachten Sie, dass die Benutzeragenten-Stilblätter vieler Browser `!important` in ihren Stildeklarationen verwenden, was einige Stile nicht überschreibbar macht. Zum Beispiel hat Chrome folgendes in seinem internen Stilblatt:

```css-nolint
input:-internal-autofill-selected {
  appearance: menulist-button;
  background-image: none !important;
  background-color:
    light-dark(rgb(232 240 254), rgb(70 90 126 / 0.4)) !important;
  color: fieldtext !important;
}
```

Das bedeutet, dass Sie die Standardwerte von {{cssxref('background-color')}}, {{cssxref('background-image')}}, oder {{cssxref('color')}} bei ausgewählten automatisch ausgefüllten Eingabeelementen in Ihren eigenen Regeln nicht überschreiben können, aber Sie können das {{cssxref('appearance')}} überschreiben, und Sie können diese Eigenschaften für die automatisch ausgefüllten Elemente überschreiben, die derzeit nicht fokussiert sind.

## Syntax

```css
:autofill {
  /* ... */
}
```

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `:autofill` Pseudoklasse, um den Rand eines Textfeldes zu ändern, das vom Browser automatisch vervollständigt wurde.

### HTML

Wir fügen drei HTML `<input>`-Elemente ein, jedes mit einem zugehörigen {{htmlelement("label")}}. `name` und `email` werden wahrscheinlich automatisch ausgefüllt und stimmen mit `:autofill` überein, während der Wert `pet` dies wahrscheinlich nicht tut.

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

Wir wenden einen {{cssxref("border-radius")}}, {{cssxref("outline")}}, und {{cssxref("border-color")}} auf die `<input>` Elemente an, wenn sie den `:autofill` Zustand erfüllen.

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

### Ergebnisse

{{EmbedLiveSample('Examples')}}

Wenn Sie das `name` automatisch ausfüllen lassen, haben `name` und `email` beide einen abgerundeten Rand und eine magentafarbene Umrandung, obwohl sich der Rand aufgrund des im Benutzeragenten-Stilblatt festgelegten `!important`-Flags wahrscheinlich nicht ändern wird. Versuchen Sie, eines der Felder zu bearbeiten: Beachten Sie, wie die `:autofill`-Stile nicht mehr angewendet werden, sobald Sie den Wert bearbeiten, auch wenn Sie ihn auf seinen Autovervollständigungswert zurücksetzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<input>` Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#input_pseudo-classes)
- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
