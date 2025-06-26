---
title: "Dokument: write()-Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Die Verwendung der `document.write()`-Methode wird dringend abgeraten.
> Vermeiden Sie es, diese zu nutzen und ersetzen Sie sie, wo möglich, im bestehenden Code.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat ein sehr eigentümliches Verhalten.
> > In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während der Parser läuft, was zu einem DOM führt, das nicht dem Quellcode des Dokuments entspricht (z. B., wenn die geschriebene Zeichenkette die Zeichenkette "`<plaintext>`" oder "`<!--`" ist).
> > In anderen Fällen kann der Aufruf die aktuelle Seite zuerst löschen, als ob [`document.open()`](/de/docs/Web/API/Document/open) aufgerufen worden wäre.
> > In noch anderen Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Benutzeragenten sind [ausdrücklich erlaubt, die Ausführung von `script`-Elementen, die über diese Methode eingefügt wurden, zu vermeiden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention).
> > Und um die Sache noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerklatenz abhängig sein, was zu Fehlern führen kann, die sehr schwer zu debuggen sind.
> > Aus all diesen Gründen wird die Verwendung dieser Methode dringend abgeraten.

> [!WARNING]
> Diese API analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Aus diesem Grund ist es viel sicherer, nur [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte in diese Methode zu übergeben und dies mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) zu [erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Dies bedeutet, dass Sie sicher sein können, dass die Eingabe durch eine Transformationsfunktion geleitet wurde, die die Möglichkeit hat, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markup zu entfernen, wie z. B. {{htmlelement("script")}}-Elemente und Ereignishandler-Attribute.

Die **`write()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder String-Parametern in einen Dokumentenstrom, der durch [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde.

## Syntax

```js-nolint
write(markup)
write(markup, markup2)
write(markup, markup2, /* …, */ markupN)
```

### Parameter

- `markup`, …, `markupN`
  - : [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte oder Zeichenfolgen, die das Markup enthalten, das in das Dokument geschrieben werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde auf einem XML-Dokument aufgerufen oder aufgerufen, als der Parser gerade einen benutzerdefinierten Elementkonstruktor ausführte.
- `TypeError`
  - : Eine Zeichenkette wird als einer der Parameter übergeben, wenn [Trusted Types erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy) für die Erstellung von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekten.

## Beschreibung

`document.write()` analysiert den Markup-Text in den als Parameter übergebenen Objekten in das Objektmodell (DOM) des offenen Dokuments, in der Reihenfolge, in der die Parameter angegeben werden.

Die übergebenen Objekte können Instanzen von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder Zeichenfolgen sein.
Es ist viel sicherer, nur [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte in diese Methode zu übergeben und dies mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) zu [erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Dies garantiert, dass die Eingabe durch eine Transformationsfunktion geleitet wurde, die die Möglichkeit hat, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markup zu entfernen, wie z. B. {{htmlelement("script")}}-Elemente und Ereignishandler-Attribute.

Da `document.write()` in den Dokumenten**strom** schreibt, ruft das Aufrufen von `document.write()` auf einem geschlossenen (geladenen) Dokument (ohne vorher [`document.open()`](/de/docs/Web/API/Document/open) aufzurufen) automatisch [`document.open()`](/de/docs/Web/API/Document/open) auf, das das Dokument löschen wird.

Die Ausnahme besteht darin, dass, wenn der `document.write()`-Aufruf in einem Inline-HTML-`<script>`-Tag eingebettet ist, er nicht automatisch `document.open()` aufrufen wird:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` (und [`document.writeln`](/de/docs/Web/API/Document/writeln)) kann nicht mit XML oder XHTML verwendet werden, und der Versuch, dies zu tun, wird eine `InvalidStateError`-Ausnahme auslösen.
Dies ist der Fall, wenn eine lokale Datei mit einer .xhtml-Dateierweiterung geöffnet wird oder für jedes Dokument, das mit einem `application/xhtml+xml` MIME-Typ bereitgestellt wird.
Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

Die Verwendung von `document.write()` in [deferred](/de/docs/Web/HTML/Reference/Elements/script#defer)- oder [asynchronen](/de/docs/Web/HTML/Reference/Elements/script#async) Skripten wird ignoriert und Sie erhalten eine Nachricht wie "Ein Aufruf von `document.write()` aus einem asynchron geladenen externen Skript wurde ignoriert" in der Fehlerkonsole.

Nur in Edge führt das mehrfache Aufrufen von `document.write()` in einem {{HTMLElement("iframe")}} zu dem Fehler "SCRIPT70: Permission denied".

Ab Version 55 wird Chrome keine `<script>`-Elemente ausführen, die über `document.write()` eingefügt wurden, wenn bestimmte Bedingungen erfüllt sind.
Weitere Informationen finden Sie unter [Intervenieren gegen document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Beispiele

### Schreiben von TrustedHTML

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Zeichenfolgen von {{htmlelement("script")}}-Elementen zu sanitizen, bevor sie in ein Dokument geschrieben werden.

Das Beispiel zeigt zunächst einige Standardtexte und einen Button.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, drei HTML-Zeichenfolgen werden in Instanzen von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) umgewandelt und in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTMLs für den Button und des JavaScripts, das das Update vorgenommen hat!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zuerst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)-Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen und ihre Methode [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) zu nutzen, um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()` zur Erstellung der [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte, die wir an die `write()`-Methode übergeben werden.
Diese Methode kann mit der Eingabezeichenfolge tun, was sie möchte: Die Trusted Types API verlangt nur, dass Sie die Eingabe durch eine Policy-Transformationsfunktion leiten, nicht dass die Transformationsfunktion etwas Besonderes tut.

Sie würden die Methode verwenden, um die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), indem Sie potenziell unsichere Merkmale wie {{htmlelement("script")}}-Tags oder Ereignishandler-Attribute entfernen.
Sanitization ist schwer richtig zu machen, daher verwendet dieser Prozess typischerweise eine seriöse Drittanbieter-Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).

Zu Demonstrationszwecken implementieren wir hier einen rudimentären "Sanitizer", der `<`-Symbole in Skript-Öffnungs- und -Schließtags durch das Zeichen `&lt;` ersetzt.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Wir können dann die Methode [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) auf der zurückgegebenen Policy verwenden, um aus unseren ursprünglichen Eingabezeichenfolgen [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen.
Diese werden dann an die `write()`-Funktion übergeben, wenn der Nutzer den Button klickt.

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

Drücken Sie den Button und beachten Sie, dass die HTML-Elemente, denen wir vertrauen (in diesem Beispiel), eingefügt werden, aber das unzuverlässige {{htmlelement("script")}}-Element wird jetzt als einfacher Text gerendert.

{{EmbedLiveSample("Writing TrustedHTML")}}

### Schreiben von Zeichenfolgen

Dies ist dasselbe wie das vorherige Beispiel, außer dass Trusted Types nicht verwendet oder erzwungen werden.
Wir schreiben unsanitierte Zeichenfolgen, die einen Weg für [XSS-Angriffe](/de/docs/Web/Security/Attacks/XSS) bieten können.

Das Beispiel zeigt zunächst einige Standardtexte und einen Button.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, drei HTML-Zeichenfolgen werden in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTMLs für den Button und des JavaScripts, das das Update vorgenommen hat.

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

Drücken Sie den Button und beachten Sie, dass alle HTML-Elemente eingefügt werden.
Dies schließt das {{htmlelement("script")}}-Element ein, welches in einer realen Anwendung schädlichen Code ausführen könnte.

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
- [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
