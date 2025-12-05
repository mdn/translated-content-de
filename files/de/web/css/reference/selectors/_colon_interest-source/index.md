---
title: :interest-source
slug: Web/CSS/Reference/Selectors/:interest-source
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

Die **`:interest-source`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) Element, wenn Interesse daran gezeigt wird.

## Syntax

```css
:interest-source {
  /* ... */
}
```

## Beispiele

### Auswahl eines Interest Invoker Elements

In diesem Beispiel zeigen wir, wie `:interest-source` verwendet werden kann, um Stile auf ein Interest Invoker Element anzuwenden, wenn Interesse daran gezeigt wird.

#### HTML

Das Markup umfasst ein {{htmlelement("button")}} und ein {{htmlelement("p")}}. Wir spezifizieren das `<button>` als Interest Invoker, indem wir ihm das `interestfor` Attribut geben, dessen Wert mit der `id` des `<p>` Elements übereinstimmt, wodurch der Absatz das Zielelement wird. Der Absatz wird in ein Popover verwandelt, indem ihm das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut gegeben wird, das ihn zunächst verbirgt.

```html live-sample___interest-source
<button interestfor="mypopover">Button</button>
<p id="mypopover" popover>A hover toolip</p>
```

#### CSS

Im CSS spezifizieren wir eine Regel mit einem `:interest-source` Selektor, um eine spezifische Kombination aus {{cssxref("background-color")}} und {{cssxref("color")}} auf das `<button>` anzuwenden, wenn Interesse daran gezeigt wird. Wir wenden auch einige andere Stile auf das `<button>` an, die aus Gründen der Kürze ausgelassen sind.

```css hidden live-sample___interest-source
button {
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1.5em;
  background-color: #eee;

  cursor: pointer;
}
```

```css live-sample___interest-source
button:interest-source {
  background-color: hotpink;
  color: purple;
}
```

#### Ergebnis

Das Ergebnis sieht wie folgt aus:

{{embedlivesample("interest-source", "100%", "100")}}

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel, indem Sie darüber fahren oder ihn fokussieren), und beachten Sie, wie die `hotpink` und `purple` Farbkombination nur angewendet wird, wenn Interesse gezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":interest-target")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
