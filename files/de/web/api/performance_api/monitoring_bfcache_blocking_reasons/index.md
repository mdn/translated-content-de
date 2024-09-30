---
title: Überwachung der bfcache-Blockierungsgründe
slug: Web/API/Performance_API/Monitoring_bfcache_blocking_reasons
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("Performance API")}}{{SeeCompatTable}}

Die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)-Eigenschaft liefert Informationen darüber, warum das aktuelle Dokument daran gehindert wurde, den [bfcache](/de/docs/Glossary/bfcache) bei der Navigation zu nutzen. Entwickler können diese Informationen nutzen, um Seiten zu identifizieren, die ein Update benötigen, um bfcache-kompatibel zu werden und dadurch die Leistungsfähigkeit der Website zu verbessern.

## Back/forward cache (bfcache)

Moderne Browser bieten eine Optimierungsfunktion für den Verlauf der Navigation namens Back/forward cache ([bfcache](/de/docs/Glossary/bfcache)). Diese ermöglicht eine sofortige Ladeerfahrung, wenn Nutzer zu einer Seite zurückkehren, die sie bereits besucht haben. Seiten können aus verschiedenen Gründen daran gehindert werden, in den bfcache zu gelangen oder daraus entfernt werden, einige davon sind in einer Spezifikation festgelegt, andere sind spezifisch für die Browserimplementierung.

Um die Überwachung der bfcache-Blockierungsgründe zu ermöglichen, enthält die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Klasse eine `notRestoredReasons`-Eigenschaft. Diese gibt ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück, das verwandte Informationen über das Top-Level-Frame und alle {{htmlelement("iframe")}}, die im Dokument vorhanden sind, enthält:

- Gründe, warum die bfcache-Nutzung blockiert wurde.
- Details wie `id` und `name` des Frames zur Identifizierung von `<iframe>`s im HTML.

> [!NOTE]
> Historisch gesehen wurde die veraltete [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type)-Eigenschaft genutzt, um den bfcache zu überwachen, da Entwickler nach einem `type` von `"TYPE_BACK_FORWARD"` suchten, um ein Indiz für die bfcache-Trefferquote zu erhalten. Dies lieferte jedoch keine Gründe für die bfcache-Blockierung oder andere Daten. Zukünftig sollte die `notRestoredReasons`-Eigenschaft zur Überwachung der bfcache-Blockierung verwendet werden.

## Protokollierung der bfcache-Blockierungsgründe

Laufende Daten zur bfcache-Blockierung können mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) erfasst werden, wie folgt:

```js
const observer = new PerformanceObserver((list) => {
  let perfEntries = list.getEntries();
  perfEntries.forEach((navEntry) => {
    console.log(navEntry.notRestoredReasons);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Alternativ kann man historische Daten zur bfcache-Blockierung mit einer geeigneten Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) erhalten:

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

Die oben gezeigten Codebeispiele protokollieren [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekte in die Konsole. Diese Objekte haben die folgende Struktur, die den blockierten Zustand des Top-Level-Frames repräsentiert:

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

- [`children`](/de/docs/Web/API/NotRestoredReasons/children) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekten, eines für jedes eingebettete Kind-{{htmlelement("iframe")}} im aktuellen Dokument, das Gründe enthalten kann, warum das Top-Level-Frame blockiert wurde in Bezug auf die Kinderframes. Jedes Objekt hat die gleiche Struktur wie das übergeordnete Objekt, sodass beliebig viele Ebenen eingebetteter `<iframe>`s rekursiv im Objekt dargestellt werden können. Wenn das Frame keine Kinder hat, wird das Array leer sein; wenn das Dokument in einem Cross-Origin-`<iframe>` ist, gibt `children` `null` zurück.
- [`id`](/de/docs/Web/API/NotRestoredReasons/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `id`-Attributs des `<iframe>`, in dem das Dokument enthalten ist, darstellt (zum Beispiel `<iframe id="foo" src="...">`). Wenn das Dokument nicht in einem `<iframe>` ist oder das `<iframe>` keine `id` gesetzt hat, gibt `id` `null` zurück.
- [`name`](/de/docs/Web/API/NotRestoredReasons/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `name`-Attributs des `<iframe>`, in dem das Dokument enthalten ist, darstellt (zum Beispiel `<iframe name="bar" src="...">`). Wenn das Dokument nicht in einem `<iframe>` ist oder das `<iframe>` keinen `name` gesetzt hat, gibt `name` `null` zurück.
- [`reasons`](/de/docs/Web/API/NotRestoredReasons/reasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekten, von denen jedes einen Grund repräsentiert dafür, warum die navigierte Seite daran gehindert wurde, den bfcache zu verwenden. Wenn das Dokument in einem Cross-Origin-`<iframe>` ist, gibt `reasons` `null` zurück, aber das übergeordnete Dokument kann einen `reason` von `"masked"` anzeigen, wenn ein `<iframe>` die bfcache-Nutzung für das Top-Level-Frame blockiert hat. Siehe [Blocking reasons](#blockierungsgründe) für mehr Details zu den Gründen.
- [`src`](/de/docs/Web/API/NotRestoredReasons/src) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Pfad zur Quelle des `<iframe>`, in dem das Dokument enthalten ist, darstellt (zum Beispiel `<iframe src="exampleframe.html">`). Wenn das Dokument nicht in einem `<iframe>` ist, gibt `src` `null` zurück.
- [`url`](/de/docs/Web/API/NotRestoredReasons/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die URL der navigierten Seite oder des `<iframe>`s darstellt. Wenn das Dokument in einem Cross-Origin-`<iframe>` ist, gibt `url` `null` zurück.

### Berichterstattung der bfcache-Blockierung in same-origin `<iframe>`s

Wenn eine Seite eingebettete same-origin `<iframe>`s hat, enthält der zurückgegebene `notRestoredReasons`-Wert ein Array von Objekten innerhalb der `children`-Eigenschaft, die die Blockierungsgründe für jedes eingebettete Frame darstellen.

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

### Berichterstattung der bfcache-Blockierung in cross-origin `<iframe>`s

Wenn eine Seite eingebettete Cross-Origin-Frames hat, ist die Menge der Informationen, die über sie geteilt werden, begrenzt, um das Lecken von Cross-Origin-Informationen zu vermeiden. Es sind nur Informationen enthalten, die die äußere Seite bereits kennt, und ob der Cross-Origin-Subtree die bfcache-Blockierung verursacht hat oder nicht. Keine Blockierungsgründe oder Informationen zu tieferen Ebenen des Subtrees (auch wenn einige Sub-Level same-origin sind) sind enthalten.

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

Bei allen Cross-Origin-`<iframe>`s werden keine Blockierungsgründe gemeldet; für das Top-Level-Frame wird ein Grund von `"masked"` gemeldet, um anzuzeigen, dass die Gründe aus Datenschutzgründen verborgen bleiben. Beachten Sie, dass `"masked"` auch verwendet werden kann, um benutzerspezifische Gründe zu verbergen; es weist nicht immer auf ein Problem in einem `<iframe>` hin.

## Blockierungsgründe

Es gibt viele verschiedene Gründe, warum eine Blockierung auftreten kann, und Browser können wählen, ihre eigenen spezifischen Gründe für Blockierungen basierend darauf, wie sie funktionieren, umzusetzen. Entwickler sollten vermeiden, sich auf bestimmte Formulierungen für Gründe zu verlassen, und darauf vorbereitet sein, dass neue Gründe hinzugefügt und bestehende gelöscht werden.

Die anfänglich in der Spezifikation aufgelisteten Werte sind:

- `"fetch"`
  - : Beim Entladen wurde ein Abruf, der durch das aktuelle Dokument initiiert wurde (z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch)), während er noch lief, abgebrochen. Infolgedessen befand sich die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Beim Entladen wurden gehaltene Locks und Lock-Anfragen beendet, sodass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund ist aus Datenschutzgründen verborgen. Dieser Wert kann Folgendes bedeuten:
    - Das aktuelle Dokument hat Kinder enthalten in einem Cross-Origin-{{htmlelement("iframe")}}, und sie verhinderten die Speicherung im bfcache.
    - Das aktuelle Dokument konnte aus benutzerspezifischen Gründen nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Die ursprüngliche Navigation, die das aktuelle Dokument erstellt hat, ist fehlgeschlagen, und die Speicherung des resultierenden Fehlerdokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat niemals sein anfängliches HTML-Parsen abgeschlossen, und die Speicherung des unfertigen Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Beim Entladen wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung heruntergefahren, sodass die Seite nicht in einem stabilen Zustand war, der im bfcache gespeichert werden konnte.

Zusätzliche Blockierungsgründe können von einigen Browsern verwendet werden, zum Beispiel:

- `"unload-listener"`
  - : Die Seite registriert einen [`unload`](/de/docs/Web/API/Window/unload_event)-Handler, der die Nutzung des bfcache verhindert. Dies dient als nützliche Warnung, da `unload` veraltet ist. Siehe [Benutzungshinweise](/de/docs/Web/API/Window/unload_event#usage_notes) für mehr Informationen.
- `"response-cache-control-no-store"`
  - : Die Seite nutzt `no-store` als Wert für das {{httpheader("Cache-Control")}}-Header.
- `"related-active-contents"`
  - : Die Seite wurde von einer anderen Seite geöffnet, die noch eine Referenz auf diese Seite hat, zum Beispiel mit der Funktionalität "Tab duplizieren".

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`notRestoredReasons` API Erklärer](https://github.com/WICG/bfcache-not-restored-reason/blob/main/NotRestoredReason.md)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)

> [!NOTE]
> Dieser Artikel ist adaptiert von [Back/forward cache notRestoredReasons API](https://developer.chrome.com/docs/web-platform/bfcache-notrestoredreasons/) von Chris Mills und Barry Pollard, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2023 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).
