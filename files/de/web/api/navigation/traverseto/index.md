---
title: "Navigation: traverseTo() Methode"
short-title: traverseTo()
slug: Web/API/Navigation/traverseTo
l10n:
  sourceCommit: f828e14c25d972b71d57afb419d22c49ecad11d0
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`traverseTo()`**-Methode des {{domxref("Navigation")}}-Interfaces navigiert zu dem {{domxref("NavigationHistoryEntry")}}, das durch den gegebenen {{domxref("NavigationHistoryEntry.key", "key")}} identifiziert wird.

## Syntax

```js-nolint
traverseTo(key)
traverseTo(key, options)
```

### Parameter

- `key`
  - : Der `key` des {{domxref("NavigationHistoryEntry")}}, zu dem navigiert werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die an das {{domxref("Navigation/navigate_event", "navigate")}}-Ereignis übergeben werden, verfügbar in {{domxref("NavigateEvent.info")}}. Dies kann jeden Datentyp annehmen. Sie könnten zum Beispiel den neu aufgerufenen Inhalt mit einer anderen Animation anzeigen, abhängig davon, wie er aufgerufen wurde (nach links wischen, nach rechts wischen oder nach Hause gehen). Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer {{domxref("NavigationHistoryEntry")}} erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle von dem `intercept()`-Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht der Erfüllung des {{domxref("NavigationTransition.finished")}}-Versprechens, wenn das {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}}-Ereignis ausgelöst wird.

Eines dieser Versprechen wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("Navigation.currentEntry")}}-Wert des {{domxref("NavigationHistoryEntry.index")}} -1 ist, was bedeutet, dass das aktuelle {{domxref("Document")}} noch nicht aktiv ist, oder wenn die Navigationshistorie keinen {{domxref("NavigationHistoryEntry")}} mit dem angegebenen Schlüssel enthält, oder wenn das aktuelle {{domxref("Document")}} entladen wird.

## Beispiele

### Home-Button einrichten

```js
function initHomeBtn() {
  // Den Schlüssel des zuerst geladenen Eintrags erhalten,
  // damit der Benutzer immer zu dieser Ansicht zurückkehren kann.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Navigationsereignisse wie Link-Klicks abfangen
// und mit Single-Page-Navigationen ersetzen
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Zu einer anderen Ansicht navigieren,
      // aber der "Home"-Button funktioniert immer.
    },
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärungsdokument](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
