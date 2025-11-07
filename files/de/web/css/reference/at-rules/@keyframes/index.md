---
title: "@keyframes"
slug: Web/CSS/Reference/At-rules/@keyframes
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`@keyframes`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Schlüsselbilder (oder Wegpunkte) entlang der Animationssequenz definiert. Dies bietet mehr Kontrolle über die Zwischenschritte der Animationssequenz als [Transitionen](/de/docs/Web/CSS/CSS_transitions).

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
  - : Ein Name, der die Liste der Schlüsselbilder identifiziert. Dieser muss der Identifier-Produktion in der CSS-Syntax entsprechen.
- `from`
  - : Ein Start-Offset von `0%`.
- `to`
  - : Ein End-Offset von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch die Animationssequenz, zu dem das angegebene Schlüsselbild auftreten soll.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch den angegebenen {{cssxref("animation-range")}}, zu dem das angegebene Schlüsselbild auftreten soll. Siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Informationen zu den Arten von Animationen, die benannte Zeitachsenbereiche verwenden.

## Beschreibung

Um Schlüsselbilder zu nutzen, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann von der {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation mit ihrer Schlüsselbilddeklaration abzugleichen. Jede `@keyframes`-Regel enthält eine Stil-Liste von Schlüsselbildselektoren, die Prozentsätze entlang der Animation angeben, wann das Schlüsselbild auftritt, und einen Block mit den Stilen für dieses Schlüsselbild.

Die Prozentsätze der Schlüsselbilder können in beliebiger Reihenfolge aufgelistet werden; sie werden in der Reihenfolge behandelt, in der sie auftreten sollen.

JavaScript kann auf die `@keyframes`-At-Regel über die CSS-Objektmodell-Schnittstelle [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Schlüsselbildlisten

Wenn eine Schlüsselbildregel den Anfangs- oder Endzustand der Animation nicht spezifiziert (d.h. `0%`/`from` und `100%`/`to`), verwenden Browser die bestehenden Stile des Elements für die Anfangs-/Endzustände. Dies kann genutzt werden, um ein Element von seinem Anfangszustand zu animieren und zurück.

Eigenschaften, die in Schlüsselbildregeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden dennoch animiert.

### Auflösung von Duplikaten

Wenn mehrere Schlüsselbildsätze für einen bestimmten Namen existieren, wird der letzte vom Parser erkannte verwendet. `@keyframes`-Regeln kaskadieren nicht, sodass Animationen niemals Schlüsselbildern aus mehr als einem Regelsatz ableiten.

Wenn ein bestimmter Animationszeit-Offset dupliziert ist, werden alle Schlüsselbilder in der `@keyframes`-Regel für diesen Prozentsatz für dieses Bild verwendet. Es gibt eine Kaskadierung innerhalb einer `@keyframes`-Regel, wenn mehrere Schlüsselbilder dieselben Prozentwerte spezifizieren.

### Wenn Eigenschaften aus einigen Schlüsselbildern weggelassen werden

Eigenschaften, die nicht in jedem Schlüsselbild spezifiziert sind, werden interpoliert, wenn möglich — Eigenschaften, die nicht interpoliert werden können, werden von der Animation ausgeschlossen. Zum Beispiel:

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

Hier animiert die {{ cssxref("top") }}-Eigenschaft mithilfe der `0%`, `30%` und `100%` Schlüsselbilder, und {{ cssxref("left") }} animiert mithilfe der `0%`, `68%`, `72%` und `100%` Schlüsselbilder.

### Wenn ein Schlüsselbild mehrfach definiert ist

Wenn ein Schlüsselbild mehrfach definiert ist, aber nicht alle betroffenen Eigenschaften in jedem Schlüsselbild vorhanden sind, werden alle in diesen Schlüsselbildern angegebenen Werte berücksichtigt. Zum Beispiel:

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

In diesem Beispiel werden im `50%`-Schlüsselbild die Werte `top: 10px` und `left: 20px` verwendet.

Kaskadierende Schlüsselbilder werden ab Firefox 14 unterstützt.

### `!important` in einem Schlüsselbild

Deklarationen in einem Schlüsselbild, die mit `!important` qualifiziert sind, werden ignoriert.

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

### CSS-Animation Beispiele

Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) und [Animieren von Elementen beim Scrollen mit Scroll-gesteuerten Animationen](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
- [Animieren von Elementen beim Scrollen mit Scroll-gesteuerten Animationen](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
