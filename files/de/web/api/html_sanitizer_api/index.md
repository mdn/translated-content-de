---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{DefaultAPISidebar("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **HTML Sanitizer API** ermöglicht es Entwicklern, HTML-Strings zu filtern, um unerwünschte Elemente, Attribute und andere HTML-Entitäten zu entfernen, wenn sie in das DOM oder ein Shadow-DOM eingefügt werden.

## Konzepte und Verwendung

Webanwendungen müssen häufig mit nicht vertrauenswürdigem HTML auf der Clientseite arbeiten, zum Beispiel als Teil einer Client-seitigen Templating-Lösung, beim Rendern von benutzergenerierten Inhalten oder beim Einbinden von Daten in einem Rahmen von einer anderen Seite.

Das Einfügen von nicht vertrauenswürdigem HTML kann eine Webseite anfällig für verschiedene [Arten von Angriffen](/de/docs/Web/Security/Attacks) machen.
Insbesondere [Cross-Site-Scripting (XSS) Angriffe](/de/docs/Web/Security/Attacks/XSS) funktionieren, indem nicht vertrauenswürdiges HTML in das DOM eingefügt wird, das dann JavaScript im Kontext des aktuellen Ursprunges ausführt — was es bösartigem Code ermöglicht, so ausgeführt zu werden, als sei er vom Ursprung der Seite bereitgestellt worden.
Diese Angriffe können gemindert werden, indem unsichere HTML-Elemente und Attribute entfernt werden, bevor sie in das DOM eingefügt werden.

Die HTML Sanitizer API stellt eine Reihe von Methoden bereit, um unerwünschte HTML-Entitäten aus HTML-Eingaben zu entfernen, bevor sie in das DOM eingefügt werden.
Diese sind in XSS-sichere Versionen unterteilt, die das Entfernen aller unsicheren Elemente und Attribute erzwingen, und potenziell unsicheren Versionen, die den Entwicklern volle Kontrolle über die erlaubten HTML-Entitäten geben.

### Methoden zur Bereinigung

Die HTML Sanitizer API bietet XSS-sichere und XSS-unsichere Methoden zum Einfügen von HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), und zum Parsen von HTML in ein [`Document`](/de/docs/Web/API/Document).

- Sichere Methoden: [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML), und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe), und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Alle Methoden nehmen das einzufügende HTML und eine optionale [Sanitizer-Konfiguration](#sanitizer-konfiguration) als Argumente.
Die Konfiguration definiert die HTML-Entitäten, die aus der Eingabe gefiltert werden, bevor sie eingefügt wird.
Die [`Element`](/de/docs/Web/API/Element)-Methoden sind kontextsensitiv und entfernen zusätzlich alle Elemente, die die HTML-Spezifikation im Ziel-Element nicht zulässt.

Die sicheren Methoden entfernen immer XSS-unsichere Elemente und Attribute.
Wenn kein Sanitizer als Parameter übergeben wird, verwenden sie die Standard-Sanitizer-Konfiguration, die alle Elemente und Attribute erlaubt, außer denjenigen, die als unsicher bekannt sind, wie {{htmlelement("script")}}-Elemente und `onclick`-Eventhandler.
Wenn ein benutzerdefinierter Sanitizer verwendet wird, wird dieser implizit aktualisiert, um alle Elemente und Attribute zu entfernen, die nicht XSS-sicher sind (beachten Sie, dass der übergebene Sanitizer nicht geändert wird und möglicherweise unsichere Entitäten erlaubt, wenn er mit einer unsicheren Methode verwendet wird).

Die sicheren Methoden sollten anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um nicht vertrauenswürdige HTML-Inhalte einzufügen.
Zum Beispiel können Sie in den meisten Fällen [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) mit dem Standard-Sanitizer als Drop-in-Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.
Die gleichen Methoden können auch zum Einfügen von vertrauenswürdigen HTML-Strings verwendet werden, die keine XSS-unsicheren Elemente enthalten müssen.

Die XSS-unsicheren Methoden verwenden die übergebene Sanitizer-Konfiguration.
Wenn kein Sanitizer übergeben wird, werden alle HTML-Elemente und Attribute, die im Kontext erlaubt sind, eingefügt.
Dies ist ähnlich wie die Verwendung von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), außer dass die Methode Shadow-Roots parst, Elemente entfernt, die im Kontext unzulässig sind, und einige andere Eingaben erlaubt, die bei der Verwendung der Eigenschaft nicht erlaubt sind.

Die unsicheren Methoden sollten nur mit nicht vertrauenswürdigem HTML verwendet werden, das einige XSS-unsichere Elemente oder Attribute enthalten muss.
Dies ist immer noch unsicher, erlaubt Ihnen aber, das Risiko zu reduzieren, indem Sie unsichere Entitäten auf das minimal notwendige Set beschränken.
Zum Beispiel, wenn Sie unsicheres HTML einfügen wollten, aber aus irgendeinem Grund der Eingabe der `onblur`-Handler enthalten sollte, könnten Sie dies sicherer tun, indem Sie den Standard-Sanitizer anpassen und eine unsichere Methode verwenden, wie im Folgenden gezeigt wird:

```js
const sanitizer = new Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

### Sanitizer-Konfiguration

Eine Sanitizer-Konfiguration definiert, welche HTML-Entitäten erlaubt, ersetzt oder entfernt werden, wenn der Sanitizer verwendet wird, einschließlich Elemente, Attribute, `data-*`-Attribute und Kommentare.

Es gibt zwei sehr eng verbundene Sanitizer-Konfigurationsschnittstellen, von denen jede an alle Methoden zur Bereinigung übergeben werden kann.

- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist ein Wörterbuchobjekt, das Arrays für die erlaubten/unerlaubten Elemente und Attribute sowie boolesche Eigenschaften definiert, die angeben, ob Kommentare und Datenattribute erlaubt oder weggelassen werden und so weiter.

  Nur ein Untersetzer möglicher Konfigurationsoptionen kann in einer bestimmten Konfiguration angegeben werden, um Redundanzen und Mehrdeutigkeiten zu reduzieren.
  Der erlaubte Teil ist im Abschnitt [Erlauben und Entfernen von Konfigurationen](#erlauben_und_entfernen_von_konfigurationen) unten zusammengefasst und wird im Detail in [Gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) beschrieben.

- [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), der Methoden bereitstellt, um die Konfiguration ergonomisch zu ändern und sicherzustellen, dass sie gültig bleibt.

  Zum Beispiel können Sie eine Methode verwenden, um ein erlaubtes Element hinzuzufügen, und es wird auch das Element aus dem `replaceWithChildrenElements`-Array (falls vorhanden) entfernen.
  Die Schnittstelle bietet auch Methoden, um eine Kopie der zugrunde liegenden [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurückzugeben und auch den Sanitizer so zu aktualisieren, dass er XSS-sicher ist.
  Sie kann Normalisierungen der zur Konstruktion verwendeten Sanitizer-Konfiguration bereitstellen, was es erleichtert, sie zu verstehen und wiederzuverwenden.

Während Sie jede Schnittstelle in jeder der Sanitizing-Methoden verwenden können, ist `Sanitizer` wahrscheinlich effizienter zu teilen und wiederzuverwenden als `SanitizerConfig`.

#### Erlauben und Entfernen von Konfigurationen

Sie können eine Konfiguration auf zwei Arten aufbauen:

- Als _Erlauben-Konfiguration_: das Set der Elemente und/oder Attribute angeben, die Sie im Output erlauben.
- Als _Entfernen-Konfiguration_: das Set angeben, das im Output nicht vorhanden sein darf.

Diese Sets werden als Arrays in den Konfigurationsobjektfeldern angegeben: `elements` und `attributes`, und `removeElements` und `removeAttributes`.
Sie dürfen nicht sowohl erlauben als auch entfernen Arrays für Elemente oder Attribute in derselben Konfiguration angeben, aber andere Kombinationen von Feldern sind erlaubt.
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
| `elements` + `removeElements` | (irgendetwas)                     | ❌      |
| (irgendetwas)                 | `attributes` + `removeAttributes` | ❌      |
| -                             | -                                 | ✔️      |

Eine Erlauben-Konfiguration kann optional angeben, ob pro-Element Attribute erlaubt und/oder entfernt werden sollen in ihrem `elements`-Array.
Die erlaubte Konfiguration für diese lokalen Attribute hängt davon ab, ob globale `attributes` oder `removeAttributes` definiert ist.
Der [gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration)-Abschnitt skizziert die Einschränkungen.

Im Allgemeinen ist eine "Erlauben-Konfiguration" sicherer für sowohl die Elemente als auch die Attribute, weil Sie die Elemente und/oder Attribute auflisten, die Sie wollen und wissen, dass sie sicher sind, anstatt alle Elemente, die gefährlich sind oder in Zukunft als potenziell gefährlich angesehen werden könnten.
Wenn Sie ein leeres Konfigurationsobjekt angeben, wird eine leere Erlauben-Konfiguration verwendet.

##### Erlauben-Konfigurationen

Mit "Erlauben-Konfigurationen" geben Sie die Elemente und Attribute an, die Sie _erlauben_ (oder durch Kind-Elemente ersetzen) möchten — alle anderen Elemente/Attribute in der Eingabe werden entfernt.
Dies macht es einfach zu verstehen, welche Elemente im DOM erlaubt werden, wenn das HTML geparst wird.
Sie sind nützlich, wenn Sie genau wissen, welche HTML-Entitäten Sie in einem bestimmten Kontext einfügen können möchten.

Erlauben-Konfigurationen werden erstellt, indem ein `Sanitizer` definiert wird, das eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) umschließt, die die [`elements`](/de/docs/Web/API/SanitizerConfig#elements)- und/oder [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes)-Arrays (und nicht die `removeElements`- oder `removeAttributes`-Arrays) enthält.

Beispielsweise wird die folgende Konfiguration durch Übergeben einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) erstellt, die {{htmlelement("p")}}- und {{htmlelement("div")}}-Elemente sowie `cite`- und `onclick`-Attribute an jedem erlaubten Element erlaubt.
Sie wird {{htmlelement("b")}}-Elemente durch ihre Kind-Knoten ersetzen.

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Die gleiche Konfiguration kann auch mit [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden erstellt werden.
Beachten Sie, dass im folgenden Code der `Sanitizer()`-Konstruktor ein leeres Objekt nimmt, was in einem `Sanitizer` resultiert, bei dem die zugrunde liegende Konfiguration sowohl `elements`- als auch `attributes`-Arrays enthält — mit anderen Worten, eine "Erlauben-Konfiguration".

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

Bei "Entfernen-Konfigurationen" spezifizieren Sie die HTML-Elemente und Attribute, die Sie entfernen möchten: alle anderen Elemente und Attribute werden vom Sanitizer erlaubt (könnten jedoch blockiert werden, wenn Sie eine sichere Sanitizer-Methode verwenden oder wenn das Element im Kontext nicht erlaubt ist).

Entfernen-Konfigurationen werden mit einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) erstellt, die die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)- und/oder [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes)-Arrays (und nicht die `elements`- oder `attributes`-Arrays) enthält.

Beispielsweise würde die folgende `Sanitizer`-Konfiguration die gleichen Elemente entfernen, die im vorhergehenden Code erlaubt waren:

```js
const sanitizer = new Sanitizer({
  removeElements: ["p", "div"],
  removeAttributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

Die Konfiguration kann auch mit [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden erstellt werden.
Um dies zu einer "Entfernen-Konfiguration" zu machen, müssen wir das `removeElements`- oder `removeAttributes`-Array beim Erstellen des Objekts deklarieren (wenn nur ein Array angegeben ist, wird das andere als Teil der Normalisierung definiert).

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

[`Sanitizer`](/de/docs/Web/API/Sanitizer) wird empfohlen, wenn Sie ein Konfigurationsobjekt verwenden, das Sie möglicherweise wiederverwenden oder ändern möchten.
Ob der Sanitizer eine Erlauben- oder Entfernen-Konfiguration hat, hängt von der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ab, die beim Erstellen des Objekts übergeben wird.
Zum Beispiel, wenn Sie ein Konfigurationsobjekt übergeben, das das `elements`- oder `attributes`-Array (oder ein leeres Objekt) enthält, wird der Sanitizer eine Erlauben-Konfiguration haben.

In den oben genannten Beispielen haben wir eine Erlauben-Konfiguration erstellt und dann [`allowElement()`](/de/docs/Web/API/Sanitizer/allowElement), [`allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) und [`replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) aufgerufen, um zusätzliche Elemente und Attribute zu erlauben, und ähnlich haben wir eine Entfernen-Konfiguration erstellt und [`removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) und [`removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) aufgerufen, um zusätzliche zu entfernende Elemente anzugeben.

Sie können auch die Erlauben-Methoden auf einer Entfernen-Konfiguration und die Entfernen-Methoden auf einer Erlauben-Konfiguration aufrufen — aber sie verhalten sich unterschiedlich.
Wenn Sie die Erlauben-Methoden auf einem Erlauben-Sanitizer aufrufen, werden die angegebenen Elemente und Attribute dem zugrunde liegenden `elements`- und `attributes`-Array hinzugefügt.
Wenn Sie jedoch diese Methoden auf einem Entfernen-Sanitizer aufrufen, gibt es kein `elements`- und `attributes`-Array; stattdessen wird das angegebene Element _entfernt_ aus dem entsprechenden `removeElements`- oder `removeAttributes`-Array, falls vorhanden.
Dies funktioniert, da das Erlauben eines Elements in einem Erlauben-Sanitizer dem "Nicht-Entfernen" eines Elements in einem Entfernen-Sanitizer gleichkommt.

Sie können alle `Sanitizer`-Methoden sowohl auf einem Erlauben- als auch einem Entfernen-Sanitizer aufrufen, und die Methode wird alle Änderungen vornehmen, die sie in eine gültige Konfiguration umsetzen kann.
Zum Beispiel, wenn Sie ein Element hinzufügen, wird die Methode es entweder zu `elements` hinzufügen oder aus `removeElements` entfernen, wenn vorhanden, abhängig vom Typ des Sanitizers, und auch das gleiche Element aus dem [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements)-Array entfernen, falls vorhanden.

Einige Operationen, die für eine Erlauben-Konfiguration möglich sind, sind für eine Entfernen-Konfiguration nicht möglich.
Zum Beispiel werden pro-Element Attribute im `elements`-Array definiert, das in einem Entfernen-Sanitizer nicht vorhanden ist.

Die Methoden geben `true` oder `false` zurück, um anzuzeigen, ob sie die zugrunde liegende Konfiguration geändert haben oder nicht.
Wenn Sie zum Beispiel `allowElement()` auf einer Erlauben-Konfiguration aufrufen und das angegebene Element nicht vorhanden ist, wird es dem `elements`-Array hinzugefügt und die Methode gibt `true` zurück.
Wenn das Element bereits vorhanden ist, gibt die Methode `false` zurück.
Wenn Sie die gleiche Methode aufrufen, um ein pro-Element Attribut zu setzen, gibt diese `false` zurück, wenn auf einem Entfernen-Sanitizer aufgerufen, da die Änderung nicht vorgenommen werden kann.

### Bereinigung und Trusted Types

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Eingaben durch eine benutzerspezifizierte Transformationsfunktion geleitet werden, bevor sie an eine API übergeben werden, die diese Eingaben möglicherweise ausführt.
Diese Transformationsfunktion wird am häufigsten verwendet, um die Eingaben zu bereinigen, sie muss es jedoch nicht: Der Zweck der API besteht in erster Linie darin, es Entwicklern zu erleichtern, den Bereinigungscode zu überprüfen, nicht um zu definieren, wie oder ob die Bereinigung durchgeführt wird.

Die sicheren HTML-Bereinigungsmethoden verwenden keine Trusted Types.
Weil sie immer alle XSS-unsicheren Entitäten filtern, bevor HTML-Eingaben eingefügt werden, besteht keine Notwendigkeit, den Eingabestring zu bereinigen oder die Methoden zu überprüfen.

Die unsicheren HTML-Bereinigungsmethoden können jedoch nicht vertrauenswürdiges HTML injizieren, je nach Sanitizer, und daher mit Trusted Types arbeiten.
Die Methoden können entweder einen String oder ein `TrustedType` als Eingabe nehmen.
Wenn ein Sanitizer auch bereitgestellt wird, wird zuerst die Transformationsfunktion ausgeführt und dann der Sanitizer.

Beachten Sie, dass das Verhalten der Transformationsfunktion in diesem Fall von der Website-Richtlinie abhängt (die möglicherweise die Verwendung der unsicheren Methoden insgesamt ablehnt).

### Drittanbieter-Bibliotheken zur Bereinigung

Vor der Sanitizer-API filterten Entwickler Eingabeargumente typischerweise unter Verwendung von Drittanbieter-Bibliotheken wie [DOMPurify](https://github.com/cure53/DOMPurify), möglicherweise von Transformationsfunktionen in Trusted Types aufgerufen.

Diese sollten nicht notwendig sein, wenn die sicheren HTML-Bereinigungsmethoden verwendet werden, da die API im Browser integriert ist und sich der Parsing-Kontexte und des erlaubten Codes bewusster ist, als externe Parser-Bibliotheken dies sein können.

Diese können mit den unsicheren HTML-Methoden und Trusted Types nützlich sein, abhängig von den Website-Richtlinien für Trusted Types.

## Schnittstellen

- [`Sanitizer`](/de/docs/Web/API/Sanitizer) {{experimental_inline}}
  - : Ein wiederverwendbares Sanitizer-Konfigurationsobjekt, das definiert, welche Elemente und Attribute beim Bereinigen von nicht vertrauenswürdigen HTML-Strings erlaubt/verboten sind.
    Dies wird in den Methoden verwendet, die HTML-Strings in das DOM oder Dokument einfügen.
- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)
  - : Ein Wörterbuch, das eine Sanitizer-Konfiguration definiert.
    Dies kann an den gleichen Stellen wie [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet werden, ist jedoch wahrscheinlich weniger effizient in der Nutzung und Wiederverwendung.

## Erweiterungen für andere Schnittstellen

### XSS-sichere Methoden

- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)
  - : Parst einen HTML-String in einen Unterbaum von Knoten und entfernt dabei alle Elemente, die im Kontext des Elements ungültig sind.
    Entfernt dann alle Elemente und Attribute, die nicht von der Sanitizer-Konfiguration erlaubt sind, sowie alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind).
    Der Unterbaum wird dann in das DOM als Unterbaum des Elements eingefügt.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Parst einen HTML-String in einen Unterbaum von Knoten.
    Entfernt dann alle Elemente und Attribute, die nicht von der Sanitizer-Konfiguration erlaubt sind, sowie alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind).
    Der Unterbaum wird dann als Unterbaum des `ShadowRoot` eingefügt.
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Parst einen HTML-String in einen Unterbaum von Knoten.
    Entfernt dann alle Elemente und Attribute, die nicht von der Sanitizer-Konfiguration erlaubt sind, sowie alle, die als XSS-unsicher gelten (auch wenn sie von der Konfiguration erlaubt sind).
    Der Unterbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

### XSS-unsichere Methoden

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst einen HTML-String in einen Unterbaum von Knoten und entfernt alle Elemente, die im Kontext des Elements ungültig sind.
    Entfernt dann alle Elemente und Attribute, die nicht vom Sanitizer erlaubt sind: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt.
    Der Unterbaum wird dann in das DOM als Unterbaum des Elements eingefügt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst einen HTML-String in einen Unterbaum von Knoten.
    Entfernt dann alle Elemente und Attribute, die nicht vom Sanitizer erlaubt sind: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt.
    Der Unterbaum wird dann als Unterbaum des `ShadowRoot` eingefügt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Parst einen HTML-String in einen Unterbaum von Knoten.
    Entfernt dann alle Elemente und Attribute, die nicht vom Sanitizer erlaubt sind: Wenn kein Sanitizer angegeben ist, werden alle Elemente erlaubt.
    Der Unterbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

## Beispiele

Die folgenden Beispiele zeigen, wie die Sanitizer-API mit dem _Standard_-Sanitizer verwendet wird (zum Zeitpunkt der Erstellung sind Konfigurationsoperationen noch nicht unterstützt).

### Verwendung von `Element.setHTML()` mit dem Standard-Sanitizer

In den meisten Fällen kann `Element.setHTML()` ohne einen Sanitizer zu übergeben als Drop-in-Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden.
Der folgende Code zeigt, wie die Methode verwendet wird, um die HTML-Eingabe zu bereinigen, bevor sie in ein Element mit der ID `target` eingefügt wird.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Das Element `{{htmlelement("script")}}` ist vom Standard-Sanitizer oder der `setHTML()`-Methode nicht erlaubt, daher wird das `alert()` entfernt.

Beachten Sie, dass die Verwendung von `Element.setHTMLUnsafe()` mit dem Standard-Sanitizer die gleichen HTML-Entitäten bereinigen wird.
Der Hauptunterschied besteht darin, dass, wenn Sie diese Methode mit Trusted Types verwenden, sie möglicherweise immer noch überprüft wird:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Verwendung einer Erlauben-Sanitizer-Konfiguration

Dieser Code zeigt, wie Sie `Element.setHTMLUnsafe()` mit einem Erlauben-Sanitizer verwenden, der nur {{htmlelement("p")}}, {{htmlelement("b")}} und {{htmlelement("div")}} Elemente erlaubt.
Alle anderen Elemente im Eingabestring würden entfernt.

```js
const sanitizer = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

Beachten Sie, dass in diesem Fall normalerweise `setHTML()` verwendet werden sollte.
Sie sollten nur `Element.setHTMLUnsafe()` verwenden, wenn Sie XSS-unsichere Elemente oder Attribute zulassen müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
