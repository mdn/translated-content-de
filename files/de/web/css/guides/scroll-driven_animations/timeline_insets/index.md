---
title: Verständnis von Zeitachsen-Einzügen
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_insets
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Standardmäßig verfolgen [Ansichtsfortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente über den gesamten [Anwendungsbereich der Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#the_animation_attachment_range). Der `0%`-Fortschrittspunkt befindet sich am Beginn des Bereichs, während der `100%`-Fortschrittspunkt am Ende liegt. Der Anwendungsbereich der Animation kann durch Festlegen eines [Zeitachsenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) geändert werden, und die Position der `0%`- und `100%`-Fortschrittspunkte entlang des Bereichs kann durch Setzen von Einzügen in Form von Längen oder Prozentwerten angepasst werden.

Dieser Leitfaden erklärt, wie Sie die Animationszeitachse auf einen bestimmten Teil des Anwendungsbereichs der Animation mit Längen- oder Prozentwert-Einzügen begrenzen können.

## Animationszeitachsen: Ein Grundlagentext

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden erstellt, indem benannte {{cssxref("@keyframes")}}-Animationen definiert werden, die das Verhalten einer Animation festlegen, und dann die Keyframe-Animation mithilfe des Animationsnamens an ein Element angehängt wird.

Die Animationszeitachse des Elements, die durch die {{cssxref("animation-timeline")}}-Eigenschaft definiert wird, bestimmt, wie und wann das Element durch diese Keyframes fortschreitet. Standardmäßig basiert die Zeitachse auf der Zeit, wobei die zeitorientierte Standard-Dokument-Timeline des Dokuments verwendet wird [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline).

Das Modul für [scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Scroll-Fortschritts- und Ansichtsfortschritts-Zeitachsen, die Methoden zur Animation von Eigenschaftswerten entlang einer scrollbasierten Zeitachse statt der standardmäßigen zeitorientierten Dokument-Zeitachse sind. In diesem Artikel werden wir nur über Ansichtsfortschritts-Zeitachsen sprechen, da [Scroll-Fortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) für Zeitachsen-Einzüge nicht relevant sind.

### Ansichtsfortschritts-Zeitachsen

Mit [Ansichtsfortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) wird die Zeitachse oder der Fortschritt der Animation durch die Sichtbarkeit des Elements statt durch den Zeitverlauf gesteuert, wobei der Fortschritt der Keyframes mit der Position und Sichtbarkeit des Subjektelements innerhalb des Scrollcontainers verknüpft ist. Die Animation schreitet voran und läuft rückwärts, je nachdem, ob das Element durch den Scrollbereich vorwärts oder rückwärts bewegt wird. Die Animation erfolgt nur, wenn mindestens ein Teil des Elements innerhalb seines Scrollbereichs sichtbar ist und pausiert, wenn das Scrollen pausiert.

```css live-sample___svg_view
.animated_element {
  animation-name: nameOfAnimation;
  animation-timeline: view();
}
```

Das Festlegen eines {{cssxref("animation-name")}} wendet die Animation auf das ausgewählte Element an.

> [!NOTE]
> Die Eigenschaft `animation-timeline` sollte immer nach allen `animation`-Kurzschrift-Deklarationen kommen. Während die Kurzschrifts-Eigenschaft nicht verwendet werden kann, um die `animation-timeline`-Eigenschaft festzulegen, setzt sie die Zeitachse auf die standardmäßige zeitorientierte Dokument-Zeitachse zurück.

> [!NOTE]
> In allen Beispielen ist der {{Glossary("scroll_container", "Scrollcontainer")}} `250px` hoch und wir verwenden die Standardwerte für {{cssxref("animation-iteration-count")}} (`1`), {{cssxref("animation-delay")}} (`0s`) und {{cssxref("animation-direction")}} (`normal`). Wir setzen die {{cssxref("animation-timing-function")}} auf `step-end` und die {{cssxref("animation-fill-mode")}} auf `forward`, um deutlicher zu machen, wann die Animationswiederholung noch nicht begonnen hat, wann sie aktiv ist, und wann sie abgeschlossen ist. Weitere Informationen finden Sie im [Verwendung von CSS-Animationen-Leitfaden](/de/docs/Web/CSS/Guides/Animations/Using).

Beim Hochscrollen schreitet die Animation voran. Beim Herunterscrollen läuft die Animation rückwärts.

{{EmbedLiveSample("initial", "100%", "400")}}

In diesem Beispiel erfolgt die Animation immer dann, wenn irgendein Teil des Subjektelements im Scrollbereich sichtbar ist. Standardmäßig beginnen Ansichtsfortschritts-Animationen genau dann, wenn die obere Kante des Subjektelements mit der unteren Kante des Scrollcontainers ausgerichtet ist, und enden, indem sie `100%` Fortschritt erreichen, wenn die Endkante mit der Startkante des Containers ausgerichtet ist, unabhängig von der Größe des Subjektelements. Standardmäßig wird die Animation angewendet, wenn irgendein Teil des Subjekts im Scrollbereich sichtbar ist.

### Anwendungsbereiche von Animationen

In einer [Ansichtsfortschritts-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), wenn keine Animationsbereichseigenschaften definiert sind, ist der `<timeline-range-name>` `normal`, was standardmäßig `cover` ist. Die Animation wird angewendet, wann immer irgendein Teil des Subjektelements sichtbar ist. Das bedeutet, dass der standardmäßige **Anwendungsbereich der Animation** die Summe der Höhe des Scrollcontainers und der Höhe des Subjektelements ist, wobei diese zusätzliche Höhe an die Endkante des Scrolls angehängt wird. In unserem Beispiel ist, da der Scrollcontainer `250px` hoch ist und das Subjekt `50px`, `250px` oder `500px` hoch ist, der vertikale Anwendungsbereich der Animation `300px`, `500px` oder `750px` entsprechend.

Die `0%`-Fortschrittsmarke tritt auf, wenn die Startkante des Subjektelements an der Endkante des Scrollbereichs schneidet, und erreicht `100%` Fortschritt, wenn die Endkante des Subjekts über die Startkante des Scrollbereichs hinausgeht. Dies sind die oberen und unteren Kanten des Subjekts und des Scrollbereichs beim vertikalen Scrollen und die linken und rechten oder rechten und linken Kanten beim horizontalen Scrollen, abhängig vom Schreibmodus.

Das folgende Diagramm veranschaulicht die Position des Subjekts an den `0%`- und `100%`-Fortschrittspunkten für die drei Subjektgrößen:

```html hidden live-sample___svg_view
<div>
  <svg viewBox="-1 -1 462 1252" xmlns="http://www.w3.org/2000/svg">
    <title>Default view progress timeline</title>
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="125" y="250" />
    <rect class="large end" width="100" height="500" x="240" y="0" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="125" y="750" />
    <rect class="large start" width="100" height="500" x="240" y="750" />
    <text y="520" x="360">100%</text>
    <line x1="0" x2="350" y1="500" y2="500" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>
</div>
```

{{EmbedLiveSample("svg_view", "100%", "720")}}

Die gelben Subjektelemente stellen die Position des Elements dar, wenn das `from`-Keyframe angewendet wird, das der `0%`-Fortschrittsmarke des Animationsbereichs entspricht. Das rote markiert den Ort des animierten Elements relativ zum Scrollbereich, wenn das `to`-Keyframe angewendet wird, was das Ende der Animation oder die `100%`-Fortschrittsmarke darstellt. Das Grau stellt den Scrollbereich dar.

Standardmäßig erfolgt die Animation des Elements, während es „im Sichtbereich“ ist, aber diese Standarddefinition von „im Sichtbereich“ passt möglicherweise nicht zu Ihren Bedürfnissen. Glücklicherweise können wir steuern, welche Kanten die Kanten des Anwendungsbereichs der Animation definieren, und dann den Anfang und das Ende dieses Bereichs mit den Animationsbereichseigenschaften versetzen.

### Animationsbereichseigenschaften

Die {{cssxref("animation-range")}}-Eigenschaften ermöglichen das Festlegen eines benannten Zeitachsenbereichs wie `contain` oder `exit-crossing`, der den verwendeten Bereich vom Standardbereich `cover` ändert. Sie können auch einen Wert vom Typ {{cssxref("length-percentage")}} einschließen, der den Anwendungsbereich vom Anfang des Bereichs absetzt. Prozentsätze beziehen sich auf den benannten oder den Standardzeitachsenbereich.

Benannte Zeitachsenbereiche definieren die Teile einer [`ViewTimeline`](/de/docs/Web/API/ViewTimeline), die den Bereich einer Animation bestimmen, und legen den Anfang und das Ende des Anwendungsbereichs der Animationen fest.

Die `animation-range`-Eigenschaft ist eine Kurzschrifts-Eigenschaft und definiert die Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}}. Die `animation-range-start`-Eigenschaft definiert die Position des Subjektelements, wenn die Animation beginnt. Die `animation-range-end`-Eigenschaft definiert die Position des Subjektelements, wenn die Animation endet.

Siehe den [Leitfaden zu Zeitachsenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names), um mehr über die verschiedenen benannten Zeitachsenbereiche zu erfahren. Dieser Leitfaden konzentriert sich darauf, wie die {{cssxref("length-percentage")}}-Einzugswerte funktionieren.

## Einzüge mit Längen festlegen

Die Eigenschaften `animation-range-start` und `animation-range-end` akzeptieren jeweils einen benannten Animationsbereich, einen {{cssxref("length-percentage")}}-Versatzwert oder beides. Jeder Längen- oder Prozentversatz wird vom _Anfang_ des Anwendungsbereichs der Animation gemessen.

Wenn eine {{cssxref("length")}} festgelegt ist, ist der Versatz ziemlich intuitiv.
Hier verwenden wir die Eigenschaften `animation-range-start` und `animation-range-end`, um den Animationszeitstrahl einzuziehen. Dies definiert einen Teilbereich des vollständigen Anwendungsbereichs der Elementanimation als aktives Intervall, wobei die `<length>`-Werte die Abstände vom Anfang des Standardanwendungsbereichs der Animation `normal` angeben.

```css live-sample___inset_length
.animated_element {
  animation-range-start: 1em;
  animation-range-end: 125px;
}
```

Der Anfang und das Ende des Animationsbereichs sind `1em` bzw. `125px` vom Anfang des Anwendungsbereichs der Animation entfernt. Da der Standardbereich der Zeitachse `normal`, das zu `cover` aufgelöst wird, ist, ist der Anfang des Anwendungsbereichs der Animation die Blockendkante des Containers.

```css hidden live-sample___inset_length
:root {
  --start: 1em;
  --end: 125px;
}

article {
  background-image: linear-gradient(
    to top,
    transparent calc(var(--start) - 1px),
    #ccc calc(var(--start) - 1px) calc(var(--start) + 1px),
    transparent calc(var(--start) + 1px) calc(var(--end) - 1px),
    #ccc calc(var(--end) - 1px) calc(var(--end) + 1px),
    transparent calc(var(--end) + 1px)
  );
}
```

{{EmbedLiveSample("inset_length", "100%", "400")}}

Wir haben Linien `1em` und `125px` von der Blockendkante des Scrollcontainers entfernt hinzugefügt. Die Animation startet, wenn die Blockstartkante des Subjektelements die `1em`-Linie erreicht und endet, wenn sie die `125px`-Linie erreicht.

In diesem Fall, da der Anwendungsbereich der Animation bei beiden Einzugswerten auf `cover` gelöst wird, ist die Lage der Einzüge relativ einfach.

### Auswirkung benannter Bereiche auf Längenoffests

Der Versatzabstand ist immer ausgehend vom Anfang des zugehörigen Animationsbereichs. In diesem Beispiel setzen wir den `animation-range-start` auf `50px` vom Anfang des Standardbereichs `normal` und setzen den `animation-range-end` auf `100px` vom Beginn des explizit gesetzten `entry`-Bereichs:

```css live-sample___different_length
.animated_element {
  animation-range-start: 50px;
  animation-range-end: entry 100px;
}
```

```html hidden live-sample___different_length live-sample___exit_length live-sample___exit_percent live-sample___center
<main>
  <article>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>Scroll down ⇩</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <section class="triple">
      <div>
        <i id="A" class="animated_element">50px</i>
        <i id="B" class="animated_element">250px</i>
        <i id="C" class="animated_element">500px</i>
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

{{EmbedLiveSample("different_length", "100%", "310")}}

Da die Startkante sowohl des `normal`-Bereichs als auch des `entry`-Bereichs die Endkante des Containers ist, beginnt die Animation, wenn die Startkante des Subjekts `50px` von der Unterseite des Scrollbereichs entfernt ist, und endet, indem es `100%` Fortschritt erreicht, wenn die Startkante des Subjekts `100px` von der Unterseite des Scrollbereichs entfernt ist, unabhängig von der Größe des Subjekts. Während die Größe des `entry`-Bereichs für die drei unterschiedlichen Subjektgrößen unterschiedlich ist, spielte in diesem Fall die Größe des zugrunde liegenden Bereichs keine Rolle.

### Länge-Offests mit unterschiedlichen Bereichen

Die Größe des Bereichs ist wichtig, wenn der Bereich nicht an der Endkante des Elements beginnt, wie bei `exit` und `exit-crossing`, oder wenn der Versatz ein Prozentwert ist. Diese Tatsache und die Tatsache, dass Sie Animation-Bereichsnamen kombinieren können, machen Einzugsoffsets für Ansichtsfortschritts-Zeitachsen etwas komplizierter zu verstehen als nicht vorgenommene [Zeitachsenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).

Zum Beispiel, wenn `exit` als Zeitachsenbereichsname festgelegt wird, ist die Subjektgröße wichtig, da sie die Lage der Endkante des Bereichs bestimmt.

```css live-sample___exit_length
.animated_element {
  animation-range-start: entry 60px;
  animation-range-end: exit 75px;
}
```

Sowohl beim `entry` als auch beim `exit` ist der Bereich von der Größe des Subjekts abhängig, wobei die Größe auf die Größe des Scrollbereichs beschränkt ist. Das bedeutet, dass die Höhe der `entry`- und `exit`-Bereiche die Höhe des Kastens sowohl in den `50px`- als auch `250px`-Beispielen ist, während im `500px`-Beispiel der Bereich auf die Höhe des Scrollbereichs begrenzt ist, der `250px` hoch ist.

{{EmbedLiveSample("exit_length", "100%", "310")}}

Wir haben einige Linien hinzugefügt, um die Erklärungen zu erleichtern: die untere blaue Linie ist `60px` von der Endkante des Scrollbereichs entfernt, und die obere rote Linie ist `75px` von dieser Endkante entfernt. Hier beginnen bzw. enden die Animationsbereiche.

Dieses Beispiel zeigt mehrere wichtige Merkmale, die wir ausführlicher erläutern werden, darunter:

- Offsets werden [ausgehend vom jeweiligen benannten Bereich gemessen](#ausgehend_vom_anfang_des_bereichs_gemessen)
- Offsets können [über die Kanten des Scrollbereichs hinaus erfolgen](#über_die_kanten_des_scrollbereichs_hinaus)
- [Bereiche können abgeschnitten werden](#effekte_des_abschneidens), wenn das Subjekt größer als der Scrollbereich ist

#### Ausgehend vom Anfang des Bereichs gemessen

Da die Offset-Position immer relativ zum Anfang des Deklarations-Animationsbereichs ist, beginnt die Animation für alle drei Elemente, wenn die Startkante des Elements den Punkt erreicht, der `60px` vom Start des `entry`-Bereichs entfernt ist.

Der `animation-range-end`-Wert definiert die Position, bei der die Animation. Der Wert `exit 75px` bedeutet im Grunde "wenn `75px` des Subjekts über die Startkante des Scrollbereichs hinausgegangen sind." Dies variiert für jedes Subjekt. Für das `50px`-Subjekt tritt dies erst `25px` nachdem es den Scrollbereich verlassen hat ein; wenn das Element nicht sichtbar ist. Das Ende des Animationsbereichs für sowohl das `250px`- als auch das `500px`-Subjekt tritt auf, wenn ihre untere Endkante die obere blaue Linie schneidet; `75px` von der Endkante des Scrollbereichs entfernt. Warum sind ihre Endoffsets gleich? Wegen des [Abschneidens](#effekte_des_abschneidens)! Die maximale Größe des benannten Animationsbereichs ist auf die Größe des Scrollbereichs begrenzt. Der `exit`-Bereich für beide Subjekte ist gleich, daher sind die Bereichsendoffsets gleich.

#### Über die Kanten des Scrollbereichs hinaus

Für unser `50px` hohes Subjekt ist der `exit`-Bereich `50px` hoch anliegend der Startkante des Scrollbereichs. Das Festlegen von `animation-range-end: exit 75px`.

#### Effekte des Abschneidens

Mit unserem `250px` hohen Container, wenn das Subjekt `250px` oder `500px` hoch ist, ist der `exit`-Bereich die Größe des Containers, wobei der Start die Endkante des Scrollcontainers ist. Mit einem `75px`-Offset tritt das Ende der Animation auf, wenn die Endkante des Subjekts `75px` von der Endkante des Scrollcontainers entfernt ist (angezeigt durch die obere rote Linie).

Da die Offset-Position immer relativ zum Anfang des benannten oder des Standardanimationsbereichs ist, wirkt sich in unserem Beispiel das Abschneiden auf das `animation-range-end` des großen Subjekts aus. Wir haben das Ende des Bereichs auf `exit 75px` gesetzt, was `75px` von der Startkante des `exit`-Bereichs entfernt ist. Wenn das Subjekt dieselbe Größe wie der Scrollbereich (unser `250px`-Subjekt) oder größer (unser `500px`-Subjekt) hat, ist das Ende des Animationsbereichs `75px` von der Endkante des Scrollbereichs entfernt, was `75px` vom Anfang des auf den Scrollbereich beschränkten `exit`-Bereichs entfernt ist.

```css hidden live-sample___exit_length
article {
  background-image: linear-gradient(
    to top,
    transparent 59.5px,
    blue 59.5px 60.5px,
    transparent 60.5px 74.5px,
    red 74.5px 75.5px,
    transparent 75.5px /* 174.5px,
    green 174.5px 154.5px,
    transparent 175.5px*/
  );
}
.animated_element {
  align-self: flex-end;
}
```

```css hidden live-sample___different_length live-sample___exit_length live-sample___exit_percent live-sample___center
@layer setup {
  #A {
    height: 50px;
  }
  #B {
    height: 250px;
  }
  #C {
    height: 500px;
  }
  div {
    display: flex;
    gap: 1em;
  }
  main {
    padding: 20px 0 0 20px;
    margin-bottom: 2em;
  }
  article {
    outline: 3px dashed;
    width: 475px;
    margin: auto;
    overflow: scroll;
    position: relative;
    height: 250px;
    box-sizing: content-box;
    background-image: linear-gradient(
      to top,
      transparent 49.5px,
      #666 49.5px 50.5px,
      transparent 50.5px 99.5px,
      #666 99.5px 100.5px,
      transparent 100.5px
    );
    background-origin: content-box;
  }

  p {
    padding: 10px;
    margin: 10px;
  }

  .animated_element {
    --clr: yellow;
    background-color: hsl(from var(--clr) h s calc(l * 1.4));
    display: block;
    animation: showAnim step-end 1 forwards;
    animation-timeline: view();
    flex: 1 0 auto;
  }

  i {
    font-family: sans-serif;
    font-size: 1.5rem;
  }

  @keyframes showAnim {
    from {
      --clr: green;
    }
    to {
      --clr: red;
    }
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
}
```

### Negative Längen

Bis zu diesem Punkt waren alle Offsets größer als null. Es ist wichtig zu beachten, dass negative Längen gültig sind. Ein negativer Offset an `animation-range-start` verlängert den Bereich, während ein negativer Offset an `animation-range-end` den Bereich verkürzt.

Vergleichen wir die negativen Einzüge mit den `0`-Werten:

```css live-sample___exit_length_negative
#A {
  animation-range-start: contain -25px;
  animation-range-end: exit -25px;
}
#B {
  animation-range-start: contain 0;
  animation-range-end: exit 0;
}
```

{{EmbedLiveSample("exit_length_negative", "100%", "380")}}

Der erste Animationsbereich ist um `25px` hin zur Endecke des Containers versetzt.

```css hidden live-sample___exit_length_negative
fieldset.double {
  display: none;
}
#A::after {
  content: " (-25px)";
}
#B::after {
  content: " (0)";
}
```

## Einzüge mit Prozentwerten festlegen

Ähnlich wie Längenwerte definieren Prozentwerte Offsets vom _Anfang_ des Anwendungsbereichs der Animation. Die Prozentoffsets beziehen sich auf die Dimension des Zeitachsenbereichs, nicht relativ zum Scrollbereich. Aus diesem Grund sind Prozentwerte für die meisten Menschen nicht so intuitiv wie Längenwerte (wobei Längenwerte auch nicht so intuitiv waren).

Hier verwenden wir `animation-range-start` und `animation-range-end`, um den Animationszeitstrahl einzuziehen. Während wir dieselben Eigenschaften verwenden, setzen wir `<percentage>`-Werte anstelle von `<length>`-Werten:

```css live-sample___inset_percent
.animated_element {
  animation-range-start: 20%;
  animation-range-end: 60%;
}
```

```css hidden live-sample___inset_percent live-sample___inset_cover
i {
  background-image: linear-gradient(
    to bottom,
    transparent calc(20% - 1px),
    #3333 calc(20% - 1px) calc(20% + 1px),
    transparent calc(20% + 1px) calc(60% - 1px),
    #3333 calc(60% - 1px) calc(60% + 1px),
    transparent calc(60% + 1px)
  );
}
article {
  --total: calc(var(--animElHeight) + 250px);
  background-image:
    linear-gradient(
      to top,
      transparent 0 calc(var(--total) * 0.2 - 1px),
      green calc(var(--total) * 0.2 - 1px) calc((var(--total) * 0.2) + 1px),
      transparent calc(var(--total) * 0.2 + 1px)
    ),
    linear-gradient(
      to top,
      transparent 0 calc(var(--total) * 0.6 - 1px),
      red calc(var(--total) * 0.6 - 1px) calc((var(--total) * 0.6) + 1px),
      transparent calc(var(--total) * 0.6 + 1px)
    ),
    linear-gradient(
      to top,
      transparent 0 calc(var(--containerHeight) * 0.2 - 0.5px),
      #3333 calc(var(--containerHeight) * 0.2 - 0.5px)
        calc(var(--containerHeight) * 0.2 + 0.5px),
      transparent calc(var(--containerHeight) * 0.2 + 0.5px)
        calc(var(--containerHeight) * 0.6 - 0.5px),
      #3333 calc(var(--containerHeight) * 0.6 - 0.5px)
        calc(var(--containerHeight) * 0.6 + 0.5px),
      transparent 0 calc(var(--containerHeight) * 0.6 + 0.5px)
    );
  background-position: local, local, fixed;
}
```

Dies definiert das aktive Intervall, das `20%` in den Standardanwendungsbereich eindringt und `60%` durch diesen gleichen Bereich endet. Der Standardanwendungsbereich der Animation `normal`, der sich wie [`cover`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#cover) verhält, ist die Höhe des Scrollcontainers plus die Höhe des Subjektelements, was bedeutet, dass der Bereich je nach ausgewähltem Radio-Button unterschiedlich sein wird.

{{EmbedLiveSample("inset_percent", "100%", "400")}}

Zur Veranschaulichung gibt es zwei dunkle Linien, die den Container an den `20%`- und `60%`-Punkten des gesamten Animationsbereichs überqueren. Die Animation beginnt, wenn die Blockstartkante den `20%`-Punkt erreicht, was die untere grüne Linie ist. Die Animation endet, wenn die Startblockkante `60%` des Weges durch den normalen Bereich ist, was die obere rote Linie ist.

Nur wenn das Element `50px` hoch ist, ist die Oberseite des Subjekts noch im Scrollbereich, wenn das Ende der Animation erreicht wird; es gibt keine obere rote Linie, wenn `250px` oder `500px` ausgewählt sind, da das Ende des Animationsbereichs außerhalb des Scrollbereichs ist.

Basierend auf der Höhe unserer Subjekte ist die `20%`-Marke entweder `60px`, `100px` oder `150px` von der Endkante des Scrollbereichs entfernt (markiert durch die grüne Linie, die sich immer im Sichtbereich befindet), und die `60%`-Marke ist `180px`, `300px` oder `450px` vom gleichen Punkt (markiert mit einer roten Linie, aber nur sichtbar für das `50px`-Subjekt).

Zu Illustrationszwecken gibt es zwei hellgraue Linien, die den Container `20%` und `60%` des Weges durch den Scrollbereich überqueren, die `50px` und `150px` von der Unterkante des Scrollbereichs entfernt sind. Da sich die Prozentsätze der `animation-range-*` auf den Zeitachsenbereich und nicht den Scrollbereich beziehen, zeigen diese Linien nur, wie die Prozentsätze **nicht** übereinstimmen. Wir haben auch zwei horizontale hellgraue Linien hinzugefügt, die über jedes Subjekt bei ihren eigenen `20%`- und `60%`-Marken verlaufen. Diese Linien stimmen mit den hellgrauen Linien des Scrollbereichs überein, wenn die Animationen starten und enden.

Das folgende Bild zeigt, wo sich die Subjektelemente befinden, wenn die Animation beginnt (das `0%`-Keyframe) und endet (das `100%`-Keyframe).
Dieses Bild enthält die Einzüge aus der Animation-Zeitachse aus der vorherigen Demonstration und die Zeitachse ohne Einzüge zum Vergleich.

```html hidden live-sample___svg_insets2
<div>
  <svg viewBox="-1 -1 482 1252" xmlns="http://www.w3.org/2000/svg">
    <title>Default view progress timeline with insets</title>
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small end" width="100" height="50" x="10" y="571" />
    <rect class="medium end" width="100" height="250" x="120" y="450" />
    <rect class="large end" width="100" height="500" x="230" y="300" />
    <rect class="small start" width="100" height="50" x="10" y="689" />
    <rect class="medium start" width="100" height="250" x="120" y="649" />
    <rect class="large start" width="100" height="500" x="230" y="600" />
    <rect width="96" height="48" x="122" y="602" fill="url(#g)" />
    <rect width="96" height="198" x="232" y="527" fill="url(#g)" />
    <text y="610" x="385">60%</text>
    <line x1="0" x2="385" y1="600" y2="600" />
    <line x1="0" x2="385" y1="700" y2="700" />
    <text y="710" x="385">20%</text>
  </svg>
  <svg viewBox="-1 -1 482 1252" xmlns="http://www.w3.org/2000/svg">
    <title>Default view progress timeline</title>
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="125" y="250" />
    <rect class="large end" width="100" height="500" x="240" y="0" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="125" y="750" />
    <rect class="large start" width="100" height="500" x="240" y="750" />
    <text y="520" x="385">100%</text>
    <line x1="0" x2="385" y1="500" y2="500" />
    <line x1="0" x2="385" y1="750" y2="750" />
    <text y="760" x="390">0%</text>
  </svg>
</div>
```

{{EmbedLiveSample("svg_insets2", "100%", "710")}}

Wie zuvor stellt das Gelbe die Position des Elements dar, wenn das `from`-Keyframe angewendet wird, das Rote stellt den Ort dar, wenn das `to`-Keyframe angewendet wird, und das Grau repräsentiert den Scrollbereich. Die gestreiften Bereiche sind, wo die roten und gelben Elementdarstellungen überlappen. Zur Illustrationszwecken haben wir gestrichelte schwarze horizontale Linien `20%` und `60%` weg durch den Sichtbereich hinzugefügt, beginnend von der Unterkante.

Die Animation beginnt nur, wenn das Element die `20%`-Marke entlang des Animationsanwendungsbereichs erreicht. Dieser Punkt ist `60px`, `100px` oder `150px` von der unteren Kante des Scrollbereichs entfernt, abhängig von der Größe des Elements. Die Position des Subjektelements an diesem Punkt, die die Position des Elements darstellt, wenn das `from`- oder `0%`-Keyframe angewendet wird, wird in Gelb gezeigt.

Das Rote stellt den Ort des animierten Elements relativ zum Scrollbereich dar, wenn das `to`- oder `100%`-Keyframe angewendet wird, was das Ende der Animation darstellt. Dieser Punkt ist entweder `180px`, `300px` oder `450px` von der unteren Kante des Scrollbereichs entfernt, abhängig von der Größe des Subjekts. Die Animation erfolgt, wenn sich das Element zwischen den `to`- und `from`-Positionen befindet.

Sie haben vielleicht etwas Interessantes an den gestrichelten horizontalen Linien bemerkt: Wenn die Animation startet, ist die Linie, die `20%` von der Endkante des Sichtbereichs entfernt ist, `20%` von der _Oberseite_ des Subjektelements entfernt und die Linie, die `60%` von der Endkante des Sichtbereichs entfernt ist, ist `60%` von der _Oberseite_ des Subjektelements entfernt, wenn die Animation endet. Dies wurde durch die sehr hellgrauen Linien in der Live-Demonstration für dieses Beispiel veranschaulicht.

### Die Größe des Subjekts spielt eine Rolle

Wie wir bei der [Festlegung von Einzügen mit Längen](#einzüge_mit_längen_festlegen) gesehen haben, kann die Größe des Subjekts einen Unterschied machen. Beim Festlegen von Animationsbereichen beziehen sich Prozentwerte auf die Größe des Anwendungsbereichs der Animation, nicht auf den Scrollbereich. Für die meisten benannten Bereiche hängt die Größe des Anwendungsbereichs teilweise von der Größe des Subjekts ab. Da sich Prozentsätze auf die Größe des Bereichs beziehen, wirkt sich der benannte Bereich auf die aufgelöste Größe der Einzüge aus. Abhängig vom Namen kann auch die Startposition ändern, was sich auf die Lage des Bereichs und damit auf die Lage der Fortschrittspunkte auswirkt.

In diesem Beispiel definieren wir einen aktiven Bereich, der `40%` der Größe des Subjekts beträgt:

```css live-sample___exit_percent
.animated_element {
  animation-range-start: exit-crossing -20%;
  animation-range-end: exit-crossing 20%;
}
```

```css hidden live-sample___exit_percent
article {
  background-image: none;
}
body .animated_element {
  align-self: start;
}
```

{{EmbedLiveSample("exit_percent", "100%", "400")}}

Die Animation dauert `40%` des Anwendungsbereichs der Animation. Während Sie scrollen, beachten Sie, je größer das Subjekt, desto länger der Bereich. Bei `exit-crossing` wird der Animationsbereich nicht beschnitten; es ist die Größe des Subjekts, selbst wenn das Subjekt größer als der Sichtbereich ist, wobei der Bereich an die Startkante des Scrollbereichs anliegt und über die Endkante hinausgeht, wenn das Subjekt größer als der Scrollbereich ist.

Mit den `-20%` und `20%` Einzügen wird die Animation des `50px`-Subjekts über `20px` animiert: die Animation beginnt, wenn das Ende des Subjekts `-10px` vom Beginn des Bereichs entfernt ist, `60px` vom Austritt aus dem Bildschirm, und endet, wenn das Ende des Subjekts `40px` vom Austritt aus dem Bildschirm entfernt ist. Das mittlere Subjekt wird über `100px` animiert: die Animation beginnt, wenn das Ende des Subjekts `-50px` vom Bereichsbeginn entfernt ist, `50px` vom Ende des Scrollbereichs entfernt, und endet, wenn das Ende des Subjekts `50px` im Sichtbereich ist. Das große Subjekt wird über `200px` animiert, beginnt, wenn die Unterseite `600px` von der Startkante des Containers entfernt ist, wobei nur `150px` im Sichtbereich sind, und endet, wenn die Unterseite 400px von dieser Startkante entfernt ist, wenn `100px` aus der Startkante gescrollt wurden.

### Prozentsätze gleich dem Scrollbereich

Wenn es darum geht, mit Prozentsätzen zu versetzen, ist der am wenigsten komplizierte benannte Zeitachsenbereich `contain`. Mit `contain` ist der Animationsbereich so groß wie der Scrollbereich, was bedeutet, dass die Start- und Endprozentsätze relativ zum Scrollbereich sind. Aus diesem Grund sollten Sie bei der Verwendung von Einzügen `contain` anstelle des Bereichs verwenden, der zu `cover` aufgelöst wird.

Der `contain`-Bereich _beinhaltet_ die Animation vollständig im Scrollbereich. Er stellt den Bereich dar, in dem das Hauptelement entweder vollständig im Sichtbereich liegt oder vollständig überblickt im Sichtbereich sichtbar ist, je nach Scrollbereich. Mit `contain`, wenn das Subjekt die gleiche Größe wie oder kleiner als der Scrollbereich ist, kann es vollständig sichtbar sein. Wenn das Element die gleiche Größe wie der Container hat, läuft die Animation jedoch `0px` ab. Das bedeutet, dass sie läuft, aber für den Benutzer nicht sichtbar ist.

Mit anderen Worten, ohne die Größe des Containers oder der Subjekte zu kennen, können wir unsere Animation auf das mittlere Scrollbereich eingeschränken, obwohl die Animation über `0px` erfolgt, wenn das Subjekt die gleiche Größe wie der Scrollbereich hat.

```css live-sample___center
.animated_element {
  animation-range-start: contain 25%;
  animation-range-end: contain 75%;
}
```

```css hidden live-sample___center
article {
  background-image: linear-gradient(
    transparent 25%,
    #ededed 25% 75%,
    transparent 75%
  );
}
body .animated_element {
  align-self: center;
}

.animated_element {
  background-image:
    linear-gradient(black, black), linear-gradient(black, black);
  background-size: 1px 1px;
  background-position:
    center 25%,
    center 75%;
  background-repeat: repeat-x;
```

{{EmbedLiveSample("center", "100%", "310")}}

Die horizontalen Linien zeigen die mittlere Hälfte des Scrollbereichs und die mittlere Hälfte jedes Subjekts an.

```html hidden live-sample___svg_contain live-sample___svg_insets2 live-sample___svg_view
<svg class="gradient">
  <title>Striped repeating gradient</title>
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

```css hidden live-sample___svg_contain live-sample___svg_insets2 live-sample___svg_view
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
  fill: #dedede;
}
text {
  font: 40px monospace;
  fill: black;
}
line {
  stroke: black;
  stroke-width: 2;
  stroke-dasharray: 7;
}
.gradient {
  height: 1px;
  width: 1px;
  position: absolute;
  top: -100px;
}
```

```html hidden live-sample___initial live-sample___entry_exit live-sample___inset_percent live-sample___inset_length live-sample___inset_cover live-sample___inset_contain live-sample___cover_contain live-sample___exit_length_negative live-sample___entry_crossing live-sample___exit_crossing
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

```html hidden live-sample___initial live-sample___entry_exit live-sample___inset_percent live-sample___inset_length live-sample___inset_cover live-sample___inset_contain live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing live-sample___exit_length_negative
<fieldset>
  <legend>Select the height of the animated element</legend>

  <label><input name="height" value="50" type="radio" checked /> 50px</label>
  <label><input name="height" value="250" type="radio" /> 250px</label>
  <label><input name="height" value="500" type="radio" /> 500px</label>
</fieldset>
<fieldset class="double">
  <legend>Select the animation range</legend>

  <label><input name="range" value="20" type="radio" checked />20% / 60%</label>
  <label><input name="range" value="0" type="radio" /> 0% / 100%</label>
</fieldset>
```

```css hidden live-sample___initial live-sample___entry_exit live-sample___inset_percent live-sample___inset_length live-sample___inset_cover live-sample___inset_contain live-sample___cover_contain live-sample___exit_length_negative live-sample___entry_crossing live-sample___exit_crossing
@layer {
  :root {
    --animElHeight: 50px;
    --animElHeightWord: "50px";
    --barColor: black;
    padding-top: 20px;
    --containerHeight: 250px;
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
    width: 475px;
    margin: auto;
    overflow: scroll;
    position: relative;
    height: var(--containerHeight);
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
  i,
  .animated_element {
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
}
```

```css hidden live-sample___initial live-sample___inset_percent live-sample___inset_length live-sample___inset_cover live-sample___inset_contain
.double {
  display: none;
}
```

```css hidden live-sample___cover_contain live-sample___exit_length_negative live-sample___entry_crossing live-sample___exit_crossing live-sample___entry_exit
.one {
  display: none;
}
.double div {
  display: flex;
  gap: 10px;
}
```

## Siehe auch

- {{cssxref("timeline-range-name")}} Datentyp
- [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Scrollgesteuerte Animations-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Modul für Scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
