---
title: cookies.set()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/set
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die **`set()`** Methode der {{WebExtAPIRef("cookies")}} API setzt ein Cookie mit den angegebenen Cookie-Daten. Diese Methode ist äquivalent zum Versenden eines HTTP `Set-Cookie` Headers während einer Anfrage an eine gegebene URL.

Um diese Methode zu verwenden, muss eine Erweiterung die Berechtigung `"cookies"` und die relevanten Host-Berechtigungen haben. Siehe [`cookie`-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions) für weitere Details.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let setting = browser.cookies.set(
  details               // object
)
```

### Parameter

- `details`
  - : Ein `object`, das die Details des Cookies enthält, das Sie setzen möchten. Es kann diese Eigenschaften haben:
    - `domain` {{optional_inline}}
      - : Ein `string`, das die Domäne des Cookies darstellt. Wenn weggelassen, wird das Cookie zu einem Host-spezifischen Cookie.
    - `expirationDate` {{optional_inline}}
      - : Eine `number`, die das Ablaufdatum des Cookies als Anzahl der Sekunden seit dem UNIX-Epoch darstellt. Wenn weggelassen, wird das Cookie zu einem Sitzungs-Cookie.
    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, der die Erstanbieter-Domäne darstellt, mit der das Cookie verknüpft ist. Diese Eigenschaft muss angegeben werden, wenn der Browser die Erstanbieter-Isolation aktiviert hat. Siehe [First-party isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `httpOnly` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob das Cookie als HttpOnly (`true`) markiert ist oder nicht (false). Wenn weggelassen, ist der Standardwert false.
    - `name` {{optional_inline}}
      - : Ein `string`, der den Namen des Cookies darstellt. Wenn weggelassen, ist dieser Wert standardmäßig leer.
    - `partitionKey` {{optional_inline}}
      - : Ein `object`, das die [Storage-Partition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) darstellt, in der das Cookie gesetzt wird. Dieses Objekt ist einzuschließen, um ein Cookie in partitioniertem Speicher zu setzen. Dieses Objekt enthält:
        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, das die Erstanbieter-URL der Top-Level-Site-Speicherpartition darstellt, die das Cookie enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, der den Pfad des Cookies darstellt. Wenn weggelassen, ist der Standardwert der Pfadanteil des URL-Parameters.
    - `sameSite` {{optional_inline}}
      - : Ein {{WebExtAPIRef("cookies.SameSiteStatus")}} Wert, der den SameSite-Zustand des Cookies angibt. Wenn weggelassen, ist der Standardwert `unspecified`.
    - `secure` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob das Cookie als sicher (`true`) markiert ist oder nicht (false). Wenn weggelassen, ist der Standardwert false.
    - `storeId` {{optional_inline}}
      - : Ein `string`, das die ID des Cookie-Stores darstellt, in dem das Cookie gesetzt wird. Wenn weggelassen, wird das Cookie im Cookie-Store des aktuellen Ausführungskontexts gesetzt.
    - `url`
      - : Ein `string`, das die Request-URI darstellt, die mit dem Cookie verknüpft ist. Dieser Wert kann die Standard-Domäne und die Pfadwerte des erstellten Cookies beeinflussen. Wenn für diese URL keine Host-Berechtigungen in der Manifestdatei angegeben sind, schlägt der Methodenaufruf fehl.
    - `value` {{optional_inline}}
      - : Ein `string`, der den Wert des Cookies darstellt. Wenn weggelassen, ist dieser Wert standardmäßig leer.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie')}} Objekt erfüllt wird, das Details über das gesetzte Cookie enthält.

Wenn für eine URL mehr als ein Cookie mit demselben Namen vorhanden ist, wird das Cookie mit dem längsten Pfad zurückgegeben. Für Cookies mit derselben Pfadlänge wird das Cookie mit der frühesten Erstellungszeit zurückgegeben.

> [!NOTE]
> Vor Firefox 133 wurde, wenn es mehr als ein Cookie mit demselben Namen gab, das Cookie mit der frühesten Erstellungszeit von Firefox zurückgegeben.

Wenn der Anruf fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel setzt ein Cookie für das Dokument, das im aktiven Tab gehostet wird:

```js
let getActive = browser.tabs.query({ active: true, currentWindow: true });
getActive.then(setCookie);

function setCookie(tabs) {
  browser.cookies.set({
    url: tabs[0].url,
    name: "favorite-color",
    value: "red",
  });
}
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-set) API. Diese Dokumentation wird abgeleitet aus [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.
