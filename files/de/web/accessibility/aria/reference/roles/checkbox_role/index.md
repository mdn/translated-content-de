---
title: "ARIA: checkbox Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `checkbox` Rolle ist für interaktive, anklickbare Steuerelemente bestimmt. Elemente, die `role="checkbox"` enthalten, müssen auch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut beinhalten, um den Status der Checkbox für unterstützende Technologien offenzulegen.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> [!NOTE]
> Die erste Regel von ARIA besagt, dass, wenn ein nativer HTML-Element oder -Attribut die Semantik und das Verhalten bietet, das Sie benötigen, Sie es verwenden sollten, anstatt ein Element umzuwidmen und ARIA hinzuzufügen. Verwenden Sie stattdessen die native [HTML-Checkbox des `<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) (mit einem zugehörigen {{HTMLElement('label')}}), die nativ alle erforderlichen Funktionen bereitstellt:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Remember my preferences</label>
```

## Beschreibung

Die native HTML-Checkbox ([`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) Formular-Steuerelemente hatten zwei Zustände ("geprüft" oder "nicht geprüft"), mit einem [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) Zustand, der über JavaScript gesetzt werden kann. Ähnlich kann ein Element mit `role="checkbox"` drei Zustände über das `aria-checked` Attribut offenlegen: `true`, `false` oder `mixed`.

Da eine Checkbox ein interaktives Steuerelement ist, muss es fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut, um dies zu ändern. Die erwartete Tastenkombination zur Aktivierung einer Checkbox ist die <kbd>Space</kbd>-Taste.

Es ist erforderlich, dass der Entwickler den Wert des `aria-checked` Attributs dynamisch ändert, wenn die Checkbox aktiviert wird.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einer `checkbox` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente eines `checkbox` Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `checkbox` Element, das eine Überschrift enthält.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Da Nachkommen von `checkbox` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Schnipsel dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="checkbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand einer Checkbox. Dieses Attribut hat einen von drei möglichen Werten:

    - `true`
      - : Die Checkbox ist geprüft.
    - `false`
      - : Die Checkbox ist nicht geprüft.
    - `mixed`
      - : Die Checkbox ist teilweise geprüft oder unbestimmt.

- `tabindex="0"`
  - : Wird verwendet, um es fokussierbar zu machen, damit der Benutzer der unterstützenden Technologie direkt darauf zugreifen und es lesen kann.

### Tastaturinteraktionen

| Taste            | Funktion               |
| ---------------- | ---------------------- |
| <kbd>Space</kbd> | Aktiviert die Checkbox |

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandeln Sie Mausklicks sowohl auf der Checkbox als auch auf dem zugehörigen Label, die den Zustand der Checkbox ändern, indem der Wert des `aria-checked` Attributs und das Aussehen der Checkbox geändert werden, sodass es als geprüft oder nicht geprüft für den sehenden Benutzer erscheint
- `onKeyDown`

  - : Behandeln Sie den Fall, in dem der Benutzer die <kbd>Space</kbd>-Taste drückt, um den Zustand der Checkbox zu ändern, indem der Wert des `aria-checked` Attributs und das Aussehen der Checkbox geändert werden, sodass es als geprüft oder nicht geprüft für den sehenden Benutzer erscheint

## Beispiele

Das folgende Beispiel erstellt ein ansonsten semantisches Checkbox-Element, das CSS und JavaScript verwendet, um den geprüften oder ungeprüften Status des Elements zu verwalten.

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

Wenn die `checkbox` Rolle zu einem Element hinzugefügt wird, sollte der Benutzeragent Folgendes tun:

- Das Element in der Zugänglichkeits-API des Betriebssystems als `checkbox` Rolle ausweisen.
- Wenn sich der Wert von `aria-checked` ändert, ein Ereignis für den zugänglichen Zustandswechsel senden.

Produkte für unterstützende Technologien sollten Folgendes tun:

- Bildschirmleseprogramme sollten das Element als Checkbox ankündigen und optional Anweisungen bereitstellen, wie es aktiviert werden kann.

Personen, die Checkboxen implementieren, sollten Folgendes tun:

- Stellen Sie sicher, dass die Checkbox erreicht und sowohl über Tastatursteuerungen als auch durch Klicks interagiert werden kann
- Halten Sie das `aria-checked` Attribut nach Benutzerinteraktionen aktuell
- Stellen Sie Stile bereit, die anzeigen, wenn die Checkbox den Fokus hat

> [!NOTE]
> Die Meinungen darüber, wie unterstützende Technologie mit dieser Technik umgehen sollte, können unterschiedlich sein. Die oben bereitgestellte Information ist eine dieser Meinungen und kann sich ändern.

## Beste Praktiken

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder -Attribut über die nötige Semantik und das erforderliche Verhalten verfügt, verwenden Sie es anstelle eines zweckentfremdeten Elements und fügen Sie keine ARIA-Rolle, Zustand oder Eigenschaft hinzu, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML-Checkbox](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit Formularsteuerelementen zu verwenden, anstatt die Funktionalität einer Checkbox mit JavaScript und ARIA neu zu erstellen.

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [ARIA: `radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemcheckbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `switch` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
