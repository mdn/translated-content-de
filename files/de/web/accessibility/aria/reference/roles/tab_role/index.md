---
title: "ARIA: tab-Rolle"
short-title: tab
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

Die ARIA `tab`-Rolle zeigt ein interaktives Element innerhalb eines `tablist` an, das beim Aktivieren sein zugehöriges `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der `tab`-Rolle steuert die Sichtbarkeit eines zugehörigen Elements mit der [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)-Rolle. Das übliche Nutzererlebnis besteht aus einer Gruppe von visuellen Registerkarten über oder neben einem Inhaltsbereich. Wenn eine andere Registerkarte ausgewählt wird, ändert sich der Inhalt und die ausgewählte Registerkarte wird hervorgehoben.

Elemente mit der Rolle `tab` _müssen_ entweder ein Kind eines Elements mit der `tablist`-Rolle sein oder ihre `id` muss Teil der [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Eigenschaft einer `tablist` sein. Diese Kombination identifiziert für unterstützende Technologien, dass das Element Teil einer Gruppe verwandter Elemente ist. Einige unterstützende Technologien liefern eine Anzahl der Elemente mit der `tab`-Rolle innerhalb einer `tablist` und informieren die Benutzer darüber, welche `tab` sie aktuell anvisieren. Weiterhin _sollte_ ein Element mit der `tab`-Rolle die [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Eigenschaft enthalten, die ein entsprechendes `tabpanel` (das eine `tabpanel`-Rolle hat) durch die `id` dieses Elements identifiziert. Wenn ein Element mit der `tabpanel`-Rolle den Fokus hat oder ein Kind davon den Fokus hat, zeigt das an, dass das verbundene Element mit der `tab`-Rolle die aktive Registerkarte in einer `tablist` ist.

Wenn Elemente mit der `tab`-Rolle ausgewählt oder aktiv sind, sollten sie das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt haben. Andernfalls sollte ihr `aria-selected`-Attribut auf `false` gesetzt sein. Wenn eine einzeln wählbare `tablist` ausgewählt oder aktiv ist, sollte das `hidden`-Attribut der anderen `tabpanels` auf `true` gesetzt sein, bis der Benutzer die mit diesem `tabpanel` verbundene Registerkarte auswählt. Wenn eine mehrfach wählbare `tablist` ausgewählt oder aktiv ist, sollte ihr entsprechendes gesteuertes `tabpanel` sein [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut auf `true` gesetzt und ihr `hidden`-Attribut auf `false` gesetzt sein, andernfalls umgekehrt.

### Alle Nachkommen sind präsentationsbezogen

Es gibt einige Typen von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeit-API dargestellt werden, nur Text enthalten können. Zugänglichkeit-APIs haben keine Möglichkeit semantische Elemente in einem `tab` darzustellen. Um mit diesem Limit umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenselemente eines `tab`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `tab`-Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachkommen von `tab` präsentationsbezogen sind, ist der folgende Code gleichwertig:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Perspektive eines Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Schnipsel dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} gleichwertig sind:

```html
<div role="tab">Title of my tab</div>
```

### Zugeordnete Rollen und Attribute

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : boolean
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : `id` des Elements mit `tabpanel`-Rolle
- [id](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Inhalt

### Tastaturinteraktionen

| Taste                             | Aktion                                                                                                                                                                                                                                                                                          |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                    | Wenn der Fokus außerhalb der `tablist` ist, bewegt sich der Fokus zur aktiven Registerkarte. Wenn der Fokus auf der aktiven Registerkarte ist, bewegt sich der Fokus zum nächsten Element in der Tastaturfokus-Reihenfolge, idealerweise zum zugeordneten `tabpanel` der aktiven Registerkarte. |
| <kbd>→</kbd>                      | Fokussiert und aktiviert optional die nächste Registerkarte in der Registerkartenliste. Wenn die aktuelle Registerkarte die letzte Registerkarte in der Registerkartenliste ist, aktiviert sie die erste Registerkarte.                                                                         |
| <kbd>←</kbd>                      | Fokussiert und aktiviert optional die vorherige Registerkarte in der Registerkartenliste. Wenn die aktuelle Registerkarte die erste Registerkarte in der Registerkartenliste ist, aktiviert sie die letzte Registerkarte.                                                                       |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | Wenn eine Registerkarte im Fokus ist, aktiviert sie die Registerkarte, sodass ihr zugeordnetes Panel angezeigt wird.                                                                                                                                                                            |
| <kbd>Home</kbd>                   | Fokussiert und aktiviert optional die erste Registerkarte in der Registerkartenliste.                                                                                                                                                                                                           |
| <kbd>End</kbd>                    | Fokussiert und aktiviert optional die letzte Registerkarte in der Registerkartenliste.                                                                                                                                                                                                          |
| <kbd>Delete</kbd>                 | Entfernt, wenn erlaubt, die aktuell ausgewählte Registerkarte aus der Registerkartenliste.                                                                                                                                                                                                      |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Obwohl es Möglichkeiten gibt, ähnliche Funktionen wie Registerkarten ohne JavaScript zu erstellen, gibt es keine alternative Kombination nur mit HTML und CSS, die denselben Funktionsumfang bietet, der oben für zugängliche Registerkarten mit Inhalt erforderlich ist.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit `tabpanel`, um eine interaktive Gruppe von Registerkarteninhalten zu erstellen. Hier umschließen wir unsere Gruppe von Inhalten in einem `div`, wobei unsere `tablist` ein `aria-label` hat, das sie für unterstützende Technologien kennzeichnet. Jede `tab` ist eine `button` mit den zuvor erwähnten Attributen. Die erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` angewendet. Diese beiden Attribute müssen immer wie folgt koordiniert werden - sodass, wenn eine andere Registerkarte ausgewählt wird, sie dann `tabindex="0"` und `aria-selected="true"` angewendet hat. Alle nicht ausgewählten Registerkarten müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel`-Elemente haben `tabindex="0"`, um sie tabulatorfähig zu machen, und alle außer dem aktuell aktiven haben das `hidden`-Attribut. Das `hidden`-Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird.

> [!NOTE]
> Das Setzen von `tabindex` auf das Registerkartenpanel ist unnötig, wenn das erste Element im Registerkartenpanel fokussierbar ist (wie ein Link), da das Tabben zum Link auch den Inhalt des Panels vorliest. Wenn es jedoch Panels im Set gibt, deren erstes Inhaltselement nicht fokussierbar ist, sollten alle Tab-Panel-Elemente in einem Tab-Set fokussierbar sein, damit Benutzer von Bildschirmlesern konsistent zum Panelinhalt navigieren können.

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

Es gibt einige grundlegende Stile, die angewendet werden, um die Schaltflächen umzugestalten und den [`z-index`](/de/docs/Web/CSS/Reference/Properties/z-index) der `tab`-Elemente zu ändern, um die Illusion zu vermitteln, dass sie mit dem `tabpanel` für aktive Elemente verbunden sind, und die Illusion, dass inaktive Elemente hinter dem aktiven `tabpanel` liegen. Sie müssen den aktiven Tab klar von den inaktiven Tabs unterscheiden, z. B. durch dickere Rahmen oder größere Größe.

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

Die Benutzerinteraktion wird mit JavaScript gesteuert. Zuerst erhalten wir Referenzen auf unsere `tablist`, alle darin enthaltenen `tab`-Elemente, den Container unserer `tabpanel`-Elemente und alle `tabpanel`-Elemente in diesem Container. Dies basiert auf einigen Annahmen über die Struktur unseres HTML, sodass Sie, wenn Sie die Struktur ändern, auch diesen Code ändern müssen. Wenn Sie mehrere registerkartenbasierte Schnittstellen auf einer Seite haben, können Sie diesen Code in eine Funktion einpacken und `tabsContainer` als Argument übergeben.

```js
const tabsContainer = document.querySelector(".tabs");
const tabList = tabsContainer.querySelector(':scope > [role="tablist"]');
const tabs = Array.from(tabList.querySelectorAll(':scope > [role="tab"]'));
const tabPanelsContainer = tabsContainer.querySelector(":scope > .tab-panels");
const tabPanels = Array.from(
  tabPanelsContainer.querySelectorAll(':scope > [role="tabpanel"]'),
);
```

Für Tastaturinteraktionen hören wir auf das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis auf der `tablist`. In diesem Demo haben wir uns entschieden, die `tab` nicht zu aktivieren, wenn der Benutzer mit den Pfeiltasten navigiert, sondern lediglich den Fokus zu verschieben. Wenn Sie die `tab` anzeigen möchten, wenn sie den Fokus erhält, können Sie die `showTab()`-Funktion (die später definiert wird) anstelle von `focus()` auf dem neuen Tab aufrufen.

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

Das Registerkarten-Panel wird nur aktiviert, indem entweder <kbd>Enter</kbd> oder <kbd>Space</kbd> gedrückt werden, während eine `tab` im Fokus ist, oder indem auf eine `tab` geklickt wird. Zuerst definieren wir eine Funktion `showTab()`, die das `tab`-Element aufnimmt, das angezeigt werden soll.

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

Es wird empfohlen, ein {{HTMLElement('button')}}-Element mit der Rolle `tab` für ihre eingebauten funktionalen und zugänglichen Funktionen zu verwenden, anstatt diese selbst hinzufügen zu müssen. Zur Steuerung der Tabulatortastenfunktionalität für Elemente mit der Rolle `tab` wird empfohlen, alle nicht-aktiven Elemente auf `tabindex="-1"` zu setzen und das aktive Element auf `tabindex="0"`.

## Vorrangordnung

Welche verwandten Eigenschaften gibt es, und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen, welche Eigenschaft wird gegenüber dieser bevorzugt, und welche Eigenschaft wird überschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}}-Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
