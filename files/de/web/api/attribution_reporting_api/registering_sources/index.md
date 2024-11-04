---
title: Registrierung von Attributionsquellen
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: d270b0a55b9f2b02c2471eba9d56f7348e61b5ad
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Attributionsquellen registriert werden, wenn die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwendet wird.

## Grundlegende Methodik

Attributionsquellen nehmen die Form von Links, Bildern oder Skripten an, die innerhalb von Inhalten enthalten sind, mit denen Sie Interaktionen messen möchten (zum Beispiel könnten sie Anzeigen sein, bei denen Sie Conversions messen möchten). Diese veranlassen den Browser, Quelldaten in einem privaten lokalen Cache zu speichern (nur für den Browser zugänglich), wenn bestimmte Benutzerinteraktionen auftreten. Die verschiedenen Attributionsquellentypen werden auf unterschiedliche Weise registriert und signalisieren Interaktionen – sie unterscheiden sich als:

- Navigationsquellen, die den Browser veranlassen, Quelldaten als Reaktion auf die Navigation zu speichern – zum Beispiel, wenn der Benutzer auf einen Link klickt oder ihn mit der Tastatur aktiviert, oder wenn eine Navigation als Ergebnis eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs erfolgt. Beispiele finden Sie unter [Navigationsbasierte Attributionsquellen](#navigationsbasierte_attributionsquellen).
- Ereignisquellen, die den Browser veranlassen, Quelldaten als Reaktion auf das Auslösen von Ereignissen zu speichern. Beispiele finden Sie unter [Ereignisbasierte Attributionsquellen](#ereignisbasierte_attributionsquellen).

Was hinter den Kulissen passiert, um Quellen zu registrieren und die Quelldaten abzurufen und zu speichern, ist in beiden Fällen dasselbe:

1. Wenn der Benutzer mit einer Attributionsquelle interagiert, sendet sie einen {{httpheader("Attribution-Reporting-Eligible")}}-Header in einer Anfrage an den Server, der die Interaktionen misst (typischerweise der Server des Werbetreibenden), die anzeigt, dass die Antwort berechtigt ist, eine Quelle zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er zusammen mit der Antwort einen {{httpheader("Attribution-Reporting-Register-Source")}}-Header einschließen, um die Registrierung der Quelle abzuschließen. Sein Wert ist ein JSON-String, der die Informationen bereitstellt, die der Browser über die Attributionsquelle speichern soll, mit der interagiert wurde. Die in diesem Header enthaltenen Informationen bestimmen auch, welche Arten von Berichten der Browser generieren wird:

   - Das folgende Beispiel führt dazu, dass ein [Ereignisniveau-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) generiert wird, wenn ein [Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) mit einer Quelle übereinstimmt:

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

     Das einzige erforderliche Feld in diesem Kontext ist `destination`, das 1–3 Seiten spezifiziert, auf denen ein Trigger erwartet wird. Diese werden verwendet, um den Attributionstrigger mit der Quelle abzugleichen, wenn mit einem Trigger interagiert wird. Die anderen oben spezifizierten Felder tun Folgendes:

     - `"source_event_id"`: Ein String, der eine ID für die Attributionsquelle repräsentiert, die verwendet werden kann, um sie mit anderen Informationen zu verbinden, wenn mit der Attributionsquelle interagiert wird, oder um Informationen am Berichts-Endpunkt zu aggregieren (siehe [Berichte generieren > Grundlegender Prozess](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) für Endpunktinformationen).
     - `"trigger_data"`: Ein Array von 32-Bit-ungezeichneten Ganzzahlen, die Daten darstellen, die die verschiedenen Triggereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer fügte Artikel zum Warenkorb hinzu" oder "Benutzer meldete sich für Mailingliste an" Aktionen sein, die an der Triggervorrichtung passieren und eine Art von Conversion andeuten, die der Werbetreibende messen möchte. Diese müssen gegen `"trigger_data"` abgeglichen werden, die in [Triggern](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) spezifiziert sind, damit eine attribution auf Ereignisebene stattfinden kann.
       > [!NOTE]
       > Die Werte, die verwendet werden, um jedes Ereignis zu repräsentieren, und die Anzahl der Elemente im Array sind vollständig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um von dem Browser der Quelle zugeordnet zu werden, wenn ein Trigger registriert wird.
     - `"trigger_data_matching"`: Ein String, der angibt, wie das `"trigger_data"` des Triggers mit dem `"trigger_data"` der Quelle abgeglichen wird. `"exact"` ist der Wert, den Sie fast immer verwenden werden, wodurch genaue Werte abgeglichen werden.
     - `"expiry"`: Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle repräsentiert, nach der sie nicht mehr aktiv sein wird (d. h. nachfolgende Trigger werden dieser Quelle nicht mehr zugeordnet).
     - `"priority"`: Ein String, der einen Prioritätswert für die Attributionsquelle repräsentiert. Mehr Informationen finden Sie unter [Reportprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
     - `"debug_key"`: Eine in Basis-10 formatierte 64-Bit-ungezeichnete Ganzzahl, die einen Debug-Schlüssel repräsentiert. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
     - `"event_report_window"`: Ein String, der eine Zeit in Sekunden repräsentiert, nach der nachfolgende Trigger für das Erstellen von Berichten auf Ereignisniveau nicht mehr dieser Quelle zugeordnet werden.

     Siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller verfügbaren Felder in diesem Header.

   - Um den Browser dazu zu bringen, einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) zu generieren, wenn ein Trigger mit einer Quelle übereinstimmt, müssen Sie einige zusätzliche Felder _neben_ denen, die für die Erstellung eines Ereignisniveau-Berichts erforderlich sind, einschließen.

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

     - `"aggregation_keys"`: Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte darstellen, unter denen Berichtswerte aggregiert werden sollen.
     - `"aggregatable_report_window"`: Ein String, der eine Zeit in Sekunden repräsentiert, nach der Triggermeldungen nicht mehr in generierten aggregierbaren Berichten enthalten sein werden.

     Auch hier finden Sie {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

3. Nach einer erfolgreichen Quellenregistrierung speichert der Browser die bereitgestellten Quelldaten in seinem privaten lokalen Cache.

## Navigationsbasierte Attributionsquellen

Navigationsquellen sind nützlich, um Interaktionen mit Links zu messen – zum Beispiel könnte ein Benutzer eine Anzeige auf einer Publisher-Seite sehen und darauf klicken, um zur Seite des Werbetreibenden zu navigieren, wo hoffentlich eine Conversion stattfindet.

Es gibt einige verschiedene Arten von navigationsbasierten Attributionsquellen (zum Beispiel das Klicken auf eine Anzeige), die registriert werden können – diejenigen, die auf HTML basieren (die das `attributionsrc`-Attribut verwenden), und diejenigen, die auf [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen basieren (die ein `attributionsrc`-Fenster-Feature verwenden).

### HTML-basierte Navigationsquellen

Um eine navigationsbasierte Attributionsquelle zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten {{htmlelement("a")}}-Element hinzufügen, das angibt, wohin die Registrierungsanfrage gesendet wird.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den verlinkten Ort gesendet. Es ist auch möglich, eine oder mehrere zusätzliche URLs in den Wert einzuschließen, um die Registrierungsanfrage dorthin zu senden; siehe [Speziell URLs innerhalb attributionsrc](#spezifizieren_von_urls_innerhalb_attributionsrc) für mehr Details.

`attributionsrc` kann deklarativ hinzugefügt werden:

```html
<a href="https://shop.example" attributionsrc target="_blank">
  Click to visit our shop
</a>
```

Oder über die [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc)-Eigenschaft:

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

In diesem Fall erfolgt die Interaktion, wodurch der Browser die mit der navigationsbasierten Attributionsquelle verbundenen Quelldaten speichert (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn der Benutzer auf den Link klickt und der Browser die Antwort erhält.

### Window.open()-basierte Navigationsquellen

Sie können auch das `attributionsrc`-Feature-Schlüsselwort zur `features`-Eigenschaft eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs hinzufügen. In diesem Beispiel führen wir es als Reaktion auf das Auslösen eines `click`-Ereignisses aus:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn `Window.open()` aufgerufen wird und der Browser die Antwort erhält.

> [!NOTE]
> Wenn Sie ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis wie im obigen Beispiel einrichten, ist es ratsam, es an einem Steuerelement zu setzen, bei dem ein Klick erwartet wird, wie etwa einem {{htmlelement("button")}}- oder {{htmlelement("a")}}-Element. Dies macht semantisch mehr Sinn und ist sowohl für Bildschirmleser als auch für Tastaturbenutzer zugänglicher.

> [!NOTE]
> Um eine Attributionsquelle über `open()` zu registrieren, muss es mit {{Glossary("Transient_activation", "transient activation")}} (d. h. innerhalb eines Benutzerinteraktions-Ereignishandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion aufgerufen werden.

## Ereignisbasierte Attributionsquellen

Ereignisbasierte Attributionsquellen veranlassen den Browser, Quelldaten als Reaktion auf das Auslösen eines Ereignisses zu speichern, wie zum Beispiel des `load`-Ereignisses im Falle eines `<img>`- oder `<script>`-Elements (die das `attributionsrc`-Attribut verwenden, wie wir es oben mit dem `<a>`-Element gesehen haben), oder eines benutzerdefinierten Ereignisses Ihrer Wahl, das Sie in Ihrem JavaScript festlegen.

### HTML-basierte Ereignisquellen

HTML-basierte Ereignisquellen können verwendet werden, um Interaktionen mit der Publikumsseite zu messen, wenn sie zum ersten Mal geladen wird – oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Um eine ereignisbasierte Attributionsquelle über HTML zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen — {{htmlelement("img")}} oder {{htmlelement("script")}}.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs in den Wert einzuschließen, um die Registrierungsanfrage dorthin zu senden; siehe [Speziell URLs innerhalb attributionsrc](#spezifizieren_von_urls_innerhalb_attributionsrc) für mehr Details.

Lassen Sie uns ein `<img>`-Element-Beispiel betrachten:

```html
<img src="advertising-image.png" attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

Der Browser speichert die Attributionsquellendaten, wenn der Browser die Antwort erhält, die die Bilddatei enthält (d. h. wenn das `load`-Ereignis auftritt). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte ein 1x1-transparentes Tracking-Pixel sein, das nur für die Attributionsberichterstattung verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

Oder über die [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)-Eigenschaft:

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn der Browser die Antwort erhält, die das Skript enthält.

### JavaScript-basierte Ereignisquellen

Skriptbasierte Attributionsquellen sind vielseitiger als HTML-basierte Attributionsquellen. Sie können ein Skript einrichten, um eine Anfrage zu initiieren, die berechtigt ist, eine Attributionsquelle basierend auf welcher Anforderung auch immer für Ihre App geeignet ist, zu registrieren. Dies ist ein flexibler Ansatz, der nützlich ist, wenn Sie Quelldaten als Reaktion auf benutzerdefinierte Interaktionen speichern möchten, zum Beispiel beim Klicken auf ein benutzerdefiniertes Element oder beim Einreichen eines Formulars.

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

- Einen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden, bei dem [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) am Anforderungsobjekt aufgerufen wird:

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

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn der Browser die Antwort auf die fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, reinen Text, ein Bild-Blob oder was auch immer für Ihre App sinnvoll ist, sein.

## Spezifizieren von URLs innerhalb attributionsrc

Bisher haben wir in allen Beispielen gesehen, dass das `attributionsrc`-Attribut/Feature oder die `attributionSrc`-Eigenschaft leer gelassen wurde, was den Wert eines leeren Strings annimmt. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, den Sie auch für die Bearbeitung der Registrierung verwenden möchten, d. h. der {{httpheader("Attribution-Reporting-Eligible")}}-Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antworten soll.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt, oder Sie möchten einfach die Registrierung der Attributionsquelle auf einem anderen Server verwalten. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet; diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

Zum Beispiel können Sie im Fall eines `<a>`-Elements die URL(s) im `attributionsrc`-Attribut deklarieren:

```html
<a
  href="https://shop.example"
  attributionsrc="https://a.example/register-source">
  Click to visit our shop
</a>
```

Oder in JavaScript über die `attributionSrc`-Eigenschaft:

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const aElem = document.querySelector("a");
aElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

Im Fall eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs müssten die verschiedenen URLs als mehrere separate `attributionsrc`-Features im [`windowFeatures`](/de/docs/Web/API/Window/open#windowfeatures)-Parameter, getrennt durch Kommata oder Leerzeichen, aufgelistet werden:

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
> Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Sie könnten zum Beispiel unterschiedliche Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren unterschiedlicher Berichte über unterschiedliche Daten beinhaltet.

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
