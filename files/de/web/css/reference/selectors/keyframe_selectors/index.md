---
title: Keyframe-Selektoren
slug: Web/CSS/Reference/Selectors/Keyframe_selectors
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

CSS-**Keyframe-Selektoren** kennzeichnen bestimmte Punkte auf der Zeitleiste einer Animation, an denen Keyframe-Stile angewendet werden sollen. Diese Selektoren werden ausschließlich innerhalb der {{cssxref("@keyframes")}}-At-Regel verwendet.

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
  - : Kennzeichnet den Beginn der Animationssequenz. Entspricht `0%`.
- `to`
  - : Kennzeichnet das Ende der Animationssequenz. Entspricht `100%`.
- `<percentage>`
  - : Ein {{cssxref("percentage")}}-Wert zwischen `0%` und `100%` einschließlich, der den Fortschritt der gesamten Animationssequenz angibt.
- `<timeline-range-name> <percentage>`
  - : Ein {{cssxref("timeline-range-name")}} vor einer `<percentage>`-Komponente kennzeichnet einen bestimmten Fortschrittspunkt innerhalb des benannten Zeitleistenbereichs.

## Beschreibung

Ein `<keyframe-selector>` kann das Schlüsselwort `to` oder `from`, ein Prozentwert zwischen `0%` und `100%` einschließlich oder eine durch Kommas getrennte Liste dieser Schlüsselwörter und/oder Prozentwerte sein. Steht vor dem Prozentwert ein {{cssxref("timeline-range-name")}}, definiert er einen Zeitleistenbereich, sofern die Animationszeitleiste eine View-Progress-Zeitleiste ist; andernfalls wird der Selektor ignoriert. Bei einer durch Kommas getrennten Liste von `<keyframe-selector>`-Werten gilt der nachfolgende Stilblock für alle angegebenen Fortschrittspunkte.

### Gültige Prozentwerte

Prozentwerte müssen das Prozentzeichen (`%`) enthalten. Werte ohne Einheit (wie `0` und `20`) sowie Werte außerhalb des Bereichs von `0%` bis `100%` (wie `-10%` oder `110%`) sind ungültig und führen dazu, dass der Keyframe-Block ignoriert wird.

### Kaskade, Reihenfolge, Vorrang und Wichtigkeit

Eigenschaftswerte, die durch Animations-`@keyframes` festgelegt werden, haben Vorrang vor allen normalen Stilen. Unabhängig von der [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) überschreibt ein animierter Wert daher Werte, die nicht mit {{cssxref("important", "!important")}} gekennzeichnet sind. Nur als wichtig gekennzeichnete Eigenschaftswerte und Werte, für die gerade eine Transition läuft, haben Vorrang vor animierten Eigenschaftswerten.

Alle Keyframe-Selektoren haben dieselbe Spezifität. Die Reihenfolge der Keyframe-Selektoren innerhalb der Selektorliste spielt keine Rolle. Die Reihenfolge im Quelltext ist nur dann relevant, wenn ein erneut verwendeter Keyframe-Selektor für eine Eigenschaft, die für denselben Selektor bereits deklariert wurde, einen anderen Wert deklariert.

Die Kennzeichnung `!important` ist innerhalb einer `@keyframes`-Definition ungültig.

### Fehlende Start- und Endselektoren

Wenn kein Keyframe für `0%` (oder `from`) beziehungsweise `100%` (oder `to`) angegeben ist, verwendet der Browser für den jeweiligen Zustand die berechneten Stile des Elements. So kann die Animation einen fließenden Übergang von den nicht animierten Eigenschaftswerten des Elements oder zurück zu ihnen erzeugen. Anders ausgedrückt: Wird eine Eigenschaft in einem Keyframe in der Mitte der Zeitleiste angegeben, aber weder in einem Start- noch in einem End-Keyframe-Selektorblock festgelegt, wird sie von ihrem ursprünglichen Wert zu diesem Wert animiert.

Wenn ein Element beispielsweise die Hintergrundfarbe `red` hat und die folgende Animation angewendet wird:

```css
@keyframes changeToPurple {
  25%,
  75% {
    background-color: purple;
  }
}
```

Zu Beginn der Animation ist die Hintergrundfarbe `red`. Nach einem Viertel der Animation geht sie in `purple` über, bleibt für die Hälfte der Animation `purple` und geht ab `75%` der [Animationszeitleiste](/de/docs/Web/CSS/Reference/Properties/animation-timeline) wieder in die ursprüngliche Hintergrundfarbe `red` über. Sehen Sie sich das Beispiel an, das [`to` und `from` weglässt](#omitting_to_and_from).

#### Fehlende Eigenschaftsdeklarationen

Wenn Sie eine `@keyframes`-Animation für mehrere Eigenschaften erstellen, müssen Sie nicht alle Eigenschaften in jedem Keyframe-Selektorblock deklarieren.

Im Beispiel zur [grundlegenden Verwendung](#grundlegende_verwendung) wird `opacity` beispielsweise in allen Keyframe-Selektorblöcken deklariert, während für `transform` nur Start- und Endwerte festgelegt werden. In diesem Fall ist das Element bei `50%` der Animationszeitleiste vollständig undurchsichtig. Der Zeitpunkt, zu dem das Element um `25vw` nach rechts verschoben ist, hängt jedoch von der {{cssxref("animation-timing-function")}} ab: Bei `linear` liegt er bei `50%`, bei `ease-in` dagegen nicht (und `ease-in` wird in diesem Fall verwendet).

### Kaskadenreihenfolge

Wenn mehrere Keyframe-Blöcke denselben `<keyframe-selector>` verwenden, unterliegen sie der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction). Wird dieselbe Eigenschaft in mehreren Blöcken mit demselben Selektor definiert, hat die letzte Deklaration innerhalb der Regel Vorrang. Definieren die Blöcke unterschiedliche Eigenschaften, werden sie zusammengeführt.

Die folgende Animation wiederholt unveränderte Werte in mehreren Selektorblöcken, was nicht nötig ist:

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

Wir können die Kaskade nutzen, um Werte in einem Selektorblock zusammenzufassen und sie anschließend bei Bedarf zu überschreiben. Die folgende Animation ist mit der vorherigen gleichwertig, benötigt aber weniger CSS-Zeilen:

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

Die Reihenfolge ist wichtig! Wir dürfen die Kaskade nicht außer Acht lassen. Wenn wir die obigen Blöcke falsch umordnen, gehen die Übergänge verloren. Im folgenden Beispiel ist das Element während der gesamten Dauer der Animation `purple` und vollständig undurchsichtig; außerdem werden alle Transformationen zurückgesetzt. Die Eigenschaftswerte werden angewendet und bleiben unverändert, weil die letzte Deklaration die Deklarationen aus den vorherigen Keyframe-Selektorblöcken überschreibt.

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

### Mit benannten Zeitleistenbereichen

Der Keyframe-Selektor wurde ursprünglich im [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations) definiert. Das Modul für [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) hat ihn erweitert, sodass Informationen zu Bereichen einer View-Progress-Zeitleiste direkt in eine `@keyframes`-Animationsdefinition aufgenommen werden können. Ein {{cssxref("timeline-range-name")}} kann vor der `<percentage>`-Komponente des Selektors stehen, um Keyframes bestimmten Fortschrittspunkten innerhalb des benannten Zeitleistenbereichs zuzuordnen. Der `<timeline-range-name>` bezeichnet den ausgewählten vordefinierten benannten Zeitleistenbereich; der darauf folgende `<percentage>`-Wert gibt den prozentualen Fortschritt zwischen Anfang und Ende dieses Bereichs an.

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

Wenn die Animationszeitleiste des Elements keinen entsprechenden benannten View-Timeline-Bereich hat, werden alle Keyframes ignoriert, die Punkten dieses benannten Zeitleistenbereichs zugeordnet sind. Diese Zuordnungspunkte können außerhalb des aktiven Intervalls der Animation liegen. In diesem Fall werden automatische Keyframes für `from` (`0%`) beziehungsweise `to` (`100%`) nur für Eigenschaften erzeugt, für die es keine Keyframes bei oder vor `0%` beziehungsweise bei oder nach `100%` gibt. Weitere Informationen finden Sie im [Leitfaden zu Namen von Zeitleistenbereichen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die Verwendung von Schlüsselwörtern und Prozentwerten in einer Keyframe-Animation.

#### HTML

Wir fügen ein Element ein, das wir animieren.

```html
<div>I am animated</div>
```

#### CSS

Wir geben unserem Element einige grundlegende Stile:

```css
div {
  background-color: rebeccapurple;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
}
```

Wir erstellen eine {{cssxref("@keyframes")}}-Animation und wenden Stile auf die Schlüsselwörter `from` und `to` sowie einen dazwischenliegenden Prozentwert an. Wir animieren die Eigenschaften {{cssxref("opacity")}} und {{cssxref("transform")}}.

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

Mit der Kurzschreibweise {{cssxref("animation")}} wenden wir die Animation auf das Element an:

```css
div {
  animation: slide-and-fade 4s ease-in infinite;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic usage","100%","200")}}

### Selektorlisten

Dieses Beispiel verwendet dasselbe HTML und dieselben grundlegenden Stile wie das vorherige. Es zeigt, wie durch Kommas getrennte Selektoren verwendet werden, um Keyframes zu gruppieren und dieselben Stile an mehreren Punkten einer Animation anzuwenden.

```html hidden
<div>I am animated</div>
```

#### CSS

Wir erstellen eine `pulse`-Animation, die die Größe des Elements verändert.

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

{{EmbedLiveSample("selector_lists","100%","125")}}

Durch die Verwendung einer Selektorliste mit mehreren durch Kommas getrennten Keyframe-Selektoren „pausiert“ die Animation vom Keyframe bei `25%` bis zum Keyframe bei `75%`.

### `to` und `from` weglassen

Dieses Beispiel zeigt, wie animierte Eigenschaften zu ihren ursprünglichen, nicht animierten Eigenschaftswerten hin und von diesen weg animiert werden, wenn die Keyframe-Selektoren `to` oder `from` in einer `@keyframes`-Animationsdefinition fehlen.

#### HTML

Wir fügen einige Elemente ein, die wir alle animieren werden.

```html
<div>I am animated</div>
<div>I am animated</div>
<div>I am animated</div>
```

#### CSS

Wir geben den Elementen grundlegende Stile und weisen jedem unterschiedliche Werte für {{cssxref("outline-width")}} und {{cssxref("background-color")}} zu. Diese beiden Eigenschaften werden wir animieren.

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

Wir erstellen eine Animation, die `background-color` und `outline-width` eines Elements in den Keyframes bei `30%` und `40%` festlegt.

```css
@keyframes changes {
  30%, 40% {
    background-color: black;
    outline-width: 15px;
}
```

#### Ergebnis

{{EmbedLiveSample("Omitting to and from","100%","420")}}

Die Eigenschaften `background-color` und `outline-width` werden in den Keyframes bei `30%` und `40%` festgelegt. Daher werden die `background-color`-Werte der Elemente von `green`, `magenta` und `blue` zu `black` animiert, während ihre `outline-width`-Werte von `0px`, `10px` und `20px` zu `15px` animiert werden. Für ein Zehntel der Animationsdauer – zwischen `30%` und `40%` – bleiben sie in diesem Zustand. Nach `40%` werden diese Eigenschaften wieder zu ihren Ausgangswerten animiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@keyframes")}}
- {{cssxref("animation")}}
- {{cssxref("animation-range")}}
- [Namen von Zeitleistenbereichen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
