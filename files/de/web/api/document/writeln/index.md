---
title: "Dokument: writeln()-Methode"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{ ApiRef("DOM") }}{{deprecated_header}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind bekannt als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können eine potenzielle Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe darstellen, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Zeichenfolgen übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`writeln()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle schreibt Text in einem oder mehreren [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder Zeichenfolgen-Parametern in einen durch [`document.open()`](/de/docs/Web/API/Document/open) geöffneten Dokumentenstrom, gefolgt von einem Zeilenumbruchszeichen.

## Syntax

```js-nolint
writeln(markup)
writeln(markup, markup2)
writeln(markup, markup2, /* …, */ markupN)
```

### Parameter

- `markup`, …, `markupN`
  - : [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder Zeichenfolgen-Objekte, die den Text enthalten, der in das Dokument geschrieben werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde für ein XML-Dokument aufgerufen oder während der Parser derzeit einen benutzerdefinierten Elementkonstruktor ausführt.
- `TypeError`
  - : Eine Zeichenfolge wurde als einer der Parameter übergeben, wenn [vertrauenswürdige Typen erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy) zum Erstellen von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekten.

## Beschreibung

Die Methode ist im Wesentlichen die gleiche wie [`document.write()`](/de/docs/Web/API/Document/write), fügt jedoch eine neue Zeile hinzu (Informationen im verlinkten Thema gelten auch für diese Methode).
Diese neue Zeile wird nur sichtbar sein, wenn sie in ein Element eingefügt wird, in dem Zeilenumbrüche angezeigt werden.
Die zusätzlichen Informationen in [`document.write()`](/de/docs/Web/API/Document/write) gelten auch für diese Methode.

### Sicherheitsüberlegungen

Die Methode ist eine mögliche Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Zeichenfolgen, die von einem Benutzer bereitgestellt werden, ohne vorherige Bereinigung in das DOM injiziert werden.
Obwohl die Methode möglicherweise {{HTMLElement("script")}}-Elemente von der Ausführung blockieren kann, wenn sie in einigen Browsern injiziert werden (siehe [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/) für Chrome), ist sie anfällig für viele andere Möglichkeiten, HTML zu gestalten, um bösartiges JavaScript auszuführen.

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenfolgen übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive verwenden.
Dies gewährleistet, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markup-Elemente (wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute) zu entfernen, bevor sie injiziert werden.

## Beispiele

### Schreiben von TrustedHTML

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Zeichenfolgen zu bereinigen, bevor sie in ein Dokument geschrieben werden.
Sie sollten immer vertrauenswürdige Typen verwenden, um unzuverlässige Zeichenfolgen an unsichere APIs zu übergeben.

Das Beispiel zeigt zunächst einen Standardtext und einen Knopf an.
Wenn der Knopf geklickt wird, wird das aktuelle Dokument geöffnet, einige Zeichenfolgen von HTML werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umgewandelt und in das Dokument geschrieben, das dann geschlossen wird.
Dadurch wird das Dokument im Beispielrahmen ersetzt, einschließlich des ursprünglichen HTML für den Knopf und des JavaScript, das die Aktualisierung vorgenommen hat!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zunächst verwenden wir die [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)-Eigenschaft, um auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zuzugreifen, und verwenden deren [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy)-Methode, um eine Richtlinie namens `"docPolicy"` zu definieren.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()` zum Erstellen der [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte, die wir an die `writeln()`-Methode übergeben werden.
Diese Methode kann mit der Eingabezeichenfolge alles machen, was sie möchte: die Trusted Types API erfordert nur, dass Sie die Eingabe durch eine Richtlinien-Transformationsfunktion leiten, nicht, dass die Transformationsfunktion etwas Bestimmtes tut.

Sie würden die Methode verwenden, um die Eingabe durch Entfernen potenziell unsicherer Merkmale wie {{htmlelement("script")}}-Tags oder Event-Handler-Attribute zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization).
Bereinigung ist schwer richtig umzusetzen, daher wird dieser Prozess typischerweise mit einer renommierten Drittanbieter-Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify) durchgeführt.

Hier implementieren wir einen rudimentären "Sanitizer", der `<`-Symbole in skriptöffnenden und -schließenden Tags durch das `&lt;`-Zeichen ersetzt.
Die eingefügten Zeichenfolgen in diesem Beispiel enthalten eigentlich keine schädlichen Elemente, daher ist dies rein zur Demonstration.

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
Diese werden dann der `writeln()`-Funktion übergeben, wenn der Benutzer den Knopf klickt.

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

Klicken Sie auf den Knopf.
Beachten Sie, dass nach jedem Aufruf von `writeln()` eine neue Zeile hinzugefügt wird, diese aber nur innerhalb des {{htmlelement("pre")}}-Elements sichtbar ist, da dessen Layout standardmäßig Leerzeichen beibehält.

{{EmbedLiveSample("Writing TrustedHTML")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
