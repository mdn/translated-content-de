---
title: webRequest.onBeforeSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders
l10n:
  sourceCommit: 33a5708cc125bcaa4ebe74b46bb6fe1820616ff0
---

{{AddonSidebar}}

Dieses Ereignis wird ausgelöst, bevor HTTP-Daten gesendet werden, aber nachdem alle HTTP-Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zuzuhören, wenn Sie HTTP-Anfrageheader modifizieren möchten.

Um die Anfrageheader zusammen mit den übrigen Anfragedaten an den Listener zu übergeben, geben Sie `"requestHeaders"` im `extraInfoSpec`-Array an.

Um die Header synchron zu ändern: Geben Sie `"blocking"` in `extraInfoSpec` an, und geben Sie in Ihrem Ereignis-Listener ein [`BlockingResponse`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse) mit einer Eigenschaft namens `requestHeaders` zurück, deren Wert die zu sendenden Anfrageheader sind.

Um die Header asynchron zu ändern: Geben Sie `"blocking"` in `extraInfoSpec` an, und geben Sie in Ihrem Ereignis-Listener ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einem `BlockingResponse` aufgelöst wird.

Wenn Sie `"blocking"` verwenden, müssen Sie die ["webRequestBlocking" API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

Mögliche Konflikte zwischen Erweiterungen: Wenn zwei Erweiterungen auf `onBeforeSendHeaders` für dieselbe Anfrage hören, dann sieht der zweite Listener die Änderungen, die der erste Listener vorgenommen hat, und kann alle vom ersten Listener vorgenommenen Änderungen rückgängig machen. Wenn der erste Listener beispielsweise einen `Cookie`-Header hinzufügt und der zweite Listener alle `Cookie`-Header entfernt, gehen die Änderungen des ersten Listeners verloren. Um die Header zu sehen, die tatsächlich gesendet werden, ohne dass das Risiko besteht, dass eine andere Erweiterung sie später ändert, verwenden Sie {{WebExtAPIRef("webRequest.onSendHeaders", "onSendHeaders")}}, auch wenn Sie die Header in diesem Ereignis nicht ändern können.

Nicht alle tatsächlich gesendeten Header sind immer in `requestHeaders` enthalten. Insbesondere Header, die sich auf das Caching beziehen (zum Beispiel `Cache-Control`, `If-Modified-Since`, `If-None-Match`) werden nie gesendet. Auch das Verhalten kann sich je nach Browser unterscheiden.

Laut Spezifikation sind Header-Namen nicht case-sensitiv. Das bedeutet, dass der Listener, um einen bestimmten Header abzugleichen, den Namen kleinschreiben sollte, bevor er ihn vergleicht:

```js
for (const header of e.requestHeaders) {
  if (header.name.toLowerCase() === desiredHeader) {
    // process header
  }
}
```

Der Browser behält die ursprüngliche Schreibweise des vom Browser generierten Header-Namens bei. Wenn der Listener der Erweiterung die Schreibweise ändert, wird diese Änderung nicht beibehalten.

## Syntax

```js-nolint
browser.webRequest.onBeforeSendHeaders.addListener(
  listener,             //  function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onBeforeSendHeaders.removeListener(listener)
browser.webRequest.onBeforeSendHeaders.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Details der Anfrage. Dazu gehören Anfrageheader, wenn Sie `"requestHeaders"` im `extraInfoSpec` enthalten haben. Siehe den Abschnitt [details](#details_2) für mehr Informationen.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im Parameter `extraInfoSpec` angegeben ist, sollte der Ereignis-Listener ein `BlockingResponse`-Objekt zurückgeben können und seine `requestHeaders`-Eigenschaft setzen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die an diesen Listener gesendeten Ereignisse einschränken.
- `extraInfoSpec` {{optional_inline}}

  - : `array` of `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte angeben:

    - `"blocking"`: macht die Anfrage synchron, sodass Sie die Anfrageheader ändern können
    - `"requestHeaders"`: enthält die Anfrageheader im an den Listener übergebenen `details`-Objekt

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab erfolgt, der in einer Kontextidentität geöffnet ist, die Cookie-Store-ID der Kontextidentität. Weitere Informationen finden Sie unter [Arbeiten mit Kontextidentitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. Die URL des Dokuments, in dem die Ressource geladen wird. Zum Beispiel, wenn die Webseite "https\://example.com" ein Bild oder ein iframe enthält, dann wird die `documentUrl` für das Bild oder iframe "https\://example.com" sein. Für ein Dokument auf oberster Ebene ist `documentUrl` undefiniert.
- `frameAncestors`
  - : `array`. Enthält Informationen für jedes Dokument im Frame-Hierarchiepfad bis zum Dokument auf oberster Ebene. Das erste Element im Array enthält Informationen über das unmittelbare übergeordnete Dokument der angeforderten Ressource, und das letzte Element enthält Informationen über das Dokument auf oberster Ebene. Wenn der Ladevorgang tatsächlich für das Dokument auf oberster Ebene ist, dann ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` entspricht `details.parentFrameId`.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe stattfindet; ein positiver Wert ist die ID eines Unter-Frames, in dem die Anfrage stattfindet. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browsing-Fenster stammt.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn beispielsweise "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer dieselbe wie die `documentUrl`. Beispielsweise, wenn eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes sein, aber die `originUrl` wird die URL des Dokuments im iframe sein, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Frame vorhanden ist.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy erfolgt. Es enthält die folgenden Eigenschaften:

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
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Domänennamenauflösung basierend auf dem angegebenen Hostnamen ausführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Ausfallüberbrückungs-Timeout in Sekunden. Schlägt die Proxy-Verbindung fehl, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anfrageheader, die mit dieser Anfrage gesendet werden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browser-Sitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse derselben Anfrage zuzuordnen.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie Dritthersteller sind.
- `timeStamp`
  - : `number`. Der Zeitpunkt, an dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Der Tracking-Typ, der mit der Anfrage verbunden ist, falls die Anfrage durch [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifikationsflaggen für die First-Party der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifikationsflaggen für die Drittparteien der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifikationsflaggen umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage mit Fingerprinting verbunden ist ("eine Herkunft, die festgestellt wurde, um Fingerprinting durchzuführen").
      - `fingerprinting` zeigt, dass die Domain zur Kategorie Fingerprinting und Tracking gehört. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil dem besuchenden Benutzer zuordnen möchten.
      - `fingerprinting_content` zeigt, dass die Domain zur Kategorie Fingerprinting, aber nicht zur Tracking-Kategorie gehört. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer für Betrugspräventionszwecke zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, jedoch für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage mit Tracking verbunden ist. `tracking` ist jede generische Tracking-Anfrage, die Suffixe `ad`, `analytics`, `social` und `content` identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage mit der Verfolgung von E-Mails verbunden ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, außer `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Sie können weitere Informationen über Tracker-Typen auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website finden. Das `content`-Suffix zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Das Blockieren schützt Benutzer, kann jedoch dazu führen, dass Websites nicht mehr funktionieren oder Elemente nicht angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code ändert den "User-Agent"-Header, sodass der Browser sich als Opera 12.16 identifiziert, jedoch nur beim Besuch von Seiten unter `https://httpbin.org/`.

```js
"use strict";

/*
This is the page for which we want to rewrite the User-Agent header.
*/
const targetPage = "https://httpbin.org/*";

/*
Set UA string to Opera 12
*/
const ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

/*
Rewrite the User-Agent header to "ua".
*/
function rewriteUserAgentHeader(e) {
  for (const header of e.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = ua;
    }
  }
  return { requestHeaders: e.requestHeaders };
}

/*
Add rewriteUserAgentHeader as a listener to onBeforeSendHeaders,
only for the target page.

Make it "blocking" so we can modify the headers.
*/
browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

Dieser Code ist genau wie das vorherige Beispiel, außer dass der Listener asynchron ist und ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das mit den neuen Headern aufgelöst wird:

```js
"use strict";

/*
This is the page for which we want to rewrite the User-Agent header.
*/
const targetPage = "https://httpbin.org/*";

/*
Set UA string to Opera 12
*/
const ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

/*
Rewrite the User-Agent header to "ua".
*/
function rewriteUserAgentHeaderAsync(e) {
  const asyncRewrite = new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const header of e.requestHeaders) {
        if (header.name.toLowerCase() === "user-agent") {
          header.value = ua;
        }
      }
      resolve({ requestHeaders: e.requestHeaders });
    }, 2000);
  });

  return asyncRewrite;
}

/*
Add rewriteUserAgentHeader as a listener to onBeforeSendHeaders,
only for the target page.

Make it "blocking" so we can modify the headers.
*/
browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeaderAsync,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeSendHeaders)-API von Chromium. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Verbreitung und Nutzung in Quelldatei- und Binärform, mit oder ohne
// Modifikationen, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Copyright-
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// erhalten.
//    * Weiterverbreitungen in Binärform müssen den obigen Copyright-
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder in anderen Materialien, die mit der
// Verbreitung geliefert werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus
// dieser Software entstehen, zu unterstützen oder zu bewerben,
// ohne vorherige, ausdrückliche schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT, UND JEDE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GARANTIE, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// IMPLIZIERTEN GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK SIND ABGELEHNT. DIE COPYRIGHT-INHABER ODER
// MITWIRKENDEN SIND IN KEINEM FALL HAFTBAR FÜR DIREKTE, INDIREKTE,
// ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON
// ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGS-, DATEN- ODER
// GEWINNVERLUSTE; ODER GESCHÄFTSUNTERBRECHUNGEN), WIE AUCH IMMER
// VERURSACHT UND UNTER JEDER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER
// HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT
// ODER ANDERWEITIG) HAFTBAR, SELBST WENN SIE AUF DIE MÖGLICHKEIT
// SOLCHER SCHÄDEN HINGEWIESEN WURDEN.
-->
