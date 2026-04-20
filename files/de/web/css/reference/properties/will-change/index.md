---
title: "`will-change` CSS property"
short-title: will-change
slug: Web/CSS/Reference/Properties/will-change
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`will-change`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird. Browser können Optimierungen vorbereiten, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem möglicherweise aufwändige Arbeiten erledigt werden, bevor sie tatsächlich erforderlich sind.

> [!WARNING]
> `will-change` sollte als letztes Mittel eingesetzt werden, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen.

Der richtige Gebrauch dieser Eigenschaft kann etwas knifflig sein:

- _Wenden Sie will-change nicht auf zu viele Elemente an._ Der Browser versucht bereits, alles bestmöglich zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verbunden sind, verbrauchen viele Ressourcen des Rechners und können bei übermäßigem Gebrauch dazu führen, dass die Seite langsamer wird oder viele Ressourcen verbraucht.
- _Setzen Sie es sparsam ein._ Das normale Verhalten der Browser-Optimierungen ist, diese zu entfernen, sobald es möglich ist, und zum normalen Zustand zurückzukehren. Wenn jedoch `will-change` direkt in einem Stylesheet hinzugefügt wird, impliziert dies, dass die Ziel-Elemente kurz vor einer Änderung stehen, und der Browser behält die Optimierungen wesentlich länger bei, als er es sonst tun würde. Es ist daher eine gute Praxis, `will-change` mithilfe von Skriptcode ein- und auszuschalten, bevor und nachdem die Änderung stattfindet.
- _Wenden Sie will-change nicht auf Elemente an, um eine voreilige Optimierung durchzuführen._ Wenn Ihre Seite gut funktioniert, fügen Sie der `will-change`-Eigenschaft keine Elemente hinzu, nur um ein wenig mehr Geschwindigkeit herauszuholen. `will-change` ist dafür gedacht, als letztes Mittel eingesetzt zu werden, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen. Übermäßige Nutzung von `will-change` führt zu einem übermäßigen Speicherverbrauch und verursacht eine komplexere Darstellung, da der Browser versucht, sich auf die mögliche Änderung vorzubereiten. Dies wird zu einer schlechteren Leistung führen.
- _Geben Sie genügend Zeit, damit es wirken kann._ Diese Eigenschaft soll den Benutzeragenten über Eigenschaften informieren, die sich wahrscheinlich im Voraus ändern werden. Dann kann der Browser optionale Optimierungen für die bevorstehende Eigenschaftsänderung anwenden, bevor die Änderung tatsächlich stattfindet. Es ist also wichtig, dem Browser etwas Zeit zu geben, um die Optimierungen tatsächlich durchzuführen. Finden Sie einen Weg, um zumindest leicht vorherzusagen, dass sich etwas ändern wird, und setzen Sie dann `will-change`.
- _Beachten Sie, dass will-change tatsächlich das visuelle Erscheinungsbild von Elementen beeinflussen kann_, wenn es mit Eigenschaftswerten verwendet wird, die einen [stacking context](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) erstellen (z.B. will-change: opacity), da der stacking context im Voraus erstellt wird.

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
  - : Dieses Schlüsselwort drückt keine besondere Absicht aus; der Benutzeragent sollte alle normalen Heuristiken und Optimierungen anwenden.

Das `<animatable-feature>` kann einer der folgenden Werte sein:

- `scroll-position`
  - : Gibt an, dass der Autor plant, die Scroll-Position des Elements in naher Zukunft zu animieren oder zu ändern.
- `contents`
  - : Gibt an, dass der Autor plant, etwas an den Inhalten des Elements zu animieren oder zu ändern.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Gibt an, dass der Autor plant, die Eigenschaft mit dem angegebenen Namen auf dem Element in naher Zukunft zu animieren oder zu ändern. Wenn die angegebene Eigenschaft eine Kurzform ist, bedeutet dies die Erwartung, dass alle Langformen, in die die Kurzform expandiert wird, entsprechen. Sie kann nicht einer der folgenden Werte sein: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position` oder `contents`. Die Spezifikation definiert das Verhalten eines bestimmten Wertes nicht, aber es ist üblich, dass `transform` ein Hinweis auf eine Kompositionsebene ist. [Chrome unternimmt derzeit zwei Aktionen](https://github.com/operasoftware/devopera/pull/330), gegeben spezifische CSS-Eigenschaftsbezeichner: Erstellen einer neuen Kompositionsebene oder eines neuen {{Glossary("stacking_context", "stacking context")}}.

### Über Stylesheet

Es kann angemessen sein, `will-change` in Ihrem Stylesheet für eine Anwendung zu verwenden, die Seitenumblätterungen bei Tastendruck durchführt, wie ein Album oder eine Präsentation mit Folien, bei der die Seiten groß und komplex sind. Dadurch kann der Browser die Übergänge im Voraus vorbereiten und flüssige Übergänge zwischen den Seiten ermöglichen, sobald die Taste gedrückt wird. Aber seien Sie vorsichtig mit der `will-change`-Eigenschaft direkt in Stylesheets. Es kann dazu führen, dass der Browser die Optimierung viel länger im Speicher behält, als sie benötigt wird.

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

Dies ist ein Beispiel dafür, wie Sie die `will-change`-Eigenschaft durch Skripting anwenden, was wahrscheinlich das ist, was Sie in den meisten Fällen tun sollten.

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
- Einzelne Transformations-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - Hinweis: Es gibt keine einzelne `skew`-Eigenschaft
