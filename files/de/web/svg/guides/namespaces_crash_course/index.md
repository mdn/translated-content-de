---
title: Namespaces Crashkurs
slug: Web/SVG/Guides/Namespaces_crash_course
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

Als ein {{Glossary("XML", "XML")}}-Dialekt ist [SVG](/de/docs/Web/SVG) namensgebunden. Es ist wichtig, das Konzept der Namespaces zu verstehen und wie sie verwendet werden, wenn Sie planen, SVG-Inhalte zu erstellen. Namespaces sind für Benutzeragenten, die mehrere XML-Dialekte unterstützen, unerlässlich; Browser müssen hier sehr strikt sein. Jetzt die Zeit zu nehmen, Namespaces zu verstehen, wird Ihnen in Zukunft Kopfschmerzen ersparen.

### Hintergrund

Ein langjähriges Ziel der verschiedenen W3C-Spezifikationen ist es, die Möglichkeit zu schaffen, verschiedene Arten von XML-basierten Inhalten im selben XML- oder HTML-Dokument zu mischen. Zum Beispiel könnten SVG und [MathML](/de/docs/Web/MathML) direkt in ein auf HTML basierendes wissenschaftliches Dokument integriert werden. Die Fähigkeit, Inhaltstypen auf diese Weise zu mischen, hat viele Vorteile, erforderte jedoch auch die Lösung eines sehr realen Problems.

Natürlich definiert jeder XML-Dialekt die Bedeutung der im Spezifikationsdokument beschriebenen Markup-Elementnamen. Das Problem bei der Mischung von Inhalten aus verschiedenen XML-Dialekten in einem einzigen Dokument ist, dass die von einem Dialekt definierten Elemente den gleichen Namen haben können wie die von einem anderen definierten. Zum Beispiel haben sowohl HTML als auch SVG ein `<title>`-Element. Wie unterscheidet der Benutzeragent zwischen den beiden? Wie unterscheiden CSS-Stile zwischen den beiden? Und wie erkennt der Benutzeragent, wann Inhalte etwas sind, das er kennt, und nicht nur ein bedeutungsloses undefiniertes HTML-Custom-Element oder eine XML-Datei mit beliebigen, ihm unbekannten Elementnamen?

Entgegen der landläufigen Meinung lautet die Antwort auf diese Frage nicht "man kann es aus der `DOCTYPE`-Deklaration erkennen". DTDs waren nie dafür gedacht, gemischte Inhalte zu unterstützen, und vergangene Versuche, gemischte Inhalts-DTDs zu erstellen, gelten heute als gescheitert. XML und einige XML-Dialekte (inklusive SVG und HTML) erfordern keine `DOCTYPE`-Deklaration. SVG 1.2 hat nicht einmal eine solche. Die Tatsache, dass `DOCTYPE`-Deklarationen (meistens) mit den Inhalten in Dateien eines einzigen Inhaltstyps übereinstimmen, ist lediglich zufällig. DTDs dienen nur der Validierung, nicht der Identifikation von Inhalten. Jeder Benutzeragent, der XML-Inhalte über seine `DOCTYPE`-Deklaration identifiziert, ist unzuverlässig.

Die wirkliche Antwort auf die Frage ist, dass XML-Inhalte dem Benutzeragenten mitteilen, zu welchem Dialekt die Elementnamen gehören, indem sie explizite "Namespace-Deklarationen" angeben.

### Deklarieren von Namespaces

Wie sehen diese Namespace-Deklarationen also aus, und wo werden sie platziert? Hier ist ein kurzes Beispiel.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- more tags here -->
</svg>
```

Die Namespace-Deklaration wird durch den `xmlns`-Parameter bereitgestellt. Dieser Parameter besagt, dass das `<svg>`-Element und seine Kindelemente zu dem XML-Dialekt gehören, der den Namespace-Namen `http://www.w3.org/2000/svg` hat, was natürlich SVG ist. Beachten Sie, dass die Namespace-Deklaration nur einmal an einem Wurzelelement bereitgestellt wird (und implizit ist, wenn sie weggelassen wird). Die Deklaration definiert den _Standard_-Namespace, sodass der Benutzeragent weiß, dass alle Nachfahren des `<svg>`-Elements ebenfalls zu demselben Namespace gehören. Benutzeragenten prüfen, ob sie den Namespace-Namen erkennen, um festzustellen, ob sie wissen, wie sie das Markup handhaben sollen.

Beachten Sie, dass Namespacenamen nur Zeichenfolgen sind, weshalb die Tatsache, dass der SVG-Namespacename auch wie ein URI aussieht, nicht wichtig ist. URIs werden häufig verwendet, weil sie einzigartig sind, aber die Absicht ist nicht, irgendwohin zu "linken". (Tatsächlich werden URIs so häufig verwendet, dass der Begriff "Namespace URI" häufig anstelle von "Namespacename" verwendet wird.)

#### Den Standard-Namespace erneut deklarieren

Wenn alle Nachkommen des Wurzelelements ebenfalls im Standard-Namespace definiert sind, wie mischen Sie dann Inhalte aus einem anderen Namespace hinein? Um den SVG-Namespace in HTML einzubinden, fügen Sie `<svg>` hinzu. In XML deklarieren Sie einen Namespace. Hier ist ein kurzes Beispiel.

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

In diesem Beispiel deklariert das `xmlns`-Attribut des Wurzel-`<report>`-Elements den Standard-Namespace als `https://www.acme.org/reports`, oder `reports`. Folglich werden dieses Element und all seine Kindelemente vom Benutzeragenten als zu `reports` gehörend interpretiert, außer dem `<content>`-Element, das im Namespace `https://www.acme.org/tables` oder `tables` existiert. Das `<summary>`-Element hat seinen eigenen `xmlns`-Parameter, und durch die Neudeklaration des `reports`-Namespaces wird dem Benutzeragenten mitgeteilt, dass das `<summary>`-Element und seine Nachkommen (es sei denn, sie deklarieren ebenfalls einen alternativen Namespace) zu `reports` gehören.

Bei HTML ist `http://www.w3.org/1999/xhtml` der implizierte Namespace. Bei SVG ist es `http://www.w3.org/2000/svg`. MathML ist `http://www.w3.org/1998/Math/MathML`.

#### Deklarieren von Namespace-Präfixen

XML-Dialekte definieren nicht nur ihre eigenen Elemente, sondern deklarieren auch ihre eigenen Parameter.

Standardmäßig haben Parameter überhaupt keinen Namespace. Sie sind nur dann als eindeutig bekannt, weil sie auf einem Element erscheinen, das selbst einen eindeutigen Namen hat. Es ist jedoch manchmal notwendig, Parameter so zu definieren, dass sie auf vielen verschiedenen Elementen wiederverwendbar sind und dennoch als derselbe Parameter betrachtet werden, unabhängig von dem Element, mit dem sie verwendet werden. Ein sehr gutes Beispiel hierfür ist der `href`-Parameter, der von der {{Glossary("XLink", "XLink")}}-Spezifikation definiert ist. Dieser Parameter wird häufig von anderen XML-Dialekten als Mittel zum Verlinken auf externe Ressourcen verwendet. Aber wie teilen Sie dem Benutzeragenten mit, zu welchem Dialekt der Parameter gehört, in diesem Fall `XLink`? Betrachten Sie das folgende Beispiel.

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

Dieses Beispiel enthält den eher ungewöhnlich aussehenden Parameter `xmlns:xlink`. Wie Sie vielleicht aus dem ersten `xmlns`-Teil erahnen, ist dies eine weitere Namespace-Deklaration. Anstatt jedoch den Standard-Namespace festzulegen, setzt diese Namespace-Deklaration den Namespace für etwas, das "[Namespace-Präfix](/de/docs/Web/API/CSSNamespaceRule/prefix)" genannt wird. In diesem Fall haben wir uns entschieden, das Präfix `xlink` (der zweite Teil) zu verwenden, da das Präfix verwendet wird, um dem Benutzeragenten Attribute mitzuteilen, die zu `XLink` gehören.

Wie ihre Namen schon andeuten, werden Namespace-Präfixe verwendet, um Parameter- und Elementnamen zu präfixieren. Dies geschieht, indem das Namespace-Präfix und ein Doppelpunkt dem Parameternamen vorangestellt werden, wie am `<script>`-Element im obigen Beispiel gezeigt. Dies teilt dem Benutzeragenten mit, dass der spezielle Parameter zum Namespace gehört, der dem Namespace-Präfix zugewiesen ist (`XLink`), und ein Parameter ist, der mit derselben Bedeutung auf anderen Elementen verwendet werden kann.

Beachten Sie, dass es in XML ein XML-Fehler ist, ein Präfix zu verwenden, das nicht an einen Namespacename gebunden ist. Die Bindung, die durch den `xmlns:xlink`-Parameter im obigen Beispiel erstellt wurde, ist erforderlich, damit der `xlink:href`-Parameter keinen Fehler verursacht. Dieser XLink-Parameter wird auch häufig in SVG auf den `<a>`, `<use>` und `<image>`-Elementen und anderen verwendet, sodass es eine gute Idee ist, die XLink-Deklaration immer in Ihren Dokumenten einzuschließen.

Nebenbei bemerkt, es ist nützlich zu wissen, dass Namespace-Präfixe auch für Elementnamen verwendet werden können. Dies teilt dem Benutzeragenten mit, dass das spezielle Element (diesmal jedoch nicht seine Kinder!) zu dem Namespace gehört, der dem Präfix zugewiesen ist. Dies zu wissen, erspart Ihnen Verwirrung, wenn Sie auf ein Markup wie im folgenden Beispiel stoßen:

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

Beachten Sie, dass es nicht notwendig war, den Standard-Namespace erneut zu deklarieren, da bei dem `<svg:svg>`-Element und seinem Kind `<svg:circle>` ein Namespace-Präfix verwendet wird. Allgemein ist es besser, den Standard-Namespace erneut zu deklarieren, anstatt viele Elemente auf diese Weise zu präfixieren.

### Skripting in namensgebundenem XML

Namespaces beeinflussen Markup und Skripting ([und sogar CSS](/de/docs/Web/CSS/CSS_namespaces)). Wenn Sie Skripte für namensgebundenes XML wie SVG schreiben, lesen Sie weiter.

Die [DOM Level 1](https://www.w3.org/TR/DOM-Level-1/)-Empfehlung wurde erstellt, bevor die [ursprüngliche Namespaces in XML](https://www.w3.org/TR/xml-names/)-Empfehlung veröffentlicht wurde; daher ist DOM1 nicht namensbewusst. Dies verursacht Probleme für namensgebundenes XML wie SVG. Um diese Probleme zu lösen, fügte der [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) namensbewusste Äquivalente aller anwendbaren DOM Level 1-Methoden hinzu. Beim Skripting von SVG ist es wichtig, die [namespaced-bewussten Methoden](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations) zu verwenden. Die folgende Tabelle listet die DOM1-Methoden auf, die in SVG nicht verwendet werden sollten, zusammen mit ihren DOM2-Gegenstücken, die stattdessen verwendet werden sollten.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>DOM1 (nicht verwenden)</th>
      <th>DOM2 (verwenden Sie stattdessen diese!)</th>
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

Der erste Parameter für alle DOM2-namespaced-bewussten Methoden muss der Namespacename (auch bekannt als Namespace-URI) des betreffenden Elements oder Parameters sein. Für SVG-**Elemente** ist dies `http://www.w3.org/2000/svg`. Beachten Sie jedoch: Die [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting)-Empfehlung stellt fest, dass der Namespacename für Parameter ohne Präfix keinen Wert hat. Mit anderen Worten: Obwohl die Parameter zum Namespace des Elements gehören, verwenden Sie nicht den Namespacenamen des Tags. Stattdessen **müssen Sie null als Namen für unqualifizierte (präfixlose) Parameter verwenden**. Um also ein SVG `rect`-Element mit `document.createElementNS()` zu erstellen, müssen Sie schreiben:

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

Um jedoch den Wert des `x`-Parameters eines SVG `rect`-Elements abzurufen, müssen Sie schreiben:

```js
rect.getAttributeNS(null, "x");
```

Beachten Sie, dass dies nicht für Parameter mit einem Namespace-Präfix gilt (Parameter, die nicht zu demselben XML-Dialekt wie das Element gehören). Parameter wie `xlink:href` erfordern den Namespacenamen, der diesem Präfix zugewiesen wurde (`http://www.w3.org/1999/xlink` für XLink). Um also den Wert des `xlink:href`-Parameters eines `<a>`-Elements in SVG zu erhalten, würden Sie schreiben:

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

Zum Setzen von Parametern, die einen Namespace haben, wird empfohlen (aber nicht verlangt), dass Sie auch ihr Präfix im zweiten Parameter einschließen, damit das DOM später leichter wieder in XML konvertiert werden kann (falls Sie es zum Beispiel an den Server zurücksenden möchten). Zum Beispiel:

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

Für SVG, HTML und MathML ist der Namespace impliziert und daher optional. Es ist erforderlich, den Namespace für XML-Dateien zu deklarieren. Wenn Sie dies nicht tun, erkennen Benutzeragenten die Inhalte nicht und zeigen das XML-Markup an oder informieren den Benutzer, dass es einen Fehler im XML gibt.

Beim Schreiben von SVG ist es hilfreich, eine Vorlage zu verwenden, die alle häufig verwendeten Namespace-Deklarationen enthält, wenn Sie neue Dateien erstellen. Wenn Sie noch keine haben, erstellen Sie eine mit dem folgenden Code:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

Selbst wenn Sie nicht alle diese Namespaces in einem bestimmten Dokument verwenden, ist es unschädlich, die Namespace-Deklarationen einzuschließen. Es kann Sie vor einigen ärgerlichen Fehlern bewahren, wenn Sie später Inhalte aus einem der ungenutzten Namespaces hinzufügen.

### Ein vollständiges Beispiel

Für ein vollständiges Beispiel siehe [SVG: Namespaces Crash Course: Example](/de/docs/Web/SVG/Guides/Namespaces_crash_course/Example).
