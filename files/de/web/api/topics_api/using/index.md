---
title: Using the Topics API
slug: Web/API/Topics_API/Using
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{DefaultAPISidebar("Topics API")}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browserherstellern abgelehnt. Siehe den Abschnitt [Standardpositionen](/de/docs/Web/API/Topics_API#standards_positions) unten für Details zur Ablehnung.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics-API in Ihren Anwendungen zu verwenden. Siehe den Abschnitt [Registrierung](/de/docs/Web/API/Topics_API#enrollment) für Details, welche Unterfunktionen durch die Registrierung beschränkt sind.

Diese Seite erklärt, wie die Topics-API funktioniert und wie sie verwendet werden kann, um eine Lösung für **interessenbasierte Werbung (IBA)** zu erstellen.

## Überblick auf hoher Ebene

Angenommen, wir haben eine Werbetechnologieplattform, `ad-tech1.example`, die Anzeigen über {{htmlelement("iframe")}}s auf den folgenden Publisher-Websites einbettet:

- `yoga.example`
- `knitting.example`
- `football.example`

Wenn der `<iframe>`-Inhalt von `ad-tech1.example` ein [Feature, das die Topics-API aktiviert](#what_api_features_enable_the_topics_api), implementiert, wird der Browser beim Laden jeder dieser Seiten:

1. **Interessenthemen** aus der Site-URL ableiten. Die Themen werden aus einer [Standard-Taxonomie](/de/docs/Web/API/Topics_API#what_topics_are_there) übernommen; für die obigen URL-Beispiele wären das "Fitness", "Faser- & Textilkunst" und "Fußball".

2. **Die Themen als beobachtet markieren**, was das Aufzeichnen eines **Themenverlaufseintrags** für jedes in einem privaten Themenverlaufs-Speicher bedeutet. Jeder Themenverlaufseintrag enthält folgende Informationen:
   - Eine Dokument-ID (d.h. ein Bezeichner für die aktuelle Seite).
   - Eingabedaten für die Themenberechnung (d.h. den Hostnamen der Seite).
   - Die Zeit (seit dem Unix-Epoch), als die Seite erstmals beobachtet wurde.
   - Die Domain(s), auf denen das Thema beobachtet wurde (bekannt als **Themenanruferdomains**).

### Auswahl von Interessenthemen, um die Anzeigenauswahl zu beeinflussen

> [!NOTE]
> Unterschiedliche Browserimplementierungen können Themen auf unterschiedliche Weise auswählen. Der untenstehende Text basiert darauf, wie Chrome derzeit Themen auswählt, zu Demonstrationszwecken.

Der Browser wird fortlaufend:

1. Verfolgen, wie oft der Benutzer jedes Thema während jeder neuen **Epoche** beobachtet. Eine Epoche ist standardmäßig eine Woche lang, kann aber zu Testzwecken geändert werden (siehe [Testhinweise](#testhinweise)).

   Chrome verteilt jedes der 22 Wurzeltopics (ohne Vorfahren) aus der Taxonomie auf [einen von zwei Eimern](https://github.com/patcg-individual-drafts/topics/blob/main/topics-utility-buckets-v1.md), die höhere oder Standardnutzen für das gesamte Werbetechnologie-Ökosystem anzeigen. Alle Nachkommen der Wurzeltopics erben die gleiche Eimerzuordnung von ihrem Elternteil. Die Zuordnung der Wurzeltopics zu Eimern basiert auf Eingaben über den Nutzen, die Google von Unternehmen im gesamten Ökosystem erhalten hat.

2. Zum Ende jeder Epoche die Top-Themen für jeden Benutzer auswählen:

   1. Chrome wandelt die Hostnamen der Anruferdomain aus dem Browserverlauf des Benutzers in Themen um.
   2. Diese Themen werden zuerst nach Eimer und dann nach Frequenz sortiert (wie oft sie in einem Hostnamen übereinstimmten). Das heißt, wenn zwei Themen im selben Eimer sind, aber unterschiedliche Frequenzen haben, wird das Thema mit der höheren Frequenz höher sortiert.
   3. Chrome wählt die fünf Top-Themen als die Top-Themen des Benutzers für diese Epoche aus, die mit Anrufern geteilt werden können.

3. Die Top-Themen werden nur dann an `ad-tech1.example` zurückgegeben, wenn `ad-tech1.example` in der Liste der Anruferdomains für jedes Thema erscheint, wie in den Themenverlaufseinträgen gespeichert.

   > [!NOTE]
   > Anfangs werden keine Themen zurückgegeben, sodass das `<iframe>` wahrscheinlich eine Standardanzeige ohne Zielgruppe anzeigt. Sobald jedoch das Ende der ersten Epoche erreicht ist, wird die API beginnen, Themen zurückzugeben, und `ad-tech1.example` kann beginnen, relevantere Anzeigen basierend auf den beobachteten Themen für den aktuellen Benutzer anzuzeigen.

`ad-tech1.example` wählt dann eine relevante Anzeige aus, die dem Benutzer basierend auf den zurückgegebenen Themen serviert wird.

## Welche API-Funktionen aktivieren die Topics-API?

Die folgenden Funktionen erfüllen einen doppelten Zweck — sie geben die Top-Themen des Benutzers an den Anrufer zurück und veranlassen den Browser, den aktuellen Seitenbesuch als vom Anrufer beobachtet zu protokollieren, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann. Dazu müssen sie in einem aufrufenden Werbetechnologie-`<iframe>` enthalten sein; das `<iframe>` muss dann auf den Seiten eingebettet werden, auf denen Sie Themen beobachten möchten.

- Sie können eine `browsingTopics: true`-Option im Optionsobjekt eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs an die Werbetechnologie-Plattform angeben.
- Sie könnten auch `browsingTopics: true` in das Optionsobjekt eines [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktoraufrufs übergeben und das resultierende [`Request`](/de/docs/Web/API/Request)-Objekt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben.
- Sie können ein `browsingtopics`-Attribut auf dem `<iframe>` zur gleichen Zeit oder bevor Sie das `src`-Attribut setzen, um die Quelle zu laden. Dies könnte durchgeführt werden:

  - Deklarativ im HTML:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

  - Programmgesteuert, indem Sie die entsprechende [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics)-Eigenschaft auf `true` setzen:

  ```js
  const iframeElem = document.querySelector("iframe");
  iframeElem.browsingTopics = true;
  ```

Wenn die Anfrage, die mit einer der obigen Funktionen verbunden ist, gesendet wird:

1. Ein {{httpheader("Sec-Browsing-Topics")}}-Header wird zusammen mit der Anfrage gesendet, der die Top-Thema(en) für den aktuellen Benutzer enthält.
2. Der Werbetechnologie-Server wählt eine relevante Anzeige zur Anzeige im `<iframe>` basierend auf diesen Themen und sendet die erforderlichen Daten, um sie in der Antwort anzuzeigen.
3. Ein {{httpheader("Observe-Browsing-Topics")}}-Header sollte in der Antwort auf die Anfrage gesetzt werden — dies bewirkt, dass der Browser den aktuellen Seitenbesuch als von dem aufrufenden Werbetechnologie-Anbieter beobachtet aufzeichnet, sodass das/die zugeordnete(n) Thema(en) in einem Themenverlaufseintrag gespeichert und anschließend bei der [Themenauswahl](#auswahl_von_interessenthemen,_um_die_anzeigenauswahl_zu_beeinflussen) verwendet werden.

   > [!NOTE]
   > Es ist wichtig, klarzustellen, dass dies nicht die im `Sec-Browsing-Topics`-Header gesendeten Top-Themen als beobachtet aufzeichnet. Es zeichnet die von der aufrufenden Site-URL abgeleiteten Themen (d.h. die Site, auf der das Werbetechnologie-`<iframe>` eingebettet ist) als beobachtet auf.

### Die `browsingTopics()`-Methode

Alternativ kann das eingebettete `<iframe>` [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufrufen, um die aktuellen Top-Themen eines Benutzers zurückzugeben, die dann in einer nachfolgenden Fetch-Anfrage an die Werbetechnologie-Plattform zurückgegeben werden können. Dies hängt nicht von den HTTP-Headern ab, ist jedoch etwas weniger performant. Es wird empfohlen, eine der oben aufgeführten HTTP-Header-Methoden zu verwenden und `browsingTopics()` nur in Situationen zu verwenden, in denen die Header nicht geändert werden können.

> [!NOTE]
> Da die `browsingTopics()`-Methode nicht von den HTTP-Headern abhängt, wird der {{httpheader("Observe-Browsing-Topics")}}-Header nicht verwendet, um die Themen als beobachtet zu setzen oder Themenverlaufs-Einträge zu aktualisieren; der Browser erledigt dies automatisch, wenn die Methode aufgerufen wird.

## Private Themensätze

Ein Anrufer kann nur auf Themen zugreifen, die sie selbst für einen Benutzer beobachtet haben — und nicht auf Themen, die von anderen Anrufern beobachtet wurden. Zum Beispiel:

- Wenn die `ad-tech1.example`-Plattform ein `<iframe>` auf `tennis.example` eingebettet hat, das eine Topics-API-Funktion beinhaltet, würden sie Themen wie "Sport" und "Tennis" für einen Benutzer beobachten, der diese Seite besucht.
- Wenn eine andere Werbetechnologie-Plattform, `ad-tech2.example`, ein Topics-API-`<iframe>` auf `gardening.example` eingebettet hat, würden sie das Thema "Gartenarbeit" beobachten.

Diese Werbetechnologie-Plattformen erhalten nur Themen für einen Benutzer, die sie selbst beobachtet haben. In diesem Beispiel wird `ad-tech1.example` nicht "Gartenarbeit" erhalten und `ad-tech2.example` nicht "Tennis".

Mit anderen Worten, Anrufer wie Werbetechnologie-Plattformen erhalten nur Themen für Seiten, auf denen sie präsent sind. Wichtiger ist, dass die aufgezeichneten Interessenthemen die einzigen Informationen sind, auf die über diese API zugegriffen werden kann — im Gegensatz zu Tracking-Cookies kann keine andere Information durchsickern.

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

### Weitergabe der `browsingTopics`-Option in `fetch()`

```js
// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  browsingTopics: true,
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

### Einbeziehung des `browsingtopics`-Attributs in ein `<iframe>`

```html
<iframe browsingtopics src="ad-tech1.example"> ... </iframe>
```

### Vollständige Beispiele

- [Topics API-Demo](https://topics-demo.glitch.me/): Demonstriert, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und dann darauf zuzugreifen ([Quellcode ansehen](https://glitch.com/edit/#!/topics-demo)).
- [Topics API-Header-Demo](https://topics-fetch-demo.glitch.me/): Demonstriert, wie eine `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header verwendet werden kann, um Themen zu beobachten und dann darauf zuzugreifen ([Quellcode ansehen](https://glitch.com/edit/#!/topics-fetch-demo)).

## Testhinweise

### Chrome

Die Standardlänge einer Epoche zum Beobachten von Themen beträgt eine Woche, was viel zu lang ist, um Code zu testen, der die Topics-API verwendet. Um dies zu Testzwecken zu verkürzen, können Sie in Chrome den Browser mit einem Feature-Flag wie dem folgenden öffnen:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

Weitere Informationen dazu finden Sie unter [Chromium mit Befehlszeilen-Schaltern ausführen](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/).

Sie können Ihren Topics-API-Code auch lokal ohne [Registrierung](/de/docs/Web/API/Topics_API#enrollment) testen, indem Sie das folgende Chrome-Entwickler-Flag aktivieren:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Siehe auch

- [Topics API](https://privacysandbox.google.com/private-advertising/topics) auf privacysandbox.google.com (2023)
