---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
l10n:
  sourceCommit: 8b2431b571fc8f3ff08ae59973ec033441951009
---

{{APIRef("HTML DOM")}}

Die **`HTMLAreaElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (über die regulären Objektfunktionen der von ihr geerbten {{domxref("HTMLElement")}}-Schnittstelle hinaus) zur Manipulation des Layouts und der Darstellung von {{HtmlElement("area")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Eltern-{{domxref("HTMLElement")}}._

- {{domxref("HTMLAreaElement.alt")}}
  - : Ein String, der das HTML-Attribut [`alt`](/de/docs/Web/HTML/Element/area#alt) widerspiegelt und alternativen Text für das Element enthält.
- {{domxref("HTMLAreaElement.coords")}}
  - : Ein String, der das HTML-Attribut [`coords`](/de/docs/Web/HTML/Element/area#coords) widerspiegelt und Koordinaten enthält, um den Hotspot-Bereich zu definieren.
- {{domxref("HTMLAreaElement.download")}}
  - : Ein String, der angibt, dass die verknüpfte Ressource heruntergeladen und nicht im Browser angezeigt werden soll. Der Wert stellt den vorgeschlagenen Namen der Datei dar. Wenn der Name kein gültiger Dateiname des zugrunde liegenden Betriebssystems ist, passt der Browser ihn an.
- {{domxref("HTMLAreaElement.hash")}}
  - : Ein String, der den Fragmentbezeichner (einschließlich des führenden Hash-Zeichens '#') enthält, sofern vorhanden, in der referenzierten URL.
- {{domxref("HTMLAreaElement.host")}}
  - : Ein String, der den Hostnamen und den Port (falls es sich nicht um den Standardport handelt) in der referenzierten URL enthält.
- {{domxref("HTMLAreaElement.hostname")}}
  - : Ein String, der den Hostnamen in der referenzierten URL enthält.
- {{domxref("HTMLAreaElement.href")}}
  - : Ein String, der das HTML-Attribut [`href`](/de/docs/Web/HTML/Element/area#href) widerspiegelt und eine gültige URL einer verknüpften Ressource enthält.
- {{domxref("HTMLAreaElement.noHref")}} {{deprecated_inline}}
  - : Ein boolesches Flag, das angibt, ob der Bereich inaktiv (`true`) oder aktiv (`false`) ist.
- {{domxref("HTMLAreaElement.origin")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, das heißt ihr Schema, ihre Domain und ihren Port.
- {{domxref("HTMLAreaElement.password")}}
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- {{domxref("HTMLAreaElement.pathname")}}
  - : Ein String, der den Pfadkomponenten enthält, sofern vorhanden, der referenzierten URL.
- {{domxref("HTMLAreaElement.ping")}}
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link verfolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Body PING an die URLs.
- {{domxref("HTMLAreaElement.port")}}
  - : Ein String, der den Portanteil enthält, sofern vorhanden, der referenzierten URL.
- {{domxref("HTMLAreaElement.protocol")}}
  - : Ein String, der den Protokollanteil (einschließlich folgendem Doppelpunkt `':'`) der referenzierten URL enthält.
- {{domxref("HTMLAreaElement.referrerPolicy")}}
  - : Ein String, der das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/area#referrerpolicy) widerspiegelt, das angibt, welcher Referrer beim Abrufen der verknüpften Ressource verwendet werden soll.
- {{domxref("HTMLAreaElement.rel")}}
  - : Ein String, der das HTML-Attribut [`rel`](/de/docs/Web/HTML/Element/area#rel) widerspiegelt, das die Beziehungen des aktuellen Dokuments zur verknüpften Ressource angibt.
- {{domxref("HTMLAreaElement.relList")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("DOMTokenList")}} zurück, die das HTML-Attribut [`rel`](/de/docs/Web/HTML/Element/area#rel) widerspiegelt und die Beziehungen des aktuellen Dokuments zur verknüpften Ressource als Liste von Tokens angibt.
- {{domxref("HTMLAreaElement.search")}}
  - : Ein String, der das Such-Element (einschließlich führendem Fragezeichen `'?'`) enthält, sofern vorhanden, der referenzierten URL.
- {{domxref("HTMLAreaElement.shape")}}
  - : Ein String, der das HTML-Attribut [`shape`](/de/docs/Web/HTML/Element/area#shape) widerspiegelt, das die Form des Hotspots angibt und auf bekannte Werte beschränkt ist.
- {{domxref("HTMLAreaElement.target")}}
  - : Ein String, der das HTML-Attribut [`target`](/de/docs/Web/HTML/Element/area#target) widerspiegelt und den Browsing-Kontext angibt, in dem die verknüpfte Ressource geöffnet werden soll.
- {{domxref("HTMLAreaElement.username")}}
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Instanz-Methoden

_Erbt Methoden von ihrem Eltern-{{domxref("HTMLElement")}}._

- {{domxref("HTMLAreaElement.toString()")}}
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für {{domxref("HTMLAreaElement.href")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("area") }}
