---
title: Registrieren von Quellen zur Attribution
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Quellen zur Attribution registriert werden können, wenn die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwendet wird.

## Grundlegende Methodik

Quellen zur Attribution nehmen die Form von Links, Bildern oder Skripten an, die in Inhalten enthalten sind, mit denen Sie Interaktionen messen möchten (zum Beispiel Anzeigen, bei denen Sie Konversionen messen wollen). Diese führen dazu, dass der Browser Quelldaten in einem privaten lokalen Cache speichert (nur zugänglich durch den Browser), wenn bestimmte Benutzerinteraktionen auftreten. Die verschiedenen Arten von Quellen zur Attribution werden unterschiedlich registriert und signalisieren Interaktionen auf verschiedene Weisen – sie werden unterschieden als:

- Navigationsquellen, die den Browser dazu veranlassen, Quelldaten als Reaktion auf Navigationen zu speichern – beispielsweise, wenn der Benutzer auf einen Link klickt oder diesen mit der Tastatur aktiviert, oder wenn eine Navigation als Ergebnis eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs erfolgt. Siehe [Navigationsbasierte Quellen zur Attribution](#navigationsbasierte_quellen_zur_attribution) für Beispiele.
- Ereignisquellen, die den Browser dazu veranlassen, Quelldaten als Reaktion auf Ereignisauslösungen zu speichern. Siehe [Ereignisbasierte Quellen zur Attribution](#ereignisbasierte_quellen_zur_attribution) für Beispiele.

Was hinter den Kulissen passiert, um Quellen zu registrieren und die Quelldaten abzurufen und zu speichern, ist in beiden Fällen gleich:

1. Wenn der Benutzer mit einer Quelle zur Attribution interagiert, sendet sie einen {{httpheader("Attribution-Reporting-Eligible")}}-Header auf einer Anfrage an den Server, der die Interaktionen misst (typischerweise der Server des Werbetreibenden), was darauf hinweist, dass die Antwort berechtigt ist, eine Quelle zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er zusammen mit der Antwort einen {{httpheader("Attribution-Reporting-Register-Source")}}-Header einfügen, um die Quellregistrierung abzuschließen. Sein Wert ist ein JSON-String, der die Informationen bereitstellt, die der Browser über die Quelle zur Attribution, mit der interagiert wurde, speichern soll. Die Informationen in diesem Header bestimmen auch, welche Art von Berichten der Browser erzeugen wird:

   - Das folgende Beispiel wird dazu führen, dass ein [Ereignislevel-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) generiert wird, wenn ein [Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) mit einer Quelle übereinstimmt:

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

     Das einzige erforderliche Feld in diesem Kontext ist `destination`, das 1–3 Seiten angibt, auf denen ein Trigger erwartet wird. Diese werden verwendet, um den Attributions-Trigger mit der Quelle abzugleichen, wenn ein Trigger ausgelöst wird. Die anderen oben angegebenen Felder bewirken Folgendes:

     - `"source_event_id"`: Ein String, der eine ID für die Quelle zur Attribution darstellt, die verwendet werden kann, um diese mit anderen Informationen abzugleichen, wenn die Quelle zur Attribution interagiert wird, oder um Informationen an der Berichts-Endstelle zusammenzufassen (siehe [Berichte generieren > Grundprozess](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) für Informationen zu Endpunkten).
     - `"trigger_data"`: Ein Array von 32-Bit-Integern ohne Vorzeichen, die Daten darstellen, welche die verschiedenen Trigger-Ereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnte "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" Aktionen sein, die an der Trigger-Seite stattfinden und mit dieser Quelle übereinstimmen und eine Art von Konversion anzeigen, die der Werbetreibende zu messen versucht. Diese müssen mit `"trigger_data"` übereinstimmen, die in [Triggern](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) für Ereignislevel-Attribution spezifiziert sind.
       > [!NOTE]
       > Die Werte, die verwendet werden, um jedes Ereignis zu repräsentieren, und die Anzahl der Elemente im Array sind vollständig willkürlich und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, jedoch müssen Werte im Array vorhanden sein, damit sie der Quelle vom Browser zugeordnet werden, wenn ein Trigger registriert wird.
     - `"trigger_data_matching"`: Ein String, der angibt, wie die `"trigger_data"` aus dem Trigger mit der `"trigger_data"` der Quelle abgeglichen wird. `"exact"` ist der Wert, den Sie fast immer verwenden werden und der exakte Werte abgleicht.
     - `"expiry"`: Ein String, der eine Ablaufzeit in Sekunden für die Quelle zur Attribution darstellt, nach der diese nicht mehr aktiv ist (d.h. nachfolgende Trigger können nicht mehr dieser Quelle zugeordnet werden).
     - `"priority"`: Ein String, der einen Prioritätswert für die Quelle zur Attribution darstellt. Siehe [Berichtsprioritäten und -limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"debug_key"`: Ein 64-Bit-Integer ohne Vorzeichen im Dezimalformat, der einen Debug-Schlüssel darstellt. Setzen Sie diese, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusätzlich zum zugehörigen Attributionsbericht generieren möchten.
     - `"event_report_window"`: Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger nicht mehr dieser Quelle zugeordnet werden, um Ereignislevel-Berichte zu erstellen.

     Siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

   - Um den Browser dazu zu bringen, einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) zu generieren, wenn ein Trigger mit einer Quelle abgeglichen wird, müssen Sie einige zusätzliche Felder einfügen, _zusätzlich_ zu denen, die für die Erstellung eines Ereignislevel-Berichts erforderlich sind.

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

     - `"aggregation_keys"`: Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte darstellen, unter denen Berichtswerte aggregiert werden.
     - `"aggregatable_report_window"`: Ein String, der eine Zeit in Sekunden darstellt, nach der Triggerdaten nicht mehr in aggregierten Berichten enthalten sein werden.

     Auch hier siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

3. Nach erfolgreicher Registrierung einer Quelle speichert der Browser die bereitgestellten Quelldaten in seinem privaten lokalen Cache.

## Navigationsbasierte Quellen zur Attribution

Navigationsquellen sind nützlich, um Interaktionen mit Links zu messen – beispielsweise kann ein Benutzer eine Anzeige auf der Seite eines Publishers sehen und darauf klicken, um zur Seite des Werbetreibenden zu navigieren, wo hoffentlich eine Konversion stattfinden wird.

Es gibt ein paar verschiedene Arten von navigationsbasierten Quellen zur Attribution (zum Beispiel das Klicken auf eine Anzeige), die registriert werden können – solche, die auf HTML basieren (die das `attributionsrc`-Attribut verwenden) und solche, die auf [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen basieren (die ein `attributionsrc`-Fensterfeature verwenden).

### HTML-basierte Navigationsquellen

Um eine navigationsbasierte Quelle zur Attribution zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten {{htmlelement("a")}}-Element hinzufügen, das angibt, wohin die Registrierungsanfrage gesendet werden soll.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Ort gesendet, zu dem verlinkt wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Wertes anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [URLs innerhalb von attributionsrc angeben](#urls_innerhalb_von_attributionsrc_angeben) für mehr Details.

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

In diesem Fall erfolgt die Interaktion, wodurch der Browser die mit der navigationsbasierten Quelle zur Attribution verbundenen Quelldaten speichert (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn der Benutzer auf den Link klickt und der Browser die Antwort erhält.

### Window.open()-basierte Navigationsquellen

Sie können auch das Schlüsselwort-Feature `attributionsrc` zur Features-Eigenschaft eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs hinzufügen. In diesem Beispiel wird es als Reaktion auf das Auslösen eines `click`-Ereignisses ausgeführt:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn `Window.open()` aufgerufen wird und der Browser die Antwort erhält.

> [!NOTE]
> Wenn Sie ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis einrichten, wie im obigen Beispiel, ist es ratsam, es auf einem Steuerungselement zu setzen, bei dem ein Klick erwartet wird, wie einem {{htmlelement("button")}}- oder {{htmlelement("a")}}-Element. Dies ist semantisch sinnvoller und zugänglicher für sowohl Benutzer von Bildschirmlesegeräten als auch Benutzer von Tastaturen.

> [!NOTE]
> Um eine Quelle zur Attribution über `open()` zu registrieren, muss es mit {{Glossary("Transient_activation", "transient activation")}} (d.h. innerhalb eines Benutzerinteraktions-Ereignishandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion aufgerufen werden.

## Ereignisbasierte Quellen zur Attribution

Ereignisbasierte Quellen zur Attribution führen dazu, dass der Browser Quelldaten als Reaktion auf das Auslösen einer Art von Ereignis speichert, wie das `load`-Ereignis im Fall eines `<img>`- oder `<script>`-Elements (die, wie oben bei dem `<a>`-Element gesehen, das `attributionsrc`-Attribut verwenden), oder ein benutzerdefiniertes Ereignis Ihrer Wahl, das in Ihrem JavaScript festgelegt ist.

### HTML-basierte Ereignisquellen

HTML-basierte Ereignisquellen können verwendet werden, um Interaktionen mit der Seite eines Publishers zu messen, wenn sie zuerst geladen wird – oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Um eine ereignisbasierte Quelle zur Attribution über HTML zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen – {{htmlelement("img")}} oder {{htmlelement("script")}}.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Wertes anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [URLs innerhalb von attributionsrc angeben](#urls_innerhalb_von_attributionsrc_angeben) für mehr Details.

Sehen wir uns ein `<img>`-Element-Beispiel an:

```html
<img src="advertising-image.png" attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

Der Browser speichert die Quelldaten zur Attribution, wenn der Browser die Antwort erhält, die die Bilddatei enthält (d.h. wenn das `load`-Ereignis eintritt). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können – es könnte ein 1x1 transparenter Tracking-Pixel sein, der nur für die Attributionserstellung verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte folgendermaßen aussehen:

```html
<script src="advertising-script.js" attributionsrc />
```

Oder über die [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)-Eigenschaft:

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn der Browser die Antwort erhält, die das Skript enthält.

### JavaScript-basierte Ereignisquellen

Script-basierte Quellen zur Attribution sind vielseitiger als HTML-basierte Quellen zur Attribution. Sie können ein Skript einrichten, um eine Anfrage zu initiieren, die berechtigt ist, eine Quelle zur Attribution zu registrieren, basierend auf welcher Anfrage für Ihre App geeignet ist. Dies ist ein flexibler Ansatz, nützlich, wenn Sie Quelldaten als Reaktion auf benutzerdefinierte Interaktionen speichern möchten, zum Beispiel beim Klicken auf ein benutzerdefiniertes Element oder beim Absenden eines Formulars.

Um eine script-basierte Quelle zur Attribution einzurichten, können Sie entweder:

- Eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage senden, die die Option `attributionReporting` enthält:

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

- Einen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden, bei dem [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt aufgerufen wird:

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

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn der Browser die Antwort von der Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-Blob oder was auch immer für Ihre App sinnvoll ist, sein.

## URLs innerhalb von attributionsrc angeben

Bisher haben wir in allen gesehenen Beispielen das `attributionsrc`-Attribut/Feature oder die `attributionSrc`-Eigenschaft leer gelassen, wobei der Wert eine leere Zeichenkette ist. Das ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, den Sie auch für die Handhabung der Registrierung nutzen wollen, d.h. den {{httpheader("Attribution-Reporting-Eligible")}}-Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antworten.

Es könnte aber sein, dass die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie möchten einfach die Registrierung der Quelle zur Attribution auf einem anderen Server handhaben. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprung der Ressource an die(s) in `attributionsrc` angegebene(n) URL(s) gesendet; diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} reagieren, um die Quelle zu registrieren.

Zum Beispiel könnten Sie im Fall eines `<a>`-Elements die URL(s) im `attributionsrc`-Attribut angeben:

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

Im Fall eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs müssten die verschiedenen URLs als mehrere getrennte `attributionsrc`-Features im [`windowFeatures`](/de/docs/Web/API/Window/open#windowfeatures)-Parameter aufgelistet werden, getrennt durch Kommas oder Leerzeichen:

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
> Das Angeben mehrerer URLs bedeutet, dass mehrere Quellen zur Attribution auf demselben Feature registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen wollen, was das Generieren verschiedener Berichte zu unterschiedlichen Daten umfasst.

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
