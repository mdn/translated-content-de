---
title: interest-delay
slug: Web/CSS/Reference/Properties/interest-delay
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{SeeCompatTable}}

Die **`interest-delay`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Verzögerung fest zwischen dem Zeitpunkt, zu dem der Benutzer Interesse an einem [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) Element zeigt und dem Auslösen des [`interest`](/de/docs/Web/API/HTMLElement/interest_event) Ereignisses, sowie die Verzögerung zwischen dem Verlust des Interesses und dem Auslösen des [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event) Ereignisses.

## Zusammengesetzte Eigenschaften

Die `interest-delay` Eigenschaft ist eine Kurzform für die folgenden Eigenschaften:

- {{cssxref("interest-delay-start")}}
- {{cssxref("interest-delay-end")}}

## Syntax

```css
/* Single value */
interest-delay: normal;
interest-delay: 2s;
interest-delay: 250ms;

/* Two values */
interest-delay: 1s normal;
interest-delay: 0s 500ms;

/* Global values */
interest-delay: inherit;
interest-delay: initial;
interest-delay: revert;
interest-delay: revert-layer;
interest-delay: unset;
```

### Werte

Die `interest-delay` Eigenschaft akzeptiert einen oder zwei Werte. Der erste Wert legt die Verzögerung fest, bevor Interesse gezeigt wird (`interest-delay-start`); der zweite Wert, falls angegeben, legt die Verzögerung fest, bevor Interesse verloren geht (`interest-delay-end`). Jeder Wert kann entweder das Schlüsselwort `normal` oder ein {{cssxref("&lt;time&gt;")}} Wert sein:

- `normal`
  - : Setzt die Verzögerung auf die Standardverzögerung des Browsers. Dies ist der Initialwert.
- {{cssxref("&lt;time&gt;")}}
  - : Setzt die Verzögerung auf eine spezifische Dauer. Der Wert muss positiv sein, andernfalls wird die Eigenschaft ungültig.

## Beschreibung

Ein Steuerelement wie ein {{htmlelement("a")}} oder {{htmlelement("button")}} kann als [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) gesetzt werden, indem ihm das [`interestfor`](/de/docs/Web/HTML/Reference/Elements/a#interestfor) Attribut gegeben wird. Sein Wert sollte die `id` eines Zielelements sein. Wenn diese Beziehung hergestellt ist, wird das Zielelement beeinflusst, wenn der Benutzer Interesse am Invoker zeigt (zum Beispiel durch Hover oder Fokussierung). Ein häufiges Anwendungsbeispiel ist das Anzeigen eines Popovers bei Hover oder Fokus. Wenn der Benutzer das Interesse verliert, stoppt der Effekt.

Wenn der Benutzer Interesse zeigt oder verliert, beginnt oder endet der zugehörige Effekt nicht sofort – der Browser fügt eine kurze Verzögerung hinzu (die je nach Browser variieren kann). Dies verhindert zum Beispiel, dass [Preview Popovers](/de/docs/Web/API/Popover_API/Using_interest_invokers#using_interest_invokers_for_creating_preview_popovers) sofort erscheinen, wenn der Benutzer über einen Link fährt, was auf einer linkreichen Seite störend und ablenkend sein könnte.

Die `interest-delay` Eigenschaft ermöglicht es Ihnen, diese Verzögerungen anzupassen. Sie können `interest-delay` verwenden, um die Verzögerung anzugeben, bevor der Interesse-Effekt beginnt (angegeben durch die {{cssxref("interest-delay-start")}} Eigenschaft) und die Verzögerung, bevor der Interesse-Effekt endet (angegeben durch die {{cssxref("interest-delay-end")}} Eigenschaft) in einer einzigen Deklaration.

Die `interest-delay` Eigenschaft kann einen oder zwei Werte haben. Diese Werte können das Schlüsselwort `normal` sein, welches die Standard-Browserverzögerung setzt, oder ein {{cssxref("&lt;time&gt;")}} Wert, der eine benutzerdefinierte Verzögerung festlegt. Wenn ein einzelner Wert angegeben wird, gilt er für beide {{cssxref("interest-delay-start")}} und {{cssxref("interest-delay-end")}}. Wenn zwei Werte angegeben werden, setzt der erste Wert {{cssxref("interest-delay-start")}} und der zweite Wert {{cssxref("interest-delay-end")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen eines grundlegenden `interest-delay` Effekts

In diesem Beispiel demonstrieren wir, wie `interest-delay` das Verhalten von Interest Invokern beeinflusst.

#### HTML

Das Markup enthält ein {{htmlelement("button")}}, ein {{htmlelement("p")}} und ein {{htmlelement("input")}} vom Typ `checkbox`. Wir spezifizieren den `<button>` als Interest Invoker, indem wir ihm das `interestfor` Attribut geben, dessen Wert mit der `id` des `<p>` Elements übereinstimmt. Dies macht den Absatz zum Zielelement. Der Absatz wird in ein Popover verwandelt, indem er das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut erhält, das ihn zunächst verbirgt.

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">Button</button>
<p id="mypopover" popover>Hover tooltip</p>
<form>
  <input type="checkbox" id="apply-delay" />
  <label for="apply-delay">
    Apply an <code>interest-delay</code> of <code>1s 2s</code>
  </label>
</form>
```

#### CSS

Im CSS definieren wir eine `.delay` Regel, die einen `interest-delay` Wert von `1s 2s` auf jeden Interest Invoker anwendet, bei dem die `delay` Klasse gesetzt ist. Wir werden diese Klasse auf den `<button>` setzen, wenn die Checkbox über JavaScript aktiviert ist.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay: 1s 2s;
}
```

#### JavaScript

In unserem Skript erhalten wir Referenzen auf den `<button>` und die Checkbox, dann erstellen wir einen Event-Listener, der die `delay` Klasse auf dem `<button>` umschaltet, wann immer sich der Wert der Checkbox ändert (wenn sie aktiviert oder deaktiviert wird).

```js live-sample___interest-invoker-delay
const btn = document.querySelector("button");
const checkbox = document.querySelector("input");
checkbox.addEventListener("change", () => {
  btn.classList.toggle("delay");
});
```

#### Ergebnis

Dies rendert wie folgt:

{{embedlivesample("interest-invoker-delay", "100%", "100")}}

Versuchen Sie, Interesse an dem Button zu zeigen (zum Beispiel durch Hovern oder Fokussieren) und dann das Interesse zu verlieren, um zu beobachten, wie das Popover angezeigt und ausgeblendet wird. Standardmäßig wird das Popover nach einer sehr kurzen Verzögerung angezeigt und ausgeblendet.

Aktivieren Sie nun die Checkbox und versuchen Sie die gleichen Aktionen erneut. Dieses Mal sollte das Popover nach einer Verzögerung von `1s` erscheinen, wenn Interesse gezeigt wird, und nach einer Verzögerung von `2s` ausgeblendet werden, wenn das Interesse verloren geht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay-end")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS grundlegendes Benutzerinterface](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
