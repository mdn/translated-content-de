---
title: "SVGAElement: interestForElement-Eigenschaft"
short-title: interestForElement
slug: Web/API/SVGAElement/interestForElement
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{ApiRef("HTML DOM")}}

Die **`interestForElement`**-Eigenschaft des [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Interfaces liest oder setzt das Zielelement eines "interest invoker", wenn das zugehörige {{svgelement("a")}}-Element als "interest invoker" angegeben ist.

Weitere Informationen finden Sie unter [Erstellen eines "interest invoker"](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker).

## Wert

Eine Instanz eines [`Element`](/de/docs/Web/API/Element)-Objekts oder `null`, wenn das zugehörige `<a>`-Element kein Zielelement festgelegt hat.

## Beispiele

### Grundlegende Nutzung von `interestForElement`

In diesem Beispiel verwenden wir die `interestForElement`-Eigenschaft eines SVG-`<a>`-Elements, um dessen Zielelement festzulegen und dann den `tagName` des Zielelements abzurufen. Der `tagName` wird dann in den Textinhalt des `<a>`-Elements aufgenommen.

#### HTML

Die Markierung enthält ein SVG-{{svgelement("a")}}-Element mit einem {{svgelement("text")}}-Element, und der Linktext ist innerhalb des `<text>`-Elements enthalten. Es gibt auch ein HTML-`<div>`-Element. Wir machen das `<div>`-Element zu einem Popover, indem wir das `popover`-Attribut darauf setzen.

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

Wir erhalten Referenzen auf die `<a>`, `<text>` und `<div>` Elemente im Script. Dann erstellen wir die "interest invoker"-Ziel-Beziehung zwischen dem `<a>` und dem `<div>`, indem wir die `interestForElement`-Eigenschaft des `<a>`-Elements auf eine Referenz auf das `<div>` setzen. Anschließend aktualisieren wir den `<text>`-Inhalt, um den `tagName` des Zielelements anzuzeigen, abgerufen über `invoker.interestForElement.tagName`.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("a");
const invokerText = document.querySelector("text");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

invokerText.textContent = `My target is a ${invoker.interestForElement.tagName} element`;
```

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Versuchen Sie, Interesse am Link zu zeigen (zum Beispiel durch Hovern oder Fokussieren), um das `<div>` erscheinen zu lassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [The Popover API](/de/docs/Web/API/Popover_API)
