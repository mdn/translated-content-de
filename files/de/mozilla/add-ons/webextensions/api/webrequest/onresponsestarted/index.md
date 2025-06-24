---
title: webRequest.onResponseStarted
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onResponseStarted
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn das erste Byte des Antwortkörpers empfangen wird.

Dieses Ereignis ist nur informativ.

## Syntax

```js-nolint
browser.webRequest.onResponseStarted.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onResponseStarted.removeListener(listener)
browser.webRequest.onResponseStarted.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zuzuhören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen, ob der `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `details`
      - : `object`. Details zur Anfrage. Weitere Informationen finden Sie im Abschnitt [details](#details).

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen einzigen Wert übergeben:
    - `"responseHeaders"`: beinhalten `responseHeaders` im `details`-Objekt, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab stammt, das in einer kontextuellen Identität geöffnet ist, ist dies die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn beispielsweise die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, dann wird die `documentUrl` für das Bild oder iframe "https\://example.com" sein. Für ein Hauptdokument ist `documentUrl` undefiniert.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplattencache abgerufen wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Fenster stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann sich um eine wörtliche IPv6-Adresse handeln.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Beispielsweise, wenn "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer, die gleiche wie die `documentUrl`. Wenn zum Beispiel eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument im iframe lädt, dann wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes sein, aber die `originUrl` wird die URL des Dokuments im iframe sein, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf -1 festgelegt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage weitergeleitet wird. Sie enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`

      - : `string`. Der Typ des Proxy-Servers. Einer von:
        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxying über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": Kein Proxy
        - "unknown": Unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die DNS-Auflösung basierend auf dem angegebenen Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Ausfallzeitüberschreitung in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browser-Sitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zuzuordnen, die mit derselben Anfrage verbunden sind.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die zusammen mit dieser Antwort empfangen wurden.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort oder der 'HTTP/0.9 200 OK'-String für HTTP/0.9-Antworten (d.h. Antworten, die keine Statuszeile enthalten) oder ein leerer String, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage erfolgt. Auf -1 festgelegt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltfensterhierarchie von Dritten stammt.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art der mit der Anfrage verbundenen Verfolgung, wenn die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit folgenden Eigenschaften:

    - `firstParty`
      - : `array` von `string`. Klassifikationsflags für die First-Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflags für die Dritte-Personen der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifikationsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage am Fingerprinting beteiligt ist ("ein Ursprung, der zum Fingerprinting gefunden wurde").
      - `fingerprinting` zeigt an, dass die Domain zur Fingerprinting- und Tracking-Kategorie gehört. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain zur Fingerprinting-Kategorie gehört, aber nicht zur Tracking-Kategorie. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den Benutzer zum Zwecke der Betrugsbekämpfung zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, aber für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede generische Tracking-Anfrage, die `ad`, `analytics`, `social` und `content`-Suffixe identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage am Tracking von E-Mails beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Tracker-Typen finden Sie auf der Website von [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers). Das Suffix `content` zeigt Tracker an, die Inhalte nachverfolgen und bereitstellen. Diese zu blockieren schützt Benutzer, kann aber dazu führen, dass Websites nicht korrekt funktionieren oder Elemente nicht angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
let target = "https://developer.mozilla.org/*";

/*
e.g.
"https://developer.mozilla.org/en-US/Firefox/Releases"
200
HTTP/1.1 200 OK
*/
function logResponse(responseDetails) {
  console.log(responseDetails.url);
  console.log(responseDetails.statusCode);
  console.log(responseDetails.statusLine);
}

browser.webRequest.onResponseStarted.addListener(logResponse, {
  urls: [target],
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onResponseStarted) API. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
