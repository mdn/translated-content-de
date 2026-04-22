---
title: "`:autofill` CSS-Pseudoklasse"
short-title: :autofill
slug: Web/CSS/Reference/Selectors/:autofill
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

Die **`:autofill`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wird angewendet, wenn ein {{HTMLElement("input")}}-Element seinen Wert vom Browser automatisch ausgefüllt hat. Sie hört auf, zutreffend zu sein, wenn der Benutzer das Feld bearbeitet.

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

Die `:autofill`-Pseudoklasse wählt {{htmlelement("input")}}-Elemente aus, die unveränderte Inhalte enthalten, die vom User-Agent automatisch ausgefüllt wurden. Die Autovervollständigung kann auftreten, wenn die Browsereinstellungen so konfiguriert sind, dass Autovervollständigung aktiviert ist oder das [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) am Element selbst gesetzt ist.

Wenn der Benutzer die Autovervollständigungsfunktion des Browsers verwendet, um ein Formularelement automatisch auszufüllen, werden alle Formularelemente, die basierend auf der Auswahl ausgefüllt werden können, befüllt. Diese werden alle mit dem `:autofill`-UI-Status übereinstimmen. Falls der Benutzer ein Element bearbeitet, wird dieses Element nicht mehr mit `:autofill` übereinstimmen, selbst wenn der Wert derselbe wie der automatisch ausgefüllte Wert ist.

Die Spezifikation enthält die vendor-spezifische `:-webkit-autofill`-Pseudoklasse als Alias. Diese trifft auch auf Eingabeelemente zu, die vom User-Agent automatisch ausgefüllt wurden, und trifft nicht mehr zu, wenn der Benutzer das automatisch ausgefüllte Feld bearbeitet.

Beachten Sie, dass die User-Agent-Stylesheets vieler Browser `!important` in ihren Style-Deklarationen verwenden, wodurch einige Styles nicht überschrieben werden können. Zum Beispiel hat Chrome folgendes in seinem internen Stylesheet:

```css-nolint
input:-internal-autofill-selected {
  appearance: menulist-button;
  background-image: none !important;
  background-color:
    light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
  color: fieldtext !important;
}
```

Das bedeutet, dass Sie die Standardwerte für {{cssxref('background-color')}}, {{cssxref('background-image')}} oder {{cssxref('color')}} bei ausgewählten automatisch ausgefüllten Eingabeelementen in Ihren eigenen Regeln nicht überschreiben können, aber Sie können das {{cssxref('appearance')}} überschreiben, sowie diese Eigenschaften für nicht aktuell fokussierte automatisch ausgefüllte Elemente.

## Syntax

```css
:autofill {
  /* ... */
}
```

## Beispiele

Das folgende Beispiel demonstriert die Verwendung der `:autofill`-Pseudoklasse, um die Umrandung eines Textfelds zu ändern, das vom Browser automatisch ausgefüllt wurde.

### HTML

Wir fügen drei HTML-`<input>`-Elemente ein, jedes mit einem zugehörigen {{htmlelement("label")}}. Der `name` und `email` werden wahrscheinlich automatisch ausgefüllt und `:autofill` entsprechen, während der `pet`-Wert eher nicht.

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

Wir wenden einen {{cssxref("border-radius")}}, {{cssxref("outline")}} und {{cssxref("border-color")}} auf die `<input>`-Elemente an, wenn sie mit dem `:autofill`-Status übereinstimmen.

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

Wenn Sie das `name`-Feld automatisch ausfüllen lassen, werden sowohl `name` als auch `email` eine abgerundete Umrandung und eine magentafarbene Umrandung haben, obwohl sich die Umrandung aufgrund der `!important`-Markierung im User-Agent-Stylesheet wahrscheinlich nicht ändern wird. Versuchen Sie, eines der Felder zu bearbeiten: Beachten Sie, wie sich nach der Bearbeitung der Wert, selbst wenn Sie ihn auf den Autovervollständigungswert zurücksetzen, die `:autofill`-Styles nicht mehr anwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<input>`-Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#input_pseudo-classes)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
