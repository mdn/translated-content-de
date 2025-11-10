---
title: "HTMLScriptElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLScriptElement/attributionSrc
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`attributionSrc`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces liest und setzt das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/script#attributionsrc)-Attribut auf einem {{htmlelement("script")}}-Element programmatisch und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skript-Ressourcenanfrage sendet.

Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden sollte, hängt von dem Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

> [!NOTE]
> Alternativ können JavaScript-basierte Attributionsquellen oder Trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage mit der Option `attributionReporting` gesendet wird (entweder direkt im `fetch()`-Aufruf gesetzt oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder durch Senden eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting), das auf dem Anfrageobjekt aufgerufen wird.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie setzen und abrufen können:

- Leerer String, also `scriptElem.attributionSrc=""`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server abwickeln. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein leerer String-Wert wird verwendet, wenn sie weggelassen wird.
- Wert, der eine oder mehrere URLs enthält, zum Beispiel:

  ```js
  scriptElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server abwickeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionSrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) gesendet, zusätzlich zur Ursprungsressource. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header, je nach Bedarf, antworten, um die Registrierung abzuschließen.

  > [!NOTE]
  > Das Spezifizieren mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dieselbe Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die unterschiedliche Berichte zu verschiedenen Daten generieren.

## Beispiele

### Setzen eines leeren attributionSrc

```html
<script src="advertising-script.js"></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

### Setzen eines attributionSrc mit URLs

```html
<script src="advertising-script.js"></script>
```

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).
