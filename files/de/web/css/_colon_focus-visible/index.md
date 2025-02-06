---
title: :focus-visible
slug: Web/CSS/:focus-visible
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:focus-visible`** Pseudo-Klasse wird angewendet, während ein Element die {{CSSxRef(":focus")}} Pseudo-Klasse erfüllt und der UA ({{Glossary("User_Agent", "User Agent")}}) anhand von Heuristiken feststellt, dass der Fokus auf dem Element sichtbar gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokus-Ring" an.)

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-visible.html", "tabbed-shorter")}}

Dieser Selektor ist nützlich, um einen unterschiedlichen Fokusindikator basierend auf dem Eingabemodell des Benutzers (Maus vs. Tastatur) bereitzustellen.

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich setzte die Benutzeragenten-CSS-Fokus-Stile nur basierend auf der `:focus` Pseudo-Klasse und stylte die meisten fokussierten Elemente mit einer Fokusring-Kontur. Dies bedeutete, dass alle Elemente, einschließlich aller Links und Buttons, einen Fokusring erhielten, was viele als unschön empfanden. Aufgrund des Aussehens entfernten einige Autoren die Outline-Fokus-Stile des Benutzeragenten. Das Ändern des Fokus-Stils kann die Benutzerfreundlichkeit verringern, während das Entfernen der Fokus-Stile die Navigation mit der Tastatur für sehende Benutzer unzugänglich macht.

Browser zeigen nun nicht mehr sichtbar den Fokus (z. B. durch das Zeichnen eines "Fokus-Rings") um jedes Element an, wenn es fokussiert ist. Stattdessen verwenden sie eine Vielzahl von Heuristiken, um Fokusindikatoren nur dann bereitzustellen, wenn dies für den Benutzer am nützlichsten ist. Wenn beispielsweise ein Button mit einem Zeigegerät angeklickt wird, wird der Fokus normalerweise nicht visuell angezeigt. Wenn jedoch ein Textfeld, das Benutzereingaben benötigt, fokussiert ist, wird der Fokus angezeigt. Während Fokus-Stile immer erforderlich sind, wenn Benutzer die Seite mit der Tastatur navigieren oder wenn der Fokus über Skripte verwaltet wird, sind sie nicht erforderlich, wenn der Benutzer weiß, wo er den Fokus setzt, z. B. durch die Verwendung eines Zeigegeräts wie einer Maus oder eines Fingers, es sei denn, das Element erfordert weiterhin die Aufmerksamkeit des Benutzers.

Die `:focus` Pseudo-Klasse entspricht immer dem aktuell fokussierten Element. Die `:focus-visible` Pseudo-Klasse entspricht ebenfalls dem fokussierten Element, jedoch nur, wenn der Benutzer informiert werden muss, wo der Fokus sich aktuell befindet. Da die `:focus-visible` Pseudo-Klasse das fokussierte Element bei Bedarf anspricht, können Autoren mit der Verwendung von `:focus-visible` (anstelle der `:focus` Pseudo-Klasse) das Erscheinungsbild des Fokusindikators ändern, ohne zu beeinflussen, wann der Fokusindikator erscheint.

Wenn die [`:focus`](/de/docs/Web/CSS/:focus) Pseudo-Klasse verwendet wird, zielt sie immer auf das aktuell fokussierte Element ab. Das bedeutet, dass, wenn ein Benutzer ein Zeigegerät verwendet, ein sichtbarer Fokusring um das fokussierte Element erscheint, was manche als aufdringlich empfinden. Die `:focus-visible` Pseudo-Klasse respektiert das selektive Fokusanzeigeverhalten der Benutzeragenten, während weiterhin eine Anpassung des Fokusindikators möglich ist.

## Barrierefreiheit

### Sehbehinderung

Stellen Sie sicher, dass der visuelle Fokusindikator für Personen mit Sehbehinderungen sichtbar ist. Dies kommt auch jedem zugute, der einen Bildschirm in einer hell beleuchteten Umgebung verwendet (z. B. draußen in der Sonne). [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) erfordert, dass der visuelle Fokusindikator mindestens ein Kontrastverhältnis von 3:1 besitzt.

- Barrierefreie visuelle Fokusindikatoren: [Geben Sie Ihrer Website etwas Fokus! Tipps für die Gestaltung nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es ist möglicherweise nicht offensichtlich, warum der Fokusindikator erscheint und verschwindet, wenn eine Person gemischte Eingabeformen verwendet. Für Benutzer mit kognitiven Problemen oder mit geringerem technischem Verständnis kann dieses inkonsistente Verhalten für interaktive Elemente verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel zeigt drei Paare von Steuerelementen. Jedes Paar besteht aus einem [`text`](/de/docs/Web/HTML/Element/input/text)-Eingabefeld und einem Button.

- Das erste Paar nimmt keine benutzerdefinierten Stile für die Fokuszustände hinzu und zeigt den Standardfall.
- Das zweite Paar fügt Stile unter Verwendung der `:focus` Pseudo-Klasse hinzu.
- Das dritte Paar fügt Stile unter Verwendung der `:focus-visible` Pseudo-Klasse hinzu.

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

Wenn Sie die einzelnen Elemente nacheinander anklicken, werden Sie sehen, dass, wenn `:focus` verwendet wird, um den Fokusring zu stylen, der UA den Fokusring zeichnet, wenn der Benutzer den Button anklickt. Wenn jedoch `:focus-visible` verwendet wird, um den Fokusring zu stylen, zeichnet der UA den Fokusring nicht, wenn der Benutzer den Button anklickt, genau wie im Standardfall.

Wenn Sie dann durch jedes Element tabben, werden Sie sehen, dass in allen drei Fällen — Standard, `:focus` und `:focus-visible` — der UA den Fokusring um den Button zeichnet, wenn der Benutzer mithilfe der Tastatur dorthin navigiert.

Dies zeigt, wie `:focus-visible` einem Designer ermöglicht, der Logik des Browsers zu folgen, um zu bestimmen, wann ein Fokusring angezeigt werden sollte.

{{EmbedLiveSample("Comparing :focus and :focus-visible", "100%", 300)}}

### Bereitstellung eines :focus Fallbacks

Wenn Ihr Code in alten Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, prüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie das gleiche Fokus-Styling darin, aber innerhalb einer `:focus` Regel. Beachten Sie, dass alte Browser, auch wenn Sie für `:focus` nichts angeben, einfach den nativen Umriss anzeigen, was ausreichend sein kann.

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
