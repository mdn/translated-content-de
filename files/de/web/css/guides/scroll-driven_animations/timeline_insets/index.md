---
title: Verständnis der Timeline-Einsätze
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_insets
l10n:
  sourceCommit: 7f138099644a02640a903b2abc39e685ca8ca7cd
---

Standardmäßig verfolgen [Ansichtsfortschritts-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente über den gesamten [Bereich der Animationszuordnung](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#the_animation_attachment_range). Der Fortschrittspunkt `0%` liegt am Anfang des Bereichs, während der Fortschrittspunkt `100%` am Ende liegt. Der Bereich der Animationszuordnung kann durch Festlegen eines [Timeline-Rangnamens](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) geändert werden, und der Ort der `0%`- und `100%`-Fortschrittspunkte entlang des Bereichs kann durch Setzen von Längen- oder prozentbasierten Einsätzen angepasst werden.

Dieser Leitfaden erklärt, wie Sie die Animationstimeline auf einen bestimmten Teil des Animationszeitlinienbereichs mithilfe von Längen- oder Prozentsatzeinsätzen beschränken können.

## Animationstimen: eine Einführung

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden erstellt, indem benannte {{cssxref("@keyframes")}}-Animationen definiert werden, die das Verhalten einer Animation spezifizieren, und dann die Keyframe-Animation mithilfe des Animationsnamens an ein Element angehängt wird.

Die Animations-Timeline des Elements, definiert durch die {{cssxref("animation-timeline")}} Eigenschaft, bestimmt, wie und wann das Element durch diese Keyframes fortschreitet. Standardmäßig ist die Timeline zeitbasiert und verwendet die standardmäßige dokumentbasierte Zeit-Timeline [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline).

Das Modul [CSS-Scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Scroll-Fortschritts- und Ansichtsfortschritts-Timelines, bei denen es sich um Methoden zur Animation von Eigenschaftswerten entlang einer scrollbasierten Timeline anstelle der standardmäßigen zeitbasierten Dokument-Timeline handelt. In diesem Artikel besprechen wir nur Ansichtsfortschritts-Timelines, da [Scroll-Fortschritts-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) für Timeline-Einsätze nicht relevant sind.

### Ansichtsfortschritts-Timelines

Bei [Ansichtsfortschritts-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) wird die Timeline oder der Fortschritt der Animation durch die Sichtbarkeit des Elements anstelle des Zeitablaufs gesteuert, wobei die Keyframe-Progression an die Position und Sichtbarkeit des Subjektelements innerhalb des Scroll-Containers gebunden ist. Die Animation schreitet voran und kehrt sich um, wenn das Element durch das Scrollport vorwärts oder rückwärts bewegt. Die Animation erfolgt nur, wenn mindestens ein Teil des Elements innerhalb seines Scrollports sichtbar ist und pausiert, wenn das Scrollen stoppt.

```css live-sample___svg_view
.animated_element {
  animation-name: nameOfAnimation;
  animation-timeline: view();
}
```

Die Einstellung eines {{cssxref("animation-name")}} wendet die Animation auf das ausgewählte Element an.

> [!NOTE]
> Die `animation-timeline` Eigenschaft sollte immer nach allen `animation` Kurzschreibweise-Deklarationen stehen. Während die Kurzschreibweise-Eigenschaft nicht verwendet werden kann, um die `animation-timeline`-Eigenschaft zu setzen, setzt sie doch die Timeline auf die standardmäßige zeitbasierte Dokument-Timeline zurück.

> [!NOTE]
> In allen Beispielen ist der {{Glossary("scroll_container", "Scroll-Container")}} `250px` hoch und wir verwenden die Standardwerte für {{cssxref("animation-iteration-count")}} (`1`), {{cssxref("animation-delay")}} (`0s`) und {{cssxref("animation-direction")}} (`normal`). Wir setzen die {{cssxref("animation-timing-function")}} auf `step-end` und den {{cssxref("animation-fill-mode")}} auf `forward`, um es deutlicher zu machen, wann die Animation noch nicht begonnen hat, wann sie aktiv ist und wann sie abgeschlossen ist. Weitere Informationen finden Sie im [Leitfaden zur Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using).

Wenn Sie nach oben scrollen, schreitet die Animation voran. Wenn Sie nach unten scrollen, kehrt sich die Animation um.

{{EmbedLiveSample("initial", "100%", "400")}}

In diesem Beispiel tritt die Animation auf, wann immer ein Teil des Subjektelements im Scrollport sichtbar ist. Standardmäßig beginnen Ansichtsfortschritts-Animationen direkt dann, wenn die Oberkante des Subjektelements mit der Unterkante des Scroll-Containers übereinstimmt, und enden mit `100%` Fortschritt, wenn die Endkante mit der Startkante des Containers übereinstimmt, unabhängig von der Größe des Subjektelements. Per Voreinstellung wird die Animation angewendet, wenn ein Teil des Subjekts im Scrollport sichtbar ist.

### Animationsanhangbereich

In einer [Ansichtsfortschritts-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), wenn keine Animationsbereichs-Eigenschaften definiert sind, ist `<timeline-range-name>` `normal`, was standardmäßig `cover` ist. Die Animation wird angewendet, wann immer ein Teil des Subjektelements sichtbar ist, was bedeutet, dass der standardmäßige **Animationsanhangbereich** die Summe der Höhe des Scroll-Containers und der Höhe des Subjektelements ist, mit dieser zusätzlichen Höhe am Ende des Scrolls. In unserem Beispiel ist der Scroll-Container `250px` hoch, und das Subjekt ist `50px`, `250px` oder `500px` hoch, wobei der vertikale Animationsanhangbereich entsprechend `300px`, `500px` oder `750px` ist.

Der `0%` Fortschritt tritt auf, wenn die Startkante des Subjektelements die Scrollport auf der Endkante schneidet und `100%` Fortschritt erreicht, wenn die Endkante des Subjekts über die Startkante der Scrollport austritt. Dies sind die oberen und unteren Kanten von Subjekt und Scrollport beim vertikalen Scrollen und die linken und rechten oder rechten und linken Kanten beim horizontalen Scrollen, je nach Schreibrichtung.

Das folgende Diagramm veranschaulicht die Position des Subjekts an den `0%` und `100%` Fortschrittspunkten für die drei Subjektgrößen:

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

Die gelben Subjektelemente repräsentieren die Position des Elements, wenn das `from`-Keyframe angewendet wird, welches das `0%` Fortschrittszeichen des Animationsbereichs markiert. Das Rote repräsentiert die Position des animierten Elements relativ zum Scrollport, wenn das `to`-Keyframe angewendet wird, welches das Ende der Animation oder das `100%` Fortschrittszeichen markiert. Das Graue repräsentiert den Scrollport.

Standardmäßig animiert sich das Element, während es „in Sicht“ ist, aber diese Standarddefinition von „in Sicht“ passt möglicherweise nicht zu Ihren Bedürfnissen. Zum Glück können wir steuern, welche Kanten die Kanten des Animationsanhangbereichs definieren und dann den Start und das Ende dieses Bereichs mit den Eigenschaften des Animationsbereichs versetzen.

### Animationsbereichs-Eigenschaften

Die Animationsbereichs-Eigenschaften {{cssxref("animation-range")}} ermöglichen es, einen benannten Timeline-Bereich anzugeben, wie `contain` oder `exit-crossing`, der den verwendeten Bereich vom Standard `cover`-Bereich ändert. Sie können auch einen {{cssxref("length-percentage")}}-Wert einschließen, der den Anhangbereich vom Start des Bereichs versetzt. Prozentsätze beziehen sich auf die benannte oder Standard-Timeline.

Benannte Timeline-Bereiche definieren die Teile einer [`ViewTimeline`](/de/docs/Web/API/ViewTimeline), die den Bereich einer Animation definieren, und spezifizieren den Start und das Ende des Anhangbereichs der Animation.

Die `animation-range`-Eigenschaft ist eine Kurzform und definiert die Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}}. Die `animation-range-start` definiert die Position des Subjektelements, wenn die Animation beginnt. Die `animation-range-end` definiert die Position des Subjektelements, wenn die Animation endet.

Lesen Sie den [Leitfaden zu Timeline-Rangnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names), um mehr über die verschiedenen benannten Timeline-Bereiche zu erfahren. Dieser Leitfaden konzentriert sich darauf, wie die {{cssxref("length-percentage")}}-Einsatzwerte funktionieren.

## Einsätze mit Längen setzen

Die Eigenschaften `animation-range-start` und `animation-range-end` akzeptieren jeweils einen benannten Animationsbereich, einen {{cssxref("length-percentage")}}-Offsetwert oder beides. Jeder Längen- oder Prozentsatz-Offset wird vom _Start_ des Animationsanhangbereichs gemessen.

Wenn eine {{cssxref("length")}} gesetzt ist, ist der Offset ziemlich intuitiv.
Hier verwenden wir die Eigenschaften `animation-range-start` und `animation-range-end`, um die Animationstimeline einzusetzen. Dies definiert einen Abschnitt der vollen Animationsanhangreichweite des Elements als das aktive Intervall, wobei die `<length>`-Werte Entfernungen vom Beginn des Standard-Animationsanhangsbereichs `normal` festlegen.

```css live-sample___inset_length
.animated_element {
  animation-range-start: 1em;
  animation-range-end: 125px;
}
```

Der Start und das Ende des Animationsbereichs befinden sich 1em bzw. 125px vom Anfang des Animationsanhangbereichs. Da das Standard-Timeline-Rang `normal` ist, welches sich zu `cover` auflöst, ist der Beginn des Animationsanhangbereichs die Endkante des Containers.

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

Wir haben Linien `1em` und `125px` von der Endkante des Scroll-Containers hinzugefügt. Die Animation beginnt, wenn die Startkante des Blockbeginns des Subjektelements die `1em`-Linie erreicht und endet, wenn sie die `125px`-Linie erreicht.

In diesem Fall, da der Animationsanhangbereich auf `cover` für sowohl die Start- als auch Endeinsatzwerte aufgelöst wird, ist die Position der Einsätze ziemlich direkt.

### Effekt von benannten Bereichen auf Längen-Offsets

Der Offset-Abstand ist immer vom Beginn des zugehörigen Animationsbereichs. In diesem Beispiel setzen wir das `animation-range-start` auf `50px` vom Beginn des Standardbereichs `normal` und setzen das `animation-range-end` auf `100px` vom Beginn des explizit gesetzten `entry`-Bereichs:

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

Da die Startkante sowohl des `normal` als auch des `entry`-Bereichs die Endkante des Containers ist, beginnt die Animation, wenn die Startkante des Subjekts `50px` vom unteren Ende des Scrollports entfernt ist und endet, wenn sie `100%`-Fortschritt erreicht, wenn die Startkante des Subjekts `100px` vom unteren Ende des Scrollports entfernt ist, unabhängig von der Subjektgröße. Während die Größe des `entry`-Bereichs für die drei verschiedenen Subjektgrößen unterschiedlich ist, spielte die Größe des zugrunde liegenden Bereichs in diesem Fall keine Rolle.

### Längen-Offsets mit variierenden Bereichen

Die Größe des Bereichs spielt eine Rolle, wenn der Bereich nicht an der Endkante des Elements beginnt, wie es bei `exit` und `exit-crossing` der Fall ist, oder wenn der Offset ein Prozentsatzwert ist. Diese Tatsache und die Tatsache, dass Sie Animationsbereichsnamen mischen und anpassen können, machen Offsets für Ansichtsfortschritts-Timelines etwas komplizierter zu verstehen als nicht versetzte [Timeline-Rang-Namen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).

Wenn beispielsweise `exit` als Timeline-Rang-Name festgelegt wird, spielt die Subjektgröße eine Rolle, da sie den Ort der Endkante des Bereichs bestimmt.

```css live-sample___exit_length
.animated_element {
  animation-range-start: entry 60px;
  animation-range-end: exit 75px;
}
```

Sowohl bei `entry` als auch bei `exit` entspricht der Bereich der Größe des Subjekts, wobei die Größe auf die Größe des Scrollports begrenzt wird. Das bedeutet, dass die Höhe der `entry` und `exit` Bereiche in den Beispielen `50px` und `250px` hoch ist, während im `500px`-Beispiel der Bereich auf die Höhe des Scrollports begrenzt ist, der `250px` hoch ist.

{{EmbedLiveSample("exit_length", "100%", "310")}}

Wir haben ein paar Linien hinzugefügt, um die Erklärungen, die folgen, zu erleichtern: Die untere blaue Linie ist `60px` von der Endkante des Scrollports entfernt, und die obere rote Linie ist `75px` von derselben Kante entfernt. Hier beginnen und enden der Animationsbereich.

Dieses Beispiel demonstriert mehrere wichtige Merkmale, die wir ausführlicher erklären werden, einschließlich:

- Offsets werden [vom Beginn ihrer jeweiligen benannten Bereiche gemessen](#vom_beginn_des_bereichs_gemessen)
- Offsets können [über die Ränder des Scrollports hinaus auftreten](#über_die_ränder_des_scrollports_hinaus)
- [Bereiche können abgeschnitten werden](#effekte_des_abschneidens), wenn das Subjekt größer als der Scrollport ist

#### Vom Beginn des Bereichs gemessen

Da die Offset-Position immer relativ zum Beginn des Deklarationsanimationsbereichs ist, tritt der Beginn der Animation für alle drei Elemente auf, wenn die Startkante der Elemente den Punkt schneidet, der `60px` vom Beginn des `entry`-Bereichs entfernt ist.

Der `animation-range-end`-Wert definiert die Position, an der die Animation endet. Der Wert `exit 75px` bedeutet im Grunde "wenn `75px` des Subjekts über den Startpunkt des Scrollports hinausgegangen sind." Dies variiert für jedes Subjekt. Für das `50px`-Subjekt tritt dies erst `25px` nach ihrem Verlassen des Scrollports ein; wenn das Element nicht mehr sichtbar ist. Das Ende des Animationsbereichs für sowohl die `250px` als auch `500px` Subjekte tritt ein, wenn ihre untere Endkante die obere blaue Linie schneidet; `75px` von der Endkante des Scrollports entfernt. Warum sind ihre End-Offsets gleich? Wegen des [Abschneidens](#effekte_des_abschneidens)! Die maximale Größe des benannten Animationsbereichs ist auf die Größe des Scrollports begrenzt. Der `exit`-Bereich für beide Subjekte ist gleich, daher sind die Bereichsend-Offsets gleich.

#### Über die Ränder des Scrollports hinaus

Für unser `50px` hohes Subjekt ist der `exit`-Bereich `50px` hoch und schließt an die Startkante des Scrollports an. Das Setzen von `animation-range-end: exit 75px` für jedes Element, das kleiner als `75px` ist, bedeutet, dass das Ende des Bereichs außerhalb des Scrollports ist, da der Punkt `75px` vom Start des `exit`-Bereichs jenseits der Startkante des Scrollports liegt. In unserem Beispiel tritt das Ende des Animationsbereichs für das `50px` Subjekt ein, wenn die Startkante des Subjekts `75px` über die Startkante des Scrollports hinaus ist. Die Animation endet, indem das `to`-Keyframe erreicht wird und das [`animationend`](/de/docs/Web/API/Element/animationend_event) Ereignis eintritt, nur wenn (und falls) das Element `25px` außer Sicht gescrollt wird.

Die Animation endet selbst dann, wenn das Ende des Animationsbereichs außerhalb des Scrollports ist, solange es einen Raum gibt, zu diesem Punkt zu scrollen. Hätten wir `animation-range-end: exit 250px` gesetzt, wäre die Animation geendet, wenn die Endkante der mittleren und hohen Subjekte den Scrollport an der Startkante des Containers verlassen.

Wäre das Ende auf `exit 250px` gesetzt, würde die Animation des kleinen Subjekts möglicherweise nicht enden, da es möglicherweise nicht `450px` an Inhalt nach dem Subjekt zum Scrollen gibt, bevor der Endpunkt erreicht ist.

#### Effekte des Abschneidens

Bei unserem `250px` hohen Container, wenn das Subjekt `250px` oder `500px` hoch ist, ist der `exit`-Bereich die Größe des Containers, wobei der Start die Endkante des Scrollport des Containers ist. Mit einem `75px`-Offset tritt das Ende der Animation ein, wenn die Endkante des Subjekts `75px` von der Endkante des Scrollports entfernt ist, was durch die obere rote Linie angezeigt wird.

Da die Offset-Position immer relativ zum Beginn des benannten oder Standard-Animationsbereichs ist, wirkt sich das Abschneiden in unserem Beispiel auf das `animation-range-end` des großen Subjekts aus. Wir setzen das Ende des Bereichs auf `exit 75px`, was `75px` vom Beginn des `exit`-Bereichs entfernt ist. Wenn das Subjekt dieselbe Größe wie der Scrollport hat (unser `250px` Subjekt) oder größer (unser `500px` Subjekt), ist das Ende des Animationsbereichs `75px` von der Endkante des Scrollports entfernt, was `75px` vom Beginn des scrollport-begrenzten `exit`-Bereichs entfernt ist.

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

Bis zu diesem Punkt lagen alle Offsets über null. Es ist wichtig zu beachten, dass negative Längen gültig sind. Ein negativer Offset auf dem `animation-range-start` macht den Bereich länger, während ein negativer Offset auf dem `animation-range-end` den Bereich kürzer macht.

Vergleichen wir die negativen Einsätze mit den `0` Werten:

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

Der erste Animationsbereich ist um `25px` zur Endkante des Containers hin versetzt.

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

## Einsätze mit Prozentangaben setzen

Wie Längenwerte definieren Prozentsatzwerte Offsets vom _Start_ des Animationsanhangbereichs. Die Prozentsatz-Offsets beziehen sich auf die Dimension des Zeitlinienbereichs, nicht auf den Scrollport. Aus diesem Grund sind Prozentsatzwerte für die meisten Menschen nicht so intuitiv wie Längenwerte (zumal Längenwerte auch nicht so intuitiv waren).

Hier verwenden wir `animation-range-start` und `animation-range-end`, um die Animationstimeline einzusetzen. Während wir dieselben Eigenschaften verwenden, setzen wir `<percentage>`-Werte anstelle von `<length>`-Werten:

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

Dies definiert das aktive Intervall, das `20%` in den Standardanhangbereich hinein beginnt und `60%` durch denselben Bereich endet. Der Standardanhangbereich `normal`, der sich als [`cover`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#cover) verhält, ist die Höhe des Scroll-Containers plus die Höhe des Subjektelements, was bedeutet, dass der Bereich je nach ausgewähltem Radioknopf unterschiedlich ist.

{{EmbedLiveSample("inset_percent", "100%", "400")}}

Zu Illustrationszwecken gibt es zwei dunkle Linien, die den Container an den `20%`- und `60%`-Punkten des gesamten Animationsbereichs kreuzen. Die Animation beginnt, wenn die Block-Startkante den `20%`-Punkt erreicht, der die untere grüne Linie ist. Die Animation endet, wenn die Startblockkante 60% des Wegs durch den normalen Bereich ist, die obere rote Linie.

Nur wenn das Element `50px` hoch ist, ist die Oberkante des Subjekts noch im Scrollport, wenn das Ende der Animation erreicht ist; es gibt keine oberen roten Linien, wenn `250px` oder `500px` ausgewählt sind, da das Ende des Animationsbereichs außerhalb des Scrollports ist.

Basierend auf der Höhe unserer Subjekte ist das `20%`-Zeichen entweder `60px`, `100px` oder `150px` von der Endkante des Scrollports entfernt (markiert durch die grüne Linie, die immer im Scrollport ist), und das `60%`-Zeichen ist `180px`, `300px` oder `450px` vom selben Punkt entfernt (markiert mit einer roten Linie, aber nur für das `50px`-Subjekt sichtbar).

Zu Illustrationszwecken gibt es zwei hellgraue Linien, die den Container `20%` und `60%` durch den Scrollport kreuzen, die `50px` und `150px` vom unteren Ende des Scrollports entfernt sind. Da sich die `animation-range-*` Prozentwerte auf den Zeitlinienbereich beziehen, nicht auf den Scrollport, zeigen diese Linien nur, wie die Prozentsätze **nicht** übereinstimmen. Wir haben auch zwei horizontale hellgraue Linien über jedes Subjekt in ihren eigenen `20%`- und `60%`-Marken hinzugefügt. Diese Linien stimmen mit den hellgrauen Linien des Scrollports überein, wenn die Animationen der einzelnen Subjekte beginnen und enden.

Das folgende Bild zeigt, wo sich die Subjektelemente befinden, wenn die Animation beginnt (das `0%`-Keyframe) und endet (das `100%`-Keyframe).
Dieses Bild enthält die Einsätze aus der vorherigen Demonstration der Zeitleiste und die Zeitleiste ohne Einsätze zum Vergleich.

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

Wie zuvor repräsentiert das Gelbe die Position des Elements, wenn das `from`-Keyframe angewendet wird, das Rote repräsentiert die Position, wenn das `to`-Keyframe angewendet wird, und das Graue repräsentiert den Scrollport. Die gestreiften Bereiche sind, wo sich die roten und gelben Elementdarstellungen überlappen. Zu Illustrationszwecken haben wir gestrichelte schwarze horizontale Linien `20%` und `60%` durch den Scrollport, beginnend von unten, hinzugefügt.

Die Animation beginnt nur, wenn das Element die `20%`-Marke entlang des Animationsanhangbereichs erreicht. Dieser Punkt ist `60px`, `100px` oder `150px` von der unteren Kante des Scrollports entfernt, abhängig von der Größe des Elements. Die Position des Subjektelements an diesem Punkt, die die Position des Elements darstellt, wenn das `from` oder `0%`-Keyframe angewendet wird, wird in Gelb dargestellt.

Das Rote repräsentiert die Position des animierten Elements relativ zum Scrollport, wenn das `to` oder `100%`-Keyframe angewendet wird, welches das Ende der Animation markiert. Dieser Punkt ist entweder `180px`, `300px` oder `450px` von der unteren Kante des Scrollports entfernt, abhängig von der Subjektgröße. Die Animation erfolgt, wenn das Element zwischen den `to`- und `from`-Positionen liegt.

Vielleicht haben Sie etwas Interessantes an den gestrichelten horizontalen Linien bemerkt: Wenn die Animation beginnt, ist die Linie, die `20%` von der Endkante des Viewports entfernt ist, `20%` vom _oben_ des Subjektelements entfernt und die Linie, die `60%` von der Endkante des Viewports entfernt ist, ist `60%` vom _oben_ des Subjektelements entfernt, wenn die Animation endet. Dies wurde durch die sehr hellgrauen Linien in der Live-Demo für dieses Beispiel veranschaulicht.

### Subjektgröße ist entscheidend

Wie wir gesehen haben, als wir [Einsätze mit Längen gesetzt haben](#einsätze_mit_längen_setzen), kann die Größe des Subjekts einen Unterschied machen. Beim Festlegen von Animationsbereichen beziehen sich Prozentwerte auf die Größe des Animationsanhangbereichs, nicht auf den Scrollport. Für die meisten benannten Bereiche hängt die Größe des Anhangbereichs teilweise von der Subjektgröße ab. Da Prozentsätze auf der Größe des Bereichs basieren, wirkt sich der benannte Bereich auf die aufgelöste Größe der Einsätze aus. Je nach Name kann sich die Startposition ebenfalls ändern, was sich auf die Position des Bereichs und damit auf die Positionen der Fortschrittspunkte auswirkt.

In diesem Beispiel definieren wir einen aktiven Bereich, der `40%` der Größe des Subjekts entspricht:

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

Die Animation dauert `40%` des Animationsanhangbereichs. Wenn Sie scrollen, beachten Sie, wie größer das Subjekt, desto länger die Reichweite. Mit exit-crossing wird der Animationsbereich nicht beschnitten; er entspricht der Größe des Subjekts, auch wenn das Subjekt größer als der Viewport ist, wobei der Bereich an die Startkante des Scrollports anschließt und sich über die Endkante hinaus erstreckt, wenn das Subjekt größer als der Scrollport ist.

Mit den `-20%` und `20%`-Einsätzen wird die Animation des `50px`-Subjekts `20px` überdecken: Die Animation beginnt, wenn das Ende des Subjekts `-10px` von Bereichbeginn ist, oder `60px` vom Bildschirmende entfernt, und endet, wenn das Ende des Subjekts `40px` vom Bildschirmende entfernt ist. Das mittlere Subjekt wird über `100px` animieren: Die Animation beginnt, wenn das Ende des Subjekts `-50px` vom Bereichsbeginn ist, was `50px` vom Endrand des Scrollports entfernt ist, und endet, wenn das Ende des Subjekts `50px` in den Scrollport eingedrungen ist. Das große Subjekt animiert über `200px`, beginnt, wenn das Ende `600px` vom Containerstart entfernt ist, wobei nur `150px` im Blickfeld sind, und endet, wenn das Ende 400px vom Containerstart entfernt ist, wenn `100px` über den Start hinaus gescrollt sind.

### Prozentsätze, die dem Scrollport entsprechen

Wenn es um das Versetzen mit Prozentsätzen geht, ist der am wenigsten komplizierte benannte Zeitlinienbereich `contain`. Bei `contain` entspricht der Animationsbereich der Größe des Scrollports, was bedeutet, dass die Start- und Endprozentsätze relativ zum Scrollport sind. Aus diesem Grund könnten Sie bei der Verwendung von Offsets `contain` anstelle der Standard-Einstellung, die sich zu `cover` auflöst, nutzen wollen.

Der `contain`-Bereich umfasst die Animation vollständig innerhalb des Scrollports. Er stellt den Bereich dar, in dem die Hauptbox entweder vollständig imsichtbaren Bereich des Scrollports enthalten ist oder ihn vollständig überdeckt. Bei `contain`, wenn das Subjekt dieselbe Größe oder kleiner als der Scrollport hat, kann es vollständig sichtbar sein. Wenn das Element dieselbe Größe wie der Container hat, wird die Animation jedoch über `0px` laufen. Das bedeutet, dass sie ausgeführt wird, aber für den Benutzer nicht sichtbar ist.

Anders ausgedrückt, ohne die Größe des Containers oder der Subjekte kennen zu müssen, sind wir in der Lage, unsere Animation auf die Mitte des Scrollports zu beschränken, obwohl die Animation über `0px` erfolgt, wenn das Subjekt dieselbe Größe wie der Scrollport hat.

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
- [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Scroll-gesteuerte Animationstimen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
