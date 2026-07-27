---
title: "`interest-delay-start` CSS-Eigenschaft"
short-title: interest-delay-start
slug: Web/CSS/Reference/Properties/interest-delay-start
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{SeeCompatTable}}

Die **`interest-delay-start`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Verzögerung fest zwischen dem Zeitpunkt, an dem der Benutzer Interesse an einem [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers)-Element zeigt, und dem Auslösen des [`interest`](/de/docs/Web/API/HTMLElement/interest_event)-Ereignisses.

Die Eigenschaften `interest-delay-start` und {{cssxref("interest-delay-end")}} können beide mit dem {{cssxref("interest-delay")}}-Kurzschreibweise festgelegt werden.

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

Diese Eigenschaft wird entweder als ein `<time>`-Wert oder das Schlüsselwort `normal` angegeben:

- `normal`
  - : Setzt die Verzögerung auf die Standardverzögerung des Browsers. Dies ist der Anfangswert.
- {{cssxref("&lt;time>")}}
  - : Setzt die Verzögerung auf eine bestimmte Dauer. Der Wert muss positiv sein, andernfalls wird die Eigenschaft ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen eines grundlegenden `interest-delay-start`-Effekts

In diesem Beispiel demonstrieren wir, wie `interest-delay-start` das Verhalten von Interest Invokern beeinflusst.

#### HTML

Das Markup enthält einen {{htmlelement("button")}}, ein {{htmlelement("p")}} und ein {{htmlelement("input")}} vom Typ `checkbox`. Wir spezifizieren das `<button>` als einen Interest Invoker, indem wir ihm das Attribut `interestfor` geben, dessen Wert mit der `id` des `<p>`-Elements übereinstimmt. Dies macht den Absatz zum Ziel-Element. Der Absatz wird in ein Popover umgewandelt, indem ihm das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut gegeben wird, welches es zunächst verbirgt.

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

Im CSS spezifizieren wir eine Regel mit einem `.delay`-Selektor, der einen `interest-delay-start`-Wert von `2s` auf jeden Interest Invoker anwendet, auf dem die `delay`-Klasse gesetzt ist. Wir werden diese mit JavaScript auf das `<button>` setzen, wenn das Kontrollkästchen aktiviert ist.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-start: 2s;
}
```

#### JavaScript

In unserem Skript holen wir Referenzen zum `<button>` und zum Kontrollkästchen und erstellen dann einen Event-Listener, der die `delay`-Klasse auf dem `<button>` umschaltet, wann immer sich der Wert des Kontrollkästchens ändert (wenn es aktiviert oder deaktiviert wird).

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

Versuchen Sie, Interesse an dem Button zu zeigen (zum Beispiel durch Hovern oder Fokussieren) und dann das Interesse zu verlieren, um das Anzeigen und Verbergen des Popovers zu beobachten. Standardmäßig zeigt und verbirgt sich das Popover nach einer sehr kurzen Verzögerung.

Aktivieren Sie nun das Kontrollkästchen und versuchen Sie die gleichen Aktionen erneut. Diesmal sollte das Popover nach einer Verzögerung von `2s` erscheinen, wenn Interesse gezeigt wird. Die Verzögerung nach dem Verlust des Interesses sollte unbeeinflusst sein.

### Entfernen von `interest-delay-start`, nachdem Interesse gezeigt wurde

In diesem Beispiel zeigen wir, wie man den `interest-delay-start` von mehreren Interest Invoker-Elementen entfernt, nachdem Interesse an einem von ihnen gezeigt wurde.

Dies ist eine nützliche Technik. Ein Popover würde einen ablenkenden und störenden Benutzererlebnis erzeugen, wenn es sofort erscheint, sobald Interesse an einem Invoker gezeigt wird, weshalb Browser standardmäßig eine kleine Verzögerung hinzufügen (siehe die Beschreibung von [`interest-delay`](/de/docs/Web/CSS/Reference/Properties/interest-delay#description) für weitere Details). Sobald jedoch Nutzer Interesse an einem Invoker gezeigt haben, ist es praktisch, ihnen zu erlauben, schnell zwischen anderen Invokern ohne Verzögerung zu wechseln.

#### HTML

Das Markup enthält drei `<button>`-Elemente, die in einen Absatz mit einer `container`-Klasse eingebettet sind, sowie einen weiteren Absatz, der mit dem `popover`-Attribut in ein Popover umgewandelt wurde. Alle drei Buttons sind als Interest Invoker eingerichtet und verweisen mit dem `interestfor`-Attribut auf das Popover als ihr Ziel.

```html live-sample___interest-delay-remove-on-interest
<p class="container">
  <button interestfor="mypopover">Button 1</button>
  <button interestfor="mypopover">Button 2</button>
  <button interestfor="mypopover">Button 3</button>
</p>
<p id="mypopover" popover>Hover tooltip</p>
```

#### CSS

Im CSS wenden wir einen `interest-delay-start`-Wert von `1s` auf die Buttons an und positionieren das Popover unterhalb des Buttons, auf dem Interesse gezeigt wird, indem wir ihm einen {{cssxref("position-area")}}-Wert von `bottom` geben (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Informationen).

```css live-sample___interest-delay-remove-on-interest
button {
  interest-delay-start: 1s;
}

#mypopover {
  position-area: bottom;
}
```

Schließlich kombinieren wir die {{cssxref(":interest-source")}}-Pseudoklasse mit der {{cssxref(":has()")}}-Pseudoklasse, um `interest-delay-start: 0s` auf alle Buttons innerhalb des Absatzes anzuwenden, jedoch nur, wenn der Absatz einen Button enthält, auf dem Interesse gezeigt wurde (das heißt, abgeglichen durch `button:interest-source`).

```css live-sample___interest-delay-remove-on-interest
.container:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

#### Ergebnis

Dies wird wie folgt gerendert:

{{embedlivesample("interest-delay-remove-on-interest", "100%", "100")}}

Versuchen Sie, Interesse an einem Button zu zeigen und bemerken Sie, wie das Popover ohne Verzögerung erscheint, wenn Sie dann sofort Interesse an einem anderen Button zeigen. Wenn Sie aufhören, Interesse an den Buttons zu zeigen und dann erneut beginnen, kehrt die anfängliche Verzögerung zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interest-delay-end")}}, {{cssxref("interest-delay")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest Invokern](/de/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS-Grundlagen der Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
