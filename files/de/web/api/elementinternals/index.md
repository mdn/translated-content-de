---
title: ElementInternals
slug: Web/API/ElementInternals
l10n:
  sourceCommit: 7c0cd9f9b667fe9be0887e8902d09f0013290930
---

{{APIRef("Web Components")}}

Das **`ElementInternals`**-Interface des [Document Object Model](/de/docs/Web/API/Document_Object_Model) bietet Webentwicklern eine Möglichkeit, benutzerdefinierte Elemente vollständig in HTML-Formulare einzubinden. Es stellt Werkzeuge zur Verfügung, um mit diesen Elementen auf die gleiche Weise zu arbeiten wie mit jedem standardmäßigen HTML-Formularelement und ermöglicht auch den Zugriff auf das [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) des Elements.

## Konstruktor

Dieses Interface hat keinen Konstruktor. Ein `ElementInternals`-Objekt wird zurückgegeben, wenn [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufgerufen wird.

## Instanz-Eigenschaften

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) {{ReadOnlyInline}}
  - : Gibt das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück, das diesem Element zugeordnet ist.
- [`ElementInternals.form`](/de/docs/Web/API/ElementInternals/form) {{ReadOnlyInline}}
  - : Gibt das dem Element zugeordnete [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) zurück.
- [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) {{ReadOnlyInline}}
  - : Gibt das dem Element zugeordnete [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) zurück.
- [`ElementInternals.willValidate`](/de/docs/Web/API/ElementInternals/willValidate) {{ReadOnlyInline}}
  - : Ein boolean-Wert, der `true` zurückgibt, wenn das Element ein übermittelbares Element ist, das für die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) in Frage kommt.
- [`ElementInternals.validity`](/de/docs/Web/API/ElementInternals/validity) {{ReadOnlyInline}}
  - : Gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die verschiedenen Gültigkeitszustände des Elements in Bezug auf die Constraint Validation darstellt.
- [`ElementInternals.validationMessage`](/de/docs/Web/API/ElementInternals/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der die Validierungsmeldung dieses Elements enthält.
- [`ElementInternals.labels`](/de/docs/Web/API/ElementInternals/labels) {{ReadOnlyInline}}
  - : Gibt ein [`NodeList`](/de/docs/Web/API/NodeList) aller dem Element zugeordneten Label-Elemente zurück.

### ARIA-Instanz-Eigenschaften

Das `ElementInternals`-Interface beinhaltet auch die folgenden Eigenschaften.

> [!NOTE]
> Diese sind eingeschlossen, damit standardmäßige Zugänglichkeitssemantiken auf einem benutzerdefinierten Element definiert werden können. Diese können durch benutzerdefinierte Attribute überschrieben werden, sollten aber sicherstellen, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

- [`ElementInternals.ariaAtomic`](/de/docs/Web/API/ElementInternals/ariaAtomic)
  - : Ein String, der das Attribut [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) wiedergibt und angibt, ob unterstützende Technologien alle oder nur Teile der geänderten Region anhand der Änderungsbenachrichtigungen, die durch das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) definiert werden, präsentieren werden.
- [`ElementInternals.ariaAutoComplete`](/de/docs/Web/API/ElementInternals/ariaAutoComplete)
  - : Ein String, der das Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) wiedergibt und angibt, ob das Eingeben von Text zu einer Anzeige einer oder mehrerer Vorhersagen des vom Benutzer beabsichtigten Wertes für ein Kombinationsfeld, Suchfeld oder Textfeld führen kann und wie diese Vorhersagen dargestellt werden, falls sie gemacht werden.
- [`ElementInternals.ariaBrailleLabel`](/de/docs/Web/API/ElementInternals/ariaBrailleLabel)
  - : Ein String, der das Attribut [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) wiedergibt und das Braille-Label des Elements definiert.
- [`ElementInternals.ariaBrailleRoleDescription`](/de/docs/Web/API/ElementInternals/ariaBrailleRoleDescription)
  - : Ein String, der das Attribut [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) wiedergibt und die ARIA-Braille-Rollenbeschreibung des Elements definiert.
- [`ElementInternals.ariaBusy`](/de/docs/Web/API/ElementInternals/ariaBusy)
  - : Ein String, der das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) wiedergibt und angibt, ob ein Element bearbeitet wird, da unterstützende Technologien möglicherweise warten möchten, bis die Bearbeitungen abgeschlossen sind, bevor sie diese dem Benutzer zugänglich machen.
- [`ElementInternals.ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked)
  - : Ein String, der das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) wiedergibt und den aktuellen "prüfen"-Zustand von Checkboxen, Radio-Buttons und anderen Widgets, die einen Prüfzustand haben, angibt.
- [`ElementInternals.ariaColCount`](/de/docs/Web/API/ElementInternals/ariaColCount)
  - : Ein String, der das Attribut [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) wiedergibt und die Anzahl der Spalten in einer Tabelle, einem Raster oder Baumraster definiert.
- [`ElementInternals.ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)
  - : Ein String, der das Attribut [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) wiedergibt und den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Tabelle, eines Rasters oder Baumrasters definiert.
- [`ElementInternals.ariaColIndexText`](/de/docs/Web/API/ElementInternals/ariaColIndexText)
  - : Ein String, der das Attribut [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) wiedergibt und eine lesbare Textalternative für aria-colindex definiert.
- [`ElementInternals.ariaColSpan`](/de/docs/Web/API/ElementInternals/ariaColSpan)
  - : Ein String, der das Attribut [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) wiedergibt und die Anzahl der Spalten definiert, die von einer Zelle oder Grid-Zelle innerhalb einer Tabelle, eines Rasters oder Baumrasters überspannt werden.
- [`ElementInternals.ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent)
  - : Ein String, der das Attribut [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) wiedergibt und das Element angibt, das das aktuelle Element innerhalb eines Containers oder einer Menge verwandter Elemente darstellt.
- [`ElementInternals.ariaDescription`](/de/docs/Web/API/ElementInternals/ariaDescription)
  - : Ein String, der das Attribut [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) wiedergibt und einen Stringwert definiert, der das aktuelle `ElementInternals` beschreibt oder kommentiert.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Ein String, der das Attribut [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) wiedergibt und angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.
- [`ElementInternals.ariaExpanded`](/de/docs/Web/API/ElementInternals/ariaExpanded)
  - : Ein String, der das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) wiedergibt und angibt, ob ein Gruppierungselement, das von diesem Element besessen oder kontrolliert wird, erweitert oder zusammengeklappt ist.
- [`ElementInternals.ariaHasPopup`](/de/docs/Web/API/ElementInternals/ariaHasPopup)
  - : Ein String, der das Attribut [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) wiedergibt und die Verfügbarkeit und den Typ des interaktiven Popup-Elements, wie Menü oder Dialog, angibt, das durch ein `ElementInternals` ausgelöst werden kann.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Ein String, der das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) wiedergibt und angibt, ob das Element für eine Zugänglichkeits-API sichtbar ist.
- [`ElementInternals.ariaInvalid`](/de/docs/Web/API/ElementInternals/ariaInvalid)
  - : Ein String, der das Attribut [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) wiedergibt und angibt, dass der eingegebene Wert nicht dem vom Anwendung erwarteten Format entspricht.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Ein String, der das Attribut [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts) wiedergibt und die Tastenkombinationen angibt, die ein Autor implementiert hat, um ein `ElementInternals` zu aktivieren oder den Fokus darauf zu setzen.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Ein String, der das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) wiedergibt und einen Stringwert definiert, der das aktuelle `ElementInternals` bezeichnet.
- [`ElementInternals.ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)
  - : Ein String, der das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) wiedergibt und die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- [`ElementInternals.ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)
  - : Ein String, der das Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) wiedergibt und angibt, dass ein Element aktualisiert wird und beschreibt die Arten von Updates, die Benutzeragenten, unterstützende Technologien und Benutzer vom Live-Bereich erwarten können.
- [`ElementInternals.ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)
  - : Ein String, der das Attribut [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) wiedergibt und angibt, ob ein Element modale Eigenschaften hat, wenn es angezeigt wird.
- [`ElementInternals.ariaMultiline`](/de/docs/Web/API/ElementInternals/ariaMultiLine)
  - : Ein String, der das Attribut [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) wiedergibt und angibt, ob ein Textfeld mehrere Eingabezeilen akzeptiert oder nur eine einzige.
- [`ElementInternals.ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)
  - : Ein String, der das Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) wiedergibt und angibt, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachkommen auswählen kann.
- [`ElementInternals.ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)
  - : Ein String, der das Attribut [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) wiedergibt und angibt, ob die Orientierung des Elements horizontal, vertikal, unbekannt oder mehrdeutig ist.
- [`ElementInternals.ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)
  - : Ein String, der das Attribut [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) wiedergibt und einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe helfen soll, wenn die Steuerung keinen Wert hat.
- [`ElementInternals.ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet)
  - : Ein String, der das Attribut [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) wiedergibt und die Nummer oder Position eines Elements in der aktuellen Menge von Listenelementen oder Baumobjekten definiert.
- [`ElementInternals.ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)
  - : Ein String, der das Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) wiedergibt und den aktuellen "gedrückten" Zustand von Umschaltknöpfen angibt.
- [`ElementInternals.ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly)
  - : Ein String, der das Attribut [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) wiedergibt und angibt, dass das Element nicht bearbeitbar, aber dennoch bedienbar ist.
- [`ElementInternals.ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant) {{Non-standard_Inline}}
  - : Ein String, der das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) wiedergibt und angibt, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der Zugänglichkeitsbaum innerhalb eines Live-Bereichs modifiziert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einem `aria-live`-Bereich relevant sind und angekündigt werden sollten.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Ein String, der das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) wiedergibt und angibt, dass Benutzereingaben erforderlich sind, bevor ein Formular eingereicht werden kann.
- [`ElementInternals.role`](/de/docs/Web/API/ElementInternals/role)
  - : Ein String, der eine ARIA-Rolle enthält. Eine vollständige Liste von ARIA-Rollen finden Sie auf der [ARIA Techniken Seite](/de/docs/Web/Accessibility/ARIA/Guides/Techniques).
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Ein String, der das Attribut [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) wiedergibt und eine menschlich lesbare, autor-lokalisierte Beschreibung für die Rolle eines Elements definiert.
- [`ElementInternals.ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)
  - : Ein String, der das Attribut [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) wiedergibt und die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder Baumraster definiert.
- [`ElementInternals.ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)
  - : Ein String, der das Attribut [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) wiedergibt und den Zeilenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder Baumrasters definiert.
- [`ElementInternals.ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)
  - : Ein String, der das Attribut [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext) wiedergibt und eine lesbare Textalternative für aria-rowindex definiert.
- [`ElementInternals.ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)
  - : Ein String, der das Attribut [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) wiedergibt und die Anzahl der Zeilen definiert, die von einer Zelle oder Grid-Zelle innerhalb einer Tabelle, eines Rasters oder Baumrasters überspannt werden.
- [`ElementInternals.ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected)
  - : Ein String, der das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) wiedergibt und den aktuellen "ausgewählten" Zustand von Elementen angibt, die einen ausgewählten Zustand haben.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Ein String, der das Attribut [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) wiedergibt und die Anzahl der Elemente in der aktuellen Menge von Listenelementen oder Baumobjekten definiert.
- [`ElementInternals.ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)
  - : Ein String, der das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) wiedergibt und angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`ElementInternals.ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)
  - : Ein String, der das Attribut [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) wiedergibt und den maximal zulässigen Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin)
  - : Ein String, der das Attribut [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) wiedergibt und den minimal zulässigen Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Ein String, der das Attribut [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) wiedergibt und den aktuellen Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText)
  - : Ein String, der das Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) wiedergibt und die menschenlesbare Textalternative von aria-valuenow für ein Bereichs-Widget definiert.

## Instanz-Methoden

- [`ElementInternals.setFormValue()`](/de/docs/Web/API/ElementInternals/setFormValue)
  - : Setzt den Übermittlungswert und den Zustand des Elements und kommuniziert diese dem Benutzeragenten.
- [`ElementInternals.setValidity()`](/de/docs/Web/API/ElementInternals/setValidity)
  - : Setzt die Gültigkeit des Elements.
- [`ElementInternals.checkValidity()`](/de/docs/Web/API/ElementInternals/checkValidity)
  - : Überprüft, ob ein Element die auf es angewendeten [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation)-Regeln erfüllt.
- [`ElementInternals.reportValidity()`](/de/docs/Web/API/ElementInternals/reportValidity)
  - : Überprüft, ob ein Element die angewendeten [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation)-Regeln erfüllt und sendet auch eine Validierungsmeldung an den Benutzeragenten.

## Beispiele

Das folgende Beispiel demonstriert, wie eine benutzerdefinierte formassoziierte Komponente mit [`HTMLElement.attachInternals`](/de/docs/Web/API/HTMLElement/attachInternals) erstellt wird.

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }

  // …
}

window.customElements.define("custom-checkbox", CustomCheckbox);

let element = document.createElement("custom-checkbox");
let form = document.createElement("form");

// Append element to form to associate it
form.appendChild(element);

console.log(element.internals_.form);
// expected output: <form><custom-checkbox></custom-checkbox></form>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leistungsfähigere Formularelemente](https://web.dev/articles/more-capable-form-controls) über web.dev (2019)
- [Erstellung kundenspezifischer Formularelemente mit ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/) über CSS-tricks (2021)
