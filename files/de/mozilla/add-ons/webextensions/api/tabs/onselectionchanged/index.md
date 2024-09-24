---
title: tabs.onSelectionChanged
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onSelectionChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!WARNING]
> Dieses Ereignis ist veraltet. Verwenden Sie stattdessen {{WebExtAPIRef("tabs.onActivated")}}.

Wird ausgelöst, wenn sich der ausgewählte Tab in einem Fenster ändert.

## Syntax

```js-nolint
browser.tabs.onSelectionChanged.addListener(listener)
browser.tabs.onSelectionChanged.removeListener(listener)
browser.tabs.onSelectionChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `tabId`
      - : `integer`. Die ID des Tabs, der aktiv geworden ist.
    - `selectInfo`
      - : `object`. Siehe den Abschnitt [selectInfo](#selectinfo_2) für weitere Details.

## Zusätzliche Objekte

### selectInfo

- `windowId`
  - : `integer`. Die ID des Fensters, in dem sich der ausgewählte Tab geändert hat.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onSelectionChanged) API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Weitergabe und Nutzung in nicht-kompilierter oder kompilierter Form, mit oder ohne
// Änderung, sind unter folgenden Bedingungen gestattet:
//
//    * Weitergaben des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weitergaben in kompilierter Form müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien enthalten, die
// mit der Verteilung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragenden dürfen verwendet werden, um Produkte, die von
// dieser Software abgeleitet wurden, zu bewerben oder zu bewerben,
// ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN INHABERN DER URHEBERRECHTE UND DEN BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER IMPLIZIERTEN GEWÄHRLEISTUNGEN,
// EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER
// MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN
// KEINEM FALL SIND DIE RECHTSINHABER ODER BEITRAGENDEN
// HAFTBAR FÜR JEGLICHE DIREKTE, INDIREKTE, BEILÄUFIGE,
// BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
// DATEN- ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT UND
// UNTER JEGLICHER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER
// HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), 
// DIE AUS DER VERWENDUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// HINGEWIESEN WURDE.
-->
