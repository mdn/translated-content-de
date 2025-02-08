---
title: ":open"
slug: Web/CSS/:open
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{CSSRef}}

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das offene und geschlossene Zustände hat, und zwar nur, wenn es sich derzeit im offenen Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die `:open`-Pseudoklasse selektiert jedes Element, das sich aktuell im offenen Zustand befindet. Dazu gehören folgende Elemente:

- {{htmlelement("details")}}- und {{htmlelement("dialog")}}-Elemente, die sich im offenen Zustand befinden, d. h., sie haben das Attribut `open` gesetzt.
- {{htmlelement("input")}}-Elemente, die eine Auswahlschnittstelle anzeigen, in der der Benutzer einen Wert auswählen kann (z. B. [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)), wenn die Auswahlschnittstelle angezeigt wird.
- {{htmlelement("select")}}-Elemente, die eine Dropdown-Auswahl anzeigen, in der der Benutzer einen Wert auswählen kann, wenn das Dropdown angezeigt wird.

Beachten Sie, dass die offenen und geschlossenen Zustände semantische Zustände sind und nicht unbedingt mit der Sichtbarkeit des entsprechenden Elements korrelieren. Beispielsweise ist ein `<details>`-Element, das aufklappt, um seinen Inhalt anzuzeigen, offen und wird durch den Selektor `details:open` ausgewählt, auch wenn es mit einem Wert von {{cssxref("visibility")}} auf `hidden` verborgen ist.

[Popover](/de/docs/Web/API/Popover_API)-Elemente (das sind Elemente mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut) haben unterschiedliche semantische Zustände, die anzeigen, ob Popover sichtbar sind oder nicht, was gleichzeitig mit offenen und geschlossenen Zuständen existieren kann. Verwenden Sie die {{cssxref(":popover-open")}}-Pseudoklasse, um ein Popover-Element im angezeigten Zustand zu selektieren.

## Beispiele

### Grundlegende `:open`-Verwendung

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

### Benutzerdefinierte `<select>`-Gestaltung mit `:open`

In diesem Beispiel wird einem grundlegenden {{htmlelement("select")}}-Element eine benutzerdefinierte Gestaltung hinzugefügt. Die `:open`-Pseudoklasse wird verwendet, um eine Styling-Anpassung für den offenen Zustand anzuwenden — wenn das Dropdown-Menü angezeigt wird.

#### HTML

Es gibt nichts Besonderes an unserem Fruchtwähler.

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
> Wir verwenden kein mehrzeiliges `<select>`-Element (also eines mit dem [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut), da diese in der Regel als scrollbare Listenboxen und nicht als Dropdown-Menüs dargestellt werden und daher keinen offenen Zustand haben.

#### CSS

Im CSS setzen wir den Wert `none` für {{cssxref("appearance")}} auf unser `<select>`-Element, um das standardmäßige Styling des Betriebssystems zu entfernen, und fügen einige Grundstile hinzu. Besonders auffällig ist, dass wir ein {{Glossary("SVG", "SVG")}}-Hintergrundbild eines Abwärtspfeils auf der rechten Seite einfügen — Benutzer erkennen `<select>`-Elemente oft an diesem Abwärtspfeil, sodass es eine gute Idee ist, ihn zu integrieren.

Anschließend setzen wir etwas {{cssxref("padding")}} auf das umgebende {{htmlelement("label")}}-Element sowie einen transparenten Rahmen, um das Layout konsistent zu halten, wenn wir später einen farbigen Rahmen hinzufügen.

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

Wenn das `<select>` geöffnet ist, verwenden wir die `:open`-Pseudoklasse, um eine andere Hintergrundfarbe einzustellen und das Hintergrundbild in einen Aufwärtspfeil zu ändern. Wir setzen außerdem eine andere Hintergrundfarbe und einen Rahmen auf das umschließende `<label>`-Element, indem wir eine Kombination aus den Pseudoklassen `:open` und {{cssxref(":has()")}} verwenden, um einen Elternelement-Selektor zu erstellen. Damit sagen wir buchstäblich: „Selektieren Sie das `<label>`, aber nur, wenn sein Nachfahre `<select>` geöffnet ist.“

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

Das Ergebnis sieht folgendermaßen aus. Öffnen Sie das `<select>`-Dropdown, um die Wirkung auf das Styling zu sehen:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}} und {{htmlelement("input")}}-Elemente
- {{cssxref(":popover-open")}}-Pseudoklasse
- {{Cssxref(":modal")}}
