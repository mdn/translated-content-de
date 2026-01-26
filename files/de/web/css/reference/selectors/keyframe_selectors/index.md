---
title: Keyframe-Selektoren
slug: Web/CSS/Reference/Selectors/Keyframe_selectors
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

CSS **Keyframe-Selektoren** identifizieren spezielle Punkte auf einer Animationstimeline, an denen Keyframe-Stile angewendet werden sollen. Diese Selektoren werden ausschließlich innerhalb der {{cssxref("@keyframes")}} at-rule verwendet.

## Syntax

```css
/* Keywords */
from {
}
to {
}

/* <percentage> values */
0% {
}
50% {
}
100% {
}

/* With <timeline-range-name> */
entry 20% {
}
exit 80% {
}

/* Selector lists */
0%,
50%,
100% {
}
from,
to {
}
```

### Werte

- `from`
  - : Repräsentiert den Beginn der Animationssequenz. Es entspricht `0%`.
- `to`
  - : Repräsentiert das Ende der Animationssequenz. Es entspricht `100%`.
- `<percentage>`
  - : Ein {{cssxref("percentage")}} zwischen `0%` und `100%`, inklusive, das den gesamten Fortschritt durch die Animationssequenz repräsentiert.
- `<timeline-range-name> <percentage>`
  - : Ein {{cssxref("timeline-range-name")}} vor einer `<percentage>`-Komponente repräsentiert einen spezifischen Fortschrittspunkt innerhalb des benannten Zeitbereichs.

## Beschreibung

Ein `<keyframe-selector>` kann das `to`- oder `from`-Schlüsselwort sein, ein Prozentsatz zwischen `0%` und `100%`, inklusive, oder eine durch Kommas getrennte Liste dieser Schlüsselwörter und/oder Prozentsätze. Wenn dem Prozentsatz ein {{cssxref("timeline-range-name")}} vorangestellt ist, definiert er einen Zeitbereich, wenn die Animationstimeline eine Fortschrittstimeline ist; andernfalls wird der Selektor ignoriert. Wenn eine durch Kommas getrennte `<keyframe-selector>`-Liste verwendet wird, gilt der darauf folgende Stilblock für alle angegebenen Fortschrittspunkte.

### Gültige Prozentwerte

Prozentwerte müssen das Prozentzeichen (`%`) enthalten. Werte ohne Einheit (wie `0` und `20`) und Werte außerhalb des Bereichs von `0%` bis `100%` (wie `-10%` oder `110%`) sind ungültig und führen dazu, dass der Keyframe-Block ignoriert wird.

### Kaskade, Reihenfolge, Präzedenz und Wichtigkeit

Durch Animation `@keyframes` gesetzte Eigenschaftswerte sind wichtiger als alle normalen Stile, was bedeutet, dass unabhängig von der [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) ein animierter Wert Werte überschreibt, die nicht das {{cssxref("important", "!important")}}-Flag gesetzt haben. Nur wichtige Eigenschaftswerte und Werte, die derzeit übergangsweise geändert werden, haben Vorrang vor animierten Eigenschaftswerten.

Alle Keyframe-Selektoren haben die gleiche Spezifität. Die Reihenfolge der Keyframe-Selektoren innerhalb der Selektorliste spielt keine Rolle. Die Reihenfolge der Quelle ist nur wichtig, wenn ein doppelter Keyframe-Selektor einen anderen Wert für eine bereits deklarierte Eigenschaft am selben Selektor angibt.

Das `!important`-Flag ist innerhalb einer `@keyframes`-Definition nicht gültig.

### Ausgelassene Start- und Endselektoren

Wenn kein `0%` (oder `from`) oder `100%` (oder `to`) Keyframe angegeben ist, verwendet der Browser die berechneten Stile des Elements für diese Zustände, was es der Animation ermöglicht, nahtlos von oder zu den nicht animierten Eigenschaftswerten des Elements zu übergehen. Mit anderen Worten, wenn eine Eigenschaft in einem Keyframe der Mitte der Timeline angegeben wird, ohne dass sie in einem Start- oder End-Keyframe-Selektorblock gesetzt wurde, wird die Eigenschaft von ihrem ursprünglichen Wert zu diesem Wert animiert.

Zum Beispiel, wenn ein Element eine `rote` Hintergrundfarbe hat und die folgende Animation angewendet wird:

```css
@keyframes changeToPurple {
  25%,
  75% {
    background-color: purple;
  }
}
```

Die Hintergrundfarbe wird am Anfang der Animation `rot` sein, wechselt ein Viertel der Animation zu `lila`, bleibt für die Hälfte der Animation `lila` und wechselt dann wieder zu `rot`, der ursprünglichen Hintergrundfarbe, ab `75%` der [Animationstimeline](/de/docs/Web/CSS/Reference/Properties/animation-timeline). Siehe das Beispiel, das [`to` und `from` auslässt](#omitting_to_and_from).

#### Ausgelassene Eigenschaftsdeklarationen

Beim Erstellen einer `@keyframes`-Animation zur Animation mehrerer Eigenschaften müssen nicht alle Eigenschaften in allen Keyframe-Selektorblöcken deklariert werden.

Zum Beispiel, im [Basisgebrauch](#basisgebrauch)-Beispiel wird die `opacity` in allen Keyframe-Selektorblöcken deklariert, aber nur Start- und Endwerte `transform` werden eingestellt. In diesem Fall wird das Element bis zur Hälfte der Animations-Timeline vollständig undurchsichtig sein, aber der Punkt, an dem das Element um `25vw` nach rechts verändert wird, hängt von der {{cssxref("animation-timing-function")}} ab — es wird `50%` im Fall von `linear` sein, aber nicht, wenn `ease-in` verwendet wird (was in diesem Fall der Fall ist).

### Kaskadenreihenfolge

Wenn mehrere Keyframe-Blöcke denselben `<keyframe-selector>` verwenden, [kaskadieren](/de/docs/Web/CSS/Guides/Cascade/Introduction) sie. Das bedeutet, dass, wenn dieselbe Eigenschaft in mehreren Blöcken mit demselben Selektor definiert ist, die letzte Deklaration in der Regel Vorrang hat. Wenn sie unterschiedliche Eigenschaften definieren, werden sie zusammengeführt.

Diese Animation wiederholt unveränderte Werte in mehreren Selektorblöcken, was nicht notwendig ist:

```css
@keyframes uglyAnimation {
  0% {
    transform: translateX(0);
    opacity: 0;
    background-color: purple;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
    background-color: purple;
  }
  75% {
    transform: translateX(0);
    opacity: 0;
    background-color: green;
  }
  100% {
    transform: translateX(50vw);
    opacity: 0;
    background-color: purple;
  }
}
```

Wir können die Kaskade verwenden, um Werte in einem Selektorblock zu gruppieren und sie dann nach Bedarf zu überschreiben. Das Folgende ist äquivalent zu der vorherigen Animation, aber mit weniger CSS-Zeilen:

```css
@keyframes uglyAnimation {
  0%,
  50%,
  75%,
  100% {
    transform: translateX(0);
    opacity: 0;
    background-color: purple;
  }
  50% {
    opacity: 1;
  }
  75% {
    background-color: green;
  }
  100% {
    transform: translateX(50vw);
  }
}
```

Die Reihenfolge ist wichtig! Wir können die Kaskade nicht ignorieren. Wenn wir das Obige falsch umordnen, verlieren wir die Übergänge. Das Folgende macht das Element `lila`, vollständig undurchsichtig, und setzt alle Transformationen zurück, während die Animation angewendet wird. Die Eigenschaftswerte werden angewendet und bleiben statisch, weil die letzte Deklaration die Deklarationen in den vorherigen Keyframe-Selektorblöcken überschreibt.

```css
@keyframes makeItPurpleOnly {
  0% {
    background-color: yellow;
  }
  50% {
    opacity: 0;
  }
  75% {
    background-color: green;
  }
  100% {
    transform: translateX(50vw);
  }
  0%,
  50%,
  75%,
  100% {
    transform: translateX(0);
    opacity: 1;
    background-color: purple;
  }
}
```

### Mit benannten Zeitbereichen

Ursprünglich definiert im [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations), hat das [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul den Keyframe-Selektor erweitert, um die Fortschrittszeitbereichsinformationen direkt in der Definition der `@keyframes`-Animation einzuschließen. Ein {{cssxref("timeline-range-name")}} kann der `<percentage>` Komponente des Selektors vorangestellt werden, um Keyframes an bestimmten Fortschrittspunkten innerhalb des benannten Zeitbereichs anzuhängen. Der `<timeline-range-name>` repräsentiert den ausgewählten vordefinierten benannten Zeitbereich, und das `<percentage>` danach repräsentiert den Prozentfortschritt zwischen dem Anfang und dem Ende dieses benannten Zeitbereichs.

```css
@keyframes in-and-out {
  entry 0% {
    opacity: 0;
    transform: translateX(100%);
  }
  entry 100% {
    opacity: 1;
    transform: translateX(0);
  }
  exit 0% {
    opacity: 1;
    transform: translateX(0);
  }
  exit 100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}
```

Wenn die Animationstimeline des Elements keinen entsprechenden benannten Ansichts-Zeitbereich hat, werden alle Keyframes, die an Punkte auf diesem benannten Zeitbereich angehängt sind, ignoriert. Diese Befestigungspunkte können außerhalb des aktiven Zeitintervalls der Animation liegen. Wenn dies der Fall ist, werden die automatische `from` (`0%`) und `to` (`100%`) Keyframes nur für Eigenschaften generiert, die keine Keyframes bei oder vor `0%` oder bei oder nach `100%` haben.

## Beispiele

### Basisgebrauch

Dieses Beispiel demonstriert die Verwendung von Schlüsselwörtern und Prozentsätzen durch das Erstellen einer Keyframe-Animation, die diese Keyframe-Selektortypen verwendet.

#### HTML

Wir fügen ein Element ein, das wir animieren werden.

```html
<div>I am animated</div>
```

#### CSS

Wir stellen unserem Kasten grundlegende Stile zur Verfügung:

```css
div {
  background-color: rebeccapurple;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
}
```

Wir erstellen eine {{cssxref("@keyframes")}}-Animation, die Stile auf die `from`- und `to`-Schlüsselwörter sowie auf einen Prozentwert in der Mitte anwendet. Wir animieren die {{cssxref("opacity")}} und die {{cssxref("transform")}} Eigenschaften.

```css
@keyframes slide-and-fade {
  from {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translateX(50vw);
    opacity: 0;
  }
}
```

Wir wenden unsere Animation auf das Element an, indem wir die {{cssxref("animation")}} Kurzform-Eigenschaft verwenden:

```css
div {
  animation: slide-and-fade 4s ease-in infinite;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic usage","100%","200")}}

### Selektorlisten

Mit demselben HTML und grundlegender Formatierung wie im vorherigen Beispiel veranschaulicht dieses Beispiel die Verwendung von kommagetrennten Selektoren, um Keyframes zu gruppieren und dieselben Stile an mehreren Punkten in einer Animation anzuwenden.

```html hidden
<div>I am animated</div>
```

#### CSS

Wir erstellen eine `pulse`-Animation, die die Größe unseres Elements ändert.

```css
div {
  animation: pulse 4s linear infinite;
}

@keyframes pulse {
  0%,
  75% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  25%,
  100% {
    transform: scale(0.8);
  }
}
```

```css hidden
div {
  background-color: rebeccapurple;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
}
```

#### Ergebnis

{{EmbedLiveSample("Selector lists and initial values","100%","125")}}

Durch die Verwendung einer Selektorliste mit mehreren kommagetrennten Keyframe-Selektoren "pausiert" die Animation vom `25%` Keyframe, bis sie den `75%` Keyframe erreicht.

### Auslassen von `to` und `from`

Dieses Beispiel zeigt, wie die animierten Eigenschaften zu und von den ursprünglichen, nicht animierten Eigenschaftswerten animiert werden, wenn die `to` oder `from` Keyframe-Selektoren in einer `@keyframes`-Animationsdefinition nicht enthalten sind.

#### HTML

Wir fügen einige Elemente ein. Wir werden alle von ihnen animieren.

```html
<div>I am animated</div>
<div>I am animated</div>
<div>I am animated</div>
```

#### CSS

Wir stellen unseren Elementen grundlegende Stile zur Verfügung und geben jedem eine andere {{cssxref("outline-width")}} und {{cssxref("background-color")}}. Wir werden diese beiden Eigenschaften animieren.

```css
div {
  background-color: magenta;
  outline: 10px dashed black;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
  margin: 35px auto;

  animation: changes 5s linear infinite;
}
div:first-of-type {
  background-color: blue;
  outline-width: 0;
}
div:last-of-type {
  background-color: green;
  outline-width: 20px;
}
```

Wir erstellen eine Animation, die die `background-color` und `outline-width` eines Elements bei `30%` und `40%` Keyframes setzt.

```css
@keyframes changes {
  30%, 40% {
    background-color: black;
    outline-width: 15px;
}
```

#### Ergebnis

{{EmbedLiveSample("Omitting to and from","100%","420")}}

Die `background-color` und `outline-width` Eigenschaften werden in `30%` und `40%` Keyframes gesetzt. Infolgedessen animieren sich die `background-color` Werte der Elemente von `grün`, `magenta` und `blau` zu `schwarz`, während ihre `outline-width` Werte von `0px`, `10px` und `20px` zu `15px` animieren. Sie bleiben für ein Zehntel der Animation in diesem Zustand — zwischen `30%` und `40%` Dauer. Nach `40%` Dauer animieren diese Eigenschaften zurück zu ihren ursprünglichen Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@keyframes")}}
- {{cssxref("animation")}}
- {{cssxref("animation-range")}}
- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
