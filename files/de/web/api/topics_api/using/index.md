---
title: Using the Topics API
slug: Web/API/Topics_API/Using
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Topics API")}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions) unten.

> [!NOTE]
> Ein [Anmeldeverfahren](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics API in Ihren Anwendungen zu nutzen. Siehe den Abschnitt [Enrollment](/de/docs/Web/API/Topics_API#enrollment) für Details, welche Sub-Features durch die Anmeldung eingeschränkt sind.

Diese Seite erklärt, wie die Topics API funktioniert und wie sie verwendet werden kann, um eine **interessenbasierte Werbelösung (IBA)** zu erstellen.

## Übersicht auf hoher Ebene

Angenommen, wir haben eine Ad-Tech-Plattform, `ad-tech1.example`, die Anzeigen über {{htmlelement("iframe")}}s in die folgenden Publisher-Websites einbettet:

- `yoga.example`
- `knitting.example`
- `football.example`

Wenn der `<iframe>`-Inhalt von `ad-tech1.example` ein [Feature implementiert, das die Topics API aktiviert](#what_api_features_enable_the_topics_api), führt der Browser bei jedem Laden der Websites die folgenden Aktionen durch:

1. Leitet **Interessenthemen** von der Site-URL ab. Die Themen werden aus einem [standardisierten Taxonomie](/de/docs/Web/API/Topics_API#what_topics_are_there) entnommen; für die obigen URL-Beispiele wären dies "Fitness", "Faser- und Textilkunst" und "Fußball".
2. **Markiert die Themen als beobachtet**, was bedeutet, dass für jedes Thema ein **Eintrag im Themenverlauf** in einem privaten Speichersystem für den Themenverlauf aufgezeichnet wird. Jeder Themenverlaufs-Eintrag enthält folgende Informationen:
   - Eine Dokument-ID (d.h. ein Bezeichner für die aktuelle Seite).
   - Inputdaten für die Themenberechnung (d.h. den Hostnamen der Seite).
   - Die Zeit (seit dem Unix-Epoch), zu der die Seite erstmals beobachtet wurde.
   - Die Domänen, in denen das Thema beobachtet wurde (bekannt als **Themenaufrufer-Domänen**).

### Auswahl von Interessenthemen zur Beeinflussung der Anzeigenauswahl

> [!NOTE]
> Verschiedene Browser-Implementierungen können auf unterschiedliche Weise Themen auswählen. Der folgende Text basiert darauf, wie Chrome derzeit Themen auswählt, zu Demonstrationszwecken.

Der Browser wird fortlaufend:

1. Verfolgen, wie oft der Benutzer jedes Thema während jeder neuen **Epoche** beobachtet. Eine Epoche dauert standardmäßig eine Woche, aber die Länge kann zu Testzwecken geändert werden (siehe [Testing hints](#testhinweise)).

   Chrome platziert jeden der 22 Wurzeltopics (d.h. diejenigen ohne Vorfahren) aus der Taxonomie in [einen von zwei Buckets](https://github.com/patcg-individual-drafts/topics/blob/main/topics-utility-buckets-v1.md), die eine höhere oder standardmäßige Nützlichkeit für das gesamte Ad-Tech-Ökosystem anzeigen. Alle Nachkommen der Wurzeltopics erben die gleiche Bucketeinteilung von ihrem Elternteil. Die Zuweisung der Wurzeltopics zu Buckets basiert auf Input zur Nützlichkeit, den Google von Unternehmen aus dem gesamten Ökosystem erhalten hat.

2. Topthemen für jeden Benutzer am Ende jeder Epoche auswählen:

   1. Chrome konvertiert die Hostnamen der Aufruferdomänen aus dem Browserverlauf des Benutzers in Themen.
   2. Diese Themen werden zuerst nach Bucket, dann nach Häufigkeit sortiert (wie oft sie in einem Hostnamen übereinstimmen). Wenn zwei Themen im selben Bucket sind, aber unterschiedliche Häufigkeiten haben, wird das Thema mit höherer Häufigkeit höher sortiert.
   3. Chrome wählt die fünf Hauptthemen als die Topthemen eines Benutzers für diese Epoche aus, die zur Weitergabe an Aufrufer berechtigt sind.

3. Die Topthemen werden nur `ad-tech1.example` zurückgegeben, wenn `ad-tech1.example` in der Liste der Aufruferdomänen für jedes Thema erscheint, wie im Verlaufs-Eintrag des Themas gespeichert.

   > [!NOTE]
   > Anfangs werden keine Themen zurückgegeben, sodass der `<iframe>` wahrscheinlich eine Standardanzeige ohne Zielgruppe anzeigt. Sobald jedoch das Ende der ersten Epoche erreicht ist, beginnt die API mit der Rückgabe von Themen, und `ad-tech1.example` kann basierend auf den beobachteten Themen für den aktuellen Benutzer relevantere Anzeigen anzeigen.

`ad-tech1.example` wählt dann eine relevante Anzeige aus, die dem Benutzer basierend auf den zurückgegebenen Themen bereitgestellt wird.

## Welche API-Features aktivieren die Topics API?

Die folgenden Features dienen einem doppelten Zweck — sie geben die Topthemen des Benutzers an den Aufrufer zurück und veranlassen den Browser, den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzuzeichnen, damit der Seitenhostname später in die Themenberechnung einfließen kann. Dazu müssen sie in ein aufrufendes Ad-Tech-`<iframe>` aufgenommen werden; das `<iframe>` muss dann auf den Seiten eingebettet sein, auf denen Sie Themen beobachten möchten.

- Sie können eine Option `browsingTopics: true` im Optionsobjekt eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs an die Ad-Tech-Plattform angeben.
- Sie könnten auch `browsingTopics: true` in das Optionsobjekt eines Aufrufes des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors übergeben und das resultierende [`Request`](/de/docs/Web/API/Request)-Objekt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben.
- Sie können ein `browsingtopics`-Attribut im `<iframe>` festlegen, gleichzeitig oder bevor Sie das `src`-Attribut zum Laden der Quelle setzen. Dies könnte erfolgen:

  - Deklarativ im HTML:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

  - Programmatisch, indem die entsprechende [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)-Eigenschaft auf `true` gesetzt wird:

  ```js
  const iframeElem = document.querySelector("iframe");
  iframeElem.browsingTopics = true;
  ```

Wenn die mit einer der oben genannten Funktionen verknüpfte Anfrage gesendet wird:

1. Ein {{httpheader("Sec-Browsing-Topics")}}-Header wird zusammen mit der Anfrage gesendet, der die Topthemen für den aktuellen Benutzer enthält.
2. Der Ad-Tech-Server wählt basierend auf diesen Themen eine relevante Anzeige zur Anzeige im `<iframe>` aus und sendet die erforderlichen Daten zur Anzeige in der Antwort.
3. Ein {{httpheader("Observe-Browsing-Topics")}}-Header sollte in die Antwort auf die Anfrage gesetzt werden — dies hat zur Folge, dass der Browser den aktuellen Seitenbesuch als vom aufrufenden Ad-Tech-Anbieter beobachtet aufzeichnet, sodass die zugehörigen Themen in einem Verlaufs-Eintrag für Themen aufgezeichnet werden und anschließend in der [Themenauswahl](#auswahl_von_interessenthemen_zur_beeinflussung_der_anzeigenauswahl) verwendet werden.

   > [!NOTE]
   > Es ist wichtig zu klären, dass dies nicht die im `Sec-Browsing-Topics`-Header gesendeten Topthemen als beobachtet aufzeichnet. Es zeichnet die von der URL der aufrufenden Seite abgeleiteten Themen (d.h. die Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist) als beobachtet auf.

### Die Methode `browsingTopics()`

Alternativ kann das eingebettete `<iframe>` [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufrufen, um die aktuellen Topthemen eines Benutzers zurückzugeben, die dann in einer nachfolgenden Fetch-Anfrage an die Ad-Tech-Plattform zurückgegeben werden können. Dies basiert nicht auf den HTTP-Headern, ist jedoch etwas weniger leistungsstark. Es wird empfohlen, eine der oben aufgeführten HTTP-Header-Methoden zu verwenden und auf `browsingTopics()` nur in Situationen zurückzugreifen, in denen die Header nicht geändert werden können.

> [!NOTE]
> Da die Methode `browsingTopics()` nicht auf die HTTP-Header angewiesen ist, wird der {{httpheader("Observe-Browsing-Topics")}}-Header nicht zum Markieren der Themen als beobachtet und zur Aufzeichnung/Aktualisierung von Themenverlaufseinträgen verwendet; der Browser übernimmt dies automatisch, wenn die Methode aufgerufen wird.

## Private Themensätze

Ein Aufrufer kann nur auf Themen zugreifen, die sie selbst für einen Benutzer beobachtet haben — und nicht auf Themen, die von anderen Aufrufern beobachtet wurden. Zum Beispiel:

- Wenn die Plattform `ad-tech1.example` ein `<iframe>` auf `tennis.example` eingebettet hat, das ein Topics-API-Feature enthält, würden sie Themen wie "Sport" und "Tennis" für einen Benutzer, der diese Seite besucht, beobachten.
- Wenn eine andere Ad-Tech-Plattform, `ad-tech2.example`, ein Topics-API-`<iframe>` auf "gardening.example" eingebettet hat, würden sie das Thema "Gartenarbeit" beobachten.

Diese Ad-Tech-Plattformen erhalten nur Themen für einen Benutzer, die sie beobachtet haben. In diesem Beispiel würde `ad-tech1.example` nicht "Gartenarbeit" erhalten und `ad-tech2.example` würde nicht "Tennis" erhalten.

Mit anderen Worten, Aufrufer wie Ad-Tech-Plattformen erhalten nur Themen für Seiten, auf denen sie präsent sind. Wichtiger ist, dass die aufgezeichneten Interessenthemen die einzige Information sind, die über diese API zugänglich ist — im Gegensatz zu Tracking-Cookies können keine anderen Informationen preisgegeben werden.

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

### Übergabe der Option `browsingTopics` an `fetch()`

```js
// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  browsingTopics: true,
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

### Einfügen des Attributs `browsingtopics` in ein `<iframe>`

```html
<iframe browsingtopics src="ad-tech1.example"> ... </iframe>
```

### Vollständige Beispiele

- [Topics API Demo](https://topics-demo.glitch.me/): Demonstriert, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-demo)).
- [Topics API Header Demo](https://topics-fetch-demo.glitch.me/): Demonstriert, wie ein `fetch()`-Anruf mit einem {{httpheader("Sec-Browsing-Topics")}}-Header verwendet werden kann, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-fetch-demo)).

## Testhinweise

### Chrome

Die standardmäßige Epochendauer für die Beobachtung von Themen beträgt eine Woche, was viel zu lang ist, um Code zu testen, der die Topics API verwendet. Um dies zu Testzwecken zu verkürzen, können Sie in Chrome den Browser mit einem Feature-Flag in etwa wie folgt öffnen:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

Weitere Informationen dazu finden Sie unter [Run Chromium with command-line switches](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/).

Sie können Ihren Topics API-Code auch lokal ohne [Anmeldung](/de/docs/Web/API/Topics_API#enrollment) testen, indem Sie das folgende Chrome-Entwickler-Flag aktivieren:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Siehe auch

- [Topics API](https://privacysandbox.google.com/private-advertising/topics) auf privacysandbox.google.com (2023)
