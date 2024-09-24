---
title: will-change
slug: Web/CSS/will-change
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`will-change`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich verändern wird. Browser können so Optimierungen vornehmen, bevor ein Element tatsächlich verändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell aufwendige Arbeiten durchgeführt werden, bevor sie tatsächlich benötigt werden.

> **Warning:** `will-change` soll als letzter Ausweg verwendet werden, um bestehende Leistungsprobleme zu beheben. Es sollte nicht verwendet werden, um Leistungsprobleme im Voraus zu antizipieren.

Die richtige Verwendung dieser Eigenschaft kann etwas knifflig sein:

- _Wenden Sie will-change nicht auf zu viele Elemente an._ Der Browser versucht bereits, alles so gut wie möglich zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verbunden sind, können viele Ressourcen einer Maschine nutzen, und eine übermäßige Verwendung kann dazu führen, dass die Seite verlangsamt wird oder viele Ressourcen verbraucht.
- _Sparsam verwenden._ Das normale Verhalten für Optimierungen, die der Browser vornimmt, ist, die Optimierung so schnell wie möglich zu entfernen und zum Normalzustand zurückzukehren. Das direkte Hinzufügen von `will-change` in ein Stylesheet impliziert, dass die betroffenen Elemente jederzeit kurz vor einer Veränderung stehen, und der Browser wird die Optimierungen viel länger beibehalten, als er es normalerweise tun würde. Es ist daher eine gute Praxis, `will-change` mittels Skript vor und nach der Veränderung ein- und auszuschalten.
- _Wenden Sie will-change nicht an, um voreilige Optimierungen durchzuführen._ Wenn Ihre Seite gut funktioniert, fügen Sie die `will-change` Eigenschaft nicht einfach hinzu, um ein wenig mehr Geschwindigkeit herauszuholen. `will-change` soll als letztes Mittel bei der Behebung von bestehenden Leistungsproblemen verwendet werden. Sie sollte nicht zur Antizipation von Leistungsproblemen eingesetzt werden. Eine übermäßige Nutzung von `will-change` führt zu übermäßigem Speicherverbrauch und kann zu komplexeren Rendering-Vorgängen führen, da der Browser versucht, sich auf mögliche Veränderungen vorzubereiten. Dies führt zu schlechterer Leistung.
- _Geben Sie ausreichend Zeit, um zu arbeiten._ Diese Eigenschaft ist als Methode gedacht, um dem User-Agent Informationen darüber zu geben, welche Eigenschaften sich voraussichtlich bald ändern werden. Der Browser kann dann wählen, ob er vorab Optimierungen anwendet, die für die Eigenschaftsänderung erforderlich sind, bevor die Änderung tatsächlich eintritt. Es ist also wichtig, dem Browser etwas Zeit für die Optimierungen zu geben. Finden Sie einen Weg, um zumindest leicht vorherzusagen, dass sich etwas ändern wird, und setzen Sie dann `will-change`.
- _Seien Sie sich bewusst, dass will-change tatsächlich das visuelle Erscheinungsbild von Elementen beeinflussen kann_, wenn es mit Eigenschaftswerten verwendet wird, die einen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) erstellen (z.B. will-change: opacity), da der Stacking-Kontext im Voraus erstellt wird.

## Syntax

```css
/* Schlüsselwort Werte */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform; /* Beispiel für <custom-ident> */
will-change: opacity; /* Beispiel für <custom-ident> */
will-change: left, top; /* Beispiel für zwei <animatable-feature> */

/* Globale Werte */
will-change: inherit;
will-change: initial;
will-change: revert;
will-change: revert-layer;
will-change: unset;
```

### Werte

- `auto`
  - : Dieses Schlüsselwort drückt keine bestimmte Absicht aus; der User-Agent sollte die Heuristiken und Optimierungen anwenden, die er normalerweise tut.

Das `<animatable-feature>` kann einer der folgenden Werte sein:

- `scroll-position`
  - : Gibt an, dass der Autor erwartet, die Scroll-Position des Elements in naher Zukunft zu animieren oder zu ändern.
- `contents`
  - : Gibt an, dass der Autor erwartet, etwas an den Inhalten des Elements in naher Zukunft zu animieren oder zu ändern.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Gibt an, dass der Autor erwartet, die Eigenschaft mit dem angegebenen Namen im Element in naher Zukunft zu animieren oder zu ändern. Wenn die angegebene Eigenschaft eine Kurzform ist, zeigt sie die Erwartung für alle Langformen an, zu denen die Kurzform expandiert. Sie kann keiner der folgenden Werte sein: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position` oder `contents`. Die Spezifikation definiert das Verhalten eines bestimmten Werts nicht, aber es ist üblich, dass `transform` ein Hinweis auf eine Kompositionsebene ist. [Chrome ergreift derzeit zwei Maßnahmen](https://github.com/operasoftware/devopera/pull/330), gegeben bestimmte CSS-Eigenschaftskennungen: Eine neue Kompositionsebene oder einen neuen {{Glossary("stacking context")}} zu etablieren.

### Über Stylesheet

Es kann angemessen sein, `will-change` in Ihr Stylesheet für eine Anwendung aufzunehmen, die Seitenumschläge bei Tastendruck wie ein Album oder eine Diapräsentation durchführt, bei der die Seiten groß und komplex sind. Dies lässt den Browser die Übergänge im Voraus vorbereiten und ermöglicht schnelle Übergänge zwischen den Seiten, sobald die Taste gedrückt wird. Seien Sie jedoch vorsichtig bei der direkten Verwendung der `will-change` Eigenschaft in Stylesheets. Es kann dazu führen, dass der Browser die Optimierung viel länger im Speicher behält als nötig.

```css
.slide {
  will-change: transform;
}
```

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Über Skript

Dies ist ein Beispiel, das zeigt, wie die `will-change` Eigenschaft mittels Skripting angewendet werden kann, was in den meisten Fällen wahrscheinlich das Richtige ist, was Sie tun sollten.

```js
const el = document.getElementById("element");

// Setzt will-change, wenn das Element gehovt wird
el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  // Die optimierbaren Eigenschaften, die sich im
  // Keyframes-Block der Animation ändern werden
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- Individuelle Transformations-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - Hinweis: Es gibt keine individuelle `skew` Eigenschaft
