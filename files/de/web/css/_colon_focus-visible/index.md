---
title: ":focus-visible"
slug: Web/CSS/:focus-visible
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`:focus-visible`** Pseudoklasse gilt, wenn ein Element die {{CSSxRef(":focus")}} Pseudoklasse erfüllt und der UA ({{Glossary("User_Agent", "User Agent")}}) mithilfe von Heuristiken bestimmt, dass der Fokus auf dem Element erkennbar gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokusring" an.)

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-visible.html", "tabbed-shorter")}}

Dieser Selektor ist nützlich, um je nach Eingabemodalität des Benutzers (Maus vs. Tastatur) einen anderen Fokusindikator bereitzustellen.

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich setzten User-Agent-CSS Fokus-Stile nur basierend auf der `:focus` Pseudoklasse und stilisierte die meisten fokussierten Elemente mit einem Fokusring. Dies führte dazu, dass allen Elementen, einschließlich aller Links und Buttons, ein Fokusring zugewiesen wurde, wenn sie fokussiert waren, was viele als unschön empfanden. Aufgrund des Aussehens entfernten einige Autoren die Outline-Fokus-Stile des User-Agents. Änderungen an den Fokus-Stilen können die Benutzerfreundlichkeit verringern, während das Entfernen von Fokus-Stilen die Tastaturnavigation für sehende Benutzer unzugänglich macht.

Browser zeigen den Fokus (zum Beispiel durch Zeichnen eines "Fokusrings") nicht mehr sichtbar um jedes Element, wenn es den Fokus hat. Stattdessen verwenden sie verschiedene Heuristiken, um nur dann Fokusindikatoren bereitzustellen, wenn dies für den Benutzer am hilfreichsten wäre. Zum Beispiel wird der Fokus im Allgemeinen nicht visuell angezeigt, wenn ein Button mit einem Zeigegerät geklickt wird, aber wenn ein Textfeld, das Benutzereingaben benötigt, den Fokus hat, wird dieser angezeigt. Während Fokus-Stile immer erforderlich sind, wenn Benutzer mit der Tastatur durch die Seite navigieren oder wenn der Fokus über Skripte verwaltet wird, sind Fokus-Stile nicht erforderlich, wenn der Benutzer weiß, wohin er den Fokus legt, z. B. wenn er ein Zeigegerät wie eine Maus oder einen Finger verwendet, um den Fokus physisch auf ein Element zu setzen, es sei denn, dieses Element benötigt weiterhin die Aufmerksamkeit des Benutzers.

Die `:focus` Pseudoklasse stimmt immer mit dem derzeit fokussierten Element überein. Die `:focus-visible` Pseudoklasse stimmt auch mit dem fokussierten Element überein, aber nur, wenn der Benutzer darüber informiert werden muss, wo der Fokus aktuell liegt. Da die `:focus-visible` Pseudoklasse das fokussierte Element bei Bedarf trifft, können Autoren mit der `:focus-visible` (anstelle der `:focus` Pseudoklasse) das Erscheinungsbild des Fokusindikators ändern, ohne zu verändern, wann der Fokusindikator erscheint.

Wenn die [`:focus`](/de/docs/Web/CSS/:focus) Pseudoklasse verwendet wird, zielt sie immer auf das derzeit fokussierte Element. Das bedeutet, dass, wenn ein Benutzer ein Zeigegerät verwendet, ein sichtbarer Fokusring um das fokussierte Element erscheint, was einige als störend empfinden. Die `:focus-visible` Pseudoklasse respektiert das selektive Fokusanzeigeverhalten des User-Agent, während sie dennoch die Anpassung des Fokusindikators ermöglicht.

## Barrierefreiheit

### Sehschwäche

Stellen Sie sicher, dass der visuelle Fokusindikator von Menschen mit Sehschwäche gesehen werden kann. Dies kommt auch jedem zugute, der einen Bildschirm in einem hell beleuchteten Bereich (wie draußen in der Sonne) verwendet. [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) verlangt, dass der visuelle Fokusindikator mindestens ein Verhältnis von 3 zu 1 hat.

- Zugängliche visuelle Fokusindikatoren: [Geben Sie Ihrer Site einen Fokus! Tipps für das Design nützlicher und verwendbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es ist möglicherweise nicht offensichtlich, warum der Fokusindikator bei einer Person, die gemischte Eingabeformen verwendet, erscheint und verschwindet. Für Benutzer mit kognitiven Bedenken oder die technisch weniger versiert sind, kann dieses inkonsistente Verhalten für interaktive Elemente verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel zeigt drei Paare von Steuerelementen. Jedes Paar besteht aus einem [`text`](/de/docs/Web/HTML/Element/input/text) Eingabefeld und einem Button.

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

Wenn Sie jedes Element der Reihe nach anklicken, werden Sie feststellen, dass, wenn `:focus` verwendet wird, um den Fokusring zu stylen, der UA den Fokusring anzeigt, wenn der Benutzer den Button anklickt. Wenn jedoch `:focus-visible` verwendet wird, um den Fokusring zu stylen, zeigt der UA im Standardfall den Fokusring nicht an, wenn der Benutzer den Button anklickt.

Wenn Sie dann durch jede Element blättern, werden Sie feststellen, dass der UA in allen drei Fällen — Standard, `:focus` und `:focus-visible` — den Fokusring um den Button anzeigt, wenn der Benutzer mit der Tastatur darauf navigiert.

Dies zeigt, wie `:focus-visible` einem Designer ermöglicht, der Logik des Browsers zu folgen, um zu bestimmen, wann ein Fokusring angezeigt werden sollte.

{{EmbedLiveSample("Vergleich von :focus und :focus-visible", "100%", 300)}}

### Bereitstellung eines :focus Fallbacks

Wenn Ihr Code in alten Browserversionen arbeiten muss, die `:focus-visible` nicht unterstützen, prüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie das gleiche Fokusstyling, aber innerhalb einer `:focus` Regel. Beachten Sie, dass selbst wenn Sie für `:focus` nichts Spezielles angeben, alte Browser einfach die native Umrandung anzeigen, was ausreichen kann.

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
