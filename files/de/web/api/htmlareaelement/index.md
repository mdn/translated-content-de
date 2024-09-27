---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
l10n:
  sourceCommit: 8b2431b571fc8f3ff08ae59973ec033441951009
---

{{APIRef("HTML DOM")}}

Die **`HTMLAreaElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (über die des regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekts hinaus, die es auch durch Vererbung zur Verfügung hat), um das Layout und die Darstellung von {{HtmlElement("area")}}-Elementen zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAreaElement.alt`](/de/docs/Web/API/HTMLAreaElement/alt)
  - : Ein Zeichenkette, die das HTML-Attribut [`alt`](/de/docs/Web/HTML/Element/area#alt) reflektiert und alternativen Text für das Element enthält.
- [`HTMLAreaElement.coords`](/de/docs/Web/API/HTMLAreaElement/coords)
  - : Ein Zeichenkette, die das HTML-Attribut [`coords`](/de/docs/Web/HTML/Element/area#coords) reflektiert und Koordinaten zur Definition des Hotspot-Bereichs enthält.
- [`HTMLAreaElement.download`](/de/docs/Web/API/HTMLAreaElement/download)
  - : Eine Zeichenkette, die angibt, dass die verlinkte Ressource zum Herunterladen und nicht zur Anzeige im Browser bestimmt ist. Der Wert repräsentiert den vorgeschlagenen Namen der Datei. Wenn der Name kein gültiger Dateiname des zugrunde liegenden Betriebssystems ist, passt der Browser ihn an.
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)
  - : Eine Zeichenkette, die den Fragmentbezeichner (einschließlich des führenden Rautensymbols (#)) enthält, falls vorhanden, in der referenzierten URL.
- [`HTMLAreaElement.host`](/de/docs/Web/API/HTMLAreaElement/host)
  - : Eine Zeichenkette, die den Hostnamen und den Port (falls es sich nicht um den Standardport handelt) in der referenzierten URL enthält.
- [`HTMLAreaElement.hostname`](/de/docs/Web/API/HTMLAreaElement/hostname)
  - : Eine Zeichenkette, die den Hostnamen in der referenzierten URL enthält.
- [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href)
  - : Eine Zeichenkette, die das HTML-Attribut [`href`](/de/docs/Web/HTML/Element/area#href) reflektiert und eine gültige URL einer verlinkten Ressource enthält.
- [`HTMLAreaElement.noHref`](/de/docs/Web/API/HTMLAreaElement/noHref) {{deprecated_inline}}
  - : Eine booleanische Kennzeichnung, die angibt, ob der Bereich inaktiv (`true`) oder aktiv (`false`) ist.
- [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAreaElement/origin) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Ursprung der URL enthält, also ihr Schema, ihre Domain und ihren Port.
- [`HTMLAreaElement.password`](/de/docs/Web/API/HTMLAreaElement/password)
  - : Eine Zeichenkette, die das Passwort enthält, das vor dem Domainnamen angegeben ist.
- [`HTMLAreaElement.pathname`](/de/docs/Web/API/HTMLAreaElement/pathname)
  - : Eine Zeichenkette, die den Pfadnamen-Komponenten, falls vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.ping`](/de/docs/Web/API/HTMLAreaElement/ping)
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper PING an die URLs.
- [`HTMLAreaElement.port`](/de/docs/Web/API/HTMLAreaElement/port)
  - : Eine Zeichenkette, die den Port-Komponenten, falls vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.protocol`](/de/docs/Web/API/HTMLAreaElement/protocol)
  - : Eine Zeichenkette, die den Protokoll-Komponenten (einschließlich des nachstehenden Doppelpunkts `':'`) der referenzierten URL enthält.
- [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy)
  - : Eine Zeichenkette, die das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/area#referrerpolicy) reflektiert und angibt, welcher Referrer beim Abrufen der verlinkten Ressource zu verwenden ist.
- [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel)
  - : Eine Zeichenkette, die das HTML-Attribut [`rel`](/de/docs/Web/HTML/Element/area#rel) reflektiert und Beziehungen des aktuellen Dokuments zur verlinkten Ressource anzeigt.
- [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das HTML-Attribut [`rel`](/de/docs/Web/HTML/Element/area#rel) reflektiert und Beziehungen des aktuellen Dokuments zur verlinkten Ressource als Liste von Tokens angibt.
- [`HTMLAreaElement.search`](/de/docs/Web/API/HTMLAreaElement/search)
  - : Eine Zeichenkette, die das Suchelement (einschließlich des führenden Fragezeichens `'?'`), falls vorhanden, der referenzierten URL enthält.
- [`HTMLAreaElement.shape`](/de/docs/Web/API/HTMLAreaElement/shape)
  - : Eine Zeichenkette, die das HTML-Attribut [`shape`](/de/docs/Web/HTML/Element/area#shape) reflektiert und die Form des Hotspots angibt, beschränkt auf bekannte Werte.
- [`HTMLAreaElement.target`](/de/docs/Web/API/HTMLAreaElement/target)
  - : Eine Zeichenkette, die das HTML-Attribut [`target`](/de/docs/Web/HTML/Element/area#target) reflektiert und den Browsing-Kontext angibt, in dem die verlinkte Ressource geöffnet werden soll.
- [`HTMLAreaElement.username`](/de/docs/Web/API/HTMLAreaElement/username)
  - : Eine Zeichenkette, die den Benutzernamen enthält, der vor dem Domainnamen angegeben ist.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAreaElement.toString()`](/de/docs/Web/API/HTMLAreaElement/toString)
  - : Gibt eine Zeichenkette zurück, die die gesamte URL enthält. Es ist ein Synonym für [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("area") }}
