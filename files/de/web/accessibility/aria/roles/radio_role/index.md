---
title: "ARIA: radio Rolle"
slug: Web/Accessibility/ARIA/Roles/radio_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Die `radio` Rolle ist eine von einer Gruppe von auswählbaren Optionsschaltflächen in einer `radiogroup`, wobei nicht mehr als eine Optionsschaltfläche gleichzeitig ausgewählt sein kann.

## Beschreibung

Eine Optionsschaltfläche ist ein auswählbares Eingabefeld, bei dem in Verbindung mit anderen Optionsschaltflächen jeweils nur eine gleichzeitig ausgewählt sein kann. Die Optionsschaltflächen müssen in einer [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) gruppiert werden, um anzuzeigen, welche Schaltflächen denselben Wert beeinflussen.

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

Das `role`-Attribut fügt nur Semantik hinzu; alle Funktionalitäten, die nativ mit der [HTML-Optionsschaltfläche](/de/docs/Web/HTML/Element/input/radio) kommen, müssen mit JavaScript und dem HTML [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut hinzugefügt werden.

> [!NOTE]
> Die erste Regel von ARIA lautet, wenn ein natives HTML-Element oder Attribut die erforderlichen Semantik und Verhalten bietet, verwenden Sie es anstatt ein Element umzufunktionieren und ARIA hinzuzufügen. Verwenden Sie stattdessen das native [HTML `<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) (mit einem zugehörigen {{HTMLElement('label')}}), welches alle erforderlichen Funktionalitäten nativ bereitstellt:

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

Die native HTML-Optionsschaltfläche ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)) hat zwei Zustände ("ausgewählt" oder "nicht ausgewählt"). Ähnlich kann ein Element mit `role="radio"` zwei Zustände durch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) Attribut anzeigen: `true`, was den ausgewählten Zustand repräsentiert, und `false`, was den nicht ausgewählten Zustand repräsentiert. Der `aria-checked` Wert `mixed` ist für eine Optionsschaltfläche nicht gültig.

Wenn eine Optionsschaltfläche ausgewählt ist, wird beim Radioelement `aria-checked` auf `true` gesetzt. Wenn es nicht ausgewählt ist, wird es auf `false` gesetzt.

Jedes Elemente einer Optionsschaltfläche besitzt die Rolle `radio`. Die radio-Rolle sollte immer mit anderen zugehörigen Radios in einer `radiogroup` verschachtelt sein. Wenn es nicht möglich ist, die Optionsschaltfläche innerhalb einer Radio-Gruppe zu verschachteln, verwenden Sie die `id` des nicht gruppierten Radios in einer durch Leerzeichen getrennten Liste von Werten als Wert des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Attributs auf dem `radiogroup`-Element, um die Beziehung der `radiogroup` zu ihren Radio-Mitgliedern anzuzeigen.

Jedes Radio-Element wird mit seinem Inhalt beschriftet, hat ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder hat ein mit `aria-label` angegebenes Label. Das enthaltene `radiogroup`-Element sollte entweder ein sichtbares Label haben, das durch `aria-labelledby` referenziert wird, oder ein mit `aria-label` angegebenes Label haben. Wenn Elemente vorhanden sind, die zusätzliche Informationen über die Radio-Gruppe oder jede Optionsschaltfläche bereitstellen, sollten diese Elemente vom `radiogroup`-Element oder den Radio-Elementen mit der [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Eigenschaft referenziert werden.

Da `radio` ein interaktives Steuerelement ist, muss es fokussierbar und per Tastatur zugänglich sein. Wenn die Rolle auf ein nicht-fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren eines Radios ist die <kbd>Leertaste</kbd>. Verwenden Sie JavaScript, um das `aria-checked` Attribut auf `true` zu setzen, wenn ein Radio ausgewählt wird, und stellen Sie sicher, dass alle anderen Radio-Rollen in der Gruppe auf `aria-checked="false"` gesetzt sind.

Um programmatisch anzuzeigen, dass eine Optionsschaltfläche aus einer Radio-Gruppe gewählt werden muss, muss das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) Attribut mit dem Wert `true` am `radiogroup`-Element angegeben werden. Es wird nicht erwartet, dass das `aria-required` Attribut auf einzelnen ARIA-Optionsschaltflächen verwendet wird.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente in einem `radio` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommen eines beliebigen `radio` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `radio`-Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>name of my radio</h6></div>
```

Weil die Nachkommen von `radio` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

Aus der Perspektive eines Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Ausschnitte im {{Glossary("Accessibility_tree", "Zugriffsbaum")}} gleichwertig zu folgendem sind:

```html
<div role="radio">name of my radio</div>
```

## Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) Rolle

  - : Die Optionsschaltflächen sind in einem Element mit der Rolle `radiogroup` enthalten oder werden von diesem besessen. Falls keine Verschachtelung innerhalb einer `radiogroup` im Markup möglich ist, enthält das `aria-owns` Attribut der `radiogroup` die `id`-Werte der nicht verschachtelten Optionsschaltflächen in der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand eines Radios. Wenn es mit Radio-Elementen verwendet wird, hat das Attribut einen von zwei möglichen Werten:

    - `true`
      - : Das Radio ist ausgewählt.
    - `false`
      - : Das Radio ist nicht ausgewählt.

> [!NOTE]
> Verwenden Sie das [`tabindex` Attribut](/de/docs/Web/HTML/Global_attributes/tabindex), wenn die `role="radio"` auf einem Element verwendet wird, das nativ keine Tastaturfokussierung akzeptiert, z. B. auf einem `<div>` oder `<span>`.

## Tastaturinteraktionen

- <kbd>Tab</kbd> + <kbd>Shift</kbd>

  - : Fokussieren Sie in die und aus der Radio-Gruppe heraus. Wenn der Fokus in eine Radio-Gruppe verschoben wird und bereits eine Optionsschaltfläche ausgewählt ist, wird der Fokus auf die ausgewählte Schaltfläche gesetzt. Wenn keine der Optionsschaltflächen ausgewählt ist, wird der Fokus auf die erste Optionsschaltfläche in der Gruppe gesetzt.

- <kbd>Leertaste</kbd>

  - : Wählt das Radio aus, wenn es noch nicht ausgewählt ist. Hebt die Auswahl einer zuvor ausgewählten Optionsschaltfläche in der Radio-Gruppe auf.

- <kbd>Pfeil-rechts</kbd> und <kbd>Pfeil-runter</kbd>

  - : Verschiebt den Fokus zur und wählt die nächste Optionsschaltfläche in der Gruppe, hebt die vorherige fokussierte Optionsschaltfläche auf. Wenn der Fokus auf der letzten Optionsschaltfläche liegt, wird der Fokus auf die erste Optionsschaltfläche verschoben.

- <kbd>Pfeil-links</kbd> und <kbd>Pfeil-hoch</kbd>
  - : Verschiebt den Fokus zur und wählt die vorherige Optionsschaltfläche in der Gruppe, hebt die vorherige fokussierte Optionsschaltfläche auf. Wenn der Fokus auf der ersten Optionsschaltfläche liegt, wird der Fokus auf die letzte Optionsschaltfläche verschoben.

### Radios in einer Werkzeugleiste

Da Pfeiltasten verwendet werden, um zwischen den Elementen einer Werkzeugleiste zu navigieren und die <kbd>Tab</kbd>-Taste den Fokus in und aus einer Werkzeugleiste bewegt, ist die Tastaturinteraktion der Radio-Gruppe etwas anders als die einer Radio-Gruppe, die sich nicht in einer Werkzeugleiste befindet. Weitere Informationen finden Sie unter [Tastaturinteraktionen der `radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role#keyboard_interactions).

## Erforderliches JavaScript

- `onClick`
  - : Verarbeiten Sie Mausklicks auf sowohl das Radio als auch das zugehörige Label, das den Zustand des Radios durch Ändern des `aria-checked` Attributs und des Aussehens des Radios ändern wird, damit es dem sehenden Benutzer ausgewählt oder nicht ausgewählt erscheint.
- `onKeyPress`
  - : Verarbeiten Sie den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Radios durch Ändern des `aria-checked` Attributs und des Aussehens des Radios zu ändern, damit es dem sehenden Benutzer ausgewählt oder nicht ausgewählt erscheint.

## Beispiele

Das folgende Beispiel verwendet ARIA, um ansonsten generische Elemente als Optionsschaltflächen darzustellen. CSS und JavaScript werden verwendet, um den ausgewählten oder nicht ausgewählten Zustand des Elements visuell und programmatisch zu ändern.

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

Es wird viel JavaScript benötigt, um aus nicht-semantischem HTML Optionsschaltflächen zu machen.

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

Kein JavaScript (oder sogar CSS) wäre nötig gewesen, wenn wir das semantische HTML-Element mit dem Namen jeder Optionsschaltfläche in einer Gruppe von Optionsschaltflächen, die gleich sind, verwendet hätten:

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

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die erforderlichen Semantik und das Verhalten bietet, verwenden Sie es statt ein Element umzufunktionieren und eine ARIA Rolle, Zustand oder Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, native [HTML-Optionsschaltflächen](/de/docs/Web/HTML/Element/input/radio) anstelle der Reproduktion der Funktionalität einer Optionsschaltfläche mit JavaScript und ARIA zu verwenden.

## Siehe auch

- [HTML `<input type="radio">` Optionsschaltfläche](/de/docs/Web/HTML/Element/input/radio)
- [HTML `tabindex` Attribut](/de/docs/Web/HTML/Global_attributes/tabindex)
- [ARIA: `radiogroup` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [ARIA: `checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
