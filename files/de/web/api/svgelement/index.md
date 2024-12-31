---
title: SVGElement
slug: Web/API/SVGElement
l10n:
  sourceCommit: 3b135a0ae3b80cb24f6495fa8956c6631f5ce1ba
---

{{APIRef("SVG")}}

Alle SVG DOM-Schnittstellen, die direkt Elementen der SVG-Sprache entsprechen, leiten sich von der `SVGElement`-Schnittstelle ab.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der [`Element`](/de/docs/Web/API/Element)-Schnittstelle._

- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) {{ReadOnlyInline}}
  - : Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Objekt, das eine Liste von Schlüssel/Wert-Paaren von benannten Datenattributen bereitstellt, die den [benutzerdefinierten Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes) entsprechen, die dem Element zugeordnet sind. Diese können in SVG auch mithilfe von Attributen der Form {{SVGAttr("data-*")}} definiert werden, wobei `*` der Schlüsselname für das Paar ist. Dies funktioniert genauso wie die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft im HTML und das globale HTML-Attribut [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*).
- [`SVGElement.className`](/de/docs/Web/API/SVGElement/className) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der den Wert des {{SVGAttr("class")}}-Attributs des angegebenen Elements wiedergibt oder den leeren String, wenn `class` nicht vorhanden ist. Dieses Attribut ist veraltet und könnte in einer zukünftigen Version dieser Spezifikation entfernt werden. Autoren wird empfohlen, stattdessen [`Element.classList`](/de/docs/Web/API/Element/classList) zu verwenden.
- [`SVGElement.blur`](/de/docs/Web/API/SVGElement/blur)
  - : Entfernt den Tastaturfokus vom derzeit fokussierten Element.
- [`SVGElement.focus`](/de/docs/Web/API/SVGElement/focus)
  - : Setzt den Fokus der Tastatur auf das Element.
- [`SVGElement.nonce`](/de/docs/Web/API/SVGElement/nonce)
  - : Gibt die kryptografische Nummer zurück, die einmalig verwendet wird und die von der Content Security Policy verwendet wird, um zu bestimmen, ob ein bestimmter Abruf ausgeführt wird.
- [`SVGElement.ownerSVGElement`](/de/docs/Web/API/SVGElement/ownerSVGElement) {{ReadOnlyInline}}
  - : Ein [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement), das auf das nächstgelegene Vorfahren-{{SVGElement("svg")}}-Element verweist. `null`, wenn das angegebene Element das äußerste `<svg>`-Element ist.
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- [`SVGElement.tabIndex`](/de/docs/Web/API/SVGElement/tabIndex)
  - : Die Position des Elements in der Tab-Reihenfolge.
- [`SVGElement.viewportElement`](/de/docs/Web/API/SVGElement/viewportElement) {{ReadOnlyInline}}
  - : Das `SVGElement`, das den aktuellen Viewport erstellt hat. Oft das nächstgelegene Vorfahren-{{SVGElement("svg")}}-Element. `null`, wenn das angegebene Element das äußerste `<svg>`-Element ist.

## Instanz-Methoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt jedoch Methoden von der [`Element`](/de/docs/Web/API/Element)-Schnittstelle._

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der entsprechenden `on...`-Handler-Eigenschaft zuweisen.

- [`abort`](/de/docs/Web/API/SVGElement/abort_event)
  - : Ausgelöst, wenn das Laden der Seite gestoppt wird, bevor ein SVG-Element vollständig geladen werden durfte.
- [`error`](/de/docs/Web/API/SVGElement/error_event)
  - : Ausgelöst, wenn ein SVG-Element nicht richtig geladen wird oder ein Fehler bei der Skriptausführung auftritt.
- [`load`](/de/docs/Web/API/SVGElement/load_event)
  - : Wird auf einem `SVGElement` ausgelöst, wenn es im Browser geladen wird.
- [`resize`](/de/docs/Web/API/SVGElement/resize_event)
  - : Ausgelöst, wenn ein SVG-Dokument in der Größe verändert wird.
- [`scroll`](/de/docs/Web/API/SVGElement/scroll_event)
  - : Ausgelöst, wenn eine Ansicht eines SVG-Dokuments entlang der X- und/oder Y-Achsen verschoben wird.
- [`unload`](/de/docs/Web/API/SVGElement/unload_event)
  - : Ausgelöst, wenn die DOM-Implementierung ein SVG-Dokument aus einem Fenster oder Frame entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
- SVG-Attribut {{SVGAttr("data-*")}}
- [Verwendung benutzerdefinierter Datenattribute in HTML](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
