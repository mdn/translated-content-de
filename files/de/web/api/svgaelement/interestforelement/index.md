---
title: "SVGAElement: interestForElement-Eigenschaft"
short-title: interestForElement
slug: Web/API/SVGAElement/interestForElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{ApiRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`interestForElement`**-Eigenschaft des [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Interfaces ruft das Zielelement eines Interesse-Initiators ab oder setzt dieses, wenn das zugehörige {{svgelement("a")}}-Element als Interesse-Initiator festgelegt ist.

Siehe [Erstellen eines Interesse-Initiators](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) für weitere Details.

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objektinstanz oder `null`, wenn das zugehörige `<a>`-Element kein Zielelement gesetzt hat.

## Beispiele

### Grundlegende Nutzung von `interestForElement`

In diesem Beispiel verwenden wir die `interestForElement`-Eigenschaft eines SVG-`<a>`-Elements, um dessen Zielelement festzulegen und dann den `tagName` des Zielelements abzurufen. Der `tagName` wird dann in den Textinhalt des `<a>`-Elements aufgenommen.

#### HTML

Das Markup enthält ein SVG-{{svgelement("a")}}-Element mit einem {{svgelement("text")}}-Element, und der Linktext ist innerhalb des `<text>`-Elements enthalten. Es gibt auch ein HTML-`<div>`-Element. Wir verwandeln das `<div>`-Element in ein Popover, indem wir das Attribut `popover` darauf setzen.

```html live-sample___basic-interest-invoker
<svg>
  <a href="#">
    <text x="90" y="20" text-anchor="middle">A link</text>
  </a>
</svg>
<div id="mypopover" popover>I am a <code>&lt;div&gt;</code> element.</div>
```

```css hidden live-sample___basic-interest-invoker
svg {
  width: 200px;
  height: 100px;
}

svg a text {
  fill: blue;
  text-decoration: underline;
}
```

#### JavaScript

Im Skript erhalten wir Referenzen zu den `<a>`, `<text>` und `<div>`-Elementen. Dann erstellen wir die Beziehung zwischen Interesse-Initiator und Ziel zwischen dem `<a>` und dem `<div>`, indem wir die `interestForElement`-Eigenschaft des `<a>`-Elements gleich einer Referenz auf das `<div>` setzen. Danach aktualisieren wir den `<text>`-Inhalt, um den `tagName` des Zielelements anzuzeigen, der über `invoker.interestForElement.tagName` abgerufen wird.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("a");
const invokerText = document.querySelector("text");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

invokerText.textContent = `My target is a ${invoker.interestForElement.tagName} element`;
```

#### Ergebnis

Das Beispiel wird so dargestellt:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Versuchen Sie, das Interesse an dem Link zu zeigen (zum Beispiel durch darüberfahren oder fokussieren), um das `<div>` sichtbar zu machen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Interesse-Initiatoren](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [Die Popover-API](/de/docs/Web/API/Popover_API)
