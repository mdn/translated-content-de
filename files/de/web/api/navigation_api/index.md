---
title: Navigation API
slug: Web/API/Navigation_API
l10n:
  sourceCommit: 132d7ff76c89ed913b27eb85fc353adc3eb00e06
---

{{SeeCompatTable}}{{DefaultAPISidebar("Navigation API")}}

Die **Navigation API** bietet die Möglichkeit, Navigationsaktionen des Browsers zu initiieren, abzufangen und zu verwalten. Außerdem kann sie die Einträge in der Historie einer Anwendung untersuchen. Dies ist ein Nachfolger früherer Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Schwächen behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} ausgerichtet ist.

## Konzepte und Nutzung

In SPAs bleibt die Seitenvorlage während der Nutzung in der Regel gleich, und der Inhalt wird dynamisch umgeschrieben, wenn der Benutzer verschiedene Seiten oder Funktionen aufruft. Dadurch wird nur eine eindeutige Seite im Browser geladen, was das erwartete Benutzererlebnis des Navigierens zwischen verschiedenen Orten in der Verlaufshistorie stört. Dieses Problem kann teilweise über die [History API](/de/docs/Web/API/History_API) gelöst werden, aber sie ist nicht auf die Bedürfnisse von SPAs ausgelegt. Die Navigation API soll diese Lücke schließen.

Die API wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation) Eigenschaft aufgerufen, die eine Referenz auf ein globales [`Navigation`](/de/docs/Web/API/Navigation) Objekt zurückgibt. Jedes `window` Objekt hat seine eigene entsprechende `navigation` Instanz.

### Umgang mit Navigationen

Das `navigation` Interface hat mehrere zugehörige Ereignisse, das bemerkenswerteste ist das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis. Dieses wird ausgelöst, wenn [eine Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) eingeleitet wird, was bedeutet, dass Sie alle Seitennavigationen von einem zentralen Punkt aus steuern können; ideal für die Routing-Funktionalität in SPA-Frameworks. (Dies ist nicht der Fall bei der [History API](/de/docs/Web/API/History_API), bei der es manchmal schwierig ist, zu reagieren, um alle Navigationen zu erfassen.) Der `navigate` Ereignishandler erhält ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Objekt, das detaillierte Informationen enthält, einschließlich Einzelheiten über das Navigationsziel, den Typ, ob es `POST` Formulardaten oder eine Download-Anfrage enthält, und mehr.

Das `NavigationEvent` Objekt bietet auch zwei Methoden:

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) nimmt als Argument eine Rückruffunktion, die ein Versprechen zurückgibt. Es ermöglicht Ihnen zu kontrollieren, was passiert, wenn die Navigation eingeleitet wird. Zum Beispiel kann es im Fall eines SPAs verwendet werden, um relevanten neuen Inhalt in die Benutzeroberfläche zu laden, basierend auf dem Pfad der URL, zu der navigiert wird.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) ermöglicht es Ihnen, das Scroll-Verhalten des Browsers manuell zu initiieren (z.B. zu einem Fragment-Identifikator in der URL), wenn es für Ihren Code sinnvoll ist, anstatt darauf zu warten, dass der Browser es automatisch behandelt.

Sobald eine Navigation eingeleitet und Ihr `intercept()` Handler aufgerufen wurde, wird eine Instanz eines [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) Objekts erstellt (zugänglich über [`Navigation.transition`](/de/docs/Web/API/Navigation/transition)), die verwendet werden kann, um den Prozess der laufenden Navigation zu verfolgen.

> [!NOTE]
> In diesem Kontext bezieht sich "transition" auf den Übergang zwischen einem Historieneintrag und einem anderen. Es hat keine Beziehung zu CSS-Übergängen.

> [!NOTE]
> Sie können auch [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) verwenden, um die Navigation vollständig zu stoppen, für die meisten [Navigationstypen](/de/docs/Web/API/NavigateEvent/navigationType#value); die Stornierung von Traversierungen ist noch nicht implementiert.

Wenn das Versprechen der `intercept()` Handler-Funktion erfüllt wird, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis des `Navigation` Objekts ausgelöst, sodass Sie Bereinigungscode ausführen können, nachdem eine erfolgreiche Navigation abgeschlossen wurde. Wenn es abgelehnt wird, was bedeutet, dass die Navigation fehlgeschlagen ist, wird stattdessen [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) ausgelöst, sodass Sie den Fehlerfall anmutig handhaben können. Es gibt auch eine [`finished`](/de/docs/Web/API/NavigationTransition/finished) Eigenschaft am `NavigationTransition` Objekt, die zu demselben Zeitpunkt erfüllt oder abgelehnt wird, an dem die oben genannten Ereignisse ausgelöst werden, und einen anderen Weg bietet, um die Erfolg- und Fehlerfälle zu handhaben.

> [!NOTE]
> Bevor die Navigation API verfügbar war, mussten Sie, um etwas Ähnliches zu tun, alle Klickereignisse auf Links abhören, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState) Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und das würde nicht alle Navigationen behandeln - nur benutzerinitiierte Linkklicks.

### Programmatische Aktualisierung und Durchlaufen der Navigation-Historie

Wenn der Benutzer Ihre Anwendung durchläuft, wird bei jedem neuen Ort, zu dem navigiert wird, ein Eintrag in der Navigation-Historie erstellt. Jeder Historieneintrag wird durch eine eindeutige Instanz eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekts dargestellt. Diese enthalten mehrere Eigenschaften wie den Schlüssel, die URL und Informationen zum Status des Eintrags. Sie können den Eintrag, auf dem sich der Benutzer gerade befindet, mit [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) abrufen und ein Array aller vorhandenen Historieneinträge mit [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries). Jedes `NavigationHistoryEntry` Objekt hat ein [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event) Ereignis, das ausgelöst wird, wenn der Eintrag nicht mehr Teil der Browser-Historie ist. Wenn der Benutzer zum Beispiel dreimal zurücknavigiert und dann nach vorne zu einem anderen Ort navigiert, werden diese drei Historieneinträge entsorgt.

> [!NOTE]
> Die Navigation API gibt nur die Historieneinträge im aktuellen Browserkontext frei, die denselben Ursprung wie die aktuelle Seite haben (z.B. keine Navigationen in eingebetteten {{htmlelement("iframe")}}s oder über Origin-Grenzen hinweg), und bietet eine genaue Liste aller vorherigen Historieneinträge nur für Ihre App. Dies macht das Durchlaufen der Historie zu einer viel weniger fragilen Angelegenheit als mit der älteren [History API](/de/docs/Web/API/History_API).

Das `Navigation` Objekt enthält alle Methoden, die Sie benötigen, um die Navigation-Historie zu aktualisieren und durch sie hindurchzugehen:

- [`navigate()`](/de/docs/Web/API/Navigation/navigate) {{Experimental_Inline}}
  - : Navigiert zu einer neuen URL und erstellt einen neuen Eintrag in der Navigation-Historie.
- [`reload()`](/de/docs/Web/API/Navigation/reload) {{Experimental_Inline}}
  - : Lädt den aktuellen Eintrag der Navigation-Historie neu.
- [`back()`](/de/docs/Web/API/Navigation/back) {{Experimental_Inline}}
  - : Navigiert zum vorherigen Eintrag der Navigation-Historie, falls möglich.
- [`forward()`](/de/docs/Web/API/Navigation/forward) {{Experimental_Inline}}
  - : Navigiert zum nächsten Eintrag der Navigation-Historie, falls möglich.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) {{Experimental_Inline}}
  - : Navigiert zu einem spezifischen Eintrag der Navigation-Historie, identifiziert durch seinen Schlüsselwert, der über die relevante Eigenschaft [`NavigationHistoryEntry.key`](/de/docs/Web/API/NavigationHistoryEntry/key) des Eintrags abgerufen wird.

Jede dieser Methoden gibt ein Objekt zurück, das zwei Versprechen enthält — `{ committed, finished }`. Dies ermöglicht es der aufrufenden Funktion, darauf zu warten, weitere Aktionen zu ergreifen, bis:

- `committed` erfüllt ist, was bedeutet, dass sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished` erfüllt ist, was bedeutet, dass alle von Ihrem `intercept()` Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht der Erfüllung des Versprechens [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished), wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis ausgelöst wird, wie zuvor erwähnt.
- eines der oben genannten Versprechen abgelehnt wird, was bedeutet, dass die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Zustand

Die Navigation API ermöglicht es Ihnen, Zustand auf jedem Historieneintrag zu speichern. Dies sind vom Entwickler definierte Informationen - es kann alles Mögliche sein. Zum Beispiel könnten Sie einen `visitCount` Eigenschaft speichern wollen, die die Anzahl der Besuche einer Ansicht aufzeichnet, oder ein Objekt, das mehrere Eigenschaften des UI-Zustands enthält, damit der Zustand wiederhergestellt werden kann, wenn ein Benutzer zu dieser Ansicht zurückkehrt.

Um den Zustand eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) abzurufen, rufen Sie dessen [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) Methode auf. Er ist anfänglich `undefined`, aber wenn Statusinformationen auf dem Eintrag gesetzt werden, wird er die zuvor gesetzten Statusinformationen zurückgeben.

Das Setzen des Zustands ist etwas nuancierter. Sie können den Statuswert nicht abrufen und dann direkt aktualisieren - die Kopie, die auf dem Eintrag gespeichert ist, wird sich nicht ändern. Stattdessen aktualisieren Sie ihn, während Sie ein [`navigate()`](/de/docs/Web/API/Navigation/navigate) oder [`reload()`](/de/docs/Web/API/Navigation/reload) durchführen - jede dieser Methoden nimmt optional ein Objektparameter-Optionen entgegen, welches eine `state` Eigenschaft enthält, die den neuen Status enthält, der auf dem Historieneintrag festgelegt wird. Wenn diese Navigationen ausgeführt werden, wird die Statusänderung automatisch angewendet.

In einigen Fällen jedoch wird eine Statusänderung unabhängig von einer Navigation oder einem Reload sein - zum Beispiel, wenn eine Seite ein erweiterbares/zusammenklappbares {{htmlelement("details")}} Element enthält. In diesem Fall möchten Sie möglicherweise den erweiterten/zusammengeklappten Zustand in Ihrem Historieneintrag speichern, um ihn wiederherzustellen, wenn der Benutzer zur Seite zurückkehrt oder seinen Browser neu startet. Fälle wie diese werden mit [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) behandelt. Der [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) wird ausgelöst, wenn die aktuelle Eintragsänderung abgeschlossen ist.

### Einschränkungen

Es gibt einige wahrgenommene Einschränkungen mit der Navigation API:

1. Die aktuelle Spezifikation löst kein [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis beim ersten Laden einer Seite aus. Dies könnte für Websites, die Server Side Rendering (SSR) verwenden, akzeptabel sein - Ihr Server könnte den korrekten Anfangszustand zurückgeben, was der schnellste Weg ist, um Inhalte an Ihre Benutzer zu liefern. Aber Websites, die clientseitigen Code nutzen, um ihre Seiten zu erstellen, benötigen möglicherweise eine zusätzliche Funktion, um die Seite zu initialisieren.
2. Die Navigation API wirkt sich nur auf einen einzigen Frame aus - die oberste Seite oder ein spezifisches {{htmlelement("iframe")}}. Dies hat einige interessante Implikationen, die [weiterhin in der Spezifikation dokumentiert sind](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites), aber in der Praxis die Verwirrung bei Entwicklern reduzieren wird. Die vorherige [History API](/de/docs/Web/API/History_API) hat mehrere verwirrende Randfälle, wie die Unterstützung von Frames, die die Navigation API von vornherein behandelt.
3. Sie können derzeit die Navigation API nicht nutzen, um die Historieliste programmgesteuert zu verändern oder umzustellen. Es könnte nützlich sein, einen temporären Zustand zu haben, zum Beispiel, um den Benutzer zu einem temporären Modal zu navigieren, das sie nach einigen Informationen fragt, und dann zur vorherigen URL zurückzugehen. In diesem Fall möchten Sie den temporären Modal-Navigationseintrag löschen, damit der Benutzer den Anwendungsfluss nicht stören kann, indem er die Vorwärtstaste drückt und ihn erneut öffnet.

## Schnittstellen

- [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis, das ausgelöst wird, wenn [eine Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) eingeleitet wird. Es bietet Zugriff auf Informationen über diese Navigation, insbesondere auf das [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept), welches es Ihnen ermöglicht zu kontrollieren, was passiert, wenn die Navigation eingeleitet wird.
- [`Navigation`](/de/docs/Web/API/Navigation) {{Experimental_Inline}}
  - : Ermöglicht die Steuerung aller Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmgesteuerten Initiierung von Navigationen, der Untersuchung von Navigation-Historieneinträgen und der Verwaltung von Navigationen während sie passieren.
- [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) {{Experimental_Inline}}
  - : Repräsentiert eine kürzlich erfolgte dokumentübergreifende Navigation. Sie enthält den Navigationstyp und aktuelle sowie Ziel-Dokumenthistorieneinträge.
- [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) Ereignis, das ausgelöst wird, wenn sich der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat. Es bietet Zugriff auf den Navigationstyp und den vorherigen Historieneintrag, von dem aus navigiert wurde.
- [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) {{Experimental_Inline}}
  - : Repräsentiert das Ziel, zu dem in der aktuellen Navigation navigiert wird.
- [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) {{Experimental_Inline}}
  - : Repräsentiert einen einzelnen Navigation-Historieneintrag.
- [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) {{Experimental_Inline}}
  - : Repräsentiert eine laufende Navigation.

## Erweiterungen zu anderen Schnittstellen

- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das mit dem aktuellen `window` assoziierte [`Navigation`](/de/docs/Web/API/Navigation) Objekt zurück. Dies ist der Einstiegspunkt für die Navigation API.

## Beispiele

> [!NOTE]
> Schauen Sie sich Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/) an.

### Umgang mit einer Navigation mit `intercept()`

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

### Umgang mit dem Scrollen mit `scroll()`

In diesem Beispiel des Abfangens einer Navigation beginnt die `handler()` Funktion damit, einige Artikelinhalte abzurufen und zu rendern, aber dann mit dem Abrufen und Rendern von zusätzlichem Inhalt fortzufahren. Es macht Sinn, die Seite so schnell wie möglich zum Hauptartikelinhalt zu scrollen, damit der Benutzer mit ihm interagieren kann, anstatt darauf zu warten, dass auch der zusätzliche Inhalt gerendert wird. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) Aufruf zwischen den beiden hinzugefügt.

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

### Durchlaufen zu einem bestimmten Historieneintrag

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Aktualisierung des Zustands

```js
navigation.navigate(url, { state: newState });
```

Oder

```js
navigation.reload({ state: newState });
```

Oder wenn der Zustand unabhängig von einer Navigation oder einem Reload ist:

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
