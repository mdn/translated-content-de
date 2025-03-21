---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Speculation Rules API** ist entwickelt worden, um die Leistung für zukünftige Navigationen zu verbessern. Sie zielt auf Dokument-URLs abstatt auf spezifische Ressourcendateien und macht daher Sinn für Multi-Page Applications (MPAs) statt Single-Page Applications (SPAs).

Die Speculation Rules API bietet eine Alternative zu dem weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) Feature und soll das Chrome-exklusive, veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender) Feature ersetzen. Sie bietet viele Verbesserungen gegenüber diesen Technologien sowie eine ausdrucksstärkere, konfigurierbare Syntax zum Spezifizieren, welche Dokumente vorgeladen oder vorgerendert werden sollen.

> [!NOTE]
> Die Speculation Rules API behandelt keine Subresource-Prefetches; dafür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Nutzung

Spekulationsregeln können innerhalb von Inline-Elementen [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) und externen Textdateien, die im {{httpheader("Speculation-Rules")}} Antwort-Header referenziert werden, spezifiziert werden. Die Regeln werden als JSON-Struktur spezifiziert.

Beispiel eines Skripts:

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

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen explizit in der {{httpheader("Content-Security-Policy")}} [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive erlaubt werden, wenn die Seite diese enthält. Dies erfolgt durch Hinzufügen einer der `'inline-speculation-rules'` Quellen, einer Hash-Quelle oder einer Nonce-Quelle.

Beispiel eines HTTP-Headers:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das JSON der Spekulationsregeln enthält, kann einen beliebigen gültigen Namen und eine beliebige Extension haben, muss aber mit einem `application/speculationrules+json` MIME-Typ ausgeliefert werden.

> [!NOTE]
> Regeln können gleichzeitig mit einem Inline-Skript und dem HTTP-Header spezifiziert werden — alle Regeln, die auf ein Dokument angewendet werden, werden analysiert und zur Spekulationsregelliste des Dokuments hinzugefügt.

Sie spezifizieren ein unterschiedliches Array zur Aufnahme der Regeln für jeden spekulativen Laden-Typ (zum Beispiel `"prerender"` oder `"prefetch"`). Jede Regel wird in einem Objekt angegeben, zum Beispiel mit einer Liste von Ressourcen, die geholt werden sollen, plus Optionen wie eine explizite {{httpheader("Referrer-Policy")}} Einstellung für jede Regel. Beachten Sie, dass vorgerenderte URLs auch vorgeladen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Nutzung des Prefetches

Das Einfügen von `prefetch`-Regeln innerhalb eines `<script type="speculationrules">` Elements oder eines `Speculation-Rules` Headers wird dazu führen, dass unterstützende Browser den Antwortkörper der referenzierten Seiten herunterladen, aber keine der von der Seite referenzierten Subresources. Wenn zu einer vorgeladenen Seite navigiert wird, wird sie viel schneller gerendert als wenn sie nicht vorgeladen worden wäre.

Die Ergebnisse werden in einem pro-Dokument-Arbeitsspeicher-Cache behalten. Alle zwischengespeicherten Prefetches werden verworfen, wenn Sie die aktuelle Seite verlassen, ausgenommen ein vorgeladenes Dokument, zu dem Sie dann navigieren.

Das bedeutet, dass, wenn Sie etwas vorladen, zu dem der Benutzer nicht navigiert, es im Allgemeinen eine Verschwendung von Ressourcen ist, obwohl das Ergebnis den HTTP-Cache füllen kann, wenn es die Header erlauben. Das gesagt, die anfänglichen Kosten eines Prefetches sind viel geringer als die anfänglichen Kosten eines Prerendens, daher wird empfohlen, umfangreich Prefetching einzusetzen, zum Beispiel das Vorladen aller bedeutenden Seiten auf Ihrer Seite, vorausgesetzt sie sind sicher zum Vorladen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für mehr Details).

Same-Site und Cross-Site Prefetches funktionieren, aber Cross-Site Prefetches sind limitiert (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen beiden). Aus Datenschutzgründen funktionieren Cross-Site Prefetches derzeit nur, wenn der Benutzer für die Zielseite keine Cookies gesetzt hat — wir wollen vermeiden, dass Seiten die Benutzeraktivität über vorgeladene Seiten (die sie möglicherweise nie tatsächlich besuchen) verfolgen, basierend auf zuvor gesetzten Cookies.

> [!NOTE]
> In der Zukunft wird eine Opt-In für Cross-Site Prefetches über den {{httpheader("Supports-Loading-Mode")}} Header bereitgestellt werden, aber dies wurde zum Zeitpunkt der Erstellung nicht implementiert (nur Cross-Origin, Same-Site [Prerendering](#nutzung_des_prerenderings) Opt-In war verfügbar).

Für Browser, die es unterstützen, sollte Spekulationsregeln-Prefetch älteren Prefetch-Mechanismen vorgezogen werden, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"` Option. Weil wir wissen, dass Spekulationsregeln-Prefetch für Navigationen ist, nicht für allgemeines Ressourcen-Prefetching:

- Es kann für Cross-Site-Navigationen verwendet werden, im Gegensatz zu `<link rel="prefetch">`.
- Es wird nicht durch {{httpheader("Cache-Control")}} Header blockiert, wohingegen `<link rel="prefetch">` dies oft tut.

Zudem:

- Senkt Spekulationsregeln-Prefetch automatisch die Priorität, wenn nötig (`fetch()` tut dies nicht).
- Respektiert es die Konfiguration des Benutzers. Zum Beispiel passiert Prefetching nicht, wenn das Gerät des Benutzers im Energiesparmodus oder Datensparmodus ist.
- Speichert die vorgeladenen Ressourcen in einem pro-Dokument-Arbeitsspeicher-Cache anstelle des HTTP-Caches, was möglicherweise zu etwas schnellerem Prefetching führt.

### Nutzung des Prerenderings

Das Einfügen von `prerender`-Regeln innerhalb eines `<script type="speculationrules">` Elements oder eines `Speculation-Rules` Headers wird dazu führen, dass unterstützende Browser den Inhalt in einen unsichtbaren Tab holen, rendern und laden, der in einem pro-Dokument-Arbeitsspeicher-Cache gespeichert wird. Dies beinhaltet das Laden aller Subresources, das Ausführen aller JavaScripts und sogar das Laden von Subresources und das Durchführen von Datenabfragen, die von JavaScripts gestartet wurden. Jegliche zwischengespeicherten Prerendere und ihre Subresources werden verworfen, wenn Sie die aktuelle Seite verlassen, ausgenommen ein gerendertes Dokument, zu dem Sie dann navigieren.

Zukünftige Navigationen zu einer vorgerenderten Seite werden nahezu sofort erfolgen. Der Browser aktiviert den unsichtbaren Tab, anstatt den üblichen Navigationsprozess durchzuführen und ersetzt die alte Vordergrundseite mit der vorgerenderten Seite. Wenn eine Seite aktiviert wird, bevor sie vollständig vorgerendert ist, wird sie in ihrem aktuellen Zustand aktiviert und dann weiter geladen, was bedeutet, dass Sie immer noch eine erhebliche Leistungsverbesserung sehen werden.

Prerendering verwendet Speicher und Netzwerkbandbreite. Wenn Sie etwas prerendern, zu dem der Benutzer nicht navigiert, werden diese verschwendet (obwohl das Ergebnis den HTTP-Cache füllen kann, wenn die Header es erlauben, wodurch eine spätere Verwendung möglich ist). Die anfänglichen Kosten eines Prerenders sind viel größer als die anfänglichen Kosten eines Prefetches, und andere Bedingungen könnten den Inhalt auch unsicher für Prerendering machen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Details). Es wird empfohlen, Prerendering sparsamer einzusetzen, bewusst in Fällen, in denen eine hohe Wahrscheinlichkeit besteht, dass zur Seite navigiert wird, und Sie glauben, dass der Vorteil für die Benutzererfahrung die zusätzlichen Kosten wert ist.

> [!NOTE]
> Zum Veranschaulichen der potenziellen Ressourcenverschwendung: Ein Prerender verwendet etwa so viele Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden automatisch während des Prerendering/erst nach der Aktivierung zurückgestellt. Siehe [Plattform-Funktionen, die während des Prerendering zurückgestellt oder eingeschränkt werden](#plattformmerkmale,_die_während_des_prerendering_zurückgestellt_oder_eingeschränkt_sind) für weitere Details.

Prerendering ist standardmäßig auf gleichherkommende Dokumente beschränkt. Cross-Origin, Same-Site Prerendering ist möglich — es erfordert, dass das Navigationsziel mit dem {{httpheader("Supports-Loading-Mode")}} Header und einem Wert von `credentialed-prerender` eingeht. Cross-Site Prerendering ist derzeit nicht möglich.

Für Browser, die es unterstützen, sollte Spekulationsregeln-Prerender älteren Prerender-Mechanismen vorgezogen werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender):

- `<link rel="prerender">` ist Chrome-spezifisch und wurde nie standardisiert, und das Chrome-Entwicklungsteam ist dabei, es abzuschaffen.
- Es lädt Subresources, die über JavaScript geladen werden, während `<link rel="prerender">` dies nicht tut.
- Es wird durch {{httpheader("Cache-Control")}} Einstellungen nicht blockiert, während `<link rel="prerender">` dies oft tut.
- Spekulationsregeln-Prerender sollte als ein Hinweis und eine progressive Verbesserung behandelt werden. Im Gegensatz zu `<link rel="prerender">` ist es ein spekulativer Hinweis und der Browser kann sich entscheiden, den Hinweis nicht zu beachten, basierend auf Benutzereinstellungen, aktuellem Speicherverbrauch oder anderen Heuristiken.

### Spekulationsregeln API-Funktionsprüfung

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

## Erkennung von vorgeladenen und vorgerenderten Seiten

Dieser Abschnitt untersucht verschiedene Möglichkeiten, um zu erkennen, ob eine angeforderte Seite vorgeladen oder vorgerendert wurde.

### Serverseitige Erkennung

Anfragen zu vorgeladenen und vorgerenderten Seiten werden mit dem {{httpheader("Sec-Purpose")}} Anfrage-Header gesendet:

Für Prefetch:

```http
Sec-Purpose: prefetch
```

Für Prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können basierend auf diesem Header antworten, zum Beispiel um spekulative Ladeanforderungen zu protokollieren, anderen Inhalt zurückzugeben oder sogar spekulatives Laden zu verhindern. Wenn ein Nicht-Erfolg-Antwortcode zurückgegeben wird (jeder HTTP-Status außerhalb des 200-299-Bereichs nach Weiterleitungen), wird die Seite nicht vorgeladen/vorgerendert. Zusätzlich verhindern die Statuscodes 204 und 205 Prerendering (verhindern aber nicht Prefetch).

Die Verwendung eines Nicht-Erfolg-Codes (zum Beispiel 503) ist der einfachste Weg, serverseitig spekulatives Laden zu verhindern, obwohl es in der Regel eine bessere Vorgehensweise ist, den Prefetch/Prerender zuzulassen und JavaScript zu verwenden, um Aktionen zu verzögern, die nur ausgeführt werden sollen, wenn die Seite tatsächlich angezeigt wird.

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

Diese Technik ist nützlich, wenn Sie die Leistung messen oder wenn Sie Aktionen verzögern möchten, die Probleme verursachen könnten, wenn sie während des Prefetchings stattfinden (siehe [Unsicheres Prefetching](#unsicheres_prefetching)).

### JavaScript-Prerender-Erkennung

Um während des Prerenderings eine Aktivität durchzuführen, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft überprüfen. Beispielsweise könnten Sie einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorgerendertes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Zeit zwischen dem Beginn des Prerenders und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl für die Erkennung von vorgerenderten _als auch_ prerendereden Seiten verwendet werden:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vorgerenderte Seite durch das Ansehen der Seite durch den Benutzer aktiviert wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die bisher standardmäßig beim Laden der Seite gestartet wurden, die Sie jedoch bis zum Ansehen der Seite durch den Benutzer verzögern möchten. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion einmal auszuführen, wenn das Prerendering auf einer vorgerenderten Seite abgeschlossen ist, oder führt es sofort auf einer nicht vorgerenderten Seite aus:

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

Dieser Abschnitt behandelt Bedingungen, auf die Sie achten sollten, unter denen Prefetching und/oder Prerendering **unsicher** ist. Das bedeutet, dass das Prefetching/Prerendering von Seiten, die diese Bedingungen aufweisen, in Ihrem Code abgeschwächt oder vollständig vermieden werden müssen.

### Unsicheres Prefetching

Wie bereits erwähnt, empfehlen wir, Prefetching breit einzusetzen, da das Risiko-Nutzen-Verhältnis recht gering ist — das Potenzial für Ressourcenverschwendung ist minimal, und die Leistungsverbesserungen können erheblich sein. Sie müssen jedoch sicherstellen, dass vorgeladene Seiten den Ablauf Ihrer Anwendung nicht beeinträchtigen.

Wenn ein Prefetch durchgeführt wird, lädt der Browser den Antwortkörper der referenzierten Seite über eine einzelne GET-Anfrage herunter, die der Benutzer zu einem späteren Zeitpunkt navigieren kann. Probleme können speziell dann auftreten, wenn die URL der Anfrage einen serverinitiierten Nebeneffekt ausführt, den Sie nicht möchten, dass er passiert, bis die URL navigiert wird.

Beispiele könnten sein:

- Abmelde-URLs.
- Sprachwechsel-URLs.
- "In den Warenkorb" URLs.
- Anmeldefluss-URLs, bei denen der Server eine SMS sendet, zum Beispiel als Einmalpasswort (OTP).
- URLs, die die Nutzungszahlen eines Benutzers erhöhen, wie das Aufbrauchen ihres monatlichen Freizeilenvolumens oder das Starten des Timers für ihre monatlichen Minuten.
- URLs, die serverseitiges Ad-Conversion-Tracking initiieren.

Solche Probleme können auf dem Server durch das Beobachten des {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} Headers während der Anfragen verhindert werden, wobei spezifischer Code ausgeführt wird, um problematische Funktionalitäten zu verzögern. Später können Sie bei der tatsächlichen Navigation zur Seite die verzögerte Funktionalität bei Bedarf per JavaScript einleiten.

> [!NOTE]
> Weitere Details zum Erkennungscode finden Sie im Abschnitt [Erkennung von vorgeladenen und vorgerenderten Seiten](#erkennung_von_vorgeladenen_und_vorgerenderten_seiten).

Es ist auch potenziell riskant, ein Dokument vorzuladen, dessen server-gerenderte Inhalte sich aufgrund von Aktionen ändern, die der Benutzer auf der aktuellen Seite durchführen kann. Dies könnte beispielsweise Flash-Sale-Seiten oder Sitzpläne von Kinosälen umfassen. Testen Sie solche Fälle sorgfältig und mindern Sie solche Probleme, indem Sie den Inhalt aktualisieren, sobald die Seite geladen ist. Siehe [Server-rendered varying state](#server-gerenderter_variierender_zustand) für weitere Details zu diesen Fällen.

> [!NOTE]
> Browser werden vorgeladene Seiten für kurze Zeit zwischenspeichern (Chrome zum Beispiel speichert sie für 5 Minuten), bevor sie verworfen werden, so dass Ihre Nutzer in jedem Fall möglicherweise bis zu 5 Minuten alte Inhalte sehen könnten.

Prefetching ist sicher, wenn alle Nebenwirkungen des Abrufs der Seite aus der Ausführung von JavaScript resultieren, da das JavaScript erst bei der Aktivierung ausgeführt wird.

Ein letzter Tipp ist, die in Ihrer {{Glossary("robots.txt", "robots.txt")}} Datei als verboten gelisteten URLs zu überprüfen — normalerwiese zeigen diese URLs auf Seiten, die nur von authentifizierten Benutzern zugänglich sind und daher nicht in Suchmaschinenergebnissen erscheinen sollten. Viele davon werden unbedenklich sein, aber es kann ein guter Ort sein, um URLs zu finden, die unsicher für das Prefetching sind (d.h. sie weisen die oben beschriebenen Bedingungen auf).

### Unsicheres Prerendering

Prerendering ist risikoreicher als Prefetching zu implementieren und sollte daher sparsamer erfolgen, in Fällen, in denen es sich wirklich lohnt. Es gibt mehr unsichere Bedingungen, auf die Sie beim Prerendering achten müssen, sodass, während der Vorteil höher ist, auch das Risiko höher ist.

Wenn ein Prerender durchgeführt wird, holt sich der Browser die URL via GET und rendert und lädt den Inhalt in einen unsichtbaren Tab. Dies umfasst das Ausführen des Inhalts JavaScript und das Laden sämtlicher Subresources, einschließlich derjenigen, die durch JavaScript abgerufen werden. Inhalt kann potenziell unsicher zum Prerendern sein, wenn eines der folgenden Bedingungen beobachtet wird:

- Die URL ist [unsicher zum Prefetchen](#unsicheres_prefetching). Lesen Sie den vorherigen Abschnitt zuerst, wenn Sie ihn noch nicht gemacht haben, und verstehen Sie, dass diese Bedingungen auch für unsicheres Prerendering gelten.
- Das JavaScript der Seite modifiziert den clientseitigen Speicher (zum Beispiel [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) beim Laden in einer Weise, die verwiesene Effekte in anderen, nicht-vorgerenderten Seiten verursachen kann, die der Benutzer gerade ansieht.
- Die Seite führt JavaScript aus oder lädt Bilder, die Nebeneffekte verursachen, wie das Senden von Analysen, das Aufzeichnen von Anzeigeneindrücken oder auf andere Weise den Status der Anwendung modifizieren, als ob der Benutzer bereits mit ihr interagiert hätte. Auch dies kann den Ablauf der Anwendung beeinträchtigen oder zu falschem Leistungs- oder Nutzungsbericht führen. Siehe [Server-rendered varying state](#server-gerenderter_variierender_zustand) für mehr Details zu solchen Anwendungsszenarien.

Um solche Probleme abzuschwächen, können Sie folgende Techniken verwenden:

- Beobachten Sie den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} Header auf dem Server, sobald die Anfragen hereinkommen, und dann führen Sie spezifischen Code aus, um problematische Funktionen zu verzögern.
- Verwenden Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis, um zu erkennen, wann die vorgerenderte Seite tatsächlich aktiviert wird, und führen Sie als Ergebnis Code aus. Dies ist in zwei Fällen nützlich:
  - Verzögern von Code, der problematisch sein könnte, wenn er ausgeführt wird, bevor die Seite angesehen wird. Zum Beispiel möchten Sie möglicherweise warten, bis nach der Aktivierung clientspezifischer Speicher oder serverseitiger Status mit JavaScript aktualisiert werden, um zu vermeiden, dass die Benutzeroberfläche und der Anwendungsstatus asynchron sind, beispielsweise ein Einkaufswagen, der keine Artikel anzeigt, obwohl der Benutzer welche hinzugefügt hat.
  - Wenn das oben Genannte nicht möglich ist, könnten Sie dennoch Code nach der Aktivierung erneut ausführen, um die Anwendung wieder auf den neuesten Stand zu bringen. Beispielsweise könnte eine sehr dynamische Flash-Sale-Seite auf Content-Updates angewiesen sein, die durch eine Drittanbieter-Bibliothek bereitgestellt werden. Wenn Sie die Updates nicht verzögern können, können Sie dennoch neue Updates erhalten, sobald der Benutzer die Seite anzeigt. Vorgerenderte Seiten können in Echtzeit mit der [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder über einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einen [`WebSocket`](/de/docs/Web/API/WebSocket) aktualisiert werden. Dies garantiert, dass der Benutzer aktuelle Inhalte nach der Prerendering-Aktivierung sieht.
- Verwalten Sie Ihre Drittanbieter-Analyseskripts sorgfältig — wenn möglich, verwenden Sie skripte, die sich ihrer Prerendering-Bewusstheit sind (zum Beispiel verwenden Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft, um das Ausführen auf Prerendering-Seiten zu verzögern), wie Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden von Inhalten von Cross-Origin {{htmlelement("iframe")}}s während des Prerenderings verzögert wird, bis die Aktivierung erfolgt. Dies geschieht, um Fehler zu vermeiden, die durch das Laden von Cross-Origin-Pages entstehen, die sich ihres Prerenderings nicht bewusst sind, und um Komplexitäten bezüglich der Frage zu vermeiden, welche Anmeldeinformationen und Speicherelemente diesen Rahmen zugänglich gemacht werden sollen. Dies bedeutet, dass Benutzer in einigen Fällen anfangs leere Frames sehen können, aber es bedeutet auch, dass die meisten Drittanbieter-Widgets wie Ad-Tech während des Prerenderings sicher verwendet werden können.
  - Für Skripts von Drittanbietern, die sich nicht bewusst sind, dass das Prerendering blockiert ist, vermeiden Sie deren Laden, bis nach der Aktivierung mithilfe des [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereigntis, wie zuvor erwähnt.

### Server-gerenderter variierender Zustand

Es gibt zwei Haupttypen des server-gerenderten Status, über die man sich Sorgen machen sollte: **veralteter Zustand** und **benutzerspezifischer Zustand**. Dies kann sowohl unsicheres Prefetching als auch Prerendering verursachen.

- Veralteter Zustand: Betrachten Sie das Beispiel einer servermäßig gerenderten Liste von Blog-Kommentaren, die zwischen dem Prerendern des Blogposts und dessen Ansehen veraltet sein kann. Dies könnte besonders problematisch sein, wenn die aktuelle Seite ein Administrationsbereich ist, in dem der Benutzer Spam-Kommentare löscht. Wenn der Benutzer dann zum Blog-Post navigiert, könnte er verwirrt darüber sein, warum er die Spam-Kommentare sieht, die er gerade gelöscht hat.
- Benutzerspezifischer Zustand: Betrachten Sie das Beispiel der Verfolgung des Anmeldestatus von Benutzern über ein Cookie. Probleme können wie folgt auftreten:
  - Der Benutzer besucht `https://site.example/a` in Tab 1 und `https://site.example/b` in Tab 2, während er abgemeldet ist.
  - `https://site.example/b` rendert `https://site.example/c` vor. Es wird in einem abgemeldeten Zustand vorgerendert.
  - Der Benutzer meldet sich in `https://site.example` in Tab 1 an.
  - Der Benutzer wechselt zu Tab 2 und klickt auf den Link zu `https://site.example/c`, der die vorgerenderte Seite aktiviert.
  - Tab 2 zeigt eine abgeschlossene Ansicht von `https://site.example/c` an, was den Benutzer verwirrt, da er dachte, er sei angemeldet.

Benutzerspezifische Zustandsprobleme können für andere Benutzereinstellungen auftreten, beispielsweise Spracheinstellungen, Dark-Mode-Präferenzen oder das Hinzufügen von Artikeln zu einem Warenkorb. Sie können auch auftreten, wenn nur ein einzelner Tab beteiligt ist:

- Angenommen der Benutzer besucht `https://site.example/product`.
- `https://site.example.com/product` rendert `https://site.example.com/cart` vor. Es rendert mit 0 Artikeln im Warenkorb.
- Der Benutzer klickt auf die "In den Warenkorb"-Buttons, was eine Abfragung zum Hinzufügen des Artikels zum Benutzer-Warenkorb initiert (ohne das Neuladen der Seite).
- Der Benutzer klickt auf den Link zu `https://site.example.com/cart`, was die gerenderte Seite aktiviert.
- Der Benutzer sieht einen leeren Warenkorb, obwohl er gerade etwas hinzugefügt hat.

Die beste Vorbeugung gegen diese Fälle und in der Tat zu jeder Zeit, wenn Inhalte nicht synchron mit dem Server gelangen können, ist, dass sich Seiten bei Bedarf selbst aktualisieren. Zum Beispiel könnte ein Server die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einen [`WebSocket`](/de/docs/Web/API/WebSocket) verwenden. Seiten können sich dann entsprechend aktualisieren, einschließlich spekulativ geladener Seiten, die noch nicht aktiviert wurden.

## Sitzungsverhalten für vorgerenderte Dokumente

Die Aktivierung eines prerendered/prerendering Dokuments verhält sich wie jede herkömmliche Navigation aus Sicht des Endbenutzers. Das aktivierte Dokument wird im Tab angezeigt und der Sitzungsgeschichte hinzugefügt, und alle vorhandenen Weitergeschichten-Einträge werden gekürzt. Alle Navigationen, die im Prerendering Browsing-Kontext _vor_ der Aktivierung stattfinden, wirken sich nicht auf die Sitzungsgeschichte aus.

Aus der Sicht des Entwicklers kann ein Prerendering-Dokument als eine **triviale Sitzungsgeschichte** betrachtet werden, bei der nur ein einziger Eintrag — der aktuelle Eintrag — existiert. Alle Navigationen innerhalb des Prerendering-Kontexts werden effektiv ersetzt.

Während API-Funktionen, die auf Sitzungsgeschichte arbeiten (zum Beispiel [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation)) innerhalb von Prerendering-Dokumenten aufgerufen werden können, arbeiten sie nur an der trivialen Sitzungsgeschichte des Kontexts. Folglich nehmen Prerendering-Dokumente nicht an der gemeinsamen Sitzungsgeschichte ihrer verweisenden Seite teil. Zum Beispiel können sie ihren Referrer nicht über [`History.back()`](/de/docs/Web/API/History/back) navigieren.

Dieses Design stellt sicher, dass Benutzer die erwartete Erfahrung erhalten, wenn sie den Rückwärtspfeil verwenden — das heißt, dass sie zurück zu dem letzten, was sie gesehen haben, gelangen. Sobald ein Prerendering-Dokument aktiviert wird, wird nur ein einzelner Sitzungsgeschichteeintrag an die gemeinsame Sitzungsgeschichte angefügt, wobei alle vorherigen Navigationen, die im Prerendering-Browsing-Kontext stattgefunden haben, ignoriert werden. Ein Schritt zurück zu gehen in der gemeinsamen Sitzungsgeschichte — zum Beispiel, indem Sie den Rückwärtspfeil drücken — führt den Benutzer zurück zur verweisenden Seite.

## Plattformmerkmale, die während des Prerendering zurückgestellt oder eingeschränkt sind

Da eine vorgerenderte Seite in einem verborgenen Zustand geöffnet wird, werden mehrere API-Funktionalitäten, die potenziell intrusives Verhalten verursachen können, in diesem Zustand nicht aktiviert und sind stattdessen **zurückgestellt**, bis die Seite aktiviert wird. Andere Webplattform-Funktionen, die problematisch beim Prerendering sind, werden ganz eingeschränkt. Dieser Abschnitt bietet Details darüber, welche Merkmale zurückgestellt oder eingeschränkt sind.

> [!NOTE]
> In den wenigen Fällen, in denen Zurückstellung und Einschränkung nicht möglich sind, wird das Prerendering abgebrochen.

### Asynchrone API Zurückstellung

Zurückstellung bedeutet, dass die API-Funktion sofort ein ausstehendes Versprechen zurückgibt und dann nichts tut, bis die Seite aktiviert wird. Nach der Aktivierung läuft die Funktion wie gewohnt und das Versprechen wird wie gewohnt aufgelöst oder abgelehnt.

Die Ergebnisse der folgenden asynchronen Funktionen werden in vorgerenderten Dokumenten bis zur Aktivierung aufgeschoben:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignis
- [Geolocation API](/de/docs/Web/API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API: Die Wiedergabeposition wird nicht fortschreiten, während das enthaltende Dokument prerendert wird
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (und die ältere [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) Version), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Notifications API](/de/docs/Web/API/Notifications_API): [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor, [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Storage API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): [`AudioContext`](/de/docs/Web/API/AudioContext)s dürfen nicht gestartet werden, während das enthaltene Dokument prerendert wird
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

Die folgenden Features werden in Dokumenten, die nicht aktiviert sind, automatisch fehlschlagen oder nicht ausgeführt.

APIs, die {{Glossary("transient_activation", "transiente Aktivierung")}} oder {{Glossary("sticky_activation", "dauerhafte Aktivierung")}} erfordern:

- Bestätigungsdialoge, die durch das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Event erzeugt werden
- Das Auslösen von Events in der [Zwischenablage-API](/de/docs/Web/API/Clipboard_API).
- [Dateisystem-API](/de/docs/Web/API/File_System_API): [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker), [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker), [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [Vollbild-API](/de/docs/Web/API/Fullscreen_API): [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static)
- [Tastatur-API](/de/docs/Web/API/Keyboard_API): [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) (erfordert Vollbildschirm)
- [Payment Request API](/de/docs/Web/API/Payment_Request_API): [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
- [Präsentations-API](/de/docs/Web/API/Presentation_API): [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start)
- [Zeiger-Sperr-API](/de/docs/Web/API/Pointer_Lock_API): [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Bildschirmaufnahme-API](/de/docs/Web/API/Screen_Capture_API): [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Web Share API](/de/docs/Web/API/Web_Share_API): [`Navigator.share()`](/de/docs/Web/API/Navigator/share)
- [`Window.open()`](/de/docs/Web/API/Window/open)

APIs, die erfordern, dass das enthaltende Dokument fokussiert ist:

- [Zwischenablage-API](/de/docs/Web/API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)

APIs, die erfordern, dass der [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) des enthaltenden Dokuments "sichtbar" ist:

- [Bild-im-Bild-API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert den Sichtbarkeitsstatus des enthaltenden Dokuments auf "sichtbar" _oder_ {{Glossary("transient_activation", "transiente Aktivierung")}})
- [Bildschirmwach-Sperre-API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Weitere eingeschränkte Features

- Download-Links, d.h. {{htmlelement("a")}} und {{htmlelement("area")}} Elemente mit dem `download` Attribut, werden ihre Downloads verzögern, bis das Prerendering abgeschlossen ist.
- Keine Cross-Site Navigationen: Jedes Prerendering-Dokument, das zu einer anderen Seite navigiert, wird sofort verworfen, bevor eine Anfrage an diese andere Seite gesendet wird.
- Eingeschränkte URLs: Prerendering-Dokumente können keine nicht-HTTP(S) Top-Level-URLs hosten. Das Einfügen der folgenden URL-Typen führt dazu, dass das Prerendering sofort verworfen wird:
  - [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
  - [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data)
  - `blob:` URLs
  - `about:` URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungsspeicher: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, aber das Verhalten ist sehr spezifisch, um keine Websites zu unterbrechen, die erwarten, dass nur eine Seite auf den Sitzungsspeicher des Tabs gleichzeitig zugreift. Eine vorgerenderte Seite startet daher mit einem Klon des Sitzungsspeicherstatus des Tabs, ab wann sie erstellt wird. Nach der Aktivierung des Klons der vorgerenderten Seite wird verworfen, und der Hauptspeicherstatus des Tabs wird stattdessen verwendet. Seiten, die Sitzungsspeicher verwenden, können das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis nutzen, um zu erkennen, wann dieser Speicherungstausch erfolgt.
- [`Window.print()`](/de/docs/Web/API/Window/print): Alle Aufrufe dieser Methode werden ignoriert.
- "Einfache Dialogmethoden" sind wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) gibt sofort ohne Anzeige eines Dialogs zurück.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) gibt sofort `false` ohne Anzeige eines Dialogs zurück.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) gibt sofort einen leeren String (`""`) ohne Anzeige eines Dialogs zurück.
- Dedizierte/geteilte Worker-Skripte werden geladen, aber ihre Ausführung wird bis zur Aktivierung des vorgerenderten Dokuments aufgeschoben.
- Cross-origin {{htmlelement("iframe")}} Ladevorgänge werden während des Prerenderings bis nach der Aktivierung der Seite aufgeschoben.

## Schnittstellen

Die Speculation Rules API definiert keine eigenen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument sich derzeit im Prozess des Vorbereitens befindet.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis {{experimental_inline}}
  - : Ausgelöst bei einem vorgerenderten Dokument, wenn es aktiviert wird (d.h. der Benutzer die Seite ansieht).
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Start des Prerendering eines Dokuments und dessen Aktivierung darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) `"navigational-prefetch"` Wert {{experimental_inline}}
  - : Signalisiert, dass es sich bei der Art eines Leistungseintrags um ein Prefetch handelt.

## HTTP-Header

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'` Wert {{experimental_inline}}
  - : Wird verwendet, um die Verwendung von `<script type="speculationrules">` zu erlauben, um Spekulationsregeln für das abzurufende Dokument festzulegen.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen zeigen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zur Spekulationsregelmenge des Dokuments hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um verschiedene höher riskierende Lademoden zu verwenden. Zum Beispiel erfordert das Cross-Origin, Same-Site Prerendering einen `Supports-Loading-Mode` Wert von `credentialed-prerender`.

## HTML-Features

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um ein Set von Prefetch- und/oder Prerender Spekulationsregeln innerhalb des aktuellen Dokuments zu definieren, die zur Spekulationsregelmenge des Dokuments hinzugefügt werden.

## Beispiele

Sie finden eine [vollständige Demo zum Prerendering hier](https://prerender-demos.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von Spekulationsregeln und anderen ähnlichen Leistungsoptimierungsfunktionen.
