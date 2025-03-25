---
title: "ARIA: checkbox-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die `checkbox`-Rolle ist für interaktive überprüfbare Steuerelemente. Elemente, die `role="checkbox"` enthalten, müssen auch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut enthalten, um den Zustand der Checkbox für unterstützende Technologie sichtbar zu machen.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> [!NOTE]
> Die erste Regel von ARIA ist, wenn ein nativer HTML-Tag oder Attribut die erforderlichen Semantiken und das Verhalten hat, dann verwenden Sie es, anstatt ein Element umzugestalten und ARIA hinzuzufügen. Verwenden Sie stattdessen den nativen [HTML-Checkbox von `<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) (mit einem zugehörigen {{HTMLElement('label')}}), der alle erforderlichen Funktionen von Haus aus bereitstellt:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Remember my preferences</label>
```

## Beschreibung

Das native HTML-Checkbox-Formular-Steuerelement ([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)) hat zwei Zustände ("markiert" oder "nicht markiert"), mit einem [`indeterminate`](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)-Zustand, der über JavaScript festgelegt werden kann. Ebenso kann ein Element mit `role="checkbox"` drei Zustände über das `aria-checked`-Attribut darstellen: `true`, `false` oder `mixed`.

Da eine Checkbox ein interaktives Steuerelement ist, muss es fokusierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht-fokusierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren einer Checkbox ist die <kbd>Leertaste</kbd>.

Der Entwickler muss den Wert des `aria-checked`-Attributs dynamisch ändern, wenn die Checkbox aktiviert wird.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einer `checkbox` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente jedes `checkbox`-Elements an, da dies eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachten Sie das folgende `checkbox`-Element, das eine Überschrift enthält.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Da Nachkommen von `checkbox` präsentationell sind, ist der folgende Code äquivalent:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

Aus der Sicht des Benutzers der unterstützenden Technologie existiert die Überschrift nicht, da die vorhergehenden Codebeispiele im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} dem folgenden entsprechen:

```html
<div role="checkbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand einer Checkbox. Dieses Attribut hat einen von drei möglichen Werten:

    - `true`
      - : Die Checkbox ist markiert.
    - `false`
      - : Die Checkbox ist nicht markiert.
    - `mixed`
      - : Die Checkbox ist teilweise markiert oder unbestimmt.

- `tabindex="0"`
  - : Wird verwendet, um es fokusierbar zu machen, sodass der Benutzer der unterstützenden Technologie es erreichen und sofort mit dem Lesen beginnen kann.

### Tastaturinteraktionen

| Taste                | Funktion               |
| -------------------- | ---------------------- |
| <kbd>Leertaste</kbd> | Aktiviert die Checkbox |

### Erforderliches JavaScript

#### Erforderliche Ereignis-Handler

- `onclick`
  - : Behandelt Mausklicks sowohl auf die Checkbox als auch auf das zugehörige Label, das den Zustand der Checkbox ändert, indem es den Wert des `aria-checked`-Attributs ändert und das Erscheinungsbild der Checkbox so verändert, dass sie für den sehenden Benutzer markiert oder nicht markiert erscheint.
- `onKeyDown`

  - : Behandelt den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand der Checkbox zu ändern, indem es den Wert des `aria-checked`-Attributs ändert und das Erscheinungsbild der Checkbox so verändert, dass sie für den sehenden Benutzer markiert oder nicht markiert erscheint.

## Beispiele

Das folgende Beispiel erstellt ein ansonsten nicht-semantisches Checkbox-Element, das CSS und JavaScript verwendet, um den markierten oder nicht markierten Status des Elements zu handhaben.

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

## Bedenken zur Zugänglichkeit

Wenn die `checkbox`-Rolle zu einem Element hinzugefügt wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Zugänglichkeits-API des Betriebssystems als `checkbox`-Rolle darstellen.
- Wenn sich der Wert von `aria-checked` ändert, ein Ereignis melden, das den Zustand als zugänglich markiert.

Produkte der unterstützenden Technologie sollten Folgendes tun:

- Bildschirmlesegeräte sollten das Element als Checkbox ankündigen und optional Anweisungen bereitstellen, wie es aktiviert wird.

Personen, die Checkboxes implementieren, sollten Folgendes tun:

- Sicherstellen, dass die Checkbox sowohl über Tastatursteuerungen als auch per Klick erreichbar und interaktiv ist.
- Das `aria-checked`-Attribut nach Benutzerinteraktionen aktualisieren.
- Stile bereitstellen, die anzeigen, wenn die Checkbox den Fokus hat.

> [!NOTE]
> Meinungen können variieren, wie unterstützende Technologie mit dieser Technik umgehen sollte. Die oben bereitgestellten Informationen stellen eine dieser Meinungen dar und können sich ändern.

## Beste Praktiken

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Tag oder Attribut die erforderlichen Semantiken und das Verhalten hat, verwenden Sie es anstelle eines umgestalteten Elements und fügen Sie eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzu, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML-Checkbox](/de/docs/Web/HTML/Element/input/checkbox) mit Formular-Steuerelement zu verwenden, anstatt die Funktionalität einer Checkbox mit JavaScript und ARIA neu zu erstellen.

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
- [ARIA: `radio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA: `menuitem`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemcheckbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA: `menuitemradio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `switch`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA: `option`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
