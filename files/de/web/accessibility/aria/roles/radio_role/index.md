---
title: "ARIA: radio-Rolle"
slug: Web/Accessibility/ARIA/Roles/radio_role
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{AccessibilitySidebar}}

Die `radio`-Rolle ist eine von mehreren auswählbaren Optionsfeldern in einer `radiogroup`, wobei nicht mehr als ein Optionsfeld gleichzeitig ausgewählt sein kann.

## Beschreibung

Ein Optionsfeld ist ein auswählbares Eingabefeld, das in Verbindung mit anderen Optionsfeldern verwendet wird, von denen jeweils nur eines gleichzeitig ausgewählt sein kann. Die Optionsfelder müssen in einer [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) gruppiert werden, um anzuzeigen, welche die gleiche Auswahl beeinflussen.

```html
<div role="radiogroup" aria-labelledby="legend25" id="radiogroup25">
  <p id="legend25">Ipsum und lorem?</p>
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
    <label id="q25_radio3-label">Was ist die Frage?</label>
  </div>
</div>
```

Das `role`-Attribut fügt nur Semantik hinzu; die gesamte Funktionalität, die nativ mit dem [HTML-Optionsfeld](/de/docs/Web/HTML/Element/input/radio) kommt, muss mit JavaScript und dem HTML-Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzugefügt werden.

> [!NOTE]
> Die erste Regel von ARIA ist: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das Verhalten bietet, verwenden Sie es anstelle der Umnutzung eines Elements und dem Hinzufügen von ARIA. Verwenden Sie stattdessen das native [HTML `<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) (mit einem zugehörigen {{HTMLElement('label')}}), das nativ alle erforderliche Funktionalität bietet:

```html
<fieldset>
  <legend>Ipsum und lorem?</legend>
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
    <label for="q25_radio3">Was ist die Frage?</label>
  </div>
</fieldset>
```

Das native HTML-Optionsfeld ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)) hat zwei Zustände ("ausgewählt" oder "nicht ausgewählt"). Ähnlich kann ein Element mit `role="radio"` zwei Zustände über das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) anzeigen: `true`, das den ausgewählten Zustand darstellt, und `false`, das den nicht ausgewählten Zustand darstellt. Der Wert `mixed` für `aria-checked` ist für ein Optionsfeld nicht zulässig.

Wenn ein Optionsfeld ausgewählt ist, hat das Radio-Element `aria-checked` auf `true` gesetzt. Wenn es nicht ausgewählt ist, hat es `aria-checked` auf `false`.

Jedes Optionsfeldelement hat die Rolle `radio`. Die Radio-Rolle sollte immer mit anderen zugehörigen Radios in einer `radiogroup` genestet sein. Wenn es nicht möglich ist, das Optionsfeld innerhalb einer Radiogruppe zu verschachteln, verwenden Sie die `id` des nicht gruppierten Radios in einer durch Leerzeichen getrennten Liste von Werten als Wert des Attributs [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) auf dem `radiogroup`-Element, um die Beziehung der `radiogroup` zu ihren Radio-Mitgliedern anzuzeigen.

Jedes Radio-Element wird durch seinen Inhalt beschriftet, hat ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder hat eine Beschriftung, die mit `aria-label` angegeben ist. Das umgebende `radiogroup`-Element sollte entweder ein sichtbares Label enthalten, das durch `aria-labelledby` referenziert wird, oder ein Label, das mit `aria-label` spezifiziert ist. Wenn Elemente vorhanden sind, die zusätzliche Informationen über die Radiogruppe oder jedes Optionsfeld bereitstellen, sollten diese durch die `radiogroup`-Elemente oder Radio-Elemente mit der Eigenschaft [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) referenziert werden.

Da `radio` ein interaktives Steuerungselement ist, muss es fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex), um dies zu ändern. Die erwartete Tastenkombination zur Aktivierung eines Radios ist die <kbd>Leertaste</kbd>. Verwenden Sie JavaScript, um das Attribut `aria-checked` auf `true` zu setzen, wenn ein Radio ausgewählt wird, und stellen Sie sicher, dass alle anderen Radio-Rollen in der Gruppe auf `aria-checked="false"` gesetzt werden.

Um programmatisch anzuzeigen, dass ein Optionsfeld aus einer Radiogruppe ausgewählt werden muss, muss das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) mit einem Wert von `true` auf dem `radiogroup`-Element angegeben werden. Es wird nicht erwartet, das `aria-required`-Attribut auf einzelnen ARIA-Radio-Buttons zu verwenden.

### Alle Nachkommen sind präsentationell

Es gibt einige Typen von Benutzeroberflächenkomponenten, die, wenn sie in eine plattformübergreifende Zugänglichkeits-API umgesetzt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `radio` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `radio`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `radio`-Element, das eine Überschrift enthält.

```html
<div role="radio"><h6>Name meines Radios</h6></div>
```

Da Nachkommen von `radio` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="radio"><h6 role="presentation">Name meines Radios</h6></div>
```

Aus der Sicht eines Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets im [Accessibility-Baum](/de/docs/Glossary/Accessibility_tree) gleichwertig sind mit folgendem:

```html
<div role="radio">Name meines Radios</div>
```

## Zugeteilte WAI-ARIA-Rollen, Zustände und Eigenschaften

- Rolle [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)

  - : Die Optionsfelder sind in einem Element mit der Rolle `radiogroup` enthalten oder werden von diesem zugewiesen. Wenn es nicht möglich ist, innerhalb der Markierung in einer `radiogroup` zu verschachteln, enthält das Attribut `aria-owns` der `radiogroup` die `id`-Werte der nicht verschachtelten Optionsfelder in der Gruppe.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

  - : Der Wert von `aria-checked` definiert den Zustand eines Radios. Wenn es mit Radio-Elementen verwendet wird, hat das Attribut einen von zwei möglichen Werten:

    - `true`
      - : Das Radio ist ausgewählt.
    - `false`
      - : Das Radio ist nicht ausgewählt.

> [!NOTE]
> Verwenden Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex), wenn die `role="radio"` auf einem Element verwendet wird, das nativ keinen Tastaturfokus akzeptiert. Z.B. ein `<div>` oder `<span>`.

## Tastaturinteraktionen

- <kbd>Tab</kbd> + <kbd>Shift</kbd>

  - : Bewegen Sie den Fokus in und aus der Radiogruppe. Wenn der Fokus in eine Radiogruppe verschoben wird und ein Optionsfeld bereits ausgewählt ist, wird der Fokus auf das ausgewählte Feld gesetzt. Wenn keines der Optionsfelder ausgewählt ist, wird der Fokus auf das erste Optionsfeld in der Gruppe gesetzt.

- <kbd>Leertaste</kbd>

  - : Wählt das Optionsfeld aus, wenn es nicht bereits ausgewählt ist. Hebt die Auswahl eines zuvor ausgewählten Optionsfelds in der Radiogruppe auf.

- <kbd>Pfeil nach rechts</kbd> und <kbd>Pfeil nach unten</kbd>

  - : Bewegen Sie den Fokus zum nächsten Optionsfeld in der Gruppe und wählen Sie es aus, wobei das zuvor fokussierte Optionsfeld abgewählt wird. Wenn der Fokus auf dem letzten Optionsfeld liegt, bewegt sich der Fokus auf das erste Optionsfeld.

- <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach oben</kbd>
  - : Bewegen Sie den Fokus zum vorherigen Optionsfeld in der Gruppe und wählen Sie es aus, wobei das zuvor fokussierte Optionsfeld abgewählt wird. Wenn der Fokus auf dem ersten Optionsfeld liegt, bewegt sich der Fokus auf das letzte Optionsfeld.

### Radios in einer Werkzeugleiste

Da Pfeiltasten zum Navigieren zwischen Elementen einer Werkzeugleiste verwendet werden und die <kbd>Tab</kbd>-Taste den Fokus in und aus einer Werkzeugleiste bewegt, ist die Tastaturinteraktion der Radiogruppe etwas anders, wenn sie sich in einer Werkzeugleiste befindet, im Vergleich zu einer Radiogruppe, die sich nicht in einer Werkzeugleiste befindet. Weitere Informationen finden Sie unter [Tastaturinteraktionen von `radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role#keyboard_interactions).

## Erforderliches JavaScript

- `onClick`
  - : Verwaltung von Mausklicks sowohl auf dem Radio als auch auf dem zugehörigen Label, die den Zustand des Radios ändern, indem sie den Wert des `aria-checked`-Attributs und das Erscheinungsbild des Radios ändern, sodass es für den sehenden Benutzer ausgewählt oder nicht ausgewählt erscheint.
- `onKeyPress`
  - : Behandlung des Falls, dass der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Radios zu ändern, indem der Wert des `aria-checked`-Attributs verändert wird und das Erscheinungsbild des Radios so geändert wird, dass es für den sehenden Benutzer ausgewählt oder nicht ausgewählt erscheint.

## Beispiele

Das folgende Beispiel verwendet ARIA, um ansonsten generische Elemente als Optionsfelder darzustellen. CSS und JavaScript werden verwendet, um den ausgewählten oder nicht ausgewählten Zustand des Elements visuell und programmatisch zu ändern.

### HTML

```html
<div role="radiogroup" aria-labelledby="legend" id="radiogroup">
  <p id="legend">
    Sollten Sie die <code>radio</code>-Rolle oder
    <code>&lt;input type="radio"></code> verwenden?
  </p>
  <div>
    <span
      role="radio"
      aria-checked="true"
      tabindex="0"
      aria-labelledby="ariaLabel"
      data-value="True"></span>
    <label id="ariaLabel">ARIA-Rolle</label>
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

for (let i = 0, groups = radioGroups.length; i < groups; i++) {
  const radios = radioGroups[i].querySelectorAll("[role=radio]");
  for (let j = 0, radiobuttons = radios.length; j < radios; j++) {
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

Kein JavaScript (oder sogar CSS) wäre nötig, wenn wir ein semantisches HTML-Element mit dem Namen jedes Optionsfelds in einer Gruppe von Optionsfeldern verwendet hätten:

```html
<fieldset>
  <legend>
    Sollten Sie die <code>radio</code>-Rolle oder
    <code>&lt;input type="radio"></code> verwenden?
  </legend>
  <div>
    <input type="radio" name="bestPractices" id="ariaLabel" value="True" />
    <label for="ariaLabel">ARIA-Rolle</label>
  </div>
  <div>
    <input type="radio" name="bestPractices" id="htmllabel" value="False" />
    <label for="htmllabel">HTML <code>&lt;input type="radio"></code></label>
  </div>
</fieldset>
```

## Beste Praktiken

Die erste Regel von ARIA ist: Wenn ein natives HTML-Element oder -Attribut die gewünschte Semantik und das gewünschte Verhalten bietet, verwenden Sie es anstelle der Umnutzung eines Elements und dem Hinzufügen einer ARIA-Rolle, -Zustand oder -Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, native [HTML-Optionsfeld](/de/docs/Web/HTML/Element/input/radio)-Formularsteuerelemente zu verwenden, anstatt die Funktionalität eines Radios mit JavaScript und ARIA zu rekonstruieren.

## Siehe auch

- [HTML `<input type="radio">` Optionsfeld](/de/docs/Web/HTML/Element/input/radio)
- [HTML `tabindex` Attribut](/de/docs/Web/HTML/Global_attributes/tabindex)
- [ARIA: `radiogroup` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [ARIA: `checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [ARIA: `menuitem` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
