---
title: history.onTitleChanged
slug: Mozilla/Add-ons/WebExtensions/API/history/onTitleChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieses Ereignis wird ausgelöst, wenn der Titel einer vom Benutzer besuchten Seite erfasst wird. Um Besuche einer Seite zu überwachen, verwenden Sie {{WebExtAPIRef("history.onVisited")}}. Allerdings enthält das {{WebExtAPIRef("history.HistoryItem")}}, das dieses Ereignis an seinen Listener übergibt, nicht den Seitentitel, da der Seitentitel normalerweise nicht bekannt ist, wenn `history.onVisited` gesendet wird. Stattdessen wird das gespeicherte {{WebExtAPIRef("history.HistoryItem")}} mit dem Seitentitel aktualisiert, nachdem die Seite geladen wurde und der Titel bekannt ist. Das `history.onTitleChanged`-Ereignis wird zu diesem Zeitpunkt ausgelöst. Wenn Sie also die Titel der Seiten kennen müssen, während sie besucht werden, sollten Sie `history.onTitleChanged` überwachen.

## Syntax

```js-nolint
browser.history.onTitleChanged.addListener(listener)
browser.history.onTitleChanged.removeListener(listener)
browser.history.onTitleChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beenden des Zuhörens dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird ein Objekt mit diesen Eigenschaften übergeben:

    - `id`
      - : `String`. Die eindeutige Kennung für das mit diesem Besuch verknüpfte {{WebExtAPIRef("history.HistoryItem")}}.
    - `url`
      - : `String`. URL der besuchten Seite.
    - `title`
      - : `String`. Titel der besuchten Seite.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Hören Sie auf Titeländerungsereignisse und protokollieren Sie die ID, URL und den Titel der besuchten Seiten.

```js
function handleTitleChanged(item) {
  console.log(item.id);
  console.log(item.title);
  console.log(item.url);
}

browser.history.onTitleChanged.addListener(handleTitleChanged);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#event-onVisited)-API von Chromium. Diese Dokumentation wurde aus [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code abgeleitet.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung im Quell- und Binärformat, mit oder ohne
// Änderungen, sind unter den folgenden Bedingungen zulässig:
//
//    * Weiterverbreitungen von Quellcode müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen im Binärformat müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss sowohl in der
// Dokumentation als auch in anderen Materialien, die mit der Verbreitung geliefert
// werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software abgeleitet
// wurden, ohne ausdrückliche vorherige schriftliche Genehmigung zu unterstützen oder zu fördern.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT, UND ALLE AUSDRÜCKLICHEN ODER IMPLIZIERTEN
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN GARANTIEN
// DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, SIND AUSGESCHLOSSEN. IN KEINEM FALL HAFTEN
// DIE COPYRIGHT-INHABER ODER MITWIRKENDE FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
// AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSAUSFALL, DATENVERLUST ODER
// GEWINNE ODER GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT UND UNTER JEGLICHER HAFTUNGSTHEORIE,
// OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUS DER NUTZUNG DER SOFTWARE ENTSTEHEN,
// SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
