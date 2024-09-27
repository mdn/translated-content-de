---
title: "Element: Eigenschaft clientLeft"
short-title: clientLeft
slug: Web/API/Element/clientLeft
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("DOM") }}

Die Breite des linken Randes eines Elements in Pixeln. Sie beinhaltet die Breite des vertikalen Scrollbalkens, wenn die Textrichtung des Elements von rechts nach links ist und ein Überlauf verursacht wird, der einen linken vertikalen Scrollbalken erzeugt. `clientLeft` schließt nicht den linken Außenabstand (margin) oder die linke Innenablage (padding) ein. `clientLeft` ist schreibgeschützt.

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine ganze Zahl. Wenn Sie
> einen gebrochenen Wert benötigen, verwenden Sie [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

> [!NOTE]
> Wenn ein Element
> `display: inline` hat, gibt `clientLeft` `0` zurück,
> unabhängig vom Rand des Elements.

## Wert

Eine Zahl.

## Beispiele

Im folgenden Beispiel hat der Client-Bereich einen weißen Hintergrund und einen 24px schwarzen `border-left`. Der `clientLeft`-Wert ist der Abstand von der Stelle, an der der Randbereich (gelb) endet und die Innenablage und der Inhaltsbereich (weiß) beginnen: das heißt, 24px.

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
