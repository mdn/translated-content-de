---
title: view()
slug: Web/CSS/Reference/Properties/animation-timeline/view
l10n:
  sourceCommit: b7534af9f369a80fe12556cba781890e87a171d9
---

Die **`view()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird mit der {{cssxref("animation-timeline")}}-Eigenschaft verwendet, um eine [anonyme View-Progress-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timelines_the_view_function) zu erstellen, basierend darauf, wann ein Element in seinem nächsten {{Glossary("scroll_container", "Scroll-Container")}} in den Blick kommt. Sie können die Verfolgungsachse und die optionalen Einzüge anpassen, um zu steuern, wann das Element als „in Sicht“ angesehen wird.

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
  - : Gibt die Scroll-Richtung an, die von der View-Progress-Zeitachse verwendet wird. Der Wert kann eines der {{cssxref("axis")}} Schlüsselwörter sein: `block`, `inline`, `x` oder `y`. Der Standardwert ist `block`.
- `<view-timeline-inset>`
  - : Gibt den Einzugsbereich an, der definiert, wann ein Element als „in Sicht“ angesehen wird. Der Wert kann das Schlüsselwort `auto` oder bis zu zwei {{cssxref("length-percentage")}} Werte sein.

## Beschreibung

Eine View-Progress-Zeitachse schreitet voran basierend auf Änderungen in der Sichtbarkeit eines Subjektelems in seinem nächsten Scroll-Container. Die `view()`-Funktion wird mit der {{cssxref("animation-timeline")}}-Eigenschaft verwendet, um eine solche View-Progress-Zeitachse zu erstellen.

Die Parameter der Funktion können die Scrollbalkenachse spezifizieren, entlang derer der Fortschritt der Zeitachse verfolgt wird, sowie Einzüge, die die Position des Rahmens anpassen, in dem das Subjekt als sichtbar betrachtet wird.

- **Achse**: Standardmäßig verwendet `view()` die Block-Achse. Sie können dies ändern, indem Sie einen expliziten `<axis>`-Wert angeben. Wenn die gewählte Achse keinen Scrollbalken enthält, ist die Animationszeitachse inaktiv (null Fortschritt).
- **Einzug**: Standardmäßig befindet sich die Zeitachse bei `0%` (dem `from`-Keyframe in der {{cssxref("@keyframes")}}-Animation), wenn das Subjektelemen zuerst am einen Rand des Scrollers sichtbar ist, und bei `100%` (dem `to`-Keyframe), wenn der äußere Rand des Subjekt-Border den gegenüberliegenden Rand des Scrollers erreicht. Sie können diese Punkte mit den `<view-timeline-inset>`-Parametern steuern.
  Die Animation dauert so lange, wie das Element in der einzugangepassten Sicht ist. Der Einzug wird verwendet, um zu bestimmen, ob das Element in Sicht ist, was wiederum die Länge der Animationszeitachse bestimmt. Der Einzug besteht aus bis zu zwei Werten, von denen jeder entweder `auto` oder ein {{cssxref("length-percentage")}} sein kann.
  - Der erste Wert definiert den Beginn, einen inneren Versatz vom Anfang des Scrollports.
  - Der zweite Wert, falls vorhanden, gibt das Ende an, einen inneren Versatz vom Ende des Scrollports. Wenn der Wert größer als `0` ist, gibt er einen Einzug (positiv) an. Ein negativer Wert definiert eine Korrektur nach außen zum {{Glossary("Scroll_container#scrollport", "Scrollport")}}.

Die Achsen- und Einzugskomponenten können in beliebiger Reihenfolge angegeben werden. Innerhalb der Einzugskomponente definiert der erste Wert den Start-Einzug und der zweite Wert den End-Einzug.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen einer anonymen View-Progress-Zeitachse mit `view()`

In diesem Beispiel erstellen wir eine anonyme View-Progress-Zeitachse für das Element mit den Klassen `subject` und `animation` unter Verwendung von `animation-timeline: view()`. Das Ergebnis ist, dass während Sie das Dokument scrollen, dieses Element animiert wird, während es sich nach oben durch das Dokument bewegt.

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

Die Klassen `subject` und `content` sind minimal gestylt und der Textinhalt hat einige grundlegende Schriftart-Einstellungen:

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

Um das Ergebnis zu verdeutlichen, haben wir ein paar zusätzliche Klassen definiert. Die Klasse `subject-container` zeigt die Grenzen der Animation. Und die halbtransparenten `top` und `bottom` Überlagerungen markieren den einzugangepassten Scrollport.

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

Dem `<div>`-Element mit der Klasse `subject` wird ebenfalls eine Klasse `animation` gegeben. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Die Regel `animation-timeline: view(block 55% 10%)` setzt das Element so, dass es animiert wird, während es durch die View-Progress-Zeitachse fortschreitet, die von seinem nächsten Scroll-Container erstellt wird (in diesem Fall das Wurzelelement des Dokuments).

Beim Herunterscrollen beachten Sie, wie die Einzugswerte `50% 10%` bewirken, dass die Animation startet, wenn das Element 10% vom unteren Ende des Scrollports entfernt ist und endet, wenn es 50% vom oberen Ende entfernt ist. Während die Animation entlang der Zeitachse fortschreitet, wächst das `subject`. Umgekehrt, wenn Sie hochscrollen, läuft die Animation rückwärts ab, beginnend bei 50% vom oberen Ende, bewegt sich rückwärts durch die Keyframes und endet bei 10% vom unteren Ende. Während die Animation rückwärts läuft, schrumpft das `subject`.

Ein wichtiger Punkt zu beachten ist, dass die Animation nur so lange dauert, wie das `subject`-Element in Sicht ist, was hier durch die Einzugswerte `50% 10%` definiert wird.

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

Scrollen Sie, um das Element mit der Klasse `subject` zu sehen, wie es animiert wird, wenn es in die angepasste Einzugsansicht ein- und austritt.

{{EmbedLiveSample("Examples", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- [Scroll-getriebene Animationszeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- Modul [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
