---
title: 'ARIA: Rolle "meter"'
short-title: meter
slug: Web/Accessibility/ARIA/Reference/Roles/meter_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `meter`-Rolle wird verwendet, um ein Element zu identifizieren, das als Messgerät genutzt wird.

> [!NOTE]
> Wenn möglich, wird empfohlen, ein nat\(ürliches {{HTMLElement("meter")}}-Element zu verwenden, anstatt der `meter`-Rolle, da nat\(ürliche Elemente von Benutzeragenten und unterstützenden Technologien breiter unterstützt werden.

## Beschreibung

Ein Messgerät ist eine grafische Anzeige eines numerischen Wertes innerhalb eines definierten Bereichs. Beispielsweise die Anzeige des Batteriestands. Ein Messgerät ist nicht geeignet für Werte, die keine sinnvolle obere Grenze haben. Messgeräte sollten nicht verwendet werden, um Fortschritt anzuzeigen (wie beispielsweise das Laden); hierfür sollte das {{HTMLElement('progress')}}-Element verwendet werden.

Jedes Element mit `role="meter"` muss auch eines der folgenden haben:

- Ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut.
- Ein [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut, das auf ein Element mit Text verweist, das das Messgerät beschreibt.

### Alle Nachfahren sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `meter` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahr-Elemente eines `meter`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `meter`-Element, das eine Überschrift enthält.

```html
<div role="meter"><h3>Title of my meter</h3></div>
```

Weil die Nachfahren von `meter` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="meter"><h3 role="presentation">Title of my meter</h3></div>
```

Aus der Perspektive eines Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorhergehenden Codebeispiele im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} äquivalent zum folgenden sind:

```html
<div role="meter">Title of my meter</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Wird auf einen Dezimalwert gesetzt, der zwischen `aria-valuemin` und `aria-valuemax` liegt und den aktuellen Wert des Messgeräts anzeigt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Wenn dies nicht genau wäre, verwenden Sie diese Eigenschaft, um den Messwert verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Wird auf einen Dezimalwert gesetzt, der den Minimalwert darstellt und kleiner als `aria-valuemax` ist.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Wird auf einen Dezimalwert gesetzt, der den Maximalwert darstellt und größer als `aria-valuemin` ist.

Es wird empfohlen, ein nat\(ürliches {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das {{HTMLElement("meter")}}-Element basierend auf dem aktuellen `value` in Bezug auf die `min`- und `max`-Werte. Bei Verwendung nicht-semantischer Elemente müssen alle Funktionen des nat\(ürlichen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

## Beispiele

Ein Beispiel eines Messgeräts mit `role="meter"`:

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

In dem obigen Szenario, wenn sich der Wert von `aria-valuenow` ändert, muss auch die Breite des SVG aktualisiert werden, wie im [ARIA Authoring Practices Guide (APG) working meter example](https://www.w3.org/WAI/ARIA/apg/patterns/meter/examples/meter/) zu sehen ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('meter')}}
- {{HTMLElement('progress')}}
