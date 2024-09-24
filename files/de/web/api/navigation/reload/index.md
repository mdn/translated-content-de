---
title: "Navigation: reload()-Methode"
short-title: reload()
slug: Web/API/Navigation/reload
l10n:
  sourceCommit: 6e26603d67a00cc23f0c52afc27055a901d004b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`reload()`**-Methode der
{{domxref("Navigation")}}-Schnittstelle lädt die aktuelle URL neu und aktualisiert dabei alle bereitgestellten Zustandsinformationen in der Historieneintragliste.

## Syntax

```js-nolint
navigate(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `state` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die in dem zugehörigen {{domxref("NavigationHistoryEntry")}} gespeichert werden sollen, sobald die Navigation abgeschlossen ist und die über {{domxref("NavigationHistoryEntry.getState", "getState()")}} abrufbar sind. Dies kann jeder Datentyp sein. Beispielsweise möchten Sie möglicherweise eine Seitenbesuchszählung für Analysezwecke speichern oder UI-Zustandsdetails speichern, sodass die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle im `state` gespeicherten Daten müssen [structured-cloneable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die an das {{domxref("Navigation/navigate_event", "navigate")}}-Ereignis weitergegeben werden, verfügbar in {{domxref("NavigateEvent.info")}}. Dies kann jeder Datentyp sein. Beispielsweise möchten Sie den neu navigierten Inhalt mit einer anderen Animation anzeigen, je nachdem, wie er erreicht wurde (nach links wischen, nach rechts wischen oder zur Startseite gehen). Eine Zeichenkette, die angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer {{domxref("NavigationHistoryEntry")}} erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle von dem `intercept()`-Handler zurückgegebenen Promises erfüllt sind. Dies entspricht der Erfüllung des {{domxref("NavigationTransition.finished")}}-Promises, wenn das {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}}-Ereignis ausgelöst wird.

Eines dieser Promises weist eine Ablehnung auf, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `DataCloneError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `state`-Parameter nicht strukturierte-klonbare Werte enthielt.

## Beispiele

### Verwendung von info und state

```js
async function handleReload() {
  await navigation.reload({
    info: { animation: "fade-in" },
    state: { infoPaneOpen: true },
  }).finished;

  // Anwendungszustand aktualisieren
  // ...
}
```

Seite neu laden und ein neues Zustandselement hinzufügen:

```js
async function handleReload() {
  await navigation.reload({
    state: { ...navigation.currentEntry.getState(), newState: 3 },
  }).finished;

  // Anwendungszustand aktualisieren
  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
