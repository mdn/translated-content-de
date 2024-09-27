---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: bca6332a9b752ba195f544e115ada4bff76bc822
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

Die **Speculation Rules API** wurde entwickelt, um die Leistung zukünftiger Navigationen zu verbessern. Sie zielt auf Dokument-URLs ab, statt auf spezifische Ressourcen-Dateien, und macht daher mehr Sinn für Multi-Page-Anwendungen (MPAs) anstelle von Single-Page-Anwendungen (SPAs).

Die Speculation Rules API bietet eine Alternative zur weit verbreiteten [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch)-Funktion und soll die Chrome-exklusive, veraltete [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender)-Funktion ersetzen. Sie bietet viele Verbesserungen gegenüber diesen Technologien sowie eine ausdrucksvollere, konfigurierbare Syntax, um festzulegen, welche Dokumente vorab geladen oder vorgeladen werden sollen.

> [!NOTE]
> Die Speculation Rules API behandelt keine Subressourcen-Vorladen; hierfür müssen Sie `<link rel="prefetch">` verwenden.

## Konzepte und Verwendung

Spekulationsregeln können innerhalb von Inline-Elementen [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) und externen Textdateien angegeben werden, die durch den {{httpheader("Speculation-Rules")}} Antwort-Header referenziert werden. Die Regeln werden als JSON-Struktur angegeben.

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

Spekulationsregeln, die ein `<script>`-Element verwenden, müssen explizit in der {{httpheader("Content-Security-Policy")}} [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)-Direktive erlaubt werden, wenn die Seite diese enthält. Dies geschieht durch das Hinzufügen einer der `'inline-speculation-rules'` Quellen, einer Hash-Quelle oder einer Nonce-Quelle.

Ein HTTP-Header-Beispiel:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Die Textressource, die die Spekulationsregeln-JSON enthält, kann einen beliebigen gültigen Namen und eine beliebige Erweiterung haben, muss jedoch mit einem `application/speculationrules+json` MIME-Typ geliefert werden.

> [!NOTE]
> Regeln können sowohl mit einem Inline-Skript als auch gleichzeitig über den HTTP-Header angegeben werden — alle auf ein Dokument angewendeten Regeln werden analysiert und der Spekulationsregel-Liste des Dokuments hinzugefügt.

Sie spezifizieren unterschiedliche Arrays, um die Regeln für jeden spekulativen Ladetyp (zum Beispiel `"prerender"` oder `"prefetch"`) zu enthalten. Jede Regel wird in einem Objekt enthalten, das zum Beispiel eine Liste von Ressourcen angibt, die abgerufen werden sollen, sowie Optionen wie eine explizite {{httpheader("Referrer-Policy")}} Einstellung für jede Regel. Beachten Sie, dass vorgeladene URLs ebenfalls vorab abgerufen werden.

Siehe [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) für eine vollständige Erklärung der verfügbaren Syntax.

### Verwendung von Prefetching

Das Einfügen von `prefetch`-Regeln in ein `<script type="speculationrules">`-Element oder einen `Speculation-Rules`-Header führt dazu, dass unterstützende Browser den Antworttext der referenzierten Seiten herunterladen, jedoch keine der von der Seite referenzierten Subressourcen. Wenn auf eine vorgeladene Seite navigiert wird, wird diese viel schneller gerendert, als wenn sie nicht vorgeladen wäre.

Die Ergebnisse werden in einem in den Speicher eines jeden Dokuments zwischengespeichert. Alle zwischengespeicherten Vorladungen werden verworfen, wenn Sie die aktuelle Seite verlassen, mit Ausnahme eines vorgeladenen Dokuments, zu dem Sie dann navigieren.

Das bedeutet, dass es im Allgemeinen eine Ressourcenverschwendung ist, wenn Sie etwas vorab laden, zu dem der Benutzer nicht navigiert, obwohl das Ergebnis den HTTP-Cache füllen könnte, wenn die Header dies erlauben. Jedoch sind die Vorabkosten einer Vorladung viel geringer als die Vorabkosten eines Prerenders, daher wird empfohlen, die Vorladung breit anzuwenden, zum Beispiel alle wichtigen Seiten Ihrer Website vorab zu laden, sofern sie sicher vorab geladen werden können (siehe [Unsichere spekulative Ladebedingungen](#unsafe_speculative_loading_conditions) für mehr Details).

Gleichseitige und kreuzseitige Vorladungen werden funktionieren, aber kreuzseitige Vorladungen sind eingeschränkt (siehe ["same-site" und "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) für eine Erklärung des Unterschieds zwischen den beiden). Aus Datenschutzgründen funktionieren kreuzseitige Vorladungen derzeit nur, wenn der Benutzer keine Cookies für die Zielsite gesetzt hat — wir möchten nicht, dass Websites die Benutzeraktivität über vorgeladene Seiten nachverfolgen können (die sie möglicherweise nie besuchen werden) basierend auf zuvor gesetzten Cookies.

> [!NOTE]
> In Zukunft wird eine Opt-in-Möglichkeit für kreuzseitige Vorladungen über den {{httpheader("Supports-Loading-Mode")}} Header angeboten, dies war jedoch zum Zeitpunkt des Verfassens nicht implementiert (nur ein Opt-in für kreuzoriginelle, gleichseitige [Prerendering](#verwendung_von_prerendering) war verfügbar).

Für Browser, die diese unterstützen, sollte das Spekulationsregel-Vorladen über ältere Vorlade-Mechanismen vorgezogen werden, nämlich [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) und [`fetch()`](/de/docs/Web/API/Window/fetch) mit einer `priority: "low"` Option. Da wir wissen, dass das Spekulationsregel-Vorladen für Navigationsvorgänge und nicht für allgemeine Ressourcenvorladung gedacht ist:

- Es kann für kreuzseitige Navigationsvorgänge verwendet werden, während `<link rel="prefetch">` dies nicht kann.
- Es wird nicht durch {{httpheader("Cache-Control")}} Header blockiert, während `<link rel="prefetch">` dies oft wird.

Außerdem:

- Senkt automatische Prioritäten, falls nötig (`fetch()` tut dies nicht).
- Respektiert die Benutzereinstellungen. Beispielsweise findet das Vorladen nicht statt, wenn das Gerät des Benutzers im Batterie-Sparmodus oder Daten-Sparmodus ist.
- Speichert die vorgeladenen Ressourcen in einem pro Dokument in den Speicher-Cache anstelle des HTTP-Caches, was zu einem etwas schnelleren Vorladen führen könnte.

### Verwendung von Prerendering

Das Einfügen von `prerender`-Regeln in ein `<script type="speculationrules">`-Element oder einen `Speculation-Rules`-Header führt dazu, dass unterstützende Browser den Inhalt in einem unsichtbaren Tab abrufen, rendern und laden, der in einem pro Dokument in den Speicher-Cache gespeichert wird. Dies schließt das Laden aller Subressourcen, das Ausführen aller JavaScripts und sogar das Starten von Subressourcen und das Ausführen von Databriefen ein, die durch JavaScript gestartet werden. Alle zwischengespeicherten Prerender und ihre Subressourcen werden verworfen, wenn Sie die aktuelle Seite verlassen, mit Ausnahme eines gerenderten Dokuments, zu dem Sie dann navigieren.

Zukünftige Navigationsvorgänge zu einem gerenderten Dokument werden fast augenblicklich sein. Der Browser aktiviert den unsichtbaren Tab anstelle des üblichen Navigationsprozesses, ersetzt die alte Vordergrundseite durch die vorgeladene Seite. Wenn eine Seite aktiviert wird, bevor sie vollständig vorgeladen ist, wird sie im aktuellen Zustand aktiviert und lädt dann weiter, was bedeutet, dass Sie immer noch eine signifikante Leistungsverbesserung sehen werden.

Prerendern verwendet Speicher und Netzwerkbandbreite. Wenn Sie etwas vorladen, zu dem der Benutzer nicht navigiert, wird dies verschwendet (obwohl das Ergebnis den HTTP-Cache füllen könnte, falls die Header dies erlauben und die spätere Verwendung ermöglichen). Die Vorfeldkosten eines Prerenders sind viel größer als die Vorfeldkosten eines Prefetchs, und andere Bedingungen könnten ebenfalls Inhalte unsicher zum Prerendern machen (siehe [Unsichere spekulative Ladebedingungen](#unsafe_speculative_loading_conditions) für mehr Details). Deshalb wird empfohlen, Prerendering sparsamer einzusetzen, wobei sorgfältig Überlegungen angestellt werden, in welchen Fällen die Wahrscheinlichkeit hoch ist, dass die Seite navigiert wird, und Sie denken, dass der Vorteil im Benutzererlebnis.
