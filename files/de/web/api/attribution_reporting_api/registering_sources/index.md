---
title: Registrieren von Attributionsquellen
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Sie Attributionsquellen registrieren, wenn Sie die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden.

## Grundlegende Methodik

Attributionsquellen nehmen die Form von Links, Bildern oder Skripten an, die in Inhalten enthalten sind, mit denen Sie Interaktionen messen möchten (zum Beispiel könnten es Anzeigen sein, für die Sie Conversions messen möchten). Diese führen dazu, dass der Browser Quelldaten in einem privaten lokalen Cache speichert (nur vom Browser zugänglich), wenn bestimmte Benutzerinteraktionen auftreten. Die verschiedenen Arten von Attributionsquellen werden auf unterschiedliche Weise registriert und signalisieren Interaktionen – sie werden wie folgt unterschieden:

- Navigationsquellen, die dazu führen, dass der Browser Quelldaten als Reaktion auf Navigation speichert – zum Beispiel, wenn der Benutzer auf einen Link klickt oder ihn über die Tastatur aktiviert, oder wenn eine Navigation als Ergebnis eines [`Window.open()`](/de/docs/Web/API/Window/open) Aufrufs erfolgt. Siehe [Navigationsbasierte Attributionsquellen](#navigationsbasierte_attributionsquellen) für Beispiele.
- Ereignisquellen, die dazu führen, dass der Browser Quelldaten als Reaktion auf das Auslösen von Ereignissen speichert. Siehe [Ereignisbasierte Attributionsquellen](#ereignisbasierte_attributionsquellen) für Beispiele.

Was im Hintergrund geschieht, um Quellen zu registrieren und die Quelldaten abzurufen und zu speichern, ist in beiden Fällen dasselbe:

1. Wenn der Benutzer mit einer Attributionsquelle interagiert, sendet sie einen {{httpheader("Attribution-Reporting-Eligible")}}-Header bei einer Anfrage an den Server, der die Interaktionen misst (typischerweise der Server des Werbetreibenden), was anzeigt, dass die Antwort berechtigt ist, eine Quelle zu registrieren. Beispiel:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er zusammen mit der Antwort einen {{httpheader("Attribution-Reporting-Register-Source")}}-Header einschließen, um die Quellenregistrierung abzuschließen. Sein Wert ist ein JSON-String, der die Informationen bereitstellt, die der Browser über die Attributionsquelle, mit der interagiert wurde, speichern soll. Die in diesem Header enthaltenen Informationen bestimmen auch, welche Arten von Berichten der Browser generieren wird:
   - Das folgende Beispiel wird einen [Ereignisebenenbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) generieren, wenn ein [Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) einer Quelle zugeordnet wird:

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

     Das einzige erforderliche Feld in diesem Kontext ist `destination`, das 1–3 Sites angibt, auf denen ein Trigger erwartet wird. Diese werden verwendet, um den Attribution-Trigger der Quelle zuzuordnen, wenn mit einem Trigger interagiert wird. Die anderen oben angegebenen Felder tun Folgendes:
     - `"source_event_id"`: Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie mit anderen Informationen zu verknüpfen, wenn mit der Attributionsquelle interagiert wird, oder um Informationen am Berichts-Endpunkt zu aggregieren (siehe [Generieren von Berichten > Grundlegender Prozess](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) für Informationen zu Endpunkten).
     - `"trigger_data"`: Ein Array von 32-Bit-Unsigned-Integern, das Daten darstellt, die die verschiedenen Triggerereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" Aktionen sein, die an der Trigger-Site passieren und eine Art von Conversion anzeigen, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` abgeglichen werden, die in [Triggern](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben sind, damit eine Ereignisebenenattribution stattfinden kann.
       > [!NOTE]
       > Die Werte, die verwendet werden, um jedes Ereignis zu repräsentieren, und die Anzahl der Elemente im Array sind vollständig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie der Quelle vom Browser zugeordnet werden, wenn ein Trigger registriert wird.
     - `"trigger_data_matching"`: Ein String, der angibt, wie die `"trigger_data"` des Triggers mit der `"trigger_data"` der Quelle abgeglichen wird. `"exact"` ist der Wert, den Sie fast immer verwenden werden, der exakte Werte abgleicht.
     - `"expiry"`: Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Trigger werden dieser Quelle nicht mehr zugeordnet).
     - `"priority"`: Ein String, der einen Prioritätswert für die Attributionsquelle darstellt. Siehe [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"debug_key"`: Ein base-10-formatierter 64-Bit-Unsigned-Integer, der einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
     - `"event_report_window"`: Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger nicht mehr dieser Quelle für den Zweck der Erstellung von Ereignisebenenberichten zugeordnet werden.

     Siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

   - Um den Browser zu veranlassen, einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) zu generieren, wenn ein Trigger einer Quelle zugeordnet wird, müssen Sie einige zusätzliche Felder _zusätzlich_ zu denen, die für die Erstellung eines Ereignisebenenberichts benötigt werden, einschließen.

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
     - `"aggregation_keys"`: Ein Objekt, das benutzerdefinierte Schlüssel enthält, die verschiedene Datenpunkte darstellen, unter denen Berichtswerte aggregiert werden sollen.
     - `"aggregatable_report_window"`: Ein String, der eine Zeit in Sekunden darstellt, nach der Triggerdaten nicht mehr in generierte aggregierbare Berichte einbezogen werden.

     Auch hier gilt, siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

3. Nach einer erfolgreichen Quellenregistrierung speichert der Browser die bereitgestellten Quelldaten in seinem privaten lokalen Cache.

## Navigationsbasierte Attributionsquellen

Navigationsquellen sind nützlich für die Messung von Interaktionen mit Links – zum Beispiel könnte ein Benutzer eine Anzeige auf einer Publisher-Seite sehen und darauf klicken, um zur Seite des Werbetreibenden zu navigieren, wo idealerweise eine Conversion erfolgen wird.

Es gibt einige verschiedene Arten von navigationsbasierten Attributionsquellen (zum Beispiel das Klicken auf eine Anzeige), die registriert werden können – diejenigen basierend auf HTML (die das `attributionsrc`-Attribut verwenden) und diejenigen basierend auf [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen (die ein `attributionsrc`-Fensterfeature verwenden).

### HTML-basierte Navigationsquellen

Um eine navigationsbasierte Attributionsquelle zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten {{htmlelement("a")}}-Element hinzufügen, das angibt, wohin die Registrierungsanfrage gesendet wird.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Ort gesendet, auf den verlinkt wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs im Wert anzugeben, um die Registrierungsanfrage zu senden; siehe [URLs im attributionsrc angeben](#urls_im_attributionsrc_angeben) für weitere Details.

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

In diesem Fall kommt es zur Interaktion, wodurch der Browser die mit der navigationsbasierten Attributionsquelle verbundenen Quelldaten speichert (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn der Benutzer auf den Link klickt und der Browser die Antwort erhält.

### Window.open()-basierte Navigationsquellen

Sie können auch das `attributionsrc`-Feature-Schlüsselwort zur features-Eigenschaft eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs hinzufügen. In diesem Beispiel führen wir es als Reaktion auf ein ausgelöstes `click`-Ereignis aus:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn `Window.open()` aufgerufen wird, und der Browser die Antwort erhält.

> [!NOTE]
> Beim Einrichten eines [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses wie im obigen Beispiel ist es ratsam, es auf einem Steuerelement zu platzieren, bei dem ein Klick zu erwarten ist, wie einem {{htmlelement("button")}}- oder {{htmlelement("a")}}-Element. Dies macht semantisch mehr Sinn und ist sowohl für Bildschirmleser- als auch Tastaturnutzer zugänglicher.

> [!NOTE]
> Um eine Attributionsquelle über `open()` zu registrieren, muss sie mit {{Glossary("Transient_activation", "transient activation")}} aufgerufen werden (d.h. innerhalb eines Benutzerinteraktions-Ereignishandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion.

## Ereignisbasierte Attributionsquellen

Ereignisbasierte Attributionsquellen führen dazu, dass der Browser Quelldaten als Reaktion auf das Auslösen eines Ereignisses speichert, wie das `load`-Ereignis im Fall eines `<img>`- oder `<script>`-Elements (die das `attributionsrc`-Attribut verwenden, wie wir es oben mit dem `<a>`-Element gesehen haben), oder eines benutzerdefinierten Ereignisses Ihrer Wahl, das in Ihrem JavaScript festgelegt wurde.

### HTML-basierte Ereignisquellen

HTML-basierte Ereignisquellen können verwendet werden, um Interaktionen mit der Seite eines Publishers zu messen, wenn sie erstmals geladen wird – oder genauer, wenn ein `<img>` oder `<script>` geladen wird. Um eine ereignisbasierte Attributionsquelle über HTML zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen – {{htmlelement("img")}} oder {{htmlelement("script")}}.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs im Wert anzugeben, um die Registrierungsanfrage zu senden; siehe [URLs im attributionsrc angeben](#urls_im_attributionsrc_angeben) für weitere Details.

Schauen wir uns ein `<img>`-Element-Beispiel an:

```html
<img src="advertising-image.png" attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

Der Browser speichert die Attributionsquellendaten, wenn der Browser die Antwort mit der Bilddatei erhält (d.h. wenn das `load`-Ereignis eintritt). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können – es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für Attributionsberichtszwecke verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

Oder über die [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)-Eigenschaft:

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn der Browser die Antwort mit dem Skript erhält.

### JavaScript-basierte Ereignisquellen

Skriptbasierte Attributionsquellen sind vielseitiger als HTML-basierte Attributionsquellen. Sie können ein Skript einrichten, um eine Anfrage zu initiieren, die berechtigt ist, eine Attributionsquelle basierend auf jeder geeigneten Anfrage für Ihre App zu registrieren. Dies ist ein flexibler Ansatz, nützlich, wenn Sie Quelldaten im Rahmen von benutzerdefinierten Interaktionen speichern möchten, zum Beispiel das Klicken auf ein benutzerdefiniertes Element oder das Absenden eines Formulars.

Um eine skriptbasierte Attributionsquelle einzurichten, können Sie entweder:

- Eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage mit der `attributionReporting`-Option senden:

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

- Einen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden, mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf das Anfrageobjekt aufgerufen:

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

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn der Browser die Antwort auf die Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-BLOB oder alles andere sein, was für Ihre App sinnvoll ist.

## URLs im attributionsrc angeben

Bisher wurde in allen Beispielen, die wir gesehen haben, das `attributionsrc`-Attribut/Feature oder die `attributionSrc`-Eigenschaft leer gelassen, was dem Wert eines leeren Strings entspricht. Das ist in Ordnung, wenn der Server, auf dem die angeforderte Ressource liegt, derselbe Server ist, den Sie auch für die Handhabung der Registrierung möchten, d.h. um den {{httpheader("Attribution-Reporting-Eligible")}}-Header zu empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header zu antworten.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt, oder Sie möchten die Registrierung der Attributionsquelle auf einem anderen Server handhaben. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zum Ressourcenspeicherort gesendet; diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

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

Im Fall eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs müssten die verschiedenen URLs als mehrere separate `attributionsrc`-Features im [`windowFeatures`](/de/docs/Web/API/Window/open#windowfeatures)-Parameter aufgelistet werden, entweder durch Kommas oder Leerzeichen getrennt:

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
> Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf demselben Feature registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie zu messen versuchen, wobei verschiedene Berichte über unterschiedliche Daten generiert werden.

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
