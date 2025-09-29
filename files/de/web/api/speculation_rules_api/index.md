---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 7878fd0b319d18b5b93c5084a03734d17a0f9b4f
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Spekulationsregeln API** wurde entworfen, um die Performance für zukünftige Navigationen zu verbessern. Sie zielt auf Dokument-URLs ab, nicht auf spezifische Ressourcendateien, und ist daher sinnvoll für Multi-Page-Anwendungen (MPAs) anstelle von Single-Page-Anwendungen (SPAs).

Die Spekulationsregeln API bietet eine Alternative zu der weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)-Funktion und ist dazu gedacht, die Chrome-exklusive, veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)-Funktion zu ersetzen. Sie bietet viele Verbesserungen gegenüber diesen Technologien sowie eine ausdrucksstärkere, konfigurierbare Syntax, um festzulegen, welche Dokumente vorgeladen oder vorgerendert werden sollen.

> [!NOTE]
> Die Spekulationsregeln API behandelt keine Subressourcenvorladungen; dafür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Verwendung

Spekulationsregeln können innerhalb von inline [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)-Elementen und externen Textdateien, die durch den {{httpheader("Speculation-Rules")}} Antwortheader referenziert werden, spezifiziert werden. Die Regeln werden als JSON-Struktur angegeben.

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

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen explizit in der {{httpheader("Content-Security-Policy")}} [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive erlaubt werden, wenn die Seite diese enthält. Dies erfolgt durch das Hinzufügen einer der `'inline-speculation-rules'` Quelle, einer Hash-Quelle oder einer Nonce-Quelle.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das Spekulationsregeln-JSON enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, muss jedoch mit einem `application/speculationrules+json` MIME-Typ bereitgestellt werden.

> [!NOTE]
> Regeln können sowohl mit einem Inline-Skript als auch mit dem HTTP-Header simultan spezifiziert werden – alle auf ein Dokument angewendeten Regeln werden geparst und der Spekulationsregelnliste des Dokuments hinzugefügt.

Sie spezifizieren ein unterschiedliches Array, um die Regeln für jeden spekulativen Ladetyp zu enthalten (zum Beispiel `"prerender"` oder `"prefetch"`). Jede Regel ist in einem Objekt enthalten, das zum Beispiel eine Liste von zu holenden Ressourcen spezifiziert, plus Optionen wie eine explizite {{httpheader("Referrer-Policy")}} Einstellung für jede Regel. Beachten Sie, dass vorgerenderte URLs ebenfalls vorgeladen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Verwendung von Prefetching

Das Einfügen von `prefetch`-Regeln in ein `<script type="speculationrules">`-Element oder einen `Speculation-Rules`-Header führt dazu, dass unterstützende Browser den Antwortkörper der referenzierten Seiten herunterladen, jedoch keine der von der Seite referenzierten Subressourcen. Wenn auf eine vorgeladene Seite navigiert wird, wird sie wesentlich schneller gerendert als wenn sie nicht vorgeladen wurde.

Die Ergebnisse werden in einem pro-Dokument-In-Memory-Cache gehalten. Alle gecachten Vorladungen werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich ein vorgeladenes Dokument, zu dem Sie dann navigieren.

Dies bedeutet, dass, wenn Sie etwas vorladen, zu dem der Benutzer nicht navigiert, dies im Allgemeinen eine Verschwendung von Ressourcen ist, obwohl das Ergebnis den HTTP-Cache füllen kann, wenn Header dies zulassen. Das gesagt, die Vorabkosten eines Prefetches sind viel kleiner als die Vorabkosten eines Prerenders, daher wird empfohlen, das Prefetching breit anzuwenden, zum Beispiel alle bedeutenden Seiten Ihrer Seite vorzuhalten, vorausgesetzt sie sind sicher vorzuholen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für mehr Details).

Same-Site und Cross-Site Prefetches funktionieren, aber Cross-Site Prefetches sind begrenzt (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung der Unterschiede zwischen den beiden). Aus Datenschutzgründen funktionieren Cross-Site Prefetches derzeit nur, wenn der Benutzer keine Cookies für die Zielseite gesetzt hat – wir möchten nicht, dass Seiten die Benutzeraktivität über vorgeladene Seiten (die sie unter Umständen nie besuchen) basierend auf vorher gesetzten Cookies verfolgen.

> [!NOTE]
> In Zukunft wird ein Opt-In für Cross-Site Prefetches über den {{httpheader("Supports-Loading-Mode")}} Header bereitgestellt, aber dies war zum Zeitpunkt des Schreibens noch nicht implementiert (nur ein Cross-Origin, Same-Site [Prerendering](#verwendung_von_prerendering) Opt-In war verfügbar).

Für Browser, die es unterstützen, sollten Spekulationsregeln Prefetch gegenüber älteren Prefetch-Mechanismen bevorzugt werden, namentlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"`-Option. Weil wir wissen, dass Spekulationsregeln Prefetch für Navigationen ist, nicht für allgemeine Ressourcenvorhaltung:

- Es kann für Cross-Site-Navigationen verwendet werden, während `<link rel="prefetch">` dies nicht kann.
- Es wird nicht durch {{httpheader("Cache-Control")}} Header blockiert, während `<link rel="prefetch">` häufig blockiert wird.

Darüber hinaus hat Spekulationsregelsymbolisierung Prefetch:

- Senkt automatisch die Priorität, wenn nötig (`fetch()` tut dies nicht).
- Respektiert die Konfiguration des Benutzers. Zum Beispiel passiert das Vorladen nicht, wenn das Gerät des Benutzers sich im Energiesparmodus oder Datensparmodus befindet.
- Speichert die vorgeladenen Ressourcen in einem pro-Dokument-In-Memory-Cache im Gegensatz zum HTTP-Cache, was zu einem leicht schnelleren Vorladen führen kann.

### Verwendung von Prerendering

Das Einfügen von `prerender`-Regeln in ein `<script type="speculationrules">`-Element oder einen `Speculation-Rules`-Header führt dazu, dass unterstützende Browser den Inhalt in einem unsichtbaren Tab abrufen, rendern und laden, der in einem pro-Dokument-In-Memory-Cache gespeichert wird. Dies schließt das Laden aller Subressourcen ein, das Ausführen aller JavaScript, und sogar das Laden von Subressourcen und Durchführen von Datenabrufen, die von JavaScript gestartet werden. Alle gecachten Prerender und ihre Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich ein prerendertes Dokument, zu dem Sie dann navigieren.

Zukünftige Navigationen zu einem prerenderten Dokument werden nahezu sofort ausgeführt. Der Browser aktiviert den unsichtbaren Tab anstelle des üblichen Navigationsprozesses und ersetzt die alte Vordergrundseite durch die prerenderte Seite. Wenn eine Seite aktiviert wird, bevor sie vollständig prerendert wurde, wird sie im aktuellen Zustand aktiviert und lädt dann weiter, was bedeutet, dass Sie trotzdem einen erheblichen Performancevorteil sehen werden.

Prerendering verwendet Speicher und Netzwerkbandbreite. Wenn Sie etwas prerendern, zu dem der Benutzer nicht navigiert, werden diese verschwendet (obwohl das Ergebnis den HTTP-Cache füllen kann, wenn Header dies zulassen, was eine spätere Verwendung erlaubt). Die Vorabkosten eines Prerenders sind viel größer als die Vorabkosten eines Prefetches, und andere Bedingungen könnten auch dazu führen, dass Inhalte unsicher zum Prerendern sind (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für mehr Details). Daher wird empfohlen, das Prerendering sparsamer zu verwenden und sorgfältig Fälle zu prüfen, in denen eine hohe Wahrscheinlichkeit besteht, dass die Seite navigiert wird und Sie denken, dass der Vorteil für die Benutzererfahrung die zusätzlichen Kosten wert ist.

> [!NOTE]
> Um die Menge an möglichem Ressourcenverschwendung einzuordnen: Ein Prerender verwendet etwa die gleiche Menge an Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden während des Prerenderings/aktiviert automatisch zurückgestellt. Siehe [Plattformfunktionen, die während des Prerenderings zurückgestellt oder eingeschränkt sind](#plattformfunktionen,_die_während_des_prerenderings_zurückgestellt_oder_eingeschränkt_sind) für mehr Details.

Prerendering ist standardmäßig auf same-origin Dokumente beschränkt. Cross-origin, same-site Prerendering ist möglich – es erfordert, dass das Navigationsziel über den {{httpheader("Supports-Loading-Mode")}} Header mit einem Wert von `credentialed-prerender` eingewilligt wird. Cross-Site Prerendering ist derzeit nicht möglich.

Für Browser, die es unterstützen, sollte die Spekulationsregeln Prerender gegenüber älteren Prerender-Mechanismen bevorzugt werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender):

- `<link rel="prerender">` ist Chrome-spezifisch und wurde nie standardisiert, und das Chrome-Entwicklungsteam ist dabei, es abzuschaffen.
- Es lädt Subressourcen, die über JavaScript geladen werden, während `<link rel="prerender">` dies nicht tut.
- Es wird nicht durch {{httpheader("Cache-Control")}} Einstellungen blockiert, während `<link rel="prerender">` oft blockiert wird.
- Spekulationsregeln Prerender sollte als ein Hinweis und eine progressive Verbesserung behandelt werden. Im Gegensatz zu `<link rel="prerender">` ist es ein spekulativer Hinweis und der Browser kann wählen, den Hinweis nicht umzusetzen, basierend auf Benutzereinstellungen, aktuellem Speicherverbrauch oder anderen Heuristiken.

### Spekulationsregeln API Feature-Erkennung

Sie können überprüfen, ob die Spekulationsregeln API unterstützt wird, indem Sie den folgenden Code verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Zum Beispiel möchten Sie Spekulationsregeln für das Vorladen in unterstützenden Browsern einfügen, aber in anderen eine ältere Technologie wie `<link rel="prefetch">` verwenden:

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

## Erkennung von vorgeladenen und prerenderten Seiten

Dieser Abschnitt betrachtet verschiedene Möglichkeiten, um festzustellen, ob eine angeforderte Seite vorgeladen oder prerendert wurde.

### Serverseitige Erkennung

Vorgeladene und prerenderte Seitenanforderungen werden mit dem {{httpheader("Sec-Purpose")}} Anfrage-Header gesendet:

Für Prefetch:

```http
Sec-Purpose: prefetch
```

Für Prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können basierend auf diesem Header antworten, zum Beispiel um spekulative Ladevorgänge zu protokollieren, anderen Inhalt zurückzugeben oder sogar zu verhindern, dass spekulatives Laden stattfindet. Wenn ein Nicht-Erfolgs-Response-Code zurückgegeben wird (jeder HTTP-Status, der nicht im Bereich von 200 bis 299 nach Umleitungen liegt), dann wird die Seite nicht vorgeladen/vorgerendert. Zusätzlich verhindern die Statuscodes 204 und 205 ebenfalls das Prerendering (aber nicht das Prefetching).

Die Verwendung eines Nicht-Erfolgs-Codes (zum Beispiel eines 503) ist der einfachste Weg, um spekulatives Laden serverseitig zu verhindern, obwohl es in der Regel besser ist, das Prefetch/Prerender zuzulassen und JavaScript zu verwenden, um alle Aktionen zu verzögern, die nur passieren sollen, wenn die Seite tatsächlich angesehen wird.

### Erkennung von Prefetching mit JavaScript

Wenn eine Seite vorgeladen wird, wird ihr [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) Eintrag einen Wert von `"navigational-prefetch"` zurückgeben. Sie könnten das folgende verwenden, um eine Funktion auszuführen, wenn ein Performance-Eintrag vom Typ `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist nützlich, wenn die Leistung gemessen wird oder wenn Sie Aktionen verzögern möchten, die Probleme verursachen könnten, wenn sie während des Prefetching auftreten (siehe [Unsicheres Prefetching](#unsicheres_prefetching)).

### Erkennung von Prerendering mit JavaScript

Um eine Aktivität während des Prerenderings der Seite auszuführen, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft überprüfen. So könnten Sie zum Beispiel einige Analysen ausführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein prerendertes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Zeit zwischen dem Beginn des Prerenderings und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl das Prerendering als auch prerenderte Seiten überprüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die prerenderte Seite durch das Ansehen durch den Benutzer aktiviert wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die zuvor standardmäßig beim Laden der Seite gestartet würden, die Sie jedoch aufschieben möchten, bis die Seite vom Benutzer angesehen wird. Der folgende Code richtet einen Ereignislistener ein, um eine Funktion auszuführen, sobald das Prerendering auf einer prerenderten Seite beendet ist, oder führt sie sofort auf einer nicht prerenderten Seite aus:

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

Dieser Abschnitt behandelt Bedingungen, auf die Sie achten sollten und unter denen Prefetching und/oder Prerendering **unsicher** sind. Das bedeutet, dass Prefetching/Prerendering Seiten, die diese Bedingungen aufweisen, möglicherweise Abhilfemaßnahmen in Ihrem Code erfordern oder ganz vermieden werden müssen.

### Unsicheres Prefetching

Wie bereits erwähnt, empfehlen wir, Prefetching breit anzuwenden, da das Risiko-Nutzen-Verhältnis relativ gering ist – die potenzielle Ressourcenverschwendung ist minimal, und die Leistungsverbesserungen können signifikant sein. Sie müssen jedoch sicherstellen, dass vorgeladene Seiten keine Probleme mit dem Ablauf Ihrer Anwendung verursachen.

Wenn ein Prefetch durchgeführt wird, lädt der Browser den Antwortkörper der referenzierten Seite über eine einzige GET-Anfrage herunter, die der Benutzer zu einem späteren Zeitpunkt navigieren kann. Probleme können insbesondere dann auftreten, wenn die URL der Anfrage einen serverinitiierten Seiteneffekt hat, den Sie nicht wünschen, bis zur eigentlichen Navigation zur URL.

Zum Beispiel:

- Abmelde-URLs.
- Sprachwechselfunktionen.
- "In den Warenkorb legen"-URLs.
- Sign-In-Flow-URLs, bei denen der Server eine SMS sendet, zum Beispiel als Einmalpasswort (OTP).
- URLs, die die Verbrauchszahlen eines Benutzerlimits erhöhen, zum Beispiel die Verwendung des monatlichen Kontingents an freien Artikeln oder des Starts eines Timers für monatliche Minuten.
- URLs, die serverseitiges Anzeigen-Conversion-Tracking initiieren.

Solche Probleme können auf dem Server dadurch gemildert werden, dass Sie auf den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} Header achten, während die Anfragen hereinkommen, und dann spezifischen Code auszuführen, um problematische Funktionalität zu verzögern. Später, wenn zur Seite tatsächlich navigiert wird, können Sie mit JavaScript die aufgeschobene Funktionalität einleiten, wenn nötig.

> [!NOTE]
> Sie können weitere Details zu dem Erkennungscode im Abschnitt [Erkennung von vorgeladenen und prerenderten Seiten](#erkennung_von_vorgeladenen_und_prerenderten_seiten) finden.

Es ist auch potenziell riskant, ein Dokument vorzuholen, dessen servergerenderte Inhalte durch Aktionen des Benutzers auf der aktuellen Seite geändert werden. Dies könnte zum Beispiel Flash-Verkaufsseiten oder Kinosaal-Seatmaps umfassen. Testen Sie solche Fälle sorgfältig und mildern Sie solche Probleme, indem Sie Inhalte aktualisieren, sobald die Seite geladen wird. Siehe [Servergerenderter variierender Zustand](#servergerenderter_variierender_zustand) für mehr Details zu diesen Fällen.

> [!NOTE]
> Browser werden vorgeladene Seiten für kurze Zeit zwischenpuffern (Chrome beispielsweise hält sie 5 Minuten) bevor sie verworfen werden, sodass Ihre Benutzer in jedem Fall Inhalte sehen könnten, die bis zu 5 Minuten veraltet sind.

Veraltete Vorholungen können mit dem {{httpheader("Clear-Site-Data#prefetchCache", "prefetchCache")}} Wert des {{httpheader("Clear-Site-Data")}} Antwortheaders gelöscht werden. Dies könnte verwendet werden, zum Beispiel wenn sich durch Anfragen, die den Zustand ändern, die gecachten Daten als nicht mehr gültig erweisen, wie etwa beim Abmelden von einer Seite.

Prefetching ist sicher, wenn alle Seiteneffekte des Abrufens der Seite aus JavaScript-Ausführung resultieren, da das JavaScript erst bis zur Aktivierung ausgeführt wird.

Ein letzter Tipp ist, die in Ihrer {{Glossary("robots.txt", "robots.txt")}} als nicht erlaubt gelisteten URLs zu prüfen — normalerweise verweisen diese URLs auf Seiten, die nur von authentifizierten Benutzern abgerufen werden können und daher nicht in Suchmaschinenergebnissen enthalten sein sollten. Viele davon werden in Ordnung sein, aber es kann ein guter Ort sein, um URLs zu finden, die unsicher zum Vorladen sind (das heißt, sie weisen die oben beschriebenen Bedingungen auf).

### Unsicheres Prerendering

Prerendering ist riskanter als Prefetching, deshalb sollte es sparsam eingesetzt werden, in Fällen, bei denen es sich lohnt. Es gibt mehr unsichere Bedingungen, die beim Prerendering zu beachten sind. Daher ist, auch wenn der Nutzen höher ist, das Risiko ebenfalls höher.

Wenn ein Prerendering durchgeführt wird, ruft der Browser die URL per GET ab und rendert und lädt den Inhalt in einen unsichtbaren Tab. Dies schließt das Ausführen des JavaScripts des Inhalts und das Laden aller Subressourcen ein, die von JavaScript abgerufen werden. Inhalte können potenziell unsicher zum Prerendern sein, wenn eine der folgenden Bedingungen beobachtet wird:

- Die URL ist [unsicher zu vorzuholen](#unsicheres_prefetching). Lesen Sie den vorherigen Abschnitt, wenn Sie dies noch nicht getan haben, und verstehen Sie, dass diese Bedingungen auch für unsicheres Prerendering gleichermaßen zutreffen.
- Das JavaScript der Seite modifiziert clientseitigen Speicher (zum Beispiel [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) beim Laden in einer Weise, die zu verwirrenden Effekten auf anderen, nicht prerenderten Seiten führen kann, die der Benutzer derzeit betrachtet.
- Die Seite führt JavaScript aus oder lädt Bilder, die Seiteneffekte verursachen wie das Senden von Analysen, das Aufzeichnen von Anzeigen-Impressionen oder das anderweitige Modifizieren des Status der Anwendung, als ob der Benutzer bereits damit interagiert hätte. Auch dies kann den Ablauf der Anwendung beeinflussen oder zu ungenauen Leistungs- oder Nutzungsberichten führen. Siehe [Servergerenderter variierender Zustand](#servergerenderter_variierender_zustand) für weitere Details zu solchen Anwendungsfällen.

Um solche Probleme abzumildern, können Sie die folgenden Techniken verwenden:

- Achten Sie auf den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} Header auf dem Server, während die Anfragen hereinkommen, und dann spezifischen Code auszuführen, um problematische Funktionalität zu verzögern.
- Verwenden Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis, um zu erkennen, wann die prerenderte Seite tatsächlich aktiviert wird und führen Sie entsprechend Code aus. Dies ist in zwei Fällen nützlich:
  - Zurückstellen von Code, der Probleme verursachen könnte, wenn er ausgeführt wird, bevor die Seite angesehen wird. Zum Beispiel möchten Sie möglicherweise bis nach der Aktivierung warten, um clientseitigen Speicher zu aktualisieren oder serverseitigen Status mit JavaScript zu modifizieren. Dies kann Situationen vermeiden, in denen die Benutzeroberfläche und der Anwendungsstatus nicht mehr synchron sind, zum Beispiel ein Einkaufswagen, der keine Artikel anzeigt, obwohl der Benutzer welche hinzugefügt hat.
  - Wenn das oben Genannte nicht möglich ist, könnten Sie trotzdem den Code nach der Aktivierung neu ausführen, um die App wieder auf den neuesten Stand zu bringen. Eine Seite mit sehr dynamischen Flash-Sales könnte sich auf Inhaltsaktualisierungen verlassen, die von einer Drittanbieter-Bibliothek bereitgestellt werden. Wenn Sie die Updates nicht verschieben können, können Sie immer frische Updates abrufen, sobald der Benutzer die Seite ansieht. Prerendered-Seiten können in Echtzeit mithilfe der [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder eines anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einem [`WebSocket`](/de/docs/Web/API/WebSocket) aktualisiert werden. Dies stellt sicher, dass der Benutzer aktuelle Inhalte nach der Aktivierung des Prerenderings sieht.
- Verwenden Sie Ihre Drittanbieter-Analysenskripte sorgfältig — verwenden Sie nach Möglichkeit Skripte, die prerendering-empfindlich sind (zum Beispiel die Nutzung der [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft, um das Ausführen auf prerenderten Seiten zu verzögern) wie Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden der Inhalte von Cross-Origin {{htmlelement("iframe")}}s während des Prerenderings verzögert wird, bis die Aktivierung erfolgt. Dies geschieht, um Probleme zu vermeiden, die durch das Laden von Cross-Origin-Seiten entstehen, die sich des Prerenderings nicht bewusst sind, und um Komplexitäten zu vermeiden, welche Anmeldedaten und Speicher diesen Frames zur Verfügung gestellt werden sollen. Es bedeutet, dass Benutzer in einigen Fällen zunächst leere Frames sehen können, es bedeutet aber auch, dass die meisten Drittanbieter-Widgets wie Ad-Tech während des Prerenderings sicher verwendet werden können.
  - Bei Drittanbieter-Skripten, die nicht prerendering-empfindlich sind, vermeiden Sie das Laden, bis nach der Aktivierung mithilfe des [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignisses, wie zuvor erwähnt.

### Servergerenderter variierender Zustand

Es gibt zwei Hauptarten von servergerendertem Zustand, mit denen Sie sich befassen müssen: **veralteter Zustand** und **benutzerspezifischer Zustand**. Dies kann sowohl unsicheres Prefetching als auch Prerendering verursachen.

- Veralteter Zustand: Betrachten Sie das Beispiel einer servergerenderten Liste von Blog-Kommentaren, die zwischen Prerendering und Ansicht des Blog-Posts veraltet sein können. Dies könnte insbesondere problematisch sein, wenn die aktuelle Seite ein Admin-Panel ist, in dem der Benutzer Spam-Kommentare löscht. Wenn der Benutzer dann zum Blog-Post wechselt, könnte er verwirrt sein, warum er die Spam-Kommentare sieht, die er gerade gelöscht hat.
- Benutzerspezifischer Zustand: Betrachten Sie den Fall, Anmeldungen über einen Cookie zu verfolgen. Probleme können wie folgt auftreten:
  - Der Benutzer besucht `https://site.example/a` in Tab 1 und `https://site.example/b` in Tab 2, während er nicht angemeldet ist.
  - `https://site.example/b` prerendert `https://site.example/c`. Es wird im abgemeldeten Zustand prerendert.
  - Der Benutzer meldet sich bei `https://site.example` in Tab 1 an.
  - Der Benutzer wechselt zu Tab 2 und klickt auf den Link zu `https://site.example/c`, was die prerendered-Seite aktiviert.
  - Tab 2 zeigt eine abgemeldete Ansicht von `https://site.example/c` an, was den Benutzer verwirrt, da er dachte, er sei angemeldet.

Benutzerspezifische Zustandsprobleme können auch für andere Benutzereinstellungen auftreten, zum Beispiel Spracheinstellungen, Dunkelmoduspräferenzen oder das Hinzufügen von Artikeln zu einem Warenkorb. Sie können sich auch dann ergeben, wenn nur ein einzelner Tab beteiligt ist:

- Angenommen, der Benutzer besucht `https://site.example/product`.
- `https://site.example.com/product` prerendert `https://site.example.com/cart`. Es wird mit 0 Artikeln im Warenkorb prerendert.
- Der Benutzer klickt auf die "In den Warenkorb legen"-Schaltflächen, was eine Abrufanfrage startet, um den Artikel zum Warenkorb des Benutzers hinzufügen (ohne Neuladen der Seite).
- Der Benutzer klickt auf den Link zu `https://site.example.com/cart`, was die prerendered-Seite aktiviert.
- Der Benutzer sieht einen leeren Warenkorb, obwohl er gerade etwas hinzugefügt hat.

Die beste Abhilfe für diese Fälle und tatsächlich jedes Mal, wenn Inhalte mit dem Server aus der Synchronisation geraten können, besteht darin, dass sich Seiten bei Bedarf selbst aktualisieren. Beispielsweise könnte ein Server die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einen [`WebSocket`](/de/docs/Web/API/WebSocket) verwenden. Seiten können sich dann selbst angemessen aktualisieren, einschließlich spekulativ geladener Seiten, die noch nicht aktiviert wurden.

Wo Aktualisierungen nicht möglich sind, können Spekulationen durch den {{httpheader("Clear-Site-Data")}} Antwortheader mit den {{httpheader("Clear-Site-Data#prefetchCache", `prefetchCache`)}} oder {{httpheader("Clear-Site-Data#prerenderCache", `prerenderCache`)}} Werten (oder beiden) bereinigt werden, je nachdem.

Der Header kann auf jede gleiche Website HTTP-Anfrage zurückgegeben werden (wie ein `/api/add-to-cart` API-Aufruf).

## Sitzungsverlauf-Verhalten für prerenderte Dokumente

Das Aktivieren eines prerendering/prerendered Dokuments verhält sich aus der Sicht des Endbenutzers wie jede herkömmliche Navigation. Das aktivierte Dokument wird im Tab angezeigt und dem Sitzungsverlauf hinzugefügt, und alle vorhandenen Vorlauf-Historieneinträge werden beschnitten. Alle Navigationen, die im Prerendering-Browsing-Kontext _vor_ der Aktivierung stattfinden, beeinflussen den Sitzungsverlauf nicht.

Aus Sicht des Entwicklers kann ein prerendering Dokument als **trivialer Sitzungsverlauf** betrachtet werden, bei dem nur ein Eintrag — der aktuelle Eintrag — existiert. Alle Navigationen im Prerendering-Kontext werden effektiv ersetzt.

Während API-Funktionen, die auf Sitzungsverlauf wirken (zum Beispiel [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation)), innerhalb prerendered Dokumente aufgerufen werden können, operieren sie nur auf dem trivialen Sitzungsverlauf des Kontextes. Folglich nehmen prerendered Dokumente nicht am gemeinsamen Sitzungsverlauf ihrer verweisenden Seite teil. Zum Beispiel können sie ihren Verweis nicht über [`History.back()`](/de/docs/Web/API/History/back) navigieren.

Dieses Design stellt sicher, dass Benutzer das erwartete Erlebnis beim Verwenden des Zurück-Buttons haben — das heißt, dass sie zu dem letzten Gesehenen zurückgebracht werden. Sobald ein prerendering Dokument aktiviert wird, wird nur ein einzelner Eintrag im gemeinsamen Sitzungsverlauf hinzugefügt, unter den bisherigen Navigationen, die im Prerendering-Browsing-Kontext stattfanden. Ein Schritt im gemeinsamen Sitzungsverlauf zurückgehen — zum Beispiel durch Drücken des Zurück-Buttons — bringt den Benutzer zur Ursprungsseite zurück.

## Plattformfunktionen, die während des Prerenderings zurückgestellt oder eingeschränkt sind

Da eine prerendered Seite in einem ausgeblendeten Zustand geöffnet ist, werden mehrere API-Funktionen, die potenziell aufdringliche Verhaltensweisen verursachen, nicht in diesem Zustand aktiviert und werden stattdessen **zurückgestellt** bis die Seite aktiviert wird. Andere Webplattformfunktionen, die beim Prerendering problematisch sind, sind ganz eingeschränkt. Dieser Abschnitt bietet Details darüber, welche Funktionen zurückgestellt oder eingeschränkt sind.

> [!NOTE]
> In der kleinen Anzahl von Fällen, in denen das Zurückstellen und Einschränken nicht möglich sind, wird das Prerender abgebrochen.

### Asynchrone API-Zurückstellung

Zurückstellen bedeutet, dass die API-Funktion sofort ein ausstehendes Versprechen zurückgibt und dann nichts unternimmt bis zur Aktivierung der Seite. Nach der Aktivierung läuft die Funktion normal und das Versprechen wird normal erfüllt oder abgelehnt.

Die Ergebnisse der folgenden asynchronen Funktionen werden in prerendered Dokumenten bis zur Aktivierung zurückgestellt:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignis
- [Geolocation API](/de/docs/Web/API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API: Die Wiedergabeposition wird während das enthaltende Dokument prerendert wird nicht fortschreiten
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (und die ältere [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) Version), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Notifications API](/de/docs/Web/API/Notifications_API): [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor, [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
- [Sensor-APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Storage API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): [`AudioContext`](/de/docs/Web/API/AudioContext)s dürfen nicht starten, während das enthaltene Dokument prerendert wird
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

Die folgenden Funktionen schlagen automatisch fehl oder verhalten sich nicht in aktivierten Dokumenten.

APIs, die {{Glossary("transient_activation", "vorübergehende Aktivierung")}} oder {{Glossary("sticky_activation", "angeklebte Aktivierung")}} erfordern:

- Bestätigungsdialoge, die von dem [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis generiert werden
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

APIs, die erfordern, dass das enthaltende Dokument fokussiert ist:

- [Clipboard API](/de/docs/Web/API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)

APIs, die erfordern, dass der [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) des enthaltenden Dokuments `"visible"` ist:

- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert, dass der Sichtbarkeitsstatus des enthaltenden Dokuments `"visible"` ist, _oder_ {{Glossary("transient_activation", "vorübergehende Aktivierung")}})
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Andere eingeschränkte Funktionen

- Download-Links, das heißt {{htmlelement("a")}} und {{htmlelement("area")}} Elemente mit dem `download` Attribut, werden ihre Downloads verzögern, bis das Prerendering beendet ist.
- Keine Cross-Site-Navigationen: Jedes prerendering Dokument, das zu einer anderen Seite navigiert, wird sofort verworfen, bevor eine Anfrage an diese andere Seite gesendet wird.
- Einschränkte URLs: Prerendering Dokumente können keine Nicht-HTTP(S) Top-Level-URLs hosten. Das Einfügen der folgenden URL-Typen wird dazu führen, dass das Prerendering sofort verworfen wird:
  - [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
  - [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data)
  - [`blob:` URLs](/de/docs/Web/URI/Reference/Schemes/blob)
  - `about:` URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungsspeicher: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, aber das Verhalten ist sehr spezifisch, um Seiten zu vermeiden, die erwarten, dass nur eine Seite auf den Sitzungsspeicher der Registerkarte gleichzeitig zugreifen kann. Eine prerendered-Seite beginnt daher mit einem Klon des Sitzungsspeicherstatus der Tabelle von dem Zeitpunkt, an dem sie erstellt wurde. Nach der Aktivierung wird der Klon des Speichers der prerendered-Seite verworfen und der Hauptspeicherstatus der Tabelle wird stattdessen verwendet. Seiten, die Sitzungsspeicher verwenden, können das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis verwenden, um zu erkennen, wann dieser Speichertausch auftritt.
- [`Window.print()`](/de/docs/Web/API/Window/print): Alle Aufrufe dieser Methode werden ignoriert.
- "Einfache Dialogmethoden" sind wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) kehrt sofort zurück, ohne einen Dialog anzuzeigen.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) kehrt sofort mit `false` zurück, ohne einen Dialog anzuzeigen.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) kehrt sofort mit einem leeren String (`""`) zurück, ohne einen Dialog anzuzeigen.
- Dedizierte/geteilte Workerskripte werden geladen, aber deren Ausführung wird aufgeschoben, bis das prerendered Dokument aktiviert wird.
- Cross-Origin {{htmlelement("iframe")}} Loads werden während des Prerenderings verzögert, bis die Seite aktiviert wird.

## Schnittstellen

Die Spekulationsregeln API definiert keine eigenen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument derzeit im Prozess des Prerenderings ist.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis {{experimental_inline}}
  - : Wird auf einem prerendered Dokument ausgelöst, wenn es aktiviert wird (das heißt, der Benutzer betrachtet die Seite).
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Start des Prerenderings eines Dokuments und dessen Aktivierung darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) `"navigational-prefetch"` Wert {{experimental_inline}}
  - : Signalisiert, dass der Typ eines Performance-Eintrags ein Prefetch ist.

## HTTP-Header

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'` Wert {{experimental_inline}}
  - : Wird verwendet, um die Nutzung von `<script type="speculationrules">` zu erlauben, um Spekulationsregeln im Dokument zu definieren, das abgerufen wird.
- {{httpheader("Clear-Site-Data")}} `'prefetchCache'` und `'prerenderCache'` Werte {{experimental_inline}}
  - : Verwendung zum Löschen von Spekulationen. Zum Beispiel, wenn Zustandsänderungen die Spekulationen veraltet machen.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Liefert eine Liste von URLs, die auf Textressourcen verweisen, welche Spekulationsregeln JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregelsatz des Dokuments hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um die Nutzung verschiedener risikoreicher Lade-Modi zu erlauben. Zum Beispiel erfordert Cross-Origin, Same-Site Prerendering einen `Supports-Loading-Mode` Wert von `credentialed-prerender`.

## HTML-Funktionen

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um ein Set von Prefetch- und/oder Prerender-Spekulationsregeln im aktuellen Dokument zu definieren, die dem Spekulationsregelsatz des Dokuments hinzugefügt werden.

## Beispiele

Für Codebeispiele siehe [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2025)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von Spekulationsregeln und anderen ähnlichen Leistungsverbesserungsfunktionen.
