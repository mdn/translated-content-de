---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die **HTML-Sanitizer-API** ermöglicht es Entwicklern, HTML-Zeichenfolgen zu filtern, um unerwünschte Elemente, Attribute und andere HTML-Entitäten zu entfernen, wenn sie in das DOM oder ein Shadow-DOM eingefügt werden.

## Konzepte und Verwendung

Webanwendungen müssen häufig mit nicht vertrauenswürdigen HTML-Inhalten auf der Clientseite arbeiten, beispielsweise als Teil einer clientseitigen Templating-Lösung, bei der Darstellung von nutzergenerierten Inhalten oder beim Einfügen von Daten in einen Frame von einer anderen Website.

Das Injizieren von nicht vertrauenswürdigem HTML kann eine Website anfällig für verschiedene [Arten von Angriffen](/de/docs/Web/Security/Attacks) machen.
Insbesondere [Cross-Site-Scripting (XSS)-Angriffe](/de/docs/Web/Security/Attacks/XSS) funktionieren, indem nicht vertrauenswürdiges HTML in das DOM injiziert wird, das dann JavaScript im Kontext des aktuellen Ursprungs ausführt — was es bösartigem Code ermöglicht, so zu laufen, als wäre er vom Ursprung der Website bereitgestellt worden.
Diese Angriffe können gemindert werden, indem unsichere HTML-Elemente und Attribute entfernt werden, bevor sie in das DOM eingefügt werden.

Die HTML-Sanitizer-API bietet eine Reihe von Methoden zum Entfernen unerwünschter HTML-Entitäten aus HTML-Eingaben, bevor sie in das DOM eingefügt werden.
Diese stehen in XSS-sicheren Versionen zur Verfügung, die die Entfernung aller unsicheren Elemente und Attribute erzwingen, sowie in potenziell unsicheren Versionen, die Entwicklern die volle Kontrolle über die erlaubten HTML-Entitäten geben.

### Sanitizer-Methoden

Die HTML-Sanitizer-API bietet XSS-sichere und XSS-unsichere Methoden zum Injizieren von HTML-Zeichenfolgen in ein [`Element`](/de/docs/Web/API/Element) oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) sowie zum Parsen von HTML in ein [`Document`](/de/docs/Web/API/Document).

- Sichere Methoden: [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Alle Methoden nehmen das zu injizierende HTML und eine optionale [Sanitizer-Konfiguration](#sanitizer-konfiguration) als Argumente.
Die Konfiguration definiert die HTML-Entitäten, die aus der Eingabe herausgefiltert werden, bevor sie injiziert wird.
Die [`Element`](/de/docs/Web/API/Element)-Methoden sind kontextsensitiv und entfernen zusätzlich alle Elemente, die gemäß der HTML-Spezifikation im Zielelement nicht erlaubt sind.

Die sicheren Methoden entfernen immer XSS-unsichere Elemente und Attribute.
Wird kein Sanitizer als Parameter übergeben, verwenden sie die Standard-Sanitizer-Konfiguration, die alle Elemente und Attribute erlaubt, außer solchen, die als unsicher bekannt sind, wie zum Beispiel {{htmlelement("script")}}-Elemente und `onclick`-Ereignishandler.
Wird ein benutzerdefinierter Sanitizer verwendet, wird dieser implizit aktualisiert, um alle nicht XSS-sicheren Elemente und Attribute zu entfernen (beachten Sie, dass der übergebene Sanitizer nicht geändert wird und möglicherweise weiterhin unsichere Entitäten erlaubt, wenn er mit einer unsicheren Methode verwendet wird).

Die sicheren Methoden sollten anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um nicht vertrauenswürdige HTML-Inhalte zu injizieren.
Zum Beispiel können Sie in den meisten Fällen `Element.setHTML()` mit dem Standardsanitizer als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.
Die gleichen Methoden können auch verwendet werden, um vertrauenswürdige HTML-Zeichenfolgen zu injizieren, die keine XSS-unsicheren Elemente enthalten müssen.

Die XSS-unsicheren Methoden verwenden jede Sanitizer-Konfiguration, die als Argument übergeben wird.
Wird kein Sanitizer übergeben, so werden alle HTML-Elemente und Attribute, die im Kontext erlaubt sind, injiziert.
Dies ist vergleichbar mit der Verwendung von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), außer dass die Methode Shadow-Roots parst, Elemente, die im Kontext nicht angebracht sind, entfernt und einige andere Eingaben zulässt, die bei Verwendung der Eigenschaft nicht erlaubt sind.

Die unsicheren Methoden sollten nur mit nicht vertrauenswürdigem HTML verwendet werden, das einige XSS-unsichere Elemente oder Attribute enthalten muss.
Dies ist immer noch unsicher, ermöglicht es jedoch, das Risiko zu reduzieren, indem unsichere Entitäten auf das minimal erforderliche Set beschränkt werden.
Wenn Sie beispielsweise unsicheres HTML injizieren möchten, aber aus irgendeinem Grund der Eingabe der `onblur`-Handler enthalten sein muss, könnten Sie dies sicherer tun, indem Sie den Standard-Sanitizer ändern und eine unsichere Methode verwenden, wie gezeigt:

```js
const sanitizer1 = Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });
```

### Sanitizer-Konfiguration

Eine Sanitizer-Konfiguration definiert, welche HTML-Entitäten erlaubt, ersetzt oder entfernt werden, wenn der Sanitizer verwendet wird, einschließlich Elemente, Attribute, Daten-Attribute und Kommentare.

Es gibt zwei eng miteinander verbundene Sanitizer-Konfigurationsschnittstellen, von denen jede an alle Sanitizer-Methoden übergeben werden kann.

- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist ein Wörterbuchobjekt, das Arrays von Elementen oder Attributen definiert, die erlaubt oder nicht erlaubt sind, wenn die Konfiguration verwendet wird, Eigenschaften angibt, ob Kommentare und Datenattribute erlaubt oder weggelassen werden, usw.
- [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen eine Hülle um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die Methoden bereitstellt, um ergonomisch und konsistent Entitäten von den verschiedenen Listen der Konfiguration hinzuzufügen und zu entfernen.
  Sie können beispielsweise eine Methode verwenden, um ein erlaubtes Attribut hinzuzufügen, und es wird auch das Attribut aus dem nicht erlaubten Array (falls vorhanden) entfernen.
  Die Schnittstelle bietet auch Methoden, um eine Kopie der zugrunde liegenden [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurückzugeben und den Sanitizer so zu aktualisieren, dass er XSS-sicher ist.
  Sie kann Normalisierungen der Sanitizer-Konfiguration bereitstellen, aus der sie konstruiert wurde, was sie einfacher verständlich und wiederverwendbar macht.

Auch wenn Sie jede Schnittstelle in allen Sanitizing-Methoden verwenden können, wird `Sanitizer` wahrscheinlich effizienter zum Teilen und Wiederverwenden als `SanitizerConfig` sein.

#### Allow- und Remove-Konfigurationen

Sie können eine Konfiguration auf zwei Arten erstellen: Allow-Konfigurationen und Remove-Konfigurationen.

In "Allow-Konfigurationen" spezifizieren Sie die Elemente und Attribute, die Sie _erlauben_ (oder durch Kindelemente ersetzen) möchten: Alle anderen Elemente/Attribute in der Eingabe werden entfernt.
Zum Beispiel erlaubt die folgende Konfiguration nur {{htmlelement("p")}}- und {{htmlelement("div")}}-Elemente sowie `cite`- und `onclick`-Attribute auf jedem Element.
Sie ersetzt auch {{htmlelement("b")}}-Elemente durch ihre Knoten, was effektiv den Stil ihres verschachtelten Inhalts entfernt.

```js
const sanitizer = Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Wenn eine Allow-Konfiguration verwendet wird, ist es leicht zu verstehen, welche Elemente im DOM erlaubt werden, wenn das HTML geparst wird.
Sie sind nützlich, wenn Sie genau wissen, welche HTML-Entitäten Sie in einem bestimmten Kontext injizieren möchten.

In "Remove-Konfigurationen" spezifizieren Sie die HTML-Elemente und -Attribute, die Sie entfernen möchten: Alle anderen Elemente und Attribute sind durch den Sanitizer erlaubt (können jedoch blockiert werden, wenn Sie eine sichere Sanitizer-Methode verwenden oder wenn das Element im Kontext nicht erlaubt ist).
Zum Beispiel würde der folgende Sanitizer dieselben Elemente entfernen, die in der vorherigen Code-Beispiel erlaubt waren:

```js
const sanitizer = Sanitizer({
  removeElements: ["p", "div", "b"],
  removeAttributes: ["cite", "onclick"],
});
```

Remove-Konfigurationen sind nützlich, wenn Sie die Standardsanitizer-Einstellungen verwenden möchten, aber möglicherweise einige zusätzliche Entitäten einschränken.

Die gleichzeitige Verwendung von Allow- und Remove-Konfigurationen wird nicht empfohlen, da sie die Konfiguration schwieriger zu verstehen und weniger effizient zu parsen macht.
Beachten Sie, dass eine Konfiguration mit sowohl erlaubten als auch entfernten Entitäten immer auf eine Allow-Konfiguration reduziert werden kann, bei der alle Entitäten auf der ursprünglichen Remove-Liste entfernt wurden.

Wenn Sie eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) mit sowohl Allow- als auch Remove-Konfigurationen an die Sanitizer-Methoden übergeben, werden sie einen `TypeError` werfen.
Es ist möglich, eine Konfiguration mit sowohl Allow- als auch Remove-Listen zu erstellen, wenn Sie [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden.
Die Allow-Listen werden zuerst geparst, falls sie irgendwelche Einträge enthalten, und dann die Remove-Listen.
Die Remove-Listen haben wenig Wirkung, wenn es irgendwelche Einträge in der Allow-Liste gibt.

### Sanitizing und Trusted Types

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Eingaben durch eine benutzerspezifizierte Transformationsfunktion geleitet werden, bevor sie an eine API übergeben werden, die diese Eingaben möglicherweise ausführt.
Diese Transformationsfunktion wird meist verwendet, um die Eingabe zu säubern, muss es jedoch nicht: Der Zweck der API besteht hauptsächlich darin, Entwicklern das Audit von Sanitizing-Code zu erleichtern, nicht zu definieren, wie oder ob das Sanitizing durchgeführt wird.

Die sicheren HTML-Sanitizing-Methoden müssen nicht mit Trusted Types arbeiten.
Da sie immer alle XSS-unsicheren Entitäten filtern, bevor die HTML-Eingabe injiziert wird, besteht keine Notwendigkeit, die Eingabezeichenfolge zu säubern oder die Methoden zu auditieren.

Die unsicheren HTML-Sanitizing-Methoden können jedoch nicht vertrauenswürdiges HTML injizieren, abhängig vom Sanitizer, und werden daher mit Trusted Types arbeiten.
Die Methoden können entweder eine Zeichenfolge oder einen `TrustedType` als Eingabe nehmen.
Wird auch ein Sanitizer bereitgestellt, wird die Transformationsfunktion zuerst ausgeführt und dann der Sanitizer.

Beachten Sie, dass die Transformationsfunktion in diesem Fall die Eingabezeichenfolge nicht säubern muss (obwohl sie es kann), da Sie dafür die Sanitizer-API verwenden können.
Was Trusted Types in diesem Fall bieten, sind Informationen darüber, wo potenziell unsichere Zeichenfolgen injiziert werden, was es einfacher macht, sie zu lokalisieren und zu überprüfen, dass der Sanitizer angemessen konfiguriert ist.

### Drittanbieter-Sanitizing-Bibliotheken

Vor der Sanitizer-API filterten Entwickler Eingabezeichenfolgen typischerweise mit Drittanbieter-Bibliotheken wie [DOMPurify](https://github.com/cure53/DOMPurify), die möglicherweise von Transformationsfunktionen in Trusted Types aufgerufen wurden.

Es sollte nicht mehr erforderlich sein, diese Bibliotheken zu verwenden, wenn nicht vertrauenswürdige HTML-Zeichenfolgen injiziert werden.
Die API ist in den Browser integriert und sich des Parsing-Kontexts und des erlaubten Codes mehr bewusst als externe Parser-Bibliotheken es können.

## Schnittstellen

- [`Sanitizer`](/de/docs/Web/API/Sanitizer)
  - : Ein wiederverwendbares Sanitizer-Konfigurationsobjekt, das definiert, welche Elemente und Attribute erlaubt/entfernt werden sollen, wenn nicht vertrauenswürdige HTML-Zeichenfolgen sanitisiert werden.
    Dies wird in den Methoden verwendet, die HTML-Zeichenfolgen in das DOM oder Dokument einfügen.
- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)
  - : Ein Wörterbuch, das eine Sanitizer-Konfiguration definiert.
    Das kann an den gleichen Stellen wie [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet werden, wird aber wahrscheinlich weniger effizient zu verwenden und wiederzuverwenden sein.

## Erweiterungen anderer Schnittstellen

### XSS-sichere Methoden

- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)
  - : Parst eine HTML-Zeichenfolge in einen Knotenbaum, entfernt alle Elemente, die im Kontext des Elements ungültig sind.
    Anschließend werden alle Elemente und Attribute entfernt, die nicht von der Sanitizer-Konfiguration erlaubt sind, und alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind).
    Der Knotenbaum wird dann als Unterbaum des Elements in das DOM eingesetzt.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Parst eine HTML-Zeichenfolge in einen Knotenbaum.
    Anschließend werden alle Elemente und Attribute entfernt, die nicht von der Sanitizer-Konfiguration erlaubt sind, und alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind).
    Der Knotenbaum wird dann als Unterbaum des `ShadowRoot` eingesetzt.
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Parst eine HTML-Zeichenfolge in einen Knotenbaum.
    Anschließend werden alle Elemente und Attribute entfernt, die nicht von der Sanitizer-Konfiguration erlaubt sind, und alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind).
    Der Knotenbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) festgelegt.

### XSS-unsichere Methoden

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst eine HTML-Zeichenfolge in einen Knotenbaum, entfernt alle Elemente, die im Kontext des Elements ungültig sind.
    Anschließend werden alle Elemente und Attribute entfernt, die nicht vom Sanitizer erlaubt sind: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt.
    Der Knotenbaum wird dann als Unterbaum des Elements in das DOM eingesetzt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst eine HTML-Zeichenfolge in einen Knotenbaum.
    Anschließend werden alle Elemente und Attribute entfernt, die nicht vom Sanitizer erlaubt sind: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt.
    Der Knotenbaum wird dann als Unterbaum des `ShadowRoot` eingesetzt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Parst eine HTML-Zeichenfolge in einen Knotenbaum.
    Anschließend werden alle Elemente und Attribute entfernt, die nicht vom Sanitizer erlaubt sind: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt.
    Der Knotenbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) festgelegt.

## Beispiele

Die folgenden Beispiele zeigen, wie die Sanitizer-API mit dem _Standard_-Sanitizer verwendet wird (zum Zeitpunkt der Schreiben werden Konfigurationsoperationen noch nicht unterstützt).

### Verwendung von `Element.setHTML()` mit dem Standardsanitizer

In den meisten Fällen kann `Element.setHTML()` mit dem Standardsanitizer als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden.
Der untenstehende Code demonstriert, wie die Methode verwendet wird, um die HTML-Eingabe zu bereinigen, bevor sie in ein Element mit der ID `target` eingefügt wird.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Das `{{htmlelement("script")}}`-Element ist vom Standardsanitizer oder durch die `setHTML()`-Methode nicht erlaubt, sodass das `alert()` entfernt wird.

Beachten Sie, dass die Verwendung von `Element.setHTMLUnsafe()` mit dem Standardsanitizer dieselben HTML-Entitäten bereinigen wird.
Der Hauptunterschied besteht darin, dass, wenn Sie diese Methode mit Trusted Types verwenden, sie möglicherweise weiterhin geprüft wird:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Verwendung einer Allow-Sanitizer-Konfiguration

Dieser Code zeigt, wie Sie `Element.setHTMLUnsafe()` mit einer Allow-Sanitizer-Konfiguration verwenden könnten, die nur {{htmlelement("p")}}, {{htmlelement("b")}} und {{htmlelement("div")}}-Elemente erlaubt.
Alle anderen Elemente in der Eingabezeichenfolge würden entfernt.

```js
const sanitizer1 = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });
```

Beachten Sie, dass Sie in diesem Fall normalerweise `setHTML()` verwenden sollten.
Sie sollten `Element.setHTMLUnsafe()` nur verwenden, wenn Sie XSS-unsichere Elemente oder Attribute zulassen müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
