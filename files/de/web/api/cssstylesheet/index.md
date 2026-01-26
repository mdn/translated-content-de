---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
l10n:
  sourceCommit: dfc2f2fe483e5aaac785cc8d32064b925667aed2
---

{{APIRef("CSSOM")}}

Die **`CSSStyleSheet`** Schnittstelle repräsentiert ein einzelnes [CSS](/de/docs/Web/CSS) Stylesheet und ermöglicht es Ihnen, die Liste der in dem Stylesheet enthaltenen Regeln zu inspizieren und zu ändern. Sie erbt Eigenschaften und Methoden von ihrem Elternobjekt, [`StyleSheet`](/de/docs/Web/API/StyleSheet).

{{InheritanceDiagram}}

Ein Stylesheet besteht aus einer Sammlung von [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekten, die jeweils eine der Regeln im Stylesheet repräsentieren. Die Regeln sind in einer [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) enthalten, die aus der `cssRules`-Eigenschaft des Stylesheets abgerufen werden kann.

Zum Beispiel könnte eine Regel ein [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)-Objekt sein, das einen Stil wie folgt enthält:

```css
h1,
h2 {
  font-size: 16pt;
}
```

Eine andere Regel könnte eine _at-rule_ wie {{cssxref("@import")}} oder {{cssxref("@media")}} sein, und so weiter.

Sehen Sie sich den Abschnitt [Ein Stylesheet erlangen](#ein_stylesheet_erlangen) an, um die verschiedenen Möglichkeiten zu erfahren, wie ein `CSSStyleSheet`-Objekt erlangt werden kann. Ein `CSSStyleSheet`-Objekt kann auch direkt erstellt werden. Der Konstruktor sowie die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) sind neuere Ergänzungen zur Spezifikation, die _konstruktierbare Stylesheets_ ermöglichen.

Um ein `CSSStyleSheet` auf ein Dokument oder eine Shadow-Root anzuwenden, weisen Sie es der [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) oder [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)-Eigenschaft zu.

## Konstruktor

- [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
  - : Erstellt ein neues `CSSStyleSheet`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternobjekt, [`StyleSheet`](/de/docs/Web/API/StyleSheet)._

- [`CSSStyleSheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) {{ReadOnlyInline}}
  - : Gibt eine live [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die eine aktuelle Liste der [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekte enthält, aus der das Stylesheet besteht.

    > [!NOTE]
    > In einigen Browsern führt der Zugriff auf `cssRules` zu einem `SecurityError`, wenn ein Stylesheet von einer anderen Domain geladen wird.

- [`CSSStyleSheet.ownerRule`](/de/docs/Web/API/CSSStyleSheet/ownerRule) {{ReadOnlyInline}}
  - : Wenn dieses Stylesheet über eine {{cssxref("@import")}}-Regel in das Dokument importiert wird, gibt die `ownerRule`-Eigenschaft die entsprechende [`CSSImportRule`](/de/docs/Web/API/CSSImportRule) zurück; andernfalls ist der Wert dieser Eigenschaft `null`.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternobjekt, [`StyleSheet`](/de/docs/Web/API/StyleSheet)._

- [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule)
  - : Löscht die Regel an dem angegebenen Index in der Regel-Liste des Stylesheets.
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
  - : Fügt eine neue Regel an der angegebenen Position im Stylesheet ein, wobei die textliche Darstellung der Regel angegeben wird.
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
  - : Ersetzt asynchron den Inhalt des Stylesheets und gibt einen {{jsxref("Promise")}} zurück, der sich mit dem aktualisierten `CSSStyleSheet` auflöst.
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
  - : Ersetzt synchron den Inhalt des Stylesheets.

## Veraltete Eigenschaften

_Diese Eigenschaften sind veraltete Eigenschaften, die von Microsoft eingeführt wurden; sie werden zur Kompatibilität mit bestehenden Webseiten beibehalten._

- [`rules`](/de/docs/Web/API/CSSStyleSheet/rules) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Die `rules`-Eigenschaft ist funktional identisch mit der Standard-`cssRules`-Eigenschaft; sie gibt eine live [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die eine aktuelle Liste aller Regeln im Stylesheet beibehält.

## Veraltete Methoden

_Diese Methoden sind veraltete Methoden, die von Microsoft eingeführt wurden; sie werden zur Kompatibilität mit bestehenden Webseiten beibehalten._

- [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) {{Deprecated_Inline}}
  - : Fügt eine neue Regel zum Stylesheet hinzu, basierend auf dem Selektor, auf den der Stil angewendet werden soll, und dem Stilblock, der auf die passenden Elemente angewendet werden soll.

    Dies unterscheidet sich von [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule), das die textliche Darstellung der gesamten Regel als einen einzigen String nimmt.

- [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) {{Deprecated_Inline}}
  - : Funktional identisch zu [`deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule); entfernt die Regel an dem angegebenen Index aus der Regel-Liste des Stylesheets.

## Ein Stylesheet erlangen

Ein Stylesheet ist mit höchstens einem [`Document`](/de/docs/Web/API/Document) verknüpft, auf das es angewendet wird (es sei denn, es ist [deaktiviert](/de/docs/Web/API/StyleSheet/disabled)). Eine Liste von `CSSStyleSheet`-Objekten für ein gegebenes Dokument kann mit der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Eigenschaft abgerufen werden. Ein bestimmtes Stylesheet kann auch über sein _Eigentümer_-Objekt (`Node` oder `CSSImportRule`), falls vorhanden, zugegriffen werden.

Ein `CSSStyleSheet`-Objekt wird automatisch vom Browser erstellt und in die [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Liste des Dokuments eingefügt, wenn ein Stylesheet für ein Dokument geladen wird.

Eine (möglicherweise unvollständige) Liste von Möglichkeiten, wie ein Stylesheet mit einem Dokument verknüpft werden kann, folgt:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">
        Grund, warum das Stylesheet mit dem Dokument verknüpft ist
      </th>
      <th scope="col">
        Erscheint in <code>document.<br />styleSheets</code>-Liste
      </th>
      <th scope="col">
        Den Eigentümer-Element/Regel aus dem Stylesheet-Objekt ermitteln
      </th>
      <th scope="col">Das Interface für das Eigentümerobjekt</th>
      <th scope="col">Das CSSStyleSheet-Objekt aus dem Eigentümer erhalten</th>
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
        (nicht-HTML-) Dokument
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
      <td><em>N/V</em></td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Benutzeragent (Standard-) Stylesheets</td>
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

- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
