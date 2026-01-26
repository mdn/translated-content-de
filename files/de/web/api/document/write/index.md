---
title: "Dokument: write()-Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Die Verwendung der `document.write()`-Methode wird dringend abgeraten.
> Vermeiden Sie deren Nutzung und ersetzen Sie sie, wo möglich, im bestehenden Code.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat ein sehr eigenwilliges Verhalten.
> > In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während der Parser aktiv ist, was zu einem DOM führt, das nicht dem Quellcode des Dokuments entspricht (z. B. wenn die geschriebene Zeichenkette "`<plaintext>`" oder "`<!--`" ist).
> > In anderen Fällen kann der Aufruf zuerst die aktuelle Seite leeren, als ob [`document.open()`](/de/docs/Web/API/Document/open) aufgerufen worden wäre.
> > In weiteren Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Benutzeragenten dürfen [ausdrücklich vermeiden, `script`-Elemente, die mit dieser Methode eingefügt wurden, auszuführen](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention).
> > Und um alles noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerkverzögerung abhängen, was zu schwer nachvollziehbaren Fehlern führen kann.
> > Aus all diesen Gründen wird die Verwendung dieser Methode dringend abgeraten.

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und sind potenziell ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Zeichenketten übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`write()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder Zeichenketten-Parametern in einen Dokumentstrom, der durch [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde.

## Syntax

```js-nolint
write(markup)
write(markup, markup2)
write(markup, markup2, /* …, */ markupN)
```

### Parameter

- `markup`, …, `markupN`
  - : [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte oder Zeichenketten, die das Markup enthalten, das in das Dokument geschrieben werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde auf einem XML-Dokument aufgerufen oder während der Parser gerade einen benutzerdefinierten Elementkonstruktor ausführt.
- `TypeError`
  - : Eine Zeichenkette wird als einer der Parameter übergeben, wenn [Trusted Types durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy) zur Erstellung von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekten.

## Beschreibung

`document.write()` analysiert den Markup-Text in den als Parameter übergebenen Objekten in das Objektmodell (DOM) des offenen Dokuments, in der Reihenfolge, in der die Parameter angegeben sind.

Da `document.write()` in den Dokument-**stream** schreibt, wird `document.write()` auf einem geschlossenen (geladenen) Dokument (ohne vorher [`document.open()`](/de/docs/Web/API/Document/open) aufzurufen) automatisch [`document.open()`](/de/docs/Web/API/Document/open) aufruft, was das Dokument löschen wird.

Die Ausnahme ist, dass wenn der `document.write()`-Aufruf in einem eingebetteten HTML-`<script>`-Tag enthalten ist, dann wird nicht automatisch `document.open()` aufgerufen:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` (und [`document.writeln`](/de/docs/Web/API/Document/writeln)) kann nicht mit XML oder XHTML verwendet werden, und der Versuch, dies zu tun, löst eine `InvalidStateError`-Ausnahme aus.
Dies ist der Fall, wenn eine lokale Datei mit einer .xhtml-Dateierweiterung geöffnet wird oder für jedes Dokument, das mit einem `application/xhtml+xml`-MIME-Typ bereitgestellt wird.
Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

Die Verwendung von `document.write()` in [verzögerten](/de/docs/Web/HTML/Reference/Elements/script#defer) oder [asynchronen](/de/docs/Web/HTML/Reference/Elements/script#async) Skripten wird ignoriert und Sie erhalten eine Nachricht wie "Ein Aufruf von `document.write()` in einem asynchron geladenen externen Skript wurde ignoriert" in der Fehlerkonsole.

Nur in Edge, wenn `document.write()` mehr als einmal in einem {{HTMLElement("iframe")}} aufgerufen wird, verursacht dies den Fehler "SCRIPT70: Permission denied".

### Sicherheitsüberlegungen

Die Methode ist ein möglicher Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Zeichenketten, die von einem Benutzer bereitgestellt werden, in das DOM eingefügt werden, ohne vorher bereinigt zu werden.
Während die Methode in einigen Browsern das Ausführen von {{HTMLElement("script")}}-Elementen blockieren kann, wenn sie eingefügt werden (siehe [Eingreifen gegen document.write()](https://developer.chrome.com/blog/removing-document-write/) für Chrome), ist sie anfällig für viele andere Wege, durch die Angreifer HTML gestalten können, um bösartigen JavaScript-Code auszuführen.

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenketten übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe [zu bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute) zu entfernen, bevor es eingefügt wird.

## Beispiele

### Schreiben von TrustedHTML

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Zeichenketten von {{htmlelement("script")}}-Elementen zu bereinigen, bevor sie in ein Dokument geschrieben werden.

Das Beispiel zeigt anfangs einen Standardtext und einen Button.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, drei HTML-Zeichenketten werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umgewandelt und in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTML für den Button und das JavaScript, das das Update vorgenommen hat!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zuerst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)-Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen, und verwenden die [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy)-Methode, um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()`, um die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen, die wir der `write()`-Methode übergeben werden.
Diese Methode kann mit der Eingabezeichenkette alles machen, was sie möchte: die Trusted Types API erfordert nur, dass Sie die Eingabe durch eine Richtlinien-Transformationsfunktion leiten, nicht dass die Transformationsfunktion etwas Bestimmtes tut.

Sie würden die Methode verwenden, um die Eingabe [zu bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), indem Sie potenziell unsichere Features wie {{htmlelement("script")}}-Tags oder Event-Handler-Attribute entfernen.
Die Bereinigung ist schwer richtig zu machen, daher verwendet dieser Prozess typischerweise eine renommierte Drittanbieter-Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).

Zum Zwecke der Demonstration implementieren wir hier einen rudimentären "Sanitizer", der `<`-Symbole in öffnenden und schließenden Skript-Tags durch das `&lt;`-Zeichen ersetzt.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Wir können dann die [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Methode auf der zurückgegebenen Richtlinie nutzen, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte aus unseren ursprünglichen Eingabezeichenketten zu erstellen.
Diese werden dann der `write()`-Funktion übergeben, wenn der Benutzer den Button klickt.

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

Drücken Sie den Button und bemerken Sie, dass die HTML-Elemente, denen wir (in diesem Beispiel) vertrauen, injiziert werden, aber das nicht vertrauenswürdige {{htmlelement("script")}}-Element wird nun als normaler Text angezeigt.

{{EmbedLiveSample("Writing TrustedHTML")}}

### Schreiben von Zeichenketten

Dies ist dasselbe wie das vorherige Beispiel, außer dass keine vertrauenswürdigen Typen verwendet oder durchgesetzt werden.
Wir schreiben unsanitisierte Zeichenketten, die einen Pfad für [XSS-Angriffe](/de/docs/Web/Security/Attacks/XSS) bieten können.

Das Beispiel zeigt anfangs einen Standardtext und einen Button.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, drei HTML-Zeichenketten werden in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTML für den Button und das JavaScript, das das Update vorgenommen hat.

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

Drücken Sie den Button und bemerken Sie, dass alle HTML-Elemente injiziert werden.
Dies schließt das {{htmlelement("script")}}-Element ein, das in einer realen Anwendung möglicherweise schädlichen Code ausgeführt hätte.

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
- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
