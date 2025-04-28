---
title: :open
slug: Web/CSS/:open
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{CSSRef}}

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das offene und geschlossene Zustände hat, nur wenn es sich gerade im offenen Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die `:open` Pseudoklasse wählt jedes Element aus, das sich derzeit im offenen Zustand befindet, einschließlich der folgenden Elemente:

- {{htmlelement("details")}} und {{htmlelement("dialog")}} Elemente, die sich im geöffneten Zustand befinden, also das `open` Attribut gesetzt haben.
- {{htmlelement("input")}} Elemente, die eine Auswahloberfläche anzeigen, aus der der Benutzer einen Wert wählen kann (zum Beispiel [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)), wenn der Auswahlmechanismus angezeigt wird.
- {{htmlelement("select")}} Elemente, die ein Dropdown-Auswahlfeld anzeigen, aus dem der Benutzer einen Wert wählen kann, wenn der Auswahlmechanismus angezeigt wird. Beachten Sie, dass beim Implementieren von [anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) der Auswahlmechanismus selbst mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudoelement ausgewählt werden kann.

Beachten Sie, dass die offenen und geschlossenen Zustände semantische Zustände sind und nicht unbedingt mit der Sichtbarkeit des betreffenden Elements übereinstimmen. Zum Beispiel ist ein `<details>`-Element, das erweitert ist, um seinen Inhalt zu zeigen, offen und wird vom `details:open` Selektor ausgewählt, auch wenn es mit einem {{cssxref("visibility")}} Wert von `hidden` verborgen ist.

[Popover](/de/docs/Web/API/Popover_API) Elemente (d.h. Elemente, bei denen das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut gesetzt ist) haben unterschiedliche semantische Zustände, die Popovers darstellen, die angezeigt oder verborgen sind und gleichzeitig mit offenen und geschlossenen Zuständen koexistieren können. Um ein Popover-Element im angezeigten Zustand zu markieren, verwenden Sie die {{cssxref(":popover-open")}} Pseudoklasse.

## Beispiele

### Grundlegende `:open` Nutzung

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

### Angepasste `<select>`-Stilisierung mit `:open`

In diesem Beispiel geben wir einem einfachen {{htmlelement("select")}} Element eine benutzerdefinierte Gestaltung. Die `:open` Pseudoklasse wird verwendet, um eine Stilverbesserung auf den offenen Zustand anzuwenden — wenn das Dropdown-Menü angezeigt wird.

#### HTML

Es gibt nichts Besonderes an unserem Frucht-Auswahlfeld.

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
> Wir verwenden kein mehrzeiliges `<select>` (d.h. eines mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut gesetzt) — diese tendieren dazu, als scrollbare Listenbox anstelle eines Dropdown-Menüs gerendert zu werden und haben daher keinen offenen Zustand.

#### CSS

Im CSS setzen wir einen {{cssxref("appearance")}} Wert von `none` auf unser `<select>`-Element, um das standardmäßige Betriebssystem-Design der Auswahlbox zu entfernen und einige grundlegende eigene Stile bereitzustellen. Besonders hervorzuheben ist, dass wir ein {{Glossary("SVG", "SVG")}} Hintergrundbild eines nach unten gerichteten Pfeils auf der rechten Seite setzen — Benutzer neigen dazu, `<select>`-Elemente am nach unten gerichteten Pfeil zu erkennen, daher ist es eine gute Idee, ihn zu inkludieren.

Dann setzen wir etwas {{cssxref("padding")}} auf das umgebende {{htmlelement("label")}}-Element und eine transparente Umrandung, um das Layout konsistent zu halten, wenn wir später eine farbige Umrandung hinzufügen.

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

Wenn das `<select>` geöffnet wird, verwenden wir die `:open` Pseudoklasse, um eine andere Hintergrundfarbe zu setzen und das Hintergrundbild in einen nach oben gerichteten Pfeil zu ändern. Wir setzen auch eine andere Hintergrundfarbe und Umrandung auf das umgebende `<label>`-Element, indem wir eine Kombination der `:open` und {{cssxref(":has()")}} Pseudoklassen verwenden, um einen Elter-Selektor zu erstellen. Wir sagen buchstäblich "wählen Sie das `<label>`, aber nur, wenn dessen Nachkommendes `<select>` geöffnet ist."

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

Das Ergebnis ist wie folgt. Versuchen Sie, das `<select>` Dropdown-Menü zu öffnen, um den Effekt auf die Gestaltung zu sehen:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, und {{htmlelement("input")}} Elemente
- {{cssxref(":popover-open")}} Pseudoklasse
- {{Cssxref(":modal")}}
