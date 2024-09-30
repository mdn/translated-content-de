---
title: Navigation
slug: Web/API/Navigation
l10n:
  sourceCommit: f3976b4130f066a6114aeb9617924cdcb0f994ce
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`Navigation`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) ermöglicht die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmatischen Einleitung von Navigationen, der Untersuchung von Navigationseinträgen in der Historie und der Verwaltung von Navigationen während ihres Ablaufs.

Es wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation)-Eigenschaft aufgerufen.

Die Navigation API gibt nur Historieeinträge der aktuellen Browsing-Kontextes frei, die denselben Ursprung wie die aktuelle Seite haben (z.B. keine Navigationen in eingebetteten {{htmlelement("iframe")}}s oder externe Cross-Origin-Navigationen) und bietet eine genaue Liste aller vorherigen Historieeinträge nur für Ihre Anwendung. Dies macht das Durchschreiten der Historie wesentlich robuster als mit der älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`canGoBack`](/de/docs/Web/API/Navigation/canGoBack) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es möglich ist, in der Navigation zurückzugehen
    (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der erste in der Liste der Historieeinträge),
    und `false`, wenn es nicht möglich ist.
- [`canGoForward`](/de/docs/Web/API/Navigation/canGoForward) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es möglich ist, in der Navigation vorwärts zu gehen
    (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der letzte in der Liste der Historieeinträge),
    und `false`, wenn es nicht möglich ist.
- [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt zurück, das den Ort repräsentiert, zu dem der Nutzer derzeit navigiert ist.
- [`transition`](/de/docs/Web/API/Navigation/transition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekt zurück, das den Status einer laufenden Navigation darstellt,
    das zur Verfolgung verwendet werden kann. Gibt `null` zurück, wenn derzeit keine Navigation im Gange ist.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`back()`](/de/docs/Web/API/Navigation/back) {{Experimental_Inline}}
  - : Navigiert um einen Eintrag in der Navigation zurück.
- [`entries()`](/de/docs/Web/API/Navigation/entries) {{Experimental_Inline}}
  - : Gibt ein Array von [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekten zurück, die alle vorhandenen Historieeinträge repräsentieren.
- [`forward()`](/de/docs/Web/API/Navigation/forward) {{Experimental_Inline}}
  - : Navigiert um einen Eintrag in der Navigation vorwärts.
- [`navigate()`](/de/docs/Web/API/Navigation/navigate) {{Experimental_Inline}}
  - : Navigiert zu einer spezifischen URL und aktualisiert gegebenenfalls den Zustand in der Historieeintragsliste.
- [`reload()`](/de/docs/Web/API/Navigation/reload) {{Experimental_Inline}}
  - : Lädt die aktuelle URL neu und aktualisiert gegebenenfalls den Zustand in der Historieeintragsliste.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) {{Experimental_Inline}}
  - : Navigiert zu einem spezifischen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry), identifiziert durch [`key`](/de/docs/Web/API/NavigationHistoryEntry/key).
- [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) {{Experimental_Inline}}
  - : Aktualisiert den Zustand des [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry); wird in Fällen verwendet, in denen die Zustandsänderung unabhängig von einer Navigation oder einem Neustart sein wird.

## Ereignisse

- [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.
- [`navigate`](/de/docs/Web/API/Navigation/navigate_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn [irgendeine Form der Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, sodass Sie sie bei Bedarf abfangen können.
- [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Navigation fehlschlägt.
- [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine erfolgreiche Navigation abgeschlossen wurde.

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

### Durchlaufen eines bestimmten Historieeintrags

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Navigieren und Aktualisieren des Zustands

```js
navigation.navigate(url, { state: newState });
```

Oder

```js
navigation.reload({ state: newState });
```

Oder wenn der Zustand unabhängig von einer Navigation oder einem Neustart ist:

```js
navigation.updateCurrentEntry({ state: newState });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routenerstellung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärungsdokument](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
