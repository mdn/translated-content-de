---
title: Navigation
slug: Web/API/Navigation
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`Navigation`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) ermöglicht die Steuerung aller Navigationsaktionen für das aktuelle `window` an einem zentralen Ort. Dazu gehört das programmgesteuerte Einleiten von Navigationen, das Untersuchen von Navigationseinträgen in der Historie und das Verwalten von Navigationen, während sie stattfinden.

Es wird über die Eigenschaft [`Window.navigation`](/de/docs/Web/API/Window/navigation) aufgerufen.

Die Navigation API offenbart nur Einträge in der Historie, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z.B. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder Cross-Origin-Navigationen), was eine genaue Liste aller vorherigen Historieeinträge ausschließlich für Ihre App bietet. Dies macht das Durchlaufen der Historie zu einer weitaus weniger fragilen Angelegenheit im Vergleich zur älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`activation`](/de/docs/Web/API/Navigation/activation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt zurück, das Informationen über die letzte Cross-Dokument-Navigation enthält, die dieses Dokument "aktiviert" hat.
- [`canGoBack`](/de/docs/Web/API/Navigation/canGoBack) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es möglich ist, in der Navigationshistorie rückwärts zu navigieren
    (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der erste Eintrag in der Historie-Liste),
    und `false`, wenn dies nicht der Fall ist.
- [`canGoForward`](/de/docs/Web/API/Navigation/canGoForward) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es möglich ist, in der Navigationshistorie vorwärts zu navigieren
    (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der letzte Eintrag in der Historie-Liste),
    und `false`, wenn dies nicht der Fall ist.
- [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt zurück, das den Ort repräsentiert, zu dem der Benutzer gerade navigiert ist.
- [`transition`](/de/docs/Web/API/Navigation/transition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekt zurück, das den Status einer laufenden Navigation repräsentiert,
    das zur Verfolgung verwendet werden kann. Gibt `null` zurück, wenn keine Navigation derzeit im Gange ist.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`back()`](/de/docs/Web/API/Navigation/back) {{Experimental_Inline}}
  - : Navigiert um einen Eintrag in der Navigationshistorie rückwärts.
- [`entries()`](/de/docs/Web/API/Navigation/entries) {{Experimental_Inline}}
  - : Gibt ein Array von [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekten zurück, die alle existierenden Historieeinträge repräsentieren.
- [`forward()`](/de/docs/Web/API/Navigation/forward) {{Experimental_Inline}}
  - : Navigiert um einen Eintrag in der Navigationshistorie vorwärts.
- [`navigate()`](/de/docs/Web/API/Navigation/navigate) {{Experimental_Inline}}
  - : Navigiert zu einer spezifischen URL, wobei der bereitgestellte Zustand in der Historie-Eintragsliste aktualisiert wird.
- [`reload()`](/de/docs/Web/API/Navigation/reload) {{Experimental_Inline}}
  - : Lädt die aktuelle URL neu, wobei der bereitgestellte Zustand in der Historie-Eintragsliste aktualisiert wird.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) {{Experimental_Inline}}
  - : Navigiert zu einem spezifischen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry), der durch [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) identifiziert wird.
- [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) {{Experimental_Inline}}
  - : Aktualisiert den Zustand des [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry); wird verwendet
    in Fällen, in denen die Zustandsänderung unabhängig von einer Navigation oder Neuladen ist.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.
- [`navigate`](/de/docs/Web/API/Navigation/navigate_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, wodurch Sie bei Bedarf eingreifen können.
- [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Navigation fehlschlägt.
- [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine erfolgreiche Navigation abgeschlossen ist.

## Beispiele

### Vorwärts- und Rückwärtsnavigieren in der Historie

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

### Durchlaufen zu einem spezifischen Historieeintrag

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

- [Moderne clientseitige Routenerstellung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
