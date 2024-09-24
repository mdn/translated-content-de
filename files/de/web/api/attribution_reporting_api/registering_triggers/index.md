---
title: Registrierung von Attributionsauslösern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Attributionsauslöser registriert werden.

## Grundlegende Methodik

Sobald Sie [Attributionsquellen registriert haben](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources), müssen Sie Attributionsauslöser registrieren. Dies sind Interaktionen auf einer Website, bei denen eine Konversion gemessen werden soll (zum Beispiel kann das Klicken auf einen "Kauf"-Button auf der Website eines Werbetreibenden darauf hindeuten, dass eine Konversion stattgefunden haben könnte). Der Browser wird dann versuchen, den Attributionsauslöser mit einem Attributionsquelleneintrag abzugleichen, der in einer privaten lokalen Speicherpartition gespeichert ist, und [einen Bericht generieren](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn ein Abgleich gefunden wird.

Die verschiedenen Arten von Attributionsauslösern werden auf unterschiedliche Weise registriert, die in den folgenden Abschnitten detailliert beschrieben werden — siehe [HTML-basierte Attributionsauslöser](#html-basierte_attributionsauslöser) und [JavaScript-basierte Attributionsauslöser](#javascript-basierte_attributionsauslöser).

Allerdings ist das, was hinter den Kulissen geschieht, um Auslöser zu registrieren, Übereinstimmungen zu suchen usw., in allen Fällen gleich.

1. Alle Auslösertypen senden einen {{httpheader("Attribution-Reporting-Eligible")}}-Header bei einer Anfrage, der angibt, dass die Antwort berechtigt ist, einen Auslöser zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort senden. Sein Wert ist ein JSON-String, der Daten enthält, die in generierte Berichte aufgenommen werden können, wie die ID des Auslösers sowie Prioritäts- und Deduplizierungswerte.

   Das folgende Beispiel soll mit einer [Ereignis-level Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) Attributionsquelle übereinstimmen:

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
     - `"trigger_data"`: Die Daten, die mit dem Auslöser verbunden sind und typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für den Newsletter angemeldet" anzuzeigen. Dieser Wert wird, falls ein Bericht generiert wird, im Bericht aufgenommen, obwohl er basierend auf dem Attributionsquelleneintrag unter dem Feld [`"trigger_data_matching"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) geändert werden kann.
       > [!NOTE]
       > Die Werte, die zur Darstellung einzelner Ereignisse verwendet werden, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler festgelegt. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um der Quelle zugeordnet zu werden, wenn ein Auslöser registriert wird.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionsauslöser darstellt. Siehe [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für mehr Informationen.
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributionsvorgänge dupliziert werden — z. B. wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Siehe [Vermeidung von Duplikationen in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication) für mehr Informationen.
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie zusammen mit dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Auslöser, der zur Übereinstimmung mit einer [Zusammenfassung-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) Attributionsquelle vorgesehen ist, erfordert die unten gezeigten Felder:

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

   - `"aggregatable_trigger_data"`: Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellenschlüssel angewendet werden soll.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen.

   Auch hier siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

3. Wenn der Benutzer mit dem Attributionsauslöser interagiert, versucht der Browser, den Auslöser mit allen im privaten lokalen Cache des Browsers gespeicherten Attributionsquelleneinträgen abzugleichen. Für einen erfolgreichen Abgleich muss das [`"trigger_data"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) des `Attribution-Reporting-Register-Trigger` mit einem der im {{httpheader("Attribution-Reporting-Register-Source")}} bereitgestellten Werte übereinstimmen, und die Seite (Schema + [eTLD+1](/de/docs/Glossary/eTLD)) auf der der Auslöser registriert wird, muss:

   - mit der Seite mindestens eines der im Quelleneintrag angegebenen `destination`s übereinstimmen.
   - selben Ursprungs mit der Anfrage sein, die die Quellenregistrierung spezifiziert hat.

   > [!NOTE]
   > Diese Anforderungen bieten Datenschutz, aber auch Flexibilität — die Quelle _und_ der Auslöser können potenziell in einem {{htmlelement("iframe")}} eingebettet oder auf der obersten Ebene der Website platziert werden.

   Es gibt viele andere Faktoren, die einen erfolgreichen Abgleich verhindern können; zum Beispiel:

   - Die Filter des Auslösers stimmen nicht mit den Filtern des Quelleneintrags überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Details).
   - Die Einstellung [`"trigger_data_matching"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) des Quelleneintrags führt dazu, dass keine Übereinstimmung vorliegt.
   - Das Limit [`"max_event_level_reports"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) des Quelleneintrags wurde erreicht.
   - Ein erfolgreicher Abgleich wird aufgrund des randomisierten Antwortalgorithmus des Browsers nicht gemeldet. Siehe [Hinzufügen von Störgeräuschen zu Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für mehr Details.

4. Wenn ein erfolgreicher Abgleich gefunden wird, generiert der Browser [einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Quell- und Auslöserdaten und sendet ihn an eine Berichtsendungsstelle.

> [!NOTE]
> Attributionsauslöser können nicht wie Attributionsquellen auf {{htmlelement("a")}}-Elementen oder {{domxref("Window.open()")}}-Aufrufen registriert werden.

## HTML-basierte Attributionsauslöser

HTML-basierte Attributionsauslöser können verwendet werden, um Konversionen auf einer Seite zu erkennen, wenn diese erstmals geladen wird — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Wenn beispielsweise ein Benutzer einen Attributionsquellenlink auf einer Verlagsseite angeklickt hat und zur Website des Werbetreibenden navigiert, können Sie den Attributionsauslöser registrieren und den Browser anweisen, beim Laden der Seite des Werbetreibenden sofort einen Abgleich mit gespeicherten Quelleneinträgen zu versuchen.

Sie können einen Attributionsauslöser registrieren, indem Sie das Attribut `attributionsrc` einem geeigneten Element hinzufügen. Dies kann auf {{htmlelement("img")}}- und {{htmlelement("script")}}-Elementen geschehen.

Wenn Sie den Attributswert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL im Wert anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [Angeben einer URL im attributionsrc](#angeben_einer_url_im_attributionsrc) für mehr Details.

Hier ist ein Beispiel für ein `<img>`-Element:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  width="1"
  height="1"
  attributionsrc />
```

Dies könnte auch über die {{domxref("HTMLImageElement.attributionSrc")}}-Eigenschaft realisiert werden:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort enthält, die die Bilddatei enthält (wenn das `load`-Ereignis ausgelöst wird). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte ein 1x1-Transparenz-Tracking-Pixel sein, das nur für die Attributionsberichterstattung verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte folgendermaßen aussehen:

```html
<script src="advertising-script.js" attributionsrc />
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort enthält, die das Skript enthält.

## JavaScript-basierte Attributionsauslöser

JavaScript-basierte Attributionsauslöser sind vielseitiger als HTML-basierte Attributionsauslöser. Sie können den Browser anweisen, basierend auf einer benutzerdefinierten Interaktion, wie z.B. dem Klicken auf ein benutzerdefiniertes Element oder dem Absenden eines Formulars, einen Abgleich mit einer gespeicherten Quelle zu versuchen.

Um einen skriptbasierten Attributionsauslöser zu registrieren, können Sie entweder:

- Eine {{domxref("Window/fetch", "fetch()")}}-Anfrage mit der Option `attributionReporting` senden:

  ```js
  const attributionReporting = {
    eventSourceEligible: false,
    triggerEligible: true,
  };

  // Optional set keepalive to ensure the request outlives the page
  function triggerMatching() {
    fetch("https://shop.example/endpoint", {
      keepalive: true,
      attributionReporting,
    });
  }

  // Ordnen Sie den Interaktionsauslöser dem geeigneten
  // Element und Ereignis zu, das für Ihren Code sinnvoll ist
  elem.addEventListener("click", triggerMatching);
  ```

- Eine {{domxref("XMLHttpRequest")}} senden und {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} auf dem Anforderungsobjekt aufrufen:

  ```js
  const attributionReporting = {
    eventSourceEligible: false,
    triggerEligible: true,
  };

  function triggerMatching() {
    const req = new XMLHttpRequest();
    req.open("GET", "https://shop.example/endpoint");
    // Verfügbarkeit von setAttributionReporting() prüfen, bevor es aufgerufen wird
    if (typeof req.setAttributionReporting === "function") {
      req.setAttributionReporting(attributionReporting);
      req.send();
    } else {
      throw new Error("Attributionsberichterstattung nicht verfügbar");
      // Fügen Sie hier geeigneten Wiederherstellungscode ein
    }
  }

  // Ordnen Sie den Interaktionsauslöser dem geeigneten
  // Element und Ereignis zu, das für Ihren Code sinnvoll ist
  elem.addEventListener("click", triggerMatching);
  ```

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort auf die Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Es muss nicht direkt mit der Attribution Reporting API zusammenhängen und kann eine Anfrage nach JSON, Klartext, einem Bild-Blob oder was auch immer für Ihre App sinnvoll ist, sein.

## Angeben einer URL im attributionsrc

In den obigen Beispielen wird das `attributionsrc`-Attribut leer gelassen und nimmt den Wert eines leeren Strings an. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource enthält, derselbe Server ist, den Sie auch zur Registrierung verwenden möchten, d. h., der den {{httpheader("Attribution-Reporting-Eligible")}}-Header empfängt und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antwortet.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie möchten die Registrierung des Attributionsauslösers auf einem anderen Server durchführen. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die im `attributionsrc` angegebenen URLs zusätzlich zum Ursprung der Ressource gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Zum Beispiel können Sie im Fall eines `<img>`-Elements die URL im `attributionsrc`-Attribut deklarieren:

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
