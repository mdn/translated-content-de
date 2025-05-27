---
title: "ARIA: radio Rolle"
short-title: radio
slug: Web/Accessibility/ARIA/Reference/Roles/radio_role
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

Die `radio` Rolle ist eine von einer Gruppe von auswählbaren Optionsfeldern in einer `radiogroup`, bei der nicht mehr als ein einziges Optionsfeld gleichzeitig ausgewählt sein kann.

## Beschreibung

Ein Optionsfeld ist ein auswählbares Eingabeelement, das, wenn es mit anderen Optionsfeldern verbunden ist, nur eines davon gleichzeitig ausgewählt sein kann. Die Optionsfelder müssen in einer [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) gruppiert werden, um anzuzeigen, welche Werte dieselben beeinflussen.

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

Das `role`-Attribut fügt nur Semantik hinzu; alle Funktionen, die nativ mit dem [HTML-Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio) kommen, müssen mit JavaScript und dem HTML-Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzugefügt werden.

> [!NOTE]
> Die erste Regel von ARIA ist, wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten bietet, verwenden Sie es anstelle eines umfunktionierten Elements mit hinzugefügtem ARIA. Verwenden Sie stattdessen das native [HTML `<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) (mit einem zugehörigen {{HTMLElement('label')}}), das alle erforderlichen Funktionen nativ bereitstellt:

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

Das native HTML-Formularsteuerungs-Optionsfeld ([`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)) hat zwei Zustände ("ausgewählt" oder "nicht ausgewählt"). Ebenso kann ein Element mit `role="radio"` durch das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) zwei Zustände anzeigen: `true` für den ausgewählten Zustand und `false` für den nicht ausgewählten Zustand. Der `aria-checked`-Wert von `mixed` ist für ein Optionsfeld nicht zulässig.

Wenn ein Optionsfeld ausgewählt ist, hat das Radio-Element `aria-checked` auf `true` gesetzt. Wenn es nicht ausgewählt ist, hat es `aria-checked` auf `false` gesetzt.

Jedes Optionsfeldelement hat die Rolle `radio`. Die Radio-Rolle sollte immer mit anderen zugehörigen Radios in einer `radiogroup` verschachtelt werden. Wenn es nicht möglich ist, das Optionsfeld innerhalb einer Radiogruppe zu verschachteln, verwenden Sie die `id` des nicht gruppierten Radios in einer durch Leerzeichen getrennten Liste von Werten als Wert des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attributs auf dem `radiogroup` Element, um die Beziehung der `radiogroup` zu ihren Radiomitgliedern anzuzeigen.

Jedes Radioelement wird durch seinen Inhalt beschriftet, hat ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder hat ein mit `aria-label` angegebenes Label. Das enthaltene `radiogroup`-Element sollte entweder ein sichtbares Label haben, das durch `aria-labelledby` referenziert wird, oder ein mit `aria-label` angegebenes Label. Wenn Elemente, die zusätzliche Informationen entweder über die Radiogruppe oder jedes Optionsfeld bereitstellen, vorhanden sind, sollten diese Elemente durch die `radiogroup`-Elemente oder die Radioelemente mit der [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Eigenschaft referenziert werden.

Da `radio` ein interaktives Steuerelement ist, muss es fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren eines Radios ist die <kbd>Leertaste</kbd>. Verwenden Sie JavaScript, um das `aria-checked`-Attribut auf `true` zu setzen, wenn ein Radio ausgewählt wird, und stellen Sie sicher, dass alle anderen Radio-Rollen in der Gruppe auf `aria-checked="false"` gesetzt sind.

Um programmatisch anzugeben, dass ein Optionsfeld aus einer Radiogruppe ausgewählt werden muss, muss das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) mit dem Wert `true` auf dem `radiogroup`-Element angegeben werden. Es wird nicht erwartet, das `aria-required`-Attribut auf einzelnen ARIA-Optionsfeldern zu verwenden.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `radio` zu repräsentieren. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommen von `radio`-Elementen an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachten Sie das folgende `radio`-Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>name of my radio</h6></div>
```

Da Nachkommen von `radio` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

Aus der Perspektive der Benutzer von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} gleichwertig sind:

```html
<div role="radio">name of my radio</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) Rolle

  - : Die Optionsfelder sind in einem Element mit der Rolle `radiogroup` enthalten oder von diesem "besessen". Wenn es nicht möglich ist, sie innerhalb einer `radiogroup` in der Markup-Struktur zu verschachteln, enthält das `aria-owns`-Attribut der `radiogroup` die `id`-Werte der nicht verschachtelten Optionsfelder in der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand eines Optionsfeldes. Wenn es mit Radioelementen verwendet wird, hat das Attribut einen von zwei möglichen Werten:

    - `true`
      - : Das Optionsfeld ist ausgewählt.
    - `false`
      - : Das Optionsfeld ist nicht ausgewählt.

> [!NOTE]
> Verwenden Sie das [`tabindex`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), wenn `role="radio"` auf ein Element angewendet wird, das von Natur aus keine Tastaturfokussierung akzeptiert. Zum Beispiel ein `<div>` oder `<span>`.

### Tastaturinteraktionen

- <kbd>Tab</kbd> + <kbd>Umschalt</kbd>

  - : Bewegt den Fokus in die und aus der Radiogruppe. Wenn der Fokus in eine Radiogruppe geht und ein Optionsfeld bereits ausgewählt ist, wird der Fokus auf das ausgewählte Feld gesetzt. Wenn keines der Optionsfelder ausgewählt ist, wird der Fokus auf das erste Optionsfeld in der Gruppe gesetzt.

- <kbd>Leertaste</kbd>

  - : Aktiviert das Optionsfeld, wenn es nicht bereits ausgewählt ist. Deaktiviert ein zuvor ausgewähltes Optionsfeld in der Radiogruppe.

- <kbd>Pfeil nach rechts</kbd> und <kbd>Pfeil nach unten</kbd>

  - : Bewegt den Fokus zum nächsten Optionsfeld in der Gruppe und aktiviert es, während das zuvor fokussierte Optionsfeld deaktiviert wird. Wenn der Fokus auf dem letzten Optionsfeld ist, bewegt sich der Fokus zum ersten Optionsfeld.

- <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach oben</kbd>
  - : Bewegt den Fokus zum vorherigen Optionsfeld in der Gruppe und aktiviert es, während das zuvor fokussierte Optionsfeld deaktiviert wird. Wenn der Fokus auf dem ersten Optionsfeld ist, bewegt sich der Fokus zum letzten Optionsfeld.

### Radios in einer Werkzeugleiste

Da Pfeiltasten verwendet werden, um zwischen Elementen einer Werkzeugleiste zu navigieren und die <kbd>Tabulator</kbd>-Taste den Fokus in und aus einer Werkzeugleiste verschiebt, unterscheidet sich die Tastaturinteraktion der Radiogruppe geringfügig von der einer Radiogruppe, die nicht innerhalb einer Werkzeugleiste liegt. Siehe [`radiogroup`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role#keyboard_interactions) für weitere Informationen.

## Erforderliches JavaScript

- `onClick`
  - : Bearbeiten Sie Mausklicks sowohl auf dem Radio als auch auf dem zugehörigen Label, um den Zustand des Radios zu ändern, indem Sie den Wert des `aria-checked`-Attributs und das Erscheinungsbild des Radios so ändern, dass es für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyPress`
  - : Bearbeiten Sie den Fall, dass der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Radios zu ändern, indem Sie den Wert des `aria-checked`-Attributs und das Erscheinungsbild des Radios so ändern, dass es für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.

## Beispiele

Das folgende Beispiel verwendet ARIA, um ansonsten generische Elemente zu modifizieren, damit diese als Optionsfelder dargestellt werden. CSS und JavaScript werden verwendet, um den ausgewählten oder nicht ausgewählten Zustand des Elements visuell und programmatisch zu ändern.

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

Kein JavaScript (oder sogar CSS) wäre notwendig gewesen, wenn wir semantische HTML-Elemente verwendet hätten, wobei der Name jedes Optionsfeldes in einer Gruppe von Optionsfeldern derselbe ist:

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

Die erste Regel von ARIA ist: Wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das gewünschte Verhalten bietet, verwenden Sie es, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, native [HTML-Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio) Formularsteuerungen zu verwenden, anstatt die Funktionalität eines Radios mit JavaScript und ARIA neu zu erstellen.

## Siehe auch

- [HTML `<input type="radio">` Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio)
- [HTML `tabindex`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
- [ARIA: `radiogroup` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [ARIA: `checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
