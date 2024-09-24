---
title: aria-disabled
slug: Web/Accessibility/ARIA/Attributes/aria-disabled
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der `aria-disabled` Zustand zeigt an, dass das Element wahrnehmbar, aber deaktiviert ist, so dass es nicht bearbeitbar oder anderweitig bedienbar ist.

## Beschreibung

Das `aria-disabled`-Attribut, wenn es auf `true` gesetzt ist, zeigt an, dass das Element, auf dem es gesetzt ist, und all seine fokussierbaren Nachkommen sich im deaktivierten Zustand befinden sollen. Diese Deklaration informiert Personen, die unterstützende Technologien wie Bildschirmleser verwenden, dass solche Elemente nicht bearbeitbar oder anderweitig bedienbar sein sollen.

Im Gegensatz zu HTMLs [disabled](/de/docs/Web/HTML/Element/input#disabled) Boolean-Attribut, das ein Formularelement semantisch als deaktiviert kommuniziert, dessen Styling ändert, um seinen Zustand widerzuspiegeln und jegliche Funktionalität unterdrückt sowie den Wert des Elements von der Teilnahme an der Formularübermittlung ausschließt, zeigt `aria-disabled="true"` <strong>nur</strong> semantisch an, dass diese Elemente deaktiviert sind. Webentwickler müssen manuell sicherstellen, dass solche Elemente ihre Funktionalität unterdrückt haben, wenn sie im deaktivierten Zustand angezeigt werden.

Wenn es erforderlich ist, native HTML-Formularsteuerelemente zu deaktivieren, müssen Entwickler das `disabled` Attribut angeben, da es alle allgemein erwarteten Funktionen bietet, um ein Steuerelement standardmäßig zu deaktivieren. Es kann jedoch Fälle geben, in denen Elemente als deaktiviert angezeigt werden müssen, aber dennoch verfügbar sind, damit Benutzer sie beim Navigieren mit der <kbd>Tab</kbd>-Taste finden können. Dies kann deren Auffindbarkeit verbessern, da sie nicht aus der Fokusreihenfolge der Webseite entfernt werden, da `aria-disabled` die Fokussierbarkeit solcher Elemente nicht ändert und die Elemente nicht durch das standardmäßige Browserstyling abgedunkelt werden, was sie leichter lesbar macht. Einige Beispiele, wo dies nützlich sein kann, umfassen:

- Das Kopfzeilenschaltflächenelement, das mit einem nicht zusammenklappbaren Akkordeonfenster verbunden ist,
- Eine Schaltfläche, die wichtig ist, um in der Fokusreihenfolge der Seite gehalten zu werden, deren Aktion jedoch derzeit nicht verfügbar ist – beispielsweise das Absenden eines Formulars,
- Vorübergehend inaktive Elemente in einem Menuwidget, die andernfalls über die standardmäßige Tastaturnavigation übersprungen würden.

In jedem dieser Fälle möchte man, dass Benutzer diese Elemente durch standardmäßige Tastaturnavigation finden, obwohl die Funktionalität dieser Steuerung entfernt oder "deaktiviert" ist. Entwickler müssen dennoch JavaScript verwenden, um die Funktionalität des Elements vollständig zu deaktivieren, während sie auch das Erscheinungsbild des Elements ändern, damit sehende Benutzer wissen, dass es deaktiviert ist.

> [!NOTE]
> Der Zustand des Deaktiviertseins gilt für das Element mit `aria-disabled="true"` und all seine fokussierbaren Nachkommen. Seien Sie vorsichtig bei der Verwendung dieses Attributes auf Containerelementen. Insbesondere in dem Fall, in dem ein Container sowohl Formularelemente als auch Links enthält – wobei die Absicht darin bestehen könnte, die Formularelemente als im deaktivierten Zustand anzuzeigen, jedoch <strong>nicht</strong> die Links als "deaktiviert" zu kommunizieren.

Ein weiterer Grund, das `aria-disabled`-Attribut über das HTML-`disabled`-Attribut zu verwenden, ist, wenn Sie benutzerdefinierte Steuerelemente erstellt haben, die als deaktiviert gekennzeichnet werden müssen, aber kein Element verwenden, das das `disabled` Attribut zulässt. Zum Beispiel wurde im folgenden Snippet ein `<div>` verwendet, um eine benutzerdefinierte Schaltfläche zu erstellen, die als deaktiviert gekennzeichnet werden muss. Das `<div>`-Element erwartet oder respektiert das `disabled`-Attribut jedoch nicht, auch wenn ihm eine `role="button"` gegeben wird, um seine exponierte ARIA-Rolle zu ändern. Das `aria-disabled`-Attribut ist erforderlich, um solche benutzerdefinierten Steuerelemente zu deaktivieren.

```html
<div role="button" aria-disabled="true" tabindex="-1">Edit</div>
```

Ähnlich wie bei der Notwendigkeit, JavaScript zu verwenden, um sicherzustellen, dass ein Element mit `aria-disabled="true"` nicht funktional ist, benötigt das Element auch Anpassungen im Styling. Im Gegensatz zum HTML-`disabled`-Attribut, bei dessen Angabe `:disabled`-User-Agent-Stile angewendet werden, wird bei Hinzufügen von `aria-disabled="true"` kein Styling angewendet. Das Element kann mit dem [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors) `[aria-disabled="true"]` gestylt werden.

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

Wenn Sie das `aria-disabled`-Attribut absichtlich verwenden, um ein Formularelement in der Tastaturfokusreihenfolge der Seite zu belassen, insbesondere wenn das Element wichtigen Inhalt darstellt, den alle Benutzer wahrnehmen können sollten, benötigen Sie möglicherweise ein Styling, das die Anforderungen an den Farbkontrast weiterhin erfüllt. Beispielsweise ist eine deaktivierte Schaltfläche/Überschrift, die ein nicht zusammenklappbares Akkordeonpanel einführt, ein Inhalt, der weiterhin lesbar sein muss.

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

Die [`forced-colors`-Media-Query](/de/docs/Web/CSS/@media/forced-colors) erkennt, ob der [User-Agent](/de/docs/Glossary/User_agent) einen erzwungenen Farbmodus aktiviert hat; wenn ja, werden die Text- und Randfarben auf die [Systemfarbe `grayText`](/de/docs/Web/CSS/system-color#syntax) gesetzt.

Ein weiterer zu beachtender Punkt bei der Verwendung von `aria-disabled` gegenüber dem nativen HTML-Attribut ist, dass das ARIA-Attribut das manuelle Styling erfordert, das notwendig ist, um das Element in Windows High Contrast Mode visuell als deaktiviert zu kommunizieren.

> [!NOTE]
> Wenn Sie CSS's [`pointer-events: none;`](/de/docs/Web/CSS/pointer-events) verwenden, um ein Element nicht anklickbar zu machen, stellen Sie sicher, dass Sie die Interaktivität auch mit JavaScript deaktivieren. `pointer-events: none;` verhindert Mausklicks, hindert jedoch das Element nicht daran, über die Tastatur aktiviert zu werden.

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

Beim Umschalten von `aria-disabled="true"` auf `"false"`, verwenden Sie JavaScript um:

1. Den Wert auf `false` umschalten (oder das Attribut vollständig entfernen),
2. Das Element aktivieren und
3. Benutzer wissen zu lassen, dass die Steuerung jetzt aktiviert ist.

Wenn Sie nur CSS verwenden, um den deaktivierten Zustand mit einem Attributselektor zu stylen, wird der Selektor nicht mehr übereinstimmen und das deaktivierte Styling wird nicht mehr wirksam sein.

## Werte

- `true`

  - : Das Element ist deaktiviert

- `false`
  - : Das Element ist nicht deaktiviert

## Zugehörige Schnittstellen

- {{domxref("Element.ariaDisabled")}}
  - : Die [`ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled) Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des `aria-disabled`-Attributs wider, was darauf hinweist, dass das Element wahrnehmbar, aber deaktiviert ist, so dass es nicht bearbeitbar oder anderweitig bedienbar ist.
- {{domxref("ElementInternals.ariaDisabled")}}
  - : Die [`ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled) Eigenschaft der {{domxref("ElementInternals")}} Schnittstelle spiegelt den Wert des `aria-disabled`-Attributs wider.

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
- [Styling für Windows High Contrast mit neuen Standards für erzwungene Farben](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- [disabled](/de/docs/Web/HTML/Attributes/disabled)
- {{domxref("Element.ariaDisabled")}}
- {{domxref("ElementInternals.ariaDisabled")}}
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
