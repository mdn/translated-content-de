---
title: "Dokument: write()-Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: d977ef780f770ddb5359b8fecf733e786f5faadf
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Die Verwendung der `document.write()`-Methode wird dringend abgeraten.
> Vermeiden Sie es, sie zu verwenden, und ersetzen Sie sie, wenn möglich, im bestehenden Code.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat ein sehr eigenwilliges Verhalten.
> > In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während der Parser läuft, was zu einem DOM führen kann, das nicht mit der Quelldatei des Dokuments übereinstimmt (z. B. wenn der geschriebene String "`<plaintext>`" oder "`<!--`" ist).
> > In anderen Fällen kann der Aufruf zuerst die aktuelle Seite löschen, als ob [`document.open()`](/de/docs/Web/API/Document/open) aufgerufen worden wäre.
> > In weiteren Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Benutzeragenten sind [explizit berechtigt, das Ausführen von `script`-Elementen zu vermeiden, die über diese Methode eingefügt werden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention).
> > Noch schlimmer ist, dass das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerkverzögerung abhängig sein kann, was zu Fehlern führen kann, die sehr schwer zu debuggen sind.
> > Aus all diesen Gründen wird die Verwendung dieser Methode dringend abgeraten.

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese sind bekannt als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings übergeben und [trusted types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`write()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder String-Parametern in einen von [`document.open()`](/de/docs/Web/API/Document/open) geöffneten Dokument-Stream.

## Syntax

```js-nolint
write(markup)
write(markup, markup2)
write(markup, markup2, /* …, */ markupN)
```

### Parameter

- `markup`, …, `markupN`
  - : [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte oder Strings, die das Markup enthalten, das in das Dokument geschrieben werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde auf ein XML-Dokument aufgerufen oder während der Parser derzeit einen benutzerdefinierten Elementkonstruktor ausführt.
- `TypeError`
  - : Ein String wird als einer der Parameter übergeben, wenn [Trusted Types erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy) zur Erstellung von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekten.

## Beschreibung

`document.write()` analysiert den Markup-Text in den als Parameter übergebenen Objekten in das offene Dokument-Objektmodell (DOM), in der Reihenfolge, in der die Parameter angegeben sind.

Da `document.write()` in den Dokument-**Stream** schreibt, ruft ein Aufruf von `document.write()` für ein geschlossenes (geladenes) Dokument (ohne vorher [`document.open()`](/de/docs/Web/API/Document/open) aufzurufen) automatisch [`document.open()`](/de/docs/Web/API/Document/open) auf, was das Dokument löschen wird.

Die Ausnahme besteht darin, dass wenn der `document.write()`-Aufruf innerhalb eines eingebetteten HTML-`<script>`-Tags stattfindet, dann wird es nicht automatisch `document.open()` aufrufen:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` (und [`document.writeln`](/de/docs/Web/API/Document/writeln)) kann nicht mit XML oder XHTML verwendet werden, und der Versuch, dies zu tun, wird eine `InvalidStateError`-Ausnahme auslösen.
Dies ist der Fall, wenn eine lokale Datei mit einer .xhtml-Dateierweiterung geöffnet wird oder für jedes Dokument, das mit einem `application/xhtml+xml` MIME-Typ bereitgestellt wird.
Weitere Informationen sind in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite) verfügbar.

Die Verwendung von `document.write()` in [verzögerten (deferred)](/de/docs/Web/HTML/Reference/Elements/script#defer) oder [asynchronen](/de/docs/Web/HTML/Reference/Elements/script#async) Skripten wird ignoriert und Sie erhalten eine Meldung wie "Ein Aufruf von `document.write()` von einem asynchron geladenen externen Skript wurde ignoriert" in der Fehlerkonsole.

Nur in Edge führt der mehrfache Aufruf von `document.write()` in einem {{HTMLElement("iframe")}} zu dem Fehler "SCRIPT70: Zugriff verweigert".

### Sicherheitsüberlegungen

Die Methode ist ein möglicher Vektor für [Cross-site-scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, in das DOM injiziert werden, ohne vorher bereinigt zu werden.
Während die Methode {{HTMLElement("script")}}-Elemente in einigen Browsern blockieren kann, die injiziert werden (siehe [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/) für Chrome), ist sie anfällig für viele andere Möglichkeiten, wie Angreifer HTML gestalten können, um bösartigen JavaScript auszuführen.

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings übergeben und [trusted types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{HTMLElement("script")}}-Elemente und Event-Handler-Attribute) zu entfernen, bevor es injiziert wird.

## Beispiele

### Schreiben von TrustedHTML

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Strings von {{HTMLElement("script")}}-Elementen zu bereinigen, bevor sie in ein Dokument geschrieben werden.

Das Beispiel zeigt zunächst einige Standardtexte und einen Button an.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, drei HTML-Strings werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umgewandelt und in das Dokument geschrieben, das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTMLs für den Button und des JavaScripts, das das Update gemacht hat!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zuerst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)-Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen, und verwenden deren [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy)-Methode, um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()` zur Erstellung der [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte, die wir zur `write()`-Methode übergeben werden.
Diese Methode kann mit dem Eingabestring alles machen, was sie möchte: die trusted types-API verlangt nur, dass Sie eine Eingabe durch eine Richtlinsentransformationsfunktion leiten, nicht dass die Transformationsfunktion etwas Besonderes tut.

Sie würden die Methode verwenden, um die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), indem potenziell unsichere Merkmale wie {{HTMLElement("script")}}-Tags oder Event-Handler-Attribute entfernt werden.
Die Bereinigung ist schwer richtig zu machen, daher verwendet dieser Prozess typischerweise eine renommierte Drittanbieterbibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).

Zum Zwecke der Demonstration implementieren wir hier einen rudimentären "Sanitizer", der `<`-Symbole in Öffnungs- und Schließ-`script`-Tags durch das `&lt;`-Zeichen ersetzt.

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

Drücken Sie den Button und beachten Sie, dass die HTML-Elemente, die wir (in diesem Beispiel) vertrauen, injiziert werden, aber das nicht vertrauenswürdige {{HTMLElement("script")}}-Element jetzt als Nur-Text dargestellt wird.

{{EmbedLiveSample("Writing TrustedHTML")}}

### Schreiben von Strings

Dies entspricht dem vorherigen Beispiel, außer dass trusted types nicht verwendet oder erzwungen werden.
Wir schreiben nicht bereinigte Strings, die möglicherweise einen Weg für [XSS-Angriffe](/de/docs/Web/Security/Attacks/XSS) bieten können.

Das Beispiel zeigt zunächst einige Standardtexte und einen Button an.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, drei HTML-Strings werden in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTMLs für den Button und des JavaScripts, das das Update machte.

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
Dies schließt das {{HTMLElement("script")}}-Element mit ein, welches in einer echten Anwendung möglicherweise schädlichen Code hätte ausführen können.

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
