---
title: "`interest-delay-end` CSS-Eigenschaft"
short-title: interest-delay-end
slug: Web/CSS/Reference/Properties/interest-delay-end
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`interest-delay-end`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Verzögerung zwischen dem Verlust des Interesses des Nutzers an einem [interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) Element und dem Auslösen des [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event) Events fest.

Die `interest-delay-end` und {{cssxref("interest-delay-start")}} Eigenschaften können beide durch das Kurzwort {{cssxref("interest-delay")}} gesetzt werden.

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

- `normal`
  - : Setzt die Verzögerung auf die Standardverzögerung des Browsers. Dies ist der Anfangswert.
- {{cssxref("&lt;time>")}}
  - : Setzt die Verzögerung auf eine bestimmte Dauer. Der Wert muss positiv sein, andernfalls wird die Eigenschaft ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellung eines grundlegenden `interest-delay-end` Effekts

In diesem Beispiel zeigen wir, wie `interest-delay-end` das Verhalten von Interest Invokern beeinflusst.

#### HTML

Das Markup enthält einen {{htmlelement("button")}}, ein {{htmlelement("p")}} und ein {{htmlelement("input")}} vom Typ `checkbox`. Wir spezifizieren den `<button>` als Interest Invoker, indem wir ihm das `interestfor` Attribut geben, dessen Wert mit der `id` des `<p>` Elements übereinstimmt. Dies macht den Absatz zum Ziel-Element. Der Absatz wird durch das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut in einen Popover umgewandelt, der ihn zunächst verbirgt.

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

Im CSS spezifizieren wir eine Regel mit einem `.delay` Selektor, der einen `interest-delay-end` Wert von `2s` auf jeden Interest Invoker anwendet, auf dem die `delay` Klasse gesetzt ist. Wir werden dies auf den `<button>` setzen, wenn das Kontrollkästchen mittels JavaScript aktiviert wird.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-end: 2s;
}
```

#### JavaScript

In unserem Skript holen wir Referenzen zum `<button>` und zum Kontrollkästchen, und erstellen dann einen Ereignis-Listener, der die `delay` Klasse auf dem `<button>` umschaltet, wann immer sich der Wert des Kontrollkästchens ändert (wenn es markiert oder entmarkiert wird).

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

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Hovern oder Fokussieren) und dann das Interesse zu verlieren, um zu beobachten, wie der Popover erscheint und verschwindet. Standardmäßig erscheint und verschwindet der Popover nach einer sehr kurzen Verzögerung.

Jetzt aktivieren Sie das Kontrollkästchen und versuchen Sie die gleichen Aktionen erneut. Dieses Mal bleibt die Verzögerung zwischen dem Zeigen von Interesse und dem Erscheinen des Popovers unverändert, aber die Verzögerung zwischen dem Verlieren des Interesses und dem Verschwinden des Popovers sollte auf `2s` erhöht sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS grundlegendes Benutzeroberflächenmodul](/de/docs/Web/CSS/Guides/Basic_user_interface)
