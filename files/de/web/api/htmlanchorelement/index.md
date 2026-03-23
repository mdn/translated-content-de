---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
l10n:
  sourceCommit: af9a8ff87cfa6563c9a082162ce4ed7ba0b204e1
---

{{APIRef("HTML DOM")}}

Die **`HTMLAnchorElement`**-Schnittstelle stellt Hyperlink-Elemente dar und bietet spezielle Eigenschaften und Methoden (über die der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objektschnittstelle hinaus, von der sie erben) zur Manipulation des Layouts und der Präsentation solcher Elemente. Diese Schnittstelle entspricht dem [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element und sollte nicht mit [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) verwechselt werden, das durch [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) repräsentiert wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAnchorElement.attributionSourceId`](/de/docs/Web/API/HTMLAnchorElement/attributionSourceId) {{experimental_inline}}
  - : Eine nicht-negative Ganzzahl, die die Quellenkennung der Attribution für [Private Click Measurement](https://privacycg.github.io/private-click-measurement/) darstellt. Gültige Werte liegen zwischen `0` und `255`.
- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc) {{securecontext_inline}} {{deprecated_inline}}
  - : Ruft das Attribut [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/a#attributionsrc) eines {{htmlelement("a")}}-Elements programmgesteuert ab oder setzt dieses und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header senden soll. Serverseitig wird dies verwendet, um die Übermittlung eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine auf der Navigation basierende Attributquelle zu registrieren.
- [`HTMLAnchorElement.download`](/de/docs/Web/API/HTMLAnchorElement/download)
  - : Ein String, der anzeigt, dass die verlinkte Ressource heruntergeladen und nicht im Browser angezeigt werden soll. Der Wert repräsentiert den vorgeschlagenen Namen der Datei. Wenn der Name kein gültiger Dateiname des zugrunde liegenden Betriebssystems ist, wird der Browser ihn anpassen.
- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
  - : Ein String, der den Fragment-Identifikator, einschließlich des führenden Rautensymbols (`#`), im referenzierten URL darstellt.
- [`HTMLAnchorElement.host`](/de/docs/Web/API/HTMLAnchorElement/host)
  - : Ein String, der den Hostnamen und den Port (falls es nicht der Standardport ist) im referenzierten URL darstellt.
- [`HTMLAnchorElement.hostname`](/de/docs/Web/API/HTMLAnchorElement/hostname)
  - : Ein String, der den Hostnamen im referenzierten URL darstellt.
- [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href)
  - : Ein String, der das Ergebnis der Analyse des HTML-Attributs [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) relativ zum Dokument ist und eine gültige URL einer verlinkten Ressource enthält.
- [`HTMLAnchorElement.hreflang`](/de/docs/Web/API/HTMLAnchorElement/hreflang)
  - : Ein String, der das HTML-Attribut [`hreflang`](/de/docs/Web/HTML/Reference/Elements/a#hreflang) widerspiegelt und die Sprache der verlinkten Ressource angibt.
- [`HTMLAnchorElement.interestForElement`](/de/docs/Web/API/HTMLAnchorElement/interestForElement) {{experimental_inline}} {{non-standard_inline}}
  - : Ruft das Zielelement eines Interessen-Auslösers ab oder setzt es, in Fällen, in denen das zugehörige {{htmlelement("a")}}-Element als [Interessen-Auslöser](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) angegeben ist.
- [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, d.h. dessen Schema, dessen Domain und dessen Port.
- [`HTMLAnchorElement.password`](/de/docs/Web/API/HTMLAnchorElement/password)
  - : Ein String, der das Passwort enthält, das vor dem Domainnamen angegeben ist.
- [`HTMLAnchorElement.pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname)
  - : Ein String, der ein anfängliches `/` enthält, gefolgt vom Pfad der URL, ohne die Abfragezeichenfolge oder das Fragment.
- [`HTMLAnchorElement.ping`](/de/docs/Web/API/HTMLAnchorElement/ping)
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Body PING an die URLs.
- [`HTMLAnchorElement.port`](/de/docs/Web/API/HTMLAnchorElement/port)
  - : Ein String, der die Portkomponente, sofern vorhanden, der referenzierten URL darstellt.
- [`HTMLAnchorElement.protocol`](/de/docs/Web/API/HTMLAnchorElement/protocol)
  - : Ein String, der die Protokollkomponente, einschließlich des nachgestellten Doppelpunktes (`:`), der referenzierten URL darstellt.
- [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy)
  - : Ein String, der das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) widerspiegelt und angibt, welchen Referrer verwendet werden soll.
- [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel)
  - : Ein String, der das HTML-Attribut [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel) widerspiegelt und die Beziehung des Zielobjekts zum verlinkten Objekt angibt.
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das HTML-Attribut [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel) als Liste von Tokens widerspiegelt.
- [`HTMLAnchorElement.search`](/de/docs/Web/API/HTMLAnchorElement/search)
  - : Ein String, der das Suchelement, einschließlich des führenden Fragezeichens (`?`), sofern vorhanden, der referenzierten URL darstellt.
- [`HTMLAnchorElement.target`](/de/docs/Web/API/HTMLAnchorElement/target)
  - : Ein String, der das HTML-Attribut [`target`](/de/docs/Web/HTML/Reference/Elements/a#target) widerspiegelt und angibt, wo die verlinkte Ressource angezeigt werden soll.
- [`HTMLAnchorElement.text`](/de/docs/Web/API/HTMLAnchorElement/text)
  - : Ein String, der ein Synonym für die Eigenschaft [`Node.textContent`](/de/docs/Web/API/Node/textContent) ist.
- [`HTMLAnchorElement.type`](/de/docs/Web/API/HTMLAnchorElement/type)
  - : Ein String, der das HTML-Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/a#type) widerspiegelt und den MIME-Typ der verlinkten Ressource angibt.
- [`HTMLAnchorElement.username`](/de/docs/Web/API/HTMLAnchorElement/username)
  - : Ein String, der den Benutzernamen enthält, der vor dem Domainnamen angegeben ist.

### Veraltete Eigenschaften

- `HTMLAnchorElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichencodierung der verlinkten Ressource darstellt.
- `HTMLAnchorElement.coords` {{deprecated_inline}}
  - : Ein String, der eine durch Komma getrennte Liste von Koordinaten darstellt.
- `HTMLAnchorElement.name` {{deprecated_inline}}
  - : Ein String, der den Namen des Ankers darstellt.
- `HTMLAnchorElement.rev` {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`rev`](/de/docs/Web/HTML/Reference/Elements/a#rev) darstellt und die Beziehung des Link-Objekts zum Zielobjekt angibt.
- `HTMLAnchorElement.shape` {{deprecated_inline}}
  - : Ein String, der die Form des aktiven Bereichs darstellt.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAnchorElement.toString()`](/de/docs/Web/API/HTMLAnchorElement/toString)
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href), kann jedoch nicht zur Änderung des Wertes verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("a")}}
