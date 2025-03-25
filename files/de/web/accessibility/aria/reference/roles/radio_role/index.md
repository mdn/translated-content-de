---
title: "ARIA: radio-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/radio_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die `radio`-Rolle ist Teil einer Gruppe von auswählbaren Optionsfeldern in einer `radiogroup`, bei der nicht mehr als ein Optionsfeld gleichzeitig ausgewählt sein kann.

## Beschreibung

Ein Optionsfeld ist eine auswählbare Eingabe, die, wenn sie mit anderen Optionsfeldern verbunden ist, nur eines gleichzeitig ausgewählt haben kann. Die Optionsfelder müssen in einer [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) zusammengefasst werden, um anzuzeigen, welche Felder denselben Wert beeinflussen.

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

Das `role`-Attribut fügt nur Semantik hinzu; alle Funktionen, die nativ mit dem [HTML-Optionsfeld](/de/docs/Web/HTML/Element/input/radio) kommen, müssen mit JavaScript und dem HTML-Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzugefügt werden.

> [!NOTE]
> Die erste Regel von ARIA ist: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das Verhalten bereitstellt, dann verwenden Sie es anstelle davon, ein Element anders zu verwenden und ARIA hinzuzufügen. Verwenden Sie stattdessen das native [HTML `<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) (mit einem zugehörigen {{HTMLElement('label')}}), das alle erforderlichen Funktionen nativ bereitstellt:

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

Die nativen HTML-Optionsfeld-Steuerelemente ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)) haben zwei Zustände ("ausgewählt" oder "nicht ausgewählt"). Ebenso kann ein Element mit `role="radio"` zwei Zustände durch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut aufweisen: `true` für den ausgewählten Zustand und `false` für den nicht ausgewählten Zustand. Der `aria-checked`-Wert `mixed` ist für ein Optionsfeld nicht gültig.

Wenn ein Optionsfeld ausgewählt ist, hat das Radioelement `aria-checked` auf `true` gesetzt. Wenn es nicht ausgewählt ist, ist `aria-checked` auf `false` gesetzt.

Jedes Optionsfeldelement hat die Rolle `radio`. Die radio-Rolle sollte immer mit anderen zugehörigen Radios in einer `radiogroup` verschachtelt sein. Falls es nicht möglich ist, das Optionsfeld innerhalb einer Radiogruppe zu verschachteln, verwenden Sie die `id` des nicht gruppierten Radios in einer durch Leerzeichen getrennten Liste von Werten als Wert des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attributs auf dem `radiogroup`-Element, um die Beziehung der `radiogroup` zu ihren Radiomitgliedern anzuzeigen.

Jedes Radioelement wird durch seinen Inhalt beschriftet, hat ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder hat ein Label, das mit `aria-label` angegeben ist. Das enthaltene `radiogroup`-Element sollte entweder ein sichtbares Label haben, das durch `aria-labelledby` referenziert wird, oder ein Label, das mit `aria-label` angegeben ist. Wenn Elemente vorhanden sind, die zusätzliche Informationen über die Radiogruppe oder jedes Optionsfeld bereitstellen, sollten diese Elemente durch das `radiogroup`-Element oder die Radioelemente mit der [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Eigenschaft referenziert werden.

Da `radio` ein interaktives Steuerelement ist, muss es fokussierbar und über die Tastatur zugänglich sein. Falls die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Aktivieren eines Radios ist die <kbd>Leertaste</kbd>. Verwenden Sie JavaScript, um das `aria-checked`-Attribut auf `true` zu setzen, wenn ein Radio ausgewählt wird, und stellen Sie sicher, dass alle anderen Radio-Rollen in der Gruppe auf `aria-checked="false"` gesetzt sind.

Um programmgesteuert anzugeben, dass ein Optionsfeld aus einer Radiogruppe ausgewählt werden muss, muss das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut mit dem Wert `true` auf dem `radiogroup`-Element angegeben werden. Es wird nicht erwartet, das `aria-required`-Attribut auf individuellen ARIA-Optionsfeldern zu verwenden.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `radio` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `radio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie folgendes `radio`-Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>name of my radio</h6></div>
```

Da die Nachkommen von `radio` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

Aus der Sicht eines Nutzers von Unterstützungstechnologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="radio">name of my radio</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)-Rolle

  - : Die Optionsfelder sind in einem Element mit der Rolle `radiogroup` enthalten oder werden von ihm besessen. Falls es nicht möglich ist, innerhalb einer `radiogroup` im Markup zu verschachteln, enthält das `aria-owns`-Attribut der `radiogroup` die `id`-Werte der nicht verschachtelten Optionsfelder in der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand eines Radios. Wenn es mit Radioelementen verwendet wird, hat das Attribut einen von zwei möglichen Werten:

    - `true`
      - : Das Radio ist ausgewählt.
    - `false`
      - : Das Radio ist nicht ausgewählt.

> [!NOTE]
> Verwenden Sie das [`tabindex`-Attribut](/de/docs/Web/HTML/Global_attributes/tabindex), wenn die `role="radio"` auf ein Element angewendet wird, das nicht nativ Tastaturfokus akzeptiert, z.B. ein `<div>` oder `<span>`.

### Tastaturinteraktionen

- <kbd>Tab</kbd> + <kbd>Shift</kbd>

  - : Bewegen Sie den Fokus in die Radiogruppe und aus ihr heraus. Wenn der Fokus in eine Radiogruppe verschoben wird und ein Optionsfeld bereits ausgewählt ist, wird der Fokus auf das ausgewählte Feld gesetzt. Wenn keines der Optionsfelder ausgewählt ist, wird der Fokus auf das erste Optionsfeld in der Gruppe gesetzt.

- <kbd>Leertaste</kbd>

  - : Wählt das Radio aus, falls es noch nicht ausgewählt ist. Hebt die Auswahl eines zuvor ausgewählten Radios in der Radiogruppe auf.

- <kbd>S-rechte Pfeiltaste</kbd> und <kbd>Nach-unten-Pfeiltaste</kbd>

  - : Verschieben Sie den Fokus auf und wählen Sie das nächste Optionsfeld in der Gruppe aus und heben Sie die Auswahl des zuvor fokussierten Optionsfelds auf. Wenn der Fokus auf dem letzten Optionsfeld liegt, bewegt sich der Fokus auf das erste Optionsfeld.

- <kbd>Linke Pfeiltaste</kbd> und <kbd>Nach-oben-Pfeiltaste</kbd>
  - : Verschieben Sie den Fokus auf und wählen Sie das vorherige Optionsfeld in der Gruppe aus und heben Sie die Auswahl des zuvor fokussierten Optionsfelds auf. Wenn der Fokus auf dem ersten Optionsfeld liegt, bewegt sich der Fokus auf das letzte Optionsfeld.

### Radios in einer Symbolleiste

Da die Pfeiltasten verwendet werden, um zwischen Elementen einer Symbolleiste zu navigieren, und die <kbd>Tabulatortaste</kbd> den Fokus in und aus einer Symbolleiste bewegt, unterscheidet sich die Tastaturinteraktion der Radiogruppe etwas von der einer Radiogruppe, die sich nicht in einer Symbolleiste befindet, wenn sie in einer Symbolleiste verschachtelt ist. Weitere Informationen finden Sie in den [`radiogroup`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role#keyboard_interactions).

## Erforderliches JavaScript

- `onClick`
  - : Handhaben Sie Mausklicks auf das Radio und das zugehörige Label, um den Zustand des Radios durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild des Radios zu ändern, sodass es als ausgewählt oder nicht ausgewählt für sehende Benutzer erscheint.
- `onKeyPress`
  - : Handhaben Sie den Fall, dass der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Radios durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild des Radios zu ändern, sodass es als ausgewählt oder nicht ausgewählt für sehende Benutzer erscheint.

## Beispiele

Das folgende Beispiel verwendet ARIA, um ansonsten generische Elemente so zu modifizieren, dass sie als Optionsfelder dargestellt werden. CSS und JavaScript werden verwendet, um den ausgewählten oder nicht ausgewählten Zustand des Elements visuell und programmatisch zu modifizieren.

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

Kein JavaScript (oder sogar CSS) wäre erforderlich gewesen, wenn wir ein semantisches HTML-Element mit dem Namen jedes Optionsfelds in einer Gruppe von Optionsfeldern verwendet hätten, die denselben Namen haben:

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

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das Verhalten bereitstellt, verwenden Sie es anstelle davon, ein Element zu zweckentfremden und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, native [HTML-Optionsfeld](/de/docs/Web/HTML/Element/input/radio)-Formularsteuerungen zu verwenden, anstatt die Funktionalität eines Radios mit JavaScript und ARIA neu zu erstellen.

## Siehe auch

- [HTML `<input type="radio">` Optionsfeld](/de/docs/Web/HTML/Element/input/radio)
- [HTML `tabindex`-Attribut](/de/docs/Web/HTML/Global_attributes/tabindex)
- [ARIA: `radiogroup`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [ARIA: `checkbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [ARIA: `menuitem`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemradio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `menuitemradio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `option`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
