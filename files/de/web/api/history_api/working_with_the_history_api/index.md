---
title: Arbeiten mit der History API
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: 183135f4f07714f07965e32e90532d7888a13848
---

{{DefaultAPISidebar("History API")}}

Die History API ermöglicht es einer Website, mit dem Sitzungsverlauf des Browsers zu interagieren: also der Liste der Seiten, die der Benutzer in einem bestimmten Fenster besucht hat. Wenn der Benutzer neue Seiten besucht, zum Beispiel durch das Klicken auf Links, werden diese neuen Seiten der Sitzungshistorie hinzugefügt. Der Benutzer kann auch durch den Verlauf navigieren, indem er die "Zurück"- und "Vorwärts"-Buttons des Browsers verwendet.

Das Hauptinterface, das in der History API definiert ist, ist das [`History`](/de/docs/Web/API/History) Interface, welches zwei recht unterschiedliche Methoden-Sets definiert:

1. Methoden, um zu einer Seite im Sitzungsverlauf zu navigieren:
   - [`History.back()`](/de/docs/Web/API/History/back)
   - [`History.forward()`](/de/docs/Web/API/History/forward)
   - [`History.go()`](/de/docs/Web/API/History/go)

2. Methoden, um die Sitzungshistorie zu modifizieren:
   - [`History.pushState()`](/de/docs/Web/API/History/pushState)
   - [`History.replaceState()`](/de/docs/Web/API/History/replaceState)

In diesem Leitfaden werden wir uns nur mit dem zweiten Satz von Methoden beschäftigen.

Die `pushState()` Methode fügt einen neuen Eintrag zur Sitzungshistorie hinzu, während die `replaceState()` Methode den Sitzungshistorie-Eintrag für die aktuelle Seite aktualisiert. Beide Methoden akzeptieren einen `state`-Parameter, der ein beliebiges {{Glossary("Serializable_object", "serialisierbares Objekt")}} enthalten kann. Wenn der Browser zu diesem Historieeintrag navigiert, löst der Browser ein [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignis aus, das das mit diesem Eintrag verknüpfte Statusobjekt enthält.

Der Hauptzweck dieser APIs ist es, Websites wie {{Glossary("SPA", "Single-page applications")}} zu unterstützen, die JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden, um die Seite mit neuen Inhalten zu aktualisieren, anstatt eine komplett neue Seite zu laden.

## Single-page applications und Sitzungshistorie

Traditionell werden Websites als Sammlung von Seiten implementiert. Wenn Benutzer zu verschiedenen Teilen der Website navigieren, indem sie Links anklicken, lädt der Browser jedes Mal eine komplett neue Seite.

Während das für viele Websites großartig ist, kann es einige Nachteile haben:

- Es kann ineffizient sein, jedes Mal eine komplette Seite zu laden, wenn nur ein Teil der Seite aktualisiert werden muss.
- Es ist schwierig den Anwendungsstatus beim Navigieren über Seiten hinweg zu erhalten.

Aus diesen Gründen ist ein beliebtes Muster für Web-Apps die {{Glossary("SPA", "Single-page application")}} (SPA). Wenn ein Benutzer einen Link anklickt, führt die SPA die folgenden Schritte aus:

1. Verhindert das Standardverhalten des Ladens einer neuen Seite.
2. [Holt](/de/docs/Web/API/Window/fetch) neue Inhalte, die angezeigt werden sollen.
3. Aktualisiert die Seite mit den neuen Inhalten.

Beispielsweise:

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

Unsere `displayContent()` Funktion aktualisiert die Seite mit der JSON:

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

Aus Sicht des Benutzers hat er einen Link angeklickt und die Seite wurde aktualisiert, es sieht also aus wie eine neue Seite. Wenn er dann den "Zurück"-Button des Browsers drückt, erwartet er, zur vorherigen Ansicht zu gelangen, bevor er den Link angeklickt hat.

Aber aus Sicht des Browsers hat der letzte Link keine neue Seite geladen, daher wird "Zurück" den Browser auf die Seite bringen, die geladen wurde, bevor der Benutzer die SPA geöffnet hat.

Dies ist im Wesentlichen das Problem, das `pushState()`, `replaceState()` und das `popstate` Ereignis lösen. Sie ermöglichen es uns, Historieneinträge zu synthetisieren und benachrichtigt zu werden, wenn sich der aktuelle Sitzungshistorie-Eintrag zu einem dieser Einträge ändert (zum Beispiel, weil der Benutzer die "Zurück"- oder "Vorwärts"-Buttons gedrückt hat).

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

- `json`: Dies sind die Inhalte, die wir gerade abgerufen haben. Es wird mit dem Historieeintrag gespeichert und später als [`state`](/de/docs/Web/API/PopStateEvent/state) Eigenschaft des Arguments im `popstate` Ereignishandler enthalten sein.
- `""`: Dies wird für die Abwärtskompatibilität mit älteren Websites benötigt und sollte immer ein leerer String sein.
- `creature`: Dies wird als URL für den Eintrag verwendet. Sie wird in der Adressleiste des Browsers angezeigt und als Wert des {{httpheader("Referer")}} Headers in HTTP-Anfragen verwendet, die die Seite stellt. Beachten Sie, dass dies {{Glossary("Same-origin_policy", "same-origin")}} mit der Seite sein muss.

## Verwendung des `popstate` Ereignisses

Angenommen, der Benutzer führt die folgenden Schritte aus:

1. Klicken Sie auf einen Link in unserer SPA, so dass wir die Seite aktualisieren und mit `pushState()` einen Historieeintrag A hinzufügen.
2. Klicken Sie auf einen weiteren Link in unserer SPA, so dass wir die Seite aktualisieren und mit `pushState()` einen Historieeintrag B hinzufügen.
3. Drücken Sie den "Zurück"-Button.

Jetzt ist der neue aktuelle Historieeintrag A, sodass der Browser das `popstate` Ereignis auslöst und das Ereignis-Handler-Argument das JSON enthält, das wir an `pushState()` übergeben haben, als wir die Navigation zu A behandelt haben. Dies bedeutet, dass wir den korrekten Inhalt mit einem Ereignis-Handler wie diesem wiederherstellen können:

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

Es gibt noch ein weiteres Element, das wir hinzufügen müssen. Wenn der Benutzer die SPA lädt, fügt der Browser einen Historieeintrag hinzu. Da dies ein tatsächlicher Seitenaufruf war, hat der Eintrag keinen assoziierten Zustand. Angenommen, der Benutzer führt die folgenden Schritte aus:

1. Laden Sie die SPA, sodass der Browser einen Historieeintrag hinzufügt.
2. Klicken Sie auf einen Link innerhalb der SPA, sodass der Klick-Handler die Seite aktualisiert und mit `pushState()` einen Historieeintrag hinzufügt.
3. Drücken Sie den "Zurück"-Button.

Jetzt möchten wir zum ursprünglichen Zustand der SPA zurückkehren, aber da dies eine Navigation im selben Dokument ist, wird die Seite nicht neu geladen und da der Historieeintrag für die ursprüngliche Seite keinen Zustand hat, können wir `popstate` nicht verwenden, um ihn wiederherzustellen.

Die Lösung hier ist `replaceState()` zu verwenden, um das Zustand-Objekt für die ursprüngliche Seite zu setzen. Zum Beispiel:

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

Beim Laden der Seite sammeln wir alle Teile der Seite, die wir wiederherstellen müssen, wenn der Benutzer zum Ausgangspunkt der SPA zurückkehrt. Dies hat die gleiche Struktur wie das JSON, das wir beim Umgang mit anderen Navigationen abrufen. Wir übergeben dieses `initialState`-Objekt an `replaceState()`, was effektiv das Zustand-Objekt dem aktuellen Historieeintrag hinzufügt.

Wenn der Benutzer zu unserem Ausgangspunkt zurückkehrt, enthält das `popstate` Ereignis diesen initialen Zustand und wir können unsere `displayContent()` Funktion verwenden, um die Seite zu aktualisieren.

## Komplettes Beispiel der History API

Sie finden dieses vollständige Beispiel unter <https://github.com/mdn/dom-examples/tree/main/history-api> und können die Demo live unter <https://mdn.github.io/dom-examples/history-api/> sehen.

## Siehe auch

- [History API](/de/docs/Web/API/History_API)
- [`history`](/de/docs/Web/API/Window/history) globales Objekt
