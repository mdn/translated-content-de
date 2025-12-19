---
title: Unterstützung älterer Browser
slug: Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

Besucher Ihrer Website können Benutzer sein, die entweder ältere Browser nutzen oder Browser verwenden, die die von Ihnen implementierten CSS-Features nicht unterstützen. Dies ist ein häufiges Szenario im Web, wo kontinuierlich neue Features zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung dieser Features, da verschiedene Browser dazu tendieren, unterschiedlichen Features Priorität bei der Implementierung einzuräumen. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken nutzen können, um sicherzustellen, dass Ihre Website auch für Benutzer mit älteren Technologien zugänglich bleibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >), und ein Verständnis dafür, wie CSS funktioniert (studieren Sie die
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgebung</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie Sie Unterstützung für Ihre Layouts in älteren Browsern bieten können, die möglicherweise nicht die gewünschten Features unterstützen.
      </td>
    </tr>
  </tbody>
</table>

## Wie ist die Browser-Landschaft Ihrer Website?

Jede Website ist in Bezug auf ihr Zielpublikum unterschiedlich. Bevor Sie sich für eine Vorgehensweise entscheiden, sollten Sie herausfinden, wie viele Besucher Ihre Seite mit älteren Browsern aufrufen. Dies ist einfach, wenn Sie eine vorhandene Website ergänzen oder ersetzen, da Sie wahrscheinlich über Analysedaten verfügen, die Ihnen die Technologie Ihrer Besucher anzeigen können. Wenn Sie keine Analysen haben oder eine völlig neue Website starten, können Seiten wie [Statcounter](https://gs.statcounter.com/) relevante Statistiken bereitstellen, die nach Standort gefiltert werden können.

Sie sollten auch die Art der Geräte und die Art und Weise berücksichtigen, wie Menschen Ihre Seite nutzen. Beispielsweise können Sie eine höhere als durchschnittliche Nutzung Ihrer Website auf mobilen Geräten erwarten. Zum Beispiel können Sie eine höhere als durchschnittliche Nutzung Ihrer Website auf mobilen Geräten erwarten. Priorisieren Sie immer die Barrierefreiheit und Personen, die assistive Technologien nutzen; für einige Seiten kann dies sogar noch wichtiger sein. Entwickler sind oft sehr besorgt über die Erfahrung von 1 % der Benutzer, während sie eine viel größere Anzahl von Benutzern mit Barrierefreiheit Bedürfnissen übersehen.

## Wie steht es um die Unterstützung der von Ihnen gewünschten Features?

{{Compat}}

Die obige Tabelle ist am Ende jeder Feature-Seite im Abschnitt "Browser-Kompatibilität" enthalten. Nachdem Sie identifiziert haben, welche Browser Ihre Seitenbesucher verwenden, können Sie jede Technologie, die Sie verwenden möchten, dahingehend bewerten, wie gut sie von den verschiedenen Browsern unterstützt wird und wie einfach Sie eine Alternative für Besucher bereitstellen können, die diese Technologie nicht zur Verfügung haben.

Auf MDN bieten wir Browser-Kompatibilitätsinformationen auf jeder CSS-Eigenschaftsseite an. Diese Kompatibilitätsinformationen, die in einer Tabelle präsentiert werden, enthalten eine Liste der wichtigsten Browser zusammen mit den Versionen, die begonnen haben, die Eigenschaft zu unterstützen. Die Browsernamen sind in den Spaltenüberschriften enthalten. Beispielsweise werfen Sie einen Blick auf die obige Tabelle oder auf die Seite für {{cssxref("grid-template-columns")}}, wobei Sie dem `subgrid`-Wert (am meisten unterstützt) und den `masonry`-Werten (experimentell und nicht unterstützt) besondere Aufmerksamkeit widmen.

Diese Browser-Kompatibilitätstabellen bieten Informationen darüber, welche Browser mit der von Ihnen benötigten Technologie kompatibel sind und ab welcher Version der Browser diese Funktionalität unterstützt. Browser- und Mobiltelefon-Browser-Kompatibilitätsinformationen werden separat angezeigt.

Eine weitere beliebte Möglichkeit, herauszufinden, wie gut ein Feature unterstützt wird, ist die Website [Can I Use](https://caniuse.com/). Diese Seite listet die Mehrheit der Webplattform-Features mit Informationen über ihren Browser-Support-Status auf. Sie können Nutzungsstatistiken nach Standort anzeigen - nützlich, wenn Sie an einer Seite arbeiten, die hauptsächlich Benutzer aus einer bestimmten Region der Welt hat. Sie können sogar Ihr Google Analytics-Konto verknüpfen, um Analysen basierend auf Ihren Nutzerdaten zu erhalten.

Das Verständnis der Technologie, die Ihre Benutzer aufgrund des von ihnen verwendeten Browsers haben, und der plattformübergreifenden Unterstützung für Funktionen, die Sie auf Ihrer Website verwenden möchten, versetzt Sie in eine gute Position, um alle Ihre Entscheidungen zu treffen und zu wissen, wie Sie alle Ihre Benutzer am besten unterstützen können.

## Funktionsunterstützung bedeutet nicht identisches Erscheinungsbild

Eine Website kann in allen Browsern nicht gleich aussehen. Einige Ihrer Benutzer werden die Seite auf einem Telefon ansehen und andere auf einem großen Desktop-Bildschirm. Ebenso werden einige Ihrer Benutzer eine alte Browserversion haben, und andere den neuesten Browser. Einige Ihrer Benutzer hören möglicherweise, wie Ihr Inhalt ihnen von einem Bildschirmleser vorgelesen wird, während andere möglicherweise auf der Seite vergrößern müssen, um sie lesen zu können. Wenn Sie alle Benutzer unterstützen möchten, bedeutet das, eine Version Ihres Inhalts bereitzustellen, die defensiv gestaltet ist, sodass sie in modernen Browsern gut aussieht, aber auf grundlegender Ebene für alle Benutzer nutzbar bleibt, unabhängig davon, wie sie auf Ihren Inhalt zugreifen.

Unterstützung auf einer grundlegenden Ebene kommt von der guten Strukturierung Ihres Inhalts, sodass der normale Fluss Ihrer Seite sinnvoll ist. Für Benutzer, die einen eingeschränkten Datentarif haben, laden ihre Browser möglicherweise keine Bilder, Schriften oder sogar Ihr CSS. Der Inhalt sollte jedoch so präsentiert werden, dass er zugänglich und lesbar ist, selbst wenn diese Elemente nicht vollständig geladen sind. Ein gut strukturiertes HTML-Dokument sollte immer Ihr Ausgangspunkt sein. Fragen Sie sich selbst: _Ergibt mein Inhalt noch Sinn, wenn ich mein Stylesheet entferne?_

Es macht kommerziell keinen Sinn, Zeit damit zu verbringen, jedem ein identisches Erlebnis Ihrer Website zu bieten. Dies liegt daran, dass die Benutzerumgebungen stark variieren können und außerhalb Ihrer Kontrolle liegen. Sie müssen ein Gleichgewicht finden zwischen einer einfachen HTML-Seite und einer vollständig ausgestatteten Website. Es ist hilfreich, eine einfache, CSS-freie Ansicht Ihrer Seite zu testen, um sicherzustellen, dass das Fallback-Erlebnis Ihrer Seite zugänglich ist. Dieses Fallback wird möglicherweise nie von Menschen gesehen, die sehr alte oder eingeschränkte Browser verwenden, kann jedoch von Ihrem Hauptzielpublikum - Benutzern moderner Browser - gesehen werden, wenn ihr Browser oder ihre Internetverbindung vorübergehend ausfällt. CSS vereinfacht das Erstellen dieser Fallbacks. Es ist daher besser, sich auf das zu konzentrieren, was Sie kontrollieren können, nämlich die Zeit zu investieren, um Ihre Seite [zugänglich](/de/docs/Web/Accessibility) zu machen, und so mehr Benutzer zu erreichen.

## Erstellen von Fallbacks in CSS

CSS-Spezifikationen enthalten Informationen, die erklären, was der Browser macht, wenn zwei ähnliche Features, wie Layout-Methoden, auf dasselbe Element angewendet werden. Beispielsweise definieren sie, was passiert, wenn ein Element gefloatet wird und gleichzeitig ein Gitterelement ist und Teil eines CSS-Gittercontainers ist. Es gibt auch eine Definition dafür, was passiert, wenn ein Element sowohl {{cssxref("margin-top")}} als auch {{cssxref("margin-block-start")}} Eigenschaften gesetzt hat.

Wenn ein Browser ein neues Feature nicht erkennt, verwirft er die Deklaration als ungültig [ohne einen Fehler auszuwerfen](/de/docs/Web/CSS/Guides/Syntax/Error_handling#css_parser_errors). Da Browser CSS-Eigenschaften und -Werte, die sie nicht unterstützen, verwerfen, können alte und neue Werte im gleichen Regelset nebeneinander bestehen. Stellen Sie einfach sicher, dass Sie den alten Wert vor dem neuen Wert deklarieren, damit der neue Wert beim Vorhandensein den alten Wert überschreibt (das Fallback).

Zum Beispiel unterstützen die meisten Browser die Zwei-Wert-Syntax der {{cssxref("display")}} Eigenschaft. Wenn ein Browser dies nicht tut, verwendet er die ältere, einewertige Syntax.

```css
.container {
  display: inline-flex;
  display: inline flex;
}
```

Ebenso stellt diese [Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling#vendor_prefixes) sicher, dass alte CSS-Codebasen weiterhin funktionieren, auch wenn veraltete {{Glossary("Vendor_Prefix", "herstellerpräfixierte")}} Features nicht mehr unterstützt werden. Während Herstellerpräfixe heutzutage nicht mehr häufig verwendet werden, sollten Sie, wenn Sie ein herstellerpräfixiertes Feature oder einen Wert einschließen müssen, sicherstellen, dass Sie den präfixierten Wert vor dem Standardwert deklarieren, damit der neue Wert beim Vorhandensein den Fallback-Wert überschreibt.

### Verwendung neuer Selektoren

Die Einbeziehung neuer Selektoren, die nicht in allen Browsern unterstützt werden, muss sorgfältiger gehandhabt werden. Wenn ein Selektor in einer komma-getrennten Liste von [Selektoren ungültig ist](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#selector_support), wird der gesamte Stilblock ignoriert.

Wenn Sie herstellerpräfixierte [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) oder neue [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) verwenden, die ein Browser möglicherweise noch nicht unterstützt, schließen Sie die präfigierten Werte in eine [verzeihende Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) ein, indem Sie {{cssxref(":is", ":is()")}} oder {{cssxref(":where", ":where()")}} verwenden, damit der gesamte Selektorblock nicht [ungültig und ignoriert](/de/docs/Web/CSS/Reference/Selectors/Selector_list#invalid_selector_list) wird.

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

## Feature-Abfragen

Feature-Abfragen ermöglichen es Ihnen zu testen, ob ein Browser ein bestimmtes CSS-Feature unterstützt. Das bedeutet, dass Sie einige CSS für Browser schreiben können, die ein bestimmtes Feature nicht unterstützen, dann prüfen, ob der Browser Unterstützung hat, und wenn ja, Ihre neuen Features anwenden können.

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

{{EmbedLiveSample('Feature_queries', '100%', '200')}}

Feature-Abfragen werden in allen modernen Browsern unterstützt. Schreiben Sie Ihr CSS zuerst für vollständig unterstützte Features, außerhalb jeglicher Feature-Abfragen. Sobald Ihre Seite für alle Benutzer benutzbar und zugänglich ist, fügen Sie neue Features innerhalb von Feature-Abfrage-Blöcken hinzu. Browser, die das abgefragte Feature unterstützen, können dann das neuere CSS innerhalb des Feature-Abfrage-Blocks rendern. Verwenden Sie den Ansatz, gut unterstütztes CSS zuerst zu schreiben und dann Features basierend auf der Unterstützung zu erweitern.

## Testen älterer Browser

Eine Möglichkeit besteht darin, ein Online-Testtool wie Sauce Labs zu verwenden, wie im [Testen](/de/docs/Learn_web_development/Extensions/Testing) Modul beschrieben.

## Zusammenfassung

Sie haben nun das Wissen, um Fallback-CSS für ältere Browser bereitzustellen und neue Features sicher zu testen. Sie sollten sich jetzt sicher fühlen, neue Techniken zu nutzen, die möglicherweise kommen werden.

Nachdem Sie nun unsere Artikel zu CSS-Layout durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu testen: [Grundlegendes Layout-Verständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension).

## Siehe auch

- {{cssxref("@supports")}} Regel
- [CSS-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Verwenden von Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
