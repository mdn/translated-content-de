---
title: Navigation API
slug: Web/API/Navigation_API
l10n:
  sourceCommit: 602754279b511738a24c27adbdaccd5471185615
---

{{SeeCompatTable}}{{DefaultAPISidebar("Navigation API")}}

Die **Navigation API** bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Verlaufseinträge einer Anwendung untersuchen. Dies ist ein Nachfolger früherer Webplattformfunktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), der deren Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} ausgerichtet ist.

## Konzepte und Verwendung

In SPAs bleibt die Seitenvorlage während der Nutzung in der Regel gleich, und der Inhalt wird dynamisch neu geschrieben, während der Benutzer verschiedene Seiten oder Funktionen besucht. Dadurch wird nur eine einzige, eindeutige Seite im Browser geladen, was die erwartete Benutzererfahrung des Vorwärts- und Rückwärtsnavigierens zwischen verschiedenen Orten im Verlauf unterbricht. Dieses Problem kann bis zu einem gewissen Grad durch die [History API](/de/docs/Web/API/History_API) gelöst werden, aber diese ist nicht für die Bedürfnisse von SPAs konzipiert. Die Navigation API zielt darauf ab, diese Lücke zu schließen.

Auf die API wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation)-Eigenschaft zugegriffen, die eine Referenz auf ein globales [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurückgibt. Jedes `window`-Objekt hat seine eigene entsprechende `navigation`-Instanz.

### Handhabung von Navigationsvorgängen

Das `navigation`-Interface hat mehrere zugehörige Events, wobei das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Event das bemerkenswerteste ist. Dieses wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, was bedeutet, dass Sie alle Seitennavigationsvorgänge von einem zentralen Ort aus steuern können, ideal für Routing-Funktionen in SPA-Frameworks. (Dies ist nicht der Fall bei der [History API](/de/docs/Web/API/History_API), bei der es manchmal schwierig ist, auf alle Navigationsvorgänge zu reagieren.) Der `navigate`-Event-Handler erhält ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Objekt, das detaillierte Informationen einschließlich Details zum Navigationsziel, Typ, ob es `POST`-Formulardaten oder eine Download-Anfrage enthält, und mehr beinhaltet.

Das `NavigationEvent`-Objekt bietet auch zwei Methoden:

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) ermöglicht es Ihnen, benutzerdefiniertes Verhalten für Navigationsvorgänge zu spezifizieren, und kann die folgenden Argumente annehmen:
  - Callback-Handler-Funktionen, die es Ihnen ermöglichen zu bestimmen, was passiert, sowohl _wenn_ die Navigation festgeschrieben wird, als auch _unmittelbar bevor_ die Navigation festgeschrieben wird. Zum Beispiel könnten Sie relevante neue Inhalte in die Benutzeroberfläche laden, basierend auf dem Pfad der URL, zu dem navigiert wurde, oder den Browser auf eine Anmeldeseite umleiten, wenn die URL auf eine eingeschränkte Seite zeigt und der Benutzer nicht angemeldet ist.
  - Eigenschaften, die es Ihnen ermöglichen, das standardmäßige Fokus- und Scrollverhalten des Browsers nach der Navigation zu aktivieren oder zu deaktivieren.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) ermöglicht es Ihnen, das Scrollverhalten des Browsers manuell zu initialisieren (z. B. zu einem Fragment-Identifier in der URL), falls dies für Ihren Code sinnvoll ist, anstatt darauf zu warten, dass der Browser es automatisch behandelt.

Sobald eine Navigation initiiert wird und Ihr `intercept()`-Handler aufgerufen wird, wird eine Instanz eines [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekts erstellt (erreichbar über [`Navigation.transition`](/de/docs/Web/API/Navigation/transition)), die verwendet werden kann, um den Prozess der laufenden Navigation zu verfolgen.

> [!NOTE]
> In diesem Kontext bezieht sich "transition" auf den Übergang zwischen einem Verlaufs-Eintrag und einem anderen. Es steht nicht im Zusammenhang mit CSS-Übergängen.

> [!NOTE]
> Sie können auch [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um die Navigation vollständig zu stoppen, für die meisten [Navigationstypen](/de/docs/Web/API/NavigateEvent/navigationType#value); die Abbruchfunktion für Navigationsvorgänge ist noch nicht implementiert.

Wenn die Versprechen, die von den `intercept()`-Handler-Funktionen zurückgegeben werden, erfüllt werden, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Event des `Navigation`-Objekts ausgelöst, wodurch Sie Bereinigungs-Code nach Abschluss einer erfolgreichen Navigation ausführen können. Wenn sie abgelehnt werden, was bedeutet, dass die Navigation fehlgeschlagen ist, wird stattdessen [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) ausgelöst, was Ihnen ermöglicht, den Fehlerfall elegant zu handhaben. Es gibt auch eine `finished`-Eigenschaft am Rückgabewert von Navigationsmethoden (wie [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), die sich erfüllt oder ablehnt, wenn die oben genannten Events ausgelöst werden, und bietet einen weiteren Weg zur Handhabung der Erfolgs- und Fehlerfälle.

> [!NOTE]
> Bevor die Navigation API verfügbar war, mussten Sie, um etwas Ähnliches zu tun, alle Klick-Events auf Links abhören, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und dies würde nicht alle Navigationsvorgänge behandeln - nur vom Benutzer initiierte Link-Klicks.

### Programmatische Aktualisierung und Durchquerung des Navigationsverlaufs

Während der Benutzer Ihre Anwendung durchläuft, führt jeder neue besuchte Ort zur Erstellung eines Navigationsverlaufs-Eintrags. Jeder Verlaufs-Eintrag wird durch eine eindeutige Instanz eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekts repräsentiert. Diese enthalten mehrere Eigenschaften wie den Schlüssel des Eintrags, die URL und Zustandsinformationen. Sie können den Eintrag abrufen, auf dem sich der Benutzer gerade befindet, indem Sie [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) verwenden, und ein Array aller bestehenden Verlaufs-Einträge mit [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries). Jedes `NavigationHistoryEntry`-Objekt hat ein [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event)-Event, das ausgelöst wird, wenn der Eintrag nicht mehr Teil des Browserverlaufs ist. Wenn der Benutzer zum Beispiel dreimal zurück navigiert und dann irgendwo anders hin navigiert, werden diese drei Verlaufs-Einträge entfernt.

> [!NOTE]
> Die Navigation API gibt nur Verlaufs-Einträge in dem aktuellen Browsing-Kontext preis, die den gleichen Ursprung wie die aktuelle Seite haben (z. B. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}, oder Cross-Origin-Navigationen), und liefert eine genaue Liste aller vorherigen Verlaufs-Einträge nur für Ihre App. Dies macht das Durchqueren des Verlaufs zu einer viel weniger anfälligen Aufgabe als mit der älteren [History API](/de/docs/Web/API/History_API).

Das `Navigation`-Objekt enthält alle Methoden, die Sie benötigen, um den Navigationsverlauf zu aktualisieren und zu durchqueren:

- [`navigate()`](/de/docs/Web/API/Navigation/navigate) {{Experimental_Inline}}
  - : Navigiert zu einer neuen URL und erstellt einen neuen Navigationsverlaufs-Eintrag.
- [`reload()`](/de/docs/Web/API/Navigation/reload) {{Experimental_Inline}}
  - : Lädt den aktuellen Navigationsverlaufs-Eintrag neu.
- [`back()`](/de/docs/Web/API/Navigation/back) {{Experimental_Inline}}
  - : Navigiert zum vorherigen Navigationsverlaufs-Eintrag, falls dies möglich ist.
- [`forward()`](/de/docs/Web/API/Navigation/forward) {{Experimental_Inline}}
  - : Navigiert zum nächsten Navigationsverlaufs-Eintrag, falls dies möglich ist.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) {{Experimental_Inline}}
  - : Navigiert zu einem bestimmten Navigationsverlaufs-Eintrag, der durch seinen Schlüsselwert identifiziert wird, welcher über die entsprechende Eigenschaft [`NavigationHistoryEntry.key`](/de/docs/Web/API/NavigationHistoryEntry/key) des Eintrags abgerufen wird.

Jede der oben genannten Methoden gibt ein Objekt zurück, das zwei Versprechen enthält — `{ committed, finished }`. Dies ermöglicht der aufrufenden Funktion, mit weiteren Aktionen zu warten, bis:

- `committed` erfüllt wird, was bedeutet, dass die sichtbare URL geändert wurde und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished` erfüllt wird, was bedeutet, dass alle von Ihrem `intercept()`-Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Event ausgelöst wird, wie bereits erwähnt.
- Eines der oben genannten Versprechen abgelehnt wird, was bedeutet, dass die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Zustand

Die Navigation API ermöglicht es Ihnen, Zustandsinformationen auf jedem Verlaufs-Eintrag zu speichern. Dies sind vom Entwickler definierte Informationen — sie können beliebig sein. Zum Beispiel könnten Sie ein `visitCount`-Eigenschaft speichern, die die Anzahl der Besuche einer Ansicht aufzeichnet, oder ein Objekt mit mehreren Eigenschaften, die sich auf den UI-Zustand beziehen, damit dieser Zustand beim Zurückkehren des Benutzers zu dieser Ansicht wiederhergestellt werden kann.

Um den Zustand eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) abzurufen, rufen Sie dessen [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState)-Methode auf. Er ist anfangs `undefined`, aber wenn Zustandsinformationen auf dem Eintrag gesetzt werden, gibt er die vorher festgelegten Zustandsinformationen zurück.

Das Setzen des Zustands ist etwas komplexer. Sie können den Zustandswert nicht abrufen und dann direkt aktualisieren — die Kopie, die auf dem Eintrag gespeichert ist, ändert sich nicht. Stattdessen aktualisieren Sie ihn während des Ausführens eines [`navigate()`](/de/docs/Web/API/Navigation/navigate) oder [`reload()`](/de/docs/Web/API/Navigation/reload) — jede dieser Methoden nimmt optional ein Options-Objekt als Parameter an, das eine `state`-Eigenschaft enthält, die den neuen Zustand enthält, der auf dem Verlaufs-Eintrag gesetzt werden soll. Wenn diese Navigationen festgeschrieben werden, wird die Zustandsänderung automatisch angewendet.

In einigen Fällen ist jedoch eine Zustandsänderung unabhängig von einer Navigation oder einem Neuladen — zum Beispiel wenn eine Seite ein erweiterbares/zusammenklappbares {{htmlelement("details")}}-Element enthält. In diesem Fall möchten Sie möglicherweise den erweiterten/zusammengeklappten Zustand in Ihrem Verlaufs-Eintrag speichern, damit er wiederhergestellt wird, wenn der Benutzer zur Seite zurückkehrt oder seinen Browser neu startet. Solche Fälle werden mit [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) behandelt. Das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) wird ausgelöst, wenn der aktuelle Eintrag vollständig geändert wurde.

### Einschränkungen

Es gibt einige wahrgenommene Einschränkungen bei der Navigation API:

1. Die aktuelle Spezifikation löst kein [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Event bei der ersten Lade der Seite aus. Dies könnte für Webseiten, die Server-Side-Rendering (SSR) verwenden, in Ordnung sein — Ihr Server könnte den korrekten Anfangszustand zurückgeben, was der schnellste Weg ist, um Inhalte zu Ihren Benutzern zu bringen. Aber Websites, die clientseitigen Code verwenden, um ihre Seiten zu erstellen, benötigen möglicherweise eine zusätzliche Funktion, um die Seite zu initialisieren.
2. Die Navigation API funktioniert nur innerhalb eines einzelnen Rahmens - der obersten Seite oder eines einzelnen spezifischen {{htmlelement("iframe")}}. Dies hat einige interessante Konsequenzen, die [weiter im Spezifikationsdokument beschrieben werden](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites), aber in der Praxis Entwicklern Verwirrung ersparen werden. Die vorherige [History API](/de/docs/Web/API/History_API) hat mehrere verwirrende Randfälle, wie die Unterstützung von Frames, die die Navigation API von vornherein behandelt.
3. Sie können die Navigation API derzeit nicht verwenden, um die Liste der Verlaufseinträge programmgesteuert zu ändern oder neu anzuordnen. Es könnte nützlich sein, einen temporären Zustand zu haben, z. B. den Benutzer zu einem temporären Modal zu navigieren, das ihn zur Eingabe einiger Informationen auffordert, und dann zur vorherigen URL zurückzukehren. In diesem Fall würden Sie den temporären Modal-Verlaufs-Eintrag löschen wollen, damit der Benutzer den Anwendungsfluss nicht durcheinander bringen kann, indem er den Vorwärts-Button drückt und ihn erneut öffnet.

## Schnittstellen

- [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) {{Experimental_Inline}}
  - : Event-Objekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Event, das ausgelöst wird, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird. Es bietet Zugriff auf Informationen über diese Navigation und vor allem auf [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept), das es ermöglicht, zu steuern, was passiert, wenn die Navigation initiiert wird.
- [`Navigation`](/de/docs/Web/API/Navigation) {{Experimental_Inline}}
  - : Ermöglicht die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich des programmatischen Startens von Navigationsvorgängen, des Untersuchens von Navigationsverlaufs-Einträgen und des Verwalten von Navigationsvorgängen, während diese stattfinden.
- [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) {{Experimental_Inline}}
  - : Repräsentiert eine kürzliche cross-document Navigation. Es enthält den Navigationstyp sowie die aktuellen und Ziel-Dokument-Verlaufseinträge.
- [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Event-Objekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Event, das ausgelöst wird, wenn sich die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat. Es bietet Zugriff auf den Navigationstyp und den vorherigen Verlaufseintrag, von dem aus navigiert wurde.
- [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) {{Experimental_Inline}}
  - : Repräsentiert das Ziel, zu dem im aktuellen Navigationsvorgang navigiert wird.
- [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) {{Experimental_Inline}}
  - : Repräsentiert einen einzelnen Navigationsverlaufseintrag.
- [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) {{Experimental_Inline}}
  - : Repräsentiert eine laufende Navigation.

## Erweiterungen zu anderen Schnittstellen

- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das zum aktuellen `window` gehörende [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Dies ist der Einstiegspunkt zur Navigation API.

## Beispiele

> [!NOTE]
> Schauen Sie sich das [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Quellcode der Demo anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api)) an.

### Handhabung einer Navigation mit `intercept()`

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

### Handhabung des Scrollens mit `scroll()`

In diesem Beispiel eines abgefangenen Navigationsvorgangs startet die `handler()`-Funktion, indem sie einige Artikelinhalte abruft und rendert, um dann anschließend einige sekundäre Inhalte abzurufen und zu rendern. Es macht Sinn, die Seite zum Hauptartikelinhalt zu scrollen, sobald dieser verfügbar ist, damit der Benutzer damit interagieren kann, anstatt zu warten, bis auch der sekundäre Inhalt gerendert wird. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf zwischen den beiden hinzugefügt.

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

### Wandern zu einem spezifischen Verlaufseintrag

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

Oder wenn der Zustand unabhängig von einer Navigation oder einem Neuladen ist:

```js
navigation.updateCurrentEntry({ state: newState });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne client-seitige Router: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
