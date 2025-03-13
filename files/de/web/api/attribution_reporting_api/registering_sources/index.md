---
title: Registrieren von Attribution-Quellen
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Sie Attribution-Quellen registrieren, wenn Sie die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden.

## Grundlegende Methodik

Attribution-Quellen nehmen die Form von Links, Bildern oder Skripten an, die in Inhalten enthalten sind, mit denen Sie Interaktionen messen möchten (zum Beispiel könnten es Anzeigen sein, bei denen Sie Konversionen messen möchten). Diese verursachen, dass der Browser Quelldaten in einem privaten lokalen Cache speichert (nur für den Browser zugänglich), wenn spezifische Nutzerinteraktionen auftreten. Die verschiedenen Arten von Attribution-Quellen werden auf unterschiedliche Weise registriert und signalisieren Interaktionen — sie werden unterschieden als:

- Navigationsquellen, die den Browser veranlassen, Quelldaten als Reaktion auf eine Navigation zu speichern — zum Beispiel, wenn der Nutzer auf einen Link klickt oder ihn mit der Tastatur aktiviert, oder wenn eine Navigation als Ergebnis eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs erfolgt. Siehe [Navigationsbasierte Attribution-Quellen](#navigationsbasierte_attribution-quellen) für Beispiele.
- Ereignisquellen, die den Browser veranlassen, Quelldaten als Reaktion auf das Auslösen von Ereignissen zu speichern. Siehe [Ereignisbasierte Attribution-Quellen](#ereignisbasierte_attribution-quellen) für Beispiele.

Was hinter den Kulissen passiert, um Quellen zu registrieren und die Quelldaten zu erfassen und zu speichern, ist in beiden Fällen gleich:

1. Wenn der Nutzer mit einer Attribution-Quelle interagiert, sendet sie einen {{httpheader("Attribution-Reporting-Eligible")}}-Header bei einer Anfrage an den Server, der die Interaktionen misst (typischerweise der Server des Werbetreibenden), was darauf hinweist, dass die Antwort berechtigt ist, eine Quelle zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Source")}}-Header zusammen mit der Antwort einschließen, um die Quellregistrierung abzuschließen. Sein Wert ist eine JSON-Zeichenfolge, die die Informationen bereitstellt, die der Browser über die Attribution-Quelle speichern soll, mit der interagiert wurde. Die in diesem Header enthaltenen Informationen bestimmen auch, welche Arten von Berichten der Browser generieren wird:

   - Das folgende Beispiel führt dazu, dass ein [Ereignis-Level-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) generiert wird, wenn ein [Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) mit einer Quelle übereinstimmt:

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

     Das einzige erforderliche Feld in diesem Zusammenhang ist `destination`, das 1–3 Sites angibt, auf denen ein Trigger erwartet wird. Diese werden verwendet, um den Attribution-Trigger mit der Quelle abzugleichen, wenn mit einem Trigger interagiert wird. Die anderen oben angegebenen Felder bewirken Folgendes:

     - `"source_event_id"`: Eine Zeichenfolge, die eine ID für die Attribution-Quelle darstellt, die verwendet werden kann, um sie beim Interagieren mit der Attribution-Quelle mit anderen Informationen zu verknüpfen oder aggregierte Informationen am Berichts-Endpunkt zu erfassen (siehe [Berichte generieren > Grundprozess](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) für Endpunkt-Informationen).
     - `"trigger_data"`: Ein Array von 32-Bit-unsigned Integers, das Daten repräsentiert, die die verschiedenen Trigger-Ereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten Aktionen wie "Nutzer fügte Artikel in den Warenkorb hinzu" oder "Nutzer meldete sich für den Newsletter an" am Trigger-Standort passieren, die mit dieser Quelle übereinstimmen und eine Art von Konversion anzeigen könnten, die der Werbetreibende zu messen versucht. Diese müssen mit `"trigger_data"` abgeglichen werden, die in [Triggers](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) spezifiziert sind, damit eine Ereignis-Level-Attribution stattfinden kann.
       > [!NOTE]
       > Die Werte, die zur Darstellung jedes Ereignisses verwendet werden, und die Anzahl der Elemente im Array sind völlig beliebig und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um vom Browser der Quelle zugeordnet zu werden, wenn ein Trigger registriert wird.
     - `"trigger_data_matching"`: Eine Zeichenfolge, die angibt, wie die `"trigger_data"` des Triggers mit der `"trigger_data"` der Quelle abgeglichen wird. `"exact"` ist der Wert, den Sie fast immer verwenden werden, der genaue Werte abgleicht.
     - `"expiry"`: Eine Zeichenfolge, die eine Ablaufzeit in Sekunden für die Attribution-Quelle darstellt, nach deren Ablauf sie nicht mehr aktiv ist (d. h. nachfolgende Trigger sind dieser Quelle nicht mehr zuordenbar).
     - `"priority"`: Eine Zeichenfolge, die einen Prioritätswert für die Attribution-Quelle darstellt. Siehe [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"debug_key"`: Eine Basis-10-formatierte 64-Bit-unsigned Integer, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) neben dem zugehörigen Attribution-Bericht generieren möchten.
     - `"event_report_window"`: Eine Zeichenfolge, die eine Zeit in Sekunden darstellt, nach deren Ablauf nachfolgende Trigger nicht mehr dieser Quelle für die Erstellung von Ereignis-Level-Berichten zugeordnet werden.

     Siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller verfügbaren Felder in diesem Header.

   - Um den Browser zu veranlassen, einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) zu generieren, wenn ein Trigger mit einer Quelle übereinstimmt, müssen Sie einige zusätzliche Felder _zusätzlich_ zu denen, die für die Erstellung eines Ereignis-Level-Berichts erforderlich sind, einschließen.

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
     - `"aggregatable_report_window"`: Eine Zeichenfolge, die eine Zeit in Sekunden darstellt, nach deren Ablauf Trigger-Daten nicht mehr in generierte aggregierbare Berichte aufgenommen werden.

     Auch hier siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller verfügbaren Felder in diesem Header.

3. Nach einer erfolgreichen Quellregistrierung speichert der Browser die bereitgestellten Quelldaten in seinem privaten lokalen Cache.

## Navigationsbasierte Attribution-Quellen

Navigationsquellen sind nützlich, um Interaktionen mit Links zu messen — zum Beispiel könnte ein Nutzer eine Anzeige auf der Seite eines Publishers sehen und darauf klicken, um zur Seite des Werbetreibenden zu navigieren, wo idealerweise eine Konversion erfolgt.

Es gibt ein paar verschiedene Arten von navigationsbasierten Attribution-Quellen (zum Beispiel das Klicken auf eine Anzeige), die registriert werden können — solche, die auf HTML basieren (die das `attributionsrc`-Attribut verwenden), und solche, die auf [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen basieren (die ein `attributionsrc`-Fenster-Feature verwenden).

### HTML-basierte Navigationsquellen

Um eine navigationsbasierte Attribution-Quelle zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten {{htmlelement("a")}}-Element hinzufügen, das angibt, wohin die Registrierungsanfrage gesendet wird.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Ort gesendet, auf den verlinkt wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs im Wert anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [Angeben von URLs im attributionsrc](#angeben_von_urls_im_attributionsrc) für weitere Details.

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

In diesem Fall erfolgt die Interaktion, wodurch der Browser die mit der navigationsbasierten Attribution-Quelle verknüpften Quelldaten speichert (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Response-Header bereitgestellt), wenn der Nutzer auf den Link klickt und der Browser die Antwort erhält.

### Window.open()-basierte Navigationsquellen

Sie können auch das `attributionsrc`-Feature-Schlüsselwort zur Features-Eigenschaft eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs hinzufügen. In diesem Beispiel führen wir es als Reaktion auf ein ausgelöstes `click`-Ereignis aus:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn `Window.open()` aufgerufen wird und der Browser die Antwort erhält.

> [!NOTE]
> Beim Einrichten eines [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses wie im obigen Beispiel wird empfohlen, es auf ein Steuerelement zu setzen, bei dem ein Klick erwartet wird, wie ein {{htmlelement("button")}} oder {{htmlelement("a")}}-Element. Dies macht semantisch mehr Sinn und ist sowohl für Bildschirmleser als auch für Tastaturnutzer zugänglicher.

> [!NOTE]
> Um eine Attribution-Quelle über `open()` zu registrieren, muss sie mit {{Glossary("Transient_activation", "transient activation")}} aufgerufen werden (d. h. innerhalb eines Benutzerinteraktion-Ereignishandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion.

## Ereignisbasierte Attribution-Quellen

Ereignisbasierte Attribution-Quellen veranlassen den Browser, Quelldaten als Reaktion auf eine Art von ausgelöstem Ereignis zu speichern, wie das `load`-Ereignis im Fall eines `<img>` oder `<script>`-Elements (die das `attributionsrc`-Attribut wie beim `<a>`-Element verwenden) oder ein benutzerdefiniertes Ereignis Ihrer Wahl, das in Ihrem JavaScript gesetzt ist.

### HTML-basierte Ereignisquellen

HTML-basierte Ereignisquellen können verwendet werden, um Interaktionen mit der Seite eines Publishers zu messen, wenn sie zuerst geladen wird — oder genauer, wenn ein `<img>` oder `<script>` lädt. Um eine ereignisbasierte Attribution-Quelle über HTML zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen — {{htmlelement("img")}} oder {{htmlelement("script")}}.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs im Wert anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [Angeben von URLs im attributionsrc](#angeben_von_urls_im_attributionsrc) für weitere Details.

Werfen wir einen Blick auf ein `<img>`-Element-Beispiel:

```html
<img src="advertising-image.png" attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

Der Browser speichert die Attribution-Quelldaten, wenn der Browser die Antwort mit der Bilddatei erhält (d. h. wenn das `load`-Ereignis auftritt). Beachten Sie, dass Nutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für Attribution-Berichterstellung verwendet wird.

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

Skript-basierte Attribution-Quellen sind vielseitiger als HTML-basierte Attribution-Quellen. Sie können ein Skript einrichten, um eine Anfrage zu initiieren, die berechtigt ist, eine Attribution-Quelle basierend auf beliebigen Anforderungen zu registrieren, die zu Ihrer App passen. Dies ist ein flexibler Ansatz, nützlich, wenn Sie Quelldaten als Reaktion auf benutzerdefinierte Interaktionen speichern möchten, z. B. das Klicken auf ein benutzerdefiniertes Element oder das Absenden eines Formulars.

Um eine skriptbasierte Attribution-Quelle einzurichten, können Sie entweder:

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

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden, wobei [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) am Anforderungsobjekt aufgerufen wird:

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
> Die Anfrage kann sich auf jede Ressource beziehen. Sie muss nicht direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-Blob oder alles andere sein, was für Ihre App sinnvoll ist.

## Angeben von URLs im attributionsrc

Bisher war in allen gezeigten Beispielen das `attributionsrc`-Attribut/Feature oder die `attributionSrc`-Eigenschaft leer, mit dem Wert eines leeren Strings. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource beherbergt, derselbe Server ist, den Sie auch für die Registrierung verwenden möchten, d. h. den {{httpheader("Attribution-Reporting-Eligible")}}-Header erhalten und mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antworten.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie möchten die Registrierung der Attribution-Quelle auf einem anderen Server handhaben. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zum Ursprungsserver der Ressource gesendet; diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

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

Im Fall eines [`Window.open()`](/de/docs/Web/API/Window=open)-Aufrufs müssten die verschiedenen URLs als mehrere separate `attributionsrc`-Features im [`windowFeatures`](/de/docs/Web/API/Window=open#windowfeatures)-Parameter aufgelistet werden, getrennt durch Kommas oder Leerzeichen:

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
> Das Angeben mehrere URLs bedeutet, dass mehrere Attribution-Quellen für dasselbe Feature registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was bedeutet, dass verschiedene Berichte über unterschiedliche Daten generiert werden.

## Siehe auch

- [Attribution Reporting Header Validierungstool](https://wicg.github.io/attribution-reporting-api/validate-headers)
