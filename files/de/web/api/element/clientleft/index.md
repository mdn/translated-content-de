---
title: "Element: clientLeft-Eigenschaft"
short-title: clientLeft
slug: Web/API/Element/clientLeft
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("DOM") }}

Die Breite des linken Rands eines Elements in Pixeln. Sie umfasst die Breite der vertikalen Scrollleiste, wenn die Textrichtung des Elements von rechts nach links ist und wenn ein Überlauf eine linke vertikale Scrollleiste verursacht. `clientLeft` enthält nicht den linken Außenabstand oder die linke Auffüllung. `clientLeft` ist schreibgeschützt.

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine ganze Zahl. Wenn Sie einen Bruchwert benötigen, verwenden Sie [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

> [!NOTE]
> Wenn ein Element
> `display: inline` hat, gibt `clientLeft` `0`
> zurück, unabhängig von der Rahmenbreite des Elements.

## Wert

Eine Zahl.

## Beispiele

Im folgenden Beispiel hat der Client-Bereich einen weißen Hintergrund und einen 24px breiten schwarzen `border-left`. Der `clientLeft`-Wert ist der Abstand von der Stelle, an der die Markierung (gelb) endet und die Bereiche Auffüllung und Inhalt (weiß) beginnen: das sind 24px.

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
