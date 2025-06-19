---
title: "Dokument: writeln() Methode"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: 08c3f187740ba6d4d1584f66df5a61232ab25421
---

{{ ApiRef("DOM") }}{{deprecated_header}}

> [!WARNING]
> Diese API parst ihre Eingaben als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Aus diesem Grund ist es viel sicherer, nur [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte in diese Methode zu übergeben und dies mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) zu [erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Dies bedeutet, dass Sie sicher sein können, dass die Eingabe durch eine Transformationsfunktion geleitet wurde, die die Möglichkeit hat, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute zu entfernen.

Die **`writeln()`**-Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder String-Parameter in einen durch [`document.open()`](/de/docs/Web/API/Document/open) geöffneten Dokumentstream, gefolgt von einem Zeilenumbruch.

Die Methode ist im Wesentlichen identisch mit [`document.write()`](/de/docs/Web/API/Document/write), fügt jedoch einen Zeilenumbruch hinzu (Informationen im verlinkten Thema gelten ebenfalls für diese Methode).
Dieser Zeilenumbruch ist nur sichtbar, wenn er innerhalb eines Elements eingefügt wird, in dem Zeilenumbrüche angezeigt werden.
Die zusätzlichen Informationen in [`document.write()`](/de/docs/Web/API/Document/write) gelten ebenfalls für diese Methode.

## Syntax

```js-nolint
writeln(markup)
writeln(markup, markup2)
writeln(markup, markup2, /* …, */ markupN)
```

### Parameter

- `markup`, …, `markupN`
  - : [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder String-Objekte, die den Text enthalten, der in das Dokument geschrieben werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde auf einem XML-Dokument aufgerufen oder während der Parser gerade einen benutzerdefinierten Elementkonstruktor ausführt.
- `TypeError`
  - : Ein String wird als einer der Parameter übergeben, wenn [Trusted Types erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy) zum Erstellen von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekten.

## Beispiele

### Schreiben von TrustedHTML

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Strings zu sanitizen, bevor sie in ein Dokument geschrieben werden.
Sie sollten immer vertrauenswürdige Typen verwenden, um unzuverlässige Strings an unsichere APIs zu übergeben.

Das Beispiel zeigt zunächst einige Standardtexte und einen Button.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, einige HTML-Strings werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umgewandelt und in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTMLs für den Button und des JavaScripts, das die Aktualisierung vorgenommen hat!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zuerst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)-Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen, und verwenden deren [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy)-Methode, um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()`, um die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen, die wir an die `writeln()`-Methode übergeben werden.
Diese Methode kann mit dem Eingabestring alles tun, was sie möchte: die Trusted Types API erfordert nur, dass Sie die Eingabe durch eine Richtlinientransformationsfunktion leiten, nicht dass die Transformationsfunktion etwas Bestimmtes tut.

Sie würden die Methode verwenden, um die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), indem potenziell unsichere Funktionen wie {{htmlelement("script")}}-Tags oder Event-Handler-Attribute entfernt werden.
Das Sanitizing ist schwer richtig zu machen, daher verwendet dieser Prozess typischerweise eine renommierte Drittanbieter-Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).

Hier implementieren wir ein rudimentäres "Sanitizer", das `<`-Symbole in Script-Öffnungs- und Schlussetags durch das `&lt;`-Zeichen ersetzt.
Die injectierten Strings in diesem Beispiel enthalten tatsächlich keine schädlichen Elemente, daher dient dies rein zur Demonstration.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Wir können dann die Methode [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) der zurückgegebenen Richtlinie verwenden, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte aus unseren ursprünglichen Eingabestrings zu erstellen.
Diese werden dann der `writeln()`-Funktion übergeben, wenn der Benutzer den Button klickt.

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
Beachten Sie, dass nach jedem Aufruf von `writeln()` ein Zeilenumbruch hinzugefügt wird, dieser jedoch nur innerhalb des {{htmlelement("pre")}}-Elements sichtbar ist, weil sein Layout standardmäßig Leerzeichen bewahrt.

{{EmbedLiveSample("Writing TrustedHTML")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
