---
title: cookies.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/cookies/onChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Das `onChanged` Ereignis der {{WebExtAPIRef("cookies")}} API wird ausgelöst, wenn ein Cookie, auf das die Erweiterung zugreifen kann, gesetzt oder entfernt wird.

> [!NOTE]
> Wenn [Speicherpartitionierung](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) aktiviert ist, enthält `cookies.Cookie.partitionKey` die Beschreibung der Speicherpartition des Cookies. Beim Ändern von Cookies ist es wichtig, diesen Wert an {{WebExtAPIRef("cookies.set()")}} oder {{WebExtAPIRef("cookies.remove()")}} zu übergeben, um sicherzustellen, dass die Erweiterung mit dem richtigen Cookie arbeitet.

Beachten Sie, dass das Aktualisieren der Eigenschaften eines Cookies als zweistufiger Prozess implementiert wird:

1. Zuerst wird das zu aktualisierende Cookie vollständig entfernt, was eine Benachrichtigung mit einer {{WebExtAPIRef("cookies.OnChangedCause")}} von `overwrite` generiert.
2. Anschließend wird ein neues Cookie mit den aktualisierten Werten geschrieben, was eine zweite Benachrichtigung mit einer {{WebExtAPIRef("cookies.OnChangedCause")}} von `explicit` generiert.

## Syntax

```js-nolint
browser.cookies.onChanged.addListener(listener)
browser.cookies.onChanged.removeListener(listener)
browser.cookies.onChanged.hasListener(listener)
```

Diese API ist auch als `browser.cookies.onChanged.*` verfügbar.

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu hören. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `changeInfo`

      - : Ein `object` mit Details zu der aufgetretenen Änderung. Seine Eigenschaften lauten wie folgt:

        - `removed`
          - : Ein `boolean`, der auf `true` gesetzt ist, wenn ein Cookie entfernt wurde, und auf `false`, wenn nicht.
        - `cookie`
          - : Ein {{WebExtAPIRef('cookies.Cookie')}}-Objekt, das Informationen über das gesetzte oder entfernte Cookie enthält.
        - `cause`
          - : Ein {{WebExtAPIRef('cookies.OnChangedCause')}}-Wert, der den zugrunde liegenden Grund für die Änderung des Cookies darstellt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel hört auf `onChanged`-Ereignisse und protokolliert Details aus dem `changeInfo`-Argument:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(
    `Cookie geändert: \n` +
      ` * Cookie: ${JSON.stringify(changeInfo.cookie)}\n` +
      ` * Ursache: ${changeInfo.cause}\n` +
      ` * Entfernt: ${changeInfo.removed}`,
  );
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#event-onChanged) API. Diese Dokumentation ist aus [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code abgeleitet.
