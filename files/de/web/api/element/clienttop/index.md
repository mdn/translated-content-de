---
title: "Element: clientTop-Eigenschaft"
short-title: clientTop
slug: Web/API/Element/clientTop
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("DOM") }}

Die Breite des oberen Rands eines Elements in Pixel. Es handelt sich um eine schreibgeschützte, ganzzahlige Eigenschaft des Elements.

Tatsächlich liegt zwischen den beiden Positionen (`offsetTop` und dem oberen Bereich des client-Bereichs) nur der Rand des Elements. Das liegt daran, dass `offsetTop` die Position des oberen Randes angibt (nicht des äußeren Randes), während der client-Bereich direkt unter dem Rand beginnt (der client-Bereich schließt den inneren Abstand ein). Daher wird der Wert von **clientTop** immer dem ganzzahligen Teil des `.getComputedStyle()`-Wertes für "border-top-width" entsprechen. (Tatsächlich könnte es sich um Math.round(parseFloat()) handeln.) Beispielsweise, wenn der berechnete "border-top-width" null ist, dann ist **`clientTop`** ebenfalls null.

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine ganze Zahl. Falls Sie einen Bruchwert benötigen, verwenden Sie [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Wert

Eine Zahl.

## Beispiele

Im folgenden Beispiel hat der client-Bereich einen weißen Hintergrund und eine 24px breite schwarze `border-top`. Der `clientTop`-Wert ist der Abstand von dort, wo der Randbereich (gelb) endet, zu dem Bereich aus innerem Abstand und Inhalt (weiß) beginnt: also 24px.

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

`clientTop` wurde erstmals im MS IE DHTML-Objektmodell eingeführt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
