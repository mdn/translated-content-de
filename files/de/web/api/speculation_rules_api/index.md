---
title: Spekulationsregeln-API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: bca6332a9b752ba195f544e115ada4bff76bc822
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Spekulationsregeln-API** ist darauf ausgelegt, die Leistung für zukünftige Navigationen zu verbessern. Sie zielt auf Dokument-URLs statt auf spezifische Ressourcendateien ab und ist daher eher für Multi-Page-Anwendungen (MPAs) geeignet als für Single-Page-Anwendungen (SPAs).

Die Spekulationsregeln-API bietet eine Alternative zur weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch)-Funktion und ist darauf ausgelegt, die ausschließlich in Chrome verfügbare und veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender)-Funktion zu ersetzen. Sie bietet viele Verbesserungen gegenüber diesen Technologien sowie eine ausdrucksvollere und konfigurierbarere Syntax zur Spezifizierung, welche Dokumente vorgeladen oder vorgerendert werden sollen.

> [!NOTE]
> Die Spekulationsregeln-API behandelt keine Subressourcen-Vorfetche; hierfür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Nutzung

Spekulationsregeln können innerhalb von Inline-Elementen [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) und externen Textdateien, die durch den {{httpheader("Speculation-Rules")}} Antwort-Header referenziert werden, spezifiziert werden. Die Regeln sind als JSON-Struktur spezifiziert.

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

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen in der {{httpheader("Content-Security-Policy")}} [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)-Direktive ausdrücklich erlaubt werden, wenn die Website dies umfasst. Dies erfolgt durch Hinzufügen einer der `'inline-speculation-rules'` Quellen, einer Hash-Quelle oder einer Nonce-Quelle.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das Spekulationsregeln-JSON enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, muss jedoch mit einem `application/speculationrules+json` MIME-Typ bereitgestellt werden.

> [!NOTE]
> Regeln können sowohl mithilfe eines Inline-Skripts als auch eines HTTP-Headers gleichzeitig spezifiziert werden – alle auf ein Dokument angewendeten Regeln werden geparst und der Spekulationsregeln-Liste des Dokuments hinzugefügt.

Sie spezifizieren ein unterschiedliches Array, um die Regeln für jeden spekulativen Lademodus (beispielsweise `"prerender"` oder `"prefetch"`) zu enthalten. Jede Regel ist in einem Objekt enthalten, das beispielsweise eine Liste von zu ladenden Ressourcen sowie Optionen wie eine explizite {{httpheader("Referrer-Policy")}}-Einstellung für jede Regel spezifiziert. Beachten Sie, dass vorgeladene URLs auch vorgeladen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Verwendung des Vorladens

Das Einfügen von `prefetch`-Regeln innerhalb eines `<script type="speculationrules">`-Elements oder eines `Speculation-Rules`-Headers veranlasst unterstützende Browser, den Antworttext der referenzierten Seiten herunterzuladen, jedoch keine der von der Seite referenzierten Subressourcen. Wenn eine vorgeladene Seite navigiert wird, wird sie viel schneller gerendert, als wenn sie nicht vorgeladen worden wäre.

Die Ergebnisse werden im speicherschichtigen Zwischenspeicher pro Dokument gehalten. Jeder zwischengespeicherte Vorladen wird verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich, ein vorgeladenes Dokument, das Sie dann besuchen.

Das bedeutet, dass, wenn Sie etwas vorladen, zu dem der Benutzer nicht navigiert, es im Allgemeinen eine Verschwendung von Ressourcen ist, obwohl das Ergebnis den HTTP-Cache füllen kann, wenn die Header dies zulassen. Dennoch sind die Vorlaufkosten eines Vorladens viel geringer als die Vorlaufkosten eines Vorabladens, sodass Sie ermutigt werden, das Vorladen breit zu übernehmen, zum Beispiel alle wichtigen Seiten Ihrer Website vorzuladen, vorausgesetzt, sie sind sicher für das Vorladen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Einzelheiten).

Gleiche Site- und Seitenübergreifendes Vorladen funktionieren, aber seitenübergreifendes Vorladen ist eingeschränkt (siehe ["gleiche Site" und "seitenübergreifend"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen den beiden). Aus Datenschutzgründen funktionieren seitenübergreifende Vorlagen derzeit nur, wenn der Benutzer keine Cookies für die Zielsite gesetzt hat – wir möchten nicht, dass Websites in der Lage sind, Benutzeraktivitäten über vorgeplante Seiten (von denen sie möglicherweise niemals tatsächlich besucht werden) basierend auf zuvor gesetzten Cookies zu verfolgen.

> [!NOTE]
> In Zukunft wird ein Opt-in für seitenübergreifendes Vorladen über den {{httpheader("Supports-Loading-Mode")}}-Header bereitgestellt, aber dies war zum Zeitpunkt des Schreibens nicht implementiert (nur seitenübergreifendes Vorabfracht-Opt-in war verfügbar).

Für Browser, die es unterstützen, sollte das Spekulationsregeln-Vorladen gegenüber älteren Vorlademechanismen, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) und {{domxref("Window/fetch", "fetch()")}} mit einer `priority: "low"` Option darauf, bevorzugt werden. Denn wir wissen, dass das Vorladen von Spekulationsregeln für Navigationen bestimmt ist, nicht für allgemeines Ressourcenvorladen:

- Es kann für seitenübergreifende Navigationen verwendet werden, während `<link rel="prefetch">` dies nicht kann.
- Es wird nicht durch {{httpheader("Cache-Control")}} Headers blockiert, während `<link rel="prefetch">` dies oft tut.

Darüber hinaus:

- Spekulationsregeln-Vorladen senkt automatisch die Priorität, wenn nötig (`fetch()` tut dies nicht).
- Es respektiert die Konfiguration des Benutzers. Zum Beispiel wird das Vorladen nicht durchgeführt, wenn das Gerät des Benutzers im Energiespar- oder Datensparmodus ist.
- Die vorgeladenen Ressourcen werden in einem pro Dokument-gedächtnisbasierten Zwischenspeicher anstatt im HTTP-Cache gespeichert, was möglicherweise zu einem etwas schnelleren Vorladen führt.

### Verwendung des Vorabfrachtens

Das Einfügen von `prerender`-Regeln innerhalb eines `<script type="speculationrules">`-Elements oder eines `Speculation-Rules`-Headers veranlasst unterstützende Browser, den Inhalt abzurufen, zu rendern und in eine unsichtbare Registerkarte zu laden, die in einem speichergestützten Zwischenspeicher pro Dokument gespeichert ist. Dies schließt das Laden aller Subressourcen, das Ausführen aller JavaScript-Programme und sogar das Laden von Subressourcen sowie das Durchführen von Datenabrufen ein, die durch JavaScript gestartet wurden. Jegliche zwischengespeicherten Vorabrufe und deren Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, außer natürlich, ein vorabgeladenes Dokument, das Sie dann besuchen.

Zukünftige Navigationen zu einer vorgerenderten Seite werden nahezu sofort erfolgen. Der Browser aktiviert die unsichtbare Registerkarte anstelle des üblichen Navigationsprozesses, indem er die alte Vordergrundseite durch die vorgerenderte Seite ersetzt. Wenn eine Seite aktiviert wird, bevor sie vollständig vorgerendert wurde, wird sie im aktuellen Zustand aktiviert und dann weiterhin geladen, was bedeutet, dass Sie dennoch eine signifikantere Leistungsverbesserung sehen werden.

Das Vorabfracht verwendet sowohl Speicher als auch Netzwerkbandbreite. Wenn Sie etwas vorabfracht und der Benutzer navigiert nicht dorthin, sind diese verschwendet (auch wenn das Ergebnis den HTTP-Cache auffüllen kann, wenn die Header dies zulassen, um später verwendet zu werden). Die Vorlaufkosten eines Vorabfrachtens sind viel höher als die des Vorladens, und andere Bedingungen könnten den Inhalt auch unsicher machen, um vorfracht zu werden (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Einzelheiten). Daher werden Sie ermutigt, das Vorabfracht sparsamer einzusetzen, wobei Sie sorgfältig überlegen sollten, in welchen Fällen eine hohe Wahrscheinlichkeit besteht, dass zur Seite navigiert wird, und ob der Benutzererfahrungsnutzen die zusätzlichen Kosten wert ist.

> [!NOTE]
> Um das Ausmaß des potenziellen Ressourcenverschwendungs einzuordnen, verbraucht ein Vorabfracht etwa die gleiche Menge an Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden automatisch zurückgestellt, wenn sie vorfracht/aktiviert werden. Siehe [Plattformfunktionen, die während des Vorabfrachtens zurückgestellt oder eingeschränkt sind](#plattformfunktionen,_die_während_des_vorabshields_zurückgestellt_oder_eingeschränkt_sind) für weitere Einzelheiten.

Das Vorabfracht ist standardmäßig auf gleichartige Dokumente beschränkt. Das vorabfracht von seitenübergreifenden, gleichen Seiten ist möglich – es erfordert, dass das Navigationstarget ein Opt-in über den {{httpheader("Supports-Loading-Mode")}}-Header mit einem Wert von `credentialed-prerender` nutzt. Das Vorabfracht von anderen Seiten ist derzeit nicht möglich.

Für Browser, die es unterstützen, sollte das Spekulationsregeln-Vorabfracht gegenüber älteren Vorabfrachtmechanismen bevorzugt werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender):

- `<link rel="prerender">` ist Chrome-spezifisch und wurde nie standardisiert, und das Chrome-Entwicklungsteam ist im Prozess, es auszusondern.
- Es lädt durch JavaScript geladene Subressource, während `<link rel="prerender">` dies nicht tut.
- Es wird nicht durch {{httpheader("Cache-Control")}}-Einstellungen blockiert, während `<link rel="prerender">` dies oft tut.
- Spekulationsregeln-Vorabfracht sollten als Hint und progressive Verbesserung behandelt werden. Im Gegensatz zu `<link rel="prerender">` ist es ein spekulativer Hinweis, und der Browser kann wählen, nicht auf den Hinweis zu reagieren, basierend auf Benutzereinstellungen, aktuellem Speicherverbrauch oder anderen Heuristiken.

### Erkennung von Funktionen der Spekulationsregeln-API

Sie können überprüfen, ob die Spekulationsregeln-API unterstützt wird, indem Sie den folgenden Code verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Ihr Browser unterstützt die Spekulationsregeln-API.");
}
```

Zum Beispiel könnten Sie Spekulationsregeln zum Vorladen in unterstützenden Browsern einfügen, aber eine ältere Technologie wie `<link rel="prefetch">` in anderen verwenden:

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

## Erkennung von vorgeladenen und vorabfrachteten Seiten

Dieser Abschnitt betrachtet verschiedene Möglichkeiten, ob eine angeforderte Seite vorgeladen oder vorabfrachtet wurde.

### Serverseitige Erkennung

Vorgeladene und vorabfrachtete Seitenanfragen werden mit dem {{httpheader("Sec-Purpose")}}-Header gesendet:

Für vorgeladen:

```http
Sec-Purpose: prefetch
```

Für vorabfracht:

```http
Sec-Purpose: prefetch;prerender
```

Server können basierend auf diesem Header reagieren, um beispielsweise spekulative Ladevorgänge zu protokollieren, unterschiedlichen Inhalt zu liefern oder sogar zu verhindern, dass spekulatives Laden stattfindet. Wenn ein Non-Success-Antwortcode zurückgegeben wird (jeder HTTP-Status, der nicht im 200-299-Bereich nach Umleitungen liegt), wird die Seite nicht vorgeladen/vorabfrachtet. Zusätzlich verhindern die 204- und 205-Statuscodes das Vorabfracht (verhindern aber nicht das Vorladen).

Die Verwendung eines Non-Success-Codes (zum Beispiel eine 503) ist der einfachste Weg, serverseitig spekulatives Laden zu verhindern, obwohl es normalerweise empfehlenswerter ist, das Vorladen/Vorabfracht zuzulassen und stattdessen JavaScript zu verwenden, um alle Aktionen zu verzögern, die nur ausgeführt werden sollen, wenn die Seite tatsächlich angesehen wird.

### Erkennung von JavaScript-Vorladungen

Wenn eine Seite vorgeladen wird, gibt ihr {{domxref("PerformanceResourceTiming.deliveryType")}}-Eintrag einen Wert von `"navigational-prefetch"` zurück. Sie könnten das Folgende verwenden, um eine Funktion zu starten, wenn ein Performance-Eintrag des Typs `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Autor-definierte Funktion
}
```

Diese Technik ist nützlich, um die Leistung zu messen, oder wenn Sie Aktionen verschieben möchten, die während des Vorladens möglicherweise Probleme verursachen würden (siehe [Unsicheres Vorladen](#unsicheres_vorladen)).

### Erkennung von JavaScript-Vorabfrachtungen

Um eine Aktivität auszuführen, während die Seite vorabfrachtet, können Sie die {{domxref("Document.prerendering")}}-Eigenschaft überprüfen. Sie könnten beispielsweise einige Analysen ausführen:

```js
if (document.prerendering) {
  analytics.sendInfo("bin so weit gekommen während des Vorabfrachtens!");
}
```

Wenn ein vorabfrachtetes Dokument aktiviert wird, wird {{domxref("PerformanceNavigationTiming.activationStart")}} auf einen {{domxref("DOMHighResTimeStamp")}} gesetzt, der die Zeit zwischen dem Start des Vorabfrachtens und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl das Vorabfracht _als auch_ vorabgefrachte Seiten überprüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vom Benutzer angesehene Seite aktiviert wird, wird das Ereignis {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} ausgelöst. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die zuvor standardmäßig beim Laden der Seite gestartet würden, die Sie jedoch verzögern möchten, bis die Seite vom Benutzer angesehen wird. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Vorabfracht auf einer vorabgefrachten Seite abgeschlossen ist oder sie sofort auf einer nicht vorabgefrachten Seite auszuführen:

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

Dieser Abschnitt behandelt Bedingungen, auf die Sie achten sollten, bei denen Vorladungen und/oder Vorabfrachtungen **unsicher** sind. Dies bedeutet, dass das Vorladen/Vorabfracht von Seiten, die diese Bedingungen aufweisen, möglicherweise Abmilderungen in Ihrem Code erfordert oder insgesamt vermieden werden muss.

### Unsicheres Vorladen

Wie bereits erwähnt, empfehlen wir Ihnen, das Vorladen umfassend zu übernehmen, da das Risiko-/Belohnungsverhältnis recht gering ist — das Potenzial für Ressourcenverschwendung ist minimal, und die Leistungsverbesserungen können erheblich sein. Sie müssen jedoch sicherstellen, dass vorgeladene Seiten keine Probleme mit dem Ablauf Ihrer Anwendung verursachen.

Wenn ein Vorladen durchgeführt wird, lädt das Browser die Antwort des referenzierten Seite über eine einzelne GET-Anfrage herunter, die der Benutzer zu einem späteren Zeitpunkt navigieren kann. Probleme können speziell dann auftreten, wenn die URL der Anfrage einen servergestützten Nebeneffekt verursacht, den Sie nicht möchten, bis die URL tatsächlich navigiert wird.

Zum Beispiel:

- Abmeldungs-URLs.
- Sprachumschaltungs-URLs.
- "Zum Warenkorb hinzufügen"-URLs.
- Anmeldefluss-URLs, bei denen der Server ein SMS versendet, zum Beispiel als einmaliges Passwort (OTP).
- URLs, die die Nummern der monatlichen freien Artikel eines Benutzers erhöhen oder den Zähler für die monatlichen Minuten starten.
- URLs, die serverseitige Anzeigenkonversionstracking starten.

Solche Probleme können auf dem Server vermieden werden, indem Sie auf den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Header achten, während die Anfragen eingehen, und dann konkreten Code ausführen, um problematische Funktionalitäten zu einer späteren Zeit auszuführen. Bei der späteren Navigation zur Seite können Sie bei Bedarf die aufgeschobene Funktionalität über JavaScript initiieren.

> [!NOTE]
> Sie finden weitere Details zum Erkennungscode im Abschnitt [Erkennung von vorgeladenen und vorabfrachteten Seiten](#erkennung_von_vorgeladenen_und_vorabfrachteten_seiten).

Es ist auch potenziell riskant, ein Dokument vorzuladen, dessen vom Server gerenderte Inhalte Sie bearbeiten können, um den Inhalt nach dem Aktivieren zu aktualisieren. Siehe [Von Server gerenderter variabler Zustand](#von_server_gerenderter_variabler_zustand) für mehr Einzelheiten zu diesen Fällen.

> [!NOTE]
> Browser werden vorgeladene Seiten für kurze Zeit (Chrome beispielsweise speichert sie für 5 Minuten) zwischenspeichern, bevor sie verworfen werden, sodass Ihre Benutzer möglicherweise Inhalte sehen, die bis zu 5 Minuten veraltet sind.

Vorladen ist sicher, wenn alle Nebeneffekte des Ladens der Seite durch JavaScript-Ausführungen resultieren, da das JavaScript nicht ausgeführt wird, bis es aktiviert wird.

Ein abschließender Tipp ist, die in Ihrer {{glossary("robots.txt")}}-Datei aufgeführten URLs zu überprüfen — normalerweise zeigen diese URLs auf Seiten, die nur von authentifizierten Benutzern aufgerufen werden können und daher nicht in den Suchmaschinenergebnissen enthalten sein sollten. Viele davon sind in Ordnung, aber es könnte ein guter Ausgangspunkt sein, um URLs zu finden, die unsicher zum Vorladen sind (d.h. sie zeigen die oben beschriebenen Bedingungen auf).

### Unsicheres Vorabfracht

Vorabfracht ist riskanter zu übernehmen als Vorladen und sollte daher sparsamer genutzt werden, in Fällen, in denen es sich lohnt. Es gibt mehr unsichere Bedingungen beim Vorabfracht, sodass das Risiko zwar höher, aber auch die Belohnung ist.

Wenn ein Vorabfracht durchgeführt wird, führt der Browser eine GET-Anfrage zur URL über einen unsichtbaren Tab aus. Dazu gehört das Ausführen breites Spektrum an Sicherheitsmaßnahmen durch das Vorladen von Speichern und das Ausführen diverser Unterelemente. Wenn eine Seite vorgerendert wird, kann ein Problem auftreten, wenn einige der nachstehenden Bedingungen auftreten:

- Die URL ist [unsicher zum Vorladen](#unsicheres_vorladen). Lesen Sie den vorherigen Abschnitt, wenn Sie ihn noch nicht verstanden haben, und verstehen, dass diese Bedingungen auch auf unsicheres Vorabfracht zutreffen.
- Das JavaScript der Seite ändert den clientseitigen Speicher (wie [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) beim Laden auf eine Weise, die möglicherweise verwirrende Effekte für andere, nicht vorabgefrachte Seiten, die der Benutzer gerade betrachtet, verursachen könnte.
- Die Seite führt JavaScript aus oder lädt Bilder, die Nebeneffekte verursachen, wie das Senden von Analysen, das Aufzeichnen von Werbeimpressionen oder das Ändern des Anwendungsstatus so, als ob der Benutzer bereits damit interagiert hätte. Wiederrum kann dies den Ablauf der Anwendung beeinflussen oder falsche Leistungs- oder Gebrauchsmeldungen verursachen. Siehe [Server-rendered varying state](#von_server_gerenderter_variabler_zustand) für Details zu solchen Anwendungsfällen.

Um solche Probleme zu mindern, können Sie die folgenden Techniken verwenden:

- Achten Sie auf den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Header vom Server, während die Anfragen eingehen, und führen Sie dann spezifischen Code aus, um problematische Funktionalitäten zu einer späteren Zeit auszuführen.
- Verwenden Sie das {{domxref("Document.prerenderingchange_event", "prerenderingchange")}}-Ereignis, um zu erkennen, wann die vorabgefrachte Seite tatsächlich aktiviert ist, und führen Sie den Code entsprechend aus. Dies ist nützlich in zwei Fällen:
  - Verzingern von Code, der problematisch sein könnte, wenn er ausgeführt wird, bevor die Seite betrachtet wird. Beispielsweise möchten Sie möglicherweise warten, bis nach der Aktivierung der clientseitige Speicher aktualisiert oder der serverseitige Zustand über JavaScript geändert wird. Dies kann Situationen verhindern, in denen die Benutzeroberfläche und der Anwendungsstatus asynchron werden oder inkonsistent sind, zum Beispiel wenn der Einkaufswagen zeigt, dass keine Artikel im Warenkorb sind, obwohl der Benutzer einige hinzugefügt hat.
  - Wenn das Obige nicht möglich ist, können Sie dennoch den Code erneut ausführen, nachdem die Seite aktiviert wurde, um die App wieder auf den neuesten Stand zu bringen. Eine sehr dynamische Flash-Sale-Seite könnte beispielsweise auf Inhalte von einer Drittanbieterbibliothek warten. Wenn Sie die Updates nicht verzögern können, können Sie jederzeit frische Updates erhalten, sobald der Benutzer die Seite betrachtet. Vorabgefrachte Seiten können in Echtzeit über die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einen anderen Mechanismus wie {{domxref("Window/fetch", "fetch()")}} oder ein {{domxref("WebSocket")}} aktualisiert werden. Dies garantiert, dass Benutzer nach der Aktivierung von Vorabschildungen aktuelle Inhalte sehen.
- Verwalten Sie Ihre Drittanbieter-Analyse-Skripte sorgfältig — wenn möglich, verwenden Sie Skripte, die Vorabfracht-bewusst sind (zum Beispiel verwenden Sie die {{domxref("Document.prerendering")}}-Eigenschaft, um das Vorladen auf Vorabshield-Seiten zu verschieben) wie Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden der Inhalte von seitenübergreifenden {{htmlelement("iframe")}}s während des Vorabshields verzögert wird, bis die Aktivierung erfolgt. Dies soll verhindern, dass es zu Beeinträchtigungen kommt, die durch das Laden von seitenübergreifenden Seiten verursacht werden, die sich eines Vorabshields nicht bewusst sind, und um damit verbundenen Komplexitäten zu vermeiden, welche Anmeldeinformationen und Speicher dieser Frames ausgesetzt werden sollen.
  - Für Drittanbieter-Skripte, die sich der Vorabfracht nicht bewusst sind, vermeiden Sie deren Laden, bis nach der Aktivierung durch das {{domxref("Document.prerenderingchange_event", "prerenderingchange")}}-Ereignis erfolgt, wie oben beschrieben.

### Von Server gerenderter variabler Zustand

Es gibt zwei Haupttypen von vom Server gerenderten Zuständen, auf die Sie achten müssen: **veralteter Zustand** und **benutzerspezifischer Zustand**. Dies kann sowohl unsicheres Vorladen als auch Vorabfracht verursachen.

- Veralteter Zustand: Betrachten Sie das Beispiel einer vom Server gerenderten Liste von Blog-Kommentaren, die zwischen dem Zeitpunkt, zu dem der Blogpost vorabn geladen wurde, und dem Zeitpunkt, zu dem er angesehen wird, veraltet sein könnte. Dies könnte insbesondere problematisch sein, wenn auf der aktuellen Seite ein Admin-Panel verwendet wird, in dem ein Benutzer Spam-Kommentare löscht. Wenn der Benutzer dann zum Blogpost navigiert, könnte er verwirrt sein, warum er die Spam-Kommentare sieht, die er gerade gelöscht hat.
- Benutzerspezifischer Zustand: Betrachten Sie das Beispiel der Verfolgung des Anmeldezustands über ein Cookie. Probleme wie die folgenden können auftreten:
  - Nutzerin besucht `https://site.beispiel/a` in Tab 1 und `https://site.beispiel/b` in Tab 2, während sie abgemeldet ist.
  - `https://site.beispiel/b` rendert `https://site.beispiel/c` vorab. Es wird im abgemeldeten Zustand gerendert.
  - Nutzerin meldet sich bei `https://site.beispiel` in Tab 1 an.
  - Nutzerin wechselt zu Tab 2 und klickt auf den Link zu `https://site.beispiel/c`, der die vorabgefrachte Seite aktiviert.
  - Tab 2 zeigt eine abgemeldete Ansicht von `https://site.beispiel/c` an, was den Benutzer verwirrt, da sie dachte eingeloggt zu sein.

Benutzerspezifische Zustandsprobleme können bei anderen Benutzereinstellungen auftreten, zum Beispiel Spracheinstellungen, Dunkelmodus-Präferenzen oder das Hinzufügen von Artikeln in einen Warenkorb. Sie können auch auftreten, wenn nur ein einziger Tab beteiligt ist:

- Nehmen wir an, der Benutzer besucht `https://site.beispiel/product`.
- `https://site.beispiel.com/product` rendert vorab `https://site.beispiel.com/cart`. Es wird mit 0 Artikeln im Warenkorb vorabgefreigt.
- Der Benutzer klickt auf die Buttons "In den Warenkorb", die eine Fetch-Anforderung auslösen, um den Artikel dem Warenkorb des Benutzers hinzuzufügen (ohne die Seite neu zu laden).
- Der Benutzer klickt auf den Link zu `https://site.beispiel.com/cart`, der die vorabgefrachte Seite aktiviert.
- Der Benutzer sieht einen leeren Einkaufswagen, obwohl er gerade etwas hinzugefügt hat.

Die beste Abmilderung für diese Fälle, und in der Tat immer dann, wenn Inhalte mit dem Server asynchron erscheinen können, ist es, dass die Seiten sich selbst bei Bedarf aktualisieren. Beispielsweise könnte ein Server die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einen anderen Mechanismus wie {{domxref("Window/fetch", "fetch()")}} oder ein {{domxref("WebSocket")}} verwendet. Seiten können sich dann entsprechend aktualisieren, einschließlich spekulativ geladener Seiten, die noch nicht aktiviert wurden.

## Sitzungshistorienverhalten für vorabgeschilderte Dokumente

Das Aktivieren eines vorabfrachtenden/vorabbeschützten Dokuments verhält sich ähnlich wie jede herkömmliche Navigation, aus der Perspektive des Endbenutzers. Das aktivierte Dokument wird im Tab angezeigt und dem Sitzungsverlauf hinzugefügt, und alle vorhandenen Forward-Verlaufseinträge werden entfernt. Alle Navigationen innerhalb des vorabfrachtenden Browsing-Kontexts _vor_ der Aktivierung wirken sich nicht auf den Sitzungsverlauf aus.

Aus der Perspektive des Entwicklers kann ein vorabfrachtendes Dokument wie eine **triviale Sitzungshistorie** betrachtet werden, bei der nur ein Eintrag — der aktuelle Eintrag — existiert. Alle Navigationen innerhalb des vorabfrachtenden Kontexts werden effektiv ersetzt.

Während API-Funktionen, die auf Sitzungshistorien operieren (zum Beispiel {{domxref("History")}} und {{domxref("Navigation")}}) in vorabfrachtende Dokumente aufgerufen werden können, operieren sie nur auf dem trivialen Sitzungshistorie des Kontexts. Folglich sind vorabfrachtende Dokumente nicht Teil des gemeinsamen Sitzungshistorie ihrer Verweiserseiten. Zum Beispiel können sie nicht über {{domxref("History.back()")}} auf ihren Verweiser navigieren.

Dieses Design stellt sicher, dass Benutzer die erwartete Erfahrung machen, wenn sie die Zurück-Taste verwenden — nämlich dass sie zu dem letzten Inhalt zurückgebracht werden, den sie gesehen haben. Sobald ein vorabfrachtendes Dokument aktiviert ist, wird nur ein einzelner Sitzungshistorie-Eintrag zum gemeinsamen Sitzungshistorie hinzugefügt, wobei alle vorherigen Navigationen im vorabfrachtenden Browsing-Kontext ignoriert werden. Ein Schritt zurück im gemeinsamen Sitzungshistorie — zum Beispiel, durch Drücken der Zurück-Taste — führt den Benutzer zurück zur Verweiserseite.

## Plattformfunktionen, die während des Vorabshields zurückgestellt oder eingeschränkt sind

Da eine vorabgefrachte Seite in einem versteckten Zustand geöffnet wird, werden mehrere API-Funktionen, die potenziell intrusive Verhaltensweisen verursachen, in diesem Zustand nicht aktiviert und werden stattdessen **zurückgestellt** bis die Seite aktiviert ist. Andere Webplattform-Funktionen, die problematisch beim Vorabfracht sind, sind vollständig eingeschränkt. Dieser Abschnitt bietet Details, welche Funktionen zurückgestellt oder eingeschränkt sind.

> [!NOTE]
> In der kleinen Anzahl von Fällen, bei denen das Zurückstellen und Einschränken nicht möglich ist, wird die Vorabfracht aufgehoben.

### Zurückstellung asynchroner APIs

Zurückstellen bedeutet, dass die API-Funktion sofort ein schwebendes Versprechen zurückgibt und dann nichts tut, bis die Seite aktiviert ist. Nach der Aktivierung läuft die Funktion normal und das Versprechen wird normal aufgelöst oder zurückgewiesen.

Die Ergebnisse der folgenden asynchronen Funktionen werden in vorgefertigten Dokumenten bis zu ihrer Aktivierung zurückgestellt:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): {{domxref("MediaDevices.selectAudioOutput()")}}
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): {{domxref("BackgroundFetchManager.fetch()")}}
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): {{domxref("BroadcastChannel.postMessage()")}}
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): {{domxref("CredentialsContainer.create()")}}, {{domxref("CredentialsContainer.get()")}}, {{domxref("CredentialsContainer.store()")}}
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): {{domxref("Navigator.requestMediaKeySystemAccess()")}}
- [Gamepad API](/de/docs/Web/API/Gamepad_API): {{domxref("Navigator.getGamepads()")}}, {{domxref("Window.gamepadconnected_event", "gamepadconnected")}}-Ereignis, {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}}-Ereignis
- [Geolocation API](/de/docs/Web/API/Geolocation_API): {{domxref("Geolocation.getCurrentPosition()")}}, {{domxref("Geolocation.watchPosition()")}}, {{domxref("Geolocation.clearWatch()")}}
- {{domxref("HTMLMediaElement")}} API: Die Wiedergabe-Position wird nicht vorankommen, während das enthaltene Dokument vorabgefrachet wird
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): {{domxref("IdleDetector.start()")}}
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): {{domxref("MediaDevices.getUserMedia()")}} (und die alte {{domxref("Navigator.getUserMedia()")}} Version), {{domxref("MediaDevices.enumerateDevices()")}}
- [Notifications API](/de/docs/Web/API/Notifications_API): {{domxref("Notification.Notification", "Notification()")}} Konstruktor, {{domxref("Notification/requestPermission_static", "Notification.requestPermission()")}}
- [Push API](/de/docs/Web/API/Push_API): {{domxref("PushManager.subscribe()")}}
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): {{domxref("ScreenOrientation.lock()")}}, {{domxref("ScreenOrientation.unlock()")}}
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): {{domxref("Sensor.start()")}}
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): {{domxref("ServiceWorker.postMessage()")}}, {{domxref("ServiceWorkerContainer.register()")}}, {{domxref("ServiceWorkerRegistration.update()")}}, {{domxref("ServiceWorkerRegistration.unregister()")}}
- [Storage API](/de/docs/Web/API/Storage_API): {{domxref("StorageManager.persist()")}}
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): {{domxref("AudioContext")}}s dürfen nicht gestartet werden, während das enthaltene Dokument vorabgefrachet wird
- [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API): {{domxref("Bluetooth.getDevices()")}}, {{domxref("Bluetooth.requestDevice()")}}
- [WebHID API](/de/docs/Web/API/WebHID_API): {{domxref("HID.getDevices()")}}, {{domxref("HID.requestDevice()")}}
- [Web Locks API](/de/docs/Web/API/Web_Locks_API): {{domxref("LockManager.query()")}}, {{domxref("LockManager.request()")}}
- [Web MIDI API](/de/docs/Web/API/Web_MIDI_API): {{domxref("Navigator.requestMIDIAccess()")}}
- [Web NFC API](/de/docs/Web/API/Web_NFC_API): {{domxref("NDefReader.write()")}}, {{domxref("NDefReader.scan()")}}
- [Web Serial API](/de/docs/Web/API/Web_Serial_API): {{domxref("Serial.getPorts()")}}, {{domxref("Serial.requestPort()")}}
- [Web Speech API](/de/docs/Web/API/Web_Speech_API): {{domxref("SpeechRecognition.abort()")}}, {{domxref("SpeechRecognition.start()")}}, {{domxref("SpeechRecognition.stop()")}}, {{domxref("SpeechSynthesis.cancel()")}}, {{domxref("SpeechSynthesis.pause()")}}, {{domxref("SpeechSynthesis.resume()")}}, {{domxref("SpeechSynthesis.speak()")}}
- [WebUSB API](/de/docs/Web/API/WebUSB_API): {{domxref("USB.getDevices()")}}, {{domxref("USB.requestDevice()")}}
- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API): {{domxref("XRSystem.requestSession()")}}

### Implizit eingeschränkte APIs

Die folgenden Funktionen scheitern automatisch oder sind nicht funktionsfähig in Dokumenten, die nicht aktiviert sind.

APIs, die {{glossary("transient activation")}} oder {{glossary("sticky activation")}} erfordern:

- Bestätigungsdialoge, die durch das {{domxref("Window.beforeunload_event", "beforeunload")}}-Ereignis generiert werden
- Das Auslösen jeglicher Ereignisse in der [Clipboard API](/de/docs/Web/API/Clipboard_API).
- [File System API](/de/docs/Web/API/File_System_API): {{domxref("Window.showDirectoryPicker()")}}, {{domxref("Window.showOpenFilePicker()")}}, {{domxref("Window.showSaveFilePicker()")}}
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API): {{domxref("Element.requestFullscreen()")}}
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): {{domxref("IdleDetector/requestPermission_static", "IdleDetector.requestPermission()")}}
- [Keyboard API](/de/docs/Web/API/Keyboard_API): {{domxref("Keyboard.lock()")}} (erfordert Vollbild)
- [Payment Request API](/de/docs/Web/API/Payment_Request_API): {{domxref("PaymentRequest.show()")}}
- [Presentation API](/de/docs/Web/API/Presentation_API): {{domxref("PresentationRequest.start()")}}
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API): {{domxref("Element.requestPointerLock()")}}
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): {{domxref("MediaDevices.getDisplayMedia()")}}
- [Web Share API](/de/docs/Web/API/Web_Share_API): {{domxref("Navigator.share()")}}
- {{domxref("Window.open()")}}

APIs, die das enthaltene Dokument erfordern, um im Fokus zu sein:

- [Clipboard API](/de/docs/Web/API/Clipboard_API): {{domxref("Clipboard.read()")}}, {{domxref("Clipboard.readText()")}}, {{domxref("Clipboard.write()")}}, {{domxref("Clipboard.writeText()")}}

APIs, die erfordern, dass der {{domxref("Document.visibilityState")}} des enthaltenen Dokuments `"visible"` ist:

- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API): {{domxref("HTMLVideoElement.requestPictureInPicture()")}} (erfordert, dass der Sichtbarkeitszustand des enthaltenen Dokuments `"visible"` ist, _oder_ {{glossary("transient activation")}})
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API): {{domxref("WakeLock.request()")}}

### Andere eingeschränkte Funktionen

- Download-Links, d.h. {{htmlelement("a")}} und {{htmlelement("area")}}-Elemente mit dem `download` Attribut, werden ihre Downloads verzögern, bis das Vorabfracht beendet ist.
- Keine seitenüberQuerung-Navigation: Jedes vorabfrachtende Dokument, dass zu einer anderen Site navigiert, wird sofort verworfen, bevor eine Anfrage an die andere Site gesendet wird.
- Eingeschränkte URLs: Vorabfrachtende Dokumente können keine nicht-HTTP(S)-Top-Level-URLs hosten. Das Einfügen der folgenden URL-Typen wird das Vorabfracht sofort verwerfen:
  - [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript)
  - [`data:` URLs](/de/docs/Web/URI/Schemes/data)
  - `blob:` URLs
  - `about:` URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungsspeicherung: {{domxref("Window.sessionStorage")}} kann verwendet werden, aber das Verhalten ist sehr spezifisch, um zu vermeiden, dass Seiten, die nur erwarten, dass eine Seite auf den Sitzungsspeicher des Tabs zugreift, beeinträchtigt werden. Daher beginnt eine vorabgefreichte Seite mit einem Klon des Sitzungsspeicherzustands des Tabs, wenn sie erstellt wurde. Nach der Aktivierung wird der Speicherkon soll des Vorabfreights verworfen und der hauptsächliche Speicherzustand des Tabs verwendet. Seiten, die Sitzungsspeicherung verwenden, können das {{domxref("Document.prerenderingchange_event", "prerenderingchange")}}-Ereignis nutzen, um zu erkennen, wann dieser Speicherwechsel stattfindet.
- {{domxref("Window.print()")}}: Jegliche Aufrufe dieser Methode werden ignoriert.
- "Einfache Dialogmethoden" sind wie folgt eingeschränkt:
  - {{domxref("Window.alert()")}} gibt sofort zurück, ohne ein Dialogfeld anzuzeigen.
  - {{domxref("Window.confirm()")}} gibt sofort `false` zurück, ohne ein Dialogfeld anzuzeigen.
  - {{domxref("Window.prompt()")}} gibt sofort einen leeren String (`""`) ohne Dialogfeld anzuzeigen.
- Dedizierte/gemeinsame Arbeiterskripte werden geladen, aber ihre Ausführung wird zurückgestellt, bis das vorabgefrechte Dokument aktiviert wird.
- Cross-origin {{htmlelement("iframe")}}-Ladevorgänge werden während des Vorabshields verzögert, bis die Seite aktiviert ist.

## Schnittstellen

Die Spekulationsregeln-API definiert keine eigenen Schnittstellen.

### Erweiterungen anderer Schnittstellen

- {{domxref("Document.prerendering")}} {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument derzeit im Prozess des Vorabfrachtens ist.
- {{domxref("Document.prerenderingchange_event", "prerenderingchange")}}-Ereignis {{experimental_inline}}
  - : Wird in einem vorabgefrechten Dokument ausgelöst, wenn es aktiviert wird (d.h. der Benutzer die Seite ansieht).
- {{domxref("PerformanceNavigationTiming.activationStart")}} {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Start eines Dokuments im Vorabfracht und dessen Aktivierung darstellt.
- {{domxref("PerformanceResourceTiming.deliveryType")}} `"navigational-prefetch"` Wert {{experimental_inline}}
  - : Signalisiert, dass der Typ eines Performance-Eintrags ein Prefetch ist.

## HTTP-Header

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'` Wert {{experimental_inline}}
  - : Dient zum Opt-in, um die Verwendung von `<script type="speculationrules">` zu ermöglichen, um Spekulationsregeln im zu ladenden Dokument zu definieren.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die JSON-Definitionen für Spekulationsregeln enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregel-Set des Dokuments hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationstarget gesetzt, um die Verwendung verschiedener höher risikobehafteter Lademodi einzurichten. Zum Beispiel erfordert das seitenübergreifende, gleichartige Vorabfracht von einer Supports-Loading-Mode-Wert von `credentialed-prerender`.

## HTML-Funktionen

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um ein Set von Vorlade- und/oder Vorabfracht-Spekulationsregeln im aktuellen Dokument zu definieren, die dem Spekulationsregel-Set des Dokuments hinzugefügt werden.

## Beispiele

Einen [vollständigen Vorabfreight-Demo finden Sie hier](https://prerender-demos.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich der Spekulationsregeln und anderer ähnlicher Leistungsverbesserungsfunktionen.
