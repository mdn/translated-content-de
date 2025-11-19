---
title: Namespaces-Kurzanleitung
slug: Web/SVG/Guides/Namespaces_crash_course
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Als {{Glossary("XML", "XML")}}-Dialekt ist [SVG](/de/docs/Web/SVG) namespaced. Es ist wichtig, das Konzept der Namespaces und deren Verwendung zu verstehen, wenn Sie vorhaben, SVG-Inhalte zu erstellen. Namespaces sind für Benutzeragenten, die mehrere XML-Dialekte unterstützen, unerlässlich; Browser müssen sehr strikt sein. Sich jetzt die Zeit zu nehmen, Namespaces zu verstehen, wird Ihnen in Zukunft Kopfschmerzen ersparen.

## Hintergrund

Ein langjähriges Ziel der verschiedenen W3C-Spezifikationen ist es, die Kombination unterschiedlicher XML-basierter Inhalte in derselben XML- oder HTML-Datei zu ermöglichen. Zum Beispiel könnten SVG und [MathML](/de/docs/Web/MathML) direkt in ein HTML-basiertes wissenschaftliches Dokument integriert werden. Die Möglichkeit, Inhaltstypen auf diese Weise zu mischen, hat viele Vorteile, aber es erforderte auch, ein sehr reales Problem zu lösen.

Natürlich definiert jeder XML-Dialekt die Bedeutung der in seiner Spezifikation beschriebenen Markup-Elementnamen. Das Problem beim Mischen von Inhalten aus verschiedenen XML-Dialekten in einem einzigen Dokument besteht darin, dass die von einem Dialekt definierten Elemente denselben Namen wie die von einem anderen definierten Elemente haben können. Zum Beispiel haben sowohl HTML als auch SVG ein `<title>`-Element. Wie unterscheidet der Benutzeragent die beiden? Wie unterscheiden CSS-Stile zwischen den beiden? Tatsächlich, wie erkennt der Benutzeragent, wann es sich um bekannte Inhalte handelt und nicht nur um ein bedeutungsloses undefiniertes HTML-Custom-Element oder eine XML-Datei mit ihm unbekannten beliebigen Elementnamen?

Entgegen der weit verbreiteten Meinung lautet die Antwort auf diese Frage nicht "es kann anhand der `DOCTYPE`-Deklaration erkennen". DTDs wurden nie mit gemischten Inhalten im Hinterkopf entworfen, und vergangene Versuche, gemischte Inhalts-DTDs zu erstellen, gelten heute als gescheitert. XML und einige XML-Dialekte (SVG und HTML eingeschlossen) erfordern keine `DOCTYPE`-Deklaration. SVG 1.2 hat nicht einmal eine. Die Tatsache, dass `DOCTYPE`-Deklarationen (normalerweise) dem Inhalt in einheitlichen Inhaltstypdateien entsprechen, ist reiner Zufall. DTDs dienen nur der Validierung, nicht der Identifizierung von Inhalten. Jeder Benutzeragent, der XML-Inhalte mithilfe seiner `DOCTYPE`-Deklaration identifiziert, ist unzuverlässig.

Die wirkliche Antwort auf die Frage ist, dass XML-Inhalte dem Benutzeragenten mitteilen, zu welchem Dialekt die Elementnamen gehören, indem sie ihnen explizite "Namespace-Deklarationen" geben.

## Deklarieren von Namespaces

Wie sehen diese Namespace-Deklarationen also aus und wo kommen sie hin? Hier ist ein kurzes Beispiel.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- more tags here -->
</svg>
```

Die Namespace-Deklaration wird durch den `xmlns`-Parameter bereitgestellt. Dieser Parameter besagt, dass das `<svg>`-Element und seine untergeordneten Elemente zu dem XML-Dialekt gehören, der den Namespace-Namen `http://www.w3.org/2000/svg` hat, was natürlich SVG ist. Beachten Sie, dass die Namespace-Deklaration nur einmal auf einem Root-Element bereitgestellt wird (und impliziert ist, wenn sie weggelassen wird). Die Deklaration definiert den _Standard_-Namespace, sodass der Benutzeragent weiß, dass alle Nachkommen des `<svg>`-Elements auch zum selben Namespace gehören. Benutzeragenten prüfen, ob sie den Namespace-Namen erkennen, um festzustellen, ob sie wissen, wie sie das Markup handhaben können.

Beachten Sie, dass Namespace-Namen nur Zeichenfolgen sind, sodass die Tatsache, dass der SVG-Namespace-Name auch wie ein URI aussieht, nicht wichtig ist. URIs werden häufig verwendet, weil sie einzigartig sind, aber die Absicht ist nicht, "zu verlinken". (Tatsächlich werden URIs so häufig verwendet, dass der Begriff "Namespace-URI" häufig anstelle von "Namespace-Name" verwendet wird.)

### Neudeklarieren des Standard-Namespaces

Wenn alle Nachkommen des Wurzelelements auch im Standard-Namespace definiert sind, wie mischen Sie dann Inhalte aus einem anderen Namespace? Um den SVG-Namespace in HTML aufzunehmen, verwenden Sie `<svg>`. In XML deklarieren Sie einen Namespace. Hier ist ein kurzes Beispiel.

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

In diesem Beispiel erklärt das `xmlns`-Attribut auf dem Wurzel-`<report>`-Element den Standard-Namespace als `https://www.acme.org/reports`, oder `reports`. Infolgedessen werden es und alle seine Kindelemente vom Benutzeragenten als zu `reports` gehörig interpretiert, mit Ausnahme des `<content>`-Elements, das im Namespace `https://www.acme.org/tables`, oder `tables`, existiert. Das `<summary>`-Element hat seinen eigenen `xmlns`-Parameter, und durch die Neudeklaration des `reports`-Namespaces wird dem Benutzeragenten mitgeteilt, dass das `<summary>`-Element und seine Nachkommen (es sei denn, sie erklären ebenfalls einen alternativen Namespace) zu `reports` gehören.

Mit HTML ist `http://www.w3.org/1999/xhtml` der implizierte Namespace. Mit SVG ist es `http://www.w3.org/2000/svg`. MathML ist `http://www.w3.org/1998/Math/MathML`.

### Deklarieren von Namespace-Präfixen

XML-Dialekte definieren nicht nur ihre eigenen Elemente, sondern sie deklarieren auch ihre eigenen Parameter.

Standardmäßig haben Parameter überhaupt keinen Namespace. Sie sind nur als eindeutig bekannt, weil sie auf einem Element erscheinen, das selbst einen eindeutigen Namen hat. Allerdings ist es manchmal notwendig, Parameter so zu definieren, dass sie auf vielen verschiedenen Elementen wiederverwendet werden können und immer noch als derselbe Parameter angesehen werden, unabhängig von dem Element, mit dem sie verwendet werden. Ein sehr gutes Beispiel dafür ist der `href`-Parameter, der durch die {{Glossary("XLink", "XLink")}}-Spezifikation definiert ist. Dieser Parameter wird häufig von anderen XML-Dialekten als Mittel zum Verlinken auf externe Ressourcen verwendet. Aber wie teilen Sie dem Benutzeragenten mit, zu welchem Dialekt der Parameter gehört, in diesem Fall `XLink`? Betrachten Sie das folgende Beispiel.

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

Dieses Beispiel hat den etwas ungewöhnlich aussehenden Parameter `xmlns:xlink`. Wie Sie vielleicht aus dem ersten `xmlns`-Teil erraten können, handelt es sich hierbei um eine weitere Namespace-Deklaration. Statt jedoch den Standard-Namespace festzulegen, setzt diese Namespace-Deklaration den Namespace für etwas, das "[Namespace-Präfix](/de/docs/Web/API/CSSNamespaceRule/prefix)" genannt wird. In diesem Fall haben wir uns entschieden, das Präfix `xlink` zu verwenden (der zweite Teil), da das Präfix verwendet wird, um dem Benutzeragenten über Attribute zu informieren, die zu `XLink` gehören.

Wie der Name schon sagt, werden Namespace-Präfixe verwendet, um Parameter- und Elementnamen vorzusetzen. Dies erfolgt, indem das Namespace-Präfix und ein Doppelpunkt vor dem Parameternamen gesetzt werden, wie im `<script>`-Element im obigen Beispiel gezeigt. Dies teilt dem Benutzeragenten mit, dass der bestimmte Parameter zu dem Namespace gehört, der dem Namespace-Präfix zugewiesen ist (`XLink`), und ist ein Parameter, der mit derselben Bedeutung auf anderen Elementen verwendet werden kann.

Beachten Sie, dass es in XML ein XML-Fehler ist, ein Präfix zu verwenden, das nicht an einen Namespace-Namen gebunden wurde. Die Bindung, die durch den `xmlns:xlink`-Parameter im obigen Beispiel erstellt wurde, ist erforderlich, damit der `xlink:href`-Parameter keinen Fehler verursacht. Dieser XLink-Parameter wird auch häufig in SVG auf den `<a>`, `<use>` und `<image>`-Elementen unter anderem verwendet, daher ist es eine gute Idee, die XLink-Deklaration immer in Ihre Dokumente aufzunehmen.

Nebenbei bemerkt ist es nützlich zu wissen, dass Namespace-Präfixe auch für Elementnamen verwendet werden können. Dies teilt dem Benutzeragenten mit, dass das bestimmte Element (aber nicht seine Kinder dieses Mal!) zu dem Namespace gehört, der dem Präfix zugewiesen ist. Dies zu wissen, wird Ihnen einige Verwirrung ersparen, wenn Sie auf ein Markup wie im folgenden Beispiel stoßen:

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

Beachten Sie, dass es aufgrund eines Namespace-Präfixes für das `<svg:svg>`-Element und dessen Kind `<svg:circle>` nicht notwendig war, den Standard-Namespace erneut zu deklarieren. Im Allgemeinen ist es besser, den Standard-Namespace neu zu deklarieren, anstatt viele Elemente auf diese Weise zu prefixen.

## Skripterstellung in namespaced XML

Namespaces beeinflussen das Markup und Scripting ([und sogar CSS](/de/docs/Web/CSS/Guides/Namespaces)). Wenn Sie Skripte für namespaced XML wie SVG schreiben, lesen Sie weiter.

Die [DOM Level 1](https://www.w3.org/TR/DOM-Level-1/)-Empfehlung wurde vor der [originalen Namespaces in XML](https://www.w3.org/TR/xml-names/)-Empfehlung erstellt. Daher ist DOM1 nicht namespace-fähig. Dies verursacht Probleme für namespaced XML wie SVG. Um diese Probleme zu lösen, hat [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) namespace-fähige Äquivalente aller anwendbaren DOM Level 1-Methoden hinzugefügt. Beim Scripting von SVG ist es wichtig, die [namespace-fähigen Methoden](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations) zu verwenden. Die folgende Tabelle listet die DOM1-Methoden auf, die in SVG nicht verwendet werden sollten, zusammen mit ihren entsprechenden DOM2-Gegenstücken, die stattdessen verwendet werden sollten.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>DOM1 (nicht verwenden)</th>
      <th>DOM2 (benutze stattdessen diese!)</th>
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

Der erste Parameter für alle DOM2-Namespace-fähigen Methoden muss der Namespace-Name (auch bekannt als Namespace-URI) des betreffenden Elements oder Parameters sein. Bei SVG **Elementen** ist dies `http://www.w3.org/2000/svg`. Beachten Sie jedoch genau: Die Empfehlung [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting) besagt, dass der Namespace-Name für Parameter ohne Präfix keinen Wert hat. Mit anderen Worten, obwohl die Parameter zum Namespace des Elements gehören, verwenden Sie nicht den Namespace-Namen des Tags. Stattdessen **müssen Sie null als Namespace-Namen für unqualifizierte (prävixlose) Parameter verwenden**. Um also ein SVG `rect`-Element mit `document.createElementNS()` zu erstellen, müssen Sie schreiben:

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

Um jedoch den Wert des `x`-Parameters an einem SVG `rect`-Element abzurufen, müssen Sie schreiben:

```js
rect.getAttributeNS(null, "x");
```

Beachten Sie, dass dies nicht der Fall für Parameter _mit_ einem Namespace-Präfix ist (Parameter, die nicht zum selben XML-Dialekt wie das Element gehören). Parameter wie `xlink:href` erfordern den Namespace-Namen, der diesem Präfix zugewiesen wurde (`http://www.w3.org/1999/xlink` für XLink). Daher würden Sie, um den Wert des `xlink:href`-Parameters eines `<a>`-Elements in SVG zu erhalten, schreiben:

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

Für das Setzen von Parametern, die einen Namespace haben, wird empfohlen (aber nicht gefordert), dass Sie auch deren Präfix im zweiten Parameter einschließen, damit das DOM später leichter wieder in XML konvertiert werden kann (wenn beispielsweise Sie es zurück an den Server senden wollen). Zum Beispiel:

```js
elt.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "other-doc.svg",
);
```

Als abschließendes Beispiel finden Sie hier eine Demonstration, wie Sie ein `<image>`-Element dynamisch mit JavaScript erstellen könnten:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const XLINK_NS = "http://www.w3.org/1999/xlink";
const image = document.createElementNS(SVG_NS, "image");
image.setAttributeNS(null, "width", "100");
image.setAttributeNS(null, "height", "100");
image.setAttributeNS(XLINK_NS, "xlink:href", "flower.png");
```

## Fazit

Für SVG, HTML und MathML ist der Namespace impliziert und daher optional. Es ist erforderlich, den Namespace für XML-Dateien zu deklarieren. Wenn Sie dies nicht tun, erkennen Benutzeragenten den Inhalt nicht und zeigen entweder das XML-Markup an oder informieren den Benutzer, dass ein Fehler im XML vorliegt.

Beim Schreiben von SVG ist es hilfreich, eine Vorlage zu verwenden, die alle häufig verwendeten Namespace-Deklarationen enthält, wenn Sie neue Dateien erstellen. Wenn Sie noch keine haben, erstellen Sie eine mit dem folgenden Code:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

Selbst wenn Sie nicht alle diese Namespaces in einem bestimmten Dokument verwenden, ist es nicht schädlich, die Namespace-Deklarationen einzuschließen. Es könnte Ihnen einige nervige Fehler ersparen, wenn Sie später Inhalte aus einem der nicht verwendeten Namespaces hinzufügen.

## Ein vollständiges Beispiel

Für ein vollständiges Beispiel siehe [SVG: Namespaces Crash Course: Example](/de/docs/Web/SVG/Guides/Namespaces_crash_course/Example).
