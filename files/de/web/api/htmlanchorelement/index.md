---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLAnchorElement`** Interface repräsentiert Hyperlink-Elemente und bietet spezielle Eigenschaften und Methoden (über die des regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement) Objekt-Interfaces hinaus, von dem sie erben) zur Manipulation des Layouts und der Präsentation solcher Elemente. Dieses Interface entspricht dem [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) Element; nicht zu verwechseln mit [`<link>`](/de/docs/Web/HTML/Reference/Elements/link), das durch das [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) repräsentiert wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/a#attributionsrc) Attribut eines {{htmlelement("a")}} Elements programmatisch ab und setzt es, was den Wert dieses Attributs widerspiegelt. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header senden soll. Serverseitig wird dies verwendet, um einen {{httpheader("Attribution-Reporting-Register-Source")}} Header in der Antwort auszulösen, um eine navigationsbasierte Attributionsquelle zu registrieren.
- [`HTMLAnchorElement.download`](/de/docs/Web/API/HTMLAnchorElement/download)
  - : Ein String, der angibt, dass die verlinkte Ressource heruntergeladen und nicht im Browser angezeigt werden soll. Der Wert repräsentiert den vorgeschlagenen Namen der Datei. Wenn der Name kein gültiger Dateiname des zugrunde liegenden Betriebssystems ist, wird der Browser ihn anpassen.
- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
  - : Ein String, der den Fragmentbezeichner einschließlich des führenden Rautenzeichens (`#`) darstellt, falls vorhanden, in der referenzierten URL.
- [`HTMLAnchorElement.host`](/de/docs/Web/API/HTMLAnchorElement/host)
  - : Ein String, der den Hostnamen und Port (falls es nicht der Standardport ist) in der referenzierten URL darstellt.
- [`HTMLAnchorElement.hostname`](/de/docs/Web/API/HTMLAnchorElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL darstellt.
- [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href)
  - : Ein String, der das Ergebnis des Parsens des [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) HTML-Attributs relativ zum Dokument darstellt und eine gültige URL einer verlinkten Ressource enthält.
- [`HTMLAnchorElement.hreflang`](/de/docs/Web/API/HTMLAnchorElement/hreflang)
  - : Ein String, der das [`hreflang`](/de/docs/Web/HTML/Reference/Elements/a#hreflang) HTML-Attribut widerspiegelt und die Sprache der verlinkten Ressource angibt.
- [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, also deren Schema, Domäne und Port.
- [`HTMLAnchorElement.password`](/de/docs/Web/API/HTMLAnchorElement/password)
  - : Ein String, der das vor dem Domänennamen angegebene Passwort enthält.
- [`HTMLAnchorElement.pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname)
  - : Ein String, der ein anfängliches `/`, gefolgt vom Pfad der URL enthält, ohne die Abfragezeichenfolge oder das Fragment.
- [`HTMLAnchorElement.ping`](/de/docs/Web/API/HTMLAnchorElement/ping)
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper PING an die URLs.
- [`HTMLAnchorElement.port`](/de/docs/Web/API/HTMLAnchorElement/port)
  - : Ein String, der die Portkomponente, falls vorhanden, der referenzierten URL darstellt.
- [`HTMLAnchorElement.protocol`](/de/docs/Web/API/HTMLAnchorElement/protocol)
  - : Ein String, der die Protokollkomponente einschließlich des nachgestellten Doppelpunkts (`:`) der referenzierten URL darstellt.
- [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) HTML-Attribut widerspiegelt, das angibt, welchen Referrer verwendet werden soll.
- [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel)
  - : Ein String, der das [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel) HTML-Attribut widerspiegelt und die Beziehung des Zielobjekts zum verlinkten Objekt angibt.
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel) HTML-Attribut als Liste von Tokens widerspiegelt.
- [`HTMLAnchorElement.search`](/de/docs/Web/API/HTMLAnchorElement/search)
  - : Ein String, der das Suchelement einschließlich eines führenden Fragezeichens (`?`) darstellt, falls vorhanden, der referenzierten URL.
- [`HTMLAnchorElement.target`](/de/docs/Web/API/HTMLAnchorElement/target)
  - : Ein String, der das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target) HTML-Attribut widerspiegelt und angibt, wo die verlinkte Ressource angezeigt werden soll.
- [`HTMLAnchorElement.text`](/de/docs/Web/API/HTMLAnchorElement/text)
  - : Ein String, der ein Synonym für die [`Node.textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft ist.
- [`HTMLAnchorElement.type`](/de/docs/Web/API/HTMLAnchorElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Reference/Elements/a#type) HTML-Attribut widerspiegelt und den MIME-Typ der verlinkten Ressource angibt.
- [`HTMLAnchorElement.username`](/de/docs/Web/API/HTMLAnchorElement/username)
  - : Ein String, der den vor dem Domänennamen angegebenen Benutzernamen enthält.

### Veraltete Eigenschaften

- `HTMLAnchorElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung der verlinkten Ressource repräsentiert.
- `HTMLAnchorElement.coords` {{deprecated_inline}}
  - : Ein String, der eine durch Kommata getrennte Liste von Koordinaten repräsentiert.
- `HTMLAnchorElement.name` {{deprecated_inline}}
  - : Ein String, der den Ankernamen repräsentiert.
- `HTMLAnchorElement.rev` {{deprecated_inline}}
  - : Ein String, der das [`rev`](/de/docs/Web/HTML/Reference/Elements/a#rev) HTML-Attribut repräsentiert und die Beziehung des Link-Objekts zum Zielobjekt angibt.
- `HTMLAnchorElement.shape` {{deprecated_inline}}
  - : Ein String, der die Form des aktiven Bereichs repräsentiert.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAnchorElement.toString()`](/de/docs/Web/API/HTMLAnchorElement/toString)
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href), obwohl es nicht verwendet werden kann, um den Wert zu ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("a")}}
