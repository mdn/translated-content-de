---
title: "ARIA: Rolle progressbar"
short-title: progressbar
slug: Web/Accessibility/ARIA/Reference/Roles/progressbar_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die Rolle `progressbar` definiert ein Element, das den Fortschrittsstatus für Aufgaben anzeigt, die lange dauern.

## Beschreibung

Das `progressbar`-Bereichs-Widget zeigt an, dass eine Anfrage empfangen wurde und die Anwendung Fortschritte bei der Ausführung der angeforderten Aktion macht.

Autoren **können** `aria-valuemin` und `aria-valuemax` setzen, um die minimalen und maximalen Fortschrittsanzeigerwerte anzugeben. Andernfalls folgen ihre impliziten Werte denselben Regeln wie die der HTML-Elemente [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range):

- Wenn [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) fehlt oder keine Zahl ist, ist der Standardwert `0` (null).
- Wenn [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) fehlt oder keine Zahl ist, ist der Standardwert `100`.
- Die Eigenschaften `aria-valuemin` und `aria-valuemax` müssen nur für die Rolle `progressbar` gesetzt werden, wenn das Minimum der Fortschrittsleiste nicht `0` oder der Maximalwert nicht `100` ist.
- Der schreibgeschützte [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) sollte bereitgestellt und aktualisiert werden, es sei denn, der Wert ist `indeterminate`, in diesem Fall sollte das Attribut nicht enthalten sein. Wenn gesetzt, stellen Sie sicher, dass der Wert von `aria-valuenow` zwischen den minimalen und maximalen Werten liegt.

Wenn die Rolle `progressbar` auf ein HTML-{{HTMLElement('progress')}}-Element angewendet wird, kann der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachfahren sind präsentational

Es gibt einige Typen von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einem `progressbar` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente des `progressbar`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel, beachten Sie das folgende `progressbar`-Element, das eine Überschrift enthält.

```html
<div role="progressbar"><h3>Title of my progressbar</h3></div>
```

Da Nachfahren von `progressbar` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="progressbar">
  <h3 role="presentation">Title of my progressbar</h3>
</div>
```

Aus der Perspektive der Benutzer von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codeausschnitte im {{Glossary("Accessibility_tree", "Accessibility-Tree")}} dem folgenden entsprechen:

```html
<div role="progressbar">Title of my progressbar</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Nur vorhanden und erforderlich, wenn der Wert nicht unbestimmt ist. Setzen Sie einen Dezimalwert zwischen `0`, oder `aria-valuemin`, wenn vorhanden, und `aria-valuemax`, der den aktuellen Wert der Fortschrittsleiste angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Wenn dies nicht genau wäre, verwenden Sie diese Eigenschaft, um den Wert der Fortschrittsleiste verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Auf einen dezimalen Wert gesetzt, der den minimalen Wert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, ist der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Auf einen dezimalen Wert gesetzt, der den maximalen Wert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, ist der Standardwert `100`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Fortschrittsbalken-Element kennzeichnen und einen zugreifbaren Namen bereitstellen. Ein zugänglicher Name ist erforderlich.

Es wird empfohlen, ein nativer {{HTMLElement("progress")}} oder [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Elemente statt der Rolle `progressbar` zu verwenden. Benutzeragenten stellen ein stilisiertes Widget für das {{HTMLElement("progress")}}-Element basierend auf dem aktuellen `value` bereit, wie es sich auf `0`, den Mindestwert, und den `max`-Wert bezieht. Wenn nicht-semantische Elemente verwendet werden, müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

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

Mit semantischem HTML könnte dies so geschrieben werden:

```html
<label for="loadinglabel">Loading:</label>
<progress id="loadinglabel" max="100" value="23"></progress>
```

## Beste Praktiken

Wenn die Fortschrittsleiste den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, beziehen Sie das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) ein, um auf den Status der Fortschrittsleiste zu verweisen, und setzen Sie das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) auf `true` in dem Bereich, bis er das Laden abgeschlossen hat.

### Bevorzugen Sie HTML

Es wird empfohlen, ein nativer {{HTMLElement("progress")}} oder [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Elemente statt der Rolle `progressbar` zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-{{HTMLElement('progress')}}-Element
- Weitere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
