---
title: Namespaces-Crashkurs
slug: Web/SVG/Guides/Namespaces_crash_course
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Als ein {{Glossary("XML", "XML")}}-Dialekt ist [SVG](/de/docs/Web/SVG) namensbasiert. Es ist wichtig, das Konzept der Namespaces zu verstehen und wie sie verwendet werden, wenn Sie vorhaben, SVG-Inhalte zu erstellen. Namespaces sind essenziell für Benutzeragenten, die mehrere XML-Dialekte unterstützen; Browser müssen sehr strikt sein. Jetzt die Zeit zu investieren, um Namespaces zu verstehen, wird Ihnen in Zukunft einige Kopfschmerzen ersparen.

### Hintergrund

Ein langfristiges Ziel der verschiedenen W3C-Spezifikationen ist es, zu ermöglichen, dass unterschiedliche Arten von XML-basierten Inhalten miteinander in derselben XML- oder HTML-Datei gemischt werden können. Zum Beispiel könnten SVG und [MathML](/de/docs/Web/MathML) direkt in ein HTML-basiertes wissenschaftliches Dokument integriert werden. Die Fähigkeit, Inhaltstypen auf diese Weise zu mischen, hat viele Vorteile, erforderte jedoch auch die Lösung eines sehr realen Problems.

Natürlich definiert jeder XML-Dialekt die Bedeutung der Markup-Elementnamen, die in seiner Spezifikation beschrieben sind. Das Problem beim Mischen von Inhalten aus verschiedenen XML-Dialekten in einem einzigen Dokument ist, dass die von einem Dialekt definierten Elemente denselben Namen wie Elemente eines anderen Dialekts haben können. Zum Beispiel haben sowohl HTML als auch SVG ein `<title>`-Element. Wie unterscheidet der Benutzeragent zwischen den beiden? Wie unterscheiden CSS-Stile zwischen den beiden? Tatsächlich, wie erkennt der Benutzeragent, wann ein Inhalt etwas ist, das er kennt, und nicht einfach nur ein bedeutungsloses, undefiniertes HTML-Custom-Element oder eine XML-Datei, die beliebige unbekannte Elementnamen enthält?

Entgegen der landläufigen Meinung ist die Antwort auf diese Frage nicht "man kann es aus der `DOCTYPE`-Deklaration erkennen". DTDs waren nie für gemischte Inhalte konzipiert, und frühere Versuche, gemischte Inhalts-DTDs zu erstellen, werden heute als gescheitert angesehen. XML und einige XML-Dialekte (einschließlich SVG und HTML) erfordern keine `DOCTYPE`-Deklaration. SVG 1.2 hat nicht einmal eine. Die Tatsache, dass `DOCTYPE`-Deklarationen (normalerweise) mit dem Inhalt in Single-Content-Type-Dateien übereinstimmen, ist rein zufällig. DTDs dienen nur der Validierung, nicht der Identifizierung des Inhalts. Jeder Benutzeragent, der XML-Inhalte anhand seiner `DOCTYPE`-Deklaration identifiziert, ist unzuverlässig.

Die wirkliche Antwort auf die Frage ist, dass XML-Inhalte dem Benutzeragenten mitteilen, zu welchem Dialekt die Elementnamen gehören, indem sie ihnen explizite "Namespace-Deklarationen" geben.

### Deklarieren von Namespaces

Wie sehen diese Namespace-Deklarationen also aus und wo werden sie platziert? Hier ist ein kurzes Beispiel.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- more tags here -->
</svg>
```

Die Namespace-Deklaration wird durch den `xmlns`-Parameter bereitgestellt. Dieser Parameter besagt, dass das `<svg>`-Element und seine Kindelemente zu demjenigen XML-Dialekt gehören, der den Namespace-Namen `http://www.w3.org/2000/svg` hat, was natürlich SVG ist. Beachten Sie, dass die Namespace-Deklaration nur einmal an einem Wurzelelement bereitgestellt wird (und impliziert ist, wenn sie weggelassen wird). Die Deklaration definiert den _Standard_-Namespace, sodass der Benutzeragent weiß, dass alle Nachkommen des `<svg>`-Elements ebenfalls zum gleichen Namespace gehören. Benutzeragenten überprüfen, ob sie den Namespace-Namen erkennen, um festzustellen, ob sie wissen, wie das Markup zu handhaben ist.

Beachten Sie, dass Namespacenamen nur Zeichenfolgen sind, sodass es nicht wichtig ist, dass der SVG-Namespacename auch wie ein URI aussieht. URIs werden häufig verwendet, weil sie einzigartig sind, aber die Absicht ist nicht, irgendwo "hinzuverlinken". (Tatsächlich werden URIs so häufig verwendet, dass der Begriff "Namespace-URI" häufig anstelle von "Namespacenamen" verwendet wird.)

#### Neudeklaration des Standard-Namespaces

Wenn alle Nachkommen des Wurzelelements auch im Standard-Namespace definiert sind, wie mischt man dann Inhalte aus einem anderen Namespace hinein? Um den SVG-Namespace in HTML einzuschließen, fügen Sie `<svg>` hinzu. In XML deklarieren Sie einen Namespace. Hier ist ein kurzes Beispiel.

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

In diesem Beispiel erklärt das `xmlns`-Attribut auf dem Wurzel-`<report>`-Element den Standard-Namespace als `https://www.acme.org/reports`, oder `reports`. Daher wird es und alle seine Kindelemente vom Benutzeragenten als zu `reports` gehörend interpretiert, mit Ausnahme des `<content>`-Elements, welches sich im Namespace `https://www.acme.org/tables`, oder `tables`, befindet. Das `<summary>`-Element hat seinen eigenen `xmlns`-Parameter, und durch die erneute Deklaration des `reports`-Namespaces wird dem Benutzeragenten mitgeteilt, dass das `<summary>`-Element und seine Nachkommen (es sei denn, sie deklarieren ebenfalls einen alternativen Namespace) zu `reports` gehören.

Mit HTML ist `http://www.w3.org/1999/xhtml` der implizierte Namespace. Mit SVG ist es `http://www.w3.org/2000/svg`. MathML ist `http://www.w3.org/1998/Math/MathML`.

#### Deklaration von Namespace-Präfixen

XML-Dialekte definieren nicht nur ihre eigenen Elemente, sondern deklarieren auch ihre eigenen Parameter.

Standardmäßig haben Parameter überhaupt keinen Namespace. Sie sind nur dadurch als eindeutig bekannt, dass sie auf einem Element erscheinen, das selbst einen eindeutigen Namen hat. Manchmal ist es jedoch notwendig, Parameter zu definieren, damit sie auf vielen verschiedenen Elementen wiederverwendet werden können und trotzdem als derselbe Parameter gelten, unabhängig von dem Element, mit dem sie verwendet werden. Ein sehr gutes Beispiel dafür ist der `href`-Parameter, der von der {{Glossary("XLink", "XLink")}}-Spezifikation definiert wird. Dieser Parameter wird häufig von anderen XML-Dialekten als Mittel zur Verknüpfung mit externen Ressourcen verwendet. Aber wie sagt man dem Benutzeragenten, zu welchem Dialekt der Parameter gehört, in diesem Fall `XLink`? Betrachten Sie das folgende Beispiel.

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

Dieses Beispiel hat den eher ungewöhnlich aussehenden Parameter `xmlns:xlink`. Wie Sie vielleicht aus dem ersten `xmlns`-Teil erraten können, ist dies eine weitere Namespace-Deklaration. Anstatt jedoch den Standard-Namespace festzulegen, legt diese Namespace-Deklaration den Namespace für etwas fest, das „[Namespace-Präfix](/de/docs/Web/API/CSSNamespaceRule/prefix)“ genannt wird. In diesem Fall haben wir uns entschieden, das Präfix `xlink` (den zweiten Teil) zu verwenden, da das Präfix verwendet wird, um den Benutzeragenten über Attribute zu informieren, die zu `XLink` gehören.

Wie der Name schon sagt, werden Namespace-Präfixe verwendet, um Parameter- und Elementnamen zu präfixieren. Dies geschieht, indem das Namespace-Präfix und ein Doppelpunkt vor den Parameternamen gesetzt werden, wie im `<script>`-Element im obigen Beispiel gezeigt. Dies teilt dem Benutzeragenten mit, dass der bestimmte Parameter zum Namespace gehört, der dem Namespace-Präfix zugewiesen wurde (`XLink`), und ein Parameter ist, der mit derselben Bedeutung auch auf anderen Elementen verwendet werden kann.

Beachten Sie, dass es in XML ein XML-Fehler ist, ein Präfix zu verwenden, das nicht an einen Namespacenamen gebunden wurde. Die in dem obigen Beispiel durch den `xmlns:xlink`-Parameter geschaffene Bindung ist erforderlich, damit der `xlink:href`-Parameter keinen Fehler verursacht. Dieser XLink-Parameter wird häufig auch in SVG auf den `<a>`, `<use>` und `<image>`-Elementen unter anderem verwendet, daher ist es eine gute Idee, die XLink-Deklaration in Ihre Dokumente einzuschließen.

Nebenbei bemerkt ist es nützlich zu wissen, dass Namespace-Präfixe auch für Elementnamen verwendet werden können. Dies teilt dem Benutzeragenten mit, dass das bestimmte Element (diesmal jedoch nicht seine Kinder!) zum Namespace gehört, der dem Präfix zugewiesen wurde. Wenn Sie das wissen, sparen Sie sich Verwirrung, wenn Sie auf Markup wie im folgenden Beispiel stoßen:

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

Beachten Sie, dass es nicht notwendig war, den Standard-Namespace erneut zu deklarieren, da ein Namespace-Präfix für das `<svg:svg>`-Element und sein Kindelement `<svg:circle>` verwendet wird. Im Allgemeinen ist es besser, den Standard-Namespace erneut zu deklarieren, anstatt viele Elemente auf diese Weise zu präfixen.

### Scripting in namespaced XML

Namespaces beeinflussen Markup und Scripting ([und sogar CSS](/de/docs/Web/CSS/CSS_namespaces)). Wenn Sie Skripte für namespaced XML wie SVG schreiben, lesen Sie weiter.

Die [DOM Level 1](https://www.w3.org/TR/REC-DOM-Level-1/)-Empfehlung wurde erstellt, bevor die [original Namespaces in XML](https://www.w3.org/TR/REC-xml-names/)-Empfehlung veröffentlicht wurde; daher ist DOM1 nicht namespace-bewusst. Dies verursacht Probleme für namespaced XML wie SVG. Um diese Probleme zu lösen, fügte [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) namespace-bewusste Äquivalente aller anwendbaren DOM Level 1-Methoden hinzu. Beim Scripting von SVG ist es wichtig, die [namespace-bewussten Methoden](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations) zu verwenden. Die folgende Tabelle listet die DOM1-Methoden auf, die in SVG nicht verwendet werden sollten, zusammen mit ihren entsprechenden DOM2-Gegenstücken, die stattdessen verwendet werden sollten.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>DOM1 (nicht verwenden)</th>
      <th>DOM2 (stattdessen verwenden!)</th>
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
        (auch <a href="/de/docs/Web/API/Element/getElementsByTagNameNS">Element hinzugefügt</a>)
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

Der erste Parameter für alle DOM2 namespace-bewussten Methoden muss der Namespace-Name (auch bekannt als Namespace-URI) des betreffenden Elements oder Parameters sein. Für SVG **Elemente** ist dies `http://www.w3.org/2000/svg`. Beachten Sie jedoch sorgfältig: Die [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting)-Empfehlung besagt, dass der Namespace-Name für Parameter ohne Präfix keinen Wert hat. Anders ausgedrückt, obwohl die Parameter zum Namespace des Elements gehören, verwenden Sie nicht den Namespace-Namen des Tags. Stattdessen **müssen Sie null als Namespace-Name für nicht qualifizierte (präfixlose) Parameter verwenden**. Um also ein SVG `rect` _Element_ mit `document.createElementNS()` zu erstellen, müssen Sie Folgendes schreiben:

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

Aber um den Wert des `x` _Parameters_ an einem SVG `rect`-Element zu erhalten, müssen Sie Folgendes schreiben:

```js
rect.getAttributeNS(null, "x");
```

Beachten Sie, dass dies nicht für Parameter _mit_ einem Namespace-Präfix gilt (Parameter, die nicht zum selben XML-Dialekt wie das Element gehören). Parameter wie `xlink:href` erfordern den Namespacenamen, der diesem Präfix zugewiesen wurde (`http://www.w3.org/1999/xlink` für XLink). Um also den Wert des `xlink:href`-Parameters eines `<a>`-Elements in SVG zu erhalten, würden Sie schreiben:

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

Für das Setzen von Parametern, die einen Namespace haben, wird empfohlen (aber nicht verlangt), dass Sie auch deren Präfix im zweiten Parameter einschließen, damit das DOM später leichter zurück in XML konvertiert werden kann (wenn Sie es beispielsweise zurück an den Server senden möchten). Zum Beispiel:

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

### Schlussfolgerung

Für SVG, HTML und MathML ist der Namespace impliziert und daher optional. Es ist jedoch erforderlich, den Namespace für XML-Dateien zu deklarieren. Wenn Sie dies nicht tun, erkennen Benutzeragenten den Inhalt nicht und zeigen das XML-Markup an oder informieren den Benutzer darüber, dass ein Fehler im XML vorliegt.

Wenn Sie SVG schreiben, ist es hilfreich, eine Vorlage zu verwenden, die alle häufig verwendeten Namespace-Deklarationen enthält, wenn Sie neue Dateien erstellen. Wenn Sie noch keine haben, erstellen Sie eine mit dem folgenden Code:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

Auch wenn Sie nicht alle diese Namespaces in einem bestimmten Dokument verwenden, schadet es nicht, die Namespace-Deklarationen mit einzuschließen. Es kann Sie vor einigen ärgerlichen Fehlern bewahren, wenn Sie später Inhalte aus einem der ungenutzten Namespaces hinzufügen.

### Ein vollständiges Beispiel

Für ein vollständiges Beispiel siehe [SVG: Namespaces-Crashkurs: Beispiel](/de/docs/Web/SVG/Guides/Namespaces_crash_course/Example).
