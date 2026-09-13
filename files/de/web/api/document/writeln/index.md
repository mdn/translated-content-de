---
title: "Dokument: writeln() Methode"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ ApiRef("DOM") }}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in den DOM.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`writeln()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder String-Parametern in einen Dokument-Stream, der durch [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde, gefolgt von einem Zeilenumbruch.

## Syntax

```js-nolint
writeln(markup)
writeln(markup, markup2)
writeln(markup, markup2, /* …, */ markupN)
```

### Parameter

- `markup`, …, `markupN`
  - : [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder String-Objekte, die den zu schreibenden Text in das Dokument enthalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde auf einem XML-Dokument aufgerufen oder während der Parser einen benutzerdefinierten Elemente-Konstruktor ausführt.
- `TypeError`
  - : Ein String wird als einer der Parameter übergeben, wenn [vertrauenswürdige Typen durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy), um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte zu erstellen.

## Beschreibung

Die Methode ist im Wesentlichen die gleiche wie [`document.write()`](/de/docs/Web/API/Document/write), fügt aber einen Zeilenumbruch hinzu (Informationen im verlinkten Thema gelten auch für diese Methode).
Dieser Zeilenumbruch ist nur sichtbar, wenn er in ein Element eingefügt wird, in dem Zeilenumbrüche angezeigt werden.
Die zusätzlichen Informationen in [`document.write()`](/de/docs/Web/API/Document/write) gelten auch für diese Methode.

### Sicherheitsüberlegungen

Die Methode ist ein potenzieller Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, in den DOM eingefügt werden, ohne vorher bereinigt zu werden.
Obwohl die Methode möglicherweise {{HTMLElement("script")}}-Elemente blockiert, wenn sie in einigen Browsern eingefügt werden (siehe [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/) für Chrome), ist sie anfällig für viele andere Wege, auf denen Angreifer HTML erstellen können, um schädliches JavaScript auszuführen.

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute) zu entfernen, bevor sie eingefügt wird.

## Beispiele

### Schreiben von TrustedHTML

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Strings zu bereinigen, bevor sie in ein Dokument geschrieben werden.
Sie sollten immer vertrauenswürdige Typen verwenden, um nicht vertrauenswürdige Strings an unsichere APIs weiterzugeben.

Das Beispiel zeigt zunächst einen Standardtext und einen Button.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, einige HTML-Strings werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen umgewandelt und ins Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTMLs für den Button und des JavaScripts, das das Update vorgenommen hat!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zuerst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen, und verwenden die Methode [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy), um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()` zur Erstellung von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekten, die wir an die `writeln()` Methode übergeben werden.
Diese Methode kann mit dem Input-String machen, was sie möchte: Die Trusted Types API verlangt nur, dass Sie den Input durch eine Richtlinien-Transformationsfunktion leiten, nicht dass die Transformationsfunktion etwas Bestimmtes macht.

Sie würden die Methode verwenden, um den Input zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), indem potenziell unsichere Features wie {{htmlelement("script")}}-Tags oder Event-Handler-Attribute entfernt werden.
Sanitisierung ist schwer richtig zu machen, daher wird dieser Prozess typischerweise mit einer anerkannten Drittanbieter-Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify) durchgeführt.

Hier implementieren wir einen rudimentären "Sanitizer", der `<` Symbole in den öffnenden und schließenden Script-Tags mit dem `&lt;` Zeichen ersetzt.
Die eingefügten Strings in diesem Beispiel enthalten tatsächlich keine schädlichen Elemente, das ist also rein zur Demonstration gedacht.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Wir können dann die Methode [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) auf der zurückgegebenen Richtlinie verwenden, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte aus unseren ursprünglichen Eingabestrings zu erstellen.
Diese werden dann an die `writeln()` Funktion übergeben, wenn der Benutzer den Button klickt.

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
Beachten Sie, dass nach jedem Aufruf von `writeln()` ein Zeilenumbruch hinzugefügt wird, dieser jedoch nur im {{htmlelement("pre")}} Element sichtbar ist, da dessen Layout standardmäßig Leerzeichen bewahrt.

{{EmbedLiveSample("Writing TrustedHTML")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
