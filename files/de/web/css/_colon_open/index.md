---
title: :open
slug: Web/CSS/:open
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{CSSRef}}

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das offene und geschlossene Zustände hat, nur wenn es sich derzeit im offenen Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die `:open` Pseudoklasse wählt jedes Element aus, das sich momentan im offenen Zustand befindet, was folgende Elemente einschließt:

- {{htmlelement("details")}}- und {{htmlelement("dialog")}}-Elemente, die im offenen Zustand sind, das heißt, sie haben das `open`-Attribut gesetzt.
- {{htmlelement("input")}}-Elemente, die eine Auswahloberfläche anzeigen, aus der der Benutzer einen Wert wählen kann (zum Beispiel [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)), wenn die Auswahl angezeigt wird.
- {{htmlelement("select")}}-Elemente, die ein Dropdown-Menü anzeigen, aus dem der Benutzer einen Wert wählen kann, wenn das Menü angezeigt wird. Beachten Sie, dass bei der Implementierung von [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) das Auswahlfenster selbst mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudoelement ausgewählt werden kann.

Beachten Sie, dass die offenen und geschlossenen Zustände semantische Zustände sind und nicht unbedingt mit der Sichtbarkeit des jeweiligen Elements korrelieren. Zum Beispiel ist ein `<details>`-Element, das erweitert wird, um seinen Inhalt anzuzeigen, offen und wird durch den `details:open`-Selektor ausgewählt, auch wenn es mit einem {{cssxref("visibility")}}-Wert von `hidden` versteckt ist.

[Popover](/de/docs/Web/API/Popover_API)-Elemente (das heißt, Elemente mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut) haben unterschiedliche semantische Zustände, die Popover repräsentieren, die angezeigt oder verborgen sind, was gleichzeitig mit offenen und geschlossenen Zuständen existieren kann. Um ein Popover-Element im angezeigten Zustand anzusprechen, verwenden Sie stattdessen die {{cssxref(":popover-open")}} Pseudoklasse.

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

### Benutzerdefinierte `<select>`-Stilgestaltung mit `:open`

In diesem Beispiel geben wir einem grundlegenden {{htmlelement("select")}}-Element eine benutzerdefinierte Stilgestaltung. Die `:open` Pseudoklasse wird verwendet, um eine Stilverbesserung für seinen offenen Zustand anzuwenden – wenn das Dropdown-Menü angezeigt wird.

#### HTML

An unserem Obstauswahl-Element gibt es nichts Besonderes.

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
> Wir verwenden kein mehrzeiliges `<select>`-Element (also eines mit dem [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut) – diese tendieren dazu, als Scroll-Listenfeld dargestellt zu werden, anstatt als Dropdown-Menü, und haben daher keinen offenen Zustand.

#### CSS

Im CSS setzen wir einen {{cssxref("appearance")}}-Wert von `none` für unser `<select>`-Element, um die Standardbetriebssystem-Stilgestaltung vom Auswahlfeld zu entfernen und einige grundlegende eigene Stile bereitzustellen. Besonders erwähnenswert ist, dass wir ein {{Glossary("SVG", "SVG")}}-Hintergrundbild eines Pfeils nach unten auf der rechten Seite setzen – Benutzer neigen dazu, `<select>`-Elemente am Abwärtspfeil zu erkennen, daher ist es eine gute Idee, diesen einzubeziehen.

Wir setzen dann etwas {{cssxref("padding")}} auf das umgebende {{htmlelement("label")}}-Element und einen transparenten Rahmen, um das Layout konsistent zu halten, wenn wir später einen farbigen Rahmen hinzufügen.

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

Wenn das `<select>` geöffnet wird, verwenden wir die `:open` Pseudoklasse, um eine andere Hintergrundfarbe zu setzen und das Hintergrundbild zu einem Pfeil nach oben zu ändern. Wir setzen auch eine andere Hintergrundfarbe und einen Rahmen am umschließenden `<label>`-Element, indem wir eine Kombination der `:open`- und {{cssxref(":has()")}} Pseudoklassen verwenden, um einen Elternselektor zu erstellen. Wir sagen buchstäblich "wähle das `<label>` aus, aber nur, wenn sein Nachkomme `<select>` geöffnet ist."

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

Das Ergebnis ist wie folgt. Versuchen Sie, das `<select>` Dropdown zu öffnen, um den Effekt auf die Stilgestaltung zu sehen:

{{ EmbedLiveSample("Benutzerdefinierte `<select>`-Stilgestaltung mit `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, und {{htmlelement("input")}} Elemente
- {{cssxref(":popover-open")}} Pseudoklasse
- {{Cssxref(":modal")}}
