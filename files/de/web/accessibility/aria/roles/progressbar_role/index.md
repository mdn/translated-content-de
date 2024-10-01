---
title: "ARIA: Rolle progressbar"
slug: Web/Accessibility/ARIA/Roles/progressbar_role
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{AccessibilitySidebar}}

Die Rolle `progressbar` definiert ein Element, das den Fortschrittsstatus für Aufgaben anzeigt, die lange dauern.

## Beschreibung

Das `progressbar`-Bereichs-Widget zeigt an, dass eine Anfrage eingegangen ist und die Anwendung Fortschritte bei der Ausführung der angeforderten Aktion macht.

Autoren **können** `aria-valuemin` und `aria-valuemax` festlegen, um die minimalen und maximalen Fortschrittsanzeigewerte anzuzeigen. Andernfalls folgen ihre impliziten Werte denselben Regeln wie HTMLs [`<input type="range">`](/de/docs/Web/HTML/Element/input/range):

- Wenn [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) fehlt oder keine Zahl ist, wird standardmäßig `0` (null) verwendet.
- Wenn [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) fehlt oder keine Zahl ist, wird standardmäßig `100` verwendet.
- Die Eigenschaften `aria-valuemin` und `aria-valuemax` müssen nur für die Rolle `progressbar` festgelegt werden, wenn das Minimum der Fortschrittsleiste nicht `0` oder der Maximalwert nicht `100` ist.
- Der schreibgeschützte Wert [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) sollte bereitgestellt und aktualisiert werden, es sei denn, der Wert ist `unbestimmt`, in diesem Fall sollte das Attribut nicht enthalten sein. Wenn festgelegt, stellen Sie sicher, dass der `aria-valuenow`-Wert zwischen den minimalen und maximalen Werten liegt.

Wenn die Rolle `progressbar` auf ein HTML-{{HTMLElement('progress')}}-Element angewendet wird, kann der zugängliche Name vom zugeordneten {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `progressbar` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `progressbar`-Elements an, da es sich um eine Rolle handelt, die semantische Kinder nicht unterstützt.

Beispielsweise betrachten Sie folgendes `progressbar`-Element, das eine Überschrift enthält.

```html
<div role="progressbar"><h3>Title of my progressbar</h3></div>
```

Da Nachkommen von `progressbar` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="progressbar">
  <h3 role="presentation">Title of my progressbar</h3>
</div>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} entsprechen:

```html
<div role="progressbar">Title of my progressbar</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
  - : Nur vorhanden und erforderlich, wenn der Wert nicht unbestimmt ist. Auf einen Dezimalwert zwischen `0`, oder `aria-valuemin` falls vorhanden, und `aria-valuemax` einstellen, der den aktuellen Wert der Fortschrittsleiste angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Prozentsatz. Wenn dies nicht genau wäre, verwenden Sie diese Eigenschaft, um den Wert der Fortschrittsleiste verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert einstellen, der den Minimalwert darstellt, und kleiner als `aria-valuemax`. Wenn nicht vorhanden, beträgt der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert einstellen, der den Maximalwert darstellt, und größer als `aria-valuemin`. Wenn nicht vorhanden, beträgt der Standardwert `100`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Progressbar-Element kennzeichnen und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.

Es wird empfohlen, ein natives {{HTMLElement("progress")}}-Element oder [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente anstelle der `progressbar`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das {{HTMLElement("progress")}}-Element basierend auf dem aktuellen `Wert` im Verhältnis zu `0`, dem Minimalwert, und dem `Max`-Wert. Bei der Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

## Beispiele

Im folgenden Beispiel verwendet die Fortschrittsleiste die Standardwerte 0 und 100 für `aria-valuemin` und `aria-valuemax`:

```html
<div>
  <span id="loadinglabel">Loading:</span>
  <span role="progressbar" aria-labelledby="loadinglabel" aria-valuenow="23">
    <svg width="100" height="10">
      <rect height="10" width="100" stroke="black" fill="black" />
      <rect height="10" width="23" fill="white" />
    </svg>
  </span>
</div>
```

Unter Verwendung von semantischem HTML könnte dies geschrieben werden als:

```html
<label for="loadinglabel">Loading:</label>
<progress id="loadinglabel" max="100" value="23"></progress>
```

## Beste Praktiken

Wenn die Fortschrittsleiste den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut hinzu, um auf den Status der Fortschrittsleiste zu verweisen, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)-Attribut auf `true` für den Bereich, bis er fertig geladen ist.

### Bevorzugen Sie HTML

Es wird empfohlen, ein natives {{HTMLElement("progress")}}-Element oder [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente anstelle der `progressbar`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('progress')}} Element
- Weitere Bereichs-Widgets beinhalten:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
