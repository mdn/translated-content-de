---
title: CSS-Rahmen und Box-Dekorationen
short-title: Rahmen und Box-Dekorationen
slug: Web/CSS/Guides/Borders_and_box_decorations
l10n:
  sourceCommit: cd0970bc03cf30a9a8089954cc542a17dbe9eba3
---

Das **CSS-Rahmen und Box-Dekorationen**-Modul bietet Eigenschaften zum Hinzufügen von Rahmen, geformten Ecken und Box-Schatten zu Elementen. Dieses Modul erweitert die im Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) eingeführten Rahmen und Box-Dekorationen, indem es die Eigenschaften {{cssxref("corner-shape")}} und `border-shape`, logische {{cssxref("border-radius")}}-Eigenschaften, Langform-Eigenschaften für die {{cssxref("box-shadow")}}-Eigenschaft und Eigenschaften zur Erstellung von Teilrahmen hinzufügt.

## Rahmen und Box-Dekorationen in Aktion

Wählen Sie einen `superellipse()`-Wert aus dem Dropdown-Menü, um die Rahmenform zu ändern. Verwenden Sie den Schieberegler, um die Rahmengröße zu ändern. Aktivieren Sie das Kontrollkästchen, um den Box-Schatten ein- und auszublenden.

```html hidden
<p>
  <label for="corner-shape-choice"
    >Choose a <code>superellipse()</code> value:</label
  >
  <select id="corner-shape-choice">
    <option>superellipse(infinity)</option>
    <option>superellipse(5)</option>
    <option>superellipse(3)</option>
    <option>superellipse(2)</option>
    <option>superellipse(1.5)</option>
    <option>superellipse(1)</option>
    <option>superellipse(0.5)</option>
    <option>superellipse(0)</option>
    <option>superellipse(-0.5)</option>
    <option selected>superellipse(-1)</option>
    <option>superellipse(-1.5)</option>
    <option>superellipse(-2)</option>
    <option>superellipse(-3)</option>
    <option>superellipse(-5)</option>
    <option>superellipse(-infinity)</option>
  </select>
</p>
<p>
  <label for="radius">Choose a <code>border-radius</code> value:</label>
  <input
    type="range"
    step="5"
    min="0"
    max="100"
    value="30"
    id="radius"
    list="tens" />
  <datalist id="tens">
    <option value="0" label="0"></option>
    <option value="20" label="20px"></option>
    <option value="40" label="40px"></option>
    <option value="60" label="60px"></option>
    <option value="80" label="80px"></option>
    <option value="100" label="100px"></option>
  </datalist>
</p>

<p>
  <input type="checkbox" id="check" />
  <label for="check">Toggle the box-shadow</label>
</p>
<div></div>
```

```css hidden
div {
  width: 100%;
  height: 200px;
  background-color: plum;
  background-image:
    repeating-linear-gradient(transparent 0 19px, #00000022 19px 20px),
    repeating-linear-gradient(to left, transparent 0 19px, #00000022 19px 20px);
}

div {
  box-shadow: 3px 3px 5px rgb(0 0 0 / 0.5);
  border-radius: 30px;
}
body:has(input:checked) div {
  box-shadow: none;
}

@layer page-setup {
  html {
    font-family: "Helvetica", "Arial", sans-serif;
  }
  body {
    max-width: 600px;
    min-width: fit-content;
    margin: 20px auto;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  select {
    padding: 3px 5px;
  }
  code {
    font-weight: bolder;
  }
}
```

```js hidden
const rectangle = document.querySelector("div");
const select = document.querySelector("select");
const range = document.getElementById("radius");

function setCornerShape() {
  rectangle.style.cornerShape = select.value;
  rectangle.style.borderRadius = `${range.value}px`;
  rectangle.innerHTML = `<pre>div {
  corner-shape: ${select.value};
  border-radius: ${range.value}px;
}</pre>`;
}

select.addEventListener("change", setCornerShape);
range.addEventListener("input", setCornerShape);
setCornerShape();
```

{{EmbedLiveSample("backgrounds", "", "350px")}}

## Referenz

### Eigenschaften

- {{cssxref("border-block")}}
- {{cssxref("border-block-color")}}
- {{cssxref("border-block-end")}}
- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start")}}
- {{cssxref("border-block-start-color")}}
- {{cssxref("border-block-start-style")}}
- {{cssxref("border-block-start-width")}}
- {{cssxref("border-block-style")}}
- {{cssxref("border-block-width")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-color")}}
- {{cssxref("border-end-end-radius")}}
- {{cssxref("border-end-start-radius")}}
- {{cssxref("border-inline")}}
- {{cssxref("border-inline-color")}}
- {{cssxref("border-inline-end")}}
- {{cssxref("border-inline-end-color")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start")}}
- {{cssxref("border-inline-start-color")}}
- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-inline-start-width")}}
- {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-width")}}
- {{cssxref("border-left")}}
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-radius")}}
- {{cssxref("border-right")}}
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-shape")}}
- {{cssxref("border-start-end-radius")}}
- {{cssxref("border-start-start-radius")}}
- {{cssxref("border-top")}}
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("box-shadow")}}
- {{cssxref("corner-block-end-shape")}}
- {{cssxref("corner-block-start-shape")}}
- {{cssxref("corner-bottom-left-shape")}}
- {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("corner-bottom-shape")}}
- {{cssxref("corner-end-end-shape")}}
- {{cssxref("corner-end-start-shape")}}
- {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-inline-start-shape")}}
- {{cssxref("corner-left-shape")}}
- {{cssxref("corner-right-shape")}}
- {{cssxref("corner-shape")}}
- {{cssxref("corner-start-end-shape")}}
- {{cssxref("corner-start-start-shape")}}
- {{cssxref("corner-top-left-shape")}}
- {{cssxref("corner-top-right-shape")}}
- {{cssxref("corner-top-shape")}}

Das CSS-Rahmen und Box-Dekorationen-Modul Level 4 führt außerdem die Eigenschaften `border-limit` und `border-clip` ein, zusammen mit den Langform-Eigenschaften `border-clip-bottom`, `border-clip-left`, `border-clip-right`, `border-clip-top`. Derzeit werden diese Funktionen von keinem Browser unterstützt. Das Modul führt auch Komponenteneigenschaften für die gut unterstützten {{cssxref("border-radius")}} und {{cssxref("box-shadow")}}-Eigenschaften ein, einschließlich `border-block-end-radius`, `border-block-start-radius`, `border-bottom-radius`, `border-inline-end-radius`, `border-inline-start-radius`, `border-right-radius`, `border-top-radius`, `box-shadow-blur`, `box-shadow-color`, `box-shadow-offset`, `box-shadow-position`, und `box-shadow-spread`. Auch diese Komponenteneigenschaften werden derzeit nicht unterstützt.

### Datentypen

- {{cssxref("corner-shape-value")}}

### Funktionen

- {{cssxref("superellipse()")}}

## Leitfäden

- [Learn CSS: the box model](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Lernen Sie, wie Rahmen und andere Eigenschaften des Box-Modells das CSS-Box-Modell beeinflussen.
- [Creating an irregular nav menu with border-shape](/de/docs/Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu)
  - : Anleitung zur Verwendung der {{cssxref("border-shape")}}-Eigenschaft, um ein unregelmäßiges animiertes Navigationsmenü zu erstellen.

## Verwandte Konzepte

- {{cssxref("box-sizing")}} Eigenschaft
- {{cssxref("box-decoration-break")}} Eigenschaft
- {{cssxref("text-shadow")}} Eigenschaft
- {{cssxref("url_value", "&lt;url&gt;")}} Datentyp
- {{cssxref("&lt;color&gt;")}} Datentyp
- {{cssxref("image")}} Datentyp
- {{cssxref("&lt;position&gt;")}} Datentyp
- [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) Schlüsselwort

[CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}
- {{cssxref("background")}} Kurzform
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} Kurzform

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}
- [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filterfunktion
- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- Tools:
  - [Rahmen-Bild-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - [Rahmen-Radius-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
