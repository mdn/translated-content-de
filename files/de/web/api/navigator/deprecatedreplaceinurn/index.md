---
title: "Navigator: deprecatedReplaceInURN()-Methode"
short-title: deprecatedReplaceInURN()
slug: Web/API/Navigator/deprecatedReplaceInURN
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Fenced Frame API")}}{{seecompattable}}

Die Methode **`deprecatedReplaceInURN()`** der Schnittstelle [`Navigator`](/de/docs/Web/API/Navigator) ersetzt bestimmte Zeichenfolgen in der zugehörigen URL einer gegebenen opaken URN oder in der internen `url`-Eigenschaft eines `FencedFrameConfig`.

Ein `FencedFrameConfig` oder eine opake URN wird von einer Quelle wie der `runAdAuction()`-Methode der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und anschließend als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) festgelegt. Die dem `FencedFrameConfig` oder der opaken URN zugeordnete Inhalts-URL wird vom Browser intern zugeordnet und kann nicht über JavaScript abgerufen werden.

Möglicherweise möchten Sie jedoch Teile dieser internen URL ersetzen. Dies ist eine gängige Methode, um Laufzeitdaten an Werbemittel zu übergeben, die diese beim Rendern verwenden. `deprecatedReplaceInURN()` wurde als vorübergehende Maßnahme bereitgestellt, um solche Ersetzungen für URLs von Fenced Frames zu ermöglichen. Dies hilft Anbietern von Werbetechnologie, bestehende Implementierungen auf APIs der [Privacy Sandbox](https://privacysandbox.google.com/) umzustellen.

## Syntax

```js-nolint
deprecatedReplaceInURN(UrnOrConfig, replacements)
```

### Parameter

- `UrnOrConfig`
  - : Ein `FencedFrameConfig`-Objekt oder eine opake URN, für die Sie Teile der zugehörigen internen URL ersetzen möchten.
- `replacements`
  - : Ein Objekt mit einer oder mehreren Eigenschaften, die die gewünschten Ersetzungen in der internen URL angeben. Jeder Eigenschaftsschlüssel bezeichnet einen zu ersetzenden URL-Teil, und jeder Eigenschaftswert ist die Zeichenfolge, durch die er ersetzt werden soll. Beachten Sie:
    - Die zu ersetzenden URL-Teile müssen eines der folgenden Formate haben:
      - `${string}`
      - `%%string%%`
    - Wenn ein URL-Teil das richtige Format hat, aber in der URL nicht gefunden wird, wird das zurückgegebene Promise dennoch erfüllt; es erfolgt jedoch keine Ersetzung.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - `UrnOrConfig` kein gültiges `FencedFrameConfig`-Objekt und keine gültige opake URN ist.
    - Einer der angegebenen Schlüssel für die Ersetzung nicht einem der zulässigen Formate entspricht.

## Beispiele

Der folgende Aufruf könnte verwendet werden, um eine opake URN zurückzugeben:

```js
const exampleURN = await navigator.runAdAuction({
  ...auctionConfig,
  resolveToConfig: false,
});
```

Anschließend können Sie URL-Teile mit einem Aufruf von `deprecatedReplaceInURN()` wie dem folgenden ersetzen:

```js
await navigator.deprecatedReplaceInURN(exampleURN, {
  "${foo}": "1",
  "${bar}": "2",
  "%%baz%%": "3",
});
```

Wenn die der URN zugeordnete interne URL zunächst wie folgt lautet:

```http
https://example.com/a=${foo}&b=${bar}&c=%%baz%%
```

Lautet sie nach der Ersetzung:

```http
https://example.com/a=1&b=2&c=3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
