---
title: aria-disabled
slug: Web/Accessibility/ARIA/Attributes/aria-disabled
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der `aria-disabled` Zustand zeigt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.

## Beschreibung

Das `aria-disabled` Attribut zeigt, wenn es auf `true` gesetzt ist, an, dass das Element, auf das es angewendet wird, und alle seine fokussierbaren Nachkommen im deaktivierten Zustand sein sollen. Diese Deklaration informiert Menschen, die unterstützende Technologien verwenden, wie Bildschirmlesegeräte, dass solche Elemente nicht bearbeitbar oder anderweitig bedienbar sind.

Im Gegensatz zum HTML-Boolean-Attribut [`disabled`](/de/docs/Web/HTML/Element/input#disabled), das ein Formularsteuerelement semantisch als deaktiviert kommuniziert, dessen Styling ändert, um seinen Zustand widerzuspiegeln, und alle Funktionalitäten unterbindet, während der Wert des Elements nicht an der Formularübermittlung teilnehmen kann, wird durch `aria-disabled="true"` <strong>nur</strong> semantisch angezeigt, dass diese Elemente deaktiviert sind. Webentwickler müssen manuell sicherstellen, dass solche Elemente ihre Funktionalität verlieren, wenn sie als deaktiviert angezeigt werden.

Beim Deaktivieren nativer HTML-Formularsteuerelemente müssen Entwickler das `disabled` Attribut angeben, da es standardmäßig alle allgemein erwarteten Funktionen zum Deaktivieren eines Steuerelements bietet. Es kann jedoch Fälle geben, in denen Elemente als deaktiviert angezeigt werden müssen, aber dennoch den Nutzern zur Navigation über die <kbd>Tab</kbd>-Taste zur Verfügung stehen müssen. Dadurch kann ihre Auffindbarkeit verbessert werden, da sie nicht aus der Fokusreihenfolge der Webseite entfernt werden, da `aria-disabled` die Fokussierbarkeit solcher Elemente nicht ändert und die Elemente nicht durch das Standardbrowser-Styling abgedimmt werden, was sie leichter lesbar macht. Einige Beispiele, wo dies nützlich sein könnte, sind:

- Das Kopfzeilenelement eines nicht zusammenklappbaren Akkordeonelements,
- Eine Schaltfläche, die in der Fokusreihenfolge der Seite bleiben muss, deren Aktion momentan jedoch nicht verfügbar ist - wie z.B. das Absenden eines Formulars,
- Vorübergehend inaktive Elemente in einem Menü-Widget, die über die standardmäßige Tastaturnavigation übersprungen würden.

In jedem dieser Fälle möchte man möglicherweise, dass Benutzer diese Elemente über die standardmäßige Tastaturnavigation finden, obwohl die Funktionalität dieser Steuerung entfernt oder "deaktiviert" ist. Entwickler müssen weiterhin JavaScript verwenden, um die Funktionalität des Elements vollständig zu deaktivieren und gleichzeitig das Erscheinungsbild des Elements zu ändern, damit sehende Benutzer wissen, dass es deaktiviert ist.

> [!NOTE]
> Der Zustand des Deaktiviertseins gilt für das Element mit `aria-disabled="true"` und alle seine fokussierbaren Nachkommen. Achten Sie darauf, dieses Attribut auf Container-Elementen zu verwenden. Besonders in Fällen, in denen ein Container sowohl Formularsteuerelemente als auch Links enthalten kann - wobei die Absicht darin bestehen könnte, die Formularsteuerelemente als deaktiviert anzuzeigen, aber <strong>nicht</strong> zu kommunizieren, dass die Links "deaktiviert" sind.

Ein weiterer Grund, das `aria-disabled` Attribut gegenüber dem HTML-`disabled` Attribut zu verwenden, ist, wenn Sie benutzerdefinierte Steuerelemente erstellt haben, die als deaktiviert markiert werden müssen, aber kein Element verwenden, das das `disabled` Attribut zulässt. In folgendem Beispiel wurde ein `<div>` verwendet, um eine benutzerdefinierte Schaltfläche zu erstellen, die als deaktiviert markiert werden muss. Das `<div>`-Element erwartet jedoch nicht und beachtet das `disabled`-Attribut nicht - selbst wenn es eine `role="button"` erhält, um seine exponierte ARIA-Rolle zu ändern. Das `aria-disabled` Attribut ist erforderlich, um solche benutzerdefinierten Steuerelemente zu deaktivieren.

```html
<div role="button" aria-disabled="true" tabindex="-1">Edit</div>
```

Ähnlich wie beim Verwenden von JavaScript, um sicherzustellen, dass ein Element mit `aria-disabled="true"` keine Funktionalität besitzt, müssen auch Stylinganpassungen vorgenommen werden. Im Gegensatz zum HTML-`disabled` Attribut, bei dem dessen Spezifikation `:disabled` Benutzeragentenstile angewendet werden, fehlt bei `aria-disabled="true"` dieser Effekt. Das Element kann mit dem [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[aria-disabled="true"]` gestylt werden.

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

Wenn Sie das `aria-disabled` Attribut absichtlich verwenden, um ein Formularsteuerelement in der Fokustastennavigationsreihenfolge der Seite zu belassen, insbesondere wenn das Element wichtige Inhalte darstellt, die für alle Benutzer wahrnehmbar sein sollten, dann sollten Sie Styling verwenden, das weiterhin die Anforderungen der Farbkonstrastre erfüllt. Beispielsweise ist eine deaktivierte Schaltfläche/Überschrift, die ein nicht zusammenklappbares Akkordeon-Panel einführt, Inhalt, der lesbar bleiben muss.

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

Die [`forced-colors` Media Query](/de/docs/Web/CSS/@media/forced-colors) erkennt, ob der [User Agent](/de/docs/Glossary/User_agent) einen Modus mit erzwungenen Farben aktiviert hat; wenn dies der Fall ist, werden Text- und Rahmenfarben beide auf die [Systemfarbe `greyText`](/de/docs/Web/CSS/system-color#syntax) gesetzt.

Neben dem Verwenden von `aria-disabled` statt des nativen HTML-Attributs müssen Sie bedenken, dass das ARIA-Attribut eine manuelle Gestaltung erfordert, um das Element als deaktiviert im Windows-Hochkontrastmodus visuell zu kommunizieren.

> [!NOTE]
> Wenn Sie CSS's [`pointer-events: none;`](/de/docs/Web/CSS/pointer-events) verwenden, um ein Element nicht anklickbar zu machen, stellen Sie sicher, dass Sie die Interaktivität auch mit JavaScript deaktivieren. `pointer-events: none;` verhindert Mausklicks, unterbindet jedoch nicht, dass das Element über die Tastatur aktiviert wird.

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

Beim Umschalten von `aria-disabled="true"` auf `"false"`, verwenden Sie JavaScript, um:

1. Den Wert auf `false` zu ändern (oder das Attribut vollständig zu entfernen),
2. Das Element zu aktivieren und
3. Den Benutzer darüber zu informieren, dass die Steuerung jetzt aktiviert ist.

Wenn Sie nur CSS verwenden, um den deaktivierten Zustand mit einem Attributselektor zu stylen, passt der Selektor nicht mehr, und das Styling für den deaktivierten Zustand wird nicht mehr angewendet.

## Werte

- `true`

  - : Das Element ist deaktiviert

- `false`
  - : Das Element ist nicht deaktiviert

## Zugehörige Schnittstellen

- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-disabled` Attributs wider, das angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled) Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle spiegelt den Wert des `aria-disabled` Attributs wider.

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

Erbt in Rollen:

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
