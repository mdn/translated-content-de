---
title: Navigation API
slug: Web/API/Navigation_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{DefaultAPISidebar("Navigation API")}}

Die **Navigation API** bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Einträge der Historie einer Anwendung prüfen. Dies ist ein Nachfolger früherer Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Schwächen beheben und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} zugeschnitten sind.

## Konzepte und Nutzung

In SPAs bleibt die Seitenvorlage während der Nutzung meist gleich, und die Inhalte werden dynamisch neu geschrieben, wenn der Benutzer verschiedene Seiten oder Funktionen besucht. Dadurch wird nur eine einzige eindeutige Seite im Browser geladen, was das erwartete Benutzererlebnis von Vorwärts- und Rückwärtsnavigation zwischen verschiedenen Orten im Anzeigeverlauf beeinträchtigt. Dieses Problem kann bis zu einem gewissen Grad über die [History API](/de/docs/Web/API/History_API) gelöst werden, aber sie ist nicht für die Bedürfnisse von SPAs ausgelegt. Die Navigation API zielt darauf ab, diese Lücke zu schließen.

Auf die API wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation) Eigenschaft zugegriffen, die eine Referenz auf ein globales [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurückgibt. Jedes `window`-Objekt hat seine eigene entsprechende `navigation`-Instanz.

### Umgang mit Navigationsaktionen

Das `navigation`-Interface verfügt über mehrere zugehörige Ereignisse, am bemerkenswertesten ist das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis. Dies wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, was bedeutet, dass Sie alle Seiten-Navigationsaktionen von einem zentralen Ort aus steuern können, ideal für Routing-Funktionen in SPA-Frameworks. (Bei der [History API](/de/docs/Web/API/History_API) ist dies nicht der Fall, bei der es manchmal schwierig ist, zu reagieren auf alle Navigationsaktionen.) Der `navigate`-Ereignishandler erhält ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Objekt, das detaillierte Informationen einschließlich Details zum Ziel der Navigation, Typ, ob es `POST`-Formulardaten oder eine Download-Anfrage enthält und mehr bereitstellt.

Das `NavigationEvent`-Objekt bietet außerdem zwei Methoden:

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) nimmt als Argument eine Callback-Handler-Funktion entgegen, die ein Versprechen zurückgibt. Es ermöglicht Ihnen zu kontrollieren, was passiert, wenn die Navigation initiiert wird. Zum Beispiel kann es im Fall einer SPA verwendet werden, um relevanten neuen Inhalt in die Oberfläche zu laden, basierend auf dem Pfad der URL, zu der navigiert wurde.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) ermöglicht es Ihnen, das Scrollverhalten des Browsers manuell zu initiieren (z. B. zu einem Fragment-Identifikator in der URL), wenn es für Ihren Code sinnvoll ist, anstatt darauf zu warten, dass der Browser es automatisch handhabt.

Sobald eine Navigation initiiert wird und Ihr `intercept()`-Handler aufgerufen wird, wird ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekt instanziiert (zugänglich über [`Navigation.transition`](/de/docs/Web/API/Navigation/transition)), das verwendet werden kann, um den Prozess der laufenden Navigation zu verfolgen.

> [!NOTE]
> In diesem Kontext bezieht sich "transition" auf den Übergang zwischen einem Eintrag der Historie und einem anderen. Es bezieht sich nicht auf CSS-Übergänge.

> [!NOTE]
> Sie können auch [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um die Navigation für die meisten [Navigationsarten](/de/docs/Web/API/NavigateEvent/navigationType#value) vollständig zu stoppen; das Stornieren von Traverse-Navigationen ist noch nicht implementiert.

Wenn das Versprechen der `intercept()`-Handler-Funktion erfüllt wird, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis des `Navigation`-Objekts ausgelöst, sodass Sie nach Abschluss einer erfolgreichen Navigation Aufräumcode ausführen können. Wenn es abgelehnt wird, bedeutet dies, dass die Navigation fehlgeschlagen ist, und [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) wird stattdessen ausgelöst, sodass Sie den Fehlerfall elegant behandeln können. Es gibt auch eine [`finished`](/de/docs/Web/API/NavigationTransition/finished)-Eigenschaft im `NavigationTransition`-Objekt, das zur gleichen Zeit wie die oben genannten Ereignisse erfüllt oder abgelehnt wird, was einen weiteren Weg zur Behandlung der Erfolgs- und Fehlerfälle bietet.

> [!NOTE]
> Bevor die Navigation API verfügbar war, um etwas Ähnliches zu tun, hätten Sie auf alle Klick-Ereignisse auf Links lauschen, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState) Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten müssen. Und das würde nicht alle Navigationsarten abdecken, sondern nur vom Benutzer initiierte Link-Klicks.

### Programmgesteuertes Aktualisieren und Durchlaufen der Navigationshistorie

Während der Benutzer durch Ihre Anwendung navigiert, führt jeder neue Standort, zu dem navigiert wird, zur Erstellung eines Eintrags der Navigationshistorie. Jeder Historiensatz wird durch eine eindeutige [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objektinstanz dargestellt. Diese enthalten mehrere Eigenschaften wie den Schlüssel des Eintrags, die URL und Statusinformationen. Sie können den Eintrag, auf dem sich der Benutzer gerade befindet, mit [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) abrufen und ein Array aller vorhandenen Historieeinträge mit [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries). Jedes `NavigationHistoryEntry`-Objekt hat ein [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event)-Ereignis, das ausgelöst wird, wenn der Eintrag nicht mehr Teil der Browser-Historie ist. Zum Beispiel, wenn der Benutzer dreimal zurück navigiert und dann zu einem anderen Ort vorwärts navigiert, werden diese drei Historieeinträge entsorgt.

> [!NOTE]
> Die Navigation API gibt nur die Historieeinträge im aktuellen Browsing-Kontext preis, die den gleichen Ursprung wie die aktuelle Seite haben (z. B. keine Navigationsaktionen innerhalb eingebetteter {{htmlelement("iframe")}}s oder Ursprungsübergreifende Navigationsaktionen), was eine genaue Liste aller vorherigen Historieeinträge nur für Ihre App liefert. Dies macht das Durchlaufen der Historie zu einer viel weniger anfälligen Angelegenheit als mit der älteren [History API](/de/docs/Web/API/History_API).

Das `Navigation`-Objekt enthält alle Methoden, die Sie benötigen, um die Navigationshistorie zu aktualisieren und durch sie zu navigieren:

- [`navigate()`](/de/docs/Web/API/Navigation/navigate) {{Experimental_Inline}}
  - : Navigiert zu einer neuen URL und erstellt einen neuen Eintrag in der Navigationshistorie.
- [`reload()`](/de/docs/Web/API/Navigation/reload) {{Experimental_Inline}}
  - : Lädt den aktuellen Eintrag der Navigationshistorie neu.
- [`back()`](/de/docs/Web/API/Navigation/back) {{Experimental_Inline}}
  - : Navigiert zum vorherigen Eintrag der Navigationshistorie, falls dies möglich ist.
- [`forward()`](/de/docs/Web/API/Navigation/forward) {{Experimental_Inline}}
  - : Navigiert zum nächsten Eintrag der Navigationshistorie, falls dies möglich ist.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) {{Experimental_Inline}}
  - : Navigiert zu einem bestimmten Eintrag der Navigationshistorie, der durch seinen Schlüsselwert identifiziert wird, der über die relevante [`NavigationHistoryEntry.key`](/de/docs/Web/API/NavigationHistoryEntry/key)-Eigenschaft des Eintrags erhalten wird.

Jede der oben genannten Methoden gibt ein Objekt zurück, das zwei Versprechen enthält — `{ committed, finished }`. Auf diese Weise kann die aufrufende Funktion warten, bevor sie weitere Aktionen ergreift, bis:

- `committed` erfüllt ist, was bedeutet, dass sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished` erfüllt ist, was bedeutet, dass alle vom `intercept()`-Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird, wie oben erwähnt.
- eines der oben genannten Versprechen abgelehnt wird, was bedeutet, dass die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Zustand

Die Navigation API ermöglicht es Ihnen, einen Zustand auf jedem Eintrag der Historie zu speichern. Dies sind vom Entwickler definierte Informationen — es kann alles sein, was Sie möchten. Zum Beispiel möchten Sie möglicherweise eine `visitCount`-Eigenschaft speichern, die die Anzahl der Besuche eines View zählt, oder ein Objekt, das mehrere Eigenschaften in Bezug auf den UI-Zustand enthält, sodass dieser Zustand wiederhergestellt werden kann, wenn ein Benutzer zu diesem View zurückkehrt.

Um den Zustand eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zu erhalten, rufen Sie dessen [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState)-Methode auf. Es ist zunächst `undefined`, aber wenn Zustand-Informationen auf dem Eintrag gesetzt werden, wird es die zuvor gesetzten Zustand-Informationen zurückgeben.

Das Setzen des Zustands ist etwas nuancierter. Sie können den Zustandswert nicht abrufen und dann direkt aktualisieren — die Kopie, die auf dem Eintrag gespeichert ist, wird sich nicht ändern. Stattdessen aktualisieren Sie es, während Sie ein [`navigate()`](/de/docs/Web/API/Navigation/navigate) oder [`reload()`](/de/docs/Web/API/Navigation/reload) durchführen — jede dieser Methoden nimmt optional ein options-Objekt-Parameter, das eine `state`-Eigenschaft enthält, die den neuen Zustand enthält, der auf dem Historieeintrag gesetzt werden soll. Wenn diese Navigationsaktionen bestätigt werden, wird die Zustandsänderung automatisch angewendet.

In einigen Fällen wird eine Zustandsänderung jedoch unabhängig von einer Navigation oder einem Neuladen sein — zum Beispiel, wenn eine Seite ein erweiterbares/zusammenklappbares {{htmlelement("details")}}-Element enthält. In diesem Fall möchten Sie möglicherweise den erweiterten/zusammengeklappten Zustand in Ihrem Historieeintrag speichern, damit Sie ihn wiederherstellen können, wenn der Benutzer zur Seite zurückkehrt oder seinen Browser neu startet. Fälle wie dieser werden mit [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) behandelt. Das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Ereignis wird ausgelöst, wenn die aktuelle Eintragsänderung abgeschlossen ist.

### Einschränkungen

Es gibt ein paar wahrgenommene Einschränkungen bei der Navigation API:

1. Die aktuelle Spezifikation löst kein [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis beim ersten Laden einer Seite aus. Dies könnte für Websites, die Server Side Rendering (SSR) verwenden, in Ordnung sein — Ihr Server könnte den richtigen Anfangszustand zurückgeben, was der schnellste Weg ist, um Inhalt an Ihre Benutzer zu liefern. Aber Websites, die clientseitigen Code verwenden, um ihre Seiten zu erstellen, benötigen möglicherweise eine zusätzliche Funktion, um die Seite zu initialisieren.
2. Die Navigation API operiert nur innerhalb eines einzelnen Rahmens — der obersten Seite oder eines bestimmten {{htmlelement("iframe")}}. Dies hat einige interessante Implikationen, die [weiter in der Spezifikation dokumentiert sind](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites), aber in der Praxis wird dies Verwirrung bei Entwicklern reduzieren. Die vorherige [History API](/de/docs/Web/API/History_API) hatte mehrere verwirrende Randfälle, wie die Unterstützung für Frames, die die Navigation API im Voraus behandelt.
3. Derzeit können Sie die Navigation API nicht verwenden, um die Liste der Historieeinträge programmgesteuert zu ändern oder neu anzuordnen. Es könnte zum Beispiel nützlich sein, einen temporären Zustand zu haben, indem Sie den Benutzer zu einem temporären Modal weiterleiten, das ihn nach einigen Informationen fragt, und dann zur vorherigen URL zurückkehren. In diesem Fall möchten Sie den temporären Modal-Navigations-Eintrag löschen, damit der Benutzer den Anwendungsfluss nicht durch Drücken der Vorwärts-Taste stören und ihn erneut öffnen kann.

## Schnittstellen

- [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis, das ausgelöst wird, wenn [jeder Navigationsart](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird. Es bietet Zugriff auf Informationen über diese Navigation und insbesondere die [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept), die es Ihnen ermöglicht, zu kontrollieren, was passiert, wenn die Navigation initiiert wird.
- [`Navigation`](/de/docs/Web/API/Navigation) {{Experimental_Inline}}
  - : Erlaubt die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmatischen Initiierung von Navigationsaktionen, der Prüfung von Historieeinträgen und der Verwaltung von Navigationsaktionen während ihres Ablaufs.
- [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) {{Experimental_Inline}}
  - : Repräsentiert eine kürzlich durchgeführte dokumentübergreifende Navigation. Sie enthält den Navigationstyp und die aktuellen und Zieldokument-Historieeinträge.
- [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Ereignis, das auftritt, wenn sich [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat. Es bietet Zugriff auf den Navigationstyp und den vorherigen Historieeintrag, von dem aus navigiert wurde.
- [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) {{Experimental_Inline}}
  - : Repräsentiert das Ziel, zu dem in der aktuellen Navigation navigiert wird.
- [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) {{Experimental_Inline}}
  - : Repräsentiert einen einzelnen Historieeintrag.
- [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) {{Experimental_Inline}}
  - : Repräsentiert eine laufende Navigation.

## Erweiterungen zu anderen Schnittstellen

- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das zum aktuellen `window` gehörende [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Dies ist der Einstiegspunkt für die Navigation API.

## Beispiele

> [!NOTE]
> Sehen Sie sich Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/) an.

### Umgang mit einer Navigation mittels `intercept()`

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

### Umgang mit dem Scrollen mittels `scroll()`

In diesem Beispiel des Abfangens einer Navigation beginnt die `handler()`-Funktion mit dem Abrufen und Rendern von Artikelinhalten, aber dann werden einige sekundäre Inhalte danach abgerufen und gerendert. Es macht Sinn, die Seite so schnell wie möglich zu den Hauptartikelinhalten zu scrollen, damit der Benutzer damit interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte gerendert sind. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf zwischen die beiden hinzugefügt.

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

### Durchlaufen zu einem bestimmten Historieeintrag

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

Oder falls der Zustand unabhängig von einer Navigation oder einem Neuladen ist:

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
