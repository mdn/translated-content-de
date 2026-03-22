---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die **HTML Sanitizer API** ermöglicht es Entwicklern, HTML-Strings zu filtern, um unerwünschte Elemente, Attribute und andere HTML-Entitäten zu entfernen, wenn sie in das DOM oder ein Schatten-DOM eingefügt werden.

## Konzepte und Verwendung

Webanwendungen müssen häufig mit nicht vertrauenswürdigem HTML auf der Clientseite arbeiten, beispielsweise als Teil einer clientseitigen Templating-Lösung, beim Rendern von nutzergenerierten Inhalten oder beim Einbinden von Daten in einem Frame von einer anderen Seite.

Das Einfügen von nicht vertrauenswürdigem HTML kann eine Website gegenüber verschiedenen [Arten von Angriffen](/de/docs/Web/Security/Attacks) anfällig machen. Insbesondere funktionieren [Cross-Site-Scripting (XSS)-Angriffe](/de/docs/Web/Security/Attacks/XSS), indem sie nicht vertrauenswürdiges HTML in das DOM einfügen, das dann JavaScript im Kontext der aktuellen Herkunft ausführt – was es bösartigem Code ermöglicht, so zu laufen, als ob er von der Herkunft der Website stammt. Diese Angriffe können durch Entfernen unsicherer HTML-Elemente und -Attribute vor ihrer Einfügung in das DOM gemindert werden.

Die HTML Sanitizer API bietet eine Reihe von Methoden zum Entfernen unerwünschter HTML-Entitäten aus HTML-Eingaben, bevor sie in das DOM eingefügt werden. Diese Methoden sind in XSS-sicheren Versionen verfügbar, die die Entfernung aller unsicheren Elemente und Attribute erzwingen, sowie in potenziell unsicheren Versionen, die Entwicklern die volle Kontrolle über die erlaubten HTML-Entitäten geben.

### Sanitierungsmethoden

Die HTML Sanitizer API stellt XSS-sichere und XSS-ungesicherte Methoden zum Einfügen von HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder eine [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) bereit und zum Analysieren von HTML in ein [`Document`](/de/docs/Web/API/Document).

- Sichere Methoden
  - : [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden
  - : [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Alle Methoden nehmen das einzufügende HTML und optional einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) als Argumente. Die Sanitizer-Objekte definieren die HTML-Entitäten, die aus der Eingabe gefiltert werden, bevor sie eingefügt wird. Die [`Element`](/de/docs/Web/API/Element) Methoden sind kontextsensitiv und entfernen zusätzlich alle Elemente, die gemäß der HTML-Spezifikation im Ziel-Element nicht erlaubt sind.

Die sicheren Methoden entfernen immer XSS-gefährliche Elemente und Attribute. Wenn kein Sanitizer als Parameter übergeben wird, verwenden sie die [Standard-Sanitizer-Konfiguration](#standard-sanitizer-konfiguration), die sowohl XSS-gefährliche Elemente und Attribute entfernt, wie z. B. {{htmlelement("script")}}-Elemente und `onclick`-Ereignishandler, zusammen mit anderen, die in anderen Arten von Angriffen verwendet werden könnten, wenn sie als Benutzereingabe bereitgestellt werden. Wenn ein benutzerdefinierter Sanitizer mit einer sicheren Methode verwendet wird, wird er implizit aktualisiert, um alle nicht XSS-sicheren Elemente und Attribute zu entfernen (beachten Sie, dass der übergebene Sanitizer nicht modifiziert wird und immer noch unsichere Entitäten zulassen könnte, wenn er mit einer unsicheren Methode verwendet wird).

Die sicheren Methoden sollten anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um nicht vertrauenswürdige HTML-Inhalte einzufügen. In den meisten Fällen können Sie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) mit dem Standardsanitizer als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden. Dieselben Methoden können auch zum Einfügen vertrauenswürdiger HTML-Strings verwendet werden, die keine XSS-gefährlichen Elemente enthalten müssen.

Die XSS-ungesicherten Methoden verwenden die übergebene Sanitizer-Konfiguration. Wenn kein Sanitizer übergeben wird, werden alle HTML-Elemente und Attribute, die durch den Kontext erlaubt sind, eingefügt. Dies ist ähnlich wie die Verwendung von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), außer dass die Methode Schattenwurzeln analysiert, Elemente entfernt, die im Kontext nicht geeignet sind, und einige andere Eingaben erlaubt, die bei Verwendung der Eigenschaft nicht erlaubt sind.

Die unsicheren Methoden sollten nur mit nicht vertrauenswürdigem HTML verwendet werden, das einige XSS-ungesicherte Elemente oder Attribute enthalten muss. Dies ist immer noch unsicher, ermöglicht es Ihnen jedoch, das Risiko zu verringern, indem Sie unsichere Entitäten auf das minimale Set beschränken. Wenn Sie beispielsweise unsicheres HTML einfügen möchten, aber aus irgendeinem Grund die Eingabe den `onblur`-Handler enthalten muss, könnten Sie dies sicherer tun, indem Sie den Standard-`Sanitizer` ändern und eine unsichere Methode wie gezeigt verwenden:

```js
const sanitizer = new Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

### Sanitizer-Konfigurationen

Eine Sanitizer-Konfiguration definiert, welche HTML-Entitäten erlaubt, ersetzt oder entfernt werden, wenn der Sanitizer verwendet wird, einschließlich Elemente, Attribute, `data-*`-Attribute und Kommentare.

Es gibt zwei Mechanismen, um eine Sanitizer-Konfiguration zu definieren, von denen jeder an alle Sanitierungsmethoden übergeben werden kann:

- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist ein Wörterbuchobjekt, das Arrays für die erlaubten/unerlaubten Elemente und Attribute sowie boolesche Eigenschaften definiert, die angeben, ob Kommentare und Datenattribute erlaubt oder ausgelassen werden usw.

  Nur ein Teil der möglichen Konfigurationsoptionen kann in einer bestimmten Konfiguration angegeben werden, um Redundanzen und Mehrdeutigkeiten zu reduzieren. Der erlaubte Teil ist im Abschnitt [Erlauben- und Entfernen-Konfiguration](#erlauben-_und_entfernen-konfigurationen) weiter unten zusammengefasst und im Detail in [Gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) beschrieben.

- [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), der Methoden bereitstellt, um die Konfiguration ergonomisch zu ändern und sicherzustellen, dass sie gültig bleibt.

  Beispielsweise können Sie eine Methode verwenden, um ein erlaubtes Element hinzuzufügen, und das Element wird auch aus dem Array `replaceWithChildrenElements` (falls vorhanden) entfernt. Das Interface bietet auch Methoden, um eine Kopie der zugrunde liegenden [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurückzugeben und auch den Sanitizer so zu aktualisieren, dass er XSS-sicher ist. Es kann Normalisierungen der zur Konstruktion verwendeten Sanitizer-Konfiguration bereitstellen, was das Verständnis und die Wiederverwendbarkeit erleichtert.

Obwohl Sie jede Schnittstelle in allen Reinigungsmethoden verwenden können, ist `Sanitizer` wahrscheinlich effizienter zu teilen und wiederzuverwenden als `SanitizerConfig`.

#### Erlauben- und Entfernen-Konfigurationen

Sie können eine Konfiguration auf zwei Arten aufbauen:

- Als _Erlauben-Konfiguration_: Angabe der Elemente und/oder Attribute, die Sie im Ausgabe erlauben möchten.
- Als _Entfernen-Konfiguration_: Angabe des Sets, das in der Ausgabe nicht vorhanden sein darf.

Diese Sets werden in den Konfigurationsobjektfeldern als Arrays angegeben: `elements` und `attributes` sowie `removeElements` und `removeAttributes`. Sie dürfen nicht sowohl Erlauben- als auch Entfernen-Arrays für Elemente oder Attribute in derselben Konfiguration angeben, aber andere Kombinationen von Feldern sind erlaubt. Die folgende Tabelle zeigt die erlaubten Kombinationen.

| Element-Arrays                | Attribut-Arrays                   | Gültig? |
| ----------------------------- | --------------------------------- | ------- |
| `elements`                    | -                                 | ✔️      |
| `elements`                    | `attributes`                      | ✔️      |
| `elements`                    | `removeAttributes`                | ✔️      |
| `removeElements`              | -                                 | ✔️      |
| `removeElements`              | `attributes`                      | ✔️      |
| `removeElements`              | `removeAttributes`                | ✔️      |
| -                             | `attributes`                      | ✔️      |
| -                             | `removeAttributes`                | ✔️      |
| `elements` + `removeElements` | (irgendetwas)                     | ❌      |
| (irgendetwas)                 | `attributes` + `removeAttributes` | ❌      |
| -                             | -                                 | ✔️      |

Eine Erlauben-Konfiguration kann optional angeben, ob elementbezogene Attribute in ihrem `elements`-Array erlaubt und/oder entfernt werden sollen. Die erlaubte Konfiguration für diese lokalen Attribute hängt davon ab, ob globale `attributes` oder `removeAttributes` definiert sind. Der Abschnitt [gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) skizziert die Einschränkungen.

Im Allgemeinen ist eine "Erlauben-Konfiguration" sowohl für die Elemente als auch für die Attribute sicherer, da Sie die Elemente und/oder Attribute auflisten, die Sie möchten und von denen Sie wissen, dass sie sicher sind, anstelle aller Elemente, die gefährlich sind oder möglicherweise in Zukunft als gefährlich angesehen werden könnten. Wenn Sie ein leeres Konfigurationsobjekt angeben, wird eine leere Erlauben-Konfiguration verwendet.

##### Erlauben-Konfigurationen

Mit "Erlauben-Konfigurationen" spezifizieren Sie die Elemente und Attribute, die Sie _erlauben_ möchten (oder durch Kinderelemente ersetzen) – alle anderen Elemente/Attribute in der Eingabe werden entfernt. Dies macht es einfach zu verstehen, welche Elemente im DOM erlaubt werden, wenn das HTML analysiert wird. Sie sind nützlich, wenn Sie genau wissen, welche HTML-Entitäten Sie in einem bestimmten Kontext einfügen möchten.

Erlauben-Konfigurationen werden durch die Definition eines `Sanitizer` erstellt, das eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) umschließt, die die Arrays [`elements`](/de/docs/Web/API/SanitizerConfig#elements) und/oder [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes) enthält (und nicht die Arrays `removeElements` oder `removeAttributes`).

Zum Beispiel wird die folgende Konfiguration durch Übergeben einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) erstellt, die {{htmlelement("p")}} und {{htmlelement("div")}}-Elemente und `cite`- und `onclick`-Attribute auf jedem erlaubten Element erlaubt. Sie wird auch {{htmlelement("b")}}-Elemente durch deren Kindknoten ersetzen.

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Die gleiche Konfiguration kann auch unter Verwendung von [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden erstellt werden. Beachten Sie, dass im folgenden Code der `Sanitizer()`-Konstruktor ein leeres Objekt nimmt, das in einem `Sanitizer` resultiert, wo die zugrunde liegende Konfiguration sowohl `elements`- als auch `attributes`-Arrays enthält – mit anderen Worten, eine "Erlauben-Konfiguration".

```js
// Create empty sanitizer
const sanitizer = new Sanitizer({});

// Use Sanitizer methods to update the properties.
sanitizer.allowElement("p");
sanitizer.allowElement("div");
sanitizer.replaceElementWithChildren("b");
sanitizer.allowAttribute("cite");
sanitizer.allowAttribute("onclick");
```

##### Entfernen-Konfigurationen

In "Entfernen-Konfigurationen" spezifizieren Sie die HTML-Elemente und Attribute, die Sie entfernen möchten: Alle anderen Elemente und Attribute sind durch den Sanitizer erlaubt (können jedoch blockiert werden, wenn Sie eine sichere Sanitizer-Methode verwenden oder wenn das Element im Kontext nicht erlaubt ist).

Entfernen-Konfigurationen werden unter Verwendung eines [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) erstellt, das die Arrays [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) und/oder [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes) enthält (und nicht die Arrays `elements` oder `attributes`).

Zum Beispiel würde die folgende `Sanitizer`-Konfiguration dieselben Elemente entfernen, die im vorherigen Code erlaubt waren:

```js
const sanitizer = new Sanitizer({
  removeElements: ["p", "div"],
  removeAttributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

Die Konfiguration kann auch unter Verwendung von [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden erstellt werden. Um dies zu einer "Entfernen-Konfiguration" zu machen, müssen wir das Array `removeElements` oder `removeAttributes` beim Erstellen des Objekts deklarieren (wenn nur ein Array angegeben ist, wird das andere im Rahmen der Normalisierung definiert).

```js
const sanitizer = new Sanitizer({
  removeElements: [],
});
sanitizer.removeElement("p");
sanitizer.removeElement("div");
sanitizer.replaceElementWithChildren("b");
sanitizer.removeAttribute("cite");
sanitizer.removeAttribute("onclick");
```

#### Hinzufügen und Entfernen von `Sanitizer`-Konfigurationen

[`Sanitizer`](/de/docs/Web/API/Sanitizer) wird empfohlen, wenn Sie ein Konfigurationsobjekt verwenden, das Sie möglicherweise wiederverwenden oder ändern möchten. Ob der Sanitizer eine Erlauben- oder Entfernen-Konfiguration hat, hängt von der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ab, die beim Erstellen des Objekts übergeben wird. Zum Beispiel, wenn Sie ein Konfigurationsobjekt übergeben, das das `elements`- oder `attributes`-Array (oder ein leeres Objekt) hat, wird der Sanitizer eine Erlauben-Konfiguration haben.

In den obigen Beispielen haben wir eine Erlauben-Konfiguration erstellt und dann [`allowElement()`](/de/docs/Web/API/Sanitizer/allowElement), [`allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) und [`replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) aufgerufen, um zusätzliche Elemente und Attribute zu erlauben, und similarly haben wir eine Entfernen-Konfiguration erstellt und [`removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) und [`removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) aufgerufen, um zusätzliche zu entfernende Elemente zu spezifizieren.

Sie können auch die Erlauben-Methoden auf einer Entfernen-Konfiguration aufrufen und die Entfernen-Methoden auf einer Erlauben-Konfiguration — aber sie verhalten sich unterschiedlich. Wenn Sie die Erlauben-Methoden auf einem Erlauben-Sanitizer aufrufen, werden die angegebenen Elemente und Attribute zum zugrunde liegenden `elements`- und `attributes`-Array hinzugefügt. Wenn Sie diese Methoden jedoch auf einem Entfernen-Sanitizer aufrufen, gibt es kein `elements`- und `attributes`-Array; stattdessen wird das angegebene Element aus den entsprechenden `removeElements`- oder `removeAttributes`-Arrays entfernt, sofern vorhanden. Dies funktioniert, weil das Erlauben eines Elements in einem Erlauben-Sanitizer das Gleiche ist wie das "Nicht-Entfernen" eines Elements in einem Entfernen-Sanitizer.

Sie können alle `Sanitizer`-Methoden auf einem Erlauben- oder Entfernen-Sanitizer aufrufen, und die Methode wird alle möglichen Änderungen vornehmen, die zu einer gültigen Konfiguration führen. Zum Beispiel, wenn Sie ein Element hinzufügen, wird die Methode es entweder zu `elements` hinzufügen oder aus `removeElements` entfernen, wenn vorhanden, abhängig von der Art des Sanitizer, und es auch aus dem [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements)-Array entfernen, wenn vorhanden.

Einige Operationen, die bei einer Erlauben-Konfiguration möglich sind, sind bei einer Entfernen-Konfiguration nicht möglich. Beispielsweise werden elementbezogene Attribute im `elements`-Array definiert, das bei einem Entfernen-Sanitizer nicht vorhanden ist.

Die Methoden geben `true` oder `false` zurück, um anzuzeigen, ob sie die zugrunde liegende Konfiguration geändert haben. Wenn Sie beispielsweise `allowElement()` auf einer Erlauben-Konfiguration aufrufen und das angegebene Element nicht vorhanden ist, wird es dem `elements`-Array hinzugefügt, und die Methode gibt `true` zurück. Wenn das Element jedoch bereits vorhanden ist, würde die Methode `false` zurückgeben. Beachten Sie, dass wenn Sie die gleiche Methode verwenden, um ein elementbezogenes Attribut zu setzen, diese `false` zurückgeben würde, wenn sie auf einem Entfernen-Sanitizer aufgerufen wird, da die Änderung nicht vorgenommen werden kann.

### Eingebaute Konfigurationen

#### XSS-sichere Baseline-Konfiguration

Die XSS-sichere Baseline-Konfiguration definiert die Elemente, die aus einer Eingabe entfernt werden müssen, um sie XSS-sicher zu machen:

- {{htmlelement("embed")}}, {{htmlelement("frame")}}, {{htmlelement("iframe")}}, {{htmlelement("object")}}, {{htmlelement("script")}} und {{SVGElement("use")}}.
- Alle Ereignishandler-Attribute, wie `onafterprint`, `onbeforeinput` und so weiter.

Die Konfiguration wird automatisch auf [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und die anderen [sicheren Sanitierungsmethoden](#sanitierungsmethoden) angewendet und stellt sicher, dass XSS-unsichere Elemente aus der Ausgabe entfernt werden, selbst wenn sie von einem übergebenen Sanitizer erlaubt werden. Sie können auch [`removeUnsafe`](/de/docs/Web/API/Sanitizer/removeUnsafe) auf einer [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Instanz aufrufen, um diese Konfiguration anzuwenden und sie XSS-sicher zu machen.

#### Standard-Sanitizer-Konfiguration

Die Standard-Sanitizer-Konfiguration ist restriktiver als die XSS-sichere Baseline. Sie definiert den Sanitizer, der verwendet wird, wenn Sie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) oder die anderen [sicheren Sanitierungsmethoden](#sanitierungsmethoden) ohne Übergeben eines Sanitizer-Objekts aufrufen. Es ist auch die Konfiguration, die vom [`Sanitizer()`-Konstruktor](/de/docs/Web/API/Sanitizer/Sanitizer) zurückgegeben wird, wenn keine Konfiguration festgelegt ist.

Die Konfiguration entfernt die folgenden Arten von Elementen:

1. Solche, die als XSS-unsicher bekannt sind (wie in der [XSS-sicheren Baseline-Konfiguration](#xss-sichere_baseline-konfiguration) beschrieben).
2. Zusätzliche Elemente, die in Clickjacking, Spoofing oder anderen Angriffen verwendet werden könnten.
3. Kommentare und `data-*`-Attribute.

Daher stellt es einen Sanitizer mit einer minimalen Angriffsoberfläche zur Verfügung, der dennoch für die Mehrheit der Sanitierungsanwendungsfälle geeignet ist.

Für eine Liste der erlaubten Elemente und Attribute sehen Sie [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).

### Sanitierung und Trusted Types

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) stellt Mechanismen zur Verfügung, um sicherzustellen, dass Eingaben durch eine vom Benutzer angegebene Transformationsfunktion geleitet werden, bevor sie an eine API übergeben werden, die diese Eingaben möglicherweise ausführt. Diese Transformationsfunktion wird am häufigsten zum Sanitisieren der Eingabe verwendet, muss dies jedoch nicht: Der Hauptzweck der API ist es, es Entwicklern zu erleichtern, den Sanitisierungscode zu überprüfen, nicht zu definieren, wie oder ob die Sanitisierung durchgeführt wird.

Die sicheren HTML-Sanitierungsmethoden verwenden keine trusted types. Da sie immer alle XSS-unsicheren Elemente filtern, bevor das Eingabe-HTML eingefügt wird, ist es nicht notwendig, die Eingabezeichenfolge zu sanitisieren oder die Methoden zu überprüfen.

Die unsicheren HTML-Sanitierungsmethoden hingegen können nicht vertrauenswürdiges HTML injizieren, abhängig vom Sanitizer, und funktionieren daher mit trusted types. Die Methoden können entweder eine Zeichenkette oder einen `TrustedType` als Eingabe akzeptieren. Wenn auch ein Sanitizer übergeben wird, wird zuerst die Transformationsfunktion ausgeführt und dann der Sanitizer.

Beachten Sie, dass das Verhalten der Transformationsfunktion in diesem Fall von der Website-Richtlinie abhängt (die möglicherweise alle Verwendung der unsicheren Methoden ablehnt).

### Drittanbieter-Sanitierungsbibliotheken

Vor der Sanitizer API haben Entwickler typischerweise Eingabezeichenketten mit Drittanbieterbibliotheken wie [DOMPurify](https://github.com/cure53/DOMPurify) gefiltert, möglicherweise aufgerufen aus Transformationsfunktionen in trusted types.

Diese sollten nicht notwendig sein, wenn die sicheren HTML-Sanitierungsmethoden verwendet werden, da die API in den Browser integriert ist und mehr über den Analysekontext und den zulässigen Code weiß als externe Parser-Bibliotheken.

Sie können jedoch je nach Website-Trusted-Type-Richtlinien mit den unsicheren HTML-Methoden und trusted types nützlich sein.

## Schnittstellen

- [`Sanitizer`](/de/docs/Web/API/Sanitizer)
  - : Ein wiederverwendbares Sanitizer-Konfigurationsobjekt, das definiert, welche HTML-Elemente und Attribute erlaubt/entfernt werden sollen, wenn nicht vertrauenswürdige HTML-Zeichenketten sanitisiert werden. Dies wird in den Methoden verwendet, die HTML-Zeichenketten in das DOM oder Dokument einfügen.
- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)
  - : Ein Wörterbuch, das eine Sanitizer-Konfiguration definiert. Diese kann an den gleichen Stellen wie [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet werden, ist jedoch wahrscheinlich weniger effizient zu verwenden und wiederzuverwenden.

## Erweiterungen zu anderen Schnittstellen

### XSS-sichere Methoden

- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)
  - : Analysiert eine HTML-Zeichenkette in einen Knotenbaum und verwirft alle Elemente, die im Kontext des Elements ungültig sind. Dann verwirft es alle Elemente und Attribute, die durch die Sanitizer-Konfiguration nicht erlaubt sind, und alle, die als XSS-unsicher angesehen werden (selbst wenn sie durch die Konfiguration erlaubt sind). Der Unterbaum wird dann als Unterbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Analysiert eine HTML-Zeichenkette in einen Knotenbaum. Dann verwirft es alle Elemente und Attribute, die durch die Sanitizer-Konfiguration nicht erlaubt sind, und alle, die als XSS-unsicher angesehen werden (selbst wenn sie durch die Konfiguration erlaubt sind). Der Unterbaum wird dann als Unterbaum der `ShadowRoot` eingefügt.
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Analysiert eine HTML-Zeichenkette in einen Knotenbaum. Dann verwirft es alle Elemente und Attribute, die durch die Sanitizer-Konfiguration nicht erlaubt sind, und alle, die als XSS-unsicher angesehen werden (selbst wenn sie durch die Konfiguration erlaubt sind). Der Unterbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

### XSS-ungesicherte Methoden

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Analysiert eine HTML-Zeichenkette in einen Knotenbaum und verwirft alle Elemente, die im Kontext des Elements ungültig sind. Dann verwirft es alle Elemente und Attribute, die durch den Sanitizer nicht erlaubt sind: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt. Der Unterbaum wird dann als Unterbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Analysiert eine HTML-Zeichenkette in einen Knotenbaum. Dann verwirft es alle Elemente und Attribute, die durch den Sanitizer nicht erlaubt sind: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt. Der Unterbaum wird dann als Unterbaum der `ShadowRoot` eingefügt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Analysiert eine HTML-Zeichenkette in einen Knotenbaum. Dann verwirft es alle Elemente und Attribute, die durch den Sanitizer nicht erlaubt sind: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt. Der Unterbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

## Beispiele

Die folgenden Beispiele zeigen, wie die Sanitizer-API mit dem _Standard_-Sanitizer verwendet wird.

### Verwendung von `Element.setHTML()` mit dem Standard-Sanitizer

In den meisten Fällen kann das Aufrufen von `Element.setHTML()` ohne Angabe eines Sanitizers als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden. Der folgende Code zeigt, wie die Methode verwendet wird, um den HTML-Eingang zu sanitisieren, bevor er in ein Element mit der ID `target` eingefügt wird.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Das `{{htmlelement("script")}}`-Element wird nicht durch den Standard-Sanitizer noch durch die `setHTML()`-Methode erlaubt, sodass das `alert()` entfernt wird.

Beachten Sie, dass die Verwendung von `Element.setHTMLUnsafe()` mit dem Standard-Sanitizer dieselben HTML-Entitäten sanitisieren wird. Der Hauptunterschied besteht darin, dass diese Methode mit Trusted Types verwendet werden kann und möglicherweise immer noch geprüft wird:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Verwendung einer Erlauben-Sanitizer-Konfiguration

Dieser Code zeigt, wie Sie `Element.setHTMLUnsafe()` mit einer Erlauben-Sanitizer-Konfiguration verwenden könnten, die nur {{htmlelement("p")}}, {{htmlelement("b")}} und {{htmlelement("div")}}-Elemente erlaubt. Alle anderen Elemente in der Eingabezeichenkette würden entfernt.

```js
const sanitizer = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

Beachten Sie, dass Sie in diesem Fall normalerweise `setHTML()` verwenden sollten. Sie sollten `Element.setHTMLUnsafe()` nur verwenden, wenn Sie XSS-unsichere Elemente oder Attribute erlauben müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
