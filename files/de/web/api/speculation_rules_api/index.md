---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 28779fec7536bb91036411d8bdafece11c64b811
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Speculation Rules API** wurde entwickelt, um die Leistung bei zukünftigen Navigationen zu verbessern. Sie zielt auf Dokument-URLs statt auf spezifische Ressourcendateien ab und ist daher für Multi-Page Applications (MPAs) sinnvoller als für Single-Page Applications (SPAs).

Die Speculation Rules API bietet eine Alternative zur weit verbreiteten Funktion [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und soll die nur in Chrome verfügbare, veraltete Funktion [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) ersetzen. Sie bietet gegenüber diesen Technologien viele Verbesserungen sowie eine aussagekräftigere, konfigurierbare Syntax zur Angabe, welche Dokumente vorab abgerufen oder vorab gerendert werden sollen.

> [!NOTE]
> Die Speculation Rules API verarbeitet keine Prefetches von Subressourcen; verwenden Sie hierfür `<link rel="prefetch">`.

## Konzepte und Verwendung

Speculation Rules können innerhalb von Inline-Elementen [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) und externen Textdateien angegeben werden, auf die über den Antwort-Header {{httpheader("Speculation-Rules")}} verwiesen wird. Die Regeln werden als JSON-Struktur angegeben.

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

Speculation Rules, die ein `<script>`-Element verwenden, müssen explizit in der {{httpheader("Content-Security-Policy")}}-Direktive [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) erlaubt werden, falls die Website diese enthält. Dazu wird eine der Quellen `'inline-speculation-rules'`, eine Hash-Quelle oder eine Nonce-Quelle hinzugefügt.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das JSON der Speculation Rules enthält, kann jeden gültigen Namen und jede gültige Erweiterung haben, muss jedoch mit dem MIME-Typ `application/speculationrules+json` bereitgestellt werden.

> [!NOTE]
> Regeln können gleichzeitig mithilfe eines Inline-Skripts und des HTTP-Headers angegeben werden — alle auf ein Dokument angewendeten Regeln werden geparst und zur Liste der Speculation Rules des Dokuments hinzugefügt.

Sie geben für jeden spekulativen Ladetyp ein anderes Array an, das die Regeln enthält, beispielsweise `"prerender"` oder `"prefetch"`. Jede Regel befindet sich in einem Objekt, das beispielsweise eine Liste abzurufender Ressourcen sowie Optionen wie eine explizite {{httpheader("Referrer-Policy")}}-Einstellung für jede Regel angibt. Beachten Sie, dass vorab gerenderte URLs ebenfalls vorab abgerufen werden.

Eine vollständige Erklärung der verfügbaren Syntax finden Sie unter [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules).

### Prefetching verwenden

Das Einfügen von `prefetch`-Regeln in ein Element `<script type="speculationrules">` oder einen `Speculation-Rules`-Header veranlasst unterstützende Browser, den Response-Body der referenzierten Seiten herunterzuladen, jedoch keine von der Seite referenzierten Subressourcen. Wenn zu einer vorab abgerufenen Seite navigiert wird, wird sie wesentlich schneller gerendert als ohne vorherigen Abruf.

Die Ergebnisse werden in einem dokumentbezogenen In-Memory-Cache gespeichert. Alle im Cache gespeicherten Prefetches werden verworfen, wenn Sie die aktuelle Seite verlassen — ausgenommen ist natürlich ein vorab abgerufenes Dokument, zu dem Sie anschließend navigieren.

Das bedeutet, dass das Vorababrufen von etwas, zu dem der Benutzer nicht navigiert, im Allgemeinen eine Ressourcenverschwendung ist, obwohl das Ergebnis den HTTP-Cache füllen kann, sofern die Header dies erlauben. Allerdings sind die anfänglichen Kosten eines Prefetch wesentlich geringer als die eines Prerender, weshalb Sie dazu ermutigt werden, Prefetching breitflächig einzusetzen, beispielsweise für alle wichtigen Seiten Ihrer Website, sofern diese sicher vorab abgerufen werden können (weitere Informationen finden Sie unter [Unsichere Bedingungen für spekulatives Laden](#unsichere_bedingungen_für_spekulatives_laden)).

Same-Site- und Cross-Site-Prefetches funktionieren, Cross-Site-Prefetches sind jedoch eingeschränkt (eine Erklärung des Unterschieds finden Sie unter ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site)). Aus Datenschutzgründen funktionieren Cross-Site-Prefetches derzeit nur, wenn der Benutzer keine Cookies für die Ziel-Website gesetzt hat — Websites sollen Benutzeraktivitäten nicht über vorab abgerufene Seiten verfolgen können, die diese möglicherweise nie tatsächlich besuchen, und zwar anhand zuvor gesetzter Cookies.

> [!NOTE]
> Künftig wird ein Opt-in für Cross-Site-Prefetches über den Header {{httpheader("Supports-Loading-Mode")}} bereitgestellt, dies war zum Zeitpunkt der Erstellung jedoch noch nicht implementiert (nur ein Opt-in für Cross-Origin-, Same-Site-[Prerendering](#prerendering_verwenden) war verfügbar).

Für Browser, die dies unterstützen, sollte Prefetching mit Speculation Rules älteren Prefetch-Mechanismen vorgezogen werden, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit der gesetzten Option `priority: "low"`. Da bekannt ist, dass Prefetching mit Speculation Rules für Navigationen und nicht für allgemeines Vorababrufen von Ressourcen bestimmt ist, kann es für Cross-Site-Navigationen verwendet werden, während `<link rel="prefetch">` dies nicht kann.

Darüber hinaus bietet Prefetching mit Speculation Rules Folgendes:

- Es senkt die Priorität bei Bedarf automatisch (`fetch()` tut dies nicht).
- Es berücksichtigt die Konfiguration des Benutzers. Beispielsweise erfolgt kein Prefetching, wenn sich das Gerät des Benutzers im Battery-Saver- oder Data-Saver-Modus befindet.
- Es speichert die vorab abgerufenen Ressourcen in einem dokumentbezogenen In-Memory-Cache statt im HTTP-Cache, was zu etwas schnellerem Prefetching führen kann.

### Prerendering verwenden

Das Einfügen von `prerender`-Regeln in ein Element `<script type="speculationrules">` oder einen `Speculation-Rules`-Header veranlasst unterstützende Browser, den Inhalt abzurufen, zu rendern und in einen unsichtbaren Tab zu laden, der in einem dokumentbezogenen In-Memory-Cache gespeichert wird. Dies umfasst das Laden aller Subressourcen, das Ausführen des gesamten JavaScript und sogar das Laden von Subressourcen sowie das Durchführen von Datenabrufen, die durch JavaScript gestartet wurden. Alle im Cache gespeicherten Prerender und ihre Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen — ausgenommen ist natürlich ein vorab gerendertes Dokument, zu dem Sie anschließend navigieren.

Zukünftige Navigationen zu einer vorab gerenderten Seite erfolgen nahezu sofort. Der Browser aktiviert den unsichtbaren Tab, anstatt den üblichen Navigationsprozess auszuführen, und ersetzt die bisherige Vordergrundseite durch die vorab gerenderte Seite. Wenn eine Seite aktiviert wird, bevor sie vollständig vorab gerendert wurde, wird sie in ihrem aktuellen Zustand aktiviert und lädt anschließend weiter. Sie werden dennoch eine erhebliche Leistungsverbesserung feststellen.

Prerendering benötigt Speicher und Netzwerkbandbreite. Wenn Sie etwas vorab rendern, zu dem der Benutzer nicht navigiert, werden diese Ressourcen verschwendet, obwohl das Ergebnis den HTTP-Cache füllen kann, sofern die Header dies erlauben und eine spätere Verwendung ermöglichen. Die anfänglichen Kosten eines Prerender sind deutlich höher als die eines Prefetch, und weitere Bedingungen können Inhalte ebenfalls für Prerendering ungeeignet machen (weitere Informationen finden Sie unter [Unsichere Bedingungen für spekulatives Laden](#unsichere_bedingungen_für_spekulatives_laden)). Daher sollten Sie Prerendering sparsamer einsetzen und sorgfältig Fälle abwägen, in denen eine hohe Wahrscheinlichkeit besteht, dass zu der Seite navigiert wird und der Nutzen für die Benutzererfahrung die zusätzlichen Kosten rechtfertigt.

> [!NOTE]
> Um das potenzielle Ausmaß der Ressourcenverschwendung einzuordnen: Ein Prerender benötigt ungefähr genauso viele Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden beim Prerendering bzw. bis zur Aktivierung automatisch zurückgestellt. Weitere Informationen finden Sie unter [Während des Prerendering zurückgestellte oder eingeschränkte Plattformfunktionen](#während_des_prerendering_zurückgestellte_oder_eingeschränkte_plattformfunktionen).

Prerendering ist standardmäßig auf Same-Origin-Dokumente beschränkt. Cross-Origin-, Same-Site-Prerendering ist möglich — hierfür muss das Navigationsziel mithilfe des Headers {{httpheader("Supports-Loading-Mode")}} mit dem Wert `credentialed-prerender` ein Opt-in vornehmen. Cross-Site-Prerendering ist derzeit nicht möglich.

Für Browser, die dies unterstützen, sollte Prerendering mit Speculation Rules älteren Prerender-Mechanismen vorgezogen werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender):

- `<link rel="prerender">` ist Chrome-spezifisch, wurde nie standardisiert und wird derzeit vom Chrome-Entwicklungsteam eingestellt.
- Es lädt über JavaScript geladene Subressourcen, während `<link rel="prerender">` dies nicht tut.
- Es wird nicht durch Einstellungen von {{httpheader("Cache-Control")}} blockiert, während dies bei `<link rel="prerender">` häufig der Fall ist.
- Prerendering mit Speculation Rules sollte als Hinweis und progressive Verbesserung behandelt werden. Anders als `<link rel="prerender">` ist es ein spekulativer Hinweis, und der Browser kann abhängig von Benutzereinstellungen, der aktuellen Speichernutzung oder anderen Heuristiken entscheiden, den Hinweis nicht zu berücksichtigen.

### Feature-Erkennung für die Speculation Rules API

Mit folgendem Code können Sie prüfen, ob die Speculation Rules API unterstützt wird:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Sie möchten beispielsweise in unterstützenden Browsern Speculation Rules für Prefetching einfügen, in anderen jedoch eine ältere Technologie wie `<link rel="prefetch">` verwenden:

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

## Vorab abgerufene und vorab gerenderte Seiten erkennen

Dieser Abschnitt behandelt verschiedene Möglichkeiten, um zu erkennen, ob eine angeforderte Seite vorab abgerufen oder vorab gerendert wurde.

### Serverseitige Erkennung

Anfragen für vorab abgerufene und vorab gerenderte Seiten werden mit dem Request-Header {{httpheader("Sec-Purpose")}} gesendet:

Für Prefetch:

```http
Sec-Purpose: prefetch
```

Für Prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können anhand dieses Headers reagieren, beispielsweise um Anfragen für spekulatives Laden zu protokollieren, andere Inhalte zurückzugeben oder spekulatives Laden ganz zu verhindern. Wenn ein nicht erfolgreicher Response-Code zurückgegeben wird — also ein HTTP-Status außerhalb des Bereichs 200–299 nach Weiterleitungen —, wird die Seite nicht vorab abgerufen bzw. gerendert. Zusätzlich verhindern die Status-Codes 204 und 205 auch Prerendering, jedoch nicht Prefetching.

Die Verwendung eines nicht erfolgreichen Codes, beispielsweise eines 503, ist die einfachste Möglichkeit, spekulatives Laden serverseitig zu verhindern. In der Regel ist es jedoch besser, Prefetch bzw. Prerender zuzulassen und JavaScript zu verwenden, um Aktionen zu verzögern, die erst stattfinden sollen, wenn die Seite tatsächlich angezeigt wird.

### JavaScript-Erkennung von Prefetches

Wenn eine Seite vorab abgerufen wird, gibt ihr Eintrag [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) den Wert `"navigational-prefetch"` zurück. Sie könnten Folgendes verwenden, um eine Funktion auszuführen, wenn ein Performance-Eintrag des Typs `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist bei Leistungsmessungen nützlich oder wenn Sie Aktionen verzögern möchten, die Probleme verursachen könnten, wenn sie während des Prefetching auftreten (siehe [Unsicheres Prefetching](#unsicheres_prefetching)).

### JavaScript-Erkennung von Prerendering

Um eine Aktivität auszuführen, während die Seite vorab gerendert wird, können Sie die Eigenschaft [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) überprüfen. Sie könnten beispielsweise Analysedaten erfassen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorab gerendertes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Zeit zwischen dem Beginn des Prerendering und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann auf Prerendering _und_ vorab gerenderte Seiten prüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vorab gerenderte Seite dadurch aktiviert wird, dass der Benutzer sie betrachtet, wird das Ereignis [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) ausgelöst. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die zuvor standardmäßig beim Laden der Seite gestartet worden wären, die Sie aber verzögern möchten, bis die Seite vom Benutzer betrachtet wird. Der folgende Code richtet einen Event-Listener ein, der eine Funktion ausführt, sobald das Prerendering auf einer vorab gerenderten Seite abgeschlossen ist, oder sie auf einer nicht vorab gerenderten Seite sofort ausführt:

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

Dieser Abschnitt behandelt Bedingungen, auf die Sie achten sollten und unter denen Prefetching und/oder Prerendering **unsicher** sind. Das bedeutet, dass Prefetching bzw. Prerendering von Seiten mit diesen Bedingungen möglicherweise Maßnahmen in Ihrem Code erfordert oder vollständig vermieden werden muss.

### Unsicheres Prefetching

Wie bereits erwähnt, empfehlen wir den breiten Einsatz von Prefetching, da das Risiko-Nutzen-Verhältnis recht günstig ist — das Potenzial für Ressourcenverschwendung ist minimal und die Leistungsverbesserungen können erheblich sein. Sie müssen jedoch sicherstellen, dass vorab abgerufene Seiten keine Probleme für den Ablauf Ihrer Anwendung verursachen.

Bei einem Prefetch lädt der Browser den Response-Body der referenzierten Seite über eine einzelne GET-Anfrage herunter, zu der der Benutzer möglicherweise zu einem späteren Zeitpunkt navigiert. Probleme können insbesondere entstehen, wenn die URL der Anfrage einen serverseitig ausgelösten Nebeneffekt ausführt, der erst beim Navigieren zu der URL stattfinden soll.

Beispiele:

- URLs zum Abmelden.
- URLs zum Wechseln der Sprache.
- URLs zum „Zum Warenkorb hinzufügen“.
- URLs für Anmeldeabläufe, bei denen der Server beispielsweise ein SMS als Einmalpasswort (OTP) sendet.
- URLs, die Nutzungsfreikontingente eines Benutzers erhöhen, etwa indem sie dessen monatliches Kontingent kostenloser Artikel verbrauchen oder den Timer für dessen monatliche Minuten starten.
- URLs, die serverseitiges Tracking von Anzeigen-Conversions initiieren.

Solche Probleme können auf dem Server abgemildert werden, indem beim Eingehen der Anfragen auf den Header {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} geprüft und anschließend spezifischer Code ausgeführt wird, um problematische Funktionalität zu verzögern. Wenn später tatsächlich zu der Seite navigiert wird, können Sie die verzögerte Funktionalität bei Bedarf über JavaScript starten.

> [!NOTE]
> Weitere Details zum Erkennungscode finden Sie im Abschnitt [Vorab abgerufene und vorab gerenderte Seiten erkennen](#vorab_abgerufene_und_vorab_gerenderte_seiten_erkennen).

Es ist außerdem potenziell riskant, ein Dokument vorab abzurufen, dessen servergerenderte Inhalte sich durch Aktionen ändern, die der Benutzer auf der aktuellen Seite ausführen kann. Dazu können beispielsweise Flash-Sale-Seiten oder Sitzplatzpläne von Kinos gehören. Testen Sie solche Fälle sorgfältig und mildern Sie derartige Probleme, indem Sie den Inhalt aktualisieren, sobald die Seite geladen ist. Weitere Informationen zu diesen Fällen finden Sie unter [Variierender servergerenderter Zustand](#variierender_servergerenderter_zustand).

> [!NOTE]
> Browser speichern vorab abgerufene Seiten nur für kurze Zeit im Cache — Chrome speichert sie beispielsweise 5 Minuten lang —, bevor sie verworfen werden. Daher könnten Ihre Benutzer in jedem Fall Inhalte sehen, die bis zu 5 Minuten veraltet sind.

Veraltete Prefetches können mit dem Wert {{httpheader("Clear-Site-Data#prefetchCache", "prefetchCache")}} des Response-Headers {{httpheader("Clear-Site-Data")}} geleert werden.
Dies kann beispielsweise verwendet werden, wenn zustandsändernde Anfragen dazu führen, dass die zwischengespeicherten Daten nicht mehr gültig sind, etwa beim Abmelden von einer Website.

Prefetching ist sicher, wenn alle Nebeneffekte des Abrufs der Seite aus der JavaScript-Ausführung resultieren, da JavaScript erst bei der Aktivierung ausgeführt wird.

Ein letzter Tipp besteht darin, die in Ihrer Datei {{Glossary("robots.txt", "robots.txt")}} als nicht zulässig aufgeführten URLs zu prüfen — normalerweise verweisen diese URLs auf Seiten, auf die nur authentifizierte Benutzer zugreifen können und die daher nicht in Suchmaschinenergebnissen enthalten sein sollten. Viele davon sind unproblematisch, aber es kann ein guter Ausgangspunkt sein, um URLs zu finden, die für Prefetching unsicher sind, also die oben beschriebenen Bedingungen aufweisen.

### Unsicheres Prerendering

Die Einführung von Prerendering ist riskanter als die von Prefetching und sollte daher sparsam erfolgen, wenn es sich lohnt. Beim Prerendering gibt es mehr unsichere Bedingungen, auf die geachtet werden muss. Zwar ist der Nutzen größer, aber auch das Risiko.

Bei einem Prerender ruft der Browser die URL mit GET ab und rendert und lädt den Inhalt in einen unsichtbaren Tab. Dies schließt das Ausführen des JavaScript des Inhalts sowie das Laden aller Subressourcen ein, einschließlich der über JavaScript abgerufenen Ressourcen. Inhalte können potenziell unsicher für Prerendering sein, wenn eine der folgenden Bedingungen beobachtet wird:

- Die URL ist [unsicher für Prefetching](#unsicheres_prefetching). Lesen Sie zunächst den vorherigen Abschnitt, falls Sie dies noch nicht getan haben, und beachten Sie, dass diese Bedingungen ebenso für unsicheres Prerendering gelten.
- Das JavaScript der Seite ändert beim Laden clientseitigen Speicher, beispielsweise [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API), auf eine Weise, die verwirrende Auswirkungen auf andere, nicht vorab gerenderte Seiten haben kann, die der Benutzer gerade betrachtet.
- Die Seite führt JavaScript aus oder lädt Bilder, die Nebeneffekte verursachen, etwa das Senden von Analysedaten, das Erfassen von Anzeigenimpressionen oder anderweitige Änderungen des Anwendungszustands, als hätte der Benutzer bereits mit der Anwendung interagiert. Auch dies kann den Ablauf der Anwendung beeinträchtigen oder zu falscher Leistungs- oder Nutzungsberichterstattung führen. Weitere Informationen zu solchen Anwendungsfällen finden Sie unter [Variierender servergerenderter Zustand](#variierender_servergerenderter_zustand).

Um solche Probleme zu mindern, können Sie die folgenden Techniken einsetzen:

- Prüfen Sie auf dem Server beim Eingehen der Anfragen auf den Header {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} und führen Sie anschließend spezifischen Code aus, um problematische Funktionalität zu verzögern.
- Verwenden Sie das Ereignis [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event), um zu erkennen, wann die vorab gerenderte Seite tatsächlich aktiviert wird, und führen Sie daraufhin Code aus. Dies ist in zwei Fällen nützlich:
  - Zum Verzögern von Code, der Probleme verursachen kann, wenn er ausgeführt wird, bevor die Seite betrachtet wird. Beispielsweise möchten Sie möglicherweise erst nach der Aktivierung clientseitigen Speicher aktualisieren oder mithilfe von JavaScript serverseitigen Zustand ändern. Dadurch können Situationen vermieden werden, in denen die Benutzeroberfläche und der Anwendungszustand nicht mehr synchron sind, beispielsweise wenn ein Warenkorb keine Artikel anzeigt, obwohl der Benutzer einige hinzugefügt hat.
  - Falls dies nicht möglich ist, können Sie Code nach Aktivierung der Seite dennoch erneut ausführen, um die Anwendung wieder zu aktualisieren. Beispielsweise kann eine hochdynamische Flash-Sale-Seite auf Inhaltsaktualisierungen einer Drittanbieter-Bibliothek angewiesen sein. Wenn Sie die Aktualisierungen nicht verzögern können, können Sie immer neue Aktualisierungen abrufen, sobald der Benutzer die Seite betrachtet. Vorab gerenderte Seiten können in Echtzeit über die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einen [`WebSocket`](/de/docs/Web/API/WebSocket) aktualisiert werden. Dadurch wird gewährleistet, dass der Benutzer nach der Aktivierung des Prerendering aktuelle Inhalte sieht.
- Verwalten Sie Ihre Analyse-Skripte von Drittanbietern sorgfältig — verwenden Sie nach Möglichkeit Skripte, die Prerendering berücksichtigen, beispielsweise indem sie die Eigenschaft [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) verwenden, um die Ausführung auf Seiten mit Prerendering zu verzögern, wie Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden der Inhalte von Cross-Origin-{{htmlelement("iframe")}}s während des Prerendering bis zur Aktivierung verzögert wird. Dies geschieht, um Fehler durch das Laden von Cross-Origin-Seiten zu vermeiden, die nichts von Prerendering wissen, und um Komplexität bezüglich der Frage zu vermeiden, welche Anmeldedaten und Speicherbereiche diesen Frames bereitgestellt werden sollen. Das bedeutet, dass Benutzer in einigen Fällen zunächst leere Frames sehen können, aber auch, dass die meisten Drittanbieter-Widgets wie Ad-Tech während des Prerendering sicher verwendet werden können.
  - Bei Drittanbieter-Skripten, die Prerendering nicht berücksichtigen, sollten Sie deren Laden bis nach der Aktivierung mithilfe des zuvor erwähnten Ereignisses [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) vermeiden.

### Variierender servergerenderter Zustand

Es gibt zwei Haupttypen servergerenderten Zustands, die berücksichtigt werden müssen: **veralteter Zustand** und **benutzerspezifischer Zustand**. Diese können sowohl unsicheres Prefetching als auch Prerendering verursachen.

- Veralteter Zustand: Betrachten Sie das Beispiel einer servergerenderten Liste von Blog-Kommentaren, die zwischen dem Prerendering des Blogbeitrags und dessen Betrachtung veralten kann. Dies könnte besonders problematisch sein, wenn die aktuelle Seite ein Admin-Panel ist, auf dem der Benutzer Spam-Kommentare löscht. Wenn der Benutzer anschließend zum Blogbeitrag navigiert, könnte er verwirrt sein, warum er die gerade gelöschten Spam-Kommentare sehen kann.
- Benutzerspezifischer Zustand: Betrachten Sie das Beispiel, bei dem der Anmeldestatus über ein Cookie verfolgt wird. Es können Probleme wie die folgenden entstehen:
  - Der Benutzer besucht `https://site.example/a` in Tab 1 und `https://site.example/b` in Tab 2, während er abgemeldet ist.
  - `https://site.example/b` rendert `https://site.example/c` vorab. Die Seite wird im abgemeldeten Zustand vorab gerendert.
  - Der Benutzer meldet sich in Tab 1 bei `https://site.example` an.
  - Der Benutzer wechselt zu Tab 2 und klickt auf den Link zu `https://site.example/c`, wodurch die vorab gerenderte Seite aktiviert wird.
  - Tab 2 zeigt eine abgemeldete Ansicht von `https://site.example/c` an, was den Benutzer verwirrt, da er davon ausgeht, angemeldet zu sein.

Probleme mit benutzerspezifischem Zustand können bei anderen Benutzereinstellungen auftreten, beispielsweise Spracheinstellungen, Dark-Mode-Präferenzen oder dem Hinzufügen von Artikeln zu einem Warenkorb. Sie können auch auftreten, wenn nur ein einzelner Tab beteiligt ist:

- Angenommen, der Benutzer besucht `https://site.example/product`.
- `https://site.example.com/product` rendert `https://site.example.com/cart` vorab. Die Seite wird mit 0 Artikeln im Warenkorb vorab gerendert.
- Der Benutzer klickt auf die Schaltflächen „Zum Warenkorb hinzufügen“, wodurch eine Fetch-Anfrage gestartet wird, um den Artikel zum Warenkorb des Benutzers hinzuzufügen, ohne dass die Seite neu geladen wird.
- Der Benutzer klickt auf den Link zu `https://site.example.com/cart`, wodurch die vorab gerenderte Seite aktiviert wird.
- Der Benutzer sieht einen leeren Warenkorb, obwohl er gerade etwas hinzugefügt hat.

Die beste Maßnahme für diese Fälle sowie für jeden Fall, in dem Inhalte nicht mehr mit dem Server synchron sein können, besteht darin, dass Seiten sich bei Bedarf selbst aktualisieren. Ein Server könnte beispielsweise die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einen [`WebSocket`](/de/docs/Web/API/WebSocket) verwenden. Die Seiten können sich dann entsprechend aktualisieren, einschließlich spekulativ geladener Seiten, die noch nicht aktiviert wurden.

Wenn Aktualisierungen nicht möglich sind, können Spekulationen mithilfe des Response-Headers {{httpheader("Clear-Site-Data")}} mit den Werten {{httpheader("Clear-Site-Data#prefetchCache", `prefetchCache`)}} oder {{httpheader("Clear-Site-Data#prerenderCache", `prerenderCache`)}} — oder beiden, je nach Bedarf — gelöscht werden.

Der Header kann bei jeder Same-Site-HTTP-Anfrage zurückgegeben werden, beispielsweise bei einem `/api/add-to-cart`-API-Aufruf.

## Verhalten des Sitzungsverlaufs für vorab gerenderte Dokumente

Das Aktivieren eines Dokuments, das gerade vorab gerendert wird oder vorab gerendert wurde, verhält sich aus Sicht des Endbenutzers wie jede herkömmliche Navigation. Das aktivierte Dokument wird im Tab angezeigt und an den Sitzungsverlauf angehängt; vorhandene Einträge im Vorwärtsverlauf werden entfernt. Navigationen, die _vor_ der Aktivierung innerhalb des Browsing-Kontexts für Prerendering stattfinden, wirken sich nicht auf den Sitzungsverlauf aus.

Aus Sicht von Entwicklern kann ein Dokument im Prerendering als Dokument mit einem **trivialen Sitzungsverlauf** betrachtet werden, in dem nur ein Eintrag — der aktuelle Eintrag — vorhanden ist. Alle Navigationen innerhalb des Prerendering-Kontexts werden effektiv ersetzt.

Während API-Funktionen, die auf dem Sitzungsverlauf arbeiten, beispielsweise [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation), innerhalb von Dokumenten im Prerendering aufgerufen werden können, arbeiten sie nur auf dem trivialen Sitzungsverlauf des Kontexts. Folglich nehmen Dokumente im Prerendering nicht am gemeinsamen Sitzungsverlauf ihrer verweisenden Seite teil. Beispielsweise können sie ihre Referrer-Seite nicht über [`History.back()`](/de/docs/Web/API/History/back) navigieren.

Dieses Design stellt sicher, dass Benutzer beim Verwenden der Zurück-Schaltfläche das erwartete Verhalten erhalten — sie gelangen also zum letzten Inhalt zurück, den sie gesehen haben. Sobald ein Dokument im Prerendering aktiviert wird, wird nur ein einziger Sitzungsverlaufseintrag an den gemeinsamen Sitzungsverlauf angehängt; alle vorherigen Navigationen innerhalb des Browsing-Kontexts für Prerendering werden ignoriert. Wenn Sie im gemeinsamen Sitzungsverlauf einen Schritt zurückgehen, beispielsweise durch Drücken der Zurück-Schaltfläche, gelangen Sie zur Referrer-Seite zurück.

## Während des Prerendering zurückgestellte oder eingeschränkte Plattformfunktionen

Da eine vorab gerenderte Seite in einem ausgeblendeten Zustand geöffnet wird, werden mehrere API-Funktionen, die potenziell aufdringliches Verhalten verursachen, in diesem Zustand nicht aktiviert, sondern bis zur Aktivierung der Seite **zurückgestellt**. Andere Webplattformfunktionen, die beim Prerendering problematisch sind, werden vollständig eingeschränkt. Dieser Abschnitt beschreibt, welche Funktionen zurückgestellt oder eingeschränkt werden.

> [!NOTE]
> In den wenigen Fällen, in denen das Zurückstellen und Einschränken nicht möglich ist, wird der Prerender abgebrochen.

### Zurückstellung asynchroner APIs

Zurückstellung bedeutet, dass die API-Funktion sofort ein ausstehendes Promise zurückgibt und dann bis zur Seitenaktivierung nichts tut. Nach der Aktivierung wird die Funktion normal ausgeführt und das Promise normal aufgelöst oder abgelehnt.

Die Ergebnisse der folgenden asynchronen Funktionen werden in vorab gerenderten Dokumenten bis zu deren Aktivierung zurückgestellt:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), Ereignis [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event), Ereignis [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
- [Geolocation API](/de/docs/Web/API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API: Die Wiedergabeposition wird nicht fortschreiten, während das enthaltende Dokument vorab gerendert wird.
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (sowie die ältere Version [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Notifications API](/de/docs/Web/API/Notifications_API): Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification), [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/Screen_Orientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/Screen_Orientation/unlock)
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Storage API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): [`AudioContext`](/de/docs/Web/API/AudioContext)s dürfen nicht starten, während das enthaltende Dokument vorab gerendert wird.
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

Die folgenden Funktionen schlagen in nicht aktivierten Dokumenten automatisch fehl oder führen keine Aktion aus.

APIs, die {{Glossary("transient_activation", "vorübergehende Aktivierung")}} oder {{Glossary("sticky_activation", "dauerhafte Aktivierung")}} erfordern:

- Bestätigungsdialoge, die durch das Ereignis [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) erzeugt werden
- Das Auslösen beliebiger Ereignisse in der [Clipboard API](/de/docs/Web/API/Clipboard_API).
- [File System API](/de/docs/Web/API/File_System_API): [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker), [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker), [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API): [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static)
- [Keyboard API](/de/docs/Web/API/Keyboard_API): [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) (erfordert Vollbild)
- [Payment Request API](/de/docs/Web/API/Payment_Request_API): [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
- [Presentation API](/de/docs/Web/API/Presentation_API): [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API): [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Web Share API](/de/docs/Web/API/Web_Share_API): [`Navigator.share()`](/de/docs/Web/API/Navigator/share)
- [`Window.open()`](/de/docs/Web/API/Window/open)

APIs, die erfordern, dass das enthaltende Dokument fokussiert ist:

- [Clipboard API](/de/docs/Web/API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)

APIs, die erfordern, dass [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) des enthaltenden Dokuments `"visible"` ist:

- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert, dass der Sichtbarkeitsstatus des enthaltenden Dokuments `"visible"` ist _oder_ eine {{Glossary("transient_activation", "vorübergehende Aktivierung")}} vorliegt)
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Weitere eingeschränkte Funktionen

- Download-Links, d.h. {{htmlelement("a")}}- und {{htmlelement("area")}}-Elemente mit dem Attribut `download`, verzögern ihre Downloads bis das Prerendering abgeschlossen ist.
- Keine Cross-Site-Navigationen: Jedes Dokument im Prerendering, das zu einer anderen Website navigiert, wird sofort verworfen, bevor eine Anfrage an diese andere Website gesendet wird.
- Eingeschränkte URLs: Dokumente im Prerendering können keine obersten URLs hosten, die nicht HTTP(S) verwenden. Das Einschließen der folgenden URL-Typen führt dazu, dass der Prerender sofort verworfen wird:
  - [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
  - [`data:`-URLs](/de/docs/Web/URI/Reference/Schemes/data)
  - [`blob:`-URLs](/de/docs/Web/URI/Reference/Schemes/blob)
  - `about:`-URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungsspeicher: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, jedoch ist das Verhalten sehr spezifisch, um Websites nicht zu beeinträchtigen, die erwarten, dass jeweils nur eine Seite auf den Sitzungsspeicher des Tabs zugreift. Eine vorab gerenderte Seite beginnt daher mit einer Kopie des Sitzungsspeicherzustands des Tabs zum Zeitpunkt ihrer Erstellung. Bei der Aktivierung wird die Speicherkopie der vorab gerenderten Seite verworfen und stattdessen der Hauptspeicherzustand des Tabs verwendet. Seiten, die Sitzungsspeicher verwenden, können anhand des Ereignisses [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) erkennen, wann dieser Speichertausch stattfindet.
- [`Window.print()`](/de/docs/Web/API/Window/print): Alle Aufrufe dieser Methode werden ignoriert.
- „Einfache Dialogmethoden“ sind wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) gibt sofort zurück, ohne einen Dialog anzuzeigen.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) gibt sofort `false` zurück, ohne einen Dialog anzuzeigen.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) gibt sofort eine leere Zeichenfolge (`""`) zurück, ohne einen Dialog anzuzeigen.
- Dedicated-/Shared-Worker-Skripte werden geladen, aber ihre Ausführung wird bis zur Aktivierung des vorab gerenderten Dokuments zurückgestellt.
- Das Laden von Cross-Origin-{{htmlelement("iframe")}}s wird während des Prerendering bis zur Aktivierung der Seite verzögert.

## Schnittstellen

Die Speculation Rules API definiert keine eigenen Schnittstellen.

### Erweiterungen anderer Schnittstellen

- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn sich das Dokument derzeit im Prozess des Prerendering befindet.
- Ereignis [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) {{experimental_inline}}
  - : Wird bei einem vorab gerenderten Dokument ausgelöst, wenn es aktiviert wird, d.h. wenn der Benutzer die Seite betrachtet.
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Beginn des Prerendering eines Dokuments und seiner Aktivierung darstellt.
- Wert `"navigational-prefetch"` von [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{experimental_inline}}
  - : Signalisiert, dass der Typ eines Performance-Eintrags ein Prefetch ist.

## HTTP-Header

- Wert `'inline-speculation-rules'` von {{httpheader("Content-Security-Policy")}} {{experimental_inline}}
  - : Wird verwendet, um die Nutzung von `<script type="speculationrules">` zur Definition von Speculation Rules für das abgerufene Dokument per Opt-in zu erlauben.
- Werte `'prefetchCache'` und `'prerenderCache'` von {{httpheader("Clear-Site-Data")}} {{experimental_inline}}
  - : Dienen zum Löschen von Spekulationen, beispielsweise wenn Zustandsänderungen die Spekulationen veralten lassen.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Stellt eine Liste von URLs bereit, die auf Textressourcen mit JSON-Definitionen von Speculation Rules verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Satz von Speculation Rules des Dokuments hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um per Opt-in verschiedene Lademodi mit höherem Risiko zu verwenden. Beispielsweise erfordert Cross-Origin-, Same-Site-Prerendering einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## HTML-Funktionen

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um im aktuellen Dokument einen Satz von Prefetch- und/oder Prerender-Speculation-Rules zu definieren, die zum Satz von Speculation Rules des Dokuments hinzugefügt werden.

## Beispiele

Codebeispiele finden Sie unter [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2025).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von Speculation Rules mit anderen ähnlichen Funktionen zur Leistungsverbesserung.
