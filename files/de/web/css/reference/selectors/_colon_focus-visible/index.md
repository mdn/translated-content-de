---
title: :focus-visible
slug: Web/CSS/Reference/Selectors/:focus-visible
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Die **`:focus-visible`** Pseudo-Klasse gilt, während ein Element die {{CSSxRef(":focus")}} Pseudo-Klasse erfüllt und der UA ({{Glossary("User_Agent", "User Agent")}}) über Heuristiken bestimmt, dass der Fokus auf dem Element erkennbar sein sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokusring" an.)

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

Dieser Selektor ist nützlich, um je nach Eingabemodalität des Benutzers (Maus vs. Tastatur) einen anderen Fokusindikator bereitzustellen.

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich legte das User-Agent-CSS Fokus-Stile nur basierend auf der `:focus` Pseudo-Klasse fest und stilisierte die meisten fokussierten Elemente mit einer Fokusringumrandung. Dies bedeutete, dass alle Elemente, einschließlich aller Links und Schaltflächen, bei Fokus einen Fokusring erhielten, was viele als unästhetisch empfanden. Aufgrund dieses Aussehens entfernten einige Autoren die User-Agent-Umrissfokus-Stile. Das Ändern des Fokus-Stils kann die Benutzerfreundlichkeit verringern, während das Entfernen von Fokus-Stilen die Tastaturnavigation für sehende Benutzer unzugänglich macht.

Browser zeigen nicht mehr sichtbar den Fokus (wie das Zeichnen eines "Fokusrings") um jedes fokussierte Element an. Stattdessen verwenden sie eine Vielzahl von Heuristiken, um Fokusindikatoren nur dann bereitzustellen, wenn dies für den Benutzer am hilfreichsten ist. Zum Beispiel wird beim Klicken auf eine Schaltfläche mit einem Zeigegerät der Fokus in der Regel nicht visuell angezeigt, aber wenn ein Textfeld in den Fokus gerät, das Benutzereingaben benötigt, wird der Fokus angezeigt. Während Fokus-Stile immer erforderlich sind, wenn Benutzer mit der Seite über die Tastatur navigieren oder wenn der Fokus über Skripte verwaltet wird, sind Fokus-Stile nicht erforderlich, wenn der Benutzer weiß, wo er den Fokus setzt, z.B. wenn er ein Zeigegerät wie eine Maus oder einen Finger verwendet, um den Fokus physisch auf ein Element zu setzen, es sei denn, dieses Element benötigt weiterhin die Aufmerksamkeit des Benutzers.

Die `:focus` Pseudo-Klasse entspricht immer dem derzeit fokussierten Element. Die `:focus-visible` Pseudo-Klasse entspricht ebenfalls dem fokussierten Element, jedoch nur, wenn der Benutzer informiert werden muss, wo der Fokus derzeit liegt. Da die `:focus-visible` Pseudo-Klasse das fokussierte Element bei Bedarf auswählt, ermöglicht die Verwendung von `:focus-visible` (anstelle der `:focus` Pseudo-Klasse) es Autoren, das Erscheinungsbild des Fokusindikators zu ändern, ohne zu ändern, wann der Fokusindikator erscheint.

Wenn die [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) Pseudo-Klasse verwendet wird, zielt sie immer auf das derzeit fokussierte Element ab. Das bedeutet, dass bei der Verwendung eines Zeigegeräts ein sichtbarer Fokusring um das fokussierte Element erscheint, was einige als aufdringlich empfinden. Die `:focus-visible` Pseudo-Klasse respektiert das selektive Fokusanzeigeverhalten der User Agents, während sie dennoch die Anpassung des Fokusindikators erlaubt.

## Barrierefreiheit

### Einschränkungen beim Sehen

Stellen Sie sicher, dass der visuelle Fokusindikator von Menschen mit eingeschränktem Sehvermögen gesehen werden kann. Dies kommt auch jedem zugute, der einen Bildschirm in einem hell beleuchteten Raum verwendet (wie draußen in der Sonne). [WCAG 2.1 SC 1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) verlangt, dass der visuelle Fokusindikator mindestens ein Verhältnis von 3 zu 1 hat.

- Zugängliche visuelle Fokusindikatoren: [Geben Sie Ihrer Website etwas Fokus! Tipps für das Design nützlicher und benutzerfreundlicher Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es ist möglicherweise nicht offensichtlich, warum der Fokusindikator erscheint und verschwindet, wenn eine Person gemischte Eingabeformen verwendet. Für Benutzer mit kognitiven Bedenken oder die technologisch weniger versiert sind, kann dieses Mangel an konsistentem Verhalten für interaktive Elemente verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel zeigt drei Paare von Steuerelementen. Jedes Paar besteht aus einem [`text`](/de/docs/Web/HTML/Reference/Elements/input/text)-Eingabefeld und einer Schaltfläche.

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

Wenn Sie nacheinander auf jedes Element klicken, sehen Sie, dass der UA beim Verwenden von `:focus` zum Stylen des Fokusrings diesen zieht, wenn der Benutzer auf die Schaltfläche klickt. Wenn jedoch `:focus-visible` verwendet wird, zieht der UA den Fokusring nicht, wenn der Benutzer auf die Schaltfläche klickt, genau wie im Standardfall.

Wenn Sie dann durch jedes Element tabben, sehen Sie, dass der UA in allen drei Fällen — Standard, `:focus` und `:focus-visible` — den Fokusring um die Schaltfläche zieht, wenn der Benutzer mit der Tastatur navigiert.

Dies zeigt, wie `:focus-visible` einem Designer ermöglicht, der Logik des Browsers zu folgen, um zu bestimmen, wann ein Fokusring angezeigt werden sollte.

{{EmbedLiveSample("Comparing :focus and :focus-visible", "100%", 300)}}

### Bereitstellung eines :focus-Fallbacks

Wenn Ihr Code in alten Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, prüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie die gleiche Fokus-Stilgebung darin, jedoch innerhalb einer `:focus`-Regel. Beachten Sie, dass alte Browser, auch wenn Sie überhaupt nichts für `:focus` angeben, einfach den nativen Umriss anzeigen, der ausreichend sein kann.

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
