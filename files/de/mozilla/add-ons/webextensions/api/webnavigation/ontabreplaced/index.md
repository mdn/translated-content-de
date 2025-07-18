---
title: webNavigation.onTabReplaced
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onTabReplaced
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn der Inhalt des Tabs durch einen anderen (in der Regel zuvor vor-gerenderten) Tab ersetzt wird.

## Syntax

```js-nolint
browser.webNavigation.onTabReplaced.addListener(
  listener,                   // function
  filter                      // optional object
);
browser.webNavigation.onTabReplaced.removeListener(listener)
browser.webNavigation.onTabReplaced.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu überwachen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob der `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es überwacht wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Siehe den Abschnitt [details](#details) für weitere Informationen.

## Zusätzliche Objekte

### details

- `replacedTabId`
  - : `integer`. Die ID des Tabs, der ersetzt wurde.
- `tabId`
  - : `integer`. Die ID des Tabs, der den alten Tab ersetzt hat.
- `timeStamp`
  - : `number`. Die Zeit, wann der Austausch stattfand, in [Millisekunden seit dem Epoche](https://en.wikipedia.org/wiki/Unix_time).

## Beispiele

```js
function logOnTabReplaced(details) {
  console.log(`onTabReplaced ${details}`);
}

browser.webNavigation.onTabReplaced.addListener(logOnTabReplaced);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onTabReplaced) API. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Redistribution und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen gestattet:
//
//    * Weitergaben des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss
// enthalten.
//    * Weitergaben in binärer Form müssen den obigen Urheberrechtshinweis,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der
// Verteilung bereitgestellt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von
// dieser Software abgeleitet wurden, zu unterstützen oder zu bewerben,
// ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT UND ALLE AUSDRÜCKLICHEN ODER
// IMPLIZIERTER GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
// AUF DIE IMPLIZIERTEN GARANTIEN DER MARKTREIFE UND EIGNUNG
// FÜR EINEN BESTIMMTEN ZWECK, WERDEN AUSGESCHLOSSEN. IN KEINEM FALL
// SOLLEN DIE URHEBER ODER BEITRAGENDEN FÜR DIREKTE, INDIREKTE,
// INZIDENTELLE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN
// HAFTBAR GEMACHT WERDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
// AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
// DATENVERLUST ODER GEWINNVERLUST; ODER BETRIEBSUNTERBRECHUNG)
// JEDOCH URSÄCHLICH, OB IN VERTRAG, STRIKTER HAFTUNG ODER FALSCH,
// AUCH WENN BERATEN ÜBER DIE MÖGLICHKEIT SOLCHER SCHÄDEN.
-->
