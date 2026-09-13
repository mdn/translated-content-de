---
title: CSS-Eigenschaft `interest-delay`
short-title: interest-delay
slug: Web/CSS/Reference/Properties/interest-delay
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

Die **`interest-delay`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Verzögerung fest, zwischen dem Moment, wenn der Benutzer Interesse an einem [Interest-Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers)-Element zeigt und dem Auslösen des [`interest`](/de/docs/Web/API/HTMLElement/interest_event)-Events, sowie die Verzögerung zwischen dem Verlust des Interesses des Benutzers und dem Auslösen des [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event)-Events.

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden Eigenschaften:

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

Die `interest-delay`-Eigenschaft akzeptiert einen oder zwei Werte. Der erste Wert legt die Verzögerung fest, bevor Interesse gezeigt wird (`interest-delay-start`); der zweite Wert, falls angegeben, legt die Verzögerung fest, bevor Interesse verloren geht (`interest-delay-end`). Jeder Wert kann entweder das Schlüsselwort `normal` oder ein {{cssxref("&lt;time&gt;")}}-Wert sein:

- `normal`
  - : Setzt die Verzögerung auf die Standardverzögerung des Browsers. Dies ist der Anfangswert.
- {{cssxref("&lt;time&gt;")}}
  - : Setzt die Verzögerung auf eine spezifische Dauer. Der Wert muss positiv sein, sonst wird die Eigenschaft ungültig.

## Beschreibung

Ein Steuerungselement wie ein {{htmlelement("a")}} oder {{htmlelement("button")}} kann als [Interest-Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) festgelegt werden, indem ihm das [`interestfor`](/de/docs/Web/HTML/Reference/Elements/a#interestfor)-Attribut zugewiesen wird. Sein Wert sollte die `id` eines Zielelements sein. Wenn diese Beziehung besteht, wird das Zielelement beeinflusst, wenn der Benutzer "Interesse zeigt" am Invoker (zum Beispiel durch Überfahren oder Fokussieren). Ein häufiges Einsatzszenario ist das Anzeigen eines Popovers bei Hover oder Fokus. Wenn der Benutzer "das Interesse verliert", stoppt der Effekt.

Wenn der Benutzer Interesse zeigt oder verliert, startet oder stoppt der zugehörige Effekt nicht sofort — der Browser fügt eine kurze Verzögerung hinzu (die je nach Browser variieren kann). Dies verhindert, dass [Vorschau-Popovers](/de/docs/Web/API/Popover_API/Using_interest_invokers#using_interest_invokers_for_creating_preview_popovers) beispielsweise sofort erscheinen, wenn der Benutzer über einen Link fährt, was auf einer Seite mit vielen Links störend sein könnte.

Die `interest-delay`-Eigenschaft ermöglicht es Ihnen, diese Verzögerungen anzupassen. Sie können `interest-delay` verwenden, um die Verzögerung festzulegen, bevor der Interesse-Effekt beginnt (festgelegt durch die Eigenschaft {{cssxref("interest-delay-start")}}) und die Verzögerung, bevor der Interesse-Effekt endet (festgelegt durch die Eigenschaft {{cssxref("interest-delay-end")}}) in einer einzigen Deklaration.

Die `interest-delay`-Eigenschaft kann einen oder zwei Werte annehmen. Diese Werte können das Schlüsselwort `normal` sein, das die Standardbrowserverzögerung festlegt, oder ein {{cssxref("&lt;time&gt;")}}-Wert, der eine benutzerdefinierte Verzögerung festlegt.
Wenn ein einzelner Wert angegeben wird, gilt er sowohl für {{cssxref("interest-delay-start")}} als auch für {{cssxref("interest-delay-end")}}. Wenn zwei Werte angegeben werden, setzt der erste Wert {{cssxref("interest-delay-start")}}, und der zweite Wert setzt {{cssxref("interest-delay-end")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellung eines grundlegenden `interest-delay`-Effekts

In diesem Beispiel zeigen wir, wie `interest-delay` das Verhalten von Interest-Invoker beeinflusst.

#### HTML

Das Markup umfasst einen {{htmlelement("button")}}, ein {{htmlelement("p")}} und ein {{htmlelement("input")}} vom Typ `checkbox`. Wir spezifizieren den `<button>` als Interest-Invoker, indem wir ihm das `interestfor`-Attribut geben, dessen Wert mit der `id` des `<p>`-Elements übereinstimmt. Dies macht den Absatz zum Zielelement. Der Absatz wird durch das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut in ein Popover umgewandelt, das ihn anfänglich versteckt.

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

Im CSS definieren wir eine `.delay`-Regel, die einen `interest-delay`-Wert von `1s 2s` auf jeden Interest-Invoker anwendet, dem die `delay`-Klasse zugewiesen ist. Wir werden diese Klasse auf den `<button>` setzen, wenn das Kontrollkästchen mit JavaScript aktiviert ist.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay: 1s 2s;
}
```

#### JavaScript

In unserem Skript erhalten wir Referenzen auf den `<button>` und das Kontrollkästchen und erstellen dann einen Event-Listener, der die `delay`-Klasse auf dem `<button>` umschaltet, wann immer sich der Wert des Kontrollkästchens ändert (wenn es aktiviert oder deaktiviert ist).

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

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel, indem Sie ihn überfahren oder fokussieren) und dann das Interesse zu verlieren, um das Popover beim Anzeigen und Verbergen zu beobachten. Standardmäßig zeigt das Popover und verbirgt sich nach einer sehr kurzen Verzögerung.

Aktivieren Sie jetzt das Kontrollkästchen und probieren Sie die gleichen Aktionen erneut. Dieses Mal sollte das Popover nach einer Verzögerung von `1s` erscheinen, wenn das Interesse gezeigt wird, und nach einer Verzögerung von `2s` verschwinden, wenn das Interesse verloren geht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay-end")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest-Invokern](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS Grundlegende Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
