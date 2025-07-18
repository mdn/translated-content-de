---
title: webNavigation.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onErrorOccurred
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein Fehler auftritt und die Navigation abgebrochen wird. Dies kann geschehen, wenn entweder ein Netzwerkfehler aufgetreten ist oder der Benutzer die Navigation abgebrochen hat.

## Syntax

```js-nolint
browser.webNavigation.onErrorOccurred.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onErrorOccurred.removeListener(listener)
browser.webNavigation.onErrorOccurred.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`, `addListener(listener, filter)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es aktiviert ist, sonst `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt.

    Die `listener`-Funktion wird mit diesen Argumenten aufgerufen:
    - `details`
      - : [`object`](#details). Details über das Navigationserereignis. **`details`** hat die folgenden Eigenschaften:
        - `tabId`
          - : `integer`. Die ID des Tabs, in dem die Navigation stattfand.
        - `url`
          - : `string`. Die URL, zu der der gegebene Frame navigierte.
        - `processId` {{optional_inline}} {{deprecated_inline}}
          - : `integer`. Dieser Wert wird in modernen Browsern nie gesetzt. Er diente früher zur Darstellung der ID des Prozesses, der den Renderer für diesen Tab ausführt.
        - `frameId`
          - : `integer`. Der Frame, in dem die Navigation stattfand.

            `0` zeigt, dass die Navigation im obersten Browsing-Kontext des Tabs stattgefunden hat, nicht in einem verschachtelten {{HTMLElement("iframe")}}.

            Ein positiver Wert zeigt, dass die Navigation in einem verschachtelten iframe stattfand.

            Frame-IDs sind eindeutig für einen gegebenen Tab und Prozess.

        - `timeStamp`
          - : `number`. Der Zeitpunkt, zu dem der Fehler auftrat, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
        - `error`
          - : `string`. Der Fehlercode. Dies ist ein interner Fehlercode und es wird nicht garantiert, dass er sich nicht ändert oder konsistent zwischen den Browsern bleibt.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, welche ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist.

    Wenn Sie diesen Parameter einschließen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mit mindestens einem `UrlFilter` im Array übereinstimmen.

    Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Beispiele

Protokolliert die Ziel-URLs für `onErrorOccurred`, wenn der `hostname` der Ziel-URL `"example.com"` enthält oder mit `"developer"` beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnErrorOccurred(details) {
  console.log(`onErrorOccurred: ${details.url}`);
  console.log(details.error);
}

browser.webNavigation.onErrorOccurred.addListener(logOnErrorOccurred, filter);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.
