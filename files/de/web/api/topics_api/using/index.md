---
title: Using the Topics API
slug: Web/API/Topics_API/Using
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{DefaultAPISidebar("Topics API")}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Einzelheiten zur Ablehnung finden Sie im Abschnitt [Standards-Positionen](/de/docs/Web/API/Topics_API#standards_positions) unten.

> [!NOTE]
> Ein [Anmeldeverfahren](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics API in Ihren Anwendungen zu nutzen. Siehe den Abschnitt [Anmeldung](/de/docs/Web/API/Topics_API#enrollment) für Details, welche Unterfunktionen durch die Anmeldung gesperrt sind.

Diese Seite erklärt, wie die Topics API funktioniert und wie sie zur Erstellung einer **interessenbasierten Werbungslösung (IBA)** verwendet werden kann.

## Übersicht auf hoher Ebene

Angenommen, wir haben eine Ad-Tech-Plattform, `ad-tech1.example`, die Anzeigen über {{htmlelement("iframe")}}s in die folgenden Publisher-Seiten einbettet:

- `yoga.example`
- `knitting.example`
- `football.example`

Wenn der `<iframe>` Inhalt von `ad-tech1.example` ein [Feature implementiert, das die Topics API aktiviert](#what_api_features_enable_the_topics_api), wird der Browser beim Laden jeder dieser Seiten:

1. **Interessante Themen** aus der Seiten-URL ableiten. Die Themen werden aus einer [standardisierten Taxonomie](/de/docs/Web/API/Topics_API#what_topics_are_there) entnommen; für die obigen URL-Beispiele wären dies "Fitness", "Faserkunst & Textilkunst" und "Fußball".
2. **Die Themen als beobachtet markieren**, was das Aufzeichnen eines **Themenverlaufseintrags** für jedes Thema in einem privaten Themenverlaufspeicher beinhaltet. Jeder Themenverlaufseintrag enthält die folgenden Informationen:
   - Eine Dokument-ID (d.h. ein Bezeichner für die aktuelle Seite).
   - Eingabedaten zur Themenberechnung (d.h. den Hostnamen der Seite).
   - Die Zeit (seit dem Unix-Epochenbeginn), als die Seite erstmals beobachtet wurde.
   - Die Domänen, auf denen das Thema beobachtet wurde (bekannt als **Topic Caller Domains**).

### Auswahl interessanter Themen zur Einflussnahme auf die Anzeigenauswahl

> [!NOTE]
> Unterschiedliche Browserimplementierungen können Themen auf unterschiedliche Weise auswählen. Der untenstehende Text basiert darauf, wie Chrome derzeit Themen auswählt, zu Demonstrationszwecken.

Fortlaufend wird der Browser:

1. Verfolgen, wie oft der Nutzer jedes Thema während jeder neuen **Epoche** beobachtet. Eine Epoche ist standardmäßig eine Woche, aber die Länge kann für Testzwecke verändert werden (siehe [Testhinweise](#testhinweise)).

   Chrome ordnet jedem der 22 Hauptthemen (Themen ohne Vorläufer) aus der Taxonomie [einen von zwei Buckets](https://github.com/patcg-individual-drafts/topics/blob/main/topics-utility-buckets-v1.md) zu, die eine höhere oder eine normale Nützlichkeit für das gesamte Ad-Tech-Ökosystem anzeigen. Alle Nachkommen der Hauptthemen erben dieselbe Bucket-Zuordnung von ihrem Elternthema. Die Zuordnung der Hauptthemen zu Buckets basiert auf Eingaben zur Nützlichkeit, die Google von Unternehmen aus dem Ökosystem erhalten hat.

2. Top-Themen für jeden Nutzer am Ende jeder Epoche auswählen:

   1. Chrome konvertiert die Hostnamen der Caller-Domains aus dem Browserverlauf des Nutzers in Themen.
   2. Diese Themen werden zuerst nach Bucket und dann nach Häufigkeit (wie oft sie in einem Hostnamen übereinstimmten) sortiert. Wenn zwei Themen im selben Bucket sind, aber unterschiedliche Häufigkeiten haben, wird das häufiger auftretende Thema höher eingeordnet.
   3. Chrome wählt die fünf wichtigsten Themen als Top-Themen des Nutzers für diese Epoche aus, die mit den Callern geteilt werden können.

3. Die Top-Themen werden nur dann an `ad-tech1.example` zurückgegeben, wenn `ad-tech1.example` in der Liste der Caller-Domains für jedes Thema enthalten ist, wie sie im Themenverlaufseintrag gespeichert sind.

   > [!NOTE]
   > Anfangs werden keine Themen zurückgegeben, so dass das `<iframe>` wahrscheinlich eine Standardanzeige ohne Targeting anzeigt. Sobald jedoch das Ende der ersten Epoche erreicht ist, beginnt die API mit der Rückgabe von Themen, und `ad-tech1.example` kann damit beginnen, relevantere Anzeigen basierend auf den beobachteten Themen für den aktuellen Nutzer zu zeigen.

`ad-tech1.example` wählt dann eine relevante Anzeige aus, um sie dem Nutzer basierend auf den zurückgegebenen Themen anzuzeigen.

## Welche API-Features ermöglichen die Topics API?

Die folgenden Features dienen einem doppelten Zweck — sie geben die Top-Themen des Nutzers an den Caller zurück und veranlassen den Browser, den aktuellen Seitenbesuch als vom Caller beobachtet zu markieren, damit der Hostname der Seite später in der Themenberechnung verwendet werden kann. Hierzu müssen sie in einem aufrufenden Ad-Tech-`<iframe>` enthalten sein; das `<iframe>` muss dann auf den Seiten eingebettet werden, auf denen Sie beobachtete Themen wünschen.

- Sie können eine `browsingTopics: true` Option im Optionsobjekt eines [`fetch()`](/de/docs/Web/API/Window/fetch) Aufrufs an die Ad-Tech-Plattform angeben.
- Sie könnten auch `browsingTopics: true` in das Optionsobjekt eines [`Request()`](/de/docs/Web/API/Request/Request) Konstruktors übergeben und das resultierende [`Request`](/de/docs/Web/API/Request) Objekt in den [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf übergeben.
- Sie können ein `browsingtopics` Attribut auf dem `<iframe>` setzen, gleichzeitig oder bevor Sie das `src` Attribut laden, um die Quelle zu laden. Dies könnte erfolgen:

  - Deklarativ im HTML:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

  - Programmatisch durch Setzen der entsprechenden [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics) Eigenschaft auf `true`:

  ```js
  const iframeElem = document.querySelector("iframe");
  iframeElem.browsingTopics = true;
  ```

Wenn die mit einem der obigen Features verbundene Anforderung gesendet wird:

1. Ein {{httpheader("Sec-Browsing-Topics")}} Header wird zusammen mit der Anforderung gesendet, der die Top-Themen für den aktuellen Nutzer enthält.
2. Der Ad-Tech-Server wählt eine relevante Anzeige zur Darstellung im `<iframe>` basierend auf diesen Themen aus und sendet die erforderlichen Daten zur Darstellung in der Antwort.
3. Ein {{httpheader("Observe-Browsing-Topics")}} Header sollte in der Antwort auf die Anforderung gesetzt werden — dies bewirkt, dass der Browser den aktuellen Seitenbesuch als vom aufrufenden Ad-Tech-Anbieter beobachtet aufzeichnet, so dass das zugehörige Thema in einem Themenverlaufseintrag aufgezeichnet und anschließend in der [Themenauswahl](#auswahl_interessanter_themen_zur_einflussnahme_auf_die_anzeigenauswahl) verwendet wird.

   > [!NOTE]
   > Es ist wichtig zu klären, dass dies nicht die im `Sec-Browsing-Topics` Header gesendeten Top-Themen als beobachtet aufzeichnet. Es zeichnet die Themen als beobachtet auf, die aus der URL der aufrufenden Seite abgeleitet wurden (d.h. der Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist).

### Die Methode `browsingTopics()`

Alternativ kann das eingebettete `<iframe>` [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufrufen, um die aktuellen Top-Themen eines Nutzers zurückzugeben, die dann in einer späteren Abrufanforderung an die Ad-Tech-Plattform zurückgegeben werden können. Dies hängt nicht von den HTTP-Headern ab, ist jedoch etwas weniger performant. Es wird empfohlen, eine der oben genannten HTTP-Header-Methoden zu verwenden, wobei `browsingTopics()` nur in Situationen als Fallback genutzt wird, in denen die Header nicht geändert werden können.

> [!NOTE]
> Da die Methode `browsingTopics()` nicht von den HTTP-Headern abhängt, wird der {{httpheader("Observe-Browsing-Topics")}} Header nicht verwendet, um die Themen als beobachtet zu markieren und Themenverlaufseinträge aufzuzeichnen/aktualisieren; der Browser erledigt dies automatisch, wenn die Methode aufgerufen wird.

## Private Themen-Sets

Ein Caller kann nur Themen abrufen, die er selbst für einen Nutzer beobachtet hat — und nicht die Themen, die von anderen Callern beobachtet wurden. Beispielsweise:

- Wenn die Plattform `ad-tech1.example` ein `<iframe>` auf `tennis.example` eingebettet hat, das ein Topics API Feature enthält, würden sie Themen wie "Sport" und "Tennis" für einen Nutzer beobachten, der diese Seite besucht.
- Wenn eine andere Ad-Tech-Plattform, `ad-tech2.example`, ein Topics API `<iframe>` auf "gardening.example" eingebettet hat, würden sie das Thema "Gartenarbeit" beobachten.

Diese Ad-Tech-Plattformen erhalten nur Themen für einen Nutzer, die sie selbst beobachtet haben. In diesem Beispiel wird `ad-tech1.example` nicht "Gartenarbeit" erhalten und `ad-tech2.example` nicht "Tennis".

Mit anderen Worten: Caller wie Ad-Tech-Plattformen erhalten nur Themen für Seiten, auf denen sie präsent sind. Wichtiger noch: Die aufgezeichneten Interessenthemen sind die einzige Information, die über diese API zugänglich ist — im Gegensatz zu Tracking-Cookies kann keine andere Information durchsickern.

## Beispiele

### Verwenden von `Document.browsingTopics()`

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

### Übergeben der `browsingTopics` Option an `fetch()`

```js
// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  browsingTopics: true,
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

### Einfügen des `browsingtopics` Attributs in ein `<iframe>`

```html
<iframe browsingtopics src="ad-tech1.example"> ... </iframe>
```

### Vollständige Beispiele

- [Topics API Demo](https://topics-demo.glitch.me/): Zeigt, wie `document.browsingTopics()` Aufrufe verwendet werden können, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quelltext](https://glitch.com/edit/#!/topics-demo)).
- [Topics API Header Demo](https://topics-fetch-demo.glitch.me/): Zeigt einen `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}} Header, der verwendet werden kann, um Themen zu beobachten und darauf zuzugreifen ([siehe Quelltext](https://glitch.com/edit/#!/topics-fetch-demo)).

## Testhinweise

### Chrome

Die standardmäßige Epochendauer zur Beobachtung von Themen beträgt eine Woche, was viel zu lang ist, um Code zu testen, der die Topics API verwendet. Um dies für Testzwecke zu verkürzen, können Sie Chrome mit einem Feature-Flag in etwa folgender Weise öffnen:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

Siehe [Chromium mit Befehlszeilen-Schaltern ausführen](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/) für weitere Informationen, wie dies klappt.

Sie können auch Ihren Topics API Code lokal testen, ohne die [Anmeldung](/de/docs/Web/API/Topics_API#enrollment) durchzuführen, indem Sie das folgende Chrome-Entwickler-Flag aktivieren:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Siehe auch

- [Topics API](https://developers.google.com/privacy-sandbox/private-advertising/topics) auf developers.google.com (2023)
