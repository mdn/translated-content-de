---
title: will-change
slug: Web/CSS/will-change
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`will-change`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird. Browser können Optimierungen vorbereiten, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsgeschwindigkeit einer Seite erhöhen, indem potenziell teure Arbeiten durchgeführt werden, bevor sie tatsächlich erforderlich sind.

> [!WARNING]
> `will-change` sollte als letztes Mittel verwendet werden, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme vorherzusehen.

Die richtige Verwendung dieser Eigenschaft kann etwas knifflig sein:

- _Wenden Sie will-change nicht auf zu viele Elemente an._ Der Browser versucht bereits, alles so weit wie möglich zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verbunden sind, verbrauchen viele Ressourcen eines Computers und können bei zu häufiger Anwendung dazu führen, dass die Seite langsamer wird oder viele Ressourcen verbraucht.
- _Verwenden Sie es sparsam._ Das normale Verhalten der vom Browser vorgenommenen Optimierungen besteht darin, die Optimierungen so schnell wie möglich zu entfernen und zum normalen Zustand zurückzukehren. Aber das Hinzufügen von `will-change` direkt in einem Stylesheet impliziert, dass die anvisierten Elemente immer kurz davor stehen, sich zu ändern, und der Browser wird die Optimierungen viel länger beibehalten, als er es sonst tun würde. Deshalb ist es eine gute Praxis, `will-change` mithilfe von Skript-Code vor und nach der Änderung ein- und auszuschalten.
- _Verwenden Sie will-change nicht, um vorzeitige Optimierungen durchzuführen._ Wenn Ihre Seite gut funktioniert, fügen Sie den Elementen nicht die `will-change`-Eigenschaft hinzu, nur um ein wenig mehr Geschwindigkeit herauszuholen. `will-change` sollte als eine Art letztes Mittel verwendet werden, um bestehende Leistungsprobleme zu lösen. Es sollte nicht verwendet werden, um Leistungsprobleme vorherzusehen. Übermäßiger Gebrauch von `will-change` führt zu übermäßigem Speicherverbrauch und kann dazu führen, dass eine komplexere Darstellung ausgeführt wird, da der Browser versucht, sich auf die mögliche Änderung vorzubereiten. Dies wird zu schlechterer Leistung führen.
- _Geben Sie ihm genügend Zeit, um zu arbeiten._ Diese Eigenschaft ist als Methode für Autoren vorgesehen, um dem User-Agent mitzuteilen, welche Eigenschaften sich voraussichtlich im Voraus ändern werden. Dann kann der Browser wählen, ob erforderliche Optimierungen für die Eigenschaftsänderung im Voraus angewendet werden, bevor die Eigenschaftsänderung tatsächlich stattfindet. Es ist also wichtig, dem Browser etwas Zeit zu geben, um die Optimierungen tatsächlich durchzuführen. Finden Sie einen Weg, um zumindest leicht vorherzusagen, dass sich etwas ändern wird, und setzen Sie `will-change` dann.
- _Seien Sie sich bewusst, dass will-change das visuelle Erscheinungsbild von Elementen tatsächlich beeinflussen kann_, wenn es mit Eigenschaftswerten verwendet wird, die einen [Stacking context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) erstellen (z.B. will-change: opacity), da der Stacking-Kontext vorab erstellt wird.

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
  - : Dieses Schlüsselwort drückt keine besondere Absicht aus; der Benutzeragent sollte die ihm normalerweise eigenen Heuristiken und Optimierungen anwenden.

Das `<animatable-feature>` kann einer der folgenden Werte sein:

- `scroll-position`
  - : Gibt an, dass der Autor erwartet, die Scroll-Position des Elements in naher Zukunft zu animieren oder zu ändern.
- `contents`
  - : Gibt an, dass der Autor erwartet, etwas über den Inhalt des Elements in naher Zukunft zu animieren oder zu ändern.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Gibt an, dass der Autor erwartet, die Eigenschaft mit dem angegebenen Namen am Element in naher Zukunft zu animieren oder zu ändern. Wenn die angegebene Eigenschaft ein Shorthand ist, bedeutet dies die Erwartung für alle Longhands, auf die das Shorthand expandiert. Es kann keiner der folgenden Werte sein: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position`, oder `contents`. Die Spezifikation definiert das Verhalten für bestimmte Werte nicht, aber es ist üblich, dass `transform` ein Hinweis auf eine Compositing-Schicht ist. [Chrome unternimmt derzeit zwei Aktionen](https://github.com/operasoftware/devopera/pull/330), gegeben bestimmte CSS-Eigenschafts-Identifikatoren: eine neue Compositing-Schicht oder einen neuen {{Glossary("stacking_context", "Stacking context")}} erstellen.

### Über Stylesheet

Es kann angemessen sein, `will-change` in Ihrem Stylesheet für eine Anwendung einzuschließen, die Seitenwechsel bei Tastendrücken wie ein Album oder eine Präsentation mit Folien enthält, wo die Seiten groß und komplex sind. Dies lässt den Browser die Übergänge im Voraus vorbereiten und ermöglicht schnelle Übergänge zwischen den Seiten, sobald die Taste gedrückt wird. Aber seien Sie vorsichtig mit der Eigenschaft `will-change` direkt in Stylesheets. Es kann dazu führen, dass der Browser die Optimierung viel länger im Speicher behält, als es erforderlich ist.

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

Dies ist ein Beispiel, das zeigt, wie die `will-change` Eigenschaft durch Skripting angewendet wird, was wahrscheinlich das ist, was Sie in den meisten Fällen tun sollten.

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
