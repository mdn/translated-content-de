---
title: privacy.websites
slug: Mozilla/Add-ons/WebExtensions/API/privacy/websites
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die Eigenschaft `privacy.websites` enthält datenschutzbezogene Einstellungen, die steuern, wie der Browser mit Websites interagiert. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt.

Standardwerte für diese Eigenschaften variieren in der Regel je nach Browser.

## Eigenschaften

- `cookieConfig`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein Objekt ist.

    Das Objekt hat zwei Eigenschaften:
    - `behavior`: ein String, der einen der folgenden Werte annehmen kann:
      - "allow_all": akzeptiere alle Cookies
      - "reject_all": lehne alle Cookies ab
      - "reject_third_party": lehne alle Drittanbieter-Cookies ab
      - "allow_visited": akzeptiere ein Drittanbieter-Cookie nur, wenn die Top-Level-Domain des Cookies bereits mindestens ein Cookie hat.
      - "reject_trackers": lehne Tracking-Cookies ab
      - "reject_trackers_and_partition_foreign": lehne Tracker ab und partitioniere Drittanbieter-Cookies.

    - `nonPersistentCookies` {{deprecated_inline}}: ein Boolean. Wenn `true`, werden alle Cookies als Sitzungscookies behandelt.

- `firstPartyIsolate`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein Boolean ist.

    Wenn `true`, veranlasst die `firstPartyIsolate`-Einstellung, dass der Browser alle Daten (einschließlich Cookies, HSTS-Daten, gecachte Bilder und mehr) für alle Drittanbieterdomains mit der Domain in der Adressleiste verknüpft. Dies verhindert, dass Drittanbieter-Tracker direkt gespeicherte Informationen verwenden, um den Benutzer über verschiedene Websites hinweg zu identifizieren, kann jedoch Websites stören, bei denen der Benutzer sich mit einem Drittanbieterkonto anmeldet (wie ein Facebook- oder Google-Konto).

    Standardmäßig `false`.

- `hyperlinkAuditingEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein Boolean ist. Wenn `true`, sendet der Browser Auditing-Pings, wenn eine Website das `ping`-Attribut verwendet, um dies anzufordern.
- `protectedContentEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein Boolean ist. Nur auf Windows verfügbar. Wenn `true`, stellt der Browser Plugins eine eindeutige ID zur Verfügung, um geschützte Inhalte abzuspielen.
- `referrersEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein Boolean ist. Wenn aktiviert, sendet der Browser [Referer](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header mit Ihren Anfragen.
- `resistFingerprinting`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein Boolean ist.

    Browser-Fingerprinting ist die Praxis, bei der Websites Web-APIs verwenden, um Status- oder Konfigurationsdaten zu sammeln, die mit dem Browser oder dem Gerät, auf dem es läuft, verbunden sind. Auf diese Weise können sie einen digitalen Fingerabdruck erstellen, den sie verwenden können, um einen bestimmten Benutzer zu identifizieren und zu verfolgen.

    Wenn `true`, veranlasst die `resistFingerprinting`-Einstellung, dass der Browser generische, gefälschte Informationen für Daten meldet, die häufig für Fingerprinting verwendet werden. Solche Daten umfassen die Anzahl der CPU-Kerne, die Präzision von JavaScript-Timern und die lokale Zeitzone. Es werden auch Funktionen deaktiviert, die beim Fingerprinting verwendet werden, wie z.B. GamePad-Unterstützung und die WebSpeech- sowie Navigator-APIs.

    Standardmäßig `false`.

- `thirdPartyCookiesAllowed`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein Boolean ist. Wenn `false`, blockiert der Browser [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).
- `trackingProtectionMode`
  - : "Tracking-Schutz" ist eine Browserfunktion, die Anfragen an Domains blockiert, die dafür bekannt sind, Nutzer über Seiten hinweg zu verfolgen. Webseiten, die Nutzer verfolgen, sind häufig Drittanbieter-Werbe- und Analysewebseiten. Diese Einstellung ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, das bestimmt, ob der Browser den Tracking-Schutz aktivieren soll. Sein zugrundeliegender Wert ist ein String, der einen der drei Werte annehmen kann:
    - `"always"`: Tracking-Schutz ist immer an.
    - `"never"`: Tracking-Schutz ist aus.
    - `"private_browsing"`: Tracking-Schutz ist nur in privaten Browsing-Fenstern an.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy)-API von Chromium. Diese Dokumentation ist abgeleitet von [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) im Chromium-Code.
