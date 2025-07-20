---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{DefaultAPISidebar("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **HTML Sanitizer API** ermöglicht es Entwicklern, HTML-Strings zu nehmen und unerwünschte Elemente, Attribute und andere HTML-Entitäten herauszufiltern, wenn sie in das DOM oder ein Shadow-DOM eingefügt werden.

## Konzepte und Nutzung

Webanwendungen müssen oft mit nicht vertrauenswürdigem HTML auf der Clientseite arbeiten, zum Beispiel als Teil einer clientseitigen Templating-Lösung, bei der Darstellung von nutzergenerierten Inhalten oder beim Einbinden von Daten in einen Frame von einer anderen Seite.

Das Injizieren von nicht vertrauenswürdigem HTML kann eine Seite anfällig für verschiedene [Typen von Angriffen](/de/docs/Web/Security/Attacks) machen. Insbesondere [Cross-Site-Scripting (XSS)-Angriffe](/de/docs/Web/Security/Attacks/XSS) funktionieren, indem nicht vertrauenswürdiges HTML in das DOM eingefügt wird, das dann JavaScript im Kontext des aktuellen Ursprungs ausführt — was bösartigen Code ermöglicht, als ob er vom Herkunftsort der Seite bereitgestellt wurde. Diese Angriffe können gemindert werden, indem unsichere HTML-Elemente und -Attribute entfernt werden, bevor sie in das DOM eingefügt werden.

Die HTML Sanitizer API bietet eine Reihe von Methoden zum Entfernen unerwünschter HTML-Entitäten aus HTML-Eingaben, bevor sie in das DOM eingefügt werden. Diese gibt es in XSS-sicheren Versionen, die die Entfernung aller unsicheren Elemente und Attribute erzwingen, und potenziell unsicheren Versionen, die Entwicklern volle Kontrolle über die HTML-Entitäten geben, die erlaubt sind.

### Sanitization-Methoden

Die HTML Sanitizer API bietet XSS-sichere und XSS-unsichere Methoden zum Injizieren von HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) sowie zum Parsen von HTML in ein [`Document`](/de/docs/Web/API/Document).

- Sichere Methoden: [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Alle Methoden nehmen das zu injizierende HTML und eine optionale [Sanitizer-Konfiguration](#sanitizer-konfiguration) als Argumente. Die Konfiguration definiert die HTML-Entitäten, die aus der Eingabe herausgefiltert werden, bevor sie injiziert wird. Die [`Element`](/de/docs/Web/API/Element)-Methoden sind kontextsensitiv und löschen zusätzlich alle Elemente, die die HTML-Spezifikation im Zielelement nicht erlaubt.

Die sicheren Methoden entfernen immer XSS-unsichere Elemente und Attribute. Wenn kein Sanitizer als Parameter übergeben wird, verwenden sie die Standard-Sanitizer-Konfiguration, die alle Elemente und Attribute erlaubt, außer denen, die als unsicher bekannt sind, wie {{htmlelement("script")}}-Elemente und `onclick`-Ereignishandler. Wenn ein benutzerdefinierter Sanitizer verwendet wird, wird er implizit aktualisiert, um alle nicht XSS-sicheren Elemente und Attribute zu entfernen (beachten Sie, dass der übergebene Sanitizer nicht modifiziert wird und möglicherweise weiterhin unsichere Entitäten erlaubt, wenn er mit einer unsicheren Methode verwendet wird).

Die sicheren Methoden sollten anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um nicht vertrauenswürdigen HTML-Inhalt zu injizieren. Zum Beispiel können Sie in den meisten Fällen `Element.setHTML()` mit dem Standard-Sanitizer als direkte Alternative zu [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden. Dieselben Methoden können auch verwendet werden, um vertrauenswürdige HTML-Strings zu injizieren, die keine XSS-unsicheren Elemente enthalten müssen.

Die XSS-unsicheren Methoden verwenden die Sanitizer-Konfiguration, die als Argument übergeben wird. Wenn kein Sanitizer übergeben wird, werden alle HTML-Elemente und Attribute, die vom Kontext erlaubt sind, injiziert. Dies ist ähnlich wie die Verwendung von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), mit dem Unterschied, dass die Methode Shadow-Roots parst, Elemente entfernt, die im Kontext nicht geeignet sind, und einige andere Eingaben erlaubt, die bei der Verwendung der Eigenschaft nicht erlaubt sind.

Die unsicheren Methoden sollten nur mit nicht vertrauenswürdigem HTML verwendet werden, das einige XSS-unsichere Elemente oder Attribute enthalten muss. Dies ist immer noch unsicher, erlaubt es Ihnen jedoch, das Risiko zu reduzieren, indem Sie unsichere Entitäten auf das Minimum beschränken. Zum Beispiel, wenn Sie unsicheres HTML injizieren wollten, aber aus irgendeinem Grund, das Eingabefeld den `onblur`-Handler beinhalten musste, könnten Sie dies sicherer tun, indem Sie den Standard-Sanitizer anpassen und eine unsichere Methode wie folgt verwenden:

```js
const sanitizer = Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

### Sanitizer-Konfiguration

Eine Sanitizer-Konfiguration definiert, welche HTML-Entitäten erlaubt, ersetzt oder entfernt werden, wenn der Sanitizer verwendet wird, einschließlich Elementen, Attributen, Datenattributen und Kommentaren.

Es gibt zwei sehr eng verwandte Sanitizer-Konfigurationsschnittstellen, von denen jede den Sanitization-Methoden übergeben werden kann.

- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist ein Wörterbuchobjekt, das Arrays von Elementen oder Attributen definiert, die erlaubt oder nicht erlaubt sind, wenn die Konfiguration verwendet wird, sowie Eigenschaften, die angeben, ob Kommentare und Datenattribute erlaubt oder weggelassen werden sollen, und so weiter.
- [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die Methoden bietet, um Entitäten konsistent und ergonomisch aus den verschiedenen Listen der Konfiguration hinzuzufügen und zu entfernen. Zum Beispiel können Sie eine Methode verwenden, um ein erlaubtes Attribut hinzuzufügen, und es wird auch das Attribut aus dem nicht erlaubten Array entfernen (falls vorhanden). Die Schnittstelle bietet auch Methoden, um eine Kopie der zugrunde liegenden [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurückzugeben und den Sanitizer so zu aktualisieren, dass er XSS-sicher ist. Sie kann Normalisierungen der zur Konstruktion verwendeten Sanitizer-Konfiguration bereitstellen, was es einfacher macht, sie zu verstehen und wiederzuverwenden.

Während Sie jede der Schnittstellen in jeder der Sanitizing-Methoden verwenden können, ist `Sanitizer` wahrscheinlich effizienter zum Teilen und Wiederverwenden als `SanitizerConfig`.

#### Erlauben und Entfernen von Konfigurationen

Sie können eine Konfiguration auf zwei Arten erstellen: Erlauben-Konfigurationen und Entfernen-Konfigurationen.

In "Erlauben-Konfigurationen" spezifizieren Sie die Elemente und Attribute, die Sie _erlauben_ (oder durch Kind-Elemente ersetzen) möchten: Alle anderen Elemente/Attribute in der Eingabe werden verworfen. Zum Beispiel erlaubt die folgende Konfiguration nur {{htmlelement("p")}} und {{htmlelement("div")}}-Elemente und `cite`- und `onclick`-Attribute in jedem Element. Sie wird auch {{htmlelement("b")}}-Elemente durch ihre Kindknoten ersetzen, was effektiv den Stil ihres verschachtelten Inhalts entfernt.

```js
const sanitizer = Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Wenn eine Erlauben-Konfiguration verwendet wird, ist es einfach zu verstehen, welche Elemente im DOM erlaubt sein werden, wenn das HTML geparst wird. Sie sind nützlich, wenn Sie genau wissen, welche HTML-Entitäten Sie in einem bestimmten Kontext injizieren möchten.

In "Entfernen-Konfigurationen" spezifizieren Sie die HTML-Elemente und -Attribute, die Sie entfernen möchten: Alle anderen Elemente und Attribute sind durch den Sanitizer erlaubt (könnten aber blockiert werden, wenn Sie eine sichere Sanitizer-Methode verwenden oder wenn das Element im Kontext nicht erlaubt ist). Zum Beispiel würde der folgende Sanitizer dieselben Elemente entfernen, die in dem vorherigen Code erlaubt waren:

```js
const sanitizer = Sanitizer({
  removeElements: ["p", "div", "b"],
  removeAttributes: ["cite", "onclick"],
});
```

Entfernen-Konfigurationen sind nützlich, wenn Sie die Standardeinstellungen des Sanitizers verwenden, aber einige zusätzliche Entitäten vielleicht einschränken möchten.

Die gleichzeitige Verwendung von Erlauben- und Entfernen-Konfigurationen wird nicht empfohlen, da sie die Konfiguration schwerer zu verstehen und weniger effizient zu parsen macht. Beachten Sie, dass eine Konfiguration mit sowohl erlaubten als auch entfernten Entitäten immer zu einer Erlauben-Konfiguration reduziert werden kann, bei der die ursprünglichen Entitäten auf der Entfernungs-Liste entfernt wurden.

Wenn Sie eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) mit sowohl Erlauben- als auch Entfernen-Konfigurationen an die Sanitizer-Methoden übergeben, werfen diese eine `TypeError`. Es ist möglich, eine Konfiguration mit sowohl erlauben- als auch entfernen-Listen bei Verwendung von [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen. Die Erlauben-Listen werden zuerst geparst, wenn sie irgendwelche Elemente enthalten, und dann die Entfernen-Listen. Die Entfernen-Listen haben wenig Einfluss, wenn es irgendwelche Elemente in der Erlauben-Liste gibt.

### Sanitization und Trusted Types

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Eingaben durch eine benutzerdefinierte Transformationsfunktion geleitet werden, bevor sie an eine API übergeben werden, die diese Eingabe möglicherweise ausführt. Diese Transformationsfunktion wird meist verwendet, um die Eingabe zu bereinigen, muss es aber nicht: Der Zweck der API besteht hauptsächlich darin, es Entwicklern zu erleichtern, den Bereinigungscode zu überprüfen, nicht festzulegen, wie oder ob die Bereinigung durchgeführt wird.

Die sicheren HTML-Sanitisierungsmethoden müssen nicht mit Trusted Types arbeiten. Da sie immer alle XSS-unsicheren Entitäten filtern, bevor HTML-Inhalte eingefügt werden, ist es nicht nötig, den Eingabestring zu bereinigen oder die Methoden zu überprüfen.

Jedoch können die unsicheren HTML-Sanitisierungsmethoden nicht vertrauenswürdiges HTML injizieren, abhängig vom Sanitizer, und werden daher mit Trusted Types arbeiten. Die Methoden können sowohl einen String als auch einen `TrustedType` als Eingabe nehmen. Wenn auch ein Sanitizer bereitgestellt wird, wird die Transformationsfunktion zuerst ausgeführt und dann der Sanitizer.

Beachten Sie, dass die Transformationsfunktion in diesem Fall den Eingabestring nicht bereinigen muss (obwohl sie es kann), weil Sie die API des Sanitizers dafür verwenden können. Was Trusted Types in diesem Fall bietet, ist die Information darüber, wo potenziell unsichere Strings injiziert werden, was es einfacher macht, sie zu lokalisieren und zu überprüfen, ob der Sanitizer angemessen konfiguriert ist.

### Bibliotheken zur Drittanbieter-Bereinigung

Vor der Sanitizer API filterten Entwickler normalerweise Eingabestrings mit Drittanbieter-Bibliotheken wie [DOMPurify](https://github.com/cure53/DOMPurify), möglicherweise aufgerufen aus Transformationsfunktionen in Trusted Types.

Es sollte nicht mehr notwendig sein, diese Bibliotheken beim Injizieren von nicht vertrauenswürdigen HTML-Strings zu verwenden. Die API ist in den Browser integriert und sich des Parsinkontexts sowie des erlaubten Codes bewusster, als es externe Parser-Bibliotheken sein können.

## Schnittstellen

- [`Sanitizer`](/de/docs/Web/API/Sanitizer) {{experimental_inline}}
  - : Ein wiederverwendbares Sanitizer-Konfigurationsobjekt, das definiert, welche Elemente und Attribute erlaubt/entfernt werden sollten, wenn unzuverlässige HTML-Strings sanitisiert werden. Dies wird in den Methoden verwendet, die HTML-Strings in das DOM oder Dokument einfügen.
- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)
  - : Ein Wörterbuch, das eine Sanitizer-Konfiguration definiert. Dies kann an den gleichen Stellen wie [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet werden, ist aber möglicherweise weniger effizient zu nutzen und wiederzuverwenden.

## Erweiterungen zu anderen Schnittstellen

### XSS-sichere Methoden

- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)
  - : Parst einen HTML-String in einen Unterbaum von Knoten und entfernt dabei alle Elemente, die im Kontext des Elements ungültig sind. Dann entfernt es alle Elemente und Attribute, die von der Sanitizer-Konfiguration nicht erlaubt sind, und alle, die als XSS-unsicher angesehen werden (auch wenn sie von der Konfiguration erlaubt sind). Der Unterbaum wird dann als Unterbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Parst einen HTML-String in einen Unterbaum von Knoten. Dann entfernt es alle Elemente und Attribute, die von der Sanitizer-Konfiguration nicht erlaubt sind, und alle, die als XSS-unsicher angesehen werden (auch wenn sie von der Konfiguration erlaubt sind). Der Unterbaum wird dann als Unterbaum des `ShadowRoot` eingefügt.
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Parst einen HTML-String in einen Unterbaum von Knoten. Dann entfernt es alle Elemente und Attribute, die von der Sanitizer-Konfiguration nicht erlaubt sind, und alle, die als XSS-unsicher angesehen werden (auch wenn sie von der Konfiguration erlaubt sind). Der Unterbaum wird dann als der Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

### XSS-unsichere Methoden

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst einen HTML-String in einen Unterbaum von Knoten und entfernt dabei alle Elemente, die im Kontext des Elements ungültig sind. Dann entfernt es alle Elemente und Attribute, die nicht vom Sanitizer erlaubt sind: wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt. Der Unterbaum wird dann als Unterbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst einen HTML-String in einen Unterbaum von Knoten. Dann entfernt es alle Elemente und Attribute, die vom Sanitizer nicht erlaubt sind: wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt. Der Unterbaum wird dann als Unterbaum des `ShadowRoot` eingefügt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Parst einen HTML-String in einen Unterbaum von Knoten. Dann entfernt es alle Elemente und Attribute, die vom Sanitizer nicht erlaubt sind: wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt. Der Unterbaum wird dann als der Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

## Beispiele

Die folgenden Beispiele zeigen, wie man die Sanitizer-API mit dem _Standard_-Sanitizer verwendet (zum Zeitpunkt der Erstellung werden Konfigurationsoperationen noch nicht unterstützt).

### Verwendung von `Element.setHTML()` mit dem Standard-Sanitizer

In den meisten Fällen kann `Element.setHTML()` mit dem Standard-Sanitizer als direkter Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden. Der untenstehende Code zeigt, wie die Methode verwendet wird, um die HTML-Eingabe zu bereinigen, bevor sie in ein Element mit der ID `target` eingefügt wird.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Das `{{htmlelement("script")}}`-Element wird weder vom Standard-Sanitizer noch von der `setHTML()`-Methode erlaubt, daher wird das `alert()` entfernt.

Beachten Sie, dass die Verwendung von `Element.setHTMLUnsafe()` mit dem Standard-Sanitizer dieselben HTML-Entitäten bereinigen wird. Der Hauptunterschied besteht darin, dass, wenn Sie diese Methode mit Trusted Types verwenden, sie möglicherweise immer noch überprüft wird:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Verwendung einer Erlauben-Sanitizer-Konfiguration

Dieser Code zeigt, wie Sie `Element.setHTMLUnsafe()` mit einem Erlauben-Sanitizer verwenden könnten, der nur {{htmlelement("p")}}, {{htmlelement("b")}} und {{htmlelement("div")}}-Elemente erlaubt. Alle anderen Elemente im Eingabestring würden entfernt.

```js
const sanitizer = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

Beachten Sie, dass Sie in diesem Fall normalerweise `setHTML()` verwenden sollten. Sie sollten `Element.setHTMLUnsafe()` nur verwenden, wenn Sie XSS-unsichere Elemente oder Attribute zulassen müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
