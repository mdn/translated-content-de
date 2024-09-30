---
title: Navigation API
slug: Web/API/Navigation_API
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{SeeCompatTable}}{{DefaultAPISidebar("Navigation API")}}

Die **Navigation API** bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Einträge im Verlauf einer Anwendung untersuchen. Dies ist ein Nachfolger früherer Webplattformfunktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), der ihre Mängel behebt und speziell auf die Bedürfnisse von [Single-Page-Anwendungen (SPAs)](/de/docs/Glossary/SPA) ausgerichtet ist.

## Konzepte und Nutzung

In SPAs bleibt die Seitenschablone während der Nutzung meist gleich, und der Inhalt wird dynamisch neu geschrieben, während der Benutzer verschiedene Seiten oder Funktionen besucht. Dadurch wird nur eine eindeutige Seite im Browser geladen, was die erwartete Benutzererfahrung, zwischen verschiedenen Positionen im Anzeigeverlauf vor- und zurückzunavigieren, unterbricht. Dieses Problem kann bis zu einem gewissen Grad über die [History API](/de/docs/Web/API/History_API) gelöst werden, sie ist jedoch nicht auf die Bedürfnisse von SPAs ausgelegt. Die Navigation API zielt darauf ab, diese Lücke zu schließen.

Der Zugriff auf die API erfolgt über die Eigenschaft [`Window.navigation`](/de/docs/Web/API/Window/navigation), die einen Verweis auf ein globales [`Navigation`](/de/docs/Web/API/Navigation) Objekt zurückgibt. Jedes `window` Objekt hat seine eigene entsprechende `navigation` Instanz.

### Umgang mit Navigationen

Die `navigation`-Schnittstelle verfügt über mehrere zugehörige Ereignisse, wobei das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis am bemerkenswertesten ist. Dieses wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, was bedeutet, dass Sie alle Seitennavigationen von einem zentralen Ort aus steuern können, ideal für Routing-Funktionen in SPA-Frameworks. (Dies ist nicht der Fall bei der [History API](/de/docs/Web/API/History_API), bei der es manchmal schwierig ist, auf alle Navigationen zu reagieren.) Dem `navigate`-Ereignishandler wird ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Objekt übergeben, das detaillierte Informationen enthält, einschließlich Details zum Ziel der Navigation, Typ, ob es `POST` Formulardaten oder eine Download-Anfrage enthält und mehr.

Das `NavigationEvent` Objekt bietet auch zwei Methoden:

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) nimmt als Argument eine Rückruffunktion entgegen, die ein Versprechen zurückgibt. Es ermöglicht Ihnen, zu kontrollieren, was passiert, wenn die Navigation initiiert wird. Im Fall einer SPA kann es beispielsweise dazu verwendet werden, relevante neue Inhalte basierend auf dem Pfad der navigierten URL in die Benutzeroberfläche zu laden.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) ermöglicht es Ihnen, das Scroll-Verhalten des Browsers manuell zu initiieren (z.B. zu einem Fragment-Identifikator in der URL), wenn es für Ihren Code sinnvoll ist, anstatt darauf zu warten, dass der Browser es automatisch behandelt.

Sobald eine Navigation initiiert wird und Ihr `intercept()` Handler aufgerufen wird, wird eine Instanz des [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) Objekts erstellt (zugänglich über [`Navigation.transition`](/de/docs/Web/API/Navigation/transition)), die zur Verfolgung des Prozesses der laufenden Navigation verwendet werden kann.

> [!NOTE]
> In diesem Kontext bezieht sich "transition" auf den Übergang zwischen einem Verlaufseintrag und einem anderen. Es steht nicht im Zusammenhang mit CSS-Übergängen.

> [!NOTE]
> Sie können auch [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um die Navigation vollständig für die meisten [Navigationstypen](/de/docs/Web/API/NavigateEvent/navigationType#value) zu stoppen; die Abbruch von Traverse-Navigationen ist noch nicht implementiert.

Wenn das Versprechen der `intercept()`-Handlerfunktion erfüllt wird, löst das `Navigation`-Objekt das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis aus, das es Ihnen ermöglicht, Aufräumcode auszuführen, nachdem eine erfolgreiche Navigation abgeschlossen ist. Wenn es abgelehnt wird, was bedeutet, dass die Navigation fehlgeschlagen ist, wird stattdessen [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) ausgelöst, was Ihnen ermöglicht, den Fehlerfall der Anmut zu behandeln. Es gibt auch eine [`finished`](/de/docs/Web/API/NavigationTransition/finished) Eigenschaft am `NavigationTransition` Objekt, die sich zur gleichen Zeit wie die oben genannten Ereignisse erfüllt oder abgelehnt wird, und einen weiteren Pfad für die Handhabung der Erfolgs- und Fehlerfälle bereitstellt.

> [!NOTE]
> Bevor die Navigation API verfügbar war, hätten Sie, um etwas Ähnliches zu tun, auf alle Klickereignisse auf Links hören müssen, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState) Aufruf tätigen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und dies würde nicht alle Navigationen behandeln — nur vom Benutzer initiierte Link-Klicks.

### Programmatisches Aktualisieren und Durchlaufen des Navigationsverlaufs

Während sich der Benutzer durch Ihre Anwendung bewegt, führt jede neue Position, zu der navigiert wird, zur Erstellung eines Eintrags im Navigationsverlauf. Jeder Verlaufseintrag wird durch ein eigenes [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Instanzobjekt dargestellt. Diese enthalten mehrere Eigenschaften wie den Schlüssel des Eintrags, die URL und Zustandsinformationen. Sie können den Eintrag abrufen, auf dem sich der Benutzer gerade befindet, indem Sie [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) verwenden, und ein Array aller vorhandenen Verlaufseinträge mit [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries). Jedes `NavigationHistoryEntry` Objekt hat ein [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event) Ereignis, das ausgelöst wird, wenn der Eintrag nicht mehr Teil des Browserverlaufs ist. Zum Beispiel, wenn der Benutzer dreimal zurück navigiert und dann nach anderswo hin navigiert, werden diese drei Verlaufseinträge entsorgt.

> [!NOTE]
> Die Navigation API gibt nur Verlaufs-Einträge in dem aktuellen Browsing-Kontext bekannt, die den gleichen Ursprung wie die aktuelle Seite haben (z.B. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder domainübergreifende Navigationen), was eine genaue Liste aller vorherigen Verlaufs-Einträge nur für Ihre App bereitstellt. Dadurch wird das Durchlaufen des Verlaufs ein wesentlich weniger zerbrechliches Unterfangen als mit der älteren [History API](/de/docs/Web/API/History_API).

Das `Navigation`-Objekt enthält alle Methoden, die Sie benötigen, um den Navigationsverlauf zu aktualisieren und zu durchlaufen:

- [`navigate()`](/de/docs/Web/API/Navigation/navigate) {{Experimental_Inline}}
  - : Navigiert zu einer neuen URL und erstellt einen neuen Eintrag im Navigationsverlauf.
- [`reload()`](/de/docs/Web/API/Navigation/reload) {{Experimental_Inline}}
  - : Lädt den aktuellen Eintrag im Navigationsverlauf neu.
- [`back()`](/de/docs/Web/API/Navigation/back) {{Experimental_Inline}}
  - : Navigiert zum vorherigen Eintrag im Navigationsverlauf, falls dies möglich ist.
- [`forward()`](/de/docs/Web/API/Navigation/forward) {{Experimental_Inline}}
  - : Navigiert zum nächsten Eintrag im Navigationsverlauf, falls dies möglich ist.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) {{Experimental_Inline}}
  - : Navigiert zu einem bestimmten Eintrag im Navigationsverlauf, der durch seinen Schlüsselwert identifiziert wird, welcher über die relevante Eigenschaft [`NavigationHistoryEntry.key`](/de/docs/Web/API/NavigationHistoryEntry/key) abgerufen wird.

Jede der obigen Methoden gibt ein Objekt zurück, das zwei Versprechen enthält — `{ committed, finished }`. Dies ermöglicht es der aufrufenden Funktion, mit weiteren Aktionen zu warten, bis:

- `committed` erfüllt ist, was bedeutet, dass die sichtbare URL geändert wurde und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished` erfüllt ist, was bedeutet, dass alle Versprechen, die von Ihrem `intercept()`-Handler zurückgegeben werden, erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis, wie zuvor erwähnt, ausgelöst wird.
- Entweder eines der obigen Versprechen wird abgelehnt, was bedeutet, dass die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Zustand

Die Navigation API erlaubt es Ihnen, Zustand auf jedem Verlaufseintrag zu speichern. Dies sind von Entwicklern definierte Informationen — sie können beliebig sein. Zum Beispiel könnten Sie eine `visitCount` Eigenschaft speichern wollen, die die Anzahl der Besuche einer Ansicht aufzeichnet, oder ein Objekt, das mehrere Eigenschaften im Zusammenhang mit dem UI-Zustand enthält, sodass der Zustand wiederhergestellt werden kann, wenn ein Benutzer zu dieser Ansicht zurückkehrt.

Um den Zustand eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) abzurufen, rufen Sie dessen [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) Methode auf. Der Zustand ist anfänglich `undefined`, aber wenn Zustandsinformationen auf dem Eintrag festgelegt werden, gibt er die zuvor gesetzten Zustandsinformationen zurück.

Das Setzen des Zustands ist etwas nuancierter. Sie können den Zustand nicht abrufen und dann direkt aktualisieren — die auf dem Eintrag gespeicherte Kopie ändert sich nicht. Stattdessen aktualisieren Sie es, indem Sie eine [`navigate()`](/de/docs/Web/API/Navigation/navigate) oder [`reload()`](/de/docs/Web/API/Navigation/reload) durchführen — jede dieser Methoden akzeptiert optional ein Optionsobjektparameter, das eine `state` Eigenschaft enthält, die den neuen Zustand angibt, der auf dem Verlaufseintrag gesetzt werden soll. Wenn diese Navigationen festgeschrieben werden, wird die Zustandsänderung automatisch angewendet.

In einigen Fällen wird eine Zustandsänderung jedoch unabhängig von einer Navigation oder Neuladung sein — zum Beispiel wenn eine Seite ein erweiterbares/einklappbares {{htmlelement("details")}} Element enthält. In diesem Fall möchten Sie möglicherweise den erweiterten/eingeklappten Zustand in Ihrem Verlaufseintrag speichern, damit Sie ihn wiederherstellen können, wenn der Benutzer zur Seite zurückkehrt oder seinen Browser neu startet. Solche Fälle werden mit [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) behandelt. Das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) Ereignis wird ausgelöst, wenn die Änderung des aktuellen Eintrags abgeschlossen ist.

### Einschränkungen

Es gibt einige wahrgenommene Einschränkungen bei der Navigation API:

1. Die aktuelle Spezifikation löst kein [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis beim ersten Laden einer Seite aus. Dies könnte für Websites in Ordnung sein, die Server Side Rendering (SSR) verwenden — Ihr Server könnte den korrekten Anfangszustand zurückgeben, was die schnellste Möglichkeit ist, Inhalte an Ihre Benutzer zu liefern. Aber Websites, die Client-seitigen Code verwenden, um ihre Seiten zu erstellen, benötigen möglicherweise eine zusätzliche Funktion, um die Seite zu initialisieren.
2. Die Navigation API arbeitet nur innerhalb eines einzelnen Rahmens — der obersten Seite oder eines bestimmten {{htmlelement("iframe")}}. Dies hat einige interessante Implikationen, die [in den Spezifikationen weiter dokumentiert] sind (https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites), aber in der Praxis die Verwirrung bei Entwicklern verringern werden. Die vorherige [History API](/de/docs/Web/API/History_API) hat mehrere verwirrende Randfälle, wie die Unterstützung von Frames, die die Navigation API von vornherein behandelt.
3. Momentan können Sie die Navigation API nicht verwenden, um die Verlaufsliste programmatisch zu ändern oder umzustellen. Es könnte nützlich sein, einen temporären Zustand zu haben, zum Beispiel den Benutzer zu einem temporären Modal zu navigieren, das ihn nach Informationen fragt, und dann zur vorherigen URL zurückzukehren. In diesem Fall möchten Sie den temporären Modaleintrag im Verlauf löschen, damit der Benutzer den Anwendungsfluss nicht durcheinanderbringen kann, indem er die Vorwärts-Taste drückt und es erneut öffnet.

## Schnittstellen

- [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis, das ausgelöst wird, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird. Es bietet Zugriff auf Informationen über diese Navigation, insbesondere auf das [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept), das es Ihnen ermöglicht, zu kontrollieren, was passiert, wenn die Navigation initiiert wird.
- [`Navigation`](/de/docs/Web/API/Navigation) {{Experimental_Inline}}
  - : Ermöglicht die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmgesteuerten Initialisierung von Navigationen, der Untersuchung von Navigationseinträgen im Verlauf und der Verwaltung von Navigationen, während sie stattfinden.
- [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)
  - : Repräsentiert eine kürzlich erfolgte dokumentübergreifende Navigation. Sie enthält den Navigationstyp und die aktuellen und Zielverlaufs-Einträge.
- [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event), das ausgelöst wird, wenn sich das [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat. Es bietet Zugriff auf den Navigationstyp und den vorherigen Verlaufs-Eintrag, von dem aus navigiert wurde.
- [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) {{Experimental_Inline}}
  - : Repräsentiert das Ziel, zu dem in der aktuellen Navigation navigiert wird.
- [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) {{Experimental_Inline}}
  - : Repräsentiert einen einzelnen Navigationseintrag im Verlauf.
- [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) {{Experimental_Inline}}
  - : Repräsentiert eine laufende Navigation.

## Erweiterungen zu anderen Schnittstellen

- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das mit dem aktuellen `window` verbundene [`Navigation`](/de/docs/Web/API/Navigation) Objekt zurück. Dies ist der Einstiegspunkt für die Navigation API.

## Beispiele

> [!NOTE]
> Sehen Sie sich Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/) an.

### Eine Navigation mit `intercept()` behandeln

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

### Scrollen mit `scroll()` behandeln

In diesem Beispiel der Abfangung einer Navigation beginnt die `handler()` Funktion mit dem Abrufen und Rendern einiger Artikelinhalte, ruft dann jedoch einige sekundäre Inhalte ab und rendert sie. Es ist sinnvoll, die Seite zu dem Hauptartikelinhalt zu scrollen, sobald dieser verfügbar ist, damit der Benutzer damit interagieren kann, anstatt darauf zu warten, dass auch die sekundären Inhalte gerendert werden. Um dies zu erreichen, haben wir zwischen den beiden einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) Aufruf hinzugefügt.

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

### Zu einem bestimmten Verlaufseintrag navigieren

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Zustand aktualisieren

```js
navigation.navigate(url, { state: newState });
```

Oder

```js
navigation.reload({ state: newState });
```

Oder, wenn der Zustand unabhängig von einer Navigation oder Neuladung ist:

```js
navigation.updateCurrentEntry({ state: newState });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
