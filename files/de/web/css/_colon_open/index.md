---
title: ":open"
slug: Web/CSS/:open
l10n:
  sourceCommit: 41f2977624562dde84c0ef5956a80ee2575c80f0
---

{{CSSRef}}{{SeeCompatTable}}

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das offene und geschlossene Zustände hat, nur wenn es sich derzeit im offenen Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die `:open` Pseudoklasse wählt jedes Element aus, das sich derzeit im offenen Zustand befindet. Dies schließt die folgenden Elemente ein:

- {{htmlelement("details")}} und {{htmlelement("dialog")}} Elemente, die sich im offenen Zustand befinden, das heißt, sie haben das `open` Attribut gesetzt.
- {{htmlelement("input")}} Elemente, die eine Auswahloberfläche anzeigen, damit der Benutzer einen Wert auswählen kann (zum Beispiel [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)), wenn die Auswahloberfläche angezeigt wird.
- {{htmlelement("select")}} Elemente, die ein Dropdown-Feld anzeigen, damit der Benutzer einen Wert auswählen kann, wenn das Dropdown angezeigt wird.

Beachten Sie, dass die offenen und geschlossenen Zustände semantische Zustände sind und nicht unbedingt mit der Sichtbarkeit des betreffenden Elements korrelieren. Ein `<details>` Element, das erweitert ist, um seinen Inhalt zu zeigen, ist offen und wird vom `details:open` Selektor ausgewählt, selbst wenn es mit einem {{cssxref("visibility")}} Wert von `hidden` verborgen ist.

[Popover](/de/docs/Web/API/Popover_API) Elemente (das sind Elemente, die das [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut gesetzt haben) haben unterschiedliche semantische Zustände, die Popovers darstellen, die angezeigt oder versteckt sind und parallel zu offenen und geschlossenen Zuständen existieren können. Um ein Popover Element im Anzeigestatus zu selektieren, verwenden Sie stattdessen die {{cssxref(":popover-open")}} Pseudoklasse.

## Beispiele

### Grundlegende Verwendung von `:open`

Dieses Beispiel demonstriert einige der HTML-Elemente, die einen offenen Zustand haben.

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

### Benutzerdefinierte `<select>`-Stilgestaltung mit `:open`

In diesem Beispiel geben wir einem einfachen {{htmlelement("select")}} Element eine benutzerdefinierte Stilgestaltung. Die `:open` Pseudoklasse wird verwendet, um eine Stilverbesserung auf ihren offenen Zustand anzuwenden — wenn das Dropdown-Menü angezeigt wird.

#### HTML

Unser Fruchtauswahlelement ist nichts Besonderes.

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
> Wir verwenden kein mehrzeiliges `<select>` (das heißt, eines mit dem [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut gesetzt) — diese neigen dazu, als Scroll-Listenfeld statt als Dropdown-Menü dargestellt zu werden, und haben daher keinen offenen Zustand.

#### CSS

Im CSS setzen wir einen {{cssxref("appearance")}} Wert von `none` auf unser `<select>` Element, um die standardmäßige OS-Stilgestaltung vom Auswahlfeld zu entfernen und einige grundlegende eigene Stile zu liefern. Insbesondere setzen wir ein {{Glossary("SVG", "SVG")}} Hintergrundbild von einem Abwärtspfeil auf der rechten Seite — Benutzer erkennen `<select>` Elemente üblicherweise am Abwärtspfeil, daher ist es eine gute Idee, diesen beizubehalten.

Wir setzen dann etwas {{cssxref("padding")}} auf das umgebende {{htmlelement("label")}} Element und eine transparente Grenze, um das Layout konsistent zu halten, wenn wir später eine farbige Grenze hinzufügen.

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

Wenn das `<select>` geöffnet ist, verwenden wir die `:open` Pseudoklasse, um eine andere Hintergrundfarbe festzulegen und das Hintergrundbild in einen Aufwärtspfeil zu ändern. Wir setzen auch eine andere Hintergrundfarbe und Grenze auf das umschließende `<label>` Element, indem wir eine Kombination der `:open` und {{cssxref(":has()")}} Pseudoklassen verwenden, um einen Eltern-Selektor zu erstellen. Wir sagen buchstäblich "wähle das `<label>`, aber nur, wenn dessen Nachkommen `<select>` offen ist."

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

Das Ergebnis ist wie folgt. Versuchen Sie, das `<select>` Dropdown zu öffnen, um die Wirkung auf die Stilgestaltung zu sehen:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, und {{htmlelement("input")}} Elemente
- {{cssxref(":popover-open")}} Pseudoklasse
- {{Cssxref(":modal")}}
