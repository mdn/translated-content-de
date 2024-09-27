---
title: Navigation API
slug: Web/API/Navigation_API
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{SeeCompatTable}}{{DefaultAPISidebar("Navigation API")}}

Die **Navigation API** bietet die Möglichkeit, Navigationsaktionen des Browsers zu initiieren, abzufangen und zu verwalten. Sie kann auch die Verlaufsdaten einer Anwendung überprüfen. Dies ist ein Nachfolger früherer Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Schwächen behebt und speziell auf die Bedürfnisse von [Single-Page Applications (SPAs)](/de/docs/Glossary/SPA) zugeschnitten ist.

## Konzepte und Nutzung

In SPAs bleibt das Seitentemplate während der Nutzung meist gleich, und der Inhalt wird dynamisch umgeschrieben, wenn der Benutzer verschiedene Seiten oder Funktionen besucht. Dadurch wird nur eine eindeutige Seite im Browser geladen, was das erwartete Benutzererlebnis, zwischen verschiedenen Positionen im Verlauf hin und her zu navigieren, beeinträchtigt. Dieses Problem kann bis zu einem gewissen Grad über die [History API](/de/docs/Web/API/History_API) gelöst werden, jedoch ist sie nicht für die Bedürfnisse von SPAs ausgelegt. Die Navigation API zielt darauf ab, diese Lücke zu schließen.

Die API wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation) Eigenschaft aufgerufen, die eine Referenz auf ein globales [`Navigation`](/de/docs/Web/API/Navigation) Objekt zurückgibt. Jedes `window`-Objekt hat seine eigene entsprechende `navigation`-Instanz.

### Umgang mit Navigationen

Das `navigation`-Interface verfügt über mehrere assoziierte Ereignisse, wobei das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis das bemerkenswerteste ist. Dieses wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) gestartet wird, was bedeutet, dass Sie alle Seiten-Navigationen von einer zentralen Stelle aus steuern können, ideal für Routing-Funktionen in SPA-Frameworks. (Dies ist bei der [History API](/de/docs/Web/API/History_API) nicht der Fall, bei der es manchmal schwer ist, auf alle Navigationen zu reagieren.) Der `navigate`-Ereignishandler erhält ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Objekt, das detaillierte Informationen einschließlich des Ziels der Navigation, des Typs, ob es `POST`-Formulardaten oder eine Download-Anfrage enthält, und mehr enthält.

Das `NavigationEvent`-Objekt bietet auch zwei Methoden:

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) nimmt als Argument eine Callback-Handler-Funktion zurück, die ein Promise zurückgibt. Es ermöglicht Ihnen, zu steuern, was passiert, wenn die Navigation gestartet wird. Zum Beispiel kann es im Fall einer SPA verwendet werden, um relevante neue Inhalte basierend auf dem Pfad der navigierten URL in die Benutzeroberfläche zu laden.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) ermöglicht es Ihnen, das Scroll-Verhalten des Browsers manuell zu initiieren (z. B. zu einem Fragment-Identifier in der URL), falls dies für Ihren Code sinnvoll ist, anstatt zu warten, bis der Browser dies automatisch behandelt.

Sobald eine Navigation gestartet wird und Ihr `intercept()` Handler aufgerufen wird, wird eine Instanz eines [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) Objekts erstellt (zugänglich über [`Navigation.transition`](/de/docs/Web/API/Navigation/transition)), das verwendet werden kann, um den Prozess der laufenden Navigation zu verfolgen.

> [!NOTE]
> In diesem Kontext bezieht sich "transition" auf den Übergang zwischen einem Verlaufseintrag und einem anderen. Es hat keinen Bezug zu CSS-Übergängen.

> [!NOTE]
> Sie können auch [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um die Navigation vollständig für die meisten [Navigationstypen](/de/docs/Web/API/NavigateEvent/navigationType#value) zu stoppen; die Absage von Traversal-Navigationen ist noch nicht implementiert.

Wenn das Promise der `intercept()` Handler-Funktion erfüllt wird, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis des `Navigation` Objekts ausgelöst, was Ihnen ermöglicht, Bereinigungs-Code auszuführen, nachdem eine erfolgreiche Navigation abgeschlossen ist. Sollte es abgelehnt werden, was bedeutet, dass die Navigation fehlgeschlagen ist, wird stattdessen [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) ausgelöst, um den Fehlerfall elegant zu behandeln. Es gibt auch eine [`finished`](/de/docs/Web/API/NavigationTransition/finished) Eigenschaft auf dem `NavigationTransition` Objekt, die erfüllt oder abgelehnt wird, wenn die oben genannten Ereignisse ausgelöst werden, was einen weiteren Weg zur Handhabung von Erfolgs- und Fehlerfällen bietet.

> [!NOTE]
> Bevor die Navigation API verfügbar war, musste man alle Klickevents auf Links überwachen, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState) Aufruf tätigen und dann die Seitenansicht basierend auf der neuen URL einrichten. Dies würde jedoch nicht alle Navigationen abdecken — nur vom Benutzer initiierte Link-Klicks.

### Programmatisches Aktualisieren und Durchlaufen des Navigationsverlaufs

Wenn der Benutzer Ihre Anwendung durchläuft, führt jede neue Navigation zu einem neuen Verlaufseintrag. Jeder Verlaufseintrag wird durch eine eindeutige Instanz eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekts dargestellt. Diese enthalten mehrere Eigenschaften wie den Schlüssel, die URL und den Zustandsinformationen des Eintrags. Sie können den Eintrag, auf dem der Benutzer sich gerade befindet, mit [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) abrufen und ein Array aller bestehenden Verlaufseinträge mit [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries). Jedes `NavigationHistoryEntry` Objekt hat ein [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event) Ereignis, das ausgelöst wird, wenn der Eintrag nicht mehr Teil des Browser-Verlaufs ist. Zum Beispiel, wenn der Benutzer dreimal zurück navigiert und dann zu einem anderen Ort vorwärts navigiert, werden diese drei Verlaufseinträge entfernt.

> [!NOTE]
> Die Navigation API zeigt nur Verlaufseinträge an, die im aktuellen Browserkontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z. B. keine Navigationen innerhalb von eingebetteten {{htmlelement("iframe")}}s oder ursprungsübergreifende Navigationen), was eine genaue Liste aller vorherigen Verlaufseinträge nur für Ihre App bietet. Dies macht das Durchlaufen des Verlaufs zu einer viel weniger fragilen Angelegenheit als mit der älteren [History API](/de/docs/Web/API/History_API).

Das `Navigation` Objekt enthält alle Methoden, die Sie benötigen, um durch den Navigationsverlauf zu aktualisieren und zu durchlaufen:

- [`navigate()`](/de/docs/Web/API/Navigation/navigate) {{Experimental_Inline}}
  - : Navigiert zu einer neuen URL, wodurch ein neuer Verlaufseintrag erstellt wird.
- [`reload()`](/de/docs/Web/API/Navigation/reload) {{Experimental_Inline}}
  - : Lädt den aktuellen Verlaufseintrag neu.
- [`back()`](/de/docs/Web/API/Navigation/back) {{Experimental_Inline}}
  - : Navigiert zum vorherigen Verlaufseintrag, falls dies möglich ist.
- [`forward()`](/de/docs/Web/API/Navigation/forward) {{Experimental_Inline}}
  - : Navigiert zum nächsten Verlaufseintrag, falls dies möglich ist.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) {{Experimental_Inline}}
  - : Navigiert zu einem bestimmten Verlaufseintrag, identifiziert durch seinen Schlüsselwert, der über die entsprechende [`NavigationHistoryEntry.key`](/de/docs/Web/API/NavigationHistoryEntry/key) Eigenschaft erhalten wird.

Jede dieser Methoden gibt ein Objekt zurück, das zwei Promises enthält — `{ committed, finished }`. Dies ermöglicht der aufrufenden Funktion, mit weiteren Aktionen zu warten, bis:

- `committed` wird erfüllt, was bedeutet, dass die sichtbare URL geändert wurde und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished` wird erfüllt, was bedeutet, dass alle durch Ihren `intercept()` Handler zurückgegebenen Promises erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis ausgelöst wird, wie zuvor erwähnt.
- eines der oben genannten Promises wird abgelehnt, was bedeutet, dass die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Zustand

Die Navigation API ermöglicht es Ihnen, Informationen über den Zustand jedes Verlaufseintrags zu speichern. Dies sind vom Entwickler festgelegte Informationen — es kann alles sein, was Sie möchten. Beispielsweise könnten Sie eine `visitCount`-Eigenschaft speichern wollen, die die Anzahl der Besuche einer Ansicht erfasst, oder ein Objekt mit mehreren Eigenschaften, die den UI-Zustand betreffen, damit dieser Zustand wiederhergestellt werden kann, wenn ein Benutzer zu dieser Ansicht zurückkehrt.

Um den Zustand eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zu erhalten, rufen Sie dessen [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) Methode auf. Der Zustand ist zunächst `undefined`, aber wenn Statusinformationen für den Eintrag festgelegt sind, werden die zuvor festgelegten Statusinformationen zurückgegeben.

Das Setzen von Statusinformationen ist etwas nuancierter. Sie können den Statuswert nicht abrufen und dann direkt aktualisieren — die im Eintrag gespeicherte Kopie wird sich nicht ändern. Stattdessen aktualisieren Sie ihn, während Sie eine [`navigate()`](/de/docs/Web/API/Navigation/navigate) oder [`reload()`](/de/docs/Web/API/Navigation/reload) — jede von ihnen nimmt optional ein Optionsobjekt-Parameter, das eine `state` Eigenschaft enthält, die den neuen Status zur Festlegung des Verlaufseintrags enthält. Wenn diese Navigationen festgeschrieben werden, wird die Statusänderung automatisch angewendet.

In einigen Fällen jedoch wird eine Statusänderung unabhängig von einer Navigation oder einem Neuladen sein — beispielsweise wenn eine Seite ein erweiterbares/einklappbares {{htmlelement("details")}} Element enthält. In diesem Fall möchten Sie möglicherweise den expandierten/eingeklappten Zustand in Ihrem Verlaufseintrag speichern, damit Sie ihn wiederherstellen können, wenn der Benutzer zur Seite zurückkehrt oder seinen Browser neu startet. Solche Fälle werden mit [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) gehandhabt. Das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) Ereignis wird ausgelöst, wenn die Änderung des aktuellen Eintrags abgeschlossen ist.

### Einschränkungen

Es gibt einige wahrgenommene Einschränkungen mit der Navigation API:

1. Die aktuelle Spezifikation löst kein [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis beim ersten Laden einer Seite aus. Dies könnte für Seiten, die Server Side Rendering (SSR) verwenden, in Ordnung sein—Ihr Server könnte den korrekten anfänglichen Zustand zurückgeben, was der schnellste Weg ist, Inhalte an Ihre Benutzer zu liefern. Doch Seiten, die clientseitigen Code nutzen, um ihre Seiten zu erstellen, benötigen möglicherweise eine zusätzliche Funktion zur Initialisierung der Seite.
2. Die Navigation API arbeitet nur innerhalb eines einzelnen Frames—der obersten Seite oder eines spezifischen {{htmlelement("iframe")}}s. Dies hat einige interessante Implikationen, die [in der Spezifikation weiter dokumentiert sind](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites), reduziert in der Praxis jedoch die Entwicklerverwirrung. Die vorherige [History API](/de/docs/Web/API/History_API) hat mehrere verwirrende Randfälle, wie die Unterstützung von Frames, die die Navigation API von Anfang an behandelt.
3. Sie können derzeit nicht die Navigation API verwenden, um die Verlaufsliste programmgesteuert zu ändern oder neu zu ordnen. Es könnte nützlich sein, einen temporären Zustand zu haben, z. B. den Benutzer zu einem temporären Modal zu navigieren, das ihn nach Informationen fragt, und dann zur vorherigen URL zurückzukehren. In diesem Fall möchten Sie den temporären Modal-Verlaufseintrag löschen, damit der Benutzer den Ablauf der Anwendung nicht durch Drücken der Vorwärtstaste durcheinander bringen kann und ihn erneut öffnet.

## Schnittstellen

- [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis, das ausgelöst wird, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird. Es bietet Zugang zu Informationen über diese Navigation, und insbesondere die [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept), die es Ihnen ermöglicht, zu kontrollieren, was passiert, wenn die Navigation initiiert wird.
- [`Navigation`](/de/docs/Web/API/Navigation) {{Experimental_Inline}}
  - : Ermöglicht die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmatischen Initiierung von Navigationen, des Überprüfens von Navigationseinträgen im Verlauf und der Verwaltung von Navigationen, während sie stattfinden.
- [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)
  - : Repräsentiert eine kürzliche dokumentübergreifende Navigation. Sie enthält den Navigationstyp sowie aktuelle und Ziel-Dokumenthistorieinbindungen.
- [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) Ereignis, das ausgelöst wird, wenn die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) sich geändert hat. Es bietet Zugang zum Navigationstyp und zum vorherigen Verlaufseintrag, von dem aus navigiert wurde.
- [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) {{Experimental_Inline}}
  - : Repräsentiert das Ziel, zu dem in der aktuellen Navigation navigiert wird.
- [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) {{Experimental_Inline}}
  - : Repräsentiert einen einzelnen Verlaufseintrag.
- [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) {{Experimental_Inline}}
  - : Repräsentiert eine laufende Navigation.

## Erweiterungen zu anderen Schnittstellen

- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das für das aktuelle `window` assoziierte [`Navigation`](/de/docs/Web/API/Navigation) Objekt zurück. Dies ist der Einstiegspunkt für die Navigation API.

## Beispiele

> [!NOTE]
> Schauen Sie sich Domenic Denicola's [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/) an.

### Handling einer Navigation mit `intercept()`

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

In diesem Beispiel des Abfangens einer Navigation beginnt die `handler()` Funktion mit dem Abrufen und Rendern einiger Artikelinhalte, ruft aber anschließend noch einige sekundäre Inhalte ab und rendert sie. Es ist sinnvoll, die Seite zum Hauptartikelinhalt zu scrollen, sobald er verfügbar ist, damit der Benutzer damit interagieren kann, anstatt zu warten, bis der sekundäre Inhalt ebenfalls gerendert ist. Dazu haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) Aufruf zwischen den beiden hinzugefügt.

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

### Navigation zu einem bestimmten Eintrag im Verlauf

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
