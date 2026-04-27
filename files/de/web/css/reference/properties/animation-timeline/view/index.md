---
title: "`view()` CSS-Funktion"
short-title: view()
slug: Web/CSS/Reference/Properties/animation-timeline/view
l10n:
  sourceCommit: bf3142e11b227fb3e7c6de298ea9049aa1999d6f
---

Die **`view()`**-[CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird mit der {{cssxref("animation-timeline")}}-Eigenschaft verwendet, um eine [anonyme View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) basierend darauf zu erstellen, wann ein Element innerhalb seines nächstgelegenen {{Glossary("scroll_container", "Scroll-Containers")}} ins Blickfeld kommt. Sie können die zu verfolgende Achse und die optionalen Einrückungen anpassen, um zu steuern, wann das Element als "im Blickfeld" betrachtet wird.

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
  - : Bestimmt die Scrollrichtung, die von der View-Progress-Timeline verwendet wird. Der Wert kann einer der {{cssxref("axis")}}-Schlüsselwörter sein: `block`, `inline`, `x` oder `y`. Der Standardwert ist `block`.
- `<view-timeline-inset>`
  - : Bestimmt den Einrückungsbereich, der definiert, wann ein Element als "im Blickfeld" betrachtet wird. Der Wert kann das Schlüsselwort `auto` oder bis zu zwei {{cssxref("length-percentage")}}-Werte sein.

## Beschreibung

Eine View-Progress-Timeline schreitet basierend auf Änderungen der Sichtbarkeit eines Zielelements innerhalb seines nächstgelegenen Scroll-Containers fort. Die `view()`-Funktion wird mit der {{cssxref("animation-timeline")}}-Eigenschaft verwendet, um eine solche View-Progress-Timeline zu erstellen.

Die Parameter der Funktion können die Scroll-Leiste Achse spezifizieren, entlang derer der Fortschritt der Timeline verfolgt wird, und Einrückungen, die die Position der Box anpassen, in der das Subjekt als sichtbar betrachtet wird.

- **Achse**: Standardmäßig verwendet `view()` die Blockachse. Sie können dies ändern, indem Sie einen expliziten `<axis>`-Wert angeben. Wenn die gewählte Achse keine Scroll-Leiste enthält, ist die Animation-Timeline inaktiv (kein Fortschritt).
- **Einrückung**: Standardmäßig befindet sich die Timeline bei `0%` (dem `from`-Keyframe in der {{cssxref("@keyframes")}}-Animation), wenn das Subjekt am einen Rand des Scrollers das erste Mal sichtbar ist, und bei `100%` (dem `to`-Keyframe), wenn die äußere Begrenzungskante des Subjekts den gegenüberliegenden Rand des Scrollers erreicht. Sie können diese Punkte mit den `<view-timeline-inset>`-Parametern steuern.
  Die Animation dauert so lange, wie das Element im durch Einrückung angepassten Blickfeld ist. Die Einrückung wird verwendet, um zu bestimmen, ob das Element im Blickfeld ist, was wiederum die Länge der Animation-Timeline bestimmt. Die Einrückung besteht aus bis zu zwei Werten, von denen jeder entweder `auto` oder ein {{cssxref("length-percentage")}} sein kann.
  - Der erste Wert definiert den Start, eine Einwärtsverschiebung vom Beginn der Scrollport.
  - Der zweite Wert, falls vorhanden, spezifiziert das Ende, eine Einwärtsverschiebung vom Ende der Scrollport. Wenn der Wert größer als `0` ist, spezifiziert er eine Einrückung (positiv). Ein negativer Wert definiert eine Auswärtsanpassung an die {{Glossary("Scroll_container#scrollport", "Scrollport")}}.

Die Achsen- und Einrückungskomponenten können in beliebiger Reihenfolge angegeben werden. Innerhalb der Einrückungskomponente definiert der erste Wert die Starteinrückung, der zweite Wert die Endeinrückung.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine anonyme View-Progress-Timeline mit `view()` erstellen

In diesem Beispiel erstellen wir eine anonyme View-Progress-Timeline für das Element mit den Klassen `subject` und `animation` unter Verwendung von `animation-timeline: view()`. Das Ergebnis ist, dass dieses Element beim Scrollen durch das Dokument animiert wird, während es sich nach oben durch das Dokument bewegt.

#### HTML

In der Mitte des Textes fügen wir Folgendes ein (beachten Sie, dass das HTML eine Menge an Inhalten enthält, die wir zur Kürze ausgeblendet haben):

```html live-sample__not_included_in_result
<div class="subject-container">
  <div class="subject animation"></div>
</div>
```

```html hidden
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
```

Wir fügen auch zwei Überlagerungen hinzu, um den Animationsbereich zu visualisieren:

```html
<div class="overlay top">inset start 50%</div>
<div class="overlay bottom">inset end 10%</div>
```

#### CSS

Die Styles für `subject` und `subject-container` umfassen:

```css
.subject {
  width: 300px;
  height: 200px;
  background-color: deeppink;
}
.subject-container {
  border: 2px dashed black;
  width: 300px;
  margin: 0 auto;
}
```

Die Klasse `subject-container` zeigt die Grenzen der Animation. Wir definieren `top`- und `bottom`-Überlagerungen, um die einrückungsangeglichene Scrollport zu markieren.

```css
.overlay {
  position: fixed;
}

.top {
  top: 0;
  height: 50%;
}

.bottom {
  bottom: 0;
  height: 10%;
}
```

Dem `<div>`-Element mit der Klasse `subject` wird auch eine Klasse `animation` zugewiesen. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Die Regel `animation-timeline: view(block 50% 10%)` legt fest, dass das Element animiert wird, während es durch die von seinem nächstgelegenen Scroll-Container (in diesem Fall das Root-Element des Dokuments) erstellte View-Progress-Timeline schreitet.

Während des Scrollens nach unten beachten Sie, wie die Einrückungswerte `50% 10%` verursachen, dass die Animation beginnt, wenn das Element 10% vom unteren Ende der Scrollport entfernt ist, und endet, wenn es 50% vom oberen Ende entfernt ist. Während die Animation entlang der Timeline fortschreitet, wächst das `subject`. Beim Scrollen nach oben verläuft die Animation in umgekehrter Richtung, beginnend bei 50% von oben, rückwärts durch die Keyframes und endet 10% vom Ende entfernt. Sobald die Animation rückwärts läuft, schrumpft das `subject`.

Ein wichtiger Punkt zu beachten ist, dass die Animation nur so lange dauert, wie das `subject`-Element im Blickfeld ist, das hier durch die `50% 10%`-Einrückungswerte definiert ist.

```css
.animation {
  animation-timeline: view(block 50% 10%);
  animation-name: grow;
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
.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p {
  font-size: 1.5rem;
  line-height: 1.8;
}

.overlay {
  width: 100%;
  background-color: #f5deb3aa;
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  justify-content: flex-end;
}
.top {
  align-items: end;
}

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

Der Rest des CSS ist aus Kürzegründen ausgeblendet.

#### Ergebnis

{{EmbedLiveSample("Examples", "100%", "480px")}}

Scrollen Sie, um zu sehen, wie das Element mit der Klasse `subject` animiert wird, wenn es in die angepasste Einrückungsansicht eintritt und sie verlässt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- [Scroll-getriebene Animation-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
