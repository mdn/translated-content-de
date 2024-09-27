---
title: Navigation
slug: Web/API/Navigation
l10n:
  sourceCommit: f3976b4130f066a6114aeb9617924cdcb0f994ce
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`Navigation`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) ermöglicht die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort. Dazu gehört das programmgesteuerte Initiieren von Navigationen, das Untersuchen von Navigationseinträgen in der Historie und das Verwalten von Navigationen, während sie stattfinden.

Es wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation)-Eigenschaft erreicht.

Die Navigation API zeigt nur jene Historieneinträge an, die im aktuellen Browsing-Kontext erstellt wurden und den gleichen Ursprung wie die aktuelle Seite haben (d.h. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder cross-origin Navigationen), wodurch eine genaue Liste aller vorherigen Historieneinträge nur für Ihre App bereitgestellt wird. Dies macht das Durchqueren der Historie weitaus weniger anfällig für Fehler als mit der älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`canGoBack`](/de/docs/Web/API/Navigation/canGoBack) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es möglich ist, in der Navigationshistorie rückwärts zu navigieren
    (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der erste in der Historien-Eintragsliste),
    und `false`, wenn dies nicht möglich ist.
- [`canGoForward`](/de/docs/Web/API/Navigation/canGoForward) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es möglich ist, in der Navigationshistorie vorwärts zu navigieren
    (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der letzte in der Historien-Eintragsliste),
    und `false`, wenn dies nicht möglich ist.
- [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt zurück, das den Standort repräsentiert, zu dem der Benutzer derzeit navigiert ist.
- [`transition`](/de/docs/Web/API/Navigation/transition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekt zurück, das den Status einer in Bearbeitung befindlichen Navigation repräsentiert, das zur Verfolgung verwendet werden kann. Gibt `null` zurück, wenn derzeit keine Navigation in Bearbeitung ist.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`back()`](/de/docs/Web/API/Navigation/back) {{Experimental_Inline}}
  - : Navigiert um einen Eintrag in der Navigationshistorie rückwärts.
- [`entries()`](/de/docs/Web/API/Navigation/entries) {{Experimental_Inline}}
  - : Gibt ein Array von [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekten zurück, die alle vorhandenen Historieneinträge repräsentieren.
- [`forward()`](/de/docs/Web/API/Navigation/forward) {{Experimental_Inline}}
  - : Navigiert um einen Eintrag in der Navigationshistorie vorwärts.
- [`navigate()`](/de/docs/Web/API/Navigation/navigate) {{Experimental_Inline}}
  - : Navigiert zu einer spezifischen URL und aktualisiert jeden bereitgestellten Zustand in der Historieneintragsliste.
- [`reload()`](/de/docs/Web/API/Navigation/reload) {{Experimental_Inline}}
  - : Lädt die aktuelle URL neu und aktualisiert jeden bereitgestellten Zustand in der Historieneintragsliste.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) {{Experimental_Inline}}
  - : Navigiert zu einem bestimmten [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry), der durch [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) identifiziert ist.
- [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) {{Experimental_Inline}}
  - : Aktualisiert den Zustand des [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry); wird
    in Fällen verwendet, in denen die Zustandsänderung unabhängig von einer Navigation oder einem Neuladen sein wird.

## Ereignisse

- [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.
- [`navigate`](/de/docs/Web/API/Navigation/navigate_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, was es Ihnen ermöglicht, diese nach Bedarf abzufangen.
- [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Navigation fehlschlägt.
- [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine erfolgreiche Navigation abgeschlossen ist.

## Beispiele

### Vorwärts- und Rückwärtsbewegung in der Historie

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

### Traversierung zu einem bestimmten Historieneintrag

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Navigation und Statusaktualisierung

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
