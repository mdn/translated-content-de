---
title: "`interest-delay-end` CSS-Eigenschaft"
short-title: interest-delay-end
slug: Web/CSS/Reference/Properties/interest-delay-end
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{SeeCompatTable}}

Die **`interest-delay-end`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Verzögerung zwischen dem Zeitpunkt, an dem der Benutzer das Interesse an einem [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) Element verliert und dem Auslösen des [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event) Ereignisses.

Die Eigenschaften `interest-delay-end` und {{cssxref("interest-delay-start")}} können beide mit dem {{cssxref("interest-delay")}} kürzlichkeitsShorthand eingestellt werden.

## Syntax

```css
/* Keyword or custom delay */
interest-delay-end: normal;
interest-delay-end: 2s;
interest-delay-end: 250ms;

/* Global values */
interest-delay-end: inherit;
interest-delay-end: initial;
interest-delay-end: revert;
interest-delay-end: revert-layer;
interest-delay-end: unset;
```

### Werte

Diese Eigenschaft wird als ein `<time>` Wert oder das Schlüsselwort `normal` angegeben:

- `normal`
  - : Setzt die Verzögerung auf die standardmäßige Verzögerung des Browsers. Dies ist der Anfangswert.
- {{cssxref("&lt;time>")}}
  - : Legt die Verzögerung auf eine spezifische Dauer fest. Der Wert muss positiv sein, andernfalls wird die Eigenschaft ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen eines grundlegenden `interest-delay-end` Effekts

In diesem Beispiel zeigen wir, wie sich `interest-delay-end` auf das Verhalten eines Interest Invoker auswirkt.

#### HTML

Das Markup enthält einen {{htmlelement("button")}}, einen {{htmlelement("p")}}, und ein {{htmlelement("input")}} vom Typ `checkbox`. Wir spezifizieren den `<button>` als Interest Invoker, indem wir ihm das `interestfor` Attribut geben, dessen Wert mit der `id` des `<p>` Elements übereinstimmt. Dies macht den Paragraphen zum Zielelement. Der Paragraph wird zu einem Popover, indem er das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut erhält, das ihn zunächst verbirgt.

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">Button</button>
<p id="mypopover" popover>Hover tooltip</p>
<form>
  <input type="checkbox" id="apply-delay" />
  <label for="apply-delay">
    Apply an <code>interest-delay-end</code> of <code>2s</code>
  </label>
</form>
```

#### CSS

Im CSS spezifizieren wir eine Regel mit einem `.delay` Selektor, der einen `interest-delay-end` Wert von `2s` auf jeden Interest Invoker anwendet, bei dem die `delay` Klasse gesetzt ist. Wir werden dies auf den `<button>` anwenden, wenn das Kontrollkästchen mit JavaScript ausgewählt wird.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-end: 2s;
}
```

#### JavaScript

In unserem Skript erhalten wir Referenzen zum `<button>` und dem Kontrollkästchen, dann erstellen wir einen Event-Listener, der die `delay` Klasse auf dem `<button>` umschaltet, wann immer sich der Wert des Kontrollkästchens ändert (wenn es ausgewählt oder abgewählt wird).

```js live-sample___interest-invoker-delay
const btn = document.querySelector("button");
const checkbox = document.querySelector("input");
checkbox.addEventListener("change", () => {
  btn.classList.toggle("delay");
});
```

#### Ergebnis

Dies wird wie folgt dargestellt:

{{embedlivesample("interest-invoker-delay", "100%", "100")}}

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Überfahren mit der Maus oder Fokussieren) und verlieren Sie dann das Interesse, um das Popover zu sehen, das angezeigt und versteckt wird. Standardmäßig wird das Popover nach einer sehr kurzen Verzögerung angezeigt und verborgen.

Aktivieren Sie nun das Kontrollkästchen und versuchen Sie die gleichen Aktionen erneut. Dieses Mal sollte die Verzögerung zwischen dem Zeigen von Interesse und dem Erscheinen des Popovers unverändert sein, aber die Verzögerung zwischen dem Verlieren von Interesse und dem Verschwinden des Popovers sollte auf `2s` erhöht sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS Basic User Interface](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
