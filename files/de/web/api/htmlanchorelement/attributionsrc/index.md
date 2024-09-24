---
title: "HTMLAnchorElement: Eigenschaft attributionSrc"
short-title: attributionSrc
slug: Web/API/HTMLAnchorElement/attributionSrc
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`attributionSrc`** Eigenschaft des {{domxref("HTMLAnchorElement")}} Interfaces liest und setzt das [`attributionsrc`](/de/docs/Web/HTML/Element/a#attributionsrc) Attribut auf einem {{htmlelement("a")}} Element programmatisch und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header bereitgestellt), sobald er die Navigationsantwort erhält.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> **Hinweis:** `<a>` Elemente können nicht als Attributionsauslöser, sondern nur als Quellen verwendet werden.

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie lesen und setzen können:

- Ein leerer String, d.h. `aElem.attributionSrc=""`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server gesendet wird, auf den das `href` Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server handhaben.
- Ein Wert, der eine oder mehrere URLs enthält, zum Beispiel:

  ```js
  aElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server ist oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionSrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsserver der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Quelle zu registrieren.

  > [!NOTE]
  > Wenn mehrere URLs angegeben werden, bedeutet dies, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Sie können zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, und dabei unterschiedliche Berichte über unterschiedliche Daten generieren.

## Beispiele

### Festlegen einer leeren attributionSrc

```html
<a href="https://shop.example"> Klicken Sie hier, um unseren Shop zu besuchen </a>
```

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

### Festlegen einer attributionSrc mit URLs

```html
<a href="https://ourshop.example"> Klicken Sie hier, um unseren Shop zu besuchen </a>
```

```js
// Kodieren Sie die URLs, falls sie Sonderzeichen wie '=' enthalten, 
// die falsch geparst würden.
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
