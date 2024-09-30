---
title: privacy.websites
slug: Mozilla/Add-ons/WebExtensions/API/privacy/websites
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Eigenschaft `privacy.websites` enthält datenschutzbezogene Einstellungen, die steuern, wie der Browser mit Websites interagiert. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt.

Standardwerte für diese Eigenschaften können je nach Browser variieren.

## Eigenschaften

- `cookieConfig`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Objekt ist.

    Das Objekt hat zwei Eigenschaften:

    - `behavior`: ein String, der einen der folgenden Werte annehmen kann:

      - "allow_all": akzeptiere alle Cookies
      - "reject_all": lehne alle Cookies ab
      - "reject_third_party": lehne alle Drittanbieter-Cookies ab
      - "allow_visited": akzeptiere ein Drittanbieter-Cookie nur, wenn die Top-Level-Domain des Cookies bereits mindestens ein Cookie hat.
      - "reject_trackers": lehne Tracking-Cookies ab
      - "reject_trackers_and_partition_foreign": lehne Tracker ab und partitioniere Drittanbieter-Cookies.

    - `nonPersistentCookies` {{deprecated_inline}}: ein Boolean. Wenn wahr, werden alle Cookies als Sitzungscookies behandelt.

- `firstPartyIsolate`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist.

    Wenn `true`, ordnet die Einstellung `firstPartyIsolate` alle Daten (einschließlich Cookies, HSTS-Daten, zwischengespeicherte Bilder und mehr) für jede Drittanbieter-Domain der Domain in der Adressleiste zu. Dies verhindert, dass Drittanbieter-Tracker direkt gespeicherte Informationen verwenden, um den Benutzer über verschiedene Websites hinweg zu identifizieren. Dies kann jedoch Websites beeinträchtigen, bei denen sich der Benutzer mit einem Drittanbieter-Konto (z. B. einem Facebook- oder Google-Konto) anmeldet.

    Standardmäßig `false`.

- `hyperlinkAuditingEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `true`, sendet der Browser Prüf-Pings, wenn eine Website das `ping`-Attribut verwendet, um sie anzufordern.
- `protectedContentEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Nur unter Windows verfügbar. Wenn `true`, stellt der Browser Plugins eine eindeutige ID zur Verfügung, um geschützte Inhalte auszuführen.
- `referrersEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn aktiviert, sendet der Browser [Referer](/de/docs/Web/HTTP/Headers/Referer)-Header mit Ihren Anfragen.
- `resistFingerprinting`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist.

    Browser-Fingerprinting ist die Praxis, bei der Websites Web-APIs verwenden, um Status- oder Konfigurationsdaten zu sammeln, die mit dem Browser oder dem Gerät, auf dem er läuft, verbunden sind. Dadurch können sie einen digitalen Fingerabdruck erstellen, den sie verwenden können, um einen bestimmten Benutzer zu identifizieren und zu verfolgen.

    Wenn `true`, sorgt die Einstellung `resistFingerprinting` dafür, dass der Browser generische gefälschte Informationen für Daten meldet, die üblicherweise für das Fingerprinting verwendet werden. Solche Daten umfassen die Anzahl der CPU-Kerne, die Genauigkeit von JavaScript-Timern und die lokale Zeitzone. Außerdem werden Funktionen deaktiviert, die beim Fingerprinting verwendet werden, wie z.B. GamePad-Unterstützung und die WebSpeech- und Navigator-APIs.

    Standardmäßig `false`.

- `thirdPartyCookiesAllowed`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `false`, blockiert der Browser [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies).
- `trackingProtectionMode`

  - : "Tracking-Schutz" ist eine Browser-Funktion, die Anfragen an Domains blockiert, die bekanntermaßen standortübergreifend Benutzer verfolgen. Websites, die Benutzer verfolgen, sind meistens Drittanbieter-Werbe- und Analyseseiten. Diese Einstellung ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, das bestimmt, ob der Browser den Tracking-Schutz aktivieren sollte. Sein zugrunde liegender Wert ist ein String, der einen von drei Werten annehmen kann:

    - `"always"`: Tracking-Schutz ist aktiviert.
    - `"never"`: Tracking-Schutz ist deaktiviert.
    - `"private_browsing"`: Tracking-Schutz ist nur in privaten Browserfenstern aktiviert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzen Sie die Eigenschaft `hyperlinkAuditingEnabled`.

```js
function onSet(result) {
  if (result) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

browser.browserAction.onClicked.addListener(() => {
  let getting = browser.privacy.websites.hyperlinkAuditingEnabled.get({});
  getting.then((got) => {
    console.log(got.value);
    if (
      got.levelOfControl === "controlled_by_this_extension" ||
      got.levelOfControl === "controllable_by_this_extension"
    ) {
      let setting = browser.privacy.websites.hyperlinkAuditingEnabled.set({
        value: true,
      });
      setting.then(onSet);
    } else {
      console.log("Not able to set hyperlinkAuditingEnabled");
    }
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy)-API von Chromium. Diese Dokumentation ist von [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) im Chromium-Code abgeleitet.

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
