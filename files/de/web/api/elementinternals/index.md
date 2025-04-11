---
title: ElementInternals
slug: Web/API/ElementInternals
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Components")}}

Die **`ElementInternals`**-Schnittstelle des [Document Object Model](/de/docs/Web/API/Document_Object_Model) bietet Webentwicklern eine Möglichkeit, benutzerdefinierte Elemente vollständig an HTML-Formulare anzupassen. Sie stellt Werkzeuge zur Verfügung, um mit diesen Elementen auf die gleiche Weise zu arbeiten, wie Sie es mit jedem Standard-HTML-Formularelement tun würden, und macht auch das [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) für das Element zugänglich.

## Konstruktor

Diese Schnittstelle hat keinen Konstruktor. Ein `ElementInternals`-Objekt wird zurückgegeben, wenn [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufgerufen wird.

## Instanz-Eigenschaften

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) {{ReadOnlyInline}}
  - : Gibt das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück, das mit diesem Element verbunden ist.
- [`ElementInternals.form`](/de/docs/Web/API/ElementInternals/form) {{ReadOnlyInline}}
  - : Gibt das mit diesem Element verbundene [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) zurück.
- [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) {{ReadOnlyInline}}
  - : Gibt das mit diesem Element verbundene [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) zurück.
- [`ElementInternals.willValidate`](/de/docs/Web/API/ElementInternals/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der true zurückgibt, wenn das Element ein übermittelbares Element ist, das ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) ist.
- [`ElementInternals.validity`](/de/docs/Web/API/ElementInternals/validity) {{ReadOnlyInline}}
  - : Gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die verschiedenen Gültigkeitszustände des Elements in Bezug auf die Einschränkungsvalidierung darstellt.
- [`ElementInternals.validationMessage`](/de/docs/Web/API/ElementInternals/validationMessage) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Validierungsnachricht dieses Elements enthält.
- [`ElementInternals.labels`](/de/docs/Web/API/ElementInternals/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von allen zu diesem Element zugehörigen Labels zurück.

### Instanz-Eigenschaften, die von ARIA enthalten sind

Die `ElementInternals`-Schnittstelle enthält auch die folgenden Eigenschaften.

> [!NOTE]
> Diese sind enthalten, damit standardmäßige Zugänglichkeitssemantiken auf einem benutzerdefinierten Element definiert werden können. Diese können durch autorendefinierte Attribute überschrieben werden, aber stellen sicher, dass die Standardsemantiken erhalten bleiben, sollte der Autor diese Attribute löschen oder überhaupt nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

- [`ElementInternals.ariaAtomic`](/de/docs/Web/API/ElementInternals/ariaAtomic)
  - : Eine Zeichenfolge, die das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Attribut widerspiegelt, das angibt, ob unterstützende Technologien die gesamte oder nur Teile der geänderten Region basierend auf den vom [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Attribut definierten Änderungsbenachrichtigungen präsentieren werden.
- [`ElementInternals.ariaAutoComplete`](/de/docs/Web/API/ElementInternals/ariaAutoComplete)
  - : Eine Zeichenfolge, die das [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)-Attribut widerspiegelt, das angibt, ob die Texteingabe die Anzeige von einer oder mehreren Vorhersagen des beabsichtigten Werts des Benutzers für ein Kombinationsfeld, Suchfeld oder Eingabefeld auslösen könnte und wie Vorhersagen präsentiert würden, wenn sie gemacht werden.
- [`ElementInternals.ariaBusy`](/de/docs/Web/API/ElementInternals/ariaBusy)
  - : Eine Zeichenfolge, die das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)-Attribut widerspiegelt, das angibt, ob ein Element modifiziert wird, da unterstützende Technologien möglicherweise warten möchten, bis die Modifikationen abgeschlossen sind, bevor sie sie dem Benutzer zur Verfügung stellen.
- [`ElementInternals.ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked)
  - : Eine Zeichenfolge, die das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut widerspiegelt, das den aktuellen "geprüften" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets angibt, die einen geprüften Zustand haben.
- [`ElementInternals.ariaColCount`](/de/docs/Web/API/ElementInternals/ariaColCount)
  - : Eine Zeichenfolge, die das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)-Attribut widerspiegelt, das die Anzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`ElementInternals.ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)
  - : Eine Zeichenfolge, die das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)-Attribut widerspiegelt, das den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`ElementInternals.ariaColIndexText`](/de/docs/Web/API/ElementInternals/ariaColIndexText)
  - : Eine Zeichenfolge, die das [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext)-Attribut widerspiegelt, das eine menschenlesbare Textalternative von aria-colindex definiert.
- [`ElementInternals.ariaColSpan`](/de/docs/Web/API/ElementInternals/ariaColSpan)
  - : Eine Zeichenfolge, die das [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)-Attribut widerspiegelt, das angibt, wie viele Spalten von einer Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannt werden.
- [`ElementInternals.ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent)
  - : Eine Zeichenfolge, die das [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)-Attribut widerspiegelt, das das Element angibt, das das aktuelle Element innerhalb eines Containers oder einer Reihe verwandter Elemente darstellt.
- [`ElementInternals.ariaDescription`](/de/docs/Web/API/ElementInternals/ariaDescription)
  - : Eine Zeichenfolge, die das [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attribut widerspiegelt, das eine Zeichenfolgenwert definiert, der die aktuellen `ElementInternals` beschreibt oder kommentiert.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Eine Zeichenfolge, die das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)-Attribut widerspiegelt, das angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.
- [`ElementInternals.ariaExpanded`](/de/docs/Web/API/ElementInternals/ariaExpanded)
  - : Eine Zeichenfolge, die das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attribut widerspiegelt, das angibt, ob ein Gruppierungselement, das von diesem Element besitzt oder kontrolliert wird, erweitert oder reduziert ist.
- [`ElementInternals.ariaHasPopup`](/de/docs/Web/API/ElementInternals/ariaHasPopup)
  - : Eine Zeichenfolge, die das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Attribut widerspiegelt, das die Verfügbarkeit und den Typ interaktiver Popup-Elemente, wie Menü oder Dialog, angibt, die von einem `ElementInternals` ausgelöst werden können.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Eine Zeichenfolge, die das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut widerspiegelt, das angibt, ob das Element einer Zugänglichkeits-API ausgesetzt ist.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Eine Zeichenfolge, die das [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts)-Attribut widerspiegelt, das die Tastenkombinationen beschreibt, die ein Autor implementiert hat, um ein `ElementInternals` zu aktivieren oder den Fokus darauf zu setzen.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Eine Zeichenfolge, die das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut widerspiegelt, das eine Zeichenfolgenwert definiert, der die aktuellen `ElementInternals` kennzeichnet.
- [`ElementInternals.ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)
  - : Eine Zeichenfolge, die das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)-Attribut widerspiegelt, das die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- [`ElementInternals.ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)
  - : Eine Zeichenfolge, die das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Attribut widerspiegelt, das angibt, dass ein Element aktualisiert wird, und beschreibt die Art der Aktualisierungen, die der Benutzeragent, unterstützende Technologien und der Benutzer von der Live-Region erwarten können.
- [`ElementInternals.ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)
  - : Eine Zeichenfolge, die das [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)-Attribut widerspiegelt, das angibt, ob ein Element im Anzeigemodus modal ist.
- [`ElementInternals.ariaMultiline`](/de/docs/Web/API/ElementInternals/ariaMultiLine)
  - : Eine Zeichenfolge, die das [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)-Attribut widerspiegelt, das angibt, ob ein Textfeld mehrere Anzeigenzeilen akzeptiert oder nur eine einzige Linie.
- [`ElementInternals.ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)
  - : Eine Zeichenfolge, die das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)-Attribut widerspiegelt, das angibt, dass der Benutzer mehr als ein Element von den aktuellen auswählbaren Nachfolgern auswählen kann.
- [`ElementInternals.ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)
  - : Eine Zeichenfolge, die das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Attribut widerspiegelt, das angibt, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`ElementInternals.ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)
  - : Eine Zeichenfolge, die das [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)-Attribut widerspiegelt, das einen kurzen Hinweis definiert, der den Benutzer bei der Dateneingabe unterstützen soll, wenn das Steuerelement keinen Wert hat.
- [`ElementInternals.ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet)
  - : Eine Zeichenfolge, die das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)-Attribut widerspiegelt, das die Nummer oder Position eines Elements im aktuellen Satz von Listenelementen oder Baumelementen definiert.
- [`ElementInternals.ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)
  - : Eine Zeichenfolge, die das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut widerspiegelt, das den aktuellen "gedrückten" Zustand von Umschalttasten angibt.
- [`ElementInternals.ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly)
  - : Eine Zeichenfolge, die das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attribut widerspiegelt, das angibt, dass das Element nicht bearbeitbar, aber anderweitig bedienbar ist.
- [`ElementInternals.ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant) {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Attribut widerspiegelt, das angibt, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der Zugänglichkeitsbaum innerhalb einer Live-Region modifiziert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einer `aria-live`-Region relevant sind und angekündigt werden sollten.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Eine Zeichenfolge, die das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut widerspiegelt, das angibt, dass Benutzereingaben auf dem Element erforderlich sind, bevor ein Formular übermittelt werden kann.
- [`ElementInternals.role`](/de/docs/Web/API/ElementInternals/role)
  - : Eine Zeichenfolge, die eine ARIA-Rolle enthält. Eine vollständige Liste der ARIA-Rollen finden Sie auf der [ARIA-Technikseite](/de/docs/Web/Accessibility/ARIA/Guides/Techniques).
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Eine Zeichenfolge, die das [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)-Attribut widerspiegelt, das eine für Menschen lesbare, autorenlokalisierte Beschreibung der Rolle eines Elements definiert.
- [`ElementInternals.ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)
  - : Eine Zeichenfolge, die das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)-Attribut widerspiegelt, das die Gesamtzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`ElementInternals.ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)
  - : Eine Zeichenfolge, die das [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)-Attribut widerspiegelt, das den Zeilenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`ElementInternals.ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)
  - : Eine Zeichenfolge, die das [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)-Attribut widerspiegelt, das eine menschenlesbare Textalternative von aria-rowindex definiert.
- [`ElementInternals.ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)
  - : Eine Zeichenfolge, die das [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)-Attribut widerspiegelt, das angibt, wie viele Zeilen von einer Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannt werden.
- [`ElementInternals.ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected)
  - : Eine Zeichenfolge, die das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut widerspiegelt, das den aktuellen "ausgewählten" Zustand von Elementen angibt, die einen ausgewählten Zustand haben.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Eine Zeichenfolge, die das [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)-Attribut widerspiegelt, das die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen definiert.
- [`ElementInternals.ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)
  - : Eine Zeichenfolge, die das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut widerspiegelt, das angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`ElementInternals.ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)
  - : Eine Zeichenfolge, die das [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut widerspiegelt, das den maximal zulässigen Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin)
  - : Eine Zeichenfolge, die das [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut widerspiegelt, das den minimal zulässigen Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Eine Zeichenfolge, die das [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attribut widerspiegelt, das den aktuellen Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText)
  - : Eine Zeichenfolge, die das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut widerspiegelt, das die menschenlesbare Textalternative von aria-valuenow für ein Bereichs-Widget definiert.

## Instanzmethoden

- [`ElementInternals.setFormValue()`](/de/docs/Web/API/ElementInternals/setFormValue)
  - : Setzt den Übermittlungswert und den Zustand des Elements und kommuniziert diese an den Benutzeragenten.
- [`ElementInternals.setValidity()`](/de/docs/Web/API/ElementInternals/setValidity)
  - : Legt die Gültigkeit des Elements fest.
- [`ElementInternals.checkValidity()`](/de/docs/Web/API/ElementInternals/checkValidity)
  - : Überprüft, ob ein Element alle darauf angewendeten [Einschränkungsvalidierungs](/de/docs/Web/HTML/Guides/Constraint_validation)regeln erfüllt.
- [`ElementInternals.reportValidity()`](/de/docs/Web/API/ElementInternals/reportValidity)
  - : Überprüft, ob ein Element alle darauf angewendeten [Einschränkungsvalidierungs](/de/docs/Web/HTML/Guides/Constraint_validation)regeln erfüllt, und sendet auch eine Validierungsmeldung an den Benutzeragenten.

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

- [Leistungsfähigere Formularelemente](https://web.dev/articles/more-capable-form-controls)
- [Erstellen benutzerdefinierter Formularelemente mit ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/)
- [ElementInternals Polyfill](https://www.npmjs.com/package/element-internals-polyfill)
