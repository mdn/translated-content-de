---
title: cookies.set()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/set
l10n:
  sourceCommit: 6f58b8afb8e045e0d706ac0f0fdeacfaea487f86
---

{{AddonSidebar}}

Die **`set()`** Methode der {{WebExtAPIRef("cookies")}} API setzt ein Cookie mit den angegebenen Cookie-Daten. Diese Methode ist gleichbedeutend mit dem Senden eines HTTP `Set-Cookie` Headers während einer Anfrage an eine gegebene URL.

Um diese Methode zu verwenden, muss eine Erweiterung die Berechtigung `"cookies"` und entsprechende Host-Berechtigungen haben. Weitere Informationen finden Sie unter [`cookie` Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let setting = browser.cookies.set(
  details               // object
)
```

### Parameter

- `details`

  - : Ein `object`, das die Details des Cookies enthält, das Sie setzen möchten. Es kann folgende Eigenschaften haben:

    - `domain` {{optional_inline}}
      - : Ein `string`, der die Domain des Cookies darstellt. Wenn weggelassen, wird das Cookie ein host-only Cookie.
    - `expirationDate` {{optional_inline}}
      - : Eine `number`, die das Ablaufdatum des Cookies als Anzahl der Sekunden seit dem UNIX-Epoch darstellt. Wenn weggelassen, wird das Cookie ein Sitzungs-Cookie.
    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, der die First-Party-Domain darstellt, mit der das Cookie verknüpft ist. Diese Eigenschaft muss angegeben werden, wenn der Browser die First-Party-Isolierung aktiviert hat. Siehe [First-party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `httpOnly` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob das Cookie als HttpOnly (`true`) markiert ist oder nicht (false). Wenn weggelassen, ist der Standardwert false.
    - `name` {{optional_inline}}
      - : Ein `string`, der den Namen des Cookies darstellt. Wenn weggelassen, ist dies standardmäßig leer.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das die [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) darstellt, in der das Cookie gesetzt werden soll. Inkludieren Sie dieses Objekt, um ein Cookie in partitioniertem Speicher zu setzen. Dieses Objekt enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, der die First-Party-URL des Top-Level-Site-Speicherpartitions darstellt, die das Cookie enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, der den Pfad des Cookies darstellt. Wenn weggelassen, entspricht dies standardmäßig dem Pfadteil des URL-Parameters.
    - `sameSite` {{optional_inline}}
      - : Ein {{WebExtAPIRef("cookies.SameSiteStatus")}} Wert, der den SameSite-Status des Cookies anzeigt. Wenn weggelassen, ist der Standardwert 0, 'no_restriction'.
    - `secure` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob das Cookie als sicher (`true`) markiert ist oder nicht (false). Wenn weggelassen, ist der Standardwert false.
    - `storeId` {{optional_inline}}
      - : Ein `string`, der die ID des Cookie-Speichers darstellt, in dem das Cookie gesetzt werden soll. Wenn weggelassen, wird das Cookie im Cookie-Speicher des aktuellen Ausführungskontextes gesetzt.
    - `url`
      - : Ein `string`, der die Anforderungs-URI darstellt, die mit dem Cookie verknüpft ist. Dieser Wert kann die Standardwerte für Domain und Pfad des erstellten Cookies beeinflussen. Wenn keine Host-Berechtigungen für diese URL in der Manifestdatei angegeben sind, schlägt der Methodenaufruf fehl.
    - `value` {{optional_inline}}
      - : Ein `string`, der den Wert des Cookies darstellt. Wenn weggelassen, ist dies standardmäßig leer.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie')}} Objekt erfüllt wird, das Details über das gesetzte Cookie enthält.

Wenn es mehr als ein Cookie mit demselben Namen für eine URL gibt, wird das Cookie mit dem längsten Pfad zurückgegeben. Für Cookies mit gleicher Pfadlänge wird das Cookie mit der frühesten Erstellungszeit zurückgegeben.

> [!NOTE]
> Vor Firefox 133, wenn es mehr als ein Cookie mit demselben Namen gab, kehrte Firefox das Cookie mit der frühesten Erstellungszeit zurück.

Wenn der Aufruf fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel setzt ein Cookie für das Dokument, das von dem aktiven Tab gehostet wird:

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
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-set) API von Chromium. Diese Dokumentation stammt aus [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.
