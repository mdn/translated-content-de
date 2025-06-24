---
title: privacy.websites
slug: Mozilla/Add-ons/WebExtensions/API/privacy/websites
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Die Eigenschaft `privacy.websites` enthält datenschutzbezogene Einstellungen, die die Interaktion des Browsers mit Websites steuern. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt.

Standardwerte für diese Eigenschaften können je nach Browser variieren.

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
      - "reject_trackers_and_partition_foreign": Tracker ablehnen und Drittanbieter-Cookies partitionieren.

    - `nonPersistentCookies` {{deprecated_inline}}: ein Boolean. Wenn `true`, werden alle Cookies als Sitzungscookies behandelt.

- `firstPartyIsolate`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist.

    Wenn `true`, bewirkt die `firstPartyIsolate`-Einstellung, dass der Browser alle Daten (einschließlich Cookies, HSTS-Daten, gecachte Bilder und mehr) für alle Drittanbieter-Domains mit der Domain in der Adressleiste assoziiert. Dies verhindert, dass Drittanbieter-Tracker direkt gespeicherte Informationen verwenden, um den Benutzer auf verschiedenen Websites zu identifizieren, kann jedoch Websites beeinträchtigen, bei denen sich der Benutzer mit einem Drittanbieter-Konto anmeldet (wie einem Facebook- oder Google-Konto).

    Standardwert ist `false`.

- `hyperlinkAuditingEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `true`, sendet der Browser Auditing-Pings, wenn eine Website das `ping`-Attribut verwendet, um diese anzufordern.
- `protectedContentEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Nur auf Windows verfügbar. Wenn `true`, stellt der Browser Plugins eine eindeutige ID zur Verfügung, um geschützte Inhalte auszuführen.
- `referrersEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn aktiviert, sendet der Browser [referer](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header mit Ihren Anfragen.
- `resistFingerprinting`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist.

    Browser-Fingerabdrücke sind eine Praxis, bei der Websites Web-APIs nutzen, um Status- oder Konfigurationsdaten zu sammeln, die mit dem Browser oder dem Gerät, auf dem dieser läuft, verbunden sind. Durch diese Praxis können sie einen digitalen Fingerabdruck erstellen, den sie verwenden können, um einen bestimmten Benutzer zu identifizieren und zu verfolgen.

    Wenn `true`, bewirkt die `resistFingerprinting`-Einstellung, dass der Browser generische falsche Informationen für Daten meldet, die typischerweise für Fingerabdrücke verwendet werden. Solche Daten umfassen die Anzahl der CPU-Kerne, die Genauigkeit von JavaScript-Timern und die lokale Zeitzone. Es werden auch Funktionen deaktiviert, die in Fingerabdrücken verwendet werden, wie zum Beispiel GamePad-Unterstützung sowie die WebSpeech- und Navigator-APIs.

    Standardwert ist `false`.

- `thirdPartyCookiesAllowed`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `false`, blockiert der Browser [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).
- `trackingProtectionMode`
  - : "Tracking-Schutz" ist eine Browser-Funktion, die Anfragen an Domains blockiert, die dafür bekannt sind, Benutzer über Websites hinweg zu verfolgen. Seiten, die Benutzer verfolgen, sind meist Drittanbieter-Werbe- und Analyseseiten. Diese Einstellung ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, das bestimmt, ob der Browser den Tracking-Schutz aktivieren soll. Sein zugrunde liegender Wert ist ein String, der einen von drei Werten annehmen kann:
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
> Diese API basiert auf Chromiums [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy) API. Diese Dokumentation ist abgeleitet aus [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) im Chromium-Code.
