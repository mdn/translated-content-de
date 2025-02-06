---
title: :open
slug: Web/CSS/:open
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{SeeCompatTable}}

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das zwischen offenen und geschlossenen Zuständen wechseln kann, und zwar nur, wenn es sich momentan im offenen Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die `:open`-Pseudoklasse wählt jedes Element aus, das sich momentan im offenen Zustand befindet. Dazu gehören folgende Elemente:

- {{htmlelement("details")}}- und {{htmlelement("dialog")}}-Elemente, die sich im offenen Zustand befinden, d. h., die das `open`-Attribut gesetzt haben.
- {{htmlelement("input")}}-Elemente, die eine Pickerauswahl zur Verfügung stellen, mit der der Benutzer einen Wert auswählen kann (zum Beispiel [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)), wenn der Picker angezeigt wird.
- {{htmlelement("select")}}-Elemente, die ein Dropdown-Menü anzeigen, um einen Wert auszuwählen, wenn das Dropdown sichtbar ist.

Beachten Sie, dass die Zustände „offen“ und „geschlossen“ semantische Zustände sind und nicht unbedingt mit der Sichtbarkeit des jeweiligen Elements korrelieren. Zum Beispiel ist ein `<details>`-Element, das erweitert ist, um seinen Inhalt anzuzeigen, offen und wird durch den `details:open`-Selektor ausgewählt, auch wenn es mit einem {{cssxref("visibility")}}-Wert von `hidden` verborgen ist.

[Popover](/de/docs/Web/API/Popover_API)-Elemente (d. h. Elemente mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut) haben unterschiedliche semantische Zustände, die angeben, ob Popovers angezeigt oder verborgen sind. Diese Zustände können parallel zu den offenen und geschlossenen Zuständen existieren. Um ein Popover-Element im angezeigten Zustand zu selektieren, verwenden Sie die {{cssxref(":popover-open")}}-Pseudoklasse.

## Beispiele

### Grundlegende Verwendung von `:open`

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

### Benutzerdefinierte `<select>`-Stilgestaltung mit `:open`

In diesem Beispiel wird ein einfaches {{htmlelement("select")}}-Element mit benutzerdefinierter Gestaltung versehen. Die `:open`-Pseudoklasse wird verwendet, um eine stilistische Anpassung für den offenen Zustand vorzunehmen — wenn das Dropdown-Menü angezeigt wird.

#### HTML

Es gibt nichts Besonderes an unserem Fruchtauswahl-Dropdown.

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
> Wir verwenden kein mehrzeiliges `<select>`-Element (d. h. eines mit dem [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut), da diese meistens als scrollbare Listenbox statt als Dropdown-Menü dargestellt werden und daher keinen offenen Zustand haben.

#### CSS

Im CSS setzen wir einen {{cssxref("appearance")}}-Wert von `none` auf unser `<select>`-Element, um den Standard-Betriebssystemstil des Auswahlfelds zu entfernen, und fügen einige grundlegende eigene Stile hinzu. Besonders auffällig ist ein {{Glossary("SVG", "SVG")}}-Hintergrundbild eines nach unten zeigenden Pfeils auf der rechten Seite – Nutzer erkennen `<select>`-Elemente in der Regel an solchen Pfeilen, daher ist es eine gute Idee, ihn einzubeziehen.

Weiterhin setzen wir {{cssxref("padding")}} auf das umgebende {{htmlelement("label")}}-Element und einen transparenten Rahmen, um die Konsistenz des Layouts zu wahren, wenn wir später einen farbigen Rahmen hinzufügen.

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

Wenn das `<select>` geöffnet ist, verwenden wir die `:open`-Pseudoklasse, um eine andere Hintergrundfarbe festzulegen und das Hintergrundbild in einen nach oben zeigenden Pfeil zu ändern. Außerdem ändern wir die Hintergrundfarbe und den Rahmen des umschließenden `<label>`-Elements, indem wir eine Kombination der `:open`- und {{cssxref(":has()")}}-Pseudoklassen nutzen, um einen Elternselektor zu erstellen. Wir sagen buchstäblich: „Wählen Sie das `<label>`, aber nur, wenn sein Nachkomme `<select>` geöffnet ist.“

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

Das Ergebnis ist wie folgt. Öffnen Sie das `<select>`-Dropdown, um den Effekt auf die Gestaltung zu sehen:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, und {{htmlelement("input")}}-Elemente
- {{cssxref(":popover-open")}}-Pseudoklasse
- {{Cssxref(":modal")}}
