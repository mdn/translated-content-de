---
title: :open
slug: Web/CSS/:open
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das offene und geschlossene Zustände hat, jedoch nur, wenn es sich derzeit im offenen Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die `:open` Pseudoklasse wählt jedes Element aus, das sich derzeit im offenen Zustand befindet, was die folgenden Elemente einschließt:

- {{htmlelement("details")}} und {{htmlelement("dialog")}} Elemente, die offen sind, das heißt, bei denen das `open` Attribut gesetzt ist.
- {{htmlelement("input")}} Elemente, die eine Auswahlschnittstelle für den Benutzer anzeigen, um einen Wert auszuwählen (zum Beispiel [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)), wenn die Auswahl angezeigt wird.
- {{htmlelement("select")}} Elemente, die ein Dropdown-Fenster zur Auswahl eines Wertes anzeigen, wenn die Auswahl angezeigt wird. Beachten Sie, dass bei der Implementierung von [anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) das Auswahlfenster selbst mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudoelement ausgewählt werden kann.

Beachten Sie, dass die offenen und geschlossenen Zustände semantische Zustände sind und nicht notwendigerweise mit der Sichtbarkeit des betreffenden Elements korrelieren. Zum Beispiel ist ein `<details>` Element, das erweitert wird, um seinen Inhalt anzuzeigen, offen und wird vom `details:open` Selektor ausgewählt, selbst wenn es mit einem {{cssxref("visibility")}} Wert von `hidden` ausgeblendet ist.

[Popover](/de/docs/Web/API/Popover_API) Elemente (das heißt, Elemente mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut) haben unterschiedliche semantische Zustände, die Popovers darstellen, die angezeigt oder verborgen sind und die neben offenen und geschlossenen Zuständen koexistieren können. Um ein Popover-Element im Anzeigestatus zu erfassen, verwenden Sie die {{cssxref(":popover-open")}} Pseudoklasse.

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

{{EmbedLiveSample("Basic `:open` usage", 300, 200)}}

### Anpassung der `<select>`-Stilierung mit `:open`

In diesem Beispiel geben wir einem einfachen {{htmlelement("select")}} Element eine benutzerdefinierte Formatierung. Die `:open` Pseudoklasse wird verwendet, um eine Stilverbesserung für den offenen Zustand des Dropdown-Menüs anzuwenden.

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
> Wir verwenden kein mehrzeiliges `<select>` (das heißt, eines mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut) — diese neigen dazu, als Scrollbox anstelle eines Dropdown-Menüs gerendert zu werden und haben daher keinen offenen Zustand.

#### CSS

Im CSS setzen wir einen {{cssxref("appearance")}} Wert von `none` auf unser `<select>` Element, um das Standard-Betriebssystem-Design aus der Auswahlliste zu entfernen, und fügen ein paar grundlegende eigene Stile hinzu. Besonders hervorzuheben ist, dass wir ein {{Glossary("SVG", "SVG")}} Hintergrundbild eines Pfeils nach unten auf der rechten Seite setzen — Benutzer erkennen `<select>` Elemente meist an dem nach unten zeigenden Pfeil, daher ist es eine gute Idee, ihn einzubeziehen.

Wir setzen dann etwas {{cssxref("padding")}} auf das umgebende {{htmlelement("label")}} Element und eine transparente Umrandung, um das Layout konsistent zu halten, wenn wir später eine farbige Umrandung hinzufügen.

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

Wenn das `<select>` geöffnet ist, verwenden wir die `:open` Pseudoklasse, um eine andere Hintergrundfarbe zu setzen und das Hintergrundbild in einen Pfeil nach oben zu ändern. Wir setzen auch eine andere Hintergrundfarbe und Umrandung auf das umgebende `<label>` Element mittels einer Kombination aus den `:open` und {{cssxref(":has()")}} Pseudoklassen, um einen Elternselektor zu erstellen. Wir sagen buchstäblich: "Selektiere das `<label>`, aber nur, wenn sein Nachfahre `<select>` offen ist."

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

Das Ergebnis ist wie folgt. Versuchen Sie, das `<select>` Dropdown zu öffnen, um den Effekt auf die Formatierung zu sehen:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, und {{htmlelement("input")}} Elemente
- {{cssxref(":popover-open")}} Pseudoklasse
- {{Cssxref(":modal")}}
