---
title: privacy.websites
slug: Mozilla/Add-ons/WebExtensions/API/privacy/websites
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Eigenschaft `privacy.websites` enthält datenschutzbezogene Einstellungen, die steuern, wie der Browser mit Websites interagiert. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt.

Die Standardwerte dieser Eigenschaften variieren häufig zwischen verschiedenen Browsern.

## Eigenschaften

- `cookieConfig`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Objekt ist.

    Das Objekt hat zwei Eigenschaften:
    - `behavior`: ein String, der einen der folgenden Werte annehmen kann:
      - "allow_all": akzeptiere alle Cookies
      - "reject_all": lehne alle Cookies ab
      - "reject_third_party": lehne alle Drittanbieter-Cookies ab
      - "allow_visited": akzeptiere ein Drittanbieter-Cookie nur, wenn die oberste Domain des Cookies bereits mindestens ein Cookie hat.
      - "reject_trackers": lehne Tracking-Cookies ab
      - "reject_trackers_and_partition_foreign": lehne Tracker ab und partitioniere Drittanbieter-Cookies.

    - `nonPersistentCookies` {{deprecated_inline}}: ein Boolean. Wenn wahr, werden alle Cookies als Sitzungscookies behandelt.

- `firstPartyIsolate`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist.

    Wenn `true`, veranlasst die `firstPartyIsolate`-Präferenz, dass der Browser alle Daten (einschließlich Cookies, HSTS-Daten, gecachten Bildern und mehr) für alle Drittanbieter-Domains mit der Domain in der Adressleiste verknüpft. Dies verhindert, dass Drittanbieter-Tracker direkt gespeicherte Informationen verwenden, um den Benutzer über verschiedene Websites hinweg zu identifizieren, kann jedoch Websites beeinträchtigen, bei denen sich der Benutzer mit einem Drittanbieter-Konto anmeldet (wie ein Facebook- oder Google-Konto).

    Standardmäßig `false`.

- `hyperlinkAuditingEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `true`, sendet der Browser Audit-Pings, wenn eine Website das `ping`-Attribut verwendet, um sie anzufordern.
- `protectedContentEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Nur unter Windows verfügbar. Wenn `true`, stellt der Browser Plugins eine eindeutige ID zur Verfügung, um geschützte Inhalte auszuführen.
- `referrersEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn aktiviert, sendet der Browser [Referer](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header mit Ihren Anfragen.
- `resistFingerprinting`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist.

    Browser-Fingerprinting ist die Praxis, bei der Websites Web-APIs verwenden, um Status- oder Konfigurationsdaten zu sammeln, die mit dem Browser oder dem Gerät, auf dem er läuft, verbunden sind. Dadurch können sie einen digitalen Fingerabdruck erstellen, den sie verwenden können, um einen bestimmten Benutzer zu identifizieren und zu verfolgen.

    Wenn `true`, veranlasst die `resistFingerprinting`-Präferenz, dass der Browser generische, gefälschte Informationen für Daten meldet, die häufig für Fingerprinting verwendet werden. Solche Daten umfassen die Anzahl der CPU-Kerne, die Genauigkeit von JavaScript-Timern und die lokale Zeitzone. Es werden auch Funktionen deaktiviert, die beim Fingerprinting verwendet werden, wie GamePad-Unterstützung und die WebSpeech- und Navigator-APIs.

    Standardmäßig `false`.

- `thirdPartyCookiesAllowed`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `false`, blockiert der Browser [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).
- `trackingProtectionMode`
  - : "Tracking-Schutz" ist eine Browser-Funktion, die Anfragen an Domains blockiert, die dafür bekannt sind, Benutzer über Sites hinweg zu verfolgen. Sites, die Benutzer verfolgen, sind meist Drittanbieter-Werbe- und Analyse-Sites. Diese Einstellung ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, das bestimmt, ob der Browser den Tracking-Schutz aktivieren soll. Sein zugrunde liegender Wert ist ein String, der einen von drei Werten annehmen kann:
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
> Diese API basiert auf der [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy)-API von Chromium. Diese Dokumentation stammt aus der [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions von Quellcode müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Redistributions in binärer Form müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der Verteilung
// überliefert werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen
// seiner Mitwirkenden dürfen verwendet werden, um Produkte, die aus dieser
// Software abgeleitet wurden, zu unterstützen oder zu bewerben, ohne
// vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE GEWÄHRLEISTUNGEN,
// EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE IMPLIZIERTEN
// GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN
// ZWECK, ABGELEHNT. IN KEINEM FALL SIND DIE URHEBERRECHTSINHABER
// ODER MITWIRKENDEN FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE,
// BEISPIELHAFTE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF, BESCHAFFUNG VON ERSATZWAREN ODER
// -DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATENVERLUST, ODER
// GEWINNVERLUSTEN; ODER GESCHÄFTSUNTERBRECHUNG) HAFTBAR, UNABHÄNGIG
// VON DER URSACHE UND DER HAFTUNGSTHEORIE, SEI ES AUS
// VERTRAGSRECHT, VERSCHULDENSUNABHÄNGIER HAFTUNG ODER UNERLAUBTER
// HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE
// AUS DER VERWENDUNG DIESER SOFTWARE ENTSTEHT, SELBST WENN DARAUF
// HINGEWIESEN WURDE.
-->
