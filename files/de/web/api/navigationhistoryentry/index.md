---
title: NavigationHistoryEntry
slug: Web/API/NavigationHistoryEntry
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationHistoryEntry`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert einen einzelnen Eintrag im Navigationsverlauf.

Diese Objekte werden häufig über die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft und die [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries)-Methode aufgerufen.

Die Navigation API gibt nur Verlaufseinträge preis, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z. B. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder Navigationen über Ursprünge hinweg), und bietet so eine genaue Liste aller vorherigen Verlaufsänderungen nur für Ihre App. Dies macht das Durchlaufen des Verlaufs weitaus stabiler als bei der älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die `id` des Verlaufseintrags zurück. Dies ist ein eindeutiger, durch die Benutzer-Agentur generierter Wert, der immer einen bestimmten Verlaufseintrag darstellt, nützlich zur Korrelation mit einer externen Ressource wie einem Speichercache.
- [`index`](/de/docs/Web/API/NavigationHistoryEntry/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Index des Verlaufseintrags in der Verlaufseinträge-Liste zurück (also der Liste, die von [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries) zurückgegeben wird), oder `-1`, falls der Eintrag nicht in der Liste erscheint.
- [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den `key` des Verlaufseintrags zurück. Dies ist ein eindeutiger, durch die Benutzer-Agentur generierter Wert, der den Slot des Verlaufseintrags in der Einträge-Liste anstatt den Eintrag selbst darstellt. Er wird verwendet, um zu diesem speziellen Slot über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Der `key` wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (das heißt, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).
- [`sameDocument`](/de/docs/Web/API/NavigationHistoryEntry/sameDocument) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn dieser Verlaufseintrag für dasselbe `document` wie das aktuelle [`Document`](/de/docs/Web/API/Document)-Objekt ist, andernfalls `false`.
- [`url`](/de/docs/Web/API/NavigationHistoryEntry/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die absolute URL dieses Verlaufseintrags zurück. Wenn der Eintrag einem anderen Dokument als dem aktuellen entspricht (wie die `sameDocument`-Eigenschaft `false` ist) und dieses Dokument mit einem {{httpheader("Referrer-Policy")}}-Header mit dem Wert `no-referrer` oder `origin` abgerufen wurde, gibt die Eigenschaft `null` zurück.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) {{Experimental_Inline}}
  - : Gibt eine Kopie des verfügbaren Zustands zurück, der mit diesem Verlaufseintrag verbunden ist.

## Ereignisse

- [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Eintrag nicht mehr Teil der Verlaufseinträge-Liste ist.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
