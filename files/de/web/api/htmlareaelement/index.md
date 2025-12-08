---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("HTML DOM")}}

Das **`HTMLAreaElement`**-Interface bietet spezielle Eigenschaften und Methoden (über die regelmäßigen Objektmethoden des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces hinaus, die es ebenfalls über Vererbung zur Verfügung hat) zur Manipulation des Layouts und der Präsentation von {{HtmlElement("area")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAreaElement.alt`](/de/docs/Web/API/HTMLAreaElement/alt)
  - : Ein String, der das HTML-Attribut [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt) widerspiegelt und alternativen Text für das Element enthält.
- [`HTMLAreaElement.coords`](/de/docs/Web/API/HTMLAreaElement/coords)
  - : Ein String, der das HTML-Attribut [`coords`](/de/docs/Web/HTML/Reference/Elements/area#coords) widerspiegelt und die Koordinaten zur Definition des Hotspot-Bereichs enthält.
- [`HTMLAreaElement.download`](/de/docs/Web/API/HTMLAreaElement/download)
  - : Ein String, der angibt, dass die verlinkte Ressource heruntergeladen und nicht im Browser angezeigt werden soll. Der Wert stellt den vorgeschlagenen Namen der Datei dar. Wenn der Name kein gültiger Dateiname des zugrundeliegenden Betriebssystems ist, wird der Browser ihn entsprechend anpassen.
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)
  - : Ein String, der den Fragmentbezeichner (einschließlich des führenden Hash-Zeichens `#`) enthält, falls vorhanden, in der referenzierten URL.
- [`HTMLAreaElement.host`](/de/docs/Web/API/HTMLAreaElement/host)
  - : Ein String, der den Hostnamen und den Port (falls es sich nicht um den Standardport handelt) in der referenzierten URL enthält.
- [`HTMLAreaElement.hostname`](/de/docs/Web/API/HTMLAreaElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL enthält.
- [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href)
  - : Ein String, der das HTML-Attribut [`href`](/de/docs/Web/HTML/Reference/Elements/area#href) widerspiegelt und eine gültige URL einer verlinkten Ressource enthält.
- [`HTMLAreaElement.interestForElement`](/de/docs/Web/API/HTMLAreaElement/interestForElement) {{experimental_inline}} {{non-standard_inline}}
  - : Ruft das Zielelement eines Interessenaufrufers ab oder legt es fest, in Fällen, in denen das zugehörige {{htmlelement("area")}}-Element als [Interessenaufrufer](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) angegeben ist.
- [`HTMLAreaElement.noHref`](/de/docs/Web/API/HTMLAreaElement/noHref) {{deprecated_inline}}
  - : Ein boolesches Flag, das anzeigt, ob der Bereich inaktiv (`true`) oder aktiv (`false`) ist.
- [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAreaElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, d.h. ihr Schema, ihre Domain und ihren Port.
- [`HTMLAreaElement.password`](/de/docs/Web/API/HTMLAreaElement/password)
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- [`HTMLAreaElement.pathname`](/de/docs/Web/API/HTMLAreaElement/pathname)
  - : Ein String, der den Pfadnamen, falls vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.ping`](/de/docs/Web/API/HTMLAreaElement/ping)
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link verfolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Text PING an die URLs.
- [`HTMLAreaElement.port`](/de/docs/Web/API/HTMLAreaElement/port)
  - : Ein String, der den Portanteil, falls vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.protocol`](/de/docs/Web/API/HTMLAreaElement/protocol)
  - : Ein String, der den Protokollanteil (einschließlich dem nachfolgenden Doppelpunkt `':'`) der referenzierten URL enthält.
- [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy)
  - : Ein String, der das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/area#referrerpolicy) widerspiegelt und angibt, welcher Referrer verwendet werden soll, wenn die verlinkte Ressource abgerufen wird.
- [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel)
  - : Ein String, der das HTML-Attribut [`rel`](/de/docs/Web/HTML/Reference/Elements/area#rel) widerspiegelt und die Beziehung des aktuellen Dokuments zur verlinkten Ressource angibt.
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das HTML-Attribut [`rel`](/de/docs/Web/HTML/Reference/Elements/area#rel) widerspiegelt und die Beziehung des aktuellen Dokuments zur verlinkten Ressource als Liste von Tokens angibt.
- [`HTMLAreaElement.search`](/de/docs/Web/API/HTMLAreaElement/search)
  - : Ein String, der das Suchelement (einschließlich dem führenden Fragezeichen `'?'`), falls vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.shape`](/de/docs/Web/API/HTMLAreaElement/shape)
  - : Ein String, der das HTML-Attribut [`shape`](/de/docs/Web/HTML/Reference/Elements/area#shape) widerspiegelt und die Form des Hotspots angibt, beschränkt auf bekannte Werte.
- [`HTMLAreaElement.target`](/de/docs/Web/API/HTMLAreaElement/target)
  - : Ein String, der das HTML-Attribut [`target`](/de/docs/Web/HTML/Reference/Elements/area#target) widerspiegelt und den Browsing-Kontext angibt, in dem die verlinkte Ressource geöffnet werden soll.
- [`HTMLAreaElement.username`](/de/docs/Web/API/HTMLAreaElement/username)
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Instanz-Methoden

_Erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAreaElement.toString()`](/de/docs/Web/API/HTMLAreaElement/toString)
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{ HTMLElement("area") }}
