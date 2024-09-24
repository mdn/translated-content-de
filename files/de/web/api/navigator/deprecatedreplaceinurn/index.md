---
title: "Navigator: deprecatedReplaceInURN()-Methode"
short-title: deprecatedReplaceInURN()
slug: Web/API/Navigator/deprecatedReplaceInURN
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Fenced Frame API")}}{{seecompattable}}

Die **`deprecatedReplaceInURN()`**-Methode der {{domxref("Navigator")}}-Schnittstelle ersetzt angegebene Zeichenfolgen innerhalb der zugeordneten URL, die einem gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig` entspricht.

Ein `FencedFrameConfig` oder undurchsichtiger URN wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) `runAdAuction()`-Methode zurückgegeben und dann als Wert von {{domxref("HTMLFencedFrameElement.config")}} gesetzt. Die Inhalts-URL, die dem `FencedFrameConfig` oder undurchsichtigen URN zugeordnet ist, wird intern vom Browser zugeordnet und kann nicht über JavaScript aufgerufen werden.

Es kann jedoch erforderlich sein, Teile dieser internen URL zu ersetzen. Dies ist ein üblicher Ansatz, um Laufzeitdaten in Werbekreationen zu übergeben, die beim Rendern verwendet werden. `deprecatedReplaceInURN()` steht vorübergehend zur Verfügung, um diesen Austausch für Fenced Frame URLs zu ermöglichen und Werbetechnologie-Anbietern beim Umstieg auf [Privacy Sandbox](https://developers.google.com/privacy-sandbox) APIs zu helfen.

## Syntax

```js-nolint
deprecatedReplaceInURN(UrnOrConfig, replacements)
```

### Parameter

- `UrnOrConfig`
  - : Ein `FencedFrameConfig`-Objekt oder ein undurchsichtiger URN, für den Sie Teile der entsprechenden internen URL ersetzen möchten.
- `replacements`
  - : Ein Objekt, das eine oder mehrere Eigenschaften beinhaltet, die die Ersetzungen darstellen, die Sie in der internen URL vornehmen möchten. Jeder Eigenschaftsname ist ein URL-Unterabschnitt, den Sie ersetzen möchten, und jeder Eigenschaftswert ist die Zeichenfolge, mit der es ersetzt werden soll. Beachten Sie, dass:
    - Die zu ersetzenden URL-Unterabschnitte müssen in einem der folgenden Formate vorliegen:
      - `${string}`
      - `%%string%%`
    - Wenn ein URL-Unterabschnitt in einem korrekten Format vorliegt, aber der Unterabschnitt in der URL nicht gefunden wird, wird das zurückgegebene Promise trotzdem erfüllt, jedoch keine Ersetzung vorgenommen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `TypeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn:
    - `UrnOrConfig` kein gültiges `FencedFrameConfig`-Objekt oder undurchsichtiger URN ist.
    - Einer der angegebenen Ersetzungsschlüssel nicht den erlaubten Formaten entspricht.

## Beispiele

Der folgende Aufruf könnte verwendet werden, um einen undurchsichtigen URN zurückzugeben:

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

Wenn die interne URL, die mit dem URN verknüpft ist, anfänglich ist:

```http
https://example.com/a=${foo}&b=${bar}&c=%%baz%%
```

Nach der Ersetzung wird sie wie folgt:

```http
https://example.com/a=1&b=2&c=3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
