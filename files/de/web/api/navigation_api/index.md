---
title: Navigation API
slug: Web/API/Navigation_API
l10n:
  sourceCommit: 06ab986fc58ffb4e12b9f9962ee3c2783ce1290b
---

{{DefaultAPISidebar("Navigation API")}}

Die **Navigation API** bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Einträge der Anwendungsverlaufshistorie untersuchen. Diese API ist ein Nachfolger früherer Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgerichtet ist.

## Konzepte und Anwendungsfälle

In SPAs bleibt das Seitentemplate während der Nutzung meist gleich, und der Inhalt wird dynamisch umgeschrieben, wenn der Benutzer verschiedene Seiten oder Funktionen besucht. Daher wird nur eine einzige, unterscheidbare Seite im Browser geladen, was die erwartete Benutzererfahrung beim Navigieren zwischen verschiedenen Standorten in der Verlaufshistorie beeinträchtigt. Dieses Problem kann teilweise über die [History API](/de/docs/Web/API/History_API) gelöst werden, aber diese ist nicht für die Bedürfnisse von SPAs ausgelegt. Die Navigation API soll diese Lücke schließen.

Die API wird über die Eigenschaft [`Window.navigation`](/de/docs/Web/API/Window/navigation) aufgerufen, die eine Referenz auf ein globales [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurückgibt. Jedes `window`-Objekt hat seine eigene entsprechende `navigation`-Instanz.

### Umgang mit Navigationsaktionen

Das `navigation`-Interface verfügt über mehrere zugehörige Ereignisse, von denen das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis besonders bemerkenswert ist. Dieses wird ausgelöst, wenn [eine beliebige Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, was bedeutet, dass Sie alle Seitennavigationen von einem zentralen Ort aus steuern können, ideal für Routing-Funktionalität in SPA-Frameworks. (Dies ist nicht der Fall bei der [History API](/de/docs/Web/API/History_API), bei der es manchmal schwierig ist, alle Navigationen zu erkennen und darauf zu reagieren.) Der `navigate`-Ereignishandler erhält ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Objekt, das detaillierte Informationen inklusive Details zum Ziel der Navigation, Typ, ob es `POST`-Formulardaten oder eine Downloadanfrage enthält, und mehr enthält.

Das `NavigationEvent`-Objekt bietet auch zwei Methoden:

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) ermöglicht es Ihnen, benutzerdefiniertes Verhalten für Navigationsaktionen anzugeben und kann dabei folgende Argumente annehmen:
  - Callback-Handler-Funktionen, die Ihnen erlauben, zu spezifizieren, was sowohl _während_ als auch _kurz bevor_ die Navigation festgeschrieben wird, passiert. Beispielsweise könnten Sie relevanten neuen Inhalt in die Benutzeroberfläche basierend auf dem Pfad der URL, zu der navigiert wird, laden oder den Browser auf eine Anmeldeseite umleiten, wenn die URL auf eine eingeschränkte Seite zeigt und der Benutzer nicht angemeldet ist.
  - Eigenschaften, die es Ihnen erlauben, das standardmäßige Fokus- und Scrollverhalten des Browsers nach dem Auftreten der Navigation zu aktivieren oder zu deaktivieren.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) ermöglicht es Ihnen, das Scrollverhalten des Browsers manuell zu initiieren (z. B. zu einem Fragment-Identifikator in der URL), wenn dies für Ihren Code sinnvoll ist, anstatt darauf zu warten, dass der Browser dies automatisch handhabt.

Sobald eine Navigation initiiert wird und Ihr `intercept()`-Handler aufgerufen wird, wird eine Instanz des [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekts erstellt (zugänglich über [`Navigation.transition`](/de/docs/Web/API/Navigation/transition)), die verwendet werden kann, um den Prozess der laufenden Navigation zu verfolgen.

> [!NOTE]
> In diesem Kontext bezieht sich "Übergang" auf den Übergang zwischen einem Geschichtseintrag und einem anderen. Es steht nicht im Zusammenhang mit CSS-Übergängen.

> [!NOTE]
> Sie können auch [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um die Navigation für die meisten [Navigationsarten](/de/docs/Web/API/NavigateEvent/navigationType#value) vollständig zu stoppen; die Abbrechung von Durchlauf-Navigationen ist noch nicht implementiert.

Wenn die durch den `intercept()`-Handler zurückgegebenen Versprechen erfüllt werden, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis des `Navigation`-Objekts ausgelöst, wodurch Sie Bereinigungscode ausführen können, nachdem eine erfolgreiche Navigation abgeschlossen ist. Wenn sie abgelehnt werden, bedeutet dies, dass die Navigation fehlgeschlagen ist, und [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) wird stattdessen ausgelöst, sodass Sie den Fehlerfall elegant behandeln können. Es gibt auch eine `finished`-Eigenschaft im Rückgabewert von Navigationsmethoden (wie [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), die zur selben Zeit wie die oben genannten Ereignisse erfüllt oder abgelehnt wird und einen weiteren Weg bietet, um mit Erfolg und Fehlschlägen umzugehen.

> [!NOTE]
> Vor der Verfügbarkeit der Navigation API hätten Sie etwas Ähnliches tun müssen, indem Sie alle Klick-Ereignisse auf Links überwachen, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und dies würde nicht alle Navigationen abdecken — nur benutzerinitiierte Link-Klicks.

### Programmatisches Aktualisieren und Durchlaufen der Navigationshistorie

Während der Benutzer durch Ihre Anwendung navigiert, führt jeder neue Speicherort, zu dem navigiert wird, zur Erstellung eines Navigationshistorieneintrags. Jeder Verlaufseintrag wird durch eine eigene [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objektinstanz repräsentiert. Diese enthalten mehrere Eigenschaften wie den Schlüssel, die URL und die Zustandsinformation des Eintrags. Sie können den Eintrag, auf dem sich der Benutzer gerade befindet, mit [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) abrufen und ein Array aller vorhandenen Verlaufseinträge mit [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries). Jedes `NavigationHistoryEntry`-Objekt hat ein [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event)-Ereignis, das ausgelöst wird, wenn der Eintrag nicht mehr Teil des Browserverlaufs ist. Zum Beispiel, wenn der Benutzer dreimal zurücknavigiert und dann woanders hin navigiert, werden diese drei Verlaufseinträge entsorgt.

> [!NOTE]
> Die Navigation API legt nur Verlaufsbeiträge offen, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (d.h. keine Navigationen innerhalb eingebetteter {{htmlelement("iframe")}}s oder cross-origin Navigationen), wodurch eine genaue Liste aller vorherigen Verlaufseinträge nur für Ihre App bereitgestellt wird. Dies macht das Durchlaufen der Historie zu einem weit weniger fragilen Unterfangen als mit der älteren [History API](/de/docs/Web/API/History_API).

Das `Navigation`-Objekt enthält alle Methoden, die Sie benötigen, um die Navigationshistorie zu aktualisieren und durch sie zu navigieren:

- [`navigate()`](/de/docs/Web/API/Navigation/navigate)
  - : Navigiert zu einer neuen URL und erstellt einen neuen Navigationshistorieneintrag.
- [`reload()`](/de/docs/Web/API/Navigation/reload)
  - : Lädt den aktuellen Navigationshistorieneintrag neu.
- [`back()`](/de/docs/Web/API/Navigation/back)
  - : Navigiert zum vorherigen Navigationshistorieneintrag, falls dies möglich ist.
- [`forward()`](/de/docs/Web/API/Navigation/forward)
  - : Navigiert zum nächsten Navigationshistorieneintrag, falls dies möglich ist.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)
  - : Navigiert zu einem spezifischen Navigationshistorieneintrag, der durch seinen Schlüsselwert identifiziert wird, der über die relevante [`NavigationHistoryEntry.key`](/de/docs/Web/API/NavigationHistoryEntry/key)-Eigenschaft des Eintrags erhalten wird.

Jede der oben genannten Methoden gibt ein Objekt zurück, das zwei Promises enthält — `{ committed, finished }`. Dies ermöglicht es der aufrufenden Funktion, zu warten, bis:

- `committed` erfüllt wird, was bedeutet, dass sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished` erfüllt wird, was bedeutet, dass alle durch Ihren `intercept()`-Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht dem Erfüllen des Versprechens [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished), wenn das Ereignis [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) ausgelöst wird, wie oben erwähnt.
- eines der obigen Promises abgelehnt wird, was bedeutet, dass die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Status

Die Navigation API erlaubt es Ihnen, Statusinformationen für jeden Verlaufseintrag zu speichern. Dies sind entwicklerdefinierte Informationen — es kann alles sein, was Sie möchten. Beispielsweise könnten Sie eine `visitCount`-Eigenschaft speichern, die die Anzahl der Besuche einer Ansicht aufzeichnet, oder ein Objekt mit mehreren Eigenschaften, die den Zustand der Benutzeroberfläche betreffen, damit der Zustand wiederhergestellt werden kann, wenn ein Benutzer zu dieser Ansicht zurückkehrt.

Um den Zustand eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Eintrags zu erhalten, rufen Sie seine Methode [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) auf. Anfangs ist dieser `undefined`, aber wenn Statusinformationen gesetzt wurden, wird der zuvor gesetzte Zustand zurückgegeben.

Das Setzen von Zustand ist etwas nuancierter. Sie können den Zustandswert nicht abrufen und dann direkt aktualisieren — die Kopie, die im Eintrag gespeichert ist, ändert sich nicht. Stattdessen aktualisieren Sie ihn, während Sie eine [`navigate()`](/de/docs/Web/API/Navigation/navigate) oder [`reload()`](/de/docs/Web/API/Navigation/reload) durchführen — jede dieser Methoden nimmt optional ein Optionsobjekt-Parameter an, das eine `state`-Eigenschaft enthält, die den neuen Zustand enthält, der im Verlaufsbeitrag gesetzt wird. Wenn diese Navigationen festgeschrieben werden, wird die Zustandsänderung automatisch angewendet.

In einigen Fällen jedoch wird eine Zustandsänderung unabhängig von einer Navigation oder einem Neuladen sein — zum Beispiel wenn eine Seite ein erweiterbares/einziehbares {{htmlelement("details")}}-Element enthält. In diesem Fall möchten Sie möglicherweise den erweiterten/eingezogenen Zustand in Ihrem Verlaufseintrag speichern, um ihn wiederherzustellen, wenn der Benutzer zur Seite zurückkehrt oder seinen Browser neu startet. Solche Fälle werden mithilfe von [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) behandelt. Das Ereignis [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) wird ausgelöst, wenn die aktuelle Eintragsänderung abgeschlossen ist.

### Einschränkungen

Es gibt einige wahrgenommene Einschränkungen mit der Navigation API:

1. Die aktuelle Spezifikation löst kein [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis aus beim ersten Laden einer Seite. Dies könnte für Websites, die Server-Side Rendering (SSR) verwenden, in Ordnung sein — Ihr Server könnte den korrekten Anfangszustand zurückgeben, was der schnellste Weg ist, um Ihren Benutzern Inhalte zu liefern. Aber Websites, die clientseitigen Code verwenden, um ihre Seiten zu erstellen, benötigen möglicherweise eine zusätzliche Funktion, um die Seite zu initialisieren.
2. Die Navigation API operiert nur innerhalb eines einzelnen Frames — der obersten Seite oder einem spezifischen {{htmlelement("iframe")}}. Dies hat einige interessante Implikationen, die [weiter im Spezifikationsdokument beschrieben sind](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites), wird aber in der Praxis die Verwirrung unter Entwicklern verringern. Die vorherige [History API](/de/docs/Web/API/History_API) hat mehrere verwirrende Edge Cases, wie die Unterstützung von Frames, die die Navigation API direkt behandelt.
3. Sie können derzeit die Navigation API nicht verwenden, um die Verlaufsliste programmatisch zu ändern oder umzuordnen. Es könnte nützlich sein, einen temporären Zustand zu haben, zum Beispiel wenn Sie den Benutzer zu einem temporären Modal navigieren, das ihn um einige Informationen bittet, dann zurück zur vorherigen URL. In diesem Fall würden Sie den temporären Modalverlaufseintrag löschen wollen, damit der Benutzer den Anwendungsfluss nicht durcheinanderbringen kann, indem er die Vorwärtstaste drückt und ihn erneut öffnet.

## Schnittstellen

- [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis, das ausgelöst wird, wenn [eine beliebige Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird. Es bietet Zugriff auf Informationen über diese Navigation und insbesondere die [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept)-Methode, die es Ihnen erlaubt, zu kontrollieren, was passiert, wenn die Navigation initiiert wird.
- [`Navigation`](/de/docs/Web/API/Navigation) {{Experimental_Inline}}
  - : Ermöglicht die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmatischen Initiierung von Navigationen, der Untersuchung von Verlaufseinträgen und der Verwaltung von Navigationen, während sie stattfinden.
- [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) {{Experimental_Inline}}
  - : Repräsentiert eine kürzlich erfolgte dokumentübergreifende Navigation. Es enthält den Typ der Navigation sowie aktuelle und Ziel-Dokumentverlaufseinträge.
- [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Ereignis, das ausgelöst wird, wenn sich [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat. Es bietet Zugriff auf den Navigationstyp und den vorherigen Verlaufsbeitrag, von dem aus navigiert wurde.
- [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) {{Experimental_Inline}}
  - : Repräsentiert das Ziel, zu dem in der aktuellen Navigation navigiert wird.
- [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) {{Experimental_Inline}}
  - : Repräsentiert einen einzelnen Navigationsverlaufseintrag.
- [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController) {{Experimental_Inline}}
  - : Definiert das Umleitungsverhalten für einen Precommit-Handler bei Navigationen, wenn er in den Callback [`precommitHandler`](/de/docs/Web/API/NavigateEvent/intercept#precommithandler) der Methode [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept) übergeben wird.
- [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) {{Experimental_Inline}}
  - : Repräsentiert eine laufende Navigation.

## Erweiterungen anderer Schnittstellen

- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das dem aktuellen `window` zugehörige [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Dies ist der Einstiegspunkt für die Navigation API.

## Beispiele

> [!NOTE]
> Sehen Sie sich die [Live-Demo der Navigation API](https://mdn.github.io/dom-examples/navigation-api/) an ([Demoquellcode ansehen](https://github.com/mdn/dom-examples/tree/main/navigation-api)).

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

### Umgang mit Scrollen mittels `scroll()`

In diesem Beispiel zum Abfangen einer Navigation beginnt die Funktion `handler()` damit, einige Artikelinhalte zu laden und darzustellen, um dann einige sekundäre Inhalte danach zu laden und darzustellen. Es ist sinnvoll, die Seite so schnell wie möglich zum Hauptartikelinhalt zu scrollen, damit der Benutzer mit diesem interagieren kann, anstatt zu warten, bis auch der sekundäre Inhalt dargestellt wird. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf zwischen den beiden eingefügt.

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

### Durchlaufen zu einem spezifischen Verlaufseintrag

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
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
