---
title: Experimentelle Funktionen in Firefox
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 7baa0a6df12656aedfa81824c4afb51452ce5618
---

{{FirefoxSidebar}}

Diese Seite listet experimentelle und teilweise implementierte Funktionen in Firefox auf, einschließlich solcher für vorgeschlagene oder hochmoderne Webplattform-Standards, zusammen mit Informationen über die Build-Versionen, in denen sie vorhanden sind, ob sie "standardmäßig" aktiviert sind oder nicht, und welche _Preference_ verwendet werden kann, um sie zu aktivieren oder zu deaktivieren. Dies ermöglicht es Ihnen, die Funktionen zu testen, bevor sie veröffentlicht werden.

Neue Funktionen erscheinen zuerst im [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) Build, wo sie oft standardmäßig aktiviert sind. Sie gelangen später dann zur [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) und schließlich zum Release-Build. Nachdem eine Funktion standardmäßig im Release-Build aktiviert ist, wird sie nicht mehr als experimentell betrachtet und sollte aus dem Thema entfernt werden.

Experimentelle Funktionen können mit dem [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) (geben Sie `about:config` in die Firefox-Adressleiste ein) aktiviert oder deaktiviert werden, indem die unten aufgeführte zugehörige _Preference_ geändert wird.

> [!NOTE]
> Für Redakteure - bitte versuchen Sie beim Hinzufügen von Funktionen zu diesen Tabellen, einen Link zu dem relevanten Bug oder den relevanten Bugs mit `[Firefox bug <number>](https://bugzil.la/<number>)` einzufügen.

## HTML

### Autokorrektur von editierbaren Textelementen

Das HTML-[`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) Attribut (und die entsprechende [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) Eigenschaft) ermöglicht die Autokorrektur in editierbaren Textelementen, einschließlich: den meisten Typen von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut gesetzt haben ([Firefox bug 1725806](https://bugzil.la/1725806)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>134</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>134</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>134</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>134</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>dom.forms.autocorrect</code></td>
    </tr>
  </tbody>
</table>

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch hat ein Suchfeld ein Löschen-Symbol, sobald jemand darin zu tippen beginnt, um andere Browserimplementierungen zu entsprechen. (Siehe [Firefox bug 558594](https://bugzil.la/558594) für weitere Details.)

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>81</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>81</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>81</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>81</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.forms.input-type-search.enabled</code></td>
    </tr>
  </tbody>
</table>

### Umschalten der Passwortanzeige

HTML-Passwort-Eingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Element/input/password)) beinhalten ein "Augen"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox bug 502258](https://bugzil.la/502258)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>96</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>96</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>96</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>96</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.forms.reveal-password-button.enabled</code></td>
    </tr>
  </tbody>
</table>

### Nur-Text contenteditable Modus

Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jede Formatierung im eingefügten Text wird automatisch entfernt. (Siehe [Firefox bug 1922723](https://bugzil.la/1922723) für weitere Details.)

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>133</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>133</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>133</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>133</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>dom.element.contenteditable.plaintext-only.enabled</code></td>
    </tr>
  </tbody>
</table>

## CSS

### Hex-Boxen zur Darstellung von Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc), außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`), als eine Hex-Box, wenn sie unerwartet sind. (Siehe [Firefox bug 1099557](https://bugzil.la/1099557) für weitere Details.)

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>43</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>43</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>43</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>43</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2">
        <code>layout.css.control-characters.enabled</code> oder
        <code>layout.css.control-characters.visible</code>
      </td>
    </tr>
  </tbody>
</table>

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und erlaubt es Ihnen, festzulegen, wie abgesetzte, gehobene und abgesenkte Initialbuchstaben dargestellt werden. (Siehe [Firefox bug 1223880](https://bugzil.la/1223880) für weitere Details.)

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>50</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>50</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>50</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>50</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.initial-letter.enabled</code></td>
    </tr>
  </tbody>
</table>

### Einzelne Zahlen als Seitenverhältnis in Media Queries

Unterstützung für die Verwendung einer einzelnen {{cssxref("number")}} als {{cssxref("ratio")}} bei der Angabe des Seitenverhältnisses für eine [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries). (Siehe [Firefox bug 1565562](https://bugzil.la/1565562) für weitere Details.)

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>70</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>70</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>70</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>70</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.aspect-ratio-number.enabled</code></td>
    </tr>
  </tbody>
</table>

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion, wie sie auf {{cssxref("width")}} und andere Größenangaben angewendet wird. Diese Funktion wird bereits für die CSS-Grid-Layout-Spurgrößenbestimmung gut unterstützt. (Siehe [Firefox bug 1312588](https://bugzil.la/1312588) für weitere Details.)

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>91</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>91</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>91</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>91</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.fit-content-function.enabled</code></td>
    </tr>
  </tbody>
</table>

### Scrollgetriebene Animationen

Früher "scroll-verknüpfte Animationen" genannt, hängt eine scrollgetriebene Animation von der Scrollposition einer Bildlaufleiste statt von der Zeit oder einer anderen Dimension ab. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) ermöglichen es Ihnen zu bestimmen, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine scrollgetriebene Animation verwendet werden kann. Die Scrolling-Timeline kann dann durch Setzen der {{cssxref('animation-timeline')}} Eigenschaft auf den Namen, der mit `scroll-timeline-name` definiert ist, mit einer [Animation](/de/docs/Web/CSS/CSS_animations) verbunden werden.

Bei der Verwendung der {{cssxref('scroll-timeline')}} Kurzschreibweise muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Langschreibweise und Kurzschreibweise sind beide hinter der Preference verfügbar.

Sie können alternativ die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzuzeigen, dass eine Scrollachse in einem Vorfahrenelement für die Timeline verwendet wird.

Für weitere Informationen siehe [Firefox bug 1807685](https://bugzil.la/1807685), [Firefox bug 1804573](https://bugzil.la/1804573), [Firefox bug 1809005](https://bugzil.la/1809005), [Firefox bug 1676791](https://bugzil.la/1676791), [Firefox bug 1754897](https://bugzil.la/1754897), und [Firefox bug 1737918](https://bugzil.la/1737918).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>110</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>110</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>110</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>110</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### @scope At-Regel

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, spezifische Kind-Elemente auszuwählen, ohne die Spezifität von CSS-Selektoren übermäßig zu erhöhen ([Firefox bug 1886441](https://bugzil.la/1886441)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.at-scope.enabled</code></td>
    </tr>
  </tbody>
</table>

### font-variant-emoji Eigenschaft

Die CSS [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) Eigenschaft ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen. Siehe ([Firefox bug 1461589](https://bugzil.la/1461589)) für weitere Details.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>108</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>108</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>108</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>108</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.font-variant-emoji.enabled</code></td>
    </tr>
  </tbody>
</table>

### prefers-reduced-transparency Medienfunktion

Die CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienfunktion ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, die Menge an transparenten oder durchsichtigen Schichteffekten auf seinem Gerät zu minimieren. Siehe ([Firefox bug 1736914](https://bugzil.la/1736914)) für weitere Details.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>113</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>113</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>113</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>113</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.prefers-reduced-transparency.enabled</code></td>
    </tr>
  </tbody>
</table>

### inverted-colors Medienfunktion

Die CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Medienfunktion ermöglicht es Ihnen zu erkennen, ob ein Benutzer-Agent oder das zugrundeliegende Betriebssystem die Farben invertiert. Siehe ([Firefox bug 1794628](https://bugzil.la/1794628)) für weitere Details.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>114</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>114</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>114</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>114</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.inverted-colors.enabled</code></td>
    </tr>
  </tbody>
</table>

### Benannte View-Progress-Timelines Eigenschaft

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben und zu identifizieren, dass sein Vorfahrelement das Quellenelement einer View-Progress-Timeline ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines Vorfahrens bewegt. Siehe ([Firefox bug 1737920](https://bugzil.la/1737920)) für weitere Details.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>114</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>114</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>114</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>114</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### Anonyme View-Progress-Timelines Funktion

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion ermöglicht es Ihnen festzulegen, dass die `animation-timeline` für ein Element eine View-Progress-Timeline ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt. Die Funktion definiert die Achse des Elternelements, das die Timeline liefert, zusammen mit dem Versatz innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und endet. Siehe ([Firefox bug 1808410](https://bugzil.la/1808410)) für weitere Details.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>114</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>114</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>114</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>114</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### Anbieterpräfixe für Transform-Eigenschaften

Die `-moz-` Präfixe der [CSS transform](/de/docs/Web/CSS/CSS_transforms) Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Präferenz auf `false` gesetzt wird. Ziel ist es, diese zu deaktivieren, sobald die standardmäßigen CSS-zoom-Eigenschaften gut unterstützt werden. ([Firefox bug 1886134](https://bugzil.la/1886134), [Firefox bug 1855763](https://bugzil.la/1855763)).

Diese Präferenz deaktiviert insbesondere die folgenden Eigenschaftspräfixe:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>120</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>120</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>120</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>120</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2">
      <code>layout.css.prefixes.transforms</code>
    </td>
    </tr>
  </tbody>
</table>

### UA-Stile für `<h1>` verschachtelt in Abschnittselementen

Die `<h1>`-Überschrift verringert jetzt nicht die Schriftgröße, wenn sie innerhalb von [Abschnittselementen](/de/docs/Web/HTML/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` geschachtelt ist. Die UA-Stile für `<h1>`, die innerhalb von Abschnittselementen geschachtelt sind, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox bug 1883896](https://bugzil.la/1883896)).

> [!NOTE]
> Die Präferenz für diese Funktion wirkt in umgekehrter Weise: Sie ist auf `false` im Nightly Build gesetzt, wodurch die UA-Stilierung für Überschriften, die in Abschnittselementen geschachtelt sind, entfernt wird. Sie ist auf `true` in allen anderen Kanälen gesetzt, die die bestehende UA-Stilierung für die verschachtelten Überschriften beibehalten.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>125</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>125</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>125</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>125</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2">
        <code>layout.css.h1-in-section-ua-styles.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### `shape()` Funktion

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, mit dem Sie eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften unter Verwendung eines oder mehrerer "Formbefehle" definieren können. Diese Befehle sind den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ist in mancher Hinsicht der `{{cssxref("basic-shape/path","path()")}}` Funktion ähnlich, aber im Gegensatz zu `path()`, das die [SVG-Pfad-Syntax](/de/docs/Web/SVG/Element/path) verwendet, verwendet `shape()` die Standard-CSS-Syntax. Dies ermöglicht es Ihnen, Formen einfach zu erstellen und zu bearbeiten und auch die Verwendung von CSS-Mathematischen Funktionen zu ermöglichen. Für weitere Details, siehe [Firefox bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path`, und [Firefox bug 1884425](https://bugzil.la/1884425) für deren Interpolationsunterstützung.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>126</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>126</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>126</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>126</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.basic-shape-shape.enabled</code></td>
    </tr>
  </tbody>
</table>

### `@starting-style` At-Regel

Die CSS [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel ermöglicht es Ihnen, die Anfangsstile eines Elements für eine CSS-Transition festzulegen, wenn das Element keinen Standard-Anfangsstil hat. Dies ist besonders nützlich für Elemente, die beim ersten Zeichnen nicht sichtbar sind, wie [`popover`](/de/docs/Web/HTML/Global_attributes/popover) oder ['dialog'](/de/docs/Web/HTML/Element/dialog). Unterstützt noch nicht die Animation von `display: none`. Für weitere Details, siehe [Firefox bug 1834876](https://bugzil.la/1834876) und [Firefox bug 1834877](https://bugzil.la/1834877).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>127</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>127</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>127</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>127</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.starting-style-at-rules.enabled</code></td>
    </tr>
  </tbody>
</table>

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft verteilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beide Seiten jedes Zeichens. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei gemischtrichtungstext [Firefox bug 1891446](https://bugzil.la/1891446).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>128</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>128</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>127</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>127</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.letter-spacing.model</code></td>
    </tr>
  </tbody>
</table>

### Unterstützung für `calc()` Farbekanal in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann jetzt Farbekanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) analysieren, sodass Sie Änderungen an Farben in verschiedenen Farbmodellen oder beim Verwenden verschiedener funktionaler Notationen korrekt berechnen können [Firefox bug 1889561](https://bugzil.la/1889561).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>127</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>127</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>127</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>127</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.relative-color-syntax.enabled</code></td>
    </tr>
  </tbody>
</table>

### CSS Ankerpositionierung

Das [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definiert eine Reihe von Funktionen, die es ermöglichen, Elemente als Ankerelemente zu definieren und andere Elemente relativ zu diesen Ankerelementen zu positionieren. Dies ermöglicht es beispielsweise, Tooltips neben dem zugehörigen Inhalt anzuzeigen, während es durch den Ansichtshafen scrollt, sich nach Bedarf bewegt, wenn es über den Ansichtshafen hinausgeht, und verschwindet, wenn der Anker aus dem Bildausschnitt verschwindet. Die Funktionalitäten werden sukzessive hinter einer Präferenz eingeführt ([Firefox bug 1838746](https://bugzil.la/1838746)).

Die implementierten Teile umfassen:

- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) und [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>131</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>131</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>131</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>131</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.anchor-positioning.enabled</code></td>
    </tr>
  </tbody>
</table>

### :has-slotted Pseudo-Klasse

Die {{CSSXRef(":has-slotted")}} [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalt zu einem {{HTMLElement("slot")}} Element hinzufügen, wenn ein [Webkomponente](/de/docs/Web/API/Web_components) gerendert wird ([Firefox bug 1921747](https://bugzil.la/1921747)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>133</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>133</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>133</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>133</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>layout.css.has-slotted-selector.enabled</code></td>
    </tr>
  </tbody>
</table>

## SVG

### SVGPathSeg APIs

Die SVGPathSeg APIs werden entfernt und hinter einer Präferenz platziert. Dazu gehören: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/de/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`. (Siehe [Firefox bug 1388931](https://bugzil.la/1388931) für weitere Details.)

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Entfernte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>dom.svg.pathSeg.enabled</code></td>
    </tr>
  </tbody>
</table>

## JavaScript

### Intl.DurationFormat

{{jsxref("Intl.DurationFormat")}} ermöglicht das formatieren von Zeiträumen in Abhängigkeit von der Lokale. ([Firefox bug 1648139](https://bugzil.la/1648139)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>134</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>134</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>134</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>134</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2">NA</td>
    </tr>
  </tbody>
</table>

### JSON.parse mit Source

Der [`JSON.parse` Source Text Access Proposal](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von [`JSON.parse`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) und bietet Funktionen zur Minderung von Problemen beim Präzisionsverlust bei der Umwandlung von Werten wie große Fließkommazahlen und Datumswerte zwischen JavaScript-Werten und JSON-Text. ([Firefox bug 1913085](https://bugzil.la/1913085), [Firefox bug 1925334](https://bugzil.la/1925334)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Preference-Name</th>
      <td colspan="2"><code>javascript.options.experimental.json_parse_with_source</code></td>
    </tr>
  </tbody>
</table>

## APIs

### Cookie Store API

Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}} basierende Methode zur Verwaltung von Cookies, die den Event-Loop nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (daher kann sie für [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ein Teil der Cookie Store API wurde implementiert ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dazu gehören:

- Die [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle, wobei `partitioned` nicht in den Rückgabewerten enthalten ist.
- Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) Schnittstelle, ohne `partitioned` Eigenschaften.
- Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) Eigenschaft.
- Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) Eigenschaft.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>132</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.cookieStore.enabled</code></td>
    </tr>
  </tbody>
</table>

### CloseWatcher Schnittstelle

Integrierte Webkomponenten mit "open" und "close"-Semantik, wie Modaldialoge und Popovers, können mit gerätenativen Mechanismen geschlossen werden.
Zum Beispiel können Sie auf Android einen Dialog mit der Zurück-Taste schließen.
Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, UI-Komponenten wie benutzerdefinierte Seitenleisten zu implementieren, die ähnlich mit nativen Mechanismen geschlossen werden können.
([Firefox-Bug 1888729](https://bugzil.la/1888729)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>132</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>132</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.closewatcher.enabled</code></td>
    </tr>
  </tbody>
</table>

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe genutzt werden können, nur mit Daten aufgerufen werden können, die validiert oder bereinigt wurden.

> [!NOTE]
> Zum Zeitpunkt des Schreibens wurde nicht genug von der API implementiert, um sie effektiv testen zu können.
> Diese Anmerkung wird entfernt, sobald sie bereit ist.

Es wurde ein Teil der API implementiert:

- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory):
  - [`getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType) und [`getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType) ([Firefox-Bug 1917783](https://bugzil.la/1917783), [Firefox-Bug 1917784](https://bugzil.la/1917784)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>133</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>133</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>133</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>133</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.security.trusted_types.enabled</code></td>
    </tr>
  </tbody>
</table>

### Grafik: Canvas, WebGL und WebGPU

#### Hit-Bereiche

Ob sich die Mauskoordinaten in einem bestimmten Bereich auf dem Canvas befinden, ist eine häufig zu lösende Aufgabe. Die Hit-Bereichs-API ermöglicht es Ihnen, einen Bereich Ihres Canvas zu definieren und bietet eine weitere Möglichkeit, interaktive Inhalte auf einem Canvas für Barrierefreiheitstools verfügbar zu machen.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>30</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>30</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>30</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>30</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>canvas.hitregions.enabled</code></td>
    </tr>
  </tbody>
</table>

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, werden alle derzeit getesteten WebGL-Erweiterungen im "Entwurfs"-Status zur Verwendung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene für die Durchführung von Berechnungen und Grafik-Rendering mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Fortschritte zu dieser API finden Sie im [Firefox-Bug 1602129](https://bugzil.la/1602129).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>113</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>73</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>73</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>73</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.webgpu.enabled</code></td>
    </tr>
  </tbody>
</table>

### Reporting API-Unterstützung für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt jetzt das Reporten von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Verstößen.

[`Report`](/de/docs/Web/API/Report)-Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können jetzt einen `type` Wert von `"csp-violation"` und eine `body`-Eigenschaft enthalten, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält.
Dies ermöglicht es, CSP-Verstöße innerhalb einer Webseite zu melden.

CSP-Verstoßberichte können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}}-Direktive benannt wurden — Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwort-Headern definiert werden.
Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report)-Objekts, mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, der die CSP {{CSP("report-uri")}}-Direktive verwendet, um die URL des Meldepunkts festzulegen, und ein [CSP-spezifisches JSON-Verstoßberichtformat](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri#violation_report_syntax) verwendet.
([Firefox-Bug 1391243](https://bugzil.la/1391243)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>130</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>130</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>130</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>130</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.reporting.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensource-Buffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie in [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>62</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>62</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>62</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>62</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>media.mediasource.experimental.enabled</code></td>
    </tr>
  </tbody>
</table>

#### AVIF-Konformitätsstrenge

Die `image.avif.compliance_strictness`-Präferenz kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) Bildern angewendet wird.
Damit können Firefox-Nutzer Bilder anzeigen, die in einigen anderen Browsern gerendert werden, selbst wenn sie nicht vollständig konform sind.

Erlaubte Werte sind:

- `0`: Bilder mit Verstößen gegen die Spezifikation in Empfehlungen ("sollte"-Sprache) und Anforderungen ("muss"-Sprache) akzeptieren, sofern sie sicher oder unmissverständlich interpretiert werden können.
- `1` (Standard): Verstöße gegen Anforderungen zurückweisen, aber Verstöße gegen Empfehlungen zulassen.
- `2`: Strikt. Alle Verstöße gegen Anforderungen oder Empfehlungen zurückweisen.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardwert</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>image.avif.compliance_strictness</code></td>
    </tr>
  </tbody>
</table>

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/)-Bilder, wenn diese Funktion aktiviert ist. Weitere Details finden Sie in [Firefox-Bug 1539075](https://bugzil.la/1539075).

Beachten Sie, dass die Funktion, wie unten angegeben, nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist oder nicht).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>90</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>image.jxl.enabled</code></td>
    </tr>
  </tbody>
</table>

### OpenFont COLRv1 Schriftarten

Diese Funktion bietet Unterstützung für die [OpenFont COLRv1 Schriftartenspezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/).
Dies ermöglicht das Laden von kompressionsfreundlichen, farbigen Vektorschriftarten mit Gradienten, Komposition und Mischen mit der CSS [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel oder der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API).
Weitere Details finden Sie im [Firefox-Bug 1740530](https://bugzil.la/1740530).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>105</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>105</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>105</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>105</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>gfx.font_rendering.colr_v1.enabled</code></td>
    </tr>
  </tbody>
</table>

### CSS Custom Highlight API

Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bietet einen Mechanismus zum Stylen beliebiger Textranges in einem Dokument (verallgemeinert das Verhalten anderer Highlight-Pseudo-Elemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}}).
Die Ranges werden in JavaScript unter Verwendung von [`Range`](/de/docs/Web/API/Range)-Instanzen definiert, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind und dann mit einem Namen unter Verwendung von [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registriert werden.
Das CSS [`::highlight`](/de/docs/Web/CSS/::highlight) Pseudo-Element wird verwendet, um Stile auf ein registriertes Highlight anzuwenden.
Weitere Details finden Sie im [Firefox-Bug 1703961](https://bugzil.la/1703961).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>117</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>117</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>117</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>117</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.customHighlightAPI.enabled</code></td>
    </tr>
  </tbody>
</table>

### Service Worker

#### Preloading von Service-Worker-Ressourcen bei Navigation

Die [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) Schnittstelle kann verwendet werden, um das Preloading von Ressourcen beim Navigieren zu einer Seite zu aktivieren.
Das Preloading erfolgt parallel zum Start des Workers, wodurch die Gesamtzeit von Start der Navigation bis zum Abrufen der Ressourcen reduziert wird.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>99</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.serviceWorkers.navigationPreload.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung.
Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version entfernt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>98</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>98</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>98</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>98</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.vr.enabled</code></td>
    </tr>
  </tbody>
</table>

### HTML DOM API

#### Auswahl über die Grenze des Shadow DOMs hinweg

Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um ein Array aus [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zu erhalten, die den aktuellen ausgewählten Bereich oder die Bereiche darstellen.
Im Gegensatz zu [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) kann diese Methode Bereiche mit Anker- oder Fokus-Knoten innerhalb eines Shadow DOM zurückgeben, aber nur, wenn ihr die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte übergeben werden, die diese Knoten enthalten.
Andernfalls gibt sie einen Bereich zurück, der so umgefasst wurde, dass er den Hostknoten der Shadow-Root einschließt, die den Knoten enthält.
Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls geändert, um Knoten innerhalb einer Shadow-Root zu akzeptieren.

Benutzerauswahlen über Maus, Tastatur usw. können überall im Dokument beginnen und enden, einschließlich innerhalb beliebiger offener oder geschlossener Shadow Trees.
([Firefox-Bug 1867058](https://bugzil.la/1867058)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>126</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>126</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>126</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>126</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.shadowdom.selection_across_boundary.enabled</code></td>
    </tr>
  </tbody>
</table>

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Durch Aktivieren dieser Funktion werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Aufgrund der Tatsache, dass Firefox derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die meisten Anwendungsfälle für diese Eigenschaften nicht, sodass sie standardmäßig deaktiviert sind. Weitere Details finden Sie im [Firefox-Bug 1057233](https://bugzil.la/1057233).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>33</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>33</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>33</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>33</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>media.track.enabled</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` wandeln den angegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten um. (Weitere Details siehe [Firefox-Bug 918189](https://bugzil.la/918189)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>31</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>31</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>31</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>31</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.convertFromNode.enable</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Aussichtspunk zurück. (Weitere Details siehe [Firefox-Bug 917755](https://bugzil.la/917755)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>31</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>31</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>31</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>31</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.getBoxQuads.enabled</code></td>
    </tr>
  </tbody>
</table>

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während der Tests der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, das Release dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API erfolgen. Die Arbeit findet weiterhin statt. (Weitere Details siehe [Firefox-Bug 1318984](https://bugzil.la/1318984)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>55</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>55</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>55</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>55</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2">
        <code>dom.payments.request.enabled</code> und<br /><code
          >dom.payments.request.supportedRegions</code
        >
      </td>
    </tr>
  </tbody>
</table>

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Webseite.
Diese Funktion ist auf Android in allen Builds aktiviert, wird aber auf dem Desktop hinter einer Präferenz ausgeführt (außer anders angegeben).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version geändert</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>71</td>
      <td>Nein (Standard). Ja (Windows ab Version 92)</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>71</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>71</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>71</td>
      <td>Nein (Desktop). Ja (Android).</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.webshare.enabled</code></td>
    </tr>
  </tbody>
</table>

### Screen Orientation API

#### ScreenOrientation.lock()

Die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) ermöglicht es, ein Gerät auf eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt wird und durch die Vor-Sperr-Anforderungen des Browsers erlaubt ist. In der Regel ist das Sperren der Ausrichtung nur auf mobilen Geräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird. Weitere Details finden Sie im [Firefox-Bug 1697647](https://bugzil.la/1697647).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version geändert</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>111</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.screenorientation.allow-lock</code></td>
    </tr>
  </tbody>
</table>

### Prioritized Task Scheduling API

Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code des Webseitenentwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.

Diese ist in Firefox Nightly (nur) ab Firefox 101 aktiviert.
Es wird keine Präferenz angeboten, um sie in anderen Releases zu aktivieren.

### Benachrichtigungen API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction)-Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version geändert</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>117</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>117</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>117</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>117</td>
      <td>Nur Windows</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.webnotifications.requireinteraction.enabled</code></td>
    </tr>
  </tbody>
</table>

## Sicherheit und Datenschutz

### Blockieren von Klartextanfragen von Flash auf verschlüsselten Seiten

Um Man-in-the-Middle (MitM) Angriffe durch Flash-Inhalte auf verschlüsselten Seiten zu mildern, wurde eine Präferenz hinzugefügt, um `OBJECT_SUBREQUEST`s als aktive Inhalte zu behandeln. Weitere Details finden Sie im [Firefox-Bug 1190623](https://bugzil.la/1190623).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>59</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>59</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>59</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>59</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2">
        <code>security.mixed_content.block_object_subrequest</code>
      </td>
    </tr>
  </tbody>
</table>

### Beschriftung unsicherer Seiten

Die beiden Präferenzen `security.insecure_connection_text_*` fügen einen "Nicht sicher"-Text neben dem traditionellen Schloss-Symbol in der Adressleiste hinzu, wenn eine Seite unsicher geladen wird (das heißt, mit {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` entfernt das `https:`-Präfix aus den Adressleisten-URLs. Weitere Details finden Sie im [Firefox-Bug 1853418](https://bugzil.la/1853418).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>121</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>60</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>60</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>60</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2">
        <code>security.insecure_connection_text.enabled</code> für normalen Browsing-Modus;
        <code>security.insecure_connection_text.pbmode.enabled</code> für privaten Browsing-Modus
        <code>browser.urlbar.trimHttps</code> zum Trimmen des https-Präfixes
      </td>
    </tr>
  </tbody>
</table>

### Berechtigungen Richtlinie / Feature-Richtlinie

Die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und deren Verhalten zu ändern. Sie ähnelt CSP, steuert aber Funktionen anstatt Sicherheitsverhalten.
Dies wird in Firefox als **Feature Policy** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut auf `<iframe>`-Elementen gesetzt werden können, auch wenn die Benutzerpräferenz nicht gesetzt ist.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>65</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>65</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>65</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>65</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2">
        <code>dom.security.featurePolicy.header.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Permissions API Unterstützung für Mikrofon und Kamera

Die `microphone`- und `camera`-Berechtigungen der [Permissions API](/de/docs/Web/API/Permissions_API) werden unterstützt, sodass eine Webseite abfragen kann, ob Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch genehmigt werden muss ([Firefox-Bug 1609427](https://bugzil.la/1609427), [Firefox-Bug 1915222](https://bugzil.la/1915222)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>131</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>131</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>131</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>131</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2">
        <code>permissions.media.query.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Clear-Site-Data "Cache" Direktive

Der `cache`-Anweisung des [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data)-HTTP-Antwort-Headers löscht den Browsercache für die anfordernde Website.

> [!NOTE]
> Dies wurde ursprünglich standardmäßig aktiviert, aber in Version 94 hinter einer Präferenz platziert ([Firefox-Bug 1729291](https://bugzil.la/1729291)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>63</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>63</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>63</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>63</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2">
        <code>privacy.clearsitedata.cache.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking zur Werbezurechnung mit dem neuen `navigator.privateAttribution`-Objekt mit den Methoden `saveImpression()` und `measureConversion()`. Mehr über PPA erfahren Sie in der [Erklärung](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Websites über den [Origin-Versuch](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2">
        <code>dom.origin-trials.private-attribution.state</code>
      </td>
    </tr>
  </tbody>
</table>

## HTTP

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Headers/Accept)-Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um Unterstützung für den MIME-Typ `image/jxl` anzugeben.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2">
        <code>image.jxl.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### SameSite=Lax standardmäßig

[`SameSite` cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht jedoch für seitenübergreifende Subanfragen zum Laden von Bildern oder Frames auf einer Drittanbieterseite usw.
Weitere Details finden Sie im [Firefox-Bug 1617609](https://bugzil.la/1617609).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>69</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>69</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>69</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>69</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>network.cookie.sameSite.laxByDefault</code></td>
    </tr>
  </tbody>
</table>

### Access-Control-Allow-Headers-Wildcard umfasst nicht Authorization

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header für eine {{Glossary("Preflight_request", "CORS-Voranfrage")}}, der angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen.
Die Antwort-Direktive kann ein Wildcard (`*`) enthalten, das angibt, dass die endgültige Anfrage alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig enthält Firefox den `Authorization`-Header in der endgültigen Anfrage, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde.
Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einschließt.
Weitere Details finden Sie im [Firefox-Bug 1687364](https://bugzil.la/1687364).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>115</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>115</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>115</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>115</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>network.cors_preflight.authorization_covered_by_wildcard</code></td>
    </tr>
  </tbody>
</table>

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly- und Developer-Edition-Kanälen, bevor wir sie durch Beta und Release lassen. Die unten aufgeführten Funktionen sind die aktuelle Auswahl experimenteller Entwicklerwerkzeugfunktionen.

### Ausführungskontext-Wähler

Diese Funktion zeigt eine Schaltfläche in der Befehlszeile der Konsole an, die es Ihnen ermöglicht, den Kontext zu ändern, in dem der Ausdruck, den Sie eingeben, ausgeführt wird. (Weitere Details siehe [Firefox-Bug 1605154](https://bugzil.la/1605154) und [Firefox-Bug 1605153](https://bugzil.la/1605153)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>75</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>75</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>75</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>75</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>devtools.webconsole.input.context</code></td>
    </tr>
  </tbody>
</table>

### Server-gesendete Ereignisse im Netzwerkmonitor

Der Netzwerkmonitor zeigt Informationen zu [server-gesendeten](/de/docs/Web/API/Server-sent_events) Ereignissen an. (Weitere Details siehe [Firefox-Bug 1405706](https://bugzil.la/1405706)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>80</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>80</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>80</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>80</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2">
        <code>devtools.netmonitor.features.serverSentEvents</code>
      </td>
    </tr>
  </tbody>
</table>

### CSS-Browser-Kompatibilitäts-Tooltips

Die CSS-Regelansicht kann Browser-Kompatibilitäts-Tooltips neben allen CSS-Eigenschaften anzeigen, die bekannte Probleme haben. Für weitere Informationen sehen Sie sich an: [HTML untersuchen und bearbeiten > Browser-Kompatibilitätswarnungen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#browser-compat-warnings).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>81</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>81</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>81</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>81</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2">
        <code
          >devtools.inspector.ruleview.inline-compatibility-warning.enabled</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Siehe auch

- [Firefox Entwickler Release Notes](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
