---
title: webRequest.onSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onSendHeaders
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Dieses Ereignis wird unmittelbar vor dem Versenden von Headern ausgelöst. Wenn Ihre Erweiterung oder eine andere Erweiterung Header im {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} modifiziert hat, werden Sie hier die modifizierte Version sehen.

Dieses Ereignis dient ausschließlich zu Informationszwecken.

## Syntax

```js-nolint
browser.webRequest.onSendHeaders.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onSendHeaders.removeListener(listener)
browser.webRequest.onSendHeaders.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu lauschen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details über die Anfrage. Siehe den [Details](#details)-Abschnitt für mehr Informationen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können hier nur einen Wert übergeben:
    - `"requestHeaders"`: schließen Sie die Anforderungsheader im `details`-Objekt ein, das an den Listener übergeben wird.

## Zusätzliche Objekte

### details

- `documentId` {{optional_inline}}
  - : `string`. Die UUID des Dokuments, das die Anfrage macht. Siehe den Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für mehr Informationen.
- `documentLifecycle`
  - : `string`. Der Lebenszyklus des Dokuments. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.
- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab geöffnet in einer kontextuellen Identität stammt, die Cookie-Store-ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für mehr Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn z.B. die Webseite bei "https\://example.com" ein Bild oder ein Iframe enthält, dann ist die `documentUrl` für das Bild oder das Iframe "https\://example.com". Für ein Top-Level-Dokument ist `documentUrl` undefiniert.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `frameType`
  - : `string`. Der Typ des Rahmens, in dem die Anfrage erfolgt ist. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"` zurück.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browsing-Fenster stammt.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Beispielsweise, wenn "https\://example.com" einen Link enthält und der Benutzer den Link anklickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer die gleiche wie die `documentUrl`. Wenn eine Seite z.B. ein Iframe enthält und das Iframe einen Link enthält, der ein neues Dokument in das Iframe lädt, dann ist die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des Iframes, aber die `originUrl` ist die URL des Dokuments im Iframe, das den Link enthielt.

- `parentDocumentId` {{optional_inline}}
  - : `string`. Eine UUID des übergeordneten Dokuments, dem der Frame gehört. Nicht gesetzt, wenn es kein übergeordnetes Dokument gibt. Siehe den Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für mehr Informationen.
- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy erfolgt. Sie enthält folgende Eigenschaften:
    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`
      - : `string`. Der Typ des Proxy-Servers. Einer von:
        - "http": HTTP Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxying über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die Namensauflösung basierend auf dem bereitgestellten Hostnamen übernimmt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Ausfallüberbrückungs-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy während dieser Periode nicht wieder verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zuzuordnen, die mit derselben Anfrage verbunden sind.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anforderungsheader, die mit dieser Anfrage gesendet wurden.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab in Verbindung steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie eine Drittpartei betrifft.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: z.B. "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Die Art der Verfolgung, die mit der Anfrage verbunden ist, wenn die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifizierungs-Flags für die Erstanbieteranfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifizierungs-Flags für die Anfrage oder die Drittanbieter ihrer Fensterhierarchie.

    Die Klassifizierungs-Flags umfassen:
    - `fingerprinting` und `fingerprinting_content`: gibt an, dass die Anfrage beim Fingerprinting beteiligt ist ("ein Ursprung, der Fingerprinting gefunden wurde").
      - `fingerprinting` gibt an, dass die Domain in der Kategorie Fingerprinting und Verfolgung ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer in Verbindung bringen möchten.
      - `fingerprinting_content` gibt an, dass die Domain in der Kategorie Fingerprinting, aber nicht in der Verfolgungskategorie ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zur Betrugsbekämpfung zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Kategorie Fingerprinting, aber für Crypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: gibt an, dass die Anfrage bei der Verfolgung beteiligt ist. `tracking` ist jede generische Verfolgungsanfrage, die `ad`, `analytics`, `social` und `content` Suffixe identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: gibt an, dass die Anfrage bei der Verfolgung von E-Mails beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Verfolgungs- und Fingerprinting-Flags kombiniert, ausgenommen `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Verfolgungs- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Verfolgungs-Flags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content` Suffix weist darauf hin, dass Tracker Inhalte verfolgen und bereitstellen. Das Blockieren dieser schützt Benutzer, kann aber dazu führen, dass Websites nicht funktionieren oder Elemente nicht angezeigt werden.

## Beispiele

Dieser Code protokolliert alle Cookies, die gesendet werden, wenn Anfragen an das Ziel [Matchmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) erfolgen:

```js
// The target match pattern
let targetPage = "*://*.google.ca/*";

// Log cookies sent with this request
function logCookies(e) {
  for (const header of e.requestHeaders) {
    if (header.name === "Cookie") {
      console.log(header.value);
    }
  }
}

// Listen for onSendHeaders, and pass
// "requestHeaders" so we get the headers
browser.webRequest.onSendHeaders.addListener(
  logCookies,
  { urls: [targetPage] },
  ["requestHeaders"],
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onSendHeaders) API von Chromium. Diese Dokumentation leitet sich aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code ab.
