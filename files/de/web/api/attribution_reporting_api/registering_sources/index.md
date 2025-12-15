---
title: Registrierung von Attribution-Quellen
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: 9e837bbcce64783e14f56b16eb1612b05e7d8fdc
---

{{DefaultAPISidebar("Attribution Reporting API")}}{{deprecated_header}}

Dieser Artikel erklärt, wie Sie Attribution-Quellen bei Verwendung der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) registrieren.

## Grundlegende Methodik

Attribution-Quellen können in Form von Links, Bildern oder Skripten vorliegen, die in Inhalten enthalten sind, mit denen Sie Interaktionen messen möchten (zum Beispiel Anzeigen, deren Konversionen Sie messen möchten). Diese bewirken, dass der Browser Quelldaten in einem privaten lokalen Cache speichert (der nur vom Browser abgerufen werden kann), wenn bestimmte Benutzerinteraktionen auftreten. Die unterschiedlichen Attribution-Quelltypen werden auf unterschiedliche Weise registriert und signalisieren Interaktionen unterschiedlich – sie werden wie folgt unterschieden:

- Navigationsquellen, die den Browser veranlassen, Quelldaten als Reaktion auf eine Navigation zu speichern – zum Beispiel, wenn der Benutzer auf einen Link klickt oder ihn mit der Tastatur aktiviert, oder wenn eine Navigation als Ergebnis eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs erfolgt. Weitere Informationen finden Sie unter [Navigationsbasierte Attribution-Quellen](#navigationsbasierte_attribution-quellen).
- Ereignisquellen, die den Browser veranlassen, Quelldaten als Reaktion auf das Auslösen von Ereignissen zu speichern. Weitere Informationen finden Sie unter [Ereignisbasierte Attribution-Quellen](#ereignisbasierte_attribution-quellen).

Was hinter den Kulissen passiert, um Quellen zu registrieren und Quelldaten abzurufen und zu speichern, ist in beiden Fällen dasselbe:

1. Wenn der Benutzer mit einer Attribution-Quelle interagiert, sendet es einen {{httpheader("Attribution-Reporting-Eligible")}}-Header in einer Anfrage an den Server, der die Interaktionen misst (typischerweise den Server des Werbetreibenden), der angibt, dass die Antwort berechtigt ist, eine Quelle zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er zusammen mit der Antwort einen {{httpheader("Attribution-Reporting-Register-Source")}}-Header einschließen, um die Quellenregistrierung abzuschließen. Sein Wert ist eine JSON-Zeichenfolge, die die Informationen bereitstellt, die der Browser über die Attribution-Quelle speichern soll, mit der interagiert wurde. Die in diesem Header enthaltenen Informationen bestimmen auch, welche Arten von Berichten der Browser generieren wird:
   - Das folgende Beispiel wird einen [Ereignisbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) generieren, wenn ein [Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) mit einer Quelle übereinstimmt:

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

     Das einzige erforderliche Feld in diesem Kontext ist `destination`, das 1–3 Seiten angibt, auf denen ein Trigger erwartet wird. Diese werden verwendet, um den Attribution-Trigger mit der Quelle abzugleichen, wenn mit einem Trigger interagiert wird. Die anderen oben angegebenen Felder erfüllen folgende Funktionen:
     - `"source_event_id"`: Eine Zeichenfolge, die eine ID für die Attribution-Quelle darstellt, die verwendet werden kann, um sie anderen Informationen zuzuordnen, wenn mit der Attribution-Quelle interagiert wird, oder um Informationen am Berichts-Endpunkt zu aggregieren (siehe [Generierung von Berichten > Anfangsprozess](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) für Informationen zum Endpunkt).
     - `"trigger_data"`: Ein Array von 32-Bit-unsigned-Integers, das Daten darstellt, die die verschiedenen Trigger-Ereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnte "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich in die Mailingliste eingetragen" eine Aktion sein, die auf der Trigger-Seite stattfindet, die mit dieser Quelle übereinstimmen und eine Art Konversion anzeigen könnte, die der Werbetreibende zu messen versucht. Diese müssen mit `"trigger_data"` übereinstimmen, die für [Trigger](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben sind, damit eine ereignisbasierte Attribution stattfinden kann.
       > [!NOTE]
       > Die Werte, die verwendet werden, um jedes Ereignis darzustellen, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, jedoch müssen Werte im Array vorhanden sein, damit sie vom Browser der Quelle zugeordnet werden können, wenn ein Trigger registriert wird.
     - `"trigger_data_matching"`: Eine Zeichenfolge, die angibt, wie die `"trigger_data"` vom Trigger mit der `"trigger_data"` der Quelle abgeglichen werden. `"exact"` ist der Wert, den Sie fast immer verwenden werden und der genaue Werte abgleicht.
     - `"expiry"`: Eine Zeichenfolge, die eine Ablaufzeit in Sekunden für die Attribution-Quelle darstellt, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Trigger nicht mehr auf diese Quelle zurückgeführt werden können).
     - `"priority"`: Eine Zeichenfolge, die einen Prioritätswert für die Attribution-Quelle darstellt. Weitere Informationen finden Sie unter [Berichtsprioritäten und -limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
     - `"debug_key"`: Eine im Basis-10-Format dargestellte 64-Bit-unsigned-Integer, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie zusammen mit dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.
     - `"event_report_window"`: Eine Zeichenfolge, die eine Zeit in Sekunden repräsentiert, nach der nachfolgende Trigger nicht mehr dieser Quelle zugeordnet werden können, um ereignisbasierte Berichte zu erstellen.

     Siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller Felder, die in diesem Header verfügbar sind.

   - Um den Browser zur Generierung eines [Zusammenfassungsberichts](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) zu veranlassen, wenn ein Trigger mit einer Quelle abgeglichen wird, müssen einige zusätzliche Felder _zusätzlich_ zu denen, die zur Generierung eines Event-Level-Berichts erforderlich sind, eingeschlossen werden.

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
     - `"aggregation_keys"`: Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die unterschiedliche Datenpunkte repräsentieren, um Berichtswerte unter ihnen zu aggregieren.
     - `"aggregatable_report_window"`: Eine Zeichenfolge, die eine Zeit in Sekunden repräsentiert, nach der Trigger-Daten nicht mehr in generierte aggregierbare Berichte aufgenommen werden.

     Auch hier siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller verfügbaren Felder in diesem Header.

3. Nach einer erfolgreichen Quellenregistrierung speichert der Browser die bereitgestellten Quelldaten in seinem privaten lokalen Cache.

## Navigationsbasierte Attribution-Quellen

Navigationsquellen sind nützlich, um Interaktionen mit Links zu messen – zum Beispiel könnte ein Benutzer eine Anzeige auf einer Seite eines Publishers sehen und darauf klicken, um zur Seite des Werbetreibenden zu navigieren, auf der hoffentlich eine Konversion stattfindet.

Es gibt einige verschiedene Arten von navigationsbasierten Attribution-Quellen (zum Beispiel das Klicken auf eine Anzeige), die registriert werden können – solche, die auf HTML basieren (die das `attributionsrc`-Attribut verwenden) und solche, die auf [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen basieren (die ein `attributionsrc`-Fenstermerkmal verwenden).

### HTML-basierte Navigationsquellen

Um eine navigationsbasierte Attribution-Quelle zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten {{htmlelement("a")}}-Element hinzufügen, das angibt, wohin die Registrierungsanforderung gesendet wird.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Ort gesendet, auf den verwiesen wird. Es ist auch möglich, ein oder mehrere zusätzliche URLs im Wert anzugeben, an die die Registrierungsanfrage gesendet wird; siehe die [Angabe von URLs innerhalb von attributionsrc](#angabe_von_urls_innerhalb_von_attributionsrc) für weitere Details.

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

In diesem Fall erfolgt die Interaktion, wodurch der Browser die Quelldaten speichert, die mit der navigationsbasierten Attribution-Quelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header bereitgestellt), wenn der Benutzer auf den Link klickt und der Browser die Antwort erhält.

### Window.open()-basierte Navigationsquellen

Sie können das `attributionsrc`-Feature-Schlüsselwort auch zu der Features-Eigenschaft eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs hinzufügen. In diesem Beispiel führen wir es als Reaktion auf ein ausgelöstes `click`-Ereignis aus:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn `Window.open()` aufgerufen wird und der Browser die Antwort erhält.

> [!NOTE]
> Beim Einrichten eines [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses wie im obigen Beispiel ist es ratsam, dieses auf einer Steuerung einzurichten, bei der ein Klick erwartet wird, wie einem {{htmlelement("button")}}- oder {{htmlelement("a")}}-Element. Dies macht semantisch mehr Sinn und ist sowohl für Benutzer von Bildschirmlesegeräten als auch für Tastaturnutzer besser zugänglich.

> [!NOTE]
> Um eine Attribution-Quelle über `open()` zu registrieren, muss es mit {{Glossary("Transient_activation", "transient activation")}} (d.h. innerhalb eines Benutzerinteraktions-Ereignishandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion aufgerufen werden.

## Ereignisbasierte Attribution-Quellen

Ereignisbasierte Attribution-Quellen veranlassen den Browser, Quelldaten als Reaktion auf das Auslösen eines Ereignisses zu speichern, wie z.B. das `load`-Ereignis im Fall eines `<img>`- oder `<script>`-Elements (die das `attributionsrc`-Attribut verwenden, wie wir oben beim `<a>`-Element gesehen haben) oder ein benutzerdefiniertes Ereignis Ihrer Wahl, das in Ihrem JavaScript festgelegt ist.

### HTML-basierte Ereignisquellen

HTML-basierte Ereignisquellen können verwendet werden, um Interaktionen mit der Seite des Publishers zu messen, wenn sie zuerst geladen wird – oder genauer, wenn ein `<img>` oder `<script>` geladen wird. Um eine ereignisbasierte Attribution-Quelle über HTML zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten Element – {{htmlelement("img")}} oder {{htmlelement("script")}} – hinzufügen.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, ein oder mehrere zusätzliche URLs im Wert anzugeben, an die die Registrierungsanfrage gesendet wird; siehe [Angabe von URLs innerhalb von attributionsrc](#angabe_von_urls_innerhalb_von_attributionsrc) für weitere Details.

Lassen Sie uns ein Beispiel für ein `<img>`-Element betrachten:

```html
<img src="advertising-image.png" alt="" attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

Der Browser speichert die Attribution-Quelldaten, wenn der Browser die Antwort mit der Bilddatei erhält (d.h. wenn das `load`-Ereignis eintritt). Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können – es könnte ein 1x1-Pixel großes, transparentes Tracking-Pixel sein, das nur für Attribution-Reporting verwendet wird.

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

Skriptbasierte Attribution-Quellen sind vielseitiger als HTML-basierte Attribution-Quellen. Sie können ein Skript einrichten, um eine Anfrage zu initiieren, die berechtigt ist, eine Attribution-Quelle auf der Grundlage einer beliebigen Anfrage zu registrieren, die zu Ihrer App passt. Dies ist ein flexibler Ansatz, der nützlich ist, wenn Sie Quelldaten als Reaktion auf benutzerdefinierte Interaktionen speichern möchten, z.B. das Klicken auf ein benutzerdefiniertes Element oder das Übermitteln eines Formulars.

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

- Eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden, bei der [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt aufgerufen wird:

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
> Die Anfrage kann für jede Ressource sein. Sie muss nicht unbedingt etwas direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Rohtext, ein BildBlob oder was auch immer für Ihre App sinnvoll ist, sein.

## Angabe von URLs innerhalb von attributionsrc

Bisher wurde in allen Beispielen, die wir gesehen haben, das `attributionsrc`-Attribut/Feature oder die `attributionSrc`-Eigenschaft leer gelassen, indem sie den Wert eines leeren Strings angenommen haben. Dies ist in Ordnung, wenn der Server, auf dem die angeforderte Ressource gehalten wird, derselbe Server ist, auf dem Sie auch die Registrierung bearbeiten möchten, d.h. den {{httpheader("Attribution-Reporting-Eligible")}}-Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antworten.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie möchten einfach die Registrierung der Attribution-Quelle auf einem anderen Server handhaben. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die im `attributionsrc` angegebenen URLs zusätzlich zum Ressourcenursprung gesendet; diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

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

Im Fall eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs müssten die verschiedenen URLs als mehrere separate `attribution_src`-Features im [`windowFeatures`](/de/docs/Web/API/Window/open#windowfeatures)-Parameter aufgelistet werden, durch Kommata oder Leerzeichen getrennt:

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
> Die Angabe mehrerer URLs bedeutet, dass mehrere Attribution-Quellen für dasselbe Feature registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die unterschiedliche Berichte über unterschiedliche Daten generieren.

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
