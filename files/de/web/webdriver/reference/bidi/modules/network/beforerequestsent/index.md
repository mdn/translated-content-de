---
title: "`network.beforeRequestSent`-Ereignis"
short-title: beforeRequestSent
slug: Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent
l10n:
  sourceCommit: 5f25f2ac2839bd19aa1e08345d4a4d4060e4a85c
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `network.beforeRequestSent` des Moduls [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network) wird ausgelöst, bevor der Browser eine Anfrage über das Netzwerk sendet oder sie mithilfe seines Caches oder eines Service Workers verarbeitet.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), in dem die Anfrage gestellt wurde, oder `null`, wenn die Anfrage nicht von einem Dokument in einem Kontext stammt, beispielsweise bei einer Anfrage eines Workers.
- `initiator` {{optional_inline}}
  - : Ein Objekt, das den JavaScript-Code beschreibt, der die Anfrage ausgelöst hat.
    Der Browser fügt es bei Anfragen hinzu, die mit [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellt wurden.
    Es kann die folgenden Felder enthalten:
    - `columnNumber` {{optional_inline}}
      - : Eine nicht negative Ganzzahl mit der nullbasierten Spaltennummer des Codes, der die Anfrage ausgelöst hat, oder `0`, wenn der Stack-Trace leer ist.
    - `lineNumber` {{optional_inline}}
      - : Eine nicht negative Ganzzahl mit der nullbasierten Zeilennummer des Codes, der die Anfrage ausgelöst hat, oder `0`, wenn der Stack-Trace leer ist.
    - `stackTrace` {{optional_inline}}
      - : Ein Objekt, das den JavaScript-Stack zum Zeitpunkt der Anfrage darstellt.
        Es enthält das folgende Feld:
        - `callFrames`
          - : Ein Array aus null oder mehr Stack-Frame-Objekten, beginnend mit dem jüngsten Aufruf.
            Jedes Objekt enthält die folgenden Felder:
            - `columnNumber`
              - : Eine nicht negative Ganzzahl mit der nullbasierten Spaltennummer des ausgeführten Codes.
            - `functionName`
              - : Ein String mit dem Namen der ausgeführten Funktion.
            - `lineNumber`
              - : Eine nicht negative Ganzzahl mit der nullbasierten Zeilennummer des ausgeführten Codes.
            - `url`
              - : Ein String mit der URL des Skripts.
- `intercepts` {{optional_inline}}
  - : Ein Array aus einem oder mehreren Strings, die jeweils die ID eines [Intercepts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) enthalten, der die Anfrage blockiert.
    Dieses Feld ist nur enthalten, wenn `isBlocked` den Wert `true` hat.
    Intercept-IDs werden vom Befehl [`network.addIntercept`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept) zurückgegeben.
- `isBlocked`
  - : Ein boolescher Wert, der angibt, ob die Anfrage durch einen [Intercept](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) blockiert wird.
    - `true`: Die Anfrage entspricht einem oder mehreren im Feld `intercepts` aufgeführten Intercepts und wird blockiert.
      Der Browser sendet die Anfrage erst, wenn der Client sie fortsetzt, beispielsweise mit dem Befehl [`network.continueRequest`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest).
    - `false`: Die Anfrage entspricht keinem Intercept der Sitzung. Der Client muss sie daher nicht fortsetzen.
- `navigation`
  - : Ein String mit der {{Glossary("UUID", "UUID")}}, die die Navigation, zu der die Anfrage gehört, eindeutig identifiziert, oder `null`, wenn die Anfrage keine Navigationsanfrage ist.
    Beispielsweise ist der Wert `null`, wenn Unterressourcen eines Dokuments wie Stylesheets und Skripte angefordert werden oder eine Anfrage mit `fetch()` gestellt wird.
    Wenn die Navigation mit dem Befehl [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) oder [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) gestartet wurde, entspricht diese ID dem Wert `navigation` in der Antwort des Befehls.
    Andere Ereignisse im Zusammenhang mit dieser Navigation haben dieselbe Navigations-ID, darunter Ereignisse der Module [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events) und [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#events).
- `redirectCount`
  - : Eine nicht negative Ganzzahl mit der Anzahl der Weiterleitungen, denen der Browser bei dieser Anfrage gefolgt ist.
    Für die ursprüngliche Anfrage beträgt sie `0` und erhöht sich mit jeder Weiterleitung um eins.
- `request`
  - : Ein Objekt, das die [Anfrage](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#requests) beschreibt.
    Es enthält die folgenden Felder:
    - `bodySize`
      - : Eine nicht negative Ganzzahl mit der Größe des Anfrage-Bodys in Bytes oder `null`, wenn die Anfrage keinen Body hat.
    - `cookies`
      - : Ein Array aus Objekten, die jeweils ein mit der Anfrage gesendetes Cookie darstellen.
        Das Array ist leer, wenn die Anfrage keinen {{HTTPHeader("Cookie")}}-Header hat.
        Jedes Objekt enthält die folgenden Felder und kann zusätzlich browserspezifische Felder enthalten:
        - `domain`
          - : Ein String mit der Domain des Cookies.
        - `expiry` {{optional_inline}}
          - : Eine nicht negative Ganzzahl mit dem Ablaufzeitpunkt des Cookies in Sekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
            Bei einem Cookie ohne Ablaufzeitpunkt, etwa einem Session-Cookie, fehlt dieses Feld.
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
          - : Eine nicht negative Ganzzahl mit der Gesamtgröße von Name und Wert des Cookies in Bytes.
        - `value`
          - : Ein Objekt, das den Wert des Cookies enthält.
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
      - : Ein Array aus Objekten, die jeweils einen Header der Anfrage darstellen. Dazu gehören auch Header, die mit dem Befehl [`network.setExtraHeaders`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders) hinzugefügt wurden.
        Jedes Objekt enthält die folgenden Felder:
        - `name`
          - : Ein String mit dem Header-Namen, beispielsweise `Accept`.
        - `value`
          - : Ein Objekt mit dem Header-Wert.
            Es enthält die folgenden Felder:
            - `type`
              - : Ein String, der angibt, wie der Header-Wert codiert ist.
                Er hat einen der folgenden Werte:
                - `base64`: Der Wert besteht aus {{Glossary("Base64", "Base64")}}-codierten Bytes, weil die Bytes kein gültiges {{Glossary("UTF-8", "UTF-8")}} sind.
                - `string`: Der Wert ist Text, der aus UTF-8-Bytes decodiert wurde.
            - `value`
              - : Ein String mit dem Header-Wert in der durch das Feld [`type`](#type_2) angegebenen Codierung.
    - `headersSize`
      - : Eine nicht negative Ganzzahl mit der Größe der Anfrage-Header in Bytes.
        Bei Protokollen, die Header komprimieren, etwa HTTP/2, gibt sie die komprimierte Größe an.
    - `initiatorType`
      - : Ein String, der angibt, wodurch die Anfrage ausgelöst wurde, beispielsweise `fetch`, `link` oder `script`.
        Bei einer Anfrage ohne Initiatortyp, etwa der Anfrage für eine in einem Tab geladene Seite, ist der Wert `null` statt eines Strings.
        Beschreibungen häufiger Werte finden Sie unter [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType).
    - `method`
      - : Ein String mit der [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods), beispielsweise `GET` oder `POST`.
    - `request`
      - : Ein String mit der ID der [Anfrage](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#requests).
        Die ID bleibt auch bei einer Weiterleitung der Anfrage gleich.
    - `timings`
      - : Ein Objekt mit den Zeitpunkten, zu denen die Phasen der Anfrage stattgefunden haben.
        Das Feld [`timeOrigin`](#timeorigin) enthält eine Zeit in Millisekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
        Die anderen Felder dieses Objekts enthalten Zeiten in Millisekunden relativ zu `timeOrigin`.
        Ein Feld hat den Wert `0`, wenn seine Phase nicht stattgefunden hat, beispielsweise die Weiterleitungsfelder bei einer Anfrage ohne Weiterleitung.
        Alle Felder haben den Wert `0`, wenn die Anfrage nicht von einem Dokument oder Worker stammt.
        Das Objekt enthält die folgenden Felder:
        - `connectEnd`
          - : Eine Zahl für den Zeitpunkt, zu dem der Browser den Verbindungsaufbau zum Server abgeschlossen hat, ähnlich wie [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd).
        - `connectStart`
          - : Eine Zahl für den Zeitpunkt, zu dem der Browser mit dem Verbindungsaufbau zum Server begonnen hat, ähnlich wie [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart).
        - `dnsEnd`
          - : Eine Zahl für den Zeitpunkt, zu dem der Browser die Domainnamenauflösung abgeschlossen hat, ähnlich wie [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd).
        - `dnsStart`
          - : Eine Zahl für den Zeitpunkt, zu dem der Browser mit der Domainnamenauflösung begonnen hat, ähnlich wie [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart).
        - `fetchStart`
          - : Eine Zahl für den Zeitpunkt, zu dem der Browser nach etwaigen Weiterleitungen mit dem Abrufen der Ressource begonnen hat, ähnlich wie [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart).
        - `redirectEnd`
          - : Eine Zahl für den Zeitpunkt, zu dem der Browser das letzte Byte der Antwort auf die letzte Weiterleitung empfangen hat, ähnlich wie [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd).
        - `redirectStart`
          - : Eine Zahl für den Zeitpunkt, zu dem die später weitergeleitete Anfrage ursprünglich begonnen hat, ähnlich wie [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart).
        - `requestStart`
          - : Eine Zahl für den Zeitpunkt, zu dem der Browser mit dem Senden der Anfrage begonnen hat, ähnlich wie [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart).
        - `requestTime`
          - : Eine Zahl für den Zeitpunkt, zu dem die Anfrage begonnen hat, ähnlich wie [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime).
        - `responseEnd`
          - : Eine Zahl für den Zeitpunkt, zu dem der Browser das letzte Byte der Antwort empfangen hat, ähnlich wie [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd).
        - `responseStart`
          - : Eine Zahl für den Zeitpunkt, zu dem der Browser das erste Byte der Antwort empfangen hat, ähnlich wie [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart).
        - `timeOrigin`
          - : Eine Zahl, die den [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin) des Dokuments oder Workers darstellt, das bzw. der die Anfrage gestellt hat.
        - `tlsStart`
          - : Eine Zahl für den Zeitpunkt, zu dem der Browser mit dem {{Glossary("TLS", "TLS")}}-Handshake zur Absicherung der Verbindung begonnen hat, ähnlich wie [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart).
    - `url`
      - : Ein String mit der URL der Anfrage.
- `timestamp`
  - : Eine nicht negative Ganzzahl, die den Zeitpunkt der Auslösung des Ereignisses in Millisekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) angibt.
- `userContext` {{optional_inline}}
  - : Ein String mit der ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts), in dem die Anfrage gestellt wurde, oder `null`, wenn die Anfrage nicht von einem Dokument in einem Kontext stammt.

## Beschreibung

Im [Lebenszyklus einer Anfrage](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network#request_lifecycle) ist dies das erste Ereignis.
Darauf folgt das Ereignis [`network.responseStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted), wenn der Browser die Antwort-Header empfängt.
Das Ereignis [`network.responseCompleted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) wird ausgelöst, nachdem der Browser die vollständige Antwort empfangen hat.
Wenn die Anfrage zu irgendeinem Zeitpunkt fehlschlägt, wird [`network.fetchError`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError) als letztes Ereignis für die Anfrage ausgelöst.

Wenn Sie dieses Ereignis abonniert haben, erhalten Sie es immer vor allen anderen Ereignissen für dieselbe Anfrage, selbst wenn die Anfrage fehlschlägt, bevor sie gesendet wird.

Das Ereignis wird für jede Weiterleitung erneut ausgelöst.
Die Anfrage-ID bleibt gleich und `redirectCount` erhöht sich um eins.

Wenn `isBlocked` den Wert `true` hat, wartet die Anfrage, bis der Client sie mit dem Befehl [`network.continueRequest`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest), [`network.failRequest`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest) oder [`network.provideResponse`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/provideResponse) fortsetzt.

## Beispiele

### Anfragen einer Navigation zuordnen

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `network.beforeRequestSent`.

Sie verwenden [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), um `https://example.com/` in einem Tab zu laden.
Die Seite lädt ein Stylesheet und ein Skript.
Der Browser hat von einem früheren Besuch bereits ein Cookie `theme=dark` für die Website.
Der Befehl, bei dem [`wait`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate#wait) auf `complete` gesetzt ist, gibt die Navigations-ID zurück. Seine Antwort trifft jedoch erst nach dem Ereignis für die Seitenanfrage ein.

Bevor der Browser die Seite anfordert, sendet er das folgende Ereignis mit derselben Navigations-ID (der Kürze halber wurde das Array `headers` gekürzt und einige Felder im Objekt `request` wurden weggelassen):

```json
{
  "type": "event",
  "method": "network.beforeRequestSent",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
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
      "destination": "document",
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
            "value": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
          }
        },
        {
          "name": "Cookie",
          "value": {
            "type": "string",
            "value": "theme=dark"
          }
        },
        {
          "name": "Sec-Fetch-Dest",
          "value": {
            "type": "string",
            "value": "document"
          }
        }
      ],
      "initiatorType": null,
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://example.com/"
    },
    "timestamp": 1791903609108,
    "userContext": "default"
  }
}
```

Anschließend sendet der Browser für jede von der Seite geladene Unterressource ein Ereignis, beispielsweise für ihr Stylesheet.
Diese Anfragen haben keine Navigations-ID (nur einige Felder sind dargestellt):

```json
{
  "type": "event",
  "method": "network.beforeRequestSent",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "destination": "style",
      "initiatorType": "link",
      "method": "GET",
      "request": "37cf22b4-f399-4450-828d-d54fce56004e",
      "url": "https://example.com/style.css"
    },
    "timestamp": 1791903609130
  }
}
```

Um die Ereignisse der Navigation zuzuordnen, bewahren Sie sie auf, bis die Antwort des Befehls eintrifft, und vergleichen Sie dann ihr Feld `navigation` mit der ID in der Antwort.
Nur die Seitenanfrage hat eine übereinstimmende ID.
Bei Anfragen für ihre Unterressourcen hat `navigation` den Wert `null`.

### Ein Ereignis für eine von einem Skript gestellte Anfrage empfangen

Angenommen, das Skript `/app.js` der Seite enthält eine Funktion, die mit `fetch()` einen Eintrag zu einer Liste hinzufügt. Sie verwenden dabei dieselbe Verbindung, Sitzung und dasselbe Abonnement wie im ersten Beispiel:

```js
function addItem(name) {
  return fetch("/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  }).then((response) => response.json());
}
```

Wenn die Seite `addItem("Pen")` aufruft, sendet der Browser vor dem Senden der Anfrage das folgende Ereignis (nur einige Felder sind dargestellt):

```json
{
  "type": "event",
  "method": "network.beforeRequestSent",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "initiator": {
      "columnNumber": 9,
      "lineNumber": 1,
      "stackTrace": {
        "callFrames": [
          {
            "columnNumber": 9,
            "functionName": "addItem",
            "lineNumber": 1,
            "url": "https://example.com/app.js"
          }
        ]
      }
    },
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "bodySize": 14,
      "destination": "",
      "initiatorType": "fetch",
      "method": "POST",
      "request": "ef49027d-aa97-44e4-bbe6-6ff8dbaa0c97",
      "url": "https://example.com/api/items"
    },
    "timestamp": 1791903609159
  }
}
```

`initiator` verweist auf den Aufruf von `fetch()` in `addItem()` in Zeile 1 und Spalte 9 von `/app.js`, jeweils nullbasiert gezählt.
Im Objekt `request` zeigen der `initiatorType` mit dem Wert `fetch` und das leere Feld `destination` an, dass ein Skript die Anfrage gestellt hat.
Das Feld `bodySize` enthält die Größe des JSON-Bodys `{"name":"Pen"}` in Bytes.
Bewahren Sie die ID `request` auf, um diese Anfrage den folgenden Ereignissen zuzuordnen, beispielsweise [`network.responseCompleted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignis [`network.responseStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted)
- Ereignis [`network.responseCompleted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted)
- Ereignis [`network.fetchError`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError)
- Ereignis [`network.authRequired`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired)
- Ereignis [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
