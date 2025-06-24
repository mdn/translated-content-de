---
title: onStateChanged
slug: Mozilla/Add-ons/WebExtensions/API/captivePortal/onStateChanged
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich der Zustand des Captive Portals ändert.

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
  - : Stellt das Lauschen auf dieses Ereignis ein. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `string` Der Zustand des Captive Portals, eine der folgenden Optionen: `unknown`, `not_captive`, `unlocked_portal` oder `locked_portal`.

## Beispiele

Umgang mit einer Änderung des Captive Portal-Status:

```js
function handlePortalStatus(portalStatusInfo) {
  console.log(`The portal status is now: ${portalStatusInfo.details}`);
}

browser.captivePortal.onStateChanged.addListener(handlePortalStatus);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärform, mit oder ohne
// Änderungen, sind erlaubt, sofern die folgenden Bedingungen erfüllt sind:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss enthalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien
// enthalten, die mit der Verbreitung geliefert werden.
//    * Weder der Name Google Inc. noch die Namen ihrer
// Mitwirkenden dürfen ohne spezifische vorherige schriftliche Erlaubnis
// verwendet werden, um Produkte zu unterstützen oder zu fördern, die von
// dieser Software abgeleitet sind.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND
// MITWIRKENDEN "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE
// AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GARANTIEN, EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE STILLSCHWEIGENDEN GARANTIEN DER
// MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN
// ABGELEHNT. IN KEINEM FALL HAFTEN DIE INHABER DER URHEBERRECHTE
// ODER MITWIRKENDEN FÜR JEGLICHE DIREKTEN, INDIREKTEN,
// BEILÄUFIGEN, BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON
// ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATEN- ODER
// GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT UND
// UNTER JEGLICHER HAFTUNGSTHEORIE, OB VERTRAG, STRIKTE HAFTUNG
// ODER UNERLAUBTE HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER NUTZUNG DIESER
// SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER
// SCHÄDEN HINGEWIESEN WURDE.
-->
