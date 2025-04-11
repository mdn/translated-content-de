---
title: "ARIA: radio-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/radio_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `radio`-Rolle ist eine von einer Gruppe ankreuzbarer Optionsfelder in einer `radiogroup`, bei denen nicht mehr als ein Optionsfeld gleichzeitig angekreuzt sein kann.

## Beschreibung

Ein Optionsfeld ist eine anklickbare Eingabe, die, wenn sie mit anderen Optionsfeldern verbunden ist, nur eines davon gleichzeitig angekreuzt werden kann. Die Optionsfelder müssen in einer [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) gruppiert werden, um zu kennzeichnen, welche das gleiche Wert beeinflussen.

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

Das `role`-Attribut fügt nur Semantik hinzu; die gesamte Funktionalität, die nativ mit den [HTML-Optionsfeldern](/de/docs/Web/HTML/Reference/Elements/input/radio) kommt, muss mit JavaScript und dem HTML-Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzugefügt werden.

> [!NOTE]
> Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten bietet, verwenden Sie es anstelle eines umgewidmeten Elements und dem Hinzufügen von ARIA. Verwenden Sie stattdessen das native [HTML `<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) (mit einem zugeordneten {{HTMLElement('label')}}), das nativ alle erforderlichen Funktionalitäten bereitstellt:

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

Das native HTML-Formularsteuerungs-Optionsfeld ([`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)) hat zwei Zustände ("ausgewählt" oder "nicht ausgewählt"). Ähnlich kann ein Element mit `role="radio"` zwei Zustände über das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut darstellen: `true` für den ausgewählten Zustand und `false` für den nicht ausgewählten Zustand. Der `aria-checked`-Wert `mixed` ist nicht gültig für ein Optionsfeld.

Wenn ein Optionsfeld ausgewählt ist, hat das Radioelement `aria-checked` auf `true` eingestellt. Wenn es nicht ausgewählt ist, hat es `aria-checked` auf `false` eingestellt.

Jedes Optionsfeldelement hat die Rolle `radio`. Die Radio-Rolle sollte immer mit anderen assoziierten Radios in einer `radiogroup` verschachtelt sein. Wenn es nicht möglich ist, das Optionsfeld innerhalb einer Radiogruppe zu verschachteln, verwenden Sie die `id` des nicht gruppierten Radios in einer durch Leerzeichen getrennten Werteliste als den Wert des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attributs des `radiogroup`-Elements, um die Beziehung der `radiogroup` zu ihren Radiomitgliedern anzuzeigen.

Jedes Radioelement ist durch seinen Inhalt gekennzeichnet, hat eine sichtbare Bezeichnung, die durch `aria-labelledby` referenziert wird, oder hat eine Bezeichnung, die mit `aria-label` spezifiziert ist. Das enthaltene `radiogroup`-Element sollte entweder eine sichtbare Bezeichnung haben, die durch `aria-labelledby` referenziert wird, oder eine Bezeichnung, die mit `aria-label` spezifiziert ist. Wenn Elemente vorhanden sind, die zusätzliche Informationen über die Radiogruppe oder jedes Optionsfeld bieten, sollten diese Elemente durch die `radiogroup` oder Radioelemente mit der [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Eigenschaft referenziert werden.

Da `radio` ein interaktives Steuerungselement ist, muss es fokussierbar und per Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, um dies zu ändern. Das erwartete Tastaturkürzel zur Aktivierung eines Optionsfelds ist die <kbd>Leertaste</kbd>. Verwenden Sie JavaScript, um das `aria-checked`-Attribut auf `true` zu setzen, wenn ein Radio ausgewählt wird, während sichergestellt wird, dass alle anderen Radio-Rollen in der Gruppe auf `aria-checked="false"` gesetzt sind.

Um programmatisch anzugeben, dass aus einer Radiogruppe ein Optionsfeld gewählt werden muss, muss das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut mit einem Wert von `true` auf dem `radiogroup`-Element angegeben werden. Es wird nicht erwartet, das `aria-required`-Attribut auf einzelnen ARIA-Optionsfeldern zu verwenden.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API repräsentiert werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `radio` darzustellen. Um mit dieser Einschränkung umzugehen, wendet der Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle untergeordneten Elemente eines `radio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachten Sie das folgende `radio`-Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>name of my radio</h6></div>
```

Da Nachkommen von `radio` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

Aus der Perspektive des Benutzers assistiver Technologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte gleichwertig mit dem folgenden im {{Glossary("Accessibility_tree", "Accessibilty-Baum")}} sind:

```html
<div role="radio">name of my radio</div>
```

### Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) Rolle

  - : Die Optionsfelder sind in oder von einem Element mit der Rolle `radiogroup` enthalten oder werden von diesem besessen. Wenn es nicht möglich ist, sie innerhalb einer `radiogroup` im Markup zu verschachteln, enthält das `aria-owns`-Attribut der `radiogroup` die `id`-Werte der nicht verschachtelten Optionsfelder in der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand eines Radios. Wenn es mit Radioelementen verwendet wird, hat das Attribut einen von zwei möglichen Werten:

    - `true`
      - : Das Radio ist ausgewählt.
    - `false`
      - : Das Radio ist nicht ausgewählt.

> [!NOTE]
> Verwenden Sie das [`tabindex`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), wenn `role="radio"` auf einem Element verwendet wird, das nicht nativ Tastaturfokus akzeptiert. Z.B. ein `<div>` oder `<span>`.

### Tastaturinteraktionen

- <kbd>Tab</kbd> + <kbd>Shift</kbd>

  - : Bewegen Sie den Fokus in und aus der Radiogruppe. Wenn der Fokus in eine Radiogruppe bewegt wird und ein Optionsfeld bereits ausgewählt ist, wird der Fokus auf das ausgewählte Feld gesetzt. Wenn keines der Optionsfelder ausgewählt ist, wird der Fokus auf das erste Optionsfeld in der Gruppe gesetzt.

- <kbd>Leertaste</kbd>

  - : Markiert das Radio, wenn es noch nicht ausgewählt ist. Hebt die Auswahl eines zuvor ausgewählten Optionsfelds in der Radiogruppe auf.

- <kbd>Pfeil-rechts</kbd> und <kbd>Pfeil-runter</kbd>

  - : Verschiebt den Fokus und markiert das nächste Optionsfeld in der Gruppe, hebt die Markierung des zuvor fokussierten Optionsfelds auf. Wenn der Fokus auf dem letzten Optionsfeld liegt, wird der Fokus auf das erste Optionsfeld verschoben.

- <kbd>Pfeil-links</kbd> und <kbd>Pfeil-hoch</kbd>
  - : Verschiebt den Fokus und markiert das vorherige Optionsfeld in der Gruppe, hebt die Markierung des zuvor fokussierten Optionsfelds auf. Wenn der Fokus auf dem ersten Optionsfeld liegt, wird der Fokus auf das letzte Optionsfeld verschoben.

### Radios in einer Symbolleiste

Da Pfeiltasten verwendet werden, um sich zwischen Elementen einer Symbolleiste zu bewegen und die <kbd>Tab</kbd>-Taste den Fokus in und aus einer Symbolleiste verschiebt, unterscheidet sich die Tastaturinteraktion der Radiogruppe etwas von der einer Radiogruppe, die sich nicht innerhalb einer Symbolleiste befindet, wenn eine Radiogruppe in einer Symbolleiste verschachtelt ist. Weitere Informationen finden Sie unter [Tastaturinteraktionen für `radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role#keyboard_interactions).

## Erforderliches JavaScript

- `onClick`
  - : Behandelt Mausklicks auf sowohl das Radio als auch das zugehörige Label, die den Zustand des Radios durch Änderung des `aria-checked`-Attributwerts und das Erscheinungsbild des Radios ändern, sodass es für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyPress`
  - : Behandelt den Fall, dass der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Radios zu ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild des Radios geändert werden, sodass es für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.

## Beispiele

Das folgende Beispiel verwendet ARIA, um ansonsten generische Elemente so zu modifizieren, dass sie als Optionsfelder dargestellt werden. CSS und JavaScript werden verwendet, um den Ein- oder Ausgewählt-Status des Elements visuell und programmatisch zu modifizieren.

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

Eine Menge JavaScript ist erforderlich, um aus nicht-semantischem HTML Optionsfelder zu erstellen.

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

Kein JavaScript (oder sogar CSS) wäre nötig gewesen, hätten wir semantische HTML-Elemente mit dem Namen jedes Optionsfelds in einer Gruppe von Optionsfeldern, die gleich sind, verwendet:

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

Die erste Regel von ARIA ist: Wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten bietet, verwenden Sie es anstelle eines umgewidmeten Elements und fügen Sie nicht eine ARIA-Rolle, einen Zustand oder ein Attribut hinzu, um es zugänglich zu machen. Daher wird empfohlen, native [HTML-Optionsfeld-Formularsteuerungen](/de/docs/Web/HTML/Reference/Elements/input/radio) zu verwenden, anstatt die Funktion eines Radios mit JavaScript und ARIA zu rekonstruieren.

## Siehe auch

- [HTML `<input type="radio">` Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio)
- [HTML `tabindex`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
- [ARIA: `radiogroup`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [ARIA: `checkbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [ARIA: `menuitem`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemradio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `menuitemradio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `option`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
