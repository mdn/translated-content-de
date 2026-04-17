---
title: "`:autofill` CSS-Pseudoklasse"
short-title: :autofill
slug: Web/CSS/Reference/Selectors/:autofill
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:autofill`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) greift, wenn ein {{HTMLElement("input")}}-Element vom Browser automatisch ausgefüllt wird. Die Klasse hört auf, auszuwählen, wenn der Benutzer das Feld bearbeitet.

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

Die `:autofill` Pseudoklasse wählt {{htmlelement("input")}}-Elemente aus, die nicht bearbeitete Inhalte enthalten, die vom User-Agent automatisch ausgefüllt wurden. Die Autovervollständigung kann auftreten, wenn die Browsereinstellungen auf Autovervollständigung eingestellt sind oder das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) bei dem Element selbst gesetzt ist.

Wenn der Benutzer die Autovervollständigungsfunktion des Browsers zum automatischen Ausfüllen eines Formularsteuerelements verwendet, werden alle Formularsteuerelemente, die basierend auf der Auswahl automatisch ausgefüllt werden können, ausgefüllt. Diese entsprechen alle dem `:autofill`-UI-Zustand. Wenn der Benutzer ein Steuerelement bearbeitet, wird dieses Steuerelement nicht mehr `:autofill` entsprechen, selbst wenn der Wert mit dem automatisch ausgefüllten Wert identisch ist.

Die Spezifikation enthält die mit einem Anbieterpräfix versehene Pseudoklasse `:-webkit-autofill` als Alias. Diese stimmt ebenfalls mit Eingabeelementen überein, die vom User-Agent automatisch ausgefüllt wurden, und stimmt nicht mehr zu, wenn der Benutzer das ausgefüllte Feld bearbeitet.

Es ist zu beachten, dass die User-Agent-Stylesheets vieler Browser `!important` in ihren Deklarationen verwenden, wodurch einige Stile nicht überschrieben werden können. Zum Beispiel hat Chrome Folgendes in seinem internen Stylesheet:

```css-nolint
input:-internal-autofill-selected {
  appearance: menulist-button;
  background-image: none !important;
  background-color:
    light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
  color: fieldtext !important;
}
```

Dies bedeutet, dass Sie die Standardwerte von {{cssxref('background-color')}}, {{cssxref('background-image')}} oder {{cssxref('color')}} auf ausgewählten automatisch ausgefüllten Eingabeelementen in Ihren eigenen Regeln nicht überschreiben können, aber Sie können das {{cssxref('appearance')}} überschreiben, und Sie können diese Eigenschaften für die automatisch ausgefüllten Elemente überschreiben, die nicht aktuell fokussiert sind.

## Syntax

```css
:autofill {
  /* ... */
}
```

## Beispiele

Das folgende Beispiel demonstriert die Verwendung der `:autofill` Pseudoklasse, um den Rahmen eines Textfelds zu ändern, das vom Browser automatisch ausgefüllt wurde.

### HTML

Wir fügen drei HTML-`<input>`-Elemente ein, jeweils mit einem zugehörigen {{htmlelement("label")}}. `name` und `email` werden wahrscheinlich automatisch vervollständigt und entsprechen `:autofill`, während der `pet`-Wert wahrscheinlich nicht.

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

Wir wenden einen {{cssxref("border-radius")}}, {{cssxref("outline")}} und {{cssxref("border-color")}} auf die `<input>`-Elemente an, wenn sie dem `:autofill`-Zustand entsprechen.

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

Wenn Sie das `name` automatisch ausfüllen lassen, haben `name` und `email` beide einen abgerundeten Rahmen und eine magentafarbene Umrandung, obwohl sich der Rahmen wahrscheinlich nicht ändern wird, da das `!important`-Flag im User-Agent-Stylesheet gesetzt ist. Versuchen Sie, eines der Felder zu bearbeiten: Beachten Sie, wie die `:autofill`-Stile nicht mehr angewendet werden, sobald Sie den Wert bearbeiten, selbst wenn Sie ihn auf den Autovervollständigungswert zurücksetzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<input>` Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#input_pseudo-classes)
- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
