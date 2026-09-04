---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die **HTML Sanitizer API** ermöglicht es Entwicklern, HTML-Zeichenfolgen zu filtern und unerwünschte Elemente, Attribute und andere HTML-Entitäten zu entfernen, wenn sie in den DOM oder einen Shadow-DOM eingefügt werden.

## Konzepte und Verwendung

Webanwendungen müssen häufig mit nicht vertrauenswürdigem HTML auf der Clientseite arbeiten, beispielsweise als Teil einer clientseitigen Templating-Lösung, beim Rendern von nutzergenerierten Inhalten oder beim Einfügen von Daten in einen Rahmen von einer anderen Seite.

Das Einfügen von nicht vertrauenswürdigem HTML kann eine Seite anfällig für verschiedene [Arten von Angriffen](/de/docs/Web/Security/Attacks) machen. Insbesondere [Cross-Site-Scripting (XSS)-Angriffe](/de/docs/Web/Security/Attacks/XSS) funktionieren, indem nicht vertrauenswürdiges HTML in den DOM eingefügt wird, das dann JavaScript im Kontext der aktuellen Quelle ausführt — wodurch bösartiger Code ausgeführt wird, als ob er von der Quelle der Website bereitgestellt wurde. Diese Angriffe können durch das Entfernen unsicherer HTML-Elemente und Attribute gemindert werden, bevor sie in den DOM eingefügt werden.

Die HTML Sanitizer API stellt mehrere Methoden zum Entfernen unerwünschter HTML-Entitäten aus HTML-Eingaben bereit, bevor diese in den DOM eingefügt werden. Diese Methoden gibt es in XSS-sicheren Versionen, die die Entfernung aller unsicheren Elemente und Attribute erzwingen, und potenziell unsicheren Versionen, die den Entwicklern volle Kontrolle über die erlaubten HTML-Entitäten geben.

### Säuberungsmethoden

Die HTML Sanitizer API bietet XSS-sichere und XSS-unsichere Methoden zum Einfügen von HTML-Zeichenfolgen in ein [`Element`](/de/docs/Web/API/Element) oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) sowie zum Parsen von HTML in ein [`Document`](/de/docs/Web/API/Document).

- Sichere Methoden
  - : [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden
  - : [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Alle Methoden akzeptieren das einzufügende HTML sowie optional einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) als Argumente. Die Sanitizer-Objekte definieren die HTML-Entitäten, die aus der Eingabe gefiltert werden, bevor sie eingefügt wird. Die [`Element`](/de/docs/Web/API/Element)-Methoden sind kontextbewusst und entfernen zusätzlich alle Elemente, die im Ziel-Element laut HTML-Spezifikation nicht erlaubt sind.

Die sicheren Methoden entfernen immer XSS-gefährliche Elemente und Attribute. Wenn kein Sanitizer als Parameter übergeben wird, verwenden sie die [Standard-Sanitizer-Konfiguration](#standard-sanitizer-konfiguration), die sowohl XSS-gefährliche Elemente als auch Attribute entfernt, wie z.B. {{htmlelement("script")}}-Elemente und `onclick`-Ereignishandler, sowie weitere, die bei Benutzereingaben in anderen Arten von Angriffen verwendet werden könnten. Wenn ein benutzerdefinierter Sanitizer mit einer sicheren Methode verwendet wird, wird er implizit aktualisiert, um alle nicht XSS-sicheren Elemente und Attribute zu entfernen (beachten Sie, dass der übergebene Sanitizer nicht verändert wird und möglicherweise weiterhin unsichere Entitäten erlaubt, wenn er mit einer unsicheren Methode verwendet wird).

Die sicheren Methoden sollten anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um nicht vertrauenswürdige HTML-Inhalte einzufügen. Zum Beispiel können Sie in den meisten Fällen [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) mit dem Standardsanitizer als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden. Dieselben Methoden können auch verwendet werden, um vertrauenswürdige HTML-Zeichenfolgen einzufügen, die keine XSS-gefährlichen Elemente enthalten müssen.

Die XSS-unsicheren Methoden verwenden jede Sanitizer-Konfiguration, die als Argument übergeben wird. Wenn kein Sanitizer übergeben wird, werden alle HTML-Elemente und Attribute, die im Kontext erlaubt sind, eingefügt. Dies ähnelt der Verwendung von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), außer dass die Methode Shadow-Roots parst, Elemente entfernt, die im Kontext nicht geeignet sind, und einige andere Eingaben erlaubt, die nicht erlaubt sind, wenn die Eigenschaft verwendet wird.

Die unsicheren Methoden sollten nur mit nicht vertrauenswürdigem HTML verwendet werden, das einige XSS-gefährliche Elemente oder Attribute enthalten muss. Dies ist immer noch unsicher, ermöglicht es Ihnen jedoch, das Risiko zu verringern, indem Sie unsichere Entitäten auf das minimale Set beschränken. Zum Beispiel, wenn Sie unsicheres HTML injizieren möchten, aber aus irgendeinem Grund die Eingabe den `onblur`-Handler enthalten muss, könnten Sie dies sicherer tun, indem Sie den Standardsanitizer ändern und eine unsichere Methode wie folgt verwenden:

```js
const sanitizer = new Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

### Sanitizer-Konfigurationen

Eine Sanitizer-Konfiguration definiert, welche HTML-Entitäten erlaubt, ersetzt oder entfernt werden, wenn der Sanitizer verwendet wird, einschließlich Elemente, Attribute, `data-*` Attribute und Kommentare.

Es gibt zwei Mechanismen zur Definition einer Sanitizer-Konfiguration, die beide an alle Säuberungsmethoden übergeben werden können:

- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist ein Wörterbuch-Objekt, das Arrays für die erlaubten/nicht erlaubten Elemente und Attribute definiert und boolesche Eigenschaften, die angeben, ob Kommentare und Datenattribute erlaubt oder weggelassen werden sollen, und so weiter.

  Nur ein Teil der möglichen Konfigurationsoptionen kann in einer bestimmten Konfiguration angegeben werden, um Redundanz und Mehrdeutigkeit zu reduzieren. Der erlaubte Teil ist im Abschnitt [Erlauben und Entfernen von Konfigurationen](#erlauben_und_entfernen_von_konfigurationen) weiter unten zusammengefasst und wird im Detail unter [Gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) beschrieben.

- [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die Methoden bereitstellt, um die Konfiguration ergonomisch zu ändern und sicherzustellen, dass sie gültig bleibt.

  Zum Beispiel können Sie eine Methode verwenden, um ein erlaubtes Element hinzuzufügen, und es wird auch das Element aus dem `replaceWithChildrenElements`-Array entfernen (falls vorhanden). Die Schnittstelle bietet auch Methoden, um eine Kopie der zugrunde liegenden [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurückzugeben und den Sanitizer so zu aktualisieren, dass er XSS-sicher ist. Sie kann Normalisierungen der Sanitizer-Konfiguration bereitstellen, die zur Erstellung verwendet wurde, wodurch sie leichter zu verstehen und wiederzuverwenden ist.

Obwohl Sie jede Schnittstelle in jeder der Säuberungsmethoden verwenden können, ist `Sanitizer` wahrscheinlich effizienter, um geteilt und wiederverwendet zu werden als `SanitizerConfig`.

#### Erlauben und Entfernen von Konfigurationen

Sie können eine Konfiguration auf zwei Arten aufbauen:

- Als _Erlauben-Konfiguration_: Festlegung der Menge an Elementen und/oder Attributen, die Sie in der Ausgabe zulassen.
- Als _Entfernen-Konfiguration_: Festlegung der Menge, die nicht in der Ausgabe vorhanden sein darf.

Diese Mengen werden als Arrays in den Feldern des Konfigurationsobjekts angegeben: `elements` und `attributes`, und `removeElements` und `removeAttributes`. Sie dürfen nicht sowohl Erlauben- als auch Entfernen-Arrays für Elemente oder Attribute in derselben Konfiguration angeben, aber andere Kombinationen von Feldern sind erlaubt. Die folgende Tabelle zeigt die erlaubten Kombinationen.

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
| `elements` + `removeElements` | (anything)                        | ❌      |
| (anything)                    | `attributes` + `removeAttributes` | ❌      |
| -                             | -                                 | ✔️      |

Eine Erlauben-Konfiguration kann optional festlegen, ob pro Element Attribute erlaubt und/oder entfernt werden sollen, in ihrem `elements` Array. Die erlaubte Konfiguration für diese lokalen Attribute hängt davon ab, ob globale `attributes` oder `removedAttributes` definiert sind. Der Abschnitt [gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) skizziert die Einschränkungen.

Im Allgemeinen ist eine "Erlauben-Konfiguration" sowohl für die Elemente als auch für die Attribute sicherer, da Sie die Elemente und/oder Attribute auflisten, die Sie wünschen und von denen Sie wissen, dass sie sicher sind, anstatt alle Elemente, die gefährlich oder in Zukunft möglicherweise als gefährlich angesehen werden könnten.

##### Erlauben-Konfigurationen

Mit "Erlauben-Konfigurationen" spezifizieren Sie die Elemente und Attribute, die Sie _erlauben_ (oder durch Kindelemente ersetzen) möchten — alle anderen Elemente/Attribute in der Eingabe werden entfernt. Dies macht es einfach zu verstehen, welche Elemente im DOM erlaubt sein werden, wenn das HTML geparst wird. Sie sind nützlich, wenn Sie genau wissen, welche HTML-Entitäten Sie in einem bestimmten Kontext einfügen möchten.

Erlauben-Konfigurationen werden erstellt, indem ein `Sanitizer` definiert wird, das eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) umschließt, die die Arrays [`elements`](/de/docs/Web/API/SanitizerConfig#elements) und/oder [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes) enthält (und nicht die Arrays `removeElements` oder `removeAttributes`).

Zum Beispiel wird die folgende Konfiguration erstellt, indem eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben wird, die {{htmlelement("p")}} und {{htmlelement("div")}} Elemente sowie `cite` und `onclick` Attribute auf jedem erlaubten Element ermöglicht. Sie wird auch {{htmlelement("b")}} Elemente durch ihre Kindknoten ersetzen.

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Die gleiche Konfiguration kann auch mithilfe von [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden erstellt werden. Beachten Sie, dass im folgenden Code der `Sanitizer()`-Konstruktor ein leeres Objekt nimmt, was zu einem `Sanitizer` führt, bei dem die zugrunde liegende Konfiguration sowohl `elements`- als auch `attributes`-Arrays enthält — mit anderen Worten, eine "Erlauben-Konfiguration".

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

Entfernen-Konfigurationen werden mithilfe einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) erstellt, die die Arrays [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) und/oder [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes) enthält (und nicht die Arrays `elements` oder `attributes`).

Zum Beispiel würde die folgende `Sanitizer`-Konfiguration die gleichen Elemente entfernen, die im vorherigen Code erlaubt waren:

```js
const sanitizer = new Sanitizer({
  removeElements: ["p", "div"],
  removeAttributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

Die Konfiguration kann auch mithilfe von [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden erstellt werden. Um dies zu einer "Entfernen-Konfiguration" zu machen, müssen wir das `removeElements`- oder `removeAttributes`-Array beim Erstellen des Objekts deklarieren (wenn nur ein Array spezifiziert ist, wird das andere im Rahmen der Normalisierung definiert).

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

[`Sanitizer`](/de/docs/Web/API/Sanitizer) wird empfohlen, wenn Sie ein Konfigurationsobjekt verwenden, das Sie möglicherweise wiederverwenden oder ändern möchten. Ob der Sanitizer eine Erlauben- oder Entfernen-Konfiguration hat, hängt von der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ab, die beim Erstellen des Objekts übergeben wird. Wenn Sie beispielsweise ein Konfigurationsobjekt übergeben, das das `elements`- oder `attributes`-Array (oder ein leeres Objekt) enthält, hat der Sanitizer eine Erlauben-Konfiguration.

In den obigen Beispielen haben wir eine Erlauben-Konfiguration erstellt und dann [`allowElement()`](/de/docs/Web/API/Sanitizer/allowElement), [`allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) und [`replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) aufgerufen, um zusätzliche Elemente und Attribute zu erlauben. Ebenso haben wir eine Entfernen-Konfiguration erstellt und [`removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) und [`removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) aufgerufen, um zusätzliche Elemente zu entfernen.

Sie können die Erlauben-Methoden auch auf einer Entfernen-Konfiguration aufrufen und die Entfernen-Methoden auf einer Erlauben-Konfiguration — aber sie verhalten sich unterschiedlich. Wenn Sie die Erlauben-Methoden auf einem Erlauben-Sanitizer aufrufen, werden die angegebenen Elemente und Attribute zum zugrunde liegenden `elements`- und `attributes`-Array hinzugefügt. Wenn Sie jedoch diese Methoden auf einem Entfernen-Sanitizer aufrufen, gibt es kein `elements`- und `attributes`-Array; stattdessen wird das angegebene Element aus dem entsprechenden `removeElements`- oder `removeAttributes`-Array entfernt, falls vorhanden. Dies funktioniert, weil das Erlauben eines Elements in einem Erlauben-Sanitizer dasselbe ist wie das "Nichtentfernen" eines Elements in einem Entfernen-Sanitizer.

Sie können alle `Sanitizer`-Methoden sowohl auf einem Erlauben- als auch einem Entfernen-Sanitizer aufrufen, und die Methode wird alle Änderungen vornehmen, die zu einer gültigen Konfiguration führen. Zum Beispiel, wenn Sie ein Element hinzufügen, wird die Methode es entweder zu `elements` hinzufügen oder es aus `removeElements` entfernen, falls vorhanden, je nach Art des Sanitizers, und auch das gleiche Element aus dem [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) Array entfernen, falls vorhanden.

Einige Operationen, die für eine Erlauben-Konfiguration möglich sind, sind nicht für eine Entfernen-Konfiguration möglich. Zum Beispiel werden pro-Element-Attribute im `elements`-Array definiert, das in einem Entfernen-Sanitizer nicht vorhanden ist.

Die Methoden geben `true` oder `false` zurück, um anzuzeigen, ob sie die zugrunde liegende Konfiguration modifiziert haben. Wenn Sie also `allowElement()` auf einer Erlauben-Konfiguration aufrufen und das angegebene Element nicht vorhanden ist, wird es dem `elements`-Array hinzugefügt und die Methode gibt `true` zurück. Wenn das Element jedoch bereits vorhanden ist, würde die Methode `false` zurückgeben. Beachten Sie, dass, wenn Sie die gleiche Methode aufrufen, um ein pro-Element-Attribut zu setzen, dies `false` zurückgeben wird, wenn es auf einem Entfernen-Sanitizer aufgerufen wird, da die Änderung nicht vorgenommen werden kann.

### Eingebaute Konfigurationen

#### XSS-sichere Baseline-Konfiguration

Die XSS-sichere Baseline-Konfiguration definiert die Elemente, die aus einer Eingabe entfernt werden müssen, um sie XSS-sicher zu machen:

- {{htmlelement("embed")}}, {{htmlelement("frame")}}, {{htmlelement("iframe")}}, {{htmlelement("object")}}, {{htmlelement("script")}}, und {{SVGElement("use")}}.
- Alle Event-Handler-Content-Attribute, wie `onafterprint`, `onbeforeinput` usw.

Die Konfiguration wird automatisch auf [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und die anderen [sicheren Säuberungsmethoden](#säuberungsmethoden) angewendet und stellt sicher, dass XSS-gefährliche Elemente aus der Ausgabe entfernt werden, selbst wenn sie durch einen übergebenen Sanitizer erlaubt sind. Sie können auch [`removeUnsafe`](/de/docs/Web/API/Sanitizer/removeUnsafe) auf einer [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Instanz aufrufen, um diese Konfiguration anzuwenden und sie XSS-sicher zu machen.

#### Standard-Sanitizer-Konfiguration

Die Standard-Sanitizer-Konfiguration ist restriktiver als die XSS-sichere Baseline. Sie definiert den Sanitizer, der verwendet wird, wenn Sie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) oder die anderen [sicheren Säuberungsmethoden](#säuberungsmethoden) ohne einen Sanitizer-Objekt aufrufen. Es ist auch die Konfiguration, die durch den [`Sanitizer()`-Konstruktor](/de/docs/Web/API/Sanitizer/Sanitizer) zurückgegeben wird, wenn keine Konfiguration festgelegt ist.

Die Konfiguration entfernt die folgenden Arten von Elementen:

1. Diejenigen, die bekannt sind, XSS-gefährlich zu sein (wie in der [XSS-sicheren Baseline-Konfiguration](#xss-sichere_baseline-konfiguration) angegeben).
2. Zusätzliche Elemente, die in Clickjacking-, Spoofing- oder anderen Angriffen verwendet werden könnten.
3. Kommentare und `data-*` Attribute.

Daher bietet sie einen Sanitizer mit einer minimalen Angriffsoberfläche, die dennoch für die Mehrheit der Säuberungsanwendungsfälle geeignet ist.

Für eine Auflistung der erlaubten Elemente und Attribute siehe [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).

### Säuberung und Trusted Types

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Eingaben durch eine vom Benutzer spezifizierte Transformationsfunktion laufen, bevor sie an eine API übergeben werden, die diese Eingabe ausführen könnte. Diese Transformationsfunktion wird am häufigsten verwendet, um die Eingabe zu säubern, muss es jedoch nicht: Das Ziel der API ist es hauptsächlich, Entwicklern die Audits von Säuberungscode zu erleichtern, nicht zu definieren, wie oder ob eine Säuberung durchgeführt wird.

Die sicheren HTML-Säuberungsmethoden verwenden keine Trusted Types. Da sie immer alle XSS-gefährlichen Entitäten filtern, bevor das Eingangs-HTML eingefügt wird, besteht keine Notwendigkeit, die Eingabezeichenfolge zu säubern oder die Methoden zu auditieren.

Die unsicheren HTML-Säuberungsmethoden können jedoch nicht vertrauenswürdiges HTML injizieren, abhängig vom Sanitizer, und werden daher mit Trusted Types arbeiten. Die Methoden können entweder eine Zeichenfolge oder ein `TrustedType` als Eingabe akzeptieren. Wenn auch ein Sanitizer bereitgestellt wird, wird zuerst die Transformationsfunktion ausgeführt und dann der Sanitizer.

Beachten Sie, dass das Verhalten der Transformationsfunktion in diesem Fall von der Website-Politik abhängt (die möglicherweise die Nutzung der unsicheren Methoden vollständig ablehnt).

### Drittanbieter-Säuberungsbibliotheken

Vor der Sanitizer API filterten Entwickler typischerweise Eingabezeichenfolgen mithilfe von Drittanbieter-Bibliotheken wie [DOMPurify](https://github.com/cure53/DOMPurify), möglicherweise aufgerufen von Transformationsfunktionen in Trusted Types.

Diese sollten nicht notwendig sein, wenn die sicheren HTML-Säuberungsmethoden verwendet werden, da die API in den Browser integriert ist und mehr über den Parsing-Kontext und was ausgeführt werden darf weiß, als externe Parser-Bibliotheken es können.

Sie können mit den unsicheren HTML-Methoden und Trusted Types nützlich sein, abhängig von den Trusted Type-Richtlinien der Website.

## Schnittstellen

- [`Sanitizer`](/de/docs/Web/API/Sanitizer)
  - : Ein wiederverwendbares Sanitizer-Konfigurationsobjekt, das definiert, welche Elemente und Attribute beim Säubern von nicht vertrauenswürdigen HTML-Zeichenfolgen erlaubt/entfernt werden sollen. Dies wird in den Methoden verwendet, die HTML-Zeichenfolgen in den DOM oder Document einfügen.
- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)
  - : Ein Wörterbuch, das eine Sanitizer-Konfiguration definiert. Dies kann an denselben Stellen wie [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet werden, ist jedoch wahrscheinlich weniger effizient zu verwenden und wiederzuverwenden.

## Erweiterungen für andere Schnittstellen

### XSS-sichere Methoden

- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)
  - : Analysiert eine HTML-Zeichenfolge in einen Teilbaum von Knoten, wobei alle Elemente entfernt werden, die im Kontext des Elements ungültig sind. Dann werden alle Elemente und Attribute entfernt, die nicht durch die Sanitizer-Konfiguration zugelassen sind und alle, die als XSS-gefährlich angesehen werden (auch wenn sie durch die Konfiguration erlaubt sind). Der Teilbaum wird dann als Teilbaum des Elements in den DOM eingefügt.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Analysiert eine HTML-Zeichenfolge in einen Teilbaum von Knoten. Dann werden alle Elemente und Attribute entfernt, die nicht durch die Sanitizer-Konfiguration zugelassen sind, und alle, die als XSS-gefährlich angesehen werden (auch wenn sie durch die Konfiguration erlaubt sind). Der Teilbaum wird dann als Teilbaum des `ShadowRoot` eingefügt.
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Analysiert eine HTML-Zeichenfolge in einen Teilbaum von Knoten. Dann werden alle Elemente und Attribute entfernt, die nicht durch die Sanitizer-Konfiguration zugelassen sind, und alle, die als XSS-gefährlich angesehen werden (auch wenn sie durch die Konfiguration erlaubt sind). Der Teilbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

### XSS-unsichere Methoden

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Analysiert eine HTML-Zeichenfolge in einen Teilbaum von Knoten, wobei alle Elemente entfernt werden, die im Kontext des Elements ungültig sind. Dann werden alle Elemente und Attribute entfernt, die nicht durch den Sanitizer erlaubt sind: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt. Der Teilbaum wird dann als Teilbaum des Elements in den DOM eingefügt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Analysiert eine HTML-Zeichenfolge in einen Teilbaum von Knoten. Dann werden alle Elemente und Attribute entfernt, die nicht durch den Sanitizer erlaubt sind: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt. Der Teilbaum wird dann als Teilbaum des `ShadowRoot` eingefügt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Analysiert eine HTML-Zeichenfolge in einen Teilbaum von Knoten. Dann werden alle Elemente und Attribute entfernt, die nicht durch den Sanitizer erlaubt sind: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt. Der Teilbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

## Beispiele

Die folgenden Beispiele zeigen, wie die Sanitizer API mit dem _Standardsanitizer_ verwendet wird.

### Verwendung von `Element.setHTML()` mit dem Standardsanitizer

In den meisten Fällen kann die Methode `Element.setHTML()` ohne Übergeben eines Sanitizers als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden. Der untenstehende Code demonstriert, wie die Methode verwendet wird, um den HTML-Eingang zu reinigen, bevor er in ein Element mit der ID `target` eingefügt wird.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Das {{htmlelement("script")}}-Element wird nicht durch den Standardsanitizer oder durch die Methode `setHTML()` erlaubt, daher wird das `alert()` entfernt.

Beachten Sie, dass die Verwendung von `Element.setHTMLUnsafe()` mit dem Standardsanitizer dieselben HTML-Entitäten säubern wird. Der Hauptunterschied besteht darin, dass, wenn Sie diese Methode mit Trusted Types verwenden, sie möglicherweise immer noch auditiert wird:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Verwendung einer erlaubten Sanitizer-Konfiguration

Dieser Code zeigt, wie Sie `Element.setHTMLUnsafe()` mit einem erlaubten Sanitizer verwenden könnten, der nur {{htmlelement("p")}}, {{htmlelement("b")}} und {{htmlelement("div")}} Elemente erlaubt. Alle anderen Elemente in der Eingabezeichenfolge werden entfernt.

```js
const sanitizer = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

Beachten Sie, dass Sie in diesem Fall normalerweise `setHTML()` verwenden sollten. Sie sollten `Element.setHTMLUnsafe()` nur verwenden, wenn Sie XSS-gefährliche Elemente oder Attribute zulassen müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
