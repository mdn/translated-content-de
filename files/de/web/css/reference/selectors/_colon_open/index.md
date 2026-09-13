---
title: "`:open` CSS-Pseudoklasse"
short-title: :open
slug: Web/CSS/Reference/Selectors/:open
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, das geöffnete und geschlossene Zustände hat, nur wenn es sich derzeit im geöffneten Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die `:open` Pseudoklasse wählt jedes Element aus, das sich im geöffneten Zustand befindet, einschließlich der folgenden Elemente:

- {{htmlelement("details")}}- und {{htmlelement("dialog")}}-Elemente, die sich im geöffneten Zustand befinden, das heißt, sie haben das `open`-Attribut gesetzt. Diese Auswahl kann auch mit einem Attributselektor erfolgen: `details[open]`.
- {{htmlelement("input")}}-Elemente, die eine Auswahlschnittstelle anzeigen, damit der Benutzer einen Wert auswählen kann (zum Beispiel bei [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)), wenn der Auswahldialog angezeigt wird.
- {{htmlelement("select")}}-Elemente, die ein Dropdown-Auswahlmenü anzeigen, damit der Benutzer einen Wert auswählen kann, wenn der Auswahldialog angezeigt wird. Beachten Sie, dass beim Implementieren von [anpassbaren Auswahlfeldern](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) das Auswahlelement selbst mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudoelement ausgewählt werden kann.

Beachten Sie, dass die geöffneten und geschlossenen Zustände semantische Zustände sind und nicht unbedingt mit der Sichtbarkeit des betreffenden Elements korrelieren. Ein `<details>`-Element zum Beispiel, das erweitert ist, um seinen Inhalt anzuzeigen, ist geöffnet und wird durch den Selektor `details:open` ausgewählt, selbst wenn es mit einem {{cssxref("visibility")}}-Wert von `hidden` versteckt ist.

[Popover](/de/docs/Web/API/Popover_API)-Elemente (das sind Elemente mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut) haben unterschiedliche semantische Zustände, die Popovers darstellen, die angezeigt oder ausgeblendet sind und die neben geöffneten und geschlossenen Zuständen koexistieren können. Um ein Popover-Element im angezeigten Zustand zu zielen, verwenden Sie die {{cssxref(":popover-open")}} Pseudoklasse stattdessen.

## Beispiele

### Grundlegende Nutzung von `:open`

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

### Benutzerdefinierte `<select>` Gestaltung mit `:open`

In diesem Beispiel geben wir einem einfachen {{htmlelement("select")}}-Element eine benutzerdefinierte Gestaltung. Die `:open`-Pseudoklasse wird verwendet, um eine Gestaltungsverbesserung für den geöffneten Zustand anzuwenden — wenn das Dropdown-Menü angezeigt wird.

#### HTML

Unser Früchte-Auswahlmenü ist nichts Besonderes.

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
> Wir verwenden kein mehrzeiliges `<select>` (das heißt, eines mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut) – diese neigen dazu, als Scrollliste statt als Dropdown-Menü angezeigt zu werden und haben daher keinen offenen Zustand.

#### CSS

Im CSS setzen wir einen {{cssxref("appearance")}}-Wert von `none` auf unser `<select>`-Element, um die Standardbetriebssystemgestaltung aus der Auswahlbox zu entfernen und einige grundlegende eigene Stile bereitzustellen. Besonders hervorzuheben ist, dass wir ein {{Glossary("SVG", "SVG")}}-Hintergrundbild eines Abwärtspfeils auf der rechten Seite festlegen – Benutzer erkennen `<select>`-Elemente häufig anhand des Abwärtspfeils, daher ist es eine gute Idee, ihn einzuschließen.

Dann setzen wir etwas {{cssxref("padding")}} auf das umgebende {{htmlelement("label")}}-Element und einen transparenten Rahmen, um das Layout konsistent zu halten, wenn wir später einen farbigen Rahmen hinzufügen.

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

Wenn das `<select>` geöffnet wird, verwenden wir die `:open`-Pseudoklasse, um eine andere Hintergrundfarbe festzulegen und das Hintergrundbild in einen Aufwärtspfeil zu ändern. Wir setzen auch eine andere Hintergrundfarbe und einen Rand auf das umschließende `<label>`-Element, indem wir eine Kombination der `:open`- und der {{cssxref(":has()")}}-Pseudoklasse verwenden, um einen Elternselektor zu erstellen. Wir sagen wörtlich: "Wählen Sie das `<label>`, aber nur, wenn sein Nachkomme `<select>` geöffnet ist."

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

Das Ergebnis ist wie folgt. Versuchen Sie, das `<select>`-Dropdown zu öffnen, um die Auswirkung auf die Gestaltung zu sehen:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}} und {{htmlelement("input")}}-Elemente
- {{cssxref(":popover-open")}} Pseudoklasse
- {{Cssxref(":modal")}}
