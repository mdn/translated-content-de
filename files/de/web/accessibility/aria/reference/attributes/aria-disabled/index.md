---
title: aria-disabled
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-disabled
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Der `aria-disabled` Zustand zeigt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig funktionsfähig ist.

## Beschreibung

Das `aria-disabled` Attribut zeigt, wenn es auf `true` gesetzt ist, an, dass das Element, auf welches es gesetzt ist, und alle seine fokussierbaren Nachfahren als deaktiviert betrachtet werden sollen. Diese Deklaration informiert Personen, die unterstützende Technologien wie Bildschirmleser verwenden, dass solche Elemente nicht bearbeitet oder anderweitig funktionsfähig sein sollen.

Im Gegensatz zu HTMLs [disabled](/de/docs/Web/HTML/Element/input#disabled) Boolesche Attribut, welches ein Formularelement semantisch als deaktiviert kommuniziert, dessen Stil ändert, um seinen Zustand widerzuspiegeln und alle Funktionen unterdrückt, sowie dem Wert des Elements die Teilnahme an der Formularübermittlung verwehrt, exponiert `aria-disabled="true"` <strong>nur</strong> semantisch diese Elemente als deaktiviert. Webentwickler müssen manuell sicherstellen, dass solche Elemente ihre Funktion verlieren, wenn sie in den deaktivierten Zustand versetzt werden.

Wenn native HTML-Formularelemente deaktiviert werden müssen, müssen Entwickler das `disabled` Attribut angeben, da es alle allgemein erwarteten Funktionen des Deaktivierens eines Steuerelements standardmäßig bereitstellt. Es kann jedoch Instanzen geben, in denen Elemente als deaktiviert dargestellt werden müssen, aber trotzdem für Benutzer mit der <kbd>Tab</kbd>-Taste auffindbar sein sollen. Dies kann ihre Auffindbarkeit verbessern, da sie nicht aus der Fokusreihenfolge der Webseite entfernt werden, da `aria-disabled` die Fokussierbarkeit solcher Elemente nicht ändert, noch werden die Elemente durch den Standard-Browserstil abgedunkelt, was sie leichter lesbar machen kann. Einige Beispiele, wo dies nützlich sein kann, sind:

- Die Kopfzeilentaste, die mit einem nicht einfahrbaren Akkordeon-Panel verbunden ist,
- Eine Schaltfläche, die es wichtig, in der Fokusreihenfolge der Seite zu behalten, deren Aktion aber derzeit nicht verfügbar ist - wie zum Beispiel das Absenden eines Formulars,
- Vorübergehend inaktive Elemente in einem Menü-Widget, die ansonsten bei der Standard-Tastaturnavigation übersprungen würden.

In jedem dieser Fälle könnte man wollen, dass Benutzer diese Elemente durch die Standard-Tastaturnavigation finden, obwohl die Funktionalität dieser Steuerung entfernt oder "deaktiviert" ist. Entwickler müssen dennoch JavaScript verwenden, um die Funktionalität des Elements vollständig zu deaktivieren und das Erscheinungsbild des Elements zu ändern, sodass sehende Benutzer wissen, dass es deaktiviert ist.

> [!NOTE]
> Der Zustand des Deaktiviertseins gilt für das Element mit `aria-disabled="true"` und alle seine fokussierbaren Nachfahren. Seien Sie vorsichtig, wenn Sie dieses Attribut auf Containerelementen verwenden. Besonders in dem Fall, dass ein Container sowohl Formularelemente als auch Links hat - wo die Absicht möglicherweise darin liegt, die Formularelemente als im deaktivierten Zustand darzustellen, aber <strong>nicht</strong>, die Links als "deaktiviert" zu kommunizieren.

Ein weiterer Grund, das `aria-disabled` Attribut anstelle des HTML `disabled` Attributs zu verwenden ist, wenn Sie benutzerdefinierte Steuerungen erstellt haben, die als deaktiviert markiert werden müssen, aber kein Element verwenden, das das `disabled` Attribut zulässt. Zum Beispiel wurde im folgenden Snippet ein `<div>` verwendet, um eine benutzerdefinierte Schaltfläche zu erstellen, die als deaktiviert markiert werden muss. Allerdings erwartet oder respektiert das `<div>`-Element das `disabled` Attribut nicht - selbst wenn ihm ein `role="button"` gegeben wird, um seine exponierte ARIA-Rolle zu ändern. Das `aria-disabled` Attribut ist erforderlich, um solche benutzerdefinierten Steuerungen zu deaktivieren.

```html
<div role="button" aria-disabled="true" tabindex="-1">Edit</div>
```

Ähnlich wie die Verwendung von JavaScript erforderlich ist, um sicherzustellen, dass ein Element mit `aria-disabled="true"` nicht funktional ist, sind auch Stiländerungen des Elements erforderlich. Im Gegensatz zum HTML `disabled` Attribut, bei dem die Angabe dessen `:disabled` Benutzeragentenstile zur Anwendung bringt, ändert `aria-disabled="true"` dies nicht. Das Element kann mit dem [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[aria-disabled="true"]` gestylt werden.

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

Wenn Sie das `aria-disabled` Attribut bewusst verwenden, um ein Formularelement in der Tastaturfokusreihenfolge der Seite zu belassen, besonders wenn das Element wichtigen Inhalt darstellt, den alle Benutzer wahrnehmen sollten, müssen Sie möglicherweise Stile verwenden, die weiterhin Farbkontrastanforderungen erfüllen. Zum Beispiel ist eine deaktivierte Schaltfläche/Überschrift, die ein nicht einfahrbares Akkordeon-Panel einführt, ein Inhalt, der weiterhin lesbar sein muss.

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

Die [`forced-colors` Medienabfrage](/de/docs/Web/CSS/@media/forced-colors) entdeckt, ob der {{Glossary("User_agent", "Benutzeragent")}} einen erzwungenen Farbenmodus aktiviert hat; falls ja, werden die Text- und Rahmenfarben beide auf die [Systemfarbe `greyText`](/de/docs/Web/CSS/system-color#syntax) gesetzt.

Ein weiterer Punkt, den Sie beachten sollten, wenn Sie `aria-disabled` anstelle des nativen HTML Attributs verwenden, ist, dass das ARIA Attribut die manuelle Stilisierung erfordert, die notwendig ist, um das Element in Windows High Contrast Mode visuell als deaktiviert zu kommunizieren.

> [!NOTE]
> Wenn Sie CSS's [`pointer-events: none;`](/de/docs/Web/CSS/pointer-events) verwenden, um ein Element nicht anklickbar zu machen, stellen Sie sicher, dass Sie die Interaktivität auch mit JavaScript deaktivieren. `pointer-events: none;` verhindert Mausklicks, verhindert jedoch nicht, dass das Element über die Tastatur aktiviert wird.

```js
function onClick(event) {
  event.preventDefault();
}

function toggleDisabled(element, status, update) {
  if (status) {
    //element.input.disabled = false;
    element.setAttribute("aria-disabled", "false");
    update.textContent = "The element is now enabled.";
    element.addEventListener("click", onClick);
  } else {
    //element.input.disabled = true;
    element.setAttribute("aria-disabled", "true");
    update.textContent = "The element is now disabled.";
    element.removeEventListener("click", onClick);
  }
}
```

Beim Umschalten von `aria-disabled="true"` zu `"false"`, verwenden Sie JavaScript, um:

1. Den Wert auf `false` zu ändern (oder das Attribut ganz zu entfernen),
2. Das Element zu aktivieren und
3. Den Benutzer wissen zu lassen, dass die Steuerung jetzt aktiviert ist.

Wenn Sie nur CSS verwendet haben, um den deaktivierten Zustand mit einem Attributselektor zu stylen, wird der Selektor nicht mehr übereinstimmen und der deaktivierte Stil wird nicht mehr wirksam sein.

## Werte

- `true`

  - : Das Element ist deaktiviert

- `false`
  - : Das Element ist nicht deaktiviert

## Zugehörige Schnittstellen

- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-disabled` Attributs wider, welches anzeigt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig funktionsfähig ist.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled) Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle spiegelt den Wert des `aria-disabled` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`input`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/input_role)
- [`link`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

Weitervererbt in Rollen:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Making disabled buttons more inclusive](https://css-tricks.com/making-disabled-buttons-more-inclusive/) von Sandrina Pereira
- [Styling für Windows High Contrast mit neuen Standards für erzwungene Farben](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- [disabled](/de/docs/Web/HTML/Attributes/disabled)
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
