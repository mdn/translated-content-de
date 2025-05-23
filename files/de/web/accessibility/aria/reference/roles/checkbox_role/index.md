---
title: "ARIA: checkbox role"
short-title: checkbox
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

Die `checkbox`-Rolle ist für anklickbare interaktive Steuerelemente vorgesehen. Elemente, die `role="checkbox"` enthalten, müssen auch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut enthalten, um den Status der Checkbox für unterstützende Technologien offenzulegen.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> [!NOTE]
> Die erste Regel von ARIA besagt: Wenn ein nativer HTML-Tag oder ein Attribut die benötigte Semantik und das erforderliche Verhalten erfüllt, verwenden Sie es anstelle eines neu genutzten Elements mit zugefügtem ARIA. Nutzen Sie stattdessen die native [HTML-Checkbox des `<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) (mit einem zugehörigen {{HTMLElement('label')}}), die alle erforderlichen Funktionen nativ bereitstellt:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Remember my preferences</label>
```

## Beschreibung

Die native HTML-Checkbox ([`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) Formularsteuerung hat zwei Zustände ("ausgewählt" oder "nicht ausgewählt"), mit einem über JavaScript setzbaren [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes)-Status. Ebenso kann ein Element mit `role="checkbox"` drei Zustände über das `aria-checked`-Attribut offenlegen: `true`, `false` oder `mixed`.

Da eine Checkbox ein interaktives Steuerelement ist, muss sie fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren einer Checkbox ist die <kbd>Leertaste</kbd>.

Der Entwickler muss den Wert des `aria-checked`-Attributs dynamisch ändern, wenn die Checkbox aktiviert wird.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Barrierefreiheits-API dargestellt werden, nur Text enthalten können. Barrierefreiheits-APIs haben keine Möglichkeit, semantische Elemente in einer `checkbox` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `checkbox`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `checkbox`-Element, das eine Überschrift enthält.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Da Nachkommen von `checkbox` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

Aus der Perspektive eines Benutzers unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets im {{Glossary("Accessibility_tree", "Barrierefreiheit-Baum")}} gleichwertig zu Folgendem sind:

```html
<div role="checkbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand einer Checkbox. Dieses Attribut hat einen von drei möglichen Werten:

    - `true`
      - : Die Checkbox ist ausgewählt.
    - `false`
      - : Die Checkbox ist nicht ausgewählt.
    - `mixed`
      - : Die Checkbox ist teilweise ausgewählt oder unbestimmt.

- `tabindex="0"`
  - : Wird verwendet, um es fokussierbar zu machen, damit der Nutzer unterstützender Technologie es direkt tabularisieren und sofort lesen kann.

### Tastaturinteraktionen

| Taste                | Funktion               |
| -------------------- | ---------------------- |
| <kbd>Leertaste</kbd> | Aktiviert die Checkbox |

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandeln Sie Mausklicks sowohl auf die Checkbox als auch auf das zugehörige Label, das den Zustand der Checkbox verändert, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild der Checkbox so verändert werden, dass sie für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`

  - : Verarbeiten Sie den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand der Checkbox zu ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild der Checkbox so verändert werden, dass sie für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.

## Beispiele

Das folgende Beispiel erstellt ein ansonsten nicht-semantisches Checkbox-Element mithilfe von CSS und JavaScript, um den ausgewählten oder nicht ausgewählten Status des Elements zu verwalten.

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
  }
  if (checked === "true") {
    item.setAttribute("aria-checked", "false");
  } else {
    item.setAttribute("aria-checked", "true");
  }
}
```

{{EmbedLiveSample("Examples", 230, 250)}}

## Barrierefreiheitsbedenken

Wenn die `checkbox`-Rolle zu einem Element hinzugefügt wird, sollte der User-Agent Folgendes tun:

- Das Element im Barrierefreiheits-API des Betriebssystems als Checkbox-Rolle darstellen.
- Wenn sich der `aria-checked`-Wert ändert, ein Barrierefreiheits-Zustandsänderungsereignis senden.

Produkte unterstützender Technologien sollten Folgendes tun:

- Screenreader sollten das Element als Checkbox ankündigen und optional Anweisungen geben, wie es aktiviert werden kann.

Personen, die Checkboxen implementieren, sollten Folgendes tun:

- Sicherstellen, dass die Checkbox sowohl über Tastatursteuerelemente als auch über Klicks erreicht und interagiert werden kann
- Das `aria-checked`-Attribut nach Benutzereingriffen aktuell halten
- Stile bereitstellen, die anzeigen, wann die Checkbox fokussiert ist

> [!NOTE]
> Die Meinungen darüber, wie unterstützende Technologien mit dieser Technik umgehen sollten, können variieren. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können sich ändern.

## Beste Praktiken

Die erste Regel von ARIA ist: Wenn ein nativer HTML-Tag oder ein Attribut die benötigte Semantik und das erforderliche Verhalten erfüllt, verwenden Sie es anstelle eines neu genutzten Elements mit einer ARIA-Rolle, -Zustand oder -Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Checkbox](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Formularsteuerelement zu verwenden, anstatt die Funktionalität einer Checkbox mit JavaScript und ARIA neu zu erstellen.

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [ARIA: `radio` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA: `menuitem` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemcheckbox` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA: `menuitemradio` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `switch` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA: `option` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
