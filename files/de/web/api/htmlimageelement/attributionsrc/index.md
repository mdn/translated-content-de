---
title: "HTMLImageElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLImageElement/attributionSrc
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{deprecated_header}}

Die **`attributionSrc`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces, die Sie verwenden können, um dem Browser mitzuteilen, dass er einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung senden soll. Sie spiegelt das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/img#attributionsrc)-Inhaltsattribut des `<img>`-Elements wider.

Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

## Wert

Ein String, der entweder leer ist oder eine durch Leerzeichen getrennte Liste von URLs enthält. Für die Interpretation dieses Attributs siehe den HTML [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#attributionsrc)-Referenz.

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
