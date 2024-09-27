---
title: Arbeiten mit der History API
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{DefaultAPISidebar("History API")}}

Die History API ermöglicht es einer Website, mit der Sitzungshistorie des Browsers zu interagieren: also mit der Liste der Seiten, die der Benutzer in einem bestimmten Fenster besucht hat. Wenn der Benutzer neue Seiten besucht, zum Beispiel durch Anklicken von Links, werden diese neuen Seiten zur Sitzungshistorie hinzugefügt. Der Benutzer kann auch mit den "Zurück"- und "Vorwärts"-Schaltflächen des Browsers durch die Historie navigieren.

Das Hauptinterface, das in der History API definiert ist, ist das [`History`](/de/docs/Web/API/History) Interface, und dieses definiert zwei recht unterschiedliche Gruppen von Methoden:

1. Methoden, um zu einer Seite in der Sitzungshistorie zu navigieren:

   - [`History.back()`](/de/docs/Web/API/History/back)
   - [`History.forward()`](/de/docs/Web/API/History/forward)
   - [`History.go()`](/de/docs/Web/API/History/go)

2. Methoden, um die Sitzungshistorie zu ändern:

   - [`History.pushState()`](/de/docs/Web/API/History/pushState)
   - [`History.replaceState()`](/de/docs/Web/API/History/replaceState)

In diesem Leitfaden beschäftigen wir uns nur mit der zweiten Gruppe von Methoden, da diese ein komplexeres Verhalten aufweisen.

Die Methode `pushState()` fügt der Sitzungshistorie einen neuen Eintrag hinzu, während die Methode `replaceState()` den Sitzungshistorieneintrag für die aktuelle Seite aktualisiert. Beide Methoden nehmen einen Parameter `state`, der ein beliebiges [serialisierbares Objekt](/de/docs/Glossary/Serializable_object) enthalten kann. Wenn der Browser zu diesem Historieneintrag navigiert, löst der Browser ein [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignis aus, das das mit diesem Eintrag verbundene Zustandsobjekt enthält.

Der Hauptzweck dieser APIs ist die Unterstützung von Websites wie [Single-Page-Anwendungen](/de/docs/Glossary/SPA), die JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden, um die Seite mit neuem Inhalt zu aktualisieren, anstatt eine komplett neue Seite zu laden.

## Einseitige Anwendungen und Sitzungshistorie

Traditionell werden Websites als Sammlung von Seiten implementiert. Wenn Benutzer zu verschiedenen Teilen der Website navigieren, indem sie Links anklicken, lädt der Browser jedes Mal eine komplett neue Seite.

Obwohl dies für viele Seiten gut funktioniert, kann es einige Nachteile haben:

- Es kann ineffizient sein, jedes Mal eine komplette Seite zu laden, wenn nur ein Teil der Seite aktualisiert werden muss.
- Es ist schwierig, den Anwendungszustand beim Navigieren über Seiten hinweg zu erhalten.

Aus diesen Gründen ist ein beliebtes Muster für Web-Apps die [Einseitige Anwendung](/de/docs/Glossary/SPA) (SPA), bei der die Website aus einer einzigen Seite besteht und wenn der Benutzer Links anklickt, die Seite:

1. Verhindert das Standardverhalten, eine neue Seite zu laden
2. [Holt](/de/docs/Web/API/Window/fetch) neue Inhalte zum Anzeigen ab
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

In diesem Klick-Handler, wenn der Link ein Datenattribut `"data-creature"` enthält, verwenden wir den Wert dieses Attributs, um eine JSON-Datei zu holen, die den neuen Inhalt für die Seite enthält.

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

Unsere Funktion `displayContent()` aktualisiert die Seite mit dem JSON:

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

Das Problem ist, dass es das erwartete Verhalten der "Zurück"- und "Vorwärts"-Schaltflächen des Browsers unterbricht.

Aus Sicht des Benutzers haben sie auf einen Link geklickt und die Seite wurde aktualisiert, sodass es wie eine neue Seite aussieht. Wenn sie dann die "Zurück"-Schaltfläche des Browsers drücken, erwarten sie, zum Zustand vor dem Klick auf den Link zu gelangen.

Aber aus Sicht des Browsers hat der letzte Link keine neue Seite geladen, daher wird "Zurück" den Browser zu der Seite führen, die geladen wurde, bevor der Benutzer die SPA geöffnet hat.

Dies ist im Wesentlichen das Problem, das `pushState()`, `replaceState()` und das `popstate`-Ereignis lösen. Sie ermöglichen es uns, Historieneinträge zu synthetisieren und benachrichtigt zu werden, wenn der aktuelle Sitzungshistorieneintrag zu einem dieser Einträge wechselt (zum Beispiel, weil der Benutzer die "Zurück"- oder "Vorwärts"-Schaltflächen gedrückt hat).

## Verwendung von `pushState()`

Wir können dem Klick-Handler oben einen Historieneintrag hinzufügen wie folgt:

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

- `json`: dies ist der Inhalt, den wir gerade geholt haben. Er wird mit dem Historieneintrag gespeichert und später als die [`state`](/de/docs/Web/API/PopStateEvent/state) Eigenschaft des Argumentes im `popstate`-Ereignis-Handler enthalten sein.
- `""`: dies ist aus Kompatibilitätsgründen mit älteren Seiten notwendig und sollte immer ein leerer String sein
- `creature`: dies wird als die URL für den Eintrag verwendet. Es wird in der URL-Leiste des Browsers angezeigt und als Wert des {{httpheader("Referer")}}-Headers in allen HTTP-Anfragen verwendet, die die Seite macht. Beachten Sie, dass dies [gleich-origin](/de/docs/Glossary/Same-origin_policy) mit der Seite sein muss.

## Verwendung des `popstate`-Ereignisses

Angenommen, der Benutzer:

1. Klickt auf einen Link in unserer SPA, sodass wir die Seite aktualisieren und einen Historieneintrag A mit `pushState()` hinzufügen
2. Klickt auf einen weiteren Link in unserer SPA, sodass wir die Seite aktualisieren und einen Historieneintrag B mit `pushState()` hinzufügen
3. Drückt die "Zurück"-Schaltfläche

Nun ist der neue aktuelle Historieneintrag A, sodass der Browser das `popstate`-Ereignis auslöst, und das Ereignis-Handler-Argument enthält das JSON, das wir an `pushState()` übergeben haben, als wir die Navigation zu A bearbeiteten. Das bedeutet, dass wir den korrekten Inhalt mit einem Ereignis-Handler wie diesem wiederherstellen können:

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

Es gibt noch einen Punkt, den wir hinzufügen müssen. Wenn der Benutzer die SPA lädt, fügt der Browser einen Historieneintrag hinzu. Da dies ein tatsächlicher Seitenaufruf war, hat der Eintrag keinen zugeordneten Zustand. Angenommen, der Benutzer:

1. Lädt die SPA: der Browser fügt einen Historieneintrag hinzu
2. Klickt auf einen Link in der SPA: der Klick-Handler aktualisiert die Seite und fügt mit `pushState()` einen Historieneintrag hinzu
3. Drückt die "Zurück"-Schaltfläche

Nun wollen wir zum Anfangszustand der SPA zurückkehren, aber da dies eine Navigation im gleichen Dokument ist, wird die Seite nicht neu geladen und da der Historieneintrag für die anfängliche Seite keinen Zustand hat, können wir `popstate` nicht verwenden, um ihn wiederherzustellen.

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

Beim Laden der Seite sammeln wir alle Teile der Seite, die wir wiederherstellen müssen, wenn der Benutzer zum Startpunkt der SPA zurückkehrt. Dies hat die gleiche Struktur wie das JSON, das wir beim Bearbeiten anderer Navigationen holen. Wir übergeben dieses `initialState`-Objekt an `replaceState()`, was effektiv das Zustandsobjekt zum aktuellen Historieneintrag hinzufügt.

Wenn der Benutzer zu unserem Startpunkt zurückkehrt, enthält das `popstate`-Ereignis diesen anfänglichen Zustand und wir können unsere `displayContent()`-Funktion verwenden, um die Seite zu aktualisieren.

## Ein vollständiges Beispiel

Sie finden dieses vollständige Beispiel unter <https://github.com/mdn/dom-examples/tree/main/history-api> und sehen Sie sich die Demo live unter <https://mdn.github.io/dom-examples/history-api/> an.

## Siehe auch

- [History API](/de/docs/Web/API/History_API)
- [`history`](/de/docs/Web/API/Window/history) globales Objekt
