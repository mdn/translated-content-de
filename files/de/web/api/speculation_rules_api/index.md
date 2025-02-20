---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Spekulationsregeln-API** wurde entwickelt, um die Leistung für zukünftige Navigationen zu verbessern. Sie zielt auf Dokument-URLs ab, anstatt auf spezifische Ressourcendateien, und ist daher sinnvoller für Mehrseitenanwendungen (MPAs) als für Einseitenanwendungen (SPAs).

Die Spekulationsregeln-API bietet eine Alternative zur weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch)-Funktion und soll die nur in Chrome verfügbare veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender)-Funktion ersetzen. Sie bietet viele Verbesserungen gegenüber diesen Technologien sowie eine ausdrucksstärkere und konfigurierbare Syntax zur Spezifikation, welche Dokumente vorgeladen oder vorgeladen und vorgerendert werden sollen.

> [!NOTE]
> Die Spekulationsregeln-API behandelt keine Subressourcen-Vorabrufe; hierfür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Anwendung

Spekulationsregeln können innerhalb von eingebetteten [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)-Elementen und externen Textdateien angegeben werden, die durch das {{httpheader("Speculation-Rules")}}-Response-Header referenziert werden. Die Regeln werden als JSON-Struktur spezifiziert.

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

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen explizit in der {{httpheader("Content-Security-Policy")}}-Richtlinie [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) erlaubt werden, falls die Website diese beinhaltet. Dies geschieht durch Hinzufügen einer der `'inline-speculation-rules'`-Quellen, einer Hash-Quelle oder einer Nonce-Quelle.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das JSON der Spekulationsregeln enthält, kann jeden gültigen Namen und jede Erweiterung haben, muss jedoch mit einem `application/speculationrules+json` MIME-Typ bereitgestellt werden.

> [!NOTE]
> Regeln können sowohl mit einem eingebetteten Skript als auch mit dem HTTP-Header gleichzeitig spezifiziert werden – alle Regeln, die auf ein Dokument angewendet werden, werden analysiert und zur Spekulationsregelliste des Dokuments hinzugefügt.

Sie spezifizieren ein unterschiedliches Array, um die Regeln für jeden spekulativen Lademodus zu enthalten (zum Beispiel `"prerender"` oder `"prefetch"`). Jede Regel ist in einem Objekt enthalten, das beispielsweise eine Liste der zu ladenden Ressourcen spezifiziert, sowie Optionen wie eine explizite {{httpheader("Referrer-Policy")}}-Einstellung für jede Regel. Beachten Sie, dass vorgeladene URLs auch vorab geladen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Verwendung von Vorabrufen

Das Einbeziehen von `prefetch`-Regeln in ein `<script type="speculationrules">`-Element oder `Speculation-Rules`-Header bewirkt, dass unterstützende Browser den Response-Body der referenzierten Seiten herunterladen, jedoch keine der von der Seite referenzierten Subressourcen. Wenn zu einer vorgeladenen Seite navigiert wird, wird sie viel schneller gerendert als wenn sie nicht vorgeladen worden wäre.

Die Ergebnisse werden in einem pro Dokument gespeicherten In-Memory-Cache gehalten. Alle zwischengespeicherten Vorabrufe werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich ein vorgeladenes Dokument, das Sie dann besuchen.

Dies bedeutet, dass, wenn Sie etwas vorladen, das der Benutzer nicht navigiert, dies im Allgemeinen eine Verschwendung von Ressourcen ist, obwohl das Ergebnis den HTTP-Cache füllen kann, wenn Header dies zulassen. Trotzdem sind die anfänglichen Kosten eines Vorabladens viel geringer als die eines Vorabrenderings, sodass Sie ermutigt werden, das Vorabladen breit anzuwenden, beispielsweise indem Sie alle wichtigen Seiten Ihrer Site vorab laden, vorausgesetzt, sie sind sicher vorab zu laden (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Details).

Gleiche-Site- und Cross-Site-Vorabrufe funktionieren, aber Cross-Site-Vorabrufe sind eingeschränkt (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen den beiden). Aus Datenschutzgründen funktionieren Cross-Site-Vorabrufe derzeit nur, wenn der Benutzer keine Cookies für die Zielsite gesetzt hat - wir möchten nicht, dass Websites die Benutzeraktivität über vorgeladene Seiten (die sie möglicherweise nie tatsächlich besuchen) basierend auf zuvor gesetzten Cookies verfolgen können.

> [!NOTE]
> In Zukunft wird ein Opt-In für Cross-Site-Vorabrufe über den {{httpheader("Supports-Loading-Mode")}}-Header bereitgestellt, aber dies war zum Zeitpunkt des Schreibens noch nicht implementiert (nur das Opt-In für Cross-Origin, gleiche-Site [prerendering](#verwendung_von_vorabrendering) war verfügbar).

Für Browser, die es unterstützen, sollte das Vorabladen von Spekulationsregeln älteren Vorlademethoden vorgezogen werden, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"`-Option. Denn wir wissen, dass das Vorabladen von Spekulationsregeln für Navigationen gedacht ist, nicht für allgemeines Ressourcen-Vorabladen:

- Es kann für Cross-Site-Navigationen verwendet werden, während `<link rel="prefetch">` dies nicht kann.
- Es wird nicht durch {{httpheader("Cache-Control")}}-Header blockiert, während `<link rel="prefetch">` dies oft tut.

Darüber hinaus:

- Senkt automatisch die Priorität, wenn nötig (`fetch()` tut dies nicht).
- Respektiert die Konfiguration des Benutzers. Zum Beispiel passiert das Vorabladen nicht, wenn sich das Gerät des Benutzers im Energiesparmodus oder Datensparmodus befindet.
- Speichert die vorgeladenen Ressourcen in einem pro Dokument gespeicherten In-Memory-Cache anstelle des HTTP-Caches, was zu einer leicht schnelleren Vorladung führen kann.

### Verwendung von Vorabrendering

Das Einbeziehen von `prerender`-Regeln in ein `<script type="speculationrules">`-Element oder `Speculation-Rules`-Header führt dazu, dass unterstützende Browser den Inhalt in einen unsichtbaren Tab laden, der in einem pro Dokument gespeicherten In-Memory-Cache gespeichert wird. Dies umfasst das Laden aller Subressourcen, das Ausführen von JavaScript und sogar das Laden von Subressourcen und das Ausführen von Datenabrufen, die von JavaScript gestartet werden. Alle zwischengespeicherten Vorabrenderungen und deren Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich ein vorgeladenes Dokument, zu dem Sie dann navigieren.

Zukünftige Navigationen zu einer vorgeladenen Seite werden nahezu sofort sein. Der Browser aktiviert den unsichtbaren Tab anstelle des üblichen Navigationsprozesses und ersetzt die alte Vordergrundseite mit der vorgeladenen Seite. Wenn eine Seite aktiviert wird, bevor sie vollständig vorab rendert wurde, wird sie in ihrem aktuellen Zustand aktiviert und lädt dann weiter, was bedeutet, dass Sie dennoch eine signifikante Leistungssteigerung erzielen werden.

Vorabrendering nutzt Speicher und Netzwerkbandbreite. Wenn Sie etwas vorab rendern, zu dem der Benutzer nicht navigiert, werden diese verschwendet (obwohl das Ergebnis den HTTP-Cache füllen kann, wenn Header dies zulassen, sodass spätere Anwendungen möglich sind). Die anfänglichen Kosten des Vorabladens sind viel größer als die des Vorabrufens, und andere Bedingungen könnten auch dazu führen, dass Inhalte unsicher zum Vorabrendern werden (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Details). Daher werden Sie ermutigt, das Vorabrendering sparsamer einzusetzen, sorgfältig die Fälle zu berücksichtigen, in denen eine hohe Wahrscheinlichkeit besteht, dass die Seite besucht wird und Sie denken, dass der Vorteil für die Benutzererfahrung die zusätzlichen Kosten wert ist.

> [!NOTE]
> Um die Menge an potenzieller Ressourcenverschwendung in Perspektive zu setzen, verwendet ein Vorabrender ungefähr die gleiche Menge an Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden automatisch zurückgestellt, wenn während des Vorabrenderings/ bis zur Aktivierung. Siehe [Plattformmerkmale, die während des Vorabrenderings zurückgestellt oder eingeschränkt sind](#plattformfunktionen,_die_während_des_vorabladens_verzögert_oder_eingeschränkt_sind) für weitere Details.

Vorabrendering ist standardmäßig auf gleich-herkunfts Dokumente beschränkt. Cross-Origin, gleiche-Site Vorabrendering ist möglich – es erfordert, dass das Navigationstarget sich mit dem {{httpheader("Supports-Loading-Mode")}}-Header mit einem Wert von `credentialed-prerender` anmeldet. Cross-Site Vorabrendering ist derzeit nicht möglich.

Für Browser, die es unterstützen, sollte das Vorabrendern von Spekulationsregeln älteren Vorabrender-Mechanismen vorgezogen werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender):

- `<link rel="prerender">` ist Chrome-spezifisch und wurde nie standardisiert, und das Chrome-Entwicklungsteam ist dabei, es einzustellen.
- Es lädt Subressourcen, die über JavaScript geladen werden, während `<link rel="prerender">` dies nicht tut.
- Es wird nicht durch {{httpheader("Cache-Control")}}-Einstellungen blockiert, während `<link rel="prerender">` dies oft tut.
- Das Prerendern von Spekulationsregeln sollte als Hinweis und progressive Verbesserung behandelt werden. Anders als `<link rel="prerender">` ist es ein spekulativer Hinweis, und der Browser kann sich dazu entscheiden, nicht auf den Hinweis zu reagieren, basierend auf den Benutzereinstellungen, der aktuellen Speicherausnutzung oder anderen Heuristiken.

### Spekulationsregeln-API Feature-Erkennung

Sie können überprüfen, ob die Spekulationsregeln-API unterstützt wird, indem Sie den folgenden Code verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Zum Beispiel möchten Sie möglicheweise Spekulationsregeln für Vorabrufe in unterstützenden Browsern einsetzen, aber eine ältere Technologie wie `<link rel="prefetch">` in anderen verwenden:

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

## Erkennung von vorgeladenen und vorgeladenen Seiten

Dieser Abschnitt betrachtet verschiedene Möglichkeiten, um zu erkennen, ob eine angeforderte Seite vorgeladen oder vorgeladen wurde.

### Serverseitige Erkennung

Vorgeladene und vorgeladene Seitenanforderungen werden mit dem {{httpheader("Sec-Purpose")}}-Request-Header gesendet:

Für Vorabruf:

```http
Sec-Purpose: prefetch
```

Für Vorabrender:

```http
Sec-Purpose: prefetch;prerender
```

Server können basierend auf diesem Header antworten, zum Beispiel um spekulative Ladeanforderungen zu protokollieren, unterschiedliche Inhalte zurückzugeben oder sogar zu verhindern, dass spekulatives Laden passiert. Wenn ein nicht erfolgreiches Antwortcode zurückgegeben wird (jeder HTTP-Status, der nicht im Bereich 200-299 nach Umleitungen liegt), wird die Seite nicht vorgeladen/vorgeladen. Darüber hinaus verhindern die Statuscodes 204 und 205 auch das Vorabrendering (aber nicht das Vorabrufen).

Die Verwendung eines nicht erfolgreichen Codes (zum Beispiel ein 503) ist der einfachste Weg, um serverseitiges spekulatives Laden zu verhindern, obwohl es üblicherweise ein besserer Ansatz ist, das Vorladen/Vorabrendern zuzulassen und JavaScript zu verwenden, um Aktionen zu verzögern, die nur dann stattfinden sollen, wenn die Seite tatsächlich angezeigt wird.

### JavaScript Vorabruf-Erkennung

Wenn eine Seite vorgeladen wird, gibt dessen [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType)-Eintrag einen Wert von `"navigational-prefetch"` zurück. Sie könnten das Folgende verwenden, um eine Funktion auszuführen, wenn ein Leistungseintrag vom Typ `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist nützlich bei der Messung der Leistung oder wenn Sie Aktionen verzögern möchten, die während des Vorrufens Probleme verursachen könnten (siehe [Unsicheres Vorladen](#unsicheres_vorabrufen)).

### JavaScript Vorabrender-Erkennung

Um eine Aktivität auszuführen, während die Seite vorgeladen wird, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft überprüfen. Sie könnten zum Beispiel einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorgeladenes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Zeit zwischen dem Start des Vorabladens und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl für vorabrendernde als auch für vorgeladene Seiten überprüft werden:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vom Benutzer angezeigte vorgeladene Seite aktiviert wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu ermöglichen, die zuvor standardmäßig beim Laden der Seite gestartet würden, die Sie jedoch verzögern möchten, bis die Seite vom Benutzer betrachtet wird. Der folgende Code richtet einen Ereignislistener ein, um eine Funktion nach dem Abschluss des Vorabladens auf einer vorgeladenen Seite auszuführen oder sie sofort auf einer nicht vorgeladenen Seite auszuführen:

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

Dieser Abschnitt behandelt Bedingungen, auf die Sie achten müssen, unter denen Vorabrufen und/oder Vorabrendern **unsicher** sind. Dies bedeutet, dass das Vorabrufen/Vorabrendern von Seiten, die diese Bedingungen aufweisen, möglicherweise Abhilfemaßnahmen in Ihrem Code erfordert oder ganz vermieden werden muss.

### Unsicheres Vorabrufen

Wie bereits erwähnt, empfehlen wir, das Vorabrufen breit zu übernehmen, da das Risiko-Ertrags-Verhältnis relativ gering ist — das Potenzial für Ressourcenverschwendung ist minimal, und die Leistungsverbesserungen können erheblich sein. Sie müssen jedoch sicherstellen, dass vorgeladene Seiten den Fluss Ihrer Anwendung nicht stören.

Wenn ein Vorabruf erfolgt, lädt der Browser den Antwortkörperder referenzierten Seite über eine einzelne GET-Anfrage herunter, auf die der Benutzer möglicherweise später navigiert. Probleme können speziell auftreten, wenn die URL der Anfrage eine serverinitiierte Seiteneffekt ausführt, die Sie nicht möchten, dass sie eintritt, bevor zur URL navigiert wird.

Zum Beispiel:

- Abmelde-URLs.
- Sprachwechsel-URLs.
- "In den Warenkorb"-URLs.
- Anmeldefluss-URLs, bei denen der Server eine SMS sendet, zum Beispiel als Einmalpasswort (OTP).
- URLs, die die Nutzung eines Benutzers zählen, wie zum Beispiel das Verbrauchenkontingent für monatliche Artikelfreimengen oder das Starten des Timers für monatliche Minuten.
- URLs, die serverseitiges Conversion-Tracking von Anzeigen initiieren.

Solche Probleme können serverseitig gemindert werden, indem man auf den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Header achtet, während die Anfragen eingehen, und dann spezifischen Code ausführt, um problematische Funktionalität zu verschieben. Später, wenn zur Seite tatsächlich navigiert wird, können Sie die verschobene Funktionalität bei Bedarf mit JavaScript initiieren.

> [!NOTE]
> Weitere Details zum Erkennungscode finden Sie im Abschnitt [Erkennung von vorgeladenen und vorgeladenen Seiten](#erkennung_von_vorgeladenen_und_vorgeladenen_seiten).

Es ist auch potenziell riskant, ein Dokument vorzuladen, dessen serverseitig gerenderter Inhalt sich aufgrund von Aktionen ändern wird, die der Benutzer auf der aktuellen Seite ausführen kann. Dazu könnten zum Beispiel Ausverkaufseiten oder Sitzkarten von Kinos gehören. Testen Sie solche Fälle sorgfältig und mildern Sie solche Problemfällen, indem Sie den Inhalt nach dem Laden der Seite aktualisieren. Siehe [Server-gerenderter variierender Zustand](#server-gerenderter_variierender_zustand) für weitere Details zu diesen Fällen.

> [!NOTE]
> Browser werden vorgeladene Seiten für eine kurze Zeit zwischenspeichern (Chrome speichert sie beispielsweise für 5 Minuten), bevor sie gelöscht werden, sodass Ihre Benutzer in jedem Fall Inhalte sehen könnten, die bis zu 5 Minuten veraltet sind.

Vorladen ist sicher, wenn alle Seiteneffekte des Abrufens der Seite von der Ausführung von JavaScript resultieren, da das JavaScript nicht ausgeführt wird, bis die Aktivierung erfolgt.

Ein letzter Tipp ist es, die URLs zu prüfen, die in Ihrer {{Glossary("robots.txt", "robots.txt")}}-Datei als nicht erlaubt aufgelistet sind - normalerweise zeigen diese URLs auf Seiten, die nur von authentifizierten Benutzern aufgerufen werden können und daher nicht in Suchmaschinenergebnissen enthalten sein sollten. Viele davon werden in Ordnung sein, aber es kann ein guter Ort sein, um URLs zu finden, die unsicher zum Vorabrufen sind (das heißt, sie weisen die oben beschriebenen Bedingungen auf).

### Unsicheres Vorabrendern

Vorabrendern ist im Vergleich zum Vorabrufen riskanter und sollte daher sparsam eingesetzt werden, in Fällen, in denen es sich lohnt. Es gibt mehr unsichere Bedingungen, auf die Sie beim Vorabrendern achten müssen, also, während die Belohnung höher ist, ist das Risiko auch höher.

Wenn ein Vorabrender erfolgt, holt der Browser die URL ab und rendert und lädt den Inhalt in einen unsichtbaren Tab. Dies umfasst das Ausführen des JavaScripts des Inhalts und das Laden aller Subressourcen, einschließlich derer, die von JavaScript geladen werden. Ein Inhalt kann potenziell unsicher zum Vorabrendern sein, wenn eine der folgenden Bedingungen beobachtet wird:

- Die URL ist [unsicher zum Vorabrufen](#unsicheres_vorabrufen). Lesen Sie den vorherigen Abschnitt, falls Sie ihn noch nicht gelesen haben, und verstehen Sie, dass diese Bedingungen auch gleichermaßen auf unsicheres Vorabrendern zutreffen.
- Das JavaScript der Seite verändert den clientseitigen Speicher (zum Beispiel [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) beim Laden auf eine Weise, die zu verwirrenden Effekten auf anderen, nicht vorgeladenen Seiten führen kann, die der Benutzer derzeit betrachtet.
- Die Seite führt JavaScript aus oder läd Bilder, die Seiteneffekte verursachen wie das Senden von Analysen, das Aufzeichnen von Anzeigenimpressionen oder anderweitige Änderungen des Zustands der Anwendung, als ob der Benutzer bereits damit interagiert hätte. Auch dies kann den Fluss der Anwendung stören oder falsche Leistungs- oder Nutzungsberichte verursachen. Siehe [Server-gerenderter variierender Zustand](#server-gerenderter_variierender_zustand) für weitere Details zu solchen Anwendungsfällen.

Um solche Probleme zu mindern, können Sie die folgenden Techniken verwenden:

- Achten Sie beim Eingang der Anforderungen auf den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Header auf dem Server und führen Sie dann spezifischen Code aus, um problematische Funktionalität zu verzögern.
- Verwenden Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis, um zu erkennen, wann die vorgeladene Seite tatsächlich aktiviert wird, und führen Sie als Ergebnis Code aus. Dies ist in zwei Fällen nützlich:
  - Verzögern von Code, der Probleme verursachen könnte, wenn er ausgeführt wird, bevor die Seite angezeigt wird. Beispielsweise möchten Sie möglicherweise warten, bis nach der Aktivierung, um clientseitigen Speicher zu aktualisieren oder den serverseitigen Zustand mit JavaScript zu ändern. Dies kann Situationen vermeiden, in denen die Benutzeroberfläche und der Anwendungszustand nicht mehr synchron sind, beispielsweise ein Einkaufswagen der keine Artikel anzeigt, obwohl der Benutzer einige hinzugefügt hat.
  - Wenn das Vorstehende nicht möglich ist, können Sie dennoch den Code nach der Aktivierung erneut ausführen, um die Aktualisierung der App durchzuführen. Eine hochdynamische Blitzverkaufsseite könnte auf Inhaltsaktualisierungen angewiesen sein, die von einer Drittanbieter-Bibliothek kommen. Wenn Sie die Aktualisierungen nicht verzögern können, können Sie immer frische Aktualisierungen erhalten, sobald der Benutzer die Seite betrachtet. Vorgeladene Seiten können in Echtzeit mit der [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einem anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einem [`WebSocket`](/de/docs/Web/API/WebSocket) aktualisiert werden. Dies stellt sicher, dass der Benutzer nach der Prerendering-Aktivierung aktuelle Inhalte sieht.
- Verwalten Sie Ihre Drittanbieter-Analyse-Skripte sorgfältig – verwenden Sie, wenn möglich, Skripte, die sich des Vorabrenderings bewusst sind (zum Beispiel verwenden Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft, um die Ausführung auf Seiten, die vorgeladen werden, zu verschieben), wie Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden der Inhalte von Cross-Origin {{htmlelement("iframe")}}s während des Vorabrenderings verzögert wird, bis die Seite aktiviert wird. Dies geschieht, um Brüche zu vermeiden, die durch das Laden von Cross-Origin-Seiten verursacht werden, die sich nicht des Vorabrenderings bewusst sind, und um Komplexitäten in Bezug auf die Exposition von Anmeldeinformationen und Speicher zu diesen Frames zu vermeiden. Dies bedeutet, dass Benutzer in einigen Fällen möglicherweise zunächst leere Frames sehen, aber es bedeutet auch, dass die meisten Drittanbieter-Widgets wie Anzeigetechnologie sicher während des Vorabrenderings verwendet werden können.
  - Für Drittanbieterskripte, die sich des Vorabrenderings nicht bewusst sind, vermeiden Sie das Laden, bis nach der Aktivierung, indem Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis verwenden, wie bereits erwähnt.

### Server-gerenderter variierender Zustand

Es gibt zwei Haupttypen von serverseitigem gerendertem Zustand, um die man sich kümmern muss: **veralteter Zustand** und **benutzerspezifischer Zustand**. Dies kann sowohl unsicheres Vorabrufen als auch Vorabrendern verursachen.

- Veralteter Zustand: Betrachten Sie das Beispiel einer serverseitig gerenderten Liste von Blogkommentaren, die zwischen dem Vorabrendern des Blogposts und dessen Betrachtung veraltet sein können. Dies könnte besonders problematisch sein, wenn die aktuelle Seite ein Admin-Panel ist, auf dem der Benutzer Spamkommentare löscht. Wenn der Benutzer dann zum Blogpost navigiert, könnte er verwirrt sein, warum er die gerade gelöschten Spamkommentare sieht.
- Benutzerspezifischer Zustand: Betrachten Sie das Beispiel, den Anmeldezustand über ein Cookie zu verfolgen. Es können Probleme auftreten wie die folgenden:
  - Der Benutzer besucht `https://site.example/a` in Tab 1 und `https://site.example/b` in Tab 2, während er abgemeldet ist.
  - `https://site.example/b` rendert `https://site.example/c` vor. Es wird im abgemeldeten Zustand vorgeladen.
  - Der Benutzer meldet sich in Tab 1 bei `https://site.example` an.
  - Der Benutzer wechselt zu Tab 2 und klickt auf den Link zu `https://site.example/c`, der die vorgeladene Seite aktiviert.
  - Tab 2 zeigt eine abgemeldete Ansicht von `https://site.example/c`, die den Benutzer verwirrt, weil er dachte, er sei angemeldet.

Benutzerspezifische Zustandsprobleme können auch bei anderen Benutzereinstellungen auftreten, zum Beispiel Spracheinstellungen, Dunkelmoduspräferenzen oder das Hinzufügen von Artikeln zu einem Warenkorb. Sie können auch auftreten, wenn nur ein einzelner Tab beteiligt ist:

- Angenommen, der Benutzer besucht `https://site.example/product`.
- `https://site.example.com/product` rendert `https://site.example.com/cart` vor. Es rendert mit 0 Artikeln im Warenkorb vor.
- Der Benutzer klickt auf die Schaltfläche "In den Warenkorb", was eine Fetch-Anfrage initiiert, um den Artikel in den Benutzer-Warenkorb hinzuzufügen (ohne SeitenneuGenerierung).
- Der Benutzer klickt auf den Link zu `https://site.example.com/cart`, der die vorgeladene Seite aktiviert.
- Der Benutzer sieht einen leeren Warenkorb, obwohl er gerade etwas hinzugefügt hat.

Die beste Abhilfemaßnahme für diese Fälle, und in der Tat immer dann, wenn Inhalte sich nicht mehr mit dem Server synchronisieren können, ist es, dass sich Seiten bei Bedarf selbst aktualisieren. Zum Beispiel könnte ein Server die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein [`WebSocket`](/de/docs/Web/API/WebSocket) verwenden. Seiten können sich dann angemessen aktualisieren, einschließlich spekulativ geladener Seiten, die noch nicht aktiviert wurden.

## Sitzungsverlauf-Verhalten für vorgeladene Dokumente

Die Aktivierung eines vorgeladenen/vorgeladenen Dokuments verhält sich aus Sicht des Endbenutzers wie jede herkömmliche Navigation. Das aktivierte Dokument wird im Tab angezeigt und dem Sitzungsverlauf hinzugefügt, und alle vorhandenen Verlaufeinträge werden abgeschnitten. Jegliche Navigationen im brauserfenster vor der Aktivierung beeinflussen den Sitzungsverlauf nicht.

Aus Entwicklersicht kann ein vorabgeladene Dokument als einen **trivialen Sitzungsverlauf** angesehen werden, bei dem nur ein Eintrag - der aktuelle Eintrag - existiert. Jegliche Navigationen im Vorabrendering-Kontext werden effektiv ersetzt.

Während API-Funktionen, die auf den Sitzungsverlauf wirken (zum Beispiel [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation)), innerhalb vorabrendernder Dokumente aufgerufen werden können, wirken sie nur auf den trivialen Sitzungsverlauf des Kontexts. Folglich nehmen vorabgeladene Dokumente nicht am gemeinsamen Sitzungsverlauf ihrer referenzierenden Seite teil. Zum Beispiel können sie nicht über [`History.back()`](/de/docs/Web/API/History/back) zu ihrem Referrer navigieren.

Dieses Design stellt sicher, dass Benutzer das erwartete Erlebnis erhalten, wenn sie den Zurück-Button verwenden – also dass sie zurück zur letzten Sache gelangen, die sie sahen. Sobald ein Vorabrendering-Dokument aktiviert wird, wird nur ein einzelner Sitzungsverlaufeintrag in den gemeinsamen Sitzungsverlauf aufgenommen, wobei alle vorherigen Navigations versäumnisse innerhalb des Vorabrendering-Browsing-Contexts ignoriert werden. Zurücks auf eines der nächsten Schritte im gemeinsamen Sitzungsverlauf – zum Beispiel durch Drücken des Zurück-Buttons – führt den Benutzer zurück zur Referrer-Seite.

## Plattformfunktionen, die während des Vorabladens verzögert oder eingeschränkt sind

Da eine vorgeladene Seite im verborgenen Zustand geöffnet wird, werden mehrere API-Funktionen, die potenziell aufdringliche Verhalten verursachen, in diesem Zustand nicht aktiviert, sondern bis zur Aktivierung **zurückgestellt**. Andere Web-Plattform-Funktionen, die beim Vorlanden problematisch sind, sind insgesamt eingeschränkt. Dieser Abschnitt enthält Details zu den zurückgestellten oder eingeschränkten Funktionen.

> [!NOTE]
> In der kleinen Anzahl von Fällen, in denen ein Zurückstellen und Einschränken nicht möglich ist, wird das Vorladen abgebrochen.

### Asynchrones API-zurückstellen

Das Zurückstellen bedeutet, dass die API-Funktion sofort ein ausstehendes Versprechen zurückgibt und dann nichts tut, bis zur Aktivierung der Seite. Nach der Aktivierung läuft die Funktion normal und das Versprechen wird wie üblich erfüllt oder abgelehnt.

Die folgenden asynchronen Funktionen werden in vorabgerenderten Dokumenten bis zu ihrer Aktivierung zurückgestellt:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) event, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) event
- [Geolocation API](/de/docs/Web/User_API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/User_API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/User_API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/User_API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API: Die Wiedergabeposition wird nicht fortschreiten, während das enthaltene Dokument vorgeladen wird
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (und die Legacy-Version [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Notifications API](/de/docs/Web/API/Notifications_API): [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor, [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Storage API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): [`AudioContext`](/de/docs/Web/API/AudioContext)s dürfen nicht starten, während das enthaltene Dokument vorgeladen wird
- [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API): [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices), [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice)
- [WebHID API](/de/docs/Web/API/WebHID_API): [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices), [`HID.requestDevice()`](/de/docs/Web/API/HID/requestDevice)
- [Web Locks API](/de/docs/Web/API/Web_Locks_API): [`LockManager.query()`](/de/docs/Web/API/LockManager/query), [`LockManager.request()`](/de/docs/Web/API/LockManager/request)
- [Web MIDI API](/de/docs/Web/API/Web_MIDI_API): [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess)
- [Web NFC API](/de/docs/Web/API/Web_NFC_API): [`NDefReader.write()`](/de/docs/Web/API/NDefReader/write), [`NDefReader.scan()`](/de/docs/Web/API/NDefReader/scan)
- [Web Serial API](/de/docs/Web/API/Web_Serial_API): [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts), [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)
- [Web Speech API](/de/docs/Web/API/Web_Speech_API): [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort), [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start), [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop), [`SpeechSynthesis.cancel()`](/de/docs/Web/API/SpeechSynthesis/cancel), [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause), [`SpeechSynthesis.resume()`](/de/docs/Web/API/SpeechSynthesis/resume), [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)
- [WebUSB API](/de/docs/Web/API/WebUSB_API): [`USB.getDevices()`](/de/docs/Web/API/USB/getDevices), [`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice)
- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API): [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)

### Implizit eingeschränkte APIs

Die folgenden Funktionen scheitern automatisch oder führen in Dokumenten, die nicht aktiviert sind, keine Operation aus.

APIs, die {{Glossary("transient_activation", "transiente Aktivierung")}} oder {{Glossary("sticky_activation", "dauerhafte Aktivierung")}} erfordern:

- Bestätigungsdialoge, die durch das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis generiert werden
- Das Auslösen von Ereignissen in der [Zwischenablage-API](/de/docs/Web/API/Clipboard_API).
- [Dateisystem-API](/de/docs/Web/API/File_System_API): [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker), [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker), [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API): [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static)
- [Tastatur-API](/de/docs/Web/API/Keyboard_API): [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) (erfordert Vollbildmodus)
- [Payment Request-API](/de/docs/Web/API/Payment_Request_API): [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
- [Präsentations-API](/de/docs/Web/API/Presentation_API): [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start)
- [Pointer-Lock-API](/de/docs/Web/API/Pointer_Lock_API): [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Bildschirmaufnahme-API](/de/docs/Web/API/Screen_Capture_API): [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Web Share-API](/de/docs/Web/API/Web_Share_API): [`Navigator.share()`](/de/docs/Web/API/Navigator/share)
- [`Window.open()`](/de/docs/Web/API/Window/open)

APIs, die benötigen, dass das enthaltende Dokument im Fokus ist:

- [Zwischenablage API](/de/docs/Web/API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)

APIs, die benötigen, dass der [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) des enthaltenen Dokuments `"visible"` ist:

- [Bild-im-Bild-API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert, dass die Sichtbarkeitsstatus des enthaltenden Dokuments `"visible"` ist, _oder_ {{Glossary("transient_activation", "transiente Aktivierung")}})
- [Bildschirm-Sperre API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Andere eingeschränkte Funktionen

- Downloadlinks, d.h. {{htmlelement("a")}} und {{htmlelement("area")}} Elemente mit dem `download`-Attribut, werden ihre Downloads verzögert, bis das Vorabrendern abgeschlossen ist.
- Keine Seitenübergreifenden Navigationen: Jedes vorabrendernde Dokument, das zu einer anderen Seite navigiert, wird sofort verworfen, bevor eine Anfrage an diese andere Seite gesendet wird.
- Eingeschränkte URLs: Vorabrenderende Dokumente können keine nicht-HTTP(S) Top-Level-URLs hosten. Einschließen der folgenden URL-Typen wird dazu führen, dass das Vorabrendern sofort verworfen wird:
  - [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
  - [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data)
  - `blob:` URLs
  - `about:` URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungspeicher: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, aber das Verhalten ist sehr spezifisch, um zu vermeiden, dass Seiten kaputtgehen, die erwarten, dass nur eine Seite gleichzeitig auf den Speicher des Tabs zugreift. Eine vorgeladene Seite beginnt daher mit einer Kopie des Sitzungspeicherzustands des Tabs, als sie erstellt wurde. Nach der Aktivierung wird die Speicherkopie der vorgeladenen Seite verworfen und der Hauptspeicherzustand des Tabs wird stattdessen verwendet. Seiten, die Sitzungspeicher verwenden, können das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis verwenden, um zu erkennen, wann dieser Speicheraustausch stattfindet.
- [`Window.print()`](/de/docs/Web/API/Window/print): Alle Anrufe dieser Methode werden ignoriert.
- "Einfacher Dialogmethoden" sind wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) kehrt sofort zurück, ohne einen Dialog anzuzeigen.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) kehrt sofort `false` zurück, ohne einen Dialog anzuzeigen.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) kehrt sofort eine leere Zeichenkette (`""`) zurück, ohne einen Dialog anzuzeigen.
- Dedizierte/geteilte Worker-Skripts werden geladen, aber ihre Ausführung wird bis zur Aktivierung des vorgeladenen Dokuments verzögert.
- Cross-Origin {{htmlelement("iframe")}}-Ladungen werden während des Vorabrenderns verzögert, bis die Seite aktiviert wird.

## Schnittstellen

Die Spekulationsregeln-API definiert keine eigenen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument derzeit im Prozess des Vorabladens ist.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis {{experimental_inline}}
  - : Wird auf einem vorgeladenen Dokument ausgelöst, wenn es aktiviert wird (d.h. der Benutzer sieht die Seite).
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Start des Vorabladens eines Dokuments und seiner Aktivierung darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) `"navigational-prefetch"` Wert {{experimental_inline}}
  - : Signalisiert, dass der Typ eines Leistungsdateneintrags ein Vorabruf ist.

## HTTP-Header

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'` Wert {{experimental_inline}}
  - : Wird verwendet, um die Definition von Spekulationsregeln im Dokument zuzulassen, das mithilfe eines `<script type="speculationrules">`-Elements abgerufen wird.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die Spekulationsregel-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelsatz des Dokuments hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationstarget gesetzt, um die Verwendung verschiedener risikoreicher Lade-Modi zu ermöglichen. Zum Beispiel erfordert Cross-Origin, gleiche-Site Vorabrendering einen `Supports-Loading-Mode` Wert von `credentialed-prerender`.

## HTML-Funktionen

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um einen Satz von Vorabladungs- und/oder Vorabrenderungs-Spekulationsregeln innerhalb des aktuellen Dokuments zu definieren, die zum Spekulationsregelsatz des Dokuments hinzugefügt werden.

## Beispiele

Sie finden ein [vollständiges Prerender-Demo hier](https://prerender-demos.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigation](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von Spekulationsregeln und anderen ähnlichen Leistungsverbesserungsfunktionen.
