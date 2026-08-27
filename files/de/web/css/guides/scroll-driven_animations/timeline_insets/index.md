---
title: Verständnis der Timeline-Inset-Werte
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_insets
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Standardmäßig verfolgen [View Progress Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente über den gesamten [Animationsanheftungsbereich](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#the_animation_attachment_range). Der Fortschrittspunkt `0%` liegt am Anfang des Bereichs, während der Punkt `100%` am Ende liegt. Der Anheftungsbereich der Animation kann durch Festlegen eines [Timeline Range Names](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) geändert werden, und die Position der Fortschrittspunkte `0%` und `100%` entlang des Bereichs kann durch Festlegen von Längen- oder Prozent-Inset-Werten angepasst werden.

Dieser Leitfaden erklärt, wie Sie die Animations-Timeline auf einen bestimmten Teil des Animationszeitbereichs mit Längen- oder Prozent-Inset-Werten begrenzen können.

## Animations-Timelines: eine Einführung

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden durch die Definition benannter {{cssxref("@keyframes")}}-Animationen erstellt, die das Verhalten einer Animation spezifizieren, und dann die Keyframe-Animation mithilfe des Namens der Animation an ein Element anheften.

Die Animations-Timeline des Elements, definiert durch die Eigenschaft {{cssxref("animation-timeline")}}, bestimmt, wie und wann das Element durch diese Keyframes fortschreitet. Standardmäßig ist die Timeline zeitbasiert und verwendet die standardmäßige zeitraumbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments.

Das Modul [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Scroll-Fortschritts- und View-Fortschritt-Timelines, die Methoden sind, um Eigenschaftswerte entlang einer scrollbasierten Timeline anstelle der standardmäßigen zeitraumbasierten Dokument-Timeline zu animieren. In diesem Artikel werden wir nur View Progress Timelines besprechen, da [Scroll Progress Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) für Timeline-Inset-Werte nicht relevant sind.

### View Progress Timelines

Bei [View Progress Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) wird die Timeline oder der Fortschritt der Animation durch die Sichtbarkeit des Elements anstelle des Zeitablaufs gesteuert, wobei der Keyframe-Fortschritt an die Position und Sichtbarkeit des Elementes innerhalb des Scroll-Containers gebunden ist. Die Animation läuft vorwärts oder rückwärts, während das Element durch den Scrollport fortschreitet oder umgekehrt. Die Animation erfolgt nur, wenn zumindest ein Teil des Elements innerhalb seines Scrollports sichtbar ist, und pausiert, wenn das Scrollen stoppt.

```css live-sample___svg_view
.animated_element {
  animation-name: nameOfAnimation;
  animation-timeline: view();
}
```

Das Setzen eines {{cssxref("animation-name")}} wendet die Animation auf das ausgewählte Element an.

> [!NOTE]
> Die Eigenschaft `animation-timeline` sollte immer nach allen `animation`-Kurzschreibnotationen kommen. Auch wenn die Kurzschreibweise nicht verwendet werden kann, um die Eigenschaft `animation-timeline` zu setzen, setzt sie die Timeline trotzdem auf die standardmäßige zeitraumbasierte Dokument-Timeline zurück.

> [!NOTE]
> In allen Beispielen ist der {{Glossary("scroll_container", "Scroll-Container")}} `250px` hoch und wir verwenden die Standardwerte für {{cssxref("animation-iteration-count")}} (`1`), {{cssxref("animation-delay")}} (`0s`) und {{cssxref("animation-direction")}} (`normal`). Wir setzen die {{cssxref("animation-timing-function")}} auf `step-end` und {{cssxref("animation-fill-mode")}} auf `forward`, um es deutlicher zu machen, wann die Animationsiteration noch nicht begonnen hat, wann sie aktiv ist und wann sie abgeschlossen ist. Lesen Sie den [Verwendung von CSS-Animationen-Leitfaden](/de/docs/Web/CSS/Guides/Animations/Using), um mehr zu erfahren.

Wenn Sie nach oben scrollen, schreitet die Animation voran. Wenn Sie nach unten scrollen, geht die Animation rückwärts.

{{EmbedLiveSample("initial", "100%", "400")}}

In diesem Beispiel tritt die Animation auf, wann immer ein Teil des betreffenden Elements im Scrollport sichtbar ist. Standardmäßig beginnen View Progress Animations gerade dann, wenn die obere Kante des betreffenden Elements sich mit der unteren Kante des Scroll-Containers ausrichtet und enden, indem sie `100%` Fortschritt erreichen, wenn die Endkante sich mit der Startkante des Containers ausrichtet, unabhängig von der Größe des betreffenden Elements. Standardmäßig wird die Animation angewendet, wenn ein Teil des Betreffs innerhalb des Scrollports sichtbar ist.

### Anheftungsbereiche der Animation

In einem [View Progress Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), wenn keine Animationsbereichs-eigenschaften definiert sind, ist das `<timeline-range-name>` `normal`, was standardmäßig `cover` ist. Die Animation wird immer dann angewendet, wenn irgendein Teil des betreffenden Elements sichtbar ist, was bedeutet, dass der standardmäßige **Animationsanheftungsbereich** die Summe der Höhe des Scroll-Containers und der Höhe des betreffenden Elements ist, wobei diese zusätzliche Höhe am Scroll-Ende Rand liegt. In unserem Beispiel, da der Scroll-Container `250px` hoch ist und der Betreff `50px`, `250px` oder `500px` hoch ist, beträgt der vertikale Anheftungsbereich der Animation `300px`, `500px` oder `750px` bzw.

Der Fortschritt bei `0%` tritt auf, wenn die Startkante des betreffenden Elements den Scrollport am Endrand schneidet und `100%` Fortschritt erreicht, wenn die Endkante des Betreffs den Scrollport durch die Startkante verlässt. Dies sind die oberen und unteren Kanten des Betreffs und des Scrollports beim vertikalen Scrolling, und die linken und rechten oder rechten und linken Kanten beim horizontalen Scrolling, abhängig vom Schreibmodus.

Das folgende Diagramm zeigt die Position des Betreffs bei den `0%`- und `100%`-Fortschrittspunkten für die drei Subjektgrößen:

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

Die gelben Elemente repräsentieren die Position des Elements, wenn der `from`-Keyframe angewendet wird, also die `0%`-Fortschrittsmarkierung des Animationsbereichs. Das Rot repräsentiert die Position des animierten Elements relativ zum Scrollport, wenn der `to`-Keyframe angewendet wird, was das Ende der Animation darstellt, oder die `100%`-Fortschrittsmarkierung. Das Grau repräsentiert den Scrollport.

Standardmäßig animiert sich das Element, während es "in view" ist, aber diese standardmäßige Definition von "in view" passt möglicherweise nicht zu Ihren Anforderungen. Glücklicherweise können wir steuern, welche Kanten die Ränder des Animationsanheftungsbereichs definieren und dann den Start und das Ende dieses Bereichs mit den Animationsbereichs-eigenschaften versetzen.

### Animationsbereichs-Eigenschaften

Die {{cssxref("animation-range")}}-Eigenschaften ermöglichen es, einen benannten Timeline-Bereich wie `contain` oder `exit-crossing` zu spezifizieren, der den verwendeten Bereich vom standardmäßigen `cover`-Bereich ändert. Sie können auch einen {{cssxref("length-percentage")}}-Wert einbeziehen, der den Anheftungsbereich vom Start des Bereichs einfügen. Prozentsätze beziehen sich auf den benannten oder standardmäßigen Timeline-Bereich.

Benannte Timeline-Bereiche definieren die Teile eines [`ViewTimeline`](/de/docs/Web/API/ViewTimeline), die den Bereich einer Animation definieren, indem sie den Start und das Ende des Anheftungsbereichs der Animation spezifizieren.

Die Eigenschaft `animation-range` ist eine Kurzschreibweise, die die Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} definiert. `animation-range-start` definiert die Position des betreffenden Elements, wenn die Animation beginnt. `animation-range-end` definiert die Position des betreffenden Elements, wenn die Animation endet.

Lesen Sie den [Leitfaden zu den Namen der Timeline-Bereiche](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names), um mehr über die verschiedenen benannten Timeline-Bereiche zu erfahren. Dieser Leitfaden konzentriert sich darauf, wie die {{cssxref("length-percentage")}}-Inset-Werte funktionieren.

## Setzen von Inset-Werten mit Längen

Die Eigenschaften `animation-range-start` und `animation-range-end` akzeptieren jeweils einen benannten Animationsbereich, einen {{cssxref("length-percentage")}}-Offset-Wert oder beides. Jeder Längen- oder Prozentsatzversatz wird vom _Start_ des Anheftungsbereichs der Animation aus gemessen.

Wenn eine {{cssxref("Länge")}} festgelegt ist, ist der Versatz ziemlich intuitiv.
Wir verwenden hier die Eigenschaften `animation-range-start` und `animation-range-end`, um die Animations-Timeline einzufügen. Dies definiert ein Unterabschnitt des gesamten Anheftungsbereichs der Animation des Elements als aktives Intervall, wobei die `<length>`-Werte Abstände vom Start des standardmäßigen `normalen` Anheftungsbereichs der Animation angeben.

```css live-sample___inset_length
.animated_element {
  animation-range-start: 1em;
  animation-range-end: 125px;
}
```

Der Start und das Ende des Animationsbereichs sind `1em` bzw. `125px` vom Start des Anheftungsbereichs der Animation entfernt. Da der Standard-Timeline-Bereich `normal` ist, der sich als `cover` auflöst, ist der Startpunkt des Anheftungsbereichs der Animation der Block-Endrand des Containers.

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

Wir haben Linien `1em` und `125px` vom Block-Endrand des Scroll-Containers hinzugefügt. Die Animation beginnt, wenn die Block-Startkante des betreffenden Elements die `1em`-Linie erreicht und endet, wenn sie die `125px`-Linie erreicht.

In diesem Fall, da der Anheftungsbereich der Animation sowohl für den Start- als auch für den End-Offsetwert zu `cover` aufgelöst wird, ist die Position der Inset-Werte ziemlich einfach.

### Auswirkungen benannter Bereiche auf Längen-Offsets

Der Offset-Abstand ist immer vom Start des zugehörigen Animationsbereichs. In diesem Beispiel setzen wir `animation-range-start` auf `50px` vom Start des standardmäßigen `normalen` Bereichs und setzen `animation-range-end` auf `100px` vom Start des explizit gesetzten `entry`-Bereichs:

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

Da der Startpunkt sowohl des `normalen` als auch des `entry`-Bereichs die Endkante des Containers ist, beginnt die Animation, wenn die Startkante des Subjekts `50px` vom unteren Rand des Scrollports entfernt ist, und endet mit `100%` Fortschritt, wenn die Startkante des Subjekts `100px` vom unteren Rand des Scrollports entfernt ist, unabhängig von der Größe des Subjekts. Während die Größe des `entry`-Bereichs für die drei verschiedenen Subjektgrößen unterschiedlich ist, spielt in diesem Fall die Größe des zugrunde liegenden Bereichs keine Rolle.

### Längen-Offsets mit unterschiedlichen Bereichen

Die Größe des Bereichs ist wichtig, wenn der Bereich nicht an der Endkante des Elements beginnt, wie es bei `exit` und `exit-crossing` der Fall ist, oder wenn der Offset ein Prozentwert ist. Diese Tatsache und die Tatsache, dass Sie Anwendungsbereichs-Namen mischen und anpassen können, machen View Progress Timeline-Offsets etwas komplexer zu verstehen als nicht versetzte [Timeline-Bereichs-Namen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).

Zum Beispiel, wenn Sie `exit` als den Timeline-Bereichsnamen setzen, ist die Größe des Subjekts wichtig, da sie den Ort der Endkante des Bereichs bestimmt.

```css live-sample___exit_length
.animated_element {
  animation-range-start: entry 60px;
  animation-range-end: exit 75px;
}
```

Sowohl bei `entry` als auch bei `exit` ist der Bereich die Größe des Subjekts, wobei die Größe auf die Größe des Scrollports beschränkt ist. Das bedeutet, dass die Höhe der `entry`- und `exit`-Bereiche die Höhe der Box in den `50px`- und `250px`-Beispielen ist, während im `500px`-Beispiel der Bereich auf die Höhe des Scrollports beschränkt ist, der `250px` hoch ist.

{{EmbedLiveSample("exit_length", "100%", "310")}}

Wir haben ein paar Linien hinzugefügt, um die folgenden Erklärungen zu erleichtern: Die untere blaue Linie ist `60px` von der Endkante des Scrollports entfernt, und die obere rote Linie ist `75px` von derselben Kante entfernt. Hier beginnen bzw. enden die Animationsbereiche.

Dieses Beispiel zeigt mehrere wichtige Merkmale, die wir ausführlicher erläutern werden, darunter:

- Offsets werden [vom jeweiligen benannten Bereich aus gemessen](#vom_startpunkt_des_bereichs_gemessen)
- Offsets können [über die Kanten des Scrollports hinaus auftreten](#über_die_kanten_des_scrollports_hinaus)
- [Bereiche können beschränkt sein](#auswirkungen_der_beschränkung), wenn das Subjekt größer als der Scrollport ist

#### Vom Startpunkt des Bereichs gemessen

Da die Offset-Position immer relativ zum Start des Animation Range-Namens ist, tritt der Beginn der Animation für alle drei Elemente auf, wenn die Stielkante der Elemente den Punkt schneidet, der `60px` vom Start des `entry`-Bereichs entfernt ist.

Der `animation-range-end` Wert definiert die Position, an der die Animation endet. Der Wert `exit 75px` bedeutet im Wesentlichen "wenn `75px` des Subjekts den Startpunkt des Scrollports verlassen haben." Dies variiert für jedes Subjekt. Für das `50px`-Subjekt tritt dies erst auf, nachdem es `25px` außerhalb des Scrollports ist; wenn das Element nicht sichtbar ist. Das Animationsbereichsende für sowohl das `250px`- als auch das `500px`-Subjekt tritt auf, wenn ihre untere Endkante die blaue Linie auf `75px` vom Ende des Scrollports schneidet. Warum sind ihre End-Offsets gleich? Wegen der [Beschränkung](#auswirkungen_der_beschränkung)! Die maximale Größe des benannten Animationsbereichs ist auf die Größe des Scrollports beschränkt. Der `exit` Bereich ist bei beiden Subjekten gleich, daher sind die Bereichsenden-Offsets gleich.

#### Über die Kanten des Scrollports hinaus

Für unser `50px` hohes Subjekt ist der `exit` Bereich `50px` hoch, der an die Startkante des Scrollports angrenzt. Das Setzen von `animation-range-end: exit 75px` für jedes Element, das kleiner als `75px` ist, bedeutet, dass das Ende des Bereichs außerhalb des Scrollports liegt, da der Punkt `75px` vom Start des `exit` Bereichs über die Startkante des Scrollports hinaus liegt. In unserem Beispiel endet der Animationsbereich des `50px` Subjekts, wenn die Startkante des Subjekts `75px` über die Startkante des Scrollports hinaus ist. Die Animation endet, indem sie den `to`-Keyframe und das [`animationend`](/de/docs/Web/API/Element/animationend_event)-Ereignis erreicht, nur wenn (und wenn) das Element `25px` aus dem Blickfeld gescrollt wird.

Die Animation endet auch dann, wenn das Ende des Animationsbereichs außerhalb des Scrollports liegt, solange Platz vorhanden ist, um zu diesem Punkt zu scrollen. Hätten wir `animation-range-end: exit 250px` festgelegt, hätte die Animation geendet, wenn die Endkante der mittleren und großen Subjekte den Scrollport an der Startkante des Containers verlassen hätte.

Mit dem Ende gesetzt auf `exit 250px`, könnte die Animation des kleinen Subjekts möglicherweise nicht enden, da möglicherweise nicht `450px` Inhalt nach dem Subjekt vorhanden sind, zu dem die Benutzer scrollen können, bevor der Endpunkt erreicht wird.

#### Auswirkungen der Beschränkung

Mit unserem `250px` hohen Container, wenn das Subjekt `250px` oder `500px` hoch ist, ist der `exit` Bereich die Größe des Containers, wobei der Start die Endkante des Scroll-Containers ist. Mit einem `75px` Offset tritt das Ende der Animation auf, wenn die Endkante des Subjekts `75px` von der Endkante des Scroll-Containers entfernt ist (gekennzeichnet durch die obere rote Linie).

Da die Offset-Position immer relativ zum Start des benannten oder Standard-Animationsbereichs ist, beeinflusst die Beschränkung in unserem Beispiel das große Subjekt `animation-range-end`. Wir setzen das Ende des Bereichs auf `exit 75px`, was `75px` vom Start des `exit` Bereichs ist. Wenn das Subjekt die gleiche Größe wie der Scrollport (unser `250px` Subjekt) oder größer (unser `500px` Subjekt) hat, ist das Animationsbereichsende `75px` vom Endrand des Scrollports entfernt, was `75px` vom Start des Scrollports beschränkten `exit` Bereichs ist.

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

Bis zu diesem Punkt waren alle Offsets größer als null. Es ist wichtig zu beachten, dass negative Längen gültig sind. Ein negativer Offset auf dem `animation-range-start` macht den Bereich länger, während ein negativer Offset auf dem `animation-range-end` den Bereich kürzer macht.

Vergleichen wir die negativen Insets mit den `0`-Werten:

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

Der erste Animationsbereich ist um `25px` in Richtung des Endrandes des Containers verschoben.

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

## Setzen von Inset-Werten mit Prozentsätzen

Wie Längenwerte definieren Prozentsätze Offsets vom _Start_ des Anheftungsbereichs der Animation. Die Prozent-Offsets beziehen sich auf die Dimension des Timeline-Bereichs, nicht auf den Scrollport. Aus diesem Grund sind Prozentsätze nicht so intuitiv wie Längenwerte für die meisten Menschen (obwohl Längenwerte nicht besonders intuitiv waren).

Hier verwenden wir `animation-range-start` und `animation-range-end`, um die Animations-Timeline zu verschieben. Während wir die gleichen Eigenschaften verwenden, setzen wir `<percentage>`-Werte anstelle von `<length>`-Werten:

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

Dies definiert das aktive Intervall, um `20%` in den Standard-Anheftungsbereich und `60%` durch denselben Bereich. Der Standard-`normal`-Animationsanheftungsbereich, der sich als [`cover`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#cover) verhält, ist die Höhe des Scroll-Containers plus die Höhe des betreffenden Elements, was bedeutet, dass der Bereich je nach ausgewähltem Optionsfeld unterschiedlich ist.

{{EmbedLiveSample("inset_percent", "100%", "400")}}

Zu Illustrationszwecken gibt es zwei dunkle Linien, die den Container an den `20%`- und `60%`-Punkten des vollen Animationsbereichs überqueren. Die Animation beginnt, wenn die Block-Startkante den `20%`-Punkt erreicht, das heißt die untere grüne Linie. Die Animation endet, wenn die Startblockkante `60%` des Weges durch den normalen Bereich ist, was die obere rote Linie ist.

Nur wenn das Element `50px` hoch ist, ist die Oberkante des Subjekts noch im Scrollport, wenn das Ende der Animation erreicht ist; es gibt keine oberen roten Linien, wenn `250px` oder `500px` ausgewählt sind, da das Ende des Animationsbereichs außerhalb des Scrollports liegt.

Basierend auf der Höhe unserer Subjekte ist die `20%`-Markierung entweder `60px`, `100px` oder `150px` vom Endrand des Scrollports entfernt (markiert durch die grüne Linie, die immer im Scrollport ist), und die `60%`-Markierung ist `180px`, `300px` oder `450px` von demselben Punkt entfernt (markiert mit einer roten Linie, aber nur für das `50px`-Subjekt sichtbar).

Zu Illustrationszwecken gibt es zwei hellgraue Linien, die den Container `20%` und `60%` des Weges durch den Scrollport überqueren, die `50px` und `150px` vom unteren Rand des Scrollports entfernt sind. Da sich die `animation-range-*`-Prozentsätze auf den Timeline-Bereich beziehen, nicht auf den Scrollport, zeigen diese Linien nur, wie die Prozentsätze **nicht** übereinstimmen. Wir haben auch zwei horizontale hellgraue Linien hinzugefügt, die bei ihren eigenen `20%` und `60%`-Punkten durch jedes Subjekt gehen. Diese Linien stimmen mit den hellgrauen Linien des Scrollports überein, wenn jede Subjekt-Animation beginnt und endet.

Das folgende Bild zeigt, wo sich die betreffenden Elemente befinden, wenn die Animation beginnt (der `0%`-Keyframe) und endet (der `100%`-Keyframe).
Dieses Bild enthält die Insets aus der Animations-Timeline im vorherigen Beispiel und die Timeline ohne Insets zum Vergleich.

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

Wie zuvor repräsentiert das Gelbe die Position des Elements, wenn die `from`-Keyframe angewendet wird, das Rote repräsentiert die Position, wenn die `to`-Keyframe angewendet wird, und das Grau repräsentiert den Scrollport. Die gestreiften Bereiche sind dort, wo sich die roten und gelben Elementdarstellungen überlappen. Zu Illustrationszwecken haben wir schwarze horizontale Linien mit gestrichelten Linien hinzugefügt, die `20%` und `60%` des Weges durch den Scrollport verlaufen, beginnend von unten.

Die Animation beginnt erst, wenn das Element die `20%`-Markierung entlang des Animationsanheftungsbereichs erreicht. Dieser Punkt ist `60px`, `100px` oder `150px` vom unteren Rand des Scrollports entfernt, abhängig von der Größe des Elements. Die Position des Subjektelements an diesem Punkt, die die Position des Elements darstellt, wenn die `from`- oder `0%`-Keyframe angewendet wird, wird in Gelb gezeigt.

Das Rote repräsentiert die Lage des animierten Elements im Verhältnis zum Scrollport, wenn die `to`- oder `100%`-Keyframe angewendet wird, was das Ende der Animation darstellt. Dieser Punkt ist entweder `180px`, `300px` oder `450px` vom unteren Rand des Scrollports entfernt, abhängig von der Größe des Subjekts. Die Animation erfolgt zwischen den `to`- und `from`-Positionen.

Vielleicht haben Sie etwas Interessantes an den gestrichelten horizontalen Linien bemerkt: Wenn die Animation beginnt, ist die Linie, die `20%` vom Endrand des Viewports entfernt ist, `20%` von der _Oberseite_ des betreffenden Elements entfernt, und die Linie, die `60%` vom Endrand des Viewports entfernt ist, ist `60%` von der _Oberseite_ des betreffenden Elements, wenn die Animation endet. Dies wurde durch die sehr hellgrauen Linien in der Live-Demo für dieses Beispiel illustriert.

### Die Größe des Subjekts ist von Bedeutung

Wie wir gesehen haben, als wir [Inset-Werte mit Längen](#setzen_von_inset-werten_mit_längen) gesetzt haben, kann die Größe des Subjekts einen Unterschied machen. Beim Festlegen von Animationsbereichen beziehen sich Prozentwerte auf die Größe des Animationsanheftungsbereichs, nicht auf den Scrollport. Für die meisten benannten Bereiche hängt die Größe des Anheftungsbereichs teilweise von der Größe des Subjekts ab. Da sich Prozentsätze auf die Größe des Bereichs beziehen, beeinflusst der benannte Bereich die aufgelöste Größe der Inset-Werte. Je nach Name kann sich auch die Startposition ändern, was den Ort des Bereichs und damit den Ort der Fortschrittspunkte beeinflusst.

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

Die Animation dauert `40%` des Animationsanheftungsbereichs. Wenn Sie scrollen, sehen Sie, dass je größer das Subjekt, desto länger der Bereich. Mit `exit-crossing` wird der Animationsbereich nicht abgeschnitten; er hat die Größe des Subjekts, selbst wenn das Subjekt größer als der Viewport ist, wobei der Bereich den Startpunkt des Scrollports angrenzt und am Ende des Rands, wenn das Subjekt größer als der Scrollport ist, übersteht.

Mit den `-20%` und `20%`-Inset-Werten wird die Animation des `50px`-Subjekts über `20px` animiert: Die Animation beginnt, wenn das untere Ende des Subjekts `-10px` vom Bereichsstart entfernt ist, oder `60px` davon entfernt ist, den Bildschirm zu verlassen, und endet, wenn das untere Ende des Subjekts `40px` davon entfernt ist, den Bildschirm zu verlassen. Das mittlere Subjekt wird über `100px` animiert: Die Animation beginnt, wenn das untere Ende des Subjekts `-50px` vom Bereichsstart entfernt ist, was `50px` vom Endrand des Scrollports entfernt ist, und endet, wenn das untere Ende des Subjekts `50px` im Scrollport ist. Das große Subjekt wird über `200px` animiert und beginnt, wenn das untere Ende `600px` vom Startpunkt des Containers entfernt ist, wobei nur `150px` sichtbar sind, und endet, wenn das untere Ende `400px` von diesem Startpunkt entfernt ist, wenn `100px` vom Startpunkt gescrollt wurden.

### Prozentsätze gleich dem Scrollport

Wenn es darum geht, mit Prozentsätzen zu versetzen, ist der am wenigsten komplizierte benannte Timeline-Bereich `contain`. Mit `contain` hat der Animationsbereich die Größe des Scrollports, was bedeutet, dass der Start und die Endprozentsätze sich auf den Scrollport beziehen. Aus diesem Grund ist es bei der Verwendung von Inset-Werten möglicherweise sinnvoll, `contain` zu verwenden, anstatt den Bereich standardmäßig zu lassen und zu `cover` zu resolven.

Der `contain` Bereich umfasst die Animation vollständig innerhalb des Scrollports. Er repräsentiert den Bereich, während dem das Hauptfeld entweder vollständig vom Sichtbarkeitsbereich des Scrollports umfasst wird oder vollständig diesen überdeckt. Mit `contain`, wenn das Subjekt die gleiche Größe oder kleiner als der Scrollport ist, kann es vollständig sichtbar sein. Ist das Element jedoch gleich groß wie der Scrollport, erfolgt die Animation über `0px`. Das bedeutet, dass sie abläuft, aber für den Benutzer nicht sichtbar ist.

Mit anderen Worten, ohne die Größe des Containers oder der Subjekte zu kennen, können wir unsere Animation auf die Mitte des Scrollports begrenzen, auch wenn die Animation über `0px` abläuft, wenn das Subjekt die gleiche Größe wie der Scrollport hat.

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
- [Scroll-gesteuerte Animations-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
