---
title: webNavigation.onReferenceFragmentUpdated
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onReferenceFragmentUpdated
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Wird ausgelöst, wenn der [Fragment-Identifier](https://en.wikipedia.org/wiki/Fragment_identifier) einer Seite geändert wird. Beispielsweise, wenn eine Seite ein Inhaltsverzeichnis anhand von Fragmenten implementiert und der Benutzer einen Eintrag im Inhaltsverzeichnis anklickt, wird dieses Ereignis ausgelöst. Alle zukünftigen Ereignisse für dieses Frame verwenden die aktualisierte URL.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, `false` andernfalls.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details über das Navigationsereignis. Siehe den Abschnitt [details](#details) für weitere Informationen.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einschließen, wird das Ereignis nur bei Übergängen zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattfinden wird.
- `url`
  - : `string`. Die URL, zu der das angegebene Frame navigieren wird.
- `frameId`
  - : `integer`. Frame, in dem die Navigation ausgeführt werden wird. `0` bedeutet, dass die Navigation im obersten Browsing-Kontext des Tabs und nicht in einem eingebetteten {{HTMLElement("iframe")}} erfolgt. Ein positiver Wert bedeutet, dass die Navigation in einem eingebetteten iframe erfolgt. Frame-IDs sind eindeutig für einen gegebenen Tab und Prozess.
- `frameType`
  - : `string`. Der Typ des Frames, in dem die Navigation erfolgt ist. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` und `"sub_frame"` zurück.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Frames. Auf `-1` gesetzt, wenn es sich um einen Top-Level-Frame handelt.
- `documentId`
  - : `string`. Eine UUID des geladenen Dokuments. Weitere Informationen finden Sie im Artikel [Work with documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `parentDocumentId`
  - : `string`. Eine UUID des übergeordneten Dokuments, das das Frame besitzt. Nicht gesetzt, wenn es kein übergeordnetes Element gibt. Weitere Informationen finden Sie im Artikel [Work with documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` und `"pending_deletion"` zurück.
- `transitionType`
  - : {{WebExtAPIRef("webNavigation.transitionType", "transitionType")}}. Der Grund für die Navigation: beispielsweise `"link"`, wenn der Benutzer auf einen Link geklickt hat.
- `transitionQualifiers`
  - : `Array` von {{WebExtAPIRef("webNavigation.transitionQualifier", "transitionQualifier")}}. Zusätzliche Informationen über die Navigation: zum Beispiel, ob es eine Server- oder Client-Umleitung gab.
- `timeStamp`
  - : `number`. Die Zeit, zu der der Fragment-Identifier der Seite geändert wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, repräsentierte er die ID des Prozesses, der das Renderer für diesen Tab ausführte.

## Beispiele

Protokolliert die Ziel-URLs und zusätzliche Informationen über Übergänge für `onReferenceFragmentUpdated`, wenn der Hostname der Ziel-URL "example.com" enthält oder mit "developer" beginnt.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.
