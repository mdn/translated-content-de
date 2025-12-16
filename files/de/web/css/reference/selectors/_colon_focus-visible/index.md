---
title: :focus-visible
slug: Web/CSS/Reference/Selectors/:focus-visible
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`:focus-visible`** Pseudo-Klasse gilt, während ein Element die {{CSSxRef(":focus")}} Pseudo-Klasse erfüllt und die UA ({{Glossary("User_Agent", "User Agent")}}) anhand von Heuristiken feststellt, dass der Fokus auf dem Element erkennbar gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokus-Ring" an.)

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

Dieser Selektor ist nützlich, um einen unterschiedlichen Fokusindikator basierend auf der Eingabemodalität des Benutzers (Maus vs. Tastatur) bereitzustellen.

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich wurde das Fokus-Styling in der Benutzer-Agent-CSS nur auf der Grundlage der `:focus` Pseudo-Klasse gesetzt, wobei die meisten fokussierten Elemente mit einem Fokus-Ring-Umriss gestaltet wurden. Das bedeutete, dass alle Elemente, einschließlich aller Links und Schaltflächen, einen Fokus-Ring erhielten, wenn sie fokussiert wurden, was vielen als unschön erschien. Wegen des Aussehens entfernten einige Autoren die Fokus-Styling des Benutzer-Agents. Eine Änderung des Fokus-Stils kann die Benutzerfreundlichkeit verringern, während das Entfernen von Fokus-Stilen die Tastaturnavigation für sehende Benutzer unzugänglich macht.

Browser zeigen nicht mehr sichtbar den Fokus an (wie durch Zeichnen eines "Fokus-Rings") um jedes Element, wenn es den Fokus hat. Stattdessen verwenden sie eine Vielzahl von Heuristiken, um Fokusindikatoren nur dann bereitzustellen, wenn sie für den Benutzer am hilfreichsten sind. Beispielsweise, wenn eine Schaltfläche mit einem Zeigegerät angeklickt wird, wird der Fokus in der Regel nicht visuell angezeigt, aber wenn ein Textfeld, das Benutzereingaben benötigt, den Fokus hat, wird der Fokus angezeigt. Während Fokus-Stile immer erforderlich sind, wenn Benutzer die Seite mit der Tastatur navigieren oder wenn der Fokus über Skripte verwaltet wird, sind Fokus-Stile nicht erforderlich, wenn der Benutzer weiß, wo er den Fokus setzt, wie wenn er ein Zeigegerät wie eine Maus oder einen Finger verwendet, um den Fokus physisch auf ein Element zu setzen, es sei denn, dieses Element benötigt weiterhin die Aufmerksamkeit des Benutzers.

Die `:focus` Pseudo-Klasse stimmt immer mit dem aktuell fokussierten Element überein. Die `:focus-visible` Pseudo-Klasse entspricht ebenfalls dem fokussierten Element, aber nur, wenn der Benutzer darüber informiert werden muss, wo sich der Fokus derzeit befindet. Da die `:focus-visible` Pseudo-Klasse das fokussierte Element bei Bedarf trifft, ermöglicht die Verwendung von `:focus-visible` (anstelle der `:focus` Pseudo-Klasse) den Autoren, das Erscheinungsbild des Fokusindikators zu ändern, ohne zu ändern, wann der Fokusindikator erscheint.

Wenn die {{cssxref(":focus")}} Pseudo-Klasse verwendet wird, zielt sie immer auf das aktuell fokussierte Element. Dies bedeutet, dass ein sichtbarer Fokus-Ring erscheint, wenn ein Benutzer ein Zeigegerät verwendet, um den Fokus zu setzen, was manche als störend empfinden. Die `:focus-visible` Pseudo-Klasse respektiert das selektive Fokus-Anzeigeverhalten der Benutzer-Agenten und ermöglicht dennoch eine Anpassung des Fokusindikators.

## Barrierefreiheit

### Eingeschränktes Sehvermögen

Stellen Sie sicher, dass der visuelle Fokusindikator von Personen mit eingeschränktem Sehvermögen gesehen werden kann. Dies kommt auch allen zugute, die einen Bildschirm in einem hell beleuchteten Raum verwenden (wie draußen in der Sonne). [WCAG 2.1 SC 1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) verlangt, dass der visuelle Fokusindikator ein Kontrastverhältnis von mindestens 3 zu 1 hat.

- Zugängliche visuelle Fokusindikatoren: [Geben Sie Ihrer Site etwas Fokus! Tipps für die Gestaltung nützlicher und benutzerfreundlicher Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es ist möglicherweise nicht offensichtlich, warum der Fokusindikator erscheint und verschwindet, wenn eine Person gemischte Eingabeformen verwendet. Für Benutzer mit kognitiven Bedenken oder die weniger technisch versiert sind, kann dieses fehlende konsistente Verhalten für interaktive Elemente verwirrend sein.

## Beispiele

### Vergleichen von :focus und :focus-visible

Dieses Beispiel präsentiert drei Paare von Bedienelementen. Jedes Paar besteht aus einer [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) Eingabe und einem Button.

- Das erste Paar fügt keine benutzerdefinierten Stile für Fokuszustände hinzu und zeigt den Standardfall.
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

Wenn Sie jedes Element der Reihe nach anklicken, werden Sie feststellen, dass, wenn `:focus` verwendet wird, um den Fokus-Ring zu stylen, der UA den Fokus-Ring zeichnet, wenn der Benutzer auf die Schaltfläche klickt. Wenn jedoch `:focus-visible` verwendet wird, um den Fokus-Ring zu stylen, zeichnet der UA den Fokus-Ring nicht, wenn der Benutzer auf die Schaltfläche klickt, genau wie im Standardfall.

Wenn Sie dann durch jedes Element tabben, werden Sie sehen, dass in allen drei Fällen — Standard, `:focus` und `:focus-visible` — der UA den Fokus-Ring um die Schaltfläche zeichnet, wenn der Benutzer mit der Tastatur zu ihr navigiert.

Dies zeigt, wie `:focus-visible` einem Designer ermöglicht, der Logik des Browsers zu folgen, um zu bestimmen, wann ein Fokus-Ring gezeigt werden sollte.

{{EmbedLiveSample("Comparing :focus and :focus-visible", "100%", 300)}}

### Bereitstellung eines :focus Fallbacks

Wenn Ihr Code in alten Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, überprüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie dieselbe Fokus-Styling darin, jedoch innerhalb einer `:focus` Regel. Beachten Sie, dass selbst wenn Sie überhaupt nichts für `:focus` spezifizieren, alte Browser einfach das native Outline anzeigen, was ausreichen kann.

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
