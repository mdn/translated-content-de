---
title: "`view()` CSS-Funktion"
short-title: view()
slug: Web/CSS/Reference/Properties/animation-timeline/view
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

Die **`view()`**-[CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird mit der {{cssxref("animation-timeline")}}-Eigenschaft verwendet, um eine [anonyme View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) zu erstellen, die darauf basiert, wann ein Element innerhalb seines nächstgelegenen {{Glossary("scroll_container", "Scroll-Containers")}} in den Blick kommt. Sie können die Verfolgungsachse und die optionalen Einrückungen anpassen, um zu steuern, wann das Element als "im Blick" betrachtet wird.

## Syntax

```css
/* No parameters */
animation-timeline: view();

/* Axis parameter */
animation-timeline: view(block);
animation-timeline: view(x);

/* Inset parameter */
animation-timeline: view(auto);
animation-timeline: view(20%);
animation-timeline: view(200px);
animation-timeline: view(20% 40%);
animation-timeline: view(20% 200px);
animation-timeline: view(100px 200px);
animation-timeline: view(auto 200px);

/* Axis and inset parameters */
animation-timeline: view(block auto);
animation-timeline: view(inline 20%);
animation-timeline: view(x 200px auto);
```

### Parameter

- `<axis>`
  - : Gibt die Scrollrichtung an, die von der View-Progress-Timeline verwendet wird. Der Wert kann eines der {{cssxref("axis")}}-Schlüsselwörter sein: `block`, `inline`, `x` oder `y`. Der Standardwert ist `block`.
- `<view-timeline-inset>`
  - : Gibt den Einrückbereich an, der definiert, wann ein Element als "im Blick" betrachtet wird. Der Wert kann das Schlüsselwort `auto` oder bis zu zwei {{cssxref("length-percentage")}}-Werte sein.

## Beschreibung

Eine View-Progress-Timeline schreitet voran basierend auf Änderungen der Sichtbarkeit eines Subjektelements innerhalb seines nächstgelegenen Scroll-Containers. Die `view()`-Funktion wird mit der {{cssxref("animation-timeline")}}-Eigenschaft verwendet, um eine solche View-Progress-Timeline zu erstellen.

Die Parameter der Funktion können die Scrollleistenachse angeben, entlang derer der Fortschritt der Timeline verfolgt wird, sowie Einrückungen, die die Position des Rahmens anpassen, in dem das Subjekt als sichtbar betrachtet wird.

- **Achse**: Standardmäßig verwendet `view()` die Blockachse. Sie können dies ändern, indem Sie einen expliziten `<axis>`-Wert angeben. Wenn die gewählte Achse keine Scrollleiste enthält, wird die Animationstimeline inaktiv sein (kein Fortschritt).
- **Einrückung**: Standardmäßig befindet sich die Timeline bei `0%` (dem `from`-Keyframe in der {{cssxref("@keyframes")}} Animation), wenn das Subjekt erstmals am einen Rand des Scrollers sichtbar ist, und bei `100%` (dem `to`-Keyframe), wenn der äußere Rand des Subjekts den gegenüberliegenden Rand des Scrollers erreicht. Sie können diese Punkte mit den `<view-timeline-inset>`-Parametern steuern.
  Die Animation dauert an, solange das Element im einrückungseingestellten Blick ist. Die Einrückung wird verwendet, um zu bestimmen, ob das Element im Blick ist, was wiederum die Länge der Animationstimeline bestimmt. Die Einrückung besteht aus bis zu zwei Werten, von denen jeder entweder `auto` oder ein {{cssxref("length-percentage")}} sein kann.
  - Der erste Wert definiert den Start, eine innere Verschiebung vom Beginn des Scrollports.
  - Der zweite Wert, falls vorhanden, gibt das Ende an, eine innere Verschiebung vom Ende des Scrollports. Wenn der Wert größer als `0` ist, gibt er eine Einrückung (positiv) an. Ein negativer Wert definiert eine Verstärkungsanpassung des {{Glossary("Scroll_container#scrollport", "Scrollports")}}.

Die Achsen- und Einrückungskomponenten können in beliebiger Reihenfolge angegeben werden. Innerhalb der Einrückungskomponente definiert der erste Wert die Starteinrückung, und der zweite Wert definiert die Endeinrückung.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen einer anonymen View-Progress-Timeline mit `view()`

In diesem Beispiel erstellen wir eine anonyme View-Progress-Timeline für das Element mit den Klassen `subject` und `animation` mithilfe von `animation-timeline: view()`. Das Ergebnis ist, dass dieses Element animiert wird, wenn Sie durch das Dokument scrollen und es sich nach oben bewegt.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div class="content">
  <h1>Content</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject-container">
    <div class="subject animation"></div>
  </div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
    vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
    quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
    imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
    scelerisque. Netus et malesuada fames ac.
  </p>
</div>
<div class="overlay top">inset start 50%</div>
<div class="overlay bottom">inset end 10%</div>
```

#### CSS

Die Klassen `subject` und `content` sind minimal gestylt, und der Textinhalt hat einige grundlegende Schriftarteinstellungen:

```css
.subject {
  width: 300px;
  height: 200px;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p {
  font-size: 1.5rem;
  line-height: 1.8;
}
```

Um das Ergebnis zu verdeutlichen, haben wir ein paar zusätzliche Klassen definiert. Die Klasse `subject-container` zeigt die Grenzen der Animation. Und die halbtransparenten Overlays `top` und `bottom` markieren den einrückungseingestellten Scrollport.

```css
.subject-container {
  border: 2px dashed black;
  width: 300px;
  margin: 0 auto;
}

.overlay {
  position: fixed;
  width: 100%;
  background-color: #f5deb3aa;
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  justify-content: flex-end;
}

.top {
  top: 0;
  height: 50%;
  align-items: end;
}

.bottom {
  bottom: 0;
  height: 10%;
}
```

Das `<div>`-Element mit der Klasse `subject` erhält auch die Klasse `animation`. Die `grow`-Animation bewirkt, dass sich das `subject`-Element vergrößert oder verkleinert. Die Regel `animation-timeline: view(block 55% 10%)` legt fest, dass das Element animiert wird, während es durch die von seinem nächstgelegenen Scroll-Container (in diesem Fall das Dokumentwurzelelement) erstellte View-Progress-Timeline fortschreitet.

Beim Herunterscrollen beachten Sie, wie die Einrückungswerte `50% 10%` dazu führen, dass die Animation startet, wenn das Element 10% vom unteren Ende des Scrollports entfernt ist, und endet, wenn es 50% vom oberen Ende entfernt ist. Während die Animation entlang der Timeline voranschreitet, wächst das `subject`. Umgekehrt, wenn man nach oben scrollt, läuft die Animation rückwärts ab, beginnt bei 50% vom oberen Ende, bewegt sich rückwärts durch die Keyframes und endet bei 10% vom unteren Ende. Somit schrumpft das `subject`, während die Animation rückwärts läuft.

Ein wichtiger Punkt, den man beachten sollte, ist, dass die Animation nur so lange dauert, wie das `subject`-Element im Blick ist, was hier durch die Einrückungswerte `50% 10%` definiert ist.

```css
.animation {
  animation-timeline: view(block 50% 10%);
  animation-name: grow;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-timing-function: linear;
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
```

```css hidden
@layer no-support {
  @supports not (animation-timeline: view()) {
    body::after {
      content: "Your browser doesn't support the CSS `view()` function.";
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

#### Ergebnis

Scrollen Sie, um zu sehen, wie das Element mit der Klasse `subject` animiert wird, wenn es die angepasste Einrückungsansicht betritt und verlässt.

{{EmbedLiveSample("Examples", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- [Scrollgesteuerte Animationstimelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
