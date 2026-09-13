---
title: SVGElement
slug: Web/API/SVGElement
l10n:
  sourceCommit: b0c7bd01a20fba0ae693d8e009f0c8b839da8fa6
---

{{APIRef("SVG")}}

Alle SVG DOM-Schnittstellen, die direkt den Elementen der SVG-Sprache entsprechen, leiten sich von der `SVGElement`-Schnittstelle ab.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der [`Element`](/de/docs/Web/API/Element) Schnittstelle._

- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Eine [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), die die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- [`SVGElement.autofocus`](/de/docs/Web/API/SVGElement/autofocus)
  - : Gibt an, ob die Steuerung fokussiert werden soll, wenn die Seite geladen wird oder wenn ein {{htmlelement("dialog")}} oder ein [Popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) sichtbar wird.
- [`SVGElement.className`](/de/docs/Web/API/SVGElement/className) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das den Wert des {{SVGAttr("class")}}-Attributs auf dem gegebenen Element oder den leeren String widerspiegelt, wenn `class` nicht vorhanden ist. Dieses Attribut ist veraltet und könnte in einer zukünftigen Version dieser Spezifikation entfernt werden. Es wird empfohlen, stattdessen [`Element.classList`](/de/docs/Web/API/Element/classList) zu verwenden.
- [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) {{ReadOnlyInline}}
  - : Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Objekt, das eine Liste von Schlüssel/Wert-Paaren von benannten Datenattributen liefert, die den [benutzerdefinierten Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes) entsprechen, die an das Element angehängt sind. Diese können auch in SVG mit Attributen der Form {{SVGAttr("data-*")}} definiert werden, wobei `*` der Schlüsselname des Paares ist. Dies funktioniert genauso wie die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft von HTML und das globale HTML-Attribut [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*).
- [`SVGElement.nonce`](/de/docs/Web/API/SVGElement/nonce)
  - : Gibt die einmalige kryptografische Nummer zurück, die von der Content Security Policy verwendet wird, um zu bestimmen, ob ein bestimmter Abruf ausgeführt werden darf.
- [`SVGElement.ownerSVGElement`](/de/docs/Web/API/SVGElement/ownerSVGElement) {{ReadOnlyInline}}
  - : Ein [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement), das sich auf das nächste übergeordnete {{SVGElement("svg")}}-Element bezieht. `null`, wenn das gegebene Element das äußerste `<svg>`-Element ist.
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- [`SVGElement.tabIndex`](/de/docs/Web/API/SVGElement/tabIndex)
  - : Die Position des Elements in der Tab-Reihenfolge.
- [`SVGElement.viewportElement`](/de/docs/Web/API/SVGElement/viewportElement) {{ReadOnlyInline}}
  - : Das `SVGElement`, das den aktuellen Viewport erstellt hat. Häufig das nächste übergeordnete {{SVGElement("svg")}}-Element. `null`, wenn das gegebene Element das äußerste `<svg>`-Element ist.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`Element`](/de/docs/Web/API/Element)._

- [`SVGElement.blur()`](/de/docs/Web/API/SVGElement/blur)
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus)
  - : Setzt das Element in den aktuellen Tastaturfokus.

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abgehört werden oder indem ein Ereignis-Listener der entsprechenden `on...`-Handler-Eigenschaft zugewiesen wird.

- [`error`](/de/docs/Web/API/SVGElement/error_event)
  - : Wird ausgelöst, wenn ein SVG-Element nicht richtig geladen wird oder ein Fehler während der Skriptausführung auftritt.
- [`load`](/de/docs/Web/API/SVGElement/load_event)
  - : Wird auf einem `SVGElement` ausgelöst, wenn es im Browser geladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
- SVG-Attribut {{SVGAttr("data-*")}}
- [Verwendung benutzerdefinierter Datenattribute in HTML](/de/docs/Web/HTML/How_to/Use_data_attributes)
