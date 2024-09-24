---
title: management.uninstallSelf()
slug: Mozilla/Add-ons/WebExtensions/API/management/uninstallSelf
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Deinstalliert das aufrufende Add-on.

Diese API _erfordert nicht_ die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let uninstallingSelf = browser.management.uninstallSelf(
  options              // object
)
```

### Parameter

- `options` {{optional_inline}}

  - : `object`. Objekt, das zwei Eigenschaften haben kann, beide optional:

    - `showConfirmDialog` {{optional_inline}}
      - : Boolean. Wenn `showConfirmDialog` `true` ist, zeigt der Browser ein Dialogfeld, in dem der Benutzer bestätigen muss, dass das Add-on deinstalliert werden soll. Standardmäßig `false`.
    - `dialogMessage` {{optional_inline}}
      - : String. Eine zusätzliche Nachricht, die im Bestätigungsdialog angezeigt wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Fehlermeldung abgelehnt wird, wenn der Benutzer die Deinstallation abbricht.

## Kompatibilität mit Browsern

{{Compat}}

## Beispiele

Deinstallieren Sie das Add-on und bitten Sie den Benutzer um Bestätigung. Im Callback wird geprüft, ob der Benutzer die Deinstallation abgebrochen hat.

Beachten Sie, dass wir keinen Erfüllungs-Handler übergeben haben, da das Add-on nach erfolgreicher Deinstallation nicht mehr vorhanden ist, um es zu handhaben.

```js
function onCanceled(error) {
  console.log(`Canceled: ${error}`);
}

let uninstalling = browser.management.uninstallSelf({
  showConfirmDialog: true,
});

uninstalling.then(null, onCanceled);
```

Dasselbe, aber auch mit einer benutzerdefinierten Nachricht im Dialog:

```js
function onCanceled(error) {
  console.log(`Canceled: ${error}`);
}

let uninstalling = browser.management.uninstallSelf({
  showConfirmDialog: true,
  dialogMessage: "Testing self-uninstall",
});

uninstalling.then(null, onCanceled);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-uninstallSelf) API von Chromium. Diese Dokumentation ist abgeleitet von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weitergabe und Nutzung in Quell- und Binärform, mit oder ohne
// Modifikation, sind unter der Bedingung erlaubt, dass die folgenden
// Bedingungen erfüllt sind:
//
//    * Weiterveröffentlichungen des Quellcodes müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss enthalten.
//    * Weiterveröffentlichungen in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien
// beilegen, die mit der Verteilung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet wurden, zu unterstützen oder zu bewerben, ohne
// vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZITE
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN
// GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK,
// WERDEN ABGELEHNT. IN KEINEM FALL IST DER URHEBERRECHTSINHABER ODER EINER
// DER MITWIRKENDEN FÜR DIREKTE, INDIREKTE, BEILÄUFIGE, BESONDERE,
// EXEMPLARISCHE ODER FOLGESCHÄDEN VERANTWORTLICH (EINSCHLIESSLICH, ABER
// NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN;
// NUTZUNGSAUSFÄLLE; DATENVERLUST ODER GEWINNE; UNTERBRECHUNG DER
// GESCHÄFTSTÄTIGKEIT), DIE AUF IRGENDEINE WEISE AUS DER NUTZUNG DIESER
// SOFTWARE ENTSTANDEN SIND, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER
// SCHÄDEN HINGEWIESEN WURDEN.
-->
