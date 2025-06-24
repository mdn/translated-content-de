---
title: webRequest.onSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onSendHeaders
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Dieses Ereignis wird kurz vor dem Senden von Headern ausgelöst. Wenn Ihre Erweiterung oder eine andere Erweiterung Header in {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} modifiziert hat, wird hier die modifizierte Version angezeigt.

Dieses Ereignis dient nur zu Informationszwecken.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details über die Anfrage. Siehe den Abschnitt [details](#details) für weitere Informationen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können hier nur einen Wert übergeben:
    - `"requestHeaders"`: Schließen Sie die Anforderungsheader im `details`-Objekt ein, das an den Listener übergeben wird.

## Zusätzliche Objekte

### Details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab stammt, der in einer kontextuellen Identität geöffnet ist, die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Zum Beispiel, wenn die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder iframe "https\://example.com". Für ein Top-Level-Dokument ist `documentUrl` undefiniert.
- `frameId`
  - : `integer`. Null, wenn die Anforderung im Hauptframe erfolgt; ein positiver Wert ist die ID eines Subframes, in dem die Anforderung erfolgt. Wenn das Dokument eines (Sub-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind eindeutig innerhalb eines Tabs.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Zum Beispiel, wenn "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer dieselbe wie die `documentUrl`. Zum Beispiel, wenn eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, ist die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage sendete. Auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy läuft. Es enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxyservers.
    - `port`
      - : `integer`. Die Portnummer des Proxyservers.
    - `type`

      - : `string`. Der Typ des Proxyservers. Einer von:
        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxying über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxydienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Domainnamenauflösung basierend auf dem angegebenen Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anforderungs-IDs sind eindeutig innerhalb einer Browsersitzung, sodass Sie sie verwenden können, um verschiedene Ereignisse zu verbinden, die mit derselben Anfrage verknüpft sind.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anforderungsheader, die mit dieser Anfrage gesendet wurden.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die mit der Anfrage verbundene Art des Trackings, falls die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wurde. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `string`. Klassifikationsflaggen für die First Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflaggen für die Drittparteien der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifikationsflaggen umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage mit dem Fingerprinting verbunden ist ("eine Quelle, die Fingerprinting betreibt").
      - `fingerprinting` zeigt an, dass die Domain in der Kategorie Fingerprinting und Tracking enthalten ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Kategorie Fingerprinting, aber nicht in der Tracking-Kategorie enthalten ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken zur Identifizierung des besuchenden Benutzers zu Anti-Betrugszwecken verwenden.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Kategorie Fingerprinting, jedoch für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage mit Tracking verbunden ist. `tracking` ist jede allgemeine Tracking-Anfrage, die Suffixe `ad`, `analytics`, `social` und `content` identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage mit dem Tracking von E-Mails verbunden ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flaggen kombiniert, ohne `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flaggen kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flaggen kombiniert.

    Weitere Informationen zu Tracker-Typen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content` Suffix kennzeichnet Tracker, die Inhalte verfolgen und bereitstellen. Ihre Blockierung schützt Benutzer, kann jedoch dazu führen, dass Websites nicht mehr funktionieren oder Elemente nicht angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code protokolliert alle Cookies, die beim Anfragen an das Ziel [Matchmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) gesendet werden:

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

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onSendHeaders) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
