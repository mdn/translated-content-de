---
title: "HTMLScriptElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLScriptElement/attributionSrc
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`attributionSrc`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces ruft das Attribut [`attributionsrc`](/de/docs/Web/HTML/Element/script#attributionsrc) an einem {{htmlelement("script")}}-Element ab und setzt es programmatisch, wobei sie den Wert dieses Attributs widerspiegelt. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Anforderung für die Skriptressource sendet.

Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) bzw. einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des den Registrierungsvorgang auslösenden `Attribution-Reporting-Eligible`-Headers ab.

> [!NOTE]
> Alternativ können JavaScript-basierte Attributionsquellen oder -trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gesendet wird, die die `attributionReporting`-Option enthält (entweder direkt im `fetch()`-Aufruf gesetzt oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder indem ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit aufgerufener [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt gesendet wird.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie abrufen und festlegen können:

- Leerer String, d.h. `scriptElem.attributionSrc=""`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Attributionsquellen- oder Triggerregistrierung auf demselben Server handhaben. Beim Registrieren eines Attributionstriggers ist diese Eigenschaft optional, und es wird ein leerer String verwendet, wenn sie weggelassen wird.
- Wert, der eine oder mehrere URLs enthält, zum Beispiel:

  ```js
  scriptElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie einen oder mehrere URLs als Wert von `attributionSrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die im `attributionSrc` angegebene(n) URL(s) zusätzlich zum Ursprungsserver der Ressource gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

  > [!NOTE]
  > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was die Generierung unterschiedlicher Berichte über unterschiedliche Daten beinhaltet.

## Beispiele

### Setzen eines leeren attributionSrc

```html
<script src="advertising-script.js"></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

### Setzen eines attributionSrc mit enthaltenen URLs

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
