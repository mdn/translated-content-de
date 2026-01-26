---
title: view()
slug: Web/CSS/Reference/Properties/animation-timeline/view
l10n:
  sourceCommit: 8f7fa9e7aef0399c7a7f8e5a20476a0c2f287640
---

Die **`view()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird mit der {{cssxref("animation-timeline")}} Eigenschaft verwendet, um eine [anonyme View-Progress-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) zu erstellen, basierend darauf, wann ein Element in seinen nächstgelegenen {{Glossary("scroll_container", "Scroll-Container")}} ins Blickfeld kommt. Sie können die Beobachtungsachse und die optionalen Einfassungen anpassen, um zu steuern, wann das Element als "im Blickfeld" betrachtet wird.

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
  - : Gibt die Scrollrichtung an, die von der View-Progress-Zeitleiste verwendet wird. Der Wert kann eines der {{cssxref("axis")}} Schlüsselwörter sein: `block`, `inline`, `x` oder `y`. Der Standardwert ist `block`.
- `<view-timeline-inset>`
  - : Gibt den Einfasungsbereich an, der definiert, wann ein Element als "im Blickfeld" betrachtet wird. Der Wert kann das Schlüsselwort `auto` oder bis zu zwei {{cssxref("length-percentage")}} Werte sein.

## Beschreibung

Eine View-Progress-Zeitleiste schreitet basierend auf den Änderungen der Sichtbarkeit eines Zielelements innerhalb seines nächstgelegenen Scroll-Containers voran. Die `view()` Funktion wird zusammen mit der {{cssxref("animation-timeline")}} Eigenschaft verwendet, um eine solche View-Progress-Zeitleiste zu erzeugen.

Die Parameter der Funktion können die Scrollbalkenachse angeben, entlang derer der Fortschritt der Zeitleiste verfolgt wird, und Einfassungen, die die Position der Box anpassen, in der das Ziel als sichtbar betrachtet wird.

- **Achse**: Standardmäßig verwendet `view()` die Blockachse. Sie können dies ändern, indem Sie einen expliziten `<axis>` Wert angeben. Wenn die gewählte Achse keinen Scrollbalken enthält, wird die Animationszeitleiste inaktiv sein (null Fortschritt).
- **Einfassung**: Standardmäßig befindet sich die Zeitleiste bei `0%` (dem `from` Keyframe in der {{cssxref("@keyframes")}} Animation), wenn das Ziel das erste Mal an einer Kante des Scrollers sichtbar ist, und bei `100%` (dem `to` Keyframe), wenn der äußere Rand des Ziels die gegenüberliegende Kante des Scrollers erreicht. Diese Punkte können Sie mit den `<view-timeline-inset>` Parametern steuern.
  Die Animation dauert, solange das Element im einstellbaren Blickfeld ist. Die Einfassung wird verwendet, um zu bestimmen, ob das Element im Blickfeld ist, was wiederum die Länge der Animationszeitleiste bestimmt. Die Einfassung besteht aus bis zu zwei Werten, die entweder `auto` oder ein {{cssxref("length-percentage")}} sein können.
  - Der erste Wert definiert den Start, einen inneren Versatz vom Anfang des Scrollports.
  - Der zweite Wert, falls vorhanden, gibt das Ende an, einen inneren Versatz vom Ende des Scrollports. Wenn der Wert größer als `0` ist, wird eine Einfassung (positiv) angegeben. Ein negativer Wert definiert eine Ausweitung zum {{Glossary("Scroll_container#scrollport", "Scrollport")}}.

Die Achsen- und Einfassungskomponenten können in beliebiger Reihenfolge angegeben werden. Innerhalb der Einfassungskomponente definiert der erste Wert die Startereinfassung und der zweite Wert die Endeinfassung.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen einer anonymen View-Progress-Zeitleiste mit `view()`

In diesem Beispiel erstellen wir eine anonyme View-Progress-Zeitleiste für das Element mit den Klassen `subject` und `animation` mithilfe von `animation-timeline: view()`. Das Ergebnis ist, dass, während Sie durch das Dokument scrollen, dieses Element animiert wird, wenn es sich durch das Dokument nach oben bewegt.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

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

Um das Ergebnis besser zu zeigen, haben wir ein paar zusätzliche Klassen definiert. Die Klasse `subject-container` zeigt die Grenzen der Animation. Und die halbtransparenten Overlays `top` und `bottom` markieren den einfassungsangepassten Scrollport.

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

Das `<div>` Element mit der Klasse `subject` erhält zusätzlich eine Klasse `animation`. Die `grow` Animation bewirkt, dass das `subject` Element wächst oder schrumpft. Die Regel `animation-timeline: view(block 55% 10%)` legt fest, dass das Element animiert wird, während es die von seinem nächstgelegenen Scroll-Container (in diesem Fall das Wurzelelement des Dokuments) erstellte View-Progress-Zeitleiste durchläuft.

Beim Herunterscrollen beachten Sie, wie die Werte `50% 10%` bewirken, dass die Animation startet, wenn das Element 10% vom unteren Rand des Scrollports entfernt ist, und endet, wenn es 50% vom oberen Rand entfernt ist. Während die Animation entlang der Zeitleiste fortschreitet, wächst das `subject`. Umgekehrt verläuft die Animation beim Hochscrollen in umgekehrter Reihenfolge, startend bei 50% von oben, rückwärts durch die Keyframes gehend, und endend bei 10% vom unteren Rand. Während die Animation rückwärts läuft, schrumpft das `subject`.

Ein wichtiger Punkt ist, dass die Animation nur so lange dauert, wie das `subject` Element im Blickfeld ist, das hier durch `50% 10%` Einfassungswerte definiert wird.

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
    body::before {
      content: "Your browser doesn't support the CSS `view()` function.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Ergebnis

Scrollen Sie, um zu sehen, wie das Element mit der Klasse `subject` animiert wird, wenn es den angepassten Einfassungsblickfeld betritt und verlässt.

{{EmbedLiveSample("Examples", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- [Scroll-getriebene Animationszeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
