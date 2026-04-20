---
title: CSS-Eigenschaft `interest-delay-start`
short-title: interest-delay-start
slug: Web/CSS/Reference/Properties/interest-delay-start
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`interest-delay-start`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Verzögerung fest, die zwischen dem Zeitpunkt des Interesses des Benutzers an einem [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) Element und dem Auslösen des [`interest`](/de/docs/Web/API/HTMLElement/interest_event) Ereignisses vergeht.

Sowohl die Eigenschaften `interest-delay-start` als auch {{cssxref("interest-delay-end")}} können mit der Abkürzung {{cssxref("interest-delay")}} festgelegt werden.

## Syntax

```css
/* Keyword or custom delay */
interest-delay-start: normal;
interest-delay-start: 2s;
interest-delay-start: 250ms;

/* Global values */
interest-delay-start: inherit;
interest-delay-start: initial;
interest-delay-start: revert;
interest-delay-start: revert-layer;
interest-delay-start: unset;
```

### Werte

- `normal`
  - : Setzt die Verzögerung auf die Standardverzögerung des Browsers. Dies ist der anfängliche Wert.
- {{cssxref("&lt;time>")}}
  - : Setzt die Verzögerung auf eine bestimmte Dauer. Der Wert muss positiv sein, andernfalls wird die Eigenschaft ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen eines grundlegenden `interest-delay-start` Effekts

In diesem Beispiel zeigen wir, wie `interest-delay-start` das Verhalten eines Interest Invokers beeinflusst.

#### HTML

Das Markup enthält ein {{htmlelement("button")}}, ein {{htmlelement("p")}} und ein {{htmlelement("input")}} vom Typ `checkbox`. Wir spezifizieren das `<button>` als Interest Invoker, indem wir ihm das Attribut `interestfor` geben, dessen Wert mit der `id` des `<p>` Elements übereinstimmt. Dadurch wird der Absatz zum Ziel-Element. Der Absatz wird durch das Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) in ein Popover verwandelt, das ihn zunächst verbirgt.

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">Button</button>
<p id="mypopover" popover>Hover tooltip</p>
<form>
  <input type="checkbox" id="apply-delay" />
  <label for="apply-delay">
    Apply an <code>interest-delay-start</code> of <code>2s</code>
  </label>
</form>
```

#### CSS

Im CSS spezifizieren wir eine Regel mit einem `.delay` Selektor, der einen `interest-delay-start` Wert von `2s` auf jeden Interest Invoker anwendet, auf den die Klasse `delay` gesetzt ist. Wir werden dies mit dem `<button>` tun, wenn das Kontrollkästchen mit JavaScript markiert ist.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-start: 2s;
}
```

#### JavaScript

In unserem Skript erhalten wir Referenzen zum `<button>` und zum Kontrollkästchen und erstellen einen Ereignis-Listener, der die Klasse `delay` auf dem `<button>` umschaltet, wann immer sich der Wert des Kontrollkästchens ändert (wenn es markiert oder demarkiert wird).

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

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Hovern oder Fokusieren) und dann das Interesse zu verlieren, um zu beobachten, wie das Popover angezeigt und ausgeblendet wird. Standardmäßig zeigt und versteckt sich das Popover nach einer sehr kurzen Verzögerung.

Jetzt markieren Sie das Kontrollkästchen und versuchen dieselben Aktionen erneut. Dieses Mal sollte das Popover nach einer Verzögerung von `2s` erscheinen, wenn Interesse gezeigt wird. Die Verzögerung, nachdem das Interesse verloren geht, bleibt unverändert.

### Entfernen von `interest-delay-start`, nachdem Interesse gezeigt wurde

In diesem Beispiel zeigen wir, wie man `interest-delay-start` nachträglich von mehreren Interest Invoker Elementen entfernt, nachdem Interesse an einem von ihnen gezeigt wurde.

Dies ist eine nützliche Technik. Wenn ein Popover sofort erscheint, sobald an irgendeinem Invoker Interesse gezeigt wird, könnte das eine ablenkende und störende Benutzererfahrung schaffen, weshalb Browser standardmäßig eine kleine Verzögerung hinzufügen (siehe die Beschreibung von [`interest-delay`](/de/docs/Web/CSS/Reference/Properties/interest-delay#description) für weitere Details). Sobald Benutzer jedoch Interesse an einem Invoker gezeigt haben, ist es sinnvoll, ihnen das schnelle Wechseln zwischen anderen Invokern ohne Verzögerung zu ermöglichen.

#### HTML

Das Markup umfasst drei `<button>` Elemente, die in einem Absatz mit der Klasse `container` eingeschlossen sind, und einen weiteren Absatz, der mit dem `popover` Attribut in ein Popover umgewandelt wurde. Alle drei Buttons sind als Interest Invokers eingerichtet und verweisen mithilfe des `interestfor` Attributs auf das Popover als ihr Ziel.

```html live-sample___interest-delay-remove-on-interest
<p class="container">
  <button interestfor="mypopover">Button 1</button>
  <button interestfor="mypopover">Button 2</button>
  <button interestfor="mypopover">Button 3</button>
</p>
<p id="mypopover" popover>Hover tooltip</p>
```

#### CSS

Im CSS wenden wir einen `interest-delay-start` Wert von `1s` auf die Buttons an und positionieren das Popover unterhalb des Buttons, auf den Interesse gezeigt wird, indem wir ihm einen {{cssxref("position-area")}} Wert von `bottom` geben (siehe [Popover-Verankerungspositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Informationen).

```css live-sample___interest-delay-remove-on-interest
button {
  interest-delay-start: 1s;
}

#mypopover {
  position-area: bottom;
}
```

Schließlich kombinieren wir die {{cssxref(":interest-source")}} Pseudo-Klasse mit der {{cssxref(":has()")}} Pseudo-Klasse, um `interest-delay-start: 0s` auf alle Buttons innerhalb des Absatzes anzuwenden, aber nur, wenn der Absatz einen Button enthält, an dem Interesse gezeigt wurde (d.h. durch `button:interest-source` übereinstimmt).

```css live-sample___interest-delay-remove-on-interest
.container:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

#### Ergebnis

Dies wird wie folgt dargestellt:

{{embedlivesample("interest-delay-remove-on-interest", "100%", "100")}}

Versuchen Sie, Interesse an einem Button zu zeigen und bemerken Sie, wie das Popover, sobald Sie dann sofort Interesse an einem anderen Button zeigen, ohne Verzögerung erscheint. Wenn Sie das Interesse an den Buttons beenden und dann erneut beginnen, kehrt die initiale Verzögerung zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interest-delay-end")}}, {{cssxref("interest-delay")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS grundlegendes Benutzeroberflächenmodul](/de/docs/Web/CSS/Guides/Basic_user_interface)
