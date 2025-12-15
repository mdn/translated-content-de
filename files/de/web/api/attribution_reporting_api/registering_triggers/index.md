---
title: Registrierung von Attributionstriggern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: 9e837bbcce64783e14f56b16eb1612b05e7d8fdc
---

{{DefaultAPISidebar("Attribution Reporting API")}}{{deprecated_header}}

Dieser Artikel erklärt, wie man Attributionstrigger registriert.

## Grundlegende Methodik

Nachdem Sie [Attributionsquellen registriert haben](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources), müssen Sie Attributionstrigger registrieren. Dabei handelt es sich um Interaktionen auf einer Webseite, bei denen eine Konversion gemessen werden soll (zum Beispiel kann das Klicken eines "Kaufen"-Buttons auf der Webseite eines Werbetreibenden darauf hinweisen, dass eine Konversion stattgefunden haben könnte). Der Browser versucht dann, den Attributionstrigger einem Attributionsquelleneintrag zuzuordnen, der in einer privaten lokalen Speichereinheit gespeichert ist, und [einen Bericht zu erstellen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn eine Übereinstimmung gefunden wird.

Die verschiedenen Arten von Attributionstriggern werden auf unterschiedliche Weise registriert, was in den untenstehenden Abschnitten detailliert beschrieben wird — siehe [HTML-basierte Attributionstrigger](#html-basierte_attributionstrigger) und [JavaScript-basierte Attributionstrigger](#javascript-basierte_attributionstrigger).

Was jedoch im Hintergrund passiert, um Trigger zu registrieren, nach Übereinstimmungen zu suchen usw., ist in allen Fällen dasselbe.

1. Alle Triggerarten senden einen {{httpheader("Attribution-Reporting-Eligible")}}-Header in einer Anfrage, der darauf hinweist, dass die Antwort berechtigt ist, einen Trigger zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort senden. Sein Wert ist ein JSON-String, der Daten enthält, die in generierten Berichten enthalten sein können, wie zum Beispiel die ID des Triggers sowie Prioritäts- und Deduplikationswerte.

   Das folgende Beispiel soll mit einer Attributionsquelle für [Ereignisbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) übereinstimmen:

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
   - `"event_trigger_data"`: Ein Objekt, das Daten über den Trigger darstellt. Dies umfasst:
     - `"trigger_data"`: Die Daten, die mit dem Trigger verbunden sind, und typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel in den Einkaufswagen gelegt" oder "Benutzer hat sich in die Mailingliste eingetragen" zu kennzeichnen. Dieser Wert wird in den generierten Bericht aufgenommen, sofern vorhanden, obwohl er basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)-Feld der zugeordneten Quelle modifiziert wird.
       > [!NOTE]
       > Die Werte, die für jedes Ereignis verwendet werden, und die Anzahl der Elemente im Array, sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie bei der Registrierung eines Triggers vom Browser der Quelle zugeordnet werden können.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionstrigger darstellt. Siehe [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributionen dupliziert werden — zum Beispiel, wenn ein Benutzer denselben Artikel mehrfach in einen Einkaufswagen legt. Siehe [Verhinderung von Duplikationen in Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication) für weitere Informationen.
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie neben dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Trigger, der mit einer Attributionsquelle für [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) übereinstimmen soll, erfordert die unten gezeigten Felder:

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
   - `"aggregatable_trigger_data"`: Ein Array von Objekten, die jeweils einen Aggregationsschlüssel definieren, der auf verschiedene Quellschlüssel angewendet werden soll.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften mit einem Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt enthält.

   Siehe erneut {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

3. Wenn der Benutzer mit dem Attributionstrigger interagiert, versucht der Browser, den Trigger mit jedem in einem privaten lokalen Cache des Browsers gespeicherten Attributionsquelleneintrag abzugleichen. Für eine erfolgreiche Übereinstimmung muss die `"trigger_data"` des `Attribution-Reporting-Register-Trigger` mit einem der im {{httpheader("Attribution-Reporting-Register-Source")}} bereitgestellten Werte übereinstimmen, und die Webseite (Schema + {{Glossary("eTLD", "eTLD+1")}}), auf der der Trigger registriert wird, muss:
   - mit der Webseite von mindestens einem der in den zugehörigen Quelldaten angegebenen `destination`s übereinstimmen.
   - gleiche Herkunft wie die Anfrage haben, die die Quellregistrierung spezifiziert.

   > [!NOTE]
   > Diese Anforderungen bieten Privatschutz, ermöglichen jedoch auch Flexibilität — die Quelle _und_ der Trigger können potenziell in ein {{htmlelement("iframe")}} eingebettet oder auf der übergeordneten Webseite platziert werden.

   Es gibt viele andere Faktoren, die eine erfolgreiche Übereinstimmung verhindern können; zum Beispiel:
   - Die Filter des Triggers stimmen nicht mit den Filterdaten der Quelle überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die Einstellung [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) der Quelle führt dazu, dass keine Übereinstimmung auftritt.
   - Das Limit der Quelle für [`"max_event_level_reports"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) wurde erreicht.
   - Eine erfolgreiche Übereinstimmung wird aufgrund des randomisierten Antwortalgorithmus des Browsers nicht gemeldet. Siehe [Hinzufügen von Rauschen zu Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für weitere Details.

4. Wenn eine erfolgreiche Übereinstimmung gefunden wird, [generiert der Browser einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Quellen- und Triggerdaten und sendet ihn an einen Berichtsendpunkt.

> [!NOTE]
> Attributionstrigger können nicht auf {{htmlelement("a")}}-Elementen oder in [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen registriert werden, wie es bei Attributionsquellen der Fall ist.

## HTML-basierte Attributionstrigger

HTML-basierte Attributionstrigger können verwendet werden, um Konversionen auf einer Seite zu erkennen, wenn diese erstmals geladen wird — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Zum Beispiel, wenn ein Benutzer auf einen Attributionsquellenlink auf der Seite eines Publishers geklickt und zur Seite des Werbetreibenden navigiert hat, können Sie den Attributionstrigger registrieren und den Browser veranlassen, eine Übereinstimmung mit gespeicherten Quelleneinträgen zu versuchen, sobald die Seite des Werbetreibenden geladen wird.

Sie können einen Attributionstrigger registrieren, indem Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen. Dies kann bei {{htmlelement("img")}}- und {{htmlelement("script")}}-Elementen geschehen.

Wenn Sie den Attributwert leer lassen, wird die Registrierung an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL im Wert anzugeben, an die die Registrierung gesendet werden soll; siehe [Festlegen einer URL im attributionsrc](#festlegen_einer_url_im_attributionsrc) für weitere Details.

Hier ist ein Beispiel mit einem `<img>`-Element:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  alt=""
  width="1"
  height="1"
  attributionsrc />
```

Alternativ könnten Sie dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser das Bilddatei enthaltende Antwort erhält (wenn das `load`-Ereignis eintritt). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte sich um einen 1x1-Pixel-transparente Tracking-Pixel handeln, der nur für die Attributionsberichterstattung verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte wie folgt aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser das Script enthaltende Antwort erhält.

## JavaScript-basierte Attributionstrigger

JavaScript-basierte Attributionstrigger sind vielseitiger als HTML-basierte Attributionstrigger. Sie können ein benutzerdefiniertes Ereignis verwenden, um den Browser zu veranlassen, eine Übereinstimmung mit einer gespeicherten Quelle zu versuchen, beispielsweise durch Klicken auf ein benutzerdefiniertes Element oder durch Übermitteln eines Formulars.

Um einen skriptbasierten Attributionstrigger zu registrieren, können Sie:

- Einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Request senden, der die Option `attributionReporting` enthält:

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

- Einen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden mit einer Invocation von [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Request-Objekt:

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

In diesem Fall wird der Browser versuchen, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort auf die Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage nach JSON, einfachem Text, einem Bild-Blob oder etwas anderem sein, das für Ihre App sinnvoll ist.

## Festlegen einer URL im attributionsrc

In den obigen Beispielen wird das `attributionsrc`-Attribut leer gelassen und nimmt den Wert eines leeren Strings an. Dies ist in Ordnung, wenn der Server, auf dem die angeforderte Ressource liegt, derselbe ist, der auch die Registrierung abwickeln soll, d.h. der {{httpheader("Attribution-Reporting-Eligible")}}-Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten soll.

Es kann jedoch sein, dass die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder dass Sie die Registrierung des Attributionstriggers einfach auf einem anderen Server abwickeln möchten. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URLs zusätzlich zum Ursprungsserver gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Zum Beispiel könnten Sie im Falle eines `<img>`-Elements die URL im `attributionsrc`-Attribut angeben:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  alt=""
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

- [Validierungstool für Attribution Reporting Header](https://wicg.github.io/attribution-reporting-api/validate-headers)
