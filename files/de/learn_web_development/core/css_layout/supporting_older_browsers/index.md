---
title: Unterstützung älterer Browser
slug: Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Besucher Ihrer Website können Benutzer einschließen, die entweder ältere Browser verwenden oder Browser nutzen, die die von Ihnen implementierten CSS-Features nicht unterstützen. Dies ist ein gängiges Szenario im Web, da ständig neue Features zu CSS hinzugefügt werden. Browser unterscheiden sich darin, welche Features sie unterstützen, weil verschiedene Browser dazu neigen, unterschiedliche Features zu priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken einsetzen können, um sicherzustellen, dass Ihre Website auch für Benutzer mit älterer Technologie zugänglich bleibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie Sie Unterstützung für Ihre Layouts auf älteren Browsern bereitstellen können, die möglicherweise nicht die Features unterstützen, die Sie verwenden möchten.
      </td>
    </tr>
  </tbody>
</table>

## Wie sieht die Browser-Landschaft für Ihre Website aus?

Jede Website ist unterschiedlich, was ihre Zielgruppe betrifft. Bevor Sie sich für einen Ansatz entscheiden, finden Sie heraus, wie viele Besucher mit älteren Browsern auf Ihre Website zugreifen. Dies ist einfach, wenn Sie eine bestehende Website ergänzen oder ersetzen, da Sie wahrscheinlich Analysen zur Verfügung haben, die Ihnen mitteilen können, welche Technologie Ihre Besucher verwenden. Wenn Sie keine Analysen haben oder eine brandneue Website starten, können Seiten wie [Statcounter](https://gs.statcounter.com/) relevante Statistiken bereitstellen, die nach Standort gefiltert werden können.

Berücksichtigen Sie auch die Arten von Geräten und die Art und Weise, wie Menschen Ihre Website nutzen. Beispielsweise können Sie eine überdurchschnittlich hohe Nutzung Ihrer Website auf mobilen Geräten erwarten. Priorisieren Sie immer die Zugänglichkeit und Menschen, die unterstützende Technologien nutzen; für einige Websites kann dies noch entscheidender sein. Entwickler sind oft sehr besorgt über die Erfahrung von 1 % der Benutzer, während sie die viel größere Anzahl übersehen, die Zugänglichkeitsanforderungen haben.

## Wie sieht die Unterstützung für die Features aus, die Sie verwenden möchten?

{{Compat}}

Die obige Tabelle ist am Ende jeder Feature-Seite im Abschnitt "Browser-Kompatibilität" enthalten. Nachdem Sie die Browser identifiziert haben, die Ihre Website-Besucher verwenden, können Sie jede Technologie, die Sie verwenden möchten, daran messen, wie gut sie über die Browser hinweg unterstützt wird und wie leicht Sie eine Alternative für Besucher bereitstellen können, die diese Technologie nicht verfügbar haben.

Auf MDN bieten wir Browser-Kompatibilitätsinformationen auf jeder CSS-Eigenschaften-Seite an. Diese Kompatibilitätsinformationen, die in einer Tabelle präsentiert werden, umfassen eine Liste der wichtigsten Browser sowie die Versionen, die begonnen haben, die Eigenschaft zu unterstützen. Die Browsernamen nehmen die Spaltenüberschriften ein. Zum Beispiel werfen Sie einen Blick auf die obige Tabelle oder die Seite für {{cssxref("grid-template-columns")}}, mit besonderer Beachtung der Werte `subgrid` (zuletzt unterstützt) und `masonry` (experimentell und nicht unterstützt).

Diese Browser-Kompatibilitätstabellen bieten Informationen darüber, welche Browser mit der von Ihnen gesuchten Technologie kompatibel sind und ab welcher Version der Browser diese Funktionalität unterstützt hat. Informationen zur Kompatibilität von Desktop- und Mobilbrowsern werden separat angezeigt.

Eine weitere beliebte Möglichkeit, um herauszufinden, wie gut ein Feature unterstützt wird, ist die Website [Can I Use](https://caniuse.com/). Diese Seite listet die meisten Web-Plattform-Features mit Informationen über ihren Browser-Support-Status. Sie können Nutzungsstatistiken nach Standort anzeigen – nützlich, wenn Sie an einer Website arbeiten, die hauptsächlich für einen bestimmten Bereich der Welt genutzt wird. Sie können sogar Ihr Google Analytics-Konto verknüpfen, um Analysen basierend auf Ihren Nutzerdaten zu erhalten.

Das Verständnis der Technologie, die Ihre Benutzer aufgrund des verwendeten Browsers haben und die plattformübergreifende Unterstützung für die Features, die Sie möglicherweise auf Ihrer Website verwenden möchten, versetzt Sie in eine gute Position, um alle Ihre Entscheidungen zu treffen und zu wissen, wie Sie am besten alle Ihre Benutzer unterstützen.

## Unterstützung von Features bedeutet nicht identisches Erscheinungsbild

Eine Website kann unmöglich in allen Browsern gleich aussehen. Einige Ihrer Benutzer werden die Seite auf einem Telefon betrachten und andere auf einem großen Desktop-Bildschirm. Ebenso werden einige Ihrer Benutzer eine alte Browserversion haben und andere den neuesten Browser. Einige Ihrer Benutzer können sich Ihren Inhalt von einem Bildschirmleser vorlesen lassen, während andere die Seite vergrößern müssen, um sie lesen zu können. Alle zu unterstützen bedeutet, eine Version Ihres Inhalts bereitzustellen, die defensiv gestaltet ist, so dass sie auf modernen Browsern großartig aussieht, aber dennoch auf einer grundlegenden Ebene für alle Benutzer nutzbar bleibt, unabhängig davon, wie sie auf Ihren Inhalt zugreifen.

Ein grundlegendes Unterstützungsniveau entsteht durch eine gute Strukturierung Ihres Inhalts, sodass der normale Ablauf Ihrer Seite Sinn ergibt. Für Benutzer mit einem eingeschränkten Datentarif könnten ihre Browser keine Bilder, Schriftarten oder sogar Ihr CSS laden. Der Inhalt sollte jedoch so präsentiert werden, dass er zugänglich und lesbar bleibt, selbst wenn diese Elemente nicht vollständig geladen sind. Ein gut strukturiertes HTML-Dokument sollte immer Ihr Ausgangspunkt sein. Fragen Sie sich: _Wenn Sie Ihr Stylesheet entfernen, macht Ihr Inhalt dann immer noch Sinn?_

Es macht aus geschäftlicher Sicht keinen Sinn, Zeit zu investieren, um jedem eine identische Erfahrung Ihrer Website zu bieten. Dies liegt daran, dass die Benutzerumgebungen stark variieren und außerhalb Ihrer Kontrolle liegen können. Sie müssen ein Gleichgewicht finden zwischen einer einfachen HTML-Seite und einer vollständig ausgestatteten Website. Es ist hilfreich, eine einfache, CSS-lose Ansicht Ihrer Website zu testen, um sicherzustellen, dass die Fallerfahrung Ihrer Website zugänglich ist. Diese Fallback-Ansicht wird möglicherweise nie von Personen angesehen, die sehr alte oder eingeschränkte Browser verwenden, könnte aber von Ihrer Hauptzielgruppe – Benutzern moderner Browser – gesehen werden, wenn deren Browser oder Internetverbindung vorübergehend scheitert. CSS vereinfacht die Erstellung dieser Fallerfahrungen. Daher ist es besser, sich auf das zu konzentrieren, was Sie kontrollieren können, also die Zeit zu investieren, um Ihre Website [zugänglich](/de/docs/Web/Accessibility) zu machen und damit mehr Benutzer zu bedienen.

## Fallbacks in CSS erstellen

CSS-Spezifikationen enthalten Informationen, die erklären, was der Browser tut, wenn zwei ähnliche Features, wie Layoutmethoden, auf dasselbe Element angewendet werden. Beispielsweise definieren sie, was passiert, wenn ein Item gefloatet und gleichzeitig ein Rasterelement eines CSS-Grid-Containers ist. Es gibt auch eine Definition dafür, was passiert, wenn ein Element sowohl die Eigenschaften {{cssxref("margin-top")}} als auch {{cssxref("margin-block-start")}} hat.

Wenn ein Browser ein neues Feature nicht erkennt, verwirft er die Deklaration als ungültig [ohne einen Fehler zu werfen](/de/docs/Web/CSS/Guides/Syntax/Error_handling#css_parser_errors). Da Browser CSS-Eigenschaften und -Werte verwerfen, die sie nicht unterstützen, können alte und neue Werte im selben Regelset nebeneinander existieren. Stellen Sie einfach sicher, dass Sie den alten Wert vor dem neuen Wert deklarieren, damit bei Unterstützung der neue Wert den alten Wert (das Fallback) überschreibt.

Beispielsweise unterstützen die meisten Browser die Zwei-Wert-Syntax der Eigenschaft {{cssxref("display")}}. Wenn ein Browser dies nicht tut, verwendet er die ältere, einwertige Syntax.

```css
.container {
  display: inline-flex;
  display: inline flex;
}
```

Ähnlich stellt dieses [Fehlerhandling](/de/docs/Web/CSS/Guides/Syntax/Error_handling#vendor_prefixes) sicher, dass alte CSS-Codebasen weiter funktionieren, auch wenn veraltete {{Glossary("Vendor_Prefix", "anbieterpräfixierte")}} Features nicht mehr unterstützt werden. Während Anbieterpräfixe nicht mehr häufig verwendet werden, sollten Sie, wenn Sie ein anbieterpräfixiertes Feature oder einen Wert einbeziehen müssen, sicherstellen, dass Sie den präfixierten Wert vor dem Standardwert deklarieren, damit bei Unterstützung der neue Wert den Fallbackwert überschreibt.

### Verwenden neuer Selektoren

Neue Selektoren, die nicht in allen Browsern unterstützt werden, müssen sorgfältiger behandelt werden. Wenn ein Selektor in einer durch Kommas getrennten Liste von [Selektoren ungültig](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#selector_support) ist, wird der gesamte Stilblock ignoriert.

Wenn Sie anbieterpräfixierte [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) oder neue [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) verwenden, die ein Browser möglicherweise noch nicht unterstützt, fügen Sie die präfixierten Werte innerhalb einer [nachgiebigen Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) ein, indem Sie {{cssxref(":is", ":is()")}} oder {{cssxref(":where", ":where()")}} verwenden, so dass der gesamte Selektorblock nicht [ungültig und ignoriert](/de/docs/Web/CSS/Reference/Selectors/Selector_list#invalid_selector_list) wird.

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

Im obigen Beispiel wird der `.valid` Inhalt `sans-serif` aber nicht `red` sein.

## Feature-Queries

Feature-Queries ermöglichen es Ihnen zu testen, ob ein Browser eine bestimmte CSS-Funktion unterstützt. Dadurch können Sie einige CSS für Browser schreiben, die ein bestimmtes Feature nicht unterstützen, dann prüfen, ob der Browser Unterstützung hat und falls ja, Ihre neuen Funktionen hinzufügen.

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

Feature-Queries werden in allen modernen Browsern unterstützt. Schreiben Sie Ihr CSS für vollständig unterstützte Features zuerst, außerhalb von Feature-Abfragen. Sobald Ihre Website für alle Benutzer nutzbar und zugänglich ist, fügen Sie neue Features innerhalb von Feature-Query-Blöcken hinzu. Browser, die das abgefragte Feature unterstützen, können dann das neuere CSS innerhalb des Feature-Query-Blocks rendern. Verwenden Sie den Ansatz, gut unterstütztes CSS zuerst zu schreiben und dann die Features basierend auf der Unterstützung zu verbessern.

## Testen älterer Browser

Eine Möglichkeit ist die Verwendung eines Online-Testtools wie Sauce Labs, wie im [Testing](/de/docs/Learn_web_development/Extensions/Testing) Modul detailliert beschrieben.

## Zusammenfassung

Sie haben jetzt das Wissen, um Fallback-CSS für ältere Browser bereitzustellen und neue Features sicher zu testen. Sie sollten nun zuversichtlich in der Lage sein, alle neuen Techniken zu verwenden, die möglicherweise auftauchen.

Nachdem Sie unsere Artikel über CSS-Layout durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu testen: [Grundlegendes Layout-Verständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension).

## Siehe auch

- [`@supports`](/de/docs/Web/CSS/Reference/At-rules/@supports) At-Regel
- [CSS At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Verwendung von Feature-Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS bedingte Regeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
