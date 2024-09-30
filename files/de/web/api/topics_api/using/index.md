---
title: Using the Topics API
slug: Web/API/Topics_API/Using
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{DefaultAPISidebar("Topics API")}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards-Positionen](/de/docs/Web/API/Topics_API#standards_positions) unten für Einzelheiten zur Ablehnung.

> [!NOTE]
> Ein [Einschreibungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics API in Ihren Anwendungen zu verwenden. Siehe den Abschnitt [Einschreibung](/de/docs/Web/API/Topics_API#enrollment) für Details, welche Unterfunktionen durch die Einschreibung gesteuert werden.

Diese Seite erklärt, wie die Topics API funktioniert und wie sie zur Erstellung einer **interessenbasierten Werbungslösung (IBA)** genutzt werden kann.

## Überblick auf hoher Ebene

Angenommen, wir haben eine Ad-Tech-Plattform, `ad-tech1.example`, die Anzeigen über {{htmlelement("iframe")}} in folgende Publisher-Websites einbettet:

- `yoga.example`
- `knitting.example`
- `football.example`

Wenn der `<iframe>`-Inhalt von `ad-tech1.example` eine [Funktion implementiert, die die Topics API aktiviert](#what_api_features_enable_the_topics_api), wird der Browser bei jedem Laden der Websites:

1. **Interessensgebiete** aus der URL der Website ableiten. Die Themen werden aus einer [standardisierten Taxonomie](/de/docs/Web/API/Topics_API#what_topics_are_there) entnommen; für die obigen URL-Beispiele wären dies "Fitness", "Faser- & Textilkunst" und "Fußball".
2. **Die Themen als beobachtet markieren**, was das Aufzeichnen eines **Themenverlaufseintrags** für jedes Thema in einem privaten Themenverlaufsspeicher beinhaltet. Jeder Themenverlaufseintrag umfasst folgende Informationen:
   - Eine Dokument-ID (d. h. ein Bezeichner für die aktuelle Seite).
   - Eingabedaten zur Berechnung der Themen (d. h. den Hostname der Seite).
   - Die Zeit (seit dem Unix-Epochenbeginn), zu der die Seite erstmals beobachtet wurde.
   - Die Domain(s), in denen das Thema beobachtet wurde (bekannt als **Themenanrufer-Domains**).

### Auswahl von Interessensgebieten zur Beeinflussung der Anzeigenwahl

> [!NOTE]
> Verschiedene Browser-Implementierungen können Themen auf unterschiedliche Weise auswählen. Der unten stehende Text basiert darauf, wie Chrome derzeit Themen auswählt, zu Demonstrationszwecken.

Der Browser wird fortlaufend:

1. Verfolgen, wie oft der Nutzer jedes Thema in jedem neuen **Epoch** beobachtet. Eine Epoche ist standardmäßig eine Woche lang, die Länge kann jedoch zu Testzwecken geändert werden (siehe [Testhinweise](#testhinweise)).

   Chrome platziert jedes der 22 Wurzeltopics (die ohne Vorfahren) aus der Taxonomie in [einen von zwei Buckets](https://github.com/patcg-individual-drafts/topics/blob/main/topics-utility-buckets-v1.md), die einen höheren oder standardmäßigen Nutzen für das gesamte Ad-Tech-Ökosystem anzeigen. Alle Nachkommen der Wurzeltopics erben die gleiche Bucket-Zuweisung von ihrem Elternteil. Die Zuweisung von Wurzeltopics zu Buckets basiert auf Eingaben über den Nutzen, den Google von Unternehmen im gesamten Ökosystem erhalten hat.

2. Am Ende jeder Epoche die Top-Themen für jeden Nutzer auswählen:

   1. Chrome wandelt die Hostnamen der Anrufer-Domainen aus dem Browserverlauf des Nutzers in Themen um.
   2. Diese Themen werden zuerst nach Bucket und dann nach Häufigkeit sortiert (wie oft sie mit einem Hostnamen übereinstimmten). Das heißt, wenn zwei Themen im gleichen Bucket sind, aber unterschiedliche Frequenzen haben, wird das Thema mit der höheren Frequenz höher sortiert.
   3. Chrome wählt die fünf wichtigsten Themen als die Top-Themen des Nutzers für diese Epoche aus, die für die Weitergabe an Anrufer geeignet sind.

3. Die Top-Themen werden nur dann an `ad-tech1.example` zurückgegeben, wenn `ad-tech1.example` in der Liste der Anrufer-Domains für jedes Thema erscheint, wie in der Verlaufseintragung des Themas gespeichert.

   > [!NOTE]
   > Anfangs werden keine Themen zurückgegeben, sodass das `<iframe>` wahrscheinlich eine standardmäßige nicht zielgerichtete Anzeige anzeigen wird. Sobald das Ende der ersten Epoche erreicht ist, wird die API beginnen, Themen zurückzugeben und `ad-tech1.example` kann beginnen, relevantere Anzeigen basierend auf den beobachteten Themen für den aktuellen Nutzer anzuzeigen.

`ad-tech1.example` wählt dann eine relevante Anzeige aus, die basierend auf den zurückgegebenen Themen an den Nutzer geliefert wird.

## Welche API-Funktionen ermöglichen die Topics API?

Die folgenden Funktionen dienen einem doppelten Zweck — sie geben die Top-Themen des Nutzers an den Anrufer zurück und lösen den Browser aus, den aktuellen Seitenbesuch als vom Anrufer beobachtet zu speichern, damit der Hostname der Seite später in der Themenberechnung verwendet werden kann. Dazu müssen sie in einem aufrufenden Ad-Tech-`<iframe>` enthalten sein; das `<iframe>` muss dann auf den Seiten eingebettet werden, auf denen Sie Themen beobachten möchten.

- Sie können eine Option `browsingTopics: true` im Optionsobjekt eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs an die Ad-Tech-Plattform angeben.
- Sie könnten auch `browsingTopics: true` in das Optionsobjekt eines `[`Request()`](/de/docs/Web/API/Request/Request)-Konstruktoraufrufs übergeben und das resultierende [`Request`](/de/docs/Web/API/Request)-Objekt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben.
- Sie können ein `browsingtopics`-Attribut auf dem `<iframe>` setzen, gleichzeitig oder bevor das `src`-Attribut zum Laden der Quelle gesetzt wird. Dies könnte erfolgen:

  - Deklarativ im HTML:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

  - Programmatisch durch das Setzen der entsprechenden [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)-Eigenschaft auf `true`:

  ```js
  const iframeElem = document.querySelector("iframe");
  iframeElem.browsingTopics = true;
  ```

Wenn die mit einer der obigen Funktionen verbundene Anfrage gesendet wird:

1. Ein {{httpheader("Sec-Browsing-Topics")}}-Header wird zusammen mit der Anfrage gesendet, der die Top-Themen für den aktuellen Nutzer enthält.
2. Der Ad-Tech-Server wählt eine relevante Anzeige zur Anzeige im `<iframe>` basierend auf diesen Themen und sendet die erforderlichen Daten zur Anzeige in der Antwort.
3. Ein {{httpheader("Observe-Browsing-Topics")}}-Header sollte in der Antwort auf die Anfrage gesetzt werden — dies hat den Effekt, dass der Browser den aktuellen Seitenbesuch als vom aufrufenden Ad-Tech-Anbieter beobachtet aufzeichnet, sodass die zugehörigen Thema(en) in einem Themenverlaufseintrag erfasst und anschließend in [Themenauswahl](#auswahl_von_interessensgebieten_zur_beeinflussung_der_anzeigenwahl) verwendet werden.

   > [!NOTE]
   > Es ist wichtig klarzustellen, dass dies nicht die im `Sec-Browsing-Topics`-Header gesendeten Top-Themen als beobachtet aufzeichnet. Es erfasst die aus der URL der aufrufenden Seite abgeleiteten Themen (d. h. die Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist) als beobachtet.

### Die `browsingTopics()`-Methode

Alternativ kann das eingebettete `<iframe>` [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufrufen, um die aktuellen Top-Themen eines Nutzers zurückzugeben, die dann in einer nachfolgenden Abrufanfrage an die Ad-Tech-Plattform zurückgegeben werden können. Dies basiert nicht auf den HTTP-Headern, ist jedoch etwas weniger performant. Es wird geraten, eine der oben aufgeführten HTTP-Header-Methoden zu verwenden und nur in Situationen, in denen die Header nicht geändert werden können, auf `browsingTopics()` als Fallback zurückzugreifen.

> [!NOTE]
> Da die `browsingTopics()`-Methode nicht auf den HTTP-Headern basiert, wird der {{httpheader("Observe-Browsing-Topics")}}-Header nicht verwendet, um die Themen als beobachtet zu kennzeichnen und Themenverlaufseinträge aufzuzeichnen/zu aktualisieren; der Browser erledigt dies automatisch, wenn die Methode aufgerufen wird.

## Private Themen-Sets

Ein Anrufer kann nur auf Themen zugreifen, die er selbst für einen Nutzer beobachtet hat — und nicht auf Themen, die von anderen Anrufern beobachtet wurden. Zum Beispiel:

- Wenn die `ad-tech1.example`-Plattform ein `<iframe>` auf `tennis.example` eingebettet hat, das ein Topics-API-Feature enthält, würden sie Themen wie "Sport" und "Tennis" für einen Benutzer, der diese Seite besucht, beobachten.
- Wenn eine andere Ad-Tech-Plattform, `ad-tech2.example`, ein Topics-API-`<iframe>` auf "gardening.example" eingebettet hat, würden sie das Thema "Gartenarbeit" beobachten.

Diese Ad-Tech-Plattformen erhalten nur Themen für einen Benutzer, die sie beobachtet haben. In diesem Beispiel erhält `ad-tech1.example` nicht das Thema "Gartenarbeit" und `ad-tech2.example` nicht das Thema "Tennis".

Mit anderen Worten, Anrufer wie Ad-Tech-Plattformen erhalten nur Themen für Seiten, auf denen sie eine Präsenz haben. Wichtiger ist, dass die aufgezeichneten Interessensgebiete die einzige Information sind, die über diese API abgerufen werden kann — im Gegensatz zu Tracking-Cookies kann keine andere Information durchsickern.

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

### Übergeben der Option `browsingTopics` an `fetch()`

```js
// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  browsingTopics: true,
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

### Hinzufügen des Attributs `browsingtopics` in ein `<iframe>`

```html
<iframe browsingtopics src="ad-tech1.example"> ... </iframe>
```

### Vollständige Beispiele

- [Topics API-Demo](https://topics-demo.glitch.me/): Demonstriert, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-demo)).
- [Topics API-Header-Demo](https://topics-fetch-demo.glitch.me/): Demonstriert, wie eine `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header verwendet werden kann, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-fetch-demo)).

## Testhinweise

### Chrome

Die Standardlänge der Epoche zur Beobachtung von Themen beträgt eine Woche, was viel zu lang ist, um Code zu testen, der die Topics API verwendet. Um dies zu Testzwecken zu verkürzen, können Sie in Chrome den Browser mit einem Feature-Flag in der folgenden Art öffnen:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

Siehe [Chromium mit Befehlszeilen-Schaltern ausführen](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/) für weitere Informationen zum Vorgehen.

Sie können Ihren Topics API-Code auch lokal ohne [Einschreibung](/de/docs/Web/API/Topics_API#enrollment) testen, indem Sie das folgende Chrome-Entwickler-Flag aktivieren:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Siehe auch

- [Topics API](https://developers.google.com/privacy-sandbox/private-advertising/topics) auf developers.google.com (2023)
