---
title: Navigation
slug: Web/API/Navigation
l10n:
  sourceCommit: 132d7ff76c89ed913b27eb85fc353adc3eb00e06
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`Navigation`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) ermöglicht die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmatischen Einleitung von Navigationen, der Untersuchung von Navigationseinträgen in der Historie und der Verwaltung von Navigationen, während sie stattfinden.

Es wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation)-Eigenschaft aufgerufen.

Die Navigation API gibt nur Historieneinträge wieder, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z. B. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder über Ursprünge hinweg), und bietet daher eine genaue Liste aller vorherigen Historieneinträge nur für Ihre App. Dies macht das Durchgehen der Historie zu einem viel weniger fragilen Unterfangen im Vergleich zur älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`activation`](/de/docs/Web/API/Navigation/activation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt zurück, das Informationen über die letzte cross-document Navigation enthält, die dieses Dokument "aktiviert" hat.
- [`canGoBack`](/de/docs/Web/API/Navigation/canGoBack) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es möglich ist, rückwärts in der Navigationhistorie zu navigieren
    (d. h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der erste in der Liste der Historieneinträge),
    und `false`, wenn es nicht möglich ist.
- [`canGoForward`](/de/docs/Web/API/Navigation/canGoForward) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es möglich ist, vorwärts in der Navigationhistorie zu navigieren
    (d. h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der letzte in der Liste der Historieneinträge),
    und `false`, wenn es nicht möglich ist.
- [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt zurück, das den Ort repräsentiert, zu dem der Benutzer aktuell navigiert ist.
- [`transition`](/de/docs/Web/API/Navigation/transition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekt zurück, das den Status einer laufenden Navigation repräsentiert,
    die verfolgt werden kann. Gibt `null` zurück, wenn aktuell keine Navigation im Gange ist.

## Instanzmethoden

_Erbt Methoden von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`back()`](/de/docs/Web/API/Navigation/back) {{Experimental_Inline}}
  - : Navigiert um einen Eintrag rückwärts in der Navigationhistorie.
- [`entries()`](/de/docs/Web/API/Navigation/entries) {{Experimental_Inline}}
  - : Gibt ein Array von [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekten zurück, die alle bestehenden Historieneinträge darstellen.
- [`forward()`](/de/docs/Web/API/Navigation/forward) {{Experimental_Inline}}
  - : Navigiert um einen Eintrag vorwärts in der Navigationhistorie.
- [`navigate()`](/de/docs/Web/API/Navigation/navigate) {{Experimental_Inline}}
  - : Navigiert zu einer spezifischen URL und aktualisiert dabei gegebenenfalls den Zustand in der Liste der Historieneinträge.
- [`reload()`](/de/docs/Web/API/Navigation/reload) {{Experimental_Inline}}
  - : Lädt die aktuelle URL neu und aktualisiert dabei gegebenenfalls den Zustand in der Liste der Historieneinträge.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) {{Experimental_Inline}}
  - : Navigiert zu einem spezifischen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry), das durch [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) identifiziert ist.
- [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) {{Experimental_Inline}}
  - : Aktualisiert den Zustand des [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry); wird verwendet
    in Fällen, in denen die Zustandsänderung unabhängig von einer Navigation oder Neuladen ist.

## Ereignisse

_Erbt Ereignisse von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.
- [`navigate`](/de/docs/Web/API/Navigation/navigate_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn [irgendeine Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) eingeleitet wird, sodass Sie eingreifen können, falls erforderlich.
- [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Navigation fehlschlägt.
- [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine erfolgreiche Navigation abgeschlossen ist.

## Beispiele

### Im Verlauf vorwärts und rückwärts bewegen

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

### Zu einem spezifischen Eintrag im Verlauf navigieren

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Navigieren und den Status aktualisieren

```js
navigation.navigate(url, { state: newState });
```

Oder

```js
navigation.reload({ state: newState });
```

Oder wenn der Zustand unabhängig von einer Navigation oder Neuladen ist:

```js
navigation.updateCurrentEntry({ state: newState });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderner Client-seitiger Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
