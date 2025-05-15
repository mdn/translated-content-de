---
title: "ARIA: radio-Rolle"
short-title: radio
slug: Web/Accessibility/ARIA/Reference/Roles/radio_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `radio`-Rolle gehört zu einer Gruppe von auswählbaren Radiobuttons in einer `radiogroup`, bei der nicht mehr als ein Radiobutton gleichzeitig ausgewählt sein kann.

## Beschreibung

Ein Radiobutton ist ein auswählbares Eingabeelement, bei dem, wenn es mit anderen Radiobuttons verknüpft ist, nur einer davon gleichzeitig ausgewählt werden kann. Die Radiobuttons müssen in einer [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) gruppiert werden, um anzuzeigen, welche von ihnen denselben Wert beeinflussen.

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

Das `role`-Attribut fügt nur Semantik hinzu; alle Funktionalitäten, die nativ mit dem [HTML-Radiobutton](/de/docs/Web/HTML/Reference/Elements/input/radio) kommen, müssen mit JavaScript und dem HTML-Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzugefügt werden.

> [!NOTE]
> Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten bereitstellt, verwenden Sie es anstelle der Umnutzung eines Elements und dem Hinzufügen von ARIA. Nutzen Sie stattdessen das native [HTML `<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) (mit einem zugehörigen {{HTMLElement('label')}}), das von Haus aus alle erforderlichen Funktionalitäten bietet:

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

Das native HTML-Radio-Steuerelement ([`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)) hat zwei Zustände ("ausgewählt" oder "nicht ausgewählt"). Ähnlich kann ein Element mit `role="radio"` zwei Zustände über das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut anzeigen: `true` für den ausgewählten Zustand und `false` für den nicht ausgewählten Zustand. Der `aria-checked` Wert `mixed` ist nicht gültig für einen Radiobutton.

Wenn ein Radiobutton ausgewählt ist, hat das Radioelement `aria-checked` auf `true` gesetzt. Wenn es nicht ausgewählt ist, hat es `aria-checked` auf `false` gesetzt.

Jedes Radiobutton-Element hat die Rolle `radio`. Die Radio-Rolle sollte immer zusammen mit anderen zugehörigen Radios in einem `radiogroup` verschachtelt sein. Wenn es nicht möglich ist, den Radiobutton in einer Radiogruppe zu verschachteln, verwenden Sie die `id` des nicht gruppierten Radios in einer durch Leerzeichen getrennten Liste von Werten als Wert des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attributs auf dem `radiogroup` Element, um die Beziehung der `radiogroup` zu ihren Mitgliedern zu kennzeichnen.

Jedes Radioelement ist durch seinen Inhalt beschriftet, hat eine sichtbare Beschriftung, die durch `aria-labelledby` referenziert wird, oder eine Beschriftung, die mit `aria-label` angegeben ist. Das enthaltende `radiogroup`-Element sollte entweder eine sichtbare Beschriftung haben, die durch `aria-labelledby` referenziert wird, oder eine mit `aria-label` angegebene Beschriftung. Wenn Elemente vorhanden sind, die zusätzliche Informationen über die Radiogruppe oder jeden Radiobutton liefern, sollten diese Elemente vom `radiogroup`-Element oder den Radioelementen mit der [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Eigenschaft referenziert werden.

Da `radio` ein interaktives Steuerelement ist, muss es fokussierbar und tastaturzugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren eines Radios ist die <kbd>Leertaste</kbd>. Verwenden Sie JavaScript, um das `aria-checked` Attribut auf `true` zu setzen, wenn ein Radio ausgewählt wird und stellen Sie sicher, dass alle anderen Radio-Rollen in der Gruppe auf `aria-checked="false"` gesetzt sind.

Um programmgesteuert anzuzeigen, dass ein Radiobutton aus einer Radiogruppe gewählt werden muss, muss das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut mit einem Wert von `true` auf dem `radiogroup` Element angegeben werden. Es wird nicht erwartet, das `aria-required`-Attribut auf einzelnen ARIA-Radiobuttons zu verwenden.

### Alle Nachfahren sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeit-API dargestellt werden, nur Text enthalten können. Zugänglichkeit-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `radio` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrenelemente eines `radio`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `radio` Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>name of my radio</h6></div>
```

Da Nachfahren von `radio` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

Aus der Perspektive eines Benutzers assistiver Technologien existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="radio">name of my radio</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) Rolle

  - : Die Radiobuttons sind in einem Element mit der Rolle `radiogroup` enthalten oder von diesem besessen. Wenn sie nicht innerhalb einer `radiogroup` innerhalb des Markups verschachtelt werden können, enthält das `aria-owns` Attribut der `radiogroup` die `id`-Werte der nicht verschachtelten Radiobuttons in der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand eines Radios. Wenn es mit Radioelementen verwendet wird, hat das Attribut einen von zwei möglichen Werten:

    - `true`
      - : Der Radiobutton ist ausgewählt.
    - `false`
      - : Der Radiobutton ist nicht ausgewählt.

> [!NOTE]
> Verwenden Sie das [`tabindex` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), wenn die `role="radio"` auf ein Element angewendet wird, das von Natur aus keine Tastaturfokussierung akzeptiert. Z.B. ein `<div>` oder `<span>`.

### Tastaturinteraktionen

- <kbd>Tab</kbd> + <kbd>Umschalt</kbd>

  - : Bewegt den Fokus in die und aus der Radiogruppe. Wenn der Fokus in eine Radiogruppe bewegt wird und ein Radiobutton bereits ausgewählt ist, wird der Fokus auf den ausgewählten Button gesetzt. Wenn keiner der Radiobuttons ausgewählt ist, wird der Fokus auf den ersten Radiobutton in der Gruppe gesetzt.

- <kbd>Leertaste</kbd>

  - : Markiert den Radiobutton, wenn er noch nicht markiert ist. Hebt die Auswahl eines zuvor markierten Radiobuttons in der Radiogruppe auf.

- <kbd>Rechter Pfeil</kbd> und <kbd>Nach unten Pfeil</kbd>

  - : Bewegt den Fokus auf den nächsten Radiobutton in der Gruppe und markiert ihn, wobei der zuvor fokussierte Radiobutton entmarkiert wird. Wenn der Fokus auf dem letzten Radiobutton ist, bewegt sich der Fokus zum ersten Radiobutton.

- <kbd>Linker Pfeil</kbd> und <kbd>Nach oben Pfeil</kbd>
  - : Bewegt den Fokus auf den vorherigen Radiobutton in der Gruppe und markiert ihn, wobei der zuvor fokussierte Radiobutton entmarkiert wird. Wenn der Fokus auf dem ersten Radiobutton ist, bewegt sich der Fokus zum letzten Radiobutton.

### Radios in einer Toolbar

Da Pfeiltasten verwendet werden, um zwischen Elementen einer Toolbar zu navigieren und die <kbd>Tab</kbd>-Taste den Fokus in und aus einer Toolbar bewegt, ist die Tastaturinteraktion der Radiogruppe, wenn sie in einer Toolbar verschachtelt ist, etwas anders als die einer Radiogruppe, die nicht in einer Toolbar ist. Siehe [`radiogroup` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role#keyboard_interactions) für weitere Informationen.

## Erforderliches JavaScript

- `onClick`
  - : Behandelt Mausklicks sowohl auf den Radiobutton als auch auf das zugehörige Label und ändert den Zustand des Radios durch Ändern des Wertes des `aria-checked` Attributs und des Erscheinungsbildes des Radios, sodass es für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyPress`
  - : Behandelt den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Radios zu ändern, indem der Wert des `aria-checked` Attributs und das Erscheinungsbild des Radios so geändert wird, dass es für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.

## Beispiele

Das folgende Beispiel verwendet ARIA, um ansonsten generische Elemente so zu modifizieren, dass sie als Radiobuttons dargestellt werden. CSS und JavaScript werden verwendet, um den ausgewählten oder nicht ausgewählten Zustand des Elements visuell und programmatisch zu ändern.

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

Viel JavaScript ist erforderlich, um Radiobuttons aus nicht-semantischem HTML zu erstellen.

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

Kein JavaScript (oder sogar CSS) wäre erforderlich gewesen, wenn wir das semantische HTML-Element mit dem Namen jedes Radiobuttons in einer Gruppe von Radiobuttons verwendet hätten:

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

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder -Attribut die Semantik und das Verhalten bietet, das Sie benötigen, verwenden Sie es anstelle der Umgestaltung eines Elements und der Hinzufügung einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, native [HTML-Radiobutton](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerungselemente anstelle der Neugestaltung der Funktionalität eines Radios mit JavaScript und ARIA zu verwenden.

## Siehe auch

- [HTML `<input type="radio">` Radiobutton](/de/docs/Web/HTML/Reference/Elements/input/radio)
- [HTML `tabindex` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
- [ARIA: `radiogroup` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [ARIA: `checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
