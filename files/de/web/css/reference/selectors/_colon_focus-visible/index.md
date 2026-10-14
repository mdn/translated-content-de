---
title: CSS-Pseudoklasse `:focus-visible`
short-title: :focus-visible
slug: Web/CSS/Reference/Selectors/:focus-visible
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die Pseudoklasse **`:focus-visible`** gilt, wenn ein Element der Pseudoklasse {{CSSxRef(":focus")}} entspricht und der UA ({{Glossary("User_Agent", "User Agent")}}) anhand von Heuristiken bestimmt, dass der Fokus auf dem Element sichtbar gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen „Fokusring“ an.)

Mit diesem Selektor können Sie je nach Eingabemethode (Maus oder Tastatur) einen anderen Fokusindikator bereitstellen.

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
```

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus im Vergleich zu :focus-visible

Ursprünglich legten die CSS-Regeln des User Agents Fokusstile ausschließlich anhand der Pseudoklasse `:focus` fest und versahen die meisten fokussierten Elemente mit einem Fokusring. Dadurch erhielten alle Elemente, einschließlich aller Links und Schaltflächen, bei Fokus einen Fokusring, den viele als unschön empfanden. Deshalb entfernten manche Autoren die vom User Agent vorgegebenen Umrissstile für den Fokus. Eine Änderung des Fokusstils kann die Benutzerfreundlichkeit beeinträchtigen; werden Fokusstile ganz entfernt, ist die Tastaturnavigation für sehende Benutzer nicht mehr zugänglich.

Browser zeigen den Fokus nicht mehr bei jedem fokussierten Element sichtbar an, etwa durch einen „Fokusring“. Stattdessen verwenden sie verschiedene Heuristiken, um Fokusindikatoren nur dann anzuzeigen, wenn sie für Benutzer besonders hilfreich sind. Wird beispielsweise eine Schaltfläche mit einem Zeigegerät angeklickt, wird der Fokus in der Regel nicht sichtbar angezeigt. Ist hingegen ein Textfeld fokussiert, das eine Benutzereingabe erfordert, wird der Fokus angezeigt. Fokusstile sind immer erforderlich, wenn Benutzer mit der Tastatur durch die Seite navigieren oder der Fokus durch Skripte gesteuert wird. Sie sind jedoch nicht erforderlich, wenn Benutzer wissen, wohin sie den Fokus setzen, etwa weil sie mit einem Zeigegerät wie einer Maus oder einem Finger ein Element gezielt fokussieren – es sei denn, das Element erfordert weiterhin ihre Aufmerksamkeit.

Die Pseudoklasse `:focus` entspricht immer dem aktuell fokussierten Element. Die Pseudoklasse `:focus-visible` entspricht ebenfalls dem fokussierten Element, jedoch nur dann, wenn Benutzer erkennen müssen, wo sich der Fokus gerade befindet. Da `:focus-visible` dem fokussierten Element bei Bedarf entspricht, können Autoren mit `:focus-visible` (anstelle von `:focus`) das Aussehen des Fokusindikators ändern, ohne zu beeinflussen, wann er erscheint.

Die Pseudoklasse {{cssxref(":focus")}} erfasst immer das aktuell fokussierte Element. Das bedeutet, dass ein sichtbarer Fokusring um das fokussierte Element erscheint, wenn ein Benutzer ein Zeigegerät verwendet – was manche als störend empfinden. Die Pseudoklasse `:focus-visible` berücksichtigt das selektive Verhalten des User Agents bei der Anzeige des Fokus und ermöglicht zugleich die Anpassung des Fokusindikators.

## Barrierefreiheit

### Eingeschränktes Sehvermögen

Stellen Sie sicher, dass der sichtbare Fokusindikator für Menschen mit eingeschränktem Sehvermögen erkennbar ist. Davon profitieren auch alle, die einen Bildschirm in einer hell beleuchteten Umgebung verwenden, beispielsweise draußen in der Sonne. [WCAG 2.1 SC 1.4.11 Kontrast von Nicht-Text-Inhalten](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) verlangt für den sichtbaren Fokusindikator ein Kontrastverhältnis von mindestens 3:1.

- Barrierefreie sichtbare Fokusindikatoren: [Geben Sie Ihrer Website Fokus! Tipps zur Gestaltung nützlicher und benutzerfreundlicher Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Wenn jemand verschiedene Eingabemethoden kombiniert, ist möglicherweise nicht offensichtlich, warum der Fokusindikator erscheint und wieder verschwindet. Für Benutzer mit kognitiven Einschränkungen oder geringerer technischer Erfahrung kann dieses uneinheitliche Verhalten interaktiver Elemente verwirrend sein.

## Beispiele

### Vergleich von :focus und :focus-visible

Dieses Beispiel zeigt drei Paare von Steuerelementen. Jedes Paar besteht aus einem [`text`](/de/docs/Web/HTML/Reference/Elements/input/text)-Eingabefeld und einer Schaltfläche.

- Für das erste Paar werden keine benutzerdefinierten Fokusstile hinzugefügt; es zeigt das Standardverhalten.
- Für das zweite Paar werden Stile mit der Pseudoklasse `:focus` hinzugefügt.
- Für das dritte Paar werden Stile mit der Pseudoklasse `:focus-visible` hinzugefügt.

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

Wenn Sie nacheinander auf jedes Element klicken, sehen Sie: Wird der Fokusring mit `:focus` gestaltet, zeigt der UA ihn auch an, wenn Sie auf die Schaltfläche klicken. Wird dagegen `:focus-visible` verwendet, zeigt der UA beim Klicken auf die Schaltfläche keinen Fokusring an – genau wie beim Standardverhalten.

Wenn Sie anschließend mit der Tabulatortaste durch die Elemente navigieren, sehen Sie, dass der UA in allen drei Fällen – Standardverhalten, `:focus` und `:focus-visible` – einen Fokusring um die Schaltfläche anzeigt, sobald Sie sie mit der Tastatur erreichen.

Dies zeigt, wie Designer mit `:focus-visible` der Logik des Browsers folgen können, die bestimmt, wann ein Fokusring angezeigt werden sollte.

{{EmbedLiveSample("Comparing :focus and :focus-visible", "100%", 300)}}

### Einen Fallback für :focus bereitstellen

Wenn Ihr Code auch in älteren Browserversionen funktionieren muss, die `:focus-visible` nicht unterstützen, prüfen Sie die Unterstützung für `:focus-visible` mit {{cssxref("@supports")}}. Wiederholen Sie die Fokusstile für den nicht unterstützten Fall innerhalb einer `:focus`-Regel. Beachten Sie, dass ältere Browser einfach den nativen Umriss anzeigen, selbst wenn Sie für `:focus` überhaupt nichts festlegen. Das kann bereits ausreichen.

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
