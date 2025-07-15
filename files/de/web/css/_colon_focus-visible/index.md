---
title: :focus-visible
slug: Web/CSS/:focus-visible
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:focus-visible`** Pseudoklasse wird angewandt, wenn ein Element die {{CSSxRef(":focus")}} Pseudoklasse erfüllt und der UA ({{Glossary("User_Agent", "User Agent")}}) über Heuristiken bestimmt, dass der Fokus auf dem Element sichtbar gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokusring" an.)

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

Dieser Selektor ist nützlich, um einen unterschiedlichen Fokusindikator basierend auf der Eingabemodalität des Benutzers bereitzustellen (Maus vs. Tastatur).

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich legte das Benutzer-Agent-CSS Fokus-Stile nur basierend auf der `:focus` Pseudoklasse fest, indem es die meisten fokussierten Elemente mit einem Fokusring-Umriss stylte. Das bedeutete, dass alle Elemente, einschließlich aller Links und Buttons, einen Fokusring hatten, was viele als unschön empfanden. Aufgrund des Erscheinungsbildes entfernten einige Autoren die Benutzer-Agent-Umrissfokus-Stile. Das Ändern des Fokus-Stils kann die Benutzerfreundlichkeit verringern, während das Entfernen von Fokus-Stilen die Tastaturnavigation für sehende Benutzer unzugänglich macht.

Browser zeigen den Fokus (wie durch Zeichnen eines "Fokusrings") nicht mehr um jedes Element an, wenn es den Fokus hat. Stattdessen verwenden sie eine Vielzahl von Heuristiken, um Fokusindikatoren nur dann zur Verfügung zu stellen, wenn sie für den Benutzer am hilfreichsten sind. Beispielsweise wird, wenn eine Schaltfläche mit einem Zeigegerät geklickt wird, der Fokus im Allgemeinen nicht visuell angezeigt, aber wenn ein Textfeld, das Benutzereingaben benötigt, den Fokus hat, wird der Fokus angezeigt. Während Fokus-Stile immer erforderlich sind, wenn Benutzer mit der Tastatur auf der Seite navigieren oder wenn der Fokus über Skripte verwaltet wird, sind Fokus-Stile nicht erforderlich, wenn der Benutzer weiß, wo er den Fokus setzt, wie etwa bei der Verwendung eines Zeigegeräts wie einer Maus oder eines Fingers, um physisch den Fokus auf ein Element zu setzen, es sei denn, dieses Element benötigt weiterhin die Aufmerksamkeit des Benutzers.

Die `:focus` Pseudoklasse passt immer zum aktuell fokussierten Element. Die `:focus-visible` Pseudoklasse passt auch zum fokussierten Element, jedoch nur, wenn der Nutzer darüber informiert werden muss, wo der Fokus derzeit ist. Da die `:focus-visible` Pseudoklasse das fokussierte Element dann erfasst, wenn es notwendig ist, ermöglicht die Verwendung von `:focus-visible` (anstelle der `:focus` Pseudoklasse) es den Autoren, das Erscheinungsbild des Fokusindikators zu ändern, ohne zu ändern, wann der Fokusindikator erscheint.

Wenn die [`:focus`](/de/docs/Web/CSS/:focus) Pseudoklasse verwendet wird, zielt sie immer auf das aktuell fokussierte Element ab. Dies bedeutet, dass ein sichtbarer Fokusring um das fokussierte Element erscheint, wenn der Benutzer ein Zeigegerät verwendet, was einige als aufdringlich empfinden. Die `:focus-visible` Pseudoklasse respektiert das selektive Fokusanzeige-Verhalten der Benutzeragenten, während sie dennoch die Anpassung des Fokusindikators ermöglicht.

## Barrierefreiheit

### Eingeschränkte Sehfähigkeit

Stellen Sie sicher, dass der visuelle Fokusindikator von Menschen mit eingeschränktem Sehvermögen gesehen werden kann. Dies wird auch jedem zugutekommen, der einen Bildschirm an einem hell beleuchteten Ort verwendet (wie draußen in der Sonne). [WCAG 2.1 SC 1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) erfordert, dass der visuelle Fokusindikator mindestens ein Verhältnis von 3:1 hat.

- Barrierefreie visuelle Fokusindikatoren: [Give Your Site Some Focus! Tipps für die Gestaltung von nützlichen und nutzbaren Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es mag nicht offensichtlich sein, warum der Fokusindikator erscheint und verschwindet, wenn eine Person gemischte Formen der Eingabe verwendet. Für Benutzer mit kognitiven Bedenken oder die weniger technisch versiert sind, kann dieses Fehlen eines konsistenten Verhaltens für interaktive Elemente verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel zeigt drei Paare von Steuerelementen. Jedes Paar besteht aus einem [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) Eingabefeld und einem Button.

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

Wenn Sie jedes Element der Reihe nach anklicken, werden Sie feststellen, dass der UA beim Verwenden von `:focus` zum Stylen des Fokusrings den Fokusring anzeigt, wenn der Benutzer auf den Button klickt. Wenn jedoch `:focus-visible` zum Stylen des Fokusrings verwendet wird, zeichnet der UA den Fokusring nicht, wenn der Benutzer auf den Button klickt, genau wie im Standardfall.

Wenn Sie dann durch jedes Element tabben, werden Sie sehen, dass der UA in allen drei Fällen – Standard, `:focus` und `:focus-visible` – den Fokusring um den Button zeichnet, wenn der Benutzer mit der Tastatur darauf navigiert.

Dies zeigt, wie `:focus-visible` es einem Designer ermöglicht, der Logik des Browsers zu folgen, um zu bestimmen, wann ein Fokusring angezeigt werden sollte.

{{EmbedLiveSample("Vergleich von :focus und :focus-visible", "100%", 300)}}

### Bereitstellung eines :focus Fallbacks

Wenn Ihr Code in alten Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, überprüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie die gleichen Fokus-Stile darin, jedoch innerhalb einer `:focus` Regel. Beachten Sie, dass alte Browser einfach den nativen Umriss anzeigen, auch wenn Sie überhaupt nichts für `:focus` angeben, was ausreichen kann.

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

{{EmbedLiveSample("Selektive Anzeige des Fokusindikators", "100%", 72)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
