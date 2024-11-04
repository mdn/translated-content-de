---
title: Registrieren von Attributionsauslösern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: d270b0a55b9f2b02c2471eba9d56f7348e61b5ad
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Sie Attributionsauslöser registrieren.

## Grundlegende Methodologie

Sobald Sie [Attributionsquellen registriert haben](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources), müssen Sie Attributionsauslöser registrieren. Diese sind Interaktionen auf einer Website, bei denen eine Konversion gemessen werden soll (zum Beispiel kann das Klicken auf eine "Kauf"-Schaltfläche auf der Website eines Werbetreibenden darauf hinweisen, dass eine Konversion stattgefunden haben könnte). Der Browser versucht dann, den Attributionsauslöser einem Attributionsquelleneintrag zuzuordnen, der in einem privaten lokalen Speicherbereich gespeichert ist, und [einen Bericht zu erstellen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn eine Übereinstimmung gefunden wird.

Die verschiedenen Arten von Attributionsauslösern werden auf unterschiedliche Weise registriert, was in den folgenden Abschnitten detailliert beschrieben wird — siehe [HTML-basierte Attributionsauslöser](#html-basierte_attributionsauslöser) und [JavaScript-basierte Attributionsauslöser](#javascript-basierte_attributionsauslöser).

Jedoch ist der Vorgang zur Registrierung von Auslösern, das Suchen nach Übereinstimmungen usw., der hinter den Kulissen abläuft, in allen Fällen derselbe.

1. Alle Auslösertypen senden einen {{httpheader("Attribution-Reporting-Eligible")}}-Header bei einer Anfrage, der anzeigt, dass die Antwort berechtigt ist, einen Auslöser zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort zurückgeben. Sein Wert ist ein JSON-String, der Daten enthält, die in generierten Berichten enthalten sein können, wie die ID des Auslösers, Prioritäts- und Deduplizierungswerte.

   Das folgende Beispiel soll mit einer Attributionsquelle für einen [Ereignisbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) übereinstimmen:

   ```js
   res.set(
     "Attribution-Reporting-Register-Trigger",
     JSON.stringify({
       "event_trigger_data": [
         {
           "trigger_data": "4",
           "priority": "1000000000000",
           "deduplication_key": "2345698765",
         },
       ],
       "debug_key": "1115698977",
     });
   );
   ```

   Die hier angegebenen Felder sind wie folgt:

   - `"event_trigger_data"`: Ein Objekt, das Daten über den Auslöser darstellt. Dies umfasst:
     - `"trigger_data"`: Die mit dem Auslöser verbundenen Daten, die typischerweise verwendet werden, um Ereignisse wie "Nutzer hat Artikel in Warenkorb gelegt" oder "Nutzer hat sich für Mailingliste angemeldet" anzuzeigen. Dieser Wert wird in den generierten Bericht aufgenommen, falls vorhanden, obwohl er basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)-Feld der zugeordneten Quelle modifiziert wird.
       > [!NOTE]
       > Die Werte, die jedes Ereignis repräsentieren, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler festgelegt. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie der Quelle vom Browser zugeordnet werden können, wenn ein Auslöser registriert wird.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionsauslöser darstellt. Siehe [Berichtprioritäten und -limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributionen dupliziert werden — zum Beispiel wenn ein Nutzer denselben Artikel mehrfach in einen Warenkorb legt. Siehe [Duplizierung in Berichten verhindern](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication) für weitere Informationen.
   - `"debug_key"`: Eine Nummer, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Auslöser, der mit einer Attributionsquelle für einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) übereinstimmen soll, erfordert die unten gezeigten Felder:

   ```js
   res.set(
     "Attribution-Reporting-Register-Trigger",
     JSON.stringify({
       "aggregatable_trigger_data": [
         {
           "key_piece": "0x400",
           "source_keys": ["campaignCounts"]
         },
         {
           "key_piece": "0xA80",
           "source_keys": ["geoValue", "nonMatchingKeyIdsAreIgnored"]
         }
       ],
       "aggregatable_values": {
         "campaignCounts": 32768,
         "geoValue": 1664
       },
       "debug_key": "1115698977"
     });
   );
   ```

   Die Felder in diesem Beispiel sind:

   - `"aggregatable_trigger_data"`: Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellschlüssel angewendet werden soll.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen.

   Siehe erneut {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

3. Wenn der Nutzer mit dem Attributionsauslöser interagiert, versucht der Browser, den Auslöser mit gespeicherten Attributionsquelleneinträgen im privaten lokalen Cache des Browsers abzugleichen. Für eine erfolgreiche Übereinstimmung muss das `"trigger_data"` des `Attribution-Reporting-Register-Trigger` eines der im `"trigger_data"` des {{httpheader("Attribution-Reporting-Register-Source")}} bereitgestellten Werte entsprechen, und die Seite (Schema + {{Glossary("eTLD", "eTLD+1")}}) der obersten Ebene, auf der der Auslöser registriert wird, muss:

   - mit der Seite von mindestens einem der im zugeordneten Quellendaten spezifizierten `destination`s übereinstimmen.
   - gleich Ursprung mit der Anfrage sein, die die Quellregistrierung spezifizierte.

   > [!NOTE]
   > Diese Anforderungen bieten Datenschutz, aber auch Flexibilität — sowohl die Quelle _als auch_ der Auslöser können potenziell in einem {{htmlelement("iframe")}} eingebettet oder in der obersten Ebene der Website platziert sein.

   Es gibt viele andere Faktoren, die eine erfolgreiche Übereinstimmung verhindern können; zum Beispiel:

   - Die Filter des Auslösers entsprechen nicht den Filterdaten der Quelle (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die Einstellung [`"trigger_data_matching"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) der Quelle führt dazu, dass keine Übereinstimmung auftritt.
   - Das Limit [`"max_event_level_reports"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) der Quelle wurde erreicht.
   - Eine erfolgreiche Übereinstimmung wird aufgrund des randomisierten Antwortalgorithmus des Browsers nicht gemeldet. Siehe [Hinzufügen von Rauschen zu Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für weitere Details.

4. Wenn eine erfolgreiche Übereinstimmung gefunden wird, [erstellt der Browser einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Quellen- und Auslöserdaten und sendet diesen an einen Berichts-Endpunkt.

> [!NOTE]
> Attributionsauslöser können nicht auf {{htmlelement("a")}}-Elementen oder `Window.open()`-Aufrufen wie Attributionsquellen registriert werden.

## HTML-basierte Attributionsauslöser

HTML-basierte Attributionsauslöser können verwendet werden, um Konversionen auf einer Seite zu erkennen, wenn diese zuerst geladen wird — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Zum Beispiel, wenn ein Nutzer auf einen Attributionsquellen-Link auf einer Publisher-Seite geklickt hat und zur Werbetreibenden-Seite navigiert, können Sie den Attributionsauslöser registrieren und den Browser dazu bringen, einen Vergleich mit gespeicherten Quelleneinträgen zu versuchen, sobald die Werbetreibenden-Seite geladen wird.

Sie können einen Attributionsauslöser registrieren, indem Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen. Dies kann bei {{htmlelement("img")}}- und {{htmlelement("script")}}-Elementen erfolgen.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL innerhalb des Werts anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [Angeben einer URL innerhalb von attributionsrc](#angeben_einer_url_innerhalb_von_attributionsrc) für weitere Details.

Hier ein Beispiel für ein `<img>`-Element:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  width="1"
  height="1"
  attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit der Bilddatei erhält (wenn das `load`-Ereignis ausgelöst wird). Beachten Sie, dass Nutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte ein 1x1 Transparenz-Tracking-Pixel sein, das nur für die Attributionsberichterstattung verwendet wird.

Ein Beispiel für ein {{htmlelement("script")}}-Element könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit dem Skript erhält.

## JavaScript-basierte Attributionsauslöser

JavaScript-basierte Attributionsauslöser sind vielseitiger als HTML-basierte. Sie können den Browser so auslösen, dass er versucht, einen Vergleich mit einer gespeicherten Quelle auf Grundlage einer benutzerdefinierten Interaktion durchzuführen, zum Beispiel durch das Klicken auf ein benutzerdefiniertes Element oder das Absenden eines Formulars.

Um einen skriptbasierten Attributionsauslöser zu registrieren, können Sie entweder:

- Eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage senden, die die `attributionReporting`-Option enthält:

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

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden und [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) am Anforderungsobjekt aufrufen:

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

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort von der Abrufanforderung erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource erfolgen. Es muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, einfachen Text, einen Bild-Blob oder was auch immer für Ihre App Sinn ergibt sein.

## Angeben einer URL innerhalb von attributionsrc

In den obigen Beispielen bleibt das `attributionsrc`-Attribut leer und nimmt den Wert eines leeren Strings an. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe ist, auf dem Sie auch die Registrierung verarbeiten möchten, d.h. den {{httpheader("Attribution-Reporting-Eligible")}}-Header zu empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header zu antworten.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder dass Sie die Attributionsauslöserregistrierung auf einem anderen Server verarbeiten möchten. In solchen Fällen können Sie eine oder mehrere URLs als den Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URLs zusätzlich zum Ursprungs-Server gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Zum Beispiel könnten Sie im Fall eines `<img>`-Elements die URL im `attributionsrc`-Attribut angeben:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  attributionsrc="https://my-separate-tracking-site.example.com"
  width="1"
  height="1" />
```

Oder in JavaScript über die `attributionSrc`-Eigenschaft:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "https://my-separate-tracking-site.example.com";
```

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
