---
title: Registrierung von Attributions-Triggern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Attributions-Trigger registriert werden.

## Grundlegende Methodik

Sobald Sie [Attributionsquellen registriert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources) haben, müssen Sie Attributions-Trigger registrieren. Dies sind Interaktionen auf einer Website, bei denen eine Konversion gemessen werden soll (zum Beispiel kann das Klicken auf eine "Kaufen"-Schaltfläche auf der Website eines Werbeanbieters anzeigen, dass eine Konversion stattgefunden haben könnte). Der Browser versucht dann, den Attributions-Trigger mit einem Attributionsquellen-Eintrag abzugleichen, der in einer privaten lokalen Speicherpartition gespeichert ist, und [einen Bericht zu generieren](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn ein Treffer gefunden wird.

Die verschiedenen Typen von Attributions-Triggern werden auf unterschiedliche Weise registriert, die in den folgenden Abschnitten detailliert beschrieben werden — siehe [HTML-basierte Attributions-Trigger](#html-basierte_attributions-trigger) und [JavaScript-basierte Attributions-Trigger](#javascript-basierte_attributions-trigger).

Jedoch ist das, was hinter den Kulissen zur Registrierung von Triggern geschieht, um Übereinstimmungen zu suchen, etc., in allen Fällen gleich.

1. Alle Trigger-Typen senden einen {{httpheader("Attribution-Reporting-Eligible")}} Header in einer Anfrage, die angibt, dass die Antwort berechtigt ist, einen Trigger zu registrieren. Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible` Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort einschließen. Der Wert ist ein JSON-String, der Daten enthält, die in generierte Berichte aufgenommen werden können, wie z.B. die ID des Triggers sowie Prioritäts- und Deduplizierungswerte.

   Das folgende Beispiel ist zur Übereinstimmung mit einer [ereignisbezogenen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) Attributionsquelle gedacht:

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
   - `"event_trigger_data"`: Ein Objekt, das Daten über den Trigger repräsentiert. Dies umfasst:
     - `"trigger_data"`: Die dem Trigger zugeordneten Daten, die typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für Mailingliste angemeldet" anzuzeigen. Dieser Wert wird in den generierten Bericht aufgenommen, falls es einen gibt, obwohl er basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Feld der zugeordneten Quelle modifiziert werden kann.
       > [!NOTE]
       > Die Werte, die zur Darstellung jedes Ereignisses verwendet werden, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um von der Quelle durch den Browser zugeordnet zu werden, wenn ein Trigger registriert wird.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributions-Trigger repräsentiert. Weitere Informationen finden Sie unter [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributions doppelt gezählt werden — zum Beispiel, wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Weitere Informationen finden Sie unter [Vermeidung von Duplikaten in Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication).
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.

   Weitere Informationen zu allen verfügbaren Feldern finden Sie unter {{httpheader("Attribution-Reporting-Register-Trigger")}}.

   Ein Trigger, der mit einer [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) Attributionsquelle übereinstimmen soll, erfordert die unten gezeigten Felder:

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
   - `"aggregatable_trigger_data"`: Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellen-Schlüssel angewendet werden soll.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen.

   Weitere Informationen zu allen verfügbaren Feldern finden Sie unter {{httpheader("Attribution-Reporting-Register-Trigger")}}.

3. Wenn der Benutzer mit dem Attributions-Trigger interagiert, versucht der Browser, den Trigger mit allen im Browser gespeichertem lokalen Cache enthaltenen Attributionsquellen-Einträgen abzugleichen. Für einen erfolgreichen Treffer muss das `Attribution-Reporting-Register-Trigger`-[`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) einem der in der {{httpheader("Attribution-Reporting-Register-Source")}} angegebenen Werte entsprechen, und die Seite (Schema + {{Glossary("registrable_domain", "registrierbare Domain")}}) der oberen Ebene, auf der der Trigger registriert wird, muss:
   - mit der Seite von mindestens einem der in den zugehörigen Daten der Quelle angegebenen `destination` übereinstimmen.
   - gleich-origin mit der Anfrage sein, die die Quellregistrierung spezifiziert hat.

   > [!NOTE]
   > Diese Anforderungen bieten Datenschutz, aber auch Flexibilität — Quelle _und_ Trigger können möglicherweise in ein {{htmlelement("iframe")}} eingebettet oder auf der oberen Ebene der Website platziert sein.

   Es gibt viele andere Faktoren, die einen erfolgreichen Treffer verhindern; zum Beispiel:
   - Die Filter des Triggers stimmen nicht mit den Filterdaten der Quelle überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die Einstellung der Quelle [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) führt zu keinem Treffer.
   - Das Limit der Quelle [`"max_event_level_reports"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) wurde erreicht.
   - Ein erfolgreicher Treffer wird aufgrund des randomisierten Antwortalgorithmus des Browsers nicht gemeldet. Weitere Details hierzu finden Sie unter [Hinzufügen von Rauschen zu Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports).

4. Wenn ein erfolgreicher Treffer gefunden wird, [generiert der Browser einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Quellen- und Triggerdaten und sendet ihn an einen Berichts-Endpunkt.

> [!NOTE]
> Attributions-Trigger können nicht auf {{htmlelement("a")}} Elementen oder [`Window.open()`](/de/docs/Web/API/Window/open) Aufrufen registriert werden, wie es mit Attributionsquellen möglich ist.

## HTML-basierte Attributions-Trigger

HTML-basierte Attributions-Trigger können zum Detektieren von Konversionen auf einer Seite verwendet werden, wenn sie zum ersten Mal geladen wird — oder genauer gesagt, wenn ein `<img>`- oder `<script>`-Element geladen wird. Zum Beispiel, wenn ein Benutzer auf einen Attributionsquellen-Link auf einer Publisher-Seite geklickt hat und zur Seite eines Werbeanbieters navigiert, können Sie den Attributions-Trigger registrieren und den Browser dazu bringen, einen Abgleich mit gespeicherten Quellen-Einträgen zu versuchen, sobald die Seite des Werbeanbieters geladen wird.

Sie können einen Attributions-Trigger registrieren, indem Sie das `attributionsrc` Attribut zu einem entsprechenden Element hinzufügen. Dies kann auf {{htmlelement("img")}}- und {{htmlelement("script")}}-Elementen geschehen.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL innerhalb des Werts anzugeben, an die die Registrierungsanfrage gesendet werden soll; nähere Informationen finden Sie unter [Angeben einer URL innerhalb von attributionsrc](#angeben_einer_url_innerhalb_von_attributionsrc).

Hier ist ein Beispiel für ein `<img>`-Element:

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

In diesem Fall versucht der Browser, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit der Bilddatei erhält (wenn das `load`-Ereignis ausgelöst wird). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte ein 1x1 transparenter Tracking-Pixel sein, der nur für die Attributions-Berichterstattung verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte folgendermaßen aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall versucht der Browser, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit dem Skript erhält.

## JavaScript-basierte Attributions-Trigger

JavaScript-basierte Attributions-Trigger sind vielseitiger als HTML-basierte Attributions-Trigger. Sie können den Browser dazu veranlassen, einen Abgleich mit einer gespeicherten Quelle basierend auf einer benutzerdefinierten Interaktion zu versuchen, z.B. durch Klicken auf ein benutzerdefiniertes Element oder das Einreichen eines Formulars.

Um einen skriptbasierten Attributions-Trigger zu registrieren, können Sie entweder:

- Eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage senden, die die `attributionReporting` Option enthält:

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

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden, bei der [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt aufgerufen wird:

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
> Die Anfrage kann für jede Ressource sein. Sie muss nicht direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, normalen Text, ein Bild-Blob oder was auch immer sonst für Ihre App sinnvoll ist, sein.

## Angeben einer URL innerhalb von attributionsrc

In den obigen Beispielen bleibt das `attributionsrc`-Attribut leer und nimmt den Wert eines leeren Strings an. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, der auch die Registrierung verarbeiten soll, d.h. den {{httpheader("Attribution-Reporting-Eligible")}} Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten soll.

Es könnte jedoch der Fall sein, dass die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server ist, oder Sie möchten die Registrierung des Attributions-Triggers auf einem anderen Server bearbeiten. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionsrc` angegebenen URLs zusätzlich zum Ursprungsserver gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Zum Beispiel könnten Sie im Fall eines `<img>`-Elements die URL im `attributionsrc`-Attribut angeben:

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

- [Validation Tool für Attribution Reporting Headers](https://wicg.github.io/attribution-reporting-api/validate-headers)
