---
title: :open
slug: Web/CSS/:open
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

{{CSSRef}}

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das offene und geschlossene Zustände hat, nur wenn es sich derzeit im offenen Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die `:open` Pseudo-Klasse wählt jedes Element aus, das sich derzeit im offenen Zustand befindet, inklusive der folgenden Elemente:

- {{htmlelement("details")}}- und {{htmlelement("dialog")}}-Elemente, die sich im offenen Zustand befinden, d.h. sie haben das `open`-Attribut gesetzt.
- {{htmlelement("input")}}-Elemente, die eine Auswahloberfläche anzeigen, damit der Benutzer einen Wert auswählen kann (zum Beispiel [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)), wenn die Auswahloberfläche angezeigt wird.
- {{htmlelement("select")}}-Elemente, die ein Dropdown-Menü für den Benutzer anzeigen, um einen Wert auszuwählen, wenn das Picker-Menü angezeigt wird. Beachten Sie, dass bei der Implementierung von [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) das Picker-Element selbst mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element ausgewählt werden kann.

Es ist wichtig zu beachten, dass die offenen und geschlossenen Zustände semantische Zustände sind und nicht unbedingt mit der Sichtbarkeit des betreffenden Elements korrelieren. Zum Beispiel ist ein `<details>`-Element, das erweitert wurde, um seinen Inhalt anzuzeigen, geöffnet und wird vom `details:open` Selektor ausgewählt, selbst wenn es mit einem {{cssxref("visibility")}} Wert von `hidden` verborgen ist.

[Popover](/de/docs/Web/API/Popover_API)-Elemente (d.h. Elemente, die das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut gesetzt haben) haben unterschiedliche semantische Zustände, die Popovers darstellen, die angezeigt oder verborgen sind, und können neben offenen und geschlossenen Zuständen koexistieren. Um ein Popover-Element im angezeigten Zustand anzusprechen, verwenden Sie die {{cssxref(":popover-open")}} Pseudo-Klasse.

## Beispiele

### Grundlegende `:open`-Verwendung

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

### Individuelle `<select>`-Gestaltung mit `:open`

In diesem Beispiel geben wir einem einfachen {{htmlelement("select")}}-Element ein individuelles Styling. Die `:open` Pseudo-Klasse wird verwendet, um eine stilistische Verbesserung auf den offenen Zustand anzuwenden – wenn das Dropdown-Menü angezeigt wird.

#### HTML

Es gibt nichts Besonderes an unserem Fruchtauswähler.

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
> Wir verwenden kein mehrzeiliges `<select>` (d.h. eines mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut), da diese tendenziell als Scroll-Listenfeld anstelle eines Dropdown-Menüs gerendert werden und daher keinen offenen Zustand haben.

#### CSS

Im CSS setzen wir einen {{cssxref("appearance")}}-Wert von `none` auf unser `<select>`-Element, um das Standardbetriebssystem-Styling aus dem Auswahlfeld zu entfernen, und bieten einige grundlegende eigene Stile an. Am bemerkenswertesten setzen wir ein {{Glossary("SVG", "SVG")}}-Hintergrundbild eines Abwärtspfeils auf der rechten Seite – Benutzer neigen dazu, `<select>`-Elemente am Abwärtspfeil zu erkennen, daher ist es eine gute Idee, ihn einzuschließen.

Wir setzen dann etwas {{cssxref("padding")}} auf das umgebende {{htmlelement("label")}}-Element, und einen transparenten Rahmen, um das Layout konsistent zu halten, wenn wir später einen farbigen Rahmen hinzufügen.

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

Wenn das `<select>` geöffnet ist, verwenden wir die `:open` Pseudo-Klasse, um eine andere Hintergrundfarbe einzustellen und das Hintergrundbild in einen Aufwärtspfeil zu ändern. Wir setzen auch eine andere Hintergrundfarbe und einen Rahmen auf das umschließende `<label>`-Element, indem wir eine Kombination aus der `:open` und der {{cssxref(":has()")}} Pseudo-Klasse verwenden, um einen übergeordneten Selektor zu erstellen. Wir sagen buchstäblich "wähle das `<label>` aus, aber nur, wenn sein Nachfahr-`<select>` geöffnet ist."

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

Das Ergebnis sieht wie folgt aus. Versuchen Sie, das Dropdown-Menü `<select>` zu öffnen, um den Effekt auf das Styling zu sehen:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, und {{htmlelement("input")}} Elemente
- {{cssxref(":popover-open")}} Pseudo-Klasse
- {{Cssxref(":modal")}}
