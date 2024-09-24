---
title: Kurzkurs zu Namespaces
slug: Web/SVG/Namespaces_Crash_Course
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{SVGRef}}

Als ein [XML](/de/docs/Glossary/XML)-Dialekt ist [SVG](/de/docs/Web/SVG) namespaced. Es ist wichtig, das Konzept von Namespaces und deren Verwendung zu verstehen, wenn Sie planen, SVG-Inhalte zu erstellen. Namespaces sind essenziell für User-Agents, die mehrere XML-Dialekte unterstützen; Browser müssen sehr strikt sein. Sich jetzt die Zeit zu nehmen, Namespaces zu verstehen, wird Ihnen in der Zukunft Kopfschmerzen ersparen.

### Hintergrund

Ein langjähriges Ziel der verschiedenen W3C-Spezifikationen ist es, zu ermöglichen, dass verschiedene Arten von XML-basierten Inhalten im selben XML- oder HTML-Dokument gemischt werden können. Zum Beispiel könnten SVG und [MathML](/de/docs/Web/MathML) direkt in ein HTML-basiertes wissenschaftliches Dokument eingebunden werden. Die Möglichkeit, Inhaltstypen auf diese Weise zu mischen, bietet viele Vorteile, stellte jedoch auch ein wirkliches Problem dar, das gelöst werden musste.

Natürlich definiert jeder XML-Dialekt die Bedeutung der in seiner Spezifikation beschriebenen Markup-Elementnamen. Das Problem beim Mischen von Inhalten aus verschiedenen XML-Dialekten in einem einzigen Dokument besteht darin, dass die von einem Dialekt definierten Elemente denselben Namen haben können wie Elemente, die von einem anderen definiert sind. Zum Beispiel haben sowohl HTML als auch SVG ein `<title>`-Element. Wie unterscheidet der User-Agent zwischen den beiden? Wie unterscheiden CSS-Stile zwischen den beiden? Tatsächlich, wie erkennt der User-Agent, ob Inhalte etwas sind, das er kennt, und nicht nur ein bedeutungsloses, undefiniertes HTML-Customelement oder eine XML-Datei, die beliebige unbekannte Elementnamen enthält?

Entgegen der landläufigen Meinung ist die Antwort auf diese Frage nicht: "Es kann dies anhand der `DOCTYPE`-Deklaration erkennen". DTDs waren nie für gemischte Inhalte konzipiert, und vergangene Versuche, gemischte Inhalts-DTDs zu erstellen, gelten heute als gescheitert. XML und einige XML-Dialekte (einschließlich SVG und HTML) erfordern keine `DOCTYPE`-Deklaration. SVG 1.2 hat nicht einmal eine. Die Tatsache, dass `DOCTYPE`-Deklarationen (meistens) mit den Inhalten in Ein-Inhaltstyp-Dateien übereinstimmen, ist rein zufällig. DTDs dienen nur zur Validierung, nicht zur Identifizierung von Inhalten. Jeder User-Agent, der XML-Inhalte anhand seiner `DOCTYPE`-Deklaration identifiziert, ist unzuverlässig.

Die wirkliche Antwort auf die Frage ist, dass XML-Inhalte dem User-Agent mitteilen, zu welchem Dialekt die Elementnamen gehören, indem sie ihnen explizite "Namespace-Deklarationen" geben.

### Deklaration von Namespaces

Wie sehen diese Namespace-Deklarationen also aus und wo werden sie platziert? Hier ist ein kurzes Beispiel.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- weitere Tags hier -->
</svg>
```

Die Namespace-Deklaration wird durch den `xmlns`-Parameter bereitgestellt. Dieser Parameter besagt, dass das `<svg>`-Element und seine Kindelemente zu dem XML-Dialekt gehören, der den Namespace-Namen `http://www.w3.org/2000/svg` hat, was natürlich SVG ist. Beachten Sie, dass die Namespace-Deklaration nur einmal an einem Wurzelelement bereitgestellt wird (und implizit ist, wenn sie weggelassen wird). Die Deklaration definiert den _Standard_-Namespace, sodass der User-Agent weiß, dass alle Nachfahren des `<svg>`-Elements ebenfalls zu demselben Namespace gehören. User-Agents prüfen, ob sie den Namespace-Namen erkennen, um festzustellen, ob sie wissen, wie das Markup zu handhaben ist.

Beachten Sie, dass Namespace-Namen nur Zeichenketten sind, sodass die Tatsache, dass der SVG-Namespace-Name auch wie ein URI aussieht, nicht wichtig ist. URIs werden häufig verwendet, weil sie einzigartig sind, aber die Absicht ist nicht, „irgendwohin zu verlinken“. (Tatsächlich werden URIs so häufig verwendet, dass der Begriff „Namespace-URI“ oft anstelle von „Namespace-Name“ verwendet wird.)

#### Neudeklaration des Standard-Namespaces

Wenn alle Nachfahren des Wurzelelements ebenfalls im Standard-Namespace definiert sind, wie mischt man dann Inhalte aus einem anderen Namespace ein? Um den SVG-Namespace in HTML einzuschließen, fügen Sie `<svg>` ein. In XML deklarieren Sie einen Namespace. Hier ist ein kurzes Beispiel.

```xml
<report xmlns="https://www.acme.org/reports">
  <title>Einige Statistiken</title>
  <summary>...</summary>
  <statTable xmlns="https://www.acme.org/tables">
    <content>...</content>
    <!-- Neudeklaration des Standard-Namespaces des Wurzelelements -->
    <summary xmlns="https://www.acme.org/reports">...</summary>
  </statTable>
</report>
```

In diesem Beispiel deklariert das `xmlns`-Attribut auf dem Root-`<report>`-Element den Standard-Namespace als `https://www.acme.org/reports`, oder `reports`. Daher werden es und alle seine Kindelemente vom User-Agent als `reports` zugehörig interpretiert, mit Ausnahme des `<content>`-Elements, das im `https://www.acme.org/tables`, oder `tables`, Namespace existiert. Das `<summary>`-Element hat seinen eigenen `xmlns`-Parameter, und durch die Neudeklaration des `reports`-Namespaces teilt dies dem User-Agent mit, dass das `<summary>`-Element und seine Nachkommen (sofern sie nicht auch einen alternativen Namespace neudeklarieren) zu `reports` gehören.

Bei HTML ist `http://www.w3.org/1999/xhtml` der implizite Namespace. Bei SVG ist es `http://www.w3.org/2000/svg`. MathML ist `http://www.w3.org/1998/Math/MathML`.

#### Deklaration von Namespace-Präfixen

XML-Dialekte definieren nicht nur ihre eigenen Elemente, sondern deklarieren auch ihre eigenen Parameter.

Standardmäßig haben Parameter überhaupt keinen Namespace. Sie sind nur deswegen als einzigartig bekannt, weil sie auf einem Element erscheinen, das selbst einen einzigartigen Namen hat. Manchmal ist es jedoch notwendig, Parameter so zu definieren, dass sie auf vielen verschiedenen Elementen wiederverwendet werden können und dennoch als der gleiche Parameter angesehen werden, unabhängig vom Element, mit dem sie verwendet werden. Ein sehr gutes Beispiel hierfür ist der `href`-Parameter, der durch die {{glossary("XLink")}}-Spezifikation definiert wird. Dieser Parameter wird häufig von anderen XML-Dialekten als Mittel zur Verlinkung mit externen Ressourcen verwendet. Aber wie teilt man dem User-Agent mit, welchem Dialekt der Parameter gehört, in diesem Fall `XLink`? Betrachten Sie das folgende Beispiel.

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

Dieses Beispiel hat den eher ungewöhnlich aussehenden Parameter `xmlns:xlink`. Wie Sie aus dem ersten `xmlns`-Teil erraten können, handelt es sich hierbei um eine weitere Namespace-Deklaration. Statt jedoch den Standard-Namespace festzulegen, setzt diese Namespace-Deklaration den Namespace für etwas, das als "[Namespace-Präfix](/de/docs/Web/API/CSSNamespaceRule/prefix)" bezeichnet wird. In diesem Fall haben wir uns dafür entschieden, das Präfix `xlink` zu verwenden (der zweite Teil), da das Präfix verwendet wird, um dem User-Agent Informationen über Attribute zu geben, die `XLink` zugehören.

Wie ihr Name vermuten lässt, werden Namespace-Präfixe verwendet, um Parameter- und Elementnamen zu präfixieren. Dies geschieht, indem das Namespace-Präfix und ein Doppelpunkt vor den Parameternamen gesetzt werden, wie am `<script>`-Element im obigen Beispiel zu sehen ist. Dies teilt dem User-Agent mit, dass der spezielle Parameter zum Namespace gehört, der dem Namespace-Präfix (`XLink`) zugeordnet ist, und dass er mit derselben Bedeutung auf anderen Elementen verwendet werden kann.

Beachten Sie, dass es in XML ein XML-Fehler ist, ein Präfix zu verwenden, das nicht an einen Namespace-Namen gebunden ist. Die Bindung, die durch den `xmlns:xlink`-Parameter im obigen Beispiel erstellt wird, ist erforderlich, damit der `xlink:href`-Parameter nicht zu einem Fehler führt. Dieser XLink-Parameter wird in SVG häufig auf den `<a>`, `<use>` und `<image>`-Elementen unter anderem verwendet, daher ist es eine gute Idee, die XLink-Deklaration immer in Ihren Dokumenten einzuschließen.

Nebenbei bemerkt, es ist nützlich zu wissen, dass Namespace-Präfixe auch für Elementnamen verwendet werden können. Dies teilt dem User-Agent mit, dass das spezielle Element (diesmal jedoch nicht seine Kinder!) zum Namespace gehört, der dem Präfix zugeordnet ist. Dies zu wissen wird Ihnen Verwirrung ersparen, wenn Sie auf Markup wie im folgenden Beispiel stoßen:

```xml
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:svg="http://www.w3.org/2000/svg">
  <body>
    <h1>SVG eingebettet in XHTML</h1>
    <svg:svg width="300px" height="200px">
      <svg:circle cx="150" cy="100" r="50" fill="#ff0000" />
    </svg:svg>
  </body>
</html>
```

> [!NOTE]
> Dies ist eine {{Glossary("XHTML")}}-Datei, keine HTML-Datei. XML-Namespaces sind in HTML nicht gültig. Um dieses Beispiel auszuprobieren, müssen Sie Ihre Datei als `.xhtml` speichern.

Beachten Sie, dass es nicht notwendig war, den Standard-Namespace für das `<svg:svg>`-Element und seine Kind-Elemente neu zu deklarieren, weil ein Namespace-Präfix verwendet wurde. Im Allgemeinen ist es besser, den Standard-Namespace neu zu deklarieren, anstatt viele Elemente auf diese Weise zu präfixieren.

### Scripting in Namespaced XML

Namespaces wirken sich auf das Markup und Scripting ([und sogar auf CSS](/de/docs/Web/CSS/CSS_namespaces)) aus. Wenn Sie Skripte für Namespaces XML wie SVG schreiben, lesen Sie weiter.

Die [DOM Level 1](https://www.w3.org/TR/REC-DOM-Level-1/)-Empfehlung wurde erstellt, bevor die [originale Namespaces in XML](https://www.w3.org/TR/REC-xml-names/)-Empfehlung veröffentlicht wurde, daher ist DOM1 nicht Namespace-kompatibel. Dies verursacht Probleme für Namespaces XML wie SVG. Um diese Probleme zu lösen, fügte [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) namespace-kompatible Äquivalente aller anwendbaren DOM Level 1-Methoden hinzu. Wenn Sie SVG skripten, ist es wichtig, die [Namespace-kompatiblen Methoden](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations) zu verwenden. Die folgende Tabelle listet die DOM1-Methoden auf, die in SVG nicht verwendet werden sollten, zusammen mit ihren äquivalenten DOM2-Gegenstücken, die stattdessen verwendet werden sollten.

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
        (auch <a href="/de/docs/Web/API/Element/getElementsByTagNameNS">zum Element hinzugefügt</a>)
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

Der erste Parameter für alle DOM2 namespace-kompatiblen Methoden muss der Namespace-Name (auch bekannt als Namespace-URI) des betreffenden Elements oder Parameters sein. Für SVG **Elemente** ist dies `http://www.w3.org/2000/svg`. Beachten Sie jedoch genau: Die [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting)-Empfehlung besagt, dass der Namespace-Name für Parameter ohne Präfix keinen Wert hat. Mit anderen Worten, obwohl die Parameter zum Namespace des Elements gehören, verwenden Sie nicht den Namespace-Namen des Tags. Stattdessen **müssen Sie null als Namespace-Namen für unqualifizierte (präfixfreie) Parameter verwenden**. Um also ein SVG `rect` _Element_ mit `document.createElementNS()` zu erstellen, müssen Sie schreiben:

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

Um jedoch den Wert des `x` _Parameters_ auf einem SVG `rect`-Element zu erhalten, müssen Sie schreiben:

```js
rect.getAttributeNS(null, "x");
```

Beachten Sie, dass dies nicht der Fall bei Parametern _mit_ einem Namespace-Präfix ist (Parameter, die nicht zum selben XML-Dialekt wie das Element gehören). Parameter wie `xlink:href` erfordern den Namespace-Namen, der diesem Präfix zugeordnet wurde (`http://www.w3.org/1999/xlink` für XLink). Um also den Wert des `xlink:href`-Parameters eines `<a>`-Elements in SVG zu erhalten, würden Sie schreiben:

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

Für das Setzen von Parametern, die einen Namespace haben, wird empfohlen (aber nicht verlangt), dass Sie auch ihr Präfix im zweiten Parameter einschließen, damit das DOM später leichter zurück in XML konvertiert werden kann (zum Beispiel, wenn Sie es zurück an den Server senden möchten). Zum Beispiel:

```js
elt.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "otherdoc.svg",
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

Für SVG, HTML und MathML ist der Namespace impliziert und daher optional. Es ist erforderlich, den Namespace für XML-Dateien zu deklarieren. Wenn Sie dies nicht tun, werden User-Agents den Inhalt nicht erkennen und das XML-Markup anzeigen oder den Benutzer darüber informieren, dass ein Fehler im XML vorliegt.

Beim Schreiben von SVG ist es hilfreich, eine Vorlage zu verwenden, die alle häufig verwendeten Namespace-Deklarationen enthält, wenn Sie neue Dateien erstellen. Wenn Sie noch keine haben, erstellen Sie eine mit dem folgenden Code:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

Selbst wenn Sie nicht alle diese Namespaces in einem bestimmten Dokument verwenden, schadet es nicht, die Namespace-Deklarationen hinzuzufügen. Es kann Ihnen einige ärgerliche Fehler ersparen, falls Sie später Inhalte aus einem der ungenutzten Namespaces hinzufügen.

### Ein vollständiges Beispiel

Für ein vollständiges Beispiel siehe [SVG: Namespaces Crash Course: Beispiel](/de/docs/Web/SVG/Namespaces_Crash_Course/Example).
