---
title: webNavigation.onReferenceFragmentUpdated
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onReferenceFragmentUpdated
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich der [Fragment-Bezeichner](https://en.wikipedia.org/wiki/Fragment_identifier) einer Seite ändert. Wenn beispielsweise eine Seite ein Inhaltsverzeichnis mit Fragmenten implementiert und der Benutzer auf einen Eintrag im Inhaltsverzeichnis klickt, wird dieses Ereignis ausgelöst. Alle zukünftigen Ereignisse für diesen Frame verwenden die aktualisierte URL.

## Syntax

```js-nolint
browser.webNavigation.onReferenceFragmentUpdated.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onReferenceFragmentUpdated.removeListener(listener)
browser.webNavigation.onReferenceFragmentUpdated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Details zum Navigationsereignis. Weitere Informationen finden Sie im Abschnitt [details](#details_2).

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter angeben, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattfinden wird.
- `url`
  - : `string`. Die URL, zu der der gegebene Frame navigieren wird.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, stellte er die ID des Prozesses dar, der den Renderer für diesen Tab ausführt.
- `frameId`
  - : `integer`. Frame, in dem die Navigation stattfinden wird. `0` zeigt an, dass die Navigation im obersten Browsingkontext des Tabs und nicht in einem verschachtelten {{HTMLElement("iframe")}} erfolgt. Ein positiver Wert zeigt an, dass die Navigation in einem verschachtelten iframe erfolgt. Frame-IDs sind für einen gegebenen Tab und Prozess eindeutig.
- `timeStamp`
  - : `number`. Die Zeit, zu der der Fragment-Bezeichner der Seite geändert wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `transitionType`
  - : `{{WebExtAPIRef("webNavigation.transitionType", "transitionType")}}`. Der Grund für die Navigation: zum Beispiel `"link"`, wenn der Benutzer auf einen Link geklickt hat.
- `transitionQualifiers`
  - : `Array` von {{WebExtAPIRef("webNavigation.transitionQualifier", "transitionQualifier")}}. Zusätzliche Informationen über die Navigation: zum Beispiel, ob es eine server- oder clientseitige Umleitung gab.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokolliert die Ziel-URLs und zusätzliche Übergangsinformationen für `onReferenceFragmentUpdated`, wenn der Hostname der Ziel-URL "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnReferenceFragmentUpdated(details) {
  console.log(`onReferenceFragmentUpdated: ${details.url}`);
  console.log(`Transition type: ${details.transitionType}`);
  console.log(`Transition qualifiers: ${details.transitionQualifiers}`);
}

browser.webNavigation.onReferenceFragmentUpdated.addListener(
  logOnReferenceFragmentUpdated,
  filter,
);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation stammt aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.
