---
title: "HTMLAnchorElement: interestForElement-Eigenschaft"
short-title: interestForElement
slug: Web/API/HTMLAnchorElement/interestForElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{ApiRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`interestForElement`**-Eigenschaft der [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle ruft das Zielelement eines Interest Invokers ab oder legt es fest, in Fällen, in denen das zugehörige {{htmlelement("a")}}-Element als Interest Invoker angegeben ist.

Siehe [Erstellen eines Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) für weitere Details.

## Wert

Eine Instanz eines [`Element`](/de/docs/Web/API/Element)-Objekts oder `null`, wenn das zugehörige `<a>`-Element kein Zielelement gesetzt hat.

## Beispiele

### Grundlegende Nutzung von `interestForElement`

In diesem Beispiel verwenden wir die `interestForElement`-Eigenschaft eines `<a>`-Elements, um dessen Zielelement festzulegen und anschließend dessen `tagName` abzurufen. Der `tagName` wird dann im Textinhalt des `<a>`-Elements angezeigt.

#### HTML

Das Markup beinhaltet ein `<a>`-Element und ein `<div>`-Element. Wir verwandeln das `<div>`-Element in ein Popover, indem wir ihm ein `popover`-Attribut zuweisen.

```html live-sample___basic-interest-invoker
<a href="#">a link</a>
<div id="mypopover" popover>I am a <code>&lt;div&gt;</code> element.</div>
```

#### JavaScript

Wir erhalten in einem Skript Referenzen auf die `<a>`- und `<div>`-Elemente. Dann erstellen wir die Beziehung zwischen Interest Invoker und Ziel, indem wir die `interestForElement`-Eigenschaft des `<a>`-Elements auf eine Referenz zu dem `<div>` setzen. Anschließend aktualisieren wir den Textinhalt des `<a>`-Elements, indem wir eine Zeichenkette einfügen, die den `tagName` des Zielelements enthält, der über `invoker.interestForElement.tagName` abgerufen wird.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("a");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

invoker.textContent = `My target is a ${invoker.interestForElement.tagName} element`;
```

#### Ergebnis

Das Beispiel wird folgendermaßen dargestellt:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Versuchen Sie, Interesse am Link zu zeigen (zum Beispiel durch Schweben oder Fokussieren), um das `<div>` erscheinen zu lassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [The Popover API](/de/docs/Web/API/Popover_API)
