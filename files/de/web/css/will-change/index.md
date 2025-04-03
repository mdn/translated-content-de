---
title: will-change
slug: Web/CSS/will-change
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`will-change`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt Browsern Hinweise darauf, wie sich ein Element voraussichtlich ändern wird. Browser können Optimierungen einrichten, bevor ein Element tatsächlich verändert wird. Solche Optimierungen können die Reaktionsfähigkeit einer Seite verbessern, indem potenziell aufwändige Arbeiten erledigt werden, bevor sie tatsächlich benötigt werden.

> **Warning:** `will-change` sollte als letztes Mittel verwendet werden, um bestehende Leistungsprobleme zu beheben. Es sollte nicht verwendet werden, um Leistungsprobleme vorherzusehen.

Der richtige Gebrauch dieser Eigenschaft kann etwas knifflig sein:

- _Setzen Sie will-change nicht bei zu vielen Elementen ein._ Der Browser bemüht sich bereits nach Kräften, alles zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verknüpft sind, nutzen viele Ressourcen eines Computers, und wenn sie übermäßig verwendet werden, können sie dazu führen, dass die Seite langsamer wird oder viele Ressourcen verbraucht.
- _Verwenden Sie es sparsam._ Das normale Verhalten für Optimierungen, die der Browser vornimmt, besteht darin, die Optimierungen so schnell wie möglich zu entfernen und zum Normalzustand zurückzukehren. Aber die direkte Verwendung von `will-change` in einem Stylesheet impliziert, dass die gezielten Elemente immer kurz davorstehen, sich zu ändern, und der Browser behält die Optimierungen viel länger bei, als er es sonst getan hätte. Es ist also eine gute Praxis, `will-change` mit Skript-Code ein- und auszuschalten, bevor und nachdem die Änderung eintritt.
- _Verwenden Sie will-change nicht, um voreilige Optimierung vorzunehmen._ Wenn Ihre Seite bereits gut funktioniert, fügen Sie das `will-change`-Attribut nicht zu Elementen hinzu, nur um ein wenig mehr Geschwindigkeit herauszuholen. `will-change` soll als letztes Mittel verwendet werden, um bestehende Leistungsprobleme zu beheben. Es sollte nicht verwendet werden, um Leistungsprobleme vorherzusehen. Exzessiver Gebrauch von `will-change` führt zu einem übermäßigen Speicherverbrauch und bewirkt eine komplexere Darstellung, da der Browser versucht, sich auf die mögliche Änderung vorzubereiten. Dies führt zu schlechterer Leistung.
- _Geben Sie ihm genügend Zeit zu arbeiten._ Diese Eigenschaft ist für Autoren gedacht, um dem User-Agent im Voraus über Eigenschaften zu informieren, die sich wahrscheinlich ändern werden. Der Browser kann dann wählen, ob er etwaige Optimierungen im Voraus für die anstehende Änderung der Eigenschaft anwenden möchte. Daher ist es wichtig, dem Browser tatsächlich etwas Zeit für die Optimierungen zu geben. Finden Sie einen Weg, um zumindest etwas im Voraus vorherzusagen, dass sich etwas ändern wird, und setzen Sie dann `will-change` ein.
- _Beachten Sie, dass will-change das visuelle Erscheinungsbild der Elemente beeinflussen kann_, wenn es mit Eigenschaftswerten verwendet wird, die einen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) erstellen (z.B. will-change: opacity), da der Stacking Context im Voraus erstellt wird.

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
  - : Dieses Schlüsselwort drückt keine besondere Absicht aus; der User-Agent sollte die Heuristiken und Optimierungen anwenden, die er normalerweise tut.

Das `<animatable-feature>` kann einer der folgenden Werte sein:

- `scroll-position`
  - : Gibt an, dass der Autor erwartet, die Scroll-Position des Elements in naher Zukunft zu animieren oder zu ändern.
- `contents`
  - : Gibt an, dass der Autor erwartet, in naher Zukunft etwas an den Inhalten des Elements zu animieren oder zu ändern.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Gibt an, dass der Autor erwartet, die Eigenschaft mit dem gegebenen Namen auf dem Element in naher Zukunft zu animieren oder zu ändern. Wenn die angegebene Eigenschaft eine Abkürzung ist, impliziert das die Erwartung für alle Langformen, auf die die Abkürzung verweist. Es kann nicht einer der folgenden Werte sein: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position` oder `contents`. Die Spezifikation definiert das Verhalten eines bestimmten Wertes nicht, aber es ist üblich, dass `transform` ein Hinweis für die Zusammenschichtung ist. [Chrome unternimmt derzeit zwei Aktionen](https://github.com/operasoftware/devopera/pull/330) bei bestimmten CSS-Eigenschaftsidentifikatoren: eine neue Zusammenschicht oder einen neuen {{Glossary("stacking_context", "Stacking Context")}} festlegen.

### Über Stylesheet

Es kann angemessen sein, `will-change` in Ihrem Stylesheet für eine Anwendung zu verwenden, die Seiten bei Tastendruck umschlägt, wie ein Album oder eine Präsentation mit Folien, bei denen die Seiten groß und komplex sind. Dies ermöglicht es dem Browser, den Übergang im Voraus vorzubereiten und einen flüssigen Übergang zwischen den Seiten zu ermöglichen, sobald die Taste gedrückt wird. Aber Vorsicht bei der direkten Verwendung der `will-change`-Eigenschaft in Stylesheets. Es kann dazu führen, dass der Browser die Optimierung viel länger in Erinnerung behält, als es notwendig wäre.

```css
.slide {
  will-change: transform;
}
```

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

{{CSSSyntax}}

## Beispiele

### Über Skript

Dies ist ein Beispiel, das zeigt, wie die `will-change`-Eigenschaft über Skripte angewendet werden kann, was in den meisten Fällen wahrscheinlich das sein sollte, was Sie tun sollten.

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
