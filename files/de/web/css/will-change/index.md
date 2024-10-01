---
title: will-change
slug: Web/CSS/will-change
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`will-change`**-Eigenschaft in [CSS](/de/docs/Web/CSS) gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird. Browser können möglicherweise Optimierungen vornehmen, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell aufwendige Arbeiten durchgeführt werden, bevor sie tatsächlich erforderlich sind.

> **Warning:** `will-change` soll nur als letztes Mittel verwendet werden, um bestehende Leistungsprobleme zu bewältigen. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen.

Der richtige Gebrauch dieser Eigenschaft kann etwas knifflig sein:

- _Wenden Sie will-change nicht auf zu viele Elemente an._ Der Browser versucht bereits, alles so gut wie möglich zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verbunden sind, verbrauchen viele Ressourcen eines Geräts und können bei übermäßigem Einsatz dazu führen, dass die Seite langsamer wird oder viele Ressourcen verbraucht.
- _Verwenden Sie es sparsam._ Das normale Verhalten von Optimierungen, die der Browser vornimmt, besteht darin, die Optimierungen so schnell wie möglich zu entfernen und zum Normalzustand zurückzukehren. Aber das Hinzufügen von `will-change` direkt in einem Stylesheet impliziert, dass die anvisierten Elemente immer kurz davor sind, sich zu ändern, und der Browser wird die Optimierungen viel länger beibehalten, als es sonst der Fall wäre. Es ist also eine gute Praxis, `will-change` mittels Skriptcode ein- und auszuschalten, bevor und nachdem die Änderung eintritt.
- _Wenden Sie will-change nicht an, um vorzeitige Optimierungen durchzuführen._ Wenn Ihre Seite gut funktioniert, fügen Sie die `will-change`-Eigenschaft nicht zu Elementen hinzu, nur um ein wenig mehr Geschwindigkeit herauszuholen. `will-change` ist als eine Art letzter Ausweg gedacht, um bestehende Leistungsprobleme anzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen. Ein übermäßiger Einsatz von `will-change` führt zu übermäßigem Speicherverbrauch und sorgt dafür, dass komplexere Renderings durchgeführt werden, während der Browser versucht, sich auf mögliche Änderungen vorzubereiten. Dies führt zu einer schlechteren Leistung.
- _Geben Sie ihr genügend Zeit, um zu wirken._ Diese Eigenschaft ist als Methode gedacht, damit Autoren dem Benutzeragenten im Voraus mitteilen können, welche Eigenschaften sich wahrscheinlich ändern werden. Dann kann der Browser die nötigen vorzeitigen Optimierungen anwenden, bevor die Eigenschaftsänderung tatsächlich erfolgt. Daher ist es wichtig, dem Browser etwas Zeit zu geben, um die Optimierungen tatsächlich durchzuführen. Finden Sie einen Weg, um wenigstens ein wenig im Voraus zu erkennen, dass sich etwas ändern wird und setzen Sie `will-change` dann entsprechend.
- _Seien Sie sich bewusst, dass will-change das Aussehen von Elementen tatsächlich beeinflussen kann_, wenn es mit Eigenschaftswerten verwendet wird, die einen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) erzeugen (z.B. will-change: opacity), da der Stacking-Kontext im Voraus erstellt wird.

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
  - : Dieses Schlüsselwort drückt keine besondere Absicht aus; der Benutzeragent sollte die Heuristiken und Optimierungen anwenden, die er normalerweise durchführt.

Das `<animatable-feature>` kann einer der folgenden Werte sein:

- `scroll-position`
  - : Gibt an, dass der Autor erwartet, die Scrollposition des Elements in naher Zukunft zu animieren oder zu ändern.
- `contents`
  - : Gibt an, dass der Autor erwartet, etwas über den Inhalt des Elements in naher Zukunft zu animieren oder zu ändern.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Gibt an, dass der Autor erwartet, die Eigenschaft mit dem angegebenen Namen auf dem Element in naher Zukunft zu animieren oder zu ändern. Wenn die angegebene Eigenschaft eine Kurzform ist, bedeutet dies die Erwartung für alle Langformen, die die Kurzform expandiert. Es kann nicht einer der folgenden Werte sein: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position` oder `contents`. Die Spezifikation definiert das Verhalten eines bestimmten Wertes nicht, aber es ist üblich, dass `transform` ein Hinweis auf eine Compositing-Schicht ist. [Chrome führt derzeit zwei Aktionen aus](https://github.com/operasoftware/devopera/pull/330), basierend auf bestimmten CSS-Eigenschaftskennungen: eine neue Compositing-Schicht oder einen neuen {{Glossary("stacking_context", "Stacking-Kontext")}} zu etablieren.

### Über Stylesheet

Es kann angebracht sein, `will-change` in Ihrem Stylesheet für eine Anwendung zu verwenden, die Seitenumblätterungen bei Tastendrücken wie bei einem Album oder einer Präsentation durchführt, bei denen die Seiten groß und komplex sind. Auf diese Weise kann der Browser die Übergänge im Voraus vorbereiten und flüssige Übergänge zwischen den Seiten ermöglichen, sobald die Taste gedrückt wird. Seien Sie jedoch vorsichtig mit der `will-change`-Eigenschaft direkt in Stylesheets. Es kann dazu führen, dass der Browser die Optimierung viel länger im Speicher behält, als sie benötigt wird.

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

Dies ist ein Beispiel, das zeigt, wie die `will-change`-Eigenschaft durch Skripting angewendet wird, was in den meisten Fällen die Methode sein sollte, die Sie verwenden.

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
