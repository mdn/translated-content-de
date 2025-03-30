---
title: SVGElement
slug: Web/API/SVGElement
l10n:
  sourceCommit: ec4fb5705b4369d50175e5026d7ce335cf92e659
---

{{APIRef("SVG")}}

Alle SVG-DOM-Schnittstellen, die direkt Elementen der SVG-Sprache entsprechen, leiten sich von der `SVGElement`-Schnittstelle ab.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von der [`Element`](/de/docs/Web/API/Element)-Schnittstelle._

- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements repräsentiert.
- [`SVGElement.autofocus`](/de/docs/Web/API/SVGElement/autofocus)
  - : Gibt an, ob die Steuerung fokussiert werden soll, wenn die Seite geladen wird oder wenn ein {{htmlelement("dialog")}} oder [Popover](/de/docs/Web/HTML/Global_attributes/popover) angezeigt wird.
- [`SVGElement.className`](/de/docs/Web/API/SVGElement/className) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das den Wert des {{SVGAttr("class")}}-Attributs des gegebenen Elements widerspiegelt oder den leeren String, wenn `class` nicht vorhanden ist. Dieses Attribut ist veraltet und könnte in einer zukünftigen Version dieser Spezifikation entfernt werden. Autoren wird empfohlen, stattdessen [`Element.classList`](/de/docs/Web/API/Element/classList) zu verwenden.
- [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) {{ReadOnlyInline}}
  - : Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Objekt, das eine Liste von Schlüssel/Wert-Paaren von benannten Datenattributen bereitstellt, die mit [benutzerdefinierten Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes) verbunden sind, die dem Element zugeordnet sind. Diese können auch in SVG unter Verwendung von Attributen in der Form {{SVGAttr("data-*")}} definiert werden, wobei `*` der Schlüsselname für das Paar ist. Dies funktioniert genauso wie die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft von HTML und das globale HTML-Attribut [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*).
- [`SVGElement.nonce`](/de/docs/Web/API/SVGElement/nonce)
  - : Gibt die kryptographische Nummer zurück, die Content Security Policy verwendet, um zu bestimmen, ob ein gegebener Abruf durchgeführt werden darf.
- [`SVGElement.ownerSVGElement`](/de/docs/Web/API/SVGElement/ownerSVGElement) {{ReadOnlyInline}}
  - : Ein [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement), das auf das nächstgelegene übergeordnete {{SVGElement("svg")}}-Element verweist. `null`, wenn das gegebene Element das äußerste `<svg>`-Element ist.
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements repräsentiert.
- [`SVGElement.tabIndex`](/de/docs/Web/API/SVGElement/tabIndex)
  - : Die Position des Elements in der Tab-Reihenfolge.
- [`SVGElement.viewportElement`](/de/docs/Web/API/SVGElement/viewportElement) {{ReadOnlyInline}}
  - : Das `SVGElement`, das den aktuellen Ansichtsbereich festlegt. Häufig das nächstgelegene übergeordnete {{SVGElement("svg")}}-Element. `null`, wenn das gegebene Element das äußerste `<svg>`-Element ist.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von [`Element`](/de/docs/Web/API/Element)._

- [`SVGElement.blur()`](/de/docs/Web/API/SVGElement/blur)
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus)
  - : Setzt den Tastaturfokus auf das Element.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur entsprechenden `on...`-Handler-Eigenschaft.

- [`abort`](/de/docs/Web/API/SVGElement/abort_event)
  - : Wird ausgelöst, wenn das Laden der Seite gestoppt wird, bevor ein SVG-Element vollständig geladen wurde.
- [`error`](/de/docs/Web/API/SVGElement/error_event)
  - : Wird ausgelöst, wenn ein SVG-Element nicht ordnungsgemäß geladen wird oder wenn ein Fehler während der Skriptausführung auftritt.
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

- HTML-Attribut [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
- SVG-Attribut {{SVGAttr("data-*")}}
- [Verwendung benutzerdefinierter Datenattribute in HTML](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
