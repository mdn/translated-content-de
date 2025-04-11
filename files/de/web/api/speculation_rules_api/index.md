---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Speculation Rules API** ist darauf ausgelegt, die Leistung für zukünftige Navigationen zu verbessern. Sie zielt auf Dokument-URLs anstatt auf spezifische Ressourcendateien ab und ist daher für Multi-Page-Anwendungen (MPAs) sinnvoller als für Single-Page-Anwendungen (SPAs).

Die Speculation Rules API bietet eine Alternative zum weit verbreiteten Feature [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und ist dazu gedacht, das nur in Chrome verfügbare, nicht mehr unterstützte Feature [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) abzulösen. Sie bietet viele Verbesserungen gegenüber diesen Technologien sowie eine ausdrucksstärkere, konfigurierbare Syntax zur Angabe, welche Dokumente vorab geladen oder vorgerendert werden sollen.

> [!NOTE]
> Die Speculation Rules API kümmert sich nicht um Subresource-Prefetches; hierfür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Verwendung

Spekulationsregeln können innerhalb von inline [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) Elementen und externen Textdateien angegeben werden, die durch den {{httpheader("Speculation-Rules")}} Antwort-Header referenziert werden. Die Regeln werden als JSON-Struktur festgelegt.

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

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen explizit in der {{httpheader("Content-Security-Policy")}} [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Richtlinie erlaubt sein, falls die Seite eine solche enthält. Dies geschieht durch Hinzufügen einer der `'inline-speculation-rules'` Quellen, einer Hash-Quelle oder einer Nonce-Quelle.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das Spekulationsregeln-JSON enthält, kann jeden gültigen Namen und jede Erweiterung haben, muss jedoch mit einem `application/speculationrules+json` MIME-Typ bereitgestellt werden.

> [!NOTE]
> Regeln können sowohl mit einem Inline-Skript als auch mit dem HTTP-Header gleichzeitig angegeben werden — alle auf ein Dokument angewandten Regeln werden analysiert und zur Spekulationsregelliste des Dokuments hinzugefügt.

Sie müssen ein anderes Array angeben, um die Regeln für jeden spekulativen Ladevorgangstyp zu enthalten (z.B. `"prerender"` oder `"prefetch"`). Jede Regel ist in einem Objekt enthalten, das beispielsweise eine Liste von zu ladenden Ressourcen sowie Optionen wie eine explizite {{httpheader("Referrer-Policy")}} Einstellung für jede Regel spezifiziert. Beachten Sie, dass vorgerenderte URLs auch vorab geladen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Verwendung von Prefetching

Das Einfügen von `prefetch`-Regeln in ein `<script type="speculationrules">`-Element oder den `Speculation-Rules`-Header veranlasst unterstützende Browser, den Antworttext der referenzierten Seiten herunterzuladen, jedoch keine der von der Seite referenzierten Subressourcen. Wenn eine vorab geladene Seite aufgerufen wird, rendert sie viel schneller, als wenn sie nicht vorab geladen worden wäre.

Die Ergebnisse werden in einem pro-Dokument-In-Speicher-Cache gehalten. Alle gecachten Prefetches werden verworfen, wenn Sie die aktuelle Seite verlassen, mit Ausnahme eines vorab geladenen Dokuments, zu dem Sie dann navigieren.

Dies bedeutet, dass, wenn Sie etwas vorab laden, zu dem der Benutzer nicht navigiert, es im Allgemeinen eine Verschwendung von Ressourcen ist, obwohl das Ergebnis den HTTP-Cache füllen könnte, wenn die Header dies zulassen. Dennoch sind die anfänglichen Kosten eines Prefetches viel geringer als die anfänglichen Kosten eines Prerenders, sodass Sie ermutigt werden, Prefetching breit zu verwenden, beispielsweise indem Sie alle wichtigen Seiten Ihrer Website vorab laden, vorausgesetzt, sie sind sicher vorab zu laden (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für mehr Details).

Same-Site und Cross-Site Prefetches funktionieren, aber Cross-Site Prefetches sind eingeschränkt (siehe ["Same-Site" und "Cross-Site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen den beiden). Aus Datenschutzgründen funktionieren Cross-Site Prefetches derzeit nur, wenn für die Zielseite keine Cookies gesetzt sind — wir wollen nicht, dass Websites die Benutzeraktivitäten über vorab geladene Seiten (die sie möglicherweise nie besuchen) anhand von zuvor gesetzten Cookies verfolgen können.

> [!NOTE]
> In Zukunft wird ein Opt-In für Cross-Site Prefetches über den {{httpheader("Supports-Loading-Mode")}} Header bereitgestellt, aber dies war zum Zeitpunkt der Erstellung dieses Dokuments noch nicht implementiert (nur Cross-Origin, Same-Site [Prerendering](#verwendung_von_prerendering) Opt-In war verfügbar).

Für Browser, die dies unterstützen, sollte Spekulationsregeln-Prefetching gegenüber älteren Prefetch-Mechanismen bevorzugt werden, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"` Option. Da wir wissen, dass Spekulationsregeln-Prefetching für Navigationen und nicht für allgemeines Ressource-Prefetching gedacht ist:

- Es kann für Cross-Site-Navigationen verwendet werden, während `<link rel="prefetch">` dies nicht kann.
- Es wird nicht durch {{httpheader("Cache-Control")}} Header blockiert, während `<link rel="prefetch">` dies oft tut.

Zusätzlich:

- Reduziert es automatisch die Priorität, wenn benötigt (`fetch()` tut dies nicht).
- Respektiert es die Benutzereinstellungen. Zum Beispiel wird Prefetching nicht durchgeführt, wenn sich das Gerät des Benutzers im Batterie- oder Datensparmodus befindet.
- Speichert es die vorab geladenen Ressourcen in einem pro-Dokument-In-Speicher-Cache anstelle des HTTP-Caches, was zu leicht schnellerem Prefetching führen könnte.

### Verwendung von Prerendering

Das Einfügen von `prerender`-Regeln in ein `<script type="speculationrules">`-Element oder den `Speculation-Rules`-Header veranlasst unterstützende Browser, den Inhalt abzurufen, zu rendern und in einem unsichtbaren Tab zu laden, der in einem pro-Dokument-In-Speicher-Cache gespeichert wird. Dies schließt das Laden aller Subressourcen, das Ausführen aller JavaScript und sogar das Laden von durch JavaScript gestarteten Subressourcen und Datenabrufen ein. Alle gecachten Prerenders und ihre Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, mit Ausnahme eines vorgerenderten Dokuments, zu dem Sie dann navigieren.

Zukünftige Navigationen zu einer vorgerenderten Seite erfolgen nahezu sofort. Der Browser aktiviert den unsichtbaren Tab anstelle des üblichen Navigationsprozesses, ersetzt die alte Vordergrundseite durch die vorgerenderte Seite. Wenn eine Seite aktiviert wird, bevor sie vollständig vorgerendert ist, wird sie im aktuellen Zustand aktiviert und lädt dann weiter, was bedeutet, dass Sie dennoch eine signifikante Leistungsverbesserung sehen werden.

Prerendering verbraucht Speicher und Netzwerkbandbreite. Wenn Sie etwas prerendern, zu dem der Benutzer nicht navigiert, sind diese Ressourcen verschwendet (obwohl das Ergebnis den HTTP-Cache füllen könnte, wenn die Header es zulassen, was eine spätere Nutzung ermöglicht). Die anfänglichen Kosten eines Prerenders sind viel größer als die eines Prefetchs, und andere Bedingungen könnten auch Inhalte unsicher zum Prerendern machen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für mehr Details). Daher sollten Sie Prerendering sparsamer anwenden, die Fälle sorgfältig abwägen, in denen eine hohe Wahrscheinlichkeit besteht, dass die Seite aufgerufen wird, und Sie denken, dass der Benutzererlebnisvorteil die zusätzlichen Kosten wert ist.

> [!NOTE]
> Um die potenzielle Ressourcenverschwendung ins Verhältnis zu setzen, verbraucht ein Prerender ungefähr die gleichen Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden automatisch verzögert beim Prerendering/bis zur Aktivierung. Siehe [Platform features deferred or restricted during prerender](#plattform-features,_die_während_des_prerenders_verzögert_oder_eingeschränkt_sind) für mehr Details.

Prerendering ist standardmäßig auf gleich-originäre Dokumente beschränkt. Prerendering über Cross-Origin, Same-Site ist möglich — es erfordert, dass das Navigationsziel über den {{httpheader("Supports-Loading-Mode")}} Header mit einem Wert von `credentialed-prerender` optiert. Prerendering über Cross-Site ist derzeit nicht möglich.

Für Browser, die es unterstützen, sollte Spekulationsregeln-Prerender dem älteren Prerender-Mechanismus bevorzugt werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender):

- `<link rel="prerender">` ist Chrome-spezifisch und wurde nie standardisiert, und das Chrome-Entwicklungsteam ist dabei, es abzuschaffen.
- Es lädt Subressourcen, die über JavaScript geladen werden, während `<link rel="prerender">` dies nicht tut.
- Es wird nicht durch {{httpheader("Cache-Control")}} Einstellungen blockiert, während `<link rel="prerender">` dies oft tut.
- Spekulationsregeln-Prerender sollte als Hinweis und als progressive Verbesserung behandelt werden. Im Gegensatz zu `<link rel="prerender">` ist es ein spekulativer Hinweis und der Browser kann sich entscheiden, den Hinweis nicht zu befolgen, basierend auf Benutzereinstellungen, aktuellem Speicherverbrauch oder anderen Heuristiken.

### Funktionserkennung der Speculation Rules API

Sie können überprüfen, ob die Speculation Rules API unterstützt wird, indem Sie den folgenden Code verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Beispielsweise möchten Sie vielleicht Spekulationsregeln für Prefetching in unterstützenden Browsern einfügen, aber eine ältere Technologie wie `<link rel="prefetch">` in anderen verwenden:

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

## Erkennung vorab geladener und vorgerenderter Seiten

Dieser Abschnitt behandelt verschiedene Möglichkeiten, um festzustellen, ob eine angeforderte Seite vorab geladen oder vorgerendert wurde.

### Serverseitige Erkennung

Vorab geladene und vorgerenderte Seitenanforderungen werden mit dem {{httpheader("Sec-Purpose")}} Anforderungs-Header gesendet:

Für Prefetch:

```http
Sec-Purpose: prefetch
```

Für Prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können basierend auf diesem Header antworten, z.B. um spekulative Ladeanforderungen zu protokollieren, anderen Inhalt zurückzugeben oder sogar zu verhindern, dass spekulatives Laden stattfindet. Wenn ein nicht erfolgreicher Antwortcode zurückgegeben wird (jeder HTTP-Status außer im Bereich 200-299 nach Weiterleitungen), wird die Seite nicht vorab geladen/vorgerendert. Zusätzlich verhindern die Statuscodes 204 und 205 Prerendering (aber nicht Prefetch).

Die Verwendung eines nicht erfolgreichen Codes (z.B. ein 503) ist der einfachste Weg, um serverseitig spekulatives Laden zu verhindern, obwohl es normalerweise besser ist, das Prefetch/Prerender zuzulassen und JavaScript zu verwenden, um Aktionen zu verzögern, die nur ausgeführt werden sollen, wenn die Seite tatsächlich angesehen wird.

### JavaScript-Prefetch-Erkennung

Wenn eine Seite vorab geladen wird, gibt ihr [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) Eintrag einen Wert von `"navigational-prefetch"` zurück. Sie könnten das Folgende verwenden, um eine Funktion auszuführen, wenn ein Leistungseintrag des Typs `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist nützlich, wenn es darum geht, die Leistung zu messen, oder wenn Sie Aktionen verzögern möchten, die Probleme verursachen könnten, wenn sie während des Prefetching auftreten (siehe [Unsicheres Prefetching](#unsicheres_prefetching)).

### JavaScript-Prerender-Erkennung

Um eine Aktivität auszuführen, während die Seite vorgerendert wird, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft überprüfen. Sie könnten zum Beispiel einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorgerendertes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Zeit zwischen dem Start des Prerenders und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann für Prerendering _und_ vorgerenderte Seiten genutzt werden:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vorgerenderte Seite aktiviert wird, indem der Benutzer die Seite ansieht, löst das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis aus. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die bisher standardmäßig beim Laden der Seite gestartet wurden, die Sie jedoch verzögern möchten, bis die Seite vom Benutzer angesehen wird. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Prerendering abgeschlossen ist, auf einer vorgerenderten Seite, oder führt sie sofort auf einer nicht-vorgerenderten Seite aus:

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

Dieser Abschnitt behandelt Bedingungen, auf die man achten muss, unter denen Prefetching und/oder Prerendering **unsicher** sind. Das bedeutet, dass das Prefetching/Prerendering von Seiten, die diese Bedingungen aufweisen, in Ihrem Code durch Maßnahmen abgeschwächt werden oder möglicherweise ganz vermieden werden müssen.

### Unsicheres Prefetching

Wie bereits erwähnt, empfehlen wir, Prefetching breit zu verwenden, da das Verhältnis von Risiko zu Gewinn ziemlich niedrig ist — das Potenzial für Ressourcenverschwendung ist gering, und die Leistungsverbesserungen können erheblich sein. Sie müssen jedoch sicherstellen, dass vorab geladene Seiten keine Probleme mit dem Ablauf Ihrer Anwendung verursachen.

Beim Prefetch wird der Antworttext der referenzierten Seite durch einen einzigen GET-Anruf heruntergeladen, den der Benutzer zu einem zukünftigen Zeitpunkt navigieren kann. Probleme können speziell dann auftreten, wenn die URL der Anforderung einen serverinitiierten Seiteneffekt ausführt, den Sie nicht möchten, bis die URL navigiert wird.

Zum Beispiel:

- Abmelde-URLs.
- Sprachwechsel-URLs.
- "Zum Warenkorb hinzufügen"-URLs.
- Anmeldevorgangs-URLs, bei denen der Server beispielsweise eine SMS sendet, etwa als Einmalkennwort (OTP).
- URLs, die die Nutzungskontingente eines Benutzers erhöhen, wie die Nutzung ihres monatlich freien Artikelkontingents oder das Starten des Timers ihrer monatlichen Minuten.
- URLs, die serverseitiges Ad-Conversion-Tracking initiieren.

Solche Probleme können auf dem Server durch Überwachung des {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} Headers vermieden werden, während die Anfragen eingehen, und dann durch Ausführen bestimmter Codes zur Verzögerung problematischer Funktionen. Später, wenn die Seite tatsächlich aufgerufen wird, können Sie die verzögerte Funktionalität bei Bedarf per JavaScript initiieren.

> [!NOTE]
> Weitere Details zu dem Erkennungscode finden Sie im Abschnitt [Detecting prefetched and prerendered pages](#erkennung_vorab_geladener_und_vorgerenderter_seiten).

Es ist auch potenziell riskant, ein Dokument vorzubestellen, dessen servergerenderte Inhalte sich aufgrund von Aktionen ändern, die der Benutzer auf der aktuellen Seite durchführen kann. Dies könnte beispielsweise Flash-Verkaufsseiten oder Kino-Sitzplätze-Karten umfassen. Testen Sie solche Fälle sorgfältig und mildern Sie solche Probleme, indem Sie den Inhalt aktualisieren, sobald die Seite geladen ist. Siehe [Server-rendered varying state](#server-rendered_varying_state) für weitere Details zu diesen Fällen.

> [!NOTE]
> Browser cache vorab geladene Seiten für eine kurze Zeit (Chrome beispielsweise cached sie für 5 Minuten), bevor sie verworfen werden, sodass Ihre Benutzer möglicherweise Inhalte sehen, die bis zu 5 Minuten veraltet sind.

Prefetching ist sicher, wenn alle Seiteneffekte des Ladens der Seite durch die Ausführung von JavaScript verursacht werden, da das JavaScript erst bei der Aktivierung ausgeführt wird.

Ein finaler Tipp ist, die in Ihrer {{Glossary("robots.txt", "robots.txt")}} Datei als nicht erlaubt gelisteten URLs zu überprüfen — normalerweise zeigen diese URLs auf Seiten, die nur von authentifizierten Benutzern aufgerufen werden können und daher nicht in Suchmaschinenergebnissen enthalten sein sollten. Viele davon sind in Ordnung, aber es kann ein guter Ort sein, um URLs zu finden, die unsicher für Prefetching sind (d.h. sie weisen die oben beschriebenen Bedingungen auf).

### Unsicheres Prerendering

Prerendering birgt mehr Risiken als Prefetching und sollte daher sparsam in Fällen verwendet werden, in denen es sich lohnt. Es gibt mehr unsichere Bedingungen, auf die man beim Prerendering achten muss. Während also der Nutzen höher ist, ist das Risiko ebenfalls höher.

Beim Prerender wird die URL vom Browser abgerufen und der Inhalt in einem unsichtbaren Tab gerendert und geladen. Dies schließt das Ausführen des JavaScript-Contents und das Laden aller Subressourcen ein, einschließlich derjenigen, die durch JavaScript abgerufen werden. Inhalte können potenziell unsicher zum Prerendern sein, wenn eine der folgenden Bedingungen beobachtet wird:

- Die URL ist [unsicher zum Prefetchen](#unsicheres_prefetching). Lesen Sie zunächst den vorherigen Abschnitt, und verstehen Sie, dass diese Bedingungen auch gleichermaßen auf unsicheres Prerendering zutreffen.
- Das JavaScript der Seite verändert den clientseitigen Speicher (zum Beispiel [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) beim Laden in einer Weise, die verwirrende Effekte in anderen, nicht vorgerenderten Seiten, die der Benutzer derzeit betrachtet, verursachen kann.
- Die Seite führt JavaScript aus oder lädt Bilder, die Seiteneffekte wie das Senden von Analysen, das Aufzeichnen von Anzeigenimpressionen oder auf andere Weise das Ändern des Zustands der Anwendung verursachen, als ob der Benutzer bereits damit interagiert hätte. Auch dies kann den Ablauf der Anwendung beeinflussen oder zu inkorrekter Leistungs- oder Nutzungsberichterstattung führen. Siehe [Server-rendered varying state](#server-rendered_varying_state) für weitere Details zu solchen Anwendungsfällen.

Um solche Probleme zu mildern, können Sie die folgenden Techniken verwenden:

- Überwachen Sie den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} Header auf dem Server, während die Anfragen eingehen, und führen Sie dann spezifischen Code aus, um problematische Funktionalitäten zu verzögern.
- Verwenden Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis, um zu erkennen, wann die vorgerenderte Seite tatsächlich aktiviert wird, und führen Sie Code als Ergebnis aus. Dies ist in zwei Fällen nützlich:
  - Um Code zu verzögern, der Probleme verursachen könnte, wenn er ausgeführt wird, bevor die Seite angesehen wird. Beispielsweise möchten Sie möglicherweise warten, bis nach der Aktivierung, um den clientseitigen Speicher zu aktualisieren oder den serverseitigen Zustand mit JavaScript zu ändern. Dies kann Situationen vermeiden, in denen die Benutzeroberfläche und der Anwendungszustand nicht synchron laufen, z.B. ein Warenkorb, der keine Artikel anzeigt, obwohl der Benutzer einige hinzugefügt hat.
  - Wenn das oben Genannte nicht möglich ist, könnten Sie dennoch Code nach der Aktivierung erneut ausführen, um die App wieder auf den neuesten Stand zu bringen. Zum Beispiel könnte eine hochdynamische Flash-Verkaufsseite sich auf Inhaltsaktualisierungen von einer Drittanbieter-Bibliothek stützen. Wenn Sie die Aktualisierungen nicht verzögern können, können Sie immer noch frische Aktualisierungen abrufen, sobald der Benutzer die Seite sieht. Vorgerenderte Seiten können in Echtzeit mit der [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) aktualisiert werden, oder mit einem anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einem [`WebSocket`](/de/docs/Web/API/WebSocket). Dies garantiert, dass der Benutzer nach der Aktivierung des Prerenders aktuelle Inhalte sieht.
- Verwenden Sie Ihre Drittanbieter-Analysetools sorgfältig — wenn möglich, verwenden Sie Skripte, die Prerendering-fähig sind (z.B. verwenden Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft, um auf Prerendering-Seiten nicht zu laufen), wie Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden von Inhalten fremder {{htmlelement("iframe")}}s während des Prerenderings verzögert wird, bis die Seite aktiviert wird. Dies geschieht, um Brüche zu vermeiden, die durch das Laden Cross-Origin-Seiten verursacht werden, die mit Prerendering nicht vertraut sind, und um Komplexitäten bezüglich der Bereitstellung von Anmeldeinformationen und Speicher für diese Frames zu vermeiden. Es bedeutet, dass Benutzer zunächst in einigen Fällen leere Frames sehen können, es bedeutet aber auch, dass die meisten Drittanbieter-Widgets wie Adtech während des Prerenders sicher zu verwenden sind.
  - Für Drittanbieter-Skripte, die nicht Prerendering-fähig sind, vermeiden Sie das Laden, bis nach der Aktivierung mit dem [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis, wie zuvor erwähnt.

### Server-rendered varying state

Es gibt zwei Haupttypen von servergerendertem Zustand, über den man besorgt sein sollte: **veralteter Zustand** und **benutzerspezifischer Zustand**. Dies kann sowohl unsichere Prefetches als auch Prerenderings verursachen.

- Veralteter Zustand: Betrachten Sie zum Beispiel eine servergerenderte Liste von Blog-Kommentaren, die veraltet sein kann, zwischen dem Zeitpunkt, an dem der Blog-Beitrag vorgerendert wird, und dem Zeitpunkt, an dem er angesehen wird. Dies könnte besonders problematisch sein, wenn die aktuelle Seite ein Admin-Panel ist, in dem der Benutzer Spam-Kommentare löscht. Wenn der Benutzer dann auf den Blog-Beitrag navigiert, könnte er verwirrt sein, warum er die Spam-Kommentare sehen kann, die er gerade gelöscht hat.
- Benutzerspezifischer Zustand: Betrachten Sie das Beispiel, den Anmelde-Status über ein Cookie zu verfolgen. Probleme wie die folgenden können auftreten:
  - Der Benutzer besucht `https://site.example/a` in Tab 1 und `https://site.example/b` in Tab 2, während er abgemeldet ist.
  - `https://site.example/b` rendert `https://site.example/c` vor. Es wird im abgemeldeten Zustand vorgerendert.
  - Der Benutzer meldet sich bei `https://site.example` in Tab 1 an.
  - Der Benutzer wechselt zu Tab 2 und klickt auf den Link zu `https://site.example/c`, was die vorgerenderte Seite aktiviert.
  - Tab 2 zeigt einen abgemeldeten Blick auf `https://site.example/c`, was den Benutzer verwirrt, da er dachte, er sei angemeldet.

Benutzerspezifische Statusprobleme können auch bei anderen Benutzereinstellungen auftreten, zum Beispiel Spracheinstellungen, Dunkelmodus-Präferenzen oder das Hinzufügen von Artikeln zu einem Warenkorb. Sie können auch auftreten, wenn nur ein einziges Tab beteiligt ist:

- Angenommen, der Benutzer besucht `https://site.example/product`.
- `https://site.example.com/product` rendert `https://site.example.com/cart` vor. Es wird mit 0 Artikeln im Warenkorb vorgerendert.
- Der Benutzer klickt auf die "Zum Warenkorb hinzufügen"-Buttons, die eine Abrufanfrage initiieren, um den Artikel zum Warenkorb des Benutzers hinzuzufügen (ohne einen Seitenneuladen).
- Der Benutzer klickt auf den Link zu `https://site.example.com/cart`, was die vorgerenderte Seite aktiviert.
- Der Benutzer sieht einen leeren Warenkorb, obwohl er gerade etwas hinzugefügt hat.

Die beste Abschwächung für diese Fälle und in der Tat jedes Mal, wenn Inhalte mit dem Server nicht synchron sein können, ist es, dass sich die Seiten bei Bedarf selbst aktualisieren. Zum Beispiel könnte ein Server die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API), oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein [`WebSocket`](/de/docs/Web/API/WebSocket) verwenden. Seiten können sich dann selbst entsprechend aktualisieren, einschließlich spekulativ geladener Seiten, die noch nicht aktiviert sind.

## Sitzungsverlauf-Verhalten für vorgerenderte Dokumente

Die Aktivierung eines prerendering/vorgerenderten Dokuments verhält sich wie jede konventionelle Navigation aus der Perspektive des Endbenutzers. Das aktivierte Dokument wird im Tab angezeigt und dem Sitzungsverlauf hinzugefügt, und alle bestehenden Vorwärtsverlauf-Einträge werden gekürzt. Alle Navigationen, die innerhalb des prerendering-Browsing-Kontexts _vor_ der Aktivierung stattfinden, beeinflussen den Sitzungsverlauf nicht.

Aus der Sicht des Entwicklers kann ein prerendering-Dokument als ein **trivialer Sitzungsverlauf** betrachtet werden, bei dem nur ein Eintrag — der aktuelle Eintrag — existiert. Alle Navigationen innerhalb des prerendering-Kontexts werden effektiv ersetzt.

Während API-Funktionen, die auf Sitzungsverlauf operieren (zum Beispiel [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation)), innerhalb von prerendering-Dokumenten aufgerufen werden können, operieren sie nur auf dem trivialen Sitzungsverlauf des Kontexts. Folglich nehmen prerendering-Dokumente nicht am gemeinsamen Sitzungsverlauf ihrer verweisenden Seite teil. Zum Beispiel, sie können ihren Referrer nicht via [`History.back()`](/de/docs/Web/API/History/back) navigieren.

Dieses Design stellt sicher, dass Benutzer die erwartete Erfahrung beim Zurück-Button erhalten — d.h. dass sie zu dem zurückkehren, was sie zuletzt gesehen haben. Sobald ein prerendering-Dokument aktiviert wird, wird nur ein einziger Sitzungsverlauf-Eintrag zum gemeinsamen Sitzungsverlauf hinzugefügt, wobei alle vorherigen Navigationen ignoriert werden, die innerhalb des prerendering-Browsing-Kontexts stattfanden. Ein Schritt zurück im gemeinsamen Sitzungsverlauf — beispielsweise durch Drücken des Zurück-Buttons — bringt den Benutzer zurück zur Verweiserseite.

## Plattform-Features, die während des Prerenders verzögert oder eingeschränkt sind

Da eine vorgerenderte Seite in einem versteckten Zustand geöffnet wird, werden mehrere API-Funktionen, die potenziell aufdringliche Verhaltensweisen verursachen, in diesem Zustand nicht aktiviert und stattdessen **verzögert**, bis die Seite aktiviert wird. Andere Webplattform-Features, die beim Prerendering problematisch sind, sind komplett eingeschränkt. Dieser Abschnitt bietet Details darüber, welche Features verzögert oder eingeschränkt sind.

> [!NOTE]
> In der kleinen Anzahl von Fällen, in denen Aufschub und Einschränkung nicht möglich sind, wird das Prerender aufgehoben.

### Asynchrone API-Verzögerung

Eine Verzögerung bedeutet, dass die API-Funktion sofort ein ausstehendes Versprechen zurückgibt und dann nichts, bis die Seite aktiviert wird. Nach der Aktivierung läuft die Funktion normal und das Versprechen wird normal aufgelöst oder abgelehnt.

Die folgenden asynchronen Funktionen werden in vorgerenderten Dokumenten verzögert, bis sie aktiviert werden:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignis
- [Geolocation API](/de/docs/Web/API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API: Die Wiedergabeposition wird nicht weitergeführt, während das enthaltende Dokument vorgerendert wird
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (und die legacy [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) Version), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Notifications API](/de/docs/Web/API/Notifications_API): [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor, [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Storage API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): [`AudioContext`](/de/docs/Web/API/AudioContext)s sind nicht erlaubt zu starten, während das enthaltende Dokument vorgerendert wird
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

Die folgenden Funktionen schlagen bei Dokumenten, die nicht aktiviert sind, automatisch fehl oder werden nicht ausgeführt.

APIs, die {{Glossary("transient_activation", "transiente Aktivierung")}} oder {{Glossary("sticky_activation", "sticky activation")}} erfordern:

- Bestätigungsdialoge, die durch das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis generiert werden
- Das Auslösen von Ereignissen in der [Clipboard API](/de/docs/Web/API/Clipboard_API).
- [File System API](/de/docs/Web/API/File_System_API): [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker), [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker), [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API): [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static)
- [Keyboard API](/de/docs/Web/API/Keyboard_API): [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) (was Vollbild erfordert)
- [Payment Request API](/de/docs/Web/API/Payment_Request_API): [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
- [Presentation API](/de/docs/Web/API/Presentation_API): [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API): [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Web Share API](/de/docs/Web/API/Web_Share_API): [`Navigator.share()`](/de/docs/Web/API/Navigator/share)
- [`Window.open()`](/de/docs/Web/API/Window/open)

APIs, die die Fokussierung des enthaltenden Dokuments erfordern:

- [Clipboard API](/de/docs/Web/API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)

APIs, die den sichtbaren [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) Wert `"visible"` des enthaltenden Dokuments erfordern:

- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert den sichtbaren Status des enthaltenden Dokuments `"visible"`, _oder_ {{Glossary("transient_activation", "transiente Aktivierung")}})
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Weitere eingeschränkte Funktionen

- Download-Links, d.h. {{htmlelement("a")}} und {{htmlelement("area")}} Elemente mit dem `download` Attribut, werden ihre Downloads verzögern, bis das Prerendering abgeschlossen ist.
- Keine Cross-Site-Navigationen: Jedes Prerendering-Dokument, das zu einer anderen Site navigiert, wird sofort verworfen, bevor eine Anfrage an diese andere Site gesendet wird.
- Eingeschränkte URLs: Prerendering-Dokumente können keine nicht-HTTP(S) Top-Level-URLs hosten. Einschließlich der folgenden URL-Typen führt zum sofortigen Verwerfen des Prerenders:
  - [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
  - [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data)
  - `blob:` URLs
  - `about:` URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungs-Speicher: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, aber das Verhalten ist sehr spezifisch, um zu vermeiden, dass Websites, die erwarten, dass nur eine Seite auf den Speicherspeicher des Tabs zugreift, gebrochen werden. Eine vorgerenderte Seite beginnt daher mit einem Klon des Speicherspeicherstatus des Tabs, wie er erstellt wurde. Bei der Aktivierung wird der Speicherklon der vorgerenderten Seite verworfen, und der Hauptspeicherstatus des Tabs wird stattdessen verwendet. Seiten, die Sitzungs-Speicher verwenden, können das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis verwenden, um zu erkennen, wann dieser Speicherwechsel auftritt.
- [`Window.print()`](/de/docs/Web/API/Window/print): Alle Aufrufe dieser Methode werden ignoriert.
- "Einfache Dialogmethoden" sind wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) kehrt sofort zurück, ohne ein Dialogfeld anzuzeigen.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) kehrt sofort mit `false` zurück, ohne ein Dialogfeld anzuzeigen.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) kehrt sofort mit einem leeren String (`""`) zurück, ohne ein Dialogfeld anzuzeigen.
- Dedizierte/geteilte Worker-Skripte werden geladen, aber ihre Ausführung wird verzögert, bis das vorgerenderte Dokument aktiviert wird.
- Fremd-Cross-{{htmlelement("iframe")}}-Läufe werden während des Prerenders verzögert, bis die Seite aktiviert wird.

## Schnittstellen

Die Speculation Rules API definiert keine eigenen Schnittstellen.

### Erweiterungen anderer Schnittstellen

- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument derzeit im Prozess des Prerenders ist.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis {{experimental_inline}}
  - : Wird auf einem vorgerenderten Dokument ausgelöst, wenn es aktiviert wird (d.h. der Benutzer die Seite ansieht).
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Start eines Prerenders und seiner Aktivierung darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) `"navigational-prefetch"` Wert {{experimental_inline}}
  - : Signalisiert, dass der Typ eines Performance-Eintrags ein Prefetch ist.

## HTTP-Header

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'` Wert {{experimental_inline}}
  - : Wird verwendet, um die Verwendung von `<script type="speculationrules">` zuzulassen, um Spekulationsregeln im abzurufenden Dokument zu definieren.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textr

essourcen mit Spekulationsregel-JSON-Definitionen verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregel-Set des Dokuments hinzugefügt.

- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um die Nutzung verschiedener risikoreicher Lade-Modi zuzulassen. Zum Beispiel erfordert das Prerendering über Cross-Origin, Same-Site einen `Supports-Loading-Mode` Wert von `credentialed-prerender`.

## HTML-Features

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um ein Set von Prefetch- und/oder Prerender-Spekulationsregeln im aktuellen Dokument zu definieren, die dem Spekulationsregel-Set des Dokuments hinzugefügt werden.

## Beispiele

Ein [vollständiges Prerender-Demo finden Sie hier](https://prerender-demos.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von Spekulationsregeln und anderen ähnlichen Leistungsverbesserungs-Features.
