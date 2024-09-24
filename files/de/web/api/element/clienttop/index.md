---
title: "Element: clientTop-Eigenschaft"
short-title: clientTop
slug: Web/API/Element/clientTop
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("DOM") }}

Die Breite des oberen Randes eines Elements in Pixel. Es handelt sich um eine schreibgeschützte, ganzzahlige Eigenschaft des Elements.

Wie es der Fall ist, liegt alles, was zwischen den beiden Positionen (`offsetTop` und dem oberen Rand des Clientbereichs) liegt, am Rand des Elements. Dies liegt daran, dass `offsetTop` die Position der Oberkante des Randes (nicht des Abstands) angibt, während der Clientbereich direkt unterhalb des Randes beginnt. (Der Clientbereich schließt den Innenabstand ein.) Daher wird der **clientTop**-Wert immer dem ganzzahligen Teil des `.getComputedStyle()`-Wertes für "border-top-width" entsprechen. (Tatsächlich könnte es Math.round(parseFloat()) sein.) Wenn zum Beispiel die berechnete "border-top-width" null ist, dann ist auch **`clientTop`** null.

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine ganze Zahl. Wenn Sie einen Bruchteil benötigen, verwenden Sie {{ domxref("element.getBoundingClientRect()") }}.

## Wert

Eine Zahl.

## Beispiele

Im folgenden Beispiel hat der Clientbereich einen weißen Hintergrund und einen 24px schwarzen `border-top`. Der `clientTop`-Wert ist der Abstand von dem Punkt, an dem der Randbereich (gelb) endet und der Innenabstands- und Inhaltsbereich (weiß) beginnt: also 24px.

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
