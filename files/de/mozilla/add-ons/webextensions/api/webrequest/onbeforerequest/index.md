---
title: webRequest.onBeforeRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Dieses Ereignis wird ausgelöst, wenn eine Anfrage gestellt werden soll und bevor Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zuzuhören, wenn Sie die Anfrage abbrechen oder umleiten möchten.

Um die Anfrage abzubrechen oder umzuleiten, fügen Sie zunächst `"blocking"` in das `extraInfoSpec` Array-Argument von `addListener()` ein. Dann geben Sie in der Listener-Funktion ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} Objekt zurück und setzen Sie die entsprechende Eigenschaft:

- Um die Anfrage abzubrechen, fügen Sie eine Eigenschaft `cancel` mit dem Wert `true` hinzu.
- Um die Anfrage umzuleiten, fügen Sie eine Eigenschaft `redirectUrl` mit dem Wert der URL hinzu, zu der Sie umleiten möchten.

Wenn eine Erweiterung eine öffentliche (z. B. HTTPS) URL auf eine [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die manifest.json-Datei der Erweiterung einen [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) Schlüssel enthalten, der die URL für die Erweiterungsseite auflistet.

Wenn mehrere blockierende Handler eine Anfrage ändern, wird nur ein Satz von Änderungen wirksam. Umleitungen und Abbrüche haben die gleiche Priorität. Wenn Sie also eine Anfrage abgebrochen haben, könnten Sie eine andere Anfrage mit derselben `requestId` sehen, wenn ein anderer blockierender Handler die Anfrage umgeleitet hat.

Ab Firefox 52 kann der Listener anstelle von `BlockingResponse` ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben, das mit einem `BlockingResponse` aufgelöst wird. Dies ermöglicht dem Listener, die Anfrage asynchron zu verarbeiten.

Wenn Sie `"blocking"` verwenden, müssen Sie die ["webRequestBlocking" API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrem manifest.json haben.

## Syntax

```js-nolint
browser.webRequest.onBeforeRequest.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onBeforeRequest.removeListener(listener)
browser.webRequest.onBeforeRequest.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das `listener` Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält dieses Argument:
    - `details`
      - : `object`. Details über die Anfrage. Siehe den [details](#details) Abschnitt für weitere Informationen.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im `extraInfoSpec` Parameter angegeben ist, sollte der Ereignislistener ein `BlockingResponse`-Objekt zurückgeben und kann entweder seine `cancel` oder seine `redirectUrl` Eigenschaften setzen. Ab Firefox 52 kann der Listener anstelle von `BlockingResponse` ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben, das mit einem `BlockingResponse` aufgelöst wird. Dies ermöglicht dem Listener, die Anfrage asynchron zu verarbeiten.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:
    - `"blocking"`: macht die Anfrage synchron, sodass Sie die Anfrage abbrechen oder umleiten können
    - `"requestBody"`: schließt `requestBody` in das `details`-Objekt ein, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer kontextuellen Identität stammt, die Cookie-Store-ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn zum Beispiel die Webseite "https\://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder das iframe "https\://example.com". Für ein oberstes Dokument ist `documentUrl` undefiniert.
- `frameAncestors`
  - : `array`. Enthält Informationen für jedes Dokument in der Rahmenhierarchie bis hin zum obersten Dokument. Das erste Element in dem Array enthält Informationen über das unmittelbare übergeordnete Dokument des angeforderten Dokuments, und das letzte Element enthält Informationen über das oberste Dokument. Wenn der Ladevorgang tatsächlich für das oberste Dokument erfolgt, dann ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist gleich `details.parentFrameId`.

- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Rahmen-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privates Browsing-Fenster stammt.
- `method`
  - : `string`. Standard-HTTP-Methode, zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn zum Beispiel "https\://example.com" einen Link enthält und der Nutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer die gleiche wie die `documentUrl`. Wenn eine Seite zum Beispiel ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes sein, aber die `originUrl` wird die URL des Dokuments im iframe sein, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Wird auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage vermittelt wird. Sie enthält folgende Eigenschaften:
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
      - : `boolean`. True, wenn der Proxy die Domainnamensauflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestBody` {{optional_inline}}
  - : `object`. Enthält die HTTP-Anfragekörperdaten. Wird nur bereitgestellt, wenn `extraInfoSpec` `"requestBody"` enthält.
    - `error` {{optional_inline}}
      - : `string`. Dies wird gesetzt, wenn Fehler beim Abrufen der Anfragenkörpedaten aufgetreten sind.
    - `formData` {{optional_inline}}
      - : `object`. Dieses Objekt ist vorhanden, wenn die Anfragemethode POST ist und der Körper eine Folge von Schlüssel-Wert-Paaren ist, die in UTF-8 entweder als "multipart/form-data" oder "application/x-www-form-urlencoded" kodiert sind.

        Es ist ein Wörterbuch, in dem jeder Schlüssel die Liste aller Werte für diesen Schlüssel enthält. Zum Beispiel: `{'key': ['value1', 'value2']}`. Wenn die Daten einen anderen Medientyp haben oder fehlerhaft sind, ist das Objekt nicht vorhanden.

    - `raw` {{optional_inline}}
      - : `array` von {{WebExtAPIRef('webRequest.UploadData')}}. Wenn die Anfragemethode PUT oder POST ist und der Körper nicht bereits in `formData` geparst ist, dann enthält dieses Array die ungeparsten Anfragekörper-Elemente.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zuzuordnen, die mit derselben Anfrage verbunden sind.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage erfolgt. Wird auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab in Verbindung steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie eine Drittpartei ist.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Die Art der Verfolgung, die mit der Anfrage verbunden ist, wenn die Anfrage von der [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifikationsflags für die Anfrage der Erstanbieter.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflags für die Anfrage oder die Fensterhierarchie von Drittanbietern.

    Die Klassifikationsflaggen umfassen:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage am Fingerprinting beteiligt ist ("ein Ursprung, der Fingerprints erfasst").
      - `fingerprinting` zeigt an, dass die Domain in der Fingerprinting- und Tracking-Kategorie ist. Beispiele für diese Art von Domains sind Werbetreibende, die ein Profil mit dem besuchenden Nutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Fingerprinting-Kategorie ist, aber nicht in der Tracking-Kategorie. Beispiele für diese Art von Domains sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Nutzer zur Betrugsbekämpfung zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, jedoch für Kryptowährungs-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede allgemeine Tracking-Anfrage, die Suffixe `ad`, `analytics`, `social` und `content` identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage an E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprint-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprint-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle Social-Tracking-Flags kombiniert.

    Sie können weitere Informationen zu Trackertypen auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website finden. Das Suffix `content` zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Das Blockieren schützt Benutzer, kann jedoch dazu führen, dass Seiten kaputt gehen oder Elemente nicht angezeigt werden.

### DNS-Auflösungsreihenfolge bei Verwendung von BlockingResponse

Hinsichtlich der DNS-Auflösung bei Verwendung von BlockingResponse mit OnBeforeRequest: Im HTTP Channel, onBeforeRequest mit blockierender Antwort passiert tatsächlich vor der DNS-Auflösung und auch vor der spekulativen Verbindung. Für andere Kanäle kann die spekulative Verbindung dazu führen, dass DNS-Anfragen vor onBeforeRequest passieren. Diese Reihenfolge ist nichts, worauf sich ein Erweiterungsentwickler verlassen sollte, da sie je nach Browser und von einer Browserversion zur anderen sowie je nach Anfragenkanal variieren kann. Siehe [BugZilla-Problemklärung durch Mozilla-Entwickler zur DNS-Auflösungsreihenfolge](https://bugzil.la/1466099)

## Beispiele

Dieser Code protokolliert die URL jeder Ressource, die angefordert wird und die mit dem [\<all_urls>](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#all_urls) Muster übereinstimmt:

```js
function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

Dieser Code bricht Anfragen für Bilder ab, die an URLs unter "https\://developer.mozilla.org/" gesendet werden (um die Wirkung zu sehen, besuchen Sie eine beliebige Seite auf MDN, die Bilder enthält, wie zum Beispiel [webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

```js
// match pattern for the URLs to redirect
let pattern = "https://developer.mozilla.org/*";

// cancel function returns an object
// which contains a property `cancel` set to `true`
function cancel(requestDetails) {
  console.log(`Canceling: ${requestDetails.url}`);
  return { cancel: true };
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  cancel,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Dieser Code ersetzt alle Netzwerk-Anfragen für Bilder, die an URLs unter "https\://developer.mozilla.org/" gesendet werden, durch eine Umleitung (um die Wirkung zu sehen, besuchen Sie eine beliebige Seite auf MDN, die Bilder enthält, wie zum Beispiel [webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

```js
// match pattern for the URLs to redirect
let pattern = "https://developer.mozilla.org/*";

// redirect function
// returns an object with a property `redirectURL`
// set to the new URL
function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);
  return {
    redirectUrl:
      "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif",
  };
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Dieser Code ist genau wie das vorherige Beispiel, außer dass der Listener die Anfrage asynchron verarbeitet. Er gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das einen Timer setzt und die Umleitungs-URL auflöst, wenn der Timer abläuft:

```js
// match pattern for the URLs to redirect
let pattern = "https://developer.mozilla.org/*";

// URL we will redirect to
let redirectUrl =
  "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif";

// redirect function returns a Promise
// which is resolved with the redirect URL when a timer expires
function redirectAsync(requestDetails) {
  console.log(`Redirecting async: ${requestDetails.url}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ redirectUrl });
    }, 2000);
  });
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  redirectAsync,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Ein weiteres Beispiel, das alle Bilder zu einer Data-URL umleitet:

```js
let pattern = "https://developer.mozilla.org/*";

let image = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect style="stroke-width: 10; stroke: #666666;" width="100%" height="100%" fill="#d4d0c8" />
    <text transform="translate(0, 9)" x="50%" y="50%" width="100%" fill="#666666" height="100%" style="text-anchor: middle; font: bold 10pt 'Segoe UI', Arial, Helvetica, Sans-serif;">Blocked</text>
  </svg>
`;

function listener(details) {
  const redirectUrl = `data:image/svg+xml,${encodeURIComponent(image)}`;
  return { redirectUrl };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Hier ist eine andere Version:

```js
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const pattern = "https://developer.mozilla.org/*";

let image = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="100%" height="100%" fill="${randomColor()}"/>
  </svg>
`;

function listener(details) {
  const redirectUrl = `data:image/svg+xml,${encodeURIComponent(image)}`;
  return { redirectUrl };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeRequest) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weitergabe und Nutzung in sowohl Quell- als auch Binärform, mit oder ohne
// Modifikation, sind unter folgenden Bedingungen erlaubt:
//
//    * Weiterverteilungen des Quellcodes müssen den obigen Copyright-Hinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss beibehalten.
//    * Weiterverteilungen in binärer Form müssen den obigen
// Copyright-Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung einhergehen, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software
// abgeleitet sind, ohne spezifische vorherige schriftliche Genehmigung zu unterstützen oder zu
// fördern.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE STILLSCHWEIGENDEN
// GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK SIND
// AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE INHABER DER URHEBERRECHTE ODER MITWIRKENDEN
// HAFTBAR FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DEN ERSATZ VON WAREN ODER DIENSTLEISTUNGEN; NUTZUNGSAUSFALL,
// DATENVERLUST ODER ENTGANGENER GEWINN; ODER GESCHÄFTSUNTERBRECHUNG), WIE AUCH
// IMMER VERURSACHT UND AUF JEDER THEORIE DER HAFTUNG, OB DURCH VERTRAG, STRIKTE
// HAFTUNG ODER UNERLAUBTE HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER SONSTIGES)
// AUF JEGLICHE WEISE AUS DER NUTZUNG DIESER SOFTWARE ENTSTANDEN,
// SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
