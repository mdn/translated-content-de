---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: baec726bf3fe1bd82cf22a0f8ba9523e0f7ccd80
---

{{DefaultAPISidebar("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **HTML-Sanitizer-API** ermöglicht es Entwicklern, HTML-Strings zu filtern, um unerwünschte Elemente, Attribute und andere HTML-Entitäten zu entfernen, wenn sie in das DOM oder ein Shadow DOM eingefügt werden.

## Konzepte und Verwendung

Webanwendungen müssen häufig mit unzuverlässigem HTML auf der Clientseite arbeiten, beispielsweise als Teil einer clientseitigen Templating-Lösung, beim Rendern benutzergenerierter Inhalte oder bei der Einbindung von Daten in einem Frame von einer anderen Seite.

Das Injizieren von unzuverlässigem HTML kann eine Seite anfällig für verschiedene [Angriffsarten](/de/docs/Web/Security/Attacks) machen.
Insbesondere [Cross-Site-Scripting (XSS)-Angriffe](/de/docs/Web/Security/Attacks/XSS) arbeiten dadurch, dass sie unzuverlässiges HTML in das DOM injizieren, das dann JavaScript im Kontext des aktuellen Ursprungs ausführt – was bösartigem Code ermöglicht, so zu laufen, als wäre er vom Ursprung der Seite bereitgestellt worden.
Diese Angriffe können abgemildert werden, indem unsichere HTML-Elemente und -Attribute entfernt werden, bevor sie in das DOM injiziert werden.

Die HTML-Sanitizer-API bietet eine Reihe von Methoden zum Entfernen unerwünschter HTML-Entitäten aus HTML-Eingaben, bevor sie in das DOM injiziert werden.
Diese gibt es in XSS-sicheren Versionen, die die Entfernung aller unsicheren Elemente und Attribute erzwingen, und potenziell unsicheren Versionen, die Entwicklern die vollständige Kontrolle über die erlaubten HTML-Entitäten geben.

### Sanitizer-Methoden

Die HTML-Sanitizer-API bietet XSS-sichere und XSS-unsichere Methoden zum Integrieren von HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) sowie zum Parsen von HTML in ein [`Document`](/de/docs/Web/API/Document).

- Sichere Methoden: [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Alle Methoden nehmen das zu injizierende HTML und eine optionale [Sanitizer-Konfiguration](#sanitizer-konfiguration) als Argumente.
Die Konfiguration definiert die HTML-Entitäten, die vor der Eingabe gefiltert werden.
Die [`Element`](/de/docs/Web/API/Element)-Methoden sind kontextbewusst und entfernen zusätzlich alle Elemente, die laut HTML-Spezifikation im Ziel-Element nicht erlaubt sind.

Die sicheren Methoden entfernen immer XSS-unsichere Elemente und Attribute.
Wenn kein Sanitizer als Parameter übergeben wird, verwenden sie die Standard-Sanitizer-Konfiguration, die alle Elemente und Attribute erlaubt, außer denen, die als unsicher bekannt sind, wie z.B. {{htmlelement("script")}}-Elemente und `onclick`-Event-Handler.
Wenn ein benutzerdefinierter Sanitizer verwendet wird, wird dieser implizit aktualisiert, um alle nicht XSS-sicheren Elemente und Attribute zu entfernen (beachten Sie, dass der übergebene Sanitizer nicht modifiziert wird und möglicherweise immer noch unsichere Entitäten erlaubt, wenn er mit einer unsicheren Methode verwendet wird).

Die sicheren Methoden sollten anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um unzuverlässige HTML-Inhalte zu injizieren.
Zum Beispiel können Sie in den meisten Fällen `Element.setHTML()` mit dem Standard-Sanitizer als Drop-in-Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.
Die gleichen Methoden können auch verwendet werden, um zuverlässige HTML-Strings zu injizieren, die keine XSS-unsicheren Elemente enthalten müssen.

Die XSS-unsicheren Methoden verwenden die übergebene Sanitizer-Konfiguration als Argument.
Wenn kein Sanitizer übergeben wird, werden alle von der Kontext erlaubten HTML-Elemente und -Attribute injiziert.
Dies ähnelt der Verwendung von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), mit dem Unterschied, dass die Methode Shadow-Roots parst, Elemente entfernt, die im Kontext nicht geeignet sind, und einige andere Eingaben erlaubt, die bei der Verwendung der Eigenschaft nicht erlaubt sind.

Die unsicheren Methoden sollten nur mit unzuverlässigem HTML verwendet werden, das einige XSS-unsichere Elemente oder Attribute enthalten muss.
Dies ist immer noch unsicher, erlaubt es Ihnen jedoch, das Risiko zu reduzieren, indem Sie unsichere Entitäten auf das minimale Set beschränken.
Wenn Sie beispielsweise unsicheres HTML injizieren möchten, aber aus irgendeinem Grund der Eingang den `onblur`-Handler enthalten muss, könnten Sie dies sicherer tun, indem Sie den Standard-Sanitizer anpassen und eine unsichere Methode verwenden, wie gezeigt:

```js
const sanitizer1 = Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });
```

### Sanitizer-Konfiguration

Eine Sanitizer-Konfiguration definiert, welche HTML-Entitäten erlaubt, ersetzt oder entfernt werden, wenn der Sanitizer verwendet wird, einschließlich Elemente, Attribute, Datenattribute und Kommentare.

Es gibt zwei sehr eng verwandte Sanitizer-Konfigurationsschnittstellen, von denen jede an alle Sanitizer-Methoden übergeben werden kann.

- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist ein Wörterbuch-Objekt, das Arrays von erlaubten oder nicht erlaubten Elementen oder Attributen definiert, Eigenschaften angibt, ob Kommentare und Datenattribute erlaubt oder weggelassen werden sollen, und so weiter.
- [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die Methoden bereitstellt, um Entitäten ergonomisch und konsistent aus den verschiedenen Listen in der Konfiguration hinzuzufügen und zu entfernen.
  Beispielsweise können Sie eine Methode verwenden, um ein erlaubtes Attribut hinzuzufügen, und es wird auch das Attribut aus dem nicht erlaubten Array (falls vorhanden) entfernen.
  Die Schnittstelle bietet auch Methoden, um eine Kopie der zugrunde liegenden [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurückzugeben und um den Sanitizer zu aktualisieren, sodass er XSS-sicher ist.
  Sie kann Normalisierungen der Sanitizer-Konfiguration anbieten, die verwendet wurde, um sie zu konstruieren, was es einfacher macht, sie zu verstehen und wiederzuverwenden.

Während Sie jede der Schnittstellen in allen Sanitizer-Methoden verwenden können, ist `Sanitizer` wahrscheinlich effizienter, um sie zu teilen und wiederzuverwenden als `SanitizerConfig`.

#### Allow- und Remove-Konfigurationen

Sie können eine Konfiguration auf zwei Arten aufbauen: Allow-Konfigurationen und Remove-Konfigurationen.

In "Allow-Konfigurationen" spezifizieren Sie die Elemente und Attribute, die Sie _erlauben_ (oder durch Kind-Elemente ersetzen) möchten: alle anderen Elemente/Attribute in der Eingabe werden entfernt.
Das folgende Beispiel erlaubt nur {{htmlelement("p")}}- und {{htmlelement("div")}}-Elemente sowie `cite`- und `onclick`-Attribute für beliebige Elemente.
Es ersetzt auch {{htmlelement("b")}}-Elemente durch ihre Kind-Knoten und entfernt somit effektiv den Stil des verschachtelten Inhalts.

```js
const sanitizer = Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Wenn eine Allow-Konfiguration verwendet wird, ist es leicht zu verstehen, welche Elemente im DOM erlaubt werden, wenn das HTML geparst wird.
Sie sind nützlich, wenn Sie genau wissen, welche HTML-Entitäten Sie in einem bestimmten Kontext injizieren möchten.

In "Remove-Konfigurationen" spezifizieren Sie die HTML-Elemente und -Attribute, die Sie entfernen möchten: alle anderen Elemente und Attribute werden vom Sanitizer zugelassen (können aber blockiert werden, wenn Sie eine sichere Sanitizer-Methode verwenden oder das Element im Kontext nicht erlaubt ist).
Das folgende Beispiel zeigt einen Sanitizer, der die gleichen Elemente entfernt, die in dem vorherigen Code erlaubt waren:

```js
const sanitizer = Sanitizer({
  removeElements: ["p", "div", "b"],
  removeAttributes: ["cite", "onclick"],
});
```

Remove-Konfigurationen sind nützlich, wenn Sie die Standardeinstellungen des Sanitizers verwenden möchten, aber möglicherweise einige zusätzliche Entitäten einschränken möchten.

Die gleichzeitige Verwendung von Allow- und Remove-Konfigurationen wird nicht empfohlen, da dies die Konfiguration schwerer verständlich und weniger effizient zu parsen macht.
Beachten Sie, dass eine Konfiguration mit sowohl erlaubten als auch entfernten Entitäten immer in eine Allow-Konfiguration reduziert werden kann, bei der alle Entitäten auf der ursprünglichen Remove-Liste entfernt wurden.

Wenn Sie eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) mit sowohl Allow- als auch Remove-Konfigurationen an die Sanitizer-Methoden übergeben, wird ein `TypeError` ausgelöst.
Es ist möglich, eine Konfiguration mit sowohl Allow- als auch Remove-Listen bei der Verwendung von [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen.
Die Allow-Listen werden zuerst geparst, falls sie irgendwelche Einträge enthalten, und dann die Remove-Listen.
Die Remove-Listen haben wenig Einfluss, wenn es Einträge in der Allow-Liste gibt.

### Sanitizer und Trusted Types

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Eingaben durch eine benutzerspezifizierte Transformationsfunktion geleitet werden, bevor sie an eine API übergeben werden, die diese Eingaben möglicherweise ausführt.
Diese Transformationsfunktion wird meist verwendet, um die Eingaben zu bereinigen, muss es aber nicht: Der Zweck der API ist es in erster Linie, es Entwicklern zu erleichtern, Bereinigungscode zu prüfen, nicht um zu definieren, wie oder ob die Bereinigung durchgeführt wird.

Die sicheren HTML-Bereinigungsmethoden müssen nicht mit Trusted Types funktionieren.
Da sie immer alle XSS-unsicheren Entitäten filtern, bevor das Eingabe-HTML injiziert wird, besteht keine Notwendigkeit, den Eingabestring zu bereinigen oder die Methoden zu prüfen.

Die unsicheren HTML-Bereinigungsmethoden können jedoch unsicheres HTML injizieren, abhängig von dem Sanitizer, und arbeiten daher mit Trusted Types.
Die Methoden können entweder einen String oder einen `TrustedType` als Eingabe nehmen.
Wird ein Sanitizer ebenfalls bereitgestellt, wird zuerst die Transformationsfunktion ausgeführt und dann der Sanitizer.

Beachten Sie, dass die Transformationsfunktion in diesem Fall den Eingabestring nicht bereinigen muss (obwohl sie es kann), da Sie dafür die Sanitizer-API verwenden können.
Was Trusted Types in diesem Fall bieten, ist Information darüber, wo potenziell unsichere Strings injiziert werden, was es einfacher macht, sie zu lokalisieren und sicherzustellen, dass der Sanitizer entsprechend konfiguriert ist.

### Dritthersteller-Sanitisierungsbibliotheken

Vor der Sanitizer-API filterten Entwickler Eingabestrings typischerweise mit Drittanbieter-Bibliotheken wie [DOMPurify](https://github.com/cure53/DOMPurify), möglicherweise aus Transformationsfunktionen in Trusted Types aufgerufen.

Es sollte nicht notwendig sein, diese Bibliotheken weiterhin zu verwenden, wenn unzuverlässige HTML-Strings injiziert werden.
Die API ist in den Browser integriert und kennt den Parsing-Kontext und den ausgeführten Code besser, als es externe Parser-Bibliotheken können.

## Schnittstellen

- [`Sanitizer`](/de/docs/Web/API/Sanitizer) {{experimental_inline}}
  - : Ein wiederverwendbares Sanitizerkonfigurationsobjekt, das definiert, welche Elemente und Attribute erlaubt/entfernt werden sollen, wenn nicht vertrauenswürdige HTML-Strings bereinigt werden.
    Es wird in den Methoden verwendet, die HTML-Strings in das DOM oder Dokument einfügen.
- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)
  - : Ein Wörterbuch, das eine Sanitizerkonfiguration definiert.
    Dies kann an den gleichen Stellen wie [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet werden, ist aber wahrscheinlich weniger effizient in der Verwendung und Wiederverwendung.

## Erweiterungen anderer Schnittstellen

### XSS-sichere Methoden

- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)
  - : Parst einen HTML-String in einen Teilbaum von Knoten und entfernt alle im Kontext des Elements ungültigen Elemente.
    Dann werden alle Elemente und Attribute entfernt, die von der Sanitizerkonfiguration nicht erlaubt sind und alle, die als XSS-gefährlich gelten (selbst wenn sie in der Konfiguration erlaubt sind).
    Der Teilbaum wird dann als Teilbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Parst einen HTML-String in einen Teilbaum von Knoten.
    Dann werden alle Elemente und Attribute entfernt, die von der Sanitizerkonfiguration nicht erlaubt sind und alle, die als XSS-gefährlich gelten (selbst wenn sie in der Konfiguration erlaubt sind).
    Der Teilbaum wird dann als Teilbaum des `ShadowRoot` eingefügt.
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Parst einen HTML-String in einen Teilbaum von Knoten.
    Dann werden alle Elemente und Attribute entfernt, die von der Sanitizerkonfiguration nicht erlaubt sind und alle, die als XSS-gefährlich gelten (selbst wenn sie in der Konfiguration erlaubt sind).
    Der Teilbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

### XSS-unsichere Methoden

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst einen HTML-String in einen Teilbaum von Knoten und entfernt alle im Kontext des Elements ungültigen Elemente.
    Dann werden alle Elemente und Attribute entfernt, die vom Sanitizer nicht erlaubt sind: falls kein Sanitizer angegeben ist, sind alle Elemente erlaubt.
    Der Teilbaum wird dann als Teilbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst einen HTML-String in einen Teilbaum von Knoten.
    Dann werden alle Elemente und Attribute entfernt, die vom Sanitizer nicht erlaubt sind: falls kein Sanitizer angegeben ist, sind alle Elemente erlaubt.
    Der Teilbaum wird dann als Teilbaum des `ShadowRoot` eingefügt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Parst einen HTML-String in einen Teilbaum von Knoten.
    Dann werden alle Elemente und Attribute entfernt, die vom Sanitizer nicht erlaubt sind: falls kein Sanitizer angegeben ist, sind alle Elemente erlaubt.
    Der Teilbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

## Beispiele

Die folgenden Beispiele zeigen, wie die Sanitizer-API mit dem _Standard_-Sanitizer verwendet wird (zum Zeitpunkt des Schreibens werden Konfigurationsoperationen noch nicht unterstützt).

### Verwendung von `Element.setHTML()` mit dem Standardsanitizer

In den meisten Fällen kann `Element.setHTML()` mit dem Standardsanitizer als Drop-in-Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden.
Der folgende Code zeigt, wie die Methode verwendet wird, um die HTML-Eingabe zu bereinigen, bevor sie in ein Element mit der ID `target` injiziert wird.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Das `{{htmlelement("script")}}`-Element ist weder vom Standardsanitizer noch von der `setHTML()`-Methode erlaubt, daher wird das `alert()`-Script entfernt.

Beachten Sie, dass die Verwendung von `Element.setHTMLUnsafe()` mit dem Standardsanitizer die gleichen HTML-Entitäten bereinigt.
Der Hauptunterschied besteht darin, dass, wenn Sie diese Methode mit Trusted Types verwenden, diese möglicherweise immer noch geprüft werden können:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Verwendung einer Allow-Sanitizer-Konfiguration

Dieser Code zeigt, wie Sie `Element.setHTMLUnsafe()` mit einer Allow-Sanitizer verwenden können, die nur {{htmlelement("p")}}, {{htmlelement("b")}}- und {{htmlelement("div")}}-Elemente erlaubt.
Alle anderen Elemente im Eingabestring würden entfernt.

```js
const sanitizer1 = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });
```

Beachten Sie, dass Sie in diesem Fall normalerweise `setHTML()` verwenden sollten.
Sie sollten `Element.setHTMLUnsafe()` nur verwenden, wenn Sie XSS-unsichere Elemente oder Attribute erlauben müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
