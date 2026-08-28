---
title: "ARIA: radio Rolle"
short-title: radio
slug: Web/Accessibility/ARIA/Reference/Roles/radio_role
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

Die `radio`-Rolle gehört zu einer Gruppe von auswählbaren Optionsfeldern in einer `radiogroup`, bei der nicht mehr als ein Optionsfeld gleichzeitig ausgewählt sein kann.

## Beschreibung

Ein Optionsfeld ist eine auswählbare Eingabe, bei der in Verbindung mit anderen Optionsfeldern nur eines zur gleichen Zeit ausgewählt sein kann. Die Optionsfelder müssen zusammen in einem [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) gruppiert werden, um anzuzeigen, welche von ihnen denselben Wert betreffen.

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

Das `role`-Attribut fügt nur Semantik hinzu; alle Funktionalitäten, die nativ mit dem [HTML-Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio) kommen, müssen mit JavaScript und dem HTML-Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ergänzt werden.

> [!NOTE]
> Die erste Regel von ARIA ist, dass wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das benötigte Verhalten bietet, es verwendet werden sollte, statt ein Element umzufunktionieren und ARIA hinzuzufügen. Verwenden Sie stattdessen das native [HTML `<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) (mit einem zugehörigen {{HTMLElement('label')}}), das nativ alle erforderlichen Funktionalitäten bereitstellt:

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

Das native HTML-Optionsfeld-Steuerelement ([`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)) hat zwei Zustände („ausgewählt“ oder „nicht ausgewählt“). Ähnlich kann ein Element mit `role="radio"` zwei Zustände mittels des [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attributs anzeigen: `true` für den ausgewählten Zustand und `false` für den nicht ausgewählten Zustand. Der `aria-checked`-Wert von „mixed“ ist für ein Optionsfeld nicht zulässig.

Wenn ein Optionsfeld ausgewählt ist, ist das Radio-Element mit `aria-checked` auf `true` gesetzt. Wenn es nicht ausgewählt ist, ist es mit `aria-checked` auf `false` gesetzt.

Jedes Optionsfeld hat die Rolle `radio`. Die Radio-Rolle sollte immer mit anderen zugehörigen Radios in einer `radiogroup` geschachtelt sein. Falls es nicht möglich ist, das Optionsfeld innerhalb einer Radiogruppe zu verschachteln, verwenden Sie die `id` des nicht gruppierten Radios in einer durch Leerzeichen getrennten Liste von Werten als Wert des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attributs für das `radiogroup`-Element, um die Beziehung der `radiogroup` zu ihren Radio-Mitgliedern anzuzeigen.

Jedes Radio-Element wird durch seinen Inhalt benannt, hat ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder hat ein Label, das mit `aria-label` angegeben ist. Das umgebende `radiogroup`-Element sollte entweder ein sichtbares Label haben, das durch `aria-labelledby` referenziert wird, oder ein Label, das mit `aria-label` angegeben ist. Wenn Elemente vorhanden sind, die zusätzliche Informationen über die Radiogruppe oder jedes Optionsfeld bereitstellen, sollten diese Elemente durch das `radiogroup`-Element oder die Radioelemente mit der [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Eigenschaft referenziert werden.

Da `radio` ein interaktives Steuerelement ist, muss es fokussierbar und per Tastatur zugänglich sein. Wenn die Rolle auf ein nicht-fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, um dies zu ändern. Die erwartete Tastenkombination zur Aktivierung eines Radios ist die <kbd>Leerzeichen</kbd>-Taste. Verwenden Sie JavaScript, um das `aria-checked`-Attribut auf `true` zu setzen, wenn ein Radio ausgewählt wird, und sicherzustellen, dass alle anderen Radio-Rollen in der Gruppe auf `aria-checked="false"` gesetzt sind.

Um programmgesteuert anzugeben, dass ein Optionsfeld aus einer Radiogruppe gewählt werden muss, muss das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) mit dem Wert `true` auf dem `radiogroup`-Element angegeben werden. Für einzelne ARIA-Optionsfelder wird nicht erwartet, dass das Attribut `aria-required` verwendet wird.

### Alle Nachfahren sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `radio` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahr-Elemente eines `radio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `radio`-Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>name of my radio</h6></div>
```

Weil Nachfahren von `radio` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

Aus der Perspektive der Benutzer der unterstützenden Technologie existiert die Überschrift nicht, da die vorherigen Code-Schnipsel äquivalent zum Folgenden im {{Glossary("Accessibility_tree", "Barrierefreiheit-Baum")}} sind:

```html
<div role="radio">name of my radio</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) Rolle
  - : Die Optionsfelder sind in einem Element mit der Rolle `radiogroup` enthalten oder von diesem besessen. Wenn es nicht möglich ist, innerhalb einer `radiogroup` im Markup zu verschachteln, enthält das `aria-owns`-Attribut der `radiogroup` die `id`-Werte der nicht-verschachtelten Optionsfelder in der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Der Wert von `aria-checked` definiert den Zustand eines Radios. Wenn es mit Radioelementen verwendet wird, hat das Attribut einen von zwei möglichen Werten:
    - `true`
      - : Das Optionsfeld ist ausgewählt.
    - `false`
      - : Das Optionsfeld ist nicht ausgewählt.

> [!NOTE]
> Verwenden Sie das [`tabindex`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), wenn das `role="radio"` auf einem Element verwendet wird, das nativ keine Tastaturfokussierung akzeptiert. Z.B. ein `<div>` oder `<span>`.

### Tastatur-Interaktionen

- <kbd>Tab</kbd> + <kbd>Shift</kbd>
  - : Bewegt den Fokus in die und aus der Radiogruppe. Wenn der Fokus in eine Radiogruppe bewegt wird und ein Optionsfeld bereits ausgewählt ist, wird der Fokus auf das ausgewählte Feld gesetzt. Wenn keines der Optionsfelder ausgewählt ist, wird der Fokus auf das erste Optionsfeld in der Gruppe gesetzt.

- <kbd>Leerzeichen</kbd>
  - : Wählt das Optionsfeld aus, wenn es noch nicht ausgewählt ist. Hebt die Auswahl eines zuvor ausgewählten Optionsfeldes in der Radiogruppe auf.

- <kbd>Rechtspfeil</kbd> und <kbd>Abwärtspfeil</kbd>
  - : Bewegt den Fokus zu und wählt das nächste Optionsfeld in der Gruppe aus, wobei das zuvor fokussierte Optionsfeld abgewählt wird. Wenn sich der Fokus auf dem letzten Optionsfeld befindet, bewegt sich der Fokus zum ersten Optionsfeld.

- <kbd>Linkspfeil</kbd> und <kbd>Aufwärtspfeil</kbd>
  - : Bewegt den Fokus zu und wählt das vorherige Optionsfeld in der Gruppe aus, wobei das zuvor fokussierte Optionsfeld abgewählt wird. Wenn sich der Fokus auf dem ersten Optionsfeld befindet, bewegt sich der Fokus zum letzten Optionsfeld.

### Optionsfelder in einer Werkzeugleiste

Da Pfeiltasten verwendet werden, um zwischen Elementen einer Werkzeugleiste zu navigieren, und die <kbd>Tab</kbd>-Taste den Fokus in und aus einer Werkzeugleiste bewegt, ist die Tastaturinteraktion der Radiogruppe, wenn sie in einer Werkzeugleiste verschachtelt ist, etwas anders als die einer Radiogruppe, die nicht in einer Werkzeugleiste ist. Siehe [`radiogroup` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role#keyboard_interactions) für weitere Informationen.

## Erforderliches JavaScript

- `onClick`
  - : Behandelt Mausklicks sowohl auf das Optionsfeld als auch auf das zugehörige Label, das den Zustand des Radios durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild des Radios, sodass es dem sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint, ändert.
- `onKeyPress`
  - : Behandelt den Fall, bei dem der Benutzer die <kbd>Leerzeichen</kbd>-Taste drückt, um den Zustand des Radios durch Änderung des Wertes des `aria-checked`-Attributs und das Erscheinungsbild des Radios, sodass es dem sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint, ändert.

## Beispiele

Das folgende Beispiel verwendet ARIA, um ansonsten generische Elemente so zu modifizieren, dass sie als Optionsfelder angezeigt werden. CSS und JavaScript werden verwendet, um den ausgewählten oder nicht ausgewählten Zustand des Elements visuell und programmatisch zu modifizieren.

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

Eine Menge JavaScript ist erforderlich, um aus nicht-semantischem HTML Optionsfelder zu machen.

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

Es würde kein JavaScript (oder sogar CSS) benötigt werden, wenn wir ein semantisches HTML-Element verwendet hätten, bei dem der Name jedes Optionsfeldes in einer Gruppe von Optionsfeldern derselbe ist:

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

Die erste Regel von ARIA ist: Wenn ein nativer HTML-Element oder -Attribut die Semantik und das Verhalten bietet, das Sie benötigen, verwenden Sie es, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Es wird daher empfohlen, native [HTML-Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio) Formular-Steuerelemente zu verwenden, anstatt die Funktionalität eines Optionsfeldes mit JavaScript und ARIA neu zu erstellen.

## Siehe auch

- [HTML `<input type="radio">` Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio)
- [HTML `tabindex`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
- [ARIA: `radiogroup`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [ARIA: `checkbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [ARIA: `menuitem`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemradio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `menuitemradio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `option`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
