---
title: Arbeiten mit der History API
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("History API")}}

Die History API ermöglicht es einer Website, mit der Sitzungshistorie des Browsers zu interagieren: also der Liste der Seiten, die ein Benutzer in einem bestimmten Fenster besucht hat. Wenn der Benutzer neue Seiten besucht, zum Beispiel durch Klicken auf Links, werden diese neuen Seiten zur Sitzungshistorie hinzugefügt. Der Benutzer kann auch mittels der "Zurück"- und "Vorwärts"-Buttons des Browsers durch die Historie navigieren.

Das Hauptinterface, das in der History API definiert ist, ist das [`History`](/de/docs/Web/API/History) Interface. Dieses definiert zwei ziemlich unterschiedliche Methodensätze:

1. Methoden, um zu einer Seite in der Sitzungshistorie zu navigieren:

   - [`History.back()`](/de/docs/Web/API/History/back)
   - [`History.forward()`](/de/docs/Web/API/History/forward)
   - [`History.go()`](/de/docs/Web/API/History/go)

2. Methoden, um die Sitzungshistorie zu ändern:
   - [`History.pushState()`](/de/docs/Web/API/History/pushState)
   - [`History.replaceState()`](/de/docs/Web/API/History/replaceState)

In diesem Leitfaden kümmern wir uns nur um den zweiten Satz von Methoden, da diese ein komplexeres Verhalten aufweisen.

Die `pushState()`-Methode fügt einen neuen Eintrag zur Sitzungshistorie hinzu, während die `replaceState()`-Methode den Sitzungshistorieneintrag für die aktuelle Seite aktualisiert. Beide Methoden nehmen einen `state`-Parameter, der ein beliebiges {{Glossary("Serializable_object", "serialisierbares Objekt")}} enthalten kann. Wenn der Browser zu diesem Historieeintrag navigiert, löst der Browser ein [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignis aus, das das mit diesem Eintrag verknüpfte Zustandsobjekt enthält.

Der Hauptzweck dieser APIs ist es, Websites wie {{Glossary("SPA", "Single-Page-Anwendungen")}} zu unterstützen, die JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden, um die Seite mit neuem Inhalt zu aktualisieren, anstatt eine ganz neue Seite zu laden.

## Single-Page-Anwendungen und Sitzungshistorie

Traditionell werden Websites als Sammlung von Seiten implementiert. Wenn Benutzer zu verschiedenen Teilen der Website navigieren, indem sie auf Links klicken, lädt der Browser jedes Mal eine ganz neue Seite.

Obwohl dies für viele Websites hervorragend ist, kann es einige Nachteile haben:

- Es kann ineffizient sein, jedes Mal eine ganze Seite zu laden, wenn nur ein Teil der Seite aktualisiert werden muss.
- Es ist schwierig, den Anwendungszustand zu erhalten, wenn man über Seiten navigiert.

Aus diesen Gründen ist ein beliebtes Muster für Web-Apps die {{Glossary("SPA", "Single-Page-Anwendung")}} (SPA), bei der die Website aus einer einzigen Seite besteht, und wenn der Benutzer Links klickt, die Seite:

1. Verhindert das Standardverhalten des Ladens einer neuen Seite
2. [Holt](/de/docs/Web/API/Window/fetch) neuen Inhalt zum Anzeigen
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

In diesem Klick-Handler, wenn der Link ein Datenattribut `"data-creature"` enthält, verwenden wir den Wert dieses Attributs, um eine JSON-Datei abzurufen, die den neuen Inhalt für die Seite enthält.

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

Unsere `displayContent()` Funktion aktualisiert die Seite mit dem JSON:

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

Das Problem ist, dass es das erwartete Verhalten der "Zurück"- und "Vorwärts"-Buttons des Browsers bricht.

Aus der Sicht des Benutzers hat er auf einen Link geklickt und die Seite wurde aktualisiert, sodass es wie eine neue Seite aussieht. Wenn er dann die "Zurück"-Taste des Browsers drückt, erwartet er, zum Zustand zurückzukehren, bevor er den Link geklickt hat.

Aber aus Sicht des Browsers hat der letzte Link keine neue Seite geladen, sodass "Zurück" den Browser zu der Seite bringt, die geladen war, bevor der Benutzer die SPA geöffnet hat.

Dies ist im Wesentlichen das Problem, welches `pushState()`, `replaceState()` und das `popstate`-Ereignis lösen. Sie ermöglichen uns, Historieeinträge zu synthetisieren und benachrichtigt zu werden, wenn sich der aktuelle Sitzungshistorieneintrag zu einem dieser Einträge ändert (zum Beispiel, weil der Benutzer die "Zurück"- oder "Vorwärts"-Buttons gedrückt hat).

## Verwendung von `pushState()`

Wir können dem Klick-Handler oben einen Historieeintrag wie folgt hinzufügen:

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

- `json`: Dies ist der Inhalt, den wir gerade abgerufen haben. Er wird mit dem Historieeintrag gespeichert und später als [`state`](/de/docs/Web/API/PopStateEvent/state) Eigenschaft des Arguments enthalten sein, das an den `popstate`-Ereignis-Handler übergeben wird.
- `""`: Dies ist für die Abwärtskompatibilität mit älteren Websites erforderlich und sollte immer ein leerer String sein.
- `creature`: Dies wird als URL für den Eintrag verwendet. Es wird in der URL-Leiste des Browsers angezeigt und als Wert des {{httpheader("Referer")}} Headers in allen HTTP-Anfragen verwendet, die die Seite macht. Beachten Sie, dass dies {{Glossary("Same-origin_policy", "same-origin")}} mit der Seite sein muss.

## Verwendung des `popstate`-Ereignis

Angenommen der Benutzer:

1. Klickt auf einen Link in unserer SPA, sodass wir die Seite aktualisieren und einen Historieeintrag A mit `pushState()` hinzufügen.
2. Klickt auf einen weiteren Link in unserer SPA, sodass wir die Seite aktualisieren und einen Historieeintrag B mit `pushState()` hinzufügen.
3. Drückt die "Zurück"-Taste.

Jetzt ist der neue aktuelle Historieeintrag A, sodass der Browser das `popstate`-Ereignis auslöst, und das Ereignis-Handler-Argument enthält das JSON, das wir an `pushState()` übergeben haben, als wir die Navigation zu A behandelt haben. Das bedeutet, dass wir den korrekten Inhalt mit einem Ereignis-Handler wie diesem wiederherstellen können:

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

Es gibt noch ein weiteres Stück, das wir hinzufügen müssen. Wenn der Benutzer die SPA lädt, fügt der Browser einen Historieeintrag hinzu. Da dies ein tatsächlicher Seitenauslastung war, hat der Eintrag keinen Zustand, der damit verbunden ist. Angenommen der Benutzer:

1. Lädt die SPA: der Browser fügt einen Historieeintrag hinzu.
2. Klickt auf einen Link innerhalb der SPA: der Klick-Handler aktualisiert die Seite und fügt einen Historieeintrag mit `pushState()` hinzu.
3. Drückt die "Zurück"-Taste.

Jetzt wollen wir zum ursprünglichen Zustand der SPA zurückkehren, aber da dies eine Navigation im selben Dokument ist, wird die Seite nicht neu geladen, und da der Historieeintrag für die ursprüngliche Seite keinen Zustand hat, können wir `popstate` nicht verwenden, um ihn wiederherzustellen.

Die Lösung hier ist, `replaceState()` zu verwenden, um das Zustandsobjekt für die anfängliche Seite zu setzen. Zum Beispiel:

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

Beim Laden der Seite sammeln wir alle Teile der Seite, die wir wiederherstellen müssen, wenn der Benutzer zum Ausgangspunkt für die SPA zurückkehrt. Dies hat die gleiche Struktur wie das JSON, das wir beim Behandeln anderer Navigationen abrufen. Wir übergeben dieses `initialState`-Objekt an `replaceState()`, das effektiv das Zustandsobjekt zum aktuellen Historieeintrag hinzufügt.

Wenn der Benutzer zu unserem Ausgangspunkt zurückkehrt, enthält das `popstate`-Ereignis diesen anfänglichen Zustand, und wir können unsere `displayContent()`-Funktion verwenden, um die Seite zu aktualisieren.

## Ein vollständiges Beispiel

Sie finden dieses vollständige Beispiel unter <https://github.com/mdn/dom-examples/tree/main/history-api>, und sehen Sie die Demo live unter <https://mdn.github.io/dom-examples/history-api/>.

## Siehe auch

- [History API](/de/docs/Web/API/History_API)
- [`history`](/de/docs/Web/API/Window/history) globales Objekt
