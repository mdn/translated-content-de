---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Speculation Rules API** ist darauf ausgelegt, die Leistung für zukünftige Navigationen zu verbessern. Sie zielt auf Dokument-URLs ab, nicht auf spezifische Ressourcen-Dateien, und ist daher sinnvoller für Mehrseitige Anwendungen (MPAs) als für Einzelseiten-Anwendungen (SPAs).

Die Speculation Rules API bietet eine Alternative zu der weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch)-Funktion und ist darauf ausgelegt, die ausschließlich Chrome-spezifische veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender)-Funktion zu ersetzen. Sie bietet viele Verbesserungen gegenüber diesen Technologien und eine ausdrucksstärkere, konfigurierbare Syntax für die Angabe, welche Dokumente vorab abgerufen oder vorgerendert werden sollen.

> [!NOTE]
> Die Speculation Rules API verarbeitet keine Subressourcen-Vorababrufe; dafür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Verwendung

Spekulationsregeln können innerhalb von eingebetteten [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)-Elementen und externen Textdateien, die durch den {{httpheader("Speculation-Rules")}}-Antwortheader referenziert werden, angegeben werden. Die Regeln werden als JSON-Struktur spezifiziert.

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

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen explizit in der {{httpheader("Content-Security-Policy")}} [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)-Direktive erlaubt sein, wenn die Seite eine solche enthält. Dies geschieht durch das Hinzufügen einer `'inline-speculation-rules'`-Quelle, einer Hash-Quelle oder einer Nonce-Quelle.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das Speculation Rules JSON enthält, kann einen beliebigen gültigen Namen und eine gültige Erweiterung haben, muss jedoch mit einem `application/speculationrules+json`-MIME-Typ bereitgestellt werden.

> [!NOTE]
> Regeln können sowohl über ein eingebettetes Skript als auch den HTTP-Header spezifiert werden – alle auf ein Dokument angewandten Regeln werden analysiert und zur Liste der Speculation Rules des Dokuments hinzugefügt.

Sie geben ein unterschiedliches Array an, um die Regeln für jeden spekulativen Lade-Typ zu enthalten (zum Beispiel `"prerender"` oder `"prefetch"`). Jede Regel ist in einem Objekt enthalten, das beispielsweise eine Liste von Ressourcen spezifiziert, die abgerufen werden sollen, plus Optionen wie eine explizite {{httpheader("Referrer-Policy")}}-Einstellung für jede Regel. Beachten Sie, dass vorgeladene URLs auch vorab abgerufen werden.

Beachten Sie die vollständige Erklärung der verfügbaren Syntax unter [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules).

### Verwendung von Prefetching

Wenn `prefetch`-Regeln innerhalb eines `<script type="speculationrules">`-Elements oder des `Speculation-Rules`-Headers enthalten sind, werden unterstützende Browser den Antwortkörper der referenzierten Seiten herunterladen, jedoch keine der von der Seite referenzierten Subressourcen. Wenn zu einer vorab abgerufenen Seite navigiert wird, wird sie viel schneller gerendert als wenn sie nicht vorab abgerufen worden wäre.

Die Ergebnisse werden in einem pro Dokument im Speicher gehaltenen Cache gespeichert. Alle gecachten Prefetches werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich, wenn zu einem vorab abgerufenen Dokument navigiert wird.

Dies bedeutet, dass, wenn Sie etwas vorab abrufen, zu dem der Benutzer nicht navigiert, dies im Allgemeinen eine Verschwendung von Ressourcen ist, obwohl das Ergebnis den HTTP-Cache füllen kann, wenn die Header dies zulassen. Dennoch sind die anfänglichen Kosten eines Prefetch viel geringer als die eines Prerender, sodass Sie ermutigt werden, Prefetching umfassend anzuwenden, zum Beispiel das Vorababrufen aller wesentlichen Seiten auf Ihrer Website, vorausgesetzt, sie sind sicher abzurufen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_bedingungen_für_spekulatives_laden) für weitere Details).

Gleichseitige und kreuzseitige Prefetches funktionieren, aber kreuzseitige Prefetches sind eingeschränkt (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen den beiden). Aus Datenschutzgründen funktionieren kreuzseitige Prefetches derzeit nur, wenn der Benutzer keine Cookies für die Zielseite gesetzt hat – wir möchten nicht, dass Seiten die Benutzeraktivität über vorab abgerufene Seiten (die sie möglicherweise nie besuchen) basierend auf zuvor gesetzten Cookies verfolgen können.

> [!NOTE]
> In Zukunft wird ein Opt-in für kreuzseitige Prefetches über den {{httpheader("Supports-Loading-Mode")}}-Header bereitgestellt, aber dies war zum Zeitpunkt des Schreibens nicht implementiert (nur kreuz-origin, gleichseitiges [Prerendering](#verwendung_von_prerendering)-Opt-in war verfügbar).

Für unterstützende Browser sollte das Speculation Rules Prefetch gegenüber älteren Prefetch-Mechanismen bevorzugt werden, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"`-Option. Da wir wissen, dass das Speculation Rules Prefetch für Navigationen und nicht für allgemeines Ressourcen-Prefetching gedacht ist:

- Es kann für kreuzseitige Navigationen verwendet werden, während `<link rel="prefetch">` dies nicht kann.
- Es wird nicht von {{httpheader("Cache-Control")}}-Headern blockiert, während `<link rel="prefetch">` dies oft wird.

Darüber hinaus:

- Reduziert automatisch die Priorität, wenn nötig (`fetch()` tut dies nicht).
- Respektiert die Konfiguration des Benutzers. Zum Beispiel passiert Prefetching nicht, wenn das Gerät des Benutzers im Modus "Energiesparen" oder "Daten sparen" ist.
- Speichert die vorab abgerufenen Ressourcen in einem pro Dokument im Speicher gehaltenen Cache anstelle des HTTP-Caches, was zu einer etwas schnelleren Vorababholung führen kann.

### Verwendung von Prerendering

Das Einschließen von `prerender`-Regeln innerhalb eines `<script type="speculationrules">`-Elements oder des `Speculation-Rules`-Headers bewirkt, dass unterstützende Browser den Inhalt in einem unsichtbaren Tab abrufen, rendern und laden, der in einem pro Dokument im Speicher gehaltenen Cache gespeichert wird. Dies umfasst das Laden aller Subressourcen, das Ausführen aller JavaScript und sogar das Laden von Subressourcen und das Ausführen von Datenabrufen, die durch JavaScript gestartet werden. Alle gecachten Prerenders und ihre Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich, wenn zu einem vorgeladenen Dokument navigiert wird.

Zukünftige Navigationen zu einer vorgeladenen Seite erfolgen nahezu sofort. Der Browser aktiviert den unsichtbaren Tab anstelle des üblichen Navigationsprozesses, um die alte Seite im Vordergrund durch die vorgeladene Seite zu ersetzen. Wenn eine Seite aktiviert wird, bevor sie vollständig vorgeladen ist, wird sie in ihrem aktuellen Zustand aktiviert und lädt dann weiter, was bedeutet, dass Sie trotzdem eine signifikante Leistungsverbesserung sehen werden.

Prerendering verbraucht Speicher und Netzwerkbandbreite. Wenn Sie etwas vorgenerieren, zu dem der Benutzer nicht navigiert, gehen diese Ressourcen verloren (obwohl das Ergebnis den HTTP-Cache füllen kann, wenn die Header dies zulassen, was eine spätere Nutzung ermöglicht). Die anfänglichen Kosten eines Prerenders sind viel größer als die eines Prefetchs, und andere Bedingungen könnten auch dazu führen, dass ein Inhalt unsicher zu prerendern ist (siehe [Unsichere spekulative Ladebedingungen](#unsichere_bedingungen_für_spekulatives_laden) für weitere Details). Daher werden Sie ermutigt, Prerendering sparsamer zu verwenden und sorgfältig zu überlegen, wann es eine hohe Wahrscheinlichkeit gibt, dass zu der Seite navigiert wird, und wann der Benutzererfahrungsgewinn die zusätzlichen Kosten wert ist.

> [!NOTE]
> Um das Ausmaß des potenziellen Ressourcenverschwendens in Perspektive zu setzen, verbraucht ein Prerender etwa die gleiche Menge an Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden beim Prerendering/aktivierung automatisch verschoben. Siehe [Plattformfunktionen, die während des Prerenderings verschoben oder eingeschränkt sind](#plattformfunktionen,_die_während_des_prerenderings_verschoben_oder_eingeschränkt_sind) für weitere Details.

Prerendering ist standardmäßig auf gleichherkunftsseitige Dokumente beschränkt. Kreuzherkunftsseitiges Prerendering ist möglich - es erfordert, dass das Navigationsziel sich mittels des {{httpheader("Supports-Loading-Mode")}}-Headers mit einem Wert von `credentialed-prerender` einwilligt. Kreuzseitiges Prerendering ist derzeit nicht möglich.

Für unterstützende Browser sollte das Spekulationsregeln-Prerendering gegenüber älteren Prerender-Mechanismen bevorzugt werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender):

- `<link rel="prerender">` ist chrome-spezifisch und wurde nie standardisiert, und das Chrome-Entwicklungsteam ist dabei, es abzuschaffen.
- Es lädt Subressourcen, die über JavaScript geladen werden, während `<link rel="prerender">` dies nicht tut.
- Es wird nicht von {{httpheader("Cache-Control")}}-Einstellungen blockiert, während `<link rel="prerender">` dies oft tut.
- Spekulationsregeln-Prerendering sollte als Hinweis und als progressive Verbesserung behandelt werden. Anders als `<link rel="prerender">` ist es ein spekulativer Hinweis, und der Browser kann wählen, ob er den Hinweis basierend auf Benutzereinstellungen, aktuellem Speicherverbrauch oder anderen Heuristiken ignorieren möchte.

### Speculation Rules API Feature-Erkennung

Sie können überprüfen, ob die Speculation Rules API unterstützt wird, indem Sie den folgenden Code verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Zum Beispiel möchten Sie möglicherweise Spekulationsregeln für Prefetching in unterstützenden Browsern einfügen, aber eine ältere Technologie wie `<link rel="prefetch">` in anderen verwenden:

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

## Erkennen von vorgeladenen und vorgeladenen Seiten

Dieser Abschnitt untersucht verschiedene Möglichkeiten, um festzustellen, ob eine angeforderte Seite vorgeladen oder vorgeneriert wurde.

### Serverseitige Erkennung

Anfragen für vorgeladene und vorgenerierte Seiten werden mit dem {{httpheader("Sec-Purpose")}}-Request-Header versendet:

Für Prefetch:

```http
Sec-Purpose: prefetch
```

Für Prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können basierend auf diesem Header reagieren, beispielsweise um spekulative Ladeanfragen zu protokollieren, unterschiedlichen Inhalt zurückzugeben oder sogar spekulatives Laden zu verhindern. Wenn ein nicht-erfolgreicher Antwortcode zurückgegeben wird (jeder HTTP-Status, der nach Umleitungen nicht im Bereich 200-299 liegt), wird die Seite nicht vorab abgerufen/vorgeneriert. Darüber hinaus verhindern die Statuscodes 204 und 205 auch das Prerendern (aber nicht das Prefetchen).

Die Verwendung eines nicht-erfolgreichen Codes (zum Beispiel eines 503) ist der einfachste Weg, spekulatives Laden serverseitig zu verhindern, obwohl es in der Regel eine bessere Herangehensweise ist, das Prefetch/Prerender zuzulassen und JavaScript zu verwenden, um Aktionen zu verzögern, die nur stattfinden sollen, wenn die Seite tatsächlich angesehen wird.

### JavaScript-Prefetch-Erkennung

Wenn eine Seite vorgeladen wird, liefert ihr [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType)-Eintrag einen Wert von `"navigational-prefetch"`. Sie können Folgendes verwenden, um eine Funktion auszuführen, wenn ein Leistungseintrag vom Typ `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist nützlich zur Leistungsmessung oder wenn Sie Aktionen verzögern möchten, die bei ihrem Auftreten während des Prefetchings Probleme verursachen könnten (siehe [Unsicheres Prefetching](#unsicheres_prefetching)).

### JavaScript-Prerender-Erkennung

Um während des Prerenderings eine Aktivität auszuführen, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft überprüfen. Sie könnten zum Beispiel einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorgeneriertes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Zeit zwischen dem Start des Prerenders und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann auf Prerendering- _und_ vorgenerierte Seiten überprüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vorgenerierte Seite durch den Benutzer beim Anzeigen der Seite aktiviert wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die zuvor standardmäßig beim Laden der Seite gestartet wären, die Sie jedoch bis zum Zeitpunkt der Ansicht der Seite durch den Benutzer verzögern möchten. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Prerendern abgeschlossen ist, auf einer vorgenerierten Seite, oder um sie sofort auf einer nicht-vorgenerierten Seite auszuführen:

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

Dieser Abschnitt behandelt Bedingungen, auf die Sie achten sollten, unter denen Prefetching und/oder Prerendering **unsicher** sind. Das bedeutet, dass das Prefetching/Prerendering von Seiten, die diese Bedingungen aufweisen, möglicherweise Ablösungen in Ihrem Code erfordern oder insgesamt vermieden werden sollten.

### Unsicheres Prefetching

Wie bereits erwähnt, empfehlen wir, Prefetching umfassend anzuwenden, da das Risiko-Ertrags-Verhältnis relativ gering ist - das Potenzial für Ressourcenverschwendung ist gering, und die Leistungsverbesserungen können beträchtlich sein. Sie müssen jedoch sicherstellen, dass vorgeladene Seiten keine Probleme mit dem Ablauf Ihrer Anwendung verursachen.

Wenn ein Prefetch gemacht wird, lädt der Browser den Antwortkörper der referenzierten Seite über eine Einzelabruf-Anfrage herunter, die der Benutzer zu einem späteren Zeitpunkt navigieren kann. Probleme können auftreten, insbesondere wenn die URL der Anfrage einen serverinitiierten Seiteneffekt ausführt, den Sie nicht haben möchten, bis zur tatsächlichen Navigation zur URL.

Zum Beispiel:

- Abmelde-URLs.
- Sprachumschalt-URLs.
- "Zum Warenkorb hinzufügen"-URLs.
- Anmeldefluss-URLs, bei denen der Server beispielsweise eine SMS als Einmalpasswort (OTP) sendet.
- URLs, die die Verbrauchszahlen des Nutzers erhöhen, wie zum Beispiel das Aufbrauchen ihres monatlichen Artikelkontingents oder das Starten des Timers für ihre monatlichen Minuten.
- URLs, die serverseitiges Tracking von Werbemittelkonversionen auslösen.

Solche Probleme können auf dem Server gemildert werden, indem der {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Header während des Eingangs der Anfragen beobachtet wird und dann spezifischer Code ausgeführt wird, um problematische Funktionalitäten aufzuschieben. Später, wenn die Seite tatsächlich navigiert wird, können Sie die aufgeschobene Funktionalität bei Bedarf durch JavaScript initiieren.

> [!NOTE]
> Sie finden mehr Details zum Erkennungs-Code im Abschnitt [Erkennen von vorgeladenen und vorgenerierten Seiten](#erkennen_von_vorgeladenen_und_vorgeladenen_seiten).

Es ist auch potenziell riskant, ein Dokument vorab abzurufen, dessen serverseitig bereitgestellter Inhalt sich aufgrund von Aktionen ändern wird, die der Benutzer auf der aktuellen Seite unternehmen kann. Dies könnte zum Beispiel Blitzverkaufsseiten oder Sitzplatzkarten in Kinos betreffen. Testen Sie solche Fälle sorgfältig und mildern Sie solche Probleme, indem Sie den Inhalt aktualisieren, sobald die Seite geladen ist. Siehe [Serverseitig bereitgestellter variierender Status](#serverseitig_bereitgestellter_variierender_status) für weitere Details zu diesen Fällen.

> [!NOTE]
> Browser werden vorgeladene Seiten für eine kurze Zeit im Cache speichern (Chrome speichert sie zum Beispiel für 5 Minuten), bevor sie verworfen werden, sodass Ihre Benutzer in jedem Fall Inhalte sehen könnte, die bis zu 5 Minuten veraltet sind.

Prefetching ist sicher, wenn alle Seiteneffekte des Abrufs der Seite durch die Ausführung von JavaScript resultieren, da das JavaScript nicht ausgeführt wird, bis die Aktivierung stattfindet.

Ein letzter Tipp ist, die URLs zu prüfen, die in Ihrer {{Glossary("robots.txt", "robots.txt")}}-Datei als unzulässig aufgeführt sind – normalerweise zeigen diese URLs auf Seiten, die nur von authentifizierten Benutzern zugänglich sind und daher nicht in Suchmaschinenergebnissen enthalten sein sollten. Viele davon werden unproblematisch sein, aber es kann ein guter Ort sein, um nach URLs zu suchen, die unsicher zum Vorababrufen sind (d.h. sie weisen die oben beschriebenen Bedingungen auf).

### Unsicheres Prerendering

Prerendering ist riskanter umzusetzen als Prefetching und sollte daher sparsam angewendet werden, insbesondere in Fällen, in denen es sich lohnt. Es gibt mehr unsichere Bedingungen, auf die Sie beim Prerendering achten müssen, sodass, obwohl der Nutzen höher ist, das Risiko ebenfalls höher ist.

Wenn ein Prerender durchgeführt wird, ruft der Browser die URL ab und rendert und lädt den Inhalt in einen unsichtbaren Tab. Dies umfasst das Ausführen des Inhalts-JavaScripts und das Laden aller Subressourcen, einschließlich jener, die von JavaScript abgerufen werden. Inhalt kann potenziell unsicher sein, um vorab zu rendern, wenn eine der folgenden Bedingungen beobachtet wird:

- Die URL ist [unsicher zum Prefetchen](#unsicheres_prefetching). Lesen Sie den vorherigen Abschnitt zuerst, wenn Sie ihn noch nicht gelesen haben, und verstehen Sie, dass diese Bedingungen auch gleichermaßen für unsicheres Prerendering gelten.
- Das JavaScript der Seite ändert den clientseitigen Speicher (zum Beispiel [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) beim Laden in einer Weise, die möglicherweise verwirrende Effekte auf anderen, nicht vorgenerierten Seiten hat, die der Benutzer derzeit betrachtet.
- Die Seite führt JavaScript aus oder lädt Bilder, die Seiteneffekte verursachen, wie das Senden von Analysen, das Aufzeichnen von Werbeeindrücken oder das anderweitige Modifizieren des Zustands der Anwendung, als hätte der Benutzer bereits damit interagiert. Wiederum kann dies den Ablauf der Anwendung oder inkorrekte Leistungs- oder Nutzungsberichte beeinträchtigen. Siehe [Serverseitig bereitgestellter variierender Status](#serverseitig_bereitgestellter_variierender_status) für weitere Details zu solchen Anwendungsfällen.

Um solche Probleme zu mildern, können Sie die folgenden Techniken verwenden:

- Beobachten Sie den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Header auf dem Server, während die Anfragen eingehen, und führen Sie dann spezifischen Code aus, um problematische Funktionalitäten aufzuschieben.
- Verwenden Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis, um zu erkennen, wann die vorgenerierte Seite tatsächlich aktiviert wird und führen Sie Code infolgedessen aus. Dies ist in zwei Fällen nützlich:
  - Zum Aufschieben von Code, der Probleme verursachen könnte, wenn er ausgeführt wird, bevor die Seite angesehen wird. Zum Beispiel möchten Sie vielleicht mit der Aktualisierung des Client-seitigen Speichers oder der Modifizierung des serverseitigen Zustands mittels JavaScript warten, bis die Seite durch den Benutzer angesehen wird. Dies kann Situationen vermeiden, in denen die Benutzeroberfläche und der Anwendungsstatus nicht synchron sind, zum Beispiel ein Einkaufswagen, der keine Artikel anzeigt, obwohl der Benutzer Artikel hinzugefügt hat.
  - Wenn das vorherige nicht möglich ist, dann könnten Sie trotzdem nach der Aktivierung den Code erneut ausführen, um die App erneut auf den neuesten Stand zu bringen. Zum Beispiel könnte eine hochdynamische Blitzverkaufsseite von Inhalts-Aktualisierungen durch eine Drittanbieter-Bibliothek abhängen. Wenn Sie die Aktualisierungen nicht verzögern können, können Sie immer frische Aktualisierungen einmal erhalten, wenn der Benutzer die Seite ansieht. Vorgenerierte Seiten können in Echtzeit mit dem [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) aktualisiert werden, oder einem anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einem [`WebSocket`](/de/docs/Web/API/WebSocket). Dies stellt sicher, dass der Benutzer aktuelle Inhalte nach der Aktivierung des Prerenders sieht.
- Managen Sie Ihre Drittanbieter-Analyseskripte sorgfältig – wenn möglich, verwenden Sie Skripte, die sich des Prerenderings bewusst sind (zum Beispiel verwenden Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft, um die Ausführung auf Prerendering-Seiten zu verschieben) wie Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden von Inhalten aus kreuzherkunftsseitigen {{htmlelement("iframe")}}s beim Prerendering verzögert wird, bis die Aktivierung erfolgt. Dies wird durchgeführt, um Brüche zu vermeiden, die durch das Laden von kreuzherkunftsseitigen Seiten verursacht werden, die sich des Prerenderings nicht bewusst sind, und um Komplexitäten zu vermeiden, welche Anmeldedaten und Speicher diesen Frames angezeigt werden sollen. Es bedeutet, dass Benutzer möglicherweise anfangs leere Frames in einigen Fällen sehen, aber es bedeutet auch, dass die meisten Drittanbieter-Widgets wie Werbetechnologie beim Prerendering sicher zu verwenden sind.
  - Für Drittanbieter-Skripte, die sich des Prerenderings nicht bewusst sind, vermeiden Sie das Laden bis nach der Aktivierung unter Verwendung des [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignisses, wie bereits erwähnt.

### Serverseitig bereitgestellter variierender Status

Es gibt zwei Haupttypen von serverseitig bereitgestelltem Status, über die man sich Sorgen machen sollte: **veralteter Status** und **benutzerspezifischer Status**. Dies kann sowohl unsicheres Prefetching als auch Prerendering verursachen.

- Veralteter Status: Erwägen Sie das Beispiel einer serverseitig gerenderten Liste von Blog-Kommentaren, die zwischen dem Prerendern des Blogbeitrags und seiner Ansicht veraltet sein kann. Dies könnte besonders problematisch sein, wenn die aktuelle Seite ein Admin-Bereich ist, in dem der Benutzer Spam-Kommentare löscht. Wenn der Benutzer dann zum Blogbeitrag navigiert, könnte er verwirrt sein, warum er immer noch die Spam-Kommentare sieht, die er gerade gelöscht hat.
- Benutzerspezifischer Status: Erwägen Sie das Beispiel der Verfolgung des Anmeldestatus über ein Cookie. Probleme wie die folgenden können auftreten:
  - Der Benutzer besucht `https://site.example/a` in Tab 1 und `https://site.example/b` in Tab 2, während er abgemeldet ist.
  - `https://site.example/b` rendert `https://site.example/c` voraus. Es wird in einem abgemeldeten Zustand vorgeneriert.
  - Der Benutzer meldet sich in `https://site.example` in Tab 1 an.
  - Der Benutzer wechselt zu Tab 2 und klickt auf den Link zu `https://site.example/c`, der die vorgenerierte Seite aktiviert.
  - Tab 2 zeigt eine abgemeldete Ansicht von `https://site.example/c`, was den Benutzer verwirrt, da er dachte, er sei angemeldet.

Benutzerspezifische Statusprobleme können bei anderen Benutzereinstellungen auftreten, zum Beispiel Spracheinstellungen, Dunkelmodus-Präferenzen oder das Hinzufügen von Artikeln zu einem Warenkorb. Sie können auch auftreten, wenn nur ein einzelner Tab beteiligt ist:

- Angenommen, der Benutzer besucht `https://site.example/product`.
- `https://site.example.com/product` rendert `https://site.example.com/cart` voraus. Es wird mit 0 Artikeln im Warenkorb vorgeneriert.
- Der Benutzer klickt auf die "In den Warenkorb"-Schaltflächen, was eine Abrufanfrage auslöst, um den Artikel in den Warenkorb des Benutzers hinzuzufügen (ohne Seiten-Aktualisierung).
- Der Benutzer klickt auf den Link zu `https://site.example.com/cart`, der die vorgenerierte Seite aktiviert.
- Der Benutzer sieht einen leeren Warenkorb, obwohl er gerade etwas hinzugefügt hat.

Die beste Abschwächung für diese Fälle, und in der Tat wann immer Inhalte mit dem Server aus dem Gleichgewicht geraten können, ist es, dass Seiten sich bei Bedarf selbst aktualisieren. Zum Beispiel könnte ein Server die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) verwenden, oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einen [`WebSocket`](/de/docs/Web/API/WebSocket). Seiten können sich dann angemessen aktualisieren, einschließlich spekulativ geladener Seiten, die noch nicht aktiviert wurden.

## Sitzungsverlaufsverhalten für vorgenerierte Dokumente

Die Aktivierung eines Prerendering/vorgenerierten Dokuments verhält sich aus der Sicht des Endbenutzers wie jede konventionelle Navigation. Das aktivierte Dokument wird im Tab angezeigt und dem Sitzungshistor hinzugefügt, und alle vorhandenen Einträge im Vorlaufverlauf werden beschnitten. Jegliche Navigationen, die vor der Aktivierung im Prerendering-Browsing-Kontext stattfinden, wirken sich nicht auf den Sitzungshistor aus.

Aus der Sicht des Entwicklers kann ein Prerendering-Dokument als ein **trivialer Sitzungshistor** betrachtet werden, bei dem nur ein Eintrag — der aktuelle Eintrag — existiert. Alle Navigationen innerhalb des Prerendering-Kontexts werden effektiv ersetzt.

Während API-Funktionen, die auf Sitzungsverläufen operieren (zum Beispiel [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation)), innerhalb von Prerendering-Dokumenten aufgerufen werden können, operieren sie nur auf dem trivialen Sitzungshistor der Kontext. Folglich nehmen Prerendering-Dokumente nicht an dem gemeinsamen Sitzungshistor ihrer verweisenden Seite teil. Zum Beispiel können sie nicht ihren Verweiser durch [`History.back()`](/de/docs/Web/API/History/back) navigieren.

Dieses Design stellt sicher, dass Benutzer die erwartete Erfahrung haben, wenn sie die Zurück-Schaltfläche verwenden – zum Beispiel, dass sie zu dem letzten zurückgebracht werden, was sie gesehen haben. Sobald ein Prerendering-Dokument aktiviert ist, wird nur ein einzelner Sitzungshistor-Eintrag dem gemeinsamen Sitzungshistor hinzugefügt, wobei alle vorherigen Navigationen, die im Prerendering-Browsing-Kontext erfolgt sind, ignoriert werden. Ein Schritt zurück im gemeinsamen Sitzungshistor – zum Beispiel durch Drücken der Zurück-Schaltfläche – bringt den Benutzer zur verweisenden Seite zurück.

## Plattformfunktionen, die während des Prerenderings verschoben oder eingeschränkt sind

Da eine vorgenerierte Seite in einem versteckten Zustand geöffnet wird, werden mehrere API-Funktionen, die potenziell aufdringliche Verhaltensweisen verursachen, in diesem Zustand nicht aktiviert und stattdessen bis zur Aktivierung **verschoben**. Andere Web-Plattform-Funktionen, die problematisch sind, wenn Prerendering durchgeführt wird, sind insgesamt eingeschränkt. Dieser Abschnitt bietet Details darüber, welche Funktionen verschoben oder eingeschränkt sind.

> [!NOTE]
> In den wenigen Fällen, in denen das Verschieben und Einschränken nicht möglich ist, wird das Prerender abgesagt.

### Asynchrone API-Verschiebung

Das Verschieben bedeutet, dass die API-Funktion umgehend ein schwebendes Versprechen zurückgibt und dann nichts tut, bis die Seite aktiviert ist. Nach der Aktivierung funktioniert die Funktion normal und das Versprechen wird normal aufgelöst oder verworfen.

Die Ergebnisse der folgenden asynchronen Funktionen werden in vorgenerierten Dokumenten bis zu ihrer Aktivierung verschoben:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignis
- [Geolocation API](/de/docs/Web/API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API: Die Wiedergabeposition wird nicht voranschreiten, während das enthaltene Dokument prerendering ist
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (und die veraltete [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) Version), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Notifications API](/de/docs/Web/API/Notifications_API): [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor, [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Storage API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): [`AudioContext`](/de/docs/Web/API/AudioContext)s dürfen nicht starten, während das enthaltene Dokument prerendering ist
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

Die folgenden Funktionen werden in Dokumenten, die nicht aktiviert sind, automatisch fehlschlagen oder nicht funktionieren.

APIs, die {{Glossary("transient_activation", "transiente Aktivierung")}} oder {{Glossary("sticky_activation", "feste Aktivierung")}} erfordern:

- Bestätigungsdialoge, die durch das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis generiert werden
- Das Auslösen von Ereignissen in der [Zwischenablage-API](/de/docs/Web/API/Clipboard_API).
- [Dateisystem-API](/de/docs/Web/API/File_System_API): [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker), [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker), [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [Vollbild-API](/de/docs/Web/API/Fullscreen_API): [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static)
- [Tastatur-API](/de/docs/Web/API/Keyboard_API): [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) (die Vollbild erfordert)
- [Zahlungsanfrage-API](/de/docs/Web/API/Payment_Request_API): [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
- [Präsentations-API](/de/docs/Web/API/Presentation_API): [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start)
- [Mauszeiger-Sperre-API](/de/docs/Web/API/Pointer_Lock_API): [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Bildschirmaufnahme-API](/de/docs/Web/API/Screen_Capture_API): [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Webfreigabe-API](/de/docs/Web/API/Web_Share_API): [`Navigator.share()`](/de/docs/Web/API/Navigator/share)
- [`Window.open()`](/de/docs/Web/API/Window/open)

APIs, die erfordern, dass das enge Dokument im Fokus ist:

- [Zwischenablage-API](/de/docs/Web/API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)

APIs, die erfordern, dass der [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) des enthaltenen Dokuments `"visible"` ist:

- [Bild-im-Bild-API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert, dass der Sichtbarkeitsstatus des enthaltenen Dokuments `"visible"` ist, _oder_ {{Glossary("transient_activation", "transiente Aktivierung")}})
- [Bildschirm-Wachschutz-API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Andere eingeschränkte Funktionen

- Download-Links, d.h. {{htmlelement("a")}} und {{htmlelement("area")}}-Elemente mit dem `download`-Attribut, werden ihre Downloads bis zum Abschluss des Prerenderns verzögern.
- Keine kreuzseitigen Navigationen: Jedes Prerendering-Dokument, das auf eine andere Seite navigiert, wird sofort verworfen, bevor eine Anfrage an diese andere Seite gesendet wird.
- Eingeschränkte URLs: Prerendering-Dokumente können keine nicht-HTTP(S)-Top-Level-URLs enthalten. Das Einschließen der folgenden URL-Typen führt dazu, dass das Prerendering sofort verworfen wird:
  - [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
  - [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data)
  - `blob:` URLs
  - `about:` URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungsspeicherung: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, aber das Verhalten ist sehr spezifisch, um das Brechen von Seiten zu vermeiden, die erwarten, dass nur eine Seite den Sitzungsspeicher des Tabs zur gleichen Zeit zugreift. Eine vorgenerierte Seite beginnt daher mit einem Klon des Sitzungsspeicherzustands des Tabs, der bei seiner Erstellung vorliegt. Bei der Aktivierung wird der Klon des Speichers der vorgenerierten Seite verworfen, und der Hauptspeicherzustand des Tabs wird stattdessen verwendet. Seiten, die Sitzungsspeicherung verwenden, können das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis verwenden, um zu erkennen, wann dieser Speicheraustausch erfolgt.
- [`Window.print()`](/de/docs/Web/API/Window/print): Jegliche Aufrufe dieser Methode werden ignoriert.
- "Einfache Dialogmethoden" sind wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) gibt sofort ohne Dialoganzeige zurück.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) gibt sofort `false` ohne Dialoganzeige zurück.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) gibt sofort eine leere Zeichenkette (`""`) ohne Dialoganzeige zurück.
- Dedizierte/geteilte Worker-Skripte werden geladen, aber ihre Ausführung wird bis zur Aktivierung des vorgenerierten Dokuments verschoben.
- Kreuzherkunftsseitige {{htmlelement("iframe")}}-Ladevorgänge werden beim Prerendering bis nach der Aktivierung verzögert.

## Schnittstellen

Die Speculation Rules API definiert keine eigenen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument derzeit im Prozess des Prerenderings ist.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis {{experimental_inline}}
  - : Wird in einem vorgenerierten Dokument ausgelöst, wenn es aktiviert wird (d.h. der Benutzer die Seite ansieht).
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Start des Prerenderings eines Dokuments und seiner Aktivierung darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) `"navigational-prefetch"`-Wert {{experimental_inline}}
  - : Signalisiert, dass der Typ eines Leistungs-Eintrags ein Prefetch ist.

## HTTP-Header

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'`-Wert {{experimental_inline}}
  - : Wird verwendet, um die Verwendung von `<script type="speculationrules">` zuzulassen, um Spekulationsregeln auf dem angeforderten Dokument zu definieren.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die Spekulationsregel-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregel-Set des Dokuments hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel festgelegt, um sich in die Verwendung verschiedener risikoreicher Lade-Modi einzuwilligen. Zum Beispiel erfordert kreuzherkunftsseitiges, gleichseitiges Prerendering einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## HTML-Funktionen

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um eine Reihe von Prefetch- und/oder Prerender-Spekulationsregeln innerhalb des aktuellen Dokuments zu definieren, die zu dem Spekulationsregel-Set des Dokuments hinzugefügt werden.

## Beispiele

Sie können ein [vollständiges Prerender-Demo hier finden](https://prerender-demos.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Navigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von Spekulationsregeln und anderen ähnlichen Leistungsverbesserungsfunktionen.
