---
title: NavigationHistoryEntry
slug: Web/API/NavigationHistoryEntry
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationHistoryEntry`**-Interface der {{domxref("Navigation API", "Navigation API", "", "nocode")}} repräsentiert einen einzelnen Eintrag in der Navigationshistorie.

Diese Objekte werden häufig über die {{domxref("Navigation.currentEntry")}}-Eigenschaft und die {{domxref("Navigation.entries()")}}-Methode aufgerufen.

Die Navigation API zeigt nur die Verlaufseinträge an, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z. B. keine Navigationen in eingebetteten {{htmlelement("iframe")}}s oder Navigationen mit unterschiedlichem Ursprung). Dadurch wird eine genaue Liste aller vorherigen Verlaufseinträge nur für Ihre Anwendung bereitgestellt. Dies macht das Durchqueren des Verlaufs wesentlich weniger anfällig als mit der älteren {{domxref("History API", "History API", "", "nocode")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("NavigationHistoryEntry.id", "id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die `id` des Verlaufseintrags zurück. Dies ist ein einzigartiger, von der Nutzerumgebung generierter Wert, der immer einen bestimmten Verlaufseintrag darstellt und nützlich ist, um ihn mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.
- {{domxref("NavigationHistoryEntry.index", "index")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Index des Verlaufseintrags in der Liste der Verlaufseinträge zurück (also der Liste, die von {{domxref("Navigation.entries()")}} zurückgegeben wird), oder `-1`, wenn der Eintrag nicht in der Liste erscheint.
- {{domxref("NavigationHistoryEntry.key", "key")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den `key` des Verlaufseintrags zurück. Dies ist ein einzigartiger, von der Nutzerumgebung generierter Wert, der den Platz des Verlaufseintrags in der Liste darstellt, nicht den Eintrag selbst. Er wird verwendet, um über den speziellen Platz mit {{domxref("Navigation.traverseTo()")}} zu navigieren. Der `key` wird von anderen Einträgen, die den Eintrag in der Liste ersetzen, wiederverwendet (das heißt, wenn der {{domxref("NavigateEvent.navigationType")}} `replace` ist).
- {{domxref("NavigationHistoryEntry.sameDocument", "sameDocument")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn dieser Verlaufseintrag für dasselbe `document` wie der aktuelle {{domxref("Document")}}-Wert ist, oder `false` andernfalls.
- {{domxref("NavigationHistoryEntry.url", "url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die absolute URL dieses Verlaufseintrags zurück. Wenn der Eintrag einem anderen Dokument als dem aktuellen entspricht (z.B. wenn die `sameDocument`-Eigenschaft `false` ist) und dieses Dokument mit einem {{httpheader("Referrer-Policy")}}-Header, der auf `no-referrer` oder `origin` gesetzt ist, abgerufen wurde, gibt die Eigenschaft `null` zurück.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("NavigationHistoryEntry.getState", "getState()")}} {{Experimental_Inline}}
  - : Gibt eine Kopie des verfügbaren Zustands zurück, der mit diesem Verlaufseintrag verknüpft ist.

## Ereignisse

- {{domxref("NavigationHistoryEntry/dispose_event", "dispose")}} {{Experimental_Inline}}
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

- [Moderne client-seitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demonstration](https://gigantic-honored-octagon.glitch.me/)
