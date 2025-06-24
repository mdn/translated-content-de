---
title: cookies.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAll
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Die **`getAll()`**-Methode der {{WebExtAPIRef("cookies")}}-API ruft alle Cookies aus einem Cookie-Store ab, die den angegebenen Details entsprechen.

Um diese Methode zu verwenden, muss eine Erweiterung die Berechtigung `"cookies"` und die relevanten Hostberechtigungen haben. Weitere Informationen finden Sie unter [`cookie` permissions](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.cookies.getAll(
  details                // object
)
```

### Parameter

- `details`

  - : Ein `object`, das Details enthält, die verwendet werden, um die abzurufenden Cookies zuzuordnen. Eingeschlossene Eigenschaften sind wie folgt (siehe [Cookie-Typ](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/Cookie#type) für weitere Informationen):

    - `domain` {{optional_inline}}
      - : Ein `string`, das eine Domain darstellt, der die Cookies zugeordnet sein müssen (sie können entweder mit dieser genauen Domain oder einer ihrer Subdomains verknüpft sein).
    - `firstPartyDomain` {{optional_inline}}

      - : Ein `string`, das die erste Partei-Domain darstellt, mit der das abzurufende Cookie verknüpft ist.

        Diese Eigenschaft muss angegeben werden, wenn der Browser die Isolation der ersten Partei aktiviert hat. Wenn Sie `null` übergeben, werden Cookies mit jedem Wert für `firstPartyDomain` und Cookies ohne gesetztes `firstPartyDomain` in die Ergebnisse aufgenommen. Siehe [Isolation der ersten Partei](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).

    - `name` {{optional_inline}}
      - : Ein `string`, das einen Namen darstellt, den die Cookies haben müssen.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das definiert, aus welchen [Speicherpartitionen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) die Cookies zurückgegeben werden sollen:

        - Wenn weggelassen, werden nur Cookies aus nicht partitioniertem Speicher zurückgegeben.
        - Wenn enthalten ohne `topLevelSite`, werden alle Cookies aus partitioniertem und nicht partitioniertem Speicher zurückgegeben.
        - Wenn enthalten mit dem spezifizierten `topLevelSite`, werden Cookies aus der angegebenen Partitionspeicherung zurückgegeben.

        Dieses Objekt enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, das die URL der ersten Partei des Top-Level-Speichers angibt, der die Cookies enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, das einen Pfad darstellt – der Cookie-Pfad muss mit diesem identisch sein.
    - `secure` {{optional_inline}}
      - : Ein `boolean` – filtert Cookies nach ihrer `secure`-Eigenschaft und ermöglicht es Ihnen, sichere oder nicht sichere Cookies zu filtern.
    - `session` {{optional_inline}}
      - : Ein `boolean` – filtert die Cookies nach ihrer `session`-Eigenschaft und ermöglicht es Ihnen, Sitzungs- oder dauerhafte Cookies zu filtern.
    - `storeId` {{optional_inline}}
      - : Ein `string`, das den Cookie-Store darstellt, aus dem Cookies abgerufen werden sollen. Wenn weggelassen, wird der Cookie-Store des aktuellen Ausführungskontexts verwendet.
    - `url` {{optional_inline}}
      - : Ein `string`, das eine URL darstellt, mit der die abgerufenen Cookies verknüpft sein müssen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('cookies.Cookie')}}-Objekten erfüllt wird, die zu den in den `details`-Parametern angegebenen Eigenschaften passen. Nur nicht abgelaufene Cookies werden zurückgegeben. Die zurückgegebenen Cookies sind nach Pfadlänge sortiert, von der längsten zur kürzesten. Wenn mehrere Cookies die gleiche Pfadlänge haben, kommen diejenigen mit der frühesten Erstellungszeit zuerst.

> [!NOTE]
> Vor Firefox 133 wurden die Cookies in Firefox nach der Erstellungszeit sortiert, wobei die früheste Erstellungszeit zuerst kam.

## Beispiele

Dieses Beispiel ruft alle Cookies im Browser ab, die den Namen "favorite-color" haben. Wenn das Ergebnis zurückgegeben wird, druckt der Code den Wert jedes Ergebnisses in die Konsole.

```js
function logCookies(cookies) {
  for (const cookie of cookies) {
    console.log(cookie.value);
  }
}

browser.cookies
  .getAll({
    name: "favorite-color",
  })
  .then(logCookies);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-getAll) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.
