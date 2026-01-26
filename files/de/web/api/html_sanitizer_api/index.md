---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die **HTML Sanitizer API** ermöglicht es Entwicklern, HTML-Zeichenketten zu nehmen und unerwünschte Elemente, Attribute und andere HTML-Entitäten herauszufiltern, wenn sie in den DOM oder ein Shadow DOM eingefügt werden.

## Konzepte und Verwendung

Webanwendungen müssen oft mit nicht vertrauenswürdigem HTML auf der Clientseite arbeiten, zum Beispiel als Teil einer Client-seitigen Template-Lösung, beim Rendern von nutzergenerierten Inhalten oder bei der Einbindung von Daten in ein Frame von einer anderen Seite.

Das Injizieren von nicht vertrauenswürdigem HTML kann eine Seite anfällig für verschiedene [Arten von Angriffen](/de/docs/Web/Security/Attacks) machen. Insbesondere funktionieren [Cross-Site Scripting (XSS)-Angriffe](/de/docs/Web/Security/Attacks/XSS) durch das Injizieren von nicht vertrauenswürdigem HTML in das DOM, welches dann JavaScript im Kontext des aktuellen Ursprungs ausführt — wodurch bösartiger Code so ausgeführt wird, als wäre er vom Ursprung der Seite bereitgestellt. Diese Angriffe können gemildert werden, indem unsichere HTML-Elemente und -Attribute entfernt werden, bevor sie in das DOM injiziert werden.

Die HTML Sanitizer API bietet eine Reihe von Methoden zum Entfernen unerwünschter HTML-Entitäten aus HTML-Eingaben, bevor sie in das DOM injiziert werden. Diese gibt es in XSS-sicheren Versionen, die das Entfernen aller unsicheren Elemente und Attribute erzwingen, und potenziell unsicheren Versionen, die Entwicklern die vollständige Kontrolle über die zugelassenen HTML-Entitäten geben.

### Sanitization-Methoden

Die HTML Sanitizer API stellt XSS-sichere und XSS-unsichere Methoden zur Verfügung, um HTML-Zeichenketten in ein [`Element`](/de/docs/Web/API/Element) oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zu injizieren und HTML in ein [`Document`](/de/docs/Web/API/Document) zu parsen.

- Sichere Methoden: [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Alle Methoden nehmen das HTML, das injiziert werden soll, und eine optionale [Sanitizer-Konfiguration](#sanitizer-konfiguration) als Argumente. Die Konfiguration definiert die HTML-Entitäten, die aus der Eingabe herausgefiltert werden, bevor sie injiziert wird. Die [`Element`](/de/docs/Web/API/Element)-Methoden sind kontextbewusst und entfernen zusätzlich alle Elemente, die das HTML-Dokument nicht im Ziel-Element erlaubt.

Die sicheren Methoden entfernen immer XSS-unsichere Elemente und Attribute. Wenn kein Sanitizer als Parameter übergeben wird, verwenden sie die Standard-Sanitizer-Konfiguration, die alle Elemente und Attribute außer denen zulässt, die als unsicher bekannt sind, wie z.B. {{htmlelement("script")}}-Elemente und `onclick`-Ereignishandler. Wenn ein benutzerdefinierter Sanitizer verwendet wird, wird dieser implizit aktualisiert, um alle Elemente und Attribute zu entfernen, die nicht XSS-sicher sind (beachten Sie, dass der übergebene Sanitizer nicht verändert wird und möglicherweise weiterhin unsichere Entitäten erlaubt, wenn er mit einer unsicheren Methode verwendet wird).

Die sicheren Methoden sollten anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um nicht vertrauenswürdige HTML-Inhalte zu injizieren. Zum Beispiel können Sie in den meisten Fällen [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) mit dem Standard-Sanitizer als Drop-in-Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden. Die gleichen Methoden können auch verwendet werden, um vertrauenswürdige HTML-Zeichenketten zu injizieren, die keine XSS-unsicheren Elemente enthalten müssen.

Die XSS-unsicheren Methoden verwenden die Sanitizer-Konfiguration, die als Argument übergeben wird. Wenn kein Sanitizer übergeben wird, werden alle HTML-Elemente und Attribute, die vom Kontext erlaubt sind, injiziert. Dies ist ähnlich wie die Verwendung von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), außer dass die Methode Shadow Roots parsen, Elemente, die im Kontext unpassend sind, entfernen und einige andere Eingaben erlaubt sind, die bei der Verwendung der Eigenschaft nicht erlaubt sind.

Die unsicheren Methoden sollten nur mit nicht vertrauenswürdigem HTML verwendet werden, das einige XSS-unsichere Elemente oder Attribute enthalten muss. Dies ist immer noch unsicher, erlaubt Ihnen jedoch, das Risiko zu reduzieren, indem Sie unsichere Entitäten auf ein Minimum beschränken. Zum Beispiel, wenn Sie unsicheres HTML injizieren wollten, aber aus irgendeinem Grund die Eingabe den `onblur`-Handler enthalten muss, könnten Sie dies sicherer tun, indem Sie den Standard-Sanitizer ändern und eine unsichere Methode verwenden, wie gezeigt:

```js
const sanitizer = new Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

### Sanitizer-Konfiguration

Eine Sanitizer-Konfiguration definiert, welche HTML-Entitäten erlaubt, ersetzt oder entfernt werden sollen, wenn der Sanitizer verwendet wird, einschließlich Elemente, Attribute, `data-*` Attribute und Kommentare.

Es gibt zwei sehr eng miteinander verbundene Interfaces von Sanitizer-Konfigurationen, von denen eines in allen Sanitizer-Methoden übergeben werden kann.

- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist ein Wörterbuchobjekt, das Arrays für die erlaubten/nicht erlaubten Elemente und Attribute und boolesche Eigenschaften enthält, die angeben, ob Kommentare und Datenattribute erlaubt oder weggelassen werden sollen, und so weiter.

  Nur eine Teilmenge der möglichen Konfigurationsoptionen darf in einer bestimmten Konfiguration angegeben werden, um Redundanz und Mehrdeutigkeit zu reduzieren. Die erlaubte Teilmenge wird im Abschnitt [Allow and remove configurations](#allow_and_remove_configurations) zusammengefasst und im Detail in [Valid configuration](/de/docs/Web/API/SanitizerConfig#valid_configuration) beschrieben.

- [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die Methoden zur ergonomischen Modifikation der Konfiguration bereitstellt und sicherstellt, dass sie gültig bleibt.

  Zum Beispiel können Sie eine Methode verwenden, um ein erlaubtes Element hinzuzufügen, und es wird auch das Element aus dem `replaceWithChildrenElements`-Array (falls vorhanden) entfernt. Das Interface bietet auch Methoden, um eine Kopie der zugrunde liegenden [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurückzugeben und den Sanitizer so zu aktualisieren, dass er XSS-sicher ist. Es kann Normalisierungen der für die Erstellung verwendeten Sanitizer-Konfiguration bereitstellen, was es einfacher macht, sie zu verstehen und wiederzuverwenden.

Obwohl Sie in allen reinigenden Methoden eines der beiden Interfaces verwenden können, ist `Sanitizer` wahrscheinlich effizienter zu teilen und wiederzuverwenden als `SanitizerConfig`.

#### Allow and remove configurations

Sie können eine Konfiguration auf zwei Arten erstellen:

- Als _Allow-Konfiguration_: Angabe des Satzes von Elementen und/oder Attributen, die im Ausgabedokument erlaubt werden.
- Als _Remove-Konfiguration_: Angabe des Satzes, der im Ausgabedokument nicht vorhanden sein darf.

Diese Sätze werden in den Konfigurationsobjektfeldern als Arrays angegeben: `elements` und `attributes`, sowie `removeElements` und `removeAttributes`. Sie dürfen nicht beide Array-Typen für Elemente oder Attribute in derselben Konfiguration angeben, aber andere Kombinationen von Feldern sind zulässig. Die folgende Tabelle zeigt die zulässigen Kombinationen.

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

Eine Allow-Konfiguration kann optional angeben, ob per-Element-Attribute in ihrem `elements`-Array erlaubt und/oder entfernt werden sollen. Die erlaubte Konfiguration für diese lokalen Attribute hängt davon ab, ob globale `attributes` oder `removeAttributes` definiert sind. Der Abschnitt [valid configuration](/de/docs/Web/API/SanitizerConfig#valid_configuration) skizziert die Einschränkungen.

Im Allgemeinen ist eine "Allow-Konfiguration" sowohl für Elemente als auch für Attribute sicherer, da Sie die Elemente und/oder Attribute auflisten, die Sie möchten und die sicher sind, anstatt alle Elemente, die gefährlich sind oder in Zukunft möglicherweise als gefährlich angesehen werden könnten. Wenn Sie ein leeres Konfigurationsobjekt angeben, wird eine leere Allow-Konfiguration verwendet.

##### Allow-Konfigurationen

Mit "Allow-Konfigurationen" spezifizieren Sie die Elemente und Attribute, die Sie _erlauben_ (oder durch Kind-Elemente ersetzen) möchten — alle anderen Elemente/Attribute in der Eingabe werden entfernt. Auf diese Weise lässt sich leicht nachvollziehen, welche Elemente im DOM erlaubt sind, wenn das HTML geparst wird. Sie sind nützlich, wenn Sie genau wissen, welche HTML-Entitäten Sie in einem bestimmten Kontext injizieren möchten.

Allow-Konfigurationen werden erstellt, indem ein `Sanitizer` definiert wird, der eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) umhüllt, die die Arrays [`elements`](/de/docs/Web/API/SanitizerConfig#elements) und/oder [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes) enthält (und nicht die Arrays `removeElements` oder `removeAttributes`).

Zum Beispiel wird die folgende Konfiguration erstellt, indem eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben wird, die {{htmlelement("p")}}- und {{htmlelement("div")}}-Elemente erlaubt und `cite`- und `onclick`-Attribute auf jedem erlaubten Element. Es wird auch {{htmlelement("b")}}-Elemente durch ihre Kindknoten ersetzen.

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Die gleiche Konfiguration kann auch mit Methoden von [`Sanitizer`](/de/docs/Web/API/Sanitizer) erstellt werden. Beachten Sie, dass im folgenden Beispiel der `Sanitizer()`-Konstruktor ein leeres Objekt aufnimmt, was zu einem `Sanitizer` führt, dessen zugrunde liegende Konfiguration sowohl `elements`- als auch `attributes`-Arrays enthält — mit anderen Worten, einer "Allow-Konfiguration".

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

In "Remove-Konfigurationen" geben Sie die HTML-Elemente und Attribute an, die Sie entfernen möchten: alle anderen Elemente und Attribute werden vom Sanitizer erlaubt (können aber blockiert werden, wenn Sie eine sichere Sanitizer-Methode verwenden oder wenn das Element im Kontext nicht erlaubt ist).

Remove-Konfigurationen werden mit einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) erstellt, die die Arrays [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) und/oder [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes) enthält (und nicht die Arrays `elements` oder `attributes`).

Zum Beispiel würde die folgende `Sanitizer`-Konfiguration die gleichen Elemente entfernen, die im vorherigen Beispiel erlaubt waren:

```js
const sanitizer = new Sanitizer({
  removeElements: ["p", "div"],
  removeAttributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

Die Konfiguration kann auch mit Methoden von [`Sanitizer`](/de/docs/Web/API/Sanitizer) erstellt werden. Um dies zu einer "Remove-Konfiguration" zu machen, müssen wir das Array `removeElements` oder `removeAttributes` bei der Konstruktion des Objekts deklarieren (wenn nur ein Array angegeben wird, wird das andere als Teil der Normalisierung definiert).

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

[`Sanitizer`](/de/docs/Web/API/Sanitizer) wird empfohlen, wenn Sie ein Konfigurationsobjekt verwenden, das Sie möglicherweise wiederverwenden oder ändern möchten. Ob der Sanitizer eine Allow- oder Remove-Konfiguration hat, hängt von der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ab, die bei der Erstellung des Objekts übergeben wird. Wenn Sie zum Beispiel ein Konfigurationsobjekt übergeben, das das `elements`- oder `attributes`-Array enthält (oder ein leeres Objekt), hat der Sanitizer eine Allow-Konfiguration.

In den obigen Beispielen haben wir eine Allow-Konfiguration erstellt und dann [`allowElement()`](/de/docs/Web/API/Sanitizer/allowElement), [`allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) und [`replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) aufgerufen, um zusätzliche Elemente und Attribute zu erlauben. Ebenso haben wir eine Remove-Konfiguration erstellt und [`removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) und [`removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) aufgerufen, um zusätzliche Elemente anzugeben, die entfernt werden sollen.

Sie können auch die Allow-Methoden auf einer Remove-Konfiguration und die Remove-Methoden auf einer Allow-Konfiguration aufrufen — sie verhalten sich jedoch unterschiedlich. Wenn Sie die Allow-Methoden auf einem Allow-Sanitizer aufrufen, werden die angegebenen Elemente und Attribute dem zugrunde liegenden `elements`- und `attributes`-Array hinzugefügt. Wenn Sie jedoch diese Methoden auf einem Remove-Sanitizer aufrufen, gibt es kein `elements`- und `attributes`-Array; stattdessen wird das angegebene Element aus dem entsprechenden `removeElements`- oder `removeAttributes`-Array entfernt, falls vorhanden. Dies funktioniert, weil das Erlauben eines Elements in einem Allow-Sanitizer dasselbe ist wie das "Nichtentfernen" eines Elements in einem Remove-Sanitizer.

Sie können alle `Sanitizer`-Methoden sowohl auf einem Allow- als auch einem Remove-Sanitizer aufrufen, und die Methode wird alle Änderungen vornehmen, die sie kann, um eine gültige Konfiguration zu erzielen. Zum Beispiel, wenn Sie ein Element hinzufügen, wird die Methode es entweder zu `elements` hinzufügen oder es aus `removeElements` entfernen, wenn vorhanden, je nach Typ des Sanitizers und auch das gleiche Element aus dem [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) Array entfernen, falls vorhanden.

Einige Operationen, die für eine Allow-Konfiguration möglich sind, sind für eine Remove-Konfiguration nicht möglich. Zum Beispiel werden per-Element-Attribute im `elements`-Array definiert, das im entfernten Sanitizer nicht vorhanden ist.

Die Methoden geben `true` oder `false` zurück, um anzuzeigen, ob sie die zugrunde liegende Konfiguration geändert haben oder nicht. Wenn Sie also `allowElement()` auf einer Allow-Konfiguration aufrufen und das angegebene Element nicht vorhanden ist, wird es dem `elements`-Array hinzugefügt und die Methode gibt `true` zurück. Aber wenn das Element bereits vorhanden ist, würde die Methode `false` zurückgeben. Beachten Sie, dass wenn Sie dieselbe Methode aufrufen, um ein per-Element-Attribut zu setzen, dies `false` zurückgibt, wenn es auf einem Entferner-Sanitizer aufgerufen wird, da die Änderung nicht vorgenommen werden kann.

### Sanitization und Trusted Types

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Eingaben durch eine benutzerspezifizierte Transformationsfunktion geleitet werden, bevor sie an eine API übergeben werden, die diese Eingaben möglicherweise ausführt. Diese Transformationsfunktion wird am häufigsten zur Bereinigung der Eingabe verwendet, muss es aber nicht: Der Hauptzweck der API ist es, Entwicklern die Überprüfung von Bereinigungscode zu erleichtern, nicht zu definieren, wie oder ob eine Bereinigung durchgeführt wird.

Die sicheren HTML-Bereinigungsmethoden verwenden keine Trusted Types. Da sie immer alle XSS-unsicheren Entitäten filtern, bevor das Eingabe-HTML injiziert wird, besteht keine Notwendigkeit, die Eingabezeichenfolge zu bereinigen oder die Methoden zu überprüfen.

Die unsicheren HTML-Bereinigungsmethoden können jedoch nicht vertrauenswürdiges HTML, abhängig vom Sanitizer, injizieren, und funktionieren daher mit Trusted Types. Die Methoden können entweder eine Zeichenkette oder einen `TrustedType` als Eingabe nehmen. Wenn ein Sanitizer ebenfalls bereitgestellt wird, wird die Transformationsfunktion zuerst ausgeführt und dann der Sanitizer.

Beachten Sie, dass das Verhalten der Transformationsfunktion in diesem Fall von der Website-Richtlinie abhängt (die möglicherweise die Verwendung der unsicheren Methoden ablehnen könnte).

### Drittlösungen zur HTML-Bereinigung

Vor der Sanitizer API filterten Entwickler Eingabezeichenfolgen typischerweise mit Bibliotheken von Drittanbietern wie [DOMPurify](https://github.com/cure53/DOMPurify), möglicherweise aufgerufen aus den Transformationsfunktionen in Trusted Types.

Diese sind bei Verwendung der sicheren HTML-Bereinigungsmethoden nicht erforderlich, da die API im Browser integriert ist und sich der Parsing-Kontexte und was ausgeführt werden darf, bewusster ist als externe Parser-Bibliotheken es sein können.

Sie können nützlich sein mit den unsicheren HTML-Methoden und Trusted Types, abhängig von den Trusted Type-Politiken der Website.

## Schnittstellen

- [`Sanitizer`](/de/docs/Web/API/Sanitizer)
  - : Ein wiederverwendbares Sanitizer-Konfigurationsobjekt, das definiert, welche Elemente und Attribute entfernt werden sollen, wenn nicht vertrauenswürdige HTML-Zeichenfolgen bereinigt werden. Dies wird in den Methoden verwendet, die HTML-Zeichenfolgen in den DOM oder ein Dokument einfügen.
- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)
  - : Ein Wörterbuch, das eine Sanitizer-Konfiguration definiert. Dies kann an den gleichen Stellen wie [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet werden, ist jedoch wahrscheinlich weniger effizient in der Verwendung und Wiederverwendung.

## Erweiterungen für andere Schnittstellen

### XSS-sichere Methoden

- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)
  - : Parst eine

Zeichenkette mit HTML in einen Unterbaum von Knoten, wobei alle Elemente entfernt werden, die im Kontext des Elements unzulässig sind. Dann werden alle Elemente und Attribute entfernt, die nicht von der Sanitizer-Konfiguration erlaubt werden, und alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind). Der Unterbaum wird dann als Unterbaum des Elements in das DOM eingefügt.

- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Parst eine Zeichenkette mit HTML in einen Unterbaum von Knoten. Dann werden alle Elemente und Attribute entfernt, die nicht von der Sanitizer-Konfiguration erlaubt werden, und alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind). Der Unterbaum wird dann als Unterbaum des `ShadowRoot` eingefügt.
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Parst eine Zeichenkette mit HTML in einen Unterbaum von Knoten. Dann werden alle Elemente und Attribute entfernt, die nicht von der Sanitizer-Konfiguration erlaubt werden, und alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind). Der Unterbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

### XSS-unsichere Methoden

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst eine Zeichenkette mit HTML in einen Unterbaum von Knoten, wobei alle Elemente entfernt werden, die im Kontext des Elements unzulässig sind. Dann werden alle Elemente und Attribute entfernt, die nicht vom Sanitizer erlaubt werden: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt. Der Unterbaum wird dann als Unterbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst eine Zeichenkette mit HTML in einen Unterbaum von Knoten. Dann werden alle Elemente und Attribute entfernt, die nicht vom Sanitizer erlaubt werden: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt. Der Unterbaum wird dann als Unterbaum des `ShadowRoot` eingefügt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Parst eine Zeichenkette mit HTML in einen Unterbaum von Knoten. Dann werden alle Elemente und Attribute entfernt, die nicht vom Sanitizer erlaubt werden: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt. Der Unterbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

## Beispiele

Die folgenden Beispiele zeigen, wie die Sanitizer API mit dem _Standard_-Sanitizer verwendet werden kann (zum Zeitpunkt des Schreibens werden Konfigurationsoperationen noch nicht unterstützt).

### Verwendung von `Element.setHTML()` mit dem Standard-Sanitizer

In den meisten Fällen kann `Element.setHTML()` ohne die Übergabe eines Sanitizers als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden. Der folgende Code zeigt, wie die Methode verwendet wird, um die HTML-Eingabe zu bereinigen, bevor sie in ein Element mit der ID `target` eingefügt wird.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Das {{htmlelement("script")}}-Element wird vom Standard-Sanitizer oder von der `setHTML()`-Methode nicht erlaubt, daher wird das `alert()` entfernt.

Beachten Sie, dass die Verwendung von `Element.setHTMLUnsafe()` mit dem Standard-Sanitizer dieselben HTML-Entitäten bereinigen wird. Der Hauptunterschied besteht darin, dass, wenn Sie diese Methode mit Trusted Types verwenden, sie möglicherweise weiterhin überprüft wird:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Verwendung einer Allow-Sanitizer-Konfiguration

Dieser Code zeigt, wie Sie `Element.setHTMLUnsafe()` mit einer Allow-Sanitizer-Konfiguration verwenden könnten, die nur {{htmlelement("p")}}, {{htmlelement("b")}} und {{htmlelement("div")}}-Elemente erlaubt. Alle anderen Elemente in der Eingabezeichenkette würden entfernt.

```js
const sanitizer = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

Beachten Sie, dass in diesem Fall normalerweise `setHTML()` verwendet werden sollte. Sie sollten `Element.setHTMLUnsafe()` nur verwenden, wenn Sie XSS-unsichere Elemente oder Attribute zulassen müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
