---
title: Verständnis von Zeitachsenbereichsnamen
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names
l10n:
  sourceCommit: ef78a9a3336c884fb3587e4ff833e64704296f01
---

Standardmäßig verfolgen [View Progress Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente über den gesamten Scrollbereich. Die Animationszeitachse beginnt, wenn das erste Pixel der Startkante des Elements die Endkante des Scrollbereichs kreuzt, und endet, wenn die Endkante des Elements die Startkante des Scrollbereichs kreuzt. Sie können diesen Standardbereich der Animationszuordnung ändern. Beispielsweise können Sie die View Progress Timeline so einschränken, dass sie erst beginnt, wenn das Subjektelement vollständig in den Scrollbereich eingetreten ist.

Dieser Leitfaden erklärt, wie Sie Zeitachsenbereichsnamen ändern, insbesondere die verschiedenen Zeitachsenbereichsnamen, ihre Bedeutungen und wie sie verwendet werden.

<!--Die Einschränkung der Animationszeitachse auf einen bestimmten Abschnitt eines benannten Animationszeitachsenbereichs wird im [Guide für Scroll Animation Insets](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) behandelt.-->

## Einführung in View Progress Timelines

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden erstellt, indem {{cssxref("@keyframes")}}-Animationen mithilfe der {{cssxref("animation-name")}}-Eigenschaft (oder der Abkürzung {{cssxref("animation")}}) an ein Element angehängt werden. Die Keyframes definieren das Verhalten der Animation, während die {{cssxref("animation-timeline")}} bestimmt, wann und wie das Element diese Keyframes durchläuft.

Standardmäßig ist die Animationszeitachse die standardmäßige zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Bei [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) wird der Fortschritt der Animation entweder durch das Benutzerscrollen ([Scroll Progress Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)) oder die Sichtbarkeit von Elementen ([View Progress Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)) gesteuert, anstatt durch den Zeitablauf.

Bei View Progress Timelines ist die Keyframe-Progression daran gebunden, wie viel vom Subjektelement innerhalb des Scrollbereichs sichtbar ist und welche Position es darin hat. Während das Element in den Viewport eintritt, schreitet die Zeitachse voran. Wenn der Benutzer das Scrollen umkehrt, dreht sich die Zeitachse um. Mit anderen Worten, wenn das Element in den Blickpunkt kommt oder sich daraus bewegt, schreitet die Zeitachse entsprechend voran oder dreht sich um. Die Animation findet nur statt, wenn das Subjekt innerhalb seines Scrollbereichs sichtbar ist. Wenn das Scrollen anhält, während das Element im Sichtfeld ist, pausiert die Animation.

### Standard-View Progress Timeline

Standardmäßig beginnt das Fortschreiten der [View Progress Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), wenn die Startkante des verfolgten Subjekts die Scrollport-Endkante schneidet und endet, wenn die Endkante des Subjekts die Scrollport-Startkante verlässt. Dies sind die oberen und unteren Kanten von Subjekt und Scrollport bei vertikalem Scrollen und die linken und rechten oder rechten und linken Kanten bei horizontalem Scrollen, abhängig vom Schreibmodus.

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

Im folgenden Beispiel versuchen Sie bitte herunterzuscrollen. Beachten Sie, wie die Animation beginnt, sobald die obere Kante des animierten Elements mit der unteren Kante des Scrollcontainers übereinstimmt, und endet, wobei `100%` Fortschritt erreicht wird, wenn die untere Kante mit der oberen Kante des Containers übereinstimmt, unabhängig davon, wie hoch das animierte Element ist.

{{EmbedLiveSample("initial", "100%", "400")}}

Der Schreibmodus und die Scrollrichtung des Scrollcontainers bestimmen die Start- und Endkanten des Scrollcontainers.

## Der Bereich der Animationszuordnung

Standardmäßig wird das Element die ganze Zeit animiert, während irgendein Teil des Subjektelements sichtbar ist. Dies bedeutet, dass der standardmäßige **Animationszuordnungsbereich** die Summe aus der Höhe des Scrollcontainers und der Höhe des Subjektelements ist, wobei diese zusätzliche Höhe an der Scrollendkante liegt.

Im vorherigen Beispiel ist der Scrollcontainer standardmäßig `250px` hoch und das animierte Element `50px` hoch, was bedeutet, dass der vertikale Animationszuordnungsbereich `300px` hoch ist. Wenn das Subjekt auf `250px` eingestellt wird, wird der Bereich `500px`; wenn das Element auf `500px` eingestellt wird, wächst die Größe des Animationszuordnungsbereichs auf `750px`.

Das Modul [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) bietet Mechanismen zum Definieren unterschiedlicher Animationszuordnungsbereiche. Die Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}}, die beide mithilfe der Abkürzung {{cssxref("animation-range")}} festgelegt werden können, definieren den Zuordnungsbereich für den Anfangskante und die Endkedge des Animationsbereichs sowie eventuelle Versätze von beiden Kanten.

Die Eigenschaften des Animationsbereichs akzeptieren das Schlüsselwort `normal`, einen {{cssxref("timeline-range-name")}}, einen {{cssxref("length-percentage")}} oder sowohl einen `<timeline-range-name>` als auch den `<length-percentage>`. In diesem Leitfaden behandeln wir nur die Werte für die `<timeline-range-name>` Komponente des Wertes.

<!--Die Werte für Längen-Prozentsätze, wie `20%` oder `100px`, setzen die Animationszeitachse von den benannten Animationszuordnungsbereichen um den festgelegten Betrag zurück, wobei der Wert standardmäßig auf `0` gesetzt ist. Dies wird in xxx behandelt.-->

## Zeitachsenbereichsnamen

Der Wertetyp `<timeline-range-name>` akzeptiert sechs Schlüsselwörter: `cover`, `contain`, `entry`, `exit`, `entry-crossing` und `exit-crossing`. Jedes dieser Wörter repräsentiert einen vordefinierten _benannten Zeitachsenbereich_. Ein benannter Zeitachsenbereich ist ein benannter Abschnitt einer Animationszeitachse. Diese Schlüsselwörter ermöglichen es dem Entwickler, den Basisbereich der Animationszuordnung festzulegen, auf den sich die Offsets beziehen. Der Anfang des Segments wird als `0%` Fortschritt durch den Bereich dargestellt; Das Ende des Segments wird als `100%` Fortschritt durch den Bereich dargestellt. Wo diese Punkte liegen, hängt vom verwendeten benannten Bereich ab.

### Cover

Der Animationszuordnungsbereich in den vorherigen Beispielen „deckt“ den gesamten Bereich ab. Dieser Bereich repräsentiert den vollen Bereich der View Progress Timeline. `0%` Fortschritt repräsentiert den Punkt, an dem die Startgrenze des Subjekts mit der Endkante des Scrollports übereinstimmt, und `100%` Fortschritt repräsentiert den Punkt, an dem die Endgrenze des Subjekts die Startkante des Scrollports erreicht. Wie wir gesehen haben, ist die Größe des `cover`-Bereichs die Summe aus den Dimensionen von Subjekt und Scrollport in der Scrollrichtung. In allen bisherigen Beispielen entspricht die Höhe des Animationszuordnungsbereichs der Höhe des Containers plus der Höhe des animierten Elements.

Der `cover`-benannte Zeitachsenbereich ist der Standardbereich. Wir hätten den `<timeline-range-name>` explizit festlegen können, um die gleichen Ergebnisse zu erzielen:

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

Das Bild verdeutlicht die Animationszeitachse. Die Position des Elements, wenn es den Startpunkt des Animationszuordnungsbereichs `0%` erreicht, ist als gelber Block dargestellt. Dies repräsentiert die Elementposition, wenn das `from`-Keyframe angewendet wird. Der rote Block repräsentiert die Position des Subjektelements relativ zum Scrollport, wenn das `to`-Keyframe angewendet wird. Dies ist die Position des animierten Elements, wenn es das Ende der Animation erreicht.

Abhängig von der Größe des Subjektelements und dem gewählten Zeitachsenbereich können sich die Start- und Endpositionen überlappen. Überlappungsbereiche (wie in nachfolgenden Diagrammen zu sehen) werden durch gestreifte rote und gelbe Bereiche dargestellt.

### Contain

Der `contain`-benannte Zeitachsenbereich _enthält_ die Animation vollständig innerhalb des Scrollports – der Bereich beginnt, wenn das animierte Element zu 100% sichtbar ist und endet, wenn es nicht mehr vollständig sichtbar ist, falls es vollständig sichtbar sein kann.

Der `contain`-Wert repräsentiert den Zeitraum, in dem die Hauptbox entweder vollständig von oder vollständig von ihrem View Progress-Sichtbarkeitsbereich im Scrollport abgedeckt wird, abhängig davon, ob das Subjekt kleiner (kann vollständig enthalten) oder größer als der Scrollport ist.

- Wenn das Element kleiner als der Scrollport in der Scrollrichtung ist, tritt `0%` ein, wenn die Endgrenze des animierten Elements mit der Endkante des Scrollports übereinstimmt, und `100%`, wenn die Startgrenze des animierten Elements mit der Startkante des Scrollports übereinstimmt. Mit anderen Worten, der `contain`-Wert reicht von dem Punkt, an dem das Subjektelement erstmals vollständig vom Scrollport enthalten ist (`0%`), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollport enthalten ist (`100%`).

- Wenn das Element größer als der Scrollport ist, tritt `0%` ein, wenn die Startgrenze des animierten Elements die Startkante des Scrollports erreicht, und `100%`, wenn die Endgrenze mit der Endkante übereinstimmt. Mit anderen Worten, wenn die Animation größer als ihr Container ist, ist das animierte Element nie vollständig sichtbar, da es sich nicht „innerhalb“ des Scrollports befindet. Die Animation beginnt, wenn die Startkante die Startkante des Scrollports erreicht, und endet, wenn die Endgrenze des animierten Elements die Endkante des Containers erreicht.

- Wenn das animierte Element die gleiche Größe wie sein Container hat, findet die Animation dennoch statt, aber über `0px`, was für den Benutzer nicht sichtbar ist.

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

In diesem Beispiel beträgt die ursprüngliche Höhe des animierten Elements 20% der Höhe des Scrollports und kann daher vollständig darin enthalten sein. Wie zuvor erklärt, sollte die Animation daher beginnen, sobald das Element beginnt, den Scrollport zu betreten, und enden, sobald es beginnt, den Scrollport zu verlassen.

Wenn Sie das `500px`-Optionsfeld auswählen, wird das Subjekt doppelt so groß wie der Scrollport. Der Animationsbereich beginnt, wenn das Subjektelement zum ersten Mal den Scrollport vollständig abdeckt, wobei `0%` erfolgt, wenn die Startkante die Startkante des Containers erreicht. Es endet, wenn das Element nicht mehr vollständig den Scrollport abdeckt, wobei `100%` auftritt, wenn die Endkante die Endkante des Containers überschreitet.

Wenn das Subjekt die gleiche Größe wie der Scrollcontainer hat, wie es bei der Auswahl von `250px` der Fall ist, tritt die Animation immer noch auf, jedoch über `0px`. Da `0%` und `100%` zur gleichen Zeit auftreten, ist die Animation augenblicklich. Der Unterschied im Stil ist nur wahrnehmbar, weil die in dem `100%`-Keyframe-Status definierten Eigenschaften nach dem Ende der Animation angewendet werden. Dies liegt daran, dass die {{cssxref("animation-fill-mode")}}-Eigenschaft auf `forwards` eingestellt ist. Andernfalls erscheint das mittlere `250px`-Subjekt, keine Animation zu haben.

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

Die Animation findet statt, wenn das Element sich innerhalb der Bereiche befindet, die durch das Weiß des Containers im Beispiel `50px` und durch die rot-gelben Bereiche im Beispiel `250px` und `500px` dargestellt werden.

Es kann für einige hilfreich sein, die Werte `cover` und `contain` gegenüberzustellen. Wir können die Abkürzungseigenschaft `animation-range` verwenden, um die Eigenschaften `animation-range-start` und `animation-range-end` auf denselben `<animation-name-range>`-Wert einzustellen:

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

Wählen Sie verschiedene Optionsfelder aus und scrollen Sie im Scrollbereich, um die Auswirkungen der Werte `cover` und `contain` auf die Animation-Zeitachsen zu vergleichen.

Schauen wir uns die anderen Schlüsselwörter für `<timeline-range-name>` an!

### Entry und Exit

Um die gesamte Animation ausschließlich dann ablaufen zu lassen, wenn sich das Subjekt im Prozess des Eintritts oder Austritts aus dem Scrollport befindet, verwenden Sie die Werte `entry` oder `exit`. Bei diesen beiden Werten basiert der Animationszuordnungsbereich auf der Größe des animierten Elements, nicht auf der Größe des Scrollports.

#### Entry

Mit `entry` tritt der `0%`-Fortschritt in dem Moment ein, in dem das animierte Element beginnt, den Scrollport zu betreten, wenn die Startkante des Subjekts die Endkante des Scrollports kreuzt.

Die gesamte Animation findet statt, während das Subjekt ins Blickfeld kommt, und endet, wenn es vollständig sichtbar wird oder die Startkante erreicht; je nachdem, was zuerst eintritt. Wenn das animierte Element kleiner als der Scrollport ist, entspricht der Animationszuordnungsbereich der Größe des Subjekts.

{{EmbedLiveSample("svg_entry_only", "100%", "500")}}

Die Position bei `0%` Fortschritt wird in Gelb angezeigt. Die Position bei `100%` Fortschritt wird in Rot angezeigt. Wenn das animierte Element größer als der Scrollport ist, überlappen sich diese beiden Positionen, was durch einen gestreiften Hintergrund angezeigt wird.

Mit `entry` entspricht der Animationszuordnungsbereich entweder der Größe des animierten Elements oder der des Containers, je nachdem, was kleiner ist. Wenn das Subjekt größer als der Scrollport ist, entspricht der Animationszuordnungsbereich dem gesamten Scrollport. Bei `entry` erfolgt `100%`, wenn die Endkante des Subjekts die Endkante des Scrollports überschreitet oder, wenn das animierte Element in der Scrollrichtung größer als der Scrollport ist, wenn die Startkante des animierten Elements die Startkante des Scrollports erreicht.

Das Festlegen von `animation-range-start: entry` entspricht dem Festlegen von `animation-range-start: cover`.
Das Festlegen von `animation-range-end: entry` ist gleichbedeutend mit dem Festlegen von `animation-range-end: contain`.

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

Der `exit`-Wert ist das Gegenstück zu `entry`.
Mit `exit` beginnt der Zuordnungsbereich, wenn die Startkante des animierten Elements die Startkante des Scrollports überschreitet.

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

Der `0%`-Fortschritt tritt ein, wenn die Startkante des Subjekts die Startkante des Scrollports erreicht.
Der `100%`-Fortschritt tritt ein, wenn die Endkante des Subjekts die Startkante überschreitet.
Das Festlegen von `animation-range-start: exit 0%` ist gleichbedeutend mit dem Festlegen von `animation-range-start: contain 100%`.
Das Festlegen von `animation-range-end: exit 100%` entspricht dem Festlegen von `animation-range-end: cover 100%`.

#### Vergleich von Entry und Exit

Es kann hilfreich sein, `entry` und `exit` nebeneinander zu betrachten, um die Auswirkungen der Größe des Subjekts auf den Animationszuordnungsbereich zu verstehen: Bei diesen beiden Werten ist der Animationszuordnungsbereich nie größer als der Container.

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

Wenn die Subjekte klein genug sind, um vollständig in den Scrollport zu passen, ist die Animationszuordnungszeitachse am Anfang (`entry`) oder Ende (`exit`) des Scrollports und die Größe des Zuordnungsbereichs auf die Größe des animierten Elements in der Scrollrichtung beschränkt.

Mit `entry` und `exit` ist der Animationsbereich auf die Größe des Scrollports beschränkt, während das Element dies nicht ist.

Wenn das Subjektelement die Größe des Scrollports hat oder größer ist:

- Im Fall von `entry` endet die Animation, wenn das Element den Scrollport vollständig abdeckt.
- Im Fall von `exit` beginnt die Animation erst dann, wenn das Element den Scrollport in der Scrollrichtung vollständig abdeckt.

Dies ist möglicherweise nicht der gewünschte Effekt. Wenn Sie möchten, dass eine Eintrittsanimation weiterläuft, bis das gesamte Element vollständig in die Startkante des Scrollports eingetreten ist, oder wenn Sie möchten, dass eine Austrittsanimation beginnt, sobald das Element beginnt, die Endkante des Scrollports zu verlassen, müssen Sie `entry-crossing` und `exit-crossing` verwenden.

### Entry- und Exit-Crossing

Wenn das Subjektelement kleiner als der Scrollport ist und Sie möchten, dass die gesamte Animation beim Eintritt in oder Austritt aus dem Scrollport abläuft, können Sie `entry` oder `exit`, beziehungsweise unbesorgt verwenden.

Wenn das Subjekt größer als der Scrollport ist, läuft die Animation nicht vollständig ab, während das Element in oder aus dem Scrollport eintritt oder austritt. Der `entry`-Wert setzt den `100%`-Fortschritt fest, wenn die Startkante des Elements die Startkante des Scrollports erreicht, bevor das Element vollständig in den Scrollport eingetreten ist. Mit `exit` tritt der `0%`-Fortschritt ein, wenn die Endkante des Elements die Endkante des Scrollcontainers erreicht, wenn ein Teil des Subjekts den Scrollport bereits verlassen hat. Bei beiden Werten ist der Animationszuordnungsbereich kleiner als das Subjekt. Wenn dies nicht der gewünschte Effekt ist, könnten die `*-crossing`-Werte die Lösung sein, die Sie suchen.

#### Entry-Crossing

Der `entry-crossing`-Wert repräsentiert den Zeitraum, in dem das animierte Element die Endkante des Scrollports kreuzt, wobei `0%`-Fortschritt eintritt, wenn die Startkante des Elements mit der Endkante des Scrollports übereinstimmt, und `100%`-Fortschritt eintritt, wenn die Endkante des Elements die Endkante des Scrollports erreicht, was bedeutet, dass es vollständig in den Scrollport gescrollt ist.

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

Beachten Sie, wie die Effekte ähnlich sind, außer wenn `500px` ausgewählt wird und das animierte Element größer als der Container ist.
Der `entry-crossing`-Bereich erzeugt die gleichen Ergebnisse wie `entry` wenn das Element gleich oder kleiner als der Scrollport ist, jedoch wenn das Element größer als der Scrollport ist, tritt `100%` später ein, und zwar erst dann, wenn die Endkante in den Viewport eingetreten ist.
Der Animationszuordnungsbereich ist die Größe des Subjekts und nicht auf die Größe des Scrollports begrenzt.

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

Der `exit-crossing`-Wert repräsentiert den Zeitraum, in dem das animierte Element die Startkante des Scrollports kreuzt, wobei `0%`-Fortschritt eintritt, wenn die Startkante des Elements mit der Startkante des Scrollports übereinstimmt, und `100%`-Fortschritt eintritt, wenn die Endkante des Elements die Startkante des Scrollports erreicht.

{{EmbedLiveSample("svg_exit_crossing", "100%", "540")}}

Mit `exit-crossing` beginnt die Animation, sobald das Subjekt den Scrollport abdeckt (mit `exit` beginnt die Animation erst, wenn die Endkante des Subjekts ins Blickfeld tritt). In beiden Fällen setzt sich die Animation fort, bis das Subjekt vollständig die Startkante des Scrollports verlässt.

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

Der `exit-crossing`-Effekt liefert die gleichen Ergebnisse wie `exit`, wenn das Element gleich oder kleiner als der Scrollport ist, aber wenn das Element größer als der Scrollport ist, tritt `0%` früher auf und zwar sobald die Startkante des Elements die Startkante des Scrollports erreicht, anstatt zu warten, bis die Endkante des Elements den Scrollport erreicht.

{{EmbedLiveSample("exit_crossing", "100%", "400")}}

Wie bei `entry-crossing` ist der Animationszuordnungsbereich die Größe des Subjekts und nicht auf die Größe des Scrollports begrenzt.

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
### Weitere Fortschrittspunktwerte

In diesem Leitfaden haben wir die Fortschrittspunkte `0%` und `100%` erwähnt. Die Werte des Animationsbereichs sind nicht auf diese Fortschrittspunkte beschränkt. Sie können jeden der benannten Animationsbereichswerte um einen festgelegten Betrag oder einen Prozentsatz des gesamten Animationszuordnungsbereichs versetzen. Dies wird im [insets]() Leitfaden behandelt. -->

## Siehe auch

- {{cssxref("timeline-range-name")}} Datentyp
- [Keyframe Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Scroll-gesteuerte Animationszeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
