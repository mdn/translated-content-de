---
title: webNavigation.onDOMContentLoaded
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onDOMContentLoaded
l10n:
  sourceCommit: 14c57deab8b4924b564a15f3aef6bfb2a1834a46
---

Ausgelöst, wenn das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis auf der Seite ausgelöst wird. Zu diesem Zeitpunkt ist das Dokument geladen und geparst und der DOM vollständig aufgebaut, jedoch können verknüpfte Ressourcen wie Bilder, Stylesheets und Subframes möglicherweise noch nicht geladen sein.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details zum Navigationsevent. Weitere Informationen finden Sie im Abschnitt [details](#details).

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, welche ein {{jsxref("Array")}} von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einfügen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattgefunden hat.
- `url`
  - : `string`. Die URL, zu der das gegebene Frame navigiert wurde.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, repräsentierte er die ID des Prozesses, der den Renderer für diesen Tab ausführte.
- `frameId`
  - : `integer`. Frame, in dem die Navigation erfolgt. `0` zeigt an, dass die Navigation im obersten Browsing-Kontext des Tabs stattfindet, nicht in einem verschachtelten {{HTMLElement("iframe")}}. Ein positiver Wert zeigt an, dass die Navigation in einem verschachtelten iframe erfolgt. Frame-IDs sind eindeutig für einen gegebenen Tab und Prozess.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Frames dieses Frames. Setzt auf `-1`, wenn dies ein oberstes Frame ist.
- `timeStamp`
  - : `number`. Die Zeit, zu der `DOMContentLoaded` ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).

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
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.
