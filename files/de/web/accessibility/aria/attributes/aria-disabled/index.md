---
title: aria-disabled
slug: Web/Accessibility/ARIA/Attributes/aria-disabled
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der Zustand `aria-disabled` gibt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig bedienbar ist.

## Beschreibung

Das Attribut `aria-disabled`, wenn es auf `true` gesetzt ist, zeigt an, dass das Element, auf dem es gesetzt ist, und alle seine fokussierbaren Nachkommen in einem deaktivierten Zustand sein sollen. Diese Deklaration informiert Personen, die unterstützende Technologien nutzen, z. B. Screenreader, dass solche Elemente nicht bearbeitet oder anderweitig bedienbar sein sollen.

Im Gegensatz zum HTML-Boolean-Attribut [`disabled`](/de/docs/Web/HTML/Element/input#disabled), das ein Formularelement semantisch als deaktiviert kennzeichnet, dessen Styling ändert, um seinen Zustand widerzuspiegeln und alle Funktionen unterdrückt sowie den Elementwert von der Teilnahme an der Formularübermittlung ausschließt, macht `aria-disabled="true"` <strong>nur</strong> semantisch solche Elemente als deaktiviert erkennbar. Web-Entwickler müssen manuell sicherstellen, dass solche Elemente ihre Funktionalität verlieren, wenn sie im deaktivierten Zustand sind.

Wenn native HTML-Formularsteuerelemente deaktiviert werden müssen, müssen Entwickler das Attribut `disabled` angeben, da es alle allgemein erwarteten Funktionen zur Deaktivierung eines Steuerelements standardmäßig bietet. Es kann jedoch Fälle geben, in denen Elemente als deaktiviert angezeigt werden müssen, aber dennoch für Benutzer auffindbar sind, wenn sie über die <kbd>Tab</kbd>-Taste navigieren. Dadurch kann ihre Auffindbarkeit verbessert werden, da sie nicht aus der Fokusreihenfolge der Webseite entfernt werden. `aria-disabled` ändert nicht die Fokussierbarkeit solcher Elemente, noch werden die Elemente durch Standard-Browser-Styling abgedunkelt, was sie leichter lesbar macht. Einige Beispiele, bei denen dies nützlich sein kann, sind:

- Das Header-Schaltflächenelement, das mit einem nicht kollabierbaren Akkordeon-Panel verbunden ist,
- Eine Schaltfläche, die in der Fokusreihenfolge der Seite bleiben sollte, aber deren Aktion derzeit nicht verfügbar ist, z. B. bei der Einsendung eines Formulars,
- Vorübergehend inaktive Elemente in einem Menü-Widget, das andernfalls über die Standardtastaturnavigation übersprungen würde.

In jedem dieser Fälle könnte es wünschenswert sein, dass die Benutzer diese Elemente über die Standardtastaturnavigation finden, obwohl die Funktion dieser Steuerung entfernt oder "deaktiviert" ist. Entwickler müssen weiterhin JavaScript verwenden, um die Funktionalität des Elements vollständig zu deaktivieren, während auch das Erscheinungsbild des Elements geändert wird, sodass sehende Benutzer wissen, dass es deaktiviert ist.

> [!NOTE]
> Der Zustand des Deaktiviertseins gilt für das Element mit `aria-disabled="true"` und alle seine fokussierbaren Nachkommen. Seien Sie vorsichtig, wenn Sie dieses Attribut auf Container-Elementen verwenden. Besonders in Fällen, in denen ein Container sowohl Formularsteuerelemente als auch Links enthält – wobei die Absicht darin bestehen kann, die Formularsteuerelemente als im deaktivierten Zustand anzuzeigen, aber <strong>nicht</strong>, die Links als "deaktiviert" zu kommunizieren.

Ein weiterer Grund zur Verwendung des Attributs `aria-disabled` anstelle des HTML-Attributs `disabled` besteht darin, wenn benutzerdefinierte Steuerelemente erstellt wurden, die als deaktiviert gekennzeichnet werden müssen, aber kein Element verwenden, das das Attribut `disabled` zulässt. Beispielsweise wurde im folgenden Snippet ein `<div>` verwendet, um eine benutzerdefinierte Schaltfläche zu erstellen, die als deaktiviert gekennzeichnet werden muss. Das `<div>`-Element erwartet oder respektiert jedoch nicht das Attribut `disabled`, selbst wenn ihm eine `role="button"` zugewiesen wird, um seine exponierte ARIA-Rolle zu ändern. Das Attribut `aria-disabled` ist erforderlich, um solche benutzerdefinierten Steuerelemente zu deaktivieren.

```html
<div role="button" aria-disabled="true" tabindex="-1">Edit</div>
```

Ähnlich wie beim Einsatz von JavaScript, um sicherzustellen, dass ein Element mit `aria-disabled="true"` nicht funktionsfähig ist, muss das Element auch stilistisch angepasst werden. Im Gegensatz zum HTML-Attribut `disabled`, bei dem die Angabe dazu führt, dass `:disabled`-Benutzeragenten-Stile angewendet werden, tut `aria-disabled="true"` dies nicht. Das Element kann mit dem [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors) `[aria-disabled="true"]` gestylt werden.

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

Wenn Sie das Attribut `aria-disabled` bewusst verwenden, um ein Formularelement in der Tastaturfokusreihenfolge der Seite zu belassen, insbesondere wenn das Element wichtigen Inhalt repräsentiert, den alle Benutzer wahrnehmen können sollten, müssen Sie möglicherweise ein Styling verwenden, das weiterhin die Anforderungen an den Farbkontrast erfüllt. Beispielsweise ist eine deaktivierte Schaltfläche/Überschrift, die ein nicht kollabierbares Akkordeon-Panel einführt, Inhalt, der weiterhin lesbar bleiben muss.

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

Die [`forced-colors` Media Query](/de/docs/Web/CSS/@media/forced-colors) erkennt, ob der [Benutzeragent](/de/docs/Glossary/User_agent) einen Zwangsfarbenmodus aktiviert hat; in diesem Fall werden sowohl die Text- als auch die Randfarben auf die [Systemfarbe `greyText`](/de/docs/Web/CSS/system-color#syntax) gesetzt.

Es ist auch wichtig zu beachten, dass beim Einsatz von `aria-disabled` anstelle des nativen HTML-Attributs das ARIA-Attribut die manuelle Stilgestaltung erfordert, die notwendig ist, um das Element in Windows High Contrast Mode visuell als deaktiviert zu kommunizieren.

> [!NOTE]
> Wenn Sie CSS's [`pointer-events: none;`](/de/docs/Web/CSS/pointer-events) verwenden, um ein Element nicht anklickbar zu machen, stellen Sie sicher, dass Sie die Interaktivität zusätzlich mit JavaScript deaktivieren. `pointer-events: none;` verhindert Mausklicks, aber nicht die Aktivierung des Elements über die Tastatur.

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

Wenn Sie zwischen `aria-disabled="true"` und `"false"` umschalten, verwenden Sie JavaScript, um:

1. Den Wert auf `false` zu setzen (oder das Attribut ganz zu entfernen),
2. Das Element zu aktivieren, und
3. Den Benutzer wissen zu lassen, dass die Steuerung jetzt aktiviert ist.

Wenn Sie lediglich CSS verwenden, um den deaktivierten Zustand mit einem Attribut-Selektor zu stylen, wird der Selektor nicht mehr zutreffen und das Styling des deaktivierten Zustands wird nicht mehr wirksam sein.

## Werte

- `true`

  - : Das Element ist deaktiviert

- `false`
  - : Das Element ist nicht deaktiviert

## Zugehörige Schnittstellen

- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des Attributs `aria-disabled` wider, das angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig bedienbar ist.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled) Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle spiegelt den Wert des Attributs `aria-disabled` wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role)
- [`composite`](/de/docs/Web/Accessibility/ARIA/Roles/composite_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
- [`input`](/de/docs/Web/Accessibility/ARIA/Roles/input_role)
- [`link`](/de/docs/Web/Accessibility/ARIA/Roles/link_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)

Vererbt in Rollen:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`select`](/de/docs/Web/Accessibility/ARIA/Roles/select_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Making disabled buttons more inclusive](https://css-tricks.com/making-disabled-buttons-more-inclusive/) von Sandrina Pereira
- [Styling for Windows high contrast with new standards for forced colors](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- [disabled](/de/docs/Web/HTML/Attributes/disabled)
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
