---
title: webRequest.onHeadersReceived
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
l10n:
  sourceCommit: 5c5ee35d66ac24bc6513c14f120750c74d779d20
---

{{AddonSidebar}}

Wird ausgelöst, wenn die HTTP-Antwortheader für eine Anfrage empfangen werden. Verwenden Sie dieses Ereignis, um HTTP-Antwortheader zu ändern.

Um die Antwortheader an den Listener weiterzugeben, zusammen mit den übrigen Anfragedaten, geben Sie `"responseHeaders"` in das `extraInfoSpec`-Array ein.

Wenn Sie `"blocking"` verwenden, müssen Sie die ["webRequestBlocking"-API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

Es ist möglich, dass Erweiterungen widersprüchliche Anfragen stellen. Wenn zwei Erweiterungen `onHeadersReceived` für dieselbe Anfrage abhören und `responseHeaders` zurückgeben, um denselben Header (zum Beispiel `Set-Cookie`) festzulegen, der in der ursprünglichen Antwort nicht vorhanden ist, wird nur eine der Änderungen erfolgreich sein.

Der `Content-Security-Policy`-Header wird jedoch anders behandelt; seine Werte werden kombiniert, um alle angegebenen Richtlinien anzuwenden. Wenn jedoch zwei Erweiterungen einen CSP-Wert festlegen, der im Widerspruch steht, macht der CSP-Service die Einschränkung strenger, um den Konflikt zu lösen. Wenn zum Beispiel eine Erweiterung `img-src: example.com` und eine andere Erweiterung `img-src: example.org` festlegt, ist das Ergebnis `img-src: 'none'`. Zusammengeführte Änderungen neigen immer dazu, restriktiver zu sein, obwohl eine Erweiterung den ursprünglichen CSP-Header entfernen kann.

Wenn Sie die Header sehen möchten, die vom System verarbeitet werden, ohne das Risiko, dass eine andere Erweiterung sie ändert, verwenden Sie {{WebExtAPIRef("webRequest.onResponseStarted")}}, obwohl Sie bei diesem Ereignis keine Header modifizieren können.

## Syntax

```js-nolint
browser.webRequest.onHeadersReceived.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onHeadersReceived.removeListener(listener)
browser.webRequest.onHeadersReceived.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Abhören dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es hört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : [`object`](#details). Details der Anfrage. Dies beinhaltet Antwortheader, wenn Sie `"responseHeaders"` in `extraInfoSpec` aufgenommen haben.

    Gibt zurück: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im `extraInfoSpec`-Parameter angegeben ist, gibt der Ereignis-Listener ein `BlockingResponse`-Objekt zurück und kann seine `responseHeaders`-Eigenschaft festlegen. In Firefox kann der Rückgabewert ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sein, das zu einem `BlockingResponse` aufgelöst wird.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Satz von Filtern, die die an diesen Listener gesendeten Ereignisse einschränken.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:

    - `"blocking"` um die Anfrage synchron zu machen, damit Sie Anfrage- und Antwortheader ändern können
    - `"responseHeaders"` um die Antwortheader im `details`-Objekt zu speichern, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer Kontext-Identität stammt, die Cookie-Store-ID der Kontext-Identität. Siehe [Arbeiten mit Kontext-Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn beispielsweise die Webseite bei "https://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder iframe "https://example.com". Für ein oberstes Dokument ist `documentUrl` undefiniert.
- `frameAncestors`

  - : `array`. Informationen für jedes Dokument in der Frame-Hierarchie bis zum obersten Dokument. Das erste Element im Array enthält Informationen über das unmittelbare übergeordnete Element des angeforderten Dokuments und das letzte Element enthält Informationen über das oberste Dokument. Wenn das Laden für das oberste Dokument erfolgt, ist dieses Array leer.

    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist identisch mit `details.parentFrameId`.

- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind eindeutig innerhalb eines Tabs.
- `fromCache`
  - : `boolean`. Ob die Antwort aus dem Festplattencache geholt wird.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browsing-Fenster stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann sich um eine wörtliche IPv6-Adresse handeln.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn zum Beispiel "https://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist `originUrl` für die resultierende Anfrage "https://example.com".

    Die `originUrl` ist oft, aber nicht immer, identisch mit der `documentUrl`. Wenn zum Beispiel eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann ist die `documentUrl` der resultierenden Anfrage das übergeordnete Dokument des iframes, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthält.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Frame vorhanden ist.
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
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die DNS-Auflösung basierend auf dem angegebenen Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Zeitüberschreitung in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zu verknüpfen, die mit derselben Anfrage verbunden sind.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die für diese Anfrage empfangen wurden.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort oder der 'HTTP/0.9 200 OK' String für HTTP/0.9-Antworten (also Antworten, die keine Statuszeile enthalten).
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage erfolgt. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie von Dritten stammt.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art des Trackings, die mit der Anfrage verbunden ist, wenn die Anfrage von [Firefox-Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit folgenden Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifikationsflags für die First-Party der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifikationsflags für die Anfrage oder die Third-Partys in ihrer Fensterhierarchie.

    Die Klassifikationsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage am Fingerprinting beteiligt ist ("ein Ursprung, der Fingerprinting betreibt").
      - `fingerprinting` bedeutet, dass die Domäne in der Fingerprinting- und Tracking-Kategorie ist. Beispiele für diese Art von Domänen sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer in Verbindung bringen wollen.
      - `fingerprinting_content` bedeutet, dass die Domäne in der Fingerprinting-Kategorie, aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domänen sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zur Betrugsprävention zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, aber für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social`, und `tracking_content`: zeigt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede generische Tracking-Anfrage, die `ad`, `analytics`, `social`, und `content`-Suffixe identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage am E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, ausgenommen `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu den Arten von Trackern finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content`-Suffix zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Diese zu blockieren schützt die Benutzer, kann jedoch dazu führen, dass Seiten kaputt gehen oder Elemente nicht angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code setzt ein zusätzliches Cookie, wenn eine Ressource von der Ziel-URL angefordert wird:

```js
let targetPage =
  "https://developer.mozilla.org/en-US/Firefox/Developer_Edition";

// Add the new header to the original array,
// and return it.
function setCookie(e) {
  const setMyCookie = {
    name: "Set-Cookie",
    value: "my-cookie1=my-cookie-value1",
  };
  e.responseHeaders.push(setMyCookie);
  return { responseHeaders: e.responseHeaders };
}

// Listen for onHeaderReceived for the target page.
// Set "blocking" and "responseHeaders".
browser.webRequest.onHeadersReceived.addListener(
  setCookie,
  { urls: [targetPage] },
  ["blocking", "responseHeaders"],
);
```

Dieser Code tut dasselbe wie das vorherige Beispiel, außer dass der Listener asynchron ist und ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das mit den neuen Headern aufgelöst wird:

```js
const targetPage =
  "https://developer.mozilla.org/en-US/Firefox/Developer_Edition";

// Return a Promise that sets a timer.
// When the timer fires, resolve the promise with
// modified set of response headers.
function setCookieAsync(e) {
  const asyncSetCookie = new Promise((resolve, reject) => {
    setTimeout(() => {
      const setMyCookie = {
        name: "Set-Cookie",
        value: "my-cookie1=my-cookie-value1",
      };
      e.responseHeaders.push(setMyCookie);
      resolve({ responseHeaders: e.responseHeaders });
    }, 2000);
  });

  return asyncSetCookie;
}

// Listen for onHeaderReceived for the target page.
// Set "blocking" and "responseHeaders".
browser.webRequest.onHeadersReceived.addListener(
  setCookieAsync,
  { urls: [targetPage] },
  ["blocking", "responseHeaders"],
);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onHeadersReceived) API von Chromium. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

<!--
/*
Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
Verteilung und Nutzung in Quell- und Binärformen, mit oder ohne
Modifikation, sind unter den folgenden Bedingungen gestattet:
   * Weiterverteilungen des Quellcodes müssen das obige Urheberrecht
und diese Liste von Bedingungen und den folgenden Haftungsausschluss
beibehalten.
   * Weiterverteilungen in binärer Form müssen das obige Urheberrecht,
diese Liste von Bedingungen und den folgenden Haftungsausschluss
in der Dokumentation und/oder anderen Materialien, die mit der
Verteilung bereitgestellt werden, enthalten.
   * Weder der Name von Google Inc. noch die Namen seiner
Mitwirkenden dürfen verwendet werden, um Produkte, die von
dieser Software abgeleitet wurden, zu unterstützen oder zu
bewerben, ohne vorherige schriftliche Genehmigung.
DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND BEITRAGENDEN
"AS IS" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER STILLSCHWEIGENDEN
GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE STILLSCHWEIGENDEN
GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK,
WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE COPYRIGHTINHABER ODER
BEITRAGENDEN FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE,
BEISPIELHAFTE ODER FOLGESCHÄDEN HAFTBAR (EINSCHLIESSLICH, ABER NICHT
BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN;
NUTZUNGSVERLUST, DATEN ODER GEWINNE; ODER GESCHÄFTSUNTERBRECHUNG)
 DIESER SOFTWARE WIRD, AUCH WENN DIE MÖGLICHKEIT DARAUF HINGEWIESEN
 WURDE.
   */
-->
