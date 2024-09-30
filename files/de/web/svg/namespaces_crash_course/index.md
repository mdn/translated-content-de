---
title: Namespaces Schnellkurs
slug: Web/SVG/Namespaces_Crash_Course
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{SVGRef}}

Als ein [XML](/de/docs/Glossary/XML)-Dialekt ist [SVG](/de/docs/Web/SVG) namespaced. Es ist wichtig, das Konzept von Namespaces zu verstehen und zu wissen, wie sie verwendet werden, wenn Sie planen, SVG-Inhalte zu erstellen. Namespaces sind unerlässlich für Benutzeragenten, die mehrere XML-Dialekte unterstützen; Browser müssen sehr streng sein. Nehmen Sie sich jetzt die Zeit, Namespaces zu verstehen, um zukünftige Kopfschmerzen zu vermeiden.

### Hintergrund

Ein langjähriges Ziel der verschiedenen W3C-Spezifikationen ist es, die Mischung verschiedener Arten von XML-basierten Inhalten im selben XML- oder HTML-Dokument zu ermöglichen. Zum Beispiel könnten SVG und [MathML](/de/docs/Web/MathML) direkt in ein HTML-basiertes wissenschaftliches Dokument eingebunden werden. Die Fähigkeit, Inhaltsarten auf diese Weise zu mischen, bietet viele Vorteile, erfordert jedoch das Lösen eines sehr realen Problems.

Natürlich definiert jeder XML-Dialekt die Bedeutung der Markup-Elementnamen in seiner Spezifikation. Das Problem bei der Mischung von Inhalten aus verschiedenen XML-Dialekten in einem einzigen Dokument ist, dass die Elemente eines Dialekts denselben Namen haben können wie Elemente eines anderen. Zum Beispiel haben sowohl HTML als auch SVG ein `<title>`-Element. Wie unterscheidet der Benutzeragent zwischen den beiden? Wie unterscheiden CSS-Stile zwischen den beiden? Tatsächlich, wie erkennt der Benutzeragent, wann ein Inhalt etwas Bekanntes ist und nicht einfach ein bedeutungsloses, undefiniertes HTML-Custom-Element oder eine XML-Datei mit beliebigen, ihm unbekannten Elementnamen?

Entgegen der landläufigen Meinung ist die Antwort auf diese Frage nicht "es erkennt es an der `DOCTYPE`-Deklaration". DTDs waren nie dafür konzipiert, gemischte Inhalte zu enthalten, und vergangene Versuche, gemischte Inhalte in DTDs zu integrieren, gelten heute als gescheitert. XML und einige XML-Dialekte (einschließlich SVG und HTML) erfordern keine `DOCTYPE`-Deklaration. SVG 1.2 hat nicht einmal eine. Die Tatsache, dass `DOCTYPE`-Deklarationen (normalerweise) mit dem Inhalt in Dateien eines einzelnen Inhaltsstypen übereinstimmen, ist rein zufällig. DTDs dienen nur der Validierung, nicht der Identifikation von Inhalten. Jeder Benutzeragent, der XML-Inhalte anhand seiner `DOCTYPE`-Deklaration identifiziert, ist unzuverlässig.

Die echte Antwort auf die Frage ist, dass XML-Inhalte dem Benutzeragenten mitteilen, zu welchem Dialekt die Elementnamen gehören, indem sie ihnen explizite "Namespace-Deklarationen" geben.

### Deklarieren von Namespaces

Wie sehen diese Namespace-Deklarationen also aus und wo werden sie platziert? Hier ist ein kurzes Beispiel.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- more tags here -->
</svg>
```

Die Namespace-Deklaration wird durch den `xmlns`-Parameter bereitgestellt. Dieser Parameter besagt, dass das `<svg>`-Element und seine Kindelemente zu dem XML-Dialekt gehören, der den Namespace-Namen `http://www.w3.org/2000/svg` hat, was natürlich SVG ist. Beachten Sie, dass die Namespace-Deklaration nur einmal bei einem Wurzelelement angegeben wird (und impliziert ist, wenn sie weggelassen wird). Die Deklaration definiert den _Standard_-Namespace, sodass der Benutzeragent weiß, dass alle Nachfahren des `<svg>`-Elements ebenfalls zu demselben Namespace gehören. Benutzeragenten prüfen, ob sie den Namespace-Namen erkennen, um festzustellen, ob sie wissen, wie das Markup zu handhaben ist.

Beachten Sie, dass Namespace-Namen nur Zeichenfolgen sind, sodass es nicht wichtig ist, dass der SVG-Namespace-Name auch wie ein URI aussieht. URIs werden häufig verwendet, weil sie eindeutig sind, aber die Absicht ist nicht, "irgendwohin zu verlinken". (Tatsächlich werden URIs so häufig verwendet, dass der Begriff "Namespace-URI" häufig anstelle von "Namespace-Name" verwendet wird.)

#### Erneutes Deklarieren des Standard-Namespaces

Wenn alle Nachfahren des Wurzelelements ebenfalls im Standard-Namespace definiert sind, wie mischt man dann Inhalte aus einem anderen Namespace ein? Um den SVG-Namespace in HTML einzuschließen, verwenden Sie `<svg>`. In XML deklarieren Sie einen Namespace. Hier ist ein kurzes Beispiel.

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

In diesem Beispiel deklariert das `xmlns`-Attribut auf dem Wurzel-`<report>`-Element den Standard-Namespace als `https://www.acme.org/reports`, oder `reports`. Daher werden es und alle seine Kindelemente vom Benutzeragenten als zu `reports` gehörig interpretiert, außer das `<content>`-Element, welches im `https://www.acme.org/tables` oder `tables`-Namespace existiert. Das `<summary>`-Element hat seinen eigenen `xmlns`-Parameter, und durch das erneute Deklarieren des `reports`-Namespace informiert es den Benutzeragenten, dass das `<summary>`-Element und seine Nachfahren (es sei denn, sie deklarieren ebenfalls einen alternativen Namespace) zu `reports` gehören.

In HTML ist `http://www.w3.org/1999/xhtml` der implizierte Namespace. Bei SVG ist es `http://www.w3.org/2000/svg`. MathML ist `http://www.w3.org/1998/Math/MathML`.

#### Deklarieren von Namespace-Präfixen

XML-Dialekte definieren nicht nur ihre eigenen Elemente, sondern deklarieren auch ihre eigenen Parameter.

Standardmäßig haben Parameter überhaupt keinen Namespace. Sie sind nur als einzigartig bekannt, da sie auf einem Element erscheinen, das selbst einen einzigartigen Namen hat. Manchmal ist es jedoch notwendig, Parameter zu definieren, damit sie auf vielen verschiedenen Elementen wiederverwendet werden können und dennoch als derselbe Parameter gelten, unabhängig von dem Element, mit dem sie verwendet werden. Ein sehr gutes Beispiel hierfür ist der `href`-Parameter, der durch die [XLink](/de/docs/Glossary/XLink)-Spezifikation definiert ist. Dieser Parameter wird häufig von anderen XML-Dialekten als Mittel zur Verlinkung mit externen Ressourcen verwendet. Aber wie teilen Sie dem Benutzeragenten mit, zu welchem Dialekt der Parameter gehört, in diesem Fall `XLink`? Betrachten Sie das folgende Beispiel.

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

Dieses Beispiel enthält den etwas ungewöhnlich aussehenden Parameter `xmlns:xlink`. Wie Sie vielleicht vom ersten `xmlns`-Teil ableiten, ist dies eine weitere Namespace-Deklaration. Statt den Standard-Namespace zu setzen, setzt diese Namespace-Deklaration den Namespace für ein sogenanntes "[Namespace-Präfix](/de/docs/Web/API/CSSNamespaceRule/prefix)". In diesem Fall haben wir uns entschieden, das Präfix `xlink` (der zweite Teil) zu verwenden, da das Präfix dazu verwendet wird, dem Benutzeragenten mitzuteilen, welche Attribute zu `XLink` gehören.

Wie der Name schon sagt, werden Namespace-Präfixe verwendet, um Parameter- und Elementnamen vorzusetzen. Dies geschieht, indem das Namespace-Präfix und ein Doppelpunkt vor den Parameternamen gesetzt werden, wie auf dem `<script>`-Element im obigen Beispiel gezeigt. Dies teilt dem Benutzeragenten mit, dass der spezifische Parameter zum Namespace gehört, der dem Namespace-Präfix (`XLink`) zugewiesen ist und ein Parameter ist, der mit derselben Bedeutung auf anderen Elementen verwendet werden kann.

Beachten Sie, dass es im XML einen XML-Fehler gibt, ein Präfix zu verwenden, das nicht an einen Namen des Namespaces gebunden wurde. Die Bindung, die durch den `xmlns:xlink`-Parameter im obigen Beispiel erstellt wurde, ist erforderlich, damit der `xlink:href`-Parameter keinen Fehler verursacht. Dieser XLink-Parameter wird auch häufig in SVG auf den `<a>`, `<use>` und `<image>`-Elementen unter anderem verwendet, daher ist es eine gute Idee, immer die XLink-Deklaration in Ihre Dokumente aufzunehmen.

Nebenbei bemerkt ist es nützlich zu wissen, dass Namespace-Präfixe auch für Elementnamen verwendet werden können. Dies teilt dem Benutzeragenten mit, dass das spezifische Element (aber nicht seine Kinder dieses Mal!) zum dem Präfix zugewiesenen Namespace gehört. Es wird Ihnen helfen, Verwirrung zu vermeiden, wenn Sie über Markup wie im folgenden Beispiel stolpern:

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
> Dies ist eine [XHTML](/de/docs/Glossary/XHTML)-Datei, keine HTML-Datei. XML-Namespaces sind in HTML nicht gültig. Um dieses Beispiel auszuprobieren, müssen Sie Ihre Datei als `.xhtml` speichern.

Beachten Sie, dass, da ein Namespace-Präfix für das `<svg:svg>`-Element und sein Kind `<svg:circle>` verwendet wird, es nicht notwendig war, den Standard-Namespace neu zu deklarieren. Im Allgemeinen ist es besser, den Standard-Namespace neu zu deklarieren, anstatt viele Elemente auf diese Weise zu präfixieren.

### Skripting in namespaced XML

Namespaces beeinflussen Markup und Skripting ([und sogar CSS](/de/docs/Web/CSS/CSS_namespaces)). Wenn Sie Skripte für namespaced XML wie SVG schreiben, lesen Sie weiter.

Die [DOM Level 1](https://www.w3.org/TR/REC-DOM-Level-1/)-Empfehlung wurde vor der [ursprünglichen Namespaces in XML](https://www.w3.org/TR/REC-xml-names/)-Empfehlung veröffentlicht; daher ist DOM1 nicht namespace-bewusst. Dies verursacht Probleme für namespaced XML wie SVG. Um diese Probleme zu lösen, fügte [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) namespace-bewusste Äquivalente aller anwendbaren DOM Level 1-Methoden hinzu. Beim Skripting von SVG ist es wichtig, die [namespace-bewussten Methoden](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations) zu verwenden. Die Tabelle unten listet die DOM1-Methoden auf, die in SVG nicht verwendet werden sollten, zusammen mit ihren äquivalenten DOM2-Gegenstücken, die stattdessen verwendet werden sollten.

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
        (auch <a href="/de/docs/Web/API/Element/getElementsByTagNameNS">hinzugefügt zu Element</a>)
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

Der erste Parameter für alle DOM2-namespace-bewussten Methoden muss der Namespace-Name (auch bekannt als Namespace-URI) des betreffenden Elements oder Parameters sein. Für SVG **Elemente** ist dies `http://www.w3.org/2000/svg`. Beachten Sie jedoch genau: die [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting)-Empfehlung besagt, dass der Namespace-Name für Parameter ohne Präfix keinen Wert hat. Mit anderen Worten, obwohl die Parameter zum Namespace des Elements gehören, verwenden Sie nicht den Namespace-Namen des Tags. Stattdessen **müssen Sie null als Namespace-Namen für nicht qualifizierte (präfixlose) Parameter verwenden**. Um also ein SVG `rect` _Element_ mit `document.createElementNS()` zu erstellen, müssen Sie schreiben:

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

Um jedoch den Wert des `x` _Parameters_ an einem SVG `rect`-Element abzurufen, müssen Sie schreiben:

```js
rect.getAttributeNS(null, "x");
```

Beachten Sie, dass dies nicht für Parameter _mit_ einem Namespace-Präfix gilt (Parameter, die nicht zum selben XML-Dialekt wie das Element gehören). Parameter wie `xlink:href` erfordern den Namespace-Namen, der diesem Präfix zugewiesen wurde (`http://www.w3.org/1999/xlink` für XLink). Daher würden Sie, um den Wert des `xlink:href`-Parameters eines `<a>`-Elements in SVG zu erhalten, schreiben:

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

Für das Setzen von Parametern, die einen Namespace haben, wird empfohlen (aber nicht vorausgesetzt), dass Sie auch ihr Präfix im zweiten Parameter einschließen, damit das DOM später leichter in XML zurückkonvertiert werden kann (wenn Sie es beispielsweise zurück an den Server senden möchten). Zum Beispiel:

```js
elt.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "otherdoc.svg",
);
```

Als abschließendes Beispiel hier eine Demonstration, wie Sie ein `<image>`-Element dynamisch mithilfe von JavaScript erstellen könnten:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const XLink_NS = "http://www.w3.org/1999/xlink";
const image = document.createElementNS(SVG_NS, "image");
image.setAttributeNS(null, "width", "100");
image.setAttributeNS(null, "height", "100");
image.setAttributeNS(XLink_NS, "xlink:href", "flower.png");
```

### Fazit

Für SVG, HTML und MathML ist der Namespace impliziert und daher optional. Es ist erforderlich, den Namespace für XML-Dateien zu deklarieren. Wenn Sie dies nicht tun, erkennen Benutzeragenten den Inhalt nicht und zeigen das XML-Markup an oder informieren den Benutzer, dass ein Fehler im XML vorliegt.

Wenn Sie SVG schreiben, ist es hilfreich, eine Vorlage zu verwenden, die alle üblichen Namespace-Deklarationen enthält, wenn Sie neue Dateien erstellen. Wenn Sie noch keine haben, erstellen Sie eine mit dem folgenden Code:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

Auch wenn Sie nicht alle diese Namespaces in einem bestimmten Dokument verwenden, gibt es keinen Nachteil bei der Aufnahme der Namespace-Deklarationen. Es kann Sie vor einigen ärgerlichen Fehlern bewahren, wenn Sie später Inhalte aus einem der ungenutzten Namespaces hinzufügen.

### Ein vollständiges Beispiel

Für ein vollständiges Beispiel siehe [SVG: Namespaces Schnellkurs: Beispiel](/de/docs/Web/SVG/Namespaces_Crash_Course/Example).
