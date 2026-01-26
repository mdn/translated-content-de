---
title: "HTMLButtonElement: interestForElement-Eigenschaft"
short-title: interestForElement
slug: Web/API/HTMLButtonElement/interestForElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{ApiRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`interestForElement`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces ruft das Zielelement eines "interest invoker" ab oder legt es fest, falls das zugehörige {{htmlelement("button")}}-Element als "interest invoker" angegeben wurde.

Siehe [Erstellen eines Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) für weitere Details.

## Wert

Eine Instanz des [`Element`](/de/docs/Web/API/Element)-Objekts oder `null`, wenn das zugehörige `<button>`-Element kein Zielelement gesetzt hat.

## Beispiele

### Grundlegende Nutzung von `interestForElement`

In diesem Beispiel nutzen wir die `interestForElement`-Eigenschaft eines `<button>`-Elements, um sein Zielelement festzulegen, und rufen anschließend das `tagName` des Zielelements ab. Das `tagName` wird dann im Textinhalt des `<button>`-Elements ausgegeben.

#### HTML

Wir fügen ein `<button>`-Element und ein `<div>`-Element ein. Wir verwandeln das `<div>`-Element in ein Popover, indem wir ihm ein `popover`-Attribut zuweisen.

```html live-sample___basic-interest-invoker
<button href="#">a button</button>
<div id="mypopover" popover>I am a <code>&lt;div&gt;</code> element.</div>
```

#### JavaScript

Wir erhalten Referenzen zu den `<button>`- und `<div>`-Elementen im Skript und deklarieren dann eine "interest invoker"-Ziel-Beziehung zwischen dem `<button>` und dem `<div>`, indem wir die `interestForElement`-Eigenschaft des `<button>`-Elements auf eine Referenz zum `<div>` setzen. Anschließend setzen wir den Textinhalt des Buttons auf einen String, der das `tagName` des Zielelements enthält, abgerufen über `invoker.interestForElement.tagName`.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("button");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

invoker.textContent = `My target is a ${invoker.interestForElement.tagName} element`;
```

#### Ergebnis

Das Beispiel wird wie folgt gerendert:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel, indem Sie ihn fokussieren oder darüber schweben), um das `<div>` erscheinen zu lassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [Die Popover-API](/de/docs/Web/API/Popover_API)
