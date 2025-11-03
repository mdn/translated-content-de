---
title: :focus-visible
slug: Web/CSS/Reference/Selectors/:focus-visible
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:focus-visible`** Pseudo-Klasse wird angewendet, wenn ein Element mit der {{CSSxRef(":focus")}} Pseudo-Klasse übereinstimmt und der Benutzer-Agent ({{Glossary("User_Agent", "User Agent")}}) durch Heuristiken bestimmt, dass der Fokus auf dem Element sichtbar gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokusring" an.)

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

Dieser Selektor ist nützlich, um einen anderen Fokus-Indikator basierend auf der Eingabemethode des Benutzers (Maus vs. Tastatur) bereitzustellen.

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich setzten Benutzer-Agenten im CSS Fokus-Stile basierend nur auf der `:focus` Pseudo-Klasse und stylierten die meisten fokussierten Elemente mit einem Fokusring-Umriss. Das bedeutete, dass alle Elemente, einschließlich aller Links und Schaltflächen, einen Fokusring erhielten, wenn sie fokussiert waren, was viele als unschön empfanden. Aufgrund dieser Darstellung entfernten einige Autoren die vom Benutzer-Agenten vorgegebenen Fokusstile. Das Ändern von Fokus-Stilen kann die Benutzerfreundlichkeit verringern, während das Entfernen von Fokus-Stilen die Tastaturnavigation für sehende Benutzer unzugänglich macht.

Browser zeigen den Fokus (wie etwa das Zeichnen eines "Fokusrings") nicht mehr sichtbar um jedes Element an, wenn es fokussiert ist. Stattdessen verwenden sie verschiedene Heuristiken, um Fokus-Indikatoren nur dann bereitzustellen, wenn sie für den Benutzer am hilfreichsten sind. Beispielsweise wird beim Klicken auf eine Schaltfläche mit einem Zeigegerät der Fokus in der Regel nicht visuell angezeigt, aber wenn ein Textfeld, das Benutzereingaben benötigt, den Fokus hat, wird der Fokus angezeigt. Während Fokus-Stile immer erforderlich sind, wenn Benutzer mit der Tastatur durch die Seite navigieren oder der Fokus über Skripte verwaltet wird, sind Fokus-Stile nicht erforderlich, wenn der Benutzer weiß, wo er den Fokus setzt, etwa wenn er ein Zeigegerät wie eine Maus oder einen Finger verwendet, um den Fokus physisch auf ein Element zu setzen, es sei denn, dieses Element benötigt weiterhin die Aufmerksamkeit des Benutzers.

Die `:focus` Pseudo-Klasse stimmt immer mit dem aktuell fokussierten Element überein. Die `:focus-visible` Pseudo-Klasse stimmt ebenfalls mit dem fokussierten Element überein, aber nur, wenn der Benutzer darüber informiert werden muss, wo der Fokus aktuell ist. Da die `:focus-visible` Pseudo-Klasse das fokussierte Element bei Bedarf anzeigt, können Autoren mit der Verwendung der `:focus-visible` (anstatt der `:focus` Pseudo-Klasse) das Erscheinungsbild des Fokus-Indikators ändern, ohne zu ändern, wann der Fokus-Indikator erscheint.

Wenn die [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) Pseudo-Klasse verwendet wird, zielt sie immer auf das aktuell fokussierte Element ab. Das bedeutet, dass bei Verwendung eines Zeigegeräts ein sichtbarer Fokusring um das fokussierte Element erscheint, was einige als aufdringlich empfinden. Die `:focus-visible` Pseudo-Klasse respektiert das selektive Fokus-Anzeigeverhalten der Benutzer-Agenten, während sie dennoch die Anpassung des Fokus-Indikators ermöglicht.

## Barrierefreiheit

### Schwache Sehkraft

Stellen Sie sicher, dass der visuelle Fokus-Indikator von Menschen mit schwacher Sehkraft gesehen werden kann. Dies kommt auch jedem zugute, der einen Bildschirm in einem hell beleuchteten Raum (wie draußen in der Sonne) verwendet. [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) erfordert, dass der visuelle Fokus-Indikator mindestens 3 zu 1 beträgt.

- Zugängliche visuelle Fokus-Indikatoren: [Gebt Ihrer Seite etwas Fokus! Tipps für die Gestaltung von nützlichen und benutzerfreundlichen Fokus-Indikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es mag nicht offensichtlich sein, warum der Fokus-Indikator erscheint und verschwindet, wenn eine Person gemischte Eingaben verwendet. Für Benutzer mit kognitiven Bedenken oder weniger technischer Erfahrung kann dieses inkonsistente Verhalten interaktiver Elemente verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel zeigt drei Paare von Steuerelementen. Jedes Paar besteht aus einem [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) Eingabefeld und einer Schaltfläche.

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

Wenn Sie jedes Element der Reihe nach anklicken, werden Sie sehen, dass, wenn `:focus` verwendet wird, um den Fokusring zu stylen, der Benutzer-Agent den Fokusring zeichnet, wenn der Benutzer auf die Schaltfläche klickt. Wenn jedoch `:focus-visible` verwendet wird, um den Fokusring zu stylen, zeichnet der Benutzer-Agent den Fokusring nicht, wenn der Benutzer auf die Schaltfläche klickt, genau wie im Standardfall.

Wenn Sie dann durch jedes Element tabben, werden Sie sehen, dass in allen drei Fällen — Standard, `:focus` und `:focus-visible` — der Benutzer-Agent den Fokusring um die Schaltfläche zeichnet, wenn der Benutzer sie mit der Tastatur erreicht.

Das zeigt, wie `:focus-visible` einem Designer ermöglicht, der Logik des Browsers zu folgen, um zu bestimmen, wann ein Fokusring angezeigt werden sollte.

{{EmbedLiveSample("Comparing :focus and :focus-visible", "100%", 300)}}

### Bereitstellen eines :focus Fallbacks

Wenn Ihr Code in älteren Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, überprüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie die gleichen Fokus-Stile darin, aber innerhalb einer `:focus` Regel. Beachten Sie, dass alte Browser auch dann den nativen Fokus-Umriss anzeigen, wenn Sie überhaupt nichts für `:focus` angeben, was ausreichend sein kann.

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

{{EmbedLiveSample("Selektivsichtbare Fokus-Indikation", "100%", 72)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
