---
title: onStateChanged
slug: Mozilla/Add-ons/WebExtensions/API/captivePortal/onStateChanged
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich der Zustand des Captive-Portals ändert.

## Syntax

```js-nolint
browser.captivePortal.onStateChanged.addListener(listener)
browser.captivePortal.onStateChanged.removeListener(listener)
browser.captivePortal.onStateChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `string` Der Zustand des Captive-Portals, einer von `unknown`, `not_captive`, `unlocked_portal` oder `locked_portal` sein kann.

## Beispiele

Umgang mit einer Änderung des Captive-Portal-Status:

```js
function handlePortalStatus(portalstatusInfo) {
  console.log(`The portal status is now: ${portalstatusInfo.details}`);
}

browser.captivePortal.onStateChanged.addListener(handlePortalStatus);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Verbreitung und Verwendung in Quellen- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen des Quellcodes müssen das obige Copyright
// Hinweis, diese Liste der Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in Binärform müssen das obige
// Copyright-Hinweis, diese Liste der Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien enthalten, die
// mit der Verbreitung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragenden dürfen zur Unterstützung oder Werbung für Produkte, die von
// dieser Software abgeleitet sind, ohne besondere vorherige schriftliche Genehmigung verwendet werden.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND BEITRAGENDEN
// "WIE BESEHEN" UND JEGLICHE AUSDRÜCKLICHEN ODER STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF, DIE STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND
// DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK SIND AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE COPYRIGHTINHABER ODER BEITRAGENDEN
// FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BEGRENZT AUF, BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
// DATEN ODER GEWINNE; ODER GESCHÄFTSUNTERBRECHUNG) HAFTBAR, GLEICH OB IM
// VERTRAG, HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERES)
// DEREN SCHADEN AUS DER NUTZUNG ODER IM ZUSAMMENHANG MIT DER NUTZUNG DIESER SOFTWARE ENTSTEHT, SELBST WENN DIE MÖGLICHKEIT EINER SOLCHEN SCHÄDEN ANGEKÜNDIGT WURDE.
-->
