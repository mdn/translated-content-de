---
title: webRequest.onSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onSendHeaders
l10n:
  sourceCommit: 33a5708cc125bcaa4ebe74b46bb6fe1820616ff0
---

{{AddonSidebar}}

Dieses Ereignis wird unmittelbar vor dem Senden von Headern ausgelöst. Wenn Ihre Erweiterung oder eine andere Erweiterung Header in `{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}` modifiziert hat, sehen Sie hier die geänderte Version.

Dieses Ereignis ist nur informativ.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `details`
      - : `object`. Details über die Anfrage. Siehe den Abschnitt [details](#details_2) für mehr Informationen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können hier nur einen Wert übergeben:

    - `"requestHeaders"`: beinhaltete die Request-Header im `details`-Objekt, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer kontextuellen Identität kommt, die Cookie-Store-ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für mehr Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Zum Beispiel, wenn die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, ist `documentUrl` für das Bild oder iframe "https\://example.com". Für ein oberstes Dokument ist `documentUrl` nicht definiert.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Haupt-Frame erfolgt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens, nicht die ID des äußeren Rahmens an. Frame-IDs sind innerhalb eines Tabs einzigartig.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browsing-Fenster kommt.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Zum Beispiel, wenn "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist häufig, aber nicht immer, dieselbe wie die `documentUrl`. Zum Beispiel, wenn eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes sein, aber das `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy erfolgt. Sie enthält folgende Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxyservers.
    - `port`
      - : `integer`. Die Portnummer des Proxyservers.
    - `type`

      - : `string`. Der Typ des Proxyservers. Einer von:

        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxy über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Service.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die Namensauflösung auf Grundlage des bereitgestellten Hostnamens durchführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Ausfallüberbrückungszeit in Sekunden. Wenn die Proxyverbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung einzigartig, sodass Sie sie verwenden können, um verschiedene Ereignisse zu verknüpfen, die mit derselben Anfrage verbunden sind.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Request-Header, die mit dieser Anfrage gesendet wurden.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie Dritte sind.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art der Verfolgung, die mit der Anfrage verbunden ist, falls die Anfrage durch [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert ist. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifizierungsflags für die Erstpartei der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifizierungsflags für die Dritten der Anfrage oder ihrer Fenster-Hierarchie.

    Die Klassifizierungsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: weist darauf hin, dass die Anfrage an Fingerprinting beteiligt ist ("ein Ursprung, der zum Fingerprinting gefunden wurde").
      - `fingerprinting` weist darauf hin, dass die Domain in der Kategorie Fingerprinting und Tracking ist. Beispiele für diese Art von Domain beinhalten Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` weist darauf hin, dass die Domain in der Fingerprinting-Kategorie, aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domain beinhalten Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zu Identifikationszwecken für Betrugsbekämpfung zu erkennen.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, jedoch für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: weist darauf hin, dass die Anfrage an Tracking beteiligt ist. `tracking` ist jede allgemeine Tracking-Anfrage, die Suffixe `ad`, `analytics`, `social` und `content` identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: weist darauf hin, dass die Anfrage in das Tracking von E-Mails involviert ist.
    - `any_basic_tracking`: ein Metaflag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Metaflag, das alle Tracker- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Metaflag, das alle sozialen Tracking-Flags kombiniert.

    Mehr Informationen zu den Arten von Trackern finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das Suffix `content` zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Deren Blockierung schützt Benutzer, kann jedoch dazu führen, dass Websites nicht korrekt angezeigt werden oder Elemente fehlen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code protokolliert alle Cookies, die bei Anfragen an das Ziel [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) gesendet werden:

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
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onSendHeaders) API von Chromium. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
