---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Spekulationsregeln-API** ist darauf ausgelegt, die Leistung für zukünftige Navigationen zu verbessern. Sie zielt auf Dokument-URLs anstatt auf spezifische Ressourcen-Dateien ab und ist daher sinnvoller für Multi-Page-Anwendungen (MPAs) als für Single-Page-Anwendungen (SPAs).

Die Spekulationsregeln-API bietet eine Alternative zu der weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)-Funktion und ist dazu gedacht, die nur in Chrome verfügbare und veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)-Funktion abzulösen. Sie bietet viele Verbesserungen gegenüber diesen Technologien und verfügt über eine ausdrucksstärkere, konfigurierbare Syntax, um festzulegen, welche Dokumente vorgeladen oder vorgerendert werden sollen.

> [!NOTE]
> Die Spekulationsregeln-API verwaltet keine Subressourcen-Vorabrufe; hierfür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Nutzung

Spekulationsregeln können innerhalb von Inline-`<script type="speculationrules">`-Elementen und externen Textdateien, die durch den {{httpheader("Speculation-Rules")}} Antwort-Header referenziert werden, spezifiziert werden. Die Regeln werden als JSON-Struktur angegeben.

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

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen explizit in der {{httpheader("Content-Security-Policy")}} [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Direktive erlaubt werden, wenn die Seite diese enthält. Dies geschieht durch Hinzufügen einer der `'inline-speculation-rules'`-Quellen, einer Hash-Quelle oder Nonce-Quelle.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die das Spekulationsregeln-JSON enthält, kann einen beliebigen gültigen Namen und jede Erweiterung haben, muss aber mit einem `application/speculationrules+json` MIME-Typ bereitgestellt werden.

> [!NOTE]
> Regeln können sowohl durch ein Inline-Skript als auch durch den HTTP-Header gleichzeitig spezifiziert werden — alle auf ein Dokument angewendeten Regeln werden analysiert und zur Spekulationsregelliste des Dokuments hinzugefügt.

Sie geben ein anderes Array an, um die Regeln für jeden spekulativen Lademodus zu enthalten (zum Beispiel `"prerender"` oder `"prefetch"`). Jede Regel ist in einem Objekt enthalten, das zum Beispiel eine Liste von zu ladenden Ressourcen angibt, plus Optionen wie eine explizite {{httpheader("Referrer-Policy")}}-Einstellung für jede Regel. Beachten Sie, dass vorgeladene URLs auch vorgeladen sind.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Verwendung von Prefetching

Das Einschließen von `prefetch`-Regeln innerhalb eines `<script type="speculationrules">`-Elements oder des `Speculation-Rules`-Headers wird dazu führen, dass unterstützende Browser den Antworttext der referenzierten Seiten herunterladen, jedoch keine der von der Seite referenzierten Subressourcen. Wenn Sie zu einer vorgeladenen Seite navigieren, wird sie wesentlich schneller gerendert, als wenn sie nicht vorgeladen wäre.

Die Ergebnisse werden in einem pro-Dokument-in-memory-Cache gespeichert. Alle gespeicherten Prefetches werden verworfen, wenn Sie die aktuelle Seite verlassen, mit Ausnahme eines vorgeladenen Dokuments, zu dem Sie dann navigieren.

Dies bedeutet, dass das Vorabladen von Ressourcen, zu denen der Benutzer nicht navigiert, in der Regel eine Verschwendung von Ressourcen ist, obwohl das Ergebnis den HTTP-Cache auffüllen kann, wenn die Header dies zulassen. Der anfängliche Kostenaufwand eines Prefetchs ist jedoch viel geringer als der eines Prerenders, daher sollten Sie Prefetching breit anwenden, zum Beispiel das Vorabladen aller wichtigen Seiten Ihrer Website, vorausgesetzt, sie sind sicher vorzurendern (siehe [Gefährliche spekulative Ladebedingungen](#gefährliche_spekulative_ladebedingungen) für weitere Details).

Same-Site und Cross-Site Prefetches werden funktionieren, aber Cross-Site Prefetches sind limitiert (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen den beiden). Aus Datenschutzgründen funktionieren Cross-Site-Prefetches derzeit nur, wenn der Benutzer keine Cookies für die Zielsite gesetzt hat — wir möchten nicht, dass Sites Benutzeraktivitäten über vorgeladene Seiten (die sie möglicherweise nie tatsächlich besuchen) basierend auf zuvor gesetzten Cookies verfolgen können.

> [!NOTE]
> In der Zukunft wird ein Opt-in für Cross-Site-Prefetches über den {{httpheader("Supports-Loading-Mode")}} Header bereitgestellt, aber dies war zum Zeitpunkt der Erstellung noch nicht implementiert (nur Cross-Origin, Same-Site [Prerendering](#verwendung_von_prerendering) Opt-in war verfügbar).

Für Browser, die dies unterstützen, sollte Spekulationsregeln-Prefetch über älteren Prefetch-Mechanismen bevorzugt werden, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"`-Option. Da wir wissen, dass das Spekulationsregeln-Prefetch für Navigationsvorgänge ist und nicht für das allgemeine Laden von Ressourcen:

- Es kann für Cross-Site-Navigationen verwendet werden, wohingegen `<link rel="prefetch">` dies nicht kann.
- Es wird nicht durch {{httpheader("Cache-Control")}} Header blockiert, wohingegen `<link rel="prefetch">` dies oft tut.

Zusätzlich bietet Spekulationsregeln-Prefetch:

- Automatische Prioritätsverringerung, wenn nötig (`fetch()` tut dies nicht).
- Es respektiert die Konfiguration des Benutzers. Zum Beispiel passiert Prefetching nicht, wenn das Gerät des Benutzers sich im Akku-Sparmodus oder Daten-Sparmodus befindet.
- Es speichert die vorgeladenen Ressourcen in einem pro-Dokument-in-memory-Cache anstatt im HTTP-Cache, was möglicherweise zu etwas schnellerem Prefetching führt.

### Verwendung von Prerendering

Das Einschließen von `prerender`-Regeln innerhalb eines `<script type="speculationrules">`-Elements oder des `Speculation-Rules`-Headers wird dazu führen, dass unterstützende Browser den Inhalt in einem unsichtbaren Tab abrufen, rendern und laden, der in einem pro-Dokument-in-memory-Cache gespeichert wird. Dies beinhaltet das Laden aller Subressourcen, das Ausführen aller JavaScript-Programme und sogar das Laden von Subressourcen und das Ausführen von Datenabrufen, die durch JavaScript initiiert wurden. Alle gespeicherten Prerenders und ihre Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, mit Ausnahme eines vorgerenderten Dokuments, zu dem Sie dann navigieren.

Zukünftige Navigationen zu einer vorgerenderten Seite werden nahezu sofort erfolgen. Der Browser aktiviert den unsichtbaren Tab anstatt den üblichen Navigationsprozess durchzuführen und ersetzt die alte Vordergrundseite durch die vorgerenderte Seite. Wenn eine Seite aktiviert wird, bevor sie vollständig vorgerendert ist, wird sie in ihrem aktuellen Zustand aktiviert und lädt dann weiter, was bedeutet, dass Sie immer noch eine erhebliche Leistungsverbesserung sehen werden.

Prerendering benötigt Arbeitsspeicher und Netzwerkbandbreite. Wenn Sie etwas vorab laden, zu dem der Benutzer nicht navigiert, werden diese Ressourcen verschwendet (obwohl das Ergebnis den HTTP-Cache auffüllen kann, wenn die Header dies zulassen, was eine spätere Nutzung ermöglicht). Der anfängliche Kostenaufwand eines Prerenders ist viel größer als der eines Prefetchs, und andere Bedingungen könnten auch dazu führen, dass Inhalte unsicher für Prerendering sind (siehe [Gefährliche spekulative Ladebedingungen](#gefährliche_spekulative_ladebedingungen) für weitere Details). Daher wird empfohlen, Prerendering sparsamer einzusetzen und sorgfältig Fälle zu prüfen, in denen die Wahrscheinlichkeit hoch ist, dass die Seite aufgerufen wird, und in denen Sie denken, dass der Vorteil für die Benutzererfahrung die zusätzlichen Kosten wert ist.

> [!NOTE]
> Um das Ausmaß des potenziellen Ressourcenaufwands ins Verhältnis zu setzen: Ein Prerender verwendet ungefähr die gleiche Menge an Ressourcen wie das Rendern eines {{htmlelement("iframe")}}.

> [!NOTE]
> Viele APIs werden automatisch aufgeschoben, wenn Prerendering erfolgt/bis zur Aktivierung. Siehe [Plattformfunktionen, die beim Prerendering aufgeschoben oder eingeschränkt sind](#platform_features_deferred_or_restricted_during_prerender) für weitere Details.

Prerendering ist standardmäßig auf gleichherkömmliche Dokumente beschränkt. Cross-Site Prerendering ist allerdings möglich — es erfordert, dass das Navigationsziel eine Opt-in-Erklärung über den {{httpheader("Supports-Loading-Mode")}} Header mit einem Wert von `credentialed-prerender` abgibt. Cross-Site Prerendering ist derzeit nicht möglich.

Für Browser, die dies unterstützen, sollte Spekulationsregeln-Prerender über älteren Prerender-Mechanismen bevorzugt werden, nämlich [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender):

- `<link rel="prerender">` ist Chrome-spezifisch und wurde nie standardisiert, und das Chrome-Entwicklungsteam befindet sich im Prozess der Abschaltung.
- Es lädt Subressourcen, die über JavaScript geladen wurden, während `<link rel="prerender">` dies nicht tut.
- Es wird nicht durch {{httpheader("Cache-Control")}} Einstellungen blockiert, während `<link rel="prerender">` dies oft tut.
- Spekulationsregeln-Prerender sollte als ein Hinweis und eine progressive Verbesserung behandelt werden. Im Gegensatz zu `<link rel="prerender">` ist es ein spekulativer Hinweis, und der Browser kann sich entscheiden, den Hinweis basierend auf Benutzereinstellungen, aktuellem Speicherkonsum oder anderen Heuristiken nicht zu befolgen.

### Spekulationsregeln-API-Funktionsprüfung

Sie können überprüfen, ob die Spekulationsregeln-API unterstützt wird, indem Sie den folgenden Code verwenden:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

Zum Beispiel könnten Sie Spekulationsregeln für Prefetching in unterstützenden Browsern einfügen, aber eine ältere Technologie wie `<link rel="prefetch">` in anderen verwenden:

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

Dieser Abschnitt befasst sich mit verschiedenen Möglichkeiten, festzustellen, ob eine angeforderte Seite vorgeladen oder vorgerendert wurde.

### Serverseitige Erkennung

Anfragen an vorgeladene und vorgerenderte Seiten werden mit dem {{httpheader("Sec-Purpose")}} Header gesendet:

Für Prefetch:

```http
Sec-Purpose: prefetch
```

Für Prerender:

```http
Sec-Purpose: prefetch;prerender
```

Server können basierend auf diesem Header antworten, zum Beispiel um spekulative Ladeanfragen zu protokollieren, andere Inhalte zurückzugeben oder sogar zu verhindern, dass spekulatives Laden stattfindet. Wenn ein Fehlercode zurückgegeben wird (jeder HTTP-Status, der nicht im Bereich 200-299 liegt, nach Weiterleitungen), wird die Seite nicht vorgeladen/vorgerendert. Zusätzlich verhindern die Statuscodes 204 und 205 auch das Prerendering (verhindern jedoch nicht das Prefetching).

Die Verwendung eines Fehlercodes (zum Beispiel eines 503) ist der einfachste Weg, um serverseitig spekulatives Laden zu verhindern, obwohl es normalerweise ein besserer Ansatz ist, das Prefetch/Prerender zuzulassen und JavaScript zu verwenden, um alle Aktionen zu verzögern, die nur stattfinden sollen, wenn die Seite tatsächlich angesehen wird.

### JavaScript-Prefetch-Erkennung

Wenn eine Seite vorgeladen wird, gibt der Eintrag [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) den Wert `"navigational-prefetch"` zurück. Sie könnten folgendes verwenden, um eine Funktion auszuführen, wenn ein Performance-Eintrag des Typs `"navigational-prefetch"` empfangen wird:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Author-defined function
}
```

Diese Technik ist nützlich beim Messen der Leistung oder wenn Sie Aktionen aufschieben möchten, die Probleme verursachen können, wenn sie während Prefetching auftreten (siehe [Gefährliches Prefetching](#unsafe_prefetching)).

### JavaScript-Prerender-Erkennung

Um während des Prerenderings eine Aktivität auszuführen, können Sie die [`Document.prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft überprüfen. Sie könnten zum Beispiel Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorgerendertes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Zeitspanne zwischen dem Start des Prerenders und der Aktivierung des Dokuments repräsentiert. Die folgende Funktion kann überprüfen, ob eine Seite prerendert _und_ prerendert wird:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vorgerenderte Seite aktiviert wird, indem der Benutzer die Seite ansieht, löst das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis aus. Dies kann verwendet werden, um Aktivitäten zu ermöglichen, die zuvor standardmäßig beim Laden der Seite gestartet wurden, aber die Sie bis zu dem Zeitpunkt verzögern möchten, an dem die Seite von dem Benutzer angesehen wird. Der folgende Code richtet einen Event Listener ein, um eine Funktion auszuführen, sobald das Prerendering auf einer vorgerenderten Seite abgeschlossen ist, oder führt sie sofort auf einer nicht vorgerenderten Seite aus:

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

## Gefährliche spekulative Ladebedingungen

Dieser Abschnitt behandelt Bedingungen, auf die Sie achten sollten und bei denen Prefetching und/oder Prerendering **unsicher** sind. Das bedeutet, dass das Prefetching/Prerendering von Seiten, die diese Bedingungen aufweisen, in Ihrem Code möglicherweise Maßnahmen erfordert oder ganz vermieden werden muss.
