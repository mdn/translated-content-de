---
title: webNavigation.onHistoryStateUpdated
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onHistoryStateUpdated
l10n:
  sourceCommit: dec39bc3ee8676967dac28821f58c7c1d4a32d7d
---

Wird ausgelöst, wenn die Seite die [History API](/de/docs/Web/API/History_API/Working_with_the_History_API) verwendet, um die im Adressfeld des Browsers angezeigte URL zu aktualisieren. Alle zukünftigen Ereignisse für diesen Frame verwenden die aktualisierte URL.

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
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `details`
      - : `object`. Details über das Navigationsevent. Weitere Informationen finden Sie im Abschnitt [details](#details).

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, welche ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einschließen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattfinden wird.
- `url`
  - : `string`. Die URL, zu der der gegebene Frame navigieren wird.
- `frameId`
  - : `integer`. Frame, in dem die Navigation stattfinden wird. `0` bedeutet, dass die Navigation im obersten Browsing-Kontext des Tabs erfolgt und nicht in einem verschachtelten {{HTMLElement("iframe")}}. Ein positiver Wert zeigt an, dass die Navigation in einem verschachtelten iframe erfolgt. Frame-IDs sind eindeutig für einen bestimmten Tab und Prozess.
- `frameType`
  - : `string`. Der Typ des Frames, in dem die Navigation erfolgte. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` und `"sub_frame"` zurück.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Frames. Auf `-1` gesetzt, falls dies ein oberster Frame ist.
- `documentId`
  - : `string`. Eine UUID des geladenen Dokuments.
- `parentDocumentId`
  - : `string`. Eine UUID des übergeordneten Dokuments, das den Frame besitzt. Nicht gesetzt, wenn es kein Elternteil gibt.
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` und `"pending_deletion"` zurück.
- `transitionType`
  - : {{WebExtAPIRef("webNavigation.transitionType", "transitionType")}}. Der Grund für die Navigation: zum Beispiel `"link"`, wenn der Benutzer auf einen Link geklickt hat.
- `transitionQualifiers`
  - : `Array` von {{WebExtAPIRef("webNavigation.transitionQualifier", "transitionQualifier")}}. Zusätzliche Informationen über die Navigation: zum Beispiel, ob es eine Server- oder Client-Weiterleitung gab.
- `timeStamp`
  - : `number`. Die Zeit, zu der die URL von der History API geändert wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt wurde, stellte er die ID des Prozesses dar, der den Renderer für diesen Tab ausführt.

## Beispiele

Protokolliert die Ziel-URLs und zusätzliche Übergangsinformationen für `onHistoryStateUpdated`, falls der Hostname der Ziel-URL "example.com" enthält oder mit "developer" beginnt.

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
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverteilungen von Quellcode müssen den obigen Copyright-
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// enthalten.
//    * Weiterverteilungen in binärer Form müssen den obigen Copyright-
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung geliefert werden, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus dieser
// Software abgeleitet wurden, zu bewerben oder zu verkaufen, ohne vorherige
// schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" ZUR VERFÜGUNG GESTELLT. ALLE AUSDRÜCKLICHEN ODER
// STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN, EINSCHLIESSLICH DER
// MARKTGÄNGIGKEIT ODER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, SIND
// AUSGESCHLOSSEN. IN KEINEM FALL KANN DER EIGENTÜMER ODER DIE
// MITWIRKENDEN FÜR JEDEN DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHADEN (INKLUSIVE, ABER
// NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZGÜTERN ODER
// DIENSTLEISTUNGEN; NUTZUNGSAUSFALL, DATENVERLUST ODER
// GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG), ABER
// IN WELCHEM RECHTSGRUND AUCH IMMER VERANTWORTLICH GEMACHT WERDEN,
// SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
