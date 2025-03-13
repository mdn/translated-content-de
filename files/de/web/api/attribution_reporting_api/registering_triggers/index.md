---
title: Registrierung von Attributionsauslösern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Attributionsauslöser registriert werden.

## Grundlegende Methodik

Sobald Sie [Attributionsquellen registriert haben](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources), müssen Sie Attributionsauslöser registrieren. Dies sind Interaktionen auf einer Website, bei denen eine Konversion gemessen werden soll (zum Beispiel kann das Klicken auf einen "Kaufen"-Button auf der Website eines Werbetreibenden anzeigen, dass eine Konversion stattgefunden haben könnte). Der Browser versucht dann, den Attributionsauslöser einem Attributionsquelleneintrag zuzuordnen, der in einer privaten lokalen Speicherpartition gespeichert ist, und [einen Bericht zu generieren](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn eine Übereinstimmung gefunden wird.

Die verschiedenen Arten von Attributionsauslösern werden auf unterschiedliche Weise registriert, wie in den folgenden Abschnitten beschrieben wird — siehe [HTML-basierte Attributionsauslöser](#html-basierte_attributionsauslöser) und [JavaScript-basierte Attributionsauslöser](#javascript-basierte_attributionsauslöser).

Was jedoch im Hintergrund passiert, um Auslöser zu registrieren, nach Übereinstimmungen zu suchen usw., ist in allen Fällen gleich.

1. Alle Auslösertypen senden einen {{httpheader("Attribution-Reporting-Eligible")}}-Header bei einer Anfrage, der anzeigt, dass die Antwort zur Registrierung eines Auslösers berechtigt ist. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort senden. Sein Wert ist ein JSON-String, der Daten enthält, die in generierte Berichte aufgenommen werden können, wie z.B. die ID des Auslösers, Prioritäts- und Deduplizierungswerte.

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
     - `"trigger_data"`: Die mit dem Auslöser verknüpften Daten, die typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel zum Warenkorb hinzugefügt" oder "Benutzer hat sich für den Newsletter angemeldet" anzuzeigen. Dieser Wert wird, falls vorhanden, in den generierten Bericht aufgenommen, obwohl er basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)-Feld der zugeordneten Quelle modifiziert wird.
       > [!NOTE]
       > Die Werte, die verwendet werden, um jedes Ereignis zu repräsentieren, und die Anzahl der Elemente im Array sind völlig willkürlich und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um von der Quelle durch den Browser zugeordnet zu werden, wenn ein Auslöser registriert wird.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionsauslöser darstellt. Siehe [Prioritäten und Einschränkungen von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributionen dupliziert werden — zum Beispiel, wenn ein Benutzer denselben Artikel mehrfach in einen Warenkorb legt. Siehe [Vermeidung von Duplikationen in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication) für weitere Informationen.
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.

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

   - `"aggregatable_trigger_data"`: Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellenschlüssel angewendet werden soll.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden Datenpunkt im `"aggregatable_trigger_data"` definieren.

   Wiederum, siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

3. Wenn der Benutzer mit dem Attributionsauslöser interagiert, versucht der Browser, den Auslöser mit einem Attributionsquelleneintrag zuzuordnen, der im privaten lokalen Cache des Browsers gespeichert ist. Für eine erfolgreiche Übereinstimmung muss die `Attribution-Reporting-Register-Trigger`'s [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) einem der im {{httpheader("Attribution-Reporting-Register-Source")}}'s [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data) bereitgestellten Werte entsprechen, und die Website (Schema + {{Glossary("eTLD", "eTLD+1")}}) der obersten Seite, auf der der Auslöser registriert wird, muss:

   - mit der Site von mindestens einem der im zugehörigen Daten der Quelle angegebenen `destination`s übereinstimmen.
   - gleich-origin sein mit der Anfrage, die die Quellenregistrierung spezifizierte.

   > [!NOTE]
   > Diese Anforderungen bieten Datenschutz, aber auch Flexibilität — die Quelle _und_ der Auslöser können potenziell in einem {{htmlelement("iframe")}} eingebettet oder auf der obersten Website platziert werden.

   Es gibt viele andere Faktoren, die ein erfolgreiches Übereinstimmungsergebnis verhindern können; zum Beispiel:

   - Die Filter des Auslösers stimmen nicht mit den Filterdaten der Quelle überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Details).
   - Die [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)-Einstellung der Quelle führt dazu, dass keine Übereinstimmung erfolgt.
   - Das Limit der Quelle für [`"max_event_level_reports"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) wurde erreicht.
   - Ein erfolgreicher Abgleich wird aufgrund des randomisierten Antwortalgorithmus des Browsers nicht gemeldet. Siehe [Rauschen zu Berichten hinzufügen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für weitere Details.

4. Wenn eine erfolgreiche Übereinstimmung gefunden wird, erstellt der Browser [einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Quellen- und Auslöserdaten und sendet ihn an einen Berichtsendepunkt.

> [!NOTE]
> Attributionauslöser können nicht auf {{htmlelement("a")}}-Elementen oder [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen registriert werden wie Attributionsquellen.

## HTML-basierte Attributionsauslöser

HTML-basierte Attributionsauslöser können verwendet werden, um Konversionen auf einer Seite zu erkennen, wenn diese zum ersten Mal geladen wird — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Zum Beispiel, wenn ein Benutzer auf einen Attributionsquellenlink auf der Seite eines Publishers geklickt und zur Seite des Werbetreibenden navigiert hat, können Sie den Attributionsauslöser registrieren und den Browser veranlassen, einen Abgleich mit gespeicherten Quellen-Einträgen zu versuchen, sobald die Seite des Werbetreibenden geladen wird.

Sie können einen Attributionsauslöser registrieren, indem Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen. Dies kann bei {{htmlelement("img")}}- und {{htmlelement("script")}}-Elementen erfolgen.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL innerhalb des Werts anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [Angeben einer URL innerhalb von attributionsrc](#angeben_einer_url_innerhalb_von_attributionsrc) für weitere Details.

Hier ist ein `<img>`-Element Beispiel:

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

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit der Bilddatei erhält (wenn das `load`-Ereignis ausgelöst wird). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für die Attributionsberichterstattung verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit dem Skript erhält.

## JavaScript-basierte Attributionsauslöser

JavaScript-basierte Attributionsauslöser sind vielseitiger als HTML-basierte Attributionsauslöser. Sie können den Browser veranlassen, einen Abgleich mit einer gespeicherten Quelle basierend auf einer benutzerdefinierten Interaktion zu versuchen, zum Beispiel durch Klicken auf ein benutzerdefiniertes Element oder Einreichen eines Formulars.

Um einen skriptbasierten Attributionsauslöser zu registrieren, können Sie entweder:

- Eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage mit der `attributionReporting`-Option senden:

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

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt für den Aufruf:

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
> Die Anfrage kann sich auf jede Ressource beziehen. Sie muss nicht direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage nach JSON, einfachem Text, einem Bild-Blob oder was auch immer für Ihre App sinnvoll ist, sein.

## Angeben einer URL innerhalb von attributionsrc

In den obigen Beispielen ist das `attributionsrc`-Attribut leer gelassen, es nimmt den Wert eines leeren Strings. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, den Sie auch für die Verwaltung der Registrierung verwenden möchten, d.h. den {{httpheader("Attribution-Reporting-Eligible")}}-Header zu erhalten und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header zu antworten.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem Server ist, den Sie kontrollieren, oder Sie einfach die Registrierung des Attributionsauslösers auf einem anderen Server verwalten möchten. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URLs zusätzlich zum Ursprung der Ressource gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

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

- [Validierungstool für Attribution Reporting Header](https://wicg.github.io/attribution-reporting-api/validate-headers)
