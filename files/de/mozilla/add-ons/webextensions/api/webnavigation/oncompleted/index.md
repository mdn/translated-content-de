---
title: webNavigation.onCompleted
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCompleted
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Dokument, einschließlich der Ressourcen, auf die es verweist, vollständig geladen und initialisiert ist. Dies entspricht dem DOM-Event [`load`](/de/docs/Web/API/Window/load_event).

## Syntax

```js-nolint
browser.webNavigation.onCompleted.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onCompleted.removeListener(listener)
browser.webNavigation.onCompleted.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Details über das Navigationseignis. Siehe den Abschnitt [details](#details_2) für weitere Informationen.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einschließen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mit mindestens einem `UrlFilter` im Array übereinstimmen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattgefunden hat.
- `url`
  - : `string`. Die URL, zu der der gegebene Frame navigiert hat.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Als er gesetzt wurde, stellte er die ID des Prozesses dar, der den Renderer für diesen Tab ausführte.
- `frameId`
  - : `integer`. Der Frame, in dem die Navigation stattgefunden hat. `0` zeigt an, dass die Navigation im obersten Browsing-Kontext des Tabs stattgefunden hat, nicht in einem verschachtelten {{HTMLElement("iframe")}}. Ein positiver Wert zeigt an, dass die Navigation in einem verschachtelten iframe stattgefunden hat. Frame-IDs sind eindeutig für einen gegebenen Tab und Prozess.
- `timeStamp`
  - : `number`. Die Zeit, zu der die Seite vollständig geladen war, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokolliert die Ziel-URLs für `onCompleted`, wenn der Ziel-URL-Hostname "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnCompleted(details) {
  console.log(`onCompleted: ${details.url}`);
}

browser.webNavigation.onCompleted.addListener(logOnCompleted, filter);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API von Chromium. Diese Dokumentation ist von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code abgeleitet.
