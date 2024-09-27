---
title: tabs.create()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

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

  - : `object`. Eigenschaften, die dem neuen Tab zugewiesen werden sollen. Weitere Informationen zu diesen Eigenschaften finden Sie in der {{WebExtAPIRef("tabs.Tab")}} Dokumentation.

    - `active` {{optional_inline}}
      - : `boolean`. Ob der Tab der aktive Tab im Fenster werden soll. Wenn `false`, hat es keine Wirkung. Beeinflusst nicht, ob das Fenster fokussiert wird (siehe {{WebExtAPIRef('windows.update')}}). Standardwert ist `true`.
    - `cookieStoreId` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um einen Tab zu erstellen, dessen Cookie-Store-ID `cookieStoreId` ist. Diese Option ist nur verfügbar, wenn die Erweiterung die Berechtigung `"cookies"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
    - `discarded` {{optional_inline}}
      - : `boolean`. Ob der Tab erstellt und in der Tableiste sichtbar gemacht wird, ohne dass Inhalte in den Speicher geladen werden, ein Zustand, der als verworfen bekannt ist. Der Inhalt des Tabs wird geladen, wenn der Tab aktiviert wird.
    - `index` {{optional_inline}}
      - : `integer`. Die Position, die der Tab im Fenster einnehmen soll. Der angegebene Wert wird auf einen Bereich zwischen null und der Anzahl der Tabs im Fenster begrenzt.
    - `muted` {{optional_inline}}
      - : `boolean`. Ob der Tab stummgeschaltet werden soll. Standardwert ist `false`.
    - `openerTabId` {{optional_inline}}
      - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat. Wenn angegeben, muss sich der öffnende Tab im selben Fenster wie der neu erstellte Tab befinden.
    - `openInReaderMode` {{optional_inline}}
      - : `boolean`. Wenn `true`, öffnen Sie diesen Tab im [Reader-Modus](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode). Standardwert ist `false`.
    - `pinned` {{optional_inline}}
      - : `boolean`. Ob der Tab angepinnt werden soll. Standardwert ist `false`.
    - `selected` {{optional_inline}}

      - : `boolean`. Ob der Tab zum ausgewählten Tab im Fenster werden soll. Standardwert ist `true`.

        > [!WARNING]
        > Diese Eigenschaft ist veraltet und wird in Firefox nicht unterstützt. Verwenden Sie stattdessen `active`.

    - `title` {{optional_inline}}
      - : `string`. Der Titel des Tabs. Nur zulässig, wenn der Tab mit `discarded` auf `true` gesetzt erstellt wird.
    - `url` {{optional_inline}}

      - : `string`. Die URL, zu der der Tab zunächst navigiert werden soll. Standardmäßig die Seite "Neuer Tab".

        Vollqualifizierte URLs müssen ein Schema enthalten (zum Beispiel 'http\://www\.google.com' statt 'www\.google.com').

        Aus Sicherheitsgründen darf dies in Firefox keine privilegierte URL sein. Das Übergeben einer der folgenden URLs schlägt fehl:

        - chrome: URLs
        - [javascript: URLs](/de/docs/Web/URI/Schemes/javascript)
        - [data: URLs](/de/docs/Web/URI/Schemes/data)
        - file: URLs (d.h. Dateien im Dateisystem. Zum Verwenden einer Datei, die in die Erweiterung gepackt ist, siehe unten)
        - privilegierte about: URLs (zum Beispiel `about:config`, `about:addons`, `about:debugging`). Nicht privilegierte URLs (z.B. `about:blank`) sind erlaubt.
        - Die Seite "Neuer Tab" (`about:newtab`) kann geöffnet werden, wenn kein Wert für die URL angegeben wird.

        Um eine Seite zu laden, die mit Ihrer Erweiterung gepackt ist, geben Sie eine absolute URL an, die bei der Datei manifest.json der Erweiterung beginnt. Zum Beispiel: '/path/to/my-page.html'. Wenn Sie das führende '/' weglassen, wird die URL als relative URL behandelt, und verschiedene Browser können unterschiedliche absolute URLs konstruieren.

    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, in dem der neue Tab erstellt werden soll. Standardmäßig das aktuelle Fenster.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}} Objekt erfüllt wird, das Details über den erstellten Tab enthält. Wenn der Tab nicht erstellt werden konnte (zum Beispiel, weil `url` ein privilegiertes Schema verwendete), wird das Promise mit einer Fehlermeldung abgelehnt.

Das von `browser.tabs.create()` zurückgegebene Promise löst sich auf, sobald der Tab erstellt wurde. Der Tab kann noch laden. Um zu erkennen, wann der Tab das Laden beendet hat, hören Sie auf das {{WebExtAPIRef('tabs.onUpdated')}} oder das {{WebExtAPIRef('webNavigation.onCompleted')}} Ereignis, bevor Sie `tabs.create` aufrufen.

## Beispiele

Öffnen von "https\://example.org" in einem neuen Tab:

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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-create) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
