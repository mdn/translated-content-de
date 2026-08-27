---
title: Unterstützung älterer Browser
slug: Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers
l10n:
  sourceCommit: fdc1b80c73b20a04748a9fdf68645d0e6b4d96e1
---

Besucher Ihrer Website können Benutzer einschließen, die entweder ältere Browser verwenden oder Browser verwenden, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiges Szenario im Web, in dem ständig neue Funktionen zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung für diese Funktionen, da verschiedene Browser dazu neigen, unterschiedliche Funktionen zu priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken nutzen können, um sicherzustellen, dass Ihre Website auch für Benutzer mit älterer Technologie zugänglich bleibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen zum Styling</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Sie Unterstützung für Ihre Layouts auf älteren Browsern bieten können, die möglicherweise die Funktionen, die Sie verwenden möchten, nicht unterstützen.
      </td>
    </tr>
  </tbody>
</table>

## Wie sieht die Browser-Landschaft für Ihre Website aus?

Jede Website ist hinsichtlich der Zielgruppe unterschiedlich. Bevor Sie sich für einen Ansatz entscheiden, finden Sie heraus, wie viele Besucher Ihre Website mit älteren Browsern aufrufen. Dies ist einfach, wenn Sie eine bestehende Website erweitern oder ersetzen, da Sie wahrscheinlich über Analysen verfügen, die Ihnen die Technologie Ihrer Besucher verraten. Wenn Sie keine Analysen haben oder eine brandneue Website starten, können Websites wie [Statcounter](https://gs.statcounter.com/) relevante Statistiken bieten, die nach Standort gefiltert werden können.

Sie sollten auch den Gerätetyp und die Art, wie Menschen Ihre Website nutzen, berücksichtigen. Beispielsweise können Sie eine überdurchschnittlich hohe Nutzung Ihrer Website auf mobilen Geräten erwarten. Priorisieren Sie immer die Barrierefreiheit und Benutzer, die unterstützende Technologien verwenden; für einige Websites kann dies noch wichtiger sein. Entwickler sind oft sehr besorgt über das Erlebnis von 1 % der Nutzer, während sie die weitaus größere Anzahl übersehen, die Barrierefreiheit benötigt.

## Welche Unterstützung gibt es für die Funktionen, die Sie verwenden möchten?

{{Compat}}

Die obige Tabelle ist am Ende jeder Funktionsseite im Abschnitt "Browser-Kompatibilität" enthalten. Nachdem Sie die Browser, die Ihre Website-Besucher nutzen, identifiziert haben, können Sie jede Technologie, die Sie verwenden möchten, hinsichtlich ihrer Unterstützung in verschiedenen Browsern bewerten und feststellen, wie leicht Sie eine Alternative für Besucher anbieten können, die diese Technologie nicht zur Verfügung haben.

Auf MDN stellen wir auf jeder CSS-Property-Seite Informationen zur Browser-Kompatibilität bereit. Diese Kompatibilitätsinformationen, die in einer Tabelle präsentiert werden, enthalten eine Liste der wichtigsten Browser zusammen mit den Versionen, die begonnen haben, die Eigenschaft zu unterstützen. Sehen Sie sich zum Beispiel die Seiten zu [`flex-flow`](/de/docs/Web/CSS/Reference/Properties/flex-flow#browser_compatibility) und [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color#browser_compatibility) an.

Diese Browser-Kompatibilitätstabellen bieten Informationen darüber, welche Browser mit der gesuchten Technologie kompatibel sind und ab welcher Version der Browser diese Funktionalität unterstützt. Informationen zur Kompatibilität von Browsern und mobilen Browsern werden separat angezeigt.

Eine andere beliebte Methode, um herauszufinden, wie gut eine Funktion unterstützt wird, ist die Website [Can I Use](https://caniuse.com/). Diese Website listet die Mehrzahl der Funktionen der Webplattform mit Informationen über ihren Browser-Support-Status auf. Sie können Nutzungsstatistiken nach Standort anzeigen – nützlich, wenn Sie an einer Website arbeiten, die Benutzer hauptsächlich in einem bestimmten Gebiet der Welt hat. Sie können sogar Ihr Google Analytics-Konto verbinden, um Analysen basierend auf Ihren Benutzerdaten zu erhalten.

Das Verständnis der Technologie, die Ihre Benutzer aufgrund des von ihnen verwendeten Browsers haben, und des plattformübergreifenden Supports für Funktionen, die Sie möglicherweise auf Ihrer Website verwenden möchten, versetzt Sie in eine gute Position, um alle Ihre Entscheidungen zu treffen und zu wissen, wie Sie Ihre Benutzer am besten unterstützen können.

## Unterstützung von Funktionen bedeutet nicht identisches Erscheinungsbild

Eine Website kann unmöglich in allen Browsern gleich aussehen. Einige Ihrer Benutzer werden die Website auf einem Handy ansehen, andere auf einem großen Desktop-Bildschirm. Ebenso haben einige Ihrer Benutzer möglicherweise eine alte Browserversion und andere den neuesten Browser. Einige Ihrer Benutzer hören möglicherweise Ihren Inhalt von einem Screenreader vorgelesen, während andere in die Seite hineinzoomen müssen, um sie lesen zu können. Jeder zu unterstützen bedeutet, eine Version Ihres Inhalts bereitzustellen, die defensiv gestaltet ist, sodass sie in modernen Browsern großartig aussieht, aber dennoch auf einfache Weise für alle Benutzer zugänglich ist, unabhängig davon, wie sie auf Ihren Inhalt zugreifen.

Ein grundlegendes Maß an Unterstützung ergibt sich daraus, dass Sie Ihre Inhalte gut strukturieren, sodass der normale Ablauf Ihrer Seite sinnvoll ist. Für Benutzer mit eingeschränkten Datentarifen laden ihre Browser möglicherweise keine Bilder, Schriftarten oder sogar Ihr CSS. Der Inhalt sollte jedoch so präsentiert werden, dass er zugänglich und lesbar ist, selbst wenn diese Elemente nicht vollständig geladen werden. Ein gut strukturiertes HTML-Dokument sollte immer Ihr Ausgangspunkt sein. Fragen Sie sich: _Macht Ihr Inhalt noch Sinn, wenn Sie Ihr Stylesheet entfernen?_

Es ist wirtschaftlich nicht sinnvoll, Zeit darauf zu verwenden, jedem eine identische Erfahrung Ihrer Website zu bieten. Dies liegt daran, dass sich Benutzerumgebungen stark unterscheiden können und außerhalb Ihrer Kontrolle liegen. Es gibt ein Gleichgewicht, das Sie zwischen einer einfachen HTML-Seite und einer voll funktionsfähigen Website finden müssen. Es ist hilfreich, eine einfache, CSS-lose Ansicht Ihrer Website zu testen, um sicherzustellen, dass das Fallback-Erlebnis Ihrer Website zugänglich ist. Dieses Fallback wird möglicherweise nie von Benutzern sehr alter oder eingeschränkter Browser gesehen, könnte jedoch von Ihrer Hauptzielgruppe – Benutzern moderner Browser – gesehen werden, wenn ihr Browser oder ihre Internetverbindung vorübergehend ausfällt. CSS vereinfacht die Erstellung dieser Fallbacks. Daher ist es besser, sich auf das zu konzentrieren, was Sie kontrollieren können, das heißt, Sie sollten Zeit darauf verwenden, Ihre Website [barrierefrei](/de/docs/Web/Accessibility) zu gestalten, um mehr Benutzern zu dienen.

## Erstellen von Fallbacks in CSS

CSS-Spezifikationen enthalten Informationen darüber, was der Browser tut, wenn zwei ähnliche Funktionen, wie Layoutmethoden, auf dasselbe Element angewendet werden. Beispielsweise definieren sie, was passiert, wenn ein Element gefloatet wird und gleichzeitig ein Grid-Element und Teil eines CSS-Grid-Containers ist. Es gibt auch eine Definition dafür, was passiert, wenn ein Element sowohl die Eigenschaften {{cssxref("margin-top")}} als auch {{cssxref("margin-block-start")}} gesetzt hat.

Wenn ein Browser eine neue Funktion nicht erkennt, verwirft er die Deklaration als ungültig [ohne einen Fehler zu werfen](/de/docs/Web/CSS/Guides/Syntax/Error_handling#css_parser_errors). Da Browser CSS-Eigenschaften und -Werte verwerfen, die sie nicht unterstützen, können alte und neue Werte im selben Regelset koexistieren. Stellen Sie nur sicher, dass Sie den alten Wert vor dem neuen Wert deklarieren, sodass, wenn unterstützt, der neue Wert den alten Wert (das Fallback) überschreibt.

Zum Beispiel unterstützen die meisten Browser das Zwei-Wert-Syntagma der {{cssxref("display")}}-Eigenschaft. Wenn ein Browser dies nicht tut, wird er die ältere, einwertige Syntax verwenden.

```css
.container {
  display: inline-flex;
  display: inline flex;
}
```

In ähnlicher Weise stellt diese [Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling#vendor_prefixes) sicher, dass alte CSS-Codebasen weiterhin funktionieren, selbst wenn legacy {{Glossary("Vendor_Prefix", "vendor-prefixed")}} Funktionen nicht mehr unterstützt werden. Auch wenn Vendor-Prefixing nicht mehr häufig verwendet wird, wenn Sie eine vendor-präfixierte Eigenschaft oder einen Wert einfügen müssen, stellen Sie sicher, dass Sie den präfixierten Wert vor dem Standardwert deklarieren, sodass, wenn unterstützt, der neue Wert den Fallback-Wert überschreibt.

### Verwendung neuer Selektoren

Das Einfügen neuer Selektoren, die nicht in allen Browsern unterstützt werden, muss sorgfältiger behandelt werden. Wenn ein Selektor in einer kommagetrennten Liste von [Selektoren ungültig ist](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#selector_support), wird der gesamte Style-Block ignoriert.

Wenn Sie vendor-präfixierte [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) oder neue [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) verwenden, die ein Browser möglicherweise noch nicht unterstützt, schließen Sie die präfixierten Werte in eine [verzeihende Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) ein, indem Sie {{cssxref(":is", ":is()")}} oder {{cssxref(":where", ":where()")}} verwenden, damit der gesamte Selektorblock nicht [ungültig wird und ignoriert wird](/de/docs/Web/CSS/Reference/Selectors/Selector_list#invalid_selector_list).

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

Im obigen Beispiel wird der `.valid`-Inhalt `sans-serif`, aber nicht `red` sein.

## Feature-Anfragen

Feature-Anfragen ermöglichen es Ihnen zu testen, ob ein Browser eine bestimmte CSS-Funktion unterstützt. Das bedeutet, dass Sie CSS für Browser schreiben können, die eine bestimmte Funktion nicht unterstützen, und dann prüfen können, ob der Browser Unterstützung hat, und wenn ja, können Sie Ihre neuen, ausgefallenen Funktionen einfügen.

Wir können eine Feature-Anfrage hinzufügen, um die Unterstützung von `subgrid` zu testen und Stile basierend auf dieser Unterstützung bereitzustellen:

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

Feature-Anfragen werden in allen modernen Browsern unterstützt. Schreiben Sie zuerst Ihr CSS für vollständig unterstützte Funktionen außerhalb von Feature-Anfragen. Wenn Ihre Website für alle Benutzer benutzbar und zugänglich ist, fügen Sie neue Funktionen innerhalb von Feature-Anfrage-Blöcken hinzu. Browser, die die abgefragte Funktion unterstützen, können dann das neuere CSS innerhalb des Feature-Anfrage-Blocks rendern. Verwenden Sie den Ansatz, gut unterstützte CSS zuerst zu schreiben, und verbessern Sie dann Funktionen basierend auf der Unterstützung.

## Testen älterer Browser

Eine Möglichkeit ist die Verwendung eines Online-Testtools wie Sauce Labs, wie im Modul [Testing](/de/docs/Learn_web_development/Extensions/Testing) beschrieben.

## Zusammenfassung

Sie haben nun das Wissen, um Fallback-CSS für ältere Browser bereitzustellen und neue Funktionen sicher zu testen. Sie sollten sich jetzt sicher fühlen, jede neue Technik, die möglicherweise auftaucht, zu nutzen.

Da Sie nun unsere Artikel zum CSS-Layout durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu testen: [Grundlegendes Layout-Verständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension).

## Siehe auch

- {{cssxref("@supports")}} at-rule
- [CSS-At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Verwendung von Feature-Anfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
