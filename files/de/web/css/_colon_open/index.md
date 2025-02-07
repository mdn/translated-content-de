---
title: ":open"
slug: Web/CSS/:open
l10n:
  sourceCommit: 315d781abffb349cbfb730b83ffeccdea980ddeb
---

{{CSSRef}}{{SeeCompatTable}}

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das geöffnete und geschlossene Zustände hat, jedoch nur, wenn es sich derzeit im geöffneten Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die Pseudoklasse `:open` wählt jedes Element aus, das sich aktuell im geöffneten Zustand befindet. Dazu gehören die folgenden Elemente:

- {{htmlelement("details")}}- und {{htmlelement("dialog")}}-Elemente, die sich im geöffneten Zustand befinden, d. h. das `open`-Attribut ist gesetzt.
- {{htmlelement("input")}}-Elemente, die eine Auswahloberfläche anzeigen, damit der Benutzer einen Wert auswählen kann (zum Beispiel [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)), wenn der Picker angezeigt wird.
- {{htmlelement("select")}}-Elemente, die eine Dropdown-Liste anzeigen, damit der Benutzer einen Wert auswählen kann, wenn die Dropdown-Liste angezeigt wird.

Beachten Sie, dass die Zustände "geöffnet" und "geschlossen" semantische Zustände sind und nicht unbedingt mit der Sichtbarkeit des betreffenden Elements korrelieren. Zum Beispiel wird ein `<details>`-Element, das erweitert ist, um seinen Inhalt anzuzeigen, als geöffnet betrachtet und durch den Selektor `details:open` ausgewählt, auch wenn es mit einem {{cssxref("visibility")}}-Wert von `hidden` ausgeblendet ist.

[Popover](/de/docs/Web/API/Popover_API)-Elemente (d. h. Elemente mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut) besitzen unterschiedliche semantische Zustände, die darstellen, ob sie angezeigt werden oder verborgen sind. Diese können neben den Zuständen "geöffnet" und "geschlossen" koexistieren. Um ein Popover-Element im angezeigten Zustand zu selektieren, verwenden Sie die {{cssxref(":popover-open")}}-Pseudoklasse.

## Beispiele

### Grundlegende Verwendung von `:open`

Dieses Beispiel zeigt einige der HTML-Elemente, die einen geöffneten Zustand haben.

#### CSS

```css
details:open > summary {
  background-color: pink;
}

:is(select, input):open {
  background-color: pink;
}
```

```css hidden
@supports not selector(:open) {
  body::before {
    content: "Your browser doesn't support :open selector.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body > * {
    display: none;
  }
}
```

#### HTML

```html
<details>
  <summary>Details</summary>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar dapibus
  lacus, sit amet finibus lectus mollis eu. Nullam quis orci dictum, porta lacus
  et, cursus nunc. Aenean pulvinar imperdiet neque fermentum facilisis. Nulla
  facilisi. Curabitur vitae sapien ut nunc pulvinar semper vitae vitae nisi.
</details>
<hr />

<label for="pet-select">Choose a pet:</label>
<select id="pet-select">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
</select>
<hr />

<label for="start">Start date:</label>
<input type="date" id="start" />
```

#### Ergebnis

{{EmbedLiveSample("Basic `:open` usage", 300, 200)}}

### Individuelle `<select>`-Stilgestaltung mit `:open`

In diesem Beispiel geben wir einem einfachen {{htmlelement("select")}}-Element ein individuelles Styling. Die Pseudoklasse `:open` wird verwendet, um im geöffneten Zustand – wenn das Dropdown-Menü angezeigt wird – eine Styling-Verbesserung anzuwenden.

#### HTML

Es gibt nichts Besonderes an unserem Früchteauswahlelement.

```html
<label>
  Choose your favourite fruit:
  <select name="fruit">
    <option>apple</option>
    <option>banana</option>
    <option>boysenberry</option>
    <option>cranberry</option>
    <option>fig</option>
    <option>grapefruit</option>
    <option>lemon</option>
    <option>orange</option>
    <option>papaya</option>
    <option>pomegranate</option>
    <option>tomato</option>
  </select>
</label>
```

> [!NOTE]
> Wir verwenden kein mehrzeiliges `<select>` (also eines mit dem [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut) — solche Elemente werden in der Regel als scrollbare Listenbox anstelle eines Dropdown-Menüs dargestellt und haben daher keinen geöffneten Zustand.

#### CSS

Im CSS setzen wir einen {{cssxref("appearance")}}-Wert von `none` für unser `<select>`-Element, um die Standard-OS-Stilgestaltung des Auswahlfelds zu entfernen, und stellen einige grundlegende eigene Stile bereit. Besonders auffällig ist, dass wir ein {{Glossary("SVG", "SVG")}}-Hintergrundbild eines Pfeils nach unten auf der rechten Seite hinzufügen – Nutzer erkennen `<select>`-Elemente in der Regel an diesem Pfeil, daher ist es sinnvoll, ihn zu integrieren.

Danach setzen wir etwas {{cssxref("padding")}} für das umgebende {{htmlelement("label")}}-Element und eine transparente Umrandung, um das Layout konsistent zu halten, wenn wir später eine farbige Umrandung hinzufügen.

```css
select {
  appearance: none;
  width: 100%;
  display: block;
  font-family: inherit;
  font-size: 100%;
  padding: 5px;
  border: 1px solid black;
  background-color: white;
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewbox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='5,5 15,5 10,15'/%3E%3C/svg%3E")
    no-repeat right 3px center / 1em 1em;
}

label {
  font-family: sans-serif;
  max-width: 20em;
  display: block;
  padding: 20px;
  border: 2px solid transparent;
}
```

Wenn das `<select>` geöffnet wird, verwenden wir die Pseudoklasse `:open`, um eine andere Hintergrundfarbe zu setzen und das Hintergrundbild in einen Pfeil nach oben zu ändern. Darüber hinaus setzen wir mit einer Kombination aus `:open` und der {{cssxref(":has()")}}-Pseudoklasse eine andere Hintergrundfarbe und Umrandung für das umliegende `<label>`-Element, um einen Elternselektor zu erstellen. Wir sagen buchstäblich: "Wählen Sie das `<label>` aus, aber nur, wenn dessen Nachkomme `<select>` geöffnet ist."

```css
select:open {
  background-color: #f8f2dc;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewbox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='5,15 10,5 15,15'/%3E%3C/svg%3E");
}

label:has(select:open) {
  background-color: #81adc8;
  border-color: #cd4631;
}
```

#### Ergebnis

Das Ergebnis sieht wie folgt aus. Versuchen Sie, das Dropdown-Menü des `<select>` zu öffnen, um den Effekt auf das Styling zu sehen:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, und {{htmlelement("input")}}-Elemente
- {{cssxref(":popover-open")}}-Pseudoklasse
- {{Cssxref(":modal")}}
