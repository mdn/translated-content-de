---
title: NavigationHistoryEntry
slug: Web/API/NavigationHistoryEntry
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`NavigationHistoryEntry`**-Schnittstelle der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert einen einzelnen Navigationseintrag in der Historie.

Diese Objekte werden häufig über die Eigenschaft [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) und die Methode [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries) aufgerufen.

Die Navigation API stellt nur Historieneinträge bereit, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z.B. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder Cross-Origin-Navigationen), und bietet somit eine präzise Liste aller vorhergehenden Historieneinträge nur für Ihre App. Dies macht das Durchlaufen der Historie zu einem viel weniger fragilen Unterfangen als mit der älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) {{ReadOnlyInline}}
  - : Gibt die `id` des Historieneintrags zurück. Dies ist ein eindeutiger, vom Benutzeragenten generierter Wert, der immer einen spezifischen Historieneintrag darstellt und nützlich ist, um ihn mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.
- [`index`](/de/docs/Web/API/NavigationHistoryEntry/index) {{ReadOnlyInline}}
  - : Gibt den Index des Historieneintrags in der Liste der Historieneinträge zurück (das ist die Liste, die von [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries) zurückgegeben wird), oder `-1`, wenn der Eintrag nicht in der Liste erscheint.
- [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) {{ReadOnlyInline}}
  - : Gibt den `key` des Historieneintrags zurück. Dies ist ein eindeutiger, vom Benutzeragenten generierter Wert, der den Slot des Historieneintrags in der Eintragsliste darstellt, anstatt den Eintrag selbst. Er wird verwendet, um über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu diesem bestimmten Slot zu navigieren. Der `key` wird von anderen Einträgen, die den Eintrag in der Liste ersetzen, wiederverwendet (d.h. wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).
- [`sameDocument`](/de/docs/Web/API/NavigationHistoryEntry/sameDocument) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn dieser Historieneintrag für dasselbe `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert ist, oder `false` andernfalls.
- [`url`](/de/docs/Web/API/NavigationHistoryEntry/url) {{ReadOnlyInline}}
  - : Gibt die absolute URL dieses Historieneintrags zurück. Wenn der Eintrag auf ein anderes Dokument als das aktuelle verweist (wie die `sameDocument`-Eigenschaft `false` ist), und dieses Dokument mit einem {{httpheader("Referrer-Policy")}}-Header, der auf `no-referrer` oder `origin` gesetzt ist, abgerufen wurde, gibt die Eigenschaft `null` zurück.

## Instanzmethoden

_Erbt Methoden von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState)
  - : Gibt einen Klon des verfügbaren Zustands zurück, der mit diesem Historieneintrag verbunden ist.

## Ereignisse

- [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Eintrag nicht mehr Teil der Historieneintragliste ist.

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

- [Moderner client-seitiger Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Democode anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
