---
title: scroll-timeline
slug: Web/CSS/scroll-timeline
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um eine _benannte Scrollfortschritts-Zeitachse_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf den Scroller gesetzt, der die Zeitachse bereitstellen soll. Die Startposition des Scrollens repräsentiert 0% Fortschritt und die Endposition des Scrollens repräsentiert 100% Fortschritt. Wenn die 0%-Position und die 100%-Position übereinstimmen (d.h. der Scrollcontainer keinen Überlauf zum Scrollen hat), ist die Zeitachse inaktiv.

`scroll-timeline` kann zwei zusammengesetzte Werte enthalten – einen Namen für die benannte Scrollfortschritts-Zeitachse und einen optionalen Scrollachsenwert.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Deklaration referenziert, um das Element des Containers anzugeben, das den Fortschritt der Animation durch die Scrollaktion antreibt.

> [!NOTE]
> Wenn der Scroller nicht über seine Containerdimension hinausreicht oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Zeitachse erstellt.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die `scroll-timeline`-Kurzschreibweise kann auf ein Containerelement als Kombination der Werte `<scroll-timeline-name>` und `<scroll-timeline-axis>` angewendet werden. Mindestens einer der Werte muss angegeben werden. Wenn beide Werte angegeben werden, muss die Reihenfolge eingehalten werden, nämlich zuerst der `<scroll-timeline-name>`-Wert und dann der `<scroll-timeline-axis>`-Wert.

> [!NOTE]
> `<scroll-timeline-name>`s müssen [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)-Werte sein, was bedeutet, dass sie mit `--` beginnen müssen. Dies hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

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

### Erstellen einer benannten Scrollfortschritts-Zeitachsen-Animation

In diesem Beispiel wird eine Scroll-Zeitachse mit dem Namen `--square-timeline` unter Verwendung der `scroll-timeline-name`-Eigenschaft auf dem Element mit der ID `container` definiert.
Diese wird dann auf die Animation auf dem `#square`-Element angewendet, indem `animation-timeline: --square-timeline` verwendet wird.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt fest, dass er die Quelle einer Scroll-Zeitachse namens `--square-timeline` unter Verwendung der `scroll-timeline`-Eigenschaft ist.
Es legt auch fest, dass die vertikale Scrollleiste für die Zeitachse verwendet werden soll (dies ist eigentlich nicht erforderlich, da es der Standard ist).

Die Höhe des Containers wird auf `300px` festgelegt, und der Container wird so eingestellt, dass er eine vertikale Scrollleiste erstellt, wenn er überläuft (die CSS-`height`-Regel auf dem `stretcher`-Element unten lässt den Inhalt den Container überlaufen).

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

Das unten definierte CSS definiert ein Quadrat, das sich gemäß der durch die `animation-timeline`-Eigenschaft angegebenen Zeitachse dreht, welche auf die oben genannte `--square-timeline`-Zeitachse gesetzt ist.

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

Die `stretcher`-CSS-Regel setzt die Blöckhöhe auf `600px`, was Inhalte erstellt, die das Containerelement überlaufen, wodurch Scrollleisten erstellt werden.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollleiste und daher keine Scroll-Zeitachse, die mit der Animations-Zeitachse verknüpft werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert sich beim Scrollen, und die Animationsdauer bei Verwendung von `scroll-timeline` hängt von der Scrollgeschwindigkeit ab (trotzdem wurde die `animation-duration`-Eigenschaft definiert, damit Sie die scrollgesteuerte Animation erkennen können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
