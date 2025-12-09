---
title: "HTMLAreaElement: Eigenschaft interestForElement"
short-title: interestForElement
slug: Web/API/HTMLAreaElement/interestForElement
l10n:
  sourceCommit: 995f8bcede5aa8ca40921b030deef7524ce9e1a3
---

{{ApiRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`interestForElement`**-Eigenschaft der Schnittstelle [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) ruft das Ziel-Element eines Interesses-Initiators ab oder legt es fest, in Fällen, in denen das zugehörige {{htmlelement("area")}}-Element als Interessen-Initiator angegeben ist.

Siehe [Creating an interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) für weitere Details.

## Wert

Eine Instanz des [`Element`](/de/docs/Web/API/Element)-Objekts oder `null`, wenn das zugehörige `<area>`-Element kein Ziel-Element festgelegt hat.

## Beispiele

### Grundlegende Verwendung von `interestForElement`

In diesem Beispiel verwenden wir die `interestForElement`-Eigenschaft eines `<area>`-Elements, um dessen Ziel-Element festzulegen und dann den `tagName` des Ziel-Elements abzurufen. Der `tagName` wird dann im Textinhalt des `<area>`-Elements ausgegeben.

#### HTML

Wir fügen ein `<area>`-Element und ein `<div>`-Element ein. Wir verwandeln das `<div>`-Element in ein Popover, indem wir ein `popover`-Attribut darauf setzen.

```html live-sample___basic-interest-invoker
<map name="example-map" id="example-map">
  <area href="#" shape="default" alt="Example area" />
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

Wir erhalten Verweise auf die `<area>`- und `<div>`-Elemente im Skript und deklarieren dann eine Interessen-Initiator-Ziel-Beziehung zwischen dem `<area>` und dem `<div>`, indem wir die `interestForElement`-Eigenschaft des `<area>`-Elements auf einen Verweis auf das `<div>` setzen. Dann setzen wir den Textinhalt des `<area>`-Elements auf eine Zeichenfolge, die den `tagName` des Ziel-Elements enthält, der über `invoker.interestForElement.tagName` abgerufen wird.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("area");
const popover = document.querySelector("div");

invoker.interestForElement = popover;

invoker.textContent = `My target is a ${invoker.interestForElement.tagName} element`;
```

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Versuchen Sie, Interesse am Bereich zu zeigen (zum Beispiel, indem Sie darüber schweben oder ihn fokussieren), um das `<div>` erscheinen zu lassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [The Popover API](/de/docs/Web/API/Popover_API)
