---
title: "ARIA: checkbox Rolle"
slug: Web/Accessibility/ARIA/Roles/checkbox_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `checkbox` Rolle ist für ankreuzbare interaktive Steuerungen gedacht. Elemente, die `role="checkbox"` enthalten, müssen auch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) Attribut beinhalten, um den Status der Checkbox für unterstützende Technologien sichtbar zu machen.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> [!NOTE]
> Die erste Regel von ARIA lautet, dass wenn ein nativer HTML-Element oder Attribut die benötigte Semantik und das Verhalten bietet, dieses anstelle der Umgestaltung eines Elements und Hinzufügens von ARIA verwendet werden sollte. Stattdessen verwenden Sie das native [HTML-Checkbox von `<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) (mit einem zugehörigen {{HTMLElement('label')}}), das alle erforderlichen Funktionen nativ bereitstellt:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Remember my preferences</label>
```

## Beschreibung

Das native HTML-Checkbox ([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)) Formular-Steuerelement hat zwei Zustände ("ausgewählt" oder "nicht ausgewählt"), mit einem [`indeterminate`](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) Zustand, der über JavaScript eingestellt werden kann. Ähnlich kann ein Element mit `role="checkbox"` drei Zustände über das `aria-checked` Attribut sichtbar machen: `true`, `false` oder `mixed`.

Da eine Checkbox eine interaktive Steuerung ist, muss sie fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut, um dies zu ändern. Die erwartete Tastenkombination zur Aktivierung einer Checkbox ist die <kbd>Leertaste</kbd>.

Der Entwickler muss den Wert des `aria-checked` Attributs dynamisch ändern, wenn die Checkbox aktiviert wird.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb einer `checkbox` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `checkbox` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `checkbox` Element, das eine Überschrift enthält.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Da Nachkommen einer `checkbox` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

Aus der Sicht von Benutzern unterstützender Technologien existiert die Überschrift nicht, da der vorherige Code den folgenden im [Accessibility Tree](/de/docs/Glossary/Accessibility_tree) entspricht:

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
  - : Wird verwendet, um es fokussierbar zu machen, sodass der Benutzer unterstützender Technologien es sofort mit der Tabulatortaste auswählen und lesen kann.

### Tastaturinteraktionen

| Taste            | Funktion               |
| ---------------- | ---------------------- |
| <kbd>Leertaste</kbd> | Aktiviert die Checkbox |

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandeln von Mausklicks sowohl auf der Checkbox als auch auf dem zugehörigen Label, das den Status der Checkbox ändert, indem der Wert des `aria-checked` Attributs geändert wird und das Aussehen der Checkbox so verändert wird, dass sie für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`

  - : Behandeln des Falls, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Status der Checkbox zu ändern, indem der Wert des `aria-checked` Attributs geändert wird und das Aussehen der Checkbox so verändert wird, dass sie für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.

## Beispiele

Das folgende Beispiel erstellt ein ansonsten nicht-semantisches Checkbox-Element mithilfe von CSS und JavaScript, um den Status des Elements als ausgewählt oder nicht ausgewählt zu verwalten.

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

{{EmbedLiveSample("Beispiele", 230, 250)}}

## Zugänglichkeitshinweise

Wenn die `checkbox` Rolle zu einem Element hinzugefügt wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Zugänglichkeits-API des Betriebssystems als `checkbox` Rolle ausgeben.
- Wenn sich der `aria-checked` Wert ändert, ein zugängliches Status-Änderungsereignis senden.

Produkte unterstützender Technologie sollten Folgendes tun:

- Bildschirmleser sollten das Element als Checkbox ankündigen und optional Anleitungen geben, wie es aktiviert werden kann.

Personen, die Checkboxes implementieren, sollten Folgendes tun:

- Sicherstellen, dass die Checkbox sowohl über Tastatursteuerungen als auch per Klicks erreicht und bedient werden kann.
- Das `aria-checked` Attribut in Übereinstimmung mit Benutzerinteraktionen auf dem neuesten Stand halten.
- Stile bereitstellen, die anzeigen, wann die Checkbox den Fokus hat.

> [!NOTE]
> Meinungen können darüber abweichen, wie unterstützende Technologien diese Technik handhaben sollten. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können sich ändern.

## Beste Praktiken

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder Attribut die benötigte Semantik und das Verhalten bietet, verwenden Sie es anstelle der Umgestaltung eines Elements und dem Hinzufügen einer ARIA-Rolle, -Zustandes oder -Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML-Checkbox](/de/docs/Web/HTML/Element/input/checkbox) unter Verwendung der Formularsteuerung zu verwenden, anstatt eine Checkbox-Funktionalität mit JavaScript und ARIA neu zu gestalten.

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
- [ARIA: `radio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [ARIA: `menuitemcheckbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `switch` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
