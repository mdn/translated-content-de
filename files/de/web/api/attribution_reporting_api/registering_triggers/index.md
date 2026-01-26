---
title: Registrierung von Attributionsauslösern
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

{{DefaultAPISidebar("Attribution Reporting API")}}{{deprecated_header}}

Dieser Artikel erklärt, wie Attributionsauslöser registriert werden.

## Grundlegende Methodologie

Nachdem Sie [Attributionsquellen registriert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources) haben, müssen Sie Attributionsauslöser registrieren. Dies sind Interaktionen auf einer Website, bei denen eine Conversion gemessen werden soll (zum Beispiel kann das Klicken auf einen "Kaufen"-Button auf der Website eines Werbetreibenden darauf hinweisen, dass eine Conversion stattgefunden haben könnte). Der Browser wird dann versuchen, den Attributionsauslöser einem Eintrag der Attributionsquelle zuzuordnen, der in einer privaten lokalen Speicherpartition gespeichert ist, und [einen Bericht zu erstellen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports), wenn eine Übereinstimmung gefunden wird.

Die verschiedenen Arten von Attributionsauslösern werden auf unterschiedliche Weise registriert, die in den folgenden Abschnitten beschrieben werden — siehe [HTML-basierte Attributionsauslöser](#html-basierte_attributionsauslöser) und [JavaScript-basierte Attributionsauslöser](#javascript-basierte_attributionsauslöser).

Was jedoch im Hintergrund geschieht, um Auslöser zu registrieren, nach Übereinstimmungen zu suchen usw., ist in allen Fällen gleich.

1. Alle Auslösertypen senden einen {{httpheader("Attribution-Reporting-Eligible")}}-Header bei einer Anfrage, der anzeigt, dass die Antwort berechtigt ist, einen Auslöser zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Trigger")}} zusammen mit der Antwort einschließen. Sein Wert ist ein JSON-String, der Daten enthält, die in generierten Berichten enthalten sein können, wie die ID des Auslösers, Priorität und Deduplizierungswerte.

   Das folgende Beispiel soll mit einer [Ereignisebene-Bericht]-Attributionsquelle übereinstimmen:

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

   Die hier spezifizierten Felder sind wie folgt:
   - `"event_trigger_data"`: Ein Objekt, das Daten über den Auslöser repräsentiert. Dies beinhaltet:
     - `"trigger_data"`: Die mit dem Auslöser assoziierten Daten, die typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für den Newsletter angemeldet" anzuzeigen. Dieser Wert wird im generierten Bericht enthalten sein, wenn auch möglicherweise modifiziert basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)-Feld der Attributionsquelle.
       > [!NOTE]
       > Die Werte zur Darstellung jedes Ereignisses und die Anzahl der Elemente im Array sind vollständig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit der Browser sie der Quelle zuordnen kann, wenn ein Auslöser registriert wird.
     - `"priority"`: Ein String, der einen Prioritätswert für den Attributionsauslöser repräsentiert. Siehe [Berichtprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"deduplication_key"`: Ein String, der einen eindeutigen Schlüssel repräsentiert, der verwendet werden kann, um zu verhindern, dass Attributierungen dupliziert werden — zum Beispiel, wenn ein Benutzer denselben Artikel mehrfach in den Warenkorb legt. Siehe [Verhinderung von Duplikaten in Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication) für weitere Informationen.
   - `"debug_key"`: Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) neben dem zugehörigen Attributionsbericht generieren möchten.

   Siehe {{httpheader("Attribution-Reporting-Register-Trigger")}} für eine detaillierte Beschreibung aller verfügbaren Felder.

   Ein Auslöser, der mit einer [Zusammenfassungsbericht]-Attributionsquelle übereinstimmen soll, erfordert die unten gezeigten Felder:

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
   - `"aggregatable_values"`: Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden Datenpunkt repräsentieren, der in `"aggregatable_trigger_data"` definiert ist.

   Weitere Details zu allen verfügbaren Feldern finden Sie unter {{httpheader("Attribution-Reporting-Register-Trigger")}}.

3. Wenn der Benutzer mit dem Attributionsauslöser interagiert, versucht der Browser, den Auslöser mit allen im privaten lokalen Cache des Browsers gespeicherten Attributionsquelleneinträgen abzugleichen. Für eine erfolgreiche Übereinstimmung muss das [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) des `Attribution-Reporting-Register-Trigger` mit einem der im [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data) des {{httpheader("Attribution-Reporting-Register-Source")}} bereitgestellten Werte übereinstimmen, und die Website (Schema + {{Glossary("registrable_domain", "registrable domain")}}) der obersten Seite, auf der der Auslöser registriert wird, muss:
   - mit der Website von mindestens einem der im zugehörigen Daten der Quelle angegebenen `destination`s übereinstimmen.
   - selben Ursprungs sein wie die Anfrage, die die Quellregistrierung spezifiziert hat.

   > [!NOTE]
   > Diese Anforderungen bieten Datenschutz, aber auch Flexibilität — die Quelle _und_ der Auslöser können potenziell in einem {{htmlelement("iframe")}} eingebettet oder auf der Top-Level-Website platziert werden.

   Es gibt viele andere Faktoren, die ein erfolgreiches Übereinstimmungsergebnis verhindern können; zum Beispiel:
   - Die Filter des Auslösers stimmen nicht mit den Filterdaten der Quelle überein (siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details).
   - Die [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)-Einstellung der Quelle führt dazu, dass keine Übereinstimmung erfolgt.
   - Das Limit der [`"max_event_level_reports"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) der Quelle wurde erreicht.
   - Eine erfolgreiche Übereinstimmung wird aufgrund des zufällig generierten Antwortalgorithmus des Browsers nicht gemeldet. Siehe [Hinzufügen von Rauschen zu Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) für weitere Details.

4. Wenn eine erfolgreiche Übereinstimmung gefunden wird, [erzeugt der Browser einen Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports) basierend auf den Quell- und Auslöserdaten und sendet ihn an ein Berichtsendpunkt.

> [!NOTE]
> Attributionsauslöser können nicht auf {{htmlelement("a")}}-Elementen oder [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen registriert werden, wie es bei Attributionsquellen möglich ist.

## HTML-basierte Attributionsauslöser

HTML-basierte Attributionsauslöser können verwendet werden, um Conversion auf einer Seite zu erkennen, wenn sie erstmals geladen wird — oder präziser gesagt, wenn ein `<img>` oder `<script>` geladen wird. Zum Beispiel, wenn ein Benutzer auf einen Attributionsquellen-Link auf der Seite eines Herausgebers geklickt hat und zur Seite des Werbetreibenden navigiert, können Sie den Attributionsauslöser registrieren und den Browser dazu bringen, einen Abgleich mit gespeicherten Quelleneinträgen zu versuchen, sobald die Seite des Werbetreibenden geladen wird.

Sie können einen Attributionsauslöser registrieren, indem Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen. Dies kann bei {{htmlelement("img")}}- und {{htmlelement("script")}}-Elementen erfolgen.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanforderung an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine zusätzliche URL im Wert hinzuzufügen, um die Registrierungsanfrage dorthin zu senden; siehe [Spezifizieren einer URL in attributionsrc](#spezifizieren_einer_url_in_attributionsrc) für weitere Details.

Hier ist ein `<img>`-Elementbeispiel:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  alt=""
  width="1"
  height="1"
  attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort erhält, die die Bilddatei enthält (wenn das `load`-Ereignis ausgelöst wird). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für das Attributionsberichtswesen verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall wird der Browser versuchen, den Auslöser mit einer gespeicherten Attributionsquelle abzugleichen, wenn der Browser die Antwort erhält, die das Skript enthält.

## JavaScript-basierte Attributionsauslöser

JavaScript-basierte Attributionsauslöser sind vielseitiger als HTML-basierte Attributionsauslöser. Sie können den Browser auslösen, um basierend auf einer benutzerdefinierten Interaktion einen Abgleich mit einer gespeicherten Quelle zu versuchen, zum Beispiel das Klicken auf ein benutzerdefiniertes Element oder das Absenden eines Formulars.

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

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt aufgerufen senden:

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
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-BLOB oder irgendetwas anderes sein, das für Ihre App sinnvoll ist.

## Spezifizieren einer URL in attributionsrc

In den obigen Beispielen bleibt das `attributionsrc`-Attribut leer und nimmt den Wert eines leeren Strings an. Das ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe ist, der auch die Registrierung bearbeiten soll, d.h. den {{httpheader("Attribution-Reporting-Eligible")}}-Header erhalten und mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie einfach die Registrierung des Attributionsauslösers auf einem anderen Server handhaben wollen. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcennachfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URLs zusätzlich zum Ressourcenursprung gesendet. Die URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Trigger")}} antworten, um die Registrierung abzuschließen.

Zum Beispiel können Sie im Fall eines `<img>`-Elements die URL im `attributionsrc`-Attribut deklarieren:

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

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
