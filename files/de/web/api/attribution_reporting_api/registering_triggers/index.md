---
title: Registrierung von Attributionsauslösern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie man Attributionsauslöser registriert.

## Grundlegende Methodik

Sobald Sie [Attributionsquellen registriert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources) haben, müssen Sie Attributionsauslöser registrieren. Dies sind Interaktionen auf einer Website, bei denen eine Konversion gemessen werden soll (zum Beispiel kann das Klicken auf eine "Kaufen"-Schaltfläche auf der Website eines Werbetreibenden darauf hinweisen, dass eine Konversion stattgefunden haben könnte). Der Browser wird dann versuchen, den Attributionsauslöser mit einem in einem privaten lokalen Speicherpartition gespeicherten Attributionsquelleneintrag abzugleichen und [einen Bericht zu generieren](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), falls ein Match gefunden wird.

Die verschiedenen Attributionsauslösertypen werden auf unterschiedliche Weise registriert, die in den untenstehenden Abschnitten ausführlich beschrieben werden — siehe [HTML-basierte Attributionsauslöser](#html-basierte_attributionsauslöser) und [JavaScript-basierte Attributionsauslöser](#javascript-basierte_attributionsauslöser).

Jedoch ist das, was im Hintergrund bei der Registrierung von Auslösern, der Suche nach Übereinstimmungen usw. passiert, in allen Fällen dasselbe.

1. Alle Auslösertypen senden einen {{httpheader("Attribution-Reporting-Eligible")}} Header bei einer Anfrage, der anzeigt, dass die Antwort berechtigt ist, einen Auslöser zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible` Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort hinzufügen. Sein Wert ist ein JSON-String, der Daten enthält, die in generierten Berichten aufgenommen werden können, wie zum Beispiel die ID des Auslösers sowie Prioritäts- und Duplikationswerte.

   Das folgende Beispiel soll mit einer [Ereignisebenenbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) Attributionsquelle übereinstimmen:

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
     - `"trigger_data"`: Die Daten, die mit dem Auslöser verbunden sind, die typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel zum Einkaufswagen hinzugefügt" oder "Benutzer hat sich für den Newsletter angemeldet" anzuzeigen. Dieser Wert wird in den generierten Bericht aufgenommen, falls vorhanden, obwohl er einer Modifikation basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Feld der zugeordneten Quelle unterliegen wird.
       > [!NOTE]
       > Die Werte, die verwendet werden, um jedes Ereignis darzustellen, und die Anzahl der Elemente im Array sind völlig willkürlich und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um der Quelle durch den Browser zugeordnet zu werden, wenn ein Auslöser registriert wird.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionsauslöser darstellt. Weitere Informationen finden Sie unter [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributierungen dupliziert werden — zum Beispiel, wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Weitere Informationen finden Sie unter [Duplikate in Berichten verhindern](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication).
   - `"debug_key"`: Eine Nummer, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie neben dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Auslöser, der mit einer [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) Attributionsquelle übereinstimmen soll, erfordert die unten gezeigten Felder:

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

   - `"aggregatable_trigger_data"`: Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel zur Anwendung auf unterschiedliche Quellenschlüssel definiert.
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen.

   Auch hier siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

3. Wenn der Benutzer mit dem Attributionsauslöser interagiert, versucht der Browser, den Auslöser mit einem beliebigen in dem privaten lokalen Cache des Browsers gespeicherten Attributionsquelleneintrag abzugleichen. Für ein erfolgreiches Match muss die `Attribution-Reporting-Register-Trigger`'s [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) mit einem der in der {{httpheader("Attribution-Reporting-Register-Source")}}'s [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data) bereitgestellten Werte übereinstimmen, und die Seite (Schema + {{Glossary("eTLD", "eTLD+1")}}) der obersten Ebene, auf der der Auslöser registriert wird, muss:

   - mit der Seite von mindestens einem der in den mit der Quelle assoziierten Daten angegebenen `destination`s übereinstimmen.
   - die gleiche Herkunft haben wie die Anfrage, die die Quellregistrierung angegeben hat.

   > [!NOTE]
   > Diese Anforderungen bieten einen Datenschutz, aber auch Flexibilität — die Quelle _und_ der Auslöser können möglicherweise in einem {{htmlelement("iframe")}} eingebettet oder auf der obersten Ebene der Website platziert werden.

   Es gibt viele andere Faktoren, die ein erfolgreiches Match-Ergebnis verhindern, zum Beispiel:

   - Die Filter des Auslösers stimmen nicht mit den Filterdaten der Quelle überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Einstellung der Quelle führt dazu, dass kein Match erfolgt.
   - Das [`"max_event_level_reports"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) Limit der Quelle wurde erreicht.
   - Ein erfolgreiches Match wird nicht aufgrund des randomisierten Antwortalgorithmus des Browsers gemeldet. Siehe [Rauschen zu Berichten hinzufügen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für weitere Details.

4. Wenn ein erfolgreiches Match gefunden wird, [generiert der Browser einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Quell- und Auslöserdaten und sendet ihn an einen Berichtsendpunkt.

> [!NOTE]
> Attributionsauslöser können nicht auf {{htmlelement("a")}} Elementen oder [`Window.open()`](/de/docs/Web/API/Window/open) Aufrufen wie Attributionsquellen registriert werden.

## HTML-basierte Attributionsauslöser

HTML-basierte Attributionsauslöser können verwendet werden, um Konversionen auf einer Seite zu erkennen, wenn sie zum ersten Mal geladen wird — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Zum Beispiel, wenn ein Benutzer einen Attributionsquellen-Link auf der Seite eines Publishers geklickt hat und zur Seite eines Werbetreibenden navigiert hat, können Sie den Attributionsauslöser registrieren und den Browser veranlassen, ein Match mit gespeicherten Quelleneinträgen zu versuchen, sobald die Seite des Werbetreibenden geladen wird.

Sie können einen Attributionsauslöser registrieren, indem Sie das `attributionsrc` Attribut zu einem geeigneten Element hinzufügen. Dies kann auf {{htmlelement("img")}} und {{htmlelement("script")}} Elementen geschehen.

Wenn Sie den Attributwert leer lassen, wird die Registrierung an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL innerhalb des Wertes anzugeben, an die die Registrierungsanfrage gesendet werden soll; siehe [Angeben einer URL innerhalb von attributionsrc](#angeben_einer_url_innerhalb_von_attributionsrc) für weitere Details.

Hier ist ein `<img>` Element-Beispiel:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  width="1"
  height="1"
  attributionsrc />
```

Dies können Sie auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit der Bilddatei erhält (wenn das `load` Ereignis ausgelöst wird). Bedenken Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für die Berichterstattung verwendet wird.

Ein {{htmlelement("script")}} Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort mit dem Script erhält.

## JavaScript-basierte Attributionsauslöser

JavaScript-basierte Attributionsauslöser sind vielseitiger als HTML-basierte Attributionsauslöser. Sie können den Browser veranlassen, ein Match mit einer gespeicherten Quelle basierend auf einer benutzerdefinierten Interaktion zu versuchen, zum Beispiel, indem Sie ein benutzerdefiniertes Element klicken oder ein Formular absenden.

Um einen skriptbasierten Attributionsauslöser zu registrieren, können Sie entweder:

- Eine [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage mit der Option `attributionReporting` senden:

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

- Einen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf das Anfrageobjekt aufrufen:

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

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort auf die Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Sie muss nicht direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage nach JSON, Klartext, einem Bild-Blob oder allem anderen sein, was für Ihre App sinnvoll ist.

## Angeben einer URL innerhalb von attributionsrc

In den obigen Beispielen bleibt das `attributionsrc` Attribut leer und nimmt den Wert eines leeren Strings an. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, den Sie auch für die Registrierung verwenden möchten, d.h. den {{httpheader("Attribution-Reporting-Eligible")}} Header erhalten und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten.

Es kann jedoch sein, dass die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie möchten einfach die Registrierung des Attributionsauslösers auf einem anderen Server verwalten. In solchen Fällen können Sie eine oder mehrere URLs als Wert für `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionsrc` angegebenen URLs zusätzlich zur Herkunft der Ressource gesendet; die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Zum Beispiel können Sie im Fall eines `<img>` Elements die URL im `attributionsrc` Attribut deklarieren:

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
