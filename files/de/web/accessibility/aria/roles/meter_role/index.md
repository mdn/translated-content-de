---
title: "ARIA: meter-Rolle"
slug: Web/Accessibility/ARIA/Roles/meter_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `meter`-Rolle wird verwendet, um ein Element zu kennzeichnen, das als Messgerät fungiert.

> [!NOTE]
> Wenn möglich, wird empfohlen, ein natives {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden, da native Elemente von Benutzeragenten und unterstützenden Technologien besser unterstützt werden.

## Beschreibung

Ein Messgerät ist eine grafische Anzeige eines numerischen Wertes innerhalb eines definierten Bereichs, z.B. zur Anzeige des Batteriestands. Ein Messgerät ist nicht geeignet für Werte ohne eine sinnvolle maximale Grenze. Messgeräte sollten nicht zur Angabe von Fortschritt (z.B. Laden) verwendet werden; dafür sollte das {{HTMLElement('progress')}}-Element genutzt werden.

Jedes Element mit `role="meter"` muss auch eines der folgenden Attribute haben:

- Ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut.
- Ein [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut, das auf ein Element verweist, das den Messwert beschreibt.

### Alle Nachfahren sind präsent

Es gibt einige Arten von Benutzeroberflächenkomponenten, die in einer Plattform-Zugänglichkeits-API nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `meter` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachfahrenelemente eines `meter`-Elements an, da diese Rolle keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `meter`-Element, das eine Überschrift enthält.

```html
<div role="meter"><h3>Title of my meter</h3></div>
```

Da Nachkommen von `meter` präsent sind, ist der folgende Code äquivalent:

```html
<div role="meter"><h3 role="presentation">Title of my meter</h3></div>
```

Aus der Perspektive eines Benutzers von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Codebeispiele im [Barrierefreiheitsbaum](/de/docs/Glossary/Accessibility_tree) dem folgenden entsprechen:

```html
<div role="meter">Title of my meter</div>
```

### Zugeordnete ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Messinstruments anzeigt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Wenn dies nicht genau wäre, verwenden Sie diese Eigenschaft, um den Messwert verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den Mindestwert darstellt, der kleiner als `aria-valuemax` ist.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den Höchstwert darstellt, der größer als `aria-valuemin` ist.

Es wird empfohlen, ein natives {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das {{HTMLElement("meter")}}-Element basierend auf dem aktuellen `value` in Bezug auf die `min`- und `max`-Werte. Bei Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

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

Im obigen Szenario, wenn sich der `aria-valuenow`-Wert aktualisiert, muss auch die Breite der SVG aktualisiert werden, wie im [W3C-Arbeitsbeispiel für Messgeräte](https://www.w3.org/TR/wai-aria-practices-1.2/examples/meter/meter.html) zu sehen ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('meter')}}
- {{HTMLElement('progress')}}
