---
title: ":focus-visible"
slug: Web/CSS/:focus-visible
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`:focus-visible`** Pseudoklasse wird angewendet, wenn ein Element mit der {{CSSxRef(":focus")}} Pseudoklasse übereinstimmt und das UA ({{glossary("User Agent")}}) mittels Heuristik bestimmt, dass der Fokus auf dem Element sichtbar gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokusring" an.)

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-visible.html", "tabbed-shorter")}}

Dieser Selektor ist nützlich, um einen unterschiedlichen Fokus-Indikator basierend auf der Eingabeart des Benutzers bereitzustellen (Maus vs. Tastatur).

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich setzten User-Agent-CSS-Fokus-Stile basierend auf der `:focus` Pseudoklasse und gestalteten die meisten fokussierten Elemente mit einem Fokusring-Umriss. Dies bedeutete, dass alle Elemente, einschließlich aller Links und Schaltflächen, einen Fokusring erhielten, wenn sie fokussiert wurden, was viele als unansehnlich empfanden. Aufgrund des Erscheinungsbildes entfernten einige Autoren die User-Agent-Umrissfokus-Stile. Das Ändern des Fokus-Stils kann die Benutzerfreundlichkeit verringern, während das Entfernen von Fokus-Stilen die Tastaturnavigation für sehende Benutzer unzugänglich macht.

Browser zeigen nicht mehr sichtbar den Fokus an (zum Beispiel durch das Zeichnen eines "Fokusrings"), um jedes Element herum, wenn es den Fokus hat. Stattdessen verwenden sie eine Vielzahl von Heuristiken, um Fokus-Indikatoren nur dann bereitzustellen, wenn sie dem Benutzer am hilfreichsten sind. Zum Beispiel wird, wenn ein Button mit einem Zeigegerät geklickt wird, der Fokus im Allgemeinen nicht visuell angezeigt, aber wenn ein Textfeld, das Benutzereingaben benötigt, den Fokus hat, wird der Fokus angezeigt. Während Fokus-Stile immer erforderlich sind, wenn Benutzer die Seite mit der Tastatur durchsuchen oder wenn der Fokus über Skripte verwaltet wird, sind Fokus-Stile nicht erforderlich, wenn der Benutzer weiß, wo er den Fokus setzt, wie zum Beispiel bei der Verwendung eines Zeigegeräts wie einer Maus oder einem Finger, um den Fokus physisch auf ein Element zu setzen, es sei denn, dieses Element benötigt weiterhin die Aufmerksamkeit des Benutzers.

Die `:focus` Pseudoklasse stimmt immer mit dem aktuell fokussierten Element überein. Die `:focus-visible` Pseudoklasse stimmt ebenfalls mit dem fokussierten Element überein, aber nur wenn der Benutzer informiert werden muss, wo der Fokus derzeit liegt. Da die `:focus-visible` Pseudoklasse das fokussierte Element bei Bedarf auswählt, ermöglicht die Verwendung der `:focus-visible` (anstatt der `:focus` Pseudoklasse) den Autoren, das Erscheinungsbild des Fokus-Indikators zu ändern, ohne zu ändern, wann der Fokus-Indikator erscheint.

Wenn die [`:focus`](/de/docs/Web/CSS/:focus) Pseudoklasse verwendet wird, richtet sie sich immer auf das aktuell fokussierte Element. Dies bedeutet, dass, wenn ein Benutzer ein Zeigegerät verwendet, ein sichtbarer Fokusring um das fokussierte Element erscheint, was einige als aufdringlich empfinden. Die `:focus-visible` Pseudoklasse respektiert das selektive Fokus-Anzeigungsverhalten der Benutzeragenten, während sie dennoch die Anpassung des Fokus-Indikators ermöglicht.

## Barrierefreiheit

### Sehbehinderung

Stellen Sie sicher, dass der visuelle Fokus-Indikator von Menschen mit Sehbehinderungen gesehen werden kann. Dies wird auch jedem zugutekommen, der einen Bildschirm in einem hell beleuchteten Raum (wie draußen in der Sonne) verwendet. [WCAG 2.1 SC 1.4.11 Kontrast von Nicht-Text-Inhalten](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) verlangt, dass der visuelle Fokus-Indikator mindestens 3 zu 1 beträgt.

- Barrierefreie visuelle Fokus-Indikatoren: [Geben Sie Ihrer Website etwas Fokus! Tipps für das Entwerfen nützlicher und benutzbarer Fokus-Indikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es mag nicht offensichtlich sein, warum der Fokus-Indikator erscheint und verschwindet, wenn eine Person gemischte Eingabeformen verwendet. Für Benutzer mit kognitiven Bedenken oder die weniger technikaffin sind, kann dieses fehlende konsistente Verhalten bei interaktiven Elementen verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel präsentiert drei Steuerpaare. Jedes Paar besteht aus einem [`text`](/de/docs/Web/HTML/Element/input/text) Eingabefeld und einem Button.

- Das erste Paar fügt keine benutzerdefinierten Stile für Fokus-Zustände hinzu und zeigt den Standardfall.
- Das zweite Paar fügt Stile mit der `:focus` Pseudoklasse hinzu.
- Das dritte Paar fügt Stile mit der `:focus-visible` Pseudoklasse hinzu.

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

Wenn Sie jedes Element der Reihe nach anklicken, sehen Sie, dass, wenn `:focus` zum Gestalten des Fokusrings verwendet wird, das UA den Fokusring zeichnet, wenn der Benutzer den Button anklickt. Jedoch wenn `:focus-visible` zum Gestalten des Fokusrings verwendet wird, zeichnet das UA den Fokusring nicht, wenn der Benutzer den Button anklickt, genau wie im Standardfall.

Wenn Sie dann durch jedes Element tabben, werden Sie sehen, dass in allen drei Fällen — Standard, `:focus` und `:focus-visible` — das UA den Fokusring um den Button zeichnet, wenn der Benutzer ihn mit der Tastatur ansteuert.

Dies zeigt, wie `:focus-visible` einem Designer ermöglicht, der Logik des Browsers zu folgen, um zu bestimmen, wann ein Fokusring angezeigt werden sollte.

{{EmbedLiveSample("Comparing :focus and :focus-visible", "100%", 300)}}

### Bereitstellen eines :focus Rückfalls

Wenn Ihr Code in alten Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, prüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie die gleichen Fokus-Stile darin, aber innerhalb einer `:focus` Regel. Beachten Sie, dass selbst wenn Sie überhaupt nichts für `:focus` angeben, alte Browser einfach den nativen Umriss anzeigen, was ausreichen kann.

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
  /* Zeichnen Sie den Fokus, wenn :focus-visible unterstützt wird */
  outline: 3px solid deepskyblue;
  outline-offset: 3px;
}

@supports not selector(:focus-visible) {
  .button.with-fallback:focus {
    /* Rückfall für Browser ohne :focus-visible Unterstützung */
    outline: 3px solid deepskyblue;
    outline-offset: 3px;
  }
}
```

{{EmbedLiveSample("Selectively_showing_the_focus_indicator", "100%", 72)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
- [Ein Polyfill für `:focus-visible`](https://github.com/WICG/focus-visible)
