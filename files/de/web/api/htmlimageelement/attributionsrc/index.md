---
title: "HTMLImageElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLImageElement/attributionSrc
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`attributionSrc`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ruft das [`attributionsrc`](/de/docs/Web/HTML/Element/img#attributionsrc)-Attribut eines {{htmlelement("img")}}-Elements ab und setzt es programmatisch, wodurch der Wert dieses Attributs widergespiegelt wird. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung sendet.

Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) entsprechend zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des Headers `Attribution-Reporting-Eligible` ab, der die Registrierung ausgelöst hat.

Die Quelle/der Trigger wird registriert, sobald der Browser die Antwort mit der Bilddatei erhält.

> [!NOTE]
> Beachten Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können — es könnte sich um ein 1x1 transparentes Tracking-Pixel handeln, das nur für die Attribution-Berichterstattung verwendet wird.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie abrufen und festlegen können:

- Ein leerer String, also `imgElem.attributionSrc=""`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server steuern. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein leerer String wird verwendet, wenn sie weggelassen wird.
- Ein Wert, der eine oder mehrere URLs enthält, zum Beispiel:

  ```js
  imgElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich in Fällen, in denen die angeforderte Ressource sich nicht auf einem von Ihnen kontrollierten Server befindet oder Sie die Registrierung der Attributionsquelle auf einem anderen Server steuern möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionSrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zur Ursprungs-URL der Ressource an die in `attributionSrc` angegebenen URLs gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header als passend antworten, um die Registrierung abzuschließen.

  > [!NOTE]
  > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Beispielsweise könnten Sie verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, indem Sie unterschiedliche Berichte zu unterschiedlichen Daten generieren.

## Beispiele

### Setzen eines leeren attributionSrc

```html
<img src="advertising-image.png" />
```

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

### Setzen eines attributionSrc mit URLs

```html
<img src="advertising-image.png" />
```

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const imgElem = document.querySelector("img");
imgElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).
