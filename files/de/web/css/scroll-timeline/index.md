---
title: scroll-timeline
slug: Web/CSS/scroll-timeline
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um eine _benannte Scroll-Fortschrittstimeline_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf den Scroller gesetzt, der die Timeline bereitstellt. Die Start-Scrollposition repräsentiert 0 % Fortschritt und die End-Scrollposition repräsentiert 100 % Fortschritt. Falls die 0 %-Position und die 100 %-Position zusammenfallen (d.h. der Scrollcontainer hat keinen Überlauf zum Scrollen), ist die Timeline inaktiv.

`scroll-timeline` kann zwei Werte enthalten – einen Namen für die benannte Scroll-Fortschrittstimeline und einen optionalen Scroll-Achsenwert.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Deklaration referenziert, um auf das Element des Containers zu verweisen, das verwendet wird, um den Fortschritt der Animation durch die Scroll-Aktion zu steuern.

> [!NOTE]
> Wenn der Scroller in der Achsendimension nicht über seinen Container hinausläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Timeline erstellt.

## Teil-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis)

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

Die `scroll-timeline`-Kurzschreibweise kann auf ein Containerelement als Kombination der Werte `<scroll-timeline-name>` und `<scroll-timeline-axis>` angewendet werden. Mindestens einer der Werte muss angegeben werden. Wenn beide Werte angegeben werden, muss die Reihenfolge eingehalten werden: zuerst der `<scroll-timeline-name>`-Wert, gefolgt vom `<scroll-timeline-axis>`-Wert.

> [!NOTE] > `<scroll-timeline-name>`-Werte müssen [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)-Werte sein, was bedeutet, dass sie mit `--` beginnen müssen. Dies hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

### Werte

- `<scroll-timeline-name>`

  - : Siehe [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name).

- `<scroll-timeline-axis>`
  - : Siehe [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis). Der Standardwert ist `block`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschrittstimeline-Animation

In diesem Beispiel wird eine Scroll-Timeline mit dem Namen `--squareTimeline` mithilfe der Eigenschaft `scroll-timeline-name` auf dem Element mit der ID `container` definiert. Diese wird dann auf die Animation des `#square`-Elements mittels `animation-timeline: --squareTimeline` angewendet.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt fest, dass dieser die Quelle einer Scroll-Timeline mit dem Namen `--squareTimeline` ist und die `scroll-timeline`-Eigenschaft verwendet. Es legt außerdem fest, dass die vertikale Scrollleiste für die Timeline verwendet wird (dies ist eigentlich nicht erforderlich, da es der Standard ist).

Die Höhe des Containers wird auf `300px` gesetzt, und der Container wird so eingestellt, dass er eine vertikale Scrollleiste erzeugt, wenn er überläuft (die CSS-`height`-Regel auf dem untenstehenden `stretcher`-Element bewirkt, dass der Inhalt den Container überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline: --squareTimeline y;
  /* Firefox supports the older "vertical" syntax */
  scroll-timeline: --squareTimeline vertical;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich entsprechend der von der `animation-timeline`-Eigenschaft bereitgestellten Timeline dreht, die auf die oben genannte `--squareTimeline`-Timeline gesetzt ist.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-timeline: --squareTimeline;
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

Die `stretcher`-CSS-Regel setzt die Blockhöhe auf `600px`, wodurch Inhalt entsteht, der den Container überschreitet und dadurch Scrollleisten erzeugt. Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollleiste und somit keine Scroll-Timeline zur Verknüpfung mit der Animationstimeline.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat wird animiert, während Sie scrollen, und die Animationsdauer bei Verwendung von `scroll-timeline` hängt von der Scrollgeschwindigkeit ab (dennoch wurde die `animation-duration`-Eigenschaft definiert, damit Sie die durch Scrollen gesteuerte Animation erkennen können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
