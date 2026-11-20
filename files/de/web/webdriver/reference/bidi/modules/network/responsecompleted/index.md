---
title: "`network.responseCompleted`-Ereignis"
short-title: responseCompleted
slug: Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted
l10n:
  sourceCommit: 5f25f2ac2839bd19aa1e08345d4a4d4060e4a85c
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `network.responseCompleted` des Moduls [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network) wird ausgelöst, wenn der Browser den vollständigen Body einer Antwort empfangen hat.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), in dem die Anfrage gestellt wurde, oder `null`, wenn die Anfrage nicht von einem Dokument in einem Kontext gestellt wurde, beispielsweise bei einer Anfrage durch einen Worker.
- `isBlocked`
  - : Ein boolescher Wert, der angibt, ob die Anfrage durch einen [Intercept](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) blockiert wird.
    Bei diesem Ereignis ist er immer `false`, da Intercepts eine Anfrage nicht mehr blockieren können, nachdem der Browser die vollständige Antwort empfangen hat. Daher enthält das Ereignis niemals das Feld `intercepts`.
- `navigation`
  - : Ein String mit der {{Glossary("UUID", "UUID")}}, die die Navigation, zu der die Anfrage gehört, eindeutig identifiziert, oder `null`, wenn die Anfrage keine Navigationsanfrage ist.
    Beispielsweise ist der Wert `null`, wenn Unterressourcen eines Dokuments wie Stylesheets und Skripte angefordert werden oder eine Anfrage mit `fetch()` gestellt wird.
    Wenn die Navigation mit dem Befehl [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) oder [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) gestartet wurde, stimmt diese ID mit dem Wert von `navigation` in der Antwort auf den Befehl überein.
    Andere Ereignisse, die mit dieser Navigation zusammenhängen, verwenden dieselbe Navigations-ID. Dazu gehören Ereignisse in den Modulen [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events) und [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#events).
- `redirectCount`
  - : Eine nicht negative Ganzzahl, die angibt, wie vielen Weiterleitungen der Browser für diese Anfrage gefolgt ist.
    Für die ursprüngliche Anfrage ist sie `0` und erhöht sich mit jeder Weiterleitung um eins.
- `request`
  - : Ein Objekt, das die [Anfrage](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#requests) beschreibt.
    Es enthält die folgenden Felder:
    - `bodySize`
      - : Eine nicht negative Ganzzahl, die die Größe des Anfrage-Bodys in Bytes angibt, oder `null`, wenn die Anfrage keinen Body hat.
    - `cookies`
      - : Ein Array von Objekten, die jeweils ein mit der Anfrage gesendetes Cookie darstellen.
        Das Array ist leer, wenn die Anfrage keinen {{HTTPHeader("Cookie")}}-Header hat.
        Jedes Objekt enthält die folgenden Felder und kann zusätzlich browserspezifische Felder enthalten:
        - `domain`
          - : Ein String mit der Domain des Cookies.
        - `expiry` {{optional_inline}}
          - : Eine nicht negative Ganzzahl, die den Ablaufzeitpunkt des Cookies als Anzahl der Sekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) angibt.
            Dieses Feld fehlt bei einem Cookie ohne Ablaufzeitpunkt, etwa einem Sitzungscookie.
        - `httpOnly`
          - : Ein boolescher Wert, der angibt, ob das Cookie durch sein Attribut [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) vor Seitenskripten verborgen ist (`true`) oder ob diese darauf zugreifen können (`false`).
        - `name`
          - : Ein String mit dem Namen des Cookies.
        - `path`
          - : Ein String mit dem Pfad des Cookies.
        - `sameSite`
          - : Ein String, der die Einstellung [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) des Cookies angibt.
            Er hat einen der folgenden Werte:
            - `default`: Das Cookie hat kein `SameSite`-Attribut oder dessen Wert wird nicht erkannt. Daher gilt das Standardverhalten des Browsers.
            - `lax`: Das Cookie hat `SameSite=Lax`.
            - `none`: Das Cookie hat `SameSite=None`.
            - `strict`: Das Cookie hat `SameSite=Strict`.
        - `secure`
          - : Ein boolescher Wert, der angibt, ob das Cookie durch sein Attribut [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) auf sichere Verbindungen beschränkt ist (`true`) oder auch über unsichere Verbindungen gesendet werden kann (`false`).
        - `size`
          - : Eine nicht negative Ganzzahl, die die gemeinsame Größe von Name und Wert des Cookies in Bytes angibt.
        - `value`
          - : Ein Objekt mit dem Wert des Cookies.
            Es enthält die folgenden Felder:
            - `type`
              - : Ein String, der angibt, wie der Cookie-Wert codiert ist.
                Er hat einen der folgenden Werte:
                - `base64`: Der Wert besteht aus {{Glossary("Base64", "Base64")}}-codierten Bytes, weil die Bytes kein gültiges {{Glossary("UTF-8", "UTF-8")}} sind.
                - `string`: Der Wert ist Text, der aus UTF-8-Bytes decodiert wurde.
            - `value`
              - : Ein String mit dem Cookie-Wert in der durch das Feld [`type`](#type) angegebenen Codierung.
    - `destination`
      - : Ein String mit dem [Ziel](/de/docs/Web/API/Request/destination) der Anfrage, beispielsweise `document`, `script` oder `style`.
        Bei Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ist der String leer.
    - `headers`
      - : Ein Array von Objekten, die jeweils einen Header der Anfrage darstellen. Dazu gehören auch Header, die mit dem Befehl [`network.setExtraHeaders`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders) hinzugefügt wurden.
        Jedes Objekt enthält die folgenden Felder:
        - `name`
          - : Ein String mit dem Namen des Headers, beispielsweise `Accept`.
        - `value`
          - : Ein Objekt mit dem Wert des Headers.
            Es enthält die folgenden Felder:
            - `type`
              - : Ein String, der angibt, wie der Header-Wert codiert ist.
                Er hat einen der folgenden Werte:
                - `base64`: Der Wert besteht aus {{Glossary("Base64", "Base64")}}-codierten Bytes, weil die Bytes kein gültiges {{Glossary("UTF-8", "UTF-8")}} sind.
                - `string`: Der Wert ist Text, der aus UTF-8-Bytes decodiert wurde.
            - `value`
              - : Ein String mit dem Header-Wert in der durch das Feld [`type`](#type_2) angegebenen Codierung.
    - `headersSize`
      - : Eine nicht negative Ganzzahl, die die Größe der Anfrage-Header in Bytes angibt.
        Bei Protokollen, die Header komprimieren, etwa HTTP/2, entspricht sie der komprimierten Größe.
    - `initiatorType`
      - : Ein String, der angibt, wodurch die Anfrage ausgelöst wurde, beispielsweise `fetch`, `link` oder `script`.
        Bei einer Anfrage ohne Initiatortyp, etwa der Anfrage für eine in einem Tab geladene Seite, ist der Wert `null` statt eines Strings.
        Beschreibungen häufig verwendeter Werte finden Sie unter [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType).
    - `method`
      - : Ein String mit der [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods), beispielsweise `GET` oder `POST`.
    - `request`
      - : Ein String mit der ID der [Anfrage](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#requests).
        Die ID bleibt auch bei einer Weiterleitung der Anfrage gleich.
    - `timings`
      - : Ein Objekt mit den Zeitpunkten, zu denen die Phasen der Anfrage stattgefunden haben.
        Das Feld [`timeOrigin`](#timeorigin) enthält eine Zeitangabe in Millisekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
        Die anderen Felder dieses Objekts enthalten Zeitangaben in Millisekunden relativ zu `timeOrigin`.
        Ein Feld hat den Wert `0`, wenn seine Phase nicht stattgefunden hat, beispielsweise die Felder für Weiterleitungen bei einer Anfrage ohne Weiterleitung.
        Alle Felder haben den Wert `0`, wenn die Anfrage weder von einem Dokument noch von einem Worker gestellt wurde.
        Es enthält die folgenden Felder:
        - `connectEnd`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser den Aufbau der Verbindung zum Server abgeschlossen hat, ähnlich wie [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd).
        - `connectStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser mit dem Aufbau der Verbindung zum Server begonnen hat, ähnlich wie [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart).
        - `dnsEnd`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser die Auflösung des Domainnamens abgeschlossen hat, ähnlich wie [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd).
        - `dnsStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser mit der Auflösung des Domainnamens begonnen hat, ähnlich wie [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart).
        - `fetchStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser nach etwaigen Weiterleitungen mit dem Abruf der Ressource begonnen hat, ähnlich wie [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart).
        - `redirectEnd`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser das letzte Byte der Antwort auf die letzte Weiterleitung empfangen hat, ähnlich wie [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd).
        - `redirectStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem die später weitergeleitete Anfrage ursprünglich begonnen hat, ähnlich wie [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart).
        - `requestStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser mit dem Senden der Anfrage begonnen hat, ähnlich wie [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart).
        - `requestTime`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem die Anfrage begonnen hat, ähnlich wie [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime).
        - `responseEnd`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser das letzte Byte der Antwort empfangen hat, ähnlich wie [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd).
        - `responseStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser das erste Byte der Antwort empfangen hat, ähnlich wie [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart).
        - `timeOrigin`
          - : Eine Zahl, die den [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin) des Dokuments oder Workers angibt, von dem die Anfrage gestellt wurde.
        - `tlsStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser mit dem {{Glossary("TLS", "TLS")}}-Handshake zur Absicherung der Verbindung begonnen hat, ähnlich wie [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart).
    - `url`
      - : Ein String mit der URL der Anfrage.
- `response`
  - : Ein Objekt, das die Antwort beschreibt.
    Es enthält die folgenden Felder:
    - `authChallenges` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils eine [Authentifizierungsaufforderung](/de/docs/Web/HTTP/Guides/Authentication) des Servers darstellen.
        Dieses Feld ist nur enthalten, wenn der Antwortstatus `401` oder `407` ist.
        Bei `401`-Antworten stammen die Aufforderungen aus dem {{HTTPHeader("WWW-Authenticate")}}-Header, bei `407`-Antworten aus dem {{HTTPHeader("Proxy-Authenticate")}}-Header.
        Das Array ist leer, wenn die Antwort den entsprechenden Header nicht enthält.
        Jedes Objekt enthält die folgenden Felder:
        - `realm`
          - : Ein String mit dem [Realm](/de/docs/Web/HTTP/Guides/Authentication#www-authenticate_and_proxy-authenticate_headers) der Aufforderung oder ein leerer String, wenn die Aufforderung keinen Realm hat.
        - `scheme`
          - : Ein String mit dem [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes), beispielsweise `Basic`.
    - `bodySize`
      - : Eine nicht negative Ganzzahl, die die Größe des Antwort-Bodys in Bytes angibt, bevor der Browser ihn decodiert (beispielsweise vor der Dekomprimierung), oder `null`, wenn der Browser diese Größe nicht meldet.
    - `bytesReceived`
      - : Eine nicht negative Ganzzahl, die die Gesamtzahl der für die Antwort empfangenen Bytes einschließlich ihrer Header angibt.
        Bei einer Antwort aus dem Browser-Cache ist sie `0`.
    - `content`
      - : Ein Objekt, das den decodierten Antwort-Body beschreibt.
        Es enthält das folgende Feld:
        - `size`
          - : Eine nicht negative Ganzzahl, die die Größe des Antwort-Bodys in Bytes angibt, nachdem der Browser ihn decodiert hat (beispielsweise nach der Dekomprimierung).
    - `fromCache`
      - : Ein boolescher Wert, der angibt, ob der Browser die Antwort aus seinem Cache bereitgestellt hat.
        - `true`: Der Browser hat die Antwort aus seinem Cache bereitgestellt, ohne den Server zu kontaktieren.
        - `false`: Der Browser hat die Antwort nicht aus seinem Cache bereitgestellt.
          Das schließt Fälle ein, in denen er den Server kontaktiert hat, um eine zwischengespeicherte Antwort erneut zu validieren.
    - `headers`
      - : Ein Array von Objekten, die jeweils einen [Header](/de/docs/Web/HTTP/Reference/Headers) der Antwort darstellen.
        Jedes Objekt enthält die folgenden Felder:
        - `name`
          - : Ein String mit dem Namen des Headers, beispielsweise `Content-Type`.
        - `value`
          - : Ein Objekt mit dem Wert des Headers.
            Es enthält die folgenden Felder:
            - `type`
              - : Ein String, der angibt, wie der Header-Wert codiert ist.
                Er hat einen der folgenden Werte:
                - `base64`: Der Wert besteht aus {{Glossary("Base64", "Base64")}}-codierten Bytes, weil die Bytes kein gültiges {{Glossary("UTF-8", "UTF-8")}} sind.
                - `string`: Der Wert ist Text, der aus UTF-8-Bytes decodiert wurde.
            - `value`
              - : Ein String mit dem Header-Wert in der durch das Feld [`type`](#type_3) angegebenen Codierung.
    - `headersSize`
      - : Eine nicht negative Ganzzahl, die die Größe der Antwort-Header in Bytes beim Empfang angibt, oder `null`, wenn der Browser diese Größe nicht meldet.
    - `mimeType`
      - : Ein String mit dem {{Glossary("MIME_type", "MIME-Typ")}}, den der Browser für die Antwort verwendet, beispielsweise `text/html` oder `application/json`.
        Der Wert enthält keine MIME-Typ-Parameter.
        Er kann vom {{HTTPHeader("Content-Type")}}-Header abweichen, beispielsweise wenn der Browser den Typ anhand des Inhalts bestimmt.
        Er kann auch ein leerer String sein, etwa bei einer Weiterleitungsantwort.
    - `protocol`
      - : Ein String mit dem Protokoll der Antwort, beispielsweise `http/1.1` oder `h2`.
        Bei einer Antwort, die nicht über HTTP empfangen wurde, ist dies das Schema der Antwort-URL, beispielsweise `data`.
    - `status`
      - : Eine nicht negative Ganzzahl mit dem [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) der Antwort, beispielsweise `200`.
    - `statusText`
      - : Ein String mit der Statusmeldung der Antwort, beispielsweise `OK`.
    - `url`
      - : Ein String mit der URL der Antwort.
- `timestamp`
  - : Eine nicht negative Ganzzahl, die den Zeitpunkt angibt, zu dem das Ereignis ausgelöst wurde, als Anzahl der Millisekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `userContext` {{optional_inline}}
  - : Ein String mit der ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts), in dem die Anfrage gestellt wurde, oder `null`, wenn die Anfrage nicht von einem Dokument in einem Kontext gestellt wurde.

## Beschreibung

Im [Lebenszyklus einer Anfrage](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#request_lifecycle) ist dies das letzte Ereignis für eine Antwort, die der Browser erfolgreich empfangen hat.
Es wird für dieselbe Anfrage nach [`network.beforeRequestSent`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) und [`network.responseStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) ausgelöst.
Wenn die Anfrage zu irgendeinem Zeitpunkt fehlschlägt, wird [`network.fetchError`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError) als letztes Ereignis für die Anfrage ausgelöst.

Wenn der Server mit einer Weiterleitung antwortet, wird dieses Ereignis auch für die Weiterleitungsantwort ausgelöst.
Anschließend sendet der Browser `network.beforeRequestSent` für die neue URL.
Die Anfrage-ID bleibt gleich und `redirectCount` erhöht sich um eins.
Danach folgen die weiteren Ereignisse für die neue URL.

Nach dem Senden dieses Ereignisses wartet der Browser nicht auf den Client: Eine Antwort kann zu diesem Zeitpunkt nicht mehr blockiert werden.

## Beispiele

### Eine Anfrage über eine Weiterleitung hinweg verfolgen

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für die Ereignisse [`network.beforeRequestSent`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent), [`network.responseStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) und `network.responseCompleted`.

Ein Tab hat `https://example.com/` geladen.
Die Seite ruft `fetch("/old-items")` auf.
Der Server antwortet mit einer `302`-Weiterleitung zu `/api/items`.

Der Browser sendet `network.beforeRequestSent` und `network.responseStarted` für `/old-items` und anschließend das folgende `network.responseCompleted`-Ereignis für die Weiterleitungsantwort (nur einige Felder sind dargestellt):

```json
{
  "type": "event",
  "method": "network.responseCompleted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://example.com/old-items"
    },
    "response": {
      "headers": [
        {
          "name": "Location",
          "value": {
            "type": "string",
            "value": "/api/items"
          }
        }
      ],
      "status": 302,
      "statusText": "Found",
      "url": "https://example.com/old-items"
    },
    "timestamp": 1791903501504
  }
}
```

Danach sendet er `network.beforeRequestSent` und `network.responseStarted` für `/api/items` und schließlich das folgende `network.responseCompleted`-Ereignis (nur einige Felder sind dargestellt):

```json
{
  "type": "event",
  "method": "network.responseCompleted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 1,
    "request": {
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://example.com/api/items"
    },
    "response": {
      "mimeType": "application/json",
      "status": 200,
      "statusText": "OK",
      "url": "https://example.com/api/items"
    },
    "timestamp": 1791903501505
  }
}
```

Die `request`-Objekte in beiden `network.responseCompleted`-Ereignissen haben dieselbe `request`-ID. Daran erkennen Sie, dass sie zur selben Anfrage gehören.
Der Wert `1` von `redirectCount` zeigt, dass die zweite Antwort das Ergebnis einer Weiterleitung ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignis [`network.beforeRequestSent`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent)
- Ereignis [`network.responseStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted)
- Ereignis [`network.fetchError`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError)
- Ereignis [`network.authRequired`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
- Leitfaden zu [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
