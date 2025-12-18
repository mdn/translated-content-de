---
title: "ARIA: tab Rolle"
short-title: tab
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: 7ba6358a0ff684cc67c60b76d6d972722bbf0d18
---

Die ARIA `tab` Rolle zeigt ein interaktives Element innerhalb einer `tablist` an, das, wenn es aktiviert wird, das zugehörige `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der `tab` Rolle steuert die Sichtbarkeit eines zugehörigen Elements mit der [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) Rolle. Das übliche Nutzererlebnismuster ist eine Gruppe von visuellen Tabs über oder neben einem Inhaltsbereich, und das Auswählen eines anderen Tabs ändert den Inhalt und macht den ausgewählten Tab deutlich prominenter als die anderen Tabs.

Elemente mit der Rolle `tab` _müssen_ entweder ein Kind eines Elements mit der `tablist` Rolle sein oder ihre `id` als Teil der [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Eigenschaft einer `tablist` haben. Diese Kombination identifiziert für unterstützende Technologien, dass das Element Teil einer Gruppe von verwandten Elementen ist. Einige unterstützende Technologien geben eine Anzahl der `tab` Rolle Elemente innerhalb einer `tablist` wieder und informieren die Nutzer darüber, welchen `tab` sie gerade anvisiert haben. Weiterhin _sollte_ ein Element mit der `tab` Rolle die [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Eigenschaft enthalten, die ein entsprechendes `tabpanel` (das eine `tabpanel` Rolle hat) durch die `id` dieses Elements identifiziert. Wenn ein Element mit der `tabpanel` Rolle den Fokus hat, oder ein Kind davon den Fokus hat, zeigt dies an, dass das verbundene Element mit der `tab` Rolle der aktive Tab in einer `tablist` ist.

Wenn Elemente mit der `tab` Rolle ausgewählt oder aktiv sind, sollten sie ihr [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut auf `true` setzen. Andernfalls sollte ihr `aria-selected` Attribut auf `false` gesetzt werden. Wenn eine nur-einmal-auswählbare `tablist` ausgewählt oder aktiv ist, sollte das `hidden` Attribut der anderen Tabpanels auf true gesetzt werden, bis der Nutzer den Tab auswählt, der mit diesem Tabpanel verbunden ist. Wenn eine mehrfach-auswählbare `tablist` ausgewählt oder aktiv ist, sollte ihr entsprechendes gesteuertes `tabpanel` sein [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut auf `true` und sein `hidden` Attribut auf `false` gesetzt haben, andernfalls umgekehrt.

### Alle Nachfahren sind präsentational

Es gibt einige Typen von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `tab` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahren von `tab` Elementen an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `tab` Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachfahren von `tab` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Perspektive von Nutzern unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} gleichwertig sind:

```html
<div role="tab">Title of my tab</div>
```

### Zugehörige Rollen und Attribute

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : boolean
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : `id` des Elements mit der `tabpanel` Rolle
- [id](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Inhalt

### Tastaturinteraktionen

| Taste                             | Aktion                                                                                                                                                                                                                                                |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                    | Wenn der Fokus außerhalb der `tablist` ist, bewegt er den Fokus auf den aktiven Tab. Wenn der Fokus auf dem aktiven Tab ist, bewegt er den Fokus auf das nächste Element in der Tastaturfokusreihenfolge, idealerweise auf die zugehörige `tabpanel`. |
| <kbd>→</kbd>                      | Fokussiert und aktiviert optional den nächsten Tab in der Tab-Liste. Wenn der aktuelle Tab der letzte Tab in der Tab-Liste ist, aktiviert er den ersten Tab.                                                                                          |
| <kbd>←</kbd>                      | Fokussiert und aktiviert optional den vorherigen Tab in der Tab-Liste. Wenn der aktuelle Tab der erste Tab in der Tab-Liste ist, aktiviert er den letzten Tab.                                                                                        |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | Wenn ein Tab den Fokus hat, aktiviert er den Tab, sodass das zugehörige Panel angezeigt wird.                                                                                                                                                         |
| <kbd>Home</kbd>                   | Fokussiert und aktiviert optional den ersten Tab in der Tab-Liste.                                                                                                                                                                                    |
| <kbd>End</kbd>                    | Fokussiert und aktiviert optional den letzten Tab in der Tab-Liste.                                                                                                                                                                                   |
| <kbd>Delete</kbd>                 | Entfernt, wenn erlaubt, den derzeit ausgewählten Tab aus der Tab-Liste.                                                                                                                                                                               |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Auch wenn es Möglichkeiten gibt, tab-ähnliche Funktionalitäten ohne JavaScript zu erstellen, gibt es keine Ersatzkombination, die nur HTML und CSS verwendet, die denselben Funktionsumfang bietet, der oben für zugängliche Tabs mit Inhalten erforderlich ist.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit `tabpanel`, um eine interaktive Gruppe von Registerkarteninhalten zu erstellen. Hier umschließen wir unsere Inhaltsgruppe in einem `div`, wobei unsere `tablist` ein `aria-label` hat, das sie für unterstützende Technologien kennzeichnet. Jeder `tab` ist ein `button` mit den zuvor erwähnten Attributen. Der erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` zugewiesen. Diese beiden Attribute müssen immer so koordiniert werden — wenn ein anderer Tab ausgewählt wird, wird er dann `tabindex="0"` und `aria-selected="true"` haben. Alle nicht ausgewählten Tabs müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel` Elemente haben `tabindex="0"`, um sie tabbar zu machen, und alle außer dem aktuell aktiven haben das `hidden` Attribut. Das `hidden` Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird.

> [!NOTE]
> Das Setzen von `tabindex` am Tab-Panel ist nicht erforderlich, wenn das erste Element im Tab-Panel fokussierbar ist (wie z.B. ein Link), da das Tabben auf den Link auch das Lesen des Panel-Inhalts startet. Wenn es jedoch Panels im Set gibt, deren erstes Inhaltselement nicht fokussierbar ist, sollten alle `tabpanel` Elemente in einem Tab-Set fokussierbar sein, damit Benutzer von Screenreadern konsistent zu den Panel-Inhalten navigieren können.

```html
<div class="tabs">
  <div role="tablist" aria-label="Select your operating system">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      Windows
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      macOS
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      Linux
    </button>
  </div>
  <div class="tab-panels">
    <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
      <p>How to run this application on Windows</p>
    </div>
    <div
      id="panel-2"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-2"
      hidden>
      <p>How to run this application on macOS</p>
    </div>
    <div
      id="panel-3"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-3"
      hidden>
      <p>How to run this application on Linux</p>
    </div>
  </div>
</div>
```

Es wird ein grundlegendes Styling angewendet, das die Schaltflächen neu gestaltet und den {{cssxref("z-index")}} der `tab` Elemente ändert, um die Illusion zu erzeugen, dass sie mit dem `tabpanel` für aktive Elemente verbunden sind, und die Illusion, dass inaktive Elemente hinter dem aktiven `tabpanel` sind. Sie sollten den aktiven Tab deutlich von den inaktiven Tabs unterscheiden, z.B. durch dickere Ränder oder größere Größe.

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
  border-top-width: 4px;
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
  border-color: #356fb3;
  outline: 1px solid #356fb3;
}
```

Die Benutzerinteraktion wird mit JavaScript gehandhabt. Zuerst holen wir Verweise auf unsere `tablist`, alle `tab` Elemente darin, den Container unserer `tabpanel` Elemente und alle `tabpanel` Elemente in diesem Container. Dies basiert auf einigen Annahmen über die Struktur unseres HTML, daher müssen Sie, wenn Sie die Struktur ändern, auch diesen Code ändern. Wenn Sie mehrere Registerkartenschnittstellen auf einer Seite haben, können Sie diesen Code in eine Funktion einbetten und `tabsContainer` als Argument übergeben.

```js
const tabsContainer = document.querySelector(".tabs");
const tabList = tabsContainer.querySelector(':scope > [role="tablist"]');
const tabs = Array.from(tabList.querySelectorAll(':scope > [role="tab"]'));
const tabPanelsContainer = tabsContainer.querySelector(":scope > .tab-panels");
const tabPanels = Array.from(
  tabPanelsContainer.querySelectorAll(':scope > [role="tabpanel"]'),
);
```

Für Tastaturinteraktionen hören wir auf das [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignis im `tablist`. In dieser Demo haben wir uns entschieden, den `tab` nicht zu aktivieren, wenn der Benutzer mit den Pfeiltasten navigiert, sondern nur den Fokus zu verschieben. Wenn Sie den `tab` anzeigen möchten, wenn er den Fokus erhält, können Sie die Funktion `showTab()` (später definiert) anstelle von nur `focus()` auf dem neuen Tab aufrufen.

```js
tabList.addEventListener("keydown", (e) => {
  const currentTab = e.target;
  const currentIndex = tabs.indexOf(currentTab);
  if (currentIndex === -1) return; // Exit if the focused element is not a tab
  let newIndex = 0;

  switch (e.key) {
    case "ArrowRight":
      newIndex = (currentIndex + 1) % tabs.length;
      break;
    case "ArrowLeft":
      newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      break;
    case "Home":
      newIndex = 0;
      break;
    case "End":
      newIndex = tabs.length - 1;
      break;
    default:
      return; // Exit if the key is not recognized
  }

  e.preventDefault();
  e.stopPropagation();
  tabs[newIndex].focus();
});
```

Das Tab-Panel wird entweder durch das Drücken von <kbd>Enter</kbd> oder <kbd>Space</kbd>, während ein `tab` den Fokus hat, oder durch Klicken auf ein `tab` aktiviert. Zuerst definieren wir eine Funktion `showTab()`, die das anzuzeigende `tab` Element übernimmt.

```js
function showTab(targetTab) {
  // Unselect other tabs and set this tab as selected
  for (const tab of tabs) {
    if (tab === targetTab) continue;
    tab.setAttribute("aria-selected", false);
    tab.tabIndex = -1;
  }
  targetTab.setAttribute("aria-selected", true);
  targetTab.tabIndex = 0;

  // Hide other tab panels and show the selected panel
  const targetTabPanel = document.getElementById(
    targetTab.getAttribute("aria-controls"),
  );
  for (const panel of tabPanels) {
    if (panel === targetTabPanel) continue;
    panel.hidden = true;
  }
  targetTabPanel.hidden = false;
}
```

Jetzt können wir diese Funktion entweder bei einem `click` Ereignis oder bei einem `keydown` Ereignis aufrufen.

```js
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    showTab(e.target);
  });
  tab.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      showTab(e.target);
    }
  });
});
```

{{EmbedLiveSample("Example", 600, 130)}}

## Beste Praktiken

Es wird empfohlen, ein {{HTMLElement('button')}} Element mit der Rolle `tab` für seine eingebauten funktionalen und zugänglichen Eigenschaften zu verwenden, anstatt sie selbst hinzufügen zu müssen. Für die Steuerung der Tabulatortastenfunktionalität für Elemente mit der Rolle `tab` wird empfohlen, alle nicht-aktiven Elemente auf `tabindex="-1"` zu setzen und das aktive Element auf `tabindex="0"`.

## Vorgabeordnung

Welche verwandten Eigenschaften gibt es, in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen, welche Eigenschaft hat Vorrang vor dieser und welche Eigenschaft wird überschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}} Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
