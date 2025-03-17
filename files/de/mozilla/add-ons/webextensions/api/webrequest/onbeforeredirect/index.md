---
title: webRequest.onBeforeRedirect
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRedirect
l10n:
  sourceCommit: 33a5708cc125bcaa4ebe74b46bb6fe1820616ff0
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine serverinitiierte Weiterleitung stattfinden soll.

Beachten Sie, dass Sie für dieses Ereignis nicht `"blocking"` angeben können, sodass Sie die Anfrage nicht von diesem Ereignis aus ändern oder abbrechen können: Es ist lediglich informativ.

## Syntax

```js-nolint
browser.webRequest.onBeforeRedirect.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onBeforeRedirect.removeListener(listener)
browser.webRequest.onBeforeRedirect.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen für dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Details zur Anfrage. Weitere Informationen finden Sie im Abschnitt [details](#details_2).

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können nur einen Wert übergeben:

    - `"responseHeaders"`: schließt `responseHeaders` in das an den Listener übergebene `details`-Objekt ein

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab stammt, der in einer Kontextidentität geöffnet ist, ist dies die Cookie-Speicher-ID der Kontextidentität. Weitere Informationen siehe [Arbeiten mit Kontextidentitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Enthält beispielsweise die Webseite unter "https\://example.com" ein Bild oder ein iframe, dann ist die `documentUrl` für das Bild oder iframe "https\://example.com". Für ein oberstes Dokument ist `documentUrl` undefiniert.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unter-Frames, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind einzigartig innerhalb eines Tabs.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplattencache geladen wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem Fenster im privaten Modus stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann sich um eine wörtliche IPv6-Adresse handeln.
- `method`
  - : `string`. Standard-HTTP-Methode: beispielsweise "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn beispielsweise "https\://example.com" einen Link enthält und der Benutzer auf diesen klickt, dann ist `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer identisch mit der `documentUrl`. Enthält eine Seite beispielsweise ein iframe und das iframe einen Link, der ein neues Dokument in das iframe lädt, dann ist die `documentUrl` der resultierenden Anfrage das übergeordnete Dokument des iframes, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Setzt auf -1, wenn kein übergeordneter Frame vorhanden ist.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy erfolgt. Sie enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`

      - : `string`. Der Typ des Proxy-Servers. Einer von:

        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxying über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5-Proxy
        - "socks4": SOCKS v4-Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Domainnamenauflösung basierend auf dem angegebenen Hostnamen durchführen wird, was bedeutet, dass der Client seine eigene DNS-Suche nicht durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Ausfall-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `redirectUrl`
  - : `string`. Die neue URL.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse, die mit derselben Anfrage verknüpft sind, zuzuordnen.
- `responseHeaders`
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Response-Header, die zusammen mit dieser Weiterleitung empfangen wurden.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wurde.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort oder der String 'HTTP/0.9 200 OK' für HTTP/0.9-Antworten (d.h. Antworten ohne Statuszeile) oder ein leerer String, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage stattfindet. Setzt auf -1, wenn die Anfrage nicht mit einem Tab verknüpft ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie von Dritten sind.
- `timeStamp`
  - : `number`. Die Zeit, wann dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: beispielsweise "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art der Nachverfolgung, die mit der Anfrage in Verbindung steht, wenn die Anfrage durch [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifikationsflags für die First Party der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifikationsflags für die Third Parties der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifikationsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: weist darauf hin, dass die Anfrage am Fingerprinting beteiligt ist ("ein Ursprung, der für das Fingerprinting identifiziert wurde").
      - `fingerprinting` zeigt an, dass die Domain der Kategorie Fingerprint und Tracking zugeordnet ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer in Verbindung bringen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain der Kategorie Fingerprinting, aber nicht der Tracking-Kategorie zugeordnet ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den Benutzer zur Betrugsprävention zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, aber für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social`, und `tracking_content`: weist darauf hin, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede allgemeine Tracking-Anfrage, die Suffixe `ad`, `analytics`, `social` und `content` identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: weist darauf hin, dass die Anfrage am E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, ohne `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle Social-Tracking-Flags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das Suffix `content` zeigt Tracker an, die Inhalte tracken und bereitstellen. Das Blockieren dieser schützt zwar die Benutzer, kann jedoch dazu führen, dass Websites nicht richtig funktionieren oder Elemente nicht angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
let target = "https://developer.mozilla.org/*";

/*
e.g.
"https://developer.mozilla.org/"
"https://developer.mozilla.org/en-US/"
*/
function logResponse(responseDetails) {
  console.log(responseDetails.url);
  console.log(responseDetails.redirectUrl);
}

browser.webRequest.onBeforeRedirect.addListener(logResponse, {
  urls: [target],
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeRedirect)-API. Diese Dokumentation leitet sich aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code ab.
