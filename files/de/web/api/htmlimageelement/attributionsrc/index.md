---
title: "HTMLImageElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLImageElement/attributionSrc
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`attributionSrc`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces liest und setzt das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/img#attributionsrc)-Attribut eines {{htmlelement("img")}}-Elements programmatisch und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung senden soll.

Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Response-Header zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

Die Quelle/der Trigger wird registriert, sobald der Browser die Antwort mit der Bilddatei erhält.

> [!NOTE]
> Beachten Sie, dass Benutzer möglicherweise das Bild überhaupt nicht wahrnehmen können — es könnte sich um ein 1x1 Pixel großes transparentes Tracking-Pixel handeln, das nur zur Attributionsberichterstattung verwendet wird.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie lesen und setzen können:

- Leerzeichen, d.h. `imgElem.attributionSrc=""`. Dies gibt an, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet werden soll, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn die Registrierung der Attributionsquelle oder des Triggers auf demselben Server erfolgt. Beim Registrieren eines Attributionstriggers ist diese Eigenschaft optional, und ein leerer String-Wert wird verwendet, wenn sie weggelassen wird.
- Wert mit einer oder mehreren URLs, zum Beispiel:

  ```js
  imgElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionSrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebene(n) URL(s) zusätzlich zum Ursprungsserver der Ressource gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

  > [!NOTE]
  > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen für das gleiche Merkmal registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Erstellen verschiedener Berichte auf unterschiedlichen Daten beinhaltet.

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
