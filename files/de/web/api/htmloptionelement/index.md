---
title: HTMLOptionElement
slug: Web/API/HTMLOptionElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLOptionElement`** Interface repräsentiert {{HTMLElement("option")}} Elemente und erbt alle Eigenschaften und Methoden des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interfaces.

{{InheritanceDiagram}}

## Konstruktor

- [`Option()`](/de/docs/Web/API/HTMLOptionElement/Option)
  - : Gibt ein neu erstelltes `HTMLOptionElement` Objekt zurück. Es hat vier Parameter: der anzuzeigende Text, `text`, der zugehörige Wert, `value`, der Wert von `defaultSelected` und der Wert von `selected`. Die letzten drei Parameter sind optional.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternelement, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOptionElement.defaultSelected`](/de/docs/Web/API/HTMLOptionElement/defaultSelected)
  - : Hat einen Wert von entweder `true` oder `false`, der den Anfangswert des [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected) HTML-Attributs anzeigt und beschreibt, ob die Option standardmäßig ausgewählt ist oder nicht.
- [`HTMLOptionElement.disabled`](/de/docs/Web/API/HTMLOptionElement/disabled)
  - : Hat einen Wert von entweder `true` oder `false`, der den Wert des [`disabled`](/de/docs/Web/HTML/Reference/Elements/option#disabled) HTML-Attributs darstellt, welches angibt, dass die Option nicht zur Auswahl verfügbar ist.
- [`HTMLOptionElement.form`](/de/docs/Web/API/HTMLOptionElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das denselben Wert wie das `form` des entsprechenden {{HTMLElement("select")}} Elements repräsentiert, wenn die Option ein Nachfahre eines {{HTMLElement("select")}} Elements ist, oder null, wenn kein solches Element gefunden wird.
- [`HTMLOptionElement.index`](/de/docs/Web/API/HTMLOptionElement/index) {{ReadOnlyInline}}
  - : Ein `long` Wert, der die Position der Option innerhalb der Liste der Optionen, zu denen sie gehört, in Baum-Reihenfolge darstellt. Wenn die Option nicht Teil einer Optionenliste ist, wie wenn sie Teil des {{HTMLElement("datalist")}} Elements ist, beträgt der Wert `0`.
- [`HTMLOptionElement.label`](/de/docs/Web/API/HTMLOptionElement/label)
  - : Ein String, der den Wert des [`label`](/de/docs/Web/HTML/Reference/Elements/option#label) HTML-Attributs widerspiegelt, welches ein Label für die Option bereitstellt. Wenn dieses Attribut nicht explizit gesetzt ist, gibt das Lesen den [`text`](/de/docs/Web/API/HTMLOptionElement/text) Inhalt des Elements zurück.
- [`HTMLOptionElement.selected`](/de/docs/Web/API/HTMLOptionElement/selected)
  - : Hat einen Wert von entweder `true` oder `false`, der angibt, ob die Option aktuell ausgewählt ist.
- [`HTMLOptionElement.text`](/de/docs/Web/API/HTMLOptionElement/text)
  - : Ein String, der den Textinhalt des Elements enthält.
- [`HTMLOptionElement.value`](/de/docs/Web/API/HTMLOptionElement/value)
  - : Ein String, der den Wert des [`value`](/de/docs/Web/HTML/Reference/Elements/option#value) HTML-Attributs widerspiegelt, falls vorhanden; andernfalls spiegelt er den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft wider.

## Instanz-Methoden

_Implementiert keine spezifische Methode, erbt jedoch Methoden von seinem Elternelement, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("option")}}
- {{HTMLElement("select")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("optgroup")}}
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)
- [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
