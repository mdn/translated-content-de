---
title: SVGElement
slug: Web/API/SVGElement
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{APIRef("SVG")}}

Alle SVG-DOM-Schnittstellen, die direkt mit Elementen in der SVG-Sprache korrespondieren, leiten sich von der `SVGElement`-Schnittstelle ab.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der [`Element`](/de/docs/Web/API/Element)-Schnittstelle._

- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Eine [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), die die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- [`SVGElement.autofocus`](/de/docs/Web/API/SVGElement/autofocus)
  - : Ob die Steuerung den Fokus haben soll, wenn die Seite geladen wird oder wenn ein {{htmlelement("dialog")}} oder [Popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) angezeigt wird.
- [`SVGElement.className`](/de/docs/Web/API/SVGElement/className) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das den Wert des {{SVGAttr("class")}}-Attributs auf dem angegebenen Element widerspiegelt, oder der leere String, falls `class` nicht vorhanden ist. Dieses Attribut ist veraltet und kann in einer zukünftigen Version dieser Spezifikation entfernt werden. Autoren wird empfohlen, stattdessen [`Element.classList`](/de/docs/Web/API/Element/classList) zu verwenden.
- [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) {{ReadOnlyInline}}
  - : Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Objekt, das eine Liste von Schlüssel/Wert-Paaren benannter Datenattribute bereitstellt, die den [benutzerdefinierten Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes) entsprechen, die dem Element angehängt sind. Diese können auch in SVG unter Verwendung von Attributen der Form {{SVGAttr("data-*")}} definiert werden, wobei `*` der Schlüsselname für das Paar ist. Dies funktioniert genauso wie die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft von HTML und das globale HTML-Attribut [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*).
- [`SVGElement.nonce`](/de/docs/Web/API/SVGElement/nonce)
  - : Gibt die kryptografische Nummer zurück, die einmal verwendet wird und die von der Content Security Policy verwendet wird, um zu bestimmen, ob ein gegebener Abruf fortgesetzt werden darf.
- [`SVGElement.ownerSVGElement`](/de/docs/Web/API/SVGElement/ownerSVGElement) {{ReadOnlyInline}}
  - : Ein [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement), das auf das nächstgelegene Vorgänger-{{SVGElement("svg")}}-Element verweist. `null`, wenn das gegebene Element das äußerste `<svg>`-Element ist.
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- [`SVGElement.tabIndex`](/de/docs/Web/API/SVGElement/tabIndex)
  - : Die Position des Elements in der Tab-Reihenfolge.
- [`SVGElement.viewportElement`](/de/docs/Web/API/SVGElement/viewportElement) {{ReadOnlyInline}}
  - : Das `SVGElement`, das den aktuellen Ansichtsbereich erstellt hat. Oft das nächstgelegene Vorgänger-{{SVGElement("svg")}}-Element. `null`, wenn das gegebene Element das äußerste `<svg>`-Element ist.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`Element`](/de/docs/Web/API/Element)._

- [`SVGElement.blur()`](/de/docs/Web/API/SVGElement/blur)
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus)
  - : Setzt den Tastaturfokus auf das Element.

## Ereignisse

Diese Ereignisse können Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören oder indem Sie einen Ereignis-Listener der entsprechenden `on...`-Handler-Eigenschaft zuweisen.

- [`abort`](/de/docs/Web/API/SVGElement/abort_event)
  - : Wird ausgelöst, wenn das Laden der Seite gestoppt wird, bevor ein SVG-Element vollständig geladen wurde.
- [`error`](/de/docs/Web/API/SVGElement/error_event)
  - : Wird ausgelöst, wenn ein SVG-Element nicht richtig geladen wird oder ein Fehler während der Skriptausführung auftritt.
- [`load`](/de/docs/Web/API/SVGElement/load_event)
  - : Wird auf einem `SVGElement` ausgelöst, wenn es im Browser geladen wird.
- [`resize`](/de/docs/Web/API/SVGElement/resize_event)
  - : Wird ausgelöst, wenn ein SVG-Dokument in der Größe verändert wird.
- [`scroll`](/de/docs/Web/API/SVGElement/scroll_event)
  - : Wird ausgelöst, wenn eine SVG-Dokumentansicht entlang der X- und/oder Y-Achsen verschoben wird.
- [`unload`](/de/docs/Web/API/SVGElement/unload_event)
  - : Wird ausgelöst, wenn die DOM-Implementierung ein SVG-Dokument aus einem Fenster oder Frame entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) Attribut
- SVG {{SVGAttr("data-*")}} Attribut
- [Verwendung von benutzerdefinierten Datenattributen in HTML](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
