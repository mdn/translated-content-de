---
title: "Dokumentation: write()-Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: 4af25fe3a5bd23e49b637b1ec1ecf5b11dbe0145
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Die Verwendung der `document.write()`-Methode wird dringend abgeraten.
> Vermeiden Sie deren Nutzung und ersetzen Sie sie, wo immer möglich, im bestehenden Code.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat sehr eigenwilliges Verhalten.
> > In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während der Parser läuft, was zu einem DOM führt, das nicht mit der Quelle des Dokuments übereinstimmt (z. B. wenn die geschriebene Zeichenkette die Zeichenfolge "`<plaintext>`" oder "`<!--`" ist).
> > In anderen Fällen kann der Aufruf die aktuelle Seite zuerst leeren, als ob [`document.open()`](/de/docs/Web/API/Document/open) aufgerufen worden wäre.
> > In noch weiteren Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Benutzeragenten sind [explizit berechtigt, die Ausführung von `script`-Elementen, die über diese Methode eingefügt wurden, zu vermeiden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention).
> > Und um die Sache noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerkverzögerung abhängen, was zu Fehlern führen kann, die sehr schwer zu debuggen sind.
> > Aus all diesen Gründen wird von der Verwendung dieser Methode dringend abgeraten.

> [!WARNING]
> Diese API analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und potentiell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Aus diesem Grund ist es viel sicherer, nur [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte in diese Methode zu übergeben und dies mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive [durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Dies bedeutet, dass Sie sicher sein können, dass die Eingabe durch eine Transformationsfunktion geleitet wurde, die die Möglichkeit hat, die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups wie {{htmlelement("script")}}-Elemente und Ereignishandler-Attribute zu entfernen.

Die **`write()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder String-Parametern in einen Dokumentstrom, der durch [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde.

## Syntax

```js-nolint
write(markup)
write(markup, markup2)
write(markup, markup2, /* …, */ markupN)
```

### Parameter

- `markup`, …, `markupN`
  - : [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte oder Strings, die das zu schreibende Markup in das Dokument enthalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde auf einem XML-Dokument aufgerufen oder während der Parser aktuell einen benutzerdefinierten Elementkonstruktor ausführt.
- `TypeError`
  - : Ein String wird als einer der Parameter übergeben, wenn [Trusted Types durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie für die Erstellung von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekten definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy).

## Beschreibung

`document.write()` analysiert den Markup-Text in den Objekten, die als Parameter übergeben werden, in das Objektmodell (DOM) des geöffneten Dokuments, in der Reihenfolge, in der die Parameter angegeben sind.

Die übergebenen Objekte können Instanzen von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder Strings sein.
Es ist viel sicherer, nur [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte in diese Methode zu übergeben und dies mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive [durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Die Garantien, dass die Eingabe durch eine Transformationsfunktion geleitet wurde, die die Möglichkeit hat, die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups wie {{htmlelement("script")}}-Elemente und Ereignishandler-Attribute zu entfernen.

Da `document.write()` in den Dokument-**Stream** schreibt, wird beim Aufruf von `document.write()` auf einem geschlossenen (geladenen) Dokument (ohne zuvor [`document.open()`](/de/docs/Web/API/Document/open) aufzurufen) automatisch [`document.open()`](/de/docs/Web/API/Document/open) aufgerufen, das [das Dokument löscht](/de/docs/Web/API/Document/open#description).

Die Ausnahme ist, dass wenn der `document.write()`-Aufruf in einem Inline-HTML-`<script>`-Tag eingebettet ist, es nicht automatisch `document.open()` aufruft:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` (und [`document.writeln`](/de/docs/Web/API/Document/writeln)) kann nicht mit XML oder XHTML verwendet werden, und der Versuch, dies zu tun, wird eine `InvalidStateError`-Ausnahme auslösen.
Dies ist der Fall, wenn eine lokale Datei mit der Erweiterung .xhtml geöffnet wird oder für jedes Dokument, das mit einem `application/xhtml+xml` MIME-Typ serviert wird.
Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

Die Verwendung von `document.write()` in [verzögerten](/de/docs/Web/HTML/Reference/Elements/script#defer) oder [asynchronen](/de/docs/Web/HTML/Reference/Elements/script#async) Skripten wird ignoriert und Sie erhalten eine Fehlermeldung wie "Ein Aufruf von `document.write()` aus einem asynchron geladenen externen Skript wurde ignoriert" in der Fehlerkonsole.

Nur in Edge verursacht das mehrmalige Aufrufen von `document.write()` in einem {{HTMLElement("iframe")}} den Fehler "SCRIPT70: Permission denied".

Ab Version 55 wird Chrome `<script>`-Elemente, die über `document.write()` eingefügt werden, nicht ausführen, wenn bestimmte Bedingungen erfüllt sind.
Weitere Informationen finden Sie unter [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Beispiele

### Schreiben von TrustedHTML

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Zeichenfolgen von {{htmlelement("script")}}-Elementen zu reinigen, bevor sie in ein Dokument geschrieben werden.

Das Beispiel zeigt zunächst einen Standardtext und einen Button.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, drei HTML-Zeichenfolgen werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umgewandelt und in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTML für den Button und des JavaScript, das das Update durchführte!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zuerst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)-Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen und verwenden die Methode [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy), um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()` zur Erstellung der [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte, die wir an die `write()`-Methode übergeben werden.
Diese Methode kann mit der Eingabezeichenfolge machen, was sie möchte: die Trusted Types API erfordert lediglich, dass Sie die Eingabe durch eine Richtlinien-Transformationsfunktion leiten, nicht, dass die Transformationsfunktion etwas Besonderes tut.

Sie würden die Methode verwenden, um die Eingabe durch das Entfernen potenziell unsicherer Funktionen wie {{htmlelement("script")}}-Tags oder Ereignishandler-Attribute zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization).
Das Sanitisieren ist schwer korrekt hinzubekommen, weshalb dieser Prozess typischerweise eine renommierte Drittanbieter-Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify) verwendet.

Für Demonstrationszwecke implementieren wir hier einen rudimentären "Sanitizer", der `<`-Symbole in öffnenden und schließenden Skripttags durch das `&lt;`-Zeichen ersetzt.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML: (string) => {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Wir können dann die Methode [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) auf der zurückgegebenen Richtlinie verwenden, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte aus unseren ursprünglichen Eingabezeichenfolgen zu erstellen.
Diese werden dann an die `write()`-Funktion übergeben, wenn der Benutzer den Button klickt.

```js
const oneInput = "<h1>Out with the old</h1>";
const twoInput = "<p>in with the new!</p>";
const threeInput = "<script>alert('evil afoot')<" + "/script>";
const replace = document.querySelector("#replace");

replace.addEventListener("click", () => {
  document.open();
  document.write(
    policy.createHTML(oneInput),
    policy.createHTML(twoInput),
    policy.createHTML(threeInput),
  );
  document.close();
});
```

#### Ergebnisse

Drücken Sie den Button und beachten Sie, dass die HTML-Elemente, denen wir vertrauen (in diesem Beispiel), injiziert werden, das nicht vertrauenswürdige {{htmlelement("script")}}-Element jetzt jedoch als reiner Text angezeigt wird.

{{EmbedLiveSample("Writing TrustedHTML")}}

### Schreiben von Zeichenfolgen

Dies ist dasselbe wie das vorherige Beispiel, außer dass Trusted Types nicht verwendet oder durchgesetzt werden.
Wir schreiben unsanitierte Zeichenfolgen, die einen Weg für [XSS-Angriffe](/de/docs/Web/Security/Attacks/XSS) bieten können.

Das Beispiel zeigt zunächst einen Standardtext und einen Button.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, drei HTML-Zeichenfolgen werden in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTML für den Button und des JavaScript, das das Update durchführte.

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

```js
const replace = document.querySelector("#replace");

const oneInput = "<h1>Out with the old</h1>";
const twoInput = "<p>in with the new!</p>";
const threeInput = "<script>alert('evil afoot')<" + "/script>";

replace.addEventListener("click", () => {
  document.open();
  document.write(oneInput, twoInput, threeInput);
  document.close();
});
```

#### Ergebnisse

Drücken Sie den Button und beachten Sie, dass alle HTML-Elemente injiziert werden.
Dies schließt das {{htmlelement("script")}}-Element ein, das in einer realen Anwendung schädlichen Code ausgeführt haben könnte.

{{EmbedLiveSample("Writing strings")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.writeln()`](/de/docs/Web/API/Document/writeln)
- [`element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
- [Cross-site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
