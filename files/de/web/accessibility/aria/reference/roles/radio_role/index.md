---
title: "ARIA: radio-Rolle"
short-title: radio
slug: Web/Accessibility/ARIA/Reference/Roles/radio_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die `radio`-Rolle ist Teil einer Gruppe von anklickbaren Optionsfeldern in einer `radiogroup`, bei der nicht mehr als ein Optionsfeld gleichzeitig ausgewählt sein kann.

## Beschreibung

Ein Optionsfeld ist ein anklickbares Eingabefeld, das, wenn es mit anderen Optionsfeldern verbunden ist, von denen nur eines gleichzeitig ausgewählt werden kann. Die Optionsfelder müssen in einer [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) gruppiert werden, um anzuzeigen, welche den gleichen Wert beeinflussen.

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

Das `role`-Attribut fügt nur Semantik hinzu; die gesamte Funktionalität, die nativ mit dem [HTML-Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio) kommt, muss mit JavaScript und dem HTML-Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzugefügt werden.

> [!NOTE]
> Die erste Regel von ARIA ist, wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten bietet, verwenden Sie es anstelle der Neupositionierung eines Elements und dem Hinzufügen von ARIA. Stattdessen verwenden Sie das native [HTML `<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) (mit einem zugeordneten {{HTMLElement('label')}}), das von Natur aus alle erforderlichen Funktionen bietet:

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

Das native HTML-Formularsteuerungsfeld ([`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)) hat zwei Zustände ("geprüft" oder "nicht geprüft"). Ein Element mit `role="radio"` kann ähnlich zwei Zustände über das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) anzeigen: `true` repräsentiert den geprüften Zustand, und `false` repräsentiert den ungeprüften Zustand. Der `aria-checked`-Wert `mixed` ist für ein Optionsfeld nicht gültig.

Wenn ein Optionsfeld geprüft ist, hat das Element `aria-checked` auf `true` gesetzt. Wenn es nicht geprüft ist, hat es `aria-checked` auf `false` gesetzt.

Jedes Optionsfeldelement hat die Rolle `radio`. Die Radio-Rolle sollte immer zusammen mit anderen zugehörigen Radios in einer `radiogroup` verschachtelt sein. Wenn es nicht möglich ist, das Optionsfeld innerhalb einer Radiogruppe zu verschachteln, verwenden Sie die `id` des nicht gruppierten Radios in einer durch Leerzeichen getrennten Liste von Werten als Wert des Attributs [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) auf dem `radiogroup`-Element, um die Beziehung der `radiogroup` zu ihren Radio-Mitgliedern anzuzeigen.

Jedes Radio-Element ist durch seinen Inhalt beschriftet, hat ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder hat ein Label, das mit `aria-label` angegeben ist. Das enthaltende `radiogroup`-Element sollte entweder ein sichtbares Label haben, das durch `aria-labelledby` referenziert wird, oder ein Label, das mit `aria-label` angegeben ist. Wenn Elemente vorhanden sind, die zusätzliche Informationen über die Radiogruppe oder jedes Optionsfeld bereitstellen, sollten diese Elemente durch das `radiogroup`-Element oder Radio-Elemente mit der Eigenschaft [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenziert werden.

Da `radio` ein interaktives Steuerelement ist, muss es fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), um dies zu ändern. Die erwartete Tastenkombination zur Aktivierung eines Radios ist die <kbd>Space</kbd>-Taste. Verwenden Sie JavaScript, um das Attribut `aria-checked` auf `true` zu schalten, wenn ein Radio ausgewählt wird, und stellen Sie sicher, dass alle anderen Radio-Rollen in der Gruppe auf `aria-checked="false"` gesetzt sind.

Um programmatisch anzuzeigen, dass ein Optionsfeld aus einer Radiogruppe ausgewählt werden muss, muss das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) mit einem Wert von `true` auf dem `radiogroup`-Element angegeben werden. Es wird nicht erwartet, dass das `aria-required`-Attribut auf einzelnen ARIA-Optionsfeldern verwendet wird.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeit-API dargestellt sind, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `radio` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines beliebigen `radio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `radio`-Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>name of my radio</h6></div>
```

Da Nachkommen von `radio` präsentationell sind, ist der folgende Code äquivalent:

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

Aus der Perspektive des Benutzers von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeit-Baum")}} entsprechen:

```html
<div role="radio">name of my radio</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) Rolle
  - : Die Optionsfelder sind in einem Element mit der Rolle `radiogroup` enthalten oder im Besitz davon. Wenn es nicht möglich ist, innerhalb der Markupskruktur innerhalb einer `radiogroup` verschachtelt zu werden, enthält das Attribut `aria-owns` der `radiogroup` die `id`-Werte der nicht verschachtelten Optionsfelder in der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Der Wert von `aria-checked` definiert den Zustand eines Radios. Wenn es bei Radio-Elementen verwendet wird, hat das Attribut einen von zwei möglichen Werten:
    - `true`
      - : Das Radio ist geprüft.
    - `false`
      - : Das Radio ist nicht geprüft.

> [!NOTE]
> Verwenden Sie das [`tabindex`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), wenn `role="radio"` auf ein Element angewendet wird, das von Natur aus keine Tastaturfokus akzeptiert. z.B. ein `<div>` oder `<span>`.

### Tastatur-Interaktionen

- <kbd>Tab</kbd> + <kbd>Shift</kbd>
  - : Verschiebt den Fokus in und aus der Radiogruppe. Wenn der Fokus in eine Radiogruppe wechselt und ein Optionsfeld bereits geprüft ist, wird der Fokus auf das geprüfte Feld gesetzt. Wenn keines der Optionenfelder geprüft ist, wird der Fokus auf das erste Optionsfeld in der Gruppe gesetzt.

- <kbd>Space</kbd>
  - : Prüft das Optionsfeld, wenn es noch nicht geprüft ist. Hebt das Häkchen eines zuvor geprüften Optionsfelds in der Radiogruppe auf.

- <kbd>Pfeil nach rechts</kbd> und <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf und prüft das nächste Optionsfeld in der Gruppe, hebt das Häkchen des zuvor fokussierten Optionsfelds auf. Wenn der Fokus auf dem letzten Optionsfeld liegt, wird der Fokus auf das erste Optionsfeld verschoben.

- <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf und prüft das vorherige Optionsfeld in der Gruppe, hebt das Häkchen des zuvor fokussierten Optionsfelds auf. Wenn der Fokus auf dem ersten Optionsfeld liegt, wechselt der Fokus zum letzten Optionsfeld.

### Radios in einer Symbolleiste

Da Pfeiltasten verwendet werden, um zwischen Elementen einer Symbolleiste zu navigieren und die <kbd>Tab</kbd>-Taste den Fokus in und aus einer Symbolleiste bewegt, ist die Tastaturinteraktion der Radiogruppe etwas anders, wenn eine Radiogruppe in einer Symbolleiste verschachtelt ist, als bei einer Radiogruppe, die nicht in einer Symbolleiste enthalten ist. Weitere Informationen finden Sie unter [`radiogroup`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role#keyboard_interactions).

## Erforderliches JavaScript

- `onClick`
  - : Behandeln Sie Mausklicks sowohl auf das Radio als auch auf das zugehörige Label, das den Zustand des Radios ändert, indem es den Wert des `aria-checked`-Attributs und das Erscheinungsbild des Radios ändert, sodass es für den sehenden Benutzer geprüft oder nicht geprüft erscheint.
- `onKeyPress`
  - : Behandeln Sie den Fall, dass der Benutzer die <kbd>Space</kbd>-Taste drückt, um den Zustand des Radios zu ändern, indem es den Wert des `aria-checked`-Attributs und das Erscheinungsbild des Radios ändert, sodass es für den sehenden Benutzer geprüft oder nicht geprüft erscheint.

## Beispiele

Das folgende Beispiel verwendet ARIA, um ansonsten generische Elemente zu modifizieren, die als Optionsfelder angezeigt werden sollen. CSS und JavaScript werden verwendet, um den geprüften oder ungeprüften Zustand des Elements visuell und programmatisch zu ändern.

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

Es ist viel JavaScript erforderlich, um aus nicht-semantischem HTML Optionsfelder zu machen.

```js
// initialize all the radio role elements

const radioGroups = document.querySelectorAll('[role="radiogroup"]');

for (const radioGroup of radioGroups) {
  const radios = radioGroup.querySelectorAll("[role=radio]");
  for (const radio of radios) {
    radio.addEventListener("keydown", handleKeydown);
    radio.addEventListener("click", handleClick);
  }
}

// handle mouse and touch events
function handleClick(event) {
  setChecked(this);
  event.stopPropagation();
  event.preventDefault();
}

// handle key presses
function handleKeydown(event) {
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
}

// when a radio is selected, give it focus, set checked to true;
// ensure all other radios in radio group are not checked

function setChecked() {
  // uncheck all the radios in group
  // iterated through all the radios in radio group
  // eachRadio.tabIndex = -1;
  // eachRadio.setAttribute('aria-checked', 'false');
  // set the selected radio to checked
  // thisRadio.setAttribute('aria-checked', 'true');
  // thisRadio.tabIndex = 0;
  // thisRadio.focus();
  // set the value of the radioGroup to the value of the currently selected radio
}
```

<!-- {{EmbedLiveSample("Examples", 230, 250)}} -->

Kein JavaScript (oder sogar CSS) wäre nötig gewesen, wenn wir das semantische HTML-Element verwendet hätten, bei dem der Name jedes Optionsfeldes in einer Gruppe von Optionsfeldern gleich ist:

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

Die erste Regel von ARIA ist: Wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten bietet, verwenden Sie es anstelle der Neupositionierung eines Elements und dem Hinzufügen einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Es wird daher empfohlen, native [HTML-Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio)-Formularsteuerungen zu verwenden, anstatt die Funktionalität eines Radios mit JavaScript und ARIA nachzubilden.

## Siehe auch

- [HTML `<input type="radio">` Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio)
- [HTML `tabindex`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
- [ARIA: `radiogroup` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [ARIA: `checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
