---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Die **`HTMLAnchorElement`**-Schnittstelle repräsentiert Hyperlink-Elemente und bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen des regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekts, von dem sie erben) zur Manipulation des Layouts und der Präsentation solcher Elemente. Diese Schnittstelle entspricht dem [`<a>`](/de/docs/Web/HTML/Element/a)-Element und sollte nicht mit [`<link>`](/de/docs/Web/HTML/Element/link) verwechselt werden, das durch das [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) repräsentiert wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Zugriff und Setzen des [`attributionsrc`](/de/docs/Web/HTML/Element/a#attributionsrc)-Attributs an einem {{htmlelement("a")}}-Element programmgesteuert, das den Wert dieses Attributs widerspiegelt. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header senden soll. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine navigationsbasierte Attribution-Quelle zu registrieren.
- [`HTMLAnchorElement.download`](/de/docs/Web/API/HTMLAnchorElement/download)
  - : Ein String, der angibt, dass die verknüpfte Ressource heruntergeladen werden soll, anstatt im Browser angezeigt zu werden. Der Wert repräsentiert den vorgeschlagenen Namen der Datei. Wenn der Name kein gültiger Dateiname des zugrunde liegenden Betriebssystems ist, wird der Browser ihn anpassen.
- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
  - : Ein String, der den Fragmentbezeichner, einschließlich des führenden Hash-Zeichens (`#`), falls vorhanden, in der referenzierten URL repräsentiert.
- [`HTMLAnchorElement.host`](/de/docs/Web/API/HTMLAnchorElement/host)
  - : Ein String, der den Hostnamen und Port (falls nicht der Standardport) in der referenzierten URL repräsentiert.
- [`HTMLAnchorElement.hostname`](/de/docs/Web/API/HTMLAnchorElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL repräsentiert.
- [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href)
  - : Ein String, der das Ergebnis des Parsens des [`href`](/de/docs/Web/HTML/Element/a#href)-HTML-Attributs relativ zum Dokument darstellt und eine gültige URL einer verknüpften Ressource enthält.
- [`HTMLAnchorElement.hreflang`](/de/docs/Web/API/HTMLAnchorElement/hreflang)
  - : Ein String, der das [`hreflang`](/de/docs/Web/HTML/Element/a#hreflang)-HTML-Attribut widerspiegelt und die Sprache der verknüpften Ressource angibt.
- [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, d.h. ihr Schema, ihre Domain und ihren Port.
- [`HTMLAnchorElement.password`](/de/docs/Web/API/HTMLAnchorElement/password)
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- [`HTMLAnchorElement.pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname)
  - : Ein String, der ein anfängliches `/` gefolgt vom Pfad der URL enthält, ohne die Abfragezeichenfolge oder das Fragment.
- [`HTMLAnchorElement.ping`](/de/docs/Web/API/HTMLAnchorElement/ping)
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper PING an die URLs.
- [`HTMLAnchorElement.port`](/de/docs/Web/API/HTMLAnchorElement/port)
  - : Ein String, der die Portkomponente, falls vorhanden, der referenzierten URL repräsentiert.
- [`HTMLAnchorElement.protocol`](/de/docs/Web/API/HTMLAnchorElement/protocol)
  - : Ein String, der die Protokollkomponente, einschließlich des Doppelpunktes (`:`), der referenzierten URL repräsentiert.
- [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)-HTML-Attribut widerspiegelt und angibt, welchen Referrer verwendet werden soll.
- [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel)
  - : Ein String, der das [`rel`](/de/docs/Web/HTML/Element/a#rel)-HTML-Attribut widerspiegelt und die Beziehung des Zielobjekts zum verlinkten Objekt angibt.
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`rel`](/de/docs/Web/HTML/Element/a#rel)-HTML-Attribut als Liste von Token widerspiegelt.
- [`HTMLAnchorElement.search`](/de/docs/Web/API/HTMLAnchorElement/search)
  - : Ein String, der das Suchfeld, einschließlich des führenden Fragezeichens (`?`), falls vorhanden, der referenzierten URL repräsentiert.
- [`HTMLAnchorElement.target`](/de/docs/Web/API/HTMLAnchorElement/target)
  - : Ein String, der das [`target`](/de/docs/Web/HTML/Element/a#target)-HTML-Attribut widerspiegelt und angibt, wo die verknüpfte Ressource angezeigt werden soll.
- [`HTMLAnchorElement.text`](/de/docs/Web/API/HTMLAnchorElement/text)
  - : Ein String, der ein Synonym für die Eigenschaft [`Node.textContent`](/de/docs/Web/API/Node/textContent) ist.
- [`HTMLAnchorElement.type`](/de/docs/Web/API/HTMLAnchorElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/a#type)-HTML-Attribut widerspiegelt und den MIME-Typ der verknüpften Ressource angibt.
- [`HTMLAnchorElement.username`](/de/docs/Web/API/HTMLAnchorElement/username)
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

### Veraltete Eigenschaften

- `HTMLAnchorElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichencodierung der verknüpften Ressource repräsentiert.
- `HTMLAnchorElement.coords` {{deprecated_inline}}
  - : Ein String, der eine durch Kommas getrennte Liste von Koordinaten repräsentiert.
- `HTMLAnchorElement.name` {{deprecated_inline}}
  - : Ein String, der den Ankernamen repräsentiert.
- `HTMLAnchorElement.rev` {{deprecated_inline}}
  - : Ein String, der das [`rev`](/de/docs/Web/HTML/Element/a#rev)-HTML-Attribut repräsentiert und die Beziehung des Link-Objekts zum Zielobjekt angibt.
- `HTMLAnchorElement.shape` {{deprecated_inline}}
  - : Ein String, der die Form des aktiven Bereichs darstellt.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLAnchorElement.toString()`](/de/docs/Web/API/HTMLAnchorElement/toString)
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href), obwohl es nicht zur Änderung des Wertes verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("a")}}
