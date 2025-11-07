---
title: Ein Schnellkurs zu Namespaces
slug: Web/SVG/Guides/Namespaces_crash_course
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Als {{Glossary("XML", "XML")}}-Dialekt ist [SVG](/de/docs/Web/SVG) namensraumbezogen. Es ist wichtig, das Konzept der Namespaces zu verstehen und wie sie verwendet werden, wenn Sie vorhaben, SVG-Inhalte zu erstellen. Namespaces sind unerlässlich für Benutzeragenten, die mehrere XML-Dialekte unterstützen; Browser müssen sehr strikt sein. Sich jetzt die Zeit zu nehmen, Namespaces zu verstehen, wird Ihnen in Zukunft Kopfschmerzen ersparen.

### Hintergrund

Ein langjähriges Ziel der verschiedenen W3C-Spezifikationen ist es, verschiedene Arten von XML-basierten Inhalten zusammen in derselben XML- oder HTML-Datei mischen zu können. Zum Beispiel könnten SVG und [MathML](/de/docs/Web/MathML) direkt in ein auf HTML basierendes wissenschaftliches Dokument eingebunden werden. Die Möglichkeit, Inhaltsarten auf diese Weise zu mischen, bietet viele Vorteile, aber es erforderte auch die Lösung eines sehr realen Problems.

Natürlich definiert jeder XML-Dialekt die Bedeutung der Markup-Elementnamen, die in seiner Spezifikation beschrieben sind. Das Problem beim Mischen von Inhalten aus verschiedenen XML-Dialekten in einem Dokument besteht darin, dass die von einem Dialekt definierten Elemente denselben Namen haben können wie Elemente, die von einem anderen definiert wurden. Zum Beispiel haben sowohl HTML als auch SVG ein `<title>`-Element. Wie unterscheidet der Benutzeragent zwischen den beiden? Wie unterscheiden CSS-Stile zwischen den beiden? Und wie erkennt der Benutzeragent überhaupt, wann Inhalt etwas ist, das er kennt, und nicht nur ein bedeutungsloses, undefiniertes HTML-Benutzerdefiniertelement oder eine XML-Datei mit willkürlichen unbekannten Elementnamen?

Entgegen der landläufigen Meinung lautet die Antwort auf diese Frage nicht "es kann dies aus der `DOCTYPE`-Deklaration erkennen". DTDs wurden nie mit gemischten Inhalten im Sinn entworfen, und frühere Versuche, gemischte Inhalt-DTDs zu erstellen, gelten inzwischen als gescheitert. XML und einige XML-Dialekte (einschließlich SVG und HTML) erfordern keine `DOCTYPE`-Deklaration. SVG 1.2 hat nicht einmal eine. Die Tatsache, dass `DOCTYPE`-Deklarationen (meistens) mit dem Inhalt in Dateien eines einzelnen Inhaltstyps übereinstimmen, ist rein zufällig. DTDs dienen nur der Validierung, nicht der Identifikation von Inhalten. Jeder Benutzeragent, der XML-Inhalt anhand seiner `DOCTYPE`-Deklaration identifiziert, ist unzuverlässig.

Die tatsächliche Antwort auf die Frage ist, dass XML-Inhalt dem Benutzeragenten durch explizite "Namespace-Deklarationen" mitteilt, zu welchem Dialekt die Elementnamen gehören.

### Deklarieren von Namespaces

Wie sehen diese Namespace-Deklarationen also aus, und wo werden sie platziert? Hier ist ein kurzes Beispiel.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- more tags here -->
</svg>
```

Die Namespace-Deklaration wird durch den `xmlns`-Parameter bereitgestellt. Dieser Parameter sagt aus, dass das `<svg>`-Element und seine Kindelemente zu dem XML-Dialekt gehören, der den Namespace-Namen `http://www.w3.org/2000/svg` hat, was natürlich SVG ist. Beachten Sie, dass die Namespace-Deklaration nur einmal auf einem Wurzelelement bereitgestellt wird (und impliziert wird, wenn sie weggelassen wird). Die Deklaration definiert den _Standard_-Namespace, sodass der Benutzeragent weiß, dass alle Nachkommen des `<svg>`-Elements ebenfalls zu demselben Namespace gehören. Benutzeragenten überprüfen, ob sie den Namespace-Namen erkennen, um festzustellen, ob sie wissen, wie das Markup gehandhabt werden muss.

Beachten Sie, dass Namespace-Namen nur Zeichenfolgen sind, sodass es nicht wichtig ist, dass der SVG-Namespace-Name auch wie ein URI aussieht. URIs werden häufig verwendet, weil sie eindeutig sind, aber die Absicht ist nicht, "irgendwohin zu verlinken". (In der Tat werden URIs so häufig verwendet, dass der Begriff "Namespace-URI" häufig anstelle von "Namespace-Name" verwendet wird.)

#### Erneutes Deklarieren des Standard-Namespaces

Wenn alle Nachkommen des Wurzelelements ebenfalls im Standard-Namespace definiert sind, wie mischt man dann Inhalte aus einem anderen Namespace ein? Um den SVG-Namespace in HTML einzuschließen, fügen Sie `<svg>` ein. In XML deklarieren Sie einen Namespace. Hier ist ein kurzes Beispiel.

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

In diesem Beispiel deklariert das `xmlns`-Attribut am Wurzel-`<report>`-Element den Standard-Namespace als `https://www.acme.org/reports`, oder `reports`. Infolgedessen werden es und alle seine Kindelemente vom Benutzeragenten als zu `reports` gehörend interpretiert, mit Ausnahme des `<content>`-Elements, das im Namespace `https://www.acme.org/tables`, oder `tables`, existiert. Das `<summary>`-Element hat seinen eigenen `xmlns`-Parameter, und durch das erneute Deklarieren des `reports`-Namespaces wird dem Benutzeragenten mitgeteilt, dass das `<summary>`-Element und seine Nachkommen (sofern sie nicht auch einen alternativen Namespace erneut deklarieren) zu `reports` gehören.

Im HTML ist `http://www.w3.org/1999/xhtml` der implizite Namespace. Bei SVG ist es `http://www.w3.org/2000/svg`. Bei MathML ist es `http://www.w3.org/1998/Math/MathML`.

#### Deklarieren von Namespace-Präfixen

XML-Dialekte definieren nicht nur ihre eigenen Elemente, sondern deklarieren auch ihre eigenen Parameter.

Standardmäßig haben Parameter überhaupt keinen Namespace. Sie gelten nur deshalb als eindeutig, weil sie an einem Element erscheinen, das selbst einen eindeutigen Namen hat. Manchmal ist es jedoch notwendig, Parameter so zu definieren, dass sie auf vielen verschiedenen Elementen wiederverwendet werden können und immer noch als derselbe Parameter betrachtet werden, unabhängig von dem Element, mit dem sie verwendet werden. Ein sehr gutes Beispiel dafür ist der `href`-Parameter, der in der {{Glossary("XLink", "XLink")}}-Spezifikation definiert ist. Dieser Parameter wird häufig von anderen XML-Dialekten als Mittel zum Verweisen auf externe Ressourcen verwendet. Aber wie teilt man dem Benutzeragenten mit, zu welchem Dialekt der Parameter gehört, in diesem Fall `XLink`? Betrachten Sie das folgende Beispiel.

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

Dieses Beispiel hat den etwas ungewöhnlich aussehenden Parameter `xmlns:xlink`. Wie Sie aus dem ersten `xmlns`-Teil vermuten werden, handelt es sich um eine weitere Namespace-Deklaration. Anstatt jedoch den Standard-Namespace festzulegen, setzt diese Namespace-Deklaration den Namespace für etwas, das als "[Namespace-Präfix](/de/docs/Web/API/CSSNamespaceRule/prefix)" bezeichnet wird. In diesem Fall haben wir uns entschieden, das Präfix `xlink` (der zweite Teil) zu verwenden, da das Präfix verwendet wird, um dem Benutzeragenten mitzuteilen, dass Attribute zu `XLink` gehören.

Wie ihr Name vermuten lässt, werden Namespace-Präfixe verwendet, um Parameter- und Elementnamen zu präfixen. Dies geschieht, indem das Namespace-Präfix und ein Doppelpunkt vor den Parameternamen gesetzt werden, wie am `<script>`-Element im obigen Beispiel gezeigt. Dies teilt dem Benutzeragenten mit, dass der spezifische Parameter zu dem Namespace gehört, der dem Namespace-Präfix zugeordnet ist (`XLink`), und ein Parameter ist, der mit derselben Bedeutung an anderen Elementen verwendet werden kann.

Beachten Sie, dass es in XML ein XML-Fehler ist, ein Präfix zu verwenden, das nicht an einen Namespace-Namen gebunden wurde. Die Bindung, die durch den `xmlns:xlink`-Parameter im obigen Beispiel erstellt wird, ist erforderlich, damit der `xlink:href`-Parameter keinen Fehler verursacht. Dieser XLink-Parameter wird auch häufig in SVG auf den `<a>`, `<use>` und `<image>`-Elementen unter anderem verwendet, daher ist es eine gute Idee, die XLink-Deklaration immer in Ihren Dokumenten einzuschließen.

Nebenbei bemerkt, ist es nützlich zu wissen, dass Namespace-Präfixe auch für Elementnamen verwendet werden können. Dies teilt dem Benutzeragenten mit, dass das bestimmte Element (diesmal jedoch nicht seine Kinder!) zu dem Namespace gehört, der dem Präfix zugewiesen ist. Das Wissen darum wird Ihnen einige Verwirrung ersparen, wenn Sie auf Markup wie im folgenden Beispiel stoßen:

```xml
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:svg="http://www.w3.org/2000/svg">
  <body>
    <h1>SVG embedded inline in XHTML</h1>
    <svg:svg width="300px" height="200px">
      <svg:circle cx="150" cy="100" r="50" fill="red" />
    </svg:svg>
  </body>
</html>
```

> [!NOTE]
> Dies ist eine {{Glossary("XHTML", "XHTML")}}-Datei, keine HTML-Datei. XML-Namespaces sind in HTML nicht gültig. Um dieses Beispiel auszuprobieren, müssen Sie Ihre Datei als `.xhtml` speichern.

Beachten Sie, dass es aufgrund eines für das `<svg:svg>`-Element und dessen Kind `<svg:circle>` verwendeten Namespace-Präfixes nicht notwendig war, den Standard-Namespace erneut zu deklarieren. Im Allgemeinen ist es besser, den Standard-Namespace erneut zu deklarieren, anstatt viele Elemente auf diese Weise zu präfixen.

### Scripting in namespaced XML

Namespaces beeinflussen Markup und Scripting ([und sogar CSS](/de/docs/Web/CSS/Guides/Namespaces)). Wenn Sie Skripte für namespaced XML wie SVG schreiben, lesen Sie weiter.

Die [DOM Level 1](https://www.w3.org/TR/DOM-Level-1/)-Empfehlung wurde erstellt, bevor die [ursprüngliche Namespaces in XML](https://www.w3.org/TR/xml-names/)-Empfehlung veröffentlicht wurde; daher ist DOM1 nicht nameräume-bewusst. Dies verursacht Probleme für namespaced XML wie SVG. Um diese Probleme zu lösen, fügte [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) namespace-bewusste Entsprechungen zu allen anwendbaren DOM Level 1-Methoden hinzu. Beim Skripten von SVG ist es wichtig, die [namespace-bewussten Methoden](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations) zu verwenden. Die Tabelle unten listet die DOM1-Methoden auf, die in SVG nicht verwendet werden sollten, zusammen mit ihren entsprechenden DOM2-Gegenstücken, die stattdessen verwendet werden sollten.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>DOM1 (nicht verwenden)</th>
      <th>DOM2 (stattdessen diese verwenden!)</th>
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

Der erste Parameter für alle DOM2 namespace-bewussten Methoden muss der Namespace-Name (auch bekannt als Namespace-URI) des betreffenden Elements oder Parameters sein. Bei SVG **Elementen** ist dies `http://www.w3.org/2000/svg`. Beachten Sie jedoch Folgendes: Die [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting)-Empfehlung gibt an, dass der Namespace-Name für Parameter ohne Präfix keinen Wert hat. Mit anderen Worten: Obwohl die Parameter zum Namespace des Elements gehören, verwenden Sie nicht den Namespacenamen des Tags. Stattdessen **müssen Sie null als Namespace-Namen für nicht qualifizierte (präfixlose) Parameter verwenden**. Um also ein SVG-`rect` _Element_ mit `document.createElementNS()` zu erstellen, müssen Sie schreiben:

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

Um jedoch den Wert des `x` _Parameters_ eines SVG `rect`-Elements abzurufen, müssen Sie schreiben:

```js
rect.getAttributeNS(null, "x");
```

Beachten Sie, dass dies nicht der Fall für Parameter _mit_ einem Namespace-Präfix (Parameter, die nicht zum selben XML-Dialekt wie das Element gehören) ist. Parameter wie `xlink:href` erfordern den Namespace-Namen, der diesem Präfix zugewiesen wurde (`http://www.w3.org/1999/xlink` für XLink). Um also den Wert des `xlink:href`-Parameters eines `<a>`-Elements in SVG abzurufen, schreiben Sie:

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

Für das Setzen von Parametern, die einen Namespace haben, wird empfohlen (aber nicht zwingend erforderlich), dass Sie auch das Präfix im zweiten Parameter einschließen, damit das DOM später leichter wieder in XML konvertiert werden kann (falls Sie es zum Beispiel wieder an den Server senden möchten). Zum Beispiel:

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
const XLINK_NS = "http://www.w3.org/1999/xlink";
const image = document.createElementNS(SVG_NS, "image");
image.setAttributeNS(null, "width", "100");
image.setAttributeNS(null, "height", "100");
image.setAttributeNS(XLINK_NS, "xlink:href", "flower.png");
```

### Fazit

Für SVG, HTML und MathML ist der Namespace impliziert und daher optional. Es ist erforderlich, den Namespace für XML-Dateien zu deklarieren. Wenn Sie dies nicht tun, erkennen Benutzeragenten den Inhalt nicht und zeigen die XML-Markierung an oder informieren den Benutzer, dass ein Fehler im XML vorliegt.

Beim Schreiben von SVG ist es hilfreich, eine Vorlage zu verwenden, die alle häufig verwendeten Namespace-Deklarationen beim Erstellen neuer Dateien enthält. Wenn Sie noch keine haben, erstellen Sie eine mit dem folgenden Code:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

Auch wenn Sie nicht alle diese Namespaces in einem bestimmten Dokument verwenden, schadet es nicht, die Namespace-Deklarationen einzuschließen. Es könnte Sie vor einigen ärgerlichen Fehlern bewahren, wenn Sie später Inhalte aus einem der unbenutzten Namespaces hinzufügen.

### Ein vollständiges Beispiel

Für ein vollständiges Beispiel sehen Sie [SVG: Namespaces Crash Course: Example](/de/docs/Web/SVG/Guides/Namespaces_crash_course/Example).
