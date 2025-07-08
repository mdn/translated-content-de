---
title: Using the Topics API
slug: Web/API/Topics_API/Using
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{DefaultAPISidebar("Topics API")}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browseranbietern abgelehnt. Siehe den Abschnitt [Standards Positionen](/de/docs/Web/API/Topics_API#standards_positions) unten für Details der Ablehnung.

> [!NOTE]
> Ein [Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Themen-API in Ihren Anwendungen zu verwenden. Siehe den Abschnitt [Anmeldung](/de/docs/Web/API/Topics_API#enrollment) für Details, welche Unterfunktionen durch die Anmeldung gesperrt sind.

Diese Seite erklärt, wie die Themen-API funktioniert und wie sie verwendet werden kann, um eine Lösung für **interessenbasierte Werbung (IBA)** zu schaffen.

## Überblick auf hoher Ebene

Angenommen, wir haben eine Ad-Tech-Plattform, `ad-tech1.example`, die Anzeigen über {{htmlelement("iframe")}}s auf den folgenden Publisher-Websites einbettet:

- `yoga.example`
- `knitting.example`
- `football.example`

Wenn der `<iframe>`-Inhalt von `ad-tech1.example` eine [Funktion implementiert, die die Themen-API aktiviert](#what_api_features_enable_the_topics_api), wird der Browser, wenn jede der Seiten geladen wird:

1. **Interessen-Themen** von der Website-URL ableiten. Die Themen stammen aus einer [standardisierten Taxonomie](/de/docs/Web/API/Topics_API#what_topics_are_there); für die oben genannten URL-Beispiele wären dies "Fitness", "Faser- & Textilkunst" und "Fußball".
2. **Die Themen als beobachtet markieren**, was das Aufzeichnen eines **Themen-Verlaufseintrags** für jedes in einem privaten Themen-Verlaufsspeicher beinhaltet. Jeder Themen-Verlaufseintrag enthält folgende Informationen:
   - Eine Dokument-ID (d.h. eine Kennung für die aktuelle Seite).
   - Eingabedaten zur Themenberechnung (d.h. den Hostnamen der Seite).
   - Die Zeit (seit dem Unix-Epoch) zu der die Seite erstmals beobachtet wurde.
   - Die Domain(s), bei der/dem das Thema beobachtet wurde (bekannt als **Themen-Aufrufer-Domains**).

### Auswahl von Interessenthemen zur Beeinflussung der Anzeigenwahl

> [!NOTE]
> Verschiedene Browserimplementierungen können Themen auf unterschiedliche Weise auswählen. Der untenstehende Text basiert darauf, wie Chrome derzeit Themen auswählt, zu Demonstrationszwecken.

Der Browser wird laufend:

1. Nachverfolgen, wie oft der Benutzer jedes Thema während jeder neuen **Epoche** beobachtet. Eine Epoche dauert standardmäßig eine Woche, aber die Länge kann zu Testzwecken geändert werden (siehe [Testhinweise](#testhinweise)).

   Chrome platziert jedes der 22 Wurzelsemanthemen (die ohne Vorfahren) aus der Taxonomie in [einen von zwei Eimern](https://github.com/patcg-individual-drafts/topics/blob/main/topics-utility-buckets-v1.md), die einen höheren oder normalen Nutzen für das gesamte Ad-Tech-Ökosystem anzeigen. Alle Nachkommen der Wurzelsemanthemen erben die gleiche Eimerzuweisung von ihrem Elternteil. Die Zuordnung der Wurzelsemanthemen zu den Eimern basiert auf den Eingaben zum Nutzen, die Google von Unternehmen im gesamten Ökosystem erhalten hat.

2. Wählen Sie die Top-Themen für jeden Benutzer am Ende jeder Epoche aus:
   1. Chrome konvertiert Hostnamen der Aufrufer-Domains aus dem Browserverlauf des Benutzers zu Themen.
   2. Diese Themen werden zuerst anhand des Eimers sortiert und dann nach Häufigkeit (wie oft sie in einem Hostnamen übereinstimmten). Das heißt, wenn zwei Themen im gleichen Eimer sind, aber unterschiedliche Häufigkeiten haben, wird das Thema mit der höheren Häufigkeit höher sortiert.
   3. Chrome wählt die fünf wichtigsten Themen als die Top-Themen des Benutzers für diese Epoche aus, die mit Aufrufern geteilt werden können.

3. Die Top-Themen werden an `ad-tech1.example` zurückgegeben, nur wenn `ad-tech1.example` in der Liste der Aufrufer-Domains für jedes Thema erscheint, wie sie im Verlaufseintrag des Themas gespeichert ist.

   > [!NOTE]
   > Anfangs werden keine Themen zurückgegeben, sodass das `<iframe>` wahrscheinlich eine Standardanzeige ohne Zielgruppe anzeigt. Sobald jedoch das Ende der ersten Epoche erreicht ist, wird die API beginnen, Themen zurückzugeben, und `ad-tech1.example` kann beginnen, relevantere Anzeigen basierend auf den beobachteten Themen für den aktuellen Benutzer anzuzeigen.

`ad-tech1.example` wählt dann eine relevante Anzeige aus, die dem Benutzer basierend auf den zurückgegebenen Themen gezeigt wird.

## Welche API-Funktionen ermöglichen die Themen-API?

Die folgenden Funktionen dienen einem doppelten Zweck — sie geben die Top-Themen des Benutzers an den Aufrufer zurück und veranlassen den Browser, den aktuellen Seitenbesuch als vom Aufrufer beobachtet zu markieren, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann. Um dies zu tun, müssen sie in ein aufrufendes Ad-Tech-`<iframe>` eingebettet werden; das `<iframe>` muss dann auf den Seiten eingebettet werden, auf denen Sie Themen beobachten möchten.

- Sie können eine `browsingTopics: true`-Option in das Optionsobjekt eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs an die Ad-Tech-Plattform angeben.
- Sie könnten auch `browsingTopics: true` in das Optionsobjekt eines [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors übergeben und das resultierende [`Request`](/de/docs/Web/API/Request)-Objekt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben.
- Sie können ein `browsingtopics`-Attribut auf dem `<iframe>` festlegen, gleichzeitig oder bevor das `src`-Attribut gesetzt wird, um die Quelle zu laden. Dies könnte folgendermaßen geschehen:
  - Deklarativ im HTML:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

  - Programmgesteuert, indem die gleichwertige [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)-Eigenschaft auf `true` gesetzt wird:

  ```js
  const iframeElem = document.querySelector("iframe");
  iframeElem.browsingTopics = true;
  ```

Wenn die Anfrage, die mit einer der oben genannten Funktionen verknüpft ist, gesendet wird:

1. Ein {{httpheader("Sec-Browsing-Topics")}}-Header wird zusammen mit der Anfrage gesendet, der die Top-Themen für den aktuellen Benutzer enthält.
2. Der Ad-Tech-Server wählt eine relevante Anzeige aus, die im `<iframe>` basierend auf diesen Themen angezeigt werden soll, und sendet die erforderlichen Daten zur Anzeige im Antwort.
3. Ein {{httpheader("Observe-Browsing-Topics")}}-Header sollte in der Antwort auf die Anfrage gesetzt werden — dies hat zur Folge, dass der Browser den aktuellen Seitenbesuch als vom aufrufenden Ad-Tech-Anbieter beobachtet aufzeichnet, sodass die zugehörigen Themen in einem Themen-Verlaufseintrag aufgezeichnet werden und anschließend in der [Themenauswahl](#auswahl_von_interessenthemen_zur_beeinflussung_der_anzeigenwahl) verwendet werden.

   > [!NOTE]
   > Es ist wichtig klarzustellen, dass dies nicht die im `Sec-Browsing-Topics`-Header gesendeten Top-Themen als beobachtet aufzeichnet. Es zeichnet die aus der URL der aufrufenden Seite abgeleiteten Themen (d.h. die Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist) als beobachtet auf.

### Die `browsingTopics()`-Methode

Alternativ kann das eingebettete `<iframe>` [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufrufen, um die aktuellen Top-Themen eines Benutzers zurückzugeben, die dann in einer nachfolgenden Fetch-Anfrage an die Ad-Tech-Plattform zurückgegeben werden können. Dies beruht nicht auf den HTTP-Headern, ist jedoch etwas weniger leistungsfähig. Es wird empfohlen, eine der oben aufgeführten HTTP-Header-Methoden zu verwenden und auf `browsingTopics()` nur in Situationen zurückzugreifen, in denen die Header nicht geändert werden können.

> [!NOTE]
> Da die `browsingTopics()`-Methode nicht auf die HTTP-Header zurückgreift, wird der {{httpheader("Observe-Browsing-Topics")}}-Header nicht zur Einstellung der Themen als beobachtet und Aufzeichnung/Aktualisierung der Themen-Verlaufseinträge verwendet; der Browser erledigt dies automatisch, wenn die Methode aufgerufen wird.

## Private Themensätze

Ein Aufrufer kann nur auf Themen zugreifen, die er selbst für einen Benutzer beobachtet hat — nicht auf Themen, die von anderen Aufrufern beobachtet wurden. Zum Beispiel:

- Wenn die `ad-tech1.example`-Plattform ein `<iframe>` auf `tennis.example` eingebettet hat, das eine Topics-API-Funktion enthält, würden sie Themen wie "Sport" und "Tennis" für einen Benutzer, der diese Seite besucht, beobachten.
- Wenn eine andere Ad-Tech-Plattform, `ad-tech2.example`, ein Topics-API-`<iframe>` auf "gardening.example" eingebettet hat, würden sie das Thema "Gartenarbeit" beobachten.

Diese Ad-Tech-Plattformen erhalten nur Themen für einen Benutzer, die sie selbst beobachtet haben. In diesem Beispiel erhält `ad-tech1.example` nicht "Gartenarbeit" und `ad-tech2.example` nicht "Tennis".

Mit anderen Worten, Aufrufer wie Ad-Tech-Plattformen erhalten nur Themen für Seiten, auf denen sie präsent sind. Wichtiger ist, dass die aufgezeichneten Interessenthemen die einzige Information sind, auf die über diese API zugegriffen werden kann — im Gegensatz zu Tracking-Cookies können keine weiteren Informationen durchsickern.

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

### Übergeben der Option `browsingTopics` in `fetch()`

```js
// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  browsingTopics: true,
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

### Einschließen des `browsingtopics`-Attributs in einem `<iframe>`

```html
<iframe browsingtopics src="ad-tech1.example"> ... </iframe>
```

## Testhinweise

### Chrome

Die Standard-Epochenlänge zum Beobachten von Themen beträgt eine Woche, was viel zu lang ist, um Code zu testen, der die Themen-API verwendet. Um dies zu Testzwecken zu verkürzen, können Sie in Chrome den Browser mit einem Feature-Flag in der folgenden Art und Weise öffnen:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

Siehe [Chromium mit Befehlszeilenargumenten ausführen](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/) für weitere Informationen, wie dies zu tun ist.

Sie können Ihren Topics-API-Code auch lokal ohne [Anmeldung](/de/docs/Web/API/Topics_API#enrollment) testen, indem Sie das folgende Chrome-Entwickler-Flag aktivieren:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Siehe auch

- [Themen-API](https://privacysandbox.google.com/private-advertising/topics) auf privacysandbox.google.com (2023)
