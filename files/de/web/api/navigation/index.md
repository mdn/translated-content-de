---
title: Navigation
slug: Web/API/Navigation
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`Navigation`** Interface der [Navigation API](/de/docs/Web/API/Navigation_API) ermöglicht die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmatischen Initiierung von Navigationsvorgängen, der Untersuchung von Navigationseinträgen in der Historie und der Verwaltung von Navigationsvorgängen, während diese geschehen.

Es wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation) Eigenschaft zugegriffen.

Die Navigation API gibt nur Verlaufsdatensätze preis, die im aktuellen Browsing-Kontext erstellt wurden und den gleichen Ursprung wie die aktuelle Seite haben (z.B. keine Navigationsvorgänge innerhalb eingebetteter {{htmlelement("iframe")}}s oder Cross-Origin-Navigationsvorgänge), und bietet somit eine genaue Liste aller vorherigen Verlaufsdatensätze nur für Ihre App. Dies macht das Durchqueren der Historie weitaus weniger anfällig als mit der älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`activation`](/de/docs/Web/API/Navigation/activation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) Objekt zurück, das Informationen über die kürzlichste bereichsübergreifende Navigation enthält, die dieses Dokument „aktiviert“ hat.
- [`canGoBack`](/de/docs/Web/API/Navigation/canGoBack) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es möglich ist, in der Navigation-Historie rückwärts zu navigieren
    (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der erste in der Liste der Historien-Einträge),
    und `false`, wenn nicht.
- [`canGoForward`](/de/docs/Web/API/Navigation/canGoForward) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es möglich ist, in der Navigation-Historie vorwärts zu navigieren
    (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der letzte in der Liste der Historien-Einträge),
    und `false`, wenn nicht.
- [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekt zurück, das den Ort darstellt,
    zu dem der Nutzer derzeit navigiert ist.
- [`transition`](/de/docs/Web/API/Navigation/transition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) Objekt zurück, das den Status einer laufenden Navigation darstellt,
    der verwendet werden kann, um sie zu verfolgen. Gibt `null` zurück, wenn derzeit keine Navigation im Gange ist.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`back()`](/de/docs/Web/API/Navigation/back) {{Experimental_Inline}}
  - : Navigiert um einen Eintrag rückwärts in der Navigation-Historie.
- [`entries()`](/de/docs/Web/API/Navigation/entries) {{Experimental_Inline}}
  - : Gibt ein Array von [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekten zurück, die alle vorhandenen Historien-Einträge darstellen.
- [`forward()`](/de/docs/Web/API/Navigation/forward) {{Experimental_Inline}}
  - : Navigiert um einen Eintrag vorwärts in der Navigation-Historie.
- [`navigate()`](/de/docs/Web/API/Navigation/navigate) {{Experimental_Inline}}
  - : Navigiert zu einer bestimmten URL und aktualisiert dabei eventuell bereitgestellte Zustände in der Liste der Historien-Einträge.
- [`reload()`](/de/docs/Web/API/Navigation/reload) {{Experimental_Inline}}
  - : Lädt die aktuelle URL neu und aktualisiert dabei eventuell bereitgestellte Zustände in der Liste der Historien-Einträge.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) {{Experimental_Inline}}
  - : Navigiert zu einem bestimmten [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry), identifiziert durch [`key`](/de/docs/Web/API/NavigationHistoryEntry/key).
- [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) {{Experimental_Inline}}
  - : Aktualisiert den Zustand des [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry); verwendet in Fällen,
    in denen die Zustandsänderung unabhängig von einer Navigation oder einem Neuladen erfolgen wird.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.
- [`navigate`](/de/docs/Web/API/Navigation/navigate_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird und ermöglicht es Ihnen, erforderliche Maßnahmen zu ergreifen.
- [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Navigation fehlschlägt.
- [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine erfolgreiche Navigation beendet ist.

## Beispiele

### Vorwärts und rückwärts in der Historie bewegen

```js
async function backHandler() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // Handle any required clean-up after
    // navigation has finished
  } else {
    displayBanner("You are on the first page");
  }
}

async function forwardHandler() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // Handle any required clean-up after
    // navigation has finished
  } else {
    displayBanner("You are on the last page");
  }
}
```

### Zu einem bestimmten Historien-Eintrag navigieren

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Navigieren und Zustand aktualisieren

```js
navigation.navigate(url, { state: newState });
```

Oder

```js
navigation.reload({ state: newState });
```

Oder wenn der Zustand unabhängig von einer Navigation oder einem Neuladen ist:

```js
navigation.updateCurrentEntry({ state: newState });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API live demo](https://mdn.github.io/dom-examples/navigation-api/) ([view demo source](https://github.com/mdn/dom-examples/tree/main/navigation-api))
