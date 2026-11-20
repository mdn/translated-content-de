---
title: "ARIA: Rolle radio"
short-title: radio
slug: Web/Accessibility/ARIA/Reference/Roles/radio_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `radio` bezeichnet einen auswählbaren Radiobutton in einer Gruppe von Radiobuttons (`radiogroup`). Innerhalb der Gruppe kann jeweils höchstens ein Radiobutton ausgewählt sein.

## Beschreibung

Ein Radiobutton ist ein auswählbares Eingabeelement. Gehört er zu einer Gruppe von Radiobuttons, kann jeweils nur einer davon ausgewählt sein. Die Radiobuttons müssen in einer [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) zusammengefasst werden, damit erkennbar ist, welche Radiobuttons denselben Wert beeinflussen.

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

Das Attribut `role` fügt lediglich Semantik hinzu. Die gesamte Funktionalität, die ein [HTML-Radiobutton](/de/docs/Web/HTML/Reference/Elements/input/radio) von Haus aus bietet, muss mit JavaScript und dem HTML-Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ergänzt werden.

> [!NOTE]
> Die erste Regel für ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das benötigte Verhalten bietet, verwenden Sie dieses, statt ein Element zweckzuentfremden und ARIA hinzuzufügen. Verwenden Sie stattdessen das native [HTML-Element `<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) (mit einem zugehörigen {{HTMLElement('label')}}), das die gesamte erforderliche Funktionalität von Haus aus bereitstellt:

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

Das native HTML-Formularsteuerelement für Radiobuttons ([`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)) kennt zwei Zustände („ausgewählt“ und „nicht ausgewählt“). Ebenso kann ein Element mit `role="radio"` über das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) zwei Zustände angeben: `true` steht für ausgewählt, `false` für nicht ausgewählt. Der Wert `mixed` ist für `aria-checked` bei einem Radiobutton nicht zulässig.

Ist ein Radiobutton ausgewählt, hat sein Element den Wert `aria-checked="true"`. Ist er nicht ausgewählt, hat es den Wert `aria-checked="false"`.

Jedes Radiobutton-Element hat die Rolle `radio`. Es sollte stets zusammen mit den zugehörigen Radiobuttons in einer `radiogroup` verschachtelt sein. Wenn sich ein Radiobutton nicht innerhalb der Gruppe verschachteln lässt, geben Sie seine `id` in einer durch Leerzeichen getrennten Liste als Wert des Attributs [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) auf dem `radiogroup`-Element an. So wird seine Zugehörigkeit zur Gruppe kenntlich gemacht.

Jedes `radio`-Element erhält seine Beschriftung durch seinen Inhalt, durch eine sichtbare Beschriftung, auf die `aria-labelledby` verweist, oder durch eine mit `aria-label` angegebene Beschriftung. Das umschließende `radiogroup`-Element sollte ebenfalls eine sichtbare Beschriftung haben, auf die `aria-labelledby` verweist, oder eine mit `aria-label` angegebene Beschriftung. Sind Elemente mit zusätzlichen Informationen zur Radiobutton-Gruppe oder zu einzelnen Radiobuttons vorhanden, sollten das `radiogroup`-Element beziehungsweise die betreffenden `radio`-Elemente über die Eigenschaft [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) darauf verweisen.

Da `radio` ein interaktives Steuerelement ist, muss es fokussierbar und per Tastatur bedienbar sein. Wird die Rolle einem nicht fokussierbaren Element zugewiesen, verwenden Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), um dies zu ändern. Die vorgesehene Taste zum Auswählen eines Radiobuttons ist <kbd>Leertaste</kbd>. Setzen Sie mit JavaScript das Attribut `aria-checked` auf `true`, wenn ein Radiobutton ausgewählt wird, und stellen Sie dabei sicher, dass alle anderen Elemente mit der Rolle `radio` in der Gruppe `aria-checked="false"` haben.

Um programmatisch anzugeben, dass aus einer Radiobutton-Gruppe ein Radiobutton ausgewählt werden muss, geben Sie auf dem `radiogroup`-Element das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) mit dem Wert `true` an. Auf einzelnen ARIA-Radiobuttons sollte `aria-required` nicht verwendet werden.

### Alle Nachfahren sind rein präsentational

Einige Arten von Benutzeroberflächenkomponenten können in einer Accessibility-API der Plattform nur Text enthalten. Accessibility-APIs können semantische Elemente innerhalb eines `radio`-Elements nicht darstellen. Um diese Einschränkung zu berücksichtigen, weisen Browser allen Nachfahren eines `radio`-Elements automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu, da die Rolle `radio` keine semantischen Kindelemente unterstützt.

Betrachten Sie beispielsweise das folgende `radio`-Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>name of my radio</h6></div>
```

Da Nachfahren von `radio` rein präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

Aus Sicht von Personen, die assistive Technologien verwenden, existiert die Überschrift nicht. Die vorherigen Codebeispiele entsprechen im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} folgendem Code:

```html
<div role="radio">name of my radio</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- Rolle [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
  - : Die Radiobuttons befinden sich innerhalb eines Elements mit der Rolle `radiogroup` oder sind diesem zugeordnet. Wenn sie im Markup nicht in einer `radiogroup` verschachtelt werden können, enthält das Attribut `aria-owns` der `radiogroup` die `id`-Werte der nicht verschachtelten Radiobuttons der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Der Wert von `aria-checked` gibt den Zustand eines Radiobuttons an. Bei `radio`-Elementen hat das Attribut einen von zwei möglichen Werten:
    - `true`
      - : Der Radiobutton ist ausgewählt.
    - `false`
      - : Der Radiobutton ist nicht ausgewählt.

> [!NOTE]
> Verwenden Sie das [Attribut `tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), wenn `role="radio"` auf einem Element verwendet wird, das von Haus aus keinen Tastaturfokus erhalten kann, beispielsweise auf einem `<div>` oder `<span>`.

### Tastaturinteraktionen

- <kbd>Tab</kbd> + <kbd>Shift</kbd>
  - : Bewegt den Fokus in die Radiobutton-Gruppe hinein oder aus ihr heraus. Wird der Fokus in eine Gruppe bewegt und ist bereits ein Radiobutton ausgewählt, erhält dieser den Fokus. Ist keiner ausgewählt, erhält der erste Radiobutton der Gruppe den Fokus.

- <kbd>Leertaste</kbd>
  - : Wählt den Radiobutton aus, sofern er nicht bereits ausgewählt ist. Ein zuvor ausgewählter Radiobutton in der Gruppe wird dabei abgewählt.

- <kbd>Pfeil rechts</kbd> und <kbd>Pfeil nach unten</kbd>
  - : Bewegt den Fokus zum nächsten Radiobutton der Gruppe und wählt ihn aus. Der zuvor fokussierte Radiobutton wird abgewählt. Befindet sich der Fokus auf dem letzten Radiobutton, wechselt er zum ersten.

- <kbd>Pfeil links</kbd> und <kbd>Pfeil nach oben</kbd>
  - : Bewegt den Fokus zum vorherigen Radiobutton der Gruppe und wählt ihn aus. Der zuvor fokussierte Radiobutton wird abgewählt. Befindet sich der Fokus auf dem ersten Radiobutton, wechselt er zum letzten.

### Radiobuttons in einer Symbolleiste

Da die Pfeiltasten zur Navigation zwischen den Elementen einer Symbolleiste verwendet werden und die Taste <kbd>Tab</kbd> den Fokus in eine Symbolleiste hinein und aus ihr heraus bewegt, unterscheidet sich die Tastaturbedienung einer Radiobutton-Gruppe innerhalb einer Symbolleiste geringfügig von der einer Gruppe außerhalb einer Symbolleiste. Weitere Informationen finden Sie unter [Tastaturinteraktionen für `radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role#keyboard_interactions).

## Erforderliches JavaScript

- `onClick`
  - : Verarbeitet Mausklicks sowohl auf den Radiobutton als auch auf seine zugehörige Beschriftung. Dabei werden der Wert des Attributs `aria-checked` und das Erscheinungsbild des Radiobuttons geändert, sodass er für sehende Personen als ausgewählt oder nicht ausgewählt erkennbar ist.
- `onKeyPress`
  - : Verarbeitet das Drücken der <kbd>Leertaste</kbd>. Dabei werden der Wert des Attributs `aria-checked` und das Erscheinungsbild des Radiobuttons geändert, sodass er für sehende Personen als ausgewählt oder nicht ausgewählt erkennbar ist.

## Bewährte Verfahren

Die erste Regel für ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das benötigte Verhalten bietet, verwenden Sie dieses, statt ein Element zweckzuentfremden und es durch eine ARIA-Rolle, einen ARIA-Zustand oder eine ARIA-Eigenschaft zugänglich zu machen. Daher empfiehlt es sich, native [HTML-Radiobuttons](/de/docs/Web/HTML/Reference/Elements/input/radio) als Formularsteuerelemente zu verwenden, statt ihre Funktionalität mit JavaScript und ARIA nachzubilden.

## Beispiele

Im folgenden Beispiel werden ansonsten generische Elemente mithilfe von ARIA als Radiobuttons bereitgestellt. CSS und JavaScript ändern ihren ausgewählten beziehungsweise nicht ausgewählten Zustand visuell und programmatisch.

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

Um aus HTML-Elementen ohne entsprechende Semantik Radiobuttons zu machen, ist viel JavaScript erforderlich.

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

Wenn wir semantische HTML-Elemente verwendet und allen Radiobuttons einer Gruppe denselben Namen gegeben hätten, wäre weder JavaScript noch CSS nötig gewesen:

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

## Siehe auch

- [HTML-Radiobutton `<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
- [HTML-Attribut `tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
- [ARIA: Rolle `radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [ARIA: Rolle `checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [ARIA: Rolle `menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: Rolle `menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: Rolle `menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: Rolle `option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
