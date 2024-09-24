---
title: "ARIA: meter-Rolle"
slug: Web/Accessibility/ARIA/Roles/meter_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `meter`-Rolle wird verwendet, um ein Element zu identifizieren, das als Messgerät verwendet wird.

> [!NOTE]
> Wann immer möglich, wird empfohlen, ein natives {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden, da native Elemente von Benutzeragenten und unterstützender Technologie breiter unterstützt werden.

## Beschreibung

Ein Messgerät ist eine grafische Anzeige eines numerischen Wertes innerhalb eines definierten Bereichs. Zum Beispiel die Anzeige des Batteriestands in Prozent. Ein Messgerät ist nicht geeignet für Werte ohne eine bedeutungsvolle maximale Begrenzung. Messgeräte sollten nicht verwendet werden, um Fortschritte anzuzeigen (zum Beispiel beim Laden); dafür sollte das {{HTMLElement('progress')}}-Element verwendet werden.

Jedes Element mit `role="meter"` muss auch eines der folgenden Attribute haben:

- Ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut.
- Ein [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut, das auf ein Element mit Text zeigt, das das Messgerät beschreibt.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Barrierefreiheits-API dargestellt werden, nur Text enthalten können. Barrierefreiheits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `meter` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachfolgeelemente eines `meter`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `meter`-Element, das eine Überschrift enthält.

```html
<div role="meter"><h3>Titel meines Messgeräts</h3></div>
```

Da Nachkommen eines `meter` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="meter"><h3 role="presentation">Titel meines Messgeräts</h3></div>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im [Barrierefreiheitsbaum](/de/docs/Glossary/Accessibility_tree) entsprechen:

```html
<div role="meter">Titel meines Messgeräts</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
  - : Wird auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Messgeräts angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Wenn dies nicht genau wäre, verwenden Sie diese Eigenschaft, um den Messwert verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Wird auf einen Dezimalwert gesetzt, der den minimalen Wert darstellt und weniger als `aria-valuemax` ist.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Wird auf einen Dezimalwert gesetzt, der den maximalen Wert darstellt und größer als `aria-valuemin` ist.

Es wird empfohlen, ein natives {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das {{HTMLElement("meter")}}-Element basierend auf dem aktuellen `value` in Bezug auf die `min`- und `max`-Werte. Bei der Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

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
    <rect x="0" y="0" width="100%" height="100%" fill="currentcolor"></rect>
  </svg>
</div>
```

Im obigen Szenario, wenn sich der Wert von `aria-valuenow` ändert, muss auch die Breite der SVG aktualisiert werden, wie es im [W3C-Arbeitsbeispiel für Messgeräte](https://www.w3.org/TR/wai-aria-practices-1.2/examples/meter/meter.html) zu sehen ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('meter')}}
- {{HTMLElement('progress')}}
