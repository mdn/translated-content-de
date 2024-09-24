---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{APIRef("CSSOM")}}

Das **`CSSStyleSheet`**-Interface repräsentiert ein einzelnes [CSS](/de/docs/Web/CSS)-Stylesheet und ermöglicht Ihnen, die Liste der im Stylesheet enthaltenen Regeln zu inspizieren und zu modifizieren. Es erbt Eigenschaften und Methoden von seinem Elternteil, {{domxref("StyleSheet")}}.

{{InheritanceDiagram}}

Ein Stylesheet besteht aus einer Sammlung von {{domxref("CSSRule")}}-Objekten, die jeweils eine Regel im Stylesheet darstellen. Die Regeln sind in einer {{domxref("CSSRuleList")}} enthalten, die über die {{domxref("CSSStyleSheet.cssRules", "cssRules")}}-Eigenschaft des Stylesheets abgerufen werden kann.

Zum Beispiel könnte eine Regel ein {{domxref("CSSStyleRule")}}-Objekt sein, das einen Stil wie folgt enthält:

```css
h1,
h2 {
  font-size: 16pt;
}
```

Eine andere Regel könnte eine _at-rule_ sein, wie {{cssxref("@import")}} oder {{cssxref("@media")}}, und so weiter.

Siehe den Abschnitt [Ein Stylesheet erhalten](#ein_stylesheet_erhalten) für die verschiedenen Möglichkeiten, wie ein `CSSStyleSheet`-Objekt abgerufen werden kann. Ein `CSSStyleSheet`-Objekt kann auch direkt konstruiert werden. Der Konstruktor sowie die Methoden {{domxref("CSSStyleSheet.replace()")}} und {{domxref("CSSStyleSheet.replaceSync()")}} sind neuere Ergänzungen zur Spezifikation und ermöglichen _Konstruktive Stylesheets_.

## Konstruktor

- {{domxref("CSSStyleSheet.CSSStyleSheet()", "CSSStyleSheet()")}}
  - : Erstellt ein neues `CSSStyleSheet`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("StyleSheet")}}._

- {{domxref("CSSStyleSheet.cssRules")}} {{ReadOnlyInline}}

  - : Gibt eine live {{domxref("CSSRuleList")}} zurück, die eine aktuelle Liste der {{domxref("CSSRule")}}-Objekte in dem Stylesheet enthält.

    > [!NOTE]
    > In einigen Browsern führt der Zugriff auf `cssRules` zu einem `SecurityError`, wenn ein Stylesheet von einer anderen Domain geladen wird.

- {{domxref("CSSStyleSheet.ownerRule")}} {{ReadOnlyInline}}
  - : Wenn dieses Stylesheet mit einer {{cssxref("@import")}}-Regel in das Dokument importiert wird, gibt die `ownerRule`-Eigenschaft die entsprechende {{domxref("CSSImportRule")}} zurück; andernfalls ist der Wert dieser Eigenschaft `null`.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{domxref("StyleSheet")}}._

- {{domxref("CSSStyleSheet.deleteRule()")}}
  - : Löscht die Regel am angegebenen Index in der Regel-Liste des Stylesheets.
- {{domxref("CSSStyleSheet.insertRule()")}}
  - : Fügt eine neue Regel an der angegebenen Position im Stylesheet ein, basierend auf der textuellen Darstellung der Regel.
- {{domxref("CSSStyleSheet.replace()")}}
  - : Ersetzt asynchron den Inhalt des Stylesheets und gibt ein {{jsxref("Promise")}} zurück, das mit dem aktualisierten `CSSStyleSheet` aufgelöst wird.
- {{domxref("CSSStyleSheet.replaceSync()")}}
  - : Ersetzt synchron den Inhalt des Stylesheets.

## Veraltete Eigenschaften

_Diese Eigenschaften sind veraltete Eigenschaften, die von Microsoft eingeführt wurden; sie werden zur Kompatibilität mit bestehenden Sites beibehalten._

- {{domxref("CSSStyleSheet.rules", "rules")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Die `rules`-Eigenschaft ist funktional identisch mit der standardmäßigen {{domxref("CSSStyleSheet.cssRules", "cssRules")}}-Eigenschaft; sie gibt eine live {{domxref("CSSRuleList")}} zurück, die eine aktuelle Liste aller Regeln im Stylesheet enthält.

## Veraltete Methoden

_Diese Methoden sind veraltete Methoden, die von Microsoft eingeführt wurden; sie werden zur Kompatibilität mit bestehenden Sites beibehalten._

- {{domxref("CSSStyleSheet.addRule", "addRule()")}} {{Deprecated_Inline}}

  - : Fügt dem Stylesheet eine neue Regel hinzu, basierend auf dem Selektor, auf den der Stil angewendet wird, und dem Stilblock, der auf die übereinstimmenden Elemente angewendet werden soll.

    Dies unterscheidet sich von {{domxref("CSSStyleSheet.insertRule", "insertRule()")}}, das die textuelle Darstellung der gesamten Regel als einzelnen String benötigt.

- {{domxref("CSSStyleSheet.removeRule", "removeRule()")}} {{Deprecated_Inline}}
  - : Funktional identisch mit {{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}}; entfernt die Regel am angegebenen Index aus der Regel-Liste des Stylesheets.

## Ein Stylesheet erhalten

Ein Stylesheet ist mit höchstens einem {{domxref("Document")}} verbunden, auf das es angewendet wird (es sei denn, es ist {{domxref("StyleSheet.disabled", "disabled", "", 1)}}). Eine Liste der `CSSStyleSheet`-Objekte für ein bestimmtes Dokument kann über die {{domxref("Document.styleSheets")}}-Eigenschaft abgerufen werden. Ein bestimmtes Stylesheet kann auch über sein _owner_-Objekt (`Node` oder `CSSImportRule`), falls vorhanden, abgerufen werden.

Ein `CSSStyleSheet`-Objekt wird vom Browser automatisch erstellt und in die {{domxref("Document.styleSheets")}}-Liste des Dokuments eingefügt, wenn ein Stylesheet für ein Dokument geladen wird.

Eine (möglicherweise unvollständige) Liste der Möglichkeiten, wie ein Stylesheet mit einem Dokument verknüpft werden kann, folgt:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">
        Grund für die Verknüpfung des Stylesheets mit dem Dokument
      </th>
      <th scope="col">
        Erscheint in <code>document.<br />styleSheets</code> Liste
      </th>
      <th scope="col">
        Erhalten des Eigentümerelements/Regel für das Stylesheet-Objekt
      </th>
      <th scope="col">Das Interface für das Eigentümerobjekt</th>
      <th scope="col">Erhalten des CSSStyleSheet-Objekts vom Eigentümer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{HTMLElement("style")}} und {{HTMLElement("link")}}
        Elemente im Dokument
      </td>
      <td>Ja</td>
      <td>{{domxref("StyleSheet.ownerNode", ".ownerNode")}}</td>
      <td>
        {{domxref("HTMLLinkElement")}},<br />{{domxref("HTMLStyleElement")}},<br />oder
        {{domxref("SVGStyleElement")}}
      </td>
      <td>
        {{domxref("HTMLLinkElement.sheet")}},<br />{{domxref("HTMLStyleElement.sheet")}},<br />oder
        {{domxref("SVGStyleElement.sheet")}}
      </td>
    </tr>
    <tr>
      <td>
        CSS {{cssxref("@import")}}-Regel in anderen Stylesheets, die auf
        das Dokument angewendet werden
      </td>
      <td>Ja</td>
      <td>
        {{domxref("CSSStyleSheet.ownerRule", ".ownerRule")}}
      </td>
      <td>{{domxref("CSSImportRule")}}</td>
      <td>
        {{domxref("CSSImportRule.styleSheet", ".styleSheet")}}
      </td>
    </tr>
    <tr>
      <td>
        <code>&#x3C;?xml-stylesheet ?></code>-Verarbeitungshinweis im
        (nicht-HTML-)Dokument
      </td>
      <td>Ja</td>
      <td>{{domxref("StyleSheet.ownerNode", ".ownerNode")}}</td>
      <td>{{domxref("ProcessingInstruction")}}</td>
      <td>
        {{domxref("ProcessingInstruction.sheet", ".sheet")}}
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
      <td>User-Agent (Standard-)Stylesheets</td>
      <td>Nein</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung dynamischer Stilinformations](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
