---
title: ":focus-visible"
slug: Web/CSS/:focus-visible
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`:focus-visible`** Pseudoklasse wird angewendet, wenn ein Element der Pseudoklasse {{CSSxRef(":focus")}} entspricht und der UA ([User Agent](/de/docs/Glossary/User_Agent)) mithilfe von Heuristiken bestimmt, dass der Fokus auf dem Element sichtbar gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokusring" an.)

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-visible.html", "tabbed-shorter")}}

Dieser Selektor ist nützlich, um einen unterschiedlichen Fokusindikator basierend auf dem Eingabemodell des Benutzers (Maus vs. Tastatur) bereitzustellen.

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich setzten User-Agent-CSS Fokusstile nur basierend auf der `:focus`-Pseudoklasse und stylten die meisten fokussierten Elemente mit einer Fokusringumrandung. Das bedeutete, dass alle Elemente, einschließlich aller Links und Schaltflächen, einen Fokusring erhielten, was viele als unschön empfanden. Aufgrund des Erscheinungsbildes entfernten einige Autoren die User-Agent-Fokus-Stile. Das Ändern des Fokus-Stils kann die Benutzerfreundlichkeit verringern, während das Entfernen von Fokus-Stilen die Tastaturnavigation für sehende Benutzer unzugänglich macht.

Browser zeigen den Fokus (z. B. durch Zeichnen eines "Fokusrings") nicht mehr sichtbar um jedes Element an, wenn es den Fokus hat. Stattdessen verwenden sie verschiedene Heuristiken, um nur dann Fokusindikatoren bereitzustellen, wenn es für den Benutzer am hilfreichsten ist. Wenn beispielsweise eine Schaltfläche mit einem Zeigegerät geklickt wird, wird der Fokus im Allgemeinen nicht visuell angezeigt, aber wenn ein Textfeld, das Benutzereingaben benötigt, den Fokus erhält, wird der Fokus angezeigt. Während Fokusstile immer erforderlich sind, wenn Benutzer die Seite mit der Tastatur navigieren oder wenn der Fokus über Skripte verwaltet wird, sind Fokusstile nicht erforderlich, wenn der Benutzer weiß, wo er den Fokus setzt, z. B. wenn er ein Zeigegerät wie eine Maus oder einen Finger verwendet, um den Fokus physisch auf ein Element zu setzen, es sei denn, dieses Element benötigt weiterhin die Aufmerksamkeit des Benutzers.

Die `:focus`-Pseudoklasse entspricht immer dem aktuell fokussierten Element. Die `:focus-visible`-Pseudoklasse entspricht ebenfalls dem fokussierten Element, jedoch nur, wenn der Benutzer darüber informiert werden muss, wo der Fokus sich derzeit befindet. Da die `:focus-visible`-Pseudoklasse das fokussierte Element benötigt, können Autoren mit der Verwendung von `:focus-visible` (anstelle der `:focus`-Pseudoklasse) das Erscheinungsbild des Fokusindikators ändern, ohne zu ändern, wann der Fokusindikator erscheint.

Wenn die [`:focus`](/de/docs/Web/CSS/:focus)-Pseudoklasse verwendet wird, zielt sie immer auf das aktuell fokussierte Element ab. Das bedeutet, dass, wenn ein Benutzer ein Zeigegerät verwendet, ein sichtbarer Fokusring um das fokussierte Element erscheint, was manche als aufdringlich empfinden. Die `:focus-visible`-Pseudoklasse respektiert das selektive Fokusindikationsverhalten der User Agents, während sie dennoch die Anpassung des Fokusindikators ermöglicht.

## Barrierefreiheit

### Sehbehinderung

Stellen Sie sicher, dass der visuelle Fokusindikator für Menschen mit Sehbehinderung sichtbar ist. Davon profitieren auch alle, die einen Bildschirm an einem hell beleuchteten Ort (wie draußen in der Sonne) verwenden. [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) erfordert, dass der visuelle Fokusindikator mindestens 3 zu 1 beträgt.

- Zugängliche visuelle Fokusindikatoren: [Geben Sie Ihrer Website etwas Fokus! Tipps für das Design von nützlichen und benutzerfreundlichen Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es kann nicht offensichtlich sein, warum der Fokusindikator erscheint und verschwindet, wenn eine Person gemischte Eingabemethoden verwendet. Für Benutzer mit kognitiven Bedenken oder die weniger technikaffin sind, kann dieses Fehlen konsistenten Verhaltens für interaktive Elemente verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel zeigt drei Paare von Bedienelementen. Jedes Paar besteht aus einem [`text`](/de/docs/Web/HTML/Element/input/text)-Eingabefeld und einer Schaltfläche.

- Das erste Paar fügt keine benutzerdefinierten Stile für Fokuszustände hinzu und zeigt den Standardfall.
- Das zweite Paar fügt Stile mithilfe der `:focus`-Pseudoklasse hinzu.
- Das dritte Paar fügt Stile mithilfe der `:focus-visible`-Pseudoklasse hinzu.

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

Wenn Sie jedes Element der Reihe nach anklicken, sehen Sie, dass der UA den Fokusring zeichnet, wenn `:focus` verwendet wird, um den Fokusring zu stylen, wenn der Benutzer die Schaltfläche klickt. Wenn jedoch `:focus-visible` verwendet wird, um den Fokusring zu stylen, zeichnet der UA den Fokusring nicht, wenn der Benutzer die Schaltfläche klickt, genau wie im Standardfall.

Wenn Sie dann durch jedes Element tabben, sehen Sie, dass der UA in allen drei Fällen – Standard, `:focus` und `:focus-visible` – den Fokusring um die Schaltfläche zeichnet, wenn der Benutzer sie mit der Tastatur navigiert.

Dies zeigt, wie `:focus-visible` einem Designer ermöglicht, der Logik des Browsers zu folgen, um zu bestimmen, wann ein Fokusring angezeigt werden sollte.

{{EmbedLiveSample("Vergleich von :focus und :focus-visible", "100%", 300)}}

### Bereitstellung eines :focus-Fallbacks

Wenn Ihr Code in alten Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, überprüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie die gleichen Fokusstile darin, aber innerhalb einer `:focus`-Regel. Beachten Sie, dass alte Browser, selbst wenn Sie gar nichts für `:focus` angeben, einfach den nativen Umriss anzeigen, was ausreichend sein kann.

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

{{EmbedLiveSample("Selektives Anzeigen des Fokusindikators", "100%", 72)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
- [Ein Polyfill für `:focus-visible`](https://github.com/WICG/focus-visible)
