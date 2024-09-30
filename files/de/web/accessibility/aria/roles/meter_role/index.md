---
title: "ARIA: meter-Rolle"
slug: Web/Accessibility/ARIA/Roles/meter_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `meter`-Rolle wird verwendet, um ein Element zu identifizieren, das als Zähler verwendet wird.

> [!NOTE]
> Wo möglich, wird empfohlen, ein natives {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden, da native Elemente von Benutzeragenten und unterstützender Technologie breiter unterstützt werden.

## Beschreibung

Ein Zähler ist eine grafische Anzeige eines numerischen Wertes innerhalb eines definierten Bereichs. Zum Beispiel die Anzeige des Batteriestands in Prozent. Ein Zähler ist nicht geeignet für Werte, die kein sinnvolles maximales Limit haben. Zähler sollten nicht verwendet werden, um Fortschritt anzuzeigen (zum Beispiel beim Laden), hierfür sollte das {{HTMLElement('progress')}}-Element verwendet werden.

Jedes Element mit `role="meter"` muss auch eines der folgenden Attribute haben:

- Ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut.
- Ein [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut, das auf ein Element mit Text verweist, der den Zähler beschreibt.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente, die in einem `meter` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `meter`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `meter`-Element, das eine Überschrift enthält.

```html
<div role="meter"><h3>Title of my meter</h3></div>
```

Da Nachkommen von `meter` präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="meter"><h3 role="presentation">Title of my meter</h3></div>
```

Aus der Perspektive des Benutzers der unterstützenden Technologie existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem Folgenden im [Accessibility-Tree](/de/docs/Glossary/Accessibility_tree) entsprechen:

```html
<div role="meter">Title of my meter</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
  - : Wird auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Zählers angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Wenn dies nicht genau wäre, verwenden Sie diese Eigenschaft, um den Zählerwert verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Wird auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Wird auf einen Dezimalwert gesetzt, der den Maximalwert darstellt und größer als `aria-valuemin` ist.

Es wird empfohlen, ein natives {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das {{HTMLElement("meter")}}-Element basierend auf dem aktuellen `value`, wie es sich auf die `min`- und `max`-Werte bezieht. Bei der Verwendung von nicht-semantischen Elementen müssen alle Merkmale des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

## Beispiele

Ein Beispiel für einen Zähler mit `role="meter"`:

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

Im obigen Szenario muss, wenn sich der Wert von `aria-valuenow` ändert, auch die Breite des SVG aktualisiert werden, wie im [W3C-Arbeitsbeispiel für einen Zähler](https://www.w3.org/TR/wai-aria-practices-1.2/examples/meter/meter.html) zu sehen ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('meter')}}
- {{HTMLElement('progress')}}
