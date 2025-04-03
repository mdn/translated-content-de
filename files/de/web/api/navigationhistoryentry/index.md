---
title: NavigationHistoryEntry
slug: Web/API/NavigationHistoryEntry
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationHistoryEntry`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert einen einzelnen Eintrag im Navigationsverlauf.

Diese Objekte werden häufig über die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft und die [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries)-Methode aufgerufen.

Die Navigation API zeigt nur Verlaufs-Einträge an, die im aktuellen Browsing-Kontext erstellt wurden und den gleichen Ursprung wie die aktuelle Seite haben (z.B. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder über Ursprünge hinweg), und bietet eine genaue Liste aller vorherigen Verlaufs-Einträge nur für Ihre App. Dies macht das Durchqueren des Verlaufs zu einer weitaus weniger fragilen Angelegenheit als mit der älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die `id` des Verlaufs-Eintrags zurück. Dies ist ein eindeutiger, vom Benutzeragent erzeugter Wert, der immer einen bestimmten Verlaufs-Eintrag repräsentiert und nützlich ist, um ihn mit einer externen Ressource wie einem Speichercache zu korrelieren.
- [`index`](/de/docs/Web/API/NavigationHistoryEntry/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Index des Verlaufs-Eintrags in der Liste der Verlaufs-Einträge zurück (also die Liste, die von [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries) zurückgegeben wird), oder `-1`, wenn der Eintrag nicht in der Liste erscheint.
- [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den `key` des Verlaufs-Eintrags zurück. Dies ist ein eindeutiger, vom Benutzeragent erzeugter Wert, der den Slot des Verlaufs-Eintrags in der Eintragsliste anstelle des Eintrags selbst repräsentiert. Er wird verwendet, um diesen bestimmten Slot über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Der `key` wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (das heißt, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).
- [`sameDocument`](/de/docs/Web/API/NavigationHistoryEntry/sameDocument) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn dieser Verlaufs-Eintrag für dasselbe `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert ist, oder `false` andernfalls.
- [`url`](/de/docs/Web/API/NavigationHistoryEntry/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die absolute URL dieses Verlaufs-Eintrags zurück. Wenn der Eintrag einem anderen Dokument als dem aktuellen entspricht (wie die `sameDocument`-Eigenschaft `false` ist), und dieses Dokument mit einem {{httpheader("Referrer-Policy")}}-Header `no-referrer` oder `origin` abgerufen wurde, gibt die Eigenschaft `null` zurück.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) {{Experimental_Inline}}
  - : Gibt einen Klon des verfügbaren Zustands zurück, der mit diesem Verlaufs-Eintrag assoziiert ist.

## Ereignisse

- [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Eintrag nicht mehr Teil der Verlaufs-Eintragsliste ist.

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

- [Moderne clientseitige Routenplanung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
