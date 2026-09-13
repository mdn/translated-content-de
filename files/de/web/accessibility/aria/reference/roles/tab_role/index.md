---
title: "ARIA: tab role"
short-title: tab
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die ARIA `tab` Rolle kennzeichnet ein interaktives Element innerhalb eines `tablist`, das beim Aktivieren sein zugehöriges `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der `tab` Rolle steuert die Sichtbarkeit eines zugehörigen Elements mit der [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) Rolle. Das übliche Benutzererfahrungsmuster besteht aus einer Gruppe visueller Registerkarten über oder neben einem Inhaltsbereich, und die Auswahl einer anderen Registerkarte ändert den Inhalt und macht die ausgewählte Registerkarte hervorstechender als die anderen Registerkarten.

Elemente mit der Rolle `tab` _müssen_ entweder ein Kind eines Elements mit der `tablist` Rolle sein oder ihr `id` als Teil der [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Eigenschaft eines `tablist` haben. Diese Kombination signalisiert Unterstützungstechnologien, dass das Element Teil einer Gruppe zusammengehöriger Elemente ist. Einige Assistenztechnologien geben die Anzahl der Elemente mit der `tab` Rolle innerhalb eines `tablist` an und informieren Benutzer darüber, welche `tab` sie derzeit anvisiert haben. Darüber hinaus _sollte_ ein Element mit der `tab` Rolle die [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Eigenschaft enthalten, die ein entsprechendes `tabpanel` (das eine `tabpanel` Rolle hat) mit der `id` dieses Elements identifiziert. Wenn ein Element mit der `tabpanel` Rolle oder ein Kind davon den Fokus hat, zeigt dies an, dass das verbundene Element mit der `tab` Rolle die aktive Registerkarte in einem `tablist` ist.

Wenn Elemente mit der `tab` Rolle ausgewählt oder aktiv sind, sollten sie ihr [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut auf `true` setzen. Andernfalls sollte ihr `aria-selected` Attribut auf `false` gesetzt sein. Wenn ein einzelnes auswählbares `tablist` ausgewählt oder aktiv ist, sollte das `hidden` Attribut der anderen Tabpanels auf true gesetzt sein, bis der Benutzer die Registerkarte auswählt, die mit diesem Tabpanel verbunden ist. Wenn ein mehrfach auswählbares `tablist` ausgewählt oder aktiv ist, sollte das entsprechende gesteuerte `tabpanel` sein [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut auf `true` setzen und sein `hidden` Attribut auf `false`, andernfalls umgekehrt.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei der Darstellung in einer Plattform-Zugriffs-API nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente in einem `tab` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`präsentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `tab` Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Beispielsweise betrachte man das folgende `tab` Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachkommen von `tab` präsentational sind, entspricht der folgende Code:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Perspektive eines Benutzers der Hilfstechnologie existiert die Überschrift nicht, da die vorhergehenden Code-Snippets im {{Glossary("Accessibility_tree", "Zugriff-Baum")}} dem folgenden gleichwertig sind:

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

| Taste                             | Aktion                                                                                                                                                                                                                                                                                                   |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                    | Wenn der Fokus außerhalb des `tablist` ist, wird der Fokus auf die aktive Registerkarte verschoben. Wenn der Fokus auf der aktiven Registerkarte ist, wird der Fokus auf das nächste Element im Tastaturfokus-Reihenfolge verschoben, idealerweise das zugeordnete `tabpanel` der aktiven Registerkarte. |
| <kbd>→</kbd>                      | Fokusiert und optional aktiviert die nächste Registerkarte in der Registerkartenliste. Wenn die aktuelle Registerkarte die letzte in der Registerkartenliste ist, wird die erste Registerkarte aktiviert.                                                                                                |
| <kbd>←</kbd>                      | Fokusiert und optional aktiviert die vorherige Registerkarte in der Registerkartenliste. Wenn die aktuelle Registerkarte die erste in der Registerkartenliste ist, wird die letzte Registerkarte aktiviert.                                                                                              |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | Aktiviert die Registerkarte, wenn der Fokus auf einer Registerkarte liegt, und zeigt ihr zugeordnetes Panel an.                                                                                                                                                                                          |
| <kbd>Home</kbd>                   | Fokusiert und optional aktiviert die erste Registerkarte in der Registerkartenliste.                                                                                                                                                                                                                     |
| <kbd>End</kbd>                    | Fokusiert und optional aktiviert die letzte Registerkarte in der Registerkartenliste.                                                                                                                                                                                                                    |
| <kbd>Delete</kbd>                 | Entfernt, wenn erlaubt, die derzeit ausgewählte Registerkarte aus der Registerkartenliste.                                                                                                                                                                                                               |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Während es Wege gibt, Registerkarten-ähnliche Funktionalität ohne JavaScript zu erstellen, gibt es keine Ersatzkombination unter Verwendung nur von HTML und CSS, die denselben Satz von Funktionen bietet, der oben für zugängliche Registerkarten mit Inhalten erforderlich ist.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit `tabpanel`, um eine interaktive Gruppe von Registerkarteninhalten zu erstellen. Wir umschließen unsere Inhaltsgruppe in einem `div`, mit unserem `tablist`, das ein `aria-label` hat, das es für Assistenztechnologien kennzeichnet. Jede `tab` ist ein `button` mit den zuvor erwähnten Attributen. Die erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` angewendet. Diese beiden Attribute müssen immer so koordiniert werden – so dass, wenn eine andere Registerkarte ausgewählt wird, sie `tabindex="0"` und `aria-selected="true"` angewendet hat. Alle nicht ausgewählten Registerkarten müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel` Elemente haben `tabindex="0"`, um sie fokussierbar zu machen, und alle außer dem derzeit aktiven haben das `hidden` Attribut. Das `hidden` Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird.

> [!NOTE]
> Das Setzen von `tabindex` auf dem Tabpanel ist unnötig, wenn das erste Element im Tabpanel fokussierbar ist (wie ein Link), da das Springen zum Link auch dazu führt, dass der Inhalt des Panels gelesen wird. Wenn jedoch eines der Panels in der Gruppe als erstes Inhalts-Element nicht fokussierbar ist, sollten alle Tabpanel-Elemente in einer Tab-Gruppe fokussierbar sein, damit Benutzer von Bildschirmlesern konsistent zum Panel-Inhalt navigieren können.

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

Es gibt einige grundlegende Stiländerungen, die die Schaltflächen umstylen und den {{cssxref("z-index")}} der `tab` Elemente ändern, um die Illusion zu erzeugen, dass sie sich mit dem `tabpanel` für aktive Elemente verbinden, und die Illusion, dass inaktive Elemente hinter dem aktiven `tabpanel` liegen. Es ist wichtig, die aktive Registerkarte deutlich von den inaktiven Registerkarten zu unterscheiden, etwa durch dickere Ränder oder größere Größe.

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

Die Benutzerinteraktion wird mit JavaScript gesteuert. Wir erhalten zuerst Referenzen zu unserem `tablist`, allen `tab` Elementen darin, dem Container unserer `tabpanel` Elemente und allen `tabpanel` Elementen in diesem Container. Dies basiert auf einigen Annahmen über die Struktur unseres HTML, also wenn Sie die Struktur ändern, müssen Sie diesen Code ändern. Wenn Sie mehrere Registerkarten-Schnittstellen auf einer Seite haben, können Sie diesen Code in einer Funktion kapseln und `tabsContainer` als Argument übergeben.

```js
const tabsContainer = document.querySelector(".tabs");
const tabList = tabsContainer.querySelector(':scope > [role="tablist"]');
const tabs = Array.from(tabList.querySelectorAll(':scope > [role="tab"]'));
const tabPanelsContainer = tabsContainer.querySelector(":scope > .tab-panels");
const tabPanels = Array.from(
  tabPanelsContainer.querySelectorAll(':scope > [role="tabpanel"]'),
);
```

Für Tastaturinteraktionen hören wir das [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignis auf dem `tablist` ab. In diesem Demo haben wir uns entschieden, die `tab` nicht zu aktivieren, wenn der Benutzer mit den Pfeiltasten navigiert, sondern nur den Fokus zu verschieben. Wenn Sie die `tab` anzeigen möchten, wenn sie den Fokus erhält, können Sie die `showTab()` Funktion (die später definiert wird) anstelle von nur `focus()` auf dem neuen Tab aufrufen.

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

Das Tabpanel wird entweder durch Drücken der Tasten <kbd>Enter</kbd> oder <kbd>Space</kbd> aktiviert, während eine `tab` den Fokus hat, oder durch Klicken auf eine `tab`. Wir definieren zuerst eine Funktion `showTab()`, die das anzuzeigende `tab` Element aufnimmt.

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

Es wird empfohlen, ein {{HTMLElement('button')}} Element mit der Rolle `tab` für deren eingebaute funktionale und zugängliche Eigenschaften zu verwenden, anstatt diese selbst hinzuzufügen zu müssen. Um die Tab-Taste Funktionalität für Elemente mit der Rolle `tab` zu steuern, wird empfohlen, alle nicht aktiven Elemente auf `tabindex="-1"` und das aktive Element auf `tabindex="0"` zu setzen.

## Vorrangordnung

Welche zugehörigen Eigenschaften gibt es und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen, welche Eigenschaft hat Vorrang vor dieser und welche Eigenschaft wird überschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}} Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
