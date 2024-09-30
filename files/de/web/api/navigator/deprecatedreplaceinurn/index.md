---
title: "Navigator: deprecatedReplaceInURN()-Methode"
short-title: deprecatedReplaceInURN()
slug: Web/API/Navigator/deprecatedReplaceInURN
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Fenced Frame API")}}{{seecompattable}}

Die **`deprecatedReplaceInURN()`**-Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle ersetzt bestimmte Zeichenfolgen innerhalb der abgebildeten URL, die einer gegebenen opaken URN oder der internen `url`-Eigenschaft von `FencedFrameConfig` entspricht.

Ein `FencedFrameConfig`-Objekt oder eine opake URN wird aus einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) `runAdAuction()`-Methode zurückgegeben und dann als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) festgelegt. Die Inhalts-URL, die dem `FencedFrameConfig` oder der opaken URN zugeordnet ist, wird intern vom Browser abgebildet und kann nicht über JavaScript abgerufen werden.

Es kann jedoch gewünscht werden, Teile dieser internen URL zu ersetzen. Dies ist ein üblicher Ansatz, um Laufzeitdaten in Werbekreative zur Verwendung bei der Darstellung zu übergeben. `deprecatedReplaceInURN()` wurde als temporäre Maßnahme bereitgestellt, um dieses Ersetzen für Fenced-Frame-URLs zu ermöglichen und Werbetechnologie-Anbietern zu helfen, bestehende Implementierungen auf die [Privacy Sandbox](https://developers.google.com/privacy-sandbox)-APIs zu migrieren.

## Syntax

```js-nolint
deprecatedReplaceInURN(UrnOrConfig, replacements)
```

### Parameter

- `UrnOrConfig`
  - : Ein `FencedFrameConfig`-Objekt oder eine opake URN, für die Sie Teile der entsprechenden internen URL ersetzen möchten.
- `replacements`
  - : Ein Objekt, das eine oder mehrere Eigenschaften enthält, die die Ersetzungen darstellen, die Sie in der internen URL vornehmen möchten. Jeder Eigenschaftenschlüssel ist ein URL-Unterabschnitt, den Sie ersetzen möchten, und jeder Eigenschaftswert ist die Zeichenfolge, die ihn ersetzt. Beachten Sie, dass:
    - Die zu ersetzenden URL-Unterabschnitte in einem der folgenden Formate sein müssen:
      - `${string}`
      - `%%string%%`
    - Wenn ein URL-Unterabschnitt im richtigen Format vorliegt, der Unterabschnitt jedoch nicht in der URL gefunden wird, wird das zurückgegebene Promise trotzdem erfüllt, jedoch wird keine Ersetzung vorgenommen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `UrnOrConfig` kein gültiges `FencedFrameConfig`-Objekt oder keine opake URN ist.
    - Einer der angegebenen Ersetzungsschlüssel nicht mit den erlaubten Formaten übereinstimmt.

## Beispiele

Der folgende Aufruf könnte verwendet werden, um eine opake URN zurückzugeben:

```js
const exampleURN = await navigator.runAdAuction({
  ...auctionConfig,
  resolveToConfig: false,
});
```

Sie können dann URL-Unterabschnitte mit einem `deprecatedReplaceInURN()`-Aufruf wie dem folgenden ersetzen:

```js
await navigator.deprecatedReplaceInURN(exampleURN, {
  "${foo}": "1",
  "${bar}": "2",
  "%%baz%%": "3",
});
```

Wenn die interne URL, die der URN zugeordnet ist, ursprünglich lautet:

```http
https://example.com/a=${foo}&b=${bar}&c=%%baz%%
```

Nach der Ersetzung wird sie folgendermaßen aussehen:

```http
https://example.com/a=1&b=2&c=3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
