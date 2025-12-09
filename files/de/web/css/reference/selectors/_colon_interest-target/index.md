---
title: :interest-target
slug: Web/CSS/Reference/Selectors/:interest-target
l10n:
  sourceCommit: 995f8bcede5aa8ca40921b030deef7524ce9e1a3
---

{{SeeCompatTable}}

Die **`:interest-target`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert das Zielelement, das mit einem [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) verbunden ist, wenn das Interesse an diesem Invoker gezeigt wird.

## Syntax

```css
:interest-target {
  /* ... */
}
```

## Beispiele

### Das Zielelement auswählen, das mit einem Interest Invoker verbunden ist

In diesem Beispiel zeigen wir, wie `:interest-target` verwendet werden kann, um Stile auf das Zielelement eines Interest Invoker-Elements anzuwenden, wenn das Interesse an dem Invoker gezeigt wird.

#### HTML

Das Markup enthält ein {{htmlelement("button")}} und ein {{htmlelement("p")}}. Wir spezifizieren den `<button>` als Interest Invoker, indem wir ihm das `interestfor` Attribut geben, dessen Wert mit der `id` des `<p>` Elements übereinstimmt, wodurch der Absatz zum Zielelement wird.

```html live-sample___interest-target
<button interestfor="mytarget">Button</button>
<p id="mytarget">A paragraph</p>
```

#### CSS

Im CSS spezifizieren wir eine Regel mit einem `:interest-target` Selektor, der eine spezifische Menge von Stilen auf das `<p>` Element anwenden wird, wenn Interesse am `<button>` gezeigt wird. Wir wenden auch einige andere Stile auf den `<button>` an, die wir der Kürze halber weggelassen haben.

```css hidden live-sample___interest-target
body {
  margin: 10px;
}

button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #eee;

  cursor: pointer;
}
```

```css live-sample___interest-target
p:interest-target {
  font-size: 1.5em;
  font-family: sans-serif;
  padding: 10px;
  background-color: hotpink;
  color: purple;
}
```

#### Ergebnis

Das Ergebnis sieht wie folgt aus:

{{embedlivesample("interest-target", "100%", "150")}}

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Schweben oder Fokussieren), und beachten Sie, wie die zuvor gezeigten Stile auf den Absatz angewendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":interest-source")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
