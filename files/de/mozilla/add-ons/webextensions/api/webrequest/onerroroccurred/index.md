---
title: webRequest.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onErrorOccurred
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Ausgelöst, wenn eine Anfrage aufgrund eines Fehlers nicht verarbeitet werden konnte: zum Beispiel bei fehlender Internetverbindung.

Der Fehler wird dem Listener als `error`-Eigenschaft des [`details`](#details)-Objekts übergeben.

Beachten Sie, dass dieses Ereignis nicht für HTTP-Fehler (4XX- oder 5XX-Antworten) ausgelöst wird: diese durchlaufen die normalen Stadien einer Anfrage, rufen Event-Listener auf und setzen `details.statusCode`, um den Fehler zu melden.

Dieses Ereignis ist nur informativ.

## Syntax

```js-nolint
browser.webRequest.onErrorOccurred.addListener(
  listener,             // function
  filter                //  object
)
browser.webRequest.onErrorOccurred.removeListener(listener)
browser.webRequest.onErrorOccurred.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details zur Anfrage. Weitere Informationen finden Sie im Abschnitt [details](#details).

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.

## Zusätzliche Objekte

### details

- `documentId` {{optional_inline}}
  - : `string`. Die UUID des Dokuments, das die Anfrage stellt. Weitere Informationen finden Sie im Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.
- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer kontextuellen Identität stammt, die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Zum Beispiel, wenn die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, dann ist `documentUrl` für das Bild oder iframe "https\://example.com". Für ein oberstes Dokument ist `documentUrl` undefiniert.
- `error`
  - : `string`. Die Fehlerbeschreibung. Dieser String ist ein interner Fehlerstring, kann zwischen verschiedenen Browsern variieren und ist möglicherweise nicht zwischen Versionen gleichbleibend.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe auftritt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage auftritt. Wenn das Dokument eines Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Rahmen-IDs sind innerhalb eines Tabs eindeutig.
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
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Zum Beispiel, wenn "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer, die gleiche wie die `documentUrl`. Wenn zum Beispiel eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann ist die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentDocumentId`{{optional_inline}}
  - : `string`. Eine UUID des übergeordneten Dokuments, das den Rahmen besitzt. Wird nicht gesetzt, wenn kein übergeordnetes Dokument vorhanden ist. Weitere Informationen finden Sie im Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Wird auf -1 gesetzt, wenn kein übergeordneter Rahmen vorhanden ist.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy läuft. Sie enthält die folgenden Eigenschaften:
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
      - : `string`. Benutzername für den Proxydienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Domainnamensauflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxyverbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse im Zusammenhang mit derselben Anfrage zu verknüpfen.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage stattfindet. Wird auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie von Drittanbietern stammt.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Der Typ der Verfolgung, der der Anfrage zugeordnet ist, wenn die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifikationsflaggen für die First Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflaggen für die Dritten der Anfrage oder deren Fensterhierarchie.

    Die Klassifikationsflaggen umfassen:
    - `fingerprinting` und `fingerprinting_content`: Gibt an, dass die Anfrage am Fingerprinting beteiligt ist („ein Ursprungsort, der Fingerabdrücke erstellt“).
      - `fingerprinting` zeigt an, dass die Domain in der Kategorie Fingerprinting und Tracking ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Kategorie Fingerprinting, aber nicht in der Kategorie Tracking ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zu Identifikationszwecken gegen Betrug zu erkennen.
    - `cryptomining` und `cryptomining_content`: Ähnlich wie die Fingerprinting-Kategorie, aber für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: Gibt an, dass die Anfrage an Tracking beteiligt ist. `tracking` ist eine generische Tracking-Anfrage, die Suffixe `ad`, `analytics`, `social` und `content` identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: Gibt an, dass die Anfrage am E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: Ein Meta-Flag, das Tracking- und Fingerprinting-Flaggen kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: Ein Meta-Flag, das alle Tracking- und Fingerprinting-Flaggen kombiniert.
    - `any_social_tracking`: Ein Meta-Flag, das alle Social-Tracking-Flaggen kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der Webseite von [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers). Das Suffix `content` weist auf Tracker hin, die Inhalte nachverfolgen und bereitstellen. Deren Blockierung schützt Benutzer, kann jedoch dazu führen, dass Seitenunterbrechungen auftreten oder Elemente nicht angezeigt werden.

    **Hinweis** Wenn Firefox Tracking Protection die Anfrage blockiert, wird ein leeres Objekt zurückgegeben und `error` liefert einen dieser Codes zurück:
    - `NS_ERROR_MALWARE_URI` bedeutet eine Malware-URI.
    - `NS_ERROR_PHISHING_URI` bedeutet eine Phishing-URI.
    - `NS_ERROR_TRACKING_URI` bedeutet eine Tracking-URI.
    - `NS_ERROR_UNWANTED_URI` bedeutet eine ungewollte URI.
    - `NS_ERROR_BLOCKED_URI` bedeutet eine gesperrte URI.
    - `NS_ERROR_HARMFUL_URI` bedeutet eine schädliche URI.
    - `NS_ERROR_FINGERPRINTING` bedeutet eine Fingerprinting-URI.
    - `NS_ERROR_CRYPTOMINING_URI` bedeutet eine Kryptomining-URI.
    - `NS_ERROR_SOCIALTRACKING_URI` bedeutet eine soziale Tracking-URI.

## Beispiele

```js
let target = "<all_urls>";

/*
e.g., with no network:
"https://developer.mozilla.org/en-US/"
NS_ERROR_NET_ON_RESOLVED in Firefox
net::ERR_INTERNET_DISCONNECTED in Chrome
*/
function logError(responseDetails) {
  console.log(responseDetails.url);
  console.log(responseDetails.error);
}

browser.webRequest.onErrorOccurred.addListener(logError, { urls: [target] });
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der `chrome.webRequest` API von Chromium. Diese Dokumentation stammt aus `web_request.json` im Chromium-Code.
