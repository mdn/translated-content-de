---
title: Unterstützung älterer Browser
slug: Learn/CSS/CSS_layout/Supporting_Older_Browsers
l10n:
  sourceCommit: 11bc346854854636796fe7fb9274ed2c094dcf53
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}

Besucher Ihrer Website könnten Nutzer umfassen, die entweder ältere Browser verwenden oder Browser nutzen, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiges Szenario im Web, da neue Funktionen kontinuierlich zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung für diese Funktionen, da verschiedene Browser dazu neigen, unterschiedliche Funktionen zu priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken nutzen können, um sicherzustellen, dass Ihre Website auch für Benutzer mit älterer Technologie zugänglich bleibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">Styling von Boxen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Sie Ihre Layouts in älteren Browsern unterstützen können,
        die möglicherweise nicht die gewünschten Funktionen unterstützen.
      </td>
    </tr>
  </tbody>
</table>

## Wie sieht die Browser-Landschaft für Ihre Webseite aus?

Jede Website ist unterschiedlich in Bezug auf ihre Zielgruppe. Bevor Sie sich für einen Ansatz entscheiden, sollten Sie herausfinden, wie viele Besucher Ihrer Website ältere Browser verwenden. Dies ist einfach, wenn Sie eine bestehende Website erweitern oder ersetzen, da Sie wahrscheinlich Analysen haben, die Ihnen die verwendete Technologie Ihrer Besucher mitteilen können. Wenn Sie keine Analysen haben oder eine brandneue Website starten, können Seiten wie [Statcounter](https://gs.statcounter.com/) relevante Statistiken liefern, die nach Standort gefiltert werden können.

Sie sollten auch die Art der Geräte und die Art und Weise, wie Menschen Ihre Website nutzen, berücksichtigen. Beispielsweise können Sie eine überdurchschnittliche Nutzung Ihrer Website auf mobilen Geräten erwarten. Priorisieren Sie immer die Zugänglichkeit und Menschen, die unterstützende Technologie benutzen; für einige Websites kann dies noch wichtiger sein. Entwickler machen sich oft sehr Sorgen über das Erlebnis von 1% der Nutzer, während sie die weitaus größere Anzahl übersehen, die Barrierefreiheit benötigt.

## Was ist die Unterstützung für die Funktionen, die Sie verwenden möchten?

{{Compat}}

Die obige Tabelle ist auf jeder Seite zu einer Funktion unter der Rubrik "Browserkompatibilität" enthalten. Nachdem Sie die Browser identifiziert haben, die Ihre Seitenbesucher verwenden, können Sie die Technologie, die Sie verwenden möchten, daraufhin bewerten, wie gut sie über Browser unterstützt wird und wie einfach Sie eine Alternative für Besucher bereitstellen können, die diese Technologie nicht verfügbar haben.

Auf MDN bieten wir Browserkompatibilitätsinformationen auf jeder CSS-Eigenschaften-Seite an. Diese Kompatibilitätsinformationen werden in einer Tabelle präsentiert und beinhalten eine Liste der wichtigsten Browser und die Versionen, die begonnen haben, die Eigenschaft zu unterstützen. Die Browsernamen nehmen die Spaltenüberschriften ein. Sehen Sie sich zum Beispiel die obige Tabelle oder die Seite für {{cssxref("grid-template-columns")}} an, mit besonderem Augenmerk auf die Werte `subgrid` (zuletzt unterstützt) und `masonry` (experimentell und nicht unterstützt).

Diese Tabellen zur Browserkompatibilität liefern Informationen darüber, welche Browser mit der Technologie kompatibel sind, die Sie suchen, und ab welcher Version der Browser diese Funktion unterstützt. Informationen zur Kompatibilität von Browsern und mobilen Browsern werden separat angezeigt.

Eine weitere beliebte Möglichkeit, sich über die Unterstützung einer Funktion zu informieren, ist die Website [Can I Use](https://caniuse.com/). Diese Seite listet die meisten Funktionen der Webplattform mit Informationen über deren Browserunterstützungsstatus auf. Sie können Nutzungsstatistiken nach Standort anzeigen – nützlich, wenn Sie an einer Website arbeiten, die vorwiegend Nutzer aus einem bestimmten Gebiet der Welt hat. Sie können sogar Ihr Google-Analytics-Konto verknüpfen, um eine Analyse basierend auf Ihren Benutzerdaten zu erhalten.

Das Verständnis der Technologie, die Ihre Nutzer aufgrund des verwendeten Browsers haben, und die plattformübergreifende Unterstützung für Funktionen, die Sie auf Ihrer Website verwenden möchten, versetzt Sie in die Lage, alle Ihre Entscheidungen zu treffen und zu wissen, wie Sie alle Ihre Nutzer am besten unterstützen können.

## Funktionsunterstützung bedeutet nicht identisches Erscheinungsbild

Eine Website kann in allen Browsern nicht gleich aussehen. Einige Ihrer Nutzer werden die Seite auf einem Telefon betrachten, andere auf einem großen Desktop-Bildschirm. Ebenso werden einige Ihrer Nutzer eine alte Browserversion und andere den neuesten Browser haben. Einige Ihrer Nutzer hören möglicherweise, wie Ihr Inhalt von einem Screenreader vorgelesen wird, während andere möglicherweise die Seite vergrößern müssen, um sie lesen zu können. Alle zu unterstützen bedeutet, eine Version Ihres Inhalts bereitzustellen, die defensiv gestaltet ist, sodass sie in modernen Browsern großartig aussieht, aber auf einer grundlegenden Ebene für alle Nutzer nutzbar bleibt, unabhängig davon, wie sie auf Ihren Inhalt zugreifen.

Ein grundlegendes Unterstützungsniveau ergibt sich aus einer guten Strukturierung Ihres Inhalts, sodass der normale Fluss Ihrer Seite sinnvoll ist. Für Nutzer mit einem begrenzten Datentarif laden ihre Browser möglicherweise keine Bilder, Schriftarten oder gar Ihr CSS. Der Inhalt sollte jedoch so präsentiert werden, dass er auch dann zugänglich und lesbar ist, wenn diese Elemente nicht vollständig geladen sind. Ein gut strukturiertes HTML-Dokument sollte immer Ihr Ausgangspunkt sein. Fragen Sie sich: _Ergibt Ihr Inhalt auch ohne das Stylesheet noch Sinn?_

Es ist aus kommerzieller Sicht nicht sinnvoll, Zeit damit zu verbringen, jedem Nutzer ein identisches Erlebnis Ihrer Website zu bieten. Dies liegt daran, dass die Benutzerumgebungen stark variieren können und außerhalb Ihrer Kontrolle liegen. Es gibt ein Gleichgewicht, das Sie zwischen einer einfachen HTML-Seite und einer voll ausgestatteten Website finden müssen. Es ist hilfreich, eine einfache, CSS-lose Ansicht Ihrer Seite zu testen, um sicherzustellen, dass die Fallback-Erfahrung Ihrer Seite zugänglich ist. Dieses Fallback wird möglicherweise nie von Personen in sehr alten oder eingeschränkten Browsern angezeigt, kann aber von Ihrer Hauptzielgruppe – Nutzern moderner Browser – gesehen werden, wenn deren Browser oder Internetverbindung vorübergehend ausfällt. CSS vereinfacht die Erstellung dieser Fallbacks. Deshalb ist es besser, sich darauf zu konzentrieren, was Sie kontrollieren können, das heißt, die Zeit darauf zu verwenden, Ihre Seite [zugänglich](/de/docs/Web/Accessibility) zu machen und somit mehr Nutzern zu dienen.

## Erstellen von Fallbacks in CSS

CSS-Spezifikationen enthalten Informationen darüber, was der Browser tut, wenn zwei ähnliche Funktionen, wie Layoutmethoden, auf dasselbe Element angewendet werden. Zum Beispiel definieren sie, was passiert, wenn ein Element gefloatet und gleichzeitig ein Grid-Element und Teil eines CSS-Grid-Containers ist. Es gibt auch eine Definition dafür, was passiert, wenn ein Element sowohl {{cssxref("margin-top")}} als auch {{cssxref("margin-block-start")}} Eigenschaften hat.

Wenn ein Browser eine neue Funktion nicht erkennt, verwirft er die Deklaration als ungültig [ohne einen Fehler zu werfen](/de/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors). Da Browser CSS-Eigenschaften und Werte, die sie nicht unterstützen, verwerfen, können sowohl alte als auch neue Werte im selben Regel-Satz koexistieren. Stellen Sie nur sicher, dass Sie den alten Wert vor dem neuen Wert deklarieren, damit, wenn unterstützt, der neue Wert den alten überschreibt (das Fallback).

Zum Beispiel unterstützen die meisten Browser die Zwei-Wert-Syntax der {{cssxref("display")}}-Eigenschaft. Wenn ein Browser dies nicht tut, wird die ältere Ein-Wert-Syntax verwendet.

```css
.container {
  display: inline-flex;
  display: inline flex;
}
```

In ähnlicher Weise stellt diese [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling#vendor_prefixes) sicher, dass alte CSS-Codebasen weiterhin funktionieren, auch wenn veraltete {{glossary("Vendor_Prefix", "vendor-spezifische")}} Merkmale nicht mehr unterstützt werden. Auch wenn Vendor-Präfixe nicht mehr häufig verwendet werden, sollten Sie, falls erforderlich, sicherstellen, dass Sie den prefixed Wert vor dem Standardwert deklarieren, damit, wenn unterstützt, der neue Wert den Fallback-Wert überschreibt.

### Verwendung neuer Selektoren

Das Einfügen neuer Selektoren, die nicht in allen Browsern unterstützt werden, muss vorsichtiger gehandhabt werden. Wenn ein Selektor in einer durch Kommas getrennten Liste von [Selektoren ungültig ist](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#selector_support), wird der gesamte Stilblock ignoriert.

Wenn Sie Vendor-präfixierte [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) oder neue [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) verwenden, die ein Browser möglicherweise noch nicht unterstützt, schließen Sie die präfixierten Werte innerhalb einer [fehlertoleranten Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) ein, indem Sie {{cssxref(":is", ":is()")}} oder {{cssxref(":where", ":where()")}} verwenden, sodass der gesamte Selektorblock nicht [ungültig wird und ignoriert wird](/de/docs/Web/CSS/Selector_list#invalid_selector_list).

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

In dem obigen Beispiel wird der `.valid` Inhalt `sans-serif` sein, aber nicht `red`.

## Funktionsabfragen

Funktionsabfragen ermöglichen es Ihnen zu testen, ob ein Browser eine bestimmte CSS-Funktion unterstützt. Das bedeutet, dass Sie etwas CSS für Browser schreiben können, die eine bestimmte Funktion nicht unterstützen, und dann prüfen können, ob der Browser diese Funktion unterstützt, um dann Ihre schicken neuen Funktionen einzufügen.

Wir können eine Funktionsabfrage hinzufügen, um die Unterstützung von `subgrid` zu testen und basierend darauf Stile bereitzustellen:

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

Funktionsabfragen werden in allen modernen Browsern unterstützt. Schreiben Sie Ihr CSS für vollständig unterstützte Funktionen zuerst, außerhalb von Funktionsabfragen. Sobald Ihre Website für alle Nutzer nutzbar und zugänglich ist, fügen Sie neue Funktionen innerhalb von Funktionsabfrageblöcken hinzu. Browser, die die abgefragte Funktion unterstützen, können das neuere CSS innerhalb des Funktionsabfrageblocks rendern. Verwenden Sie den Ansatz, zuerst gut unterstütztes CSS zu schreiben und dann Funktionen basierend auf der Unterstützung zu verbessern.

## Testen älterer Browser

Eine Möglichkeit ist die Verwendung eines Online-Testtools wie Sauce Labs, wie im Modul [Cross browser testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) beschrieben.

## Zusammenfassung

Sie haben nun das Wissen, um Fallback-CSS für ältere Browser bereitzustellen und neue Funktionen sicher zu testen. Sie sollten sich nun sicher fühlen, neue Techniken zu verwenden, die möglicherweise auftauchen.

Nachdem Sie unsere Artikel über CSS-Layout durchgearbeitet haben, ist es an der Zeit, Ihre Kenntnisse mit unserer Bewertung für das Modul zu testen: [Grundlegendes Layoutverständnis](/de/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension).

## Siehe auch

- [`@supports`](/de/docs/Web/CSS/@supports) At-Regel
- [CSS At-Regeln](/de/docs/Web/CSS/At-rule)
- [Verwendung von Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}
