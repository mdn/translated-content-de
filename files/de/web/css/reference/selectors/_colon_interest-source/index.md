---
title: :interest-source
slug: Web/CSS/Reference/Selectors/:interest-source
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{SeeCompatTable}}

Die **`:interest-source`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein [Interest-Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) Element, wenn Interesse daran gezeigt wird.

## Syntax

```css
:interest-source {
  /* ... */
}
```

## Beispiele

### Auswahl eines Interest-Invoker-Elements

In diesem Beispiel zeigen wir, wie `:interest-source` verwendet werden kann, um Stile auf ein Interest-Invoker-Element anzuwenden, wenn Interesse daran gezeigt wird.

#### HTML

Das Markup umfasst ein {{htmlelement("button")}} und ein {{htmlelement("p")}}. Wir spezifizieren das `<button>` als Interest-Invoker, indem wir ihm das `interestfor` Attribut geben, dessen Wert mit der `id` des `<p>` Elements übereinstimmt und dadurch den Absatz zum Zielelement macht. Der Absatz wird in ein Popover umgewandelt, indem ihm das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut gegeben wird, welches es anfänglich versteckt.

```html live-sample___interest-source
<button interestfor="mypopover">Button</button>
<p id="mypopover" popover>A hover toolip</p>
```

#### CSS

Im CSS spezifizieren wir eine Regel mit einem `:interest-source` Selektor, um eine spezifische Kombination von {{cssxref("background-color")}} und {{cssxref("color")}} auf das `<button>` anzuwenden, wenn Interesse daran gezeigt wird. Wir wenden auch einige andere Stile auf das `<button>` an, die der Kürze halber ausgeblendet sind.

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

Dies wird wie folgt gerendert:

{{embedlivesample("interest-source", "100%", "100")}}

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Hover oder Fokus), und beachten Sie, wie die `hotpink` und `purple` Farbgebung nur angewendet wird, wenn Interesse gezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":interest-target")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
