---
title: "ARIA: Rolle tab"
slug: Web/Accessibility/ARIA/Roles/tab_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA `tab` Rolle kennzeichnet ein interaktives Element innerhalb eines `tablist`, das, wenn es aktiviert wird, sein zugehöriges `tabpanel` anzeigt.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Beschreibung

Ein Element mit der `tab` Rolle steuert die Sichtbarkeit eines zugehörigen Elements mit der [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) Rolle. Das übliche Benutzererlebnismuster besteht aus einer Gruppe von visuellen Reitern oberhalb oder seitlich eines Inhaltsbereichs. Bei der Auswahl eines anderen Reiters ändert sich der Inhalt, und der ausgewählte Reiter wird markanter als die anderen Reiter dargestellt.

Elemente mit der Rolle `tab` _müssen_ entweder ein Kind eines Elements mit der `tablist` Rolle sein oder ihre `id` muss Teil der [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Eigenschaft eines `tablist` sein. Diese Kombination identifiziert für unterstützende Technologien, dass das Element Teil einer Gruppe von miteinander verbundenen Elementen ist. Einige unterstützende Technologien geben die Anzahl der Elemente mit der `tab` Rolle innerhalb eines `tablist` an und informieren die Benutzer darüber, welchen `tab` sie aktuell ausgewählt haben. Weiterhin _sollte_ ein Element mit der `tab` Rolle die [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) Eigenschaft enthalten, die ein entsprechendes `tabpanel` (das eine `tabpanel` Rolle hat) durch die `id` dieses Elements identifiziert. Wenn ein Element mit der `tabpanel` Rolle den Fokus hat oder ein Kind davon den Fokus hat, zeigt das an, dass das verbundene Element mit der `tab` Rolle der aktive Reiter in einem `tablist` ist.

Wenn Elemente mit der `tab` Rolle ausgewählt oder aktiv sind, sollten sie das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Attribut auf `true` gesetzt haben. Andernfalls sollte ihr `aria-selected` Attribut auf `false` gesetzt sein. Wenn ein einzeln auswählbarer `tablist` ausgewählt oder aktiv ist, sollte das `hidden` Attribut der anderen tabpanels auf `true` gesetzt werden, bis der Benutzer den Reiter auswählt, der mit diesem tabpanel verbunden ist. Wenn ein mehrfach auswählbarer `tablist` ausgewählt oder aktiv ist, sollte das zugehörige gesteuerte `tabpanel` sein [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Attribut auf `true` und sein `hidden` Attribut auf `false` gesetzt haben, andernfalls umgekehrt.

### Alle Nachfahren sind präsentational

Es gibt einige Typen von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform für Barrierefreiheit dargestellt werden, nur Text enthalten können. Barrierefreiheits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `tab` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle nachfolgenden Elemente eines jeden `tab` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `tab` Element, das eine Überschrift enthält.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Da Nachfahren von `tab` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

Aus der Perspektive von Benutzern unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets im [Barrierefreiheitsbaum](/de/docs/Glossary/Accessibility_tree) gleichwertig sind mit:

```html
<div role="tab">Title of my tab</div>
```

### Zugehörige Rollen und Attribute

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : boolean
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
  - : `id` des Elements mit `tabpanel` Rolle
- [id](/de/docs/Web/HTML/Global_attributes#id)
  - : Inhalt

### Tastatur-Interaktionen

| Taste              | Aktion                                                                                                                                                                                                           |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>     | Wenn der Fokus außerhalb des `tablist` ist, wird der Fokus auf den aktiven Reiter gesetzt. Ist der Fokus auf dem aktiven Reiter, wird der Fokus auf das nächste Element in der Tastaturfokusreihenfolge gesetzt, idealerweise das verbundene `tabpanel`. |
| <kbd>→</kbd>       | Fokussiert und aktiviert optional den nächsten Reiter in der Liste. Ist der aktuelle Reiter der letzte in der Liste, aktiviert er den ersten Reiter.                                                            |
| <kbd>←</kbd>       | Fokussiert und aktiviert optional den vorherigen Reiter in der Liste. Ist der aktuelle Reiter der erste in der Liste, aktiviert er den letzten Reiter.                                                          |
| <kbd>Delete</kbd>  | Entfernt, wenn erlaubt, den aktuell ausgewählten Reiter aus der Liste.                                                                                                                                          |

### Erforderliche JavaScript-Funktionen

> [!NOTE]
> Während es Wege gibt, tab-ähnliche Funktionalitäten ohne JavaScript zu erstellen, gibt es keine alternative Kombination, die nur HTML und CSS verwendet, die denselben Funktionsumfang bietet, der oben für zugängliche Tabs mit Inhalten erforderlich ist.

## Beispiel

Dieses Beispiel kombiniert die Rolle `tab` mit `tablist` und Elementen mit `tabpanel`, um eine interaktive Gruppe von Reiterinhalten zu erstellen. Hier umschließen wir unsere Gruppe von Inhalten in einem `div`, wobei unser `tablist` ein `aria-label` hat, das es für unterstützende Technologien kennzeichnet. Jeder `tab` ist ein `button` mit den zuvor erwähnten Attributen. Der erste `tab` hat sowohl `tabindex="0"` als auch `aria-selected="true"` zugewiesen. Diese beiden Attribute müssen immer so koordiniert sein – wenn ein anderer Reiter ausgewählt wird, wird er dann `tabindex="0"` und `aria-selected="true"` zugewiesen haben. Alle nicht ausgewählten Reiter müssen `aria-selected="false"` und `tabindex="-1"` zugewiesen haben.

Alle `tabpanel` Elemente haben `tabindex="0"`, um sie fokussierbar zu machen, und alle außer dem aktuell aktiven haben das `hidden` Attribut. Das `hidden` Attribut wird entfernt, wenn ein `tabpanel` mit JavaScript sichtbar wird. Es gibt ein grundlegendes Styling, das die Buttons neu gestaltet und den [`z-index`](/de/docs/Web/CSS/z-index) der `tab` Elemente ändert, um die Illusion zu schaffen, dass es verbunden mit dem `tabpanel` für aktive Elemente ist, und die Illusion, dass inaktive Elemente hinter dem aktiven `tabpanel` sind.

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

Es gibt zwei Dinge, die wir mit JavaScript tun müssen: wir müssen den Fokus und den Tabindex unserer `tab` Elemente mit den rechten und linken Pfeiltasten ändern, und wir müssen den aktiven `tab` und `tabpanel` ändern, wenn wir auf einen `tab` klicken.

Um das Erste zu erreichen, lauschen wir dem [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignis auf dem `tablist`. Wenn der [`key`](/de/docs/Web/API/KeyboardEvent/key) des Ereignisses `ArrowRight` oder `ArrowLeft` ist, reagieren wir auf das Ereignis. Wir beginnen, indem wir den `tabindex` des aktuellen `tab` Elements auf -1 setzen, wodurch es nicht mehr fokussierbar ist. Dann, wenn die rechte Pfeiltaste gedrückt wird, erhöhen wir unseren Tabfokuszähler um eins. Wenn der Zähler größer als die Anzahl der `tab` Elemente ist, die wir haben, kehren wir durch Setzen dieses Zählers auf 0 zum ersten Tab zurück. Wenn die linke Pfeiltaste gedrückt wird, verringern wir unseren Tabfokuszähler um eins, und wenn er dann weniger als 0 ist, setzen wir ihn auf die Anzahl der `tab` Elemente minus eins (um zum letzten Element zu gelangen). Schließlich setzen wir `focus` auf das `tab` Element, dessen Index dem Tabfokuszähler entspricht, und setzen seinen `tabindex` auf 0, um es fokussierbar zu machen.

Um den aktiven `tab` und `tabpanel` zu ändern, haben wir eine Funktion, die das Ereignis entgegennimmt, das Element erhält, das das Ereignis ausgelöst hat, das Eltern-Element des auslösenden Elements und dessen Großeltern-Element erhält. Dann finden wir alle Tabs mit `aria-selected="true"` innerhalb des Elternelements und setzen dieses auf `false`, dann setzen wir das `aria-selected` des auslösenden Elements auf `true`. Danach finden wir alle `tabpanel` Elemente im Großeltern-Element, machen sie alle `hidden`, und wählen schließlich das Element aus, dessen `id` gleich dem `aria-controls` des auslösenden `tab` ist und entfernen das `hidden` Attribut, wodurch es sichtbar wird.

```js
window.addEventListener("DOMContentLoaded", () => {
  // Handhaben Sie nur eine bestimmte Tabliste; wenn Sie mehrere
  // Tabliste haben (könnten sogar verschachtelt sein), müssen Sie
  // diesen Code für jede anwenden
  const tabList = document.querySelector('[role="tablist"]');
  const tabs = tabList.querySelectorAll(':scope > [role="tab"]');

  // Fügen Sie jedem Tab einen Klick-Ereignis-Handler hinzu
  tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabs);
  });

  // Aktivieren Sie Pfeiltastennavigation zwischen Tabs in der Tab-Liste
  let tabFocus = 0;

  tabList.addEventListener("keydown", (e) => {
    // Nach rechts verschieben
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.key === "ArrowRight") {
        tabFocus++;
        // Wenn wir am Ende sind, gehen wir zum Anfang
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Nach links verschieben
      } else if (e.key === "ArrowLeft") {
        tabFocus--;
        // Wenn wir am Anfang sind, bewegen wir uns zum Ende
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

  // Entfernen Sie alle aktuell ausgewählten Tabs
  tabList
    .querySelectorAll(':scope > [aria-selected="true"]')
    .forEach((t) => t.setAttribute("aria-selected", false));

  // Setzen Sie diesen Tab als ausgewählt
  targetTab.setAttribute("aria-selected", true);

  // Blenden Sie alle Tab-Panels aus
  tabGroup
    .querySelectorAll(':scope > [role="tabpanel"]')
    .forEach((p) => p.setAttribute("hidden", true));

  // Zeigen Sie das ausgewählte Panel
  tabGroup
    .querySelector(`#${targetTab.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}
```

{{EmbedLiveSample("Example", 600, 130)}}

## Best Practices

Es wird empfohlen, ein {{HTMLElement('button')}} Element mit der Rolle `tab` wegen seiner eingebauten funktionalen und zugänglichen Merkmale zu verwenden, anstatt diese selbst hinzufügen zu müssen. Um die Tab-Tasten-Funktionalität für Elemente mit der Rolle `tab` zu kontrollieren, wird empfohlen, alle nicht-aktiven Elemente auf `tabindex="-1"` zu setzen und das aktive Element auf `tabindex="0"` zu setzen.

## Prioritätsordnung

Welche zugehörigen Eigenschaften gibt es, in welcher Reihenfolge wird dieses Attribut oder diese Eigenschaft gelesen, welche Eigenschaft wird Vorrang vor dieser haben, und welche Eigenschaft wird überschrieben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('button')}} Element
- [KeyboardEvent.key](/de/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
