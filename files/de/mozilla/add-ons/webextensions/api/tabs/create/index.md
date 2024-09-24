---
title: tabs.create()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erzeugt einen neuen Tab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let creating = browser.tabs.create(
  createProperties   // object
)
```

### Parameter

- `createProperties`

  - : `object`. Eigenschaften, die dem neuen Tab zugewiesen werden sollen. Um mehr über diese Eigenschaften zu erfahren, lesen Sie die {{WebExtAPIRef("tabs.Tab")}} Dokumentation.

    - `active` {{optional_inline}}
      - : `boolean`. Ob der Tab der aktive Tab im Fenster werden soll. Wenn `false`, hat dies keine Wirkung. Beeinflusst nicht, ob das Fenster fokussiert ist (siehe {{WebExtAPIRef('windows.update')}}). Standardmäßig `true`.
    - `cookieStoreId` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um einen Tab zu erstellen, dessen Cookie-Store-ID `cookieStoreId` ist. Diese Option ist nur verfügbar, wenn die Erweiterung die `"cookies"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `discarded` {{optional_inline}}
      - : `boolean`. Ob der Tab erstellt und in der Tableiste sichtbar gemacht wird, ohne dass Inhalte in den Speicher geladen werden, ein Zustand, der als verworfen bekannt ist. Der Inhalt des Tabs wird geladen, wenn der Tab aktiviert wird.
    - `index` {{optional_inline}}
      - : `integer`. Die Position, die der Tab im Fenster einnehmen soll. Der angegebene Wert wird zwischen null und der Anzahl der Tabs im Fenster eingegrenzt.
    - `muted` {{optional_inline}}
      - : `boolean`. Ob der Tab stummgeschaltet werden soll. Standardmäßig `false`.
    - `openerTabId` {{optional_inline}}
      - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat. Wenn angegeben, muss sich der öffnende Tab im selben Fenster wie der neu erstellte Tab befinden.
    - `openInReaderMode` {{optional_inline}}
      - : `boolean`. Wenn `true`, öffnet diesen Tab im [Reader-Modus](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode). Standardmäßig `false`.
    - `pinned` {{optional_inline}}
      - : `boolean`. Ob der Tab angepinnt werden soll. Standardmäßig `false`.
    - `selected` {{optional_inline}}

      - : `boolean`. Ob der Tab der ausgewählte Tab im Fenster werden soll. Standardmäßig `true`.

        > [!WARNING]
        > Diese Eigenschaft ist veraltet und wird in Firefox nicht unterstützt. Verwenden Sie stattdessen `active`.

    - `title` {{optional_inline}}
      - : `string`. Der Titel des Tabs. Nur erlaubt, wenn der Tab mit `discarded` auf `true` erstellt wird.
    - `url` {{optional_inline}}

      - : `string`. Die URL, zu der der Tab initial navigieren soll. Standardmäßig die neue Tab-Seite.

        Vollständig qualifizierte URLs müssen ein Schema enthalten (zum Beispiel 'http\://www\.google.com' nicht 'www\.google.com').

        Aus Sicherheitsgründen darf dies in Firefox keine privilegierte URL sein. Daher schlägt das Übergeben jeder der folgenden URLs fehl:

        - chrome: URLs
        - [javascript: URLs](/de/docs/Web/URI/Schemes/javascript)
        - [data: URLs](/de/docs/Web/URI/Schemes/data)
        - file: URLs (d.h. Dateien im Dateisystem. Um jedoch eine Datei zu verwenden, die innerhalb der Erweiterung gepackt ist, siehe unten)
        - privilegierte about: URLs (zum Beispiel `about:config`, `about:addons`, `about:debugging`). Nicht privilegierte URLs (z.B. `about:blank`) sind erlaubt.
        - Die neue Tab-Seite (`about:newtab`) kann geöffnet werden, wenn kein Wert für die URL angegeben ist.

        Um eine Seite zu laden, die mit Ihrer Erweiterung gepackt ist, geben Sie eine absolute URL an, die bei der manifest.json-Datei der Erweiterung beginnt. Zum Beispiel: '/path/to/my-page.html'. Wenn Sie das führende '/' weglassen, wird die URL als relative URL behandelt, und unterschiedliche Browser können unterschiedliche absolute URLs konstruieren.

    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, in dem der neue Tab erstellt werden soll. Standardmäßig das aktuelle Fenster.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}}-Objekt erfüllt wird, das Details über den erstellten Tab enthält. Wenn der Tab nicht erstellt werden konnte (zum Beispiel, weil `url` ein privilegiertes Schema verwendet hat), wird das Promise mit einer Fehlermeldung zurückgewiesen.

Das von `browser.tabs.create()` zurückgegebene Promise wird aufgelöst, sobald der Tab erstellt wurde. Der Tab kann noch geladen werden. Um zu erkennen, wann der Tab das Laden abgeschlossen hat, hören Sie vor dem Aufruf von `tabs.create` auf das {{WebExtAPIRef('tabs.onUpdated')}} oder das {{WebExtAPIRef('webNavigation.onCompleted')}}-Ereignis.

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
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-create) API. Diese Dokumentation leitet sich von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code ab.

<!--
// Rechte von 2015 Die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind erlaubt, vorausgesetzt, dass die folgenden Bedingungen
// erfüllt sind:
//
//    * Weiterverbreitungen von Quellcode müssen den obigen Copyright-
// Hinweis, diese Liste der Bedingungen und den folgenden Haftungsausschluss
// beibehalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen 
// Copyright-Hinweis, diese Liste der Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung bereitgestellt werden, beibehalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet sind, ohne ausdrückliche vorherige schriftliche
// Genehmigung zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND
// MITWIRKENDEN "WIE BESEHEN" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHE ODER
// IMPLIZIERTE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF,
// DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK, SIND HIERMIT ABGELEHNT. IN KEINEM FALL
// HAFTET DER COPYRIGHTINHABER ODER DIE MITWIRKENDEN FÜR JEGLICHE DIREKTEN,
// INDIREKTEN, BEILÄUFIGEN, SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSAUSFALL,
// DATEN ODER GEWINNE; ODER GESCHÄFTSUNTERBRECHUNGEN) JEGLICHER ART UND
// WEISE, UNGEACHTET DER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER
// HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER 
// ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER NUTZUNG DIESER SOFTWARE
// HERVORGEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN 
// HINGEWIESEN WURDE.
-->
