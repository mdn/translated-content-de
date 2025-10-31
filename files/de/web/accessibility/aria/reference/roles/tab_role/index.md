---
title: "ARIA: Rolle `tab`"
short-title: tab
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die ARIA-Rolle `tab` kennzeichnet ein interaktives Element innerhalb eines `tablist`, das beim Aktivieren sein zugehöriges `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der Rolle `tab` kontrolliert die Sichtbarkeit eines zugehörigen Elements mit der Rolle [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role). Das übliche Benutzererfahrungsmuster ist eine Gruppe von visuellen Tabs oberhalb oder seitlich eines Inhaltsbereichs, und die Auswahl eines anderen Tabs ändert den Inhalt und macht den ausgewählten Tab prominenter als die anderen Tabs.

Elemente mit der Rolle `tab` _müssen_ entweder ein Kind eines Elements mit der Rolle `tablist` sein oder ihre `id` muss Teil der [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Eigenschaft eines `tablist` sein. Diese Kombination informiert unterstützende Technologien darüber, dass das Element Teil einer Gruppe zusammengehörender Elemente ist. Einige unterstützende Technologien geben eine Anzahl der Elemente mit der Rolle `tab` in einem `tablist` an und informieren darüber, welches `tab` derzeit ausgewählt ist. Des Weiteren _sollte_ ein Element mit der Rolle `tab` die Eigenschaft [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) enthalten, die ein entsprechendes `tabpanel` (das die Rolle `tabpanel` hat) durch die `id` dieses Elements identifiziert. Wenn ein Element mit der Rolle `tabpanel` oder ein untergeordnetes Element den Fokus hat, zeigt das an, dass das verbundene Element mit der Rolle `tab` der aktive Tab in einem `tablist` ist.

Wenn Elemente mit der Rolle `tab` ausgewählt oder aktiv sind, sollten sie das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt haben. Andernfalls sollte ihr `aria-selected`-Attribut auf `false` gesetzt sein. Wenn ein einzelauswählbares `tablist` ausgewählt oder aktiv ist, sollte das `hidden`-Attribut der anderen `tabpanels` auf `true` gesetzt werden, bis der Benutzer den Tab auswählt, der mit diesem `tabpanel` assoziiert ist. Wenn ein mehrfach auswählbares `tablist` ausgewählt oder aktiv ist, sollte das zugehörige `tabpanel` sein [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attribut auf `true` und sein `hidden`-Attribut auf `false` gesetzt haben, andernfalls umgekehrt.

### Alle untergeordneten Elemente sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Barrierefreiheits-API dargestellt werden, nur Text enthalten können. Barrierefreiheits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `tab` enthalten sind. Um dieses Problem zu lösen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle untergeordneten Elemente von jedem `tab`-Element an, da dies eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachten Sie folgendes `tab`-Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachkommen von `tab` präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Perspektive des Benutzers unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} dem folgenden entsprechen:

```html
<div role="tab">Title of my tab</div>
```

### Zugehörige Rollen und Attribute

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : boolesch
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : `id` des Elements mit der Rolle `tabpanel`
- [id](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Inhalt

### Tastaturinteraktionen

| Taste                             | Aktion                                                                                                                                                                                                                                                     |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                    | Wenn der Fokus außerhalb der `tablist` liegt, verschiebt er den Fokus zum aktiven Tab. Wenn der Fokus auf dem aktiven Tab liegt, verschiebt er den Fokus auf das nächste Element in der Tastaturfokus-Reihenfolge, idealerweise das zugehörige `tabpanel`. |
| <kbd>→</kbd>                      | Fokussiert und aktiviert optional den nächsten Tab in der Tab-Liste. Wenn der aktuelle Tab der letzte Tab in der Tab-Liste ist, aktiviert er den ersten Tab.                                                                                               |
| <kbd>←</kbd>                      | Fokussiert und aktiviert optional den vorherigen Tab in der Tab-Liste. Wenn der aktuelle Tab der erste Tab in der Tab-Liste ist, aktiviert er den letzten Tab.                                                                                             |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | Wenn ein Tab den Fokus hat, aktiviert er den Tab und zeigt das zugehörige Panel an.                                                                                                                                                                        |
| <kbd>Home</kbd>                   | Fokussiert und aktiviert optional den ersten Tab in der Tab-Liste.                                                                                                                                                                                         |
| <kbd>End</kbd>                    | Fokussiert und aktiviert optional den letzten Tab in der Tab-Liste.                                                                                                                                                                                        |
| <kbd>Delete</kbd>                 | Entfernt, wenn erlaubt, den aktuell ausgewählten Tab aus der Tab-Liste.                                                                                                                                                                                    |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Obwohl es Möglichkeiten gibt, tab-ähnliche Funktionalitäten ohne JavaScript zu erstellen, gibt es keine alternative Kombination, die nur HTML und CSS verwendet, um denselben Funktionsumfang zu bieten, der oben für zugängliche Tabs mit Inhalt erforderlich ist.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit `tabpanel`, um eine interaktive Gruppe von Registerkarten-Inhalten zu erstellen. Hier fassen wir unsere Gruppe von Inhalten in einem `div` ein, wobei unser `tablist` ein `aria-label` hat, das es für unterstützende Technologien kennzeichnet. Jedes `tab` ist ein `button` mit den zuvor erwähnten Attributen. Der erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` angewendet. Diese beiden Attribute müssen immer so koordiniert werden, dass, wenn ein anderer Tab ausgewählt wird, er dann `tabindex="0"` und `aria-selected="true"` angewendet hat. Alle nicht ausgewählten Tabs müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel`-Elemente haben `tabindex="0"`, um sie tabulatorfähig zu machen, und alle, außer dem derzeit aktiven, haben das `hidden`-Attribut. Das `hidden`-Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird.

> [!NOTE]
> Das Festlegen von `tabindex` im Tab-Panel ist unnötig, wenn das erste Element im Tab-Panel fokussierbar ist (z. B. ein Link), da das Tabben zum Link auch beginnt, den Inhalt des Panels zu lesen. Wenn es jedoch Panels in der Gruppe gibt, deren erstes Inhaltselement nicht fokussierbar ist, sollten alle `tabpanel`-Elemente in einem Tab-Set fokussierbar sein, damit Benutzer von Screenreadern konsistent zum Panel-Inhalt navigieren können.

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

Es gibt einige grundlegende Stile, die angewendet werden, um die Schaltflächen umzugestalten und das [`z-index`](/de/docs/Web/CSS/Reference/Properties/z-index) von `tab`-Elementen zu ändern, um die Illusion zu erzeugen, dass sie mit dem `tabpanel` für aktive Elemente verbunden sind, und die Illusion, dass inaktive Elemente hinter dem aktiven `tabpanel` liegen. Sie müssen den aktiven Tab klar von den inaktiven Tabs unterscheiden, z. B. durch dickere Ränder oder größere Größe.

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

Die Benutzerinteraktion wird mit JavaScript behandelt. Zuerst erhalten wir Referenzen zu unserem `tablist`, alle `tab`-Elemente darin, dem Container unserer `tabpanel`-Elemente und allen `tabpanel`-Elementen in diesem Container. Dies basiert auf einigen Annahmen über die Struktur unseres HTML, daher müssen Sie diesen Code ändern, wenn Sie die Struktur ändern. Wenn Sie mehrere Registerkarten-Schnittstellen auf einer Seite haben, können Sie diesen Code in eine Funktion einbetten und `tabsContainer` als Argument übergeben.

```js
const tabsContainer = document.querySelector(".tabs");
const tabList = tabsContainer.querySelector(':scope > [role="tablist"]');
const tabs = Array.from(tabList.querySelectorAll(':scope > [role="tab"]'));
const tabPanelsContainer = tabsContainer.querySelector(":scope > .tab-panels");
const tabPanels = Array.from(
  tabPanelsContainer.querySelectorAll(':scope > [role="tabpanel"]'),
);
```

Für Tastaturinteraktionen hören wir auf das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis auf dem `tablist`. In dieser Demo haben wir uns entschieden, den `tab` nicht zu aktivieren, wenn der Benutzer mit den Pfeiltasten navigiert, sondern nur den Fokus zu verschieben. Wenn Sie den `tab` anzeigen möchten, wenn er den Fokus erhält, können Sie die Funktion `showTab()` (später definiert) anstelle von nur `focus()` auf dem neuen Tab aufrufen.

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

Das Tab-Panel wird nur entweder durch Drücken von <kbd>Enter</kbd> oder <kbd>Space</kbd> aktiviert, während ein `tab` den Fokus hat, oder durch Klicken auf ein `tab`. Zuerst definieren wir eine Funktion `showTab()`, die das anzuzeigende `tab`-Element übernimmt.

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

Jetzt können wir diese Funktion entweder bei einem `click`-Ereignis oder einem `keydown`-Ereignis aufrufen.

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

## Best Practices

Es wird empfohlen, ein {{HTMLElement('button')}}-Element mit der Rolle `tab` zu verwenden, aufgrund ihrer eingebauten funktionalen und zugänglichen Eigenschaften, anstatt diese selbst hinzufügen zu müssen. Um die Tabulatortastenfunktionalität für Elemente mit der Rolle `tab` zu steuern, wird empfohlen, alle nicht-aktiven Elemente auf `tabindex="-1"` zu setzen und das aktive Element auf `tabindex="0"`.

## Vorrangordnung

Welche verwandten Eigenschaften gibt es und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen, welche Eigenschaft hat Vorrang vor dieser, und welche Eigenschaft wird überschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML- {{HTMLElement('button')}}-Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
