---
title: NavigationHistoryEntry
slug: Web/API/NavigationHistoryEntry
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationHistoryEntry`** Interface der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert einen einzelnen Navigationseintrag im Verlauf.

Diese Objekte werden häufig über die Eigenschaft [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) und die Methode [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries) abgerufen.

Die Navigation API gibt nur Verlaufseinträge preis, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z. B. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder Cross-Origin-Navigationen), und bietet eine genaue Liste aller vorherigen Verlaufseinträge nur für Ihre Anwendung. Dies macht die Navigation im Verlauf weitaus weniger fragil im Vergleich zur älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die `id` des Verlaufseintrags zurück. Dies ist ein eindeutiger, vom UA generierter Wert, der immer einen bestimmten Verlaufseintrag repräsentiert und nützlich ist, um ihn mit einer externen Ressource wie einem Speichercache zu korrelieren.
- [`index`](/de/docs/Web/API/NavigationHistoryEntry/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Index des Verlaufseintrags in der Liste der Verlaufseinträge zurück (also die Liste, die von [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries) zurückgegeben wird), oder `-1`, wenn der Eintrag nicht in der Liste erscheint.
- [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den `key` des Verlaufseintrags zurück. Dies ist ein eindeutiger, vom UA generierter Wert, der den Slot des Verlaufseintrags in der Liste darstellt, anstatt den Eintrag selbst. Er wird verwendet, um genau diesen Slot über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Der `key` wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (das heißt, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).
- [`sameDocument`](/de/docs/Web/API/NavigationHistoryEntry/sameDocument) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn dieser Verlaufseintrag für dasselbe `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document) Wert ist, oder `false` andernfalls.
- [`url`](/de/docs/Web/API/NavigationHistoryEntry/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die absolute URL dieses Verlaufseintrags zurück. Wenn der Eintrag einem anderen Dokument als dem aktuellen entspricht (wie die `sameDocument`-Eigenschaft `false` ist) und dieses Dokument mit einem {{httpheader("Referrer-Policy")}}-Header `no-referrer` oder `origin` abgerufen wurde, gibt die Eigenschaft `null` zurück.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) {{Experimental_Inline}}
  - : Gibt einen Klon des verfügbaren Zustands zurück, der mit diesem Verlaufseintrag verknüpft ist.

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

- [Moderne clientseitige Router: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
