---
title: "ARIA: Rolle tab"
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die ARIA-Rolle `tab` zeigt ein interaktives Element innerhalb eines `tablist` an, das beim Aktivieren sein zugehöriges `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der Rolle `tab` steuert die Sichtbarkeit eines zugehörigen Elements mit der Rolle [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role). Das übliche Benutzererlebnis-Muster ist eine Gruppe visueller Registerkarten über oder neben einem Inhaltsbereich, und die Auswahl einer anderen Registerkarte ändert den Inhalt und macht die ausgewählte Registerkarte sichtbarer als die anderen Registerkarten.

Elemente mit der Rolle `tab` _müssen_ entweder ein Kind eines Elements mit der Rolle `tablist` sein oder ihre `id` muss Teil der Eigenschaft [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) eines `tablist` sein. Diese Kombination identifiziert für unterstützende Technologien, dass das Element Teil einer Gruppe verwandter Elemente ist. Einige unterstützende Technologien geben die Anzahl der Elemente mit der Rolle `tab` innerhalb eines `tablist` an und informieren die Nutzer darüber, welches `tab` sie gerade ausgewählt haben. Darüber hinaus _sollte_ ein Element mit der Rolle `tab` die Eigenschaft [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) enthalten, die ein entsprechendes `tabpanel` (das eine `tabpanel`-Rolle hat) durch die `id` dieses Elements identifiziert. Wenn ein Element mit der Rolle `tabpanel` den Fokus hat oder ein Kind davon den Fokus hat, zeigt dies an, dass das verbundene Element mit der Rolle `tab` die aktive Registerkarte in einem `tablist` ist.

Wenn Elemente mit der Rolle `tab` ausgewählt oder aktiv sind, sollten sie das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt haben. Andernfalls sollte ihr `aria-selected`-Attribut auf `false` gesetzt sein. Wenn ein einzelnauswählbares `tablist` ausgewählt oder aktiv ist, sollte das `hidden`-Attribut der anderen Tabpanels auf true gesetzt werden, bis der Nutzer die mit diesem Tabpanel verbundene Registerkarte auswählt. Bei einem mehrfach auswählbaren `tablist` sollte das entsprechende gesteuerte `tabpanel` sein [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attribut auf `true` und sein `hidden`-Attribut auf `false` gesetzt haben, andernfalls umgekehrt.

### Alle Nachfahren sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei der Darstellung in einer Plattformzugänglichkeits-API nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `tab` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahr-Elemente eines `tab`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `tab`-Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachfahren von `tab` präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Sicht der Nutzer unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets gleichwertig mit dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} sind:

```html
<div role="tab">Title of my tab</div>
```

### Zugehörige Rollen und Attribute

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : boolean
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : `id` eines Elements mit der Rolle `tabpanel`
- [id](/de/docs/Web/HTML/Global_attributes/id)
  - : Inhalt

### Tastaturinteraktionen

| Taste           | Aktion                                                                                                                                                                                                                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>  | Wenn der Fokus außerhalb der `tablist` ist, bewegt sich der Fokus zur aktiven Registerkarte. Wenn der Fokus auf der aktiven Registerkarte ist, bewegt sich der Fokus zum nächsten Element in der Tastaturfokus-Reihenfolge, idealerweise dem zugehörigen `tabpanel` der aktiven Registerkarte. |
| <kbd>→</kbd>    | Setzt den Fokus auf die nächste Registerkarte in der Tab-Liste und aktiviert sie optional. Wenn die aktuelle Registerkarte die letzte in der Tab-Liste ist, aktiviert sie die erste Registerkarte.                                                                                             |
| <kbd>←</kbd>    | Setzt den Fokus auf die vorherige Registerkarte in der Tab-Liste und aktiviert sie optional. Wenn die aktuelle Registerkarte die erste in der Tab-Liste ist, aktiviert sie die letzte Registerkarte.                                                                                           |
| <kbd>Entf</kbd> | Entfernt, wenn erlaubt, die derzeit ausgewählte Registerkarte aus der Tab-Liste.                                                                                                                                                                                                               |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Während es Möglichkeiten gibt, eine tab-ähnliche Funktionalität ohne JavaScript zu erstellen, gibt es keine Ersatzkombination, die nur HTML und CSS verwendet, die denselben Funktionsumfang bietet, der oben für zugängliche Registerkarten mit Inhalt erforderlich ist.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elemente mit `tabpanel`, um eine interaktive Gruppe von Registerkarteninhalten zu erstellen. Hier schließen wir unsere Inhaltsgruppe in ein `div` ein, wobei unsere `tablist` ein `aria-label` hat, das sie für unterstützende Technologien kennzeichnet. Jede `tab` ist ein `button` mit den zuvor erwähnten Attributen. Die erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` angewendet. Diese beiden Attribute müssen immer so koordiniert werden – sodass, wenn eine andere Registerkarte ausgewählt wird, sie dann `tabindex="0"` und `aria-selected="true"` hat. Alle nicht ausgewählten Registerkarten müssen `aria-selected="false"` und `tabindex="-1"` haben.

Alle `tabpanel`-Elemente haben `tabindex="0"`, um sie fokussierbar zu machen, und alle außer dem aktuell aktiven haben das `hidden`-Attribut. Das `hidden`-Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird. Es gibt einige grundlegende Stilanwendungen, die die Schaltflächen neu stylen und den [`z-index`](/de/docs/Web/CSS/z-index) von `tab`-Elementen ändern, um die Illusion zu erzeugen, dass es sich für aktive Elemente mit dem `tabpanel` verbindet und inaktive Elemente hinter dem aktiven `tabpanel` befinden.

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

Es gibt zwei Dinge, die wir mit JavaScript tun müssen: Wir müssen den Fokus und den Tab-Index unserer `tab`-Elemente mit den rechten und linken Pfeiltasten ändern, und wir müssen die aktive `tab` und `tabpanel` ändern, wenn wir auf eine `tab` klicken.

Um das erste Ziel zu erreichen, hören wir auf das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis auf der `tablist`. Wenn der [`key`](/de/docs/Web/API/KeyboardEvent/key) des Ereignisses `ArrowRight` oder `ArrowLeft` ist, reagieren wir auf das Ereignis. Wir beginnen damit, den `tabindex` des aktuellen `tab`-Elements auf -1 zu setzen, was es nicht mehr fokussierbar macht. Dann, wenn die rechte Pfeiltaste gedrückt wird, erhöhen wir unseren Tab-Fokus-Zähler um eins. Wenn der Zähler größer ist als die Anzahl der `tab`-Elemente, die wir haben, gehen wir zur ersten Registerkarte zurück, indem wir diesen Zähler auf 0 setzen. Wenn die linke Pfeiltaste gedrückt wird, verringern wir unseren Tab-Fokus-Zähler um eins und wenn er dann kleiner als 0 ist, setzen wir ihn auf die Anzahl der `tab`-Elemente minus eins (um zum letzten Element zu gelangen). Schließlich setzen wir den `focus` auf das `tab`-Element, dessen Index dem Tab-Fokus-Zähler entspricht, und setzen seinen `tabindex` auf 0, um es fokussierbar zu machen.

Um das Ändern der aktiven `tab` und `tabpanel` zu handhaben, haben wir eine Funktion, die das Ereignis annimmt, das Element erhält, das das Ereignis ausgelöst hat, das übergeordnete Element des auslösenden Elements und sein übergeordnetes Element. Wir suchen dann alle Registerkarten mit `aria-selected="true"` im übergeordneten Element und setzen es auf `false`, dann setzen wir `aria-selected` des auslösenden Elements auf `true`. Danach finden wir alle `tabpanel`-Elemente im übergeordneten Element, machen sie alle `hidden`, und schließlich wählen wir das Element, dessen `id` gleich `aria-controls` der auslösenden `tab` ist, und entfernen das `hidden`-Attribut, wodurch es sichtbar wird.

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

Es wird empfohlen, ein {{HTMLElement('button')}}-Element mit der Rolle `tab` für deren eingebaute funktionale und zugängliche Funktionen zu verwenden, anstatt sie selbst hinzufügen zu müssen. Um die Tabulatortastenfunktionalität für Elemente mit der Rolle `tab` zu steuern, wird empfohlen, alle nicht aktiven Elemente auf `tabindex="-1"` zu setzen und das aktive Element auf `tabindex="0"`.

## Reihenfolge der Vorrangigkeit

Welche sind die verwandten Eigenschaften und in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen, welche Eigenschaft wird Vorrang vor dieser haben und welche Eigenschaft wird überschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}}-Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA-Rolle `tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
