---
title: "ARIA: Tab Rolle"
short-title: tab
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: 4fa5b00821777fd7160e134379ab5b49d9889e98
---

Die ARIA `tab` Rolle kennzeichnet ein interaktives Element innerhalb einer `tablist`, das, wenn aktiviert, das zugehörige `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der `tab` Rolle steuert die Sichtbarkeit eines zugehörigen Elements mit der [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) Rolle. Das übliche Benutzererfahrungs-Muster ist eine Gruppe von visuellen Tabs, die oberhalb oder seitlich eines Inhaltsbereichs angeordnet sind. Das Auswählen eines anderen Tabs ändert den Inhalt und macht den ausgewählten Tab prominenter als die anderen Tabs.

Elemente mit der Rolle `tab` _müssen_ entweder ein Kind eines Elements mit der `tablist` Rolle sein oder ihre `id` muss Teil der [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Eigenschaft einer `tablist` sein. Diese Kombination zeigt unterstützender Technologie, dass das Element Teil einer Gruppe verwandter Elemente ist. Einige unterstützende Technologien bieten eine Zählung der Anzahl der `tab` Rollen-Elemente innerhalb einer `tablist` und informieren die Nutzer, welchen `tab` sie derzeit fokussiert haben. Des Weiteren _sollte_ ein Element mit der `tab` Rolle die [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Eigenschaft enthalten, die ein entsprechendes `tabpanel` (das eine `tabpanel` Rolle hat) durch die `id` dieses Elements identifiziert. Wenn ein Element mit der `tabpanel` Rolle den Fokus hat oder ein Kind davon den Fokus hat, zeigt das an, dass das verbundene Element mit der `tab` Rolle der aktive Tab in einer `tablist` ist.

Wenn Elemente mit der `tab` Rolle ausgewählt oder aktiv sind, sollten sie das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt haben. Andernfalls sollte ihr `aria-selected` Attribut auf `false` gesetzt sein. Wenn eine einzelauswählbare `tablist` ausgewählt oder aktiv ist, sollte das `hidden` Attribut der anderen Tabpanels auf true gesetzt sein, bis der Nutzer den Tab auswählt, der mit diesem Tabpanel verknüpft ist. Wenn eine mehrafumauswählbare `tablist` ausgewählt oder aktiv ist, sollte ihr entsprechendes kontrolliertes `tabpanel` das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) auf `true` und das `hidden` Attribut auf `false` gesetzt haben, andernfalls umgekehrt.

### Alle Nachfahren sind präsentationsorientiert

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei der Darstellung in einer Plattformzugänglichkeits-API nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `tab` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente irgendeines `tab` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `tab` Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachfahren von `tab` präsentationsorientiert sind, ist der folgende Code äquivalent:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Perspektive des Benutzers unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im {{Glossary("Accessibility_tree", "Accessibility Tree")}} entsprechen:

```html
<div role="tab">Title of my tab</div>
```

### Zugehörige Rollen und Attribute

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : boolean
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : `id` des Elements mit `tabpanel` Rolle
- [id](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Inhalt

### Tastaturinteraktionen

| Taste                             | Aktion                                                                                                                                                                                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>Tab</kbd>                    | Wenn der Fokus außerhalb der `tablist` ist, wird der Fokus auf den aktiven Tab verschoben. Wenn der Fokus auf dem aktiven Tab ist, wird der Fokus auf das nächste Element in der Tastaturreihenfolge verschoben, idealerweise auf das zugehörige `tabpanel`. |
| <kbd>→</kbd>                      | Fokussiert und aktiviert optional den nächsten Tab in der Tab-Liste. Wenn der aktuelle Tab der letzte Tab in der Tab-Liste ist, aktiviert er den ersten Tab.                                                                                                 |
| <kbd>←</kbd>                      | Fokussiert und aktiviert optional den vorherigen Tab in der Tab-Liste. Wenn der aktuelle Tab der erste Tab in der Tab-Liste ist, aktiviert er den letzten Tab.                                                                                               |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | Wenn ein Tab den Fokus hat, aktiviert er den Tab, wodurch das zugehörige Panel angezeigt wird.                                                                                                                                                               |
| <kbd>Home</kbd>                   | Fokussiert und aktiviert optional den ersten Tab in der Tab-Liste.                                                                                                                                                                                           |
| <kbd>End</kbd>                    | Fokussiert und aktiviert optional den letzten Tab in der Tab-Liste.                                                                                                                                                                                          |
| <kbd>Delete</kbd>                 | Entfernt, wenn erlaubt, den aktuell ausgewählten Tab aus der Tab-Liste.                                                                                                                                                                                      |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Obwohl es Möglichkeiten gibt, tab-ähnliche Funktionen ohne JavaScript zu erstellen, gibt es keine Ersatzkombination, die nur HTML und CSS verwendet, um den oben beschriebenen Umfang an Funktionalität für zugängliche Tabs mit Inhalt zu bieten.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit `tabpanel`-Rolle, um eine interaktive Gruppe von Registerkarteninhalten zu erstellen. Hier umschließen wir unsere Gruppe von Inhalten in einem `div`, wobei unsere `tablist` ein `aria-label` hat, das sie für unterstützende Technologie kennzeichnet. Jeder `tab` ist ein `button` mit den zuvor erwähnten Attributen. Der erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` angewendet. Diese beiden Attribute müssen immer so koordiniert sein – wenn ein anderer Tab ausgewählt wird, wird dieser dann `tabindex="0"` und `aria-selected="true"` haben. Alle nicht ausgewählten Tabs müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel` Elemente haben `tabindex="0"`, um sie tabbar zu machen, und alle außer dem derzeit aktiven haben das `hidden`-Attribut. Das `hidden`-Attribut wird mit JavaScript entfernt, wenn ein `tabpanel` sichtbar wird.

> [!NOTE]
> Das Setzen von `tabindex` auf dem Tab-Panel ist unnötig, wenn das erste Element im Tab-Panel fokussierbar ist (wie ein Link), da das Tabben zum Link auch den Inhalt des Panels starten wird. Wenn es jedoch Panels in dem Set gibt, deren erstes Inhaltselement nicht fokussierbar ist, sollten alle Tab-Panel-Elemente in einem Tab-Set fokussierbar sein, damit Screenreader-Benutzer konsistent zum Panel-Inhalt navigieren können.

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
      hidden="hidden">
      <p>How to run this application on macOS</p>
    </div>
    <div
      id="panel-3"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-3"
      hidden="hidden">
      <p>How to run this application on Linux</p>
    </div>
  </div>
</div>
```

Es gibt einige grundlegende Stildefinitionen, die die Buttons umgestalten und den [`z-index`](/de/docs/Web/CSS/z-index) der `tab` Elemente ändern, um die Illusion zu erzeugen, dass sie mit dem aktiven `tabpanel` verbunden sind, und die Illusion, dass inaktive Elemente hinter dem aktiven `tabpanel` liegen. Sie müssen den aktiven Tab deutlich von den inaktiven Tabs unterscheiden, z.B. durch dickere Ränder oder größere Größe.

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

Die Benutzerinteraktion wird mit JavaScript behandelt. Wir bekommen zuerst Verweise auf unsere `tablist`, alle darin enthaltenen `tab`-Elemente, den Container unserer `tabpanel`-Elemente und alle `tabpanel`-Elemente innerhalb dieses Containers. Dies basiert auf einigen Annahmen über die Struktur unseres HTML. Wenn Sie die Struktur ändern, müssen Sie diesen Code ändern. Wenn Sie mehrere Registerkartenoberflächen auf einer Seite haben, können Sie diesen Code in eine Funktion einbinden und `tabsContainer` als Argument übergeben.

```js
const tabsContainer = document.querySelector(".tabs");
const tabList = tabsContainer.querySelector(':scope > [role="tablist"]');
const tabs = Array.from(tabList.querySelectorAll(':scope > [role="tab"]'));
const tabPanelsContainer = tabsContainer.querySelector(":scope > .tab-panels");
const tabPanels = Array.from(
  tabPanelsContainer.querySelectorAll(':scope > [role="tabpanel"]'),
);
```

Für Tastaturinteraktionen lauschen wir dem [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignis an der `tablist`. In dieser Demo haben wir uns entschieden, den `tab` nicht zu aktivieren, wenn der Benutzer mit den Pfeiltasten navigiert, sondern stattdessen nur den Fokus zu verschieben. Wenn Sie möchten, dass der `tab` angezeigt wird, wenn er den Fokus erhält, können Sie die Funktion `showTab()` (später definiert) aufrufen, anstatt einfach `focus()` auf dem neuen Tab aufzurufen.

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

Das Tab-Panel wird entweder aktiviert, indem man <kbd>Enter</kbd> oder <kbd>Space</kbd> drückt, während ein `tab` den Fokus hat, oder indem man auf einen `tab` klickt. Wir definieren zuerst eine Funktion `showTab()`, die das zu zeigende `tab` Element übernimmt.

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

Jetzt können wir diese Funktion entweder bei einem `click`-Ereignis oder bei einem `keydown`-Ereignis aufrufen.

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

Es wird empfohlen, ein {{HTMLElement('button')}} Element mit der Rolle `tab` zu verwenden, da diese eingebauten funktionellen und zugänglichen Eigenschaften haben, anstatt diese selbst hinzufügen zu müssen. Um die Tab-Tastfunktionalität für Elemente mit der Rolle `tab` zu steuern, wird empfohlen, alle nicht-aktiven Elemente auf `tabindex="-1"` zu setzen und das aktive Element auf `tabindex="0"`.

## Vorrangordnung

Welche sind die verwandten Eigenschaften, und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen, welche Eigenschaft Vorrang vor dieser hat und welche Eigenschaft überschrieben wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}} Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
