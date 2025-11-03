---
title: Unterstützung älterer Browser
slug: Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Besucher Ihrer Website könnten Nutzer sein, die entweder ältere Browser verwenden oder Browser nutzen, die die CSS-Funktionen, die Sie implementiert haben, nicht unterstützen. Dies ist ein häufiges Szenario im Web, wo ständig neue Funktionen zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung dieser Funktionen, da verschiedene Browser dazu neigen, unterschiedliche Funktionen zu priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken einsetzen können, um sicherzustellen, dass Ihre Website auch für Benutzer mit älterer Technologie zugänglich bleibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen in HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgebung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Sie Unterstützung für Layouts in älteren Browsern bieten können, die möglicherweise nicht die Funktionen unterstützen, die Sie verwenden möchten.
      </td>
    </tr>
  </tbody>
</table>

## Wie sieht die Browser-Landschaft für Ihre Seite aus?

Jede Website ist unterschiedlich in Bezug auf ihre Zielgruppe. Bevor Sie sich für eine Vorgehensweise entscheiden, finden Sie heraus, wie viele Besucher mit älteren Browsern auf Ihre Seite kommen. Dies ist unkompliziert, wenn Sie eine bestehende Website ergänzen oder ersetzen, da Sie wahrscheinlich Analysen zur Verfügung haben, die Ihnen sagen können, welche Technologie Ihre Besucher verwenden. Wenn Sie keine Analysen haben oder eine brandneue Seite starten, können Seiten wie [Statcounter](https://gs.statcounter.com/) relevante Statistiken liefern, die nach Standort gefiltert werden können.

Sie sollten auch den Gerätetyp und die Art und Weise berücksichtigen, wie Menschen Ihre Seite nutzen. Beispielsweise können Sie eine überdurchschnittlich hohe Nutzung Ihrer Website auf mobilen Geräten erwarten. Priorisieren Sie immer die Barrierefreiheit und Menschen, die unterstützende Technologien verwenden; für einige Seiten kann dies sogar noch wichtiger sein. Entwickler machen sich oft viele Sorgen um das Erlebnis von 1 % der Nutzer, während sie die weit größere Zahl übersehen, die Barrierefreiheit benötigt.

## Wie ist die Unterstützung für die Funktionen beschaffen, die Sie verwenden möchten?

{{Compat}}

Die obige Tabelle ist am Ende jeder Funktionsseite im Abschnitt "Browser-Kompatibilität" enthalten. Nachdem Sie die Browser identifiziert haben, die Ihre Seitenbesucher verwenden, können Sie jede Technologie, die Sie einsetzen möchten, hinsichtlich ihrer Unterstützung über verschiedene Browser hinweg beurteilen und wie leicht Sie eine Alternative für Besucher bereitstellen können, die diese Technologie nicht zur Verfügung haben.

Auf MDN bieten wir für jede CSS-Eigenschaftsseite Informationen zur Browser-Kompatibilität. Diese Kompatibilitätsinformationen, die in einer Tabelle präsentiert werden, umfassen eine Liste der Hauptbrowser sowie die Versionen, die damit begonnen haben, die Eigenschaft zu unterstützen. Die Browsernamen nehmen die Spaltenüberschriften ein. Beispielsweise schauen Sie sich die obige Tabelle oder die Seite für {{cssxref("grid-template-columns")}} an, mit besonderer Aufmerksamkeit auf die `subgrid`- (zuletzt unterstützt) und `masonry`-Werte (experimentell und nicht unterstützt).

Diese Tabellen zur Browser-Kompatibilität bieten Informationen darüber, welche Browser mit der Technologie kompatibel sind, die Sie suchen, und ab welcher Version der Browser diese Funktionalität unterstützt. Informationen zur Kompatibilität von Browsern und mobilen Browsern werden separat angezeigt.

Eine weitere beliebte Möglichkeit, um herauszufinden, wie gut eine Funktion unterstützt wird, ist die Website [Can I Use](https://caniuse.com/). Diese Seite listet die meisten Webplattform-Funktionen mit Informationen über ihren Unterstützungsstatus in Browserversionen auf. Sie können Nutzungsstatistiken nach Standort anzeigen — nützlich, wenn Sie an einer Seite arbeiten, die hauptsächlich Benutzer aus einem bestimmten Gebiet der Welt hat. Sie können sogar Ihr Google Analytics-Konto verknüpfen, um eine Analyse basierend auf Ihren Benutzerdaten zu erhalten.

Verständnis für die Technologie zu haben, die Ihre Benutzer aufgrund des verwendeten Browsers haben, sowie die browserübergreifende Unterstützung für Funktionen, die Sie möglicherweise auf Ihrer Website verwenden möchten, bringt Sie in eine gute Position, um alle Ihre Entscheidungen zu treffen und zu wissen, wie Sie alle Ihre Benutzer am besten unterstützen können.

## Funktionale Unterstützung bedeutet nicht identisches Erscheinungsbild

Eine Website kann nicht in allen Browsern gleich aussehen. Einige Ihrer Benutzer werden die Seite auf einem Telefon betrachten und andere auf einem großen Desktop-Bildschirm. Ebenso werden einige Ihrer Benutzer eine alte Browserversion haben und andere die neueste. Einige Ihrer Benutzer könnten Inhalte von einem Bildschirmleser vorgelesen bekommen, während andere möglicherweise auf die Seite zoomen müssen, um sie lesen zu können. Alle zu unterstützen bedeutet, eine Version Ihres Inhalts bereitzustellen, die defensiv gestaltet ist, sodass sie auf modernen Browsern großartig aussieht, aber auf einem grundlegenden Niveau für alle Benutzer nutzbar bleibt, egal wie sie auf Ihre Inhalte zugreifen.

Ein grundlegendes Maß an Unterstützung kommt von einer guten Strukturierung Ihrer Inhalte, sodass der normale Fluss Ihrer Seite Sinn ergibt. Für Benutzer mit einem begrenzten Datentarif laden ihre Browser möglicherweise keine Bilder, Schriftarten oder sogar Ihr CSS. Der Inhalt sollte jedoch in einer Weise präsentiert werden, dass er zugänglich und lesbar ist, selbst wenn diese Elemente nicht vollständig geladen sind. Ein gut strukturiertes HTML-Dokument sollte immer Ihr Ausgangspunkt sein. Fragen Sie sich: _Wenn Sie Ihr Stylesheet entfernen, ergibt Ihr Inhalt immer noch Sinn?_

Es ist aus kommerzieller Sicht nicht sinnvoll, viel Zeit damit zu verbringen, jedem ein identisches Erlebnis Ihrer Website zu bieten. Dies liegt daran, dass sich die Benutzungsumgebungen stark unterscheiden können und außerhalb Ihrer Kontrolle liegen. Es gibt ein Gleichgewicht, das Sie zwischen einer einfachen HTML-Seite und einer voll ausgestatteten Website finden müssen. Es ist hilfreich, eine einfache, CSS-lose Ansicht Ihrer Seite zu testen, um sicherzustellen, dass das Fallback-Erlebnis Ihrer Seite zugänglich ist. Dieses Fallback wird möglicherweise nie von Personen mit sehr alten oder eingeschränkten Browsern angesehen, könnte aber von Ihrer Hauptzielgruppe — Nutzern moderner Browser — angesehen werden, wenn ihr Browser oder ihre Internetverbindung vorübergehend ausfällt. CSS vereinfacht die Erstellung dieser Fallbacks. Daher ist es besser, sich auf das zu konzentrieren, was Sie kontrollieren können, das heißt, die Zeit zu investieren, um Ihre Seite [zugänglich](/de/docs/Web/Accessibility) zu machen, und dadurch mehr Benutzer zu erreichen.

## Fallbacks in CSS erstellen

CSS-Spezifikationen enthalten Informationen darüber, was der Browser tut, wenn zwei ähnliche Funktionen, wie Layoutmethoden, auf dasselbe Element angewendet werden. Beispielsweise definieren sie, was passiert, wenn ein Element schwebt und gleichzeitig ein Grid-Item und Teil eines CSS-Grid-Containers ist. Es gibt auch eine Definition dafür, was passiert, wenn ein Element sowohl die {{cssxref("margin-top")}}- als auch die {{cssxref("margin-block-start")}}-Eigenschaft gesetzt hat.

Wenn ein Browser eine neue Funktion nicht erkennt, verwirft er die Deklaration als ungültig [ohne einen Fehler auszulösen](/de/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors). Da Browser CSS-Eigenschaften und -Werte, die sie nicht unterstützen, verwerfen, können alte und neue Werte im selben Regelset koexistieren. Stellen Sie einfach sicher, dass Sie den alten Wert vor dem neuen Wert deklarieren, sodass der neue Wert (das Fallback) den alten überschreibt, wann immer er unterstützt wird.

Zum Beispiel unterstützen die meisten Browser die Zwei-Werte-Syntax der {{cssxref("display")}}-Eigenschaft. Wenn ein Browser dies nicht tut, wird er die ältere Ein-Werte-Syntax verwenden.

```css
.container {
  display: inline-flex;
  display: inline flex;
}
```

Ähnlich stellt diese [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling#vendor_prefixes) sicher, dass alte CSS-Codebasen weiterhin funktionieren, selbst wenn veraltete {{Glossary("Vendor_Prefix", "anbieterpräfixierte")}} Funktionen nicht mehr unterstützt werden. Während Anbieterpräfixe heutzutage nicht mehr oft verwendet werden, sollten Sie, wenn Sie eine anbieterpräfixierte Eigenschaft oder einen Wert einfügen müssen, den präfixierten Wert vor dem Standardwert deklarieren, damit der neue Wert, sobald er unterstützt wird, den Fallback-Wert überschreibt.

### Neue Selektoren verwenden

Das Einfügen neuer Selektoren, die nicht in allen Browsern unterstützt werden, muss sorgfältiger gehandhabt werden. Wenn ein Selektor in einer durch Kommas getrennten Liste von [Selektoren ungültig ist](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#selector_support), wird der gesamte Stilblock ignoriert.

Wenn Sie anbieterpräfixierte [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) oder neue [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) verwenden, die ein Browser möglicherweise noch nicht unterstützt, schließen Sie die präfixierten Werte in eine [verzeihende Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) ein, indem Sie {{cssxref(":is", ":is()")}} oder {{cssxref(":where", ":where()")}} verwenden, sodass der gesamte Selektorblock nicht [ungültig und ignoriert wird](/de/docs/Web/CSS/Reference/Selectors/Selector_list#invalid_selector_list).

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

Im obigen Beispiel wird der `sans-serif`-Inhalt von `.valid` sein, jedoch nicht `red`.

## Feature-Anfragen

Feature-Anfragen ermöglichen es Ihnen zu testen, ob ein Browser eine bestimmte CSS-Funktion unterstützt. Dies bedeutet, dass Sie CSS für Browser schreiben können, die eine bestimmte Funktion nicht unterstützen, dann überprüfen, ob der Browser Unterstützung hat, und, falls ja, Ihre neuen Funktionen einfügen.

Wir können eine Feature-Abfrage hinzufügen, um die Unterstützung von `subgrid` zu testen und basierend auf dieser Unterstützung Styles bereitzustellen:

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

Feature-Anfragen werden in allen modernen Browsern unterstützt. Schreiben Sie Ihr CSS für vollständig unterstützte Funktionen zuerst, außerhalb jeglicher Feature-Anfragen. Sobald Ihre Website für alle Benutzer nutzbar und zugänglich ist, fügen Sie neue Funktionen innerhalb von Feature-Query-Blöcken hinzu. Browser, die die angefragte Funktion unterstützen, können dann das neuere CSS innerhalb des Feature-Query-Blocks rendern. Verwenden Sie den Ansatz, gut unterstütztes CSS zuerst zu schreiben, und erweitern Sie Funktionen basierend auf der Unterstützung.

## Testen älterer Browser

Eine Möglichkeit besteht darin, ein Online-Testtool wie Sauce Labs zu verwenden, wie im [Testing](/de/docs/Learn_web_development/Extensions/Testing) Modul beschrieben.

## Zusammenfassung

Sie haben nun das Wissen, um für ältere Browser Fallback-CSS bereitzustellen und neue Funktionen sicher zu testen. Sie sollten sich jetzt sicher fühlen, neue Techniken zu verwenden, die möglicherweise in Zukunft entstehen.

Nachdem Sie nun unsere Artikel über CSS-Layout durchgearbeitet haben, ist es Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu testen: [Grundlegendes Layoutverständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension).

## Siehe auch

- [`@supports`](/de/docs/Web/CSS/@supports) At-Regel
- [CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Verwendung von Feature-Anfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
