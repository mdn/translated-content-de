---
title: scroll-timeline
slug: Web/CSS/scroll-timeline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) wird verwendet, um eine _benannte Scroll-Fortschritts-Zeitleiste_ zu definieren, die durch Scrollen eines scrollbaren Elements (_Scrollelement_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf dem Scrollelement festgelegt, das die Zeitleiste bereitstellt. Die Anfangs-Scrollposition entspricht 0 % Fortschritt und die End-Scrollposition entspricht 100 % Fortschritt. Wenn die 0%-Position und die 100%-Position zusammenfallen (d. h. der Scroll-Container hat keinen Überlauf zum Scrollen), ist die Zeitleiste inaktiv.

`scroll-timeline` kann zwei Bestandteilwerte enthalten – einen Namen für die benannte Scroll-Fortschritts-Zeitleiste und einen optionalen Scroll-Achsenwert.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Deklaration verwendet, um das Container-Element anzugeben, das den Fortschritt der Animation durch die Scroll-Aktion antreibt.

> [!NOTE]
> Wenn das Scrollelement nicht in seiner Achsendimension überfließt oder der Überlauf ausgeblendet oder abgeschnitten ist, wird keine Zeitleiste erstellt.

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis)

## Syntax

```css
/* zwei Werte: je einer für scroll-timeline-name und scroll-timeline-axis */
scroll-timeline: --custom_name_for_timeline block;
scroll-timeline: --custom_name_for_timeline inline;
scroll-timeline: --custom_name_for_timeline y;
scroll-timeline: --custom_name_for_timeline x;
scroll-timeline: none block;
scroll-timeline: none inline;
scroll-timeline: none y;
scroll-timeline: none x;

/* ein Wert: scroll-timeline-name */
scroll-timeline: none;
scroll-timeline: --custom_name_for_timeline;
```

Die Kurzschreibweise `scroll-timeline` kann auf ein Container-Element als eine Kombination der Werte `<scroll-timeline-name>` und `<scroll-timeline-axis>` angewendet werden. Mindestens einer der Werte muss angegeben sein. Wenn beide Werte angegeben sind, muss die Reihenfolge dem `<scroll-timeline-name>`-Wert gefolgt von dem `<scroll-timeline-axis>`-Wert entsprechen.

> **Hinweis:** `<scroll-timeline-name>`-Werte müssen [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)-Werte sein, was bedeutet, dass sie mit `--` beginnen müssen. Dies hilft, Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

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

### Erstellung einer benannten Scroll-Fortschritts-Zeitleistenanimation

In diesem Beispiel wird eine Scroll-Zeitleiste mit dem Namen `--squareTimeline` definiert, indem die Eigenschaft `scroll-timeline-name` auf dem Element mit der ID `container` verwendet wird. Diese wird dann auf die Animation auf dem `#square`-Element mit `animation-timeline: --squareTimeline` angewendet.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt es als Quelle einer Scroll-Zeitleiste mit dem Namen `--squareTimeline` mithilfe der Eigenschaft `scroll-timeline`. Es legt auch die zu verwendende Scroll-Leiste für die Zeitleiste als vertikale Scroll-Leiste fest (dies ist tatsächlich nicht erforderlich, da es der Standard ist).

Die Höhe des Containers wird auf `300px` gesetzt, und der Container wird so eingestellt, dass eine vertikale Scroll-Leiste erstellt wird, wenn er überläuft (die CSS-`height`-Regel auf dem untenstehenden `stretcher`-Element sorgt dafür, dass der Inhalt seinen Container überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline: --squareTimeline y;
  /* Firefox unterstützt die ältere "vertical" Syntax */
  scroll-timeline: --squareTimeline vertical;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich gemäß der durch die Eigenschaft `animation-timeline` bereitgestellten Zeitleiste dreht, die auf die oben genannte `--squareTimeline`-Zeitleiste gesetzt ist.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox benötigt dies, um die Animation anzuwenden */
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

Die `stretcher`-CSS-Regel setzt die Blockhöhe auf `600px`, was dazu führt, dass der Inhalt das Container-Element überläuft und damit Scroll-Leisten erstellt werden. Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scroll-Leiste und daher keine Scroll-Zeitleiste, die mit der Animationszeitleiste verknüpft werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat beim Scrollen animiert wird.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert sich beim Scrollen, und die Animationsdauer beim Verwenden von `scroll-timeline` hängt von der Scroll-Geschwindigkeit ab (die `animation-duration`-Eigenschaft wurde dennoch definiert, damit Sie die scrollgesteuerte Animation erkennen können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
