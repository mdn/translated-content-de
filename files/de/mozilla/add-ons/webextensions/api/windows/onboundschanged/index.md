---
title: windows.onBoundsChanged
slug: Mozilla/Add-ons/WebExtensions/API/windows/onBoundsChanged
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Fenster in der Größe verändert oder verschoben wird. Dieses Ereignis wird ausgelöst, wenn die neuen Begrenzungen festgelegt sind. Es wird nicht für laufende Änderungen ausgelöst.

## Syntax

```js-nolint
browser.windows.onBoundsChanged.addListener(listener)
browser.windows.onBoundsChanged.removeListener(listener)
browser.windows.onBoundsChanged.hasListener(listener)
```

Ereignisse verfügen über drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `window`
      - : Ein {{WebExtAPIRef('windows.Window')}}-Objekt, das Details des Fensters enthält, das in der Größe verändert oder verschoben wurde.

## Beispiele

Protokollieren Sie die IDs von Fenstern, die verschoben oder in der Größe verändert wurden:

```js
browser.windows.onBoundsChanged.addListener((window) => {
  console.log(`New window: ${window.id}`);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#event-onBoundsChanged)-API von Chromium. Diese Dokumentation stammt aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärform, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen zulässig:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Copyright-
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// beibehalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen
// Copyright-Hinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien,
// die mit der Weiterverbreitung geliefert werden, beibehalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus dieser Software
// abgeleitet sind, zu bewerben oder zu fördern, ohne vorherige
// schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER IMPLIZIERTEN
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEM
// BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE COPYRIGHT-
// INHABER ODER MITWIRKENDE HAFTBAR FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE,
// BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN;
// NUTZUNGSAUSFÄLLE ODER DATENVERLUST; ODER GESCHÄFTSUNTERBRECHUNG)
// JEDOCH AUSGELÖST UND UNTER WELCHER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER
// HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// ANDEREM) AUF IRGENDEINE WEISE AUS DER NUTZUNG DIESER SOFTWARE ENTSTANDEN
// SIND, SELBST WENN AUF DIE MÖGLICHKEIT DERARTIGER SCHÄDEN HINGEWIESEN
// WURDE.
-->
