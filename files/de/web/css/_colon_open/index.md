---
title: ":open"
slug: Web/CSS/:open
l10n:
  sourceCommit: 512842cd44a2c87972e49abc8371b035166609bc
---

{{CSSRef}}

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das einen geöffneten und geschlossenen Zustand hat, nur wenn es sich aktuell im geöffneten Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die `:open`-Pseudoklasse wählt jedes Element aus, das sich derzeit im geöffneten Zustand befindet. Dazu gehören die folgenden Elemente:

- {{htmlelement("details")}}- und {{htmlelement("dialog")}}-Elemente, die sich im geöffneten Zustand befinden, d.h. wenn das `open`-Attribut gesetzt ist.
- {{htmlelement("input")}}-Elemente, die eine Auswahloberfläche anzeigen, aus der der Benutzer einen Wert wählen kann (z.B. [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)), wenn diese Oberfläche angezeigt wird.
- {{htmlelement("select")}}-Elemente, die ein Dropdown-Menü für die Auswahl eines Wertes anzeigen, wenn dieses Menü angezeigt wird.

Beachten Sie, dass offene und geschlossene Zustände semantische Zustände sind und nicht unbedingt mit der Sichtbarkeit des betreffenden Elements korrelieren. Zum Beispiel ist ein `<details>`-Element, das erweitert ist, um seinen Inhalt zu zeigen, geöffnet und wird vom `details:open`-Selektor ausgewählt, selbst wenn es mit einem {{cssxref("visibility")}}-Wert von `hidden` versteckt ist.

[Popover](/de/docs/Web/API/Popover_API)-Elemente (d.h. Elemente mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut) haben separate semantische Zustände, die anzeigen, ob sie sichtbar oder verborgen sind, was parallel zu offenen und geschlossenen Zuständen existieren kann. Um ein Popover-Element im sichtbaren Zustand zu selektieren, verwenden Sie die Pseudoklasse {{cssxref(":popover-open")}}.

## Beispiele

### Grundlegende Nutzung von `:open`

Dieses Beispiel zeigt einige HTML-Elemente, die einen offenen Zustand haben.

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

### Benutzerdefinierte `<select>`-Stilierung mit `:open`

In diesem Beispiel erhält ein einfaches {{htmlelement("select")}}-Element eine benutzerdefinierte Stilierung. Die `:open`-Pseudoklasse wird verwendet, um eine Stilverbesserung für den offenen Zustand anzuwenden – wenn das Dropdown-Menü angezeigt wird.

#### HTML

Unser Fruchtwähler hat nichts Besonderes.

```html
<label>
  Choose your favorite fruit:
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
> Wir verwenden kein mehrzeiliges `<select>` (also eines mit dem [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut) – solche tendieren dazu, als Scroll-Listenfeld anstelle eines Dropdown-Menüs dargestellt zu werden und haben daher keinen offenen Zustand.

#### CSS

Im CSS setzen wir einen {{cssxref("appearance")}}-Wert von `none` auf unser `<select>`-Element, um die standardmäßige Betriebssystem-Stilierung zu entfernen, und fügen einige grundlegende eigene Stile hinzu. Besonders hervorzuheben ist, dass wir ein {{Glossary("SVG", "SVG")}}-Hintergrundbild eines nach unten zeigenden Pfeils auf der rechten Seite hinzufügen – Benutzer erkennen `<select>`-Elemente oft an diesem Pfeil, daher ist es eine gute Idee, ihn zu integrieren.

Anschließend fügen wir etwas {{cssxref("padding")}} auf das umgebende {{htmlelement("label")}}-Element hinzu und setzen einen transparenten Rahmen, um das Layout konsistent zu halten, wenn wir später einen farbigen Rahmen hinzufügen.

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

Wenn das `<select>` geöffnet wird, nutzen wir die `:open`-Pseudoklasse, um eine andere Hintergrundfarbe zu setzen und das Hintergrundbild in einen nach oben zeigenden Pfeil zu ändern. Außerdem setzen wir eine andere Hintergrundfarbe und einen Rahmen auf das umschließende `<label>`-Element, indem wir eine Kombination aus der `:open`- und {{cssxref(":has()")}}-Pseudoklasse verwenden, um einen Elternelement-Selektor zu erstellen. Wir sagen wörtlich: "Wählen Sie das `<label>` aus, aber nur, wenn sein Nachkommenelement `<select>` geöffnet ist."

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

Das Ergebnis ist wie folgt. Versuchen Sie, das `<select>`-Dropdown zu öffnen, um den Effekt auf die Stilierung zu sehen:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, und {{htmlelement("input")}}-Elemente
- {{cssxref(":popover-open")}}-Pseudoklasse
- {{Cssxref(":modal")}}
