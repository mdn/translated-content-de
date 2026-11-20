---
title: "ARIA: checkbox-Rolle"
short-title: checkbox
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `checkbox` ist für interaktive Steuerelemente vorgesehen, die aktiviert und deaktiviert werden können. Elemente mit `role="checkbox"` müssen auch das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, damit der Zustand der Checkbox für assistive Technologien zugänglich ist.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> [!NOTE]
> Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das benötigte Verhalten bietet, verwenden Sie es, statt ein Element zweckzuentfremden und ARIA hinzuzufügen. Verwenden Sie stattdessen die native [HTML-Checkbox mit `<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) (mit einem zugehörigen {{HTMLElement('label')}}). Sie bietet von sich aus alle erforderlichen Funktionen:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Remember my preferences</label>
```

## Beschreibung

Das native HTML-Formularsteuerelement für Checkboxen ([`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) hat zwei Zustände („aktiviert“ und „nicht aktiviert“). Zusätzlich kann über JavaScript der Zustand [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) festgelegt werden. Ebenso kann ein Element mit `role="checkbox"` über das Attribut `aria-checked` drei Zustände ausdrücken: `true`, `false` oder `mixed`.

Da eine Checkbox ein interaktives Steuerelement ist, muss sie fokussierbar und per Tastatur bedienbar sein. Wird die Rolle auf ein nicht fokussierbares Element angewendet, verwenden Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), um dies zu ändern. Eine Checkbox wird üblicherweise mit der <kbd>Leertaste</kbd> betätigt.

Wenn die Checkbox betätigt wird, muss der Wert des Attributs `aria-checked` dynamisch geändert werden.

### Alle Nachfahren sind präsentationsbezogen

Manche Arten von Benutzeroberflächenkomponenten können in einer Accessibility-API der Plattform nur Text enthalten. Accessibility-APIs können semantische Elemente innerhalb einer `checkbox` nicht darstellen. Um diese Einschränkung zu berücksichtigen, weisen Browser allen Nachfahren eines `checkbox`-Elements automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu, da diese Rolle keine semantischen Kindelemente unterstützt.

Betrachten Sie beispielsweise das folgende `checkbox`-Element, das eine Überschrift enthält.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Da Nachfahren einer `checkbox` präsentationsbezogen sind, ist der folgende Code gleichwertig:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

Aus Sicht der Nutzenden assistiver Technologien existiert die Überschrift nicht, da die vorherigen Codebeispiele im {{Glossary("Accessibility_tree", "Accessibility Tree")}} dem Folgenden entsprechen:

```html
<div role="checkbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Der Wert von `aria-checked` definiert den Zustand einer Checkbox. Das Attribut kann einen von drei Werten haben:
    - `true`
      - : Die Checkbox ist aktiviert.
    - `false`
      - : Die Checkbox ist nicht aktiviert.
    - `mixed`
      - : Die Checkbox ist teilweise aktiviert oder befindet sich in einem unbestimmten Zustand.

- `tabindex="0"`
  - : Macht das Element fokussierbar, sodass Nutzende assistiver Technologien mit der Tabulatortaste dorthin navigieren und es unmittelbar lesen können.

### Tastaturinteraktionen

| Taste                | Funktion              |
| -------------------- | --------------------- |
| <kbd>Leertaste</kbd> | Betätigt die Checkbox |

### Erforderliches JavaScript

#### Erforderliche Ereignisbehandler

- `onclick`
  - : Verarbeitet Mausklicks sowohl auf die Checkbox als auch auf das zugehörige Label. Dabei müssen der Wert des Attributs `aria-checked` und das Erscheinungsbild der Checkbox geändert werden, damit sie für sehende Nutzende als aktiviert oder nicht aktiviert erkennbar ist.
- `onKeyDown`
  - : Verarbeitet das Drücken der <kbd>Leertaste</kbd>. Dabei müssen der Wert des Attributs `aria-checked` und das Erscheinungsbild der Checkbox geändert werden, damit sie für sehende Nutzende als aktiviert oder nicht aktiviert erkennbar ist.

## Hinweise zur Barrierefreiheit

Wenn einem Element die Rolle `checkbox` hinzugefügt wird, sollte der User Agent Folgendes tun:

- Das Element in der Accessibility-API des Betriebssystems mit der Rolle `checkbox` bereitstellen.
- Ein Ereignis zur Änderung des zugänglichen Zustands senden, wenn sich der Wert von `aria-checked` ändert.

Assistive Technologien sollten Folgendes tun:

- Screenreader sollten das Element als Checkbox ankündigen und gegebenenfalls Hinweise zu seiner Bedienung geben.

Wer Checkboxen implementiert, sollte Folgendes sicherstellen:

- Die Checkbox ist sowohl per Tastatur als auch durch Klicken erreichbar und bedienbar.
- Das Attribut `aria-checked` wird nach Benutzerinteraktionen aktualisiert.
- Der Fokus der Checkbox wird durch entsprechende Stile sichtbar gemacht.

> [!NOTE]
> Die Meinungen darüber, wie assistive Technologien mit dieser Technik umgehen sollten, können auseinandergehen. Die obigen Informationen geben eine dieser Meinungen wieder und können sich ändern.

## Bewährte Verfahren

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das benötigte Verhalten bietet, verwenden Sie es, statt ein Element zweckzuentfremden und durch Hinzufügen einer ARIA-Rolle, eines ARIA-Zustands oder einer ARIA-Eigenschaft zugänglich zu machen. Daher wird empfohlen, das native [HTML-Formularsteuerelement für Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) zu verwenden, statt die Funktionalität einer Checkbox mit JavaScript und ARIA nachzubilden.

## Beispiele

Das folgende Beispiel erstellt ein ansonsten nicht semantisches Checkbox-Element und verwendet CSS und JavaScript, um seinen aktivierten oder nicht aktivierten Zustand zu verwalten.

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

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [ARIA: Rolle `radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA: Rolle `menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: Rolle `menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA: Rolle `menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: Rolle `switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA: Rolle `option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
