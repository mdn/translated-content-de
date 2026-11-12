---
title: Die CSS-Pseudoklasse `:open`
short-title: :open
slug: Web/CSS/Reference/Selectors/:open
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:open`** bezeichnet ein Element, das einen offenen und einen geschlossenen Zustand haben kann, wenn es sich gerade im offenen Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die Pseudoklasse `:open` wählt jedes Element aus, das sich gerade im offenen Zustand befindet. Dazu gehören:

- {{htmlelement("details")}}- und {{htmlelement("dialog")}}-Elemente im offenen Zustand, also Elemente, bei denen das Attribut `open` gesetzt ist. Diese Auswahl ist auch mit einem Attributselektor möglich: `details[open]`.
- {{htmlelement("input")}}-Elemente, die eine Auswahloberfläche anzeigen, über die Benutzer einen Wert auswählen können (zum Beispiel [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)), während diese Oberfläche angezeigt wird.
- {{htmlelement("select")}}-Elemente, die ein Dropdown-Menü zur Auswahl eines Werts anzeigen, während das Menü angezeigt wird. Bei [anpassbaren select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) kann die Auswahloberfläche selbst mit dem Pseudoelement {{cssxref("::picker()", "::picker(select)")}} ausgewählt werden.

Beachten Sie, dass der offene und der geschlossene Zustand semantische Zustände sind und nicht unbedingt mit der Sichtbarkeit des betreffenden Elements zusammenhängen. Ein `<details>`-Element, das aufgeklappt ist und seinen Inhalt anzeigt, befindet sich beispielsweise im offenen Zustand und wird vom Selektor `details:open` ausgewählt – auch wenn es durch den {{cssxref("visibility")}}-Wert `hidden` verborgen ist.

[Popover](/de/docs/Web/API/Popover_API)-Elemente (also Elemente, bei denen das Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) gesetzt ist) haben eigene semantische Zustände dafür, ob sie angezeigt oder verborgen sind. Diese können neben dem offenen und dem geschlossenen Zustand bestehen. Um ein angezeigtes Popover-Element auszuwählen, verwenden Sie stattdessen die Pseudoklasse {{cssxref(":popover-open")}}.

## Beispiele

### Grundlegende Verwendung von `:open`

Dieses Beispiel zeigt einige HTML-Elemente, die einen offenen Zustand haben.

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

#### Ergebnis

{{EmbedLiveSample("Basic `:open` usage", 300, 200)}}

### Benutzerdefinierte Gestaltung von `<select>` mit `:open`

In diesem Beispiel geben wir einem einfachen {{htmlelement("select")}}-Element eine benutzerdefinierte Gestaltung. Mit der Pseudoklasse `:open` ändern wir sein Aussehen im offenen Zustand – also wenn das Dropdown-Menü angezeigt wird.

#### HTML

An unserem Selektor für Obstsorten ist nichts Besonderes.

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
> Wir verwenden kein mehrzeiliges `<select>` (also keines, bei dem das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) gesetzt ist). Solche Elemente werden meist als scrollbare Listenfelder statt als Dropdown-Menüs dargestellt und haben daher keinen offenen Zustand.

#### CSS

Im CSS setzen wir für unser `<select>`-Element den {{cssxref("appearance")}}-Wert auf `none`, um die standardmäßige Darstellung des Betriebssystems zu entfernen, und definieren einige grundlegende eigene Stile. Besonders wichtig ist ein {{Glossary("SVG", "SVG")}}-Hintergrundbild mit einem nach unten zeigenden Pfeil auf der rechten Seite: Benutzer erkennen `<select>`-Elemente häufig an diesem Pfeil, daher ist es sinnvoll, ihn beizubehalten.

Anschließend geben wir dem umgebenden {{htmlelement("label")}}-Element etwas {{cssxref("padding")}} und einen transparenten Rahmen. So bleibt das Layout unverändert, wenn wir später einen farbigen Rahmen hinzufügen.

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

Wenn das `<select>`-Element geöffnet ist, verwenden wir die Pseudoklasse `:open`, um eine andere Hintergrundfarbe festzulegen und das Hintergrundbild durch einen nach oben zeigenden Pfeil zu ersetzen. Außerdem legen wir für das umgebende `<label>`-Element eine andere Hintergrundfarbe und einen anderen Rahmen fest. Dazu kombinieren wir die Pseudoklassen `:open` und {{cssxref(":has()")}} zu einem Selektor für das Elternelement. Sinngemäß heißt das: „Wähle das `<label>` aus, aber nur, wenn sein untergeordnetes `<select>` geöffnet ist.“

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

Das Ergebnis sieht wie folgt aus. Öffnen Sie das `<select>`-Dropdown-Menü, um die Auswirkungen auf die Gestaltung zu sehen:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Elemente {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}} und {{htmlelement("input")}}
- Die Pseudoklasse {{cssxref(":popover-open")}}
- {{Cssxref(":modal")}}
