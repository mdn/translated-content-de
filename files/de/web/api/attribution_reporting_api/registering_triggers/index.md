---
title: Registrierung von Attributionstriggern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Sie Attributionstrigger registrieren.

## Grundlegende Methodik

Nachdem Sie [Attributionsquellen registriert haben](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources), müssen Sie Attributionstrigger registrieren. Diese sind Interaktionen auf einer Website, bei denen eine Conversion gemessen werden soll (z.B. das Klicken auf eine "Kaufen"-Schaltfläche auf der Website eines Werbetreibenden kann anzeigen, dass eine Conversion stattgefunden haben könnte). Der Browser versucht dann, den Attributionstrigger mit einem Attributionsquelleneintrag abzugleichen, der in einer privaten lokalen Speicherpartition gespeichert ist, und [einen Bericht zu erstellen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn ein Treffer gefunden wird.

Die verschiedenen Arten von Attributionstriggern werden auf unterschiedliche Weise registriert, die in den folgenden Abschnitten beschrieben werden — siehe [HTML-basierte Attributionstrigger](#html-basierte_attributionstrigger) und [JavaScript-basierte Attributionstrigger](#javascript-basierte_attributionstrigger).

Doch was hinter den Kulissen passiert, um Trigger zu registrieren, nach Übereinstimmungen zu suchen usw., ist in allen Fällen dasselbe.

1. Alle Triggertypen senden einen {{httpheader("Attribution-Reporting-Eligible")}}-Header bei einer Anfrage, die angibt, dass die Antwort berechtigt ist, einen Trigger zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage mit einem `Attribution-Reporting-Eligible`-Header erhält, kann er eine {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort senden. Sein Wert ist eine JSON-Zeichenkette, die Daten enthält, die in generierte Berichte eingeschlossen werden können, wie die ID des Triggers sowie Prioritäts- und Deduplizierungswerte.

   Das folgende Beispiel soll mit einer Attributionsquelle für [Event-Level-Berichte](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) übereinstimmen:

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

   - `"event_trigger_data"`: Ein Objekt, das Daten über den Trigger darstellt. Dazu gehören:
     - `"trigger_data"`: Die mit dem Trigger verknüpften Daten, die typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für den Newsletter angemeldet" anzuzeigen. Dieser Wert wird im generierten Bericht enthalten sein, falls vorhanden, obwohl er basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)-Feld der Attributionsquelle modifiziert werden kann.
       > [!NOTE]
       > Die Werte, die jedes Ereignis repräsentieren, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um der Quelle durch den Browser zugeordnet zu werden, wenn ein Trigger registriert wird.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionstrigger darstellt. Weitere Informationen finden Sie unter [Prioritäten und Grenzen von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributionen dupliziert werden — beispielsweise wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Weitere Informationen finden Sie unter [Vermeidung von Duplikaten in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication).
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Trigger, der mit einer Attributionsquelle für [Zusammenfassungsberichte](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) übereinstimmen soll, erfordert die folgenden Felder:

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

   - `"aggregatable_trigger_data"`: Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellschlüssel angewendet wird.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen.

   Siehe erneut {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

3. Wenn der Benutzer mit dem Attributionstrigger interagiert, versucht der Browser, den Trigger mit allen Attributionsquelleneinträgen abzugleichen, die im privaten lokalen Cache des Browsers gespeichert sind. Für eine erfolgreiche Übereinstimmung muss das `Attribution-Reporting-Register-Trigger`'s [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) mit einem der im {{httpheader("Attribution-Reporting-Register-Source")}} angegebenen Werte übereinstimmen, und die Website (Schema + {{Glossary("eTLD", "eTLD+1")}}) der obersten Seite, auf der der Trigger registriert wird, muss:

   - mit der Website von mindestens einem der im Quell-zugehörigen Daten angegebenen `destination`s übereinstimmen.
   - gleiches Ursprungsgebiet mit der Anfrage haben, die die Quellregistrierung spezifiziert hat.

   > [!NOTE]
   > Diese Anforderungen bieten einen Schutz der Privatsphäre, aber auch Flexibilität — die Quelle _und_ der Trigger können potenziell in einem {{htmlelement("iframe")}} eingebettet oder auf der obersten Website platziert werden.

   Es gibt viele andere Faktoren, die ein erfolgreiches Ergebnis verhindern können, zum Beispiel:

   - Die Filter des Triggers stimmen nicht mit den Filterdaten der Quelle überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die Einstellung der Quelle für [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) führt zu keiner Übereinstimmung.
   - Das Limit der Quelle für [`"max_event_level_reports"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) wurde erreicht.
   - Ein erfolgreicher Treffer wird aufgrund des randomisierten Antwortalgorithmus des Browsers nicht gemeldet. Weitere Einzelheiten finden Sie unter [Hinzufügen von Rauschen zu Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports).

4. Wenn ein erfolgreicher Treffer gefunden wird, [generiert](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) der Browser einen Bericht basierend auf den Quell- und Trigger-Daten und sendet ihn an einen Berichts-Endpunkt.

> [!NOTE]
> Attributionstrigger können nicht auf {{htmlelement("a")}}-Elementen oder bei Aufrufen von [`Window.open()`](/de/docs/Web/API/Window/open) registriert werden, wie Attributionsquellen.

## HTML-basierte Attributionstrigger

HTML-basierte Attributionstrigger können verwendet werden, um Conversions auf einer Seite zu erkennen, wenn sie zum ersten Mal geladen wird — genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Wenn beispielsweise ein Benutzer auf einen Attributionsquellen-Link auf einer Publisher-Seite geklickt hat und zur Website des Werbetreibenden navigiert ist, können Sie den Attributionstrigger registrieren und den Browser sofort nach dem Laden der Werbeseite versuchen lassen, einen Abgleich mit gespeicherten Quelleneinträgen durchzuführen.

Sie können einen Attributionstrigger registrieren, indem Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen. Dies kann bei {{htmlelement("img")}}- und {{htmlelement("script")}}-Elementen erfolgen.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL im Wert anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [Angeben einer URL im attributionsrc](#angeben_einer_url_im_attributionsrc) für weitere Details.

Hier ist ein Beispiel für ein `<img>`-Element:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  width="1"
  height="1"
  attributionsrc />
```

Dies könnte auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreicht werden:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit der Bilddatei empfängt (wenn das `load`-Ereignis ausgelöst wird). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte ein 1x1 transparenter Tracking-Pixel sein, der nur für die Attributionserfassung verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit dem Skript empfängt.

## JavaScript-basierte Attributionstrigger

JavaScript-basierte Attributionstrigger sind vielseitiger als HTML-basierte Attributionstrigger. Sie können den Browser so auslösen, dass er versucht, mit einer gespeicherten Quelle basierend auf einer benutzerdefinierten Interaktion abzugleichen, zum Beispiel durch Klicken auf ein benutzerdefiniertes Element oder das Absenden eines Formulars.

Um einen skriptbasierten Attributionstrigger zu registrieren, können Sie entweder:

- Eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage senden, die die Option `attributionReporting` enthält:

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

In diesem Fall wird der Browser versuchen, den Trigger mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort auf die Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, reinen Text, ein Bild-BLOB oder etwas anderes sein, das für Ihre App Sinn macht.

## Angeben einer URL im attributionsrc

In den obigen Beispielen wird das `attributionsrc`-Attribut leer gelassen, wobei der Wert eine leere Zeichenkette ist. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, den Sie auch zur Bearbeitung der Registrierung verwenden möchten, d.h. der {{httpheader("Attribution-Reporting-Eligible")}}-Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten soll.

Es könnte jedoch der Fall sein, dass die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt, oder Sie einfach die Registrierung des Attributionstriggers auf einem anderen Server handhaben möchten. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URLs gesendet, zusätzlich zur Ressourceursprung; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Zum Beispiel könnten Sie im Fall eines `<img>`-Elements die URL im `attributionsrc`-Attribut angeben:

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

- [Validation-Tool für Attribution Reporting Header](https://wicg.github.io/attribution-reporting-api/validate-headers)
