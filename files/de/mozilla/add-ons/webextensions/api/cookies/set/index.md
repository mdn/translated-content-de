---
title: cookies.set()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/set
l10n:
  sourceCommit: 4f75a883f60a0ebd730def108aa66251942bb833
---

Die **`set()`**-Methode der {{WebExtAPIRef("cookies")}} API setzt ein Cookie mit den angegebenen Cookie-Daten. Diese Methode entspricht dem Senden eines HTTP `Set-Cookie` Headers während einer Anfrage an eine gegebene URL.

Um diese Methode zu verwenden, muss eine Erweiterung die Berechtigung `"cookies"` sowie relevante Host-Berechtigungen haben. Siehe [`cookie` Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions) für weitere Details.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let setting = browser.cookies.set(
  details               // object
)
```

### Parameter

- `details`
  - : Ein `object`, das die Details des Cookies enthält, das Sie setzen möchten. Es kann die folgenden Eigenschaften haben:
    - `domain` {{optional_inline}}
      - : Ein `string`, der die Domain des Cookies repräsentiert. Wenn weggelassen, wird das Cookie zu einem host-only Cookie.
    - `expirationDate` {{optional_inline}}
      - : Eine `number`, die das Ablaufdatum des Cookies als Sekunden nach der UNIX-Epoche darstellt. Kann Millisekunden im Dezimalteil enthalten. Wenn weggelassen, wird das Cookie zu einem Sitzungscookie.
    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, der die First-Party-Domain darstellt, mit der das Cookie in Verbindung steht. Dieses Attribut muss angegeben werden, wenn der Browser die First-Party-Isolierung aktiviert hat. Siehe [First-party-Isolierung](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `httpOnly` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob das Cookie als HttpOnly (`true`) markiert ist oder nicht (false). Wenn weggelassen, ist der Standardwert false.
    - `name` {{optional_inline}}
      - : Ein `string`, das den Namen des Cookies repräsentiert. Wenn weggelassen, ist dieser standardmäßig leer.
    - `partitionKey` {{optional_inline}}
      - : Ein `object`, das die [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) repräsentiert, in der das Cookie gesetzt werden soll. Fügen Sie dieses Objekt hinzu, um ein Cookie in einem partitionierten Speicher zu setzen. Dieses Objekt enthält:
        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, das die First-Party-URL der Top-Level-Speicherpartition repräsentiert, die das Cookie enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, der den Pfad des Cookies repräsentiert. Wenn weggelassen, entspricht dieser standardmäßig dem Pfadanteil des URL-Parameters.
    - `sameSite` {{optional_inline}}
      - : Ein Wert des Typs {{WebExtAPIRef("cookies.SameSiteStatus")}}, der den SameSite-Status des Cookies angibt. Wenn weggelassen, ist der Standardwert `unspecified`.
    - `secure` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob das Cookie als secure (`true`) markiert ist oder nicht (false). Wenn weggelassen, ist der Standardwert false.
    - `storeId` {{optional_inline}}
      - : Ein `string`, das die ID des Cookie-Speichers repräsentiert, in dem das Cookie gesetzt werden soll. Wenn weggelassen, wird das Cookie im Cookie-Speicher des aktuellen Ausführungskontexts gesetzt.
    - `url`
      - : Ein `string`, das die Anfrage-URI repräsentiert, mit der das Cookie verknüpft ist. Dieser Wert kann die Standard-Domain- und Pfadwerte des erstellten Cookies beeinflussen. Wenn die Host-Berechtigungen für diese URL nicht in der Manifestdatei angegeben sind, schlägt der Methodenaufruf fehl.
    - `value` {{optional_inline}}
      - : Ein `string`, das den Wert des Cookies repräsentiert. Wenn weggelassen, ist dieser standardmäßig leer.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie')}}-Objekt erfüllt wird, das Details über das gesetzte Cookie enthält.

Wenn es mehr als ein Cookie mit demselben Namen für eine URL gibt, wird das Cookie mit dem längsten Pfad zurückgegeben. Für Cookies mit derselben Pfadlänge wird das Cookie mit der frühesten Erstellungszeit zurückgegeben.

> [!NOTE]
> Vor Firefox 133, wenn es mehr als ein Cookie mit demselben Namen gab, gab Firefox das Cookie mit der frühesten Erstellungszeit zurück.

Wenn der Aufruf fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel setzt ein Cookie für das Dokument, das von der aktiven Registerkarte gehostet wird:

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
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-set) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.
