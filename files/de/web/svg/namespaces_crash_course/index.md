---
title: Namespaces Crashkurs
slug: Web/SVG/Namespaces_Crash_Course
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{SVGRef}}

Als ein [XML](/de/docs/Glossary/XML)-Dialekt ist [SVG](/de/docs/Web/SVG) namespaced. Es ist wichtig, das Konzept der Namespaces zu verstehen und wie sie genutzt werden, wenn Sie planen, SVG-Inhalte zu erstellen. Namespaces sind essenziell für User Agents, die mehrere XML-Dialekte unterstützen; Browser müssen sehr strikt sein. Sich jetzt die Zeit zu nehmen, Namespaces zu verstehen, wird Ihnen in Zukunft Kopfschmerzen ersparen.

### Hintergrund

Ein langjähriges Ziel der verschiedenen W3C-Spezifikationen ist es, verschiedene Arten von XML-basierten Inhalten in derselben XML- oder HTML-Datei zu mischen. Zum Beispiel könnten SVG und [MathML](/de/docs/Web/MathML) direkt in ein HTML-basiertes wissenschaftliches Dokument eingebunden werden. Die Möglichkeit, Inhaltstypen auf diese Weise zu mischen, hat viele Vorteile, aber es erforderte auch die Lösung eines sehr realen Problems.

Jeder XML-Dialekt definiert natürlich die Bedeutung der Markup-Elementnamen, die in seiner Spezifikation beschrieben sind. Das Problem beim Mischen von Inhalten aus verschiedenen XML-Dialekten in einem einzigen Dokument ist, dass die Elemente, die von einem Dialekt definiert werden, denselben Namen wie die von einem anderen definierten Elemente haben können. Zum Beispiel haben sowohl HTML als auch SVG ein `<title>`-Element. Wie unterscheidet der User-Agent zwischen den beiden? Wie unterscheiden CSS-Stile zwischen den beiden? In der Tat, wie kann der User-Agent feststellen, ob es sich bei dem Inhalt um etwas handelt, das er kennt, und nicht um ein bedeutungsloses undefiniertes HTML-Custom-Element oder eine XML-Datei mit beliebigen ihm unbekannten Elementnamen?

Entgegen der landläufigen Meinung lautet die Antwort auf diese Frage nicht "es kann das aus der `DOCTYPE`-Deklaration erkennen". DTDs waren nie mit gemischten Inhalten im Sinn entworfen worden, und frühere Versuche, gemischte Inhalts-DTDs zu erstellen, gelten jetzt als gescheitert. XML und einige XML-Dialekte (einschließlich SVG und HTML) erfordern keine `DOCTYPE`-Deklaration. SVG 1.2 hat nicht einmal eine. Die Tatsache, dass `DOCTYPE`-Deklarationen (meistens) mit dem Inhalt in Dateien eines einzigen Inhaltstyps übereinstimmen, ist lediglich zufällig. DTDs dienen nur der Validierung, nicht der Identifizierung von Inhalten. Jeder User-Agent, der XML-Inhalte über seine `DOCTYPE`-Deklaration identifiziert, ist unzuverlässig.

Die echte Antwort auf die Frage ist, dass XML-Inhalte dem User-Agent mitteilen, zu welchem Dialekt die Elementnamen gehören, indem ihnen explizite "Namespace-Deklarationen" zugewiesen werden.

### Deklarieren von Namespaces

Wie sehen solche Namespace-Deklarationen aus und wo befinden sie sich? Hier ist ein kurzes Beispiel.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- more tags here -->
</svg>
```

Die Namespace-Deklaration wird durch das `xmlns`-Attribut bereitgestellt. Dieses Attribut gibt an, dass das `<svg>`-Element und seine Kindelemente zu dem XML-Dialekt gehören, der den Namespace-Namen `http://www.w3.org/2000/svg` hat, was natürlich SVG ist. Beachten Sie, dass die Namespace-Deklaration nur einmal an einem Wurzelelement bereitgestellt wird (und impliziert ist, wenn sie weggelassen wird). Die Deklaration definiert den _Standard_-Namespace, sodass der User-Agent weiß, dass alle Nachfahren des `<svg>`-Elements ebenfalls zu demselben Namespace gehören. User Agents prüfen, ob sie den Namen des Namespace erkennen, um festzustellen, ob sie wissen, wie sie mit dem Markup umgehen sollen.

Beachten Sie, dass Namespace-Namen nur Zeichenfolgen sind, weshalb die Tatsache, dass der SVG-Namespace-Name auch wie eine URI aussieht, nicht wichtig ist. URIs werden häufig verwendet, weil sie einzigartig sind, aber die Absicht ist nicht, irgendwohin zu "verlinken". (In der Tat, URIs werden so häufig verwendet, dass der Begriff "Namespace URI" anstelle von "Namespace Name" verwendet wird.)

#### Den Standard-Namespace neu deklarieren

Wenn alle Nachkommen des Wurzelelements ebenfalls so definiert werden, dass sie im Standard-Namespace sind, wie mischt man dann Inhalte aus einem anderen Namespace ein? Um den SVG-Namespace in HTML einzuschließen, verwenden Sie `<svg>`. In XML deklarieren Sie einen Namespace. Hier ist ein kurzes Beispiel.

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

In diesem Beispiel deklariert das `xmlns`-Attribut am Wurzel-`<report>`-Element den Standard-Namespace als `https://www.acme.org/reports` oder `reports`. Infolgedessen werden es und alle seine Kindelemente vom User-Agent als zu `reports` gehörend interpretiert, außer für das `<content>`-Element, das im Namespace `https://www.acme.org/tables` oder `tables` existiert. Das `<summary>`-Element hat sein eigenes `xmlns`-Attribut, und durch die Neu-Deklaration des `reports`-Namespace teilt es dem User-Agent mit, dass das `<summary>`-Element und seine Nachkommen (es sei denn, sie deklarieren auch einen alternativen Namespace neu) zu `reports` gehören.

Für HTML ist `http://www.w3.org/1999/xhtml` der implizierte Namespace. Für SVG ist es `http://www.w3.org/2000/svg`. MathML ist `http://www.w3.org/1998/Math/MathML`.

#### Namespace-Präfixe deklarieren

XML-Dialekte definieren nicht nur ihre eigenen Elemente, sondern sie deklarieren auch ihre eigenen Attribute.

Standardmäßig haben Attribute überhaupt keinen Namespace. Sie sind nur deshalb als einzigartig bekannt, weil sie an einem Element erscheinen, das selbst einen eindeutigen Namen hat. Manchmal ist es jedoch notwendig, Attribute zu definieren, damit sie auf vielen verschiedenen Elementen wiederverwendet werden können und dennoch als dasselbe Attribut betrachtet werden, unabhängig von dem Element, mit dem sie verwendet werden. Ein sehr gutes Beispiel dafür ist das `href`-Attribut, das von der [XLink](/de/docs/Glossary/XLink)-Spezifikation definiert ist. Dieses Attribut wird häufig von anderen XML-Dialekten als Mittel zum Verlinken auf externe Ressourcen verwendet. Aber wie teilt man dem User-Agent mit, zu welchem Dialekt das Attribut gehört, in diesem Fall `XLink`? Betrachten Sie das folgende Beispiel.

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

Dieses Beispiel hat das etwas ungewöhnlich aussehende Attribut `xmlns:xlink`. Wie Sie vielleicht aus dem ersten Teil `xmlns` erraten, handelt es sich wieder um eine Namespace-Deklaration. Anders als der Standard-Namespace legt diese Namespace-Deklaration jedoch den Namespace für etwas fest, das als "[Namespace-Präfix](/de/docs/Web/API/CSSNamespaceRule/prefix)" bezeichnet wird. In diesem Fall haben wir uns entschieden, das Präfix `xlink` (der zweite Teil) zu verwenden, da das Präfix verwendet wird, um dem User-Agent über Attribute zu informieren, die zu `XLink` gehören.

Wie der Name schon sagt, werden Namespace-Präfixe verwendet, um Attribut- und Elementnamen voranzustellen. Dies geschieht, indem das Namespace-Präfix und ein Doppelpunkt vor den Attributnamen gesetzt werden, wie im `<script>`-Element im obigen Beispiel gezeigt. Dies teilt dem User-Agent mit, dass das spezifische Attribut zu dem Namespace gehört, der dem Namespace-Präfix (`XLink`) zugeordnet ist, und ein Attribut ist, das mit derselben Bedeutung auf anderen Elementen verwendet werden kann.

Beachten Sie, dass es in XML ein XML-Fehler ist, ein Präfix zu verwenden, das nicht an einen Namespace-Namen gebunden ist. Die Bindung, die durch das `xmlns:xlink`-Attribut im obigen Beispiel erstellt wurde, ist erforderlich, damit das `xlink:href`-Attribut keinen Fehler verursacht. Dieses XLink-Attribut wird auch häufig in SVG auf den `<a>`, `<use>` und `<image>`-Elementen und anderen verwendet, deshalb ist es eine gute Idee, die XLink-Deklaration immer in Ihre Dokumente aufzunehmen.

Am Rande: Es ist nützlich zu wissen, dass Namespace-Präfixe auch für Elementnamen verwendet werden können. Dies teilt dem User-Agent mit, dass das spezifische Element (aber nicht seine Kinder dieses Mal!) zu dem Namespace gehört, der dem Präfix zugeordnet ist. Dieses Wissen wird Ihnen einige Verwirrung ersparen, wenn Sie auf Markup stoßen, das wie im folgenden Beispiel aussieht:

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

Beachten Sie, dass es nicht notwendig war, den Standard-Namespace neu zu deklarieren, weil ein Namespace-Präfix für das `<svg:svg>`-Element und sein Kindelement `<svg:circle>` verwendet wurde. Im Allgemeinen ist es besser, den Standard-Namespace neu zu deklarieren, als viele Elemente auf diese Weise zu präfixen.

### Scripting in namespaced XML

Namespaces beeinflussen Markup und Scripting ([und sogar CSS](/de/docs/Web/CSS/CSS_namespaces)). Wenn Sie Skripte für namespaced XML wie SVG schreiben, lesen Sie weiter.

Die [DOM Level 1](https://www.w3.org/TR/REC-DOM-Level-1/)-Empfehlung wurde erstellt, bevor die [ursprüngliche Namespaces in XML](https://www.w3.org/TR/REC-xml-names/)-Empfehlung veröffentlicht wurde; daher ist DOM1 nicht namespace-fähig. Dies verursacht Probleme für namespaced XML wie SVG. Um diese Probleme zu lösen, fügte [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) namespace-fähige Äquivalente für alle anwendbaren DOM Level 1-Methoden hinzu. Beim Scripting von SVG ist es wichtig, die [namespace-fähigen Methoden](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations) zu verwenden. Die folgende Tabelle listet die DOM1-Methoden auf, die in SVG nicht verwendet werden sollten, zusammen mit ihren entsprechenden DOM2-Gegenstücken, die stattdessen verwendet werden sollten.

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

Der erste Parameter für alle namespace-fähigen DOM2-Methoden muss der Namespace-Name (auch als Namespace-URI bekannt) des betreffenden Elements oder Attributs sein. Für SVG-**Elemente** ist dies `http://www.w3.org/2000/svg`. Beachten Sie jedoch genau: die [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting)-Empfehlung besagt, dass der Namespace-Name für Attribute ohne Präfix keinen Wert hat. Mit anderen Worten, obwohl die Attribute zum Namespace des Elements gehören, verwenden Sie nicht den Namespace-Namen des Tags. Stattdessen **müssen Sie für unqualifizierte (präfixlose) Attribute `null` als Namespace-Namen verwenden**. Um also ein SVG-`rect`-_Element_ mit `document.createElementNS()` zu erstellen, müssen Sie schreiben:

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

Aber um den Wert des `x`-_Attributs_ auf einem SVG-`rect`-Element abzurufen, müssen Sie schreiben:

```js
rect.getAttributeNS(null, "x");
```

Beachten Sie, dass dies nicht der Fall für Attribute _mit_ einem Namespace-Präfix (Attribute, die nicht zum gleichen XML-Dialekt wie das Element gehören) ist. Attribute wie `xlink:href` erfordern den Namespace-Namen, der diesem Präfix zugewiesen wurde (`http://www.w3.org/1999/xlink` für XLink). Um also den Wert des `xlink:href`-Attributs eines `<a>`-Elements in SVG zu erhalten, würden Sie schreiben:

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

Für das Setzen von Attributen, die einen Namespace haben, wird empfohlen (aber nicht erforderlich), dass Sie auch deren Präfix im zweiten Parameter einschließen, damit das DOM später leichter in XML zurückkonvertiert werden kann (wenn Sie es zum Beispiel an den Server zurücksenden möchten). Zum Beispiel:

```js
elt.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "otherdoc.svg",
);
```

Als abschließendes Beispiel hier eine Demonstration, wie Sie ein `<image>`-Element mit JavaScript dynamisch erstellen könnten:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const XLink_NS = "http://www.w3.org/1999/xlink";
const image = document.createElementNS(SVG_NS, "image");
image.setAttributeNS(null, "width", "100");
image.setAttributeNS(null, "height", "100");
image.setAttributeNS(XLink_NS, "xlink:href", "flower.png");
```

### Fazit

Für SVG, HTML und MathML ist der Namespace impliziert und daher optional. Es ist erforderlich, den Namespace für XML-Dateien zu deklarieren. Wenn Sie dies nicht tun, werden die User Agents den Inhalt nicht erkennen und das XML-Markup anzeigen oder den Benutzer darüber informieren, dass ein Fehler im XML vorliegt.

Beim Schreiben von SVG ist es hilfreich, eine Vorlage zu verwenden, die alle häufig verwendeten Namespace-Deklarationen enthält, wenn Sie neue Dateien erstellen. Wenn Sie noch keine haben, erstellen Sie eine mit folgendem Code:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

Auch wenn Sie nicht alle diese Namespaces in einem bestimmten Dokument verwenden, ist es kein Schaden, die Namespace-Deklarationen aufzunehmen. Es könnte Sie vor einigen ärgerlichen Fehlern bewahren, falls Sie später Inhalte aus einem der unbenutzten Namespaces hinzufügen.

### Ein vollständiges Beispiel

Ein vollständiges Beispiel finden Sie unter [SVG: Namespaces Crash Course: Example](/de/docs/Web/SVG/Namespaces_Crash_Course/Example).
