---
title: "HTMLAnchorElement: interestForElement-Eigenschaft"
short-title: interestForElement
slug: Web/API/HTMLAnchorElement/interestForElement
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{ApiRef("HTML DOM")}}

Die **`interestForElement`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ruft das Zielelement eines Interesse-Auslösers ab oder setzt es, in Fällen, in denen das zugehörige {{htmlelement("a")}}-Element als Interesse-Auslöser angegeben ist.

Weitere Details finden Sie unter [Erstellen eines Interesse-Auslösers](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker).

## Wert

Eine Instanz eines [`Element`](/de/docs/Web/API/Element)-Objekts oder `null`, wenn das zugehörige `<a>`-Element kein Zielelement gesetzt hat.

## Beispiele

### Grundlegende Verwendung von `interestForElement`

In diesem Beispiel verwenden wir die `interestForElement`-Eigenschaft eines `<a>`-Elements, um sein Zielelement festzulegen und anschließend das `tagName` dieses Elements abzurufen. Das `tagName` wird dann im Textinhalt des `<a>`-Elements angezeigt.

#### HTML

Das Markup enthält ein `<a>`-Element und ein `<div>`-Element. Wir verwandeln das `<div>`-Element in ein Popover, indem wir ein `popover`-Attribut darauf setzen.

```html live-sample___basic-interest-invoker
<a href="#">a link</a>
<div id="mypopover" popover>I am a <code>&lt;div&gt;</code> element.</div>
```

#### JavaScript

Wir holen uns Referenzen zu den `<a>`- und `<div>`-Elementen im Skript. Dann erstellen wir die Interesse-Auslöser-Ziel-Beziehung zwischen dem `<a>`- und dem `<div>`, indem wir die `interestForElement`-Eigenschaft des `<a>`-Elements auf eine Referenz zum `<div>` setzen. Anschließend aktualisieren wir den Textinhalt des `<a>`-Elements, um einen String mit dem `tagName` des Zielelements zu enthalten, abgerufen über `invoker.interestForElement.tagName`.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("a");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

invoker.textContent = `My target is a ${invoker.interestForElement.tagName} element`;
```

#### Ergebnis

Das Beispiel rendert so:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Versuchen Sie, Interesse an dem Link zu zeigen (beispielsweise durch darüber Hovern oder fokussieren), um das `<div>` erscheinen zu lassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Interesse-Auslösern](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [Die Popover-API](/de/docs/Web/API/Popover_API)
