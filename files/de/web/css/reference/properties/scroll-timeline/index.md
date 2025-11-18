---
title: scroll-timeline
slug: Web/CSS/Reference/Properties/scroll-timeline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um eine _benannte Scroll-Fortschritts-Timeline_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf dem Scroller gesetzt, der die Timeline bereitstellen soll. Die startende Scroll-Position repräsentiert 0 % Fortschritt und die endende Scroll-Position repräsentiert 100 % Fortschritt. Wenn die 0%-Position und die 100%-Position identisch sind (d.h. der Scroll-Container hat keinen Überlauf zum Scrollen), ist die Timeline inaktiv.

`scroll-timeline` kann zwei ursprüngliche Werte enthalten — einen Namen für die benannte Scroll-Fortschritts-Timeline und einen optionalen Scroll-Achsenwert.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)-Deklaration referenziert, um das Element des Containers anzugeben, das durch die Scrolling-Aktion den Fortschritt der Animation steuert.

> [!NOTE]
> Wenn der Scroller in der Achs-Dimension nicht seinen Container überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Timeline erstellt.

## Ursprüngliche Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für folgende CSS-Eigenschaften:

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

Die `scroll-timeline` Kurzschreibweise-Eigenschaft kann auf ein Containerelement als Kombination der Werte `<scroll-timeline-name>` und `<scroll-timeline-axis>` angewendet werden. Mindestens einer der Werte muss angegeben werden. Wenn beide Werte angegeben sind, muss die Reihenfolge dem `<scroll-timeline-name>` Wert gefolgt vom `<scroll-timeline-axis>` Wert folgen.

> [!NOTE] > `<scroll-timeline-name>`s müssen [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident) Werte sein, was bedeutet, dass sie mit `--` beginnen müssen. Dies hilft, Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

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

### Erstellen einer benannten Scroll-Fortschritts-Timeline-Animation

In diesem Beispiel wird eine Scroll-Timeline namens `--square-timeline` mithilfe der `scroll-timeline-name` Eigenschaft auf dem Element mit der ID `container` definiert.
Diese wird dann auf die Animation des `#square` Elements mit `animation-timeline: --square-timeline` angewendet.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt es als Quelle für eine Scroll-Timeline mit dem Namen `--square-timeline` mithilfe der `scroll-timeline` Eigenschaft fest.
Es legt auch fest, dass der zu verwendende Scrollbalken für die Timeline der vertikale Scrollbalken ist (dies ist eigentlich nicht nötig, da es der Standard ist).

Die Höhe des Containers ist auf `300px` gesetzt, und der Container ist auch darauf eingestellt, einen vertikalen Scrollbalken zu erzeugen, wenn er überläuft (die CSS `height` Regel auf dem `stretcher` Element unten sorgt tatsächlich dafür, dass der Inhalt den Container überläuft).

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

Das nachfolgende CSS definiert ein Quadrat, das sich gemäß der durch die `animation-timeline` Eigenschaft gelieferten Timeline dreht, die auf die oben genannte `--square-timeline` Timeline eingestellt ist.

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

Die `stretcher` CSS Regel setzt die Blockhöhe auf `600px`, was einen Inhalt erzeugt, der den Container überläuft und somit Scrollbalken erzeugt.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keinen Scrollbalken und daher auch keine Scroll-Timeline, die mit der Animation-Timeline verknüpft werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert sich, während Sie scrollen, und die Animationsdauer bei Verwendung von `scroll-timeline` hängt von der Scroll-Geschwindigkeit ab (dennoch wurde die `animation-duration` Eigenschaft definiert, damit Sie die scrollgesteuerte Animation erkennen können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
