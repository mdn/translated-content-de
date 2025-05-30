---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 08d05cdb5579ad780d418a9b55da7220f491de8d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Speculation Rules API** wurde entwickelt, um die Leistung für zukünftige Navigationen zu verbessern. Sie zielt auf Dokument-URLs anstatt auf spezifische Ressourcen-Dateien und ist daher sinnvoll für Multi-Page-Anwendungen (MPA) im Gegensatz zu Single-Page-Anwendungen (SPA).

Die Speculation Rules API bietet eine Alternative zur weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) Funktion und ist darauf ausgelegt, die nur in Chrome verfügbare, aber veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) Funktion zu ersetzen. Sie bietet viele Verbesserungen gegenüber diesen Technologien sowie eine ausdrucksvollere, konfigurierbare Syntax zur Spezifizierung, welche Dokumente vorab abgerufen oder vorgeladen werden sollen.

> [!NOTE]
> Die Speculation Rules API kümmert sich nicht um das Vorabladen von Subressourcen; dafür benötigen Sie `<link rel="prefetch">`.

## Konzepte und Nutzung

Spekulationsregeln können innerhalb von Inline-Elementen [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) und externen Textdateien, die durch den {{httpheader("Speculation-Rules")}} Antwort-Header referenziert werden, angegeben werden. Die Regeln sind als JSON-Struktur spezifiziert.

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

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen explizit in der {{httpheader("Content-Security-Policy")}} [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Directive erlaubt werden, falls die Seite diese enthält. Dies geschieht durch Hinzufügen der Quelle `'inline-speculation-rules'`, einer Hash-Quelle oder einer Nonce-Quelle.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das JSON der Spekulationsregeln enthält, kann jeden gültigen Namen und jede Erweiterung aufweisen, muss jedoch mit einem MIME-Typ von `application/speculationrules+json` ausgeliefert werden.

> [!NOTE]
> Regeln können sowohl mit einem Inline-Skript als auch mit dem HTTP-Header gleichzeitig spezifiziert werden — alle auf ein Dokument angewendeten Regeln werden analysiert und zur Spekulationsregel-Liste des Dokuments hinzugefügt.

Für jeden Typ von spekulativem Laden (zum Beispiel „prerender“ oder „prefetch“) geben Sie ein anderes Array an, das die Regeln enthält. Jede Regel ist in einem Objekt enthalten, das zum Beispiel eine Liste von zu ladenden Ressourcen angibt, sowie Optionen wie eine explizite {{httpheader("Referrer-Policy")}} Einstellung für jede Regel. Beachten Sie, dass vorgeladene URLs auch vorab abgerufen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Verwendung von Prefetching

Das Einschließen von `prefetch`-Regeln in einem `<script type="speculationrules">`-Element oder `Speculation-Rules`-Header veranlasst unterstützende Browser, den Antwortkörper der referenzierten Seiten herunterzuladen, jedoch keine der von der Seite referenzierten Subressourcen. Wenn auf eine vorab geladene Seite navigiert wird, wird diese viel schneller gerendert, als wenn sie nicht vorab geladen worden wäre.

Die Ergebnisse werden in einem speicherinternen Cache pro Dokument gespeichert. Jegliche zwischengespeicherten Prefetches werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich einem vorab geladenen Dokument, zu dem Sie dann navigieren.

Dies bedeutet, dass es allgemein eine Verschwendung von Ressourcen ist, wenn Sie etwas vorab laden, zu dem der Benutzer nicht navigiert, obwohl das Ergebnis den HTTP-Cache bevölkern kann, wenn die Header es zulassen. Dennoch sind die anfänglichen Kosten eines Prefetches viel geringer als die anfänglichen Kosten eines Prerenders, sodass Sie ermutigt werden, das Prefetching umfassend zu nutzen, zum Beispiel alle wichtigen Seiten Ihrer Website vorab zu laden, vorausgesetzt, dass es sicher ist, diese vorab zu laden (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Details).

Sowohl same-site als auch cross-site Prefetches funktionieren, jedoch sind cross-site Prefetches eingeschränkt (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen den beiden). Aus Datenschutzgründen funktionieren cross-site Prefetches derzeit nur, wenn der Benutzer keine Cookies für die Zielsite gesetzt hat — wir möchten nicht, dass Websites die Benutzeraktivität über vorab geladene Seiten (die sie vielleicht nie tatsächlich besuchen) basierend auf zuvor gesetzten Cookies verfolgen können.

> [!NOTE]
> In Zukunft wird eine Opt-In-Möglichkeit für cross-site Prefetches über den {{httpheader("Supports-Loading-Mode")}} Header bereitgestellt, aber dies war zum Zeitpunkt des Schreibens noch nicht implementiert (nur das Opt-In für cross-origin, same-site [prerendering](#verwendung_von_prerendering) war verfügbar).

Für Browser, die es unterstützen, sollte das Spekulationsregeln-Prefetching gegenüber älteren Prefetch-Mechanismen bevorzugt werden, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"` Option. Da wir wissen, dass Spekulationsregeln-Prefetches für Navigationen sind und nicht für allgemeines Ressourcen-Prefetching:

- Kann es für cross-site Navigationen verwendet werden, während `<link rel="prefetch">` dies nicht kann.
- Wird nicht durch {{httpheader("Cache-Control")}} Header blockiert, während `<link rel="prefetch">` dies häufig tut.

Außerdem:

- Senkt die Priorität automatisch, wenn nötig (`fetch()` tut dies nicht).
- Respektiert die Konfiguration des Benutzers. Zum Beispiel passiert Prefetching nicht, wenn das Gerät des Benutzers im Batterispar- oder Datensparmodus ist.
- Speichert die vorab geladenen Ressourcen in einem speicherinternen Cache pro Dokument im Gegensatz zum HTTP-Cache, was zu einem etwas schnelleren Prefetching führen kann.

### Verwendung von Prerendering

Das Einschließen von `prerender`-Regeln in einem `<script type="speculationrules">`-Element oder `Speculation-Rules`-Header führt dazu, dass unterstützende Browser den Inhalt in einem unsichtbaren Tab abrufen, rendern und laden, der in einem speicherinternen Cache pro Dokument gespeichert wird. Dies schließt das Laden aller Subressourcen, das Ausführen aller JavaScript-Dateien und sogar das Laden von Subressourcen und das Ausführen von Datenabrufen ein, die von JavaScript gestartet werden. Jegliche zwischengespeicherten Prerender und deren Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich einem vorgeladenen Dokument, zu dem Sie dann navigieren.

Zukünftige Navigationen zu einer vorgeladenen Seite werden nahezu augenblicklich sein. Der Browser aktiviert den unsichtbaren Tab anstelle des normalen Navigationsprozesses, ersetzt die alte Vordergrundseite durch die vorgeladene Seite. Wenn eine Seite aktiviert wird, bevor sie vollständig vorgeladen wurde, wird sie in ihrem aktuellen Zustand aktiviert und dann weiter geladen, was bedeutet, dass Sie immer noch eine signifikante Leistungsverbesserung sehen werden.

Prerendering verwendet Speicher und Netzwerkbandbreite. Wenn Sie etwas vorgeladen haben, zu dem der Benutzer nicht navigiert, sind diese Ressourcen verschwendet (obwohl das Ergebnis den HTTP-Cache bevölkern kann, wenn die Header es zulassen, was eine spätere Nutzung ermöglicht). Die anfänglichen Kosten eines Prerenders sind viel größer als die anfänglichen Kosten eines Prefetches, und andere Bedingungen könnten den Inhalt auch unsicher zum Prerendern machen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Details). Daher werden Sie ermutigt, Prerendering sparsamer einzusetzen, sorgfältig Fälle zu berücksichtigen, in denen die Wahrscheinlichkeit hoch ist, dass die Seite geladen wird, und wenn Sie denken, dass der Benutzererlebnisvorteil die zusätzlichen Kosten wert ist.

> [!NOTE]
> Um die Menge an potenzieller Ressourcenverschwendung ins Verhältnis zu setzen: Ein Prerender verwendet ungefähr so viele Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden automatisch aufgeschoben, wenn sie vorgeladen oder bis zur Aktivierung ausgeführt werden. Siehe [Plattform-Funktionen, die während des Prerenderings aufgeschoben oder eingeschränkt sind](#plattform-funktionen,_die_während_des_prerenderings_aufgeschoben_oder_eingeschränkt_sind) für weitere Details.

Prerendering ist standardmäßig auf gleichartige Dokumente beschränkt. Cross-origin, same-site Prerendering ist möglich – es erfordert, dass das Navigationsziel ein Opt-In durch Setzen des {{httpheader("Supports-Loading-Mode")}} Headers mit einem Wert von `credentialed-prerender` durchführt. Cross-site Prerendering ist derzeit nicht möglich.

Für Browser, die es unterstützen, sollte das Spekulationsregeln-Prerendering gegenüber älteren Prerender-Mechanismen bevorzugt werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender):

- `<link rel="prerender">` ist Chrome-spezifisch und wurde nie standardisiert, und das Chrome-Entwicklungsteam ist dabei, es auslaufen zu lassen.
- Es lädt Subressourcen, die über JavaScript geladen werden, während `<link rel="prerender">` dies nicht tut.
- Wird nicht durch {{httpheader("Cache-Control")}} Einstellungen blockiert, während `<link rel="prerender">` dies häufig tut.
- Das Spekulationsregeln-Prerendering sollte als Hinweis und progressive Verbesserung behandelt werden. Anders als `<link rel="prerender">` ist es ein spekulativer Hinweis, und der Browser kann sich entscheiden, den Hinweis aufgrund von Benutzereinstellungen, aktuellem Speicherverbrauch oder anderen Heuristiken nicht zu beachten.

### Funktionsdetektion der Speculation Rules API

Sie können überprüfen, ob die Speculation Rules API unterstützt wird, indem Sie den folgenden Code verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Zum Beispiel möchten Sie möglicherweise Spekulationsregeln zum Prefetching in unterstützende Browser einfügen, aber eine ältere Technologie wie `<link rel="prefetch">` in anderen verwenden:

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

## Erkennung von vorab geladenen und vorgeladenen Seiten

Dieser Abschnitt betrachtet verschiedene Methoden, um zu erkennen, ob eine angeforderte Seite vorab geladen oder vorgeladen wurde.

### Server-seitige Erkennung

Anfragen für vorab geladene und vorgeladene Seiten werden mit dem {{httpheader("Sec-Purpose")}} Anfrage-Header gesendet:

Für Prefetch:

```http
Sec-Purpose: prefetch
```

Für Prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können auf Basis dieses Headers antworten, zum Beispiel, um spekulative Ladeanfragen zu protokollieren, anderen Inhalt zurückzugeben oder sogar das spekulative Laden zu verhindern. Wenn ein nicht-erfolgreicher Antwortcode zurückgegeben wird (jeder HTTP-Status, der nicht im Bereich 200-299 nach Umleitungen liegt), wird die Seite nicht vorab geladen bzw. vorgeladen. Außerdem verhindern auch die Statuscodes 204 und 205 das Prerendering (aber nicht das Prefetching).

Der einfachste Weg, um spekulatives Laden serverseitig zu verhindern, ist die Verwendung eines nicht-erfolgreichen Codes (zum Beispiel ein 503), obwohl es normalerweise ein besserer Ansatz ist, das Prefetch bzw. Prerender zuzulassen und JavaScript zu verwenden, um Aktionen zu verzögern, die nur dann stattfinden sollen, wenn die Seite tatsächlich betrachtet wird.

### JavaScript-Prefetch-Erkennung

Wenn eine Seite vorab geladen wird, gibt der [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) Eintrag einen Wert von `"navigational-prefetch"` zurück. Sie könnten das Folgende verwenden, um eine Funktion auszuführen, wenn ein Performance-Eintrag des Typs `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist nützlich bei der Messung der Leistung oder wenn Sie Aktionen verzögern möchten, die Probleme verursachen könnten, wenn sie während des Prefetches auftreten (siehe [Unsicheres Prefetching](#unsicheres_prefetching)).

### JavaScript-Prerender-Erkennung

Um eine Aktivität auszuführen, während die Seite vorgeladen wird, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft prüfen. Sie könnten zum Beispiel einige Analysetätigkeiten ausführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorgeladenes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Zeitspanne zwischen dem Start des Prerenders und der Aktivierung des Dokuments repräsentiert. Die folgende Funktion kann sowohl auf vorgeladene als auch auf vorgeladene Seiten prüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vorgeladene Seite vom Benutzer aktiviert wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu ermöglichen, die zuvor standardmäßig bei der Seitenladung gestartet wurden, die Sie jedoch verzögern möchten, bis die Seite vom Benutzer betrachtet wird. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Prerendering abgeschlossen ist, auf einer vorgeladenen Seite, oder sie sofort auf einer nicht vorgeladenen Seite auszuführen:

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

Dieser Abschnitt behandelt Bedingungen, auf die Sie achten sollten, unter denen Prefetching und/oder Prerendering **unsicher** sind. Dies bedeutet, dass das Prefetchen/Prerendern von Seiten, die diese Bedingungen aufweisen, in Ihrem Code abgeschwächt oder ganz vermieden werden muss.

### Unsicheres Prefetching

Wie bereits erwähnt, empfehlen wir, Prefetching umfassend zu nutzen, da das Risiko im Verhältnis zum Nutzen relativ gering ist — das Potenzial für Ressourcenverschwendung ist minimal, und die Leistungsverbesserungen können signifikant sein. Sie müssen jedoch sicherstellen, dass vorab geladene Seiten den Ablauf Ihrer Anwendung nicht stören.

Wenn ein Prefetch durchgeführt wird, lädt der Browser den Antwortkörper der referenzierten Seite über eine einzige GET-Anfrage herunter, die der Benutzer möglicherweise zu einem späteren Zeitpunkt besucht. Probleme können insbesondere auftreten, wenn die URL der Anfrage einen serverseitig initiierten Nebeneffekt ausführt, den Sie nicht haben möchten, bevor die URL aufgerufen wird.

Zum Beispiel:

- Abmelde-URLs.
- Sprachwechsel-URLs.
- "In den Warenkorb"-URLs.
- Anmeldefluss-URLs, bei denen der Server bewirkt, dass eine SMS gesendet wird, zum Beispiel als Einmalpasswort (OTP).
- URLs, die die Nutzungszulassungszähler eines Benutzers erhöhen, wie das Ausschöpfen des monatlichen Gratisartikelkontingents oder das Starten des Timers für die monatlichen Minuten.
- URLs, die serverseitiges Ad-Conversion-Tracking initiieren.

Solche Probleme können auf dem Server abgeschwächt werden, indem auf den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} Header geachtet wird, während die Anfragen eingehen, und spezifischer Code ausgeführt wird, um problematische Funktionalität zu verzögern. Später, wenn die Seite tatsächlich aufgerufen wird, können Sie die aufgeschobene Funktionalität bei Bedarf über JavaScript initiieren.

> [!NOTE]
> Weitere Details zum Erkennungscode finden Sie im Abschnitt [Erkennung von vorab geladenen und vorgeladenen Seiten](#erkennung_von_vorab_geladenen_und_vorgeladenen_seiten).

Es ist auch potenziell riskant, ein Dokument vorab zu laden, dessen serverseitig gerenderter Inhalt sich aufgrund von Aktionen ändern wird, die der Benutzer auf der aktuellen Seite durchführen kann. Dies könnte zum Beispiel Flash-Sale-Seiten oder Sitzpläne in Kinos betreffen. Testen Sie solche Fälle sorgfältig und mildern Sie die Probleme ab, indem Sie den Inhalt aktualisieren, sobald die Seite geladen ist. Siehe [Server-gerenderter variierender Status](#server-gerenderter_variierender_status) für weitere Details zu diesen Fällen.

> [!NOTE]
> Browser werden vorab geladene Seiten für kurze Zeit zwischenspeichern (Chrome speichert sie zum Beispiel 5 Minuten lang), bevor sie verworfen werden, sodass Ihre Benutzer möglicherweise Inhalte sehen, die bis zu 5 Minuten veraltet sind.

Veraltete Prefetches können mithilfe des {{httpheader("Clear-Site-Data#prefetchCache", "prefetchCache")}} Wertes des {{httpheader("Clear-Site-Data")}} Antwort-Headers gelöscht werden. Dies könnte zum Beispiel verwendet werden, wenn die Statusänderung von Anforderungen bedeutet, dass die zwischengespeicherten Daten nicht mehr gültig sind, zum Beispiel beim Abmelden von einer Seite.

Prefetching ist sicher, wenn alle Nebeneffekte des Abrufens der Seite durch JavaScript-Ausführung verursacht werden, da das JavaScript erst nach der Aktivierung ausgeführt wird.

Ein letzter Tipp ist, die in Ihrer {{Glossary("robots.txt", "robots.txt")}} Datei als verboten aufgeführten URLs zu überprüfen — normalerweise verweisen diese URLs auf Seiten, die nur von authentifizierten Benutzern aufgerufen werden können und daher nicht in Suchmaschinenergebnissen erscheinen sollen. Viele davon sind in Ordnung, aber es kann ein guter Ort sein, um URLs zu finden, die unsicher zum Prefetchen sind (d.h. sie weisen die oben beschriebenen Bedingungen auf).

### Unsicheres Prerendering

Prerendering ist risikoreicher als Prefetching und sollte daher sparsamer eingesetzt werden, in Fällen, in denen es sich lohnt. Es gibt mehr unsichere Bedingungen, die Sie beim Prerendering beachten sollten, sodass zwar die Belohnung höher ist, das Risiko aber auch.

Wenn ein Prerender durchgeführt wird, lädt der Browser die URL über GET und rendert und lädt den Inhalt in einem unsichtbaren Tab. Dies schließt das Ausführen des Inhalts-JavaScripts und das Laden aller Subressourcen mit ein, einschließlich derer, die durch JavaScript geladen werden. Inhalte können potenziell unsicher zum Prerendern sein, wenn eine der folgenden Bedingungen beobachtet wird:

- Die URL ist [unsicher zum Prefetchen](#unsicheres_prefetching). Lesen Sie den vorherigen Abschnitt durch, wenn Sie dies noch nicht getan haben, und verstehen Sie, dass diese Bedingungen gleichermaßen auf unsicheres Prerendering zutreffen.
- Das JavaScript der Seite ändert clientseitigen Speicher (zum Beispiel [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) beim Laden auf eine Weise, die möglicherweise verwirrende Effekte in anderen, nicht vorgeladenen Seiten verursacht, die der Benutzer gerade besucht.
- Die Seite führt JavaScript aus oder lädt Bilder, die Nebeneffekte verursachen, wie das Senden von Analysedaten, das Aufzeichnen von Ad-Impressionen oder anderweitig den Zustand der Anwendung ändern, als ob der Benutzer bereits interagiert hätte. Auch hier kann dies den Ablauf der Anwendung stören oder zu einer falschen Leistungs- oder Nutzungsberichterstellung führen. Siehe [Server-gerenderter variierender Status](#server-gerenderter_variierender_status) für weitere Details zu solchen Anwendungsfällen.

Um solche Probleme zu mindern, können Sie die folgenden Techniken verwenden:

- Achten Sie bei den eingehenden Anfragen auf den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} Header am Server und führen Sie dann spezifischen Code aus, um problematische Funktionalität zu verzögern.
- Verwenden Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis, um zu erkennen, wann die vorgeladene Seite tatsächlich aktiviert wird, und führen Sie dann Code aus. Dies ist in zwei Fällen nützlich:
  - Verzögern von Code, der Probleme verursachen könnte, wenn er vor der Ansicht der Seite ausgeführt wird. Zum Beispiel möchten Sie möglicherweise warten, bis nach der Aktivierung, um clientseitigen Speicher zu aktualisieren oder serverseitigen Status mithilfe von JavaScript zu ändern. Dies kann Situationen vermeiden, in denen die Benutzeroberfläche und der Anwendungsstatus außer Sync geraten, zum Beispiel ein Einkaufswagen, der keine Artikel anzeigt, obwohl der Benutzer welche hinzugefügt hat.
  - Wenn das Obige nicht möglich ist, können Sie den Code dennoch nach der Aktivierung erneut ausführen, um die App wieder auf den neuesten Stand zu bringen. Zum Beispiel könnte eine stark dynamische Flash-Verkaufsseite auf Inhaltsaktualisierungen aus einer Drittanbieter-Bibliothek angewiesen sein. Wenn Sie die Aktualisierungen nicht verzögern können, können Sie frische Aktualisierungen anfordern, sobald der Benutzer die Seite betrachtet. Vorgeladene Seiten können in Echtzeit mit der [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einem anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einem [`WebSocket`](/de/docs/Web/API/WebSocket) aktualisiert werden. Dies stellt sicher, dass der Benutzer nach der Aktivierung des Prerenders aktuelle Inhalte sieht.
- Verwalten Sie Ihre Drittanbieter-Analysetools sorgfältig — verwenden Sie nach Möglichkeit Skripte, die sich der Prerendering-Aware sind (zum Beispiel die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft verwenden, um ihre Ausführung auf Prerendering-Seiten zu verzögern), wie Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden von Inhalten von Cross-Origin {{htmlelement("iframe")}}s während des Prerenderings bis nach der Aktivierung verzögert wird. Dies wird getan, um Unterbrechungen zu vermeiden, die durch das Laden von Cross-Origin-Seiten verursacht werden, die sich des Prerenderings nicht bewusst sind, und um komplexe Fragen darüber zu vermeiden, welche Anmeldeinformationen und Speicher für diese Frames sichtbar sind. Dies bedeutet, dass Benutzer in einigen Fällen möglicherweise zunächst leere Frames sehen, aber es bedeutet auch, dass die meisten Drittanbieter-Widgets wie die Ad-Tech sicher während des Prerenderings verwendet werden können.
  - Für Drittanbieter-Skripte, die sich des Prerenderings nicht bewusst sind, vermeiden Sie deren Laden bis nach der Aktivierung mit dem [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis, wie zuvor erwähnt.

### Server-gerenderter variierender Status

Es gibt zwei Haupttypen von serverseitig gerendertem Zustand, um die Sie sich kümmern müssen: **veralteter Zustand** und **benutzerspezifischer Zustand**. Dies kann sowohl unsicheres Prefetching als auch Prerendering verursachen.

- Veralteter Zustand: Erwägen Sie das Beispiel einer serverseitig gerenderten Liste von Blog-Kommentaren, die zwischen dem Prerender einer Blog-Seite und ihrer Ansicht veraltet sein könnten. Dies könnte besonders problematisch sein, wenn die aktuelle Seite ein Admin-Panel ist, wo der Benutzer gerade Spam-Kommentare löscht. Wenn der Benutzer dann zur Blog-Seite navigiert, könnte er verwirrt sein, warum er die Spam-Kommentare sieht, die er gerade gelöscht hat.
- Benutzerspezifischer Zustand: Erwägen Sie das Beispiel des Trackings des Anmeldestatus über ein Cookie. Probleme könnten wie folgt auftreten:
  - Der Benutzer besucht `https://site.example/a` in Tab 1 und `https://site.example/b` in Tab 2, während er abgemeldet ist.
  - `https://site.example/b` lädt `https://site.example/c` vor. Es wird in einem abgemeldeten Zustand vorgeladen.
  - Der Benutzer meldet sich auf `https://site.example` in Tab 1 an.
  - Der Benutzer wechselt zu Tab 2 und klickt auf den Link zu `https://site.example/c`, der die vorgeladene Seite aktiviert.
  - Tab 2 zeigt eine abgemeldete Ansicht von `https://site.example/c`, was den Benutzer verwirrt, da er dachte, dass er angemeldet ist.

Benutzerspezifische Zustandsprobleme können für andere Benutzereinstellungen auftreten, zum Beispiel Spracheinstellungen, Dark-Mode-Präferenzen oder das Hinzufügen von Artikeln zu einem Warenkorb. Sie können auch auftreten, wenn nur ein einzelner Tab beteiligt ist:

- Angenommen, der Benutzer besucht `https://site.example/product`.
- `https://site.example.com/product` lädt `https://site.example.com/cart` vor. Es wird mit 0 Artikeln im Warenkorb vorgeladen.
- Der Benutzer klickt auf die Schaltfläche "In den Warenkorb", die eine Abrufanforderung zum Hinzufügen des Artikels in den Warenkorb des Benutzers auslöst (ohne Neuladen der Seite).
- Der Benutzer klickt auf den Link zu `https://site.example.com/cart`, der die vorgeladene Seite aktiviert.
- Der Benutzer sieht einen leeren Warenkorb, obwohl er etwas hinzugefügt hat.

Die beste Abschwächung für diese Fälle ist, dass sich Seiten bei Bedarf selbst aktualisieren. Zum Beispiel könnte ein Server die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API), oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein [`WebSocket`](/de/docs/Web/API/WebSocket) verwenden. Seiten können sich dann angemessen aktualisieren, einschließlich spekulativ geladener Seiten, die noch nicht aktiviert wurden.

Wo Aktualisierungen nicht möglich sind, können Spekulationen mithilfe des {{httpheader("Clear-Site-Data")}} Antwort-Headers mit den Werten {{httpheader("Clear-Site-Data#prefetchCache", `prefetchCache`)}} oder {{httpheader("Clear-Site-Data#prerenderCache", `prerenderCache`)}} (oder beiden) gelöscht werden, sofern zutreffend.

Der Header kann bei allen same-site HTTP-Anfragen zurückgegeben werden (wie einer `/api/add-to-cart` API-Anforderung).

## Sitzungsverlaufverhalten für vorgeladene Dokumente

Die Aktivierung eines Prerendering/vorgeladenen Dokuments verhält sich aus Endbenutzersicht wie jede konventionelle Navigation. Das aktivierte Dokument wird im Tab angezeigt und dem Sitzungsverlauf hinzugefügt, und alle vorhandenen Weiterhistorieneinträge werden abgeschnitten. Alle Navigationen, die innerhalb des Prerendering-Browsing-Kontexts _vor_ der Aktivierung stattfinden, wirken sich nicht auf den Sitzungsverlauf aus.

Aus Entwicklersicht kann ein Prerendering-Dokument so betrachtet werden, als hätte es einen **trivialen Sitzungsverlauf**, in dem nur ein Eintrag existiert — der aktuelle Eintrag. Alle Navigationen innerhalb des Prerendering-Kontexts werden effektiv ersetzt.

Während API-Funktionen, die auf dem Sitzungsverlauf operieren (zum Beispiel [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation)), innerhalb der Prerendering-Dokumente aufgerufen werden können, operieren sie nur auf dem trivialen Sitzungsverlauf des Kontexts. Folglich nehmen Prerendering-Dokumente nicht am gemeinsamen Sitzungsverlauf ihrer verweisenden Seite teil. Zum Beispiel können sie ihren Referrer nicht über [`History.back()`](/de/docs/Web/API/History/back) navigieren.

Dieses Design stellt sicher, dass Benutzer die erwartete Erfahrung beim Verwenden der Zurücktaste machen — d.h. dass sie zurück zur letzten von ihnen gesehenen Seite gelangen. Sobald ein Prerendering-Dokument aktiviert wird, wird nur ein Sitzungsverlaufeintrag dem gemeinsamen Sitzungsverlauf hinzugefügt, wobei alle vorherigen Navigationen ignoriert werden, die im Prerendering-Browsing-Kontext stattgefunden haben. Ein Schritt zurück im gemeinsamen Sitzungsverlauf — zum Beispiel durch Drücken der Zurücktaste — führt den Benutzer zurück zur Referrer-Seite.

## Plattform-Funktionen, die während des Prerenderings aufgeschoben oder eingeschränkt sind

Da eine vorgeladene Seite in einem versteckten Zustand geöffnet wird, werden mehrere API-Funktionen, die potenziell störende Verhaltensweisen verursachen, in diesem Zustand nicht aktiviert und stattdessen **zurückgestellt**, bis die Seite aktiviert wird. Andere Webplattform-Funktionen, die problematisch sind, wenn sie vorgeladen werden, sind vollständig eingeschränkt. Dieser Abschnitt bietet Details zu den Funktionen, die zurückgestellt oder eingeschränkt sind.

> [!NOTE]
> In wenigen Fällen, in denen ein Aufschieben und Einschränken nicht möglich ist, wird das Prerender abgebrochen.

### Asynchrone API-Aufschiebung

Aufschieben bedeutet, dass die API-Funktion sofort ein pendenten Promise zurückgibt und dann nichts tut, bis die Seite aktiviert wird. Nach der Aktivierung läuft die Funktionalität wie gewohnt und das Promise wird normal aufgelöst oder abgelehnt.

Die Ergebnisse der folgenden asynchronen Funktionen werden in vorgeladenen Dokumenten bis zu ihrer Aktivierung zurückgestellt:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignis
- [Geolocation API](/de/docs/Web/API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/en-US/docs<Web/API/HTMLMediaElement) API: Die Wiedergabeposition wird nicht fortschreiten, während das enthaltene Dokument vorgeladen wird
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (und die Legacy-Version [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Notifications API](/de/docs/Web/API/Notifications_API): [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor, [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Storage API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): [`AudioContext`](/de/docs/Web/API/AudioContext)s dürfen nicht starten, während das enthaltene Dokument vorgeladen wird
- [Web Bluetooth API](/de/docs/Web_API/Web_Bluetooth_API): [`Bluetooth.getDevices()`](/de/docs/Web_API/Bluetooth/getDevices), [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice)
- [WebHID API](/de/docs/Web_API/WebHID_API): [`HID.getDevices()`](/de/docs/Web_API/HID/getDevices), [`HID.requestDevice()`](/de/docs/Web_API/HID/requestDevice)
- [Web Locks API](/de/docs/Web_API/Web_Locks_API): [`LockManager.query()`](/de/docs/Web_API/LockManager/query), [`LockManager.request()`](/de/docs/Web_API/LockManager/request)
- [Web MIDI API](/de/docs/Web_API/Web_MIDI_API): [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess)
- [Web NFC API](/de/docs/Web_API/Web_NFC_API): [`NDefReader.write()`](/de/docs/Web/API/NDEFReader/write), [`NDefReader.scan()`](/de/docs/Web/API/NDEFReader/scan)
- [Web Serial API](/de/docs/Web_API/Web_Serial_API): [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts), [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)
- [Web Speech API](/de/docs/Web_API/Web_Speech_API): [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort), [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start), [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop), [`SpeechSynthesis.cancel()`](/de/docs/Web/API/SpeechSynthesis/cancel), [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause), [`SpeechSynthesis.resume()`](/de/docs/Web/API/SpeechSynthesis/resume), [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)
- [WebUSB API](/de/docs/Web_API/WebUSB_API): [`USB.getDevices()`](/de/docs/Web_API/USB/getDevices), [`USB.requestDevice()`](/de/docs/Web_API/USB/requestDevice)
- [WebXR Device API](/de/docs/Web_API/WebXR_Device_API): [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)

### Implizit eingeschränkte APIs

Die folgenden Funktionen werden in nicht aktivierten Dokumenten automatisch fehlschlagen oder ohne Wirkung ausgeführt.

APIs, die {{Glossary("transient_activation", "transiente Aktivierung")}} oder {{Glossary("sticky_activation", "dauerhafte Aktivierung")}} erfordern:

- Bestätigungsdialoge, die durch das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis generiert werden
- Das Auslösen von Ereignissen in der [Zwischenablage-API](/de/docs/Web/API/Clipboard_API).
- [File System API](/de/docs/Web/API/File_System_API): [`Window.showDirectoryPicker()`](/de/docs/Web_API/Window/showDirectoryPicker), [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker), [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [Fullscreen API](/de/docs/Web_API/Fullscreen_API): [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Idle Detection API](/de/docs/Web_API/Idle_Detection_API): [`IdleDetector.requestPermission()`](/de/docs/Web_API/IdleDetector/requestPermission_static)
- [Keyboard API](/de/docs/Web/API/Keyboard_API): [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) (was Vollbildmodus erfordert)
- [Payment Request API](/de/docs/Web/API/Payment_Request_API): [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
- [Presentation API](/de/docs/Web/API/Presentation_API): [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API): [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Web Share API](/de/docs/Web_API/Web_Share_API): [`Navigator.share()`](/de/docs/Web/API/Navigator/share)
- [`Window.open()`](/de/docs/Web/API/Window/open)

APIs, die erfordern, dass das enthaltene Dokument fokussiert ist:

- [Zwischenablage-API](/de/docs/Web_API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web_API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web_API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web_API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web_API/Clipboard/writeText)

APIs, die erfordern, dass der [`Document.visibilityState`](/de/docs/Web_API/Document/visibilityState) als `"visible"` festgelegt ist:

- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert, dass der Sichtbarkeitszustand des enthaltenen Dokuments `"visible"` ist, _oder_ {{Glossary("transient_activation", "transiente Aktivierung")}})
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Andere eingeschränkte Funktionen

- Download-Links, d.h. {{htmlelement("a")}} und {{htmlelement("area")}} Elemente mit dem `download` Attribut, werden ihre Downloads verzögern, bis das Prerendering abgeschlossen ist.
- Keine Cross-Site-Navigationen: Jedes Dokument, das während des Prerenderings zu einer anderen Website navigiert, wird sofort verworfen, bevor eine Anfrage an die andere Website gesendet wird.
- Eingeschränkte URLs: Dokumente, die vorgeladen werden, können keine nicht-HTTP(S) Top-Level-URLs hosten. Das Einbeziehen der folgenden URL-Typen führt dazu, dass das Prerender sofort verworfen wird:
  - [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
  - [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data)
  - `blob:` URLs
  - `about:` URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungspeicherung: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, aber das Verhalten ist sehr spezifisch, um zu vermeiden, dass Websites brechen, die erwarten, dass nur eine Seite den Sitzungspeicher des Tabs zu einer Zeit zugreift. Eine vorgeladene Seite beginnt daher mit einem Klon des Sitzungspeicherzustands des Tabs von dem Zeitpunkt an, als sie erstellt wurde. Nach der Aktivierung wird der Klon des Speichers der vorgeladenen Seite verworfen und der Hauptspeicherzustand des Tabs wird stattdessen verwendet. Seiten, die Sitzungspeicherung verwenden, können das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis verwenden, um zu erkennen, wann dieser Speicheraustausch erfolgt.
- [`Window.print()`](/de/docs/Web/API/Window/print): Alle Aufrufe dieser Methode werden ignoriert.
- "Einfache Dialog-Methoden" sind wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) gibt sofort zurück, ohne einen Dialog anzuzeigen.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) gibt sofort `false` zurück, ohne einen Dialog anzuzeigen.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) gibt sofort einen leeren String (`""`) zurück, ohne einen Dialog anzuzeigen.
- Dedizierte/geteilte Worker-Skripts werden geladen, aber ihre Ausführung wird aufgeschoben, bis das vorgeladene Dokument aktiviert wird.
- Cross-Origin {{htmlelement("iframe")}}-Ladungen werden während des Prerenderings verzögert, bis die Seite aktiviert wird.

## Schnittstellen

Die Speculation Rules API definiert keine eigenen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.prerendering`](/de/docs/Web_API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument derzeit im Prozess des Prerenderings ist.
- [`prerenderingchange`](/de/docs/Web_API/Document/prerenderingchange_event) Ereignis {{experimental_inline}}
  - : Wird auf einem vorgeladenen Dokument ausgelöst, wenn es aktiviert wird (d.h. der Benutzer die Seite ansieht).
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Start des Prerenderings eines Dokuments und seiner Aktivierung darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) `"navigational-prefetch"` Wert {{experimental_inline}}
  - : Signalisiert, dass der Typ eines Performance-Eintrags ein Prefetch ist.

## HTTP-Header

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'` Wert {{experimental_inline}}
  - : Wird verwendet, um das Festlegen von Spekulationsregeln auf dem Dokument, das abgerufen wird, mithilfe von `<script type="speculationrules">` zu erlauben.
- {{httpheader("Clear-Site-Data")}} `'prefetchCache'` und `'prerenderCache'` Werte {{experimental_inline}}
  - : Verwendung, um Spekulationen zu löschen. Zum Beispiel, wenn Statusänderungen dazu führen, dass die Spekulationen veraltet sind.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Liefert eine Liste von URLs, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregel-Set des Dokuments hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um sich für die Verwendung verschiedener risikoreicher Ladearten anzumelden. Zum Beispiel erfordert das Cross-Origin, same-site Prerendering einen `Supports-Loading-Mode` Wert von `credentialed-prerender`.

## HTML-Funktionen

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um eine Reihe von Prefetch- und/oder Prerender-Spekulationsregeln innerhalb des aktuellen Dokuments zu definieren, die zum Spekulationsregel-Set des Dokuments hinzugefügt werden.

## Beispiele

Sie können [hier eine vollständige Prerender-Demo finden](https://prerender-demos.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerendering von Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von Spekulationsregeln und anderen ähnlichen Leistungsverbesserungsfunktionen.
