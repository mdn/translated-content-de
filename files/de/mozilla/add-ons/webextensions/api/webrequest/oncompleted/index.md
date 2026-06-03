---
title: webRequest.onCompleted
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onCompleted
l10n:
  sourceCommit: ecdff1d43aa1606d354cafc6eadf4b0c33e16352
---

Ausgelöst, wenn eine Anfrage abgeschlossen ist.

Dieses Ereignis ist nur informativ.

## Syntax

```js-nolint
browser.webRequest.onCompleted.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onCompleted.removeListener(listener)
browser.webRequest.onCompleted.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details zur Anfrage. Siehe den Abschnitt [Details](#details) für weitere Informationen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die an diesen Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können nur einen Wert übergeben:
    - `"responseHeaders"`: Fügt `responseHeaders` dem an den Listener übergebenen `details`-Objekt hinzu.

## Zusätzliche Objekte

### details

- `documentId` {{optional_inline}}
  - : `string`. Die UUID des Dokuments, das die Anfrage stellt.
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.
- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer kontextbezogenen Identität stammt, die Cookie-Store-ID der kontextbezogenen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextbezogenen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn zum Beispiel die Webseite "https\://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder das iframe "https\://example.com". Für ein Dokument der obersten Ebene ist `documentUrl` undefiniert.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe stattfindet; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage stattfindet. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Rahmen-IDs sind innerhalb eines Tabs eindeutig.
- `frameType`
  - : `string`. Der Typ des Rahmens, in dem die Anfrage aufgetreten ist. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"` zurück.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplattencache abgerufen wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann sich um eine wörtliche IPv6-Adresse handeln.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn "https\://example.com" beispielsweise einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist häufig, aber nicht immer identisch mit der `documentUrl`. Wenn eine Seite beispielsweise ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes sein, aber die `originUrl` wird die URL des Dokuments im iframe sein, das den Link enthielt.

- `parentDocumentId`{{optional_inline}}
  - : `string`. Eine UUID des übergeordneten Dokuments, das den Rahmen besitzt. Nicht gesetzt, wenn kein übergeordnetes Element vorhanden ist.
- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy gesendet wird. Es enthält die folgenden Eigenschaften:
    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`
      - : `string`. Der Typ des Proxy-Servers. Einer der folgenden:
        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxying über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die Domain-Namensauflösung basierend auf dem angegebenen Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Lookup durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse derselben Anfrage zuzuordnen.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwort-Header, die zusammen mit dieser Antwort empfangen wurden.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP status line der Antwort oder die Zeichenfolge 'HTTP/0.9 200 OK' für HTTP/0.9-Antworten (d.h. Antworten, die keine Statuszeile besitzen) oder eine leere Zeichenfolge, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab zusammenhängt.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie von Drittanbietern stammt.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Der Typ der Nachverfolgung, der mit der Anfrage verbunden ist, wenn die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifikationsflags für den ersten Anbieter der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflags für die Anfrage oder Drittanbieter der Fensterhierarchie.

    Die Klassifikationsflags umfassen:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage an Fingerabdrücken beteiligt ist ("eine Herkunft, die zum Fingerprinting gefunden wurde").
      - `fingerprinting` zeigt an, dass die Domain in der Kategorie Fingerprinting und Nachverfolgung enthalten ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Fingerabdruckkategorie ist, aber nicht in der Nachverfolgungskategorie. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zu Identifikationszwecken für Betrugsschutz zu erkennen.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Kategorie Fingerabdrücke, jedoch für Ressourcen zu Krypto-Mining.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage an der Nachverfolgung beteiligt ist. `tracking` ist jede generische Nachverfolgungsanfrage, die Endungen `ad`, `analytics`, `social` und `content` identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage an der Nachverfolgung von E-Mails beteiligt ist.
    - `any_basic_tracking`: ein Metaflag, das die Nachverfolgungs- und Fingerabdruckflags kombiniert, die `tracking_content` und `fingerprinting_content` ausschließt.
    - `any_strict_tracking`: ein Metaflag, das alle Nachverfolgungs- und Fingerabdruckflags kombiniert.
    - `any_social_tracking`: ein Metaflag, das alle sozialen Nachverfolgungsflags kombiniert.

    Weitere Informationen zu den Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das Suffix `content` bezeichnet Tracker, die nachverfolgen und Inhalte bereitstellen. Ihr Blockieren schützt Benutzer, kann jedoch dazu führen, dass Websites beschädigt werden oder Elemente nicht angezeigt werden.

## Beispiele

```js
let target = "https://developer.mozilla.org/*";

/*
e.g.
"https://developer.mozilla.org/en-US/"
200

or:

"https://developer.mozilla.org/en-US/xfgkdkjdfhs"
404
*/
function logResponse(responseDetails) {
  console.log(responseDetails.url);
  console.log(responseDetails.statusCode);
}

browser.webRequest.onCompleted.addListener(logResponse, { urls: [target] });
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onCompleted)-API von Chromium. Diese Dokumentation leitet sich von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code ab.
