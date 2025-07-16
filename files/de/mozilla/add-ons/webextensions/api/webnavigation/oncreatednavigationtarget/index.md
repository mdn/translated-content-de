---
title: webNavigation.onCreatedNavigationTarget
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCreatedNavigationTarget
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein neues Fenster oder ein neuer Tab in einem bestehenden Fenster erstellt wird, um das Ziel einer Navigation aufzunehmen. Zum Beispiel wird dieses Ereignis gesendet, wenn:

- der Benutzer einen Link in einem neuen Tab oder Fenster öffnet
- eine Webseite eine Ressource in einem neuen Tab oder Fenster mit [`window.open()`](/de/docs/Web/API/Window/open) lädt (dabei ist zu beachten, dass das Ereignis nicht gesendet wird, falls der Popup-Blocker des Browsers das Laden blockiert).

Das Ereignis wird nicht gesendet, wenn ein Tab oder Fenster ohne ein Navigationsziel erstellt wird (zum Beispiel, wenn der Benutzer einen neuen Tab durch Drücken von <kbd>Strg+T</kbd> öffnet).

Wenn dieses Ereignis ausgelöst wird, wird es vor {{WebExtAPIRef("webNavigation.onBeforeNavigate")}} ausgelöst.

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
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details über das Navigationsevent. Weitere Informationen finden Sie im Abschnitt [details](#details).

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einschließen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mit mindestens einem `UrlFilter` im Array übereinstimmen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst. Beachten Sie, dass `filter` in Firefox nicht unterstützt wird.

## Zusätzliche Objekte

### details

- `sourceFrameId`
  - : `integer`. ID des Frames, von dem die Navigation initiiert wird. `0` zeigt an, dass der Rahmen der obersten Ebene des Tabs ist, nicht ein verschachteltes {{HTMLElement("iframe")}}. Ein positiver Wert zeigt an, dass die Navigation von einem verschachtelten iframe ausgeht. Frame-IDs sind eindeutig für einen gegebenen Tab und Prozess.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt wurde, repräsentierte er die ID des Prozesses, von dem die Navigation ausging.
- `sourceTabId`
  - : `integer`. Die ID des Tabs, von dem die Navigation initiiert wird. Zum Beispiel, wenn der Benutzer einen Link in einem neuen Tab öffnet, ist dies die ID des Tabs, das den Link enthält.
- `tabId`
  - : `integer`. Die ID des neu erstellten Tabs.
- `timeStamp`
  - : `number`. Die Zeit, zu der der Browser das Navigationsziel erstellt hat, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `url`
  - : `string`. Die URL, die im neuen Tab geladen wird.
- `windowId`
  - : `number`. Die ID des Fensters, in dem der neue Tab erstellt wird.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation basiert auf [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.
