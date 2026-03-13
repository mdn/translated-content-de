---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die **HTML Sanitizer API** ermöglicht es Entwicklern, HTML-Strings zu filtern, um unerwünschte Elemente, Attribute und andere HTML-Entitäten zu entfernen, wenn sie in den DOM oder ein Shadow-DOM eingefügt werden.

## Konzepte und Nutzung

Webanwendungen müssen häufig mit nicht vertrauenswürdigem HTML auf der Client-Seite arbeiten, beispielsweise als Teil einer Client-seitigen Templating-Lösung, beim Rendern von nutzergeneriertem Inhalt oder beim Einbinden von Daten in einem Frame von einer anderen Seite.

Das Injizieren von nicht vertrauenswürdigem HTML kann eine Website anfällig für verschiedene [Arten von Angriffen](/de/docs/Web/Security/Attacks) machen.
Insbesondere funktionieren [Cross-Site-Scripting (XSS) Angriffe](/de/docs/Web/Security/Attacks/XSS), indem nicht vertrauenswürdiges HTML in den DOM injiziert wird, das dann JavaScript im Kontext des aktuellen Ursprungs ausführt — wodurch schädlicher Code so ausgeführt werden kann, als wäre er vom Ursprung der Seite geladen.
Diese Angriffe können gemildert werden, indem unsichere HTML-Elemente und -Attribute entfernt werden, bevor sie in den DOM injiziert werden.

Die HTML Sanitizer API bietet eine Reihe von Methoden, um unerwünschte HTML-Entitäten aus HTML-Eingaben zu entfernen, bevor sie in den DOM injiziert werden.
Es gibt XSS-sichere Versionen, die die Entfernung aller unsicheren Elemente und Attribute erzwingen, und potenziell unsichere Versionen, die Entwicklern volle Kontrolle über die erlaubten HTML-Entitäten geben.

### Methoden zur Säuberung

Die HTML Sanitizer API bietet XSS-sichere und XSS-unsichere Methoden zum Injizieren von HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) sowie zum Parsen von HTML in ein [`Document`](/de/docs/Web/API/Document).

- Sichere Methoden
  - : [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden
  - : [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Alle Methoden nehmen das einzufügende HTML und optional ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) als Argumente an.
Die Sanitizer-Objekte definieren die HTML-Entitäten, die aus der Eingabe herausgefiltert werden, bevor sie injiziert wird.
Die [`Element`](/de/docs/Web/API/Element)-Methoden sind kontextsensitiv und entfernen zusätzlich alle Elemente, die in dem Ziel-Element laut HTML-Spezifikation nicht erlaubt sind.

Die sicheren Methoden entfernen immer XSS-gefährliche Elemente und Attribute.
Wenn kein Sanitizer als Parameter übergeben wird, verwenden sie die [Standard-Sanitizer-Konfiguration](#standard-sanitizer-konfiguration), die sowohl XSS-gefährliche Elemente als auch Attribute entfernt, wie z.B. {{htmlelement("script")}}-Elemente und `onclick`-Ereignishandler, zusammen mit anderen, die in anderen Arten von Angriffen verwendet werden könnten, wenn sie als Benutzereingabe bereitgestellt werden.
Wenn ein benutzerdefinierter Sanitizer mit einer sicheren Methode verwendet wird, wird er implizit aktualisiert, um alle Elemente und Attribute, die nicht XSS-sicher sind, zu entfernen (beachten Sie, dass der übergebene Sanitizer nicht modifiziert wird und möglicherweise weiterhin unsichere Entitäten erlaubt, wenn er mit einer unsicheren Methode verwendet wird).

Die sicheren Methoden sollten anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) zum Injizieren von nicht vertrauenswürdigem HTML-Inhalt verwendet werden.
In den meisten Fällen können Sie beispielsweise [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) mit dem Standard-Sanitizer als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.
Die gleichen Methoden können auch zum Injizieren von vertrauenswürdigen HTML-Strings verwendet werden, die keine XSS-gefährlichen Elemente enthalten müssen.

Die XSS-unsicheren Methoden verwenden die Sanitizer-Konfiguration, die als Argument übergeben wird.
Wenn kein Sanitizer übergeben wird, werden alle im Kontext erlaubten HTML-Elemente und Attribute injiziert.
Dies ähnelt der Verwendung von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), außer dass die Methode Shadow-Roots parst, Elemente entfernt, die im Kontext nicht geeignet sind, und einige andere Eingaben erlaubt, die bei Verwendung der Eigenschaft nicht erlaubt sind.

Die unsicheren Methoden sollten nur mit nicht vertrauenswürdigem HTML verwendet werden, das einige XSS-gefährliche Elemente oder Attribute enthalten muss.
Dies bleibt unsicher, ermöglicht jedoch die Risikoreduktion, indem unsichere Entitäten auf das minimale Set beschränkt werden.
Wenn Sie beispielsweise unsicheres HTML injizieren möchten, aber aus irgendeinem Grund möchten, dass die Eingabe den `onblur`-Handler enthält, könnten Sie dies sicherer tun, indem Sie den Standard-`Sanitizer` ändern und eine unsichere Methode wie gezeigt verwenden:

```js
const sanitizer = new Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

### Sanitizer-Konfigurationen

Eine Sanitizer-Konfiguration definiert, welche HTML-Entitäten erlaubt, ersetzt oder entfernt werden, wenn der Sanitizer verwendet wird, einschließlich Elemente, Attribute, `data-*` Attribute und Kommentare.

Es gibt zwei Mechanismen zur Definition einer Sanitizer-Konfiguration, von denen jeder an alle Säuberungsmethoden übergeben werden kann:

- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist ein Wörterbuchobjekt, das Arrays für die erlaubten/verbotenen Elemente und Attribute sowie boolesche Eigenschaften definiert, die angeben, ob Kommentare und Datenattribute erlaubt oder ausgelassen werden sollen, und so weiter.

  Nur ein Teil der möglichen Konfigurationsoptionen darf in einer bestimmten Konfiguration angegeben werden, um Redundanz und Mehrdeutigkeiten zu reduzieren.
  Das erlaubte Teilset wird im Abschnitt [Erlauben- und Entfernen-Konfigurationen](#erlauben-_und_entfernen-konfigurationen) unten zusammengefasst und in [Gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) ausführlich beschrieben.

- [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), der Methoden bereitstellt, um die Konfiguration ergononomisch zu ändern und sicherzustellen, dass sie gültig bleibt.

  Beispielsweise können Sie eine Methode verwenden, um ein erlaubtes Element hinzuzufügen, und es wird auch das Element aus dem `replaceWithChildrenElements`-Array entfernt (falls vorhanden).
  Die Schnittstelle bietet auch Methoden, um eine Kopie der zugrunde liegenden [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurückzugeben und auch den Sanitizer zu aktualisieren, so dass er XSS-sicher ist.
  Es kann Normalisierungen der Sanitizer-Konfiguration bereitstellen, die zur Konstruktion verwendet wird, was das Verständnis und die Wiederverwendung erleichtert.

Obwohl Sie jede Schnittstelle in jeder der Säuberungsmethoden verwenden können, ist `Sanitizer` wahrscheinlich effizienter zu teilen und wiederzuverwenden als `SanitizerConfig`.

#### Erlauben- und Entfernen-Konfigurationen

Sie können eine Konfiguration auf zwei Arten erstellen:

- Als _Erlauben-Konfiguration_: Das festgelegte Set von Elementen und/oder Attributen, das Sie in der Ausgabe erlauben werden.
- Als _Entfernen-Konfiguration_: Das festgelegte Set, das in der Ausgabe nicht vorhanden sein darf.

Diese Sets werden als Arrays in den Konfigurationsobjektfeldern `elements` und `attributes` sowie `removeElements` und `removeAttributes` angegeben.
Sie dürfen nicht sowohl Erlauben- als auch Entfernen-Arrays für Elemente oder Attribute in derselben Konfiguration angeben, aber andere Kombinationen von Feldern sind erlaubt.
Die folgende Tabelle zeigt die zulässigen Kombinationen.

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

Eine Erlauben-Konfiguration kann optional festlegen, ob elementweise Attribute in ihrem `elements`-Array erlaubt und/oder entfernt werden sollen.
Die erlaubte Konfiguration für diese lokalen Attribute hängt davon ab, ob globale `attributes` oder `removedAttributes` definiert ist.
Der Abschnitt [gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) zeigt die Einschränkungen auf.

Im Allgemeinen ist eine "Erlauben-Konfiguration" sowohl für die Elemente als auch für die Attribute sicherer, da Sie die Elemente und/oder Attribute auflisten, die Sie möchten und wissen, dass sie sicher sind, anstatt alle Elemente, die gefährlich sind oder in Zukunft potenziell als gefährlich betrachtet werden könnten.
Wenn Sie ein leeres Konfigurationsobjekt angeben, wird eine leere Erlauben-Konfiguration verwendet.

##### Erlauben-Konfigurationen

Mit "Erlauben-Konfigurationen" spezifizieren Sie die Elemente und Attribute, die Sie _erlauben_ möchten (oder durch Kindelemente ersetzen) — alle anderen Elemente/Attribute in der Eingabe werden entfernt.
Dadurch wird es einfach, zu verstehen, welche Elemente im DOM erlaubt werden, wenn das HTML geparst wird.
Sie sind nützlich, wenn Sie genau wissen, welche HTML-Entitäten Sie in einem bestimmten Kontext injizieren möchten.

Erlauben-Konfigurationen werden durch die Definition eines `Sanitizer` erstellt, der eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) umschließt, die die [`elements`](/de/docs/Web/API/SanitizerConfig#elements) und/oder [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes) Arrays (und nicht die `removeElements` oder `removeAttributes` Arrays) enthält.

Zum Beispiel wird die folgende Konfiguration durch das Übergeben eines [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) erstellt, das die {{htmlelement("p")}} und {{htmlelement("div")}} Elemente sowie `cite` und `onclick` Attribute auf jedem erlaubten Element zulässt.
Es wird auch {{htmlelement("b")}} Elemente durch ihre Knoten ersetzen.

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Die gleiche Konfiguration kann auch mithilfe der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden erstellt werden.
Beachten Sie, dass im folgenden Code der `Sanitizer()`-Konstruktor ein leeres Objekt nimmt, was zu einem `Sanitizer` führt, bei dem die zugrunde liegende Konfiguration sowohl `elements` als auch `attributes` Arrays enthält - mit anderen Worten, eine "Erlauben-Konfiguration".

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

In "Entfernen-Konfigurationen" spezifizieren Sie die HTML-Elemente und -Attribute, die Sie entfernen möchten: andere Elemente und Attribute sind durch den Sanitizer erlaubt (können aber blockiert werden, wenn Sie eine sichere Sanitizer-Methode verwenden oder wenn das Element im Kontext nicht erlaubt ist).

Entfernen-Konfigurationen werden unter Verwendung eines [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) erstellt, das die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) und/oder [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes) Arrays (und nicht die `elements` oder `attributes` Arrays) enthält.

Zum Beispiel würde die folgende `Sanitizer`-Konfiguration die gleichen Elemente, die in dem vorherigen Code erlaubt wurden, entfernen:

```js
const sanitizer = new Sanitizer({
  removeElements: ["p", "div"],
  removeAttributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

Die Konfiguration kann auch mithilfe der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden erstellt werden.
Um dies zu einer "Entfernen-Konfiguration" zu machen, müssen wir das `removeElements` oder `removeAttributes` Array beim Erstellen des Objekts deklarieren (wenn nur ein Array angegeben wird, wird das andere als Teil der Normalisierung definiert).

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
Wenn Sie zum Beispiel ein Konfigurationsobjekt übergeben, das das `elements` oder `attributes` Array (oder ein leeres Objekt) enthält, wird der Sanitizer eine Erlauben-Konfiguration haben.

In den obigen Beispielen haben wir eine Erlauben-Konfiguration erstellt und dann [`allowElement()`](/de/docs/Web/API/Sanitizer/allowElement), [`allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) und [`replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) aufgerufen, um zusätzliche Elemente und Attribute zu erlauben, und ebenso eine Entfernen-Konfiguration erstellt und [`removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) und [`removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) aufgerufen, um zusätzliche Elemente zu entfernen.

Sie können die Erlauben-Methoden auch bei einer Entfernen-Konfiguration aufrufen und die Entfernen-Methoden bei einer Erlauben-Konfiguration - aber sie verhalten sich anders.
Wenn Sie die Erlauben-Methoden bei einem erlaubenden Sanitizer aufrufen, werden die angegebenen Elemente und Attribute dem zugrunde liegenden `elements` und `attributes` Array hinzugefügt.
Wenn Sie diese Methoden bei einem entfernenden Sanitizer aufrufen, gibt es kein `elements` und `attributes` Array; stattdessen wird das spezifizierte Element aus dem entsprechenden `removeElements` oder `removeAttributes` Array entfernt, falls vorhanden.
Dies funktioniert, weil das Erlauben eines Elements in einem erlaubenden Sanitizer dasselbe ist wie das "Nicht-Entfernen" eines Elements in einem entfernenden Sanitizer.

Sie können alle `Sanitizer`-Methoden auf einem erlaubenden oder entfernenden Sanitizer aufrufen, und die Methode wird alle Änderungen vornehmen, die zu einer gültigen Konfiguration führen.
Wenn Sie beispielsweise ein Element hinzufügen, wird die Methode entweder zu `elements` hinzufügen oder es aus `removeElements` entfernen, falls vorhanden, je nach Art des Sanitizers, und auch das gleiche Element aus dem [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements)-Array entfernen, falls vorhanden.

Einige Operationen, die für eine Erlauben-Konfiguration möglich sind, sind für eine Entfernen-Konfiguration nicht möglich.
Zum Beispiel werden elementweise Attribute im `elements` Array definiert, das in einem entfernenden Sanitizer nicht vorhanden ist.

Die Methoden geben `true` oder `false` zurück, um anzuzeigen, ob sie die zugrunde liegende Konfiguration geändert haben oder nicht.
Wenn Sie also `allowElement()` auf einer erlaubenden Konfiguration aufrufen und das spezifizierte Element nicht vorhanden ist, wird es dem `elements` Array hinzugefügt und die Methode gibt `true` zurück.
Aber wenn das Element bereits vorhanden ist, würde die Methode `false` zurückgeben.
Beachten Sie, dass, wenn Sie dieselbe Methode verwenden, um ein elementweises Attribut zu setzen, diese `false` zurückgeben wird, wenn sie auf einem entfernenden Sanitizer aufgerufen wird, da die Änderung nicht vorgenommen werden kann.

### Eingebaute Konfigurationen

#### XSS-sichere Baseline-Konfiguration

Die XSS-sichere Baseline-Konfiguration definiert die Elemente, die aus einer Eingabe entfernt werden müssen, um sie XSS-sicher zu machen:

- {{htmlelement("embed")}}, {{htmlelement("frame")}}, {{htmlelement("iframe")}}, {{htmlelement("object")}}, {{htmlelement("script")}} und {{SVGElement("use")}}.
- Alle Ereignishandler-Inhaltsattribute, wie `onafterprint`, `onbeforeinput` und so weiter.

Die Konfiguration wird automatisch auf [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und die anderen [sicheren Sanitizer-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) angewendet und stellt sicher, dass XSS-gefährliche Elemente aus der Ausgabe entfernt werden, auch wenn sie durch einen übergebenen Sanitizer erlaubt sind.
Sie können auch [`removeUnsafe`](/de/docs/Web/API/Sanitizer/removeUnsafe) auf einer [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Instanz aufrufen, um diese Konfiguration zu übernehmen und sie XSS-sicher zu machen.

#### Standard-Sanitizer-Konfiguration

Die Standard-Sanitizer-Konfiguration ist restriktiver als die XSS-sichere Baseline.
Sie definiert den Sanitizer, der verwendet wird, wenn Sie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) oder die anderen [sicheren Sanitizer-Methoden](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) aufrufen, ohne ein Sanitizer-Objekt zu übergeben.
Es ist auch die Konfiguration, die durch den [`Sanitizer()`-Konstruktor](/de/docs/Web/API/Sanitizer/Sanitizer) zurückgegeben wird, wenn keine Konfiguration gesetzt ist.

Die Konfiguration entfernt die folgenden Arten von Elementen:

1. Diejenigen, die als XSS-gefährlich bekannt sind (wie in der [XSS-sicheren Baseline-Konfiguration](#xss-sichere_baseline-konfiguration) angegeben).
2. Zusätzliche Elemente, die bei Clickjacking, Spoofing oder anderen Angriffen verwendet werden könnten.
3. Kommentare und `data-*` Attribute.

Daher bietet sie einen Sanitizer mit einer minimalen Angriffsoberfläche, der dennoch für die Mehrheit der Säuberungsfälle geeignet ist.

Für eine Liste der erlaubten Elemente und Attribute, siehe [Default sanitizer configuration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).

### Säuberung und Trusted Types

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Eingaben durch eine vom Benutzer spezifizierte Transformationsfunktion geleitet werden, bevor sie an eine API übergeben werden, die diese Eingabe möglicherweise ausführt.
Diese Transformationsfunktion wird meist zur Säuberung der Eingabe verwendet, muss aber nicht: der Zweck der API ist in erster Linie, es Entwicklern einfach zu machen, Säuberungscode zu prüfen, nicht festzulegen, wie oder ob die Säuberung durchgeführt wird.

Die sicheren HTML-Säuberungsmethoden verwenden keine vertrauenswürdigen Typen, da sie immer alle XSS-gefährlichen Entitäten filtern, bevor HTML in den Eingaben injiziert wird, sodass es keine Notwendigkeit gibt, die Eingabestring zu säubern oder die Methoden zu auditieren.

Die unsicheren HTML-Säuberungsmethoden hingegen können, je nach Sanitizer, nicht vertrauenswürdiges HTML injizieren und somit mit vertrauenswürdigen Typen arbeiten.
Die Methoden können entweder einen String oder einen `TrustedType` als Eingabe nehmen.
Wenn auch ein Sanitizer geliefert wird, wird die Transformationsfunktion zuerst ausgeführt und dann wird der Sanitizer angewendet.

Beachten Sie, dass das Verhalten der Transformationsfunktion in diesem Fall von der Website-Politik abhängt (die möglicherweise die Verwendung der unsicheren Methoden gänzlich ablehnt).

### Drittanbieter-Säuberungsbibliotheken

Vor der Sanitizer-API filterten Entwickler(innen) typischerweise Eingabestrings mithilfe von Drittanbieter-Bibliotheken wie [DOMPurify](https://github.com/cure53/DOMPurify), möglicherweise aufgerufen durch Transformationsfunktionen in vertrauenswürdigen Typen.

Diese sollten bei Verwendung der sicheren HTML-Säuberungsmethoden nicht notwendig sein, da die API im Browser integriert ist und sich des Parsing-Kontextes und dessen, welcher Code ausgeführt werden darf, mehr bewusst ist, als externe Parser-Bibliotheken es sein können.

Sie können je nach derzeitigen Website-Politik vertrauenswürdiger Typen mit den unsicheren HTML-Methoden und Trusted Types nützlich sein.

## Schnittstellen

- [`Sanitizer`](/de/docs/Web/API/Sanitizer)
  - : Ein wiederverwendbares Sanitizer-Konfigurationsobjekt, das definiert, welche Elemente und Attribute erlaubt/entfernt werden sollen, wenn nicht vertrauenswürdige HTML-Strings gesäubert werden.
    Dies wird in den Methoden verwendet, die HTML-Strings in den DOM oder das Dokument einfügen.
- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)
  - : Ein Wörterbuch, das eine Sanitizer-Konfiguration definiert.
    Dies kann an denselben Stellen wie [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet werden, ist jedoch wahrscheinlich weniger effizient in der Verwendung und Wiederverwendung.

## Erweiterungen zu anderen Schnittstellen

### XSS-sichere Methoden

- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)
  - : Parsen eines HTML-Strings in einen Teilbaum von Knoten, wobei alle im Kontext des Elements ungültigen Elemente entfernt werden.
    Anschließend werden alle nicht durch die Sanitizer-Konfiguration erlaubten Elemente und Attribute sowie alle, die als XSS-gefährlich angesehen werden (auch wenn sie durch die Konfiguration erlaubt sind), entfernt.
    Der Teilbaum wird dann in den DOM als Teil des Elements eingefügt.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Parsen eines HTML-Strings in einen Teilbaum von Knoten.
    Anschließend werden alle nicht durch die Sanitizer-Konfiguration erlaubten Elemente und Attribute sowie alle, die als XSS-gefährlich angesehen werden (auch wenn sie durch die Konfiguration erlaubt sind), entfernt.
    Der Teilbaum wird dann als Unterbaum der `ShadowRoot` eingefügt.
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Parsen eines HTML-Strings in einen Teilbaum von Knoten.
    Anschließend werden alle nicht durch die Sanitizer-Konfiguration erlaubten Elemente und Attribute sowie alle, die als XSS-gefährlich angesehen werden (auch wenn sie durch die Konfiguration erlaubt sind), entfernt.
    Der Teilbaum wird dann als die Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

### XSS-unsichere Methoden

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parsen eines HTML-Strings in einen Teilbaum von Knoten, wobei alle im Kontext des Elements ungültigen Elemente entfernt werden.
    Anschließend werden alle nicht durch den Sanitizer erlaubten Elemente und Attribute entfernt: wenn kein Sanitizer angegeben wird, werden alle Elemente erlaubt.
    Der Teilbaum wird dann in den DOM als Teil des Elements eingefügt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parsen eines HTML-Strings in einen Teilbaum von Knoten.
    Anschließend werden alle nicht durch den Sanitizer erlaubten Elemente und Attribute entfernt: wenn kein Sanitizer angegeben wird, werden alle Elemente erlaubt.
    Der Teilbaum wird dann als Unterbaum der `ShadowRoot` eingefügt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Parsen eines HTML-Strings in einen Teilbaum von Knoten.
    Anschließend werden alle nicht durch den Sanitizer erlaubten Elemente und Attribute entfernt: wenn kein Sanitizer angegeben wird, werden alle Elemente erlaubt.
    Der Teilbaum wird dann als die Wurzel des [`Document`](/de/docs/Web/API/Document) gesetzt.

## Beispiele

Die folgenden Beispiele zeigen, wie die Sanitizer-API mit dem _Standard_-Sanitizer verwendet wird.

### Verwenden von `Element.setHTML()` mit dem Standard-Sanitizer

In den meisten Fällen kann das Aufrufen von `Element.setHTML()` ohne Übergabe eines Sanitizers als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden.
Der untenstehende Code zeigt, wie die Methode benutzt wird, um die HTML-Eingabe zu säubern, bevor sie in ein Element mit der ID `target` eingefügt wird.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Das `{{htmlelement("script")}}`-Element ist durch den Standard-Sanitizer oder durch die `setHTML()`-Methode nicht erlaubt, sodass das `alert()` entfernt wird.

Beachten Sie, dass die Verwendung von `Element.setHTMLUnsafe()` mit dem Standard-Sanitizer dieselben HTML-Entitäten säubern wird.
Der Hauptunterschied besteht darin, dass, wenn Sie diese Methode mit Trusted Types verwenden, sie möglicherweise immer noch geprüft wird:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Verwenden einer Erlauben-Sanitizer-Konfiguration

Dieser Code zeigt, wie Sie `Element.setHTMLUnsafe()` mit einem Erlauben-Sanitizer verwenden könnten, der nur die {{htmlelement("p")}}, {{htmlelement("b")}} und {{htmlelement("div")}} Elemente erlaubt.
Alle anderen Elemente im Eingabestring würden entfernt werden.

```js
const sanitizer = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

Beachten Sie, dass in diesem Fall normalerweise `setHTML()` verwendet werden sollte.
Sie sollten `Element.setHTMLUnsafe()` nur verwenden, wenn Sie XSS-gefährliche Elemente oder Attribute zulassen müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
