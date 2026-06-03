---
title: Verständnis von Timeline-Einbettungen
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_insets
l10n:
  sourceCommit: 0978f9eb1af0ec2604d58e5edcb024618080605e
---

Standardmäßig verfolgen [Ansichtsfortschritts-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente über den gesamten [Animierungsanbindungsbereich](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#the_animation_attachment_range). Der Fortschrittspunkt `0%` befindet sich am Anfang des Bereichs, während der Fortschrittspunkt `100%` am Ende liegt. Der Animierungsanbindungsbereich kann geändert werden, indem ein [Timeline-Bereichsname](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) festgelegt wird. Die Position der `0%`- und `100%`-Fortschrittspunkte entlang des Bereichs kann durch Einstellen von Längen- oder prozentbasierten Einbettungswerten angepasst werden.

Dieser Leitfaden erklärt, wie man die Animationstimeline auf einen bestimmten Teil des Animierungs-Timeline-Bereichs mittels Längen- oder Prozentwerten begrenzen kann.

## Animationstimelines: ein Leitfaden

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden durch die Definition benannter {{cssxref("@keyframes")}}-Animationen erstellt, die das Verhalten einer Animation angeben, und dann die Keyframe-Animation mit dem Namen der Animation an ein Element angehängt.

Die Animationstimeline des Elements, definiert durch die Eigenschaft {{cssxref("animation-timeline")}}, bestimmt, wie und wann das Element durch diese Keyframes fortschreitet. Standardmäßig ist die Timeline zeitbasiert und nutzt die zeitzentrierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline).

Das Modul [CSS scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Scroll-Fortschritts- und Ansichtsfortschritts-Timelines, die Methoden zur Animation von Eigenschaftswerten entlang einer scrollbasierten Timeline anstelle der standardmäßigen zeitbasierten Dokumenttimeline sind. In diesem Artikel werden wir nur Ansichtsfortschritts-Timelines diskutieren, da [Scroll-Fortschritts-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) für Timeline-Einbettungen nicht relevant sind.

### Ansichtsfortschritts-Timelines

Mit [Ansichtsfortschritts-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) wird die Timeline oder der Fortschritt der Animation durch die Sichtbarkeit des Elements statt durch den Zeitablauf gesteuert, wobei der Fortschritt der Keyframes an die Position und Sichtbarkeit des Subjektelements innerhalb des Scrollcontainers gebunden ist. Die Animation schreitet voran und kehrt sich um, während das Element durch den Scrollport voranschreitet oder zurückkehrt. Die Animation findet nur statt, wenn zumindest ein Teil des Elements innerhalb seines Scrollports sichtbar ist und pausiert, wenn das Scrollen pausiert.

```css live-sample___svg_view
.animated_element {
  animation-name: nameOfAnimation;
  animation-timeline: view();
}
```

Das Setzen eines {{cssxref("animation-name")}} wendet die Animation auf das ausgewählte Element an.

> [!NOTE]
> Die Eigenschaft `animation-timeline` sollte immer nach allen `animation`-Kurzform-Deklarationen stehen. Während die Kurzform-Eigenschaft nicht verwendet werden kann, um die Eigenschaft `animation-timeline` zu setzen, setzt sie die Timeline auf die standardmäßige zeitbasierte Dokumenttimeline zurück.

> [!NOTE]
> In allen Beispielen ist der {{Glossary("scroll_container", "Scrollcontainer")}} `250px` hoch und wir verwenden die Standardwerte für {{cssxref("animation-iteration-count")}} (`1`), {{cssxref("animation-delay")}} (`0s`) und {{cssxref("animation-direction")}} (`normal`). Wir setzen die {{cssxref("animation-timing-function")}} auf `step-end` und die {{cssxref("animation-fill-mode")}} auf `forward`, um deutlicher zu machen, wann die Animationsiteration noch nicht begonnen hat, wann sie aktiv ist und wann sie abgeschlossen ist. Sehen Sie sich den [CSS-Animations-Leitfaden](/de/docs/Web/CSS/Guides/Animations/Using) an, um mehr zu erfahren.

Wenn Sie nach oben scrollen, schreitet die Animation fort. Wenn Sie nach unten scrollen, kehrt sich die Animation um.

{{EmbedLiveSample("initial", "100%", "400")}}

In diesem Beispiel tritt die Animation auf, immer wenn ein Teil des Subjektelements im Scrollport sichtbar ist. Standardmäßig beginnen Ansichtsfortschrittsanimationen genau dann, wenn die obere Kante des Subjektelements mit der unteren Kante des Scrollcontainers übereinstimmt und enden, wenn `100%` Fortschritt erreicht ist, wenn die Endkante mit der Startkante des Containers übereinstimmt, unabhängig von der Größe des Subjektelements. Standardmäßig wird die Animation angewendet, wenn irgendein Teil des Subjekts innerhalb des Scrollports sichtbar ist.

### Animation-Anbindungsbereiche

In einer [Ansichtsfortschrittstimeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), wenn keine Animationsbereichs-Eigenschaften definiert sind, ist der `<timeline-range-name>` `normal`, was standardmäßig `cover` ist. Die Animation wird jedes Mal angewendet, wenn ein Teil des Subjektelements sichtbar ist, was bedeutet, dass der standardmäßige **Animationsanbindungsbereich** die Summe der Höhe des Scrollcontainers und der Höhe des Subjektelements ist, wobei diese zusätzliche Höhe am Scroll-Endrand liegt. In unserem Beispiel, da der Scrollcontainer `250px` hoch ist und das Subjekt `50px`, `250px` oder `500px` hoch ist, sind die vertikalen Animationsanbindungsbereiche `300px`, `500px` oder `750px` hoch.

Der Fortschritt von `0%` tritt auf, wenn die Startkante des Subjektelements den Scrollport am Endrand schneidet, und erreicht `100%` Fortschritt, wenn die Endkante des Subjekts über die Startkante des Scrollports austritt. Dies sind die oberen und unteren Kanten des Subjekts und des Scrollports beim vertikalen Scrollen und die linken und rechten oder rechten und linken Kanten beim horizontalen Scrollen, abhängig vom Schreibmodus.

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

Die gelben Subjektelemente repräsentieren die Position des Elements, wenn der `from`-Keyframe angewendet wird, was die `0%`-Fortschrittsmarke des Animationsbereichs ist. Das Rote repräsentiert die Position des animierten Elements relativ zum Scrollport, wenn der `to`-Keyframe angewendet wird, was das Ende der Animation oder das `100%`-Fortschrittszeichen ist. Das Graue repräsentiert den Scrollport.

Standardmäßig animiert das Element, während es "in Sicht" ist, aber diese Standarddefinition von "in Sicht" passt möglicherweise nicht zu Ihren Bedürfnissen. Zum Glück können wir steuern, welche Kanten die Kanten des Animationsanbindungsbereichs definieren und dann den Start und das Ende dieses Bereichs mit den Animationsbereichs-Eigenschaften versetzen.

### Animationsbereichs-Eigenschaften

Die Eigenschaften {{cssxref("animation-range")}} ermöglichen es, einen benannten Timeline-Bereich wie `contain` oder `exit-crossing` anzugeben, der den verwendeten Bereich vom Standardbereich `cover` ändert. Sie können auch einen {{cssxref("length-percentage")}}-Wert einschließen, der den Anbindungsbereich vom Start des Bereichs aus einbetttet. Prozentsätze beziehen sich auf die benannten oder standardmäßigen Timelinerahmen.

Benannte Timeline-Bereiche definieren die Abschnitte einer [`ViewTimeline`](/de/docs/Web/API/ViewTimeline), die den Animationsbereich definieren und den Start und das Ende des Anbindungsbereichs der Animation festlegen.

Die Eigenschaft `animation-range` ist eine Kurzform-Eigenschaft, die die Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} definiert. Der `animation-range-start` definiert die Position des Subjektelements, wenn die Animation beginnt. Der `animation-range-end` definiert die Position des Subjektelements, wenn die Animation endet.

Sehen Sie den [Leitfaden für Timelinerahmen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names), um mehr über die verschiedenen benannten Timelinerahmen zu erfahren. Dieser Leitfaden konzentriert sich darauf, wie die {{cssxref("length-percentage")}}-Einbettungswerte funktionieren.

## Einbetten mit Längen

Die Eigenschaften `animation-range-start` und `animation-range-end` akzeptieren je einen benannten Animationsbereich, einen {{cssxref("length-percentage")}}-Wert oder beides. Jede Längen- oder Prozentwert-Versetzung wird vom _Start_ des Animationsanbindungsbereichs aus gemessen.

Wenn ein {{cssxref("length")}} gesetzt ist, ist die Versetzung ziemlich intuitiv.
Hier verwenden wir die Eigenschaften `animation-range-start` und `animation-range-end`, um die Animationstimeline einzubetten. Dies definiert einen Teilbereich des gesamten Animationsanbindungsbereichs des Elements als das aktive Intervall, wobei die Werte `<length>` Entfernungen vom Start des Standard-`normal`-Animationsanbindungsbereichs angeben.

```css live-sample___inset_length
.animated_element {
  animation-range-start: 1em;
  animation-range-end: 125px;
}
```

Der Start und das Ende des Animationsbereichs sind `1em` bzw. `125px` vom Start des Animationsanbindungsbereichs entfernt. Da der Standard der Timeline-Bereich `normal`, der zu `cover` aufgelöst wird, ist, ist der Start des Animationsanbindungsbereichs der Block-Endrand des Containers.

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

Wir haben Linien hinzugefügt, die `1em` und `125px` vom Block-Endrand des Scrollcontainers entfernt sind. Die Animation beginnt, wenn die Block-Startkante des Subjektelements die `1em`-Linie erreicht und endet, wenn sie die `125px`-Linie erreicht.

In diesem Fall, da der Animationsanbindungsbereich sowohl für die Start- als auch für die Endversetzungswerte zu `cover` aufgelöst wird, ist der Ort der Einbettungen ziemlich unkompliziert.

### Auswirkungen benannter Bereiche auf Längenversetzungen

Der Versetzungsabstand ist immer vom Start des zugehörigen Animationsbereichs aus gemessen. In diesem Beispiel setzen wir den `animation-range-start` auf `50px` vom Start des Standardbereichs `normal` und setzen den `animation-range-end` auf `100px` vom Start des explizit gesetzten `entry`-Bereichs:

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

Da die Startkanten sowohl des `normal`- als auch des `entry`-Bereichs die Endkante des Containers sind, beginnt die Animation, wenn die Startkante des Subjekts `50px` vom unteren Rand des Scrollports entfernt ist, und endet, wenn `100%` Fortschritt erreicht ist, wenn die Startkante des Subjekts `100px` vom unteren Rand des Scrollports entfernt ist, unabhängig von der Größe des Subjekts. Während die Größe des `entry`-Bereichs für die drei unterschiedlichen Subjektgrößen unterschiedlich ist, spielte in diesem Fall die Größe des zugrunde liegenden Bereichs keine Rolle.

### Längenversetzungen mit unterschiedlichen Bereichsgrößen

Die Größe des Bereichs ist wichtig, wenn der Bereich nicht an der Endkante des Elements beginnt, wie es bei `exit` und `exit-crossing` der Fall ist, oder wenn die Versetzung ein Prozentwert ist. Diese Tatsache und die Tatsache, dass Sie Animationsbereichsnamen mischen können, machen die Versetzungen der Ansichtsfortschrittstimelines ein wenig komplizierter zu verstehen als nicht versetzte [Timelinerahmennamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).

Zum Beispiel, wenn `exit` als Timelinenamensbereich gesetzt wird, spielt die Größe des Subjekts eine Rolle, da sie die Lage der Endkante des Bereichs bestimmt.

```css live-sample___exit_length
.animated_element {
  animation-range-start: entry 60px;
  animation-range-end: exit 75px;
}
```

Sowohl bei `entry` als auch bei `exit` ist der Bereich so groß wie das Subjekt, wobei die Größe auf die des Scrollports beschränkt ist. Dies bedeutet, dass die Höhe des `entry`- und `exit`-Bereichs die Höhe der Box in den `50px`- und `250px`-Beispielen ist, während im `500px`-Beispiel der Bereich auf die Höhe des Scrollports begrenzt ist, der `250px` hoch ist.

{{EmbedLiveSample("exit_length", "100%", "310")}}

Wir haben ein paar Linien hinzugefügt, um die folgenden Erklärungen zu erleichtern: Die untere blaue Linie ist `60px` von der Endkante des Scrollports entfernt und die obere rote Linie ist `75px` von derselben Kante entfernt. Diese sind, wo der Animationsbereichsstart und -ende sich jeweils befinden.

Dieses Beispiel zeigt mehrere wichtige Merkmale, die wir ausführlicher erklären werden, einschließlich:

- Versetzungen werden [von ihren jeweiligen benannten Bereichen gemessen](#gemessen_vom_start_der_bereichsrand)
- Versetzungen können [über die Ränder des Scrollports hinaus erfolgen](#über_die_ränder_des_scrollports_hinaus)
- [Bereiche können beschränkt werden](#auswirkungen_der_beschränkung), wenn das Subjekt größer ist als der Scrollport

#### Gemessen vom Start der Bereichsrand

Da die Versetzungsposition immer relativ zum Start des Deklarationsanimationsbereichs ist, erfolgt der Start der Animation für alle drei Elemente, wenn die Startkante der Elemente den Punkt überquert, der `60px` vom Start des `entry`-Bereichs entfernt ist.

Der `animation-range-end`-Wert definiert die Position, an der die Animation endet. Der `exit 75px`-Wert bedeutet im Wesentlichen "wenn `75px` des Subjekts über die Startkante des Scrollports hinausgegangen sind." Dies variiert für jedes Subjekt. Für das `50px` Subjekt geschieht dies erst `25px` nachdem es nicht mehr sichtbar ist. Das Ende des Animationsbereichs sowohl für das `250px` als auch für das `500px` Subjekt erfolgt, wenn ihre untere Endkante die obere, blaue Linie schneidet; 75 Pixel von der Endkante des Scrollports. Warum sind ihre Endversetzungen gleich? Wegen der [Beschränkung](#auswirkungen_der_beschränkung)! Die maximale Größe des benannten Animationsbereichs wird auf die Größe des Scrollports beschränkt. Der `exit`-Bereich ist für beide Subjekte gleich, also sind die Bereichsendversatzpunkte gleich.

#### Über die Ränder des Scrollports hinaus

Für unser `50px` hohes Subjekt ist der `exit`-Bereich `50px` hoch und grenzt an die Startkante des Scrollports. Das Setzen von `animation-range-end: exit 75px` für jedes Element, das weniger als `75px` hoch ist, bedeutet, dass das Ende des Bereichs außerhalb des Scrollports liegt, da der Punkt `75px` vom Start des `exit`-Bereichs über die Startkante des Scrollports hinausgeht. In unserem Beispiel erfolgt das Ende des Animationsbereichs für das `50px` hohe Subjekt, wenn die Startkante des Subjekts `75px` jenseits der Startkante des Scrollports ist. Die Animation endet, erreicht den `to`-Keyframe und das [`animationend`](/de/docs/Web/API/Element/animationend_event)-Ereignis, nur wenn (und falls) das Element `25px` aus dem Bildschirm gescrollt wird.

Die Animation endet auch dann, wenn das Animationsbereichsende außerhalb des Scrollports liegt, solange es möglich ist, bis zu diesem Punkt zu scrollen. Hätten wir `animation-range-end: exit 250px` gesetzt, hätte die Animation geendet, wenn die Endkante der mittleren und großen Subjekte den Scrollport an der Startkante des Containers verlassen hätte.

Mit dem Ende auf `exit 250px` gesetzt, könnte die Animation des kleinen Subjekts möglicherweise nicht enden, da möglicherweise nicht `450px` Inhalt nach dem Subjekt vorhanden sind, um beim Benutzer herunterzuscrollen, bevor der Endpunkt erreicht ist.

#### Auswirkungen der Beschränkung

Mit unserem `250px` hohen Container, wenn das Subjekt `250px` oder `500px` hoch ist, ist der `exit`-Bereich so groß wie der Container, wobei der Start die Endkante des Scrollcontainers ist. Mit einer `75px`-Versetzung erfolgt das Ende der Animation, wenn die Endkante des Subjekts `75px` von der Endkante des Scrollcontainers entfernt ist (angezeigt durch die obere, rote Linie).

Da die Versetzungsposition immer relativ zum Start des benannten oder standardmäßigen Animationsbereichs ist, beeinflusst in unserem Beispiel die Beschränkung die `animation-range-end` des großen Subjekts. Wir setzen das Ende des Bereichs auf `exit 75px`, was `75px` von der Startkante des `exit`-Bereichs entfernt ist. Wenn das Subjekt die gleiche Größe wie der Scrollport hat (unser `250px` Subjekt) oder größer (unser `500px` Subjekt) ist, liegt das Animationsbereichsende `75px` von der Endkante des Scrollports entfernt, was `75px` vom Start des scrollport-begrenzten `exit`-Bereichs entfernt ist.

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

Bis zu diesem Punkt sind alle Versetzungen größer als null gewesen. Es ist wichtig zu beachten, dass negative Längen gültig sind. Eine negative Versetzung auf dem `animation-range-start` verlängert den Bereich, während eine negative Versetzung auf dem `animation-range-end` den Bereich verkürzt.

Vergleichen wir die negativen Einbettungen mit den `0`-Werten:

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

Der erste Animationsbereich ist `25px` zur Endkante des Containers hin versetzt.

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

## Einbetten mit Prozentwerten

Wie Längenwerte definieren Prozentwerte Versetzungen vom _Start_ des Animationsanbindungsbereichs. Die Prozentangaben beziehen sich auf die Dimension des Timelinerahmens, nicht auf den Scrollport. Aus diesem Grund sind Prozentwerte für die meisten Menschen nicht so intuitiv wie Längenwerte (was überraschend ist, da Längenwerte bisher auch nicht so intuitiv waren).

Hier verwenden wir `animation-range-start` und `animation-range-end`, um die Animationstimeline einzubetten. Auch wenn wir dieselben Eigenschaften verwenden, setzen wir `<percentage>`-Werte anstelle von `<length>`-Werten:

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

Dies definiert das aktive Intervall so, dass es `20%` vom Startbereich der Standardanbindung beginnt und `60%` durch denselben Bereich endet. Der Standard-`normal`-Animationsanbindungsbereich, der sich wie [`cover`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#cover) verhält, ist die Höhe des Scrollcontainers plus die Höhe des Subjekts, was bedeutet, dass sich der Bereich je nach gewähltem Radioknopf unterscheidet.

{{EmbedLiveSample("inset_percent", "100%", "400")}}

Zur Veranschaulichung gibt es zwei dunkle Linien, die den Container bei den `20%`- und `60%`-Punkten des vollständigen Animationsbereichs durchqueren. Die Animation beginnt, wenn die Block-Startkante die `20%`-Marke erreicht, was die untere grüne Linie ist. Die Animation endet, wenn die Block-Startkante `60%` des normalen Bereichs erreicht hat, was die obere rote Linie ist.

Nur wenn das Element `50px` hoch ist, ist der obere Teil des Subjekts noch im Scrollport, wenn das Ende der Animation erreicht ist; es gibt keine oberen roten Linien, wenn `250px` oder `500px` ausgewählt sind, da das Ende des Animationsbereichs außerhalb des Scrollports liegt.

Basierend auf der Höhe unserer Subjekte ist die `20%`-Marke entweder `60px`, `100px` oder `150px` von der Endkante des Scrollports entfernt (markiert durch die grüne Linie, die sich immer im Scrollport befindet), und die `60%`-Marke ist `180px`, `300px` oder `450px` vom selben Punkt entfernt (markiert mit einer roten Linie, aber nur sichtbar für das `50px` große Subjekt).

Zur Veranschaulichung gibt es zwei hellgraue Linien, die den Container `20%` und `60%` des Scrollports durchqueren, was `50px` und `150px` vom unteren Rand des Scrollports entfernt ist. Da sich die `animation-range-*`-Prozentsätze auf den Timelinerahmen beziehen und nicht auf den Scrollport, zeigen diese Linien nur, wie die Prozentsätze **nicht** übereinstimmen. Wir haben auch zwei horizontale hellgraue Linien hinzugefügt, die durch jedes Subjekt an ihren eigenen `20%`- und `60%`-Marken gehen. Diese Linien stimmen mit den hellgrauen Linien des Scrollports überein, wenn die Animation jedes Subjekts beginnt und endet.

Das folgende Bild zeigt, wo sich die Subjektelemente befinden, wenn die Animation beginnt (der `0%`-Keyframe) und endet (der `100%`-Keyframe).
Dieses Bild enthält die Einbettungen aus der vorherigen Demontration und die Timeline ohne Einbettungen zum Vergleich.

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

Wie zuvor repräsentiert das Gelbe die Position des Elements, wenn der `from`-Keyframe angewendet wird, das Rote die Position, wenn der `to`-Keyframe angewendet wird, und das Graue den Scrollport. Die gestreiften Bereiche sind die Bereiche, in denen die Rot- und Gelbelementdarstellungen sich überlappen. Zu Illustrationszwecken haben wir schwarze horizontale gestrichelte Linien `20%` und `60%` durch den Scrollport hinzugefügt, ausgehend vom Boden.

Die Animation beginnt erst, wenn das Element die `20%`-Marke entlang des Animationsanbindungsbereichs erreicht. Dieser Punkt ist `60px`, `100px` oder `150px` von der unteren Kante des Scrollports entfernt, abhängig von der Größe des Elements. Die Position des Subjektelements zu diesem Zeitpunkt, welche die Position des Elements bei Anwendung des `from` oder `0%` Keyframe darstellt, ist in Gelb dargestellt.

Das Rote repräsentiert die Position des animierten Elements relativ zum Scrollport, wenn der `to` oder `100%` Keyframe angewendet wird, was das Ende der Animation ist. Dieser Punkt ist entweder `180px`, `300px` oder `450px` von der unteren Kante des Scrollports entfernt, je nach Subjektgröße. Die Animation erfolgt, wenn das Element sich zwischen den `to`- und den `from`-Positionen bewegt.

Sie haben möglicherweise etwas Interessantes an den gestrichelten horizontalen Linien bemerkt: Wenn die Animation beginnt, ist die Linie, die `20%` von der Endkante der Aussichtsport entfernt ist, `20%` vom _oberen Teil_ des Subjekts entfernt, und die Linie, die `60%` von der Endkante der Aussichtsport entfernt ist, ist `60%` vom _oberen Teil_ des Subjekts entfernt, wenn die Animation endet. Dies wurde durch die sehr hellgrauen Linien im Live-Demo zu diesem Beispiel veranschaulicht.

### Subjektgröße zählt

Wie wir gesehen haben, als wir die [Einbettungen mit Längen setzten](#einbetten_mit_längen), kann die Größe des Subjekts einen Unterschied machen. Beim Festlegen von Animationsbereichen beziehen sich Prozentwerte auf die Größe des Animationsanbindungsbereichs, nicht auf den Scrollport. Bei den meisten benannten Bereichen hängt die Größe des Anbindungsbereichs teilweise von der Größe des Subjekts ab. Da sich die Prozentsätze auf die Größe des Bereichs beziehen, wirkt sich der benannte Bereich auf die aufgelöste Größe der Einbettungen aus. Abhängig vom Namen kann sich auch die Startposition ändern, was sich auf die Lage des Bereichs und damit auf die Lage der Fortschrittspunkte auswirken kann.

In diesem Beispiel definieren wir einen aktiven Bereich, der `40%` der Größe des Subjekts ist:

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

Die Animation dauert `40%` des Animationsanbindungsbereichs. Wenn Sie scrollen, stellen Sie fest, dass je größer das Subjekt ist, desto länger der Bereich ist. Mit `exit-crossing` wird der Animationsbereich nicht zugeschnitten; er ist so groß wie das Subjekt, selbst wenn das Subjekt größer als der Ansicht ist, wobei der Bereich an die Startkante des Scrollports grenzt und über die Endkante hinausgeht, wenn das Subjekt größer als der Scrollport ist.

Mit den `-20%`- und `20%`-Einbettungen, wird die Animation des `50px`-Subjekts über `20px`: Die Animation beginnt, wenn das Ende des Subjekts `-10px` vom Bereichsstart entfernt ist, oder `60px` vom Austreten des Bildschirms entfernt ist, und endet, wenn das Ende des Subjekts `40px` vom Austreten des Bildschirms entfernt ist. Das mittlere Subjekt animiert über `100px`: Die Animation beginnt, wenn das Ende des Subjekts `-50px` vom Bereichsstart entfernt ist, was `50px` über die Endkante des Scrollports hinaus entspricht, und endet, wenn das Ende des Subjekts `50px` in den Scrollport reicht. Das große Subjekt animiert über `200px`, beginnend, wenn der Boden `600px` von der Startkante des Containers entfernt ist, mit nur `150px` in Sicht, und endet, wenn der Boden `400px` von dieser Startkante entfernt ist, wenn `100px` aus der Startkante gescrollt haben.

### Prozentsätze relativ zum Scrollport

Wenn es darum geht, mit Prozentsätzen zu versetzen, ist der am wenigsten komplizierte benannte Timelinenamensbereich `contain`. Bei `contain` ist der Animationsbereich so groß wie der Scrollport, was bedeutet, dass die Start- und Endprozentsätze relativ zum Scrollport sind. Aus diesem Grund möchten Sie bei Verwendung von Einbettungen möglicherweise `contain` verwenden, anstatt den Bereich standardmäßig lassen und zu `cover` auflösen.

Der `contain`-Bereich _enthält_ die Animation vollständig innerhalb des Scrollports. Er stellt den Bereich dar, während sich die hauptsächliche Box entweder vollständig innerhalb der, oder vollständig über seiner Sichtbarkeitsbereich innerhalb der Ansicht erstreckt. Mit `contain`, wenn das Subjekt die gleiche Größe oder kleiner als der Ansicht hat, kann es vollständig sichtbar sein. Wenn das Element die gleiche Größe wie der Container hat, befindet sich jedoch die Animation über `0px`. Dies bedeutet, dass es ausgeführt wird, aber es ist für den Benutzer nicht sichtbar.

Mit anderen Worten, ohne die Größe des Containers oder der Subjekte zu kennen, können wir unsere Animation auf die Mitte des Scrollports beschränken, obwohl die Animation über `0px` erfolgt, wenn das Subjekt die gleiche Größe wie der Scrollport hat.

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
- [Scroll-gesteuerte Animationstimeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
