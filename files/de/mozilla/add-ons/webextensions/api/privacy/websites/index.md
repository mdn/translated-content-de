---
title: privacy.websites
slug: Mozilla/Add-ons/WebExtensions/API/privacy/websites
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

Die Eigenschaft `privacy.websites` enthält datenschutzbezogene Einstellungen, die steuern, wie der Browser mit Websites interagiert. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt.

Standardwerte für diese Eigenschaften variieren in der Regel zwischen den Browsern.

## Eigenschaften

- `cookieConfig`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein Objekt ist.

    Das Objekt hat zwei Eigenschaften:
    - `behavior`: ein String, der einen der folgenden Werte annehmen kann:
      - "allow_all": Alle Cookies akzeptieren
      - "reject_all": Alle Cookies ablehnen
      - "reject_third_party": Alle Drittanbieter-Cookies ablehnen
      - "allow_visited": Ein Drittanbieter-Cookie nur dann akzeptieren, wenn die Top-Level-Domain des Cookies bereits mindestens ein Cookie hat.
      - "reject_trackers": Tracking-Cookies ablehnen
      - "reject_trackers_and_partition_foreign": Tracking-Cookies ablehnen und Drittanbieter-Cookies partitionieren.

    - `nonPersistentCookies` {{deprecated_inline}}: ein Boolean. Wenn `true`, werden alle Cookies als Sitzungscookies behandelt.

- `firstPartyIsolate`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein Boolean ist.

    Wenn `true`, bewirkt die `firstPartyIsolate`-Präferenz, dass der Browser alle Daten (einschließlich Cookies, HSTS-Daten, zwischengespeicherte Bilder und mehr) für jegliche Drittanbieter-Domains mit der Domain in der Adressleiste verknüpft. Dies verhindert, dass Drittanbieter-Tracker direkt gespeicherte Informationen verwenden, um den Benutzer auf verschiedenen Websites zu identifizieren, kann jedoch dazu führen, dass Websites, bei denen sich der Benutzer mit einem Drittanbieter-Konto anmeldet (wie etwa ein Facebook- oder Google-Konto), nicht mehr funktionieren.

    Standardmäßig `false`.

- `hyperlinkAuditingEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `true`, sendet der Browser Überwachungs-Pings, wenn eine Website das `ping`-Attribut nutzt, um diese anzufordern.
- `protectedContentEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein Boolean ist. Nur unter Windows verfügbar. Wenn `true`, bietet der Browser Plugins eine eindeutige ID, um geschützte Inhalte auszuführen.
- `referrersEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn aktiviert, sendet der Browser [Referer](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header mit Ihren Anfragen.
- `resistFingerprinting`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein Boolean ist.

    Browser-Fingerprinting ist die Praxis, bei der Websites Web-APIs verwenden, um Status- oder Konfigurationsdaten zu sammeln, die mit dem Browser oder dem Gerät, auf dem es ausgeführt wird, verbunden sind. Dadurch können sie einen digitalen Fingerabdruck erstellen, den sie nutzen können, um einen bestimmten Benutzer zu identifizieren und zu verfolgen.

    Wenn `true`, bewirkt die `resistFingerprinting`-Präferenz, dass der Browser generische gefälschte Informationen für Daten meldet, die häufig für das Fingerprinting verwendet werden. Solche Daten umfassen die Anzahl der CPU-Kerne, die Genauigkeit von JavaScript-Timern und die lokale Zeitzone. Darüber hinaus werden Funktionen deaktiviert, die beim Fingerprinting genutzt werden, wie GamePad-Unterstützung und die WebSpeech- und Navigator-APIs.

    Standardmäßig `false`.

- `thirdPartyCookiesAllowed`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `false`, blockiert der Browser [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).
- `trackingProtectionMode`
  - : "Tracking-Schutz" ist eine Browser-Funktion, die Anfragen an Domains blockiert, die dafür bekannt sind, Benutzer über Websites hinweg zu verfolgen. Websites, die Benutzer verfolgen, sind meist Drittanbieter-Werbe- und -Analysetools. Diese Einstellung ist ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, das bestimmt, ob der Browser den Tracking-Schutz aktivieren soll. Sein zugrunde liegender Wert ist ein String, der einen von drei Werten annehmen kann:
    - `"always"`: Tracking-Schutz ist aktiviert.
    - `"never"`: Tracking-Schutz ist deaktiviert.
    - `"private_browsing"`: Tracking-Schutz ist nur in privaten Browserfenstern aktiviert.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy) API von Chromium. Diese Dokumentation ist abgeleitet von [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) im Chromium-Code.
