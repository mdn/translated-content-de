---
title: "ARIA: tab Rolle"
slug: Web/Accessibility/ARIA/Roles/tab_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA `tab` Rolle kennzeichnet ein interaktives Element innerhalb einer `tablist`, das bei Aktivierung das zugehörige `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der `tab` Rolle steuert die Sichtbarkeit eines zugeordneten Elements mit der [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) Rolle. Das übliche Benutzererlebnismuster ist eine Gruppe visueller Tabs über oder neben einem Inhaltsbereich, bei dem die Auswahl eines anderen Tabs den Inhalt ändert und der ausgewählte Tab hervorgehobener erscheint als die anderen Tabs.

Elemente mit der Rolle `tab` _müssen_ entweder ein Kind eines Elements mit der `tablist` Rolle sein oder ihre `id` als Teil der [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Eigenschaft eines `tablist` haben. Diese Kombination identifiziert gegenüber unterstützender Technologie, dass das Element Teil einer Gruppe verwandter Elemente ist. Einige unterstützende Technologien geben die Anzahl der Elemente mit der `tab` Rolle innerhalb einer `tablist` an und informieren Benutzer darüber, welchen `tab` sie derzeit fokussiert haben. Weiterhin _sollte_ ein Element mit der `tab` Rolle die [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) Eigenschaft enthalten, die ein entsprechendes `tabpanel` (das eine `tabpanel` Rolle hat) anhand der `id` dieses Elements identifiziert. Wenn ein Element mit der `tabpanel` Rolle den Fokus hat oder ein Kind davon den Fokus hat, zeigt das an, dass das verbundene Element mit der `tab` Rolle der aktive Tab in einer `tablist` ist.

Wenn Elemente mit der `tab` Rolle ausgewählt oder aktiv sind, sollten sie das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Attribut auf `true` gesetzt haben. Andernfalls sollte ihr `aria-selected` Attribut auf `false` gesetzt werden. Wenn eine einzelauswählbare `tablist` ausgewählt oder aktiv ist, sollte das `hidden` Attribut der anderen Tabpanels auf true gesetzt werden, bis der Benutzer den Tab auswählt, der mit diesem Tabpanel verknüpft ist. Wenn eine mehroptionale `tablist` ausgewählt oder aktiv ist, sollte ihr entsprechendes kontrolliertes `tabpanel` das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Attribut auf `true` und ihr `hidden` Attribut auf `false` gesetzt haben, andernfalls umgekehrt.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeit-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `tab` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommelemente eines jeden `tab` Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `tab` Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachkommen eines `tab` präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorhergehenden Code-Schnipsel dem folgenden im {{Glossary("Accessibility_tree", "Zugängigkeitsbaum")}} entsprechen:

```html
<div role="tab">Title of my tab</div>
```

### Zugehörige Rollen und Attribute

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : boolean
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
  - : `id` des Elements mit der `tabpanel` Rolle
- [id](/de/docs/Web/HTML/Global_attributes#id)
  - : Inhalt

### Tastatur-Interaktionen

| Taste             | Aktion                                                                                                                                                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>    | Wenn der Fokus außerhalb der `tablist` ist, bewegt er den Fokus auf den aktiven Tab. Wenn der Fokus auf dem aktiven Tab liegt, bewegt er den Fokus auf das nächste Element in der Tastaturfokus-Reihenfolge, idealerweise das zugeordnete `tabpanel`. |
| <kbd>→</kbd>      | Fokussiert und aktiviert optional den nächsten Tab in der Tabliste. Wenn der aktuelle Tab der letzte Tab in der Tabliste ist, aktiviert er den ersten Tab.                                                                                            |
| <kbd>←</kbd>      | Fokussiert und aktiviert optional den vorherigen Tab in der Tabliste. Wenn der aktuelle Tab der erste Tab in der Tabliste ist, aktiviert er den letzten Tab.                                                                                          |
| <kbd>Delete</kbd> | Entfernt den aktuell ausgewählten Tab aus der Tabliste, wenn erlaubt.                                                                                                                                                                                 |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Während es Möglichkeiten gibt, tab-ähnliche Funktionalität ohne JavaScript zu erstellen, gibt es keine Ersatzkombination, die nur HTML und CSS verwendet, die denselben Funktionsumfang bietet, der oben für zugängliche Tabs mit Inhalten erforderlich ist.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit `tabpanel`, um eine interaktive Gruppe von Registerkarteninhalten zu erstellen. Hier umschließen wir unsere Inhaltsgruppe in einem `div`, wobei unsere `tablist` ein `aria-label` hat, das sie für unterstützende Technologie kennzeichnet. Jeder `tab` ist ein `button` mit den zuvor erwähnten Attributen. Der erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` angewendet. Diese beiden Attribute müssen immer so koordiniert werden, dass, wenn ein anderer Tab ausgewählt wird, dieser dann `tabindex="0"` und `aria-selected="true"` angewendet hat. Alle nicht ausgewählten Tabs müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel`-Elemente haben `tabindex="0"`, um sie erreichbarer zu machen, und alle außer dem aktuell aktiven haben das `hidden` Attribut. Das `hidden` Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird. Es wird ein einfaches Styling angewendet, das die Schaltflächen umgestaltet und den [`z-index`](/de/docs/Web/CSS/z-index) von `tab`-Elementen ändert, um die Illusion zu vermitteln, dass diese mit dem `tabpanel` für aktive Elemente verbunden sind, und die Illusion, dass inaktive Elemente hinter dem aktiven `tabpanel` liegen.

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

Es gibt zwei Dinge, die wir mit JavaScript tun müssen: wir müssen den Fokus und Tab-Index unserer `tab`-Elemente mit den rechten und linken Pfeiltasten ändern, und wir müssen den aktiven `tab` und `tabpanel` ändern, wenn wir auf einen `tab` klicken.

Um das erste zu erreichen, lauschen wir auf das [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignis der `tablist`. Wenn das Ereignis's [`key`](/de/docs/Web/API/KeyboardEvent/key) `ArrowRight` oder `ArrowLeft` ist, reagieren wir auf das Ereignis. Wir beginnen, indem wir den `tabindex` des aktuellen `tab`-Elements auf -1 setzen, was es nicht mehr erreichbarer macht. Falls die rechte Pfeiltaste gedrückt wird, erhöhen wir unseren Tab-Fokus-Zähler um eins. Wenn der Zähler größer ist als die Anzahl der `tab`-Elemente, die wir haben, kehren wir zum ersten Tab zurück, indem wir den Zähler auf 0 setzen. Wenn die linke Pfeiltaste gedrückt wird, verringern wir unseren Tab-Fokus-Zähler um eins, und wenn er dann kleiner als 0 ist, setzen wir ihn auf die Anzahl der `tab`-Elemente minus eins (um auf das letzte Element zu gelangen). Schließlich setzen wir den `focus` auf das `tab`-Element, dessen Index dem Tab-Fokus-Zähler entspricht, und setzen dessen `tabindex` auf 0, damit es erreichbar ist.

Um den aktiven `tab` und `tabpanel` zu ändern, haben wir eine Funktion, die das Ereignis aufnimmt, das Element erhält, das das Ereignis ausgelöst hat, das übergeordnete Element des auslösenden Elements und dessen übergeordnetes Element. Wir finden dann alle Tabs mit `aria-selected="true"` innerhalb des übergeordneten Elements und setzen sie auf `false`, dann setzen wir `aria-selected` des auslösenden Elements auf `true`. Danach finden wir alle `tabpanel`-Elemente im übergeordneten Element, machen sie alle `hidden`, und wählen schließlich das Element aus, dessen `id` dem `aria-controls` des auslösenden `tab` entspricht und das `hidden` Attribut entfernt wird, damit es sichtbar wird.

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

{{EmbedLiveSample("Example", 600, 130)}}

## Best Practices

Es wird empfohlen, ein {{HTMLElement('button')}} Element mit der Rolle `tab` aufgrund ihrer eingebauten funktionalen und zugänglichen Funktionen zu verwenden, anstatt sie selbst hinzufügen zu müssen. Für die Steuerung der Tabulatortastenfunktionalität für Elemente mit der Rolle `tab` wird empfohlen, alle nicht-aktiven Elemente auf `tabindex="-1"` zu setzen und das aktive Element auf `tabindex="0"`.

## Vorrangordnung

Welche sind die verwandten Eigenschaften, in welcher Reihenfolge wird dieses Attribut oder die Eigenschaft gelesen, welche Eigenschaft hat Vorrang vor dieser und welche Eigenschaft wird überschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}} Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
