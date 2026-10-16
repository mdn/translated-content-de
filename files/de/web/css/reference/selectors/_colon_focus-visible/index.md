---
title: CSS-Pseudoklasse `:focus-visible`
short-title: :focus-visible
slug: Web/CSS/Reference/Selectors/:focus-visible
l10n:
  sourceCommit: c6309d2f8bbdaf08095d8c2cc8bb9c16b6a94acc
---

Die Pseudoklasse **`:focus-visible`** gilt, wenn ein Element der Pseudoklasse {{CSSxRef(":focus")}} entspricht und der UA ({{Glossary("User_Agent", "User Agent")}}) anhand von Heuristiken feststellt, dass der Fokus auf dem Element sichtbar gemacht werden sollte. (Viele Browser zeigen in diesem Fall standardmäßig einen „Fokusring“ an.)

Mit diesem Selektor können Sie abhängig von der Eingabemethode (Maus oder Tastatur) unterschiedliche Fokusindikatoren bereitstellen.

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

Ursprünglich legte das User-Agent-CSS Fokusstile ausschließlich anhand der Pseudoklasse `:focus` fest und versah die meisten fokussierten Elemente mit einem Fokusring. Dadurch erhielten alle Elemente, einschließlich aller Links und Schaltflächen, einen Fokusring, sobald sie fokussiert waren. Viele empfanden das als unansehnlich. Deshalb entfernten manche Autoren die Fokus-Umrisslinien des User Agents. Das Ändern des Fokusstils kann die Benutzerfreundlichkeit beeinträchtigen; das Entfernen von Fokusstilen macht die Tastaturnavigation für sehende Nutzer unzugänglich.

Browser zeigen den Fokus nicht mehr bei jedem fokussierten Element sichtbar an, etwa durch einen Fokusring. Stattdessen verwenden sie verschiedene Heuristiken, um Fokusindikatoren nur dann anzuzeigen, wenn sie für Nutzer besonders hilfreich sind. Wird beispielsweise eine Schaltfläche mit einem Zeigegerät angeklickt, wird der Fokus normalerweise nicht sichtbar angezeigt. Wenn hingegen ein Textfeld, das eine Nutzereingabe erfordert, fokussiert ist, wird der Fokus angezeigt. Fokusstile sind immer erforderlich, wenn Nutzer mit der Tastatur durch die Seite navigieren oder der Fokus per Skript gesteuert wird. Sie sind jedoch nicht erforderlich, wenn Nutzer wissen, wohin sie den Fokus setzen – etwa wenn sie ein Element mit einem Zeigegerät wie einer Maus oder einem Finger direkt fokussieren –, es sei denn, das Element erfordert weiterhin ihre Aufmerksamkeit.

Die Pseudoklasse `:focus` entspricht immer dem aktuell fokussierten Element. Die Pseudoklasse `:focus-visible` entspricht ebenfalls dem fokussierten Element, allerdings nur dann, wenn Nutzer erkennen können müssen, wo sich der Fokus gerade befindet. Da `:focus-visible` dem fokussierten Element bei Bedarf entspricht, können Autoren damit das Aussehen des Fokusindikators ändern, ohne zu beeinflussen, wann er angezeigt wird.

Die Pseudoklasse {{cssxref(":focus")}} spricht immer das aktuell fokussierte Element an. Das bedeutet, dass bei Verwendung eines Zeigegeräts ein sichtbarer Fokusring um das fokussierte Element erscheint, was manche als störend empfinden. Die Pseudoklasse `:focus-visible` berücksichtigt dagegen das selektive Anzeigeverhalten des User Agents und ermöglicht zugleich die Anpassung des Fokusindikators.

## Barrierefreiheit

### Eingeschränktes Sehvermögen

Stellen Sie sicher, dass Menschen mit eingeschränktem Sehvermögen den visuellen Fokusindikator erkennen können. Davon profitieren auch alle, die einen Bildschirm in einer hell beleuchteten Umgebung verwenden, etwa draußen in der Sonne. [WCAG 2.1 SC 1.4.11 Kontrast von Nicht-Text-Inhalten](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) verlangt für den visuellen Fokusindikator ein Kontrastverhältnis von mindestens 3:1.

- Barrierefreie visuelle Fokusindikatoren: [Give Your Site Some Focus! Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Kognition

Wenn jemand verschiedene Eingabemethoden kombiniert, ist möglicherweise nicht offensichtlich, warum der Fokusindikator erscheint und wieder verschwindet. Für Nutzer mit kognitiven Einschränkungen oder geringerer technischer Erfahrung kann dieses uneinheitliche Verhalten interaktiver Elemente verwirrend sein.

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

Wenn Sie nacheinander auf die einzelnen Elemente klicken, sehen Sie: Wird der Fokusring mit `:focus` gestaltet, zeigt der UA ihn auch an, wenn Sie auf die Schaltfläche klicken. Wird er dagegen mit `:focus-visible` gestaltet, zeigt der UA beim Klicken auf die Schaltfläche keinen Fokusring an – genau wie beim Standardverhalten.

Wenn Sie anschließend mit der Tabulatortaste durch die Elemente navigieren, sehen Sie, dass der UA in allen drei Fällen – Standardverhalten, `:focus` und `:focus-visible` – einen Fokusring um die Schaltfläche anzeigt, sobald Sie sie mit der Tastatur erreichen.

Das zeigt, wie `:focus-visible` es ermöglicht, bei der Entscheidung, wann ein Fokusring angezeigt werden soll, der Logik des Browsers zu folgen.

{{EmbedLiveSample("Comparing :focus and :focus-visible", "100%", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
