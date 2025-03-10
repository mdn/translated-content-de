---
title: will-change
slug: Web/CSS/will-change
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

Die **`will-change`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird. Browser können Optimierungen vorbereiten, bevor ein Element tatsächlich geändert wird. Solche Optimierungen können die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell aufwendige Arbeiten erledigt werden, bevor sie tatsächlich benötigt werden.

> **Warning:** `will-change` ist als letztes Mittel gedacht, um bestehende Leistungsprobleme zu beheben. Es sollte nicht verwendet werden, um Leistungsprobleme im Voraus zu erwarten.

Der richtige Einsatz dieser Eigenschaft kann etwas knifflig sein:

- _Wenden Sie will-change nicht auf zu viele Elemente an._ Der Browser versucht bereits so gut wie möglich, alles zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verbunden sind, verbrauchen viele Ressourcen eines Rechners, und wenn sie übermäßig eingesetzt werden, können sie dazu führen, dass die Seite langsamer wird oder viele Ressourcen verbraucht.
- _Verwenden Sie es sparsam._ Das normale Verhalten bei Optimierungen, die der Browser vornimmt, besteht darin, die Optimierungen so schnell wie möglich zu entfernen und zum Normalzustand zurückzukehren. Das direkte Hinzufügen von `will-change` in ein Stylesheet impliziert, dass die Ziel-Elemente immer kurz davor sind, sich zu ändern, und der Browser behält die Optimierungen viel länger bei, als er es sonst getan hätte. Daher ist es eine gute Praxis, `will-change` vor und nach dem Eintreten der Änderung über Skriptcode ein- und auszuschalten.
- _Verwenden Sie will-change nicht zur vorzeitigen Optimierung._ Wenn Ihre Seite gut läuft, fügen Sie die `will-change` Eigenschaft nicht hinzu, um nur ein wenig mehr Geschwindigkeit herauszuholen. `will-change` ist als letztes Mittel gedacht, um bestehende Leistungsprobleme zu beheben. Es sollte nicht verwendet werden, um Leistungsprobleme im Voraus zu erwarten. Der übermäßige Einsatz von `will-change` führt zu übermäßigem Speicherverbrauch und zu einer komplexeren Darstellung, da der Browser versucht, sich auf die mögliche Änderung vorzubereiten. Dies führt zu schlechterer Leistung.
- _Geben Sie ihm genügend Zeit zu arbeiten._ Diese Eigenschaft ist als Methode gedacht, um den Browser über Eigenschaften zu informieren, die sich wahrscheinlich in naher Zukunft ändern werden. Dann kann der Browser alle erforderlichen Vorab-Optimierungen für die Eigenschaftsänderung anwenden, bevor die Eigenschaftsänderung tatsächlich stattfindet. Es ist also wichtig, dem Browser etwas Zeit zu geben, um die Optimierungen tatsächlich durchzuführen. Finden Sie einen Weg, um zumindest etwas vorherzusagen, dass sich etwas ändern wird, und setzen Sie `will-change` dann.
- _Seien Sie sich bewusst, dass will-change das visuelle Erscheinungsbild von Elementen tatsächlich beeinflussen kann_, wenn es mit Eigenschaftswerten verwendet wird, die einen [Stapeldarstellungskontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) erzeugen (z.B. will-change: opacity), da der Stapeldarstellungskontext im Voraus erzeugt wird.

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
  - : Dieses Schlüsselwort drückt keine bestimmte Absicht aus; der Benutzeragent sollte alle Heuristiken und Optimierungen anwenden, die er normalerweise tut.

Das `<animatable-feature>` kann einer der folgenden Werte sein:

- `scroll-position`
  - : Zeigt an, dass der Autor erwartet, die Scroll-Position des Elements in naher Zukunft zu animieren oder zu ändern.
- `contents`
  - : Zeigt an, dass der Autor erwartet, etwas über den Inhalt des Elements in naher Zukunft zu animieren oder zu ändern.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Zeigt an, dass der Autor erwartet, die Eigenschaft mit dem gegebenen Namen am Element in naher Zukunft zu animieren oder zu ändern. Wenn die angegebene Eigenschaft ein Kurznamen ist, zeigt dies die Erwartung für alle Langformen an, die der Kurznamen erweitert. Es kann nicht einer der folgenden Werte sein: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position` oder `contents`. Die Spezifikation definiert das Verhalten eines bestimmten Wertes nicht, aber es ist üblich, dass `transform` ein Hinweis auf eine Kompositionsebene ist. [Chrome führt derzeit zwei Aktionen durch](https://github.com/operasoftware/devopera/pull/330), je nach bestimmten CSS-Eigenschaftsidentifikatoren: Eine neue Kompositionsebene oder einen neuen {{Glossary("stacking_context", "Stapeldarstellungskontext")}} zu etablieren.

### Über Stylesheet

Es kann angebracht sein, `will-change` in Ihrem Stylesheet für eine Anwendung einzuschließen, die Seitendrehungen bei Tastendruck durchführt, wie ein Album oder eine Folienpräsentation, bei der die Seiten groß und komplex sind. Dies ermöglicht dem Browser, den Übergang im Voraus vorzubereiten und bei Tastendruck nahtlose Übergänge zwischen den Seiten zu ermöglichen. Seien Sie jedoch vorsichtig beim direkten Einsatz der `will-change` Eigenschaft in Stylesheets. Sie kann dazu führen, dass der Browser die Optimierung viel länger im Speicher behält, als benötigt wird.

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

Dies ist ein Beispiel, wie man die `will-change` Eigenschaft über Skripting anwendet, was wahrscheinlich das ist, was Sie in den meisten Fällen tun sollten.

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
- Individuelle Transformations-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - Hinweis: Es gibt keine individuelle `skew` Eigenschaft
