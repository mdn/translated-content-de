---
title: :interest-target
slug: Web/CSS/Reference/Selectors/:interest-target
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

Die **`:interest-target`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert das Ziel-Element, das mit einem [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) verbunden ist, wenn Interesse an diesem Invoker gezeigt wird.

## Syntax

```css
:interest-target {
  /* ... */
}
```

## Beispiele

### Das Ziel-Element auswählen, das mit einem Interest Invoker verbunden ist

In diesem Beispiel demonstrieren wir, wie `:interest-target` verwendet werden kann, um Stile auf das Ziel-Element eines Interest Invoker-Elements anzuwenden, wenn Interesse an dem Invoker gezeigt wird.

#### HTML

Das Markup enthält einen {{htmlelement("button")}} und einen {{htmlelement("p")}}. Wir definieren den `<button>` als Interest Invoker, indem wir ihm das `interestfor`-Attribut geben, dessen Wert mit der `id` des `<p>`-Elements übereinstimmt und den Absatz so zum Ziel-Element macht.

```html live-sample___interest-target
<button interestfor="mytarget">Button</button>
<p id="mytarget">A paragraph</p>
```

#### CSS

Im CSS spezifizieren wir eine Regel mit einem `:interest-target`-Selektor, der eine spezielle Menge an Stilen auf das `<p>`-Element anwenden wird, wenn Interesse im `<button>` gezeigt wird. Wir wenden auch einige andere Stile auf den `<button>` an, die der Kürze halber hier nicht gezeigt sind.

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

Das wird wie folgt dargestellt:

{{embedlivesample("interest-target", "100%", "150")}}

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Hover oder Fokussierung), und beachten Sie, wie dies dazu führt, dass die vorher gezeigten Stile auf den Absatz angewendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":interest-source")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
