---
title: "Element: clientTop-Eigenschaft"
short-title: clientTop
slug: Web/API/Element/clientTop
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{ APIRef("DOM") }}

Die **`clientTop`** schreibgeschützte Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt die Breite des oberen Randes eines Elements in Pixeln zurück.

Zwischen dem `offsetTop` und dem `clientTop` liegt nur der Rand des Elements. Dies liegt daran, dass `offsetTop` die Lage des oberen Randes (nicht des Außenabstands) angibt, während der Bereich für den Client direkt unter dem Rand beginnt und die Innenabstände einschließt. Daher ist der `clientTop`-Wert immer gleich der `border-top-width`, gerundet auf eine ganze Zahl. Zum Beispiel, wenn die berechnete `border-top-width` null ist, dann ist `clientTop` auch null.

## Wert

Eine ganze Zahl.

## Beispiele

Im folgenden Beispiel hat der Client-Bereich einen weißen Hintergrund und einen 24px schwarzen `border-top`. Der `clientTop`-Wert ist der Abstand von dem Ende des Außenabstands (gelb) zu dem Beginn der Innen- und Inhaltsbereiche (weiß): also 24px.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ermittlung der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop)
- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight)
- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth)
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
