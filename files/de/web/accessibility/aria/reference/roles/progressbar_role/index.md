---
title: "ARIA: Rolle progressbar"
short-title: progressbar
slug: Web/Accessibility/ARIA/Reference/Roles/progressbar_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `progressbar` definiert ein Element, das den Fortschritt länger dauernder Aufgaben anzeigt.

## Beschreibung

Das Bereichs-Widget `progressbar` zeigt an, dass eine Anfrage eingegangen ist und die Anwendung bei der Ausführung der angeforderten Aktion Fortschritte macht.

Autoren **können** `aria-valuemin` und `aria-valuemax` festlegen, um den Mindest- und Höchstwert der Fortschrittsanzeige anzugeben. Andernfalls gelten für die impliziten Werte dieselben Regeln wie für [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) in HTML:

- Wenn [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) fehlt oder keine Zahl ist, wird standardmäßig `0` (null) verwendet.
- Wenn [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) fehlt oder keine Zahl ist, wird standardmäßig `100` verwendet.
- Die Eigenschaften `aria-valuemin` und `aria-valuemax` müssen für die Rolle `progressbar` nur festgelegt werden, wenn der Mindestwert der Fortschrittsanzeige nicht `0` oder der Höchstwert nicht `100` ist.
- Das schreibgeschützte Attribut [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) sollte angegeben und aktualisiert werden, sofern der Wert nicht `indeterminate` ist. In diesem Fall darf das Attribut nicht enthalten sein. Wenn es gesetzt ist, muss der Wert von `aria-valuenow` zwischen dem Mindest- und dem Höchstwert liegen.

Wenn die Rolle `progressbar` auf ein HTML-Element {{HTMLElement('progress')}} angewendet wird, kann der zugängliche Name vom zugehörigen Element {{HTMLElement('label')}} stammen. Verwenden Sie andernfalls [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn eine sichtbare Beschriftung vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn keine sichtbare Beschriftung vorhanden ist.

### Alle Nachfahren sind rein präsentationsbezogen

Manche Arten von Benutzeroberflächenkomponenten können in einer Barrierefreiheits-API der Plattform nur Text enthalten. Barrierefreiheits-APIs können semantische Elemente innerhalb einer `progressbar` nicht darstellen. Um diese Einschränkung zu berücksichtigen, weisen Browser allen Nachfahren eines `progressbar`-Elements automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu, da die Rolle `progressbar` keine semantischen Kindelemente unterstützt.

Betrachten Sie beispielsweise das folgende `progressbar`-Element, das eine Überschrift enthält.

```html
<div role="progressbar"><h3>Title of my progressbar</h3></div>
```

Da Nachfahren von `progressbar` rein präsentationsbezogen sind, ist der folgende Code gleichwertig:

```html
<div role="progressbar">
  <h3 role="presentation">Title of my progressbar</h3>
</div>
```

Aus Sicht von Nutzern assistiver Technologien existiert die Überschrift nicht, da die vorherigen Codebeispiele im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} dem Folgenden entsprechen:

```html
<div role="progressbar">Title of my progressbar</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Nur vorhanden und erforderlich, wenn der Wert nicht unbestimmt ist. Legen Sie einen Dezimalwert fest, der den aktuellen Wert der Fortschrittsanzeige angibt und zwischen `0` beziehungsweise, falls vorhanden, `aria-valuemin` und `aria-valuemax` liegt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Assistive Technologien geben den Wert von `aria-valuenow` häufig als Prozentsatz wieder. Falls dies nicht zutreffend wäre, verwenden Sie diese Eigenschaft, um den Wert der Fortschrittsanzeige verständlich anzugeben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Legen Sie einen Dezimalwert fest, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Falls die Eigenschaft nicht vorhanden ist, beträgt der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Legen Sie einen Dezimalwert fest, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Falls die Eigenschaft nicht vorhanden ist, beträgt der Standardwert `100`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element beziehungsweise die Elemente, die das `progressbar`-Element beschriften und ihm damit einen zugänglichen Namen geben. Ein zugänglicher Name ist erforderlich.

Es wird empfohlen, statt der Rolle `progressbar` ein natives Element {{HTMLElement("progress")}} oder [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) zu verwenden. User Agents stellen für das Element {{HTMLElement("progress")}} ein gestaltetes Widget bereit, das auf dem aktuellen `value` im Verhältnis zu `0`, dem Mindestwert und dem Wert von `max` basiert. Werden nicht semantische Elemente verwendet, müssen sämtliche Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

## Bewährte Verfahren

Wenn die Fortschrittsanzeige den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, verwenden Sie das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), um auf den Status der Fortschrittsanzeige zu verweisen. Setzen Sie außerdem das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) für den Bereich auf `true`, bis er vollständig geladen ist.

### HTML bevorzugen

Es wird empfohlen, statt der Rolle `progressbar` ein natives Element {{HTMLElement("progress")}} oder [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) zu verwenden.

## Beispiele

Im folgenden Beispiel verwendet die Fortschrittsanzeige für `aria-valuemin` und `aria-valuemax` die Standardwerte 0 und 100:

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

Mit semantischem HTML könnte dies wie folgt geschrieben werden:

```html
<label for="loadinglabel">Loading:</label>
<progress id="loadinglabel" max="100" value="23"></progress>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Element {{HTMLElement('progress')}}
- Weitere Bereichs-Widgets:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
