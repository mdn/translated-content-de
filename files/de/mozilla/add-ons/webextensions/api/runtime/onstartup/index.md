---
title: runtime.onStartup
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onStartup
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Profil, das diese Erweiterung installiert hat, zum ersten Mal startet. Dieses Ereignis wird nicht ausgelöst, wenn ein privates Browsing-Profil (Inkognito) gestartet wird, selbst wenn diese Erweiterung im 'split' Inkognito-Modus arbeitet.

> [!NOTE]
> Bei der Verwendung einer Ereignisseite oder eines Hintergrunddienstmitarbeiters muss die Erweiterung einen Listener zu `runtime.onStartup` auf der Ereignisseite hinzufügen, damit die Ereignisseite mindestens einmal pro Browsersitzung ausgeführt wird.

## Syntax

```js-nolint
browser.runtime.onStartup.addListener(listener)
browser.runtime.onStartup.removeListener(listener)
browser.runtime.onStartup.hasListener(listener)
```

### Ereignisfunktionen

Alle Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt dem aufrufenden Ereignis einen `listener` hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören auf das aufrufende Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für das aufrufende Ereignis registriert ist. Gibt `true` zurück, wenn er aktiv ist, andernfalls `false`.

### Parameter

Der einzige Parameter ist `listener`, der für eine der oben genannten Funktionen verwendet wird.

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt.

## Beispiele

Öffnen Sie <https://giphy.com/explore/cat>, wenn der Browser gestartet wird:

```js
function handleStartup() {
  browser.tabs.create({
    url: "https://giphy.com/explore/cat",
  });
}

browser.runtime.onStartup.addListener(handleStartup);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der ["chrome.runtime"](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onStartup) API von Chromium. Diese Dokumentation ist von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions von Quellcode müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weitergaben in binärer Form müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der Verteilung geliefert
// werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet wurden, zu unterstützen oder zu bewerben, ohne vorherige
// ausdrückliche schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN "WIE BESEHEN"
// BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE URHEBERRECHTSINHABER ODER MITWIRKENDEN HAFTBAR FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSAUSFALL, DATEN ODER GEWINNE ODER GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT UND UNTER JEGLICHER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG) AUS DER VERWENDUNG DIESER SOFTWARE ENTSTANDEN, SELBST WENN DIE MÖGLICHKEIT SOLCHER SCHÄDEN ANGEGEBEN WURDE.
-->
