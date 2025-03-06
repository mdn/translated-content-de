---
title: "ARIA: progressbar Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/progressbar_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `progressbar`-Rolle definiert ein Element, das den Fortschrittsstatus von Aufgaben anzeigt, die lange dauern.

## Beschreibung

Das `progressbar`-Bereichs-Widget zeigt an, dass eine Anfrage eingegangen ist und die Anwendung Fortschritte bei der Ausführung der angeforderten Aktion macht.

Autoren können `aria-valuemin` und `aria-valuemax` festlegen, um die minimalen und maximalen Werte des Fortschrittsindikators anzugeben. Andernfalls folgen ihre impliziten Werte denselben Regeln wie die von HTMLs [`<input type="range">`](/de/docs/Web/HTML/Element/input/range):

- Wenn [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) fehlt oder kein Wert ist, wird er standardmäßig auf `0` (null) gesetzt.
- Wenn [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) fehlt oder kein Wert ist, wird er standardmäßig auf `100` gesetzt.
- Die Eigenschaften `aria-valuemin` und `aria-valuemax` müssen nur dann für die `progressbar`-Rolle festgelegt werden, wenn das Minimum der Fortschrittsanzeige nicht `0` oder der Maximalwert nicht `100` ist.
- Der schreibgeschützte Wert `aria-valuenow` sollte bereitgestellt und aktualisiert werden, es sei denn, der Wert ist `unbestimmt`, in welchem Fall das Attribut nicht enthalten sein sollte. Wenn festgelegt, stellen Sie sicher, dass der Wert von `aria-valuenow` zwischen den Minimal- und Maximalwerten liegt.

Wenn die `progressbar`-Rolle auf ein HTML-{{HTMLElement('progress')}}-Element angewendet wird, kann der barrierefreie Name von der zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente, die in einer `progressbar` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `progressbar`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `progressbar`-Element, das eine Überschrift enthält.

```html
<div role="progressbar"><h3>Title of my progressbar</h3></div>
```

Da Nachkommen von `progressbar` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="progressbar">
  <h3 role="presentation">Title of my progressbar</h3>
</div>
```

Aus Sicht eines Nutzers der unterstützenden Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} gleichwertig sind:

```html
<div role="progressbar">Title of my progressbar</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Nur vorhanden und erforderlich, wenn der Wert nicht unbestimmt ist. Soll auf einen Dezimalwert zwischen `0` oder `aria-valuemin`, falls vorhanden, und `aria-valuemax` gesetzt werden, der den aktuellen Wert der Fortschrittsanzeige angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Wenn dies nicht genau wäre, verwenden Sie diese Eigenschaft, um den Wert der Fortschrittsanzeige verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Soll auf einen Dezimalwert gesetzt werden, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, ist der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Soll auf einen Dezimalwert gesetzt werden, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, ist der Standardwert `100`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das `progressbar`-Element beschriften und einen barrierefreien Namen bereitstellen. Ein barrierefreier Name ist erforderlich.

Es wird empfohlen, native {{HTMLElement("progress")}}- oder [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente zu verwenden, anstatt die `progressbar`-Rolle. Benutzeragenten bieten ein gestaltetes Widget für das {{HTMLElement("progress")}}-Element basierend auf dem aktuellen `value`, wie es sich auf die `0`, den Mindestwert, und den `max`-Wert bezieht. Beim Verwenden von nicht semantischen Elementen müssen alle Funktionalitäten des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

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

Unter Verwendung von semantischem HTML könnte dies wie folgt geschrieben werden:

```html
<label for="loadinglabel">Loading:</label>
<progress id="loadinglabel" max="100" value="23"></progress>
```

## Beste Praktiken

Wenn die Fortschrittsanzeige den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) hinzu, um auf den Status der Fortschrittsanzeige zu verweisen, und setzen Sie das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) auf `true` bis das Laden abgeschlossen ist.

### Bevorzugen Sie HTML

Es wird empfohlen, native {{HTMLElement("progress")}}- oder [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente anstelle der `progressbar`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('progress')}}-Element
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
