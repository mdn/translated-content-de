---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Speculation Rules API** ist darauf ausgelegt, die Leistung künftiger Navigationen zu verbessern. Sie richtet sich an Dokument-URLs und nicht an spezifische Ressourcendateien und macht daher für Multi-Page-Anwendungen (MPAs) mehr Sinn als für Single-Page-Anwendungen (SPAs).

Die Speculation Rules API bietet eine Alternative zu der weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) Funktion und soll die nur in Chrome verfügbare, veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) Funktion ersetzen. Sie bietet viele Verbesserungen gegenüber diesen Technologien sowie eine ausdrucksstärkere, konfigurierbare Syntax, um festzulegen, welche Dokumente vorab geladen oder vorgerendert werden sollen.

> [!NOTE]
> Die Speculation Rules API behandelt keine Subressourcen-Prefetches; hierfür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Verwendung

Spekulationsregeln können innerhalb von Inline [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) Elementen und externen Textdateien angegeben werden, auf die im {{httpheader("Speculation-Rules")}} Antwort-Header verwiesen wird. Die Regeln werden als JSON-Struktur angegeben.

Ein Skript-Beispiel:

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": {
          "and": [
            { "href_matches": "/*" },
            { "not": { "href_matches": "/logout" } },
            { "not": { "href_matches": "/*\\?*(^|&)add-to-cart=*" } },
            { "not": { "selector_matches": ".no-prerender" } },
            { "not": { "selector_matches": "[rel~=nofollow]" } }
          ]
        }
      }
    ],
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
```

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen explizit in der {{httpheader("Content-Security-Policy")}} [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive erlaubt werden, wenn die Seite diese enthält. Dies geschieht durch das Hinzufügen einer der `'inline-speculation-rules'` Quellen, einer Hash-Quelle oder einer Nonce-Quelle.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das Spekulationsregels-JSON enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, muss jedoch mit einem `application/speculationrules+json` MIME-Typ geliefert werden.

> [!NOTE]
> Regeln können sowohl mit einem Inline-Skript als auch mit dem HTTP-Header gleichzeitig festgelegt werden – alle auf ein Dokument angewendeten Regeln werden analysiert und der Spekulationsregelliste des Dokuments hinzugefügt.

Für jede Art des spekulativen Ladens (z. B. `"prerender"` oder `"prefetch"`) geben Sie ein anderes Array an, um die Regeln zu enthalten. Jede Regel befindet sich in einem Objekt, das beispielsweise eine Liste von abzurufenden Ressourcen sowie Optionen wie eine explizite {{httpheader("Referrer-Policy")}}-Einstellung für jede Regel angibt. Beachten Sie, dass vorgerenderte URLs ebenfalls vorab geladen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Verwendung von Prefetching

Das Einfügen von `prefetch`-Regeln in ein `<script type="speculationrules">`-Element oder einen `Speculation-Rules`-Header führt dazu, dass unterstützende Browser den Antwortkörper der referenzierten Seiten herunterladen, jedoch keine der von der Seite referenzierten Subressourcen. Wenn zu einer vorab geladenen Seite navigiert wird, wird sie viel schneller angezeigt, als wenn sie nicht vorab geladen worden wäre.

Die Ergebnisse werden in einem pro Dokument gehaltenen Speicher-Cache gespeichert. Vorab gecachte Prefetches werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich ein vorab geladenes Dokument, zu dem Sie dann navigieren.

Das bedeutet, dass, wenn Sie etwas vorab laden, zu dem der Benutzer nicht navigieren wird, dies im Allgemeinen eine Verschwendung von Ressourcen ist, obwohl das Ergebnis ggf. den HTTP-Cache füllen kann, wenn dies von den Headers erlaubt wird. Der Anfangsaufwand eines Prefetch ist jedoch viel geringer als der eines Prerenders, daher wird empfohlen, Prefetching breitflächig zu übernehmen, zum Beispiel alle wichtigen Seiten Ihrer Website vorab zu laden, vorausgesetzt, sie sind sicher zum Vorabladen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Details).

Same-Site und Cross-Site Prefetches funktionieren, aber Cross-Site Prefetches sind eingeschränkt (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen den beiden). Aus Datenschutzgründen funktionieren Cross-Site Prefetches derzeit nur, wenn der Benutzer keine Cookies für die Zielseite gesetzt hat – wir möchten nicht, dass Websites die Benutzeraktivitäten über vorab geladene Seiten (die sie möglicherweise nie tatsächlich besuchen) basierend auf zuvor gesetzten Cookies nachverfolgen können.

> [!NOTE]
> In Zukunft wird ein Opt-in für Cross-Site Prefetches über den {{httpheader("Supports-Loading-Mode")}} Header bereitgestellt, aber dies wurde zum Zeitpunkt des Schreibens noch nicht implementiert (nur das Opt-in für Cross-Origin, Same-Site [Prerendering](#verwendung_von_prerendering) war verfügbar).

Für Browser, die es unterstützen, sollte das Prefetching von Spekulationsregeln den älteren Prefetch-Mechanismen, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"` Option, vorgezogen werden. Da wir wissen, dass das Prefetching von Spekulationsregeln für Navigationen und nicht für allgemeines Ressourcen-Prefetching gedacht ist:

- Es kann für Cross-Site Navigationen verwendet werden, während `<link rel="prefetch">` dies nicht kann.
- Es wird nicht durch {{httpheader("Cache-Control")}} Headers blockiert, während `<link rel="prefetch">` dies häufig tut.

Zusätzlich dazu, Prefetching von Spekulationsregeln:

- Verringert bei Bedarf automatisch die Priorität (`fetch()` tut dies nicht).
- Respektiert die Konfiguration des Benutzers. Zum Beispiel passiert Prefetching nicht, wenn das Gerät des Benutzers im Energiesparmodus oder im Datensparmodus ist.
- Speichert die vorab geladenen Ressourcen in einem pro Dokument gehaltenen Speicher-Cache, im Gegensatz zum HTTP-Cache, was zu einem leicht schnelleren Prefetching führen kann.

### Verwendung von Prerendering

Das Einfügen von `prerender`-Regeln in ein `<script type="speculationrules">`-Element oder einen `Speculation-Rules`-Header führt dazu, dass unterstützende Browser den Inhalt abrufen, rendern und in eine unsichtbare Registerkarte laden und in einem pro Dokument gehaltenen Speicher-Cache speichern. Dies umfasst das Laden aller Subressourcen, das Ausführen aller JavaScripts und sogar das Laden von Subressourcen und das Ausführen von von JavaScript initiierten Datenabrufen. Alle gecachten Prerender und deren Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich ein vorgerendertes Dokument, zu dem Sie dann navigieren.

Zukünftige Navigationen zu einer vorgerenderten Seite werden nahezu sofort erfolgen. Der Browser aktiviert die unsichtbare Registerkarte anstelle des normalen Navigationsprozesses und ersetzt die alte Vordergrundseite durch die vorgerenderte Seite. Wenn eine Seite aktiviert wird, bevor sie vollständig vorgerendert ist, wird sie im aktuellen Zustand aktiviert und lädt dann weiter, was bedeutet, dass Sie immer noch eine erhebliche Leistungsverbesserung sehen.

Prerendering verbraucht Speicher und Netzwerkbandbreite. Wenn Sie etwas vorgerendern, zu dem der Benutzer nicht navigiert, sind diese verschwendet (obwohl das Ergebnis den HTTP-Cache auffüllen kann, wenn dies von den Headers erlaubt wird, was eine spätere Verwendung ermöglicht). Der Anfangsaufwand eines Prerender ist viel größer als der eines Prefetch und andere Bedingungen könnten auch Inhalte unsicher zum Prerendern machen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Details). Daher wird empfohlen, Prerendering sparsamer einzusetzen, wobei Fälle sorgfältig geprüft werden sollten, in denen eine hohe Wahrscheinlichkeit besteht, dass zur Seite navigiert wird und Sie der Meinung sind, dass der Nutzen für die Benutzererfahrung den zusätzlichen Aufwand wert ist.

> [!NOTE]
> Um den Umfang der möglichen Ressourcenverschwendung in Perspektive zu setzen: Ein Prerender verbraucht etwa die gleiche Menge an Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden automatisch verzögert, wenn sie prerendering/until activation sind. Siehe [Plattformmerkmale, die während des Prerenderings verzögert oder eingeschränkt werden](#plattform-funktionen,_die_während_des_prerenderings_verzögert_oder_eingeschränkt_werden) für weitere Details.

Prerendering ist standardmäßig auf gleichartige Dokumente beschränkt. Cross-Origin, Same-Site Prerendering ist möglich – es erfordert das Opt-in des Navigationstargets über den {{httpheader("Supports-Loading-Mode")}} Header mit einem Wert von `credentialed-prerender`. Cross-Site Prerendering ist derzeit nicht möglich.

Für Browser, die es unterstützen, sollte das Prerendering von Spekulationsregeln den älteren Prerender-Mechanismen, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender), vorgezogen werden:

- `<link rel="prerender">` ist Chrome-spezifisch und wurde nie standardisiert, und das Chrome-Engineering-Team ist dabei, es auslaufen zu lassen.
- Es lädt Subressourcen, die über JavaScript geladen werden, während `<link rel="prerender">` dies nicht tut.
- Es wird nicht durch {{httpheader("Cache-Control")}}-Einstellungen blockiert, während `<link rel="prerender">` dies häufig tut.
- Das Prerendering von Spekulationsregeln sollte als Hinweis und progressive Verbesserung behandelt werden. Im Gegensatz zu `<link rel="prerender">` ist es ein spekulativer Hinweis, und der Browser kann sich entscheiden, den Hinweis nicht zu befolgen, basierend auf Benutzereinstellungen, aktuellem Speicherverbrauch oder anderen Heuristiken.

### Feature-Erkennung der Spekulationsregels-API

Sie können prüfen, ob die Speculation Rules API unterstützt wird, indem Sie den folgenden Code verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Zum Beispiel möchten Sie vielleicht Spekulationsregeln für Prefetching in unterstützenden Browsern einfügen, aber eine ältere Technologie wie `<link rel="prefetch">` in anderen verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  const specScript = document.createElement("script");
  specScript.type = "speculationrules";
  const specRules = {
    prefetch: [
      {
        source: "list",
        urls: ["/next.html"],
      },
    ],
  };
  specScript.textContent = JSON.stringify(specRules);
  document.body.append(specScript);
} else {
  const linkElem = document.createElement("link");
  linkElem.rel = "prefetch";
  linkElem.href = "/next.html";
  document.head.append(linkElem);
}
```

## Erkennung von vorab geladenen und vorgerenderten Seiten

Dieser Abschnitt betrachtet verschiedene Möglichkeiten, um festzustellen, ob eine angeforderte Seite vorab geladen oder vorgerendert wurde.

### Serverseitige Erkennung

Vorab geladene und vorgerenderte Seitenanfragen werden mit dem {{httpheader("Sec-Purpose")}} Anfrage-Header gesendet:

Für prefetch:

```http
Sec-Purpose: prefetch
```

Für prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können basierend auf diesem Header antworten, um beispielsweise spekulative Ladeanfragen zu protokollieren, unterschiedlichen Inhalt zurückzugeben oder das spekulative Laden sogar zu verhindern. Wenn ein anderer als ein Erfolgscode zurückgegeben wird (jedem HTTP-Status außer im Bereich 200-299 nach Umleitungen), wird die Seite nicht vorab geladen/vorgerendert. Zusätzlich verhindern die Statuscodes 204 und 205 das Prerendering (aber nicht das Prefetching).

Die Verwendung eines nicht erfolgreichen Codes (zum Beispiel ein 503) ist der einfachste Weg, um serverseitiges spekulatives Laden zu verhindern, obwohl es normalerweise ein besserer Ansatz ist, das Prefetch/Prerender zu erlauben und JavaScript zu verwenden, um Aktionen zu verzögern, die nur auftreten sollten, wenn die Seite wirklich angezeigt wird.

### JavaScript-Prefetch-Erkennung

Wenn eine Seite vorab geladen wird, gibt ihr [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType)-Eintrag den Wert `"navigational-prefetch"` zurück. Sie könnten das Folgende verwenden, um eine Funktion auszuführen, wenn ein Performance Eintrag des Typs `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist nützlich, wenn es um das Messen der Leistung geht oder wenn man Aktionen verzögern möchte, die Probleme verursachen könnten, wenn sie während des Prefetches auftreten (siehe [Unsichere Prefetch-Bedingungen](#unsichere_bedingungen_beim_prefetching)).

### JavaScript-Prerender-Erkennung

Um eine Aktivität auszuführen, während die Seite prerendert wird, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft überprüfen. Sie könnten beispielsweise einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorgerendertes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Zeit zwischen dem Start des Prerenders und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl für vorgerenderte als auch aktivierte Seiten prüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vorgerenderte Seite vom Benutzer durch das Anzeigen der Seite aktiviert wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die zuvor standardmäßig beim Laden der Seite gestartet worden wären, die Sie jedoch verzögern möchten, bis die Seite vom Benutzer angezeigt wird. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Prerendering auf einer vorgerenderten Seite abgeschlossen ist oder sofort auf einer nicht vorgerenderten Seite ausgeführt wird:

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

## Unsichere spekulative Ladebedingungen

Dieser Abschnitt behandelt Bedingungen, auf die Sie achten sollten, unter denen Prefetching und/oder Prerendering **unsicher** sind. Dies bedeutet, dass das Vorabladen/Vorabrendern von Seiten, die diese Bedingungen aufweisen, möglicherweise Abhilfemaßnahmen in Ihrem Code erfordert oder ganz vermieden werden muss.

### Unsichere Bedingungen beim Prefetching

Wie bereits erwähnt, empfehlen wir, Prefetching umfassend einzusetzen, da das Verhältnis von Risiko zu Belohnung recht gering ist – das Potenzial für Ressourcenverschwendung ist minimal, und die Leistungsverbesserungen können erheblich sein. Sie müssen jedoch sicherstellen, dass vorab geladene Seiten keine Probleme im Ablauf Ihrer Anwendung verursachen.

Wenn ein Prefetch durchgeführt wird, lädt der Browser den Antwortkörper der referenzierten Seite über eine einzelne GET-Anfrage herunter, die der Benutzer zu einem zukünftigen Zeitpunkt besuchen könnte. Probleme können speziell auftreten, wenn die URL der Anfrage einen vom Server initiierten Seiteneffekt ausführt, den Sie nicht möchten, bis die URL besucht wird.

Zum Beispiel:

- Abmelde-URLs.
- Sprache-Wechsel-URLs.
- "In den Warenkorb"-URLs.
- URLs des Anmeldevorgangs, bei denen der Server dazu führt, dass eine SMS gesendet wird, zum Beispiel als Einmalpasswort (OTP).
- URLs, die Zählungen des Benutzerkontingents erhöhen, z.B. wenn das monatliche Freiguthaben an Artikeln verbraucht wird oder der Timer für die monatlichen Minuten startet.
- URLs, die conversion-tracking auf dem Server für Werbung auslösen.

Solche Probleme können auf dem Server abgefangen werden, indem man auf den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} Header achtet, wenn die Anfragen hereinkommen, und dann spezifischen Code ausführt, um problematische Funktionen zu verschieben. Später, wenn die Seite tatsächlich besucht wird, können Sie die verschobene Funktionalität bei Bedarf mittels JavaScript initiieren.

> [!NOTE]
> Sie finden weitere Details zum Erkennungscode im Abschnitt [Vorabgeladene und vorgerenderte Seiten erkennen](#erkennung_von_vorab_geladenen_und_vorgerenderten_seiten).

Es kann auch riskant sein, ein Dokument vorab zu laden, dessen serverseitig gerenderter Inhalt sich aufgrund von Aktionen ändert, die der Benutzer auf der aktuellen Seite durchführen kann. Dies könnte zum Beispiel Flash-Verkaufsseiten oder Sitzpläne für Kinos betreffen. Solche Fälle sollten sorgfältig getestet werden und Probleme vermieden werden, indem der Inhalt aktualisiert wird, wenn die Seite geladen wird. Siehe [Server-gerenderter variierender Zustand](#server-gerenderter_variierender_zustand) für weitere Details zu diesen Fällen.

> [!NOTE]
> Browser speichern vorab geladene Seiten für kurze Zeit (Chrome speichert z. B. für 5 Minuten), bevor sie verworfen werden, sodass Ihre Benutzer in jedem Fall Inhalte sehen könnten, die bis zu 5 Minuten alt sind.

Veraltete Prefetches können mithilfe des {{httpheader("Clear-Site-Data#prefetchCache", "prefetchCache")}} Werts des {{httpheader("Clear-Site-Data")}} Antwort-Headers gelöscht werden.
Dies könnte beispielsweise eingesetzt werden, wenn Anfragen den status ändern, sodass die gespeicherten Daten nicht mehr gültig sind, z. B. beim Abmelden von einer Website.

Prefetching ist sicher, wenn alle Seiteneffekte des Abrufens durch die Ausführung von JavaScript ausgelöst werden, da das JavaScript bis zur Aktivierung nicht ausgeführt wird.

Ein letzter Tipp ist, die URLs, die in Ihrer {{Glossary("robots.txt", "robots.txt")}} Datei als nicht zulässig aufgeführt sind, zu überprüfen — normalerweise zeigen diese URLs auf Seiten, die nur von authentifizierten Benutzern aufgerufen werden können und daher nicht in Suchmaschinenergebnissen enthalten sein sollten. Viele davon sind in Ordnung, aber es kann ein guter Ort sein, um URLs zu finden, die unsicher für das Prefetching sind (d.h. sie weisen die oben beschriebenen Bedingungen auf).

### Unsichere Bedingungen beim Prerendering

Prerendering ist riskanter einzusetzen als Prefetching und sollte daher sparsamer eingesetzt werden, in Fällen, bei denen es sich lohnt. Es gibt mehr unsichere Bedingungen, auf die man beim Prerendering achten sollte, sodass, während die Belohnung höher ist, das Risiko es ebenfalls ist.

Wenn ein Prerender durchgeführt wird, holt der Browser die URL mit GET ab und rendert und lädt den Inhalt in eine unsichtbare Registerkarte. Dies umfasst die Ausführung des JavaScripts des Inhalts und das Laden aller Subressourcen, einschließlich jener, die durch JavaScript abgerufen werden. Inhalte könnten potenziell unsicher zum Prerendern sein, wenn eine der folgenden Bedingungen beobachtet wird:

- Die URL ist [unsicher zum Prefetchen](#unsichere_bedingungen_beim_prefetching). Lesen Sie zuerst den vorherigen Abschnitt, wenn Sie dies noch nicht getan haben, und verstehen Sie, dass diese Bedingungen auch gleichermaßen auf unsicheres Prerendering zutreffen.
- Das JavaScript der Seite modifiziert clientseitigen Speicher (zum Beispiel [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) beim Laden auf eine Art und Weise, die verwirrende Effekte in anderen, nicht vorgerenderten Seiten verursachen könnte, die der Benutzer derzeit ansieht.
- Die Seite führt JavaScript aus oder lädt Bilder, die Seiteneffekte verursachen, wie das Senden von Analysen, das Aufzeichnen von Anzeigenimpressionen oder das Ändern des Anwendungsstatus, als ob der Benutzer bereits damit interagiert hätte. Das wiederum kann den Ablauf der Anwendung beeinträchtigen oder zu fehlerhaften Leistungs- oder Nutzungsberichten führen. Siehe [Server-gerenderter variierender Zustand](#server-gerenderter_variierender_zustand) für weitere Details zu solchen Anwendungsfällen.

Um solche Probleme zu vermeiden, können Sie die folgenden Techniken verwenden:

- Beobachten Sie den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} Header auf dem Server, wenn die Anfragen hereinkommen, und führen Sie dann spezifischen Code aus, um problematische Funktionen zu verzögern.
- Verwenden Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis, um zu erkennen, wann die vorgerenderte Seite tatsächlich aktiviert wird, und führen Sie Code als Ergebnis aus. Dies ist in zwei Fällen nützlich:
  - Verzögerung von Code, der Probleme verursachen könnte, wenn er vor der Ansicht der Seite ausgeführt wird. Zum Beispiel möchten Sie vielleicht warten, bis nach der Aktivierung Aktivitäten im clientseitigen Speicher zu aktualisieren oder serverseitige Zustände mit JavaScript zu ändern. Dies kann Situationen vermeiden, in denen die Benutzeroberfläche und der Anwendungsstatus nicht mehr synchronisiert sind, z.B. bei einem Warenkorb, der keine Artikel anzeigt, obwohl der Benutzer einige hinzugefügt hat.
  - Wenn dies oben nicht möglich ist, könnten Sie den Code trotzdem erneut ausführen, nachdem die Seite aktiviert wurde, um die App wieder auf den neuesten Stand zu bringen. Zum Beispiel könnte eine sehr dynamische Flash-Verkaufsseite von Inhaltsaktualisierungen abhängen, die von einer Drittanbieter-Bibliothek kommen. Wenn Sie die Aktualisierungen nicht verzögern können, können Sie immer frische Updates erhalten, sobald der Benutzer die Seite ansieht. Vorgerenderte Seiten können in Echtzeit mit der [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einem anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einem [`WebSocket`](/de/docs/Web/API/WebSocket) aktualisiert werden. Dies gewährleistet, dass der Benutzer nach der Prerendering-Aktivierung aktuelle Inhalte sieht.
- Verwalten Sie Ihre Drittanbieter-Analyseskripte sorgfältig — wenn möglich, nutzen Sie Skripte, die prerendering-bewusst sind (z. B. verwenden Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft, um die Ausführung zu verzögern, bis die Seiten vorgeladen sind), wie Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden der Inhalte von cross-origin {{htmlelement("iframe")}}s während des Prerenderings verzögert wird, bis die Seite aktiviert wird. Dies geschieht, um ein Abbrechen zu vermeiden, wenn Seiten geladen werden, die sich nicht über das Prerendering bewusst sind oder um Komplikationen im Hinblick auf welche Berechtigungen und Speicher diese Frames zugänglich machen sollen, zu vermeiden. Dies bedeutet, dass die Benutzer in einigen Fällen zunächst leere Frames sehen können, aber es bedeutet auch, dass die meisten Drittanbieter-Widgets wie Ad-Tech während des Prerenderings sicher verwendet werden können.
  - Für Drittanbieterskripte, die nicht prerendering-bewusst sind, vermeiden Sie es, sie zu laden, bis nach der Aktivierung über das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Event, wie oben erwähnt.

### Server-gerenderter variierender Zustand

Es gibt zwei Hauptarten von serverseitigem Zustand, die berücksichtigt werden müssen: **veralteter Zustand** und **benutzerspezifischer Zustand**. Dies kann sowohl unsicheres Prefetching als auch Prerendering verursachen.

- Veralteter Zustand: Betrachten Sie das Beispiel einer serverseitig gerenderten Liste von Blogkommentaren, die veraltet sein könnte zwischen dem Zeitpunkt, an dem der Blogpost vorab geladen wurde, und dem Zeitpunkt, an dem er angesehen wurde. Dies könnte besonders problematisch sein, wenn die aktuelle Seite ein Adminpanel ist, auf dem der Benutzer Spamkommentare löscht. Wenn der Benutzer dann zur zugehörigen Seite navigiert, könnte er verwirrt sein, warum er die Spamkommentare sieht, die er soeben gelöscht hat.
- Benutzerspezifischer Zustand: Betrachten Sie das Beispiel des Tracking des Anmeldestatus über ein Cookie. Probleme wie die folgenden können auftreten:
  - Der Benutzer besucht `https://site.example/a` in Registerkarte 1 und `https://site.example/b` in Registerkarte 2, während er abgemeldet ist.
  - `https://site.example/b` prerendert `https://site.example/c`. Es wird im abgemeldeten Zustand vorgerendert.
  - Der Benutzer meldet sich in `https://site.example` in Registerkarte 1 an.
  - Der Benutzer wechselt zu Registerkarte 2 und klickt auf den Link zu `https://site.example/c`, was die vorgerenderte Seite aktiviert.
  - Registerkarte 2 zeigt eine abgemeldete Ansicht von `https://site.example/c`, was den Benutzer verwirrt, da er dachte, er sei eingeloggt.

Benutzerspezifische Zustandsprobleme können auch für andere Benutzereinstellungen auftreten, z. B. Spracheinstellungen, Dark-Mode-Präferenzen oder das Hinzufügen von Artikeln zu einem Warenkorb. Sie können auch auftreten, wenn nur eine Registerkarte beteiligt ist:

- Nehmen wir an, der Benutzer besucht `https://site.example/product`.
- `https://site.example.com/product` prerendert `https://site.example.com/cart`. Es wird mit 0 Artikeln im Warenkorb vorgerendert.
- Der Benutzer klickt auf die "In den Warenkorb" Schaltflächen, wodurch eine Fetch-Anfrage gestartet wird, um den Artikel in den Warenkorb des Benutzers zu legen (ohne Seitenneuladen).
- Der Benutzer klickt auf den Link zu `https://site.example.com/cart`, was die vorgerenderte Seite aktiviert.
- Der Benutzer sieht einen leeren Warenkorb, obwohl er gerade etwas hinzugefügt hat.

Die beste Abmilderung für diese Fälle und tatsächlich immer, wenn sich Inhalte außer Sync mit dem Server befinden können, ist, dass sich Seiten bei Bedarf selbst aktualisieren. Ein Server könnte beispielsweise die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einen [`WebSocket`](/de/docs/Web/API/WebSocket) verwenden. Seiten können sich dann selbst entsprechend aktualisieren, einschließlich spekulativ geladener Seiten, die noch nicht aktiviert wurden.

Wo Erneuerungen nicht möglich sind, können Spekulationen mithilfe des {{httpheader("Clear-Site-Data")}} Antwort-Headers mit den {{httpheader("Clear-Site-Data#prefetchCache", `prefetchCache`)}} oder {{httpheader("Clear-Site-Data#prerenderCache", `prerenderCache`)}} Werten (oder beidem) nach Bedarf gelöscht werden.

Der Header kann bei jedem gleichartigen HTTP-Request zurückgegeben werden (z. B. ein `/api/add-to-cart` API-Aufruf).

## Sitzungsverlauf-Verhalten für vorgerenderte Dokumente

Die Aktivierung eines prerendering/prerendered Dokuments verhält sich aus der Perspektive des Endbenutzers wie jede herkömmliche Navigation. Das aktivierte Dokument wird in der Registerkarte angezeigt und dem Sitzungsverlauf hinzugefügt, und bestehende Weiterverlaufeinträge werden entfernt. Jeder Navigationsvorgang, der innerhalb des Prerender-Browsing-Kontexts _vor_ der Aktivierung stattfindet, wirkt sich nicht auf den Sitzungsverlauf aus.

Aus der Perspektive eines Entwicklers kann ein prerendering Dokument als mit einem **trivialen Sitzungsverlauf** betrachtet werden, bei dem nur ein Eintrag – der aktuelle Eintrag – existiert. Alle Navigationen innerhalb des Prerender-Kontexts werden effektiv ersetzt.

Während API-Funktionen, die auf die Sitzungsgeschichte wirken (zum Beispiel [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation)) innerhalb von prerendering Dokumenten aufgerufen werden können, arbeiten sie nur auf der trivialen Sitzungsgeschichte des Kontexts. Folglich nehmen prerendering Dokumente nicht an der gemeinsamen Sitzungsgeschichte ihrer Referenzseite teil. Sie können z.B. den Referrer nicht über [`History.back()`](/de/docs/Web/API/History/back) navigieren.

Dieses Design stellt sicher, dass Benutzer die erwartete Benutzererfahrung erhalten, wenn sie die Zurücktaste verwenden – also, dass sie zur letzten gesehenen Sache zurückkehren. Sobald ein prerendering Dokument aktiviert ist, wird ein einziger Sitzungsverlaufs-Eintrag der gemeinsamen Sitzungsverlauf hinzugefügt, wobei alle vorherigen Navigationen ignoriert werden, die innerhalb des Prerender-Browsing-Kontexts stattfanden. Ein Schritt zurück im gemeinsamen Sitzungsverlauf – zum Beispiel durch Drücken der Zurück-Taste – bringt den Benutzer zurück zur Referenzseite.

## Plattform-Funktionen, die während des Prerenderings verzögert oder eingeschränkt werden

Da eine vorgerenderte Seite in einem versteckten Zustand geöffnet wird, werden mehrere API-Funktionen, die potenziell intrusive Verhaltensweisen verursachen, in diesem Zustand nicht aktiviert und stattdessen **verzögert** bis die Seite aktiviert ist. Andere Webplattform-Funktionen, die problematisch beim Prerendering sind, werden ganz eingeschränkt. Dieser Abschnitt enthält Details zu den Funktionen, die verzögert oder eingeschränkt werden.

> [!NOTE]
> In den wenigen Fällen, in denen Verzögerung und Einschränkung nicht möglich sind, wird das Prerender abgebrochen.

### Asynchrone API-Verzögerung

Das Verzögern bedeutet, dass die API-Funktion sofort ein ausstehendes Versprechen zurückgibt und dann nichts tut, bis die Seite aktiviert wird. Nach der Aktivierung läuft die Funktion normal ab und das Versprechen wird normal aufgelöst oder abgelehnt.

Die folgenden asynchronen Funktionen werden in vorgerenderten Dokumenten bis zur Aktivierung der Ergebnisse verzögert:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignis
- [Geolocation API](/de/docs/Web/API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API: Die Wiedergabeposition schreitet nicht voran, während das umgebende Dokument prerendert wird
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (und die Legacy-Version [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Notifications API](/de/docs/Web/API/Notifications_API): [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor, [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Storage API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): [`AudioContext`](/de/docs/Web/API/AudioContext)s dürfen nicht starten, während das umgebende Dokument prerendert wird
- [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API): [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices), [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice)
- [WebHID API](/de/docs/Web/API/WebHID_API): [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices), [`HID.requestDevice()`](/de/docs/Web/API/HID/requestDevice)
- [Web Locks API](/de/docs/Web/API/Web_Locks_API): [`LockManager.query()`](/de/docs/Web/API/LockManager/query), [`LockManager.request()`](/de/docs/Web/API/LockManager/request)
- [Web MIDI API](/de/docs/Web/API/Web_MIDI_API): [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess)
- [Web NFC API](/de/docs/Web/API/Web_NFC_API): [`NDefReader.write()`](/de/docs/Web/API/NDEFReader/write), [`NDefReader.scan()`](/de/docs/Web/API/NDEFReader/scan)
- [Web Serial API](/de/docs/Web/API/Web_Serial_API): [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts), [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)
- [Web Speech API](/de/docs/Web/API/Web_Speech_API): [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort), [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start), [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop), [`SpeechSynthesis.cancel()`](/de/docs/Web/API/SpeechSynthesis/cancel), [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause), [`SpeechSynthesis.resume()`](/de/docs/Web/API/SpeechSynthesis/resume), [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)
- [WebUSB API](/de/docs/Web/API/WebUSB_API): [`USB.getDevices()`](/de/docs/Web/API/USB/getDevices), [`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice)
- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API): [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)

### Implizit eingeschränkte APIs

Die folgenden Funktionen werden automatisch fehlschlagen oder ohne Wirkung in Dokumenten sein, die nicht aktiviert sind.

APIs, die {{Glossary("transient_activation", "transiente Aktivierung")}} oder {{Glossary("sticky_activation", "sticky Aktivierung")}} erfordern:

- Bestätigungsdialoge, die durch das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis generiert werden
- Das Auslösen von Ereignissen in der [Zwischenablage-API](/de/docs/Web/API/Clipboard_API).
- [File System API](/de/docs/Web/API/File_System_API): [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker), [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker), [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [Vollbild-API](/de/docs/Web/API/Fullscreen_API): [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static)
- [Tastatur-API](/de/docs/Web/API/Keyboard_API): [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) (erfordert Vollbild)
- [Payment Request API](/de/docs/Web/API/Payment_Request_API): [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
- [Präsentations-API](/de/docs/Web/API/Presentation_API): [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API): [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Bildschirmerfassung-API](/de/docs/Web/API/Screen_Capture_API): [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Web Share API](/de/docs/Web/API/Web_Share_API): [`Navigator.share()`](/de/docs/Web/API/Navigator/share)
- [`Window.open()`](/de/docs/Web/API/Window/open)

APIs, die fokussierte Dokumente benötigen:

- [Zwischenablage API](/de/docs/Web/API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)

APIs, die den Sichtbarzustand des umgebenden Dokuments als `"visible"` verlangen:

- [Picture-in-Picture-API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert den Sichtbarkeitsstatus des umgebenden Dokuments als `"visible"` _oder_ {{Glossary("transient_activation", "transiente Aktivierung")}})
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Andere eingeschränkte Funktionen

- Download-Links, i.e., {{htmlelement("a")}} und {{htmlelement("area")}} Elemente mit dem `download` Attribut, haben ihre Downloads verzögert, bis das Prerendering beendet ist.
- Keine Cross-Site-Navigation: Jedes Dokument, das auf eine andere Seite navigiert, wird sofort verworfen, bevor eine Anfrage an diese andere Seite gesendet wird.
- Eingeschränkte URLs: Prerendering-Dokumente können keine Non-HTTP(S)-Top-Level-URLs hosten. Einschließlich der folgenden URL-Typen wird das Prerendering sofort verworfen:
  - [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
  - [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data)
  - `blob:` URLs
  - `about:` URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungspeicher: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, aber das Verhalten ist sehr spezifisch, um das Brechen von Websites zu vermeiden, die erwarten, dass nur eine Seite auf den Sitzungspeicher des Tabs zugreift. Eine vorgerenderte Seite beginnt daher mit einer Kopie des Sitzungsmemory-Zustands des Tabs von dem Zeitpunkt, an dem sie erstellt wurde. Bei Aktivierung wird die Storage-Kopie der vorgerenderte Seite verworfen, und der Hauptspeicher des Tabs wird stattdessen verwendet. Seiten, die den Sitzungspeicher verwenden können, das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis verwenden, um zu erkennen, wann dieser Storage-Wechsel eintritt.
- [`Window.print()`](/de/docs/Web/API/Window/print): Alle Aufrufe dieser Methode werden ignoriert.
- "Einfache Dialogmethoden" sind wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) gibt sofort zurück, ohne einen Dialog anzuzeigen.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) gibt sofort `false` zurück, ohne einen Dialog anzuzeigen.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) gibt sofort einen leeren String (`" "` ) zurück, ohne einen Dialog anzuzeigen.
- Dedizierte/gemeinsame Worker-Skripte werden geladen, aber ihre Ausführung wird verzögert, bis das vorgerenderte Dokument aktiviert ist.
- Cross-Origin {{htmlelement("iframe")}} Ladevorgänge werden während des Prerenderings verzögert, bis die Seite aktiviert wird.

## Schnittstellen

Die Speculation Rules API definiert keine eigenen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument derzeit im Prozess des Prerenderings ist.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis {{experimental_inline}}
  - : Wird ausgelöst, wenn ein vorgerendertes Dokument aktiviert wird (d.h. der Benutzer die Seite ansieht).
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Start des Prerenderings eines Dokuments und seiner Aktivierung darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) `"navigational-prefetch"` Wert {{experimental_inline}}
  - : Signalisiert, dass der Typ eines Performance-Eintrags ein Prefetch ist.

## HTTP-Header

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'` Wert {{experimental_inline}}
  - : Wird verwendet, um die Verwendung von `<script type="speculationrules">` zu erlauben, um Spekulationsregeln für das abgerufene Dokument zu definieren.
- {{httpheader("Clear-Site-Data")}} `'prefetchCache'` und `'prerenderCache'` Werte {{experimental_inline}}
  - : Wird verwendet, um Spekulationen zu löschen. Zum Beispiel, wenn sich der Zustand ändert, was die Spekulationen veraltet macht.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die Spekulationsregel-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregelset des Dokuments hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel festgelegt, um die Verwendung verschiedener höheres Risiko-Lademodi zu ermöglichen. Zum Beispiel erfordert Cross-Origin, Same-Site Prerendering einen `Supports-Loading-Mode` Wert von `credentialed-prerender`.

## HTML-Funktionen

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um ein Set von Prefetch- und/oder Prerender-Spekulationsregeln innerhalb des aktuellen Dokuments zu definieren, die dem Spekulationsregelset des Dokuments hinzugefügt werden.

## Beispiele

Für Codebeispiele siehe [Seiten in Chrome für sofortige Seitennavigationen vorab rendern](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2025)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von Spekulationsregeln und anderen ähnlichen Leistungsverbesserungsfunktionen.
