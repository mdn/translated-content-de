---
title: "@keyframes"
slug: Web/CSS/Reference/At-rules/@keyframes
l10n:
  sourceCommit: a397ab763a6686a4056af755e4da32ac735b9fa5
---

Die **`@keyframes`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Keyframes (oder Wegpunkte) entlang der Animationssequenz definiert. Dies bietet mehr Kontrolle über die Zwischenschritte der Animationssequenz als [Transitionen](/de/docs/Web/CSS/Guides/Transitions).

## Syntax

```css
@keyframes slide-in {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

### Werte

- {{cssxref("custom-ident")}}
  - : Ein Name, der die Keyframe-Liste identifiziert. Dieser muss der Identifier-Erzeugung in der CSS-Syntax entsprechen.
- `from`
  - : Ein Startoffset von `0%`.
- `to`
  - : Ein Endoffset von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch die Animationssequenz, zu dem das angegebene Keyframe auftreten soll.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch den angegebenen {{cssxref("animation-range")}}, zu dem das angegebene Keyframe auftreten soll. Siehe [scroll-gesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) für weitere Informationen zu den Arten von Animationen, die benannte Timeline-Bereiche verwenden.

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann durch die {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation mit ihrer Keyframe-Deklaration abzugleichen. Jede `@keyframes`-Regel enthält eine Stil-Liste von [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors), die die Prozentsätze entlang der Animation angeben, bei denen das Keyframe auftritt, sowie einen Block, der die Stile für dieses Keyframe enthält.

Sie können die Keyframe-Prozentsätze in beliebiger Reihenfolge auflisten; sie werden in der Reihenfolge behandelt, in der sie auftreten sollen.

JavaScript kann die `@keyframes`-At-Regel mit der CSS-Objektmodell-Schnittstelle [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Keyframe-Listen

Wenn eine Keyframe-Regel nicht die Start- oder Endzustände der Animation spezifiziert (d.h. `0%`/`from` und `100%`/`to`), verwenden Browser die vorhandenen Stilelemente für die Start-/Endzustände. Dies kann verwendet werden, um ein Element von seinem Ausgangszustand zu animieren und zurück.

Eigenschaften, die in Keyframe-Regeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden weiterhin animiert.

### Auflösen von Duplikaten

Wenn mehrere Keyframe-Sets für einen gegebenen Namen existieren, wird das zuletzt vom Parser gefundene Set verwendet. `@keyframes`-Regeln kaskadieren nicht, sodass Animationen nie Keyframes aus mehr als einem Regelset ableiten.

Wenn ein gegebener Animationszeit-Offset dupliziert ist, werden alle Keyframes in der `@keyframes`-Regel für diesen Prozentsatz für diesen Frame verwendet. Es gibt eine Kaskadierung innerhalb einer `@keyframes`-Regel, wenn mehrere Keyframes dieselben Prozentwert angeben.

### Wenn Eigenschaften in einigen Keyframes ausgelassen werden

Eigenschaften, die nicht in jedem Keyframe angegeben sind, werden nach Möglichkeit interpoliert — Eigenschaften, die nicht interpoliert werden können, werden von der Animation ausgeschlossen. Zum Beispiel:

```css
@keyframes identifier {
  0% {
    top: 0;
    left: 0;
  }
  30% {
    top: 50px;
  }
  68%,
  72% {
    left: 50px;
  }
  100% {
    top: 100px;
    left: 100%;
  }
}
```

Hierbei animiert die {{ cssxref("top") }}-Eigenschaft unter Verwendung der `0%`, `30%` und `100%` Keyframes, und {{ cssxref("left") }} animiert mithilfe der `0%`, `68%`, `72%` und `100%` Keyframes.

### Wenn ein Keyframe mehrmals definiert ist

Wenn ein Keyframe mehrmals definiert ist, aber nicht alle betroffenen Eigenschaften in jedem Keyframe enthalten sind, werden alle in diesen Keyframes angegebenen Werte berücksichtigt. Zum Beispiel:

```css
@keyframes identifier {
  0% {
    top: 0;
  }
  50% {
    top: 30px;
    left: 20px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0;
  }
}
```

In diesem Beispiel werden beim `50%` Keyframe die Werte `top: 10px` und `left: 20px` verwendet.

Kaskadierte Keyframes werden ab Firefox 14 unterstützt.

### `!important` in einem Keyframe

Deklarationen in einem Keyframe, die mit `!important` qualifiziert sind, werden ignoriert.

```css
@keyframes important1 {
  0% {
    margin-top: 50px;
  }
  50% {
    margin-top: 150px !important; /* ignored */
  }
  100% {
    margin-top: 100px;
  }
}

@keyframes important2 {
  from {
    margin-top: 50px;
    margin-bottom: 100px;
  }
  to {
    margin-top: 150px !important; /* ignored */
    margin-bottom: 50px;
  }
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiele für CSS-Animationen

Sehen Sie sich [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) und [scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) für Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-name")}}
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations)
- [CSS-Scroll-gesteuerte Animationszeitpläne](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Scroll-gesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Elemente beim Scrollen mit scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
