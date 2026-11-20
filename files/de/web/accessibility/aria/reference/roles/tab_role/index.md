---
title: "ARIA: Rolle tab"
short-title: tab
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die ARIA-Rolle `tab` kennzeichnet ein interaktives Element innerhalb einer `tablist`, das bei Aktivierung das zugehörige `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der Rolle `tab` steuert die Sichtbarkeit eines zugehörigen Elements mit der Rolle [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role). Ein übliches Interaktionsmuster besteht aus einer Gruppe sichtbarer Tabs oberhalb oder neben einem Inhaltsbereich. Wird ein anderer Tab ausgewählt, ändert sich der Inhalt, und der ausgewählte Tab wird gegenüber den anderen Tabs hervorgehoben.

Elemente mit der Rolle `tab` _müssen_ entweder untergeordnete Elemente eines Elements mit der Rolle `tablist` sein, oder ihre `id` muss Teil der Eigenschaft [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) einer `tablist` sein. Diese Kombination zeigt Hilfstechnologien an, dass das Element zu einer Gruppe zusammengehöriger Elemente gehört. Manche Hilfstechnologien geben die Anzahl der Elemente mit der Rolle `tab` innerhalb einer `tablist` an und teilen Nutzern mit, auf welchen `tab` sie gerade ausgerichtet sind. Außerdem _sollte_ ein Element mit der Rolle `tab` die Eigenschaft [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) enthalten, die über dessen `id` ein zugehöriges `tabpanel` identifiziert. Wenn ein Element mit der Rolle `tabpanel` oder eines seiner untergeordneten Elemente den Fokus hat, zeigt dies an, dass das verknüpfte Element mit der Rolle `tab` der aktive Tab in einer `tablist` ist.

Wenn Elemente mit der Rolle `tab` ausgewählt oder aktiv sind, sollte ihr Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt sein. Andernfalls sollte ihr Attribut `aria-selected` auf `false` gesetzt sein. Ist in einer `tablist` mit Einzelauswahl ein Tab ausgewählt oder aktiv, sollte das Attribut `hidden` der anderen Tabpanels auf `true` gesetzt sein, bis der Nutzer den zugehörigen Tab auswählt. Ist in einer `tablist` mit Mehrfachauswahl ein Tab ausgewählt oder aktiv, sollte das zugehörige, von ihm gesteuerte `tabpanel` sein Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) auf `true` und sein Attribut `hidden` auf `false` gesetzt haben; andernfalls gilt das Umgekehrte.

### Alle untergeordneten Elemente sind präsentationsbezogen

Einige Arten von Komponenten der Benutzeroberfläche können in einer Barrierefreiheits-API der Plattform nur Text enthalten. Barrierefreiheits-APIs können semantische Elemente innerhalb eines `tab` nicht darstellen. Um diese Einschränkung zu berücksichtigen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle untergeordneten Elemente eines `tab`-Elements an, da diese Rolle keine semantischen untergeordneten Elemente unterstützt.

Betrachten Sie beispielsweise das folgende `tab`-Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da untergeordnete Elemente von `tab` präsentationsbezogen sind, ist der folgende Code gleichwertig:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus Sicht eines Nutzers von Hilfstechnologien existiert die Überschrift nicht, da die vorherigen Codebeispiele dem Folgenden im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} entsprechen:

```html
<div role="tab">Title of my tab</div>
```

### Zugehörige Rollen und Attribute

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : boolescher Wert
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : `id` des Elements mit der Rolle `tabpanel`
- [id](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Inhalt

### Tastaturinteraktionen

| Taste                             | Aktion                                                                                                                                                                                                                                                                  |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                    | Befindet sich der Fokus außerhalb der `tablist`, wird er auf den aktiven Tab verschoben. Liegt der Fokus auf dem aktiven Tab, wird er auf das nächste Element in der Tastatur-Fokusreihenfolge verschoben, idealerweise auf das zugehörige `tabpanel` des aktiven Tabs. |
| <kbd>→</kbd>                      | Setzt den Fokus auf den nächsten Tab in der Tab-Liste und aktiviert ihn optional. Ist der aktuelle Tab der letzte in der Tab-Liste, wird der erste Tab aktiviert.                                                                                                       |
| <kbd>←</kbd>                      | Setzt den Fokus auf den vorherigen Tab in der Tab-Liste und aktiviert ihn optional. Ist der aktuelle Tab der erste in der Tab-Liste, wird der letzte Tab aktiviert.                                                                                                     |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | Aktiviert den fokussierten Tab, sodass das zugehörige Panel angezeigt wird.                                                                                                                                                                                             |
| <kbd>Home</kbd>                   | Setzt den Fokus auf den ersten Tab in der Tab-Liste und aktiviert ihn optional.                                                                                                                                                                                         |
| <kbd>End</kbd>                    | Setzt den Fokus auf den letzten Tab in der Tab-Liste und aktiviert ihn optional.                                                                                                                                                                                        |
| <kbd>Delete</kbd>                 | Entfernt, sofern zulässig, den aktuell ausgewählten Tab aus der Tab-Liste.                                                                                                                                                                                              |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Es gibt zwar Möglichkeiten, eine tabähnliche Funktionalität ohne JavaScript umzusetzen. Eine Lösung, die ausschließlich HTML und CSS verwendet und denselben oben beschriebenen Funktionsumfang für barrierefreie Tabs mit Inhalt bietet, gibt es jedoch nicht.

## Rangfolge

Welche Eigenschaften sind zugehörig, und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen? Welche Eigenschaft hat Vorrang vor dieser, und welche Eigenschaft wird überschrieben?

## Bewährte Vorgehensweisen

Es wird empfohlen, ein {{HTMLElement('button')}}-Element mit der Rolle `tab` zu verwenden, um dessen integrierte Funktionen und Barrierefreiheit zu nutzen, statt diese selbst ergänzen zu müssen. Um die Navigation mit der Tabulatortaste für Elemente mit der Rolle `tab` zu steuern, sollten alle nicht aktiven Elemente auf `tabindex="-1"` und das aktive Element auf `tabindex="0"` gesetzt werden.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit der Rolle `tabpanel`, um eine interaktive Gruppe von Inhalten mit Tabs zu erstellen. Die Inhaltsgruppe ist von einem `div` umschlossen. Die `tablist` hat ein `aria-label`, das ihr eine Beschriftung für Hilfstechnologien gibt. Jeder `tab` ist ein `button` mit den zuvor genannten Attributen. Beim ersten `tab` sind sowohl `tabindex="0"` als auch `aria-selected="true"` gesetzt. Diese beiden Attribute müssen stets entsprechend aufeinander abgestimmt sein: Wird ein anderer Tab ausgewählt, erhält dieser `tabindex="0"` und `aria-selected="true"`. Alle nicht ausgewählten Tabs müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel`-Elemente haben `tabindex="0"`, damit sie über die Tabulatortaste erreichbar sind. Mit Ausnahme des aktuell aktiven Elements haben sie außerdem das Attribut `hidden`. Wenn ein `tabpanel` durch JavaScript sichtbar wird, wird das Attribut `hidden` entfernt.

> [!NOTE]
> `tabindex` muss nicht auf dem Tabpanel gesetzt werden, wenn dessen erstes Element fokussierbar ist, etwa ein Link. Beim Wechsel zum Link mit der Tabulatortaste wird dann auch der Inhalt des Panels vorgelesen. Wenn jedoch in einem der Panels das erste Inhaltselement nicht fokussierbar ist, sollten alle Tabpanel-Elemente der Gruppe fokussierbar sein. So können Nutzer von Screenreadern einheitlich zu den Panel-Inhalten navigieren.

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

Eine einfache Gestaltung passt das Aussehen der Buttons an und ändert den {{cssxref("z-index")}} der `tab`-Elemente. So entsteht bei aktiven Elementen der Eindruck einer Verbindung mit dem `tabpanel`, während inaktive Elemente hinter dem aktiven `tabpanel` zu liegen scheinen. Der aktive Tab muss sich deutlich von den inaktiven Tabs unterscheiden, beispielsweise durch dickere Rahmen oder eine größere Darstellung.

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

Die Nutzerinteraktion wird mit JavaScript umgesetzt. Zunächst holen wir Referenzen auf die `tablist`, alle darin enthaltenen `tab`-Elemente, den Container der `tabpanel`-Elemente und alle `tabpanel`-Elemente in diesem Container. Dabei werden bestimmte Annahmen über die Struktur des HTML getroffen. Wenn Sie die Struktur ändern, müssen Sie auch diesen Code anpassen. Wenn eine Seite mehrere Oberflächen mit Tabs enthält, können Sie diesen Code in eine Funktion einschließen und `tabsContainer` als Argument übergeben.

```js
const tabsContainer = document.querySelector(".tabs");
const tabList = tabsContainer.querySelector(':scope > [role="tablist"]');
const tabs = Array.from(tabList.querySelectorAll(':scope > [role="tab"]'));
const tabPanelsContainer = tabsContainer.querySelector(":scope > .tab-panels");
const tabPanels = Array.from(
  tabPanelsContainer.querySelectorAll(':scope > [role="tabpanel"]'),
);
```

Für Tastaturinteraktionen überwachen wir das Ereignis [`keydown`](/de/docs/Web/API/Element/keydown_event) auf der `tablist`. In dieser Demo haben wir uns entschieden, den `tab` bei der Navigation mit den Pfeiltasten nicht zu aktivieren, sondern nur den Fokus zu verschieben. Wenn der `tab` angezeigt werden soll, sobald er den Fokus erhält, können Sie die später definierte Funktion `showTab()` aufrufen, statt für den neuen Tab lediglich `focus()` aufzurufen.

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

Das Tabpanel wird nur aktiviert, wenn ein `tab` den Fokus hat und <kbd>Enter</kbd> oder <kbd>Space</kbd> gedrückt wird, oder wenn auf einen `tab` geklickt wird. Zunächst definieren wir eine Funktion `showTab()`, die das anzuzeigende `tab`-Element entgegennimmt.

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

Nun können wir diese Funktion entweder bei einem `click`-Ereignis oder bei einem `keydown`-Ereignis aufrufen.

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Element {{HTMLElement('button')}}
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA-Rolle `tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
