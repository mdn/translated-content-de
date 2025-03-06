---
title: "ARIA: checkbox Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `checkbox` Rolle ist für interaktive Steuerelemente, die überprüft werden können. Elemente, die `role="checkbox"` enthalten, müssen auch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut enthalten, um den Status der Checkbox für unterstützende Technologien zugänglich zu machen.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> [!NOTE]
> Die erste Regel von ARIA ist: Wenn ein nativer HTML-Element oder -Attribut die Semantik und das Verhalten hat, die Sie benötigen, verwenden Sie es anstelle der Umwidmung eines Elements und dem Hinzufügen von ARIA. Verwenden Sie stattdessen die native [HTML-Checkbox von `<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) (mit einem zugehörigen {{HTMLElement('label')}}), die von Hause aus die erforderliche Funktionalität bietet:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Remember my preferences</label>
```

## Beschreibung

Das native HTML-Checkbox ([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)) Formularelement hatte zwei Zustände ("checked" oder "not checked"), mit einem [`indeterminate`](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) Zustand, der über JavaScript festgelegt werden kann. Ähnlich kann ein Element mit `role="checkbox"` drei Zustände über das `aria-checked` Attribut ausgeben: `true`, `false` oder `mixed`.

Da eine Checkbox ein interaktives Steuerelement ist, muss sie fokussierbar und zugänglich über die Tastatur sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut, um dies zu ändern. Die erwartete Tastenkombination zur Aktivierung einer Checkbox ist die <kbd>Leertaste</kbd>.

Der Entwickler muss den Wert des `aria-checked` Attributs dynamisch ändern, wenn die Checkbox aktiviert wird.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer zugänglichen API der Plattform dargestellt werden, nur Text enthalten können. Zugangs-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einer `checkbox` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines beliebigen `checkbox` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `checkbox` Element, das eine Überschrift enthält.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Weil Nachkommen einer `checkbox` präsentational sind, entspricht der folgende Code:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

Aus der Sicht des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codebeispiele im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} gleichwertig sind:

```html
<div role="checkbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand einer Checkbox. Dieses Attribut hat einen von drei möglichen Werten:

    - `true`
      - : Die Checkbox ist aktiviert.
    - `false`
      - : Die Checkbox ist nicht aktiviert.
    - `mixed`
      - : Die Checkbox ist teilweise aktiviert oder unbestimmt.

- `tabindex="0"`
  - : Wird verwendet, um sie fokussierbar zu machen, sodass der Benutzer von unterstützender Technologie sofort über die Tastatur darauf zugreifen kann und sie lesen kann.

### Tastaturinteraktionen

| Taste                | Funktion               |
| -------------------- | ---------------------- |
| <kbd>Leertaste</kbd> | Aktiviert die Checkbox |

### Erforderliches JavaScript

#### Erforderliche Event-Handler

- `onclick`
  - : Behandelt Mausklicks sowohl auf der Checkbox als auch auf dem zugehörigen Label, die den Zustand der Checkbox ändern, indem sie den Wert des `aria-checked` Attributs und das Erscheinungsbild der Checkbox ändern, sodass sie für den sehenden Benutzer als aktiviert oder deaktiviert erscheint
- `onKeyDown`

  - : Behandelt den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand der Checkbox zu ändern, indem sie den Wert des `aria-checked` Attributs und das Erscheinungsbild der Checkbox ändern, sodass sie für den sehenden Benutzer als aktiviert oder deaktiviert erscheint

## Beispiele

Das folgende Beispiel erstellt ein ansonsten nicht-schematisches Checkbox-Element unter Verwendung von CSS und JavaScript, um den aktivierten oder deaktivierten Status des Elements zu handhaben.

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

Wenn die `checkbox` Rolle zu einem Element hinzugefügt wird, sollte der Benutzeragent folgendes tun:

- Das Element in der Zugänglichkeits-API des Betriebssystems als `checkbox` Rolle ausgeben.
- Wenn sich der `aria-checked` Wert ändert, ein Ereignis für den geänderten Zugänglichkeitsstatus senden.

Produkte der unterstützenden Technologie sollten folgendes tun:

- Screenreader sollten das Element als Checkbox ankündigen und optional Anweisungen geben, wie es aktiviert werden kann.

Personen, die Checkboxes implementieren, sollten folgendes tun:

- Gewährleisten, dass die Checkbox über sowohl Tastatursteuerungen als auch Klicks erreicht und interagiert werden kann
- Das `aria-checked` Attribut nach Benutzerinteraktionen aktuelle halten
- Stile bereitstellen, die anzeigen, wann die Checkbox den Fokus hat

> [!NOTE]
> Es können unterschiedliche Meinungen darüber bestehen, wie unterstützende Technologien mit dieser Technik umgehen sollten. Die oben bereitgestellten Informationen stellen eine dieser Meinungen dar und können sich ändern.

## Best Practices

Die erste Regel von ARIA ist: Wenn ein nativer HTML-Element oder -Attribut die Semantik und das Verhalten hat, die Sie benötigen, verwenden Sie es anstelle der Umwidmung eines Elements und dem Hinzufügen einer ARIA-Rolle, -Zustand oder -Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML-Checkbox](/de/docs/Web/HTML/Element/input/checkbox) mit Formularsteuerung zu verwenden, anstatt die Funktionalität einer Checkbox mit JavaScript und ARIA neu zu erstellen.

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
- [ARIA: `radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemcheckbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `switch` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
