---
title: Unterstützung älterer Browser
slug: Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Besucher Ihrer Website können Benutzer sein, die entweder ältere Browser verwenden oder Browser nutzen, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiges Szenario im Web, wo ständig neue Funktionen zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung dieser Funktionen, da verschiedene Browser oft unterschiedliche Funktionen priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken nutzen können, um sicherzustellen, dass Ihre Website auch Benutzern mit älterer Technologie zugänglich bleibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Sie Unterstützung für Ihre Layouts in älteren Browsern bieten können, die die von Ihnen verwendeten Funktionen möglicherweise nicht unterstützen.
      </td>
    </tr>
  </tbody>
</table>

## Wie sieht die Browser-Landschaft für Ihre Website aus?

Jede Website ist anders in Bezug auf ihre Zielgruppe. Bevor Sie sich für eine Vorgehensweise entscheiden, finden Sie heraus, wie viele Besucher Ihre Website mit älteren Browsern besuchen. Das ist einfach, wenn Sie eine bestehende Website erweitern oder ersetzen, da Sie wahrscheinlich Analysen zur Verfügung haben, die Ihnen die Technologie Ihrer Besucher verraten. Wenn Sie keine Analysen haben oder eine brandneue Website starten, können Websites wie [Statcounter](https://gs.statcounter.com/) relevante Statistiken liefern, die nach Standort gefiltert werden können.

Sie sollten auch die Art der Geräte und die Art und Weise, wie Menschen Ihre Website nutzen, berücksichtigen. Beispielsweise können Sie mit einer überdurchschnittlichen Nutzung Ihrer Website auf mobilen Geräten rechnen. Priorisieren Sie immer die Barrierefreiheit und Menschen, die unterstützende Technologien nutzen; für einige Websites kann dies sogar noch kritischer sein. Entwickler sind oft sehr besorgt über die Erfahrung von 1 % der Benutzer, während sie die weitaus größere Anzahl von Benutzern mit Barrierefreiheitsbedürfnissen übersehen.

## Was ist die Unterstützung für die Funktionen, die Sie verwenden möchten?

{{Compat}}

Die obige Tabelle ist am Ende jeder Funktionsseite unter dem Abschnitt "Browser-Kompatibilität" enthalten. Nachdem Sie die Browser identifiziert haben, die Ihre Website-Besucher verwenden, können Sie jede Technologie bewerten, die Sie verwenden möchten, und prüfen, wie gut sie von verschiedenen Browsern unterstützt wird und wie einfach Sie eine Alternative für Besucher bereitstellen können, die diese Technologie nicht zur Verfügung haben.

Auf MDN bieten wir Informationen zur Browser-Kompatibilität auf jeder CSS -Eigenschaftenseite an. Diese Kompatibilitätsinformationen, die in einer Tabelle dargestellt sind, enthalten eine Liste der wichtigsten Browser zusammen mit den Versionen, die begonnen haben, die Eigenschaft zu unterstützen. Die Browsernamen nehmen die Spaltenüberschriften ein. Beispielsweise schauen Sie sich die obige Tabelle oder die Seite für {{cssxref("grid-template-columns")}} an, wobei besonderes Augenmerk auf die Werte `subgrid` (zuletzt unterstützt) und `masonry` (experimentell und nicht unterstützt) gelegt wird.

Diese Tabellen zur Browser-Kompatibilität geben Auskunft darüber, welche Browser mit der Technologie, die Sie suchen, kompatibel sind und ab welcher Version der Browser diese Funktionalität unterstützt. Informationen zur Browser-Kompatibilität von Desktop- und mobilen Browsern werden separat angezeigt.

Ein weiterer beliebter Weg, um herauszufinden, wie gut eine Funktion unterstützt wird, ist die Website [Can I Use](https://caniuse.com/). Diese Seite listet die Mehrheit der Funktionen der Webplattform mit Informationen über ihren Browser-Support-Status auf. Sie können Nutzungsstatistiken nach Standort anzeigen — nützlich, wenn Sie an einer Website arbeiten, deren Benutzer überwiegend aus einem bestimmten Bereich der Welt kommen. Sie können sogar Ihr Google Analytics-Konto verknüpfen, um eine Analyse basierend auf den Daten Ihrer Benutzer zu erhalten.

Das Verständnis der Technologie, die Ihre Benutzer aufgrund des verwendeten Browsers haben, und der plattformübergreifende Support für Funktionen, die Sie möglicherweise auf Ihrer Website verwenden möchten, versetzt Sie in eine gute Position, um alle Ihre Entscheidungen zu treffen und zu wissen, wie Sie am besten alle Ihre Benutzer unterstützen können.

## Funktionsunterstützung bedeutet nicht identisches Aussehen

Eine Website kann nicht in allen Browsern gleich aussehen. Einige Ihrer Benutzer werden die Website auf einem Telefon anzeigen und andere auf einem großen Desktop-Bildschirm. Ähnlich werden einige Ihrer Benutzer eine alte Browserversion haben, und andere die neueste Version. Einige Ihrer Benutzer hören möglicherweise Ihre Inhalte von einem Screenreader vorgelesen, während andere die Seite vergrößern müssen, um sie lesen zu können. Jeden zu unterstützen, bedeutet, eine Version Ihrer Inhalte bereitzustellen, die defensiv gestaltet ist, sodass sie in modernen Browsern großartig aussieht, aber auf einer grundlegenden Ebene für alle Benutzer nutzbar bleibt, egal wie sie auf Ihre Inhalte zugreifen.

Ein grundlegendes Maß an Unterstützung ergibt sich daraus, Ihre Inhalte so zu strukturieren, dass der normale Fluss Ihrer Seite sinnvoll ist. Für Benutzer mit einem begrenzten Datentarif lädt ihr Browser möglicherweise keine Bilder, Schriftarten oder sogar Ihr CSS. Der Inhalt sollte jedoch so präsentiert werden, dass er zugänglich und lesbar bleibt, selbst wenn diese Elemente nicht vollständig geladen sind. Ein gut strukturiertes HTML-Dokument sollte immer Ihr Ausgangspunkt sein. Fragen Sie sich: _Macht Ihr Inhalt noch Sinn, wenn Sie Ihr Stylesheet entfernen?_

Es macht keinen kommerziellen Sinn, Zeit dafür aufzuwenden, jedem ein identisches Erlebnis Ihrer Website zu bieten. Dies liegt daran, dass sich Benutzerumgebungen stark unterscheiden können und außerhalb Ihrer Kontrolle liegen. Sie müssen ein Gleichgewicht zwischen einer einfachen HTML-Seite und einer vollständig ausgestatteten Website finden. Es ist hilfreich, eine einfache, CSS-freie Ansicht Ihrer Website zu testen, um sicherzustellen, dass das Fallback Ihrer Website zugänglich ist. Dieses Fallback wird möglicherweise nie von Personen genutzt, die sehr alte oder eingeschränkte Browser verwenden, könnte aber von Ihrer Hauptzielgruppe — den Nutzern moderner Browser — genutzt werden, wenn ihr Browser oder ihre Internetverbindung vorübergehend ausfällt. CSS vereinfacht die Erstellung dieser Fallbacks. Daher ist es besser, sich darauf zu konzentrieren, was Sie kontrollieren können, also die Zeit zu investieren, um Ihre Seite [zugänglich](/de/docs/Web/Accessibility) zu machen und somit mehr Benutzer zu bedienen.

## Erstellen von Fallbacks in CSS

CSS-Spezifikationen enthalten Informationen darüber, was der Browser tut, wenn zwei ähnliche Funktionen, wie Layout-Methoden, auf dasselbe Element angewendet werden. Beispielsweise definieren sie, was passiert, wenn ein Element gefloatet ist und gleichzeitig ein Grid-Item und Teil eines CSS-Grid-Containers ist. Es gibt auch eine Definition dafür, was passiert, wenn ein Element sowohl die Eigenschaften {{cssxref("margin-top")}} als auch {{cssxref("margin-block-start")}} gesetzt hat.

Wenn ein Browser eine neue Funktion nicht erkennt, verwirft er die Deklaration als ungültig [ohne einen Fehler zu werfen](/de/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors). Da Browser CSS-Eigenschaften und -Werte, die sie nicht unterstützen, verwerfen, können alte und neue Werte im selben Regelset koexistieren. Stellen Sie einfach sicher, dass Sie den alten Wert vor dem neuen Wert deklarieren, damit der neue Wert, wenn er unterstützt wird, den alten Wert überschreibt (das Fallback).

Zum Beispiel unterstützen die meisten Browser die Zweiwertsyntax der Eigenschaft {{cssxref("display")}}. Wenn ein Browser dies nicht tut, verwendet er die ältere, einwertige Syntax.

```css
.container {
  display: inline-flex;
  display: inline flex;
}
```

Ähnlich stellt diese [Fehlerbehebung](/de/docs/Web/CSS/CSS_syntax/Error_handling#vendor_prefixes) sicher, dass alte CSS-Codebasen weiterhin funktionieren, selbst wenn veraltete {{Glossary("Vendor_Prefix", "vendor-prefixed")}} Funktionen nicht mehr unterstützt werden. Obwohl das Präfixieren von Anbietern nicht mehr häufig verwendet wird, sollten Sie, wenn Sie ein vendor-präfixiertes Attribut oder einen Wert einfügen müssen, den präfixierten Wert vor dem Standardwert deklarieren, damit der neue Wert, wenn er unterstützt wird, den Fallback-Wert überschreibt.

### Verwenden neuer Selektoren

Das Einbeziehen neuer Selektoren, die nicht in allen Browsern unterstützt werden, muss sorgfältiger gehandhabt werden. Wenn ein Selektor in einer kommagetrennten Liste von [Selektoren ungültig ist](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#selector_support), wird der gesamte Stilblock ignoriert.

Wenn Sie vendor-präfixierte [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) oder neue [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) verwenden, die ein Browser möglicherweise noch nicht unterstützt, schließen Sie die präfixierten Werte in eine [nachsichtige Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) ein, indem Sie {{cssxref(":is", ":is()")}} oder {{cssxref(":where", ":where()")}} verwenden, damit der gesamte Selektorblock nicht [ungültig wird und ignoriert wird](/de/docs/Web/CSS/Selector_list#invalid_selector_list).

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

Im obigen Beispiel wird der `.valid`-Inhalt `sans-serif` sein, aber nicht `red`.

## Feature-Abfragen

Feature-Abfragen ermöglichen es Ihnen zu testen, ob ein Browser eine bestimmte CSS-Funktion unterstützt. Das bedeutet, dass Sie etwas CSS für Browser schreiben können, die eine bestimmte Funktion nicht unterstützen, dann prüfen, ob der Browser Unterstützung hat, und wenn ja, Ihre neuen Funktionen hinzufügen.

Wir können eine Feature-Abfrage hinzufügen, um die Unterstützung für `subgrid` zu testen und basierend auf dieser Unterstützung Stile bereitzustellen:

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

Feature-Abfragen werden in allen modernen Browsern unterstützt. Schreiben Sie Ihr CSS zuerst für vollständig unterstützte Funktionen, außerhalb jeglicher Feature-Abfrage. Sobald Ihre Website für alle Benutzer nutzbar und zugänglich ist, fügen Sie neue Funktionen innerhalb der Feature-Query-Blöcke hinzu. Browser, die die abgefragte Funktion unterstützen, können dann das neuere CSS innerhalb des Feature-Query-Blocks rendern. Verwenden Sie den Ansatz, gut unterstütztes CSS zuerst zu schreiben, und verbessern Sie dann die Funktionen basierend auf der Unterstützung.

## Testen älterer Browser

Eine Möglichkeit ist die Verwendung eines Online-Testtools wie Sauce Labs, wie im [Testing](/de/docs/Learn_web_development/Extensions/Testing) Modul beschrieben.

## Zusammenfassung

Sie haben jetzt das Wissen, um Fallback-CSS für ältere Browser bereitzustellen und neue Funktionen sicher zu testen. Sie sollten jetzt in der Lage sein, neue Techniken zu nutzen, die möglicherweise hinzukommen.

Jetzt, da Sie unsere Artikel zu CSS-Layout durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu testen: [Fundamental layout comprehension](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension).

## Siehe auch

- [`@supports`](/de/docs/Web/CSS/@supports) At-Regel
- [CSS At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Verwenden von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
