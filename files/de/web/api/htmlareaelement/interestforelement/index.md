---
title: "HTMLAreaElement: interestForElement-Eigenschaft"
short-title: interestForElement
slug: Web/API/HTMLAreaElement/interestForElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{ApiRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`interestForElement`**-Eigenschaft des [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interfaces holt oder setzt das Zielelement eines Interessenaufrufers, in Fällen, in denen das zugehörige {{htmlelement("area")}}-Element als Interessenaufrufer festgelegt ist.

Siehe [Erstellen eines Interessenaufrufers](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) für weitere Details.

## Wert

Eine [`Element`](/de/docs/Web/API/Element)-Objektinstanz oder `null`, wenn das zugehörige `<area>`-Element kein Zielelement gesetzt hat.

## Beispiele

### Grundlegende Verwendung von `interestForElement`

In diesem Beispiel nutzen wir die `interestForElement`-Eigenschaft eines `<area>`-Elements, um sein Zielelement zu setzen und dann den `tagName` des Zielelements abzurufen. Der `tagName` wird dann im Textinhalt des `<area>`-Elements ausgegeben.

#### HTML

Wir fügen ein `<area>`-Element und ein `<div>`-Element hinzu. Wir machen das `<div>`-Element zu einem Popover, indem wir ein `popover`-Attribut darauf setzen.

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

Wir erhalten Verweise auf die `<area>`- und `<div>`-Elemente im Skript und erklären dann eine Interessenaufrufer-Zielfernbeziehung zwischen dem `<area>` und dem `<div>`, indem wir die `interestForElement`-Eigenschaft des `<area>`-Elements auf einen Verweis zum `<div>` setzen. Anschließend setzen wir den Textinhalt des `<area>`-Elements auf einen String, der den `tagName` des Zielelements enthält, abgerufen über `invoker.interestForElement.tagName`.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("area");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

invoker.textContent = `My target is a ${invoker.interestForElement.tagName} element`;
```

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Versuchen Sie, Interesse an dem Bereich zu zeigen (zum Beispiel durch Hover oder Fokussierung), um das `<div>` anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Interessenaufrufern](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [Das Popover API](/de/docs/Web/API/Popover_API)
