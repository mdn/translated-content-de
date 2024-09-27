---
title: will-change
slug: Web/CSS/will-change
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`will-change`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird. Browser können Optimierungen vorbereiten, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell aufwändige Arbeiten erledigt werden, bevor sie tatsächlich benötigt werden.

> **Warning:** `will-change` sollte als letztes Mittel verwendet werden, um bestehende Leistungsprobleme zu bewältigen. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen.

Die richtige Verwendung dieser Eigenschaft kann etwas knifflig sein:

- _Verwenden Sie will-change nicht bei zu vielen Elementen._ Der Browser versucht bereits, alles so weit wie möglich zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verbunden sind, können viele Ressourcen einer Maschine beanspruchen, und bei übermäßiger Verwendung kann dies dazu führen, dass die Seite langsamer wird oder viele Ressourcen verbraucht.
- _Sparsam verwenden._ Das normale Verhalten bei Optimierungen, die der Browser vornimmt, ist, dass er die Optimierungen so schnell wie möglich entfernt und zum Normalzustand zurückkehrt. Aber das direkte Hinzufügen von `will-change` in einem Stylesheet impliziert, dass die Ziel-Elemente immer kurz vor einer Änderung stehen, und der Browser behält die Optimierungen viel länger bei, als er es sonst getan hätte. Daher ist es eine gute Praxis, `will-change` mit Script-Code ein- und auszuschalten, bevor und nachdem die Änderung erfolgt.
- _Verwenden Sie will-change nicht für voreilige Optimierungen._ Wenn Ihre Seite gut funktioniert, fügen Sie die `will-change`-Eigenschaft nicht einfach hinzu, um eine geringfügige Leistungssteigerung zu erzielen. `will-change` sollte als ein letztes Mittel verwendet werden, um bestehende Leistungsprobleme zu bewältigen, nicht um Leistungsprobleme vorwegzunehmen. Das übermäßige Verwenden von `will-change` führt zu übermäßigem Speicherverbrauch und verursacht komplexere Renderings, da der Browser versucht, sich auf die mögliche Änderung vorzubereiten. Dies führt zu schlechterer Leistung.
- _Geben Sie der Eigenschaft genügend Zeit, um zu wirken._ Diese Eigenschaft dient als eine Methode für Autoren, um dem Benutzeragenten im Voraus über voraussichtliche Änderungen von Eigenschaften zu informieren. Der Browser kann dann jegliche erforderlichen vorzeitigen Optimierungen für die Eigenschaftsänderung anwenden, bevor die tatsächliche Eigenschaftsänderung stattfindet. Daher ist es wichtig, dem Browser etwas Zeit zu geben, um die Optimierungen tatsächlich durchzuführen. Finden Sie einen Weg, um zumindest leicht vorherzusagen, dass sich etwas ändern wird, und setzen Sie dann `will-change`.
- _Beachten Sie, dass will-change tatsächlich das visuelle Erscheinungsbild von Elementen beeinflussen kann_, wenn es mit Eigenschaftswerten verwendet wird, die einen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) erzeugen (z. B. will-change: opacity), da der Stacking-Kontext vorzeitig erzeugt wird.

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
  - : Dieses Schlüsselwort drückt keine besondere Absicht aus; der Benutzeragent sollte die Heuristiken und Optimierungen anwenden, die er normalerweise verwendet.

Das `<animatable-feature>` kann einen der folgenden Werte haben:

- `scroll-position`
  - : Hinweis darauf, dass der Autor erwartet, die Scroll-Position des Elements in naher Zukunft zu animieren oder zu ändern.
- `contents`
  - : Hinweis darauf, dass der Autor erwartet, etwas am Inhalt des Elements in naher Zukunft zu animieren oder zu ändern.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Hinweis darauf, dass der Autor erwartet, die Eigenschaft mit dem angegebenen Namen am Element in naher Zukunft zu animieren oder zu ändern. Wenn die angegebene Eigenschaft eine Kurzform ist, deutet dies auf die Erwartung hin, dass alle Langformen, in die die Kurzform expandiert, betroffen sind. Es kann nicht einer der folgenden Werte sein: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position` oder `contents`. Die Spezifikation definiert nicht das Verhalten eines bestimmten Wertes, aber es ist üblich, dass `transform` als Compositing-Ebenen-Hinweis dient. [Chrome unternimmt derzeit zwei Aktionen](https://github.com/operasoftware/devopera/pull/330), die auf bestimmten CSS-Eigenschaftsidentifikatoren basieren: eine neue Compositing-Ebene oder einen neuen [Stacking-Kontext](/de/docs/Glossary/stacking_context) etablieren.

### Über Stylesheet

Es kann angebracht sein, `will-change` in Ihr Stylesheet zu integrieren, wenn Sie eine Anwendung haben, die bei Tastendruck einen Seitenwechsel wie bei einem Album oder einer Diashow-Präsentation durchführt, bei der die Seiten groß und komplex sind. Dies ermöglicht es dem Browser, den Übergang im Voraus vorzubereiten und für rasche Übergänge zwischen den Seiten zu sorgen, sobald die Taste gedrückt wird. Seien Sie vorsichtig mit der direkten Anwendung der `will-change`-Eigenschaft in Stylesheets. Es kann dazu führen, dass der Browser die Optimierung wesentlich länger im Speicher behält, als es nötig wäre.

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

Dies ist ein Beispiel, wie die `will-change`-Eigenschaft durch Skripting angewendet wird, was wahrscheinlich die richtige Vorgehensweise in den meisten Fällen ist.

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
  - Hinweis: Es gibt keine individuelle `skew`-Eigenschaft
