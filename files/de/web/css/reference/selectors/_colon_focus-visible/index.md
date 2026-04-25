---
title: "`:focus-visible` CSS-Pseudoklasse"
short-title: :focus-visible
slug: Web/CSS/Reference/Selectors/:focus-visible
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:focus-visible`** Pseudoklasse gilt, während ein Element der {{CSSxRef(":focus")}} Pseudoklasse entspricht und der UA ({{Glossary("User_Agent", "User Agent")}}) heuristisch bestimmt, dass der Fokus auf dem Element sichtbar gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokusring" an.)

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

Dieser Selektor ist nützlich, um anhand der Eingabemodalität des Benutzers (Maus vs. Tastatur) einen anderen Fokusindikator bereitzustellen.

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich setzten User-Agent-CSS Fokus-Stile basierend nur auf der `:focus` Pseudoklasse und gestalteten die meisten fokussierten Elemente mit einem Umriss des Fokusrings. Dies bedeutete, dass alle Elemente, einschließlich aller Links und Schaltflächen, einen Fokusring hatten, wenn sie fokussiert wurden, was viele als unschön empfanden. Aufgrund des Erscheinungsbildes entfernten einige Autoren die Umrissfokus-Stile des User-Agents. Eine Änderung des Fokus-Stils kann die Benutzerfreundlichkeit verringern, während das Entfernen der Fokus-Stile die Tastaturnavigation für sehende Benutzer unzugänglich macht.

Browser zeigen nicht mehr sichtbar den Fokus (wie z.B. durch Zeichnen eines "Fokusrings") um jedes Element an, wenn es im Fokus ist. Stattdessen verwenden sie eine Vielzahl von Heuristiken, um Fokusindikatoren nur dann bereitzustellen, wenn dies für den Benutzer am nützlichsten wäre. Zum Beispiel wird der Fokus normalerweise nicht visuell angezeigt, wenn eine Schaltfläche mit einem Zeigegerät geklickt wird, aber wenn ein Textfeld, das Benutzereingaben benötigt, im Fokus ist, wird der Fokus angezeigt. Während Fokus-Stile immer erforderlich sind, wenn Benutzer die Seite mit der Tastatur navigieren oder wenn der Fokus über Skripte verwaltet wird, sind Fokus-Stile nicht erforderlich, wenn der Benutzer weiß, wo er den Fokus setzt, wie z.B. wenn er ein Zeigegerät wie eine Maus oder einen Finger verwendet, um den Fokus physisch auf ein Element zu setzen, es sei denn, dieses Element erfordert weiterhin Benutzeraufmerksamkeit.

Die `:focus` Pseudoklasse entspricht immer dem aktuell fokussierten Element. Die `:focus-visible` Pseudoklasse entspricht ebenfalls dem fokussierten Element, jedoch nur, wenn der Benutzer darüber informiert werden muss, wo der Fokus aktuell ist. Da die `:focus-visible` Pseudoklasse das fokussierte Element bei Bedarf erfasst, können Autoren durch die Verwendung von `:focus-visible` (anstatt der `:focus` Pseudoklasse) das Erscheinungsbild des Fokusindikators ändern, ohne zu ändern, wann der Fokusindikator erscheint.

Wenn die {{cssxref(":focus")}} Pseudoklasse verwendet wird, zielt sie immer auf das aktuell fokussierte Element ab. Das bedeutet, dass bei der Verwendung eines Zeigegeräts ein sichtbarer Fokusring um das fokussierte Element erscheint, was manche als aufdringlich empfinden. Die `:focus-visible` Pseudoklasse respektiert das selektive Verhaltensweise der Fokusanzeige der User Agents, während sie dennoch Anpassungen des Fokusindikators ermöglicht.

## Barrierefreiheit

### Eingeschränktes Sehvermögen

Stellen Sie sicher, dass der visuelle Fokusindikator von Personen mit eingeschränktem Sehvermögen gesehen werden kann. Dies wird auch jedem zugutekommen, der einen Bildschirm in einem hell beleuchteten Raum (wie draußen in der Sonne) verwendet. Der [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) verlangt, dass der visuelle Fokusindikator mindestens ein Kontrastverhältnis von 3 zu 1 hat.

- Zugängliche visuelle Fokusindikatoren: [Geben Sie Ihrer Website einen Fokus! Tipps zum Gestalten nützlicher und benutzerfreundlicher Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es mag nicht offensichtlich sein, warum der Fokusindikator erscheint und verschwindet, wenn eine Person gemischte Eingabeformen verwendet. Für Benutzer mit kognitiven Bedenken oder die weniger technologisch versiert sind, kann dieses mangelnde konsistente Verhalten für interaktive Elemente verwirrend sein.

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

Wenn Sie jedes Element der Reihe nach anklicken, werden Sie feststellen, dass, wenn `:focus` zur Gestaltung des Fokusrings verwendet wird, der UA den Fokusring zieht, wenn der Benutzer die Schaltfläche anklickt. Wenn jedoch `:focus-visible` zur Gestaltung des Fokusrings verwendet wird, zieht der UA den Fokusring nicht, wenn der Benutzer die Schaltfläche anklickt, genau wie im Standardfall.

Wenn Sie dann durch jedes Element tabben, werden Sie feststellen, dass der UA in allen drei Fällen — Standardfall, `:focus` und `:focus-visible` — den Fokusring um die Schaltfläche zeichnet, wenn der Benutzer mit der Tastatur zu ihr navigiert.

Dies zeigt, wie `:focus-visible` einem Designer ermöglicht, der Logik des Browsers zu folgen, um zu bestimmen, wann ein Fokusring angezeigt werden sollte.

{{EmbedLiveSample("Vergleich von :focus und :focus-visible", "100%", 300)}}

### Bereitstellung eines :focus Fallbacks

Wenn Ihr Code in alten Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, überprüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie das gleiche Fokus-Styling darin, jedoch innerhalb einer `:focus` Regel. Beachten Sie, dass alte Browser, selbst wenn Sie überhaupt nichts für `:focus` angeben, einfach den nativen Umriss anzeigen, was ausreichend sein kann.

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

{{EmbedLiveSample("Fokusindikator selektiv anzeigen", "100%", 72)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
