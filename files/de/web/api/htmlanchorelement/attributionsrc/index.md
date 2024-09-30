---
title: "HTMLAnchorElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLAnchorElement/attributionSrc
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`attributionSrc`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ruft das [`attributionsrc`](/de/docs/Web/HTML/Element/a#attributionsrc)-Attribut eines {{htmlelement("a")}}-Elements ab und setzt dieses programmatisch, wodurch der Wert dieses Attributs widergespiegelt wird. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn er die Navigationsantwort erhält.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> **Note:** `<a>`-Elemente können nicht als Attributionstrigger verwendet werden, nur als Quellen.

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie erhalten und setzen können:

- Leerer String, d.h. `aElem.attributionSrc=""`. Dies gibt an, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet werden soll, auf den das `href`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server abwickeln.
- Wert, der eine oder mehrere URLs enthält, zum Beispiel:

  ```js
  aElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich in Fällen, in denen die angeforderte Ressource sich nicht auf einem Server befindet, den Sie kontrollieren, oder Sie die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionSrc` angeben. Wenn die Ressourcenanforderung auftritt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header sowohl an die in `attributionSrc` angegebenen URLs als auch an den Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antworten, um die Quelle zu registrieren.

  > [!NOTE]
  > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Erstellen unterschiedlicher Berichte über unterschiedliche Daten umfasst.

## Beispiele

### Setzen einer leeren attributionSrc

```html
<a href="https://shop.example"> Click to visit our shop </a>
```

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

### Setzen einer attributionSrc, die URLs enthält

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
