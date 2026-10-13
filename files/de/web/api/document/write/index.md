---
title: "Dokument: write()-Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{ApiRef("DOM")}}

> [!WARNING]
> Von der Verwendung der Methode `document.write()` wird dringend abgeraten.
> Vermeiden Sie ihre Verwendung und ersetzen Sie sie nach Möglichkeit auch in vorhandenem Code.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode verhält sich sehr eigenwillig.
> > In manchen Fällen kann sie den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) während der Ausführung beeinflussen. Dadurch kann ein DOM entstehen, das nicht dem Quelldokument entspricht (etwa wenn die geschriebene Zeichenfolge „`<plaintext>`“ oder „`<!--`“ lautet).
> > In anderen Fällen kann der Aufruf zunächst die aktuelle Seite leeren, als wäre [`document.open()`](/de/docs/Web/API/Document/open) aufgerufen worden.
> > In wieder anderen Fällen wird die Methode einfach ignoriert oder löst eine Ausnahme aus. User Agents ist es [ausdrücklich erlaubt, die Ausführung von `script`-Elementen zu verhindern, die mit dieser Methode eingefügt wurden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention).
> > Erschwerend kommt hinzu, dass das genaue Verhalten dieser Methode in manchen Fällen von der Netzwerklatenz abhängen kann. Das kann zu Fehlern führen, die sich nur schwer debuggen lassen.
> > Aus all diesen Gründen wird von der Verwendung dieser Methode dringend abgeraten.

> [!WARNING]
> Diese Methode interpretiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet. Wenn die Eingabe ursprünglich von einem Angreifer stammt, können sie einen Angriffspunkt für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie stets `TrustedHTML`-Objekte statt Zeichenfolgen übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Methode **`write()`** des [`Document`](/de/docs/Web/API/Document)-Interfaces schreibt Text aus einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekten oder Zeichenfolgen in einen Dokumentstream, der mit [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde.

## Syntax

```js-nolint
write(markup)
write(markup, markup2)
write(markup, markup2, /* …, */ markupN)
```

### Parameter

- `markup`, …, `markupN`
  - : [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte oder Zeichenfolgen mit dem Markup, das in das Dokument geschrieben werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde für ein XML-Dokument aufgerufen oder während der Parser gerade den Konstruktor eines Custom Elements ausführt.
- {{jsxref("TypeError")}}
  - : Eine Zeichenfolge wird als Parameter übergeben, während [Trusted Types erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy), um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen.

## Beschreibung

`document.write()` verarbeitet den Markup-Text in den übergebenen Objekten in der Reihenfolge der Parameter und fügt ihn in das Objektmodell (DOM) des geöffneten Dokuments ein.

Da `document.write()` in den Dokument**stream** schreibt, führt ein Aufruf von `document.write()` für ein geschlossenes (geladenes) Dokument automatisch [`document.open()`](/de/docs/Web/API/Document/open) aus, sofern Sie [`document.open()`](/de/docs/Web/API/Document/open) nicht zuvor selbst aufgerufen haben. Dadurch wird das Dokument geleert.

Eine Ausnahme gilt, wenn der Aufruf von `document.write()` in einem Inline-HTML-`<script>`-Tag steht: In diesem Fall wird `document.open()` nicht automatisch aufgerufen.

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` (und [`document.writeln`](/de/docs/Web/API/Document/writeln)) kann nicht mit XML oder XHTML verwendet werden. Ein entsprechender Versuch löst eine `InvalidStateError`-Ausnahme aus.
Das gilt beim Öffnen einer lokalen Datei mit der Dateiendung .xhtml sowie für jedes Dokument, das mit dem MIME-Typ `application/xhtml+xml` ausgeliefert wird.
Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

Aufrufe von `document.write()` in [verzögert geladenen](/de/docs/Web/HTML/Reference/Elements/script#defer) oder [asynchronen](/de/docs/Web/HTML/Reference/Elements/script#async) Skripten werden ignoriert. In der Fehlerkonsole erscheint dann eine Meldung wie „A call to `document.write()` from an asynchronously-loaded external script was ignored“.

Nur in Edge führt ein mehrfacher Aufruf von `document.write()` innerhalb eines {{HTMLElement("iframe")}} zum Fehler „SCRIPT70: Permission denied“.

### Sicherheitsaspekte

Die Methode kann einen Angriffspunkt für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen, wenn potenziell unsichere, von Benutzern bereitgestellte Zeichenfolgen ohne vorherige Bereinigung in das DOM eingefügt werden.
Auch wenn die Methode in manchen Browsern möglicherweise verhindert, dass eingefügte {{HTMLElement("script")}}-Elemente ausgeführt werden (siehe [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/) für Chrome), gibt es viele andere Möglichkeiten, HTML so zu gestalten, dass schädliches JavaScript ausgeführt wird.

Sie können diese Risiken verringern, indem Sie stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Zeichenfolgen übergeben und [Trusted Types](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) erzwingen.
So wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die sie [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) und potenziell gefährliches Markup (etwa {{htmlelement("script")}}-Elemente und Event-Handler-Attribute) entfernen kann, bevor sie eingefügt wird.

## Beispiele

### TrustedHTML schreiben

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um {{htmlelement("script")}}-Elemente aus HTML-Zeichenfolgen zu entfernen, bevor diese in ein Dokument geschrieben werden.

Zunächst zeigt das Beispiel einen Standardtext und eine Schaltfläche an.
Wenn Sie auf die Schaltfläche klicken, wird das aktuelle Dokument geöffnet. Drei HTML-Zeichenfolgen werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umgewandelt und in das Dokument geschrieben. Anschließend wird das Dokument geschlossen.
Dadurch wird das Dokument im Beispiel-Frame ersetzt – einschließlich des ursprünglichen HTML für die Schaltfläche und des JavaScripts, das die Aktualisierung ausgelöst hat!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zuerst greifen wir über die Eigenschaft [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zu. Mit ihrer Methode [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) definieren wir eine Richtlinie namens `"docPolicy"`.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()`, mit der die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte erstellt werden, die wir an die Methode `write()` übergeben.
Diese Methode kann die Eingabezeichenfolge beliebig verarbeiten: Die Trusted Types API verlangt lediglich, dass die Eingabe eine Transformationsfunktion einer Richtlinie durchläuft – nicht, dass diese Funktion eine bestimmte Verarbeitung vornimmt.

Sie würden die Methode verwenden, um die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), indem Sie potenziell unsichere Bestandteile wie {{htmlelement("script")}}-Tags oder Event-Handler-Attribute entfernen.
Eine solche Bereinigung korrekt umzusetzen ist schwierig. Deshalb wird dafür üblicherweise eine bewährte Bibliothek eines Drittanbieters wie [DOMPurify](https://github.com/cure53/DOMPurify) verwendet.

Zu Demonstrationszwecken implementieren wir hier einen einfachen „Sanitizer“, der `<`-Zeichen in öffnenden und schließenden Script-Tags durch `&lt;` ersetzt.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Anschließend können wir mit der Methode [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) der zurückgegebenen Richtlinie aus unseren ursprünglichen Eingabezeichenfolgen [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte erstellen.
Diese werden an die Funktion `write()` übergeben, wenn Sie auf die Schaltfläche klicken.

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

Klicken Sie auf die Schaltfläche. Sie sehen, dass die HTML-Elemente, denen wir (in diesem Beispiel) vertrauen, eingefügt werden. Das nicht vertrauenswürdige {{htmlelement("script")}}-Element wird dagegen als einfacher Text dargestellt.

{{EmbedLiveSample("Writing TrustedHTML")}}

### Zeichenfolgen schreiben

Dieses Beispiel entspricht dem vorherigen, allerdings werden Trusted Types weder verwendet noch erzwungen.
Wir schreiben unbereinigte Zeichenfolgen, die einen Weg für [XSS-Angriffe](/de/docs/Web/Security/Attacks/XSS) eröffnen können.

Zunächst zeigt das Beispiel einen Standardtext und eine Schaltfläche an.
Wenn Sie auf die Schaltfläche klicken, wird das aktuelle Dokument geöffnet. Drei HTML-Zeichenfolgen werden in das Dokument geschrieben. Anschließend wird das Dokument geschlossen.
Dadurch wird das Dokument im Beispiel-Frame ersetzt – einschließlich des ursprünglichen HTML für die Schaltfläche und des JavaScripts, das die Aktualisierung ausgelöst hat.

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

Klicken Sie auf die Schaltfläche. Sie sehen, dass alle HTML-Elemente eingefügt werden.
Dazu gehört auch das {{htmlelement("script")}}-Element, das in einer realen Anwendung möglicherweise schädlichen Code ausgeführt hätte.

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
