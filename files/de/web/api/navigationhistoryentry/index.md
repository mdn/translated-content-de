---
title: NavigationHistoryEntry
slug: Web/API/NavigationHistoryEntry
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationHistoryEntry`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert einen einzelnen Navigationsverlaufseintrag.

Diese Objekte werden häufig über die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft und die [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries)-Methode aufgerufen.

Die Navigation API zeigt nur solche Verlaufseinträge an, die im aktuellen Browsing-Kontext erstellt wurden und dieselbe Herkunft wie die aktuelle Seite haben (z.B. keine Navigations innerhalb eingebetteter {{htmlelement("iframe")}}s oder domainübergreifende Navigations), und bietet somit eine genaue Liste aller vorherigen Verlaufseinträge nur für Ihre App. Dies macht das Durchlaufen des Verlaufs weitaus weniger fehleranfällig als mit der älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die `id` des Verlaufseintrags zurück. Dies ist ein einzigartiger, vom UA generierter Wert, der immer einen bestimmten Verlaufseintrag darstellt, nützlich, um ihn mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.
- [`index`](/de/docs/Web/API/NavigationHistoryEntry/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Index des Verlaufseintrags in der Verlaufseintragsliste zurück (also die Liste, die von [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries) zurückgegeben wird) oder `-1`, wenn der Eintrag nicht in der Liste erscheint.
- [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den `key` des Verlaufseintrags zurück. Dies ist ein einzigartiger, vom UA generierter Wert, der den Slot des Verlaufseintrags in der Liste darstellt, nicht den Eintrag selbst. Er wird verwendet, um zu diesem bestimmten Slot über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Der `key` wird von anderen Einträgen, die den Eintrag in der Liste ersetzen, wiederverwendet (d.h. wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).
- [`sameDocument`](/de/docs/Web/API/NavigationHistoryEntry/sameDocument) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn dieser Verlaufseintrag dasselbe `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert ist, andernfalls `false`.
- [`url`](/de/docs/Web/API/NavigationHistoryEntry/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die absolute URL dieses Verlaufseintrags zurück. Wenn der Eintrag einem anderen Dokument als dem aktuellen entspricht (wenn die `sameDocument`-Eigenschaft `false` ist) und dieses Dokument mit einem {{httpheader("Referrer-Policy")}}-Header `no-referrer` oder `origin` abgerufen wurde, gibt die Eigenschaft `null` zurück.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) {{Experimental_Inline}}
  - : Gibt einen Klon des verfügbaren Zustands zurück, der mit diesem Verlaufseintrag assoziiert ist.

## Ereignisse

- [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Eintrag nicht mehr Teil der Verlaufseintragsliste ist.

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
