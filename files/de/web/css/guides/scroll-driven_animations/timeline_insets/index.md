---
title: Verständnis von Timeline-Einlässen
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_insets
l10n:
  sourceCommit: 3ad3708851fee2f25927c90e0062f259dab5df18
---

Standardmäßig verfolgen [View-Progress-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente über den gesamten [Animationsanfügebereich](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#the_animation_attachment_range). Der Fortschrittspunkt `0%` befindet sich am Anfang des Bereichs, während der Fortschrittspunkt `100%` am Ende liegt. Der Animationsanfügebereich kann durch Festlegen eines [Timeline-Bereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) geändert werden, und der Ort der `0%`- und `100%`-Fortschrittspunkte entlang des Bereichs kann durch Einstellung von Längen- oder prozentualen Einlasswerten angepasst werden.

Dieser Leitfaden erklärt, wie man die Animationstimeline auf einen bestimmten Abschnitt des Animationsbereichs mithilfe von Längen- oder prozentualen Einlasswerten begrenzt.

## Animationstimeline: Eine Einführung

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden erstellt, indem benannte {{cssxref("@keyframes")}}-Animationen definiert werden, die das Verhalten einer Animation spezifizieren und dann die Keyframe-Animation an ein Element mithilfe des Animationsnamens angehängt wird.

Die Animationstimeline des Elements, definiert durch die {{cssxref("animation-timeline")}}-Eigenschaft, bestimmt, wie und wann das Element diese Keyframes durchläuft. Standardmäßig ist die Timeline zeitbasiert und nutzt die Standard-Dokument-Timeline (`DocumentTimeline`) des Dokuments.

Das [CSS-Scroll-gesteuerte Animationsmodul](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Scroll-Fortschritts- und View-Progress-Timelines, die Methoden zur Animation von Eigenschaftswerten entlang einer Scroll-basierten statt der standardmäßigen zeitbasierten Dokument-Timeline sind. In diesem Artikel diskutieren wir nur View-Progress-Timelines, da [Scroll-Fortschritts-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) für Timelinen-Einlässe nicht relevant sind.

### View-Progress-Timelines

Bei [View-Progress-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) wird die Timeline oder der Fortschritt der Animation durch die Sichtbarkeit des Elements bestimmt, anstatt durch den Zeitablauf, wobei der Keyframe-Fortschritt an die Position und Sichtbarkeit des Subjektelements innerhalb des Scroll-Containers gebunden ist. Die Animation schreitet voran und kehrt um, je nachdem, ob das Element durch den Scrollport vorangetrieben wird oder sich zurückbewegt. Die Animation findet nur statt, wenn mindestens ein Teil des Elements innerhalb seines Scrollports sichtbar ist und pausiert, wenn das Scrollen stoppt.

```css live-sample___svg_view
.animated_element {
  animation-name: nameOfAnimation;
  animation-timeline: view();
}
```

Das Festlegen eines {{cssxref("animation-name")}} wendet die Animation auf das ausgewählte Element an.

> [!NOTE]
> Die `animation-timeline`-Eigenschaft sollte immer nach allen `animation`-Kurzschreibweise-Deklarationen stehen. Während die Kurzschreibweise-Eigenschaft nicht verwendet werden kann, um die `animation-timeline`-Eigenschaft festzulegen, setzt sie die Timeline auf die standardmäßige zeitbasierte Dokument-Timeline zurück.

> [!NOTE]
> In allen Beispielen ist der {{Glossary("scroll_container", "Scroll-Container")}} `250px` hoch und wir verwenden die Standardwerte für {{cssxref("animation-iteration-count")}} (`1`), {{cssxref("animation-delay")}} (`0s`) und {{cssxref("animation-direction")}} (`normal`). Wir setzen die {{cssxref("animation-timing-function")}} auf `step-end` und das {{cssxref("animation-fill-mode")}} auf `forward` um deutlicher zu machen, wann die Animationsiteration noch nicht begonnen hat, wann sie aktiv ist und wann sie abgeschlossen ist. Siehe den [CSS-Animationen-Leitfaden](/de/docs/Web/CSS/Guides/Animations/Using) um mehr zu erfahren.

Beim Scrollen nach oben schreitet die Animation voran. Beim Scrollen nach unten kehrt die Animation um.

{{EmbedLiveSample("initial", "100%", "400")}}

In diesem Beispiel erfolgt die Animation, wann immer irgendein Teil des Subjektelements im Scrollport sichtbar ist. Standardmäßig beginnen View-Progress-Animationen genau dann, wenn die obere Kante des Subjektelements mit der unteren Kante des Scroll-Containers in Einklang gebracht wird und enden, indem sie `100%` Fortschritt erreichen, wenn die Endkante mit der Startkante des Containers ausgerichtet wird, unabhängig von der Größe des Subjektelements. Standardmäßig wird die Animation angewendet, wenn irgendein Teil des Subjekts innerhalb des Scrollports sichtbar ist.

### Animationsanfügebereiche

In einer [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), wenn keine Animationsbereichseigenschaften definiert sind, ist das `<timeline-range-name>` `normal`, was standardmäßig `cover` ist. Die Animation wird angewendet, wann immer ein Teil des Subjektelements sichtbar ist, was bedeutet, dass der standardmäßige **Animationsanfügebereich** die Summe der Höhe des Scroll-Containers und der Höhe des Subjektelements ist, wobei diese zusätzliche Höhe am Ende des Scrolls auftritt. In unserem Beispiel, da der Scroll-Container `250px` hoch ist und das Subjekt `50px`, `250px` oder `500px` hoch ist, ist der vertikale Animationsanfügebereich `300px`, `500px` oder `750px` jeweils.

Die `0%`-Progression erfolgt, wenn die Startkante des Subjektelements den Scrollport an der Endkante durchquert und `100%` Fortschritt erreicht, wenn die Endkante des Subjekts den Scrollport an der Startkante verlässt. Dies sind die oberen und unteren Kanten des Subjekts und Scrollports beim vertikalen Scrollen sowie die linken und rechten oder rechten und linken Kanten beim horizontalen Scrollen, abhängig vom Schreibmodus.

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

Die gelben Subjektelemente repräsentieren die Position des Elements, wenn der `from`-Keyframe angewendet wird, was die `0%`-Fortschrittsmarkierung des Animationsbereichs ist. Das Rote repräsentiert die Position des animierten Elements relativ zum Scrollport, wenn der `to`-Keyframe angewendet wird, was das Ende der Animation oder die `100%`-Fortschrittsmarkierung ist. Das Grau repräsentiert den Scrollport.

Standardmäßig animiert sich das Element, während es "im Sichtbereich" ist, aber diese Standarddefinition von "im Sichtbereich" passt möglicherweise nicht zu Ihren Bedürfnissen. Glücklicherweise können wir steuern, welche Kanten die Kanten des Animationsanfügebereichs definieren und dann den Start und das Ende dieses Bereichs mit den Animationsbereichseigenschaften versetzen.

### Animationsbereichseigenschaften

Die {{cssxref("animation-range")}}-Eigenschaften ermöglichen es, einen benannten Timeline-Bereich anzugeben, wie `contain` oder `exit-crossing`, wodurch der Bereich vom Standard-`cover`-Bereich geändert wird. Sie können auch einen {{cssxref("length-percentage")}}-Wert einfügen, der den Anfügebereich vom Anfang des Bereichs versetzt. Prozentsätze beziehen sich auf den benannten oder standardmäßigen Timeline-Bereich.

Benannte Timeline-Bereiche definieren die Teile einer [`ViewTimeline`](/de/docs/Web/API/ViewTimeline), die den Bereich einer Animation definieren, und spezifizieren den Anfang und das Ende des Anfügebereichs einer Animation.

Die `animation-range`-Eigenschaft ist eine Kurzschreibweise, die die {{cssxref("animation-range-start")}}- und {{cssxref("animation-range-end")}}-Eigenschaften definiert. Die `animation-range-start` definiert die Position, an der das Subjektelement startet, wenn die Animation beginnt. Die `animation-range-end` definiert die Position des Subjektelements, wenn die Animation endet.

Siehe den [Timeline-Bereichsnamen-Leitfaden](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names), um mehr über die verschiedenen benannten Timeline-Bereiche zu erfahren. Dieser Leitfaden befasst sich mit der Funktionsweise der {{cssxref("length-percentage")}}-Einlasswerte.

## Einstellung von Einlässen mit Längen

Die `animation-range-start`- und `animation-range-end`-Eigenschaften akzeptieren jeweils einen benannten Animationsbereich, einen {{cssxref("length-percentage")}}-Offsetwert oder beides. Jeder Längen- oder Prozentsatz-Offset wird vom _Anfang_ des Animationsanfügebereichs gemessen.

Wenn eine {{cssxref("length")}} eingestellt wird, ist der Offset ziemlich intuitiv.
Hier verwenden wir die `animation-range-start`- und `animation-range-end`-Eigenschaften, um die Animationstimeline einzulassen. Dies definiert einen Teilbereich des vollständigen Animationsanfügebereichs des Elements als aktives Intervall, wobei die `<length>`-Werte Abstände vom Anfang des Standard-`normal`-Animationsanfügebereichs angeben.

```css live-sample___inset_length
.animated_element {
  animation-range-start: 1em;
  animation-range-end: 125px;
}
```

Der Start und das Ende des Animationsbereichs sind `1em` und `125px` jeweils vom Anfang des Animationsanfügebereichs. Da der Timeline-Bereichs-Standard `normal` ist, der sich auf `cover` auflöst, ist der Anfang des Animationsanfügebereichs die Block-Endkante des Containers.

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

Wir haben Linien hinzugefügt, die `1em` und `125px` von der Block-Endkante des Scroll-Containers entfernt sind. Die Animation beginnt, wenn die Block-Startkante des Subjektelements die `1em`-Linie erreicht und endet, wenn sie die `125px`-Linie erreicht.

In diesem Fall, da der Animationsanfügebereich für beide Einlasswerte auf `cover` aufgelöst wird, ist die Position der Einlässe relativ einfach.

### Einfluss benannter Bereiche auf Längen-Offsets

Der Offset-Abstand ist immer vom Anfang des zugehörigen Animationsbereichs entfernt. In diesem Beispiel haben wir `animation-range-start` auf `50px` vom Anfang des standardmäßigen `normal`-Bereichs gesetzt und den `animation-range-end` auf `100px` vom Anfang des explizit gesetzten `entry`-Bereichs:

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

Da die Startkante sowohl der `normal`- als auch der `entry`-Bereiche die Endkante des Containers ist, beginnt die Animation, wenn die Startecke des Subjekts `50px` von der Unterkante des Scrollports entfernt ist und endet, wenn die Startecke des Subjekts `100px` von der Unterkante des Scrollports entfernt ist, unabhängig von der Subjektgröße. Während die Größe des `entry`-Bereichs für die drei verschiedenen Subjektgrößen unterschiedlich ist, spielte in diesem Fall die Größe des zugrunde liegenden Bereichs keine Rolle.

### Längen-Offsets mit variierenden Bereichen

Die Größe des Bereichs spielt eine Rolle, wenn der Bereich nicht an der Endkante des Elements beginnt, wie es bei `exit` und `exit-crossing` der Fall ist, oder wenn der Offset ein Prozentsatzswert ist. Diese Tatsache und die Tatsache, dass Sie Animation-Bereichsnamen mischen und aneinanderreihen können, machen View-Progress-Timeline-Offsets komplexer zu verstehen als nicht versetzte [Timeline-Bereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).

Zum Beispiel, wenn `exit` als Timeline-Bereichsname gesetzt wird, spielt die Subjektgröße eine Rolle, da sie den Standort der Endkante des Bereichs bestimmt.

```css live-sample___exit_length
.animated_element {
  animation-range-start: entry 60px;
  animation-range-end: exit 75px;
}
```

Sowohl bei `entry` als auch bei `exit` ist der Bereich die Größe des Subjekts, wobei die Größe auf die Größe des Scrollports geklemmt wird. Dies bedeutet, dass die Höhe des `entry`- und `exit`-Bereichs die Höhe des Kastens in beiden `50px`- und `250px`-Beispielen ist, während im `500px`-Beispiel der Bereich auf die Höhe des Scrollports geklemmt wird, was `250px` hoch ist.

{{EmbedLiveSample("exit_length", "100%", "310")}}

Wir haben einige Linien hinzugefügt, um die Erklärungen, die folgen, zu erleichtern: Die untere blaue Linie ist `60px` von der Endkante des Scrollports entfernt, und die obere rote Linie ist `75px` von dieser gleichen Kante entfernt. Dort beginnen und enden jeweils die Animationsbereiche.

Dieses Beispiel zeigt mehrere wichtige Merkmale, die wir detaillierter erklären werden, einschließlich:

- Offsets werden [von ihren jeweiligen benannten Bereichen gemessen](#gemessen_von_der_startkante_des_bereichs)
- Offsets können [über die Kanten des Scrollports hinaus auftreten](#über_die_kanten_des_scrollports_hinaus)
- [Bereiche können geklemmt werden](#auswirkungen_des_klemmens), wenn das Subjekt größer ist als der Scrollport

#### Gemessen von der Startkante des Bereichs

Da die Offset-Position immer relativ zum Start des Deklarations-Animationsbereichs ist, erfolgt der Start der Animation für alle drei Elemente, wenn die Startkante der Elemente den Punkt überquert, der `60px` vom Start des `entry`-Bereichs entfernt ist.

Der `animation-range-end`-Wert definiert die Position, bei der die Animation endet. Der `exit 75px`-Wert bedeutet im Grunde "wenn `75px` des Subjekts den Startkante des Scrollports verlassen haben." Dies variiert für jedes Subjekt. Für das `50px`-Subjekt geschieht dies erst `25px` nachdem es den Scrollport verlassen hat; wenn das Element nicht mehr sichtbar ist. Das Animation-Bereichsende für die `250px`- und `500px`-Subjekte ist identisch, wenn ihre untere Endkante die obere blaue Linie schneidet, `75px` von der Endkante des Scrollports. Warum sind ihre End-Offsets gleich? Wegen des [Klemmens](#auswirkungen_des_klemmens)! Die maximale Größe des benannten Animationsbereichs ist auf die Größe des Scrollports beschränkt. Der `exit`-Bereich für beide Subjekte ist gleich, daher sind die Bereichs-End-Offsets ebenfalls gleich.

#### Über die Kanten des Scrollports hinaus

Bei unserem `50px`-hohen Subjekt ist der `exit`-Bereich `50px` hoch an der Startkante des Scrollports angrenzend. Einstellen von `animation-range-end: exit 75px` für jedes Element, das weniger als `75px` hoch ist, bedeutet, dass das Ende des Bereichs außerhalb des Scrollports liegt, da der Punkt `75px` vom Anfang des `exit`-Bereichs über die Startkante des Scrollports hinausgeht. In unserem Beispiel tritt das Ende des Animationsbereichs für das `50px`-Subjekt ein, wenn die Startecke des Subjekts `75px` hinter der Startkante des Scrollports liegt. Die Animation endet, indem sie den `to`-Keyframe und das [`animationend`](/de/docs/Web/API/Element/animationend_event)-Ereignis erreicht, nur wenn (und falls) das Element `25px` aus dem Sichtfeld heraus gescrollt wird.

Die Animation endet selbst dann, wenn das Animationsbereichsende außerhalb des Scrollports liegt, solange es möglich ist, zu diesem Punkt zu scrollen. Hätten wir den `animation-range-end: exit 250px` festgelegt, wäre die Animation beendet, wenn die Endkante des mittleren und großen Subjekts den Scrollport an der Startkante des Containers verlassen hätte.

Wenn das Ende auf `exit 250px` eingestellt ist, könnte die Animation des kleinen Subjekts möglicherweise nicht enden, da es möglicherweise nicht `450px` Inhalt nach dem Subjekt gibt, wohin der Benutzer scrollen kann, bevor der Endpunkt erreicht wird.

#### Auswirkungen des Klemmens

Mit unserem `250px` hohen Container, wenn das Subjekt `250px` oder `500px` groß ist, ist der `exit`-Bereich die Größe des Containers, wobei der Start die Endkante des Scroll-Containers ist. Mit einem `75px` Offset erfolgt das Ende der Animation, wenn sich die Endkante des Subjekts `75px` von der Endkante des Scrollports entfernt befindet (markiert durch die obere rote Linie).

Da die Offset-Position immer relativ zum Start des benannten oder Standard-Animationsbereichs ist, hat das Klemmens in unserem Beispiel Auswirkungen auf den `animation-range-end` des großen Subjekts. Wir haben das Ende des Bereichs auf `exit 75px` gesetzt, was `75px` vom Start des `exit`-Bereichs entfernt ist. Wenn das Subjekt gleich groß wie der Scrollport (unser `250px` Subjekt) oder größer (unser `500px` Subjekt) ist, liegt das Animationsbereichsende `75px` von der Endkante des Scrollports entfernt, was `75px` vom Start des an den Scrollport geklemmten `exit`-Bereichs ist.

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

Bis zu diesem Punkt waren alle Offsets größer als null. Es ist wichtig zu beachten, dass negative Längen gültig sind. Ein negativer Offset beim `animation-range-start` verlängert den Bereich, während ein negativer Offset beim `animation-range-end` den Bereich kürzer macht.

Vergleichen wir die negativen Einlässe mit den `0`-Werten:

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

Der erste Animationsbereich ist um `25px` zur Container-Endkante hin versetzt.

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

## Einstellung von Einlässen mit Prozentsätzen

Ähnlich wie Längenwerten definieren Prozentwerte Offsets vom _Anfang_ des Animationsanfügebereichs. Die prozentualen Offsets sind relativ zur Timeline-Bereichs-Dimension, nicht relativ zum Scrollport. Aus diesem Grund sind Prozentwerte für die meisten Menschen nicht so intuitiv wie Längenwerte (obwohl bereits Längenwerte nicht so intuitiv waren).

Hier verwenden wir `animation-range-start` und `animation-range-end`, um die Animationstimeline einzulassen. Während wir die gleichen Eigenschaften verwenden, setzen wir `<percentage>`-Werte anstelle von `<length>`-Werten:

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

Dies definiert das aktive Intervall, das `20%` in den standardmäßigen Anfügebereich eintaucht und `60%` durch denselben Bereich endet. Der Standard-`normal`-Animationsanfügebereich, der sich als [`cover`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#cover) verhält, ist die Höhe des Scroll-Containers plus die Höhe des Subjektelements, was bedeutet, dass sich der Bereich je nachdem, welcher Radiobutton ausgewählt ist, unterscheidet.

{{EmbedLiveSample("inset_percent", "100%", "400")}}

Aus veranschaulichenden Gründen gibt es zwei dunkle Linien, die den Container bei `20%` und `60%` durchqueren des gesamten Animationsbereichs. Die Animation beginnt, wenn die Block-Startkante den `20%`-Punkt erreicht, was die untere grüne Linie ist. Die Animation endet, wenn die Block-Startkante `60%` des Wegs durch den normalen Bereich ist, was die obere rote Linie ist.

Nur wenn das Element `50px` groß ist, bleibt das obere Ende des Subjekts sichtbar, wenn das Ende der Animation erreicht wird; es gibt keine oberen roten Linien, wenn `250px` oder `500px` ausgewählt sind, da das Ende des Animationsbereichs außerhalb des Scrollports liegt.

Basierend auf der Höhe unserer Subjekte ist die `20%` Markierung entweder `60px`, `100px` oder `150px` von der Endkante des Scrollports (gekennzeichnet durch die grüne Linie, die immer im Scrollport ist), und die `60%` Markierung ist `180px`, `300px` oder `450px` vom selben Punkt (gekennzeichnet mit einer roten Linie, aber nur sichtbar für das `50px` Subjekt).

Zu Veranschaulichungszwecken gibt es zwei hellgraue Linien, die den Container `20%` und `60%` des Wegs durch den Scrollport durchqueren, was `50px` und `150px` von der unteren Kante des Scrollports entfernt ist, jeweils. Da die `animation-range-*`-Prozentsätze relativ zur Timeline-Bereichs-Dimension und nicht zum Scrollport sind, zeigen diese Linien nur, dass die Prozentsätze **nicht** übereinstimmen. Wir haben auch zwei horizontale hellgraue Linien durch jedes Subjekt bei ihren eigenen `20%`- und `60%`-Markierungen hinzugefügt. Diese Linien stimmen mit den hellgrauen Scrollport-Linien überein, wenn die Animation der Subjekte beginnt und endet.

Das folgende Bild zeigt, wo sich die Subjektelemente befinden, wenn die Animation beginnt (der `0%` Keyframe) und endet (der `100%`-Keyframe).
Dieses Bild enthält die Einlässe der Animationstimeline aus der vorherigen Demonstration und die Timeline ohne Einlässe zum Vergleich.

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

Wie zuvor stellt das Gelbe die Position des Elements dar, wenn das `from`-Keyframe angewendet wird, das Rote repräsentiert die Position der animierten Elemente relativ zum Scrollport, wenn das `to`-Keyframe angewendet wird, was das Ende der Animation ist. Das Gestreifte sind die Bereiche, wo sich die roten und gelben Elementrepräsentationen überlappen. Aus Veranschaulichungsgründen haben wir gestrichelte schwarze horizontale Linien `20%` bzw. `60%` des Wegs durch den Scrollport hinzugefügt, ausgehend von der unteren Kante.

Die Animation beginnt erst, wenn das Element die `20%`-Markierung entlang des Animationsanfügebereichs erreicht. Dieser Punkt befindet sich `60px`, `100px` oder `150px` von der unteren Kante des Scrollports entfernt, abhängig von der Größe des Elements. Die Position des Subjektelements an diesem Punkt, die die Position des Elements darstellt, wenn das `from`- oder `0%`-Keyframe angewendet wird, wird in Gelb gezeigt.

Das Rote stellt die Position des animierten Elements relativ zum Scrollport dar, wenn das `to`- oder `100%`-Keyframe angewendet wird, was das Ende der Animation ist. Dies ist entweder `180px`, `300px` oder `450px` von der unteren Kante des Scrollports entfernt, abhängig von der Subjektgröße. Die Animation findet statt, wenn das Element sich zwischen den `to`- und `from`-Positionen bewegt.

Ihnen ist möglicherweise etwas Interessantes an den gestrichelten horizontalen Linien aufgefallen: Wenn die Animation beginnt, ist die Linie, die `20%` von der Endkante des Viewports entfernt ist, `20%` von der _oberen_ Kante des Subjektelements entfernt, und die Linie, die `60%` von der Endkante des Viewports entfernt ist, ist `60%` von der _oberen_ Kante des Subjektelements entfernt, wenn die Animation endet. Dies wurde durch die hellgrauen Linien im Live-Demo für dieses Beispiel veranschaulicht.

### Subjektgröße spielt eine Rolle

Wie wir gesehen haben, spielt die Größe des Subjekts eine Rolle, wenn wir [Einlässe mit Längen festlegen](#einstellung_von_einlässen_mit_längen). Beim Festlegen von Animationsbereichen sind Prozentwerte relativ zur Größe des Animationsanfügebereichs, nicht des Scrollports. Bei den meisten benannten Bereichen hängt die Größe des Anfügebereichs teilweise von der Größe des Subjekts ab. Da Prozentsätze auf der Größe des Bereichs basieren, beeinflusst der benannte Bereich die aufgelöste Größe der Einlässe. Abhängig vom Namen kann sich auch die Startposition ändern, was den Standort des Bereichs und damit den Standort der Progressionspunkte beeinflusst.

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

Die Animation dauert `40%` des Animationsanfügebereichs. Während Sie blättern, stellen Sie fest, dass je größer das Subjekt, desto länger der Bereich. Bei `exit-crossing` wird der Animationsbereich nicht beschnitten; es ist die Größe des Subjekts, auch wenn das Subjekt größer als der Viewport ist, wobei der Bereich an der Startkante des Scrollports angrenzend ist und sich über die Endkante hinaus erstreckt, wenn das Subjekt größer ist als der Scrollport.

Mit den `-20%` und `20%` Einlässen wird die Animation des `50px` Subjekts über `20px` andauern: Die Animation beginnt, wenn das Ende des Subjekts `-10px` vom Bereichsstart entfernt ist, oder `60px` davon entfernt ist, den Bildschirm zu verlassen, und endet, wenn das Ende des Subjekts `40px` davon entfernt ist, den Bildschirm zu verlassen. Das mittlere Subjekt wird über `100px` animieren: Die Animation beginnt, wenn das Ende des Subjekts `-50px` vom Bereichsstart entfernt ist, was `50px` von der Endkante des Scrollports entfernt ist, und endet, wenn das Ende des Subjekts `50px` in den Scrollport hineinragt. Das große Subjekt animiert über `200px`, beginnend, wenn das untere Ende `600px` von der Startkante des Containers entfernt ist und nur `150px` sichtbar sind, und endet, wenn das Ende `400px` von dieser Startkante entfernt ist, wobei `100px` aus dem Startkante herausgescrollt sind.

### Prozentwerte entsprechen dem Scrollport

Wenn es um das Versetzen mit Prozentsätzen geht, ist der am wenigsten komplizierte benannte Timeline-Bereich `contain`. Mit `contain` ist der Animationsbereich die Größe des Scrollports, was bedeutet, dass die Start- und Endprozentsätze relativ zum Scrollport sind. Daher sollten Sie bei Verwendung von Offsets möglicherweise `contain` verwenden, anstatt den Bereich standardmäßig und auf `cover` lösen zu lassen.

Der `contain`-Bereich _enthält_ die Animation vollständig innerhalb des Scrollports. Er repräsentiert den Bereich, in dem das Hauptfeld entweder vollständig vom View Progress Visibility Range innerhalb des Scrollports eingeschlossen ist oder es vollständig bedeckt. Bei `contain`, wenn das Subjekt gleich groß oder kleiner als der Scrollport ist, kann es vollständig sichtbar sein. Wenn das Element jedoch die gleiche Größe wie der Container hat, erfolgt die Animation über `0px`. Das bedeutet, dass sie läuft, aber für den Benutzer nicht sichtbar ist.

Mit anderen Worten, ohne die Größe des Containers oder der Subjekte zu kennen, können wir unsere Animation auf die Mitte des Scrollports beschränken, obwohl die Animation über `0px` erfolgen wird, wenn das Subjekt die gleiche Größe wie der Scrollport hat.

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

Die horizontalen Linien markieren die mittlere Hälfte des Scrollports und die mittlere Hälfte jedes Subjekts.

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
- [Scroll-gesteuerte Animations-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
