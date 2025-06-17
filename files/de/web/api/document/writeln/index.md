---
title: "Dokumentation: writeln()-Methode"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: 4af25fe3a5bd23e49b637b1ec1ecf5b11dbe0145
---

{{ ApiRef("DOM") }}

> [!WARNING]
> Diese API analysiert ihren Input als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injektionssenken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein, wenn der Input ursprünglich von einem Angreifer stammt.
>
> Aus diesem Grund ist es viel sicherer, nur [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte in diese Methode zu übergeben und dies mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive [durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Das bedeutet, Sie können sicher sein, dass der Input durch eine Transformationsfunktion geleitet wurde, die die Chance hatte, den Input zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markup-Elemente wie {{htmlelement("script")}}-Elemente und Ereignis-Handler-Attribute zu entfernen.

Die **`writeln()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder String-Parametern in einen Dokumentenstrom, der durch [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde, gefolgt von einem Zeilenumbruch.

Die Methode ist im Wesentlichen die gleiche wie [`document.write()`](/de/docs/Web/API/Document/write), fügt jedoch einen Zeilenumbruch hinzu (Informationen im verlinkten Thema gelten auch für diese Methode).
Dieser Zeilenumbruch wird nur sichtbar sein, wenn er innerhalb eines Elements eingefügt wird, in dem Zeilenumbrüche angezeigt werden.
Die zusätzlichen Informationen in [`document.write()`](/de/docs/Web/API/Document/write) gelten auch für diese Methode.

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
  - : Die Methode wurde auf einem XML-Dokument aufgerufen oder wurde aufgerufen, während der Parser derzeit einen benutzerdefinierten Elementkonstruktor ausführt.
- `TypeError`
  - : Ein String wird als einer der Parameter übergeben, wenn [Trusted Types durchgesetzt](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und [keine Standardrichtlinie definiert](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy) wurde, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen.

## Beispiele

### Schreiben von TrustedHTML

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Strings zu bereinigen, bevor sie in ein Dokument geschrieben werden.
Sie sollten immer Trusted Types verwenden, um nicht vertrauenswürdige Strings an unsichere APIs zu übergeben.

Das Beispiel zeigt zunächst einen Standardtext und einen Button an.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, einige HTML-Strings werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umgewandelt und in das Dokument geschrieben, welches dann geschlossen wird.
Dies ersetzt das Dokument im Rahmen des Beispiels, einschließlich des ursprünglichen HTML für den Button und des JavaScripts, das die Aktualisierung vorgenommen hat!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zuerst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)-Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen, und verwenden deren [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy)-Methode, um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()`, um die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen, die wir an die `writeln()`-Methode übergeben werden.
Diese Methode kann mit dem Eingabestring beliebig umgehen: Die Trusted Types API erfordert nur, dass Sie den Input durch eine Richtlinien-Transformationsfunktion leiten, nicht dass die Transformationsfunktion etwas Bestimmtes tut.

Sie würden die Methode verwenden, um den Input zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), indem potenziell unsichere Funktionen wie {{htmlelement("script")}}-Tags oder Ereignis-Handler-Attribute entfernt werden.
Bereinigung ist schwer richtig zu machen, deshalb wird dieser Prozess typischerweise mit einer renommierten Drittanbieter-Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify) durchgeführt.

Hier implementieren wir einen simplen "Sanitizer", der `<`-Symbole in Script-Eröffnungs- und -Schluss-Tags durch das `&lt;`-Zeichen ersetzt.
Die eingespritzten Strings in diesem Beispiel enthalten tatsächlich keine schädlichen Elemente, dies dient nur zur Demonstration.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML: (string) => {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Wir können dann die Methode [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) auf der zurückgegebenen Richtlinie verwenden, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte aus unseren ursprünglichen Eingabestrings zu erstellen.
Diese werden dann an die `writeln()`-Funktion übergeben, wenn der Benutzer den Button klickt.

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
Beachten Sie, dass nach jedem Aufruf von `writeln()` ein Zeilenumbruch hinzugefügt wird, dieser jedoch nur innerhalb des {{htmlelement("pre")}}-Elements sichtbar ist, da sein Layout standardmäßig Leerzeichen beibehält.

{{EmbedLiveSample("Writing TrustedHTML")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
