---
title: Unterstützung älterer Browser
slug: Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Besucher Ihrer Website könnten Nutzer umfassen, die entweder ältere Browser verwenden oder Browser nutzen, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist eine häufige Situation im Web, da ständig neue Funktionen zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung für diese Funktionen, weil verschiedene Browser tendenziell unterschiedliche Funktionen priorisieren. Dieser Artikel erklärt, wie Sie als Web-Entwickler moderne Webtechniken nutzen können, um sicherzustellen, dass Ihre Website auch für Nutzer mit älterer Technologie zugänglich bleibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Sie Unterstützung für Ihre Designs in älteren Browsern bieten können,
        die möglicherweise die gewünschten Funktionen nicht unterstützen.
      </td>
    </tr>
  </tbody>
</table>

## Wie sieht die Browser-Landschaft für Ihre Website aus?

Jede Website unterscheidet sich in ihrer Zielgruppe. Bevor Sie sich für einen Ansatz entscheiden, sollten Sie die Anzahl der Besucher ermitteln, die ältere Browser verwenden. Dies ist einfach, wenn Sie eine vorhandene Website ergänzen oder ersetzen, da Sie wahrscheinlich Analysen verfügbar haben, die Ihnen die von Ihren Besuchern verwendete Technologie zeigen. Wenn Sie keine Analysen haben oder eine brandneue Website starten, können Websites wie [Statcounter](https://gs.statcounter.com/) relevante Statistiken bereitstellen, die nach Standort gefiltert werden können.

Berücksichtigen Sie auch die Art der Geräte und die Art, wie Menschen Ihre Website nutzen. Beispielsweise können Sie eine überdurchschnittliche Nutzung Ihrer Website auf mobilen Geräten erwarten. Priorisieren Sie immer die Barrierefreiheit und Menschen, die unterstützende Technologien nutzen; für einige Websites kann dies sogar noch kritischer sein. Entwickler machen sich oft sehr viele Gedanken über die Erfahrung von 1 % der Nutzer, während sie die weitaus größere Anzahl von Menschen mit Barrierefreiheitserfordernissen übersehen.

## Wie ist die Unterstützung für die Funktionen, die Sie verwenden möchten?

{{Compat}}

Die obige Tabelle ist am unteren Rand jeder Funktionsseite im Abschnitt "Browser-Kompatibilität" enthalten. Nachdem Sie die Browser identifiziert haben, die Ihre Besucher nutzen, können Sie die Technologie, die Sie verwenden möchten, daran messen, wie gut sie von verschiedenen Browsern unterstützt wird und wie einfach es ist, eine Alternative für Besucher bereitzustellen, die diese Technologie nicht verfügbar haben.

Auf MDN bieten wir Informationen zur Browser-Kompatibilität auf jeder CSS-Eigenschaftsseite an. Diese Kompatibilitätsinformationen, dargestellt in einer Tabelle, umfassen eine Liste der wichtigsten Browser mit den Versionen, die die Eigenschaft zu unterstützen begannen. Die Namen der Browser stehen in den Spaltenüberschriften. Beispielsweise werfen Sie einen Blick auf die obige Tabelle oder die Seite zu {{cssxref("grid-template-columns")}}, mit besonderem Augenmerk auf die Werte `subgrid` (am kürzlichsten unterstützt) und `masonry` (experimentell und nicht unterstützt).

Diese Tabellen zur Browser-Kompatibilität bieten Informationen darüber, welche Browser mit der Technologie, die Sie suchen, kompatibel sind und ab welcher Version der Browser diese Funktionalität zu unterstützen begann. Informationen zur Kompatibilität von Browsern und Mobiltelefonbrowsern werden separat angezeigt.

Eine weitere beliebte Möglichkeit, um herauszufinden, wie gut eine Funktion unterstützt wird, ist die Website [Can I Use](https://caniuse.com/). Diese Seite listet die Mehrheit der Web-Plattform-Funktionen mit Informationen über ihren Browser-Support-Status auf. Sie können Nutzungsstatistiken nach Standort anzeigen — nützlich, wenn Sie an einer Website arbeiten, die hauptsächlich Nutzer aus einem bestimmten Gebiet der Welt hat. Sie können sogar Ihr Google Analytics-Konto verbinden, um eine Analyse basierend auf Ihren Nutzerdaten zu erhalten.

Das Verständnis der Technologie, die Ihre Nutzer aufgrund des von ihnen verwendeten Browsers haben, und die plattformübergreifende Unterstützung der Funktionen, die Sie auf Ihrer Website nutzen möchten, versetzt Sie in eine gute Position, um alle Ihre Entscheidungen zu treffen und zu wissen, wie Sie am besten alle Ihre Nutzer unterstützen können.

## Funktionen bedeuten nicht identisches Erscheinungsbild

Eine Website kann in allen Browsern nicht identisch aussehen. Einige Ihrer Nutzer werden die Seite auf einem Telefon ansehen, andere auf einem großen Desktop-Bildschirm. Ebenso werden einige Ihrer Nutzer eine alte Browserversion haben, und andere die neueste. Einige Ihrer Nutzer hören sich möglicherweise Ihre Inhalte von einem Bildschirmleser vorlesen, während andere möglicherweise auf der Seite zoomen müssen, um sie lesen zu können. Alle zu unterstützen bedeutet, eine Version Ihrer Inhalte bereitzustellen, die defensiv gestaltet ist, sodass sie auf modernen Browsern großartig aussieht, aber auf allen Geräten, auf denen Ihre Inhalte aufgerufen werden, auf grundlegender Ebene nutzbar bleibt.

Ein grundlegendes Maß an Unterstützung kommt von der guten Strukturierung Ihrer Inhalte, damit der normale Fluss Ihrer Seite sinnvoll ist. Für Nutzer mit einem begrenzten Datentarif sind ihre Browser möglicherweise so eingestellt, dass sie keine Bilder, Schriftarten oder sogar Ihr CSS laden. Dennoch sollten die Inhalte so präsentiert werden, dass sie auch dann zugänglich und lesbar sind, wenn diese Elemente nicht vollständig geladen sind. Ein gut strukturiertes HTML-Dokument sollte immer Ihr Ausgangspunkt sein. Fragen Sie sich: _Wenn Sie Ihr Stylesheet entfernen, machen Ihre Inhalte immer noch Sinn?_

Es macht keinen kommerziellen Sinn, Zeit damit zu verbringen, jedem eine identische Erfahrung auf Ihrer Webseite bieten zu wollen. Dies liegt daran, dass Nutzerumgebungen stark variieren und sich Ihrer Kontrolle entziehen können. Es gibt ein Gleichgewicht, das Sie zwischen einer einfachen HTML-Seite und einer voll funktionsfähigen Website finden müssen. Es ist hilfreich, eine einfache, CSS-lose Ansicht Ihrer Seite zu testen, um sicherzustellen, dass die Ausweichmöglichkeit Ihrer Seite zugänglich ist. Diese Ausweichmöglichkeit wird möglicherweise nie von Menschen mit sehr alten oder eingeschränkten Browsern gesehen, könnte aber von Ihrer Hauptzielgruppe — Nutzern moderner Browser — aufgerufen werden, wenn ihr Browser oder ihre Internetverbindung vorübergehend versagt. CSS vereinfacht das Erstellen dieser Ausweichszenarien. Daher ist es besser, sich auf das zu konzentrieren, was Sie kontrollieren können, das heißt, nehmen Sie sich die Zeit, Ihre Website [zugänglich](/de/docs/Web/Accessibility) zu machen und somit mehr Nutzern zu dienen.

## Erstellung von Fallbacks in CSS

CSS-Spezifikationen enthalten Informationen, die erklären, was der Browser tut, wenn zwei ähnliche Methoden wie Layout-Methoden auf dasselbe Element angewendet werden. Beispielsweise definieren sie, was passiert, wenn ein Element gefloatet ist und gleichzeitig ein Grid-Element und Teil einer CSS-Grid-Container ist. Es gibt auch eine Definition dafür, was passiert, wenn ein Element sowohl die Eigenschaften {{cssxref("margin-top")}} als auch {{cssxref("margin-block-start")}} gesetzt hat.

Wenn ein Browser eine neue Funktion nicht erkennt, verwirft er die Deklaration als ungültig [ohne einen Fehler auszulösen](/de/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors). Da Browser CSS-Eigenschaften und -Werte verwerfen, die sie nicht unterstützen, können alte und neue Werte im selben Regelset koexistieren. Stellen Sie nur sicher, dass Sie den alten Wert vor dem neuen erklären, sodass, wenn unterstützt, der neue den alten Wert überschreibt (die Ausweichmöglichkeit).

Zum Beispiel unterstützen die meisten Browser die Zwei-Werte-Syntax der {{cssxref("display")}}-Eigenschaft. Wenn ein Browser dies nicht tut, wird er die ältere Ein-Wert-Syntax verwenden.

```css
.container {
  display: inline-flex;
  display: inline flex;
}
```

Ebenso stellt dieses [Fehler-Handling](/de/docs/Web/CSS/CSS_syntax/Error_handling#vendor_prefixes) sicher, dass alte CSS-Codebasen weiterhin funktionieren, auch wenn veraltete {{Glossary("Vendor_Prefix", "vendor-prefixed")}} Funktionen nicht mehr unterstützt werden. Obwohl das Verwenden von Vendor-Präfixen nicht mehr häufig vorkommt, falls Sie eine vendor-präfixierte Eigenschaft oder einen Wert einfügen müssen, stellen Sie sicher, dass Sie den Präfixwert vor dem Standardwert erklären, sodass, wenn unterstützt, der neue Wert den Ausweichwert überschreibt.

### Verwenden neuer Selektoren

Das Einfügen neuer Selektoren, die nicht in allen Browsern unterstützt werden, muss sorgfältiger gehandhabt werden. Wenn ein Selektor in einer durch Kommas getrennten Liste von [Selektoren ungültig ist](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#selector_support), wird der gesamte Stilblock ignoriert.

Wenn vendor-präfixierte [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) oder neue [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) verwendet werden, die ein Browser möglicherweise noch nicht unterstützt, fügen Sie die präfixierten Werte in eine [nachsichtige Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) ein, indem Sie {{cssxref(":is", ":is()")}} oder {{cssxref(":where", ":where()")}} verwenden, damit der gesamte Selektorblock nicht [ungültig wird und ignoriert](/de/docs/Web/CSS/Selector_list#invalid_selector_list) wird.

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

Im obigen Beispiel wird der `.valid`-Inhalt `sans-serif` aber nicht `red` sein.

## Funktionsabfragen

Funktionsabfragen ermöglichen Ihnen zu testen, ob ein Browser eine bestimmte CSS-Funktion unterstützt. Das bedeutet, dass Sie einige CSS für Browser schreiben können, die eine bestimmte Funktion nicht unterstützen, dann prüfen, ob der Browser die Unterstützung hat, und wenn ja, Ihre neuen Funktionen verwenden.

Wir können eine Funktionsabfrage hinzufügen, um die `subgrid`-Unterstützung zu testen und basierend auf dieser Unterstützung Stile bereitzustellen:

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

Funktionsabfragen werden in allen modernen Browsern unterstützt. Schreiben Sie Ihr CSS für voll unterstützte Eigenschaften zuerst, außerhalb von Funktionsabfragen. Sobald Ihre Website für alle Benutzer nutzbar und zugänglich ist, fügen Sie neue Funktionen innerhalb von Funktionsabfrageblöcken hinzu. Browser, die die abgefragte Funktion unterstützen, können dann das neuere CSS innerhalb des Funktionsabfrageblocks darstellen. Verwenden Sie den Ansatz, gut unterstütztes CSS zuerst zu schreiben und dann Funktionen basierend auf der Unterstützung zu erweitern.

## Testen älterer Browser

Ein Weg ist die Verwendung eines Online-Testtools wie Sauce Labs, wie im [Testen](/de/docs/Learn_web_development/Extensions/Testing) Modul beschrieben.

## Zusammenfassung

Sie haben jetzt das Wissen, um Fallback-CSS für ältere Browser bereitzustellen und sicher neue Funktionen zu testen. Sie sollten jetzt zuversichtlich in der Nutzung neuer Techniken sein, die möglicherweise auftreten.

Nachdem Sie nun unsere Artikel zum CSS-Layout durchgearbeitet haben, ist es Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu testen: [Grundlegendes Layoutverständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension).

## Siehe auch

- [`@supports`](/de/docs/Web/CSS/@supports) At-Regel
- [CSS At-Regeln](/de/docs/Web/CSS/At-rule)
- [Verwendung von Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
