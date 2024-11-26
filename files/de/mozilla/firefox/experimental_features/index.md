---
title: Experimentelle Funktionen in Firefox
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: b0e0d3b10e30bb0f339d65c7ccb96ee80326cf77
---

{{FirefoxSidebar}}

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, einschließlich solcher für vorgeschlagene oder hochmoderne Webplattform-Standards, zusammen mit Informationen über die Builds, in denen sie vorhanden sind, ob sie "standardmäßig" aktiviert sind oder nicht, und welche _Präferenzen_ zum Aktivieren oder Deaktivieren verwendet werden können. Dies ermöglicht es Ihnen, die Funktionen zu testen, bevor sie veröffentlicht werden.

Neue Funktionen erscheinen zuerst im [Firefox Nightly](https://www.mozilla.org/de/firefox/channel/desktop/) Build, wo sie oft standardmäßig aktiviert sind. Sie werden später in die [Firefox Developer Edition](https://www.mozilla.org/de/firefox/developer/) und schließlich in den Release-Build weitergeleitet. Nachdem eine Funktion standardmäßig in einem Release-Build aktiviert ist, wird sie nicht mehr als experimentell betrachtet und sollte aus dem Thema entfernt werden.

Experimentelle Funktionen können mit dem [Firefox Konfigurations-Editor](https://support.mozilla.org/de/kb/about-config-editor-firefox) (geben Sie `about:config` in die Firefox Adressleiste ein) aktiviert oder deaktiviert werden, indem die zugehörige _Präferenz_ aus der unten stehenden Liste geändert wird.

> [!NOTE]
> Für Redakteure - Wenn Sie Funktionen zu diesen Tabellen hinzufügen, versuchen Sie bitte, einen Link zu dem/den relevanten Fehler(n) mit `[Firefox bug <number>](https://bugzil.la/<number>)` einzufügen.

## HTML

### Autokorrektur von bearbeitbaren Textelementen

Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) (und die entsprechende [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) Eigenschaft) erlauben die Autovervollständigung in bearbeitbaren Textelementen, einschließlich der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut gesetzt haben ([Firefox Bug 1725806](https://bugzil.la/1725806)).

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
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.forms.autocorrect</code></td>
    </tr>
  </tbody>
</table>

### Layout für `input type="search"`

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol hat, sobald jemand darin zu tippen beginnt, um andere Browser-Implementierungen anzupassen. (Siehe [Firefox Bug 558594](https://bugzil.la/558594) für weitere Details.)

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
      <td colspan="2"><code>layout.forms.input-type-search.enabled</code></td>
    </tr>
  </tbody>
</table>

### Passwortanzeige umschalten

HTML-Passwort-Eingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Element/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox Bug 502258](https://bugzil.la/502258)).

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.forms.reveal-password-button.enabled</code></td>
    </tr>
  </tbody>
</table>

### Nur-Text `contenteditable` Modus

Der `plaintext-only` Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; Rich-Text-Formatierungen sind deaktiviert und jede Formatierung im eingefügten Text wird automatisch entfernt. (Siehe [Firefox Bug 1922723](https://bugzil.la/1922723) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.element.contenteditable.plaintext-only.enabled</code></td>
    </tr>
  </tbody>
</table>

## CSS

### Hex-Boxen zur Anzeige von Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie nicht erwartet werden. (Siehe [Firefox Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2">
        <code>layout.css.control-characters.enabled</code> oder
        <code>layout.css.control-characters.visible</code>
      </td>
    </tr>
  </tbody>
</table>

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, anzugeben, wie heruntergefallene, erhobene und versunkene Anfangsbuchstaben dargestellt werden. (Siehe [Firefox Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.initial-letter.enabled</code></td>
    </tr>
  </tbody>
</table>

### `from` Schlüsselwort für relative Farben

Das `from` Schlüsselwort wird jetzt als gültige CSS-Syntax geparst, wenn die `layout.css.relative-color-syntax.enabled` Präferenz auf `true` gesetzt ist.
Obwohl dieses Schlüsselwort derzeit keine Wirkung hat, erzeugt es keine Syntaxfehler, wenn es an gültigen Stellen in CSS-Farb-Funktionen verwendet wird, und unterstützt so die laufende Arbeit an [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).
Siehe [Firefox Bug 1889133](https://bugzil.la/1889133) für mehr Details.

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
      <td>Nein</td>
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
      <td colspan="2"><code>layout.css.relative-color-syntax.enabled</code></td>
    </tr>
  </tbody>
</table>

### Einzelne Zahlen als Seitenverhältnis in Medienabfragen

Unterstützung für die Verwendung einer einzelnen {{cssxref("number")}} als {{cssxref("ratio")}}, wenn das Seitenverhältnis für eine [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) spezifiziert wird. (Siehe [Firefox Bug 1565562](https://bugzil.la/1565562) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.aspect-ratio-number.enabled</code></td>
    </tr>
  </tbody>
</table>

### backdrop-filter Eigenschaft

Die {{cssxref("backdrop-filter")}} Eigenschaft wendet Filtereffekte auf den Bereich hinter einem Element an. (Siehe [Firefox Bug 1178765](https://bugzil.la/1178765) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.backdrop-filter.enabled</code></td>
    </tr>
  </tbody>
</table>

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion, wie sie auf {{cssxref("width")}} und andere Größenangaben angewendet wird. Diese Funktion ist bereits gut unterstützt für die CSS Grid Layout Spurgrößenanpassung. (Siehe [Firefox Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.fit-content-function.enabled</code></td>
    </tr>
  </tbody>
</table>

### Scrollgesteuerte Animationen

Früher als "scrollverknüpfte Animationen" bezeichnet, hängt eine scrollgesteuerte Animation von der Scrollposition eines Scrollbalkens ab, anstatt von Zeit oder einer anderen Dimension. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Shorthand-Eigenschaft) ermöglichen es Ihnen, anzugeben, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scrollgesteuerte Animation verwendet werden kann. Die Scroll-Timeline kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) assoziiert werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namen gesetzt wird, der mit `scroll-timeline-name` definiert ist.

Wenn Sie die {{cssxref('scroll-timeline')}} Shorthand-Eigenschaft verwenden, muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Lang- und Shorthand-Eigenschaften sind beide hinter der Präferenz verfügbar.

Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Achse eines Scrollbalkens in einem Vorfahrenelement für die Timeline verwendet wird.

Für weitere Informationen siehe [Firefox Bug 1807685](https://bugzil.la/1807685), [Firefox Bug 1804573](https://bugzil.la/1804573), [Firefox Bug 1809005](https://bugzil.la/1809005), [Firefox Bug 1676791](https://bugzil.la/1676791), [Firefox Bug 1754897](https://bugzil.la/1754897) und [Firefox Bug 1737918](https://bugzil.la/1737918).

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### @scope At-Regel

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, spezifische Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren übermäßig zu erhöhen ([Firefox Bug 1886441](https://bugzil.la/1886441)).

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
      <td colspan="2"><code>layout.css.at-scope.enabled</code></td>
    </tr>
  </tbody>
</table>

### @font-face src Feature-Überprüfung

Der `@font-face` [`src` Descriptor](/de/docs/Web/CSS/@font-face/src) unterstützt jetzt die `tech()` Funktion, die es erlaubt, von einem Font-Resource-Downgrade abhängig zu machen, ob der User-Agent eine spezielle Schriftartfunktion oder Technologie unterstützt. Siehe [Firefox Bug 1715546](https://bugzil.la/1715546) für weitere Details.

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
      <td>105</td>
      <td>Ja</td>
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
      <td colspan="2"><code>layout.css.font-tech.enabled</code></td>
    </tr>
  </tbody>
</table>

### font-variant-emoji Eigenschaft

Die CSS- [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) Eigenschaft ermöglicht es Ihnen, einen standardmäßigen Präsentationsstil für die Darstellung von Emojis festzulegen. Siehe ([Firefox Bug 1461589](https://bugzil.la/1461589)) für weitere Details.

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.font-variant-emoji.enabled</code></td>
    </tr>
  </tbody>
</table>

### page-orientation Descriptor

Der **`page-orientation`** [CSS](/de/docs/Web/CSS) Descriptor bei der {{cssxref("@page")}} At-Regel steuert die Rotation einer gedruckten Seite. Er handhabt den Fluss des Inhalts über Seiten hinweg, wenn die Orientierung einer Seite geändert wird. Dieses Verhalten unterscheidet sich von dem [`size`](/de/docs/Web/CSS/@page/size) Descriptor, indem ein Benutzer die Richtung definieren kann, in der die Seite gedreht wird. Siehe ([Firefox Bug 1673987](https://bugzil.la/1673987)) für weitere Details.

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
      <td>111</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>111</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>111</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>111</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.page-orientation.enabled</code></td>
    </tr>
  </tbody>
</table>

### prefers-reduced-transparency Medienfunktion

Die CSS- [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienfunktion lässt Sie erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge der transparenten oder durchscheinenden Schichteffekte auf ihrem Gerät zu minimieren. Siehe ([Firefox Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.prefers-reduced-transparency.enabled</code></td>
    </tr>
  </tbody>
</table>

### inverted-colors Medienfunktion

Die CSS- [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Medienfunktion ermöglicht es Ihnen zu erkennen, ob ein User-Agent oder das zugrunde liegende Betriebssystem Farben invertiert. Siehe ([Firefox Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.inverted-colors.enabled</code></td>
    </tr>
  </tbody>
</table>

### Benannte View-Progress-Timelines-Eigenschaft

Die CSS- [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, indem Sie angeben, dass sein Vorfahren-Scroller-Element die Quelle einer View-Progress-Timeline ist. Der Name kann dann der `animation-timeline` zugewiesen werden, welche dann das zugehörige Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt. Siehe ([Firefox Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### Anonyme View-Progress-Timelines-Funktion

Die CSS- [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine View-Progress-Timeline ist, welche das Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt wird. Die Funktion definiert die Achse des übergeordneten Elements, das die Timeline liefert, zusammen mit dem Versatz innerhalb des sichtbaren Bereichs, an dem die Animation beginnt. Siehe ([Firefox Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### zoom Eigenschaft

Die nicht-standardisierte CSS- {{cssxref("zoom")}} Eigenschaft ist in der Nightly-Version aktiviert und lässt Sie ein Element ähnlich der {{cssxref("transform")}} Eigenschaft vergrößern, jedoch beeinflusst sie die Layoutgröße des Elements. Siehe ([Firefox Bug 1855763](https://bugzil.la/1855763) und [Firefox Bug 390936](https://bugzil.la/390936)) für weitere Details.

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
      <td>120</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>120</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>120</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>120</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2">
      <code>layout.css.zoom.enabled</code>
    </td>
    </tr>
  </tbody>
</table>

Um die Kompatibilität mit diesen Änderungen sicherzustellen, sind die [Vendor-präfixierten Transformations-Eigenschaften](#vendor-präfixierte_transformationseigenschaften) und die [Vendor-präfixierten Übergangseigenschaften](#vendor-präfixierte_übergangseigenschaften) in der Nightly-Version deaktiviert. Diese Änderungen werden in den folgenden Abschnitten beschrieben.

### text-wrap: balance & stable Werte

Die [`text-wrap`](/de/docs/Web/CSS/text-wrap) CSS-Eigenschaftswerte `balance` und `stable` erlauben es, das Layout von kurzen Inhalten auf eine ausgewogene Weise zu umbrechen und dafür zu sorgen, dass sich editierbare Inhalte während der Bearbeitung durch den Benutzer nicht umfließen. (Siehe [Firefox Bug 1731541](https://bugzil.la/1731541) für weitere Details.)

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
      <td>120</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>120</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>120</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>120</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.text-wrap-balance.enabled, layout.css.text-wrap-balance.limit, layout.css.text-wrap-balance-after-clamp.enabled</code></td>
    </tr>
  </tbody>
</table>

### Vendor-präfixierte Transformationseigenschaften

Die mit `-moz-` präfigierten [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Eigenschaften wurden in der Nightly-Version deaktiviert, indem die `layout.css.prefixes.transforms` Präferenz auf `false` gesetzt wurde. ([Firefox Bug 1855763](https://bugzil.la/1855763)). Konkret sind die deaktivierten Eigenschaften:

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
      <th>Hinzugefügte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>120</td>
      <td>Nein</td>
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
      <th>Präferenzname</th>
      <td colspan="2">
      <code>layout.css.prefixes.transforms</code>
    </td>
    </tr>
  </tbody>
</table>

### Vendor-präfixierte Übergangseigenschaften

Die mit `-moz-` präfigierten [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Eigenschaften wurden in der Nightly-Version deaktiviert, indem die `layout.css.prefixes.transitions` Präferenz auf `false` gesetzt wurde. ([Firefox Bug 1855763](https://bugzil.la/1855763)). Konkret sind die deaktivierten Eigenschaften:

- `-moz-transition`
- `-moz-transition-delay`
- `-moz-transition-duration`
- `-moz-transition-property`
- `-moz-transition-timing-function`

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
      <td>120</td>
      <td>Nein</td>
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
      <th>Präferenzname</th>
      <td colspan="2">
      <code>layout.css.prefixes.transitions</code>
    </td>
    </tr>
  </tbody>
</table>

### UA-Stile für `<h1>` in verschachtelten Gliederungselementen

Die `<h1>`-Überschrift wird jetzt nicht mehr in der Schriftgröße kleiner, wenn sie innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Content_categories#sectioning_content) wie `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt wird. Die UA-Stile für `<h1>`, die innerhalb von Gliederungselementen verschachtelt sind, sind nicht mehr relevant, da der Umrissalgorithmus [aus der HTML-Spezifikation entfernt](https://github.com/whatwg/html/pull/7829) wurde. ([Firefox Bug 1883896](https://bugzil.la/1883896)).

> [!NOTE]
> Die Präferenz für dieses Feature funktioniert umgekehrt: Sie ist auf `false` im Nightly-Build gesetzt, was den UA-Stil für Überschriften in verschachtelten Gliederungselementen entfernt. Sie ist auf `true` in allen anderen Kanälen gesetzt, was die vorhandene UA-Stilierung für die verschachtelten Überschriften beibehält.

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
      <th>Präferenzname</th>
      <td colspan="2">
        <code>layout.css.h1-in-section-ua-styles.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### `shape()` Funktion

Die CSS- [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} unter Verwendung eines oder mehrerer "Formbefehle" zu definieren. Diese Befehle sind den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ist in gewisser Hinsicht der `{{cssxref("basic-shape/path","path()")}}` Funktion ähnlich, aber im Gegensatz zu `path()`, das die [SVG-Pfad](/de/docs/Web/SVG/Element/path) Syntax verwendet, verwendet `shape()` die standardmäßige CSS-Syntax. Dies ermöglicht es Ihnen, Formen einfach zu erstellen und zu bearbeiten und erlaubt auch die Verwendung von CSS-Mathematikfunktionen. Für weitere Details siehe [Firefox Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path`, und [Firefox Bug 1884425](https://bugzil.la/1884425) für ihre Interpolationsunterstützung.

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
      <td colspan="2"><code>layout.css.basic-shape-shape.enabled</code></td>
    </tr>
  </tbody>
</table>

### `@starting-style` At-Regel

Die CSS- [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel ermöglicht es Ihnen, die Startstile eines Elements für einen CSS-Übergang zu setzen, wenn das Element keinen Standardanfangsstil hat. Dies ist besonders nützlich für Elemente, die beim ersten Mal nicht sichtbar sind, wie [`popover`](/de/docs/Web/HTML/Global_attributes/popover) oder ['dialog'](/de/docs/Web/HTML/Element/dialog). Unterstützt derzeit noch nicht die Animation von `display: none`. Für weitere Details siehe [Firefox Bug 1834876](https://bugzil.la/1834876) und [Firefox Bug 1834877](https://bugzil.la/1834877).

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.starting-style-at-rules.enabled</code></td>
    </tr>
  </tbody>
</table>

### Symmetrisches `letter-spacing`

Die CSS- {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand insbesondere bei gemischt-richtungsweisenden Texten verbessern [Firefox Bug 1891446](https://bugzil.la/1891446).

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.letter-spacing.model</code></td>
    </tr>
  </tbody>
</table>

### `calc()` Farbkanaäle in relativen Farben

Die CSS- [`calc()`](/de/docs/Web/CSS/calc) Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen, sodass Sie Änderungen an Farben in unterschiedlichen Farbräumen oder bei der Verwendung verschiedener funktionaler Notationen korrekt berechnen können [Firefox Bug 1889561](https://bugzil.la/1889561).

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.relative-color-syntax.enabled</code></td>
    </tr>
  </tbody>
</table>

### CSS Ankerpositionierung

Das [CSS Ankerpositionierungs-](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definiert mehrere Funktionen, die es ermöglichen, Elemente als Ankerelemente zu definieren und andere Elemente relativ zu Ankerelementen zu positionieren. Dies ermöglicht es beispielsweise, dass Tooltips zusammen mit dem zugehörigen Inhalt angezeigt werden, während es durch das Sichtfenster scrollt, sich bewegt, wenn es außerhalb des Sichtfensters liegen würde, und verschwindet, wenn der Anker offscreen geht. Das Set an Funktionen wird schrittweise hinter einer Präferenz eingeführt ([Firefox Bug 1838746](https://bugzil.la/1838746)).

Die Teile, die implementiert wurden, sind:

- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) und [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131).

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.anchor-positioning.enabled</code></td>
    </tr>
  </tbody>
</table>

### :has-slotted Pseudoklasse

Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalte haben, die einem {{HTMLElement("slot")}} hinzugefügt werden, wenn ein [Web Component](/de/docs/Web/API/Web_components) gerendert wird ([Firefox Bug 1921747](https://bugzil.la/1921747)).

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
      <td colspan="2"><code>layout.css.has-slotted-selector.enabled</code></td>
    </tr>
  </tbody>
</table>

## SVG

### SVGPathSeg APIs

Die SVGPathSeg APIs werden abgeschaltet und wurden hinter einer Präferenz platziert. Dazu gehören: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/de/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`. (Siehe [Firefox Bug 1388931](https://bugzil.la/1388931) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.svg.pathSeg.enabled</code></td>
    </tr>
  </tbody>
</table>

## JavaScript

### JSON.parse mit Quelle

Der [Vorschlag für `JSON.parse`-Quelltextzugriff](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von [`JSON.parse`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse), um Funktionen bereitzustellen, die Probleme im Zusammenhang mit Präzisionsverlust beim Konvertieren von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text mildern. ([Firefox Bug 1913085](https://bugzil.la/1913085), [Firefox Bug 1925334](https://bugzil.la/1925334)).

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
      <td colspan="2"><code>javascript.options.experimental.json_parse_with_source</code></td>
    </tr>
  </tbody>
</table>

## APIs

### Cookie Store API

Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die den Event-Loop nicht blockiert und nicht auf `Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ein Teil der Cookie Store API wurde implementiert ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

- Die [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle, jedoch ohne `partitioned` in den Rückgabewerten.
- Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) Schnittstelle, jedoch ohne `partitioned` Eigenschaften.
- Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) Eigenschaft.
- Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) Eigenschaft.

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Integrierte Webkomponenten mit "öffnen" und "schließen" Semantik, wie modale Dialoge und Popups, können mit geräte-spezifischen Mechanismen geschlossen werden. Zum Beispiel können Sie auf Android einen Dialog mit der Zurück-Taste schließen. Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht Entwicklern das Implementieren von UI-Komponenten, wie benutzerdefinierte Sidebars, die ebenfalls mit nativen Mechanismen geschlossen werden können. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

### Grafik: Canvas, WebGL und WebGPU

#### Treffzonen

Ob die Mauskoordinaten innerhalb eines bestimmten Bereichs auf dem Canvas liegen, ist ein häufiges zu lösendes Problem. Die Hit-Region API ermöglicht es Ihnen, einen Bereich Ihres Canvas zu definieren und bietet eine weitere Möglichkeit, interaktive Inhalte auf einem Canvas für Barrierefreiheitstools zugänglich zu machen.

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

#### WebGL: Entwurfs-Erweiterungen

Wenn diese Präferenz aktiviert ist, werden alle aktuell als "Entwurf" deklarierten WebGL-Erweiterungen, die getestet werden, zur Nutzung freigeschaltet. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Durchführung von Berechnungen und Grafik-Rendering unter Nutzung der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

### Reporting API Unterstützung für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt nun das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Verstößen.

Instanzen von [`Report`](/de/docs/Web/API/Report), die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können nun einen `type` Wert von `"csp-violation"` haben und eine `body` Eigenschaft enthalten, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle ist. Dies erlaubt es, CSP-Verstöße innerhalb einer Webseite zu melden.

CSP-Verstoßmeldungen können auch an entfernte Endpunkte gesendet werden, die per Namen im CSP {{CSP("report-to")}} Directive spezifiziert sind - die Endpunkts-Namen und zugehörigen URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwort-Headern definiert werden. Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report) Objekts, mit einer `body` Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, der die CSP {{CSP("report-uri")}} Direktive verwendet, um die URL des Berichtsendepunkts festzulegen, und ein [CSP-spezifisches JSON Verstoßberichtformat](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat. ([Firefox-Bug 1391243](https://bugzil.la/1391243)).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Die folgenden experimentellen Funktionen umfassen solche, die in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffers

Dies fügt die promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellenpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie in [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

#### AVIF Konformitäts-Striktheit

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Striktheit_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) Bildern angewandt wird. Dies ermöglicht es Firefox Nutzern, Bilder anzuzeigen, die in einigen anderen Browsern wiedergegeben werden, selbst wenn sie nicht strikt den Vorgaben entsprechen.

Erlaubte Werte sind:

- `0`: Akzeptiere Bilder mit Spezifikationsverletzungen sowohl in Empfehlungen ("sollte" Sprache) als auch in Anforderungen ("muss" Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
- `1` (Standard): Verweigere Verstöße gegen Anforderungen, erlauben jedoch Verstöße gegen Empfehlungen.
- `2`: Strikt. Lehnt Verstöße gegen sowohl Anforderungen als auch Empfehlungen ab.

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Weitere Details finden Sie im [Firefox-Bug 1539075](https://bugzil.la/1539075).

Beachten Sie, dass die Funktion, wie unten gezeigt, nur in Nightly-Builds verfügbar ist, unabhängig davon, ob die Präferenz gesetzt ist.

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

### OpenFont COLRv1 Fonts

Diese Funktion bietet Unterstützung für die [OpenFont COLRv1 Schrifttyp-Spezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/). Dadurch können komprimierungsfreundliche Farbvektorschriften mit Verläufen, Komposition und Mischungen geladen werden, indem die CSS [`@font-face`](/de/docs/Web/CSS/@font-face) Regel oder die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) genutzt werden. Weitere Details finden Sie im [Firefox-Bug 1740530](https://bugzil.la/1740530).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bietet einen Mechanismus zum Stylen beliebiger Textbereiche in einem Dokument (verallgemeinert das Verhalten anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}}). Die Bereiche werden in JavaScript unter Verwendung von [`Range`](/de/docs/Web/API/Range) Instanzen definiert, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind, und dann unter Verwendung von [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) mit einem Namen registriert werden. Das CSS [`::highlight`](/de/docs/Web/CSS/::highlight) Pseudoelement wird verwendet, um Styles auf ein registriertes Highlight anzuwenden. Weitere Details finden Sie im [Firefox-Bug 1703961](https://bugzil.la/1703961).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

### Service Workers

#### Vorladen von Service-Worker-Ressourcen bei Navigation

Die [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) Schnittstelle kann verwendet werden, um das Vorladen von Ressourcen beim Navigieren zu einer Seite zu aktivieren. Das Vorladen erfolgt parallel zum Hochfahren des Workers, wodurch die Gesamtzeit von Navigation bis zum Abrufen der Ressourcen verkürzt wird.

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung. Sie ist in allen Builds standardmäßig deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

#### Selektionen über Schatten-DOM-Grenzen hinweg

Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange) Objekten zu erhalten, die den aktuell ausgewählten Bereich oder Bereiche repräsentieren. Im Gegensatz zu [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) kann diese Methode Bereiche zurückgeben, deren Anker oder Fokus-Knoten innerhalb eines Schatten-DOMs liegen, aber nur, wenn ihr die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte übergeben werden, die diese Knoten enthalten. Andernfalls gibt sie einen Bereich zurück, der auf den Hostknoten der Schattenwurzel, die den Knoten enthält, umgeschrieben wurde. Die `Selection` Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls so verändert, dass sie Knoten innerhalb einer Schattenwurzel akzeptieren.

Benutzerauswahl per Maus, Tastatur und so weiter, kann überall im Dokument beginnen und enden, einschließlich innerhalb beliebiger offener oder geschlossener Schattentrees. ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

#### HTMLMediaElement Methode: setSinkId()

[`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) ermöglicht es Ihnen, die Sink-ID eines Audioausgabegeräts auf einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) festzulegen, und damit zu ändern, wohin der Ton ausgegeben wird. Weitere Details finden Sie im [Firefox-Bug 934425](https://bugzil.la/934425).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>64</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>64</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>64</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>64</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>media.setsinkid.enabled</code></td>
    </tr>
  </tbody>
</table>

#### HTMLMediaElement Attribute: audioTracks und videoTracks

Das Aktivieren dieser Funktion fügt allen HTML-Media-Elementen die Attribute [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) hinzu. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Attribute nicht, sodass sie beide standardmäßig deaktiviert sind. Weitere Details finden Sie im [Firefox-Bug 1057233](https://bugzil.la/1057233).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` transformieren den übergebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Weitere Details finden Sie im [Firefox-Bug 918189](https://bugzil.la/918189)).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Knoten oder Viewport zurück. (Weitere Details finden Sie im [Firefox-Bug 917755](https://bugzil.la/917755)).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während der Prüfung der Benutzeroberfläche auftrat, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API stattfinden. Die Arbeit wird fortgesetzt. (Weitere Details finden Sie im [Firefox-Bug 1318984](https://bugzil.la/1318984)).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website. Diese Funktion ist auf Android in allen Builds aktiviert, aber auf dem Desktop hinter einer Präferenz (sofern unten nicht anders angegeben).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode ermöglicht es, ein Gerät auf eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt wird und von den Browser-Vorsperrungs-Anforderungen erlaubt wird. Üblicherweise ist das Sperren der Ausrichtung nur auf mobilen Geräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird. Weitere Details finden Sie im [Firefox-Bug 1697647](https://bugzil.la/1697647).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Die [Priorisierte Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.

Diese ist ab Firefox 101 nur in Firefox Nightly aktiviert. Es wird keine Präferenz angeboten, um sie in anderen Versionen zu aktivieren.

### Notifications API

Benachrichtigungen haben die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) standardmäßig auf Windows-Systemen und in der Nightly-Version ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Um MitM-Angriffe (Man-in-the-Middle) durch Flash-Inhalte auf verschlüsselten Seiten zu mildern, wurde eine Präferenz hinzugefügt, um `OBJECT_SUBREQUEST`s als aktive Inhalte zu behandeln. Weitere Details finden Sie im [Firefox-Bug 1190623](https://bugzil.la/1190623).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

### Kennzeichnung unsicherer Seiten

Diese beiden Präferenzen fügen ein "Unsicher" Textlabel in der Adressleiste neben dem traditionellen Schloss-Symbol hinzu, wenn eine Seite unsicher geladen wird (d.h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Weitere Details finden Sie im [Firefox-Bug 1335970](https://bugzil.la/1335970).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
      <th>Version hinzugefügt</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>60</td>
      <td>Nein</td>
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
        <code>security.insecure_connection_text.enabled</code> für normales
        Browserfenster;
        <code>security.insecure_connection_text.pbmode.enabled</code> für
        privates Browserfenster
      </td>
    </tr>
  </tbody>
</table>

### Permissions Policy / Feature Policy

[Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und deren Verhalten zu ändern. Sie ähnelt CSP, steuert jedoch Funktionen anstelle des Sicherheitsverhaltens. Dies ist in Firefox als **Feature Policy** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Element/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, selbst wenn die Benutzerpräferenz nicht gesetzt ist.

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Die [Permissions API](/de/docs/Web/API/Permissions_API) Berechtigungen `microphone` und `camera` werden unterstützt, sodass eine Webseite abfragen kann, ob der Zugriff auf die entsprechende Hardware gewährt, abgelehnt oder noch genehmigt werden muss ([Firefox-Bug 1609427](https://bugzil.la/1609427), [Firefox-Bug 1915222](https://bugzil.la/1915222)).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

### Clear-Site-Data "cache" Direktive

Die HTTP-Antwort-Header-Direktive [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data) `cache` löscht den Browser-Cache für die anfragende Website.

> [!NOTE]
> Dies war ursprünglich standardmäßig aktiviert, wurde aber in Version 94 hinter eine Präferenz gesetzt ([Firefox-Bug 1729291](https://bugzil.la/1729291)).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung für Anzeigenzuweisungen unter Verwendung des neuen `navigator.privateAttribution` Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im Erläuterungsdokument](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

Der HTTP [`Accept`](/de/docs/Web/HTTP/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

### SameSite=Lax als Standard

[`SameSite` Cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht bei cross-site Unteranforderungen, um Bilder oder Frames in eine Drittanbieter-Site zu laden und so weiter. Weitere Details finden Sie im [Firefox-Bug 1617609](https://bugzil.la/1617609).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

### Access-Control-Allow-Headers Wildcard schließt Authorization nicht ein

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, der angibt, welche Anfrage-Header in die endgültige Anfrage aufgenommen werden dürfen. Die Antwortrichtlinie kann einen Wildcard (`*`) enthalten, die angibt, dass die endgültige Anfrage alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig schließt Firefox den `Authorization`-Header in die endgültige Anfrage ein, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde. Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einschließt. Weitere Details finden Sie im [Firefox-Bug 1687364](https://bugzil.la/1687364).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

## Entwickler-Tools

Mozillas Entwickler-Tools entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor wir sie zur Beta und zum Release weiterleiten. Die untenstehenden Funktionen sind die aktuellen experimentellen Funktionen für Entwickler-Tools.

### Ausführungskontext-Auswahl

Diese Funktion zeigt eine Schaltfläche auf der Befehlszeile der Konsole an, mit der Sie den Kontext ändern können, in dem der von Ihnen eingegebene Ausdruck ausgeführt wird. (Weitere Details finden Sie im [Firefox-Bug 1605154](https://bugzil.la/1605154) und [Firefox-Bug 1605153](https://bugzil.la/1605153)).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

### Server-sent Ereignisse im Netzwerkmonitor

Der Netzwerkmonitor zeigt Informationen für [Server-sent](/de/docs/Web/API/Server-sent_events) Ereignisse an. (Weitere Details finden Sie im [Firefox-Bug 1405706](https://bugzil.la/1405706)).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

### CSS Browser-Kompatibilitäts-Hinweise

Die CSS-Regelansicht kann `Browser-Kompatibilität`-Hinweise neben CSS-Eigenschaften anzeigen, bei denen bekannte Probleme auftreten. Weitere Informationen finden Sie unter: [Untersuchen und Bearbeiten von HTML > Browser-Kompatibilitätswarnungen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#browser-compat-warnings).

<table>
  <thead>
    <tr>
      <th>Freigabekanal</th>
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

- [Firefox Entwickler Versionshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
