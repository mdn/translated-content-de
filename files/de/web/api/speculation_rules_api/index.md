---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Speculation Rules API** wurde entwickelt, um die Leistung zukünftiger Navigationen zu verbessern. Sie richtet sich an Dokument-URLs und nicht an spezifische Ressourcen-Dateien, was sie für Multi-Page-Anwendungen (MPAs) sinnvoller macht als für Single-Page-Anwendungen (SPAs).

Die Speculation Rules API bietet eine Alternative zu dem weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)-Feature und ist dafür ausgelegt, die Chrome-exklusive veraltete Funktion [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) zu ersetzen. Sie bietet viele Verbesserungen gegenüber diesen Technologien sowie eine ausdrucksstärkere und konfigurierbare Syntax, um festzulegen, welche Dokumente vorgeladen oder vorgerendert werden sollen.

> [!NOTE]
> Die Speculation Rules API behandelt keine Subresource-Preloads; hierfür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Nutzung

Speculation-Rules können innerhalb von Inline-Elementen [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) und in externen Textdateien, die durch den {{httpheader("Speculation-Rules")}}-Response-Header referenziert werden, angegeben werden. Die Regeln werden als JSON-Struktur spezifiziert.

Ein Script-Beispiel:

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

Speculation-Rules, die ein `<script>`-Element verwenden, müssen ausdrücklich in der {{httpheader("Content-Security-Policy")}} [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Direktive erlaubt werden, wenn die Seite diese enthält. Dies geschieht durch Hinzufügen einer der `'inline-speculation-rules'`-Quellen, einer Hash-Quelle oder einer Nonce-Quelle.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das Speculation-Rules-JSON enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, muss jedoch mit einem `application/speculationrules+json`-MIME-Typ bereitgestellt werden.

> [!NOTE]
> Regeln können sowohl mit einem Inline-Skript als auch mit dem HTTP-Header gleichzeitig angegeben werden — alle auf ein Dokument angewandten Regeln werden analysiert und zur Liste der Speculation-Rules des Dokuments hinzugefügt.

Sie geben ein unterschiedliches Array an, um die Regeln für jede spekulative Ladeart zu enthalten (zum Beispiel `"prerender"` oder `"prefetch"`). Jede Regel ist in einem Objekt enthalten, das beispielsweise eine Liste von Ressourcen zum Vorladen sowie Optionen wie eine explizite {{httpheader("Referrer-Policy")}}-Einstellung für jede Regel festlegt. Beachten Sie, dass vorgerenderte URLs ebenfalls vorgeladen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Verwenden von Prefetching

Das Einschließen von `prefetch`-Regeln in einem `<script type="speculationrules">`-Element oder einem `Speculation-Rules`-Header führt dazu, dass unterstützende Browser den Antworttext der referenzierten Seiten herunterladen, jedoch keine der von der Seite referenzierten Subressourcen. Wenn eine vorgeladene Seite angesteuert wird, wird sie viel schneller gerendert, als wenn sie nicht vorgeladen wäre.

Die Ergebnisse werden in einem pro-Dokument-Arbeitsspeicher-Cache gespeichert. Alle zwischengespeicherten Prefetches werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich bei einem vorgeladenen Dokument, das Sie dann ansteuern.

Das bedeutet, dass, wenn Sie etwas vorladen, zu dem der Nutzer nicht navigiert, dies im Allgemeinen eine Ressourcenverschwendung darstellt, obwohl das Ergebnis den HTTP-Cache auffüllen kann, wenn dies durch Header erlaubt wird. Dennoch sind die anfänglichen Kosten eines Prefetchs viel geringer als die eines Prerenders, sodass Sie ermutigt werden, das Prefetching umfangreich zu übernehmen, beispielsweise alle signifikanten Seiten Ihrer Website vorzuladen, sofern diese sicher vorgeladen werden können (siehe [Unsichere Bedingungen für spekulatives Laden](#unsichere_bedingungen_für_spekulatives_laden) für weitere Details).

Prefetches innerhalb derselben Domäne und domänenübergreifende Prefetches funktionieren, aber domänenübergreifende Prefetches sind eingeschränkt (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen den beiden). Aus Datenschutzgründen funktionieren domänenübergreifende Prefetches derzeit nur, wenn der Nutzer für die Zielseite keine Cookies gesetzt hat — wir möchten nicht, dass Websites die Nutzeraktivität über vorgeladene Seiten (die sie möglicherweise niemals tatsächlich besuchen) basierend auf zuvor gesetzten Cookies nachverfolgen können.

> [!NOTE]
> In Zukunft wird ein Opt-in für domänenübergreifende Prefetches über den {{httpheader("Supports-Loading-Mode")}}-Header bereitgestellt, aber zum Zeitpunkt des Schreibens war dies noch nicht implementiert (nur ein Opt-in für domänenübergreifendes, gleichseitiges [Prerendering](#verwenden_von_prerendering) war verfügbar).

Für Browser, die dies unterstützen, sollte das Prefetch der Speculation-Rules gegenüber älteren Prefetch-Mechanismen bevorzugt werden, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"`-Option. Da wir wissen, dass das Prefetch der Speculation-Rules für Navigationen und nicht für allgemeines Ressourcenvorladen gedacht ist:

- Es kann für domänenübergreifende Navigationen verwendet werden, wohingegen `<link rel="prefetch">` dies nicht kann.
- Es wird nicht von {{httpheader("Cache-Control")}}-Headern blockiert, wohingegen `<link rel="prefetch">` dies oft tut.

Zusätzlich:

- Senkt das Speculation-Rules-Prefetch bei Bedarf automatisch die Priorität (`fetch()` tut dies nicht).
- Respektiert es die Nutzereinstellungen. Zum Beispiel wird Prefetching nicht durchgeführt, wenn das Nutzergerät im Energiesparmodus oder im Datensparmodus ist.
- Speichert es die vorgeladenen Ressourcen in einem pro-Dokument-Arbeitsspeicher-Cache anstelle des HTTP-Caches, was zu einem etwas schnelleren Prefetching führen kann.

### Verwenden von Prerendering

Das Einschließen von `prerender`-Regeln in einem `<script type="speculationrules">`-Element oder einem `Speculation-Rules`-Header führt dazu, dass unterstützende Browser den Inhalt in ein unsichtbares Tab laden, das in einem pro-Dokument-Arbeitsspeicher-Cache gespeichert wird. Dies umfasst das Laden aller Subressourcen, das Ausführen von JavaScript und sogar das Laden von Subressourcen und das Ausführen von Datenanforderungen, die von JavaScript gestartet werden. Alle zwischengespeicherten Prerenders und deren Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich bei einem vorgerenderten Dokument, das Sie dann ansteuern.

Zukünftige Navigationen zu einer vorgerenderten Seite werden nahezu sofort sein. Der Browser aktiviert das unsichtbare Tab anstelle des üblichen Navigationsprozesses und ersetzt die alte Vordergrundseite durch die vorgerenderte Seite. Wenn eine Seite aktiviert wird, bevor sie vollständig vorgerendert ist, wird sie im aktuellen Zustand aktiviert und lädt dann weiter, was bedeutet, dass Sie dennoch eine erhebliche Leistungsverbesserung sehen werden.

Prerendering verwendet Arbeitsspeicher und Netzwerkbandbreite. Wenn Sie etwas vorladen, zu dem der Nutzer nicht navigiert, sind diese verschwendet (obwohl das Ergebnis den HTTP-Cache füllen kann, wenn dies durch Header erlaubt wird, was eine spätere Nutzung ermöglichen könnte). Die anfänglichen Kosten eines Prerenders sind viel größer als die Kosten eines Prefetchs, und andere Bedingungen könnten den Inhalt auch unsicher zum Vorladen machen (siehe [Unsichere Bedingungen für spekulatives Laden](#unsichere_bedingungen_für_spekulatives_laden) für weitere Details). Daher wird empfohlen, Prerendering sparsamer zu verwenden, wobei sorgfältig die Fälle zu berücksichtigen sind, in denen die Wahrscheinlichkeit hoch ist, dass die Seite angesteuert wird, und Sie denken, dass der Nutzen für die Benutzererfahrung die zusätzlichen Kosten wert ist.

> [!NOTE]
> Um das Ausmaß der potenziellen Ressourcenverschwendung ins Verhältnis zu setzen, verwendet ein Prerender etwa die gleiche Menge an Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden automatisch aufgeschoben, wenn sie vorgerendert werden/bis sie aktiviert werden. Weitere Details finden Sie unter [Plattformfunktionen, die während des Prerenderings aufgeschoben oder eingeschränkt werden](#plattformfunktionen,_die_während_des_prerenderings_aufgeschrieben_oder_eingeschränkt_werden).

Prerendering ist standardmäßig auf gleichseitige Dokumente beschränkt. Domänenübergreifendes, gleichseitiges Prerendering ist möglich — es erfordert, dass das Navigationstarget ein Opt-in über den {{httpheader("Supports-Loading-Mode")}}-Header mit einem Wert von `credentialed-prerender` durchführt. Domänenübergreifendes Prerendering ist derzeit nicht möglich.

Für Browser, die dies unterstützen, sollte das Prerender der Speculation-Rules gegenüber älteren Prerender-Mechanismen bevorzugt werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender):

- `<link rel="prerender">` ist spezifisch für Chrome und wurde nie standardisiert, und das Chrome-Entwicklungsteam befindet sich im Prozess, es einzustellen.
- Es lädt Subressourcen, die über JavaScript geladen werden, wohingegen `<link rel="prerender">` dies nicht tut.
- Es wird nicht von {{httpheader("Cache-Control")}}-Einstellungen blockiert, wohingegen `<link rel="prerender">` dies oft tut.
- Speculation-Rules-Prerender sollte als ein Hinweis und eine fortschreitende Verbesserung betrachtet werden. Im Gegensatz zu `<link rel="prerender">` ist es ein spekulativer Hinweis und der Browser kann basierend auf den Nutzer-Einstellungen, aktuellem Arbeitsspeicherverbrauch oder anderen Heuristiken entscheiden, den Hinweis nicht zu beachten.

### Spekulationsregeln API-Funktionserkennung

Sie können überprüfen, ob die Speculation Rules API unterstützt wird, indem Sie den folgenden Code verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Sie möchten beispielsweise möglicherweise Spekulationsregeln für Prefetching in unterstützenden Browsern einfügen, aber eine ältere Technologie wie `<link rel="prefetch">` in anderen verwenden:

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

## Erkennung vorgeladener und vorgerenderter Seiten

Dieser Abschnitt behandelt verschiedene Möglichkeiten zur Erkennung, ob eine angeforderte Seite vorgeladen oder vorgerendert wurde.

### Serverseitige Erkennung

Anfragen vorgeladener und vorgerenderter Seiten werden mit dem {{httpheader("Sec-Purpose")}}-Request-Header gesendet:

Für Prefetch:

```http
Sec-Purpose: prefetch
```

Für Prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können basierend auf diesem Header antworten, zum Beispiel um spekulative Ladeanfragen zu protokollieren, andere Inhalte zurückzugeben oder sogar zu verhindern, dass spekulative Ladevorgänge stattfinden. Wenn ein Nicht-Erfolgs-Statuscode zurückgegeben wird (irgendein HTTP-Status außerhalb des 200-299 Bereichs nach Redirects), wird die Seite nicht vorgeladen/vorgerendert. Zusätzlich verhindern auch die Statuscodes 204 und 205 das Vorladen (aber nicht das Prefetch).

Die Verwendung eines Nicht-Erfolgs-Codes (zum Beispiel eines 503) ist der einfachste Weg, um serverseitig spekulatives Laden zu verhindern, obwohl es normalerweise eine bessere Herangehensweise ist, das Vorladen/Prerendering zuzulassen und JavaScript zu verwenden, um Aktionen zu verzögern, die nur geschehen sollen, wenn die Seite tatsächlich angezeigt wird.

### JavaScript-Prefetch-Erkennung

Wenn eine Seite vorgeladen wird, gibt ihr [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType)-Eintrag einen Wert von `"navigational-prefetch"` zurück. Sie könnten das Folgende verwenden, um eine Funktion auszuführen, wenn ein Leistungseintrag vom Typ `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist nützlich, wenn Sie die Leistung messen oder wenn Sie Aktionen verzögern möchten, die Probleme verursachen könnten, wenn sie während des Prefetching auftreten (siehe [Unsicheres Prefetching](#unsicheres_prefetching)).

### JavaScript-Prerender-Erkennung

Um eine Aktivität auszuführen, während die Seite vorgerendert wird, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft überprüfen. Sie könnten zum Beispiel einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorgerendertes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Zeit zwischen dem Start des Prerenders und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl vorgerenderte als auch vorgerenderte Seiten prüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die Seite durch den Nutzer aufgerufen wird, wird das vorgerenderte Dokument durch das Ereignis [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) aktiviert. Dieses kann verwendet werden, um Aktivitäten zu starten, die zuvor standardmäßig beim Laden der Seite gestartet wurden, die aber bis zur Ansicht der Seite durch den Nutzer verzögert werden sollen. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, nachdem das Prerendering auf einer vorgerenderten Seite abgeschlossen ist, oder sie sofort auf einer nicht vorgerenderten Seite auszuführen:

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

Dieser Abschnitt behandelt Bedingungen, auf die Sie achten sollten, unter denen Prefetching und/oder Prerendering **unsicher** sind. Das bedeutet, dass das Prefetching/Prerendering von Seiten, die diese Bedingungen aufweisen, in Ihrem Code gemildert oder ganz vermieden werden muss.

### Unsicheres Prefetching

Wie bereits erwähnt, empfehlen wir, das Prefetching umfassend anzuwenden, da das Risiko-Ertrags-Verhältnis relativ gering ist — das Potenzial für Ressourcenverschwendung ist minimal, und die Leistungsverbesserungen können erheblich sein. Sie müssen jedoch sicherstellen, dass vorgeladene Seiten keine Probleme im Ablauf Ihrer Anwendung verursachen.

Wenn ein Prefetch durchgeführt wird, lädt der Browser den Antworttext der referenzierten Seite über eine einzelne GET-Anfrage herunter, zu der der Nutzer möglicherweise zu einem späteren Zeitpunkt navigieren wird. Probleme können speziell dann auftreten, wenn die URL der Anfrage einen serverinitiierten Nebeneffekt bewirkt, den Sie erst auslösen möchten, wenn zur URL navigiert wird.

Zum Beispiel:

- Abmelde-URLs.
- URL für den Sprachwechsel.
- "Zum Warenkorb hinzufügen"-URLs.
- Anmelde-Flow-URLs, bei denen der Server eine SMS sendet, zum Beispiel als Einmalpasswort (OTP).
- URLs, die die Nutzungsbegrenzung eines Benutzers erhöhen, wie das Konsumieren ihres monatlichen kostenlosen Artikelkontingents oder das Starten eines Timers für ihre monatlichen Minuten.
- URLs, die serverseitiges Ad Conversion Tracking initiieren.

Solche Probleme können auf dem Server abgemildert werden, indem Sie den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Header beobachten, während die Anfragen eingehen, und dann spezifischen Code laufen lassen, um problematische Funktionalität zu verzögern. Später, wenn die Seite tatsächlich angesteuert wird, können Sie die verzögerte Funktionalität bei Bedarf über JavaScript initiieren.

> [!NOTE]
> Weitere Details zum Erkennungscode finden Sie im Abschnitt [Erkennung vorgeladener und vorgerenderter Seiten](#erkennung_vorgeladener_und_vorgerenderter_seiten).

Es ist auch potenziell riskant, ein Dokument vorzuziehen, dessen serverseitiger Inhalt sich aufgrund von Aktionen änden kann, die der Benutzer auf der aktuellen Seite durchführen kann. Dies könnte beispielsweise Flash-Sale-Seiten oder Sitzpläne in Kinosälen umfassen. Testen Sie solche Fälle sorgfältig und vermeiden Sie Probleme, indem Sie die Inhalte aktualisieren, sobald die Seite geladen ist. Siehe [Server-gerenderter variierender Zustand](#server-gerenderter_variierender_zustand) für weitere Details zu solchen Fällen.

> [!NOTE]
> Browser werden vorgeladene Seiten für kurze Zeit zwischenspeichern (Chrome zum Beispiel speichert sie für 5 Minuten), bevor sie verworfen werden, sodass in jedem Fall Ihre Benutzer möglicherweise Inhalte sehen, die bis zu 5 Minuten alt sind.

Prefetching ist sicher, wenn alle Nebeneffekte des Ladens der Seite aus der Ausführung von JavaScript resultieren, da das JavaScript nicht ausgeführt wird, bis es aktiviert wird.

Ein letzter Tipp ist, die URLs zu überprüfen, die in Ihrer {{Glossary("robots.txt", "robots.txt")}}-Datei als nicht zulässig aufgeführt sind — normalerweise zeigen diese URLs auf Seiten, die nur von authentifizierten Benutzern zugegriffen werden können und daher nicht in Suchmaschinenergebnissen enthalten sein sollten. Viele dieser URLs sind unbedenklich, aber es kann ein guter Ausgangspunkt sein, um auf URLs zu stoßen, die für Prefetching unsicher sind (d.h. sie unterliegen den oben beschriebenen Bedingungen).

### Unsicheres Prerendering

Prerendering ist riskanter als Prefetching und sollte daher sparsamer durchgeführt werden, in Fällen, wo es sich lohnt. Es gibt mehr unsichere Bedingungen, auf die bei Prerendering zu achten ist, also obwohl der Nutzen höher ist, ist das Risiko es auch.

Wenn ein Prerender durchgeführt wird, lädt der Browser die URL und rendert und lädt den Inhalt in eine unsichtbare Registerkarte. Dies schließt das Ausführen des Inhalts JavaScript und das Laden aller Subressourcen ein, einschließlich jener, die durch JavaScript geladen wurden. Der Inhalt kann potenziell unsicher zum Prerendern sein, wenn eine der folgenden Bedingungen vorliegt:

- Die URL ist [unsicher zum Prefetch](#unsicheres_prefetching). Lesen Sie den vorherigen Abschnitt erneut, wenn Sie dies noch nicht getan haben, und verstehen Sie, dass diese Bedingungen auch für unsicheres Prerendering gleichermaßen gelten.
- Das JavaScript der Seite modifiziert den clientseitigen Speicher (zum Beispiel [Web-Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) beim Laden in einer Weise, die verwirrende Effekte in andere, nicht vorgerenderte Seiten erzeugen könnte, die der Benutzer anschaut.
- Die Seite führt JavaScript aus oder lädt Bilder, die Nebeneffekte haben, wie das Senden von Analysen, das Aufzeichnen von Ad-Impressionen, oder sonstiges Modifizieren des Applikationszustands, als ob der Benutzer bereits damit interagiert hat. Wiederum könnte dies den Fluss der Anwendung beeinträchtigen oder falsche Leistungs- oder Nutzungsberichte verursachen. Siehe [Server-gerenderter variierender Zustand](#server-gerenderter_variierender_zustand) für weitere Details zu solchen Anwendungsfällen.

Um solche Probleme zu mindern, können Sie die folgenden Ansätze verwenden:

- Beobachten Sie den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Header auf dem Server, während die Anfragen eingehen, und verarbeiten Sie die Anfragen spezifischen Code zu verwenden, um problematische Funktionalität zu verzögern.
- Verwenden Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis, um zu erkennen, wann die vorgerenderte Seite tatsächlich aktiviert wird und führen Sie entsprechenden Code aus. Dies ist in zwei Fällen nützlich:
  - Das Aufschieben von Code, der Problem verursachen könnte, wenn er vor der Ansicht der Seite ausgeführt wird. Zum Beispiel möchten Sie möglicherweise erst nach der Aktivierung clientseitigen Speicher aktualisieren oder serverseitigen Zustände mit JavaScript ändern. Dies kann Situationen vermeiden, in denen die Benutzeroberfläche und der Applikationszustand nicht mehr synchron laufen, wie ein Warenkorb, der keine Artikel zeigt, obwohl der Nutzer welche hinzugefügt hat.
  - Falls das Obige nicht möglich ist, können Sie trotzdem Code nach der Aktivierung erneut ausführen, um die App erneut zu aktualisieren. Zum Beispiel könnte eine hochdynamische Flash-Sale-Seite Content-Updates von einer Drittanbieter-Bibliothek empfangen. Wenn Sie die Updates nicht verzögern können, können Sie immer noch neue Updates holen, sobald die Seite angezeigt wird. Vorgerenderte Seiten können in Echtzeit über die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einen andere Mechanismen wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein [`WebSocket`](/de/docs/Web/API/WebSocket) aktualisiert werden. Dies garantiert, dass der Benutzer aktuelle Inhalte nach der Aktivierung des Prerenders sieht.
- Verwalten Sie Ihren Drittanbieter-Analyse-Skripten sorgfältig — verwenden Sie nach Möglichkeit skripts, die prerendering-bewusst sind (zum Beispiel verwenden Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft, um die Ausführung auf vorgerenderten Seiten zu verschieben) wie Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden von Inhalten von domänenübergreifenden {{htmlelement("iframe")}} während des Prerenderings verzögert wird, bis die Seite aktiviert wird. Dies wird gemacht, um Komplikationen zu vermeiden, die durch das Laden domänenübergreifender Seiten verursacht werden, die sich des Prerenderings nicht bewusst sind, und um Komplexitäten im Umgang mit den anzuzeigenden Anmeldeinformationen und Speicher zu vermeiden. Es bedeutet, dass Benutzer in manchen Fällen zunächst leere Felder sehen können, aber es bedeutet auch, dass die meisten Drittanbieter-Widgets wie Ad-Tech während des Prerenderings sicher verwendet werden können.
  - Für Drittanbieter-Skripte, die sich nicht des Prerenderings bewusst zu sein, vermeiden Sie das Laden bis nach der Aktivierung mit dem [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis, wie oben erörtert.

### Server-gerenderter variierender Zustand

Es gibt zwei Haupttypen von servergerenderten Zustand, die berücksichtigt werden müssen: **veralteter Zustand** und **benutzerspezifischer Zustand**. Dies kann sowohl unsicherer für Prefetching als auch Prerendering sein.

- Veralteter Zustand: Nehmen Sie ein Beispiel für eine servergerenderte Liste von Blog-Kommentaren, die zwischen dem Prerendering des Blog-Posts und seiner Ansicht veraltet sein könnte. Dies könnte besonders problematisch sein, wenn die aktuelle Seite ein Admin-Panel ist, wo der Nutzer Spam-Kommentare löscht. Wenn der Nutzer dann zum Blog-Post navigiert, könnten sie verwirrt sein, warum sie die Spam-Kommentare, die sie gerade gelöscht haben, sehen können.
- Benutzerspezifischer Zustand: Nehmen Sie ein Beispiel, bei dem der Anmeldestatus über einen Cookie nachverfolgt wird. Probleme wie die folgenden können auftreten:
  - Der Nutzer besucht `https://site.example/a` in Tab 1 und `https://site.example/b` in Tab 2, während er abgemeldet ist.
  - `https://site.example/b` vorladen `https://site.example/c`. Es wird im abgemeldeten Zustand vorgeladen.
  - Der Benutzer meldet sich auf `https://site.example` in Tab 1 an.
  - Der Benutzer wechselt zu Tab 2 und klickt den Link zu `https://site.example/c`, was die vorgerenderte Seite aktiviert.
  - Tab 2 zeigt eine abgemeldete Ansicht von `https://site.example/c`, was den Benutzer verwirrt, da er dachte, dass er angemeldet war.

Benutzerspezifische Zustandsprobleme können auch bei anderen Benutzereinstellungen auftreten, wie Sprachpräferenzen, Dunkelmodus-Einstellungen oder beim Hinzufügen von Artikeln in den Warenkorb. Sie können auch auftreten, wenn nur ein einzelner Tab beteiligt ist:

- Angenommen, der Benutzer besucht `https://site.example/product`.
- `https://site.example.com/product` prerendert `https://site.example.com/cart`. Es wird mit 0 Artikeln im Warenkorb prerendert.
- Der Benutzer klickt auf die "In den Warenkorb"-Schaltflächen, die eine Abrufanfrage auslösen, um den Artikel in den Warenkorb des Benutzers einzufügen (ohne Seitenneuladen).
- Der Benutzer klickt auf den Link zu `https://site.example.com/cart`, was die vorgerenderte Seite aktiviert.
- Der Benutzer sieht einen leeren Warenkorb, obwohl er gerade etwas hinzugefügt hat.

Die beste Minderung für diese Fälle, und in der Tat, wann immer Inhalte mit dem Server aus der Synchronisation geraten können, ist, dass Seiten sich selbst aktualisieren, wenn nötig. Beispielsweise könnte ein Server die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein [`WebSocket`](/de/docs/Web/API/WebSocket) verwenden. Seiten können sich dann angemessen aktualisieren, auch spekulativ geladene Seiten, die noch nicht aktiviert wurden.

## Sitzungsverlauf-Verhalten für vorgerenderte Dokumente

Das Aktivieren eines dokuments prirendering/prendereded funktioniert wie jede konventionelle Navigation, aus der Sicht des end-nutzers. Das aktivierte Dokument wird im Tab angezeigt und dem Sitzungsverlauf angehängt, und alle vorhandenen Vorwärtsverlaufseinträge werden entfernt. Alle Navigationen innerhalb des prerenderingbrowsingcontex vor der Aktivierung beeinflussen nicht den Sitzungsverlauf.

Aus der Sicht des Entwicklers kann ein prerenderingdokument als **trivialer Sitzungsverlauf** betrachtet werden, bei dem nur ein Eintrag — der aktuelle Eintrag — existiert. Alle Navigationen innerhalb des prerenderingkontexts werden effektiv ersetzt.

Während API-Funktionen, die auf Sitzungsverlauf operieren (zum Beispiel [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation)) in prerenderingdokumenten aufgerufen werden können, operieren diese nur auf den trivialen Sitzungsverlauf des Kontexts. Infolgedessen nehmen prerenderingdokumente nicht am gemeinsamen Sitzungsverlauf ihrer verweisenden Seite teil. Beispielsweise können sie nicht zu ihrem Verweisenden über [`History.back()`](/de/docs/Web/API/History/back) navigieren.

Dieses Design stellt sicher, dass Benutzer die erwartete Erfahrung machen, wenn sie die Zurücktaste verwenden — d.h. dass sie zurück zu dem Letzten, was sie gesehen haben, gebracht werden. Sobald ein prerenderingdokument aktiviert wird, wird nur ein einziger Sitzungsverlaufseintrag dem gemeinsamen Sitzungsverlauf angehängt, wodurch alle vorherigen Navigationen ignoriert werden, die innerhalb des prerenderingbrowsingcontext stattfanden. Der Versuch, einen Schritt im gemeinsamen Sitzungsverlauf zurückzugehen — zum Beispiel, indem man die Zurücktaste drückt — bringt den Benutzer zurück zur Verweisseite.

## Plattformfunktionen, die während des Prerenderings aufgeschrieben oder eingeschränkt werden

Da eine vorgerenderte Seite in einem versteckten Zustand geöffnet wird, werden mehrere Eingenschaften der API-Funktionen, die potenziell intrusive Verhaltensweisen verursachen, in diesem Zustand nicht aktiviert und stattdessen **zurückgestellt** bis die Seite aktiviert wird. Andere Web-Plattformeigenschaften, die bei Prerendering problematisch sind, sind insgesamt eingeschränkt. Dieser Abschnitt liefert Details darüber, welche Eigenschaften zurückgestellt oder eingeschränkt werden.

> [!NOTE]
> In den wenigen Fällen, in denen es nicht möglich ist, aufgeschobene und eingeschränkte Optionen zu verwenden, wird das Prerender abgebrochen.

### Asynchrone API-Rückstellung

Rückstellung bedeutet, dass die API-Funktion sofort ein ausstehendes Versprechen zurückgibt und dann nichts tut, bis die Seite aktiviert wird. Nach der Aktivierung läuft die Funktion normal weiter und das Versprechen wird normal gelöst oder abgelehnt.

Die folgenden asynchronen Funktionen Ergebnisse werden in prerendereddokumten bis zur ihrer Aktivierung aufgerufen:

- [Audio-Ausgabegeräte-API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Hintergrund-Abruf-API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Erweiterte Medien-API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignis
- [Geolocation API](/de/docs/Web/API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API: Die Wiedergabezeit wird nicht voranschreiten, während sich das enthaltende Dokument im Prerenderingstatus befindet
- [Leerlauferkennung-API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Medienaufnahme- und Streams-API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (und die veraltete [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) Version), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API): [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor, [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push-API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Bildschirmorientierungs-API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
- [Sensor-APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker-API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Speicher-API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): [`AudioContext`](/de/docs/Web/API/AudioContext)s dürfen nicht starten, während das enthaltende Dokument prerendering ist
- [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API): [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices), [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice)
- [WebHID API](/de/docs/Web/API/WebHID_API): [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices), [`HID.requestDevice()`](/de/docs/Web/API/HID/requestDevice)
- [Web Locks API](/de/docs/Web/API/Web_Locks_API): [`LockManager.query()`](/de/docs/Web/API/LockManager/query), [`LockManager.request()`](/de/docs/Web/API/LockManager/request)
- [Web MIDI API](/de/docs/Web/API/Web_MIDI_API): [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess)
- [Web NFC API](/de/docs/Web/API/Web_NFC_API): [`NDefReader.write()`](/de/docs/Web/API/NDEFReader/write), [`NDefReader.scan()`](/de/docs/Web/API/NDEFReader/scan)
- [Web Seriell-API](/de/docs/Web/API/Web_Serial_API): [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts), [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)
- [Web Speech API](/de/docs/Web/API/Web_Speech_API): [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort), [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start), [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop), [`SpeechSynthesis.cancel()`](/de/docs/Web/API/SpeechSynthesis/cancel), [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause), [`SpeechSynthesis.resume()`](/de/docs/Web/API/SpeechSynthesis/resume), [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)
- [WebUSB API](/de/docs/Web/API/WebUSB_API): [`USB.getDevices()`](/de/docs/Web/API/USB/getDevices), [`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice)
- [WebXR-Geräte-API](/de/docs/Web/API/WebXR_Device_API): [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)

### Implizit eingeschränkte APIs

Die folgenden Funktionen werden in nicht aktivierten Dokumenten automatisch fehlschlagen oder nicht ausgeführt.

APIs, die {{Glossary("transient_activation", "transiente Aktivierung")}} oder {{Glossary("sticky_activation", "sticky-activation")}} erfordern:

- Bestätigungsdialoge erstellt durch das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis
- Das Feuern von irgendeinem Ereignis in der [Zwischenablage-API](/de/docs/Web/API/Clipboard_API).
- [Dateisystem-API](/de/docs/Web/API/File_System_API): [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker), [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker), [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [Vollbild-API](/de/docs/Web/API/Fullscreen_API): [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Leerlauferkennung-API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static)
- [Tastatur-API](/de/docs/Web/API/Keyboard_API): [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) (im Vollbildmodus erforderlich)
- [Zahlungsanforderungs-API](/de/docs/Web/API/Payment_Request_API): [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
- [Präsentations-API](/de/docs/Web/API/Presentation_API): [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start)
- [Pointer-Lock-API](/de/docs/Web/API/Pointer_Lock_API): [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Bildschirmaufnahme-API](/de/docs/Web/API/Screen_Capture_API): [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Web Share API](/de/docs/Web/API/Web_Share_API): [`Navigator.share()`](/de/docs/Web/API/Navigator/share)
- [`Window.open()`](/de/docs/Web/API/Window/open)

APIs, die erfordern, dass das enthaltende Dokument fokussiert ist:

- [Zwischenablage-API](/de/docs/Web/API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)

APIs, die erfordern, dass der [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) des enthaltenden Dokuments `"sichtbar"` ist:

- [Bild-im-Bild-API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert den Sichtbarkeitszustand des enthaltenen Dokuments auf `"sichtbar"`, _oder_ {{Glossary("transient_activation", "transiente Aktivierung")}})
- [Bildschirm-Wake-Lock-API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Andere eingeschränkte Funktionen

- Download-Links, d.h. {{htmlelement("a")}} und {{htmlelement("area")}}-Elemente mit dem `download`-Attribut, werden ihre Downloads verzögern, bis das Prerendering abgeschlossen ist.
- Keine domänenübergreifenden Navigationen: Jedes prerenderingdokument, das zu einer anderen Seite navigiert, wird sofort verworfen, bevor eine Anfrage an diese andere Seite gesendet wird.
- Eingeschränkte URLs: Prerenderingdokumente können keine nicht-HTTP(S)-Top-Level-URLs bereitstellen. Das Einschließen der folgenden URL-Typen führt dazu, dass das Prerender sofort verworfen wird:
  - [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
  - [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data)
  - `blob:` URLs
  - `about:` URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungsspeicher: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, aber das Verhalten ist sehr spezifisch, um zu vermeiden, dass Seiten brechen, die erwarten, dass nur eine Seite auf den Tab-Sitzungsspeicher auf einmal zugreift. Eine prerenderte Seite beginnt daher mit einem Klon des Tab-Sitzungsspeicherzustands von dem, als sie erstellt wurde. Bei der Aktivierung wird der Klon des Sitzungsspeichers der prerendereten Seite verworfen und der Hauptzählerspeicherzustand des Tabs stattdessen verwendet. Seiten, die Sitzspeicher verwenden, können das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis verwenden, um zu erkennen, wann dieser Speicheraustausch auftritt.
- [`Window.print()`](/de/docs/Web/API/Window/print): Alle Aufrufe dieser Methode werden ignoriert.
- "Einfache Dialogmethoden" sind wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) gibt sofort zurück, ohne einen Dialog anzuzeigen.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) gibt sofort `false` zurück, ohne einen Dialog anzuzeigen.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) gibt sofort einen leeren String (`""`) zurück, ohne einen Dialog anzuzeigen.
- Dedizierte / geteilte Arbeitsscripts werden geladen, aber deren Ausführung bis zur Aktivierung des prerendered-Dokuments zurückgesetzt.
- Cross-origin {{htmlelement("iframe")}}-Ladungen werden während des Prerenderings verzögert, bis die Seite aktiviert wird.

## Schnittstellen

Die Speculation Rules API definiert keine eigenen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument derzeit im Prerendering-Prozess ist.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis {{experimental_inline}}
  - : Wird auf einem vorgerenderten Dokument ausgelöst, wenn es aktiviert wird (d.h. der Nutzer betrachtet die Seite).
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Start eines Dokuments zum Prerendering und der Aktivierung darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) `"navigational-prefetch"` Wert {{experimental_inline}}
  - : Signalisieren, dass der Typ eines Leistungseintrags ein Prefetch ist.

## HTTP Headers

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'` Wert {{experimental_inline}}
  - : Wird verwendet, um dem Nutzern von `<script type="speculationrules">` die Definition der Spekulationsregeln zuzulassen, wenn das Dokument abgeholt wird.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen mit Spekulationsregel-JSON-Definitionen verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelsatz des Dokuments hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Von einem Navigationstarget gesetzt, um das Verwenden verschiedener risikoreicher Ladearten zu ermöglichen. Zum Beispiel erfordert dungeonsübergreifendes, gleichsetiges Prerendering einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## HTML-Funktionen

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um ein Set aus Prefetch- und/oder Prerender-Spekulationsregeln innerhalb des aktuellen Dokuments zu definieren, die zum Spekulationsregelsatz des Dokumentes hinzugefügt werden.

## Beispiele

Ein [komplettes Prerender-Demo finden Sie hier](https://prerender-demos.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von Spekulationsregeln und anderen ähnlichen Leistungsverbesserungsmerkmalen.
