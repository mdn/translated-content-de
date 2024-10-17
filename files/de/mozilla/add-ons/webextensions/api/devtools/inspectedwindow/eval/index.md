---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{AddonSidebar}}

Führt JavaScript im Fenster aus, an das die DevTools angefügt sind.

Dies ähnelt der Verwendung von {{WebExtAPIRef("tabs.executeScript()")}} zum Einfügen eines Inhaltskripts, weist jedoch zwei Hauptunterschiede auf:

Erstens kann das JavaScript eine Reihe von [speziellen Befehlen verwenden, die Browser in der Regel in ihrer DevTools-Konsolenimplementierung bereitstellen](#helfer): Zum Beispiel durch die Nutzung von "$0", um auf das aktuell im Inspector ausgewählte Element zu verweisen.

Zweitens kann das ausgeführte JavaScript alle Änderungen sehen, die von Skripten vorgenommen wurden, die von der Seite geladen wurden. Dies steht im Gegensatz zu Inhaltskripten, die die Seite [so sehen, wie sie existieren würde, wenn keine Seitenskripte geladen worden wären](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access). Beachten Sie jedoch, dass die von Inhaltskripten gebotene Isolation ein bewusstes Sicherheitsmerkmal ist, das es böswilligen oder unkooperativen Webseiten erschweren soll, WebExtensions-APIs zu verwirren oder zu unterminieren, indem DOM-Funktionen und -Eigenschaften neu definiert werden. Deshalb müssen Sie äußerst vorsichtig sein, wenn Sie diesen Schutz durch die Verwendung von `eval()` aufheben, und sollten Inhaltskripte verwenden, es sei denn, Sie müssen `eval()` nutzen.

Das Skript wird standardmäßig im Hauptframe der Seite ausgewertet. Das Skript muss zu einem Wert evaluieren, der als JSON dargestellt werden kann (das bedeutet zum Beispiel, dass es nicht zu einer Funktion oder einem Objekt, das Funktionen enthält, evaluieren darf). Standardmäßig sieht das Skript keine an die Seite angehängten Inhaltskripte.

Man kann `eval()` nicht in privilegierten Browserfenstern wie "about:addons" aufrufen.

Optional können Sie einen `options`-Parameter bereitstellen, der Optionen enthält, um das Skript in einem anderen Frame oder im Kontext angehängter Inhaltskripte zu evaluieren. Beachten Sie, dass Firefox den `options`-Parameter noch nicht unterstützt.

Die `eval()`-Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit dem ausgewerteten Ergebnis des Skripts oder einem Fehler aufgelöst wird.

## Helfer

Das Skript erhält Zugriff auf eine Reihe von Objekten, die dem injizierten Skript helfen, mit den Entwicklertools zu interagieren. Die folgenden Helfer werden derzeit unterstützt:

- `$0`
  - : Enthält eine Referenz zu dem Element, das aktuell im DevTools-Inspector ausgewählt ist.
- `inspect()`
  - : Wenn ein Objekt ein DOM-Element auf der Seite ist, wird es im DevTools-Inspector ausgewählt, andernfalls wird eine Objektvorschau in der Konsole erstellt.

[Sehen Sie sich einige Beispiele an.](#beispiele)

## Syntax

```js-nolint
let evaluating = browser.devtools.inspectedWindow.eval(
  expression,       // string
  options           // object
)
```

### Parameter

- `expression`
  - : `string`. Der JavaScript-Ausdruck, der ausgewertet werden soll. Der String muss zu einem Objekt evaluieren, das als JSON dargestellt werden kann, andernfalls wird eine Ausnahme ausgelöst. Zum Beispiel darf `expression` nicht zu einer Funktion evaluieren.
- `options` {{optional_inline}}

  - : `object`. Optionen für die Funktion (beachten Sie, dass Firefox diese Optionen noch nicht unterstützt), wie folgt:

    - `frameURL` {{optional_inline}}
      - : `string`. Die URL des Frames, in dem der Ausdruck ausgewertet werden soll. Wenn dies ausgelassen wird, wird der Ausdruck im Hauptframe des Fensters ausgewertet.
    - `useContentScriptContext` {{optional_inline}}
      - : `boolean`. Falls `true`, wird der Ausdruck im Kontext von Inhaltskripten ausgewertet, die diese Erweiterung an die Seite angehängt hat. Wenn Sie diese Option setzen, müssen Sie tatsächlich einige Inhaltskripte an die Seite angehängt haben, oder ein DevTools-Fehler wird ausgelöst.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Bewertet den Ausdruck im Kontext eines Inhaltskripts, das von einer anderen Erweiterung angehängt wurde, deren Ursprung mit dem hier angegebenen Wert übereinstimmt. Dies überschreibt `useContentScriptContext`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` erfüllt wird, das zwei Elemente enthält.

Wenn kein Fehler aufgetreten ist, enthält Element 0 das Ergebnis der Auswertung des Ausdrucks und Element 1 ist `undefined`.

Wenn ein Fehler aufgetreten ist, ist Element 0 `undefined` und Element 1 enthält ein Objekt mit Details über den Fehler. Zwei verschiedene Arten von Fehlern werden unterschieden:

- Fehler beim Auswerten des JavaScript (zum Beispiel Syntaxfehler im Ausdruck). In diesem Fall enthält Element 1:

  - eine boolesche Eigenschaft `isException`, gesetzt auf `true`
  - eine Zeichenketteigenschaft `value`, die weitere Details gibt.

- Andere Fehler (zum Beispiel ein Ausdruck, der zu einem Objekt evaluieren würde, das nicht als JSON dargestellt werden kann). In diesem Fall enthält Element 1:

  - eine boolesche Eigenschaft `isError`, gesetzt auf `true`
  - eine Zeichenketteigenschaft `code`, die einen Fehlercode enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dies testet, ob jQuery im inspizierten Fenster definiert ist, und protokolliert das Ergebnis. Beachten Sie, dass dies in einem Inhaltskript nicht funktionieren würde, da selbst wenn jQuery definiert wäre, das Inhaltskript es nicht sehen würde.

```js
function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  console.log(result);
  if (result[0] !== undefined) {
    console.log(`jQuery: ${result[0]}`);
  } else if (result[1]) {
    handleError(result[1]);
  }
}

const checkJQuery = "typeof jQuery !== 'undefined'";

evalButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(checkJQuery).then(handleResult);
});
```

### Helfer-Beispiele

Dies verwendet den `$0`-Helfer, um die Hintergrundfarbe des Elements festzulegen, das derzeit im Inspector ausgewählt ist:

```js
const evalButton = document.querySelector("#reddinate");
const evalString = "$0.style.backgroundColor = 'red'";

function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}

evalButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(evalString).then(handleResult);
});
```

Dies verwendet den `inspect()`-Helfer, um das erste \<h1>-Element in der Seite auszuwählen:

```js
const inspectButton = document.querySelector("#inspect");
const inspectString = "inspect(document.querySelector('h1'))";

function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}

inspectButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(inspectString).then(handleResult);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API von Chromium.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions von Quellcode müssen den obigen Copyright-Hinweis,
// dieses Bedingungenliste und den folgenden Haftungsausschluss enthalten.
//    * Redistributions in binary form müssen obigen
// Copyright-Hinweis, diese Bedingungenliste und den
// Haftungsausschluss in den Dokumentationen und/oder anderen Materialien
// enthalten, die mit der Verteilung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragenden dürfen verwendet werden, um Produkte, die aus
// dieser Software abgeleitet sind, ohne vorherige schriftliche Genehmigung
// zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE
// COPYRIGHT-INHABER ODER BEITRAGENDEN HAFTBAR FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE,
// BESONDERE, BEISPIELHAFTE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
// AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSAUSFÄLLE,
// ODER ENTGANGENE GEWINNE; ODER GESCHÄFTSUNTERBRECHUNG), WIE AUCH IMMER
// VERURSACHT UND UNTER JEGLICHER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER
// HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER SONSTIGEM),
// DIE AUS DER NUTZUNG DIESER SOFTWARE RESULTIERT, AUCH WENN ÜBER DIE MÖGLICHKEIT
// SOLCHER SCHÄDEN INFORMIERT.
-->
