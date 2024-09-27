---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Die **`HTMLAnchorElement`**-Schnittstelle repräsentiert Hyperlink-Elemente und bietet spezielle Eigenschaften und Methoden (über die des regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekts hinaus, von dem sie erben) zur Manipulation des Layouts und der Präsentation solcher Elemente. Diese Schnittstelle entspricht dem [`<a>`](/de/docs/Web/HTML/Element/a)-Element; nicht zu verwechseln mit [`<link>`](/de/docs/Web/HTML/Element/link), das durch [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) dargestellt wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternobjekt, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Element/a#attributionsrc)-Attribut auf einem {{htmlelement("a")}}-Element ab und setzt es programmatisch, wobei der Wert dieses Attributs widergespiegelt wird. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine navigationsbasierte Attributionsquelle zu registrieren.
- [`HTMLAnchorElement.download`](/de/docs/Web/API/HTMLAnchorElement/download)
  - : Ein String, der angibt, dass die verlinkte Ressource heruntergeladen und nicht im Browser angezeigt werden soll. Der Wert repräsentiert den vorgeschlagenen Namen der Datei. Wenn der Name kein gültiger Dateiname des zugrunde liegenden Betriebssystems ist, wird der Browser ihn anpassen.
- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
  - : Ein String, der den Fragmentbezeichner darstellt, einschließlich des führenden Rautenzeichens (`#`), falls vorhanden, in der referenzierten URL.
- [`HTMLAnchorElement.host`](/de/docs/Web/API/HTMLAnchorElement/host)
  - : Ein String, der den Hostnamen und den Port (falls dieser nicht der Standardport ist) in der referenzierten URL darstellt.
- [`HTMLAnchorElement.hostname`](/de/docs/Web/API/HTMLAnchorElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL darstellt.
- [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href)
  - : Ein String, der das Ergebnis des Parsens des [`href`](/de/docs/Web/HTML/Element/a#href)-HTML-Attributs relativ zum Dokument, mit einer gültigen URL einer verlinkten Ressource, enthält.
- [`HTMLAnchorElement.hreflang`](/de/docs/Web/API/HTMLAnchorElement/hreflang)
  - : Ein String, der das [`hreflang`](/de/docs/Web/HTML/Element/a#hreflang)-HTML-Attribut widerspiegelt und die Sprache der verlinkten Ressource angibt.
- [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, also ihr Schema, ihre Domain und ihren Port.
- [`HTMLAnchorElement.password`](/de/docs/Web/API/HTMLAnchorElement/password)
  - : Ein String, der das Passwort enthält, das vor dem Domainnamen angegeben wurde.
- [`HTMLAnchorElement.pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname)
  - : Ein String, der einen Anfangs-`/` gefolgt vom Pfad der URL enthält, ohne die Abfragezeichenfolge oder das Fragment.
- [`HTMLAnchorElement.ping`](/de/docs/Web/API/HTMLAnchorElement/ping)
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper PING an die URLs.
- [`HTMLAnchorElement.port`](/de/docs/Web/API/HTMLAnchorElement/port)
  - : Ein String, der die Portkomponente der referenzierten URL darstellt, falls vorhanden.
- [`HTMLAnchorElement.protocol`](/de/docs/Web/API/HTMLAnchorElement/protocol)
  - : Ein String, der die Protokollkomponente der referenzierten URL darstellt, einschließlich des nachfolgenden Doppelpunkts (`:`).
- [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)-HTML-Attribut widerspiegelt und angibt, welcher Referrer verwendet werden soll.
- [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel)
  - : Ein String, der das [`rel`](/de/docs/Web/HTML/Element/a#rel)-HTML-Attribut widerspiegelt und die Beziehung des Zielobjekts zum verlinkten Objekt angibt.
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`rel`](/de/docs/Web/HTML/Element/a#rel)-HTML-Attribut als Liste von Tokens widerspiegelt.
- [`HTMLAnchorElement.search`](/de/docs/Web/API/HTMLAnchorElement/search)
  - : Ein String, der das Suchelement darstellt, einschließlich des führenden Fragezeichens (`?`), falls vorhanden, in der referenzierten URL.
- [`HTMLAnchorElement.target`](/de/docs/Web/API/HTMLAnchorElement/target)
  - : Ein String, der das [`target`](/de/docs/Web/HTML/Element/a#target)-HTML-Attribut widerspiegelt und angibt, wo die verlinkte Ressource angezeigt werden soll.
- [`HTMLAnchorElement.text`](/de/docs/Web/API/HTMLAnchorElement/text)
  - : Ein String, der ein Synonym für die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft ist.
- [`HTMLAnchorElement.type`](/de/docs/Web/API/HTMLAnchorElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/a#type)-HTML-Attribut widerspiegelt und den MIME-Typ der verlinkten Ressource angibt.
- [`HTMLAnchorElement.username`](/de/docs/Web/API/HTMLAnchorElement/username)
  - : Ein String, der den Benutzernamen enthält, der vor dem Domainnamen angegeben wurde.

### Veraltete Eigenschaften

- `HTMLAnchorElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung der verlinkten Ressource darstellt.
- `HTMLAnchorElement.coords` {{deprecated_inline}}
  - : Ein String, der eine durch Kommas getrennte Liste von Koordinaten darstellt.
- `HTMLAnchorElement.name` {{deprecated_inline}}
  - : Ein String, der den Ankernamen darstellt.
- `HTMLAnchorElement.rev` {{deprecated_inline}}
  - : Ein String, der das [`rev`](/de/docs/Web/HTML/Element/a#rev)-HTML-Attribut darstellt, welches die Beziehung des Link-Objekts zum Zielobjekt angibt.
- `HTMLAnchorElement.shape` {{deprecated_inline}}
  - : Ein String, der die Form des aktiven Bereichs darstellt.

## Instanz-Methoden

_Erbt Methoden von seinem Elternobjekt, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAnchorElement.toString()`](/de/docs/Web/API/HTMLAnchorElement/toString)
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href), kann jedoch nicht zur Änderung des Wertes verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("a")}}
