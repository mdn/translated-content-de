---
title: "ARIA: radio-Rolle"
slug: Web/Accessibility/ARIA/Roles/radio_role
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{AccessibilitySidebar}}

Die `radio`-Rolle ist eine von einer Gruppe von auswählbaren Radio-Buttons in einer `radiogroup`, in der nicht mehr als ein Radio-Button gleichzeitig ausgewählt sein kann.

## Beschreibung

Ein Radio-Button ist eine auswählbare Eingabe, die, wenn sie mit anderen Radio-Buttons verbunden ist, von denen nur einer gleichzeitig ausgewählt sein kann. Die Radio-Buttons müssen in einer [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) gruppiert werden, um anzuzeigen, welche denselben Wert beeinflussen.

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

Das Attribut `role` fügt nur Semantik hinzu; die gesamte Funktionalität, die nativ mit dem [HTML-Radio](/de/docs/Web/HTML/Element/input/radio) kommt, muss mit JavaScript und dem HTML-Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzugefügt werden.

> [!NOTE]
> Die erste Regel von ARIA ist, wenn ein nativer HTML-Tag oder ein Attribut die Semantik und das Verhalten hat, das Sie benötigen, verwenden Sie es anstelle der Umdeklarierung eines Elements und der Hinzufügung von ARIA. Verwenden Sie stattdessen das native [HTML `<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) (mit einem zugehörigen {{HTMLElement('label')}}), das alle erforderlichen Funktionalitäten nativ bereitstellt:

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

Das native HTML-Radioformular-Steuerelement ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)) hat zwei Zustände ("ausgewählt" oder "nicht ausgewählt"). In ähnlicher Weise kann ein Element mit `role="radio"` zwei Zustände über das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) ausgeben: `true`, das den ausgewählten Zustand darstellt, und `false`, das den nicht ausgewählten Zustand darstellt. Der `aria-checked`-Wert `mixed` ist für einen Radio-Button nicht gültig.

Wenn ein Radio-Button ausgewählt ist, hat das Radio-Element `aria-checked` auf `true` gesetzt. Wenn es nicht ausgewählt ist, hat es `aria-checked` auf `false` gesetzt.

Jedes Radio-Button-Element hat die Rolle `radio`. Die Radio-Rolle sollte immer mit anderen zugehörigen Radios in einer `radiogroup` verschachtelt sein. Wenn es nicht möglich ist, den Radio-Button in einer Radiogruppe zu verschachteln, verwenden Sie die `id` des nicht gruppierten Radios in einer durch Leerzeichen getrennten Liste von Werten als Wert des Attributs [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) auf dem `radiogroup`-Element, um die Beziehung der `radiogroup` zu ihren Radio-Mitgliedern anzuzeigen.

Jedes Radio-Element wird durch seinen Inhalt bezeichnet, hat ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder hat ein Label, das mit `aria-label` angegeben ist. Das enthaltene `radiogroup`-Element sollte entweder ein sichtbares Label besitzen, das durch `aria-labelledby` referenziert wird, oder ein Label, das mit `aria-label` angegeben ist. Wenn Elemente vorhanden sind, die zusätzliche Informationen über die Radiogruppe oder jeden Radio-Button bereitstellen, sollten diese Elemente durch das `radiogroup`-Element oder durch Radio-Elemente mit der Eigenschaft [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) referenziert werden.

Da `radio` ein interaktives Steuerelement ist, muss es fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex), um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren eines Radios ist die <kbd>Leerzeichen</kbd>-Taste. Verwenden Sie JavaScript, um das `aria-checked`-Attribut auf `true` zu setzen, wenn ein Radio ausgewählt wird, und stellen Sie sicher, dass alle anderen Radio-Rollen in der Gruppe auf `aria-checked="false"` gesetzt sind.

Um programmatisch anzuzeigen, dass ein Radio-Button aus einer Radiogruppe ausgewählt werden muss, muss das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) mit einem Wert von `true` auf dem `radiogroup`-Element angegeben werden. Es wird nicht erwartet, das Attribut `aria-required` bei einzelnen ARIA-Radio-Buttons zu verwenden.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `radio` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `radio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `radio`-Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>name of my radio</h6></div>
```

Da Nachfahren von `radio` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

Aus der Sicht des Nutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets äquivalent zu folgendem im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) sind:

```html
<div role="radio">name of my radio</div>
```

## Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rolle [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)

  - : Die Radio-Buttons sind in oder gehören zu einem Element mit der Rolle `radiogroup`. Wenn sie nicht innerhalb einer `radiogroup` im Markup verschachtelt werden können, enthält das `aria-owns`-Attribut der `radiogroup` die `id`-Werte der nicht-nestbaren Radio-Buttons in der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand eines Radios. Wenn Sie mit Radio-Elementen verwendet wird, hat das Attribut einen von zwei möglichen Werten:

    - `true`
      - : Das Radio ist ausgewählt.
    - `false`
      - : Das Radio ist nicht ausgewählt.

> [!NOTE]
> Verwenden Sie das [`tabindex`-Attribut](/de/docs/Web/HTML/Global_attributes/tabindex), wenn `role="radio"` auf ein Element angewendet wird, das nativ keinen Tastaturfokus akzeptiert. Z.B. ein `<div>` oder `<span>`.

## Tastaturinteraktionen

- <kbd>Tab</kbd> + <kbd>Shift</kbd>

  - : Bewegen Sie den Fokus in und aus der Radiogruppe. Wenn sich der Fokus in eine Radiogruppe bewegt und ein Radio-Button bereits ausgewählt ist, wird der Fokus auf den ausgewählten Button gesetzt. Wenn keiner der Radio-Buttons ausgewählt ist, wird der Fokus auf den ersten Radio-Button in der Gruppe gesetzt.

- <kbd>Leertaste</kbd>

  - : Markiert das Radio, wenn es noch nicht markiert ist. Hebt die Markierung eines zuvor markierten Radio-Buttons in der Radiogruppe auf.

- <kbd>Pfeil-rechts</kbd> und <kbd>Pfeil-runter</kbd>

  - : Bewegen Sie den Fokus auf und markieren Sie den nächsten Radio-Button in der Gruppe, wobei der zuvor fokussierte Radio-Button abgewählt wird. Wenn der Fokus auf dem letzten Radio-Button liegt, bewegt sich der Fokus auf den ersten Radio-Button.

- <kbd>Pfeil-links</kbd> und <kbd>Pfeil-hoch</kbd>
  - : Bewegen Sie den Fokus auf und markieren Sie den vorherigen Radio-Button in der Gruppe, wobei der zuvor fokussierte Radio-Button abgewählt wird. Wenn der Fokus auf dem ersten Radio-Button liegt, bewegt sich der Fokus auf den letzten Radio-Button.

### Radios in einer Symbolleiste

Da Pfeiltasten verwendet werden, um zwischen Elementen einer Symbolleiste zu navigieren, und die <kbd>Tab</kbd>-Taste den Fokus in und aus einer Symbolleiste bewegt, ist die Tastaturinteraktion der Radiogruppe leicht unterschiedlich, wenn eine Radiogruppe in einer Symbolleiste verschachtelt ist, im Vergleich zu einer Radiogruppe, die nicht in einer Symbolleiste ist. Siehe [`radiogroup`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role#keyboard_interactions) für weitere Informationen.

## Erforderliches JavaScript

- `onClick`
  - : Behandeln Sie Mausklicks sowohl auf das Radio als auch auf das zugehörige Label, das den Zustand des Radios ändern wird, indem es den Wert des `aria-checked`-Attributs und das Erscheinungsbild des Radios ändert, sodass es dem sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyPress`
  - : Behandeln Sie den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Radios zu ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild des Radios geändert werden, sodass es dem sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.

## Beispiele

Das folgende Beispiel verwendet ARIA, um ansonsten generische Elemente zu modifizieren, damit sie als Radio-Buttons dargestellt werden. CSS und JavaScript werden verwendet, um den ausgewählten oder nicht ausgewählten Zustand des Elements visuell und programmatisch zu ändern.

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

Viel JavaScript ist erforderlich, um aus nicht-semantischem HTML Radio-Buttons zu machen.

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

Kein JavaScript (oder sogar CSS) wäre nötig gewesen, wenn wir ein semantisches HTML-Element mit demselben Namen für jeden Radio-Button in einer Gruppe von Radio-Buttons verwendet hätten:

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

## Beste Praktiken

Die erste Regel von ARIA ist: Wenn ein nativer HTML-Tag oder ein Attribut die Semantik und das Verhalten hat, das Sie benötigen, verwenden Sie es anstelle der Neudeklaration eines Elements und der Hinzufügung einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, native [HTML-Radio-Button](/de/docs/Web/HTML/Element/input/radio)-Formularsteuerungen zu verwenden, anstatt die Funktionalität von Radio-Buttons mit JavaScript und ARIA nachzubilden.

## Siehe auch

- [HTML `<input type="radio">` Radio-Button](/de/docs/Web/HTML/Element/input/radio)
- [HTML `tabindex`-Attribut](/de/docs/Web/HTML/Global_attributes/tabindex)
- [ARIA: `radiogroup`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [ARIA: `checkbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [ARIA: `menuitem`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [ARIA: `menuitemradio`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `menuitemradio`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `option`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
