---
title: Registrierung von Attributionstriggern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Sie Attributionstrigger registrieren.

## Grundlegende Methodik

Nachdem Sie [Attributionsquellen registriert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources) haben, müssen Sie Attributionstrigger registrieren. Dies sind Interaktionen auf einer Webseite, bei denen eine Konversion gemessen werden soll (zum Beispiel kann das Klicken auf einen "Kaufen"-Button auf der Webseite eines Werbetreibenden darauf hinweisen, dass eine Konversion stattgefunden haben könnte). Der Browser versucht dann, den Attributionstrigger einem Attributionsquelleneintrag zuzuordnen, der in einer privaten lokalen Speichereinheit gespeichert ist, und [einen Bericht zu erstellen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn eine Übereinstimmung gefunden wird.

Die verschiedenen Arten von Attributionstriggern werden auf unterschiedliche Weise registriert, was in den folgenden Abschnitten detailliert beschrieben wird — siehe [HTML-basierte Attributionstrigger](#html-basierte_attributionstrigger) und [JavaScript-basierte Attributionstrigger](#javascript-basierte_attributionstrigger).

Was jedoch im Hintergrund passiert, um Trigger zu registrieren, nach Übereinstimmungen zu suchen usw., ist in allen Fällen das gleiche.

1. Alle Triggertypen senden einen {{httpheader("Attribution-Reporting-Eligible")}}-Header mit einer Anfrage, der angibt, dass die Antwort berechtigt ist, einen Trigger zu registrieren. Ein Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er zusammen mit der Antwort einen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header einfügen. Sein Wert ist ein JSON-String, der Daten enthält, die in generierte Berichte aufgenommen werden können, wie die ID des Triggers sowie Prioritäts- und Duplikationswerte.

   Das folgende Beispiel soll mit einer Attributionsquelle für einen [ereignisbezogenen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) übereinstimmen:

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

   - `"event_trigger_data"`: Ein Objekt, das Daten über den Trigger darstellt. Dies beinhaltet:
     - `"trigger_data"`: Die mit dem Trigger verknüpften Daten, die typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" anzuzeigen. Dieser Wert wird in den generierten Bericht aufgenommen, sofern vorhanden, obwohl er je nach dem von der zugeordneten Quelle angegebenen [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)-Feld möglicherweise geändert wird.
       > [!NOTE]
       > Die zur Darstellung jedes Ereignisses verwendeten Werte und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler festgelegt. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie durch den Browser bei der Registrierung eines Triggers der Quelle zugeordnet werden können.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionstrigger darstellt. Weitere Informationen finden Sie unter [Berichtprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, um zu verhindern, dass Attributionsduplikate entstehen — zum Beispiel, wenn ein Benutzer den gleichen Artikel mehrfach in einen Warenkorb legt. Weitere Informationen finden Sie unter [Verhinderung von Duplikation in Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication).
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht erzeugen möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Trigger, der mit einer Attributionsquelle für einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) übereinstimmen soll, erfordert die unten gezeigten Felder:

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

   - `"aggregatable_trigger_data"`: Ein Array von Objekten, die jeweils einen Aggregationsschlüssel festlegen, der auf verschiedene Quellschlüssel angewendet wird.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen.

   Auch hier finden Sie eine detaillierte Beschreibung aller verfügbaren Felder in {{httpheader("Attribution-Reporting-Register-Trigger")}}.

3. Wenn der Benutzer mit dem Attributionstrigger interagiert, versucht der Browser, den Trigger mit allen im Browser gespeicherten Attributionsquelleneinträgen im privaten lokalen Cache abzugleichen. Für eine erfolgreiche Übereinstimmung muss die `"trigger_data"` des `Attribution-Reporting-Register-Trigger` eine der im {{httpheader("Attribution-Reporting-Register-Source")}} angegebenen Werte übereinstimmen, und die Seite (Schema + {{Glossary("eTLD", "eTLD+1")}}) der obersten Ebene, auf der der Trigger registriert wird, muss:

   - mit einer der im Quell-Dataset angegebenen `destination`s übereinstimmen.
   - gleiche Herkunft mit der Anfrage haben, die die Quellregistrierung spezifizierte.

   > [!NOTE]
   > Diese Anforderungen bieten Datenschutz, aber auch Flexibilität — die Quelle _und_ der Trigger können potenziell in einem {{htmlelement("iframe")}} eingebettet oder auf der obersten Ebene der Seite platziert sein.

   Es gibt viele andere Faktoren, die ein erfolgreiches Ergebnis ausschließen können; zum Beispiel:

   - Die Filter des Triggers stimmen nicht mit den Filterdaten der Quelle überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)-Einstellung der Quelle führt dazu, dass keine Übereinstimmung erzielt wird.
   - Das Limit der [`"max_event_level_reports"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) der Quelle wurde erreicht.
   - Ein erfolgreiches Ergebnis wird aufgrund eines vom Browser verwendeten zufälligen Antwortalgorithmus nicht gemeldet. Siehe [Rauschen zu Berichten hinzufügen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für weitere Details.

4. Wenn eine erfolgreiche Übereinstimmung gefunden wird, [erzeugt der Browser einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Quell- und Triggerdaten und sendet diesen an einen Berichts-Endpunkt.

> [!NOTE]
> Attributionstrigger können nicht auf {{htmlelement("a")}}-Elementen oder [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen registriert werden, im Gegensatz zu Attributionsquellen.

## HTML-basierte Attributionstrigger

HTML-basierte Attributionstrigger können verwendet werden, um Konversionen auf einer Seite zu erkennen, wenn sie das erste Mal geladen wird — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Zum Beispiel, wenn ein Benutzer auf einer Publisher-Seite einen Attributionsquellenlink angeklickt hat und zur Seite des Werbetreibenden navigiert, können Sie den Attributionstrigger registrieren und den Browser dazu bringen, einen Abgleich mit gespeicherten Quelleneinträgen zu versuchen, sobald die Seite des Werbetreibenden geladen wird.

Sie können einen Attributionstrigger registrieren, indem Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen. Dies kann bei {{htmlelement("img")}}- und {{htmlelement("script")}}-Elementen erfolgen.

Wenn Sie den Attributwert leer lassen, wird die Registrierung auf an den Server gesendet, auf dem das angeforderte Element gehostet wird. Es ist auch möglich, eine zusätzliche URL innerhalb des Werts anzugeben, um die Registrierung dorthin zu senden; siehe [Spezifikation einer URL innerhalb von attributionsrc](#spezifikation_einer_url_innerhalb_von_attributionsrc) für weitere Details.

Hier ist ein Beispiel mit einem `<img>`-Element:

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

In diesem Fall versucht der Browser, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit der Bilddatei erhält (wenn das `load`-Ereignis ausgelöst wird). Beachten Sie, dass Benutzer das Bild eventuell überhaupt nicht wahrnehmen können — es könnte ein 1x1 transparenter Tracking-Pixel sein, der nur für das Attributions-Reporting verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte folgendermaßen aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall versucht der Browser, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit dem Script erhält.

## JavaScript-basierte Attributionstrigger

JavaScript-basierte Attributionstrigger sind vielseitiger als HTML-basierte Attributionstrigger. Sie können den Browser anstoßen, eine Übereinstimmung mit einer gespeicherten Quelle basierend auf einer benutzerdefinierten Interaktion zu versuchen, zum Beispiel durch das Klicken auf ein benutzerdefiniertes Element oder das Absenden eines Formulars.

Um einen script-basierten Attributionstrigger zu registrieren, können Sie entweder:

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

- Ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit der Methode [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt senden:

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

In diesem Fall versucht der Browser, den Trigger abzugleichen, wenn der Browser die Antwort von der Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource gelten. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-BLOB oder was auch immer für Ihre App sinnvoll ist, sein.

## Spezifikation einer URL innerhalb von attributionsrc

In den obigen Beispielen bleibt das `attributionsrc`-Attribut leer und nimmt den Wert eines leeren Strings an. Das ist in Ordnung, wenn der Server, auf dem sich die angeforderte Ressource befindet, derselbe ist, den Sie auch zum Handling der Registrierung benutzen möchten, d.h. um den {{httpheader("Attribution-Reporting-Eligible")}}-Header zu empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header zu antworten.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder dass Sie die Registrierung des Attributionstriggers einfach auf einem anderen Server handhaben möchten. In solch einem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourceanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URLs zusätzlich zur Ressource-Origin gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

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
