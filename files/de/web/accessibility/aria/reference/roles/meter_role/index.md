---
title: "ARIA: meter-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/meter_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `meter`-Rolle wird verwendet, um ein Element zu identifizieren, das als Messgerät verwendet wird.

> [!NOTE]
> Wenn möglich, wird empfohlen, ein natives {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden, da native Elemente von Benutzeragenten und unterstützender Technologie besser unterstützt werden.

## Beschreibung

Ein Messgerät ist eine grafische Anzeige eines Zahlenwerts innerhalb eines festgelegten Bereichs. Zum Beispiel die Anzeige des Batteriestands in Prozent. Ein Messgerät ist nicht geeignet für Werte, die kein sinnvolles Höchstlimit haben. Messgeräte sollten nicht verwendet werden, um Fortschritt (zum Beispiel Ladefortschritt) anzuzeigen, dies sollte mit dem {{HTMLElement('progress')}}-Element kommuniziert werden.

Jedes Element mit `role="meter"` muss auch eines der folgenden Merkmale haben:

- Ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut.
- Ein [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut, das auf ein Element verweist, das den Messwert beschreibt.

### Alle Nachkommen sind präsentationsorientiert

Es gibt einige Arten von Benutzeroberflächen-Komponenten, die, wenn sie in einer Plattform-Barrierefreiheits-API dargestellt werden, nur Text enthalten können. Barrierefreiheits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `meter` zu repräsentieren. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommelemente eines `meter`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `meter`-Element, das eine Überschrift enthält.

```html
<div role="meter"><h3>Title of my meter</h3></div>
```

Da Nachkommen von `meter` präsentationsorientiert sind, ist der folgende Code äquivalent:

```html
<div role="meter"><h3 role="presentation">Title of my meter</h3></div>
```

Aus der Perspektive eines Nutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} entsprechen:

```html
<div role="meter">Title of my meter</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Wird auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Messgeräts angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Falls dies nicht zutreffend wäre, verwenden Sie diese Eigenschaft, um den Messwert verständlich zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den minimalen Wert darstellt und kleiner als `aria-valuemax` ist.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den maximalen Wert darstellt und größer als `aria-valuemin` ist.

Es wird empfohlen, ein natives {{HTMLElement("meter")}}-Element anstelle der `meter`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das {{HTMLElement("meter")}}-Element basierend auf dem aktuellen `value` in Bezug auf die `min`- und `max`-Werte. Bei der Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

## Beispiele

Ein Beispiel für ein Messgerät, das `role="meter"` verwendet:

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

Im obigen Szenario, wenn der Wert von `aria-valuenow` aktualisiert wird, muss auch die Breite des SVG aktualisiert werden, wie dies im [W3C-Arbeits-Messgeräte-Beispiel](https://www.w3.org/TR/wai-aria-practices-1.2/examples/meter/meter.html) zu sehen ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('meter')}}
- {{HTMLElement('progress')}}
