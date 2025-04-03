---
title: Registrierung von Attributionsauslösern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Attributionsauslöser registriert werden.

## Grundlegende Methodik

Nachdem Sie [Attributionsquellen registriert haben](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources), müssen Sie Attributionsauslöser registrieren. Dies sind Interaktionen auf einer Seite, bei denen eine Conversion gemessen werden soll (zum Beispiel kann das Klicken auf einen "Kaufen"-Button auf der Website eines Werbetreibenden darauf hinweisen, dass eine Conversion stattgefunden hat). Der Browser versucht dann, den Attributionsauslöser einer Attributionsquelleneintragung zuzuordnen, die in einer privaten lokalen Speicherpartition gespeichert ist, und [einen Bericht zu generieren](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn eine Übereinstimmung gefunden wird.

Die verschiedenen Arten von Attributionsauslösern werden auf unterschiedliche Weise registriert, die in den folgenden Abschnitten näher beschrieben werden — siehe [HTML-basierte Attributionsauslöser](#html-basierte_attributionsauslöser) und [JavaScript-basierte Attributionsauslöser](#javascript-basierte_attributionsauslöser).

Allerdings ist das, was im Hintergrund passiert, um Auslöser zu registrieren, Übereinstimmungen zu suchen usw., in allen Fällen dasselbe.

1. Alle Auslösertypen senden einen {{httpheader("Attribution-Reporting-Eligible")}} Header mit einer Anfrage, der anzeigt, dass die Antwort berechtigt ist, einen Auslöser zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible` Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort einschließen. Sein Wert ist eine JSON-Zeichenkette, die Daten enthält, die in generierte Berichte aufgenommen werden können, wie zum Beispiel die ID des Auslösers sowie Prioritäts- und Entdoppelungswerte.

   Das folgende Beispiel soll mit einer Attributionsquelle eines [Event-Level-Berichts](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) übereinstimmen:

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

   - `"event_trigger_data"`: Ein Objekt, das Daten über den Auslöser darstellt. Dies umfasst:
     - `"trigger_data"`: Die mit dem Auslöser verknüpften Daten, die typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für den Newsletter angemeldet" anzuzeigen. Dieser Wert wird im generierten Bericht enthalten sein, sofern vorhanden, obwohl er basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Feld der zugeordneten Quelle geändert werden kann.
       > [!NOTE]
       > Die zur Darstellung jedes Ereignisses verwendeten Werte und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um der Quelle vom Browser zugeordnet zu werden, wenn ein Auslöser registriert wird.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionsauslöser darstellt. Siehe [Prioritäten und Grenzen von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, der zur Vermeidung von doppelten Attributionen verwendet werden kann — zum Beispiel, wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Weitere Informationen finden Sie unter [Vermeidung von Duplikationen in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication).
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Auslöser, der mit einer Attributionsquelle eines [Zusammenfassungsberichts](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) übereinstimmen soll, erfordert die unten gezeigten Felder:

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

   - `"aggregatable_trigger_data"`: Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellschlüssel angewendet werden soll.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden Datenpunkt im `"aggregatable_trigger_data"` definieren.

   Auch hier siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

3. Wenn der Benutzer mit dem Attributionsauslöser interagiert, versucht der Browser, den Auslöser mit den im Browser gespeicherten Attributionsquellen zu vergleichen. Für eine erfolgreiche Übereinstimmung muss das `Attribution-Reporting-Register-Trigger`'s [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) einen der angegebenen Werte im {{httpheader("Attribution-Reporting-Register-Source")}}'s [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data) entsprechen, und die Website (Schema + {{Glossary("eTLD", "eTLD+1")}}) der Top-Level-Seite, auf der der Auslöser registriert wird, muss:

   - mit der Website von mindestens einem der im zugehörigen Quelldatensatz angegebenen `destination`s übereinstimmen.
   - im gleichen Ursprung mit der Anfrage sein, die die Quellenregistrierung spezifiziert hat.

   > [!NOTE]
   > Diese Anforderungen bieten Datenschutz, aber auch Flexibilität — die Quelle _und_ der Auslöser können potenziell in einem {{htmlelement("iframe")}} eingebettet oder auf der obersten Website platziert werden.

   Es gibt viele andere Faktoren, die ein erfolgreiches Übereinstimmungsergebnis verhindern; zum Beispiel:

   - Die Filter des Auslösers stimmen nicht mit den Filterdaten der Quelle überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die Einstellung `"trigger_data_matching"` der Quelle führt dazu, dass keine Übereinstimmung stattfindet.
   - Das Limit der `"max_event_level_reports"` der Quelle wurde erreicht.
   - Eine erfolgreiche Übereinstimmung wird aufgrund des randomisierten Antwortalgorithmus des Browsers nicht gemeldet. Siehe [Hinzufügen von Rauschen zu Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für weitere Details.

4. Wenn eine erfolgreiche Übereinstimmung gefunden wird, [generiert der Browser einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Quell- und Auslöserdaten und sendet ihn an einen Berichtsendepunkt.

> [!NOTE]
> Attributionsauslöser können nicht auf {{htmlelement("a")}} Elementen oder [`Window.open()`](/de/docs/Web/API/Window/open) Aufrufen registriert werden, wie es Attributionsquellen können.

## HTML-basierte Attributionsauslöser

HTML-basierte Attributionsauslöser können verwendet werden, um Conversions auf einer Seite zu erkennen, wenn diese zum ersten Mal geladen wird — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Zum Beispiel, wenn ein Benutzer auf einen Attributionsquellen-Link auf der Seite eines Herausgebers geklickt hat und zur Seite des Werbetreibenden navigiert, Sie können den Attributionsauslöser registrieren und den Browser dazu bringen, sofort nach dem Laden der Werbeseite eine Übereinstimmung mit gespeicherten Quelleneinträgen zu versuchen.

Sie können einen Attributionsauslöser registrieren, indem Sie das `attributionsrc` Attribut zu einem entsprechenden Element hinzufügen. Dies kann bei {{htmlelement("img")}} und {{htmlelement("script")}} Elementen geschehen.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL innerhalb des Werts anzugeben, um die Registrierungsanfrage an diese zu senden; siehe [Angeben einer URL innerhalb von attributionsrc](#angeben_einer_url_innerhalb_von_attributionsrc) für weitere Details.

Hier ist ein `<img>` Element Beispiel:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  width="1"
  height="1"
  attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attributionsquelle zu vergleichen, wenn der Browser die Antwort erhält, die die Bilddatei enthält (wenn das `load` Ereignis ausgelöst wird). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für die Attributionsberichterstattung verwendet wird.

Ein {{htmlelement("script")}} Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attributionsquelle zu vergleichen, wenn der Browser die Antwort enthält, die das Skript enthält.

## JavaScript-basierte Attributionsauslöser

JavaScript-basierte Attributionsauslöser sind vielseitiger als HTML-basierte Attributionsauslöser. Sie können den Browser auslösen, um eine Übereinstimmung mit einer gespeicherten Quelle basierend auf einer benutzerdefinierten Interaktion zu versuchen, z. B. durch Klicken auf ein benutzerdefiniertes Element oder durch Absenden eines Formulars.

Um einen skriptbasierten Attributionsauslöser zu registrieren, können Sie entweder:

- Eine [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage senden, die die `attributionReporting` Option enthält:

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

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt aufgerufen senden:

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

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attributionsquelle zu vergleichen, wenn der Browser die Antwort auf die Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann sich auf jede Ressource beziehen. Sie muss nicht direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bildblob oder was auch immer für Ihre App sinnvoll ist, sein.

## Angeben einer URL innerhalb von attributionsrc

In den obigen Beispielen wird das `attributionsrc` Attribut leer gelassen und erhält den Wert einer leeren Zeichenkette. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, den Sie auch für die Verarbeitung der Registrierung verwenden möchten, d.h. den {{httpheader("Attribution-Reporting-Eligible")}} Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten.

Es kann jedoch sein, dass die angeforderte Ressource nicht auf einem Server ist, den Sie kontrollieren, oder Sie die Registrierung des Attributionsauslösers auf einem anderen Server handhaben möchten. In solchen Fällen können Sie eine oder mehrere URLs als Wert für `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionsrc` angegebenen URLs zusätzlich zum Ressource-Ursprung gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Zum Beispiel könnten Sie im Fall eines `<img>` Elements die URL im `attributionsrc` Attribut angeben:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
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

- [Attribution Reporting Header Validation Tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
