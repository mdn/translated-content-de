---
title: Registrierung von Attributionsauslösern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Sie Attributionsauslöser registrieren.

## Grundlegende Methodik

Nachdem Sie [Attributionsquellen registriert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources) haben, müssen Sie Attributionsauslöser registrieren. Dies sind Interaktionen auf einer Website, bei denen eine Konversion gemessen werden soll (zum Beispiel kann das Klicken auf eine "Kaufen"-Schaltfläche auf der Website eines Werbetreibenden darauf hinweisen, dass möglicherweise eine Konversion stattgefunden hat). Der Browser versucht dann, den Attributionsauslöser mit einem Attributionsquellen-Eintrag abzugleichen, der in einer privaten lokalen Speicherpartition gespeichert ist, und [einen Bericht zu erstellen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn ein Treffer gefunden wird.

Die verschiedenen Arten von Attributionsauslösern werden auf unterschiedliche Weise registriert, die in den untenstehenden Abschnitten detailliert beschrieben sind – siehe [HTML-basierte Attributionsauslöser](#html-basierte_attributionsauslöser) und [JavaScript-basierte Attributionsauslöser](#javascript-basierte_attributionsauslöser).

Jedoch ist das, was im Hintergrund passiert, um Auslöser zu registrieren, nach Treffern zu suchen usw., in allen Fällen gleich.

1. Alle Auslösertypen senden einen {{httpheader("Attribution-Reporting-Eligible")}} Header bei einer Anfrage, der anzeigt, dass die Antwort geeignet ist, einen Auslöser zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible` Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort senden. Der Wert ist ein JSON-String, der Daten enthält, die in generierte Berichte einfließen können, wie z.B. die ID des Auslösers, Prioritäts- und Duplikationswerten.

   Das folgende Beispiel ist dafür gedacht, mit einer [Ereignis-Ebene Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) Attributionsquelle zusammenzupassen:

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
   - `"event_trigger_data"`: Ein Objekt, das Daten über den Auslöser darstellt. Dies schließt ein:
     - `"trigger_data"`: Die mit dem Auslöser verbundenen Daten, die in der Regel verwendet werden, um Ereignisse wie "Benutzer hat Artikel in den Einkaufswagen gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" zu kennzeichnen. Dieser Wert wird in den generierten Bericht aufgenommen, falls vorhanden, obwohl er möglicherweise basierend auf dem Feld [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) der attribuierten Quelle modifiziert wird.
       > [!NOTE]
       > Die zum Darstellen jedes Ereignisses verwendeten Werte und die Anzahl der Elemente im Array sind vollständig willkürlich und von Ihnen als Entwickler festgelegt. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um vom Browser bei der Registrierung eines Auslösers der Quelle zugeordnet zu werden.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionsauslöser darstellt. Siehe [Prioritäten und Grenzen von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attribuierungen dupliziert werden – zum Beispiel, wenn ein Benutzer dasselbe Element mehrmals in einen Einkaufswagen legt. Siehe [Vermeidung von Duplikaten in Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication) für mehr Informationen.
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie möchten, dass ein [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht erstellt wird.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Auslöser, der für eine [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) Attributionsquelle bestimmt ist, benötigt die unten gezeigten Felder:

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
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen.

   Auch hier siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

3. Wenn der Benutzer mit dem Attributionsauslöser interagiert, versucht der Browser, den Auslöser mit allen Attributionsquellen-Einträgen abzugleichen, die im privaten lokalen Cache des Browsers gespeichert sind. Für einen erfolgreichen Abgleich muss das `Attribution-Reporting-Register-Trigger`-[`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) mit einem der im {{httpheader("Attribution-Reporting-Register-Source")}} angegebenen Werte übereinstimmen, und die Website (Schema + {{Glossary("eTLD", "eTLD+1")}}) der obersten Seite, auf der der Trigger registriert wird, muss:
   - mit mindestens einer der im Quellbezogenen Daten angegebenen `destination`s übereinstimmen.
   - gleiche Herkunft mit der Anfrage haben, die die Quellregistrierung spezifiziert hat.

   > [!NOTE]
   > Diese Anforderungen bieten Privatschutz, aber auch Flexibilität — die Quelle _und_ der Auslöser können potenziell in einem {{htmlelement("iframe")}} eingebettet oder auf der obersten Website platziert werden.

   Es gibt viele weitere Faktoren, die einen erfolgreichen Match-Ausgang verhindern können; zum Beispiel:
   - Die Filter des Auslösers stimmen nicht mit den Filtern der Quelle überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die Einstellung [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) der Quelle führt dazu, dass kein Match zustande kommt.
   - Das Limit [`"max_event_level_reports"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) der Quelle wurde erreicht.
   - Ein erfolgreicher Match wird aufgrund des randomisierten Antwort-Algorithmus des Browsers nicht gemeldet. Siehe [Hinzufügen von Rauschen zu Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für weitere Details.

4. Wenn ein erfolgreicher Abgleich gefunden wird, [erstellt der Browser einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Quell- und Auslöserdaten und sendet ihn an einen Berichtsendpunkt.

> [!NOTE]
> Attributionsauslöser können nicht auf {{htmlelement("a")}}-Elementen oder [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen registriert werden, wie es bei Attributionsquellen möglich ist.

## HTML-basierte Attributionsauslöser

HTML-basierte Attributionsauslöser können verwendet werden, um Konversionen auf einer Seite zu erkennen, wenn diese zum ersten Mal geladen wird – oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Zum Beispiel, wenn ein Benutzer auf einen Attributionsquellen-Link auf der Seite eines Herausgebers geklickt hat und zur Seite des Werbetreibenden navigiert ist, können Sie den Attributionsauslöser registrieren und den Browser veranlassen, einen Abgleich mit gespeicherten Quell-Einträgen zu versuchen, sobald die Seite des Werbetreibenden geladen wird.

Sie können einen Attributionsauslöser registrieren, indem Sie das Attribut `attributionsrc` einem geeigneten Element hinzufügen. Dies kann an {{htmlelement("img")}} und {{htmlelement("script")}} Elementen erfolgen.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL innerhalb des Werts anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [Angabe einer URL innerhalb von attributionsrc](#angabe_einer_url_innerhalb_von_attributionsrc) für weitere Details.

Hier ein `<img>`-Element-Beispiel:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  alt=""
  width="1"
  height="1"
  attributionsrc />
```

Dies könnten Sie auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit der Bilddatei erhält (wenn das `load`-Ereignis ausgelöst wird). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können – es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für Attributionsberichterstattungen verwendet wird.

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

JavaScript-basierte Attributionsauslöser sind vielseitiger als HTML-basierte Attributionsauslöser. Sie können den Browser dazu bringen, bei einer benutzerdefinierten Interaktion einen Abgleich mit einer gespeicherten Quelle zu versuchen, zum Beispiel beim Klicken auf ein benutzerdefiniertes Element oder beim Einreichen eines Formulars.

Um einen skriptbasierten Attributionsauslöser zu registrieren, können Sie entweder:

- Eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage mit der Option `attributionReporting` senden:

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

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt senden:

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

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort auf die Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-Blob oder was auch immer für Ihre App sinnvoll ist, sein.

## Angabe einer URL innerhalb von attributionsrc

In den obigen Beispielen bleibt das Attribut `attributionsrc` leer und hat den Wert eines leeren Strings. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, der auch die Registrierung bearbeiten, d.h. den {{httpheader("Attribution-Reporting-Eligible")}}-Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten soll.

Es könnte jedoch der Fall sein, dass die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie einfach die Registrierung des Attributionsauslösers auf einem anderen Server abwickeln möchten. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URLs zusätzlich zum Ressourcenursprung gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Zum Beispiel können Sie im Fall eines `<img>`-Elements die URL im `attributionsrc`-Attribut angeben:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  alt=""
  attributionsrc="https://my-separate-tracking-site.example.com"
  width="1"
  height="1" />
```

Oder in JavaScript über die Eigenschaft `attributionSrc`:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "https://my-separate-tracking-site.example.com";
```

## Siehe auch

- [Attribution Reporting Header Validation Tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
