---
title: Verstehen von Zeitachsenbereichsnamen
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names
l10n:
  sourceCommit: f94b7a0b06a0e32df81ec8197720d306fe50a4a0
---

Standardmäßig verfolgen [View-Progress-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente über den gesamten Scrollbereich. Die Animationszeitachse beginnt, wenn der erste Pixel der Startecke des Elements die Endkante des Scrollbereichs schneidet, und endet, wenn die Endkante des Elements die Startkante des Scrollbereichs überschreitet. Sie können diesen Standardbereich der Animation anhängen. Beispielsweise können Sie die View-Progress-Zeitachse einschränken, sodass sie erst beginnt, wenn das Element vollständig in den Scrollbereich eingetreten ist.

Dieser Leitfaden erklärt, wie Sie Zeitachsenbereichsnamen ändern. Insbesondere wird untersucht, welche verschiedenen Zeitachsenbereichsnamen es gibt, welche Bedeutung sie haben und wie sie verwendet werden.

## Grundlagen der View-Progress-Zeitleiste

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden erstellt, indem {{cssxref("@keyframes")}}-Animationen an ein Element mithilfe der {{cssxref("animation-name")}}-Eigenschaft (oder {{cssxref("animation")}}-Kurzform) angehängt werden. Die Keyframes definieren das Verhalten der Animation, während die {{cssxref("animation-timeline")}} bestimmt, wann und wie das Element durch diese Keyframes fortschreitet.

Standardmäßig ist die Zeitleiste der Animation die standardmäßige zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Bei [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) wird die Zeitleiste der Animation oder der Fortschritt entweder durch das Scrollen des Benutzers ([Scroll-Fortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)) oder die Sichtbarkeit des Elements ([View-Progress-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)) angetrieben, anstelle des Zeitablaufs.

Bei View-Progress-Zeitachsen ist der Fortschritt der Keyframes mit dem Anteil des Elements verbunden, der im Scroller sichtbar ist, und mit der Position des Elements innerhalb des Scrollers. Wenn das Element den Viewport betritt, schreitet die Zeitleiste fort. Wenn der Benutzer das Scrollen umkehrt, kehrt die Zeitleiste um. Mit anderen Worten, wenn das Element ins Sichtfeld kommt oder dieses verlässt, schreitet die Zeitleiste entsprechend voran oder zurück. Die Animation tritt nur auf, wenn das Element innerhalb seines Scrollbereichs sichtbar ist. Wenn das Scrollen stoppt, während das Element sichtbar ist, pausiert die Animation.

### Standard-View-Progress-Zeitleiste

Standardmäßig beginnt der Fortschritt der [View-Progress-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), wenn die Startecke des verfolgten Elements die Endkante des Scrollbereichs schneidet und endet, wenn die Endkante des Elements die Startkante des Scrollbereichs verlässt. Diese sind die oberen und unteren Kanten des Elements und des Scrollbereichs beim vertikalen Scrollen, und die linken und rechten oder rechten und linken Kanten beim horizontalen Scrollen, je nach Schreibmodus.

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

Im folgenden Beispiel versuchen Sie, nach unten zu scrollen. Beachten Sie, wie die Animation genau dann beginnt, wenn die obere Kante des animierten Elements mit der unteren Kante des Scrollcontainers ausgerichtet ist und endet und `100%` Fortschritt erreicht, wenn die untere Kante mit der oberen Kante des Containers ausgerichtet ist, unabhängig davon, wie hoch das animierte Element ist.

{{EmbedLiveSample("initial", "100%", "400")}}

Der Schreibmodus des Scrollcontainers und die Scrollrichtung bestimmen die Start- und Endkanten des Scrollcontainers.

## Der Animationsanheftungsbereich

Standardmäßig wird das Element die gesamte Zeit animiert, während irgendein Teil des Elements sichtbar ist. Das bedeutet, dass der Standard-**Animationsanheftungsbereich** die Summe der Höhe des Scrollcontainers und der Höhe des Elements ist, wobei diese zusätzliche Höhe an der Endkante des Scrollbereichs liegt.

Im vorherigen Beispiel ist der Scrollcontainer `250px` hoch und das animierte Element ist standardmäßig `50px` hoch, was bedeutet, dass der vertikale Animationsanheftungsbereich `300px` hoch ist. Wenn das Element auf `250px` gesetzt wird, beträgt der Bereich `500px`; wenn das Element auf `500px` gesetzt wird, wächst die Größe des Animationsanheftungsbereichs auf `750px`.

Das Modul [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) bietet Mechanismen zur Definition verschiedener Animationsanheftungsbereiche. Die Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}}, die beide mit der Kurzform {{cssxref("animation-range")}} festgelegt werden können, definieren den Anheftungsbereich für die Start- und Endkante des Animationsbereichs, jeweils mit beliebigen Einfassungen von beiden Kanten.

Die Animation-Range-Eigenschaften akzeptieren das Schlüsselwort `normal`, einen {{cssxref("timeline-range-name")}}, ein {{cssxref("length-percentage")}}, oder sowohl einen `<timeline-range-name>` als auch das `<length-percentage>`. In diesem Leitfaden behandeln wir nur die Werte für die `<timeline-range-name>`-Komponente des Wertes.

## Zeitachsenbereichsnamen

Der Wertetyp `<timeline-range-name>` akzeptiert sechs Schlüsselwörter: `cover`, `contain`, `entry`, `exit`, `entry-crossing` und `exit-crossing`. Jedes dieser Schlüsselwörter stellt einen vordefinierten _benannten Zeitachsenbereich_ dar. Ein benannter Zeitachsenbereich ist ein benannter Abschnitt einer Animationszeitachse. Diese Schlüsselwörter ermöglichen es dem Entwickler, die Basis des Animationsanheftungsbereichs festzulegen, auf die sich Versätze beziehen. Der Beginn des Segments wird als `0%` Fortschritt durch den Bereich dargestellt; das Ende des Segments wird als `100%` Fortschritt durch den Bereich dargestellt. Wo sich diese Punkte befinden, hängt vom verwendeten benannten Bereich ab.

### Cover

Der Animationsanheftungsbereich in den vorherigen Beispielen umfasst den gesamten Bereich. Dieser Bereich stellt den gesamten Bereich der View-Progress-Zeitachse dar. `0%` Fortschritt stellt den Punkt dar, an dem die Startkante des Elements mit der Endkante des Scrollbereichs ausgerichtet ist, und `100%` Fortschritt stellt den Punkt dar, an dem die Endkante des Elements die Startkante des Scrollbereichs erreicht. Wie wir gesehen haben, ist die Größe des `cover`-Bereichs die Summe der Dimensionen des Elements und des Scrollbereichs in der Scrollrichtung. In allen bisherigen Beispielen entspricht die Höhe des Animationsanheftungsbereichs der Höhe des Containers plus der Höhe des animierten Elements.

Der `cover`-benannte Zeitachsenbereich ist der Standardbereich. Wir hätten die `<timeline-range-name>` explizit auf dasselbe Ergebnis setzen können:

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

Das Bild zeigt die Animationszeitachse. Die Position des Elements, wenn es den Beginn des Animationsanheftungsbereichs bei `0%`-Markierung erreicht, wird durch einen gelben Block dargestellt. Dies repräsentiert die Position des Elements, wenn das `from`-Keyframe angewendet wird. Der rote Block stellt die Position des Elements relativ zum Scrollbereich dar, wenn das `to`-Keyframe angewendet wird. Dies ist die Position des animierten Elements, wenn es das Ende der Animation erreicht.

Je nach Größe des Elements und des gewählten Zeitachsenbereichs können sich die Start- und Endpositionen überschneiden. Überlappungsbereiche (wie in den nachfolgenden Diagrammen zu sehen) werden durch gestreifte rote und gelbe Bereiche dargestellt.

### Contain

Der `contain`-benannte Zeitachsenbereich umfasst die Animation vollständig innerhalb des Scrollbereichs — der Bereich beginnt, wenn das animierte Element zu 100% sichtbar ist, und endet, wenn es nicht mehr vollständig sichtbar ist, falls es vollständig sichtbar sein kann.

Der `contain`-Wert stellt den Bereich dar, während dessen die Hauptkiste entweder vollständig vom Sichtbereich des Scrollbereichs umfasst wird oder vollständig diesen überdeckt, je nachdem, ob das Element kleiner ist (vollständig umfasst werden kann) oder größer ist als der Scrollbereich.

- Wenn das Element kleiner ist als der Scrollbereich in der Scrollrichtung, tritt `0%` auf, wenn die Endkante des animierten Elements mit der Endkante des Scrollbereichs ausgerichtet ist, und `100%`, wenn die Startkante des animierten Elements mit der Startkante des Scrollbereichs ausgerichtet ist. Mit anderen Worten: Der `contain`-Wert reicht von dem Punkt, an dem das Element erstmals vollständig vom Scrollbereich umfasst wird (`0%`), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollbereich umfasst wird (`100%`).

- Wenn das Element größer ist als der Scrollbereich, tritt `0%` Fortschritt auf, wenn die Startkante des animierten Elements die Startkante des Scrollbereichs erreicht, und `100%`, wenn die Endkante ausgerichtet ist. Mit anderen Worten: Wenn die Animation größer ist als ihr Container, ist das animierte Element nie vollständig sichtbar, da es nicht im Scrollbereich "enthalten" ist. Die Animation beginnt, wenn die Startkante die Startkante des Scrollbereichs erreicht, und endet, wenn die Endkante des animierten Elements die Endkante des Containers erreicht.

- Wenn das animierte Element dieselbe Größe hat wie der Container, findet die Animation immer noch statt, aber über `0px`, was für den Benutzer nicht sichtbar ist.

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

In diesem Beispiel beträgt die ursprüngliche Höhe des animierten Elements 20% der Höhe des Scrollbereichs und kann daher vollständig darin enthalten sein. Daher sollte, wie zuvor erklärt, die Animation starten, sobald das Element in den Scrollbereich zu gelangen beginnt, und sie sollte enden, sobald das Element zu verlassen beginnt.

Wenn Sie die Option `500px` auswählen, wird das Element doppelt so hoch wie der Scrollbereich. Der Animationsbereich beginnt, wenn das Element den Scrollbereich zum ersten Mal vollständig abdeckt, wobei `0%` dann erreicht wird, wenn die Startkante die Startkante des Containers erreicht. Er endet, wenn das Element den Scrollbereich nicht mehr vollständig abdeckt, wobei `100%` erreicht wird, wenn die Endkante die Endkante des Containers überschreitet.

Wenn das Element dieselbe Größe wie der Scrollcontainer hat, wie es der Fall ist, wenn `250px` ausgewählt ist, findet die Animation immer noch statt, aber über `0px`. Da `0%` und `100%` gleichzeitig auftreten, ist die Animation sofortig. Der Unterschied in der Gestaltung ist nur wahrnehmbar, weil die Eigenschaften, die im `100%`-Keyframe-Zustand definiert sind, nach dem Ende der Animation angewendet werden. Dies ist so, weil die Eigenschaft {{cssxref("animation-fill-mode")}} auf `forwards` gesetzt ist. Andernfalls würde das mittelgroße `250px`-Element, das dieselbe Höhe wie der Scrollcontainer hat, so erscheinen, als ob es sich überhaupt nicht animieren würde.

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

Die Animation tritt auf, wenn sich das Element innerhalb der durch das Weiß des Containers im `50px`-Beispiel dargestellten Bereiche und innerhalb der roten/gelben Bereiche im `250px`- und `500px`-Beispiel befindet.

Für einige kann es hilfreich sein, die Werte `cover` und `contain` miteinander zu vergleichen und gegenüberzustellen. Wir können die Kurzform-Eigenschaft `animation-range` verwenden, um die `animation-range-start` und `animation-range-end` Eigenschaften auf denselben `<animation-name-range>`-Wert zu setzen:

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

Wählen Sie verschiedene Optionsfelder aus und scrollen Sie den Scrollbereich, um die Auswirkungen der Werte `cover` und `contain` auf Animationszeitachsen zu vergleichen.

Schauen wir uns die anderen `<timeline-range-name>` Schlüsselwortwerte an!

### Entry und Exit

Um die gesamte Animation nur dann stattfinden zu lassen, wenn sich das Element in den Prozess des Eintritts in oder Austritts aus dem Scrollbereich befindet, verwenden Sie die Werte `entry` oder `exit`. Mit diesen beiden Werten basiert der Animationsanheftungsbereich auf der Größe des animierten Elements, nicht auf der Größe des Scrollbereichs.

#### Entry

Bei `entry` tritt `0%` Fortschritt ein, sobald das animierte Element beginnt, in den Scrollbereich einzutreten, wenn die Startkante des Elements die Endkante des Scrollbereichs überschreitet.

Die gesamte Animation tritt auf, wenn das Element ins Sichtfeld kommt und endet, wenn es komplett sichtbar wird oder wenn es die Startkante erreicht; je nachdem, was zuerst eintritt. Wenn das animierte Element kleiner ist als der Scrollbereich, ist der Animationsanheftungsbereich die Größe des Elements.

{{EmbedLiveSample("svg_entry_only", "100%", "500")}}

Die Position bei `0%` Fortschritt wird in Gelb angezeigt. Die Position bei `100%` Fortschritt wird in Rot angezeigt. Wenn das animierte Element größer ist als der Scrollbereich, überlappen sich diese beiden Positionen, was durch einen gestreiften Hintergrund angezeigt wird.

Bei `entry` entspricht der Animationsanheftungsbereich entweder der Größe des animierten Elements oder der Größe des Containers, je nachdem, was kleiner ist. Wenn das Element größer als der Scrollbereich ist, umfasst der Animationsanheftungsbereich den gesamten Scrollbereich. Bei `entry` tritt `100%` ein, wenn die Endkante des Elements die Endkante des Scrollbereichs überschreitet oder, wenn das animierte Element größer ist als der Scrollbereich in der Scrollrichtung, wenn die Startkante des Elements die Startkante des Scrollbereichs erreicht.

Das Setzen von `animation-range-start: entry` ist dasselbe wie das Setzen von `animation-range-start: cover`.
Das Setzen von `animation-range-end: entry` ist gleichbedeutend mit dem Setzen von `animation-range-end: contain`.

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

Der `exit`-Wert ist das Gegenteil von `entry`.
Bei `exit` beginnt der Anheftungsbereich, wenn die Startkante des animierten Elements die Startkante des Scrollbereichs überschreitet.

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

Der `0%`-Fortschritt tritt auf, wenn die Startkante des Elements die Startkante des Scrollbereichs erreicht.
Der `100%`-Fortschritt tritt auf, wenn die Endkante des Elements die Startkante überschreitet.
Das Setzen von `animation-range-start: exit 0%` ist gleichbedeutend mit `animation-range-start: contain 100%`.
Das Setzen von `animation-range-end: exit 100%` ist gleichbedeutend mit `animation-range-end: cover 100%`.

#### Vergleich von Entry und Exit

Es kann hilfreich sein, `entry` und `exit` nebeneinander zu betrachten, um zu verstehen, welchen Einfluss die Größe des Elements auf den Animationsanheftungsbereich hat: Bei diesen beiden Werten ist der Animationsanheftungsbereich nie größer als der Container.

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

Scrollen Sie die Viewbox, um die Reichweite der `entry`- und `exit`-Werte zu sehen, ändern Sie dann die Größe der Elemente mit den Optionsfeldern und scrollen Sie erneut.

{{EmbedLiveSample("entry_exit", "100%", "400")}}

Wenn die Elemente klein genug sind, um vollständig im Scrollbereich untergebracht zu werden, befindet sich die Animationsanheftungszeitachse am Anfang (`entry`) oder Ende (`exit`) des Scrollbereichs, und die Größe des Anheftungsbereichs ist auf die Größe des animierten Elements in der Scrollrichtung begrenzt.

Mit `entry` und `exit` ist der Animationsbereich auf die Größe des Scrollbereichs beschränkt, während das Element nicht ist.

Wenn das Element dieselbe Größe wie der Scrollbereich oder größer ist:

- Im Fall von `entry` endet die Animation, wenn das Element den Scrollbereich in der Scrollrichtung vollständig überdeckt.
- Im Fall von `exit` beginnt die Animation erst, wenn das Element den Scrollbereich in der Scrollrichtung vollständig überdeckt.

Dies ist möglicherweise nicht der Effekt, den Sie wünschen. Wenn Sie möchten, dass eine Entry-Animation weiterhin läuft, bis das gesamte Element den Startpunkt des Scrollbereichs vollständig passiert hat, oder wenn Sie möchten, dass eine Exit-Animation startet, sobald das Element beginnt, die Endkante des Scrollbereichs zu verlassen, müssen Sie `entry-crossing` und `exit-crossing` verwenden.

### Entry- und Exit-Crossing

Wenn das Element kleiner als der Scrollbereich ist und Sie möchten, dass die vollständige Animation abläuft, während das Element in den Scrollbereich eintritt oder diesen verlässt, können Sie glücklich die Werte [`entry`](#entry) oder [`exit`](#exit) verwenden.

Wenn das Element größer als der Scrollbereich ist, läuft die Animation nicht über den gesamten Verlauf des Ein- oder Austretens des Elements aus dem Scrollbereich. Der `entry`-Wert setzt den `100%` Fortschritt als den Punkt, an dem die Startkante des Elements die Startkante des Scrollbereichs erreicht, bevor das Element vollständig in den Scrollbereich eingetreten ist. Bei `exit` tritt der `0%`-Fortschritt ein, wenn die Endkante des Elements die Endkante des Scrollcontainers erreicht, wenn bereits ein Teil des Elements den Scrollbereich verlassen hat. Bei beiden Werten ist der Animationsanheftungsbereich kleiner als das Element. Wenn dies nicht der gewünschte Effekt ist, könnten die `*-crossing`-Werte die Lösung sein, die Sie suchen.

#### Entry-Crossing

Der `entry-crossing`-Wert stellt den Bereich dar, während dessen das animierte Element die Endkante des Scrollbereichs überschreitet, wobei der `0%`-Fortschritt eintritt, wenn die Startkante des Elements mit der Endkante des Scrollbereichs ausgerichtet ist, und der `100%`-Fortschritt eintritt, wenn die Endkante des Elements die Endkante des Scrollbereichs erreicht, was bedeutet, dass es vollständig in den Scrollbereich gescrollt ist.

{{EmbedLiveSample("svg_entry-crossing", "100%", "600")}}

Es könnte hilfreich sein, die beiden Werte in einem Live-Beispiel zu vergleichen.

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

Beachten Sie, wie sich die Effekte ähneln, außer wenn `500px` ausgewählt ist und das animierte Element größer ist als der Container.
Der `entry-crossing`-Bereich erzielt dieselben Ergebnisse wie `entry`, wenn das Element gleich oder kleiner als der Scrollbereich ist, aber wenn das Element größer ist als der Scrollbereich, erfolgt `100%` später, nämlich erst, wenn die Endkante den Viewport erreicht hat.
Der Animationsanheftungsbereich ist die Größe des Elements und nicht auf die Größe des Scrollbereichs beschränkt.

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

#### Exit-Crossing

Der `exit-crossing`-Wert stellt den Bereich dar, während dessen das animierte Element die Startkante des Scrollbereichs überschreitet, wobei der `0%`-Fortschritt auftritt, wenn die Startkante des Elements mit der Startkante des Scrollbereichs ausgerichtet ist, und der `100%`-Fortschritt auftritt, wenn die Endkante des Elements die Startkante des Scrollbereichs erreicht.

{{EmbedLiveSample("svg_exit_crossing", "100%", "540")}}

Bei `exit-crossing` beginnt die Animation, sobald das Element den Scrollbereich bedeckt (bei `exit` beginnt die Animation erst, wenn die Endkante des Elements in den Blickfeld eintritt). In beiden Fällen läuft die Animation weiter, bis das Element den Scrollbereich vollständig an der Startkante verlässt.

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

Der `exit-crossing`-Wert ergibt die gleichen Ergebnisse wie `exit`, wenn das Element gleich oder kleiner als der Scrollbereich ist, aber wenn das Element größer ist als der Scrollbereich, tritt `0%` früher auf, nämlich sobald die Startkante des Elements die Startkante des Scrollbereichs erreicht, anstatt darauf zu warten, dass die Endkante des Elements in den Scrollbereich eintritt.

{{EmbedLiveSample("exit_crossing", "100%", "400")}}

Wie bei `entry-crossing` entspricht der Animationsanheftungsbereich der Größe des Elements und ist nicht auf die Größe des Scrollbereichs beschränkt.

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
- [Scroll-gesteuerte Animationszeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
