---
title: Verständnis der Zeitachsenbereichsnamen
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names
l10n:
  sourceCommit: e5cd1cab36e2fdcf5dfe28e10b0a7cb235354e62
---

Standardmäßig verfolgen [Ansichtsfortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente über den gesamten Scroll-Bereich. Die Animationszeitachse beginnt, wenn das erste Pixel der Startkante des Elements die Endkante des Scroll-Bereichs überquert, und endet, wenn die Endkante des Elements die Startkante des Scroll-Bereichs überquert. Sie können diesen Standardbereich für die Animationszuordnung ändern. Zum Beispiel können Sie die Ansichtsfortschritts-Zeitachse einschränken, sodass sie erst beginnt, wenn das betroffene Element vollständig in den Scroll-Bereich eingetreten ist.

Dieser Leitfaden erklärt, wie Sie Zeitachsenbereichsnamen ändern, indem er speziell die verschiedenen Zeitachsenbereichsnamen untersucht, ihre Bedeutungen und wie sie verwendet werden.

Die Begrenzung der Animationszeitachse auf einen bestimmten Teil eines benannten Animationszeitachsenbereichs wird im [Leitfaden zum Einsetzen von Scroll-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) diskutiert.

## Überblick über die Ansichtsfortschritts-Zeitachse

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden erstellt, indem {{cssxref("@keyframes")}} Animationen an ein Element mithilfe der {{cssxref("animation-name")}} Eigenschaft (oder der {{cssxref("animation")}} Kurzschreibweise) angehängt werden. Die Keyframes definieren das Verhalten der Animation, während die {{cssxref("animation-timeline")}} bestimmt, wann und wie das Element diese Keyframes durchläuft.

Standardmäßig ist die Zeitachse der Animation die dokumentbasierte, zeitgesteuerte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline). Bei [CSS-scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) wird die Zeitachse der Animation oder der Fortschritt entweder durch das Scrollen des Nutzers ([Scroll-Fortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)) oder die Sichtbarkeit des Elements ([Ansichtsfortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)) angetrieben, anstatt durch den Zeitverlauf.

Bei Ansichtsfortschritts-Zeitachsen ist der Fortschritt durch die Keyframes an die Sichtbarkeit des betroffenen Elements innerhalb des Scrollers und dessen Position innerhalb des Scrollers gebunden. Wenn das Element in den Sichtbereich eintritt, schreitet die Zeitachse voran. Wenn der Nutzer das Scrollen rückgängig macht, kehrt die Zeitachse um. Mit anderen Worten, wenn das Element sichtbar wird oder aus dem Sichtbereich entfernt wird, schreitet die Zeitachse voran oder kehrt um. Die Animation findet nur statt, wenn das betroffene Element innerhalb seines Scroll-Bereichs sichtbar ist. Wenn das Scrollen aufhört, während das Element sichtbar ist, pausiert die Animation.

### Standard-Ansichtsfortschritts-Zeitachse

Standardmäßig beginnt der Fortschritt der [Ansichtsfortschritts-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), wenn die Startkante des verfolgten Objekts die Endkante des Scroll-Bereichs schneidet und endet, wenn die Endkante des Objekts den Scroll-Bereich an der Startkante verlässt. Dies sind in der Regel die oberen und unteren Kanten des Objekts und des Scroll-Bereichs beim vertikalen Scrollen und die linken und rechten oder rechten und linken Kanten beim horizontalen Scrollen, je nach Schreibrichtung.

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

Im folgenden Beispiel versuchen Sie, nach unten zu scrollen. Beachten Sie, wie die Animation beginnt, sobald sich die obere Kante des animierten Elements mit der unteren Kante des Scroll-Containers ausrichtet und endet, wenn die untere Kante sich mit der oberen Kante des Containers ausrichtet, unabhängig davon, wie hoch das animierte Element ist.

{{EmbedLiveSample("initial", "100%", "400")}}

Der Schreibrichtung und die Scroll-Richtung des Scroll-Containers bestimmen dessen Start- und Endkanten.

## Der Animationszuordnungsbereich

Standardmäßig wird das Element die gesamte Zeit animiert, während irgendein Teil des betroffenen Elements sichtbar ist. Das bedeutet, der Standard-**Animationszuordnungsbereich** ist die Summe der Höhe des Scroll-Containers und der Höhe des betroffenen Elements, wobei diese zusätzliche Höhe am Endrand des Scrolls endet.

Im vorherigen Beispiel ist der Scroll-Container standardmäßig `250px` hoch und das animierte Element ist `50px` hoch, was bedeutet, der vertikale Animationszuordnungsbereich ist `300px` hoch. Wenn das Objekt auf `250px` gesetzt ist, wird der Bereich `500px`; wenn das Element auf `500px` gesetzt ist, wächst die Größe des Animationszuordnungsbereichs auf `750px`.

Das Modul für [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) bietet Mechanismen zur Definition verschiedener Animationszuordnungsbereiche. Die Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}}, die beide über die Kurzschreibweise {{cssxref("animation-range")}} gesetzt werden können, definieren den Zuordnungsbereich für die Startkante und die Endkante des Animationsbereichs, zusammen mit etwaigen Einpassungen von einer der beiden Kanten aus.

Die Eigenschaften des Animationsbereichs akzeptieren das Schlüsselwort `normal`, einen {{cssxref("timeline-range-name")}}, eine {{cssxref("length-percentage")}}, oder sowohl einen `<timeline-range-name>` als auch die `<length-percentage>`. In diesem Leitfaden behandeln wir ausschließlich die Werte für die `<timeline-range-name>` Komponente des Wertes.

Die Längen-Prozentwerte, wie `20%` oder `100px`, passen die Animationszeitachse von den benannten Animationszuordnungsbereichen des gesetzten Betrags an, wobei der Wert standardmäßig `0` ist. Dies wird in [Verständnis der Einpassungen von Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) behandelt.

## Zeitachsenbereichsnamen

Der Wertetyp `<timeline-range-name>` akzeptiert sechs Schlüsselwörter: `cover`, `contain`, `entry`, `exit`, `entry-crossing`, und `exit-crossing`. Jedes dieser steht für einen vordefinierten _benannten Zeitachsenbereich_. Ein benannter Zeitachsenbereich ist ein benannter Abschnitt einer Animationszeitachse. Diese Schlüsselwörter ermöglichen es dem Entwickler, die Basis des Animationszuordnungsbereichs festzulegen, auf die sich Offsets beziehen. Der Beginn des Segments wird als `0%` Fortschritt durch den Bereich dargestellt; das Ende des Segments wird als `100%` Fortschritt durch den Bereich dargestellt. Wo diese Punkte liegen, hängt vom verwendeten benannten Bereich ab.

### Cover

Der Animationszuordnungsbereich in den vorherigen Beispielen "deckt" den gesamten Bereich ab. Dieser Bereich entspricht dem vollen Bereich der Ansichtsfortschritts-Zeitachse. `0%` Fortschritt stellt den Punkt dar, an dem die Startgrenze des Betreffs mit der Endkante des Scroll-Bereichs ausgerichtet ist, und `100%` Fortschritt repräsentiert den Punkt, an dem die Endgrenze des Betreffs die Startkante des Scroll-Bereichs erreicht. Wie wir gesehen haben, ist die Größe des `cover` Bereichs die Summe aus den Abmessungen von Betreff und Scroll-Bereich in Scrollrichtung. In allen bisherigen Beispielen ist die Höhe des Animationszuordnungsbereichs die Höhe des Containers plus die Höhe des animierten Elements.

Der `cover` benannte Zeitachsenbereich ist der Standardbereich. Wir hätten den `<timeline-range-name>` ausdrücklich setzen können, um die gleichen Ergebnisse zu erzielen:

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

Das Bild zeigt die Animationszeitachse. Die Position des Elements, wenn es den Anfang des Animationszuordnungsbereichs `0%` erreicht, ist als gelber Block dargestellt. Dies stellt die Position des Elements dar, wenn das `from` Keyframe angewendet wird. Der rote Block repräsentiert die Position des betroffenen Elements relativ zum Scroll-Bereich, wenn das `to` Keyframe angewendet wird. Dies ist die Position des animierten Elements, wenn es das Ende der Animation erreicht.

Abhängig von der Größe des betroffenen Elements und des gewählten Zeitachsenbereichs können sich Start- und Endpositionen überschneiden. Überschneidungsbereiche (wie in nachfolgenden Diagrammen zu sehen) werden durch gestreifte rote und gelbe Bereiche dargestellt.

### Contain

Der `contain` benannte Zeitachsenbereich hält die Animation vollständig innerhalb des Scroll-Bereichs — der Bereich beginnt, wenn das animierte Element 100% sichtbar ist, und endet, wenn es nicht mehr vollständig sichtbar ist, falls es vollständig sichtbar sein kann.

Der `contain` Wert repräsentiert den Bereich, in dem die Hauptbox entweder vollständig im Sichtfortschrittsbereich innerhalb des Scroll-Bereichs enthalten ist oder ihn vollständig abdeckt, abhängig davon, ob das betroffene Element kleiner (vollständig enthalten werden kann) oder größer als der Scroll-Bereich ist.

- Wenn das Element in Scrollrichtung kleiner als der Scroll-Bereich ist, tritt `0%` ein, wenn die Endgrenze des animierten Elements mit der Endkante des Scroll-Bereichs übereinstimmt, und `100%`, wenn die Startgrenze des animierten Elements mit der Startkante des Scroll-Bereichs übereinstimmt. Mit anderen Worten, erstreckt sich der `contain` Wert von dem Punkt, an dem das betroffene Element zuerst vollständig im Scrollbereich ist (`0%`), bis zu dem Punkt, an dem es den Scrollbereich nicht mehr vollständig umfasst (`100%`).

- Wenn das Element größer als der Scroll-Bereich ist, ist der `0%` Fortschritt der Punkt, an dem die Startgrenze des animierten Elements die Startkante des Scroll-Bereichs erreicht, und `100%` ist der Punkt, an dem die Endgrenze an der Endkante angelegt werden. Mit anderen Worten: Wenn die Animation größer ist als ihr Container, ist das animierte Element nie vollständig sichtbar, da es nicht "enthalten" ist. Die Animation beginnt, wenn die Startkante die Startkante des Scroll-Bereichs erreicht, und endet, wenn die Endkante des animierten Elements die Endkante des Containers erreicht.

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

In diesem Beispiel ist die ursprüngliche Höhe des animierten Elements 20% der Höhe des Scroll-Bereichs und kann daher vollständig darin enthalten sein. Wie zuvor erklärt, sollte die Animation starten, sobald das Element den Scroll-Bereich zu betreten beginnt, und enden, sobald es beginnt, ihn zu verlassen.

Wenn Sie die `500px`-Option auswählen, wird das Subjekt doppelt so hoch wie der Scroll-Bereich. Der Animationsbereich beginnt, wenn das betroffene Element den Scroll-Bereich zuerst vollständig bedeckt, wobei `0%` auftritt, wenn die Startkante die Startkante des Containers erreicht. Es endet, wenn das Element den Scroll-Bereich nicht mehr vollständig bedeckt, wobei `100%` auftritt, wenn die Endkante die Endkante des Containers erreicht.

Wenn das Subjekt die gleiche Größe wie der Scroll-Container hat, wie bei `250px`, findet die Animation trotzdem statt, jedoch über `0px`. Wenn `0%` und `100%` gleichzeitig auftreten, ist die Animation augenblicklich. Der Unterschied im Styling ist nur erkennbar, weil die Eigenschaften, die im `100%` Keyframe-Status definiert sind, nach dem Ende der Animation angewendet werden. Dies liegt daran, dass die {{cssxref("animation-fill-mode")}} Eigenschaft auf `forwards` gesetzt ist. Andernfalls würde das mittlere `250px`-Subjekt, das die gleiche Höhe wie der Scroll-Container hat, überhaupt nicht zu animieren scheinen.

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

Die Animation findet statt, wenn sich das Element in den Bereichen befindet, die in dem `50px` Beispiel durch das Weiß des Containers und in den `250px` und `500px` Beispielen durch die rot/gelben Bereiche dargestellt sind.

Für manche kann es hilfreich sein, die Werte `cover` und `contain` zu vergleichen und gegenüberzustellen. Wir können die Kurzschreibweise der Eigenschaft `animation-range` verwenden, um die Eigenschaften `animation-range-start` und `animation-range-end` auf denselben `<animation-name-range>` Wert zu setzen:

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

Wählen Sie verschiedene Optionsfelder aus und scrollen Sie den Scroll-Bereich, um die Effekte der Werte `cover` und `contain` auf die Animations-Zeitachsen zu vergleichen.

Schauen wir uns die anderen Schlüsselwortwerte für `<timeline-range-name>` an!

### Entry und exit

Um die gesamte Animation nur dann auszuführen, wenn das Subjekt den Scroll-Bereich betritt oder verlässt, verwenden Sie die Werte `entry` bzw. `exit`. Mit diesen beiden Werten basiert der Animationszuordnungsbereich auf der Größe des animierten Elements, nicht der Größe des Scroll-Bereichs.

#### Entry

Mit `entry` tritt `0%` Fortschritt ein, sobald das animierte Element beginnt, den Scroll-Bereich zu betreten, wenn die Startkante des Subjekts die Endkante des Scroll-Bereichs überquert.

Die gesamte Animation findet statt, während das Subjekt sichtbar wird, endet, wenn es vollständig sichtbar wird oder die Startkante erreicht; je nachdem, was zuerst eintritt. Wenn das animierte Element kleiner als der Scroll-Bereich ist, ist der Animationszuordnungsbereich die Größe des Subjekts.

{{EmbedLiveSample("svg_entry_only", "100%", "500")}}

Die Position bei `0%` Fortschritt wird in Gelb angezeigt. Die Position bei `100%` Fortschritt ist in Rot dargestellt. Wenn das animierte Element größer als der Scroll-Bereich ist, überlappen sich diese beiden Positionen, was durch einen gestreiften Hintergrund angezeigt wird.

Bei `entry` ist der Animationszuordnungsbereich entweder die Größe des animierten Elements oder die Größe des Containers, je nachdem, welche kleiner ist. Wenn das Subjekt größer als der Scroll-Bereich ist, ist der Animationszuordnungsbereich der gesamte Scroll-Bereich. Bei `entry` tritt `100%` ein, wenn die Endkante des Subjekts die Endkante des Scroll-Bereichs erreicht oder, wenn das animierte Element in Scrollrichtung größer als der Scroll-Bereich ist, wenn die Startkante des animierten Elements die Startkante des Scroll-Bereichs erreicht.

Das Setzen von `animation-range-start: entry` entspricht dem Setzen von `animation-range-start: cover`.
Das Setzen von `animation-range-end: entry` entspricht dem Setzen von `animation-range-end: contain`.

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

Der `exit` Wert ist das Gegenteil von `entry`.
Mit `exit` beginnt der Zuordnungsbereich, wenn die Startkante des animierten Elements die Startkante des Scroll-Bereichs überquert.

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

Der `0%`-Fortschritt tritt ein, wenn die Startkante des Subjekts die Startkante des Scroll-Bereichs erreicht.
Der `100%`-Fortschritt tritt ein, wenn die Endkante des Subjekts die Startkante durchquert.
Das Setzen von `animation-range-start: exit 0%` entspricht dem Setzen von `animation-range-start: contain 100%`.
Das Setzen von `animation-range-end: exit 100%` entspricht `animation-range-end: cover 100%`.

#### Vergleich von entry und exit

Es kann nützlich sein, sich `entry` und `exit` nebeneinander anzusehen, um den Einfluss der Größe des Subjekts auf den Animationszuordnungsbereich zu verstehen: Bei diesen beiden Werten ist der Animationszuordnungsbereich nie größer als der Container.

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

Scrollen Sie den Ansichtsbereich, um den Bereich der `entry`- und `exit`-Werte zu sehen, ändern Sie dann die Größe der Subjekte mit den Optionsfeldern und scrollen Sie erneut.

{{EmbedLiveSample("entry_exit", "100%", "400")}}

Wenn die Subjekte klein genug sind, um vollständig im Scroll-Bereich enthalten zu sein, beginnt der Animationszuordnung-Zeitstrahl am Anfang (`entry`) oder Ende (`exit`) des Scroll-Bereichs, und die Größe des Zuordnungsbereichs ist auf die Größe des animierten Elements in der Scrollrichtung beschränkt.

Bei `entry` und `exit` ist der Animationsbereich auf die Größe des Scroll-Bereichs beschränkt, während das Element es nicht ist.

Wenn das Subjektelement die gleiche Größe wie der Scroll-Bereich hat oder größer ist:

- Im Falle von `entry` endet die Animation, wenn das Element den Scroll-Bereich vollständig in Scrollrichtung abdeckt.
- Im Falle von `exit` beginnt die Animation erst, wenn das Element den Scroll-Bereich in Scrollrichtung vollständig abdeckt.

Dies ist möglicherweise nicht der gewünschte Effekt. Wenn Sie möchten, dass eine Eintrittsanimation weiterläuft, bis das gesamte Element den Startrand des Scroll-Bereichs vollständig durchlaufen hat, oder wenn Sie möchten, dass eine Austrittsanimation beginnt, sobald das Element beginnt, den Endrand des Scroll-Bereichs zu verlassen, sollten Sie `entry-crossing` und `exit-crossing` verwenden.

### Entry- und exit-crossing

Wenn das Subjekt kleiner als der Scroll-Bereich ist, und Sie möchten, dass die vollständige Animation abläuft, während es in den Scroll-Bereich eintritt oder ihn verlässt, können Sie glücklich [`entry`](#entry) oder [`exit`](#exit) verwenden, entsprechend.

Wenn das Subjekt größer ist als der Scroll-Bereich, läuft die Animation nicht über den gesamten Eintritt oder Austritt des Scroll-Bereichs. Der `entry`-Wert setzt den `100%`-Fortschritt bei dem Punkt, an dem die Startkante des Elements die Startrichtung des Scroll-Bereichs erreicht, bevor das Element vollständig in den Scrollbereich eingetreten ist. Mit `exit` tritt der `0%`-Fortschritt ein, wenn die Endkante das Ende des Scroll-Behälters erreicht, während ein Teil des Subjekts den Scroll-Bereich bereits verlassen hat. Bei beiden Werten ist der Animationszuordnungsbereich kleiner als das Subjekt. Wenn dies nicht der gewünschte Effekt ist, könnten die `*-crossing`-Werte die Lösung sein, die Sie suchen.

#### Entry-crossing

Der `entry-crossing`-Wert repräsentiert den Bereich, während dessen das animierte Element die Endkante des Scroll-Bereichs überquert, mit `0%`-Fortschritt wird erreicht, wenn die Startkante des Elements sich mit der Endkante des Scroll-Bereichs ausrichtet und `100%` Fortschritt erreicht wird, wenn die Endkante des Elements die Endkante des Scroll-Bereichs erreicht, also wenn es vollständig in den Scroll-Bereich hineingezeichnet ist.

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
Der `entry-crossing`-Bereich bewirkt die gleichen Ergebnisse wie `entry`, wenn das Element gleich groß oder kleiner als der Scroll-Bereich ist, aber wenn das Element größer als der Scroll-Bereich ist, tritt `100%` später ein, nämlich erst wenn die Endkante den Sichtbereich erreicht hat.
Der Animationszuordnungsbereich entspricht der Größe des Subjekts und wird nicht auf die Größe des Scroll-Bereichs beschränkt.

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

#### Exit-crossing

Der `exit-crossing`-Wert repräsentiert den Bereich, währenddessen das animierte Element die Startkante des Scroll-Bereichs überquert, mit `0%`-Fortschritt wird erreicht, wenn die Startkante des Elements sich mit der Startkante des Scroll-Bereichs ausrichtet, und `100%` Fortschritt wird erreicht, wenn die Endkante des Elements die Startkante des Scroll-Bereichs erreicht.

{{EmbedLiveSample("svg_exit_crossing", "100%", "540")}}

Mit `exit-crossing` startet die Animation, sobald das Subjekt den Scroll-Bereich abdeckt (bei `exit` beginnt die Animation erst, wenn die Endkante des Subjekts in den Sichtbereich eintritt). In beiden Fällen setzt sich die Animation fort, bis das Subjekt den Start-Rand des Scroll-Bereichs vollständig verlassen hat.

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

Der `exit-crossing` erzeugt die gleichen Ergebnisse wie `exit`, wenn das Element gleich oder kleiner als der Scroll-Bereich ist. Wenn das Element jedoch größer als der Scroll-Bereich ist, tritt `0%` früher ein, nämlich sobald die Startkante des Elements die Startkante des Scroll-Bereichs erreicht, anstatt zu warten, bis die Endkante des Elements in den Scroll-Bereich eintritt.

{{EmbedLiveSample("exit_crossing", "100%", "400")}}

Wie bei `entry-crossing` entspricht der Animationszuordnungsbereich der Größe des Subjekts und wird nicht auf die Größe des Scroll-Bereichs beschränkt.

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

### Andere Fortschrittswerte

In diesem Leitfaden haben wir die Fortschrittspunkte `0%` und `100%` erwähnt. Die Animationsbereichswerte sind nicht auf diese Fortschrittspunkte begrenzt. Sie können einer der benannten Animationsbereichseinheiten eine bestimmte Menge oder einen Prozentsatz des gesamten Animationszuordnungsbereichs abziehen. Dies wird im [Leitfaden zu den Einsetzungen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) behandelt.

## Siehe auch

- {{cssxref("timeline-range-name")}} Datentyp
- [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Scrollgesteuerte Animationszeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Verständnis der Zeiteinpassungen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets)
- [Modul für scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Modul für CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
