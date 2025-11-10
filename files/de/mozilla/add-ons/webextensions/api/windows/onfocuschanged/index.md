---
title: windows.onFocusChanged
slug: Mozilla/Add-ons/WebExtensions/API/windows/onFocusChanged
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn sich das derzeit fokussierte Fenster ändert. Wird {{WebExtAPIRef('windows.WINDOW_ID_NONE')}} sein, wenn alle Browser-Fenster den Fokus verloren haben.

> [!NOTE]
> In Windows und einigen Linux-Fensterverwaltungen wird WINDOW_ID_NONE immer unmittelbar gesendet, bevor von einem Browser-Fenster zu einem anderen gewechselt wird.

## Syntax

```js-nolint
browser.windows.onFocusChanged.addListener(listener)
browser.windows.onFocusChanged.removeListener(listener)
browser.windows.onFocusChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `windowId`
      - : `integer`. ID des neu fokussierten Fensters.

## Beispiele

Protokollieren von Fokusänderungen:

```js
browser.windows.onFocusChanged.addListener((windowId) => {
  console.log(`Newly focused window: ${windowId}`);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#event-onFocusChanged) API von Chromium. Diese Dokumentation stammt aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Verbreitung und Nutzung in Quell- und Binärform, mit oder ohne
// Modifikation, ist unter den folgenden Bedingungen gestattet:
//
//    * Weiterverteilungen des Quellcodes müssen den obigen Urheberrechts-
// hinweis, diese Liste der Bedingungen und den folgenden Haftungsausschluss
// im Quellcode beibehalten.
//    * Weiterverteilungen in Binärform müssen den obigen Urheberrechts-
// hinweis, diese Liste der Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der Verbreitung
// geliefert werden, beibehalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragenden dürfen verwendet werden, um Produkte, die von dieser Software
// abgeleitet wurden, ohne ausdrückliche schriftliche Genehmigung zu
// unterstützen oder zu bewerben.
//
// DIESES SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE IMPLIZIERTEN
// GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK,
// WERDEN HIERMIT ABGELEHNT. IN KEINEM FALL SIND DIE RECHTSINHABER ODER
// BEITRAGENDEN HAFTBAR FÜR MEHR ALS MITTELBARE, ZUFÄLLIGE, BESONDERE,
// EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
// AUF, DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
// DATENVERLUST ODER GEWINNVERLUST; GESCHÄFTSUNTERBRECHUNG), WIE AUCH IMMER
// VERURSACHT UND UNTER JEGLICHER HAFTUNGSTHEORIE, SEI ES AUS VERTRAG,
// STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT
// ODER ANDERWEITIG), DIE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST
// WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WORDEN IST.
-->
