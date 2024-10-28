---
title: Namespaces Crashkurs
slug: Web/SVG/Namespaces_Crash_Course
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{SVGRef}}

Als ein {{Glossary("XML", "XML")}}-Dialekt ist [SVG](/de/docs/Web/SVG) namensgebunden. Es ist wichtig, das Konzept von Namespaces zu verstehen und wie sie verwendet werden, wenn Sie planen, SVG-Inhalte zu erstellen. Namespaces sind essenziell für Benutzeragenten, die mehrere XML-Dialekte unterstützen; Browser müssen sehr streng sein. Jetzt Zeit zu investieren, um Namespaces zu verstehen, wird Ihnen zukünftige Kopfschmerzen ersparen.

### Hintergrund

Ein langjähriges Ziel der verschiedenen W3C-Spezifikationen ist es, zu ermöglichen, dass unterschiedliche Arten von XML-basiertem Inhalt zusammen in derselben XML- oder HTML-Datei gemischt werden können. Zum Beispiel könnten SVG und [MathML](/de/docs/Web/MathML) direkt in ein HTML-basiertes wissenschaftliches Dokument eingefügt werden. Die Möglichkeit, Inhaltstypen auf diese Weise zu mischen, hat viele Vorteile, erforderte jedoch auch, ein sehr reales Problem zu lösen.

Natürlich definiert jeder XML-Dialekt die Bedeutung der Markup-Elementnamen, die in seiner Spezifikation beschrieben werden. Das Problem beim Mischen von Inhalten aus verschiedenen XML-Dialekten in einem einzigen Dokument besteht darin, dass die Elemente, die von einem Dialekt definiert werden, denselben Namen wie Elemente haben können, die von einem anderen definiert werden. Zum Beispiel haben sowohl HTML als auch SVG ein `<title>`-Element. Wie unterscheidet der Benutzeragent zwischen den beiden? Wie unterscheiden CSS-Stile zwischen den beiden? Tatsächlich, wie erkennt der Benutzeragent, wann Inhalt etwas ist, das er kennt, und nicht nur ein bedeutungsloses undefiniertes HTML-Benutzerelement oder eine XML-Datei mit beliebigen Elementnamen, die ihm unbekannt sind?

Im Gegensatz zur landläufigen Meinung ist die Antwort auf diese Frage nicht "es kann es aus der `DOCTYPE`-Deklaration ableiten". DTDs wurden nie mit gemischtem Inhalt im Hinterkopf entwickelt, und vergangene Versuche, gemischte Inhalts-DTDs zu erstellen, gelten nun als gescheitert. XML und einige XML-Dialekte (einschließlich SVG und HTML) erfordern keine `DOCTYPE`-Deklaration. SVG 1.2 hat nicht einmal eine. Die Tatsache, dass `DOCTYPE`-Deklarationen (meistens) zu dem Inhalt in Einzelinhaltstyp-Dateien passen, ist nur zufällig. DTDs dienen nur zur Validierung, nicht zur Identifikation von Inhalten. Ein Benutzeragent, der XML-Inhalte anhand seiner `DOCTYPE`-Deklaration identifiziert, ist unzuverlässig.

Die wirkliche Antwort auf die Frage ist, dass XML-Inhalte dem Benutzeragenten mitteilen, zu welchem Dialekt die Elementnamen gehören, indem sie ihnen explizite "Namespace-Deklarationen" geben.

### Namespaces deklarieren

Wie sehen diese Namespace-Deklarationen also aus, und wo kommen sie hin? Hier ist ein kurzes Beispiel.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- more tags here -->
</svg>
```

Die Namespace-Deklaration wird durch den `xmlns`-Parameter bereitgestellt. Dieser Parameter besagt, dass das `<svg>`-Element und seine Kindelemente zu dem XML-Dialekt gehören, der den Namespace-Namen `http://www.w3.org/2000/svg` hat, was natürlich SVG ist. Beachten Sie, dass die Namespace-Deklaration nur einmal an einem Stamm-Element bereitgestellt wird (und impliziert ist, wenn sie weggelassen wird). Die Deklaration definiert den _Standard_-Namespace, sodass der Benutzeragent weiß, dass alle Nachkommen des `<svg>`-Elements auch zum selben Namespace gehören. Benutzeragenten prüfen, ob sie den Namespace-Namen erkennen, um festzustellen, ob sie wissen, wie sie das Markup verarbeiten sollen.

Beachten Sie, dass Namespace-Namen nur Zeichenfolgen sind, sodass es nicht wichtig ist, dass der SVG-Namespace-Name ebenfalls wie ein URI aussieht. URIs werden häufig verwendet, weil sie einzigartig sind, aber die Absicht ist nicht, irgendwohin zu "verlinken". (Tatsächlich werden URIs so häufig verwendet, dass der Begriff "Namespace-URI" häufig anstelle von "Namespace-Name" verwendet wird.)

#### Den Standardnamespace neu deklarieren

Wenn alle Nachkommen des Stamm-Elements ebenfalls als im Standard-Namespace definiert sind, wie mischt man dann Inhalte aus einem anderen Namespace? Um den SVG-Namespace in HTML aufzunehmen, fügt man `<svg>` ein. In XML deklariert man einen Namespace. Hier ist ein kurzes Beispiel.

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

In diesem Beispiel deklariert das `xmlns`-Attribut am Wurzel-`<report>`-Element den Standard-Namespace als `https://www.acme.org/reports` oder `reports`. Daher werden es und alle seine Kindelemente vom Benutzeragenten als zu `reports` gehörend interpretiert, mit Ausnahme des `<content>`-Elements, das im Namespace `https://www.acme.org/tables` oder `tables` existiert. Das `<summary>`-Element hat seinen eigenen `xmlns`-Parameter, und indem der `reports`-Namespace neu deklariert wird, wird dem Benutzeragenten mitgeteilt, dass das `<summary>`-Element und seine Nachkommen (es sei denn, sie deklarieren ebenfalls einen alternativen Namespace) zu `reports` gehören.

Bei HTML ist `http://www.w3.org/1999/xhtml` der implizite Namespace. Bei SVG ist es `http://www.w3.org/2000/svg`. MathML ist `http://www.w3.org/1998/Math/MathML`.

#### Namespace-Präfixe deklarieren

XML-Dialekte definieren nicht nur ihre eigenen Elemente, sondern deklarieren auch ihre eigenen Parameter.

Standardmäßig haben Parameter überhaupt keinen Namespace. Sie sind nur als eindeutig bekannt, weil sie auf einem Element erscheinen, das selbst einen eindeutigen Namen hat. Allerdings ist es manchmal notwendig, Parameter zu definieren, damit sie auf viele verschiedene Elemente angewendet werden können und trotzdem als derselbe Parameter betrachtet werden, unabhängig von dem Element, mit dem sie verwendet werden. Ein sehr gutes Beispiel dafür ist der `href`-Parameter, der von der {{Glossary("XLink", "XLink")}}-Spezifikation definiert wird. Dieser Parameter wird häufig von anderen XML-Dialekten als Mittel verwendet, um auf externe Ressourcen zu verlinken. Aber wie sagt man dem Benutzeragenten, zu welchem Dialekt der Parameter gehört, in diesem Fall `XLink`? Betrachten Sie das folgende Beispiel.

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

Dieses Beispiel hat den eher ungewöhnlich aussehenden Parameter `xmlns:xlink`. Wie Sie aus dem ersten Teil `xmlns` erahnen können, handelt es sich hierbei um eine weitere Namespace-Deklaration. Statt jedoch den Standard-Namespace festzulegen, setzt diese Namespace-Deklaration den Namespace für etwas, das als "[Namespace-Präfix](/de/docs/Web/API/CSSNamespaceRule/prefix)" bezeichnet wird. In diesem Fall haben wir uns entschieden, das Präfix `xlink` (der zweite Teil) zu verwenden, da das Präfix verwendet wird, um dem Benutzeragenten mitzuteilen, dass Attribute zu `XLink` gehören.

Wie der Name schon sagt, werden Namespace-Präfixe verwendet, um Parameter- und Elementnamen vorzustehen. Dies geschieht, indem das Namespace-Präfix und ein Doppelpunkt vor den Parameternamen gesetzt werden, wie am `<script>`-Element im obigen Beispiel gezeigt. Dies teilt dem Benutzeragenten mit, dass der bestimmte Parameter zu dem Namespace gehört, der dem Namespace-Präfix (`XLink`) zugewiesen wurde, und ein Parameter ist, der mit derselben Bedeutung auf andere Elemente angewendet werden kann.

Beachten Sie, dass es in XML ein XML-Fehler ist, ein Präfix zu verwenden, das nicht an einen Namespace-Namen gebunden wurde. Die Bindung, die durch den `xmlns:xlink`-Parameter im obigen Beispiel erstellt wurde, ist erforderlich, damit der `xlink:href`-Parameter keinen Fehler verursacht. Dieser XLink-Parameter wird auch häufig in SVG an den `<a>`, `<use>` und `<image>`-Elementen und anderen verwendet, daher ist es eine gute Idee, immer die XLink-Deklaration in Ihre Dokumente aufzunehmen.

Nebenbei bemerkt ist es nützlich zu wissen, dass Namespace-Präfixe auch für Elementnamen verwendet werden können. Dies sagt dem Benutzeragenten, dass das bestimmte Element (diesmal aber nicht seine Kinder!) zu dem Namespace gehört, der dem Präfix zugewiesen wurde. Zu wissen, dass dies Ihnen einige Verwirrung ersparen wird, wenn Sie auf Markup wie im folgenden Beispiel stoßen:

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

Beachten Sie, dass, da ein Namespace-Präfix für das `<svg:svg>`-Element und dessen Kind `<svg:circle>` verwendet wird, es nicht notwendig war, den Standard-Namespace neu zu deklarieren. Im Allgemeinen ist es besser, den Standard-Namespace neu zu deklarieren, anstatt auf diese Weise viele Elemente vorzuprefixieren.

### Scripting in XML mit Namespaces

Namespaces beeinflussen Markup und Scripting (und sogar [CSS](/de/docs/Web/CSS/CSS_namespaces)). Wenn Sie Skripte für XML mit Namespaces wie SVG schreiben, lesen Sie weiter.

Die [DOM Level 1](https://www.w3.org/TR/REC-DOM-Level-1/)-Empfehlung wurde erstellt, bevor die [Original-Namespace-in-XML](https://www.w3.org/TR/REC-xml-names/)-Empfehlung veröffentlicht wurde; daher ist DOM1 nicht namensbewusst. Dies verursacht Probleme für XML mit Namespaces wie SVG. Um diese Probleme zu lösen, fügte [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) namensbewusste Äquivalente zu allen anwendbaren DOM Level 1-Methoden hinzu. Beim Scripting von SVG ist es wichtig, die [namensbewussten Methoden](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations) zu verwenden. Die folgende Tabelle listet die DOM1-Methoden auf, die in SVG nicht verwendet werden sollten, zusammen mit ihren entsprechenden DOM2-Gegenstücken, die stattdessen verwendet werden sollten.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>DOM1 (nicht verwenden)</th>
      <th>DOM2 (diese stattdessen verwenden!)</th>
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

Der erste Parameter für alle DOM2 namensbewussten Methoden muss der Namespace-Name (auch bekannt als Namespace-URI) des betreffenden Elements oder Parameters sein. Für SVG- **Elemente** ist dies `http://www.w3.org/2000/svg`. Beachten Sie jedoch sorgfältig: Die [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting)-Empfehlung besagt, dass der Namespace-Name für Parameter ohne ein Präfix keinen Wert hat. Mit anderen Worten, obwohl die Parameter zum Namespace des Elements gehören, verwenden Sie nicht den Namespace-Namen des Tags. Stattdessen **müssen Sie null als den Namespace-Namen für unqualifizierte (präfixlose) Parameter verwenden**. Um also ein SVG- `rect` _Element_ mit `document.createElementNS()` zu erstellen, müssen Sie schreiben:

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

Aber um den Wert des `x` _Parameters_ auf einem SVG `rect`-Element abzurufen, müssen Sie schreiben:

```js
rect.getAttributeNS(null, "x");
```

Beachten Sie, dass dies nicht für Parameter _mit_ einem Namespace-Präfix gilt (Parameter, die nicht zum selben XML-Dialekt wie das Element gehören). Parameter wie `xlink:href` erfordern den Namespace-Namen, der diesem Präfix zugewiesen wurde (`http://www.w3.org/1999/xlink` für XLink). Um also den Wert des `xlink:href`-Parameters eines `<a>`-Elements in SVG abzurufen, würden Sie schreiben:

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

Für das Setzen von Parametern, die einen Namespace haben, wird empfohlen (aber nicht gefordert), dass Sie auch ihr Präfix im zweiten Parameter einschließen, damit das DOM später leichter in XML zurückkonvertiert werden kann (wenn Sie es zum Beispiel zurück an den Server senden möchten). Zum Beispiel:

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

Für SVG, HTML und MathML ist der Namespace impliziert und daher optional. Es ist erforderlich, den Namespace für XML-Dateien zu deklarieren. Wenn Sie dies nicht tun, wird der Benutzeragent den Inhalt nicht erkennen und die XML-Markup anzeigen oder den Benutzer darüber informieren, dass ein Fehler im XML vorliegt.

Beim Schreiben von SVG ist es hilfreich, eine Vorlage zu verwenden, die alle häufig verwendeten Namespace-Deklarationen enthält, wenn neue Dateien erstellt werden. Wenn Sie noch keine haben, erstellen Sie eine mit dem folgenden Code:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

Auch wenn Sie nicht alle diese Namespaces in einem bestimmten Dokument verwenden, schadet es nicht, die Namespace-Deklarationen einzuschließen. Es kann Ihnen einige lästige Fehler ersparen, wenn Sie später Inhalte aus einem der unbenutzten Namespaces hinzufügen.

### Ein vollständiges Beispiel

Für ein vollständiges Beispiel siehe [SVG: Namespaces Crash Course: Beispiel](/de/docs/Web/SVG/Namespaces_Crash_Course/Example).
