---
title: Registrierung von Attributionstriggern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie man Attributionstrigger registriert.

## Grundlegende Methodik

Nachdem Sie [Attributionsquellen registriert haben](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources), müssen Sie Attributionstrigger registrieren. Dies sind Interaktionen auf einer Website, bei der eine Konversion gemessen werden soll (zum Beispiel kann das Klicken auf eine "Kauf"-Taste auf der Website eines Werbetreibenden anzeigen, dass eine Konversion möglicherweise erfolgt ist). Der Browser wird dann versuchen, den Attributionstrigger mit einem Attributionsquelleneintrag abzugleichen, der in einer privaten lokalen Speicherpartition gespeichert ist, und [einen Bericht zu generieren](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn ein Treffer gefunden wird.

Die unterschiedlichen Arten von Attributionstriggern werden auf verschiedene Weise registriert, die in den folgenden Abschnitten detailliert beschrieben werden – siehe [HTML-basierte Attributionstrigger](#html-basierte_attributionstrigger) und [JavaScript-basierte Attributionstrigger](#javascript-basierte_attributionstrigger).

Jedoch ist das, was hinter den Kulissen passiert, um Trigger zu registrieren, Übereinstimmungen zu suchen usw., in allen Fällen gleich.

1. Alle Triggerarten senden einen {{httpheader("Attribution-Reporting-Eligible")}}-Header in einer Anfrage, was darauf hinweist, dass die Antwort berechtigt ist, einen Trigger zu registrieren. Ein Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort einschließen. Sein Wert ist ein JSON-String, der Daten enthält, die in generierte Berichte aufgenommen werden können, wie z.B. die ID des Triggers sowie Prioritäts- und Deduplikationswerte.

   Das folgende Beispiel soll mit einer Attributionsquelle für einen [Event-Level-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) übereinstimmen:

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

   - `"event_trigger_data"`: Ein Objekt, das Daten über den Trigger darstellt. Dies umfasst:
     - `"trigger_data"`: Die mit dem Trigger verbundenen Daten, die typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für den Newsletter angemeldet" anzuzeigen. Dieser Wert wird im generierten Bericht enthalten sein, sofern vorhanden, obwohl er basierend auf dem `"`trigger_data_matching`"`-Feld der zugeordneten Quelle modifiziert werden kann.
       > [!NOTE]
       > Die Werte, die zur Darstellung jedes Ereignisses verwendet werden, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um sie der Quelle durch den Browser zuzuordnen, wenn ein Trigger registriert wird.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionstrigger repräsentiert. Weitere Informationen finden Sie unter [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, mit dem verhindert werden kann, dass Attributionen dupliziert werden — beispielsweise, wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Weitere Informationen finden Sie unter [Vermeidung von Duplikation in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication).
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Trigger, der für eine Attributionsquelle für einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) vorgesehen ist, erfordert die unten angegebenen Felder:

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

   - `"aggregatable_trigger_data"`: Ein Array von Objekten, wobei jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellenschlüssel angewendet wird.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen.

   Auch hier finden Sie eine detaillierte Beschreibung aller verfügbaren Felder unter {{httpheader("Attribution-Reporting-Register-Trigger")}}.

3. Wenn der Benutzer mit dem Attributionstrigger interagiert, versucht der Browser, den Trigger mit einem Attributionsquelleneintrag abzugleichen, der im privaten lokalen Cache des Browsers gespeichert ist. Damit ein Abgleich erfolgreich ist, muss die `Attribution-Reporting-Register-Trigger`'s [`"trigger_data"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) mit einem der im {{httpheader("Attribution-Reporting-Register-Source")}} bereitgestellten Werte übereinstimmen, und die Website (Schema + [eTLD+1](/de/docs/Glossary/eTLD)) der obersten Ebene der Seite, auf der der Trigger registriert wird, muss:

   - mit der Website von mindestens einem der in den zugehörigen Daten der Quelle angegebenen `destination`s übereinstimmen.
   - ursprungsgleich mit der Anfrage sein, die die Quellregistrierung spezifiziert hat.

   > [!NOTE]
   > Diese Anforderungen bieten Datenschutz, aber auch Flexibilität – die Quelle _und_ der Trigger können potenziell in einem {{htmlelement("iframe")}} eingebettet oder auf der Website der obersten Ebene platziert werden.

   Es gibt viele andere Faktoren, die einen erfolgreichen Ergebnisabgleich verhindern können, zum Beispiel:

   - Die Filter des Triggers stimmen nicht mit den Filterdaten der Quelle überein (Einzelheiten finden Sie unter [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters)).
   - Die Einstellung 'trigger_data_matching' der Quelle` [`"`trigger_data_matching`"](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) führt dazu, dass keine Übereinstimmung erfolgt.
   - Das Limit der Quelle `"`max_event_level_reports`"` ['"`max_event_level_reports`"](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#max_event_level_reports)` wurde erreicht.
   - Ein erfolgreicher Treffer wird aufgrund des randomisierten Antwortalgorithmus des Browsers nicht gemeldet. Einzelheiten finden Sie unter [Hinzufügen von Rauschen zu Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports).

4. Wenn ein erfolgreicher Treffer gefunden wird, generiert der Browser [einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Daten der Quelle und des Triggers und sendet ihn an einen Berichtsendpunkt.

> [!NOTE]
> Attributionstrigger können nicht wie Attributionsquellen auf {{htmlelement("a")}}-Elementen oder [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen registriert werden.

## HTML-basierte Attributionstrigger

HTML-basierte Attributionstrigger können verwendet werden, um Konversionen auf einer Seite zu erkennen, wenn sie zuerst geladen wird — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Wenn beispielsweise ein Benutzer auf einen Attributionsquellen-Link auf der Seite eines Publishers geklickt hat und zur Seite eines Werbetreibenden navigiert, können Sie den Attributionstrigger registrieren und den Browser dazu bringen, sofort bei Ladebeginn der Seite des Werbetreibenden einen Versuch zum Abgleich mit gespeicherten Quellen vorzunehmen.

Sie können einen Attributionstrigger registrieren, indem Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen. Dies kann auf {{htmlelement("img")}}- und {{htmlelement("script")}}-Elementen erfolgen.

Wenn Sie den Attributwert leer lassen, wird die Anforderungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL innerhalb des Werts anzugeben, um die Anforderungsanmeldung zu senden; siehe [Angeben einer URL innerhalb von attributionsrc](#angeben_einer_url_innerhalb_von_attributionsrc) für weitere Details.

Hier ist ein `<img>`-Elementbeispiel:

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

In diesem Fall versucht der Browser, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort erhält, die die Bilddatei enthält (wenn das `load`-Ereignis ausgelöst wird). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für das Attribution-Reporting verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc />
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall versucht der Browser, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort erhält, die das Skript enthält.

## JavaScript-basierte Attributionstrigger

JavaScript-basierte Attributionstrigger sind vielseitiger als HTML-basierte Attributionstrigger. Sie können den Browser dazu veranlassen, einen Abgleich mit einer gespeicherten Quelle basierend auf einer benutzerdefinierten Interaktion vorzunehmen, zum Beispiel durch das Klicken auf ein benutzerdefiniertes Element oder das Absenden eines Formulars.

Um einen skriptbasierten Attributionstrigger zu registrieren, können Sie entweder:

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

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden, bei der [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt aufgerufen wird:

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
> Die Anfrage kann für jede Art von Ressource sein. Sie muss nicht direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, unformatierten Text, ein Bildblob oder was auch immer für Ihre App sinnvoll ist, sein.

## Angeben einer URL innerhalb von attributionsrc

In den obigen Beispielen ist das `attributionsrc`-Attribut leer gelassen und nimmt den Wert eines leeren Strings an. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, den Sie auch zur Handhabung der Registrierung verwenden möchten, d.h. den {{httpheader("Attribution-Reporting-Eligible")}}-Header zu empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header zu antworten.

Es kann jedoch der Fall sein, dass die angeforderte Ressource nicht auf einem Server ist, den Sie kontrollieren, oder Sie die Registrierung des Attributionstriggers auf einem anderen Server bearbeiten möchten. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` spezifizierten URLs zusätzlich zum Ressourcenursprung gesendet; die URLs können dann mit der {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Ein Beispiel, in dem Sie die URL im `attributionsrc`-Attribut für ein `<img>`-Element deklarieren könnten:

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

- [Attributionsbericht-Header-Validierungstool](https://wicg.github.io/attribution-reporting-api/validate-headers)
