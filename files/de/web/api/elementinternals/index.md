---
title: ElementInternals
slug: Web/API/ElementInternals
l10n:
  sourceCommit: 5351b03470685486d841a3340c6971351058194f
---

{{APIRef("Web Components")}}

Die Schnittstelle **`ElementInternals`** des [Document Object Model](/de/docs/Web/API/Document_Object_Model) ermöglicht es Webentwicklern, benutzerdefinierte Elemente vollständig in HTML-Formulare einzubinden. Sie stellt Hilfsmittel bereit, mit denen sich diese Elemente wie gewöhnliche HTML-Formularelemente verwenden lassen, und macht dem Element außerdem das [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) zugänglich.

## Konstruktor

Diese Schnittstelle hat keinen Konstruktor. Beim Aufruf von [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) wird ein `ElementInternals`-Objekt zurückgegeben.

## Instanzeigenschaften

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) {{ReadOnlyInline}}
  - : Gibt das diesem Element zugeordnete [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück.
- [`ElementInternals.form`](/de/docs/Web/API/ElementInternals/form) {{ReadOnlyInline}}
  - : Gibt das diesem Element zugeordnete [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) zurück.
- [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) {{ReadOnlyInline}}
  - : Gibt das diesem Element zugeordnete [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) zurück.
- [`ElementInternals.willValidate`](/de/docs/Web/API/ElementInternals/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das Element ein absendbares Element ist, für das eine [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) infrage kommt.
- [`ElementInternals.validity`](/de/docs/Web/API/ElementInternals/validity) {{ReadOnlyInline}}
  - : Gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die verschiedenen Gültigkeitszustände darstellt, die das Element im Hinblick auf die Einschränkungsvalidierung annehmen kann.
- [`ElementInternals.validationMessage`](/de/docs/Web/API/ElementInternals/validationMessage) {{ReadOnlyInline}}
  - : Eine Zeichenfolge mit der Validierungsmeldung dieses Elements.
- [`ElementInternals.labels`](/de/docs/Web/API/ElementInternals/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) mit allen diesem Element zugeordneten Label-Elementen zurück.

### Von ARIA übernommene Instanzeigenschaften

Die Schnittstelle `ElementInternals` umfasst außerdem die folgenden Eigenschaften.

> [!NOTE]
> Diese Eigenschaften ermöglichen es, für ein benutzerdefiniertes Element standardmäßige Semantiken für die Barrierefreiheit festzulegen. Sie können durch vom Autor definierte Attribute überschrieben werden. Die standardmäßigen Semantiken bleiben jedoch erhalten, wenn der Autor diese Attribute löscht oder gar nicht erst hinzufügt. Weitere Informationen finden Sie in der [Erläuterung zum Accessibility Object Model](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

- [`ElementInternals.ariaAtomic`](/de/docs/Web/API/ElementInternals/ariaAtomic)
  - : Eine Zeichenfolge, die das Attribut [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) widerspiegelt. Dieses gibt an, ob assistive Technologien anhand der durch das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) festgelegten Änderungsbenachrichtigungen den gesamten geänderten Bereich oder nur Teile davon wiedergeben.
- [`ElementInternals.ariaAutoComplete`](/de/docs/Web/API/ElementInternals/ariaAutoComplete)
  - : Eine Zeichenfolge, die das Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) widerspiegelt. Dieses gibt an, ob die Texteingabe die Anzeige einer oder mehrerer Vorhersagen für den beabsichtigten Wert des Benutzers in einer Combobox, einem Suchfeld oder einem Textfeld auslösen kann, und legt fest, wie solche Vorhersagen dargestellt werden.
- [`ElementInternals.ariaBrailleLabel`](/de/docs/Web/API/ElementInternals/ariaBrailleLabel)
  - : Eine Zeichenfolge, die das Attribut [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) widerspiegelt. Dieses definiert die Braille-Beschriftung des Elements.
- [`ElementInternals.ariaBrailleRoleDescription`](/de/docs/Web/API/ElementInternals/ariaBrailleRoleDescription)
  - : Eine Zeichenfolge, die das Attribut [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) widerspiegelt. Dieses definiert die ARIA-Braille-Rollenbeschreibung des Elements.
- [`ElementInternals.ariaBusy`](/de/docs/Web/API/ElementInternals/ariaBusy)
  - : Eine Zeichenfolge, die das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) widerspiegelt. Dieses gibt an, ob ein Element gerade geändert wird, sodass assistive Technologien mit der Darstellung für den Benutzer warten können, bis die Änderungen abgeschlossen sind.
- [`ElementInternals.ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked)
  - : Eine Zeichenfolge, die das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) widerspiegelt. Dieses gibt den aktuellen Auswahlzustand von Kontrollkästchen, Optionsfeldern und anderen Widgets mit einem solchen Zustand an.
- [`ElementInternals.ariaColCount`](/de/docs/Web/API/ElementInternals/ariaColCount)
  - : Eine Zeichenfolge, die das Attribut [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) widerspiegelt. Dieses definiert die Anzahl der Spalten in einer Tabelle, einem Grid oder einem Treegrid.
- [`ElementInternals.ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)
  - : Eine Zeichenfolge, die das Attribut [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) widerspiegelt. Dieses definiert den Spaltenindex oder die Position eines Elements bezogen auf die Gesamtzahl der Spalten in einer Tabelle, einem Grid oder einem Treegrid.
- [`ElementInternals.ariaColIndexText`](/de/docs/Web/API/ElementInternals/ariaColIndexText)
  - : Eine Zeichenfolge, die das Attribut [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) widerspiegelt. Dieses definiert eine für Menschen lesbare Textalternative für aria-colindex.
- [`ElementInternals.ariaColSpan`](/de/docs/Web/API/ElementInternals/ariaColSpan)
  - : Eine Zeichenfolge, die das Attribut [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) widerspiegelt. Dieses definiert die Anzahl der Spalten, über die sich eine Zelle oder Grid-Zelle in einer Tabelle, einem Grid oder einem Treegrid erstreckt.
- [`ElementInternals.ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent)
  - : Eine Zeichenfolge, die das Attribut [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) widerspiegelt. Dieses kennzeichnet das Element, das innerhalb eines Containers oder einer Gruppe zusammengehöriger Elemente das aktuelle Element darstellt.
- [`ElementInternals.ariaDescription`](/de/docs/Web/API/ElementInternals/ariaDescription)
  - : Eine Zeichenfolge, die das Attribut [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) widerspiegelt. Dieses definiert einen Zeichenfolgenwert, der das aktuelle ElementInternals-Objekt beschreibt oder mit einer Anmerkung versieht.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Eine Zeichenfolge, die das Attribut [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) widerspiegelt. Dieses gibt an, dass das Element wahrnehmbar, aber deaktiviert und daher weder bearbeitbar noch anderweitig bedienbar ist.
- [`ElementInternals.ariaExpanded`](/de/docs/Web/API/ElementInternals/ariaExpanded)
  - : Eine Zeichenfolge, die das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) widerspiegelt. Dieses gibt an, ob ein Gruppierungselement, das zu diesem Element gehört oder von ihm gesteuert wird, ausgeklappt oder eingeklappt ist.
- [`ElementInternals.ariaHasPopup`](/de/docs/Web/API/ElementInternals/ariaHasPopup)
  - : Eine Zeichenfolge, die das Attribut [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) widerspiegelt. Dieses gibt an, ob ein interaktives Popup-Element, etwa ein Menü oder Dialog, durch ein ElementInternals-Objekt ausgelöst werden kann und um welchen Typ es sich handelt.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Eine Zeichenfolge, die das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) widerspiegelt. Dieses gibt an, ob das Element einer Barrierefreiheits-API zugänglich gemacht wird.
- [`ElementInternals.ariaInvalid`](/de/docs/Web/API/ElementInternals/ariaInvalid)
  - : Eine Zeichenfolge, die das Attribut [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) widerspiegelt. Dieses gibt an, dass der eingegebene Wert nicht dem von der Anwendung erwarteten Format entspricht.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Eine Zeichenfolge, die das Attribut [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts) widerspiegelt. Dieses gibt Tastenkombinationen an, die ein Autor implementiert hat, um ein Objekt zu aktivieren oder den Fokus darauf zu setzen.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Eine Zeichenfolge, die das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) widerspiegelt. Dieses definiert einen Zeichenfolgenwert, der das aktuelle Objekt beschriftet.
- [`ElementInternals.ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)
  - : Eine Zeichenfolge, die das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) widerspiegelt. Dieses definiert die Hierarchieebene eines Elements innerhalb einer Struktur.
- [`ElementInternals.ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)
  - : Eine Zeichenfolge, die das Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) widerspiegelt. Dieses gibt an, dass ein Element aktualisiert wird, und beschreibt, welche Arten von Aktualisierungen Benutzeragenten, assistive Technologien und Benutzer in der Live-Region erwarten können.
- [`ElementInternals.ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)
  - : Eine Zeichenfolge, die das Attribut [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) widerspiegelt. Dieses gibt an, ob ein Element bei seiner Anzeige modal ist.
- [`ElementInternals.ariaMultiLine`](/de/docs/Web/API/ElementInternals/ariaMultiLine)
  - : Eine Zeichenfolge, die das Attribut [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) widerspiegelt. Dieses gibt an, ob ein Textfeld eine mehrzeilige oder nur eine einzeilige Eingabe akzeptiert.
- [`ElementInternals.ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)
  - : Eine Zeichenfolge, die das Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) widerspiegelt. Dieses gibt an, dass der Benutzer mehr als ein Element aus den aktuell auswählbaren Nachfahren auswählen kann.
- [`ElementInternals.ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)
  - : Eine Zeichenfolge, die das Attribut [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) widerspiegelt. Dieses gibt an, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt beziehungsweise mehrdeutig ist.
- [`ElementInternals.ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)
  - : Eine Zeichenfolge, die das Attribut [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) widerspiegelt. Dieses definiert einen kurzen Hinweis, der dem Benutzer bei der Dateneingabe helfen soll, wenn das Steuerelement keinen Wert hat.
- [`ElementInternals.ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet)
  - : Eine Zeichenfolge, die das Attribut [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) widerspiegelt. Dieses definiert die Nummer oder Position eines Elements innerhalb der aktuellen Gruppe von Listeneinträgen oder Treeitems.
- [`ElementInternals.ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)
  - : Eine Zeichenfolge, die das Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) widerspiegelt. Dieses gibt den aktuellen gedrückten Zustand von Umschaltflächen an.
- [`ElementInternals.ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly)
  - : Eine Zeichenfolge, die das Attribut [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) widerspiegelt. Dieses gibt an, dass das Element nicht bearbeitbar, aber ansonsten bedienbar ist.
- [`ElementInternals.ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant) {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) widerspiegelt. Dieses gibt an, welche Benachrichtigungen der Benutzeragent auslöst, wenn der Barrierefreiheitsbaum innerhalb einer Live-Region geändert wird. Damit wird beschrieben, welche Änderungen in einer `aria-live`-Region relevant sind und angekündigt werden sollen.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Eine Zeichenfolge, die das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) widerspiegelt. Dieses gibt an, dass für das Element eine Benutzereingabe erforderlich ist, bevor ein Formular abgesendet werden kann.
- [`ElementInternals.role`](/de/docs/Web/API/ElementInternals/role)
  - : Eine Zeichenfolge, die eine ARIA-Rolle enthält. Eine vollständige Liste der ARIA-Rollen finden Sie auf der [Seite zu ARIA-Techniken](/de/docs/Web/Accessibility/ARIA/Guides/Techniques).
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Eine Zeichenfolge, die das Attribut [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) widerspiegelt. Dieses definiert eine für Menschen lesbare, vom Autor lokalisierte Beschreibung der Rolle eines Elements.
- [`ElementInternals.ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)
  - : Eine Zeichenfolge, die das Attribut [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) widerspiegelt. Dieses definiert die Gesamtzahl der Zeilen in einer Tabelle, einem Grid oder einem Treegrid.
- [`ElementInternals.ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)
  - : Eine Zeichenfolge, die das Attribut [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) widerspiegelt. Dieses definiert den Zeilenindex oder die Position eines Elements bezogen auf die Gesamtzahl der Zeilen in einer Tabelle, einem Grid oder einem Treegrid.
- [`ElementInternals.ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)
  - : Eine Zeichenfolge, die das Attribut [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext) widerspiegelt. Dieses definiert eine für Menschen lesbare Textalternative für aria-rowindex.
- [`ElementInternals.ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)
  - : Eine Zeichenfolge, die das Attribut [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) widerspiegelt. Dieses definiert die Anzahl der Zeilen, über die sich eine Zelle oder Grid-Zelle in einer Tabelle, einem Grid oder einem Treegrid erstreckt.
- [`ElementInternals.ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected)
  - : Eine Zeichenfolge, die das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) widerspiegelt. Dieses gibt den aktuellen Auswahlzustand von Elementen an, die einen solchen Zustand haben.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Eine Zeichenfolge, die das Attribut [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) widerspiegelt. Dieses definiert die Anzahl der Elemente in der aktuellen Gruppe von Listeneinträgen oder Treeitems.
- [`ElementInternals.ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)
  - : Eine Zeichenfolge, die das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) widerspiegelt. Dieses gibt an, ob die Einträge in einer Tabelle oder einem Grid aufsteigend oder absteigend sortiert sind.
- [`ElementInternals.ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)
  - : Eine Zeichenfolge, die das Attribut [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) widerspiegelt. Dieses definiert den maximal zulässigen Wert für ein Bereichs-Widget.
- [`ElementInternals.ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin)
  - : Eine Zeichenfolge, die das Attribut [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) widerspiegelt. Dieses definiert den minimal zulässigen Wert für ein Bereichs-Widget.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Eine Zeichenfolge, die das Attribut [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) widerspiegelt. Dieses definiert den aktuellen Wert eines Bereichs-Widgets.
- [`ElementInternals.ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText)
  - : Eine Zeichenfolge, die das Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) widerspiegelt. Dieses definiert eine für Menschen lesbare Textalternative zu aria-valuenow für ein Bereichs-Widget.

#### Instanzeigenschaften, die ARIA-Elementreferenzen widerspiegeln

Diese Eigenschaften spiegeln die Elemente wider, die in den entsprechenden Attributen durch `id`-Referenzen angegeben sind. Dabei gelten einige Einschränkungen. Weitere Informationen finden Sie unter [Gespiegelte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im Leitfaden _Gespiegelte Attribute_.

- [`ElementInternals.ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement)
  - : Ein Element, das das aktuell aktive Element darstellt, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)-Widget, einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), einer [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.
    Spiegelt das Attribut [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) wider.
- [`ElementInternals.ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements)
  - : Ein Array von Elementen, deren Inhalt oder Vorhandensein durch das Element gesteuert wird, auf das die Eigenschaft angewendet wird.
    Spiegelt das Attribut [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) wider.
- [`ElementInternals.ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements)
  - : Ein Array von Elementen, die die barrierefreie Beschreibung für das Element enthalten, auf das die Eigenschaft angewendet wird.
    Spiegelt das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) wider.
- [`ElementInternals.ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements)
  - : Ein Array von Elementen, die barrierefrei zugängliche Details für das Element bereitstellen, auf das die Eigenschaft angewendet wird.
    Spiegelt das Attribut [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) wider.
- [`ElementInternals.ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements)
  - : Ein Array von Elementen, die eine Fehlermeldung für das Element bereitstellen, auf das die Eigenschaft angewendet wird.
    Spiegelt das Attribut [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) wider.
- [`ElementInternals.ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements)
  - : Ein Array von Elementen, die das nächste Element beziehungsweise die nächsten Elemente in einer alternativen Lesereihenfolge des Inhalts angeben. Diese kann nach Ermessen des Benutzers die allgemeine Standard-Lesereihenfolge ersetzen.
    Spiegelt das Attribut [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) wider.
- [`ElementInternals.ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements)
  - : Ein Array von Elementen, die den barrierefreien Namen für das Element bereitstellen, auf das die Eigenschaft angewendet wird.
    Spiegelt das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) wider.
- [`ElementInternals.ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements)
  - : Ein Array von Elementen, die dem Element gehören, auf das die Eigenschaft angewendet wird.
    Damit wird eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem Elternelement und seinen Kindelementen definiert, wenn sich diese Beziehung nicht durch die DOM-Hierarchie darstellen lässt.
    Spiegelt das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) wider.

## Instanzmethoden

- [`ElementInternals.setFormValue()`](/de/docs/Web/API/ElementInternals/setFormValue)
  - : Legt den beim Absenden verwendeten Wert und den Zustand des Elements fest und übermittelt diese an den Benutzeragenten.
- [`ElementInternals.setValidity()`](/de/docs/Web/API/ElementInternals/setValidity)
  - : Legt den Gültigkeitszustand des Elements fest.
- [`ElementInternals.checkValidity()`](/de/docs/Web/API/ElementInternals/checkValidity)
  - : Prüft, ob ein Element die für es geltenden Regeln der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllt.
- [`ElementInternals.reportValidity()`](/de/docs/Web/API/ElementInternals/reportValidity)
  - : Prüft, ob ein Element die für es geltenden Regeln der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllt, und sendet außerdem eine Validierungsmeldung an den Benutzeragenten.

## Beispiele

Das folgende Beispiel zeigt, wie Sie mit [`HTMLElement.attachInternals`](/de/docs/Web/API/HTMLElement/attachInternals) ein benutzerdefiniertes, einem Formular zugeordnetes Element erstellen.

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

- [Leistungsfähigere Formularsteuerelemente](https://web.dev/articles/more-capable-form-controls) auf web.dev (2019)
- [Benutzerdefinierte Formularsteuerelemente mit ElementInternals erstellen](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/) auf CSS-Tricks (2021)
