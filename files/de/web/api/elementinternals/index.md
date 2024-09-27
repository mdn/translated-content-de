---
title: ElementInternals
slug: Web/API/ElementInternals
l10n:
  sourceCommit: 8b920a5e7567dcc9d642dfbd704b0ddbe2005d30
---

{{APIRef("Web Components")}}

Das **`ElementInternals`**-Interface des [Document Object Model](/de/docs/Web/API/Document_Object_Model) gibt Webentwicklern die Möglichkeit, benutzerdefinierte Elemente vollständig in HTML-Formulare einzubinden. Es bietet Werkzeuge, um mit diesen Elementen auf dieselbe Weise zu arbeiten wie mit jedem standardmäßigen HTML-Formularelement, und stellt zudem das [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) für das Element zur Verfügung.

## Konstruktor

Dieses Interface hat keinen Konstruktor. Ein `ElementInternals`-Objekt wird zurückgegeben, wenn [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufgerufen wird.

## Instanzeigenschaften

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) {{ReadOnlyInline}}
  - : Gibt das mit diesem Element verknüpfte [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück.
- [`ElementInternals.form`](/de/docs/Web/API/ElementInternals/form) {{ReadOnlyInline}}
  - : Gibt das mit diesem Element verknüpfte [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) zurück.
- [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) {{ReadOnlyInline}}
  - : Gibt das mit diesem Element verknüpfte [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) zurück.
- [`ElementInternals.willValidate`](/de/docs/Web/API/ElementInternals/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das Element ein einreichbares Element ist, das für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) in Betracht kommt.
- [`ElementInternals.validity`](/de/docs/Web/API/ElementInternals/validity) {{ReadOnlyInline}}
  - : Gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die verschiedenen Gültigkeitszustände des Elements in Bezug auf die Einschränkungsvalidierung darstellt.
- [`ElementInternals.validationMessage`](/de/docs/Web/API/ElementInternals/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der die Validierungsnachricht dieses Elements enthält.
- [`ElementInternals.labels`](/de/docs/Web/API/ElementInternals/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) aller dem Element zugeordneten Label-Elemente zurück.

### Instanzeigenschaften aus ARIA eingeschlossen

Das `ElementInternals`-Interface enthält zudem die folgenden Eigenschaften.

> [!NOTE]
> Diese sind enthalten, damit Standard-Zugänglichkeitssemantiken auf einem benutzerdefinierten Element definiert werden können. Diese können von autorenspezifischen Attributen überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, wenn der Autor diese Attribute löscht oder gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model-Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

- [`ElementInternals.ariaAtomic`](/de/docs/Web/API/ElementInternals/ariaAtomic)
  - : Ein String, der das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Attribut widerspiegelt, das angibt, ob unterstützende Technologien die gesamte oder nur Teile der geänderten Region präsentieren, basierend auf den Änderungsbenachrichtigungen, die durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attribut definiert sind.
- [`ElementInternals.ariaAutoComplete`](/de/docs/Web/API/ElementInternals/ariaAutoComplete)
  - : Ein String, der das [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)-Attribut widerspiegelt, das angibt, ob die Eingabe von Text die Anzeige von einer oder mehreren Vorhersagen des beabsichtigten Werts eines Nutzers für ein Kombinationsfeld, Suchfeld oder Textfeld auslösen könnte, und wie diese Vorhersagen präsentiert würden, falls sie gemacht werden.
- [`ElementInternals.ariaBusy`](/de/docs/Web/API/ElementInternals/ariaBusy)
  - : Ein String, der das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)-Attribut widerspiegelt, das angibt, ob ein Element modifiziert wird, da unterstützende Technologien vielleicht warten wollen, bis die Modifikationen abgeschlossen sind, bevor sie dem Benutzer präsentiert werden.
- [`ElementInternals.ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked)
  - : Ein String, der das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)-Attribut widerspiegelt, das den aktuellen Zustand des "geprüft" von Kontrollkästchen, Optionsfeldern und anderen Widgets angibt, die einen überprüften Zustand haben.
- [`ElementInternals.ariaColCount`](/de/docs/Web/API/ElementInternals/ariaColCount)
  - : Ein String, der das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)-Attribut widerspiegelt, das die Anzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`ElementInternals.ariaColIndex`](/de/docs/Web/API/ElementInternals/ariaColIndex)
  - : Ein String, der das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)-Attribut widerspiegelt, das den Spaltenindex oder die Position eines Elements im Verhältnis zur Gesamtanzahl der Spalten innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`ElementInternals.ariaColIndexText`](/de/docs/Web/API/ElementInternals/ariaColIndexText)
  - : Ein String, der das [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext)-Attribut widerspiegelt, das eine menschenlesbare Textalternative zu aria-colindex definiert.
- [`ElementInternals.ariaColSpan`](/de/docs/Web/API/ElementInternals/ariaColSpan)
  - : Ein String, der das [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)-Attribut widerspiegelt, das die Anzahl der von einer Zelle oder Rasterzelle in einer Tabelle, einem Raster oder einem Baumraster überbrückten Spalten definiert.
- [`ElementInternals.ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent)
  - : Ein String, der das [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current)-Attribut widerspiegelt, das das Element angibt, das das aktuelle Element innerhalb eines Behälters oder einer Gruppe verwandter Elemente darstellt.
- [`ElementInternals.ariaDescription`](/de/docs/Web/API/ElementInternals/ariaDescription)
  - : Ein String, der das [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)-Attribut widerspiegelt, das einen String-Wert definiert, der die aktuellen ElementInternals beschreibt oder annotiert.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Ein String, der das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)-Attribut widerspiegelt, das angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.
- [`ElementInternals.ariaExpanded`](/de/docs/Web/API/ElementInternals/ariaExpanded)
  - : Ein String, der das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Attribut widerspiegelt, das angibt, ob ein Gruppenelement, das diesem Element gehört oder von ihm kontrolliert wird, erweitert oder reduziert ist.
- [`ElementInternals.ariaHasPopup`](/de/docs/Web/API/ElementInternals/ariaHasPopup)
  - : Ein String, der das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)-Attribut widerspiegelt, das die Verfügbarkeit und den Typ eines interaktiven Popup-Elements angibt, wie Menü oder Dialog, das von einem ElementInternals ausgelöst werden kann.
- [`ElementInternals.ariaHidden`](/de/docs/Web/API/ElementInternals/ariaHidden)
  - : Ein String, der das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)-Attribut widerspiegelt, das angibt, ob das Element einer Zugänglichkeits-API ausgesetzt ist.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Ein String, der das [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts)-Attribut widerspiegelt, das Tastaturkürzel angibt, die ein Autor implementiert hat, um ein ElementInternals zu aktivieren oder den Fokus darauf zu legen.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Ein String, der das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut widerspiegelt, das einen String-Wert definiert, der die aktuellen ElementInternals kennzeichnet.
- [`ElementInternals.ariaLevel`](/de/docs/Web/API/ElementInternals/ariaLevel)
  - : Ein String, der das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)-Attribut widerspiegelt, das die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- [`ElementInternals.ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)
  - : Ein String, der das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Attribut widerspiegelt, das angibt, dass ein Element aktualisiert wird und die Art der Aktualisierungen beschreibt, die die Benutzeragenten, unterstützende Technologien und Benutzer vom Live-Bereich erwarten können.
- [`ElementInternals.ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)
  - : Ein String, der das [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)-Attribut widerspiegelt, das angibt, ob ein Element beim Anzeigen modal ist.
- [`ElementInternals.ariaMultiline`](/de/docs/Web/API/ElementInternals/ariaMultiline)
  - : Ein String, der das [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)-Attribut widerspiegelt, das angibt, ob ein Textfeld mehrere Zeilen Eingabe akzeptiert oder nur eine einzelne Zeile.
- [`ElementInternals.ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)
  - : Ein String, der das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)-Attribut widerspiegelt, das angibt, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachfahren auswählen kann.
- [`ElementInternals.ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)
  - : Ein String, der das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Attribut widerspiegelt, das angibt, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`ElementInternals.ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)
  - : Ein String, der das [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)-Attribut widerspiegelt, das einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe hilft, wenn die Steuerung keinen Wert hat.
- [`ElementInternals.ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet)
  - : Ein String, der das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)-Attribut widerspiegelt, das die Nummer oder Position eines Elements in der aktuellen Gruppe von Listenelementen oder Baumelementen definiert.
- [`ElementInternals.ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)
  - : Ein String, der das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)-Attribut widerspiegelt, das den aktuellen "gedrückten" Zustand von Umschaltschaltern angibt.
- [`ElementInternals.ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly)
  - : Ein String, der das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)-Attribut widerspiegelt, das angibt, dass das Element nicht bearbeitbar, aber anderweitig bedienbar ist.
- [`ElementInternals.ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant) {{Non-standard_Inline}}
  - : Ein String, der das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attribut widerspiegelt, das angibt, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der Zugänglichkeitsbaum innerhalb eines Live-Bereichs modifiziert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einem `aria-live`-Bereich relevant sind und angekündigt werden sollen.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Ein String, der das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)-Attribut widerspiegelt, das angibt, dass Benutzereingaben auf dem Element erforderlich sind, bevor ein Formular gesendet werden kann.
- [`ElementInternals.role`](/de/docs/Web/API/ElementInternals/role)
  - : Ein String, der eine ARIA-Rolle enthält. Eine vollständige Liste der ARIA-Rollen finden Sie auf der [ARIA-Technik-Seite](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques).
- [`ElementInternals.ariaRoleDescription`](/de/docs/Web/API/ElementInternals/ariaRoleDescription)
  - : Ein String, der das [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)-Attribut widerspiegelt, das eine menschenlesbare, autorenlokalisierte Beschreibung der Rolle eines Elements definiert.
- [`ElementInternals.ariaRowCount`](/de/docs/Web/API/ElementInternals/ariaRowCount)
  - : Ein String, der das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)-Attribut widerspiegelt, das die Gesamtanzahl der Reihen in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`ElementInternals.ariaRowIndex`](/de/docs/Web/API/ElementInternals/ariaRowIndex)
  - : Ein String, der das [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)-Attribut widerspiegelt, das den Reihenindex oder die Position eines Elements im Verhältnis zur Gesamtanzahl der Reihen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`ElementInternals.ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)
  - : Ein String, der das [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext)-Attribut widerspiegelt, das eine menschenlesbare Textalternative zu aria-rowindex definiert.
- [`ElementInternals.ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)
  - : Ein String, der das [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)-Attribut widerspiegelt, das die Anzahl der von einer Zelle oder Rasterzelle in einer Tabelle, einem Raster oder einem Baumraster überbrückten Reihen definiert.
- [`ElementInternals.ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected)
  - : Ein String, der das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Attribut widerspiegelt, das den aktuellen "ausgewählten" Zustand von Elementen angibt, die einen ausgewählten Zustand haben.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Ein String, der das [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)-Attribut widerspiegelt, das die Anzahl der Elemente in der aktuellen Gruppe von Listenelementen oder Baumelementen definiert.
- [`ElementInternals.ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)
  - : Ein String, der das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attribut widerspiegelt, das angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`ElementInternals.ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)
  - : Ein String, der das [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attribut widerspiegelt, das den maximal erlaubten Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin)
  - : Ein String, der das [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)-Attribut widerspiegelt, das den minimal erlaubten Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Ein String, der das [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Attribut widerspiegelt, das den aktuellen Wert für ein Bereichs-Widget definiert.
- [`ElementInternals.ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText)
  - : Ein String, der das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)-Attribut widerspiegelt, das die menschenlesbare Textalternative zu aria-valuenow für ein Bereichs-Widget definiert.

## Instanzmethoden

- [`ElementInternals.setFormValue()`](/de/docs/Web/API/ElementInternals/setFormValue)
  - : Setzt den Übermittlungswert und -status des Elements und teilt diese dem Benutzeragenten mit.
- [`ElementInternals.setValidity()`](/de/docs/Web/API/ElementInternals/setValidity)
  - : Setzt die Gültigkeit des Elements.
- [`ElementInternals.checkValidity()`](/de/docs/Web/API/ElementInternals/checkValidity)
  - : Prüft, ob ein Element die auf es angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt.
- [`ElementInternals.reportValidity()`](/de/docs/Web/API/ElementInternals/reportValidity)
  - : Prüft, ob ein Element die auf es angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt, und sendet außerdem eine Validierungsnachricht an den Benutzeragenten.

## Beispiele

Das folgende Beispiel zeigt, wie Sie ein benutzerdefiniertes formularassoziiertes Element mit [`HTMLElement.attachInternals`](/de/docs/Web/API/HTMLElement/attachInternals) erstellen können.

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

- [Fähigere Formularsteuerungen](https://web.dev/articles/more-capable-form-controls)
- [Erstellen von benutzerdefinierten Formularsteuerungen mit ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/)
- [ElementInternals Polyfill](https://www.npmjs.com/package/element-internals-polyfill)
