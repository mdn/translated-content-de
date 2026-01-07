---
title: Keyframe-Selektoren
slug: Web/CSS/Reference/Selectors/Keyframe_selectors
l10n:
  sourceCommit: a397ab763a6686a4056af755e4da32ac735b9fa5
---

CSS **Keyframe-Selektoren** identifizieren spezifische Punkte in einer Animationstimeline, an denen Keyframe-Stile angewendet werden sollten. Diese Selektoren werden ausschließlich innerhalb der {{cssxref("@keyframes")}}-Regel verwendet.

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
  - : Repräsentiert den Beginn der Animationssequenz. Es ist äquivalent zu `0%`.
- `to`
  - : Repräsentiert das Ende der Animationssequenz. Es ist äquivalent zu `100%`.
- `<percentage>`
  - : Ein {{cssxref("percentage")}} zwischen `0%` und `100%`, einschließlich, das den gesamten Fortschritt durch die Animationssequenz repräsentiert.
- `<timeline-range-name> <percentage>`
  - : Ein {{cssxref("timeline-range-name")}}, der einem `<percentage>`-Wert vorausgeht und einen spezifischen Fortschrittspunkt innerhalb des benannten Timeline-Bereichs darstellt.

## Beschreibung

Ein `<keyframe-selector>` kann das `to` oder `from` Schlüsselwort, ein Prozentsatz zwischen `0%` und `100%`, einschließlich, oder eine kommagetrennte Liste dieser Schlüsselwörter und/oder Prozentsätze sein. Wenn der Prozentsatz von einem {{cssxref("timeline-range-name")}} vorangestellt wird, definiert er einen Timeline-Bereich, wenn die Animationstimeline eine Ansichtsfortschritts-Timeline ist; andernfalls wird der Selektor ignoriert. Wenn eine kommagetrennte `<keyframe-selector>`-Liste verwendet wird, wird der nachfolgende Stilblock auf alle angegebenen Fortschrittspunkte angewendet.

### Gültige Prozentwerte

Prozentwerte müssen das Prozentzeichen (`%`) enthalten. Werte ohne Einheit (wie `0` und `20`) und Werte außerhalb des Bereichs von `0%` bis `100%` (wie `-10%` oder `110%`) sind ungültig und führen dazu, dass der Keyframe-Block ignoriert wird.

### Kaskade, Reihenfolge, Vorrang und Wichtigkeit

Von Animationen in `@keyframes` gesetzte Eigenschaftswerte sind wichtiger als alle normalen Stile, was bedeutet, dass egal welcher [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) ein animierter Wert Werte überschreiben wird, die kein {{cssxref("important", "!important")}}-Flag gesetzt haben. Nur wichtige Eigenschaftswerte und Werte, die derzeit übergehen, haben Vorrang über animierte Eigenschaftswerte.

Alle Keyframe-Selektoren haben die gleiche Spezifität. Die Reihenfolge der Keyframe-Selektoren innerhalb der Selektorliste spielt keine Rolle. Die Quellordnung ist nur wichtig, wenn ein doppelter Keyframe-Selektor einen anderen Wert für eine bereits deklarierte Eigenschaft auf demselben Selektor erklärt.

Das `!important`-Flag ist innerhalb einer `@keyframes`-Definition ungültig.

### Ausgelassene Start- und End-Selektoren

Wenn kein `0%` (oder `from`) oder `100%` (oder `to`) Keyframe angegeben ist, verwendet der Browser die berechneten Stile des Elements für diese Zustände, um der Animation einen reibungslosen Übergang von oder zu den nicht animierten Eigenschaftswerten des Elements zu ermöglichen. Mit anderen Worten, wenn eine Eigenschaft in einem mittleren Keyframe der Timeline angegeben wird, ohne innerhalb eines Start- oder End-Keyframe-Selektorblocks gesetzt zu sein, wird die Eigenschaft von ihrem ursprünglichen Wert zu diesem Wert animiert.

Zum Beispiel, wenn ein Element eine `red` Hintergrundfarbe hat und die folgende Animation angewendet wird:

```css
@keyframes changeToPurple {
  25%,
  75% {
    background-color: purple;
  }
}
```

Die Hintergrundfarbe wird zu Beginn der Animation `red` sein, ein Viertel der Animation in `purple` übergehen, die Hälfte der Animation `purple` bleiben und dann ab `75%` der {{cssxref("animation-timeline", "animation timeline", "", "nocode")}} Zeitpunkt zurück zu `red`, der ursprünglichen Hintergrundfarbe, wechseln. Siehe das Beispiel, das [die `to` und `from` auslässt](#omitting_to_and_from).

#### Ausgelassene Eigenschaftsdeklarationen

Bei der Erstellung einer `@keyframes`-Animation zur Animation mehrerer Eigenschaften müssen nicht alle Eigenschaften in allen Keyframe-Selektorblöcken deklariert werden.

Zum Beispiel wird im [Beispiel zur grundlegenden Verwendung](#grundlegende_verwendung) die `opacity` in allen Keyframe-Selektorblöcken deklariert, aber nur start- und endtransformierte Werte werden gesetzt. In diesem Fall wird das Element auf der Hälfte der Animationstimeline vollständig undurchsichtig sein, aber der Punkt, an dem das Element `25vw` nach rechts transformiert wird, hängt von der {{cssxref("animation-timing-function")}} ab — es wird `50%` im Fall von `linear` sein, aber nicht, wenn `ease-in` verwendet wird (was in diesem Fall angewendet wird).

### Reihenfolge der Kaskade

Wenn mehrere Keyframe-Blöcke den gleichen `<keyframe-selector>` verwenden, [kaskadieren sie](/de/docs/Web/CSS/Guides/Cascade/Introduction). Das bedeutet, dass wenn dieselbe Eigenschaft in mehreren Blöcken mit demselben Selektor definiert ist, die letzte Deklaration in der Regel Vorrang hat. Wenn sie verschiedene Eigenschaften definieren, werden sie zusammengeführt.

Diese Animation wiederholt unveränderte Werte in mehreren Selektorblöcken, was nicht notwendig ist:

```css
@keyframes uglyAnimation {
  0% {
    transform: translatex(0);
    opacity: 0;
    background-color: purple;
  }
  50% {
    transform: translatex(0);
    opacity: 1;
    background-color: purple;
  }
  75% {
    transform: translatex(0);
    opacity: 0;
    background-color: green;
  }
  100% {
    transform: translatex(50vw);
    opacity: 0;
    background-color: purple;
  }
}
```

Wir können die Kaskade verwenden, um Werte in einem Selektorblock zu gruppieren und sie dann nach Bedarf zu überschreiben. Das Folgende ist der vorherigen Animation äquivalent, aber mit weniger CSS-Zeilen:

```css
@keyframes uglyAnimation {
  0%,
  50%,
  75%,
  100% {
    transform: translatex(0);
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
    transform: translatex(50vw);
  }
}
```

Reihenfolge ist wichtig! Wir können die Kaskade nicht ignorieren. Wenn wir die obige Reihenfolge falsch anordnen, verlieren wir die Übergänge. Das Folgende macht das Element violett, vollständig undurchsichtig und setzt alle Transformationen während der gesamten Zeit, in der die Animation angewendet wird, zurück. Die Eigenschaftswerte werden angewendet und bleiben statisch, weil die letzte Deklaration die in den vorherigen Keyframe-Selektorblöcken vorgenommenen Deklarationen überschreibt.

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
    transform: translatex(50vw);
  }
  0%,
  50%,
  75%,
  100% {
    transform: translatex(0);
    opacity: 1;
    background-color: purple;
  }
}
```

### Mit benannten Timeline-Bereichen

Ursprünglich im [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations) definiert, erweiterte das [CSS-Scroll-gesteuerte Animationsmodul](/de/docs/Web/CSS/Guides/Scroll-driven_animations) den Keyframe-Selektor, um Informationen zum Fortschrittsbereich der Ansicht direkt in die `@keyframes` Animationsdefinition aufzunehmen. Ein {{cssxref("timeline-range-name")}} kann der `<percentage>`-Komponente des Selektors vorangestellt werden, um Keyframes an spezifische Fortschrittspunkte innerhalb des benannten Timeline-Bereichs zu hängen. Der `<timeline-range-name>` stellt den ausgewählten vorab definierten benannten Timeline-Bereich dar, und das `<percentage>` danach stellt den prozentualen Fortschritt zwischen dem Anfang und dem Ende dieses benannten Timeline-Bereichs dar.

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

Wenn die Animationstimeline des Elements keinen entsprechenden benannten Ansichts-Timeline-Bereich hat, werden alle Keyframes, die an Punkte auf diesem benannten Timeline-Bereich angehängt sind, ignoriert. Diese Anhangspunkte können außerhalb des aktiven Intervalls der Animation liegen. Wenn dies geschieht, werden die automatischen `from` (`0%`) und `to` (`100%`) Keyframes nur für Eigenschaften generiert, die keine Keyframes bei oder früher als `0%` oder bei oder später als `100%` haben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die Verwendung von Schlüsselwörtern und Prozentsätzen, indem eine Keyframe-Animation erstellt wird, die diese Keyframe-Selektortypen verwendet.

#### HTML

Wir fügen ein Element ein, das wir animieren werden.

```html
<div>I am animated</div>
```

#### CSS

Wir geben unserem Kasten einige Grundstile:

```css
div {
  background-color: rebeccapurple;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
}
```

Wir erstellen eine {{cssxref("@keyframes")}}-Animation, indem wir Stile auf die `from`- und `to`-Schlüsselwörter und einen mittleren Prozentsatz anwenden. Wir animieren die {{cssxref("opacity")}}- und die {{cssxref("transform")}}-Eigenschaften.

```css
@keyframes slide-and-fade {
  from {
    transform: translatex(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translatex(50vw);
    opacity: 0;
  }
}
```

Wir wenden unsere Animation auf das Element mit der {{cssxref("animation")}}-Kurzform-Eigenschaft an:

```css
div {
  animation: slide-and-fade 4s ease-in infinite;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic usage","100%","200")}}

### Selektorenlisten

Unter Verwendung des gleichen HTML-Codes und der grundlegenden Stile wie im vorherigen Beispiel zeigt dieses Beispiel die Verwendung von kommagetrennten Selektoren, um Keyframes zu gruppieren und die gleichen Stile an mehreren Punkten in einer Animation anzuwenden.

```html hidden
<div>I am animated</div>
```

#### CSS

Wir erstellen eine `pulse`-Animation, die die Größe unseres Elements verändert.

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

Durch die Verwendung einer Selektorenliste mit mehreren kommagetrennten Keyframe-Selektoren "pausiert" die Animation vom `25%`-Keyframe, bis sie den `75%`-Keyframe erreicht.

### Auslassen von `to` und `from`

Dieses Beispiel zeigt, wie die animierten Eigenschaften zu und von den ursprünglichen, nicht animierten Eigenschaftswerten animieren, wenn die `to`- oder `from`-Keyframe-Selektoren nicht in einer `@keyframes`-Animationsdefinition enthalten sind.

#### HTML

Wir fügen einige Elemente hinzu. Wir werden alle von ihnen animieren.

```html
<div>I am animated</div>
<div>I am animated</div>
<div>I am animated</div>
```

#### CSS

Wir geben unseren Elementen grundlegende Stile und geben jedem eine unterschiedliche {{cssxref("outline-width")}} und {{cssxref("background-color")}}. Wir werden diese zwei Eigenschaften animieren.

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

Die `background-color` und `outline-width`-Eigenschaften sind bei `30%` und `40%` Keyframes gesetzt. Als Ergebnis animieren die `background-color`-Werte der Elemente von `green`, `magenta` und `blue` zu `black`, während ihre `outline-width`-Werte von `0px`, `10px` und `20px` zu `15px` animieren. Sie bleiben in diesem Zustand für ein Zehntel der Animation — zwischen der `30%` und `40%` Dauer. Nach der `40%` Dauer animieren diese Eigenschaften wieder zurück zu ihren anfänglichen Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@keyframes")}}
- {{cssxref("animation")}}
- {{cssxref("animation-range")}}
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
