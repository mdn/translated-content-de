---
title: webNavigation.onDOMContentLoaded
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onDOMContentLoaded
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Ausgelöst, wenn das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis in der Seite ausgelöst wird. Zu diesem Zeitpunkt ist das Dokument geladen und geparst, und das DOM ist vollständig aufgebaut, aber verknüpfte Ressourcen wie Bilder, Stylesheets und Unterrahmen sind möglicherweise noch nicht geladen.

## Syntax

```js-nolint
browser.webNavigation.onDOMContentLoaded.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onDOMContentLoaded.removeListener(listener)
browser.webNavigation.onDOMContentLoaded.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## `addListener`-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details zum Navigationsevent. Weitere Informationen finden Sie im [Details](#details)-Abschnitt.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt mit einer einzelnen Eigenschaft `url`, die ein {{jsxref("Array")}} von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einschließen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### Details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattgefunden hat.
- `url`
  - : `string`. Die URL, zu der der angegebene Frame navigiert ist.
- `frameId`
  - : `integer`. Frame, in dem die Navigation stattfindet. `0` zeigt an, dass die Navigation im Haupt-Browsing-Kontext des Tabs und nicht in einem verschachtelten {{HTMLElement("iframe")}} stattfindet. Ein positiver Wert gibt an, dass die Navigation in einem verschachtelten iframe erfolgt. Frame-IDs sind einzigartig für einen gegebenen Tab und Prozess.
- `frameType`
  - : `string`. Der Typ des Frames, in dem die Navigation erfolgt ist. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` und `"sub_frame"` zurück.
- `parentFrameId`
  - : `integer`. ID des Eltern-Frames dieses Frames. Auf `-1` gesetzt, wenn dies ein oberster Frame ist.
- `documentId`
  - : `string`. Eine UUID des geladenen Dokuments. Weitere Informationen finden Sie im Artikel [Work with documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `parentDocumentId`
  - : `string`. Eine UUID des übergeordneten Dokuments, das den Frame besitzt. Nicht gesetzt, wenn es keinen Eltern gibt. Weitere Informationen finden Sie im Artikel [Work with documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` und `"pending_deletion"` zurück.
- `timeStamp`
  - : `number`. Die Zeit, zu der `DOMContentLoaded` ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Als er gesetzt war, repräsentierte er die ID des Prozesses, der den Renderer für diesen Tab ausführte.

## Beispiele

Protokolliert die Ziel-URLs für `onDOMContentLoaded`, wenn der Hostname der Ziel-URL "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnDOMContentLoaded(details) {
  console.log(`onDOMContentLoaded: ${details.url}`);
}

browser.webNavigation.onDOMContentLoaded.addListener(
  logOnDOMContentLoaded,
  filter,
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate). Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.
