---
title: Registrierung von Attributionsauslösern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Attributionsauslöser registriert werden.

## Grundlegende Methode

Sobald Sie [Attributionsquellen registriert haben](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources), müssen Sie Attributionsauslöser registrieren. Dabei handelt es sich um Interaktionen auf einer Website, bei denen eine Konversion gemessen werden soll (beispielsweise kann das Klicken auf eine „Kaufen“-Schaltfläche auf der Seite eines Werbetreibenden darauf hinweisen, dass eine Konversion stattgefunden haben könnte). Der Browser wird dann versuchen, den Attributionsauslöser mit einem in einer privaten lokalen Speicherpartition gespeicherten Attributionsquellen-Eintrag abzugleichen und [einen Bericht zu generieren](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn ein Treffer gefunden wird.

Die verschiedenen Attributionsauslösertypen werden auf unterschiedliche Weise registriert, die in den folgenden Abschnitten detailliert beschrieben werden — siehe [HTML-basierte Attributionsauslöser](#html-basierte_attributionsauslöser) und [JavaScript-basierte Attributionsauslöser](#javascript-basierte_attributionsauslöser).

Was jedoch im Hintergrund passiert, um Auslöser zu registrieren, nach Übereinstimmungen zu suchen usw., ist in allen Fällen dasselbe.

1. Alle Auslösertypen senden einen {{httpheader("Attribution-Reporting-Eligible")}}-Header in einer Anfrage, der angibt, dass die Antwort berechtigt ist, einen Auslöser zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort einschließen. Sein Wert ist ein JSON-String, der Daten enthält, die in generierten Berichten enthalten sein können, wie die ID des Auslösers sowie Prioritäts- und Deduplizierungswerte.

   Das folgende Beispiel soll mit einer [Ereignisebene-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) Attributionsquelle übereinstimmen:

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
   - `"event_trigger_data"`: Ein Objekt, das Daten über den Auslöser darstellt. Dies beinhaltet:
     - `"trigger_data"`: Die mit dem Auslöser verbundenen Daten, die typischerweise verwendet werden, um Ereignisse wie „Benutzer hat Artikel in den Warenkorb gelegt“ oder „Benutzer hat sich für die Mailingliste angemeldet“ anzuzeigen. Dieser Wert wird im generierten Bericht enthalten sein, wenn auch möglicherweise basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)-Feld der attribuierten Quelle modifiziert.

       > [!NOTE]
       > Die verwendeten Werte zur Darstellung jedes Ereignisses und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler festgelegt. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um vom Browser bei der Registrierung eines Auslösers der Quelle zugeordnet zu werden.

     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionsauslöser darstellt. Weitere Informationen finden Sie unter [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um doppelte Zuschreibungen zu verhindern — zum Beispiel, wenn ein Benutzer denselben Artikel mehrere Male in einen Warenkorb legt. Weitere Informationen finden Sie unter [Vermeidung von Duplikaten in Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication).

   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie zusammen mit dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Auslöser, der mit einer [Zusammenfassung-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) Attributionsquelle übereinstimmen soll, erfordert die unten gezeigten Felder:

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
   - `"aggregatable_trigger_data"`: Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellschlüssel angewendet wird.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften darstellt, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen.

   Siehe erneut {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

3. Wenn der Benutzer mit dem Attributionsauslöser interagiert, versucht der Browser, den Auslöser mit Attributionsquellen-Einträgen abzugleichen, die im privaten lokalen Cache des Browsers gespeichert sind. Für eine erfolgreiche Übereinstimmung muss das [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) des `Attribution-Reporting-Register-Trigger` mit einem der im {{httpheader("Attribution-Reporting-Register-Source")}} bereitgestellten Werte übereinstimmen, und die Website (Schema + {{Glossary("eTLD", "eTLD+1")}}) der obersten Seite, auf der der Auslöser registriert wird, muss:
   - mit der Website von mindestens einem der im Quellendaten angegebenen `destination`s übereinstimmen.
   - gleicher Herkunft sein mit der Anfrage, die die Quellregistrierung spezifizierte.

   > [!NOTE]
   > Diese Anforderungen bieten Datenschutz, aber auch Flexibilität — die Quelle _und_ der Auslöser können potenziell in einem {{htmlelement("iframe")}} eingebettet oder in der obersten Website platziert werden.

   Es gibt viele andere Faktoren, die eine erfolgreiche Übereinstimmung verhindern; zum Beispiel:
   - Die Filter des Auslösers stimmen nicht mit den Filterdaten der Quelle überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)-Einstellung der Quelle führt dazu, dass keine Übereinstimmung erfolgt.
   - Das [`"max_event_level_reports"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#max_event_level_reports)-Limit der Quelle ist erreicht.
   - Eine erfolgreiche Übereinstimmung wird aufgrund des randomisierten Antwortalgorithmus des Browsers nicht gemeldet. Siehe [Hinzufügen von Rauschen zu Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für weitere Details.

4. Wenn eine erfolgreiche Übereinstimmung gefunden wird, [generiert der Browser einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), basierend auf den Quell- und Auslösedaten, und sendet ihn an einen Berichtsendepunkt.

> [!NOTE]
> Attributionsauslöser können nicht auf {{htmlelement("a")}}-Elementen oder in [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen registriert werden, wie es bei Attributionsquellen der Fall ist.

## HTML-basierte Attributionsauslöser

HTML-basierte Attributionsauslöser können zum Erkennen von Konversionen auf einer Seite verwendet werden, wenn diese zum ersten Mal geladen wird — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Zum Beispiel, wenn ein Benutzer auf einen Attributionsquellen-Link auf der Seite eines Verlegers geklickt hat und zur Seite des Werbetreibenden navigiert, können Sie den Attributionsauslöser registrieren und den Browser dazu bringen, sofort beim Laden der Seite des Werbetreibenden versuchen, mit gespeicherten Quellen übereinzustimmen.

Sie können einen Attributionsauslöser registrieren, indem Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen. Dies kann bei {{htmlelement("img")}}- und {{htmlelement("script")}}-Elementen durchgeführt werden.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL innerhalb des Werts anzugeben, um die Registrierungsanfrage zu senden; siehe [Angeben einer URL innerhalb von attributionsrc](#angeben_einer_url_innerhalb_von_attributionsrc) für weitere Details.

Hier ist ein Beispiel für ein `<img>`-Element:

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

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit der Bilddatei erhält (wenn das `load`-Ereignis ausgelöst wird). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für die Attributionsberichterstattung verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit dem Skript erhält.

## JavaScript-basierte Attributionsauslöser

JavaScript-basierte Attributionsauslöser sind vielseitiger als HTML-basierte Attributionsauslöser. Sie können den Browser dazu bringen, basierend auf einer benutzerdefinierten Interaktion, wie dem Klicken auf ein benutzerdefiniertes Element oder dem Absenden eines Formulars, mit einer gespeicherten Quelle abzugleichen.

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

- Einen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt ausführen:

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

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort von der Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-Blob oder alles andere sein, das für Ihre App sinnvoll ist.

## Angeben einer URL innerhalb von attributionsrc

In den obigen Beispielen bleibt das `attributionsrc`-Attribut leer und nimmt den Wert eines leeren Strings an. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource enthält, derselbe ist, den Sie auch für die Registrierung verwenden möchten, d.h. den {{httpheader("Attribution-Reporting-Eligible")}}-Header zu erhalten und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header zu antworten.

Es könnte jedoch sein, dass sich die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server befindet, oder Sie möchten die Registrierung des Attributionsauslösers auf einem anderen Server handhaben. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcennachfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprung der Ressource an die in `attributionsrc` angegebenen URLs gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Zum Beispiel, im Fall eines `<img>`-Elements könnten Sie die URL im `attributionsrc`-Attribut deklarieren:

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

- [Attribution Reporting Header Validation Tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
