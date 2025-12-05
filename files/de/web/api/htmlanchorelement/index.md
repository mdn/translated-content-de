---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{APIRef("HTML DOM")}}

Das **`HTMLAnchorElement`**-Interface repräsentiert Hyperlink-Elemente und bietet spezielle Eigenschaften und Methoden (über die der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objektschnittstelle hinaus, von der sie erben) zur Manipulation des Layouts und der Präsentation solcher Elemente. Dieses Interface entspricht dem [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element; nicht zu verwechseln mit [`<link>`](/de/docs/Web/HTML/Reference/Elements/link), das durch [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) dargestellt wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/a#attributionsrc)-Attribut eines {{htmlelement("a")}}-Elements ab oder setzt es programmatisch und reflektiert den Wert dieses Attributs. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header senden soll. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine navigationsbasierte Attributionsquelle zu registrieren.
- [`HTMLAnchorElement.download`](/de/docs/Web/API/HTMLAnchorElement/download)
  - : Ein String, der angibt, dass die verlinkte Ressource zum Herunterladen und nicht zur Anzeige im Browser bestimmt ist. Der Wert repräsentiert den vorgeschlagenen Namen der Datei. Wenn der Name kein gültiger Dateiname des zugrunde liegenden Betriebssystems ist, passt der Browser ihn an.
- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
  - : Ein String, der den Fragmentbezeichner, einschließlich des führenden Kreuzzeichens (`#`), sofern vorhanden, in der referenzierten URL darstellt.
- [`HTMLAnchorElement.host`](/de/docs/Web/API/HTMLAnchorElement/host)
  - : Ein String, der den Hostnamen und den Port (falls es sich nicht um den Standardport handelt) in der referenzierten URL darstellt.
- [`HTMLAnchorElement.hostname`](/de/docs/Web/API/HTMLAnchorElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL darstellt.
- [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href)
  - : Ein String, der das Ergebnis des Parsens des [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-HTML-Attributs relativ zum Dokument ist und eine gültige URL einer verlinkten Ressource enthält.
- [`HTMLAnchorElement.hreflang`](/de/docs/Web/API/HTMLAnchorElement/hreflang)
  - : Ein String, der das [`hreflang`](/de/docs/Web/HTML/Reference/Elements/a#hreflang)-HTML-Attribut widerspiegelt und die Sprache der verlinkten Ressource angibt.
- [`HTMLAnchorElement.interestForElement`](/de/docs/Web/API/HTMLAnchorElement/interestForElement) {{experimental_inline}}
  - : Ruft das Zielelement eines Interessen-Invokers ab oder setzt es, in Fällen, in denen das zugehörige {{htmlelement("a")}}-Element als [Interessen-Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) angegeben ist.
- [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, also ihr Schema, ihre Domain und ihren Port.
- [`HTMLAnchorElement.password`](/de/docs/Web/API/HTMLAnchorElement/password)
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- [`HTMLAnchorElement.pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname)
  - : Ein String, der mit einem `/` beginnt, gefolgt vom Pfad der URL, ohne den Abfragezeichenfolgen- oder Fragmentabschnitt.
- [`HTMLAnchorElement.ping`](/de/docs/Web/API/HTMLAnchorElement/ping)
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem PING-Body an die URLs.
- [`HTMLAnchorElement.port`](/de/docs/Web/API/HTMLAnchorElement/port)
  - : Ein String, der die Portkomponente, sofern vorhanden, der referenzierten URL darstellt.
- [`HTMLAnchorElement.protocol`](/de/docs/Web/API/HTMLAnchorElement/protocol)
  - : Ein String, der die Protokollkomponente, einschließlich nachfolgendem Doppelpunkt (`:`), der referenzierten URL darstellt.
- [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)-HTML-Attribut widerspiegelt und angibt, welchen Referrer verwendet werden soll.
- [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel)
  - : Ein String, der das [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel)-HTML-Attribut widerspiegelt und die Beziehung des Zielobjekts zum verlinkten Objekt angibt.
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel)-HTML-Attribut als eine Liste von Tokens widerspiegelt.
- [`HTMLAnchorElement.search`](/de/docs/Web/API/HTMLAnchorElement/search)
  - : Ein String, der das Such-Element, einschließlich führendem Fragezeichen (`?`), sofern vorhanden, der referenzierten URL darstellt.
- [`HTMLAnchorElement.target`](/de/docs/Web/API/HTMLAnchorElement/target)
  - : Ein String, der das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-HTML-Attribut widerspiegelt und angibt, wo die verlinkte Ressource angezeigt werden soll.
- [`HTMLAnchorElement.text`](/de/docs/Web/API/HTMLAnchorElement/text)
  - : Ein String, der ein Synonym für die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft ist.
- [`HTMLAnchorElement.type`](/de/docs/Web/API/HTMLAnchorElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Reference/Elements/a#type)-HTML-Attribut widerspiegelt und den MIME-Typ der verlinkten Ressource angibt.
- [`HTMLAnchorElement.username`](/de/docs/Web/API/HTMLAnchorElement/username)
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

### Veraltete Eigenschaften

- `HTMLAnchorElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung der verlinkten Ressource darstellt.
- `HTMLAnchorElement.coords` {{deprecated_inline}}
  - : Ein String, der eine durch Kommas getrennte Liste von Koordinaten darstellt.
- `HTMLAnchorElement.name` {{deprecated_inline}}
  - : Ein String, der den Ankernamen darstellt.
- `HTMLAnchorElement.rev` {{deprecated_inline}}
  - : Ein String, der das [`rev`](/de/docs/Web/HTML/Reference/Elements/a#rev)-HTML-Attribut darstellt, das die Beziehung des Linkobjekts zum Zielobjekt angibt.
- `HTMLAnchorElement.shape` {{deprecated_inline}}
  - : Ein String, der die Form des aktiven Bereichs darstellt.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAnchorElement.toString()`](/de/docs/Web/API/HTMLAnchorElement/toString)
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href), kann jedoch nicht zur Wertänderung verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("a")}}
