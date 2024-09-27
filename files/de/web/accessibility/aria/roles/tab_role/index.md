---
title: "ARIA: tab Rolle"
slug: Web/Accessibility/ARIA/Roles/tab_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA `tab` Rolle weist auf ein interaktives Element innerhalb eines `tablist` hin, das bei Aktivierung sein zugehöriges `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der `tab` Rolle steuert die Sichtbarkeit eines zugehörigen Elements mit der [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) Rolle. Das häufigste Benutzererlebnis-Muster ist eine Gruppe visueller Tabs oberhalb oder neben einem Inhaltsbereich. Durch die Auswahl eines anderen Tabs ändert sich der Inhalt und der ausgewählte Tab wird prominenter dargestellt als die anderen Tabs.

Elemente mit der Rolle `tab` _müssen_ entweder ein Kind eines Elements mit der `tablist` Rolle sein oder ihre `id` muss Teil der [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Eigenschaft eines `tablist` sein. Diese Kombination zeigt unterstützenden Technologien, dass das Element Teil einer Gruppe verwandter Elemente ist. Einige unterstützende Technologien zählen die Anzahl der `tab` Rolle Elemente innerhalb eines `tablist` und informieren die Benutzer, welches `tab` sie aktuell fokussiert haben. Weiterhin sollte ein Element mit der `tab` Rolle die [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) Eigenschaft enthalten, die ein entsprechendes `tabpanel` (das eine `tabpanel` Rolle hat) durch die `id` dieses Elements identifiziert. Wenn ein Element mit der `tabpanel` Rolle oder ein Kind davon im Fokus steht, bedeutet dies, dass das verbundene Element mit der `tab` Rolle der aktive Tab in einem `tablist` ist.

Wenn Elemente mit der `tab` Rolle ausgewählt oder aktiv sind, sollten sie das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Attribut auf `true` gesetzt haben. Andernfalls sollte ihr `aria-selected` Attribut auf `false` gesetzt sein. Wenn ein einzig wählbares `tablist` ausgewählt oder aktiv ist, sollte das `hidden` Attribut der anderen Tabpanels auf true gesetzt sein, bis der Benutzer den Tab auswählt, der mit diesem Tabpanel verbunden ist. Wenn ein mehrfach wählbares `tablist` ausgewählt oder aktiv ist, sollte sein zugehöriges kontrolliertes `tabpanel` das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Attribut auf `true` und sein `hidden` Attribut auf `false` gesetzt haben, andernfalls umgekehrt.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `tab` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines jeden `tab` Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `tab` Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachkommen von `tab` präsentational sind, entspricht der folgende Code:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Perspektive eines Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Codeschnipsel dem folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) entsprechen:

```html
<div role="tab">Title of my tab</div>
```

### Zugehörige Rollen und Attribute

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : boolesch
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
  - : `id` des Elements mit der `tabpanel` Rolle
- [id](/de/docs/Web/HTML/Global_attributes#id)
  - : Inhalt

### Tastaturinteraktionen

| Taste             | Aktion                                                                                                                                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>Tab</kbd>    | Wenn der Fokus außerhalb der `tablist` ist, bewegt sich der Fokus auf den aktiven Tab. Wenn der Fokus auf dem aktiven Tab ist, bewegt sich der Fokus auf das nächste Element in der Tastaturfokus-Reihenfolge, idealerweise das zugehörige `tabpanel`. |
| <kbd>→</kbd>      | Fokussiert und aktiviert optional den nächsten Tab in der Tab-Liste. Wenn der aktuelle Tab der letzte in der Tab-Liste ist, aktiviert er den ersten Tab.                                                                                               |
| <kbd>←</kbd>      | Fokussiert und aktiviert optional den vorherigen Tab in der Tab-Liste. Wenn der aktuelle Tab der erste in der Tab-Liste ist, aktiviert er den letzten Tab.                                                                                             |
| <kbd>Delete</kbd> | Entfernt, wenn erlaubt, den derzeit ausgewählten Tab aus der Tab-Liste.                                                                                                                                                                                |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Es gibt zwar Möglichkeiten, tab-ähnliche Funktionalität ohne JavaScript zu erstellen, aber es gibt keine Ersatzkombination, die nur HTML und CSS verwendet, die dieselbe Funktionalität bereitstellt, die oben für zugängliche Tabs mit Inhalt erforderlich ist.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit `tabpanel`, um eine interaktive Gruppe von Registerkarteninhalten zu erstellen. Wir umschließen unsere Gruppe von Inhalten in einem `div`, wobei unser `tablist` ein `aria-label` hat, das es für unterstützende Technologien kennzeichnet. Jedes `tab` ist ein `button` mit den zuvor erwähnten Attributen. Das erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` angewendet. Diese beiden Attribute müssen immer so koordiniert werden – wenn ein anderer Tab ausgewählt wird, wird ihm dann `tabindex="0"` und `aria-selected="true"` zugewiesen. Alle nicht ausgewählten Tabs müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel`-Elemente haben `tabindex="0"`, um sie tabbar zu machen, und alle außer dem derzeit aktiven haben das `hidden`-Attribut. Das `hidden`-Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird. Es gibt einige grundlegende Stile, die die Schaltflächen umgestalten und den [`z-index`](/de/docs/Web/CSS/z-index) von `tab`-Elementen ändern, um die Illusion zu erwecken, dass sie sich mit dem `tabpanel` der aktiven Elemente verbinden und dass inaktive Elemente hinter dem aktiven `tabpanel` sind.

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

Mit JavaScript müssen wir zwei Dinge tun: Wir müssen den Fokus und den Tabindex unserer `tab`-Elemente mit den rechten und linken Pfeilen ändern, und wir müssen den aktiven `tab` und `tabpanel` ändern, wenn wir auf ein `tab` klicken.

Um das erste zu erreichen, hören wir auf das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Event auf der `tablist`. Wenn das Event's [`key`](/de/docs/Web/API/KeyboardEvent/key) `ArrowRight` oder `ArrowLeft` ist, reagieren wir auf das Event. Wir beginnen damit, den `tabindex` des aktuellen `tab`-Elements auf -1 zu setzen, um es nicht mehr tabbar zu machen. Dann, wenn der rechte Pfeil gedrückt wird, erhöhen wir unseren Tabfokuszähler um eins. Wenn der Zähler größer als die Anzahl der `tab`-Elemente ist, die wir haben, kehren wir zum ersten Tab zurück, indem wir diesen Zähler auf 0 setzen. Wenn der linke Pfeil gedrückt wird, verringern wir unseren Tabfokuszähler um eins, und wenn er dann weniger als 0 ist, setzen wir ihn auf die Anzahl der `tab`-Elemente minus eins (um zum letzten Element zu gelangen). Schließlich setzen wir den `focus` auf das `tab`-Element, dessen Index dem Tabfokuszähler entspricht, und setzen seinen `tabindex` auf 0, um es tabbar zu machen.

Um den aktiven `tab` und `tabpanel` zu ändern, haben wir eine Funktion, die das Event annimmt, das Element erhält, das das Event ausgelöst hat, das übergeordnete Element des auslösenden Elements und sein übergeordnetes Element. Dann finden wir alle Tabs mit `aria-selected="true"` im übergeordneten Element und setzen es auf `false`, dann wird das `aria-selected` des auslösenden Elements auf `true` gesetzt. Danach finden wir alle `tabpanel`-Elemente im übergeordneten Element, machen sie alle `hidden` und wählen schließlich das Element, dessen `id` der `aria-controls` des auslösenden `tab` entspricht und entfernen das `hidden`-Attribut, wodurch es sichtbar wird.

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

Es wird empfohlen, ein {{HTMLElement('button')}}-Element mit der Rolle `tab` zu verwenden, aufgrund ihrer integrierten funktionalen und zugänglichen Eigenschaften, anstatt sie selbst hinzufügen zu müssen. Um die Tab-Tastenfunktionalität für Elemente mit der Rolle `tab` zu steuern, wird empfohlen, alle nicht aktiven Elemente auf `tabindex="-1"` und das aktive Element auf `tabindex="0"` zu setzen.

## Prioritätsreihenfolge

Welche sind die zugehörigen Eigenschaften und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen, welche Eigenschaft Vorrang vor dieser hat und welche Eigenschaft überschrieben wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}} Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
