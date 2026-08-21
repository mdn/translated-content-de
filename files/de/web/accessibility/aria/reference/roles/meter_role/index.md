---
title: "ARIA: meter Rolle"
short-title: meter
slug: Web/Accessibility/ARIA/Reference/Roles/meter_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die `meter` Rolle wird verwendet, um ein Element zu identifizieren, das als Messgerät verwendet wird.

> [!NOTE]
> Wenn möglich, wird empfohlen, ein natives {{HTMLElement("meter")}} Element anstelle der `meter` Rolle zu verwenden, da native Elemente von Benutzeragenten und unterstützender Technologie breiter unterstützt werden.

## Beschreibung

Ein Messgerät ist eine grafische Anzeige eines numerischen Wertes innerhalb eines definierten Bereichs. Zum Beispiel die Akku-Prozentanzeige. Ein Messgerät ist nicht geeignet für Werte, die kein sinnvolles maximales Limit haben. Messgeräte sollten nicht verwendet werden, um Fortschritte (zum Beispiel Laden) anzuzeigen, stattdessen sollte hierfür das {{HTMLElement('progress')}} Element verwendet werden.

Jedes Element mit `role="meter"` muss auch eines der folgenden Attribute haben:

- Ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut.
- Ein [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut, das auf ein Element mit Text verweist, der das Messgerät beschreibt.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `meter` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommen eines jeden `meter` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `meter` Element, das eine Überschrift enthält.

```html
<div role="meter"><h3>Title of my meter</h3></div>
```

Da Nachkommen von `meter` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="meter"><h3 role="presentation">Title of my meter</h3></div>
```

Aus der Sicht des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen.

```html
<div role="meter">Title of my meter</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Wird auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Messgeräts angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren den Wert von `aria-valuenow` häufig als Prozentsatz. Wenn dies nicht genau wäre, verwenden Sie diese Eigenschaft, um den Wert des Messgeräts verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Wird auf einen Dezimalwert gesetzt, der den minimalen Wert darstellt und kleiner als `aria-valuemax` ist.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Wird auf einen Dezimalwert gesetzt, der den maximalen Wert darstellt und größer als `aria-valuemin` ist.

Es wird empfohlen, ein natives {{HTMLElement("meter")}} Element anstelle der `meter` Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das {{HTMLElement("meter")}} Element basierend auf dem aktuellen `value` in Bezug auf die `min`- und `max`-Werte. Wenn nicht-semantische Elemente verwendet werden, müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

## Beispiele

Ein Beispiel für ein Messgerät mit `role="meter"`:

```html
<div
  role="meter"
  aria-valuenow="90"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-labelledby="cpu_usage_label">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width: 90%">
    <rect x="0" y="0" width="100%" height="100%" fill="currentColor"></rect>
  </svg>
</div>
```

Im obigen Szenario muss die Breite der SVG aktualisiert werden, wenn sich der `aria-valuenow` Wert aktualisiert, wie es im [beispielhaften Messgerät der ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/meter/examples/meter/) zu sehen ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('meter')}}
- {{HTMLElement('progress')}}
