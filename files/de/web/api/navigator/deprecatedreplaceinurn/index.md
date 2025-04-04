---
title: "Navigator: deprecatedReplaceInURN() Methode"
short-title: deprecatedReplaceInURN()
slug: Web/API/Navigator/deprecatedReplaceInURN
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{APIRef("Fenced Frame API")}}{{seecompattable}}

Die **`deprecatedReplaceInURN()`** Methode des [`Navigator`](/de/docs/Web/API/Navigator) Interfaces ersetzt angegebene Zeichenfolgen innerhalb der zugehörigen URL, die einer gegebenen opaken URN oder der internen `url`-Eigenschaft von `FencedFrameConfig` zugeordnet ist.

Eine `FencedFrameConfig` oder opake URN wird aus einer Quelle wie der `runAdAuction()` Methode der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und dann als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt. Die Inhalts-URL, die mit der `FencedFrameConfig` oder opaken URN verknüpft ist, wird intern vom Browser abgebildet und kann nicht über JavaScript zugegriffen werden.

Es kann jedoch gewünscht sein, Teile dieser internen URL zu ersetzen. Dies ist ein üblicher Ansatz, um Laufzeitdaten in Anzeigencreatives zum Rendern einzufügen. `deprecatedReplaceInURN()` wurde als vorübergehende Maßnahme bereitgestellt, um diesen Ersatz für fenced frame URLs zu ermöglichen, und hilft somit Ad-Tech-Anbietern, bestehende Implementierungen zu [Privacy Sandbox](https://privacysandbox.google.com/) APIs zu migrieren.

## Syntax

```js-nolint
deprecatedReplaceInURN(UrnOrConfig, replacements)
```

### Parameter

- `UrnOrConfig`
  - : Ein `FencedFrameConfig`-Objekt oder eine opake URN, für die Sie Teile der zugehörigen internen URL ersetzen möchten.
- `replacements`
  - : Ein Objekt, das eine oder mehrere Eigenschaften enthält, die die Ersetzungen darstellen, die Sie in der internen URL vornehmen möchten. Jeder Eigenschaftsschlüssel ist ein URL-Abschnitt, den Sie ersetzen möchten, und jeder Eigenschaftswert ist die Zeichenfolge, durch die er ersetzt werden soll. Beachten Sie:
    - Die zu ersetzenden URL-Abschnitte müssen eines der folgenden Formate haben:
      - `${string}`
      - `%%string%%`
    - Sollte ein URL-Abschnitt in einem korrekten Format vorliegen, aber im URL nicht gefunden werden, wird das zurückgegebene Versprechen dennoch erfüllt, jedoch wird kein Ersatz durchgeführt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - `UrnOrConfig` kein gültiges `FencedFrameConfig`-Objekt oder keine opake URN ist.
    - Einer der angegebenen Ersatzschlüssel nicht den erlaubten Formaten entspricht.

## Beispiele

Der folgende Aufruf könnte verwendet werden, um eine opake URN zurückzugeben:

```js
const exampleURN = await navigator.runAdAuction({
  ...auctionConfig,
  resolveToConfig: false,
});
```

Sie können dann URL-Abschnitte mit einem `deprecatedReplaceInURN()`-Aufruf wie dem folgenden ersetzen:

```js
await navigator.deprecatedReplaceInURN(exampleURN, {
  "${foo}": "1",
  "${bar}": "2",
  "%%baz%%": "3",
});
```

Wenn die interne URL, die mit der URN verknüpft ist, anfänglich lautet:

```http
https://example.com/a=${foo}&b=${bar}&c=%%baz%%
```

Nach dem Ersatz wird sie zu:

```http
https://example.com/a=1&b=2&c=3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
