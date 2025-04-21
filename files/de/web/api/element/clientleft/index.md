---
title: "Element: clientLeft-Eigenschaft"
short-title: clientLeft
slug: Web/API/Element/clientLeft
l10n:
  sourceCommit: 1e0a16464b11cde9eddbb9795fe74e737dba0598
---

{{ APIRef("DOM") }}

Die **`clientLeft`** schreibgeschützte Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt die Breite des linken Randes eines Elements in Pixel zurück. Sie umfasst die Breite der vertikalen Bildlaufleiste, wenn die Textrichtung des Elements von rechts nach links ist und wenn ein Überlauf eine linke vertikale Bildlaufleiste erzeugt. `clientLeft` enthält nicht den linken Rand oder das linke Padding.

> [!NOTE]
> Wenn ein Element `display: inline` hat, gibt `clientLeft` unabhängig vom Rand des Elements `0` zurück.

## Wert

Ein ganzzahliger Wert.

## Beispiele

Im folgenden Beispiel hat der Client-Bereich einen weißen Hintergrund und eine 24px schwarze `border-left`. Der `clientLeft`-Wert ist der Abstand vom Ende des Randbereichs (gelb) bis zum Beginn der Padding- und Inhaltsbereiche (weiß): also 24px.

### HTML

```html
<div id="container">
  <div id="contained">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>
```

### CSS

```css
#container {
  margin: 3rem;
  background-color: rgb(255 255 204);
  border: 4px dashed black;
}

#contained {
  margin: 1rem;
  border-left: 24px black solid;
  padding: 0px 28px;
  overflow: auto;
  background-color: white;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 400, 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bestimmung der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft)
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight)
- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth)
- [`Element.clientTop`](/de/docs/Web/API/Element/clientTop)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
