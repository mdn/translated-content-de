---
title: Verständnis von Zeitlinienbereichsnamen
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

Standardmäßig verfolgen [Ansichts-Fortschritts-Zeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente über den gesamten Scrollbereich. Die Animationszeitleiste beginnt, wenn das erste Pixel der Startkante des Elements die Endkante des Scrollports überquert, und endet, wenn die Endkante des Elements die Startkante des Scrollports überquert. Sie können diesen Standardbereich für die Animationsanbindung ändern. Zum Beispiel können Sie die Ansichts-Fortschritts-Zeitleiste darauf beschränken, erst zu beginnen, wenn das Subjektelement vollständig in den Scrollbereich eingetreten ist.

Dieser Leitfaden erklärt, wie Sie die Namen von Zeitlinienbereichen ändern können, und untersucht spezifisch die verschiedenen Namen von Zeitlinienbereichen, deren Bedeutungen und wie sie verwendet werden.

<!--Begrenzung der Animationszeitleiste auf einen bestimmten Teil eines benannten Animationszeitleistenbereichs wird im [Einfügungsleitfaden für Scroll-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) behandelt.-->

## Einleitung in die Ansichts-Fortschritts-Zeitleiste

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden erstellt, indem {{cssxref("@keyframes")}}-Animationen mit der {{cssxref("animation-name")}}-Eigenschaft (oder der {{cssxref("animation")}}-Kurzform) an ein Element angehängt werden. Die Keyframes definieren das Verhalten der Animation, während die {{cssxref("animation-timeline")}} bestimmt, wann und wie das Element durch diese Keyframes fortschreitet.

Standardmäßig ist die Zeitleiste der Animation die dokumentenbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline). Mit [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) wird die Zeitleiste der Animation, oder deren Fortschritt, entweder durch das Scrollen des Benutzers ([Scroll-Fortschritts-Zeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)) oder durch die Sichtbarkeit des Elements ([Ansichts-Fortschritts-Zeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)) angetrieben, anstatt durch den Zeitablauf.

Bei Ansichts-Fortschritts-Zeitleisten ist das Fortschreiten der Keyframes daran gebunden, wie viel des Subjektelements innerhalb des Scrollers sichtbar ist und seine Position innerhalb des Scrollers. Wenn das Element den Viewport betritt, schreitet die Zeitleiste voran. Wenn der Benutzer das Scrollen umkehrt, umkehrt sich die Zeitleiste. Mit anderen Worten: Wenn das Element in den Sichtbereich kommt oder sich daraus herausbewegt, schreitet die Zeitleiste voran oder bewegt sich rückwärts. Die Animation erfolgt nur, wenn das Subjekt innerhalb seines Scrollports sichtbar ist. Stoppt das Scrollen, während das Element sichtbar ist, pausiert die Animation.

### Standard-Ansichts-Fortschritts-Zeitleiste

Standardmäßig beginnt der Fortschritt der [Ansichts-Fortschritts-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), wenn die Startkante des verfolgten Subjekts die Endkante des Scrollports überschneidet, und endet, wenn die Endkante des Subjekts die Startkante des Scrollports verlässt. Dies sind die oberen und unteren Kanten des Subjekts und des Scrollports beim vertikalen Scrollen, und die linken und rechten oder rechten und linken Kanten beim horizontalen Scrollen, abhängig vom Schreibmodus.

```html hidden live-sample___initial live-sample___entry_exit live-sample___inset_cover live-sample___contains live-sample___inset_contain live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing
<main>
  <article>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>Scroll down ⇩</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <section class="one animated_element">
      <div>
        <i>Animated Element</i>
        <span></span>
      </div>
    </section>
    <section class="double">
      <div>
        <i id="A" class="animated_element">A</i>
        <i id="B" class="animated_element">B</i>
      </div>
    </section>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>Scroll up ⇧</p>
  </article>
</main>
```

```html hidden live-sample___initial live-sample___entry_exit live-sample___inset_cover live-sample___contains live-sample___inset_contain live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing
<fieldset>
  <legend>Select the height of the animated element</legend>

  <label><input name="height" value="50" type="radio" checked /> 50px</label>
  <label><input name="height" value="250" type="radio" /> 250px</label>
  <label><input name="height" value="500" type="radio" /> 500px</label>
</fieldset>
```

```css hidden live-sample___initial live-sample___entry_exit live-sample___inset_cover live-sample___contains live-sample___inset_contain live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing
:root {
  --animElHeight: 50px;
  --animElHeightWord: "50px";
}
body:has(input[value="250"]:checked) {
  --animElHeight: 250px;
  --animElHeightWord: "250px";
}
body:has(input[value="500"]:checked) {
  --animElHeight: 500px;
  --animElHeightWord: "500px";
}
main {
  padding: 20px 0 0 20px;
  margin-bottom: 2em;
}
article {
  outline: 3px dashed;
  width: 500px;
  margin: auto;
  overflow: scroll;
  position: relative;
  height: 250px;
  box-sizing: content-box;
}

p {
  padding: 10px;
  margin: 10px;
}

section {
  --clr: yellow;
  --words: "Animation not started";
  position: relative;
  margin: 20px;
  text-align: center;
}
.one,
.double i {
  animation: showAnim step-end 1 forwards;
  animation-timeline: view();
}
i {
  background-color: hsl(from var(--clr) h s calc(l * 1.4));
  display: block;
  height: var(--animElHeight);
  line-height: var(--animElHeight);
}
span {
  background-color: hsl(from var(--clr) h s 90%);
  border: 5px solid hsl(from var(--clr) h s 20%);
  min-width: 250px;
  height: 30px;
  line-height: 30px;
}
span,
i {
  font-family: sans-serif;
  font-size: 1.5rem;
}
span::before {
  content: var(--words);
}
span {
  position: fixed;
  top: 10px;
  left: 10px;
  padding: 10px;
}
i::after {
  content: " ( " var(--animElHeightWord) " )";
}
label {
  padding-right: 2em;
}
legend {
  margin-top: 2em;
}

@keyframes showAnim {
  from {
    --clr: green;
    --words: "Currently animating";
  }
  to {
    --clr: red;
    --words: "Animation complete";
  }
}
body::before {
  display: block;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5rem;
}

@layer no-support {
  @supports not (animation-timeline: view()) {
    body::after {
      content: "Your browser doesn't support view progress scrolling.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;

      position: absolute;
      inset: 0;
      bottom: auto;
    }
  }
}
```

```css hidden live-sample___initial live-sample___inset_cover live-sample___contains live-sample___inset_contain
.double {
  display: none;
}
```

```css hidden live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing live-sample___entry_exit
.one {
  display: none;
}
.double div {
  display: flex;
  gap: 10px;
}
```

In dem folgenden Beispiel versuchen Sie nach unten zu scrollen. Beachten Sie, wie die Animation beginnt, sobald die obere Kante des animierten Elements mit der unteren Kante des Scrollcontainers ausgerichtet ist und endet, indem `100%` Fortschritt erreicht wird, wenn die untere Kante mit der oberen Kante des Containers ausgerichtet ist, unabhängig davon, wie hoch das animierte Element ist.

{{EmbedLiveSample("initial", "100%", "400")}}

Der Schreibmodus und die Scrollrichtung des Scrollcontainers bestimmen die Start- und Endkanten des Scrollcontainers.

## Der Animationsanbindungsbereich

Standardmäßig wird das Element die ganze Zeit animiert, während irgendein Teil des Subjektelements sichtbar ist. Dies bedeutet, dass der Standard-**Animationsanbindungsbereich** die Summe der Höhe des Scrollcontainers und der Höhe des Subjektelements ist, wobei diese zusätzliche Höhe an der Endkante des Scrolls vorhanden ist.

Im vorherigen Beispiel ist der Scrollcontainer standardmäßig `250px` hoch und das animierte Element `50px` hoch, was bedeutet, dass der vertikale Animationsanbindungsbereich `300px` hoch ist. Wenn das Subjekt auf `250px` gesetzt ist, wird der Bereich `500px`; wenn das Element auf `500px` gesetzt ist, wächst die Größe des Animationsanbindungsbereichs auf `750px`.

Das Modul [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) bietet Mechanismen zum Definieren verschiedener Animationsanbindungsbereiche. Die Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}}, die beide mit der {{cssxref("animation-range")}}-Kurzform festgelegt werden können, definieren den Anbindungsbereich für die Startkante und die Endkante des Animationsbereichs, zusammen mit möglichen Einfügungen von beiden Kanten.

Die Eigenschaften der Animationsbereiche akzeptieren das Schlüsselwort `normal`, einen {{cssxref("timeline-range-name")}}, einen {{cssxref("length-percentage")}} oder sowohl einen `<timeline-range-name>` als auch den `<length-percentage>`. In diesem Leitfaden behandeln wir nur die Werte für die Komponente `<timeline-range-name>` des Werts.

<!--Die Längen-Prozent-Werte, wie `20%` oder `100px`, fügen die Animationszeitleiste von den benannten Animationsanbindungsbereichen um den festgelegten Betrag ein, wobei der Wert standardmäßig auf `0` eingestellt ist. Dies wird in xxx behandelt.-->

## Zeitlinienbereichsnamen

Der `<timeline-range-name>`-Werttyp akzeptiert sechs Schlüsselwörter: `cover`, `contain`, `entry`, `exit`, `entry-crossing` und `exit-crossing`. Jedes dieser Schlüsselwörter stellt einen vordefinierten _benannten Zeitlinienbereich_ dar. Ein benannter Zeitlinienbereich ist ein benanntes Segment einer Animationszeitleiste. Diese Schlüsselwörter ermöglichen es dem Entwickler, die Basis für den Animationsanbindungsbereich festzulegen, auf die sich Offsets beziehen. Der Beginn des Segments wird als `0%` Fortschritt durch den Bereich dargestellt; das Ende des Segments als `100%` Fortschritt durch den Bereich. Wo sich diese Punkte befinden, hängt vom verwendeten benannten Bereich ab.

### Cover

Der Animationsanbindungsbereich in den vorherigen Beispielen deckt den gesamten Bereich „ab“. Dieser Bereich repräsentiert den vollständigen Bereich der Ansichts-Fortschritts-Zeitleiste. `0%` Fortschritt repräsentiert den Punkt, an dem die Start-Border-Kante des Subjekts mit der Endkante des Scrollports übereinstimmt, und `100%` Fortschritt repräsentiert den Punkt, an dem die End-Border-Kante des Subjekts die Startkante des Scrollports erreicht. Wie wir gesehen haben, entspricht die Größe der „Cover“-Reichweite der Summe der Dimensionen von Subjekt und Scrollport in der Scrollrichtung. In allen bisher gezeigten Beispielen entspricht die Höhe des Animationsanbindungsbereichs der Höhe des Containers plus der Höhe des animierten Elements.

Der standardmäßige benannte Zeitleistenbereich ist `cover`. Wir hätten den `<timeline-range-name>` explizit setzen können, um die gleichen Ergebnisse zu erzielen:

```css
.animated_element {
  animation-range-start: cover;
  animation-range-end: cover;
}
```

```html hidden live-sample___svg_cover
<div>
  <svg viewBox="-1 -1 462 1252" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="125" y="250" />
    <rect class="large end" width="100" height="500" x="240" y="0" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="125" y="750" />
    <rect class="large start" width="100" height="500" x="240" y="750" />
    <text y="625" x="5">cover</text>
    <text y="520" x="360">100%</text>
    <line x1="0" x2="350" y1="500" y2="500" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>
</div>
```

{{EmbedLiveSample("svg_cover", "100%", "720")}}

Das Bild veranschaulicht die Animationszeitleiste. Der Standort des Elements, wenn es den `0%`-Punkt des Animationsanbindungsbereichs erreicht, wird als gelber Block dargestellt. Dies repräsentiert die Position des Elements, wenn der `from`-Keyframe angewendet wird. Der rote Block repräsentiert die Position des Subjektelements relativ zum Scrollport, wenn der `to`-Keyframe angewendet wird. Dies ist die Position des animierten Elements, wenn es das Ende der Animation erreicht.

Abhängig von der Größe des Subjektelements und des gewählten Zeitlinienbereichs können sich Start- und Endpositionen überlappen. Bereiche der Überlappung (wie in den folgenden Diagrammen zu sehen) werden durch gestreifte rote und gelbe Bereiche dargestellt.

### Contain

Der benannte Zeitleistenbereich "contain" _enthält_ die Animation vollständig innerhalb des Scrollports — der Bereich beginnt, wenn das animierte Element zu 100% sichtbar ist und endet, wenn es nicht mehr vollständig sichtbar ist, falls es vollständig sichtbar sein kann.

Der Wert `contain` stellt den Bereich dar, während derer die wichtigste Box entweder vollständig durch oder vollständig in ihrem Sichtbarkeitsbereich des Ansichts-Fortschritts im Scrollport enthalten ist, abhängig davon, ob das Subjektelement kleiner (kann vollständig enthalten sein) oder größer als der Scrollport ist.

- Wenn das Element in Scrollrichtung kleiner als der Scrollport ist, tritt `0%` ein, wenn die End-Border-Kante des animierten Elements mit der Endkante des Scrollports übereinstimmt, und `100%`, wenn die Start-Border-Kante des animierten Elements mit der Startkante des Scrollports übereinstimmt. Mit anderen Worten: Der `contain`-Wert reicht von dem Punkt, an dem das Subjektelement erstmals vollständig im Scrollport enthalten ist (`0%`), bis zu dem Punkt, an dem es nicht länger vollständig im Scrollport enthalten ist (`100%`).

- Wenn das Element größer als der Scrollport ist, tritt der `0%`-Fortschritt ein, wenn die Start-Border-Kante des animierten Elements die Startkante des Scrollports erreicht, und `100%`, wenn die End-Border-Kante mit der Endkante übereinstimmt. Mit anderen Worten, wenn die Animation größer als ihr Container ist, ist das animierte Element niemals vollständig sichtbar, da es nicht im Scrollport "enthalten" ist. Die Animation beginnt, wenn die Startkante die Startkante des Scrollports erreicht, und endet, wenn die Endkante des animierten Elements die Endkante des Containers erreicht.

- Wenn das animierte Element die gleiche Größe wie sein Container hat, findet die Animation dennoch statt, jedoch über `0px`, was für den Benutzer nicht sichtbar ist.

```css live-sample___contains
.animated_element {
  animation-range: contain;
}
```

```css hidden live-sample___contains
body::before {
  content: "Contain";
}
```

{{EmbedLiveSample("contains", "100%", "400")}}

In diesem Beispiel beträgt die ursprüngliche Höhe des animierten Elements 20% der Höhe des Scrollports und kann daher vollständig darin enthalten sein. Wie zuvor erklärt, sollte die Animation beginnen, sobald das Element beginnt, den Scrollport zu betreten, und enden, sobald es beginnt, den Scrollport zu verlassen.

Wenn Sie die Radiotaste `500px` aktivieren, wird das Subjekt doppelt so groß wie der Scrollport. Der Animationsbereich beginnt, wenn das Subjektelement den Scrollport erstmals vollständig bedeckt, mit dem `0%`-Punkt, dem Fortschritt ist, wenn die Startkante die Startkante des Containers erreicht. Es endet, wenn das Element nicht länger den Scrollport vollständig bedeckt, mit dem `100%`-Punkt, der auftritt, wenn die Endkante die Endkante des Containers überkreuzt.

Wenn das Subjekt die gleiche Größe wie der Scrollcontainer hat, wie bei Auswahl von `250px` vorgesehen, findet die Animation immer noch statt, jedoch über `0px`. Da die `0%` und `100%` zur gleichen Zeit auftreten, ist die Animation augenblicklich. Der Unterschied im Styling ist nur erkennbar, weil die Eigenschaften, die im `100%`-Keyframe-Zustand definiert sind, nach dem Ende der Animation angewendet werden. Dies liegt daran, dass die Eigenschaft {{cssxref("animation-fill-mode")}} auf `forwards` eingestellt ist. Andernfalls würde das mittlere `250px` große Subjekt, das die gleiche Höhe wie der Scrollcontainer hat, überhaupt nicht zu animieren scheinen.

```html hidden live-sample___svg_contain
<div>
  <svg viewBox="-1 -1 462 1000" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="500" />
    <rect class="medium end" width="100" height="250" x="120" y="500" />
    <rect class="large end" width="100" height="500" x="230" y="500" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="700" />
    <rect class="medium start" width="100" height="250" x="120" y="500" />
    <rect class="large start" width="100" height="500" x="230" y="250" />
    <rect width="100" height="250" x="120" y="500" fill="url(#g)" />
    <rect width="100" height="250" x="230" y="500" fill="url(#g)" />
    <text y="460" x="10">contain</text>
    <text y="520" x="360">100%</text>
    <line x1="0" x2="350" y1="500" y2="500" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>
</div>
```

```css hidden live-sample___svg_contain
body div,
body svg {
  margin: -60px 0 -300px;
}
```

{{EmbedLiveSample("svg_contain", "100%", "450")}}

Die Animation findet statt, wenn das Objekt sich innerhalb der durch das Weiß des Containers im `50px`-Beispiel und durch die rot/gelben Bereiche im `250px`- und `500px`-Beispiel dargestellten Bereiche befindet.

Einige könnten es hilfreich finden, die Werte `cover` und `contain` zu vergleichen. Wir können die Kurzform-Eigenschaft `animation-range` verwenden, um die Eigenschaften `animation-range-start` und `animation-range-end` auf denselben `<animation-name-range>`-Wert zu setzen:

```css live-sample___cover_contain
#A {
  animation-range: contain;
}
#B {
  animation-range: cover;
}
```

```css hidden live-sample___cover_contain
body::before {
  content: "contain vs cover";
}
#A,
#B {
  width: 140px;
}
#A::after {
  content: " ( contain )";
}
#B::after {
  content: " ( cover ) ";
}
```

{{EmbedLiveSample("cover_contain", "100%", "420")}}

Wählen Sie verschiedene Radioknöpfe und scrollen Sie den Scrollport, um die Effekte der Werte `cover` und `contain` auf Animationen zu vergleichen.

Lassen Sie uns die anderen `<timeline-range-name>` Schlüsselwortwerte betrachten!

### Entry und Exit

Um die gesamte Animation nur dann ablaufen zu lassen, wenn das Subjekt dabei ist, den Scrollport zu betreten oder zu verlassen, verwenden Sie die Werte `entry` oder `exit`. Bei diesen beiden Werten basiert der Animationsanbindungsbereich auf der Größe des animierten Elements und nicht auf der Größe des Scrollports.

#### Entry

Bei `entry` tritt `0%`-Fortschritt im Moment ein, wenn das animierte Element beginnt, den Scrollport zu betreten, wenn die Startkante des Subjekts die Endkante des Scrollports überquert.

Die gesamte Animation erfolgt, wenn das Subjekt ins Sichtfeld gelangt und endet, wenn es vollständig sichtbar wird oder wenn es die Startkante erreicht; was auch immer zuerst eintritt. Ist das animierte Element kleiner als der Scrollport, entspricht der Animationsanbindungsbereich der Größe des Subjekts.

{{EmbedLiveSample("svg_entry_only", "100%", "500")}}

Die Position bei `0%`-Fortschritt wird in Gelb dargestellt. Die Position bei `100%`-Fortschritt wird in Rot dargestellt. Wenn das animierte Element größer als der Scrollport ist, überlappen sich diese beiden Positionen, was durch einen gestreiften Hintergrund angezeigt wird.

Bei `entry` entspricht der Animationsanbindungsbereich entweder der Größe des animierten Elements oder der Größe des Containers, je nachdem, was kleiner ist. Wenn das Subjekt größer als der Scrollport ist, entspricht der Animationsanbindungsbereich dem gesamten Scrollport. Bei `entry` tritt `100%` ein, wenn die Endkante des Subjekts die Endkante des Scrollports überquert oder, wenn das animierte Element in Scrollrichtung größer als der Scrollport ist, wenn die Startkante des animierten Elements die Startkante des Scrollports erreicht.

Die Einstellung `animation-range-start: entry` ist dasselbe wie die Einstellung `animation-range-start: cover`.
Die Einstellung `animation-range-end: entry` ist gleichbedeutend mit `animation-range-end: contain`.

```html hidden live-sample___svg_entry_only
<div>
  <svg viewBox="-60 400 530 980" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="700" />
    <rect class="medium end" width="100" height="250" x="120" y="500" />
    <rect class="large end" width="100" height="500" x="230" y="500" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="120" y="750" />
    <rect class="large start" width="100" height="500" x="230" y="750" />
    <rect width="100" height="250" x="230" y="750" fill="url(#g)" />
    <text y="460" x="10">entry</text>
    <text y="520" x="360">100%</text>
    <text y="690" x="-50">100%</text>
    <line x1="130" x2="350" y1="500" y2="500" />
    <line x1="-10" x2="120" y1="700" y2="700" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>
</div>
```

#### Exit

Der Wert `exit` ist das Gegenteil von `entry`.
Bei `exit` beginnt der Anbindungsbereich, wenn die Startkante des animierten Elements die Startkante des Scrollports überquert.

```html hidden live-sample___svg_exit_only
<div>
  <svg viewBox="-60 -1 530 800" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="120" y="250" />
    <rect class="large end" width="100" height="500" x="230" y="0" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="501" />
    <rect class="medium start" width="100" height="250" x="120" y="500" />
    <rect class="large start" width="100" height="500" x="230" y="250" />
    <rect width="100" height="250" x="230" y="250" fill="url(#g)" />
    <text y="600" x="10">exit</text>
    <text y="520" x="370">100%</text>
    <line x1="-5" x2="365" y1="500" y2="500" />
    <line x1="-10" x2="140" y1="550" y2="550" />
    <line x1="110" x2="360" y1="750" y2="750" />
    <text y="760" x="370">0%</text>
    <text y="560" x="-60">0%</text>
  </svg>
</div>
```

```css hidden live-sample___svg_entry_only live-sample___svg_exit_only
:root body div {
  margin: 0 0 -140px 0;
}
```

{{EmbedLiveSample("svg_exit_only", "100%", "460")}}

Der `0%`-Fortschritt erfolgt, wenn die Startkante des Subjekts die Startkante des Scrollports erreicht.
Der `100%` Fortschritt erfolgt, wenn die Endkante des Subjekts die Startkante überschreitet.
Die Einstellung `animation-range-start: exit 0%` entspricht der Einstellung `animation-range-start: contain 100%`.
Die Einstellung `animation-range-end: exit 100%` entspricht `animation-range-end: cover 100%`.

#### Vergleich von Entry und Exit

Es kann hilfreich sein, `entry` und `exit` nebeneinander zu betrachten, um zu verstehen, welche Auswirkungen die Größe des Subjekts auf den Animationsanbindungsbereich hat: bei diesen beiden Werten ist der Animationsanbindungsbereich nie größer als der Container.

```css live-sample___entry_exit
#A {
  animation-range: entry;
}
#B {
  animation-range: exit;
}
```

```css hidden live-sample___entry_exit
body::before {
  content: "Entry and exit";
}
#A,
#B {
  width: 140px;
}
#A::after {
  content: " ( entry )";
}
#B::after {
  content: " ( exit ) ";
}
```

Scrollen Sie die Ansichtsbox, um den Bereich der `entry`- und `exit`-Werte zu sehen, ändern Sie dann die Größe der Subjekte mit den Radiotasten und scrollen Sie erneut.

{{EmbedLiveSample("entry_exit", "100%", "400")}}

Wenn die Subjekte klein genug sind, um vollständig im Scrollport enthalten zu sein, befindet sich die Animationsanbindungszeitleiste am Anfang (`entry`) oder Ende (`exit`) des Scrollports und die Größe des Anbindungsbereichs ist auf die Größe des animierten Elements in Scrollrichtung beschränkt.

Mit `entry` und `exit` ist der Animationsbereich auf die Größe des Scrollports beschränkt, während das Element nicht beschränkt ist.

Wenn das Subjektelement die Größe des Scrollports hat oder größer ist:

- Im Fall von `entry` endet die Animation, wenn das Element den Scrollport in Scrollrichtung vollständig abdeckt.
- Im Fall von `exit` beginnt die Animation erst, wenn das Element den Scrollport in Scrollrichtung vollständig abdeckt.

Dies mag nicht der gewünschte Effekt sein. Wenn Sie möchten, dass eine Entry-Animation weiterhin läuft, bis das gesamte Element die Startkante des Scrollports vollständig durchlaufen hat, oder wenn Sie möchten, dass eine Exit-Animation beginnt, sobald das Element beginnt, die Endkante des Scrollports zu verlassen, müssen Sie `entry-crossing` und `exit-crossing` verwenden.

### Entry- und Exit-Crossing

Wenn das Subjektelement kleiner als der Scrollport ist und Sie möchten, dass die vollständige Animation abläuft, während es den Scrollport betritt oder verlässt, können Sie problemlos [`entry`](#entry) oder [`exit`](#exit) verwenden.

Wenn das Subjekt größer als der Scrollport ist, läuft die Animation nicht über den gesamten Verlauf des Elements, das den Scrollport betritt oder verlässt. Der Wert `entry` setzt den `100%`-Fortschritt auf den Punkt, an dem die Startkante des Elements die Startkante des Scrollports erreicht, bevor das Element den Scrollport vollständig betreten hat. Bei `exit` passiert der `0%`-Fortschritt, wenn die Endkante des Elements die Endkante des Scrollcontainers erreicht, während ein Teil des Subjekts bereits den Scrollport verlassen hat. Bei beiden Werten ist der Animationsanbindungsbereich kleiner als das Subjekt. Wenn dies nicht der gewünschte Effekt ist, könnten die `*-crossing`-Werte die Lösung sein, die Sie suchen.

#### Entry-Crossing

Der Wert `entry-crossing` stellt den Bereich dar, während dem das animierte Element die Endkante des Scrollports überquert, wobei `0%` Fortschritt erreicht wird, wenn die Startkante des Elements mit der Endkante des Scrollports übereinstimmt und `100%` Fortschritt erreicht wird, wenn die Endkante des Elements die Endkante des Scrollports erreicht, was bedeutet, dass es den Scrollport vollständig betreten hat.

{{EmbedLiveSample("svg_entry-crossing", "100%", "600")}}

Es kann hilfreich sein, die beiden Werte in einem Live-Beispiel zu vergleichen.

```css live-sample___entry_crossing
#A {
  animation-range: entry;
}
#B {
  animation-range: entry-crossing;
}
```

```css hidden live-sample___entry_crossing
body::before {
  content: "entry vs. entry-crossing";
}
#A::after {
  content: " ( entry )";
}
#B::after {
  content: " ( entry-crossing ) ";
}
```

Wählen Sie die verschiedenen Höhenwerte aus und scrollen Sie dann, um `entry` mit `entry-crossing` für jede Größe zu vergleichen.

{{EmbedLiveSample("entry_crossing", "100%", "400")}}

Beachten Sie, wie die Effekte ähnlich sind, außer wenn `500px` ausgewählt ist und das animierte Element größer als der Container ist.
Der `entry-crossing`-Bereich produziert die gleichen Ergebnisse wie `entry`, wenn das Element gleich oder kleiner als der Scrollport ist, aber wenn das Element größer als der Scrollport ist, tritt `100%` später ein, und zwar erst, wenn die Endkante in den Sichtbereich eingetreten ist.
Der Animationsanbindungsbereich entspricht der Größe des Subjekts und ist nicht auf die Größe des Scrollports beschränkt.

```html hidden live-sample___svg_entry-crossing
<div>
  <svg viewBox="-60 -1 530 1252" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="700" />
    <rect class="medium end" width="100" height="250" x="120" y="500" />
    <rect class="large end" width="100" height="500" x="230" y="500" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="120" y="750" />
    <rect class="large start" width="100" height="500" x="230" y="750" />
    <rect
      class="orange"
      width="100"
      height="250"
      x="230"
      y="750"
      fill="url(#g)" />
    <text y="460" x="10">entry</text>
    <text y="520" x="360">100%</text>
    <text y="690" x="-50">100%</text>
    <line x1="130" x2="350" y1="500" y2="500" />
    <line x1="-10" x2="120" y1="700" y2="700" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>

  <svg viewBox="-60 -1 530 1252" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="700" />
    <rect class="medium end" width="100" height="250" x="120" y="500" />
    <rect class="large end" width="100" height="500" x="230" y="250" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="120" y="750" />
    <rect class="large start" width="100" height="500" x="230" y="750" />
    <text y="200" x="0">entry-crossing</text>
    <text y="260" x="330">100%</text>
    <text y="490" x="80">100%</text>
    <text y="690" x="-50">100%</text>
    <line x1="225" x2="345" y1="250" y2="250" />
    <line x1="0" x2="230" y1="500" y2="500" />
    <line x1="-10" x2="120" y1="700" y2="700" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>
</div>
```

```css hidden hidden live-sample___svg_entry-crossing
:root body div {
  margin: -70px 0 -100px;
}
```

#### Exit-Crossing

Der Wert `exit-crossing` stellt den Bereich dar, während dem das animierte Element die Startkante des Scrollports überquert, wobei `0%` Fortschritt erreicht wird, wenn die Startkante des Elements mit der Startkante des Scrollports übereinstimmt und `100%` Fortschritt erreicht wird, wenn die Endkante des Elements die Startkante des Scrollports erreicht.

{{EmbedLiveSample("svg_exit_crossing", "100%", "540")}}

Bei `exit-crossing` beginnt die Animation, sobald das Subjekt den Scrollport bedeckt (bei `exit` beginnt die Animation erst, wenn die Endkante des Subjekts in den sichtbaren Bereich gelangt). In beiden Fällen läuft die Animation, bis das Subjekt die Startkante des Scrollports vollständig verlässt.

```css live-sample___exit_crossing
#A {
  animation-range: exit;
}
#B {
  animation-range: exit-crossing;
}
```

```css hidden live-sample___exit_crossing
body::before {
  content: "exit vs. exit-crossing";
}
#A::after {
  content: " ( exit )";
}
#B::after {
  content: " ( exit-crossing ) ";
}
```

Der `exit-crossing`-Wert produziert die gleichen Ergebnisse wie `exit`, wenn das Element gleich oder kleiner als der Scrollport ist, aber wenn das Element größer als der Scrollport ist, tritt `0%` früher ein, und zwar sobald die Startkante des Elements die Startkante des Scrollports erreicht, anstatt zu warten, bis die Endkante des Elements den Scrollport erreicht.

{{EmbedLiveSample("exit_crossing", "100%", "400")}}

Wie bei `entry-crossing` entspricht der Animationsanbindungsbereich der Größe des Subjekts und ist nicht auf die Größe des Scrollports beschränkt.

```html hidden live-sample___svg_exit_crossing
<div>
  <svg viewBox="-60 -1 530 1052" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="120" y="250" />
    <rect class="large end" width="100" height="500" x="230" y="0" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="501" />
    <rect class="medium start" width="100" height="250" x="120" y="500" />
    <rect class="large start" width="100" height="500" x="230" y="250" />
    <rect width="100" height="250" x="230" y="250" fill="url(#g)" />
    <text y="800" x="-10">exit</text>
    <text y="520" x="370">100%</text>
    <line x1="-5" x2="365" y1="500" y2="500" />
    <line x1="-10" x2="140" y1="550" y2="550" />
    <line x1="110" x2="360" y1="750" y2="750" />
    <text y="760" x="370">0%</text>
    <text y="560" x="-60">0%</text>
  </svg>
  <svg viewBox="-60 -1 530 1052" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="120" y="250" />
    <rect class="large end" width="100" height="500" x="230" y="0" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="501" />
    <rect class="medium start" width="100" height="250" x="120" y="500" />
    <rect class="large start" width="100" height="500" x="230" y="500" />
    <text y="800" x="-10">exit-crossing</text>
    <text y="520" x="370">100%</text>
    <line x1="-5" x2="365" y1="500" y2="500" />
    <line x1="-10" x2="140" y1="550" y2="550" />
    <line x1="110" x2="360" y1="750" y2="750" />
    <text y="760" x="370">0%</text>
    <text y="560" x="-60">0%</text>
  </svg>
</div>
```

```css hidden hidden live-sample___svg_exit_crossing
:root body div {
  margin-bottom: -300px;
}
```

```html hidden live-sample___svg_exit_crossing live-sample___svg_entry_only live-sample___svg_exit_only live-sample___svg_contain live-sample___svg_cover live-sample___svg_entry-crossing
<svg id="gradient">
  <defs>
    <linearGradient
      id="g"
      x1="0"
      y1="0"
      x2="20"
      y2="20"
      spreadMethod="repeat"
      gradientUnits="userSpaceOnUse">
      <stop offset="50%" stop-color="red" />
      <stop offset="50%" stop-color="yellow" />
    </linearGradient>
  </defs>
</svg>
```

```css hidden live-sample___svg_exit_crossing live-sample___svg_entry_only live-sample___svg_exit_only live-sample___svg_contain live-sample___svg_cover live-sample___svg_entry-crossing
body::before {
  display: block;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5rem;
}
div {
  display: flex;
  gap: 20px;
}
svg {
  width: 260px;
}
#gradient {
  height: 1px;
  position: absolute;
  width: 1px;
}
rect {
  stroke: black;
  stroke-width: 3;
}
.start {
  fill: yellow;
}
.end {
  fill: red;
}
.container {
  fill: none;
}
text {
  font: 40px monospace;
  fill: black;
}
line {
  stroke: black;
  stroke-width: 8;
  stroke-dasharray: 10;
}
```

<!--
### Andere Fortschrittswerte

In diesem Leitfaden haben wir die Fortschrittspunkte `0%` und `100%` erwähnt. Die Animationsbereichswerte sind nicht auf diese Fortschrittspunkte beschränkt. Sie können jeden der benannten Animationsbereiche um einen festgelegten Betrag oder einen Prozentsatz des vollständigen Animationsanbindungsbereichs einfügen. Dies wird im [Insets]() Leitfaden behandelt. -->

## Siehe auch

- {{cssxref("timeline-range-name")}} Datentyp
- [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Scroll-gesteuerte Animationszeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- Modul [Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [Web-Animations-API](/de/docs/Web/API/Web_Animations_API)
