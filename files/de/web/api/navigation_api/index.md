---
title: Navigation API
slug: Web/API/Navigation_API
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{DefaultAPISidebar("Navigation API")}}

Die **Navigation API** bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Historieneinträge einer Anwendung untersuchen. Dies ist ein Nachfolger früherer Web-Plattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Nachteile behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgerichtet ist.

## Konzepte und Verwendung

In SPAs bleibt die Seitenschablone während der Nutzung tendenziell gleich und der Inhalt wird dynamisch neu geschrieben, wenn der Benutzer verschiedene Seiten oder Funktionen besucht. Dadurch wird nur eine eindeutige Seite im Browser geladen, was die erwartete Benutzererfahrung des Navigierens zwischen verschiedenen Orten im Viewing-Historie unterbricht. Dieses Problem kann bis zu einem gewissen Grad über die [History API](/de/docs/Web/API/History_API) gelöst werden, aber sie ist nicht für die Bedürfnisse von SPAs konzipiert. Die Navigation API zielt darauf ab, diese Lücke zu schließen.

Auf die API wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation)-Eigenschaft zugegriffen, die eine Referenz auf ein globales [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurückgibt. Jedes `window`-Objekt hat seine eigene entsprechende `navigation`-Instanz.

### Umgang mit Navigationen

Das `navigation`-Interface verfügt über mehrere zugehörige Ereignisse, wobei das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis das bemerkenswerteste ist. Dieses wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, was bedeutet, dass Sie alle Seitennavigationen von einem zentralen Ort aus steuern können, ideal für Routing-Funktionalität in SPA-Frameworks. (Dies ist nicht der Fall bei der [History API](/de/docs/Web/API/History_API), wo es manchmal schwierig ist, auf alle Navigationen zu reagieren.) Der `navigate`-Ereignis-Handler erhält ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Objekt, das detaillierte Informationen einschließlich Details zum Ziel der Navigation, Typ, ob es `POST`-Formulardaten oder eine Download-Anfrage enthält, und mehr enthält.

Das `NavigationEvent`-Objekt bietet auch zwei Methoden:

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) ermöglicht es Ihnen, benutzerdefiniertes Verhalten für Navigationen festzulegen und kann folgende Argumente akzeptieren:
  - Callback-Handler-Funktionen, mit denen Sie festlegen können, was sowohl _wenn_ die Navigation festgeschrieben wird, als auch _kurz bevor_ die Navigation festgeschrieben wird, passiert. Beispielsweise könnten Sie relevante neue Inhalte in die Benutzeroberfläche laden, basierend auf dem Pfad der URL, zu der navigiert wurde, oder den Browser auf eine Anmeldeseite umleiten, wenn die URL auf eine eingeschränkte Seite verweist und der Benutzer nicht angemeldet ist.
  - Eigenschaften, die es Ihnen ermöglichen, das Standard-Fokus- und Scrollverhalten des Browsers nach dem Auftreten der Navigation zu aktivieren oder zu deaktivieren.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) ermöglicht es Ihnen, das Scrollverhalten des Browsers manuell zu initiieren (z. B. zu einem Fragment-Identifier in der URL), wenn dies für Ihren Code sinnvoll ist, anstatt darauf zu warten, dass der Browser es automatisch handhabt.

Sobald eine Navigation initiiert wird und Ihr `intercept()`-Handler aufgerufen wird, wird eine Instanz des Objekts [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) erstellt (zugänglich über [`Navigation.transition`](/de/docs/Web/API/Navigation/transition)), die verwendet werden kann, um den Prozess der laufenden Navigation zu verfolgen.

> [!NOTE]
> In diesem Zusammenhang bezieht sich "transition" auf den Übergang zwischen einem Historieneintrag und einem anderen. Es steht nicht im Zusammenhang mit CSS-Übergängen.

> [!NOTE]
> Sie können auch [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um die Navigation vollständig zu stoppen, für die meisten [Navigationstypen](/de/docs/Web/API/NavigateEvent/navigationType#value); die Stornierung von Vorwärts-Rückwärts-Navigationen ist noch nicht implementiert.

Wenn die von den `intercept()`-Handler-Funktionen zurückgegebenen Versprechen erfüllt sind, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis des `Navigation`-Objekts ausgelöst, das es Ihnen ermöglicht, Bereinigungscode auszuführen, nachdem eine erfolgreiche Navigation abgeschlossen wurde. Wenn sie zurückgewiesen werden, was bedeutet, dass die Navigation fehlgeschlagen ist, wird stattdessen [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) ausgelöst, was Ihnen ermöglicht, den Fehlerfall elegant zu behandeln. Es gibt auch eine `finished`-Eigenschaft im Rückgabewert von Navigationsmethoden (wie [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), die zur gleichen Zeit wie die oben genannten Ereignisse erfüllt oder zurückgewiesen wird und einen weiteren Weg für den Umgang mit Erfolg- und Fehlerfällen bietet.

> [!NOTE]
> Bevor die Navigation API verfügbar war, mussten Sie etwas Ähnliches tun, indem Sie alle Klickereignisse auf Links überwachten, `e.preventDefault()` ausführten, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf tätigten und dann die Seitenansicht basierend auf der neuen URL einrichteten. Und dies würde nicht alle Navigationen abdecken - nur vom Benutzer initiierte Link-Klicks.

### Programmgesteuertes Aktualisieren und Durchlaufen der Navigation-Historie

Während der Benutzer durch Ihre Anwendung navigiert, führt jeder neue Ort, zu dem navigiert wird, zur Erstellung eines Historieneintrags. Jeder Historieneintrag wird durch eine eindeutige [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objektinstanz repräsentiert. Diese enthalten mehrere Eigenschaften wie der Schlüssel des Eintrags, die URL und Statusinformationen. Sie können den Eintrag abrufen, auf dem sich der Benutzer gerade befindet, indem Sie [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) verwenden, und ein Array aller vorhandenen Historieneinträge mit [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries). Jedes `NavigationHistoryEntry`-Objekt hat ein [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event)-Ereignis, das ausgelöst wird, wenn der Eintrag nicht mehr Teil der Browser-Historie ist. Beispielsweise, wenn der Benutzer dreimal zurück navigiert und dann irgendwo anders hin navigiert, werden diese drei Historieneinträge entfernt.

> [!NOTE]
> Die Navigation API zeigt nur Historieneinträge an, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z. B. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder Ursprungs-übergreifende Navigationen), was eine genaue Liste aller vorherigen Historieeinträge nur für Ihre App bereitstellt. Dies macht das Durchlaufen der Historie zu einer weit weniger fragilen Angelegenheit als mit der älteren [History API](/de/docs/Web/API/History_API).

Das `Navigation`-Objekt enthält alle Methoden, die Sie benötigen, um die Navigation-Historie zu aktualisieren und durch sie zu navigieren:

- [`navigate()`](/de/docs/Web/API/Navigation/navigate)
  - : Navigiert zu einer neuen URL und erstellt einen neuen Navigation-Historieeintrag.
- [`reload()`](/de/docs/Web/API/Navigation/reload)
  - : Lädt den aktuellen Navigation-Historieeintrag neu.
- [`back()`](/de/docs/Web/API/Navigation/back)
  - : Navigiert zum vorherigen Navigation-Historieeintrag, falls dies möglich ist.
- [`forward()`](/de/docs/Web/API/Navigation/forward)
  - : Navigiert zum nächsten Navigation-Historieeintrag, falls dies möglich ist.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)
  - : Navigiert zu einem spezifischen Navigation-Historieeintrag, der durch seinen Schlüsselwert identifiziert wird, welcher über die relevante [`NavigationHistoryEntry.key`](/de/docs/Web/API/NavigationHistoryEntry/key)-Eigenschaft des Eintrags erhalten wird.

Jede dieser Methoden gibt ein Objekt zurück, das zwei Versprechen enthält - `{ committed, finished }`. Dies ermöglicht es der aufrufenden Funktion, mit weiteren Maßnahmen zu warten, bis:

- `committed` erfüllt ist, was bedeutet, dass sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished` erfüllt ist, was bedeutet, dass alle von Ihrem `intercept()`-Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird, wie zuvor erwähnt.
- entweder eines der obigen Versprechen zurückgewiesen wird, was bedeutet, dass die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Zustand

Die Navigation API ermöglicht es Ihnen, den Zustand bei jedem Historieeintrag zu speichern. Dies sind vom Entwickler definierte Informationen - es kann sein, was Sie möchten. Beispielsweise könnten Sie eine `visitCount`-Eigenschaft speichern, die die Anzahl der Besuche eines Ansichts speichert, oder ein Objekt, das mehrere Eigenschaften im Zusammenhang mit dem UI-Zustand enthält, sodass der Zustand wiederhergestellt werden kann, wenn ein Benutzer zu dieser Ansicht zurückkehrt.

Um den Zustand eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) abzurufen, rufen Sie dessen [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState)-Methode auf. Er ist ursprünglich `undefined`, aber wenn Zustandsinformationen auf dem Eintrag gesetzt sind, wird er die zuvor gesetzten Zustandsinformationen zurückgeben.

Das Setzen des Zustands ist etwas nuancierter. Sie können den Zustandswert nicht abrufen und dann direkt aktualisieren - die im Eintrag gespeicherte Kopie wird sich nicht ändern. Stattdessen aktualisieren Sie ihn, während Sie eine [`navigate()`](/de/docs/Web/API/Navigation/navigate)- oder [`reload()`](/de/docs/Web/API/Navigation/reload) anwenden - jede nimmt optional ein Optionsobjekt-Parameter an, das eine `state`-Eigenschaft enthält, die den neuen Zustand enthält, der auf den Historieeintrag gesetzt werden soll. Wenn diese Navigationen festgeschrieben werden, wird die Zustandsänderung automatisch angewendet.

In einigen Fällen jedoch, wird eine Zustandsänderung unabhängig von einer Navigation oder einem Neuladen sein - beispielsweise wenn eine Seite ein erweiterbares/kollabierbares {{htmlelement("details")}}-Element enthält. In diesem Fall möchten Sie möglicherweise den expandierten/kollabierten Zustand in Ihrem Historieeintrag speichern, damit Sie ihn wiederherstellen können, wenn der Benutzer zur Seite zurückkehrt oder seinen Browser neu startet. Fälle wie dieser werden mit [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) behandelt. Das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Ereignis wird ausgelöst, wenn die aktuelle Eintragsänderung abgeschlossen ist.

### Einschränkungen

Es gibt einige wahrgenommene Einschränkungen mit der Navigation API:

1. Die aktuelle Spezifikation löst kein [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis beim ersten Laden einer Seite aus. Dies mag für Seiten, die Server-Seitiges Rendering (SSR) verwenden, in Ordnung sein - Ihr Server könnte den korrekten Anfangszustand zurückgeben, was der schnellste Weg ist, um Nutzern Inhalte bereitzustellen. Aber Seiten, die clientseitigen Code verwenden, um ihre Seiten zu erstellen, benötigen möglicherweise eine zusätzliche Funktion, um die Seite zu initialisieren.
2. Die Navigation API arbeitet nur innerhalb eines einzigen Frames - der obersten Seite oder eines bestimmten {{htmlelement("iframe")}}. Dies hat einige interessante Implikationen, die [weiter in der Spezifikation dokumentiert sind](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites), wird aber in der Praxis die Verwirrung der Entwickler reduzieren. Die vorherige [History API](/de/docs/Web/API/History_API) hatte mehrere verwirrende Randfälle, wie die Unterstützung für Frames, die die Navigation API von vornherein behandelt.
3. Derzeit können Sie die Navigation API nicht verwenden, um die Historienliste programmatisch zu modifizieren oder neu zu ordnen. Es könnte nützlich sein, einen temporären Zustand zu haben, z. B. den Benutzer zu einem temporären Modal zu navigieren, das ihn um Informationen bittet, um dann zur vorherigen URL zurückzukehren. In diesem Fall würden Sie den temporären Modal-Navigationseintrag löschen wollen, damit der Benutzer den Anwendungsfluss nicht durcheinanderbringt, indem er die Forward-Taste drückt und ihn erneut öffnet.

## Schnittstellen

- [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis, das ausgelöst wird, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird. Es bietet Zugriff auf Informationen über diese Navigation und vor allem die [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept), die es Ihnen ermöglicht zu kontrollieren, was passiert, wenn die Navigation gestartet wird.
- [`Navigation`](/de/docs/Web/API/Navigation) {{Experimental_Inline}}
  - : Ermöglicht die Steuerung aller Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich des programmgesteuerten Initiierens von Navigationen, der Untersuchung von Navigationshistorieneinträgen und der Verwaltung von Navigationen, während sie ausgeführt werden.
- [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) {{Experimental_Inline}}
  - : Repräsentiert eine kürzlich durchgeführte dokumentübergreifende Navigation. Es enthält den Navigationstyp und die aktuelle und Ziel-Dokumenthistorieneinträge.
- [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Ereignis, das ausgelöst wird, wenn sich [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) verändert hat. Es bietet Zugriff auf den Navigationstyp und den vorherigen Historieneintrag, von dem aus navigiert wurde.
- [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) {{Experimental_Inline}}
  - : Repräsentiert das Ziel, zu dem in der aktuellen Navigation navigiert wird.
- [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) {{Experimental_Inline}}
  - : Repräsentiert einen einzelnen Navigation-Historieeintrag.
- [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController) {{Experimental_Inline}}
  - : Definiert das Umleitungsverhalten für einen Navigationsvorcommithandler, wenn es in den [`precommitHandler`](/de/docs/Web/API/NavigateEvent/intercept#precommithandler)-Callback eines [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept)-Methodenaufrufs übergeben wird.
- [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) {{Experimental_Inline}}
  - : Repräsentiert eine laufende Navigation.

## Erweiterungen zu anderen Schnittstellen

- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das dem aktuellen `window` zugeordnete [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Dies ist der Einstiegspunkt für die Navigation API.

## Beispiele

> [!NOTE]
> Sehen Sie sich die [Live-Demo der Navigation API](https://mdn.github.io/dom-examples/navigation-api/) an ([Demo-Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api)).

### Verarbeiten einer Navigation mit `intercept()`

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

### Verarbeiten von Scrollvorgängen mit `scroll()`

In diesem Beispiel zum Abfangen einer Navigation beginnt die `handler()`-Funktion mit dem Abrufen und Rendern einiger Artikelinhalte, ruft aber danach noch einige sekundäre Inhalte ab und rendert sie. Es ist sinnvoll, die Seite sofort zum Hauptartikelinhalt zu scrollen, sobald dieser verfügbar ist, damit der Benutzer mit ihm interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte gerendert sind. Um dies zu erreichen, haben wir zwischen den beiden einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf hinzugefügt.

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

### Navigieren zu einem bestimmten Historieneintrag

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
