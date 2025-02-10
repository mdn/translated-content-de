---
title: ":open"
slug: Web/CSS/:open
l10n:
  sourceCommit: b1392b60ee71b9f09c0123694a494a71d0dbbb8a
---

{{CSSRef}}

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das offene und geschlossene Zustände hat, wenn es sich derzeit im offenen Zustand befindet.

## Syntax

```css
:open {
  /* ... */
}
```

## Beschreibung

Die Pseudoklasse `:open` wählt jedes Element aus, das sich derzeit im offenen Zustand befindet, einschließlich der folgenden Elemente:

- {{htmlelement("details")}}- und {{htmlelement("dialog")}}-Elemente, die sich im offenen Zustand befinden, d. h. die das `open`-Attribut gesetzt haben.
- {{htmlelement("input")}}-Elemente, die eine Auswahloberfläche für den Benutzer anzeigen, um einen Wert auszuwählen (z. B. [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)), wenn die Auswahloberfläche angezeigt wird.
- {{htmlelement("select")}}-Elemente, die ein Dropdown-Menü anzeigen, aus dem der Benutzer einen Wert auswählen kann, wenn das Dropdown-Menü sichtbar ist.

Beachten Sie, dass der offene und geschlossene Zustand semantische Zustände sind und nicht zwangsläufig mit der Sichtbarkeit des betreffenden Elements übereinstimmen. Zum Beispiel ist ein `<details>`-Element, das erweitert ist, um seinen Inhalt anzuzeigen, im offenen Zustand und wird vom `details:open`-Selektor ausgewählt, selbst wenn es mit einem {{cssxref("visibility")}}-Wert von `hidden` verborgen ist.

[Popover](/de/docs/Web/API/Popover_API)-Elemente (d. h. Elemente, die das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut gesetzt haben) besitzen unterschiedliche semantische Zustände, die anzeigen, ob Popover sichtbar oder verborgen sind. Diese können neben offenen und geschlossenen Zuständen koexistieren. Um ein Popover-Element im sichtbaren Zustand anzusprechen, verwenden Sie die {{cssxref(":popover-open")}}-Pseudoklasse.

## Beispiele

### Grundlegende Nutzung von `:open`

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

### Benutzerdefinierte `<select>`-Formatierung mit `:open`

In diesem Beispiel erhält ein einfaches {{htmlelement("select")}}-Element eine benutzerdefinierte Formatierung. Die `:open`-Pseudoklasse wird verwendet, um eine Formatierungsverbesserung für seinen offenen Zustand anzuwenden — wenn das Dropdown-Menü angezeigt wird.

#### HTML

Es gibt nichts Besonderes an unserem Fruchtauswahl-Menü.

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
> Wir verwenden kein mehrzeiliges `<select>` (d. h. eines mit dem [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut) — diese werden tendenziell als scrollbare Listenbox angezeigt, anstatt als Dropdown-Menü, und haben daher keinen offenen Zustand.

#### CSS

Im CSS verwenden wir für unser `<select>`-Element einen {{cssxref("appearance")}}-Wert von `none`, um das Standard-Betriebssystem-Styling des Auswahlmenüs zu entfernen, und stellen einige Basisstile bereit. Besonders auffällig ist, dass wir ein {{Glossary("SVG", "SVG")}}-Hintergrundbild eines nach unten zeigenden Pfeils auf der rechten Seite setzen — Benutzer erkennen `<select>`-Elemente oft anhand des nach unten zeigenden Pfeils, daher ist es eine gute Idee, diesen einzubeziehen.

Darüber hinaus setzen wir etwas {{cssxref("padding")}} auf das umgebende {{htmlelement("label")}}-Element und eine transparente Umrandung, um das Layout konsistent zu halten, wenn wir später eine farbige Umrandung hinzufügen.

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

Wenn das `<select>` geöffnet ist, verwenden wir die `:open`-Pseudoklasse, um eine andere Hintergrundfarbe festzulegen und das Hintergrundbild auf einen nach oben zeigenden Pfeil zu ändern. Wir setzen auch eine andere Hintergrundfarbe und Umrandung auf das umgebende `<label>`-Element, indem wir eine Kombination der Pseudoklassen `:open` und {{cssxref(":has()")}} verwenden, um einen Elternelement-Selektor zu erstellen. Wir sagen damit buchstäblich: "Wähle das `<label>`-Element, aber nur, wenn sein Nachkomme `<select>` geöffnet ist."

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

Das Ergebnis ist wie folgt. Versuchen Sie, das `<select>`-Dropdown zu öffnen und den Effekt auf die Formatierung zu beobachten:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, und {{htmlelement("input")}}-Elemente
- {{cssxref(":popover-open")}}-Pseudoklasse
- {{Cssxref(":modal")}}
