---
title: Registrierung von Attribution-Quellen
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Sie Attribution-Quellen registrieren, wenn Sie die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden.

## Grundlegende Methodik

Attribution-Quellen nehmen die Form von Links, Bildern oder Skripten innerhalb von Inhalten an, mit denen Sie Interaktionen messen möchten (zum Beispiel könnten es Anzeigen sein, deren Konversionen Sie messen möchten). Diese führen dazu, dass der Browser Quelldaten in einem privaten lokalen Cache speichert (nur für den Browser zugänglich), wenn bestimmte Benutzerinteraktionen auftreten. Die verschiedenen Attribution-Quellentypen werden auf unterschiedliche Weise registriert und signalisieren Interaktionen — sie werden unterschieden als:

- Navigationsquellen, die den Browser dazu veranlassen, Quelldaten als Reaktion auf eine Navigation zu speichern — zum Beispiel, wenn der Benutzer auf einen Link klickt oder ihn mit der Tastatur aktiviert oder wenn eine Navigation als Ergebnis eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs erfolgt. Siehe [Navigationsbasierte Attribution-Quellen](#navigationsbasierte_attribution-quellen) für Beispiele.
- Ereignisquellen, die den Browser dazu veranlassen, Quelldaten als Reaktion auf das Auslösen von Ereignissen zu speichern. Siehe [Ereignisbasierte Attribution-Quellen](#ereignisbasierte_attribution-quellen) für Beispiele.

Was im Hintergrund geschieht, um Quellen zu registrieren und die Quelldaten zu abrufen und zu speichern, ist in beiden Fällen gleich:

1. Wenn der Benutzer mit einer Attribution-Quelle interagiert, sendet er einen {{httpheader("Attribution-Reporting-Eligible")}} Header bei einer Anfrage an den Server, der die Interaktionen misst (typischerweise der Server des Werbetreibenden), was anzeigt, dass die Antwort berechtigt ist, eine Quelle zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible` Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Source")}} Header zusammen mit der Antwort einschließen, um die Quellregistrierung abzuschließen. Sein Wert ist eine JSON-Zeichenkette, die die Informationen bereitstellt, die der Browser über die interagierte Attribution-Quelle speichern soll. Die in diesem Header enthaltenen Informationen bestimmen auch, welche Arten von Berichten der Browser generieren wird:

   - Das folgende Beispiel wird einen [ereignisbasierten Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) generieren, wenn ein [Auslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) einer Quelle zugeordnet wird:

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

     Das einzige erforderliche Feld in diesem Kontext ist `destination`, das 1–3 Sites angibt, auf denen ein Auslöser erwartet wird. Diese werden verwendet, um den Attribution-Auslöser mit der Quelle abzugleichen, wenn mit einem Auslöser interagiert wird. Die anderen oben angegebenen Felder tun Folgendes:

     - `"source_event_id"`: Eine Zeichenkette, die eine ID für die Attribution-Quelle darstellt, die verwendet werden kann, um sie mit anderen Informationen in Verbindung zu bringen, wenn mit der Attribution-Quelle interagiert wird oder um Informationen am Berichts-Endpunkt zu aggregieren (siehe [Berichte generieren > Grundlegender Prozess](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) für Endpunktinformationen).
     - `"trigger_data"`: Ein Array von 32-Bit-unsigned Integers, die Daten repräsentieren, die die verschiedenen Auslöser-Ereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Beispielsweise könnte eine "Benutzer fügte Artikel in den Warenkorb hinzu" oder "Benutzer meldete sich für die Mailingliste an" eine Aktion sein, die an der Auslöser-Site passieren könnte und eine Art Konversion anzeigen könnte, die der Werbetreibende zu messen versucht. Diese müssen mit dem in [Auslöser](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegebenen `"trigger_data"` abgeglichen werden, damit eine ereignisbasierte Attribution stattfindet.
       > [!NOTE]
       > Die Werte, die zur Darstellung jedes Ereignisses verwendet werden, und die Anzahl der Elemente im Array, sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um vom Browser an die Quelle attribuiert zu werden, wenn ein Auslöser registriert wird.
     - `"trigger_data_matching"`: Eine Zeichenkette, die angibt, wie das `"trigger_data"` des Auslösers mit dem `"trigger_data"` der Quelle abgeglichen wird. `"exact"` ist der Wert, den Sie fast immer verwenden werden, der exakte Werte abgleicht.
     - `"expiry"`: Eine Zeichenkette, die eine Ablaufzeit in Sekunden für die Attribution-Quelle darstellt, nach der sie nicht mehr aktiv sein wird (d.h. nachfolgende Auslöser werden dieser Quelle nicht mehr zugeordnet).
     - `"priority"`: Eine Zeichenkette, die einen Prioritätswert für die Attribution-Quelle darstellt. Siehe [Berichtsprioritäten und -limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"debug_key"`: Ein im Dezimalformat formatierter 64-Bit-unsigned Integer, der einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
     - `"event_report_window"`: Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der nachfolgende Auslöser für den Zweck der Erstellung von ereignisbasierten Berichten nicht mehr dieser Quelle zugeordnet werden.

     Siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

   - Um den Browser dazu zu bringen, einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) zu generieren, wenn ein Auslöser einer Quelle zugeordnet wird, müssen Sie zusätzlich zu den erforderlichen Feldern für die Generierung eines ereignisbasierten Berichts einige zusätzliche Felder enthalten.

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

     - `"aggregation_keys"`: Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte repräsentieren, unter denen Berichtswerte aggregiert werden sollen.
     - `"aggregatable_report_window"`: Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der Auslösedaten nicht mehr in generierte aggregierbare Berichte aufgenommen werden.

     Siehe erneut {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller auf diesem Header verfügbaren Felder.

3. Nach einer erfolgreichen Quellregistrierung speichert der Browser die bereitgestellten Quelldaten in seinem privaten lokalen Cache.

## Navigationsbasierte Attribution-Quellen

Navigationsquellen sind nützlich für die Messung von Interaktionen mit Links — zum Beispiel könnte ein Benutzer eine Anzeige auf einer Seite eines Publishers sehen und darauf klicken, um zur Seite des Werbetreibenden zu navigieren, wo hoffentlich eine Konversion stattfindet.

Es gibt ein paar verschiedene Arten von navigationsbasierten Attribution-Quellen (zum Beispiel das Klicken auf eine Anzeige), die registriert werden können — solche, die auf HTML basieren (die das `attributionsrc` Attribut verwenden) und solche, die auf [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen basieren (die ein `attributionsrc` Fenstermerkmal verwenden).

### HTML-basierte Navigationsquellen

Um eine navigationsbasierte Attribution-Quelle zu registrieren, können Sie das `attributionsrc` Attribut zu einem entsprechenden {{htmlelement("a")}}-Element hinzufügen, das angibt, wohin die Registrierungsanfrage gesendet wird.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Ort gesendet, zu dem verlinkt wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Wertes anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [URLs im attributionsrc angeben](#urls_im_attributionsrc_angeben) für mehr Details.

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

In diesem Fall erfolgt die Interaktion, die den Browser dazu veranlasst, die Quelldaten der navigationsbasierten Attribution-Quelle zu speichern (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header bereitgestellt), wenn der Benutzer auf den Link klickt und der Browser die Antwort erhält.

### Window.open()-basierte Navigationsquellen

Sie können auch das `attributionsrc`-Schlüsselwort zu den Merkmalen-Eigenschaften eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs hinzufügen. In diesem Beispiel führen wir es als Reaktion auf ein ausgelöstes `click`-Ereignis aus:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

In diesem Fall erfolgt die Interaktion, und der Browser speichert die Quelldaten, wenn `Window.open()` aufgerufen wird und der Browser die Antwort erhält.

> [!NOTE]
> Wenn Sie ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis wie im obigen Beispiel einrichten, ist es ratsam, dieses auf ein Steuerelement zu setzen, bei dem ein Klick erwartet wird, wie z.B. ein {{htmlelement("button")}} oder {{htmlelement("a")}}-Element. Dies macht semantisch mehr Sinn und ist sowohl für Bildschirmleser als auch Tastaturbenutzer zugänglicher.

> [!NOTE]
> Um eine Attribution-Quelle über `open()` zu registrieren, muss es mit {{Glossary("Transient_activation", "transient activation")}} aufgerufen werden (d.h. innerhalb eines Benutzerereignishandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion.

## Ereignisbasierte Attribution-Quellen

Ereignisbasierte Attribution-Quellen führen dazu, dass der Browser Quelldaten als Reaktion auf irgendeine Art von Ereignisauslösung speichert, wie z.B. das `load`-Ereignis im Fall eines `<img>` oder `<script>`-Elementes (die das `attributionsrc` Attribut verwenden, wie oben bei dem `<a>`-Element gesehen), oder ein benutzerdefiniertes Ereignis Ihrer Wahl in Ihrem JavaScript.

### HTML-basierte Ereignisquellen

HTML-basierte Ereignisquellen können verwendet werden, um Interaktionen mit der Seite eines Publishers zu messen, wenn sie zuerst geladen wird — oder genauer gesagt, wenn ein `<img>` oder `<script>` geladen wird. Um eine ereignisbasierte Attribution-Quelle über HTML zu registrieren, können Sie das `attributionsrc`-Attribut zu einem entsprechenden Element hinzufügen — {{htmlelement("img")}} oder {{htmlelement("script")}}.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Wertes anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [URLs im attributionsrc angeben](#urls_im_attributionsrc_angeben) für mehr Details.

Schauen wir uns ein Beispiel für ein `<img>`-Element an:

```html
<img src="advertising-image.png" attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

Der Browser speichert die Attribution-Quelldaten, wenn der Browser die Antwort mit der Bilddatei erhält (d.h. wenn das `load`-Ereignis auftritt). Bedenken Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte ein 1x1 transparentes Tracking-Pixel sein, das nur für Attribution-Reporting verwendet wird.

Ein Beispiel für ein {{htmlelement("script")}}-Element könnte so aussehen:

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

Skript-basierte Attribution-Quellen sind vielseitiger als HTML-basierte Attribution-Quellen. Sie können ein Skript einrichten, um eine Anfrage zu initiieren, die berechtigt ist, eine Attribution-Quelle basierend auf einer beliebigen Anfrage zu registrieren, die zu Ihrer App passt. Dies ist ein flexibler Ansatz, der nützlich ist, wenn Sie Quelldaten als Reaktion auf benutzerdefinierte Interaktionen speichern möchten, zum Beispiel das Klicken auf ein benutzerdefiniertes Element oder das Absenden eines Formulars.

Um eine skript-basierte Attribution-Quelle einzurichten, können Sie entweder:

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

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) aufgerufen auf dem Anforderungsobjekt senden:

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

In diesem Fall tritt die Interaktion auf und der Browser speichert die Quelldaten, wenn der Browser die Antwort von der Fetch-Anfrage erhält.

> [!NOTE]
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-Blob oder was auch immer sonst für Ihre App sinnvoll ist, sein.

## URLs im attributionsrc angeben

Bisher haben wir in allen gesehenen Beispielen das `attributionsrc`-Attribut/Merkmal oder die `attributionSrc`-Eigenschaft leer gelassen, indem wir den Wert einer leeren Zeichenkette verwenden. Das ist in Ordnung, wenn der Server, der die angeforderte Ressource hostet, derselbe Server ist, der auch die Registrierung handhaben soll, d.h. den {{httpheader("Attribution-Reporting-Eligible")}} Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Source")}} Header antworten.

Allerdings könnte es sein, dass die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie einfach die Registrierung der Attribution-Quelle auf einem anderen Server handhaben möchten. In solchen Fällen können Sie eine oder mehrere URLs als Wert für `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header zusätzlich zum Ressourcenursprung an die im `attributionsrc` angegebenen URLs gesendet; diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

Zum Beispiel, im Fall eines `<a>`-Elements könnten Sie die URL(s) im `attributionsrc`-Attribut angeben:

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

Im Fall eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs müssten die verschiedenen URLs als mehrere separate `attributionsrc` Merkmale im [`windowFeatures`](/de/docs/Web/API/Window/open#windowfeatures)-Parameter aufgelistet werden, getrennt durch Kommas oder Leerzeichen:

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
> Das Angeben mehrerer URLs bedeutet, dass mehrere Attribution-Quellen auf dem gleichen Merkmal registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die das Generieren verschiedener Berichte über verschiedene Daten beinhalten.

## Siehe auch

- [Attribution Reporting Header Validierungstool](https://wicg.github.io/attribution-reporting-api/validate-headers)
