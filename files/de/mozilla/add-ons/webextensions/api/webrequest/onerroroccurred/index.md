---
title: webRequest.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onErrorOccurred
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Anfrage aufgrund eines Fehlers nicht verarbeitet werden konnte: zum Beispiel bei fehlender Internetverbindung.

Der Fehler wird dem Listener als `error`-Eigenschaft des [`details`](#details)-Objekts übergeben.

Beachten Sie, dass dieses Ereignis nicht für HTTP-Fehler (4XX oder 5XX Antworten) ausgelöst wird: Diese durchlaufen die normalen Phasen einer Anfrage, rufen alle Event-Listener auf und setzen `details.statusCode`, um den Fehler zu melden.

Dieses Ereignis dient nur Informationszwecken.

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
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Details zur Anfrage. Siehe den Abschnitt [details](#details_2) für weitere Informationen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Falls die Anfrage von einem Tab stammt, der in einer kontextbezogenen Identität geöffnet ist, die Cookie-Store-ID der kontextbezogenen Identität. Siehe [Arbeiten mit kontextbezogenen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn zum Beispiel die Webseite unter "https\://example.com" ein Bild oder ein <iframe> enthält, dann ist die `documentUrl` für das Bild oder das <iframe> "https\://example.com". Bei einem Dokument auf oberster Ebene ist `documentUrl` undefiniert.
- `error`
  - : `string`. Die Fehlerbeschreibung. Dieser String ist ein interner Fehlerstring, kann von Browser zu Browser variieren und wird nicht garantiert, gleich zwischen Versionen zu bleiben.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Haupt-Frame stattfindet; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage stattfindet. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Rahmen-IDs sind einmalig innerhalb eines Tabs.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Datenträgercache abgerufen wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage von einem privaten Browserfenster stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann sich dabei um eine buchstäbliche IPv6-Adresse handeln.
- `method`
  - : `string`. Standard-HTTP-Methode: Zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn zum Beispiel "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer identisch mit der `documentUrl`. Wenn eine Seite zum Beispiel ein <iframe> enthält und das <iframe> enthält einen Link, der ein neues Dokument in das <iframe> lädt, dann ist die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des <iframe>, aber die `originUrl` ist die URL des Dokuments im <iframe>, das den Link enthalten hat.

- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Wird auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über eine Proxyverbindung erfolgt. Sie enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxyservers.
    - `port`
      - : `integer`. Die Portnummer des Proxyservers.
    - `type`

      - : `string`. Der Typ des Proxyservers. Einer von:

        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxyeinbindung über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5-Proxy
        - "socks4": SOCKS v4-Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxyservice.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die DNS-Auflösung basierend auf dem bereitgestellten Hostnamen durchführen wird, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Ausfallzeitlimit in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie diese nutzen können, um verschiedene Ereignisse derselben Anfrage zuzuordnen.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage stattfindet. Wird auf -1 gesetzt, wenn die Anfrage keinem Tab zugeordnet ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihr Inhaltsfenster-Diagramm von Dritten stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit dem Epochentag](https://de.wikipedia.org/wiki/Unixzeit).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art des Trackings, das mit der Anfrage verbunden ist, falls die Anfrage durch den [Firefox Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit den folgenden Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifikationskennzeichen für das First-Party der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifikationskennzeichen für die Anfrage oder Dritte in ihrer Fensterhierarchie.

    Zu den Klassifikationskennzeichen gehören:

    - `fingerprinting` und `fingerprinting_content`: gibt an, dass die Anfrage an Fingerprinting beteiligt ist ("eine Herkunft, bei der Fingerprinting festgestellt wurde").
      - `fingerprinting` zeigt an, dass die Domain zur Kategorie Fingerprinting und Tracking gehört. Zu den Beispielen dieser Art von Domäne gehören Werbetreibende, die ein Profil dem Benutzer zuordnen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain zur Kategorie Fingerprinting gehört, nicht aber zur Kategorie Tracking. Zu den Beispielen dieser Art von Domäne gehören Zahlungsanbieter, die Fingerprinting-Techniken zur Identifizierung des Besuchers zu Betrugsabwehrzwecken verwenden.
    - `cryptomining` und `cryptomining_content`: ähnlich der Kategorie Fingerprinting, jedoch für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: gibt an, dass die Anfrage an Tracking beteiligt ist. `tracking` ist jeglicher generischer Tracking-Anfrage, die Suffixe `ad`, `analytics`, `social` und `content` identifizieren die Art des Trackers.
    - `any_basic_tracking`: eine Meta-Kennzeichnung, die Tracking- und Fingerprinting-Kennzeichen kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: eine Meta-Kennzeichnung, die alle Tracking- und Fingerprinting-Kennzeichen kombiniert.
    - `any_social_tracking`: eine Meta-Kennzeichnung, die alle sozialen Tracking-Kennzeichen kombiniert.

    **Hinweis** Wenn der Firefox Tracking-Schutz die Anfrage blockiert, wird ein leeres Objekt zurückgegeben und `error` gibt einen dieser Codes zurück:

    - `NS_ERROR_MALWARE_URI`, das eine Malware-URI angibt.
    - `NS_ERROR_PHISHING_URI`, das eine Phishing-URI angibt.
    - `NS_ERROR_TRACKING_URI`, das eine Tracking-URI angibt.
    - `NS_ERROR_UNWANTED_URI`, das eine unerwünschte URI angibt.
    - `NS_ERROR_BLOCKED_URI`, das eine blockierte URI angibt.
    - `NS_ERROR_HARMFUL_URI`, das eine schädliche URI angibt.
    - `NS_ERROR_FINGERPRINTING`, das eine Fingerprinting-URI angibt.
    - `NS_ERROR_CRYPTOMINING_URI`, das eine Krypto-Mining-URI angibt.
    - `NS_ERROR_SOCIALTRACKING_URI`, das eine soziale Tracking-URI angibt.

## Browser-Kompatibilität

{{Compat}}

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

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onErrorOccurred)-API von Chromium. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
