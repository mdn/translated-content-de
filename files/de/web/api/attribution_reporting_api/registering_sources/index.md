---
title: Registrieren von Attributionsquellen
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Attributionsquellen registriert werden, wenn Sie die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden.

## Grundlegende Methodik

Attributionsquellen nehmen die Form von Links, Bildern oder Skripten an, die in Inhalten enthalten sind, mit denen Sie Interaktionen messen möchten (zum Beispiel könnten es Anzeigen sein, bei denen Sie Conversions messen möchten). Diese führen dazu, dass der Browser Quelldaten in einem privaten lokalen Cache speichert (nur vom Browser zugänglich), wenn bestimmte Benutzerinteraktionen auftreten. Die verschiedenen Arten von Attributionsquellen werden unterschiedlich registriert und signalisieren Interaktionen auf unterschiedliche Weise — sie werden wie folgt unterschieden:

- Navigationsquellen, die dazu führen, dass der Browser Quelldaten als Reaktion auf eine Navigation speichert — zum Beispiel, wenn der Benutzer auf einen Link klickt oder ihn mit der Tastatur aktiviert oder wenn eine Navigation als Ergebnis eines Aufrufs von [`Window.open()`](/de/docs/Web/API/Window/open) erfolgt. Siehe [Navigationsbasierte Attributionsquellen](#navigationsbasierte_attributionsquellen) für Beispiele.
- Ereignisquellen, die dazu führen, dass der Browser Quelldaten als Reaktion auf das Auslösen von Ereignissen speichert. Siehe [Ereignisbasierte Attributionsquellen](#ereignisbasierte_attributionsquellen) für Beispiele.

Was hinter den Kulissen passiert, um Quellen zu registrieren und die Quelldaten abzurufen und zu speichern, ist in beiden Fällen gleich:

1. Wenn der Benutzer mit einer Attributionsquelle interagiert, sendet sie einen {{httpheader("Attribution-Reporting-Eligible")}}-Header in einer Anforderung an den Server, der die Interaktionen misst (typischerweise der Server des Werbetreibenden), was angibt, dass die Antwort berechtigt ist, eine Quelle zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. Wenn der Server eine Anforderung erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Source")}}-Header zusammen mit der Antwort einfügen, um die Quellenregistrierung abzuschließen. Sein Wert ist ein JSON-String, der die Informationen bereitstellt, die der Browser über die Attributionsquelle speichern soll, mit der interagiert wurde. Die in diesem Header enthaltenen Informationen bestimmen auch, welche Arten von Berichten der Browser generieren wird:
   - Das folgende Beispiel wird einen [Event-Level-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) generieren, wenn ein [Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) einer Quelle zugeordnet wird:

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

     Das einzige erforderliche Feld in diesem Kontext ist `destination`, das 1–3 Sites angibt, auf denen ein Trigger erwartet wird. Diese werden verwendet, um den Attributions-Trigger mit der Quelle zu verknüpfen, wenn mit einem Trigger interagiert wird. Die anderen oben angegebenen Felder haben folgende Funktionen:
     - `"source_event_id"`: Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie mit anderen Informationen zu verknüpfen, wenn mit der Attributionsquelle interagiert wird, oder um Informationen am Berichtsendpunkt zu aggregieren (siehe [Berichte generieren > Grundlegender Prozess](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) für Informationen zum Endpunkt).
     - `"trigger_data"`: Ein Array von 32-Bit-Integern ohne Vorzeichen, die Daten darstellen, die die verschiedenen Triggerereignisse beschreiben, die zu dieser Quelle passen könnten. Zum Beispiel könnten "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" Aktionen sein, die an der Trigger-Site stattfinden und mit dieser Quelle übereinstimmen könnten und auf irgendeine Art Conversion anzeigen, die der Werbetreibende zu messen versucht. Diese müssen mit den in den [Triggern](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegebenen `"trigger_data"` übereinstimmen, damit eine eventbasierte Attribution stattfindet.
       > [!NOTE]
       > Die Werte, die zur Darstellung jedes Ereignisses verwendet werden, und die Anzahl der Elemente im Array sind völlig willkürlich und werden von Ihnen als Entwickler festgelegt. Das Array kann möglicherweise Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit der Browser sie der Quelle zuordnen kann, wenn ein Trigger registriert wird.
     - `"trigger_data_matching"`: Ein String, der angibt, wie die `"trigger_data"` des Triggers mit den `"trigger_data"` der Quelle abgeglichen werden. `"exact"` ist der Wert, den Sie fast immer verwenden werden, um genaue Werte abzugleichen.
     - `"expiry"`: Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv sein wird (d.h. nachfolgende Trigger werden dieser Quelle nicht mehr zugeordnet).
     - `"priority"`: Ein String, der einen Prioritätswert für die Attributionsquelle darstellt. Siehe [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"debug_key"`: Ein im Base-10-Format dargestellter 64-Bit-Integer ohne Vorzeichen, der einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
     - `"event_report_window"`: Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger nicht mehr dieser Quelle für den Zweck der Erstellung von Event-Level-Berichten zugeordnet werden.

     Siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

   - Um den Browser dazu zu bringen, einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) zu generieren, wenn ein Trigger einer Quelle zugeordnet wird, müssen Sie einige zusätzliche Felder einfügen, _zusätzlich_ zu denen, die für die Erstellung eines Event-Level-Berichts erforderlich sind.

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
     - `"aggregation_keys"`: Ein Objekt, das benutzerdefinierte Schlüssel enthält, die verschiedene Datenpunkte darstellen, um Berichtswerte zu aggregieren.
     - `"aggregatable_report_window"`: Ein String, der eine Zeit in Sekunden darstellt, nach der Triggerdaten nicht mehr in generierte aggregierbare Berichte aufgenommen werden.

     Siehe erneut {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

3. Nach einer erfolgreichen Quellenregistrierung speichert der Browser die bereitgestellten Quelldaten in seinem privaten lokalen Cache.

## Navigationsbasierte Attributionsquellen

Navigationsquellen sind nützlich, um Interaktionen mit Links zu messen — zum Beispiel könnte ein Benutzer eine Anzeige auf der Seite eines Herausgebers sehen und darauf klicken, um zur Seite des Werbetreibenden zu navigieren, wo hoffentlich eine Conversion stattfindet.

Es gibt einige verschiedene Arten von navigationsbasierten Attributionsquellen (z. B. das Klicken auf eine Anzeige), die registriert werden können — solche, die auf HTML basieren (die das `attributionsrc`-Attribut verwenden) und solche, die auf Aufrufen von [`Window.open()`](/de/docs/Web/API/Window/open) basieren (die ein `attributionsrc`-Fenstermerkmal verwenden).

### HTML-basierte Navigationsquellen

Um eine navigationsbasierte Attributionsquelle zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten {{htmlelement("a")}}-Element hinzufügen, das angibt, wohin die Registrierungsanfrage gesendet werden soll.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Ort gesendet, auf den verwiesen wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Wertes anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [URLs innerhalb von attributionsrc angeben](#urls_innerhalb_von_attributionsrc_angeben) für weitere Details.

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

In diesem Fall erfolgt die Interaktion, wodurch der Browser die Quelldaten speichert, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn der Benutzer den Link anklickt und der Browser die Antwort erhält.

### Auf Window.open() basierende Navigationsquellen

Sie können auch das `attributionsrc`-Feature-Schlüsselwort zur Features-Eigenschaft eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs hinzufügen. In diesem Beispiel führen wir es als Reaktion auf ein ausgelöstes `click`-Ereignis aus:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn `Window.open()` aufgerufen wird und der Browser die Antwort erhält.

> [!NOTE]
> Wenn Sie ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis wie im obigen Beispiel einrichten, ist es ratsam, es auf einem Steuerelement einzurichten, wo ein Klick erwartet wird, wie z. B. ein {{htmlelement("button")}} oder {{htmlelement("a")}}-Element. Dies macht semantisch mehr Sinn und ist sowohl für Bildschirmleser- als auch für Tastaturnutzer zugänglicher.

> [!NOTE]
> Um eine Attributionsquelle über `open()` zu registrieren, muss es mit {{Glossary("Transient_activation", "vorübergehender Aktivierung")}} aufgerufen werden (d.h. innerhalb eines Benutzerinteraktionsereignis-Handlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion.

## Ereignisbasierte Attributionsquellen

Ereignisbasierte Attributionsquellen führen dazu, dass der Browser Quelldaten als Reaktion auf ein Ereignis speichert, das ausgelöst wird, wie zum Beispiel das `load`-Ereignis im Fall eines `<img>`- oder `<script>`-Elements (die das `attributionsrc`-Attribut verwenden, wie wir es oben beim `<a>`-Element gesehen haben) oder ein benutzerdefiniertes Ereignis Ihrer Wahl, das in Ihrem JavaScript festgelegt wurde.

### HTML-basierte Ereignisquellen

HTML-basierte Ereignisquellen können verwendet werden, um Interaktionen mit einer Herausgeber-Seite zu messen, wenn sie erstmals geladen wird — oder präziser gesagt, wenn ein `<img>` oder `<script>` geladen wird. Um eine ereignisbasierte Attributionsquelle über HTML zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen — {{htmlelement("img")}} oder {{htmlelement("script")}}.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Wertes anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [URLs innerhalb von attributionsrc angeben](#urls_innerhalb_von_attributionsrc_angeben) für weitere Details.

Schauen wir uns ein `<img>`-Element-Beispiel an:

```html
<img src="advertising-image.png" alt="" attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

Der Browser speichert die Attributionsquelldaten, wenn der Browser die Antwort erhält, die die Bilddatei enthält (d.h. wenn das `load`-Ereignis auftritt). Beachten Sie, dass Benutzer das Bild möglicherweise nicht unbedingt wahrnehmen können — es könnte ein 1x1 transparenter Tracking-Pixel sein, der nur zur Attributionsberichterstattung verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

Oder über die [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc) Eigenschaft:

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn der Browser die Antwort enthält, die das Skript enthält.

### JavaScript-basierte Ereignisquellen

Skriptbasierte Attributionsquellen sind vielseitiger als HTML-basierte Attributionsquellen. Sie können ein Skript einrichten, um eine Anfrage einzuleiten, die berechtigt ist, eine Attributionsquelle nach dem von Ihnen bestimmten Antrag zu registrieren. Dies ist ein flexibler Ansatz, der nützlich ist, wenn Sie Quelldaten als Reaktion auf benutzerdefinierte Interaktionen speichern möchten, z. B. das Klicken auf ein benutzerdefiniertes Element oder das Absenden eines Formulars.

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

- Einen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden, bei dem [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt aufgerufen wird:

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
> Die Anfrage kann auf jede Ressource gerichtet sein. Sie muss nicht direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-Blob oder alles andere sein, was für Ihre App sinnvoll ist.

## URLs innerhalb von attributionsrc angeben

Bisher haben wir in allen Beispielen gesehen, dass das `attributionsrc`-Attribut/Feature oder die `attributionSrc`-Eigenschaft leer gelassen wurde und den Wert eines leeren Strings annahm. Das ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, den Sie auch für die Abwicklung der Registrierung verwenden möchten, d.h. um den {{httpheader("Attribution-Reporting-Eligible")}}-Header zu empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header zu antworten.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server durchführen möchten. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zur Ressourceursprung an die in `attributionsrc` angegebenen URL(s) gesendet; diese URLs können dann mit {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

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
> Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf demselben Feature registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren verschiedener Berichte über verschiedene Daten beinhaltet.

## Siehe auch

- [Attribution Reporting Header Validation Tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
