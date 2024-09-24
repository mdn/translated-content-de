---
title: SVGElement
slug: Web/API/SVGElement
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("SVG")}}

Alle SVG-DOM-Schnittstellen, die direkt den Elementen der SVG-Sprache entsprechen, leiten sich von der `SVGElement`-Schnittstelle ab.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der {{DOMxRef("Element")}}-Schnittstelle._

- {{DOMxRef("SVGElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("StylePropertyMap")}}, das die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- {{DOMxRef("SVGElement.dataset")}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("DOMStringMap")}}-Objekt, das eine Liste von Schlüssel/Wert-Paaren benannter Datenattribute bereitstellt, die den [benutzerdefinierten Datenattributen](/de/docs/Learn/HTML/Howto/Use_data_attributes) entsprechen, die dem Element angehängt sind. Diese können auch in SVG mithilfe von Attributen der Form {{SVGAttr("data-*")}} definiert werden, wobei `*` der Schlüsselname für das Paar ist. Dies funktioniert genau wie die {{DOMxRef("HTMLElement.dataset")}}-Eigenschaft von HTML und das [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)-Globale Attribut von HTML.
- {{DOMxRef("SVGElement.className")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("SVGAnimatedString")}}, das den Wert des {{SVGAttr("class")}}-Attributs auf dem gegebenen Element widerspiegelt oder den leeren String, wenn `class` nicht vorhanden ist. Dieses Attribut ist veraltet und könnte in einer zukünftigen Version dieser Spezifikation entfernt werden. Autoren wird geraten, stattdessen {{DOMxRef("Element.classList")}} zu verwenden.
- {{DOMxRef("SVGElement.nonce")}}
  - : Gibt die kryptographische einmalige Nummer zurück, die von der Content-Security-Policy verwendet wird, um zu bestimmen, ob ein gegebener Abruf durchgeführt werden darf.
- {{DOMxRef("SVGElement.ownerSVGElement")}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("SVGSVGElement")}}, das sich auf das nächstgelegene Vorfahren-{{SVGElement("svg")}}-Element bezieht. `null`, wenn das angegebene Element das äußere `<svg>`-Element ist.
- {{DOMxRef("SVGElement.style")}}
  - : Ein {{DOMxRef("CSSStyleDeclaration")}}, das die Deklarationen des {{SVGAttr("style")}}-Attributs des Elements darstellt.
- {{DOMxRef("SVGElement.tabIndex")}}
  - : Die Position des Elements in der Tab-Reihenfolge.
- {{DOMxRef("SVGElement.viewportElement")}} {{ReadOnlyInline}}
  - : Das `SVGElement`, das den aktuellen Darstellungsbereich festgelegt hat. Oft das nächstgelegene Vorfahren-{{SVGElement("svg")}}-Element. `null`, wenn das angegebene Element das äußere `<svg>`-Element ist.

## Instanz-Methoden

_Diese Schnittstelle hat keine Methoden, erbt aber Methoden von {{DOMxRef("Element")}}._

## Ereignisse

Hören Sie auf diese Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener an die entsprechende `on...`-Handler-Eigenschaft zuweisen.

- [`abort`](/de/docs/Web/API/SVGElement/abort_event)
  - : Wird ausgelöst, wenn das Laden der Seite gestoppt wird, bevor ein SVG-Element vollständig geladen ist.
- [`error`](/de/docs/Web/API/SVGElement/error_event)
  - : Wird ausgelöst, wenn ein SVG-Element nicht ordnungsgemäß geladen wird oder wenn während der Skriptausführung ein Fehler auftritt.
- [`load`](/de/docs/Web/API/SVGElement/load_event)
  - : Wird auf einem `SVGElement` ausgelöst, wenn es im Browser geladen wird.
- [`resize`](/de/docs/Web/API/SVGElement/resize_event)
  - : Wird ausgelöst, wenn ein SVG-Dokument in der Größe verändert wird.
- [`scroll`](/de/docs/Web/API/SVGElement/scroll_event)
  - : Wird ausgelöst, wenn die Ansicht eines SVG-Dokuments entlang der X- und/oder Y-Achsen verschoben wird.
- [`unload`](/de/docs/Web/API/SVGElement/unload_event)
  - : Wird ausgelöst, wenn die DOM-Implementierung ein SVG-Dokument aus einem Fenster oder Rahmen entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
- SVG-Attribut {{SVGAttr("data-*")}}
- [Verwendung benutzerdefinierter Datenattribute in HTML](/de/docs/Learn/HTML/Howto/Use_data_attributes)
