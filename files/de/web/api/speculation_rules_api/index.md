---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: bca6332a9b752ba195f544e115ada4bff76bc822
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Speculation Rules API** ist darauf ausgelegt, die Leistung zukünftiger Navigationen zu verbessern. Sie richtet sich an Dokument-URLs statt an spezifische Ressourcendateien und ist daher für Multi-Page-Anwendungen (MPAs) sinnvoller als für Single-Page-Anwendungen (SPAs).

Die Speculation Rules API bietet eine Alternative zur weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch)-Funktion und soll die Chrome-exklusive, veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender)-Funktion ablösen. Sie bietet viele Verbesserungen gegenüber diesen Technologien sowie eine ausdrucksstärkere, konfigurierbare Syntax zur Angabe, welche Dokumente vorgeladen oder vorgeladen werden sollen.

> [!NOTE]
> Die Speculation Rules API behandelt keine Subressource-Prefetches; dafür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Verwendung

Spekulationsregeln können in Inline-Elementen vom Typ [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) und externen Textdateien, die durch den {{httpheader("Speculation-Rules")}}-Antwortheader referenziert werden, angegeben werden. Die Regeln werden als JSON-Struktur spezifiziert.

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

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen ausdrücklich in der {{httpheader("Content-Security-Policy")}}-Direktive [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) erlaubt werden, falls die Seite diese enthält. Dies geschieht durch Hinzufügen einer der Quellen `'inline-speculation-rules'`, einer Hash-Quelle oder einer Nonce-Quelle.

Ein Beispiel für einen HTTP-Header:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das Spekulationsregeln-JSON enthält, kann jeden gültigen Namen und jede Erweiterung haben, muss jedoch mit dem MIME-Typ `application/speculationrules+json` bereitgestellt werden.

> [!NOTE]
> Regeln können sowohl mit einem Inline-Skript als auch mit dem HTTP-Header gleichzeitig spezifiziert werden — alle auf ein Dokument angewendeten Regeln werden analysiert und zur Spekulationsregel-Liste des Dokuments hinzugefügt.

Sie geben ein anderes Array an, um die Regeln für jeden spekulativen Ladetyp zu enthalten (zum Beispiel `"prerender"` oder `"prefetch"`). Jede Regel ist in einem Objekt enthalten, das beispielsweise eine Liste von zu fetchaenden Ressourcen sowie Optionen wie eine explizite {{httpheader("Referrer-Policy")}}-Einstellung für jede Regel spezifiziert. Beachten Sie, dass vorgeladene URLs ebenfalls vorgeladen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Verwenden von Prefetching

Das Einfügen von `prefetch`-Regeln in ein `<script type="speculationrules">`-Element oder den `Speculation-Rules`-Header führt dazu, dass unterstützende Browser den Antwortkörper der referenzierten Seiten herunterladen, jedoch keine der vom Dokument referenzierten Subressourcen. Wenn auf eine vorgeladene Seite navigiert wird, wird sie viel schneller gerendert, als wenn sie nicht vorgeladen wäre.

Die Ergebnisse werden in einem speicherdokumentierten Speicher-Cache behalten. Alle zwischengespeicherten Prefetchs werden verworfen, wenn Sie die aktuelle Seite verlassen, mit Ausnahme eines vorgeladenen Dokuments, zu dem Sie dann navigieren.

Dies bedeutet, dass, wenn Sie etwas vorab laden, zu dem der Benutzer nicht navigiert, es im Allgemeinen eine Verschwendung von Ressourcen ist, obwohl das Ergebnis den HTTP-Cache auffüllen kann, wenn Header dies erlauben. Dennoch sind die anfänglichen Kosten eines Prefetch viel geringer als die anfänglichen Kosten eines Prerender, sodass Sie aufgefordert werden, Prefetching breit anzuwenden, z.B. alle signifikanten Seiten auf Ihrer Seite vorzurendern, vorausgesetzt, sie sind sicher zum Vorab-Laden (siehe [unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Details).

Same-Site- und Cross-Site-Prefetches funktionieren, aber Cross-Site-Prefetches sind eingeschränkt (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen den beiden). Aus Datenschutzgründen funktionieren Cross-Site-Prefetches derzeit nur, wenn der Benutzer keine Cookies für die Zielwebsite gesetzt hat — wir wollen nicht, dass Websites die Benutzeraktivität über vorgeladene Seiten (die sie möglicherweise nie tatsächlich besuchen) basierend auf zuvor gesetzten Cookies verfolgen können.

> [!NOTE]
> In Zukunft wird ein Opt-in für Cross-Site-Prefetches über den {{httpheader("Supports-Loading-Mode")}}-Header bereitgestellt werden, aber dies war zum Zeitpunkt des Schreibens nicht implementiert (nur Cross-Origin, Same-Site [prerendering](#verwenden_von_prerendering) Opt-in war verfügbar).

Für Browser, die es unterstützen, sollte die Spekulationsregeln-Prefetch gegenüber älteren Prefetch-Mechanismen bevorzugt werden, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer Option `priority: "low"`. Da wir wissen, dass Spekulationsregeln-Prefetch für Navigationen und nicht für allgemeines Ressource-Prefetching gedacht ist:

- Es kann für Cross-Site-Navigationen verwendet werden, während `<link rel="prefetch">` dies nicht kann.
- Es wird nicht durch {{httpheader("Cache-Control")}}-Header blockiert, während `<link rel="prefetch">` dies oft tut.

Zusätzlich senkt das Spekulationsregeln-Prefetch:

- Automatisch die Priorität, wenn nötig (`fetch()` nicht).
- Respektiert die Konfiguration des Benutzers. Zum Beispiel passiert Prefetching nicht, wenn sich das Gerät des Benutzers im Energiesparmodus oder Datensparmodus befindet.
- Speichert die vorgeladenen Ressourcen in einem speicherdokumentierten Speicher-Cache anstelle des HTTP-Cache, was zu einem leicht schnelleren Prefetch führen kann.

### Verwenden von Prerendering

Das Einfügen von `prerender`-Regeln in ein `<script type="speculationrules">`-Element oder den `Speculation-Rules`-Header führt dazu, dass unterstützende Browser den Inhalt in ein unsichtbares Tab fetchen, rendern und laden. Dies umfasst das Laden aller Subressourcen, das Ausführen des gesamten JavaScripts und sogar das Laden von Subressourcen und das Ausführen von Datenabrufen, die durch JavaScript gestartet werden. Alle zwischengespeicherten Prerender und ihre Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, mit Ausnahme eines vorgeladenen Dokuments, zu dem Sie dann navigieren.

Zukünftige Navigationen zu einer vorgeladenen Seite sind beinahe sofort. Der Browser aktiviert das unsichtbare Tab anstelle des üblichen Navigationsprozesses, wobei die alte Vordergrundseite durch die vorgeladene Seite ersetzt wird. Wenn eine Seite aktiviert wird, bevor sie vollständig vorgeladen ist, wird sie in ihrem aktuellen Zustand aktiviert und dann weiter geladen, was bedeutet, dass Sie dennoch eine signifikante Leistungsverbesserung sehen werden.

Prerendering verbraucht Speicher und Netzwerkbandbreite. Wenn Sie etwas vorgeladen haben, zu dem der Benutzer nicht navigiert, sind diese verschwendet (obwohl das Ergebnis den HTTP-Cache auffüllen kann, wenn Header dies zulassen, was später verwendet werden kann). Die anfänglichen Kosten eines Prerenders sind viel größer als die eines Prefetch, und andere Bedingungen könnten dazu führen, dass Inhalte nicht sicher vorgeladen werden können (siehe [unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Details). Daher wird empfohlen, Prerendering sparsamer zu verwenden und sorgfältig Fälle zu prüfen, in denen die Wahrscheinlichkeit hoch ist, dass die Seite aufgerufen wird, und Sie der Meinung sind, dass der Benutzer große Vorteile von der verbesserten Nutzererfahrung profitiert.

> [!NOTE]
> Um das Ausmaß des möglichen Ressourcenverbrauchs ins Verhältnis zu setzen, benötigt ein Prerender ungefähr die gleichen Ressourcen wie das Rendering eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden automatisch während des Prerendering/ bis zur Aktivierung zurückgestellt. Weitere Informationen finden Sie unter [Plattformfunktionen, die während des Prerenderings zurückgestellt oder eingeschränkt sind](#plattformfunktionen,_die_während_des_prerenderings_zurückgestellt_oder_eingeschränkt_sind).

Prerendering ist standardmäßig auf gleichwertige Dokumente eingeschränkt. Cross-Origin, Same-Site-Prerendering ist möglich – es erfordert, dass das Navigationsziel opt-in mit dem {{httpheader("Supports-Loading-Mode")}}-Header und einem Wert von `credentialed-prerender`. Cross-Site-Prerendering ist derzeit nicht möglich.

Für unterstützende Browser sollte Spekulationsregeln-Prerendering gegenüber älteren Prerender-Mechanismen bevorzugt werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender):

- `<link rel="prerender">` ist Chrome-spezifisch und wurde nie standardisiert, und das Chrome-Entwicklungsteam plant, es abzusetzen.
- Es lädt Subressourcen, die über JavaScript geladen werden, während `<link rel="prerender">` dies nicht tut.
- Es wird nicht durch Einstellungen von {{httpheader("Cache-Control")}} blockiert, während `<link rel="prerender">` dies oft tut.
- Spekulationsregeln-Prerender sollte als Hinweis und als progressive Verbesserung behandelt werden. Im Gegensatz zu `<link rel="prerender">` ist es ein spekulativer Hinweis und der Browser wählt möglicherweise basierend auf Benutzereinstellungen, aktuellem Speicherverbrauch oder anderen Heuristiken, den Hinweis nicht zu beachten.

### Feature-Erkennung für die Speculation Rules API

Sie können überprüfen, ob die Speculation Rules API unterstützt wird, indem Sie den folgenden Code verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Zum Beispiel könnten Sie Spekulationsregeln für das Prefetching in unterstützenden Browsern einfügen, aber eine ältere Technologie wie `<link rel="prefetch">` in anderen verwenden:

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

## Erkennung vorgeladener und vorgeladener Seiten

In diesem Abschnitt werden verschiedene Möglichkeiten zur Erkennung beschrieben, ob eine angeforderte Seite vorgeladen oder vorgeladen wurde.

### Serverseitige Erkennung

Vorgeladene und vorgeladene Seitenanfragen werden mit dem {{httpheader("Sec-Purpose")}}-Anforderungsheader gesendet:

Für Prefetch:

```http
Sec-Purpose: prefetch
```

Für Prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können basierend auf diesem Header antworten, zum Beispiel um spekulative Ladenanfragen zu protokollieren, anderen Inhalt zurückzugeben oder sogar das spekulative Laden zu verhindern. Wenn ein nicht erfolgreiches Antwortcode zurückgegeben wird (irgendein HTTP-Status außerhalb des Bereichs 200-299 nach Weiterleitungen), wird die Seite nicht vorgeladen/vorgeladen. Zusätzlich verhindern die Statuscodes 204 und 205 auch das Prerendering (aber verhindern nicht Prefetch).

Die Verwendung eines nicht erfolgreichen Codes (z.B. ein 503) ist die einfachste Möglichkeit, spekulatives Laden serverseitig zu verhindern, obwohl es normalerweise ein besserer Ansatz ist, das Prefetch/Prerendering zuzulassen und JavaScript zu verwenden, um Aktionen zu verzögern, die nur dann passieren sollten, wenn die Seite tatsächlich angezeigt wird.

### JavaScript Prefetch-Erkennung

Wenn eine Seite vorgeladen wird, gibt der [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType)-Eintrag den Wert `"navigational-prefetch"` zurück. Sie könnten das Folgende verwenden, um eine Funktion auszuführen, wenn ein Performanceeintrag des Typs `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist nützlich bei der Messung der Leistung oder wenn Sie Aktionen aufschieben möchten, die Probleme verursachen könnten, wenn sie während des Prefetching auftreten (siehe [unsicheres Prefetching](#unsicheres_prefetching)).

### JavaScript Prerender-Erkennung

Um eine Aktivität auszuführen, während die Seite vorgeladen wird, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft überprüfen. Sie könnten zum Beispiel einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorgeladenes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, das die Zeit zwischen dem Start des Prerenders und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl für prerendering als auch für prerendered Pages erkennen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vorgeladene Seite vom Benutzer beim Anzeigen der Seite aktiviert wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu ermöglichen, die zuvor standardmäßig beim Seitenladen gestartet würden, die Sie jedoch bis zur Anzeige der Seite durch den Benutzer verzögern möchten. Das folgende Beispiel setzt einen Event Listener auf, der eine Funktion ausführt, sobald das Prerendering abgeschlossen ist, auf einer vorgeladenen Seite oder führt es sofort auf einer nicht vorgeladenen Seite aus:

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

In diesem Abschnitt werden Bedingungen behandelt, auf die Sie achten sollten, bei denen Prefetching und/oder Prerendering **unsicher** sind. Das bedeutet, dass das Vorabrufen/Vorgeladen von Seiten, die diese Bedingungen aufweisen, erforderlichenfalls Abmilderungen in Ihrem Code benötigen oder ganz vermieden werden sollten.

### Unsicheres Prefetching

Wie bereits erwähnt, empfehlen wir, Prefetching weitläufig zu verwenden, da das Verhältnis von Risiko zu Nutzen relativ gering ist — das Potenzial für Ressourcenverschwendung ist minimal, und die Leistungsverbesserungen können erheblich sein. Sie müssen jedoch sicherstellen, dass vorgeladene Seiten keinen Problemen mit dem Ablauf Ihrer Anwendung verursachen.

Wenn ein Prefetch durchgeführt wird, lädt der Browser den Antwortkörper der referenzierten Seite über eine einzige GET-Anforderung herunter, auf die der Benutzer möglicherweise in Zukunft zugreifen wird. Probleme können insbesondere auftreten, wenn die URL der Anforderung einen serverinitiierten Nebeneffekt auslöst, den Sie nicht möchten, bis die URL aufgerufen wird.

Zum Beispiel:

- Abmelde-URLs.
- Sprache-Umschalten-URLs.
- "In den Warenkorb legen"-URLs.
- Anmeldeablauf-URLs, bei denen der Server eine SMS sendet, z.B. als Einmal-Passwort (OTP).
- URLs, die die Verbrauchszahl eines Benutzers erhöhen, wie das Konsumieren seiner monatlichen kostenlosen Artikelzugabe oder das Starten des Timers für seine monatlichen Minuten.
- URLs, die serverseitiges Ad-Conversion-Tracking initiieren.

Solche Probleme können auf dem Server durch Überwachung des {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Headers gemildert werden, wenn die Anfragen eintreffen, und dann über spezifischen Code laufen, um problematische Funktionalitäten zu verschieben. Später, wenn die Seite tatsächlich aufgerufen wird, können Sie die verschobene Funktionalität bei Bedarf mit JavaScript initiieren.

> [!NOTE]
> Sie können weitere Details zum Erkennungscode im Abschnitt [Erkennung vorgeladener und vorgeladener Seiten](#erkennung_vorgeladener_und_vorgeladener_seiten) finden.

Es ist auch potenziell riskant, ein Dokument vorzuladen, dessen serverseitig gerenderte Inhalte sich aufgrund von Aktionen, die der Benutzer auf der aktuellen Seite vornehmen kann, ändern werden. Dies könnte beispielsweise Blitzverkäufe oder Sitzpläne von Kinos betreffen. Testen Sie solche Fälle sorgfältig und mildern Sie solche Probleme, indem Sie Inhalte aktualisieren, sobald die Seite geladen ist. Siehe [Server-gerenderter variierender Zustand](#server-gerenderter_variierender_zustand) für weitere Details zu diesen Fällen.

> [!NOTE]
> Browser speichern vorgeladene Seiten für kurze Zeit (Chrome speichert sie beispielsweise für 5 Minuten), bevor sie verworfen werden. So können Ihre Benutzer Inhalte sehen, die bis zu 5 Minuten alt sind.

Prefetching ist sicher, wenn alle Nebeneffekte des Abrufs der Seite aus der JavaScript-Ausführung resultieren, da das JavaScript erst bei der Aktivierung ausgeführt wird.

Ein abschließender Tipp ist, die URLs zu prüfen, die in Ihrer {{Glossary("robots.txt", "robots.txt")}}-Datei als nicht erlaubt aufgeführt sind — normalerweise weisen diese URLs auf Seiten hin, die nur von authentifizierten Benutzern aufgerufen werden können, und sollten daher nicht in Suchmaschinenergebnissen enthalten sein. Viele davon werden in Ordnung sein, aber es kann ein guter Ort sein, um unsichere Prefetch-URLs zu finden (d.h. sie weisen die oben beschriebenen Bedingungen auf).

### Unsicheres Prerendering

Prerendering ist riskanter im Vergleich zum Prefetching und sollte daher sparsam eingesetzt werden, in Fällen, in denen es sich lohnt. Es gibt mehr unsichere Bedingungen, die beim Prerendering zu beachten sind. Der Nutzen ist höher, aber das Risiko auch.

Wenn ein Prerender durchgeführt wird, führt der Browser ein GET der URL aus und rendert und lädt den Inhalt in ein unsichtbares Tab. Das umfasst das Ausführen des gesamten JavaScripts und das Laden aller Subressourcen, einschließlich derer, die über JavaScript abgerufen wurden. Inhalt kann potenziell unsicher zum Prerender sein, wenn eine der folgenden Bedingungen beobachtet wird:

- Die URL ist [unsicher zum Vorladen](#unsicheres_prefetching). Lesen Sie den vorherigen Abschnitt, wenn Sie dies noch nicht getan haben, und verstehen Sie, dass diese Bedingungen gleichermaßen für unsicheres Prerendering gelten.
- Die JavaScript der Seite ändert clientseitigen Speicher (z.B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) beim Laden auf eine Weise, die verwirrende Effekte in anderen, nicht vorgeladenen Seiten im aktuellen Blickfeld des Benutzers verursachen könnte.
- Die Seite führt JavaScript aus oder lädt Bilder, die Nebeneffekte auslösen, wie das Senden von Analyse, das Aufzeichnen von Anzeigenimpressionen, oder anderweitig den Zustand der Anwendung ändern, als ob der Benutzer bereits interagiert hätte. Auch dies kann den Ablauf der Anwendung beeinflussen oder zu einer falschen Leistungs- oder Nutzungsmeldung führen. Siehe [Server-gerenderter variierender Zustand](#server-gerenderter_variierender_zustand) für weitere Details zu solchen Anwendungsfällen.

Um solche Probleme abzumildern, können Sie die folgenden Techniken verwenden:

- Überwachen Sie den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Header auf dem Server, wenn die Anfragen eintreffen, und führen Sie dann spezifischen Code aus, um problematische Funktionalität zu verschieben.
- Verwenden Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis, um zu erkennen, wann die vorgeladene Seite tatsächlich aktiviert wird und Code als Ergebnis auszuführen. Dies ist in zwei Fällen nützlich:
  - Verzögerung von Code, der bei früher Ausführung vor dem Betrachten der Seite durch den Benutzer Probleme verursachen könnte. Beispielsweise möchten Sie möglicherweise bis nach der Aktivierung warten, um clientseitige Speicher zu aktualisieren oder den serverseitigen Zustand über JavaScript zu ändern. Dies kann Situationen vermeiden, in denen die Benutzeroberfläche und der Zustand der Anwendung nicht mehr synchron sind, z.B. ein Einkaufswagen ohne Artikel, obwohl der Benutzer welche hinzugefügt hat.
  - Wenn dies nicht möglich ist, können Sie den Code nach der Aktivierung erneut ausführen lassen, um die App wieder auf den neuesten Stand zu bringen. Beispielsweise könnte eine hochdynamische Seite eines Blitzverkaufs auf Inhaltsaktualisierungen von einer Drittanbieterbibliothek angewiesen sein. Wenn Sie die Aktualisierungen nicht verzögern können, können Sie nach Aktivierung der Seite immer neue Aktualisierungen abrufen. Vorgeladene Seiten können in Echtzeit mit der [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einem anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einem [`WebSocket`](/de/docs/Web/API/WebSocket) aktualisiert werden. Dies garantiert, dass die Benutzer nach der Prerendering-Aktivierung aktuelle Inhalte sehen.
- Verwalten Sie Ihre Drittanbieter-Analysenskripte sorgfältig — verwenden Sie wenn möglich Skripte, die prerendering-bewusst sind (verwenden Sie z.B. die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft, um die Ausführung auf prerender-Seiten zu verzögern) wie Google Analytics oder NewRelic.
  - Beachten Sie, dass das Laden von Inhalten von fremden {{htmlelement("iframe")}} während des Prerenders verzögert wird, bis die Aktivierung eintritt. Dies wird getan, um Brüche zu vermeiden, die durch das Laden von fremden Seiten entstehen, die unaware vom Prerendering sind. Es bedeutet, dass Nutzer zu Beginn in einigen Fällen leeren Frames sehen können, aber es bedeutet auch, dass die meisten Drittanbieter-Widgets wie Ad-Tech sicher während des Prerenderings verwendet werden können.
  - Für Drittanbieter-Skripte, die nicht prerendering-bewusst sind, vermeiden Sie deren Laden bis nach der Aktivierung unter Verwendung des [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignisses, wie zuvor erwähnt.

### Server-gerenderter variierender Zustand

Es gibt zwei Haupttypen von servergerendertem Zustand, über die man sich Sorgen machen muss: **veralteter Zustand** und **benutzerspezifischer Zustand**. Dies kann sowohl unsicheres Prefetching als auch Prerendering verursachen.

- Veralteter Zustand: Betrachten Sie das Beispiel einer servergerenderten Liste von Blogkommentaren, die zwischen dem Zeitpunkt, an dem der Blogpost vorgeladen wird, und dem Zeitpunkt, zu dem er angezeigt wird, veraltet sein könnte. Dies könnte besonders problematisch sein, wenn die aktuelle Seite ein Admin-Panel ist, in dem der Benutzer Spam-Kommentare löscht. Wenn der Benutzer dann zum Blogpost navigiert, könnte er verwirrt sein, warum er die Spam-Kommentare sieht, die er gerade gelöscht hat.
- Benutzerspezifischer Zustand: Betrachten Sie das Beispiel, bei dem der Anmeldezustand über ein Cookie verfolgt wird. Probleme können wie folgt auftreten:
  - Der Benutzer besucht `https://site.example/a` in Tab 1 und `https://site.example/b` in Tab 2, während er abgemeldet ist.
  - `https://site.example/b` prerendert `https://site.example/c`. Es wird in einem abgemeldeten Zustand vorgeladen.
  - Der Benutzer meldet sich auf `https://site.example` in Tab 1 an.
  - Der Benutzer wechselt zu Tab 2 und klickt auf den Link zu `https://site.example/c`, der die vorgeladene Seite aktiviert.
  - Tab 2 zeigt eine abgemeldete Sicht von `https://site.example/c` an, was den Benutzer verwirrt, da er dachte, er sei eingeloggt.

Benutzerspezifische Zustandsprobleme können auch bei anderen Benutzereinstellungen auftreten, z.B. Spracheinstellungen, Dunkelmodus-Vorlieben oder das Hinzufügen von Artikeln zum Warenkorb. Sie können auch auftreten, wenn nur ein einziges Tab beteiligt ist:

- Angenommen, der Benutzer besucht `https://site.example.com/produkt`.
- `https://site.example.com/produkt` prerendert `https://site.example.com/warenkorb`. Es wird mit 0 Artikeln im Warenkorb vorgeladen.
- Der Benutzer klickt auf die Schaltflächen "In den Warenkorb", die eine Fetch-Anfrage initiieren, um den Artikel im Warenkorb des Benutzers abzulegen (ohne Seitenreload).
- Der Benutzer klickt auf den Link zu `https://site.example.com/warenkorb`, was die vorgeladene Seite aktiviert.
- Der Benutzer sieht einen leeren Warenkorb, obwohl er gerade etwas hinzugefügt hat.

Die beste Abhilfe für diese Fälle und in der Tat immer, wenn Inhalt mit dem Server nicht synchronisiert ist, besteht darin, dass sich die Seiten bei Bedarf selbst aktualisieren. Beispielsweise könnte ein Server die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) verwenden oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder einen [`WebSocket`](/de/docs/Web/API/WebSocket). Seiten können sich dann entsprechend aktualisieren, einschließlich spekulativ geladenen Seiten, die noch nicht aktiviert wurden.

## Sitzungsverlauf-Verhalten für vorgeladene Dokumente

Das Aktivieren eines vorgeladenen/vorgeladenen Dokuments verhält sich aus der Sicht des Endbenutzers wie jede sonstige herkömmliche Navigation. Das aktivierte Dokument wird im Tab angezeigt und im Sitzungsverlauf hinzugefügt, und vorhandene Vorwärtsverlaufseinträge werden entfernt. Navigationsvorgänge im Prerender-Browsing-Kontext _vor_ der Aktivierung wirken sich nicht auf den Sitzungsverlauf aus.

Aus Entwicklersicht kann ein vorgeladenes Dokument als trivialer Sitzungsverlauf betrachtet werden, bei dem nur ein Eintrag existiert — der aktuelle Eintrag. Alle Navigationen im Prerendering-Kontext werden effektiv ersetzt.

Während API-Funktionen, die auf den Sitzungsverlauf zugreifen (zum Beispiel [`History`](/de/docs/Web/API/History) und [`Navigation`](/de/docs/Web/API/Navigation)), innerhalb vorgeladener Dokumente aufgerufen werden können, wirken sie nur auf den trivialen Sitzungsverlauf des Kontexts. Folglich nehmen vorgeladene Dokumente nicht am gemeinsamen Sitzungsverlauf ihrer verweisenden Seite teil. Beispielweise können sie ihren Referrer nicht über [`History.back()`](/de/docs/Web/API/History/back) navigieren.

Dieses Design stellt sicher, dass Benutzer das erwartete Verhalten beim Drücken der Zurücktaste erleben — das heißt, dass sie zur letzten betrachteten Seite zurückkehren. Sobald ein vorgeladenes Dokument aktiviert ist, wird nur ein einzelner Sitzungsverlaufseintrag zum gemeinsamen Sitzungsverlauf hinzugefügt, wobei ignoriert wird, dass vorherige Navigationen im Prerender-Browsing-Kontext stattfanden. Ein Schritt zurück im gemeinsamen Sitzungsverlauf — z. B. durch Drücken der Zurück-Taste — bringt den Benutzer zur Referrer-Seite zurück.

## Plattformfunktionen, die während des Prerenderings zurückgestellt oder eingeschränkt sind

Da eine vorgeladene Seite in einem versteckten Zustand geöffnet wird, werden mehrere API-Funktionen, die potenziell aufdringliche Verhalten verursachen könnten, in diesem Zustand nicht aktiviert, sondern **zurückgestellt**, bis die Seite aktiviert wird. Andere Web-Plattform-Funktionen, die beim Prerendering problematisch sind, werden vollständig eingeschränkt. Dieser Abschnitt liefert Details zu den Funktionen, die zurückgestellt oder eingeschränkt sind.

> [!NOTE]
> In der kleinen Anzahl von Fällen, in denen das Zurückstellen und Einschränken nicht möglich ist, wird das Prerender abgebrochen.

### Asynchrone API-Zurückstellung

Zurückstellen bedeutet, dass die API-Funktion sofort ein ausstehendes Versprechen zurückgibt und dann nichts unternimmt, bis die Seite aktiviert wird. Nach der Aktivierung funktioniert die Funktion wieder normal und das Versprechen wird normal erfüllt oder zurückgewiesen.

Die folgenden asynchronen Funktionen in vorgeladenen Dokumenten werden bis zu deren Aktivierung zurückgestellt:

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API): [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API): [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API): [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
- [Credential Management API](/de/docs/Web/API/Credential_Management_API): [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API): [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- [Gamepad API](/de/docs/Web/API/Gamepad_API): [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads), [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis, [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Ereignis
- [Geolocation API](/de/docs/Web/API/Geolocation_API): [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API: Die Wiedergabeposition wird nicht weiterverschoben, während das beinhaltende Dokument im Prerendering ist
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) (und die veraltete [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)-Version), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [Notifications API](/de/docs/Web/API/Notifications_API): [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor, [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
- [Push API](/de/docs/Web/API/Push_API): [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API): [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock), [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API): [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage), [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update), [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Storage API](/de/docs/Web/API/Storage_API): [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API): [`AudioContext`](/de/docs/Web/API/AudioContext)s dürfen nicht starten, während das beinhaltende Dokument im Prerendering ist
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

Die folgenden Funktionen werden in nicht aktivierten Dokumenten automatisch fehlschlagen oder als No-Op behandelt.

APIs, die {{Glossary("transient_activation", "flüchtige Aktivierung")}} oder {{Glossary("sticky_activation", "anhaltende Aktivierung")}} erfordern:

- Bestätigungsdialoge, die durch das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignis generiert werden
- Das Auslösen beliebiger Ereignisse in der [Clipboard API](/de/docs/Web/API/Clipboard_API).
- [File System API](/de/docs/Web/API/File_System_API): [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker), [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker), [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API): [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API): [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static)
- [Keyboard API](/de/docs/Web/API/Keyboard_API): [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) (welcher Vollbild benötigt)
- [Payment Request API](/de/docs/Web/API/Payment_Request_API): [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
- [Presentation API](/de/docs/Web/API/Presentation_API): [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start)
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API): [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Web Share API](/de/docs/Web/API/Web_Share_API): [`Navigator.share()`](/de/docs/Web/API/Navigator/share)
- [`Window.open()`](/de/docs/Web/API/Window/open)

APIs, die erfordern, dass das beinhaltende Dokument im Fokus steht:

- [Clipboard API](/de/docs/Web/API/Clipboard_API): [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read), [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText), [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)

APIs, die erfordern, dass die [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) des beinhaltenden Dokuments auf `"visible"` gesetzt ist:

- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API): [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) (erfordert die Sichtbarkeitszustand des beinhaltenden Dokuments auf `"visible", _oder_ {{Glossary("transient_activation", "flüchtige Aktivierung")}})
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API): [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)

### Andere eingeschränkte Funktionen

- Download-Links (z.B. {{htmlelement("a")}} und {{htmlelement("area")}}-Elemente mit dem `download`-Attribut) werden ihre Downloads bis zum Abschluss des Prerenderings verzögert.
- Keine Cross-Site-Navigationen: Jedes prerender-Dokument, das zu einer anderen Seite navigiert, wird sofort verworfen, bevor eine Anfrage an diese andere Seite gesendet wird.
- Eingeschränkte URLs: Prerender-Dokumente können keine nicht-HTTP(S)-Top-Level-URLs hosten. Das Einfügen der folgenden URL-Typen führt dazu, dass das Prerender werden direkt verworfen:
  - [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript)
  - [`data:` URLs](/de/docs/Web/URI/Schemes/data)
  - `blob:` URLs
  - `about:` URLs, einschließlich `about:blank` und `about:srcdoc`
- Sitzungspeicherung: [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) kann verwendet werden, aber das Verhalten ist sehr speziell, um Probleme mit Websites zu vermeiden, die erwarten, dass nur eine Seite auf den Sitzungspeicher der Registerkarte gleichzeitig zuzugreifen. Eine vorgeladene Seite beginnt daher mit einem Klon des Sitzungspeicherzustands der Registerkarte, wenn sie erstellt wird. Nachdem die vorgeladene Seite aktiviert wurde, wird der gespeicherte Klon der Seite verworfen und der Hauptspeicherstand der Registerkarte stattdessen genutzt. Seiten, die Sitzungspeicherung verwenden, können das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis verwenden, um zu erkennen, wann dieser Speicherwechsel eintritt.
- [`Window.print()`](/de/docs/Web/API/Window/print): Alle Aufrufe dieser Methode werden ignoriert.
- "Einfache Dialogmethoden" werden wie folgt eingeschränkt:
  - [`Window.alert()`](/de/docs/Web/API/Window/alert) kehrt sofort ohne ein Dialogfenster zurück.
  - [`Window.confirm()`](/de/docs/Web/API/Window/confirm) kehrt sofort `false` zurück, ohne ein Dialogfenster anzuzeigen.
  - [`Window.prompt()`](/de/docs/Web/API/Window/prompt) gibt sofort eine leere Zeichenfolge (`""`) zurück, ohne ein Dialogfenster anzuzeigen.
- Dedizierte/geteilte Arbeitsskripte werden geladen, jedoch wird ihre Ausführung zurückgestellt bis das vorgeladene Dokument aktiviert wird.
- Cross-Origin {{htmlelement("iframe")}}-Ladevorgänge werden während des Prerenders verzögert, bis die Seite aktiviert ist.

## Schnittstellen

Die Speculation Rules API definiert keine eigenen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{experimental_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Dokument sich aktuell im Prerendering-Prozess befindet.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Veranstaltung {{experimental_inline}}
  - : Wird auf einem vorgeladenen Dokument ausgelöst, wenn es aktiviert wird (d.h. der Benutzer die Seite ansieht).
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{experimental_inline}}
  - : Eine Zahl, die die Zeit zwischen dem Start des Prerenders und der Aktivierung des Dokuments darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) `"navigational-prefetch"`-Wert {{experimental_inline}}
  - : Signalisiert, dass der Typ eines Performance-Eintrags ein Prefetch ist.

## HTTP-Header

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'`-Wert {{experimental_inline}}
  - : Verwendet, um die Nutzung von `<script type="speculationrules">` zu erlauben, um Spekulationsregeln im abgerufenen Dokument zu definieren.
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : Liefert eine Liste von URLs, die auf Textressourcen verweisen, die Spekulationsregeln-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregel-Set des Dokuments hinzugefügt.
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Setzt das Navigationsziel, um die Verwendung verschiedener riskanter Ladearten zu ermöglichen. Zum Beispiel erfordert das Cross-Origin, Same-Site Prerendering einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## HTML-Funktionen

- [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
  - : Wird verwendet, um eine Sammlung von Vorschub- und/oder Prerender-Spekulationsregeln innerhalb des aktuellen Dokuments zu definieren, die zum Spekulationsregel-Set des Dokuments hinzugefügt werden.

## Beispiele

Sie können eine [komplette Prerender-Demo hier finden](https://prerender-demos.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von Spekulationsregeln und anderen ähnlichen Leistungsverbesserungsfunktionen.
