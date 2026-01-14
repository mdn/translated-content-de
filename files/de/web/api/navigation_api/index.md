---
title: Navigation API
slug: Web/API/Navigation_API
l10n:
  sourceCommit: 9c27111e8c096a18881d96d15d6fd41558acf6e5
---

{{DefaultAPISidebar("Navigation API")}}

Die **Navigation API** bietet die Möglichkeit, Navigationsaktionen des Browsers zu initiieren, abzufangen und zu verwalten. Sie kann auch die Historieneinträge einer Anwendung untersuchen. Dies ist der Nachfolger früherer Webplattform-Features wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die ihre Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgerichtet ist.

## Konzepte und Verwendung

In SPAs bleibt die Seitenschablone während der Nutzung normalerweise gleich, und der Inhalt wird dynamisch neu geschrieben, wenn der Benutzer verschiedene Seiten oder Funktionen besucht. Infolgedessen wird im Browser nur eine einzige, individuelle Seite geladen, was die erwartete Benutzererfahrung des Navigierens zwischen verschiedenen Positionen in der Verlaufshistorie stört. Dieses Problem kann bis zu einem gewissen Grad über die [History API](/de/docs/Web/API/History_API) gelöst werden, aber sie ist nicht für die Bedürfnisse von SPAs konzipiert. Die Navigation API soll diese Lücke schließen.

Auf die API wird über die Eigenschaft [`Window.navigation`](/de/docs/Web/API/Window/navigation) zugegriffen, die eine Referenz auf ein globales [`Navigation`](/de/docs/Web/API/Navigation) Objekt zurückgibt. Jedes `window` Objekt hat seine eigene entsprechende `navigation` Instanz.

### Verwalten von Navigationsvorgängen

Die `navigation` Schnittstelle verfügt über mehrere zugehörige Ereignisse, wobei das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis das bemerkenswerteste ist. Dies wird ausgelöst, wenn [jegliche Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, was bedeutet, dass Sie alle Seitennavigationen von einem zentralen Punkt aus steuern können, ideal für die Routing-Funktionalität in SPA-Frameworks. (Dies ist nicht der Fall bei der [History API](/de/docs/Web/API/History_API), bei der es manchmal schwierig ist, alle Navigationsvorgänge zu erkennen und zu reagieren.) Der `navigate` Ereignis-Handler bekommt ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Objekt übergeben, das detaillierte Informationen enthält, einschließlich Details über das Navigationsziel, Typ, ob es `POST` Formulardaten oder eine Download-Anfrage enthält und mehr.

Das `NavigateEvent` Objekt bietet auch zwei Methoden:

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) ermöglicht es Ihnen, benutzerdefiniertes Verhalten für Navigationen zu spezifizieren und kann die folgenden Argumente verwenden:
  - Callback-Handler-Funktionen, die es Ihnen erlauben zu spezifizieren, was _geschieht_, wenn die Navigation festgeschrieben wird und _kurz bevor_ sie festgeschrieben wird. Zum Beispiel könnten Sie relevante neue Inhalte in die Benutzeroberfläche basierend auf dem Navigationspfad laden, oder den Browser zu einer Anmeldeseite umleiten, wenn die URL auf eine eingeschränkte Seite verweist und der Benutzer nicht angemeldet ist.
  - Eigenschaften, die es Ihnen ermöglichen, das standardmäßige Fokus- und Scrollverhalten des Browsers nach der Navigation zu aktivieren oder zu deaktivieren.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) ermöglicht es Ihnen, das Scrollverhalten des Browsers manuell zu initiieren (z. B. zu einem Fragmentbezeichner in der URL), wenn es für Ihren Code sinnvoll ist, anstatt darauf zu warten, dass der Browser es automatisch behandelt.

Sobald eine Navigation initiiert wird und Ihr `intercept()` Handler aufgerufen wird, wird eine [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) Objektinstanz erstellt (zugänglich über [`Navigation.transition`](/de/docs/Web/API/Navigation/transition)), die verwendet werden kann, um den Vorgang der laufenden Navigation zu verfolgen.

> [!NOTE]
> In diesem Kontext bezieht "Übergang" sich auf den Übergang zwischen einem Historieneintrag und einem anderen. Es hat nichts mit CSS-Übergängen zu tun.

> [!NOTE]
> Sie können auch [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um die Navigation vollständig für die meisten [Navigationstypen](/de/docs/Web/API/NavigateEvent/navigationType#value) zu stoppen; die Stornierung von Vor-/Rückwärtsnavigationen ist noch nicht implementiert.

Wenn die von den `intercept()` Handler-Funktionen zurückgegebenen Versprechen erfüllt werden, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis des `Navigation` Objekts ausgelöst, was es Ihnen ermöglicht, Bereinigungscode auszuführen, nachdem eine erfolgreiche Navigation abgeschlossen wurde. Wenn sie abgelehnt werden, bedeutet dies, dass die Navigation fehlgeschlagen ist, wird stattdessen [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) ausgelöst, was es Ihnen ermöglicht, den Fehlerfall elegant zu behandeln. Es gibt auch eine `finished` Eigenschaft im Rückgabewert der Navigationsmethoden (wie [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), die sich gleichzeitig mit den oben genannten Ereignissen erfüllt oder abgelehnt wird, was einen weiteren Pfad zur Behandlung der Erfolgs- und Fehlerfälle bietet.

> [!NOTE]
> Bevor die Navigation API verfügbar war, hätten Sie etwas Ähnliches tun müssen, indem Sie auf alle Klickereignisse auf Links lauschen, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState) Aufruf ausführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und dies würde nicht alle Navigationen abdecken – nur vom Benutzer initiierte Link-Klicks.

### Programmgesteuertes Aktualisieren und Durchsuchen des Navigationsverlaufs

Während der Benutzer durch Ihre Anwendung navigiert, führt jede neue aufgerufene Position zur Erstellung eines Navigationseintrags in der Historie. Jeder Eintrag in der Historie wird durch ein separates [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekt dargestellt. Diese enthalten mehrere Eigenschaften wie den Schlüssel des Eintrags, die URL und Statusinformationen. Sie können den Eintrag abrufen, auf dem sich der Benutzer gerade befindet, indem Sie [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) aufrufen, und ein Array aller vorhandenen Einträge in der Historie mit [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries). Jedes `NavigationHistoryEntry` Objekt hat ein [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event) Ereignis, das ausgelöst wird, wenn der Eintrag nicht mehr Teil der Browserverlaufshistorie ist. Zum Beispiel, wenn der Benutzer dreimal zurückgeht und dann woanders hin navigiert, werden diese drei Einträge in der Historie entsorgt.

> [!NOTE]
> Die Navigation API gibt nur Historieneinträge preis, die im aktuellen Browserkontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z. B. nicht Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder seitenübergreifende Navigationen), was eine genaue Liste aller vorherigen Historieneinträge nur für Ihre App bereitstellt. Dies macht das Durchsuchen der Historie zu einem viel weniger zerbrechlichen Unterfangen als mit der älteren [History API](/de/docs/Web/API/History_API).

Das `Navigation` Objekt enthält alle Methoden, die Sie benötigen, um den Verlauf der Navigation zu aktualisieren und zu durchlaufen:

- [`navigate()`](/de/docs/Web/API/Navigation/navigate)
  - : Navigiert zu einer neuen URL und erstellt einen neuen Eintrag in der Navigation-Historie.
- [`reload()`](/de/docs/Web/API/Navigation/reload)
  - : Lädt den aktuellen Navigationseintrag erneut.
- [`back()`](/de/docs/Web/API/Navigation/back)
  - : Navigiert zum vorherigen Eintrag in der Navigation-Historie, falls dies möglich ist.
- [`forward()`](/de/docs/Web/API/Navigation/forward)
  - : Navigiert zum nächsten Eintrag in der Navigation-Historie, falls dies möglich ist.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)
  - : Navigiert zu einem spezifischen Navigationseintrag der Historie, der durch seinen Schlüsselwert identifiziert wird, den Sie über die entsprechende [`NavigationHistoryEntry.key`](/de/docs/Web/API/NavigationHistoryEntry/key) Eigenschaft erhalten.

Jede der oben genannten Methoden gibt ein Objekt zurück, das zwei Versprechen enthält — `{ committed, finished }`. Dies ermöglicht es der aufrufenden Funktion, mit weiteren Aktionen zu warten bis:

- `committed` erfüllt ist, was bedeutet, dass die sichtbare URL geändert wurde und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished` erfüllt ist, was bedeutet, dass alle Versprechen, die von Ihrem `intercept()` Handler zurückgegeben wurden, erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis ausgelöst wird, wie zuvor erwähnt.
- eines der beiden oben genannten Versprechen abgelehnt wird, was bedeutet, dass die Navigation aus einem bestimmten Grund fehlgeschlagen ist.

### Status

Die Navigation API ermöglicht es Ihnen, Status auf jedem Eintrag in der Historie zu speichern. Dabei handelt es sich um entwicklerdefinierte Informationen — es kann alles sein, was Sie möchten. Zum Beispiel könnten Sie eine `visitCount` Eigenschaft speichern, die die Anzahl der Besuche einer Ansicht aufzeichnet, oder ein Objekt, das mehrere Eigenschaften des UI-Status enthält, sodass der Status wiederhergestellt werden kann, wenn ein Benutzer zu dieser Ansicht zurückkehrt.

Um den Status eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) abzurufen, rufen Sie die [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) Methode auf. Sie ist anfangs `undefined`, aber wenn Statusinformationen auf dem Eintrag gesetzt werden, wird sie die zuvor gesetzten Statusinformationen zurückgeben.

Das Setzen des Status ist etwas nuancierter. Sie können den Wert des Status nicht abrufen und dann direkt aktualisieren — die im Eintrag gespeicherte Kopie wird sich nicht ändern. Stattdessen aktualisieren Sie es, während Sie eine [`navigate()`](/de/docs/Web/API/Navigation/navigate) oder [`reload()`](/de/docs/Web/API/Navigation/reload) ausführen — jede davon nimmt optional ein Optionsobjekt-Parameter, das eine `state` Eigenschaft enthält, die den neuen Status enthält, der auf den Historieneintrag gesetzt werden soll. Wenn diese Navigationen festgeschrieben werden, wird die Statusänderung automatisch übernommen.

In einigen Fällen erfolgt jedoch eine Statusänderung unabhängig von einer Navigation oder einem Neuladen — zum Beispiel, wenn eine Seite ein erweiterbares/zusammenklappbares {{htmlelement("details")}} Element enthält. In diesem Fall möchten Sie möglicherweise den erweiterten/zusammengeklappten Zustand in Ihrem Historieneintrag speichern, sodass Sie diesen wiederherstellen können, wenn der Benutzer zur Seite zurückkehrt oder seinen Browser neu startet. Solche Fälle werden mit [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) behandelt. Das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) wird ausgelöst, wenn die aktuelle Eintragsänderung abgeschlossen ist.

### Einschränkungen

Es gibt einige wahrgenommene Einschränkungen bei der Navigation API:

1. Die aktuelle Spezifikation löst kein [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis beim ersten Laden einer Seite aus. Dies könnte für Websites, die Server-Side Rendering (SSR) verwenden, in Ordnung sein — Ihr Server könnte den korrekten Startzustand zurückgeben, was der schnellste Weg ist, um Inhalte zu Ihren Benutzern zu bringen. Aber Sites, die clientseitigen Code verwenden, um ihre Seiten zu erstellen, benötigen möglicherweise eine zusätzliche Funktion zur Initialisierung der Seite.
2. Die Navigation API funktioniert nur innerhalb eines einzelnen Frames — der obersten Seite oder eines bestimmten {{htmlelement("iframe")}}. Dies hat einige interessante Implikationen, die [in der Spezifikation weiter dokumentiert](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites) sind, aber in der Praxis wird es Verwirrung bei Entwicklern reduzieren. Die vorherige [History API](/de/docs/Web/API/History_API) hat mehrere verwirrende Randfälle, wie etwa die Unterstützung für Frames, die die Navigation API von Anfang an behandelt.
3. Sie können derzeit die Navigation API nicht verwenden, um die Historienliste programmgesteuert zu ändern oder umzustellen. Es könnte nützlich sein, einen temporären Zustand zu haben, beispielsweise indem der Benutzer zu einem temporären Modal navigiert wird, das ihn nach einigen Informationen fragt, und dann zur vorherigen URL zurückkehrt. In diesem Fall möchten Sie den temporären Modal-Navigationseintrag löschen, damit der Benutzer den Anwendungsfluss nicht durcheinanderbringt, indem er die Vorwärts-Taste drückt und ihn erneut öffnet.

## Schnittstellen

- [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis, das ausgelöst wird, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird. Es bietet Zugriff auf Informationen über diese Navigation und insbesondere auf [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept), das es Ihnen ermöglicht zu steuern, was passiert, wenn die Navigation initiiert wird.
- [`Navigation`](/de/docs/Web/API/Navigation) {{Experimental_Inline}}
  - : Ermöglicht die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmgesteuerten Initialisierung von Navigationen, der Untersuchung von Navigationseinträgen der Historie und der Verwaltung von Navigationen, wie sie stattfinden.
- [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) {{Experimental_Inline}}
  - : Repräsentiert eine kürzliche Navigation über Dokumentengrenzen hinweg. Es enthält den Navigationstyp sowie die Historieneinträge des aktuellen und des Ziel-Dokuments.
- [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) Ereignis, das ausgelöst wird, wenn sich [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat. Es bietet Zugang zum Navigationstyp und zum vorherigen Historieneintrag, von dem die Navigation ausging.
- [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) {{Experimental_Inline}}
  - : Repräsentiert das Ziel, zu dem in der aktuellen Navigation navigiert wird.
- [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) {{Experimental_Inline}}
  - : Repräsentiert einen einzelnen Navigationseintrag der Historie.
- [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController) {{Experimental_Inline}}
  - : Definiert das Umleitungsverhalten für einen Präcommit-Handler bei einer Navigation, wenn er in den [`precommitHandler`](/de/docs/Web/API/NavigateEvent/intercept#precommithandler) Callback eines [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept) Methodeaufrufs übergeben wird.
- [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) {{Experimental_Inline}}
  - : Repräsentiert eine laufende Navigation.

## Erweiterungen zu anderen Schnittstellen

- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das mit dem aktuellen `window` verbundene [`Navigation`](/de/docs/Web/API/Navigation) Objekt zurück. Dies ist der Einstiegspunkt für die Navigation API.

## Beispiele

> [!NOTE]
> Schauen Sie sich das [Live-Demo der Navigation API](https://mdn.github.io/dom-examples/navigation-api/) ([Quellcode der Demo ansehen](https://github.com/mdn/dom-examples/tree/main/navigation-api)) an.

### Umgang mit einer Navigation mittels `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // We can't intercept some navigations, e.g. cross-origin navigations.
  // Return early and let the browser handle them normally.
  if (!event.canIntercept) {
    return;
  }

  // We shouldn't intercept fragment navigations or downloads.
  if (event.hashChange || event.downloadRequest !== null) {
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

In diesem Beispiel des Abfangens einer Navigation beginnt die `handler()` Funktion damit, einige Artikelinhalte abzurufen und darzustellen, um dann danach einige Sekundärinhalte abzurufen und darzustellen. Es macht Sinn, die Seite zu den Hauptartikelinhalten zu scrollen, sobald diese verfügbar sind, damit der Benutzer mit ihnen interagieren kann, statt darauf zu warten, dass auch die Sekundärinhalte gerendert werden. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) Aufruf zwischen den beiden hinzugefügt.

```js
navigation.addEventListener("navigate", (event) => {
  // Return early if we can't/shouldn't intercept
  if (
    !event.canIntercept ||
    event.hashChange ||
    event.downloadRequest !== null
  ) {
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

### Durchlaufen zu einem spezifischen Eintrag der Historie

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Aktualisieren des Status

```js
navigation.navigate(url, { state: newState });
```

Oder

```js
navigation.reload({ state: newState });
```

Oder falls der Status unabhängig von einer Navigation oder einem Neuladen ist:

```js
navigation.updateCurrentEntry({ state: newState });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Explanation der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
