---
title: "ARIA: radio Rolle"
slug: Web/Accessibility/ARIA/Roles/radio_role
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{AccessibilitySidebar}}

Die `radio` Rolle ist eine von einer Gruppe aus wählbaren Optionsschaltflächen in einer `radiogroup`, bei der nicht mehr als eine Optionsschaltfläche gleichzeitig ausgewählt werden kann.

## Beschreibung

Eine Optionsschaltfläche ist ein wählbarer Eingabemechanismus, bei dem, wenn er mit anderen Optionsschaltflächen verbunden ist, nur eine gleichzeitig ausgewählt werden kann. Die Optionsschaltflächen müssen in einer [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) gruppiert sein, um anzuzeigen, welche den gleichen Wert beeinflussen.

```html
<div role="radiogroup" aria-labelledby="legend25" id="radiogroup25">
  <p id="legend25">Ipsum and lorem?</p>
  <div>
    <span
      role="radio"
      aria-checked="false"
      tabindex="0"
      aria-labelledby="q25_radio1-label"
      data-value="True"></span>
    <label id="q25_radio1-label">True</label>
  </div>
  <div>
    <span
      role="radio"
      aria-checked="false"
      tabindex="0"
      aria-labelledby="q25_radio2-label"
      data-value="False"></span>
    <label id="q25_radio2-label">False</label>
  </div>
  <div>
    <span
      role="radio"
      aria-checked="true"
      tabindex="0"
      aria-labelledby="q25_radio3-label"
      data-value="huh?"></span>
    <label id="q25_radio3-label">What is the question?</label>
  </div>
</div>
```

Das `role` Attribut fügt nur Semantik hinzu; alle Funktionen, die nativ mit dem [HTML radio](/de/docs/Web/HTML/Element/input/radio) kommen, müssen mit JavaScript und dem HTML [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut hinzugefügt werden.

> [!NOTE]
> Die erste Regel von ARIA ist, wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten hat, verwenden Sie es, anstatt ein Element umzupurposieren und ARIA hinzuzufügen. Stattdessen benutzen Sie das native [HTML `<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) (mit einem zugehörigen {{HTMLElement('label')}}), das alle benötigten Funktionen nativ bereitstellt:

```html
<fieldset>
  <legend>Ipsum and lorem?</legend>
  <div>
    <input type="radio" value="True" id="q25_radio1" name="q25" />
    <label for="q25_radio1">True</label>
  </div>
  <div>
    <input type="radio" value="False" id="q25_radio2" name="q25" />
    <label for="q25_radio2">False</label>
  </div>
  <div>
    <input type="radio" value="huh?" id="q25_radio3" name="q25" checked />
    <label for="q25_radio3">What is the question?</label>
  </div>
</fieldset>
```

Das native HTML-Formularsteuerelement für Optionsschaltflächen ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)) hat zwei Zustände ("checked" oder "not checked"). Ebenso kann ein Element mit `role="radio"` zwei Zustände über das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) Attribut anzeigen: `true` steht für den aktivierten Zustand und `false` steht für den nicht aktivierten Zustand. Der `aria-checked` Wert von `mixed` ist für eine Optionsschaltfläche nicht gültig.

Wenn eine Optionsschaltfläche aktiviert ist, hat das Radio-Element `aria-checked` auf `true` gesetzt. Ist es nicht aktiviert, hat es `aria-checked` auf `false`.

Jedes Optionsschaltflächenelement hat die Rolle `radio`. Die Radio-Rolle sollte immer mit anderen zugehörigen Radios in einer `radiogroup` verschachtelt werden. Wenn es nicht möglich ist, die Optionsschaltfläche innerhalb einer Radiogruppe zu verschachteln, verwenden Sie die `id` des nicht gruppierten Radios in einer durch Leerzeichen getrennten Liste von Werten als Wert des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Attributs auf dem `radiogroup` Element, um die Beziehung der `radiogroup` zu ihren Radio-Mitgliedern anzuzeigen.

Jedes Radio-Element wird durch seinen Inhalt beschriftet, hat ein sichtbares Label referenziert durch `aria-labelledby` oder ein mit `aria-label` spezifiziertes Label. Das enthaltene `radiogroup` Element sollte entweder ein sichtbares Label referenziert durch `aria-labelledby` oder ein Label spezifiziert durch `aria-label` haben. Wenn Elemente, die zusätzliche Informationen entweder über die Radiogruppe oder jede Optionsschaltfläche bereitstellen, vorhanden sind, sollten diese Elemente von dem `radiogroup` Element oder den Radio-Elementen mit der [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Eigenschaft referenziert werden.

Da `radio` ein interaktives Steuerelement ist, muss es fokussierbar und per Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren eines Radios ist die <kbd>Leertaste</kbd>. Verwenden Sie JavaScript, um das `aria-checked` Attribut auf `true` zu setzen, wenn ein Radio aktiviert wird, während sichergestellt wird, dass alle anderen Radio-Rollen in der Gruppe auf `aria-checked="false"` gesetzt sind.

Um programmatisch anzuzeigen, dass eine Optionsschaltfläche aus einer Radiogruppe gewählt werden muss, muss das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) Attribut, mit einem Wert von `true`, auf dem `radiogroup` Element angegeben werden. Es wird nicht erwartet, das `aria-required` Attribut auf einzelnen ARIA-Optionsschaltflächen zu verwenden.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `radio` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `radio` Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `radio` Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>name of my radio</h6></div>
```

Da Nachkommen von `radio` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

Aus der Sicht eines Assistive Technology-Benutzers existiert die Überschrift nicht, da die vorherigen Codeschnipsel dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} äquivalent sind:

```html
<div role="radio">name of my radio</div>
```

## Zugeordnete WAI-ARIA Rollen, Zustände und Eigenschaften

- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) Rolle

  - : Die Optionsschaltflächen sind enthalten oder werden von einem Element mit der Rolle `radiogroup` besessen. Wenn es nicht möglich ist, innerhalb einer `radiogroup` im Markup zu verschachteln, enthält das `aria-owns` Attribut der `radiogroup` die `id` Werte der nicht-verschachtelten Optionsschaltflächen in der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand eines Radios. Wenn es mit Radio-Elementen verwendet wird, hat das Attribut einen von zwei möglichen Werten:

    - `true`
      - : Das Radio ist aktiviert.
    - `false`
      - : Das Radio ist nicht aktiviert.

> [!NOTE]
> Verwenden Sie das [`tabindex` Attribut](/de/docs/Web/HTML/Global_attributes/tabindex), wenn `role="radio"` auf ein Element angewendet wird, das nativ keine Tastaturfokussierung akzeptiert. Z.B. ein `<div>` oder `<span>`.

## Tastaturinteraktionen

- <kbd>Tab</kbd> + <kbd>Umschalt</kbd>

  - : Bewegt den Fokus in und aus der Radiogruppe. Wenn der Fokus in eine Radiogruppe verschoben wird und eine Optionsschaltfläche bereits ausgewählt ist, wird der Fokus auf die ausgewählte Schaltfläche gesetzt. Wenn keine der Optionsschaltflächen ausgewählt ist, wird der Fokus auf die erste gewählt.

- <kbd>Leertaste</kbd>

  - : Aktiviert das Radio, wenn es nicht bereits aktiviert ist. Deaktiviert eine zuvor aktivierte Optionsschaltfläche in der Radiogruppe.

- <kbd>Pfeil nach rechts</kbd> und <kbd>Pfeil nach unten</kbd>

  - : Bewegt den Fokus zur nächsten Optionsschaltfläche in der Gruppe und aktiviert sie, während die zuvor fokussierte Optionsschaltfläche deaktiviert wird. Wenn der Fokus auf der letzten Optionsschaltfläche ist, wird der Fokus auf die erste verschoben.

- <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach oben</kbd>
  - : Bewegt den Fokus zur vorherigen Optionsschaltfläche in der Gruppe und aktiviert sie, während die zuvor fokussierte Schaltfläche deaktiviert wird. Wenn der Fokus auf der ersten Schaltfläche ist, wird der Fokus auf die letzte verschoben.

### Radios in einer Werkzeugleiste

Da Pfeiltasten verwendet werden, um zwischen Elementen einer Werkzeugleiste zu navigieren, und die <kbd>Tab</kbd> Taste den Fokus in und aus einer Werkzeugleiste verschiebt, ist die Tastaturinteraktion der Radiogruppe, wenn sie in einer Werkzeugleiste verschachtelt ist, etwas anders als bei einer Radiogruppe, die nicht innerhalb einer Werkzeugleiste ist. Weitere Informationen finden Sie unter [`radiogroup` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role#keyboard_interactions).

## Erforderliches JavaScript

- `onClick`
  - : Behandeln Sie Mausklicks sowohl auf das Radio als auch auf das zugehörige Label, das den Zustand des Radios ändert, indem es den Wert des `aria-checked` Attributs und das Erscheinungsbild des Radios ändert, sodass es für den sehenden Benutzer als aktiviert oder nicht aktiviert erscheint.
- `onKeyPress`
  - : Behandeln Sie den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Radios zu ändern, indem der Wert des `aria-checked` Attributs und das Erscheinungsbild des Radios ändert wird, sodass es für den sehenden Benutzer als aktiviert oder nicht aktiviert erscheint.

## Beispiele

Das folgende Beispiel verwendet ARIA, um ansonsten generische Elemente so zu ändern, dass sie als Optionsschaltflächen angezeigt werden. CSS und JavaScript werden verwendet, um den aktivierten oder nicht aktivierten Zustand des Elements visuell und programmatisch zu ändern.

### HTML

```html
<div role="radiogroup" aria-labelledby="legend" id="radiogroup">
  <p id="legend">
    Should you be using the <code>radio</code> role or
    <code>&lt;input type="radio"></code>?
  </p>
  <div>
    <span
      role="radio"
      aria-checked="true"
      tabindex="0"
      aria-labelledby="ariaLabel"
      data-value="True"></span>
    <label id="ariaLabel">ARIA role</label>
  </div>
  <div>
    <span
      role="radio"
      aria-checked="false"
      tabindex="0"
      aria-labelledby="htmllabel"
      data-value="False"></span>
    <label id="htmllabel">HTML <code>&lt;input type="radio"></code></label>
  </div>
</div>
```

### CSS

```css
[role="radio"] {
  padding: 5px;
}

[role="radio"][aria-checked="true"]::before {
  content: "(x)";
  font-family: monospace;
}

[role="radio"][aria-checked="false"]::before {
  content: "( )";
  font-family: monospace;
}
```

### JavaScript

Es wird viel JavaScript benötigt, um aus nicht-semantischem HTML Optionsschaltflächen zu erstellen.

```js
// initialize all the radio role elements

const radioGroups = document.querySelectorAll('[role="radiogroup"]');

for (let i = 0, groups = radioGroups.length; i < groups; i++) {
  const radios = radioGroups[i].querySelectorAll("[role=radio]");
  for (let j = 0, radiobuttons = radios.length; j < radios; j++) {
    radios[j].addEventListener("keydown", function () {
      handleKeydown();
    });
    radios[j].addEventListener("click", function () {
      handleClick();
    });
  }
}

// handle mouse and touch events
let handleClick = function (event) {
  setChecked(this);
  event.stopPropagation();
  event.preventDefault();
};

// handle key presses
let handleKeydown = function (event) {
  switch (event.code) {
    case "Space":
    case "Enter":
      currentChecked();
      break;

    case "ArrowUp":
    case "ArrowLeft":
      previousRadioChecked();
      break;

    case "ArrowDown":
    case "ArrowRight":
      nextItemChecked();
      break;

    default:
      break;
  }
  event.stopPropagation();
  event.preventDefault();
};

// when a radio is selected, give it focus, set checked to true;
// ensure all other radios in radio group are not checked

setChecked = function () {
  // uncheck all the radios in group
  // iterated through all the radios in radio group
  // eachRadio.tabIndex = -1;
  // eachRadio.setAttribute('aria-checked', 'false');
  // set the selected radio to checked
  // thisRadio.setAttribute('aria-checked', 'true');
  // thisRadio.tabIndex = 0;
  // thisRadio.focus();
  // set the value of the radioGroup to the value of the currently selected radio
};
```

<!-- {{EmbedLiveSample("Examples", 230, 250)}} -->

Kein JavaScript (oder sogar CSS) wäre benötigt worden, wenn wir ein semantisches HTML-Element mit dem Namen jeder Optionsschaltfläche in einer Gruppe von Optionsschaltflächen verwendet hätten, die gleich ist:

```html
<fieldset>
  <legend>
    Should you be using the <code>radio</code> role or
    <code>&lt;input type="radio"></code>?
  </legend>
  <div>
    <input type="radio" name="bestPractices" id="ariaLabel" value="True" />
    <label for="ariaLabel">ARIA role</label>
  </div>
  <div>
    <input type="radio" name="bestPractices" id="htmllabel" value="False" />
    <label for="htmllabel">HTML <code>&lt;input type="radio"></code></label>
  </div>
</fieldset>
```

## Best Practices

Die erste Regel von ARIA ist: wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten aufweist, verwenden Sie es, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, native [HTML-Optionsschaltflächen](/de/docs/Web/HTML/Element/input/radio) Formularsteuerelemente zu verwenden, anstatt die Funktionalität einer Optionsschaltfläche mit JavaScript und ARIA nachzubilden.

## Siehe auch

- [HTML `<input type="radio">` Optionsschaltfläche](/de/docs/Web/HTML/Element/input/radio)
- [HTML `tabindex` Attribut](/de/docs/Web/HTML/Global_attributes/tabindex)
- [ARIA: `radiogroup` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [ARIA: `checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
