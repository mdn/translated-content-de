---
title: "ARIA: radio Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/radio_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `radio`-Rolle ist eine von einer Gruppe von ankreuzbaren Radio-Buttons in einem `radiogroup`, wobei nicht mehr als ein Radio-Button gleichzeitig aktiviert sein kann.

## Beschreibung

Ein Radio-Button ist eine ankreuzbare Eingabe, die, wenn sie mit anderen Radio-Buttons verbunden ist, nur einer davon gleichzeitig aktiviert sein kann. Die Radio-Buttons müssen in einem [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) gruppiert werden, um anzuzeigen, welche die gleiche Wertänderung bewirken.

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

Das `role`-Attribut fügt nur Semantik hinzu; die gesamte Funktionalität, die standardmäßig mit dem [HTML-Radio](/de/docs/Web/HTML/Element/input/radio) geliefert wird, muss mit JavaScript und dem HTML-`tabindex`-Attribut hinzugefügt werden.

> [!NOTE]
> Die erste Regel von ARIA besagt, dass, wenn ein nativer HTML-Tag oder ein Attribut die benötigte Semantik und Funktionalität bietet, dieses statt eines umfunktionierten Elements mit hinzugefügtem ARIA verwendet werden sollte. Stattdessen sollte das native [HTML `<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) (mit einem zugehörigen {{HTMLElement('label')}}) verwendet werden, welches nativ alle benötigten Funktionen bereitstellt:

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

Das native HTML-Radio-Formularsteuerungselement ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)) hat zwei Zustände ("geprüft" oder "nicht geprüft"). Ähnlich kann ein Element mit `role="radio"` zwei Zustände durch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut offenlegen: `true`, was den geprüften Zustand darstellt, und `false`, was den ungeprüften Zustand darstellt. Der `aria-checked`-Wert von `mixed` ist nicht gültig für die Verwendung bei einem Radio-Button.

Wenn ein Radio-Button aktiviert ist, hat das Radio-Element `aria-checked` auf `true` gesetzt. Wenn es nicht aktiviert ist, hat es `aria-checked` auf `false` gesetzt.

Jedes Radio-Button-Element hat die Rolle `radio`. Die Radio-Rolle sollte immer mit anderen zugehörigen Radios in einem `radiogroup` geschachtelt sein. Wenn es nicht möglich ist, den Radio-Button innerhalb einer Radio-Gruppe zu schachteln, verwenden Sie die `id` des nicht gruppierten Radios in einer durch Leerzeichen getrennten Liste von Werten als Wert des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attributs auf dem `radiogroup`-Element, um die Beziehung des `radiogroup` zu seinen Radio-Mitgliedern anzuzeigen.

Jedes Radio-Element wird durch seinen Inhalt beschriftet, hat ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder ein Label, das mit `aria-label` angegeben ist. Das enthaltende `radiogroup`-Element sollte entweder ein sichtbares Label haben, das durch `aria-labelledby` referenziert wird, oder ein Label, das mit `aria-label` angegeben ist. Wenn Elemente zusätzliche Informationen über entweder die Radio-Gruppe oder jeden Radio-Button bereitstellen, sollten diese Elemente vom `radiogroup`-Element oder den Radio-Elementen mit der [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Eigenschaft referenziert werden.

Da `radio` ein interaktives Steuerelement ist, muss es fokussierbar und per Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren eines Radios ist die <kbd>Leertaste</kbd>. Verwenden Sie JavaScript, um das `aria-checked`-Attribut auf `true` zu setzen, wenn ein Radio aktiviert wird, während Sie sicherstellen, dass alle anderen Radio-Rollen in der Gruppe auf `aria-checked="false"` gesetzt sind.

Um programmatisch anzugeben, dass ein Radio-Button aus einer Radio-Gruppe gewählt werden muss, muss das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut, mit einem Wert von `true`, auf dem `radiogroup`-Element angegeben werden. Es wird nicht erwartet, dass das `aria-required`-Attribut bei einzelnen ARIA-Radio-Buttons verwendet wird.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `radio` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommen von `radio`-Elementen an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachte das folgende `radio`-Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>name of my radio</h6></div>
```

Da Nachkommen von `radio` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

Aus der Perspektive eines Benutzers einer assistiven Technologie existiert die Überschrift nicht, da die vorherigen Codefragmente dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="radio">name of my radio</div>
```

## Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) Rolle

  - : Die Radio-Buttons sind in einem Element mit der Rolle `radiogroup` enthalten oder von ihm besessen. Wenn es nicht möglich ist, im Markup innerhalb eines `radiogroup` geschachtelt zu sein, enthält das `aria-owns`-Attribut des `radiogroup` die `id`-Werte der nicht geschachtelten Radio-Buttons in der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand eines Radios. Bei Verwendung mit Radio-Elementen hat das Attribut einen von zwei möglichen Werten:

    - `true`
      - : Das Radio ist aktiviert.
    - `false`
      - : Das Radio ist nicht aktiviert.

> [!NOTE]
> Verwenden Sie das [`tabindex`-Attribut](/de/docs/Web/HTML/Global_attributes/tabindex), wenn `role="radio"` auf ein Element angewendet wird, das von Natur aus nicht die Fokussierung per Tastatur akzeptiert. Z.B. ein `<div>` oder `<span>`.

## Tastaturinteraktionen

- <kbd>Tab</kbd> + <kbd>Shift</kbd>

  - : Verschiebt den Fokus in die und aus der Radio-Gruppe heraus. Wenn der Fokus in eine Radio-Gruppe verschoben wird und ein Radio-Button bereits aktiviert ist, wird der Fokus auf den aktivierten Button gesetzt. Wenn keiner der Radio-Buttons aktiviert ist, wird der Fokus auf den ersten Radio-Button in der Gruppe gesetzt.

- <kbd>Leertaste</kbd>

  - : Aktiviert das Radio, wenn es noch nicht aktiviert ist. Deaktiviert einen zuvor aktivierten Radio-Button in der Gruppe.

- <kbd>Rechtspfeil</kbd> und <kbd>Abwärtspfeil</kbd>

  - : Verschiebt den Fokus und aktiviert den nächsten Radio-Button in der Gruppe, dabei wird der zuvor fokussierte Radio-Button deaktiviert. Wenn der Fokus auf dem letzten Radio-Button liegt, wird der Fokus auf den ersten Radio-Button verschoben.

- <kbd>Linkspfeil</kbd> und <kbd>Aufwärtspfeil</kbd>
  - : Verschiebt den Fokus und aktiviert den vorherigen Radio-Button in der Gruppe, dabei wird der zuvor fokussierte Radio-Button deaktiviert. Wenn der Fokus auf dem ersten Radio-Button liegt, wird der Fokus auf den letzten Radio-Button verschoben.

### Radios in einer Symbolleiste

Da Pfeiltasten verwendet werden, um zwischen Elementen einer Symbolleiste zu navigieren und die <kbd>Tab</kbd>-Taste den Fokus innerhalb und außerhalb einer Symbolleiste verschiebt, ist die Tastaturinteraktion einer in einer Symbolleiste verschachtelten Radio-Gruppe leicht anders als die einer Radio-Gruppe, die nicht innerhalb einer Symbolleiste ist. Siehe [`radiogroup` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role#keyboard_interactions) für weitere Informationen.

## Erforderliches JavaScript

- `onClick`
  - : Behandelt Mausklicks sowohl auf das Radio als auch auf das zugehörige Label, das den Zustand des Radios durch Ändern des Wertes des `aria-checked`-Attributs und des Aussehens des Radios ändert, sodass es für den sehenden Nutzer aktiviert oder deaktiviert erscheint.
- `onKeyPress`
  - : Behandelt den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Radios zu ändern, indem der Wert des `aria-checked`-Attributs und das Aussehen des Radios geändert werden, sodass es für den sehenden Nutzer aktiviert oder deaktiviert erscheint.

## Beispiele

Das folgende Beispiel verwendet ARIA, um ansonsten generische Elemente so zu modifizieren, dass sie als Radio-Buttons dargestellt werden. CSS und JavaScript werden verwendet, um den aktivierten oder deaktivierten Zustand des Elements visuell und programmatisch zu ändern.

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

Es ist viel JavaScript erforderlich, um Radio-Buttons aus nicht-semantischem HTML zu erstellen.

```js
// initialize all the radio role elements

const radioGroups = document.querySelectorAll('[role="radiogroup"]');

for (let i = 0; i < radioGroups.length; i++) {
  const radios = radioGroups[i].querySelectorAll("[role=radio]");
  for (let j = 0; j < radios.length; j++) {
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

Kein JavaScript (oder sogar CSS) wäre nötig gewesen, hätten wir ein semantisches HTML-Element verwendet, bei dem der Name jedes Radio-Buttons in einer Gruppe von Radio-Buttons derselbe ist:

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

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Tag oder ein Attribut die benötigte Semantik und das gewünschte Verhalten aufweist, verwenden Sie es anstelle eines umfunktionierten Elements mit einer hinzugefügten ARIA-Rolle, einem Zustand oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, native [HTML-Radio-Button](/de/docs/Web/HTML/Element/input/radio)-Formular-Steuerelemente zu verwenden, anstatt die Funktionalität eines Radios mit JavaScript und ARIA neu zu erstellen.

## Siehe auch

- [HTML `<input type="radio">` Radio-Button](/de/docs/Web/HTML/Element/input/radio)
- [HTML `tabindex`-Attribut](/de/docs/Web/HTML/Global_attributes/tabindex)
- [ARIA: `radiogroup` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [ARIA: `checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
