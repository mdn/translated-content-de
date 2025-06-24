---
title: "HTMLAnchorElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLAnchorElement/attributionSrc
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`attributionSrc`**-Eigenschaft der [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle ruft das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/a#attributionsrc)-Attribut auf einem {{htmlelement("a")}}-Element programmgesteuert ab und setzt dieses, wodurch der Wert dieses Attributs widergespiegelt wird. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header senden soll. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn er die Navigationsantwort erhält.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE] > `<a>`-Elemente können nicht als Attributionstrigger verwendet werden, nur als Quellen.

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie abrufen und festlegen können:

- Leerer String, d.h. `aElem.attributionSrc=""`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `href`-Attribut verweist. Das ist in Ordnung, wenn Sie die Attributionsquellenregistrierung auf demselben Server durchführen.
- Wert, der eine oder mehrere URLs enthält, zum Beispiel:

  ```js
  aElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionSrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

  > [!NOTE]
  > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Beispielsweise könnten Sie verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was bedeutet, dass unterschiedliche Berichte über unterschiedliche Daten erstellt werden.

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
