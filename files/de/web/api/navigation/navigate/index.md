---
title: "Navigation: navigate()-Methode"
short-title: navigate()
slug: Web/API/Navigation/navigate
l10n:
  sourceCommit: 6e26603d67a00cc23f0c52afc27055a901d004b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigate()`**-Methode der {{domxref("Navigation")}}-Schnittstelle navigiert zu einer spezifischen URL und aktualisiert dabei gegebenenfalls den bereitgestellten Zustand in der Liste der Verlaufs-Einträge.

## Syntax

```js-nolint
navigate(url)
navigate(url, options)
```

### Parameter

- `url`
  - : Die Ziel-URL, zu der navigiert werden soll. Beachten Sie, dass bei einem Aufruf von `navigate()` auf dem `navigation`-Objekt eines anderen Fensters die URL relativ zur URL des Zielfensters und nicht zur URL des aufrufenden Fensters aufgelöst wird. Dies entspricht dem Verhalten der [History-API](/de/docs/Web/API/History_API), jedoch nicht dem Verhalten der [Location-API](/de/docs/Web/API/Location).
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `state` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die im zugehörigen {{domxref("NavigationHistoryEntry")}} gespeichert werden sollen, sobald die Navigation abgeschlossen ist und über {{domxref("NavigationHistoryEntry.getState", "getState()")}} abrufbar sind. Dies kann jeder Datentyp sein. Sie könnten beispielsweise eine Seitenbesuchsanzahl für Analysezwecke speichern oder Details zum UI-Zustand speichern, damit die Ansicht genau so angezeigt werden kann, wie der Nutzer sie zuletzt verlassen hat. Alle in `state` gespeicherten Daten müssen [strukturklonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die zusammen mit dem {{domxref("Navigation/navigate_event", "navigate")}}-Ereignis übergeben und in {{domxref("NavigateEvent.info")}} verfügbar gemacht werden. Dies kann jeder Datentyp sein. Sie könnten beispielsweise neu navigierte Inhalte mit einer anderen Animation anzeigen, je nachdem, wie die Navigation erfolgte (nach links wischen, nach rechts wischen oder zurück zur Startseite). Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.
    - `history` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verlauf-Verhalten dieser Navigation festlegt. Die verfügbaren Werte sind:
        - `auto`: Der Standardwert; führt normalerweise eine `push`-Navigation durch, kann jedoch unter bestimmten Umständen eine `replace`-Navigation ausführen (siehe die `NotSupportedError`-Beschreibung unten).
        - `push`: Fügt einen neuen {{domxref("NavigationHistoryEntry")}} zur Eintragsliste hinzu oder schlägt unter besonderen Umständen fehl (siehe die `NotSupportedError`-Beschreibung unten).
        - `replace`: Ersetzt den aktuellen {{domxref("NavigationHistoryEntry")}}.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn die sichtbare URL geändert wurde und ein neuer {{domxref("NavigationHistoryEntry")}} erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle von dem `intercept()`-Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht dem Erfüllen des {{domxref("NavigationTransition.finished")}}-Versprechens, wenn das {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}}-Ereignis ausgelöst wird.

Eines dieser Versprechen wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `DataCloneError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `state`-Parameter nicht strukturklonbare Werte enthält.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `url`-Parameter keine gültige URL ist.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die `history`-Option auf `push` gesetzt ist und eine der folgenden besonderen Umstände zutrifft:
    - Der Browser zeigt derzeit das anfängliche `about:blank`-Dokument an.
    - Das Schema der `url` ist `javascript`.

## Beispiele

### Home-Button einrichten

```js
function initHomeBtn() {
  // Holen Sie sich den Schlüssel des zuerst geladenen Eintrags,
  // damit der Benutzer immer zu dieser Ansicht zurückkehren kann.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Navigationsereignisse, wie Linkklicks, abfangen und
// durch Einzelseiten-Navigationsaktionen ersetzen
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Navigieren Sie zu einer anderen Ansicht,
      // aber der "Home"-Button wird immer funktionieren.
    },
  });
});
```

### Ein intelligenter Zurück-Button

Ein von der Seite bereitgestellter "Zurück"-Button kann, sogar nach dem Neuladen, zurückführen, indem die vorherigen Verlaufs-Einträge inspiziert werden:

```js
backButtonEl.addEventListener("click", () => {
  if (
    navigation.entries()[navigation.currentEntry.index - 1]?.url ===
    "/product-listing"
  ) {
    navigation.back();
  } else {
    // Wenn der Benutzer auf andere Weise hierher gelangt ist,
    // z. B. durch direkte Eingabe der URL:
    navigation.navigate("/product-listing", { history: "replace" });
  }
});
```

### Verwendung von `info` und `state`

```js
async function navigateHandler() {
  await navigation.navigate(url, {
    info: { animation: "swipe-right" },
    state: { infoPaneOpen: true },
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

- [Moderner clientseitiger Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
