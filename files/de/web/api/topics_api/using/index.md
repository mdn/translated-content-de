---
title: Verwendung der Topics API
slug: Web/API/Topics_API/Using
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{DefaultAPISidebar("Topics API")}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standpunkt der Standards](/de/docs/Web/API/Topics_API#standards_positions) unten für Details zur Ablehnung.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) ist erforderlich, um die Topics-API in Ihren Anwendungen zu nutzen. Siehe den Abschnitt [Registrierung](/de/docs/Web/API/Topics_API#enrollment) für Details, welche Unterfunktionen durch die Registrierung eingeschränkt sind.

Diese Seite erklärt, wie die Topics API funktioniert und wie sie verwendet werden kann, um eine lösung für interessenbasierte Werbung (IBA) zu erstellen.

## Übersicht auf hoher Ebene

Angenommen, wir haben eine Ad-Tech-Plattform `ad-tech1.example`, die Werbeanzeigen über {{htmlelement("iframe")}}s in den folgenden Publisher-Webseiten einbettet:

- `yoga.example`
- `knitting.example`
- `football.example`

Wenn der `<iframe>`-Inhalt von `ad-tech1.example` ein [Feature implementiert, das die Topics-API aktiviert](#what_api_features_enable_the_topics_api), wird der Browser bei jedem Laden der Seiten:

1. **Interessens-Themen** aus der URL der Seite ableiten. Die Themen stammen aus einer [standardisierten Taxonomie](/de/docs/Web/API/Topics_API#what_topics_are_there); für die obigen URL-Beispiele wären das "Fitness", "Faser- & Textilkunst" und "Fußball".
2. **Die Themen als beobachtet markieren**, was das Aufzeichnen eines **Themen-Verlaufseintrags** für jedes Thema in einem privaten Themenverlaufsspeicher beinhaltet. Jeder Themen-Verlaufseintrag enthält folgende Informationen:
   - Eine Dokument-ID (d.h. ein Identifikator für die aktuelle Seite).
   - Eingabedaten zur Themenberechnung (d.h. den Seitendomainnamen).
   - Die Zeit (seit dem Unix-Epoch), zu der die Seite erstmals beobachtet wurde.
   - Die Domänen, auf denen das Thema beobachtet wurde (bekannt als **Themen-Abruf-Domänen**).

### Auswahl interessanter Themen zur Beeinflussung der Anzeigenwahl

> [!NOTE]
> Verschiedene Browser-Implementierungen können Themen auf unterschiedliche Weise auswählen. Der nachfolgende Text basiert darauf, wie Chrome derzeit Themen auswählt, zum Demonstrationszweck.

Fortlaufend wird der Browser:

1. Verfolgen, wie oft der Benutzer jedes Thema während jeder neuen **Epoche** beobachtet. Eine Epoche ist standardmäßig eine Woche, aber die Länge kann zu Testzwecken geändert werden (siehe [Testhinweise](#testhinweise)).

   Chrome ordnet jedem der 22 Wurzeltopics (die ohne Vorfahren) aus der Taxonomie [einen von zwei Buckets zu](https://github.com/patcg-individual-drafts/topics/blob/main/topics-utility-buckets-v1.md), die eine höhere oder standardmäßige Nützlichkeit für das gesamte Ad-Tech-Ökosystem anzeigen. Alle Nachkommen der Wurzeltopics erben die gleiche Bucket-Zuweisung von ihren Eltern. Die Zuweisung der Wurzeltopics zu Buckets basiert auf Informationen über die Nützlichkeit, die Google von Unternehmen im gesamten Ökosystem erhalten hat.

2. Am Ende jeder Epoche die wichtigsten Themen für jeden Benutzer auswählen:

   1. Chrome konvertiert die Caller-Domain-Hostnamen aus dem Browserverlauf des Benutzers in Themen.
   2. Diese Themen werden zuerst nach Bucket und dann nach Häufigkeit sortiert (wie oft sie in einem Hostnamen übereinstimmten). Das heißt, wenn zwei Themen im gleichen Bucket, aber mit unterschiedlichen Frequenzen sind, wird das Thema mit der höheren Frequenz höher eingestuft.
   3. Chrome wählt die fünf wichtigsten Themen als die Top-Themen des Benutzers für diese Epoche aus, die mit den Callern geteilt werden können.

3. Die wichtigsten Themen werden nur dann an `ad-tech1.example` zurückgegeben, wenn `ad-tech1.example` in der Liste der Caller-Domänen für jedes Thema erscheint, wie sie im Verlaufseintrag des Themas gespeichert sind.

   > [!NOTE]
   > Anfangs werden keine Themen zurückgegeben, so dass der `<iframe>` wahrscheinlich eine Standardeinstellung mit nicht zielgerichteter Werbung anzeigt. Sobald jedoch das Ende der ersten Epoche erreicht ist, beginnt die API, Themen zurückzugeben, und `ad-tech1.example` kann relevantere Anzeigen basierend auf den beobachteten Themen für den aktuellen Benutzer anzeigen.

`ad-tech1.example` wählt dann eine relevante Anzeige aus, die dem Benutzer basierend auf den zurückgegebenen Themen angezeigt werden soll.

## Welche API-Features aktivieren die Topics-API?

Die folgenden Funktionen dienen einem doppelten Zweck — sie geben die Top-Themen des Benutzers an den Anrufer zurück und lösen den Browser aus, den aktuellen Seitenbesuch als vom Anrufer beobachtet aufzuzeichnen, sodass der Seitenhostname später in der Themenberechnung verwendet werden kann. Dazu müssen sie in ein `<iframe>` der Ad-Tech-Aufrufe eingefügt werden; das `<iframe>` muss dann auf den Seiten eingebettet werden, auf denen Sie Themen beobachten möchten.

- Sie können in das options-Objekt eines {{domxref("Window/fetch", "fetch()")}}-Aufrufs zur Ad-Tech-Plattform eine Option `browsingTopics: true` hinzufügen.
- Sie könnten auch `browsingTopics: true` in das options-Objekt eines Aufrufs des {{domxref("Request.Request", "Request()")}}-Konstruktors einfügen und das resultierende {{domxref("Request")}}-Objekt in den {{domxref("Window/fetch", "fetch()")}}-Aufruf übergeben.
- Sie können ein `browsingtopics`-Attribut auf dem `<iframe>` setzen, gleichzeitig oder bevor Sie das `src`-Attribut setzen, um die Quelle zu laden. Dies könnte geschehen:

  - Deklarativ im HTML:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

  - Programmgesteuert durch Setzen der entsprechenden {{domxref("HTMLIFrameElement.browsingTopics")}}-Eigenschaft auf `true`:

  ```js
  const iframeElem = document.querySelector("iframe");
  iframeElem.browsingTopics = true;
  ```

Wenn die Anfrage, die mit einem der oben genannten Features verbunden ist, gesendet wird:

1. Ein {{httpheader("Sec-Browsing-Topics")}}-Header wird zusammen mit der Anfrage gesendet, der die Top-Themen für den aktuellen Benutzer enthält.
2. Der Ad-Tech-Server wählt eine relevante Anzeige zur Anzeige im `<iframe>` basierend auf diesen Themen aus und sendet die erforderlichen Daten, um sie in der Antwort anzuzeigen.
3. Ein {{httpheader("Observe-Browsing-Topics")}}-Header sollte in der Antwort auf die Anfrage gesetzt sein — dies hat zur Folge, dass der Browser den aktuellen Seitenbesuch als von dem anrufenden Ad-Tech-Anbieter beobachtet aufzeichnet, so dass die zugehörigen Themen in einem Themenverlaufseintrag erfasst und anschließend in der [Themenselektion](#auswahl_interessanter_themen_zur_beeinflussung_der_anzeigenwahl) verwendet werden.

   > [!NOTE]
   > Es ist wichtig klarzustellen, dass die im `Sec-Browsing-Topics`-Header gesendeten Top-Themen nicht als beobachtet aufgezeichnet werden. Es werden die von der URL der aufrufenden Seite abgeleiteten Themen (d.h. die Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist) als beobachtet aufgezeichnet.

### Die Methode `browsingTopics()`

Alternativ kann das eingebettete `<iframe>` {{domxref("Document.browsingTopics()")}} aufrufen, um die aktuellen Top-Themen eines Benutzers zurückzugeben, die dann in einem nachfolgenden Fetch-Anfrage an die Ad-Tech-Plattform zurückgegeben werden können. Dies hängt nicht von den HTTP-Headern ab, ist jedoch etwas weniger leistungsfähig. Es wird empfohlen, eine der oben aufgeführten HTTP-Header-Methoden zu verwenden und nur auf `browsingTopics()` zurückzugreifen, wenn die Header nicht geändert werden können.

> [!NOTE]
> Da die Methode `browsingTopics()` nicht von den HTTP-Headern abhängt, wird der {{httpheader("Observe-Browsing-Topics")}}-Header nicht verwendet, um die Themen als beobachtet zu setzen und Themenverlaufseinträge zu erfassen/aktualisieren; der Browser erledigt dies automatisch, wenn die Methode aufgerufen wird.

## Private Themen-Sets

Ein Anrufer kann nur auf Themen zugreifen, die er selbst für einen Benutzer beobachtet hat — und nicht auf Themen, die von anderen Anrufern beobachtet wurden. Zum Beispiel:

- Wenn die `ad-tech1.example`-Plattform ein `<iframe>` auf `tennis.example` eingebettet hat, das ein Topics-API-Feature enthält, würden sie für einen Benutzer, der diese Seite besucht, Themen wie "Sport" und "Tennis" beobachten.
- Wenn eine andere Ad-Tech-Plattform, `ad-tech2.example`, ein Topics-API-`<iframe>` auf "gardening.example" eingebettet hat, würden sie das Thema "Gartenarbeit" beobachten.

Diese Ad-Tech-Plattformen werden nur Themen für einen Benutzer erhalten, die sie beobachtet haben. In diesem Beispiel erhält `ad-tech1.example` kein "Gartenarbeit" und `ad-tech2.example` kein "Tennis".

Mit anderen Worten: Anrufer wie Ad-Tech-Plattformen erhalten nur Themen für Seiten, auf denen sie eine Präsenz haben. Wichtiger ist noch, dass die aufgezeichneten Themen von Interesse die einzigen Informationen sind, die über diese API zugänglich sind — im Gegensatz zu Tracking-Cookies können keine weiteren Informationen preisgegeben werden.

## Beispiele

### Verwendung von `Document.browsingTopics()`

```js
// Holen Sie ein Array von Themen für diesen Benutzer
const topics = await document.browsingTopics();

// Fordern Sie ein Anzeigemittel an
const response = await fetch("https://ads.example/get-creative", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(topics),
});

// Holen Sie das JSON aus der Antwort
const creative = await response.json();

// Anzeige anzeigen
```

### Übergeben der `browsingTopics`-Option in `fetch()`

```js
// Fordern Sie ein Anzeigemittel an
const response = await fetch("https://ads.example/get-creative", {
  browsingTopics: true,
});

// Holen Sie das JSON aus der Antwort
const creative = await response.json();

// Anzeige anzeigen
```

### Einschließen des `browsingtopics`-Attributs in ein `<iframe>`

```html
<iframe browsingtopics src="ad-tech1.example"> ... </iframe>
```

### Vollständige Beispiele

- [Topics API-Demo](https://topics-demo.glitch.me/): Demonstriert, wie `document.browsingTopics()`-Aufrufe verwendet werden können, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-demo)).
- [Topics API-Header-Demo](https://topics-fetch-demo.glitch.me/): Demonstriert, wie eine `fetch()`-Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header verwendet werden kann, um Themen zu beobachten und dann darauf zuzugreifen ([siehe Quellcode](https://glitch.com/edit/#!/topics-fetch-demo)).

## Testhinweise

### Chrome

Die Standardepoche zur Beobachtung der Themen beträgt eine Woche, was viel zu lang ist, um Code zu testen, der die Topics API verwendet. Um dies zu Testzwecken zu verkürzen, können Sie Chrome mit einem Feature-Flag wie dem folgenden öffnen:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

Siehe [Chromium mit Befehlszeilen-Switches ausführen](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/) für weitere Informationen, wie das gemacht wird.

Sie können Ihren Topics API-Code auch lokal ohne [Registrierung](/de/docs/Web/API/Topics_API#enrollment) testen, indem Sie das folgende Chrome-Entwicklerflag aktivieren:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Siehe auch

- [Topics API](https://developers.google.com/privacy-sandbox/private-advertising/topics) auf developers.google.com (2023)
