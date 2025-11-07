---
title: Unterstützung älterer Browser
slug: Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die Besucher Ihrer Website können Benutzer umfassen, die entweder ältere Browser verwenden oder Browser nutzen, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiges Szenario im Web, da ständig neue Funktionen zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung für diese Funktionen, weil sie tendenziell unterschiedliche Prioritäten bei der Implementierung haben. In diesem Artikel wird erklärt, wie Sie als Webentwickler moderne Webtechniken nutzen können, um sicherzustellen, dass Ihre Website auch für Benutzer mit älterer Technologie zugänglich bleibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >), und ein Verständnis dafür, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Sie Unterstützung für Ihre Layouts in älteren Browsern bereitstellen können, die die gewünschten Funktionen möglicherweise nicht unterstützen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist die Browser-Landschaft Ihrer Website?

Jede Website ist in Bezug auf ihre Zielgruppe unterschiedlich. Bevor Sie sich für einen Ansatz entscheiden, sollten Sie herausfinden, wie viele Besucher Ihre Website mit älteren Browsern besuchen. Dies ist einfach, wenn Sie eine bestehende Website erweitern oder ersetzen, da Sie wahrscheinlich Analysen verfügbar haben, die Ihnen die Technologie zeigen, die Ihre Besucher nutzen. Wenn Sie keine Analysen haben oder eine brandneue Website starten, können Websites wie [Statcounter](https://gs.statcounter.com/) relevante Statistiken liefern, die nach Standort gefiltert werden können.

Sie sollten auch den Gerätetyp und die Art der Nutzung Ihrer Website in Betracht ziehen. Beispielsweise können Sie eine überdurchschnittlich hohe Nutzung Ihrer Website auf mobilen Geräten erwarten. Priorisieren Sie immer die Barrierefreiheit und Benutzer, die unterstützende Technologien verwenden; für einige Websites kann dies sogar noch kritischer sein. Entwickler machen sich oft sehr viele Gedanken über das Erlebnis von 1% der Benutzer, während sie die weitaus größere Zahl übersehen, die Barrierefreiheitsbedürfnisse hat.

## Wie ist die Unterstützung für die Funktionen, die Sie verwenden möchten?

{{Compat}}

Die obige Tabelle ist am Ende jeder Funktionsseite unter dem Abschnitt "Browser-Kompatibilität" enthalten. Nachdem Sie die Browser identifiziert haben, die Ihre Website-Besucher verwenden, können Sie die Technologie, die Sie verwenden möchten, in Bezug auf die Unterstützung in verschiedenen Browsern beurteilen und wie einfach Sie eine Alternative für Besucher bereitstellen können, die diese Technologie nicht zur Verfügung haben.

Auf MDN bieten wir Informationen zur Browserkompatibilität auf jeder CSS-Eigenschaftsseite an. Diese Kompatibilitätsinformationen, die in einer Tabelle dargestellt sind, enthalten eine Liste der wichtigsten Browser zusammen mit den Versionen, die begonnen haben, die Eigenschaft zu unterstützen. Die Browsernamen sind in den Spaltenüberschriften angegeben. Schauen Sie sich zum Beispiel die obenstehende Tabelle oder die Seite für {{cssxref("grid-template-columns")}} an, mit besonderem Augenmerk auf die Werte `subgrid` (kürzlich unterstützt) und `masonry` (experimentell und nicht unterstützt).

Diese Tabellen zur Browserkompatibilität bieten Informationen darüber, welche Browser mit der Technologie, die Sie suchen, kompatibel sind und ab welcher Version der Browser diese Funktionalität unterstützt hat. Informationen zur Kompatibilität von Browsern und Mobiltelefon-Browsern werden separat angezeigt.

Eine weitere beliebte Möglichkeit, herauszufinden, wie gut eine Funktion unterstützt wird, bietet die Website [Can I Use](https://caniuse.com/). Diese Website listet die meisten Funktionen der Web-Plattform mit Informationen über deren Browserunterstützungsstatus auf. Sie können Nutzungsstatistiken nach Standort anzeigen — nützlich, wenn Sie an einer Website arbeiten, die hauptsächlich für einen bestimmten Bereich der Welt Benutzer hat. Sie können sogar Ihr Google Analytics-Konto verknüpfen, um eine Analyse basierend auf Ihren Nutzerdaten zu erhalten.

Das Verständnis der Technologie, die Ihre Benutzer aufgrund des von ihnen verwendeten Browsers haben, und die browserübergreifende Unterstützung für Funktionen, die Sie möglicherweise auf Ihrer Website verwenden möchten, versetzt Sie in eine gute Position, um alle Entscheidungen zu treffen und zu wissen, wie Sie am besten alle Ihre Benutzer unterstützen können.

## Feature-Unterstützung bedeutet nicht identisches Aussehen

Eine Website kann in allen Browsern unmöglich gleich aussehen. Einige Ihrer Benutzer werden die Website auf einem Telefon betrachten, andere auf einem großen Desktop-Bildschirm. Ebenso werden einige Ihrer Benutzer eine alte Browserversion haben, andere die neueste. Einige Ihrer Benutzer könnten den Inhalt von einem Bildschirmleser vorgelesen bekommen, während andere möglicherweise die Seite vergrößern müssen, um sie lesen zu können. Jeden zu unterstützen bedeutet, eine Version Ihres Inhalts bereitzustellen, die definsiv gestaltet ist, damit sie in modernen Browsern großartig aussieht, aber auf einem grundlegenden Niveau für alle Benutzer nutzbar bleibt, egal wie sie auf Ihren Inhalt zugreifen.

Ein grundlegendes Maß an Unterstützung ergibt sich aus der guten Strukturierung Ihres Inhalts, sodass der normale Fluss Ihrer Seite sinnvoll ist. Für Benutzer mit einem begrenzten Datenvolumenplan könnten ihre Browser keine Bilder, Schriftarten oder sogar Ihr CSS laden. Der Inhalt sollte dennoch in einer Weise präsentiert werden, dass er zugänglich und lesbar ist, selbst wenn diese Elemente nicht vollständig geladen werden. Ein gut strukturiertes HTML-Dokument sollte immer Ihr Ausgangspunkt sein. Fragen Sie sich: _Ergibt Ihr Inhalt noch Sinn, wenn Sie Ihr Stylesheet entfernen?_

Es macht wirtschaftlich keinen Sinn, Zeit damit zu verbringen, allen ein identisches Erlebnis Ihrer Website zu bieten. Dies liegt daran, dass Benutzerumgebungen stark variieren und außerhalb Ihrer Kontrolle liegen können. Es gibt einen Balanceakt zwischen einer einfachen HTML-Seite und einer voll ausgestatteten Website. Es ist hilfreich, eine schlichte, CSS-lose Ansicht Ihrer Website zu testen, um sicherzustellen, dass das Fallback-Erlebnis Ihrer Site zugänglich ist. Dieses Fallback wird möglicherweise nie von Benutzern sehr alter oder eingeschränkter Browser gesehen, könnte aber von Ihrer Hauptzielgruppe — Benutzern moderner Browser — gesehen werden, wenn ihr Browser oder ihre Internetverbindung vorübergehend ausfällt. CSS vereinfacht die Erstellung dieser Fallbacks. Daher ist es besser, sich auf das zu konzentrieren, was Sie kontrollieren können, nämlich die Zeit zu investieren, um Ihre Site [zugänglich](/de/docs/Web/Accessibility) zu machen, und dadurch mehr Benutzer zu erreichen.

## Erstellen von Fallbacks in CSS

CSS-Spezifikationen enthalten Informationen, die erklären, was der Browser tut, wenn zwei ähnliche Funktionen, wie Layout-Methoden, auf dasselbe Element angewendet werden. Zum Beispiel definieren sie, was passiert, wenn ein Element gefloatet ist und zugleich ein Gitterelement und Teil eines CSS-Gittercontainers ist. Es gibt auch eine Definition dafür, was passiert, wenn ein Element sowohl {{cssxref("margin-top")}} als auch {{cssxref("margin-block-start")}} Eigenschaften gesetzt hat.

Wenn ein Browser eine neue Funktion nicht erkennt, verwirft er die Deklaration als ungültig [ohne einen Fehler zu werfen](/de/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors). Da Browser CSS-Eigenschaften und -Werte, die sie nicht unterstützen, verwerfen, können alte und neue Werte im selben Regelsatz koexistieren. Stellen Sie einfach sicher, dass Sie den alten Wert vor dem neuen Wert deklarieren, damit der neue Wert, wenn er unterstützt wird, den alten (das Fallback) überschreibt.

Zum Beispiel unterstützen die meisten Browser die Zwei-Werte-Syntax der {{cssxref("display")}}-Eigenschaft. Wenn ein Browser dies nicht tut, verwendet er die ältere Ein-Wert-Syntax.

```css
.container {
  display: inline-flex;
  display: inline flex;
}
```

Ebenso stellt diese [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling#vendor_prefixes) sicher, dass alte CSS-Codebasen weiterhin funktionieren, selbst wenn veraltete {{Glossary("Vendor_Prefix", "Anbieter-präfixierte")}} Funktionen nicht mehr unterstützt werden. Während Anbieter-Präfixierung nicht mehr häufig verwendet wird, sollten Sie, wenn Sie ein Anbieter-präfixiertes Eigentum oder einen Wert einfügen müssen, sicherstellen, dass Sie den präfixierten Wert vor dem Standardwert deklarieren, damit der neue Wert, wenn er unterstützt wird, den Fallback-Wert überschreibt.

### Neue Selektoren verwenden

Das Einfügen neuer Selektoren, die nicht in allen Browsern unterstützt werden, erfordert eine sorgfältigere Behandlung. Wenn ein Selektor in einer kommagetrennten Liste von [Selektoren ungültig ist](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#selector_support), wird der gesamte Stilblock ignoriert.

Wenn Sie Anbieter-präfixierte [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) oder neue [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) verwenden, die ein Browser möglicherweise noch nicht unterstützt, fügen Sie die präfixierten Werte innerhalb einer [fehlertoleranten Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) mithilfe von {{cssxref(":is", ":is()")}} oder {{cssxref(":where", ":where()")}} hinzu, damit der gesamte Selektorblock nicht [ungültig gemacht und ignoriert wird](/de/docs/Web/CSS/Reference/Selectors/Selector_list#invalid_selector_list).

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

Im obigen Beispiel wird der Inhalt `.valid` `sans-serif`, aber nicht `red` sein.

## Feature-Anfragen

Feature-Anfragen erlauben es Ihnen, zu testen, ob ein Browser eine bestimmte CSS-Funktion unterstützt. Das bedeutet, dass Sie etwas CSS für Browser schreiben können, die eine bestimmte Funktion nicht unterstützen, dann prüfen können, ob der Browser die Unterstützung hat, und falls ja, Ihre aufregend neuen Funktionen einfügen können.

Wir können eine Feature-Anfrage hinzufügen, um die Unterstützung von `subgrid` zu testen und darauf basierende Stile bereitzustellen:

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

Feature-Anfragen werden in allen modernen Browsern unterstützt. Schreiben Sie Ihr CSS für vollständig unterstützte Funktionen zuerst, außerhalb von Feature-Anfragen. Sobald Ihre Site für alle Benutzer nutzbar und zugänglich ist, fügen Sie neue Funktionen innerhalb von Feature-Anfrageblöcken hinzu. Browser, die die abgefragte Funktion unterstützen, können dann das neuere CSS innerhalb des Feature-Anfrageblocks rendern. Verwenden Sie den Ansatz, gut unterstütztes CSS zuerst zu schreiben und dann Funktionen basierend auf der Unterstützung zu erweitern.

## Ältere Browser testen

Eine Möglichkeit ist die Verwendung eines Onlinetest-Tools wie Sauce Labs, wie im [Testen](/de/docs/Learn_web_development/Extensions/Testing) Modul beschrieben.

## Zusammenfassung

Sie haben nun das Wissen, um Fallback-CSS für ältere Browser bereitzustellen und neue Funktionen sicher zu testen. Sie sollten sich jetzt sicher fühlen, neue Techniken einzusetzen, die möglicherweise auftauchen.

Nachdem Sie unsere Artikel zu CSS-Layouts durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu überprüfen: [Grundlegendes Layoutverständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension).

## Siehe auch

- [`@supports`](/de/docs/Web/CSS/Reference/At-rules/@supports) At-rule
- [CSS At-regeln](/de/docs/Web/CSS/CSS_syntax/At-rules)
- [Verwendung von Feature-Anfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
