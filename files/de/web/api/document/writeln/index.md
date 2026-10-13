---
title: "Dokument: writeln()-Methode"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{ ApiRef("DOM") }}

> [!WARNING]
> Diese Methode verarbeitet ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet. Wenn die Eingabe ursprünglich von einem Angreifer stammt, können sie für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) genutzt werden.
>
> Sie können dieses Risiko verringern, indem Sie immer `TrustedHTML`-Objekte statt Zeichenfolgen übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Methode **`writeln()`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) schreibt Text aus einem oder mehreren Parametern vom Typ [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder aus Zeichenfolgen in einen von [`document.open()`](/de/docs/Web/API/Document/open) geöffneten Dokumentstrom. Anschließend schreibt sie einen Zeilenumbruch.

## Syntax

```js-nolint
writeln(markup)
writeln(markup, markup2)
writeln(markup, markup2, /* …, */ markupN)
```

### Parameter

- `markup`, …, `markupN`
  - : [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte oder Zeichenfolgen, die den in das Dokument zu schreibenden Text enthalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde für ein XML-Dokument aufgerufen oder während der Parser gerade den Konstruktor eines benutzerdefinierten Elements ausführt.
- {{jsxref("TypeError")}}
  - : Einer der Parameter ist eine Zeichenfolge, obwohl [Trusted Types erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und [keine Standardrichtlinie definiert wurde](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy), um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen.

## Beschreibung

Die Methode entspricht im Wesentlichen [`document.write()`](/de/docs/Web/API/Document/write), fügt jedoch einen Zeilenumbruch hinzu. Die Informationen auf der verlinkten Seite gelten auch für diese Methode.
Dieser Zeilenumbruch ist nur sichtbar, wenn er innerhalb eines Elements eingefügt wird, das Zeilenumbrüche darstellt.
Auch die zusätzlichen Informationen zu [`document.write()`](/de/docs/Web/API/Document/write) gelten für diese Methode.

### Sicherheitsaspekte

Die Methode kann für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) genutzt werden, wenn potenziell unsichere Zeichenfolgen von Benutzern ohne vorherige Bereinigung in das DOM eingefügt werden.
Zwar verhindert die Methode in manchen Browsern möglicherweise die Ausführung eingefügter {{HTMLElement("script")}}-Elemente (siehe [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/) für Chrome), doch Angreifer können HTML auf viele andere Arten so gestalten, dass schädliches JavaScript ausgeführt wird.

Sie können diese Risiken verringern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Zeichenfolgen übergeben und mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft. Diese kann die Eingabe [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) und potenziell gefährliches Markup (etwa {{htmlelement("script")}}-Elemente und Event-Handler-Attribute) entfernen, bevor es eingefügt wird.

## Beispiele

### TrustedHTML schreiben

Dieses Beispiel verwendet die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API), um HTML-Zeichenfolgen zu bereinigen, bevor sie in ein Dokument geschrieben werden.
Wenn Sie nicht vertrauenswürdige Zeichenfolgen an unsichere APIs übergeben, sollten Sie immer Trusted Types verwenden.

Das Beispiel zeigt zunächst einen Standardtext und eine Schaltfläche an.
Wenn auf die Schaltfläche geklickt wird, wird das aktuelle Dokument geöffnet. Einige HTML-Zeichenfolgen werden in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umgewandelt und in das Dokument geschrieben. Anschließend wird das Dokument geschlossen.
Dadurch wird das Dokument im Beispiel-Frame ersetzt – einschließlich des ursprünglichen HTML-Codes für die Schaltfläche und des JavaScript-Codes, der die Aktualisierung ausgelöst hat!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

Zunächst greifen wir über die Eigenschaft [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes) auf die globale [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zu und definieren mit ihrer Methode [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) eine Richtlinie namens `"docPolicy"`.

Die neue Richtlinie definiert eine Transformationsfunktion `createHTML()`, mit der wir die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte erstellen, die wir an die Methode `writeln()` übergeben.
Diese Funktion kann die Eingabezeichenfolge beliebig verarbeiten: Die Trusted Types API verlangt lediglich, dass die Eingabe eine Transformationsfunktion einer Richtlinie durchläuft, nicht aber, dass diese etwas Bestimmtes tut.

In der Praxis würden Sie die Funktion verwenden, um die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), indem Sie potenziell unsichere Bestandteile wie {{htmlelement("script")}}-Tags oder Event-Handler-Attribute entfernen.
Eine korrekte Bereinigung ist schwierig. Daher wird dafür üblicherweise eine bewährte Bibliothek eines Drittanbieters wie [DOMPurify](https://github.com/cure53/DOMPurify) verwendet.

Hier implementieren wir einen einfachen „Sanitizer“, der `<`-Zeichen in öffnenden und schließenden Script-Tags durch die Zeichenfolge `&lt;` ersetzt.
Die in diesem Beispiel eingefügten Zeichenfolgen enthalten keine schädlichen Elemente; dies dient lediglich der Veranschaulichung.

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
Diese werden an die Funktion `writeln()` übergeben, wenn der Benutzer auf die Schaltfläche klickt.

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

#### Ergebnis

Klicken Sie auf die Schaltfläche.
Beachten Sie, dass nach jedem Aufruf von `writeln()` ein Zeilenumbruch eingefügt wird. Dieser ist jedoch nur innerhalb des {{htmlelement("pre")}}-Elements sichtbar, da dessen Darstellung standardmäßig Leerraum beibehält.

{{EmbedLiveSample("Writing TrustedHTML")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
