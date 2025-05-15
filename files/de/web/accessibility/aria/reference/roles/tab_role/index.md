---
title: "ARIA: `tab`-Rolle"
short-title: tab
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die ARIA `tab`-Rolle zeigt ein interaktives Element innerhalb einer `tablist` an, das beim Aktivieren sein zugehöriges `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der `tab`-Rolle steuert die Sichtbarkeit eines zugeordneten Elements mit der Rolle [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role). Das übliche Benutzererlebnismuster ist eine Gruppe von visuellen Registerkarten oberhalb oder seitlich eines Inhaltsbereichs, und die Auswahl einer anderen Registerkarte ändert den Inhalt und macht die ausgewählte Registerkarte auffälliger als die anderen.

Elemente mit der Rolle `tab` _müssen_ entweder ein untergeordnetes Element eines Elements mit der `tablist`-Rolle sein oder ihre `id` als Teil der [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Eigenschaft einer `tablist` haben. Diese Kombination zeigt unterstützender Technologie, dass das Element Teil einer Gruppe verwandter Elemente ist. Einige unterstützende Technologien geben die Anzahl der Elemente mit der `tab`-Rolle innerhalb einer `tablist` an und informieren die Benutzer darüber, welches `tab` sie derzeit anvisiert haben. Weiterhin _sollte_ ein Element mit der `tab`-Rolle die [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Eigenschaft enthalten, die ein entsprechendes `tabpanel` (das eine `tabpanel`-Rolle hat) durch die `id` dieses Elements identifiziert. Wenn ein Element mit der `tabpanel`-Rolle den Fokus hat oder ein untergeordnetes Element davon den Fokus hat, zeigt das an, dass das verbundene Element mit der `tab`-Rolle die aktive Registerkarte in einer `tablist` ist.

Wenn Elemente mit der `tab`-Rolle ausgewählt oder aktiv sind, sollten sie ihr [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut auf `true` setzen. Andernfalls sollte ihr `aria-selected`-Attribut auf `false` gesetzt werden. Wenn eine einfach auswählbare `tablist` ausgewählt oder aktiv ist, sollte das `hidden`-Attribut der anderen Tabellenelemente auf `true` gesetzt werden, bis der Benutzer die mit dieser Tabelle verbundene Registerkarte auswählt. Wenn eine mehrfach auswählbare `tablist` ausgewählt oder aktiv ist, sollte ihr entsprechendes gesteuertes `tabpanel` sein [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attribut auf `true` und sein `hidden`-Attribut auf `false` gesetzt haben, ansonsten umgekehrt.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API repräsentiert werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `tab` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente eines beliebigen `tab`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `tab`-Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachfahren von `tab` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Perspektive des Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Codeschnipsel im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} dem folgenden gleichwertig sind:

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

| Taste             | Aktion                                                                                                                                                                                                                                                                                                         |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>    | Wenn der Fokus außerhalb der `tablist` ist, wird der Fokus auf die aktive Registerkarte verschoben. Wenn der Fokus auf der aktiven Registerkarte ist, wird der Fokus auf das nächste Element in der Tastaturfokusreihenfolge verschoben, idealerweise auf das zugehörige `tabpanel` der aktiven Registerkarte. |
| <kbd>→</kbd>      | Fokussiert und aktiviert optional die nächste Registerkarte in der Registerkartenliste. Wenn die aktuelle Registerkarte die letzte in der Registerkartenliste ist, wird die erste Registerkarte aktiviert.                                                                                                     |
| <kbd>←</kbd>      | Fokussiert und aktiviert optional die vorherige Registerkarte in der Registerkartenliste. Wenn die aktuelle Registerkarte die erste in der Registerkartenliste ist, wird die letzte Registerkarte aktiviert.                                                                                                   |
| <kbd>Delete</kbd> | Entfernt, wenn erlaubt, die aktuell ausgewählte Registerkarte aus der Registerkartenliste.                                                                                                                                                                                                                     |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Obwohl es Möglichkeiten gibt, tab-ähnliche Funktionalität ohne JavaScript zu erstellen, gibt es keine Ersatzkombination, die nur HTML und CSS verwendet, die den oben erforderlichen Funktionsumfang für zugängliche Registerkarten mit Inhalt bietet.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit `tabpanel`, um eine interaktive Gruppe von Registerkarteninhalten zu erstellen. Hier umschließen wir unsere Gruppe von Inhalten in einem `div`, wobei unsere `tablist` ein `aria-label` hat, das es für unterstützende Technologien kennzeichnet. Jede `tab` ist ein `button` mit den zuvor erwähnten Attributen. Die erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` angewendet. Diese beiden Attribute müssen immer so koordiniert werden – wenn eine andere Registerkarte ausgewählt wird, hat sie dann `tabindex="0"` und `aria-selected="true"` angewendet. Alle nicht ausgewählten Registerkarten müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel`-Elemente haben `tabindex="0"`, um sie tab-bar zu machen, und alle außer dem derzeit aktiven haben das `hidden`-Attribut. Das `hidden`-Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird. Es gibt einen einfachen Styling, der die Buttons umgestaltet und den [`z-index`](/de/docs/Web/CSS/z-index) der `tab`-Elemente ändert, um die Illusion zu erzeugen, dass es mit dem `tabpanel` für aktive Elemente verbunden ist, und die Illusion, dass inaktive Elemente hinter dem aktiven `tabpanel` liegen.

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

Es gibt zwei Dinge, die wir mit JavaScript tun müssen: Wir müssen den Fokus und die Tab-Index unserer `tab`-Elemente mit den rechten und linken Pfeilen ändern und wir müssen die aktive `tab` und `tabpanel` ändern, wenn wir auf eine `tab` klicken.

Um das erste zu erreichen, hören wir auf das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis auf der `tablist`. Wenn die [`key`](/de/docs/Web/API/KeyboardEvent/key) des Ereignisses `ArrowRight` oder `ArrowLeft` ist, reagieren wir auf das Ereignis. Wir beginnen damit, den `tabindex` des aktuellen `tab`-Elements auf -1 zu setzen, was es nicht mehr tab-bar macht. Dann, wenn der rechte Pfeil gedrückt wird, erhöhen wir unseren Tab-Fokuszähler um eins. Wenn der Zähler größer als die Anzahl der `tab`-Elemente ist, die wir haben, gehen wir zurück zur ersten Registerkarte, indem wir diesen Zähler auf 0 setzen. Wenn der linke Pfeil gedrückt wird, verringern wir unseren Tab-Fokuszähler um eins, und wenn es dann kleiner als 0 ist, setzen wir es auf die Anzahl der `tab`-Elemente minus eins (um zum letzten Element zu gelangen). Schließlich setzen wir den `focus` auf das `tab`-Element, dessen Index dem Tab-Fokuszähler entspricht, und setzen seinen `tabindex` auf 0, um es tab-bar zu machen.

Um die aktive `tab` und `tabpanel` zu ändern, haben wir eine Funktion, die das Ereignis übernimmt, das Element, das das Ereignis ausgelöst hat, das übergeordnete Element des Auslöselements und dessen übergeordnetes Element erhält. Wir finden dann alle Registerkarten mit `aria-selected="true"` im übergeordneten Element und setzen es auf `false`, dann setzen wir das `aria-selected` des Auslöselements auf `true`. Danach finden wir alle `tabpanel`-Elemente im Großelternelement, machen sie alle `hidden` und wählen schließlich das Element aus, dessen `id` gleich dem `aria-controls` des auslösenden `tab` ist, und entfernen das `hidden`-Attribut, um es sichtbar zu machen.

```js
window.addEventListener("DOMContentLoaded", () => {
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

Es wird empfohlen, ein {{HTMLElement('button')}}-Element mit der `tab`-Rolle zu verwenden, da diese eingebaute funktionale und zugängliche Funktionen bieten, anstatt sie selbst hinzufügen zu müssen. Um die Tabulatortastenfunktionalität für Elemente mit der `tab`-Rolle zu steuern, wird empfohlen, alle nicht aktiven Elemente auf `tabindex="-1"` zu setzen und das aktive Element auf `tabindex="0"`.

## Prioritätsreihenfolge

Welche sind die verwandten Eigenschaften und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen, welche Eigenschaft wird Vorrang vor dieser haben und welche Eigenschaft wird überschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}}-Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
