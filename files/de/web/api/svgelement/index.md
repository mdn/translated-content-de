---
title: SVGElement
slug: Web/API/SVGElement
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{APIRef("SVG")}}

Alle SVG-DOM-Schnittstellen, die direkt Elementen in der SVG-Sprache entsprechen, leiten sich von der `SVGElement`-Schnittstelle ab.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbenswert sind auch Eigenschaften von der [`Element`](/de/docs/Web/API/Element)-Schnittstelle._

- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- [`SVGElement.autofocus`](/de/docs/Web/API/SVGElement/autofocus)
  - : Gibt an, ob die Steuerung beim Laden der Seite oder wenn ein {{htmlelement("dialog")}} oder [Popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) angezeigt wird, fokussiert werden soll.
- [`SVGElement.className`](/de/docs/Web/API/SVGElement/className) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das den Wert des {{SVGAttr("class")}}-Attributs des angegebenen Elements widerspiegelt, oder der leere String, wenn `class` nicht vorhanden ist. Dieses Attribut ist veraltet und könnte in einer zukünftigen Version dieser Spezifikation entfernt werden. Autoren wird empfohlen, stattdessen [`Element.classList`](/de/docs/Web/API/Element/classList) zu verwenden.
- [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) {{ReadOnlyInline}}
  - : Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Objekt, das eine Liste von Schlüssel/Wert-Paaren von benannten Datenattributen bereitstellt, die den an das Element angehängten [benutzerdefinierten Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes) entsprechen. Diese können auch in SVG durch Attribute der Form {{SVGAttr("data-*")}} definiert werden, wobei `*` der Schlüsselname für das Paar ist. Dies funktioniert genauso wie die HTML-Eigenschaft [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) und das globale Attribut [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) in HTML.
- [`SVGElement.nonce`](/de/docs/Web/API/SVGElement/nonce)
  - : Gibt die kryptografisch einmalig verwendete Zahl zurück, die von Content Security Policy verwendet wird, um zu bestimmen, ob ein gegebener Abruf erfolgen darf.
- [`SVGElement.ownerSVGElement`](/de/docs/Web/API/SVGElement/ownerSVGElement) {{ReadOnlyInline}}
  - : Ein [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement), das auf das nächstgelegene Vorfahren-{{SVGElement("svg")}}-Element verweist. `null`, wenn das gegebene Element das äußerste `<svg>`-Element ist.
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- [`SVGElement.tabIndex`](/de/docs/Web/API/SVGElement/tabIndex)
  - : Die Position des Elements in der Tabulatorreihenfolge.
- [`SVGElement.viewportElement`](/de/docs/Web/API/SVGElement/viewportElement) {{ReadOnlyInline}}
  - : Das `SVGElement`, das die aktuelle Ansicht bestimmt hat. Oft das nächstgelegene Vorfahren-{{SVGElement("svg")}}-Element. `null`, wenn das gegebene Element das äußerste `<svg>`-Element ist.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`Element`](/de/docs/Web/API/Element)._

- [`SVGElement.blur()`](/de/docs/Web/API/SVGElement/blur)
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus)
  - : Macht das Element zum aktuellen Tastaturfokus.

## Ereignisse

Verwenden Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der entsprechenden `on...`-Handler-Eigenschaft zuweisen.

- [`abort`](/de/docs/Web/API/SVGElement/abort_event)
  - : Wird ausgelöst, wenn das Laden der Seite gestoppt wird, bevor ein SVG-Element vollständig geladen wurde.
- [`error`](/de/docs/Web/API/SVGElement/error_event)
  - : Wird ausgelöst, wenn ein SVG-Element nicht richtig geladen wird oder ein Fehler während der Skriptausführung auftritt.
- [`load`](/de/docs/Web/API/SVGElement/load_event)
  - : Wird ausgelöst, wenn ein `SVGElement` im Browser geladen wird.
- [`resize`](/de/docs/Web/API/SVGElement/resize_event)
  - : Wird ausgelöst, wenn ein SVG-Dokument in der Größe verändert wird.
- [`scroll`](/de/docs/Web/API/SVGElement/scroll_event)
  - : Wird ausgelöst, wenn eine Ansicht eines SVG-Dokuments entlang der X- und/oder Y-Achsen verschoben wird.
- [`unload`](/de/docs/Web/API/SVGElement/unload_event)
  - : Wird ausgelöst, wenn die DOM-Implementierung ein SVG-Dokument von einem Fenster oder Frame entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
- SVG-Attribut {{SVGAttr("data-*")}}
- [Verwendung benutzerdefinierter Datenattribute in HTML](/de/docs/Web/HTML/How_to/Use_data_attributes)
