---
title: "ARIA: progressbar Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/progressbar_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `progressbar` Rolle definiert ein Element, das den Fortschrittsstatus für Aufgaben anzeigt, die lange dauern.

## Beschreibung

Das `progressbar`-Bereichs-Widget zeigt an, dass eine Anfrage eingegangen ist und die Anwendung Fortschritte bei der Erfüllung der angeforderten Aktion macht.

Autoren **können** `aria-valuemin` und `aria-valuemax` setzen, um die minimalen und maximalen Fortschrittsindikatorwerte anzugeben. Andernfalls folgen ihre impliziten Werte den gleichen Regeln wie bei HTMLs [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range):

- Wenn [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) fehlt oder keine Zahl ist, beträgt der Standardwert `0` (null).
- Wenn [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) fehlt oder keine Zahl ist, beträgt der Standardwert `100`.
- Die Eigenschaften `aria-valuemin` und `aria-valuemax` müssen nur für die `progressbar` Rolle gesetzt werden, wenn das Minimum der Fortschrittsleiste nicht `0` oder der Maximalwert nicht `100` ist.
- Das schreibgeschützte [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) sollte bereitgestellt und aktualisiert werden, es sei denn, der Wert ist `indeterminate`, in diesem Fall sollte das Attribut nicht enthalten sein. Wenn gesetzt, stellen Sie sicher, dass der `aria-valuenow`-Wert zwischen den Minimal- und Maximalwerten liegt.

Wenn die `progressbar` Rolle auf ein HTML-{{HTMLElement('progress')}}-Element angewendet wird, kann der zugängliche Name aus dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Zugänglichkeits-API einer Plattform dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `progressbar` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahren eines `progressbar`-Elements an, da es sich um eine Rolle handelt, die semantische Kinder nicht unterstützt.

Beispielsweise betrachte man das folgende `progressbar`-Element, das eine Überschrift enthält.

```html
<div role="progressbar"><h3>Title of my progressbar</h3></div>
```

Da Nachfahren von `progressbar` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="progressbar">
  <h3 role="presentation">Title of my progressbar</h3>
</div>
```

Aus der Perspektive des Benutzers von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets äquivalent zu folgendem im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} sind:

```html
<div role="progressbar">Title of my progressbar</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Nur vorhanden und erforderlich, wenn der Wert nicht unbestimmt ist. Muss auf einen Dezimalwert zwischen `0`, oder `aria-valuemin`, falls vorhanden, und `aria-valuemax` gesetzt sein, der den aktuellen Wert der Fortschrittsleiste angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Prozentsatz. Wenn dies nicht genau wäre, verwenden Sie diese Eigenschaft, um den Fortschrittsleistenwert verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Setzt einen Dezimalwert, der den Mindestwert darstellt, und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, beträgt der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Setzt einen Dezimalwert, der den Höchstwert darstellt, und größer als `aria-valuemin` ist. Wenn nicht vorhanden, beträgt der Standardwert `100`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das oder die Elemente, die das `progressbar`-Element beschriften und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.

Es wird empfohlen, native {{HTMLElement("progress")}}- oder [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Elemente anstelle der `progressbar` Rolle zu verwenden. Benutzeragenten stellen ein stilisiertes Widget für das {{HTMLElement("progress")}}-Element basierend auf dem aktuellen `value` im Verhältnis zu `0`, dem Minimalwert, und dem `max`-Wert bereit. Bei der Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

## Beispiele

Im folgenden Beispiel verwendet die Fortschrittsleiste die Standardwerte von 0 und 100 für `aria-valuemin` und `aria-valuemax`:

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

Mit semantischem HTML könnte dies wie folgt geschrieben werden:

```html
<label for="loadinglabel">Loading:</label>
<progress id="loadinglabel" max="100" value="23"></progress>
```

## Beste Praktiken

Wenn die Fortschrittsleiste den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut hinzu, um den Status der Fortschrittsleiste zu referenzieren, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)-Attribut auf `true`, bis der Bereich fertig geladen ist.

### Bevorzugen Sie HTML

Es wird empfohlen, native {{HTMLElement("progress")}}- oder [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Elemente anstelle der `progressbar` Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('progress')}} Element
- Andere Bereichs-Widgets beinhalten:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
