---
title: Überwachung von bfcache-Sperrgründen
slug: Web/API/Performance_API/Monitoring_bfcache_blocking_reasons
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Performance API")}}{{SeeCompatTable}}

Die {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}-Eigenschaft berichtet über Gründe, warum das aktuelle Dokument daran gehindert wurde, den {{Glossary("bfcache")}} bei der Navigation zu nutzen. Entwickler können diese Informationen nutzen, um Seiten zu identifizieren, die Aktualisierungen benötigen, um bfcache-kompatibel zu sein und so die Leistung der Website zu verbessern.

## Back/forward-Cache (bfcache)

Moderne Browser bieten eine Optimierungsfunktion für die Verlaufsnavigation, die als Back/forward-Cache ({{Glossary("bfcache")}}) bezeichnet wird. Diese ermöglicht ein sofortiges Ladeerlebnis, wenn Nutzer zu einer Seite zurückkehren, die sie bereits besucht haben. Seiten können aus verschiedenen Gründen daran gehindert werden, in den bfcache zu gelangen oder daraus entfernt zu werden, einige davon werden durch eine Spezifikation vorgeschrieben und einige sind spezifisch für Browserimplementierungen.

Um die Überwachung der Gründe für bfcache-Sperren zu ermöglichen, enthält die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Klasse eine `notRestoredReasons`-Eigenschaft. Diese gibt ein {{domxref("NotRestoredReasons")}}-Objekt zurück, das Informationen zum Top-Level-Frame und allen im Dokument vorhandenen {{htmlelement("iframe")}}-s enthält:

- Gründe, warum die Nutzung des bfcache blockiert wurde.
- Details wie Frame `id` und `name`, um `<iframe>`s im HTML zu identifizieren.

> [!NOTE]
> Historisch gesehen wurde die veraltete {{domxref("PerformanceNavigation.type")}}-Eigenschaft verwendet, um den bfcache zu überwachen, wobei Entwickler auf einen `type`-Wert von "`TYPE_BACK_FORWARD`" testeten, um einen Hinweis auf die bfache-Trefferquote zu erhalten. Dies bot jedoch keine Gründe für bfcache-Sperrungen oder andere Daten. Die `notRestoredReasons`-Eigenschaft sollte zukünftig zur Überwachung von bfcache-Sperrungen verwendet werden.

## Protokollierung von bfcache-Sperrgründen

Fortlaufende Daten zu bfcache-Sperrungen können mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wie folgt abgerufen werden:

```js
const observer = new PerformanceObserver((list) => {
  let perfEntries = list.getEntries();
  perfEntries.forEach((navEntry) => {
    console.log(navEntry.notRestoredReasons);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Alternativ können Sie historische Daten zu bfcache-Sperrungen mit einer geeigneten Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) abrufen:

```js
function returnNRR() {
  const navEntries = performance.getEntriesByType("navigation");
  for (let i = 0; i < navEntries.length; i++) {
    console.log(`Navigationseintrag ${i}`);
    let navEntry = navEntries[i];
    console.log(navEntry.notRestoredReasons);
  }
}
```

Die oben gezeigten Code-Snippets protokollieren {{domxref("NotRestoredReasons")}}-Objekte in der Konsole. Diese Objekte haben die folgende Struktur, die den Blockierzustand des Top-Level-Frames darstellt:

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

Die Eigenschaften sind wie folgt:

- {{domxref("NotRestoredReasons.children", "children")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von {{domxref("NotRestoredReasons")}}-Objekten, eines für jedes eingebettete Kind-{{htmlelement("iframe")}} im aktuellen Dokument, das Gründe enthalten kann, warum der Top-Level-Frame im Zusammenhang mit den untergeordneten Frames blockiert wurde. Jedes Objekt hat die gleiche Struktur wie das übergeordnete Objekt — so können beliebig viele Ebenen eingebetteter `<iframe>`s rekursiv im Objekt dargestellt werden. Hat der Frame keine Kinder, ist das Array leer; befindet sich das Dokument in einem cross-origin-`<iframe>`, gibt `children` `null` zurück.
- {{domxref("NotRestoredReasons.id", "id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den `id`-Attributwert des `<iframe>`, in dem sich das Dokument befindet, darstellt (zum Beispiel `<iframe id="foo" src="...">`). Befindet sich das Dokument nicht in einem `<iframe>` oder hat das `<iframe>` keine `id` gesetzt, gibt `id` `null` zurück.
- {{domxref("NotRestoredReasons.name", "name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den `name`-Attributwert des `<iframe>`, in dem sich das Dokument befindet, darstellt (zum Beispiel `<iframe name="bar" src="...">`). Befindet sich das Dokument nicht in einem `<iframe>` oder hat das `<iframe>` keinen `name` gesetzt, gibt `name` `null` zurück.
- {{domxref("NotRestoredReasons.reasons", "reasons")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von {{domxref("NotRestoredReasonDetails")}}-Objekten, die jeweils einen Grund darstellen, warum die navigierte Seite daran gehindert wurde, den bfcache zu nutzen. Befindet sich das Dokument in einem cross-origin-`<iframe>`, gibt `reasons` `null` zurück, aber das übergeordnete Dokument kann einen `reason` von `"masked"` zeigen, wenn ein `<iframe>` die Nutzung des bfcache für den Top-Level-Frame blockiert hat. Siehe [Blocking-Gründe](#sperrgründe) für weitere Details zu den Gründen.
- {{domxref("NotRestoredReasons.src", "src")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Pfad zur Quelle des `<iframe>`, in dem sich das Dokument befindet, darstellt (zum Beispiel `<iframe src="exampleframe.html">`). Befindet sich das Dokument nicht in einem `<iframe>`, gibt `src` `null` zurück.
- {{domxref("NotRestoredReasons.url", "url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die URL der navigierten Seite oder des `<iframe>` darstellt. Befindet sich das Dokument in einem cross-origin-`<iframe>`, gibt `url` `null` zurück.

### Meldung von bfcache-Sperrungen in gleichen Ursprungs-`<iframe>`s

Wenn eine Seite gleiche Ursprungs-`<iframe>`s eingebettet hat, enthält der zurückgegebene Wert von `notRestoredReasons` ein Array von Objekten innerhalb der `children`-Eigenschaft, die die Sperrgründe im Zusammenhang mit jedem eingebetteten Frame darstellen.

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

### Meldung von bfcache-Sperrungen in Cross-Origin-`<iframe>`s

Wenn eine Seite cross-origin-Frames eingebettet hat, wird die Menge der geteilten Informationen über diese auf ein Minimum beschränkt, um die Preisgabe von Cross-Origin-Informationen zu vermeiden. Es werden nur Informationen eingeschlossen, die die äußere Seite bereits kennt, und ob das Cross-Origin-Teilbäume die Bfcache-Sperrung verursacht haben. Es werden keine Sperrgründe oder Informationen über niedrigere Ebenen des Teilbaums (selbst wenn einige Unterebenen den gleichen Ursprung haben) eingeschlossen.

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

Für alle cross-origin-`<iframe>`s werden keine Sperrgründe gemeldet; für den Top-Level-Frame wird ein Grund von `"masked"` gemeldet, um anzuzeigen, dass die Gründe aus Datenschutzgründen verborgen bleiben. Beachten Sie, dass `"masked"` auch verwendet werden kann, um benutzerspezifische Gründe zu verbergen; es zeigt nicht immer ein Problem in einem `<iframe>` an.

## Sperrgründe

Es gibt viele verschiedene Gründe, warum eine Sperrung auftreten könnte, und Browser können sich entscheiden, ihre eigenen spezifischen Gründe für eine Sperrung zu implementieren, basierend darauf, wie sie arbeiten. Entwickler sollten sich nicht auf spezifische Formulierungen für Gründe verlassen und darauf vorbereitet sein, neue Gründe zu handhaben, die hinzugefügt und gelöscht werden.

Die anfänglichen Werte, die in der Spezifikation aufgeführt sind, sind:

- `"fetch"`
  - : Beim Entladen wurde ein Abruf, der vom aktuellen Dokument initiiert wurde (z.B. über {{domxref("Window/fetch", "fetch()")}}), während er lief, abgebrochen. Infolgedessen befand sich die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Beim Entladen wurden gehaltene Sperren und Sperranfragen beendet, sodass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund ist aus Datenschutzgründen verborgen. Dieser Wert kann Folgendes bedeuten:
    - Das aktuelle Dokument hat Kinder, die in einem Cross-Origin-{{htmlelement("iframe")}} enthalten sind und diese die Speicherung im bfcache verhinderten.
    - Das aktuelle Dokument konnte aus benutzerspezifischen Gründen nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Die ursprüngliche Navigation, die das aktuelle Dokument erstellt hat, fehlerte, und die Speicherung des resultierenden Fehldokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat seine anfängliche HTML-Analyse nie abgeschlossen, und die Speicherung des unvollständigen Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Beim Entladen wurde eine offene [Websocket](/de/docs/Web/API/WebSockets_API)-Verbindung geschlossen, sodass die Seite nicht in einem stabilen Zustand war, der im bfcache gespeichert werden konnte.

Zusätzliche Sperrgründe können von einigen Browsern verwendet werden, zum Beispiel:

- `"unload-listener"`
  - : Die Seite registriert einen [`unload`](/de/docs/Web/API/Window/unload_event)-Handler, der die Nutzung des bfcache verhindert. Dies dient als nützliche Warnung, da `unload` veraltet ist. Weitere Informationen finden Sie in den [Nutzungshinweisen](/de/docs/Web/API/Window/unload_event#usage_notes).
- `"response-cache-control-no-store"`
  - : Die Seite verwendet `no-store` als {{httpheader("Cache-Control")}}-Headerwert.
- `"related-active-contents"`
  - : Die Seite wurde von einer anderen Seite geöffnet, die noch einen Verweis auf diese Seite hat, beispielsweise durch die "doppelte Registerkarte"-Funktionalität.

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`notRestoredReasons` API Erklärer](https://github.com/WICG/bfcache-not-restored-reason/blob/main/NotRestoredReason.md)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
- {{domxref("NotRestoredReasons")}}

> [!NOTE]
> Dieser Artikel ist eine Anpassung von [Back/forward cache notRestoredReasons API](https://developer.chrome.com/docs/web-platform/bfcache-notrestoredreasons/) von Chris Mills und Barry Pollard, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2023 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).
