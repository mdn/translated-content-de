---
title: will-change
slug: Web/CSS/Reference/Properties/will-change
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`will-change`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird. Browser können Optimierungen vorbereiten, bevor ein Element tatsächlich geändert wird. Solche Optimierungen können die Reaktionsfähigkeit einer Seite verbessern, indem möglicherweise kostspielige Arbeiten durchgeführt werden, bevor sie tatsächlich benötigt werden.

> [!WARNING] > `will-change` sollte als letztes Mittel verwendet werden, um bestehende Leistungsprobleme zu beheben. Es sollte nicht verwendet werden, um Leistungsprobleme zu antizipieren.

Der richtige Umgang mit dieser Eigenschaft kann etwas knifflig sein:

- _Verwenden Sie will-change nicht für zu viele Elemente._ Der Browser versucht bereits, alles so gut wie möglich zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verbunden sind, können viele Ressourcen eines Computers beanspruchen, und wenn sie übermäßig genutzt werden, können sie die Seite verlangsamen oder viele Ressourcen verbrauchen.
- _Verwenden Sie es sparsam._ Das normale Verhalten für Optimierungen, die der Browser vornimmt, ist, die Optimierungen so schnell wie möglich zu entfernen und zum Normalzustand zurückzukehren. Aber das Hinzufügen von `will-change` direkt in einem Stylesheet impliziert, dass die Ziel-Elemente immer kurz vor einer Änderung stehen und der Browser die Optimierungen viel länger beibehält, als er es sonst tun würde. Daher ist es eine gute Praxis, `will-change` mit Skriptcode vor und nach der Änderung ein- und auszuschalten.
- _Verwenden Sie will-change nicht, um vorzeitige Optimierungen durchzuführen._ Wenn Ihre Seite gut funktioniert, fügen Sie die `will-change`-Eigenschaft nicht zu Elementen hinzu, nur um ein wenig mehr Geschwindigkeit herauszuholen. `will-change` soll als letztes Mittel verwendet werden, um bestehende Leistungsprobleme zu bewältigen, nicht um Leistungsprobleme zu antizipieren. Übermäßiger Einsatz von `will-change` führt zu übermäßigem Speicherverbrauch und komplexerer Rendering-Vorgänge, da der Browser versucht, sich auf die mögliche Änderung vorzubereiten. Dies führt zu schlechterer Leistung.
- _Geben Sie ihm ausreichend Zeit, um zu wirken._ Diese Eigenschaft ist als Methode gedacht, um dem User-Agent mitzuteilen, welche Eigenschaften wahrscheinlich im Voraus geändert werden. Der Browser kann dann entscheiden, ob er Optimierungen im Voraus für die erforderliche Eigenschaftsänderung anwenden möchte, bevor die Eigenschaftsänderung tatsächlich eintritt. Daher ist es wichtig, dem Browser etwas Zeit zu geben, um die Optimierungen tatsächlich durchzuführen. Finden Sie einen Weg, um zumindest ein wenig im Voraus vorherzusagen, dass sich etwas ändern wird, und setzen Sie dann `will-change`.
- _Seien Sie sich bewusst, dass will-change das visuelle Erscheinungsbild von Elementen tatsächlich beeinflussen kann_, wenn es mit Eigenschaftswerten verwendet wird, die einen [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) erzeugen (z. B. will-change: opacity), da der Stacking-Kontext im Voraus erstellt wird.

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

Das `<animatable-feature>` kann einen der folgenden Werte haben:

- `scroll-position`
  - : Gibt an, dass der Autor erwartet, dass die Scroll-Position des Elements in naher Zukunft animiert oder geändert wird.
- `contents`
  - : Gibt an, dass der Autor erwartet, dass etwas an den Inhalten des Elements in naher Zukunft animiert oder geändert wird.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Gibt an, dass der Autor erwartet, dass die Eigenschaft mit dem angegebenen Namen am Element in naher Zukunft animiert oder geändert wird. Wenn die angegebene Eigenschaft eine Kurzhand-Eigenschaft ist, impliziert dies die Erwartung für alle Langhand-Eigenschaften, auf die die Kurzhand ausgedehnt wird. Sie kann nicht einen der folgenden Werte haben: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position` oder `contents`. Die Spezifikation definiert das Verhalten des jeweiligen Werts nicht, aber es ist üblich, dass `transform` ein Hinweis auf eine Compositing-Ebene ist. [Chrome führt derzeit zwei Maßnahmen aus](https://github.com/operasoftware/devopera/pull/330), basierend auf bestimmten CSS-Eigentums-Identifikatoren: eine neue Compositing-Ebene erstellen oder einen neuen {{Glossary("stacking_context", "Stacking-Kontext")}} etablieren.

### Über Stylesheet

Es kann angemessen sein, `will-change` in Ihrem Stylesheet für eine Anwendung zu verwenden, die Seitenumblätterungen bei Tastendruck wie ein Album oder eine Präsentation mit Folien durchführt, bei denen die Seiten groß und komplex sind. Dies ermöglicht es dem Browser, die Übergänge im Voraus vorzubereiten und sanfte Übergänge zwischen den Seiten zu gewährleisten, sobald die Taste gedrückt wird. Aber verwenden Sie die `will-change`-Eigenschaft direkt in Stylesheets mit Vorsicht. Sie kann dazu führen, dass der Browser die Optimierung viel länger im Speicher hält, als es nötig ist.

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

Dies ist ein Beispiel, das zeigt, wie die `will-change`-Eigenschaft durch Skripting angewendet wird, was wahrscheinlich das ist, was Sie in den meisten Fällen tun sollten.

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
