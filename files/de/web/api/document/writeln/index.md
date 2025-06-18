---
title: "Dokument: writeln() Methode"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{ ApiRef("DOM") }}{{deprecated_header}}

> [!WARNING]
> Diese API analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, insbesondere wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Aus diesem Grund ist es viel sicherer, nur [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte an diese Methode zu übergeben und dies mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Dies bedeutet, dass Sie sicher sein können, dass die Eingabe durch eine Transformationsfunktion geleitet wurde, die die Möglichkeit hat, die Eingabe zu [sanitieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährlichen Markup wie {{htmlelement("script")}} Elemente und Ereignisattributen zu entfernen.

Die **`writeln()`** Methode des [`Document`](/de/docs/Web/API/Document) Interfaces schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder String-Parametern in einen von [`document.open()`](/de/docs/Web/API/Document/open) geöffneten Dokumentstrom, gefolgt von einem Zeilenumbruch.

Die Methode ist im Wesentlichen die gleiche wie [`document.write()`](/de/docs/Web/API/Document/write), fügt jedoch einen Zeilenumbruch hinzu (Informationen im verlinkten Thema gelten auch für diese Methode).
Dieser Zeilenumbruch wird nur sichtbar, wenn er in ein Element eingefügt wird, in dem Zeilenumbrüche angezeigt werden.
Die zusätzlichen Informationen in [`document.write()`](/de/docs/Web/API/Document/write) gelten auch für diese Methode.

## Syntax

```js-nolint
writeln(markup)
writeln(markup, markup2)
writeln(markup, markup2, /* …, */ markupN)
```

### Parameter

- `markup`, …, `markupN`
  - : [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder String-Objekte, die den in das Dokument zu schreibenden Text enthalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde auf einem XML-Dokument aufgerufen oder als der Parser gerade einen benutzerdefinierten Elementkonstruktor ausführte.
- `TypeError`
  - : Ein String wird als einer der Parameter übergeben, wenn [Trusted Types erzwungen sind](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy) um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte zu erstellen.

## Beispiele

### Schreiben von TrustedHTML

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Strings zu bereinigen, bevor sie in ein Dokument geschrieben werden.
Sie sollten immer Trusted Types verwenden, um unzuverlässige Strings an unsichere APIs zu übergeben.

Das Beispiel zeigt zunächst einen Standardtext und einen Button.
Wenn der Button angeklickt wird, wird das aktuelle Dokument geöffnet, einige HTML-Strings werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen konvertiert und in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTMLs für den Button und des JavaScripts, das das Update durchgeführt hat!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zuerst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen und die [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) Methode zu verwenden, um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()`, um die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte zu erstellen, die wir an die `writeln()` Methode übergeben.
Diese Methode kann beliebig mit dem Eingabestring umgehen: Die Trusted Types API erfordert nur, dass Sie die Eingabe durch eine Richtlinien-Transformationsfunktion leiten, nicht dass die Transformationsfunktion etwas Spezielles macht.

Sie würden die Methode verwenden, um die Eingabe zu [sanitieren](/de/docs/Web/Security/Attacks/XSS#sanitization), indem potenziell unsichere Funktionen wie {{htmlelement("script")}} Tags oder Ereignisattributen entfernt werden.
Sanitierung ist schwer korrekt umzusetzen, daher verwendet dieser Prozess typischerweise eine angesehene Drittanbieter-Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).

Hier implementieren wir einen rudimentären "Sanitizer", der `<` Symbole in öffnenden und schließenden Script-Tags durch das Zeichen `&lt;` ersetzt.
Die injizierten Strings in diesem Beispiel enthalten tatsächlich keine schädlichen Elemente, daher dient dies nur zur Demonstration.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML: (string) => {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Wir können dann die [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) Methode der zurückgegebenen Richtlinie verwenden, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte aus unseren ursprünglichen Eingabestrings zu erstellen.
Diese werden anschließend an die `writeln()` Funktion übergeben, wenn der Benutzer den Button klickt.

```js
const replace = document.querySelector("#replace");
const oneInput = "<h1>Out with";
const twoInput = "the old</h1>";
const threeInput = "<pre>in with";
const fourInput = "the new!</pre>";

replace.addEventListener("click", () => {
  document.open();
  document.writeln(policy.createHTML(oneInput));
  document.writeln(policy.createHTML(twoInput), policy.createHTML(threeInput));
  document.writeln(policy.createHTML(fourInput));
  document.close();
});
```

#### Ergebnisse

Klicken Sie auf den Button.
Beachten Sie, dass nach jedem Aufruf von `writeln()` ein Zeilenumbruch hinzugefügt wird, dieser jedoch nur innerhalb des {{htmlelement("pre")}} Elements sichtbar ist, da dessen Layout Leerzeichen standardmäßig beibehält.

{{EmbedLiveSample("Writing TrustedHTML")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
