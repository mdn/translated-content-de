---
title: "HTMLAnchorElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLAnchorElement/attributionSrc
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{non-standard_header}}

Die **`attributionSrc`**-Eigenschaft der [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle holt und setzt das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/a#attributionsrc)-Attribut auf einem {{htmlelement("a")}}-Element programmatisch und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

Der Browser speichert die mit der navigationsbasierten Attributionsquelle verbundenen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn er die Navigationsantwort erhält.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> `<a>`-Elemente können nicht als Attributionstrigger, sondern nur als Quellen verwendet werden.

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie abrufen und setzen können:

- Leerer String, d.h. `aElem.attributionSrc=""`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `href`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server abwickeln.
- Wert, der eine oder mehrere URLs enthält, zum Beispiel:

  ```js
  aElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server abwickeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionSrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Origin der Ressource an die im `attributionSrc` angegebenen URLs gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

  > [!NOTE]
  > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten beispielsweise unterschiedliche Kampagnen haben, deren Erfolg Sie messen möchten und die unterschiedliche Berichte zu unterschiedlichen Daten generieren.

## Beispiele

### Setzen eines leeren attributionSrc

```html
<a href="https://shop.example"> Click to visit our shop </a>
```

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

### Setzen eines attributionSrc mit URLs

```html
<a href="https://ourshop.example"> Click to visit our shop </a>
```

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const aElem = document.querySelector("a");
aElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).
