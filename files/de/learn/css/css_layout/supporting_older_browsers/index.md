---
title: Unterstützung älterer Browser
slug: Learn/CSS/CSS_layout/Supporting_Older_Browsers
l10n:
  sourceCommit: 11bc346854854636796fe7fb9274ed2c094dcf53
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}

Besucher Ihrer Website können Benutzer sein, die entweder ältere Browser verwenden oder Browser nutzen, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiges Szenario im Internet, da kontinuierlich neue Funktionen zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung dieser Funktionen, weil verschiedene Browser dazu neigen, unterschiedliche Funktionen zuerst zu implementieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken nutzen können, um sicherzustellen, dass Ihre Website auch für Benutzer mit älterer Technologie zugänglich bleibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">Styling-Boxen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Sie Unterstützung für Ihre Layouts in älteren Browsern bereitstellen können, die möglicherweise die von Ihnen verwendeten Funktionen nicht unterstützen.
      </td>
    </tr>
  </tbody>
</table>

## Wie sieht die Browserlandschaft für Ihre Website aus?

Jede Website unterscheidet sich in Bezug auf ihr Zielpublikum. Bevor Sie sich für einen Ansatz entscheiden, sollten Sie herausfinden, wie viele Besucher Ihre Website mit älteren Browsern besuchen. Dies ist unkompliziert, wenn Sie eine bestehende Website ergänzen oder ersetzen, da Sie wahrscheinlich Analysen zur Verfügung haben, die Ihnen die Technologie Ihrer Besucher zeigen. Wenn Sie keine Analysen haben oder eine völlig neue Website starten, können Websites wie [Statcounter](https://gs.statcounter.com/) relevante Statistiken bereitstellen, die nach Standort gefiltert werden können.

Sie sollten auch die Art der Geräte und die Art und Weise, wie Menschen Ihre Website nutzen, berücksichtigen. Zum Beispiel können Sie mit einer überdurchschnittlichen Nutzung Ihrer Website auf mobilen Geräten rechnen. Legen Sie immer Wert auf Barrierefreiheit und Benutzer, die unterstützende Technologie verwenden; für einige Websites kann dies noch entscheidender sein. Entwickler machen sich oft große Sorgen über das Erlebnis von 1% der Benutzer, während sie die weit größere Zahl übersehen, die Barrierefreiheit benötigt.

## Wie ist die Unterstützung für die von Ihnen gewünschten Funktionen?

{{Compat}}

Die obige Tabelle ist am Ende jeder Feature-Seite unter der Rubrik "Browser-Kompatibilität" enthalten. Nachdem Sie die von Ihren Website-Besuchern genutzten Browser identifiziert haben, können Sie die von Ihnen eingesetzte Technologie anhand ihrer Unterstützung in verschiedenen Browsern bewerten und wie leicht Sie eine Alternative für Besucher bereitstellen können, die diese Technologie nicht zur Verfügung haben.

Auf MDN bieten wir Informationen zur Browser-Kompatibilität auf jeder CSS-Eigenschaftsseite. Diese Kompatibilitätsinformationen, dargestellt in einer Tabelle, enthalten eine Liste der wichtigsten Browser sowie die Versionen, in denen die Unterstützung der Eigenschaft begann. Die Browser-Namen stehen in den Spaltenüberschriften. Beispielsweise werfen Sie einen Blick auf die oben genannte Tabelle oder die Seite für {{cssxref("grid-template-columns")}}, mit besonderem Augenmerk auf die `subgrid` (zuletzt unterstützte) und `masonry` (experimentelle und nicht unterstützte) Werte.

Diese Browser-Kompatibilitätstabellen bieten Informationen darüber, welche Browser mit der Technik kompatibel sind, die Sie suchen, und ab welcher Version der Browser diese Funktionalität unterstützt. Informationen zur Kompatibilität von Browsern und mobilen Browsern werden getrennt angezeigt.

Eine weitere beliebte Möglichkeit, um herauszufinden, wie gut eine Funktion unterstützt wird, ist die Website [Can I Use](https://caniuse.com/). Diese Seite listet die Mehrzahl der Webplattform-Funktionen auf und bietet Informationen über ihren Browserunterstützungsstatus. Sie können Nutzungsstatistiken nach Standort anzeigen lassen – nützlich, wenn Sie an einer Website arbeiten, die hauptsächlich in einem bestimmten Bereich der Welt Benutzer hat. Sie können sogar Ihr Google Analytics-Konto verlinken, um eine Analyse basierend auf Ihren Benutzerdaten zu erhalten.

Das Verständnis der Technologie, die Ihre Benutzer aufgrund des von ihnen verwendeten Browsers haben, und die Unterstützung durch verschiedene Browser für Funktionen, die Sie auf Ihrer Website verwenden möchten, versetzt Sie in eine gute Position, um alle Ihre Entscheidungen zu treffen und zu wissen, wie Sie alle Ihre Benutzer am besten unterstützen.

## Funktionsunterstützung bedeutet nicht identisches Aussehen

Eine Website kann nicht in allen Browsern gleich aussehen. Einige Ihrer Benutzer werden die Seite auf einem Telefon betrachten und andere auf einem großen Desktop-Bildschirm. Ebenso werden einige Ihrer Benutzer eine alte Browserversion haben, und andere den neuesten Browser. Einige Ihrer Benutzer könnten Ihre Inhalte von einem Bildschirmleser vorgelesen bekommen, während andere die Seite vergrößern müssen, um sie lesen zu können. Jeder zu unterstützen bedeutet, eine Version Ihres Inhalts bereitzustellen, die defensiv gestaltet ist, sodass sie auf modernen Browsern großartig aussieht, aber auf einem grundlegenden Niveau für alle Benutzer benutzbar bleibt, unabhängig davon, wie sie auf Ihren Inhalt zugreifen.

Ein grundlegendes Maß an Unterstützung ergibt sich aus einer guten Strukturierung Ihres Inhalts, sodass der normale Fluss Ihrer Seite Sinn ergibt. Für Benutzer mit einem eingeschränkten Datentarif könnten ihre Browser keine Bilder, Schriften oder sogar Ihr CSS laden. Der Inhalt sollte jedoch so präsentiert werden, dass er zugänglich und lesbar ist, selbst wenn diese Elemente nicht vollständig geladen sind. Ein gut strukturiertes HTML-Dokument sollte immer Ihr Ausgangspunkt sein. Fragen Sie sich selbst: _Macht Ihr Inhalt immer noch Sinn, wenn Sie Ihre Stylesheet entfernen?_

Es macht wirtschaftlich keinen Sinn, Zeit damit zu verbringen, jedem ein identisches Erlebnis Ihrer Website zu bieten. Dies liegt daran, dass sich Benutzerumgebungen stark unterscheiden können und Ihrer Kontrolle entzogen sind. Es gibt ein Gleichgewicht, das Sie zwischen einer einfachen HTML-Seite und einer voll ausgestatteten Website finden müssen. Es ist hilfreich, einen einfachen, CSS-losen Blick auf Ihre Seite zu testen, um sicherzustellen, dass die Fallback-Erfahrung Ihrer Seite zugänglich ist. Dieser Fallback wird möglicherweise nie von Benutzern sehr alter oder eingeschränkter Browser gesehen, könnte jedoch von Ihrem Hauptzielpublikum – Benutzern moderner Browser – angesehen werden, wenn ihr Browser oder ihre Internetverbindung vorübergehend ausfällt. CSS vereinfacht die Erstellung dieser Fallbacks. Es ist daher besser, sich auf das zu konzentrieren, was Sie kontrollieren können, das heißt, verbringen Sie die Zeit, um Ihre Website [zugänglich](/de/docs/Web/Accessibility) zu machen und damit mehr Benutzer zu erreichen.

## Erstellen von Fallbacks in CSS

CSS-Spezifikationen enthalten Informationen, die erklären, was der Browser tut, wenn zwei ähnliche Funktionen, wie Layout-Methoden, auf dasselbe Element angewendet werden. Zum Beispiel definieren sie, was passiert, wenn ein Element gefloatet ist und zugleich ein Grid-Element in einem CSS-Grid-Container ist. Es gibt auch eine Definition für das Verhalten, wenn ein Element sowohl die Eigenschaften {{cssxref("margin-top")}} als auch {{cssxref("margin-block-start")}} gesetzt hat.

Wenn ein Browser eine neue Funktion nicht erkennt, verwirft er die Deklaration als ungültig [ohne einen Fehler auszulösen](/de/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors). Da Browser CSS-Eigenschaften und -Werte, die sie nicht unterstützen, verwerfen, können alte und neue Werte im selben Regelset koexistieren. Stellen Sie einfach sicher, dass der alte Wert vor dem neuen Wert deklariert wird, damit der neue Wert, wenn er unterstützt wird, den alten Wert überschreibt (das Fallback).

Zum Beispiel unterstützen die meisten Browser die Zwei-Wert-Syntax der {{cssxref("display")}}-Eigenschaft. Wenn ein Browser sie nicht unterstützt, verwendet er die ältere Ein-Wert-Syntax.

```css
.container {
  display: inline-flex;
  display: inline flex;
}
```

Ähnlich sorgt dieses [Fehler-Handling](/de/docs/Web/CSS/CSS_syntax/Error_handling#vendor_prefixes) dafür, dass alte CSS-Codebasen weiterhin funktionieren, selbst wenn Legacy-[Vendor-Präfixe](/de/docs/Glossary/Vendor_Prefix) nicht mehr unterstützt werden. Obwohl Vendor-Präfixe nicht mehr häufig verwendet werden, stellen Sie sicher, dass, wenn Sie ein Vendor-präfixiertes Attribut oder einen Wert einschließen müssen, der präfixierte Wert vor dem Standardwert deklariert wird, damit der neue Wert, wenn er unterstützt wird, den Fallback-Wert überschreibt.

### Verwendung neuer Selektoren

Das Einfügen neuer Selektoren, die nicht in allen Browsern unterstützt werden, muss sorgfältiger behandelt werden. Wenn ein Selektor in einer durch Kommata getrennten Liste von [Selektoren ungültig](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#selector_support) ist, wird der gesamte Stilblock ignoriert.

Wenn Sie Vendor-präfixierte [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) oder neue [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) verwenden, die ein Browser möglicherweise noch nicht unterstützt, schließen Sie die präfixierten Werte in einer [schonenden Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) ein, indem Sie {{cssxref(":is", ":is()")}} oder {{cssxref(":where", ":where()")}} verwenden, damit der gesamte Selektorblock nicht [ungültig wird und ignoriert](/de/docs/Web/CSS/Selector_list#invalid_selector_list) wird.

```css
:is(:-prefix-mistake, :unsupported-pseudo),
.valid {
  font-family: sans-serif;
}
:-prefix-mistake,
:unsupported-pseudo,
.valid {
  color: red;
}
```

Im obigen Beispiel werden die `.valid`-Inhalte `sans-serif` aber nicht `rot` sein.

## Feature-Abfragen

Feature-Abfragen ermöglichen es Ihnen zu testen, ob ein Browser eine bestimmte CSS-Funktion unterstützt. Das bedeutet, dass Sie CSS für Browser schreiben können, die eine bestimmte Funktion nicht unterstützen, dann überprüfen, ob der Browser Unterstützung hat, und falls ja, können Sie Ihre neuen Funktionen einfügen.

Wir können eine Feature-Abfrage hinzufügen, um die Unterstützung für `subgrid` zu testen und Stile basierend auf dieser Unterstützung bereitzustellen:

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: palegoldenrod;
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.item {
  border-radius: 5px;
  background-color: rgb(207 232 220);
}

@supports (grid-template-rows: subgrid) {
  .wrapper {
    grid-template-rows: subgrid;
    gap: 10px;
    background-color: lightblue;
    text-align: center;
  }
}
```

```html
<div class="wrapper">
  <div class="item">Item One</div>
  <div class="item">Item Two</div>
  <div class="item">Item Three</div>
  <div class="item">Item Four</div>
  <div class="item">Item Five</div>
  <div class="item">Item Six</div>
</div>
```

{{ EmbedLiveSample('Feature_queries', '100%', '200') }}

Feature-Abfragen werden in allen modernen Browsern unterstützt. Schreiben Sie Ihr CSS für vollständig unterstützte Funktionen zuerst, außerhalb von Feature-Abfragen. Sobald Ihre Website für alle Benutzer nutzbar und zugänglich ist, fügen Sie neue Funktionen innerhalb von Feature-Abfrageblöcken hinzu. Browser, die die abgefragte Funktion unterstützen, können dann das neuere CSS innerhalb des Feature-Abfrageblocks rendern. Verwenden Sie den Ansatz, gut unterstütztes CSS zuerst zu schreiben und dann Funktionen basierend auf der Unterstützung zu verbessern.

## Testen älterer Browser

Eine Möglichkeit besteht darin, ein Online-Test-Tool wie Sauce Labs zu verwenden, wie im Modul [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) beschrieben.

## Zusammenfassung

Sie haben nun das Wissen, um Fallback-CSS für ältere Browser bereitzustellen und sicher neue Funktionen zu testen. Sie sollten sich jetzt sicher fühlen, alle neuen Techniken, die möglicherweise aufkommen, zu nutzen.

Nachdem Sie nun unsere Artikel über CSS-Layout durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu testen: [Fundamentales Layout-Verständnis](/de/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension).

## Siehe auch

- [`@supports`](/de/docs/Web/CSS/@supports) Regel
- [CSS-Regeln](/de/docs/Web/CSS/At-rule)
- [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}
