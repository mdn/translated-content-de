---
title: ":focus-visible"
slug: Web/CSS/:focus-visible
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:focus-visible`** Pseudo-Klasse wird angewendet, wenn ein Element der {{CSSxRef(":focus")}} Pseudo-Klasse entspricht und der UA ({{Glossary("User_Agent", "User Agent")}}) anhand von Heuristiken feststellt, dass der Fokus auf dem Element offensichtlich sein sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen "Fokus-Rand" an.)

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

Dieser Selektor ist nützlich, um einen anderen Fokus-Indikator basierend auf der Eingabemodalität des Benutzers (Maus vs. Tastatur) bereitzustellen.

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Ursprünglich setzten User-Agent-CSS-Fokus-Stile ausschließlich auf Grundlage der `:focus` Pseudo-Klasse, indem die meisten fokussierten Elemente mit einem Fokus-Rand-Stil versehen wurden. Dies bedeutete, dass alle Elemente, einschließlich aller Links und Buttons, einen Fokus-Rand erhielten, wenn sie fokussiert waren, was viele unästhetisch fanden. Aufgrund dieser Erscheinung entfernten einige Autoren die User-Agent-Fokus-Stile. Das Ändern des Fokus-Stils kann die Benutzerfreundlichkeit verringern, während das Entfernen von Fokus-Stilen die Tastaturnavigation für sehende Benutzer unzugänglich macht.

Browser zeigen den Fokus nicht mehr sichtbar (z. B. durch Zeichnen eines "Fokus-Rands") um jedes Element an, wenn es fokussiert ist. Stattdessen verwenden sie eine Vielzahl von Heuristiken, um Fokus-Indikatoren nur dann bereitzustellen, wenn es für den Benutzer am hilfreichsten wäre. Beispielsweise wird der Fokus nicht visuell angezeigt, wenn ein Button mit einem Zeigegerät angeklickt wird, aber wenn ein Textfeld, das Benutzereingaben erfordert, fokussiert ist, wird der Fokus angezeigt. Während Fokus-Stile immer erforderlich sind, wenn Benutzer mit der Tastatur durch die Seite navigieren oder der Fokus über Skripte verwaltet wird, sind Fokus-Stile nicht erforderlich, wenn der Benutzer weiß, wo er den Fokus setzen soll, z. B. wenn er ein Zeigegerät wie eine Maus oder den Finger verwendet, um den Fokus physisch auf ein Element zu setzen, es sei denn, dieses Element benötigt weiterhin die Aufmerksamkeit des Benutzers.

Die `:focus` Pseudo-Klasse entspricht immer dem aktuell fokussierten Element. Die `:focus-visible` Pseudo-Klasse entspricht auch dem fokussierten Element, jedoch nur, wenn der Benutzer informiert werden muss, wo der Fokus derzeit ist. Da die `:focus-visible` Pseudo-Klasse dem fokussierten Element bei Bedarf entspricht, ermöglicht die Verwendung der `:focus-visible` (anstatt der `:focus` Pseudo-Klasse) den Autoren, das Erscheinungsbild des Fokus-Indikators zu ändern, ohne zu ändern, wann der Fokus-Indikator angezeigt wird.

Wenn die [`:focus`](/de/docs/Web/CSS/:focus) Pseudo-Klasse verwendet wird, wird immer das aktuell fokussierte Element angesprochen. Das bedeutet, dass ein sichtbarer Fokus-Rand um das fokussierte Element erscheint, wenn der Benutzer ein Zeigegerät verwendet, was einige als aufdringlich empfinden. Die `:focus-visible` Pseudo-Klasse respektiert das selektive Fokusanzeigen-Verhalten der User-Agents, während sie dennoch eine Anpassung des Fokus-Indikators ermöglicht.

## Barrierefreiheit

### Sehbehinderungen

Stellen Sie sicher, dass der visuelle Fokus-Indikator für Menschen mit Sehbehinderungen sichtbar ist. Dies wird auch jedem zugutekommen, der einen Bildschirm in einem stark beleuchteten Raum benutzt (z. B. draußen in der Sonne). [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) fordert, dass der visuelle Fokus-Indikator mindestens 3 zu 1 beträgt.

- Zugängliche visuelle Fokus-Indikatoren: [Geben Sie Ihrer Website etwas Fokus! Tipps für das Gestalten nützlicher und benutzerfreundlicher Fokus-Indikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es könnte nicht offensichtlich sein, warum der Fokus-Indikator erscheint und verschwindet, wenn eine Person gemischte Eingabeformen benutzt. Für Benutzer mit kognitiven Bedenken oder mit weniger technologischem Verständnis kann dieses mangelnde konsistente Verhalten bei interaktiven Elementen verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel zeigt drei Paare von Steuerelementen. Jedes Paar besteht aus einem [`text`](/de/docs/Web/HTML/Element/input/text)-Eingabefeld und einem Button.

- Das erste Paar fügt keine benutzerdefinierten Stile für die Fokus-Zustände hinzu und zeigt den Standardfall.
- Das zweite Paar fügt Stile mithilfe der `:focus` Pseudo-Klasse hinzu.
- Das dritte Paar fügt Stile mithilfe der `:focus-visible` Pseudo-Klasse hinzu.

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

Wenn Sie jedes Element der Reihe nach anklicken, werden Sie feststellen, dass, wenn `:focus` verwendet wird, um den Fokus-Rand zu stylen, der UA den Fokus-Rand zeichnet, wenn der Benutzer auf den Button klickt. Wenn jedoch `:focus-visible` verwendet wird, um den Fokus-Rand zu stylen, zeichnet der UA den Fokus-Rand nicht, wenn der Benutzer auf den Button klickt, genau wie im Standardfall.

Wenn Sie dann durch jedes Element tabben, werden Sie sehen, dass in allen drei Fällen - Standard, `:focus` und `:focus-visible` - der UA den Fokus-Rand um den Button zeichnet, wenn der Benutzer mit der Tastatur zu ihm navigiert.

Dies zeigt, wie `:focus-visible` es einem Designer ermöglicht, der Logik des Browsers zu folgen, um festzulegen, wann ein Fokus-Rand angezeigt werden soll.

{{EmbedLiveSample("Comparing :focus and :focus-visible", "100%", 300)}}

### Bereitstellung einer :focus-Rückfallebene

Wenn Ihr Code in alten Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, überprüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie das gleiche Fokus-Styling darin, aber innerhalb einer `:focus`-Regel. Beachten Sie, dass selbst wenn Sie überhaupt nichts für `:focus` angeben, alte Browser einfach den nativen Umriss anzeigen, was ausreichen kann.

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

{{EmbedLiveSample("Selctiv show ng the focus indicator", "100%", 72)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
- [Ein Polyfill für `:focus-visible`](https://github.com/WICG/focus-visible)
