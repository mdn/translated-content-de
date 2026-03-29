---
title: Keyframe-Selektoren
slug: Web/CSS/Reference/Selectors/Keyframe_selectors
l10n:
  sourceCommit: f94b7a0b06a0e32df81ec8197720d306fe50a4a0
---

CSS-**Keyframe-Selektoren** identifizieren spezifische Punkte in einem Animation-Timeline, an denen Keyframe-Stile angewendet werden sollten. Diese Selektoren werden ausschließlich innerhalb der {{cssxref("@keyframes")}}-Regel verwendet.

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
  - : Repräsentiert den Beginn der Animationssequenz. Es ist gleichbedeutend mit `0%`.
- `to`
  - : Repräsentiert das Ende der Animationssequenz. Es ist gleichbedeutend mit `100%`.
- `<percentage>`
  - : Ein {{cssxref("percentage")}} zwischen `0%` und `100%`, einschließlich, das den gesamten Fortschritt durch die Animationssequenz darstellt.
- `<timeline-range-name> <percentage>`
  - : Ein {{cssxref("timeline-range-name")}}, das einem `<percentage>`-Komponenten vorausgeht, repräsentiert einen spezifischen Fortschrittspunkt innerhalb des benannten Timeline-Bereichs.

## Beschreibung

Ein `<keyframe-selector>` kann das Schlüsselwort `to` oder `from`, ein Prozentsatz zwischen `0%` und `100%`, einschließlich, oder eine kommagetrennte Liste dieser Schlüsselwörter und/oder Prozentsätze sein. Wenn der Prozentsatz von einem {{cssxref("timeline-range-name")}} vorangestellt wird, definiert er einen Timeline-Bereich, falls die Animation-Timeline eine Fortschrittsbetrachtungs-Timeline ist; andernfalls wird der Selektor ignoriert. Wenn eine kommagetrennte `<keyframe-selector>`-Liste verwendet wird, gilt der darauf folgende Stilblock für alle angegebenen Fortschrittspunkte.

### Gültige Prozentwerte

Prozentwerte müssen das Prozentzeichen (`%`) beinhalten. Einheitliche Werte (wie `0` und `20`) und Werte außerhalb des Bereichs von `0%` bis `100%` (wie `-10%` oder `110%`) sind ungültig und führen dazu, dass der Keyframe-Block ignoriert wird.

### Kaskade, Reihenfolge, Vorrang und Wichtigkeit

Eigenschaftswerte, die durch Animation-`@keyframes` gesetzt werden, sind wichtiger als alle normalen Stile, was bedeutet, dass unabhängig von der [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) ein animierter Wert Werte überschreibt, die kein {{cssxref("important", "!important")}}-Flag gesetzt haben. Nur wichtige Eigenschaftswerte und Werte, die derzeit übergehen, haben Vorrang vor animierten Eigenschaftswerten.

Alle Keyframe-Selektoren haben die gleiche Spezifität. Die Reihenfolge der Keyframe-Selektoren innerhalb der Selektorliste spielt keine Rolle. Die Quellreihenfolge ist nur wichtig, wenn ein doppelter Keyframe-Selektor einen anderen Wert für eine bereits deklarierte Eigenschaft auf demselben Selektor deklariert.

Das `!important`-Flag ist innerhalb einer `@keyframes`-Definition nicht gültig.

### Weggelassene Start- und Endselektoren

Wenn keine `0%` (oder `from`) oder `100%` (oder `to`) Keyframe angegeben ist, verwendet der Browser die berechneten Stile des Elements für diese Zustände, um eine flüssige Transition von oder zu den nicht animierten Eigenschaftswerten des Elements zu ermöglichen. Anders ausgedrückt: Wenn eine Eigenschaft in einem mittleren Timeline-Keyframe angegeben ist, ohne dass sie innerhalb eines Start- oder Endselektorblocks gesetzt ist, wird die Eigenschaft von ihrem ursprünglichen Wert zu diesem Wert animiert.

Zum Beispiel, wenn ein Element eine `rote` Hintergrundfarbe hat und die folgende Animation angewendet wird:

```css
@keyframes changeToPurple {
  25%,
  75% {
    background-color: purple;
  }
}
```

Die Hintergrundfarbe wird zu Beginn der Animation `rot` sein, wechselt ein Viertel der Animation zu `lila`, bleibt für die Hälfte der Animation `lila` und wechselt ab `75%` des [Animation-Timelines](/de/docs/Web/CSS/Reference/Properties/animation-timeline) zurück zu `rot`, der ursprünglichen Hintergrundfarbe. Siehe das Beispiel, das [das Weglassen von `to` und `from`](#omitting_to_and_from) zeigt.

#### Weggelassene Eigenschaftsdeklarationen

Beim Erstellen einer `@keyframes`-Animation zur Animation mehrerer Eigenschaften müssen nicht alle Eigenschaften in allen Keyframe-Selektor-Blöcken deklariert werden.

Im [Grundlagenbeispiel](#grundlegende_nutzung), ist `opacity` in allen Keyframe-Selektor-Blöcken deklariert, aber nur Start- und End-`transform`-Werte sind gesetzt. In diesem Fall wird das Element in der Mitte der Animation vollständig undurchsichtig sein, aber der Punkt, an dem das Element um `25vw` nach rechts transformiert wird, hängt von der {{cssxref("animation-timing-function")}} ab — es wird `50%` im Fall von `linear` sein, aber nicht, wenn `ease-in` verwendet wird (was in diesem Fall der Fall ist).

### Kaskadenfolge

Wenn mehrere Keyframe-Blöcke denselben `<keyframe-selector>` verwenden, [kaskadieren sie](/de/docs/Web/CSS/Guides/Cascade/Introduction). Das bedeutet, dass, wenn dieselbe Eigenschaft in mehreren Blöcken mit demselben Selektor definiert ist, die letzte Deklaration in der Regel Vorrang hat. Wenn sie unterschiedliche Eigenschaften definieren, werden sie zusammengeführt.

Diese Animation wiederholt unveränderte Werte in mehreren Selektor-Blöcken, was nicht notwendig ist:

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

Wir können die Kaskade nutzen, um Werte in einem Selektorblock zu gruppieren und dann nach Bedarf zu überschreiben. Das folgende ist gleichwertig zur vorherigen Animation, jedoch mit weniger Zeilen CSS:

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

Die Reihenfolge ist wichtig! Wir können die Kaskade nicht ignorieren. Wenn wir das Obige falsch neu ordnen, verlieren wir die Übergänge. Das Folgende macht das Element lila, vollständig undurchsichtig und setzt alle Transformationen zurück, solange die Animation angewendet wird. Die Eigenschaftswerte werden angewendet und bleiben statisch, weil die letzte Deklaration die Deklarationen in den vorherigen Keyframe-Selektor-Blöcken überschreibt.

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

### Mit benannten Timeline-Bereichen

Ursprünglich im [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations) definiert, hat das [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul den Keyframe-Selektor erweitert, um Informationen zum Fortgang des Timeline-Bereichs direkt in der `@keyframes`-Animationsdefinition einzuschließen. Ein {{cssxref("timeline-range-name")}} kann dem `<percentage>`-Komponenten des Selektors vorangestellt werden, um Keyframes an spezifische Fortschrittspunkte innerhalb des benannten Timeline-Bereichs anzuhängen. Der `<timeline-range-name>` repräsentiert den ausgewählten vordefinierten benannten Timeline-Bereich, und der darauf folgende `<percentage>` repräsentiert den prozentualen Fortschritt zwischen dem Beginn und Ende dieses benannten Timeline-Bereichs.

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

Wenn die Animation-Timeline des Elements keinen entsprechenden benannten Ansichtstimeline-Bereich hat, werden alle Keyframes, die an Punkte auf diesem benannten Timeline-Bereich angehängt sind, ignoriert. Diese Befestigungspunkte können außerhalb des aktiven Intervalls der Animation liegen. Wenn dies auftritt, werden die automatischen `from` (`0%`) und `to` (`100%`) Keyframes nur für Eigenschaften generiert, die keine Keyframes bei oder vor `0%` oder bei oder nach `100%` haben. Siehe den [Leitfaden zu Timeline-Bereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) für weitere Informationen.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt die Verwendung von Schlüsselwörtern und Prozentsätzen, indem eine Keyframe-Animation erstellt wird, die diese Arten von Keyframe-Selektoren verwendet.

#### HTML

Wir fügen ein Element ein, das wir animieren werden.

```html
<div>I am animated</div>
```

#### CSS

Wir stellen unserem Kasten einige grundlegende Stile zur Verfügung:

```css
div {
  background-color: rebeccapurple;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
}
```

Wir erstellen eine {{cssxref("@keyframes")}}-Animation, die Stile auf die Schlüsselwörter `from` und `to` und einen mittleren Prozentsatz anwendet. Wir animieren die Eigenschaften {{cssxref("opacity")}} und {{cssxref("transform")}}.

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

Wir wenden unsere Animation auf das Element mithilfe der {{cssxref("animation")}}-Kurzform-Eigenschaft an:

```css
div {
  animation: slide-and-fade 4s ease-in infinite;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic usage","100%","200")}}

### Selektorlisten

Unter Verwendung desselben HTML und grundlegender Stilgebung wie im vorherigen Beispiel, demonstriert dieses Beispiel die Verwendung von kommagetrennten Selektoren, um Keyframes zu gruppieren und dieselben Stile an mehreren Punkten in einer Animation anzuwenden.

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

Durch die Verwendung einer Selektorliste mit mehreren kommagetrennten Keyframe-Selektoren "pausiert" die Animation vom `25%`-Keyframe, bis sie den `75%`-Keyframe erreicht.

### Weglassen von `to` und `from`

Dieses Beispiel zeigt, wie, wenn die Keyframe-Selektoren `to` oder `from` in einer `@keyframes`-Animationsdefinition nicht enthalten sind, die animierten Eigenschaften zu und von den ursprünglichen, nicht animierten Eigenschaftswerten animieren.

#### HTML

Wir fügen ein paar Elemente ein. Wir werden alle von ihnen animieren.

```html
<div>I am animated</div>
<div>I am animated</div>
<div>I am animated</div>
```

#### CSS

Wir geben unseren Elementen grundlegende Stile und geben jedem eine andere {{cssxref("outline-width")}} und {{cssxref("background-color")}}. Wir werden diese beiden Eigenschaften animieren.

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

Wir erstellen eine Animation, die die `background-color` und `outline-width` eines Elements bei `30%` und `40%`-Keyframes setzt.

```css
@keyframes changes {
  30%, 40% {
    background-color: black;
    outline-width: 15px;
}
```

#### Ergebnis

{{EmbedLiveSample("Omitting to and from","100%","420")}}

Die Eigenschaften `background-color` und `outline-width` sind in `30%` und `40%`-Keyframes gesetzt. Infolgedessen animieren sich die `background-color`-Werte der Elemente von `grün`, `magenta` und `blau` zu `schwarz`, während ihre `outline-width`-Werte von `0px`, `10px` und `20px` zu `15px` animieren. Sie bleiben für ein Zehntel der Animation in diesem Zustand — zwischen `30%` und `40%` der Dauer. Nach `40%` der Dauer animieren sich diese Eigenschaften wieder zurück zu ihren ursprünglichen Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@keyframes")}}
- {{cssxref("animation")}}
- {{cssxref("animation-range")}}
- [Verstehen von Timeline-Bereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animations](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
