---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM")}}

Die **`CSSStyleSheet`**-Schnittstelle repräsentiert ein einzelnes [CSS](/de/docs/Web/CSS)-Stylesheet und ermöglicht es Ihnen, die Liste der im Stylesheet enthaltenen Regeln zu inspizieren und zu modifizieren. Sie erbt Eigenschaften und Methoden von ihrem Elternteil, [`StyleSheet`](/de/docs/Web/API/StyleSheet).

{{InheritanceDiagram}}

Ein Stylesheet besteht aus einer Sammlung von [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekten, die jeweils eine der Regeln im Stylesheet repräsentieren. Die Regeln sind in einer [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) enthalten, die über die [`cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules)-Eigenschaft des Stylesheets abgerufen werden kann.

Ein Beispiel für eine Regel könnte ein [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)-Objekt mit einem Stil wie:

```css
h1,
h2 {
  font-size: 16pt;
}
```

Eine andere Regel könnte eine _at-rule_ wie {{cssxref("@import")}} oder {{cssxref("@media")}} sein, und so weiter.

Siehe den Abschnitt [Ein Stylesheet erhalten](#ein_stylesheet_erhalten) für die verschiedenen Möglichkeiten, ein `CSSStyleSheet`-Objekt zu erhalten. Ein `CSSStyleSheet`-Objekt kann auch direkt konstruiert werden. Der Konstruktor und die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) sind neuere Ergänzungen zur Spezifikation, die _konstruktionsfähige Stylesheets_ ermöglichen.

## Konstruktor

- [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
  - : Erstellt ein neues `CSSStyleSheet`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`StyleSheet`](/de/docs/Web/API/StyleSheet)._

- [`CSSStyleSheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) {{ReadOnlyInline}}

  - : Gibt eine Live-`CSSRuleList` zurück, die eine aktuelle Liste der `CSSRule`-Objekte enthält, die das Stylesheet bilden.

    > [!NOTE]
    > In einigen Browsern führt das Zugreifen auf `cssRules` zu einem `SecurityError`, wenn ein Stylesheet von einer anderen Domain geladen wird.

- [`CSSStyleSheet.ownerRule`](/de/docs/Web/API/CSSStyleSheet/ownerRule) {{ReadOnlyInline}}
  - : Wenn dieses Stylesheet mit einer {{cssxref("@import")}}-Regel in das Dokument importiert wird, gibt die Eigenschaft `ownerRule` die entsprechende [`CSSImportRule`](/de/docs/Web/API/CSSImportRule) zurück; andernfalls ist der Wert dieser Eigenschaft `null`.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`StyleSheet`](/de/docs/Web/API/StyleSheet)._

- [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule)
  - : Löscht die Regel am angegebenen Index in der Regel-Liste des Stylesheets.
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
  - : Fügt eine neue Regel an der angegebenen Position im Stylesheet ein, basierend auf der textuellen Darstellung der Regel.
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
  - : Ersetzt asynchron den Inhalt des Stylesheets und gibt ein {{jsxref("Promise")}} zurück, das mit dem aktualisierten `CSSStyleSheet` aufgelöst wird.
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
  - : Ersetzt den Inhalt des Stylesheets synchron.

## Veraltete Eigenschaften

_Diese Eigenschaften sind veraltete Eigenschaften, die von Microsoft eingeführt wurden; sie werden zur Kompatibilität mit bestehenden Sites beibehalten._

- [`rules`](/de/docs/Web/API/CSSStyleSheet/rules) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Die `rules`-Eigenschaft ist funktional identisch mit der Standard-`cssRules`-Eigenschaft; sie gibt eine Live-`CSSRuleList` zurück, die eine aktuelle Liste aller Regeln im Stylesheet enthält.

## Veraltete Methoden

_Diese Methoden sind veraltete Methoden, die von Microsoft eingeführt wurden; sie werden zur Kompatibilität mit bestehenden Sites beibehalten._

- [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) {{Deprecated_Inline}}

  - : Fügt eine neue Regel zum Stylesheet hinzu, basierend auf dem Selektor, auf den der Stil angewendet wird, und dem Stilblock, der auf die übereinstimmenden Elemente angewendet werden soll.

    Dies unterscheidet sich von [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule), das die textuelle Darstellung der gesamten Regel als einzelne Zeichenkette verwendet.

- [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) {{Deprecated_Inline}}
  - : Funktional identisch mit [`deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule); entfernt die Regel am angegebenen Index aus der Regel-Liste des Stylesheets.

## Ein Stylesheet erhalten

Ein Stylesheet ist mit höchstens einem [`Document`](/de/docs/Web/API/Document) assoziiert, auf das es angewendet wird (es sei denn, es ist [deaktiviert](/de/docs/Web/API/StyleSheet/disabled)). Eine Liste von `CSSStyleSheet`-Objekten für ein gegebenes Dokument kann mit der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Eigenschaft abgerufen werden. Ein spezifisches Stylesheet kann auch über sein _Besitzerobjekt_ (`Node` oder `CSSImportRule`), falls vorhanden, aufgerufen werden.

Ein `CSSStyleSheet`-Objekt wird automatisch von dem Browser erstellt und in die Liste des Dokuments, [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets), eingefügt, wenn ein Stylesheet für ein Dokument geladen wird.

Eine (möglicherweise unvollständige) Liste von Möglichkeiten, wie ein Stylesheet mit einem Dokument verknüpft werden kann, folgt:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">
        Grund, warum das Stylesheet mit dem Dokument verknüpft ist
      </th>
      <th scope="col">
        Erscheint in der <code>document.<br />styleSheets</code>-Liste
      </th>
      <th scope="col">
        Ermitteln des Besitzer-Elements/regel anhand des Stylesheet-Objekts
      </th>
      <th scope="col">Die Schnittstelle für das Besitzerobjekt</th>
      <th scope="col">Abrufen des CSSStyleSheet-Objekts vom Besitzer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{HTMLElement("style")}} und {{HTMLElement("link")}}
        Elemente im Dokument
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
        CSS {{cssxref("@import")}}-Regel in anderen auf das Dokument angewendeten Stylesheets
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
        <code>&#x3C;?xml-stylesheet ?></code> Verarbeitungsanweisung im
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
      <td>HTTP-Link-Header</td>
      <td>Ja</td>
      <td><em>N/A</em></td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>User-Agent (Standard)-Stylesheets</td>
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
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
