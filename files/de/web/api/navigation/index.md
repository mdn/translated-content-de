---
title: Navigation
slug: Web/API/Navigation
l10n:
  sourceCommit: f3976b4130f066a6114aeb9617924cdcb0f994ce
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`Navigation`**-Interface der {{domxref("Navigation API", "Navigation API", "", "nocode")}} ermöglicht die Steuerung aller Navigationsaktionen für das aktuelle `window` an einem zentralen Ort. Dazu gehören das programmatische Initiieren von Navigationen, das Untersuchen von Navigationseinträgen in der Historie und das Verwalten von Navigationen, während sie geschehen.

Es wird über die {{domxref("Window.navigation")}}-Eigenschaft zugegriffen.

Die Navigation API gibt nur Historieneinträge preis, die im aktuellen Browserkontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z. B. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder cross-origin Navigationen), und liefert eine genaue Liste aller vorherigen Historieneinträge ausschließlich für Ihre App. Dies macht das Durchsuchen der Historie zu einem viel weniger anfälligen Unterfangen als mit der älteren {{domxref("History API", "History API", "", "nocode")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("Navigation.canGoBack", "canGoBack")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es möglich ist, rückwärts in der Navigationeshistorie zu navigieren
    (d. h. die {{domxref("Navigation.currentEntry", "currentEntry")}} ist nicht der erste Eintrag in der Historienliste),
    und `false`, wenn nicht.
- {{domxref("Navigation.canGoForward", "canGoForward")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es möglich ist, vorwärts in der Navigationeshistorie zu navigieren
    (d. h. die {{domxref("Navigation.currentEntry", "currentEntry")}} ist nicht der letzte Eintrag in der Historienliste),
    und `false`, wenn nicht.
- {{domxref("Navigation.currentEntry", "currentEntry")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("NavigationHistoryEntry")}}-Objekt zurück, das den Ort repräsentiert, zu dem der Benutzer gerade
    navigiert hat.
- {{domxref("Navigation.transition", "transition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("NavigationTransition")}}-Objekt zurück, das den Status einer laufenden Navigation repräsentiert,
    das zum Verfolgen dieser verwendet werden kann. Gibt `null` zurück, wenn derzeit keine Navigation im Gange ist.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("Navigation.back", "back()")}} {{Experimental_Inline}}
  - : Navigiert um einen Eintrag in der Navigationeshistorie zurück.
- {{domxref("Navigation.entries", "entries()")}} {{Experimental_Inline}}
  - : Gibt ein Array von {{domxref("NavigationHistoryEntry")}}-Objekten zurück, die alle bestehenden Historieneinträge repräsentieren.
- {{domxref("Navigation.forward", "forward()")}} {{Experimental_Inline}}
  - : Navigiert um einen Eintrag in der Navigationeshistorie vorwärts.
- {{domxref("Navigation.navigate", "navigate()")}} {{Experimental_Inline}}
  - : Navigiert zu einer spezifischen URL und aktualisiert jeden bereitgestellten Zustand in der Historienliste.
- {{domxref("Navigation.reload", "reload()")}} {{Experimental_Inline}}
  - : Lädt die aktuelle URL neu und aktualisiert jeden bereitgestellten Zustand in der Historienliste.
- {{domxref("Navigation.traverseTo", "traverseTo()")}} {{Experimental_Inline}}
  - : Navigiert zu einem spezifischen {{domxref("NavigationHistoryEntry")}}, der durch {{domxref("NavigationHistoryEntry.key", "key")}} identifiziert wird.
- {{domxref("Navigation.updateCurrentEntry", "updateCurrentEntry()")}} {{Experimental_Inline}}
  - : Aktualisiert den Zustand der {{domxref("Navigation.currentEntry","currentEntry")}}; wird verwendet
    in Fällen, in denen die Zustandsänderung unabhängig von einer Navigation oder einem Neuladen erfolgt.

## Ereignisse

- {{domxref("Navigation/currententrychange_event", "currententrychange")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich die {{domxref("Navigation.currentEntry")}} geändert hat.
- {{domxref("Navigation/navigate_event", "navigate")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, damit Sie diese nach Bedarf abfangen können.
- {{domxref("Navigation/navigateerror_event", "navigateerror")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Navigation fehlschlägt.
- {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} {{Experimental_Inline}}
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

### Zu einem spezifischen Historieneintrag navigieren

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Navigation und Aktualisierung des Zustands

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

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
