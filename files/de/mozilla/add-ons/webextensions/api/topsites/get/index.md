---
title: topSites.get()
slug: Mozilla/Add-ons/WebExtensions/API/topSites/get
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Erhält ein Array mit Informationen über Seiten, die der Benutzer häufig und kürzlich besucht hat.

Browser führen eine Liste von Seiten, die der Benutzer häufig und kürzlich besucht. Diese Liste wird verwendet, um dem Benutzer zu helfen, leicht zu diesen Stellen zurückzukehren. Zum Beispiel bietet Firefox standardmäßig eine Liste der am häufigsten besuchten Seiten auf der "Neuer Tab"-Seite.

Um zu bestimmen, welche Seiten in der Liste erscheinen und in welcher Reihenfolge sie erscheinen, kombiniert der Browser "Häufigkeit" - wie oft der Benutzer die Seite besucht hat - und "Aktualität" - wie kürzlich der Benutzer die Seite besucht hat.

Der Browser kann diese Liste dann vor der Präsentation an den Benutzer weiter filtern. Beispielsweise listet die "Neuer Tab"-Seite in Firefox nur eine Seite pro Domain auf, und der Benutzer kann Seiten blockieren, damit sie nicht in der Liste erscheinen.

Die `topSites.get()` API ermöglicht einer Erweiterung den Zugriff auf diese Liste. Wenn sie ohne Optionen aufgerufen wird, liefert sie die gefilterte Liste der Seiten – also diejenige, die auf der "Neuer Tab"-Seite erscheint. Durch die Angabe von verschiedenen Optionen kann eine Erweiterung jedoch auch die ungefilterte Liste der Seiten abrufen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Um die topSites API zu verwenden, müssen Sie die "topSites" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Syntax

```js-nolint
let gettingTopSites = browser.topSites.get(
    options  // object
)
```

### Parameter

- `options`
  - : `object`. Optionen zur Modifikation der zurückgegebenen Seitenliste. Diese können jede der folgenden Eigenschaften umfassen:
    - `includeBlocked` {{optional_inline}}
      - : `Boolean`. Einschließen von Seiten, die der Benutzer von der "Neuer Tab"-Seite entfernt hat. Standardwert ist `false`.
    - `includeFavicon` {{optional_inline}}
      - : `Boolean`. Einschließen von Favicons in den Ergebnissen, für Seiten, auf denen sie verfügbar sind. Standardwert ist `false`.
    - `includePinned` {{optional_inline}}
      - : `Boolean`. Einschließt Seiten, die der Benutzer an die Firefox-"Neuer Tab"-Seite angeheftet hat.
        Standardwert ist `false`.
    - `includeSearchShortcuts` {{optional_inline}}
      - : `Boolean`. Einschließt Suchverknüpfungen, die auf der Firefox-"Neuer Tab"-Seite erscheinen.
        Standardwert ist `false`.
    - `limit` {{optional_inline}}
      - : `Integer`. Die Anzahl der zurückzugebenden Seiten. Dies muss eine Zahl zwischen 1 und 100 sein, einschließlich. Standardwert ist 12.
    - `newtab` {{optional_inline}}
      - : `Boolean`. Wenn eingeschlossen, gibt die Methode die Liste der Seiten zurück, die angezeigt werden, wenn der Benutzer einen neuen Tab öffnet. Wenn eingeschlossen und auf `true` gesetzt, ignoriert die Methode alle anderen Parameter außer `limit` und `includeFavicon`. Standardwert ist `false`.
    - `onePerDomain` {{optional_inline}}
      - : `Boolean`. Enthält nur eine Seite pro Domain. Standardwert ist `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Dieses wird mit einem Array von {{WebExtAPIRef("topSites.MostVisitedURL", "MostVisitedURL")}}-Objekten erfüllt, eines für jede Seite, die in der "Neuer Tab"-Seite des Browsers gelistet ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

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

Dieser Code protokolliert den Titel und die URL für alle Top-Seiten, einschließlich der vom Benutzer blockierten und potenziell mehreren Seiten derselben Domain:

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

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.topSites`](https://developer.chrome.com/docs/extensions/reference/api/topSites) API.
