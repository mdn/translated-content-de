---
title: Unterstützung älterer Browser
slug: Learn/CSS/CSS_layout/Supporting_Older_Browsers
l10n:
  sourceCommit: 11bc346854854636796fe7fb9274ed2c094dcf53
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}

Besucher Ihrer Website können Nutzer sein, die entweder ältere Browser verwenden oder Browser, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiges Szenario im Internet, da kontinuierlich neue Funktionen zu CSS hinzugefügt werden. Browser unterscheiden sich in der Unterstützung dieser Funktionen, da verschiedene Browser dazu neigen, unterschiedliche Funktionen zu priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken einsetzen können, um sicherzustellen, dass Ihre Website für Benutzer mit älterer Technologie zugänglich bleibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und ein Verständnis davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">Boxen gestalten</a>).
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

## Wie sieht die Browserlandschaft für Ihre Seite aus?

Jede Website ist in Bezug auf ihr Zielpublikum unterschiedlich. Bevor Sie einen Ansatz wählen, sollten Sie herausfinden, wie viele Besucher Ihrer Seite ältere Browser verwenden. Dies ist unkompliziert, wenn Sie eine bestehende Website ergänzen oder ersetzen, da Sie wahrscheinlich über Analysen verfügen, die Ihnen die verwendete Technologie Ihrer Besucher aufzeigen. Wenn Sie keine Analysen haben oder eine brandneue Seite starten, können Seiten wie [Statcounter](https://gs.statcounter.com/) relevante Statistiken liefern, die nach Standort gefiltert werden können.

Sie sollten auch die Art der Geräte und die Nutzung Ihrer Seite berücksichtigen. Erwarten Sie beispielsweise eine überdurchschnittliche Nutzung Ihrer Website auf mobilen Geräten? Priorisieren Sie immer die Barrierefreiheit und Menschen mit unterstützender Technologie; für einige Seiten kann dies noch wichtiger sein. Entwickler sorgen sich oft sehr um das Erlebnis von 1% der Benutzer, während sie die weitaus größere Anzahl mit Barrierefreiheitsanforderungen übersehen.

## Wie ist die Unterstützung für die Funktionen, die Sie verwenden möchten?

{{Compat}}

Die obige Tabelle wird auf jeder Funktionsseite am Ende unter dem Abschnitt "Browser-Kompatibilität" aufgenommen. Nachdem Sie die Browser identifiziert haben, die Ihre Seitenbesucher verwenden, können Sie bewerten, wie gut die Technologie, die Sie verwenden möchten, über verschiedene Browser hinweg unterstützt wird und wie einfach Sie eine Alternative für Besucher bereitstellen können, die diese Technologie nicht nutzen können.

Auf MDN stellen wir Informationen zur Browser-Kompatibilität auf jeder CSS-Eigenschaftsseite bereit. Diese Kompatibilitätsinformationen, präsentiert in einer Tabelle, enthalten eine Liste der wichtigsten Browser sowie die Versionen, mit denen die Unterstützung der Eigenschaft begonnen wurde. Die Browsernamen nehmen die Spaltenüberschriften ein. Schauen Sie sich zum Beispiel die obige Tabelle oder die Seite für {{cssxref("grid-template-columns")}} an, mit besonderem Augenmerk auf die `subgrid` (zuletzt unterstützte) und `masonry` (experimentell und nicht unterstützt) Werte.

Diese Browser-Kompatibilitätstabellen bieten Informationen darüber, welche Browser mit der von Ihnen gesuchten Technologie kompatibel sind und ab welcher Version der Browser diese Funktionalität unterstützte. Informationen zur Kompatibilität von Browsern und mobilen Telefonbrowsern werden separat angezeigt.

Eine weitere beliebte Methode, um herauszufinden, wie gut eine Funktion unterstützt wird, ist die Website [Can I Use](https://caniuse.com/). Diese Seite listet die Mehrheit der Funktionen der Webplattform mit Informationen zum Status ihrer Browserunterstützung auf. Sie können Nutzungsstatistiken nach Standort anzeigen — nützlich, wenn Sie an einer Seite arbeiten, die hauptsächlich Nutzer aus einem bestimmten Gebiet der Welt hat. Sie können sogar Ihr Google Analytics-Konto verknüpfen, um Analysen basierend auf Ihren Benutzerdaten zu erhalten.

Das Verständnis der Technologie, die Ihre Benutzer haben, aufgrund des von ihnen verwendeten Browsers und die browserübergreifende Unterstützung für Funktionen, die Sie möglicherweise auf Ihrer Website verwenden möchten, versetzt Sie in eine gute Lage, alle Ihre Entscheidungen zu treffen und zu wissen, wie Sie am besten alle Ihre Benutzer unterstützen können.

## Die Unterstützung von Funktionen bedeutet nicht identisches Aussehen

Eine Website kann in allen Browsern unmöglich gleich aussehen. Einige Ihrer Benutzer werden die Seite auf einem Telefon betrachten, andere auf einem großen Desktop-Bildschirm. Ebenso werden einige Ihrer Benutzer eine alte Browserversion haben und andere die neueste. Einige Ihrer Benutzer hören Ihre Inhalte möglicherweise über einen Bildschirmleser, während andere die Seite vergrößern müssen, um sie lesen zu können. Alle Nutzenden zu unterstützen bedeutet, eine Version Ihrer Inhalte bereitzustellen, die defensiv gestaltet ist, sodass sie in modernen Browsern großartig aussieht, aber auf einer grundlegenden Ebene für alle Benutzer unabhängig davon nutzbar bleibt, wie sie auf Ihre Inhalte zugreifen.

Ein grundlegendes Maß an Unterstützung ergibt sich aus der guten Strukturierung Ihrer Inhalte, sodass der normale Fluss Ihrer Seite Sinn ergibt. Für Benutzer mit einem begrenzten Datentarif können ihre Browser möglicherweise keine Bilder, Schriften oder sogar Ihr CSS laden. Der Inhalt sollte jedoch in einer Weise präsentiert werden, dass er zugänglich und lesbar ist, selbst wenn diese Elemente nicht vollständig geladen werden. Ein gut strukturiertes HTML-Dokument sollte immer Ihr Ausgangspunkt sein. Fragen Sie sich: _Wenn Sie Ihr Stylesheet entfernen, macht Ihr Inhalt dann immer noch Sinn?_

Es macht keinen kommerziellen Sinn, Zeit damit zu verbringen, jedem ein identisches Erlebnis Ihrer Website zu bieten. Dies liegt daran, dass sich Benutzerumgebungen stark unterscheiden und Ihrer Kontrolle entzogen sind. Es ist ein Gleichgewicht zwischen einer einfachen HTML-Seite und einer voll ausgestatteten Website zu finden. Es ist hilfreich, eine einfache, CSS-lose Ansicht Ihrer Seite zu testen, um sicherzustellen, dass die Fallback-Erfahrung Ihrer Seite zugänglich ist. Dieses Fallback wird möglicherweise nie von Personen mit sehr alten oder eingeschränkten Browsern betrachtet, könnte aber von Ihrer Hauptzielgruppe — Nutzern moderner Browser — betrachtet werden, wenn ihr Browser oder ihre Internetverbindung vorübergehend ausfällt. CSS vereinfacht die Erstellung dieser Fallbacks. Daher ist es besser, sich auf das zu konzentrieren, was Sie kontrollieren können, d. h. die Zeit aufzuwenden, um Ihre Seite [zugänglich](/de/docs/Web/Accessibility) zu machen und so mehr Nutzern zu dienen.

## Fallbacks in CSS erstellen

CSS-Spezifikationen enthalten Informationen, die erklären, was der Browser tut, wenn zwei ähnliche Funktionen, wie Layoutmethoden, auf dasselbe Element angewendet werden. Zum Beispiel definieren sie, was passiert, wenn ein Element gefloatet ist und gleichzeitig ein Grid-Element und Teil eines CSS-Grid-Containers ist. Es gibt auch eine Definition dafür, was passiert, wenn ein Element sowohl die Eigenschaften {{cssxref("margin-top")}} als auch {{cssxref("margin-block-start")}} gesetzt hat.

Wenn ein Browser ein neues Feature nicht erkennt, verwirft er die Deklaration als ungültig [ohne einen Fehler auszulösen](/de/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors). Da Browser CSS-Eigenschaften und -Werte, die sie nicht unterstützen, verwerfen, können sowohl alte als auch neue Werte im selben Regelwerk koexistieren. Achten Sie darauf, den alten Wert vor dem neuen Wert zu deklarieren, damit der neue Wert, wenn er unterstützt wird, den alten Wert (das Fallback) überschreibt.

Zum Beispiel unterstützen die meisten Browser die Zwei-Wert-Syntax der {{cssxref("display")}}-Eigenschaft. Wenn ein Browser dies nicht tut, verwendet er die ältere, einwertige Syntax.

```css
.container {
  display: inline-flex;
  display: inline flex;
}
```

Ähnlich sorgt dieses [Fehlerbehandlungsverfahren](/de/docs/Web/CSS/CSS_syntax/Error_handling#vendor_prefixes) dafür, dass alte CSS-Codebasen weiterhin funktionieren, selbst wenn veraltete [Browser-Vendor-Präfixe](/de/docs/Glossary/Vendor_Prefix) nicht mehr unterstützt werden. Während Vendor-Präfixe nicht mehr häufig verwendet werden, sollten Sie, falls Sie ein solches Präfix oder einen Wert hinzufügen müssen, darauf achten, den präfixierten Wert vor dem Standardwert zu deklarieren, sodass, wenn unterstützt, der neue Wert den Fallback-Wert überschreibt.

### Neue Selektoren verwenden

Das Einfügen neuer Selektoren, die nicht in allen Browsern unterstützt werden, muss sorgfältiger gehandhabt werden. Wenn ein Selektor in einer kommagetrennten Liste von [Selektoren ungültig ist](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#selector_support), wird der gesamte Stilblock ignoriert.

Wenn Sie veraltete [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) oder neue [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) verwenden, die ein Browser möglicherweise noch nicht unterstützt, sollten Sie die präfixierten Werte in eine [nachsichtige Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) einfügen, indem Sie {{cssxref(":is", ":is()")}} oder {{cssxref(":where", ":where()")}} verwenden, damit der gesamte Selektorblock nicht [ungültig wird und ignoriert wird](/de/docs/Web/CSS/Selector_list#invalid_selector_list).

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

Im obigen Beispiel wird der `.valid` Inhalt `sans-serif`, aber nicht `red` sein.

## Feature-Abfragen

Feature-Abfragen ermöglichen es Ihnen zu testen, ob ein Browser eine bestimmte CSS-Funktion unterstützt. Dies bedeutet, dass Sie einige CSS für Browser schreiben können, die eine bestimmte Funktion nicht unterstützen, und dann überprüfen, ob der Browser die Unterstützung bietet und, wenn ja, Ihre neuen Funktionen hinzufügen.

Wir können eine Feature-Abfrage hinzufügen, um die `subgrid`-Unterstützung zu testen und basierend auf dieser Unterstützung Stile bereitzustellen:

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

Feature-Abfragen werden in allen modernen Browsern unterstützt. Schreiben Sie Ihr CSS für vollständig unterstützte Funktionen zuerst, außerhalb von Feature-Abfragen. Sobald Ihre Seite für alle Benutzer nutzbar und zugänglich ist, fügen Sie neue Funktionen innerhalb von Feature-Abfrageblöcken hinzu. Browser, die das angeforderte Feature unterstützen, können dann das neuere CSS innerhalb des Feature-Abfrageblocks rendern. Verwenden Sie den Ansatz, gut unterstütztes CSS zuerst zu schreiben und dann Funktionen basierend auf der Unterstützung zu erweitern.

## Testen älterer Browser

Eine Möglichkeit besteht darin, ein Online-Testtool wie Sauce Labs zu verwenden, wie im [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing)-Modul beschrieben.

## Zusammenfassung

Sie verfügen nun über das Wissen, um Fallback-CSS für ältere Browser bereitzustellen und neue Funktionen sicher zu testen. Sie sollten sich jetzt sicher fühlen, neue Techniken anzuwenden, die möglicherweise aufkommen.

Nachdem Sie unsere Artikel zu CSS-Layout durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu testen: [Grundlegendes Verständnis von Layouts](/de/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension).

## Siehe auch

- [`@supports`](/de/docs/Web/CSS/@supports) At-Regel
- [CSS-At-Regeln](/de/docs/Web/CSS/At-rule)
- [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}
