---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
l10n:
  sourceCommit: 8b2431b571fc8f3ff08ae59973ec033441951009
---

{{APIRef("HTML DOM")}}

Die **`HTMLAreaElement`** Schnittstelle bietet spezielle Eigenschaften und Methoden (über die der reguläre [`HTMLElement`](/de/docs/Web/API/HTMLElement) Objektschnittstelle hinaus, die ihm auch durch Vererbung zur Verfügung steht) zur Manipulation des Layouts und der Darstellung von {{HtmlElement("area")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAreaElement.alt`](/de/docs/Web/API/HTMLAreaElement/alt)
  - : Ein String, der das HTML-Attribut [`alt`](/de/docs/Web/HTML/Element/area#alt) widerspiegelt und alternativen Text für das Element enthält.
- [`HTMLAreaElement.coords`](/de/docs/Web/API/HTMLAreaElement/coords)
  - : Ein String, der das HTML-Attribut [`coords`](/de/docs/Web/HTML/Element/area#coords) widerspiegelt und Koordinaten zur Definition des Hot-Spot-Bereichs enthält.
- [`HTMLAreaElement.download`](/de/docs/Web/API/HTMLAreaElement/download)
  - : Ein String, der anzeigt, dass die verknüpfte Ressource heruntergeladen werden soll, anstatt im Browser angezeigt zu werden. Der Wert stellt den vorgeschlagenen Namen der Datei dar. Wenn der Name kein gültiger Dateiname des zugrunde liegenden Betriebssystems ist, wird der Browser ihn anpassen.
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)
  - : Ein String, der den Fragment-Identifier (einschließlich des führenden Hash-Zeichens `#`) enthält, falls vorhanden, in der referenzierten URL.
- [`HTMLAreaElement.host`](/de/docs/Web/API/HTMLAreaElement/host)
  - : Ein String, der den Hostnamen und den Port (falls es sich nicht um den Standardport handelt) in der referenzierten URL enthält.
- [`HTMLAreaElement.hostname`](/de/docs/Web/API/HTMLAreaElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL enthält.
- [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href)
  - : Ein String, der das HTML-Attribut [`href`](/de/docs/Web/HTML/Element/area#href) widerspiegelt und eine gültige URL einer verknüpften Ressource enthält.
- [`HTMLAreaElement.noHref`](/de/docs/Web/API/HTMLAreaElement/noHref) {{deprecated_inline}}
  - : Ein boolesches Flag, das anzeigt, ob der Bereich inaktiv (`true`) oder aktiv (`false`) ist.
- [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAreaElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, das heißt sein Schema, seine Domäne und seinen Port.
- [`HTMLAreaElement.password`](/de/docs/Web/API/HTMLAreaElement/password)
  - : Ein String, der das Passwort enthält, das vor dem Domain-Namen angegeben ist.
- [`HTMLAreaElement.pathname`](/de/docs/Web/API/HTMLAreaElement/pathname)
  - : Ein String, der den Pfadnamen-Teil, falls vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.ping`](/de/docs/Web/API/HTMLAreaElement/ping)
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper PING an die URLs.
- [`HTMLAreaElement.port`](/de/docs/Web/API/HTMLAreaElement/port)
  - : Ein String, der den Port-Teil, falls vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.protocol`](/de/docs/Web/API/HTMLAreaElement/protocol)
  - : Ein String, der den Protokollteil (einschließlich des abschließenden Doppelpunkts `':'`) der referenzierten URL enthält.
- [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy)
  - : Ein String, der das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/area#referrerpolicy) widerspiegelt und angibt, welchen Referrer beim Abrufen der verknüpften Ressource verwendet werden soll.
- [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel)
  - : Ein String, der das HTML-Attribut [`rel`](/de/docs/Web/HTML/Element/area#rel) widerspiegelt und die Beziehungen des aktuellen Dokuments zur verknüpften Ressource angibt.
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das HTML-Attribut [`rel`](/de/docs/Web/HTML/Element/area#rel) widerspiegelt und die Beziehungen des aktuellen Dokuments zur verknüpften Ressource als Liste von Token angibt.
- [`HTMLAreaElement.search`](/de/docs/Web/API/HTMLAreaElement/search)
  - : Ein String, der das Such-Element (einschließlich des führenden Fragezeichens `'?'`), falls vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.shape`](/de/docs/Web/API/HTMLAreaElement/shape)
  - : Ein String, der das HTML-Attribut [`shape`](/de/docs/Web/HTML/Element/area#shape) widerspiegelt und die Form des Hotspots angibt, beschränkt auf bekannte Werte.
- [`HTMLAreaElement.target`](/de/docs/Web/API/HTMLAreaElement/target)
  - : Ein String, der das HTML-Attribut [`target`](/de/docs/Web/HTML/Element/area#target) widerspiegelt und den Browsing-Kontext angibt, in dem die verknüpfte Ressource geöffnet werden soll.
- [`HTMLAreaElement.username`](/de/docs/Web/API/HTMLAreaElement/username)
  - : Ein String, der den Benutzernamen enthält, der vor dem Domain-Namen angegeben ist.

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
