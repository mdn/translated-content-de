---
title: "ARIA: progressbar-Rolle"
slug: Web/Accessibility/ARIA/Roles/progressbar_role
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{AccessibilitySidebar}}

Die `progressbar`-Rolle definiert ein Element, das den Fortschrittsstatus für Aufgaben anzeigt, die lange dauern.

## Beschreibung

Das `progressbar`-Bereichs-Widget zeigt an, dass eine Anfrage empfangen wurde und die Anwendung Fortschritte bei der Ausführung der angeforderten Aktion macht.

Autoren **können** aria-valuemin und aria-valuemax festlegen, um die minimalen und maximalen Werte des Fortschrittsindikators anzuzeigen. Andernfalls folgen ihre impliziten Werte denselben Regeln wie bei HTMLs [`<input type="range">`](/de/docs/Web/HTML/Element/input/range):

- Wenn [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) fehlt oder keine Zahl ist, ist der Standardwert `0` (null).
- Wenn [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) fehlt oder keine Zahl ist, ist der Standardwert `100`.
- Die Eigenschaften `aria-valuemin` und `aria-valuemax` müssen nur für die `progressbar`-Rolle festgelegt werden, wenn der Mindestwert nicht `0` oder der Höchstwert nicht `100` ist.
- Das schreibgeschützte [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) sollte bereitgestellt und aktualisiert werden, es sei denn, der Wert ist `indeterminate`, in diesem Fall wird das Attribut nicht eingeschlossen. Wenn gesetzt, stellen Sie sicher, dass der `aria-valuenow`-Wert zwischen dem minimalen und maximalen Wert liegt.

Wenn die `progressbar`-Rolle auf ein HTML-{{HTMLElement('progress')}}-Element angewendet wird, kann der zugängliche Name vom zugeordneten {{HTMLElement('label')}} kommen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachfahren sind präsentieren

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einer `progressbar` zu repräsentieren. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachfahren eines `progressbar`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `progressbar`-Element, das eine Überschrift enthält.

```html
<div role="progressbar"><h3>Title of my progressbar</h3></div>
```

Da Nachfahren von `progressbar` präsentieren, ist der folgende Code gleichwertig:

```html
<div role="progressbar">
  <h3 role="presentation">Title of my progressbar</h3>
</div>
```

Aus Sicht eines Benutzers assistiver Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets gleichbedeutend mit dem Folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) sind:

```html
<div role="progressbar">Title of my progressbar</div>
```

### Zugeordnete WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
  - : Nur vorhanden und erforderlich, wenn der Wert nicht unbestimmt ist. Auf einen Dezimalwert zwischen `0`, oder `aria-valuemin` falls vorhanden, und `aria-valuemax` gesetzt, der den aktuellen Wert der Fortschrittsanzeige angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive Technologien präsentieren oft den Wert von `aria-valuenow` als Prozentsatz. Wenn dies nicht genau wäre, verwenden Sie diese Eigenschaft, um den Wert der Fortschrittsanzeige verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, ist der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, ist der Standardwert `100`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das progressbar-Element beschriften, um einen zugänglichen Namen bereitzustellen. Ein zugänglicher Name ist erforderlich.

Es wird empfohlen, ein natives {{HTMLElement("progress")}} oder [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) statt der `progressbar`-Rolle zu verwenden. Benutzeragenten bieten ein gestyltes Widget für das {{HTMLElement("progress")}}-Element basierend auf dem aktuellen `Wert` im Verhältnis zu `0`, dem Mindestwert und dem `Max`-Wert. Bei der Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

## Beispiele

Im folgenden Beispiel verwendet die Fortschrittsanzeige die Standardwerte 0 und 100 für `aria-valuemin` und `aria-valuemax`:

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

Mit semantischem HTML könnte dies folgendermaßen geschrieben werden:

```html
<label for="loadinglabel">Loading:</label>
<progress id="loadinglabel" max="100" value="23"></progress>
```

## Beste Praktiken

Wenn die Fortschrittsanzeige den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut hinzu, um den Status der Fortschrittsanzeige zu referenzieren, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)-Attribut auf `true` für den Bereich, bis er fertig geladen ist.

### Bevorzugen Sie HTML

Es wird empfohlen, ein natives {{HTMLElement("progress")}} oder [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Elemente statt der `progressbar`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('progress')}}-Element
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
