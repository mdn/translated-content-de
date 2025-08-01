---
title: Arbeiten mit der History API
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: d8ecbd3de36a098b1f83f935e581993e9600a916
---

{{DefaultAPISidebar("History API")}}

Die History API ermöglicht es einer Website, mit der Sitzungsverlaufshistorie des Browsers zu interagieren: das ist die Liste der Seiten, die der Benutzer in einem bestimmten Fenster besucht hat. Wenn der Benutzer neue Seiten besucht, zum Beispiel durch Klicken auf Links, werden diese neuen Seiten der Sitzungshistorie hinzugefügt. Der Benutzer kann sich auch mit den "Zurück"- und "Vorwärts"-Schaltflächen des Browsers vorwärts und rückwärts durch die Historie bewegen.

Das wichtigste Interface, das in der History API definiert ist, ist das [`History`](/de/docs/Web/API/History)-Interface. Dieses definiert zwei ziemlich unterschiedliche Sets von Methoden:

1. Methoden, um zu einer Seite in der Sitzungshistorie zu navigieren:
   - [`History.back()`](/de/docs/Web/API/History/back)
   - [`History.forward()`](/de/docs/Web/API/History/forward)
   - [`History.go()`](/de/docs/Web/API/History/go)

2. Methoden, um die Sitzungshistorie zu modifizieren:
   - [`History.pushState()`](/de/docs/Web/API/History/pushState)
   - [`History.replaceState()`](/de/docs/Web/API/History/replaceState)

In diesem Leitfaden werden wir nur das zweite Set von Methoden behandeln.

Die `pushState()`-Methode fügt der Sitzungshistorie einen neuen Eintrag hinzu, während die `replaceState()`-Methode den Sitzungshistorieneintrag für die aktuelle Seite aktualisiert. Beide Methoden nehmen ein `state`-Parameter entgegen, welches ein beliebiges {{Glossary("Serializable_object", "serialisierbares Objekt")}} enthalten kann. Wenn der Browser zu diesem Historieneintrag navigiert, feuert der Browser ein [`popstate`](/de/docs/Web/API/Window/popstate_event)-Event ab, das das Zustandsobjekt enthält, das mit diesem Eintrag verknüpft ist.

Der Hauptzweck dieser APIs ist die Unterstützung von Websites wie {{Glossary("SPA", "Single-Page-Anwendungen")}}, die JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden, um die Seite mit neuem Inhalt zu aktualisieren, anstatt eine vollständig neue Seite zu laden.

## Single-Page-Anwendungen und Sitzungshistorie

Traditionell werden Websites als Sammlung von Seiten implementiert. Wenn Benutzer zu verschiedenen Teilen der Website navigieren, indem sie auf Links klicken, lädt der Browser jedes Mal eine komplett neue Seite.

Während dies für viele Websites großartig ist, kann es einige Nachteile haben:

- Es kann ineffizient sein, jedes Mal eine vollständige Seite zu laden, wenn nur ein Teil der Seite aktualisiert werden muss.
- Es ist schwer, den Anwendungszustand beim Navigieren über verschiedene Seiten hinweg zu erhalten.

Aus diesen Gründen ist ein beliebtes Muster für Web-Apps die {{Glossary("SPA", "Single-Page-Anwendung")}} (SPA). Wenn ein Benutzer auf einen Link klickt, führt die SPA die folgenden Schritte aus:

1. Verhindert das Standardverhalten des Ladens einer neuen Seite.
2. Holt neue Inhalte zum Anzeigen.
3. Aktualisiert die Seite mit den neuen Inhalten.

Zum Beispiel:

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    // Prevent a new page from loading
    event.preventDefault();
    try {
      // Fetch new content
      const response = await fetch(`creatures/${creature}.json`);
      const result = await response.json();
      // Update the page with the new content
      displayContent(result);
    } catch (err) {
      console.error(err);
    }
  }
});
```

In diesem Click-Handler, falls der Link ein Datenattribut `"data-creature"` enthält, verwenden wir den Wert dieses Attributs, um eine JSON-Datei abzurufen, die den neuen Inhalt für die Seite enthält.

Die JSON-Datei könnte folgendermaßen aussehen:

```json
{
  "description": "Bald eagles are not actually bald.",
  "image": {
    "src": "images/eagle.jpg",
    "alt": "A bald eagle"
  },
  "name": "Eagle"
}
```

Unsere `displayContent()`-Funktion aktualisiert die Seite mit dem JSON:

```js
// Update the page with the new content
function displayContent(content) {
  document.title = `Creatures: ${content.name}`;

  const description = document.querySelector("#description");
  description.textContent = content.description;

  const photo = document.querySelector("#photo");
  photo.setAttribute("src", content.image.src);
  photo.setAttribute("alt", content.image.alt);
}
```

Das Problem ist, dass es das erwartete Verhalten der "Zurück"- und "Vorwärts"-Schaltflächen des Browsers bricht.

Aus Sicht des Benutzers hat er auf einen Link geklickt und die Seite wurde aktualisiert, sodass es wie eine neue Seite aussieht. Wenn er dann die "Zurück"-Schaltfläche des Browsers drückt, erwartet er, zum Zustand vor dem Klick auf den Link zurückzukehren.

Aber aus Sicht des Browsers hat der letzte Link keine neue Seite geladen, sodass "Zurück" den Browser zur Seite bringt, die geladen wurde, bevor der Benutzer die SPA geöffnet hat.

Dies ist im Wesentlichen das Problem, das `pushState()`, `replaceState()` und das `popstate`-Event lösen. Sie ermöglichen es uns, Historieneinträge zu synthetisieren und benachrichtigt zu werden, wenn sich der aktuelle Sitzungshistorieneintrag zu einem dieser Einträge ändert (zum Beispiel, weil der Benutzer die "Zurück"- oder "Vorwärts"-Schaltflächen gedrückt hat).

## Verwendung von `pushState()`

Wir können dem Click-Handler einen Historieneintrag wie folgt hinzufügen:

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    event.preventDefault();
    try {
      const response = await fetch(`creatures/${creature}.json`);
      const result = await response.json();
      displayContent(result);
      // Add a new entry to the history.
      // This simulates loading a new page.
      history.pushState(result, "", creature);
    } catch (err) {
      console.error(err);
    }
  }
});
```

Hier rufen wir `pushState()` mit drei Argumenten auf:

- `result`: Dies ist der Inhalt, den wir gerade abgerufen haben. Er wird mit dem Historieneintrag gespeichert und später als [`state`](/de/docs/Web/API/PopStateEvent/state)-Eigenschaft des Arguments enthalten sein, das an den `popstate`-Event-Handler übergeben wird.
- `""`: Dies ist für die Rückwärtskompatibilität mit älteren Websites erforderlich und sollte immer ein leerer String sein.
- `creature`: Dies wird als URL für den Eintrag verwendet. Es wird in der URL-Leiste des Browsers angezeigt und als Wert des {{httpheader("Referer")}}-Headers in allen HTTP-Anfragen verwendet, die die Seite stellt. Beachten Sie, dass dies {{Glossary("Same-origin_policy", "gleich-origin")}} mit der Seite sein muss.

## Verwendung des `popstate`-Events

Angenommen, der Benutzer führt die folgenden Schritte aus:

1. Klicken Sie auf einen Link in unserer SPA, sodass wir die Seite aktualisieren und mit `pushState()` einen Historieneintrag A hinzufügen.
2. Klicken Sie auf einen weiteren Link in unserer SPA, sodass wir die Seite aktualisieren und mit `pushState()` einen Historieneintrag B hinzufügen.
3. Drücken Sie die "Zurück"-Schaltfläche.

Jetzt ist der neue aktuelle Historieneintrag A, sodass der Browser das `popstate`-Event auslöst und das Argument des Event-Handlers das JSON enthält, das wir an `pushState()` übergeben haben, als wir die Navigation zu A gehandhabt haben. Dies bedeutet, dass wir den korrekten Inhalt mit einem Event-Handler wie diesem wiederherstellen können:

```js
// Handle forward/back buttons
window.addEventListener("popstate", (event) => {
  // If a state has been provided, we have a "simulated" page
  // and we update the current page.
  if (event.state) {
    // Simulate the loading of the previous page
    displayContent(event.state);
  }
});
```

## Verwendung von `replaceState()`

Es gibt noch ein weiteres Stück, das wir hinzufügen müssen. Wenn der Benutzer die SPA lädt, fügt der Browser einen Historieneintrag hinzu. Da dies ein tatsächlicher Seitenaufruf war, hat der Eintrag keinen zugehörigen Zustand. Angenommen, der Benutzer macht Folgendes:

1. Lädt die SPA, sodass der Browser einen Historieneintrag hinzufügt.
2. Klicken Sie auf einen Link innerhalb der SPA, sodass der Click-Handler die Seite aktualisiert und einen Historieneintrag mit `pushState()` hinzufügt.
3. Drücken Sie die "Zurück"-Schaltfläche.

Jetzt möchten wir zum Anfangszustand der SPA zurückkehren, aber da dies eine Navigation im gleichen Dokument ist, wird die Seite nicht neu geladen, und da der Historieneintrag für die Anfangsseite keinen Zustand hat, können wir `popstate` nicht verwenden, um ihn wiederherzustellen.

Die Lösung besteht darin, `replaceState()` zu verwenden, um das Zustandsobjekt für die anfängliche Seite festzulegen. Zum Beispiel:

```js
// Create state on page load and replace the current history with it
const image = document.querySelector("#photo");
const initialState = {
  description: document.querySelector("#description").textContent,
  image: {
    src: image.getAttribute("src"),
    alt: image.getAttribute("alt"),
  },
  name: "Home",
};
history.replaceState(initialState, "", document.location.href);
```

Beim Laden der Seite sammeln wir alle Teile der Seite, die wir wiederherstellen müssen, wenn der Benutzer zum Ausgangspunkt der SPA zurückkehrt. Dies hat die gleiche Struktur wie das JSON, das wir abrufen, wenn wir andere Navigationen handhaben. Wir übergeben dieses `initialState`-Objekt an `replaceState()`, das effektiv das Zustandsobjekt zum aktuellen Historieneintrag hinzufügt.

Wenn der Benutzer zu unserem Ausgangspunkt zurückkehrt, enthält das `popstate`-Event diesen Anfangszustand, und wir können unsere `displayContent()`-Funktion verwenden, um die Seite zu aktualisieren.

## Vollständiges Beispiel der History API

Dieses vollständige Beispiel finden Sie unter <https://github.com/mdn/dom-examples/tree/main/history-api>, und die Live-Demo finden Sie unter <https://mdn.github.io/dom-examples/history-api/>.

## Siehe auch

- [History API](/de/docs/Web/API/History_API)
- [`history`](/de/docs/Web/API/Window/history) globales Objekt
