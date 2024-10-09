---
title: "ARIA: tab Rolle"
slug: Web/Accessibility/ARIA/Roles/tab_role
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Die ARIA-`tab`-Rolle zeigt ein interaktives Element innerhalb eines `tablist` an, das, wenn es aktiviert wird, sein zugehöriges `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der `tab`-Rolle steuert die Sichtbarkeit eines zugehörigen Elements mit der [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)-Rolle. Das übliche Benutzererlebnis-Muster ist eine Gruppe von visuellen Tabs oberhalb oder seitlich eines Inhaltsbereichs. Wenn ein anderer Tab ausgewählt wird, ändert sich der Inhalt und der ausgewählte Tab wird prominenter als die anderen Tabs.

Elemente mit der `tab`-Rolle _müssen_ entweder ein Kind eines Elements mit der `tablist`-Rolle sein oder ihre `id` muss Teil der [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)-Eigenschaft eines `tablist` sein. Diese Kombination identifiziert gegenüber unterstützenden Technologien, dass das Element Teil einer Gruppe verwandter Elemente ist. Einige unterstützende Technologien geben die Anzahl der `tab`-Rollen-Elemente innerhalb eines `tablist` an und informieren die Benutzer, auf welchen `tab` sie aktuell abzielen. Darüber hinaus _sollte_ ein Element mit der `tab`-Rolle die [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)-Eigenschaft enthalten, die ein entsprechendes `tabpanel` (das eine `tabpanel`-Rolle hat) durch die `id` dieses Elements identifiziert. Wenn ein Element mit der `tabpanel`-Rolle den Fokus hat oder ein Kind davon den Fokus hat, zeigt das an, dass das verbundene Element mit der `tab`-Rolle der aktive Tab in einer `tablist` ist.

Wenn Elemente mit der `tab`-Rolle ausgewählt oder aktiv sind, sollten sie ihr [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Attribut auf `true` setzen. Andernfalls sollte ihr `aria-selected`-Attribut auf `false` gesetzt werden. Wenn eine einzelauswählbare `tablist` ausgewählt oder aktiv ist, sollte das `hidden`-Attribut der anderen Tabpanels auf true gesetzt werden, bis der Benutzer den Tab auswählt, der mit diesem Tabpanel verknüpft ist. Wenn eine mehrfach auswählbare `tablist` ausgewählt oder aktiv ist, sollte ihr entsprechendes kontrolliertes `tabpanel` sein [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Attribut auf `true` und sein `hidden`-Attribut auf `false` gesetzt haben, ansonsten das Gegenteil.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente, die in einem `tab` enthalten sind, darzustellen. Um dieses Limit zu umgehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle nachfahren Elemente eines `tab`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel, beachten Sie das folgende `tab`-Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachfahren von `tab` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Perspektive eines Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets im {{Glossary("Accessibility_tree", "Zugriffsbaum")}} dem folgenden gleichwertig sind:

```html
<div role="tab">Title of my tab</div>
```

### Zugehörige Rollen und Attribute

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : boolean
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
  - : `id` des Elements mit der `tabpanel`-Rolle
- [id](/de/docs/Web/HTML/Global_attributes/id)
  - : Inhalt

### Tastaturinteraktionen

| Schlüssel         | Aktion                                                                                                                                                                                                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>    | Verschiebt den Fokus, wenn er sich außerhalb der `tablist` befindet, auf den aktiven Tab. Wenn der Fokus auf dem aktiven Tab ist, verschiebt er den Fokus auf das nächste Element in der Tastaturfokus-Reihenfolge, idealerweise das zugehörige `tabpanel` des aktiven Tabs. |
| <kbd>→</kbd>      | Fokussiert und aktiviert optional den nächsten Tab in der Tab-Liste. Wenn der aktuelle Tab der letzte Tab in der Liste ist, wird der erste Tab aktiviert.                                                                                                                    |
| <kbd>←</kbd>      | Fokussiert und aktiviert optional den vorherigen Tab in der Tab-Liste. Wenn der aktuelle Tab der erste Tab in der Liste ist, wird der letzte Tab aktiviert.                                                                                                                  |
| <kbd>Delete</kbd> | Entfernt, wenn erlaubt, den aktuell ausgewählten Tab aus der Tab-Liste.                                                                                                                                                                                                      |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Obwohl es Möglichkeiten gibt, eine tab-ähnliche Funktionalität ohne JavaScript zu erstellen, gibt es keine Ersatzkombination, die nur HTML und CSS verwendet und die gleiche Funktionalität bietet, die oben für problemlos zugängliche Tabs mit Inhalt erforderlich ist.

## Beispiel

Dieses Beispiel kombiniert die `tab`-Rolle mit `tablist` und Elementen mit `tabpanel`, um eine interaktive Gruppe von geteilten Inhalten zu erstellen. Hier schließen wir unsere Gruppe von Inhalten in ein `div` ein, wobei unsere `tablist` ein `aria-label` hat, das es für unterstützende Technologien kennzeichnet. Jeder `tab` ist ein `button` mit den zuvor erwähnten Attributen. Der erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` angewendet. Diese beiden Attribute müssen immer so koordiniert werden—sodass, wenn ein anderer Tab ausgewählt wird, dieser dann `tabindex="0"` und `aria-selected="true"` erhält. Alle nicht ausgewählten Tabs müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel`-Elemente haben `tabindex="0"`, um sie kartenfähig zu machen, und alle außer dem aktuell aktiven haben das `hidden`-Attribut. Das `hidden`-Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird. Es gibt einige grundlegende Stile, die angewendet werden, um die Knöpfe umzugestalten und den [`z-index`](/de/docs/Web/CSS/z-index) der `tab`-Elemente zu ändern, um die Illusion zu erzeugen, dass es sich mit dem `tabpanel` für aktive Elemente verbindet, und die Illusion, dass inaktive Elemente hinter dem aktiven `tabpanel` liegen.

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

Es gibt zwei Aufgaben, die wir mit JavaScript ausführen müssen: Wir müssen den Fokus und den Tab-Index unserer `tab`-Elemente mit den rechten und linken Pfeilen ändern, und wir müssen den aktiven `tab` und `tabpanel` ändern, wenn wir auf einen `tab` klicken.

Um das Erste zu erreichen, hören wir auf das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis auf dem `tablist`. Wenn die [`key`](/de/docs/Web/API/KeyboardEvent/key) des Ereignisses `ArrowRight` oder `ArrowLeft` ist, reagieren wir auf das Ereignis. Wir beginnen damit, den `tabindex` des aktuellen `tab`-Elements auf -1 zu setzen, sodass es nicht mehr kartenfähig ist. Dann, wenn der rechte Pfeil gedrückt wird, erhöhen wir unseren Tab-Fokus-Zähler um eins. Wenn der Zähler größer als die Anzahl der `tab`-Elemente ist, gehen wir zurück zum ersten Tab, indem wir diesen Zähler auf 0 setzen. Wenn der linke Pfeil gedrückt wird, verringern wir unseren Tab-Fokus-Zähler um eins, und wenn er dann weniger als 0 ist, setzen wir ihn auf die Anzahl der `tab`-Elemente minus eins (um zum letzten Element zu gelangen). Schließlich setzen wir den `focus` auf das `tab`-Element, dessen Index gleich dem Tab-Fokus-Zähler ist, und setzen seinen `tabindex` auf 0, um es kartierfähig zu machen.

Um den aktiven `tab` und `tabpanel` zu ändern, haben wir eine Funktion, die das Ereignis übernimmt, das Element abruft, das das Ereignis ausgelöst hat, das übergeordnete Element des auslösenden Elements und sein übergeordnetes Element. Dann finden wir alle Tabs mit `aria-selected="true"` innerhalb des übergeordneten Elements und setzen es auf `false`, dann setzen wir das `aria-selected` des auslösenden Elements auf `true`. Danach finden wir alle `tabpanel`-Elemente im übergeordneten Element, machen sie alle `hidden`, und schließlich wählen wir das Element aus, dessen `id` gleich dem `aria-controls` des auslösenden `tab` ist, und entfernen das `hidden`-Attribut, um es sichtbar zu machen.

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

## Beste Praktiken

Es wird empfohlen, ein {{HTMLElement('button')}}-Element mit der Rolle `tab` zu verwenden, da diese eingebaute funktionale und zugängliche Funktionen haben, anstatt sie selbst hinzufügen zu müssen. Für das Steuern der Tab-Taste-Funktionalität für Elemente mit der Rolle `tab` wird empfohlen, alle nicht-aktiven Elemente auf `tabindex="-1"` zu setzen und das aktive Element auf `tabindex="0"`.

## Prioritätsreihenfolge

Welche verwandten Eigenschaften gibt es, und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen, welche Eigenschaft Vorrang vor dieser hat und welche Eigenschaft überschrieben wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}}-Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
