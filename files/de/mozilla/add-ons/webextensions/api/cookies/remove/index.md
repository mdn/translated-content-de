---
title: cookies.remove()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/remove
l10n:
  sourceCommit: 6f58b8afb8e045e0d706ac0f0fdeacfaea487f86
---

{{AddonSidebar}}

Die **`remove()`** Methode der {{WebExtAPIRef("cookies")}} API löscht ein Cookie, basierend auf dessen Namen und URL.

Um diese Methode zu verwenden, muss eine Erweiterung die Berechtigung `"cookies"` und relevante Host-Berechtigungen haben. Weitere Informationen finden Sie unter [`cookie` Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions).

Wenn es mehr als ein Cookie mit demselben Namen für eine URL gibt, wird das Cookie mit dem längsten Pfad gelöscht. Für Cookies mit derselben Pfadlänge wird das Cookie mit der frühesten Erstellungszeit gelöscht. Wenn kein passendes Cookie gefunden wird, wird `null` zurückgegeben.

> [!NOTE]
> Vor Firefox 133 wurde, wenn es mehr als ein Cookie mit demselben Namen gab, das Cookie mit der frühesten Erstellungszeit gelöscht.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.cookies.remove(
  details               // object
)
```

### Parameter

- `details`

  - : Ein `object`, das Informationen enthält, um das zu entfernende Cookie zu identifizieren. Es enthält folgende Eigenschaften:

    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, der die First-Party-Domain darstellt, mit der das zu entfernende Cookie verknüpft ist. Diese Eigenschaft muss angegeben werden, wenn der Browser First-Party-Isolation aktiviert hat. Siehe [First-party isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `name`
      - : Ein `string`, der den Namen des zu entfernenden Cookies darstellt.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das die [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) enthält, die das Cookie enthält. Dieses Objekt einschließen, um ein Cookie aus partitioniertem Speicher zu entfernen. Dieses Objekt enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, das die First-Party-URL der obersten Seiten-Speicherpartition darstellt, die das Cookie enthält.

    - `storeId` {{optional_inline}}
      - : Ein `string`, der die ID des Cookie-Speichers darstellt, in dem nach dem Cookie gesucht werden soll. Wenn nicht angegeben, wird das Cookie im Cookie-Speicher des aktuellen Ausführungskontexts gesucht.
    - `url`
      - : Ein `string`, der die URL darstellt, die mit dem Cookie verknüpft ist. Der API-Aufruf schlägt fehl, wenn die Erweiterung keine [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für diese URL hat.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie')}} Objekt erfüllt wird, das Details über das entfernte Cookie enthält. Wenn kein Cookie gefunden wird, das dem `details` Parameter entspricht, wird das Promise mit `null` erfüllt. Wenn der Aufruf fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel versucht, das Cookie namens "favorite-color" zu entfernen, dessen URL mit der URL des Dokuments übereinstimmt, das von der aktiven Registerkarte gehostet wird:

```js
function onRemoved(cookie) {
  console.log(`Removed: ${cookie}`);
}

function onError(error) {
  console.log(`Error removing cookie: ${error}`);
}

function removeCookie(tabs) {
  let removing = browser.cookies.remove({
    url: tabs[0].url,
    name: "favorite-color",
  });
  removing.then(onRemoved, onError);
}

let getActive = browser.tabs.query({ active: true, currentWindow: true });
getActive.then(removeCookie);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-remove) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.
