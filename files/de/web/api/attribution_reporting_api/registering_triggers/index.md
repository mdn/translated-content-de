---
title: Registrierung von Attributionsauslösern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Attributionsauslöser registriert werden.

## Grundlegende Methodik

Sobald Sie [Attributionsquellen registriert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources) haben, müssen Sie Attributionsauslöser registrieren. Hierbei handelt es sich um Interaktionen auf einer Website, bei denen eine Konversion gemessen werden soll (zum Beispiel kann das Klicken auf eine "Kaufen"-Schaltfläche auf der Website eines Werbetreibenden anzeigen, dass eine Konversion stattgefunden haben könnte). Der Browser wird dann versuchen, den Attributionsauslöser mit einem in einer privaten lokalen Speicherpartition gespeicherten Eintrag für die Attributionsquelle abzugleichen und [einen Bericht zu generieren](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn ein entsprechender Eintrag gefunden wird.

Die verschiedenen Attributionsauslösertypen werden auf unterschiedliche Weise registriert, die in den untenstehenden Abschnitten detailliert dargestellt sind — siehe [HTML-basierte Attributionsauslöser](#html-basierte_attributionsauslöser) und [JavaScript-basierte Attributionsauslöser](#javascript-basierte_attributionsauslöser).

Was jedoch hinter den Kulissen passiert, um Auslöser zu registrieren, nach Übereinstimmungen zu suchen, usw., ist in allen Fällen das Gleiche.

1. Alle Auslösertypen senden einen {{httpheader("Attribution-Reporting-Eligible")}}-Header in einer Anfrage, der angibt, dass die Antwort berechtigt ist, einen Auslöser zu registrieren. Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er zusammen mit der Antwort einen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzufügen. Sein Wert ist eine JSON-Zeichenkette, die Daten enthält, die in generierte Berichte aufgenommen werden können, wie zum Beispiel die ID des Auslösers sowie Prioritäts- und Entdoppelungswerte.

   Das folgende Beispiel ist für die Übereinstimmung mit einer [Ereignisebene-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) Attributionsquelle vorgesehen:

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

   - `"event_trigger_data"`: Ein Objekt, das Daten über den Auslöser darstellt. Dies beinhaltet:
     - `"trigger_data"`: Die mit dem Auslöser verbundenen Daten, die typischerweise verwendet werden, um Ereignisse anzuzeigen, wie "Benutzer hat Artikel zum Warenkorb hinzugefügt" oder "Benutzer hat sich für den Newsletter angemeldet". Dieser Wert wird in den generierten Bericht aufgenommen, falls vorhanden, wobei er jedoch Änderungen unterliegen kann, die auf dem Feld [`"trigger_data_matching"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) der zugehörigen Quelle basieren.
       > [!NOTE]
       > Die zur Darstellung jedes Ereignisses verwendeten Werte und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler festgelegt. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit der Browser sie der Quelle zuordnen kann, wenn ein Auslöser registriert wird.
     - `"priority"`: Eine Zeichenkette, die einen Prioritätswert für den Attributionsauslöser darstellt. Weitere Informationen finden Sie unter [Berichtsprioritäten und -beschränkungen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
     - `"deduplication_key"`: Eine Zeichenkette, die einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um Duplikationen von Attributionen zu vermeiden — zum Beispiel, wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Weitere Informationen finden Sie unter [Duplikationen in Berichten verhindern](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication).
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Auslöser, der mit einer [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) Attributionsquelle übereinstimmen soll, erfordert die unten dargestellten Felder:

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
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden Datenpunkt darstellen, der in `"aggregatable_trigger_data"` definiert ist.

   Auch hier siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

3. Wenn der Benutzer mit dem Attributionsauslöser interagiert, versucht der Browser, den Auslöser mit den in der lokalen Browser-Cache gespeicherten Einträgen für die Attributionsquelle abzugleichen. Für eine erfolgreiche Übereinstimmung muss das `Attribution-Reporting-Register-Trigger`'s [`"trigger_data"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) einem der im {{httpheader("Attribution-Reporting-Register-Source")}} angegebenen Werte entsprechen, und die Seite (Schema + [eTLD+1](/de/docs/Glossary/eTLD)) der obersten Ebene, auf der der Auslöser registriert wird, muss:

   - mit der Seite von mindestens einem der in den zugehörigen Daten der Quelle angegebenen `destination`s übereinstimmen.
   - gleicher Herkunft mit der Anfrage sein, die die Quellregistrierung spezifiziert hat.

   > [!NOTE]
   > Diese Anforderungen bieten Privatsphärenschutz, aber auch Flexibilität — die Quelle _und_ der Auslöser können potenziell in einem {{htmlelement("iframe")}} eingebettet oder auf der obersten Seite situiert sein.

   Es gibt viele andere Faktoren, die ein erfolgreiches Übereinstimmungsergebnis verhindern können; zum Beispiel:

   - Die Filter des Auslösers stimmen nicht mit den Filterdaten der Quelle überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die Einstellung [`"trigger_data_matching"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) der Quelle führt dazu, dass keine Übereinstimmung erfolgt.
   - Das Limit der Quelle für [`"max_event_level_reports"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) ist erreicht.
   - Ein erfolgreicher Abgleich wird aufgrund des randomisierten Antwortalgorithmus des Browsers nicht gemeldet. Siehe [Rauschen zu Berichten hinzufügen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für weitere Details.

4. Wenn eine erfolgreiche Übereinstimmung gefunden wird, generiert der Browser einen [Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Daten der Quelle und des Auslösers und sendet ihn an einen Berichts-Endpunkt.

> [!NOTE]
> Attributionsauslöser können nicht auf {{htmlelement("a")}}-Elementen oder [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen registriert werden, wie Attributionsquellen dies können.

## HTML-basierte Attributionsauslöser

HTML-basierte Attributionsauslöser können verwendet werden, um Konversionen auf einer Seite zu erfassen, wenn sie zuerst geladen wird — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Zum Beispiel, wenn ein Benutzer auf einen Attributionsquellen-Link auf der Seite eines Herausgebers geklickt und zur Seite des Werbetreibenden navigiert hat, können Sie den Attributionsauslöser registrieren und den Browser dazu bringen, einen Abgleich mit gespeicherten Quelleneinträgen zu versuchen, sobald die Seite des Werbetreibenden geladen wird.

Sie können einen Attributionsauslöser registrieren, indem Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen. Dies kann bei {{htmlelement("img")}}- und {{htmlelement("script")}}-Elementen erfolgen.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet ist. Es ist auch möglich, eine zusätzliche URL innerhalb des Werts zu spezifizieren, um die Registrierungsanfrage zu senden; siehe [Festlegen einer URL innerhalb von attributionsrc](#festlegen_einer_url_innerhalb_von_attributionsrc) für weitere Details.

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

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit der Bilddatei erhält (wenn das `load`-Ereignis ausgelöst wird). Bedenken Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für die Attributionsberichterstattung verwendet wird.

Ein Beispiel für ein {{htmlelement("script")}}-Element könnte folgendermaßen aussehen:

```html
<script src="advertising-script.js" attributionsrc />
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit dem Skript empfängt.

## JavaScript-basierte Attributionsauslöser

JavaScript-basierte Attributionsauslöser sind vielseitiger als HTML-basierte Attributionsauslöser. Sie können den Browser veranlassen, einen Abgleich mit einer gespeicherten Quelle aufgrund einer benutzerdefinierten Interaktion zu versuchen, z. B. durch Klicken auf ein benutzerdefiniertes Element oder Absenden eines Formulars.

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

- Ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden, bei dem [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt aufgerufen wird:

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

In diesem Fall versucht der Browser, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort aus der Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede beliebige Ressource sein. Sie muss nicht direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-Blob oder was auch immer für Ihre Anwendung sinnvoll ist, sein.

## Festlegen einer URL innerhalb von attributionsrc

In den obigen Beispielen wird das `attributionsrc`-Attribut leer gelassen, wobei es den Wert eines leeren Strings annimmt. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, den Sie auch zur Registrierung verwenden möchten, d. h. den {{httpheader("Attribution-Reporting-Eligible")}}-Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten.

Es könnte jedoch der Fall sein, dass die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt, oder dass Sie die Registrierung des Attributionsauslösers auf einem anderen Server handhaben möchten. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URLs zusätzlich zum Ursprung der Ressource gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

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

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
