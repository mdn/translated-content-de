---
title: scroll-timeline
slug: Web/CSS/Reference/Properties/scroll-timeline
l10n:
  sourceCommit: e316a03cc74a78004dbba837c9d5df297e2eb0aa
---

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um eine _benannte Scroll-Fortschritts-Timeline_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf dem Scroller gesetzt, der die Timeline bereitstellen wird. Die Start-Scrollposition repräsentiert einen Fortschritt von 0 % und die End-Scrollposition 100 % Fortschritt. Wenn die 0 %-Position und die 100 %-Position zusammenfallen (d.h. der Scroll-Container hat keinen Überlauf zum Scrollen), ist die Timeline inaktiv.

`scroll-timeline` kann zwei wesentliche Werte enthalten — einen Namen für die benannte Scroll-Fortschritts-Timeline und einen optionalen Scroll-Achsenwert.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)-Deklaration referenziert, um anzugeben, welches Element des Containers verwendet wird, um den Fortschritt der Animation durch die Scroll-Aktion zu steuern.

> [!NOTE]
> Wenn der Scroller in der Achsendimension nicht aus seinem Container überläuft oder der Überlauf verborgen oder abgeschnitten ist, wird keine Timeline erstellt.

## Wesentliche Eigenschaften

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

Die `scroll-timeline`-Kurzform-Eigenschaft kann auf ein Container-Element als Kombination der `<scroll-timeline-name>` und `<scroll-timeline-axis>` Werte angewendet werden. Mindestens einer der Werte muss angegeben werden. Wenn beide Werte angegeben sind, muss die Reihenfolge eingehalten werden: zuerst der `<scroll-timeline-name>` Wert, gefolgt von dem `<scroll-timeline-axis>` Wert.

> [!NOTE]
> `<scroll-timeline-name>`s müssen [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident)-Werte sein, was bedeutet, dass sie mit `--` beginnen müssen. Dies hilft, Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

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

### Eine benannte Scroll-Fortschritts-Timeline-Animation erstellen

In diesem Beispiel wird eine Scroll-Timeline namens `--square-timeline` unter Verwendung der `scroll-timeline-name`-Eigenschaft auf dem Element mit der ID `container` definiert. Diese wird dann auf die Animation des `#square`-Elements angewendet, indem `animation-timeline: --square-timeline` verwendet wird.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt ihn als Quelle einer Scroll-Timeline namens `--square-timeline` unter Verwendung der `scroll-timeline`-Eigenschaft fest. Es wird auch festgelegt, dass die vertikale Scrollleiste für die Timeline verwendet werden soll (dies ist eigentlich nicht nötig, da es der Standard ist).

Die Höhe des Containers ist auf `300px` festgelegt, und der Container ist auch darauf eingestellt, eine vertikale Scrollleiste zu erstellen, wenn er überläuft (die CSS-`height`-Regel auf dem unten stehenden `stretcher`-Element lässt den Inhalt den Container überlaufen).

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

Das untenstehende CSS definiert ein Quadrat, das sich entsprechend der durch die `animation-timeline`-Eigenschaft bereitgestellten Timeline dreht, die auf die oben benannte `--square-timeline` gesetzt ist.

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

Die CSS-Regel für `stretcher` setzt die Blockhöhe auf `600px`, wodurch ein Inhalt entsteht, der das Container-Element überläuft und somit Scrollleisten erstellt. Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollleiste und folglich keine Scroll-Timeline, die mit der Animations-Timeline verknüpft werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert sich während des Scrollens, und die Animationsdauer bei Verwendung von `scroll-timeline` hängt von der Scrollgeschwindigkeit ab (dennoch wurde die `animation-duration`-Eigenschaft definiert, damit Sie die scrollgesteuerte Animation wahrnehmen können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
