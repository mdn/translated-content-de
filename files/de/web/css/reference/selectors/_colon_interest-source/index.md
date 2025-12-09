---
title: :interest-source
slug: Web/CSS/Reference/Selectors/:interest-source
l10n:
  sourceCommit: 995f8bcede5aa8ca40921b030deef7524ce9e1a3
---

{{SeeCompatTable}}

Die **`:interest-source`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein [interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) Element, wenn Interesse an ihm gezeigt wird.

## Syntax

```css
:interest-source {
  /* ... */
}
```

## Beispiele

### Auswahl eines Interest Invoker-Elements

In diesem Beispiel zeigen wir, wie `:interest-source` verwendet werden kann, um einem Interest Invoker-Element Stile zuzuweisen, wenn Interesse an ihm gezeigt wird.

#### HTML

Das Markup enthält ein {{htmlelement("button")}} und ein {{htmlelement("p")}}. Wir spezifizieren das `<button>` als Interest Invoker, indem wir ihm das `interestfor` Attribut geben, dessen Wert mit der `id` des `<p>` Elements übereinstimmt, wodurch der Paragraph zum Ziel-Element wird. Der Paragraph wird zu einem Popover, indem wir ihm das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut geben, welches ihn zunächst ausblendet.

```html live-sample___interest-source
<button interestfor="mypopover">Button</button>
<p id="mypopover" popover>A hover tooltip</p>
```

#### CSS

Im CSS spezifizieren wir eine Regel mit einem `:interest-source` Selektor, um eine spezifische Kombination aus {{cssxref("background-color")}} und {{cssxref("color")}} auf das `<button>` anzuwenden, wenn Interesse daran gezeigt wird. Wir wenden auch einige andere Stile auf das `<button>` an, die der Kürze halber nicht gezeigt werden.

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

Das wird wie folgt dargestellt:

{{embedlivesample("interest-source", "100%", "100")}}

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Darüberfahren oder Fokussieren), und beachten Sie, wie die `hotpink` und `purple` Farbgebung nur angewendet wird, wenn Interesse gezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":interest-target")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
