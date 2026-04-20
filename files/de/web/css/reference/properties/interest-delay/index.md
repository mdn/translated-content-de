---
title: "`interest-delay` CSS-Eigenschaft"
short-title: interest-delay
slug: Web/CSS/Reference/Properties/interest-delay
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`interest-delay`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Verzögerung zwischen dem Zeitpunkt fest, an dem der Benutzer Interesse an einem [interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers)-Element zeigt, und dem Auslösen des [`interest`](/de/docs/Web/API/HTMLElement/interest_event)-Ereignisses sowie die Verzögerung zwischen dem Zeitpunkt, an dem der Benutzer das Interesse verliert, und dem Auslösen des [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event)-Ereignisses.

## Zusammengesetzte Eigenschaften

Die `interest-delay`-Eigenschaft ist eine Kurzform für die folgenden Eigenschaften:

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

Die `interest-delay`-Eigenschaft akzeptiert ein oder zwei Werte. Der erste Wert legt die Verzögerung fest, bevor das Interesse gezeigt wird (`interest-delay-start`); der zweite Wert, falls angegeben, legt die Verzögerung fest, bevor das Interesse verloren geht (`interest-delay-end`). Jeder Wert kann entweder das Schlüsselwort `normal` oder ein {{cssxref("&lt;time&gt;")}}-Wert sein:

- `normal`
  - : Setzt die Verzögerung auf die Standardverzögerung des Browsers. Dies ist der Anfangswert.
- {{cssxref("&lt;time&gt;")}}
  - : Legt die Verzögerung auf eine bestimmte Dauer fest. Der Wert muss positiv sein, andernfalls wird die Eigenschaft ungültig.

## Beschreibung

Ein Steuerelement wie ein {{htmlelement("a")}} oder {{htmlelement("button")}} kann als [interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) festgelegt werden, indem ihm das [`interestfor`](/de/docs/Web/HTML/Reference/Elements/a#interestfor)-Attribut gegeben wird. Sein Wert sollte die `id` eines Zielelements sein. Wenn diese Beziehung hergestellt ist, wird das Zielelement beeinflusst, wenn der Benutzer Interesse am invoker zeigt (zum Beispiel durch Hovern oder Fokussieren). Ein häufiges Anwendungsbeispiel ist das Anzeigen eines Popovers bei Hover oder Fokus. Wenn der Benutzer das Interesse verliert, hört der Effekt auf.

Wenn der Benutzer Interesse zeigt oder verliert, beginnt oder endet der zugehörige Effekt nicht sofort — der Browser fügt eine kurze Verzögerung hinzu (die je nach Browser variieren kann). Dies verhindert beispielsweise, dass [Vorschaupopovers](/de/docs/Web/API/Popover_API/Using_interest_invokers#using_interest_invokers_for_creating_preview_popovers) sofort erscheinen, wenn der Benutzer über einen Link schwebt, was auf einer linkreichen Seite störend sein könnte.

Die `interest-delay`-Eigenschaft ermöglicht es Ihnen, diese Verzögerungen anzupassen. Sie können `interest-delay` verwenden, um die Verzögerung anzugeben, bevor der Interesse-Effekt beginnt (angegeben durch die {{cssxref("interest-delay-start")}}-Eigenschaft) und die Verzögerung, bevor der Interesse-Effekt endet (angegeben durch die {{cssxref("interest-delay-end")}}-Eigenschaft) in einer einzigen Deklaration.

Die `interest-delay`-Eigenschaft kann einen oder zwei Werte annehmen. Diese Werte können das Schlüsselwort `normal` sein, was die Standardbrowserverzögerung festlegt, oder ein {{cssxref("&lt;time&gt;")}}-Wert, der eine benutzerdefinierte Verzögerung festlegt. Wenn ein einzelner Wert angegeben ist, gilt er sowohl für {{cssxref("interest-delay-start")}} als auch für {{cssxref("interest-delay-end")}}. Wenn zwei Werte angegeben sind, legt der erste Wert {{cssxref("interest-delay-start")}} fest, und der zweite Wert legt {{cssxref("interest-delay-end")}} fest.

## Formelle Definition

{{CSSInfo}}

## Formelle Syntax

{{csssyntax}}

## Beispiele

### Erstellen eines grundlegenden `interest-delay`-Effekts

In diesem Beispiel zeigen wir, wie `interest-delay` das Verhalten eines interest invoker beeinflusst.

#### HTML

Das Markup enthält ein {{htmlelement("button")}}, ein {{htmlelement("p")}}, und ein {{htmlelement("input")}} vom Typ `checkbox`. Wir spezifizieren das `<button>` als interest invoker, indem wir ihm das `interestfor`-Attribut geben, dessen Wert mit der `id` des `<p>`-Elements übereinstimmt. Dies macht den Absatz zum Zielelement. Der Absatz wird zu einem Popover, indem ihm das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut gegeben wird, was ihn zunächst ausblendet.

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

Im CSS definieren wir eine `.delay`-Regel, die einen `interest-delay`-Wert von `1s 2s` auf jeden interest invoker anwendet, auf den die `delay`-Klasse gesetzt wird. Wir setzen diese Klasse mit JavaScript auf das `<button>`, wenn das Kontrollkästchen aktiviert ist.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay: 1s 2s;
}
```

#### JavaScript

In unserem Skript holen wir Referenzen zum `<button>` und zum Kontrollkästchen und erstellen einen Event-Listener, der die `delay`-Klasse auf dem `<button>` umschaltet, wenn sich der Wert des Kontrollkästchens ändert (wenn es aktiviert oder deaktiviert wird).

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

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Hovern oder Fokussieren) und dann das Interesse zu verlieren, um zu beobachten, wie das Popover ein- und ausgeblendet wird. Standardmäßig zeigt und verbirgt sich das Popover nach einer sehr kurzen Verzögerung.

Aktivieren Sie jetzt das Kontrollkästchen und probieren Sie die gleichen Aktionen noch einmal. Dieses Mal sollte das Popover nach einer Verzögerung von `1s` erscheinen, wenn Interesse gezeigt wird, und nach einer Verzögerung von `2s` ausgeblendet werden, wenn das Interesse verloren geht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay-end")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS-Grundlagen der Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
