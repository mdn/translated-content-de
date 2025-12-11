---
title: NavigationHistoryEntry
slug: Web/API/NavigationHistoryEntry
l10n:
  sourceCommit: 0563b7d83916b234fa637483211889e573df9440
---

{{APIRef("Navigation API")}}

Das **`NavigationHistoryEntry`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert einen einzelnen Navigationseintrag im Verlauf.

Diese Objekte werden üblicherweise über die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft und die [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries)-Methode aufgerufen.

Die Navigation API zeigt nur Verlaufs-Einträge an, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z. B. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder Navigationen mit unterschiedlichen Ursprüngen), und liefert eine genaue Liste aller vorherigen Verlaufs-Einträge nur für Ihre App. Dies macht das Durchlaufen des Verlaufs viel weniger anfällig als mit der älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) {{ReadOnlyInline}}
  - : Gibt die `id` des Verlaufs-Eintrags zurück. Dies ist ein eindeutiger, vom Benutzeragenten generierter Wert, der immer einen spezifischen Verlaufs-Eintrag darstellt und nützlich ist, um diesen mit einer externen Ressource, wie einem Speicher-Cache, zu korrelieren.
- [`index`](/de/docs/Web/API/NavigationHistoryEntry/index) {{ReadOnlyInline}}
  - : Gibt den Index des Verlaufs-Eintrags in der Verlaufs-Einträge-Liste zurück (d.h. die Liste, die von [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries) zurückgegeben wird), oder `-1`, wenn der Eintrag nicht in der Liste erscheint.
- [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) {{ReadOnlyInline}}
  - : Gibt den `key` des Verlaufs-Eintrags zurück. Dies ist ein eindeutiger, vom Benutzeragenten generierter Wert, der den Slot des Verlaufs-Eintrags in der Eintragsliste anstelle des Eintrags selbst darstellt. Er wird verwendet, um zu diesem bestimmten Slot über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Der `key` wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (d.h. wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).
- [`sameDocument`](/de/docs/Web/API/NavigationHistoryEntry/sameDocument) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn dieser Verlaufs-Eintrag für dasselbe `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert ist, oder `false` andernfalls.
- [`url`](/de/docs/Web/API/NavigationHistoryEntry/url) {{ReadOnlyInline}}
  - : Gibt die absolute URL dieses Verlaufs-Eintrags zurück. Wenn der Eintrag einem anderen Dokument als dem aktuellen entspricht (wie wenn die `sameDocument`-Eigenschaft `false` ist), und dieses Dokument mit einem {{httpheader("Referrer-Policy")}}-Header abgerufen wurde, der auf `no-referrer` oder `origin` gesetzt ist, gibt die Eigenschaft `null` zurück.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState)
  - : Gibt einen Klon des verfügbaren Zustands zurück, der mit diesem Verlaufs-Eintrag verbunden ist.

## Ereignisse

- [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event)
  - : Wird ausgelöst, wenn der Eintrag nicht mehr Teil der Verlaufs-Einträge-Liste ist.

## Beispiele

```js
function initHomeBtn() {
  // Get the key of the first loaded entry
  // so the user can always go back to this view.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Intercept navigate events, such as link clicks, and
// replace them with single-page navigations
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Navigate to a different view,
      // but the "home" button will always work.
    },
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
