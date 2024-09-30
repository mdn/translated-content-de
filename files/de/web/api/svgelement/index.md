---
title: SVGElement
slug: Web/API/SVGElement
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("SVG")}}

Alle SVG-DOM-Schnittstellen, die direkt Elementen in der SVG-Sprache entsprechen, leiten sich von der `SVGElement`-Schnittstelle ab.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der [`Element`](/de/docs/Web/API/Element)-Schnittstelle._

- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Eine [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), die die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) {{ReadOnlyInline}}
  - : Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Objekt, das eine Liste von Schlüssel/Wert-Paaren von benannten Datenattributen bereitstellt, die den [benutzerdefinierten Datenattributen](/de/docs/Learn/HTML/Howto/Use_data_attributes) entsprechen, die dem Element angehängt sind. Diese können auch in SVG mit Attributen der Form {{SVGAttr("data-*")}} definiert werden, wobei `*` der Schlüsselname für das Paar ist. Dies funktioniert genauso wie die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft und das [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)-globale Attribut in HTML.
- [`SVGElement.className`](/de/docs/Web/API/SVGElement/className) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das den Wert des {{SVGAttr("class")}}-Attributs des angegebenen Elements widerspiegelt, oder der leere String, wenn `class` nicht vorhanden ist. Dieses Attribut ist veraltet und könnte in einer zukünftigen Version dieser Spezifikation entfernt werden. Autoren wird empfohlen, stattdessen [`Element.classList`](/de/docs/Web/API/Element/classList) zu verwenden.
- [`SVGElement.nonce`](/de/docs/Web/API/SVGElement/nonce)
  - : Gibt die einmal verwendete kryptografische Nummer zurück, die von der Content Security Policy verwendet wird, um zu bestimmen, ob ein gegebener Abruf durchgeführt werden darf.
- [`SVGElement.ownerSVGElement`](/de/docs/Web/API/SVGElement/ownerSVGElement) {{ReadOnlyInline}}
  - : Ein [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement), das auf das nächste übergeordnete {{SVGElement("svg")}}-Element verweist. `null`, wenn das angegebene Element das äußerste `<svg>`-Element ist.
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- [`SVGElement.tabIndex`](/de/docs/Web/API/SVGElement/tabIndex)
  - : Die Position des Elements in der Tabulatorreihenfolge.
- [`SVGElement.viewportElement`](/de/docs/Web/API/SVGElement/viewportElement) {{ReadOnlyInline}}
  - : Das `SVGElement`, das den aktuellen Viewport eingerichtet hat. Oft das nächste übergeordnete {{SVGElement("svg")}}-Element. `null`, wenn das gegebene Element das äußerste `<svg>`-Element ist.

## Instanz-Methoden

_Diese Schnittstelle hat keine Methoden, erbt jedoch Methoden von der [`Element`](/de/docs/Web/API/Element)-Schnittstelle._

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab oder weisen Sie einen Ereignis-Listener der entsprechenden `on...`-Handler-Eigenschaft zu.

- [`abort`](/de/docs/Web/API/SVGElement/abort_event)
  - : Wird ausgelöst, wenn das Laden der Seite gestoppt wird, bevor ein SVG-Element vollständig geladen wurde.
- [`error`](/de/docs/Web/API/SVGElement/error_event)
  - : Wird ausgelöst, wenn ein SVG-Element nicht korrekt geladen wird oder wenn ein Fehler während der Skriptausführung auftritt.
- [`load`](/de/docs/Web/API/SVGElement/load_event)
  - : Wird beim Laden eines `SVGElement` im Browser ausgelöst.
- [`resize`](/de/docs/Web/API/SVGElement/resize_event)
  - : Wird ausgelöst, wenn ein SVG-Dokument in der Größe verändert wird.
- [`scroll`](/de/docs/Web/API/SVGElement/scroll_event)
  - : Wird ausgelöst, wenn ein SVG-Dokument entlang der X- und/oder Y-Achsen verschoben wird.
- [`unload`](/de/docs/Web/API/SVGElement/unload_event)
  - : Wird ausgelöst, wenn die DOM-Implementierung ein SVG-Dokument aus einem Fenster oder Frame entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
- SVG-Attribut {{SVGAttr("data-*")}}
- [Verwendung benutzerdefinierter Datenattribute in HTML](/de/docs/Learn/HTML/Howto/Use_data_attributes)
