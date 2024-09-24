---
title: "@keyframes"
slug: Web/CSS/@keyframes
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{CSSRef}}

Die **`@keyframes`** CSS-[At-Regel](/de/docs/Web/CSS/At-rule) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Keyframes (oder Wegpunkte) entlang der Animationssequenz definiert. Dies bietet mehr Kontrolle über die Zwischenschritte der Animationssequenz als [Transitions](/de/docs/Web/CSS/CSS_transitions).

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
  - : Ein Anfangsoffset von `0%`.
- `to`
  - : Ein Endoffset von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit in der Animationssequenz, zu dem das spezifizierte Keyframe auftreten soll.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit im angegebenen {{cssxref("animation-range")}}, zu dem das spezifizierte Keyframe auftreten soll. Siehe [CSS-Scroll-Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Informationen über die Arten von Animationen, die benannte Timeline-Bereiche verwenden.

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann von der {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation der Keyframe-Deklaration zuzuordnen. Jede `@keyframes`-Regel enthält eine Stil-Liste von Keyframe-Selektoren, die angeben, zu welchen Prozentsätzen entlang der Animation das Keyframe auftritt, und einen Block, der die Stile für dieses Keyframe enthält.

Sie können die Prozentsätze der Keyframes in beliebiger Reihenfolge auflisten; sie werden in der Reihenfolge behandelt, in der sie auftreten sollen.

JavaScript kann über die CSS-Objektmodell-Schnittstelle {{domxref("CSSKeyframesRule")}} auf die `@keyframes`-At-Regel zugreifen.

### Gültige Keyframe-Listen

Wenn eine Keyframe-Regel die Anfangs- oder Endzustände der Animation nicht spezifiziert (d.h. `0%`/`from` und `100%`/`to`), verwenden Browser die bestehenden Stile des Elements für die Anfangs-/Endzustände. Dies kann verwendet werden, um ein Element von seinem Anfangszustand an zu animieren und zurück.

Eigenschaften, die in Keyframe-Regeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden dennoch animiert.

### Auflösen von Duplikaten

Wenn mehrere Keyframe-Sätze für einen bestimmten Namen existieren, wird der letzte vom Parser erkannte verwendet. `@keyframes`-Regeln kaskadieren nicht, sodass Animationen niemals Keyframes aus mehr als einem Regelsatz ableiten.

Wenn ein bestimmter Animationszeitausgleich dupliziert ist, werden alle Keyframes in der `@keyframes`-Regel für diesen Prozentsatz für diesen Frame verwendet. Es gibt Kaskadierung innerhalb einer `@keyframes`-Regel, wenn mehrere Keyframes die gleichen Prozentwerte spezifizieren.

### Wenn Eigenschaften in einigen Keyframes ausgelassen werden

Eigenschaften, die nicht in jedem Keyframe spezifiziert sind, werden, wenn möglich, interpoliert – Eigenschaften, die nicht interpoliert werden können, werden von der Animation ausgeschlossen. Zum Beispiel:

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

Hier wird die {{ cssxref("top") }}-Eigenschaft unter Verwendung der `0%`, `30%` und `100%` Keyframes animiert und {{ cssxref("left") }} unter Verwendung der `0%`, `68%`, `72%` und `100%` Keyframes.

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

In diesem Beispiel werden im `50%`-Keyframe die Werte `top: 10px` und `left: 20px` verwendet.

Kaskadierende Keyframes werden ab Firefox 14 unterstützt.

### `!important` in einem Keyframe

Deklarationen in einem Keyframe, die mit `!important` qualifiziert sind, werden ignoriert.

```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  50% {
    margin-top: 150px !important; /* ignoriert */
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
    margin-top: 150px !important; /* ignoriert */
    margin-bottom: 50px;
  }
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

### CSS-Animationsbeispiele

Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) und [Elemente bei Bildlauf animieren mit Scroll-gesteuerten Animationen](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range")}}
- [CSS-Scroll-Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
- [Elemente bei Bildlauf animieren mit Scroll-gesteuerten Animationen](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- {{domxref("AnimationEvent")}}
