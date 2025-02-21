---
title: privacy.websites
slug: Mozilla/Add-ons/WebExtensions/API/privacy/websites
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{AddonSidebar}}

Die Eigenschaft `privacy.websites` enthält datenschutzbezogene Einstellungen, die steuern, wie der Browser mit Websites interagiert. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt.

Standardwerte für diese Eigenschaften variieren in der Regel zwischen den Browsern.

## Eigenschaften

- `cookieConfig`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrundeliegender Wert ein Objekt ist.

    Das Objekt hat zwei Eigenschaften:

    - `behavior`: ein String, der einen der folgenden Werte annehmen kann:

      - "allow_all": akzeptiere alle Cookies
      - "reject_all": lehne alle Cookies ab
      - "reject_third_party": lehne alle Drittanbieter-Cookies ab
      - "allow_visited": akzeptiere ein Drittanbieter-Cookie nur, wenn die Cookie-oberste Domain bereits mindestens ein Cookie hat.
      - "reject_trackers": lehne Tracking-Cookies ab
      - "reject_trackers_and_partition_foreign": lehne Tracker ab und partitioniere Drittanbieter-Cookies.

    - `nonPersistentCookies` {{deprecated_inline}}: ein Boolean. Wenn `true`, werden alle Cookies als Sitzungscookies behandelt.

- `firstPartyIsolate`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrundeliegender Wert ein Boolean ist.

    Wenn `true`, bewirkt die Einstellung `firstPartyIsolate`, dass der Browser alle Daten (einschließlich Cookies, HSTS-Daten, zwischengespeicherte Bilder und mehr) für alle Drittanbieter-Domains mit der Domain in der Adressleiste verknüpft. Dies verhindert, dass Drittanbieter-Tracker direkt gespeicherte Informationen verwenden, um den Benutzer über verschiedene Websites hinweg zu identifizieren, kann jedoch Websites beeinträchtigen, bei denen sich der Benutzer mit einem Drittanbieter-Konto anmeldet (wie z.B. einem Facebook- oder Google-Konto).

    Standard ist `false`.

- `hyperlinkAuditingEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrundeliegender Wert ein Boolean ist. Wenn `true`, sendet der Browser Prüf-Pings, wenn eine Website das `ping`-Attribut zur Anforderung verwendet.
- `protectedContentEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrundeliegender Wert ein Boolean ist. Nur unter Windows verfügbar. Wenn `true`, stellt der Browser Plugins eine eindeutige ID zur Verfügung, um geschützte Inhalte auszuführen.
- `referrersEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrundeliegender Wert ein Boolean ist. Wenn aktiviert, sendet der Browser [Referer](/de/docs/Web/HTTP/Headers/Referer)-Header mit Ihren Anfragen.
- `resistFingerprinting`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrundeliegender Wert ein Boolean ist.

    Browser-Fingerprinting ist die Praxis, bei der Websites Web-APIs verwenden, um Status- oder Konfigurationsdaten zu sammeln, die mit dem Browser oder dem Gerät verknüpft sind, auf dem er läuft. Auf diese Weise können sie einen digitalen Fingerabdruck erstellen, den sie verwenden können, um einen bestimmten Benutzer zu identifizieren und zu verfolgen.

    Wenn `true`, bewirkt die Einstellung `resistFingerprinting`, dass der Browser generische, gefälschte Informationen für Daten meldet, die häufig für Fingerprinting verwendet werden. Zu diesen Daten gehören die Anzahl der CPU-Kerne, die Präzision von JavaScript-Timern und die lokale Zeitzone. Es werden auch Funktionen deaktiviert, die beim Fingerprinting verwendet werden, wie GamePad-Unterstützung sowie die WebSpeech- und Navigator-APIs.

    Standard ist `false`.

- `thirdPartyCookiesAllowed`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrundeliegender Wert ein Boolean ist. Wenn `false`, blockiert der Browser [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).
- `trackingProtectionMode`

  - : "Tracking-Schutz" ist eine Browserfunktion, die Anfragen an Domains blockiert, von denen bekannt ist, dass sie Benutzer über Websites hinweg verfolgen. Websites, die Benutzer verfolgen, sind meist Drittanbieter-Werbe- und Analyseplattformen. Diese Einstellung ist ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, das bestimmt, ob der Browser den Tracking-Schutz aktivieren soll. Der zugrundeliegende Wert ist ein String, der einen von drei Werten annehmen kann:

    - `"always"`: Der Tracking-Schutz ist aktiviert.
    - `"never"`: Der Tracking-Schutz ist deaktiviert.
    - `"private_browsing"`: Der Tracking-Schutz ist nur in privaten Browserfenstern aktiviert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzen der `hyperlinkAuditingEnabled` Eigenschaft.

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
> Diese API basiert auf der [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy) API von Chromium. Diese Dokumentation basiert auf [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) im Chromium-Code.
