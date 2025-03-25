---
title: Experimentelle Funktionen in Firefox
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{FirefoxSidebar}}

Diese Seite listet experimentelle und teilweise implementierte Funktionen in Firefox auf, einschließlich solcher für vorgeschlagene oder hochmoderne Standards der Webplattform, zusammen mit Informationen zu den Builds, in denen sie vorhanden sind, ob sie "standardmäßig" aktiviert sind oder nicht und welche _Präferenz_ verwendet werden kann, um sie zu aktivieren oder zu deaktivieren.
Dies ermöglicht es Ihnen, die Funktionen zu testen, bevor sie veröffentlicht werden.

Neue Funktionen erscheinen zunächst im [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) Build, wo sie oft standardmäßig aktiviert sind.
Später werden sie auf die [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) und schließlich auf den Release-Build übertragen.
Nachdem eine Funktion in einem Release-Build standardmäßig aktiviert wurde, wird sie nicht mehr als experimentell betrachtet und sollte aus dem Thema entfernt werden.

Experimentelle Funktionen können über den [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) (geben Sie `about:config` in die Firefox-Adressleiste ein) aktiviert oder deaktiviert werden, indem die zugehörige _Präferenz_ unten geändert wird.

> [!NOTE]
> Für Redakteure - Wenn Sie Funktionen zu diesen Tabellen hinzufügen, versuchen Sie bitte, einen Link zum relevanten Fehler oder den relevanten Fehlern mit `[Firefox bug <number>](https://bugzil.la/<number>)` einzubinden.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol erhält, sobald jemand darin zu tippen beginnt, um den Implementierungen anderer Browser zu entsprechen. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.forms.input-type-search.enabled</code></td>
    </tr>
  </tbody>
</table>

### Umschalten der Passwortanzeige

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Element/input/password)) beinhalten ein "Augen"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.forms.reveal-password-button.enabled</code></td>
    </tr>
  </tbody>
</table>

## CSS

### Hex-Boxen zur Anzeige von Steuerzeichen

Diese Funktion stellt Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Lf_ (`U+000A`), _Ff_ (`U+000C`) und _Cr_ (`U+000D`) als Hex-Box dar, wenn sie unerwartet sind. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

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
      <th>Name der Präferenz</th>
      <td colspan="2">
        <code>layout.css.control-characters.visible</code>
      </td>
    </tr>
  </tbody>
</table>

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, festzulegen, wie abgesenkte, angehobene und versenkte Anfangsbuchstaben angezeigt werden. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.initial-letter.enabled</code></td>
    </tr>
  </tbody>
</table>

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion, wie sie auf {{cssxref("width")}} und andere Größenangabeneigenschaften angewendet wird. Diese Funktion wird bereits gut für die Größenanpassung von CSS-Grid-Layout-Spuren unterstützt. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.fit-content-function.enabled</code></td>
    </tr>
  </tbody>
</table>

### Scroll-gesteuerte Animationen

Früher als "scroll-verknüpfte Animationen" bezeichnet, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) von der Scrollposition eines Scrollbalkens statt von Zeit oder einer anderen Dimension ab.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibeigenschaft) ermöglichen es Ihnen, anzugeben, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann.
Die Scroll-Timeline kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) verknüpft werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namenwert gesetzt wird, der mit `scroll-timeline-name` definiert ist.

Wenn Sie die {{cssxref('scroll-timeline')}} Kurzschreibeigenschaft verwenden, muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Langform- und Kurzform-Eigenschaften sind beide hinter der Präferenz verfügbar.

Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) Funktionsschreibweise mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem Vorfahrenelement für die Timeline verwendet wird.

Für weitere Informationen siehe [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibeigenschaft) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox-Bug 1676779](https://bugzil.la/1676779).

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### @scope At-Regel

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, spezifische Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren übermäßig zu erhöhen ([Firefox-Bug 1886441](https://bugzil.la/1886441)).

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.at-scope.enabled</code></td>
    </tr>
  </tbody>
</table>

### font-variant-emoji Eigenschaft

Die CSS [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) Eigenschaft ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen. Siehe [Firefox-Bug 1461589](https://bugzil.la/1461589) für weitere Details.

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.font-variant-emoji.enabled</code></td>
    </tr>
  </tbody>
</table>

### prefers-reduced-transparency Medienfunktion

Die CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienfunktion ermöglicht es Ihnen, zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder transluzenten Layer-Effekten auf seinem Gerät zu minimieren. Siehe [Firefox-Bug 1736914](https://bugzil.la/1736914) für weitere Details.

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.prefers-reduced-transparency.enabled</code></td>
    </tr>
  </tbody>
</table>

### inverted-colors Medienfunktion

Die CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Medienfunktion ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. Siehe [Firefox-Bug 1794628](https://bugzil.la/1794628) für weitere Details.

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.inverted-colors.enabled</code></td>
    </tr>
  </tbody>
</table>

### Benannte View Progress Timelines Eigenschaft

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, indem identifiziert wird, dass das Vorfahren-Scroller-Element die Quelle einer View Progress Timeline ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugehörige Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt wird. Siehe [Firefox-Bug 1737920](https://bugzil.la/1737920) für weitere Details.

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### Anonyme View Progress Timelines Funktion

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion ermöglicht es Ihnen, festzulegen, dass die `animation-timeline` für ein Element eine View Progress Timeline ist, die das Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt wird. Die Funktion definiert die Achse des Elternelements, das die Timeline liefert, zusammen mit dem Einschub innerhalb des sichtbaren Bereichs, an dem die Animation startet und endet. Siehe [Firefox-Bug 1808410](https://bugzil.la/1808410) für weitere Details.

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### Vendor-prefixierte Transform-Eigenschaften

Die `-moz-` präfixierten [CSS transform](/de/docs/Web/CSS/CSS_transforms) Eigenschaften können deaktiviert werden, indem die Präferenz `layout.css.prefixes.transforms` auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Konkret wird diese Präferenz die folgenden präfixierten Eigenschaften deaktivieren:

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
      <th>Name der Präferenz</th>
      <td colspan="2">
      <code>layout.css.prefixes.transforms</code>
    </td>
    </tr>
  </tbody>
</table>

### UA-Stile für `<h1>` verschachtelt in gliedernden Elementen

Die `<h1>` Überschrift verringert jetzt nicht mehr ihre Schriftgröße, wenn sie innerhalb von [gliedernden Elementen](/de/docs/Web/HTML/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die in gliedernden Elementen verschachtelt sind, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

> [!NOTE]
> Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist im Nightly-Build auf `false` gesetzt, was die UA-Stilgebung für Überschriften in gliedernden Elementen entfernt. Sie ist in allen anderen Kanälen auf `true` gesetzt, was die bestehende UA-Stilgebung für die verschachtelten Überschriften beibehält.

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
      <th>Name der Präferenz</th>
      <td colspan="2">
        <code>layout.css.h1-in-section-ua-styles.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### `shape()` Funktion

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften unter Verwendung eines oder mehrerer "Formenbefehle" zu definieren. Diese Befehle sind dem [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()`-Funktion ähnelt in gewisser Weise der {{cssxref("basic-shape/path","path()")}}-Funktion, aber im Gegensatz zu `path()`, die die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, verwendet `shape()` die standardmäßige CSS-Syntax. Dies ermöglicht es Ihnen, Formen einfach zu erstellen und zu bearbeiten und ermöglicht auch die Verwendung von CSS-Mathematikfunktionen.
Für weitere Details siehe [Firefox-Bug 1823463](https://bugzil.la/1823463) für die `shape()`-Funktion Unterstützung in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für die Funktion Unterstützung in `offset-path` und [Firefox-Bug 1884425](https://bugzil.la/1884425) für die Interpolation Unterstützung.

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.basic-shape-shape.enabled</code></td>
    </tr>
  </tbody>
</table>

### Symmetrische `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft verteilt jetzt den angegebenen Zeichenabstand gleichmäßig auf beide Seiten jedes Zeichens. Dies ist im Gegensatz zum aktuellen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann die Zeichenabstände verbessern, insbesondere in gemischt-direktionalem Text [Firefox-Bug 1891446](https://bugzil.la/1891446).

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.letter-spacing.model</code></td>
    </tr>
  </tbody>
</table>

### `calc()` Farbkanalunterstützung in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) analysieren, was es Ihnen ermöglicht, Änderungen an Farben in verschiedenen Farbräumen oder bei Verwendung unterschiedlicher funktioneller Schreibweisen korrekt zu berechnen [Firefox-Bug 1889561](https://bugzil.la/1889561).

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.relative-color-syntax.enabled</code></td>
    </tr>
  </tbody>
</table>

### CSS Anchor Positioning

Das [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definiert eine Reihe von Funktionen, die es ermöglichen, Elemente als Anker-Elemente zu definieren, und andere Elemente im Verhältnis zu diesen Ankern zu positionieren.
Dadurch können z.B. Tooltips zusammen mit zugehörigen Inhalten angezeigt werden, während sie durch das Sichtfenster scrollen, sich bei Bedarf bewegen, wenn sie das Sichtfenster überschreiten würden, und verschwinden, wenn der Anker aus dem Bildschirm verschwindet.
Die Funktionalitäten werden schrittweise hinter einer Präferenz eingeführt ([Firefox-Bug 1838746](https://bugzil.la/1838746)).

Die implementierten Teile umfassen:

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>layout.css.anchor-positioning.enabled</code></td>
    </tr>
  </tbody>
</table>

## SVG

Keine.

## JavaScript

### Temporal API

Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) soll die Arbeit mit Daten und Zeiten in verschiedenen Szenarien vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen ([Firefox-Bug 1912511](https://bugzil.la/1912511)).
Dies umfasst:

- Eine **Dauer** (Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
- **Zeitpunkte**:
  - Als einzigartiger Moment in der Geschichte:
    - Ein Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Ein Datum-Uhrzeit mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - **Zeitzonenerunabhängiges Datum/Uhrzeit ("Plain")**:
    - Datum (Jahr, Monat, Tag) + Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}}
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}
- **Jetzt** (aktuelle Uhrzeit) als verschiedene Klasseninstanzen oder in einem bestimmten Format: {{jsxref("Temporal.Now")}}

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>javascript.options.experimental.temporal</code></td>
    </tr>
  </tbody>
</table>

### Error.captureStackTrace

Die {{jsxref("Error.captureStackTrace()")}} statische Methode installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}} Eigenschaft.
Ihr Hauptverwendungszweck besteht darin, eine Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}} Schnittstelle abgeleitet wurde.
([Firefox-Bug 1886820](https://bugzil.la/1886820)).

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
      <th>Name der Präferenz</th>
      <td colspan="2"><code>javascript.options.experimental.error_capture_stack_trace</code></td>
    </tr>
  </tbody>
</table>

## APIs

### CloseWatcher-Schnittstelle

Eingebaute Web-Komponenten mit "öffnen" und "schließen" Semantik, wie modale Dialoge und Popover, können mit geräteeigenen Mechanismen geschlossen werden. Zum Beispiel können Sie auf Android einen Dialog mit der Zurück-Taste schließen. Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, UI-Komponenten, wie benutzerdefinierte Seitenleisten, zu implementieren, die ähnlich mit nativen Mechanismen geschlossen werden können. ([Firefox Bug 1888729](https://bugzil.la/1888729)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
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

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell für XSS-Angriffe genutzt werden können, nur mit validierten oder bereinigten Daten aufgerufen werden können.

> [!NOTE]
> Zum Zeitpunkt des Schreibens wurde noch nicht genug von der API implementiert, um sie effektiv testbar zu machen.
> Dieser Hinweis wird entfernt, sobald sie bereit ist.

Dieser Teil der API wurde implementiert:

- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory):
  - [`getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType) und [`getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType) ([Firefox Bug 1917783](https://bugzil.la/1917783), [Firefox Bug 1917784](https://bugzil.la/1917784)).
- Die Methoden [`write()`](/de/docs/Web/API/Document/write) und [`writeln()`](/de/docs/Web/API/Document/writeln) der [`Document`](/de/docs/Web/API/Document) Schnittstelle akzeptieren jetzt neben Zeichenketten auch [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte als Parameter. ([Firefox Bug 1906301](https://bugzil.la/1906301)).
- Die Eigenschaften [`text`](/de/docs/Web/API/HTMLScriptElement/text), [`innerText`](/de/docs/Web/API/HTMLElement/innerText) und [`textContent`](/de/docs/Web/API/HTMLElement/textContent) der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) Schnittstelle akzeptieren jetzt [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte als Wert, während [`src`](/de/docs/Web/API/HTMLScriptElement/src) [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Werte akzeptiert. ([Firefox Bug 1905706](https://bugzil.la/1905706)).
- Die Methoden [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) können mit einem [`TrustedScript`](/de/docs/Web/API/TrustedScript) aufgerufen werden. ([Firefox Bug 1931290](https://bugzil.la/1931290)).
- Die globale Eigenschaft [`trustedTypes`](/de/docs/Web/API/Window/trustedTypes) ist verfügbar, um Zugriff auf die Trusted Types API zu erhalten.
- Die Eigenschaften [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) können mit [trusted types](/de/docs/Web/API/Trusted_Types_API) aufgerufen werden.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
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
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.security.trusted_types.enabled</code></td>
    </tr>
  </tbody>
</table>

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im Status "Entwurf" befinden und getestet werden, zur Nutzung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene für die Durchführung von Berechnungen und Grafikrendering unter Verwendung der [Graphics Processing Unit](https://de.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

### Unterstützung der Reporting API für CSP-Verletzungen

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt jetzt die Berichterstattung von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verstößen.

[`Report`](/de/docs/Web/API/Report)-Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Schnittstelle zurückgegeben werden, können jetzt einen `type`-Wert von `"csp-violation"` und eine `body`-Eigenschaft haben, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle enthält. Dies ermöglicht die Meldung von CSP-Verstößen innerhalb einer Webseite.

CSP-Verstoßmeldungen können auch an entfernte Endpunkte gesendet werden, die namentlich in der CSP {{CSP("report-to")}}-Direktive angegeben sind – Endpunktnamen und entsprechende URLs müssen zunächst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortkopfzeilen definiert werden. Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report)-Objekts, mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, der die CSP {{CSP("report-uri")}}-Direktive verwendet, um die URL des Berichtsendpunkts festzulegen, und ein [CSP-spezifisches JSON-Verstoßberichtsformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat. ([Firefox Bug 1391243](https://bugzil.la/1391243)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

Dies fügt die auf `Promise` basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensource-Puffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617) für weitere Informationen.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

#### AVIF Konformitätsstrenge

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bildern angewendet wird. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

Erlaubte Werte sind:

- `0`: Akzeptiere Bilder mit Verstößen gegen die Spezifikation sowohl in Empfehlungen ("sollte" Sprache) als auch in Anforderungen ("muss" Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
- `1` (Standard): Verwerfe Verstöße gegen Anforderungen, erlaube aber Verstöße gegen Empfehlungen.
- `2`: Streng. Verwerfe jegliche Verstöße in Anforderungen oder Empfehlungen.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

#### JPEG XL-Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/)-Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass die Funktion, wie unten gezeigt, nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist oder nicht).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bietet einen Mechanismus zur Gestaltung beliebiger Textranges in einem Dokument (Verallgemeinerung des Verhaltens anderer Pseudo-Elemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}}). Die Ranges werden in JavaScript mithilfe von [`Range`](/de/docs/Web/API/Range)-Instanzen definiert, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert und dann mit einem Namen mithilfe von [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registriert werden. Das CSS [`::highlight`](/de/docs/Web/CSS/::highlight) Pseudo-Element wird verwendet, um einem registrierten Highlight Stile zuzuweisen. Siehe [Firefox Bug 1703961](https://bugzil.la/1703961) für weitere Details.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox Bug 1750902](https://bugzil.la/1750902).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Entfernte Version</th>
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

#### Auswahlen über die Shadow-DOM-Grenze hinweg

Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zu erhalten, die den aktuellen ausgewählten Bereich oder die Bereiche darstellen. Im Gegensatz zu [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) kann diese Methode Bereiche mit Anker- oder Fokus-Knoten innerhalb eines Shadow DOM zurückgeben, jedoch nur, wenn sie die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte erhält, die diese Knoten enthalten. Andernfalls gibt sie einen Bereich zurück, der neu festgelegt wurde, um den Hostknoten der Shadow-Root einzuschließen, die den Knoten enthält. Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse), und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls modifiziert, um Knoten innerhalb einer Shadow-Root zu akzeptieren.

Benutzerauswahl über Maus, Tastatur usw. kann überall im Dokument beginnen und enden, einschließlich innerhalb offener oder geschlossener Shadow-Bäume. ([Firefox Bug 1867058](https://bugzil.la/1867058)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
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
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.shadowdom.selection_across_boundary.enabled</code></td>
    </tr>
  </tbody>
</table>

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert ist, werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie beide standardmäßig deaktiviert sind. Siehe [Firefox Bug 1057233](https://bugzil.la/1057233) für weitere Details.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

#### GeometryUtils-Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` ordnen den angegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten zu. (Siehe [Firefox Bug 918189](https://bugzil.la/918189) für weitere Details.)

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

#### GeometryUtils-Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder dem Viewport zurück. (Siehe [Firefox Bug 917755](https://bugzil.la/917755) für weitere Details.)

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

#### Primäre Abwicklung von Zahlungen

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während der Tests der Benutzeroberfläche auftrat, haben wir beschlossen, den Versand dieser API zu verschieben, während über mögliche Änderungen an der API diskutiert wird. Die Arbeit daran ist im Gange. (Siehe [Firefox Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Seite. Diese Funktion ist auf Android in allen Builds aktiviert, jedoch auf Desktop hinter einer Präferenz (außer es ist anders angegeben).

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

Die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) erlaubt es, ein Gerät auf eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt wird und die Anforderungen des Browsers zur Sperrung erfüllt. Normalerweise ist das Sperren der Ausrichtung nur auf mobilen Geräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird. Siehe [Firefox Bug 1697647](https://bugzil.la/1697647) für weitere Details.

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

### Priorisierte Aufgaben-Scheduling-API

Die [Priorisierte Aufgaben-Scheduling-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code eines Webseitenentwicklers oder in Drittanbieterbibliotheken und -frameworks definiert sind. ([Firefox Bug 1734997](https://bugzil.la/1734997))

Diese Funktion wurde in Firefox Nightly in Firefox 101 aktiviert. Die Unterstützung in Firefox Nightly 135 wurde vorübergehend deaktiviert, um [Beschädigung im laufenden Betrieb](https://bugzil.la/1937232) zu vermeiden.

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
      <td>101</td>
      <td>Nein</td>
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

### Benachrichtigungs-API

Benachrichtigungen haben die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ([Firefox Bug 1794475](https://bugzil.la/1794475)).

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

### Blockieren von Klartext-Anfragen von Flash auf verschlüsselten Seiten

Um Man-in-the-Middle (MitM)-Angriffe durch Flash-Inhalte auf verschlüsselten Seiten zu mildern, wurde eine Präferenz hinzugefügt, um `OBJECT_SUBREQUEST`s wie aktiven Inhalt zu behandeln. Siehe [Firefox Bug 1190623](https://bugzil.la/1190623) für weitere Details.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

### Kennzeichnung unsicherer Seiten

Die zwei `security.insecure_connection_text_*`-Präferenzen fügen neben dem traditionellen Sperrsymbol im Adressfeld einen Text "Nicht sicher" ein, wenn eine Seite unsicher geladen wird (also unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` kürzt das `https:`-Präfix aus den URLs in der Adressleiste. Siehe [Firefox Bug 1853418](https://bugzil.la/1853418) für weitere Details.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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
        <code>security.insecure_connection_text.enabled</code> für den normalen Browserverlauf;
        <code>security.insecure_connection_text.pbmode.enabled</code> für den privaten Modus
        <code>browser.urlbar.trimHttps</code> um HTTPS-Präfix zu trimmen
      </td>
    </tr>
  </tbody>
</table>

### Berechtigungsrichtlinie / Feature-Policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Web-Entwicklern, das Verhalten bestimmter Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und zu ändern. Es ist ähnlich wie CSP, kontrolliert jedoch Funktionen statt Sicherheitsverhalten.

Dies ist in Firefox als **Feature-Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Bitte beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut auf `<iframe>`-Elementen gesetzt werden können, auch wenn die Benutzerpräferenz nicht gesetzt ist.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

### Datenschutzfreundliche Attributions-API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung für die Attributierung von Anzeigen mit dem neuen `navigator.privateAttribution`-Objekt mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im Explainer](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Webseiten über [Origin Trials](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
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
      <th>Präferenzname</th>
      <td colspan="2">
        <code>dom.origin-trials.private-attribution.state</code>
      </td>
    </tr>
  </tbody>
</table>

## HTTP

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanfragen und Bilderanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
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
      <th>Präferenzname</th>
      <td colspan="2">
        <code>image.jxl.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht für Subanfragen von Drittanbietern zum Laden von Bildern oder Frames auf einer Drittanbieter-Seite und so weiter. Weitere Details finden Sie unter [Firefox Bug 1617609](https://bugzil.la/1617609).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

### Access-Control-Allow-Headers-Wildcard deckt nicht die Autorisierung ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Vorabfrage")}}, die angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen. Die Antwortdirektive kann ein Wildcard-Zeichen (`*`) enthalten, das anzeigt, dass die endgültige Anfrage alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig fügt Firefox den `Authorization`-Header in die endgültige Anfrage ein, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat. Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einschließt. Weitere Details finden Sie unter [Firefox Bug 1687364](https://bugzil.la/1687364).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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

### Clear-Site-Data: cache kann den Browsercache leeren

Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) kann zusammen mit den Direktiven [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den lokalen Browsercache zu leeren. Weitere Details finden Sie unter [Firefox Bug 1942272](https://bugzil.la/1942272).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Hinzugefügte Version</th>
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
      <th>Präferenzname</th>
      <td colspan="2"><code>privacy.clearSiteDataHeader.cache.enabled</code></td>
    </tr>
  </tbody>
</table>

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly- und Developer Edition-Kanälen, bevor wir sie in die Beta- und Release-Versionen übergehen lassen. Die unten stehenden Funktionen sind die derzeitige Auswahl an experimentellen Entwicklerwerkzeugfunktionen.

## Siehe auch

- [Firefox-Entwickler-Release-Notizen](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
