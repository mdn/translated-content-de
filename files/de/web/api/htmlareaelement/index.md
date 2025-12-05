---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{APIRef("HTML DOM")}}

Das **`HTMLAreaElement`** Interface bietet spezielle Eigenschaften und Methoden (über die der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle, die es auch durch Vererbung zur Verfügung hat, hinaus) für die Manipulation des Layouts und der Darstellung von {{HtmlElement("area")}} Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAreaElement.alt`](/de/docs/Web/API/HTMLAreaElement/alt)
  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt) HTML-Attribut widerspiegelt und alternativen Text für das Element enthält.
- [`HTMLAreaElement.coords`](/de/docs/Web/API/HTMLAreaElement/coords)
  - : Ein String, der das [`coords`](/de/docs/Web/HTML/Reference/Elements/area#coords) HTML-Attribut widerspiegelt und Koordinaten enthält, um den Hotspot-Bereich zu definieren.
- [`HTMLAreaElement.download`](/de/docs/Web/API/HTMLAreaElement/download)
  - : Ein String, der angibt, dass die verknüpfte Ressource heruntergeladen und nicht im Browser angezeigt werden soll. Der Wert stellt den vorgeschlagenen Namen der Datei dar. Falls der Name kein gültiger Dateiname des zugrunde liegenden Betriebssystems ist, wird der Browser ihn entsprechend anpassen.
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)
  - : Ein String, der die Fragmentkennung (einschließlich des vorangestellten Hash-Zeichens (#)) enthält, falls vorhanden, in der referenzierten URL.
- [`HTMLAreaElement.host`](/de/docs/Web/API/HTMLAreaElement/host)
  - : Ein String, der den Hostnamen und den Port (falls es nicht der Standardport ist) in der referenzierten URL enthält.
- [`HTMLAreaElement.hostname`](/de/docs/Web/API/HTMLAreaElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL enthält.
- [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href)
  - : Ein String, der das [`href`](/de/docs/Web/HTML/Reference/Elements/area#href) HTML-Attribut widerspiegelt und eine gültige URL einer verknüpften Ressource enthält.
- [`HTMLAreaElement.interestForElement`](/de/docs/Web/API/HTMLAreaElement/interestForElement) {{experimental_inline}}
  - : Ruft das Zielelement eines Interesses-Invokers ab oder legt es fest, in Fällen, in denen das zugehörige {{htmlelement("area")}} Element als [Interesse-Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) angegeben ist.
- [`HTMLAreaElement.noHref`](/de/docs/Web/API/HTMLAreaElement/noHref) {{deprecated_inline}}
  - : Ein boolesches Flag, das angibt, ob der Bereich inaktiv (`true`) oder aktiv (`false`) ist.
- [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAreaElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, das heißt ihr Schema, ihre Domain und ihren Port.
- [`HTMLAreaElement.password`](/de/docs/Web/API/HTMLAreaElement/password)
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- [`HTMLAreaElement.pathname`](/de/docs/Web/API/HTMLAreaElement/pathname)
  - : Ein String, der den Pfadnamen-Komponente, sofern vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.ping`](/de/docs/Web/API/HTMLAreaElement/ping)
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link verfolgt wird, sendet der Browser {{HTTPMethod("POST")}} Anfragen mit dem Body PING an die URLs.
- [`HTMLAreaElement.port`](/de/docs/Web/API/HTMLAreaElement/port)
  - : Ein String, der den Port-Komponente, sofern vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.protocol`](/de/docs/Web/API/HTMLAreaElement/protocol)
  - : Ein String, der die Protokollkomponente (einschließlich des nachgestellten Doppelpunkts `':'`) der referenzierten URL enthält.
- [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/area#referrerpolicy) HTML-Attribut widerspiegelt und angibt, welchen Referrer zu verwenden ist, wenn die verknüpfte Ressource abgerufen wird.
- [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel)
  - : Ein String, der das [`rel`](/de/docs/Web/HTML/Reference/Elements/area#rel) HTML-Attribut widerspiegelt und die Beziehungen des aktuellen Dokuments zur verknüpften Ressource angibt.
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`rel`](/de/docs/Web/HTML/Reference/Elements/area#rel) HTML-Attribut widerspiegelt und die Beziehungen des aktuellen Dokuments zur verknüpften Ressource als Liste von Tokens angibt.
- [`HTMLAreaElement.search`](/de/docs/Web/API/HTMLAreaElement/search)
  - : Ein String, der das Suchtwelf (einschließlich vorangestelltem Fragezeichen `'?'`) enthält, sofern vorhanden, der referenzierten URL.
- [`HTMLAreaElement.shape`](/de/docs/Web/API/HTMLAreaElement/shape)
  - : Ein String, der das [`shape`](/de/docs/Web/HTML/Reference/Elements/area#shape) HTML-Attribut widerspiegelt und die Form des Hotspots angibt, begrenzt auf bekannte Werte.
- [`HTMLAreaElement.target`](/de/docs/Web/API/HTMLAreaElement/target)
  - : Ein String, der das [`target`](/de/docs/Web/HTML/Reference/Elements/area#target) HTML-Attribut widerspiegelt und den Browsing-Kontext angibt, in dem die verknüpfte Ressource geöffnet werden soll.
- [`HTMLAreaElement.username`](/de/docs/Web/API/HTMLAreaElement/username)
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAreaElement.toString()`](/de/docs/Web/API/HTMLAreaElement/toString)
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("area") }}
