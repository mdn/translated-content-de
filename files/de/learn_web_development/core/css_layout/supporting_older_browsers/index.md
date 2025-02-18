---
title: Unterstützung für ältere Browser
slug: Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{LearnSidebar}}

Besucher Ihrer Website können Nutzer sein, die entweder ältere Browser oder Browser verwenden, die die CSS-Funktionen, die Sie implementiert haben, nicht unterstützen. Dies ist ein häufiges Szenario im Web, da ständig neue Funktionen zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung dieser Funktionen, da verschiedene Browser dazu neigen, unterschiedliche Funktionen zu priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken nutzen können, um sicherzustellen, dass Ihre Website auch für Nutzer mit älterer Technologie zugänglich bleibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und ein Verständnis dafür, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Unterstützung für Layouts auf älteren Browsern bereitgestellt werden kann, die die gewünschten Funktionen möglicherweise nicht unterstützen.
      </td>
    </tr>
  </tbody>
</table>

## Wie sieht die Browser-Landschaft Ihrer Website aus?

Jede Website ist unterschiedlich in Bezug auf ihr Zielpublikum. Bevor Sie eine Herangehensweise wählen, sollten Sie herausfinden, wie viele Besucher Ihrer Website ältere Browser nutzen. Dies ist einfach, wenn Sie eine bestehende Website erweitern oder ersetzen, da Sie wahrscheinlich Analysedaten zur Verfügung haben, die Ihnen die verwendete Technologie Ihrer Besucher zeigen. Wenn Sie keine Analysedaten haben oder eine brandneue Website starten, können Websites wie [Statcounter](https://gs.statcounter.com/) relevante Statistiken liefern, die nach Standorten gefiltert werden können.

Berücksichtigen Sie auch die Art der Geräte und die Nutzungsweise Ihrer Website. Beispielsweise könnte ein höherer als durchschnittlicher Anteil Ihrer Website-Besuche über mobile Geräte erfolgen. Priorisieren Sie immer die Barrierefreiheit und Menschen, die unterstützende Technologien verwenden; bei einigen Websites könnte dies sogar noch kritischer sein. Entwickler machen sich oft viele Gedanken über die Erfahrung von 1 % der Nutzer, während sie die weit größere Anzahl mit Barrierefreiheitsbedürfnissen übersehen.

## Wie ist die Unterstützung für die Funktionen, die Sie verwenden möchten?

{{Compat}}

Die obige Tabelle ist am Ende jeder Funktionsseite im Abschnitt „Browser-Kompatibilität“ enthalten. Nachdem Sie die Browser identifiziert haben, die Ihre Website-Besucher verwenden, können Sie die Technologie, die Sie verwenden möchten, bewerten und feststellen, wie gut sie in verschiedenen Browsern unterstützt wird und wie einfach Sie eine Alternative für Besucher bereitstellen können, die diese Technologie nicht haben.

Auf MDN bieten wir Informationen zur Browser-Kompatibilität auf jeder CSS-Eigenschaften-Seite an. Diese Kompatibilitätsinformationen, die in einer Tabelle dargestellt sind, enthalten eine Liste der wichtigsten Browser zusammen mit den Versionen, die die Eigenschaft erstmals unterstützten. Die Namen der Browser befinden sich in den Spaltenüberschriften. Zum Beispiel können Sie die obige Tabelle oder die Seite für {{cssxref("grid-template-columns")}} betrachten, mit besonderem Augenmerk auf die Werte `subgrid` (kürzlich unterstützt) und `masonry` (experimentell und nicht unterstützt).

Diese Tabellen zur Browser-Kompatibilität liefern Informationen darüber, welche Browser mit der Technologie kompatibel sind, die Sie benötigen, und ab welcher Version der Browser diese Funktionalität unterstützt. Kompatibilitätsinformationen für Browser und mobile Browser werden separat angezeigt.

Eine weitere beliebte Möglichkeit, herauszufinden, wie gut eine Funktion unterstützt wird, ist die Website [Can I Use](https://caniuse.com/). Diese Website listet die meisten Funktionen der Webplattform mit Informationen über deren Browser-Unterstützungsstatus auf. Sie können Nutzungsstatistiken nach Standort anzeigen — nützlich, wenn Sie an einer Website arbeiten, die hauptsächlich Nutzer in einer bestimmten Region der Welt hat. Sie können sogar Ihr Google Analytics-Konto verknüpfen, um Analysen basierend auf Ihren Nutzerdaten zu erhalten.

Zu verstehen, über welche Technologie Ihre Benutzer aufgrund des von ihnen verwendeten Browsers verfügen, und die funktionsübergreifende Unterstützung der Technologien, die Sie möglicherweise auf Ihrer Website verwenden möchten, versetzt Sie in eine gute Ausgangslage, um alle Entscheidungen zu treffen und zu wissen, wie Sie alle Ihre Benutzer am besten unterstützen können.

## Funktionsunterstützung bedeutet nicht identisches Erscheinungsbild

Eine Website kann in allen Browsern nicht identisch aussehen. Einige Ihrer Nutzer werden die Seite auf einem Telefon betrachten, andere auf einem großen Desktop-Bildschirm. Ebenso werden einige Ihrer Nutzer eine alte Browserversion verwenden, andere den neuesten Browser. Manche Nutzer lassen sich Ihre Inhalte von einem Screenreader vorlesen, während andere auf der Seite hineinzoomen müssen, um sie lesen zu können. Unterstützung für alle bedeutet, eine Version Ihrer Inhalte zu bieten, die defensiv gestaltet ist, sodass sie in modernen Browsern großartig aussieht, aber auch auf einfachem Niveau für alle Benutzer nutzbar ist, unabhängig davon, wie sie auf Ihre Inhalte zugreifen.

Eine grundlegende Unterstützungsebene ergibt sich aus einer guten Strukturierung Ihrer Inhalte, sodass der normale Fluss Ihrer Seite sinnvoll ist. Für Nutzer mit begrenzten Datenplänen laden ihre Browser möglicherweise keine Bilder, Schriftarten oder sogar Ihr CSS. Die Inhalte sollten jedoch so präsentiert werden, dass sie auch dann zugänglich und lesbar bleiben, wenn diese Elemente nicht vollständig geladen werden. Ein gut strukturiertes HTML-Dokument sollte immer Ihr Ausgangspunkt sein. Fragen Sie sich: _Macht mein Inhalt auch Sinn, wenn ich mein Stylesheet entferne?_

Es macht wirtschaftlich keinen Sinn, Zeit darauf zu verwenden, jedem Nutzer eine identische Erfahrung Ihrer Website zu bieten. Dies liegt daran, dass die Umgebungen der Nutzer stark variieren können und außerhalb Ihrer Kontrolle liegen. Es besteht ein Gleichgewicht zwischen einer einfachen HTML-Seite und einer voll ausgestatteten Website. Es ist hilfreich, eine einfache Ansicht Ihrer Website ohne CSS zu testen, um sicherzustellen, dass die Fallback-Erfahrung Ihrer Website zugänglich bleibt. Dieser Fallback wird möglicherweise niemals von Menschen mit sehr alten oder eingeschränkten Browsern angesehen, könnte jedoch von Ihrer Hauptzielgruppe — Nutzern moderner Browser — angesehen werden, wenn deren Browser oder Internetverbindung vorübergehend ausfällt. CSS vereinfacht die Erstellung dieser Fallbacks. Daher ist es besser, sich darauf zu konzentrieren, was Sie kontrollieren können, d.h., investieren Sie Zeit, um Ihre Seite [barrierefrei](/de/docs/Web/Accessibility) zu gestalten, und erreichen Sie so mehr Nutzer.

## Fallbacks in CSS erstellen

CSS-Spezifikationen enthalten Informationen darüber, was der Browser tut, wenn zwei ähnliche Funktionen, wie Layout-Methoden, auf dasselbe Element angewendet werden. Beispielsweise wird definiert, was passiert, wenn ein Element gefloatet wird und gleichzeitig ein Grid-Element in einem CSS-Grid-Container ist. Ebenso gibt es eine Definition, was passiert, wenn ein Element sowohl {{cssxref("margin-top")}} als auch {{cssxref("margin-block-start")}} gesetzt hat.

Wenn ein Browser eine neue Funktion nicht erkennt, verwirft er die Deklaration als ungültig [ohne einen Fehler auszugeben](/de/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors). Da Browser ungültige CSS-Eigenschaften und -Werte verwerfen, können alte und neue Werte im selben Regelset koexistieren. Stellen Sie sicher, dass der alte Wert vor dem neuen Wert deklariert wird, sodass der neue Wert (der Fallback) den alten Wert überschreibt, sobald er unterstützt wird.

Zum Beispiel unterstützen die meisten Browser die Zwei-Wert-Syntax der {{cssxref("display")}}-Eigenschaft. Wenn ein Browser diese nicht unterstützt, verwendet er die ältere Ein-Wert-Syntax.

```css
.container {
  display: inline-flex;
  display: inline flex;
}
```

Ebenso stellt diese [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling#vendor_prefixes) sicher, dass alte CSS-Codebasen weiterhin funktionieren, auch wenn veraltete {{Glossary("Vendor_Prefix", "vendor-prefixed")}} Funktionen nicht mehr unterstützt werden. Während Präfixe für Anbieter selten verwendet werden, stellen Sie sicher, dass die Präfix-Werte vor den Standardwerten deklariert werden, sodass, wenn sie unterstützt werden, die neuen Werte die Fallback-Werte überschreiben.

### Nutzung neuer Selektoren

Das Einfügen neuer Selektoren, die nicht in allen Browsern unterstützt werden, muss vorsichtiger gehandhabt werden. Wenn ein Selektor in einer kommaseparierten Liste von [Selektoren ungültig](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#selector_support) ist, wird der gesamte Stilblock ignoriert.

Wenn Sie vendor-prefixed [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) oder neue [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) verwenden, die ein Browser möglicherweise noch nicht unterstützt, fügen Sie die Präfix-Werte innerhalb einer [toleranten Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) durch die Nutzung von {{cssxref(":is", ":is()")}} oder {{cssxref(":where", ":where()")}} ein, damit der gesamte Selektorblock nicht [ungültig wird und ignoriert](/de/docs/Web/CSS/Selector_list#invalid_selector_list) wird.

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

Im obigen Beispiel wird der `.valid`-Inhalt `sans-serif` sein, jedoch nicht `rot`.

## Feature Queries

Feature Queries ermöglichen es Ihnen, zu testen, ob ein Browser eine spezielle CSS-Funktion unterstützt. Auf diese Weise können Sie CSS für Browser schreiben, die eine bestimmte Funktion nicht unterstützen, und dann überprüfen, ob der Browser die Unterstützung bietet, und gegebenenfalls Ihre neuen, fortschrittlichen Funktionen einfügen.

Wir können eine Feature Query hinzufügen, um `subgrid`-Unterstützung zu testen, und abhängig davon Stile anwenden:

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

Feature Queries werden von allen modernen Browsern unterstützt. Schreiben Sie zuerst Ihr CSS für vollständig unterstützte Funktionen außerhalb von Feature Queries. Sobald Ihre Website nutzbar und zugänglich für alle Nutzer ist, fügen Sie neue Funktionen innerhalb von Feature Queries ein. Browser, die die abgefragte Funktion unterstützen, können dann das neuere CSS innerhalb des Feature Query-Blocks darstellen. Verwenden Sie den Ansatz, gut unterstütztes CSS zuerst zu schreiben und dann Funktionen basierend auf der Unterstützung zu erweitern.

## Testen älterer Browser

Eine Möglichkeit besteht darin, ein Online-Testtool wie Sauce Labs zu verwenden, wie im [Testing](/de/docs/Learn_web_development/Extensions/Testing)-Modul beschrieben.

## Zusammenfassung

Sie haben nun das Wissen, um Fallback-CSS für ältere Browser bereitzustellen und neue Funktionen sicher zu testen. Sie sollten sich nun sicher fühlen, neue Techniken zu nutzen, die möglicherweise auftreten.

Da Sie unsere Artikel zu CSS-Layouts nun durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Bewertung für dieses Modul zu testen: [Fundamentales Layout-Verständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension).

## Siehe auch

- [`@supports`](/de/docs/Web/CSS/@supports)-Regel
- [CSS-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Feature Queries nutzen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules)-Modul
