---
title: ":focus-visible"
slug: Web/CSS/:focus-visible
l10n:
  sourceCommit: 474c28a2a5b145401acbc5433a888d491a237405
---

{{CSSRef}}

Die **`:focus-visible`** Pseudo-Klasse kommt zur Anwendung, wenn ein Element der {{CSSxRef(":focus")}} Pseudo-Klasse entspricht und der UA ({{Glossary("User_Agent", "User Agent")}}) anhand von Heuristiken feststellt, dass der Fokus auf dem Element deutlich gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokusring" an.)

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-visible.html", "tabbed-shorter")}}

Dieser Selektor ist nützlich, um einen unterschiedlichen Fokus-Indikator basierend auf dem Eingabemodell des Benutzers bereitzustellen (Maus vs. Tastatur).

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich legte CSS des Benutzeragenten Fokus-Stile nur basierend auf der `:focus` Pseudo-Klasse fest und gestaltete die meisten fokussierten Elemente mit einem Umriss des Fokusrings. Dies bedeutete, dass alle Elemente, einschließlich aller Links und Schaltflächen, einen Fokusring erhielten, wenn sie fokussiert waren, was viele als unästhetisch empfanden. Aufgrund des Aussehens entfernten einige Autoren die Umriss-Fokus-Stile des Benutzeragenten. Das Ändern von Fokus-Stilen kann die Benutzerfreundlichkeit verringern, während das Entfernen von Fokus-Stilen die Tastaturnavigation für sehende Benutzer unzugänglich macht.

Browser zeigen nicht länger sichtbar den Fokus (wie durch Zeichnen eines "Fokusrings") um jedes Element an, wenn es den Fokus hat. Stattdessen verwenden sie eine Vielzahl von Heuristiken, um Fokus-Indikatoren nur dann bereitzustellen, wenn sie dem Benutzer am nützlichsten wären. Zum Beispiel wird, wenn eine Schaltfläche mit einem Zeigegerät geklickt wird, der Fokus meist nicht visuell angezeigt, aber wenn ein Textfeld den Fokus hat, das Benutzereingaben benötigt, wird der Fokus angezeigt. Während Fokus-Stile immer erforderlich sind, wenn Benutzer die Seite mit der Tastatur navigieren oder wenn der Fokus über Skripte verwaltet wird, sind Fokus-Stile nicht erforderlich, wenn der Benutzer weiß, wohin er den Fokus legt, wie wenn er ein Zeigegerät wie eine Maus oder den Finger verwendet, um den Fokus physisch auf ein Element zu setzen, es sei denn, dass Element benötigt weiterhin Benutzeraufmerksamkeit.

Die `:focus` Pseudo-Klasse entspricht immer dem aktuell fokussierten Element. Die `:focus-visible` Pseudo-Klasse entspricht auch dem fokussierten Element, jedoch nur, wenn der Benutzer darüber informiert werden muss, wo der Fokus aktuell ist. Da die `:focus-visible` Pseudo-Klasse dem fokussierten Element bei Bedarf entspricht, können Autoren mit der Nutzung der `:focus-visible` (anstelle der `:focus` Pseudo-Klasse) das Aussehen des Fokus-Indikators ändern, ohne zu ändern, wann der Fokus-Indikator erscheint.

Wenn die [`:focus`](/de/docs/Web/CSS/:focus) Pseudo-Klasse verwendet wird, zielt sie immer auf das aktuell fokussierte Element ab. Das bedeutet, dass, wenn ein Benutzer ein Zeigegerät verwendet, ein sichtbarer Fokusring um das fokussierte Element erscheint, was einige als aufdringlich empfinden. Die `:focus-visible` Pseudo-Klasse respektiert das selektive Fokus-Anzeigeverhalten der Benutzeragenten, während sie dennoch die Anpassung des Fokus-Indikators ermöglicht.

## Barrierefreiheit

### Eingeschränktes Sehvermögen

Stellen Sie sicher, dass der visuelle Fokus-Indikator von Menschen mit eingeschränktem Sehvermögen gesehen werden kann. Dies wird auch jedem zugutekommen, der einen Bildschirm in einem stark beleuchteten Raum verwendet (wie beispielsweise draußen in der Sonne). [WCAG 2.1 SC 1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) verlangt, dass der visuelle Fokus-Indikator mindestens ein Verhältnis von 3 zu 1 hat.

- Zugängliche visuelle Fokus-Indikatoren: [Verleihen Sie Ihrer Website etwas Fokus! Tipps für das Design nützlicher und benutzbarer Fokus-Indikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es könnte nicht offensichtlich sein, warum der Fokus-Indikator erscheint und verschwindet, wenn eine Person gemischte Eingabeformen verwendet. Für Benutzer mit kognitiven Bedenken oder die weniger technikaffin sind, kann dieses fehlende konsistente Verhalten für interaktive Elemente verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel zeigt drei Paare von Steuerelementen. Jedes Paar besteht aus einem [`text`](/de/docs/Web/HTML/Element/input/text) Eingabefeld und einer Schaltfläche.

- Das erste Paar fügt keine benutzerdefinierten Stile für Fokus-Zustände hinzu und zeigt den Standardfall.
- Das zweite Paar fügt Stile mit der `:focus` Pseudo-Klasse hinzu.
- Das dritte Paar fügt Stile mit der `:focus-visible` Pseudo-Klasse hinzu.

```html
<input type="text" value="Default styles" /><br />
<button>Default styles</button><br />

<input class="focus-only" type="text" value=":focus" /><br />
<button class="focus-only">:focus</button><br />

<input class="focus-visible-only" type="text" value=":focus-visible" /><br />
<button class="focus-visible-only">:focus-visible</button>
```

```css
input,
button {
  margin: 10px;
}

.focus-only:focus {
  outline: 2px solid black;
}

.focus-visible-only:focus-visible {
  outline: 4px dashed darkorange;
}
```

Wenn Sie jedes Element der Reihe nach anklicken, werden Sie sehen, dass, wenn `:focus` verwendet wird, um den Fokusring zu stylen, der UA den Fokusring zeichnet, wenn der Benutzer die Schaltfläche anklickt. Wenn jedoch `:focus-visible` verwendet wird, um den Fokusring zu stylen, zeichnet der UA den Fokusring nicht, wenn der Benutzer die Schaltfläche anklickt, genau wie im Standardfall.

Wenn Sie dann mit der Tabulator-Taste durch jedes Element navigieren, werden Sie sehen, dass in allen drei Fällen – Standard, `:focus` und `:focus-visible` – der UA den Fokusring um die Schaltfläche zieht, wenn der Benutzer mit der Tastatur darauf navigiert.

Dies zeigt, wie `:focus-visible` es einem Designer ermöglicht, der Logik des Browsers zu folgen, wann ein Fokusring angezeigt werden sollte.

{{EmbedLiveSample("Vergleich von :focus und :focus-visible", "100%", 300)}}

### Bereitstellung eines :focus-Fallbacks

Wenn Ihr Code in alten Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, prüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie das gleiche Fokus-Styling darin, jedoch innerhalb einer `:focus` Regel. Beachten Sie, dass selbst wenn Sie überhaupt nichts für `:focus` angeben, alte Browser einfach den nativen Umriss anzeigen, was ausreichen kann.

```html
<button class="button with-fallback" type="button">Button with fallback</button>
<button class="button without-fallback" type="button">
  Button without fallback
</button>
```

```css
.button {
  margin: 10px;
  border: 2px solid darkgray;
  border-radius: 4px;
}

.button:focus-visible {
  /* Draw the focus when :focus-visible is supported */
  outline: 3px solid deepskyblue;
  outline-offset: 3px;
}

@supports not selector(:focus-visible) {
  .button.with-fallback:focus {
    /* Fallback for browsers without :focus-visible support */
    outline: 3px solid deepskyblue;
    outline-offset: 3px;
  }
}
```

{{EmbedLiveSample("Selektives Anzeigen des Fokus-Indikators", "100%", 72)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
- [Ein Polyfill für `:focus-visible`](https://github.com/WICG/focus-visible)
