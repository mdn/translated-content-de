---
title: ElementInternals
slug: Web/API/ElementInternals
l10n:
  sourceCommit: 8b920a5e7567dcc9d642dfbd704b0ddbe2005d30
---

{{APIRef("Web Components")}}

Das **`ElementInternals`** Interface des [Document Object Model](/de/docs/Web/API/Document_Object_Model) gibt Web-Entwicklern die Möglichkeit, benutzerdefinierte Elemente vollständig in HTML-Formulare zu integrieren. Es bietet Hilfsfunktionen, um mit diesen Elementen auf dieselbe Weise zu arbeiten, wie Sie mit jedem Standard-HTML-Formularelement arbeiten würden, und stellt auch das [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) für das Element bereit.

## Konstruktor

Dieses Interface hat keinen Konstruktor. Ein `ElementInternals`-Objekt wird zurückgegeben, wenn [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufgerufen wird.

## Instanzeigenschaften

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) {{ReadOnlyInline}}
  - : Gibt das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück, das mit diesem Element verknüpft ist.
- [`ElementInternals.form`](/de/docs/Web/API/ElementInternals/form) {{ReadOnlyInline}}
  - : Gibt das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) zurück, das mit diesem Element verknüpft ist.
- [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) {{ReadOnlyInline}}
  - : Gibt das [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) zurück, das mit diesem Element verknüpft ist.
- [`ElementInternals.willValidate`](/de/docs/Web/API/ElementInternals/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das Element ein sendbares Element ist, das ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) ist.
- [`ElementInternals.validity`](/de/docs/Web/API/ElementInternals/validity) {{ReadOnlyInline}}
  - : Gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die verschiedenen Gültigkeitszustände des Elements in Bezug auf die Einschränkungsvalidierung darstellt.
- [`ElementInternals.validationMessage`](/de/docs/Web/API/ElementInternals/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der die Validierungsnachricht dieses Elements enthält.
- [`ElementInternals.labels`](/de/docs/Web/API/ElementInternals/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von allen Label-Elementen zurück, die mit diesem Element verbunden sind.

### Instanzeigenschaften, die von ARIA enthalten sind

Das `ElementInternals` Interface enthält auch die folgenden Eigenschaften.

> [!NOTE]
> Diese sind enthalten, um sicherzustellen, dass Standard-Accessibility-Semantiken auf einem benutzerdefinierten Element definiert werden können. Diese können durch autorendefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

- [`ElementInternals.ariaAtomic`](/de/docs/Web/API/ElementInternals/ariaAtomic)
  - : Ein String, der das Attribut [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) widerspiegelt, welches angibt, ob Hilfstechnologien den gesamten oder nur Teile des geänderten Bereichs basierend auf den durch das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) definierten Änderungsbenachrichtigungen präsentieren.
- [`ElementInternals.ariaAutoComplete`](/de/docs/Web/API/ElementInternals/ariaAutoComplete)
  - : Ein String, der das Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) widerspiegelt, welches angibt, ob das Eingeben von Text die Anzeige einer oder mehrerer Vorhersagen des beabsichtigten Werts des Benutzers für eine Kombinationsbox, Suchbox oder Textbox auslösen könnte, und wie diese präsentiert würden, wenn sie gemacht werden.
- [`ElementInternals.ariaBusy`](/de/docs/Web/API/ElementInternals/ariaBusy)
  - : Ein String, der das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) widerspiegelt, welches angibt, ob ein Element modifiziert wird, da Hilfstechnologien möglicherweise warten möchten, bis die Änderungen abgeschlossen sind, bevor sie dem Benutzer sichtbar gemacht werden.
- [`ElementInternals.ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked)
  - : Ein String, der das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) widerspiegelt, welches den aktuellen "überprüft"-Zustand von Kontrollkästchen, Optionsschaltflächen und anderen Widgets angibt, die einen geprüften Zustand haben.
- [`ElementInternals.ariaColCount`](/de/docs/Web/API/ElementInternals/ariaColCount)
  - : Ein String, der das Attribut [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) widerspiegelt, welches die Anzahl der Spalten in einer Tabelle, einem Raster oder Baumraster definiert.
- [`ElementInternals.ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)
  - : Ein String, der das Attribut [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) widerspiegelt, welches den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Tabelle, eines Rasters oder Baumrasters definiert.
- [`ElementInternals.ariaColIndexText`](/de/docs/Web/API/ElementInternals/ariaColIndexText)
  - : Ein String, der das Attribut [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) widerspiegelt, welches eine menschenlesbare Textalternative von aria-colindex definiert.
- [`ElementInternals.ariaColSpan`](/de/docs/Web/API/ElementInternals/ariaColSpan)
  - : Ein String, der das Attribut [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) widerspiegelt, welches die Anzahl der Spalten definiert, die von einer Zelle oder einem Raster im Inneren einer Tabelle, eines Rasters oder Baumrasters über spannt werden.
- [`ElementInternals.ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent)
  - : Ein String, der das Attribut [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) widerspiegelt, welches das Element angibt, das das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt.
- [`ElementInternals.ariaDescription`](/de/docs/Web/API/ElementInternals/ariaDescription)
  - : Ein String, der das Attribut [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description) widerspiegelt, welches einen String-Wert definiert, der die aktuellen ElementInternals beschreibt oder annotiert.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Ein String, der das Attribut [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) widerspiegelt, welches angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig operiert werden kann.
- [`ElementInternals.ariaExpanded`](/de/docs/Web/API/ElementInternals/ariaExpanded)
  - : Ein String, der das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) widerspiegelt, welches angibt, ob ein von diesem Element gesteuertes oder besessenes Gruppenelement erweitert oder eingeklappt ist.
- [`ElementInternals.ariaHasPopup`](/de/docs/Web/API/ElementInternals/ariaHasPopup)
  - : Ein String, der das Attribut [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) widerspiegelt, welches die Verfügbarkeit und den Typ eines interaktiven Popup-Elements, wie z.B. Menü oder Dialog, angibt, das von einem ElementInternals ausgelöst werden kann.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Ein String, der das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) widerspiegelt, welches angibt, ob das Element in einer Accessibility-API sichtbar ist.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Ein String, der das Attribut [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) widerspiegelt, welches Tastaturkürzel angibt, die ein Autor implementiert hat, um ein ElementInternals zu aktivieren oder den Fokus darauf zu legen.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Ein String, der das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) widerspiegelt, welches einen String-Wert definiert, der die aktuellen ElementInternals beschriftet.
- [`ElementInternals.ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)
  - : Ein String, der das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) widerspiegelt, welches die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- [`ElementInternals.ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)
  - : Ein String, der das Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) widerspiegelt, welches angibt, dass ein Element aktualisiert wird, und die Arten von Updates beschreibt, die Benutzeragenten, Hilfstechnologien und Benutzer vom Live-Bereich erwarten können.
- [`ElementInternals.ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)
  - : Ein String, der das Attribut [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal) widerspiegelt, welches angibt, ob ein Element modales Verhalten zeigt, wenn es angezeigt wird.
- [`ElementInternals.ariaMultiline`](/de/docs/Web/API/ElementInternals/ariaMultiline)
  - : Ein String, der das Attribut [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) widerspiegelt, welches angibt, ob ein Textfeld mehrere Zeilen von Eingaben akzeptiert oder nur eine einzelne Zeile.
- [`ElementInternals.ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)
  - : Ein String, der das Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) widerspiegelt, welches angibt, dass der Benutzer mehr als einen Artikel aus den aktuellen auswählbaren Nachfahren auswählen kann.
- [`ElementInternals.ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)
  - : Ein String, der das Attribut [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) widerspiegelt, welches angibt, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`ElementInternals.ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)
  - : Ein String, der das Attribut [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) widerspiegelt, welches einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe helfen soll, wenn das Steuerungselement keinen Wert hat.
- [`ElementInternals.ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet)
  - : Ein String, der das Attribut [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) widerspiegelt, welches die Nummer oder Position eines Elements im aktuellen Satz von Listenelementen oder Baumknoten definiert.
- [`ElementInternals.ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)
  - : Ein String, der das Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) widerspiegelt, welches den aktuellen "gedrückt"-Zustand von Umschalt-Tasten angibt.
- [`ElementInternals.ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly)
  - : Ein String, der das Attribut [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) widerspiegelt, welches angibt, dass das Element nicht bearbeitbar, aber dennoch operierbar ist.
- [`ElementInternals.ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant) {{Non-standard_Inline}}
  - : Ein String, der das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) widerspiegelt, welches angibt, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der Accessibility-Baum innerhalb eines Live-Bereichs geändert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einem `aria-live` Bereich relevant sind und angekündigt werden sollten.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Ein String, der das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) widerspiegelt, welches angibt, dass Benutzereingaben im Element erforderlich sind, bevor ein Formular eingereicht werden kann.
- [`ElementInternals.role`](/de/docs/Web/API/ElementInternals/role)
  - : Ein String, der eine ARIA-Rolle enthält. Eine vollständige Liste der ARIA-Rollen finden Sie auf der [ARIA-Techniken Seite](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques).
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Ein String, der das Attribut [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) widerspiegelt, welches eine menschenlesbare, autorlokalisierte Beschreibung für die Rolle eines Elements definiert.
- [`ElementInternals.ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)
  - : Ein String, der das Attribut [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) widerspiegelt, welches die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder Baumraster definiert.
- [`ElementInternals.ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)
  - : Ein String, der das Attribut [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) widerspiegelt, welches den Zeilenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder Baumrasters definiert.
- [`ElementInternals.ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)
  - : Ein String, der das Attribut [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext) widerspiegelt, welches eine menschenlesbare Textalternative von aria-rowindex definiert.
- [`ElementInternals.ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)
  - : Ein String, der das Attribut [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) widerspiegelt, welches die Anzahl der Zeilen definiert, die von einer Zelle oder einem Raster innerhalb einer Tabelle, eines Rasters oder Baumrasters über spannt werden.
- [`ElementInternals.ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected)
  - : Ein String, der das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) widerspiegelt, welches den aktuellen "ausgewählt"-Zustand von Elementen angibt, die einen ausgewählten Zustand haben.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Ein String, der das Attribut [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) widerspiegelt, welches die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumknoten definiert.
- [`ElementInternals.ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)
  - : Ein String, der das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) widerspiegelt, welches angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`ElementInternals.ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)
  - : Ein String, der das Attribut [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) widerspiegelt, welches den maximal erlaubten Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin)
  - : Ein String, der das Attribut [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) widerspiegelt, welches den minimal erlaubten Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Ein String, der das Attribut [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) widerspiegelt, welches den aktuellen Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText)
  - : Ein String, der das Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) widerspiegelt, welches die menschenlesbare Textalternative von aria-valuenow für ein Bereichs-Widget definiert.

## Instanzmethoden

- [`ElementInternals.setFormValue()`](/de/docs/Web/API/ElementInternals/setFormValue)
  - : Setzt den Übermittlungswert und den Zustand des Elements und kommuniziert diese an den Benutzeragenten.
- [`ElementInternals.setValidity()`](/de/docs/Web/API/ElementInternals/setValidity)
  - : Legt die Gültigkeit des Elements fest.
- [`ElementInternals.checkValidity()`](/de/docs/Web/API/ElementInternals/checkValidity)
  - : Überprüft, ob ein Element die auf es angewendeten [Einschränkungsvalidierungs](/de/docs/Web/HTML/Constraint_validation)-Regeln erfüllt.
- [`ElementInternals.reportValidity()`](/de/docs/Web/API/ElementInternals/reportValidity)
  - : Überprüft, ob ein Element die auf es angewendeten [Einschränkungsvalidierungs](/de/docs/Web/HTML/Constraint_validation)-Regeln erfüllt und sendet zudem eine Validierungsnachricht an den Benutzeragenten.

## Beispiele

Das folgende Beispiel demonstriert, wie man ein benutzerdefiniertes formularassoziiertes Element mit [`HTMLElement.attachInternals`](/de/docs/Web/API/HTMLElement/attachInternals) erstellt.

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

- [Fähigere Formularsteuerelemente](https://web.dev/articles/more-capable-form-controls)
- [Erstellen benutzerdefinierter Formularsteuerelemente mit ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/)
- [ElementInternals Polyfill](https://www.npmjs.com/package/element-internals-polyfill)
