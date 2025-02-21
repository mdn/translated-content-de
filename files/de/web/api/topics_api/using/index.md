---
title: Using the Topics API
slug: Web/API/Topics_API/Using
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{DefaultAPISidebar("Topics API")}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browseranbietern abgelehnt. Weitere Informationen zur Ablehnung finden Sie im Abschnitt [Standpunkte der Standards](/de/docs/Web/API/Topics_API#standards_positions).

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics API in Ihren Anwendungen zu verwenden. Weitere Informationen zu den durch die Registrierung gesperrten Unterfunktionen finden Sie im Abschnitt [Registrierung](/de/docs/Web/API/Topics_API#enrollment).

Diese Seite erklärt, wie die Topics API funktioniert und wie sie verwendet werden kann, um eine **interessenbasierte Werbelösung (IBA)** zu erstellen.

## Überblick auf hoher Ebene

Angenommen, wir haben eine Ad-Tech-Plattform, `ad-tech1.example`, die Anzeigen über {{htmlelement("iframe")}}s auf den folgenden Publisher-Seiten einbettet:

- `yoga.example`
- `knitting.example`
- `football.example`

Wenn der `<iframe>`-Inhalt von `ad-tech1.example` eine [Funktion, die die Topics API aktiviert](#what_api_features_enable_the_topics_api) implementiert, wird der Browser jedes Mal, wenn die Seiten geladen werden:

1. **Interessenthemen** aus der Website-URL ableiten. Die Themen werden aus einer [standardisierten Taxonomie](/de/docs/Web/API/Topics_API#what_topics_are_there) entnommen; für die obigen URL-Beispiele wären dies "Fitness", "Faser- & Textilkunst" und "Fußball".
2. **Die Themen als beobachtet markieren**, was das Aufzeichnen eines **Themenhistorieneintrags** für jedes Thema in einem privaten Themenhistorien-Speicher umfasst. Jeder Themenhistorieneintrag enthält die folgenden Informationen:
   - Eine Dokument-ID (d.h. einen Identifikator für die aktuelle Seite).
   - Eingabedaten zur Themenberechnung (d.h. den Hostnamen der Seite).
   - Die Zeit (seit der Unix-Epoche), wann die Seite erstmals beobachtet wurde.
   - Die Domain(s), in denen das Thema beobachtet wurde (bekannt als **Themenaufruf-Domains**).

### Auswahl von Interessenthemen zur Beeinflussung der Anzeigenwahl

> [!NOTE]
> Unterschiedliche Browserimplementierungen können Themen auf unterschiedliche Weise auswählen. Der folgende Text basiert darauf, wie Chrome derzeit Themen auswählt, zu Demonstrationszwecken.

Fortlaufend wird der Browser:

1. Verfolgen, wie oft der Benutzer jedes Thema während jeder neuen **Epoche** beobachtet. Eine Epoche ist standardmäßig eine Woche, aber die Länge kann zu Testzwecken verändert werden (siehe [Testhinweise](#testhinweise)).

   Chrome teilt jedes der 22 Hauptthemen (die ohne Vorfahren) aus der Taxonomie in [einen von zwei Buckets](https://github.com/patcg-individual-drafts/topics/blob/main/topics-utility-buckets-v1.md) ein, der eine höhere oder standardmäßige Nützlichkeit für das gesamte Ad-Tech-Ökosystem angibt. Alle Nachkommen der Hauptthemen erben die gleiche Bucketeinordnung von ihrem Elternteil. Die Zuweisung der Hauptthemen zu Buckets basiert auf Eingaben zur Nützlichkeit, die Google von Unternehmen aus dem Ökosystem erhalten hat.

2. Am Ende jeder Epoche die wichtigsten Themen für jeden Benutzer auswählen:

   1. Chrome konvertiert Aufrufer-Domain-Hostnamen aus dem Browserverlauf des Benutzers in Themen.
   2. Diese Themen werden zuerst nach Bucket und dann nach Häufigkeit sortiert (wie oft sie in einem Hostnamen abgeglichen wurden). Das bedeutet, wenn zwei Themen im gleichen Bucket sind, jedoch unterschiedliche Frequenzen haben, wird das mit der höheren Frequenz höher sortiert.
   3. Chrome wählt die fünf wichtigsten Themen als die Top-Themen des Benutzers für diese Epoche aus, die an Anrufer weitergegeben werden können.

3. Die Top-Themen werden an `ad-tech1.example` zurückgegeben, nur wenn `ad-tech1.example` in der Liste der Aufrufer-Domains für jedes Thema erscheint, wie im Themenhistorieneintrag gespeichert.

   > [!NOTE]
   > Anfänglich werden keine Themen zurückgegeben, sodass der `<iframe>` wahrscheinlich eine Standardanzeige ohne Zielgruppe anzeigt. Sobald jedoch das Ende der ersten Epoche erreicht ist, wird die API anfangen, Themen zurückzugeben, und `ad-tech1.example` kann damit beginnen, relevantere Anzeigen basierend auf den für den aktuellen Benutzer beobachteten Themen anzuzeigen.

`ad-tech1.example` wählt dann eine relevante Anzeige aus, die dem Benutzer basierend auf den zurückgegebenen Themen gezeigt wird.

## Welche API-Funktionen ermöglichen die Topics API?

Die folgenden Funktionen dienen einem doppelten Zweck — sie geben die Top-Themen des Benutzers an den Anrufer zurück und veranlassen den Browser, den aktuellen Seitenbesuch als von dem Anrufer beobachtet aufzuzeichnen, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann. Dazu müssen sie in einem aufrufenden Ad-Tech `<iframe>` enthalten sein; das `<iframe>` muss dann auf den Seiten eingebettet sein, auf denen Sie Themen beobachtet haben möchten.

- Sie können eine `browsingTopics: true`-Option im Optionsobjekt eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs zur Ad-Tech-Plattform angeben.
- Sie könnten auch `browsingTopics: true` in das Optionsobjekt eines [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktoraufrufs übergeben und das resultierende [`Request`](/de/docs/Web/API/Request)-Objekt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben.
- Sie können ein `browsingtopics`-Attribut auf das `<iframe>` setzen, gleichzeitig oder bevor Sie das `src`-Attribut setzen, um die Quelle zu laden. Dies könnte erfolgen:

  - Deklarativ im HTML:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

  - Programmatisch durch Setzen der entsprechenden [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)-Eigenschaft auf `true`:

  ```js
  const iframeElem = document.querySelector("iframe");
  iframeElem.browsingTopics = true;
  ```

Wenn die mit einer der obigen Funktionen verknüpfte Anfrage gesendet wird:

1. Ein {{httpheader("Sec-Browsing-Topics")}}-Header wird zusammen mit der Anfrage gesendet, der die Top-Themen für den aktuellen Benutzer enthält.
2. Der Ad-Tech-Server wählt eine relevante Anzeige zur Anzeige im `<iframe>` basierend auf diesen Themen aus und sendet die erforderlichen Daten zur Anzeige im Antwort.
3. Ein {{httpheader("Observe-Browsing-Topics")}}-Header sollte in der Antwort auf die Anfrage gesetzt sein — dies führt dazu, dass der Browser den aktuellen Seitenbesuch als von dem aufrufenden Ad-Tech-Anbieter beobachtet aufzeichnet, sodass die zugehörigen Themen in einem Themenhistorieneintrag aufgezeichnet und anschließend in der [Themenauswahl](#auswahl_von_interessenthemen_zur_beeinflussung_der_anzeigenwahl) verwendet werden.

   > [!NOTE]
   > Es ist wichtig zu klären, dass dadurch nicht die in dem `Sec-Browsing-Topics`-Header gesendeten Top-Themen als beobachtet aufgezeichnet werden. Es werden die aus der URL der aufrufenden Seite (d.h. der Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist) abgeleiteten Themen als beobachtet aufgezeichnet.

### Die `browsingTopics()`-Methode

Alternativ kann das eingebettete `<iframe>` [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufrufen, um die aktuellen Top-Themen eines Benutzers zurückzugeben, die dann in einer nachfolgenden Abrufanforderung an die Ad-Tech-Plattform zurückgegeben werden können. Dies hängt nicht von den HTTP-Headern ab, ist aber etwas weniger performant. Es wird empfohlen, eine der oben aufgeführten HTTP-Header-Methoden zu verwenden und nur dann auf `browsingTopics()` zurückzugreifen, wenn die Header nicht modifiziert werden können.

> [!NOTE]
> Da die `browsingTopics()`-Methode nicht von den HTTP-Headern abhängt, wird der {{httpheader("Observe-Browsing-Topics")}}-Header nicht verwendet, um die Themen als beobachtet zu markieren und Themenhistorieneinträge aufzuzeichnen/zu aktualisieren; der Browser erledigt dies automatisch, wenn die Methode aufgerufen wird.

## Private Themensätze

Ein Anrufer kann nur auf Themen zugreifen, die er selbst für einen Benutzer beobachtet hat — und nicht auf Themen, die von anderen Anrufern beobachtet wurden. Zum Beispiel:

- Wenn die `ad-tech1.example`-Plattform ein `<iframe>` auf `tennis.example` eingebettet hat, das eine Topics API-Funktion enthält, würden sie Themen wie "Sport" und "Tennis" für einen Benutzer beobachten, der diese Seite besucht.
- Wenn eine andere Ad-Tech-Plattform, `ad-tech2.example`, ein Topics API `<iframe>` auf "gardening.example" eingebettet hat, würden sie das Thema "Gartenarbeit" beobachten.

Diese Ad-Tech-Plattformen erhalten nur die Themen für einen Benutzer, die sie selbst beobachtet haben. In diesem Beispiel wird `ad-tech1.example` nicht "Gartenarbeit" und `ad-tech2.example` nicht "Tennis" erhalten.

Mit anderen Worten, Anrufer wie Ad-Tech-Plattformen erhalten nur Themen für Seiten, in denen sie vertreten sind. Noch wichtiger ist, dass die aufgezeichneten Interessenthemen die einzigen Informationen sind, die über diese API zugänglich sind — anders als bei Tracking-Cookies können keine weiteren Informationen durchsickern.

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

### Übergabe der `browsingTopics`-Option in `fetch()`

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

### Komplette Beispiele

- [Topics API-Demo](https://topics-demo.glitch.me/): Demonstriert, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und dann darauf zuzugreifen ([Quellcode anzeigen](https://glitch.com/edit/#!/topics-demo)).
- [Topics API-Header-Demo](https://topics-fetch-demo.glitch.me/): Demonstriert eine `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header, der verwendet werden kann, um Themen zu beobachten und dann darauf zuzugreifen ([Quellcode anzeigen](https://glitch.com/edit/#!/topics-fetch-demo)).

## Testhinweise

### Chrome

Die Standardlänge einer Epoche zum Beobachten von Themen beträgt eine Woche, was viel zu lang ist, um Code zu testen, der die Topics API verwendet. Um dies zu Testzwecken zu verkürzen, können Sie in Chrome den Browser mit einem Feature-Flag in etwa wie folgt öffnen:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

Weitere Informationen dazu finden Sie unter [Chromium mit Kommandozeilen-Schaltern ausführen](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/).

Sie können Ihren Topics API-Code auch lokal ohne [Registrierung](/de/docs/Web/API/Topics_API#enrollment) testen, indem Sie das folgende Chrome-Entwicklerflag aktivieren:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Siehe auch

- [Topics API](https://developers.google.com/privacy-sandbox/private-advertising/topics) bei developers.google.com (2023)
