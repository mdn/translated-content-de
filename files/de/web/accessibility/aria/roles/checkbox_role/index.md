---
title: "ARIA: checkbox Rolle"
slug: Web/Accessibility/ARIA/Roles/checkbox_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `checkbox`-Rolle ist für überprüfbare interaktive Steuerelemente. Elemente mit `role="checkbox"` müssen auch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)-Attribut enthalten, um den Status der Checkbox der unterstützenden Technologie zugänglich zu machen.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> [!NOTE]
> Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Tag oder ein Attribut die gewünschte Semantik und das gewünschte Verhalten bietet, verwenden Sie es anstelle der Umnutzung eines Elements und der Hinzufügung von ARIA. Verwenden Sie stattdessen die native [HTML-Checkbox eines `<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) (mit einem zugehörigen {{HTMLElement('label')}}), die nativ alle erforderlichen Funktionen bereitstellt:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Remember my preferences</label>
```

## Beschreibung

Das native HTML-Checkbox ([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox))-Formularsteuerung hat zwei Zustände ("ausgewählt" oder "nicht ausgewählt"), mit einem über JavaScript einstellbaren [`indeterminate`](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)-Zustand. Ebenso kann ein Element mit `role="checkbox"` drei Zustände über das `aria-checked`-Attribut anzeigen: `true`, `false`, oder `mixed`.

Da eine Checkbox ein interaktives Steuerungselement ist, muss sie fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle einem nicht fokussierbaren Element zugewiesen ist, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren einer Checkbox ist die <kbd>Space</kbd>-Taste.

Der Entwickler muss den Wert des `aria-checked`-Attributs dynamisch ändern, wenn die Checkbox aktiviert wird.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugränglichkeits-API dargestellt werden, nur Text enthalten können. Zugränglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb einer `checkbox` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommen von `checkbox`-Elementen an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `checkbox`-Element, das eine Überschrift enthält.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Da Nachkommen von `checkbox` präsentationell sind, ist der folgende Code äquivalent:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) entsprechen:

```html
<div role="checkbox">Name of my checkbox</div>
```

### Zugeordnete WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand einer Checkbox. Dieses Attribut hat einen von drei möglichen Werten:

    - `true`
      - : Die Checkbox ist ausgewählt.
    - `false`
      - : Die Checkbox ist nicht ausgewählt.
    - `mixed`
      - : Die Checkbox ist teilweise ausgewählt oder unbestimmt.

- `tabindex="0"`
  - : Wird verwendet, um es fokussierbar zu machen, sodass der Benutzer der unterstützenden Technologie es per Tabulatortaste erreichen und sofort mit dem Lesen beginnen kann.

### Tastaturinteraktionen

| Taste            | Funktion               |
| ---------------- | ---------------------- |
| <kbd>Space</kbd> | Aktiviert die Checkbox |

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandelt Mausklicks sowohl auf die Checkbox als auch auf das zugehörige Label, das den Zustand der Checkbox durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild der Checkbox so ändert, dass sie für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`

  - : Behandelt den Fall, dass der Benutzer die <kbd>Space</kbd>-Taste drückt, um den Zustand der Checkbox durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild der Checkbox so zu ändern, dass sie für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.

## Beispiele

Das folgende Beispiel erstellt ein ansonsten nicht-semantisches Checkbox-Element mithilfe von CSS und JavaScript, um den Status des Elements als geprüft oder nicht geprüft zu verwalten.

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

## Zugänglichkeitsaspekte

Wenn die `checkbox`-Rolle einem Element hinzugefügt wird, sollte der Benutzeragent Folgendes tun:

- Das Element als `checkbox`-Rolle in der Zugänglichkeits-API des Betriebssystems darstellen.
- Wenn sich der `aria-checked`-Wert ändert, ein Ereignis für geänderten zugänglichen Zustand senden.

Produkte zur unterstützenden Technologie sollten Folgendes tun:

- Screenreader sollten das Element als Checkbox ankündigen und optional Anweisungen geben, wie man es aktiviert.

Menschen, die Checkboxes implementieren, sollten Folgendes tun:

- Sicherstellen, dass die Checkbox sowohl mit Tastatursteuerungen als auch durch Klicks erreicht und interagiert werden kann
- Das `aria-checked`-Attribut nach Benutzerinteraktionen aktuell halten
- Stile bereitstellen, die anzeigen, wann die Checkbox fokussiert ist

> [!NOTE]
> Über die Handhabung dieser Technik durch unterstützende Technologie können die Meinungen unterschiedlich sein. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können sich ändern.

## Beste Praktiken

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Tag oder Attribut die gewünschte Semantik und das gewünschte Verhalten bietet, verwenden Sie es anstelle der Umnutzung und Hinzufügung einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML-Checkbox](/de/docs/Web/HTML/Element/input/checkbox) mit Steuerungselementen zu verwenden, anstatt die Funktionalität einer Checkbox mit JavaScript und ARIA nachzubilden.

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
- [ARIA: `radio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [ARIA: `menuitemcheckbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `switch` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
