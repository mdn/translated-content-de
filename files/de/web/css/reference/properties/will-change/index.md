---
title: will-change
slug: Web/CSS/Reference/Properties/will-change
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`will-change`**-Eigenschaft von [CSS](/de/docs/Web/CSS) gibt den Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird. Browser können Optimierungen durchführen, bevor sich ein Element tatsächlich ändert. Solche Optimierungen können die Reaktionsfähigkeit einer Seite erhöhen, indem sie potenziell aufwendige Operationen im Voraus erledigen.

> [!WARNING]
> `will-change` sollte als letztes Mittel verwendet werden, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme im Voraus zu antizipieren.

Die ordnungsgemäße Verwendung dieser Eigenschaft kann etwas knifflig sein:

- _Wenden Sie will-change nicht auf zu viele Elemente an._ Der Browser versucht bereits, alles so gut wie möglich zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verbunden sind, verbrauchen viele Ressourcen eines Geräts, und bei übermäßigem Gebrauch können sie dazu führen, dass die Seite langsamer wird oder viele Ressourcen verbraucht.
- _Verwenden Sie es sparsam._ Das normale Verhalten für Optimierungen, die der Browser vornimmt, besteht darin, die Optimierungen so schnell wie möglich zu entfernen und zum Normalzustand zurückzukehren. Aber das Hinzufügen von `will-change` direkt in ein Stylesheet impliziert, dass die angezielten Elemente immer kurz davor stehen, sich zu ändern, und der Browser wird die Optimierungen viel länger beibehalten, als er es sonst getan hätte. Es ist daher eine gute Praxis, `will-change` mit Skriptcode ein- und auszuschalten, bevor und nachdem die Änderung stattfindet.
- _Verwenden Sie will-change nicht zur Durchführung von vorzeitigen Optimierungen._ Wenn Ihre Seite gut läuft, fügen Sie `will-change` nicht einfach hinzu, um ein wenig mehr Geschwindigkeit herauszuholen. `will-change` sollte als ein Mittel der letzten Instanz verwendet werden, um mit bestehenden Leistungsproblemen fertig zu werden. Es sollte nicht dazu benutzt werden, Leistungsprobleme im Voraus zu antizipieren. Übermäßige Verwendung von `will-change` kann zu übermäßigem Speicherverbrauch führen und es wird eine komplexere Darstellung nötig sein, da der Browser versucht, sich auf die mögliche Änderung vorzubereiten. Dies führt zu schlechterer Leistung.
- _Geben Sie ihm genügend Zeit, um zu wirken._ Diese Eigenschaft soll Autoren als Methode dienen, dem User-Agent im Voraus Informationen über Eigenschaften zu geben, die sich wahrscheinlich ändern werden. Der Browser kann dann die erforderlichen Optimierungen vor der tatsächlichen Änderung der Eigenschaft durchführen. Daher ist es wichtig, dem Browser etwas Zeit zu geben, die Optimierungen tatsächlich durchzuführen. Finden Sie einen Weg, um zumindest leicht vorherzusagen, dass sich etwas ändern wird, und setzen Sie dann `will-change`.
- _Seien Sie sich bewusst, dass will-change tatsächlich das visuelle Erscheinungsbild von Elementen beeinflussen kann_, wenn es mit Eigenschaftswerten verwendet wird, die einen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) schaffen (z. B. will-change: opacity), da der Stacking-Kontext im Voraus erstellt wird.

## Syntax

```css
/* Keyword values */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform; /* Example of <custom-ident> */
will-change: opacity; /* Example of <custom-ident> */
will-change: left, top; /* Example of two <animatable-feature> */

/* Global values */
will-change: inherit;
will-change: initial;
will-change: revert;
will-change: revert-layer;
will-change: unset;
```

### Werte

- `auto`
  - : Dieses Schlüsselwort drückt keine besondere Absicht aus; der User-Agent sollte die gewohnten Heuristiken und Optimierungen anwenden.

Das `<animatable-feature>` kann einen der folgenden Werte haben:

- `scroll-position`
  - : Gibt an, dass der Autor erwartet, die Scroll-Position des Elements in naher Zukunft zu animieren oder zu ändern.
- `contents`
  - : Gibt an, dass der Autor erwartet, dass die Inhalte des Elements in naher Zukunft animiert oder geändert werden.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Gibt an, dass der Autor erwartet, dass die Eigenschaft mit dem angegebenen Namen am Element in naher Zukunft animiert oder geändert wird. Wenn die angegebene Eigenschaft ein Shorthand ist, bezieht sich dies auf alle Einzelheiten, die das Shorthand abdeckt. Es kann nicht einer der folgenden Werte sein: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position` oder `contents`. Die Spezifikation definiert nicht das Verhalten eines bestimmten Wertes, aber üblicherweise wird `transform` als Hinweis auf eine Compositing-Ebene verwendet. [Chrome führt derzeit zwei Aktionen aus](https://github.com/operasoftware/devopera/pull/330), wenn bestimmte CSS-Eigenschaftskennungen verwendet werden: eine neue Compositing-Ebene oder einen neuen {{Glossary("stacking_context", "Stacking-Kontext")}}.

### Über ein Stylesheet

Es kann angemessen sein, `will-change` in Ihr Stylesheet für eine Anwendung einzubinden, die Seitenwechsel bei Tastendruck durchführt, wie z. B. ein Album oder eine Präsentation, bei der die Seiten groß und komplex sind. Dies ermöglicht dem Browser, den Übergang im Voraus vorzubereiten und einen reibungslosen Übergang zwischen den Seiten zu ermöglichen, sobald die Taste gedrückt wird. Aber seien Sie vorsichtig mit der Nutzung der `will-change`-Eigenschaft direkt in Stylesheets. Es kann dazu führen, dass der Browser die Optimierung länger im Speicher behält, als es notwendig ist.

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

### Über ein Skript

Dies ist ein Beispiel, das zeigt, wie die `will-change`-Eigenschaft durch Skripting angewendet wird, was wahrscheinlich die Methode ist, die Sie in den meisten Fällen anwenden sollten.

```js
const el = document.getElementById("element");

// Set will-change when the element is hovered
el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  // The optimizable properties that are going to change
  // in the animation's keyframes block
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
- Einzelne Transform-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - Hinweis: Es gibt keine einzelne `skew`-Eigenschaft
