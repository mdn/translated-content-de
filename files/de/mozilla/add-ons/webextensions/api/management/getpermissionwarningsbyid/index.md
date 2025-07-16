---
title: management.getPermissionWarningsById()
slug: Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsById
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wenn der Benutzer ein Add-on installiert oder aktualisiert, kann der Browser den Benutzer über besonders mächtige [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) warnen, die das Add-on angefordert hat. Nicht alle Berechtigungen führen zu Warnungen, und dieses Verhalten ist nicht über alle Browser hinweg standardisiert.

Basierend auf der ID eines Add-ons gibt diese Funktion die Berechtigungswarnungen dafür als ein Array von Zeichenfolgen zurück.

Diese API erfordert die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingWarnings = browser.management.getPermissionWarningsById(
  id                  // string
)
```

### Parameter

- `id`
  - : `string`. ID des Add-ons, dessen Berechtigungswarnungen Sie abrufen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Zeichenfolgen erfüllt wird, von denen jede den Text einer Berechtigungswarnung enthält.

## Beispiele

Protokollieren Sie die Berechtigungswarnungen für das Add-on, dessen ID "my-add-on" ist:

```js
let id = "my-add-on";

function gotWarnings(warnings) {
  for (const warning of warnings) {
    console.log(warning);
  }
}

browser.management.getPermissionWarningsById(id).then(gotWarnings);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-getPermissionWarningsById) API von Chromium. Diese Dokumentation ist abgeleitet von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.

<!--
// Copyright 2015 Die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Redistribution und Verwendung in sowohl Source- als auch Binary-Form,
// mit oder ohne Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverteilungen des Sourcecodes müssen das obige Copyright,
// diesen Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverteilungen in binärer Form müssen das obige
// Copyright, diese Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung bereitgestellt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragszahler dürfen verwendet werden, um Produkte zu unterstützen
// oder zu bewerben, die sich aus dieser Software ableiten, ohne spezifische
// vorherige schriftliche Erlaubnis.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHE ODER
// IMPLIZIERTE GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF
// DIE IMPLIZIERTEN GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL
// SIND DIE COPYRIGHTINHABER ODER BEITRAGENDEN FÜR JEGLICHE DIREKTEN,
// INDIREKTEN, ZUFÄLLIGEN, BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON
// ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATEN ODER
// GEWINNE; ODER GESCHÄFTSUNTERBRECHUNG) HAFTBAR, UNABHÄNGIG VON DER
// URSACHE UND DER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG
// ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER VERWENDUNG DER
// SOFTWARE ENTSTANDEN SIND, SELBST WENN SIE AUF DIE MÖGLICHKEIT
// SOLCHER SCHÄDEN HINGEWIESEN WURDEN.
-->
