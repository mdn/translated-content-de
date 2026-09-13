---
title: Registrieren von Attributionsquellen
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Attributionsquellen registriert werden, wenn Sie die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden.

## Grundlegende Methodik

Attributionsquellen nehmen die Form von Links, Bildern oder Skripten an, die in Inhalte eingebettet sind, mit denen Sie Interaktionen messen möchten (zum Beispiel Anzeigen, bei denen Sie Konversionen messen möchten). Diese führen dazu, dass der Browser Quelldaten in einem privaten lokalen Cache speichert (nur vom Browser zugänglich), wenn spezifische Benutzerinteraktionen stattfinden. Die verschiedenen Attributionsquellentypen werden auf unterschiedliche Weise registriert und signalisieren Interaktionen — sie unterscheiden sich wie folgt:

- Navigationsquellen, die dazu führen, dass der Browser Quelldaten als Reaktion auf die Navigation speichert — zum Beispiel, wenn der Benutzer auf einen Link klickt oder ihn mit der Tastatur aktiviert, oder wenn eine Navigation aufgrund eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs erfolgt. Siehe [Navigationsbasierte Attributionsquellen](#navigationsbasierte_attributionsquellen) für Beispiele.
- Ereignisquellen, die dazu führen, dass der Browser Quelldaten als Reaktion auf das Auslösen von Ereignissen speichert. Siehe [Ereignisbasierte Attributionsquellen](#ereignisbasierte_attributionsquellen) für Beispiele.

Was im Hintergrund passiert, um Quellen zu registrieren und die Quelldaten zu speichern, ist in beiden Fällen dasselbe:

1. Wenn der Benutzer mit einer Attributionsquelle interagiert, sendet diese einen {{httpheader("Attribution-Reporting-Eligible")}}-Header in einer Anfrage an den Server, der die Interaktionen misst (typischerweise der Server des Werbetreibenden), der anzeigt, dass die Antwort berechtigt ist, eine Quelle zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Source")}}-Header zusammen mit der Antwort senden, um die Quellregistrierung abzuschließen. Sein Wert ist eine JSON-Zeichenkette, die dem Browser die Informationen bereitstellt, die er über die interagierte Attributionsquelle speichern soll. Die in diesem Header enthaltenen Informationen bestimmen auch, welche Arten von Berichten der Browser generieren wird:
   - Das folgende Beispiel wird einen [Event-Level-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) generieren, wenn ein [Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) mit einer Quelle übereinstimmt:

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

     Das einzige erforderliche Feld in diesem Kontext ist `destination`, das 1–3 Seiten angibt, auf denen ein Trigger erwartet wird. Diese werden verwendet, um den Attributions-Trigger mit der Quelle abzugleichen, wenn mit einem Trigger interagiert wird. Die anderen oben angegebenen Felder erfüllen folgende Funktion:
     - `"source_event_id"`: Eine Zeichenkette, die eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie mit anderen Informationen zu verknüpfen, wenn mit der Attributionsquelle interagiert wird, oder aggregierte Informationen am Berichterstattungs-Endpunkt (siehe [Berichte generieren > Grundlegender Prozess](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) für Informationen über den Endpunkt).
     - `"trigger_data"`: Ein Array von 32-Bit-Unsigned-Integers, die Daten repräsentieren, die die verschiedenen Trigger-Ereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer fügte einen Artikel zum Warenkorb hinzu" oder "Benutzer meldete sich für eine Mailingliste an" Aktionen sein, die auf der Trigger-Seite stattfinden, die mit dieser Quelle übereinstimmen und eine Art von Konversion anzeigen könnten, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` übereinstimmen, die in [Triggern](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben sind, damit eine Event-Level-Attribution stattfinden kann.
       > [!NOTE]
       > Die Werte, die verwendet werden, um jedes Ereignis zu repräsentieren, und die Anzahl der Elemente im Array sind völlig willkürlich und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um durch den Browser der Quelle zugeordnet zu werden, wenn ein Trigger registriert wird.
     - `"trigger_data_matching"`: Eine Zeichenkette, die angibt, wie die `"trigger_data"` vom Trigger mit der `"trigger_data"` der Quelle abgeglichen wird. `"exact"` ist der Wert, den Sie fast immer verwenden werden, der exakte Werte abgleicht.
     - `"expiry"`: Eine Zeichenkette, die eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv sein wird (d.h. nachfolgende Trigger können dieser Quelle nicht mehr zugeordnet werden).
     - `"priority"`: Eine Zeichenkette, die einen Prioritätswert für die Attributionsquelle darstellt. Siehe [Berichtsprioritäten und Limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"debug_key"`: Ein basis-10-formatiertes 64-Bit-Unsigned-Integer, das einen Debug-Schlüssel repräsentiert. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
     - `"event_report_window"`: Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger für die Erstellung von Event-Level-Berichten nicht mehr dieser Quelle zugeordnet werden.

     Siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

   - Um den Browser zu veranlassen, einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) zu generieren, wenn ein Trigger mit einer Quelle übereinstimmt, müssen Sie einige zusätzliche Felder _zusätzlich_ zu den für die Erstellung eines Event-Level-Berichts erforderlichen Feldern einfügen.

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
     - `"aggregation_keys"`: Ein Objekt, das benutzerdefinierte Schlüssel enthält, die verschiedene Datenpunkte repräsentieren, um Berichtskennzahlen darunter zu aggregieren.
     - `"aggregatable_report_window"`: Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der Trigger-Daten nicht mehr in aggregierbaren Berichten enthalten sein werden.

     Auch hier siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

3. Nach einer erfolgreichen Quellregistrierung speichert der Browser die bereitgestellten Quelldaten in seinem privaten lokalen Cache.

## Navigationsbasierte Attributionsquellen

Navigationsquellen sind nützlich, um Interaktionen mit Links zu messen — zum Beispiel, ein Benutzer könnte eine Anzeige auf einer Publisher-Seite sehen und darauf klicken, um zur Werbeseite zu navigieren, auf der hoffentlich eine Konversion stattfinden wird.

Es gibt ein paar verschiedene Arten von navigationsbasierten Attributionsquellen (zum Beispiel Klicken auf eine Anzeige), die registriert werden können — solche, die auf HTML basieren (die das `attributionsrc` Attribut verwenden) und solche, die auf [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen basieren (die ein `attributionsrc` Fenster-Feature verwenden).

### HTML-basierte Navigationsquellen

Um eine navigationsbasierte Attributionsquelle zu registrieren, können Sie das `attributionsrc` Attribut zu einem geeigneten {{htmlelement("a")}}-Element hinzufügen, das angibt, wohin die Registrierungsanfrage gesendet wird.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an die verknüpfte Adresse gesendet. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Wertes anzugeben, an die die Registrierungsanfrage gesendet wird; siehe den Abschnitt [URLs in attributionsrc angeben](#urls_in_attributionsrc_angeben) für weitere Details.

`attributionsrc` kann deklarativ hinzugefügt werden:

```html
<a href="https://shop.example" attributionsrc target="_blank">
  Click to visit our shop
</a>
```

Oder über die [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc) Eigenschaft:

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

In diesem Fall tritt die Interaktion auf und der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header bereitgestellt), wenn der Benutzer auf den Link klickt und der Browser die Antwort erhält.

### Window.open()-basierte Navigationsquellen

Sie können das `attributionsrc` Feature-Schlüsselwort auch der Features-Eigenschaft eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs hinzufügen. In diesem Beispiel führen wir es als Reaktion auf ein ausgelöstes `click`-Ereignis aus:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

In diesem Fall tritt die Interaktion auf und der Browser speichert die Quelldaten, wenn `Window.open()` aufgerufen wird und der Browser die Antwort erhält.

> [!NOTE]
> Bei der Einrichtung eines [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses wie im obigen Beispiel ist es ratsam, es auf einem Steuerungselement einzustellen, bei dem ein Klick erwartet wird, wie etwa einem {{htmlelement("button")}} oder {{htmlelement("a")}}-Element. Dies ist semantisch sinnvoller und zugänglicher für Bildschirmlese- und Tastaturnutzer.

> [!NOTE]
> Um eine Attributionsquelle über `open()` zu registrieren, muss sie mit {{Glossary("Transient_activation", "transient activation")}} (d.h. innerhalb eines Benutzerinteraktions-Ereignishandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion aufgerufen werden.

## Ereignisbasierte Attributionsquellen

Ereignisbasierte Attributionsquellen bewirken, dass der Browser Quelldaten als Reaktion auf irgendein Ereignis speichert, zum Beispiel das `load`-Ereignis im Falle eines `<img>` oder `<script>`-Elements (die das `attributionsrc` Attribut verwenden wie wir es oben mit dem `<a>` Element gesehen haben), oder ein benutzerdefiniertes Ereignis Ihrer Wahl, das in Ihrem JavaScript eingestellt wird.

### HTML-basierte Ereignisquellen

HTML-basierte Ereignisquellen können verwendet werden, um Interaktionen mit einer Publisher-Seite zu messen, wenn sie erstmals geladen wird — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Um eine ereignisbasierte Attributionsquelle über HTML zu registrieren, können Sie das `attributionsrc` Attribut zu einem geeigneten Element hinzufügen — {{htmlelement("img")}} oder {{htmlelement("script")}}.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Wertes anzugeben, an die die Registrierungsanfrage gesendet wird; siehe [URLs in attributionsrc angeben](#urls_in_attributionsrc_angeben) für weitere Details.

Schauen wir uns ein `<img>`-Element-Beispiel an:

```html
<img src="advertising-image.png" alt="" attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

Der Browser speichert die Attributionsquelldaten, wenn der Browser die Antwort mit der Bilddatei erhält (d.h. wenn das `load`-Ereignis auftritt). Beachten Sie, dass Benutzer das Bild möglicherweise gar nicht wahrnehmen können — es könnte sich um ein 1x1-Pixel, transparentes Tracking-Pixel handeln, das nur für Attributionsberichte verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

Oder über die [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc) Eigenschaft:

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall tritt die Interaktion auf und der Browser speichert die Quelldaten, wenn der Browser die Antwort mit dem Skript erhält.

### JavaScript-basierte Ereignisquellen

Skriptbasierte Attributionsquellen sind vielseitiger als HTML-basierte Attributionsquellen. Sie können ein Skript einrichten, um eine Anfrage zu initiieren, die berechtigt ist, eine Attributionsquelle basierend auf einer beliebigen Anfrage zu registrieren, die zu Ihrer Anwendung passt. Dies ist ein flexibler Ansatz, der nützlich ist, wenn Sie Quelldaten als Reaktion auf benutzerdefinierte Interaktionen speichern möchten, zum Beispiel beim Klicken auf ein benutzerdefiniertes Element oder beim Einreichen eines Formulars.

Um eine skriptbasierte Attributionsquelle einzurichten, können Sie entweder:

- Eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage senden, die die `attributionReporting`-Option enthält:

  ```js
  const attributionReporting = {
    eventSourceEligible: true,
    triggerEligible: false,
  };

  // Optionally set keepalive to ensure the request outlives the page
  function triggerSourceInteraction() {
    fetch("https://shop.example/endpoint", {
      keepalive: true,
      attributionReporting,
    });
  }

  // Associate the interaction trigger with whatever
  // event makes sense for your code (does not have to be a
  // DOM event/user interaction)
  elem.addEventListener("click", triggerSourceInteraction);
  ```

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden, bei der [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf das Anforderungsobjekt aufgerufen wird:

  ```js
  const attributionReporting = {
    eventSourceEligible: true,
    triggerEligible: false,
  };

  function triggerSourceInteraction() {
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
  // event makes sense for your code (does not have to be a
  // DOM event/user interaction)
  elem.addEventListener("click", triggerSourceInteraction);
  ```

In diesem Fall tritt die Interaktion auf und der Browser speichert die Quelldaten, wenn der Browser die Antwort auf die Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede beliebige Ressource sein. Sie muss nicht direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, reinen Text, ein Bild-BLOB oder was auch immer für Ihre Anwendung sinnvoll ist sein.

## URLs in attributionsrc angeben

In allen bisher gesehenen Beispielen wurde das `attributionsrc` Attribut/Feature oder die `attributionSrc` Eigenschaft leer gelassen, wobei der Wert eines leeren Strings angenommen wurde. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, den Sie auch für die Registrierung verwenden möchten, d.h. den {{httpheader("Attribution-Reporting-Eligible")}} Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Source")}} Header antworten.

Es kann jedoch sein, dass die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie möchten die Registrierung der Attributionsquelle einfach auf einem anderen Server abwickeln. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zur Ursprungsressource gesendet; diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

Zum Beispiel könnten Sie im Fall eines `<a>`-Elements die URL(s) im `attributionsrc` Attribut deklarieren:

```html
<a
  href="https://shop.example"
  attributionsrc="https://a.example/register-source">
  Click to visit our shop
</a>
```

Oder in JavaScript über die `attributionSrc` Eigenschaft:

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const aElem = document.querySelector("a");
aElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

Im Falle eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs müssten die verschiedenen URLs als mehrere separate `attributionsrc` Features im [`windowFeatures`](/de/docs/Web/API/Window/open#windowfeatures)-Parameter aufgeführt werden, getrennt durch Kommata oder Leerzeichen:

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
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
> Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Sie könnten zum Beispiel unterschiedliche Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren unterschiedlicher Berichte auf unterschiedlichen Daten umfasst.

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
