---
title: Verständigung von Zeitachsenbereichsnamen
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names
l10n:
  sourceCommit: 3d49f18251e1f3493ef2e3a70519603345f8b7dc
---

Standardmäßig verfolgen [Ansichtsfortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente über den gesamten Scrollbereich. Die Animationszeitachse beginnt, wenn das erste Pixel der Startränder des Elements die Endkante des Scrollbereichs überschreitet und endet, wenn die Endkante des Elements die Startkante des Scrollbereichs überschreitet. Sie können diesen standardmäßigen Animationsanheftungsbereich ändern. Beispielsweise können Sie die Ansichtsfortschritts-Zeitachse so einschränken, dass sie erst beginnt, wenn das Ziel-Element vollständig in den Scrollbereich eingetreten ist.

Dieser Leitfaden erklärt, wie Sie Zeitachsenbereichsnamen modifizieren, indem speziell die verschiedenen Zeitachsenbereichsnamen, ihre Bedeutungen und ihre Verwendung untersucht werden.

## Einführung in die Ansichtsfortschritts-Zeitachse

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden erstellt, indem {{cssxref("@keyframes")}}-Animationen an ein Element mit der {{cssxref("animation-name")}}-Eigenschaft (oder der {{cssxref("animation")}}-Kurzschreibweise) angehängt werden. Die Keyframes definieren das Verhalten der Animation, während die {{cssxref("animation-timeline")}} bestimmt, wann und wie das Element durch diese Keyframes fortschreitet.

Standardmäßig ist die Zeitachse der Animation die standardmäßige zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Bei [CSS-Scroll-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) wird der Fortschritt der Animation entweder durch den Bildlauf des Nutzers ([Scrollfortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)) oder die Sichtbarkeit des Elements ([Ansichtsfortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)) angetrieben, anstatt durch den Zeitablauf.

Mit Ansichtsfortschritts-Zeitachsen ist der Fortschritt der Keyframes an die Sichtbarkeit des Ziel-Elements innerhalb des Scrollers und seiner Position innerhalb des Scrollers gebunden. Wenn das Element den Viewport betritt, schreitet die Zeitachse voran. Wenn der Nutzer den Bildlauf umkehrt, kehrt die Zeitachse um. Mit anderen Worten, während das Element ins Sichtfeld gelangt oder dieses verlässt, schreitet die Zeitachse vor oder zurück. Die Animation tritt nur auf, wenn das Ziel innerhalb seines Scrollbereichs sichtbar ist. Hört der Bildlauf auf, während das Element im Sichtbereich ist, pausiert die Animation.

### Standardmäßige Ansichtsfortschritts-Zeitachse

Standardmäßig beginnt der Fortschritt der [Ansichtsfortschritts-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), wenn der Start-Rand des verfolgten Ziels die Endkante des Scrollbereichs schneidet, und endet, wenn der End-Rand des Ziels die Startkante des Scrollbereichs verlässt. Dies sind die oberen und unteren Kanten des Ziels und Scrollbereichs bei vertikalem Scrollen und die linken und rechten oder rechten und linken Kanten bei horizontalem Scrollen, abhängig vom Schreibmodus.

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
    body::before {
      content: "Your browser doesn't support view progress scrolling.";
      background-color: wheat;
      display: block;
      text-align: center;
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

Im folgenden Beispiel versuchen Sie, nach unten zu scrollen. Beachten Sie, wie die Animation genau dann beginnt, wenn die obere Kante des animierten Elements mit der unteren Kante des Scrollcontainers übereinstimmt und endet, bei Erreichen von `100%` Fortschritt, wenn die untere Kante mit der oberen Kante des Containers übereinstimmt, unabhängig davon, wie hoch das animierte Element ist.

{{EmbedLiveSample("initial", "100%", "400")}}

Der Schreibmodus und die Scrollrichtung des Scrollcontainers bestimmen die Start- und Endkanten des Scrollcontainers.

## Der Animationsanheftungsbereich

Standardmäßig wird das Element während der gesamten Zeit animiert, in der ein Teil des Ziel-Elements sichtbar ist. Das bedeutet, dass der standardmäßige **Animationsanheftungsbereich** die Summe aus der Höhe des Scrollcontainers und der Höhe des Ziel-Elements ist, wobei diese zusätzliche Höhe an der Endkante des Scrollbereichs liegt.

Im vorherigen Beispiel ist der Scrollcontainer `250px` hoch und das animierte Element ist standardmäßig `50px` hoch, was bedeutet, dass der vertikale Animationsanheftungsbereich `300px` hoch ist. Wenn das Ziel auf `250px` eingestellt ist, wird der Bereich `500px`; wenn das Element auf `500px` eingestellt ist, wächst die Größe des Anheftungsbereichs auf `750px`.

Das [CSS-Scroll-Animations](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul bietet Mechanismen zur Definition unterschiedlicher Animationsanheftungsbereiche. Die {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} Eigenschaften, die beide mit der {{cssxref("animation-range")}} Kurzschreibweise gesetzt werden können, definieren den Anheftungsbereich für den Start- und Endrand des Animationsbereichs, zusammen mit jeglichen Versätzen von beiden Kanten.

Die animation-range Eigenschaften akzeptieren das Schlüsselwort `normal`, einen {{cssxref("timeline-range-name")}}, einen {{cssxref("length-percentage")}}, oder sowohl einen `<timeline-range-name>` als auch den `<length-percentage>`. In diesem Leitfaden behandeln wir nur die Werte für die `<timeline-range-name>` Komponente des Wertes.

## Zeitachsenbereichs-Namen

Der `<timeline-range-name>` Wertstyp akzeptiert sechs Schlüsselwörter: `cover`, `contain`, `entry`, `exit`, `entry-crossing`, und `exit-crossing`. Jedes dieser Wörter stellt einen vordefinierten _benannten Zeitachsenbereich_ dar. Ein benannter Zeitachsenbereich ist ein benannter Abschnitt einer Animationszeitachse. Diese Schlüsselwörter ermöglichen es dem Entwickler, die Basis des Animationsanheftungsbereichs festzulegen, relativ zu der Offsets sind. Der Anfang des Abschnitts wird als `0%` Fortschritt durch den Bereich dargestellt; das Ende des Abschnitts wird als `100%` Fortschritt durch den Bereich dargestellt. Wo sich diese Punkte befinden, hängt vom verwendeten benannten Bereich ab.

### Cover

Der Animationsanheftungsbereich in den vorherigen Beispielen "deckt" alle den gesamten Bereich ab. Dieser Bereich stellt den gesamten Bereich der Ansichtsfortschritts-Zeitachse dar. `0%` Fortschritt bezeichnet den Punkt, an dem die Startrandkante des Ziels mit der Endkante des Scrollbereichs übereinstimmt, und `100%` Fortschritt bezeichnet den Punkt, an dem die Endrandkante des Ziels die Startkante des Scrollbereichs erreicht. Wie wir gesehen haben, ist die Größe des `cover` Bereichs die Summe der Größen der Ziel- und Scrollbereichsmaße in Scrollrichtung. In all den bisherigen Beispielen ist die Höhe des Animationsanheftungsbereichs die Höhe des Containers plus die Höhe des animierten Elements.

Der `cover` benannte Zeitachsenbereich ist der Standardbereich. Wir hätten den `<timeline-range-name>` explizit auf dasselbe Ergebnis setzen können:

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

Das Bild zeigt die Animationszeitachse. Die Position des Elements, wenn es den Start des Animationsanheftungsbereichs bei `0%` erreicht, wird als gelber Block dargestellt. Dies repräsentiert die Elementposition, wenn das `from` Keyframe angewendet wird. Der rote Block repräsentiert die Position des Zielelements relativ zum Scrollbereich, wenn das `to` Keyframe angewendet wird. Dies ist die Position des animierten Elements, wenn es das Ende der Animation erreicht.

Je nach Größe des Ziel-Elements und dem gewählten Zeitachsenbereich können sich Start- und Endposition überlappen. Bereiche der Überlappung (wie in nachfolgenden Diagrammen zu sehen) werden durch gestreifte rote und gelbe Bereiche dargestellt.

### Contain

Der `contain` benannte Zeitachsenbereich _enthält_ die Animation vollständig innerhalb des Scrollbereichs — der Bereich beginnt, wenn das animierte Element zu 100% sichtbar ist und endet, wenn es nicht mehr vollständig sichtbar ist, sofern es vollständig sichtbar sein kann.

Der `contain` Wert repräsentiert den Bereich, in dem das Hauptelement entweder vollständig vom oder vollständig über das Ansichtsfortschritts-Sichtbarkeitsbereich im Scrollbereich enthält, abhängig davon, ob das Zielelement kleiner (vollständig enthalten) oder größer als der Scrollbereich ist.

- Ist das Element in der Scrollrichtung kleiner als der Scrollbereich, tritt `0%` auf, wenn die Endrandkante des animierten Elements mit der Endkante des Scrollbereichs übereinstimmt, und `100%`, wenn die Startrandkante des animierten Elements mit der Startkante des Scrollbereichs übereinstimmt. Mit anderen Worten, der `contain` Wert reicht von dem Punkt, an dem das Zielelement erstmals vollständig vom Scrollbereich enthalten wird (`0%`), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollbereich enthalten wird (`100%`).

- Ist das Element größer als der Scrollbereich, ist der `0%` Fortschritt, wenn die Startrandkante des animierten Elements die Startkante des Scrollbereichs erreicht, und `100%`, wenn die Endrandkante mit der Endkante übereinstimmt. Mit anderen Worten, wenn die Animation größer als ihr Container ist, ist das animierte Element nie vollständig sichtbar, da es nicht "enthalten" im Scrollbereich ist. Die Animation beginnt, wenn die Startrandkante die Startkante des Scrollbereichs erreicht, und endet, wenn die Endrandkante des animierten Elements die Endkante des Containers erreicht.

- Ist das animierte Element gleich groß wie sein Container, wird die Animation dennoch ausgeführt, jedoch über `0px`, was für den Nutzer nicht sichtbar ist.

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

In diesem Beispiel beträgt die ursprüngliche Höhe des animierten Elements 20% der Höhe des Scrollbereichs und kann daher vollständig innerhalb desselben enthalten sein. Therefore, wie zuvor erklär, sollte die Animation beginnen, sobald das Element beginnt, in den Scrollbereich einzutreten, und enden, sobald es beginnt, den Scrollbereich zu verlassen.

Wenn Sie die `500px` Radiotaste auswählen, wird das Ziel doppelt so hoch wie der Scrollbereich. Der Animationsbereich beginnt, wenn das Zielelement erstmals den Scrollbereich vollständig abdeckt, wobei `0%` auftritt, wenn die Startrandkante die Startkante des Containers erreicht. Die Animation endet, wenn das Element den Scrollbereich nicht mehr vollständig abdeckt, wobei `100%` auftritt, wenn die Endrandkante die Endkante des Containers erreicht.

Wenn das Ziel genauso groß ist wie der Scrollcontainer, wie es ist, wenn `250px` ausgewählt ist, tritt die Animation dennoch auf, jedoch über `0px`. Da `0%` und `100%` zur gleichen Zeit auftreten, ist die Animation augenblicklich. Der Unterschied im Stil ist nur wahrnehmbar, da die in den `100%` Keyframe-Zustand definierten Eigenschaften nach dem Ende der Animation angewendet werden. Dies liegt daran, dass die {{cssxref("animation-fill-mode")}} Eigenschaft auf `forwards` gesetzt ist. Andernfalls würde der mittelgroße `250px` Ziel, der dieselbe Höhe wie der Scrollcontainer hat, überhaupt nicht animiert erscheinen.

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

Die Animation tritt auf, wenn sich das Element innerhalb der durch das Weiß des Containers im `50px` Beispiel und durch die rot/gelben Bereiche in den `250px` und `500px` Beispielen dargestellten Bereiche befindet.

Es kann für einige hilfreich sein, die `cover` und `contain` Werte zu vergleichen und gegenüberzustellen. Wir können die Kurzschreibweise `animation-range` Eigenschaft verwenden, um die `animation-range-start` und `animation-range-end` Eigenschaften auf denselben `<animation-name-range>` Wert einzustellen:

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

Wählen Sie verschiedene Radiotasten aus und scrollen Sie den Scrollbereich, um die Effekte der `cover` und `contain` Werte auf Animationszeitachsen zu vergleichen.

Lassen Sie uns die anderen `<timeline-range-name>` Schlüsselwert-Werte betrachten!

### Entry und exit

Um die gesamte Animation nur dann stattfinden zu lassen, wenn das Ziel dabei ist, den Scrollbereich zu betreten oder zu verlassen, verwenden Sie die `entry` oder `exit` Werte, je nachdem. Mit diesen beiden Werten basiert der Animationsanheftungsbereich auf der Größe des animierten Elements und nicht auf der Größe des Scrollbereichs.

#### Entry

Bei `entry` tritt `0%` Fortschritt in dem Moment ein, in dem das animierte Element beginnt, den Scrollbereich zu betreten, wenn die Startrandkante des Ziels die Endkante des Scrollbereichs kreuzt.

Die gesamte Animation findet statt, während das Ziel ins Sichtfeld kommt und endet, wenn es vollständig sichtbar wird oder wenn es die Startkante erreicht; je nachdem, was zuerst eintritt. Wenn das animierte Element kleiner als der Scrollbereich ist, ist der Animationsanheftungsbereich die Größe des Ziels.

{{EmbedLiveSample("svg_entry_only", "100%", "500")}}

Die Position bei `0%` Fortschritt wird in Gelb dargestellt. Die Position bei `100%` Fortschritt wird in Rot angezeigt. Wenn das animierte Element größer als der Scrollbereich ist, überlappen sich diese beiden Positionen, was durch einen gestreiften Hintergrund gekennzeichnet ist.

Bei `entry` ist der Animationsanheftungsbereich entweder die Größe des animierten Elements oder die Größe des Containers, je nachdem, was kleiner ist. Ist das Ziel größer als der Scrollbereich, ist der Animationsanheftungsbereich der gesamte Scrollbereich. Bei `entry` tritt `100%` auf, wenn die Endrandkante des Ziels die Endkante des Scrollbereichs schneidet oder, wenn das animierte Element in der Scrollrichtung größer als der Scrollbereich ist, wenn die Startrandkante des animierten Elements die Startkante des Scrollbereichs erreicht.

Die Einstellung `animation-range-start: entry` entspricht der Einstellung `animation-range-start: cover`.
Die Einstellung `animation-range-end: entry` entspricht der Einstellung `animation-range-end: contain`.

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
Bei `exit` beginnt der Anheftungsbereich, wenn die Startrandkante des animierten Elements die Startkante des Scrollbereichs kreuzt.

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

Der `0%` Fortschritt tritt ein, wenn die Startrandkante des Ziels die Startkante des Scrollbereichs erreicht.
Der `100%` Fortschritt tritt ein, wenn die Endrandkante des Ziels die Startkante schneidet.
Die Einstellung `animation-range-start: exit 0%` entspricht der Einstellung `animation-range-start: contain 100%`.
Die Einstellung `animation-range-end: exit 100%` entspricht der Einstellung `animation-range-end: cover 100%`.

#### Vergleich von entry und exit

Es kann helfen, `entry` und `exit` nebeneinander zu betrachten, um den Einfluss der Größe des Ziels auf den Animationsanheftungsbereich zu verstehen: mit diesen beiden Werten ist der Animationsanheftungsbereich nie größer als der Container.

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

Scrollen Sie die Viewbox, um die Reichweite der `entry` und `exit` Werte zu sehen, ändern Sie dann die Größe der Ziele mit den Radiotasten und scrollen Sie erneut.

{{EmbedLiveSample("entry_exit", "100%", "400")}}

Wenn die Ziele klein genug sind, um vollständig im Scrollbereich enthalten zu sein, befindet sich der Zeitrahmen des Animationsanheftungsbereichs am Anfang (`entry`) oder Ende (`exit`) des Scrollbereichs, und die Größe des Anheftungsbereichs ist auf die Größe des animierten Elements in der Scrollrichtung beschränkt.

Bei `entry` und `exit` ist der Animationsbereich auf die Größe des Scrollbereichs beschränkt, während das Element nicht ist.

Wenn das Zielelement die Größe des Scrollbereichs oder größer hat:

- Im Falle von `entry` endet die Animation, wenn das Element den Scrollbereich in der Scrollrichtung vollständig abdeckt.
- Im Falle von `exit` beginnt die Animation erst, wenn das Element den Scrollbereich in der Scrollrichtung vollständig abdeckt.

Dies ist möglicherweise nicht der Effekt, den Sie möchten. Wenn Sie möchten, dass eine Eintrittsanimation so lange läuft, bis das gesamte Element die Startkante des Scrollbereichs erreicht hat, oder wenn Sie möchten, dass eine Austrittsanimation beginnt, sobald das Element beginnt, die Endkante des Scrollbereichs zu verlassen, müssen Sie `entry-crossing` und `exit-crossing` verwenden.

### Entry- und exit-crossing

Wenn das Zielelement kleiner ist als der Scrollbereich und Sie möchten, dass die gesamte Animation stattfindet, während es den Scrollbereich betritt oder verlässt, können Sie glücklich [`entry`](#entry) oder [`exit`](#exit) verwenden, je nachdem.

Wenn das Ziel größer als der Scrollbereich ist, läuft die Animation nicht über die vollständige Länge des Elements, während es den Scrollbereich betritt oder verlässt. Der `entry` Wert setzt den `100%` Fortschritt auf den Punkt, an dem das Element die Startkante des Scrollbereichs erreicht, bevor das Element vollständig in den Scrollbereich eingetreten ist. Bei `exit` tritt der `0%` Fortschritt auf, wenn die Endrandkante des Elements die Endkante des Scrollcontainers erreicht hat, wenn ein Teil des Ziels bereits den Scrollbereich verlassen hat. Bei beiden Werten ist der Animationsanheftungsbereich kleiner als das Ziel. Wenn dies nicht der gewünschte Effekt ist, könnten die `*-crossing` Werte die Lösung sein, die Sie suchen.

#### Entry-crossing

Der `entry-crossing` Wert repräsentiert den Bereich, in dem das animierte Element die Endkante des Scrollbereichs kreuzt, wobei der `0%` Fortschritt eintritt, wenn die Startrandkante des Elements mit der Endkante des Scrollbereichs übereinstimmt, und der `100%` Fortschritt auftritt, wenn die Endrandkante des Elements die Endkante des Scrollbereichs erreicht und somit vollständig in den Scrollbereich gescrollt ist.

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

Beachten Sie, wie die Effekte ähnlich sind, außer wenn `500px` ausgewählt ist und das animierte Element höher als der Container ist.
Der `entry-crossing` Bereich liefert die gleichen Ergebnisse wie `entry`, wenn das Element gleich groß oder kleiner als der Scrollbereich ist, aber wenn das Element größer als der Scrollbereich ist, tritt der `100%` später ein, nämlich nur dann, wenn die Endrandkante in den Viewport eingetreten ist.
Der Animationsanheftungsbereich ist in der Größe auf das Ziel beschränkt und nicht auf die Größe des Scrollbereichs begrenzt.

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
    <rect class="orange" width="100" height="250" x="230" y="750" fill="url(#g)" />
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
    <line x1n h0" x2="230" y1="500" y2="500" />
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

Der `exit-crossing` Wert repräsentiert den Bereich, in dem das animierte Element die Startkante des Scrollbereichs kreuzt, wobei der `0%` Fortschritt eintritt, wenn die Startrandkante des Elements mit der Startkante des Scrollbereichs übereinstimmt, und der `100%` Fortschritt auftritt, wenn die Endrandkante des Elements die Startkante des Scrollbereichs erreicht.

{{EmbedLiveSample("svg_exit_crossing", "100%", "540")}}

Bei `exit-crossing` beginnt die Animation, sobald das Ziel den Scrollbereich abdeckt (bei `exit` beginnt die Animation erst, wenn die Endrandkante des Ziels ins Sichtfeld eintritt). In beiden Fällen läuft die Animation weiter, bis das Ziel vollständig die Startkante des Scrollbereichs verlässt.

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

Der `exit-crossing` liefert die gleichen Ergebnisse wie `exit`, wenn das Element gleich groß oder kleiner als der Scrollbereich ist, aber wenn das Element größer als der Scrollbereich ist, tritt der `0%` früher ein, wobei der Eintritt auftritt, sobald die Startrandkante des Elements die Startkante des Scrollbereichs erreicht, anstatt abzuwarten, bis die Endrandkante des Elements in den Scrollbereich eintritt.

{{EmbedLiveSample("exit_crossing", "100%", "400")}}

Wie bei `entry-crossing` ist der Animationsanheftungsbereich in der Größe auf das Ziel beschränkt und nicht auf die Größe des Scrollbereichs begrenzt.

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

## Siehe auch

- {{cssxref("timeline-range-name")}} Datentyp
- [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Scroll-animation-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Scroll-animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
