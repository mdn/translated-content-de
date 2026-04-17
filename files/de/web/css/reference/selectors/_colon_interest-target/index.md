---
title: "`:interest-target` CSS-Pseudoklasse"
short-title: :interest-target
slug: Web/CSS/Reference/Selectors/:interest-target
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{SeeCompatTable}}

Die **`:interest-target`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert das Ziel-Element, das mit einem [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) verknüpft ist, wenn Interesse an diesem Invoker gezeigt wird.

## Syntax

```css
:interest-target {
  /* ... */
}
```

## Beispiele

### Auswählen des Ziel-Elements eines Interest Invokers

In diesem Beispiel zeigen wir, wie `:interest-target` verwendet werden kann, um Stile auf das Ziel-Element eines Interest Invoker-Elements anzuwenden, wenn Interesse an dem Invoker gezeigt wird.

#### HTML

Das Markup enthält ein {{htmlelement("button")}} und ein {{htmlelement("p")}}. Wir spezifizieren den `<button>` als Interest Invoker, indem wir ihm das `interestfor`-Attribut geben, dessen Wert mit der `id` des `<p>`-Elements übereinstimmt, wodurch der Absatz zum Ziel-Element wird.

```html live-sample___interest-target
<button interestfor="mytarget">Button</button>
<p id="mytarget">A paragraph</p>
```

#### CSS

Im CSS spezifizieren wir eine Regel mit einem `:interest-target`-Selektor, der einen speziellen Satz von Stilen auf das `<p>`-Element anwenden wird, wenn Interesse am `<button>` gezeigt wird. Wir wenden auch einige andere Stile auf den `<button>` an, die wir der Kürze halber ausgeblendet haben.

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

Dies wird wie folgt dargestellt:

{{embedlivesample("interest-target", "100%", "150")}}

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Hover- oder Fokussieren), und beachten Sie, wie dies dazu führt, dass die zuvor gezeigten Stile auf den Absatz angewendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":interest-source")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
