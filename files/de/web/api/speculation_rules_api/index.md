---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 9c2dabaabc326c4a3fed27f6e9bcb3605958e516
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}{{non-standard_header}}

Die **Speculation Rules API** wurde entwickelt, um die Leistung für zukünftige Navigationen zu verbessern. Sie zielt auf Dokument-URLs statt auf spezifische Ressourcendateien ab und ist daher für Multi-Page-Anwendungen (MPAs) sinnvoller als für Single-Page-Anwendungen (SPAs).

Die Speculation Rules API bietet eine Alternative zu dem weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) Feature und ist dazu gedacht, das Chrome-exklusive veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) Feature abzulösen. Sie bietet viele Verbesserungen gegenüber diesen Technologien sowie eine ausdrucksstärkere, konfigurierbare Syntax, um zu bestimmen, welche Dokumente vorgeladen oder vorgeladen werden sollen.

> [!NOTE]
> Die Speculation Rules API behandelt keine Subressourcen-Vorabladen; dafür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Verwendung

Spekulationsregeln können innerhalb von Inline-Elementen [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) und in externen Textdateien angegeben werden, die durch den {{httpheader("Speculation-Rules")}}-Antwortheader referenziert werden. Die Regeln werden als JSON-Struktur angegeben.

Ein Skriptbeispiel:

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

Spekulationsregeln in einem `<script>`-Element müssen ausdrücklich in der {{httpheader("Content-Security-Policy")}} [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive erlaubt werden, wenn die Seite diese enthält. Dies kann durch Hinzufügen einer der `'inline-speculation-rules'` Quellen, einer Hash-Quelle oder einer Nonce-Quelle erfolgen.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das JSON mit den Spekulationsregeln enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, muss jedoch mit einem `application/speculationrules+json` MIME-Typ ausgeliefert werden.

> [!NOTE]
> Regeln können sowohl mit einem Inline-Skript als auch mit dem HTTP-Header gleichzeitig angegeben werden — alle auf ein Dokument angewendeten Regeln werden analysiert und der Spekulationsregelliste des Dokuments hinzugefügt.

Sie spezifizieren ein unterschiedliches Array, um die Regeln für jeden spekulativen Ladetyp zu enthalten (zum Beispiel `"prerender"` oder `"prefetch"`). Jede Regel ist in einem Objekt enthalten, das beispielsweise eine Liste der zu ladenden Ressourcen und Optionen wie eine explizite {{httpheader("Referrer-Policy")}} Einstellung für jede Regel angibt. Beachten Sie, dass vorgeladene URLs auch vorab abgerufen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Verwendung von Prefetching

Das Einbinden von `prefetch`-Regeln in ein `<script type="speculationrules">`-Element oder `Speculation-Rules`-Header sorgt dafür, dass unterstützende Browser den Antworttext der referenzierten Seiten herunterladen, jedoch keine der von der Seite referenzierten Subressourcen. Wenn zu einer vorgeladenen Seite navigiert wird, wird sie viel schneller gerendert, als wenn sie nicht vorgeladen worden wäre.

Die Ergebnisse werden in einem pro-Dokument-In-Speicher-Cache gehalten. Alle gecachten Prefetches werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich einem vorgeladenen Dokument, zu dem Sie dann navigieren.

Das bedeutet, dass, wenn Sie etwas vorabladen, zu dem der Benutzer nicht navigiert, dies im Allgemeinen eine Verschwendung von Ressourcen ist, obwohl das Ergebnis den HTTP-Cache füllen kann, wenn es die Header erlauben. Dennoch sind die Vorabkosten eines Prefetches viel geringer als die Vorabkosten eines Prerenders, daher wird empfohlen, Prefetching breit einzusetzen, zum Beispiel alle signifikanten Seiten Ihrer Website vorzuladen, vorausgesetzt, sie sind sicher zu Vorladen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_bedingungen_für_spekulatives_laden) für weitere Details).

Gleichseiten- und Cross-Site-Prefetches funktionieren, aber Cross-Site-Prefetches sind eingeschränkt (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen den beiden). Aus Datenschutzgründen funktionieren Cross-Site-Prefetches derzeit nur, wenn der Benutzer keine Cookies für die Zielseite gesetzt hat — wir möchten nicht, dass Seiten Benutzeraktivitäten über vorgeladene Seiten nachverfolgen, die sie möglicherweise nie wirklich besuchen, basierend auf zuvor gesetzten Cookies.

> [!NOTE]
> In Zukunft wird ein Opt-in für Cross-Site-Prefetch über den {{httpheader("Supports-Loading-Mode")}} Header bereitgestellt, aber dies war zum Zeitpunkt des Schreibens nicht implementiert (nur Cross-Origin, gleiche Site [prerendering](#verwendung_von_prerendering) Opt-in war verfügbar).

Für Browser, die es unterstützen, sollte die Spekulationsregeln-Prefetching gegenüber älteren Prefetch-Mechanismen bevorzugt werden, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"` Option. Weil wir wissen, dass die Spekulationsregeln Prefetching für Navigationen und nicht für allgemeines Ressource-Vorabladen ist:

- Es kann für Cross-Site-Navigationen verwendet werden, während `<link rel="prefetch">` dies nicht kann.
- Es wird nicht durch {{httpheader("Cache-Control")}} Header blockiert, während `<link rel="prefetch">` dies oft wird.

Darüber hinaus:

- Senkt die Priorität automatisch, wenn nötig (`fetch()` tut dies nicht).
- Respektiert die Konfiguration des Benutzers. Zum Beispiel findet kein Prefetching statt, wenn sich das Gerät des Benutzers im Energiesparmodus oder im Datensparmodus befindet.
- Speichert die vorgeladenen Ressourcen in einem pro-Dokument-In-Speicher-Cache im Gegensatz zum HTTP-Cache, was zu einem etwas schnelleren Prefetching führen kann.

### Verwendung von Prerendering

Das Einfügen von `prerender`-Regeln in ein `<script type="speculationrules">`-Element oder `Speculation-Rules`-Header bewirkt, dass unterstützende Browser den Inhalt in einem unsichtbaren Tab abrufen, rendern und laden, der in einem pro-Dokument-In-Speicher-Cache gespeichert wird. Dies umfasst das Laden aller Subressourcen, das Ausführen aller JavaScripts und sogar das Laden von Subressourcen und Datenabrufen, die durch JavaScript gestartet wurden. Alle gecachten Prerender und ihre Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich einem vorgeladenen Dokument, zu dem Sie dann navigieren.

Zukünftige Navigationen zu einer vorgeladenen Seite werden nahezu sofort erfolgen. Der Browser aktiviert den unsichtbaren Tab, statt den üblichen Navigationsprozess durchzuführen, und ersetzt die alte Vordergrundseite durch die vorgeladene Seite. Wenn eine Seite aktiviert wird, bevor sie vollständig vorgeladen ist, wird sie in ihrem aktuellen Zustand aktiviert und dann weiter geladen, was bedeutet, dass Sie immer noch eine erhebliche Leistungsverbesserung sehen werden.

Prerendering verbraucht Speicher und Netzwerkbandbreite. Wenn Sie etwas vorladen, zu dem der Benutzer nicht navigiert, sind diese Ressourcen verschwendet (obwohl das Ergebnis den HTTP-Cache füllen kann, wenn es die Header erlauben und spätere Verwendung ermöglicht). Die Vorabkosten eines Prerenders sind viel größer als die Vorabkosten eines Prefetches, und andere Bedingungen könnten auch Inhalte unsicher für das Prerendering machen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_bedingungen_für_spekulatives_laden) für weitere Details). Daher wird empfohlen, Prerendering sparsamer einzusetzen, sorgfältig Fälle zu überlegen, in denen eine hohe Wahrscheinlichkeit besteht, dass auf die Seite navigiert wird, und Sie glauben, dass der Benutzererlebnisvorteil die zusätzlichen Kosten wert ist.

> [!NOTE]
> Um die Menge an potenzieller Ressourcenverschwendung ins Perspektive zu setzen, verbraucht ein Prerender etwa die gleiche Menge an Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden automatisch zurückgestellt, wenn ein Prerendering/Bis zur Aktivierung geschieht. Siehe [Plattformfunktionen, die während des Prerenders zurückgestellt oder eingeschränkt sind](#plattformfunktionen,_die_während_des_prerenderings_zurückgestellt_oder_eingeschränkt_sind) für weitere Details.

Prerendering ist standardmäßig auf same-origin Dokumenten beschränkt. Cross-origin, gleiche Seite Prerendering ist möglich — es erfordert, dass das Navigationsziel durch die Verwendung des {{httpheader("Supports-Loading-Mode")}} Headers mit einem Wert von `credentialed-prerender` aktiv zustimmt. Cross-Site Prerendering ist derzeit nicht möglich.

Für Browser, die es unterstützen, sollte die Spekulationsregeln Prerendering gegenüber älteren Prerender-Mechanismen bevorzugt werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender):

- `<link rel="prerender">` ist Chrome-spezifisch und wurde nie standardisiert, und das Chrome-Entwicklungsteam ist dabei, es auszumustern.
- Es lädt Subressourcen, die über JavaScript geladen werden, wohingegen `<link rel="prerender">` dies nicht tut.
- Es wird nicht durch {{httpheader("Cache-Control")}} Einstellungen blockiert, während `<link rel="prerender">` dies oft tut.
- Die Spekulationsregeln Prerendering sollte als Hinweis und progressive Verbesserung behandelt werden. Anders als `<link rel="prerender">` ist es ein spekulativer Hinweis, und der Browser kann sich auf der Grundlage von Nutzereinstellungen, aktuellem Speicherverbrauch oder anderen Heuristiken entscheiden, nicht auf den Hinweis zu reagieren.

### Funktionsenerkennung der Speculation Rules API

Sie können überprüfen, ob die Speculation Rules API unterstützt wird, indem Sie den folgenden Code verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Zum Beispiel möchten Sie eventuell Spekulationsregeln zum Vorabladen in unterstützenden Browsern einfügen, aber eine ältere Technologie wie `<link rel="prefetch">` in anderen verwenden:

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

## Erkennung vorgeladener und vorgeladener Seiten

In diesem Abschnitt werden verschiedene Möglichkeiten betrachtet, um zu erkennen, ob eine angeforderte Seite vorgeladen oder vorgeladen wurde.

### Serverseitige Erkennung

Vorgeladene und vorgeladene Seitenanforderungen werden mit dem {{httpheader("Sec-Purpose")}} Anfrageheader gesendet:

Für Prefetch:

```http
Sec-Purpose: prefetch
```

Für Prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können basierend auf diesem Header antworten, zum Beispiel um spekulative Ladelastanforderungen zu protokollieren, unterschiedliche Inhalte zurückzugeben oder sogar zu verhindern, dass spekulatives Laden stattfindet. Wenn ein Nicht-Erfolgs-Antwortcode zurückgegeben wird (jeder HTTP-Status außerhalb des 200-299 Bereichs nach Umleitungen), wird die Seite nicht vorgeladen/vorgeladen. Zusätzlich verhindern die Statuscodes 204 und 205 auch Prerendering (aber nicht Prefetch).

Die Verwendung eines Nicht-Erfolgs-Codes (zum Beispiel einen 503) ist der einfachste Weg, um serverseitig spekulatives Laden zu verhindern, obwohl es in der Regel besser ist, das Vorladen/Prerender zu erlauben und JavaScript zu verwenden, um alle Aktionen zu verzögern, die nur stattfinden sollten, wenn die Seite tatsächlich angezeigt wird.

### JavaScript Prefetch-Erkennung

Wenn eine Seite vorgeladen wird, gibt ihr [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) Eintrag einen Wert von `"navigational-prefetch"` zurück. Sie könnten das folgende verwenden, um eine Funktion auszuführen, wenn ein Leistungseintrag des Typs `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist nützlich, wenn Sie die Leistung messen oder Aktionen aufschieben möchten, die Probleme verursachen könnten, wenn sie während des Prefetchings auftreten (siehe [Unsicheres Prefetching](#unsicheres_prefetching)).

### JavaScript Prerender-Erkennung

Um eine Aktivität auszuführen, während die Seite vorgeladen wird, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft überprüfen. Sie könnten zum Beispiel einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorgeladenes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der den Zeitraum zwischen dem Start des Prerenders und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl vorgeladene als auch vorgeladene Seiten überprüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vorgeladene Seite durch den Benutzer aktiviert wird, der die Seite anzeigt, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die zuvor standardmäßig beim Laden der Seite gestartet wurden, die Sie jedoch bis zur Anzeige der Seite durch den Benutzer verzögern möchten. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Prerendering abgeschlossen ist, auf einer vorgeladenen Seite, oder führt es sofort auf einer nicht vorgeladenen Seite aus:

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

## Unsichere Bedingungen für spekulatives Laden

In diesem Abschnitt werden Bedingungen behandelt, unter denen das Vorabladen und/oder Prerendering als **unsicher** gilt. Das bedeutet, dass das Vorabladen/Prerendering von Seiten, die diese Bedingungen aufweisen, möglicherweise Abmilderungen in Ihrem Code erfordert oder ganz vermieden werden muss.

### Unsicheres Prefetching

Wie bereits erwähnt, empfehlen wir, Prefetching breit einzusetzen, da das Risiko-Nutzen-Verhältnis relativ gering ist — das Potenzial für Ressourcenverschwendung ist minimal, und die Leistungsverbesserungen können erheblich sein. Sie müssen jedoch sicherstellen, dass vorgeladene Seiten keine Probleme mit dem Fluss Ihrer Anwendung verursachen.

Wenn ein Prefetch durchgeführt wird, lädt der Browser den Antwortkörper der referenzierten Seite über eine einzelne GET-Anforderung herunter, zu der der Benutzer möglicherweise zu einem späteren Zeitpunkt navigiert. Probleme können insbesondere auftreten, wenn die URL der Anforderung eine serverinitiierte Seiteneffekte auslöst, die Sie nicht möchten, dass sie geschehen, bis zur URL navigiert wird.

Zum Beispiel:

- Abmelde-URLs.
- Sprachwechsel-URLs.
- "Zum Warenkorb hinzufügen"-URLs.
- Anmeldevorgangs-URLs, bei denen der Server einen SMS-Versand veranlasst, beispielsweise als Einmalpasswort (OTP).
- URLs, die die Verbrauchszahlen der Benutzer monatlichen Nutzung erhöhen, wie das Konsumieren ihres monatlichen kostenlosen Artikelkontingents oder das Starten des Timers für ihre monatlichen Minuten.
- URLs, die serverseitiges Ad-Conversion-Tracking initiieren.

Solche Probleme können auf dem Server abgemildert werden, indem auf den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} Header geachtet wird, wenn die Anfragen hereinkommen, und dann spezifischer Code ausgeführt wird, um problematische Funktionalität zu verzögern. Später, wenn die Seite tatsächlich navigiert wird, können Sie bei Bedarf die verzögerten Funktionen mithilfe von JavaScript initiieren.

> [!NOTE]
> Weitere Details zum Erkennungscode finden Sie im Abschnitt [Erkennung vorgeladener und vorgeladener Seiten](#erkennung_vorgeladener_und_vorgeladener_seiten).

Es ist auch potenziell riskant, ein Dokument vorzubladen, dessen servergerenderte Inhalte aufgrund von Aktionen des Benutzers auf der aktuellen Seite geändert werden. Diese Fälle sollten sorgfältig getestet und Probleme durch Content-Updates nach dem Laden der Seite beendet werden. Siehe [Server-gerenderter variierender Zustand](#server-gerenderter_variierender_zustand) für weitere Details zu diesen Fällen.

> [!NOTE]
> Browser speichern vorgeladene Seiten für kurze Zeit (Chrome zum Beispiel speichert sie für 5 Minuten), bevor sie verworfen werden, sodass Ihre Benutzer Inhalte sehen könnten, die bis zu 5 Minuten alt sind.

Veraltete Prefetches können mit dem {{httpheader("Clear-Site-Data#prefetchCache", "prefetchCache")}} Wert des {{httpheader("Clear-Site-Data")}} Antwortheaders gelöscht werden. Dies könnte verwendet werden, zum Beispiel wenn für statusändernde Anfragen bedeutet, dass die zwischengespeicherten Daten nicht mehr gültig sind, wie beim Abmelden von einer Website.

Prefetching ist sicher, wenn alle Seiteneffekte beim Abrufen der Seite durch JavaScript-Ausführung resultieren, da das JavaScript nicht ausgeführt wird, bis eine Aktivierung erfolgt.

Ein letzter Tipp ist, die URLs zu überprüfen, die in Ihrer {{Glossary("robots.txt", "robots.txt")}} Datei als nicht erlaubt gelistet sind - normalerweise zeigen diese URLs auf Seiten, die nur von authentifizierten Benutzern aufgerufen werden können, und sollten daher nicht in Suchmaschinenergebnissen enthalten sein. Viele von ihnen werden in Ordnung sein, aber es kann ein guter Ort sein, um URLs zu finden, die für Prefetching unsicher sind (d.h. sie zeigen die oben beschriebenen Bedingungen).

### Unsicheres Prerendering

Prerendering ist riskanter als Prefetching und sollte daher sparsam in Fällen verwendet werden, in denen es sich lohnt. Es gibt mehr unsichere Bedingungen, auf die beim Prerendering geachtet werden muss. Während die Belohnung höher ist, ist das Risiko dies auch.

Wenn ein Prerender durchgeführt wird, führt der Browser einen GET auf die URL aus und rendert und lädt den Inhalt in einen unsichtbaren Tab. Dies umfasst das Ausführen des Inhalts-JavaScripts und das Laden aller Subressourcen, einschließlich derer, die durch JavaScript abgerufen wurden. Inhalte können potenziell unsicher für Prerendering sein, wenn eine der folgenden Bedingungen beobachtet wird:

- Die URL ist [unsicher zum Vorabladen](#unsicheres_prefetching). Lesen Sie den vorherigen Abschnitt zuerst, wenn Sie dies noch nicht getan haben, und verstehen Sie, dass diese Bedingungen auch gleichermaßen für unsicheres Prerendering gelten.
- Das JavaScript der Seite ändert beim Laden den clientseitigen Speicher (zum Beispiel [Webspeicher](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) in einer Weise, die verwirrende Effekte auf andere, nicht vorgeladene Seiten verursachen kann, die der Benutzer gerade betrachtet.
- Die Seite führt JavaScript aus oder lädt Bilder, die Seiteneffekte wie das Senden von Analysen, das Erfassen von Anzeigenimpressionen oder das anderweitige ändern des Zustands der Anwendung verursachen, als ob der Benutzer bereits mit ihr interagiert hätte. Auch dies kann den Fluss der Anwendung beeinträchtigen oder zu falschen Leistungs- oder Nutzungsmeldungen führen. Siehe [Server-gerenderter variierender Zustand](#server-gerenderter_variierender_zustand) für weitere Details zu solchen Anwendungsfällen.

Um solche Probleme zu lösen, können Sie die folgenden Techniken verwenden:

- Überwachen Sie den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} Header auf dem Server, wenn die Anfragen hereinkommen, und führen Sie dann spezifischen Code aus, um problematische Funktionen zu verzögern.
- Nutzen Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis, um zu erkennen, wann die vorgeladene Seite tatsächlich aktiviert wird und führen Sie Code als Ergebnis aus. Dies ist in zwei Fällen nützlich:
  - Verzögert Code, der Probleme verursachen könnte, wenn er ausgeführt wird, bevor die Seite angezeigt wird. Beispielsweise möchten Sie möglicherweise warten, bis nach der Aktivierung, um clientseitigen Speicher zu aktualisieren oder den serverseitigen Status mithilfe von JavaScript zu ändern. Dies kann Situationen vermeiden, in denen die Benutzeroberfläche und der Anwendungszustand nicht mehr synchron sind, zum Beispiel ein Warenkorb, der keine Artikel anzeigt, obwohl der Benutzer welche hinzugefügt hat.
  - Falls oben genanntes nicht möglich ist, dann können Sie immer noch Code nach der Aktivierung erneut ausführen, um die App wieder auf den neuesten Stand zu bringen. Beispielweise könnte eine hochdynamische Flash-Verkaufsseite auf Inhaltsupdates angewiesen sein, die aus einer Drittanbieterbibliothek stammen. Wenn Sie die Updates nicht verzögern können, können Sie dennoch bei der Anzeige der Seite neue Updates erhalten. Vorgeladene Seiten können in Echtzeit mit der [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einem anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einem [`WebSocket`](/de/docs/Web/API/WebSocket) aktualisiert werden. Dies stellt sicher, dass der Benutzer nach der Prerendering-Aktivierung aktuelle Inhalte sieht.
- Verwalten Sie Ihre Skripte von Drittanbietern sorgfältig — wenn möglich, verwenden Sie Skripte, die prerendering-bewusst sind (zum Beispiel durch Nutzung der [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft, um das Ausführen auf prerendering-Seiten zu verzögern), wie zum Beispiel Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden der Inhalte von Cross-Origin {{htmlelement("iframe")}}s während des Prerendering verzögert wird, bis die Aktivierung erfolgt. Dies geschieht, um Brüche zu vermeiden, die durch das Laden von Cross-Origin-Seiten entstehen, die nicht mit Prerendering vertraut sind, und um Komplexitäten darüber zu vermeiden, welche Anmeldeinformationen und Speicher diesen Frames zugänglich gemacht werden sollen. Es bedeutet, dass Benutzer in einigen Fällen zunächst leere Frames sehen könnten, aber es bedeutet auch, dass die meisten Drittanbieter-Widgets, wie etwa Werbungstechnologie, beim Prerendering sicher zu verwenden sind.
  - Für Drittanbieter-Skripte, die nicht prerendering-bewusst sind, vermeiden Sie das Laden bis nach der Aktivierung unter Verwendung des [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignisses, wie zuvor erwähnt.

### Server-gerenderter variierender Zustand

Es gibt zwei Haupttypen von servergerendertem Zustand, die berücksichtigt werden sollten: **veralteter Zustand** und **benutzerspezifischer Zustand**. Dies kann sowohl unsicheres Prefetching als auch Prerendering verursachen.

- Veralteter Zustand: Betrachten Sie das Beispiel einer servergerenderten Liste von Blogkommentaren, die zwischen dem Prerendering des Blogbeitrags und dessen Ansicht veraltet sein können. Dies könnte besonders problematisch sein, wenn die aktuelle Seite ein Admin-Panel ist, in dem der Benutzer Spam-Kommentare löscht. Wenn der Benutzer dann zu dem Blogbeitrag navigiert, könnte er verwirrt sein, warum er die Spam-Kommentare sieht, die er gerade gelöscht hat.
- Benutzerspezifischer Zustand: Betrachten Sie das Beispiel der Verfolgung des Anmeldestatus über ein Cookie. Probleme können wie folgt auftreten:
  - Der Benutzer besucht `https://site.example/a` in Tab 1 und `https://site.example/b` in Tab 2, während er nicht angemeldet ist.
  - `https://site.example/b` prerendert `https://site.example/c`. Es wird im abgemeldeten Zustand prerendert.
  - Der Benutzer meldet sich bei `https://site.example` in Tab 1 an.
  - Der Benutzer wechselt zu Tab 2 und klickt auf den Link zu `https://site.example/c`, was die vorgeladene Seite aktiviert.
  - Tab 2 zeigt eine Abmeldeansicht von `https://site.example/c`, was den Benutzer verwirrt, da er dachte, er sei angemeldet.

Benutzerspezifische Zustandsprobleme können auch bei anderen Benutzereinstellungen auftreten, zum Beispiel Spracheinstellungen, Dunkelmodus-Präferenzen oder das Hinzufügen von Artikeln zum Warenkorb. Sie können auch auftreten, wenn nur ein einzelner Tab beteiligt ist:

- Angenommen, der Benutzer besucht `https://site.example/product`.
- `https://site.example.com/product` prerendert `https://site.example.com/cart`. Es wird mit 0 Artikeln im Warenkorb prerendert.
- Der Benutzer klickt auf die "Zum Warenkorb hinzufügen"-Buttons, was eine Fetch-Anfrage initiiert, um den Artikel dem Warenkorb des Benutzers hinzuzufügen (ohne Seitenaktualisierung).
- Der Benutzer klickt auf den Link zu `https://site.example.com/cart`, was die vorgeladene Seite aktiviert.
- Der Benutzer sieht einen leeren Warenkorb, obwohl er gerade etwas hinzugefügt hat.

Die beste Lösung für diese Fälle, und in der Tat immer, wenn Inhalte nicht mehr synchron mit dem Server sind, ist, dass die Seiten sich selbst aktualisieren, wenn nötig. Beispielsweise könnte ein Server die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) verwenden, oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einen [`WebSocket`](/de/docs/Web/API/WebSocket). Dann können Seiten sich selbst entsprechend aktualisieren, einschließlich spekulativ geladener Seiten, die noch nicht aktiviert wurden.

Wo Aktualisierungen nicht möglich sind, können Spekulationen mit dem {{httpheader("Clear-Site-Data")}} Antwortheader mit den Werten {{httpheader("Clear-Site-Data#prefetchCache", `prefetchCache`)}} oder {{httpheader("Clear-Site-Data#prerenderCache", `prerenderCache`)}} (oder beiden) wie angemessen gelöscht werden.

Der Header kann bei jeder same-site HTTP-Anfrage zurückgegeben werden (wie bei einem `/api/add-to-cart` API-Aufruf).

## Sitzungshistorie-Verhalten für vorgeladene Dokumente

Die Aktivierung eines prerendered/vorgeladenen Dokuments verhält sich wie jede herkömmliche Navigation aus der Sicht des Endbenutzers. Das aktivierte Dokument wird im Tab angezeigt und der Sitzungsverlauf hinzugefügt, und alle vorhandenen vorlaufenden Verlaufsdaten werden gelöscht. Alle Navigationen, die innerhalb des Prerendering-Browsing-Kontexts _vor_ der Aktivierung stattfinden, haben keinen Einfluss auf die Sitzungshistorie.

Aus der Sicht des Entwicklers kann ein prerendering-Dokument als **triviale Sitzungshistorie** betrachtet werden, bei der nur ein Eintrag — der aktuelle Eintrag — existiert. Alle Navigationen innerhalb des Prerendering-Kontexts werden effektiv ersetzt.

Während API-Funktionen, die auf die Sitzungshistorie zugreifen (zum Beispiel [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation)) innerhalb von Prerendering-Dokumenten aufgerufen werden können, arbeiten sie nur auf der trivialen Sitzungshistorie des Kontexts. Folglich nehmen Prerendering-Dokumente nicht an der gemeinsamen Sitzungshistorie ihrer verweisenden Seite teil. Zum Beispiel können sie ihre Verweissite nicht über [`History.back()`](/de/docs/Web/API/History/back) navigieren.

Dieses Design stellt sicher, dass Benutzer das erwartete Erlebnis beim Drücken der Zurück-Taste erhalten — d.h. dass sie zu dem letzten zurückkehren, was sie gesehen haben. Sobald ein Prerendering-Dokument aktiviert ist, wird nur ein einzelner Sitzungshistorieneintrag zur gemeinsamen Sitzungshistorie hinzugefügt, unter Ignorierung aller vorherigen Navigationen, die innerhalb des Prerendering-Browsing-Kontextes stattfanden. Ein Schritt zurück in der gemeinsamen Sitzungshistorie — zum Beispiel durch Drücken der Zurück-Taste — führt den Benutzer zurück zur Verweissite.

## Plattformfunktionen, die während des Prerenderings zurückgestellt oder eingeschränkt sind

Da eine vorgeladene Seite in einem versteckten Zustand geöffnet ist, werden mehrere API-Funktionen, die potenziell aufdringliche Verhaltensweisen verursachen könnten, nicht in diesem Zustand aktiviert und werden stattdessen **zurückgestellt**, bis die Seite aktiviert wird. Andere Webplattformfunktionen, die beim Prerendering problematisch sind, werden vollständig eingeschränkt. Dieser Abschnitt bietet Details darüber, welche Funktionen zurückgestellt oder eingeschränkt sind.

> [!NOTE]
> In der kleinen Anzahl von Fällen, in denen das Zurückstellen und Einschränken nicht möglich ist, wird das Prerender abgebrochen.

### Asynchrone API-Verschiebung

Das Verschieben bedeutet, dass die API-Funktion sofort ein ausstehendes Promise zurückgibt und dann nichts unternimmt, bis die Seite aktiviert wird. Nach der Aktivierung funktioniert das Feature normal und das Promise wird wie gewohnt aufgelöst oder abgelehnt.

Die Ergebnisse der folgenden asynchronen Funktionen werden in vorgeladenen Dokumenten bis zu ihrer Aktivierung verschoben:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Event, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Event
- [Geolocation API](/de/docs/Web/API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API: Die Wiedergabeposition wird nicht fortschreiten, während das enthaltene Dokument vorgeladen wird.
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (und die ältere [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) Version), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Notifications API](/de/docs/Web/API/Notifications_API): [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor, [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push-API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Storage-API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [WebAudio-API](/de/docs/Web/API/Web_Audio_API): [`AudioContext`](/de/docs/Web/API/AudioContext)s dürfen nicht starten, während das enthaltene Dokument vorgeladen wird.
- [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API): [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices), [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice)
- [WebHID API](/de/docs/Web/API/WebHID_API): [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices), [`HID.requestDevice()`](/de/docs/Web/API/HID/requestDevice)
- [Web Locks API](/de/docs/Web/API/Web_Locks_API): [`LockManager.query()`](/de/docs/Web/API/LockManager/query), [`LockManager.request()`](/de/docs/Web/API/LockManager/request)
- [Web MIDI API](/de/docs/Web/API/Web_MIDI_API): [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess)
- [Web NFC API](/de/docs/Web/API/Web_NFC_API): [`NDefReader.write()`](/de/docs/Web/API/NDEFReader/write), [`NDefReader.scan()`](/de/docs/Web/API/NDEFReader/scan)
- [Web Serial API](/de/docs/Web/API/Web_Serial_API): [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts), [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)
- [Web Speech-API](/de/docs/Web/API/Web_Speech_API): [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort), [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start), [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop), [`SpeechSynthesis.cancel()`](/de/docs/Web/API/SpeechSynthesis/cancel), [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause), [`SpeechSynthesis.resume()`](/de/docs/Web/API/SpeechSynthesis/resume), [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)
- [WebUSB-API](/de/docs/Web/API/WebUSB_API): [`USB.getDevices()`](/de/docs/Web/API/USB/getDevices), [`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice)
- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API): [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)

### Implizit eingeschränkte APIs

Die folgenden Funktionen werden in Dokumenten, die nicht aktiviert sind, automatisch fehlschlagen oder keinen Effekt haben.

APIs, die eine {{Glossary("transient_activation", "transiente Aktivierung")}} oder {{Glossary("sticky_activation", "klebrige Aktivierung")}} erfordern:

- Bestätigungsdialoge, die durch das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis generiert werden.
- Das Auslösen von Ereignissen in der [Clipboard API](/de/docs/Web/API/Clipboard_API).
- [Filesystem API](/de/docs/Web/API/File_System_API): [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker), [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker), [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API): [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static)
- [Keyboard-API](/de/docs/Web/API/Keyboard_API): [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) (die Vollbild erfordert)
- [Payment Request API](/de/docs/Web/API/Payment_Request_API): [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
- [Presentation API](/de/docs/Web/API/Presentation_API): [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API): [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Web Share API](/de/docs/Web/API/Web_Share_API): [`Navigator.share()`](/de/docs/Web/API/Navigator/share)
- [`Window.open()`](/de/docs/Web/API/Window/open)

APIs, die erfordern, dass das enthaltende Dokument fokussiert ist:

- [Clipboard API](/de/docs/Web/API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)

APIs, die erfordern, dass der [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) des enthaltenen Dokuments `visible` ist:

- [Bild-im-Bild-API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert, dass der Sichtbarkeitsstatus des enthaltenen Dokuments `"visible"` ist, _oder_ {{Glossary("transient_activation", "transiente Aktivierung")}})
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Andere eingeschränkte Funktionen

- Download-Links, d.h. {{htmlelement("a")}} und {{htmlelement("area")}} Elemente mit dem `download` Attribut, wird der Download verzögert, bis das Prerendering abgeschlossen ist.
- Keine Cross-Site-Navigationen: Jedes Prerendering-Dokument, das zu einer anderen Website navigiert, wird sofort verworfen, bevor eine Anfrage an diese andere Seite gesendet wird.
- Eingeschränkte URLs: Vorgeladene Dokumente können keine nicht-HTTP(S) Top-Level-URLs hosten. Die Aufnahme der folgenden URL-Typen führt dazu, dass das Prerender sofort verworfen wird:
  - [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
  - [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data)
  - [`blob:` URLs](/de/docs/Web/URI/Reference/Schemes/blob)
  - `about:` URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungspeicherung: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, aber das Verhalten ist sehr spezifisch, um zu vermeiden, dass Websites, die erwarten, dass nur eine Seite gleichzeitig auf die Sitzungsspeicherung des Tabs zugreifen kann, gebrochen werden. Eine vorgeladene Seite beginnt daher mit einer Kopie des Sitzungspeicher-Zustands des Tabs zum Zeitpunkts ihrer Erstellung. Nach der Aktivierung wird die Kopie des vorgeladenen Seiten-Speichers verworfen, und der Hauptspeicherzustand des Tabs wird stattdessen verwendet. Seiten, die Sitzungsspeicherung nutzen, können das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis verwenden, um zu erkennen, wann dieser Speicherwechsel auftritt.
- [`Window.print()`](/de/docs/Web/API/Window/print): Alle Aufrufe dieser Methode werden ignoriert.
- "Einfach Methoden für Dialoge" sind wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) kehrt sofort zurück, ohne einen Dialog anzuzeigen.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) kehrt sofort `false` zurück, ohne einen Dialog anzuzeigen.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) kehrt sofort einen leeren String (`""`) zurück, ohne einen Dialog anzuzeigen.
- Dedizierte/geteilte Arbeiterskripte werden geladen, aber ihre Ausführung wird verzögert, bis dass das vorgeladene Dokument aktiviert wird.
- Cross-Origin {{htmlelement("iframe")}} Ladungen werden während des Prerenderings verzögert, bis die Seite aktiviert wird.

## Schnittstellen

Die Spekulationsregeln-API definiert keine eigenen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument sich derzeit im Prerendering-Prozess befindet.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) event {{experimental_inline}}
  - : Wird auf einem vorgeladenen Dokument ausgelöst, wenn es aktiviert wird (d.h. der Benutzer die Seite ansieht).
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Start des Prerenders eines Dokuments und dessen Aktivierung darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) `"navigational-prefetch"` Wert {{experimental_inline}}
  - : Signalisiert, dass der Typ eines Leistungseintrags ein Prefetch ist.

## HTTP-Header

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'` Wert {{experimental_inline}}
  - : Wird verwendet, um die Verwendung von `<script type="speculationrules">` zuzulassen, um Spekulationsregeln für das abgerufene Dokument zu definieren.
- {{httpheader("Clear-Site-Data")}} `'prefetchCache'` und `'prerenderCache'` Werte {{experimental_inline}}
  - : Verwenden Sie zum Löschen von Spekulationen. Zum Beispiel, wenn Statusänderungen die Spekulationen veraltet macht.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Stellt eine Liste von URLs bereit, die auf Textressourcen verweisen, die JSON-Definitionen von Spekulationsregeln enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregelsatz des Dokuments hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um sich für verschiedene risikobehaftete Lademodi zu entscheiden. Zum Beispiel erfordert das Cross-Origin, gleiche Seite Prerendering einen `Supports-Loading-Mode` Wert von `credentialed-prerender`.

## HTML-Funktionen

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um ein Set von Prefetch- und/oder Prerender-Spekulationsregeln innerhalb des aktuellen Dokuments zu definieren, die dem Spekulationsregelsatz des Dokuments hinzugefügt werden.

## Beispiele

Für Code-Beispiele siehe [Prerender Pages in Chrome für sofortige Seiten-Navigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2025)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich der Spekulationsregeln und anderer ähnlicher Leistungsverbesserungsfunktionen.
