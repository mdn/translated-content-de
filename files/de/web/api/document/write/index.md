---
title: "Dokument: write() Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("DOM")}}

> [!WARNING]
> Die Verwendung der `document.write()` Methode wird dringend abgeraten.
> Vermeiden Sie die Nutzung und ersetzen Sie sie, wo möglich, in bestehendem Code.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat ein sehr eigenwilliges Verhalten.
> > In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während der Parser läuft, was zu einem DOM führen kann, das nicht der Quelle des Dokuments entspricht (z. B., wenn der geschriebene String der String "`<plaintext>`" oder "`<!--`" ist).
> > In anderen Fällen kann der Aufruf die aktuelle Seite zuerst löschen, als ob [`document.open()`](/de/docs/Web/API/Document/open) aufgerufen wurde.
> > In weiteren Fällen wird die Methode einfach ignoriert oder eine Ausnahme ausgelöst. Benutzeragenten dürfen [explizit vermeiden `script`-Elemente auszuführen, die über diese Methode eingefügt werden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention).
> > Und um alles noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerklatenz abhängen, was zu Fehlern führen kann, die sehr schwer zu debuggen sind.
> > Aus all diesen Gründen wird die Verwendung dieser Methode stark abgeraten.

> [!WARNING]
> Diese Methode analysiert ihren Eingabewert als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, falls der Input ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`write()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder String-Parametern in einen Dokumentenstrom, der mit [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde.

## Syntax

```js-nolint
write(markup)
write(markup, markup2)
write(markup, markup2, /* …, */ markupN)
```

### Parameter

- `markup`, …, `markupN`
  - : [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte oder Strings, die das Markup enthalten, das in das Dokument geschrieben werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde auf ein XML-Dokument aufgerufen oder während der Parser aktuell einen benutzerdefinierten Elementkonstruktor ausführt.
- `TypeError`
  - : Ein String wird als einer der Parameter übergeben, wenn [Trusted Types durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy) zur Erstellung von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekten.

## Beschreibung

`document.write()` analysiert den Markup-Text in den als Parameter übergebenen Objekten in das Objektmodell (DOM) des geöffneten Dokuments und zwar in der Reihenfolge, in der die Parameter angegeben sind.

Da `document.write()` in den **Stream** des Dokuments schreibt, ruft das Aufrufen von `document.write()` auf einem geschlossenen (geladenen) Dokument (ohne zuvor [`document.open()`](/de/docs/Web/API/Document/open) aufzurufen) automatisch [`document.open()`](/de/docs/Web/API/Document/open) auf, was das Dokument löscht.

Die Ausnahme besteht darin, dass, wenn sich der `document.write()` Aufruf innerhalb eines inline HTML `<script>` Tags befindet, `document.open()` nicht automatisch aufgerufen wird:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` (und [`document.writeln`](/de/docs/Web/API/Document/writeln)) kann nicht mit XML oder XHTML verwendet werden und der Versuch, dies zu tun, wird eine `InvalidStateError` Ausnahme auslösen.
Dies ist der Fall, wenn eine lokale Datei mit einer .xhtml-Dateierweiterung geöffnet wird oder für jedes Dokument, das mit einem `application/xhtml+xml` MIME-Typ geliefert wird.
Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

Die Verwendung von `document.write()` in [verzögerten](/de/docs/Web/HTML/Reference/Elements/script#defer) oder [asynchronen](/de/docs/Web/HTML/Reference/Elements/script#async) Skripten wird ignoriert, und Sie erhalten eine Meldung wie "Ein Aufruf von `document.write()` aus einem asynchron geladenen externen Skript wurde ignoriert" in der Fehlerkonsole.

Nur in Edge verursacht das wiederholte Aufrufen von `document.write()` in einem {{HTMLElement("iframe")}} den Fehler "SCRIPT70: Permission denied".

### Sicherheitsüberlegungen

Die Methode ist ein potenzieller Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, in das DOM injiziert werden, ohne zuvor bereinigt zu werden.
Während die Methode möglicherweise {{HTMLElement("script")}} Elemente davon abhalten kann auszuführen, wenn sie in einigen Browsern injiziert werden (siehe [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/) für Chrome), ist sie anfällig für viele andere Möglichkeiten, mit denen Angreifer HTML erstellen können, um bösartigen JavaScript auszuführen.

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion übergeben wird, die die Chance hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}} Elemente und Event-Handler-Attribute) zu entfernen, bevor es injiziert wird.

## Beispiele

### Schreiben von TrustedHTML

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Strings von {{htmlelement("script")}} Elementen zu bereinigen, bevor sie in ein Dokument geschrieben werden.

Das Beispiel zeigt zunächst einen Standardtext und einen Button.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, drei Strings von HTML werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen umgewandelt und in das Dokument geschrieben, das anschließend geschlossen wird.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTML für den Button und des JavaScripts, das die Aktualisierung durchführte!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zuerst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen, und verwenden deren [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) Methode, um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()`, um die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte zu erstellen, die wir an die `write()` Methode übergeben werden.
Diese Methode kann mit dem Eingabestring tun, was sie möchte: Die Trusted Types API erfordert nur, dass Sie die Eingabe durch eine Richtlinien-Transformationsfunktion durchlaufen, nicht dass die Transformationsfunktion etwas Bestimmtes tut.

Sie würden die Methode nutzen, um die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), indem potenziell unsichere Funktionen wie {{htmlelement("script")}} Tags oder Event-Handler-Attribute entfernt werden.
Die Bereinigung ist schwer richtig zu machen, daher wird dieser Prozess typischerweise mit einer renommierten Drittanbieter-Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify) durchgeführt.

Zu Demonstrationszwecken implementieren wir hier ein rudimentäres "Reinigungsmittel", das `<` Symbole in Skript öffnen und schließen Tags durch das `&lt;` Zeichen ersetzt.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Wir können dann die [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) Methode auf der zurückgegebenen Richtlinie verwenden, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte aus unseren ursprünglichen Eingabestrings zu erstellen.
Diese werden dann an die `write()` Funktion übergeben, wenn der Benutzer den Button klickt.

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

Drücken Sie den Button und beachten Sie, dass die HTML-Elemente, die wir vertrauen (in diesem Beispiel) injiziert werden, aber das nicht vertrauenswürdige {{htmlelement("script")}} Element jetzt als Klartext angezeigt wird.

{{EmbedLiveSample("Writing TrustedHTML")}}

### Schreiben von Strings

Dies ist dasselbe wie das vorherige Beispiel, außer dass Trusted Types nicht verwendet oder durchgesetzt werden.
Wir schreiben nicht bereinigte Strings, die möglicherweise einen Pfad für [XSS-Angriffe](/de/docs/Web/Security/Attacks/XSS) bieten können.

Das Beispiel zeigt zunächst einen Standardtext und einen Button.
Wenn der Button geklickt wird, wird das aktuelle Dokument geöffnet, drei Strings von HTML werden in das Dokument geschrieben, und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispielrahmen, einschließlich des ursprünglichen HTML für den Button und des JavaScripts, das die Aktualisierung durchführte.

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

Drücken Sie den Button und achten Sie darauf, dass alle HTML-Elemente injiziert werden.
Dies schließt das {{htmlelement("script")}} Element ein, das in einer echten Anwendung möglicherweise schädlichen Code ausgeführt hätte.

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
