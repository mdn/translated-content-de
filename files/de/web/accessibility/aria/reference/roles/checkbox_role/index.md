---
title: "ARIA: Rolle `checkbox`"
short-title: checkbox
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Die Rolle `checkbox` ist für interaktive, überprüfbare Steuerelemente vorgesehen. Elemente, die `role="checkbox"` enthalten, müssen auch das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) einbeziehen, um den Status des Kontrollkästchens für unterstützende Technologien zugänglich zu machen.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> [!NOTE]
> Die erste Regel von ARIA lautet, dass ein nativer HTML-Tag oder ein Attribut, das die gewünschten Semantiken und Verhaltensweisen bietet, verwendet werden sollte, anstatt ein Element umzufunktionieren und ARIA hinzuzufügen. Verwenden Sie stattdessen das native [HTML-Kontrollkästchen `<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) (mit einem zugeordneten {{HTMLElement('label')}}), das alle erforderlichen Funktionen bietet:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Remember my preferences</label>
```

## Beschreibung

Das native HTML-Kontrollkästchen ([`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) Formularsteuerelement hat zwei Zustände ("aktiviert" oder "nicht aktiviert"), mit einem [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) Zustand, der über JavaScript einstellbar ist. Ebenso kann ein Element mit `role="checkbox"` drei Zustände über das Attribut `aria-checked` ausweisen: `true`, `false` oder `mixed`.

Da ein Kontrollkästchen ein interaktives Steuerelement ist, muss es fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht-fokussierbares Element angewendet wird, verwenden Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), um dies zu ändern. Die erwartete Tastenkombination zur Aktivierung eines Kontrollkästchens ist die <kbd>Leertaste</kbd>.

Der Entwickler muss den Wert des Attributs `aria-checked` dynamisch ändern, wenn das Kontrollkästchen aktiviert wird.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugränglichkeits-API dargestellt werden, nur Text enthalten können. Zugränglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `checkbox` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `checkbox`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie beispielsweise das folgende `checkbox`-Element, das eine Überschrift enthält.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Da Nachkommen von `checkbox` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

Aus der Perspektive der Benutzer von unterstützender Technologie existiert die Überschrift nicht, da die vorhergehenden Code-Schnipsel gleichwertig mit dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} sind:

```html
<div role="checkbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Status eines Kontrollkästchens. Dieses Attribut hat einen von drei möglichen Werten:

    - `true`
      - : Das Kontrollkästchen ist aktiviert.
    - `false`
      - : Das Kontrollkästchen ist nicht aktiviert.
    - `mixed`
      - : Das Kontrollkästchen ist teilweise aktiviert oder nicht eindeutig.

- `tabindex="0"`
  - : Wird verwendet, um es fokussierbar zu machen, sodass der Benutzer der unterstützenden Technologie mit der Tabulatortaste darauf zugreifen und sofort lesen kann.

### Tastaturinteraktionen

| Taste                | Funktion                       |
| -------------------- | ------------------------------ |
| <kbd>Leertaste</kbd> | Aktiviert das Kontrollkästchen |

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandelt Mausklicks sowohl auf das Kontrollkästchen als auch auf das zugehörige Label, das den Zustand des Kontrollkästchens durch Ändern des Wertes des Attributs `aria-checked` und das Erscheinungsbild des Kontrollkästchens so ändert, dass es für sehende Benutzer als aktiviert oder deaktiviert erscheint.
- `onKeyDown`

  - : Behandelt den Fall, dass der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Kontrollkästchens zu ändern, indem er den Wert des Attributs `aria-checked` ändert und das Erscheinungsbild des Kontrollkästchens so anpasst, dass es für sehende Benutzer als aktiviert oder deaktiviert erscheint.

## Beispiele

Das folgende Beispiel erstellt ein ansonsten nicht-semantisches Kontrollkästchenelement unter Verwendung von CSS und JavaScript, um den aktivierten oder deaktivierten Status des Elements zu handhaben.

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

## Zugänglichkeitsbedenken

Wenn die Rolle `checkbox` zu einem Element hinzugefügt wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Zugänglichkeits-API des Betriebssystems als `checkbox`-Rolle ausweisen.
- Wenn sich der Wert von `aria-checked` ändert, ein Ereignis für den zugänglichen Statuswechsel senden.

Produkte für unterstützende Technologien sollten Folgendes tun:

- Bildschirmleseprogramme sollten das Element als Kontrollkästchen ankündigen und optional Anweisungen zur Aktivierung bereitstellen.

Personen, die Kontrollkästchen implementieren, sollten Folgendes tun:

- Sicherstellen, dass das Kontrollkästchen sowohl über Tastatursteuerungen als auch Mausklicks erreicht und verwendet werden kann.
- Das Attribut `aria-checked` nach Benutzerinteraktionen auf dem aktuellsten Stand halten.
- Stile bereitstellen, die anzeigen, wenn das Kontrollkästchen fokussiert ist.

> [!NOTE]
> Es können unterschiedliche Meinungen darüber bestehen, wie unterstützende Technologien diese Technik behandeln sollten. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können sich ändern.

## Beste Praktiken

Die erste Regel von ARIA ist: Wenn ein nativer HTML-Tag oder ein Attribut die gewünschten Semantiken und Verhaltensweisen bietet, verwenden Sie diesen statt ein Element umzufunktionieren und ihm eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Kontrollkästchen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) zu verwenden, anstatt die Funktionalität eines Kontrollkästchens mit JavaScript und ARIA nachzubilden.

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [ARIA: Rolle `radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA: Rolle `menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: Rolle `menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA: Rolle `menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: Rolle `switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA: Rolle `option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
