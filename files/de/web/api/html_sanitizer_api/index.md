---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: 933235fa4b0934142d7e235df41887dc48d2230f
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die **HTML Sanitizer API** ermöglicht es Entwicklern, HTML-Strings zu filtern und unerwünschte Elemente, Attribute und andere HTML-Entitäten zu entfernen, wenn die Strings in das DOM oder ein Shadow DOM eingefügt werden.

## Konzepte und Verwendung

Webanwendungen müssen häufig clientseitig mit nicht vertrauenswürdigem HTML arbeiten, beispielsweise im Rahmen einer clientseitigen Templating-Lösung, beim Rendern nutzergenerierter Inhalte oder beim Einbinden von Daten in einen Frame von einer anderen Website.

Das Einfügen von nicht vertrauenswürdigem HTML kann eine Website für verschiedene [Angriffsarten](/de/docs/Web/Security/Attacks) anfällig machen.
Insbesondere funktionieren [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS), indem nicht vertrauenswürdiges HTML in das DOM eingefügt wird, das anschließend JavaScript im Kontext des aktuellen Ursprungs ausführt. Dadurch kann schädlicher Code so ausgeführt werden, als stamme er vom Ursprung der Website.
Solche Angriffe lassen sich eindämmen, indem unsichere HTML-Elemente und -Attribute entfernt werden, bevor sie in das DOM eingefügt werden.

Die HTML Sanitizer API stellt mehrere Methoden bereit, um unerwünschte HTML-Entitäten aus HTML-Eingaben zu entfernen, bevor diese in das DOM eingefügt werden.
Es gibt XSS-sichere Varianten, die alle unsicheren Elemente und Attribute entfernen, sowie potenziell unsichere Varianten, mit denen Entwickler vollständig kontrollieren können, welche HTML-Entitäten zulässig sind.

### Bereinigungsmethoden

Die HTML Sanitizer API stellt XSS-sichere und XSS-unsichere Methoden bereit, um HTML-Strings in ein [`Element`](/de/docs/Web/API/Element) oder eine [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) einzufügen und HTML in ein [`Document`](/de/docs/Web/API/Document) zu parsen.

- Sichere Methoden
  - : [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static).
- Unsichere Methoden
  - : [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Alle Methoden nehmen das einzufügende HTML und optional einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) als Argumente entgegen.
Das Sanitizer-Objekt legt fest, welche HTML-Entitäten vor dem Einfügen aus der Eingabe herausgefiltert werden.
Die Methoden von [`Element`](/de/docs/Web/API/Element) berücksichtigen den Kontext und verwerfen zusätzlich alle Elemente, die laut HTML-Spezifikation im Zielelement nicht zulässig sind.

Die sicheren Methoden entfernen immer XSS-unsichere Elemente und Attribute.
Wird kein Sanitizer als Parameter übergeben, verwenden sie die [Standardkonfiguration des Sanitizers](#standardkonfiguration_des_sanitizers). Diese entfernt XSS-unsichere Elemente und Attribute wie {{htmlelement("script")}}-Elemente und `onclick`-Event-Handler sowie weitere Entitäten, die bei einer Eingabe durch Benutzer für andere Arten von Angriffen genutzt werden könnten.
Wird ein benutzerdefinierter Sanitizer mit einer sicheren Methode verwendet, wird er bei der Anwendung implizit so angepasst, dass alle nicht XSS-sicheren Elemente und Attribute entfernt werden. Der übergebene Sanitizer selbst wird dabei nicht verändert und könnte bei Verwendung mit einer unsicheren Methode weiterhin unsichere Entitäten zulassen.

Zum Einfügen nicht vertrauenswürdiger HTML-Inhalte sollten die sicheren Methoden anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden.
Beispielsweise können Sie in den meisten Fällen [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) mit dem Standard-Sanitizer als direkten Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.
Dieselben Methoden eignen sich auch zum Einfügen vertrauenswürdiger HTML-Strings, die keine XSS-unsicheren Elemente enthalten müssen.

Die XSS-unsicheren Methoden verwenden die als Argument übergebene Sanitizer-Konfiguration.
Wird kein Sanitizer übergeben, werden alle im jeweiligen Kontext zulässigen HTML-Elemente und -Attribute eingefügt.
Dies ähnelt der Verwendung von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML). Die Methode parst jedoch zusätzlich Shadow Roots, verwirft Elemente, die im jeweiligen Kontext unzulässig sind, und erlaubt bestimmte weitere Eingaben, die bei Verwendung der Eigenschaft nicht zulässig sind.

Die unsicheren Methoden sollten nur für nicht vertrauenswürdiges HTML verwendet werden, das bestimmte XSS-unsichere Elemente oder Attribute enthalten muss.
Dies bleibt unsicher, aber Sie können das Risiko verringern, indem Sie die zugelassenen unsicheren Entitäten auf das notwendige Minimum beschränken.
Wenn Sie beispielsweise unsicheres HTML einfügen möchten und die Eingabe aus irgendeinem Grund den `onblur`-Handler enthalten muss, können Sie dies auf sicherere Weise tun, indem Sie den Standard-`Sanitizer` anpassen und wie gezeigt eine unsichere Methode verwenden:

```js
const sanitizer = new Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

### Sanitizer-Konfigurationen

Eine Sanitizer-Konfiguration legt fest, welche HTML-Entitäten bei Verwendung des Sanitizers zugelassen, ersetzt oder entfernt werden. Dazu gehören Elemente, Attribute, `data-*`-Attribute und Kommentare.

Es gibt zwei Möglichkeiten, eine Sanitizer-Konfiguration zu definieren. Beide können an alle Bereinigungsmethoden übergeben werden:

- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist ein Dictionary-Objekt, das Arrays für zugelassene und nicht zugelassene Elemente und Attribute sowie boolesche Eigenschaften definiert. Letztere geben unter anderem an, ob Kommentare und Datenattribute zugelassen oder weggelassen werden.

  In einer Konfiguration darf nur eine Teilmenge der möglichen Konfigurationsoptionen angegeben werden, um Redundanz und Mehrdeutigkeit zu vermeiden.
  Die zulässige Teilmenge ist im Abschnitt [Zulassungs- und Entfernungskonfigurationen](#zulassungs-_und_entfernungskonfigurationen) zusammengefasst und unter [Gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) ausführlich beschrieben.

- [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig). Er stellt Methoden bereit, mit denen sich die Konfiguration bequem ändern und ihre Gültigkeit sicherstellen lässt.

  Beispielsweise können Sie mit einer Methode ein zugelassenes Element hinzufügen. Dadurch wird das Element gegebenenfalls auch aus dem Array `replaceWithChildrenElements` entfernt.
  Die Schnittstelle stellt außerdem Methoden bereit, um eine Kopie der zugrunde liegenden [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) zurückzugeben und den Sanitizer XSS-sicher zu machen.
  Sie kann die bei ihrer Erstellung verwendete Sanitizer-Konfiguration normalisieren, sodass diese leichter zu verstehen und wiederzuverwenden ist.

Sie können zwar beide Varianten in allen Bereinigungsmethoden verwenden, `Sanitizer` lässt sich aber voraussichtlich effizienter gemeinsam nutzen und wiederverwenden als `SanitizerConfig`.

#### Zulassungs- und Entfernungskonfigurationen

Sie können eine Konfiguration auf zwei Arten erstellen:

- Als _Zulassungskonfiguration_: Sie geben die Elemente und/oder Attribute an, die in der Ausgabe zulässig sein sollen.
- Als _Entfernungskonfiguration_: Sie geben die Elemente und/oder Attribute an, die in der Ausgabe nicht vorkommen dürfen.

Diese Mengen werden als Arrays in den Feldern `elements` und `attributes` beziehungsweise `removeElements` und `removeAttributes` des Konfigurationsobjekts angegeben.
Sie dürfen in derselben Konfiguration für Elemente oder Attribute nicht gleichzeitig Zulassungs- und Entfernungsarrays angeben. Andere Kombinationen von Feldern sind jedoch zulässig.
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
| `elements` + `removeElements` | (beliebig)                        | ❌      |
| (beliebig)                    | `attributes` + `removeAttributes` | ❌      |
| -                             | -                                 | ✔️      |

Eine Zulassungskonfiguration kann in ihrem Array `elements` optional festlegen, ob Attribute für einzelne Elemente zugelassen und/oder entfernt werden sollen.
Welche Konfigurationen für diese elementspezifischen Attribute zulässig sind, hängt davon ab, ob globale `attributes` oder `removedAttributes` definiert sind.
Der Abschnitt [Gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) beschreibt die Einschränkungen.

Im Allgemeinen ist eine „Zulassungskonfiguration“ sowohl für Elemente als auch für Attribute sicherer: Sie listen die Elemente und/oder Attribute auf, die Sie benötigen und für sicher halten, statt alle Einträge aufzuführen, die gefährlich sind oder künftig als gefährlich gelten könnten.
Wenn Sie ein leeres Konfigurationsobjekt angeben, wird eine leere Zulassungskonfiguration verwendet.

##### Zulassungskonfigurationen

Bei „Zulassungskonfigurationen“ geben Sie an, welche Elemente und Attribute Sie _zulassen_ möchten oder welche Elemente durch ihre Kindelemente ersetzt werden sollen. Alle anderen Elemente und Attribute in der Eingabe werden verworfen.
So lässt sich leicht nachvollziehen, welche Elemente nach dem Parsen des HTML im DOM zulässig sein werden.
Sie sind nützlich, wenn Sie genau wissen, welche HTML-Entitäten Sie in einem bestimmten Kontext einfügen möchten.

Zulassungskonfigurationen werden erstellt, indem Sie einen `Sanitizer` definieren, der eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) mit den Arrays [`elements`](/de/docs/Web/API/SanitizerConfig#elements) und/oder [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes) umschließt, jedoch ohne die Arrays `removeElements` oder `removeAttributes`.

Die folgende Konfiguration wird beispielsweise erstellt, indem eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben wird, die {{htmlelement("p")}}- und {{htmlelement("div")}}-Elemente sowie die Attribute `cite` und `onclick` für jedes zugelassene Element erlaubt.
Außerdem ersetzt sie {{htmlelement("b")}}-Elemente durch ihre Kindknoten.

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Dieselbe Konfiguration lässt sich auch mit Methoden von [`Sanitizer`](/de/docs/Web/API/Sanitizer) erstellen.
Beachten Sie, dass der `Sanitizer()`-Konstruktor im folgenden Code ein leeres Objekt entgegennimmt. Dadurch entsteht ein `Sanitizer`, dessen zugrunde liegende Konfiguration sowohl ein `elements`- als auch ein `attributes`-Array enthält – mit anderen Worten eine „Zulassungskonfiguration“.

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

##### Entfernungskonfigurationen

Bei „Entfernungskonfigurationen“ geben Sie die HTML-Elemente und -Attribute an, die entfernt werden sollen. Alle anderen Elemente und Attribute werden vom Sanitizer zugelassen, können jedoch blockiert werden, wenn Sie eine sichere Bereinigungsmethode verwenden oder das Element im jeweiligen Kontext unzulässig ist.

Entfernungskonfigurationen werden mit einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) erstellt, die die Arrays [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) und/oder [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes) enthält, jedoch nicht die Arrays `elements` oder `attributes`.

Die folgende `Sanitizer`-Konfiguration würde beispielsweise dieselben Elemente entfernen, die im vorherigen Code zugelassen wurden:

```js
const sanitizer = new Sanitizer({
  removeElements: ["p", "div"],
  removeAttributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

Die Konfiguration kann auch mit Methoden von [`Sanitizer`](/de/docs/Web/API/Sanitizer) erstellt werden.
Damit es sich um eine „Entfernungskonfiguration“ handelt, müssen wir beim Erstellen des Objekts das Array `removeElements` oder `removeAttributes` angeben. Wenn nur eines der Arrays angegeben wird, wird das andere im Zuge der Normalisierung definiert.

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

#### Einträge in `Sanitizer`-Konfigurationen hinzufügen und entfernen

[`Sanitizer`](/de/docs/Web/API/Sanitizer) empfiehlt sich, wenn Sie ein Konfigurationsobjekt verwenden, das Sie möglicherweise wiederverwenden oder ändern möchten.
Ob der Sanitizer eine Zulassungs- oder Entfernungskonfiguration enthält, hängt von der bei seiner Erstellung übergebenen [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ab.
Wenn Sie beispielsweise ein Konfigurationsobjekt mit einem `elements`- oder `attributes`-Array oder ein leeres Objekt übergeben, erhält der Sanitizer eine Zulassungskonfiguration.

In den obigen Beispielen haben wir eine Zulassungskonfiguration erstellt und anschließend [`allowElement()`](/de/docs/Web/API/Sanitizer/allowElement), [`allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) und [`replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) aufgerufen, um weitere Elemente und Attribute zuzulassen. Entsprechend haben wir eine Entfernungskonfiguration erstellt und [`removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) sowie [`removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) aufgerufen, um weitere zu entfernende Elemente und Attribute anzugeben.

Sie können die Zulassungsmethoden auch für eine Entfernungskonfiguration und die Entfernungsmethoden für eine Zulassungskonfiguration aufrufen – ihr Verhalten unterscheidet sich jedoch.
Wenn Sie Zulassungsmethoden für einen Sanitizer mit Zulassungskonfiguration aufrufen, werden die angegebenen Elemente und Attribute den zugrunde liegenden Arrays `elements` und `attributes` hinzugefügt.
Bei einem Sanitizer mit Entfernungskonfiguration gibt es dagegen keine Arrays `elements` und `attributes`. Stattdessen wird der angegebene Eintrag, sofern vorhanden, aus dem entsprechenden Array `removeElements` oder `removeAttributes` _entfernt_.
Das funktioniert, weil das Zulassen eines Elements in einer Zulassungskonfiguration dem „Nichtentfernen“ eines Elements in einer Entfernungskonfiguration entspricht.

Sie können alle `Sanitizer`-Methoden sowohl für Sanitizer mit Zulassungs- als auch für solche mit Entfernungskonfiguration aufrufen. Die Methode nimmt dann alle möglichen Änderungen vor, die zu einer gültigen Konfiguration führen.
Wenn Sie beispielsweise ein Element hinzufügen, wird es je nach Art des Sanitizers entweder zu `elements` hinzugefügt oder gegebenenfalls aus `removeElements` entfernt. Außerdem wird dasselbe Element, sofern vorhanden, aus dem Array [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) entfernt.

Einige Vorgänge, die mit einer Zulassungskonfiguration möglich sind, lassen sich mit einer Entfernungskonfiguration nicht durchführen.
Beispielsweise werden Attribute für einzelne Elemente im Array `elements` definiert, das bei einem Sanitizer mit Entfernungskonfiguration nicht vorhanden ist.

Die Methoden geben `true` oder `false` zurück, um anzuzeigen, ob sie die zugrunde liegende Konfiguration geändert haben.
Wenn Sie also `allowElement()` für eine Zulassungskonfiguration aufrufen und das angegebene Element noch nicht vorhanden ist, wird es dem Array `elements` hinzugefügt und die Methode gibt `true` zurück.
Ist das Element bereits vorhanden, gibt die Methode dagegen `false` zurück.
Beachten Sie, dass dieselbe Methode beim Festlegen eines Attributs für ein einzelnes Element `false` zurückgibt, wenn sie für einen Sanitizer mit Entfernungskonfiguration aufgerufen wird, da diese Änderung nicht möglich ist.

### Integrierte Konfigurationen

#### XSS-sichere Basiskonfiguration

Die XSS-sichere Basiskonfiguration legt fest, welche Einträge aus einer Eingabe entfernt werden müssen, um sie XSS-sicher zu machen:

- {{htmlelement("embed")}}, {{htmlelement("frame")}}, {{htmlelement("iframe")}}, {{htmlelement("object")}}, {{htmlelement("script")}} und {{SVGElement("use")}}.
- Alle Event-Handler-Content-Attribute wie `onafterprint`, `onbeforeinput` und weitere.

Die Konfiguration wird automatisch bei [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und den anderen [sicheren Bereinigungsmethoden](#bereinigungsmethoden) angewendet. Dadurch werden XSS-unsichere Einträge auch dann aus der Ausgabe entfernt, wenn ein übergebener Sanitizer sie zulässt.
Sie können auch [`removeUnsafe`](/de/docs/Web/API/Sanitizer/removeUnsafe) für eine [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Instanz aufrufen, um diese Konfiguration anzuwenden und den Sanitizer XSS-sicher zu machen.

#### Standardkonfiguration des Sanitizers

Die Standardkonfiguration des Sanitizers ist restriktiver als die XSS-sichere Basiskonfiguration.
Sie definiert den Sanitizer, der verwendet wird, wenn Sie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) oder eine andere [sichere Bereinigungsmethode](#bereinigungsmethoden) ohne Sanitizer-Objekt aufrufen.
Sie ist außerdem die Konfiguration, die der [`Sanitizer()`-Konstruktor](/de/docs/Web/API/Sanitizer/Sanitizer) zurückgibt, wenn keine Konfiguration angegeben wird.

Die Konfiguration entfernt folgende Arten von Einträgen:

1. Einträge, die bekanntermaßen XSS-unsicher sind, wie in der [XSS-sicheren Basiskonfiguration](#xss-sichere_basiskonfiguration) festgelegt.
2. Zusätzliche Einträge, die für Clickjacking, Spoofing oder andere Angriffe verwendet werden könnten.
3. Kommentare und `data-*`-Attribute.

Damit bietet sie einen Sanitizer mit einer minimalen Angriffsfläche, der sich dennoch für die meisten Anwendungsfälle der Bereinigung eignet.

Eine Liste der zugelassenen Elemente und Attribute finden Sie unter [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).

### Bereinigung und Trusted Types

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) stellt Mechanismen bereit, die sicherstellen, dass Eingaben eine benutzerdefinierte Transformationsfunktion durchlaufen, bevor sie an eine API übergeben werden, die diese Eingaben möglicherweise ausführt.
Diese Transformationsfunktion wird meist zur Bereinigung der Eingabe verwendet, muss dies aber nicht tun. Der Hauptzweck der API besteht darin, Entwicklern die Überprüfung von Bereinigungscode zu erleichtern – nicht darin festzulegen, wie oder ob eine Bereinigung erfolgt.

Die sicheren HTML-Bereinigungsmethoden verwenden keine Trusted Types.
Da sie vor dem Einfügen des HTML immer alle XSS-unsicheren Entitäten herausfiltern, ist es nicht nötig, den Eingabe-String zusätzlich zu bereinigen oder die Methoden zu überprüfen.

Die unsicheren HTML-Bereinigungsmethoden können dagegen je nach Sanitizer nicht vertrauenswürdiges HTML einfügen und arbeiten daher mit Trusted Types.
Die Methoden können entweder einen String oder einen `TrustedType` als Eingabe entgegennehmen.
Wird zusätzlich ein Sanitizer angegeben, wird zuerst die Transformationsfunktion und anschließend der Sanitizer ausgeführt.

Beachten Sie, dass das Verhalten der Transformationsfunktion in diesem Fall von der Richtlinie der Website abhängt. Diese kann beispielsweise die Verwendung sämtlicher unsicherer Methoden untersagen.

### Bereinigungsbibliotheken von Drittanbietern

Vor der Sanitizer API filterten Entwickler Eingabe-Strings üblicherweise mit Bibliotheken von Drittanbietern wie [DOMPurify](https://github.com/cure53/DOMPurify), gegebenenfalls aufgerufen aus Transformationsfunktionen für Trusted Types.

Bei Verwendung der sicheren HTML-Bereinigungsmethoden sollten solche Bibliotheken nicht erforderlich sein: Die API ist in den Browser integriert und kann daher den Parsing-Kontext und die Frage, welcher Code ausgeführt werden darf, besser berücksichtigen als externe Parser-Bibliotheken.

Bei den unsicheren HTML-Methoden und Trusted Types können sie je nach Trusted-Types-Richtlinien der Website nützlich sein.

## Schnittstellen

- [`Sanitizer`](/de/docs/Web/API/Sanitizer)
  - : Ein wiederverwendbares Sanitizer-Konfigurationsobjekt, das festlegt, welche Elemente und Attribute beim Bereinigen nicht vertrauenswürdiger HTML-Strings zugelassen oder entfernt werden sollen.
    Es wird in den Methoden verwendet, die HTML-Strings in das DOM oder ein Document einfügen.
- [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)
  - : Ein Dictionary, das eine Sanitizer-Konfiguration definiert.
    Es kann an denselben Stellen wie [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet werden, ist aber bei Verwendung und Wiederverwendung wahrscheinlich weniger effizient.

## Erweiterungen anderer Schnittstellen

### XSS-sichere Methoden

- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)
  - : Parst einen HTML-String zu einem Teilbaum aus Knoten und verwirft dabei alle Elemente, die im Kontext des Elements ungültig sind.
    Anschließend werden alle Elemente und Attribute verworfen, die von der Sanitizer-Konfiguration nicht zugelassen werden oder als XSS-unsicher gelten – selbst wenn die Konfiguration sie zulässt.
    Der Teilbaum wird dann als Teilbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Parst einen HTML-String zu einem Teilbaum aus Knoten.
    Anschließend werden alle Elemente und Attribute verworfen, die von der Sanitizer-Konfiguration nicht zugelassen werden oder als XSS-unsicher gelten – selbst wenn die Konfiguration sie zulässt.
    Der Teilbaum wird dann als Teilbaum der `ShadowRoot` eingefügt.
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Parst einen HTML-String zu einem Teilbaum aus Knoten.
    Anschließend werden alle Elemente und Attribute verworfen, die von der Sanitizer-Konfiguration nicht zugelassen werden oder als XSS-unsicher gelten – selbst wenn die Konfiguration sie zulässt.
    Der Teilbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) festgelegt.

### XSS-unsichere Methoden

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst einen HTML-String zu einem Teilbaum aus Knoten und verwirft dabei alle Elemente, die im Kontext des Elements ungültig sind.
    Anschließend werden alle Elemente und Attribute verworfen, die der Sanitizer nicht zulässt. Wird kein Sanitizer angegeben, sind alle Elemente zulässig.
    Der Teilbaum wird dann als Teilbaum des Elements in das DOM eingefügt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst einen HTML-String zu einem Teilbaum aus Knoten.
    Anschließend werden alle Elemente und Attribute verworfen, die der Sanitizer nicht zulässt. Wird kein Sanitizer angegeben, sind alle Elemente zulässig.
    Der Teilbaum wird dann als Teilbaum der `ShadowRoot` eingefügt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Parst einen HTML-String zu einem Teilbaum aus Knoten.
    Anschließend werden alle Elemente und Attribute verworfen, die der Sanitizer nicht zulässt. Wird kein Sanitizer angegeben, sind alle Elemente zulässig.
    Der Teilbaum wird dann als Wurzel des [`Document`](/de/docs/Web/API/Document) festgelegt.

## Beispiele

Die folgenden Beispiele zeigen, wie die Sanitizer API mit dem _Standard-Sanitizer_ verwendet wird.

### `Element.setHTML()` mit dem Standard-Sanitizer verwenden

In den meisten Fällen kann `Element.setHTML()` ohne Angabe eines Sanitizers als direkter Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden.
Der folgende Code zeigt, wie die Methode die HTML-Eingabe bereinigt, bevor sie in ein Element mit der ID `target` eingefügt wird.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Das Element `{{htmlelement("script")}}` wird weder vom Standard-Sanitizer noch von der Methode `setHTML()` zugelassen. Daher wird `alert()` entfernt.

Beachten Sie, dass `Element.setHTMLUnsafe()` mit dem Standard-Sanitizer dieselben HTML-Entitäten bereinigt.
Der wesentliche Unterschied besteht darin, dass die Verwendung dieser Methode mit Trusted Types möglicherweise weiterhin überprüft wird:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Eine Zulassungskonfiguration für den Sanitizer verwenden

Dieser Code zeigt, wie Sie `Element.setHTMLUnsafe()` mit einem Sanitizer verwenden können, der ausschließlich {{htmlelement("p")}}-, {{htmlelement("b")}}- und {{htmlelement("div")}}-Elemente zulässt.
Alle anderen Elemente im Eingabe-String würden entfernt.

```js
const sanitizer = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

Beachten Sie, dass Sie in diesem Fall normalerweise `setHTML()` verwenden sollten.
Verwenden Sie `Element.setHTMLUnsafe()` nur, wenn Sie XSS-unsichere Elemente oder Attribute zulassen müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
