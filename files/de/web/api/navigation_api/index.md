---
title: Navigation API
slug: Web/API/Navigation_API
l10n:
  sourceCommit: 280e77d96ea10ee5169e5b9e5e329f10fe84869d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Navigation API")}}

Die **Navigation API** bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Verlaufseinträge einer Anwendung untersuchen. Sie ist ein Nachfolger früherer Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), welche deren Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} ausgerichtet ist.

## Konzepte und Nutzung

In SPAs bleibt die Seitenschablone während der Nutzung meist gleich, und der Inhalt wird dynamisch umgeschrieben, wenn der Benutzer verschiedene Seiten oder Funktionen besucht. Dadurch wird im Browser nur eine eindeutige Seite geladen, was die erwartete Benutzererfahrung des Vor- und Zurücknavigierens zwischen verschiedenen Orten im Verlaufserlauf bricht. Dieses Problem kann bis zu einem gewissen Grad über die [History API](/de/docs/Web/API/History_API) gelöst werden, aber sie ist nicht für die Bedürfnisse von SPAs ausgelegt. Die Navigation API zielt darauf ab, diese Lücke zu schließen.

Auf die API wird über die [`Window.navigation`](/de/docs/Web/API/Window/navigation)-Eigenschaft zugegriffen, die eine Referenz auf ein globales [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurückgibt. Jedes `window`-Objekt hat seine eigene entsprechende `navigation`-Instanz.

### Umgang mit Navigationen

Das `navigation`-Interface hat mehrere zugehörige Ereignisse, wobei das bemerkenswerteste das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis ist. Dies wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, was bedeutet, dass Sie alle Seitennavigationen von einem zentralen Ort aus steuern können, ideal für die Routing-Funktionalität in SPA-Frameworks. (Dies ist nicht der Fall bei der [History API](/de/docs/Web/API/History_API), bei der es manchmal schwierig ist, auf alle Navigationen zu reagieren.) Der `navigate`-Ereignis-Handler erhält ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Objekt, das detaillierte Informationen enthält, einschließlich Einzelheiten über das Ziel der Navigation, Typ, ob es `POST`-Formulardaten oder eine Download-Anfrage enthält und mehr.

Das `NavigationEvent`-Objekt bietet auch zwei Methoden:

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) ermöglicht es Ihnen, benutzerdefiniertes Verhalten für Navigationen zu spezifizieren und kann die folgenden Argumente annehmen:
  - Callback-Handler-Funktionen, die es Ihnen erlauben, zu spezifizieren, was passiert, sowohl wenn die Navigation begangen wird als auch kurz bevor die Navigation begangen wird. Beispielsweise könnten Sie relevanten neuen Inhalt in die Benutzeroberfläche laden basierend auf dem Pfad der URL, zu der navigiert wird, oder den Browser zu einer Anmeldeseite weiterleiten, wenn die URL auf eine eingeschränkte Seite zeigt und der Benutzer nicht angemeldet ist.
  - Eigenschaften, die es Ihnen erlauben, das Standardverhalten des Browsers bezüglich Fokus und Bildlauf nach einer Navigation zu aktivieren oder zu deaktivieren.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) erlaubt es Ihnen, das Scrollverhalten des Browsers manuell zu initiieren (z.B. zu einem Fragmentbezeichner in der URL), wenn es für Ihren Code sinnvoll ist, anstatt darauf zu warten, dass der Browser es automatisch handhabt.

Sobald eine Navigation initiiert ist und Ihr `intercept()`-Handler aufgerufen wird, wird eine Instanz des [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekts erstellt (zugänglich über [`Navigation.transition`](/de/docs/Web/API/Navigation/transition)), die verwendet werden kann, um den Prozess der laufenden Navigation zu verfolgen.

> [!NOTE]
> In diesem Kontext bezieht sich „Übergang“ auf den Übergang zwischen einem Verlaufseintrag und einem anderen. Es steht nicht im Zusammenhang mit CSS-Übergängen.

> [!NOTE]
> Sie können auch [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um die Navigation vollständig zu stoppen, für die meisten [Navigationstypen](/de/docs/Web/API/NavigateEvent/navigationType#value); die Stornierung von Durchsuchen-Navigationen ist noch nicht implementiert.

Wenn die von den `intercept()`-Handler-Funktionen zurückgegebenen Promises erfüllt werden, löst das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis des `Navigation`-Objekts aus, wodurch Sie Aufräumcode ausführen können, nachdem eine erfolgreiche Navigation abgeschlossen ist. Wenn sie abgelehnt werden, was bedeutet, dass die Navigation fehlgeschlagen ist, wird stattdessen das [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis ausgelöst, wodurch Sie den Fehlerfall elegant behandeln können. Es gibt auch eine `finished`-Eigenschaft im Rückgabewert von Navigationsmethoden (wie [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), die gleichzeitig mit den vorgenannten Ereignissen erfüllt oder abgelehnt wird und einen weiteren Weg bietet, um die Erfolg- und Fehlerfälle zu behandeln.

> [!NOTE]
> Bevor die Navigation API verfügbar war, musste man, um etwas Ähnliches zu tun, alle Klickereignisse auf Links abhören, `e.preventDefault()` ausführen, den passenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf tätigen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und dies würde nicht alle Navigationen behandeln — nur vom Benutzer initiierte Link-Klicks.

### Programmatische Aktualisierung und Durchlauf des Navigationsverlaufs

Während der Benutzer durch Ihre Anwendung navigiert, führt jeder neue besuchte Standort zur Erstellung eines Navigationsverlaufs-Eintrags. Jeder Verlaufseintrag wird durch eine eindeutige [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objektinstanz dargestellt. Diese enthalten mehrere Eigenschaften wie den Schlüssel, die URL und die Zustandsinformationen des Eintrags. Sie können den Eintrag, auf dem der Benutzer sich aktuell befindet, mit [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) abrufen und ein Array aller bestehenden Verlaufs-Einträge mit [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries). Jedes `NavigationHistoryEntry`-Objekt hat ein [`dispose`](/de/docs/Web/API/NavigationHistoryEntry/dispose_event)-Ereignis, das ausgelöst wird, wenn der Eintrag nicht mehr Teil des Browserverlaufs ist. Zum Beispiel, wenn der Benutzer dreimal zurücknavigiert und dann an einen anderen Ort navigiert, werden diese drei Verlaufs-Einträge gelöscht.

> [!NOTE]
> Die Navigation API zeigt nur solche Verlaufs-Einträge an, die im aktuellen Browsing-Kontext erstellt wurden und denselben Ursprung wie die aktuelle Seite haben (z.B. keine Navigationsvorgänge in eingebetteten {{htmlelement("iframe")}}s oder Navigationsvorgänge über Ursprünge hinweg), und liefert so eine genaue Liste aller vorherigen Verlaufs-Einträge nur für Ihre App. Dies macht das Durchlaufen des Verlaufs zu einem viel weniger fragilen Unterfangen als bei der älteren [History API](/de/docs/Web/API/History_API).

Das `Navigation`-Objekt enthält alle Methoden, die Sie benötigen, um den Navigationsverlauf zu aktualisieren und durch ihn zu navigieren:

- [`navigate()`](/de/docs/Web/API/Navigation/navigate) {{Experimental_Inline}}
  - : Navigiert zu einer neuen URL und erstellt einen neuen Navigationsverlaufs-Eintrag.
- [`reload()`](/de/docs/Web/API/Navigation/reload) {{Experimental_Inline}}
  - : Lädt den aktuellen Navigationsverlaufs-Eintrag neu.
- [`back()`](/de/docs/Web/API/Navigation/back) {{Experimental_Inline}}
  - : Navigiert zum vorherigen Navigationsverlaufs-Eintrag, sofern möglich.
- [`forward()`](/de/docs/Web/API/Navigation/forward) {{Experimental_Inline}}
  - : Navigiert zum nächsten Navigationsverlaufs-Eintrag, sofern möglich.
- [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) {{Experimental_Inline}}
  - : Navigiert zu einem spezifischen Navigationsverlaufs-Eintrag, identifiziert durch seinen Schlüsselwert, der über die relevante [`NavigationHistoryEntry.key`](/de/docs/Web/API/NavigationHistoryEntry/key)-Eigenschaft abgerufen wird.

Jede der oben genannten Methoden gibt ein Objekt zurück, das zwei Promises enthält — `{ committed, finished }`. Dies ermöglicht es der aufrufenden Funktion, mit weiteren Maßnahmen zu warten, bis:

- `committed` erfüllt wurde, was bedeutet, dass sich die sichtbare URL geändert hat und ein neues [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished` erfüllt wurde, was bedeutet, dass alle Promises, die von Ihrem `intercept()`-Handler zurückgegeben werden, erfüllt sind. Dies entspricht der Erfüllung des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Promises, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird, wie zuvor erwähnt.
- eines der oben genannten Promises wird abgelehnt, was bedeutet, dass die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Status

Die Navigation API erlaubt es Ihnen, Zustandsinformationen auf jedem Verlaufs-Eintrag zu speichern. Dies sind vom Entwickler definierte Informationen — es kann sein, was auch immer Sie möchten. Zum Beispiel könnten Sie eine `visitCount`-Eigenschaft speichern wollen, die die Anzahl der Male aufzeichnet, die eine Ansicht besucht wurde, oder ein Objekt mit mehreren Eigenschaften im Zusammenhang mit dem UI-Status, sodass der Status wiederhergestellt werden kann, wenn ein Benutzer zu dieser Ansicht zurückkehrt.

Um den Zustand eines [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) abzurufen, rufen Sie seine [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState)-Methode auf. Sie ist anfangs `undefined`, aber wenn Zustandsinformationen auf dem Eintrag gesetzt werden, gibt sie die zuvor gesetzten Zustandsinformationen zurück.

Das Setzen des Zustands ist etwas nuancierter. Sie können den Zustandswert nicht abrufen und dann direkt aktualisieren — die Kopie, die auf dem Eintrag gespeichert ist, wird sich nicht ändern. Stattdessen aktualisieren Sie ihn, während Sie eine [`navigate()`](/de/docs/Web/API/Navigation/navigate) oder [`reload()`](/de/docs/Web/API/Navigation/reload) durchführen — jede dieser Methoden nimmt optional ein Objektparameter entgegen, das eine `state`-Eigenschaft enthält, die den neuen Zustand enthält, der auf den Verlaufs-Eintrag gesetzt werden soll. Wenn diese Navigationen begangen werden, wird die Zustandsänderung automatisch angewendet.

In einigen Fällen jedoch ist eine Zustandsänderung unabhängig von einer Navigation oder einem Neuladen — beispielsweise wenn eine Seite ein expandierbares/zusammenklappbares {{htmlelement("details")}}-Element enthält. In diesem Fall möchten Sie möglicherweise den erweiterten/zusammengeklappten Zustand in Ihrem Verlaufs-Eintrag speichern, damit Sie ihn wiederherstellen können, wenn der Benutzer zur Seite zurückkehrt oder seinen Browser neu startet. Fälle wie dieser werden mit [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) gehandhabt. Das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Ereignis wird ausgelöst, wenn die Änderung des aktuellen Eintrags abgeschlossen ist.

### Einschränkungen

Es gibt einige wahrgenommene Einschränkungen mit der Navigation API:

1. Die derzeitige Spezifikation löst kein [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis beim ersten Laden einer Seite aus. Dies könnte für Websites, die Server Side Rendering (SSR) verwenden, in Ordnung sein — Ihr Server könnte den korrekten Anfangszustand zurückgeben, was der schnellste Weg ist, Inhalte zu Ihren Benutzern zu bringen. Aber Seiten, die clientsseitigen Code verwenden, um ihre Seiten zu erstellen, benötigen möglicherweise eine zusätzliche Funktion, um die Seite zu initialisieren.
2. Die Navigation API operiert nur innerhalb eines einzelnen Frames — der obersten Ebene der Seite oder eines einzelnen spezifischen {{htmlelement("iframe")}}. Dies hat einige interessante Implikationen, die [weiter in der Spezifikation dokumentiert](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites) sind, aber in der Praxis wird es die Verwirrung der Entwickler reduzieren. Die vorherige [History API](/de/docs/Web/API/History_API) hat mehrere verwirrende Grenzfälle, wie die Unterstützung für Frames, die die Navigation API von Anfang an handhabt.
3. Sie können die Navigation API derzeit nicht verwenden, um die Verlaufsliste programmgesteuert zu bearbeiten oder neu anzuordnen. Es könnte nützlich sein, einen temporären Zustand zu haben, zum Beispiel indem der Benutzer zu einem temporären Modal navigiert wird, das einige Informationen von ihm erfordert, um dann zur vorherigen URL zurückzukehren. In diesem Fall würden Sie den temporären Modal-Navigations-Eintrag löschen wollen, damit der Benutzer nicht den Anwendungsfluss durch Klicken auf die Vorwärtstaste stören und erneut öffnen kann.

## Schnittstellen

- [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis, das ausgelöst wird, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird. Es bietet Zugang zu Informationen über diese Navigation und vor allem die [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept), die es Ihnen erlaubt zu kontrollieren, was passiert, wenn die Navigation initiiert wird.
- [`Navigation`](/de/docs/Web/API/Navigation) {{Experimental_Inline}}
  - : Erlaubt die Kontrolle über alle Navigationsaktionen für das aktuelle `window` an einem zentralen Ort, einschließlich der programmatischen Initiierung von Navigationen, der Überprüfung von Verlaufs-Einträgen und der Verwaltung von Navigationen während ihrer Ausführung.
- [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) {{Experimental_Inline}}
  - : Repräsentiert eine kürzlich erfolgte dokumentübergreifende Navigation. Es enthält den Navigationstyp und die aktuellen sowie die Ziel-Verlaufs-Einträge des Dokuments.
- [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Ereignis, das ausgelöst wird, wenn sich [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat. Es bietet Zugriff auf den Navigationstyp und den vorherigen Verlaufs-Eintrag, von dem aus navigiert wurde.
- [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) {{Experimental_Inline}}
  - : Repräsentiert das Ziel, zu dem im Rahmen der aktuellen Navigation navigiert wird.
- [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) {{Experimental_Inline}}
  - : Repräsentiert einen einzelnen Navigationsverlaufs-Eintrag.
- [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController) {{Experimental_Inline}}
  - : Definiert Umleitungsverhalten für einen Navigation-Vorcommit-Handler, wenn es in den [`precommitHandler`](/de/docs/Web/API/NavigateEvent/intercept#precommithandler) Callback eines [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept)-Methodenaufrufs übergeben wird.
- [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) {{Experimental_Inline}}
  - : Repräsentiert eine laufende Navigation.

## Erweiterungen für andere Schnittstellen

- [`Window.navigation`](/de/docs/Web/API/Window/navigation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das mit dem aktuellen `window` assoziierte [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück. Dies ist der Einstiegspunkt für die Navigation API.

## Beispiele

> [!NOTE]
> Sehen Sie sich das [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Quellcode der Demo anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api)) an.

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

### Handhabung von Bildläufen mit `scroll()`

In diesem Beispiel wird bei der Abfangung einer Navigation die Funktion `handler()` verwendet, um einige Artikeldaten abzurufen und zu rendern, wobei anschließend sekundäre Inhalte abgerufen und gerendert werden. Es ist sinnvoll, die Seite sofort zum Hauptartikel-Inhalt zu scrollen, sobald dieser verfügbar ist, damit der Benutzer interagieren kann, anstatt zu warten, bis auch der sekundäre Inhalt gerendert wird. Um dies zu erreichen, haben wir zwischen den beiden einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf eingefügt.

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

### Traversierung zu einem spezifischen Verlaufs-Eintrag

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Aktualisierung des Statuses

```js
navigation.navigate(url, { state: newState });
```

Oder

```js
navigation.reload({ state: newState });
```

Oder wenn der Status unabhängig von einer Navigation oder einem Neuladen ist:

```js
navigation.updateCurrentEntry({ state: newState });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
