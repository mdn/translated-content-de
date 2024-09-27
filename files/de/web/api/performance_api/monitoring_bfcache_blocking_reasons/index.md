---
title: Überwachung der bfcache-Blockierungsgründe
slug: Web/API/Performance_API/Monitoring_bfcache_blocking_reasons
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("Performance API")}}{{SeeCompatTable}}

Die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) Eigenschaft liefert Informationen darüber, warum das aktuelle Dokument daran gehindert wurde, den [bfcache](/de/docs/Glossary/bfcache) bei der Navigation zu verwenden. Entwickler können diese Informationen nutzen, um Seiten zu identifizieren, die Updates benötigen, um bfcache-kompatibel zu werden und dadurch die Leistungsfähigkeit der Website zu verbessern.

## Back/forward-Cache (bfcache)

Moderne Browser bieten eine Optimierungsfunktion für die Verlaufsnavigation namens Back/Forward-Cache ([bfcache](/de/docs/Glossary/bfcache)). Diese ermöglicht ein sofortiges Ladeerlebnis, wenn Benutzer zu einer Seite zurückkehren, die sie bereits besucht haben. Seiten können aus verschiedenen Gründen daran gehindert werden, den bfcache zu betreten oder aus ihm entfernt zu werden, einige davon sind durch Spezifikationen erforderlich und einige sind spezifisch für die Implementierungen der Browser.

Um die Überwachung der bfcache-Blockierungsgründe zu ermöglichen, enthält die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Klasse eine Eigenschaft namens `notRestoredReasons`. Diese gibt ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons) Objekt zurück, das verwandte Informationen über den obersten Rahmen und alle im Dokument vorhandenen {{htmlelement("iframe")}}s enthält:

- Gründe, warum die Nutzung des bfcache blockiert wurde.
- Details wie die `id` und `name` des Rahmens, um `<iframe>`s im HTML zu identifizieren.

> [!NOTE]
> Historisch gesehen wurde die veraltete [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type) Eigenschaft verwendet, um den bfcache zu überwachen, wobei Entwickler einen `type` von `"TYPE_BACK_FORWARD"` testeten, um einen Hinweis auf die bfcache-Trefferquote zu erhalten. Diese lieferte jedoch keine Gründe für die bfcache-Blockierung oder andere Daten. Die `notRestoredReasons` Eigenschaft sollte zukünftig zur Überwachung der bfcache-Blockierung verwendet werden.

## Protokollierung von bfcache-Blockierungsgründen

Laufende bfcache-Blockierungsdaten können mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) abgerufen werden, wie hier gezeigt:

```js
const observer = new PerformanceObserver((list) => {
  let perfEntries = list.getEntries();
  perfEntries.forEach((navEntry) => {
    console.log(navEntry.notRestoredReasons);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Alternativ können Sie historische bfcache-Blockierungsdaten mit einer geeigneten Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) abrufen:

```js
function returnNRR() {
  const navEntries = performance.getEntriesByType("navigation");
  for (let i = 0; i < navEntries.length; i++) {
    console.log(`Navigation entry ${i}`);
    let navEntry = navEntries[i];
    console.log(navEntry.notRestoredReasons);
  }
}
```

Die oben gezeigten Code-Schnipsel protokollieren [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons) Objekte in der Konsole. Diese Objekte haben die folgende Struktur, die den blockierten Zustand des obersten Rahmens darstellt:

```js
{
  children: [],
  id: null,
  name: null,
  reasons: [
    { reason: "unload-listener" }
  ],
  src: "",
  url: "example.com",
}
```

Die Eigenschaften lauten wie folgt:

- [`children`](/de/docs/Web/API/NotRestoredReasons/children) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons) Objekten, eines für jedes im aktuellen Dokument eingebettete Kindelement {{htmlelement("iframe")}}, das Gründe enthalten kann, warum der oberste Rahmen im Zusammenhang mit den Kindelementen blockiert wurde. Jedes Objekt hat dieselbe Struktur wie das übergeordnete Objekt – auf diese Weise können beliebig viele Ebenen eingebetteter `<iframe>`s rekursiv im Objekt dargestellt werden. Wenn der Rahmen keine Kinder hat, ist das Array leer; wenn das Dokument in einem kreuz-originierten `<iframe>` ist, gibt `children` `null` zurück.
- [`id`](/de/docs/Web/API/NotRestoredReasons/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `id`-Attributs des `<iframe>`, in dem sich das Dokument befindet, repräsentiert (z.B. `<iframe id="foo" src="...">`). Wenn das Dokument nicht in einem `<iframe>` ist oder das `<iframe>` keine `id` gesetzt hat, gibt `id` `null` zurück.
- [`name`](/de/docs/Web/API/NotRestoredReasons/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `name`-Attributs des `<iframe>`, in dem sich das Dokument befindet, repräsentiert (z.B. `<iframe name="bar" src="...">`). Wenn das Dokument nicht in einem `<iframe>` ist oder das `<iframe>` keinen `name` gesetzt hat, gibt `name` `null` zurück.
- [`reasons`](/de/docs/Web/API/NotRestoredReasons/reasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails) Objekten, die jeweils einen Grund darstellen, warum die navigierte Seite von der Nutzung des bfcache blockiert wurde. Wenn das Dokument in einem kreuz-originierten `<iframe>` ist, gibt `reasons` `null` zurück, aber das übergeordnete Dokument kann einen `reason` von `"masked"` anzeigen, wenn irgendwelche `<iframe>`s die Nutzung des bfcache für den obersten Rahmen blockiert haben. Siehe [Blockierungsgründe](#blockierungsgründe) für weitere Details zu den Gründen.
- [`src`](/de/docs/Web/API/NotRestoredReasons/src) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Pfad zur Quelle des `<iframe>`, in dem das Dokument enthalten ist, repräsentiert (z.B. `<iframe src="exampleframe.html">`). Wenn das Dokument nicht in einem `<iframe>` ist, gibt `src` `null` zurück.
- [`url`](/de/docs/Web/API/NotRestoredReasons/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die URL der navigierten Seite oder des `<iframe>`s repräsentiert. Wenn das Dokument in einem kreuz-originierten `<iframe>` ist, gibt `url` `null` zurück.

### Berichterstattung von bfcache-Blockierung in gleich-originären `<iframe>`s

Wenn eine Seite gleich-originäre `<iframe>`s eingebettet hat, wird der zurückgegebene `notRestoredReasons` Wert ein Array von Objekten in der `children`-Eigenschaft enthalten, die die Blockierungsgründe im Zusammenhang mit jedem eingebetteten Rahmen darstellen.

Zum Beispiel:

```js
{
  children: [
    {
      children: [],
      id: "iframe-id",
      name: "iframe-name",
      reasons: [],
      src: "./index.html",
      url: "https://www.example.com/iframe-examples.html"
    },
    {
      children: [],
      id: "iframe-id2",
      name: "iframe-name2",
      reasons: [
        { "reason": "unload-listener" }
      ],
      src: "./unload-examples.html",
      url: "https://www.example.com/unload-examples.html"
    },
  ],
  id: null,
  name: null,
  reasons: [],
  src: null,
  url:"https://www.example.com"
}
```

### Berichterstattung von bfcache-Blockierung in kreuz-originären `<iframe>`s

Wenn eine Seite kreuz-originäre Rahmen eingebettet hat, ist die Menge der über sie geteilten Informationen begrenzt, um zu vermeiden, dass kreuz-origine Informationen offengelegt werden. Es werden nur Informationen aufgenommen, die die äußere Seite bereits kennt, und ob der kreuz-originäre Unterbaum bfcache-Blockierung verursacht hat oder nicht. Keine Blockierungsgründe oder Informationen über niedrigere Ebenen des Unterbaums (auch wenn einige Unterebenen gleich-originär sind) sind enthalten.

Zum Beispiel:

```js
{
  children: [
    {
      children: [],
      id: "iframe-id",
      name: "iframe-name",
      reasons: [],
      src: "https://www.example2.com/",
      url: null
    }
  ],
  id: null,
  name: null,
  reasons: [
        { "reason": "masked" }
  ],
  src: null,
  url:"https://www.example.com"
}

```

Für alle kreuz-originären `<iframe>`s werden keine Blockierungsgründe gemeldet; für den obersten Rahmen wird ein Grund von `"masked"` gemeldet, um anzuzeigen, dass die Gründe aus Datenschutzgründen verborgen bleiben. Beachten Sie, dass `"masked"` möglicherweise auch zum Verbergen benutzerspezifischer Gründe verwendet wird; es weist nicht immer auf ein Problem in einem `<iframe>` hin.

## Blockierungsgründe

Es gibt viele verschiedene Gründe, warum eine Blockierung auftreten könnte, und Browser können ihre eigenen spezifischen Blockierungsgründe implementieren, basierend auf ihrer Funktionsweise. Entwickler sollten vermeiden, sich auf bestimmte Wortlaute bei Gründen zu verlassen und darauf vorbereitet sein, mit neuen hinzugefügten und entfernten Gründen umzugehen.

Die im Spezifikationsentwurf genannten Anfangswerte sind:

- `"fetch"`
  - : Während des Entladens wurde ein vom aktuellen Dokument initiierter Abruf (z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch)) abgebrochen, während er noch lief. Daher befand sich die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Während des Entladens wurden gehaltene Sperren und Sperranfragen beendet, sodass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund wird aus Datenschutzgründen verborgen. Dieser Wert kann Folgendes bedeuten:
    - Das aktuelle Dokument hat Kinder, die in einem kreuz-originierten {{htmlelement("iframe")}} enthalten sind, und diese verhinderten die Speicherung im bfcache.
    - Das aktuelle Dokument konnte aus benutzerspezifischen Gründen nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Die ursprüngliche Navigation, die das aktuelle Dokument erstellt hat, schlug fehl, und die Speicherung des resultierenden Fehlerdokumentes im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat das anfängliche HTML-Parsen nie abgeschlossen und die Speicherung des unfertigen Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Während des Entladens wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API) Verbindung geschlossen, sodass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.

Zusätzliche Blockierungsgründe können von einigen Browsern verwendet werden, zum Beispiel:

- `"unload-listener"`
  - : Die Seite registriert einen [`unload`](/de/docs/Web/API/Window/unload_event) Handler, der die Nutzung des bfcache verhindert. Dies dient als nützliche Warnung, da `unload` veraltet ist. Siehe [Nutzungsanmerkungen](/de/docs/Web/API/Window/unload_event#usage_notes) für weitere Informationen.
- `"response-cache-control-no-store"`
  - : Die Seite verwendet `no-store` als {{httpheader("Cache-Control")}} Header-Wert.
- `"related-active-contents"`
  - : Die Seite wurde von einer anderen Seite geöffnet, die noch einen Verweis auf diese Seite hat, zum Beispiel mittels "Tab duplizieren"-Funktionalität.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`notRestoredReasons` API Explainer](https://github.com/WICG/bfcache-not-restored-reason/blob/main/NotRestoredReason.md)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)

> [!NOTE]
> Dieser Artikel ist angepasst von [Back/forward cache notRestoredReasons API](https://developer.chrome.com/docs/web-platform/bfcache-notrestoredreasons/) von Chris Mills und Barry Pollard, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2023 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).
