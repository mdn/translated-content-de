---
title: "@keyframes"
slug: Web/CSS/@keyframes
l10n:
  sourceCommit: 3d06d82cbddf640291fd66cf85cd9014c4e867c5
---

Die **`@keyframes`** CSS-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Keyframes (oder Wegpunkte) entlang der Animationssequenz definiert. Dies gibt mehr Kontrolle über die Zwischenschritte der Animationssequenz als [Transitions](/de/docs/Web/CSS/CSS_transitions).

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
  - : Ein Startoffset von `0%`.
- `to`
  - : Ein Endoffset von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit in der Animationssequenz, zu dem das spezifizierte Keyframe auftreten sollte.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch den spezifizierten {{cssxref("animation-range")}}, zu dem das spezifizierte Keyframe auftreten sollte. Weitere Informationen zu den Arten von Animationen, die benannte Zeitachsenabschnitte verwenden, finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann von der {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation mit ihrer Keyframe-Deklaration zu verknüpfen. Jede `@keyframes`-Regel enthält eine Stil-Liste von Keyframe-Selektoren, die Prozentsätze entlang der Animation spezifizieren, wann das Keyframe auftritt, und einen Block, der die Stile für dieses Keyframe enthält.

Sie können die Keyframe-Prozentsätze in beliebiger Reihenfolge auflisten; sie werden in der Reihenfolge behandelt, in der sie auftreten sollen.

JavaScript kann auf die `@keyframes`-At-Regel mit der CSS Object Model Schnittstelle [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Keyframe-Listen

Wenn eine Keyframe-Regel nicht die Start- oder Endzustände der Animation angibt (das heißt `0%`/`from` und `100%`/`to`), verwenden Browser die vorhandenen Stile des Elements für die Start-/Endzustände. Dies kann verwendet werden, um ein Element von seinem Anfangszustand aus zu animieren und zurück.

Eigenschaften, die in Keyframe-Regeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden trotzdem animiert.

### Auflösen von Duplikaten

Wenn mehrere Keyframe-Sätze für einen gegebenen Namen existieren, wird der zuletzt vom Parser erkannte verwendet. `@keyframes`-Regeln kaskadieren nicht, daher leiten Animationen niemals Keyframes von mehr als einem Regel-Satz ab.

Wenn ein gegebener Animationszeitoffset dupliziert ist, werden alle Keyframes in der `@keyframes`-Regel für diesen Prozentsatz für dieses Frame verwendet. Es gibt eine Kaskadierung innerhalb einer `@keyframes`-Regel, wenn mehrere Keyframes dieselben Prozentwerte angeben.

### Wenn Eigenschaften in einigen Keyframes weggelassen werden

Eigenschaften, die nicht in jedem Keyframe angegeben sind, werden, wenn möglich, interpoliert — Eigenschaften, die nicht interpoliert werden können, werden aus der Animation entfernt. Zum Beispiel:

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

Hier animiert die {{ cssxref("top") }}-Eigenschaft mithilfe der `0%`, `30%` und `100%` Keyframes, und {{ cssxref("left") }} animiert mithilfe der `0%`, `68%`, `72%` und `100%` Keyframes.

### Wenn ein Keyframe mehrfach definiert wird

Wenn ein Keyframe mehrfach definiert ist, aber nicht alle betroffenen Eigenschaften in jedem Keyframe vorhanden sind, werden alle in diesen Keyframes angegebenen Werte berücksichtigt. Zum Beispiel:

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

In diesem Beispiel werden im `50%` Keyframe die Werte `top: 10px` und `left: 20px` verwendet.

Kaskadierende Keyframes werden ab Firefox 14 unterstützt.

### `!important` in einem Keyframe

In einem Keyframe qualifizierte Deklarationen mit `!important` werden ignoriert.

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

Siehe [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) und [Elemente beim Scrollen mit Scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
- [Elemente beim Scrollen mit Scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
