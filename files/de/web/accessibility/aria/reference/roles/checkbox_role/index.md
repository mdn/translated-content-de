---
title: "ARIA: Checkbox-Rolle"
short-title: checkbox
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `checkbox`-Rolle ist für interaktive kontrollierbare Elemente gedacht. Elemente, die `role="checkbox"` enthalten, müssen auch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut enthalten, um den Status der Checkbox für unterstützende Technologien zugänglich zu machen.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> [!NOTE]
> Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die gewünschten Semantiken und Verhaltensweisen bietet, verwenden Sie es anstelle der Umwidmung eines Elements und der Hinzufügung von ARIA. Verwenden Sie stattdessen die native [HTML-Checkbox des `<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) (mit einem zugehörigen {{HTMLElement('label')}}), das nativ alle erforderlichen Funktionen bereitstellt:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Remember my preferences</label>
```

## Beschreibung

Das native HTML-Checkbox ([`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox))-Formularsteuerung besitzt zwei Zustände ("ausgewählt" oder "nicht ausgewählt") und einen [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes)-Zustand, der über JavaScript gesetzt werden kann. Ähnlich kann ein Element mit `role="checkbox"` drei Zustände über das `aria-checked`-Attribut darstellen: `true`, `false` oder `mixed`.

Da eine Checkbox ein interaktives Steuerelement ist, muss sie fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren einer Checkbox ist die <kbd>Leertaste</kbd>.

Der Entwickler muss den Wert des `aria-checked`-Attributs dynamisch ändern, wenn die Checkbox aktiviert wird.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einer `checkbox` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `checkbox`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `checkbox`-Element, das eine Überschrift enthält.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Da Nachkommen von `checkbox` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

Aus der Sicht des Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Schnipsel dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} gleichwertig sind:

```html
<div role="checkbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand einer Checkbox. Dieses Attribut hat einen von drei möglichen Werten:
    - `true`
      - : Die Checkbox ist ausgewählt.
    - `false`
      - : Die Checkbox ist nicht ausgewählt.
    - `mixed`
      - : Die Checkbox ist teilweise ausgewählt oder unbestimmt.

- `tabindex="0"`
  - : Verwendet, um es fokussierbar zu machen, sodass der Benutzer unterstützender Technologien direkt darauf zugreifen und zu lesen beginnen kann.

### Tastaturinteraktionen

| Taste                | Funktion               |
| -------------------- | ---------------------- |
| <kbd>Leertaste</kbd> | Aktiviert die Checkbox |

### Erforderliches JavaScript

#### Erforderliche Event-Handler

- `onclick`
  - : Behandelt Maus-Klicks auf sowohl die Checkbox als auch das zugehörige Label, das den Zustand der Checkbox ändert, indem es den Wert des `aria-checked`-Attributs und das Erscheinungsbild der Checkbox so verändert, dass sie dem sehenden Benutzer als ausgewählt oder nicht ausgewählt angezeigt wird
- `onKeyDown`
  - : Behandelt den Fall, bei dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand der Checkbox zu ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild der Checkbox so verändert werden, dass sie dem sehenden Benutzer als ausgewählt oder nicht ausgewählt angezeigt wird

## Beispiele

Das folgende Beispiel erstellt ein ansonsten nicht-semantisches Checkbox-Element unter Verwendung von CSS und JavaScript, um den ausgewählten oder nicht ausgewählten Status des Elements zu verwalten.

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

## Zugänglichkeitsaspekte

Wenn die `checkbox`-Rolle zu einem Element hinzugefügt wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Zugänglichkeits-API des Betriebssystems als `checkbox`-Rolle darstellen.
- Wenn sich der `aria-checked`-Wert ändert, ein zugängliches Zustandsänderungsereignis senden.

Produkte der unterstützenden Technologien sollten Folgendes tun:

- Screenreader sollten das Element als Checkbox ankündigen und optional Anweisungen geben, wie es aktiviert wird.

Personen, die Checkboxen implementieren, sollten Folgendes tun:

- Sicherstellen, dass die Checkbox sowohl über Tastatursteuerungen als auch durch Klicks erreicht und interagiert werden kann
- Das `aria-checked`-Attribut nach Benutzerinteraktionen aktuell halten
- Stile bereitstellen, die anzeigen, wenn die Checkbox den Fokus hat

> [!NOTE]
> Es gibt unterschiedliche Meinungen darüber, wie unterstützende Technologien mit dieser Technik umgehen sollten. Die oben bereitgestellte Information ist eine dieser Meinungen und kann sich ändern.

## Best Practices

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die gewünschten Semantiken und Verhaltensweisen bietet, verwenden Sie es anstelle der Umwidmung eines Elements und der Hinzufügung einer ARIA-Rolle, -Status oder -Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML-Checkbox](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit Formularsteuerung anstelle des Nachbildens der Checkbox-Funktionalität mit JavaScript und ARIA zu verwenden.

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [ARIA: `radio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA: `menuitem`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemcheckbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA: `menuitemradio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `switch`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA: `option`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
