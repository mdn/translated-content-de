---
title: Namespaces Einsteigerkurs
slug: Web/SVG/Guides/Namespaces_crash_course
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Als ein {{Glossary("XML", "XML")}}-Dialekt ist [SVG](/de/docs/Web/SVG) namensbereichbasiert. Es ist wichtig, das Konzept der Namespaces und deren Nutzung zu verstehen, wenn Sie planen, SVG-Inhalte zu erstellen. Namespaces sind für Benutzeragenten unerlässlich, die mehrere XML-Dialekte unterstützen; Browser müssen dabei sehr streng sein. Sich jetzt die Zeit zu nehmen, Namespaces zu verstehen, erspart Ihnen in Zukunft Kopfschmerzen.

### Hintergrund

Ein langjähriges Ziel der verschiedenen W3C-Spezifikationen ist es, verschiedene Arten von XML-basierten Inhalten in derselben XML- oder HTML-Datei zusammenzuführen. Beispielsweise könnten SVG und [MathML](/de/docs/Web/MathML) direkt in ein HTML-basiertes wissenschaftliches Dokument integriert werden. Die Möglichkeit, Inhaltstypen auf diese Weise zu mischen, hat viele Vorteile, erforderte jedoch die Lösung eines sehr realen Problems.

Jeder XML-Dialekt definiert natürlich die Bedeutung der in seiner Spezifikation beschriebenen Markup-Elementnamen. Das Problem beim Mischen von Inhalten aus verschiedenen XML-Dialekten in einem einzigen Dokument besteht darin, dass die von einem Dialekt definierten Elemente denselben Namen wie Elemente eines anderen Dialekts haben können. Zum Beispiel haben sowohl HTML als auch SVG ein `<title>`-Element. Wie unterscheidet der Benutzeragent zwischen den beiden? Wie unterscheiden CSS-Stile zwischen den beiden? Tatsächlich, wie erkennt der Benutzeragent, ob Inhalte etwas sind, das er kennt, und nicht nur ein bedeutungsloses undefiniertes HTML-Custom-Element oder eine XML-Datei, die beliebige, ihm unbekannte Elementnamen enthält?

Entgegen der landläufigen Meinung lautet die Antwort auf diese Frage nicht „er kann es aus der `DOCTYPE`-Deklaration erkennen“. DTDs wurden nie mit gemischten Inhalten im Sinn entworfen, und frühere Versuche, gemischte Inhalts-DTDs zu erstellen, gelten jetzt als gescheitert. XML und einige XML-Dialekte (SVG und HTML eingeschlossen) benötigen keine `DOCTYPE`-Deklaration. SVG 1.2 hat nicht einmal eine. Die Tatsache, dass `DOCTYPE`-Deklarationen (normalerweise) mit dem Inhalt in Ein-Inhaltstyp-Dateien übereinstimmen, ist rein zufällig. DTDs dienen nur zur Validierung, nicht zur Identifizierung von Inhalten. Jeder Benutzeragent, der XML-Inhalte unter Verwendung seiner `DOCTYPE`-Deklaration identifiziert, ist unzuverlässig.

Die wirkliche Antwort auf die Frage ist, dass XML-Inhalte dem Benutzeragenten mitteilen, zu welchem Dialekt die Elementnamen gehören, indem sie ihnen explizite „Namespace-Deklarationen“ geben.

### Namespaces deklarieren

Wie sehen diese Namespace-Deklarationen also aus und wo werden sie platziert? Hier ist ein kurzes Beispiel.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- more tags here -->
</svg>
```

Die Namespace-Deklaration wird durch den `xmlns`-Parameter bereitgestellt. Dieser Parameter gibt an, dass das `<svg>`-Element und seine Kind-Elemente zu dem XML-Dialekt gehören, der den Namespace-Namen `http://www.w3.org/2000/svg` hat, was natürlich SVG ist. Beachten Sie, dass die Namespace-Deklaration nur einmal auf einem Wurzelelement angegeben wird (und impliziert ist, wenn sie weggelassen wird). Die Deklaration definiert den _Standard_-Namespace, sodass der Benutzeragent weiß, dass alle Nachkommen des `<svg>`-Elements ebenfalls zu demselben Namespace gehören. Benutzeragenten prüfen, ob sie den Namespace-Namen erkennen, um festzustellen, ob sie wissen, wie sie mit dem Markup umgehen sollen.

Beachten Sie, dass Namespace-Namen nur Zeichenfolgen sind, sodass die Tatsache, dass der SVG-Namespace-Name auch wie eine URI aussieht, nicht wichtig ist. URIs werden häufig verwendet, weil sie einzigartig sind, aber die Absicht ist nicht, „irgendwohin zu verlinken“. (Tatsächlich werden URIs so häufig verwendet, dass der Begriff „Namespace-URI“ anstelle von „Namespace-Name“ häufig verwendet wird.)

#### Standardnamespace erneut deklarieren

Wenn alle Nachkommen des Wurzelelements ebenfalls im Standardnamespace definiert sind, wie mischt man dann Inhalte aus einem anderen Namespace ein? Um den SVG-Namespace in HTML einzufügen, verwenden Sie `<svg>`. In XML deklarieren Sie einen Namespace. Hier ist ein kurzes Beispiel.

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

In diesem Beispiel erklärt das `xmlns`-Attribut auf dem Wurzel-`<report>`-Element den Standard-Namespace als `https://www.acme.org/reports`, oder `reports`. Infolgedessen werden dieses und alle seine Kind-Elemente vom Benutzeragenten wie `reports` interpretiert, mit Ausnahme des `<content>`-Elements, das im `https://www.acme.org/tables`, oder `tables`-Namespace existiert. Das `<summary>`-Element verfügt über seinen eigenen `xmlns`-Parameter, und durch die erneute Deklaration des `reports`-Namespace teilt dies dem Benutzeragenten mit, dass das `<summary>`-Element und seine Nachkommen (sofern sie nicht auch einen alternativen Namespace erneut deklarieren) zu `reports` gehören.

Bei HTML ist `http://www.w3.org/1999/xhtml` der implizierte Namespace. Bei SVG ist es `http://www.w3.org/2000/svg`. MathML ist `http://www.w3.org/1998/Math/MathML`.

#### Namespace-Präfixe deklarieren

XML-Dialekte definieren nicht nur ihre eigenen Elemente, sondern auch ihre eigenen Parameter.

Standardmäßig haben Parameter überhaupt keinen Namespace. Sie sind nur dann als eindeutig bekannt, wenn sie auf einem Element erscheinen, das selbst einen eindeutigen Namen hat. Manchmal ist es jedoch notwendig, Parameter so zu definieren, dass sie auf vielen verschiedenen Elementen wiederverwendet werden können und dennoch derselbe Parameter bleiben, unabhängig von dem Element, mit dem sie verwendet werden. Ein sehr gutes Beispiel hierfür ist der `href`-Parameter, der von der {{Glossary("XLink", "XLink")}}-Spezifikation definiert wird. Dieser Parameter wird häufig von anderen XML-Dialekten als Mittel verwendet, um auf externe Ressourcen zu verlinken. Aber wie teilen Sie dem Benutzeragenten mit, zu welchem Dialekt der Parameter gehört, in diesem Fall `XLink`? Betrachten Sie das folgende Beispiel.

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

Dieses Beispiel hat den etwas ungewöhnlich aussehenden Parameter `xmlns:xlink`. Wie Sie möglicherweise aus dem ersten Teil `xmlns` erraten, handelt es sich um eine weitere Namespace-Deklaration. Anstatt standardmäßig den Namespace festzulegen, wird durch diese Namespace-Deklaration jedoch der Namespace für etwas namens „[Namespace-Präfix](/de/docs/Web/API/CSSNamespaceRule/prefix)“ festgelegt. In diesem Fall haben wir uns entschieden, das Präfix `xlink` (der zweite Teil) zu verwenden, da das Präfix verwendet wird, um dem Benutzeragenten Attribute zuzuweisen, die zu `XLink` gehören.

Wie ihr Name schon sagt, werden Namespace-Präfixe verwendet, um Parameter- und Elementnamen voranzustellen. Dies geschieht, indem das Namespace-Präfix und ein Doppelpunkt vor dem Parameternamen gesetzt werden, wie am `<script>`-Element im obigen Beispiel gezeigt. Dies teilt dem Benutzeragenten mit, dass der besondere Parameter zu dem Namespace gehört, der dem Namespace-Präfix zugewiesen wurde (`XLink`), und dass es sich um einen Parameter handelt, der mit derselben Bedeutung auf anderen Elementen verwendet werden kann.

Beachten Sie, dass es in XML ein XML-Fehler ist, ein Präfix zu verwenden, das nicht an einen Namespace-Namen gebunden ist. Die Bindung, die durch den `xmlns:xlink`-Parameter im obigen Beispiel erstellt wird, ist erforderlich, damit der `xlink:href`-Parameter keinen Fehler verursacht. Dieser XLink-Parameter wird auch häufig in SVG auf den `<a>`, `<use>` und `<image>`-Elementen unter anderem verwendet, daher lohnt es sich, die XLink-Deklaration immer in Ihren Dokumenten zu enthalten.

Als kleine Randnotiz ist es nützlich zu wissen, dass Namespace-Präfixe auch für Elementnamen verwendet werden können. Dies teilt dem Benutzeragenten mit, dass das besondere Element (aber nicht seine Kinder diesmal!) zu dem Namespace gehört, der dem Präfix zugewiesen ist. Dies zu wissen, erspart Ihnen einige Verwirrung, wenn Sie auf Markup wie im folgenden Beispiel stoßen:

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

Beachten Sie, dass, da ein Namespace-Präfix für das `<svg:svg>`-Element und dessen Kind `<svg:circle>` verwendet wird, es nicht notwendig war, den Standard-Namespace erneut zu deklarieren. Im Allgemeinen ist es besser, den Standard-Namespace erneut zu deklarieren, anstatt viele Elemente auf diese Weise zu präfixieren.

### Scriptings in namespaced XML

Namespaces beeinflussen Markup und Skripte ([und sogar CSS](/de/docs/Web/CSS/CSS_namespaces)). Wenn Sie Skripte für namespaced XML wie SVG schreiben, lesen Sie weiter.

Die [DOM Level 1](https://www.w3.org/TR/DOM-Level-1/)-Empfehlung wurde erstellt, bevor die [ursprüngliche Namespaces in XML](https://www.w3.org/TR/xml-names/)-Empfehlung veröffentlicht wurde; daher ist DOM1 nicht namensbereichbewusst. Dies verursacht Probleme für namespaced XML wie SVG. Um diese Probleme zu lösen, fügte [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) namensbereichbewusste Äquivalente zu allen anwendbaren DOM Level 1-Methoden hinzu. Beim Scripten von SVG ist es wichtig, die [namensbereichbewussten Methoden](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations) zu verwenden. Die folgende Tabelle listet die DOM1-Methoden auf, die in SVG nicht verwendet werden sollten, zusammen mit ihren DOM2-Äquivalenten, die stattdessen verwendet werden sollten.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>DOM1 (nicht verwenden)</th>
      <th>DOM2 (verwenden Sie stattdessen!)</th>
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

Der erste Parameter für alle DOM2 namensbereichbewussten Methoden muss der Namespace-Name (auch als Namespace-URI bekannt) des betreffenden Elements oder Parameters sein. Für SVG **Elemente** ist dies `http://www.w3.org/2000/svg`. Beachten Sie jedoch sorgfältig: Die [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting)-Empfehlung besagt, dass der Namespace-Name für Parameter ohne Präfix keinen Wert hat. Mit anderen Worten, obwohl die Parameter zum Namespace des Elements gehören, verwenden Sie nicht den Namespace-Namen des Tags. Stattdessen **müssen Sie null als Namespace-Name für unqualifizierte (präfixlose) Parameter verwenden**. Um also ein SVG-`rect`-_Element_ mit `document.createElementNS()` zu erstellen, müssen Sie schreiben:

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

Um jedoch den Wert des `x`-_Parameters_ auf einem SVG-`rect`-Element abzurufen, müssen Sie schreiben:

```js
rect.getAttributeNS(null, "x");
```

Beachten Sie, dass dies nicht der Fall für Parameter _mit_ einem Namespace-Präfix ist (Parameter, die nicht zum selben XML-Dialekt wie das Element gehören). Parameter wie `xlink:href` erfordern den Namespace-Namen, der diesem Präfix zugewiesen wurde (`http://www.w3.org/1999/xlink` für XLink). Um also den Wert des `xlink:href`-Parameters eines `<a>`-Elements in SVG abzurufen, würden Sie schreiben:

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

Beim Setzen von Parametern, die einen Namespace haben, wird empfohlen (aber nicht verlangt), dass Sie auch ihr Präfix im zweiten Parameter einschließen, damit das DOM später leichter wieder in XML konvertiert werden kann (falls Sie es beispielsweise zurück an den Server senden möchten). Zum Beispiel:

```js
elt.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "other-doc.svg",
);
```

Als abschließendes Beispiel wird hier demonstriert, wie Sie ein `<image>`-Element dynamisch mit JavaScript erstellen könnten:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const XLink_NS = "http://www.w3.org/1999/xlink";
const image = document.createElementNS(SVG_NS, "image");
image.setAttributeNS(null, "width", "100");
image.setAttributeNS(null, "height", "100");
image.setAttributeNS(XLink_NS, "xlink:href", "flower.png");
```

### Fazit

Für SVG, HTML und MathML ist der Namespace impliziert und daher optional. Es ist erforderlich, den Namespace für XML-Dateien zu deklarieren. Wenn Sie das nicht tun, werden Benutzeragenten den Inhalt nicht erkennen und entweder das XML-Markup anzeigen oder den Benutzer darüber informieren, dass ein Fehler im XML aufgetreten ist.

Beim Schreiben von SVG ist es hilfreich, ein Template zu verwenden, das alle häufig verwendeten Namespace-Deklarationen enthält, wenn Sie neue Dateien erstellen. Wenn Sie noch keines haben, erstellen Sie eines mit dem folgenden Code:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

Selbst wenn Sie nicht alle diese Namespaces in einem bestimmten Dokument verwenden, schadet es nicht, die Namespace-Deklarationen einzuschließen. Es kann Ihnen einige ärgerliche Fehler ersparen, wenn Sie später Inhalte aus einem der ungenutzten Namespaces hinzufügen.

### Ein vollständiges Beispiel

Für ein vollständiges Beispiel sehen Sie sich [SVG: Namespaces Crash Course: Example](/de/docs/Web/SVG/Guides/Namespaces_crash_course/Example) an.
