---
title: Verständnis von Zeitachsen-Insets
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_insets
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Standardmäßig verfolgen [View Fortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente über den gesamten [Animationsanhängebereich](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#the_animation_attachment_range). Der `0%` Fortschrittspunkt liegt am Anfang des Bereichs, während der `100%` Fortschrittspunkt am Ende liegt. Der Animationsanhängebereich kann durch das Setzen eines [Zeitachsenbereihsnamens](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) geändert werden, und die Position der `0%` und `100%` Fortschrittspunkte entlang des Bereichs kann durch das Setzen von länge- oder prozentbasierten Inset-Werten angepasst werden.

Dieser Leitfaden erklärt, wie die Animationszeitachse mithilfe von Länge- oder Prozent-Inset-Werten auf einen bestimmten Teil des Animationsbereichs beschränkt wird.

## Animationszeitachsen: ein Überblick

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden durch das Definieren von benannten {{cssxref("@keyframes")}} Animationen erstellt, die das Verhalten einer Animation spezifizieren, und anschließend die Schlüsselbild-Animation über den Namen der Animation an ein Element anhängen.

Die Animationszeitachse des Elements, definiert durch die {{cssxref("animation-timeline")}} Eigenschaft, bestimmt, wie und wann sich das Element durch diese Schlüsselbilder bewegt. Standardmäßig ist die Zeitachse zeitbasiert, unter Verwendung der standardmäßigen dokumentbasierten Zeitachse [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline).

Das [CSS-Modul Scroll-Driven Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Scroll-Fortschritts- und View-Fortschritts-Zeitachsen, die Methoden zur Animation von Eigenschaftswerten entlang einer scrollbasierten Zeitachse anstelle der standardmäßig zeitbasierten Dokument-Zeitachse sind. In diesem Artikel besprechen wir nur View-Fortschritts-Zeitachsen, da [Scroll-Fortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) für Zeitachsen-Insets nicht relevant sind.

### View-Fortschritts-Zeitachsen

Mit [View-Fortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) wird die Zeitachse oder der Fortschritt der Animation durch die Sichtbarkeit des Elements anstatt durch den Zeitverlauf gesteuert, wobei der Fortschritt der Schlüsselbilder an die Position und Sichtbarkeit des Subjektelements innerhalb des Scrollcontainers gebunden ist. Die Animation schreitet voran und umkehrt, während das Element sich durch den Scrollport bewegt. Die Animation erfolgt nur, wenn zumindest ein Teil des Elements innerhalb seines Scrollports sichtbar ist und pausiert, wenn das Scrollen stoppt.

```css live-sample___svg_view
.animated_element {
  animation-name: nameOfAnimation;
  animation-timeline: view();
}
```

Das Setzen eines {{cssxref("animation-name")}} wendet die Animation auf das ausgewählte Element an.

> [!NOTE]
> Die `animation-timeline`-Eigenschaft sollte immer nach allen `animation`-Kurzschrift-Definitionen kommen. Während die Kurzschrift nicht verwendet werden kann, um die `animation-timeline`-Eigenschaft zu setzen, setzt sie die Zeitachse auf die standardmäßig zeitbasierte Dokument-Zeitachse zurück.

> [!NOTE]
> In allen Beispielen ist der {{Glossary("scroll_container", "Scrollcontainer")}} `250px` hoch und wir verwenden die Standardwerte für {{cssxref("animation-iteration-count")}} (`1`), {{cssxref("animation-delay")}} (`0s`) und {{cssxref("animation-direction")}} (`normal`). Wir setzen die {{cssxref("animation-timing-function")}} auf `step-end` und der {{cssxref("animation-fill-mode")}} ist auf `forward` eingestellt, um deutlicher zu machen, wann die Animation noch nicht begonnen hat, wann sie aktiv ist und wann sie abgeschlossen ist. Siehe den [Leitfaden zur Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using), um mehr zu erfahren.

Beim Hochscrollen schreitet die Animation voran. Beim Runterscrollen kehrt die Animation zurück.

{{EmbedLiveSample("initial", "100%", "400")}}

In diesem Beispiel erfolgt die Animation, wann immer ein Teil des Subjektelements im Scrollport sichtbar ist. Standardmäßig beginnen View-Fortschritts-Animationen genau dann, wenn die obere Kante des Subjektelements mit der unteren Kante des Scrollcontainers ausgerichtet ist, und sie enden bei `100%` Fortschritt, wenn die Endkante mit der Anfangskante des Containers ausgerichtet ist, unabhängig von der Größe des Subjektelements. Standardmäßig wird die Animation angewendet, wenn ein Teil des Subjekts im Scrollport sichtbar ist.

### Animationsanhängebereiche

In einer [View-Fortschritts-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), wenn keine Bereichseigenschaften definiert sind, ist der `<timeline-range-name>` `normal`, der standardmäßig auf `cover` gesetzt ist. Die Animation wird angewendet, wann immer ein Teil des Subjektelements sichtbar ist, was bedeutet, dass der Standard-**Animationsanhängebereich** die Summe aus der Höhe des Scrollcontainers und der Höhe des Subjektelements ist, wobei diese zusätzliche Höhe an der Scrollendkante hinzugefügt wird. In unserem Beispiel ist der Scrollcontainer `250px` hoch, und das Subjekt ist `50px`, `250px` oder `500px` hoch, wobei der vertikale Animationsanhängebereich `300px`, `500px` oder `750px` beträgt.

Der `0%` Fortschritt erfolgt, wenn die Startkante des Subjektelements die Scrollport-Kante an der Endkante schneidet und `100%` Fortschritt erreicht, wenn die Endkante des Subjekts die Startkante des Scrollports verlässt. Dies sind die oberen und unteren Kanten des Subjekts und des Scrollports beim vertikalen Scrollen und die linken und rechten oder rechten und linken Kanten beim horizontalen Scrollen, abhängig vom Schreibrichtung.

Das folgende Diagramm veranschaulicht die Position des Subjekts bei den `0%` und `100%` Fortschrittspunkten für die drei Subjektgrößen:

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

Die gelben Subjektelemente repräsentieren die Position des Elements, wenn das `from`-Schlüsselbild angewendet wird, was das `0%`-Fortschrittszeichen des Animationsbereichs ist. Die roten repräsentieren die Position des animierten Elements relativ zum Scrollport, wenn das `to`-Schlüsselbild angewendet wird, was das Ende der Animation ist, oder das `100%`-Fortschrittszeichen. Die grauen repräsentieren den Scrollport.

Standardmäßig animiert das Element, während es "sichtbar" ist, aber diese Standarddefinition von "sichtbar" passt möglicherweise nicht zu Ihren Anforderungen. Glücklicherweise können wir steuern, welche Kanten die Kanten des Animationsanhängebereichs definieren und dann den Anfang und das Ende dieses Bereichs mit den Bereichseigenschaften der Animation versetzen.

### Eigenschaften des Animationsbereichs

Die {{cssxref("animation-range")}} Eigenschaften ermöglichen es, einen benannten Zeitachsenbereich wie `contain` oder `exit-crossing` zu spezifizieren, der den verwendeten Bereich vom Standardbereich `cover` ändert. Sie können auch einen {{cssxref("length-percentage")}} Wert einschließen, der den Anhängebereich ab dem Anfang des Bereichs einsetzt. Prozentsätze beziehen sich auf den benannten oder Standard-Zeitachsenbereich.

Benannte Zeitachsenbereiche definieren die Abschnitte einer [`ViewTimeline`](/de/docs/Web/API/ViewTimeline), die den Bereich einer Animation definieren und den Beginn und das Ende des Animationsanhängebereichs spezifizieren.

Die `animation-range`-Eigenschaft ist eine Kurzschreibweise, die die {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} Eigenschaften definiert. Die `animation-range-start` definiert die Position des Subjektelements, wenn die Animation beginnt. Die `animation-range-end` definiert die Position des Subjektelements, wenn die Animation endet.

Siehe den [Leitfaden zu Zeitachsenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names), um mehr über die verschiedenen benannten Zeitachsenbereiche zu erfahren. Dieser Leitfaden konzentriert sich darauf, wie die {{cssxref("length-percentage")}}-Inset-Werte funktionieren.

## Einsetzen mit Längen

Die `animation-range-start` und `animation-range-end` Eigenschaften akzeptieren jeweils einen benannten Animationsbereich, einen {{cssxref("length-percentage")}} Offsetwert oder beides. Jeder Längen- oder Prozentsatz-Offset wird ab dem _Anfang_ des Animationsanhängebereichs gemessen.

Wenn ein {{cssxref("length")}} gesetzt wird, ist der Offset ziemlich intuitiv.
Hier verwenden wir die `animation-range-start` und `animation-range-end` Eigenschaften, um die Animationszeitachse einzurücken. Dies definiert einen Abschnitt des vollen Animationsanhängebereichs des Elements als aktives Intervall, wobei die `<length>` Werte die Abstände vom Anfang des Standard-`normal` Animationsanhängebereich spezifizieren.

```css live-sample___inset_length
.animated_element {
  animation-range-start: 1em;
  animation-range-end: 125px;
}
```

Der Anfang und das Ende des Animationsbereichs sind `1em` und `125px` vom Anfang des Animationsanhängebereichs entfernt. Da der Standardzeitleistenbereich `normal` ist, der zu `cover` aufgelöst wird, ist der Anfang des Animationsanhängebereichs die Blockendkante des Containers.

```css hidden live-sample___inset_length
:root {
  --start: 1em;
  --end: 125px;
}

article {
  background-image: linear-gradient(
    to top,
    transparent calc(var(--start) - 1px),
    #cccccc calc(var(--start) - 1px) calc(var(--start) + 1px),
    transparent calc(var(--start) + 1px) calc(var(--end) - 1px),
    #cccccc calc(var(--end) - 1px) calc(var(--end) + 1px),
    transparent calc(var(--end) + 1px)
  );
}
```

{{EmbedLiveSample("inset_length", "100%", "400")}}

Wir haben Linien `1em` und `125px` von der Blockendkante des Scrollcontainers hinzugefügt. Die Animation beginnt, wenn die Blockstartkante des Subjektelements die `1em` Linie erreicht und endet, wenn sie die `125px` Linie erreicht.

In diesem Fall, da der Animationsanhängebereich sowohl für die Start- als auch die End-Offsetwerte auf `cover` aufgelöst wird, ist die Position der Insets ziemlich einfach.

### Wirkung von benannten Bereichen auf Längenoffsets

Der Abstand des Offset ist immer ab dem Anfang des zugeordneten Animationsbereichs. In diesem Beispiel setzen wir den `animation-range-start` auf `50px` vom Anfang des normalen Bereichs und setzen den `animation-range-end` auf `100px` vom Anfang des explizit gesetzten `entry` Bereichs:

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

Da die Startkante sowohl des `normal` als auch des `entry` Bereichs die Endkante des Containers ist, beginnt die Animation, wenn die Startkante des Subjekts `50px` vom unteren Rand des Scrollports entfernt ist und `100%` Fortschritt erreicht, wenn die Startkante des Subjekts `100px` vom unteren Rand des Scrollports entfernt ist, unabhängig von der Subjektgröße. Während die Größe des `entry` Bereichs bei den drei verschiedenen Subjektgrößen unterschiedlich ist, spielte in diesem Fall die Größe des zugrunde liegenden Bereichs keine Rolle.

### Längenoffsets bei unterschiedlichen Bereichen

Die Größe des Bereichs spielt eine Rolle, wenn der Bereich nicht an der Endkante des Elements beginnt, wie es bei `exit` und `exit-crossing` der Fall ist, oder wenn der Offset ein Prozentwert ist. Diese Tatsache und die Tatsache, dass Sie Animationsbereichsnamen mischen und anpassen können, machen View-Fortschritts-Zeitachsen-Offsets etwas komplizierter zu verstehen als nicht versetzte [Zeitachsenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).

Zum Beispiel, wenn `exit` als Zeitachsenbereichsname gesetzt wird, spielt die Subjektgröße eine Rolle, da sie die Position der Endkante des Bereichs bestimmt.

```css live-sample___exit_length
.animated_element {
  animation-range-start: entry 60px;
  animation-range-end: exit 75px;
}
```

Mit sowohl `entry` als auch `exit` ist der Bereich die Größe des Subjekts, wobei die Größe an die Größe des Scrollports angepasst ist. Dies bedeutet, dass die Höhe der `entry` und `exit` Bereiche die Höhe der Box sowohl im `50px` als auch im `250px` Beispiel ist, während im `500px` Beispiel der Bereich an die Höhe des Scrollports angepasst ist, der `250px` hoch ist.

{{EmbedLiveSample("exit_length", "100%", "310")}}

Wir haben ein paar Linien hinzugefügt, um die Erklärungen zu erleichtern, die folgen: Die untere blaue Linie ist `60px` von der Endkante des Scrollports entfernt und die obere rote Linie ist `75px` von dieser gleichen Kante entfernt. Hier beginnen und enden die Animationsbereiche.

Dieses Beispiel zeigt mehrere wichtige Merkmale, die wir ausführlich erklären werden, einschließlich:

- Offsets werden [von ihrem jeweiligen benannten Bereich aus gemessen](#gemessen_von_der_startkante_des_bereichs)
- Offsets können [über die Ränder des Scrollports hinausgehen](#über_die_scrollport-ränder_hinaus)
- [Bereiche können geklammert werden](#auswirkungen_des_klammerns), wenn das Subjekt größer als der Scrollport ist

#### Gemessen von der Startkante des Bereichs

Da die Position des Offsets immer relativ zum Anfang des deklarativen Animationsbereichs ist, erfolgt der Start der Animation für alle drei Elemente, wenn die Startkante der Elemente den Punkt erreicht, der `60px` vom Anfang des `entry` Bereichs entfernt ist.

Der `animation-range-end` Wert definiert die Position, wo die Animation endet. Der Wert `exit 75px` bedeutet im Grunde "wenn `75px` des Subjekts den Anfang des Scrollports verlassen hat". Dies variiert für jedes Subjekt. Für das `50px` Subjekt geschieht dies erst `25px` nachdem es den Scrollport verlassen hat; wenn das Element nicht sichtbar ist. Das Ende des Animationsbereichs für sowohl das `250px` als auch das `500px` Subjekt tritt ein, wenn ihre untere Endkante die obere blaue Linie schneidet; 75 Pixel von der Endkante des Scrollports. Warum sind ihre End-Offsets gleich? Wegen des [Klammerns](#auswirkungen_des_klammerns)! Die maximale Größe des benannten Animationsbereichs ist auf die Größe des Scrollports geklammert. Der `exit` Bereich für beide Subjekte ist gleich, daher sind die Bereichsend-Offsets gleich.

#### Über die Scrollport-Ränder hinaus

Für unser `50px` hohes Subjekt ist der `exit` Bereich 50px hoch und grenzt an die Anfangskante des Scrollports. Das Setzen von `animation-range-end: exit 75px` für ein beliebiges Element, das weniger als `75px` hoch ist, bedeutet, dass das Ende des Bereichs außerhalb des Scrollports liegt, da der Punkt `75px` vom Anfang des `exit` Bereichs über die Anfangskante des Scrollports hinausgeht. In unserem Beispiel endet der Animationsbereich für das `50px` Subjekt, wenn die Startkante des Subjekts `75px` über die Startkante des Scrollports hinaus ist. Die Animation endet, erreicht das `to` Schlüsselbild und das [`animationend`](/de/docs/Web/API/Element/animationend_event) Ereignis, nur wenn (und wenn) das Element `25px` aus dem Blickfeld gescrollt wird.

Die Animation endet auch wenn das Animationsbereichsende außerhalb des Scrollports liegt, solange es möglich ist, zu diesem Punkt zu scrollen. Hätten wir `animation-range-end: exit 250px` gesetzt, würde die Animation enden, wenn die Endkante der mittleren und großen Subjekte den Scrollport an der Startkante des Containers verlässt.

Mit dem Ende auf `exit 250px` gesetzt, könnte die Animation des kleinen Subjekts möglicherweise nicht enden, da es möglicherweise nicht `450px` Inhalt nach dem Subjekt gibt, in den der Nutzer scrollen kann, bevor der Endpunkt erreicht wird.

#### Auswirkungen des Klammerns

Mit unserem `250px` hohen Container, wenn das Subjekt `250px` oder `500px` hoch ist, ist der `exit` Bereich die Größe des Containers, wobei der Start die Endkante des Scrollcontainers ist. Mit einem `75px` Offset tritt das Ende der Animation auf, wenn die Endkante des Subjekts `75px` von der Endkante des Scrollcontainers ist (gekennzeichnet durch die obere rote Linie).

Da die Position des Offsets immer relativ zur Startkante des benannten oder Standard-Animationsbereichs ist, wirkt sich in unserem Beispiel das Klammern auf das `animation-range-end` des großen Subjekts aus. Wir setzen das Ende des Bereichs auf `exit 75px`, was `75px` von der Startkante des `exit` Bereichs entfernt ist. Wenn das Subjekt die gleiche Größe wie der Scrollport (unser `250px` Subjekt) oder größer (unser `500px` Subjekt) hat, ist das Animationsbereichsende `75px` von der Endkante des Scrollports, also `75px` von der Startkante des auf den Scrollport geklammerten `exit` Bereichs.

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
      #666666 49.5px 50.5px,
      transparent 50.5px 99.5px,
      #666666 99.5px 100.5px,
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

Bis zu diesem Punkt waren alle Offsets größer als Null. Es ist wichtig zu beachten, dass negative Längen gültig sind. Ein negativer Offset am `animation-range-start` verlängert den Bereich, während ein negativer Offset am `animation-range-end` den Bereich verkürzt.

Vergleichen wir die negativen Insets mit den `0` Werten:

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

Der erste Animationsbereich ist um `25px` in Richtung der Endkante des Containers versetzt.

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

## Einsetzen mit Prozentsätzen

Wie Längenwerte definieren auch Prozentwerte Offsets vom _Anfang_ des Animationsanhängebereichs. Die Prozentsatz-Offsets beziehen sich auf die Dimension des Zeitachsenbereichs, nicht relativ zum Scrollport. Aus diesem Grund sind Prozentwerte für die meisten Menschen nicht so intuitiv wie Längenwerte (und wir erkennen, dass Längenwerte auch nicht intuitiv waren).

Hier verwenden wir `animation-range-start` und `animation-range-end`, um die Animationszeitachse einzusetzen. Während wir die gleichen Eigenschaften verwenden, setzen wir `<percentage>` Werte anstelle von `<length>` Werten:

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
    #33333333 calc(20% - 1px) calc(20% + 1px),
    transparent calc(20% + 1px) calc(60% - 1px),
    #33333333 calc(60% - 1px) calc(60% + 1px),
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
      #33333333 calc(var(--containerHeight) * 0.2 - 0.5px)
        calc(var(--containerHeight) * 0.2 + 0.5px),
      transparent calc(var(--containerHeight) * 0.2 + 0.5px)
        calc(var(--containerHeight) * 0.6 - 0.5px),
      #33333333 calc(var(--containerHeight) * 0.6 - 0.5px)
        calc(var(--containerHeight) * 0.6 + 0.5px),
      transparent 0 calc(var(--containerHeight) * 0.6 + 0.5px)
    );
  background-position: local, local, fixed;
}
```

Dies definiert das aktive Intervall, das `20%` in den Standardanhängebereich beginnt und nach `60%` durch denselben Bereich endet. Der Standard-`normal` Animationsanhängebereich, der sich wie [`cover`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#cover) verhält, ist die Höhe des Scrollcontainers plus die Höhe des Subjektelements, was bedeutet, dass sich der Bereich je nach ausgewähltem Radio-Button unterscheidet.

{{EmbedLiveSample("inset_percent", "100%", "400")}}

Zu Illustrationszwecken gibt es zwei dunkle Linien, die den Container an den `20%` und `60%` Punkten des vollen Animationsbereichs schneiden. Die Animation beginnt, wenn die Blockstartkante den `20%` Punkt erreicht, was die untere grüne Linie ist. Die Animation endet, wenn die Blockstartkante `60%` des Weges durch den normalen Bereich ist, was die obere rote Linie ist.

Nur wenn das Element `50px` hoch ist, befindet sich die Oberseite des Subjekts bei Erreichen des Endes der Animation noch im Scrollport; es gibt keine oberen roten Linien, wenn `250px` oder `500px` ausgewählt sind, da das Ende des Animationsbereichs außerhalb des Scrollports liegt.

Aufgrund der Höhe unserer Subjekte ist die `20%` Marke entweder `60px`, `100px` oder `150px` von der Endkante des Scrollports entfernt (gekennzeichnet durch die grüne Linie, die immer im Scrollport ist), und die `60%` Marke ist `180px`, `300px` oder `450px` von diesem gleichen Punkt entfernt (gekennzeichnet mit einer roten Linie, aber nur sichtbar für das `50px` Subjekt).

Zu Illustrationszwecken gibt es zwei hellgraue Linien, die den Container `20%` und `60%` des Weges durch den Scrollport durchqueren, die jeweils `50px` und `150px` vom unteren Rand des Scrollports entfernt sind. Da die `animation-range-*` Prozentsätze relativ zum Zeitachsenbereich sind, nicht zum Scrollport, zeigen diese Linien nur, wie die Prozentsätze **nicht** ausgerichtet sind. Wir haben auch zwei horizontale hellgraue Linien, die über jedes Subjekt an ihren eigenen `20%` und `60%` Marken verlaufen. Diese Linien stimmen mit den hellgrauen Scrollport-Linien überein, wenn die Animation der einzelnen Subjekte beginnt und endet.

Das folgende Bild zeigt, wo sich die Subjektelemente befinden, wenn die Animation beginnt (das `0%` Schlüsselbild) und endet (das `100%` Schlüsselbild).
Dieses Bild enthält die Einsätze der Animationszeitachse aus der vorherigen Demonstration und die Zeitachse ohne Einsätze zum Vergleich.

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

Wie zuvor repräsentiert das Gelbe die Position des Elements, wenn das `from` Schlüsselbild angewendet wird, das Rote repräsentiert die Position, wenn das `to` Schlüsselbild angewendet wird, und das Graue repräsentiert den Scrollport. Die gestreiften Bereiche sind dort, wo sich die roten und gelben Elementdarstellungen überlappen. Zu Illustrationszwecken haben wir schwarze gestrichelte horizontale Linien `20%` und `60%` des Weges durch den Scrollport, beginnend vom Boden, hinzugefügt.

Die Animation beginnt nur, wenn das Element den `20%` Markierungspunkt entlang des Animationsanhängebereichs erreicht. Dieser Punkt befindet sich `60px`, `100px` oder `150px` von der Endkante des Scrollports entfernt, abhängig von der Größe des Elements. Die Position des Subjektelements zu diesem Zeitpunkt, die die Position des Elements repräsentiert, wenn das `from` oder `0%` Schlüsselbild angewendet wird, wird in Gelb angezeigt.

Das Rote repräsentiert die Position des animierten Elements relativ zum Scrollport, wenn das `to` oder `100%` Schlüsselbild angewendet wird, was das Ende der Animation ist. Dieser Punkt ist entweder `180px`, `300px` oder `450px` von der Endkante des Scrollports entfernt, abhängig von der Subjektgröße. Die Animation erfolgt, wenn das Element sich zwischen den `to` und den `from` Positionen befindet.

Sie haben vielleicht etwas Interessantes an den gestrichelten horizontalen Linien bemerkt: Wenn die Animation beginnt, ist die Linie, die `20%` von der Endkante des Viewports entfernt ist, `20%` von der _Oberseite_ des Subjektelements entfernt und die Linie, die `60%` von der Endkante des Viewports entfernt ist, `60%` von der _Oberseite_ des Subjektelements entfernt, wenn die Animation endet. Dies wurde durch die sehr hellgrauen Linien in der Live-Demonstration für dieses Beispiel illustriert.

### Die Größe des Subjekts zählt

Wie wir gesehen haben, als wir [Einsätze mit Längen setzten](#einsetzen_mit_längen), kann die Größe des Subjekts einen Unterschied machen. Beim Festlegen von Animationsbereichen sind Prozentsatzwerte relativ zur Größe des Animationsanhängebereichs, nicht zum Scrollport. Für die meisten benannten Bereiche hängt die Größe des Anhängebereichs teilweise von der Subjektgröße ab. Da Prozentsätze auf der Größe des Bereichs basieren, beeinflusst der benannte Bereich die aufgelöste Größe der Einsätze. Abhängig vom Namen kann sich auch die Startposition ändern, was sich auf den Standort des Bereichs und damit auf den Standort der Fortschrittspunkte auswirkt.

In diesem Beispiel definieren wir einen aktiven Bereich, der `40%` der Größe des Subjekts ausmacht:

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

Die Animation dauert `40%` des Animations-Anhängebereichs. Beim Scrollen bemerken Sie, dass je größer das Subjekt, desto länger der Bereich. Bei `exit-crossing` wird der Animationsbereich nicht beschnitten; er entspricht der Größe des Subjekts, auch wenn das Subjekt größer als der Viewport ist, wobei der Bereich an die Startkante des Scrollports grenzt und über die Endkante hinausgeht, wenn das Subjekt größer als der Scrollport ist.

Mit den `-20%` und `20%` Einsätzen wird die Animation des `50px` Subjekts über `20px` hinweg erfolgen: die Animation beginnt, wenn das Ende des Subjekts `-10px` vom Bereichsstart entfernt ist, oder `60px` vom Verlassen des Bildschirms, und endet, wenn das Ende des Subjekts `40px` vom Verlassen des Bildschirms entfernt ist. Das mittlere Subjekt wird über `100px` hinweg animieren: die Animation beginnt, wenn das Ende des Subjekts `-50px` vom Bereichsstart entfernt ist, was `50px` vom Ende des Scrollports ist, und endet, wenn das Ende des Subjekts `50px` in den Scrollport hineinragt. Das große Subjekt animiert über `200px`, beginnend wenn das Ende `600px` von der Startkante des Containers entfernt ist, mit nur `150px` im Blick, und endet, wenn das Ende 400px von dieser Startkante entfernt ist, wenn `100px` aus der Startkante gescrollt wurden.

### Prozentsätze gleich dem Scrollport

Wenn es um das Versetzen mit Prozentsätzen geht, ist der am wenigsten komplizierte benannte Zeitachsenbereich `contain`. Mit `contain` ist der Animationsbereich die Größe des Scrollports, was bedeutet, dass die Start- und Endprozentsätze relativ zum Scrollport sind. Aus diesem Grund, wenn Sie Offsets verwenden, möchten Sie möglicherweise `contain` verwenden, anstatt den Bereich standardmäßig aufzulösen und ihn auf `cover` zu setzen.

Der `contain` Bereich enthält die Animation vollständig innerhalb des Scrollports. Er repräsentiert den Bereich, während dem die Hauptbox entweder vollständig vom oder vollständig den Sichtbarkeitsbereich ihres Fortschrittsbereichs im Scrollport abdeckt. Mit `contain`, wenn das Subjekt die gleiche Größe oder kleiner als der Scrollport ist, kann es vollständig sichtbar sein. Wenn das Element die gleiche Größe wie der Container hat, erfolgt die Animation über `0px`. Das bedeutet, dass sie abläuft, aber sie ist für den Benutzer nicht sichtbar.

Mit anderen Worten, ohne die Größe des Containers oder der Subjekte zu kennen, können wir unsere Animation auf die Mitte des Scrollports beschränken, obwohl die Animation über `0px` ablaufen wird, wenn das Subjekt die gleiche Größe wie der Scrollport hat.

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

Die horizontalen Linien kennzeichnen die mittlere Hälfte des Scrollports und die mittlere Hälfte jedes Subjekts.

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
- [Schlüsselbildselektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Scrollgetriebene Animationszeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Scrollgetriebene Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [Web-Animationen API](/de/docs/Web/API/Web_Animations_API)
