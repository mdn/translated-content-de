---
title: Navigation
slug: Web/API/Navigation
l10n:
  sourceCommit: e7ffb2866dc8b67280801535c7f58bf073a5aaf9
---

{{APIRef("Navigation API")}}

Das **`Navigation`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) ermöglicht die Steuerung aller Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmatischen Initiierung von Navigationen, der Untersuchung von Navigationseinträgen in der Historie und der Verwaltung von Navigationen, während sie geschehen.

Es wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation) Eigenschaft aufgerufen.

Die Navigation API zeigt nur die Verlaufseinträge an, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z.B. keine Navigationen innerhalb von eingebetteten {{htmlelement("iframe")}}s oder Cross-Origin-Navigationen), und liefert eine genaue Liste aller vorherigen Verlaufseinträge nur für Ihre App. Dies macht das Durchlaufen des Verlaufs zu einem weitaus weniger anfälligen Vorhaben als mit der älteren [History API](/de/docs/Web/API/History_API).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`activation`](/de/docs/Web/API/Navigation/activation) {{ReadOnlyInline}}
  - : Gibt ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt zurück, das Informationen über die letzte Cross-Dokument-Navigation enthält, die dieses Dokument "aktiviert" hat.
- [`canGoBack`](/de/docs/Web/API/Navigation/canGoBack) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn es möglich ist, im Navigationsverlauf zurückzublättern
    (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der erste Eintrag in der Verlaufsliste),
    und `false`, wenn dies nicht der Fall ist.
- [`canGoForward`](/de/docs/Web/API/Navigation/canGoForward) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn es möglich ist, im Navigationsverlauf vorwärts zu blättern
    (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der letzte Eintrag in der Verlaufsliste),
    und `false`, wenn dies nicht der Fall ist.
- [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) {{ReadOnlyInline}}
  - : Gibt ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt zurück, das den Standort darstellt, zu dem der Benutzer aktuell navigiert ist.
- [`transition`](/de/docs/Web/API/Navigation/transition) {{ReadOnlyInline}}
  - : Gibt ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekt zurück, das den Status einer laufenden Navigation darstellt,
    das zur Verfolgung verwendet werden kann. Gibt `null` zurück, wenn keine Navigation in Bearbeitung ist.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`back()`](/de/docs/Web/API/Navigation/back)
  - : Navigiert um einen Eintrag im Navigationsverlauf zurück.
- [`entries()`](/de/docs/Web/API/Navigation/entries)
  - : Gibt ein Array von [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekten zurück, die alle vorhandenen Verlaufsobjekte darstellen.
- [`forward()`](/de/docs/Web/API/Navigation/forward)
  - : Navigiert um einen Eintrag im Navigationsverlauf vorwärts.
- [`navigate()`](/de/docs/Web/API/Navigation/navigate)
  - : Navigiert zu einer bestimmten URL, wobei alle bereitgestellten Zustände in der Verlaufsliste aktualisiert werden.
- [`reload()`](/de/docs/Web/API/Navigation/reload)
  - : Lädt die aktuelle URL neu und aktualisiert alle bereitgestellten Zustände in der Verlaufsliste.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)
  - : Navigiert zu einem bestimmten [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry), identifiziert durch [`key`](/de/docs/Web/API/NavigationHistoryEntry/key).
- [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry)
  - : Aktualisiert den Zustand des [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry); verwendet
    in Fällen, wo die Zustandsänderung unabhängig von einer Navigation oder einem Reload sein wird.

## Ereignisse

_Erbt Ereignisse von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)
  - : Wird ausgelöst, wenn sich die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.
- [`navigate`](/de/docs/Web/API/Navigation/navigate_event)
  - : Wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, wodurch Sie den Ablauf nach Bedarf abfangen können.
- [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)
  - : Wird ausgelöst, wenn eine Navigation fehlschlägt.
- [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)
  - : Wird ausgelöst, wenn eine erfolgreiche Navigation abgeschlossen ist.

## Beispiele

### Vorwärts- und Rückwärtsbewegen im Verlauf

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

### Zu einem bestimmten Verlaufseintrag navigieren

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

Oder wenn der Zustand unabhängig von einer Navigation oder einem Reload ist:

```js
navigation.updateCurrentEntry({ state: newState });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
