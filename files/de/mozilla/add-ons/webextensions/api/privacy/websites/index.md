---
title: privacy.websites
slug: Mozilla/Add-ons/WebExtensions/API/privacy/websites
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Eigenschaft `privacy.websites` enthält datenschutzbezogene Einstellungen, die steuern, wie der Browser mit Websites interagiert. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt.

Die Standardwerte für diese Eigenschaften können in verschiedenen Browsern variieren.

## Eigenschaften

- `cookieConfig`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Objekt ist.

    Das Objekt hat zwei Eigenschaften:

    - `behavior`: ein String, der einen der folgenden Werte annehmen kann:

      - "allow_all": alle Cookies akzeptieren
      - "reject_all": alle Cookies ablehnen
      - "reject_third_party": alle Drittanbieter-Cookies ablehnen
      - "allow_visited": ein Drittanbieter-Cookie nur akzeptieren, wenn die Top-Level-Domain des Cookies bereits mindestens ein Cookie hat.
      - "reject_trackers": Tracking-Cookies ablehnen
      - "reject_trackers_and_partition_foreign": Tracker ablehnen und Drittanbieter-Cookies partitionieren.

    - `nonPersistentCookies` {{deprecated_inline}}: ein boolean. Wenn wahr, werden alle Cookies als Sitzungscookies behandelt.

- `firstPartyIsolate`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolean ist.

    Wenn `true`, führt die `firstPartyIsolate`-Einstellung dazu, dass der Browser alle Daten (einschließlich Cookies, HSTS-Daten, gecachte Bilder und mehr) für alle Drittanbieter-Domains mit der Domain in der Adressleiste assoziiert. Dies verhindert, dass Drittanbieter-Tracker direkt gespeicherte Informationen nutzen, um den Benutzer über verschiedene Websites hinweg zu identifizieren, kann aber auch Websites beeinträchtigen, auf denen sich der Benutzer mit einem Drittanbieter-Konto (wie einem Facebook- oder Google-Konto) anmeldet.

    Standardmäßig `false`.

- `hyperlinkAuditingEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolean ist. Wenn `true`, sendet der Browser Prüfungs-Pings, wenn eine Website das `ping`-Attribut verwendet, um diese anzufordern.
- `protectedContentEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolean ist. Nur in Windows verfügbar. Wenn `true`, stellt der Browser Plugins eine eindeutige ID zur Verfügung, um geschützte Inhalte auszuführen.
- `referrersEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolean ist. Wenn aktiviert, sendet der Browser [Referer](/de/docs/Web/HTTP/Headers/Referer)-Header mit Ihren Anfragen.
- `resistFingerprinting`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolean ist.

    Browser-Fingerprinting ist die Praxis, bei der Websites Web-APIs nutzen, um Status- oder Konfigurationsdaten zu sammeln, die mit dem Browser oder dem Gerät, auf dem er läuft, verbunden sind. Dadurch können sie einen digitalen Fingerabdruck erstellen, den sie verwenden können, um einen bestimmten Benutzer zu identifizieren und zu verfolgen.

    Wenn `true`, bewirkt die `resistFingerprinting`-Einstellung, dass der Browser generische spoofed Informationen für Daten meldet, die häufig für die Fingerabdruckerkennung verwendet werden. Solche Daten umfassen die Anzahl der CPU-Kerne, die Genauigkeit der JavaScript-Timer und die lokale Zeitzone. Außerdem werden Funktionen deaktiviert, die für die Fingerabdruckerkennung genutzt werden, wie Unterstützung für GamePad und die WebSpeech- und Navigator-APIs.

    Standardmäßig `false`.

- `thirdPartyCookiesAllowed`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolean ist. Wenn `false`, blockiert der Browser [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies).
- `trackingProtectionMode`

  - : "Tracking-Schutz" ist eine Browserfunktion, die Anfragen an Domains blockiert, die dafür bekannt sind, Benutzer über Websites hinweg zu verfolgen. Websites, die Benutzer verfolgen, sind meist Drittanbieter-Werbungs- und Analysetools. Diese Einstellung ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, das festlegt, ob der Browser den Tracking-Schutz aktivieren soll. Sein zugrunde liegender Wert ist ein String, der einen von drei Werten annehmen kann:

    - `"always"`: Tracking-Schutz ist aktiviert.
    - `"never"`: Tracking-Schutz ist deaktiviert.
    - `"private_browsing"`: Tracking-Schutz ist nur in privaten Browserfenstern aktiviert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzen Sie die `hyperlinkAuditingEnabled`-Eigenschaft.

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
> Diese API basiert auf der [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy) API von Chromium. Diese Dokumentation stammt aus [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) im Chromium-Code.

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
