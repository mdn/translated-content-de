---
title: Arbeiten mit der History API
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{DefaultAPISidebar("History API")}}

Die History API ermöglicht es einer Website, mit der Sitzungsverlaufshistorie des Browsers zu interagieren: Das ist die Liste der Seiten, die der Benutzer in einem bestimmten Fenster besucht hat. Wenn der Benutzer neue Seiten besucht, zum Beispiel durch Klicken auf Links, werden diese neuen Seiten zur Sitzungsverlaufshistorie hinzugefügt. Der Benutzer kann auch mit den "Zurück" und "Vorwärts" Buttons des Browsers durch die Historie navigieren.

Die Hauptschnittstelle, die in der History API definiert ist, ist die {{domxref("History")}} Schnittstelle, und diese definiert zwei ziemlich unterschiedliche Gruppen von Methoden:

1. Methoden, um zu einer Seite im Sitzungsverlauf zu navigieren:

   - {{domxref("History.back()")}}
   - {{domxref("History.forward()")}}
   - {{domxref("History.go()")}}

2. Methoden, um den Sitzungsverlauf zu ändern:

   - {{domxref("History.pushState()")}}
   - {{domxref("History.replaceState()")}}

In diesem Leitfaden konzentrieren wir uns nur auf die zweite Gruppe von Methoden, da diese ein komplexeres Verhalten haben.

Die `pushState()` Methode fügt einen neuen Eintrag zur Sitzungsverlaufshistorie hinzu, während die `replaceState()` Methode den Sitzungsverlaufseintrag für die aktuelle Seite aktualisiert. Beide Methoden nehmen einen `state` Parameter an, der ein beliebiges {{Glossary("Serializable_object", "serialisierbares Objekt")}} enthalten kann. Wenn der Browser zu diesem Verlaufseintrag navigiert, löst der Browser ein {{domxref("Window.popstate_event", "popstate")}} Ereignis aus, das das mit diesem Eintrag verbundene Statusobjekt enthält.

Der Hauptzweck dieser APIs ist die Unterstützung von Websites wie {{Glossary("SPA", "Single-Page-Applications")}}, die JavaScript-APIs wie {{domxref("Window/fetch", "fetch()")}} verwenden, um die Seite mit neuen Inhalten zu aktualisieren, anstatt eine komplett neue Seite zu laden.

## Single-Page-Applications und Sitzungsverlauf

Traditionell werden Websites als eine Sammlung von Seiten implementiert. Wenn Benutzer durch Klicken auf Links zu verschiedenen Teilen der Seite navigieren, lädt der Browser jedes Mal eine komplett neue Seite.

Obwohl dies für viele Websites hervorragend ist, kann es einige Nachteile haben:

- Es kann ineffizient sein, jedes Mal eine ganze Seite zu laden, wenn nur ein Teil der Seite aktualisiert werden muss.
- Es ist schwierig, den Anwendungsstatus beim Navigieren über Seiten hinweg zu verwalten.

Aus diesen Gründen ist ein beliebtes Muster für Web-Apps die {{Glossary("SPA", "Single-Page-Application")}} (SPA), bei der die Seite aus einer einzigen Seite besteht, und wenn der Benutzer Links anklickt, die Seite:

1. Verhindert das Standardverhalten, eine neue Seite zu laden
2. {{domxref("Window/fetch", "Lädt", "", "nocode")}} neue Inhalte zum Anzeigen
3. Aktualisiert die Seite mit den neuen Inhalten

Zum Beispiel:

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    // Verhindert das Laden einer neuen Seite
    event.preventDefault();
    try {
      // Lädt neue Inhalte
      const response = await fetch(`creatures/${creature}.json`);
      const json = await response.json();
      // Aktualisiert die Seite mit den neuen Inhalten
      displayContent(json);
    } catch (err) {
      console.error(err);
    }
  }
});
```

In diesem Click-Handler, wenn der Link ein Datenattribut `"data-creature"` enthält, verwenden wir den Wert dieses Attributs, um eine JSON-Datei mit dem neuen Inhalt für die Seite abzurufen.

Die JSON-Datei könnte so aussehen:

```json
{
  "description": "Weißkopfseeadler sind eigentlich nicht kahl.",
  "image": {
    "src": "images/eagle.jpg",
    "alt": "Ein Weißkopfseeadler"
  },
  "name": "Adler"
}
```

Unsere `displayContent()` Funktion aktualisiert die Seite mit dem JSON:

```js
// Aktualisiert die Seite mit den neuen Inhalten
function displayContent(content) {
  document.title = `Kreaturen: ${content.name}`;

  const description = document.querySelector("#description");
  description.textContent = content.description;

  const photo = document.querySelector("#photo");
  photo.setAttribute("src", content.image.src);
  photo.setAttribute("alt", content.image.alt);
}
```

Das Problem ist, dass es das erwartete Verhalten der Zurück- und Vorwärts-Buttons des Browsers bricht.

Aus Sicht des Benutzers hat er auf einen Link geklickt und die Seite wurde aktualisiert, sodass es wie eine neue Seite aussieht. Wenn er dann den Zurück-Button des Browsers drückt, erwartet er, zum Zustand vor dem Klick auf den Link zurückzukehren.

Aber aus Sicht des Browsers hat der letzte Link keine neue Seite geladen, daher würde "Zurück" den Browser zu der Seite führen, die vor dem Öffnen der SPA geladen wurde.

Dies ist im Wesentlichen das Problem, das `pushState()`, `replaceState()` und das `popstate` Ereignis lösen. Sie ermöglichen es uns, Verlaufseinträge zu synthetisieren und benachrichtigt zu werden, wenn der aktuelle Sitzungsverlaufseintrag in einen dieser Einträge geändert wird (zum Beispiel, weil der Benutzer die Zurück- oder Vorwärts-Tasten gedrückt hat).

## Verwendung von `pushState()`

Wir können dem Klick-Handler oben wie folgt einen Verlaufseintrag hinzufügen:

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    event.preventDefault();
    try {
      const response = await fetch(`creatures/${creature}.json`);
      const json = await response.json();
      displayContent(json);
      // Fügen Sie einen neuen Eintrag in den Verlauf hinzu.
      // Dies simuliert das Laden einer neuen Seite.
      history.pushState(json, "", creature);
    } catch (err) {
      console.error(err);
    }
  }
});
```

Hier rufen wir `pushState()` mit drei Argumenten auf:

- `json`: dies ist der Inhalt, den wir gerade abgerufen haben. Er wird mit dem Verlaufseintrag gespeichert und später als die {{domxref("PopStateEvent.state", "state")}} Eigenschaft des Arguments in den `popstate` Event-Handler aufgenommen.
- `""`: dies ist zur Rückwärtskompatibilität mit alten Websites erforderlich und sollte immer ein leerer String sein.
- `creature`: dies wird als URL für den Eintrag verwendet. Es wird in der URL-Leiste des Browsers angezeigt und als Wert des {{httpheader("Referer")}} Headers in allen HTTP-Anfragen verwendet, die die Seite macht. Beachten Sie, dass dies {{Glossary("Same-origin policy", "gleicher Herkunft")}} mit der Seite sein muss.

## Verwendung des `popstate` Ereignisses

Angenommen, der Benutzer:

1. Klickt auf einen Link in unserer SPA, sodass wir die Seite aktualisieren und einen Verlaufseintrag A mit `pushState()` hinzufügen.
2. Klickt auf einen weiteren Link in unserer SPA, sodass wir die Seite aktualisieren und einen Verlaufseintrag B mit `pushState()` hinzufügen.
3. Drückt die "Zurück"-Taste.

Nun ist der neue aktuelle Verlaufseintrag A, sodass der Browser das `popstate` Ereignis auslöst, und das Argument des Ereignis-Handlers umfasst das JSON, das wir an `pushState()` übergeben haben, als wir die Navigation zu A behandelt haben. Das bedeutet, dass wir den richtigen Inhalt mit einem Event-Handler wie folgt wiederherstellen können:

```js
// Behandeln Sie Vorwärts-/Rückwärts-Tasten
window.addEventListener("popstate", (event) => {
  // Wenn ein Zustand bereitgestellt wurde, haben wir eine "simulierte" Seite
  // und wir aktualisieren die aktuelle Seite.
  if (event.state) {
    // Simulieren Sie das Laden der vorherigen Seite
    displayContent(event.state);
  }
});
```

## Verwendung von `replaceState()`

Es gibt noch ein weiteres Puzzleteil, das wir hinzufügen müssen. Wenn der Benutzer die SPA lädt, fügt der Browser einen Verlaufseintrag hinzu. Da dies ein tatsächlicher Seitenaufruf war, ist mit diesem Eintrag kein Zustand verbunden. Angenommen, der Benutzer:

1. Lädt die SPA: Der Browser fügt einen Verlaufseintrag hinzu.
2. Klickt auf einen Link in der SPA: Der Klick-Handler aktualisiert die Seite und fügt einen Verlaufseintrag mit `pushState()` hinzu.
3. Drückt die "Zurück"-Taste.

Nun möchten wir zum ursprünglichen Zustand der SPA zurückkehren, aber da dies eine Navigation im selben Dokument ist, wird die Seite nicht neu geladen, und da der Verlaufseintrag für die Anfangsseite keinen Zustand hat, können wir `popstate` nicht verwenden, um ihn wiederherzustellen.

Die Lösung hier ist, `replaceState()` zu verwenden, um das Statusobjekt für die anfängliche Seite zu setzen. Zum Beispiel:

```js
// Erstellen Sie den Zustand beim Seitenaufruf und ersetzen Sie den aktuellen Verlauf durch diesen
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

Beim Seitenaufruf sammeln wir alle Teile der Seite, die wir wiederherstellen müssen, wenn der Benutzer zum Ausgangspunkt der SPA zurückkehrt. Dies hat die gleiche Struktur wie das JSON, das wir beim Umgang mit anderen Navigationen abrufen. Wir übergeben dieses `initialState` Objekt in `replaceState()`, was effektiv das Zustandsobjekt zum aktuellen Verlaufseintrag hinzufügt.

Wenn der Benutzer zu unserem Ausgangspunkt zurückkehrt, wird das `popstate` Ereignis diesen Anfangszustand enthalten, und wir können unsere `displayContent()` Funktion verwenden, um die Seite zu aktualisieren.

## Ein vollständiges Beispiel

Dieses vollständige Beispiel finden Sie unter <https://github.com/mdn/dom-examples/tree/main/history-api> und das Demo live unter <https://mdn.github.io/dom-examples/history-api/>.

## Siehe auch

- [History API](/de/docs/Web/API/History_API)
- {{domxref("window.history", "history")}} globales Objekt
