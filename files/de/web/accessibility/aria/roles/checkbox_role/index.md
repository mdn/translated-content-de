---
title: "ARIA: checkbox Rolle"
slug: Web/Accessibility/ARIA/Roles/checkbox_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `checkbox` Rolle ist für überprüfbare interaktive Steuerungselemente vorgesehen. Elemente mit `role="checkbox"` müssen auch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) Attribut enthalten, um den Zustand der Checkbox für unterstützende Technologien sichtbar zu machen.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> [!NOTE]
> Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Tag oder ein Attribut die benötigte Semantik und das Verhalten bietet, verwenden Sie diesen anstelle der Umwidmung eines Elements und dem Hinzufügen von ARIA. Verwenden Sie stattdessen das native [HTML-Checkbox-Element `<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) (mit einem zugehörigen {{HTMLElement('label')}}), das bereits alle erforderlichen Funktionen bietet:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Remember my preferences</label>
```

## Beschreibung

Das native HTML-Checkbox-Element ([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)) hat zwei Zustände ("ausgewählt" oder "nicht ausgewählt"), mit einem [`indeterminate`](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) Zustand festlegbar über JavaScript. Ebenso kann ein Element mit `role="checkbox"` drei Zustände über das `aria-checked` Attribut anzeigen: `true`, `false` oder `mixed`.

Da eine Checkbox ein interaktives Steuerelement ist, muss sie fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren einer Checkbox ist die <kbd>Leertaste</kbd>.

Der Entwickler muss den Wert des `aria-checked` Attributs dynamisch ändern, wenn die Checkbox aktiviert wird.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einer `checkbox` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle nachgelagerten Elemente eines `checkbox` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `checkbox` Element, das eine Überschrift enthält.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Da Nachfahren von `checkbox` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

Aus der Perspektive eines Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte gleichwertig sind mit dem folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree):

```html
<div role="checkbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand einer Checkbox. Dieses Attribut hat einen von drei möglichen Werten:

    - `true`
      - : Die Checkbox ist ausgewählt.
    - `false`
      - : Die Checkbox ist nicht ausgewählt.
    - `mixed`
      - : Die Checkbox ist teilweise ausgewählt oder unbestimmt.

- `tabindex="0"`
  - : Wird verwendet, um es fokussierbar zu machen, sodass der Benutzer unterstützender Technologien mit dem Tabulator darauf zugreifen und sofort mit dem Lesen beginnen kann.

### Tastaturinteraktionen

| Taste                | Funktion               |
| -------------------- | ---------------------- |
| <kbd>Leertaste</kbd> | Aktiviert die Checkbox |

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandelt Mausklicks sowohl auf die Checkbox als auch auf das zugehörige Label, ändert den Zustand der Checkbox, indem es den Wert des `aria-checked` Attributs und das Erscheinungsbild der Checkbox ändert, sodass es für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint
- `onKeyDown`

  - : Behandelt den Fall, dass der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand der Checkbox zu ändern, indem der Wert des `aria-checked` Attributs und das Erscheinungsbild der Checkbox geändert werden, damit es für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint

## Beispiele

Das folgende Beispiel erstellt ein ansonsten nicht-semantisches Checkbox-Element unter Verwendung von CSS und JavaScript zur Verwaltung des ausgewählten oder nicht ausgewählten Status des Elements.

### HTML

```html
<span
  role="checkbox"
  id="chkPref"
  aria-checked="false"
  onclick="changeCheckbox()"
  onKeyDown="changeCheckbox(event.code)"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label
  id="chk1-label"
  onclick="changeCheckbox()"
  onKeyDown="changeCheckbox(event.code)"
  >Remember my preferences</label
>
```

### CSS

```css
[role="checkbox"] {
  padding: 5px;
}

[role="checkbox"]:focus {
  border: 2px solid #0198e1;
}

[aria-checked="true"]::before {
  content: "[x]";
}

[aria-checked="false"]::before {
  content: "[ ]";
}
```

### JavaScript

```js
function changeCheckbox(code) {
  const item = document.getElementById("chkPref");
  const checked = item.getAttribute("aria-checked");

  if (code && code !== "Space") {
    return;
  } else if (checked === "true") {
    item.setAttribute("aria-checked", "false");
  } else {
    item.setAttribute("aria-checked", "true");
  }
}
```

{{EmbedLiveSample("Examples", 230, 250)}}

## Zugänglichkeitsbedenken

Wenn die `checkbox` Rolle an ein Element hinzugefügt wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Zugänglichkeits-API des Betriebssystems als `checkbox` Rolle darstellen.
- Wenn sich der `aria-checked` Wert ändert, ein zugängliches Zustandsänderungsereignis senden.

Produkte für unterstützende Technologien sollten Folgendes tun:

- Bildschirmleser sollten das Element als Checkbox ankündigen und optional Anweisungen geben, wie es aktiviert werden kann.

Personen, die Checkboxen implementieren, sollten Folgendes tun:

- Sicherstellen, dass die Checkbox sowohl mit Tastatursteuerungen als auch mit Klicks erreicht und interagiert werden kann
- Das `aria-checked` Attribut nach Benutzerinteraktionen auf dem neuesten Stand halten
- Stile bereitstellen, die anzeigen, wann die Checkbox den Fokus hat

> [!NOTE]
> Die Meinungen darüber, wie unterstützende Technologien diese Technik handhaben sollten, können variieren. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können sich ändern.

## Beste Praktiken

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Tag oder ein Attribut die benötigte Semantik und das Verhalten bietet, verwenden Sie diesen anstelle der Umwidmung eines Elements und dem Hinzufügen einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Es wird daher empfohlen, das native [HTML-Checkbox-Element](/de/docs/Web/HTML/Element/input/checkbox) des Formularsteuerelements zu verwenden, anstatt die Funktionalität der Checkbox mit JavaScript und ARIA neu zu erstellen.

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
- [ARIA: `radio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [ARIA: `menuitemcheckbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `switch` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
