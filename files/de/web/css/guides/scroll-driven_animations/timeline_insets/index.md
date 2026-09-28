---
title: Insets in Animations-Timelines verstehen
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_insets
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

Standardmäßig verfolgen [View-Progress-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Elemente über den gesamten [Animationsbereich](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#the_animation_attachment_range) hinweg. Der Fortschrittspunkt `0%` liegt am Anfang des Bereichs, der Fortschrittspunkt `100%` an dessen Ende. Der Animationsbereich lässt sich durch Festlegen eines [Timeline-Bereichsnamens](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) ändern. Die Position der Fortschrittspunkte `0%` und `100%` innerhalb des Bereichs lässt sich mit längen- oder prozentbasierten Inset-Werten anpassen.

Dieser Leitfaden erklärt, wie Sie die Animations-Timeline mithilfe von Längen- oder Prozentwerten für Insets auf einen bestimmten Abschnitt des Animationsbereichs begrenzen.

## Animations-Timelines: eine Einführung

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) werden erstellt, indem benannte {{cssxref("@keyframes")}}-Animationen definiert werden, die das Verhalten einer Animation festlegen. Anschließend wird die Keyframe-Animation über ihren Namen einem Element zugewiesen.

Die durch die Eigenschaft {{cssxref("animation-timeline")}} definierte Animations-Timeline des Elements bestimmt, wie und wann das Element die Keyframes durchläuft. Standardmäßig ist die Timeline zeitbasiert und verwendet die standardmäßige zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments.

Das Modul für [scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Scroll-Progress- und View-Progress-Timelines. Mit ihnen lassen sich Eigenschaftswerte entlang einer scrollbasierten Timeline statt entlang der standardmäßigen zeitbasierten Dokument-Timeline animieren. In diesem Artikel geht es ausschließlich um View-Progress-Timelines, da [Scroll-Progress-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) für Timeline-Insets nicht relevant sind.

### View-Progress-Timelines

Bei [View-Progress-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) wird der Animationsfortschritt nicht durch den Zeitverlauf, sondern durch die Sichtbarkeit des Elements bestimmt. Das Durchlaufen der Keyframes hängt von der Position und Sichtbarkeit des animierten Elements innerhalb des Scroll-Containers ab. Die Animation läuft vorwärts oder rückwärts, je nachdem, in welche Richtung sich das Element durch den Scrollport bewegt. Sie läuft nur, wenn mindestens ein Teil des Elements im Scrollport sichtbar ist, und pausiert, wenn das Scrollen pausiert.

```css live-sample___svg_view
.animated_element {
  animation-name: nameOfAnimation;
  animation-timeline: view();
}
```

Durch Festlegen von {{cssxref("animation-name")}} wird die Animation auf das ausgewählte Element angewendet.

> [!NOTE]
> Die Eigenschaft `animation-timeline` sollte immer nach allen `animation`-Kurzschreibweisen stehen. Mit der Kurzschreibweise lässt sich `animation-timeline` zwar nicht festlegen, sie setzt die Timeline aber auf die standardmäßige zeitbasierte Dokument-Timeline zurück.

> [!NOTE]
> In allen Beispielen ist der {{Glossary("scroll_container", "Scroll-Container")}} `250px` hoch. Für {{cssxref("animation-iteration-count")}} (`1`), {{cssxref("animation-delay")}} (`0s`) und {{cssxref("animation-direction")}} (`normal`) verwenden wir die Standardwerte. Wir setzen {{cssxref("animation-timing-function")}} auf `step-end` und {{cssxref("animation-fill-mode")}} auf `forward`, damit deutlicher erkennbar ist, wann der Animationsdurchlauf noch nicht begonnen hat, aktiv ist oder abgeschlossen wurde. Weitere Informationen finden Sie im [Leitfaden zur Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using).

Wenn Sie nach oben scrollen, schreitet die Animation voran. Wenn Sie nach unten scrollen, läuft sie rückwärts.

{{EmbedLiveSample("initial", "100%", "400")}}

In diesem Beispiel läuft die Animation, sobald ein beliebiger Teil des animierten Elements im Scrollport sichtbar ist. Standardmäßig beginnt eine View-Progress-Animation, wenn die obere Kante des Elements mit der unteren Kante des Scroll-Containers zusammenfällt. Sie endet bei `100%` Fortschritt, wenn die Endkante des Elements die Anfangskante des Containers erreicht – unabhängig von der Größe des Elements. Standardmäßig wird die Animation also angewendet, solange irgendein Teil des Elements im Scrollport sichtbar ist.

### Animationsbereiche

Wenn für eine [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) keine Eigenschaften für den Animationsbereich definiert sind, hat `<timeline-range-name>` den Wert `normal`, der standardmäßig `cover` entspricht. Die Animation läuft, solange ein Teil des animierten Elements sichtbar ist. Der standardmäßige **Animationsbereich** ergibt sich somit aus der Höhe des Scroll-Containers plus der Höhe des animierten Elements; die zusätzliche Höhe liegt jenseits der Scroll-Endkante. In unserem Beispiel ist der Scroll-Container `250px` hoch und das animierte Element entweder `50px`, `250px` oder `500px`. Der vertikale Animationsbereich beträgt entsprechend `300px`, `500px` oder `750px`.

Der Fortschrittspunkt `0%` liegt dort, wo die Anfangskante des animierten Elements an der Endkante in den Scrollport eintritt. `100%` wird erreicht, wenn die Endkante des Elements den Scrollport an dessen Anfangskante verlässt. Beim vertikalen Scrollen sind dies die obere und untere Kante des Elements beziehungsweise des Scrollports. Beim horizontalen Scrollen sind es je nach Schreibrichtung die linke und rechte oder die rechte und linke Kante.

Die folgende Abbildung zeigt die Position des animierten Elements an den Fortschrittspunkten `0%` und `100%` für die drei Elementgrößen:

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

Die gelben Elemente zeigen die Position des Elements, wenn der Keyframe `from` angewendet wird – also beim Fortschrittspunkt `0%` des Animationsbereichs. Rot zeigt die Position des animierten Elements relativ zum Scrollport, wenn der Keyframe `to` angewendet wird. Dies entspricht dem Ende der Animation beziehungsweise dem Fortschrittspunkt `100%`. Grau stellt den Scrollport dar.

Standardmäßig wird das Element animiert, während es „im Sichtbereich“ ist. Diese Standarddefinition passt jedoch möglicherweise nicht zu Ihren Anforderungen. Sie können festlegen, welche Kanten den Animationsbereich begrenzen, und anschließend seinen Anfang und sein Ende mit den Eigenschaften für den Animationsbereich verschieben.

### Eigenschaften für den Animationsbereich

Mit den {{cssxref("animation-range")}}-Eigenschaften können Sie einen benannten Timeline-Bereich wie `contain` oder `exit-crossing` angeben. Dadurch wird statt des standardmäßigen `cover`-Bereichs ein anderer Bereich verwendet. Sie können außerdem einen {{cssxref("length-percentage")}}-Wert angeben, der den Animationsbereich von seinem Anfang aus einrückt. Prozentwerte beziehen sich auf den benannten oder standardmäßigen Timeline-Bereich.

Benannte Timeline-Bereiche legen fest, welche Abschnitte einer [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) den Bereich einer Animation bilden. Sie bestimmen damit Anfang und Ende des Animationsbereichs.

Die Eigenschaft `animation-range` ist eine Kurzschreibweise für {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}}. `animation-range-start` legt die Position des animierten Elements beim Beginn der Animation fest. `animation-range-end` legt seine Position beim Ende der Animation fest.

Weitere Informationen zu den verschiedenen benannten Timeline-Bereichen finden Sie im [Leitfaden zu Timeline-Bereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names). Dieser Leitfaden konzentriert sich darauf, wie Inset-Werte vom Typ {{cssxref("length-percentage")}} funktionieren.

## Insets mit Längen festlegen

Die Eigenschaften `animation-range-start` und `animation-range-end` akzeptieren jeweils einen benannten Animationsbereich, einen {{cssxref("length-percentage")}}-Offset oder beides. Längen- und Prozent-Offsets werden vom _Anfang_ des Animationsbereichs aus gemessen.

Bei einem {{cssxref("length")}}-Wert ist der Offset recht anschaulich. Hier verwenden wir `animation-range-start` und `animation-range-end`, um die Animations-Timeline einzurücken. Damit definieren wir einen Teil des vollständigen Animationsbereichs des Elements als aktives Intervall. Die `<length>`-Werte geben Abstände vom Anfang des standardmäßigen Animationsbereichs `normal` an.

```css live-sample___inset_length
.animated_element {
  animation-range-start: 1em;
  animation-range-end: 125px;
}
```

Anfang und Ende des Animationsbereichs liegen `1em` beziehungsweise `125px` vom Anfang des Animationsbereichs entfernt. Da der Timeline-Bereich standardmäßig `normal` ist und damit `cover` entspricht, liegt der Anfang des Animationsbereichs an der Block-Endkante des Containers.

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

Wir haben Linien im Abstand von `1em` und `125px` von der Block-Endkante des Scroll-Containers hinzugefügt. Die Animation beginnt, wenn die Block-Anfangskante des animierten Elements die `1em`-Linie erreicht, und endet, wenn sie die `125px`-Linie erreicht.

Da der Animationsbereich sowohl für den Start- als auch für den End-Inset `cover` entspricht, lässt sich die Position der Insets hier leicht nachvollziehen.

### Einfluss benannter Bereiche auf Längen-Offsets

Der Offset wird immer vom Anfang des zugehörigen Animationsbereichs aus gemessen. In diesem Beispiel liegt `animation-range-start` `50px` vom Anfang des standardmäßigen Bereichs `normal` entfernt. `animation-range-end` liegt `100px` vom Anfang des ausdrücklich festgelegten Bereichs `entry` entfernt:

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

Da sowohl `normal` als auch `entry` an der Endkante des Containers beginnen, startet die Animation, wenn die Anfangskante des animierten Elements `50px` vom unteren Rand des Scrollports entfernt ist. Sie endet bei `100%` Fortschritt, wenn diese Kante `100px` vom unteren Rand entfernt ist – unabhängig von der Größe des Elements. Obwohl der Bereich `entry` bei den drei Elementgrößen unterschiedlich groß ist, spielt seine Größe in diesem Fall keine Rolle.

### Längen-Offsets bei unterschiedlichen Bereichen

Die Größe des Bereichs ist wichtig, wenn der Bereich nicht an der Endkante des Elements beginnt – wie bei `exit` und `exit-crossing` – oder wenn der Offset als Prozentwert angegeben wird. Zusammen mit der Möglichkeit, verschiedene Animationsbereichsnamen zu kombinieren, macht dies Offsets bei View-Progress-Timelines etwas schwieriger verständlich als [Timeline-Bereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) ohne Offsets.

Wird beispielsweise `exit` als Timeline-Bereichsname festgelegt, ist die Größe des animierten Elements wichtig, weil sie die Position der Endkante des Bereichs bestimmt.

```css live-sample___exit_length
.animated_element {
  animation-range-start: entry 60px;
  animation-range-end: exit 75px;
}
```

Bei `entry` und `exit` entspricht der Bereich der Größe des animierten Elements, ist jedoch auf die Größe des Scrollports begrenzt. In den Beispielen mit `50px` und `250px` entspricht die Höhe der Bereiche `entry` und `exit` daher der Höhe des Elements. Im Beispiel mit `500px` wird der Bereich dagegen auf die Höhe des `250px` hohen Scrollports begrenzt.

{{EmbedLiveSample("exit_length", "100%", "310")}}

Zur Veranschaulichung haben wir einige Linien hinzugefügt: Die untere blaue Linie liegt `60px` von der Endkante des Scrollports entfernt, die obere rote Linie `75px` von derselben Kante. An diesen Positionen beginnen beziehungsweise enden die Animationsbereiche.

Dieses Beispiel verdeutlicht mehrere wichtige Eigenschaften, die wir im Folgenden genauer erläutern:

- Offsets werden [von ihren jeweiligen benannten Bereichen aus gemessen](#messung_ab_der_anfangskante_des_bereichs).
- Offsets können [jenseits der Kanten des Scrollports liegen](#jenseits_der_scrollport-kanten).
- [Bereiche können begrenzt werden](#auswirkungen_der_begrenzung), wenn das animierte Element größer als der Scrollport ist.

#### Messung ab der Anfangskante des Bereichs

Da sich ein Offset immer auf den Anfang des in der Deklaration angegebenen Animationsbereichs bezieht, beginnt die Animation bei allen drei Elementen, wenn ihre Anfangskante den Punkt kreuzt, der `60px` vom Anfang des Bereichs `entry` entfernt liegt.

Der Wert von `animation-range-end` legt die Position fest, an der die Animation endet. `exit 75px` bedeutet im Wesentlichen: „wenn `75px` des animierten Elements die Anfangskante des Scrollports passiert haben“. Diese Position ist für jedes Element anders. Beim `50px` hohen Element tritt dies erst `25px` nach dem Verlassen des Scrollports ein, wenn das Element nicht mehr sichtbar ist. Bei den `250px` und `500px` hohen Elementen endet die Animation, wenn ihre untere Endkante die obere blaue Linie schneidet – `75px` von der Endkante des Scrollports entfernt. Warum sind ihre End-Offsets gleich? Wegen der [Begrenzung](#auswirkungen_der_begrenzung)! Die maximale Größe des benannten Animationsbereichs ist auf die Größe des Scrollports begrenzt. Der Bereich `exit` ist für beide Elemente gleich, weshalb auch die End-Offsets gleich sind.

#### Jenseits der Scrollport-Kanten

Für unser `50px` hohes Element ist der Bereich `exit` ebenfalls `50px` hoch und schließt an die Anfangskante des Scrollports an. Wenn `animation-range-end: exit 75px` für ein Element festgelegt wird, das weniger als `75px` hoch ist, liegt das Ende des Bereichs außerhalb des Scrollports: Der Punkt `75px` vom Anfang des Bereichs `exit` entfernt liegt jenseits der Anfangskante des Scrollports. In unserem Beispiel wird das Ende des Animationsbereichs für das `50px` hohe Element erreicht, wenn seine Anfangskante `75px` über die Anfangskante des Scrollports hinausgewandert ist. Die Animation endet und erreicht den Keyframe `to` sowie das Ereignis [`animationend`](/de/docs/Web/API/Element/animationend_event) erst dann – sofern überhaupt –, wenn das Element `25px` aus dem Sichtbereich herausgescrollt wurde.

Die Animation endet auch dann, wenn das Ende ihres Bereichs außerhalb des Scrollports liegt, sofern genügend Platz vorhanden ist, um bis zu diesem Punkt zu scrollen. Hätten wir `animation-range-end: exit 250px` festgelegt, würde die Animation für die mittleren und hohen Elemente enden, sobald deren Endkante den Scrollport an der Anfangskante des Containers verlässt.

Bei `exit 250px` als Endwert könnte die Animation des kleinen Elements dagegen möglicherweise nicht enden: Nach dem Element sind unter Umständen keine `450px` Inhalt vorhanden, durch die bis zum Endpunkt gescrollt werden könnte.

#### Auswirkungen der Begrenzung

Bei unserem `250px` hohen Container entspricht der Bereich `exit` für `250px` oder `500px` hohe Elemente der Größe des Containers und beginnt an dessen Endkante. Bei einem Offset von `75px` endet die Animation, wenn die Endkante des animierten Elements `75px` von der Endkante des Scroll-Containers entfernt ist. Diese Position ist durch die obere rote Linie markiert.

Da sich der Offset immer auf den Anfang des benannten oder standardmäßigen Animationsbereichs bezieht, wirkt sich die Begrenzung in unserem Beispiel auf `animation-range-end` des großen Elements aus. Wir haben das Bereichsende auf `exit 75px` gesetzt, also `75px` vom Anfang des Bereichs `exit` entfernt. Ist das animierte Element genauso groß wie der Scrollport (unser `250px` hohes Element) oder größer (unser `500px` hohes Element), liegt das Ende des Animationsbereichs `75px` von der Endkante des Scrollports entfernt. Das entspricht `75px` vom Anfang des auf die Scrollport-Größe begrenzten Bereichs `exit`.

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

Bisher waren alle Offsets größer als null. Auch negative Längen sind zulässig. Ein negativer Offset für `animation-range-start` verlängert den Bereich, während ein negativer Offset für `animation-range-end` ihn verkürzt.

Vergleichen wir negative Insets mit den Werten `0`:

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

Der erste Animationsbereich ist um `25px` in Richtung der Endkante des Containers verschoben.

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

## Insets mit Prozentwerten festlegen

Wie Längenwerte definieren Prozentwerte Offsets vom _Anfang_ des Animationsbereichs aus. Prozent-Offsets beziehen sich auf die Ausdehnung des Timeline-Bereichs, nicht auf den Scrollport. Deshalb sind Prozentwerte für die meisten Menschen weniger anschaulich als Längenwerte – auch wenn Längenwerte nicht immer leicht nachzuvollziehen sind.

Hier verwenden wir `animation-range-start` und `animation-range-end`, um die Animations-Timeline einzurücken. Die Eigenschaften bleiben gleich, aber statt `<length>`-Werten legen wir `<percentage>`-Werte fest:

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
  background-attachment: local, local, fixed;
}
```

Dadurch beginnt das aktive Intervall bei `20%` des standardmäßigen Animationsbereichs und endet bei `60%` desselben Bereichs. Der standardmäßige Animationsbereich `normal`, der sich wie [`cover`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#cover) verhält, umfasst die Höhe des Scroll-Containers plus die Höhe des animierten Elements. Seine Größe hängt daher davon ab, welcher Radio-Button ausgewählt ist.

{{EmbedLiveSample("inset_percent", "100%", "400")}}

Zur Veranschaulichung verlaufen zwei dunkle Linien bei `20%` und `60%` des vollständigen Animationsbereichs durch den Container. Die Animation beginnt, wenn die Block-Anfangskante den `20%`-Punkt erreicht, der durch die untere grüne Linie markiert ist. Sie endet, wenn die Block-Anfangskante `60%` des Bereichs `normal` durchlaufen hat, bei der oberen roten Linie.

Nur bei einem `50px` hohen Element befindet sich dessen Oberkante beim Ende der Animation noch im Scrollport. Wenn `250px` oder `500px` ausgewählt sind, ist keine obere rote Linie zu sehen, weil das Ende des Animationsbereichs außerhalb des Scrollports liegt.

Je nach Höhe des animierten Elements liegt die `20%`-Marke `60px`, `100px` oder `150px` von der Endkante des Scrollports entfernt. Sie wird durch die grüne Linie markiert, die immer im Scrollport liegt. Die `60%`-Marke liegt `180px`, `300px` oder `450px` von derselben Kante entfernt. Die rote Markierung ist nur beim `50px` hohen Element sichtbar.

Zur Veranschaulichung verlaufen außerdem zwei hellgraue Linien bei `20%` und `60%` der Scrollport-Höhe durch den Container. Sie liegen `50px` beziehungsweise `150px` vom unteren Rand des Scrollports entfernt. Da sich die Prozentwerte von `animation-range-*` auf den Timeline-Bereich und nicht auf den Scrollport beziehen, zeigen diese Linien lediglich, dass die Prozentmarken **nicht** übereinstimmen. Zusätzlich verlaufen durch jedes animierte Element zwei horizontale hellgraue Linien an dessen eigenen `20%`- und `60%`-Marken. Diese Linien stimmen mit den hellgrauen Linien des Scrollports überein, wenn die Animation des jeweiligen Elements beginnt und endet.

Die folgende Abbildung zeigt, wo sich die animierten Elemente beim Beginn der Animation (Keyframe `0%`) und bei ihrem Ende (Keyframe `100%`) befinden. Zum Vergleich zeigt sie sowohl die Insets aus dem vorherigen Beispiel als auch die Timeline ohne Insets.

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

Wie zuvor zeigt Gelb die Position des Elements beim Keyframe `from`, Rot seine Position beim Keyframe `to` und Grau den Scrollport. In den schraffierten Bereichen überlappen die roten und gelben Darstellungen der Elemente. Zur Veranschaulichung haben wir gestrichelte schwarze horizontale Linien hinzugefügt, die vom unteren Rand aus bei `20%` und `60%` der Scrollport-Höhe liegen.

Die Animation beginnt erst, wenn das Element die `20%`-Marke innerhalb des Animationsbereichs erreicht. Abhängig von seiner Größe liegt dieser Punkt `60px`, `100px` oder `150px` vom unteren Rand des Scrollports entfernt. Die Position des Elements zu diesem Zeitpunkt – also bei Anwendung des Keyframes `from` beziehungsweise `0%` – ist gelb dargestellt.

Rot zeigt die Position des animierten Elements relativ zum Scrollport beim Keyframe `to` beziehungsweise `100%`, also am Ende der Animation. Je nach Elementgröße liegt dieser Punkt `180px`, `300px` oder `450px` vom unteren Rand des Scrollports entfernt. Die Animation läuft, während sich das Element zwischen den Positionen `from` und `to` befindet.

Vielleicht ist Ihnen an den gestrichelten horizontalen Linien etwas aufgefallen: Zu Beginn der Animation liegt die Linie, die `20%` von der Endkante des Scrollports entfernt ist, zugleich `20%` von der _Oberkante_ des animierten Elements entfernt. Am Ende der Animation liegt die Linie bei `60%` des Scrollports zugleich bei `60%` des animierten Elements, jeweils von oben gemessen. Die sehr hellgrauen Linien im interaktiven Beispiel veranschaulichen diesen Zusammenhang.

### Die Größe des animierten Elements ist wichtig

Wie bereits beim [Festlegen von Insets mit Längen](#insets_mit_längen_festlegen) gezeigt, kann die Größe des animierten Elements einen Unterschied machen. Prozentwerte für Animationsbereiche beziehen sich auf die Größe des Animationsbereichs, nicht auf den Scrollport. Bei den meisten benannten Bereichen hängt diese Größe teilweise von der Größe des animierten Elements ab. Da Prozentwerte anhand der Bereichsgröße berechnet werden, beeinflusst der benannte Bereich die tatsächliche Größe der Insets. Je nach Bereichsname kann sich auch die Anfangsposition ändern. Das beeinflusst die Lage des Bereichs und damit die Position seiner Fortschrittspunkte.

In diesem Beispiel definieren wir einen aktiven Bereich, der `40%` der Größe des animierten Elements entspricht:

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

Die Animation erstreckt sich über `40%` des Animationsbereichs. Achten Sie beim Scrollen darauf, dass der Bereich mit der Größe des animierten Elements wächst. Bei `exit-crossing` wird der Animationsbereich nicht beschnitten: Er entspricht der Größe des Elements, selbst wenn dieses größer als der Scrollport ist. Der Bereich schließt an die Anfangskante des Scrollports an und reicht bei größeren Elementen über dessen Endkante hinaus.

Bei den Insets `-20%` und `20%` wird das `50px` hohe Element über eine Strecke von `20px` animiert: Die Animation beginnt, wenn seine Endkante `-10px` vom Bereichsanfang entfernt ist beziehungsweise noch `60px` bis zum Verlassen des Bildschirms zurücklegen muss. Sie endet, wenn seine Endkante noch `40px` vom Verlassen des Bildschirms entfernt ist. Das mittlere Element wird über `100px` animiert: Die Animation beginnt, wenn seine Endkante `-50px` vom Bereichsanfang entfernt ist und damit `50px` jenseits der Endkante des Scrollports liegt. Sie endet, wenn seine Endkante `50px` innerhalb des Scrollports liegt. Das große Element wird über `200px` animiert. Die Animation beginnt, wenn seine Unterkante `600px` von der Anfangskante des Containers entfernt ist und nur `150px` sichtbar sind. Sie endet, wenn die Unterkante `400px` von dieser Kante entfernt ist und `100px` bereits über die Anfangskante hinausgescrollt wurden.

### Prozentwerte bezogen auf den Scrollport

Für prozentuale Offsets ist `contain` der am einfachsten nachzuvollziehende benannte Timeline-Bereich. Bei `contain` entspricht die Größe des Animationsbereichs der Größe des Scrollports. Anfangs- und End-Prozentwerte beziehen sich damit auf den Scrollport. Wenn Sie Offsets verwenden, kann es daher sinnvoll sein, `contain` festzulegen, statt den Bereich beim Standardwert zu belassen, der `cover` entspricht.

Der Bereich `contain` umfasst die Animation vollständig innerhalb des Scrollports. Er bezeichnet den Abschnitt, in dem die Hauptbox entweder vollständig innerhalb ihres sichtbaren View-Progress-Bereichs im Scrollport liegt oder diesen vollständig bedeckt. Bei `contain` kann ein animiertes Element vollständig sichtbar sein, wenn es höchstens so groß wie der Scrollport ist. Ist das Element allerdings genauso groß wie der Container, erstreckt sich die Animation über `0px`. Sie läuft zwar ab, ist für Benutzer jedoch nicht sichtbar.

Anders gesagt: Ohne die Größe des Containers oder der animierten Elemente kennen zu müssen, können wir die Animation auf die Mitte des Scrollports begrenzen. Ist das Element genauso groß wie der Scrollport, erstreckt sich die Animation allerdings über `0px`.

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

Die horizontalen Linien markieren die mittlere Hälfte des Scrollports und die mittlere Hälfte jedes animierten Elements.

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

- Datentyp {{cssxref("timeline-range-name")}}
- [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Timelines für scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- Modul für [scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- Modul für [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
