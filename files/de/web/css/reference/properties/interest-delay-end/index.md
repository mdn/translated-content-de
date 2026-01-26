---
title: interest-delay-end
slug: Web/CSS/Reference/Properties/interest-delay-end
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{SeeCompatTable}}

Die **`interest-delay-end`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Verzögerung zwischen dem Verlust des Interesses eines Benutzers an einem [interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) Element und dem Auslösen des [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event) Ereignisses fest.

Die Eigenschaften `interest-delay-end` und {{cssxref("interest-delay-start")}} können beide mit der Kurzform {{cssxref("interest-delay")}} festgelegt werden.

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

### Erstellen eines grundlegenden `interest-delay-end` Effekts

In diesem Beispiel demonstrieren wir, wie `interest-delay-end` das Verhalten von Interest Invokern beeinflusst.

#### HTML

Die Markup enthält ein {{htmlelement("button")}}, ein {{htmlelement("p")}}, und ein {{htmlelement("input")}} vom Typ `checkbox`. Wir definieren das `<button>` als Interest Invoker, indem wir ihm das `interestfor` Attribut geben, dessen Wert mit der `id` des `<p>` Elements übereinstimmt. Dies macht den Absatz zum Zielelement. Der Absatz wird durch das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut in ein Popover umgewandelt, welches ihn zunächst verbirgt.

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

Im CSS geben wir eine Regel mit einem `.delay` Selektor an, die einen `interest-delay-end` Wert von `2s` auf jeden Interest Invoker anwendet, auf den die `delay` Klasse gesetzt wird. Wir werden dies mit JavaScript auf das `<button>` anwenden, wenn das Kontrollkästchen aktiviert wird.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-end: 2s;
}
```

#### JavaScript

In unserem Skript holen wir Referenzen zum `<button>` und zum Kontrollkästchen und erstellen dann einen Eventlistener, der die `delay` Klasse auf dem `<button>` umschaltet, wenn sich der Wert des Kontrollkästchens ändert (wenn es aktiviert oder deaktiviert wird).

```js live-sample___interest-invoker-delay
const btn = document.querySelector("button");
const checkbox = document.querySelector("input");
checkbox.addEventListener("change", () => {
  btn.classList.toggle("delay");
});
```

#### Ergebnis

Dies wird wie folgt gerendert:

{{embedlivesample("interest-invoker-delay", "100%", "100")}}

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Überfahren mit der Maus oder Fokussieren) und dann das Interesse zu verlieren, um das Popover zu beobachten, das sich zeigt und versteckt. Standardmäßig zeigt und versteckt sich das Popover nach einer sehr kurzen Verzögerung.

Aktivieren Sie nun das Kontrollkästchen und probieren Sie dieselben Aktionen erneut aus. Diesmal sollte die Verzögerung zwischen dem Zeigen von Interesse und dem Erscheinen des Popovers nicht beeinflusst werden, aber die Verzögerung zwischen dem Verlust des Interesses und dem Verschwinden des Popovers sollte auf `2s` erhöht werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS Grundlegendes Benutzeroberflächenmodul](/de/docs/Web/CSS/Guides/Basic_user_interface)
