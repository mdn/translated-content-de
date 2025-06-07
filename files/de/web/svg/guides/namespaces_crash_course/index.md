---
title: Namespaces Crash-Kurs
slug: Web/SVG/Guides/Namespaces_crash_course
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

Als {{Glossary("XML", "XML")}}-Dialekt ist [SVG](/de/docs/Web/SVG) mit Namespaces versehen. Es ist wichtig, das Konzept der Namespaces und deren Verwendung zu verstehen, wenn Sie beabsichtigen, SVG-Inhalte zu erstellen. Namespaces sind für Benutzeragenten, die mehrere XML-Dialekte unterstützen, wesentlich; Browser müssen sehr strikt sein. Die Zeit, die Sie jetzt investieren, um Namespaces zu verstehen, wird Ihnen in Zukunft Kopfschmerzen ersparen.

### Hintergrund

Ein langjähriges Ziel der verschiedenen W3C-Spezifikationen ist es, zu ermöglichen, dass verschiedene Arten von XML-basierten Inhalten im selben XML- oder HTML-Dokument gemischt werden können. Zum Beispiel könnten SVG und [MathML](/de/docs/Web/MathML) direkt in ein auf HTML basierendes wissenschaftliches Dokument integriert werden. Die Möglichkeit, Inhaltstypen auf diese Weise zu mischen, hat viele Vorteile, erforderte jedoch auch die Lösung eines sehr realen Problems.

Natürlich definiert jeder XML-Dialekt die Bedeutung der in seiner Spezifikation beschriebenen Markup-Elementnamen. Das Problem beim Mischen von Inhalten aus verschiedenen XML-Dialekten in einem einzigen Dokument besteht darin, dass die von einem Dialekt definierten Elemente denselben Namen wie Elemente eines anderen Dialekts haben können. Zum Beispiel haben sowohl HTML als auch SVG ein `<title>`-Element. Wie unterscheidet der Benutzeragent zwischen den beiden? Wie unterscheiden CSS-Stile zwischen den beiden? Wie erkennt der Benutzeragent, ob der Inhalt etwas ist, das er kennt, und nicht nur ein bedeutungsloses, undefiniertes HTML-Custom-Element oder eine XML-Datei, die beliebige ihm unbekannte Elementnamen enthält?

Entgegen der landläufigen Meinung ist die Antwort auf diese Frage nicht "Der Benutzeragent kann es aus der `DOCTYPE`-Deklaration erkennen". DTDs wurden nie für gemischte Inhalte konzipiert, und frühere Versuche, gemischte Inhalts-DTDs zu erzeugen, gelten mittlerweile als gescheitert. XML und einige XML-Dialekte (einschließlich SVG und HTML) benötigen keine `DOCTYPE`-Deklaration. SVG 1.2 hat nicht einmal eine. Die Tatsache, dass `DOCTYPE`-Deklarationen (gewöhnlich) mit dem Inhalt in Einzelinhalts-Dateien übereinstimmen, ist lediglich zufällig. DTDs dienen nur der Validierung, nicht der Identifizierung von Inhalten. Jeder Benutzeragent, der XML-Inhalte anhand seiner `DOCTYPE`-Deklaration identifiziert, ist unzuverlässig.

Die echte Antwort auf die Frage ist, dass XML-Inhalte dem Benutzeragenten mitteilen, zu welchem Dialekt die Elementnamen gehören, indem sie ihnen explizite "Namespace-Deklarationen" geben.

### Deklarieren von Namespaces

Wie sehen also diese Namespace-Deklarationen aus und wo kommen sie hin? Hier ist ein kurzes Beispiel.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- more tags here -->
</svg>
```

Die Namespace-Deklaration wird durch den `xmlns`-Parameter bereitgestellt. Dieser Parameter besagt, dass das `<svg>`-Element und seine Kind-Elemente zu dem XML-Dialekt gehören, der den Namespace-Namen `http://www.w3.org/2000/svg` hat, was natürlich SVG ist. Beachten Sie, dass die Namespace-Deklaration nur einmal an einem Wurzelelement bereitgestellt wird (und impliziert wird, wenn sie weggelassen wird). Die Deklaration definiert den _Standard_-Namespace, sodass der Benutzeragent weiß, dass alle Nachkommen des `<svg>`-Elements ebenfalls zum selben Namespace gehören. Benutzeragenten prüfen, ob sie den Namespace-Namen erkennen, um festzustellen, ob sie wissen, wie mit dem Markup umgegangen werden soll.

Beachten Sie, dass Namespace-Namen nur Zeichenfolgen sind, sodass es nicht wichtig ist, dass der SVG-Namespace-Name auch wie eine URI aussieht. URIs werden häufig verwendet, weil sie einzigartig sind, aber es ist nicht beabsichtigt, "irgendwohin zu verlinken". (Tatsächlich werden URIs so häufig verwendet, dass der Begriff "Namespace-URI" anstelle von "Namespace-Name" verbreitet ist.)

#### Neudeklaration des Standard-Namespaces

Wenn alle Nachkommen des Wurzelelements ebenfalls im Standard-Namespace definiert sind, wie mischen Sie dann Inhalte aus einem anderen Namespace ein? Um den SVG-Namespace in HTML einzufügen, verwenden Sie `<svg>`. In XML deklarieren Sie einen Namespace. Hier ist ein kurzes Beispiel.

```xml
<report xmlns="https://www.acme.org/reports">
  <title>Some stats</title>
  <summary>...</summary>
  <statTable xmlns="https://www.acme.org/tables">
    <content>...</content>
    <!-- redeclaring root's default namespace -->
    <summary xmlns="https://www.acme.org/reports">...</summary>
  </statTable>
</report>
```

In diesem Beispiel erklärt das `xmlns`-Attribut auf dem Wurzel-`<report>`-Element den Standard-Namespace zu `https://www.acme.org/reports`, oder `reports`. Infolgedessen werden es und alle seine Kind-Elemente vom Benutzeragenten als zu `reports` gehörend interpretiert, mit Ausnahme des `<content>`-Elements, das im Namespace `https://www.acme.org/tables`, oder `tables`, existiert. Das `<summary>`-Element hat seinen eigenen `xmlns`-Parameter, und durch die Neudeklaration des `reports`-Namespaces wird dem Benutzeragenten mitgeteilt, dass das `<summary>`-Element und seine Nachkommen (es sei denn, sie deklarieren auch einen alternativen Namespace um) zu `reports` gehören.

Für HTML ist `http://www.w3.org/1999/xhtml` der implizierte Namespace. Für SVG ist es `http://www.w3.org/2000/svg`. MathML ist `http://www.w3.org/1998/Math/MathML`.

#### Deklarieren von Namespace-Präfixen

XML-Dialekte definieren nicht nur ihre eigenen Elemente, sondern erklären auch ihre eigenen Parameter.

Standardmäßig haben Parameter überhaupt keinen Namespace. Sie sind nur dadurch als eindeutig bekannt, dass sie an einem Element erscheinen, das einen eindeutigen Namen hat. Manchmal ist es jedoch notwendig, Parameter so zu definieren, dass sie auf vielen verschiedenen Elementen wiederverwendet werden können und trotzdem als derselbe Parameter betrachtet werden, unabhängig von dem Element, mit dem sie verwendet werden. Ein sehr gutes Beispiel dafür ist der `href`-Parameter, der durch die {{Glossary("XLink", "XLink")}}-Spezifikation definiert ist. Dieser Parameter wird häufig von anderen XML-Dialekten verwendet, um auf externe Ressourcen zu verlinken. Aber wie teilen Sie dem Benutzeragenten mit, zu welchem Dialekt der Parameter gehört, in diesem Fall `XLink`? Betrachten Sie das folgende Beispiel.

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

Dieses Beispiel hat den eher ungewöhnlich aussehenden Parameter `xmlns:xlink`. Wie Sie aus dem ersten Teil `xmlns` vermuten können, ist dies eine weitere Namespace-Deklaration. Anstatt jedoch den Standard-Namespace zu setzen, legt diese Namespace-Deklaration den Namespace für etwas fest, das als "[Namespace-Präfix](/de/docs/Web/API/CSSNamespaceRule/prefix)" bezeichnet wird. In diesem Fall haben wir uns entschieden, das Präfix `xlink` (der zweite Teil) zu verwenden, da das Präfix dazu verwendet wird, den Benutzeragenten über Attribute zu informieren, die zu `XLink` gehören.

Wie der Name schon sagt, werden Namespace-Präfixe verwendet, um Parameter- und Elementnamen voranzustellen. Dies geschieht, indem das Namespace-Präfix und ein Doppelpunkt vor dem Parameternamen platziert werden, wie im `<script>`-Element im obigen Beispiel gezeigt. Dies informiert den Benutzeragenten darüber, dass der spezielle Parameter zum Namespace gehört, der dem Namespace-Präfix (`XLink`) zugewiesen wurde, und dass es sich um einen Parameter handelt, der mit derselben Bedeutung auf anderen Elementen verwendet werden kann.

Beachten Sie, dass es in XML ein XML-Fehler ist, ein Präfix zu verwenden, das nicht an einen Namespace-Namen gebunden ist. Die Bindung, die durch den `xmlns:xlink`-Parameter im obigen Beispiel erstellt wird, ist erforderlich, damit der `xlink:href`-Parameter keinen Fehler verursacht. Dieser XLink-Parameter wird auch häufig in SVG auf den `<a>`, `<use>` und `<image>`-Elementen unter anderem verwendet, daher ist es eine gute Idee, die XLink-Deklaration immer in Ihren Dokumenten einzuschließen.

Am Rande sei bemerkt, dass Namespace-Präfixe auch für Elementnamen verwendet werden können. Dies zeigt dem Benutzeragenten an, dass das spezielle Element (diesmal jedoch nicht seine Kinder!) zum Namespace gehört, der dem Präfix zugewiesen wurde. Zu wissen, spart Ihnen einige Verwirrung, wenn Sie auf Markup wie im folgenden Beispiel stoßen:

```xml
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:svg="http://www.w3.org/2000/svg">
  <body>
    <h1>SVG embedded inline in XHTML</h1>
    <svg:svg width="300px" height="200px">
      <svg:circle cx="150" cy="100" r="50" fill="#ff0000" />
    </svg:svg>
  </body>
</html>
```

> [!NOTE]
> Dies ist eine {{Glossary("XHTML", "XHTML")}}-Datei, keine HTML-Datei. XML-Namespaces sind in HTML nicht gültig. Um dieses Beispiel auszuprobieren, müssen Sie Ihre Datei als `.xhtml` speichern.

Beachten Sie, dass es nicht notwendig war, den Standard-Namespace neu zu deklarieren, da ein Namespace-Präfix für das `<svg:svg>`-Element und seine Kind-`<svg:circle>` verwendet wurde. Im Allgemeinen ist es besser, den Standard-Namespace neu zu deklarieren, anstatt viele Elemente auf diese Weise mit Präfixen zu versehen.

### Scripting in Namespaced XML

Namespaces beeinflussen Markup und Scripting ([und sogar CSS](/de/docs/Web/CSS/CSS_namespaces)). Wenn Sie Skripte für namenhafte XML wie SVG schreiben, lesen Sie weiter.

Die [DOM Level 1](https://www.w3.org/TR/REC-DOM-Level-1/)-Empfehlung wurde erstellt, bevor die [ursprüngliche Namespaces in XML](https://www.w3.org/TR/xml-names/)-Empfehlung veröffentlicht wurde; daher ist DOM1 nicht namespace-aware. Dies verursacht Probleme für namenhafte XML wie SVG. Um diese Probleme zu lösen, hat [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) namespace-bewusste Äquivalente aller anwendbaren DOM Level 1-Methoden hinzugefügt. Beim Scripting von SVG ist es wichtig, die [namespace-aware Methoden](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations) zu verwenden. Die folgende Tabelle listet die DOM1-Methoden auf, die in SVG nicht verwendet werden sollten, zusammen mit ihren entsprechenden DOM2-Gegenstücken, die stattdessen verwendet werden sollten.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>DOM1 (nicht verwenden)</th>
      <th>DOM2 (diese verwenden!)</th>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Web/API/Document/createAttribute"
          ><code>createAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/de/docs/Web/API/Document/createAttributeNS"><code>createAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Web/API/Document/createElement"
          ><code>createElement()</code></a
        >
      </td>
      <td>
        <a href="/de/docs/Web/API/Document/createElementNS"><code>createElementNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Web/API/Element/getAttributeNode"
          ><code>getAttributeNode()</code></a
        >
      </td>
      <td>
        <a
          href="/de/docs/Web/API/Element/getAttributeNodeNS"><code>getAttributeNodeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Web/API/Element/getAttribute"
          ><code>getAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/de/docs/Web/API/Element/getAttributeNS"><code>getAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Web/API/Document/getElementsByTagName"
          ><code>getElementsByTagName()</code></a
        >
      </td>
      <td>
        <a href="/de/docs/Web/API/Document/getElementsByTagNameNS"><code>getElementsByTagNameNS()</code></a
        >
        (auch <a href="/de/docs/Web/API/Element/getElementsByTagNameNS">zu Element hinzugefügt</a>)
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Web/API/NamedNodeMap/getNamedItem"
          ><code>getNamedItem()</code></a
        >
      </td>
      <td>
        <a
          href="/de/docs/Web/API/NamedNodeMap/getNamedItemNS"><code>getNamedItemNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/de/docs/Web/API/Element/hasAttribute"><code>hasAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/de/docs/Web/API/Element/hasAttributeNS"><code>hasAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Web/API/Element/removeAttribute"
          ><code>removeAttribute()</code></a
        >
      </td>
      <td>
        <a href="/de/docs/Web/API/Element/removeAttributeNS"><code>removeAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Web/API/NamedNodeMap/removeNamedItem"
          ><code>removeNamedItem()</code></a
        >
      </td>
      <td>
        <a
          href="/de/docs/Web/API/NamedNodeMap/removeNamedItemNS"><code>removeNamedItemNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Web/API/Element/setAttribute"
          ><code>setAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/de/docs/Web/API/Element/setAttributeNS"><code>setAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Web/API/Element/setAttributeNode"
          ><code>setAttributeNode()</code></a
        >
      </td>
      <td>
        <a
          href="/de/docs/Web/API/Element/setAttributeNodeNS"><code>setAttributeNodeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Web/API/NamedNodeMap/setNamedItem"
          ><code>setNamedItem()</code></a
        >
      </td>
      <td>
        <a
          href="/de/docs/Web/API/NamedNodeMap/setNamedItemNS"><code>setNamedItemNS()</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

Der erste Parameter für alle DOM2 Namespace-bewussten Methoden muss der Namespace-Name (auch bekannt als Namespace URI) des betreffenden Elements oder Parameters sein. Für SVG **Elemente** ist dies `http://www.w3.org/2000/svg`. Beachten Sie jedoch folgendes sorgfältig: Die [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting)-Empfehlung gibt an, dass der Namespace-Name für Parameter ohne Präfix keinen Wert hat. Mit anderen Worten, obwohl die Parameter zum Namespace des Elements gehören, verwenden Sie nicht den Namespace-Namen des Tags. Stattdessen **müssen Sie null als Namespace-Namen für unqualifizierte (präfixlose) Parameter verwenden**. Um also ein SVG `rect` _Element_ mit `document.createElementNS()` zu erstellen, müssen Sie folgendes schreiben:

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

Aber um den Wert des `x` _Parameters_ an einem SVG `rect`-Element abzurufen, müssen Sie folgendes schreiben:

```js
rect.getAttributeNS(null, "x");
```

Beachten Sie, dass dies nicht der Fall für Parameter _mit_ einem Namespace-Präfix ist (Parameter, die nicht zum selben XML-Dialekt wie das Element gehören). Parameter wie `xlink:href` erfordern den Namespace-Namen, der diesem Präfix zugewiesen wurde (`http://www.w3.org/1999/xlink` für XLink). Daher schreiben Sie, um den Wert des `xlink:href`-Parameters eines `<a>`-Elements in SVG abzurufen:

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

Es wird empfohlen (ist jedoch nicht erforderlich), für das Setzen von Parametern, die einen Namespace haben, auch deren Präfix im zweiten Parameter zu erwähnen, damit das DOM später leichter in XML zurückkonvertiert werden kann (falls Sie es beispielsweise zurück an den Server senden möchten). Zum Beispiel:

```js
elt.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "other-doc.svg",
);
```

Als abschließendes Beispiel hier eine Demonstration, wie Sie ein `<image>`-Element dynamisch mit JavaScript erstellen könnten:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const XLink_NS = "http://www.w3.org/1999/xlink";
const image = document.createElementNS(SVG_NS, "image");
image.setAttributeNS(null, "width", "100");
image.setAttributeNS(null, "height", "100");
image.setAttributeNS(XLink_NS, "xlink:href", "flower.png");
```

### Fazit

Für SVG, HTML und MathML ist der Namespace impliziert und daher optional. Es ist erforderlich, den Namespace für XML-Dateien zu deklarieren. Wenn Sie dies nicht tun, werden Benutzeragenten den Inhalt nicht erkennen und das XML-Markup anzeigen oder dem Benutzer mitteilen, dass ein Fehler im XML vorliegt.

Wenn Sie SVG schreiben, ist es hilfreich, eine Vorlage zu verwenden, die alle häufig verwendeten Namespace-Deklarationen enthält, wenn Sie neue Dateien erstellen. Wenn Sie noch keine haben, erstellen Sie eine, die mit dem folgenden Code beginnt:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

Selbst wenn Sie nicht alle diese Namespaces in einem bestimmten Dokument verwenden, schadet es nicht, die Namespace-Deklarationen einzuschließen. Es kann Ihnen einige ärgerliche Fehler ersparen, wenn Sie später Inhalte aus einem der nicht genutzten Namespaces hinzufügen.

### Ein vollständiges Beispiel

Ein vollständiges Beispiel finden Sie unter [SVG: Namespaces Crash-Kurs: Beispiel](/de/docs/Web/SVG/Guides/Namespaces_crash_course/Example).
