---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{DefaultAPISidebar("Speculation Rules API")}}

Die **Speculation Rules API** soll die Leistung bei künftigen Navigationen verbessern. Sie bezieht sich auf Dokument-URLs statt auf einzelne Ressourcendateien und eignet sich daher für Multi-Page Applications (MPAs) statt für Single-Page Applications (SPAs).

Die Speculation Rules API bietet eine Alternative zur weithin verfügbaren Funktion [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und soll die veraltete, nur in Chrome verfügbare Funktion [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) ablösen. Gegenüber diesen Technologien bietet sie zahlreiche Verbesserungen sowie eine ausdrucksstärkere, konfigurierbare Syntax, mit der Sie festlegen können, welche Dokumente vorab abgerufen oder vorgerendert werden sollen.

> [!NOTE]
> Die Speculation Rules API ruft keine Unterressourcen vorab ab. Verwenden Sie dafür `<link rel="prefetch">`.

## Konzepte und Verwendung

Spekulationsregeln können in eingebetteten [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)-Elementen und in externen Textdateien angegeben werden, auf die der Antwort-Header {{httpheader("Speculation-Rules")}} verweist. Die Regeln werden als JSON-Struktur angegeben.

Ein Beispiel mit einem Script:

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

Spekulationsregeln in einem `<script>`-Element müssen in der [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Direktive von {{httpheader("Content-Security-Policy")}} ausdrücklich zugelassen werden, sofern die Website diese Direktive verwendet. Fügen Sie dazu die Quelle `'inline-speculation-rules'`, eine Hash-Quelle oder eine Nonce-Quelle hinzu.

Ein Beispiel mit einem HTTP-Header:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource mit dem JSON für die Spekulationsregeln kann einen beliebigen gültigen Namen und eine beliebige gültige Dateiendung haben. Sie muss jedoch mit dem MIME-Typ `application/speculationrules+json` bereitgestellt werden.

> [!NOTE]
> Regeln können gleichzeitig über ein eingebettetes Script und den HTTP-Header angegeben werden. Alle auf ein Dokument angewendeten Regeln werden geparst und der Spekulationsregelliste des Dokuments hinzugefügt.

Für jede Art des spekulativen Ladens, beispielsweise `"prerender"` oder `"prefetch"`, geben Sie ein eigenes Array mit Regeln an. Jede Regel ist ein Objekt, das beispielsweise eine Liste abzurufender Ressourcen und Optionen wie eine explizite {{httpheader("Referrer-Policy")}}-Einstellung enthält. Beachten Sie, dass vorgerenderte URLs auch vorab abgerufen werden.

Eine vollständige Erläuterung der verfügbaren Syntax finden Sie unter [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules).

### Vorababruf verwenden

Wenn Sie `prefetch`-Regeln in einem `<script type="speculationrules">`-Element oder einem `Speculation-Rules`-Header angeben, laden unterstützende Browser den Antworttext der referenzierten Seiten herunter, nicht jedoch die Unterressourcen, auf die diese Seiten verweisen. Wird später zu einer vorab abgerufenen Seite navigiert, wird sie wesentlich schneller dargestellt, als wenn sie nicht vorab abgerufen worden wäre.

Die Ergebnisse werden in einem dokumentbezogenen In-Memory-Cache gespeichert. Wenn Sie die aktuelle Seite verlassen, werden alle zwischengespeicherten Vorababrufe verworfen – mit Ausnahme eines vorab abgerufenen Dokuments, zu dem Sie anschließend navigieren.

Wenn Sie eine Seite vorab abrufen, die der Benutzer nicht besucht, werden daher in der Regel Ressourcen verschwendet. Das Ergebnis kann allerdings den HTTP-Cache füllen, sofern die Header dies zulassen. Dennoch ist der anfängliche Aufwand eines Vorababrufs deutlich geringer als der eines Vorrenderns. Deshalb empfiehlt es sich, Vorababrufe breit einzusetzen, beispielsweise für alle wichtigen Seiten Ihrer Website – vorausgesetzt, sie können gefahrlos vorab abgerufen werden. Weitere Informationen finden Sie unter [Unsichere Bedingungen für spekulatives Laden](#unsichere_bedingungen_für_spekulatives_laden).

Vorababrufe innerhalb derselben Website und websiteübergreifende Vorababrufe funktionieren, letztere sind jedoch eingeschränkt. Eine Erläuterung des Unterschieds finden Sie unter [„same-site“ und „cross-site“](https://web.dev/articles/same-site-same-origin#same-site-cross-site). Aus Datenschutzgründen funktionieren websiteübergreifende Vorababrufe derzeit nur, wenn für die Zielwebsite keine Cookies beim Benutzer gesetzt sind. Websites sollen Benutzeraktivitäten nicht anhand zuvor gesetzter Cookies über vorab abgerufene Seiten verfolgen können, die der Benutzer möglicherweise nie besucht.

> [!NOTE]
> Künftig wird der Header {{httpheader("Supports-Loading-Mode")}} eine ausdrückliche Zustimmung zu websiteübergreifenden Vorababrufen ermöglichen. Zum Zeitpunkt der Erstellung dieses Artikels war dies jedoch noch nicht implementiert. Verfügbar war lediglich die Zustimmung zum [Vorrendern](#vorrendern_verwenden) zwischen verschiedenen Origins innerhalb derselben Website.

In Browsern, die es unterstützen, sollte der Vorababruf mittels Spekulationsregeln älteren Verfahren vorgezogen werden, insbesondere [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit der Option `priority: "low"`. Da der Vorababruf mittels Spekulationsregeln für Navigationen und nicht für den allgemeinen Vorababruf von Ressourcen bestimmt ist, kann er für websiteübergreifende Navigationen verwendet werden. Mit `<link rel="prefetch">` ist das nicht möglich.

Darüber hinaus hat der Vorababruf mittels Spekulationsregeln folgende Eigenschaften:

- Er senkt die Priorität bei Bedarf automatisch (`fetch()` tut dies nicht).
- Er berücksichtigt die Einstellungen des Benutzers. Beispielsweise findet kein Vorababruf statt, wenn sich das Gerät im Energiespar- oder Datensparmodus befindet.
- Er speichert vorab abgerufene Ressourcen statt im HTTP-Cache in einem dokumentbezogenen In-Memory-Cache, was den Zugriff darauf etwas beschleunigen kann.

### Vorrendern verwenden

Wenn Sie `prerender`-Regeln in einem `<script type="speculationrules">`-Element oder einem `Speculation-Rules`-Header angeben, rufen unterstützende Browser die Inhalte ab, rendern sie und laden sie in einen unsichtbaren Tab, der in einem dokumentbezogenen In-Memory-Cache gespeichert wird. Dazu gehören das Laden aller Unterressourcen, die Ausführung des gesamten JavaScript-Codes sowie das Laden von Unterressourcen und das Abrufen von Daten, die durch JavaScript ausgelöst werden. Wenn Sie die aktuelle Seite verlassen, werden alle zwischengespeicherten Vorrenderungen und ihre Unterressourcen verworfen – mit Ausnahme eines vorgerenderten Dokuments, zu dem Sie anschließend navigieren.

Eine spätere Navigation zu einer vorgerenderten Seite erfolgt nahezu sofort. Statt den üblichen Navigationsvorgang auszuführen, aktiviert der Browser den unsichtbaren Tab und ersetzt die bisherige Seite im Vordergrund durch die vorgerenderte Seite. Wird eine Seite aktiviert, bevor sie vollständig vorgerendert ist, wird sie in ihrem aktuellen Zustand aktiviert und anschließend weitergeladen. Auch dann ist eine deutliche Leistungsverbesserung zu erwarten.

Vorrendern benötigt Arbeitsspeicher und Netzwerkbandbreite. Wenn Sie eine Seite vorrendern, die der Benutzer nicht besucht, sind diese Ressourcen verschwendet. Das Ergebnis kann allerdings den HTTP-Cache füllen, sofern die Header dies zulassen, und später verwendet werden. Der anfängliche Aufwand für das Vorrendern ist deutlich größer als für einen Vorababruf. Auch andere Bedingungen können dazu führen, dass Inhalte nicht gefahrlos vorgerendert werden können. Weitere Informationen finden Sie unter [Unsichere Bedingungen für spekulatives Laden](#unsichere_bedingungen_für_spekulatives_laden). Setzen Sie Vorrendern daher zurückhaltender ein: Wägen Sie sorgfältig ab, ob der Benutzer die Seite wahrscheinlich besuchen wird und ob der Vorteil für die Benutzererfahrung den zusätzlichen Aufwand rechtfertigt.

> [!NOTE]
> Zur Einordnung des möglichen Ressourcenverbrauchs: Eine Vorrenderung benötigt ungefähr so viele Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden beim Vorrendern automatisch bis zur Aktivierung zurückgestellt. Weitere Informationen finden Sie unter [Beim Vorrendern zurückgestellte oder eingeschränkte Plattformfunktionen](#beim_vorrendern_zurückgestellte_oder_eingeschränkte_plattformfunktionen).

Standardmäßig ist Vorrendern auf Dokumente derselben Origin beschränkt. Das Vorrendern zwischen verschiedenen Origins innerhalb derselben Website ist möglich, wenn das Navigationsziel mit dem Header {{httpheader("Supports-Loading-Mode")}} und dem Wert `credentialed-prerender` ausdrücklich zustimmt. Websiteübergreifendes Vorrendern ist derzeit nicht möglich.

In Browsern, die es unterstützen, sollte Vorrendern mittels Spekulationsregeln dem älteren Verfahren [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) vorgezogen werden:

- `<link rel="prerender">` ist Chrome-spezifisch, wurde nie standardisiert und wird vom Chrome-Entwicklungsteam eingestellt.
- Vorrendern mittels Spekulationsregeln lädt auch Unterressourcen, die über JavaScript geladen werden; `<link rel="prerender">` tut dies nicht.
- Es wird nicht durch {{httpheader("Cache-Control")}}-Einstellungen blockiert, während dies bei `<link rel="prerender">` häufig der Fall ist.
- Vorrendern mittels Spekulationsregeln sollte als Hinweis und progressive Verbesserung betrachtet werden. Anders als `<link rel="prerender">` ist es ein spekulativer Hinweis: Der Browser kann anhand von Benutzereinstellungen, der aktuellen Speicherauslastung oder anderer Heuristiken entscheiden, ihn nicht umzusetzen.

### Unterstützung der Speculation Rules API erkennen

Mit folgendem Code können Sie prüfen, ob die Speculation Rules API unterstützt wird:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Sie könnten beispielsweise in unterstützenden Browsern Spekulationsregeln für den Vorababruf einfügen und in anderen Browsern eine ältere Technik wie `<link rel="prefetch">` verwenden:

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

## Vorab abgerufene und vorgerenderte Seiten erkennen

Dieser Abschnitt beschreibt verschiedene Möglichkeiten, festzustellen, ob eine angeforderte Seite vorab abgerufen oder vorgerendert wurde.

### Serverseitige Erkennung

Anforderungen für vorab abgerufene und vorgerenderte Seiten werden mit dem Anfrage-Header {{httpheader("Sec-Purpose")}} gesendet.

Für den Vorababruf:

```http
Sec-Purpose: prefetch
```

Für das Vorrendern:

```http
Sec-Purpose: prefetch;prerender
```

Server können anhand dieses Headers reagieren, etwa indem sie Anforderungen für spekulatives Laden protokollieren, andere Inhalte zurückgeben oder spekulatives Laden ganz verhindern. Wird ein nicht erfolgreicher Antwortcode zurückgegeben – also nach etwaigen Weiterleitungen ein HTTP-Status außerhalb des Bereichs 200–299 –, wird die Seite nicht vorab abgerufen oder vorgerendert. Die Statuscodes 204 und 205 verhindern außerdem das Vorrendern, nicht jedoch den Vorababruf.

Ein nicht erfolgreicher Statuscode, beispielsweise 503, ist die einfachste Möglichkeit, spekulatives Laden serverseitig zu verhindern. Meist ist es jedoch besser, den Vorababruf oder das Vorrendern zuzulassen und mit JavaScript Aktionen aufzuschieben, die erst stattfinden sollen, wenn die Seite tatsächlich angezeigt wird.

### Vorababruf mit JavaScript erkennen

Wenn eine Seite vorab abgerufen wurde, liefert ihr Eintrag [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) den Wert `"navigational-prefetch"`. Mit folgendem Code können Sie eine Funktion ausführen, sobald ein Performance-Eintrag vom Typ `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist hilfreich, um die Leistung zu messen oder Aktionen aufzuschieben, die während des Vorababrufs Probleme verursachen könnten. Siehe [Unsicherer Vorababruf](#unsicherer_vorababruf).

### Vorrendern mit JavaScript erkennen

Um eine Aktivität auszuführen, während eine Seite vorgerendert wird, können Sie die Eigenschaft [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) prüfen. So könnten Sie beispielsweise Analysedaten erfassen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorgerendertes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt. Dieser gibt die Zeit zwischen dem Beginn des Vorrenderns und der Aktivierung des Dokuments an. Mit der folgenden Funktion können Sie Seiten erkennen, die _gerade vorgerendert werden_ oder _bereits vorgerendert wurden_:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn der Benutzer eine vorgerenderte Seite aufruft und sie dadurch aktiviert wird, wird das Ereignis [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) ausgelöst. Damit können Sie Aktivitäten erst dann starten, wenn der Benutzer die Seite sieht, statt wie bisher standardmäßig beim Laden der Seite. Der folgende Code richtet einen Event-Listener ein, der eine Funktion auf einer vorgerenderten Seite nach Abschluss des Vorrenderns ausführt. Auf einer nicht vorgerenderten Seite wird die Funktion sofort ausgeführt:

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

Dieser Abschnitt beschreibt Bedingungen, unter denen Vorababruf und/oder Vorrendern **unsicher** sind. Bei Seiten, auf die diese Bedingungen zutreffen, müssen Sie möglicherweise Gegenmaßnahmen in Ihrem Code ergreifen oder auf den Vorababruf beziehungsweise das Vorrendern ganz verzichten.

### Unsicherer Vorababruf

Wie bereits erwähnt, empfehlen wir einen breiten Einsatz von Vorababrufen: Das Verhältnis zwischen Risiko und Nutzen ist recht günstig, da nur wenige Ressourcen verschwendet werden könnten und die Leistungsverbesserungen erheblich sein können. Sie müssen jedoch sicherstellen, dass vorab abgerufene Seiten den Ablauf Ihrer Anwendung nicht beeinträchtigen.

Beim Vorababruf lädt der Browser den Antworttext der referenzierten Seite mit einer einzelnen GET-Anforderung herunter. Der Benutzer navigiert möglicherweise erst später zu dieser Seite. Probleme entstehen insbesondere dann, wenn die angeforderte URL serverseitig eine Nebenwirkung auslöst, die erst beim tatsächlichen Aufruf der URL eintreten soll.

Beispiele:

- URLs zum Abmelden.
- URLs zum Wechseln der Sprache.
- URLs zum Hinzufügen eines Artikels zum Warenkorb.
- URLs für Anmeldeabläufe, bei denen der Server beispielsweise eine SMS mit einem Einmalkennwort (OTP) versendet.
- URLs, die das Nutzungskontingent eines Benutzers verringern, etwa indem sie einen monatlichen Gratisartikel verbrauchen oder den Zähler für monatlich verfügbare Minuten starten.
- URLs, die serverseitiges Conversion-Tracking für Werbung auslösen.

Solche Probleme lassen sich serverseitig vermeiden, indem Sie bei eingehenden Anforderungen auf den Header {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} achten und problematische Funktionen mit entsprechendem Code aufschieben. Wenn der Benutzer die Seite später tatsächlich aufruft, können Sie die aufgeschobene Funktion bei Bedarf mit JavaScript auslösen.

> [!NOTE]
> Weitere Informationen zum Code für die Erkennung finden Sie unter [Vorab abgerufene und vorgerenderte Seiten erkennen](#vorab_abgerufene_und_vorgerenderte_seiten_erkennen).

Auch der Vorababruf eines Dokuments kann riskant sein, wenn sich dessen serverseitig gerenderter Inhalt durch Aktionen ändert, die der Benutzer auf der aktuellen Seite ausführen kann. Das betrifft beispielsweise Seiten für zeitlich begrenzte Angebote oder Sitzpläne von Kinos. Testen Sie solche Fälle sorgfältig und aktualisieren Sie die Inhalte nach dem Laden der Seite, um Probleme zu vermeiden. Weitere Informationen finden Sie unter [Veränderlicher serverseitig gerenderter Zustand](#veränderlicher_serverseitig_gerenderter_zustand).

> [!NOTE]
> Browser speichern vorab abgerufene Seiten nur kurz zwischen, bevor sie sie verwerfen. Chrome speichert sie beispielsweise fünf Minuten lang. Benutzer sehen daher unter Umständen Inhalte, die bis zu fünf Minuten veraltet sind.

Veraltete Vorababrufe können mit dem Wert {{httpheader("Clear-Site-Data#prefetchCache", "prefetchCache")}} des Antwort-Headers {{httpheader("Clear-Site-Data")}} entfernt werden.
Dies kann beispielsweise sinnvoll sein, wenn zustandsändernde Anforderungen zwischengespeicherte Daten ungültig machen, etwa beim Abmelden von einer Website.

Vorababruf ist sicher, wenn sämtliche Nebenwirkungen des Seitenabrufs durch die Ausführung von JavaScript entstehen, da JavaScript erst bei der Aktivierung ausgeführt wird.

Prüfen Sie abschließend die URLs, die in Ihrer Datei {{Glossary("robots.txt", "robots.txt")}} als nicht zugelassen aufgeführt sind. Normalerweise verweisen diese URLs auf Seiten, auf die nur authentifizierte Benutzer zugreifen können und die deshalb nicht in Suchergebnissen erscheinen sollten. Viele davon lassen sich problemlos vorab abrufen. Die Liste kann aber auch URLs enthalten, deren Vorababruf unsicher ist, weil eine der oben beschriebenen Bedingungen zutrifft.

### Unsicheres Vorrendern

Vorrendern ist riskanter als Vorababruf und sollte daher nur gezielt eingesetzt werden, wenn sich der Aufwand lohnt. Beim Vorrendern sind mehr unsichere Bedingungen zu beachten. Dem höheren Nutzen steht somit auch ein höheres Risiko gegenüber.

Beim Vorrendern ruft der Browser die URL mit einer GET-Anforderung ab, rendert die Inhalte und lädt sie in einen unsichtbaren Tab. Dabei werden der JavaScript-Code der Inhalte ausgeführt und sämtliche Unterressourcen geladen, einschließlich der durch JavaScript abgerufenen Ressourcen. Das Vorrendern kann unsicher sein, wenn eine der folgenden Bedingungen zutrifft:

- Der [Vorababruf der URL ist unsicher](#unsicherer_vorababruf). Lesen Sie gegebenenfalls zuerst den vorherigen Abschnitt. Die dort beschriebenen Bedingungen gelten gleichermaßen für unsicheres Vorrendern.
- Der JavaScript-Code der Seite verändert beim Laden clientseitigen Speicher, beispielsweise [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API). Dies könnte auf anderen, nicht vorgerenderten Seiten, die der Benutzer gerade betrachtet, zu verwirrenden Auswirkungen führen.
- Die Seite führt JavaScript aus oder lädt Bilder, die Nebenwirkungen auslösen, etwa Analysedaten senden, Anzeigenimpressionen erfassen oder den Zustand der Anwendung auf andere Weise so verändern, als hätte der Benutzer bereits mit ihr interagiert. Auch dies kann den Ablauf der Anwendung beeinträchtigen oder zu fehlerhaften Leistungs- oder Nutzungsberichten führen. Weitere Informationen zu solchen Fällen finden Sie unter [Veränderlicher serverseitig gerenderter Zustand](#veränderlicher_serverseitig_gerenderter_zustand).

Mit folgenden Techniken können Sie diese Probleme abmildern:

- Achten Sie bei eingehenden Anforderungen serverseitig auf den Header {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} und schieben Sie problematische Funktionen mit entsprechendem Code auf.
- Erkennen Sie mit dem Ereignis [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event), wann die vorgerenderte Seite tatsächlich aktiviert wird, und führen Sie dann Code aus. Das ist in zwei Fällen hilfreich:
  - Sie können Code aufschieben, der Probleme verursachen könnte, wenn er ausgeführt wird, bevor der Benutzer die Seite sieht. Beispielsweise können Sie mit der Aktualisierung des clientseitigen Speichers oder einer Zustandsänderung auf dem Server durch JavaScript bis nach der Aktivierung warten. Dadurch vermeiden Sie, dass Benutzeroberfläche und Anwendungszustand voneinander abweichen – etwa wenn ein Warenkorb als leer angezeigt wird, obwohl der Benutzer Artikel hinzugefügt hat.
  - Falls das Aufschieben nicht möglich ist, können Sie Code nach der Aktivierung erneut ausführen, um die Anwendung zu aktualisieren. Eine besonders dynamische Seite mit zeitlich begrenzten Angeboten könnte beispielsweise von Inhaltsaktualisierungen durch eine Bibliothek eines Drittanbieters abhängen. Können Sie diese Aktualisierungen nicht aufschieben, können Sie neue Daten abrufen, sobald der Benutzer die Seite sieht. Vorgerenderte Seiten lassen sich mithilfe der [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder eines anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder eines [`WebSocket`](/de/docs/Web/API/WebSocket) in Echtzeit aktualisieren. So stellen Sie sicher, dass der Benutzer nach der Aktivierung aktuelle Inhalte sieht.
- Gehen Sie sorgfältig mit Analysescripts von Drittanbietern um. Verwenden Sie nach Möglichkeit Scripts, die Vorrendern berücksichtigen – etwa Google Analytics oder NewRelic – und beispielsweise mithilfe der Eigenschaft [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) ihre Ausführung auf vorgerenderten Seiten aufschieben.
  - Beim Vorrendern wird das Laden von {{htmlelement("iframe")}}-Inhalten aus anderen Origins bis zur Aktivierung verzögert. So werden Fehler vermieden, die beim Laden von Seiten aus anderen Origins entstehen könnten, die Vorrendern nicht berücksichtigen. Außerdem werden Schwierigkeiten bei der Frage vermieden, welche Anmeldedaten und Speicherbereiche diesen Frames zur Verfügung stehen sollen. Dadurch sehen Benutzer unter Umständen zunächst leere Frames. Zugleich können die meisten Widgets von Drittanbietern, etwa Werbetechnologie, während des Vorrenderns gefahrlos verwendet werden.
  - Laden Sie Scripts von Drittanbietern, die Vorrendern nicht berücksichtigen, erst nach der Aktivierung. Verwenden Sie dazu wie oben beschrieben das Ereignis [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event).

### Veränderlicher serverseitig gerenderter Zustand

Bei serverseitig gerendertem Zustand sind vor allem zwei Arten relevant: **veralteter Zustand** und **benutzerspezifischer Zustand**. Beide können Vorababruf und Vorrendern unsicher machen.

- Veralteter Zustand: Stellen Sie sich eine serverseitig gerenderte Liste von Blogkommentaren vor, die zwischen dem Vorrendern des Blogbeitrags und seiner Anzeige veralten kann. Besonders problematisch wäre dies, wenn die aktuelle Seite ein Administrationsbereich ist, in dem der Benutzer Spamkommentare löscht. Navigiert er anschließend zum Blogbeitrag, könnte es ihn verwirren, die gerade gelöschten Kommentare erneut zu sehen.
- Benutzerspezifischer Zustand: Stellen Sie sich vor, der Anmeldestatus wird über ein Cookie verfolgt. Dabei können beispielsweise folgende Probleme auftreten:
  - Der Benutzer besucht abgemeldet `https://site.example/a` in Tab 1 und `https://site.example/b` in Tab 2.
  - `https://site.example/b` rendert `https://site.example/c` vor. Die Seite wird im abgemeldeten Zustand vorgerendert.
  - Der Benutzer meldet sich in Tab 1 bei `https://site.example` an.
  - Der Benutzer wechselt zu Tab 2 und klickt auf den Link zu `https://site.example/c`. Dadurch wird die vorgerenderte Seite aktiviert.
  - Tab 2 zeigt `https://site.example/c` im abgemeldeten Zustand an. Das verwirrt den Benutzer, da er davon ausgeht, angemeldet zu sein.

Probleme mit benutzerspezifischem Zustand können auch bei anderen Einstellungen auftreten, beispielsweise bei Spracheinstellungen, Einstellungen für den Dunkelmodus oder beim Hinzufügen von Artikeln zum Warenkorb. Sie können sogar innerhalb eines einzigen Tabs entstehen:

- Angenommen, der Benutzer besucht `https://site.example/product`.
- `https://site.example.com/product` rendert `https://site.example.com/cart` vor. Zum Zeitpunkt des Vorrenderns ist der Warenkorb leer.
- Der Benutzer klickt auf eine „Zum Warenkorb hinzufügen“-Schaltfläche. Dadurch wird ohne erneutes Laden der Seite eine Abrufanforderung ausgelöst, die den Artikel zum Warenkorb hinzufügt.
- Der Benutzer klickt auf den Link zu `https://site.example.com/cart`. Dadurch wird die vorgerenderte Seite aktiviert.
- Der Benutzer sieht einen leeren Warenkorb, obwohl er gerade einen Artikel hinzugefügt hat.

Die beste Gegenmaßnahme in diesen Fällen – und generell immer dann, wenn Inhalte vom Serverzustand abweichen können – besteht darin, dass Seiten sich bei Bedarf selbst aktualisieren. Dazu kann beispielsweise die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder ein anderer Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein [`WebSocket`](/de/docs/Web/API/WebSocket) verwendet werden. So können auch spekulativ geladene Seiten, die noch nicht aktiviert wurden, ihre Inhalte entsprechend aktualisieren.

Sind Aktualisierungen nicht möglich, können Spekulationen über den Antwort-Header {{httpheader("Clear-Site-Data")}} mit den Werten {{httpheader("Clear-Site-Data#prefetchCache", `prefetchCache`)}} oder {{httpheader("Clear-Site-Data#prerenderCache", `prerenderCache`)}} – oder bei Bedarf mit beiden – entfernt werden.

Der Header kann mit jeder HTTP-Antwort innerhalb derselben Website zurückgegeben werden, beispielsweise bei einem API-Aufruf an `/api/add-to-cart`.

## Verhalten des Sitzungsverlaufs bei vorgerenderten Dokumenten

Aus Sicht des Benutzers verhält sich die Aktivierung eines Dokuments, das gerade vorgerendert wird oder bereits vorgerendert wurde, wie eine gewöhnliche Navigation. Das aktivierte Dokument wird im Tab angezeigt und dem Sitzungsverlauf hinzugefügt. Vorhandene Einträge im Vorwärtsverlauf werden entfernt. Navigationen innerhalb des vorgerenderten Browsing-Kontexts _vor_ der Aktivierung wirken sich nicht auf den Sitzungsverlauf aus.

Aus Entwicklungssicht hat ein vorgerendertes Dokument einen **einfachen Sitzungsverlauf**, der nur einen Eintrag enthält: den aktuellen. Alle Navigationen innerhalb des vorgerenderten Kontexts ersetzen faktisch diesen Eintrag.

API-Funktionen, die mit dem Sitzungsverlauf arbeiten, beispielsweise [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation), können zwar in vorgerenderten Dokumenten aufgerufen werden, wirken sich aber nur auf den einfachen Sitzungsverlauf dieses Kontexts aus. Vorgerenderte Dokumente sind deshalb nicht Teil des gemeinsamen Sitzungsverlaufs der Seite, von der aus sie referenziert wurden. Sie können beispielsweise nicht mit [`History.back()`](/de/docs/Web/API/History/back) zu dieser Seite navigieren.

Dieses Verhalten stellt sicher, dass die Zurück-Schaltfläche den Benutzer wie erwartet zur zuletzt angesehenen Seite führt. Wird ein vorgerendertes Dokument aktiviert, wird dem gemeinsamen Sitzungsverlauf nur ein einziger Eintrag hinzugefügt. Frühere Navigationen innerhalb des vorgerenderten Browsing-Kontexts werden ignoriert. Geht der Benutzer im gemeinsamen Sitzungsverlauf einen Schritt zurück, etwa mit der Zurück-Schaltfläche, gelangt er zur verweisenden Seite.

## Beim Vorrendern zurückgestellte oder eingeschränkte Plattformfunktionen

Da eine vorgerenderte Seite zunächst verborgen ist, werden mehrere API-Funktionen, die potenziell störendes Verhalten auslösen, in diesem Zustand nicht aktiviert. Stattdessen werden sie bis zur Aktivierung der Seite **zurückgestellt**. Andere Webplattformfunktionen, die beim Vorrendern problematisch sind, werden vollständig eingeschränkt. Dieser Abschnitt beschreibt die betroffenen Funktionen.

> [!NOTE]
> In den wenigen Fällen, in denen eine Zurückstellung oder Einschränkung nicht möglich ist, wird das Vorrendern abgebrochen.

### Zurückstellung asynchroner APIs

Zurückstellung bedeutet, dass die API-Funktion sofort ein noch ausstehendes Promise zurückgibt und bis zur Aktivierung der Seite nichts weiter tut. Nach der Aktivierung wird sie wie gewohnt ausgeführt und das Promise wie üblich erfüllt oder zurückgewiesen.

Die Ergebnisse der folgenden asynchronen Funktionen werden in vorgerenderten Dokumenten bis zu deren Aktivierung zurückgestellt:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), Ereignis [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event), Ereignis [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
- [Geolocation API](/de/docs/Web/API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API: Die Wiedergabeposition schreitet nicht fort, während das enthaltende Dokument vorgerendert wird.
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (und die ältere Variante [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Notifications API](/de/docs/Web/API/Notifications_API): Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification), [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Storage API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): Instanzen von [`AudioContext`](/de/docs/Web/API/AudioContext) dürfen nicht starten, während das enthaltende Dokument vorgerendert wird.
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

Die folgenden Funktionen schlagen in noch nicht aktivierten Dokumenten automatisch fehl oder haben keine Wirkung.

APIs, die eine {{Glossary("transient_activation", "vorübergehende Aktivierung")}} oder {{Glossary("sticky_activation", "dauerhafte Aktivierung")}} erfordern:

- Bestätigungsdialoge, die durch das Ereignis [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) erzeugt werden
- Das Auslösen von Ereignissen in der [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [File System API](/de/docs/Web/API/File_System_API): [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker), [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker), [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API): [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static)
- [Keyboard API](/de/docs/Web/API/Keyboard_API): [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) (erfordert den Vollbildmodus)
- [Payment Request API](/de/docs/Web/API/Payment_Request_API): [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
- [Presentation API](/de/docs/Web/API/Presentation_API): [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API): [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Web Share API](/de/docs/Web/API/Web_Share_API): [`Navigator.share()`](/de/docs/Web/API/Navigator/share)
- [`Window.open()`](/de/docs/Web/API/Window/open)

APIs, bei denen das enthaltende Dokument den Fokus haben muss:

- [Clipboard API](/de/docs/Web/API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)

APIs, bei denen [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) des enthaltenden Dokuments `"visible"` sein muss:

- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert, dass der Sichtbarkeitszustand des enthaltenden Dokuments `"visible"` ist, _oder_ eine {{Glossary("transient_activation", "vorübergehende Aktivierung")}})
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Weitere eingeschränkte Funktionen

- Bei Download-Links, also {{htmlelement("a")}}- und {{htmlelement("area")}}-Elementen mit dem Attribut `download`, wird der Download bis zum Ende des Vorrenderns verzögert.
- Keine websiteübergreifenden Navigationen: Navigiert ein vorgerendertes Dokument zu einer anderen Website, wird es sofort verworfen, noch bevor eine Anforderung an diese Website gesendet wird.
- Eingeschränkte URLs: Vorgerenderte Dokumente dürfen keine Top-Level-URLs verwenden, die nicht HTTP(S)-URLs sind. Bei folgenden URL-Typen wird das Vorrendern sofort verworfen:
  - [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
  - [`data:`-URLs](/de/docs/Web/URI/Reference/Schemes/data)
  - [`blob:`-URLs](/de/docs/Web/URI/Reference/Schemes/blob)
  - `about:`-URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungsspeicher: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, folgt aber einem besonderen Verhalten. Dadurch werden Websites nicht beeinträchtigt, die erwarten, dass jeweils nur eine Seite auf den Sitzungsspeicher eines Tabs zugreift. Eine vorgerenderte Seite beginnt deshalb mit einer Kopie des Sitzungsspeicherzustands des Tabs zum Zeitpunkt ihrer Erstellung. Bei der Aktivierung wird diese Kopie verworfen und stattdessen der eigentliche Speicherzustand des Tabs verwendet. Seiten, die Sitzungsspeicher nutzen, können mit dem Ereignis [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) erkennen, wann dieser Wechsel stattfindet.
- [`Window.print()`](/de/docs/Web/API/Window/print): Aufrufe dieser Methode werden ignoriert.
- „Einfache Dialogmethoden“ sind wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) kehrt sofort zurück, ohne einen Dialog anzuzeigen.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) gibt sofort `false` zurück, ohne einen Dialog anzuzeigen.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) gibt sofort eine leere Zeichenfolge (`""`) zurück, ohne einen Dialog anzuzeigen.
- Scripts für Dedicated und Shared Worker werden geladen, ihre Ausführung wird jedoch bis zur Aktivierung des vorgerenderten Dokuments zurückgestellt.
- Das Laden von {{htmlelement("iframe")}}-Inhalten aus anderen Origins wird während des Vorrenderns bis nach der Aktivierung der Seite verzögert.

## Schnittstellen

Die Speculation Rules API definiert keine eigenen Schnittstellen.

### Erweiterungen anderer Schnittstellen

- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument gerade vorgerendert wird.
- Ereignis [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) {{experimental_inline}}
  - : Wird für ein vorgerendertes Dokument ausgelöst, wenn es aktiviert wird, also wenn der Benutzer die Seite aufruft.
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Beginn des Vorrenderns eines Dokuments und seiner Aktivierung angibt.
- Wert `"navigational-prefetch"` für [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{experimental_inline}}
  - : Zeigt an, dass ein Performance-Eintrag einen Vorababruf betrifft.

## HTTP-Header

- Wert `'inline-speculation-rules'` für {{httpheader("Content-Security-Policy")}} {{experimental_inline}}
  - : Erlaubt die Verwendung von `<script type="speculationrules">`, um Spekulationsregeln im abgerufenen Dokument zu definieren.
- Werte `'prefetchCache'` und `'prerenderCache'` für {{httpheader("Clear-Site-Data")}} {{experimental_inline}}
  - : Dienen zum Entfernen von Spekulationen, beispielsweise wenn Zustandsänderungen diese veralten lassen.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Stellt eine Liste von URLs bereit, die auf Textressourcen mit JSON-Definitionen von Spekulationsregeln verweisen. Handelt es sich bei der Antwort um ein HTML-Dokument, werden diese Regeln dessen Spekulationsregelsatz hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um ausdrücklich der Verwendung verschiedener risikoreicherer Lademodi zuzustimmen. Für das Vorrendern zwischen verschiedenen Origins innerhalb derselben Website ist beispielsweise der `Supports-Loading-Mode`-Wert `credentialed-prerender` erforderlich.

## HTML-Funktionen

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Definiert im aktuellen Dokument eine Reihe von Spekulationsregeln für den Vorababruf und/oder das Vorrendern. Diese werden dem Spekulationsregelsatz des Dokuments hinzugefügt.

## Beispiele

Codebeispiele finden Sie unter [Seiten in Chrome für sofortige Navigationen vorrendern](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2025).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) vergleicht Spekulationsregeln mit anderen ähnlichen Funktionen zur Leistungsverbesserung.
