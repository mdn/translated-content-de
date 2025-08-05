---
title: "ARIA: Rolle `meter`"
short-title: meter
slug: Web/Accessibility/ARIA/Reference/Roles/meter_role
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die Rolle `meter` wird verwendet, um ein Element zu identifizieren, das als Messgerät fungiert.

> [!NOTE]
> Wenn möglich, wird empfohlen, ein natives {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden, da native Elemente von Benutzeragenten und unterstützender Technologie breiter unterstützt werden.

## Beschreibung

Ein Messgerät ist eine grafische Anzeige eines numerischen Werts innerhalb eines definierten Bereichs. Zum Beispiel die Anzeige des Akkuladestands. Ein Messgerät ist nicht geeignet für Werte, die keine bedeutungsvolle obere Grenze haben. Messgeräte sollten nicht verwendet werden, um Fortschritt anzuzeigen (z.B. Ladebalken); hierfür sollte das {{HTMLElement('progress')}}-Element verwendet werden.

Jedes Element mit `role="meter"` muss auch eines der folgenden Attribute besitzen:

- Ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut.
- Ein [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut, das auf ein Element verweist, dessen Text das Messgerät beschreibt.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die in einer Plattform-Zugriffs-API nur Text enthalten können. Zugriffs-APIs können keine semantischen Elemente darstellen, die in einem `meter` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `meter`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `meter`-Element, das eine Überschrift enthält.

```html
<div role="meter"><h3>Title of my meter</h3></div>
```

Da Nachkommen von `meter` präsentationell sind, ist der folgende Code äquivalent:

```html
<div role="meter"><h3 role="presentation">Title of my meter</h3></div>
```

Aus der Perspektive des Benutzers assistiver Technologien existiert die Überschrift nicht, da die vorherigen Codefragmente dem folgenden im {{Glossary("Accessibility_tree", "Zugriffstree")}} entsprechen:

```html
<div role="meter">Title of my meter</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Wird auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Messgeräts angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien stellen häufig den Wert von `aria-valuenow` als Prozentsatz dar. Wenn dies nicht genau wäre, verwenden Sie diese Eigenschaft, um den Messwert verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Wird auf einen Dezimalwert gesetzt, der den Minimalwert darstellt und kleiner ist als `aria-valuemax`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Wird auf einen Dezimalwert gesetzt, der den Maximalwert darstellt und größer ist als `aria-valuemin`.

Es wird empfohlen, ein natives {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden. Benutzeragenten stellen ein gestaltetes Widget für ein {{HTMLElement("meter")}}-Element basierend auf dem aktuellen `value` in Bezug auf die `min`- und `max`-Werte bereit. Bei der Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

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

Im obigen Szenario, wenn sich der Wert von `aria-valuenow` aktualisiert, muss auch die Breite des SVG aktualisiert werden, wie im Beispiel für ein funktionierendes Messgerät in den [ARIA Authoring Practices Guide (APG) beschrieben](https://www.w3.org/WAI/ARIA/apg/patterns/meter/examples/meter/).

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('meter')}}
- {{HTMLElement('progress')}}
