---
title: "Dokument: write() Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Die Verwendung der `document.write()`-Methode wird dringend abgeraten.
> Vermeiden Sie deren Nutzung und ersetzen Sie sie, wenn möglich, im bestehenden Code.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat ein sehr eigenwilliges Verhalten.
> > In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während der Parser läuft, was zu einem DOM führt, das nicht mit der Dokumentenquelle übereinstimmt (z. B. wenn die geschriebene Zeichenkette die Zeichenkette "`<plaintext>`" oder "`<!--`" ist).
> > In anderen Fällen kann der Aufruf die aktuelle Seite zuerst löschen, als ob [`document.open()`](/de/docs/Web/API/Document/open) aufgerufen worden wäre.
> > In weiteren Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Benutzeragenten dürfen [explizit vermeiden, `script`-Elemente auszuführen, die über diese Methode eingefügt wurden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention).
> > Und um die Sache noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerklatenz abhängig sein, was zu Fehlern führen kann, die sehr schwer zu debuggen sind.
> > Aus all diesen Gründen wird die Verwendung dieser Methode dringend abgeraten.

> [!WARNING]
> Diese Methode parst ihre Eingaben als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn die Eingaben ursprünglich von einem Angreifer stammen.
>
> Sie können dieses Risiko mindern, indem Sie stets `TrustedHTML`-Objekte anstelle von Zeichenketten übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`write()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder Zeichenkettenparametern in einen von [`document.open()`](/de/docs/Web/API/Document/open) geöffneten Dokumentenstream.

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
  - : Die Methode wurde bei einem XML-Dokument, oder aufgerufen, als der Parser gerade einen benutzerdefinierten Elementkonstruktor ausführte.
- `TypeError`
  - : Eine Zeichenkette wird als ein Parameter übergeben, wenn [Trusted Types durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy) zum Erstellen von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekten.

## Beschreibung

`document.write()` parst den Markup-Text in den als Parameter übergebenen Objekten in das offene Dokumentobjekt-Modell (DOM), in der Reihenfolge, in der die Parameter angegeben sind.

Da `document.write()` in den Dokumenten**stream** schreibt, ruft ein Aufruf von `document.write()` auf einem geschlossenen (geladenen) Dokument (ohne vorheriges Aufrufen von [`document.open()`](/de/docs/Web/API/Document/open)) automatisch [`document.open()`](/de/docs/Web/API/Document/open) auf, was das Dokument löscht.

Die Ausnahme ist, dass der `document.write()`-Aufruf innerhalb eines Inline-HTML-`<script>`-Tags eingebettet ist, dann wird nicht automatisch `document.open()` aufgerufen:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` (und [`document.writeln`](/de/docs/Web/API/Document/writeln)) kann nicht mit XML oder XHTML verwendet werden, und der Versuch, dies zu tun, löst eine `InvalidStateError`-Ausnahme aus.
Dies ist der Fall, wenn eine lokale Datei mit der Erweiterung .xhtml geöffnet wird oder für jedes Dokument, das mit einem `application/xhtml+xml` MIME-Typ bereitgestellt wird.
Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

Die Verwendung von `document.write()` in [verzögerten](/de/docs/Web/HTML/Reference/Elements/script#defer) oder [asynchronen](/de/docs/Web/HTML/Reference/Elements/script#async) Skripten wird ignoriert und Sie erhalten eine Nachricht wie "Ein Aufruf von `document.write()` aus einem asynchron geladenen externen Skript wurde ignoriert" in der Fehlerkonsole.

Nur in Edge führt das mehrmalige Aufrufen von `document.write()` in einem {{HTMLElement("iframe")}} zu dem Fehler "SCRIPT70: Berechtigung verweigert".

### Sicherheitsüberlegungen

Die Methode kann ein potenzieller Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, bei denen potenziell unsichere von einem Benutzer bereitgestellte Zeichenketten in das DOM eingefügt werden, ohne vorher bereinigt zu werden.
Während die Methode möglicherweise {{HTMLElement("script")}}-Elemente vom Ausführen blockiert, wenn sie in einigen Browsern eingefügt werden (siehe [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/) für Chrome), ist sie anfällig für viele andere Möglichkeiten, wie Angreifer HTML erstellen können, um bösartigen JavaScript-Code auszuführen.

Sie können diese Probleme mindern, indem Sie stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenketten übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive verwenden.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization) und potenziell gefährliches Markup (wie {{htmlelement("script")}}-Elemente und Attribut-Event-Handler) zu entfernen, bevor sie eingefügt wird.

## Beispiele

### Schreiben von TrustedHTML

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Zeichenketten von {{htmlelement("script")}}-Elementen zu bereinigen, bevor sie in ein Dokument geschrieben werden.

Das Beispiel zeigt zunächst einige Standardtexte und einen Button.
Wenn der Button angeklickt wird, wird das aktuelle Dokument geöffnet, drei Zeichenketten von HTML werden zu [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen konvertiert und in das Dokument geschrieben, das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispiel-Frame, einschließlich des ursprünglichen HTML für den Button und des JavaScripts, das das Update durchgeführt hat!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zunächst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)-Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen und nutzen deren [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy)-Methode, um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()` zum Erstellen der [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte, die wir an die `write()`-Methode übergeben werden.
Diese Methode kann mit der Eingabezeichenkette alles tun, was sie will: Die Trusted Types API fordert nur, dass Sie die Eingabe durch eine Richtlinientransformationsfunktion weitergeben, nicht, dass die Transformationsfunktion irgendetwas Bestimmtes tut.

Man würde die Methode verwenden, um die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), indem potenziell unsichere Features wie {{htmlelement("script")}}-Tags oder Attribut-Ereignishandler entfernt werden.
Die Bereinigung ist schwer richtig zu machen, daher verwendet dieser Prozess typischerweise eine angesehene Drittanbieter-Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).

Für Demonstrationszwecke implementieren wir hier einen rudimentären "Sanitizer", der `<`-Symbole in öffnenden und schließenden Script-Tags durch das `&lt;`-Zeichen ersetzt.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Wir können dann die [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Methode auf der zurückgegebenen Richtlinie verwenden, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte aus unseren ursprünglichen Eingabezeichenketten zu erstellen. Diese werden dann an die `write()`-Funktion übergeben, wenn der Benutzer den Button klickt.

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

Drücken Sie den Button und beachten Sie, dass die HTML-Elemente, denen wir vertrauen (in diesem Beispiel), injiziert werden, aber das nicht vertrauenswürdige {{htmlelement("script")}}-Element nun als reiner Text gerendert wird.

{{EmbedLiveSample("Writing TrustedHTML")}}

### Schreiben von Zeichenketten

Dies ist dasselbe wie das vorherige Beispiel, allerdings werden keine Trusted Types genutzt oder erzwungen.
Wir schreiben nicht bereinigte Zeichenketten, was einen Weg für [XSS-Angriffe](/de/docs/Web/Security/Attacks/XSS) bieten könnte.

Das Beispiel zeigt zunächst einige Standardtexte und einen Button.
Wenn der Button angeklickt wird, wird das aktuelle Dokument geöffnet, drei Zeichenketten von HTML werden in das Dokument geschrieben und das Dokument wird dann geschlossen.
Dies ersetzt das Dokument im Beispiel-Frame, einschließlich des ursprünglichen HTML für den Button und des JavaScripts, das das Update durchgeführt hat.

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
- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
