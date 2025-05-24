---
title: "HTMLScriptElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLScriptElement/attributionSrc
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`attributionSrc`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces wird verwendet, um das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/script#attributionsrc)-Attribut auf einem {{htmlelement("script")}}-Element programmatisch abzurufen und zu setzen, was den Wert dieses Attributs widerspiegelt. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanfrage sendet.

Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden sollte, hängt von dem Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

> [!NOTE]
> Alternativ können JavaScript-basierte Attributionsquellen oder Trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gesendet wird, die die Option `attributionReporting` enthält (entweder direkt im `fetch()`-Aufruf oder in einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder indem ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) aufgerufen wird.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie abrufen und setzen können:

- Leerer String, d. h. `scriptElem.attributionSrc=""`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server handhaben. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional und ein leerer String wird verwendet, wenn sie weggelassen wird.
- Wert, der eine oder mehrere URLs enthält, zum Beispiel:

  ```js
  scriptElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionSrc` angeben. Wenn die Ressourcennachfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprungs-Server an die in `attributionSrc` angegebenen URL(s) gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header entsprechend antworten, um die Registrierung abzuschließen.

  > [!NOTE]
  > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Erstellen von unterschiedlichen Berichten zu unterschiedlichen Daten umfasst.

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
