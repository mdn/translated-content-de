---
title: :open
slug: Web/CSS/:open
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das offene und geschlossene Zustände hat, nur wenn es sich derzeit im offenen Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die `:open` Pseudoklasse wählt jedes Element im offenen Zustand aus, einschließlich der folgenden Elemente:

- {{htmlelement("details")}} und {{htmlelement("dialog")}} Elemente, die sich in einem offenen Zustand befinden, d.h. sie haben das `open` Attribut gesetzt.
- {{htmlelement("input")}} Elemente, die eine Interface-Anzeige bieten, damit der Benutzer einen Wert auswählen kann (zum Beispiel [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)), wenn der Picker angezeigt wird.
- {{htmlelement("select")}} Elemente, die ein Dropdown-Picker anzeigen, um dem Benutzer die Auswahl eines Wertes zu ermöglichen, wenn der Picker angezeigt wird. Beachten Sie, dass bei der Implementierung von [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) der Picker selbst mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudoelement ausgewählt werden kann.

Beachten Sie, dass die offenen und geschlossenen Zustände semantische Zustände sind und nicht unbedingt mit der Sichtbarkeit des betreffenden Elements korrelieren. Zum Beispiel ist ein `<details>` Element, das erweitert wurde, um seinen Inhalt anzuzeigen, offen und wird vom `details:open` Selektor ausgewählt, auch wenn es mit einem {{cssxref("visibility")}} Wert von `hidden` verborgen ist.

[Popover](/de/docs/Web/API/Popover_API) Elemente (das heißt, Elemente mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut) haben unterschiedliche semantische Zustände, die Popovers darstellen, die angezeigt oder verborgen sind, was neben offenen und geschlossenen Zuständen koexistieren kann. Um ein Popover-Element im angezeigten Zustand anzusprechen, verwenden Sie die {{cssxref(":popover-open")}} Pseudoklasse.

## Beispiele

### Grundlegende `:open` Verwendung

Dieses Beispiel zeigt einige der HTML-Elemente, die einen offenen Zustand haben.

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

### Anpassung eines `<select>` mit `:open`

In diesem Beispiel geben wir einem grundlegenden {{htmlelement("select")}} Element einige benutzerdefinierte Stile. Die `:open` Pseudoklasse wird verwendet, um eine Stilverbesserung auf ihren offenen Zustand anzuwenden — wenn das Dropdown-Menü angezeigt wird.

#### HTML

Unser Fruchtauswahl-Element hat nichts Besonderes.

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
> Wir verwenden kein mehrzeiliges `<select>` (das heißt, eines mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut) — diese werden tendenziell als scrollbare Listenbox anstelle eines Dropdown-Menüs gerendert und haben daher keinen offenen Zustand.

#### CSS

Im CSS legen wir einen {{cssxref("appearance")}} Wert von `none` auf unser `<select>` Element, um das Standard-OS-Styling vom Auswahlfeld zu entfernen und einige grundlegende Stile von uns hinzuzufügen. Am bemerkenswertesten setzen wir ein {{Glossary("SVG", "SVG")}} Hintergrundbild eines Pfeils nach unten auf der rechten Seite — Benutzer erkennen `<select>` Elemente oft am Pfeil nach unten, daher ist es ratsam, ihn einzuschließen.

Dann setzen wir etwas {{cssxref("padding")}} auf das umgebende {{htmlelement("label")}} Element und einen transparenten Rand, um das Layout konsistent zu halten, wenn wir später einen farbigen Rand hinzufügen.

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

Wenn das `<select>` geöffnet ist, verwenden wir die `:open` Pseudoklasse, um eine andere Hintergrundfarbe festzulegen und das Hintergrundbild auf einen Pfeil nach oben zu ändern. Wir setzen auch eine andere Hintergrundfarbe und einen Rand auf das umschließende `<label>` Element, indem wir eine Kombination aus `:open` und {{cssxref(":has()")}} Pseudoklassen verwenden, um einen Elternselektor zu erstellen. Wir sagen wörtlich "wählen Sie das `<label>` aus, aber nur, wenn sein Nachkomme `<select>` geöffnet ist."

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

Das Ergebnis ist wie folgt. Versuchen Sie, das `<select>` Dropdown zu öffnen, um den Effekt auf die Gestaltung zu sehen:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, und {{htmlelement("input")}} Elemente
- {{cssxref(":popover-open")}} Pseudoklasse
- {{Cssxref(":modal")}}
