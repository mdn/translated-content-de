---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Speculation Rules API** ist dafür konzipiert, die Leistung von zukünftigen Navigationen zu verbessern. Sie zielt auf Dokument-URLs und nicht auf spezifische Resource-Dateien ab und ist daher für Multi-Page-Anwendungen (MPAs) sinnvoller als für Single-Page-Anwendungen (SPAs).

Die Speculation Rules API bietet eine Alternative zu der weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch)-Funktion und soll die nur in Chrome verfügbare, veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender)-Funktion ersetzen. Sie bietet viele Verbesserungen gegenüber diesen Technologien, zusammen mit einer ausdrucksvolleren, konfigurierbaren Syntax zur Spezifikation, welche Dokumente vorab geladen oder gerendert werden sollen.

> [!NOTE]
> Die Speculation Rules API behandelt keine Subresource-Vorabrufe; dafür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Verwendung

Spekulationsregeln können innerhalb von Inline-Elementen [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) und externen Textdateien angegeben werden, auf die durch den {{httpheader("Speculation-Rules")}}-Response-Header verwiesen wird. Die Regeln werden als JSON-Struktur spezifiziert.

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

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen im {{httpheader("Content-Security-Policy")}} [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Directive explizit erlaubt werden, wenn die Seite dieses enthält. Dies geschieht durch das Hinzufügen einer der `'inline-speculation-rules'`-Quellen, einer Hash-Quelle oder einer Nonce-Quelle.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das JSON der Spekulationsregeln enthält, kann einen beliebigen gültigen Namen und eine gültige Erweiterung haben, muss jedoch mit einem `application/speculationrules+json`-MIME-Typ bereitgestellt werden.

> [!NOTE]
> Regeln können sowohl mit einem Inline-Skript als auch mit dem HTTP-Header gleichzeitig angegeben werden — alle auf ein Dokument angewendeten Regeln werden geparst und zur Spekulationsregelliste des Dokuments hinzugefügt.

Sie spezifizieren ein anderes Array, um die Regeln für jeden spekulativen Lademodus zu enthalten (zum Beispiel `"prerender"` oder `"prefetch"`). Jede Regel ist in einem Objekt enthalten, das beispielsweise eine Liste von Ressourcen, die geladen werden sollen, sowie Optionen wie eine explizite {{httpheader("Referrer-Policy")}}-Einstellung für jede Regel spezifiziert. Beachten Sie, dass vorgeladene URLs auch vorab abgerufen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Verwendung von Vorabladungen

Das Einfügen von `prefetch`-Regeln innerhalb eines `<script type="speculationrules">`-Elements oder `Speculation-Rules`-Headers wird dazu führen, dass unterstützende Browser den Antwortinhalt der referenzierten Seiten herunterladen, jedoch nicht die von der Seite referenzierten Subressourcen. Wenn zu einer vorgeladenen Seite navigiert wird, wird sie viel schneller gerendert, als wenn sie nicht vorgeladen wäre.

Die Ergebnisse werden in einem pro-Dokument-In-Memory-Cache gespeichert. Alle zwischengespeicherten Vorabladen werden verworfen, wenn Sie von der aktuellen Seite weg navigieren, außer einem vorgeladenen Dokument, zu dem Sie dann navigieren.

Das bedeutet, dass wenn Sie etwas vorladen, zu dem der Nutzer nicht navigiert, es in der Regel eine Verschwendung von Ressourcen ist, obwohl das Ergebnis den HTTP-Cache auffüllen kann, wenn Header dies erlauben. Das upfront Kosten eines Vorabladen sind jedoch viel kleiner als die upfront Kosten eines Prerendervorgangs, daher wird Ihnen empfohlen, Vorabladungen breit zu adoptieren. Beispielsweise das Vorladen aller wichtigen Seiten auf Ihrer Website, vorausgesetzt sie sind sicher vorzubladen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Details).

Gleiche- und quersite Vorabladungen werden funktionieren, aber quersite Vorabladungen sind eingeschränkt (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung der Unterschiede). Aus Datenschutzgründen funktionieren quersite Vorabladungen derzeit nur, wenn der Benutzer keine Cookies für die Zielseite gesetzt hat — wir möchten nicht, dass Websites Benutzeraktivitäten über vorgeladene Seiten (die sie möglicherweise nie tatsächlich besuchen) anhand von zuvor gesetzten Cookies nachverfolgen können.

> [!NOTE]
> Zukünftig wird ein Opt-in für quersite Vorabladungen über den {{httpheader("Supports-Loading-Mode")}}-Header bereitgestellt, aber dies war zum Zeitpunkt des Schreibens noch nicht implementiert (nur Cross-Origin, Same-Site [Prerendering](#verwendung_von_prerendering) Opt-in war verfügbar).

Für Browser, die es unterstützen, sollte die Spekulationsregeln Vorabladen alten Vorablade-Mechanismen vorgezogen werden, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"`-Option. Da wir wissen, dass Spekulationsregeln Vorabladen für Navigationen sind, nicht für allgemeines Ressourcen-Vorabladungen:

- Es kann für quersite-Navigationen genutzt werden, während `<link rel="prefetch">` das nicht kann.
- Es wird nicht durch {{httpheader("Cache-Control")}}-Header blockiert, während `<link rel="prefetch">` dies oft tut.

Darüber hinaus spekulationsregeln Vorabladen:

- Senkt die Priorität automatisch bei Bedarf (`fetch()` tut dies nicht).
- Respektiert die Konfiguration des Nutzers. Beispielsweise findet keine Vorabladung statt, wenn das Gerät des Nutzers im Energiesparmodus oder im Datensparmodus ist.
- Speichert die vorgeladenen Ressourcen in einem pro-Dokument-In-Memory-Cache anstelle des HTTP-Caches, was zu einer leicht schnelleren Vorabladung führen kann.

### Verwendung von Prerendering

Das Einschließen von `prerender`-Regeln innerhalb eines `<script type="speculationrules">`-Elements oder `Speculation-Rules`-Headers wird dazu führen, dass unterstützende Browser den Inhalt abrufen, rendern und in einem unsichtbaren Tab laden, der in einem pro-Dokument-In-Memory-Cache gespeichert wird. Dies beinhaltet das Laden aller Subressourcen, das Ausführen aller JavaScript und sogar das Laden von Subressourcen und das Durchführen von Datenabrufen, die von JavaScript gestartet wurden. Alle zwischengespeicherten Prerender und deren Subressourcen werden verworfen, wenn Sie von der aktuellen Seite weg navigieren, außer einem prerenderten Dokument, zu dem Sie dann navigieren.

Zukünftige Navigationen zu einer prerenderten Seite werden nahezu sofort erfolgen. Der Browser aktiviert den unsichtbaren Tab anstelle des üblichen Navigationsprozesses und ersetzt die alte Vordergrundseite mit der prerenderten Seite. Wenn eine Seite aktiviert wird, bevor sie vollständig prerendert ist, wird sie in ihrem aktuellen Zustand aktiviert und lädt dann weiter, was bedeutet, dass Sie immer noch eine erhebliche Leistungsverbesserung sehen werden.

Prerendering verbraucht Speicher und Netzwerkbandbreite. Wenn Sie etwas prerendern, zu dem der Nutzer nicht navigiert, sind diese Ressourcen verschwendet (obwohl das Ergebnis den HTTP-Cache füllen kann, wenn Header dies erlauben, wodurch es später verwendet werden kann). Die upfront Kosten eines Prerenders sind viel größer als die upfront Kosten eines Vorabladen, und andere Bedingungen könnten auch den Inhalt unsicher machen, um ihn prerendern zu lassen (siehe [Unsichere spekulative Ladebedingungen](#unsichere_spekulative_ladebedingungen) für weitere Details). Deshalb wird Ihnen empfohlen, Prerendering sparsamer zu adoptieren, indem Sie sorgfältig Fälle in Betracht ziehen, in denen es eine hohe Wahrscheinlichkeit gibt, dass zur Seite navigiert wird, und Sie denken, dass der Nutzen für die Benutzererfahrung die zusätzlichen Kosten wert ist.

> [!NOTE]
> Um den potenziellen Ressourcenverschwendungsbetrag in die Perspektive zu setzen, verbraucht ein Prerender etwa dieselbe Menge an Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden während des Prerenderings automatisch verschoben, bis zur Aktivierung. Siehe [Plattform-Funktionen, die während des Prerenderings verschoben oder eingeschränkt werden](#platform_features_deferred_or_restricted_during_prerender) für weitere Details.

Prerendering ist standardmäßig auf gleichnamige Dokumente beschränkt. Cross-Origin, Same-Site Prerendering ist möglich — es erfordert das Opt-in des Navigationselements über den {{httpheader("Supports-Loading-Mode")}}-Header mit dem Wert `credentialed-prerender`. Cross-Site Prerendering ist derzeit nicht möglich.

Für Browser, die es unterstützen, sollte die Spekulationsregeln Prerender den älteren Prerender-Mechanismen vorgezogen werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender):

- `<link rel="prerender">` ist Chrome-spezifisch und wurde nie standardisiert, und das Chrome-Engineering-Team ist dabei, es einzustellen.
- Es lädt von JavaScript geladene Subressourcen, während `<link rel="prerender">` dies nicht tut.
- Es wird nicht durch {{httpheader("Cache-Control")}}-Einstellungen blockiert, während `<link rel="prerender">` dies oft tut.
- Spekulationsregeln Prerender sollte als Hinweis und als progressive Verbesserung angesehen werden. Im Gegensatz zu `<link rel="prerender">` ist es ein spekulativer Hinweis und der Browser könnte sich entscheiden, den Hinweis aufgrund der Benutzereinstellungen, des aktuellen Speicherverbrauchs oder anderer Heuristiken nicht zu beachten.

### Funktionsfähigkeit der Spekulationsregeln API-Erkennung

Sie können überprüfen, ob die Speculation Rules API unterstützt wird, mit folgendem Code:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Zum Beispiel möchten Sie vielleicht Spekulationsregeln für Vorabladungen in unterstützenden Browsern einfügen, aber eine ältere Technologie wie `<link rel="prefetch">` in anderen verwenden:

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

## Erkennung von vorabgeladenen und prerenderten Seiten

In diesem Abschnitt werden verschiedene Möglichkeiten zur Erkennung untersucht, ob eine angeforderte Seite vorabgeladen oder prerendert wurde.

### Server-side Erkennung

Vorabgeladene und prerenderten Seitenanforderungen werden mit dem {{httpheader("Sec-Purpose")}}-Request-Header gesendet:

Für Vorabladen:

```http
Sec-Purpose: prefetch
```

Für Prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können basierend auf diesem Header antworten, zum Beispiel, um spekulative Ladeanforderungen zu protokollieren, unterschiedlichen Inhalt zurückzugeben oder sogar spekulatives Laden zu verhindern. Wenn ein Antwortcode ohne Erfolg zurückgegeben wird (jeder HTTP-Status außer im Bereich 200-299 nach Weiterleitungen), wird die Seite nicht vorabgeladen/prerendert. Zusätzlich verhindern die 204- und 205-Statuscodes auch das Prerendering (pero do not prevent prefetch).

Es ist die einfachste Möglichkeit, spekulatives Laden serverseitig zu verhindern, einen Code ohne Erfolg zu verwenden (zum Beispiel ein 503), obwohl es in der Regel besser ist, das Vorabladen/Prerendern zuzulassen und JavaScript zu verwenden, um alle Aktionen zu verzögern, die nur stattfinden sollen, wenn die Seite tatsächlich angezeigt wird.

### JavaScript Vorabladen Erkennung

Wenn eine Seite vorabgeladen wird, gibt deren [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType)-Eintrag einen Wert von `"navigational-prefetch"` zurück. Sie könnten das folgende verwenden, um eine Funktion auszuführen, wenn ein Performanceeintrag vom Typ `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist nützlich bei der Messung der Leistung, oder wenn Sie Aktionen verzögern möchten, die Probleme verursachen könnten, wenn sie während des Vorabladens auftreten (siehe [Unsicheres Vorabladen](#unsicheres_vorabladen)).

### JavaScript Prerender Erkennung

Um eine Aktivität auszuführen, während die Seite prerendert, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft überprüfen. Sie könnten beispielsweise einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein prerendertes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Zeit zwischen dem Beginn des Prerenders und der Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl für prerendende als auch aktivierte Seiten prüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die prerendete Seite durch das Anschauen des Nutzers aktiviert wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu ermöglichen, die zuvor standardmäßig beim Laden der Seite gestartet wurden, die Sie jedoch aufschieben möchten, bis die Seite vom Nutzer angesehen wird. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Prerendering beendet ist, auf einer prerenderten Seite, oder es sofort auf einer nicht prerenderten Seite auszuführen:

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

Dieser Abschnitt behandelt Bedingungen, die Sie beachten sollten, bei denen Vorabladen und/oder Prerendern **unsicher** sind. Das bedeutet, dass das Vorabladen/Prerendern von Seiten, die diese Bedingungen aufweisen, möglicherweise Milderungen in Ihrem Code erfordert oder vollständig vermieden werden muss.

### Unsicheres Vorabladen

Wie bereits erwähnt, empfehlen wir, das Vorabladen breit zu adoptieren, da das Verhältnis von Risiko zu Belohnung recht gering ist — das Potenzial für Ressourcenverschwendung ist minimal, und die Leistungsverbesserungen können erheblich sein. Sie müssen jedoch sicherstellen, dass vorabgeladene Seiten keine Probleme mit dem Ablauf Ihrer Anwendung verursachen.

Wenn ein Vorabladen durchgeführt wird, lädt der Browser den Antwortinhalt der referenzierten Seite über ein einzelnes GET-Anfrage herunter, zu dem der Nutzer möglicherweise zu einem späteren Zeitpunkt navigiert. Probleme können speziell dann auftreten, wenn die URL der Anfrage einen serverseitigen Nebeneffekt auslöst, den Sie nicht möchten, dass er geschieht, bis zur URL navigiert wird.

Zum Beispiel:

- Sign-out URLs.
- Sprachwechsel-URLs.
- "In den Warenkorb einfügen"-URLs.
- Anmeldeablauf-URLs, bei denen der Server zum Beispiel eine SMS sendet, wie ein einmaliges Passwort (OTP).
- URLs, die die Nutzungszahl eines Benutzers erhöhen, zum Beispiel ihre monatliche kostenlose Artikelanzahl verwenden oder den Timer für ihre monatlichen Minuten starten.
- URLs, die serverseitiges Anzeigentracking initiieren.

Solche Probleme können auf dem Server durch Überwachung des {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Headers behoben werden, wenn die Anfragen eintreffen und dann spezifischer Code zum Aufschieben problematischer Funktionen ausgeführt wird. Später, wenn tatsächlich zur Seite navigiert wird, können Sie die aufgeschobenen Funktionen bei Bedarf über JavaScript initiieren.

> [!NOTE]
> Sie können im Abschnitt [Erkennung von vorabgeladenen und prerenderten Seiten](#erkennung_von_vorabgeladenen_und_prerenderten_seiten) weitere Details über den Erkennungscode finden.

Es ist auch potenziell riskant, ein Dokument vorzubladen, dessen serverseitig gerenderte Inhalte aufgrund von Aktionen, die der Nutzer auf der aktuellen Seite durchführen kann, sich ändern werden. Dies könnte zum Beispiel Flash-Verkaufsseiten oder Buchungspläne im Kino beinhalten. Testen Sie solche Fälle sorgfältig und mildern Sie solche Probleme, indem Sie den Inhalt aktualisieren, wenn die Seite geladen wird. Siehe [Serverseitig gerenderter variierender Zustand](#server-rendered_varying_state) für weitere Informationen über diese Fälle.

> [!NOTE]
> Browser werden vorgeladene Seiten eine kurze Zeit lang zwischenspeichern (Chrome speichert sie beispielsweise für 5 Minuten), bevor sie verworfen werden. In jedem Fall könnten Ihre Benutzer also bis zu 5 Minuten veralteten Inhalt sehen.

Vorabladen ist sicher, wenn alle Nebeneffekte des Ladens der Seite auf der JavaScript-Ausführung beruhen, da das JavaScript bis zur Aktivierung nicht ausgeführt wird.

Ein letzter Tipp ist, die URLs zu prüfen, die in Ihrer {{Glossary("robots.txt", "robots.txt")}}-Datei als nicht erlaubt aufgeführt sind — normalerweise weisen diese URLs auf Seiten hin, die nur für authentifizierte Nutzer zugänglich sind und die daher nicht in Suchmaschinenergebnissen enthalten sein sollten. Viele davon werden in Ordnung sein, aber es kann ein guter Ort sein, um URLs zu finden, die unsicher für das Vorabladen sind (d.h. sie zeigen die oben beschriebenen Bedingungen auf).

### Unsicheres Prerendering

Prerendering ist riskanter zu verwenden als Vorabladen und sollte daher sparsam eingesetzt werden, in Fällen, in denen es sich lohnt. Es gibt mehr unsichere Bedingungen, auf die man beim Prerendering achten muss, daher ist das Risiko höher, auch wenn der Nutzen ebenfalls größer ist.

Wenn ein Prerender durchgeführt wird, ruft der Browser die URL über GET ab und rendert und lädt den Inhalt in einen unsichtbaren Tab. Dies umfasst das Ausführen des JavaScripts des Inhalts und das Laden aller Subressourcen, einschließlich derer, die von JavaScript geladen werden. Inhalt kann potenziell unsicher zum Prerendern sein, wenn eine der folgenden Bedingungen beobachtet wird:

- Die URL ist [unsicher für Vorabladen](#unsicheres_vorabladen). Lesen Sie den vorherigen Abschnitt, falls Sie das noch nicht gemacht haben, und verstehen Sie, dass diese Bedingungen auch für unsicheres Prerendern zutreffen.
- Das JavaScript der Seite ändert den clientseitigen Speicher (zum Beispiel [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)) beim Laden in einer Weise, die verwirrende Effekte auf andere, nicht prerendete Seiten haben könnte, die der Benutzer sich gerade ansieht.
- Die Seite führt JavaScript aus oder lädt Bilder, die Nebeneffekte auslösen, wie das Senden von Analysen, das Aufzeichnen von Anzeige-Impressionen oder das anderweitige Ändern des Zustands der Anwendung, als ob der Benutzer schon damit interagiert hätte. Dies kann erneut den Ablauf der Anwendung beeinflussen oder zu falscher Leistungs- oder Nutzungsberichterstattung führen. Siehe [Serverseitig gerenderter variierender Zustand](#server-rendered_varying_state) für weitere Details zu solchen Anwendungsfällen.

Um solche Probleme zu mildern, können Sie die folgenden Techniken verwenden:

- Überwachen Sie den {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}}-Header auf dem Server, wenn die Anfragen eintreffen, und führen Sie dann spezifischen Code aus, um problematische Funktionen aufzuschieben.
- Verwenden Sie das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis, um zu erkennen, wann die prerendere Seite tatsächlich aktiviert wird, und führen Sie daraufhin Code aus. Dies ist in zwei Fällen nützlich:
  - Aufschieben von Code, der Probleme verursachen könnte, wenn er vor dem Anzeigen der Seite ausgeführt wird. Beispielsweise möchten Sie vielleicht warten, bis nach der Aktivierung, um den clientseitigen Speicher zu aktualisieren oder den serverseitigen Zustand mit JavaScript zu ändern. Dies kann Situationen vermeiden, in denen die Benutzeroberfläche und der Anwendungsstatus nicht mehr synchron zueinander sind, z.B. ein Einkaufswagen zeigt keine Artikel an, obwohl der Benutzer einige hinzugefügt hat.
  - Wenn das Obige nicht möglich ist, können Sie den Code trotzdem nach der Aktivierung erneut ausführen, um die Anwendung wieder auf den aktuellen Stand zu bringen. Zum Beispiel könnte eine hoch dynamische Flash-Verkaufsseite auf Inhaltsaktualisierungen basieren, die von einer Drittanbieter-Bibliothek stammen. Wenn Sie die Aktualisierungen nicht verzögern können, können Sie immer neue Aktualisierungen erhalten, sobald der Benutzer die Seite ansieht. Prerendete Seiten können in Echtzeit aktualisiert werden, indem Sie die [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API) oder einen anderen Mechanismus wie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein [`WebSocket`](/de/docs/Web/API/WebSocket) verwenden. Dies garantiert, dass der Benutzer nach der Aktivierung des Prerendern aktuellen Inhalt sieht.
- Verwalten Sie Ihre Drittanbieter-Analyseskripte sorgfältig — verwenden bạn ig starten Benutzer die Seite noch nicht angesehen hat.

  > [!NOTE]
  > Sie können im Abschnitt [Prerendering API-Funktionsfähigkeitsnachweis](#platform_features_deferred_or_restricted_during_prerender) weitere Details über den Erkennungscode finden.

  > [!NOTE]
  > Browser werden Seiten, die vorabgeladen werden, eine kurze Zeit lang zwischenspeichern (z.B. speichert Chrome sie für 5 Minuten), bevor sie rausicht werden. In jedem Fall könnten Ihre Benutzer also nin ging auf den Ergeguageudare wird, so dassin des Benutzers, bevor der Browser benachteiteiten."}
