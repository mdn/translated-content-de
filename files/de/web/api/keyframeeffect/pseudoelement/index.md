---
title: "KeyframeEffect: pseudoElement-Eigenschaft"
short-title: pseudoElement
slug: Web/API/KeyframeEffect/pseudoElement
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ APIRef("Web Animations") }}

Die **`pseudoElement`**-Eigenschaft des [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Interfaces ist ein Zeichenfolgenwert, der das animierte Pseudo-Element darstellt. Es kann `null` sein für Animationen, die kein Pseudo-Element anvisieren. Diese Eigenschaft fungiert sowohl als Getter als auch als Setter, außer bei Animationen und Übergängen, die durch CSS erzeugt werden.

> [!NOTE]
> Wird die veraltete Syntax mit einfachem Doppelpunkt wie {{cssxref("::before", ":before")}}, {{cssxref("::after", ":after")}}, {{cssxref("::first-letter", ":first-letter")}} oder {{cssxref("::first-line", ":first-line")}} verwendet, wird die Zeichenfolge in ihre moderne Version mit doppeltem Doppelpunkt umgewandelt ({{cssxref("::before")}}, {{cssxref("::after")}}, {{cssxref("::first-letter")}} und {{cssxref("::first-line")}}, entsprechend).

## Wert

Eine Zeichenfolge oder `null`.

## Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, diese Eigenschaft auf ein Element oder ein ungültiges Pseudo-Element (entweder nicht existent oder falsch geschrieben) zu setzen. In diesem Fall bleibt die Eigenschaft unverändert.

## Beispiele

```html
<div id="text">Some text</div>
<pre id="log"></pre>
```

```css
#text::after {
  content: "👹";
  display: inline-block; /* Needed as the `transform` property does not apply to inline elements */
  font-size: 2rem;
}
#text::before {
  content: "🤠";
  display: inline-block;
  font-size: 2rem;
}
```

```js
const log = document.getElementById("log");
const text = document.getElementById("text");

// Create the keyframe and launch the animation
const animation = text.animate([{ transform: "rotate(360deg)" }], {
  duration: 3000,
  iterations: Infinity,
  pseudoElement: "::after",
});

// Get the value of KeyframeEffect.pseudoElement
function logPseudoElement() {
  const keyframeEffect = animation.effect;
  log.textContent = `Value of pseudoElement animated: ${keyframeEffect.pseudoElement}`;
  requestAnimationFrame(logPseudoElement);
}

// Every 6 seconds, switch the pseudo-element animated
function switchPseudoElement() {
  const keyframeEffect = animation.effect;
  keyframeEffect.pseudoElement =
    keyframeEffect.pseudoElement === "::after" ? "::before" : "::after";
  setTimeout(switchPseudoElement, 6000);
}

switchPseudoElement();
logPseudoElement();
```

{{EmbedLiveSample("Examples", "100", "90")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Interface
- [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect)-Konstruktor
- [`target`](/de/docs/Web/API/KeyframeEffect/target)-Eigenschaft
