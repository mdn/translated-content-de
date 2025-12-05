---
title: "HTMLButtonElement: interestForElement-Eigenschaft"
short-title: interestForElement
slug: Web/API/HTMLButtonElement/interestForElement
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{ApiRef("HTML DOM")}}

Die **`interestForElement`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces ruft das Ziel-Element eines "interest invoker" ab oder setzt es, in Fällen, in denen das zugehörige {{htmlelement("button")}}-Element als "interest invoker" angegeben ist.

Weitere Details finden Sie unter [Erstellung eines interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker).

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objektinstanz oder `null`, wenn das zugehörige `<button>`-Element kein Ziel-Element gesetzt hat.

## Beispiele

### Grundlegende Nutzung von `interestForElement`

In diesem Beispiel verwenden wir die `interestForElement`-Eigenschaft eines `<button>`-Elements, um dessen Ziel-Element zu setzen und dann das `tagName` des Ziel-Elements abzurufen. Das `tagName` wird dann im Textinhalt des `<button>`-Elements ausgegeben.

#### HTML

Wir fügen ein `<button>`-Element und ein `<div>`-Element ein. Wir verwandeln das `<div>`-Element in ein Popover, indem wir ihm ein `popover`-Attribut zuweisen.

```html live-sample___basic-interest-invoker
<button href="#">a button</button>
<div id="mypopover" popover>I am a <code>&lt;div&gt;</code> element.</div>
```

#### JavaScript

Wir erhalten Referenzen zu den `<button>`- und `<div>`-Elementen im Skript und deklarieren dann eine Interessens-Initiator-Ziel-Beziehung zwischen dem `<button>` und dem `<div>`, indem wir die `interestForElement`-Eigenschaft des `<button>`-Elements auf eine Referenz zum `<div>` setzen. Wir setzen dann den Textinhalt des Buttons auf einen String, der das `tagName` des Ziel-Elements enthält, das über `invoker.interestForElement.tagName` abgerufen wird.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("button");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

invoker.textContent = `My target is a ${invoker.interestForElement.tagName} element`;
```

#### Ergebnis

Das Beispiel wird wie folgt angezeigt:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Hovern oder Fokussieren), um das `<div>` erscheinen zu lassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [Das Popover-API](/de/docs/Web/API/Popover_API)
