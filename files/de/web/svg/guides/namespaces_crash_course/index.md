---
title: Namenräume Crashkurs
slug: Web/SVG/Guides/Namespaces_crash_course
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Als ein {{Glossary("XML", "XML")}}-Dialekt ist [SVG](/de/docs/Web/SVG) mit Namenräumen versehen. Es ist wichtig, das Konzept von Namenräumen zu verstehen und wie sie verwendet werden, wenn Sie vorhaben, SVG-Inhalte zu erstellen. Namenräume sind für Benutzeragenten unverzichtbar, die mehrere XML-Dialekte unterstützen; Browser müssen dabei sehr strikt sein. Sich jetzt die Zeit zu nehmen, Namenräume zu verstehen, wird Ihnen in Zukunft viele Kopfschmerzen ersparen.

### Hintergrund

Ein langjähriges Ziel der verschiedenen W3C-Spezifikationen ist es, verschiedene Arten von XML-basierten Inhalten im selben XML- oder HTML-Dokument zu mischen. Beispielsweise könnten SVG und [MathML](/de/docs/Web/MathML) direkt in ein HTML-basiertes wissenschaftliches Dokument integriert werden. Die Möglichkeit, Inhaltstypen so zu mischen, hat viele Vorteile, erforderte jedoch auch die Lösung eines sehr realen Problems.

Jeder XML-Dialekt definiert natürlich die Bedeutung der Markup-Elementnamen, die in seiner Spezifikation beschrieben sind. Das Problem beim Mischen von Inhalten aus verschiedenen XML-Dialekten in einem einzigen Dokument besteht darin, dass die durch einen Dialekt definierten Elemente denselben Namen wie Elemente eines anderen Dialekts haben können. Zum Beispiel haben sowohl HTML als auch SVG ein `<title>`-Element. Wie unterscheidet der Benutzeragent zwischen den beiden? Wie unterscheiden CSS-Stile zwischen den beiden? Tatsächlich, wie kann der Benutzeragent erkennen, wenn Inhalte etwas sind, das er kennt, und nicht nur ein bedeutungsloses, undefiniertes HTML-Custom-Element oder eine XML-Datei mit beliebigen, ihm unbekannten Elementnamen?

Im Gegensatz zur weit verbreiteten Meinung ist die Antwort auf diese Frage nicht "er kann es anhand der `DOCTYPE`-Deklaration erkennen". DTDs wurden nie mit gemischten Inhalten im Blick entworfen, und frühere Versuche, gemischte Inhalts-DTDs zu erstellen, gelten inzwischen als gescheitert. XML und einige XML-Dialekte (einschließlich SVG und HTML) erfordern keine `DOCTYPE`-Deklaration. SVG 1.2 hat nicht einmal eine. Der Umstand, dass `DOCTYPE`-Deklarationen (meistens) mit den Inhalten in Dateien eines einzigen Inhaltstyps übereinstimmen, ist lediglich Zufall. DTDs dienen nur zur Validierung, nicht zur Identifizierung von Inhalten. Jeder Benutzeragent, der XML-Inhalte anhand seiner `DOCTYPE`-Deklaration identifiziert, ist unzuverlässig.

Die tatsächliche Antwort auf die Frage ist, dass XML-Inhalte dem Benutzeragenten mitteilen, zu welchem Dialekt die Elementnamen gehören, indem sie ihnen explizite "Namenraumdeklarationen" geben.

### Deklarieren von Namenräumen

Wie sehen diese Namenraumdeklarationen also aus und wo werden sie platziert? Hier ist ein kurzes Beispiel.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- more tags here -->
</svg>
```

Die Namenraumdeklaration wird durch den `xmlns`-Parameter bereitgestellt. Dieser Parameter besagt, dass das `<svg>`-Element und seine Kindelemente zu dem XML-Dialekt gehören, der den Namenraum `http://www.w3.org/2000/svg` hat, was natürlich SVG ist. Beachten Sie, dass die Namenraumdeklaration nur einmal auf einem Wurzelelement bereitgestellt wird (und impliziert ist, wenn sie weggelassen wird). Die Deklaration definiert den _Standard_-Namenraum, sodass der Benutzeragent weiß, dass alle Nachkommen des `<svg>`-Elements ebenfalls zum selben Namenraum gehören. Benutzeragenten prüfen, ob sie den Namenraum erkennen, um festzustellen, ob sie wissen, wie das Markup zu behandeln ist.

Beachten Sie, dass Namenraumnamen nur Zeichenfolgen sind, daher ist die Tatsache, dass der SVG-Namenraumname auch wie ein URI aussieht, nicht wichtig. URIs werden häufig verwendet, weil sie eindeutig sind, aber die Absicht ist nicht, "irgendwohin zu verlinken". (Tatsächlich werden URIs so häufig verwendet, dass der Begriff "Namespace-URI" häufig anstelle von "Namenraumname" verwendet wird.)

#### Erneutes Deklarieren des Standardnamenraums

Wenn alle Nachkommen des Wurzelelements ebenfalls im Standardnamenraum definiert sind, wie mischen Sie Inhalte aus einem anderen Namenraum ein? Um den SVG-Namenraum in HTML einzuschließen, verwenden Sie `<svg>`. In XML deklarieren Sie einen Namenraum. Hier ist ein kurzes Beispiel.

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

In diesem Beispiel erklärt das `xmlns`-Attribut auf dem Wurzel-`<report>`-Element den Standardnamenraum als `https://www.acme.org/reports`, oder `reports`. Dadurch werden es und alle seine Kindelemente vom Benutzeragenten als zu `reports` gehörend interpretiert, mit Ausnahme des `<content>`-Elements, das im `https://www.acme.org/tables`, oder `tables`, Namenraum existiert. Das `<summary>`-Element hat seinen eigenen `xmlns`-Parameter, und durch die erneute Deklaration des `reports`-Namenraums wird dem Benutzeragenten mitgeteilt, dass das `<summary>`-Element und seine Nachkommen (sofern sie nicht ebenfalls einen alternativen Namenraum neu deklarieren) zu `reports` gehören.

Mit HTML ist `http://www.w3.org/1999/xhtml` der implizite Namenraum. Bei SVG ist es `http://www.w3.org/2000/svg`. MathML ist `http://www.w3.org/1998/Math/MathML`.

#### Deklarieren von Namenraumprefixen

XML-Dialekte definieren nicht nur ihre eigenen Elemente, sondern sie deklarieren auch ihre eigenen Parameter.

Standardmäßig haben Parameter überhaupt keinen Namenraum. Sie sind nur dann eindeutig, wenn sie auf einem Element erscheinen, das selbst einen eindeutigen Namen hat. Manchmal ist es jedoch notwendig, Parameter so zu definieren, dass sie auf vielen verschiedenen Elementen wiederverwendet werden können und dennoch als derselbe Parameter angesehen werden, unabhängig von dem Element, mit dem sie verwendet werden. Ein sehr gutes Beispiel hierfür ist der `href`-Parameter, der von der {{Glossary("XLink", "XLink")}}-Spezifikation definiert wird. Dieser Parameter wird von anderen XML-Dialekten häufig als Mittel verwendet, um auf externe Ressourcen zu verlinken. Aber wie teilt man dem Benutzeragenten mit, zu welchem Dialekt der Parameter gehört, in diesem Fall `XLink`? Betrachten Sie das folgende Beispiel.

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

Dieses Beispiel hat den ziemlich ungewöhnlich aussehenden Parameter `xmlns:xlink`. Wie Sie vom ersten `xmlns`-Teil vielleicht erraten können, ist dies eine weitere Namenraumdeklaration. Statt jedoch den Standardnamenraum zu setzen, setzt diese Namenraumdeklaration den Namenraum für etwas, das als "Namenraumprefix" bezeichnet wird. In diesem Fall haben wir uns dafür entschieden, das Präfix `xlink` (der zweite Teil) zu verwenden, da das Präfix verwendet wird, um dem Benutzeragenten über Attribute zu informieren, die zu `XLink` gehören.

Wie der Name nahelegt, werden Namenraumprefixe verwendet, um Parameter- und Elementnamen voranzustellen. Dies geschieht, indem das Namenraumprefix und ein Doppelpunkt vor dem Parameternamen gesetzt werden, wie beim `<script>`-Element im obigen Beispiel gezeigt wurde. Dies teilt dem Benutzeragenten mit, dass der bestimmte Parameter zum zugeordneten Namenraum des Namenraumprefixes (`XLink`) gehört und ein Parameter ist, der mit der gleichen Bedeutung auf anderen Elementen verwendet werden kann.

Beachten Sie, dass es in XML ein XML-Fehler ist, ein Präfix zu verwenden, das nicht an einen Namenraumnamen gebunden wurde. Die im obigen Beispiel durch den `xmlns:xlink`-Parameter erstellte Bindung ist erforderlich, damit der `xlink:href`-Parameter keinen Fehler verursacht. Dieser XLink-Parameter wird in SVG auch häufig auf den `<a>`, `<use>` und `<image>`-Elementen unter anderen verwendet, es ist also eine gute Idee, die XLink-Deklaration immer in Ihre Dokumente aufzunehmen.

Nebenbei bemerkt, ist es nützlich zu wissen, dass Namenraumprefixe auch für Elementnamen verwendet werden können. Dies teilt dem Benutzeragenten mit, dass das bestimmte Element (diesmal jedoch nicht seine Kinder!) zum Präfix zugeordneten Namenraum gehört. Es wird Ihnen einige Verwirrungen ersparen, wenn Sie auf Markup wie das folgende Beispiel treffen:

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
> Dies ist eine {{Glossary("XHTML", "XHTML")}}-Datei, keine HTML-Datei. XML-Namenräume sind in HTML nicht gültig. Um dieses Beispiel auszuprobieren, müssen Sie Ihre Datei als `.xhtml` speichern.

Beachten Sie, dass es nicht notwendig war, den Standardnamenraum neu zu deklarieren, da ein Namenraumprefix für das `<svg:svg>`-Element und sein Kindelement `<svg:circle>` verwendet wird. Im Allgemeinen ist es besser, den Standardnamenraum neu zu deklarieren, als viele Elemente auf diese Weise mit einem Prefix zu versehen.

### Skripting in namenraumbasierten XML

Namenräume beeinflussen das Markup und das Skripting ([und sogar CSS](/de/docs/Web/CSS/CSS_namespaces)). Wenn Sie Skripte für namenraumbasiertes XML wie SVG schreiben, lesen Sie weiter.

Die [DOM Level 1](https://www.w3.org/TR/DOM-Level-1/)-Empfehlung wurde erstellt, bevor die [ursprüngliche Namespaces in XML](https://www.w3.org/TR/xml-names/)-Empfehlung veröffentlicht wurde, daher ist DOM1 nicht namenraum-wahrnehmend. Dies verursacht Probleme für namenraumbasierte XML wie SVG. Um diese Probleme zu lösen, hat [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) namensraum-wahrnehmende Entsprechungen aller DOM Level 1-Methoden hinzugefügt. Beim Skripting von SVG ist es wichtig, die [namensraum-wahrnehmenden Methoden](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations) zu verwenden. In der nachstehenden Tabelle sind die DOM1-Methoden aufgeführt, die in SVG nicht verwendet werden sollten, zusammen mit ihren entsprechenden DOM2-Gegenstücken, die stattdessen verwendet werden sollten.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>DOM1 (nicht verwenden)</th>
      <th>DOM2 (verwenden Sie diese stattdessen!)</th>
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
        (auch zu <a href="/de/docs/Web/API/Element/getElementsByTagNameNS">Element hinzugefügt</a>)
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

Der erste Parameter für alle DOM2-namenraum-wahrnehmenden Methoden muss der Namenraumname (auch bekannt als der Namespace-URI) des Elements oder Parameters in Frage sein. Für SVG **Elemente** ist dies `http://www.w3.org/2000/svg`. Beachten Sie jedoch Folgendes: Die [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting)-Empfehlung besagt, dass der Namenraumname für Parameter ohne Präfix keinen Wert hat. Mit anderen Worten, obwohl Parameter zum Namenraum des Elements gehören, verwenden Sie nicht den Namenraumnamen des Tags. Stattdessen **müssen Sie null als den Namenraumnamen für nicht qualifizierte (präfixlose) Parameter verwenden**. Um also ein SVG `rect` _Element_ mit `document.createElementNS()` zu erstellen, müssen Sie schreiben:

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

Aber um den Wert des `x` _Parameters_ eines SVG `rect`-Elements abzurufen, müssen Sie schreiben:

```js
rect.getAttributeNS(null, "x");
```

Beachten Sie, dass dies nicht für Parameter _mit_ einem Namenraumprefix (Parameter, die nicht zum selben XML-Dialekt wie das Element gehören) gilt. Parameter wie `xlink:href` erfordern den Namenraumnamen, der diesem Präfix zugewiesen wurde (`http://www.w3.org/1999/xlink` für XLink). Daher würden Sie, um den Wert des `xlink:href`-Parameters eines `<a>`-Elements in SVG zu erhalten, schreiben:

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

Für das Setzen von Parametern, die einen Namenraum haben, wird empfohlen (aber nicht vorausgesetzt), dass Sie auch ihr Präfix im zweiten Parameter einschließen, damit das DOM später leichter wieder in XML umgewandelt werden kann (falls Sie es beispielsweise zurück an den Server senden möchten). Zum Beispiel:

```js
elt.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "other-doc.svg",
);
```

Als abschließendes Beispiel zeigt dieses Beispiel, wie Sie mit JavaScript dynamisch ein `<image>`-Element erstellen könnten:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const XLink_NS = "http://www.w3.org/1999/xlink";
const image = document.createElementNS(SVG_NS, "image");
image.setAttributeNS(null, "width", "100");
image.setAttributeNS(null, "height", "100");
image.setAttributeNS(XLink_NS, "xlink:href", "flower.png");
```

### Fazit

Für SVG, HTML und MathML ist der Namenraum impliziert und daher optional. Es ist erforderlich, den Namenraum für XML-Dateien zu deklarieren. Wenn Sie dies nicht tun, werden die Benutzeragenten die Inhalte nicht erkennen und das XML-Markup anzeigen oder dem Benutzer mitteilen, dass ein Fehler im XML vorliegt.

Beim Schreiben von SVG ist es hilfreich, eine Vorlage zu verwenden, die alle häufig verwendeten Namenraumdeklarationen enthält, wenn Sie neue Dateien erstellen. Wenn Sie noch keine haben, erstellen Sie eine mit dem folgenden Code:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

Selbst wenn Sie nicht alle diese Namenräume in einem bestimmten Dokument verwenden, gibt es keinen Nachteil, die Namenraumdeklarationen einzuschließen. Es kann Sie vor einigen lästigen Fehlern bewahren, wenn Sie später Inhalte aus einem der ungenutzten Namenräume hinzufügen.

### Ein vollständiges Beispiel

Für ein vollständiges Beispiel siehe [SVG: Namespaces Crash Course: Example](/de/docs/Web/SVG/Guides/Namespaces_crash_course/Example).
