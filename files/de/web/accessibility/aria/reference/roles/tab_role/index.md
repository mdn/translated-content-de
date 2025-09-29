---
title: "ARIA: `tab` Rolle"
short-title: tab
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: a6ce71d83678c4a0c2fbf7db174ed1db60d9aed9
---

Die ARIA `tab` Rolle kennzeichnet ein interaktives Element innerhalb eines `tablist`, das, wenn es aktiviert wird, sein zugehöriges `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der `tab` Rolle steuert die Sichtbarkeit eines zugehörigen Elements mit der [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) Rolle. Ein häufiges Benutzererlebnis-Muster ist eine Gruppe von visuellen Tabs über oder neben einem Inhaltsbereich, und die Auswahl eines anderen Tabs ändert den Inhalt und macht den ausgewählten Tab im Vergleich zu den anderen Tabs auffälliger.

Elemente mit der Rolle `tab` _müssen_ entweder ein Kind eines Elements mit der `tablist` Rolle sein oder ihre `id` als Teil der [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Eigenschaft eines `tablist` haben. Diese Kombination identifiziert für unterstützende Technologien, dass das Element Teil einer Gruppe verwandter Elemente ist. Einige unterstützende Technologien bieten eine Zählung der Anzahl der `tab` Rollen-Elemente innerhalb eines `tablist` an und informieren die Benutzer, welchen `tab` sie derzeit anvisiert haben. Weiterhin sollte ein Element mit der `tab` Rolle die [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Eigenschaft enthalten, die ein entsprechendes `tabpanel` identifiziert (das eine `tabpanel` Rolle hat) durch die `id` dieses Elements. Wenn ein Element mit der `tabpanel` Rolle den Fokus hat oder ein Kind davon den Fokus hat, zeigt das an, dass das verbundene Element mit der `tab` Rolle der aktive Tab in einem `tablist` ist.

Wenn Elemente mit der `tab` Rolle ausgewählt oder aktiv sind, sollten sie das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut auf `true` gesetzt haben. Andernfalls sollte ihr `aria-selected` Attribut auf `false` gesetzt sein. Wenn ein einzelauswählbares `tablist` ausgewählt oder aktiv ist, sollte das `hidden` Attribut der anderen `tabpanel`s auf wahr gesetzt werden, bis der Benutzer den Tab auswählt, der mit diesem `tabpanel` verknüpft ist. Wenn ein mehrfach auswählbares `tablist` ausgewählt oder aktiv ist, sollte sein entsprechendes kontrolliertes `tabpanel` das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut auf `true` und sein `hidden` Attribut auf `false` gesetzt haben, andernfalls umgekehrt.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `tab` zu repräsentieren. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahren eines `tab` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `tab` Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachfahren von `tab` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus Sicht des Nutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Beispiele dem folgenden im {{Glossary("Accessibility_tree", "Zugriffsbaum")}} entsprechen:

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

| Taste                             | Aktion                                                                                                                                                                                                                                               |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                    | Wenn der Fokus außerhalb des `tablist` ist, bewegt sich der Fokus zum aktiven Tab. Wenn der Fokus auf dem aktiven Tab ist, bewegt sich der Fokus zum nächsten Element in der Tastaturfokusreihenfolge, idealerweise dem `tabpanel` des aktiven Tabs. |
| <kbd>→</kbd>                      | Fokussiert und aktiviert optional den nächsten Tab in der Tab-Liste. Wenn der aktuelle Tab der letzte in der Tab-Liste ist, aktiviert er den ersten Tab.                                                                                             |
| <kbd>←</kbd>                      | Fokussiert und aktiviert optional den vorherigen Tab in der Tab-Liste. Wenn der aktuelle Tab der erste in der Tab-Liste ist, aktiviert er den letzten Tab.                                                                                           |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | Wenn ein Tab den Fokus hat, aktiviert er den Tab, sodass das zugehörige Panel angezeigt wird.                                                                                                                                                        |
| <kbd>Home</kbd>                   | Fokussiert und aktiviert optional den ersten Tab in der Tab-Liste.                                                                                                                                                                                   |
| <kbd>End</kbd>                    | Fokussiert und aktiviert optional den letzten Tab in der Tab-Liste.                                                                                                                                                                                  |
| <kbd>Delete</kbd>                 | Entfernt, wenn erlaubt, den aktuell ausgewählten Tab aus der Tab-Liste.                                                                                                                                                                              |

### Erforderliche JavaScript-Features

> [!NOTE]
> Obwohl es Möglichkeiten gibt, tab-ähnliche Funktionen ohne JavaScript zu erstellen, gibt es keine Ersatzkombination, die nur mit HTML und CSS funktioniert und den oben erforderlichen Funktionsumfang für zugängliche Tabs mit Inhalt bereitstellt.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit `tabpanel`, um eine interaktive Gruppe von Tab-Inhalten zu erstellen. Hier schließen wir unsere Inhaltsgruppe in ein `div` ein, wobei unser `tablist` ein `aria-label` hat, das es für unterstützende Technologien kennzeichnet. Jeder `tab` ist ein `button` mit den zuvor erwähnten Attributen. Der erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` angewendet. Diese beiden Attribute müssen immer so koordiniert werden—wenn ein anderer Tab ausgewählt wird, wird er dann `tabindex="0"` und `aria-selected="true"` haben. Alle nicht ausgewählten Tabs müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel` Elemente haben `tabindex="0"`, um sie fokussierbar zu machen, und alle außer dem derzeit aktiven haben das `hidden` Attribut. Das `hidden` Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird.

> [!NOTE]
> Das Setzen von `tabindex` auf dem Tab-Panel ist unnötig, wenn das erste Element im Tab-Panel fokussierbar ist (wie ein Link), da das Tabben zum Link auch den Inhalt des Panels zu lesen beginnt. Wenn jedoch irgendein Panel im Set ein erstes Inhaltelement hat, das nicht fokussierbar ist, sollten alle `tabpanel` Elemente in einem Tab-Set fokussierbar sein, damit Benutzer von Bildschirmlesern konsistent zum Panel-Inhalt navigieren können.

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

Einige grundlegende Style-Anpassungen wurden vorgenommen, um die Buttons umzugestalten und den [`z-index`](/de/docs/Web/CSS/z-index) der `tab` Elemente zu ändern, um die Illusion zu erzeugen, dass es mit dem `tabpanel` für aktive Elemente verbunden ist, und die Illusion, dass inaktive Elemente hinter dem aktiven `tabpanel` sind. Es ist wichtig, den aktiven Tab von den inaktiven Tabs klar zu unterscheiden, zum Beispiel durch dickere Umrandungen oder größere Größe.

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
  border-color: orange;
  outline: 1px solid orange;
}
```

Die Benutzerinteraktion wird mit JavaScript behandelt. Wir erhalten zunächst Referenzen zu unserem `tablist`, allen `tab` Elementen darin, dem Container unserer `tabpanel` Elemente und allen `tabpanel` Elementen in diesem Container. Dies basiert auf einigen Annahmen über die Struktur unseres HTML, daher müssen Sie, wenn Sie die Struktur ändern, diesen Code ändern. Wenn Sie mehrere Tabbed-Interfaces auf einer Seite haben, können Sie diesen Code in eine Funktion einwickeln und `tabsContainer` als Argument übergeben.

```js
const tabsContainer = document.querySelector(".tabs");
const tabList = tabsContainer.querySelector(':scope > [role="tablist"]');
const tabs = Array.from(tabList.querySelectorAll(':scope > [role="tab"]'));
const tabPanelsContainer = tabsContainer.querySelector(":scope > .tab-panels");
const tabPanels = Array.from(
  tabPanelsContainer.querySelectorAll(':scope > [role="tabpanel"]'),
);
```

Für Tastaturinteraktionen hören wir auf das [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignis auf dem `tablist`. In diesem Demo haben wir entschieden, den `tab` nicht zu aktivieren, wenn der Benutzer mit den Pfeiltasten navigiert, sondern nur den Fokus zu verschieben. Wenn Sie den Tab beim Erhalt des Fokus anzeigen möchten, können Sie die Funktion `showTab()` (später definiert) anstelle von nur `focus()` auf den neuen Tab aufrufen.

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

Das Tab-Panel wird nur aktiviert, indem entweder <kbd>Enter</kbd> oder <kbd>Space</kbd> gedrückt wird, während ein `tab` den Fokus hat, oder indem auf einen `tab` geklickt wird. Wir definieren zunächst eine Funktion `showTab()`, die das anzuzeigende `tab` Element aufnimmt.

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

Nun können wir diese Funktion entweder bei einem `click` Ereignis oder bei einem `keydown` Ereignis aufrufen.

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

Es wird empfohlen, ein {{HTMLElement('button')}} Element mit der Rolle `tab` für ihre eingebauten funktionalen und zugänglichen Merkmale zu verwenden, anstatt sie selbst hinzufügen zu müssen. Um die Tabulator-Schlüsselfunktionalität für Elemente mit der Rolle `tab` zu steuern, wird empfohlen, alle nicht aktiven Elemente auf `tabindex="-1"` zu setzen und das aktive Element auf `tabindex="0"`.

## Reihenfolge der Priorität

Welche verwandten Eigenschaften gibt es, und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen, welche Eigenschaft wird Vorrang vor dieser haben, und welche Eigenschaft wird überschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}} Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
