---
title: "HTMLAreaElement: interestForElement-Eigenschaft"
short-title: interestForElement
slug: Web/API/HTMLAreaElement/interestForElement
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{ApiRef("HTML DOM")}}

Die **`interestForElement`**-Eigenschaft der Schnittstelle [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) ruft das Zielelement eines Interest Invokers ab oder setzt es, in den Fällen, in denen das zugehörige {{htmlelement("area")}}-Element als Interest Invoker spezifiziert ist.

Weitere Details finden Sie unter [Erstellen eines Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker).

## Wert

Eine [`Element`](/de/docs/Web/API/Element)-Objektinstanz oder `null`, wenn das zugehörige `<area>`-Element kein Zielelement zugewiesen hat.

## Beispiele

### Grundlegende Nutzung von `interestForElement`

In diesem Beispiel verwenden wir die `interestForElement`-Eigenschaft eines `<area>`-Elements, um dessen Zielelement festzulegen. Anschließend rufen wir das `tagName` des Zielelements ab. Das `tagName` wird dann im Textinhalt des `<area>`-Elements angezeigt.

#### HTML

Wir fügen ein `<area>`-Element und ein `<div>`-Element ein. Wir verwandeln das `<div>`-Element in ein Popover, indem wir ein `popover`-Attribut darauf setzen.

```html live-sample___basic-interest-invoker
<map>
  <area href="#" shape="default" />
</map>
<div id="mypopover" popover>I am a <code>&lt;div&gt;</code> element.</div>
```

```css hidden live-sample___basic-interest-invoker
map {
  width: 200px;
  height: 100px;
  background-color: pink;
  padding: 5px;
}
```

#### JavaScript

Wir holen Referenzen auf die `<area>`- und `<div>`-Elemente im Skript und deklarieren dann eine Interest Invoker-Ziel-Beziehung zwischen dem `<area>` und dem `<div>`, indem wir die `interestForElement`-Eigenschaft des `<area>`-Elements auf eine Referenz zum `<div>` setzen. Wir setzen dann den Textinhalt des `<area>`-Elements auf einen String, der das `tagName` des Zielelements enthält, welcher über `invoker.interestForElement.tagName` abgerufen wird.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("area");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

invoker.textContent = `My target is a ${invoker.interestForElement.tagName} element`;
```

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Versuchen Sie, Interesse an dem Bereich zu zeigen (zum Beispiel durch Hovern oder Fokussieren), um das `<div>` erscheinen zu lassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nutzung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [Die Popover-API](/de/docs/Web/API/Popover_API)
