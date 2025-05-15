---
title: "ARIA: checkbox Rolle"
short-title: checkbox
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `checkbox` Rolle ist für interaktive, anklickbare Steuerelemente gedacht. Elemente, die `role="checkbox"` beinhalten, müssen auch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut enthalten, um den Zustand der Checkbox für unterstützende Technologien sichtbar zu machen.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> [!NOTE]
> Die erste Regel von ARIA ist, dass, wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten bietet, Sie dieses anstelle der Umgestaltung eines Elements und dem Hinzufügen von ARIA nutzen sollten. Verwenden Sie stattdessen das native [HTML Checkbox des `<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) (mit einem zugehörigen {{HTMLElement('label')}}), das alle erforderlichen Funktionen nativ bereitstellt:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Remember my preferences</label>
```

## Beschreibung

Die native HTML-Checkbox ([`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) im Formular hat zwei Zustände ("aktiviert" oder "nicht aktiviert") und einen [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes)-Zustand, der über JavaScript gesetzt werden kann. Ebenso kann ein Element mit `role="checkbox"` drei Zustände über das `aria-checked`-Attribut offenlegen: `true`, `false` oder `mixed`.

Da eine Checkbox ein interaktives Steuerelement ist, muss sie fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle einem nicht-fokussierbaren Element zugewiesen ist, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren einer Checkbox ist die <kbd>Leertaste</kbd>.

Der Entwickler muss den Wert des `aria-checked`-Attributs dynamisch ändern, wenn die Checkbox aktiviert wird.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einer `checkbox` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenselemente eines `checkbox`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `checkbox`-Element, das eine Überschrift enthält.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Da Nachkommen von `checkbox` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

Aus der Perspektive des Benutzers der unterstützenden Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im {{Glossary("Accessibility_tree", "Accessibility Baum")}} entsprechen:

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
  - : Wird verwendet, um es fokussierbar zu machen, damit der Benutzer unterstützender Technologien es durch Tabulator erreichen und sofort lesen kann.

### Tastaturinteraktionen

| Taste                | Funktion               |
| -------------------- | ---------------------- |
| <kbd>Leertaste</kbd> | Aktiviert die Checkbox |

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandeln Sie Mausklicks sowohl auf die Checkbox als auch auf das zugehörige Etikett, die den Zustand der Checkbox ändern, indem Sie den Wert des `aria-checked`-Attributs und das Erscheinungsbild der Checkbox ändern, sodass sie dem sehenden Benutzer als aktiviert oder deaktiviert erscheint.
- `onKeyDown`

  - : Behandeln Sie den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand der Checkbox zu ändern, indem Sie den Wert des `aria-checked`-Attributs und das Erscheinungsbild der Checkbox ändern, sodass sie dem sehenden Benutzer als aktiviert oder deaktiviert erscheint.

## Beispiele

Das folgende Beispiel erstellt ein ansonsten nicht-semantisches Checkbox-Element, das CSS und JavaScript verwendet, um den aktivierten oder deaktivierten Status des Elements zu handhaben.

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

Wenn die `checkbox`-Rolle einem Element hinzugefügt wird, sollte die Benutzeragentur Folgendes tun:

- Das Element im Zugänglichkeits-API des Betriebssystems als ein `checkbox`-Element darstellen.
- Wenn sich der `aria-checked`-Wert ändert, ein Ereignis für den geänderten zugänglichen Zustand senden.

Produkte für unterstützende Technologien sollten Folgendes tun:

- Bildschirmlesegeräte sollten das Element als Checkbox ankündigen und optional Anweisungen geben, wie es aktiviert werden kann.

Personen, die Checkboxen implementieren, sollten Folgendes sicherstellen:

- Sicherstellen, dass die Checkbox sowohl über die Tastatursteuerung als auch durch Klicks erreichbar und interaktiv ist.
- Das `aria-checked`-Attribut nach Benutzerinteraktionen auf dem neuesten Stand halten.
- Stile bereitstellen, die anzeigen, wann die Checkbox den Fokus hat.

> [!NOTE]
> Meinungen darüber, wie unterstützende Technologien mit dieser Technik umgehen sollten, können variieren. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können sich ändern.

## Beste Praktiken

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten bietet, verwenden Sie es anstelle der Umgestaltung eines Elements und dem Hinzufügen einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML-Checkbox](/de/docs/Web/HTML/Reference/Elements/input/checkbox) des Formulars zu verwenden, anstatt die Funktionalität einer Checkbox mit JavaScript und ARIA nachzubilden.

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [ARIA: `radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemcheckbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `switch` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
