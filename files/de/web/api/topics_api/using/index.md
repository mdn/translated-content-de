---
title: Using the Topics API
slug: Web/API/Topics_API/Using
l10n:
  sourceCommit: db01d0c8b4cbf8a4467b1db65e17f6724d0ce710
---

{{DefaultAPISidebar("Topics API")}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions).

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics API in Ihren Anwendungen zu verwenden. Details dazu, welche Teilfeatures durch die Registrierung gesperrt sind, finden Sie im Abschnitt [Registrierung](/de/docs/Web/API/Topics_API#enrollment).

Diese Seite erklärt, wie die Topics API funktioniert und wie sie verwendet werden kann, um eine **interessensbasierte Werbelösung (IBA)** zu erstellen.

## Überblick auf hoher Ebene

Angenommen, wir haben eine Ad-Tech-Plattform, `ad-tech1.example`, die Anzeigen über {{htmlelement("iframe")}}s in folgende Herausgeberseiten einbettet:

- `yoga.example`
- `knitting.example`
- `football.example`

Wenn der `<iframe>`-Inhalt von `ad-tech1.example` ein [Feature, das die Topics API ermöglicht](#what_api_features_enable_the_topics_api), implementiert, wird der Browser beim Laden jeder der Seiten Folgendes tun:

1. **Interessensbasierte Themen** aus der URL der Seite ableiten. Die Themen stammen aus einer [standardisierten Taxonomie](/de/docs/Web/API/Topics_API#what_topics_are_there); für die obigen URL-Beispiele wären dies "Fitness", "Faser- und Textilkunst" und "Fußball".
2. **Die Themen als beobachtet markieren**, was das Aufzeichnen eines **Themengeschichteeintrags** für jedes in einem privaten Speicher der Themengeschichte bedeutet. Jeder Eintrag in der Themengeschichte enthält folgende Informationen:
   - Eine Dokument-ID (d.h. eine Kennung für die aktuelle Seite).
   - Eingabedaten zur Themenberechnung (d.h. den Hostnamen der Seite).
   - Die Zeit (seit dem Unix-Epochenanfang), wann die Seite erstmals beobachtet wurde.
   - Die Domain(s), bei denen das Thema beobachtet wurde (bekannt als **Topic Caller Domains**).

### Auswahl von interessanten Themen zur Beeinflussung der Anzeigenwahl

> [!NOTE]
> Unterschiedliche Browserimplementierungen können Themen auf unterschiedliche Weise auswählen. Der untenstehende Text basiert darauf, wie Chrome derzeit Themen auswählt, zu Demonstrationszwecken.

Laufend wird der Browser:

1. Verfolgen, wie oft der Benutzer jedes Thema während jeder neuen **Epoche** beobachtet. Eine Epoche ist standardmäßig eine Woche lang, die Länge kann jedoch zu Testzwecken geändert werden (siehe [Testhinweise](#testhinweise)).

   Chrome platziert jedes der 22 Wurzelthemen (Themen ohne Vorfahren) aus der Taxonomie in [einen von zwei Buckets](https://github.com/patcg-individual-drafts/topics/blob/main/topics-utility-buckets-v1.md), die eine höhere oder standardmäßige Nützlichkeit für das gesamte Ad-Tech-Ökosystem anzeigen. Alle Nachkommen der Wurzelthemen erben die gleiche Bucket-Zuweisung von ihrem Elternteil. Die Zuweisung von Wurzelthemen zu Buckets basiert auf Eingaben zur Nützlichkeit, die Google von Unternehmen im gesamten Ökosystem erhalten hat.

2. Top-Themen für jeden Benutzer am Ende jeder Epoche auswählen:
   1. Chrome wandelt die Hostnamen der gehosteten Domain aus der Browser-Chronik des Nutzers in Themen um.
   2. Diese Themen werden zuerst nach Bucket und dann nach Häufigkeit sortiert (wie oft sie in einem Hostnamen übereinstimmten). Das heißt, wenn zwei Themen sich im gleichen Bucket befinden, aber unterschiedliche Häufigkeiten haben, wird das Thema mit der höheren Häufigkeit höher sortiert.
   3. Chrome wählt die fünf wichtigsten Themen als Top-Themen des Benutzers für diese Epoche aus, die mit Anrufern geteilt werden können.

3. Die Top-Themen werden an `ad-tech1.example` zurückgegeben, nur wenn `ad-tech1.example` in der Liste der Anruferdomains für jedes Thema erscheint, wie es im Geschichtseintrag des Themas gespeichert ist.

   > [!NOTE]
   > Zunächst werden keine Themen zurückgegeben, so dass der `<iframe>` wahrscheinlich eine Standardanzeige ohne Zielgruppenansprache anzeigen wird. Sobald jedoch das Ende der ersten Epoche erreicht ist, beginnt die API, Themen zurückzugeben, und `ad-tech1.example` kann beginnen, relevantere Anzeigen basierend auf den beobachteten Themen für den aktuellen Benutzer anzuzeigen.

`ad-tech1.example` wählt dann eine relevante Anzeige aus, die dem Benutzer basierend auf den zurückgegebenen Themen präsentiert werden soll.

## Welche API-Features ermöglichen die Topics API?

Die folgenden Features haben einen doppelten Zweck — sie geben die Top-Themen des Benutzers an den Anrufer zurück und sie veranlassen den Browser, den aktuellen Seitenbesuch als vom Anrufer beobachtet aufzuzeichnen, so dass der Hostname der Seite später bei der Berechnung von Themen verwendet werden kann. Dazu müssen sie in einem aufrufenden Ad-Tech-`<iframe>` enthalten sein; das `<iframe>` muss dann auf den Seiten eingebettet werden, auf denen Sie Themen beobachten möchten.

- Sie können eine `browsingTopics: true`-Option im Optionsobjekt eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs zur Ad-Tech-Plattform angeben.
- Sie könnten auch `browsingTopics: true` in das Optionsobjekt eines [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktoraufrufs übergeben und das resultierende [`Request`](/de/docs/Web/API/Request)-Objekt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben.
- Sie können das `browsingtopics`-Attribut in das `<iframe>` einfügen, gleichzeitig oder bevor Sie das `src`-Attribut zum Laden der Quelle setzen. Dies könnte auf folgende Weise erfolgen:
  - Deklarativ im HTML:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

  - Programmatisch, indem die entsprechende [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)-Eigenschaft auf `true` gesetzt wird:

  ```js
  const iframeElem = document.querySelector("iframe");
  iframeElem.browsingTopics = true;
  ```

Wenn die mit einem der oben genannten Features verbundene Anfrage gesendet wird:

1. Ein {{httpheader("Sec-Browsing-Topics")}}-Header wird zusammen mit der Anfrage gesendet, der die Top-Themen für den aktuellen Benutzer enthält.
2. Der Ad-Tech-Server wählt eine relevante Anzeige zur Anzeige im `<iframe>` basierend auf diesen Themen aus und sendet die erforderlichen Daten zur Anzeige im Antwort.
3. Ein {{httpheader("Observe-Browsing-Topics")}}-Header sollte auf die Antwort auf die Anfrage gesetzt werden — dies hat den Effekt, dass der Browser den aktuellen Seitenbesuch als vom aufrufenden Ad-Tech-Anbieter beobachtet aufzeichnet, so dass die zugehörigen Themen in einem Themengeschichteeintrag aufgezeichnet werden und anschließend bei der [Wahl der Themen](#auswahl_von_interessanten_themen_zur_beeinflussung_der_anzeigenwahl) verwendet werden können.

   > [!NOTE]
   > Es ist wichtig zu klären, dass dies nicht bedeutet, dass die in dem `Sec-Browsing-Topics`-Header gesendeten Top-Themen als beobachtet aufgezeichnet werden. Es werden die Themen aufgezeichnet, die aus der URL der Anruferseite abgeleitet wurden (d.h. die Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist), als beobachtet.

### Die `browsingTopics()`-Methode

Alternativ kann das eingebettete `<iframe>` [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufrufen, um die aktuellen Top-Themen eines Benutzers zurückzugeben, die dann in einer nachfolgenden `fetch`-Anfrage an die Ad-Tech-Plattform übermittelt werden können. Dies hängt nicht von den HTTP-Headern ab, ist aber etwas weniger performant. Es wird empfohlen, eine der oben aufgeführten HTTP-Header-Methoden zu verwenden und `browsingTopics()` nur dann als Fallback zu nutzen, wenn die Header nicht geändert werden können.

> [!NOTE]
> Da die `browsingTopics()`-Methode nicht auf die HTTP-Header angewiesen ist, wird der {{httpheader("Observe-Browsing-Topics")}}-Header nicht verwendet, um die Themen als beobachtet zu setzen und Einträge in der Themengeschichte aufzuzeichnen/zu aktualisieren; der Browser erledigt dies automatisch, wenn die Methode aufgerufen wird.

## Private Themensätze

Ein Anrufer kann nur auf Themen zugreifen, die er selbst für einen Benutzer beobachtet hat – und nicht auf Themen, die von anderen Anrufern beobachtet wurden. Zum Beispiel:

- Wenn die `ad-tech1.example`-Plattform ein `<iframe>` auf `tennis.example` eingebettet hat, das ein Feature der Topics API enthält, würden sie Themen wie "Sport" und "Tennis" für einen Benutzer, der diese Seite besucht, beobachten.
- Wenn eine andere Ad-Tech-Plattform, `ad-tech2.example`, ein Topics API-`<iframe>` auf "gardening.example" eingebettet hat, würden sie das Thema "Gartenarbeit" beobachten.

Diese Ad-Tech-Plattformen erhalten nur Themen für einen Benutzer, die sie selbst beobachtet haben. In diesem Beispiel erhält `ad-tech1.example` nicht das Thema "Gartenarbeit" und `ad-tech2.example` nicht das Thema "Tennis".

Mit anderen Worten, Anrufer wie Ad-Tech-Plattformen erhalten nur Themen für Seiten, auf denen sie präsent sind. Noch wichtiger ist, dass die aufgezeichneten Interessenthemen die einzige Information sind, auf die über diese API zugegriffen werden kann – anders als bei Tracking-Cookies können keine weiteren Informationen durchsickern.

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

### Übergeben der `browsingTopics`-Option in `fetch()`

```js
// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  browsingTopics: true,
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

### Einschluss des `browsingtopics`-Attributs in einem `<iframe>`

```html
<iframe browsingtopics src="ad-tech1.example"> ... </iframe>
```

## Testhinweise

### Chrome

Die Standardlänge einer Epoche zur Beobachtung von Themen beträgt eine Woche, was viel zu lang ist, um Code zu testen, der die Topics API verwendet. Um dies zu Testzwecken zu verkürzen, können Sie in Chrome den Browser mit einem Funktions-Flag wie dem folgenden öffnen:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

Für weitere Informationen dazu, wie dies gemacht werden kann, siehe [Run Chromium with command-line switches](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/).

Sie können Ihren Topics API-Code auch lokal ohne [Registrierung](/de/docs/Web/API/Topics_API#enrollment) testen, indem Sie das folgende Chrome-Entwickler-Flag aktivieren:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Siehe auch

- [Topics API](https://privacysandbox.google.com/private-advertising/topics) auf privacysandbox.google.com (2023)
