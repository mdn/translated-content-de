---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
l10n:
  sourceCommit: ff6f4762dc0f086443390e11cff3753c18fff69d
---

{{APIRef("HTML DOM")}}

Das **`HTMLAreaElement`**-Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen des regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt-Interfaces, die es durch Vererbung ebenfalls zur Verfügung hat) zur Manipulation des Layouts und der Präsentation von {{HtmlElement("area")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Element [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAreaElement.alt`](/de/docs/Web/API/HTMLAreaElement/alt)
  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Element/area#alt)-HTML-Attribut widerspiegelt und alternativen Text für das Element enthält.
- [`HTMLAreaElement.coords`](/de/docs/Web/API/HTMLAreaElement/coords)
  - : Ein String, der das [`coords`](/de/docs/Web/HTML/Element/area#coords)-HTML-Attribut widerspiegelt und Koordinaten zur Definition der Hotspot-Region enthält.
- [`HTMLAreaElement.download`](/de/docs/Web/API/HTMLAreaElement/download)
  - : Ein String, der anzeigt, dass die verknüpfte Ressource heruntergeladen werden soll, anstatt im Browser angezeigt zu werden. Der Wert repräsentiert den vorgeschlagenen Namen der Datei. Ist der Name kein gültiger Dateiname des zugrunde liegenden Betriebssystems, passt der Browser ihn entsprechend an.
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)
  - : Ein String, der die Fragmentkennzeichnung (einschließlich des führenden Rautezeichens (#)) enthält, sofern vorhanden, in der referenzierten URL.
- [`HTMLAreaElement.host`](/de/docs/Web/API/HTMLAreaElement/host)
  - : Ein String, der den Hostnamen und den Port (falls es sich nicht um den Standardport handelt) in der referenzierten URL enthält.
- [`HTMLAreaElement.hostname`](/de/docs/Web/API/HTMLAreaElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL enthält.
- [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href)
  - : Ein String, der das [`href`](/de/docs/Web/HTML/Element/area#href)-HTML-Attribut widerspiegelt und eine gültige URL einer verknüpften Ressource enthält.
- [`HTMLAreaElement.noHref`](/de/docs/Web/API/HTMLAreaElement/noHref) {{deprecated_inline}}
  - : Ein boolescher Flag, der angibt, ob der Bereich inaktiv (`true`) oder aktiv (`false`) ist.
- [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAreaElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, das heißt, ihr Schema, ihre Domain und ihren Port.
- [`HTMLAreaElement.password`](/de/docs/Web/API/HTMLAreaElement/password)
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- [`HTMLAreaElement.pathname`](/de/docs/Web/API/HTMLAreaElement/pathname)
  - : Ein String, der den Pfadnamen-Komponenten enthält, falls vorhanden, der referenzierten URL.
- [`HTMLAreaElement.ping`](/de/docs/Web/API/HTMLAreaElement/ping)
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link aufgerufen wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper PING an die URLs.
- [`HTMLAreaElement.port`](/de/docs/Web/API/HTMLAreaElement/port)
  - : Ein String, der die Port-Komponente enthält, falls vorhanden, der referenzierten URL.
- [`HTMLAreaElement.protocol`](/de/docs/Web/API/HTMLAreaElement/protocol)
  - : Ein String, der die Protokoll-Komponente (einschließlich des nachfolgenden Doppelpunkts `':'`) der referenzierten URL enthält.
- [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Element/area#referrerpolicy)-HTML-Attribut widerspiegelt und angibt, welcher Referrer beim Abrufen der verknüpften Ressource verwendet werden soll.
- [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel)
  - : Ein String, der das [`rel`](/de/docs/Web/HTML/Element/area#rel)-HTML-Attribut widerspiegelt und die Beziehungen des aktuellen Dokuments zur verknüpften Ressource angibt.
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`rel`](/de/docs/Web/HTML/Element/area#rel)-HTML-Attribut widerspiegelt und die Beziehungen des aktuellen Dokuments zur verknüpften Ressource als Liste von Tokens angibt.
- [`HTMLAreaElement.search`](/de/docs/Web/API/HTMLAreaElement/search)
  - : Ein String, der das Suchelement (einschließlich des führenden Fragezeichens `'?'`) enthält, falls vorhanden, der referenzierten URL.
- [`HTMLAreaElement.shape`](/de/docs/Web/API/HTMLAreaElement/shape)
  - : Ein String, der das [`shape`](/de/docs/Web/HTML/Element/area#shape)-HTML-Attribut widerspiegelt und die Form des Hotspots angibt, begrenzt auf bekannte Werte.
- [`HTMLAreaElement.target`](/de/docs/Web/API/HTMLAreaElement/target)
  - : Ein String, der das [`target`](/de/docs/Web/HTML/Element/area#target)-HTML-Attribut widerspiegelt und den Browsing-Kontext angibt, in dem die verknüpfte Ressource geöffnet werden soll.
- [`HTMLAreaElement.username`](/de/docs/Web/API/HTMLAreaElement/username)
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Instanz-Methoden

_Erbt Methoden von seinem Eltern-Element [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAreaElement.toString()`](/de/docs/Web/API/HTMLAreaElement/toString)
  - : Gibt einen String zurück, der die ganze URL enthält. Es ist ein Synonym für [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{ HTMLElement("area") }}
