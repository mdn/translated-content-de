---
title: cookies.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAll
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{AddonSidebar}}

Die **`getAll()`** Methode der {{WebExtAPIRef("cookies")}} API ruft alle Cookies aus einem Cookie-Speicher ab, die den bereitgestellten Details entsprechen.

Um diese Methode zu verwenden, muss eine Erweiterung die Berechtigung `"cookies"` und relevante Host-Berechtigungen haben. Siehe [Cookie-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions) für weitere Details.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.cookies.getAll(
  details                // object
)
```

### Parameter

- `details`

  - : Ein `object`, das Details enthält, die verwendet werden, um zu abzufragende Cookies zuzuordnen. Die enthaltenen Eigenschaften sind wie folgt (siehe [Cookie-Typ](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/Cookie#type) für weitere Informationen dazu):

    - `domain` {{optional_inline}}
      - : Ein `string`, das eine Domäne repräsentiert, mit der Cookies verknüpft sein müssen (sie können mit dieser genauen Domäne oder einer ihrer Subdomänen verknüpft sein).
    - `firstPartyDomain` {{optional_inline}}

      - : Ein `string`, das die Erstanbieter-Domäne repräsentiert, mit der das abzurufende Cookie verknüpft ist.

        Diese Eigenschaft muss angegeben werden, wenn der Browser die Erstanbieter-Isolation aktiviert hat. Wenn Sie `null` übergeben, werden Cookies mit jedem Wert für `firstPartyDomain` und Cookies, die `firstPartyDomain` nicht gesetzt haben, in die Ergebnisse eingeschlossen. Siehe [Erstanbieter-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).

    - `name` {{optional_inline}}
      - : Ein `string`, der einen Namen repräsentiert, den die Cookies haben müssen.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das definiert, aus welchen [Speicherpartitionen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) Cookies zurückgegeben werden sollen:

        - Wenn weggelassen, werden nur Cookies aus nicht partitioniertem Speicher zurückgegeben.
        - Wenn enthalten ohne `topLevelSite`, werden alle Cookies aus partitioniertem und nicht partitioniertem Speicher zurückgegeben.
        - Wenn mit dem spezifizierten `topLevelSite` enthalten, werden Cookies aus dem spezifizierten Partitionsspeicher zurückgegeben.

        Dieses Objekt enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, der die Erstanbieter-URL der Top-Level-Website-Speicherpartition repräsentiert, die die Cookies enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, der einen Pfad repräsentiert — der Pfad der Cookies muss mit diesem identisch sein.
    - `secure` {{optional_inline}}
      - : Ein `boolean` — filtert Cookies nach ihrer `secure` Eigenschaft, sodass Sie sichere oder nicht sichere Cookies filtern können.
    - `session` {{optional_inline}}
      - : Ein `boolean` — filtert die Cookies nach ihrer `session` Eigenschaft, sodass Sie Sitzungscookies oder persistente Cookies filtern können.
    - `storeId` {{optional_inline}}
      - : Ein `string`, das den Cookie-Speicher repräsentiert, aus dem Cookies abgerufen werden sollen. Wenn weggelassen, wird der Cookie-Speicher des aktuellen Ausführungskontexts verwendet.
    - `url` {{optional_inline}}
      - : Ein `string`, das eine URL repräsentiert, mit der die abgerufenen Cookies assoziiert sein müssen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) das mit einem Array von {{WebExtAPIRef('cookies.Cookie')}} Objekten erfüllt wird, die den im Parameter `details` angegebenen Eigenschaften entsprechen. Es werden nur unverfallene Cookies zurückgegeben. Die zurückgegebenen Cookies sind nach Pfadlänge sortiert, von der längsten zur kürzesten. Wenn mehrere Cookies die gleiche Pfadlänge haben, sind diejenigen mit der frühesten Erstellungszeit zuerst.

> [!NOTE]
> Vor Firefox 133 gab Firefox die Cookies sortiert nach Erstellungszeit zurück, wobei die früheste Erstellungszeit zuerst war.

## Beispiele

Dieses Beispiel ruft alle Cookies ab, die der Browser mit dem Namen "favorite-color" gespeichert hat. Wenn das Ergebnis zurückgegeben wird, gibt der Code den Wert jedes Ergebnisses in der Konsole aus.

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
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-getAll) API von Chromium. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.
