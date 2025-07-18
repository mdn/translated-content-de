---
title: history.onTitleChanged
slug: Mozilla/Add-ons/WebExtensions/API/history/onTitleChanged
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn der Titel einer von der Benutzerin oder dem Benutzer besuchten Seite aufgezeichnet wird. Um Besuche auf einer Seite zu verfolgen, verwenden Sie {{WebExtAPIRef("history.onVisited")}}. Das {{WebExtAPIRef("history.HistoryItem")}}, das dieses Ereignis an seinen Zuhörer übergibt, enthält jedoch nicht den Seitentitel, da der Seitentitel normalerweise nicht bekannt ist, wenn `history.onVisited` gesendet wird. Stattdessen wird das gespeicherte {{WebExtAPIRef("history.HistoryItem")}} aktualisiert, nachdem die Seite geladen wurde und der Titel bekannt ist. Zu diesem Zeitpunkt wird das Ereignis `history.onTitleChanged` ausgelöst. Wenn Sie die Titel der Seiten kennen müssen, während sie besucht werden, hören Sie auf `history.onTitleChanged`.

## Syntax

```js-nolint
browser.history.onTitleChanged.addListener(listener)
browser.history.onTitleChanged.removeListener(listener)
browser.history.onTitleChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Zuhörer hinzu.
- `removeListener(listener)`
  - : Stoppen Sie das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Zuhörer.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, `false` andernfalls.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird ein Objekt mit diesen Eigenschaften übergeben:
    - `id`
      - : `String`. Die eindeutige Kennung für das {{WebExtAPIRef("history.HistoryItem")}}, das mit diesem Besuch verbunden ist.
    - `url`
      - : `String`. URL der besuchten Seite.
    - `title`
      - : `String`. Titel der besuchten Seite.

## Beispiele

Überwachen Sie Ereignisse zur Titeländerung und zeichnen Sie die ID, URL und den Titel der besuchten Seiten auf.

```js
function handleTitleChanged(item) {
  console.log(item.id);
  console.log(item.title);
  console.log(item.url);
}

browser.history.onTitleChanged.addListener(handleTitleChanged);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#event-onVisited) API. Diese Dokumentation ist abgeleitet von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.
