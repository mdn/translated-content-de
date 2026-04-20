---
title: "`@keyframes` CSS at-rule"
short-title: "@keyframes"
slug: Web/CSS/Reference/At-rules/@keyframes
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@keyframes`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Keyframes (oder Wegpunkte) entlang der Animationssequenz definiert. Dies gibt mehr Kontrolle über die Zwischenschritte der Animationssequenz als [Transitions](/de/docs/Web/CSS/Guides/Transitions).

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
  - : Ein Name, der die Keyframe-Liste identifiziert. Dieser muss der Identifier-Produktion in der CSS-Syntax entsprechen.
- `from`
  - : Ein Start-Offset von `0%`.
- `to`
  - : Ein End-Offset von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit innerhalb der Animationssequenz, zu dem das spezifizierte Keyframe auftreten soll.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit innerhalb des spezifizierten {{cssxref("animation-range")}}, zu dem das spezifizierte Keyframe auftreten soll. Siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) für weitere Informationen über die Arten von Animationen, die benannte Timeline-Bereiche verwenden.

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann von der {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation ihrer Keyframe-Deklaration zuzuordnen. Jede `@keyframes`-Regel enthält eine Stil-Liste von [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors), die Prozentsätze entlang der Animation angeben, wann das Keyframe auftritt, und einen Block, der die Stile für dieses Keyframe enthält.

Sie können die Keyframe-Prozentsätze in beliebiger Reihenfolge auflisten; sie werden in der Reihenfolge behandelt, in der sie auftreten sollen.

JavaScript kann auf die `@keyframes`-At-Regel mit der CSS-Objektmodell-Schnittstelle [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Keyframe-Listen

Wenn eine Keyframe-Regel die Start- oder Endzustände der Animation nicht spezifiziert (also `0%`/`from` und `100%`/`to`), verwenden Browser die vorhandenen Stile des Elements für die Start-/Endzustände. Dies kann verwendet werden, um ein Element von seinem Anfangszustand an zu animieren und zurück.

Eigenschaften, die nicht in Keyframe-Regeln animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden weiterhin animiert.

### Auflösung von Duplikaten

Wenn mehrere Keyframe-Sets für einen bestimmten Namen existieren, wird das letzte vom Parser erkannte verwendet. `@keyframes`-Regeln kaskadieren nicht, sodass Animationen nie Keyframes aus mehr als einem Regelset ableiten.

Wenn ein bestimmtes Animationszeit-Offset dupliziert wird, werden alle Keyframes in der `@keyframes`-Regel für diesen Prozentsatz für diesen Frame verwendet. Es gibt eine Kaskadierung innerhalb einer `@keyframes`-Regel, wenn mehrere Keyframes dieselben Prozentwerte angeben.

### Wenn Eigenschaften in einigen Keyframes ausgelassen werden

Eigenschaften, die nicht in jedem Keyframe spezifiziert sind, werden, wenn möglich, interpoliert - Eigenschaften, die nicht interpoliert werden können, werden aus der Animation entfernt. Zum Beispiel:

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

Hier animiert die {{ cssxref("top") }}-Eigenschaft unter Verwendung der `0%`, `30%` und `100%` Keyframes, und {{ cssxref("left") }} animiert unter Verwendung der `0%`, `68%`, `72%` und `100%` Keyframes.

### Wenn ein Keyframe mehrmals definiert wird

Wenn ein Keyframe mehrfach definiert wird, aber nicht alle betroffenen Eigenschaften in jedem Keyframe vorhanden sind, werden alle Werte in diesen Keyframes berücksichtigt. Zum Beispiel:

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

In diesem Beispiel werden beim `50%`-Keyframe die Werte `top: 10px` und `left: 20px` verwendet.

Kaskadierende Keyframes werden ab Firefox 14 unterstützt.

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

### CSS-Animationsbeispiele

Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) und [scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-name")}}
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)-Modul
- [CSS scroll-gesteuerte Animationszeiten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Verständnis von Timeline-Bereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul
- [Elemente beim Scrollen mit scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
