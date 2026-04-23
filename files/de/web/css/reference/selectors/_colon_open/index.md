---
title: "`:open` CSS-Pseudoklasse"
short-title: :open
slug: Web/CSS/Reference/Selectors/:open
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, das offene und geschlossene Zustände hat, nur wenn es sich derzeit im offenen Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die `:open` Pseudoklasse wählt jedes Element aus, das sich derzeit im offenen Zustand befindet, was folgende Elemente einschließt:

- {{htmlelement("details")}} und {{htmlelement("dialog")}} Elemente, die im offenen Zustand sind, das heißt, sie haben das Attribut `open` gesetzt. Diese Auswahl kann auch mit einem Attributselektor gemacht werden: `details[open]`.
- {{htmlelement("input")}}-Elemente, die eine Auswahloberfläche für den Benutzer anzeigen, um einen Wert auszuwählen (zum Beispiel [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)), wenn die Auswahl angezeigt wird.
- {{htmlelement("select")}}-Elemente, die ein Dropdown-Menü für den Benutzer anzeigen, um einen Wert auszuwählen, wenn die Auswahl angezeigt wird. Beachten Sie, dass bei der Implementierung von [anpassbaren Auswahlfeldern](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) die Auswahl selbst mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudoelement ausgewählt werden kann.

Beachten Sie, dass die offenen und geschlossenen Zustände semantische Zustände sind und nicht notwendigerweise mit der Sichtbarkeit des betreffenden Elements korrelieren. Zum Beispiel ist ein `<details>`-Element, das erweitert ist, um seinen Inhalt anzuzeigen, offen und wird vom `details:open` Selektor ausgewählt, selbst wenn es mit einem {{cssxref("visibility")}}-Wert von `hidden` verborgen ist.

[Popover](/de/docs/Web/API/Popover_API)-Elemente (d.h. Elemente mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut, das auf ihnen gesetzt ist) haben ausgeprägte semantische Zustände, die Popover repräsentieren, die angezeigt oder verborgen sind, und die zusammen mit den offenen und geschlossenen Zuständen existieren können. Um ein Popover-Element im angezeigten Zustand anzusprechen, verwenden Sie die {{cssxref(":popover-open")}} Pseudoklasse.

## Beispiele

### Grundlegende Verwendung von `:open`

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
    content: "Your browser doesn't support the :open selector.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
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

### Anpassung der `<select>`-Stil mit `:open`

In diesem Beispiel geben wir einem einfachen {{htmlelement("select")}}-Element eine benutzerdefinierte Stilgestaltung. Die `:open` Pseudoklasse wird verwendet, um eine stilistische Verbesserung für den geöffneten Zustand anzuwenden – wenn das Dropdown-Menü angezeigt wird.

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
> Wir verwenden kein mehrzeiliges `<select>` (d.h. eines mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut gesetzt) – diese neigen dazu, als Scrolllistenfeld anstelle eines Dropdown-Menüs zu erscheinen, sodass sie keinen offenen Zustand haben.

#### CSS

Im CSS setzen wir einen {{cssxref("appearance")}}-Wert von `none` auf unser `<select>`-Element, um die standardmäßige OS-Stilisierung der Auswahlbox zu entfernen, und bereitstellen einige unserer eigenen Basisstile. Besonders erwähnenswert ist, dass wir ein {{Glossary("SVG", "SVG")}} Hintergrundbild eines nach unten zeigenden Pfeils auf der rechten Seite setzen – Benutzer neigen dazu, `<select>`-Elemente am Abwärtspfeil zu erkennen, daher ist es eine gute Idee, diesen zu inkludieren.

Wir setzen dann einige {{cssxref("padding")}} auf das umgebende {{htmlelement("label")}} Element und einen transparenten Rahmen, um das Layout beizubehalten, wenn wir später einen farbigen Rahmen hinzufügen.

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

Wenn das `<select>` geöffnet wird, verwenden wir die `:open` Pseudoklasse, um eine andere Hintergrundfarbe festzulegen und das Hintergrundbild in einen aufwärtszeigenden Pfeil zu ändern. Wir setzen auch eine andere Hintergrundfarbe und einen Rand auf das umgebende `<label>` Element, indem wir eine Kombination der `:open` und {{cssxref(":has()")}} Pseudoklassen verwenden, um einen Elternglieber auszuwählen. Wir sagen buchstäblich "wählt das `<label>` aus, aber nur, wenn sein Nachfahre `<select>` geöffnet ist."

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

Das Ergebnis ist wie folgt. Versuchen Sie, das `<select>` Dropdown zu öffnen, um den Effekt auf die Stilgestaltung zu sehen:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, und {{htmlelement("input")}} Elemente
- {{cssxref(":popover-open")}} Pseudoklasse
- {{Cssxref(":modal")}}
