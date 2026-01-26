---
title: "HTMLAnchorElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLAnchorElement/attributionSrc
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{deprecated_header}}

Die **`attributionSrc`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ruft das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/a#attributionsrc)-Attribut eines {{htmlelement("a")}}-Elements ab und setzt es programmatisch, indem sie den Wert dieses Attributs widerspiegelt. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn er die Navigationsantwort empfängt.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

> [!NOTE]
> `<a>`-Elemente können nicht als Attributionsauslöser verwendet werden, sondern nur als Quellen.

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie abrufen und festlegen können:

- Leerzeichen, d.h. `aElem.attributionSrc=""`. Dies gibt an, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet werden soll, auf den das `href`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server verarbeiten.
- Wert, der eine oder mehrere URLs enthält, zum Beispiel:

  ```js
  aElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionSrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die im `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

  > [!NOTE]
  > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dieselbe Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren unterschiedlicher Berichte zu unterschiedlichen Daten beinhaltet.

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
