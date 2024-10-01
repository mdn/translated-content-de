---
title: Registrieren von Attribution-Quellen
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie man Attribution-Quellen registriert, wenn man die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwendet.

## Grundlegende Methodik

Attribution-Quellen nehmen die Form von Links, Bildern oder Skripten an, die in Inhalten enthalten sind, mit denen Sie Interaktionen messen wollen (zum Beispiel könnten es Anzeigen sein, bei denen Sie Konversionen messen möchten). Diese veranlassen den Browser, Quelldaten in einem privaten lokalen Cache zu speichern (der nur durch den Browser zugänglich ist), wenn spezifische Benutzerinteraktionen stattfinden. Die verschiedenen Typen von Attribution-Quellen werden auf unterschiedliche Weise registriert und signalisieren Interaktionen – sie werden unterschieden als:

- Navigationsquellen, die den Browser veranlassen, Quelldaten als Reaktion auf eine Navigation zu speichern – zum Beispiel, wenn der Benutzer auf einen Link klickt oder ihn mit der Tastatur aktiviert, oder wenn eine Navigation als Ergebnis eines Aufrufs von [`Window.open()`](/de/docs/Web/API/Window/open) erfolgt. Siehe [Navigationsbasierte Attributionsquellen](#navigationsbasierte_attributionsquellen) für Beispiele.
- Ereignisquellen, die den Browser dazu bringen, Quelldaten als Reaktion auf das Auslösen von Ereignissen zu speichern. Siehe [Ereignisbasierte Attributionsquellen](#ereignisbasierte_attributionsquellen) für Beispiele.

Was hinter den Kulissen bei der Registrierung von Quellen und dem Abrufen und Speichern der Quelldaten passiert, ist in beiden Fällen dasselbe:

1. Wenn der Benutzer mit einer Attribution-Quelle interagiert, sendet sie einen {{httpheader("Attribution-Reporting-Eligible")}}-Header bei einer Anforderung an den Server, der die Interaktionen misst (typischerweise der Server des Werbetreibenden), was signalisiert, dass die Antwort berechtigt ist, eine Quelle zu registrieren. Beispiel:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. Wenn der Server eine Anfrage empfängt, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Source")}}-Header zusammen mit der Antwort einschließen, um die Quellregistrierung abzuschließen. Sein Wert ist ein JSON-String, der die Informationen bereitstellt, die der Browser über die Attribution-Quelle speichern soll, mit der interagiert wurde. Die in diesem Header enthaltenen Informationen bestimmen auch, welche Arten von Berichten der Browser generieren wird:

   - Das folgende Beispiel wird dazu führen, dass ein [Ereignis-Level-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) generiert wird, wenn ein [Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) mit einer Quelle übereinstimmt:

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

     Das einzige erforderliche Feld in diesem Kontext ist `destination`, das 1–3 Seiten angibt, auf denen ein Trigger erwartet wird. Diese werden verwendet, um den Attribution-Trigger mit der Quelle abzugleichen, wenn mit einem Trigger interagiert wird. Die anderen oben angegebenen Felder erfüllen folgende Aufgaben:

     - `"source_event_id"`: Ein String, der eine ID für die Attribution-Quelle darstellt, die verwendet werden kann, um sie mit anderen Informationen zu verknüpfen, wenn mit der Attribution-Quelle interagiert wird, oder aggregierte Informationen am Berichts-Endpunkt (siehe [Berichte generieren > Grundlegender Prozess](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) für Endpunktinformationen) zu erheben.
     - `"trigger_data"`: Ein Array von 32-Bit-unsignierten Ganzzahlen, die Daten darstellen, die die verschiedenen auslösenden Ereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" Aktionen sein, die an der Trigger-Seite stattfinden und als eine Art Konversion anzeigen könnten, die der Werbetreibende zu messen versucht. Diese müssen mit `"trigger_data"` abgeglichen werden, die in [Triggern](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben sind, damit eine Ereignis-Level-Attribution stattfinden kann.
       > [!NOTE]
       > Die Werte, die verwendet werden, um jedes Ereignis darzustellen, und die Anzahl der Elemente im Array sind völlig beliebig und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie vom Browser der Quelle zugeordnet werden können, wenn ein Trigger registriert wird.
     - `"trigger_data_matching"`: Ein String, der angibt, wie die `"trigger_data"` vom Trigger mit der `"trigger_data"` der Quelle abgeglichen wird. `"exact"` ist der Wert, den Sie fast immer verwenden werden, der genaue Werte abgleicht.
     - `"expiry"`: Ein String, der eine Ablaufzeit in Sekunden für die Attribution-Quelle darstellt, nach der sie nicht mehr aktiv ist (d. h. nachfolgende Trigger werden dieser Quelle nicht mehr zugeordnet).
     - `"priority"`: Ein String, der einen Prioritätswert für die Attribution-Quelle darstellt. Siehe [Berichtprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für mehr Informationen.
     - `"debug_key"`: Eine in Basis-10 formatierte 64-Bit-unsignierte Ganzzahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht erzeugen möchten.
     - `"event_report_window"`: Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger dieser Quelle nicht mehr zugeordnet werden, um Ereignis-Level-Berichte zu erstellen.

     Siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller verfügbaren Felder in diesem Header.

   - Um den Browser zu veranlassen, einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) zu generieren, wenn ein Trigger mit einer Quelle übereinstimmt, müssen Sie einige zusätzliche Felder hinzufügen, _zusätzlich_ zu denen, die für das Generieren eines Ereignis-Level-Berichts erforderlich sind.

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

     - `"aggregation_keys"`: Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte darstellen, um die Werte des Berichts zu aggregieren.
     - `"aggregatable_report_window"`: Ein String, der eine Zeit in Sekunden darstellt, nach der Trigger-Daten nicht mehr in generierte aggregierbare Berichte eingeschlossen werden.

     Auch hier siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller verfügbaren Felder in diesem Header.

3. Nach einer erfolgreichen Quellenregistrierung speichert der Browser die bereitgestellten Quelldaten in seinem privaten lokalen Cache.

## Navigationsbasierte Attributionsquellen

Navigationsquellen sind nützlich, um Interaktionen mit Links zu messen – zum Beispiel, ein Benutzer könnte eine Anzeige auf der Seite eines Publishers sehen und darauf klicken, um zur Seite eines Werbetreibenden zu navigieren, wo hoffentlich eine Konversion stattfinden wird.

Es gibt einige verschiedene Arten von navigationsbasierten Attributionsquellen (zum Beispiel das Klicken auf eine Anzeige), die registriert werden können – HTML-basierte (die das `attributionsrc`-Attribut verwenden) und solche, die auf [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen basieren (die ein `attributionsrc`-Fensterfeature verwenden).

### HTML-basierte Navigationsquellen

Um eine navigationsbasierte Attribution-Quelle zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten {{htmlelement("a")}}-Element hinzufügen, das angibt, wohin die Registrierungsanfrage gesendet wird.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Ort gesendet, auf den verlinkt wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Werts anzugeben, an die die Registrierungsanfrage gesendet werden soll; siehe [URL-Spezifizierung innerhalb von attributionsrc](#url-spezifikation_innerhalb_von_attributionsrc) für mehr Details.

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

In diesem Fall erfolgt die Interaktion, wodurch der Browser die mit der navigationsbasierten Attribution-Quelle verknüpften Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Response-Header bereitgestellt) speichert, wenn der Benutzer den Link klickt und der Browser die Antwort erhält.

### Window.open()-basierte Navigationsquellen

Sie können auch das `attributionsrc`-Feature-Schlüsselwort zur Eigenschaften-Eigenschaft eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs hinzufügen. In diesem Beispiel führen wir es als Reaktion auf ein ausgelöstes `click`-Ereignis aus:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

In diesem Fall erfolgt die Interaktion, und der Browser speichert die Quelldaten, wenn `Window.open()` aufgerufen wird und der Browser die Antwort erhält.

> [!NOTE]
> Beim Einrichten eines [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses wie im obigen Beispiel ist es ratsam, es auf einem Steuerelement zu setzen, bei dem ein Klick erwartet wird, wie ein {{htmlelement("button")}} oder {{htmlelement("a")}}-Element. Dies macht semantisch mehr Sinn und ist zugänglicher für sowohl Screenreader- als auch Tastaturnutzer.

> [!NOTE]
> Um eine Attribution-Quelle über `open()` zu registrieren, muss diese mit {{Glossary("Transient_activation", "transient activation")}} aufgerufen werden (d. h. innerhalb eines Benutzerinteraktions-Event-Handlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion.

## Ereignisbasierte Attributionsquellen

Ereignisbasierte Attributionsquellen bewirken, dass der Browser Quelldaten als Reaktion auf das Auslösen eines Ereignisses speichert, wie das `load`-Ereignis im Fall eines `<img>`- oder `<script>`-Elements (die das `attributionsrc`-Attribut verwenden, wie wir oben mit dem `<a>`-Element gesehen haben), oder ein benutzerdefiniertes Ereignis Ihrer Wahl, das in Ihrem JavaScript gesetzt ist.

### HTML-basierte Ereignisquellen

HTML-basierte Ereignisquellen können verwendet werden, um Interaktionen mit der Seite eines Publishers zu messen, wenn sie zuerst geladen wird – oder präziser, wenn ein `<img>` oder `<script>` geladen wird. Um eine ereignisbasierte Attribution-Quelle via HTML zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen – {{htmlelement("img")}} oder {{htmlelement("script")}}.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Werts anzugeben, an die die Registrierungsanfrage gesendet werden soll; siehe [URL-Spezifizierung innerhalb von attributionsrc](#url-spezifikation_innerhalb_von_attributionsrc) für mehr Details.

Siehe ein Beispiel mit einem `<img>`-Element:

```html
<img src="advertising-image.png" attributionsrc />
```

Dies könnte auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreicht werden:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

Der Browser speichert die Attribution-Quelldaten, wenn der Browser die Antwort mit der Bilddatei erhält (d. h. wenn das `load`-Ereignis eintritt). Denken Sie daran, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können – es könnte ein 1x1-Pixel-transparentes Tracking-Bild sein, das nur für die Attribution-Berichterstattung verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte folgendermaßen aussehen:

```html
<script src="advertising-script.js" attributionsrc />
```

Oder über die [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)-Eigenschaft:

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn der Browser die Antwort mit dem Skript empfängt.

### JavaScript-basierte Ereignisquellen

Skriptbasierte Attributionsquellen sind vielseitiger als HTML-basierte Attributionsquellen. Sie können ein Skript einrichten, um eine Anfrage zu initiieren, die berechtigt ist, eine Attribution-Quelle basierend auf jeder Art von Anfragen zu registrieren, die Ihrer Anwendung entspricht. Dies ist ein flexibler Ansatz, nützlich, wenn Sie Quelldaten als Reaktion auf benutzerdefinierte Interaktionen speichern möchten, zum Beispiel das Klicken auf ein benutzerdefiniertes Element oder das Absenden eines Formulars.

Um eine skriptbasierte Attribution-Quelle einzurichten, können Sie entweder:

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

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting), das auf das Anfrageobjekt aufgerufen wird:

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

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn der Browser die Antwort von der fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann sich auf jede Ressource beziehen. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage nach JSON, Klartext, einem Bild-Blob oder etwas anderem sein, das für Ihre Anwendung sinnvoll ist.

## URL-Spezifikation innerhalb von attributionsrc

Bisher haben wir in allen gesehenen Beispielen das `attributionsrc`-Attribut/Feature oder die `attributionSrc`-Eigenschaft leer gelassen und den Wert eines leeren Strings angenommen. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, von dem aus Sie auch die Registrierung abwickeln möchten, d. h. der {{httpheader("Attribution-Reporting-Eligible")}}-Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antworten.

Es kann jedoch vorkommen, dass die angeforderte Ressource sich nicht auf einem Server befindet, den Sie kontrollieren, oder Sie möchten die Registrierung der Attribution-Quelle auf einem anderen Server abwickeln. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, werden die {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zum Ressourcenursprung gesendet; diese URLs können dann mit {{httpheader("Attribution-Reporting-Register-Source")}} entsprechend antworten, um die Quelle zu registrieren.

Zum Beispiel könnten Sie im Fall eines `<a>`-Elements die URL(s) im `attributionsrc`-Attribut deklarieren:

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

Im Fall eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs müssten die verschiedenen URLs als mehrere separate `attributionsrc`-Features im [`windowFeatures`](/de/docs/Web/API/Window/open#windowfeatures)-Parameter aufgelistet werden, getrennt durch Kommas oder Leerzeichen:

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
> Die Angabe mehrerer URLs bedeutet, dass mehrere Attribution-Quellen für dasselbe Feature registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren verschiedener Berichte über verschiedene Daten beinhaltet.

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
