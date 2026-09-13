---
title: ElementInternals
slug: Web/API/ElementInternals
l10n:
  sourceCommit: 868de6e278b0e5c635cea5ee4bb06d35fbc3e11b
---

{{APIRef("Web Components")}}

Die Schnittstelle **`ElementInternals`** des [Document Object Model](/de/docs/Web/API/Document_Object_Model) bietet Webentwicklern eine Möglichkeit, benutzerdefinierte Elemente vollständig an HTML-Formularen teilnehmen zu lassen. Sie stellt Hilfsfunktionen bereit, um mit diesen Elementen auf dieselbe Weise wie mit jedem Standard-HTML-Formularelement zu arbeiten, und macht außerdem das [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) für das Element verfügbar.

## Konstruktor

Diese Schnittstelle hat keinen Konstruktor. Ein `ElementInternals`-Objekt wird beim Aufruf von [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) zurückgegeben.

## Instanzeigenschaften

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) {{ReadOnlyInline}}
  - : Gibt das diesem Element zugeordnete [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück.
- [`ElementInternals.form`](/de/docs/Web/API/ElementInternals/form) {{ReadOnlyInline}}
  - : Gibt das diesem Element zugeordnete [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) zurück.
- [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) {{ReadOnlyInline}}
  - : Gibt das diesem Element zugeordnete [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) zurück.
- [`ElementInternals.willValidate`](/de/docs/Web/API/ElementInternals/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das Element ein absendbares Element ist, das für die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) infrage kommt.
- [`ElementInternals.validity`](/de/docs/Web/API/ElementInternals/validity) {{ReadOnlyInline}}
  - : Gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die verschiedenen Gültigkeitszustände darstellt, in denen sich das Element bezüglich der Constraint-Validierung befinden kann.
- [`ElementInternals.validationMessage`](/de/docs/Web/API/ElementInternals/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der die Validierungsmeldung dieses Elements enthält.
- [`ElementInternals.labels`](/de/docs/Web/API/ElementInternals/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) aller diesem Element zugeordneten Label-Elemente zurück.

### Aus ARIA enthaltene Instanzeigenschaften

Die Schnittstelle `ElementInternals` enthält außerdem die folgenden Eigenschaften.

> [!NOTE]
> Diese sind enthalten, damit für ein benutzerdefiniertes Element standardmäßige Barrierefreiheitssemantik definiert werden kann. Sie können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie gar nicht erst hinzufügt. Weitere Informationen finden Sie in der [Erklärung zum Accessibility Object Model](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

- [`ElementInternals.ariaAtomic`](/de/docs/Web/API/ElementInternals/ariaAtomic)
  - : Ein String, der das Attribut [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) widerspiegelt. Dieses gibt an, ob assistive Technologien basierend auf den durch das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) definierten Änderungsbenachrichtigungen die gesamte geänderte Region oder nur Teile davon präsentieren.
- [`ElementInternals.ariaAutoComplete`](/de/docs/Web/API/ElementInternals/ariaAutoComplete)
  - : Ein String, der das Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) widerspiegelt. Dieses gibt an, ob die Texteingabe die Anzeige einer oder mehrerer Vorhersagen des vom Benutzer beabsichtigten Werts für eine combobox, searchbox oder textbox auslösen könnte, und legt fest, wie Vorhersagen präsentiert würden, falls sie erstellt werden.
- [`ElementInternals.ariaBrailleLabel`](/de/docs/Web/API/ElementInternals/ariaBrailleLabel)
  - : Ein String, der das Attribut [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) widerspiegelt. Dieses definiert die Braillebeschriftung des Elements.
- [`ElementInternals.ariaBrailleRoleDescription`](/de/docs/Web/API/ElementInternals/ariaBrailleRoleDescription)
  - : Ein String, der das Attribut [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) widerspiegelt. Dieses definiert die ARIA-Braille-Rollenbeschreibung des Elements.
- [`ElementInternals.ariaBusy`](/de/docs/Web/API/ElementInternals/ariaBusy)
  - : Ein String, der das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) widerspiegelt. Dieses gibt an, ob ein Element verändert wird, da assistive Technologien möglicherweise warten möchten, bis die Änderungen abgeschlossen sind, bevor sie sie dem Benutzer bereitstellen.
- [`ElementInternals.ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked)
  - : Ein String, der das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) widerspiegelt. Dieses gibt den aktuellen Zustand „ausgewählt“ von Kontrollkästchen, Optionsfeldern und anderen Widgets mit einem ausgewählten Zustand an.
- [`ElementInternals.ariaColCount`](/de/docs/Web/API/ElementInternals/ariaColCount)
  - : Ein String, der das Attribut [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) widerspiegelt. Dieses definiert die Anzahl der Spalten in einer Tabelle, einem Grid oder einem treegrid.
- [`ElementInternals.ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)
  - : Ein String, der das Attribut [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) widerspiegelt. Dieses definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Spalten innerhalb einer Tabelle, eines Grid oder eines treegrid.
- [`ElementInternals.ariaColIndexText`](/de/docs/Web/API/ElementInternals/ariaColIndexText)
  - : Ein String, der das Attribut [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) widerspiegelt. Dieses definiert eine für Menschen lesbare Textalternative für aria-colindex.
- [`ElementInternals.ariaColSpan`](/de/docs/Web/API/ElementInternals/ariaColSpan)
  - : Ein String, der das Attribut [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) widerspiegelt. Dieses definiert die Anzahl der Spalten, die eine cell oder gridcell innerhalb einer Tabelle, eines Grid oder eines treegrid überspannt.
- [`ElementInternals.ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent)
  - : Ein String, der das Attribut [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) widerspiegelt. Dieses gibt das Element an, das das aktuelle Element innerhalb eines Containers oder einer Menge verwandter Elemente darstellt.
- [`ElementInternals.ariaDescription`](/de/docs/Web/API/ElementInternals/ariaDescription)
  - : Ein String, der das Attribut [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) widerspiegelt. Dieses definiert einen String-Wert, der die aktuellen ElementInternals beschreibt oder annotiert.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Ein String, der das Attribut [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) widerspiegelt. Dieses gibt an, dass das Element wahrnehmbar, jedoch deaktiviert ist und daher weder bearbeitet noch anderweitig bedient werden kann.
- [`ElementInternals.ariaExpanded`](/de/docs/Web/API/ElementInternals/ariaExpanded)
  - : Ein String, der das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) widerspiegelt. Dieses gibt an, ob ein Gruppierungselement, das diesem Element gehört oder von ihm gesteuert wird, ausgeklappt oder eingeklappt ist.
- [`ElementInternals.ariaHasPopup`](/de/docs/Web/API/ElementInternals/ariaHasPopup)
  - : Ein String, der das Attribut [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) widerspiegelt. Dieses gibt die Verfügbarkeit und den Typ eines interaktiven Popup-Elements an, etwa eines Menüs oder Dialogs, das durch ein ElementInternals ausgelöst werden kann.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Ein String, der das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) widerspiegelt. Dieses gibt an, ob das Element für eine Barrierefreiheits-API verfügbar gemacht wird.
- [`ElementInternals.ariaInvalid`](/de/docs/Web/API/ElementInternals/ariaInvalid)
  - : Ein String, der das Attribut [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) widerspiegelt. Dieses gibt an, dass der eingegebene Wert nicht dem von der Anwendung erwarteten Format entspricht.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Ein String, der das Attribut [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts) widerspiegelt. Dieses gibt Tastenkürzel an, die ein Autor implementiert hat, um ein Objekt zu aktivieren oder ihm den Fokus zu geben.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Ein String, der das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) widerspiegelt. Dieses definiert einen String-Wert, der das aktuelle Objekt beschriftet.
- [`ElementInternals.ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)
  - : Ein String, der das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) widerspiegelt. Dieses definiert die hierarchische Ebene eines Elements innerhalb einer Struktur.
- [`ElementInternals.ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)
  - : Ein String, der das Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) widerspiegelt. Dieses gibt an, dass ein Element aktualisiert wird, und beschreibt die Arten von Aktualisierungen, die Benutzeragenten, assistive Technologien und Benutzer von der Live-Region erwarten können.
- [`ElementInternals.ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)
  - : Ein String, der das Attribut [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) widerspiegelt. Dieses gibt an, ob ein Element bei seiner Anzeige modal ist.
- [`ElementInternals.ariaMultiline`](/de/docs/Web/API/ElementInternals/ariaMultiLine)
  - : Ein String, der das Attribut [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) widerspiegelt. Dieses gibt an, ob ein Textfeld mehrzeilige Eingaben oder nur eine einzelne Zeile akzeptiert.
- [`ElementInternals.ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)
  - : Ein String, der das Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) widerspiegelt. Dieses gibt an, dass der Benutzer mehr als ein Element aus den aktuell auswählbaren Nachfolgerelementen auswählen darf.
- [`ElementInternals.ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)
  - : Ein String, der das Attribut [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) widerspiegelt. Dieses gibt an, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`ElementInternals.ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)
  - : Ein String, der das Attribut [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) widerspiegelt. Dieses definiert einen kurzen Hinweis, der den Benutzer bei der Dateneingabe unterstützen soll, wenn das Steuerelement keinen Wert hat.
- [`ElementInternals.ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet)
  - : Ein String, der das Attribut [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) widerspiegelt. Dieses definiert die Nummer oder Position eines Elements in der aktuellen Menge von listitems oder treeitems.
- [`ElementInternals.ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)
  - : Ein String, der das Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) widerspiegelt. Dieses gibt den aktuellen Zustand „gedrückt“ von Umschaltschaltflächen an.
- [`ElementInternals.ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly)
  - : Ein String, der das Attribut [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) widerspiegelt. Dieses gibt an, dass das Element nicht bearbeitbar, aber anderweitig bedienbar ist.
- [`ElementInternals.ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant) {{Non-standard_Inline}}
  - : Ein String, der das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) widerspiegelt. Dieses gibt an, welche Benachrichtigungen der Benutzeragent auslöst, wenn der Barrierefreiheitsbaum innerhalb einer Live-Region verändert wird. Es wird verwendet, um zu beschreiben, welche Änderungen in einer `aria-live`-Region relevant sind und angekündigt werden sollten.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Ein String, der das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) widerspiegelt. Dieses gibt an, dass eine Benutzereingabe für das Element erforderlich ist, bevor ein Formular abgesendet werden darf.
- [`ElementInternals.role`](/de/docs/Web/API/ElementInternals/role)
  - : Ein String, der eine ARIA-Rolle enthält. Eine vollständige Liste der ARIA-Rollen finden Sie auf der [Seite zu ARIA-Techniken](/de/docs/Web/Accessibility/ARIA/Guides/Techniques).
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Ein String, der das Attribut [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) widerspiegelt. Dieses definiert eine für Menschen lesbare, vom Autor lokalisierte Beschreibung der Rolle eines Element.
- [`ElementInternals.ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)
  - : Ein String, der das Attribut [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) widerspiegelt. Dieses definiert die Gesamtzahl der Zeilen in einer Tabelle, einem Grid oder einem treegrid.
- [`ElementInternals.ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)
  - : Ein String, der das Attribut [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) widerspiegelt. Dieses definiert den Zeilenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Zeilen innerhalb einer Tabelle, eines Grid oder eines treegrid.
- [`ElementInternals.ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)
  - : Ein String, der das Attribut [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext) widerspiegelt. Dieses definiert eine für Menschen lesbare Textalternative für aria-rowindex.
- [`ElementInternals.ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)
  - : Ein String, der das Attribut [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) widerspiegelt. Dieses definiert die Anzahl der Zeilen, die eine cell oder gridcell innerhalb einer Tabelle, eines Grid oder eines treegrid überspannt.
- [`ElementInternals.ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected)
  - : Ein String, der das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) widerspiegelt. Dieses gibt den aktuellen Zustand „ausgewählt“ von Elementen mit einem ausgewählten Zustand an.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Ein String, der das Attribut [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) widerspiegelt. Dieses definiert die Anzahl der Elemente in der aktuellen Menge von listitems oder treeitems.
- [`ElementInternals.ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)
  - : Ein String, der das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) widerspiegelt. Dieses gibt an, ob Elemente in einer Tabelle oder einem Grid in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`ElementInternals.ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)
  - : Ein String, der das Attribut [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) widerspiegelt. Dieses definiert den maximal zulässigen Wert für ein Range-Widget.
- [`ElementInternals.ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin)
  - : Ein String, der das Attribut [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) widerspiegelt. Dieses definiert den minimal zulässigen Wert für ein Range-Widget.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Ein String, der das Attribut [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) widerspiegelt. Dieses definiert den aktuellen Wert für ein Range-Widget.
- [`ElementInternals.ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText)
  - : Ein String, der das Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) widerspiegelt. Dieses definiert die für Menschen lesbare Textalternative von aria-valuenow für ein Range-Widget.

#### Instanzeigenschaften, die aus ARIA-Elementreferenzen widergespiegelt werden

Die Eigenschaften spiegeln die in den entsprechenden Attributen durch eine `id`-Referenz angegebenen Elemente wider, jedoch mit einigen Vorbehalten. Weitere Informationen finden Sie unter [Widergespiegelte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im Leitfaden _Widergespiegelte Attribute_.

- [`ElementInternals.ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement)
  - : Ein Element, das das aktuell aktive Element darstellt, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)-Widget, einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), einer [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.
    Spiegelt das Attribut [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) wider.
- [`ElementInternals.ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements)
  - : Ein Array von Elementen, deren Inhalte oder Vorhandensein von dem Element gesteuert werden, auf das es angewendet wird.
    Spiegelt das Attribut [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) wider.
- [`ElementInternals.ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements)
  - : Ein Array von Elementen, die die barrierefreie Beschreibung für das Element enthalten, auf das es angewendet wird.
    Spiegelt das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) wider.
- [`ElementInternals.ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements)
  - : Ein Array von Elementen, die barrierefreie Details für das Element bereitstellen, auf das es angewendet wird.
    Spiegelt das Attribut [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) wider.
- [`ElementInternals.ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements)
  - : Ein Array von Elementen, die eine Fehlermeldung für das Element bereitstellen, auf das es angewendet wird.
    Spiegelt das Attribut [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) wider.
- [`ElementInternals.ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements)
  - : Ein Array von Elementen, die das nächste Element (oder die nächsten Elemente) in einer alternativen Lesereihenfolge des Inhalts kennzeichnen und nach Ermessen des Benutzers die allgemeine Standardlesereihenfolge überschreiben.
    Spiegelt das Attribut [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) wider.
- [`ElementInternals.ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements)
  - : Ein Array von Elementen, die den barrierefreien Namen für das Element bereitstellen, auf das es angewendet wird.
    Spiegelt das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) wider.
- [`ElementInternals.ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements)
  - : Ein Array von Elementen, die dem Element gehören, auf das dies angewendet wird.
    Dies wird verwendet, um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem Eltern- und seinen Kindelementen zu definieren, wenn die DOM-Hierarchie nicht zur Darstellung der Beziehung verwendet werden kann.
    Spiegelt das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) wider.

## Instanzmethoden

- [`ElementInternals.setFormValue()`](/de/docs/Web/API/ElementInternals/setFormValue)
  - : Legt den Übermittlungswert und Zustand des Elements fest und übermittelt diese an den Benutzeragenten.
- [`ElementInternals.setValidity()`](/de/docs/Web/API/ElementInternals/setValidity)
  - : Legt die Gültigkeit des Elements fest.
- [`ElementInternals.checkValidity()`](/de/docs/Web/API/ElementInternals/checkValidity)
  - : Prüft, ob ein Element alle auf es angewendeten Regeln der [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllt.
- [`ElementInternals.reportValidity()`](/de/docs/Web/API/ElementInternals/reportValidity)
  - : Prüft, ob ein Element alle auf es angewendeten Regeln der [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllt, und sendet außerdem eine Validierungsmeldung an den Benutzeragenten.

## Beispiele

Das folgende Beispiel zeigt, wie Sie mit [`HTMLElement.attachInternals`](/de/docs/Web/API/HTMLElement/attachInternals) ein benutzerdefiniertes formularzugeordnetes Element erstellen.

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

- [Leistungsfähigere Formularsteuerelemente](https://web.dev/articles/more-capable-form-controls) über web.dev (2019)
- [Erstellen benutzerdefinierter Formularsteuerelemente mit ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/) über CSS-tricks (2021)
