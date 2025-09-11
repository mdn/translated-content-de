---
title: "ARIA: tab-Rolle"
short-title: tab
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

Die ARIA `tab`-Rolle kennzeichnet ein interaktives Element innerhalb einer `tablist`, das beim Aktivieren sein zugeordnetes `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der `tab`-Rolle steuert die Sichtbarkeit eines zugeordneten Elements mit der [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)-Rolle. Das übliche Benutzererfahrungsmuster besteht aus einer Gruppe visueller Tabs über oder neben einem Inhaltsbereich, und das Auswählen eines anderen Tabs ändert den Inhalt und macht den ausgewählten Tab prominenter als die anderen Tabs.

Elemente mit der Rolle `tab` _müssen_ entweder ein Kind eines Elements mit der `tablist`-Rolle sein oder ihre `id` muss Teil der [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Eigenschaft einer `tablist` sein. Diese Kombination kennzeichnet für Hilfstechnologien, dass das Element Teil einer Gruppe verwandter Elemente ist. Einige Hilfstechnologien geben eine Zählung der Anzahl der `tab`-Rollen-Elemente innerhalb einer `tablist` an und informieren die Benutzer darüber, welchen `tab` sie derzeit fokussiert haben. Darüber hinaus _sollte_ ein Element mit der `tab`-Rolle die [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Eigenschaft enthalten, die ein entsprechendes `tabpanel` (das die `tabpanel`-Rolle hat) anhand der `id` dieses Elements identifiziert. Wenn ein Element mit der `tabpanel`-Rolle den Fokus hat oder ein Kind davon den Fokus hat, zeigt dies an, dass das verbundene Element mit der `tab`-Rolle der aktive Tab in einer `tablist` ist.

Wenn Elemente mit der `tab`-Rolle ausgewählt oder aktiv sind, sollten sie das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut auf `true` gesetzt haben. Andernfalls sollte ihr `aria-selected`-Attribut auf `false` gesetzt werden. Wenn eine einfach auswählbare `tablist` ausgewählt oder aktiv ist, sollte das `hidden`-Attribut der anderen Tabpanels auf true gesetzt werden, bis der Benutzer den mit diesem Tabpanel verbundenen Tab auswählt. Wenn eine mehrfach auswählbare `tablist` ausgewählt oder aktiv ist, sollte ihr entsprechendes kontrolliertes `tabpanel` ihr [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attribut auf `true` und ihr `hidden`-Attribut auf `false` gesetzt haben, andernfalls das Gegenteil.

### Alle Nachfahren sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `tab` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente eines beliebigen `tab`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `tab`-Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachfahren von `tab` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Perspektive des Benutzers von Hilfstechnologien existiert die Überschrift nicht, da die vorherigen Code-Schnipsel dem folgenden im [Zugriffstree](/de/docs/Glossary/Accessibility_tree) entsprechen:

```html
<div role="tab">Title of my tab</div>
```

### Zugehörige Rollen und Attribute

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : boolean
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : `id` des Elements mit der `tabpanel`-Rolle
- [id](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Inhalt

### Tastaturinteraktionen

| Taste             | Aktion                                                                                                                                                                                                                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>    | Wenn der Fokus außerhalb der `tablist` liegt, wird der Fokus auf den aktiven Tab verschoben. Wenn der Fokus auf dem aktiven Tab liegt, wird der Fokus auf das nächste Element in der Tastaturfokusreihenfolge verschoben, idealerweise das zugehörige `tabpanel`. |
| <kbd>→</kbd>      | Fokussiert und optional aktiviert den nächsten Tab in der Tabliste. Wenn der aktuelle Tab der letzte Tab in der Tabliste ist, aktiviert er den ersten Tab.                                                                                                        |
| <kbd>←</kbd>      | Fokussiert und optional aktiviert den vorherigen Tab in der Tabliste. Wenn der aktuelle Tab der erste Tab in der Tabliste ist, aktiviert er den letzten Tab.                                                                                                      |
| <kbd>Delete</kbd> | Entfernt, wenn erlaubt, den derzeit ausgewählten Tab aus der Tabliste.                                                                                                                                                                                            |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Obwohl es Möglichkeiten gibt, Tab-ähnliche Funktionalitäten ohne JavaScript zu erstellen, gibt es keine Ersatzkombination, die nur HTML und CSS verwendet, die das gleiche Set von Funktionalitäten bietet, das oben für zugängliche Tabs mit Inhalten erforderlich ist.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit `tabpanel`, um eine interaktive Gruppe von Registerkarteninhalten zu erstellen. Hier umschließen wir unsere Inhaltsgruppe in einem `div`, wobei unsere `tablist` ein `aria-label` hat, das sie für Hilfstechnologien kennzeichnet. Jeder `tab` ist ein `button` mit den zuvor erwähnten Attributen. Der erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` angewendet. Diese zwei Attribute müssen immer so koordiniert werden - wenn ein anderer Tab ausgewählt wird, wird er dann `tabindex="0"` und `aria-selected="true"` angewendet haben. Alle nicht ausgewählten Tabs müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel`-Elemente haben `tabindex="0"`, um sie fokussierbar zu machen, und alle außer dem derzeit aktiven haben das `hidden`-Attribut. Das `hidden`-Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird. Es gibt einige grundlegende Stileinstellungen, die die Schaltflächen umstylen und den [`z-index`](/de/docs/Web/CSS/z-index) der `tab`-Elemente verändern, um die Illusion zu geben, dass sie mit den aktiven Elementen verbunden sind, und die Illusion, dass inaktive Elemente hinter dem aktiven `tabpanel` sind.

```html
<div class="tabs">
  <div role="tablist" aria-label="Sample Tabs">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      First Tab
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      Second Tab
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      Third Tab
    </button>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Content for the first panel</p>
  </div>
  <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
    <p>Content for the second panel</p>
  </div>
  <div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
    <p>Content for the third panel</p>
  </div>
</div>
```

```css hidden
.tabs {
  padding: 1em;
}

[role="tablist"] {
  margin-bottom: -1px;
}

[role="tab"] {
  position: relative;
  z-index: 1;
  background: white;
  border-radius: 5px 5px 0 0;
  border: 1px solid grey;
  border-bottom: 0;
  padding: 0.2em;
}

[role="tab"][aria-selected="true"] {
  z-index: 3;
}

[role="tabpanel"] {
  position: relative;
  padding: 0 0.5em 0.5em 0.7em;
  border: 1px solid grey;
  border-radius: 0 0 5px 5px;
  background: white;
  z-index: 2;
}

[role="tabpanel"]:focus {
  border-color: orange;
  outline: 1px solid orange;
}
```

Es gibt zwei Dinge, die wir mit JavaScript tun müssen: Wir müssen den Fokus und den Tabindex unserer `tab`-Elemente mit den Rechts- und Linkstasten ändern, und wir müssen den aktiven `tab` und `tabpanel` ändern, wenn wir auf einen `tab` klicken.

Um das erste zu erreichen, lauschen wir dem [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis auf der `tablist`. Wenn die [`key`](/de/docs/Web/API/KeyboardEvent/key) des Ereignisses `ArrowRight` oder `ArrowLeft` ist, reagieren wir auf das Ereignis. Wir setzen zunächst den `tabindex` des aktuellen `tab`-Elements auf -1, um es nicht mehr fokussierbar zu machen. Dann, wenn die rechte Pfeiltaste gedrückt wird, erhöhen wir unseren Tab-Fokuszähler um eins. Wenn der Zähler größer ist als die Anzahl der `tab`-Elemente, die wir haben, kehren wir zum ersten Tab zurück, indem wir diesen Zähler auf 0 setzen. Wenn die linke Pfeiltaste gedrückt wird, verringern wir unseren Tab-Fokuszähler um eins, und wenn er dann kleiner als 0 ist, setzen wir ihn auf die Anzahl der `tab`-Elemente minus eins (um zum letzten Element zu gelangen). Schließlich setzen wir den `focus` auf das `tab`-Element, dessen Index dem Tab-Fokuszähler entspricht, und setzen seinen `tabindex` auf 0, um es fokussierbar zu machen.

Um das Wechseln des aktiven `tab` und `tabpanel` zu behandeln, haben wir eine Funktion, die das Ereignis aufnimmt, das Element, das das Ereignis ausgelöst hat, das übergeordnete Element des auslösenden Elements und das übergeordnete Elemente dessen. Wir finden dann alle Tabs mit `aria-selected="true"` innerhalb des übergeordneten Elements, setzen sie auf `false` und setzen das `aria-selected` des auslösenden Elements auf `true`. Danach finden wir alle `tabpanel`-Elemente im übergeordneten Element, machen sie alle `hidden` und wählen schließlich das Element aus, dessen `id` dem `aria-controls` des auslösenden `tab`s entspricht, und entfernen das `hidden`-Attribut, wodurch es sichtbar wird.

```js
// Only handle one particular tablist; if you have multiple tab
// lists (might even be nested), you have to apply this code for each one
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll(':scope > [role="tab"]');

// Add a click event handler to each tab
tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabs);
});

// Enable arrow navigation between tabs in the tab list
let tabFocus = 0;

tabList.addEventListener("keydown", (e) => {
  // Move right
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    tabs[tabFocus].setAttribute("tabindex", -1);
    if (e.key === "ArrowRight") {
      tabFocus++;
      // If we're at the end, go to the start
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
      // Move left
    } else if (e.key === "ArrowLeft") {
      tabFocus--;
      // If we're at the start, move to the end
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
  }
});

function changeTabs(e) {
  const targetTab = e.target;
  const tabList = targetTab.parentNode;
  const tabGroup = tabList.parentNode;

  // Remove all current selected tabs
  tabList
    .querySelectorAll(':scope > [aria-selected="true"]')
    .forEach((t) => t.setAttribute("aria-selected", false));

  // Set this tab as selected
  targetTab.setAttribute("aria-selected", true);

  // Hide all tab panels
  tabGroup
    .querySelectorAll(':scope > [role="tabpanel"]')
    .forEach((p) => p.setAttribute("hidden", true));

  // Show the selected panel
  tabGroup
    .querySelector(`#${targetTab.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}
```

{{EmbedLiveSample("Beispiel", 600, 130)}}

## Beste Praktiken

Es wird empfohlen, ein {{HTMLElement('button')}}-Element mit der Rolle `tab` zu verwenden, da diese eingebaute funktionale und zugängliche Eigenschaften haben, im Gegensatz dazu, dass Sie sie selbst hinzufügen müssen. Um die Tab-Tastenfunktionalität für Elemente mit der Rolle `tab` zu steuern, wird empfohlen, alle inaktiven Elemente auf `tabindex="-1"` zu setzen und das aktive Element auf `tabindex="0"`.

## Vorrangordnung

Welche verwandten Eigenschaften es gibt und in welcher Reihenfolge dieses Attribut oder diese Eigenschaft gelesen wird, welche Eigenschaft Vorrang vor dieser haben wird und welche Eigenschaft überschrieben wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}}-Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
