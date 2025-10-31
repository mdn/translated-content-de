---
title: Registrierung von Attribut-Auslösern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie man Attribut-Auslöser registriert.

## Grundlegende Methodik

Sobald Sie [Attribut-Quellen registriert haben](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources), müssen Sie Attribut-Auslöser registrieren. Diese sind Interaktionen auf einer Website, bei denen eine Konversion gemessen werden soll (zum Beispiel kann das Klicken auf einen "Kaufen"-Button auf der Seite eines Werbetreibenden anzeigen, dass eine Konversion stattgefunden haben könnte). Der Browser wird dann versuchen, den Attribut-Auslöser mit einem Attribut-Quelleintrag abzugleichen, der in einer privaten lokalen Speicherpartition gespeichert ist, und [einen Bericht zu erstellen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn ein Treffer gefunden wird.

Die verschiedenen Arten von Attribut-Auslösern werden auf unterschiedliche Weise registriert, die in den folgenden Abschnitten detailliert beschrieben werden — siehe [HTML-basierte Attribut-Auslöser](#html-basierte_attribut-auslöser) und [JavaScript-basierte Attribut-Auslöser](#javascript-basierte_attribut-auslöser).

Jedoch ist das, was im Hintergrund zur Registrierung von Auslösern, zum Suchen nach Treffern usw. geschieht, in allen Fällen dasselbe.

1. Alle Auslöser-Typen senden einen {{httpheader("Attribution-Reporting-Eligible")}} Header in einer Anfrage, der anzeigt, dass die Antwort berechtigt ist, einen Auslöser zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible` Header enthält, kann er zusammen mit der Antwort einen {{httpheader("Attribution-Reporting-Register-Trigger")}} einschließen. Sein Wert ist ein JSON-String, der Daten enthält, die in generierte Berichte einbezogen werden können, wie die ID des Auslösers sowie Prioritäts- und Deduplikationswerte.

   Das folgende Beispiel soll mit einer [Ereignis-Ebenen-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) Attribut-Quelle übereinstimmen:

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
     - `"trigger_data"`: Die Daten, die mit dem Auslöser verbunden sind und typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für Mailingliste angemeldet" anzuzeigen. Dieser Wert wird in den generierten Bericht aufgenommen, wenn auch nur vorbehaltlich einer Veränderung basierend auf dem Feld [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) der zugeordneten Quelle.
       > [!NOTE]
       > Die zur Darstellung jedes Ereignisses verwendeten Werte und die Anzahl der Elemente im Array sind vollständig willkürlich und von Ihnen als Entwickler festgelegt. Das Array kann Werte enthalten, die nicht verwendet werden, aber im Array müssen Werte vorhanden sein, die von der Quelle durch den Browser zugeordnet werden, wenn ein Auslöser registriert wird.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attribut-Auslöser darstellt. Siehe [Berichtprioritäten und Limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Zuordnungen dupliziert werden — zum Beispiel, wenn ein Benutzer denselben Artikel mehrere Male in den Warenkorb legt. Siehe [Vermeidung von Duplikation in Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication) für weitere Informationen.
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Legen Sie dies fest, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Auslöser, der mit einer [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) Attribut-Quelle übereinstimmen soll, erfordert die folgenden Felder:

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
   - `"aggregatable_trigger_data"`: Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellen-Schlüssel angewendet wird.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen.

   Siehe erneut {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

3. Wenn der Benutzer mit dem Attribut-Auslöser interagiert, versucht der Browser, den Auslöser mit einem im privaten lokalen Cache des Browsers gespeicherten Attribut-Quelleintrag abzugleichen. Für einen erfolgreichen Treffer muss die `Attribution-Reporting-Register-Trigger`'s [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) mit einem der im {{httpheader("Attribution-Reporting-Register-Source")}} angegebenen Werte übereinstimmen, und die Website (Schema + {{Glossary("eTLD", "eTLD+1")}}) der obersten Seite, auf der der Auslöser registriert wird, muss:
   - mit der Website von mindestens einem der im zugehörigen Datensatz der Quelle angegebenen `destination`s übereinstimmen.
   - gleichherkunftlich mit der Anfrage sein, die die Quellregistrierung spezifizierte.

   > [!NOTE]
   > Diese Anforderungen bieten Datenschutz, aber auch Flexibilität — die Quelle _und_ der Auslöser können möglicherweise in einem {{htmlelement("iframe")}} eingebettet sein oder auf der obersten Website platziert sein.

   Es gibt viele andere Faktoren, die einen erfolgreichen Treffer verhindern können, zum Beispiel:
   - Die Filter des Auslösers stimmen nicht mit den Filterdaten der Quelle überein (Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die Einstellung [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) der Quelle führt dazu, dass kein Treffer erzielt wird.
   - Das Limit der Quelle für [`"max_event_level_reports"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) wurde erreicht.
   - Ein erfolgreicher Treffer wird aufgrund des randomisierten Antwortalgorithmus des Browsers nicht gemeldet. Siehe [Rauschen in Berichte einfügen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für weitere Details.

4. Wenn ein erfolgreicher Treffer gefunden wird, [erstellt der Browser einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Quell- und Auslöser-Daten und sendet ihn an einen Berichts-Endpunkt.

> [!NOTE]
> Attribut-Auslöser können nicht auf {{htmlelement("a")}} Elementen oder [`Window.open()`](/de/docs/Web/API/Window/open) Aufrufen registriert werden wie Attribut-Quellen es können.

## HTML-basierte Attribut-Auslöser

HTML-basierte Attribut-Auslöser können verwendet werden, um Konversionen zu erfassen, wenn eine Seite erstmals geladen wird — oder genauer, wenn ein `<img>` oder `<script>` geladen wird. Zum Beispiel, wenn ein Benutzer auf einem Herausgeberseite auf einen Attribut-Quellenlink geklickt hat und zur Seite des Werbetreibenden navigiert ist, können Sie den Attribut-Auslöser registrieren und den Browser dazu veranlassen, sofort nach dem Laden der Werbeseite nach gespeicherten Quellen-Einträgen zu suchen.

Sie können einen Attribut-Auslöser registrieren, indem Sie das `attributionsrc` Attribut zu einem geeigneten Element hinzufügen. Dies kann bei {{htmlelement("img")}} und {{htmlelement("script")}} Elementen gemacht werden.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL innerhalb des Wertes zu spezifizieren, an die die Registrierungsanfrage gesendet werden soll; siehe [Angeben einer URL innerhalb von attributionsrc](#angeben_einer_url_innerhalb_von_attributionsrc) für weitere Details.

Hier ist ein `<img>` Element-Beispiel:

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

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attribut-Quelle abzugleichen, wenn der Browser die Antwort mit der Bilddatei erhält (wenn das `load` Ereignis ausgelöst wird). Beachten Sie, dass Benutzer das Bild möglicherweise gar nicht wahrnehmen können — es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für Zuordnungsberichte verwendet wird.

Ein {{htmlelement("script")}} Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attribut-Quelle abzugleichen, wenn der Browser die Antwort mit dem Skript erhält.

## JavaScript-basierte Attribut-Auslöser

JavaScript-basierte Attribut-Auslöser sind vielseitiger als HTML-basierte Attribut-Auslöser. Sie können den Browser dazu bringen, bei einer benutzerdefinierten Interaktion mit einer gespeicherten Quelle einen Abgleich zu versuchen, zum Beispiel beim Klicken auf ein benutzerdefiniertes Element oder beim Abschicken eines Formulars.

Um einen skriptbasierten Attribut-Auslöser zu registrieren, können Sie entweder:

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

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attribut-Quelle abzugleichen, wenn der Browser die Antwort von der fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, einen Bild-BLOB oder alles andere sein, was für Ihre App sinnvoll ist.

## Angeben einer URL innerhalb von attributionsrc

In den obigen Beispielen bleibt das `attributionsrc` Attribut leer und nimmt den Wert eines leeren Strings an. Dies ist in Ordnung, wenn der Server, auf dem die angeforderte Ressource gehostet wird, derselbe Server ist, den Sie auch zur Handhabung der Registrierung verwenden möchten, d.h. der den {{httpheader("Attribution-Reporting-Eligible")}} Header empfängt und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antwortet.

Es könnte jedoch der Fall sein, dass die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server ist, oder Sie möchten die Registrierung des Attribut-Auslösers auf einem anderen Server vornehmen lassen. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionsrc` angegebenen URLs zusätzlich zum Ursprungsserver der Ressource gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Zum Beispiel könnte im Fall eines `<img>` Elements die URL im `attributionsrc` Attribut deklariert werden:

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

- [Attribution Reporting Header Validierungstool](https://wicg.github.io/attribution-reporting-api/validate-headers)
