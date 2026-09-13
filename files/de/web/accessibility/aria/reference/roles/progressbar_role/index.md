---
title: "ARIA: Rolle progressbar"
short-title: progressbar
slug: Web/Accessibility/ARIA/Reference/Roles/progressbar_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die Rolle `progressbar` definiert ein Element, das den Fortschrittsstatus für Aufgaben anzeigt, die lange dauern.

## Beschreibung

Das Bereichs-Steuerelement `progressbar` zeigt an, dass eine Anfrage empfangen wurde und die Anwendung Fortschritte bei der Ausführung der angeforderten Aktion macht.

Autoren **können** `aria-valuemin` und `aria-valuemax` setzen, um die minimalen und maximalen Werte des Fortschrittsanzeigers anzugeben. Andernfalls folgen ihre impliziten Werte denselben Regeln wie beim HTML [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range):

- Wenn [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) fehlt oder keine Zahl ist, wird der Standardwert `0` (null) verwendet.
- Wenn [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) fehlt oder keine Zahl ist, wird der Standardwert `100` verwendet.
- Die Eigenschaften `aria-valuemin` und `aria-valuemax` müssen nur für die Rolle `progressbar` gesetzt werden, wenn das Minimum der Fortschrittsanzeige nicht `0` oder der Maximalwert nicht `100` ist.
- Der schreibgeschützte [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) sollte bereitgestellt und aktualisiert werden, es sei denn, der Wert ist `indeterminate`, in diesem Fall sollte das Attribut nicht enthalten sein. Wenn gesetzt, stellen Sie sicher, dass der Wert von `aria-valuenow` zwischen dem Minimal- und Maximalwert liegt.

Wenn die Rolle `progressbar` auf ein HTML-Element {{HTMLElement('progress')}} angewendet wird, kann der zugängliche Name vom zugehörigen {{HTMLElement('label')}} kommen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachkomme sind präsent

Es gibt einige Arten von Benutzerschnittstellenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `progressbar` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente eines `progressbar`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie folgendes `progressbar`-Element, das eine Überschrift enthält.

```html
<div role="progressbar"><h3>Title of my progressbar</h3></div>
```

Da Nachkommen von `progressbar` präsent sind, ist der folgende Code gleichwertig:

```html
<div role="progressbar">
  <h3 role="presentation">Title of my progressbar</h3>
</div>
```

Aus der Perspektive des Nutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codeausschnitte gleichwertig sind mit folgendem im {{Glossary("Accessibility_tree", "Zugriffsbaum")}}:

```html
<div role="progressbar">Title of my progressbar</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Nur vorhanden und erforderlich, wenn der Wert nicht unbestimmt ist. Setzen Sie einen Dezimalwert zwischen `0`, oder `aria-valuemin` wenn vorhanden, und `aria-valuemax` an, der den aktuellen Wert der Fortschrittsleiste angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Prozentsatz. Wenn dies nicht zutreffend ist, verwenden Sie diese Eigenschaft, um den Wert der Fortschrittsleiste verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Setzen Sie einen Dezimalwert, der den minimalen Wert darstellt, welcher kleiner ist als `aria-valuemax`. Wenn nicht vorhanden, ist der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Setzen Sie einen Dezimalwert, der den maximalen Wert darstellt, welcher größer ist als `aria-valuemin`. Wenn nicht vorhanden, ist der Standardwert `100`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das `progressbar`-Element benennen und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.

Es wird empfohlen, ein natives {{HTMLElement("progress")}}-Element oder ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element anstelle der Rolle `progressbar` zu verwenden. Benutzeragenten bieten ein stilisiertes Steuerelement für das {{HTMLElement("progress")}}-Element basierend auf dem aktuellen `value` im Verhältnis zu `0`, dem Minimalwert und dem `max`-Wert. Bei der Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

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

Mit semantischem HTML könnte dies so geschrieben werden:

```html
<label for="loadinglabel">Loading:</label>
<progress id="loadinglabel" max="100" value="23"></progress>
```

## Best Practices

Wenn die Fortschrittsleiste den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) hinzu, um auf den Status der Fortschrittsleiste zu verweisen, und setzen Sie das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) auf `true` in dem Bereich, bis das Laden abgeschlossen ist.

### Bevorzugen Sie HTML

Es wird empfohlen, ein natives {{HTMLElement("progress")}}-Element oder ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element anstelle der Rolle `progressbar` zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Element {{HTMLElement('progress')}}
- Andere Bereichs-Steuerelemente umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
