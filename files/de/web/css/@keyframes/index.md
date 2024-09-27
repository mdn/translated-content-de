---
title: "@keyframes"
slug: Web/CSS/@keyframes
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{CSSRef}}

Die **`@keyframes`** CSS-[at-rule](/de/docs/Web/CSS/At-rule) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Keyframes (oder Wegpunkte) entlang der Animationssequenz definiert. Dies gibt mehr Kontrolle über die Zwischenschritte der Animationssequenz als [Transitions](/de/docs/Web/CSS/CSS_transitions).

## Syntax

```css
@keyframes slidein {
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
  - : Ein Startversatz von `0%`.
- `to`
  - : Ein Endversatz von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch die Animationssequenz, bei dem das angegebene Keyframe auftreten soll.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch den angegebenen {{cssxref("animation-range")}}, bei dem das angegebene Keyframe auftreten soll. Weitere Informationen zu den Arten von Animationen, die benannte Timeline-Bereiche verwenden, finden Sie unter [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations).

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann von der {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation ihrer Keyframe-Deklaration zuzuordnen. Jede `@keyframes`-Regel enthält eine Stileliste von Keyframe-Selektoren, die Prozentsätze entlang der Animation angeben, wann das Keyframe auftritt, und einen Block, der die Stile für dieses Keyframe enthält.

Sie können die Keyframe-Prozentsätze in beliebiger Reihenfolge auflisten; sie werden in der Reihenfolge verarbeitet, in der sie auftreten sollen.

JavaScript kann auf die `@keyframes`-at-rule über die CSS-Objektmodell-Schnittstelle [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Keyframe-Listen

Wenn eine Keyframe-Regel die Start- oder Endzustände der Animation nicht angibt (also `0%`/`from` und `100%`/`to`), verwenden Browser die bestehenden Stile des Elements für die Start-/Endzustände. Dies kann verwendet werden, um ein Element aus seinem Anfangszustand und wieder zurück zu animieren.

Eigenschaften, die in Keyframe-Regeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden dennoch animiert.

### Auflösung von Duplikaten

Wenn mehrere Keyframe-Sets für einen gegebenen Namen existieren, wird das letzte vom Parser erkannte verwendet. `@keyframes`-Regeln kaskadieren nicht, sodass Animationen niemals Keyframes aus mehr als einem Regelsatz ableiten.

Wenn ein gegebener Animationszeitversatz dupliziert wird, werden alle Keyframes in der `@keyframes`-Regel für diesen Prozentsatz für diesen Frame verwendet. Es gibt Kaskadierung innerhalb einer `@keyframes`-Regel, wenn mehrere Keyframes dieselben Prozentsatzwerte angeben.

### Wenn Eigenschaften in einigen Keyframes weggelassen werden

Eigenschaften, die nicht in jedem Keyframe angegeben sind, werden interpoliert, wenn möglich — Eigenschaften, die nicht interpoliert werden können, werden aus der Animation entfernt. Zum Beispiel:

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

Hier animiert die {{ cssxref("top") }}-Eigenschaft mit den Keyframes `0%`, `30%` und `100%`, und {{ cssxref("left") }} animiert mit den Keyframes `0%`, `68%`, `72%` und `100%`.

### Wenn ein Keyframe mehrfach definiert wird

Wenn ein Keyframe mehrmals definiert ist, aber nicht alle betroffenen Eigenschaften in jedem Keyframe vorhanden sind, werden alle in diesen Keyframes angegebenen Werte berücksichtigt. Zum Beispiel:

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

In diesem Beispiel sind im `50%`-Keyframe die verwendeten Werte `top: 10px` und `left: 20px`.

Kaskadierende Keyframes werden ab Firefox 14 unterstützt.

### `!important` in einem Keyframe

Deklarationen in einem Keyframe, die mit `!important` qualifiziert sind, werden ignoriert.

```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  50% {
    margin-top: 150px !important; /* ignored */
  }
  to {
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

Siehe [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) und [Animate elements on scroll with Scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range")}}
- [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS animations](/de/docs/Web/CSS/CSS_animations) Modul
- [Animate elements on scroll with Scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
