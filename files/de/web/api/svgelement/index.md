---
title: SVGElement
slug: Web/API/SVGElement
l10n:
  sourceCommit: 1cab31db3620a464407d48c964fab850213e3d30
---

{{APIRef("SVG")}}

Alle SVG-DOM-Schnittstellen, die direkt den Elementen in der SVG-Sprache entsprechen, leiten sich von der `SVGElement`-Schnittstelle ab.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der [`Element`](/de/docs/Web/API/Element)-Schnittstelle._

- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- [`SVGElement.autofocus`](/de/docs/Web/API/SVGElement/autofocus)
  - : Gibt an, ob das Steuerelement fokussiert werden soll, wenn die Seite geladen wird oder wenn ein {{htmlelement("dialog")}} oder ein [Popover](/de/docs/Web/HTML/Global_attributes/popover) angezeigt wird.
- [`SVGElement.blur`](/de/docs/Web/API/SVGElement/blur)
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- [`SVGElement.className`](/de/docs/Web/API/SVGElement/className) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das den Wert des {{SVGAttr("class")}}-Attributs des angegebenen Elements widerspiegelt oder einen leeren String, wenn `class` nicht vorhanden ist. Dieses Attribut ist veraltet und könnte in einer zukünftigen Version dieser Spezifikation entfernt werden. Es wird empfohlen, stattdessen [`Element.classList`](/de/docs/Web/API/Element/classList) zu verwenden.
- [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) {{ReadOnlyInline}}
  - : Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Objekt, das eine Liste aus Schlüssel/Wert-Paaren von benannten Datenattributen bietet, die den [benutzerdefinierten Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes) entsprechen, die dem Element angehängt sind. Diese können auch in SVG mit Attributen der Form {{SVGAttr("data-*")}} definiert werden, wobei `*` der Schlüsselname für das Paar ist. Dies funktioniert genauso wie die `HTMLElement.dataset`-Eigenschaft und das `data-*`-globale Attribut in HTML.
- [`SVGElement.focus`](/de/docs/Web/API/SVGElement/focus)
  - : Setzt das Element in den aktuellen Tastaturfokus.
- [`SVGElement.nonce`](/de/docs/Web/API/SVGElement/nonce)
  - : Gibt die einmalig verwendete kryptographische Nummer zurück, die von der Content Security Policy verwendet wird, um zu bestimmen, ob ein bestimmter Abruf ausgeführt werden darf.
- [`SVGElement.ownerSVGElement`](/de/docs/Web/API/SVGElement/ownerSVGElement) {{ReadOnlyInline}}
  - : Ein [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement), das auf das nächstgelegene Vorfahren-{{SVGElement("svg")}}-Element verweist. `null`, wenn das angegebene Element das äußerste `<svg>`-Element ist.
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
  - : Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), das die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- [`SVGElement.tabIndex`](/de/docs/Web/API/SVGElement/tabIndex)
  - : Die Position des Elements in der Tabulatorreihenfolge.
- [`SVGElement.viewportElement`](/de/docs/Web/API/SVGElement/viewportElement) {{ReadOnlyInline}}
  - : Das `SVGElement`, das den aktuellen Viewport erstellt hat. Oft das nächstgelegene Vorfahren-{{SVGElement("svg")}}-Element. `null`, wenn das angegebene Element das äußerste `<svg>`-Element ist.

## Instanz-Methoden

_Diese Schnittstelle hat keine Methoden, erbt jedoch Methoden von [`Element`](/de/docs/Web/API/Element)._

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) gehört werden oder durch Zuweisen eines Ereignis-Listeners zur entsprechenden `on...`-Handler-Eigenschaft.

- [`abort`](/de/docs/Web/API/SVGElement/abort_event)
  - : Tritt auf, wenn das Laden der Seite gestoppt wird, bevor ein SVG-Element vollständig geladen werden kann.
- [`error`](/de/docs/Web/API/SVGElement/error_event)
  - : Tritt auf, wenn ein SVG-Element nicht ordnungsgemäß geladen wird oder wenn ein Fehler während der Skriptausführung auftritt.
- [`load`](/de/docs/Web/API/SVGElement/load_event)
  - : Tritt auf einem `SVGElement` auf, wenn es im Browser geladen wird.
- [`resize`](/de/docs/Web/API/SVGElement/resize_event)
  - : Tritt auf, wenn ein SVG-Dokument in der Größe verändert wird.
- [`scroll`](/de/docs/Web/API/SVGElement/scroll_event)
  - : Tritt auf, wenn eine SVG-Dokumentansicht entlang der X- und/oder Y-Achse verschoben wird.
- [`unload`](/de/docs/Web/API/SVGElement/unload_event)
  - : Tritt auf, wenn die DOM-Implementierung ein SVG-Dokument aus einem Fenster oder Frame entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
- SVG-Attribut {{SVGAttr("data-*")}}
- [Verwendung von benutzerdefinierten Datenattributen in HTML](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
