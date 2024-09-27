---
title: "Element: clientTop-Eigenschaft"
short-title: clientTop
slug: Web/API/Element/clientTop
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("DOM") }}

Die Breite des oberen Rands eines Elements in Pixel. Es ist eine schreibgeschützte, ganzzahlige Eigenschaft des Elements.

Wie es der Fall ist, liegt zwischen den beiden Positionen (`offsetTop` und der oberen Grenze des Client-Bereichs) nur der Rand des Elements. Dies liegt daran, dass `offsetTop` die Position des oberen Rands (nicht des Außenabstands) angibt, während der Client-Bereich direkt unterhalb des Rands beginnt (der Client-Bereich umfasst das Innenfutter). Daher wird der **clientTop**-Wert immer den ganzzahligen Anteil des `.getComputedStyle()`-Werts für "border-top-width" entsprechen. (Tatsächlich könnte es Math.round(parseFloat()) sein.) Zum Beispiel, wenn der berechnete "border-top-width" null ist, dann ist auch **`clientTop`** null.

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine Ganzzahl. Wenn Sie einen Bruchwert benötigen, verwenden Sie [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Wert

Eine Zahl.

## Beispiele

Im folgenden Beispiel hat der Client-Bereich einen weißen Hintergrund und einen 24px schwarzen `border-top`. Der `clientTop`-Wert ist der Abstand von dem Punkt, an dem der Außenabstand (gelb) endet und die Innenfutter- und Inhaltsbereiche (weiß) beginnen: also 24px.

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
  border-top: 24px black solid;
  padding: 0px 28px;
  overflow: auto;
  background-color: white;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 400, 350)}}

## Anmerkungen

`clientTop` wurde zuerst im MS IE DHTML-Objektmodell eingeführt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
