---
title: Registrieren von Attributionsquellen
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Attributionsquellen registriert werden, wenn Sie die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden.

## Grundlegende Methodik

Attributionsquellen erscheinen in Form von Links, Bildern oder Skripten, die in Inhalten enthalten sind, mit denen Sie Interaktionen messen möchten (zum Beispiel, sie könnten Anzeigen sein, bei denen Sie Konversionen messen wollen). Diese bewirken, dass der Browser Quelldaten in einem privaten lokalen Cache speichert (nur vom Browser zugänglich), wenn bestimmte Benutzerinteraktionen auftreten. Die unterschiedlichen Attributionsquellentypen werden auf verschiedene Weise registriert und signalisieren Interaktionen — sie unterscheiden sich wie folgt:

- Navigation-Quellen, die bewirken, dass der Browser Quelldaten als Reaktion auf eine Navigation speichert — zum Beispiel, wenn der Benutzer auf einen Link klickt oder ihn mit der Tastatur aktiviert, oder wenn eine Navigation als Ergebnis eines {{domxref("Window.open()")}}-Aufrufs erfolgt. Siehe [Navigation-basierte Attributionsquellen](#navigation-basierte_attributionsquellen) für Beispiele.
- Ereignisquellen, die bewirken, dass der Browser Quelldaten als Reaktion auf das Auslösen von Ereignissen speichert. Siehe [Ereignis-basierte Attributionsquellen](#ereignis-basierte_attributionsquellen) für Beispiele.

Was im Hintergrund passiert, um Quellen zu registrieren und die Quelldaten abzurufen und zu speichern, ist in beiden Fällen das Gleiche:

1. Wenn der Benutzer mit einer Attributionsquelle interagiert, sendet sie einen {{httpheader("Attribution-Reporting-Eligible")}}-Header in einer Anfrage an den Server, der die Interaktionen misst (typischerweise der Server des Werbetreibenden), was angibt, dass die Antwort zur Registrierung einer Quelle berechtigt ist. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Source")}}-Header zusammen mit der Antwort einschließen, um die Quellregistrierung abzuschließen. Sein Wert ist ein JSON-String, der die Informationen angibt, die der Browser über die Attributionsquelle speichern soll, mit der interagiert wurde. Die in diesem Header enthaltenen Informationen bestimmen auch, welche Arten von Berichten der Browser generieren wird:

   - Das folgende Beispiel wird einen [Event-Level-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) generieren, wenn ein [Auslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) mit einer Quelle übereinstimmt:

     ```js
     res.set(
       "Attribution-Reporting-Register-Source",
       JSON.stringify({
         source_event_id: "412444888111012",
         destination: "https://advertiser.example",
         trigger_data: [0, 1, 2, 3, 4],
         trigger_data_matching: "exact",
         expiry: "604800",
         priority: "100",
         debug_key: "122939999",
         event_report_window: "86400",
       }),
     );
     ```

     Das einzige erforderliche Feld in diesem Kontext ist `destination`, das 1–3 Websites angibt, auf denen ein Auslöser erwartet wird. Diese werden verwendet, um den Attributionsauslöser der Quelle zuzuordnen, wenn mit einem Auslöser interagiert wird. Die anderen oben angegebenen Felder haben folgende Funktion:

     - `"source_event_id"`: Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie anderen Informationen zuzuordnen, wenn mit der Attributionsquelle interagiert wird, oder um Informationen am Berichts-Endpunkt (siehe [Berichte generieren > Grundlegender Prozess](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) für Endpunktinformationen) zu sammeln.
     - `"trigger_data"`: Ein Array von 32-Bit-unsigned Integers, das Daten darstellt, die die verschiedenen Auslöseereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich in die Mailingliste eingetragen" Aktionen sein, die auf der Auslöser-Website geschehen und diese Quelle übereinstimmen und eine Art von Konversion anzeigen, die der Werbetreibende zu messen versucht. Diese müssen mit `"trigger_data"` abgeglichen werden, die in [Auslösern](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben werden, um ein Event-Level-Attribution vorzunehmen.
       > [!NOTE]
       > Die zur Darstellung jedes Ereignisses verwendeten Werte und die Anzahl der Elemente im Array sind völlig willkürlich und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um von dem Browser der Quelle zugeordnet zu werden, wenn ein Auslöser registriert wird.
     - `"trigger_data_matching"`: Ein String, der angibt, wie die `"trigger_data"` vom Auslöser mit der `"trigger_data"` der Quelle abgeglichen wird. `"exact"` ist der Wert, den Sie fast immer verwenden werden, was exakte Werte abgleicht.
     - `"expiry"`: Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Auslöser können dieser Quelle nicht mehr zugeordnet werden).
     - `"priority"`: Ein String, der einen Prioritätswert für die Attributionsquelle darstellt. Siehe [Prioritäten und Grenzen für Berichte](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"debug_key"`: Ein base-10-formatiertes 64-Bit-unsigned Integer, das einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie neben dem zugehörigen Attributionsbericht auch einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) erzeugen möchten.
     - `"event_report_window"`: Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Auslöser für die Zwecke der Erstellung von Event-Level-Berichten dieser Quelle nicht mehr zugeordnet werden.

     Siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

   - Um den Browser zu veranlassen, einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) zu generieren, wenn ein Auslöser mit einer Quelle übereinstimmt, müssen Sie zusätzlich zu den für die Erstellung eines Event-Level-Berichts erforderlichen Feldern einige zusätzliche Felder einfügen.

     ```js
     res.set(
       "Attribution-Reporting-Register-Source",
       JSON.stringify({
         source_event_id: "412444888111012",
         destination: "https://advertiser.example",
         trigger_data: [0, 1, 2, 3, 4],
         trigger_data_matching: "exact",
         expiry: "604800",
         priority: "100",
         debug_key: "122939999",
         event_report_window: "86400",

         aggregation_keys: {
           campaignCounts: "0x159",
           geoValue: "0x5",
         },
         aggregatable_report_window: "86400",
       }),
     );
     ```

     Die zusätzlichen Felder in diesem Beispiel sind:

     - `"aggregation_keys"`: Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte repräsentieren, unter denen Berichts-Werte aggregiert werden.
     - `"aggregatable_report_window"`: Ein String, der eine Zeit in Sekunden darstellt, nach der die Auslöserdaten in den generierten aggregierbaren Berichten nicht mehr enthalten sein werden.

     Auch hier finden Sie in {{httpheader("Attribution-Reporting-Register-Source")}} eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

3. Nach einer erfolgreichen Quellregistrierung speichert der Browser die bereitgestellten Quelldaten in seinem privaten lokalen Cache.

## Navigation-basierte Attributionsquellen

Navigationsquellen sind nützlich für das Messen von Interaktionen mit Links — beispielsweise könnte ein Benutzer eine Anzeige auf der Seite eines Publishers sehen und darauf klicken, um zur Seite eines Werbetreibenden zu navigieren, wo hoffentlich eine Konversion erfolgt.

Es gibt einige verschiedene Arten von Navigation-basierten Attributionsquellen (zum Beispiel das Klicken auf eine Anzeige), die registriert werden können — die auf HTML basieren (die das `attributionsrc` Attribut verwenden) und die auf {{domxref("Window.open()")}}-Aufrufen basieren (die ein `attributionsrc` Fenster-Feature verwenden).

### HTML-basierte Navigationsquellen

Um eine Navigation-basierte Attributionsquelle zu registrieren, können Sie das `attributionsrc` Attribut zu einem passenden {{htmlelement("a")}} Element hinzufügen, welches angibt, wohin die Registrierungsanfrage gesendet wird.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Ort gesendet, zu dem der Link führt. Es ist auch möglich, eine oder mehrere zusätzliche URLs im Wert anzugeben, zu denen die Registrierungsanfrage gesendet werden soll; siehe [Angeben von URLs im attributionsrc](#angeben_von_urls_im_attributionsrc) für weitere Details.

`attributionsrc` kann deklarativ hinzugefügt werden:

```html
<a href="https://shop.example" attributionsrc target="_blank">
  Klicken Sie hier, um unseren Laden zu besuchen
</a>
```

Oder über die {{domxref("HTMLAnchorElement.attributionSrc")}} Eigenschaft:

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

In diesem Fall tritt die Interaktion auf, was dazu führt, dass der Browser die mit der Navigation-basierten Attributionsquelle verbundenen Quelldaten speichert (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header bereitgestellt), wenn der Benutzer auf den Link klickt und der Browser die Antwort erhält.

### Auf Window.open() basierende Navigationsquellen

Sie können auch das `attributionsrc` Feature-Schlüsselwort zu der Features-Eigenschaft eines {{domxref("Window.open()")}} Aufrufs hinzufügen. In diesem Beispiel führen wir es als Reaktion auf ein `click` Ereignis aus:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

In diesem Fall tritt die Interaktion auf und der Browser speichert die Quelldaten, wenn `Window.open()` aufgerufen wird und der Browser die Antwort erhält.

> [!NOTE]
> Wenn Sie ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis wie im oben gezeigten Beispiel einrichten, empfiehlt es sich, es auf einem Bedienelement zu setzen, bei dem ein Klick erwartet wird, wie zum Beispiel auf einem {{htmlelement("button")}} oder {{htmlelement("a")}} Element. Dies ist semantisch sinnvoller und zugänglicher für Screenreader- und Tastaturnutzer.

> [!NOTE]
> Um eine Attributionsquelle über `open()` registrieren zu können, muss sie mit [transient activation](/de/docs/Glossary/Transient_activation) (d.h. innerhalb eines Benutzerinteraktions-Ereignishandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion aufgerufen werden.

## Ereignis-basierte Attributionsquellen

Ereignis-basierte Attributionsquellen bewirken, dass der Browser Quelldaten als Reaktion auf das Auslösen eines Ereignisses speichert, wie z.B. das `load` Ereignis im Falle eines `<img>` oder `<script>` Elements (die das `attributionsrc` Attribut verwenden, wie wir es oben mit dem `<a>` Element gesehen haben) oder ein benutzerdefiniertes Ereignis Ihrer Wahl, das in Ihrem JavaScript festgelegt wird.

### HTML-basierte Ereignisquellen

HTML-basierte Ereignisquellen können verwendet werden, um Interaktionen mit der Seite eines Publishers beim ersten Laden zu messen — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Um eine Ereignis-basierte Attributionsquelle über HTML zu registrieren, können Sie das `attributionsrc` Attribut zu einem passenden Element hinzufügen — {{htmlelement("img")}} oder {{htmlelement("script")}}.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs im Wert anzugeben, an die die Registrierungsanfrage gesendet werden soll; siehe [Angeben von URLs im attributionsrc](#angeben_von_urls_im_attributionsrc) für weitere Details.

Schauen wir uns ein `<img>` Element Beispiel an:

```html
<img src="advertising-image.png" attributionsrc />
```

Sie könnten dies auch über die {{domxref("HTMLImageElement.attributionSrc")}} Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

Der Browser speichert die Attributionsquelldaten, wenn der Browser die Antwort mit der Bilddatei empfängt (d.h. wenn das `load` Ereignis auftritt). Bedenken Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte ein 1x1 transparentes Tracking-Pixel sein, das nur für Attributionsberichte verwendet wird.

Ein {{htmlelement("script")}} Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc />
```

Oder über die {{domxref("HTMLScriptElement.attributionSrc")}} Eigenschaft:

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall tritt die Interaktion auf und der Browser speichert die Quelldaten, wenn der Browser die Antwort mit dem Skript empfängt.

### JavaScript-basierte Ereignisquellen

Skript-basierte Attributionsquellen sind vielseitiger als HTML-basierte Attributionsquellen. Sie können ein Skript einrichten, das eine Anfrage initiiert, die basierend auf der Anfrage, die für Ihre App am besten passt, zur Registrierung einer Attributionsquelle berechtigt ist. Dies ist ein flexibler Ansatz, nützlich, wenn Sie Quelldaten als Reaktion auf benutzerdefinierte Interaktionen speichern möchten, zum Beispiel das Klicken auf ein benutzerdefiniertes Element oder das Absenden eines Formulars.

Um eine Skript-basierte Attributionsquelle einzurichten, können Sie entweder:

- Eine {{domxref("Window/fetch", "fetch()")}} Anfrage mit der `attributionReporting` Option senden:

  ```js
  const attributionReporting = {
    eventSourceEligible: true,
    triggerEligible: false,
  };

  // Optional keepalive setzen, um sicherzustellen, dass die Anfrage länger als die Seite lebt
  function triggerSourceInteraction() {
    fetch("https://shop.example/endpoint", {
      keepalive: true,
      attributionReporting,
    });
  }

  // Verknüpfen Sie den Interaktionstrigger mit einem
  // Ereignis, das für Ihren Code sinnvoll ist (es muss kein
  // DOM-Ereignis/Benutzerinteraktion sein)
  elem.addEventListener("click", triggerSourceInteraction);
  ```

- Eine {{domxref("XMLHttpRequest")}} mit {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} auf dem Anforderungsobjekt aufrufen:

  ```js
  const attributionReporting = {
    eventSourceEligible: true,
    triggerEligible: false,
  };

  function triggerSourceInteraction() {
    const req = new XMLHttpRequest();
    req.open("GET", "https://shop.example/endpoint");
    // Überprüfen Sie die Verfügbarkeit von setAttributionReporting() bevor Sie es aufrufen
    if (typeof req.setAttributionReporting === "function") {
      req.setAttributionReporting(attributionReporting);
      req.send();
    } else {
      throw new Error("Attributionsberichterstattung nicht verfügbar");
      // Hier, wo geeignet, Wiederherstellungscode hinzufügen
    }
  }

  // Verknüpfen Sie den Interaktionstrigger mit einem
  // Ereignis, das für Ihren Code sinnvoll ist (es muss kein
  // DOM-Ereignis/Benutzerinteraktion sein)
  elem.addEventListener("click", triggerSourceInteraction);
  ```

In diesem Fall tritt die Interaktion auf, und der Browser speichert die Quelldaten, wenn der Browser die Antwort von der Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann sich auf jede Ressource beziehen. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-Blob oder was auch immer für Ihre App sinnvoll ist, sein.

## Angeben von URLs im attributionsrc

Bisher haben wir in allen gesehenen Beispielen das `attributionsrc` Attribut/Feature oder die `attributionSrc` Eigenschaft leer gelassen und den Wert eines leeren Strings verwendet. Dies ist in Ordnung, wenn der Server, auf dem die angeforderte Ressource gehostet wird, derselbe Server ist, den Sie auch für die Abwicklung der Registrierung verwenden möchten, d.h. der den {{httpheader("Attribution-Reporting-Eligible")}} Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Source")}} Header antworten soll.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt, oder Sie möchten die Registrierung der Attributionsquelle einfach auf einem anderen Server handhaben. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header zusätzlich zum Ursprungsort der Ressource an die in `attributionsrc` angegebenen URL(s) gesendet; diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

Zum Beispiel könnten Sie im Falle eines `<a>` Elements die URL(s) im `attributionsrc` Attribut deklarieren:

```html
<a
  href="https://shop.example"
  attributionsrc="https://a.example/register-source">
  Klicken Sie hier, um unseren Laden zu besuchen
</a>
```

Oder in JavaScript über die `attributionSrc` Eigenschaft:

```js
// Kodieren Sie die URLs, da sie möglicherweise Sonderzeichen
// wie '=' enthalten, die falsch geparst werden würden.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const aElem = document.querySelector("a");
aElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

Im Falle eines {{domxref("Window.open()")}} Aufrufs müssten die verschiedenen URLs als mehrere separate `attributionsrc` Features im [`windowFeatures`](/de/docs/Web/API/Window/open#windowfeatures) Parameter aufgelistet werden, getrennt durch Kommas oder Leerzeichen:

```js
// Kodieren Sie die URLs, da sie möglicherweise Sonderzeichen
// wie '=' enthalten, die falsch geparst werden würden.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

elem.addEventListener("click", () => {
  window.open(
    "https://ourshop.example",
    "_blank",
    `attributionsrc=${encodedUrlA},attributionsrc=${encodedUrlB}`,
  );
});
```

> [!NOTE]
> Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf demselben Feature registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, indem verschiedene Berichte über unterschiedliche Daten generiert werden.

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
