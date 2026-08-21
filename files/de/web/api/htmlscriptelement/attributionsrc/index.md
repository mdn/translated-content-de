---
title: "HTMLScriptElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLScriptElement/attributionSrc
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{non-standard_header}}

Die **`attributionSrc`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces erhält und setzt das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/script#attributionsrc)-Attribut auf einem {{htmlelement("script")}}-Element programmatisch und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skript-Ressourcenanfrage sendet.

Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) entsprechend zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

> [!NOTE]
> Alternativ können JavaScript-basierte Attributionsquellen oder Trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gesendet wird, die die `attributionReporting`-Option enthält (entweder direkt im `fetch()`-Aufruf gesetzt oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder indem eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt gesendet wird.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie abrufen und setzen können:

- Leerer String, d.h. `scriptElem.attributionSrc=""`. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server senden möchten, auf den das `src`-Attribut verweist. Dies ist akzeptabel, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server bearbeiten. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein leerer Stringwert wird verwendet, wenn er weggelassen wird.
- Wert, der eine oder mehrere URLs enthält, zum Beispiel:

  ```js
  scriptElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionSrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ressourcenursprung an die im `attributionSrc` angegebenen URL(s) gesendet. Diese URLs können dann entsprechend mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

  > [!NOTE]
  > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die das Generieren unterschiedlicher Berichte zu unterschiedlichen Daten umfassen.

## Beispiele

### Setzen eines leeren attributionSrc

```html
<script src="advertising-script.js"></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

### Setzen eines attributionSrc, das URLs enthält

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
