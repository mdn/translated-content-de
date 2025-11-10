---
title: ElementInternals
slug: Web/API/ElementInternals
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("Web Components")}}

Das **`ElementInternals`** Interface des [Document Object Model](/de/docs/Web/API/Document_Object_Model) bietet Webentwicklern eine Möglichkeit, benutzerdefinierte Elemente vollständig an HTML-Formulare teilnehmen zu lassen. Es stellt Werkzeuge zur Verfügung, um mit diesen Elementen auf die gleiche Weise zu arbeiten wie mit jedem standardmäßigen HTML-Formularelement. Außerdem wird das [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) für das Element zugänglich gemacht.

## Konstruktor

Dieses Interface hat keinen Konstruktor. Ein `ElementInternals`-Objekt wird zurückgegeben, wenn [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufgerufen wird.

## Instanz-Eigenschaften

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) {{ReadOnlyInline}}
  - : Gibt das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück, das mit diesem Element assoziiert ist.
- [`ElementInternals.form`](/de/docs/Web/API/ElementInternals/form) {{ReadOnlyInline}}
  - : Gibt das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) zurück, das mit diesem Element assoziiert ist.
- [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) {{ReadOnlyInline}}
  - : Gibt das [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) zurück, das mit diesem Element assoziiert ist.
- [`ElementInternals.willValidate`](/de/docs/Web/API/ElementInternals/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der true zurückgibt, wenn das Element ein übermittelbares Element ist, das ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) ist.
- [`ElementInternals.validity`](/de/docs/Web/API/ElementInternals/validity) {{ReadOnlyInline}}
  - : Gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die verschiedenen Gültigkeitszustände des Elements im Hinblick auf die Einschränkungsvalidierung darstellt.
- [`ElementInternals.validationMessage`](/de/docs/Web/API/ElementInternals/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der die Validierungsnachricht dieses Elements enthält.
- [`ElementInternals.labels`](/de/docs/Web/API/ElementInternals/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von allen dem Element zugeordneten Beschriftungselementen zurück.

### Instanz-Eigenschaften, die von ARIA enthalten sind

Das `ElementInternals`-Interface enthält auch die folgenden Eigenschaften.

> [!NOTE]
> Diese sind enthalten, um sicherzustellen, dass Standard-Zugänglichkeitssemantiken auf einem benutzerdefinierten Element definiert werden können. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model erläuterer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

- [`ElementInternals.ariaAtomic`](/de/docs/Web/API/ElementInternals/ariaAtomic)
  - : Ein String, der das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Attribut widerspiegelt, welches angibt, ob unterstützende Technologien den gesamten geänderten Bereich oder nur Teile davon basierend auf den durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Attribut definierten Änderungsmitteilungen präsentieren werden.
- [`ElementInternals.ariaAutoComplete`](/de/docs/Web/API/ElementInternals/ariaAutoComplete)
  - : Ein String, der das [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)-Attribut widerspiegelt, welches angibt, ob Texteingaben die Anzeige von einer oder mehreren Vorhersagen des beabsichtigten Werts eines Benutzer für ein Kombinationsfeld, Suchfeld oder Textfeld auslösen könnten und wie Vorhersagen präsentiert würden, falls sie gemacht würden.
- [`ElementInternals.ariaBrailleLabel`](/de/docs/Web/API/ElementInternals/ariaBrailleLabel)
  - : Ein String, der das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel)-Attribut widerspiegelt, welches die Braille-Beschriftung des Elements definiert.
- [`ElementInternals.ariaBrailleRoleDescription`](/de/docs/Web/API/ElementInternals/ariaBrailleRoleDescription)
  - : Ein String, der das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription)-Attribut widerspiegelt, welches die ARIA-Braille-Rollenbeschreibung des Elements definiert.
- [`ElementInternals.ariaBusy`](/de/docs/Web/API/ElementInternals/ariaBusy)
  - : Ein String, der das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)-Attribut widerspiegelt, welches angibt, ob ein Element modifiziert wird, da unterstützende Technologien möglicherweise warten möchten, bis die Modifikationen abgeschlossen sind, bevor sie dem Benutzer zugänglich gemacht werden.
- [`ElementInternals.ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked)
  - : Ein String, der das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut widerspiegelt, welches den aktuellen "geprüften" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets angibt, die einen geprüften Zustand haben.
- [`ElementInternals.ariaColCount`](/de/docs/Web/API/ElementInternals/ariaColCount)
  - : Ein String, der das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)-Attribut widerspiegelt, welches die Anzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`ElementInternals.ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)
  - : Ein String, der das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)-Attribut widerspiegelt, welches den Spaltenindex oder die Position eines Elements im Verhältnis zur Gesamtanzahl der Spalten innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`ElementInternals.ariaColIndexText`](/de/docs/Web/API/ElementInternals/ariaColIndexText)
  - : Ein String, der das [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext)-Attribut widerspiegelt, welches eine menschenlesbare Textalternative zu aria-colindex definiert.
- [`ElementInternals.ariaColSpan`](/de/docs/Web/API/ElementInternals/ariaColSpan)
  - : Ein String, der das [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)-Attribut widerspiegelt, welches die Anzahl der von einer Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannten Spalten definiert.
- [`ElementInternals.ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent)
  - : Ein String, der das [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)-Attribut widerspiegelt, welches das Element angibt, das das aktuelle Element innerhalb eines Containers oder Satzes verwandter Elemente darstellt.
- [`ElementInternals.ariaDescription`](/de/docs/Web/API/ElementInternals/ariaDescription)
  - : Ein String, der das [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attribut widerspiegelt, welches einen Stringwert definiert, der das aktuelle ElementInternals beschreibt oder annotiert.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Ein String, der das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)-Attribut widerspiegelt, welches angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.
- [`ElementInternals.ariaExpanded`](/de/docs/Web/API/ElementInternals/ariaExpanded)
  - : Ein String, der das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attribut widerspiegelt, welches angibt, ob ein Gruppierungselement, das diesem Element gehört oder von ihm kontrolliert wird, erweitert oder eingeklappt ist.
- [`ElementInternals.ariaHasPopup`](/de/docs/Web/API/ElementInternals/ariaHasPopup)
  - : Ein String, der das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Attribut widerspiegelt, welches die Verfügbarkeit und den Typ eines interaktiven Popup-Elements angibt, wie Menü oder Dialog, das durch ein ElementInternals ausgelöst werden kann.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Ein String, der das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut widerspiegelt, welches angibt, ob das Element einer Zugänglichkeits-API ausgesetzt ist.
- [`ElementInternals.ariaInvalid`](/de/docs/Web/API/ElementInternals/ariaInvalid)
  - : Ein String, der das [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)-Attribut widerspiegelt, welches angibt, dass der eingegebene Wert nicht dem von der Anwendung erwarteten Format entspricht.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Ein String, der das [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts)-Attribut widerspiegelt, welches angibt, welche Tastenkombinationen ein Autor implementiert hat, um ein Objekt zu aktivieren oder den Fokus darauf zu setzen.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Ein String, der das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut widerspiegelt, welches einen Stringwert definiert, der das aktuelle Objekt beschriftet.
- [`ElementInternals.ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)
  - : Ein String, der das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)-Attribut widerspiegelt, welches die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- [`ElementInternals.ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)
  - : Ein String, der das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Attribut widerspiegelt, welches angibt, dass ein Element aktualisiert wird und die Arten der Updates beschreibt, die die Benutzeragenten, unterstützende Technologien und Benutzer von dem Live-Bereich erwarten können.
- [`ElementInternals.ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)
  - : Ein String, der das [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)-Attribut widerspiegelt, welches angibt, ob ein Element beim Anzeigen modal ist.
- [`ElementInternals.ariaMultiline`](/de/docs/Web/API/ElementInternals/ariaMultiLine)
  - : Ein String, der das [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)-Attribut widerspiegelt, welches angibt, ob ein Textfeld mehrere Zeilen Eingaben akzeptiert oder nur eine einzelne Zeile.
- [`ElementInternals.ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)
  - : Ein String, der das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)-Attribut widerspiegelt, welches angibt, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachfahren auswählen kann.
- [`ElementInternals.ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)
  - : Ein String, der das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Attribut widerspiegelt, welches angibt, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`ElementInternals.ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)
  - : Ein String, der das [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)-Attribut widerspiegelt, welches einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe hilft, wenn das Steuerelement keinen Wert hat.
- [`ElementInternals.ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet)
  - : Ein String, der das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)-Attribut widerspiegelt, welches die Nummer oder Position eines Elements im aktuellen Satz von Listenelementen oder Baumelementen definiert.
- [`ElementInternals.ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)
  - : Ein String, der das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut widerspiegelt, welches den aktuellen "gedrückten" Zustand von Schaltflächen mit Umschaltung angibt.
- [`ElementInternals.ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly)
  - : Ein String, der das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attribut widerspiegelt, welches angibt, dass das Element nicht bearbeitbar, aber anderweitig bedienbar ist.
- [`ElementInternals.ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant) {{Non-standard_Inline}}
  - : Ein String, der das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Attribut widerspiegelt, welches angibt, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der Zugänglichkeitsbaum innerhalb eines Live-Bereichs geändert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einem `aria-live`-Bereich relevant sind und angekündigt werden sollten.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Ein String, der das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut widerspiegelt, welches angibt, dass eine Benutzereingabe auf dem Element erforderlich ist, bevor ein Formular übermittelt werden kann.
- [`ElementInternals.role`](/de/docs/Web/API/ElementInternals/role)
  - : Ein String, der eine ARIA-Rolle enthält. Eine vollständige Liste der ARIA-Rollen finden Sie auf der [ARIA-Techniken-Seite](/de/docs/Web/Accessibility/ARIA/Guides/Techniques).
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Ein String, der das [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)-Attribut widerspiegelt, welches eine menschenlesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements definiert.
- [`ElementInternals.ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)
  - : Ein String, der das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)-Attribut widerspiegelt, welches die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`ElementInternals.ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)
  - : Ein String, der das [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)-Attribut widerspiegelt, welches den Zeilenindex oder die Position eines Elements im Verhältnis zur Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`ElementInternals.ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)
  - : Ein String, der das [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)-Attribut widerspiegelt, welches eine menschenlesbare Textalternative zu aria-rowindex definiert.
- [`ElementInternals.ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)
  - : Ein String, der das [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)-Attribut widerspiegelt, welches die Anzahl der von einer Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannten Zeilen definiert.
- [`ElementInternals.ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected)
  - : Ein String, der das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut widerspiegelt, welches den aktuellen "ausgewählten" Zustand von Elementen angibt, die einen ausgewählten Zustand haben.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Ein String, der das [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)-Attribut widerspiegelt, welches die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen definiert.
- [`ElementInternals.ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)
  - : Ein String, der das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut widerspiegelt, welches angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert werden.
- [`ElementInternals.ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)
  - : Ein String, der das [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut widerspiegelt, welches den maximal zulässigen Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin)
  - : Ein String, der das [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut widerspiegelt, welches den minimal zulässigen Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Ein String, der das [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attribut widerspiegelt, welches den aktuellen Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText)
  - : Ein String, der das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut widerspiegelt, welches die menschenlesbare Textalternative zu aria-valuenow für ein Bereichs-Widget definiert.

#### Instanzeigenschaften, die von ARIA-Elementreferenzen widergespiegelt werden

Die Eigenschaften spiegeln die in den entsprechenden Attributen durch `id`-Referenz angegebenen Elemente wider, jedoch mit einigen Vorbehalten. Weitere Informationen finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Leitfaden für reflektierte Attribute_.

- [`ElementInternals.ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement)
  - : Ein Element, das das aktuelle aktive Element darstellt, wenn der Fokus auf einem [`kompositiv`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widget, einem [`Kombinationsfeld`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), einem [`Textfeld`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), einer [`Gruppe`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`Anwendung`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.
    Reflektiert das [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Attribut.
- [`ElementInternals.ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements)
  - : Ein Array von Elementen, deren Inhalt oder Vorhandensein durch das angewendete Element kontrolliert wird.
    Reflektiert das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attribut.
- [`ElementInternals.ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements)
  - : Ein Array von Elementen, die die zugängliche Beschreibung für das angewendete Element enthalten.
    Reflektiert das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut.
- [`ElementInternals.ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements)
  - : Ein Array von Elementen, die zugängliche Details für das angewendete Element bereitstellen.
    Reflektiert das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)-Attribut.
- [`ElementInternals.ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements)
  - : Ein Array von Elementen, die eine Fehlermeldung für das angewendete Element bereitstellen.
    Reflektiert das [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attribut.
- [`ElementInternals.ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements)
  - : Ein Array von Elementen, die das nächste Element (oder die nächsten Elemente) in einer alternativen Lesereihenfolge von Inhalten identifizieren, die die allgemeine Standardlesereihenfolge nach Ermessen des Benutzers überschreibt.
    Reflektiert das [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attribut.
- [`ElementInternals.ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements)
  - : Ein Array von Elementen, die den zugänglichen Namen für das angewendete Element bereitstellen.
    Reflektiert das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut.
- [`ElementInternals.ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements)
  - : Ein Array von Elementen, die von dem Element, auf das dies angewendet wird, besessen werden.
    Dies wird verwendet, um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem Elternteil und seinen Kindelementen zu definieren, wenn die DOM-Hierarchie nicht verwendet werden kann, um die Beziehung darzustellen.
    Reflektiert das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut.

## Instanz-Methoden

- [`ElementInternals.setFormValue()`](/de/docs/Web/API/ElementInternals/setFormValue)
  - : Legt den Übermittlungswert und Zustand des Elements fest und überträgt diese Informationen an den Benutzeragenten.
- [`ElementInternals.setValidity()`](/de/docs/Web/API/ElementInternals/setValidity)
  - : Legt die Gültigkeit des Elements fest.
- [`ElementInternals.checkValidity()`](/de/docs/Web/API/ElementInternals/checkValidity)
  - : Überprüft, ob ein Element einer der darauf angewendeten [Einschränkungsvalidierungs](/de/docs/Web/HTML/Guides/Constraint_validation)-Regeln entspricht.
- [`ElementInternals.reportValidity()`](/de/docs/Web/API/ElementInternals/reportValidity)
  - : Überprüft, ob ein Element einer der darauf angewendeten [Einschränkungsvalidierungs](/de/docs/Web/HTML/Guides/Constraint_validation)-Regeln entspricht und sendet auch eine Validierungsnachricht an den Benutzeragenten.

## Beispiele

Das folgende Beispiel zeigt, wie ein benutzerdefiniertes, formularassoziiertes Element mit [`HTMLElement.attachInternals`](/de/docs/Web/API/HTMLElement/attachInternals) erstellt wird.

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

- [Fähigere Formularelemente](https://web.dev/articles/more-capable-form-controls) über web.dev (2019)
- [Erstellen von benutzerdefinierten Formularelementen mit ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/) über CSS-tricks (2021)
