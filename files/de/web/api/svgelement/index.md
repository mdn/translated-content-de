---
title: SVGElement
slug: Web/API/SVGElement
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("SVG")}}

Alle SVG DOM-Schnittstellen, die direkt mit Elementen in der SVG-Sprache korrespondieren, leiten sich von der `SVGElement`-Schnittstelle ab.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der [`Element`](/de/docs/Web/API/Element)-Schnittstelle._

- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Eine [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), die die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements repräsentiert.
- [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) {{ReadOnlyInline}}
  - : Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Objekt, das eine Liste von Schlüssel/​Werte-Paaren benannter Datenattribute bietet, die den [benutzerdefinierten Datenattributen](/de/docs/Learn/HTML/Howto/Use_data_attributes) entsprechen, die dem Element zugeordnet sind. Diese können auch in SVG durch Attribute der Form {{SVGAttr("data-*")}} definiert werden, wobei `*` der Schlüsselname für das Paar ist. Dies funktioniert genauso wie die HTML-`HTMLElement.dataset`-Eigenschaft und HTMLs [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)-globales Attribut.
- [`SVGElement.className`](/de/docs/Web/API/SVGElement/className) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das den Wert des {{SVGAttr("class")}}-Attributs am angegebenen Element reflektiert oder den leeren String, wenn `class` nicht vorhanden ist. Dieses Attribut ist veraltet und kann in einer zukünftigen Version dieser Spezifikation entfernt werden. Autoren wird empfohlen, stattdessen [`Element.classList`](/de/docs/Web/API/Element/classList) zu verwenden.
- [`SVGElement.nonce`](/de/docs/Web/API/SVGElement/nonce)
  - : Gibt die einmalige Kryptozahl zurück, die durch die Content Security Policy verwendet wird, um zu bestimmen, ob ein bestimmter Abruf fortgesetzt werden darf.
- [`SVGElement.ownerSVGElement`](/de/docs/Web/API/SVGElement/ownerSVGElement) {{ReadOnlyInline}}
  - : Ein [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement), das auf das nächstgelegene übergeordnete {{SVGElement("svg")}}-Element verweist. `null`, wenn das angegebene Element das äußerste `<svg>`-Element ist.
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements repräsentiert.
- [`SVGElement.tabIndex`](/de/docs/Web/API/SVGElement/tabIndex)
  - : Die Position des Elements in der Tabulatorreihenfolge.
- [`SVGElement.viewportElement`](/de/docs/Web/API/SVGElement/viewportElement) {{ReadOnlyInline}}
  - : Das `SVGElement`, das den aktuellen Viewport etabliert hat. Oft das nächstgelegene übergeordnete {{SVGElement("svg")}}-Element. `null`, wenn das angegebene Element das äußerste `<svg>`-Element ist.

## Instanz-Methoden

_Diese Schnittstelle hat keine Methoden, erbt jedoch Methoden von [`Element`](/de/docs/Web/API/Element)._

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignislistener der entsprechenden `on...`-Handler-Eigenschaft zuweisen.

- [`abort`](/de/docs/Web/API/SVGElement/abort_event)
  - : Wird ausgelöst, wenn das Laden der Seite gestoppt wird, bevor ein SVG-Element vollständig geladen werden durfte.
- [`error`](/de/docs/Web/API/SVGElement/error_event)
  - : Wird ausgelöst, wenn ein SVG-Element nicht ordnungsgemäß geladen wird oder wenn ein Fehler während der Skriptausführung auftritt.
- [`load`](/de/docs/Web/API/SVGElement/load_event)
  - : Wird ausgelöst, wenn ein `SVGElement` im Browser geladen wird.
- [`resize`](/de/docs/Web/API/SVGElement/resize_event)
  - : Wird ausgelöst, wenn ein SVG-Dokument in der Größe verändert wird.
- [`scroll`](/de/docs/Web/API/SVGElement/scroll_event)
  - : Wird ausgelöst, wenn eine SVG-Dokumentansicht entlang der X- und/oder Y-Achsen verschoben wird.
- [`unload`](/de/docs/Web/API/SVGElement/unload_event)
  - : Wird ausgelöst, wenn die DOM-Implementierung ein SVG-Dokument aus einem Fenster oder einem Frame entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-`data-*`-Attribut
- SVG {{SVGAttr("data-*")}} Attribut
- [Verwendung benutzerdefinierter Datenattribute in HTML](/de/docs/Learn/HTML/Howto/Use_data_attributes)
