---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLAreaElement`** Interface bietet spezielle Eigenschaften und Methoden (über die des regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement) Objekts hinaus, die es auch durch Vererbung zur Verfügung hat) zur Manipulation des Layouts und der Darstellung von {{HtmlElement("area")}} Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAreaElement.alt`](/de/docs/Web/API/HTMLAreaElement/alt)
  - : Ein String, der das HTML-Attribut [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt) widerspiegelt und alternativen Text für das Element enthält.
- [`HTMLAreaElement.coords`](/de/docs/Web/API/HTMLAreaElement/coords)
  - : Ein String, der das HTML-Attribut [`coords`](/de/docs/Web/HTML/Reference/Elements/area#coords) widerspiegelt und Koordinaten zur Definition der Hot-Spot-Region enthält.
- [`HTMLAreaElement.download`](/de/docs/Web/API/HTMLAreaElement/download)
  - : Ein String, der anzeigt, dass die verlinkte Ressource heruntergeladen werden soll, anstatt im Browser angezeigt zu werden. Der Wert repräsentiert den vorgeschlagenen Namen der Datei. Wenn der Name kein gültiger Dateiname des zugrundeliegenden Betriebssystems ist, wird der Browser ihn entsprechend anpassen.
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)
  - : Ein String, der den Fragment-Identifier (einschließlich des führenden Hash-Zeichens (#)) enthält, falls vorhanden, in der referenzierten URL.
- [`HTMLAreaElement.host`](/de/docs/Web/API/HTMLAreaElement/host)
  - : Ein String, der den Hostnamen und Port (falls es nicht der Standardport ist) in der referenzierten URL enthält.
- [`HTMLAreaElement.hostname`](/de/docs/Web/API/HTMLAreaElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL enthält.
- [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href)
  - : Ein String, der das HTML-Attribut [`href`](/de/docs/Web/HTML/Reference/Elements/area#href) widerspiegelt und eine gültige URL einer verlinkten Ressource enthält.
- [`HTMLAreaElement.noHref`](/de/docs/Web/API/HTMLAreaElement/noHref) {{deprecated_inline}}
  - : Ein boolescher Wert, der angibt, ob das Gebiet inaktiv (`true`) oder aktiv (`false`) ist.
- [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAreaElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, das heißt ihr Schema, ihre Domain und ihren Port.
- [`HTMLAreaElement.password`](/de/docs/Web/API/HTMLAreaElement/password)
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- [`HTMLAreaElement.pathname`](/de/docs/Web/API/HTMLAreaElement/pathname)
  - : Ein String, der den Pfadnamen-Komponente, falls vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.ping`](/de/docs/Web/API/HTMLAreaElement/ping)
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}} Anfragen mit dem Körper PING an die URLs.
- [`HTMLAreaElement.port`](/de/docs/Web/API/HTMLAreaElement/port)
  - : Ein String, der die Port-Komponente, falls vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.protocol`](/de/docs/Web/API/HTMLAreaElement/protocol)
  - : Ein String, der die Protokoll-Komponente (einschließlich nachfolgender Doppelpunkte `':'`) der referenzierten URL enthält.
- [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy)
  - : Ein String, der das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/area#referrerpolicy) widerspiegelt und angibt, welcher Referrer beim Laden der verlinkten Ressource verwendet werden soll.
- [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel)
  - : Ein String, der das HTML-Attribut [`rel`](/de/docs/Web/HTML/Reference/Elements/area#rel) widerspiegelt und die Beziehungen des aktuellen Dokuments zur verlinkten Ressource angibt.
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das HTML-Attribut [`rel`](/de/docs/Web/HTML/Reference/Elements/area#rel) widerspiegelt und die Beziehungen des aktuellen Dokuments zur verlinkten Ressource als Liste von Tokens angibt.
- [`HTMLAreaElement.search`](/de/docs/Web/API/HTMLAreaElement/search)
  - : Ein String, der das Such-Element (einschließlich des führenden Fragezeichens `'?'`), falls vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.shape`](/de/docs/Web/API/HTMLAreaElement/shape)
  - : Ein String, der das HTML-Attribut [`shape`](/de/docs/Web/HTML/Reference/Elements/area#shape) widerspiegelt und die Form des Hot-Spots angibt, beschränkt auf bekannte Werte.
- [`HTMLAreaElement.target`](/de/docs/Web/API/HTMLAreaElement/target)
  - : Ein String, der das HTML-Attribut [`target`](/de/docs/Web/HTML/Reference/Elements/area#target) widerspiegelt und den Browsing-Kontext angibt, in dem die verlinkte Ressource geöffnet werden soll.
- [`HTMLAreaElement.username`](/de/docs/Web/API/HTMLAreaElement/username)
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Instanz-Methoden

_Erbt Methoden von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAreaElement.toString()`](/de/docs/Web/API/HTMLAreaElement/toString)
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{ HTMLElement("area") }}
