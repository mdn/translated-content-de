---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
l10n:
  sourceCommit: ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{APIRef("HTML DOM")}}

Die **`HTMLAnchorElement`**-Schnittstelle repräsentiert Hyperlink-Elemente und bietet spezielle Eigenschaften und Methoden (über die der regulären {{domxref("HTMLElement")}}-Objektschnittstelle hinaus, von der sie erben) zur Manipulation des Layouts und der Präsentation solcher Elemente. Diese Schnittstelle entspricht dem [`<a>`](/de/docs/Web/HTML/Element/a)-Element; nicht zu verwechseln mit [`<link>`](/de/docs/Web/HTML/Element/link), das durch [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) repräsentiert wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Objekt, {{domxref("HTMLElement")}}._

- {{domxref("HTMLAnchorElement.attributionSrc")}} {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Element/a#attributionsrc)-Attribut bei einem {{htmlelement("a")}}-Element programmgesteuert ab und setzt es, und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header senden soll. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine navigationsbasierte Attributionsquelle zu registrieren.
- {{domxref("HTMLAnchorElement.download")}}
  - : Ein String, der angibt, dass die verlinkte Ressource heruntergeladen und nicht im Browser angezeigt werden soll. Der Wert stellt den vorgeschlagenen Namen der Datei dar. Wenn der Name kein gültiger Dateiname des zugrunde liegenden Betriebssystems ist, wird der Browser ihn anpassen.
- {{domxref("HTMLAnchorElement.hash")}}
  - : Ein String, der den Fragment-Identifikator darstellt, einschließlich des führenden Rautensymbols ('`#`'), falls vorhanden, in der referenzierten URL.
- {{domxref("HTMLAnchorElement.host")}}
  - : Ein String, der den Hostnamen und Port (falls es nicht der Standardport ist) in der referenzierten URL darstellt.
- {{domxref("HTMLAnchorElement.hostname")}}
  - : Ein String, der den Hostnamen in der referenzierten URL darstellt.
- {{domxref("HTMLAnchorElement.href")}}
  - : Ein String, der das Ergebnis des Parsens des [`href`](/de/docs/Web/HTML/Element/a#href)-HTML-Attributs relativ zum Dokument ist und eine gültige URL einer verlinkten Ressource enthält.
- {{domxref("HTMLAnchorElement.hreflang")}}
  - : Ein String, der das [`hreflang`](/de/docs/Web/HTML/Element/a#hreflang)-HTML-Attribut widerspiegelt, welches die Sprache der verlinkten Ressource angibt.
- {{domxref("HTMLAnchorElement.origin")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, d. h. sein Schema, seine Domain und seinen Port.
- {{domxref("HTMLAnchorElement.password")}}
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- {{domxref("HTMLAnchorElement.pathname")}}
  - : Ein String, der ein anfängliches `'/'` gefolgt vom Pfad der URL enthält, ohne die Abfragezeichenfolge oder das Fragment.
- {{domxref("HTMLAnchorElement.ping")}}
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper PING an die URLs.
- {{domxref("HTMLAnchorElement.port")}}
  - : Ein String, der die Portkomponente der referenzierten URL darstellt, falls vorhanden.
- {{domxref("HTMLAnchorElement.protocol")}}
  - : Ein String, der die Protokollkomponente einschließlich eines abschließenden Doppelpunkts ('`:`') der referenzierten URL darstellt.
- {{domxref("HTMLAnchorElement.referrerPolicy")}}
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)-HTML-Attribut widerspiegelt, welches angibt, welcher Referrer verwendet werden soll.
- {{domxref("HTMLAnchorElement.rel")}}
  - : Ein String, der das [`rel`](/de/docs/Web/HTML/Element/a#rel)-HTML-Attribut widerspiegelt, welches die Beziehung des Zielobjekts zum verlinkten Objekt spezifiziert.
- {{domxref("HTMLAnchorElement.relList")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("DOMTokenList")}} zurück, die das [`rel`](/de/docs/Web/HTML/Element/a#rel)-HTML-Attribut als Liste von Tokens widerspiegelt.
- {{domxref("HTMLAnchorElement.search")}}
  - : Ein String, der das Suchelement darstellt, einschließlich des führenden Fragezeichens ('`?`'), falls vorhanden, der referenzierten URL.
- {{domxref("HTMLAnchorElement.target")}}
  - : Ein String, der das [`target`](/de/docs/Web/HTML/Element/a#target)-HTML-Attribut widerspiegelt, welches angibt, wo die verlinkte Ressource angezeigt werden soll.
- {{domxref("HTMLAnchorElement.text")}}
  - : Ein String, der ein Synonym für die {{domxref("Node.textContent")}}-Eigenschaft ist.
- {{domxref("HTMLAnchorElement.type")}}
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/a#type)-HTML-Attribut widerspiegelt, welches den MIME-Typ der verlinkten Ressource angibt.
- {{domxref("HTMLAnchorElement.username")}}
  - : Ein String, der den angegebenen Benutzernamen vor dem Domainnamen enthält.

### Veraltete Eigenschaften

- `HTMLAnchorElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichencodierung der verlinkten Ressource darstellt.
- `HTMLAnchorElement.coords` {{deprecated_inline}}
  - : Ein String, der eine kommagetrennte Liste von Koordinaten darstellt.
- `HTMLAnchorElement.name` {{deprecated_inline}}
  - : Ein String, der den Ankernamen darstellt.
- `HTMLAnchorElement.rev` {{deprecated_inline}}
  - : Ein String, der das [`rev`](/de/docs/Web/HTML/Element/a#rev)-HTML-Attribut darstellt, welches die Beziehung des Linkobjekts zum Zielobjekt spezifiziert.
- `HTMLAnchorElement.shape` {{deprecated_inline}}
  - : Ein String, der die Form des aktiven Bereichs darstellt.

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten Objekt, {{domxref("HTMLElement")}}._

- {{domxref("HTMLAnchorElement.toString()")}}
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für {{domxref("HTMLAnchorElement.href")}}, auch wenn es nicht verwendet werden kann, um den Wert zu ändern.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("a")}}
