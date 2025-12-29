---
title: :interest-target
slug: Web/CSS/Reference/Selectors/:interest-target
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{SeeCompatTable}}

Die **`:interest-target`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert das Zielelement, das mit einem [Interest-Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) verbunden ist, wenn Interesse an diesem Invoker angezeigt wird.

## Syntax

```css
:interest-target {
  /* ... */
}
```

## Beispiele

### Auswahl des Zielelements, das mit einem Interest-Invoker verbunden ist

In diesem Beispiel zeigen wir, wie `:interest-target` verwendet werden kann, um Stile auf das Zielelement eines Interest-Invoker-Elements anzuwenden, wenn Interesse an dem Invoker angezeigt wird.

#### HTML

Das Markup umfasst ein {{htmlelement("button")}} und ein {{htmlelement("p")}}. Wir geben dem `<button>` das Attribut `interestfor`, dessen Wert mit der `id` des `<p>`-Elements übereinstimmt, und machen damit den Absatz zum Zielelement.

```html live-sample___interest-target
<button interestfor="mytarget">Button</button>
<p id="mytarget">A paragraph</p>
```

#### CSS

Im CSS spezifizieren wir eine Regel mit einem `:interest-target` Selektor, der eine spezifische Menge von Stilen auf das `<p>`-Element anwendet, wenn Interesse im `<button>` angezeigt wird. Außerdem wenden wir einige andere Stile auf den `<button>` an, die wir der Kürze halber ausgelassen haben.

```css hidden live-sample___interest-target
body {
  margin: 10px;
}

button {
  padding: 5px 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  background-color: #eeeeee;

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

Das Ergebnis wird wie folgt dargestellt:

{{embedlivesample("interest-target", "100%", "150")}}

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch darüber Hovern oder Fokussieren), und beachten Sie, wie dies dazu führt, dass die zuvor gezeigten Stile auf den Absatz angewendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":interest-source")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS selectors](/de/docs/Web/CSS/Guides/Selectors) Modul
