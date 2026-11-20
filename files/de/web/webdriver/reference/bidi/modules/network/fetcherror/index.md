---
title: "`network.fetchError`-Ereignis"
short-title: fetchError
slug: Web/WebDriver/Reference/BiDi/Modules/network/fetchError
l10n:
  sourceCommit: 5f25f2ac2839bd19aa1e08345d4a4d4060e4a85c
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `network.fetchError` des Moduls [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network) wird ausgelöst, wenn eine Anfrage mit einem Fehler endet, beispielsweise weil der Host nicht erreichbar ist oder die Anfrage abgebrochen wird.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), in dem die Anfrage gestellt wurde, oder `null`, wenn die Anfrage nicht von einem Dokument in einem Kontext gestellt wurde, beispielsweise bei einer Anfrage durch einen Worker.
- `errorText`
  - : Ein String, der den Fehler beschreibt, etwa `NS_ERROR_UNKNOWN_HOST` oder `net::ERR_NAME_NOT_RESOLVED`, wenn ein Hostname nicht aufgelöst werden kann.
    Der Text ist browserspezifisch. Verlassen Sie sich bei Assertions in Tests daher nicht auf diesen Wert.
- `isBlocked`
  - : Ein boolescher Wert, der angibt, ob die Anfrage durch einen [Intercept](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) blockiert wird.
    Bei diesem Ereignis ist er immer `false`, da für das Ereignis keine Intercept-Phase gilt. Daher enthält das Ereignis niemals das Feld `intercepts`.
- `navigation`
  - : Ein String mit der {{Glossary("UUID", "UUID")}}, die die Navigation, zu der die Anfrage gehört, eindeutig identifiziert, oder `null`, wenn die Anfrage keine Navigationsanfrage ist.
    Beispielsweise ist der Wert `null`, wenn Unterressourcen eines Dokuments wie Stylesheets und Skripte angefordert werden oder wenn eine Anfrage mit `fetch()` gestellt wird.

    Bei einer fehlgeschlagenen Navigation enthält dieses Feld die Navigations-ID, die vom Ereignis [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) gemeldet wurde.

    Wenn die Navigation mit [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) gestartet wurde, kann der Befehl statt einer Navigations-ID einen Fehler zurückgeben.

    Andere Ereignisse im Zusammenhang mit dieser Navigation verwenden dieselbe Navigations-ID, darunter Ereignisse der Module [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events) und [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#events).
- `redirectCount`
  - : Eine nicht negative Ganzzahl mit der Anzahl der Weiterleitungen, denen der Browser für diese Anfrage gefolgt ist.
    Für die ursprüngliche Anfrage ist der Wert `0`; mit jeder Weiterleitung erhöht er sich um eins.
- `request`
  - : Ein Objekt, das die [Anfrage](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#requests) beschreibt.
    Es enthält die folgenden Felder:
    - `bodySize`
      - : Eine nicht negative Ganzzahl mit der Größe des Anfrage-Bodys in Byte oder `null`, wenn die Anfrage keinen Body hat.
    - `cookies`
      - : Ein Array von Objekten, die jeweils ein mit der Anfrage gesendetes Cookie darstellen.
        Das Array ist leer, wenn die Anfrage keinen {{HTTPHeader("Cookie")}}-Header hat.
        Jedes Objekt enthält die folgenden Felder und kann zusätzlich browserspezifische Felder enthalten:
        - `domain`
          - : Ein String mit der Domain des Cookies.
        - `expiry` {{optional_inline}}
          - : Eine nicht negative Ganzzahl mit dem Ablaufzeitpunkt des Cookies in Sekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
            Bei einem Cookie ohne Ablaufzeitpunkt, beispielsweise einem Sitzungscookie, fehlt dieses Feld.
        - `httpOnly`
          - : Ein boolescher Wert, der angibt, ob das Cookie durch sein [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly)-Attribut vor Seitenskripten verborgen ist (`true`) oder ob diese darauf zugreifen können (`false`).
        - `name`
          - : Ein String mit dem Namen des Cookies.
        - `path`
          - : Ein String mit dem Pfad des Cookies.
        - `sameSite`
          - : Ein String, der die [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Einstellung des Cookies angibt.
            Er hat einen der folgenden Werte:
            - `default`: Das Cookie hat kein `SameSite`-Attribut oder einen nicht erkannten Wert. Daher gilt das Standardverhalten des Browsers.
            - `lax`: Das Cookie hat `SameSite=Lax`.
            - `none`: Das Cookie hat `SameSite=None`.
            - `strict`: Das Cookie hat `SameSite=Strict`.
        - `secure`
          - : Ein boolescher Wert, der angibt, ob das Cookie durch sein [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure)-Attribut auf sichere Verbindungen beschränkt ist (`true`) oder auch über unsichere Verbindungen gesendet werden kann (`false`).
        - `size`
          - : Eine nicht negative Ganzzahl mit der Gesamtgröße von Name und Wert des Cookies in Byte.
        - `value`
          - : Ein Objekt mit dem Wert des Cookies.
            Es enthält die folgenden Felder:
            - `type`
              - : Ein String, der angibt, wie der Cookie-Wert kodiert ist.
                Er hat einen der folgenden Werte:
                - `base64`: Der Wert besteht aus {{Glossary("Base64", "Base64")}}-kodierten Bytes, weil die Bytes kein gültiges {{Glossary("UTF-8", "UTF-8")}} sind.
                - `string`: Der Wert ist Text, der aus UTF-8-Bytes dekodiert wurde.
            - `value`
              - : Ein String mit dem Cookie-Wert in der durch das Feld [`type`](#type) angegebenen Kodierung.
    - `destination`
      - : Ein String mit dem [Ziel](/de/docs/Web/API/Request/destination) der Anfrage, beispielsweise `document`, `script` oder `style`.
        Bei Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ist der String leer.
    - `headers`
      - : Ein Array von Objekten, die jeweils einen Header der Anfrage darstellen, einschließlich der mit dem Befehl [`network.setExtraHeaders`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders) hinzugefügten Header.
        Jedes Objekt enthält die folgenden Felder:
        - `name`
          - : Ein String mit dem Header-Namen, beispielsweise `Accept`.
        - `value`
          - : Ein Objekt mit dem Header-Wert.
            Es enthält die folgenden Felder:
            - `type`
              - : Ein String, der angibt, wie der Header-Wert kodiert ist.
                Er hat einen der folgenden Werte:
                - `base64`: Der Wert besteht aus {{Glossary("Base64", "Base64")}}-kodierten Bytes, weil die Bytes kein gültiges {{Glossary("UTF-8", "UTF-8")}} sind.
                - `string`: Der Wert ist Text, der aus UTF-8-Bytes dekodiert wurde.
            - `value`
              - : Ein String mit dem Header-Wert in der durch das Feld [`type`](#type_2) angegebenen Kodierung.
    - `headersSize`
      - : Eine nicht negative Ganzzahl mit der Größe der Anfrage-Header in Byte.
        Bei Protokollen, die Header komprimieren, beispielsweise HTTP/2, gibt sie die komprimierte Größe an.
    - `initiatorType`
      - : Ein String, der angibt, wodurch die Anfrage ausgelöst wurde, beispielsweise `fetch`, `link` oder `script`.
        Bei einer Anfrage ohne Initiatortyp, etwa der Anfrage für eine in einem Tab geladene Seite, ist der Wert `null` statt eines Strings.
        Beschreibungen häufiger Werte finden Sie unter [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType).
    - `method`
      - : Ein String mit der [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods), beispielsweise `GET` oder `POST`.
    - `request`
      - : Ein String mit der ID der [Anfrage](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#requests).
        Die ID bleibt auch dann gleich, wenn die Anfrage weitergeleitet wird.
    - `timings`
      - : Ein Objekt mit den Zeitpunkten, zu denen die einzelnen Phasen der Anfrage stattgefunden haben.
        Das Feld [`timeOrigin`](#timeorigin) enthält einen Zeitpunkt in Millisekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
        Die anderen Felder dieses Objekts enthalten Zeitangaben in Millisekunden relativ zu `timeOrigin`.
        Ein Feld hat den Wert `0`, wenn die entsprechende Phase nicht stattgefunden hat, beispielsweise die Weiterleitungsfelder bei einer Anfrage, die nicht weitergeleitet wurde.
        Alle Felder haben den Wert `0`, wenn die Anfrage nicht von einem Dokument oder Worker gestellt wurde.
        Das Objekt enthält die folgenden Felder:
        - `connectEnd`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser den Verbindungsaufbau zum Server abgeschlossen hat, ähnlich wie [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd).
        - `connectStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser mit dem Verbindungsaufbau zum Server begonnen hat, ähnlich wie [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart).
        - `dnsEnd`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser die Auflösung des Domainnamens abgeschlossen hat, ähnlich wie [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd).
        - `dnsStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser mit der Auflösung des Domainnamens begonnen hat, ähnlich wie [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart).
        - `fetchStart`
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser nach etwaigen Weiterleitungen mit dem Abrufen der Ressource begonnen hat, ähnlich wie [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart).
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
          - : Eine Zahl, die den Zeitpunkt angibt, zu dem der Browser den {{Glossary("TLS", "TLS")}}-Handshake zur Absicherung der Verbindung begonnen hat, ähnlich wie [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart).
    - `url`
      - : Ein String mit der URL der Anfrage.
- `timestamp`
  - : Eine nicht negative Ganzzahl, die den Zeitpunkt angibt, zu dem das Ereignis ausgelöst wurde, in Millisekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `userContext` {{optional_inline}}
  - : Ein String mit der ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts), in dem die Anfrage gestellt wurde, oder `null`, wenn die Anfrage nicht von einem Dokument in einem Kontext gestellt wurde.

## Beschreibung

Im [Lebenszyklus einer Anfrage](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#request_lifecycle) ist dies das letzte Ereignis einer fehlgeschlagenen Anfrage.
Es kann jederzeit nach [`network.beforeRequestSent`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) ausgelöst werden, beispielsweise:

- Bevor eine Antwort eintrifft, wenn der Browser den Hostnamen nicht auflösen kann oder der Server die Verbindung ablehnt
- Nach [`network.responseStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted), wenn die Seite die Anfrage abbricht, während der Browser noch den Antwort-Body empfängt, beispielsweise mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal)

Wenn der Client beide Ereignisse abonniert hat, empfängt er `network.beforeRequestSent` vor `network.fetchError`, selbst wenn die Anfrage fehlschlägt, bevor sie gesendet wird.
Dieses Ereignis hat kein Feld `response`, auch wenn `network.responseStarted` für die Anfrage ausgelöst wurde.

Wenn eine Navigation fehlschlägt, können Sie die Navigations-ID dieses Ereignisses verwenden, um es dem entsprechenden Ereignis [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) zuzuordnen.

## Beispiele

### Ein Ereignis empfangen, wenn ein Host nicht erreichbar ist

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `network.fetchError`.

Ein Tab hat `https://example.com/` geladen.
Die Seite ruft `fetch("https://unknown.invalid/items")` auf.
Die Domain `.invalid` kann nicht aufgelöst werden, sodass die Anfrage fehlschlägt.
Der Browser sendet das folgende Ereignis (der Kürze halber wurde das Array `headers` gekürzt und einige Felder im Objekt `request` wurden weggelassen):

```json
{
  "type": "event",
  "method": "network.fetchError",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "errorText": "NS_ERROR_UNKNOWN_HOST",
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "cookies": [],
      "destination": "",
      "headers": [
        {
          "name": "Host",
          "value": {
            "type": "string",
            "value": "unknown.invalid"
          }
        },
        {
          "name": "Accept",
          "value": {
            "type": "string",
            "value": "*/*"
          }
        },
        {
          "name": "Origin",
          "value": {
            "type": "string",
            "value": "https://example.com"
          }
        }
      ],
      "headersSize": 326,
      "initiatorType": "fetch",
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://unknown.invalid/items"
    },
    "timestamp": 1791903586722,
    "userContext": "default"
  }
}
```

`errorText` beschreibt die fehlgeschlagene Auflösung des Domainnamens.
Auf der Seite wird der `fetch()`-Aufruf mit einem {{jsxref("TypeError")}} zurückgewiesen.

### Ein Ereignis empfangen, wenn eine Navigation fehlschlägt

Angenommen, Sie verwenden dieselbe Verbindung, Sitzung und dasselbe Abonnement wie im ersten Beispiel und haben außerdem [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) abonniert.

Sie verwenden [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), um `https://example.com:59999/` zu laden. Auf diesem Port lauscht kein Server.

Der Browser sendet ein `browsingContext.navigationStarted`-Ereignis mit der Navigations-ID:

```json
{
  "type": "event",
  "method": "browsingContext.navigationStarted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1791903594250,
    "url": "https://example.com:59999/",
    "userContext": "default"
  }
}
```

Wenn der Server die Verbindung ablehnt, sendet der Browser das folgende `network.fetchError`-Ereignis mit derselben Navigations-ID (nur einige Felder sind dargestellt):

```json
{
  "type": "event",
  "method": "network.fetchError",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "errorText": "NS_ERROR_CONNECTION_REFUSED",
    "isBlocked": false,
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "redirectCount": 0,
    "request": {
      "destination": "document",
      "method": "GET",
      "request": "37cf22b4-f399-4450-828d-d54fce56004e",
      "url": "https://example.com:59999/"
    },
    "timestamp": 1791903594254
  }
}
```

Der Befehl `browsingContext.navigate` gibt einen `unknown error` ohne Navigations-ID zurück.
Um dieses Ereignis der Navigation zuzuordnen, verwenden Sie die ID im Feld `navigation` des Ereignisses `browsingContext.navigationStarted`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignis [`network.beforeRequestSent`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent)
- Ereignis [`network.responseStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted)
- Ereignis [`network.responseCompleted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted)
- Ereignis [`network.authRequired`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired)
- Ereignis [`browsingContext.navigationFailed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
