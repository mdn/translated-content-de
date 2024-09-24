---
title: ElementInternals
slug: Web/API/ElementInternals
l10n:
  sourceCommit: 8b920a5e7567dcc9d642dfbd704b0ddbe2005d30
---

{{APIRef("Web Components")}}

Die **`ElementInternals`** Schnittstelle des [Document Object Model](/de/docs/Web/API/Document_Object_Model) gibt Webentwicklern eine Möglichkeit, benutzerdefinierte Elemente vollständig an HTML-Formularen teilnehmen zu lassen. Sie bietet Werkzeuge, um mit diesen Elementen auf die gleiche Weise zu arbeiten, wie Sie mit jedem Standard-HTML-Formularelement arbeiten würden, und stellt auch das [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) dem Element zur Verfügung.

## Konstruktor

Diese Schnittstelle hat keinen Konstruktor. Ein `ElementInternals`-Objekt wird zurückgegeben, wenn {{domxref("HTMLElement.attachInternals()")}} aufgerufen wird.

## Instanz-Eigenschaften

- {{domxref("ElementInternals.shadowRoot")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("ShadowRoot")}}-Objekt zurück, das mit diesem Element verbunden ist.
- {{domxref("ElementInternals.form")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("HTMLFormElement")}} zurück, das mit diesem Element verknüpft ist.
- {{domxref("ElementInternals.states")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("CustomStateSet")}} zurück, das mit diesem Element verknüpft ist.
- {{domxref("ElementInternals.willValidate")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der true zurückgibt, wenn das Element ein übermittelbares Element ist, das ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) ist.
- {{domxref("ElementInternals.validity")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("ValidityState")}}-Objekt zurück, das die verschiedenen Gültigkeitszustände des Elements in Bezug auf die Einschränkungsvalidierung darstellt.
- {{domxref("ElementInternals.validationMessage")}} {{ReadOnlyInline}}
  - : Ein String, der die Validierungsnachricht dieses Elements enthält.
- {{domxref("ElementInternals.labels")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("NodeList")}} von allen Label-Elementen zurück, die mit diesem Element verknüpft sind.

### Instanz-Eigenschaften, die von ARIA übernommen werden

Die `ElementInternals` Schnittstelle umfasst auch die folgenden Eigenschaften.

> [!NOTE]
> Diese werden eingeschlossen, damit standardmäßige Zugänglichkeits-Semantik auf einem benutzerdefinierten Element definiert werden kann. Diese können durch vom Autor definierte Attribute überschrieben werden, aber stellen Sie sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute entfernt oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

- {{domxref("ElementInternals.ariaAtomic")}}
  - : Ein String, der das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) Attribut widerspiegelt, das angibt, ob unterstützende Technologien den gesamten, oder nur Teile des geänderten Bereichs basierend auf den Änderungsbenachrichtigungen, die durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) Attribut definiert sind, präsentieren werden.
- {{domxref("ElementInternals.ariaAutoComplete")}}
  - : Ein String, der das [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) Attribut widerspiegelt, das angibt, ob das Eingeben von Text die Anzeige einer oder mehrerer Vorhersagen des beabsichtigten Werts eines Benutzers für ein Combobox, Suchfeld oder Textfeld auslösen könnte und spezifiziert, wie Vorhersagen präsentiert würden, wenn sie gemacht würden.
- {{domxref("ElementInternals.ariaBusy")}}
  - : Ein String, der das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) Attribut widerspiegelt, das angibt, ob ein Element geändert wird, da unterstützende Technologien möglicherweise warten möchten, bis die Änderungen abgeschlossen sind, bevor sie dem Benutzer präsentiert werden.
- {{domxref("ElementInternals.ariaChecked")}}
  - : Ein String, der das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) Attribut widerspiegelt, das den aktuellen "geprüften" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets angibt, die einen geprüften Zustand haben.
- {{domxref("ElementInternals.ariaColCount")}}
  - : Ein String, der das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) Attribut widerspiegelt, das die Anzahl der Spalten in einer Tabelle, einem Raster oder Baumraster definiert.
- {{domxref("ElementInternals.ariaColIndex")}}
  - : Ein String, der das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) Attribut widerspiegelt, das den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Spalten innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- {{domxref("ElementInternals.ariaColIndexText")}}
  - : Ein String, der das [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) Attribut widerspiegelt, das eine menschenlesbare Textalternative zu aria-colindex definiert.
- {{domxref("ElementInternals.ariaColSpan")}}
  - : Ein String, der das [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) Attribut widerspiegelt, das die Anzahl der von einer Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannten Spalten definiert.
- {{domxref("ElementInternals.ariaCurrent")}}
  - : Ein String, der das [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) Attribut widerspiegelt, das das Element angibt, das den aktuellen Eintrag innerhalb eines Containers oder einer Reihe von verwandten Elementen darstellt.
- {{domxref("ElementInternals.ariaDescription")}}
  - : Ein String, der das [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description) Attribut widerspiegelt, das einen String-Wert definiert, der die aktuellen ElementInternals beschreibt oder annotiert.
- {{domxref("ElementInternals.ariaDisabled")}}
  - : Ein String, der das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) Attribut widerspiegelt, das angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.
- {{domxref("ElementInternals.ariaExpanded")}}
  - : Ein String, der das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Attribut widerspiegelt, das angibt, ob ein Gruppierungselement, das von diesem Element besitzt oder kontrolliert wird, erweitert oder eingeklappt ist.
- {{domxref("ElementInternals.ariaHasPopup")}}
  - : Ein String, der das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) Attribut widerspiegelt, das die Verfügbarkeit und den Typ eines interaktiven Popup-Elements, wie eines Menüs oder Dialogfensters, angibt, das durch ein ElementInternals ausgelöst werden kann.
- {{domxref("ElementInternals.ariaHidden")}}
  - : Ein String, der das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) Attribut widerspiegelt, das angibt, ob das Element einer Zugänglichkeits-API ausgesetzt ist.
- {{domxref("ElementInternals.ariaKeyShortcuts")}}
  - : Ein String, der das [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) Attribut widerspiegelt, das Tastenkombinationen angibt, die ein Autor implementiert hat, um ein ElementInternals zu aktivieren oder den Fokus darauf zu legen.
- {{domxref("ElementInternals.ariaLabel")}}
  - : Ein String, der das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut widerspiegelt, das einen String-Wert definiert, der die aktuellen ElementInternals beschriftet.
- {{domxref("ElementInternals.ariaLevel")}}
  - : Ein String, der das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) Attribut widerspiegelt, das die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- {{domxref("ElementInternals.ariaLive")}}
  - : Ein String, der das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) Attribut widerspiegelt, das angibt, dass ein Element aktualisiert wird und die Arten von Updates beschreibt, die Benutzeragenten, unterstützende Technologien und Benutzer von dem Live-Bereich erwarten können.
- {{domxref("ElementInternals.ariaModal")}}
  - : Ein String, der das [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal) Attribut widerspiegelt, das angibt, ob ein Element modal ist, wenn es angezeigt wird.
- {{domxref("ElementInternals.ariaMultiline")}}
  - : Ein String, der das [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) Attribut widerspiegelt, das angibt, ob ein Textfeld mehrere Eingabezeilen akzeptiert oder nur eine einzelne Zeile.
- {{domxref("ElementInternals.ariaMultiSelectable")}}
  - : Ein String, der das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) Attribut widerspiegelt, das angibt, dass der Benutzer mehr als ein Element von den aktuellen auswählbaren Nachkommen auswählen kann.
- {{domxref("ElementInternals.ariaOrientation")}}
  - : Ein String, der das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Attribut widerspiegelt, das angibt, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- {{domxref("ElementInternals.ariaPlaceholder")}}
  - : Ein String, der das [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) Attribut widerspiegelt, das einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe helfen soll, wenn die Steuerung keinen Wert hat.
- {{domxref("ElementInternals.ariaPosInSet")}}
  - : Ein String, der das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) Attribut widerspiegelt, das die Nummer oder Position eines Elements in der aktuellen Menge von Listenelementen oder Baumelementen definiert.
- {{domxref("ElementInternals.ariaPressed")}}
  - : Ein String, der das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) Attribut widerspiegelt, das den aktuellen "gedrückten" Zustand von Umschalttasten angibt.
- {{domxref("ElementInternals.ariaReadOnly")}}
  - : Ein String, der das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) Attribut widerspiegelt, das angibt, dass das Element nicht bearbeitbar, aber anderweitig bedienbar ist.
- {{domxref("ElementInternals.ariaRelevant")}} {{Non-standard_Inline}}
  - : Ein String, der das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) Attribut widerspiegelt, das angibt, welche Benachrichtigungen der Benutzeragent auslöst, wenn der Zugänglichkeitsbaum innerhalb eines Live-Bereichs geändert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einem `aria-live` Bereich relevant sind und angekündigt werden sollten.
- {{domxref("ElementInternals.ariaRequired")}}
  - : Ein String, der das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) Attribut widerspiegelt, das angibt, dass Benutzereingaben erforderlich sind, bevor ein Formular übermittelt werden kann.
- {{domxref("ElementInternals.role")}}
  - : Ein String, der eine ARIA-Rolle enthält. Eine vollständige Liste der ARIA-Rollen finden Sie auf der [ARIA-Techniken Seite](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques).
- {{domxref("ElementInternals.ariaRoleDescription")}}
  - : Ein String, der das [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) Attribut widerspiegelt, das eine menschenlesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements definiert.
- {{domxref("ElementInternals.ariaRowCount")}}
  - : Ein String, der das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) Attribut widerspiegelt, das die Gesamtanzahl von Zeilen in einer Tabelle, einem Raster oder Baumraster definiert.
- {{domxref("ElementInternals.ariaRowIndex")}}
  - : Ein String, der das [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) Attribut widerspiegelt, das den Zeilenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder Baumrasters definiert.
- {{domxref("ElementInternals.ariaRowIndexText")}}
  - : Ein String, der das [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext) Attribut widerspiegelt, das eine menschenlesbare Textalternative zu aria-rowindex definiert.
- {{domxref("ElementInternals.ariaRowSpan")}}
  - : Ein String, der das [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) Attribut widerspiegelt, das die Anzahl der von einer Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder Baumrasters überspannten Zeilen definiert.
- {{domxref("ElementInternals.ariaSelected")}}
  - : Ein String, der das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Attribut widerspiegelt, das den aktuellen "ausgewählten" Zustand von Elementen angibt, die einen ausgewählten Zustand haben.
- {{domxref("ElementInternals.ariaSetSize")}}
  - : Ein String, der das [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) Attribut widerspiegelt, das die Anzahl der Elemente in der aktuellen Menge von Listenelementen oder Baumelementen definiert.
- {{domxref("ElementInternals.ariaSort")}}
  - : Ein String, der das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Attribut widerspiegelt, das angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- {{domxref("ElementInternals.ariaValueMax")}}
  - : Ein String, der das [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) Attribut widerspiegelt, das den maximal zulässigen Wert für ein Bereichs-Widget definiert.
- {{domxref("ElementInternals.ariaValueMin")}}
  - : Ein String, der das [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) Attribut widerspiegelt, das den minimal zulässigen Wert für ein Bereichs-Widget definiert.
- {{domxref("ElementInternals.ariaValueNow")}}
  - : Ein String, der das [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) Attribut widerspiegelt, das den aktuellen Wert für ein Bereichs-Widget definiert.
- {{domxref("ElementInternals.ariaValueText")}}
  - : Ein String, der das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) Attribut widerspiegelt, das die menschenlesbare Textalternative zu aria-valuenow für ein Bereichs-Widget definiert.

## Instanzmethoden

- {{domxref("ElementInternals.setFormValue()")}}
  - : Legt den Übermittlungswert und Zustand des Elements fest und kommuniziert diese an den Benutzeragenten.
- {{domxref("ElementInternals.setValidity()")}}
  - : Legt die Gültigkeit des Elements fest.
- {{domxref("ElementInternals.checkValidity()")}}
  - : Prüft, ob ein Element den auf es angewendeten [Einschränkungsvalidierungs](/de/docs/Web/HTML/Constraint_validation)-regeln entspricht.
- {{domxref("ElementInternals.reportValidity()")}}
  - : Prüft, ob ein Element den auf es angewendeten [Einschränkungsvalidierungs](/de/docs/Web/HTML/Constraint_validation)-regeln entspricht und sendet auch eine Validierungsnachricht an den Benutzeragenten.

## Beispiele

Das folgende Beispiel demonstriert, wie man ein benutzerdefiniertes, formularassoziiertes Element mit {{domxref("HTMLElement.attachInternals")}} erstellt.

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

// Element zum Formular hinzufügen, um es zu verknüpfen
form.appendChild(element);

console.log(element.internals_.form);
// erwartete Ausgabe: <form><custom-checkbox></custom-checkbox></form>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leistungsfähigere Formularsteuerungen](https://web.dev/articles/more-capable-form-controls)
- [Erstellen von benutzerdefinierten Formularsteuerungen mit ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/)
- [ElementInternals-Polyfill](https://www.npmjs.com/package/element-internals-polyfill)
