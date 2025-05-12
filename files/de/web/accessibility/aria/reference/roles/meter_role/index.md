---
title: "ARIA: meter-Rolle"
short-title: meter
slug: Web/Accessibility/ARIA/Reference/Roles/meter_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `meter`-Rolle wird verwendet, um ein Element zu identifizieren, das als Meter verwendet wird.

> [!NOTE]
> Wo möglich, wird empfohlen, ein natives {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden, da native Elemente von Benutzeragenten und unterstützender Technologie besser unterstützt werden.

## Beschreibung

Ein Meter ist eine grafische Darstellung eines numerischen Werts innerhalb eines definierten Bereichs. Zum Beispiel die Anzeige des Batteriestands in Prozent. Ein Meter ist nicht geeignet für Werte, die kein sinnvolles Maximum haben. Meter sollten nicht verwendet werden, um Fortschritte anzuzeigen (zum Beispiel das Laden); hierfür sollte das {{HTMLElement('progress')}}-Element verwendet werden.

Jedes Element mit `role="meter"` muss auch eines der folgenden Attribute haben:

- Ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut.
- Ein [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut, das auf ein Element mit Text verweist, der das Meter beschreibt.

### Alle Nachfahren sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugränglichkeits-API dargestellt werden, nur Text enthalten können. Zugränglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `meter` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahr-Elemente eines `meter`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `meter`-Element, das eine Überschrift enthält.

```html
<div role="meter"><h3>Title of my meter</h3></div>
```

Da Nachfahren von `meter` präsentativ sind, ist der folgende Code gleichbedeutend:

```html
<div role="meter"><h3 role="presentation">Title of my meter</h3></div>
```

Aus der Sicht des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets im {{Glossary("Accessibility_tree", "accessibility tree")}} dem folgenden entsprechen:

```html
<div role="meter">Title of my meter</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Wird auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Meter anzeigt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Wenn dies ungenau wäre, verwenden Sie diese Eigenschaft, um den Meterwert verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Wird auf einen Dezimalwert gesetzt, der den minimalen Wert darstellt und geringer ist als `aria-valuemax`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Wird auf einen Dezimalwert gesetzt, der den maximalen Wert darstellt und größer ist als `aria-valuemin`.

Es wird empfohlen, ein natives {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden. Benutzeragenten stellen ein stilisiertes Widget für das {{HTMLElement("meter")}}-Element basierend auf dem aktuellen `value` in Bezug auf die `min`- und `max`-Werte bereit. Bei der Verwendung von nicht-semantischen Elementen müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

## Beispiele

Ein Beispiel eines Meters, das `role="meter"` verwendet:

```html
<div
  role="meter"
  aria-valuenow="90"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-labelledby="cpu_usage_label">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width: 90%">
    <rect x="0" y="0" width="100%" height="100%" fill="currentcolor"></rect>
  </svg>
</div>
```

In dem oben genannten Szenario, wenn der `aria-valuenow`-Wert aktualisiert wird, muss auch die Breite des SVG aktualisiert werden, wie in [dem W3C-Arbeitsexample für Meter](https://www.w3.org/TR/wai-aria-practices-1.2/examples/meter/meter.html) zu sehen ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('meter')}}
- {{HTMLElement('progress')}}
