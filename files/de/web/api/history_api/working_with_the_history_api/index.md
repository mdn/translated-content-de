---
title: Arbeiten mit der History API
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{DefaultAPISidebar("History API")}}

Die History API ermöglicht es einer Website, mit der Sitzungshistorie des Browsers zu interagieren, also der Liste der Seiten, die der Benutzer in einem bestimmten Fenster besucht hat. Wenn der Benutzer neue Seiten besucht, z. B. durch Klicken auf Links, werden diese neuen Seiten zur Sitzungshistorie hinzugefügt. Der Benutzer kann auch mit den Schaltflächen „Zurück“ und „Vorwärts“ des Browsers durch die Historie navigieren.

Die wichtigste Schnittstelle, die in der History API definiert ist, ist die [`History`](/de/docs/Web/API/History)-Schnittstelle, und diese definiert zwei recht unterschiedliche Methodensätze:

1. Methoden zur Navigation zu einer Seite in der Sitzungshistorie:

   - [`History.back()`](/de/docs/Web/API/History/back)
   - [`History.forward()`](/de/docs/Web/API/History/forward)
   - [`History.go()`](/de/docs/Web/API/History/go)

2. Methoden zur Änderung der Sitzungshistorie:

   - [`History.pushState()`](/de/docs/Web/API/History/pushState)
   - [`History.replaceState()`](/de/docs/Web/API/History/replaceState)

In diesem Leitfaden werden wir uns nur mit dem zweiten Methodensatz befassen, da diese ein komplexeres Verhalten aufweisen.

Die `pushState()`-Methode fügt der Sitzungshistorie einen neuen Eintrag hinzu, während die `replaceState()`-Methode den Sitzungshistorieeintrag für die aktuelle Seite aktualisiert. Beide Methoden nehmen einen `state`-Parameter an, der jedes {{Glossary("Serializable_object", "serialisierbare Objekt")}} enthalten kann. Wenn der Browser zu diesem Historieneintrag navigiert, löst der Browser ein [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis aus, das das State-Objekt enthält, das mit diesem Eintrag verknüpft ist.

Der Hauptzweck dieser APIs ist die Unterstützung von Websites wie {{Glossary("SPA", "Single-page applications")}}, die JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden, um die Seite mit neuem Inhalt zu aktualisieren, anstatt eine ganz neue Seite zu laden.

## Single-Page-Anwendungen und Sitzungshistorie

Traditionell werden Websites als Sammlung von Seiten implementiert. Wenn Benutzer innerhalb der Website navigieren, indem sie auf Links klicken, lädt der Browser jedes Mal eine ganz neue Seite.

Obwohl dies für viele Seiten großartig ist, kann es einige Nachteile haben:

- Es kann ineffizient sein, jedes Mal eine ganze Seite zu laden, wenn nur ein Teil der Seite aktualisiert werden muss.
- Es ist schwierig, den Anwendungszustand beim Navigieren über Seiten hinweg zu erhalten.

Aus diesen Gründen ist ein beliebtes Muster für Web-Apps die {{Glossary("SPA", "Single-Page-Anwendung")}} (SPA), bei der die Site aus einer einzigen Seite besteht, und wenn der Benutzer auf Links klickt, die Seite:

1. Verhindert das Standardverhalten des Ladens einer neuen Seite
2. [Holt](/de/docs/Web/API/Window/fetch) neuen Inhalt zur Anzeige
3. Aktualisiert die Seite mit dem neuen Inhalt

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
      const json = await response.json();
      // Update the page with the new content
      displayContent(json);
    } catch (err) {
      console.error(err);
    }
  }
});
```

In diesem Klick-Handler verwenden wir den Wert eines `data`-Attributs `"data-creature"`, um eine JSON-Datei abzurufen, die den neuen Inhalt für die Seite enthält.

Die JSON-Datei könnte so aussehen:

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

Das Problem ist, dass es das erwartete Verhalten der Schaltflächen „Zurück“ und „Vorwärts“ des Browsers stört.

Aus Benutzersicht haben sie auf einen Link geklickt und die Seite hat sich aktualisiert, so dass es wie eine neue Seite aussieht. Wenn sie dann die „Zurück“-Schaltfläche des Browsers drücken, erwarten sie, zum Zustand vor dem Klicken auf den Link zurückzukehren.

Aber für den Browser hat der letzte Link keine neue Seite geladen, sodass „Zurück“ den Browser zur Seite zurückführt, die geladen wurde, bevor der Benutzer die SPA geöffnet hat.

Dies ist im Wesentlichen das Problem, das `pushState()`, `replaceState()` und das `popstate`-Ereignis lösen. Sie ermöglichen es uns, Historieneinträge zu synthetisieren und benachrichtigt zu werden, wenn der aktuelle Sitzungshistorieeintrag zu einem dieser Einträge wechselt (zum Beispiel, weil der Benutzer die Schaltflächen „Zurück“ oder „Vorwärts“ gedrückt hat).

## Verwendung von `pushState()`

Wir können dem oben genannten Klick-Handler einen Historieneintrag hinzufügen, wie folgt:

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    event.preventDefault();
    try {
      const response = await fetch(`creatures/${creature}.json`);
      const json = await response.json();
      displayContent(json);
      // Add a new entry to the history.
      // This simulates loading a new page.
      history.pushState(json, "", creature);
    } catch (err) {
      console.error(err);
    }
  }
});
```

Hier rufen wir `pushState()` mit drei Argumenten auf:

- `json`: Dies ist der Inhalt, den wir gerade abgerufen haben. Es wird zusammen mit dem Historieneintrag gespeichert und später als [`state`](/de/docs/Web/API/PopStateEvent/state)-Eigenschaft des Arguments an den `popstate`-Ereignishandler übergeben.
- `""`: Dies wird für die Abwärtskompatibilität mit älteren Websites benötigt und sollte immer ein leerer String sein.
- `creature`: Dies wird als URL für den Eintrag verwendet. Es wird in der URL-Leiste des Browsers angezeigt und als Wert des {{httpheader("Referer")}}-Headers in allen HTTP-Anfragen verwendet, die die Seite macht. Beachten Sie, dass dies mit der Seite {{Glossary("Same-origin_policy", "same-origin")}} sein muss.

## Verwendung des `popstate`-Ereignisses

Angenommen, der Benutzer:

1. Klickt auf einen Link in unserer SPA, wodurch wir die Seite aktualisieren und einen Historieneintrag A mit `pushState()` hinzufügen.
2. Klickt auf einen weiteren Link in unserer SPA, wodurch wir die Seite aktualisieren und einen Historieneintrag B mit `pushState()` hinzufügen.
3. Drückt die „Zurück“-Schaltfläche.

Nun ist der neue aktuelle Historieneintrag A, sodass der Browser das `popstate`-Ereignis auslöst, und das Ereignishandler-Argument enthält das JSON, das wir beim Navigieren zu A an `pushState()` übergeben haben. Das bedeutet, wir können den richtigen Inhalt mit einem Ereignishandler wie diesem wiederherstellen:

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

Es gibt noch ein weiteres Element, das wir hinzufügen müssen. Wenn der Benutzer die SPA lädt, fügt der Browser einen Historieneintrag hinzu. Da dies ein tatsächlicher Seitenaufruf war, hat der Eintrag keinen zugeordneten Zustand. Angenommen, der Benutzer:

1. Lädt die SPA: Der Browser fügt einen Historieneintrag hinzu
2. Klickt auf einen Link innerhalb der SPA: Der Klick-Handler aktualisiert die Seite und fügt einen Historieneintrag mit `pushState()` hinzu.
3. Drückt die „Zurück“-Schaltfläche.

Nun möchten wir zum Anfangszustand der SPA zurückkehren, aber da dies eine Navigation im selben Dokument ist, wird die Seite nicht neu geladen, und da der Historieneintrag für die Anfangsseite keinen Zustand hat, können wir `popstate` nicht verwenden, um ihn wiederherzustellen.

Die Lösung besteht darin, `replaceState()` zu verwenden, um das Statusobjekt für die Startseite festzulegen. Zum Beispiel:

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

Beim Laden der Seite sammeln wir alle Teile der Seite, die wir wiederherstellen müssen, wenn der Benutzer zum Ausgangspunkt der SPA zurückkehrt. Dies hat die gleiche Struktur wie das JSON, das wir bei der Behandlung anderer Navigationen abrufen. Wir übergeben dieses `initialState`-Objekt an `replaceState()`, was effektiv das Statusobjekt zum aktuellen Historieneintrag hinzufügt.

Wenn der Benutzer zu unserem Ausgangspunkt zurückkehrt, enthält das `popstate`-Ereignis diesen Anfangszustand, und wir können unsere `displayContent()`-Funktion verwenden, um die Seite zu aktualisieren.

## Ein vollständiges Beispiel

Sie finden dieses vollständige Beispiel unter <https://github.com/mdn/dom-examples/tree/main/history-api> und sehen die Demo live unter <https://mdn.github.io/dom-examples/history-api/>.

## Siehe auch

- [History API](/de/docs/Web/API/History_API)
- [`history`](/de/docs/Web/API/Window/history) globales Objekt
