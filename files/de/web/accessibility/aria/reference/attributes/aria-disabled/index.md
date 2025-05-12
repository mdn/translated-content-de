---
title: "ARIA: aria-disabled Attribut"
short-title: aria-disabled
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-disabled
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Der `aria-disabled` Zustand zeigt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig bedient werden kann.

## Beschreibung

Das `aria-disabled` Attribut zeigt, wenn auf `true` gesetzt, an, dass das Element, auf das es gesetzt ist, und alle seine fokussierbaren Nachkommen im deaktivierten Zustand sein sollen. Diese Deklaration informiert Benutzer, die unterstützende Technologien verwenden, wie Screenreader, dass solche Elemente nicht bearbeitet oder anderweitig bedient werden sollen.

Im Gegensatz zum `disabled`-Boolean-Attribut von HTML, das ein Formularelement semantisch als deaktiviert kommuniziert, sein Styling ändert, um seinen Zustand widerzuspiegeln, und die gesamte Funktionalität unterdrückt, zusammen mit der Verhinderung, dass der Wert des Elements an der Formularübermittlung teilnimmt, macht `aria-disabled="true"` diese Elemente <strong>nur</strong> semantisch als deaktiviert bekannt. Webentwickler müssen manuell sicherstellen, dass solche Elemente ihre Funktionalität unterdrückt haben, wenn sie im deaktivierten Zustand dargestellt werden.

Wenn nativer HTML-Formularsteuerelemente deaktiviert werden müssen, müssen Entwickler das `disabled`-Attribut angeben, da es alle im Allgemeinen erwarteten Funktionen eines deaktivierten Steuerelements standardmäßig bietet. Es kann jedoch Fälle geben, in denen Elemente als deaktiviert dargestellt werden müssen, aber für Benutzer verfügbar bleiben sollen, um sie bei der Navigation über die <kbd>Tab</kbd>-Taste zu finden. Dadurch kann deren Auffindbarkeit verbessert werden, da sie nicht aus der Fokusreihenfolge der Webseite entfernt werden, da `aria-disabled` die Fokussierbarkeit solcher Elemente nicht ändert, noch werden die Elemente durch das Standard-Browser-Styling abgeblendet, was sie leichter lesbar macht. Einige Beispiele, bei denen dies nützlich sein kann, umfassen:

- Das Header-Button-Element, das mit einem nicht kollabierbaren Akkordeon-Bereich verbunden ist,
- Ein Button, der wichtig ist, in der Fokusreihenfolge der Seite zu bleiben, dessen Aktion jedoch derzeit nicht verfügbar ist - wie das Übermitteln eines Formulars,
- Vorübergehend inaktive Elemente in einem Menü-Widget, die ansonsten bei der Standardtastaturnavigation übersprungen würden.

In jedem dieser Fälle möchte man Benutzern ermöglichen, diese Elemente durch Standardtastaturnavigation zu finden, obwohl die Funktionalität dieser Steuerung entfernt oder "deaktiviert" ist. Entwickler müssen dennoch JavaScript verwenden, um die Funktionalität des Elements vollständig zu deaktivieren und auch das Erscheinungsbild des Elements zu ändern, damit sehende Benutzer wissen, dass es deaktiviert ist.

> [!NOTE]
> Der Zustand des Deaktiviertseins gilt für das Element mit `aria-disabled="true"` und alle seine fokussierbaren Nachkommen. Seien Sie vorsichtig, wenn Sie dieses Attribut auf Containerelementen verwenden. Insbesondere in dem Fall, in dem ein Container sowohl Formularelemente als auch Links enthält - wo die Absicht sein könnte, die Formularelemente als im deaktivierten Zustand darzustellen, jedoch <strong>nicht</strong> die Links als "deaktiviert" zu kommunizieren.

Ein weiterer Grund, das `aria-disabled` Attribut über das HTML-`disabled` Attribut zu nutzen, besteht darin, wenn Sie benutzerdefinierte Steuerelemente erstellt haben, die als deaktiviert markiert werden müssen, aber kein Element verwenden, das das `disabled` Attribut erlaubt. Zum Beispiel in folgendem Codeausschnitt wurde ein `<div>` verwendet, um einen benutzerdefinierten Button zu erstellen, der als deaktiviert markiert werden muss. Das `<div>`-Element erwartet oder respektiert jedoch nicht das `disabled`-Attribut - auch wenn ihm ein `role="button"` zugewiesen wird, um seine exponierte ARIA-Rolle zu ändern. Das `aria-disabled` Attribut ist erforderlich, um solche benutzerdefinierten Steuerelemente zu deaktivieren.

```html
<div role="button" aria-disabled="true" tabindex="-1">Edit</div>
```

Ähnlich wie JavaScript erforderlich ist, um sicherzustellen, dass ein Element mit `aria-disabled="true"` nicht funktionstüchtig ist, darf das Element auch Styling-Anpassungen erfordern. Im Gegensatz zum HTML-`disabled`-Attribut, bei dem dessen Angabe `:disabled`-Benutzeragenten-Stile anwendet, erfolgt bei `aria-disabled="true"` keine solche Anwendung. Das Element kann mit dem [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[aria-disabled="true"]` gestylt werden.

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

Wenn Sie das `aria-disabled` Attribut gezielt verwenden, um ein Formularelement in der Tastaturfokus-Reihenfolge der Seite zu belassen, insbesondere wenn das Element wichtigen Inhalt darstellt, den alle Benutzer wahrnehmen können sollten, müssen Sie möglicherweise ein Styling verwenden, das dennoch die Anforderungen an den Farbkontrast erfüllt. Beispielsweise ist ein deaktivierter Button/Überschrift, der ein nicht kollabierbares Akkordeon-Panel einführt, Inhalt, der weiterhin lesbar sein muss.

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

Die [`forced-colors` Media Query](/de/docs/Web/CSS/@media/forced-colors) erkennt, ob der {{Glossary("User_agent", "Benutzeragent")}} einen erzwungenen Farbmodus aktiviert hat; in diesem Fall werden sowohl die Text- als auch die Umrandungsfarben auf die [Systemfarbe `greyText`](/de/docs/Web/CSS/system-color#syntax) gesetzt.

Ein weiteres Detail, das zu beachten ist, wenn `aria-disabled` gegenüber dem nativen HTML-Attribut verwendet wird, ist, dass das ARIA-Attribut das manuelle Styling erfordert, das notwendig ist, um das Element in Windows High Contrast Mode visuell als deaktiviert zu kommunizieren.

> [!NOTE]
> Wenn Sie CSS's [`pointer-events: none;`](/de/docs/Web/CSS/pointer-events) verwenden, um ein Element unanklickbar zu machen, stellen Sie sicher, dass Sie die Interaktivität auch mit JavaScript deaktivieren. `pointer-events: none;` verhindert Mausklicks, verhindert jedoch nicht, dass das Element über die Tastatur aktiviert wird.

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

Beim Umschalten von `aria-disabled="true"` auf `"false"`, verwenden Sie JavaScript, um:

1. Den Wert auf `false` zu setzen (oder das Attribut vollständig zu entfernen),
2. Das Element zu aktivieren, und
3. Den Benutzer darüber zu informieren, dass die Steuerung nun aktiviert ist.

Wenn Sie nur CSS verwendet haben, um den deaktivierten Zustand mit einem Attributselektor zu gestalten, wird der Selektor nicht mehr übereinstimmen und das deaktivierte Styling wird nicht mehr wirksam sein.

## Werte

- `true`

  - : Das Element ist deaktiviert

- `false`
  - : Das Element ist nicht deaktiviert

## Zugehörige Schnittstellen

- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-disabled` Attributs wider und zeigt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig bedient werden kann.
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

Geerbt in Rollen:

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
