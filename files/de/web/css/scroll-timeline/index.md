---
title: scroll-timeline
slug: Web/CSS/scroll-timeline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) wird verwendet, um eine _benannte Scrollfortschritt-Zeitachse_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf den Scroller gesetzt, der die Zeitachse bereitstellt. Die Start-Scrollposition stellt 0% Fortschritt dar und die End-Scrollposition 100% Fortschritt. Wenn die 0%-Position und die 100%-Position zusammenfallen (d.h. der Scrollcontainer hat keinen Überlauf zum Scrollen), ist die Zeitachse inaktiv.

`scroll-timeline` kann zwei Bestandteilwerte enthalten — einen Namen für die benannte Scrollfortschritt-Zeitachse und einen optionalen Scrollachsenwert.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Deklaration referenziert, um das Element des Containers anzuzeigen, das verwendet wird, um den Fortschritt der Animation durch die Scrollaktion zu steuern.

> [!NOTE]
> Wenn der Scroller in der Achsendimension seinen Container nicht überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Zeitachse erstellt.

## Bestandteileigenschaften

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

Die `scroll-timeline` Kurzform-Eigenschaft kann auf ein Containerelement als Kombination aus den `<scroll-timeline-name>` und `<scroll-timeline-axis>` Werten angewendet werden. Mindestens einer der Werte muss angegeben werden. Wenn beide Werte angegeben sind, muss die Reihenfolge eingehalten werden: der `<scroll-timeline-name>` Wert gefolgt von dem `<scroll-timeline-axis>` Wert.

> **Hinweis:** `<scroll-timeline-name>`s müssen [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte sein, was bedeutet, dass sie mit `--` beginnen müssen. Dies hilft, Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

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

### Erstellen einer benannten Scrollfortschritt-Zeitachsenanimation

In diesem Beispiel wird eine Scrollzeitachse namens `--squareTimeline` definiert, indem die Eigenschaft `scroll-timeline-name` auf das Element mit der ID `container` angewendet wird.
Diese wird dann auf die Animation des `#square` Elements angewendet, indem `animation-timeline: --squareTimeline` verwendet wird.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt diesen als Quelle einer Scrollzeitachse namens `--squareTimeline` unter Verwendung der `scroll-timeline` Eigenschaft. Es setzt auch den zu verwendenden Scrollbalken für die Zeitachse als vertikalen Scrollbalken (dies ist eigentlich nicht nötig, da es der Standard ist).

Die Höhe des Containers wird auf `300px` gesetzt und der Container ist so konfiguriert, dass ein vertikaler Scrollbalken erstellt wird, wenn es überläuft (die CSS `height` Regel auf dem `stretcher` Element unten lässt den Inhalt den Container überlaufen).

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

Das untenstehende CSS definiert ein Quadrat, das sich gemäß der durch die `animation-timeline` Eigenschaft vorgegebenen Zeitachse dreht, welche auf die zuvor genannte `--squareTimeline` Zeitachse gesetzt ist.

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

Die `stretcher` CSS-Regel setzt die Blockhöhe auf `600px`, wodurch Inhalt erstellt wird, der das Containerelement überläuft und somit Scrollbalken erzeugt. Ohne dieses Element würde der Inhalt das Containerelement nicht überlaufen, es gäbe keinen Scrollbalken und folglich keine Scrollzeitachse, die mit der Animationszeitachse verbunden werden kann.

#### Ergebnis

Scrollen Sie den vertikalen Balken, um zu sehen, wie das Quadrat animiert, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert, während Sie scrollen, und die Animationsdauer bei Verwendung von `scroll-timeline` hängt von der Scrollgeschwindigkeit ab (dennoch wurde die `animation-duration` Eigenschaft definiert, damit Sie die scrollgesteuerte Animation erkennen können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
