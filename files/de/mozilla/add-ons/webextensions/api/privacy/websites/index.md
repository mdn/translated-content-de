---
title: privacy.websites
slug: Mozilla/Add-ons/WebExtensions/API/privacy/websites
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{AddonSidebar}}

Die Eigenschaft `privacy.websites` enthält datenschutzbezogene Einstellungen, die steuern, wie der Browser mit Websites interagiert. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt.

Die Standardwerte für diese Eigenschaften können je nach Browser variieren.

## Eigenschaften

- `cookieConfig`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Objekt ist.

    Das Objekt hat zwei Eigenschaften:

    - `behavior`: ein String, der einen der folgenden Werte annehmen kann:

      - "allow_all": alle Cookies akzeptieren
      - "reject_all": alle Cookies ablehnen
      - "reject_third_party": alle Drittanbieter-Cookies ablehnen
      - "allow_visited": ein Drittanbieter-Cookie nur dann akzeptieren, wenn die Top-Level-Domain des Cookies bereits mindestens ein Cookie hat.
      - "reject_trackers": Tracking-Cookies ablehnen
      - "reject_trackers_and_partition_foreign": Tracker ablehnen und Drittanbieter-Cookies aufteilen.

    - `nonPersistentCookies` {{deprecated_inline}}: ein Boolean. Wenn `true`, werden alle Cookies als Sitzungscookies behandelt.

- `firstPartyIsolate`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist.

    Wenn `true`, ordnet die `firstPartyIsolate`-Einstellung alle Daten (einschließlich Cookies, HSTS-Daten, gecachten Bildern und mehr) für beliebige Drittanbieter-Domains der Domain in der Adressleiste zu. Dies verhindert, dass Drittanbieter-Tracker direkt gespeicherte Informationen verwenden, um den Benutzer auf verschiedenen Websites zu identifizieren, kann jedoch Websites beeinträchtigen, bei denen sich der Benutzer mit einem Drittanbieter-Konto (wie einem Facebook- oder Google-Konto) anmeldet.

    Standardmäßig `false`.

- `hyperlinkAuditingEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `true`, sendet der Browser Audit-Pings, wenn eine Website das `ping`-Attribut verwendet, um sie anzufordern.
- `protectedContentEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Nur auf Windows verfügbar. Wenn `true`, stellt der Browser Plugins eine eindeutige ID zur Verfügung, um geschützte Inhalte auszuführen.
- `referrersEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn aktiviert, sendet der Browser [Referer](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header mit Ihren Anfragen.
- `resistFingerprinting`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist.

    Das Browser-Fingerprinting ist die Praxis, bei der Websites Web-APIs verwenden, um Status- oder Konfigurationsdaten zu sammeln, die mit dem Browser oder dem Gerät, auf dem er ausgeführt wird, verbunden sind. Dadurch können sie einen digitalen Fingerabdruck erstellen, mit dem sie einen bestimmten Benutzer identifizieren und verfolgen können.

    Wenn `true`, lässt die Einstellung `resistFingerprinting` den Browser generisch gespoofte Informationen für Daten melden, die häufig für Fingerprinting verwendet werden. Solche Daten umfassen die Anzahl der CPU-Kerne, die Genauigkeit der JavaScript-Timer und die lokale Zeitzone. Außerdem werden Funktionen deaktiviert, die beim Fingerprinting verwendet werden, wie GamePad-Unterstützung und die WebSpeech- und Navigator-APIs.

    Standardmäßig `false`.

- `thirdPartyCookiesAllowed`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `false`, blockiert der Browser [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).
- `trackingProtectionMode`

  - : "Tracking-Schutz" ist eine Browserfunktion, die Anfragen an Domains blockiert, die bekanntermaßen standortübergreifendes Tracking von Benutzern betreiben. Websites, die Benutzer verfolgen, sind meist Drittanbieter-Werbe- und Analyse-Websites. Diese Einstellung ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, das bestimmt, ob der Browser den Tracking-Schutz aktivieren soll. Sein zugrunde liegender Wert ist ein String, der einen von drei Werten annehmen kann:

    - `"always"`: Tracking-Schutz ist aktiviert.
    - `"never"`: Tracking-Schutz ist deaktiviert.
    - `"private_browsing"`: Tracking-Schutz ist nur in privaten Browser-Fenstern aktiviert.

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
> Diese API basiert auf Chromiums [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy) API. Diese Dokumentation ist abgeleitet von [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) im Chromium-Code.
