---
title: webNavigation.onCreatedNavigationTarget
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCreatedNavigationTarget
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein neues Fenster oder ein neuer Tab in einem bestehenden Fenster erstellt wird, um das Ziel einer Navigation zu hosten. Dieses Ereignis wird beispielsweise gesendet, wenn:

- der Benutzer einen Link in einem neuen Tab oder Fenster öffnet
- eine Webseite eine Ressource in einem neuen Tab oder Fenster lädt, indem [`window.open()`](/de/docs/Web/API/Window/open) verwendet wird (aber beachten Sie, dass das Ereignis nicht gesendet wird, wenn der Popup-Blocker des Browsers das Laden blockiert).

Das Ereignis wird nicht gesendet, wenn ein Tab oder Fenster ohne ein Navigationsziel erstellt wird (zum Beispiel, wenn der Benutzer einen neuen Tab öffnet, indem er <kbd>Strg+T</kbd> drückt).

Wenn dieses Ereignis ausgelöst wird, erfolgt dies vor {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}.

## Syntax

```js-nolint
browser.webNavigation.onCreatedNavigationTarget.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onCreatedNavigationTarget.removeListener(listener)
browser.webNavigation.onCreatedNavigationTarget.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` bei diesem Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, `false` andernfalls.

## Syntax für addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Details über das Navigationsevent. Siehe den [details](#details_2)-Abschnitt für weitere Informationen.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt mit einer einzelnen Eigenschaft `url`, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter angeben, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst. Beachten Sie, dass `filter` in Firefox nicht unterstützt wird.

## Zusätzliche Objekte

### details

- `sourceFrameId`
  - : `integer`. ID des Frames, von dem die Navigation ausgeht. `0` gibt an, dass der Frame der Tab's oberster Browsing-Kontext ist, nicht ein verschachteltes {{HTMLElement("iframe")}}. Ein positiver Wert gibt an, dass die Navigation von einem verschachtelten iframe ausgeht. Frame-IDs sind eindeutig für einen bestimmten Tab und Prozess.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, stellte er die ID des Prozesses dar, von dem die Navigation ausging.
- `sourceTabId`
  - : `integer`. Die ID des Tabs, von dem die Navigation ausgeht. Wenn der Benutzer beispielsweise einen Link in einem neuen Tab öffnet, ist dies die ID des Tabs, der den Link enthält.
- `tabId`
  - : `integer`. Die ID des neu erstellten Tabs.
- `timeStamp`
  - : `number`. Die Zeit, zu der der Browser das Navigationsziel erstellt hat, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `url`
  - : `string`. Die URL, die im neuen Tab geladen wird.
- `windowId`
  - : `number`. Die ID des Fensters, in dem der neue Tab erstellt wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokolliert die Ziel-URL, die Quell-Tab-ID und die Quell-Frame-ID für `onCreatedNavigationTarget`, wenn der Hostname des Ziels "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnCreatedNavigationTarget(details) {
  console.log(`onCreatedNavigationTarget: ${details.url}`);
  console.log(details.sourceTabId);
  console.log(details.sourceFrameId);
}

browser.webNavigation.onCreatedNavigationTarget.addListener(
  logOnCreatedNavigationTarget,
  filter,
);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate)-API. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.
