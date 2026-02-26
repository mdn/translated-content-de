---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: 4266e1369e9b1f998cc4ffa8bf3ca2f4489c2f66
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die **HTML Sanitizer API** ermöglicht es Entwicklern, HTML-Strings zu filtern und unerwünschte Elemente, Attribute und andere HTML-Entitäten zu entfernen, wenn diese in das DOM oder ein Shadow-DOM eingefügt werden.

## Konzepte und Nutzung

Webanwendungen müssen oft mit nicht vertrauenswürdigem HTML auf der Client-Seite arbeiten, zum Beispiel als Teil einer Client-seitigen Templating-Lösung, beim Rendern von nutzergenerierten Inhalten oder beim Einbinden von Daten in einem Frame von einer anderen Seite.

Das Einfügen von nicht vertrauenswürdigem HTML kann eine Seite für verschiedene [Arten von Angriffen](/de/docs/Web/Security/Attacks) anfällig machen.
Insbesondere [Cross-Site-Scripting (XSS)-Angriffe](/de/docs/Web/Security/Attacks/XSS) arbeiten, indem sie nicht vertrauenswürdiges HTML in das DOM injizieren, das dann JavaScript im Kontext des aktuellen Ursprungs ausführt — was es bösartigem Code ermöglicht, so zu laufen, als wäre er vom Ursprung der Seite bedient.
Diese Angriffe können abgeschwächt werden, indem unsichere HTML-Elemente und Attribute entfernt werden, bevor sie in das DOM eingefügt werden.

Die HTML Sanitizer API bietet eine Reihe von Methoden, um unerwünschte HTML-Entitäten aus HTML-Eingaben zu entfernen, bevor sie in das DOM injiziert werden.
Diese sind in XSS-sicheren Versionen verfügbar, die die Entfernung aller unsicheren Elemente und Attribute durchsetzen, und potenziell unsicheren Versionen, die Entwicklern die volle Kontrolle darüber geben, welche HTML-Entitäten erlaubt sind.

### Sanitization-Methoden

Die HTML Sanitizer API bietet XSS-sichere und XSS-unsichere Methoden zum Injizieren von HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) sowie zur Parsen von HTML in ein [`Document`](/de/docs/Web/API/Document).

- Sichere Methoden: [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Alle Methoden nehmen das HTML, das injiziert werden soll, und eine optionale [Sanitizer-Konfiguration](#sanitizer-konfiguration) als Argumente.
Die Konfiguration definiert die HTML-Entitäten, die vor der Injektion aus der Eingabe gefiltert werden.
Die [`Element`](/de/docs/Web/API/Element)-Methoden sind kontextbewusst und lassen zusätzlich alle Elemente fallen, die die HTML-Spezifikation im Ziel-Element nicht erlaubt.

Die sicheren Methoden entfernen immer XSS-unsichere Elemente und Attribute.
Wenn kein Sanitizer als Parameter übergeben wird, verwenden sie die Standard-Sanitizer-Konfiguration, die alle Elemente und Attribute außer denen erlaubt, die als unsicher bekannt sind, wie {{htmlelement("script")}}-Elemente und `onclick`-Event-Handler.
Wenn ein benutzerdefinierter Sanitizer verwendet wird, wird dieser implizit so aktualisiert, dass alle Elemente und Attribute entfernt werden, die nicht XSS-sicher sind (beachten Sie, dass der übergebene Sanitizer nicht modifiziert wird und möglicherweise immer noch unsichere Entitäten erlaubt, wenn er mit einer unsicheren Methode verwendet wird).

Die sicheren Methoden sollten anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um nicht vertrauenswürdigen HTML-Inhalt zu injizieren.
Zum Beispiel können Sie in den meisten Fällen [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) mit dem Standardsanitizer als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.
Dieselben Methoden können auch verwendet werden, um vertrauenswürdige HTML-Strings zu injizieren, die keine XSS-unsicheren Elemente enthalten müssen.

Die XSS-unsicheren Methoden verwenden die Sanitizer-Konfiguration, die als Argument übergeben wird.
Wenn kein Sanitizer übergeben wird, werden alle HTML-Elemente und Attribute injiziert, die im Kontext erlaubt sind.
Dies ist ähnlich wie die Verwendung von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), außer dass die Methode Shadow-Roots analysiert, Elemente fallen lässt, die im Kontext nicht angemessen sind, und einige andere Eingaben erlaubt, die bei der Verwendung der Eigenschaft nicht erlaubt sind.

Die unsicheren Methoden sollten nur mit nicht vertrauenswürdigem HTML verwendet werden, das einige XSS-unsichere Elemente oder Attribute enthalten muss.
Dies ist immer noch unsicher, erlaubt es Ihnen jedoch, das Risiko zu minimieren, indem Sie unsichere Entitäten auf das minimal notwendige Set beschränken.
Zum Beispiel, wenn Sie unsicheres HTML injizieren wollten, aber aus irgendeinem Grund der Input den `onblur`-Handler enthalten muss, könnten Sie dies sicherer tun, indem Sie den Standardsanitizer anpassen und eine unsichere Methode verwenden, wie gezeigt:

```js
const sanitizer = new Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

### Sanitizer-Konfiguration

Eine Sanitizer-Konfiguration definiert, welche HTML-Entitäten erlaubt, ersetzt oder entfernt werden, wenn der Sanitizer verwendet wird, einschließlich Elemente, Attribute, `data-*`-Attribute und Kommentare.

Es gibt zwei sehr eng verwandte Sanitizer-Konfigurationsschnittstellen, deren beide allen Sanitizer-Methoden übergeben werden können.

- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist ein Dictionary-Objekt, das Arrays für die erlaubten/nicht erlaubten Elemente und Attribute definiert sowie boolesche Eigenschaften, die angeben, ob Kommentare und Datenattribute erlaubt oder ausgelassen werden und so weiter.

  Nur ein Teil der möglichen Konfigurationsoptionen darf in einer bestimmten Konfiguration spezifiziert sein, um Redundanz und Mehrdeutigkeit zu verringern.
  Der erlaubte Teil wird im Abschnitt [Allow- und Remove-Konfigurationen](#allow-_und_remove-konfigurationen) unten zusammengefasst und im Detail in [Gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) beschrieben.

- [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die Methoden bereitstellt, um die Konfiguration ergonomisch zu modifizieren und sicherzustellen, dass sie gültig bleibt.

  Zum Beispiel können Sie eine Methode verwenden, um ein erlaubtes Element hinzuzufügen, und sie wird das Element auch aus dem `replaceWithChildrenElements`-Array (falls vorhanden) entfernen.
  Die Schnittstelle bietet auch Methoden, um eine Kopie der zugrunde liegenden [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurückzugeben und auch den Sanitizer zu aktualisieren, sodass er XSS-sicher ist.
  Sie kann Normalisierungen der Sanitizer-Konfiguration bereitstellen, die zur Konstruktion verwendet wird, was das Verständnis und die Wiederverwendung erleichtert.

Obwohl Sie jede der beiden Schnittstellen in allen der Sanitizer-Methoden verwenden können, ist `Sanitizer` wahrscheinlich effizienter, um es zu teilen und wiederzuverwenden, als `SanitizerConfig`.

#### Allow- und Remove-Konfigurationen

Sie können eine Konfiguration auf zwei Arten erstellen:

- Als _Allow-Konfiguration_: indem Sie die Menge der Elemente und/oder Attribute spezifizieren, die Sie in der Ausgabe erlauben werden.
- Als _Remove-Konfiguration_: indem Sie die Menge spezifizieren, die in der Ausgabe nicht vorhanden sein darf.

Diese Sätze werden als Arrays in den Feldern des Konfigurationsobjekts spezifiziert: `elements` und `attributes` sowie `removeElements` und `removeAttributes`.
Sie dürfen in derselben Konfiguration nicht sowohl Allow- als auch Remove-Arrays für Elemente oder Attribute angeben, aber andere Kombinationen von Feldern sind erlaubt.
Die folgende Tabelle zeigt die erlaubten Kombinationen.

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
| `elements` + `removeElements` | (beliebig)                        | ❌      |
| (beliebig)                    | `attributes` + `removeAttributes` | ❌      |
| -                             | -                                 | ✔️      |

Eine Allow-Konfiguration kann optional angeben, ob Pro-Element-Attribute im `elements`-Array erlaubt und/oder entfernt werden sollen.
Die erlaubte Konfiguration für diese lokalen Attribute hängt davon ab, ob globale `attributes` oder `removeAttributes` definiert sind.
Der Abschnitt [gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) beschreibt die Einschränkungen.

Im Allgemeinen ist eine "Allow-Konfiguration" sowohl für die Elemente als auch Attribute sicherer, da Sie die Elemente und/oder Attribute auflisten, die Sie möchten und von denen Sie wissen, dass sie sicher sind, anstatt aller Elemente, die gefährlich sind oder in Zukunft als gefährlich angesehen werden könnten.
Wenn Sie ein leeres Konfigurationsobjekt angeben, wird eine leere Allow-Konfiguration verwendet.

##### Allow-Konfigurationen

Mit "Allow-Konfigurationen" spezifizieren Sie die Elemente und Attribute, die Sie _erlauben_ (oder durch Kinder-Elemente ersetzen) — alle anderen Elemente/Attribute in der Eingabe werden entfernt.
Dies macht es einfach zu verstehen, welche Elemente im DOM erlaubt werden, wenn das HTML geparst wird.
Sie sind nützlich, wenn Sie genau wissen, welche HTML-Entitäten Sie in einem bestimmten Kontext injizieren möchten.

Allow-Konfigurationen werden erstellt, indem ein `Sanitizer` definiert wird, der einen [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) umschließt, der die [`elements`](/de/docs/Web/API/SanitizerConfig#elements) und/oder [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes) Arrays (und nicht die `removeElements` oder `removeAttributes` Arrays) enthält.

Zum Beispiel wird die folgende Konfiguration erstellt, indem ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben wird, das {{htmlelement("p")}} und {{htmlelement("div")}}-Elemente erlaubt sowie `cite` und `onclick` Attribute auf jedem erlaubten Element.
Es wird auch {{htmlelement("b")}}-Elemente durch ihre Knoten ersetzen.

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Dieselbe Konfiguration kann auch mit [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden erstellt werden.
Beachten Sie, dass im folgenden Code der `Sanitizer()`-Konstruktor ein leeres Objekt nimmt, was zu einem `Sanitizer` führt, bei dem die zugrunde liegende Konfiguration sowohl `elements` als auch `attributes` Arrays enthält — mit anderen Worten, eine "Allow-Konfiguration".

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

##### Remove-Konfigurationen

In "Remove-Konfigurationen" spezifizieren Sie die HTML-Elemente und Attribute, die Sie entfernen möchten: alle anderen Elemente und Attribute sind durch den Sanitizer erlaubt (können aber blockiert werden, wenn Sie eine sichere Sanitizer-Methode verwenden oder wenn das Element im Kontext nicht erlaubt ist).

Remove-Konfigurationen werden mit einem [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) erstellt, das die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) und/oder [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes) Arrays (und nicht die `elements` oder `attributes` Arrays) enthält.

Zum Beispiel würde die folgende `Sanitizer`-Konfiguration dieselben Elemente entfernen, die im vorherigen Code erlaubt waren:

```js
const sanitizer = new Sanitizer({
  removeElements: ["p", "div"],
  removeAttributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

Die Konfiguration kann auch mit [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden erstellt werden.
Um dies zu einer "Remove-Konfiguration" zu machen, müssen wir das `removeElements` oder `removeAttributes` Array beim Erstellen des Objekts angeben (wenn nur ein Array spezifiziert wird, wird das andere als Teil der Normalisierung definiert).

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

#### Hinzufügen und Entfernen aus `Sanitizer`-Konfigurationen

[`Sanitizer`](/de/docs/Web/API/Sanitizer) wird empfohlen, wenn Sie ein Konfigurationsobjekt verwenden, das Sie möglicherweise wiederverwenden oder ändern möchten.
Ob der Sanitizer eine Allow- oder Remove-Konfiguration hat, hängt von der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ab, die beim Erstellen des Objekts übergeben wird.
Zum Beispiel, wenn Sie ein Konfigurationsobjekt übergeben, das das `elements` oder `attributes` Array (oder ein leeres Objekt) hat, wird der Sanitizer eine Allow-Konfiguration haben.

In den obigen Beispielen haben wir eine Allow-Konfiguration erstellt und dann [`allowElement()`](/de/docs/Web/API/Sanitizer/allowElement), [`allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) und [`replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) aufgerufen, um zusätzliche Elemente und Attribute zu erlauben, und ebenso eine Remove-Konfiguration erstellt und [`removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) und [`removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) aufgerufen, um zusätzliche zu entfernende Elemente zu spezifizieren.

Sie können auch die Allow-Methoden auf einer Remove-Konfiguration aufrufen, und die Remove-Methoden auf einer Allow-Konfiguration — aber sie verhalten sich unterschiedlich.
Wenn Sie die Allow-Methoden auf einem Allow-Sanitizer aufrufen, werden die angegebenen Elemente und Attribute dem zugrunde liegenden `elements` und `attributes` Array hinzugefügt.
Wenn Sie diese Methoden jedoch auf einem Remove-Sanitizer aufrufen, gibt es kein `elements` und `attributes` Array; stattdessen wird das angegebene Element _aus_ dem entsprechenden `removeElements` oder `removeAttributes` Array entfernt, falls vorhanden.
Dies funktioniert, weil das Erlauben eines Elements in einem Allow-Sanitizer dasselbe ist, wie ein Element in einem Remove-Sanitizer „nicht zu entfernen“.

Sie können alle `Sanitizer`-Methoden auf entweder einem Allow- oder einem Remove-Sanitizer aufrufen, und die Methode wird alle Änderungen vornehmen, die sie kann, um eine gültige Konfiguration zu erzeugen.
Zum Beispiel, wenn Sie ein Element hinzufügen, wird die Methode es entweder zu `elements` hinzufügen oder es aus `removeElements` entfernen, falls vorhanden, je nach Typ des Sanitizers, und auch das gleiche Element aus dem [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) Array entfernen, falls vorhanden.

Einige Operationen, die für eine Allow-Konfiguration möglich sind, sind für eine Remove-Konfiguration nicht möglich.
Zum Beispiel werden Pro-Element-Attribute im `elements` Array definiert, das in einem Remove-Sanitizer nicht vorhanden ist.

Die Methoden geben `true` oder `false` zurück, um anzuzeigen, ob sie die zugrunde liegende Konfiguration geändert haben.
Wenn Sie `allowElement()` auf einer Allow-Konfiguration aufrufen und das spezifizierte Element nicht vorhanden ist, wird es dem `elements` Array hinzugefügt und die Methode gibt `true` zurück.
Wenn das Element jedoch bereits vorhanden ist, würde die Methode `false` zurückgeben.
Beachten Sie, dass wenn Sie dieselbe Methode aufrufen, um ein Pro-Element-Attribut zu setzen, dies `false` zurückgibt, wenn es auf einem Remove-Sanitizer aufgerufen wird, da die Änderung nicht gemacht werden kann.

### Sanitizing und Trusted Types

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Eingaben durch eine benutzerdefinierte Transformationsfunktion geleitet werden, bevor sie an eine API übergeben werden, die diese Eingabe möglicherweise ausführt.
Diese Transformationsfunktion wird am häufigsten verwendet, um die Eingabe zu bereinigen, muss dies aber nicht: Der Hauptzweck der API ist es, Entwicklern das Auditing von Bereinigungscode zu erleichtern, nicht um zu definieren, wie oder ob Bereinigung durchgeführt wird.

Die sicheren HTML-Bereinigungsmethoden verwenden keine vertrauenswürdigen Typen.
Da sie immer alle XSS-unsicheren Entitäten filtern, bevor HTML-Eingaben injiziert werden, besteht keine Notwendigkeit, den Eingabestring zu bereinigen oder die Methoden zu überprüfen.

Die unsicheren HTML-Bereinigungsmethoden können jedoch nicht vertrauenswürdiges HTML injizieren, abhängig vom Sanitizer, und werden daher mit vertrauenswürdigen Typen arbeiten.
Die Methoden können entweder einen String oder einen `TrustedType` als Eingabe nehmen.
Wenn auch ein Sanitizer bereitgestellt wird, wird zuerst die Transformationsfunktion ausgeführt und dann der Sanitizer.

Beachten Sie, dass das Verhalten der Transformationsfunktion in diesem Fall von der Website-Politik abhängt (die sein könnte, die Verwendung der unsicheren Methoden vollständig abzulehnen).

### Drittanbieter-Bereinigungsbibliotheken

Vor der Sanitizer API haben Entwickler typischerweise Eingabestrings mit Drittanbieterbibliotheken wie [DOMPurify](https://github.com/cure53/DOMPurify) gefiltert, vielleicht aufgerufen von Transformationsfunktionen in vertrauenswürdigen Typen.

Diese sollten nicht notwendig sein, wenn die sicheren HTML-Bereinigungsmethoden verwendet werden, da die API in den Browser integriert ist und den Parsing-Kontext sowie den erlaubten Code besser versteht als externe Parser-Bibliotheken.

Sie können nützlich sein mit den unsicheren HTML-Methoden und vertrauenswürdigen Typen, abhängig von den vertrauenswürdigen Typen-Politiken der Website.

## Schnittstellen

- [`Sanitizer`](/de/docs/Web/API/Sanitizer)
  - : Ein wiederverwendbares Sanitizer-Konfigurationsobjekt, das definiert, welche Elemente und Attribute beim Bereinigen von nicht vertrauenswürdigen HTML-Strings erlaubt/entfernt werden sollten.
    Dies wird in den Methoden verwendet, die HTML-Strings in das DOM oder Dokument einfügen.
- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)
  - : Ein Dictionary, das eine Sanitizer-Konfiguration definiert.
    Dies kann an denselben Stellen wie [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet werden, ist jedoch wahrscheinlich weniger effizient zu verwenden und wiederzuverwenden.

## Erweiterungen für andere Schnittstellen

### XSS-sichere Methoden

- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)
  - : Ein String von HTML wird in einen Knoten-Unterbaum geparst, wobei sämtliche Elemente, die im Kontext des Elements ungültig sind, fallen gelassen werden.
    Danach werden alle Elemente und Attribute entfernt, die von der Sanitizer-Konfiguration nicht erlaubt sind, und alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind).
    Der Unterbaum wird dann als Unterbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Ein String von HTML wird in einen Knoten-Unterbaum geparst.
    Danach werden alle Elemente und Attribute entfernt, die von der Sanitizer-Konfiguration nicht erlaubt sind, und alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind).
    Der Unterbaum wird dann als Unterbaum der `ShadowRoot` eingefügt.
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Ein String von HTML wird in einen Knoten-Unterbaum geparst.
    Danach werden alle Elemente und Attribute entfernt, die von der Sanitizer-Konfiguration nicht erlaubt sind, und alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind).
    Der Unterbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

### XSS-unsichere Methoden

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Ein String von HTML wird in einen Knoten-Unterbaum geparst, wobei sämtliche Elemente, die im Kontext des Elements ungültig sind, fallen gelassen werden.
    Danach werden alle nicht erlaubten Elemente und Attribute durch den Sanitizer entfernt: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt.
    Der Unterbaum wird dann als Unterbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Ein String von HTML wird in einen Knoten-Unterbaum geparst.
    Danach werden alle nicht erlaubten Elemente und Attribute durch den Sanitizer entfernt: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt.
    Der Unterbaum wird dann als Unterbaum der `ShadowRoot` eingefügt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Ein String von HTML wird in einen Knoten-Unterbaum geparst.
    Danach werden alle nicht erlaubten Elemente und Attribute durch den Sanitizer entfernt: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt.
    Der Unterbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

## Beispiele

Die folgenden Beispiele zeigen, wie die Sanitizer API mit dem _Standard_-Sanitizer verwendet wird (zum Zeitpunkt des Schreibens werden Konfigurationsoperationen noch nicht unterstützt).

### Verwendung von `Element.setHTML()` mit dem Standard-Sanitizer

In den meisten Fällen kann `Element.setHTML()` ohne Übergeben eines Sanitizers als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden.
Der folgende Code zeigt, wie die Methode verwendet wird, um die HTML-Eingabe zu bereinigen, bevor sie in ein Element mit der ID `target` eingefügt wird.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Das `{{htmlelement("script")}}`-Element wird durch den Standardsanitizer oder durch die `setHTML()`-Methode nicht erlaubt, deshalb wird das `alert()` entfernt.

Beachten Sie, dass die Verwendung von `Element.setHTMLUnsafe()` mit dem Standardsanitizer dieselben HTML-Entitäten bereinigen wird.
Der Hauptunterschied besteht darin, dass, wenn Sie diese Methode mit Trusted Types verwenden, sie möglicherweise dennoch überprüft wird:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Verwendung einer Allow-Sanitizer-Konfiguration

Dieser Code zeigt, wie `Element.setHTMLUnsafe()` mit einem Allow-Sanitizer verwendet werden könnte, der nur {{htmlelement("p")}}, {{htmlelement("b")}} und {{htmlelement("div")}}-Elemente erlaubt.
Alle anderen Elemente im Eingabestring würden entfernt.

```js
const sanitizer = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

Beachten Sie, dass Sie in diesem Fall normalerweise `setHTML()` verwenden sollten.
Sie sollten nur `Element.setHTMLUnsafe()` verwenden, wenn Sie XSS-unsichere Elemente oder Attribute erlauben müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
