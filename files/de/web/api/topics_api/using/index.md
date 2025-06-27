---
title: Using the Topics API
slug: Web/API/Topics_API/Using
l10n:
  sourceCommit: 1717097c927b0399fd143a6ab22631245e9da1cd
---

{{DefaultAPISidebar("Topics API")}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browserherstellern abgelehnt. Siehe den Abschnitt [Standards-Positionen](/de/docs/Web/API/Topics_API#standards_positions) unten für Details zur Ablehnung.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics API in Ihren Anwendungen zu verwenden. Weitere Informationen zu den gesperrten Teilfunktionen finden Sie im Abschnitt [Registrierung](/de/docs/Web/API/Topics_API#enrollment).

Diese Seite erklärt, wie die Topics API funktioniert und wie sie zur Erstellung einer **interessenbasierten Werbelösung (IBA)** genutzt werden kann.

## Überblick auf hoher Ebene

Angenommen, wir haben eine Ad-Tech-Plattform, `ad-tech1.example`, die Anzeigen über {{htmlelement("iframe")}}s auf den folgenden Publisher-Websites einbindet:

- `yoga.example`
- `knitting.example`
- `football.example`

Wenn der `<iframe>`-Inhalt von `ad-tech1.example` ein [Feature implementiert, das die Topics API ermöglicht](#what_api_features_enable_the_topics_api), wird der Browser beim Laden jeder dieser Seiten:

1. **Interessanthemen** aus der URL der Seite ableiten. Die Themen werden aus einer [standardisierten Taxonomie](/de/docs/Web/API/Topics_API#what_topics_are_there) entnommen; für die obigen URL-Beispiele wären dies "Fitness", "Faser- & Textilkunst" und "Fußball".
2. **Die Themen als beobachtet markieren**, was das Aufzeichnen eines **Themeshistorieneintrags** für jedes in einem privaten Topics-Speicher beinhaltet. Jeder Themeshistorieneintrag enthält die folgenden Informationen:
   - Eine Dokument-ID (d.h. ein Identifikator für die aktuelle Seite).
   - Eingabedaten zur Themenberechnung (d.h. den Hostnamen der Seite).
   - Die Zeit (seit der Unix-Epoche), zu der die Seite erstmals beobachtet wurde.
   - Die Domain(s), in denen das Thema beobachtet wurde (bekannt als **Topic-Caller-Domains**).

### Auswahl von Interessanthemen zur Beeinflussung der Anzeigenwahl

> [!NOTE]
> Verschiedene Browserimplementierungen können Themen auf unterschiedliche Weise auswählen. Der folgende Text basiert darauf, wie Chrome derzeit Themen auswählt, zu Demonstrationszwecken.

Der Browser wird kontinuierlich:

1. Verfolgen, wie oft der Benutzer jedes Thema während jeder neuen **Epoche** beobachtet. Eine Epoche ist standardmäßig eine Woche lang, aber die Länge kann zu Testzwecken geändert werden (siehe [Testhinweise](#testhinweise)).

   Chrome ordnet jedem der 22 Wurzeltopics (die ohne Vorfahren) aus der Taxonomie [einem von zwei Buckets](https://github.com/patcg-individual-drafts/topics/blob/main/topics-utility-buckets-v1.md) zu, die höhere oder standardmäßige Nützlichkeit für das gesamte Ad-Tech-Ökosystem anzeigen. Alle Nachkommen der Wurzeltopics erben die gleiche Bucketeinteilung von ihren Eltern. Die Zuordnung der Wurzeltopics zu Buckets basiert auf Input über die Nützlichkeit, die Google von Unternehmen im gesamten Ökosystem erhalten hat.

2. Wählen Sie die wichtigsten Themen für jeden Benutzer am Ende jeder Epoche aus:
   1. Chrome wandelt die Hostnamen der Caller-Domains aus dem Browserverlauf des Benutzers in Themen um.
   2. Diese Themen werden zuerst nach Bucket und dann nach Häufigkeit sortiert (wie oft sie in einem Hostnamen übereinstimmten). Das heißt, wenn zwei Themen im gleichen Bucket sind, aber unterschiedliche Häufigkeiten haben, wird das Thema mit der höheren Häufigkeit höher sortiert.
   3. Chrome wählt die fünf wichtigsten Themen als die Top-Themen des Benutzers für diese Epoche aus, die mit Callern geteilt werden können.

3. Die Top-Themen werden an `ad-tech1.example` zurückgegeben, nur wenn `ad-tech1.example` in der Liste der Caller-Domains für jedes Thema erscheint, wie im History-Eintrag des Themas gespeichert.

   > [!NOTE]
   > Anfänglich werden keine Themen zurückgegeben, sodass der `<iframe>` wahrscheinlich eine nicht zielgerichtete Standardanzeige anzeigen wird. Sobald jedoch das Ende der ersten Epoche erreicht ist, wird die API beginnen, Themen zurückzugeben und `ad-tech1.example` kann anfangen, relevantere Anzeigen basierend auf den beobachteten Themen für den aktuellen Benutzer anzuzeigen.

`ad-tech1.example` wählt dann eine relevante Anzeige aus, die dem Benutzer basierend auf den zurückgegebenen Themen präsentiert wird.

## Welche API-Features ermöglichen die Topics API?

Die folgenden Features dienen einem doppelten Zweck — sie geben die Top-Themen des Benutzers an den Caller zurück und veranlassen den Browser, den aktuellen Seitenbesuch als vom Caller beobachtet aufzuzeichnen, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann. Dazu müssen sie in einem aufrufenden Ad-Tech-`<iframe>` enthalten sein; das `<iframe>` muss dann auf den Seiten eingebettet sein, auf denen Sie Themen beobachten möchten.

- Sie können eine `browsingTopics: true`-Option im Optionsobjekt eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs zur Ad-Tech-Plattform angeben.
- Sie könnten auch `browsingTopics: true` in das Optionsobjekt eines [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktoraufrufs übergeben und das resultierende [`Request`](/de/docs/Web/API/Request)-Objekt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben.
- Sie können ein `browsingtopics`-Attribut auf dem `<iframe>` setzen, gleichzeitig oder bevor Sie das `src`-Attribut setzen, um die Quelle zu laden. Dies könnte geschehen:
  - Deklarativ im HTML:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

  - Programmatisch, indem die äquivalente [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)-Eigenschaft auf `true` gesetzt wird:

  ```js
  const iframeElem = document.querySelector("iframe");
  iframeElem.browsingTopics = true;
  ```

Wenn die mit einem der oben genannten Features verbundene Anfrage gesendet wird:

1. Ein {{httpheader("Sec-Browsing-Topics")}}-Header wird zusammen mit der Anfrage gesendet, der das/die Top-Thema(en) für den aktuellen Benutzer enthält.
2. Der Ad-Tech-Server wählt eine relevante Anzeige zur Anzeige im `<iframe>` basierend auf diesen Themen aus und sendet die erforderlichen Daten zur Anzeige in der Antwort.
3. Ein {{httpheader("Observe-Browsing-Topics")}}-Header sollte in der Antwort auf die Anfrage gesetzt werden — dies bewirkt, dass der Browser den aktuellen Seitenbesuch als vom aufrufenden Ad-Tech-Anbieter beobachtet aufzeichnet, sodass das/die zugehörige(n) Thema(en) in einem Themeshistorieneintrag aufgezeichnet und anschließend in der [Themenauswahl](#auswahl_von_interessanthemen_zur_beeinflussung_der_anzeigenwahl) verwendet werden.

   > [!NOTE]
   > Es ist wichtig klarzustellen, dass dies nicht die im `Sec-Browsing-Topics`-Header gesendeten Top-Themen als beobachtet aufzeichnet. Es zeichnet die aus der URL der aufrufenden Seite abgeleiteten Themen (d.h. die Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist) als beobachtet auf.

### Die `browsingTopics()`-Methode

Alternativ kann das eingebettete `<iframe>` [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufrufen, um das/die aktuelle(n) Top-Thema(en) eines Benutzers zurückzugeben, das/die dann in einer nachfolgenden Fetch-Anfrage an die Ad-Tech-Plattform zurückgegeben werden kann. Dies hängt nicht von den HTTP-Headern ab, ist jedoch etwas weniger performant. Es wird empfohlen, eine der oben genannten HTTP-Header-Methoden zu verwenden und nur in Situationen, in denen die Header nicht geändert werden können, auf `browsingTopics()` zurückzugreifen.

> [!NOTE]
> Da die `browsingTopics()`-Methode nicht von den HTTP-Headern abhängt, wird der {{httpheader("Observe-Browsing-Topics")}}-Header nicht verwendet, um die Themen als beobachtet zu setzen und Themeshistorieneinträge zu erstellen/aktualisieren; der Browser erledigt dies automatisch, wenn die Methode aufgerufen wird.

## Private Topic Sets

Ein Caller kann nur auf Themen zugreifen, die sie selbst für einen Benutzer beobachtet haben — und nicht auf Themen, die von anderen Callern beobachtet wurden. Zum Beispiel:

- Wenn die `ad-tech1.example`-Plattform ein `<iframe>` auf `tennis.example` eingebettet hat, das ein Topics API-Feature enthält, würden sie Themen wie "Sport" und "Tennis" für einen Benutzer beobachten, der diese Seite besucht.
- Wenn eine andere Ad-Tech-Plattform, `ad-tech2.example`, ein Topics API-`<iframe>` auf "gardening.example" eingebettet hat, würden sie das Thema "Gartenarbeit" beobachten.

Diese Ad-Tech-Plattformen erhalten nur Themen für einen Benutzer, die sie selbst beobachtet haben. In diesem Beispiel erhält `ad-tech1.example` nicht das Thema "Garten" und `ad-tech2.example` nicht das Thema "Tennis".

Mit anderen Worten, Caller wie Ad-Tech-Plattformen erhalten nur Themen für Seiten, auf denen sie eine Präsenz haben. Wichtiger ist, dass die aufgezeichneten Interessenthemen die einzige Information sind, die über diese API zugänglich ist — im Gegensatz zu Tracking-Cookies können keine weiteren Informationen durchsickern.

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

### Übergabe der `browsingTopics`-Option an `fetch()`

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

- [Topics API Demo](https://topics-demo.glitch.me/): Demonstriert, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-demo)).
- [Topics API Header Demo](https://topics-fetch-demo.glitch.me/): Demonstriert, wie eine `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header verwendet werden kann, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-fetch-demo)).

## Testhinweise

### Chrome

Die standardmäßige Epochenlänge zum Beobachten von Themen beträgt eine Woche, was viel zu lange ist, um Code zu testen, der die Topics API verwendet. Um dies zu Testzwecken abzukürzen, können Sie Chrome mit einem Feature-Flag in etwa folgender Weise öffnen:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

Weitere Informationen hierzu finden Sie unter [Ausführen von Chromium mit Befehlszeilen-Schaltern](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/).

Sie können Ihren Topics API-Code auch lokal ohne [Registrierung](/de/docs/Web/API/Topics_API#enrollment) testen, indem Sie das folgende Chrome-Entwickler-Flag aktivieren:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Siehe auch

- [Topics API](https://privacysandbox.google.com/private-advertising/topics) auf privacysandbox.google.com (2023)
