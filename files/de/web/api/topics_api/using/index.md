---
title: Using the Topics API
slug: Web/API/Topics_API/Using
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Topics API")}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards-Positionen](/de/docs/Web/API/Topics_API#standards_positions) unten für Details zur Ablehnung.

> [!NOTE]
> Ein [Enrollment-Prozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics-API in Ihren Anwendungen zu verwenden. Siehe den Abschnitt [Enrollment](/de/docs/Web/API/Topics_API#enrollment) für Details zu den Funktionsuntergruppen, die durch das Enrollment geregelt sind.

Diese Seite erklärt, wie die Topics-API funktioniert und wie sie verwendet werden kann, um eine **interessensbasierte Werbelösung (IBA)** zu erstellen.

## Übersicht auf hoher Ebene

Angenommen, wir haben eine Ad-Tech-Plattform, `ad-tech1.example`, die über {{htmlelement("iframe")}}s Anzeigen in die folgenden Publisher-Seiten einbettet:

- `yoga.example`
- `knitting.example`
- `football.example`

Wenn der `<iframe>`-Inhalt von `ad-tech1.example` eine [Funktion zur Aktivierung der Topics-API](#what_api_features_enable_the_topics_api) implementiert, wird der Browser beim Laden jeder Seite:

1. **Interessensgebiete** aus der Website-URL ableiten. Die Themen stammen aus einer [standardisierten Taxonomie](/de/docs/Web/API/Topics_API#what_topics_are_there); für die oben genannten URL-Beispiele wären dies "Fitness", "Faser- & Textilkunst" und "Fußball".
2. **Die Themen als beobachtet markieren**, was das Aufzeichnen eines **Themenverlaufseintrags** für jedes Thema in einem privaten Themenverlaufspeicher beinhaltet. Jeder Themenverlaufseintrag enthält folgende Informationen:
   - Eine Dokumenten-ID (d.h. ein Bezeichner für die aktuelle Seite).
   - Eingabedaten für die Themenberechnung (d.h. den Hostnamen der Seite).
   - Die Zeit (seit dem Unix-Epoch), wann die Seite erstmals beobachtet wurde.
   - Die Domain(s), in denen das Thema beobachtet wurde (bekannt als **Themenaufrufdomänen**).

### Auswahl von Interessensgebieten zur Beeinflussung der Anzeigenwahl

> [!NOTE]
> Unterschiedliche Browserimplementierungen können Themen auf unterschiedliche Weise auswählen. Der nachstehende Text basiert darauf, wie Chrome derzeit Themen auswählt, zu Demonstrationszwecken.

Der Browser wird fortlaufend:

1. Verfolgen, wie oft der Nutzer jedes Thema während eines neuen **Zyklus** beobachtet. Ein Zyklus dauert standardmäßig eine Woche, kann jedoch aus Testzwecken geändert werden (siehe [Testhinweise](#testhinweise)).

   Chrome ordnet jedem der 22 Hauptthemen (solche ohne Vorgänger) aus der Taxonomie zu [einem von zwei Buckets](https://github.com/patcg-individual-drafts/topics/blob/main/topics-utility-buckets-v1.md), die eine höhere oder standardmäßige Nützlichkeit für das gesamte Ad-Tech-Ökosystem anzeigen. Alle Nachkommen der Hauptthemen übernehmen die gleiche Zuordnung von ihrem übergeordneten Thema. Die Zuordnung der Hauptthemen zu Buckets basiert auf Eingaben zur Nützlichkeit, die Google von Unternehmen im gesamten Ökosystem erhalten hat.

2. Auswahl der wichtigsten Themen für jeden Nutzer, am Ende jedes Zyklus:

   1. Chrome wandelt die Hostnamen der Domänen der Aufrufer aus dem Verlauf des Nutzers in Themen um.
   2. Diese Themen werden zunächst nach Bucket und dann nach Häufigkeit sortiert (wie oft sie in einem Hostnamen übereinstimmten). Das heißt, wenn zwei Themen im gleichen Bucket sind, aber unterschiedliche Häufigkeiten haben, wird das Thema mit der höheren Häufigkeit höher sortiert.
   3. Chrome wählt die fünf wichtigsten Themen als Top-Themen des Nutzers für diesen Zyklus aus, die mit Aufrufern geteilt werden können.

3. Die Top-Themen werden nur dann an `ad-tech1.example` zurückgemeldet, wenn `ad-tech1.example` in der Liste der Aufruferdomänen für jedes Thema erscheint, wie in den Themenverlaufseinträgen gespeichert.

   > [!NOTE]
   > Anfangs werden keine Themen zurückgemeldet, sodass das `<iframe>` wahrscheinlich eine standardmäßige nicht zielgerichtete Anzeige zeigt. Sobald jedoch das Ende des ersten Zyklus erreicht ist, beginnt die API, Themen zurückzugeben, und `ad-tech1.example` kann damit beginnen, relevantere Anzeigen basierend auf den beobachteten Themen für den aktuellen Nutzer anzuzeigen.

`ad-tech1.example` wählt dann eine relevante Anzeige aus, um sie dem Nutzer basierend auf den zurückgegebenen Themen anzuzeigen.

## Welche API-Funktionen aktivieren die Topics-API?

Die folgenden Funktionen erfüllen einen doppelten Zweck — sie geben die Top-Themen des Nutzers an den Aufrufer zurück und veranlassen den Browser, den aktuellen Seitenbesuch als vom Aufrufer beobachtet zu protokollieren, sodass der Hostname der Seite später für die Themenberechnung verwendet werden kann. Dafür müssen sie in einem aufrufenden Ad-Tech-`<iframe>` enthalten sein; das `<iframe>` muss dann auf den Seiten eingebettet werden, auf denen Sie Themen beobachten möchten.

- Sie können eine `browsingTopics: true`-Option im Optionsobjekt eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs an die Ad-Tech-Plattform angeben.
- Sie könnten auch `browsingTopics: true` in das Optionsobjekt eines [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors übergeben und das resultierende [`Request`](/de/docs/Web/API/Request)-Objekt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf einfügen.
- Sie können ein `browsingtopics`-Attribut auf dem `<iframe>` setzen, gleichzeitig oder bevor Sie das `src`-Attribut setzen, um die Quelle zu laden. Dies könnte folgendermaßen geschehen:

  - Deklarativ im HTML:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

  - Programmatisch, indem die entsprechende [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)-Eigenschaft auf `true` gesetzt wird:

  ```js
  const iframeElem = document.querySelector("iframe");
  iframeElem.browsingTopics = true;
  ```

Wenn die Anfrage, die mit einer der oben genannten Funktionen verbunden ist, gesendet wird:

1. Ein {{httpheader("Sec-Browsing-Topics")}}-Header wird zusammen mit der Anfrage gesendet, der die Top-Themen für den aktuellen Nutzer enthält.
2. Der Ad-Tech-Server wählt eine relevante Anzeige aus, die im `<iframe>` basierend auf diesen Themen anzuzeigen ist, und sendet die erforderlichen Daten, um sie in der Antwort darzustellen.
3. Ein {{httpheader("Observe-Browsing-Topics")}}-Header sollte in der Antwort auf die Anfrage gesetzt werden — dies bewirkt, dass der Browser den aktuellen Seitenbesuch als vom aufrufenden Ad-Tech-Anbieter beobachtet protokolliert, sodass die zugehörigen Themen in einem Themenverlaufseintrag aufgezeichnet werden und anschließend in der [Themenauswahl](#auswahl_von_interessensgebieten_zur_beeinflussung_der_anzeigenwahl) verwendet werden.

   > [!NOTE]
   > Es ist wichtig zu klären, dass damit nicht die im `Sec-Browsing-Topics`-Header gesendeten Top-Themen als beobachtet protokolliert werden. Es protokolliert die aus der URL der aufrufenden Seite (d.h. der Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist) abgeleiteten Themen als beobachtet.

### Die `browsingTopics()`-Methode

Alternativ kann das eingebettete `<iframe>` [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufrufen, um die aktuellen Top-Themen eines Nutzers zurückzugeben, die dann in einer nachfolgenden Fetch-Anfrage an die Ad-Tech-Plattform zurückgegeben werden können. Dies ist nicht von den HTTP-Headern abhängig, ist jedoch etwas weniger performant. Es wird empfohlen, eine der oben aufgeführten HTTP-Header-Methoden zu verwenden und nur in Situationen, in denen die Header nicht geändert werden können, auf `browsingTopics()` zurückzugreifen.

> [!NOTE]
> Da die `browsingTopics()`-Methode nicht auf den HTTP-Headern basiert, wird der {{httpheader("Observe-Browsing-Topics")}}-Header nicht verwendet, um die Themen als beobachtet festzulegen und Themenverlaufseinträge aufzuzeichnen/zu aktualisieren; der Browser erledigt dies automatisch, wenn die Methode aufgerufen wird.

## Private Themen-Sets

Ein Aufrufer kann nur auf Themen zugreifen, die er selbst für einen Nutzer beobachtet hat — und nicht auf Themen, die von anderen Aufrufern beobachtet wurden. Zum Beispiel:

- Wenn die Plattform `ad-tech1.example` ein `<iframe>` auf `tennis.example` eingebettet hat, das eine Topics-API-Funktion enthält, würden sie Themen wie "Sport" und "Tennis" für einen Nutzer beobachten, der diese Seite besucht.
- Wenn eine andere Ad-Tech-Plattform, `ad-tech2.example`, ein Topics-API-`<iframe>` auf "gardening.example" eingebettet hat, würden sie das Thema "Gartenarbeit" beobachten.

Diese Ad-Tech-Plattformen erhalten nur Themen für einen Nutzer, die sie beobachtet haben. In diesem Beispiel würde `ad-tech1.example` nicht "Gartenarbeit" erhalten und `ad-tech2.example` nicht "Tennis".

Mit anderen Worten: Aufrufer wie Ad-Tech-Plattformen erhalten nur Themen für Seiten, auf denen sie präsent sind. Wichtiger ist, dass die protokollierten Interessensgebiete die einzigen Informationen sind, die über diese API zugänglich sind — im Gegensatz zu Tracking-Cookies können keine weiteren Informationen preisgegeben werden.

## Beispiele

### Verwendung von `Document.browsingTopics()`

```js
// Get an array of topics for this user
const topics = await document.browsingTopics();

// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(topics),
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

### Übergeben der `browsingTopics`-Option an `fetch()`

```js
// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  browsingTopics: true,
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

### Einfügen des `browsingtopics`-Attributs in ein `<iframe>`

```html
<iframe browsingtopics src="ad-tech1.example"> ... </iframe>
```

### Vollständige Beispiele

- [Topics-API-Demo](https://topics-demo.glitch.me/): Demonstriert, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-demo)).
- [Topics-API-Header-Demo](https://topics-fetch-demo.glitch.me/): Demonstriert eine `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header, der verwendet werden kann, um Themen zu beobachten und darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-fetch-demo)).

## Testhinweise

### Chrome

Die standardmäßige Zykluslänge zur Beobachtung von Themen beträgt eine Woche, was viel zu lang ist, um Code zu testen, der die Topics-API verwendet. Um dies für Testzwecke zu verkürzen, können Sie in Chrome den Browser mit einem Feature-Flag in etwa folgendermaßen öffnen:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

Siehe [Chromium mit Befehlszeilen-Schaltern ausführen](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/) für weitere Informationen, wie dies umgesetzt werden kann.

Sie können Ihren Topics-API-Code auch lokal testen, ohne [Enrollment](/de/docs/Web/API/Topics_API#enrollment), indem Sie das folgende Chrome-Entwickler-Flag aktivieren:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Siehe auch

- [Topics API](https://developers.google.com/privacy-sandbox/private-advertising/topics) auf developers.google.com (2023)
