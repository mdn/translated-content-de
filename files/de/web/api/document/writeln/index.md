---
title: "Dokument: writeln()-Methode"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: d977ef780f770ddb5359b8fecf733e786f5faadf
---

{{ ApiRef("DOM") }}{{deprecated_header}}

> [!WARNING]
> Diese Methode parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können eine Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe darstellen, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Zeichenfolgen übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`writeln()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder String-Parametern in einen Dokumentstrom, der mit [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde, gefolgt von einem Zeilenumbruch.

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
  - : Die Methode wurde auf einem XML-Dokument aufgerufen oder während der Parser gerade einen benutzerdefinierten Elemente-Konstruktor ausführt.
- `TypeError`
  - : Eine Zeichenfolge wurde als einer der Parameter übergeben, wenn [Trusted Types erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy) zum Erstellen von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekten.

## Beschreibung

Die Methode ist im Wesentlichen dieselbe wie [`document.write()`](/de/docs/Web/API/Document/write), fügt jedoch einen Zeilenumbruch hinzu (Informationen im verlinkten Thema gelten auch für diese Methode).
Dieser Zeilenumbruch ist nur sichtbar, wenn er innerhalb eines Elements eingefügt wird, bei dem Zeilenumbrüche angezeigt werden.
Die zusätzlichen Informationen in [`document.write()`](/de/docs/Web/API/Document/write) gelten auch für diese Methode.

### Sicherheitsüberlegungen

Die Methode ist eine mögliche Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Zeichenfolgen von einem Benutzer in das DOM eingefügt werden, ohne vorher bereinigt zu werden.
Während die Methode möglicherweise {{HTMLElement("script")}}-Elemente blockiert, wenn sie in einigen Browsern eingefügt werden (siehe [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/) für Chrome), ist sie anfällig für viele andere Möglichkeiten, wie Angreifer HTML gestalten können, um bösartigen JavaScript-Code auszuführen.

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenfolgen übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährlichen Markup (wie {{htmlelement("script")}}-Elemente und Ereignishandlerattribute) zu entfernen, bevor sie eingefügt wird.

## Beispiele

### Schreiben von TrustedHTML

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Zeichenfolgen zu bereinigen, bevor sie in ein Dokument geschrieben werden.
Sie sollten immer Trusted Types verwenden, wenn Sie nicht vertrauenswürdige Zeichenfolgen an unsichere APIs übergeben.

Das Beispiel zeigt zunächst einen Standardtext und einen Button an.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, einige HTML-Zeichenfolgen werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen konvertiert und in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTMLs für den Button und des JavaScript-Codes, der die Aktualisierung durchgeführt hat!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zuerst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)-Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen, und verwenden deren [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy)-Methode, um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()`, um die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen, die wir an die `writeln()`-Methode übergeben werden.
Diese Methode kann beliebig mit der Eingabezeichenfolge verfahren: Die Trusted Types API erfordert nur, dass Sie die Eingabe durch eine Richtlinientransformationsfunktion leiten, nicht dass die Transformationsfunktion irgendetwas Bestimmtes tut.

Sie würden die Methode verwenden, um die Eingabe durch Entfernen potenziell unsicherer Funktionen wie {{htmlelement("script")}}-Tags oder Ereignishandlerattribute zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization).
Die Bereinigung ist schwer richtig zu machen, daher wird dieser Prozess typischerweise mit einer seriösen Drittanbieterbibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify) durchgeführt.

Hier implementieren wir einen rudimentären "Sanitizer", der `<`-Symbole in Skriptöffnungs- und - schließtags durch das `&lt;`-Zeichen ersetzt.
Die in diesem Beispiel eingefügten Zeichenfolgen enthalten tatsächlich keine schädlichen Elemente, daher dient dies lediglich der Demonstration.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Wir können dann die [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Methode auf der zurückgegebenen Richtlinie verwenden, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte aus unseren ursprünglichen Eingabezeichenfolgen zu erstellen.
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

Klicken Sie den Button.
Beachten Sie, dass nach jedem Aufruf von `writeln()` ein Zeilenumbruch hinzugefügt wird, der jedoch nur innerhalb des {{htmlelement("pre")}}-Elements sichtbar ist, da dessen Layout standardmäßig Leerzeichen bewahrt.

{{EmbedLiveSample("Writing TrustedHTML")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
