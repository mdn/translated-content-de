---
title: aria-disabled
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Der `aria-disabled`-Zustand zeigt an, dass das Element wahrnehmbar, aber deaktiviert ist und daher nicht bearbeitet oder anderweitig bedienbar ist.

## Beschreibung

Das `aria-disabled`-Attribut zeigt, wenn es auf `true` gesetzt ist, an, dass das Element, auf das es gesetzt ist, und alle seine fokussierbaren Nachkommen im deaktivierten Zustand sein sollen. Diese Deklaration informiert Menschen, die unterstützende Technologien wie Bildschirmlesegeräte verwenden, dass solche Elemente nicht bearbeitet oder anderweitig bedienbar sein sollen.

Im Gegensatz zum HTML-Boolean-Attribut [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled), das ein Formularsteuerungselement semantisch als deaktiviert kommuniziert, sein Styling anpasst, um seinen Zustand widerzuspiegeln, und alle Funktionalität unterdrückt sowie verhindert, dass der Wert des Elements an der Formularübermittlung teilnimmt, macht `aria-disabled="true"` diese Elemente <strong>nur</strong> semantisch als deaktiviert sichtbar. Webentwickler müssen manuell sicherstellen, dass solche Elemente ihre Funktionalität unterdrückt haben, wenn sie als deaktiviert dargestellt werden.

Wenn Sie native HTML-Formularsteuerungen deaktivieren müssen, sollten Entwickler das `disabled`-Attribut angeben, da es standardmäßig alle allgemein erwarteten Funktionen zum Deaktivieren eines Steuerelements bietet. Es kann jedoch Fälle geben, in denen Elemente als deaktiviert dargestellt werden müssen, aber Benutzern dennoch zur Verfügung stehen sollen, wenn sie mit der <kbd>Tab</kbd>-Taste navigieren. Dies kann ihre Auffindbarkeit verbessern, da sie nicht aus der Fokussierreihenfolge der Webseite entfernt werden. `aria-disabled` ändert nicht die Fokussierbarkeit solcher Elemente, und die Elemente werden auch nicht durch das standardmäßige Browserstyling gedimmt, was sie leichter lesbar macht. Einige Beispiele, wo dies nützlich sein kann, sind:

- Das Header-Button-Element, das mit einem nicht-kollabierbaren Akkordeon-Panel verbunden ist,
- Ein Button, der wichtig ist, um in der Fokussierreihenfolge der Seite zu bleiben, dessen Aktion jedoch derzeit nicht verfügbar ist, wie z.B. das Absenden eines Formulars,
- Temporär inaktive Elemente in einem Menü-Widget, die sonst bei der Standardtastaturnavigation übersprungen würden.

In jedem dieser Fälle möchte man, dass Benutzer diese Elemente durch die Standardtastaturnavigation finden, obwohl die Funktionalität dieser Steuerung entfernt oder "deaktiviert" ist. Entwickler müssen weiterhin JavaScript verwenden, um die Funktionalität des Elements vollständig zu deaktivieren, während sie auch das Erscheinungsbild des Elements ändern, damit sehende Benutzer wissen, dass es deaktiviert ist.

> [!NOTE]
> Der Zustand des Deaktiviertseins bezieht sich auf das Element mit `aria-disabled="true"` und alle seine fokussierbaren Nachkommen. Seien Sie vorsichtig, wenn Sie dieses Attribut auf Containerelemente anwenden. Besonders im Fall, in dem ein Container sowohl Formularsteuerungen als auch Links enthält - wo die Absicht bestehen kann, die Formularsteuerungen als im deaktivierten Zustand darzustellen, aber <strong>nicht</strong> die Links als "deaktiviert" zu markieren.

Ein weiterer Grund zur Verwendung des `aria-disabled`-Attributs gegenüber dem HTML-`disabled`-Attribut ist, wenn Sie benutzerdefinierte Steuerungen erstellt haben, die als deaktiviert markiert werden müssen, aber kein Element verwenden, das das `disabled`-Attribut erlaubt. In folgendem Codebeispiel wurde beispielsweise ein `<div>` verwendet, um einen benutzerdefinierten Button zu erstellen, der als deaktiviert markiert werden muss. Das `<div>`-Element erwartet oder respektiert das `disabled`-Attribut jedoch nicht, selbst wenn ihm eine `role="button"` gegeben würde, um seine ARIA-Rolle zu ändern. Das `aria-disabled`-Attribut ist erforderlich, um solche benutzerdefinierten Steuerungen zu deaktivieren.

```html
<div role="button" aria-disabled="true" tabindex="-1">Edit</div>
```

Ähnlich wie bei der Notwendigkeit, JavaScript zu verwenden, um sicherzustellen, dass ein Element mit `aria-disabled="true"` nicht funktional ist, sind auch Stiländerungen erforderlich. Im Gegensatz zum HTML-`disabled`-Attribut, bei dem die Angabe die Anwendung von `:disabled`-Benutzeragentenstilen ermöglicht, tut dies `aria-disabled="true"` nicht. Das Element kann mit dem [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[aria-disabled="true"]` gestylt werden.

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

Wenn Sie absichtlich das `aria-disabled`-Attribut verwenden, um einer Formularsteuerung zu erlauben, in der Tastaturfokussierreihenfolge der Seite zu bleiben, insbesondere wenn das Element für alle Benutzer wahrnehmbaren wichtigen Inhalt repräsentiert, dann müssen Sie möglicherweise ein Styling verwenden, das weiterhin die Farbkontrastanforderungen erfüllt. Ein deaktivierter Button/Überschrift, der ein nicht-kollabierbares Akkordeon-Panel einführt, ist Inhalt, der weiterhin lesbar sein muss.

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

Die [`forced-colors` Medienabfrage](/de/docs/Web/CSS/@media/forced-colors) erkennt, ob der {{Glossary("User_agent", "Benutzeragent")}} einen Modus mit erzwungenen Farben aktiviert hat; wenn ja, werden sowohl die Text- als auch die Randfarben auf die [Systemfarbe `greyText`](/de/docs/Web/CSS/system-color#syntax) gesetzt.

Ein weiterer Punkt, wenn Sie `aria-disabled` anstelle des nativen HTML-Attributs verwenden, ist, dass das ARIA-Attribut das manuelle Styling erfordert, das notwendig ist, um das Element im Windows High Contrast Mode visuell als deaktiviert zu kommunizieren.

> [!NOTE]
> Wenn Sie CSS's [`pointer-events: none;`](/de/docs/Web/CSS/pointer-events) verwenden, um ein Element nicht anklickbar zu machen, stellen Sie sicher, dass Sie auch die Interaktivität mit JavaScript deaktivieren. `pointer-events: none;` verhindert Mausklicks, verhindert jedoch nicht, dass das Element über die Tastatur aktiviert wird.

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

Wenn Sie von `aria-disabled="true"` auf `"false"` umschalten, verwenden Sie JavaScript, um:

1. den Wert auf `false` umzuschalten (oder das Attribut ganz zu entfernen),
2. das Element zu aktivieren, und
3. dem Benutzer mitzuteilen, dass die Steuerung jetzt aktiviert ist.

Wenn Sie nur CSS verwendet haben, um den deaktivierten Zustand mit einem Attributselektor zu stylen, wird der Selektor nicht mehr übereinstimmen und das deaktivierte Styling wird nicht mehr wirksam sein.

## Werte

- `true`

  - : Das Element ist deaktiviert

- `false`
  - : Das Element ist nicht deaktiviert

## Zugehörige Schnittstellen

- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-disabled`-Attributs wider, das anzeigt, dass das Element wahrnehmbar, aber deaktiviert ist und daher nicht bearbeitet oder anderweitig bedienbar ist.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled) Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des `aria-disabled`-Attributs wider.

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
- [Styling für Windows High Contrast mit neuen Standards für erzwungene Farben](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- [disabled](/de/docs/Web/HTML/Reference/Attributes/disabled)
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
