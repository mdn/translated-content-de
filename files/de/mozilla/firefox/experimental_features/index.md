---
title: Experimentelle Funktionen in Firefox
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

{{FirefoxSidebar}}

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, einschließlich solcher für vorgeschlagene oder hochmoderne Webplattform-Standards, sowie Informationen zu den Builds, in denen sie vorhanden sind, ob sie "standardmäßig" aktiviert sind oder nicht, und welche _Einstellung_ zur Aktivierung oder Deaktivierung verwendet werden kann. Dies ermöglicht es Ihnen, die Funktionen vor ihrer Veröffentlichung zu testen.

Neue Funktionen erscheinen zuerst im [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) Build, wo sie oft standardmäßig aktiviert sind. Später wandern sie zum [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) und schließlich zum Release-Build. Nachdem eine Funktion in einem Release-Build standardmäßig aktiviert ist, wird sie nicht mehr als experimentell angesehen und sollte aus dem Thema entfernt werden.

Experimentelle Funktionen können aktiviert oder deaktiviert werden, indem der [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) verwendet wird (geben Sie `about:config` in die Firefox-Adressleiste ein), indem die unten aufgeführte zugehörige _Einstellung_ geändert wird.

> [!NOTE]
> Für Editoren - Wenn Funktionen zu diesen Tabellen hinzugefügt werden, versuchen Sie bitte, einen Link zum entsprechenden Fehler oder zu den Fehlern mit `[Firefox bug <Nummer>](https://bugzil.la/<Nummer>)` hinzuzufügen.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol hat, sobald jemand beginnt, darin zu tippen, um andere Browserimplementierungen anzupassen. (Siehe [Firefox bug 558594](https://bugzil.la/558594) für mehr Details.)

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.forms.input-type-search.enabled</code></td>
    </tr>
  </tbody>
</table>

### Umschalten der Passwortanzeige

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) beinhalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox bug 502258](https://bugzil.la/502258)).

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.forms.reveal-password-button.enabled</code></td>
    </tr>
  </tbody>
</table>

## CSS

### Hex-Boxen zur Anzeige fehlerhafter Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tabulator_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Form Feed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie unerwartet sind. (Siehe [Firefox bug 1099557](https://bugzil.la/1099557) für mehr Details.)

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
      <th>Einstellungsname</th>
      <td colspan="2">
        <code>layout.css.control-characters.visible</code>
      </td>
    </tr>
  </tbody>
</table>

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, anzugeben, wie fallende, erhobene und versunkene Initialbuchstaben angezeigt werden. (Siehe [Firefox bug 1223880](https://bugzil.la/1223880) für mehr Details.)

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.initial-letter.enabled</code></td>
    </tr>
  </tbody>
</table>

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion wird auf {{cssxref("width")}} und andere Dimensions-Eigenschaften angewendet. Diese Funktion wird bereits gut für die Größenanpassung von CSS Grid Layout-Spuren unterstützt. (Siehe [Firefox bug 1312588](https://bugzil.la/1312588) für mehr Details.)

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.fit-content-function.enabled</code></td>
    </tr>
  </tbody>
</table>

### Scrollgetriebene Animationen

Früher "scroll-verknüpfte Animationen" genannt, hängt eine [scrollgetriebene Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) von der Scrollposition einer Bildlaufleiste ab, anstatt von der Zeit oder einer anderen Dimension. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzbeschreibungseigenschaft) ermöglichen es Ihnen, anzugeben, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine scrollgetriebene Animation verwendet werden kann. Die Scroll-Zeitachse kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) verknüpft werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namenwert gesetzt wird, der mit `scroll-timeline-name` definiert wird.

Beim Verwenden der {{cssxref('scroll-timeline')}} Kurzbeschreibungseigenschaft muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Sowohl die Lang- als auch die Kurzbeschreibungseigenschaften sind hinter der Einstellung verfügbar.

Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) Funktionalnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Bildlaufleiste in einem übergeordneten Element für die Zeitachse verwendet wird.

Für mehr Informationen siehe [Firefox bug 1807685](https://bugzil.la/1807685), [Firefox bug 1804573](https://bugzil.la/1804573), [Firefox bug 1809005](https://bugzil.la/1809005), [Firefox bug 1676791](https://bugzil.la/1676791), [Firefox bug 1754897](https://bugzil.la/1754897), [Firefox bug 1817303](https://bugzil.la/1817303), und [Firefox bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzbeschreibungseigenschaft) werden noch nicht unterstützt. Für mehr Informationen siehe [Firefox bug 1676779](https://bugzil.la/1676779).

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
      <td>136</td>
      <td>Ja</td>
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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### @scope At-Regel

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, spezifische Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren übermäßig zu erhöhen ([Firefox bug 1886441](https://bugzil.la/1886441)).

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
      <td>137</td>
      <td>Ja</td>
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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.at-scope.enabled</code></td>
    </tr>
  </tbody>
</table>

### font-variant-emoji Eigenschaft

Die CSS [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) Eigenschaft ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen. Für mehr Details siehe ([Firefox bug 1461589](https://bugzil.la/1461589)).

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.font-variant-emoji.enabled</code></td>
    </tr>
  </tbody>
</table>

### prefers-reduced-transparency Medienmerkmal

Das CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienmerkmal ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge der transparenten oder durchscheinenden Schichteffekte auf seinem Gerät zu minimieren. Für mehr Details siehe ([Firefox bug 1736914](https://bugzil.la/1736914)).

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.prefers-reduced-transparency.enabled</code></td>
    </tr>
  </tbody>
</table>

### inverted-colors Medienmerkmal

Das CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Medienmerkmal ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. Für mehr Details siehe ([Firefox bug 1794628](https://bugzil.la/1794628)).

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.inverted-colors.enabled</code></td>
    </tr>
  </tbody>
</table>

### Benannte View-Progress-Zeitachsen-Eigenschaft

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, wodurch sein übergeordneter Scrollerelement die Quelle einer View-Progress-Zeitachse ist. Der Name kann dann der Eigenschaft `animation-timeline` zugewiesen werden, welche dann das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt. Für mehr Details siehe ([Firefox bug 1737920](https://bugzil.la/1737920)).

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### Anonyme View-Progress-Zeitachsen-Funktion

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion ermöglicht es Ihnen, festzulegen, dass die `animation-timeline` für ein Element eine View-Progress-Zeitachse ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt. Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitachse liefert, sowie den Einsatz innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und endet. Für mehr Details siehe ([Firefox bug 1808410](https://bugzil.la/1808410)).

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### Vendor-präfixierte Transform-Eigenschaften

Die `-moz-` präfixierten [CSS Transform](/de/docs/Web/CSS/CSS_transforms) Eigenschaften können deaktiviert werden, indem die Einstellung `layout.css.prefixes.transforms` auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox bug 1886134](https://bugzil.la/1886134), [Firefox bug 1855763](https://bugzil.la/1855763)).

Speziell wird diese Einstellung die folgenden präfixierten Eigenschaften deaktivieren:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

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
      <th>Einstellungsname</th>
      <td colspan="2">
      <code>layout.css.prefixes.transforms</code>
    </td>
    </tr>
  </tbody>
</table>

### UA-Stile für `<h1>` verschachtelt in Gliederungselementen

Die `<h1>` Überschrift reduziert jetzt nicht mehr ihre Schriftgröße, wenn sie innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` verschachtelt in Gliederungselementen sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox bug 1883896](https://bugzil.la/1883896)).

> [!NOTE]
> Die Einstellung für diese Funktion funktioniert umgekehrt: Sie ist im Nightly-Build auf `false` gesetzt, wodurch die UA-Stil für Überschriften, die in Gliederungselementen verschachtelt sind, entfernt wird. In allen anderen Kanälen ist sie auf `true` gesetzt, wodurch der bestehende UA-Stil für die verschachtelten Überschriften beibehalten wird.

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
      <th>Einstellungsname</th>
      <td colspan="2">
        <code>layout.css.h1-in-section-ua-styles.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### `shape()` Funktion

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist eine [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, die es ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften mit einem oder mehreren "Formbefehlen" zu definieren. Diese Befehle sind den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ist in gewisser Hinsicht der {{cssxref("basic-shape/path","path()")}} Funktion ähnlich, aber im Gegensatz zu `path()`, welche die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, nutzt `shape()` die standardmäßige CSS-Syntax. Dies ermöglicht Ihnen, Formen einfach zu erstellen und zu bearbeiten und erlaubt auch die Verwendung von CSS-Mathematikfunktionen. Für mehr Details siehe [Firefox bug 1823463](https://bugzil.la/1823463) für die `shape()` Funktionsunterstützung in `clip-path`, [Firefox bug 1884424](https://bugzil.la/1884424) für die Funktionsunterstützung in `offset-path`, und [Firefox bug 1884425](https://bugzil.la/1884425) für seine Interpolationsunterstützung.

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.basic-shape-shape.enabled</code></td>
    </tr>
  </tbody>
</table>

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich von dem bisherigen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei gemischt-richtungalen Texten [Firefox bug 1891446](https://bugzil.la/1891446).

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.letter-spacing.model</code></td>
    </tr>
  </tbody>
</table>

### `calc()` Farbkanalunterstützung in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen und ermöglicht Ihnen, Änderungen an Farben in verschiedenen Farbräumen oder beim Verwenden von verschiedenen funktionalen Notationen korrekt zu berechnen [Firefox bug 1889561](https://bugzil.la/1889561).

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.relative-color-syntax.enabled</code></td>
    </tr>
  </tbody>
</table>

### CSS-Anker-Positionierung

Das [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definiert eine Anzahl von Funktionen, die es ermöglichen, Elemente als Ankerelemente zu definieren, und dass andere Elemente relativ zu Ankerelementen positioniert werden können. Dies erlaubt es zum Beispiel, dass Tooltips zusammen mit dem zugehörigen Inhalt angezeigt werden, während es durch den Ansichtshafen scrollt, sich bewegt, wenn es notwendig ist, wenn es den Ansichtshafen überläuft, und verschwindet, wenn der Anker außerhalb des Bildschirms verschoben wird. Die Funktionalitäten werden schrittweise hinter einer Einstellung eingeführt ([Firefox bug 1838746](https://bugzil.la/1838746)).

Die Teile, die implementiert wurden, beinhalten:

- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) und [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131).

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
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.anchor-positioning.enabled</code></td>
    </tr>
  </tbody>
</table>

### `::details-content` Pseudo-Element

Das CSS {{cssxref("::details-content")}} Pseudo-Element ermöglicht es, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox bug 1901037](https://bugzil.la/1901037)).

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
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.details-content.enabled</code></td>
    </tr>
  </tbody>
</table>

### Erlauben von Pseudo-Elementen nach Element-basierten Pseudo-Elementen

Die Arbeit hat begonnen, um es zu ermöglichen, [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} zu [Element-basierten Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} hinzuzufügen.

Dies wird es den Benutzern ermöglichen, zum Beispiel das erste Buchstaben des {{htmlElement("details")}} Elements zu gestalten, indem der CSS-Selektor `::details-content::first-letter` verwendet wird, oder Inhalte vor einer {{HTMLElement("input")}} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzufügen, indem der CSS-Selektor `::file-selector-button::before` verwendet wird.

Aktuell kann nur die Unterstützung für `::details-content::first-letter` geparst werden, indem `@supports(::details-content::first-letter)` verwendet wird, und die Einstellung für das [::details-content Pseudo-Element](#details-content_pseudo-element) muss aktiviert sein, um dies zu testen. Das `::file-selector-button` Pseudo-Element ist noch nicht als ein Element-basiertes Pseudo-Element markiert, so dass es keine aktuelle Möglichkeit gibt, dies zu testen. ([Firefox bug 1953557](https://bugzil.la/1953557)).

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
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.details-content.enabled</code></td>
    </tr>
  </tbody>
</table>

## SVG

### `<discard>` Element für SVG-Animationen

Das {{svgelement("discard")}} SVG-Element wird jetzt unterstützt, zusammen mit seiner entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) JavaScript-Schnittstelle. Das Element ermöglicht es Entwicklern, eine Auslösezeit oder ein Ereignis anzugeben, bei dem ein bestimmtes Element und seine Kinder aus dem DOM entfernt werden sollen. Ein SVG-Viewer kann diese Information nutzen, um Speicher zu sparen, indem er Elemente verwirft, die nicht mehr benötigt werden, wie z.B. animierte Elemente, die abgeschlossen sind. ([Firefox bug 1069931](https://bugzil.la/1069931)).

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
      <td>136</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>136</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>136</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>136</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>svg.discard.enabled</code></td>
    </tr>
  </tbody>
</table>

## JavaScript

### Temporal-API

Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen ([Firefox bug 1912511](https://bugzil.la/1912511)). Dies beinhaltet:

- Eine **Dauer** (Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
- **Zeitpunkte**:
  - Als ein eindeutiger Moment in der Geschichte:
    - Ein Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Ein Datum-Uhrzeit mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - **Zeitzonen-unabhängige Datum/Uhrzeit ("Plain")**:
    - Datum (Jahr, Monat, Tag) + Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}}
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}
- **Jetzt** (aktuelle Zeit) als verschiedene Klasseninstanzen oder in einem spezifischen Format: {{jsxref("Temporal.Now")}}

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
      <td>137</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>137</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>137</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>137</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>javascript.options.experimental.temporal</code></td>
    </tr>
  </tbody>
</table>

## APIs

### CloseWatcher Schnittstelle

Eingebaute Webkomponenten mit "öffnen" und "schließen" Semantik, wie modale Dialoge und Popovers, können mit geräte-eigenen Mechanismen geschlossen werden. Zum Beispiel kann man auf Android einen Dialog mit der Zurück-Taste schließen. Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht Entwicklern, UI-Komponenten zu implementieren, wie z.B. benutzerdefinierte Seitenleisten, die ähnlich mit nativen Mechanismen geschlossen werden können. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe genutzt werden können, nur mit Daten aufgerufen werden können, die validiert oder saniert wurden.

> [!NOTE]
> Zum Zeitpunkt der Erstellung wurde nicht genug von der API implementiert, um sie effektiv testbar zu machen. Diese Notiz wird entfernt, sobald sie bereit ist.

Dieser Ausschnitt der API wurde implementiert:

- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory):
  - [`getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType) und [`getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType) ([Firefox-Bug 1917783](https://bugzil.la/1917783), [Firefox-Bug 1917784](https://bugzil.la/1917784)).
- Die Methoden [`write()`](/de/docs/Web/API/Document/write) und [`writeln()`](/de/docs/Web/API/Document/writeln) der [`Document`](/de/docs/Web/API/Document) Schnittstelle akzeptieren nun [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte als Parameter, zusätzlich zu Strings. ([Firefox-Bug 1906301](https://bugzil.la/1906301)).
- Die Eigenschaften [`text`](/de/docs/Web/API/HTMLScriptElement/text), [`innerText`](/de/docs/Web/API/HTMLElement/innerText), und [`textContent`](/de/docs/Web/API/Node/textContent) der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) Schnittstelle akzeptieren nun [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte als Wert, während [`src`](/de/docs/Web/API/HTMLScriptElement/src) [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Werte akzeptiert. ([Firefox-Bug 1905706](https://bugzil.la/1905706)).
- Die Methoden [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) können mit einem [`TrustedScript`](/de/docs/Web/API/TrustedScript) aufgerufen werden. ([Firefox-Bug 1931290](https://bugzil.la/1931290)).
- Die globale Eigenschaft [`trustedTypes`](/de/docs/Web/API/Window/trustedTypes) ist verfügbar, um auf die Trusted Types API zuzugreifen.
- Die Eigenschaften [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) können mit [trusted types](/de/docs/Web/API/Trusted_Types_API) aufgerufen werden.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

### HTML Sanitizer API

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) erlaubt Entwicklern, nicht vertraute HTML-Strings zu nehmen und sie für die sichere Einfügung in das DOM eines Dokuments zu bereinigen.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.security.sanitizer.enabled</code></td>
    </tr>
  </tbody>
</table>

### Escapen von < und > in Attributen beim Serialisieren von HTML

Firefox ersetzt die Zeichen `<` und `>` durch `&lt;` und `&gt;` (bzw.) in Attributen beim Serialisieren von HTML. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann wieder in das DOM eingefügt wird. Die betroffenen Methoden und Eigenschaften sind: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML), und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML). ([Firefox-Bug 1941347](https://bugzil.la/1941347)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>139</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>139</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>139</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>139</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.security.html_serialization_escape_lt_gt</code></td>
    </tr>
  </tbody>
</table>

### Entfernung von MutationEvent

[`MutationEvent`](/de/docs/Web/API/MutationEvent) und die dazugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) stehen zur Entfernung an und wurden in Nightly deaktiviert. ([Firefox-Bug 1951772](https://bugzil.la/1951772)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>138</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>138</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>138</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.mutation_events.enabled</code></td>
    </tr>
  </tbody>
</table>

### Entfernung der `beforescriptexecute` und `afterscriptexecute` Ereignisse

Die nicht standardisierten Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle stehen zur Entfernung an. Sie wurden in Nightly deaktiviert. ([Firefox-Bug 1954685](https://bugzil.la/1954685)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>139</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>139</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>139</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>139</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.events.script_execute.enable</code></td>
    </tr>
  </tbody>
</table>

### PerformanceEventTiming.interactionId

[`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um Latenzzeiten für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst wurden. ([Firefox-Bug 1934683](https://bugzil.la/1934683)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.performance.event_timing.enable_interactionid</code></td>
    </tr>
  </tbody>
</table>

### Notification.actions

Die `actions`-Eigenschaft ist eine schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle und wird in Nightly unterstützt. Diese enthält Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden. ([Firefox-Bug 1225110](https://bugzil.la/1225110)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Version hinzugefügt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>138</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>138</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.webnotifications.actions.enabled</code></td>
    </tr>
  </tbody>
</table>

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen im "Entwurfs"-Status, die getestet werden, zur Nutzung freigegeben. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene für Berechnungen und Grafik-Rendering mithilfe der [Grafikprozessor-Einheit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Weitere Informationen zum Fortschritt dieser API finden Sie unter [Firefox-Bug 1602129](https://bugzil.la/1602129).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

### Reporting API-Unterstützung für CSP-Verletzungen

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt nun das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verletzungen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die durch die [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können nun einen `type`-Wert von `"csp-violation"` und eine `body`-Eigenschaft enthalten, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle ist. Dadurch können CSP-Verletzungen innerhalb einer Webseite gemeldet werden.

CSP-Verletzungsberichte können auch an entfernte Endpunkte gesendet werden, die namentlich in der CSP {{CSP("report-to")}} Direktive angegeben sind - die Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwort-Headern definiert werden. Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report) Objekts, mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verletzungsbericht ersetzt einen ähnlichen, CSP-spezifischen Mechanismus zum Senden von Verletzungsberichten, der die CSP {{CSP("report-uri")}} Direktive verwendet, um die URL des Meldeendpunktes festzulegen, und ein [CSP-spezifisches JSON-Verletzungsberichtsformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat. ([Firefox-Bug 1391243](https://bugzil.la/1391243)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

Die folgenden experimentellen Funktionen umfassen diejenigen, die in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### Asynchrone SourceBuffer-Hinzufügung und -Entfernung

Dies fügt die auf Versprechungen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Media-Source-Puffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie unter [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

#### AVIF-Konformitätseinschränkung

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Striktheit_ beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern zu steuern. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht vollständig konform sind.

Erlaubte Werte sind:

- `0`: Akzeptiere Bilder mit Spezifikationsverletzungen sowohl in den Empfehlungen ("sollte"-Sprache) als auch in den Anforderungen ("muss"-Sprache), sofern sie sicher oder unmissverständlich interpretiert werden können.
- `1` (Standard): Lehne Verletzungen von Anforderungen ab, aber erlaube Verletzungen von Empfehlungen.
- `2`: Strikt. Lehne alle Verletzungen von Anforderungen oder Empfehlungen ab.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Weitere Einzelheiten finden Sie unter [Firefox-Bug 1539075](https://bugzil.la/1539075).

Beachten Sie, dass die Funktion, wie unten gezeigt, nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

### CSS Custom Highlight API

Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bietet einen Mechanismus zur Gestaltung beliebiger Textranges in einem Dokument (verallgemeinert das Verhalten anderer Highlight-Pseudo-Elemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}}). Die Ranges werden in JavaScript unter Verwendung von [`Range`](/de/docs/Web/API/Range) Instanzen definiert, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind, und dann mit einem Namen unter Verwendung von [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registriert werden. Das CSS [`::highlight`](/de/docs/Web/CSS/::highlight) Pseudo-Element wird verwendet, um Styles auf ein registriertes Highlight anzuwenden. Weitere Details finden Sie unter [Firefox-Bug 1703961](https://bugzil.la/1703961).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) steht zur Entfernung an. Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

#### Selections über die shadow DOM-Grenze hinweg

Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange) Objekte zu erhalten, die den aktuellen ausgewählten Bereich oder Bereiche darstellen. Im Gegensatz zu [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) kann diese Methode Bereiche mit Anker- oder Fokusknoten innerhalb eines shadow DOM zurückgeben, aber nur, wenn die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte übergeben werden, die diese Knoten enthalten. Andernfalls gibt sie einen Bereich zurück, der auf den Hostknoten der shadow root umgeschrieben wurde, der den Knoten enthält. Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse), und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls modifiziert, um Knoten innerhalb einer shadow root zu akzeptieren.

Die Benutzerauswahl über Maus, Tastatur, usw. kann überall im Dokument beginnen und enden, einschließlich innerhalb beliebiger offener oder geschlossener shadow trees. ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

Durch Aktivieren dieser Funktion werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videotracks bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, daher sind beide standardmäßig deaktiviert. Weitere Details finden Sie unter [Firefox-Bug 1057233](https://bugzil.la/1057233).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` mappen den gegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Weitere Informationen finden Sie unter [Firefox-Bug 918189](https://bugzil.la/918189)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Viewport zurück. (Weitere Informationen finden Sie unter [Firefox-Bug 917755](https://bugzil.la/917755)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

#### Hauptzahlungshandhabung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der beim Testen der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, die Einführung dieser API zu verschieben, während Diskussionen über potenzielle Änderungen an der API stattfinden. Die Arbeiten laufen weiterhin. (Weitere Details finden Sie unter [Firefox-Bug 1318984](https://bugzil.la/1318984)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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
        <code>dom.payments.request.enabled</code> und<br/><code
          >dom.payments.request.supportedRegions</code
        >
      </td>
    </tr>
  </tbody>
</table>

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) erlaubt das Teilen von Dateien, URLs und anderen Daten von einer Website. Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Präferenz auf dem Desktop (sofern nicht anders angegeben).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

Die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) ermöglicht es, ein Gerät auf eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt und durch die Browser-Vorsperrungsanforderungen erlaubt ist. Typischerweise ist das Sperren der Ausrichtung nur auf mobilen Geräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird. Weitere Einzelheiten finden Sie unter [Firefox-Bug 1697647](https://bugzil.la/1697647).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

### Priorisierte Task Scheduling API

Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind. Unterstützung für die meisten Teile der API wurde in Firefox-Version 101 hinter einer Präferenz hinzugefügt. Firefox-Version 139 fügt Unterstützung für [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) hinzu und aktiviert die API in der Nightly-Version. ([Firefox-Bug 1734997](https://bugzil.la/1734997) und [Firefox-Bug 1920115](https://bugzil.la/1920115)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Version geändert</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>139</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>101</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>101</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>101</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.enable_web_task_scheduling</code></td>
    </tr>
  </tbody>
</table>

### Notifications API

Benachrichtigungen haben die `requireInteraction`-Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

### Blockierung von Klartextanforderungen von Flash auf verschlüsselten Seiten

Um Man-in-the-Middle (MitM) Angriffe zu mindern, die durch Flash-Inhalte auf verschlüsselten Seiten verursacht werden, wurde eine Präferenz hinzugefügt, um `OBJECT_SUBREQUEST`s als aktive Inhalte zu behandeln. Weitere Details finden Sie unter [Firefox-Bug 1190623](https://bugzil.la/1190623).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

### Unsichere Seitenkennzeichnung

Die beiden `security.insecure_connection_text_*` Präferenzen fügen ein "Nicht sicher"-Textlabel in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (das heißt, mit {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` kürzt das `https:`-Präfix von URLs in der Adressleiste. Weitere Details finden Sie unter [Firefox-Bug 1853418](https://bugzil.la/1853418).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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
        <code>security.insecure_connection_text.enabled</code> für den normalen Surfmodus;
        <code>security.insecure_connection_text.pbmode.enabled</code> für den privaten Surfmodus
        <code>browser.urlbar.trimHttps</code> für das Kürzen des https-Präfixes
      </td>
    </tr>
  </tbody>
</table>

### Berechtigungspolitik / Feature-Policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt es Webentwicklern, das Verhalten bestimmter Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und zu ändern. Sie ähnelt CSP, steuert jedoch Funktionen anstelle von Sicherheitsverhalten. Dies ist in Firefox als **Feature Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzerpräferenz nicht gesetzt ist.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

### Privacy Preserving Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung für die Anzeige von Anzeigenattribution unter Verwendung des neuen `navigator.privateAttribution` Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

Der HTTP [Accept](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um die Unterstützung für den MIME-Typ `image/jxl` anzuzeigen.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert und nicht bei Anfragen von Drittanbietern, um Bilder oder Frames in eine Drittanbieter-Seite zu laden usw. Weitere Details finden Sie unter [Firefox-Bug 1617609](https://bugzil.la/1617609).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

### Access-Control-Allow-Headers Wildcard umfasst nicht Authorization

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS Voranfrage")}}, der angibt, welche Anfrage-Header in der endgültigen Anfrage enthalten sein dürfen. Das Antwort-Direktiv kann einen Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig schließt Firefox den `Authorization`-Header in die endgültige Anfrage ein, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat. Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einfügt. Weitere Details finden Sie unter [Firefox-Bug 1687364](https://bugzil.la/1687364).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
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

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly und Developer Edition-Kanälen, bevor wir sie in die Beta- und Release-Versionen übergehen lassen. Die unten aufgeführten Funktionen sind die aktuellen experimentellen Funktionen der Entwicklerwerkzeuge.

## Siehe auch

- [Firefox Entwicklerrelease-Hinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
