---
title: interest-delay-start
slug: Web/CSS/Reference/Properties/interest-delay-start
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{SeeCompatTable}}

Die **`interest-delay-start`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Verzögerung zwischen dem Anzeigen von Interesse durch den Benutzer an einem [interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers)-Element und dem Auslösen des [`interest`](/de/docs/Web/API/HTMLElement/interest_event) Ereignisses fest.

Die Eigenschaften `interest-delay-start` und {{cssxref("interest-delay-end")}} können beide mit der Abkürzung {{cssxref("interest-delay")}} festgelegt werden.

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
  - : Setzt die Verzögerung auf die Standardverzögerung des Browsers. Dies ist der Anfangswert.
- {{cssxref("&lt;time>")}}
  - : Legt die Verzögerung auf eine bestimmte Dauer fest. Der Wert muss positiv sein, andernfalls wird die Eigenschaft ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen eines grundlegenden `interest-delay-start` Effekts

In diesem Beispiel zeigen wir, wie sich `interest-delay-start` auf das Verhalten von Interest Invokers auswirkt.

#### HTML

Das Markup umfasst ein {{htmlelement("button")}}, ein {{htmlelement("p")}} und ein {{htmlelement("input")}} vom Typ `checkbox`. Wir definieren das `<button>` als Interest Invoker, indem wir ihm das `interestfor` Attribut geben, dessen Wert der `id` des `<p>`-Elements entspricht. Dies macht den Absatz zum Ziel-Element. Der Absatz wird durch das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut zu einem Popover, das anfangs versteckt ist.

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

Im CSS spezifizieren wir eine Regel mit einem `.delay` Selektor, der einen `interest-delay-start` Wert von `2s` auf jeden Interest Invoker anwendet, auf den die `delay` Klasse gesetzt ist. Wir werden dies auf das `<button>` setzen, wenn das Kontrollkästchen mit JavaScript aktiviert ist.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-start: 2s;
}
```

#### JavaScript

In unserem Skript holen wir Referenzen zum `<button>` und zum Kontrollkästchen und erstellen dann einen Event Listener, der die `delay` Klasse am `<button>` umschaltet, wann immer sich der Wert des Kontrollkästchens ändert (wenn es aktiviert oder deaktiviert wird).

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

Versuchen Sie Interesse an dem Button zu zeigen (zum Beispiel durch Hovern oder Fokussieren) und verlieren Sie dann das Interesse, um das Anzeigen und Verstecken des Popovers zu beobachten. Standardmäßig zeigt und versteckt sich das Popover nach einer sehr kurzen Verzögerung.

Aktivieren Sie jetzt das Kontrollkästchen und versuchen Sie die gleichen Aktionen erneut. Dieses Mal sollte das Popover nach einer Verzögerung von `2s` erscheinen, wenn Interesse gezeigt wird. Die Verzögerung, nachdem das Interesse verloren ist, sollte unverändert bleiben.

### Entfernen von `interest-delay-start`, nachdem Interesse gezeigt wurde

In diesem Beispiel zeigen wir, wie `interest-delay-start` von mehreren Interest Invoker Elementen entfernt wird, nachdem an einem von ihnen Interesse gezeigt wurde.

Dies ist eine nützliche Technik. Ein Popover erscheinen zu lassen, sobald Interesse an einem Invoker gezeigt wird, würde eine ablenkende und störende Benutzererfahrung schaffen, weshalb Browser standardmäßig eine kleine Verzögerung hinzufügen (siehe die [`interest-delay` Beschreibung](/de/docs/Web/CSS/Reference/Properties/interest-delay#description) für mehr Details). Sobald Benutzer jedoch Interesse an einem Invoker gezeigt haben, ist es sinnvoll, ihnen zu erlauben, sich schnell ohne Verzögerung zwischen anderen Invokern zu bewegen.

#### HTML

Das Markup enthält drei `<button>`-Elemente, die in einem Absatz mit der Klasse `container` umschlossen sind, und einen weiteren Absatz, der mithilfe des `popover` Attributs in ein Popover verwandelt wurde. Alle drei Buttons sind als Interest Invokers eingerichtet und beziehen sich über das `interestfor` Attribut auf das Popover als ihr Ziel.

```html live-sample___interest-delay-remove-on-interest
<p class="container">
  <button interestfor="mypopover">Button 1</button>
  <button interestfor="mypopover">Button 2</button>
  <button interestfor="mypopover">Button 3</button>
</p>
<p id="mypopover" popover>Hover tooltip</p>
```

#### CSS

Im CSS setzen wir einen `interest-delay-start` Wert von `1s` für die Buttons und positionieren das Popover unterhalb des Buttons, auf den Interesse gezeigt wird, indem wir ihm einen {{cssxref("position-area")}} Wert von `bottom` geben (siehe [Popover Verankerungspositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Informationen).

```css live-sample___interest-delay-remove-on-interest
button {
  interest-delay-start: 1s;
}

#mypopover {
  position-area: bottom;
}
```

Schließlich kombinieren wir die {{cssxref(":interest-source")}} Pseudoklasse mit der {{cssxref(":has()")}} Pseudoklasse, um `interest-delay-start: 0s` auf alle Buttons im Absatz anzuwenden, aber nur, wenn der Absatz einen Button enthält, auf dem Interesse gezeigt wurde (das heißt, er wird durch `button:interest-source` übereinstimmend).

```css live-sample___interest-delay-remove-on-interest
.container:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

#### Ergebnis

Dies wird wie folgt gerendert:

{{embedlivesample("interest-delay-remove-on-interest", "100%", "100")}}

Versuchen Sie, Interesse an einem beliebigen Button zu zeigen und bemerken Sie, wie das Popover ohne Verzögerung erscheint, wenn Sie dann sofort Interesse an einem anderen Button zeigen. Wenn Sie das Interesse an den Buttons beenden und dann erneut beginnen, kehrt die anfängliche Verzögerung zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interest-delay-end")}}, {{cssxref("interest-delay")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS grundlegendes Benutzerinterface](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
