---
title: :interest-source
slug: Web/CSS/Reference/Selectors/:interest-source
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{SeeCompatTable}}

Die **`:interest-source`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein [Interessenelement](/de/docs/Web/API/Popover_API/Using_interest_invokers), wenn Interesse daran gezeigt wird.

## Syntax

```css
:interest-source {
  /* ... */
}
```

## Beispiele

### Auswahl eines Interessenelements

In diesem Beispiel zeigen wir, wie `:interest-source` verwendet werden kann, um Stile auf ein Interessenelement anzuwenden, wenn Interesse daran gezeigt wird.

#### HTML

Das Markup enthält ein {{htmlelement("button")}} und ein {{htmlelement("p")}}. Wir spezifizieren den `<button>` als Interessenelement, indem wir ihm das `interestfor`-Attribut geben, dessen Wert mit der `id` des `<p>`-Elements übereinstimmt, wodurch der Absatz zum Zielelement wird. Der Absatz wird zu einem Popover, indem ihm das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut gegeben wird, welches es zunächst versteckt.

```html live-sample___interest-source
<button interestfor="mypopover">Button</button>
<p id="mypopover" popover>A hover tooltip</p>
```

#### CSS

Im CSS spezifizieren wir eine Regel mit einem `:interest-source`-Selektor, um eine spezifische Kombination von {{cssxref("background-color")}} und {{cssxref("color")}} auf den `<button>` anzuwenden, wenn Interesse daran gezeigt wird. Wir wenden auch einige andere Stile auf den `<button>` an, die der Kürze halber ausgeblendet sind.

```css hidden live-sample___interest-source
button {
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1.5em;
  background-color: #eeeeee;

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

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Schweben oder Fokussieren), und beachten Sie, wie die `hotpink` und `purple` Farbkombination nur dann angewendet wird, wenn Interesse gezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":interest-target")}}
- [Popover-API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interessenelementen](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
