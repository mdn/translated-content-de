---
title: :focus-visible
slug: Web/CSS/:focus-visible
l10n:
  sourceCommit: 4624a9e16d028fa8027e69997b7dfa89a4355b37
---

{{CSSRef}}

Die **`:focus-visible`** Pseudoklasse wird angewendet, wenn ein Element die {{CSSxRef(":focus")}} Pseudoklasse erfüllt und der Benutzeragent ({{Glossary("User_Agent", "User Agent")}}) anhand von Heuristiken feststellt, dass der Fokus auf dem Element offensichtlich sein sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokusring" an.)

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

Dieser Selektor ist nützlich, um einen anderen Fokusanzeiger basierend auf der Eingabemodalität des Benutzers (Maus vs. Tastatur) bereitzustellen.

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich setzten Benutzeragenten CSS-Fokus-Stile nur basierend auf der `:focus` Pseudoklasse, wobei die meisten fokussierten Elemente mit einem Fokusringrand gestylt wurden. Das bedeutete, dass alle Elemente, einschließlich aller Links und Schaltflächen, einen Fokusring erhielten, wenn sie fokussiert waren, was viele als unschön empfanden. Wegen des Aussehens entfernten einige Autoren die Fokusstile der Benutzeragenten. Das Ändern des Fokus-Stils kann die Benutzerfreundlichkeit verringern, während das Entfernen der Fokusstile die Tastaturnavigation für sehende Benutzer unzugänglich macht.

Browser zeigen nun den Fokus nicht mehr sichtbar an (zum Beispiel durch Zeichnen eines "Fokusrings") um jedes Element, wenn es den Fokus hat. Stattdessen verwenden sie eine Vielzahl von Heuristiken, um Fokusindikatoren nur dann bereitzustellen, wenn sie für den Benutzer am hilfreichsten wären. Zum Beispiel wird der Fokus im Allgemeinen nicht visuell angezeigt, wenn eine Schaltfläche mit einem Zeigegerät geklickt wird, aber wenn ein Textfeld, das Benutzereingaben benötigt, den Fokus hat, wird der Fokus angezeigt. Während Fokus-Stile immer erforderlich sind, wenn Benutzer mit der Tastatur auf der Seite navigieren oder wenn der Fokus über Skripts verwaltet wird, sind Fokus-Stile nicht erforderlich, wenn der Benutzer weiß, wo er den Fokus setzen möchte, wie bei der Verwendung eines Zeigegeräts wie einer Maus oder eines Fingers, um den Fokus physisch auf ein Element zu setzen, es sei denn, das Element benötigt weiterhin Benutzeraufmerksamkeit.

Die `:focus` Pseudoklasse stimmt immer mit dem derzeit fokussierten Element überein. Die `:focus-visible` Pseudoklasse stimmt ebenfalls mit dem fokussierten Element überein, aber nur, wenn der Benutzer darüber informiert werden muss, wo der Fokus derzeit liegt. Da die `:focus-visible` Pseudoklasse dann mit dem fokussierten Element übereinstimmt, wenn es notwendig ist, ermöglicht die Verwendung der `:focus-visible` (anstatt der `:focus` Pseudoklasse) den Autoren, das Erscheinungsbild des Fokus-Indikators zu ändern, ohne zu ändern, wann der Fokus-Indikator erscheint.

Wenn die [`:focus`](/de/docs/Web/CSS/:focus) Pseudoklasse verwendet wird, zielt sie immer auf das gerade fokussierte Element ab. Das bedeutet, dass bei der Verwendung eines Zeigegeräts ein sichtbarer Fokusring um das fokussierte Element erscheint, was manche als aufdringlich empfinden. Die `:focus-visible` Pseudoklasse respektiert das selektive Fokusanzeigeverhalten der Benutzeragenten, während die Anpassung des Fokusanzeigers dennoch möglich ist.

## Barrierefreiheit

### Sehbehinderungen

Stellen Sie sicher, dass der visuelle Fokusindikator von Menschen mit Sehbehinderungen gesehen werden kann. Dies wird auch jedem zugutekommen, der einen Bildschirm in einem hell beleuchteten Raum verwendet (wie im Freien in der Sonne). [WCAG 2.1 SC 1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) verlangt, dass der visuelle Fokusindikator mindestens 3 zu 1 beträgt.

- Barrierefreie visuelle Fokusindikatoren: [Geben Sie Ihrer Site etwas Fokus! Tipps für das Design nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es ist möglicherweise nicht offensichtlich, warum der Fokusindikator erscheint und verschwindet, wenn eine Person gemischte Eingabeformen verwendet. Für Benutzer mit kognitiven Bedenken oder die weniger technikaffin sind, kann dieses fehlende konsistente Verhalten für interaktive Elemente verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel präsentiert drei Paare von Steuerelementen. Jedes Paar besteht aus einem[`text`](/de/docs/Web/HTML/Reference/Elements/input/text) Eingabefeld und einer Schaltfläche.

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

Wenn Sie jedes Element der Reihe nach anklicken, werden Sie feststellen, dass beim Verwenden von `:focus` zum Stylen des Fokusrings der Benutzeragent den Fokusring zeichnet, wenn der Benutzer die Schaltfläche anklickt. Wenn jedoch `:focus-visible` verwendet wird, um den Fokusring zu stylen, zeichnet der Benutzeragent den Fokusring nicht, wenn der Benutzer die Schaltfläche anklickt, genauso wie im Standardfall.

Wenn Sie dann durch jedes Element tabben, werden Sie feststellen, dass in allen drei Fällen — Standard, `:focus` und `:focus-visible` — der Benutzeragent den Fokusring um die Schaltfläche zeichnet, wenn der Benutzer mit der Tastatur darauf navigiert.

Dies zeigt, wie `:focus-visible` einem Designer ermöglicht, der Logik des Browsers zu folgen, um zu bestimmen, wann ein Fokusring angezeigt werden sollte.

{{EmbedLiveSample("Vergleich von :focus und :focus-visible", "100%", 300)}}

### Bereitstellung eines :focus Fallbacks

Wenn Ihr Code in alten Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, überprüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie das gleiche Fokusstyling darin, jedoch innerhalb einer `:focus` Regel. Beachten Sie, dass selbst wenn Sie nichts für `:focus` spezifizieren, alte Browser einfach den nativen Umriss anzeigen, was ausreichen kann.

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
