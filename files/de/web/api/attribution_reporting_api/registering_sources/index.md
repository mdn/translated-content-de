---
title: Registrierung von Attributionsquellen
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Attributionsquellen registriert werden, wenn die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwendet wird.

## Grundlegende Methodik

Attributionsquellen nehmen die Form von Links, Bildern oder Skripten an, die in Inhalte eingebettet sind, mit denen Sie Interaktionen messen möchten (zum Beispiel könnten es Anzeigen sein, deren Konversionen Sie messen möchten). Diese veranlassen den Browser, Quelldaten in einem privaten lokalen Cache zu speichern (nur für den Browser zugänglich), wenn bestimmte Benutzerinteraktionen stattfinden. Die verschiedenen Arten von Attributionsquellen werden unterschiedlich registriert und signalisieren Interaktionen auf unterschiedliche Weise — sie lassen sich wie folgt unterscheiden:

- Navigationsquellen, die den Browser veranlassen, Quelldaten als Reaktion auf Navigationen zu speichern — zum Beispiel, wenn der Benutzer auf einen Link klickt oder ihn mit der Tastatur aktiviert, oder wenn eine Navigation infolge eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs stattfindet. Beispiele finden Sie unter [Navigationsbasierte Attributionsquellen](#navigationsbasierte_attributionsquellen).
- Ereignisquellen, die den Browser veranlassen, Quelldaten als Reaktion auf das Auslösen von Ereignissen zu speichern. Beispiele finden Sie unter [Ereignisbasierte Attributionsquellen](#ereignisbasierte_attributionsquellen).

Was im Hintergrund geschieht, um Quellen zu registrieren und die Quelldaten zu speichern und abzurufen, ist in beiden Fällen dasselbe:

1. Wenn der Benutzer mit einer Attributionsquelle interagiert, sendet sie einen {{httpheader("Attribution-Reporting-Eligible")}} Header bei einer Anfrage an den Server, der die Interaktionen misst (typischerweise der Werbeserver), was anzeigt, dass die Antwort berechtigt ist, eine Quelle zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible` Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Source")}} Header zusammen mit der Antwort zurücksenden, um die Quellregistrierung abzuschließen. Sein Wert ist eine JSON-Zeichenkette, die die Informationen bereitstellt, die der Browser über die Attributionsquelle speichern soll, mit der interagiert wurde. Die Informationen, die in diesem Header enthalten sind, bestimmen auch, welche Arten von Berichten der Browser generieren wird:

   - Das folgende Beispiel führt dazu, dass ein [Ereignisbericht auf Ebene](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) generiert wird, wenn ein [Auslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) mit einer Quelle abgeglichen wird:

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

     Das einzige erforderliche Feld in diesem Kontext ist `destination`, das 1–3 Websites angibt, auf denen ein Auslöser erwartet wird. Diese werden verwendet, um den Attributionsauslöser mit der Quelle abzugleichen, wenn mit einem Auslöser interagiert wird. Die anderen oben angegebenen Felder tun Folgendes:

     - `"source_event_id"`: Eine Zeichenkette, die eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie bei der Interaktion mit der Attributionsquelle mit anderen Informationen zu verknüpfen oder Informationen am Berichterstellungspunkt zu aggregieren (siehe [Erstellen von Berichten > Grundlegender Prozess](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) für Informationen zum Endpunkt).
     - `"trigger_data"`: Ein Array von 32-Bit-unsigned-Integern, die Daten darstellen, die die verschiedenen Auslöseereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Beispielsweise könnten "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für Mailingliste angemeldet" Aktionen sein, die auf der Auslöser-Website geschehen und mit dieser Quelle übereinstimmen könnten und eine Art von Konversion anzeigen, die der Werbetreibende zu messen versucht. Diese müssen gegen `"trigger_data"` abgeglichen werden, die in [Auslösern](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben sind, damit eine ereignisbezogene Zuordnung stattfinden kann.
       > [!NOTE]
       > Die Werte, die zur Darstellung jedes Ereignisses verwendet werden, und die Anzahl der Elemente im Array sind völlig willkürlich und werden von Ihnen als Entwickler festgelegt. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie dem Browser zugeordnet werden können, wenn ein Auslöser registriert wird.
     - `"trigger_data_matching"`: Eine Zeichenkette, die angibt, wie das `"trigger_data"` des Auslösers mit dem `"trigger_data"` der Quelle abgeglichen wird. `"exact"` ist der Wert, den Sie fast immer verwenden werden und der genaue Werte abgleicht.
     - `"expiry"`: Eine Zeichenkette, die eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv wird (d.h. nachfolgende Auslöser werden dieser Quelle nicht mehr zuordenbar sein).
     - `"priority"`: Eine Zeichenkette, die einen Prioritätswert für die Attributionsquelle darstellt. Siehe [Berichtsprioritäten und -limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"debug_key"`: Ein 64-Bit-unsigned Integer im Basis-10-Format, der einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
     - `"event_report_window"`: Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der nachfolgende Auslöser nicht mehr dieser Quelle zugeordnet werden, um Berichte auf Ereignisebene zu erstellen.

     Siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller verfügbaren Felder in diesem Header.

   - Um den Browser einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) generieren zu lassen, wenn ein Auslöser mit einer Quelle abgeglichen wird, müssen Sie einige zusätzliche Felder hinzufügen, _zusätzlich_ zu denen, die für die Erstellung eines Berichts auf Ereignisebene erforderlich sind.

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

     - `"aggregation_keys"`: Ein Objekt, das benutzerdefinierte Schlüssel enthält, die verschiedene Datenpunkte repräsentieren, um Berichtswerte zu aggregieren.
     - `"aggregatable_report_window"`: Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der Auslöserdaten in generierten aggregierbaren Berichten nicht mehr enthalten sein werden.

     Erneut siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller in diesem Header verfügbaren Felder.

3. Nach einer erfolgreichen Quellregistrierung speichert der Browser die bereitgestellten Quelldaten in seinem privaten lokalen Cache.

## Navigationsbasierte Attributionsquellen

Navigationsquellen sind nützlich, um Interaktionen mit Links zu messen — beispielsweise könnte ein Benutzer eine Anzeige auf der Seite eines Veröffentlichers sehen und auf sie klicken, um zur Seite des Werbetreibenden zu navigieren, wo hoffentlich eine Konversion stattfinden wird.

Es gibt verschiedene Arten von navigationsbasierten Attributionsquellen (zum Beispiel das Klicken auf eine Anzeige), die registriert werden können — solche auf Basis von HTML (die das `attributionsrc`-Attribut verwenden) und solche auf Basis von [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen (die ein `attributionsrc`-Fensterfeature verwenden).

### HTML-basierte Navigationsquellen

Um eine navigationsbasierte Attributionsquelle zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten {{htmlelement("a")}}-Element hinzufügen, das angibt, wohin die Registrierungsanfrage gesendet wird.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Ort gesendet, zu dem verlinkt wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Werts anzugeben, an die die Registrierungsanfrage gesendet wird; siehe [URLs im attributionsrc angeben](#urls_im_attributionsrc_angeben) für weitere Details.

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

In diesem Fall erfolgt die Interaktion, die den Browser veranlasst, die Quelldaten, die mit der navigationsbasierten Attributionsquelle verknüpft sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), zu speichern, wenn der Benutzer auf den Link klickt und der Browser die Antwort erhält.

### Window.open()-basierte Navigationsquellen

Sie können auch das `attributionsrc`-Feature-Schlüsselwort zur features-Eigenschaft eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs hinzufügen. In diesem Beispiel führen wir es als Reaktion auf ein `click`-Ereignis aus:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

In diesem Fall findet die Interaktion statt, und der Browser speichert die Quelldaten, wenn `Window.open()` aufgerufen wird und der Browser die Antwort erhält.

> [!NOTE]
> Beim Einrichten eines [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses wie im obigen Beispiel ist es ratsam, es an einem Bedienelement einzurichten, bei dem ein Klick erwartet wird, wie z.B. einem {{htmlelement("button")}}- oder {{htmlelement("a")}}-Element. Dies macht mehr Sinn in Bezug auf die Semantik und ist sowohl für Screenreader- als auch für Tastaturbenutzer zugänglicher.

> [!NOTE]
> Um eine Attributionsquelle über `open()` zu registrieren, muss es mit [transient activation](/de/docs/Glossary/Transient_activation) (d.h. innerhalb eines Benutzerinteraktionsereignis-Handlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion aufgerufen werden.

## Ereignisbasierte Attributionsquellen

Ereignisbasierte Attributionsquellen veranlassen den Browser, Quelldaten als Reaktion auf das Feuern eines beliebigen Ereignisses zu speichern, wie z.B. das `load`-Ereignis im Fall eines `<img>`- oder `<script>`-Elements (die das `attributionsrc`-Attribut verwenden, wie wir es oben mit dem `<a>`-Element gesehen haben), oder ein benutzerdefiniertes Ereignis Ihrer Wahl, das in Ihrem JavaScript gesetzt ist.

### HTML-basierte Ereignisquellen

HTML-basierte Ereignisquellen können verwendet werden, um Interaktionen mit der Seite eines Publishers zu messen, wenn sie das erste Mal geladen wird — oder präziser gesagt, wenn ein `<img>` oder `<script>` lädt. Um eine ereignisbasierte Attributionsquelle über HTML zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen — {{htmlelement("img")}} oder {{htmlelement("script")}}.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Werts anzugeben, an die die Registrierungsanfrage gesendet wird; siehe [URLs im attributionsrc angeben](#urls_im_attributionsrc_angeben) für weitere Details.

Schauen wir uns ein `<img>`-Element-Beispiel an:

```html
<img src="advertising-image.png" attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

Der Browser speichert die Attributionsquellendaten, wenn der Browser die Antwort erhält, die die Bilddatei enthält (d.h. wenn das `load`-Ereignis eintritt). Beachten Sie, dass Benutzer das Bild möglicherweise gar nicht wahrnehmen können — es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für Attributionsberichte verwendet wird.

Ein Beispiel für ein {{htmlelement("script")}} könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc />
```

Oder über die [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)-Eigenschaft:

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall findet die Interaktion statt, und der Browser speichert die Quelldaten, wenn der Browser die Antwort erhält, die das Skript enthält.

### JavaScript-basierte Ereignisquellen

Skriptbasierte Attributionsquellen sind vielseitiger als HTML-basierte Attributionsquellen. Sie können ein Skript einrichten, um eine Anfrage zu initiieren, die berechtigt ist, eine Attributionsquelle basierend auf einer beliebigen Interaktion zu registrieren, die zu Ihrer App passt. Dies ist ein flexibler Ansatz, der nützlich ist, wenn Sie Quelldaten als Antwort auf benutzerdefinierte Interaktionen speichern möchten, beispielsweise beim Klicken auf ein benutzerdefiniertes Element oder beim Absenden eines Formulars.

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

- Ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden, bei dem [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt aufgerufen wird:

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

In diesem Fall erfolgt die Interaktion, und der Browser speichert die Quelldaten, wenn der Browser die Antwort von der Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-Blob oder was auch immer für Ihre App Sinn ergibt, sein.

## URLs im attributionsrc angeben

In allen bisher gesehenen Beispielen wurde das `attributionsrc`-Attribut/Feature oder die `attributionSrc`-Eigenschaft leer gelassen und der Wert eines leeren Strings angenommen. Das ist in Ordnung, wenn der Server, der die angeforderte Ressource enthält, derselbe Server ist, den Sie auch für das Registrieren verwenden möchten, d. h. der den {{httpheader("Attribution-Reporting-Eligible")}}-Header empfängt und mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antwortet.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem Server ist, den Sie kontrollieren, oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcennachfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprungsverweis an die in `attributionsrc` angegebenen URL(s) gesendet; diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

Beispielsweise könnten Sie im Fall eines `<a>`-Elements die URL(s) im `attributionsrc`-Attribut deklarieren:

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

Im Fall eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs müssten die verschiedenen URLs als mehrere separate `attributionsrc`-Features im [`windowFeatures`](/de/docs/Web/API/Window/open#windowfeatures)-Parameter aufgelistet werden, getrennt durch Kommata oder Leerzeichen:

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
> Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf demselben Feature registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die das Generieren verschiedener Berichte über unterschiedliche Daten beinhalten.

## Siehe auch

- [Validierungstool für Attributionsberichterstattungs-Header](https://wicg.github.io/attribution-reporting-api/validate-headers)
