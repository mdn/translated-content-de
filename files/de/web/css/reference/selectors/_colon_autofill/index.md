---
title: :autofill
slug: Web/CSS/Reference/Selectors/:autofill
l10n:
  sourceCommit: 1c68ccea9621d3b67d9e3bff8f9f2e948e4e7e54
---

Die **`:autofill`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) trifft zu, wenn ein {{HTMLElement("input")}}-Element vom Browser automatisch mit einem Wert ausgefüllt wurde. Die Klasse trifft nicht mehr zu, wenn der Benutzer das Feld bearbeitet.

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

Die `:autofill`-Pseudoklasse selektiert {{htmlelement("input")}}-Elemente, die nicht bearbeitete Inhalte enthalten, die vom User-Agent automatisch ausgefüllt wurden. Die Autovervollständigung kann erfolgen, wenn die Browsereinstellungen so konfiguriert sind, dass Autovervollständigung aktiviert ist, oder wenn das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) auf dem Element selbst gesetzt ist.

Wenn der Benutzer die Autovervollständigungsfunktion des Browsers verwendet, um ein Eingabefeld automatisch auszufüllen, werden alle Formularsteuerelemente, die basierend auf der Auswahl ausgefüllt werden können, befüllt. Diese entsprechen alle dem `:autofill`-UI-Status. Wenn der Benutzer ein Steuerelement bearbeitet, wird dieses Steuerelement nicht mehr `:autofill` entsprechen, selbst wenn der Wert derselbe wie der automatisch ausgefüllte Wert ist.

Die Spezifikation enthält die browser-spezifische Pseudoklasse `:-webkit-autofill` als Alias. Diese trifft ebenfalls auf Eingabeelemente zu, die vom User-Agent automatisch ausgefüllt wurden, und trifft nicht mehr zu, wenn der Benutzer das automatisch ausgefüllte Feld bearbeitet.

Beachten Sie, dass viele Browser in ihren Benutzer-Agent-Stylesheets `!important` in ihren Stil-Deklarationen verwenden, wodurch einige Stile nicht überschreibbar sind. Zum Beispiel enthält Chrome das Folgende in seinem internen Stylesheet:

```css-nolint
input:-internal-autofill-selected {
  appearance: menulist-button;
  background-image: none !important;
  background-color:
    light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
  color: fieldtext !important;
}
```

Das bedeutet, dass Sie die Standardwerte für {{cssxref('background-color')}}, {{cssxref('background-image')}} oder {{cssxref('color')}} für ausgewählte automatisch ausgefüllte Eingabeelemente in Ihren eigenen Regeln nicht überschreiben können, aber Sie können das {{cssxref('appearance')}} überschreiben, und Sie können diese Eigenschaften für die nicht fokussierten automatisch ausgefüllten Elemente überschreiben.

## Syntax

```css
:autofill {
  /* ... */
}
```

## Beispiele

Das folgende Beispiel demonstriert die Verwendung der `:autofill`-Pseudoklasse, um die Umrandung eines Textfeldes zu ändern, das vom Browser automatisch ausgefüllt wurde.

### HTML

Wir fügen drei HTML-`<input>`-Elemente hinzu, jeweils mit einem zugehörigen {{htmlelement("label")}}. Der `name` und `email` werden wahrscheinlich automatisch vervollständigt und `:autofill` entsprechen, während der `pet`-Wert dies wahrscheinlich nicht tut.

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

Wir wenden einen {{cssxref("border-radius")}}, {{cssxref("outline")}} und {{cssxref("border-color")}} auf die `<input>`-Elemente an, wenn sie dem `:autofill`-Status entsprechen.

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
    width: 100%;
    text-align: center;
    padding: 5px;
  }
}
```

### Ergebnisse

{{EmbedLiveSample('Examples')}}

Wenn Sie zulassen, dass der `name` automatisch vervollständigt wird, haben sowohl `name` als auch `email` eine abgerundete Umrandung und eine magentafarbene Umrandung, obwohl sich die Umrandung wahrscheinlich nicht ändert aufgrund des `!important`-Flags im Benutzer-Agent-Stylesheet. Versuchen Sie, eines der Felder zu bearbeiten: Beachten Sie, wie nach der Bearbeitung des Wertes, selbst wenn Sie ihn auf den Autovervollständigungswert zurücksetzen, die `:autofill`-Stile nicht mehr angewendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<input>` Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#input_pseudo-classes)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
