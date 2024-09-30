---
title: "@keyframes"
slug: Web/CSS/@keyframes
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{CSSRef}}

Die **`@keyframes`** CSS-[At-Regel](/de/docs/Web/CSS/At-rule) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Keyframes (oder Wegpunkte) entlang der Animationssequenz definiert. Dies gibt mehr Kontrolle über die Zwischenstufen der Animationssequenz als [Transitions](/de/docs/Web/CSS/CSS_transitions).

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
  - : Ein Name, der die Keyframe-Liste identifiziert. Dieser muss der Identifier-Produktionen in der CSS-Syntax entsprechen.
- `from`
  - : Ein Startoffset von `0%`.
- `to`
  - : Ein Endoffset von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit in der Animationssequenz, zu der das angegebene Keyframe auftreten soll.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit innerhalb des angegebenen {{cssxref("animation-range")}}, zu dem das angegebene Keyframe auftreten soll. Siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Informationen zu den Arten von Animationen, die benannte Zeitachsenbereiche verwenden.

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann von der {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation mit ihrer Keyframe-Deklaration abzugleichen. Jede `@keyframes`-Regel enthält eine Stil-Liste von Keyframe-Selektoren, die Prozentsätze entlang der Animation angeben, wenn das Keyframe auftritt, und einen Block, der die Stile für dieses Keyframe enthält.

Sie können die Keyframe-Prozentsätze in beliebiger Reihenfolge auflisten; sie werden in der Reihenfolge behandelt, in der sie auftreten sollen.

JavaScript kann auf die `@keyframes`-At-Regel über das CSS-Objektmodell-Interface [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Keyframe-Listen

Wenn eine Keyframe-Regel nicht die Start- oder Endzustände der Animation spezifiziert (d. h. `0%`/`from` und `100%`/`to`), verwenden Browser die vorhandenen Stile des Elements für die Start-/Endzustände. Dies kann verwendet werden, um ein Element von seinem Anfangszustand und zurück zu animieren.

Eigenschaften, die in Keyframe-Regeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden dennoch animiert.

### Auflösung von Duplikaten

Wenn mehrere Keyframe-Sets für einen bestimmten Namen existieren, wird das letzte vom Parser gefundene verwendet. `@keyframes`-Regeln kaskadieren nicht, daher leiten Animationen nie Keyframes aus mehr als einem Regelsatz ab.

Wenn ein bestimmter Animations-Zeit-Offset dupliziert ist, werden alle Keyframes in der `@keyframes`-Regel für diesen Prozentsatz für dieses Frame verwendet. Innerhalb einer `@keyframes`-Regel gibt es Kaskadierung, wenn mehrere Keyframes dieselben Prozentwerte angeben.

### Wenn Eigenschaften in einigen Keyframes fehlen

Eigenschaften, die nicht in jedem Keyframe spezifiziert sind, werden, wenn möglich, interpoliert – Eigenschaften, die nicht interpoliert werden können, werden aus der Animation entfernt. Zum Beispiel:

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

Hier animiert die {{ cssxref("top") }}-Eigenschaft mit den `0%`, `30%` und `100%` Keyframes, und {{ cssxref("left") }} animiert mit den `0%`, `68%`, `72%` und `100%` Keyframes.

### Wenn ein Keyframe mehrfach definiert ist

Wenn ein Keyframe mehrfach definiert ist, aber nicht alle betroffenen Eigenschaften in jedem Keyframe auftauchen, werden alle in diesen Keyframes angegebenen Werte berücksichtigt. Zum Beispiel:

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

Deklarationen in einem Keyframe mit `!important` werden ignoriert.

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

### CSS-Animationsbeispiele

Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) und [Elemente beim Scrollen mit scrollgesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
- [Elemente beim Scrollen mit scrollgesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
