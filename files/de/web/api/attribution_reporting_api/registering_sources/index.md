---
title: Registrieren von Attributionsquellen
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie man Attributionsquellen registriert, wenn Sie die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden.

## Grundlegende Methodik

Attributionsquellen nehmen die Form von Links, Bildern oder Skripten an, die in den Inhalt eingebettet sind, mit dem Sie Interaktionen messen möchten (z.B. könnten es Anzeigen sein, deren Conversions Sie messen möchten). Diese veranlassen den Browser, Quelldaten in einem privaten lokalen Cache zu speichern (nur vom Browser zugänglich), wenn spezifische Benutzerinteraktionen stattfinden. Die unterschiedlichen Typen von Attributionsquellen werden auf unterschiedliche Weise registriert und signalisieren Interaktionen — sie werden unterschieden als:

- Navigationsquellen, die den Browser dazu veranlassen, Quelldaten als Reaktion auf Navigationen zu speichern — zum Beispiel, wenn der Benutzer auf einen Link klickt oder ihn mit der Tastatur aktiviert, oder wenn eine Navigation als Ergebnis eines [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs erfolgt. Siehe [Navigationsbasierte Attributionsquellen](#navigationsbasierte_attributionsquellen) für Beispiele.
- Ereignisquellen, die den Browser dazu veranlassen, Quelldaten als Reaktion auf das Auslösen von Ereignissen zu speichern. Siehe [Ereignisbasierte Attributionsquellen](#ereignisbasierte_attributionsquellen) für Beispiele.

Das, was im Hintergrund passiert, um Quellen zu registrieren und die Quelldaten zu erfassen und zu speichern, ist in beiden Fällen gleich:

1. Wenn der Benutzer mit einer Attributionsquelle interagiert, wird ein {{httpheader("Attribution-Reporting-Eligible")}}-Header mit einer Anfrage an den Server gesendet, der die Interaktionen misst (typischerweise der Server des Werbetreibenden), was darauf hinweist, dass die Antwort berechtigt ist, eine Quelle zu registrieren. Zum Beispiel:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. Wenn der Server eine Anfrage erhält, die einen `Attribution-Reporting-Eligible`-Header enthält, kann er einen {{httpheader("Attribution-Reporting-Register-Source")}}-Header zusammen mit der Antwort senden, um die Quellregistrierung abzuschließen. Sein Wert ist ein JSON-String, der die Informationen enthält, die der Browser über die Attributionsquelle speichern soll, mit der interagiert wurde. Die in diesem Header enthaltenen Informationen bestimmen auch, welche Arten von Berichten der Browser erzeugen wird:

   - Das folgende Beispiel wird einen [Ereignisebene-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) erzeugen, wenn ein [Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) mit einer Quelle übereinstimmt:

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

     Das einzige erforderliche Feld in diesem Kontext ist `destination`, das 1–3 Seiten angibt, auf denen ein Trigger erwartet wird. Diese werden verwendet, um den Attributionstrigger mit der Quelle zu verbinden, wenn mit einem Trigger interagiert wird. Die anderen oben angegebenen Felder tun Folgendes:

     - `"source_event_id"`: Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie mit anderen Informationen zu verknüpfen, wenn mit der Attributionsquelle interagiert wird, oder um Informationen am Berichterstattungsendpunkt zu aggregieren (siehe [Berichterstellung > Grundlegender Prozess](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) für Endpunktinformationen).
     - `"trigger_data"`: Ein Array von 32-Bit-ungezeichneten Ganzzahlen, die Daten darstellen, die die verschiedenen Triggereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer fügte Artikel zum Warenkorb hinzu" oder "Benutzer meldete sich für Mailingliste an" Aktionen sein, die auf der Triggerseite stattfinden könnten, die mit dieser Quelle übereinstimmen und eine Art Konversion anzeigen, die der Werbetreibende zu messen versucht. Diese müssen mit dem `"trigger_data"` übereinstimmen, das in [Triggern](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben ist, damit Attributionsebenen-Ereignisse stattfinden können.
       > [!NOTE]
       > Die Werte, die zur Darstellung jedes Ereignisses verwendet werden, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um vom Browser auf die Quelle bezogen zu werden, wenn ein Trigger registriert wird.
     - `"trigger_data_matching"`: Ein String, der angibt, wie das `"trigger_data"` des Triggers mit dem `"trigger_data"` der Quelle abgeglichen wird. `"exact"` ist der Wert, den Sie nahezu immer verwenden werden, was exakte Werte abgleicht.
     - `"expiry"`: Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv sein wird (das heißt, nachfolgende Trigger können nicht mehr mit dieser Quelle in Verbindung gebracht werden).
     - `"priority"`: Ein String, der einen Prioritätswert für die Attributionsquelle darstellt. Siehe [Berichtprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
     - `"debug_key"`: Ein Basis-10-formatierter 64-Bit-ungezeichneter Ganzzahl, der einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht erzeugen möchten.
     - `"event_report_window"`: Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger nicht mehr dieser Quelle zugerechnet werden, um Ereignisebenen-Berichte zu erstellen.

     Siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller verfügbaren Felder in diesem Header.

   - Um den Browser einen [Zusammenfassungsbericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) erzeugen zu lassen, wenn ein Trigger mit einer Quelle abgeglichen wird, müssen Sie einige zusätzliche Felder angeben, zusätzlich zu denen, die für die Erstellung eines Ereignisebenen-Berichts erforderlich sind.

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

     - `"aggregation_keys"`: Ein Objekt, das benutzerdefinierte Schlüssel enthält, die unterschiedliche Datenpunkte darstellen, unter denen Berichtswerte aggregiert werden.
     - `"aggregatable_report_window"`: Ein String, der eine Zeit in Sekunden darstellt, nach der Triggerdaten in generierten aggregierbaren Berichten nicht mehr enthalten sein werden.

     Auch hier siehe {{httpheader("Attribution-Reporting-Register-Source")}} für eine detaillierte Beschreibung aller verfügbaren Felder in diesem Header.

3. Nach einer erfolgreichen Quellregistrierung speichert der Browser die bereitgestellten Quelldaten in seinem privaten lokalen Cache.

## Navigationsbasierte Attributionsquellen

Navigationsquellen sind nützlich, um Interaktionen mit Links zu messen — zum Beispiel könnte ein Benutzer eine Anzeige auf einer Publisher-Seite sehen und darauf klicken, um zur Seite des Werbetreibenden zu navigieren, wo hoffentlich eine Konversion stattfinden wird.

Es gibt einige verschiedene Arten von navigationsbasierten Attributionsquellen (zum Beispiel das Klicken auf eine Anzeige), die registriert werden können — basierend auf HTML (die das `attributionsrc`-Attribut verwenden) und basierend auf [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufen (die ein `attributionsrc`-Fenster-Feature verwenden).

### HTML-basierte Navigationsquellen

Um eine navigationsbasierte Attributionsquelle zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten {{htmlelement("a")}}-Element hinzufügen, das angibt, wohin die Registrierungsanfrage gesendet wird.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den verlinkten Standort gesendet. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Wertes anzugeben, um die Registrierungsanfrage dort hin zu senden; siehe [URLs innerhalb von attributionsrc angeben](#urls_innerhalb_von_attributionsrc_angeben) für weitere Details.

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

In diesem Fall erfolgt die Interaktion, was den Browser veranlasst, die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader angegeben), zu speichern, wenn der Benutzer auf den Link klickt und der Browser die Antwort empfängt.

### Window.open()-basierte Navigationsquellen

Sie können auch das `attributionsrc`-Feature-Schlüsselwort zu den Features des [`Window.open()`](/de/docs/Web/API/Window/open)-Aufrufs hinzufügen. In diesem Beispiel führen wir es als Reaktion auf ein ausgelöstes `click`-Ereignis aus:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

In diesem Fall erfolgt die Interaktion, und der Browser speichert die Quelldaten, wenn `Window.open()` aufgerufen wird und der Browser die Antwort erhält.

> [!NOTE]
> Wenn Sie ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis wie im obigen Beispiel einrichten, ist es ratsam, es auf einem Steuerungselement einzurichten, wo ein Klick erwartet wird, wie einem {{htmlelement("button")}} oder {{htmlelement("a")}}-Element. Dies macht semantisch mehr Sinn und ist für sowohl Bildschirmleser als auch Tastaturnutzer zugänglicher.

> [!NOTE]
> Um eine Attributionsquelle über `open()` zu registrieren, muss es mit {{Glossary("Transient_activation", "transient activation")}} (d.h. innerhalb eines Benutzerinteraktionsereignis-Handlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion aufgerufen werden.

## Ereignisbasierte Attributionsquellen

Ereignisbasierte Attributionsquellen veranlassen den Browser, Quelldaten als Reaktion auf eine Art von auslösendem Ereignis zu speichern, wie das `load`-Ereignis im Fall eines `<img>`- oder `<script>`-Elements (die das `attributionsrc`-Attribut wie beim `<a>`-Element verwenden), oder ein benutzerdefiniertes Ereignis Ihrer Wahl, das in Ihrem JavaScript festgelegt wird.

### HTML-basierte Ereignisquellen

HTML-basierte Ereignisquellen können verwendet werden, um Interaktionen mit der Seite eines Publishers zu messen, wenn sie zuerst geladen wird — oder genauer gesagt, wenn ein `<img>`- oder `<script>` geladen wird. Um eine ereignisbasierte Attributionsquelle über HTML zu registrieren, können Sie das `attributionsrc`-Attribut zu einem geeigneten Element hinzufügen — {{htmlelement("img")}} oder {{htmlelement("script")}}.

Wenn Sie den Attributwert leer lassen, wird die Registrierungsanfrage an den Server gesendet, auf dem die angeforderte Ressource gehostet wird. Es ist auch möglich, eine oder mehrere zusätzliche URLs innerhalb des Wertes anzugeben, um die Registrierungsanfrage dorthin zu senden; siehe [URLs innerhalb von attributionsrc angeben](#urls_innerhalb_von_attributionsrc_angeben) für weitere Details.

Schauen wir uns ein Beispiel für ein `<img>`-Element an:

```html
<img src="advertising-image.png" attributionsrc />
```

Sie könnten dies auch über die [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc)-Eigenschaft erreichen:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

Der Browser speichert die Attributionsquelle-Daten, wenn der Browser die Antwort enthält, die die Bilddatei enthält (d.h. wenn das `load`-Ereignis auftritt). Beachten Sie, dass die Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte ein 1x1-Pixel-Transparent sein, das nur für das Attribution-Reporting verwendet wird.

Ein {{htmlelement("script")}}-Beispiel könnte so aussehen:

```html
<script src="advertising-script.js" attributionsrc></script>
```

Oder über die [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)-Eigenschaft:

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In diesem Fall erfolgt die Interaktion und der Browser speichert die Quelldaten, wenn der Browser die Antwort mit dem Skript empfängt.

### JavaScript-basierte Ereignisquellen

Skript-basierte Attributionsquellen sind vielseitiger als HTML-basierte Attributionsquellen. Sie können ein Skript einrichten, um eine Anfrage zu initiieren, die berechtigt ist, eine Attributionsquelle basierend auf welcher Anfrage auch immer zu registrieren, die für Ihre Anwendung geeignet ist. Dies ist ein flexibler Ansatz, der nützlich ist, wenn Sie Quelldaten als Reaktion auf benutzerdefinierte Interaktionen speichern möchten, z.B. durch Klicken auf ein benutzerdefiniertes Element oder Absenden eines Formulars.

Um eine Skript-basierte Attributionsquelle einzurichten, können Sie entweder:

- Einen [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage abschicken, die die `attributionReporting`-Option enthält:

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

- Einen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) aufrufen, das auf dem Anfrageobjekt aufgerufen wird:

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
> Die Anfrage kann für jede Ressource sein. Sie muss nichts direkt mit der Attribution Reporting API zu tun haben und kann eine Anfrage für JSON, Klartext, ein Bild-Blob oder was auch immer für Ihre Anwendung Sinn macht, sein.

## URLs innerhalb von attributionsrc angeben

Bisher haben wir in allen Beispielen gesehen, dass das `attributionsrc`-Attribut/Feature oder die `attributionSrc`-Eigenschaft leer gelassen wurde, was den Wert eines leeren Strings annimmt. Dies ist in Ordnung, wenn der Server, der die angeforderte Ressource hält, derselbe Server ist, den Sie auch für die Registrierung verwenden möchten, d.h. den {{httpheader("Attribution-Reporting-Eligible")}}-Header empfangen und mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antworten.

Es könnte jedoch sein, dass die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server ist, oder Sie möchten einfach die Registrierung der Attributionsquelle auf einem anderen Server abwickeln. In solchen Fällen können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die im `attributionsrc` angegebene(n) URL(s) zusätzlich zum Ressource-Ursprung gesendet; diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antworten, um die Quelle zu registrieren.

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
> Das Spezifizieren mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die das Generieren unterschiedlicher Berichte auf unterschiedlichen Daten erfordern.

## Siehe auch

- [Validierungstool für Attribution Reporting Header](https://wicg.github.io/attribution-reporting-api/validate-headers)
