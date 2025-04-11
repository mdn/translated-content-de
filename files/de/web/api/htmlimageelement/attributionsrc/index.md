---
title: "HTMLImageElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLImageElement/attributionSrc
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`attributionSrc`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces erhält und setzt das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/img#attributionsrc)-Attribut auf einem {{htmlelement("img")}}-Element programmatisch und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung sendet.

Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) bzw. einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

Die Quelle/der Trigger wird registriert, sobald der Browser die Antwort mit der Bilddatei empfängt.

> [!NOTE]
> Berücksichtigen Sie, dass Benutzer das Bild möglicherweise überhaupt nicht wahrnehmen können – es könnte ein 1x1-Pixel großes transparentes Tracking-Pixel sein, das nur für die Attribution-Berichterstattung verwendet wird.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie abrufen und festlegen können:

- Leerer String, d.h. `imgElem.attributionSrc=""`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server bearbeiten. Wenn Sie einen Attribution-Trigger registrieren, ist diese Eigenschaft optional und es wird ein leerer String verwendet, wenn sie weggelassen wird.
- Wert, der eine oder mehrere URLs enthält, zum Beispiel:

  ```js
  imgElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server bearbeiten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionSrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ressourcenursprung an die in `attributionSrc` angegebenen URL(s) gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

  > [!NOTE]
  > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Erstellen unterschiedlicher Berichte für unterschiedliche Daten erfordert.

## Beispiele

### Ein leeres attributionSrc setzen

```html
<img src="advertising-image.png" />
```

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

### Ein attributionSrc mit URLs setzen

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
