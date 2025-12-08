---
title: Navigation
slug: Web/API/Navigation
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Das **`Navigation`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) ermöglicht die Steuerung aller Navigationsaktionen für das aktuelle `Window` an einem zentralen Ort. Dazu gehört das programmatische Initiieren von Navigationen, das Überprüfen von Navigationseinträgen in der Historie sowie das Verwalten von Navigationen, während sie stattfinden.

Es wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation)-Eigenschaft zugegriffen.

Die Navigation API gibt nur Historieneinträge preis, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z. B. nicht Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder cross-origin Navigationen), was eine genaue Liste aller vorherigen Historieneinträge nur für Ihre App bereitstellt. Dies macht das Durchlaufen der Historie weitaus weniger fehleranfällig als mit der älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`activation`](/de/docs/Web/API/Navigation/activation) {{ReadOnlyInline}}
  - : Gibt ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt zurück, das Informationen über die zuletzt durchgeführte cross-document Navigation enthält, die dieses Dokument "aktiviert" hat.
- [`canGoBack`](/de/docs/Web/API/Navigation/canGoBack) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn es möglich ist, in der Navigationshistorie zurückzugehen
    (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der erste in der Historieneintrag-Liste),
    und `false`, wenn dies nicht möglich ist.
- [`canGoForward`](/de/docs/Web/API/Navigation/canGoForward) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn es möglich ist, in der Navigationshistorie vorwärts zu gehen
    (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der letzte in der Historieneintrag-Liste),
    und `false`, wenn dies nicht möglich ist.
- [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) {{ReadOnlyInline}}
  - : Gibt ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt zurück, das den Ort repräsentiert, zu dem der Benutzer aktuell navigiert ist.
- [`transition`](/de/docs/Web/API/Navigation/transition) {{ReadOnlyInline}}
  - : Gibt ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekt zurück, das den Status einer laufenden Navigation repräsentiert,
    welches genutzt werden kann, um diese zu verfolgen. Gibt `null` zurück, wenn derzeit keine Navigation im Gange ist.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`back()`](/de/docs/Web/API/Navigation/back)
  - : Navigiert um einen Eintrag in der Navigationshistorie zurück.
- [`entries()`](/de/docs/Web/API/Navigation/entries)
  - : Gibt ein Array von [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekten zurück, die alle bestehenden Historieneinträge repräsentieren.
- [`forward()`](/de/docs/Web/API/Navigation/forward)
  - : Navigiert um einen Eintrag in der Navigationshistorie vorwärts.
- [`navigate()`](/de/docs/Web/API/Navigation/navigate)
  - : Navigiert zu einer bestimmten URL und aktualisiert jeden bereitgestellten Status in der Historieneinträge-Liste.
- [`reload()`](/de/docs/Web/API/Navigation/reload)
  - : Lädt die aktuelle URL neu und aktualisiert jeden bereitgestellten Status in der Historieneinträge-Liste.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)
  - : Navigiert zu einem bestimmten [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry), identifiziert durch [`key`](/de/docs/Web/API/NavigationHistoryEntry/key).
- [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry)
  - : Aktualisiert den Status von [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry); wird verwendet
    in Fällen, in denen die Statusänderung unabhängig von einer Navigation oder einem Neuladen sein wird.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) {{Experimental_Inline}}
  - : Tritt auf, wenn sich der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.
- [`navigate`](/de/docs/Web/API/Navigation/navigate_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn [eine beliebige Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, sodass Sie nach Bedarf eingreifen können.
- [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) {{Experimental_Inline}}
  - : Tritt auf, wenn eine Navigation fehlschlägt.
- [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) {{Experimental_Inline}}
  - : Tritt auf, wenn eine erfolgreiche Navigation abgeschlossen ist.

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

### Durchsuchen eines bestimmten Historieneintrags

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Navigieren und Aktualisieren des Status

```js
navigation.navigate(url, { state: newState });
```

Oder

```js
navigation.reload({ state: newState });
```

Oder wenn der Status unabhängig von einer Navigation oder einem Neuladen ist:

```js
navigation.updateCurrentEntry({ state: newState });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne client-seitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
