---
title: "ARIA: checkbox Rolle"
short-title: checkbox
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die `checkbox` Rolle ist für überprüfbare interaktive Steuerungen vorgesehen. Elemente, die `role="checkbox"` enthalten, müssen auch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut enthalten, um den Zustand der Checkbox für unterstützende Technologien sichtbar zu machen.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> [!NOTE]
> Die erste Regel von ARIA besagt, dass, wenn ein natives HTML-Element oder Attribut die benötigten Semantiken und Verhaltensweisen bietet, Sie es verwenden sollten, anstatt ein Element umzufunktionieren und ARIA hinzuzufügen. Verwenden Sie stattdessen die native [HTML-Checkbox mit `<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) (mit einem zugehörigen {{HTMLElement('label')}}), die nativ alle erforderlichen Funktionen bereitstellt:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Remember my preferences</label>
```

## Beschreibung

Die nativen HTML-Checkbox ([`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) Formularelemente haben zwei Zustände ("ausgewählt" oder "nicht ausgewählt"), mit einem [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) Zustand, der über JavaScript gesetzt werden kann. Ähnlich kann ein Element mit `role="checkbox"` drei Zustände über das `aria-checked` Attribut ausgeben: `true`, `false` oder `mixed`.

Da eine Checkbox eine interaktive Steuerung ist, muss sie fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren einer Checkbox ist die <kbd>Leertaste</kbd>.

Der Entwickler muss den Wert des `aria-checked` Attributs dynamisch ändern, wenn die Checkbox aktiviert wird.

### Alle Nachkommen sind darstellend

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einer `checkbox` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommen von `checkbox`-Elementen an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `checkbox`-Element, das eine Überschrift enthält.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Da Nachkommen von `checkbox` darstellend sind, ist der folgende Code gleichwertig:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

Aus Sicht des Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Codebeispiele folgendermaßen im {{Glossary("Accessibility_tree", "Accessibility Tree")}} gleichwertig sind:

```html
<div role="checkbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Der Wert von `aria-checked` definiert den Zustand einer Checkbox. Dieses Attribut hat einen von drei möglichen Werten:
    - `true`
      - : Die Checkbox ist ausgewählt.
    - `false`
      - : Die Checkbox ist nicht ausgewählt.
    - `mixed`
      - : Die Checkbox ist teilweise ausgewählt oder unbestimmt.

- `tabindex="0"`
  - : Wird verwendet, um es fokussierbar zu machen, damit der Benutzer von unterstützenden Technologien es sofort mit der Tabulator-Taste erreichen und lesen kann.

### Tastaturinteraktionen

| Taste                | Funktion               |
| -------------------- | ---------------------- |
| <kbd>Leertaste</kbd> | Aktiviert die Checkbox |

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Bearbeiten Sie Mausklicks sowohl auf der Checkbox als auch auf dem zugehörigen Etikett, das den Zustand der Checkbox ändert, indem der Wert des `aria-checked` Attributs und das Aussehen der Checkbox geändert werden, sodass sie für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Behandeln Sie den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand der Checkbox zu ändern, indem der Wert des `aria-checked` Attributs und das Aussehen der Checkbox geändert werden, sodass sie für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.

## Beispiele

Das folgende Beispiel erstellt ein ansonsten nicht-semantisches Checkbox-Element mit CSS und JavaScript, um den Ausgewählt- oder Nicht-Ausgewählt-Status des Elements zu bearbeiten.

### HTML

```html
<span
  role="checkbox"
  id="chkPref"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
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
const item = document.getElementById("chkPref");
const label = document.getElementById("chk1-label");

function changeCheckbox(code) {
  const checked = item.getAttribute("aria-checked");

  if (code && code !== "Space") {
    return;
  }
  if (checked === "true") {
    item.setAttribute("aria-checked", "false");
  } else {
    item.setAttribute("aria-checked", "true");
  }
}

item.addEventListener("keydown", (event) => {
  changeCheckbox(event.code);
});

label.addEventListener("keydown", (event) => {
  changeCheckbox(event.code);
});

item.addEventListener("click", changeCheckbox);
label.addEventListener("click", changeCheckbox);
```

{{EmbedLiveSample("Examples", 230, 250)}}

## Barrierefreiheitsbedenken

Wenn die `checkbox` Rolle zu einem Element hinzugefügt wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Accessibility API des Betriebssystems als `checkbox` Rolle darstellen.
- Wenn sich der `aria-checked` Wert ändert, ein zugängliches Statusänderungsereignis senden.

Produkte der unterstützenden Technologie sollten Folgendes tun:

- Bildschirmleseprogramme sollten das Element als Checkbox ansagen und optional Anweisungen geben, wie es aktiviert werden kann.

Personen, die Checkboxen implementieren, sollten Folgendes tun:

- Sicherstellen, dass die Checkbox sowohl über Tastatursteuerungen als auch über Klicks erreicht und interagiert werden kann.
- Das `aria-checked` Attribut entsprechend den Benutzerinteraktionen aktualisieren.
- Stile bereitstellen, die anzeigen, wann die Checkbox den Fokus hat.

> [!NOTE]
> Es können unterschiedliche Meinungen darüber bestehen, wie unterstützende Technologien mit dieser Technik umgehen sollten. Die oben bereitgestellte Information ist eine dieser Meinungen und kann sich ändern.

## Beste Praktiken

Die erste Regel von ARIA ist: Wenn ein natives HTML-Element oder Attribut die benötigten Semantiken und Verhaltensweisen bietet, sollten Sie es verwenden, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML-Checkbox](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit Kontrollformular zu verwenden, anstatt die Funktionalität einer Checkbox mit JavaScript und ARIA neu zu erstellen.

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [ARIA: `radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemcheckbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `switch` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
