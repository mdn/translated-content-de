---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{APIRef("CSSOM")}}

Die **`CSSStyleSheet`**-Schnittstelle repräsentiert ein einzelnes [CSS](/de/docs/Web/CSS)-Stylesheet und ermöglicht es Ihnen, die Liste der im Stylesheet enthaltenen Regeln zu inspizieren und zu modifizieren. Sie erbt Eigenschaften und Methoden von ihrem Elternteil, [`StyleSheet`](/de/docs/Web/API/StyleSheet).

{{InheritanceDiagram}}

Ein Stylesheet besteht aus einer Sammlung von [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekten, die jede der Regeln im Stylesheet darstellen. Die Regeln sind in einer [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) enthalten, die über die `cssRules`-Eigenschaft des Stylesheets abgerufen werden kann.

Zum Beispiel könnte eine Regel ein [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)-Objekt sein, das einen Stil wie folgt enthält:

```css
h1,
h2 {
  font-size: 16pt;
}
```

Eine andere Regel könnte eine _at-rule_ wie {{cssxref("@import")}} oder {{cssxref("@media")}} sein und so weiter.

Siehe den Abschnitt [Abrufen eines StyleSheets](#abrufen_eines_stylesheets) für die verschiedenen Möglichkeiten, wie ein `CSSStyleSheet`-Objekt abgerufen werden kann. Ein `CSSStyleSheet`-Objekt kann auch direkt konstruiert werden. Der Konstruktor sowie die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) sind neuere Ergänzungen zur Spezifikation und ermöglichen _konstruierbare Stylesheets_.

## Konstruktor

- [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
  - : Erstellt ein neues `CSSStyleSheet`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`StyleSheet`](/de/docs/Web/API/StyleSheet)._

- [`CSSStyleSheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) {{ReadOnlyInline}}

  - : Gibt eine Live-`CSSRuleList` zurück, die eine aktuelle Liste der `CSSRule`-Objekte enthält, die das Stylesheet bilden.

    > [!NOTE]
    > In einigen Browsern führt der Zugriff auf `cssRules` zu einem `SecurityError`, wenn ein Stylesheet von einer anderen Domäne geladen wird.

- [`CSSStyleSheet.ownerRule`](/de/docs/Web/API/CSSStyleSheet/ownerRule) {{ReadOnlyInline}}
  - : Wenn dieses Stylesheet mit einer {{cssxref("@import")}}-Regel in das Dokument importiert wird, gibt die `ownerRule`-Eigenschaft die entsprechende [`CSSImportRule`](/de/docs/Web/API/CSSImportRule) zurück; andernfalls ist der Wert dieser Eigenschaft `null`.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`StyleSheet`](/de/docs/Web/API/StyleSheet)._

- [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule)
  - : Löscht die Regel an dem angegebenen Index in der Regel-Liste des Stylesheets.
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
  - : Fügt eine neue Regel an der angegebenen Position im Stylesheet ein, basierend auf der textuellen Darstellung der Regel.
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
  - : Ersetzt asynchron den Inhalt des Stylesheets und gibt ein {{jsxref("Promise")}} zurück, das mit dem aktualisierten `CSSStyleSheet` aufgelöst wird.
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
  - : Ersetzt synchron den Inhalt des Stylesheets.

## Veraltete Eigenschaften

_Diese Eigenschaften sind veraltete Eigenschaften, die von Microsoft eingeführt wurden und zur Kompatibilität mit bestehenden Websites beibehalten werden._

- [`rules`](/de/docs/Web/API/CSSStyleSheet/rules) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Die `rules`-Eigenschaft ist funktionell identisch mit der standardmäßigen `cssRules`-Eigenschaft; sie gibt eine Live-`CSSRuleList` zurück, die eine aktualisierte Liste aller Regeln im Stylesheet enthält.

## Veraltete Methoden

_Diese Methoden sind veraltete Methoden, die von Microsoft eingeführt wurden und zur Kompatibilität mit bestehenden Websites beibehalten werden._

- [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) {{Deprecated_Inline}}

  - : Fügt eine neue Regel zum Stylesheet hinzu, basierend auf dem Selektor, auf den der Stil angewendet wird, und dem Stilblock, der auf die übereinstimmenden Elemente anzuwenden ist.

    Dies unterscheidet sich von [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule), welches die textuelle Darstellung der gesamten Regel als einzelne Zeichenkette erfordert.

- [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) {{Deprecated_Inline}}
  - : Funktionell identisch mit [`deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule); entfernt die Regel an dem angegebenen Index aus der Regel-Liste des Stylesheets.

## Abrufen eines StyleSheets

Ein Stylesheet ist mit maximal einem [`Document`](/de/docs/Web/API/Document) verknüpft, auf das es angewendet wird (es sei denn, [disabled](/de/docs/Web/API/StyleSheet/disabled)). Eine Liste von `CSSStyleSheet`-Objekten für ein bestimmtes Dokument kann über die [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Eigenschaft abgerufen werden. Ein spezifisches Stylesheet kann auch von seinem _Owner_-Objekt (`Node` oder `CSSImportRule`), falls zutreffend, abgerufen werden.

Ein `CSSStyleSheet`-Objekt wird automatisch vom Browser erstellt und in die Liste der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) eines Dokuments eingefügt, wenn ein Stylesheet für ein Dokument geladen wird.

Eine (möglicherweise unvollständige) Liste der Wege, wie ein Stylesheet mit einem Dokument verknüpft werden kann, folgt:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">
        Grund für die Verknüpfung des Stylesheets mit dem Dokument
      </th>
      <th scope="col">
        Erscheint in <code>document.<br />styleSheets</code>-Liste
      </th>
      <th scope="col">
        Ermittelt das Eigentümer-Element/die Regel für das Stylesheet-Objekt
      </th>
      <th scope="col">Die Schnittstelle für das Eigentümer-Objekt</th>
      <th scope="col">Ermittelt das CSSStyleSheet-Objekt vom Eigentümer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{HTMLElement("style")}} und {{HTMLElement("link")}}
        -Elemente im Dokument
      </td>
      <td>Ja</td>
      <td>[`.ownerNode`](/de/docs/Web/API/StyleSheet/ownerNode)</td>
      <td>
        [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement),<br />[`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement),<br />oder
        [`SVGStyleElement`](/de/docs/Web/API/SVGStyleElement)
      </td>
      <td>
        [`HTMLLinkElement.sheet`](/de/docs/Web/API/HTMLLinkElement/sheet),<br />[`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet),<br />oder
        [`SVGStyleElement.sheet`](/de/docs/Web/API/SVGStyleElement/sheet)
      </td>
    </tr>
    <tr>
      <td>
        CSS {{cssxref("@import")}}-Regel in anderen Stylesheets, die auf
        das Dokument angewendet werden
      </td>
      <td>Ja</td>
      <td>
        [`.ownerRule`](/de/docs/Web/API/CSSStyleSheet/ownerRule)
      </td>
      <td>[`CSSImportRule`](/de/docs/Web/API/CSSImportRule)</td>
      <td>
        [`.styleSheet`](/de/docs/Web/API/CSSImportRule/styleSheet)
      </td>
    </tr>
    <tr>
      <td>
        <code>&#x3C;?xml-stylesheet ?></code>-Verarbeitungsanweisung im
        (nicht-HTML) Dokument
      </td>
      <td>Ja</td>
      <td>[`.ownerNode`](/de/docs/Web/API/StyleSheet/ownerNode)</td>
      <td>[`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)</td>
      <td>
        [`.sheet`](/de/docs/Web/API/ProcessingInstruction/sheet)
      </td>
    </tr>
    <tr>
      <td>
        JavaScript <a href="/de/docs/Web/JavaScript/Reference/Statements/import/with"><code>import ... with { type: "css" }</code></a>
      </td>
      <td>Nein</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>HTTP Link-Header</td>
      <td>Ja</td>
      <td><em>N/A</em></td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>User-Agent (Standard) Stylesheets</td>
      <td>Nein</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung von dynamischen Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
