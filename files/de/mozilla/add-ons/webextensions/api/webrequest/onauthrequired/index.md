---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: 5c5ee35d66ac24bc6513c14f120750c74d779d20
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Server einen `401`- oder `407`-Statuscode und einen `WWW-Authenticate`-Header mit dem `Basic`-Schema sendet (das heißt, wenn der Server den Client auffordert, Authentifizierungsdaten wie Benutzername und Passwort bereitzustellen).

Der Listener kann auf eine von vier Arten reagieren:

- Keine Aktion durchführen
  - : Der Listener kann nichts tun und lediglich die Anforderung beobachten. In diesem Fall wirkt sich dies nicht auf die Bearbeitung der Anforderung aus, und der Browser fordert den Benutzer gegebenenfalls zur Anmeldung auf.
- Die Anfrage abbrechen

  - : Der Listener kann die Anfrage abbrechen. Wenn er dies tut, schlägt die Authentifizierung fehl, und der Benutzer wird nicht zur Anmeldung aufgefordert. Erweiterungen können Anfragen wie folgt abbrechen:

    - in addListener `"blocking"` im Parameter `extraInfoSpec` übergeben
    - im Listener ein Objekt zurückgeben, dessen `cancel`-Eigenschaft auf `true` gesetzt ist

- Anmeldeinformationen synchron bereitstellen

  - : Wenn Anmeldeinformationen synchron verfügbar sind, kann die Erweiterung diese synchron bereitstellen. Wenn die Erweiterung dies tut, versucht der Browser, sich mit den Anmeldeinformationen anzumelden. Der Listener kann Anmeldeinformationen wie folgt synchron bereitstellen:

    - in addListener `"blocking"` im Parameter `extraInfoSpec` übergeben
    - im Listener ein Objekt zurückgeben, dessen `authCredentials`-Eigenschaft auf die bereitzustellenden Anmeldeinformationen gesetzt ist

- Anmeldeinformationen asynchron bereitstellen

  - : Die Erweiterung muss möglicherweise Anmeldeinformationen asynchron abrufen. Beispielsweise muss die Erweiterung möglicherweise Anmeldeinformationen aus dem Speicher abrufen oder den Benutzer fragen. In diesem Fall kann der Listener Anmeldeinformationen asynchron wie folgt bereitstellen:

    - in addListener `"asyncBlocking"` in Chrome und Firefox oder `"blocking"` in Firefox im Parameter `extraInfoSpec` übergeben
    - Wenn `"blocking"` angegeben ist, kann die Erweiterung ein `webRequest.BlockingResponse`-Objekt oder ein Promise, das in ein `webRequest.BlockingResponse`-Objekt aufgelöst wird, zurückgeben
    - Wenn `"asyncBlocking"` angegeben ist, erhält die Ereignis-Listener-Funktion eine `asyncCallback`-Funktion als zweiten Parameter. `asyncCallback` kann asynchron aufgerufen werden und nimmt ein `webRequest.BlockingResponse`-Objekt als einzigen Parameter

      > [!NOTE]
      > Chrome unterstützt kein Promise als Rückgabewert ([Chromium Problem 1510405](https://crbug.com/1510405)). Für Alternativen siehe [den Rückgabewert des `listener`](#listener).

Siehe [Beispiele](#beispiele).

Wenn Ihre Erweiterung falsche Anmeldeinformationen bereitstellt, wird der Listener erneut aufgerufen. Aus diesem Grund sollten Sie darauf achten, eine Endlosschleife zu vermeiden, indem Sie wiederholt falsche Anmeldeinformationen bereitstellen.

## Berechtigungen

In Firefox- und Chrome-Erweiterungen der Manifest V2 müssen Sie die [`"webRequest"` und `"webRequestBlocking"` API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) zu Ihrer `manifest.json` hinzufügen.

Für Manifest V3 Erweiterungen unterstützt Chrome die `"webRequestBlocking"`-Berechtigung nicht mehr (außer für politisch installierte Erweiterungen). Stattdessen ermöglichen die Berechtigungen `"webRequest"` und `"webRequestAuthProvider"` die asynchrone Bereitstellung von Anmeldeinformationen. Firefox unterstützt weiterhin `"webRequestBlocking"` in Manifest V3 und bietet `"webRequestAuthProvider"` zur Bereitstellung von plattformübergreifender Kompatibilität.

## Proxy-Authentifizierung

Firefox löst im Allgemeinen keine `webRequest`-Ereignisse für Systemanfragen aus, wie z. B. Browser- oder Erweiterungsaktualisierungen oder Suchmaschinenanfragen. Um eine reibungslose Proxy-Authentifizierung für Systemanfragen zu ermöglichen, unterstützt Firefox ab Version 57 eine Ausnahme hierfür.

Wenn eine Erweiterung die Berechtigungen `"webRequest"`, `"webRequestBlocking"`, `"proxy"` und `"<all_urls>"` hat, kann sie `onAuthRequired` verwenden, um Anmeldeinformationen für die Proxy-Authentifizierung bereitzustellen (aber nicht für die normale Web-Authentifizierung). Der Listener kann Systemanfragen nicht abbrechen oder anderweitig ändern.

## Syntax

```js-nolint
browser.webRequest.onAuthRequired.addListener(
  listener,                    // function
  filter,                      //  object
  extraInfoSpec                //  optional array of strings
)
browser.webRequest.onAuthRequired.removeListener(listener)
browser.webRequest.onAuthRequired.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `details`
      - : `object`. Details zur Anfrage. Siehe den Abschnitt [details](#details) für weitere Informationen.
    - `asyncCallback` {{optional_inline}}

      - : Eine Funktion, die höchstens einmal aufgerufen wird, um das Anforderungsobjekt asynchron zu ändern.
        Dieser Parameter ist nur vorhanden, wenn der Ereignis-Listener mit `"asyncBlocking"` im `extraInfoSpec`-Array registriert wird. `asyncCallback` ist undefiniert, wenn `extraInfoSpec` nicht bereitgestellt wird oder `"blocking"` enthält.

    Gibt zurück: {{WebExtAPIRef('webRequest.BlockingResponse')}} oder ein {{jsxref("Promise")}} je nach Einstellungen in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen dieser Werte übergeben:

    - `"blocking"`: Machen Sie die Anfrage blockierend, damit Sie die Anfrage abbrechen oder Authentifizierungsinformationen bereitstellen können. Geben Sie ein `BlockingResponse`-Objekt mit seinen Eigenschaften `cancel` oder `authCredentials` zurück.

      - In Chrome muss der Ereignis-Listener synchron antworten.
      - In Firefox kann der Ereignis-Listener synchron antworten oder ein Promise zurückgeben, das in ein `BlockingResponse`-Objekt aufgelöst wird, um asynchron zu antworten.

    - `"asyncBlocking"`: Bearbeiten Sie die Anfrage asynchron. Der Rückgabewert des Ereignis-Listeners wird ignoriert. Um das Ereignis aufzulösen, übergeben Sie dem `asyncCallback`-Parameter ein `BlockingResponse`-Objekt.

      - Unterstützt ab Chrome 120 und Firefox 128.
      - Nicht unterstützt in Safari.

## Zusätzliche Objekte

### details

- `challenger`

  - : `object`. Der Server, der die Authentifizierung anfordert. Dies ist ein Objekt mit den folgenden Eigenschaften:

    - `host`
      - : `string`. Der [Hostname](https://en.wikipedia.org/wiki/Hostname#Internet_hostnames) des Servers.
    - `port`
      - : `integer`. Die Portnummer des Servers.

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem in einer kontextbezogenen Identität geöffneten Tab kommt, ist dies die Cookie Store ID der kontextbezogenen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextbezogenen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `frameId`
  - : `integer`. Dies ist `0`, wenn die Anfrage im Hauptframe auftritt; ein positiver Wert ist die ID eines Subframes, in dem die Anfrage auftritt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Frame-IDs sind eindeutig innerhalb eines Tabs.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `isProxy`
  - : `boolean`. `true` für `Proxy-Authenticate`, `false` für `WWW-Authenticate`.
    > **Hinweis:** `webRequest.onAuthRequired` wird nur für HTTP und HTTPS/TLS-Proxyserver aufgerufen, die eine Authentifizierung erfordern, nicht für SOCKS-Proxyserver.
- `method`
  - : `string`. Standard-HTTP-Methode (zum Beispiel `"GET"` oder `"POST"`).
- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Frame enthält, der die Anfrage sendet. Auf `-1` gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy lauft. Sie enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxys.
    - `port`
      - : `integer`. Die Portnummer des Proxyservers.
    - `type`

      - : `string`. Der Typ des Proxyservers. Einer von:

        - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - `"https"`: HTTP-Proxy über eine TLS-Verbindung zum Proxy
        - `"socks"`: SOCKS v5-Proxy
        - `"socks4"`: SOCKS v4-Proxy
        - `"direct"`: kein Proxy
        - `"unknown"`: unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxydienst.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die Namensauflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Verbindung nach dieser Anzahl von Sekunden fehlschlägt, wird der nächste Proxyserver im Array, das von [FindProxyForURL()](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) zurückgegeben wird, verwendet.

- `realm` {{optional_inline}}
  - : `string`. Der vom Server bereitgestellte Authentifizierungs-[Bereich](https://datatracker.ietf.org/doc/html/rfc1945#section-11), falls vorhanden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anforderungs-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie unterschiedliche Ereignisse im Zusammenhang mit derselben Anfrage in Beziehung setzen können.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die mit dieser Antwort empfangenen HTTP-Antwortheader.
- `scheme`
  - : `string`. Das Authentifizierungsschema: `"basic"` oder `"digest"`.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, den der Server zurückgegeben hat.
- `statusLine`
  - : `string`. Die HTTP-Statuszeile der Antwort, der `'HTTP/0.9 200 OK'`-String für HTTP/0.9-Antworten (d.h. Antworten ohne Statuszeile) oder ein leerer String, wenn es keine Header gibt.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf `-1` gesetzt, wenn die Anfrage nicht zu einem Tab gehört.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltfensterhierarchie Drittanbieter sind.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel `"image"`, `"script"` oder `"stylesheet"`.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art des Trackings, das mit der Anfrage verbunden ist, sofern die Anfrage nach dem [Firefox-Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit folgenden Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifizierungsflags für die erste Partei der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifizierungsflags für die Anfrage oder ihre Fensterhierarchie von Drittanbietern.

    Zu den Klassifizierungsflags gehören:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage an Fingerprinting beteiligt ist ("Eine Quelle wurde gefunden, die Fingerprinting durchführt").
      - `fingerprinting` zeigt an, dass die Domain zur Kategorie Fingerprinting und Tracking gehört. Beispiele für diese Art von Domain sind Werbungstreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain zur Kategorie Fingerprinting gehört, aber nicht zur Kategorie Tracking. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprint-Techniken verwenden, um den besuchenden Benutzer zur Betrugsbekämpfung zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, aber für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage an Tracking beteiligt ist. `tracking` ist eine generische Tracking-Anfrage. Die Suffixe `ad`, `analytics`, `social` und `content` identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage an E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, ohne `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle Social-Tracking-Flags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Webseite. Das Suffix `content` kennzeichnet Tracker, die Inhalte nachverfolgen und bereitstellen. Ihre Blockierung schützt Benutzer, kann aber dazu führen, dass Websites nicht vollständig funktionieren oder Elemente nicht angezeigt werden.

## Beispiele

Dieser Code beobachtet Authentifizierungsanfragen für die Ziel-URL:

```js
const target = "https://intranet.company.com/";

function observe(requestDetails) {
  console.log(`observing: ${requestDetails.requestId}`);
}

browser.webRequest.onAuthRequired.addListener(observe, { urls: [target] });
```

Dieser Code bricht Authentifizierungsanfragen für die Ziel-URL ab:

```js
const target = "https://intranet.company.com/";

function cancel(requestDetails) {
  console.log(`canceling: ${requestDetails.requestId}`);
  return { cancel: true };
}

browser.webRequest.onAuthRequired.addListener(cancel, { urls: [target] }, [
  "blocking",
]);
```

Dieser Code stellt synchron Anmeldeinformationen bereit. Er verfolgt ausstehende Anfragen, um sicherzustellen, dass keine wiederholt falschen Anmeldeinformationen eingereicht werden:

```js
const target = "https://intranet.company.com/";

const myCredentials = {
  username: "me@company.com",
  password: "zDR$ERHGDFy",
};

const pendingRequests = [];

// A request has completed.
// We can stop worrying about it.
function completed(requestDetails) {
  console.log(`completed: ${requestDetails.requestId}`);
  let index = pendingRequests.indexOf(requestDetails.requestId);
  if (index > -1) {
    pendingRequests.splice(index, 1);
  }
}

function provideCredentialsSync(requestDetails) {
  // If we have seen this request before, then
  // assume our credentials were bad, and give up.
  if (pendingRequests.includes(requestDetails.requestId)) {
    console.log(`bad credentials for: ${requestDetails.requestId}`);
    return { cancel: true };
  }
  pendingRequests.push(requestDetails.requestId);
  console.log(`providing credentials for: ${requestDetails.requestId}`);
  return { authCredentials: myCredentials };
}

browser.webRequest.onAuthRequired.addListener(
  provideCredentialsSync,
  { urls: [target] },
  ["blocking"],
);

browser.webRequest.onCompleted.addListener(completed, { urls: [target] });

browser.webRequest.onErrorOccurred.addListener(completed, { urls: [target] });
```

Dieser Code liefert Anmeldeinformationen asynchron, indem er sie aus dem Speicher abruft. Er verfolgt auch ausstehende Anfragen, um sicherzustellen, dass keine wiederholt falschen Anmeldeinformationen eingereicht werden:

```js
const target = "https://httpbin.org/basic-auth/*";

const pendingRequests = [];

/*
 * A request has completed. We can stop worrying about it.
 */
function completed(requestDetails) {
  console.log(`completed: ${requestDetails.requestId}`);
  let index = pendingRequests.indexOf(requestDetails.requestId);
  if (index > -1) {
    pendingRequests.splice(index, 1);
  }
}

function provideCredentialsAsync(requestDetails) {
  // If we have seen this request before,
  // then assume our credentials were bad,
  // and give up.
  if (pendingRequests.includes(requestDetails.requestId)) {
    console.log(`bad credentials for: ${requestDetails.requestId}`);
    return { cancel: true };
  } else {
    pendingRequests.push(requestDetails.requestId);
    console.log(`providing credentials for: ${requestDetails.requestId}`);
    // we can return a promise that will be resolved
    // with the stored credentials
    return browser.storage.local.get(null);
  }
}

browser.webRequest.onAuthRequired.addListener(
  provideCredentialsAsync,
  { urls: [target] },
  ["blocking"],
);

browser.webRequest.onCompleted.addListener(completed, { urls: [target] });

browser.webRequest.onErrorOccurred.addListener(completed, { urls: [target] });
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onAuthRequired) API von Chromium. Diese Dokumentation basiert auf [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Urheberrechtshinweis,
// die Liste dieser Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverteilungen in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und / oder anderen Materialien, die mit der
// Verteilung bereitgestellt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von
// dieser Software abgeleitet wurden, zu unterstützen oder zu bewerben,
// ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND DEN MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND ALLE AUSDRÜCKLICHEN ODER IMPLIZIERTEN
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN
// GARANTIEN DER MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN
// ZWECK SIND AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE EIGENTÜMER ODER
// MITWIRKENDE HAFTBAR FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE,
// BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER
// NICHT BESCHRÄNKT AUF DEN ERSATZ VON WAREN ODER DIENSTLEISTUNGEN;
// NUTZUNGSAUSFALL, DATEN- ODER GEWINNAUSFALL ODER GESCHÄFTSUNTERBRECHUNG)
// WIE AUCH IMMER VERURSACHT UND UNTER WELCHER HAFTUNGSTHEORIE AUCH
// IMMER, OB IN VERTRAG, STRENGER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER SONSTIGES), DIE AUS DER VERWENDUNG
// DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT
// SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
