---
title: "ARIA: progressbar-Rolle"
slug: Web/Accessibility/ARIA/Roles/progressbar_role
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{AccessibilitySidebar}}

Die `progressbar`-Rolle definiert ein Element, das den Fortschrittsstatus für Aufgaben anzeigt, die lange dauern.

## Beschreibung

Das `progressbar` Bereichs-Widget zeigt an, dass eine Anfrage eingegangen ist und die Anwendung Fortschritte bei der Erfüllung der angeforderten Aktion macht.

Autoren **können** `aria-valuemin` und `aria-valuemax` setzen, um die minimalen und maximalen Werte des Fortschrittsanzeigers anzugeben. Andernfalls folgen ihre impliziten Werte denselben Regeln wie bei HTMLs [`<input type="range">`](/de/docs/Web/HTML/Element/input/range):

- Wenn [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) fehlt oder keine Zahl ist, beträgt der Standardwert `0` (null).
- Wenn [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) fehlt oder keine Zahl ist, beträgt der Standardwert `100`.
- Die Eigenschaften `aria-valuemin` und `aria-valuemax` müssen nur für die `progressbar`-Rolle festgelegt werden, wenn das Minimum der Fortschrittsanzeige nicht `0` ist oder der Maximalwert nicht `100` ist.
- Der schreibgeschützte [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) sollte bereitgestellt und aktualisiert werden, es sei denn, der Wert ist `indeterminate`, in diesem Fall sollte das Attribut nicht einbezogen werden. Wenn gesetzt, stellen Sie sicher, dass der `aria-valuenow`-Wert zwischen den minimalen und maximalen Werten liegt.

Wenn die `progressbar`-Rolle auf ein HTML {{HTMLElement('progress')}}-Element angewendet wird, kann der zugängliche Name von dem damit verbundenen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `progressbar` enthalten sind. Um dieses Problem zu beheben, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `progressbar`-Elements an, da dies eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `progressbar`-Element, das eine Überschrift enthält.

```html
<div role="progressbar"><h3>Title of my progressbar</h3></div>
```

Da Nachkommen von `progressbar` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="progressbar">
  <h3 role="presentation">Title of my progressbar</h3>
</div>
```

Aus der Perspektive von Benutzern assistiver Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets äquivalent zum folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) sind:

```html
<div role="progressbar">Title of my progressbar</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
  - : Nur vorhanden und erforderlich, wenn der Wert nicht unbestimmt ist. Auf einen Dezimalwert zwischen `0` oder `aria-valuemin` (falls vorhanden) und `aria-valuemax` gesetzt, der den aktuellen Wert der Fortschrittsanzeige angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive Technologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Falls dies nicht zutreffend wäre, verwenden Sie diese Eigenschaft, um den Fortschrittsanzeige-Wert verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den minimalen Wert darstellt und kleiner als `aria-valuemax` ist. Falls nicht vorhanden, beträgt der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den maximalen Wert darstellt und größer als `aria-valuemin` ist. Falls nicht vorhanden, beträgt der Standardwert `100`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den Stringwert oder identifiziert das Element (oder die Elemente), die das Fortschrittsanzeige-Element benennen und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.

Es wird empfohlen, native {{HTMLElement("progress")}} oder [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente anstelle der `progressbar`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das {{HTMLElement("progress")}}-Element basierend auf dem aktuellen `Wert` in Bezug auf `0`, den minimalen Wert, und den `max`-Wert. Beim Gebrauch nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

## Beispiele

Im folgenden Beispiel verwendet die Fortschrittsanzeige die Standardwerte von 0 und 100 für `aria-valuemin` und `aria-valuemax`:

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

Mit semantischem HTML könnte dies geschrieben werden als:

```html
<label for="loadinglabel">Loading:</label>
<progress id="loadinglabel" max="100" value="23"></progress>
```

## Beste Praktiken

Wenn die Fortschrittsanzeige den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) hinzu, um auf den Status der Fortschrittsanzeige zu verweisen, und setzen Sie das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) auf `true` für den Bereich, bis das Laden abgeschlossen ist.

### Bevorzugen Sie HTML

Es wird empfohlen, native {{HTMLElement("progress")}} oder [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente anstelle der `progressbar`-Rolle zu verwenden.

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
