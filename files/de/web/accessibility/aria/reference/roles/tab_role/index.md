---
title: "ARIA: Rolle `tab`"
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die ARIA-Rolle `tab` kennzeichnet ein interaktives Element innerhalb eines `tablist`, das bei Aktivierung sein zugehöriges `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der Rolle `tab` steuert die Sichtbarkeit eines zugehörigen Elements mit der Rolle [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role). Das häufige Nutzererfahrungsmuster ist eine Gruppe visueller Tabs über oder neben einem Inhaltsbereich, und das Auswählen eines anderen Tabs ändert den Inhalt und macht den ausgewählten Tab hervorstechender als die anderen Tabs.

Elemente mit der Rolle `tab` _müssen_ entweder ein Kind eines Elements mit der Rolle `tablist` sein oder ihre `id` als Teil des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Eigenschaft eines `tablist` haben. Diese Kombination identifiziert für unterstützende Technologien, dass das Element Teil einer Gruppe verwandter Elemente ist. Einige unterstützende Technologien geben eine Anzahl der Elemente mit der Rolle `tab` innerhalb eines `tablist` an und informieren die Benutzer darüber, welches `tab` sie aktuell ausgewählt haben. Weiterhin _sollte_ ein Element mit der Rolle `tab` die Eigenschaft [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) beinhalten, die ein entsprechendes `tabpanel` (das die Rolle `tabpanel` hat) durch dessen `id` identifiziert. Wenn ein Element mit der Rolle `tabpanel` den Fokus hat oder ein Kind von diesem Element fokussiert ist, zeigt das an, dass das verbundene Element mit der Rolle `tab` der aktive Tab in einem `tablist` ist.

Wenn Elemente mit der Rolle `tab` ausgewählt oder aktiv sind, sollten sie ihr [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut auf `true` setzen. Andernfalls sollte ihr `aria-selected`-Attribut auf `false` gesetzt sein. Wenn ein einzel-Auswählbares `tablist` ausgewählt oder aktiv ist, sollte das `hidden`-Attribut der anderen `tabpanel` auf "true" gesetzt sein, bis der Benutzer den Tab auswählt, der mit diesem `tabpanel` verbunden ist. Wenn ein mehrfach-Auswählbares `tablist` ausgewählt oder aktiv ist, sollte das entsprechende gesteuerte `tabpanel` sein [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attribut auf "true" und sein `hidden`-Attribut auf "false" setzen, andernfalls umgekehrt.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei der Darstellung in einer Zugänglichkeits-API der Plattform nur Text enthalten können. Zugänglichkeits-APIs haben keinen Weg, semantische Elemente innerhalb eines `tab` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines jeden `tab`-Elements an, da dies eine Rolle ist, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `tab`-Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachkommen von `tab` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets gleichwertig mit dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} sind:

```html
<div role="tab">Title of my tab</div>
```

### Zugehörige Rollen und Attribute

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : boolean
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : `id` des Elements mit der Rolle `tabpanel`
- [id](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Inhalt

### Tastaturinteraktionen

| Taste             | Aktion                                                                                                                                                                                                                                                    |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>    | Wenn der Fokus außerhalb der `tablist` liegt, bewegt sich der Fokus zum aktiven Tab. Wenn sich der Fokus auf dem aktiven Tab befindet, bewegt sich der Fokus zum nächsten Element der Tastaturfokus-Reihenfolge, idealerweise dem zugehörigen `tabpanel`. |
| <kbd>→</kbd>      | Fokussiert und optional aktiviert den nächsten Tab in der Tab-Liste. Wenn der aktuelle Tab der letzte Tab in der Tab-Liste ist, aktiviert es den ersten Tab.                                                                                              |
| <kbd>←</kbd>      | Fokussiert und optional aktiviert den vorherigen Tab in der Tab-Liste. Wenn der aktuelle Tab der erste Tab in der Tab-Liste ist, aktiviert es den letzten Tab.                                                                                            |
| <kbd>Delete</kbd> | Entfernt, sofern erlaubt, den aktuell ausgewählten Tab aus der Tab-Liste.                                                                                                                                                                                 |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Obwohl es Möglichkeiten gibt, tab-ähnliche Funktionalität ohne JavaScript zu erstellen, gibt es keine alternative Kombination, die nur HTML und CSS verwendet, die den oben geforderten Funktionsumfang für zugängliche Tabs mit Inhalt bietet.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit `tabpanel`, um eine interaktive Gruppe von Registerkarteninhalten zu erstellen. Hier umschließen wir unsere Inhaltsgruppe in einem `div`, wobei unser `tablist` ein `aria-label` hat, das es für unterstützende Technologien kennzeichnet. Jeder `tab` ist ein `button` mit den zuvor erwähnten Attributen. Der erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` angewendet. Diese beiden Attribute müssen immer so koordiniert werden, dass, wenn ein anderer Tab ausgewählt wird, er dann `tabindex="0"` und `aria-selected="true"` hat. Alle nicht ausgewählten Tabs müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel`-Elemente haben `tabindex="0"`, um sie fokussierbar zu machen, und alle außer dem aktuell aktiven haben das `hidden`-Attribut. Das `hidden`-Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird. Es gibt einige grundlegende Stile, die die Schaltflächen umgestalten und den [`z-index`](/de/docs/Web/CSS/z-index) der `tab`-Elemente ändern, um die Illusion zu erzeugen, dass es mit dem `tabpanel` für aktive Elemente verbunden ist, und die Illusion, dass inaktive Elemente hinter dem aktiven `tabpanel` liegen.

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

Es gibt zwei Dinge, die wir mit JavaScript tun müssen: Wir müssen den Fokus und den Tab-Index unserer `tab`-Elemente mit den rechten und linken Pfeilen ändern, und wir müssen den aktiven `tab` und `tabpanel` ändern, wenn wir auf einen `tab` klicken.

Um das erste zu erreichen, hören wir auf das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis auf dem `tablist`. Wenn der [`key`](/de/docs/Web/API/KeyboardEvent/key) des Ereignisses `ArrowRight` oder `ArrowLeft` ist, reagieren wir auf das Ereignis. Wir beginnen damit, den `tabindex` des aktuellen `tab`-Elements auf -1 zu setzen, wodurch es nicht mehr fokussierbar ist. Dann, wenn der rechte Pfeil gedrückt wird, erhöhen wir unseren Tab-Fokus-Zähler um eins. Wenn der Zähler größer als die Anzahl der `tab`-Elemente ist, die wir haben, gehen wir zurück zum ersten Tab, indem wir diesen Zähler auf 0 setzen. Wenn der linke Pfeil gedrückt wird, verringern wir unseren Tab-Fokus-Zähler um eins, und wenn er dann weniger als 0 ist, setzen wir ihn auf die Anzahl der `tab`-Elemente minus eins (um zum letzten Element zu gelangen). Schließlich setzen wir `focus` auf das `tab`-Element, dessen Index gleich dem Tab-Fokus-Zähler ist, und setzen seinen `tabindex` auf 0, um es fokussierbar zu machen.

Um das Ändern des aktiven `tab` und `tabpanel` zu handhaben, haben wir eine Funktion, die das Ereignis übernimmt, das Element erhält, das das Ereignis ausgelöst hat, das Elternelement des auslösenden Elements und sein Großelternelement. Wir finden dann alle Tabs mit `aria-selected="true"` innerhalb des Elternelements und setzen es auf `false`, dann setzen wir das `aria-selected` des auslösenden Elements auf `true`. Danach finden wir alle `tabpanel`-Elemente im Großelternelement, machen sie alle `hidden`, und wählen schließlich das Element, dessen `id` gleich dem `aria-controls` des auslösenden `tab` ist, und entfernen das `hidden`-Attribut, um es sichtbar zu machen.

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

Es wird empfohlen, ein {{HTMLElement('button')}} Element mit der Rolle `tab` für ihre eingebauten funktionalen und zugänglichen Features zu verwenden, anstatt diese selbst hinzufügen zu müssen. Um die Tab-Tastenfunktionalität für Elemente mit der Rolle `tab` zu steuern, wird empfohlen, alle nicht-aktiven Elemente auf `tabindex="-1"` zu setzen und das aktive Element auf `tabindex="0"`.

## Prioritätsrangfolge

Welche verwandten Eigenschaften gibt es und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen, welche Eigenschaft wird über dieser einen sein und welche Eigenschaft wird überschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}} Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
