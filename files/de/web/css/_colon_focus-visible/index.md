---
title: :focus-visible
slug: Web/CSS/:focus-visible
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`:focus-visible`** Pseudoklasse trifft zu, während ein Element der {{CSSxRef(":focus")}} Pseudoklasse entspricht und der UA ({{Glossary("User_Agent", "User Agent")}}) mittels Heuristiken bestimmt, dass der Fokus auf dem Element sichtbar gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokusrahmen" an.)

{{InteractiveExample("CSS Demo: :focus-visible", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:focus-visible {
  outline: 2px solid crimson;
  border-radius: 3px;
}

select:focus-visible {
  border: 2px dashed crimson;
  border-radius: 3px;
  outline: none;
}
```

```html interactive-example
<form>
  <p>Which flavor would you like to order?</p>
  <label>Full Name: <input name="firstName" type="text" /></label>
  <label
    >Flavor:
    <select name="flavor">
      <option>Cherry</option>
      <option>Green Tea</option>
      <option>Moose Tracks</option>
      <option>Mint Chip</option>
    </select>
  </label>
</form>
```

Dieser Selektor ist nützlich, um je nach Eingabemodul des Benutzers (Maus vs. Tastatur) einen anderen Fokusindikator bereitzustellen.

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich setzten User-Agent-CSS-Fokusstile basierend nur auf der `:focus` Pseudoklasse, wobei die meisten fokussierten Elemente mit einem Fokusrahmen umrandet wurden. Das bedeutete, dass alle Elemente, einschließlich aller Links und Schaltflächen, einen Fokusrahmen erhielten, wenn sie fokussiert waren, was viele als unästhetisch empfanden. Wegen dieser Erscheinung entfernten einige Autoren die Fokus-Stile des User-Agents. Die Änderung des Fokus-Stils kann die Benutzerfreundlichkeit verringern, während das Entfernen der Fokus-Stile die Tastaturnavigation für sehende Benutzer unzugänglich macht.

Browser zeigen nun nicht mehr sichtbar den Fokus an (wie durch das Zeichnen eines "Fokusrahmens"), um jedes Element, wenn es den Fokus hat. Stattdessen verwenden sie verschiedene Heuristiken, um Fokusindikatoren nur dann bereitzustellen, wenn sie für den Benutzer am hilfreichsten sind. Zum Beispiel wird, wenn eine Schaltfläche mit einem Zeigegerät geklickt wird, der Fokus im Allgemeinen nicht visuell angezeigt, aber wenn ein Textfeld, das Benutzereingaben benötigt, den Fokus hat, wird der Fokus angezeigt. Während Fokus-Stile immer erforderlich sind, wenn Benutzer die Seite mit der Tastatur navigieren oder der Fokus über Skripte verwaltet wird, sind Fokus-Stile nicht erforderlich, wenn der Benutzer weiß, wo er den Fokus setzt, wie etwa bei der Verwendung eines Zeigegeräts wie einer Maus oder einem Finger, um den Fokus physisch auf ein Element zu setzen, es sei denn, dieses Element benötigt weiterhin die Aufmerksamkeit des Benutzers.

Die `:focus` Pseudoklasse trifft immer auf das derzeit fokussierte Element zu. Die `:focus-visible` Pseudoklasse passt ebenfalls auf das fokussierte Element, aber nur, wenn der Benutzer informiert werden muss, wo sich der Fokus gerade befindet. Da die `:focus-visible` Pseudoklasse das fokussierte Element erfasst, wenn es notwendig ist, können Autoren durch die Verwendung von `:focus-visible` (anstatt der `:focus` Pseudoklasse) das Erscheinungsbild des Fokusindikators ändern, ohne zu ändern, wann der Fokusindikator erscheint.

Wenn die [`:focus`](/de/docs/Web/CSS/:focus) Pseudoklasse verwendet wird, zielt sie immer auf das aktuell fokussierte Element ab. Das bedeutet, dass wenn ein Benutzer ein Zeigegerät einsetzt, ein sichtbarer Fokusrahmen um das fokussierte Element erscheint, was einige als aufdringlich empfinden. Die `:focus-visible` Pseudoklasse respektiert das selektive Fokusanzeigeverhalten der User-Agents und ermöglicht dennoch die Anpassung des Fokusindikators.

## Barrierefreiheit

### Sehbehinderung

Stellen Sie sicher, dass der visuelle Fokusindikator für Menschen mit Sehbehinderung sichtbar ist. Dies wird auch jedem zugutekommen, der einen Bildschirm in einem hell beleuchteten Raum verwendet (wie draußen in der Sonne). [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) erfordert, dass der visuelle Fokusindikator mindestens 3 zu 1 beträgt.

- Zugängliche visuelle Fokusindikatoren: [Geben Sie Ihrer Website etwas Fokus! Tipps zum Entwerfen nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es ist möglicherweise nicht offensichtlich, warum der Fokusindikator erscheint und verschwindet, wenn eine Person gemischte Formen der Eingabe verwendet. Für Benutzer mit kognitiven Bedenken oder die weniger technologisch versiert sind, kann dieses inkonsistente Verhalten bei interaktiven Elementen verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel präsentiert drei Paare von Steuerelementen. Jedes Paar besteht aus einem [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) Eingabefeld und einer Schaltfläche.

- Das erste Paar fügt keine benutzerdefinierten Stile für Fokuszustände hinzu und zeigt den Standardfall.
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

Wenn Sie auf jedes Element der Reihe nach klicken, werden Sie sehen, dass, wenn `:focus` verwendet wird, um den Fokusrahmen zu gestalten, der UA den Fokusrahmen zeichnet, wenn der Benutzer auf die Schaltfläche klickt. Wenn jedoch `:focus-visible` verwendet wird, um den Fokusrahmen zu gestalten, zeichnet der UA den Fokusrahmen nicht, wenn der Benutzer auf die Schaltfläche klickt, genauso wie im Standardfall.

Wenn Sie dann durch jedes Element tabben, werden Sie sehen, dass in allen drei Fällen — Standard, `:focus` und `:focus-visible` — der UA den Fokusrahmen um die Schaltfläche zeichnet, wenn der Benutzer mit der Tastatur zu ihr navigiert.

Dies zeigt, wie `:focus-visible` einem Designer ermöglicht der Logik des Browsers zu folgen, wann ein Fokusrahmen angezeigt werden sollte.

{{EmbedLiveSample("Comparing :focus and :focus-visible", "100%", 300)}}

### Bereitstellung eines Fallbacks für :focus

Wenn Ihr Code in alten Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, prüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie das gleiche Fokusstyling darin, jedoch innerhalb einer `:focus` Regel. Beachten Sie, dass auch wenn Sie gar nichts für `:focus` angeben, alte Browser einfach die native Umrandung anzeigen, was ausreichend sein kann.

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

{{EmbedLiveSample("Selectively_showing_the_focus_indicator", "100%", 72)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
- [Ein Polyfill für `:focus-visible`](https://github.com/WICG/focus-visible)
