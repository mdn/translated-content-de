---
title: tabs.create()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/create
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erstellt einen neuen Tab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let creating = browser.tabs.create(
  createProperties   // object
)
```

### Parameter

- `createProperties`
  - : `object`. Eigenschaften, die dem neuen Tab zugeordnet werden. Um mehr über diese Eigenschaften zu erfahren, lesen Sie die Dokumentation zu {{WebExtAPIRef("tabs.Tab")}}.
    - `active` {{optional_inline}}
      - : `boolean`. Gibt an, ob der Tab der aktive Tab im Fenster werden soll. Wenn `false`, hat es keine Auswirkungen. Beeinflusst nicht, ob das Fenster fokussiert ist (siehe {{WebExtAPIRef('windows.update')}}). Standardwert ist `true`.
    - `cookieStoreId` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um einen Tab zu erstellen, dessen Cookie-Store-ID `cookieStoreId` ist. Diese Option ist nur verfügbar, wenn die Erweiterung die `"cookies"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `discarded` {{optional_inline}}
      - : `boolean`. Gibt an, ob der Tab erstellt und in der Tableiste ohne geladene Inhalte im Speicher sichtbar gemacht werden soll, ein Zustand, der als verworfen bekannt ist. Der Inhalt des Tabs wird geladen, wenn der Tab aktiviert wird.
    - `index` {{optional_inline}}
      - : `integer`. Die Position, die der Tab im Fenster einnehmen soll. Der angegebene Wert wird zwischen null und der Anzahl der Tabs im Fenster begrenzt.
    - `muted` {{optional_inline}}
      - : `boolean`. Gibt an, ob der Tab stummgeschaltet werden soll. Standardwert ist `false`.
    - `openerTabId` {{optional_inline}}
      - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat. Wenn angegeben, muss der eröffnende Tab im selben Fenster wie der neu erstellte Tab sein.
    - `openInReaderMode` {{optional_inline}}
      - : `boolean`. Wenn `true`, öffnen Sie diesen Tab im [Reader-Modus](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode). Standardwert ist `false`.
    - `pinned` {{optional_inline}}
      - : `boolean`. Gibt an, ob der Tab angeheftet werden soll. Standardwert ist `false`.
    - `selected` {{optional_inline}}
      - : `boolean`. Gibt an, ob der Tab der ausgewählte Tab im Fenster werden soll. Standardwert ist `true`.

        > [!WARNING]
        > Diese Eigenschaft ist veraltet und wird in Firefox nicht unterstützt. Verwenden Sie stattdessen `active`.

    - `title` {{optional_inline}}
      - : `string`. Der Titel des Tabs. Nur erlaubt, wenn der Tab mit `discarded` auf `true` erstellt wird.
    - `url` {{optional_inline}}
      - : `string`. Die URL, zu der der Tab initial navigiert werden soll. Standardwert ist die Neue-Tab-Seite.

        Vollqualifizierte URLs müssen ein Schema enthalten (z.B. 'http\://www\.google.com' nicht 'www\.google.com').

        Aus Sicherheitsgründen darf dies in Firefox keine privilegierte URL sein. Daher wird das Übergeben einer der folgenden URLs fehlschlagen:
        - chrome: URLs
        - [javascript: URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
        - [data: URLs](/de/docs/Web/URI/Reference/Schemes/data)
        - file: URLs (d.h. Dateien im Dateisystem. Um jedoch eine Datei zu verwenden, die innerhalb der Erweiterung verpackt ist, siehe unten)
        - privilegierte about: URLs (z.B. `about:config`, `about:addons`, `about:debugging`). Nicht privilegierte URLs (z.B. `about:blank`) sind erlaubt.
        - Die Neue-Tab-Seite (`about:newtab`) kann geöffnet werden, wenn kein Wert für URL angegeben ist.

        Um eine Seite zu laden, die mit Ihrer Erweiterung verpackt ist, geben Sie eine absolute URL an, die bei der manifest.json-Datei der Erweiterung beginnt. Beispiel: '/Pfad/zu/meiner-seite.html'. Wenn Sie den führenden '/' weglassen, wird die URL als relative URL behandelt, und verschiedene Browser können unterschiedliche absolute URLs konstruieren.

    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, in dem der neue Tab erstellt werden soll. Standardwert ist das aktuelle Fenster.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}}-Objekt erfüllt wird, das Details über den erstellten Tab enthält. Wenn der Tab nicht erstellt werden konnte (z.B. weil `url` ein privilegiertes Schema verwendet hat), wird das Promise mit einer Fehlermeldung abgelehnt.

Das von `browser.tabs.create()` zurückgegebene Promise wird aufgelöst, sobald der Tab erstellt wurde. Der Tab kann noch laden. Um zu erkennen, wann der Tab das Laden abgeschlossen hat, hören Sie das {{WebExtAPIRef('tabs.onUpdated')}}- oder das {{WebExtAPIRef('webNavigation.onCompleted')}}-Ereignis, bevor Sie `tabs.create` aufrufen.

## Beispiele

Öffnen Sie "https\://example.org" in einem neuen Tab:

```js
function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let creating = browser.tabs.create({
    url: "https://example.org",
  });
  creating.then(onCreated, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-create) API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
