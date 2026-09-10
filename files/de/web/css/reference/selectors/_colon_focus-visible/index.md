---
title: CSS-Pseudoklasse `:focus-visible`
short-title: :focus-visible
slug: Web/CSS/Reference/Selectors/:focus-visible
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die Pseudoklasse **`:focus-visible`** gilt, während ein Element der Pseudoklasse {{CSSxRef(":focus")}} entspricht und der UA ({{Glossary("User_Agent", "User Agent")}}) anhand von Heuristiken feststellt, dass der Fokus auf dem Element sichtbar gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen „Fokusring“ an.)

Dieser Selektor ist nützlich, um abhängig von der Eingabemodalität der Benutzerin bzw. des Benutzers (Maus oder Tastatur) einen anderen Fokusindikator bereitzustellen.

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

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs. :focus-visible

Ursprünglich legte User-Agent-CSS Fokusstile nur anhand der Pseudoklasse `:focus` fest und gestaltete die meisten fokussierten Elemente mit einer Fokusring-Umrandung. Das bedeutete, dass auf alle Elemente, einschließlich aller Links und Buttons, beim Fokussieren ein Fokusring angewendet wurde, was viele als unschön empfanden. Aufgrund des Erscheinungsbilds entfernten einige Autorinnen und Autoren die Fokusstile für die User-Agent-Umrandung. Das Ändern des Fokusstils kann die Benutzerfreundlichkeit verringern, während das Entfernen von Fokusstilen die Tastaturnavigation für sehende Benutzerinnen und Benutzer unzugänglich macht.

Browser zeigen den Fokus nicht mehr bei jedem Element sichtbar an, wenn es den Fokus hat, etwa durch das Zeichnen eines „Fokusrings“. Stattdessen verwenden sie verschiedene Heuristiken, um Fokusindikatoren nur dann bereitzustellen, wenn dies für die Benutzerin oder den Benutzer am hilfreichsten wäre. Wenn beispielsweise ein Button mit einem Zeigegerät angeklickt wird, wird der Fokus im Allgemeinen nicht visuell angezeigt. Wenn jedoch ein Textfeld, das Benutzereingaben benötigt, den Fokus hat, wird der Fokus angezeigt. Während Fokusstile immer erforderlich sind, wenn Benutzerinnen und Benutzer mit der Tastatur durch die Seite navigieren oder der Fokus über Skripte verwaltet wird, sind Fokusstile nicht erforderlich, wenn die Benutzerin oder der Benutzer weiß, wohin der Fokus gesetzt wird, etwa wenn ein Zeigegerät wie eine Maus oder ein Finger verwendet wird, um den Fokus physisch auf ein Element zu setzen, es sei denn, dieses Element benötigt weiterhin die Aufmerksamkeit der Benutzerin oder des Benutzers.

Die Pseudoklasse `:focus` entspricht immer dem aktuell fokussierten Element. Die Pseudoklasse `:focus-visible` entspricht ebenfalls dem fokussierten Element, aber nur, wenn die Benutzerin oder der Benutzer darüber informiert werden muss, wo sich der Fokus aktuell befindet. Da die Pseudoklasse `:focus-visible` bei Bedarf dem fokussierten Element entspricht, ermöglicht die Verwendung von `:focus-visible` (anstelle der Pseudoklasse `:focus`) Autorinnen und Autoren, das Erscheinungsbild des Fokusindikators zu ändern, ohne zu ändern, wann der Fokusindikator angezeigt wird.

Wenn die Pseudoklasse {{cssxref(":focus")}} verwendet wird, zielt sie immer auf das aktuell fokussierte Element ab. Das bedeutet, dass beim Verwenden eines Zeigegeräts ein sichtbarer Fokusring um das fokussierte Element erscheint, was manche als aufdringlich empfinden. Die Pseudoklasse `:focus-visible` berücksichtigt das selektive Verhalten von User Agents bei der Fokusanzeige und ermöglicht dennoch die Anpassung des Fokusindikators.

## Barrierefreiheit

### Sehschwäche

Stellen Sie sicher, dass der visuelle Fokusindikator von Menschen mit Sehschwäche gesehen werden kann. Dies kommt auch allen zugute, die einen Bildschirm in einer hell beleuchteten Umgebung verwenden, etwa draußen in der Sonne. [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) verlangt, dass der visuelle Fokusindikator mindestens ein Kontrastverhältnis von 3 zu 1 aufweist.

- Barrierefreie visuelle Fokusindikatoren: [Give Your Site Some Focus! Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Es ist möglicherweise nicht offensichtlich, warum der Fokusindikator erscheint und verschwindet, wenn eine Person gemischte Eingabeformen verwendet. Für Benutzerinnen und Benutzer mit kognitiven Einschränkungen oder mit geringerer technischer Erfahrung kann dieses uneinheitliche Verhalten interaktiver Elemente verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel zeigt drei Paare von Steuerelementen. Jedes Paar besteht aus einer [`text`](/de/docs/Web/HTML/Reference/Elements/input/text)-Eingabe und einem Button.

- Das erste Paar fügt keine benutzerdefinierten Stile für Fokuszustände hinzu und zeigt den Standardfall.
- Das zweite Paar fügt Stile mithilfe der Pseudoklasse `:focus` hinzu.
- Das dritte Paar fügt Stile mithilfe der Pseudoklasse `:focus-visible` hinzu.

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

Wenn Sie nacheinander auf jedes Element klicken, sehen Sie, dass der UA den Fokusring zeichnet, wenn `:focus` verwendet wird, um den Fokusring zu gestalten, und die Benutzerin oder der Benutzer auf den Button klickt. Wenn jedoch `:focus-visible` verwendet wird, um den Fokusring zu gestalten, zeichnet der UA den Fokusring nicht, wenn die Benutzerin oder der Benutzer auf den Button klickt, genau wie im Standardfall.

Wenn Sie anschließend mit der Tabulatortaste durch jedes Element navigieren, sehen Sie, dass der UA in allen drei Fällen — Standard, `:focus` und `:focus-visible` — den Fokusring um den Button zeichnet, wenn die Benutzerin oder der Benutzer mit der Tastatur zu ihm navigiert.

Dies zeigt, wie `:focus-visible` Designerinnen und Designern ermöglicht, der Logik des Browsers bei der Bestimmung zu folgen, wann ein Fokusring angezeigt werden sollte.

{{EmbedLiveSample("Comparing :focus and :focus-visible", "100%", 300)}}

### Bereitstellen eines :focus-Fallbacks

Wenn Ihr Code in alten Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, prüfen Sie die Unterstützung von `:focus-visible` mit {{cssxref("@supports")}} und wiederholen Sie darin dieselbe Fokusgestaltung, jedoch innerhalb einer `:focus`-Regel. Beachten Sie, dass alte Browser einfach die native Umrandung anzeigen, selbst wenn Sie für `:focus` gar nichts angeben, was ausreichend sein kann.

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
