---
title: webRequest.onSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onSendHeaders
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieses Ereignis wird unmittelbar vor dem Senden von Headern ausgelöst. Wenn Ihre Erweiterung oder eine andere Erweiterung Header in `{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}` modifizierte, sehen Sie hier die geänderte Version.

Dieses Ereignis dient nur zur Information.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `details`
      - : `object`. Einzelheiten über die Anfrage. Siehe den Abschnitt [details](#details_2) für weitere Informationen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}

  - : `array` aus `string`. Zusätzliche Optionen für das Ereignis. Sie können hier nur einen Wert übergeben:

    - `"requestHeaders"`: Einbeziehen der Anfrageheader im `details`-Objekt, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab stammt, der in einer kontextuellen Identität geöffnet ist, die Cookie-Store-ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in welchem die Ressource geladen wird. Wenn zum Beispiel die Webseite unter "https\://example.com" ein Bild oder ein <iframe> enthält, dann ist die `documentUrl` für das Bild oder das <iframe> "https\://example.com". Für ein oberstes Dokument ist `documentUrl` undefiniert.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe passiert; ein positiver Wert ist die ID eines Unterframes, in welchem die Anfrage passiert. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind einmalig innerhalb eines Tabs.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Beispielsweise, wenn "https\://example.com" einen Link enthält und der Benutzer diesen Link anklickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer, dieselbe wie die `documentUrl`. Zum Beispiel, wenn eine Seite ein <iframe> enthält und das <iframe> einen Link enthält, der ein neues Dokument in das <iframe> lädt, dann wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des <iframe> sein, aber die `originUrl` wird die URL des Dokuments im <iframe> sein, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Sie enthält folgende Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxyservers.
    - `port`
      - : `integer`. Die Portnummer des Proxyservers.
    - `type`

      - : `string`. Der Typ des Proxyservers. Einer von:

        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxying über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5-Proxy
        - "socks4": SOCKS v4-Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxydienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Domainnamenauflösung basierend auf dem bereitgestellten Hostnamen durchführt, sodass der Client keine eigene DNS-Suche durchführen muss.
    - `failoverTimeout`
      - : `integer`. Failover-Zeitüberschreitung in Sekunden. Wenn die Proxyverbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browser-Sitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zuzuordnen, die mit derselben Anfrage verbunden sind.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anfrageheader, die mit dieser Anfrage gesendet wurden.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie Drittanbieter sind.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Der Typ der mit der Anfrage verbundenen Verfolgung, wenn die Anfrage durch den [Firefox Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wurde. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` aus `strings`. Klassifikationsflags für die First Party der Anfrage.
    - `thirdParty`
      - : `array` aus `strings`. Klassifikationsflags für die Drittanbieter oder deren Fensterhierarchie der Anfrage.

    Die Klassifikationsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: Gibt an, dass die Anfrage in Fingerprinting ("ein Ursprung, der zum Fingerprinting gefunden wurde") beteiligt ist.
      - `fingerprinting` weist darauf hin, dass die Domain in der Kategorie Fingerprinting und Tracking ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` weist darauf hin, dass die Domain in der Kategorie Fingerprinting, aber nicht in der Kategorie Tracking ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zum Schutz vor Betrug zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, aber für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: Gibt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist eine allgemeine Tracking-Anfrage, die `ad`, `analytics`, `social` und `content` Suffixe identifizieren die Art des Trackers.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, jedoch `tracking_content` und `fingerprinting_content` ausschließt.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code protokolliert alle Cookies, die beim Stellen von Anfragen an das Ziel-[Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) gesendet werden:

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
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onSendHeaders)-API von Chromium. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
