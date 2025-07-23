---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 44373c3805ba65db7542af75b664dc6fdce2aec0
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Spekulationsregeln-API** wurde entwickelt, um die Leistung für zukünftige Navigationen zu verbessern. Sie zielt dabei auf Dokument-URLs ab und nicht auf spezifische Ressourcen-Dateien, weshalb sie eher für Multi-Page-Anwendungen (MPAs) anstatt für Single-Page-Anwendungen (SPAs) sinnvoll ist.

Die Spekulationsregeln-API bietet eine Alternative zum weitverbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)-Feature und ist so konzipiert, dass sie das nur in Chrome verfügbare, veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)-Feature ersetzt. Sie bietet viele Verbesserungen gegenüber diesen Technologien sowie eine ausdrucksstärkere, konfigurierbare Syntax, um festzulegen, welche Dokumente vorgeladen oder vorgerendert werden sollen.

> [!NOTE]
> Die Spekulationsregeln-API behandelt keine Subressourcen-Vorladen; hierfür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Nutzung

Spekulationsregeln können innerhalb von eingebetteten [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)-Elementen und externen Textdateien, die durch den {{httpheader("Speculation-Rules")}}-Antwortheader referenziert werden, festgelegt werden. Die Regeln werden als JSON-Struktur spezifiziert.

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

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen explizit in der {{httpheader("Content-Security-Policy")}}-Direktive [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) erlaubt werden, falls die Website dies einschließt. Dies erfolgt durch Hinzufügen einer der `'inline-speculation-rules'`-Quellen, einer Hash-Quelle oder Nonce-Quelle.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das Spekulationsregeln-JSON enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, muss jedoch mit einem `application/speculationrules+json`-MIME-Typ bereitgestellt werden.

> [!NOTE]
> Regeln können sowohl mithilfe eines eingebetteten Skripts als auch des HTTP-Headers gleichzeitig spezifiziert werden – alle auf ein Dokument angewendeten Regeln werden analysiert und der Spekulationsregeln-Liste des Dokuments hinzugefügt.

Sie spezifizieren ein unterschiedliches Array, um die Regeln für jeden spekulativen Ladevorgangstyp zu enthalten (zum Beispiel `"prerender"` oder `"prefetch"`). Jede Regel ist in einem Objekt enthalten, das beispielsweise eine Liste von abzurufenden Ressourcen sowie Optionen wie eine explizite {{httpheader("Referrer-Policy")}}-Einstellung für jede Regel angibt. Beachten Sie, dass vorgerenderte URLs auch vorgeladen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Nutzung von Prefetching

Das Einfügen von `prefetch`-Regeln innerhalb eines `<script type="speculationrules">`-Elements oder des `Speculation-Rules`-Headers veranlasst unterstützende Browser, den Antwortkörper der referenzierten Seiten herunterzuladen, jedoch keine der von der Seite referenzierten Subressourcen. Wenn zu einer vorgeladenen Seite navigiert wird, rendert sie viel schneller als wenn sie nicht vorgeladen worden wäre.

Die Ergebnisse werden in einem pro Dokument organisierten Arbeitsspeicher-Cache gespeichert. Alle zwischengespeicherten Vorladungen werden verworfen, wenn Sie die aktuelle Seite verlassen, abgesehen von einem vorgeladenen Dokument, zu dem Sie dann navigieren.

Dies bedeutet, dass, wenn Sie etwas vorladen, zu dem der Nutzer nicht navigiert, es im Allgemeinen eine Verschwendung von Ressourcen ist, obwohl das Ergebnis den HTTP-Cache füllen kann, wenn es die Header zulassen. Dennoch sind die anfänglichen Kosten eines Vorladens viel geringer als die anfänglichen Kosten eines Vorabladens, daher sollten Sie das Vorladen umfassend einsetzen, zum Beispiel alle wichtigen Seiten Ihrer Website, soweit sie sicher vorzuladen sind (siehe [Unsichere spekulative Ladevorgänge](#unsichere_spekulative_ladevorgänge) für mehr Details).

Gleiche-Site- und Cross-Site-Vorladen funktioniert, aber Cross-Site-Vorladen ist begrenzt (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen den beiden). Aus Datenschutzgründen funktionieren Cross-Site-Vorladen derzeit nur, wenn der Nutzer keine Cookies für die Zielseite gesetzt hat — wir wollen nicht, dass Websites die Benutzeraktivität über vorgeladene Seiten verfolgen können, die sie möglicherweise nie besuchen, basierend auf zuvor gesetzten Cookies.

> [!NOTE]
> In Zukunft wird ein Opt-in für Cross-Site-Vorladen über den {{httpheader("Supports-Loading-Mode")}}-Header bereitgestellt, aber dies war zum Zeitpunkt des Schreibens noch nicht implementiert (nur das Opt-in für [[prerendering](#nutzung_von_prerendering){interactive}`], same-site prerendering war verfügbar).

Für Browser, die dies unterstützen, sollte das Spekulationsregeln-Vorladen älteren Vorlade-Mechanismen bevorzugt werden, nämlich der Verwendung von [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"`-Option. Da wir wissen, dass das Spekulationsregeln-Vorladen für Navigationen und nicht für allgemeiniertes Ressourcenvorladen gedacht ist:

- Es kann für Cross-Site-Navigationen verwendet werden, während `<link rel="prefetch">` dies nicht kann.
- Es wird nicht von {{httpheader("Cache-Control")}}-Headern blockiert, während `<link rel="prefetch">` dies oft tut.

Zusätzlich:

- Spekulationsregel-Vorladen senkt automatisch die Priorität, wenn erforderlich (`fetch()` tut dies nicht).
- Es respektiert die Benutzereinstellungen. Beispielsweise erfolgt das Vorladen nicht, wenn das Gerät des Nutzers im Energiesparmodus oder Datensparmodus ist.
- Die vorgeladenen Ressourcen werden in einem pro-Dokument-Arbeitsspeicher-Cache gespeichert, im Gegensatz zum HTTP-Cache, was zu einem etwas schnelleren Vorladen führen kann.

### Nutzung von Prerendering

Das Einfügen von `prerender`-Regeln innerhalb eines `<script type="speculationrules">`-Elements oder des `Speculation-Rules`-Headers veranlasst unterstützende Browser, den Inhalt in einem unsichtbaren Tab zu fetchen, zu rendern und zu laden, der in einem pro-Dokument-Arbeitsspeicher-Cache gespeichert wird. Dies schließt das Laden aller Subressourcen, das Ausführen aller JavaScripts und sogar das Laden von Subressourcen und das Durchführen von von JavaScript gestarteten Datenabfragen ein. Alle zwischengespeicherten Vorabrenderungen und deren Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich einem vorabgerenderten Dokument, zu dem Sie dann navigieren.

Zukünftige Navigationen zu einer vorabgerenderten Seite werden nahezu augenblicklich sein. Der Browser aktiviert den unsichtbaren Tab anstatt den gewöhnlichen Navigationsprozess durchzuführen, indem er die alte Vordergrundseite durch die vorabgerenderte Seite ersetzt. Wenn eine Seite aktiviert wird, bevor sie vollständig vorabgerendert ist, wird sie im aktuellen Zustand aktiviert und lädt dann weiter, was bedeutet, dass Sie trotzdem eine signifikante Leistungsverbesserung feststellen können.

Prerendering verbraucht Speicher und Netzwerkbandbreite. Wenn Sie etwas vorabrendern, zu dem der Benutzer nicht navigiert, sind diese Ressourcen verschwendet (obwohl das Ergebnis den HTTP-Cache füllen kann, wenn es die Header zulassen, was später nützlich sein kann). Die anfänglichen Kosten eines Prerendering sind viel größer als die eines Vorladens, und andere Bedingungen könnten den Inhalt ebenfalls unsicher zum Vorabrendern machen (siehe [Unsichere spekulative Ladevorgänge](#unsichere_spekulative_ladevorgänge) für mehr Details). Daher werden Sie ermutigt, das Prerendering sparsamer einzusetzen, wobei Sie sorgfältig Fälle berücksichtigen sollten, in denen es sehr wahrscheinlich ist, dass die Seite navigiert wird, und Sie denken, der Benutzererfahrungsnutzen sei die zusätzlichen Kosten wert.

> [!NOTE]
> Um das Potenzial der Ressourcenverschwendung ins Verhältnis zu setzen: Ein Prerender verbraucht ungefähr so viele Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden beim Prerendering automatisch zurückgestellt oder bis zur Aktivierung verzögert. Siehe [Plattformfunktionen, die während des Prerenderings zurückgestellt oder eingeschränkt sind](#plattformfunktionen,_die_während_des_prerenderings_zurückgestellt_oder_eingeschränkt_werden) für mehr Details.

Prerendering ist standardmäßig auf gleichherzige Dokumente beschränkt. Cross-Origin, same-site prerendering ist möglich – es erfordert, dass das Navigationstarget sich mit dem {{httpheader("Supports-Loading-Mode")}}-Header mit dem Wert `credentialed-prerender` anmeldet. Cross-Site-Prerendering ist derzeit nicht möglich.

Für Browser, die es unterstützen, sollte das Spekulationsregeln-Prerendering älteren Prerender-Methoden vorgezogen werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender):

- `<link rel="prerender">` ist Chrome-spezifisch und wurde nie standardisiert, und das Chrome-Entwicklungsteam ist im Prozess, es zu beenden.
- Es lädt Subressourcen, die über JavaScript geladen werden, während `<link rel="prerender">` dies nicht tut.
- Es wird nicht durch {{httpheader("Cache-Control")}}-Einstellungen blockiert, während `<link rel="prerender">` dies oft tut.
- Spekulationsregel-Prerender sollte als Hinweis und progressive Verbesserung behandelt werden. Anders als `<link rel="prerender">`, ist es ein spekulativer Hinweis und der Browser kann sich entscheiden, dem Hinweis nicht nachzukommen, basierend auf Benutzereinstellungen, aktuellem Speicherverbrauch oder anderen Heuristiken.

### Erkennung von Spekulationsregeln-API-Funktionen

Sie können überprüfen, ob die Spekulationsregeln-API unterstützt wird, indem Sie den folgenden Code verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Zum Beispiel könnten Sie Spekulationsregeln zum Vorladen in unterstützende Browser einfügen, aber eine ältere Technologie wie `<link rel="prefetch">` in anderen verwenden:

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

## Erkennung von vorgeladenen und vorabgerenderten Seiten

Dieser Abschnitt untersucht verschiedene Möglichkeiten, um festzustellen, ob eine angeforderte Seite vorgeladen oder vorabgerendert wurde.

### Serverseitige Erkennung

Vorgeladene und vorabgerenderte Seitenanfragen werden mit dem {{httpheader("Sec-Purpose")}}-Anforderungsheader gesendet:

Für Vorladen:

```http
Sec-Purpose: prefetch
```

Für Prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können auf der Basis dieses Headers antworten, um beispielsweise spekulative Ladevorgänge zu protokollieren, unterschiedlichen Inhalt zurückzugeben oder sogar das spekulative Laden zu verhindern. Wenn ein Nicht-Erfolgs-Antwortcode zurückgegeben wird (jeder HTTP-Status, der nach Umleitungen nicht im Bereich von 200-299 liegt), wird die Seite nicht vorgeladen oder vorabgerendert. Zusätzlich verhindern auch die Statuscodes 204 und 205 das Prerendering (verhindern jedoch nicht das Vorladen).

Die Verwendung eines Nicht-Erfolgscodes (zum Beispiel ein 503) ist der einfachste Weg, spekulatives Laden serverseitig zu verhindern, obwohl es normalerweise besser ist, das Vorladen/Prerendering zuzulassen und JavaScript zu verwenden, um alle Aktionen zu verzögern, die nur dann stattfinden sollten, wenn die Seite tatsächlich angezeigt wird.

### JavaScript-Vorladen-Erkennung

Wenn eine Seite vorgeladen wird, wird ihr [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType)-Eintrag einen Wert von `"navigational-prefetch"` zurückgeben. Sie könnten folgendes verwenden, um eine Funktion auszuführen, wenn ein Leistungs-Eintrag des Typs `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist nützlich, wenn es darum geht, die Leistung zu messen, oder wenn Sie Aktionen verzögern möchten, die Probleme verursachen könnten, wenn sie während des Vorladens auftreten (siehe [Unsichere Vorladen](#unsicheres_vorladen)).

### JavaScript-Prerender-Erkennung

Um eine Aktivität auszuführen, während die Seite vorabgerendert wird, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft überprüfen. Sie könnten zum Beispiel einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorabgerendertes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Zeit zwischen dem Start des Prerendering und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann nach Seiten suchen, die sowohl vorgeladen als auch vorabgerendert sind:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vorabgerenderte Seite durch das Anzeigen des Nutzers aktiviert wird, wird das Ereignis [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) ausgelöst. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die zuvor standardmäßig beim Seitenaufruf gestartet wurden, die Sie jedoch verzögern möchten, bis die Seite vom Benutzer angezeigt wird. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Prerendering auf einer vorabgerenderten Seite abgeschlossen ist, oder führt sie sofort auf einer nicht vorabgerenderten Seite aus:

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

## Unsichere spekulative Ladevorgänge

Dieser Abschnitt behandelt Bedingungen, auf die Sie achten sollten, unter denen Vorladen und/oder Prerendering **unsicher** sind. Das bedeutet, dass das Vorladen/Prerendern von Seiten mit solchen Bedingungen möglicherweise Anpassungen in Ihrem Code erfordert oder ganz vermieden werden muss.

### Unsicheres Vorladen

Wie bereits erwähnt, empfehlen wir, das Vorladen umfassend zu übernehmen, da das Risiko-Ertrags-Verhältnis relativ gering ist — das Potenzial für Ressourcenverschwendung ist minimal, und die Leistungssteigerungen können signifikant sein. Sie müssen jedoch sicherstellen, dass vorgeladene Seiten keine Probleme im Ablauf Ihrer Anwendung verursachen.

Wenn ein Vorladen durchgeführt wird, lädt der Browser den Antwortkörper der referenzierten Seite über eine einzige GET-Anfrage herunter, zu der der Nutzer möglicherweise in Zukunft navigieren kann. Probleme können spezifisch auftreten, wenn die URL der Anfrage einen serverinitiierten Nebeneffekt auslöst, den Sie nicht wünschen, bis zur Navigation zur URL.

Zum Beispiel:

- Logout-URLs.
- Sprachwechsel-URLs.
- "Zum Warenkorb hinzufügen"-URLs.
- Anmeldeseiten, bei denen der Server eine SMS sendet, beispielsweise als Einmalpasswort (OTP).
- URLs, die die Nutzungszahlen eines Benutzers erhöhen, z.B. das verbrauchen des monatlichen Artikel-Volumens oder das Starten eines Timers für monatliche Minuten.
- URLs, die serverseitiges Conversion-Tracking von Anzeigen initiieren.

Solche Probleme können auf dem Server gemindert werden, indem Sie bei eingehenden Anfragen auf den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Header achten und dann spezifischen Code ausführen, um problematische Funktionalitäten zu verzögern. Wenn die Seite später tatsächlich aufgerufen wird, können bei Bedarf die verzögerten Funktionalitäten per JavaScript initiiert werden.

> [!NOTE]
> Weitere Details zum Erkennungscode finden Sie im Abschnitt [Erkennung von vorgeladenen und vorabgerenderten Seiten](#erkennung_von_vorgeladenen_und_vorabgerenderten_seiten).

Es ist auch potenziell riskant, ein Dokument vorzusehen, dessen servergerenderter Inhalt sich aufgrund von Benutzeraktionen auf der aktuellen Seite ändern wird. Dies könnte beispielsweise Blitzverkaufsseiten oder Kinositzpläne umfassen. Testen Sie solche Fälle sorgfältig und mildern Sie solche Probleme ab, indem Sie Inhalte aktualisieren, sobald die Seite geladen ist. Siehe [Server-rendered varying state](#server-rendered_varying_state) für mehr Details zu diesen Fällen.

> [!NOTE]
> Browser werden vorgeladene Seiten für kurze Zeit zwischenspeichern (Chrome speichert sie beispielsweise für 5 Minuten), bevor sie verworfen werden. Daher könnten Ihre Benutzer Inhalte sehen, die bis zu 5 Minuten alt sind.

Veraltete Vorladen können mit dem {{httpheader("Clear-Site-Data#prefetchCache", "prefetchCache")}}-Wert des {{httpheader("Clear-Site-Data")}}-Antwortheaders gelöscht werden. Dies könnte beispielsweise verwendet werden, wenn sich durch Statusänderungen herausstellt, dass die zwischengespeicherten Daten ungültig sind, wie beim Abmelden von einer Seite.

Vorladen ist sicher, wenn alle Effekte des Ladens der Seite durch die Ausführung von JavaScript resultieren, da das JavaScript nicht bis zur Aktivierung ausgeführt wird.

Ein letzter Tipp ist es, URLs zu auditieren, die in Ihrer {{Glossary("robots.txt", "robots.txt")}}-Datei als nicht erlaubt gelistet sind — normalerweise verweisen diese URLs auf Seiten, die nur von authentifizierten Benutzern zugegriffen werden können und daher nicht in Suchmaschinenergebnissen enthalten sein sollten. Viele davon werden in Ordnung sein, aber es könnte ein guter Ort sein, um URLs zu finden, die unsicher für das Vorladen sind (d.h. sie zeigen die oben beschriebenen Bedingungen).

### Unsicheres Prerendering

Prerendering ist riskanter als Vorladen und sollte deshalb sparsamer angewendet werden, in Fällen, in denen es sich lohnt. Es gibt mehr unsichere Bedingungen, auf die man beim Prerendering achten muss, sodass die Belohnung höher ist, aber auch das Risiko.

Wenn ein Prerender durchgeführt wird, führt der Browser einen GET der URL durch und rendert und lädt den Inhalt in einem unsichtbaren Tab. Dies schließt das Ausführen des JavaScript des Inhalts und das Laden aller Subressourcen ein, einschließlich derer, die durch JavaScript abgerufen werden. Inhalte können potenziell unsicher zum Prerendering sein, wenn eine der folgenden Bedingungen vorliegt:

- Die URL ist [unsicher zum Vorladen](#unsicheres_vorladen). Lesen Sie den vorherigen Abschnitt zuerst, wenn Sie dies noch nicht getan haben, und verstehen Sie, dass diese Bedingungen auch gleichermaßen für unsicheres Prerendering gelten.
- Das JavaScript der Seite verändert den clientseitigen Speicher (zum Beispiel [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) beim Laden auf eine Weise, die verwirrende Effekte in anderen, nicht vorabgerenderten Seiten, die der Nutzer gerade betrachtet, verursachen könnte.
- Die Seite führt JavaScript aus oder lädt Bilder, die Effekte wie das Senden von Analysen, das Aufzeichnen von Anzeigen-Impressionen oder das anderweitige Verändern des Anwendungsstatus verursachen, als ob der Nutzer bereits interagiert hätte. Auch dies kann den Ablauf der Anwendung beeinflussen oder fehlerhafte Leistungs- oder Nutzungsberichte verursachen. Siehe [Server-rendered varying state](#server-rendered_varying_state) für mehr Details zu solchen Anwendungsfällen.

Um solche Probleme zu entschärfen, können Sie folgende Techniken verwenden:

- Achten Sie bei eingehenden Anfragen auf den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Header auf dem Server und führen Sie spezifischen Code aus, um problematische Funktionen zu verzögern.
- Verwenden Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis, um zu erkennen, wann die vorabgerenderte Seite tatsächlich aktiviert wird, und führen Sie entsprechenden Code aus. Dies ist in zwei Fällen nützlich:
  - Aufschieben von Code, der Probleme verursachen könnte, wenn er ausgeführt wird, bevor die Seite angezeigt wird. Zum Beispiel möchten Sie möglicherweise warten, bis nach der Aktivierung des clientseitigen Speichers ein Update vorgenommen oder mit JavaScript der serverseitige Status verändert wird. So können Situationen vermieden werden, in denen die Benutzeroberfläche und der Anwendungsstatus nicht synchron sind, beispielsweise wenn ein Einkaufswagen leer ist, obwohl der Nutzer Artikel hinzugefügt hat.
  - Wenn dies nicht möglich ist, können Sie den Code nach der Aktivierung erneut ausführen, um die App wieder auf den neuesten Stand zu bringen. Beispielsweise könnte eine hochdynamische Flash-Sale-Seite auf Echtzeit-Updates durch eine Drittanbieterbibliothek angewiesen sein. Wenn Sie die Updates nicht verzögern können, können Sie immer frische Updates erhalten, sobald der Nutzer die Seite anzeigt. Vorabgerenderte Seiten können in Echtzeit mit der [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einem anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einem [`WebSocket`](/de/docs/Web/API/WebSocket) aktualisiert werden. Dies garantiert, dass der Nutzer nach der Prerendering-Aktivierung aktuelle Inhalte sieht.
- Verwalten Sie Ihre Drittanbieter-Analysetools sorgfältig — verwenden Sie nach Möglichkeit Skripte, die prerendering-bewusst sind (z.B. verwenden Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft, um bei prerendering-Seiten das Ausführen zu verschieben), wie Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden von Cross-Origin {{htmlelement("iframe")}}-Inhalten während des Prerendering bis zur Aktivierung verzögert wird. Dies dient dazu, Brüche zu vermeiden, die durch das Laden von Cross-Origin-Seiten verursacht werden, die sich des Prerendering nicht bewusst sind, und um Komplikationen zu vermeiden, welche Anmeldeinformationen und Speicher diesen Frames zugänglich gemacht werden sollen. Es bedeutet, dass Nutzer möglicherweise zunächst leere Frames sehen, aber es bedeutet auch, dass die meisten Drittanbieter-Widgets wie Ad Tech während des Prerendering sicher verwendet werden können.
  - Für Drittanbieter-Skripte, die nicht prerendering-bewusst sind, vermeiden Sie das Laden, bis nach der Aktivierung, indem Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis verwenden, wie bereits erwähnt.

### Server-rendered varying state

Es gibt zwei Haupttypen von servergerenderten Zuständen, die besorgniserregend sind: **veralteter Zustand** und **benutzerspezifischer Zustand**. Beide können sowohl unsicheres Vorladen als auch Prerendering verursachen.

- Veralteter Zustand: Nehmen Sie das Beispiel einer servergerenderten Liste von Blogkommentaren, die zwischen dem Prerendering des Blogbeitrags und dessen Ansicht veraltet sein könnte. Dies könnte besonders problematisch sein, wenn die aktuelle Seite ein Admin-Panel ist, auf dem der Nutzer Spam-Kommentare löscht. Wenn der Nutzer dann zum Blogbeitrag navigiert, könnte er verwirrt sein, warum er die Spam-Kommentare sieht, die er gerade gelöscht hat.
- Benutzerspezifischer Zustand: Nehmen Sie das Beispiel, den Anmeldestatus über ein Cookie zu verfolgen. Probleme können wie folgt auftreten:
  - Der Nutzer besucht `https://site.example/a` in Tab 1 und `https://site.example/b` in Tab 2, während er abgemeldet ist.
  - `https://site.example/b` rendert `https://site.example/c` vor. Es wird im abgemeldeten Zustand vorabgerendert.
  - Der Nutzer meldet sich auf `https://site.example` in Tab 1 an.
  - Der Nutzer wechselt zu Tab 2 und klickt auf den Link zu `https://site.example/c`, der die vorabgerenderte Seite aktiviert.
  - Tab 2 zeigt eine abgemeldete Ansicht von `https://site.example/c`, was den Nutzer verwirrt, da er dachte, er sei eingeloggt.

Benutzerspezifische Zustände können auch bei anderen Benutzereinstellungen auftreten, beispielsweise Spracheinstellungen, Dunkelmodus-Präferenzen oder wenn Artikel in einen Warenkorb gelegt werden. Sie können auch auftreten, wenn nur ein einzelner Tab beteiligt ist:

- Angenommen, der Nutzer besucht `https://site.example/product`.
- `https://site.example.com/product` rendert `https://site.example.com/cart` vor. Es wird mit 0 Artikeln im Warenkorb vorgerendert.
- Der Nutzer klickt auf die Schaltfläche "In den Warenkorb", die eine Fetch-Anfrage zum Hinzufügen des Artikels zum Warenkorb des Benutzers initiiert (ohne Seitenneuaufladung).
- Der Nutzer klickt auf den Link zu `https://site.example.com/cart`, der die vorabgerenderte Seite aktiviert.
- Der Nutzer sieht einen leeren Warenkorb, obwohl er gerade etwas hinzugefügt hat.

Die beste Lösung für solche Fälle, und in der Tat jedes Mal, wenn Inhalte mit dem Server asynchronisiert werden können, ist es, dass sich Seiten bei Bedarf selbst aktualisieren. Beispielsweise könnte ein Server die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einen [`WebSocket`](/de/docs/Web/API/WebSocket) verwenden. Seiten können sich dann entsprechend aktualisieren, eingeschlossen spekulativ geladene Seiten, die noch nicht aktiviert wurden.

Falls Aktualisierungen nicht möglich sind, können Spekulationen über den {{httpheader("Clear-Site-Data")}}-Antwortheader mit den {{httpheader("Clear-Site-Data#prefetchCache", `prefetchCache`)}} oder {{httpheader("Clear-Site-Data#prerenderCache", `prerenderCache`)}}(oder beide) Werte als angemessen gelöscht werden.

Der Header kann bei einer beliebigen gleichseitigen HTTP-Anfrage (wie z.B. einem `/api/add-to-cart` API-Aufruf) zurückgegeben werden.

## Sitzungs-Verhalten bei vorabgerenderten Dokumenten

Die Aktivierung eines prerendering/prerendered Dokuments verhält sich aus Endbenutzersicht wie jede herkömmliche Navigation. Das aktivierte Dokument wird im Tab angezeigt und in die Sitzungsgeschichte eingefügt, und alle existierenden Vorverlaufseinträge werden gestutzt. Alle Navigationen, die innerhalb des Prerendering-Browsing-Kontextes _vor_ der Aktivierung stattfinden, beeinflussen die Sitzungsgeschichte nicht.

Aus Entwicklersicht kann ein Prerendering-Dokument als ein Dokument mit einer **trivialen Sitzungsgeschichte** betrachtet werden, in der nur ein Eintrag — der aktuelle Eintrag — existiert. Alle Navigationen innerhalb des Prerendering-Kontexts werden effektiv ersetzt.

Während API-Funktionen, die auf die Sitzungsgeschichte zugreifen (beispielsweise [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation)) innerhalb von Prerendering-Dokumenten aufgerufen werden können, wirken sie sich nur auf die triviale Sitzungsgeschichte des Kontexts aus. Folglich nehmen Prerendering-Dokumente nicht an der gemeinsamen Sitzungsgeschichte ihrer Referenzseite teil, und sie können beispielsweise ihre Ursprungsseite nicht mittels [`History.back()`](/de/docs/Web/API/History/back) navigieren.

Dieses Design sorgt dafür, dass Nutzer die erwartete Erfahrung erhalten, wenn sie die Zurück-Taste verwenden — d.h. dass sie zur letzten gesehenen Sache zurückkehren. Sobald ein Prerendering-Dokument aktiviert ist, wird nur ein einzelner Sitzungsgeschichten-Eintrag in die gemeinsame Sitzungsgeschichte eingefügt, wobei alle vorherigen Navigationen ignoriert werden, die innerhalb des Prerendering-Browsing-Kontexts stattgefunden haben. Ein Schritt zurück in der gemeinsamen Sitzungsgeschichte — z.B. indem man die Zurück-Taste drückt — bringt den Nutzer zurück zur Referenzseite.

## Plattformfunktionen, die während des Prerenderings zurückgestellt oder eingeschränkt werden

Da eine vorabgerenderte Seite in einem verborgenen Zustand geöffnet wird, werden mehrere API-Funktionen, die potenziell störendes Verhalten verursachen könnten, in diesem Zustand nicht aktiviert und stattdessen **zurückgestellt**, bis die Seite aktiviert wird. Andere Funktionen der Web-Plattform, die beim Prerendering problematisch sind, werden insgesamt eingeschränkt. Dieser Abschnitt bietet Details darüber, welche Funktionen zurückgestellt oder eingeschränkt werden.

> [!NOTE]
> In der kleinen Anzahl von Fällen, in denen ein Zurückstellen und Einschränken nicht möglich ist, wird das Prerender abgebrochen.

### Asynchrone API-Rückstellung

Das Zurückstellen bedeutet, dass die API-Funktion sofort ein ausstehendes Versprechen zurückgibt und dann nichts tut, bis die Seitennutzung aktiviert wird. Nach der Aktivierung läuft die Funktion normal und das Versprechen wird wie gewohnt erfüllt oder abgelehnt.

Die folgenden asynchronen Funktionen werden in vorabgerenderten Dokumenten bis zur Aktivierung zurückgestellt:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) event, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) event
- [Geolocation API](/de/docs/Web/API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API: Die Wiedergabeposition wird nicht fortgesetzt, während das beinhaltende Dokument vorabgerendert wird
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (und die Legacy-Version [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Notifications API](/de/docs/Web/API/Notifications_API): [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor, [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Storage API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): [`AudioContext`](/de/docs/Web/API/AudioContext)s dürfen nicht starten, solange das beinhaltende Dokument vorabgerendert wird
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

Die folgenden Funktionen werden automatisch fehlschlagen oder keinen Effekt in nicht aktivierten Dokumenten haben.

APIs, die eine {{Glossary("transient_activation", "transiente Aktivierung")}} oder {{Glossary("sticky_activation", "sticky Aktivierung")}} erfordern:

- Bestätigungsdialoge, die durch das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignis erzeugt werden
- Das Auslösen von Ereignissen im [Clipboard API](/de/docs/Web/API/Clipboard_API).
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

APIs, die erfordern, dass das beinhaltende Dokument fokussiert ist:

- [Clipboard API](/de/docs/Web/API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)

APIs, die erfordern, dass der [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) des beinhaltenden Dokuments `"visible"` ist:

- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert, dass der Sichtbarkeitsstatus des beinhaltenden Dokuments `"visible"` ist, _oder_ {{Glossary("transient_activation", "transiente Aktivierung")}})
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Andere eingeschränkte Funktionen

- Download-Links, d.h. {{htmlelement("a")}} und {{htmlelement("area")}}-Elemente mit dem `download`-Attribut, haben ihre Downloads verzögert, bis das Prerendering abgeschlossen ist.
- Keine Cross-Site-Navigationen: Jedes haha-Dokument, das zu einer anderen Site navigiert, wird sofort verworfen, bevor eine Anfrage an die andere Site gesendet wird.
- Eingeschränkte URLs: haha-Dokumente können keine nicht-HTTP(S)-Top-Level-URLs hosten. Die Einbindung der folgenden URL-Typen führt dazu, dass die haha-Dokumentation sofort verworfen wird:
  - [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
  - [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data)
  - [`blob:` URLs](/de/docs/Web/URI/Reference/Schemes/blob)
  - `about:` URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungspeicherung: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, aber das Verhalten ist sehr spezifisch, um Seiten zu vermeiden, die erwarten, dass nur eine Seite zur gleichen Zeit auf den Sitzungspeicher des Tabs zugreift. Eine vorabgerenderte Seite beginnt daher mit einem Klon des Sitzungspeicherstatus des Tabs, wenn sie erstellt wurde. Bei Aktivierung wird der Speicherkolb der vorabgerenderten Seite verworfen und der Hauptspeicherstatus des Tabs stattdessen verwendet. Seiten, die Sitzungspeicherung verwenden, können das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis verwenden, um zu erkennen, wann dieses Speicher-Swapping erfolgt.
- [`Window.print()`](/de/docs/Web/API/Window/print): Alle Aufrufe dieser Methode werden ignoriert.
- "Einfache Dialogmethoden" sind wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) gibt sofort zurück, ohne einen Dialog anzuzeigen.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) gibt sofort `false` zurück, ohne einen Dialog anzuzeigen.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) gibt sofort einen leeren String (`""`) zurück, ohne einen Dialog anzuzeigen.
- Dedizierte/geteilte Arbeiterskripte sind geladen, aber ihre Ausführung wird bis zur Aktivierung des vorabgerenderten Dokuments zurückgestellt.
- Cross-Origin {{htmlelement("iframe")}}-Laden wird während des Prerenderings bis nach der Aktivierung der Seite verzögert.

## Schnittstellen

Die Spekulationsregeln-API definiert keine eigenen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument derzeit im Prozess des Prerenderings ist.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis {{experimental_inline}}
  - : Wird bei einem vorabgerenderten Dokument ausgelöst, wenn es aktiviert wird (d.h. wenn der Nutzer die Seite anzeigt).
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Start des Prerenderings eines Dokuments und dessen Aktivierung darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) `"navigational-prefetch"` Wert {{experimental_inline}}
  - : Signalisiert, dass der Typ eines Leistungs-Eintrags ein Vorladen ist.

## HTTP-Header

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'` Wert {{experimental_inline}}
  - : Wird verwendet, um die Nutzung von `<script type="speculationrules">` zu erlauben, um Spekulationsregeln auf dem abgerufenen Dokument festzulegen.
- {{httpheader("Clear-Site-Data")}} `'prefetchCache'` und `'prerenderCache'` Werte {{experimental_inline}}
  - : Verwendung zum Löschen von Spekulationen. Beispielsweise wenn sich der Status ändert und die Spekulationen nicht mehr gültig sind.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die Spekulationsregel-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregelsatz des Dokuments hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationstarget gesetzt, um die Nutzung verschiedener höher riskanter Lademodi zu opt-in. So erfordert zum Beispiel das Cross-Origin, same-site Prerendering einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## HTML-Funktionen

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um eine Reihe von Vorladungs- und/oder Prerender-Spekulationsregeln innerhalb des aktuellen Dokuments zu definieren, die dem Spekulationsregelsatz des Dokuments hinzugefügt werden.

## Beispiele

Für Code-Beispiele siehe [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2025).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von Spekulationsregeln und anderen ähnlichen Leistungsverbesserungsfunktionen.
