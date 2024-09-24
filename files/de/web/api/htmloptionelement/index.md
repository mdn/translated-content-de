---
title: HTMLOptionElement
slug: Web/API/HTMLOptionElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

Die **`HTMLOptionElement`**-Schnittstelle repräsentiert {{HTMLElement("option")}}-Elemente und erbt alle Eigenschaften und Methoden der {{domxref("HTMLElement")}}-Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("HTMLOptionElement.Option", "Option()")}}
  - : Gibt ein neu erstelltes `HTMLOptionElement`-Objekt zurück. Es hat vier Parameter: den anzuzeigenden Text, `text`, den zugeordneten Wert, `value`, den Wert von `defaultSelected` und den Wert von `selected`. Die letzten drei Parameter sind optional.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten {{domxref("HTMLElement")}}._

- {{domxref("HTMLOptionElement.defaultSelected")}}
  - : Hat einen Wert von entweder `true` oder `false`, der den Anfangswert des [`selected`](/de/docs/Web/HTML/Element/option#selected) HTML-Attributs anzeigt, was angibt, ob die Option standardmäßig ausgewählt ist oder nicht.
- {{domxref("HTMLOptionElement.disabled")}}
  - : Hat einen Wert von entweder `true` oder `false`, der den Wert des [`disabled`](/de/docs/Web/HTML/Element/option#disabled) HTML-Attributs darstellt, was angibt, dass die Option nicht ausgewählt werden kann. Eine Option kann auch deaktiviert sein, wenn sie ein Kind eines {{HTMLElement("optgroup")}}-Elements ist, das deaktiviert ist.
- {{domxref("HTMLOptionElement.form")}} {{ReadOnlyInline}}
  - : Ein {{domxref("HTMLFormElement")}}, das denselben Wert wie das `form` des entsprechenden {{HTMLElement("select")}}-Elements darstellt, wenn die Option ein Nachkomme eines {{HTMLElement("select")}}-Elements ist, oder null, wenn keiner gefunden wird.
- {{domxref("HTMLOptionElement.index")}} {{ReadOnlyInline}}
  - : Ein `long`, der die Position der Option innerhalb der Auswahlmöglichkeiten, zu der sie gehört, in Baumreihenfolge darstellt. Wenn die Option nicht Teil einer Liste von Auswahlmöglichkeiten ist, wie wenn sie Teil des {{HTMLElement("datalist")}}-Elements ist, ist der Wert `0`.
- {{domxref("HTMLOptionElement.label")}} {{ReadOnlyInline}}
  - : Ein String, der den Wert des [`label`](/de/docs/Web/HTML/Element/option#label) HTML-Attributs widerspiegelt, das ein Label für die Option bereitstellt. Wenn dieses Attribut nicht explizit gesetzt ist, gibt das Lesen davon den Textinhalt des Elements zurück.
- {{domxref("HTMLOptionElement.selected")}}
  - : Hat einen Wert von entweder `true` oder `false`, der angibt, ob die Option derzeit ausgewählt ist.
- {{domxref("HTMLOptionElement.text")}}
  - : Ein String, der den Textinhalt des Elements enthält.
- {{domxref("HTMLOptionElement.value")}}
  - : Ein String, der den Wert des [`value`](/de/docs/Web/HTML/Element/option#value) HTML-Attributs widerspiegelt, wenn es existiert; ansonsten den Wert der {{domxref("Node.textContent")}}-Eigenschaft.

## Instanz-Methoden

_Implementiert keine spezifische Methode, erbt jedoch Methoden von seinem übergeordneten {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("option")}}.
- Die {{domxref("HTMLOptionsCollection")}}-Schnittstelle.
