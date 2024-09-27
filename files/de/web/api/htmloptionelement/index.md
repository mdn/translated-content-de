---
title: HTMLOptionElement
slug: Web/API/HTMLOptionElement
l10n:
  sourceCommit: 9a1384feb06620002bbb01e8085c0d9f1e30df4f
---

{{APIRef("HTML DOM")}}

Die **`HTMLOptionElement`**-Schnittstelle repräsentiert {{HTMLElement("option")}}-Elemente und erbt alle Eigenschaften und Methoden der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- [`Option()`](/de/docs/Web/API/HTMLOptionElement/Option)
  - : Gibt ein neu erstelltes `HTMLOptionElement`-Objekt zurück. Es hat vier Parameter: den anzuzeigenden Text, `text`, den zugeordneten Wert, `value`, den Wert von `defaultSelected` und den Wert von `selected`. Die letzten drei Parameter sind optional.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOptionElement.defaultSelected`](/de/docs/Web/API/HTMLOptionElement/defaultSelected)
  - : Hat einen Wert von entweder `true` oder `false`, der den Anfangswert des [`selected`](/de/docs/Web/HTML/Element/option#selected)-HTML-Attributs anzeigt und angibt, ob die Option standardmäßig ausgewählt ist oder nicht.
- [`HTMLOptionElement.disabled`](/de/docs/Web/API/HTMLOptionElement/disabled)
  - : Hat einen Wert von entweder `true` oder `false`, der den Wert des [`disabled`](/de/docs/Web/HTML/Element/option#disabled)-HTML-Attributs repräsentiert, welches angibt, dass die Option nicht ausgewählt werden kann.
- [`HTMLOptionElement.form`](/de/docs/Web/API/HTMLOptionElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das denselben Wert wie das `form` des entsprechenden {{HTMLElement("select")}}-Elements darstellt, wenn die Option ein Nachfahre eines {{HTMLElement("select")}}-Elements ist, oder `null`, wenn keines gefunden wird.
- [`HTMLOptionElement.index`](/de/docs/Web/API/HTMLOptionElement/index) {{ReadOnlyInline}}
  - : Ein `long`, der die Position der Option innerhalb der Liste der Optionen, zu der sie gehört, in Baumordnung darstellt. Wenn die Option kein Teil einer Liste von Optionen ist, wie zum Beispiel wenn sie Teil des {{HTMLElement("datalist")}}-Elements ist, ist der Wert `0`.
- [`HTMLOptionElement.label`](/de/docs/Web/API/HTMLOptionElement/label)
  - : Ein String, der den Wert des [`label`](/de/docs/Web/HTML/Element/option#label)-HTML-Attributs widerspiegelt und ein Label für die Option bereitstellt. Wenn dieses Attribut nicht explizit gesetzt ist, gibt das Lesen dessen den [`text`](/de/docs/Web/API/HTMLOptionElement/text)-Inhalt des Elements zurück.
- [`HTMLOptionElement.selected`](/de/docs/Web/API/HTMLOptionElement/selected)
  - : Hat einen Wert von entweder `true` oder `false`, der anzeigt, ob die Option momentan ausgewählt ist.
- [`HTMLOptionElement.text`](/de/docs/Web/API/HTMLOptionElement/text)
  - : Ein String, der den Textinhalt des Elements enthält.
- [`HTMLOptionElement.value`](/de/docs/Web/API/HTMLOptionElement/value)
  - : Ein String, der den Wert des [`value`](/de/docs/Web/HTML/Element/option#value)-HTML-Attributs widerspiegelt, falls es existiert; ansonsten spiegelt er den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft wider.

## Instanz-Methoden

_Implementiert keine spezifischen Methoden, aber erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

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
