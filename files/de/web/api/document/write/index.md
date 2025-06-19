---
title: "Dokument: write()-Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: 08c3f187740ba6d4d1584f66df5a61232ab25421
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Die Verwendung der `document.write()`-Methode wird dringend abgeraten.
> Vermeiden Sie die Nutzung und ersetzen Sie sie, wenn möglich, in bestehendem Code.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat sehr eigenwilliges Verhalten.
> > In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während der Parser läuft, was zu einem DOM führt, das nicht der Quelle des Dokuments entspricht (z.B., wenn die geschriebene Zeichenfolge "`<plaintext>`" oder "`<!--`" ist).
> > In anderen Fällen kann der Aufruf zuerst die aktuelle Seite löschen, als ob [`document.open()`](/de/docs/Web/API/Document/open) aufgerufen worden wäre.
> > In noch weiteren Fällen wird die Methode einfach ignoriert, oder sie löst eine Ausnahme aus. Benutzeragenten sind [ausdrücklich erlaubt, die Ausführung von `script`-Elementen, die über diese Methode eingefügt wurden, zu vermeiden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention).
> > Und um die Sache noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerklatenz abhängen, was zu schwer zu debuggenden Fehlern führen kann.
> > Aus all diesen Gründen ist die Verwendung dieser Methode stark abzulehnen.

> [!WARNING]
> Diese API analysiert ihren Input als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind bekannt als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn der Input ursprünglich von einem Angreifer stammt.
>
> Aus diesem Grund ist es viel sicherer, nur [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte in diese Methode zu übergeben und dies mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive [durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Das bedeutet, Sie können sicher sein, dass der Input durch eine Transformationsfunktion geleitet wurde, welche die Gelegenheit hat, den Input zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markup, wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute, zu entfernen.

Die **`write()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder String-Parametern in einen von [`document.open()`](/de/docs/Web/API/Document/open) geöffneten Dokumentstrom.

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
  - : Die Methode wurde bei einem XML-Dokument aufgerufen oder während der Parser gerade einen benutzerdefinierten Elementkonstruktor ausführt.
- `TypeError`
  - : Ein String wurde als einer der Parameter übergeben, wenn [Trusted Types erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy), um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen.

## Beschreibung

`document.write()` analysiert den Markup-Text in den als Parameter übergebenen Objekten in das Objektmodell (DOM) des geöffneten Dokuments, in der Reihenfolge, in der die Parameter angegeben sind.

Die übergebenen Objekte können Instanzen von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder Strings sein.
Es ist viel sicherer, nur [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte in diese Methode zu übergeben und dies mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive [durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Das garantiert, dass der Input durch eine Transformationsfunktion geleitet wurde, welche die Gelegenheit hat, den Input zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markup, wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute, zu entfernen.

Da `document.write()` in den Dokument**strom** schreibt, wird beim Aufruf von `document.write()` auf einem geschlossenen (geladenen) Dokument (ohne vorher [`document.open()`](/de/docs/Web/API/Document/open) aufzurufen) automatisch [`document.open()`](/de/docs/Web/API/Document/open) aufgerufen, was das [Dokument löscht](/de/docs/Web/API/Document/open#description).

Die Ausnahme ist, wenn der `document.write()`-Aufruf innerhalb eines inline HTML-`<script>`-Tags eingebettet ist, dann wird `document.open()` nicht automatisch aufgerufen:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` (und [`document.writeln`](/de/docs/Web/API/Document/writeln)) kann nicht mit XML oder XHTML verwendet werden, und ein Versuch dies zu tun, wird eine `InvalidStateError`-Ausnahme auslösen.
Dies ist der Fall, wenn eine lokale Datei mit einer .xhtml-Dateierweiterung geöffnet wird oder für jedes Dokument, das mit einem `application/xhtml+xml`-MIME-Typ serviert wird.
Mehr Informationen sind in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite) verfügbar.

Die Verwendung von `document.write()` in [deferred](/de/docs/Web/HTML/Reference/Elements/script#defer) oder [asynchronen](/de/docs/Web/HTML/Reference/Elements/script#async) Skripten wird ignoriert, und Sie erhalten eine Meldung wie "A call to `document.write()` from an asynchronously-loaded external script was ignored" in der Fehlerkonsole.

Nur in Edge löst der mehrmalige Aufruf von `document.write()` in einem {{HTMLElement("iframe")}} den Fehler "SCRIPT70: Permission denied" aus.

Ab Version 55 wird Chrome `<script>`-Elemente, die über `document.write()` eingefügt wurden, unter bestimmten Bedingungen nicht ausführen.
Weitere Informationen finden Sie unter [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Beispiele

### TrustedHTML schreiben

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Strings von {{htmlelement("script")}}-Elementen zu sanitizen, bevor sie in ein Dokument geschrieben werden.

Das Beispiel zeigt zunächst einen Standardtext und einen Button an.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, drei HTML-Strings werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umgewandelt und in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielframe, einschließlich des ursprünglichen HTML für den Button und des JavaScript, das die Aktualisierung vornahm!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zuerst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)-Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen, und verwenden ihre [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy)-Methode, um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()`, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen, die wir der `write()`-Methode übergeben werden.
Diese Methode kann mit der Eingabezeichenfolge tun, was sie möchte: Die Trusted Types API verlangt nur, dass die Eingabe durch eine Richtlinien-Transformationsfunktion geleitet wird, nicht dass die Transformationsfunktion etwas Bestimmtes tut.

Sie würden die Methode nutzen, um die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), indem potenziell unsichere Funktionen wie {{htmlelement("script")}}-Tags oder Event-Handler-Attribute entfernt werden.
Sanitization ist schwer richtig hinzubekommen, daher verwendet dieser Prozess in der Regel eine seriöse Drittanbieter-Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).

Für Demonstrationszwecke implementieren wir hier einen rudimentären "Sanitizer", der `<`-Symbole in Skriptöffnungs- und -schlusstag durch das `&lt;`-Zeichen ersetzt.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Wir können dann die [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Methode auf der zurückgegebenen Richtlinie verwenden, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte aus unseren ursprünglichen Eingabestrings zu erstellen.
Diese werden dann an die `write()`-Funktion übergeben, wenn der Benutzer auf den Button klickt.

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

Drücken Sie den Button und beachten Sie, dass die HTML-Elemente, denen wir vertrauen (in diesem Beispiel), eingefügt werden, aber das nicht-vertrauenswürdige {{htmlelement("script")}}-Element jetzt als reiner Text dargestellt wird.

{{EmbedLiveSample("Writing TrustedHTML")}}

### Strings schreiben

Dies ist dasselbe wie das vorherige Beispiel, außer dass Trusted Types nicht verwendet oder erzwungen werden.
Wir schreiben nicht-sanitizierte Strings, die einen Weg für [XSS-Angriffe](/de/docs/Web/Security/Attacks/XSS) bieten könnten.

Das Beispiel zeigt zunächst einen Standardtext und einen Button an.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, drei HTML-Strings werden in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielframe, einschließlich des ursprünglichen HTML für den Button und des JavaScript, das die Aktualisierung vornahm.

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
Dazu gehört auch das {{htmlelement("script")}}-Element, das in einer realen Anwendung schädlichen Code ausgeführt haben könnte.

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
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
