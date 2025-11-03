---
title: :open
slug: Web/CSS/Reference/Selectors/:open
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, das offene und geschlossene Zustände hat, nur wenn es sich aktuell im offenen Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die `:open` Pseudoklasse selektiert jedes Element, das sich aktuell im offenen Zustand befindet, was die folgenden Elemente umfasst:

- {{htmlelement("details")}} und {{htmlelement("dialog")}} Elemente, die sich in einem offenen Zustand befinden, d.h. sie haben das `open` Attribut gesetzt.
- {{htmlelement("input")}} Elemente, die eine Auswahlschnittstelle anzeigen, aus der der Benutzer einen Wert wählen kann (zum Beispiel [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)), wenn der Auswahlbereich angezeigt wird.
- {{htmlelement("select")}} Elemente, die ein Dropdown-Auswahlmenü anzeigen, aus dem der Benutzer einen Wert wählen kann, wenn der Auswahlbereich angezeigt wird. Beachten Sie, dass beim Implementieren von [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), der Auswahlbereich selbst mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudoelement ausgewählt werden kann.

Beachten Sie, dass die offenen und geschlossenen Zustände semantische Zustände sind und nicht unbedingt mit der Sichtbarkeit des betreffenden Elements korrelieren. Zum Beispiel ist ein `<details>` Element, das erweitert wird, um seinen Inhalt anzuzeigen, offen und wird durch den `details:open` Selektor ausgewählt, selbst wenn es mit einem {{cssxref("visibility")}} Wert von `hidden` verborgen ist.

[Popover](/de/docs/Web/API/Popover_API) Elemente (d.h. Elemente mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut) haben unterschiedliche semantische Zustände, die Popover repräsentieren, die angezeigt oder verborgen sind und die neben den offenen und geschlossenen Zuständen existieren können. Um ein Popover-Element im angezeigten Zustand anzuwählen, verwenden Sie die {{cssxref(":popover-open")}} Pseudoklasse.

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

{{EmbedLiveSample("Grundlegende Verwendung von `:open`", 300, 200)}}

### Benutzerdefinierte `<select>`-Stil mit `:open`

In diesem Beispiel geben wir einem grundlegenden {{htmlelement("select")}} Element eine benutzerdefinierte Stilgebung. Die `:open` Pseudoklasse wird verwendet, um eine Stilverbesserung für seinen offenen Zustand anzuwenden — wenn das Dropdown-Menü angezeigt wird.

#### HTML

Unser Fruchtwähler ist nichts Besonderes.

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
> Wir verwenden kein mehrzeiliges `<select>` (d.h. eines mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut) — diese neigen dazu, als Bildlauflistenfeld anstelle eines Dropdown-Menüs dargestellt zu werden und haben daher keinen offenen Zustand.

#### CSS

Im CSS setzen wir einen {{cssxref("appearance")}} Wert von `none` auf unser `<select>` Element, um die standardmäßige Betriebssystemstilgebung von der Auswahlliste zu entfernen und einige grundlegende eigene Stile hinzuzufügen. Besonders bemerkenswert ist, dass wir ein {{Glossary("SVG", "SVG")}} Hintergrundbild eines nach unten zeigenden Pfeils auf der rechten Seite setzen — Benutzer erkennen `<select>` Elemente oft an dem nach unten zeigenden Pfeil, daher ist es eine gute Idee, ihn einzubeziehen.

Wir setzen dann etwas {{cssxref("padding")}} auf dem umgebenden {{htmlelement("label")}} Element und einen transparenten Rahmen, um das Layout konsistent zu halten, wenn wir später einen farbigen Rahmen hinzufügen.

```css
select {
  appearance: none;
  width: 100%;
  display: block;
  font-family: inherit;
  font-size: 100%;
  padding: 5px;
  border: 1px solid black;
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='5,5 15,5 10,15'/%3E%3C/svg%3E")
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

Wenn das `<select>` geöffnet ist, verwenden wir die `:open` Pseudoklasse, um eine andere Hintergrundfarbe zu setzen und das Hintergrundbild in einen nach oben zeigenden Pfeil zu ändern. Wir setzen auch eine andere Hintergrundfarbe und einen Rahmen auf das umgebende `<label>` Element, indem wir eine Kombination der `:open` und {{cssxref(":has()")}} Pseudoklassen verwenden, um einen übergeordneten Selektor zu erstellen. Wir sagen wörtlich "wähle das `<label>`, aber nur, wenn sein Nachkomme `<select>` offen ist."

```css
select:open {
  background-color: #f8f2dc;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='5,15 10,5 15,15'/%3E%3C/svg%3E");
}

label:has(select:open) {
  background-color: #81adc8;
  border-color: #cd4631;
}
```

#### Ergebnis

Das Ergebnis ist wie folgt. Versuchen Sie, das `<select>` Dropdown zu öffnen, um den Effekt auf die Stilgebung zu sehen:

{{ EmbedLiveSample("Benutzerdefinierte `<select>`-Stil mit `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, und {{htmlelement("input")}} Elemente
- {{cssxref(":popover-open")}} Pseudoklasse
- {{Cssxref(":modal")}}
