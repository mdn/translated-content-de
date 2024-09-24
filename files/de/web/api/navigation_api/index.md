---
title: Navigations-API
slug: Web/API/Navigation_API
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{SeeCompatTable}}{{DefaultAPISidebar("Navigation API")}}

Die **Navigations-API** bietet die Möglichkeit, Navigationsaktionen im Browser zu initiieren, abzufangen und zu verwalten. Sie kann auch die Einträge in der Verlaufsliste einer Anwendung untersuchen. Diese ist ein Nachfolger früherer Webplattform-Funktionen wie der {{domxref("History API", "", "", "nocode")}} und {{domxref("window.location")}}, die deren Nachteile behebt und speziell auf die Bedürfnisse von {{glossary("SPA", "Single-Page-Applications (SPAs)")}} ausgerichtet ist.

## Konzepte und Nutzung

In SPAs bleibt das Seiten-Template während der Nutzung meist gleich, und der Inhalt wird dynamisch überschrieben, wenn der Benutzer verschiedene Seiten oder Funktionen besucht. Daher wird nur eine einzige Seite im Browser geladen, was die erwartete Benutzererfahrung des Navigierens zwischen verschiedenen Stellen im Verlauf stört. Dieses Problem kann teilweise über die {{domxref("History API", "", "", "nocode")}} gelöst werden, jedoch ist sie nicht für die Bedürfnisse von SPAs konzipiert. Die Navigations-API zielt darauf ab, diese Lücke zu schließen.

Auf die API wird über die {{domxref("Window.navigation")}}-Eigenschaft zugegriffen, die eine Referenz auf ein globales {{domxref("Navigation")}}-Objekt zurückgibt. Jedes `window`-Objekt hat seine eigene entsprechende `navigation`-Instanz.

### Umgang mit Navigationsvorgängen

Das `navigation`-Interface hat mehrere zugehörige Ereignisse, das bemerkenswerteste ist das {{domxref("Navigation/navigate_event", "navigate")}}-Ereignis. Dieses wird ausgelöst, wenn [jegliche Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, was bedeutet, dass Sie alle Seiten-Navigationen von einem zentralen Ort aus steuern können, ideal für Routing-Funktionen in SPA-Frameworks. (Dies ist nicht der Fall bei der {{domxref("History API", "", "", "nocode")}}, bei der es manchmal schwierig ist, auf alle Navigationsvorgänge zu reagieren.) Der `navigate`-Eventhandler erhält ein {{domxref("NavigateEvent")}}-Objekt, das detaillierte Informationen enthält, einschließlich Details zum Navigationsziel, Typ, ob es `POST`-Formulardaten oder eine Download-Anfrage enthält und mehr.

Das `NavigateEvent`-Objekt bietet auch zwei Methoden:

- {{domxref("NavigateEvent.intercept", "intercept()")}} nimmt als Argument eine Callback-Handlerfunktion entgegen, die ein Promise zurückgibt. Sie erlaubt Ihnen zu steuern, was passiert, wenn die Navigation initiiert wird. Zum Beispiel kann es im Fall einer SPA verwendet werden, um relevante neue Inhalte basierend auf dem Pfad der URL, zu der navigiert wurde, in die Benutzeroberfläche zu laden.
- {{domxref("NavigateEvent.scroll", "scroll()")}} erlaubt Ihnen, das Scroll-Verhalten des Browsers manuell zu initiieren (z.B. zu einer Fragmentkennung in der URL), wenn es für Ihren Code sinnvoll ist, anstatt darauf zu warten, dass der Browser es automatisch behandelt.

Sobald eine Navigation initiiert wird und Ihr `intercept()`-Handler aufgerufen wird, wird eine Instanz des {{domxref("NavigationTransition")}}-Objekts erstellt (zugänglich über {{domxref("Navigation.transition")}}), die verwendet werden kann, um den laufenden Navigationsprozess zu verfolgen.

> [!NOTE]
> In diesem Zusammenhang bezieht sich "Übergang" auf den Übergang zwischen einem Verlaufseintrag und einem anderen. Es hat keinen Bezug zu CSS-Übergängen.

> [!NOTE]
> Sie können auch {{domxref("Event.preventDefault", "preventDefault()")}} aufrufen, um die Navigation für die meisten [Navigationstypen](/de/docs/Web/API/NavigateEvent/navigationType#value) vollständig zu stoppen; die Stornierung von Durchlauf-Navigationen ist noch nicht implementiert.

Wenn das Promise der `intercept()`-Handlerfunktion erfüllt wird, wird das {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}}-Ereignis des `Navigation`-Objekts ausgelöst, sodass Sie Aufräumarbeiten nach einer erfolgreichen Navigation durchführen können. Wenn es abgelehnt wird, was bedeutet, dass die Navigation fehlgeschlagen ist, wird stattdessen {{domxref("Navigation/navigateerror_event", "navigateerror")}} ausgelöst, was Ihnen ermöglicht, den Fehlerfall elegant zu behandeln. Es gibt auch eine {{domxref("NavigationTransition.finished", "finished")}}-Eigenschaft auf dem `NavigationTransition`-Objekt, die erfüllt oder abgelehnt wird, sobald die oben genannten Ereignisse ausgelöst werden, und einen weiteren Weg zur Behandlung der Erfolgs- und Fehlerfälle bietet.

> [!NOTE]
> Bevor die Navigations-API verfügbar war, hätten Sie etwas Ähnliches tun müssen, indem Sie alle Klickereignisse auf Links überwachen, `e.preventDefault()` aufrufen, den entsprechenden {{domxref("History.pushState()")}}-Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und das hätte nicht alle Navigationsvorgänge abgedeckt – nur benutzerinitiierte Link-Klicks.

### Programmatisches Aktualisieren und Durchlaufen der Navigationshistorie

Während der Benutzer durch Ihre Anwendung navigiert, führt jede neue besuchte Stelle zur Erstellung eines Navigationsverlaufseintrags. Jeder Verlaufseintrag wird durch eine eindeutige {{domxref("NavigationHistoryEntry")}}-Objektinstanz dargestellt. Diese enthalten mehrere Eigenschaften wie den Schlüssel des Eintrags, die URL und Statusinformationen. Sie können den Eintrag abrufen, den der Benutzer gerade besucht, mit {{domxref("Navigation.currentEntry")}}, und ein Array aller existierenden Verlaufseinträge mit {{domxref("Navigation.entries()")}}. Jedes `NavigationHistoryEntry`-Objekt hat ein {{domxref("NavigationHistoryEntry/dispose_event", "dispose")}}-Ereignis, das ausgelöst wird, wenn der Eintrag nicht länger Teil des Browserverlaufs ist. Zum Beispiel, wenn der Benutzer dreimal zurück navigiert und dann woanders hin navigiert, werden diese drei Verlaufseinträge entsorgt.

> [!NOTE]
> Die Navigations-API gibt nur Verlaufseinträge preis, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z.B. nicht Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder über Ursprung hinweg), und bietet eine genaue Liste aller vorherigen Verlaufseinträge nur für Ihre Anwendung. Dies macht das Durchlaufen des Verlaufs zu einem weitaus weniger fragilen Unterfangen als mit der älteren {{domxref("History API", "", "", "nocode")}}.

Das `Navigation`-Objekt enthält alle Methoden, die Sie benötigen, um den Navigationsverlauf zu aktualisieren und zu durchlaufen:

- {{domxref("Navigation.navigate", "navigate()")}} {{Experimental_Inline}}
  - : Navigiert zu einer neuen URL und erstellt einen neuen Navigationsverlaufseintrag.
- {{domxref("Navigation.reload", "reload()")}} {{Experimental_Inline}}
  - : Lädt den aktuellen Navigationsverlaufseintrag neu.
- {{domxref("Navigation.back", "back()")}} {{Experimental_Inline}}
  - : Navigiert zum vorherigen Navigationsverlaufseintrag, wenn das möglich ist.
- {{domxref("Navigation.forward", "forward()")}} {{Experimental_Inline}}
  - : Navigiert zum nächsten Navigationsverlaufseintrag, wenn das möglich ist.
- {{domxref("Navigation.traverseTo", "traverseTo()")}} {{Experimental_Inline}}
  - : Navigiert zu einem bestimmten Navigationsverlaufseintrag, der durch seinen Schlüsselwert identifiziert wird, der über die relevante Eigenschaft {{domxref("NavigationHistoryEntry.key")}} des Eintrags erhalten wird.

Jede der oben genannten Methoden gibt ein Objekt zurück, das zwei Promises enthält – `{ committed, finished }`. Dies erlaubt der aufrufenden Funktion, zu warten, bevor weitere Maßnahmen ergriffen werden, bis:

- `committed` erfüllt ist, was bedeutet, dass die sichtbare URL geändert wurde und ein neues {{domxref("NavigationHistoryEntry")}} erstellt wurde.
- `finished` erfüllt ist, was bedeutet, dass alle von Ihrem `intercept()`-Handler zurückgegebenen Promises erfüllt sind. Dies entspricht dem Erfüllen des {{domxref("NavigationTransition.finished")}}-Promises, wenn das {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}}-Ereignis ausgelöst wird, wie zuvor erwähnt.
- eines der oben genannten Promises abgelehnt wird, was bedeutet, dass die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Zustand

Die Navigations-API erlaubt es Ihnen, Zustand auf jedem Verlaufseintrag zu speichern. Dies sind vom Entwickler definierte Informationen – es kann alles sein, was Sie möchten. Beispielsweise könnten Sie eine `visitCount`-Eigenschaft speichern, die die Anzahl der Besuche einer Ansicht zählt, oder ein Objekt, das mehrere Eigenschaften im Zusammenhang mit dem UI-Zustand enthält, sodass der Zustand wiederhergestellt werden kann, wenn ein Benutzer zu dieser Ansicht zurückkehrt.

Um den Zustand eines {{domxref("NavigationHistoryEntry")}} zu erhalten, rufen Sie dessen Methode {{domxref("NavigationHistoryEntry.getState", "getState()")}} auf. Es ist zunächst `undefined`, aber wenn Statusinformationen auf dem Eintrag gesetzt werden, wird es die zuvor gesetzten Statusinformationen zurückgeben.

Das Setzen des Zustands ist etwas komplizierter. Sie können den Zustand nicht einfach abrufen und dann direkt aktualisieren – die im Eintrag gespeicherte Kopie wird sich nicht ändern. Stattdessen aktualisieren Sie ihn während der Durchführung eines {{domxref("Navigation.navigate", "navigate()")}} oder {{domxref("Navigation.reload", "reload()")}} – jede dieser Methoden nimmt optional ein Optionsobjekt als Parameter entgegen, das eine `state`-Eigenschaft enthält, die den neuen Zustand zum Setzen auf dem Verlaufseintrag enthält. Wenn diese Navigationen festgeschrieben werden, wird die Zustandsänderung automatisch angewendet.

In einigen Fällen jedoch erfolgt eine Zustandsänderung unabhängig von einer Navigation oder einem Neuladen – zum Beispiel wenn eine Seite ein erweiterbares/einklappbares {{htmlelement("details")}}-Element enthält. In diesem Fall möchten Sie möglicherweise den ausgeklappten/eingeklappten Zustand in Ihrem Verlaufseintrag speichern, sodass er wiederhergestellt werden kann, wenn der Benutzer zur Seite zurückkehrt oder seinen Browser neu startet. Solche Fälle werden mit {{domxref("Navigation.updateCurrentEntry()")}} gehandhabt. Das {{domxref("Navigation/currententrychange_event", "currententrychange")}}-Ereignis wird ausgelöst, wenn die aktuelle Eintragsänderung abgeschlossen ist.

### Einschränkungen

Es gibt einige wahrgenommene Einschränkungen der Navigations-API:

1. Die aktuelle Spezifikation löst kein {{domxref("Navigation.navigate_event", "navigate")}}-Ereignis beim ersten Laden einer Seite aus. Dies könnte für Websites, die Server-Side Rendering (SSR) verwenden, in Ordnung sein – Ihr Server könnte den richtigen Anfangszustand zurückgeben, was der schnellste Weg ist, um Inhalte zu Benutzern zu bringen. Aber Websites, die client-side Code verwenden, um ihre Seiten zu erstellen, benötigen möglicherweise eine zusätzliche Funktion zum Initialisieren der Seite.
2. Die Navigations-API operiert nur innerhalb eines einzelnen Rahmens – der obersten Seite oder einem einzelnen spezifischen {{htmlelement("iframe")}}. Dies hat einige interessante Implikationen, die [weiter in der Spezifikation dokumentiert sind](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites), wird aber in der Praxis die Verwirrung der Entwickler reduzieren. Die vorherige {{domxref("History API", "", "", "nocode")}} hat einige verwirrende Randfälle, wie Unterstützung für Rahmen, die die Navigations-API von vornherein behandelt.
3. Derzeit können Sie mit der Navigations-API die Verlaufsliste nicht programmatisch ändern oder umarrangieren. Es könnte nützlich sein, einen temporären Zustand zu haben, zum Beispiel wenn Sie den Benutzer zu einem temporären Modal navigieren, um Informationen abzufragen, und dann zur vorherigen URL zurückzukehren. In diesem Fall möchten Sie den temporären Modal-Navigationseintrag löschen, damit der Benutzer den Anwendungsfluss nicht durch Drücken der Vorwärtstaste durcheinanderbringen und ihn erneut öffnen kann.

## Schnittstellen

- {{domxref("NavigateEvent")}} {{Experimental_Inline}}
  - : Ereignisobjekt für das {{domxref("Navigation/navigate_event", "navigate")}}-Ereignis, das ausgelöst wird, wenn [jegliche Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird. Es bietet Zugriff auf Informationen über diese Navigation und vor allem das {{domxref("NavigateEvent.intercept", "intercept()")}}, das es Ihnen ermöglicht, zu steuern, was passiert, wenn die Navigation initiiert wird.
- {{domxref("Navigation")}} {{Experimental_Inline}}
  - : Ermöglicht die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmatischen Initiierung von Navigationen, der Untersuchung von Verlaufseinträgen und der Verwaltung von Navigationen, sobald diese stattfinden.
- {{domxref("NavigationActivation")}}
  - : Repräsentiert eine kürzliche Kreuz-Dokument-Navigation. Es enthält den Navigationstyp und aktuelle sowie Ziel-Dokument-Verlaufseinträge.
- {{domxref("NavigationCurrentEntryChangeEvent")}} {{Experimental_Inline}}
  - : Ereignisobjekt für das {{domxref("Navigation/currententrychange_event", "currententrychange")}}-Ereignis, das ausgelöst wird, wenn sich {{domxref("Navigation.currentEntry")}} geändert hat. Es bietet Zugriff auf den Navigationstyp und den vorherigen Verlaufseintrag, von dem navigiert wurde.
- {{domxref("NavigationDestination")}} {{Experimental_Inline}}
  - : Repräsentiert das Ziel, zu dem im aktuellen Navigationsvorgang navigiert wird.
- {{domxref("NavigationHistoryEntry")}} {{Experimental_Inline}}
  - : Repräsentiert einen einzelnen Navigationsverlaufseintrag.
- {{domxref("NavigationTransition")}} {{Experimental_Inline}}
  - : Repräsentiert eine laufende Navigation.

## Erweiterungen anderer Schnittstellen

- {{domxref("Window.navigation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das dem aktuellen `window` zugeordnete {{domxref("Navigation")}}-Objekt zurück. Dies ist der Einstiegspunkt für die Navigations-API.

## Beispiele

> [!NOTE]
> Schauen Sie sich Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/) an.

### Umgang mit einer Navigation mit `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // Frühes Verlassen, wenn diese Navigation nicht abgefangen werden sollte,
  // z.B. wenn die Navigation Cross-Origin oder eine Download-Anfrage ist
  if (shouldNotIntercept(event)) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // Die URL hat sich bereits geändert, daher wird ein Platzhalter angezeigt,
        // während die neuen Inhalte geladen werden, etwa ein Spinner oder eine Ladeanimation
        renderArticlePagePlaceholder();

        // Neue Inhalte abrufen und anzeigen, wenn sie fertig sind
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }
});
```

### Umgang mit dem Scrollen mittels `scroll()`

In diesem Beispiel des Abfangens einer Navigation beginnt die `handler()`-Funktion damit, einige Artikelinhalte abzurufen und darzustellen, ruft dann aber zusätzliche Inhalte danach ab und stellt sie dar. Es ist sinnvoll, die Seite zu den Hauptartikelinhalten zu scrollen, sobald sie verfügbar sind, damit der Benutzer damit interagieren kann, anstatt darauf zu warten, dass auch die zusätzlichen Inhalte gerendert werden. Um dies zu erreichen, haben wir einen {{domxref("NavigateEvent.scroll", "scroll()")}}-Aufruf zwischen den beiden eingefügt.

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
// Beim Start von JS den Schlüssel der ersten geladenen Seite abrufen
// damit der Benutzer immer dorthin zurückkehren kann.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Wegnavigieren, aber der Button wird immer funktionieren.
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Moderne client-side Navigation: die Navigations-API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigations-API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
