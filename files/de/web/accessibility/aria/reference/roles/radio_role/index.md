---
title: "ARIA: radio Rolle"
short-title: radio
slug: Web/Accessibility/ARIA/Reference/Roles/radio_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `radio` Rolle ist eine von einer Gruppe von auswählbaren Optionsfeldern in einer `radiogroup`, bei denen nicht mehr als ein Optionsfeld gleichzeitig aktiviert sein kann.

## Beschreibung

Ein Optionsfeld ist ein auswählbares Eingabeelement, das in Verbindung mit anderen Optionsfeldern steht, von denen nur eines gleichzeitig aktiviert sein kann. Die Optionsfelder müssen in einer [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) gruppiert werden, um anzugeben, welche Ergebnisse derselben Wert beeinflussen.

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
> Die erste Regel von ARIA ist, wenn ein natives HTML-Element oder Attribut die benötigten Semantiken und Verhaltensweisen bietet, verwenden Sie es, anstatt ein Element umzufunktionieren und ARIA hinzuzufügen. Verwenden Sie stattdessen das native [HTML `<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) (mit einem zugehörigen {{HTMLElement('label')}}), das von Haus aus alle nötigen Funktionen bietet:

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

Das native HTML-Optionsfeld-Steuerelement ([`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)) hat zwei Zustände ("aktiviert" oder "nicht aktiviert"). Ähnlich kann ein Element mit `role="radio"` zwei Zustände durch das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut anzeigen: `true` repräsentiert den aktivierten Zustand, und `false` repräsentiert den deaktivierten Zustand. Der `aria-checked` Wert "mixed" ist für ein Optionsfeld nicht gültig.

Wenn ein Optionsfeld aktiviert ist, hat das Radio-Element `aria-checked` auf `true` gesetzt. Wenn es nicht aktiviert ist, ist `aria-checked` auf `false` gesetzt.

Jedes Optionsfeld-Element hat die Rolle `radio`. Die Radio-Rolle sollte immer zusammen mit anderen zugeordneten Radios in einer `radiogroup` verschachtelt sein. Wenn es nicht möglich ist, das Optionsfeld innerhalb einer Radio-Gruppe zu verschachteln, verwenden Sie die `id` des nicht gruppierten Radios in einer durch Leerzeichen getrennten Liste von Werten als Wert des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attributs auf dem `radiogroup` Element, um die Beziehung der `radiogroup` zu ihren Radio-Mitgliedern zu kennzeichnen.

Jedes Radio-Element ist durch seinen Inhalt beschriftet, hat ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder hat ein Label, das mit `aria-label` spezifiziert ist. Das enthaltene `radiogroup` Element sollte entweder ein sichtbares Label haben, das durch `aria-labelledby` referenziert wird, oder ein Label, das mit `aria-label` spezifiziert ist. Wenn Elemente vorhanden sind, die zusätzliche Informationen über die Radio-Gruppe oder jedes Optionsfeld bereitstellen, sollten diese Elemente vom `radiogroup` Element oder von den Radio-Elementen mit der [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Eigenschaft referenziert werden.

Da `radio` ein interaktives Steuerelement ist, muss es fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht-fokussierbares Element angewendet wird, verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut, um dies zu ändern. Die erwartete Tastenkombination zur Aktivierung eines Radios ist die <kbd>Space</kbd> Taste. Verwenden Sie JavaScript, um das `aria-checked` Attribut auf `true` zu setzen, wenn ein Radio aktiviert wird, während sichergestellt wird, dass alle anderen Radio-Rollen in der Gruppe auf `aria-checked="false"` gesetzt sind.

Um programmatisch anzugeben, dass in einer Radio-Gruppe ein Optionsfeld ausgewählt werden muss, muss das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut mit einem Wert von `true` auf dem `radiogroup` Element angegeben werden. Es ist nicht vorgesehen, das `aria-required` Attribut auf individuellen ARIA-Optionsfeldern zu verwenden.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt sind, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einem `radio` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `radio` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `radio` Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>name of my radio</h6></div>
```

Da Nachkommen von `radio` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

Aus der Sicht des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="radio">name of my radio</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) Rolle

  - : Die Optionsfelder sind in einem Element mit der Rolle `radiogroup` enthalten oder gehören zu diesem. Wenn sie nicht innerhalb einer `radiogroup` in der Markupstruktur verschachtelt werden können, enthält das `aria-owns` Attribut der `radiogroup` die `id` Werte der nicht verschachtelten Optionsfelder in der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Der Wert von `aria-checked` definiert den Zustand eines Radios. Bei Verwendung mit Radio-Elementen hat das Attribut einen von zwei möglichen Werten:
    - `true`
      - : Das Radio ist aktiviert.
    - `false`
      - : Das Radio ist nicht aktiviert.

> [!NOTE]
> Verwenden Sie das [`tabindex` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), wenn `role="radio"` auf ein Element angewendet wird, das nicht nativ die Tastaturfokussierung akzeptiert. Zum Beispiel ein `<div>` oder `<span>`.

### Tastaturinteraktionen

- <kbd>Tab</kbd> + <kbd>Shift</kbd>

  - : Verschieben Sie den Fokus in und aus der Radio-Gruppe. Wenn der Fokus in eine Radio-Gruppe verschoben wird, und ein Optionsfeld bereits aktiviert ist, wird der Fokus auf das aktivierte Feld gesetzt. Falls keines der Optionsfelder aktiviert ist, wird der Fokus auf das erste Optionsfeld in der Gruppe gesetzt.

- <kbd>Space</kbd>

  - : Aktiviert das Optionsfeld, wenn es nicht bereits aktiviert ist. Deaktiviert ein zuvor aktiviertes Optionsfeld in der Radio-Gruppe.

- <kbd>Rechte Pfeiltaste</kbd> und <kbd>Untere Pfeiltaste</kbd>

  - : Verschieben Sie den Fokus auf und aktivieren Sie das nächste Optionsfeld in der Gruppe, während Sie das zuvor fokussierte Optionsfeld deaktivieren. Befindet sich der Fokus auf dem letzten Optionsfeld, wird der Fokus auf das erste Optionsfeld verschoben.

- <kbd>Linke Pfeiltaste</kbd> und <kbd>Obere Pfeiltaste</kbd>
  - : Verschieben Sie den Fokus auf und aktivieren Sie das vorherige Optionsfeld in der Gruppe, während Sie das zuvor fokussierte Optionsfeld deaktivieren. Befindet sich der Fokus auf dem ersten Optionsfeld, wird der Fokus auf das letzte Optionsfeld verschoben.

### Radios in einer Werkzeugleiste

Da Pfeiltasten zur Navigation zwischen Elementen einer Werkzeugleiste verwendet werden und die <kbd>Tab</kbd>-Taste den Fokus in und aus einer Werkzeugleiste verschiebt, ist die Tastaturinteraktion der Radio-Gruppe unterschiedlich, wenn eine Radio-Gruppe innerhalb einer Werkzeugleiste verschachtelt ist. Siehe [`radiogroup` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role#keyboard_interactions) für weitere Informationen.

## Erforderliches JavaScript

- `onClick`
  - : Bearbeiten Sie Mausklicks auf sowohl das Radio als auch das zugehörige Label, das den Zustand des Radios durch Ändern des Werts des `aria-checked` Attributs und das Aussehen des Radios ändern wird, sodass es für den sehenden Benutzer aktiviert oder nicht aktiviert erscheint.
- `onKeyPress`
  - : Behandeln Sie den Fall, in dem der Benutzer die <kbd>Space</kbd> Taste drückt, um den Zustand des Radios durch Ändern des Werts des `aria-checked` Attributs und das Aussehen des Radios ändern wird, sodass es für den sehenden Benutzer aktiviert oder nicht aktiviert erscheint.

## Beispiele

Das folgende Beispiel verwendet ARIA, um sonst generische Elemente so zu modifizieren, dass sie als Optionsfelder angezeigt werden. CSS und JavaScript werden verwendet, um den aktivierten oder deaktivierten Zustand des Elements visuell und programmatisch zu ändern.

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

Es wird eine Menge JavaScript benötigt, um aus nicht-semantischem HTML Optionsfelder zu machen.

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

Kein JavaScript (oder sogar CSS) wäre notwendig gewesen, hätten wir ein semantisches HTML-Element mit dem Namen jedes Optionsfelds in einer Gruppe von Optionsfeldern verwendet, die dasselbe sind:

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

## Best Practices

Die erste Regel von ARIA ist: Wenn ein natives HTML-Element oder Attribut die Semantiken und Verhaltensweisen bietet, die Sie benötigen, verwenden Sie es anstatt ein Element umzufunktionieren und eine ARIA-Rolle, -Eigenschaft oder -Attribut hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, native [HTML-Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio) Formularelemente zu verwenden, anstatt die Funktionalität eines Radios mit JavaScript und ARIA nachzubilden.

## Siehe auch

- [HTML `<input type="radio">` Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio)
- [HTML `tabindex` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
- [ARIA: `radiogroup` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [ARIA: `checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
