---
title: Registrierung von Attributionstriggern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Sie Attributionstrigger registrieren.

## Grundlegende Methodologie

Sobald Sie [Attributionsquellen registriert haben](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources), müssen Sie Attributionstrigger registrieren. Dies sind Interaktionen auf einer Website, bei denen eine Conversion gemessen werden soll (zum Beispiel kann das Klicken auf einen "Kaufen"-Button auf der Website eines Werbetreibenden darauf hinweisen, dass eine Conversion stattgefunden hat). Der Browser versucht dann, den Attributionstrigger mit einem Attributionsquelleintrag abzugleichen, der in einem privaten lokalen Speicher-Partition gespeichert ist, und [erstellt einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn ein Abgleich gefunden wird.

Die verschiedenen Arten von Attributionstriggern werden auf unterschiedliche Weise registriert, wie in den unten stehenden Abschnitten erläutert — siehe [HTML-basierte Attributionstrigger](#html-basierte_attributionstrigger) und [JavaScript-basierte Attributionstrigger](#javascript-basierte_attributionstrigger).

Was jedoch hinter den Kulissen passiert, um Trigger zu registrieren, nach Übereinstimmungen zu suchen usw., ist in allen Fällen gleich.

1. Alle Triggertypen senden einen {{httpheader("Attribution-Reporting-Eligible")}} Header bei einer Anfrage, der anzeigt, dass die Antwort berechtigt ist, einen Trigger zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible` Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort senden. Sein Wert ist ein JSON-String, der Daten enthält, die in erzeugte Berichte aufgenommen werden können, wie die ID des Triggers sowie Prioritäts- und Duplikationswerte.

   Das folgende Beispiel ist für eine Übereinstimmung mit einer [Ereignisebenenbericht]-Attributionsquelle gedacht:

   ```js
   res.set(
     "Attribution-Reporting-Register-Trigger",
     JSON.stringify({
       event_trigger_data: [
         {
           trigger_data: "4",
           priority: "1000000000000",
           deduplication_key: "2345698765",
         },
       ],
       debug_key: "1115698977",
     }),
   );
   ```

   Die hier angegebenen Felder sind wie folgt:
   - `"event_trigger_data"`: Ein Objekt, das Daten über den Trigger darstellt. Dies beinhaltet:
     - `"trigger_data"`: Die dem Trigger zugeordnete Daten, die typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für Mailingliste angemeldet" anzuzeigen. Dieser Wert wird in den erzeugten Bericht aufgenommen, falls vorhanden, obwohl er basierend auf dem der Attributionsquelle zugeordneten [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Feld geändert werden kann.
       > [!NOTE]
       > Die verwendeten Werte zur Darstellung jedes Ereignisses und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht genutzt werden, aber es müssen Werte im Array vorhanden sein, um sie dem Browser bei der Registrierung eines Triggers zuzuordnen.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionstrigger repräsentiert. Siehe [Berichtsprioritäten und -limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um Doppelattributionen zu verhindern — beispielsweise, wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Siehe [Verhinderung von Duplikation in Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication) für weitere Informationen.
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Trigger, der für eine Übereinstimmung mit einer [Zusammenfassungsbericht]-Attributionsquelle gedacht ist, erfordert die unten gezeigten Felder:

   ```js
   res.set(
     "Attribution-Reporting-Register-Trigger",
     JSON.stringify({
       aggregatable_trigger_data: [
         {
           key_piece: "0x400",
           source_keys: ["campaignCounts"],
         },
         {
           key_piece: "0xA80",
           source_keys: ["geoValue", "nonMatchingKeyIdsAreIgnored"],
         },
       ],
       aggregatable_values: {
         campaignCounts: 32768,
         geoValue: 1664,
       },
       debug_key: "1115698977",
     }),
   );
   ```

   Die Felder in diesem Beispiel sind:
   - `"aggregatable_trigger_data"`: Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf unterschiedliche Quellschlüssel angewendet werden soll.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt repräsentieren.

   Auch hier, siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

3. Wenn der Benutzer mit dem Attributionstrigger interagiert, versucht der Browser, den Trigger mit gespeicherten Attributionsquelleinträgen im Browser-Cache abzugleichen. Für eine erfolgreiche Übereinstimmung muss das `Attribution-Reporting-Register-Trigger`'s [`"trigger_data"`] übereinstimmen mit einem der im {{httpheader("Attribution-Reporting-Register-Source")}}'s [`"trigger_data"`] bereitgestellten Werte, und die Seite (Schema + {{Glossary("registrable_domain", "registrierungsfähige Domain")}}), auf der der Trigger registriert wird, muss:
   - mit der Seite von mindestens einem der im zugehörigen Daten der Quelle angegebenen `destination`s übereinstimmen.
   - gleichherkunft mit der Anfrage sein, die die Quellregistrierung spezifiziert.

   > [!NOTE]
   > Diese Anforderungen bieten Datenschutz, aber auch Flexibilität — die Quelle _und_ der Trigger können möglicherweise in ein {{htmlelement("iframe")}} eingebettet oder auf der obersten Seite situieren werden.

   Es gibt viele andere Faktoren, die ein erfolgreiches Übereinstimmungsergebnis verhindern können, zum Beispiel:
   - Die Filter des Triggers stimmen nicht mit den Filterdaten der Quelle überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die Einstellung der Quelle [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) führt dazu, dass keine Übereinstimmung auftritt.
   - Das Limit der Quelle [`"max_event_level_reports"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) wurde erreicht.
   - Eine erfolgreiche Übereinstimmung wird aufgrund des randomisierten Antwortalgorithmus des Browsers nicht gemeldet. Siehe [Hinzufügen von Rauschen zu Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für weitere Details.

4. Wenn eine erfolgreiche Übereinstimmung gefunden wird, erstellt der Browser [ein Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Quell- und Triggerdaten und sendet ihn an ein Berichtsendpoint.

> [!NOTE]
> Attributionstrigger können nicht auf {{htmlelement("a")}} Elementen oder [`Window.open()`](/de/docs/Web/API/Window/open) Aufrufen registriert werden wie Attributionsquellen.

## HTML-basierte Attributionstrigger

HTML-basierte Attributionstrigger können verwendet werden, um Conversions auf einer Seite zu erkennen, wenn sie zuerst geladen wird – oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Zum Beispiel, wenn ein Benutzer auf einen Attributionsquellen-Link auf einer Publisher-Seite geklickt und zur Website des Werbetreibenden navigiert hat, können Sie den Attributionstrigger registrieren und den Browser dazu bringen, sofort beim Laden der Werbetreibenden-Seite einen Abgleich mit gespeicherten Quelleneinträgen zu versuchen.

Sie können einen Attributionstrigger registrieren, indem Sie das `attributionsrc` Attribut zu einem geeigneten Element hinzufügen. Dies kann auf {{htmlelement("img")}} und {{htmlelement("script")}} Elementen erfolgen.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL innerhalb des Wertes anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [Angeben einer URL innerhalb von attributionsrc](#angeben_einer_url_innerhalb_von_attributionsrc) für weitere Details.

Hier ist ein `<img>` Element-Beispiel:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  alt=""
  width="1"
  height="1"
  attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

In diesem Fall versucht der Browser, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit der Bilddatei erhält (wenn das `load` Ereignis ausgelöst wird). Beachten Sie, dass die Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für die Attributionsberichterstattung verwendet wird.

Ein {{htmlelement("script")}} Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall versucht der Browser, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit dem Skript erhält.

## JavaScript-basierte Attributionstrigger

JavaScript-basierte Attributionstrigger sind vielseitiger als HTML-basierte Attributionstrigger. Sie können den Browser dazu bringen, basierend auf einer benutzerdefinierten Interaktion einen Abgleich mit einer gespeicherten Quelle zu versuchen, zum Beispiel beim Klicken eines benutzerdefinierten Elements oder beim Absenden eines Formulars.

Um einen script-basierten Attributionstrigger zu registrieren, können Sie entweder:

- Eine [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage mit der `attributionReporting` Option senden:

  ```js
  const attributionReporting = {
    eventSourceEligible: false,
    triggerEligible: true,
  };

  // Optionally set keepalive to ensure the request outlives the page
  function triggerMatching() {
    fetch("https://shop.example/endpoint", {
      keepalive: true,
      attributionReporting,
    });
  }

  // Associate the interaction trigger with whatever
  // element and event makes sense for your code
  elem.addEventListener("click", triggerMatching);
  ```

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt aufrufen:

  ```js
  const attributionReporting = {
    eventSourceEligible: false,
    triggerEligible: true,
  };

  function triggerMatching() {
    const req = new XMLHttpRequest();
    req.open("GET", "https://shop.example/endpoint");
    // Check availability of setAttributionReporting() before calling
    if (typeof req.setAttributionReporting === "function") {
      req.setAttributionReporting(attributionReporting);
      req.send();
    } else {
      throw new Error("Attribution reporting not available");
      // Include recovery code here as appropriate
    }
  }

  // Associate the interaction trigger with whatever
  // element and event makes sense for your code
  elem.addEventListener("click", triggerMatching);
  ```

In diesem Fall versucht der Browser, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort von der Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bildblob oder was auch immer für Ihre App sinnvoll ist, sein.

## Angeben einer URL innerhalb von attributionsrc

In den obigen Beispielen bleibt das `attributionsrc` Attribut leer und hat den Wert eines leeren Strings. Dies ist in Ordnung, wenn der Server, auf dem die angeforderte Ressource gehostet wird, derselbe Server ist, den Sie auch zur Handhabung der Registrierung verwenden möchten, d.h. den {{httpheader("Attribution-Reporting-Eligible")}} Header zu erhalten und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} Header zu antworten.

Es könnte jedoch der Fall sein, dass die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie die Registrierung des Attributionstriggers nur auf einem anderen Server bearbeiten möchten. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionsrc` angegebenen URLs zusätzlich zum Ursprungsort der Ressource gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Zum Beispiel könnten Sie im Fall eines `<img>` Elements die URL im `attributionsrc` Attribut deklarieren:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  alt=""
  attributionsrc="https://my-separate-tracking-site.example.com"
  width="1"
  height="1" />
```

Oder in JavaScript über die `attributionSrc` Eigenschaft:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "https://my-separate-tracking-site.example.com";
```

## Siehe auch

- [Attribution Reporting Header Validierungstool](https://wicg.github.io/attribution-reporting-api/validate-headers)
