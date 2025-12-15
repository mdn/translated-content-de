---
title: Using the Topics API
slug: Web/API/Topics_API/Using
l10n:
  sourceCommit: d424e20ffce8770d7e66ee169203a17980bd88cf
---

{{DefaultAPISidebar("Topics API")}}{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browseranbietern abgelehnt. Siehe den Abschnitt [Standards-Positionen](/de/docs/Web/API/Topics_API#standards_positions) für Einzelheiten zur Ablehnung.

> [!NOTE]
> Ein [Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics API in Ihren Anwendungen zu verwenden. Siehe den Abschnitt [Anmeldung](/de/docs/Web/API/Topics_API#enrollment) für Details, welche Unterfunktionen durch die Anmeldung eingeschränkt sind.

Diese Seite erklärt, wie die Topics API funktioniert und wie sie verwendet werden kann, um eine Lösung für **interessenbasierte Werbung (IBA)** zu erstellen.

## Überblick auf hoher Ebene

Angenommen, wir haben eine Werbetechnikplattform, `ad-tech1.example`, die Anzeigen über {{htmlelement("iframe")}}s auf folgenden Publisher-Websites einbettet:

- `yoga.example`
- `knitting.example`
- `football.example`

Wenn der `<iframe>`-Inhalt von `ad-tech1.example` eine [Funktion implementiert, die die Topics API aktiviert](#what_api_features_enable_the_topics_api), wird der Browser bei jedem Laden der Website:

1. **Interessensbereiche vom Site-URL ableiten**. Die Themen werden aus einer [Standard-Taxonomie](/de/docs/Web/API/Topics_API#what_topics_are_there) entnommen; für die obigen URL-Beispiele wären dies "Fitness", "Faser- & Textilkunst" und "Fußball".
2. **Die Themen als beobachtet markieren**, was das Aufzeichnen eines **Themenhistorieneintrags** für jedes Thema in einem privaten Themenhistorien-Speicher umfasst. Jeder Themenhistorieneintrag enthält die folgenden Informationen:
   - Eine Dokument-ID (d.h. ein Identifikator für die aktuelle Seite).
   - Daten zur Themenberechnung (d.h. der Seiten-Hostname).
   - Die Zeit (seit dem Unix-Epoch), als die Seite erstmals beobachtet wurde.
   - Die Domäne(n), in denen das Thema beobachtet wurde (bekannt als **Themenaufrufdomänen**).

### Auswahl von Interessenthemen zur Beeinflussung der Anzeigenwahl

> [!NOTE]
> Unterschiedliche Browserimplementierungen können Themen auf unterschiedliche Weise auswählen. Der folgende Text basiert darauf, wie Chrome derzeit Themen auswählt, zu Demonstrationszwecken.

Der Browser wird kontinuierlich:

1. Verfolgen, wie oft der Benutzer jedes Thema während jeder neuen **Epoche** beobachtet. Eine Epoche dauert standardmäßig eine Woche, aber die Länge kann für Testzwecke geändert werden (siehe [Testhinweise](#testhinweise)).

   Chrome platziert jedes der 22 Hauptthemen (die ohne Vorfahren) aus der Taxonomie in [einen von zwei Buckets](https://github.com/patcg-individual-drafts/topics/blob/main/topics-utility-buckets-v1.md), die für das gesamte Werbetechnik-Ökosystem eine höhere oder standardmäßige Nützlichkeit anzeigen. Alle Nachkommen der Hauptthemen erben dieselbe Zuweisung vom Elternteil. Die Zuweisung von Hauptthemen zu Buckets basiert auf Eingaben über die Nützlichkeit, die Google von Unternehmen im gesamten Ökosystem erhalten hat.

2. Am Ende jeder Epoche die wichtigsten Themen für jeden Benutzer auswählen:
   1. Chrome konvertiert Hostnamen der Aufrufdomänen aus dem Browserverlauf des Benutzers in Themen.
   2. Diese Themen werden zuerst nach Bucket und dann nach Häufigkeit sortiert (wie oft sie in einem Hostnamen übereinstimmten). Wenn zwei Themen im selben Bucket sind, aber unterschiedliche Frequenzen haben, wird das Thema mit höherer Frequenz höher eingeordnet.
   3. Chrome wählt die obersten fünf Themen als die Top-Themen des Benutzers für diese Epoche, die berechtigt sind, mit Aufrufern geteilt zu werden.

3. Die Top-Themen werden an `ad-tech1.example` zurückgegeben, nur wenn `ad-tech1.example` in der Liste der Aufrufdomänen für jedes Thema erscheint, wie im Themenhistorieneintrag gespeichert.

   > [!NOTE]
   > Anfangs werden keine Themen zurückgegeben, sodass der `<iframe>` wahrscheinlich eine Standardanzeige ohne Zielanzeige zeigt. Sobald jedoch das Ende der ersten Epoche erreicht ist, beginnt die API, Themen zurückzugeben, und `ad-tech1.example` kann beginnen, relevantere Anzeigen basierend auf den beobachteten Themen für den aktuellen Benutzer anzuzeigen.

`ad-tech1.example` wählt dann eine relevante Anzeige, die dem Benutzer basierend auf den zurückgegebenen Themen präsentiert wird.

## Welche API-Funktionen ermöglichen die Topics API?

Die folgenden Funktionen dienen einem doppelten Zweck: Sie geben die Top-Themen des Benutzers an den Aufrufer zurück und lösen aus, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, sodass der Seiten-Hostname später in der Themenberechnung verwendet werden kann. Dazu müssen sie in einem aufrufenden Werbetechnik-`<iframe>` enthalten sein; der `<iframe>` muss dann auf den Seiten eingebettet werden, auf denen Themen beobachtet werden sollen.

- Sie können eine `browsingTopics: true`-Option in das Optionsobjekt eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs an die Werbetechnikplattform spezifizieren.
- Sie könnten auch `browsingTopics: true` in das Optionsobjekt eines [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktorausdrucks einfügen und das resultierende [`Request`](/de/docs/Web/API/Request)-Objekt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben.
- Sie können ein `browsingtopics`-Attribut auf dem `<iframe>` setzen, entweder gleichzeitig oder bevor das `src` Attribut zum Laden der Quelle gesetzt wird. Dies könnte erfolgen:
  - Deklarativ im HTML:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

  - Programmgesteuert durch Setzen der äquivalenten [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)-Eigenschaft auf `true`:

  ```js
  const iframeElem = document.querySelector("iframe");
  iframeElem.browsingTopics = true;
  ```

Wenn die Anfrage, die mit einer der obigen Funktionen verknüpft ist, gesendet wird:

1. Ein {{httpheader("Sec-Browsing-Topics")}}-Header wird zusammen mit der Anfrage gesendet, der die Top-Themen des aktuellen Benutzers enthält.
2. Der Werbetechnik-Server wählt eine relevante Anzeige zur Anzeige im `<iframe>`, basierend auf diesen Themen, aus und sendet die erforderlichen Daten zur Anzeige in der Antwort.
3. Ein {{httpheader("Observe-Browsing-Topics")}}-Header sollte auf die Antwort auf die Anfrage gesetzt werden — dies führt dazu, dass der Browser den aktuellen Seitenbesuch als vom aufrufenden Werbetechnik-Anbieter beobachtet aufzeichnet, sodass die zugehörigen Themen in einem Themenhistorieneintrag aufgezeichnet und anschließend in der [Themenauswahl](#auswahl_von_interessenthemen_zur_beeinflussung_der_anzeigenwahl) verwendet werden.

   > [!NOTE]
   > Es ist wichtig zu klären, dass dadurch nicht die im `Sec-Browsing-Topics`-Header gesendeten Top-Themen als beobachtet aufgezeichnet werden. Es werden die Themen aufgezeichnet, die aus der URL der aufrufenden Seite abgeleitet wurden (d.h. die Seite, auf der das Werbetechnik-`<iframe>` eingebettet ist).

### Die `browsingTopics()`-Methode

Alternativ kann der eingebettete `<iframe>` [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufrufen, um das aktuelle Top-Thema/Top-Themen eines Benutzers zurückzugeben, die dann in einem nachfolgenden Fetch-Anfrage an die Werbetechnikplattform zurückgegeben werden können. Dies beruht nicht auf den HTTP-Headern, ist jedoch etwas weniger performant. Es wird empfohlen, eine der oben aufgeführten HTTP-Header-Methoden zu verwenden und nur dann auf `browsingTopics()` zurückzugreifen, wenn die Header nicht geändert werden können.

> [!NOTE]
> Da die `browsingTopics()`-Methode nicht auf den HTTP-Headern basiert, wird der {{httpheader("Observe-Browsing-Topics")}}-Header nicht verwendet, um die Themen als beobachtet zu setzen und Themenhistorieneinträge aufzuzeichnen/zu aktualisieren; der Browser erledigt dies automatisch, wenn die Methode aufgerufen wird.

## Private Themensätze

Ein Aufrufer kann nur auf Themen zugreifen, die er selbst für einen Benutzer beobachtet hat — und nicht auf Themen, die von anderen Aufrufern beobachtet wurden. Zum Beispiel:

- Wenn die `ad-tech1.example`-Plattform einen `<iframe>` hat, der auf `tennis.example` eingebettet ist und eine Topics API-Funktion enthält, würden sie Themen wie "Sport" und "Tennis" für einen Benutzer beobachten, der diese Seite besucht.
- Wenn eine andere Werbetechnik-Plattform, `ad-tech2.example`, einen Topics API-`<iframe>` auf "gardening.example" eingebettet hat, würden sie das Thema "Gartenarbeit" beobachten.

Diese Werbetechnik-Plattformen werden nur Themen für einen Benutzer erhalten, die sie selbst beobachtet haben. In diesem Beispiel erhält `ad-tech1.example` nicht "Gartenarbeit" und `ad-tech2.example` nicht "Tennis".

Mit anderen Worten, Aufrufer wie Werbetechnik-Plattformen erhalten nur Themen für Seiten, auf denen sie präsent sind. Wichtiger ist, dass die aufgezeichneten Interessenthemen die einzige Information sind, die über diese API erreichbar ist – im Gegensatz zu Tracking-Cookies kann keine andere Information durchsickern.

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

## Testhinweise

### Chrome

Die Standard-Epochenlänge für die Beobachtung von Themen beträgt eine Woche, was viel zu lang ist, um Code zu testen, der die Topics API verwendet. Um dies zu Testzwecken zu verkürzen, können Sie Chrome mit einem Funktions-Flag in etwa folgender Weise öffnen:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

Weitere Informationen hierzu finden Sie unter [Chromium mit Befehlszeilenoptionen ausführen](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/).

Sie können Ihren Topics API-Code auch lokal ohne [Anmeldung](/de/docs/Web/API/Topics_API#enrollment) testen, indem Sie das folgende Chrome-Entwicklungsflag aktivieren:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Siehe auch

- [Topics API](https://privacysandbox.google.com/private-advertising/topics) auf privacysandbox.google.com (2023)
