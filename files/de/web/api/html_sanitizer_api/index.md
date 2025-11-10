---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: d4692513193a8a94d2e0e5a03625a0adb02258d7
---

{{DefaultAPISidebar("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **HTML Sanitizer API** ermöglicht Entwicklern, HTML-Strings zu filtern, um unerwünschte Elemente, Attribute und andere HTML-Entitäten zu entfernen, wenn sie in das DOM oder ein Shadow DOM eingefügt werden.

## Konzepte und Verwendung

Webanwendungen müssen häufig mit nicht vertrauenswürdigem HTML auf der Client-Seite arbeiten, beispielsweise im Rahmen einer Client-seitigen Templating-Lösung, beim Rendern von nutzergenerierten Inhalten oder wenn Daten in einem Frame von einer anderen Seite eingefügt werden.

Das Injizieren von nicht vertrauenswürdigem HTML kann eine Seite anfällig für verschiedene [Arten von Angriffen](/de/docs/Web/Security/Attacks) machen. Insbesondere [Cross-Site-Scripting (XSS)-Angriffe](/de/docs/Web/Security/Attacks/XSS) funktionieren, indem sie nicht vertrauenswürdiges HTML in das DOM einfügen, das dann JavaScript im Kontext des aktuellen Ursprungs ausführt — was es bösartigem Code ermöglicht, so zu laufen, als wäre er vom Ursprung der Seite geliefert worden. Diese Angriffe können durch das Entfernen unsicherer HTML-Elemente und -Attribute gemindert werden, bevor sie in das DOM eingefügt werden.

Die HTML Sanitizer API bietet eine Reihe von Methoden zum Entfernen unerwünschter HTML-Entitäten aus HTML-Eingaben, bevor sie in das DOM eingefügt werden. Diese stehen in XSS-sicheren Versionen zur Verfügung, die die Entfernung aller unsicheren Elemente und Attribute erzwingen, sowie in potenziell unsicheren Versionen, die den Entwicklern volle Kontrolle über die erlaubten HTML-Entitäten geben.

### Sanitierungsmethoden

Die HTML Sanitizer API bietet XSS-sichere und XSS-unsichere Methoden zum Injizieren von HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), sowie zum Parsen von HTML in ein [`Document`](/de/docs/Web/API/Document).

- Sichere Methoden: [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML), und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe), und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Alle Methoden nehmen das zu injizierende HTML und eine optionale [Sanitizer-Konfiguration](#sanitizer-konfiguration) als Argumente entgegen. Die Konfiguration definiert die HTML-Entitäten, die aus der Eingabe herausgefiltert werden, bevor sie injiziert wird. Die [`Element`](/de/docs/Web/API/Element)-Methoden sind kontextbewusst und entfernen zusätzlich alle Elemente, die die HTML-Spezifikation im Ziel-Element nicht erlaubt.

Die sicheren Methoden entfernen immer XSS-unsichere Elemente und Attribute. Wird kein Sanitizer als Parameter übergeben, verwenden sie die Standard-Sanitizer-Konfiguration, die alle Elemente und Attribute außer denjenigen erlaubt, die als unsicher bekannt sind, wie z. B. {{htmlelement("script")}}-Elemente und `onclick`-Ereignishandler. Wenn ein benutzerdefinierter Sanitizer verwendet wird, wird er implizit aktualisiert, um alle Elemente und Attribute zu entfernen, die nicht XSS-sicher sind (beachten Sie, dass der übergebene Sanitizer nicht verändert wird und möglicherweise weiterhin unsichere Entitäten erlaubt, wenn er mit einer unsicheren Methode verwendet wird).

Die sicheren Methoden sollten anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) zum Injizieren von nicht vertrauenswürdigem HTML-Inhalt verwendet werden. Zum Beispiel können Sie in den meisten Fällen `Element.setHTML()` mit dem Standardsanitizer als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden. Die gleichen Methoden können auch zum Injizieren von vertrauenswürdigen HTML-Strings verwendet werden, die keine XSS-unsicheren Elemente enthalten müssen.

Die XSS-unsicheren Methoden verwenden die übergebene Sanitizer-Konfiguration als Argument. Wenn kein Sanitizer übergeben wird, werden alle vom Kontext erlaubten HTML-Elemente und Attribute injiziert. Dies ähnelt der Verwendung von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), mit dem Unterschied, dass die Methode Schattenwurzeln parst, Elemente entfernt, die im Kontext nicht geeignet sind, und einige andere Eingaben erlaubt, die mit der Eigenschaft nicht erlaubt sind.

Die unsicheren Methoden sollten nur mit nicht vertrauenswürdigem HTML verwendet werden, das einige XSS-unsichere Elemente oder Attribute enthalten muss. Dies bleibt unsicher, ermöglicht Ihnen jedoch, das Risiko zu minimieren, indem Sie unsichere Entitäten auf das minimal notwendige Set beschränken. Wenn Sie beispielsweise unsicheres HTML injizieren möchten, aus irgendeinem Grund aber der Eingabe der `onblur`-Handler enthalten muss, könnten Sie dies sicherer durch Änderung des Standard-Sanitizers und Verwendung einer unsicheren Methode tun, wie gezeigt:

```js
const sanitizer = new Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

### Sanitizer-Konfiguration

Eine Sanitizer-Konfiguration definiert, welche HTML-Entitäten erlaubt, ersetzt oder entfernt werden, wenn der Sanitizer verwendet wird, einschließlich Elementen, Attributen, Datenattributen und Kommentaren.

Es gibt zwei sehr eng verwandte Schnittstellen für Sanitizer-Konfigurationen, von denen jede in allen Sanitisierungsmethoden übergeben werden kann.

- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist ein Dictionary-Objekt, das Arrays von Elementen oder Attributen definiert, die erlaubt oder nicht erlaubt sind, wenn die Konfiguration verwendet wird, sowie Eigenschaften, die angeben, ob Kommentare und Datenattribute erlaubt oder weggelassen werden.
- [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), der Methoden bietet, um Entitäten ergonomisch und konsistent zu den verschiedenen Listen in der Konfiguration hinzuzufügen und zu entfernen. Beispielsweise kann eine Methode verwendet werden, um ein erlaubtes Attribut hinzuzufügen, und es wird auch das Attribut aus dem nicht erlaubten Array entfernt (falls vorhanden). Die Schnittstelle bietet auch Methoden, um eine Kopie der zugrunde liegenden [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurückzugeben und den Sanitizer so zu aktualisieren, dass er XSS-sicher ist. Sie kann Normalisierungen der zur Konstruktion verwendeten Sanitizer-Konfiguration bereitstellen, was es einfacher macht, sie zu verstehen und wiederzuverwenden.

Obwohl Sie jede Schnittstelle in den Sanitisierungsmethoden verwenden können, ist `Sanitizer` wahrscheinlich effizienter, um geteilt und wiederverwendet zu werden als `SanitizerConfig`.

#### Erlauben- und Entfernen-Konfigurationen

Sie können eine Konfiguration auf zwei Arten aufbauen: Erlauben-Konfigurationen und Entfernen-Konfigurationen.

In "Erlauben-Konfigurationen" geben Sie die Elemente und Attribute an, die Sie _erlauben_ möchten (oder durch Kindelemente ersetzen wollen): alle anderen Elemente/Attribute in der Eingabe werden entfernt. Zum Beispiel erlaubt die folgende Konfiguration nur {{htmlelement("p")}}- und {{htmlelement("div")}}-Elemente sowie `cite`- und `onclick`-Attribute bei jedem Element. Sie wird auch {{htmlelement("b")}}-Elemente durch deren Knoten austauschen, um effektiv den Stil ihres verschachtelten Inhalts zu entfernen.

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Bei Verwendung einer Erlauben-Konfiguration ist es einfach zu verstehen, welche Elemente im DOM erlaubt sein werden, wenn das HTML geparst wird. Diese Konfigurationen sind nützlich, wenn Sie genau wissen, welche HTML-Entitäten Sie in einem bestimmten Kontext einfügen möchten.

In "Entfernen-Konfigurationen" geben Sie die HTML-Elemente und Attribute an, die Sie entfernen möchten: alle anderen Elemente und Attribute sind vom Sanitizer erlaubt (können jedoch blockiert sein, wenn Sie eine sichere Sanitizer-Methode verwenden oder wenn das Element im Kontext nicht erlaubt ist). Zum Beispiel würde der folgende Sanitizer die gleichen Elemente entfernen, die in der vorherigen Konfiguration erlaubt wurden:

```js
const sanitizer = new Sanitizer({
  removeElements: ["p", "div", "b"],
  removeAttributes: ["cite", "onclick"],
});
```

Entfernen-Konfigurationen sind nützlich, wenn Sie die Standardeinstellungen des Sanitizers verwenden möchten, aber möglicherweise einige zusätzliche Entitäten einschränken möchten.

Die gleichzeitige Verwendung von Erlauben- und Entfernen-Konfigurationen wird nicht empfohlen, da sie die Konfiguration schwer verständlich und weniger effizient zu parsen macht. Beachten Sie, dass eine Konfiguration mit sowohl erlaubten als auch entfernten Entitäten immer auf eine Erlauben-Konfiguration reduziert werden kann, in der alle Entitäten aus der ursprünglichen Entfernen-Liste entfernt wurden.

Wenn Sie eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) mit sowohl Erlauben- als auch Entfernen-Konfigurationen an die Sanitizer-Methoden übergeben, werfen diese einen `TypeError`. Es ist möglich, eine Konfiguration mit sowohl Erlauben- als auch Entfernen-Listen zu erstellen, wenn [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet wird. Zuerst werden die Erlauben-Listen geparst, falls sie Einträge enthalten, und dann die Entfernen-Listen. Die Entfernen-Listen haben wenig Einfluss, wenn es Einträge in der Erlauben-Liste gibt.

### Sanitierung und Trusted Types

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, die sicherstellen, dass Eingaben vor der Weitergabe an eine API, die diese Eingaben möglicherweise ausführt, durch eine vom Benutzer angegebene Transformationsfunktion geführt werden. Diese Transformationsfunktion wird meist verwendet, um die Eingabe zu sanitisieren, muss dies aber nicht: Der Hauptzweck der API ist es, es Entwicklern zu erleichtern, Sanitisierungscode zu überprüfen, nicht zu definieren, wie oder ob die Sanitisierung erfolgt.

Die sicheren HTML-Sanitisierungsmethoden müssen nicht mit Trusted Types arbeiten. Da sie immer alle XSS-unsicheren Entitäten filtern, bevor HTML-Eingaben injiziert werden, gibt es keinen Grund, den Eingabestring zu sanitisieren oder die Methoden zu überprüfen.

Die unsicheren HTML-Sanitisierungsmethoden können jedoch je nach Sanitizer nicht vertrauenswürdiges HTML injizieren und arbeiten daher mit Trusted Types. Die Methoden können entweder einen String oder ein `TrustedType` als Eingabe nehmen. Wenn zusätzlich ein Sanitizer bereitgestellt wird, wird die Transformationsfunktion zuerst ausgeführt und dann der Sanitizer.

Beachten Sie, dass die Transformationsfunktion den Eingabestring in diesem Fall nicht sanitisieren muss (obwohl sie es kann), da Sie die Sanitizer-API dafür verwenden können. Was Trusted Types in diesem Fall bietet, sind Informationen darüber, wo potenziell unsichere Strings injiziert werden, was es erleichtert, diese zu lokalisieren und zu überprüfen, ob der Sanitizer angemessen konfiguriert ist.

### Drittanbieter-Sanitizer-Bibliotheken

Vor der Sanitizer API filterten Entwickler in der Regel Eingabestrings mit Hilfe von Drittanbieter-Bibliotheken wie [DOMPurify](https://github.com/cure53/DOMPurify), vielleicht aufgerufen durch Transformationsfunktionen in Trusted Types.

Es sollte nicht mehr notwendig sein, diese Bibliotheken zu verwenden, wenn nicht vertrauenswürdige HTML-Strings injiziert werden. Die API ist in den Browser integriert und sich des Parsing-Kontexts und dessen, welcher Code ausgeführt werden darf, bewusster als externe Parser-Bibliotheken es sein können.

## Schnittstellen

- [`Sanitizer`](/de/docs/Web/API/Sanitizer) {{experimental_inline}}
  - : Ein wiederverwendbares Sanitizer-Konfigurationsobjekt, das definiert, welche Elemente und Attribute erlaubt/entfernt werden sollen, wenn nicht vertrauenswürdige HTML-Strings sanitisiert werden. Dies wird in den Methoden verwendet, die HTML-Strings in das DOM oder Dokument einfügen.
- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)
  - : Ein Dictionary, das eine Sanitizer-Konfiguration definiert. Dies kann an denselben Stellen wie [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet werden, ist aber wahrscheinlich weniger effizient in der Verwendung und Wiederverwendung.

## Erweiterungen anderer Schnittstellen

### XSS-sichere Methoden

- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)
  - : Parst einen String von HTML in eine Unterstruktur von Knoten, wobei alle Elemente, die im Kontext des Elements ungültig sind, entfernt werden. Dann werden alle Elemente und Attribute entfernt, die von der Sanitizer-Konfiguration nicht erlaubt sind und als XSS-unsicher angesehen werden (selbst wenn sie von der Konfiguration erlaubt sind). Die Unterstruktur wird dann als Unterstruktur des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Parst einen String von HTML in eine Unterstruktur von Knoten. Dann werden alle Elemente und Attribute entfernt, die von der Sanitizer-Konfiguration nicht erlaubt sind und als XSS-unsicher angesehen werden (selbst wenn sie von der Konfiguration erlaubt sind). Die Unterstruktur wird dann als Unterstruktur des `ShadowRoot` eingefügt.
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Parst einen String von HTML in eine Unterstruktur von Knoten. Dann werden alle Elemente und Attribute entfernt, die von der Sanitizer-Konfiguration nicht erlaubt sind und als XSS-unsicher angesehen werden (selbst wenn sie von der Konfiguration erlaubt sind). Die Unterstruktur wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

### XSS-unsichere Methoden

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst einen String von HTML in eine Unterstruktur von Knoten, wobei alle Elemente, die im Kontext des Elements ungültig sind, entfernt werden. Dann werden alle Elemente und Attribute entfernt, die vom Sanitizer nicht erlaubt sind: Wenn kein Sanitizer angegeben wird, sind alle Elemente erlaubt. Die Unterstruktur wird dann als Unterstruktur des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst einen String von HTML in eine Unterstruktur von Knoten. Dann werden alle Elemente und Attribute entfernt, die vom Sanitizer nicht erlaubt sind: Wenn kein Sanitizer angegeben wird, sind alle Elemente erlaubt. Die Unterstruktur wird dann als Unterstruktur des `ShadowRoot` eingefügt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Parst einen String von HTML in eine Unterstruktur von Knoten. Dann werden alle Elemente und Attribute entfernt, die vom Sanitizer nicht erlaubt sind: Wenn kein Sanitizer angegeben wird, sind alle Elemente erlaubt. Die Unterstruktur wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

## Beispiele

Die folgenden Beispiele zeigen, wie die Sanitizer API mit dem _default_ Sanitizer verwendet wird (zum Zeitpunkt der Erstellung werden Konfigurationsoperationen noch nicht unterstützt).

### Verwendung von `Element.setHTML()` mit dem Standard-Sanitizer

In den meisten Fällen kann `Element.setHTML()` mit dem Standard-Sanitizer als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden. Der untenstehende Code demonstriert, wie die Methode verwendet wird, um die HTML-Eingabe zu sanitieren, bevor sie in ein Element mit der ID `target` injiziert wird.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Das `{{htmlelement("script")}}`-Element ist vom Standard-Sanitizer oder der `setHTML()`-Methode nicht erlaubt, sodass das `alert()` entfernt wird.

Beachten Sie, dass die Verwendung von `Element.setHTMLUnsafe()` mit dem Standardsanitizer dieselben HTML-Entitäten sanitisiert. Der Hauptunterschied besteht darin, dass diese Methode mit Trusted Types möglicherweise immer noch geprüft wird:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Verwendung einer Erlauben-Sanitizer-Konfiguration

Dieser Code zeigt, wie Sie `Element.setHTMLUnsafe()` mit einem Erlauben-Sanitizer verwenden könnten, der nur {{htmlelement("p")}}, {{htmlelement("b")}} und {{htmlelement("div")}}-Elemente erlaubt. Alle anderen Elemente im Eingabestring würden entfernt.

```js
const sanitizer = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

Beachten Sie, dass Sie in diesem Fall normalerweise `setHTML()` verwenden sollten. Sie sollten `Element.setHTMLUnsafe()` nur verwenden, wenn Sie XSS-unsichere Elemente oder Attribute erlauben müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
