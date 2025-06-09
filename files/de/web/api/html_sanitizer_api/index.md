---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: a06a27b6f8eea66b66d848517aab0815a170c7cc
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die **HTML Sanitizer API** ermöglicht es Entwicklern, HTML-Strings zu filtern und unerwünschte Elemente, Attribute und andere HTML-Entitäten zu entfernen, bevor sie in das DOM oder ein Schatten-DOM eingefügt werden.

## Konzepte und Nutzung

Webanwendungen müssen häufig mit nicht vertrauenswürdigem HTML auf der Client-Seite arbeiten, etwa als Teil einer client-seitigen Templating-Lösung, beim Rendern von nutzergenerierten Inhalten oder beim Einbinden von Daten in einem Frame von einer anderen Seite.

Das Einfügen von nicht vertrauenswürdigem HTML kann eine Website anfällig für verschiedene [Arten von Angriffen](/de/docs/Web/Security/Attacks) machen. Insbesondere [Cross-Site-Scripting (XSS)-Angriffe](/de/docs/Web/Security/Attacks/XSS) funktionieren, indem nicht vertrauenswürdiges HTML in das DOM eingefügt wird, das dann JavaScript im Kontext des aktuellen Ursprungs ausführt — was es bösartigem Code erlaubt, so zu laufen, als wäre er vom Ursprung der Seite angeboten worden. Diese Angriffe können abgemildert werden, indem unsichere HTML-Elemente und -Attribute entfernt werden, bevor sie in das DOM eingefügt werden.

Die HTML Sanitizer API bietet eine Reihe von Methoden zum Entfernen unerwünschter HTML-Entitäten aus HTML-Eingaben, bevor diese in das DOM eingefügt werden. Es gibt XSS-sichere Versionen, die die Entfernung aller unsicheren Elemente und Attribute erzwingen, und potenziell unsichere Versionen, die Entwicklern die volle Kontrolle über die erlaubten HTML-Entitäten geben.

### Sanitization-Methoden

Die HTML Sanitizer API bietet XSS-sichere und XSS-unsichere Methoden zum Einfügen von HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) und zum Parsen von HTML in ein [`Document`](/de/docs/Web/API/Document).

- Sichere Methoden: [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Alle Methoden nehmen das einzufügende HTML und eine optionale [Sanitizer-Konfiguration](#sanitizer-konfiguration) als Argumente. Die Konfiguration definiert die HTML-Entitäten, die aus der Eingabe herausgefiltert werden, bevor sie eingefügt wird. Die [`Element`](/de/docs/Web/API/Element)-Methoden sind kontextbewusst und entfernen zusätzlich alle Elemente, die die HTML-Spezifikation im Zielelement nicht erlaubt.

Die sicheren Methoden entfernen immer XSS-unsichere Elemente und Attribute. Wenn kein Sanitizer als Parameter übergeben wird, verwenden sie die Standard-Sanitizer-Konfiguration, die alle Elemente und Attribute außer denen erlaubt, die als unsicher bekannt sind, wie z.B. {{htmlelement("script")}}-Elemente und `onclick`-Ereignishandler. Wenn ein benutzerdefinierter Sanitizer verwendet wird, wird er implizit aktualisiert, um alle nicht XSS-sicheren Elemente und Attribute zu entfernen (beachten Sie, dass der übergebene Sanitizer nicht modifiziert wird und möglicherweise unsichere Entitäten zulässt, wenn er mit einer unsicheren Methode verwendet wird).

Die sicheren Methoden sollten anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um nicht vertrauenswürdigen HTML-Inhalt einzufügen. Beispielsweise können Sie in den meisten Fällen `Element.setHTML()` mit dem Standard-Sanitizer als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden. Dieselben Methoden können auch zum Einfügen von vertrauenswürdigen HTML-Strings verwendet werden, die keine XSS-unsicheren Elemente enthalten müssen.

Die XSS-unsicheren Methoden verwenden die übergebene Sanitizer-Konfiguration. Wenn kein Sanitizer übergeben wird, werden alle HTML-Elemente und Attribute, die im Kontext erlaubt sind, eingefügt. Dies ähnelt der Verwendung von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), mit dem Unterschied, dass die Methode Schattenwurzel-parsen wird, Elemente entfernt, die im Kontext nicht geeignet sind, und einige andere Eingaben erlaubt, die bei der Verwendung der Eigenschaft nicht erlaubt sind.

Die unsicheren Methoden sollten nur mit nicht vertrauenswürdigem HTML verwendet werden, das bestimmte XSS-unsichere Elemente oder Attribute enthalten muss. Dies ist immer noch unsicher, ermöglicht es Ihnen jedoch, das Risiko zu verringern, indem Sie unsichere Entitäten auf das minimale Set beschränken. Zum Beispiel, wenn Sie unsicheres HTML einfügen wollten, aber aus irgendeinem Grund der Eingabewert den `onblur`-Handler enthalten musste, könnten Sie dies sicherer tun, indem Sie den Standard-Sanitizer ändern und eine unsichere Methode wie folgt verwenden:

```js
const sanitizer1 = Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });
```

### Sanitizer-Konfiguration

Eine Sanitizer-Konfiguration definiert, welche HTML-Entitäten erlaubt, ersetzt oder entfernt werden, wenn der Sanitizer verwendet wird, einschließlich Elemente, Attribute, Datenattribute und Kommentare.

Es gibt zwei sehr eng verwandte Sanitizer-Konfigurationsschnittstellen, von denen eine an alle Sanitization-Methoden übergeben werden kann.

- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist ein Wörterbuchobjekt, das Arrays von Elementen oder Attributen definiert, die bei Verwendung der Konfiguration erlaubt oder verboten sind, Eigenschaften, die angeben, ob Kommentare und Datenattribute erlaubt oder weggelassen werden sollen, und so weiter.
- [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das Methoden bereitstellt, um Entitäten ergonomisch und konsistent aus den verschiedenen Listen in der Konfiguration hinzuzufügen und zu entfernen. Zum Beispiel kann eine Methode verwendet werden, um ein erlaubtes Attribut hinzuzufügen, und es wird auch das Attribut aus dem verbotenen Array entfernt (falls vorhanden). Die Schnittstelle bietet auch Methoden, um eine Kopie der zugrunde liegenden [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurückzugeben und den Sanitizer so zu aktualisieren, dass er XSS-sicher ist. Sie kann Normalisierungen der bei der Konstruktion verwendeten Sanitizer-Konfiguration bereitstellen, was es einfacher macht, sie zu verstehen und wiederzuverwenden.

Obwohl Sie jede Schnittstelle in den Sanitizing-Methoden verwenden können, ist `Sanitizer` wahrscheinlich effizienter zu teilen und wiederzuverwenden als `SanitizerConfig`.

#### Erlauben- und Entfernen-Konfigurationen

Sie können eine Konfiguration auf zwei Arten erstellen: Erlauben-Konfigurationen und Entfernen-Konfigurationen.

In "Erlauben-Konfigurationen" geben Sie die Elemente und Attribute an, die Sie _erlauben_ (oder durch Kindelemente ersetzen) möchten: alle anderen Elemente/Attribute in der Eingabe werden entfernt. Zum Beispiel erlaubt die folgende Konfiguration nur {{htmlelement("p")}}- und {{htmlelement("div")}}-Elemente sowie `cite`- und `onclick`-Attribute bei jedem Element. Es ersetzt auch {{htmlelement("b")}}-Elemente durch ihre Kindknoten, wodurch der Stil des verschachtelten Inhalts effektiv entfernt wird.

```js
const sanitizer = Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Wenn eine Erlauben-Konfiguration verwendet wird, ist es einfach zu verstehen, welche Elemente im DOM erlaubt sein werden, wenn das HTML geparst wird. Sie sind nützlich, wenn Sie genau wissen, welche HTML-Entitäten Sie in einem bestimmten Kontext einfügen möchten.

In "Entfernen-Konfigurationen" geben Sie die HTML-Elemente und -Attribute an, die Sie entfernen möchten: alle anderen Elemente und Attribute werden vom Sanitizer zugelassen (können jedoch blockiert werden, wenn Sie eine sichere Sanitizer-Methode verwenden oder wenn das Element im Kontext nicht erlaubt ist). Zum Beispiel würde der folgende Sanitizer dieselben Elemente entfernen, die im vorherigen Code erlaubt waren:

```js
const sanitizer = Sanitizer({
  removeElements: ["p", "div", "b"],
  removeAttributes: ["cite", "onclick"],
});
```

Entfernen-Konfigurationen sind nützlich, wenn Sie die Standard-Sanitizer-Einstellungen verwenden möchten, aber möglicherweise einige zusätzliche Entitäten einschränken wollen.

Es wird davon abgeraten, sowohl Erlauben- als auch Entfernen-Konfigurationen gleichzeitig zu verwenden, da dies die Konfiguration schwerer zu verstehen und weniger effizient zu parsen macht. Beachten Sie, dass eine Konfiguration mit sowohl erlaubten als auch entfernten Entitäten immer in eine Erlauben-Konfiguration umgewandelt werden kann, bei der alle Entitäten in der ursprünglichen Entfernungsliste entfernt wurden.

Wenn Sie eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) mit sowohl Erlauben- als auch Entfernen-Konfigurationen an die Sanitizer-Methoden übergeben, wird ein `TypeError` ausgelöst. Es ist möglich, eine Konfiguration mit sowohl Erlauben- als auch Entfernen-Listen zu erstellen, wenn [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet wird. Die Erlauben-Listen werden zuerst geparst, falls sie Einträge enthalten, und dann die Entfernen-Listen. Die Entfernen-Listen haben wenig Einfluss, wenn es Einträge in der Erlauben-Liste gibt.

### Sanitization und Trusted Types

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Eingaben durch eine benutzerdefinierte Transformationsfunktion geleitet werden, bevor sie an eine API übergeben werden, die diese Eingaben möglicherweise ausführt. Diese Transformationsfunktion wird meist zur Reinigung der Eingaben verwendet, muss es aber nicht: Der Hauptzweck der API ist es, Entwicklern die Überprüfung des Sanitization-Codes zu erleichtern, nicht zu definieren, wie oder ob eine Reinigung vorgenommen wird.

Die sicheren HTML-Reinigungsmethoden müssen nicht mit trusted types arbeiten. Da sie immer alle XSS-unsicheren Entitäten filtern, bevor das Eingabe-HTML eingefügt wird, besteht keine Notwendigkeit, den Eingabestring zu reinigen oder die Methoden zu prüfen.

Die unsicheren HTML-Reinigungsmethoden hingegen können nicht vertrauenswürdiges HTML einfügen, abhängig vom Sanitizer, und arbeiten daher mit trusted types. Die Methoden können entweder einen String oder einen `TrustedType` als Eingabe nehmen. Wenn ein Sanitizer ebenfalls übergeben wird, wird zuerst die Transformationsfunktion ausgeführt und dann der Sanitizer.

Beachten Sie, dass die Transformationsfunktion in diesem Fall den Eingabestring nicht reinigen muss (obwohl sie es kann), da Sie die Sanitizer-API dafür nutzen können. Was trusted types in diesem Fall bieten, ist die Information darüber, wo potenziell unsichere Strings eingefügt werden, was es einfacher macht, sie zu lokalisieren und zu prüfen, dass der Sanitizer angemessen konfiguriert ist.

### Drittanbieter-Sanitisierungsbibliotheken

Vor der Sanitizer API filterten Entwickler typischerweise Eingabestrings mit Drittanbieter-Bibliotheken wie [DOMPurify](https://github.com/cure53/DOMPurify), möglicherweise aufgerufen von Transformationsfunktionen in trusted types.

Es sollte nicht mehr notwendig sein, diese Bibliotheken zu verwenden, wenn nicht vertrauenswürdige HTML-Strings eingefügt werden. Die API ist im Browser integriert und kennt den Parsing-Kontext und welche Codes ausgeführt werden dürfen besser, als externe Parser-Bibliotheken es können.

## Schnittstellen

- [`Sanitizer`](/de/docs/Web/API/Sanitizer)
  - : Ein wiederverwendbares Sanitizer-Konfigurationsobjekt, das definiert, welche Elemente und Attribute erlaubt/entfernt werden sollen, wenn nicht vertrauenswürdige HTML-Strings gereinigt werden. Dies wird in den Methoden verwendet, die HTML-Strings in das DOM oder Document einfügen.
- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)
  - : Ein Wörterbuch, das eine Sanitizer-Konfiguration definiert. Dies kann an den gleichen Stellen verwendet werden wie [`Sanitizer`](/de/docs/Web/API/Sanitizer), ist aber vermutlich weniger effizient zu verwenden und wiederzuverwenden.

## Erweiterungen anderer Schnittstellen

### XSS-sichere Methoden

- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)
  - : Einen String von HTML in einen Unterbaum von Knoten parsen, alle Elemente entfernen, die im Kontext des Elements ungültig sind. Dann alle Elemente und Attribute entfernen, die nicht von der Sanitizer-Konfiguration erlaubt sind, und alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind). Der Unterbaum wird dann als Unterbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Einen String von HTML in einen Unterbaum von Knoten parsen. Dann alle Elemente und Attribute entfernen, die nicht von der Sanitizer-Konfiguration erlaubt sind, und alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind). Der Unterbaum wird dann als Unterbaum des `ShadowRoot` eingefügt.
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Einen String von HTML in einen Unterbaum von Knoten parsen. Dann alle Elemente und Attribute entfernen, die nicht von der Sanitizer-Konfiguration erlaubt sind, und alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind). Der Unterbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

### XSS-unsichere Methoden

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Einen String von HTML in einen Unterbaum von Knoten parsen, alle Elemente entfernen, die im Kontext des Elements ungültig sind. Dann alle Elemente und Attribute, die nicht vom Sanitizer erlaubt sind, entfernen: wenn kein Sanitizer spezifiziert ist, alle Elemente erlauben. Der Unterbaum wird dann als Unterbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Einen String von HTML in einen Unterbaum von Knoten parsen. Dann alle Elemente und Attribute, die nicht vom Sanitizer erlaubt sind, entfernen: wenn kein Sanitizer spezifiziert ist, alle Elemente erlauben. Der Unterbaum wird dann als Unterbaum des `ShadowRoot` eingefügt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Einen String von HTML in einen Unterbaum von Knoten parsen. Dann alle Elemente und Attribute, die nicht vom Sanitizer erlaubt sind, entfernen: wenn kein Sanitizer spezifiziert ist, alle Elemente erlauben. Der Unterbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

## Beispiele

Die folgenden Beispiele zeigen, wie Sie die Sanitizer API mit dem _Standard_-Sanitizer verwenden (zur Zeit des Schreibens werden Konfigurationsoperationen noch nicht unterstützt).

### Verwendung von `Element.setHTML()` mit dem Standard-Sanitizer

In den meisten Fällen kann das Aufrufen von `Element.setHTML()` mit dem Standard-Sanitizer als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden. Der untenstehende Code demonstriert, wie die Methode verwendet wird, um die HTML-Eingabe zu reinigen, bevor sie in ein Element mit der ID `target` eingefügt wird.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Das `{{htmlelement("script")}}`-Element ist bei dem Standard-Sanitizer oder der `setHTML()`-Methode nicht erlaubt, sodass das `alert()` entfernt wird.

Beachten Sie, dass die Verwendung von `Element.setHTMLUnsafe()` mit dem Standard-Sanitizer dieselben HTML-Entitäten reinigen wird. Der Hauptunterschied ist, dass diese Methode, wenn Sie trusted types verwenden, möglicherweise weiterhin geprüft wird:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Verwenden einer Erlauben-Sanitizer-Konfiguration

Dieser Code zeigt, wie Sie `Element.setHTMLUnsafe()` mit einem erlaubten Sanitizer verwenden könnten, der nur {{htmlelement("p")}}, {{htmlelement("b")}} und {{htmlelement("div")}}-Elemente erlaubt. Alle anderen Elemente im Eingabestring würden entfernt werden.

```js
const sanitizer1 = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });
```

Beachten Sie, dass Sie in diesem Fall normalerweise `setHTML()` verwenden sollten. Sie sollten `Element.setHTMLUnsafe()` nur verwenden, wenn Sie XSS-unsichere Elemente oder Attribute zulassen müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
