---
title: scroll-timeline
slug: Web/CSS/Reference/Properties/scroll-timeline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um eine _benannte Scroll-Fortschritts-Timeline_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf dem Scroller gesetzt, der die Timeline bereitstellen soll. Die Anfangs-Scroll-Position repräsentiert 0% Fortschritt und die End-Scroll-Position repräsentiert 100% Fortschritt. Falls die 0%-Position und die 100%-Position zusammenfallen (d.h. der Scroll-Container hat keinen Überlauf zum Scrollen), ist die Timeline inaktiv.

`scroll-timeline` kann zwei konstituierende Werte enthalten — einen Namen für die benannte Scroll-Fortschritts-Timeline und einen optionalen Scroll-Achsenwert.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline) Deklaration referenziert, um das Containerelement anzugeben, das durch die Scrollaktion den Fortschritt der Animation steuert.

> [!NOTE]
> Wenn der Scroller in der Achsenausrichtung nicht über seinen Container hinausragt oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Timeline erstellt.

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis)

## Syntax

```css
/* two values: one each for scroll-timeline-name and scroll-timeline-axis */
scroll-timeline: --custom_name_for_timeline block;
scroll-timeline: --custom_name_for_timeline inline;
scroll-timeline: --custom_name_for_timeline y;
scroll-timeline: --custom_name_for_timeline x;
scroll-timeline: none block;
scroll-timeline: none inline;
scroll-timeline: none y;
scroll-timeline: none x;

/* one value: scroll-timeline-name */
scroll-timeline: none;
scroll-timeline: --custom_name_for_timeline;
```

Die `scroll-timeline`-Kurzschreibweise kann auf ein Containerelement als Kombination von `<scroll-timeline-name>` und `<scroll-timeline-axis>` Werten angewendet werden. Mindestens einer der Werte muss angegeben werden. Wenn beide Werte spezifiziert sind, muss die Reihenfolge dem `<scroll-timeline-name>` Wert gefolgt von dem `<scroll-timeline-axis>` Wert entsprechen.

> [!NOTE]
> `<scroll-timeline-name>`s müssen [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte sein, das bedeutet, sie müssen mit `--` beginnen. Dies hilft, Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

### Werte

- `<scroll-timeline-name>`
  - : Siehe [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name).

- `<scroll-timeline-axis>`
  - : Siehe [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis). Der Standardwert ist `block`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritt-Timeline-Animation

In diesem Beispiel wird eine Scroll-Timeline namens `--square-timeline` mit der Eigenschaft `scroll-timeline-name` auf dem Element mit der ID `container` definiert. Diese wird dann auf die Animation des `#square` Elements mit `animation-timeline: --square-timeline` angewendet.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt fest, dass es als Quelle einer Scroll-Timeline namens `--square-timeline` mithilfe der Eigenschaft `scroll-timeline` dient. Der Scrollbalken, der für die Timeline verwendet werden soll, wird ebenfalls als vertikaler Scrollbalken festgelegt (dies ist eigentlich nicht notwendig, da es der Standard ist).

Die Höhe des Containers wird auf `300px` festgelegt, und der Container ist ebenfalls so eingestellt, dass er einen vertikalen Scrollbalken erzeugt, falls er überläuft (die CSS-Regel `height` auf dem `stretcher`-Element darunter verursacht, dass der Inhalt seinen Container überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline: --square-timeline y;
  /* Firefox supports the older "vertical" syntax */
  scroll-timeline: --square-timeline vertical;
  position: relative;
}
```

Das folgende CSS definiert ein Quadrat, das sich entsprechend der von der Eigenschaft `animation-timeline` bereitgestellten Timeline dreht, die auf die oben genannte `--square-timeline` Timeline gesetzt ist.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-timeline: --square-timeline;
  position: absolute;
  bottom: 0;
}

#stretcher {
  height: 600px;
  background: #dedede;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
```

Die CSS-Regel `stretcher` legt die Blockhöhe auf `600px` fest, wodurch Inhalt entsteht, der den Container überläuft, und dadurch Scrollbalken erzeugt. Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keinen Scrollbalken und daher keine Scroll-Timeline, die mit der Animation-Timeline verknüpft werden könnte.

#### Ergebnis

Scrollen Sie den vertikalen Balken, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert sich während des Scrollens, und die Animationsdauer bei Verwendung von `scroll-timeline` hängt von der Scrollgeschwindigkeit ab (dennoch wurde die `animation-duration`-Eigenschaft definiert, damit Sie die durch Scrollen gesteuerte Animation erkennen können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
