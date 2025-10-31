---
title: "ARIA: aria-disabled Attribut"
short-title: aria-disabled
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-disabled
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der `aria-disabled` Zustand zeigt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.

## Beschreibung

Das `aria-disabled` Attribut, das auf `true` gesetzt ist, zeigt an, dass das Element, auf dem es gesetzt ist, sowie alle seine fokussierbaren Nachkommen im deaktivierten Zustand sein sollen. Diese Deklaration informiert Menschen, die unterstützende Technologien wie Screenreader verwenden, dass solche Elemente nicht bearbeitbar oder anderweitig bedienbar sind.

Im Gegensatz zum HTML [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) Boolean-Attribut, das ein Formularsteuerelement semantisch als deaktiviert kennzeichnet, dessen Styling ändert, um seinen Zustand widerzuspiegeln, und alle Funktionen unterdrückt sowie den Wert des Elements daran hindert, an der Formularübermittlung teilzunehmen, macht `aria-disabled="true"` <strong>nur</strong> diese Elemente semantisch als deaktiviert erkennbar. Webentwickler müssen manuell sicherstellen, dass diese Elemente ihre Funktionalität unterdrücken, wenn sie im deaktivierten Zustand angezeigt werden.

Wenn native HTML-Formularsteuerelemente deaktiviert werden müssen, müssen Entwickler das `disabled` Attribut angeben, da es standardmäßig alle allgemein erwarteten Funktionen eines deaktivierten Steuerelements bietet. Es kann jedoch Fälle geben, in denen Elemente als deaktiviert angezeigt werden müssen, aber dennoch für Benutzer auffindbar sein sollen, wenn sie über die <kbd>Tab</kbd>-Taste navigieren. Dadurch kann ihre Auffindbarkeit verbessert werden, da sie nicht aus der Fokusreihenfolge der Webseite entfernt werden, da `aria-disabled` die Fokussierbarkeit solcher Elemente nicht ändert und die Elemente nicht durch Standardseitenstile abgedunkelt werden, sodass sie leichter lesbar sind. Einige Beispiele, in denen dies nützlich sein kann, sind:

- Das Header-Button-Element, das einem nicht kollabierbaren Akkordeon-Panel zugeordnet ist,
- Ein Button, der wichtig ist, in der Fokusreihenfolge der Seite zu bleiben, dessen Aktion derzeit jedoch nicht verfügbar ist - wie das Absenden eines Formulars,
- Vorübergehend inaktive Elemente in einem Menü-Widget, die sonst bei der Standardtastaturnavigation übersprungen würden.

In jedem dieser Fälle möchte man, dass Benutzer diese Elemente über die Standardtastaturnavigation finden können, obwohl die Funktionalität dieses Steuerelements entfernt oder "deaktiviert" ist. Entwickler müssen dennoch JavaScript verwenden, um die Funktionalität des Elements vollständig zu deaktivieren, und auch das Erscheinungsbild des Elements ändern, damit sehende Benutzer wissen, dass es deaktiviert ist.

> [!NOTE]
> Der Zustand des Deaktiviertseins gilt für das Element mit `aria-disabled="true"` und alle seine fokussierbaren Nachkommen. Seien Sie vorsichtig, wenn Sie dieses Attribut auf Containerelementen verwenden. Insbesondere in Fällen, in denen ein Container sowohl Formularsteuerelemente als auch Links enthält - wo die Absicht darin bestehen könnte, die Formularsteuerelemente als deaktiviert anzuzeigen, aber <strong>nicht</strong> die Links als "deaktiviert" zu kommunizieren.

Ein weiterer Grund, das `aria-disabled` Attribut statt des HTML `disabled` Attributs zu verwenden, ist, wenn Sie benutzerdefinierte Steuerelemente erstellt haben, die als deaktiviert markiert werden müssen, aber kein Element verwenden, das das `disabled` Attribut zulässt. Zum Beispiel wurde im folgenden Snippet ein `<div>` verwendet, um einen benutzerdefinierten Button zu erstellen, der als deaktiviert markiert werden muss. Das `<div>`-Element erwartet oder respektiert das `disabled`-Attribut jedoch nicht - selbst wenn ihm ein `role="button"` gegeben wird, um seine ARIA-Rolle zu ändern. Das `aria-disabled` Attribut ist erforderlich, um solche benutzerdefinierten Steuerelemente zu deaktivieren.

```html
<div role="button" aria-disabled="true" tabindex="-1">Edit</div>
```

Ähnlich wie das Verwenden von JavaScript, um sicherzustellen, dass ein Element mit `aria-disabled="true"` nicht funktional ist, sind auch Stiländerungen erforderlich. Im Gegensatz zum HTML `disabled` Attribut, bei dem die Angabe des Attributs `:disabled`-Stile von User Agents bereitstellt, ist dies bei `aria-disabled="true"` nicht der Fall. Das Element kann mit dem [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors) `[aria-disabled="true"]` gestylt werden.

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

Wenn Sie das `aria-disabled` Attribut absichtlich verwenden, um ein Formularsteuerelement in der Tastaturfokusreihenfolge der Seite zu belassen, insbesondere wenn das Element wichtigen Inhalt darstellt, den alle Benutzer wahrnehmen können sollten, müssen Sie möglicherweise Stile verwenden, die weiterhin die Anforderungen an den Farbkontrast erfüllen. Zum Beispiel ist ein deaktivierter Button/Überschrift, der ein nicht kollabierbares Akkordeon-Panel einführt, ein Inhalt, der weiterhin lesbar sein muss.

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

Die [`forced-colors` Media Query](/de/docs/Web/CSS/@media/forced-colors) erkennt, ob der {{Glossary("User_agent", "User Agent")}} einen erzwungenen Farbmodus aktiviert hat; wenn ja, werden sowohl die Text- als auch die Randfarben auf die [Systemfarbe `greyText`](/de/docs/Web/CSS/system-color#syntax) gesetzt.

Ein weiterer zu berücksichtigender Punkt beim Verwenden von `aria-disabled` anstelle des nativen HTML-Attributs ist, dass das ARIA-Attribut das manuelle Styling erfordert, das notwendig ist, um das Element im Windows High Contrast Mode visuell als deaktiviert zu kommunizieren.

> [!NOTE]
> Wenn Sie CSS' [`pointer-events: none;`](/de/docs/Web/CSS/Reference/Properties/pointer-events) verwenden, um ein Element nicht anklickbar zu machen, stellen Sie sicher, dass Sie die Interaktivität auch mit JavaScript deaktivieren. `pointer-events: none;` verhindert Mausklicks, verhindert jedoch nicht, dass das Element über die Tastatur aktiviert wird.

```js
function onClick(event) {
  event.preventDefault();
}

function toggleDisabled(element, status, update) {
  if (status) {
    // element.input.disabled = false;
    element.setAttribute("aria-disabled", "false");
    update.textContent = "The element is now enabled.";
    element.addEventListener("click", onClick);
  } else {
    // element.input.disabled = true;
    element.setAttribute("aria-disabled", "true");
    update.textContent = "The element is now disabled.";
    element.removeEventListener("click", onClick);
  }
}
```

Wenn Sie von `aria-disabled="true"` zu `"false"` wechseln, verwenden Sie JavaScript, um:

1. Den Wert auf `false` umzuschalten (oder das Attribut ganz zu entfernen),
2. Das Element zu aktivieren, und
3. Dem Benutzer mitzuteilen, dass die Steuerung jetzt aktiviert ist.

Wenn Sie nur CSS verwenden, um den deaktivierten Zustand mithilfe eines Attributselektors zu stylen, wird der Selektor nicht mehr übereinstimmen und das Styling für den deaktivierten Zustand wird nicht mehr wirksam sein.

## Werte

- `true`
  - : Das Element ist deaktiviert

- `false`
  - : Das Element ist nicht deaktiviert

## Zugehörige Schnittstellen

- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-disabled` Attributs wider, der anzeigt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.
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

Vererbt in Rollen:

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
- [Styling for Windows high contrast with new standards for forced colors](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- [disabled](/de/docs/Web/HTML/Reference/Attributes/disabled)
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
