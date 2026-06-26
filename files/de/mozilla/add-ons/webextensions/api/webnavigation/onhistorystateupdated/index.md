---
title: webNavigation.onHistoryStateUpdated
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onHistoryStateUpdated
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Wird ausgelöst, wenn die Seite die [History-API](/de/docs/Web/API/History_API/Working_with_the_History_API) verwendet hat, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren. Alle zukünftigen Ereignisse für dieses Frame verwenden die aktualisierte URL.

## Syntax

```js-nolint
browser.webNavigation.onHistoryStateUpdated.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onHistoryStateUpdated.removeListener(listener)
browser.webNavigation.onHistoryStateUpdated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu überwachen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details über das Navigationsevent. Siehe den Abschnitt [details](#details) für weitere Informationen.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzige Eigenschaft `url` enthält, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einschließen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattfinden soll.
- `url`
  - : `string`. Die URL, zu der das angegebene Frame navigieren wird.
- `frameId`
  - : `integer`. Frame, in dem die Navigation stattfinden wird. `0` gibt an, dass die Navigation im obersten Browsing-Kontext des Tabs erfolgt, nicht in einem eingebetteten {{HTMLElement("iframe")}}. Ein positiver Wert gibt an, dass die Navigation in einem eingebetteten iframe erfolgt. Frame-IDs sind einzigartig für einen bestimmten Tab und Prozess.
- `frameType`
  - : `string`. Der Typ des Rahmens, in dem die Navigation stattfand. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` und `"sub_frame"` zurück.
- `parentFrameId`
  - : `integer`. ID des Eltern-Frames. Wird auf `-1` gesetzt, wenn es sich um einen obersten Frame handelt.
- `documentId`
  - : `string`. Eine UUID des geladenen Dokuments. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `parentDocumentId`
  - : `string`. Eine UUID des übergeordneten Dokuments, das den Frame besitzt. Wird nicht gesetzt, wenn kein Elternteil vorhanden ist. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` und `"pending_deletion"` zurück.
- `transitionType`
  - : {{WebExtAPIRef("webNavigation.transitionType", "transitionType")}}. Der Grund für die Navigation: zum Beispiel `"link"`, wenn der Benutzer auf einen Link geklickt hat.
- `transitionQualifiers`
  - : `Array` von {{WebExtAPIRef("webNavigation.transitionQualifier", "transitionQualifier")}}. Zusätzliche Informationen über die Navigation: zum Beispiel, ob es eine Server- oder Client-Weiterleitung gab.
- `timeStamp`
  - : `number`. Die Zeit, zu der die URL durch die History-API geändert wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt wurde, stellte er die ID des Prozesses dar, der den Renderer für diesen Tab ausführte.

## Beispiele

Protokolliert die Ziel-URLs und zusätzliche Übergangsinformationen für `onHistoryStateUpdated`, wenn der Hostname der Ziel-URL "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnHistoryStateUpdated(details) {
  console.log(`onHistoryStateUpdated: ${details.url}`);
  console.log(`Transition type: ${details.transitionType}`);
  console.log(`Transition qualifiers: ${details.transitionQualifiers}`);
}

browser.webNavigation.onHistoryStateUpdated.addListener(
  logOnHistoryStateUpdated,
  filter,
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.
