---
title: Verstehen von Zeitachsenbereichs-Namen
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names
l10n:
  sourceCommit: 3ad3708851fee2f25927c90e0062f259dab5df18
---

Standardmäßig verfolgen [Ansichtsfortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente im gesamten Scrollport. Die Animationszeitachse beginnt, wenn das erste Pixel der Startkante des Elements die Endkante des Scrollports überquert und endet, wenn die Endkante des Elements die Startkante des Scrollports überquert. Sie können diesen Standardbereich der Animationsanbindung ändern. Beispielsweise können Sie die Ansichtsfortschritts-Zeitachse einschränken, sodass sie erst beginnt, wenn das Element vollständig in den Scrollport eingetreten ist.

Dieser Leitfaden erklärt, wie man Zeitachsenbereichs-Namen modifiziert, insbesondere die verschiedenen Zeitachsenbereichs-Namen, ihre Bedeutungen und wie sie verwendet werden.

Die Einschränkung der Animationszeitachse auf einen bestimmten Teil eines benannten Animationszeitachsenbereichs wird im [Leitfaden zu Scroll-Animationen mit Inset](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) behandelt.

## Grundinformationen zur Ansichtsfortschritts-Zeitachse

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden erstellt, indem {{cssxref("@keyframes")}}-Animationen mit der {{cssxref("animation-name")}}-Eigenschaft (oder {{cssxref("animation")}}-Kurzschrift) an ein Element angebunden werden. Die Keyframes definieren das Verhalten der Animation, während die {{cssxref("animation-timeline")}} bestimmt, wann und wie das Element durch diese Keyframes fortschreitet.

Standardmäßig ist die Zeitachse der Animationszeit die standardmäßige zeitorientierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Bei [CSS-scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) wird die Zeitachse oder der Fortschritt der Animation entweder durch das Scrollen des Benutzers ([Scrollfortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)) oder die Element-Sichtbarkeit ([Ansichtsfortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)) statt durch den Zeitverlauf gesteuert.

Bei Ansichtsfortschritts-Zeitachsen ist das Voranschreiten von Keyframes daran gebunden, wie viel des Elementes im Scrollport sichtbar ist und seine Position innerhalb des Scrollports. Wenn das Element in das Sichtfenster eintritt, schreitet die Zeitachse voran. Wenn der Benutzer das Scrollen umkehrt, kehrt die Zeitachse um. Mit anderen Worten: Wenn das Element in oder aus dem Blickfeld gerät, schreitet die Zeitachse entsprechend fort oder zurück. Die Animation findet nur statt, wenn das Element innerhalb seines Scrollports sichtbar ist. Wenn das Scrollen stoppt, während das Element sichtbar ist, pausiert die Animation.

### Standard-Ansichtsfortschritts-Zeitachse

Standardmäßig beginnt der Fortschritt der [Ansichtsfortschritts-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), wenn die Startkante des verfolgten Elements die Endkante des Scrollports schneidet und endet, wenn die Endkante den Scrollport an der Startkante verlässt. Dies sind die oberen und unteren Kanten des Elements und des Scrollports, wenn vertikal gescrollt wird, und die linken und rechten oder rechten und linken Kanten, wenn horizontal gescrollt wird, je nach Schreibmodus.

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

Im folgenden Beispiel versuchen Sie, nach unten zu scrollen. Beachten Sie, wie die Animation beginnt, genau wenn die obere Kante des animierten Elements mit der unteren Kante des Scrollcontainers ausgerichtet ist und endet, 100% Fortschritt erreicht wird, wenn die untere Kante mit der oberen Kante des Containers ausgerichtet ist, unabhängig davon, wie hoch das animierte Element ist.

{{EmbedLiveSample("initial", "100%", "400")}}

Der Schreibmodus und die Scrollrichtung des Scrollcontainers bestimmen die Start- und Endkanten des Scrollcontainers.

## Der Animationsanbindungsbereich

Standardmäßig wird das Element animiert, während irgendein Teil des Elements sichtbar ist. Das bedeutet, dass der Standard-**Animationsanbindungsbereich** die Summe der Höhe des Scrollcontainers und der Höhe des Elements ist, wobei diese zusätzliche Höhe an der Endkante des Scrollports liegt.

Im vorherigen Beispiel ist der Scrollcontainer standardmäßig 250px hoch, und das animierte Element ist 50px hoch, was bedeutet, dass der vertikale Animationsanbindungsbereich 300px hoch ist. Wenn das Element auf 250px eingestellt wird, wird der Bereich 500px; wenn das Element auf 500px eingestellt wird, wächst die Größe des Animationsanbindungsbereichs auf 750px.

Das Modul [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) bietet Mechanismen zum Definieren unterschiedlicher Animationsanbindungsbereiche. Die Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}}, die beide mit der Kurzschrift {{cssxref("animation-range")}} festgelegt werden können, definieren den Anbindungsbereich für die Startkante und die Endkante des Animationsbereichs, zusammen mit etwaigen Einfügungen von beiden Kanten.

Die Animation-Range-Eigenschaften akzeptieren das Keyword `normal`, einen {{cssxref("timeline-range-name")}}, eine {{cssxref("length-percentage")}}, oder sowohl einen `<timeline-range-name>` als auch die `<length-percentage>`. In diesem Leitfaden behandeln wir nur die Werte für die `<timeline-range-name>`-Komponente des Werts.

Die Längen-Prozent-Werte, wie `20%` oder `100px`, setzen die Animationszeitachse aus den benannten Animationsanbindungsbereichen um den festgelegten Betrag ein, wobei der Wert standardmäßig `0` beträgt. Dies wird im [Verstehen von Zeitacheneninsätzen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) Leitfaden behandelt.

## Zeitachsenbereichs-Namen

Der `<timeline-range-name>`-Werttyp akzeptiert sechs Schlüsselwörter: `cover`, `contain`, `entry`, `exit`, `entry-crossing` und `exit-crossing`. Jedes dieser Schlüsselwörter stellt einen vordefinierten _benannten Zeitachsenbereich_ dar. Ein benannter Zeitachsenbereich ist ein benanntes Segment einer Animationszeitachse. Diese Schlüsselwörter erlauben es dem Entwickler, die Basis des Animationsanbindungsbereichs festzulegen, auf die sich die Versätze beziehen. Der Start des Segments wird als `0%` Fortschritt durch den Bereich dargestellt; das Ende des Segments wird als `100%` Fortschritt durch den Bereich dargestellt. Wo sich diese Punkte befinden, hängt von dem verwendeten benannten Bereich ab.

### Cover

Die Animationsanbindungsbereiche in den vorherigen Beispielen decken alle den gesamten Bereich ab. Dieser Bereich stellt den vollständigen Bereich der Ansichtsfortschritts-Zeitachse dar. `0%` Fortschritt repräsentiert den Punkt, an dem die Startkante des Elements mit der Endkante des Scrollports ausgerichtet ist, und `100%` Fortschritt repräsentiert den Punkt, an dem die Endkante des Elements die Startkante des Scrollports erreicht. Wie wir gesehen haben, ist die Größe des `cover`-Bereiches die Summe der Dimensionen von Element und Scrollport in Scrollrichtung. In allen bisherigen Beispielen ist die Höhe des Animationsanbindungsbereichs die Höhe des Containers plus die Höhe des animierten Elements.

Der `cover`-benannte Zeitachsenbereich ist der Standardbereich. Wir könnten den `<timeline-range-name>`-Wert explizit setzten, um die gleichen Ergebnisse zu erzielen:

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

Das Bild zeigt die Animationszeitachse. Die Position des Elements, wenn es den Startpunkt des Animationsanbindungsbereichs erreicht, wird als gelber Block angezeigt. Dies stellt die Elementposition dar, wenn das `from`-Keyframe angewendet wird. Der rote Block stellt die Position des Subjektelements relativ zum Scrollport dar, wenn das `to`-Keyframe angewendet wird. Dies ist die Position des animierten Elements, wenn es das Ende der Animation erreicht.

Abhängig von der Größe des Subjektelements und dem gewählten Zeitachsenbereich können sich die Start- und Endpositionen überlappen. Überlappende Bereiche (wie in den folgenden Diagrammen zu sehen) werden durch gestreifte rote und gelbe Bereiche dargestellt.

### Contain

Der `contain`-benannte Zeitachsenbereich enthält die Animation vollständig innerhalb des Scrollports — der Bereich beginnt, wenn das animierte Element zu 100% sichtbar ist, und endet, wenn es nicht mehr vollständig sichtbar ist, sofern es vollständig sichtbar sein kann.

Der `contain`-Wert repräsentiert den Bereich, während dem das Hauptelement entweder vollständig vom Scrollport eingeschlossen oder vollständig sichtbar ist, je nachdem, ob das Subjektelelement kleiner (kann vollständig eingeschlossen werden) oder größer als der Scrollport ist.

- Wenn das Element kleiner als der Scrollport in Scrollrichtung ist, tritt `0%` ein, wenn die Endkante des animierten Elements mit der Endkante des Scrollports übereinstimmt, und `100%`, wenn die Startkante des animierten Elements mit der Startkante des Scrollports übereinstimmt. Mit anderen Worten, der `contain`-Wert reicht von dem Punkt, an dem das Subjektelement zuerst vollständig vom Scrollport umschlossen ist (`0%`), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollport umschlossen ist (`100%`).

- Wenn das Element größer als der Scrollport ist, beginnt `0%` Fortschritt, wenn die Startkante des animierten Elements die Startkante des Scrollports erreicht, und `100%`, wenn die Endkante mit der Endkante übereinstimmt. Mit anderen Worten, wenn die Animation größer als ihr Container ist, ist das animierte Element nie vollständig sichtbar, da es nicht "eingeschlossen" im Scrollport ist. Die Animation beginnt, wenn die Startkante die Startkante des Scrollports erreicht, und endet, wenn die Endkante des animierten Elements die Endkante des Containers erreicht.

- Wenn das animierte Element die gleiche Größe wie der Container hat, findet die Animation dennoch statt, jedoch über `0px`, was für den Benutzer nicht sichtbar ist.

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

In diesem Beispiel ist die ursprüngliche Höhe des animierten Elements 20% der Höhe des Scrollports und kann daher vollständig innerhalb desselben enthalten sein. Wie zuvor beschrieben, sollte die Animation daher beginnen, sobald das Element beginnt, in den Scrollport einzutreten, und enden, sobald es beginnt, den Scrollport zu verlassen.

Wenn Sie die `500px`-Option auswählen, wird das Subjekt doppelt so hoch wie der Scrollport. Der Animationsbereich beginnt, wenn das Subjektelement den Scrollport erstmals vollständig bedeckt, wobei `0%` auftritt, wenn die Startkante die Startkante des Containers erreicht. Es endet, wenn das Element nicht mehr vollständig den Scrollport bedeckt, wobei `100%` auftritt, wenn die Endkante die Endkante des Containers überschreitet.

Wenn das Subjekt die gleiche Größe wie der Scrollcontainer hat, wie es bei der Auswahl von `250px` der Fall ist, findet die Animation weiterhin statt, jedoch über `0px`. Da `0%` und `100%` zur gleichen Zeit auftreten, geschieht die Animation augenblicklich. Der Unterschied in der Darstellung ist nur wahrnehmbar, weil die im `100%`-Keyframe-Zustand definierten Eigenschaften nach dem Ende der Animation angewendet werden. Dies liegt daran, dass die {{cssxref("animation-fill-mode")}}-Eigenschaft auf `forwards` gesetzt ist. Andernfalls würde das mittlere `250px` große Subjekt, das die gleiche Höhe wie der Scrollcontainer hat, scheinbar gar nicht animiert werden.

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

Die Animation findet statt, wenn sich das Element innerhalb der in der `50px`-Beispielfläche des Containers dargestellten weißen Bereiche und in den rot/gelben Bereichen in den `250px`- und `500px`-Beispielen befindet.

Es mag für einige hilfreich sein, die `cover`- und `contain`-Werte zu vergleichen und gegenüberzustellen. Wir können die Kurzschrift-Eigenschaft `animation-range` verwenden, um die Eigenschaften `animation-range-start` und `animation-range-end` auf denselben `<animation-name-range>`-Wert zu setzen:

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

Wählen Sie verschiedene Radiobuttons und scrollen Sie den Scrollport, um die Auswirkungen der `cover`- und `contain`-Werte auf Animationen zu vergleichen.

Schauen wir uns die anderen `<timeline-range-name>`-Schlüsselwortwerte an!

### Entry und exit

Um die gesamte Animation nur dann ablaufen zu lassen, wenn das Subjektelement im Prozess des Eintritts oder Austritts aus dem Scrollport ist, verwenden Sie die Werte `entry` oder `exit`. Mit diesen beiden Werten basiert der Animationsanbindungsbereich auf der Größe des animierten Elements, nicht auf der Größe des Scrollports.

#### Entry

Bei `entry` tritt `0%` Fortschritt in dem Moment auf, in dem das animierte Element beginnt, den Scrollport zu betreten, wenn die Startkante des Subjekts die Endkante des Scrollports kreuzt.

Die gesamte Animation findet statt, während das Subjekt ins Blickfeld kommt und endet, wenn es vollständig sichtbar wird oder wenn es die Startkante erreicht; je nachdem, was zuerst eintritt. Wenn das animierte Element kleiner als der Scrollport ist, entspricht der Animationsanbindungsbereich der Größe des Subjekts.

{{EmbedLiveSample("svg_entry_only", "100%", "500")}}

Die Position bei `0%` Fortschritt wird in Gelb angezeigt. Die Position bei `100%` Fortschritt wird in Rot angezeigt. Wenn das animierte Element größer als der Scrollport ist, überlappen sich diese beiden Positionen, was durch einen gestreiften Hintergrund dargestellt wird.

Mit `entry` ist der Animationsanbindungsbereich entweder die Größe des animierten Elements oder die Größe des Containers, je nachdem, was kleiner ist. Wenn das Subjekt größer als der Scrollport ist, entspricht der Animationsanbindungsbereich dem gesamten Scrollport. Bei `entry` tritt `100%` Fortschritt auf, wenn die Endkante des Subjekts die Endkante des Scrollports überquert oder, wenn das animierte Element größer als der Scrollport in der Scrollrichtung ist, wenn die Startkante des animierten Elements die Startkante des Scrollports erreicht.

Das Setzen von `animation-range-start: entry` entspricht dem Setzen von `animation-range-start: cover`.
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

Der `0%` Fortschritt tritt auf, wenn die Startkante des Subjekts die Startkante des Scrollports erreicht.
Der `100%` Fortschritt tritt auf, wenn die Endkante des Subjekts die Startkante überquert.
Das Setzen von `animation-range-start: exit 0%` entspricht dem Setzen von `animation-range-start: contain 100%`.
Das Setzen von `animation-range-end: exit 100%` entspricht `animation-range-end: cover 100%`.

#### Vergleich von entry und exit

Es kann hilfreich sein, sich `entry` und `exit` nebeneinander anzusehen, um die Auswirkungen auf die Animationsanbindung zu verstehen: Mit diesen beiden Werten ist der Animationsanbindungsbereich nie größer als der Container.

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

Scrollen Sie die Ansicht, um den Bereich der `entry`- und `exit`-Werte zu sehen, ändern Sie dann die Größe der Subjektelemente mithilfe der Radiobuttons und scrollen Sie erneut.

{{EmbedLiveSample("entry_exit", "100%", "400")}}

Wenn die Subjektelemente klein genug sind, um vollständig im Sichtfenster enthalten zu sein, ist die Anbindungszeitachse am Start (`entry`) oder Ende (`exit`) des Sichtfensters, und die Größe des Anbindungsbereichs ist auf die Größe des animierten Elements in Scrollrichtung begrenzt.

Mit `entry` und `exit` ist der Animationsbereich auf die Größe des Scrollports begrenzt, während das Element dies nicht ist.

Wenn das Subjektelelement die Größe des Scrollports hat oder größer ist:

- Im Fall von `entry` endet die Animation, wenn das Element den Scrollport in Scrollrichtung vollständig abdeckt.
- Im Fall von `exit` beginnt die Animation erst, wenn das Element den Scrollport in Scrollrichtung vollständig abdeckt.

Dies ist möglicherweise nicht der Effekt, den Sie sich wünschen. Wenn Sie möchten, dass eine Eintrittsanimation fortgesetzt wird, bis das gesamte Element den Startpunkt des Scrollports erreicht hat, oder wenn Sie möchten, dass eine Austrittsanimation beginnt, sobald das Element beginnt, die Endkante des Scrollports zu verlassen, müssen Sie `entry-crossing` und `exit-crossing` verwenden.

### Entry- und exit-crossing

Wenn das Subjektelement kleiner als der Scrollport ist und Sie möchten, dass die gesamte Animation abläuft, während es den Scrollport betritt oder verlässt, können Sie problemlos `entry` oder `exit` verwenden.

Wenn das Subjekt größer als der Scrollport ist, läuft die Animation nicht über den gesamten Bereich des Elements, das den Scrollport betritt oder verlässt. Der `entry`-Wert setzt den `100%` Fortschritt so fest, dass er auftritt, wenn die Startkante des Elements die Startkante des Scrollports erreicht, bevor das Element den Scrollport vollständig betreten hat. Mit `exit` tritt `0%` Fortschritt auf, wenn die Endkante des Elements die Endkante des Scrollports erreicht hat, wenn ein Teil des Subjekts bereits den Scrollport verlassen hat. Bei beiden Werten ist der Animationsanbindungsbereich kleiner als das Subjekt. Falls das nicht der Effekt ist, den Sie suchen, könnten die `*-crossing`-Werte die Lösung sein, die Sie suchen.

#### Entry-crossing

Der `entry-crossing`-Wert stellt den Bereich dar, während dem das animierte Element die Endkante des Scrollports überquert, wobei `0%` Fortschritt auftritt, wenn die Startkante des Elements mit der Endkante des Scrollports übereinstimmt und `100%` Fortschritt auftritt, wenn die Endkante des Elements die Endkante des Scrollports erreicht hat, was bedeutet, dass es vollständig in den Scrollport eingetreten ist.

{{EmbedLiveSample("svg_entry-crossing", "100%", "600")}}

Es kann nützlich sein, die beiden Werte in einem Live-Beispiel zu vergleichen.

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
Der `entry-crossing`-Bereich liefert das gleiche Ergebnis wie `entry`, wenn das Element gleich groß oder kleiner als der Scrollport ist, aber wenn das Element größer als der Scrollport ist, tritt `100%` Fortschritt später auf, nur wenn die Endkante des Elements in den Scrollport eingetreten ist.
Der Animationsanbindungsbereich entspricht der Größe des Subjekts und ist nicht auf die Größe des Scrollports begrenzt.

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

Der `exit-crossing`-Wert stellt den Bereich dar, während dem das animierte Element die Startkante des Scrollports überquert, wobei `0%` Fortschritt auftritt, wenn die Startkante des Elements mit der Startkante des Scrollports übereinstimmt, und `100%` Fortschritt auftritt, wenn die Endkante des Elements die Startkante des Scrollports erreicht.

{{EmbedLiveSample("svg_exit_crossing", "100%", "540")}}

Bei `exit-crossing` beginnt die Animation, sobald das Subjekt den Scrollport bedeckt (bei `exit` beginnt die Animation erst, wenn die Endkante des Subjekts ins Blickfeld gerät). In beiden Fällen läuft die Animation weiter, bis das Subjekt die Startkante des Scrollports vollständig verlassen hat.

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

Der `exit-crossing`-Wert liefert das gleiche Ergebnis wie `exit`, wenn das Element gleich groß oder kleiner als der Scrollport ist, aber wenn das Element größer als der Scrollport ist, tritt `0%` Fortschritt früher auf, sobald die Startkante des Elements die Startkante des Scrollports erreicht, anstatt zu warten, bis die Endkante des Elements den Scrollport erreicht.

{{EmbedLiveSample("exit_crossing", "100%", "400")}}

Wie bei `entry-crossing` entspricht der Animationsanbindungsbereich der Größe des Subjekts und ist nicht auf die Größe des Scrollports begrenzt.

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

In diesem Leitfaden haben wir `0%`- und `100%`-Fortschrittspunkte erwähnt. Die Animationsbereichswerte sind nicht auf diese Fortschrittspunkte beschränkt. Sie können jeden der benannten Animationsbereiche um einen festgelegten Betrag oder einen Prozentsatz des vollständigen Animationsanbindungsbereichs einfügen. Dies wird im [insets](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) Leitfaden behandelt.

## Siehe auch

- {{cssxref("timeline-range-name")}} Datentyp
- [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Scrollgesteuerte Animationszeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Verstehen von Zeitacheneninsätzen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets)
- [Scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
