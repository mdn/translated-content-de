---
title: "ARIA: aria-disabled Attribut"
short-title: aria-disabled
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-disabled
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der Zustand `aria-disabled` gibt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.

## Beschreibung

Das Attribut `aria-disabled`, wenn es auf `true` gesetzt ist, zeigt an, dass das Element, auf dem es gesetzt ist, und alle seine fokussierbaren Nachkommen im deaktivierten Zustand sein sollen. Diese Deklaration informiert Menschen, die Hilfstechnologien wie Bildschirmleser verwenden, dass solche Elemente nicht bearbeitbar oder anderweitig bedienbar sein sollen.

Im Gegensatz zum HTML-Booleschen Attribut [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled), das ein Formularelement als semantisch deaktiviert meldet, sein Styling ändert, um seinen Zustand zu reflektieren und alle Funktionalität unterdrückt, zusammen mit der Verhinderung, dass der Wert des Elements bei der Formularübermittlung beteiligt ist, legt `aria-disabled="true"` <strong>nur</strong> diese Elemente semantisch als deaktiviert offen. Webentwickler müssen manuell sicherstellen, dass solche Elemente ihre Funktionalität unterdrückt haben, wenn sie dem deaktivierten Zustand ausgesetzt sind.

Wenn es erforderlich ist, native HTML-Formularelemente zu deaktivieren, müssen Entwickler das `disabled`-Attribut angeben, da es alle allgemein erwarteten Funktionen zur Deaktivierung eines Steuerelements bietet. Es kann jedoch Fälle geben, in denen Elemente als deaktiviert angezeigt werden müssen, aber dennoch für Benutzer verfügbar sind, die über die <kbd>Tab</kbd>-Taste navigieren. Dadurch kann ihre Auffindbarkeit verbessert werden, da sie nicht aus der Fokusreihenfolge der Webseite entfernt werden, da `aria-disabled` die Fokussierbarkeit solcher Elemente nicht ändert, noch werden die Elemente durch das Standard-Browser-Styling abgeblendet, was sie leichter lesbar macht. Einige Beispiele dafür, wo dies nützlich sein kann, sind:

- Das Header-Button-Element, das mit einem nicht zusammenklappbaren Akkordeon-Panel verbunden ist,
- Eine Schaltfläche, die wichtig ist, in der Fokusreihenfolge der Seite zu bleiben, aber deren Aktion derzeit nicht verfügbar ist – wie etwa das Absenden eines Formulars,
- Vorübergehend inaktive Elemente in einem Menü-Widget, die andernfalls bei der Standardtastaturnavigation übersprungen würden.

In allen diesen Fällen möchte man, dass Benutzer diese Elemente durch die Standardtastaturnavigation finden, obwohl die Funktionalität dieser Steuerung entfernt oder "deaktiviert" wurde. Entwickler müssen weiterhin JavaScript verwenden, um die Funktionalität des Elements vollständig zu deaktivieren und das Erscheinungsbild des Elements zu ändern, sodass sehende Benutzer wissen, dass es deaktiviert ist.

> [!NOTE]
> Der Zustand des Deaktiviertseins gilt für das Element mit `aria-disabled="true"` und alle seine fokussierbaren Nachkommen. Seien Sie vorsichtig, wenn Sie dieses Attribut auf Containerelementen verwenden. Insbesondere in dem Fall, in dem ein Container sowohl Formularelemente als auch Links hat - wo die Absicht bestehen könnte, die Formularelemente als im deaktivierten Zustand anzuzeigen, aber <strong>nicht</strong>, die Links als "deaktiviert" zu kommunizieren.

Ein weiterer Grund, das `aria-disabled`-Attribut anstelle des HTML-`disabled`-Attributs zu verwenden, ist, wenn Sie benutzerdefinierte Steuerelemente erstellt haben, die als deaktiviert markiert werden müssen, aber kein Element verwenden, das das `disabled`-Attribut zulässt. Beispielsweise wurde im folgenden Codeausschnitt ein `<div>` verwendet, um eine benutzerdefinierte Schaltfläche zu erstellen, die als deaktiviert markiert werden muss. Das `<div>`-Element erwartet jedoch nicht und respektiert auch nicht das `disabled`-Attribut - selbst wenn es die Rolle `role="button"` hätte, um seine offen gelegte ARIA-Rolle zu ändern. Das `aria-disabled`-Attribut ist erforderlich, um solche benutzerdefinierten Steuerelemente zu deaktivieren.

```html
<div role="button" aria-disabled="true" tabindex="-1">Edit</div>
```

Ähnlich wie bei der Notwendigkeit, JavaScript zu verwenden, um sicherzustellen, dass ein Element mit `aria-disabled="true"` nicht funktional ist, erfordert das Element auch Stiländerungen. Im Gegensatz zum HTML-`disabled`-Attribut, bei dem die Angabe dazu führt, dass `:disabled`-Stile des Benutzeragents angewendet werden, tut dies das Hinzufügen von `aria-disabled="true"` nicht. Das Element kann mit dem [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[aria-disabled="true"]` gestylt werden.

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

Wenn Sie das `aria-disabled`-Attribut absichtlich verwenden, um zu erlauben, dass ein Formularelement in der Tastaturfokusreihenfolge der Seite verbleibt, insbesondere wenn das Element wichtigen Inhalt repräsentiert, den alle Benutzer wahrnehmen können sollten, dann müssen Sie möglicherweise ein Styling verwenden, das immer noch Farbkontrastanforderungen erfüllt. Beispielsweise ist eine deaktivierte Schaltfläche/Überschrift, die ein nicht zusammenklappbares Akkordeon-Panel einführt, Inhalt, der weiterhin lesbar sein muss.

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

Der [`forced-colors` Media Query](/de/docs/Web/CSS/@media/forced-colors) erkennt, ob der {{Glossary("User_agent", "Benutzeragent")}} einen erzwungenen Farbmodus aktiviert hat; wenn ja, werden sowohl die Text- als auch die Rahmenfarben auf die [Systemfarbe `greyText`](/de/docs/Web/CSS/system-color#syntax) gesetzt.

Ein weiterer Aspekt, den Sie beachten müssen, wenn Sie `aria-disabled` statt des nativen HTML-Attributs verwenden, ist, dass das ARIA-Attribut das manuelle Styling erfordert, das notwendig ist, um das Element als deaktiviert im Windows-Kontrastmodus visuell zu kommunizieren.

> [!NOTE]
> Wenn Sie CSS's [`pointer-events: none;`](/de/docs/Web/CSS/Reference/Properties/pointer-events) verwenden, um ein Element nicht anklickbar zu machen, stellen Sie sicher, dass Sie auch die Interaktivität mit JavaScript deaktivieren. `pointer-events: none;` verhindert Mausklicks, verhindert jedoch nicht, dass das Element über die Tastatur aktiviert wird.

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

Beim Umschalten von `aria-disabled="true"` auf `"false"`, verwenden Sie JavaScript um:

1. Den Wert auf `false` umzuschalten (oder das Attribut vollständig zu entfernen),
2. Das Element zu aktivieren, und
3. Den Benutzer darüber zu informieren, dass die Steuerung jetzt aktiviert ist.

Wenn Sie nur CSS verwendet haben, um den deaktivierten Zustand mit einem Attributselektor zu stylen, wird der Selektor nicht mehr übereinstimmen und das deaktivierte Styling wird nicht mehr wirksam sein.

## Werte

- `true`
  - : Das Element ist deaktiviert

- `false`
  - : Das Element ist nicht deaktiviert

## Zugehörige Schnittstellen

- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-disabled`-Attributs wider, welches anzeigt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled) Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle spiegelt den Wert des `aria-disabled`-Attributs wider.

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
