---
title: Ereignis `network.responseStarted`
short-title: responseStarted
slug: Web/WebDriver/Reference/BiDi/Modules/network/responseStarted
l10n:
  sourceCommit: 5f25f2ac2839bd19aa1e08345d4a4d4060e4a85c
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `network.responseStarted` des Moduls [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network) wird ausgelöst, wenn der Browser die Header einer Antwort empfangen hat, aber noch nicht den vollständigen Antworttext.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), in dem die Anfrage gestellt wurde, oder `null`, wenn die Anfrage nicht von einem Dokument in einem Kontext gestellt wurde, beispielsweise bei einer Anfrage durch einen Worker.
- `intercepts` {{optional_inline}}
  - : Ein Array aus einem oder mehreren Strings, die jeweils die ID eines [Intercepts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) enthalten, der die Antwort blockiert.
    Dieses Feld ist nur enthalten, wenn `isBlocked` den Wert `true` hat.
    Intercept-IDs werden vom Befehl [`network.addIntercept`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept) zurückgegeben.
- `isBlocked`
  - : Ein boolescher Wert, der angibt, ob die Antwort durch einen [Intercept](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) blockiert wird.
    - `true`: Die Antwort entspricht einem oder mehreren der im Feld `intercepts` aufgeführten Intercepts und wird blockiert.
      Der Browser verarbeitet die Antwort erst weiter, wenn der Client sie fortsetzt, beispielsweise mit dem Befehl [`network.continueResponse`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueResponse).
    - `false`: Die Antwort entspricht keinem Intercept der Sitzung. Der Client muss sie daher nicht fortsetzen.
- `navigation`
  - : Ein String mit der {{Glossary("UUID", "UUID")}}, die die Navigation, zu der die Anfrage gehört, eindeutig identifiziert, oder `null`, wenn es sich nicht um eine Navigationsanfrage handelt.
    Beispielsweise ist der Wert `null`, wenn Unterressourcen eines Dokuments wie Stylesheets und Skripte angefordert werden oder eine Anfrage mit `fetch()` gestellt wird.
    Wenn die Navigation mit dem Befehl [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) oder [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) gestartet wurde, entspricht diese ID dem Wert `navigation` in der Antwort des Befehls.
    Andere Ereignisse im Zusammenhang mit dieser Navigation haben dieselbe Navigations-ID, darunter Ereignisse der Module [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events) und [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#events).
- `redirectCount`
  - : Eine nicht negative Ganzzahl, die angibt, wie vielen Weiterleitungen der Browser für diese Anfrage gefolgt ist.
    Bei der ursprünglichen Anfrage ist der Wert `0`; mit jeder Weiterleitung erhöht er sich um eins.
- `request`
  - : Ein Objekt, das die [Anfrage](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#requests) beschreibt.
    Es enthält die folgenden Felder:
    - `bodySize`
      - : Eine nicht negative Ganzzahl, die die Größe des Anfragekörpers in Byte angibt, oder `null`, wenn die Anfrage keinen Körper hat.
    - `cookies`
      - : Ein Array aus Objekten, die jeweils ein mit der Anfrage gesendetes Cookie darstellen.
        Das Array ist leer, wenn die Anfrage keinen {{HTTPHeader("Cookie")}}-Header hat.
        Jedes Objekt enthält die folgenden Felder und kann zusätzlich browserspezifische Felder enthalten:
        - `domain`
          - : Ein String mit der Domain des Cookies.
        - `expiry` {{optional_inline}}
          - : Eine nicht negative Ganzzahl, die den Ablaufzeitpunkt des Cookies in Sekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) angibt.
            Dieses Feld fehlt bei Cookies ohne Ablaufzeitpunkt, etwa Sitzungscookies.
        - `httpOnly`
          - : Ein boolescher Wert, der angibt, ob das Cookie durch sein Attribut [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) vor Seitenskripten verborgen ist (`true`) oder ob diese darauf zugreifen können (`false`).
        - `name`
          - : Ein String mit dem Namen des Cookies.
        - `path`
          - : Ein String mit dem Pfad des Cookies.
        - `sameSite`
          - : Ein String, der die Einstellung [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) des Cookies angibt.
            Er hat einen der folgenden Werte:
            - `default`: Das Cookie hat kein Attribut `SameSite` oder dessen Wert wird nicht erkannt. Daher gilt das Standardverhalten des Browsers.
            - `lax`: Das Cookie hat `SameSite=Lax`.
            - `none`: Das Cookie hat `SameSite=None`.
            - `strict`: Das Cookie hat `SameSite=Strict`.
        - `secure`
          - : Ein boolescher Wert, der angibt, ob das Cookie durch sein Attribut [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) auf sichere Verbindungen beschränkt ist (`true`) oder auch über unsichere Verbindungen gesendet werden kann (`false`).
        - `size`
          - : Eine nicht negative Ganzzahl, die die Gesamtgröße des Cookie-Namens und -Werts in Byte angibt.
        - `value`
          - : Ein Objekt mit dem Wert des Cookies.
            Es enthält die folgenden Felder:
            - `type`
              - : Ein String, der angibt, wie der Cookie-Wert kodiert ist.
                Er hat einen der folgenden Werte:
                - `base64`: Der Wert besteht aus {{Glossary("Base64", "Base64")}}-kodierten Bytes, da die Bytes kein gültiges {{Glossary("UTF-8", "UTF-8")}} sind.
                - `string`: Der Wert ist Text, der aus UTF-8-Bytes dekodiert wurde.
            - `value`
              - : Ein String mit dem Cookie-Wert in der durch das Feld [`type`](#type) angegebenen Kodierung.
    - `destination`
      - : Ein String mit dem [Ziel](/de/docs/Web/API/Request/destination) der Anfrage, beispielsweise `document`, `script` oder `style`.
        Bei Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ist der String leer.
    - `headers`
      - : Ein Array aus Objekten, die jeweils einen Header der Anfrage darstellen, einschließlich der mit dem Befehl [`network.setExtraHeaders`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders) hinzugefügten Header.
        Jedes Objekt enthält die folgenden Felder:
        - `name`
          - : Ein String mit dem Header-Namen, beispielsweise `Accept`.
        - `value`
          - : Ein Objekt mit dem Header-Wert.
            Es enthält die folgenden Felder:
            - `type`
              - : Ein String, der angibt, wie der Header-Wert kodiert ist.
                Er hat einen der folgenden Werte:
                - `base64`: Der Wert besteht aus {{Glossary("Base64", "Base64")}}-kodierten Bytes, da die Bytes kein gültiges {{Glossary("UTF-8", "UTF-8")}} sind.
                - `string`: Der Wert ist Text, der aus UTF-8-Bytes dekodiert wurde.
            - `value`
              - : Ein String mit dem Header-Wert in der durch das Feld [`type`](#type_2) angegebenen Kodierung.
    - `headersSize`
      - : Eine nicht negative Ganzzahl, die die Größe der Anfrage-Header in Byte angibt.
        Bei Protokollen, die Header komprimieren, etwa HTTP/2, gibt sie die komprimierte Größe an.
    - `initiatorType`
      - : Ein String, der angibt, wodurch die Anfrage ausgelöst wurde, beispielsweise `fetch`, `link` oder `script`.
        Bei einer Anfrage ohne Initiatortyp, etwa der Anfrage für eine in einem Tab geladene Seite, ist der Wert `null` statt eines Strings.
        Beschreibungen gängiger Werte finden Sie unter [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType).
    - `method`
      - : Ein String mit der [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods), beispielsweise `GET` oder `POST`.
    - `request`
      - : Ein String mit der ID der [Anfrage](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#requests).
        Die ID bleibt auch dann gleich, wenn die Anfrage weitergeleitet wird.
    - `timings`
      - : Ein Objekt mit den Zeitpunkten, zu denen die einzelnen Phasen der Anfrage stattfanden.
        Das Feld [`timeOrigin`](#timeorigin) enthält einen Zeitpunkt in Millisekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
        Die anderen Felder dieses Objekts enthalten Zeitangaben in Millisekunden relativ zu `timeOrigin`.
        Ein Feld hat den Wert `0`, wenn seine Phase nicht stattgefunden hat, beispielsweise die Weiterleitungsfelder bei einer Anfrage, die nicht weitergeleitet wurde.
        Alle Felder haben den Wert `0`, wenn die Anfrage nicht von einem Dokument oder Worker gestellt wurde.
        Das Objekt enthält die folgenden Felder:
        - `connectEnd`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser den Verbindungsaufbau zum Server abgeschlossen hat, ähnlich wie [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd).
        - `connectStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser mit dem Verbindungsaufbau zum Server begonnen hat, ähnlich wie [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart).
        - `dnsEnd`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser die Auflösung des Domain-Namens abgeschlossen hat, ähnlich wie [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd).
        - `dnsStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser mit der Auflösung des Domain-Namens begonnen hat, ähnlich wie [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart).
        - `fetchStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser nach etwaigen Weiterleitungen mit dem Abrufen der Ressource begonnen hat, ähnlich wie [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart).
        - `redirectEnd`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser das letzte Byte der Antwort auf die letzte Weiterleitung empfangen hat, ähnlich wie [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd).
        - `redirectStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem die später weitergeleitete Anfrage ursprünglich gestartet wurde, ähnlich wie [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart).
        - `requestStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser mit dem Senden der Anfrage begonnen hat, ähnlich wie [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart).
        - `requestTime`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem die Anfrage gestartet wurde, ähnlich wie [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime).
        - `responseEnd`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser das letzte Byte der Antwort empfangen hat, ähnlich wie [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd).
        - `responseStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser das erste Byte der Antwort empfangen hat, ähnlich wie [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart).
        - `timeOrigin`
          - : Eine Zahl, die den [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin) des Dokuments oder Workers angibt, von dem die Anfrage gestellt wurde.
        - `tlsStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser den {{Glossary("TLS", "TLS")}}-Handshake zur Absicherung der Verbindung begonnen hat, ähnlich wie [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart).
    - `url`
      - : Ein String mit der URL der Anfrage.
- `response`
  - : Ein Objekt, das die Antwort beschreibt.
    Es enthält die folgenden Felder:
    - `authChallenges` {{optional_inline}}
      - : Ein Array aus Objekten, die jeweils eine [Authentifizierungsaufforderung](/de/docs/Web/HTTP/Guides/Authentication) des Servers darstellen.
        Dieses Feld ist nur enthalten, wenn der Antwortstatus `401` oder `407` ist.
        Die Aufforderungen stammen bei `401`-Antworten aus dem Header {{HTTPHeader("WWW-Authenticate")}} und bei `407`-Antworten aus dem Header {{HTTPHeader("Proxy-Authenticate")}}.
        Das Array ist leer, wenn die Antwort den entsprechenden Header nicht enthält.
        Jedes Objekt enthält die folgenden Felder:
        - `realm`
          - : Ein String mit dem [Realm](/de/docs/Web/HTTP/Guides/Authentication#www-authenticate_and_proxy-authenticate_headers) der Aufforderung oder ein leerer String, wenn die Aufforderung keinen Realm hat.
        - `scheme`
          - : Ein String mit dem [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes), beispielsweise `Basic`.
    - `bodySize`
      - : Eine nicht negative Ganzzahl, die die Größe des Antwortkörpers in Byte angibt, bevor der Browser ihn dekodiert (beispielsweise vor der Dekomprimierung), oder `null`, wenn der Browser sie nicht meldet.
        Wenn dieses Ereignis ausgelöst wird, ist der Antwortkörper möglicherweise noch nicht vollständig eingetroffen. Die endgültige Größe ist daher im Ereignis [`network.responseCompleted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) verfügbar.
    - `bytesReceived`
      - : Eine nicht negative Ganzzahl, die die Gesamtzahl der für die Antwort empfangenen Bytes einschließlich ihrer Header angibt.
        Bei einer Antwort aus dem Browser-Cache ist der Wert `0`.
    - `content`
      - : Ein Objekt, das den dekodierten Antwortkörper beschreibt.
        Es enthält das folgende Feld:
        - `size`
          - : Eine nicht negative Ganzzahl, die die Größe des Antwortkörpers in Byte angibt, nachdem der Browser ihn dekodiert hat (beispielsweise nach der Dekomprimierung).
    - `fromCache`
      - : Ein boolescher Wert, der angibt, ob der Browser die Antwort aus seinem Cache bereitgestellt hat.
        - `true`: Der Browser hat die Antwort aus seinem Cache bereitgestellt, ohne den Server zu kontaktieren.
        - `false`: Der Browser hat die Antwort nicht aus seinem Cache bereitgestellt.
          Dies schließt Fälle ein, in denen er den Server kontaktiert hat, um eine zwischengespeicherte Antwort erneut zu validieren.
    - `headers`
      - : Ein Array aus Objekten, die jeweils einen [Header](/de/docs/Web/HTTP/Reference/Headers) der Antwort darstellen.
        Jedes Objekt enthält die folgenden Felder:
        - `name`
          - : Ein String mit dem Header-Namen, beispielsweise `Content-Type`.
        - `value`
          - : Ein Objekt mit dem Header-Wert.
            Es enthält die folgenden Felder:
            - `type`
              - : Ein String, der angibt, wie der Header-Wert kodiert ist.
                Er hat einen der folgenden Werte:
                - `base64`: Der Wert besteht aus {{Glossary("Base64", "Base64")}}-kodierten Bytes, da die Bytes kein gültiges {{Glossary("UTF-8", "UTF-8")}} sind.
                - `string`: Der Wert ist Text, der aus UTF-8-Bytes dekodiert wurde.
            - `value`
              - : Ein String mit dem Header-Wert in der durch das Feld [`type`](#type_3) angegebenen Kodierung.
    - `headersSize`
      - : Eine nicht negative Ganzzahl, die die Größe der empfangenen Antwort-Header in Byte angibt, oder `null`, wenn der Browser sie nicht meldet.
    - `mimeType`
      - : Ein String mit dem {{Glossary("MIME_type", "MIME-Typ")}}, den der Browser für die Antwort verwendet, beispielsweise `text/html` oder `application/json`.
        Der Wert enthält keine MIME-Typ-Parameter.
        Er kann vom Header {{HTTPHeader("Content-Type")}} abweichen, beispielsweise wenn der Browser den Typ anhand des Inhalts bestimmt.
        Er kann auch ein leerer String sein, beispielsweise bei einer Weiterleitungsantwort.
    - `protocol`
      - : Ein String mit dem Protokoll der Antwort, beispielsweise `http/1.1` oder `h2`.
        Bei einer Antwort, die nicht über HTTP empfangen wurde, enthält er das Schema der Antwort-URL, beispielsweise `data`.
    - `status`
      - : Eine nicht negative Ganzzahl mit dem [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) der Antwort, beispielsweise `200`.
    - `statusText`
      - : Ein String mit der Statusmeldung der Antwort, beispielsweise `OK`.
    - `url`
      - : Ein String mit der URL der Antwort.
- `timestamp`
  - : Eine nicht negative Ganzzahl, die den Zeitpunkt der Ereignisauslösung in Millisekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) angibt.
- `userContext` {{optional_inline}}
  - : Ein String mit der ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts), in dem die Anfrage gestellt wurde, oder `null`, wenn die Anfrage nicht von einem Dokument in einem Kontext gestellt wurde.

## Beschreibung

Im [Lebenszyklus einer Anfrage](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#request_lifecycle) wird dieses Ereignis nach [`network.beforeRequestSent`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) und vor [`network.responseCompleted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) ausgelöst. Letzteres wird ausgelöst, wenn der Browser den vollständigen Antwortkörper empfangen hat.

Das Ereignis wird auch bei Weiterleitungsantworten und bei Antworten aus dem Browser-Cache ausgelöst.
Wenn die Anfrage nach diesem Ereignis fehlschlägt, beispielsweise weil die Seite sie abbricht, wird das Ereignis [`network.fetchError`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError) ausgelöst.
Bei einer Antwort, die eine Authentifizierung verlangt, kann anschließend das Ereignis [`network.authRequired`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired) ausgelöst werden.

Zu diesem Zeitpunkt enthält das Objekt `response` den Status und die Header. Die Felder, die den Antwortkörper beschreiben, etwa `bodySize`, `bytesReceived` und `content`, haben jedoch möglicherweise noch nicht ihre endgültigen Werte.

Wenn `isBlocked` den Wert `true` hat, wartet die Antwort, bis der Client sie mit dem Befehl [`network.continueResponse`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueResponse), [`network.failRequest`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest) oder [`network.provideResponse`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/provideResponse) fortsetzt.
Abhängig von den für jeden [Intercept](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) konfigurierten Phasen kann der Browser eine Antwort beim Auslösen von `network.responseStarted` blockieren, unabhängig davon, ob er die Anfrage beim Auslösen von `network.beforeRequestSent` blockiert hat.
Er kann die Anfrage auch beim Auslösen von `network.beforeRequestSent` blockieren, ohne die Antwort beim Auslösen von `network.responseStarted` zu blockieren.

## Beispiele

### Ein Ereignis beim Eintreffen der Antwort-Header empfangen

Angenommen, Sie verfügen über eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `network.responseStarted`.

Ein Tab hat `https://example.com/` geladen.
Der Browser hat für die Website ein Cookie namens `theme=dark`.
Die Seite ruft `fetch("/api/items")` auf, um eine Liste von Elementen als JSON zu laden.
Wenn die Antwort-Header eintreffen, sendet der Browser das folgende Ereignis (der Kürze halber wurde das Array `headers` im Objekt `request` gekürzt und einige seiner Felder wurden weggelassen):

```json
{
  "type": "event",
  "method": "network.responseStarted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "cookies": [
        {
          "domain": "example.com",
          "httpOnly": false,
          "name": "theme",
          "path": "/",
          "sameSite": "lax",
          "secure": false,
          "size": 9,
          "value": {
            "type": "string",
            "value": "dark"
          }
        }
      ],
      "destination": "",
      "headers": [
        {
          "name": "Host",
          "value": {
            "type": "string",
            "value": "example.com"
          }
        },
        {
          "name": "Accept",
          "value": {
            "type": "string",
            "value": "*/*"
          }
        }
      ],
      "headersSize": 401,
      "initiatorType": "fetch",
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://example.com/api/items"
    },
    "response": {
      "bodySize": 0,
      "bytesReceived": 188,
      "content": {
        "size": 0
      },
      "fromCache": false,
      "headers": [
        {
          "name": "Cache-Control",
          "value": {
            "type": "string",
            "value": "no-store"
          }
        },
        {
          "name": "Content-Type",
          "value": {
            "type": "string",
            "value": "application/json"
          }
        },
        {
          "name": "Date",
          "value": {
            "type": "string",
            "value": "Tue, 13 Oct 2026 14:58:02 GMT"
          }
        },
        {
          "name": "Connection",
          "value": {
            "type": "string",
            "value": "keep-alive"
          }
        },
        {
          "name": "Keep-Alive",
          "value": {
            "type": "string",
            "value": "timeout=5"
          }
        },
        {
          "name": "Transfer-Encoding",
          "value": {
            "type": "string",
            "value": "chunked"
          }
        }
      ],
      "headersSize": 188,
      "mimeType": "application/json",
      "protocol": "http/1.1",
      "status": 200,
      "statusText": "OK",
      "url": "https://example.com/api/items"
    },
    "timestamp": 1791903482441,
    "userContext": "default"
  }
}
```

Zu diesem Zeitpunkt hat der Browser die Antwort-Header empfangen, aber nicht unbedingt den Antwortkörper.
Die endgültigen Werte für `bytesReceived` und die Größen des Antwortkörpers stehen im Objekt `response` des Ereignisses [`network.responseCompleted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) mit derselben `request`-ID.

### Ein Ereignis für eine Antwort aus dem Cache empfangen

Angenommen, die Seite ruft mit derselben Verbindung, Sitzung und demselben Abonnement wie im ersten Beispiel dieselbe URL zweimal ab.
Der Server erlaubt dem Browser, die Antwort eine Stunde lang zwischenzuspeichern (`Cache-Control: max-age=3600`).
Bei der zweiten Anfrage stellt der Browser die Antwort aus seinem Cache bereit und sendet das folgende Ereignis (nur einige Felder sind dargestellt):

```json
{
  "type": "event",
  "method": "network.responseStarted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "request": "37cf22b4-f399-4450-828d-d54fce56004e",
      "url": "https://example.com/api/categories"
    },
    "response": {
      "bytesReceived": 0,
      "fromCache": true,
      "status": 200,
      "url": "https://example.com/api/categories"
    },
    "timestamp": 1791903483454
  }
}
```

Im Objekt `response` ist `fromCache` gleich `true` und `bytesReceived` gleich `0`, da nichts vom Server empfangen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignis [`network.beforeRequestSent`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent)
- Ereignis [`network.responseCompleted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted)
- Ereignis [`network.fetchError`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError)
- Ereignis [`network.authRequired`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
- Referenz zu [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
