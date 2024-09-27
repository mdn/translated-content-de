---
title: "Navigator: deprecatedReplaceInURN() Methode"
short-title: deprecatedReplaceInURN()
slug: Web/API/Navigator/deprecatedReplaceInURN
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Fenced Frame API")}}{{seecompattable}}

Die **`deprecatedReplaceInURN()`** Methode der [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle ersetzt festgelegte Zeichenfolgen in der zugeordneten URL, die einem gegebenen undurchsichtigen URN oder der internen `url` Eigenschaft eines `FencedFrameConfig` entspricht.

Ein `FencedFrameConfig` oder ein undurchsichtiger URN wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) `runAdAuction()` Methode zurückgegeben und dann als Wert für [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt. Die Inhalts-URL, die mit dem `FencedFrameConfig` oder den undurchsichtigen URN verbunden ist, wird intern vom Browser zugeordnet und kann nicht über JavaScript abgerufen werden.

Es kann jedoch erforderlich sein, Teile dieser internen URL zu ersetzen. Dies ist ein gängiger Ansatz zum Übergeben von Laufzeitdaten in Werbeinhalte zur Verwendung bei der Darstellung. `deprecatedReplaceInURN()` wurde als vorübergehende Maßnahme zur Verfügung gestellt, um diese Ersetzung für Fenced Frame URLs zu ermöglichen und Ad-Tech-Anbietern zu helfen, bestehende Implementierungen auf [Privacy Sandbox](https://developers.google.com/privacy-sandbox) APIs umzustellen.

## Syntax

```js-nolint
deprecatedReplaceInURN(UrnOrConfig, replacements)
```

### Parameter

- `UrnOrConfig`
  - : Ein `FencedFrameConfig` Objekt oder ein undurchsichtiger URN, für den Sie Teile der entsprechenden internen URL ersetzen möchten.
- `replacements`
  - : Ein Objekt, das eine oder mehrere Eigenschaften enthält, die die Ersetzungen darstellen, die Sie in der internen URL vornehmen möchten. Jeder Eigenschaftsschlüssel ist ein URL-Abschnitt, den Sie ersetzen möchten, und jeder Eigenschaftswert ist die Zeichenfolge, durch die dieser ersetzt werden soll. Beachten Sie, dass:
    - Die zu ersetzenden URL-Abschnitte in einem der folgenden Formate vorliegen müssen:
      - `${string}`
      - `%%string%%`
    - Wenn ein URL-Abschnitt im korrekten Format vorliegt, der Abschnitt jedoch in der URL nicht gefunden wird, wird das zurückgegebene Versprechen dennoch erfüllt, aber es wird keine Ersetzung vorgenommen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `UrnOrConfig` kein gültiges `FencedFrameConfig` Objekt oder undurchsichtiger URN ist.
    - Einer der angegebenen Ersetzungsschlüssel nicht mit den erlaubten Formaten übereinstimmt.

## Beispiele

Der folgende Aufruf könnte verwendet werden, um einen undurchsichtigen URN zurückzugeben:

```js
const exampleURN = await navigator.runAdAuction({
  ...auctionConfig,
  resolveToConfig: false,
});
```

Sie können dann URL-Abschnitte mit einem `deprecatedReplaceInURN()` Aufruf wie dem folgenden ersetzen:

```js
await navigator.deprecatedReplaceInURN(exampleURN, {
  "${foo}": "1",
  "${bar}": "2",
  "%%baz%%": "3",
});
```

Wenn die interne URL, die mit dem URN verbunden ist, ursprünglich lautet:

```http
https://example.com/a=${foo}&b=${bar}&c=%%baz%%
```

Nach der Ersetzung wird sie so aussehen:

```http
https://example.com/a=1&b=2&c=3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
