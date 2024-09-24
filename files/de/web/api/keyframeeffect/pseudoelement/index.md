---
title: "KeyframeEffect: pseudoElement-Eigenschaft"
short-title: pseudoElement
slug: Web/API/KeyframeEffect/pseudoElement
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ APIRef("Web Animations") }}

Die **`pseudoElement`**-Eigenschaft der {{domxref("KeyframeEffect")}}-Schnittstelle ist ein String, der das Pseudo-Element darstellt, das animiert wird. Sie kann `null` sein für Animationen, die kein Pseudo-Element anvisieren. Sie fungiert sowohl als Getter als auch als Setter, mit Ausnahme von durch CSS generierten Animationen und Übergängen.

> [!NOTE]
> Wird die Eigenschaft auf die veraltete Ein-Doppelpunkt-Syntax von {{cssxref("::before", ":before")}}, {{cssxref("::after", ":after")}}, {{cssxref("::first-letter", ":first-letter")}} oder {{cssxref("::first-line", ":first-line")}} gesetzt, wird der String in seine moderne Doppel-Doppelpunkt-Version umgewandelt ({{cssxref("::before")}}, {{cssxref("::after")}}, {{cssxref("::first-letter")}} und {{cssxref("::first-line")}}).

## Wert

Ein String oder `null`.

## Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wird, diese Eigenschaft auf ein Element oder ein ungültiges Pseudo-Element (entweder nicht existent oder falsch geschrieben) zu setzen. Die Eigenschaft bleibt dann unverändert.

## Beispiele

```html
<div id="text">Some text</div>
<pre id="log"></pre>
```

```css
#text::after {
  content: "👹";
  display: inline-block; /* Notwendig, da die `transform`-Eigenschaft nicht auf Inline-Elemente angewendet wird */
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

// Erstellen Sie den Keyframe und starten Sie die Animation
const animation = text.animate([{ transform: "rotate(360deg)" }], {
  duration: 3000,
  iterations: Infinity,
  pseudoElement: "::after",
});

// Abrufen des Wertes von KeyframeEffect.pseudoElement
function logPseudoElement() {
  const keyframeEffect = animation.effect;
  log.textContent = `Wert des animierten pseudoElement: ${keyframeEffect.pseudoElement}`;
  requestAnimationFrame(logPseudoElement);
}

// Alle 6 Sekunden das animierte Pseudo-Element wechseln
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
- {{domxref("KeyframeEffect")}}-Schnittstelle
- {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}-Konstruktor
- {{domxref("KeyframeEffect.target", "target")}}-Eigenschaft
