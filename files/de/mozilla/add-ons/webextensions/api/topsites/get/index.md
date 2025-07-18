---
title: topSites.get()
slug: Mozilla/Add-ons/WebExtensions/API/topSites/get
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft ein Array ab, das Informationen über Seiten enthält, die der Benutzer häufig und kürzlich besucht hat.

Browser führen eine Liste von Seiten, die der Benutzer häufig und kürzlich besucht. Sie verwenden diese Liste, um dem Benutzer zu helfen, leicht zu diesen Orten zurückzukehren. Zum Beispiel stellt Firefox standardmäßig eine Liste der am häufigsten besuchten Seiten auf der "Neuer Tab"-Seite zur Verfügung.

Um zu bestimmen, welche Seiten in der Liste erscheinen und in welcher Reihenfolge sie erscheinen, kombiniert der Browser "Häufigkeit" - wie oft der Benutzer die Seite besucht hat - und "Aktualität" - wie kürzlich der Benutzer die Seite besucht hat.

Der Browser kann dann eine weitere Filterung auf diese Liste anwenden, bevor er sie dem Benutzer präsentiert. Zum Beispiel listet die "Neuer Tab"-Seite in Firefox nur eine Seite pro Domain auf, und der Benutzer kann Seiten daran hindern, in der Liste angezeigt zu werden.

Die `topSites.get()`-API ermöglicht einer Erweiterung den Zugriff auf diese Liste. Wenn sie ohne Optionen aufgerufen wird, liefert sie die gefilterte Liste von Seiten - also die, die auf der "Neuer Tab"-Seite erscheint. Durch das Bereitstellen verschiedener Optionen ist es jedoch für eine Erweiterung möglich, die ungefilterte Liste der Seiten zu erhalten.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Um die topSites-API zu verwenden, müssen Sie die "topSites" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Syntax

```js-nolint
let gettingTopSites = browser.topSites.get(
    options  // object
)
```

### Parameter

- `options`
  - : `object`. Optionen zur Modifikation der zurückgegebenen Seitenliste. Dies kann beliebige der folgenden Eigenschaften umfassen:
    - `includeBlocked` {{optional_inline}}
      - : `Boolean`. Einschließlich Seiten, die der Benutzer von der "Neuer Tab"-Seite entfernt hat. Standardmäßig `false`.
    - `includeFavicon` {{optional_inline}}
      - : `Boolean`. Füge Favicons in die Ergebnisse ein, für Seiten, bei denen sie verfügbar sind. Standardmäßig `false`.
    - `includePinned` {{optional_inline}}
      - : `Boolean`. Einschließlich der Seiten, die der Benutzer an die Firefox "Neuer Tab"-Seite angeheftet hat.
        Standardmäßig `false`.
    - `includeSearchShortcuts` {{optional_inline}}
      - : `Boolean`. Einschließlich Suchverknüpfungen, die auf der Firefox "Neuer Tab"-Seite erscheinen.
        Standardmäßig `false`.
    - `limit` {{optional_inline}}
      - : `Integer`. Die Anzahl der zurückzugebenden Seiten. Dies muss eine Zahl zwischen 1 und 100 sein. Standardmäßig 12.
    - `newtab` {{optional_inline}}
      - : `Boolean`. Wenn enthalten, gibt die Methode die Liste der Seiten zurück, die angezeigt wird, wenn der Benutzer einen neuen Tab öffnet. Wenn enthalten und auf `true` gesetzt, ignoriert die Methode alle anderen Parameter außer `limit` und `includeFavicon`. Standardmäßig `false`.
    - `onePerDomain` {{optional_inline}}
      - : `Boolean`. Nur eine Seite pro Domain einbeziehen. Standardmäßig `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Dieses wird mit einem Array von {{WebExtAPIRef("topSites.MostVisitedURL", "MostVisitedURL")}}-Objekten erfüllt, eines für jede Seite, die auf der "Neuer Tab"-Seite des Browsers aufgelistet ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieser Code protokolliert den Titel und die URL für alle Seiten auf der "Neuer Tab"-Seite:

```js
function logTopSites(topSitesArray) {
  for (const topSite of topSitesArray) {
    console.log(`Title: ${topSite.title}, URL: ${topSite.url}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.topSites.get().then(logTopSites, onError);
```

Dieser Code protokolliert den Titel und die URL für alle Top-Seiten, einschließlich der vom Benutzer geblockten, und möglicherweise inklusive mehrerer Seiten in derselben Domain:

```js
function logTopSites(topSitesArray) {
  for (const topSite of topSitesArray) {
    console.log(`Title: ${topSite.title}, URL: ${topSite.url}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.topSites
  .get({
    includeBlocked: true,
    onePerDomain: false,
  })
  .then(logTopSites, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.topSites`](https://developer.chrome.com/docs/extensions/reference/api/topSites)-API von Chromium.
