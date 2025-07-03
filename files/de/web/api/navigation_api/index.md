---
title: Navigation API
slug: Web/API/Navigation_API
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{SeeCompatTable}}{{DefaultAPISidebar("Navigation API")}}

Die **Navigation-API** bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Verlaufseinträge einer Anwendung untersuchen. Diese ist ein Nachfolger früherer Web-Plattform-Funktionen wie der [History-API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), welche ihre Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} zugeschnitten ist.

## Konzepte und Verwendung

In SPAs bleibt die Seitenschablone während der Nutzung im Allgemeinen gleich und der Inhalt wird dynamisch neu geschrieben, wenn der Benutzer verschiedene Seiten oder Funktionen besucht. Daher wird im Browser nur eine eindeutige Seite geladen, was die erwartete Benutzererfahrung beim Vor- und Zurücknavigieren zwischen verschiedenen Orten im Verlauf unterbricht. Dieses Problem kann bis zu einem gewissen Grad über die [History-API](/de/docs/Web/API/History_API) gelöst werden, diese ist jedoch nicht für die Bedürfnisse von SPAs ausgelegt. Die Navigation-API zielt darauf ab, diese Lücke zu schließen.

Auf die API wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation)-Eigenschaft zugegriffen, die eine Referenz auf ein globales [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurückgibt. Jedes `window`-Objekt hat seine eigene entsprechende `navigation`-Instanz.

### Umgang mit Navigationen

Das `navigation`-Interface hat mehrere zugehörige Events, das bemerkenswerteste ist das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Event. Dieses wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, was bedeutet, dass Sie alle Seitennavigationen von einem zentralen Ort aus steuern können, ideal für Routing-Funktionen in SPA-Frameworks. (Dies ist nicht der Fall bei der [History-API](/de/docs/Web/API/History_API), bei der es manchmal schwierig ist, auf alle Navigationen zu reagieren.) Der `navigate`-Event-Handler erhält ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Objekt, welches detaillierte Informationen enthält, einschließlich Details zu Ziel, Typ, ob es `POST`-Formulardaten oder eine Download-Anfrage enthält und mehr.

Das `NavigationEvent`-Objekt stellt auch zwei Methoden bereit:

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) nimmt als Argument eine Callback-Handler-Funktion entgegen, die ein Promise zurückgibt. Es ermöglicht Ihnen zu steuern, was passiert, wenn die Navigation initiiert wird. Beispielsweise kann es im Fall einer SPA verwendet werden, um relevante neue Inhalte in die Benutzeroberfläche zu laden, basierend auf dem Pfad der URL, zu der navigiert wird.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) ermöglicht es Ihnen, das Scroll-Verhalten des Browsers manuell zu initiieren (z. B. zu einem Fragmentbezeichner in der URL), wenn es für Ihren Code sinnvoll ist, anstatt zu warten, bis der Browser es automatisch behandelt.

Sobald eine Navigation initiiert und Ihr `intercept()`-Handler aufgerufen wird, wird eine Instanz eines [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekts erstellt (zugänglich über [`Navigation.transition`](/de/docs/Web/API/Navigation/transition)), die verwendet werden kann, um den fortlaufenden Navigationsprozess zu verfolgen.

> [!NOTE]
> In diesem Zusammenhang bezieht sich "Übergang" auf den Übergang zwischen einem Verlaufseintrag und einem anderen. Es steht nicht im Zusammenhang mit CSS-Übergängen.

> [!NOTE]
> Sie können auch [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um die Navigation vollständig für die meisten [Navigationstypen](/de/docs/Web/API/NavigateEvent/navigationType#value) zu stoppen; die Stornierung von Durchsuchen-Navigationen ist noch nicht implementiert.

Wenn das Promise der `intercept()`-Handler-Funktion erfüllt wird, feuert das `Navigation`-Objekt das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Event, das es Ihnen ermöglicht, Bereinigungscode auszuführen, nachdem eine erfolgreiche Navigation abgeschlossen ist. Wenn es abgelehnt wird, d.h. die Navigation fehlgeschlagen ist, wird stattdessen [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) ausgelöst, das es Ihnen ermöglicht, den Fehlerfall elegant zu behandeln. Es gibt auch eine [`finished`](/de/docs/Web/API/NavigationTransition/finished)-Eigenschaft am `NavigationTransition`-Objekt, welche zur gleichen Zeit erfüllt oder abgelehnt wird, wie die zuvor genannten Events ausgelöst werden. Hierdurch wird ein weiterer Weg zur Behandlung von Erfolgs- und Fehlerfällen bereitgestellt.

> [!NOTE]
> Bevor die Navigation-API verfügbar war, hätten Sie, um etwas Ähnliches zu tun, für alle Klick-Events auf Links lauschen, `e.preventDefault()` ausführen, den passenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf ausführen müssen und dann die Seitenansicht basierend auf der neuen URL einrichten müssen. Und dies würde nicht alle Navigationen behandeln – nur benutzerinitiierte Link-Klicks.

### Programmatische Aktualisierung und Durchsuchen des Navigation-Verlaufs

Wenn der Benutzer durch Ihre Anwendung navigiert, wird für jeden neuen Ort, zu dem navigiert wird, ein Navigationsverlaufseintrag erstellt. Jeder Verlaufseintrag wird durch eine eindeutige Instanz eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekts dargestellt. Diese enthalten mehrere Eigenschaften wie den Schlüssel des Eintrags, die URL und Statusinformationen. Sie können den Eintrag abrufen, auf dem sich der Benutzer gerade befindet, indem Sie [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) verwenden, und ein Array aller vorhandenen Verlaufseinträge mit [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries). Jedes `NavigationHistoryEntry`-Objekt hat ein [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event)-Event, das ausgelöst wird, wenn der Eintrag nicht mehr Teil des Browser-Verlaufs ist. Zum Beispiel, wenn der Benutzer dreimal zurück navigiert und dann zu einem anderen Ort vorwärts navigiert, werden diese drei Verlaufseinträge gelöscht.

> [!NOTE]
> Die Navigation-API gibt nur Verlaufseinträge frei, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z. B. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder Cross-Origin-Navigationen). Dadurch wird eine genaue Liste aller vorherigen Verlaufseinträge nur für Ihre App bereitgestellt, was das Durchsuchen des Verlaufs viel weniger fragil macht als mit der älteren [History-API](/de/docs/Web/API/History_API).

Das `Navigation`-Objekt enthält alle Methoden, die Sie benötigen, um den Navigation-Verlauf zu aktualisieren und durch ihn zu durchlaufen:

- [`navigate()`](/de/docs/Web/API/Navigation/navigate) {{Experimental_Inline}}
  - : Navigiert zu einer neuen URL und erstellt einen neuen Navigationsverlaufseintrag.
- [`reload()`](/de/docs/Web/API/Navigation/reload) {{Experimental_Inline}}
  - : Lädt den aktuellen Navigationsverlaufseintrag neu.
- [`back()`](/de/docs/Web/API/Navigation/back) {{Experimental_Inline}}
  - : Navigiert zum vorherigen Navigationsverlaufseintrag, falls möglich.
- [`forward()`](/de/docs/Web/API/Navigation/forward) {{Experimental_Inline}}
  - : Navigiert zum nächsten Navigationsverlaufseintrag, falls möglich.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) {{Experimental_Inline}}
  - : Navigiert zu einem bestimmten Navigationsverlaufseintrag, der durch seinen Schlüsselwert identifiziert wird, welcher über die relevante [`NavigationHistoryEntry.key`](/de/docs/Web/API/NavigationHistoryEntry/key)-Eigenschaft des Eintrags abgerufen wird.

Jede der oben genannten Methoden gibt ein Objekt zurück, das zwei Promises enthält – `{ committed, finished }`. Dies ermöglicht es der aufrufenden Funktion, mit der Ausführung weiterer Aktionen zu warten, bis:

- `committed` erfüllt ist, was bedeutet, dass sich die sichtbare URL geändert hat und ein neues [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished` erfüllt ist, was bedeutet, dass alle Promises, die von Ihrem `intercept()`-Handler zurückgegeben werden, erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Promise, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Event ausgelöst wird, wie zuvor erwähnt.
- eines der oben genannten Promises abgelehnt wird, was bedeutet, dass die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Zustand

Die Navigation-API ermöglicht es Ihnen, Zustand auf jedem Verlaufseintrag zu speichern. Dies sind vom Entwickler definierte Informationen – es kann alles sein, was Sie möchten. Beispielsweise möchten Sie möglicherweise eine `visitCount`-Eigenschaft speichern, die die Anzahl der Besuche einer Ansicht aufzeichnet, oder ein Objekt mit mehreren Eigenschaften im Zusammenhang mit dem UI-Zustand, damit dieser Zustand wiederhergestellt werden kann, wenn ein Benutzer zu dieser Ansicht zurückkehrt.

Um den Zustand eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) abzurufen, rufen Sie seine [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState)-Methode auf. Der Zustand ist anfänglich `undefined`, aber wenn Zustandsinformationen auf dem Eintrag gesetzt sind, wird er die zuvor festgelegten Zustandsinformationen zurückgeben.

Das Festlegen des Zustands ist etwas nuancierter. Sie können nicht den Zustandswert abrufen und dann direkt aktualisieren – die im Eintrag gespeicherte Kopie wird sich nicht ändern. Stattdessen aktualisieren Sie ihn im Rahmen eines [`navigate()`](/de/docs/Web/API/Navigation/navigate) oder [`reload()`](/de/docs/Web/API/Navigation/reload) – jede dieser Aktionen nimmt optional ein Objekt mit Optionen entgegen, welches eine `state`-Eigenschaft enthält, die den neuen Zustand enthält, welcher auf dem Verlaufseintrag festgelegt wird. Wenn diese Navigationen festgeschrieben werden, wird die Zustandsänderung automatisch angewendet.

In einigen Fällen wird jedoch eine Zustandsänderung unabhängig von einer Navigation oder einem Neuladen sein – zum Beispiel, wenn eine Seite ein erweiterbares/zusammenklappbares {{htmlelement("details")}}-Element enthält. In diesem Fall möchten Sie möglicherweise den expandierten/zusammengeklappten Zustand in Ihrem Verlaufseintrag speichern, damit Sie ihn wiederherstellen können, wenn der Benutzer zur Seite zurückkehrt oder seinen Browser neu startet. Solche Fälle werden mit [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) behandelt. Das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Event wird ausgelöst, wenn die aktuelle Eintragsänderung abgeschlossen ist.

### Einschränkungen

Es gibt ein paar wahrgenommene Einschränkungen mit der Navigation-API:

1. Die aktuelle Spezifikation löst kein [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Event beim ersten Laden einer Seite aus. Das könnte für Websites in Ordnung sein, die Server-Side-Rendering (SSR) verwenden – Ihr Server könnte den korrekten Anfangszustand zurückgeben, was der schnellste Weg ist, um Inhalte zu Ihren Benutzern zu bringen. Aber Websites, die Client-seitigen Code verwenden, um ihre Seiten zu erstellen, benötigen möglicherweise eine zusätzliche Funktion zur Initialisierung der Seite.
2. Die Navigation-API operiert nur innerhalb eines einzelnen Frames – der obersten Seite oder eines spezifischen {{htmlelement("iframe")}}. Dies hat einige interessante Implikationen, die [weiter in der Spezifikation dokumentiert sind](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites), aber in der Praxis die Verwirrung der Entwickler reduzieren werden. Die vorherige [History-API](/de/docs/Web/API/History_API) hat mehrere verwirrende Randfälle, wie z. B. Unterstützung für Frames, die die Navigation-API von vornherein behandelt.
3. Sie können momentan die Navigation-API nicht verwenden, um die Historienliste programmatisch zu verändern oder neu zu arrangieren. Es könnte nützlich sein, eine temporäre Anzeige zu haben, z. B. den Benutzer zu einem temporären Modal zu navigieren, das ihn nach einigen Informationen fragt, und dann zur vorherigen URL zurückzukehren. In diesem Fall würden Sie den temporären Modal-Verlaufseintrag löschen wollen, damit der Benutzer den Anwendungsfluss nicht durcheinander bringt, indem er die Vorwärtstaste drückt und ihn erneut öffnet.

## Schnittstellen

- [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Event, welches ausgelöst wird, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird. Es bietet Zugriff auf Informationen zu dieser Navigation und am bemerkenswertesten die [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept), welche ermöglicht zu kontrollieren, was passiert, wenn die Navigation initiiert wird.
- [`Navigation`](/de/docs/Web/API/Navigation) {{Experimental_Inline}}
  - : Ermöglicht die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmgesteuerten Initiierung von Navigationen, der Untersuchung von Navigationsverlaufseinträgen und der Verwaltung von Navigationen, während sie geschehen.
- [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) {{Experimental_Inline}}
  - : Repräsentiert eine kürzlich erfolgte cross-document Navigation. Sie enthält den Navigationstyp und aktuelle sowie Ziel-Dokumentverlaufseinträge.
- [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Event, welches feuert, wenn sich der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat. Es bietet Zugriff auf den Navigationstyp und den vorherigen Verlaufseintrag, von dem aus navigiert wurde.
- [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) {{Experimental_Inline}}
  - : Repräsentiert das Ziel, zu dem in der aktuellen Navigation navigiert wird.
- [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) {{Experimental_Inline}}
  - : Repräsentiert einen einzelnen Navigationsverlaufseintrag.
- [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) {{Experimental_Inline}}
  - : Repräsentiert eine laufende Navigation.

## Erweiterungen für andere Schnittstellen

- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das aktuelle `window`-assoziierte [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Dies ist der Einstiegspunkt für die Navigation-API.

## Beispiele

> [!NOTE]
> Schauen Sie sich das [Navigation API live demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demoquellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api)) an.

### Verwaltung einer Navigation mit `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // Exit early if this navigation shouldn't be intercepted,
  // e.g. if the navigation is cross-origin, or a download request
  if (shouldNotIntercept(event)) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // The URL has already changed, so show a placeholder while
        // fetching the new content, such as a spinner or loading page
        renderArticlePagePlaceholder();

        // Fetch the new content and display when ready
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }
});
```

### Verwaltung des Scrollens mit `scroll()`

In diesem Beispiel zum Abfangen einer Navigation beginnt die Funktion `handler()` damit, einige Artikelinhalte abzurufen und darzustellen, und lädt dann einige sekundäre Inhalte danach. Es macht Sinn, die Seite zum Hauptartikelinhalt zu scrollen, sobald er verfügbar ist, damit der Benutzer damit interagieren kann, anstatt darauf zu warten, bis auch der sekundäre Inhalt dargestellt ist. Um dies zu erreichen, haben wir zwischen den beiden einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf hinzugefügt.

```js
navigation.addEventListener("navigate", (event) => {
  if (shouldNotIntercept(event)) {
    return;
  }
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);

        event.scroll();

        const secondaryContent = await getSecondaryContent(url.pathname);
        addSecondaryContent(secondaryContent);
      },
    });
  }
});
```

### Durchlaufen zu einem bestimmten Verlaufseintrag

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Aktualisieren des Zustands

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

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
