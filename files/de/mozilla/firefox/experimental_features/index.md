---
title: Experimentelle Funktionen in Firefox
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: e6f5295f5cf1d8fc390b4a77c4cbafe9ab030923
---

{{FirefoxSidebar}}

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, einschließlich derjenigen für vorgeschlagene oder hochmoderne Webplattform-Standards, zusammen mit Informationen zu den Builds, in denen sie vorhanden sind, ob sie "standardmäßig" aktiviert sind oder nicht, und welche _Einstellung_ verwendet werden kann, um sie zu aktivieren oder zu deaktivieren. Dies ermöglicht Ihnen, die Funktionen zu testen, bevor sie veröffentlicht werden.

Neue Funktionen erscheinen zuerst im [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) Build, wo sie oft standardmäßig aktiviert sind. Sie werden später in die [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) und schließlich in den Release-Build übertragen. Sobald eine Funktion in einem Release-Build standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und sollte aus dem Thema entfernt werden.

Experimentelle Funktionen können über den [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) (geben Sie `about:config` in die Firefox-Adressleiste ein) ein- oder ausgeschaltet werden, indem Sie die unten aufgeführte zugehörige _Einstellung_ ändern.

> [!NOTE]
> Für Redakteure - Wenn Sie Funktionen in diese Tabellen aufnehmen, versuchen Sie bitte, einen Link zum relevanten Bug oder den Bugs mit `[Firefox bug <number>](https://bugzil.la/<number>)` bereitzustellen.

## HTML

### Autokorrektur von bearbeitbaren Textelementen

Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) (und die entsprechende Eigenschaft [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect)) ermöglichen die Autokorrektur in bearbeitbaren Textelementen, einschließlich der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben ([Firefox bug 1725806](https://bugzil.la/1725806)).

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

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol hat, sobald jemand darin zu tippen beginnt, um andere Browserimplementierungen anzugleichen. (Siehe [Firefox bug 558594](https://bugzil.la/558594) für weitere Details.)

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

### Umschalten der Passwortanzeige

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Element/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox bug 502258](https://bugzil.la/502258)).

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

### Nur-Text-Modus für contenteditable

Der `plaintext-only` Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jede Formatierung in eingefügtem Text wird automatisch entfernt. (Siehe [Firefox bug 1922723](https://bugzil.la/1922723) für weitere Details.)

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

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tabulator_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formfeed_ (`U+000C`), und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie nicht erwartet werden. (Siehe [Firefox bug 1099557](https://bugzil.la/1099557) für weitere Details.)

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

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht Ihnen, festzulegen, wie herabgesenkte, hervorgehobene und versunkene Anfangsbuchstaben angezeigt werden. (Siehe [Firefox bug 1223880](https://bugzil.la/1223880) für weitere Details.)

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

Das `from` Schlüsselwort wird jetzt als gültige CSS-Syntax geparst, wenn die `layout.css.relative-color-syntax.enabled` Präferenz auf `true` gesetzt ist. Obwohl dieses Schlüsselwort derzeit keine Wirkung hat, produziert es keine Syntaxfehler, wenn es an gültigen Stellen in CSS-Farb-Funktionen verwendet wird. Es unterstützt dadurch die laufende Arbeit an [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors). Siehe [Firefox bug 1889133](https://bugzil.la/1889133) für weitere Details.

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

### Einzelne Zahlen als Seitenverhältnis in Media Queries

Unterstützung für die Verwendung einer einzelnen {{cssxref("number")}} als {{cssxref("ratio")}}, wenn das Seitenverhältnis für eine [Media Query](/de/docs/Web/CSS/CSS_media_queries) angegeben wird. (Siehe [Firefox bug 1565562](https://bugzil.la/1565562) für weitere Details.)

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

Die {{cssxref("backdrop-filter")}} Eigenschaft wendet Filtereffekte auf den Bereich hinter einem Element an. (Siehe [Firefox bug 1178765](https://bugzil.la/1178765) für weitere Details.)

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

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion, wie sie für {{cssxref("width")}} und andere Größenangaben angewendet wird. Diese Funktion wird bereits gut für die Größenbestimmung von CSS-Grid-Layout-Spuren unterstützt. (Siehe [Firefox bug 1312588](https://bugzil.la/1312588) für weitere Details.)

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

### Scroll-getriebene Animationen

Früher "scroll-verknüpfte Animationen" genannt, hängt eine scroll-getriebene Animation von der Scrollposition eines Scrollbalkens ab, statt von der Zeit oder einer anderen Dimension. Die Eigenschaften {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} (und die Kurzform-Eigenschaft {{cssxref('scroll-timeline')}}) ermöglichen es Ihnen, anzugeben, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scroll-getriebene Animation verwendet werden kann. Die Scroll-Timeline kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) verbunden werden, indem die {{cssxref('animation-timeline')}}-Eigenschaft auf den mit `scroll-timeline-name` definierten Namenwert gesetzt wird.

Bei Verwendung der Kurzform-Eigenschaft {{cssxref('scroll-timeline')}} muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Lang- und Kurzform-Eigenschaften sind beide hinter der Präferenz verfügbar.

Alternativ können Sie die funktionale Notation [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem Vorfahrenelement für die Timeline verwendet wird.

Für weitere Informationen siehe [Firefox bug 1807685](https://bugzil.la/1807685), [Firefox bug 1804573](https://bugzil.la/1804573), [Firefox bug 1809005](https://bugzil.la/1809005), [Firefox bug 1676791](https://bugzil.la/1676791), [Firefox bug 1754897](https://bugzil.la/1754897), und [Firefox bug 1737918](https://bugzil.la/1737918).

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

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, spezifische Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren übermäßig erhöhen zu müssen ([Firefox bug 1886441](https://bugzil.la/1886441)).

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

### @font-face src Feature-Prüfung

Der `@font-face` [`src` Deskriptor](/de/docs/Web/CSS/@font-face/src) unterstützt jetzt die `tech()` Funktion, die es ermöglicht, das Herunterladen einer Schriftartressource basierend darauf zu wechseln, ob der Benutzer-Agent ein bestimmtes Schriftartmerkmal oder eine Technologie unterstützt. Siehe [Firefox bug 1715546](https://bugzil.la/1715546) für weitere Details.

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

Die CSS [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) Eigenschaft ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen. Siehe ([Firefox bug 1461589](https://bugzil.la/1461589)) für weitere Details.

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

### page-orientation Deskriptor

Der **`page-orientation`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@page")}} At-Regel steuert die Rotation einer gedruckten Seite. Er behandelt den Fluss von Inhalten über Seiten hinweg, wenn die Orientierung einer Seite geändert wird. Dieses Verhalten unterscheidet sich vom [`size`](/de/docs/Web/CSS/@page/size) Deskriptor darin, dass der Benutzer die Richtung definieren kann, in der die Seite gedreht wird. Siehe ([Firefox bug 1673987](https://bugzil.la/1673987)) für weitere Details.

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

### prefers-reduced-transparency Media-Feature

Das CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media-Feature ermöglicht es Ihnen zu ermitteln, ob ein Benutzer die Einstellung aktiviert hat, die Menge an transparenten oder durchscheinenden Schichteffekten auf seinem Gerät zu minimieren. Siehe ([Firefox bug 1736914](https://bugzil.la/1736914)) für weitere Details.

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

### inverted-colors Media-Feature

Das CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Media-Feature ermöglicht es Ihnen zu ermitteln, ob ein Benutzer-Agent oder das zugrunde liegende Betriebssystem Farben invertiert. Siehe ([Firefox bug 1794628](https://bugzil.la/1794628)) für weitere Details.

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

### Benannte View-Progress-Timelines Eigenschaft

Die CSS-Eigenschaft [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, wodurch das Scroller-Element seines Vorfahren als Quelle einer View-Progress-Timeline identifiziert wird. Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugehörige Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt wird. Siehe ([Firefox bug 1737920](https://bugzil.la/1737920)) für weitere Details.

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

Die CSS-Funktion [`view()`](/de/docs/Web/CSS/animation-timeline/view) ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine View-Progress-Timeline ist, die das Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt wird. Die Funktion definiert die Achse des übergeordneten Elements, das die Timeline liefert, zusammen mit dem Versatz innerhalb des sichtbaren Bereichs, bei dem die Animation startet und beginnt. Siehe ([Firefox bug 1808410](https://bugzil.la/1808410)) für weitere Details.

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

### zoom-Eigenschaft

Die nicht standardmäßige CSS-{{cssxref("zoom")}}-Eigenschaft ist in der Nightly-Version aktiviert und ermöglicht es Ihnen, ein Element ähnlich wie die {{cssxref("transform")}}-Eigenschaft zu vergrößern, wirkt sich jedoch auf die Layout-Größe des Elements aus. Siehe ([Firefox bug 1855763](https://bugzil.la/1855763) und [Firefox bug 390936](https://bugzil.la/390936)) für weitere Details.

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

Um die Kompatibilität mit diesen Änderungen sicherzustellen, sind die [Vendor-präfixierten Transform-Eigenschaften](#vendor-präfixierte_transform-eigenschaften) und die [Vendor-präfixierten Übergangseigenschaften](#vendor-präfixierte_übergangseigenschaften) in der Nightly-Version deaktiviert. Diese Änderungen werden in den folgenden Abschnitten beschrieben.

### text-wrap: balance & stable Werte

Die `text-wrap` CSS-Eigenschaftswerte `balance` und `stable` ermöglichen es, den Layout kurzer Inhalte auf eine ausgeglichene Weise zu umbrechen und dafür zu sorgen, dass bearbeitbare Inhalte nicht neu fließen, während der Benutzer sie bearbeitet. (Siehe [Firefox bug 1731541](https://bugzil.la/1731541) für weitere Details.)

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

### Vendor-präfixierte Transform-Eigenschaften

Die `-moz-` präfixierten [CSS Transform](/de/docs/Web/CSS/CSS_transforms) Eigenschaften wurden in der Nightly-Version deaktiviert, indem die `layout.css.prefixes.transforms` Präferenz auf `false` gesetzt wurde. ([Firefox bug 1855763](https://bugzil.la/1855763)). Insbesondere die deaktivierten Eigenschaften sind:

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

Die `-moz-` präfixierten [CSS Transitions](/de/docs/Web/CSS/CSS_transitions) Eigenschaften wurden in der Nightly-Version deaktiviert, indem die `layout.css.prefixes.transitions` Präferenz auf `false` gesetzt wurde. ([Firefox bug 1855763](https://bugzil.la/1855763)). Insbesondere die deaktivierten Eigenschaften sind:

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

### UA-Stile für `<h1>` eingebettet in Sectioning-Elementen

Das `<h1>`-Überschrift verkleinert sich nicht mehr in der Schriftgröße, wenn es innerhalb von [Sectioning-Elementen](/de/docs/Web/HTML/Content_categories#sectioning_content) wie `<article>`, `<aside>`, `<nav>`, und `<section>` eingebettet ist. Die UA-Stile für `<h1>`, die in Sectioning-Elementen eingebettet sind, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox bug 1883896](https://bugzil.la/1883896)).

> [!NOTE]
> Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist im Nightly-Build auf `false` gesetzt, wodurch die UA-Stilierung für Überschriften, die in Sectioning-Elementen eingebettet sind, entfernt wird. Sie ist in allen anderen Kanälen auf `true` gesetzt, wodurch die bestehende UA-Stilierung für die eingebetteten Überschriften beibehalten wird.

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

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, mit dem Sie eine Form in den {{cssxref("clip-path")}}- und {{cssxref("offset-path")}}-Eigenschaften mit einem oder mehreren "Shape Commands" definieren können. Diese Befehle sind den [SVG Path Commands](/de/docs/Web/SVG/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ähnelt in einigen Aspekten der `{{cssxref("basic-shape/path","path()")}}` Funktion, jedoch verwendet `shape()` im Gegensatz zu `path()`, das die [SVG Path](/de/docs/Web/SVG/Element/path) Syntax verwendet, die Standard-CSS-Syntax. Dies ermöglicht es Ihnen, Formen leicht zu erstellen und zu bearbeiten und ermöglicht auch die Verwendung von CSS-Math-Funktionen. Für weitere Details siehe [Firefox bug 1823463](https://bugzil.la/1823463) für die `shape()` Funktion Unterstützung in `clip-path`, [Firefox bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path`, und [Firefox bug 1884425](https://bugzil.la/1884425) für ihre Unterstützung.

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

Die CSS [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel erlaubt es Ihnen, die Anfangsstile eines Elements für eine CSS-Transition zu setzen, wenn das Element keinen standardmäßigen Anfangsstil hat. Dies ist besonders nützlich für Elemente, die beim ersten Mal aus der Sicht verborgen sind, wie z. B. [`popover`](/de/docs/Web/HTML/Global_attributes/popover) oder ['dialog'](/de/docs/Web/HTML/Element/dialog). Unterstützt derzeit nicht das Animieren von `display: none`. Für weitere Details siehe [Firefox bug 1834876](https://bugzil.la/1834876) und [Firefox bug 1834877](https://bugzil.la/1834877).

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

Die CSS-{{cssxref("letter-spacing")}}-Eigenschaft teilt nun den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Anders als das aktuelle Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere in gemischt-direktionalem Text [Firefox bug 1891446](https://bugzil.la/1891446).

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

### `calc()` Farbkanal-Unterstützung in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann nun Farbbereiche in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen, sodass Sie Änderungen an Farben in verschiedenen Farbräumen oder bei der Verwendung unterschiedlicher funktionaler Notationen korrekt berechnen können [Firefox bug 1889561](https://bugzil.la/1889561).

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

### CSS-Ankerpositionierung

Das Modul [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) definiert eine Reihe von Funktionen, die es ermöglichen, Elemente als Ankerelemente zu definieren und andere Elemente relativ zu Ankerelementen zu positionieren. Dadurch können z. B. Tooltips neben zugeordneten Inhalten angezeigt werden, während sie durch das Ansichtsfenster scrollen, sich bei Bedarf bewegen, wenn sie das Ansichtsfenster überlaufen würden und verschwinden, wenn der Anker vom Bildschirm verschwindet. Das Set an Funktionen wird schrittweise hinter einer Präferenz eingeführt ([Firefox bug 1838746](https://bugzil.la/1838746)).

Die Teile, die implementiert wurden, umfassen:

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

### :has-slotted Pseudo-Klasse

Die {{CSSXRef(":has-slotted")}} [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die beim Rendern einer [Web-Komponente](/de/docs/Web/API/Web_components) Inhalte zu einem {{HTMLElement("slot")}} hinzufügen ([Firefox bug 1921747](https://bugzil.la/1921747)).

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

Die SVGPathSeg APIs werden entfernt und wurden hinter einer Präferenz platziert. Dazu gehören: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/de/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`. (Siehe [Firefox bug 1388931](https://bugzil.la/1388931) für weitere Details.)

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

### Intl.DurationFormat

{{jsxref("Intl.DurationFormat")}} ermöglicht die lokalisierungssensitive Formatierung von Dauerangaben. ([Firefox bug 1648139](https://bugzil.la/1648139)).

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
      <td colspan="2">NA</td>
    </tr>
  </tbody>
</table>

### JSON.parse mit Quelle

Der [Vorschlag zur Quelle für `JSON.parse`](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von [`JSON.parse`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse), um Funktionen bereitzustellen, die Probleme im Zusammenhang mit dem Präzisionsverlust beim Konvertieren von Werten wie großen Gleitkommazahlen und Datumwerten zwischen JavaScript-Werten und JSON-Text abzumildern. ([Firefox bug 1913085](https://bugzil.la/1913085), [Firefox bug 1925334](https://bugzil.la/1925334)).

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

Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die den Event-Loop nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher [Service Worker](/de/docs/Web/API/Service_Worker_API) zur Verfügung gestellt werden). Ein Teilmenge der Cookie Store API wurde implementiert ([Firefox Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

- Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface, allerdings ist `partitioned` nicht in den Rückgabewerten enthalten.
- Das [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Interface, ohne `partitioned`-Eigenschaften.
- Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore)-Eigenschaft.
- Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore)-Eigenschaft.

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

### CloseWatcher Interface

Integrierte Webkomponenten mit "Open"- und "Close"-Semantik, wie modale Dialoge und Pop-ups, können mit geräte-eigenen Mechanismen geschlossen werden. Zum Beispiel können auf Android Dialoge mit der Zurück-Taste geschlossen werden. Das [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Interface ermöglicht es Entwicklern, UI-Komponenten, wie benutzerdefinierte Sidebars, zu implementieren, die ähnlich mit nativen Mechanismen geschlossen werden können. ([Firefox Bug 1888729](https://bugzil.la/1888729)).

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

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als XSS-Angriffsvektoren verwendet werden können, nur mit Daten aufgerufen werden, die validiert oder bereinigt wurden.

> [!NOTE]
> Zum Zeitpunkt des Schreibens wurde nicht genügend von der API implementiert, um sie effektiv testen zu können.
> Diese Notiz wird entfernt, sobald sie bereit ist.

Diese Teilmenge der API wurde implementiert:

- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory):
  - [`getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType) und [`getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType) ([Firefox Bug 1917783](https://bugzil.la/1917783), [Firefox Bug 1917784](https://bugzil.la/1917784)).

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

Ob die Mauskoordinaten innerhalb eines bestimmten Bereichs auf dem Canvas liegen, ist ein häufig zu lösendes Problem. Die Hit-Bereich-API ermöglicht es, einen Bereich Ihres Canvas zu definieren und bietet eine weitere Möglichkeit, interaktive Inhalte auf einem Canvas für Barrierefreiheitstools zugänglich zu machen.

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

Wenn diese Präferenz aktiviert ist, werden alle derzeit in „Draft“-Status befindlichen WebGL-Erweiterungen, die getestet werden, aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Durchführung von Berechnungen und Grafikrendering mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

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

### Unterstützung der Reporting API für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt jetzt das Reporting von Verstößen gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP).

[`Report`](/de/docs/Web/API/Report)-Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Schnittstelle zurückgegeben werden, können nun einen `type`-Wert von `"csp-violation"` und eine `body`-Eigenschaft haben, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle enthält. Dies ermöglicht es, CSP-Verstöße innerhalb einer Webseite zu melden.

CSP-Verletzungsberichte können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}}-Direktive namentlich angegeben sind – Endpunktsnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}}- oder {{httpheader('Report-To')}}-HTTP-Antwort-Headern definiert werden. Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report)-Objekts, mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Instanz ist.

Dieser Verletzungsbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zur Übermittlung von Verletzungsberichten, der die CSP-Direktive {{CSP("report-uri")}} verwendet, um die URL des Reporting-Endpunkts festzulegen, und ein CSP-spezifisches JSON-Format für die Verletzungsberichte hat. ([Firefox Bug 1391243](https://bugzil.la/1391243)).

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

Die folgenden experimentellen Funktionen umfassen diejenigen, die sich in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) finden lassen.

#### Asynchrone SourceBuffer-Hinzufügen und -Entfernen

Dies fügt die auf Promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Media-Source-Puffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle hinzu. Weitere Informationen finden Sie unter [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617).

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

Die `image.avif.compliance_strictness`-Präferenz kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image)-Bildern angewendet wird. Dadurch können Firefox-Nutzer Bilder anzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

Erlaubte Werte sind:

- `0`: Akzeptieren Sie Bilder mit Spezifikationsverletzungen in beiden Empfehlungen ("should"-Sprache) und Anforderungen ("shall"-Sprache), sofern sie sicher oder eindeutig interpretiert werden können.
- `1` (Standard): Lehnen Sie Verstöße gegen Anforderungen ab, erlauben Sie jedoch Verstöße gegen Empfehlungen.
- `2`: Streng. Lehnen Sie alle Verstöße in Anforderungen oder Empfehlungen ab.

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

#### JPEG XL-Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/)-Bilder, wenn diese Funktion aktiviert ist. Weitere Details finden Sie unter [Firefox Bug 1539075](https://bugzil.la/1539075).

Beachten Sie, dass, wie unten gezeigt, die Funktion nur auf Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

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

### OpenFont COLRv1-Schriften

Diese Funktion bietet Unterstützung für die [OpenFont COLRv1-Schriftenspezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/). Dies ermöglicht das Laden von komprimierungsfreundlichen Farbvectorschriften mit Verläufen, Kompositionen und Mischungen mithilfe der CSS-Regel [`@font-face`](/de/docs/Web/CSS/@font-face) oder der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API). Weitere Details finden Sie unter [Firefox Bug 1740530](https://bugzil.la/1740530).

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

Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bietet einen Mechanismus zum Styling beliebiger Textbereiche in einem Dokument (verallgemeinert das Verhalten anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}). Die Bereiche werden mit [`Range`](/de/docs/Web/API/Range)-Instanzen in JavaScript definiert, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert und dann mit einem Namen im [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registriert werden. Das CSS-Pseudoelement [`::highlight`](/de/docs/Web/CSS/::highlight) wird verwendet, um einem registrierten Highlight Stile zuzuweisen. Weitere Details finden Sie unter [Firefox Bug 1703961](https://bugzil.la/1703961).

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

#### Preloading von Service Worker-Ressourcen bei Navigation

Das [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)-Interface kann verwendet werden, um das Preloading von Ressourcen beim Navigieren zu einer Seite zu aktivieren. Preloading erfolgt parallel zum Starten des Workers, was die Gesamtdauer von Beginn der Navigation bis zum Abrufen der Ressourcen verringert.

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

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox Bug 1750902](https://bugzil.la/1750902).

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

#### Auswahl über Schatten-DOM-Grenzen hinweg

Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zu erhalten, die den aktuellen ausgewählten Bereich oder die aktuellen Bereiche darstellen. Im Gegensatz zu [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) kann diese Methode Bereiche mit Anker- oder Fokusknoten innerhalb eines Schatten-DOMs zurückgeben, jedoch nur, wenn ihr die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte übergeben werden, die diese Knoten enthalten. Andernfalls wird ein Bereich zurückgegeben, der neu zugeordnet wurde, um den Hostknoten der Schattenwurzel zu umfassen, die den Knoten enthält. Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls so modifiziert, dass sie Knoten innerhalb einer Schattenwurzel akzeptieren.

Benutzerauswahl über Maus, Tastatur usw. kann überall im Dokument beginnen und enden, einschließlich innerhalb beliebiger geöffneter oder geschlossener Schattenbäume. ([Firefox Bug 1867058](https://bugzil.la/1867058)).

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

#### HTMLMediaElement-Methode: setSinkId()

[`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) erlaubt es Ihnen, die Sink-ID eines Audioausgabegeräts auf einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) festzulegen und damit zu ändern, wohin der Ton ausgegeben wird. Weitere Details finden Sie unter [Firefox Bug 934425](https://bugzil.la/934425).

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

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert ist, werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Allerdings unterstützt Firefox derzeit keine mehreren Audio- und Videospuren, sodass die häufigsten Anwendungsfälle für diese Eigenschaften nicht funktionieren, sodass sie standardmäßig deaktiviert sind. Weitere Details finden Sie unter [Firefox Bug 1057233](https://bugzil.la/1057233).

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

#### GeometryUtils-Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` mappen den gegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, auf einen anderen Knoten um. (Weitere Details finden Sie unter [Firefox Bug 918189](https://bugzil.la/918189)).

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

#### GeometryUtils-Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Viewport zurück. (Weitere Details finden Sie unter [Firefox Bug 917755](https://bugzil.la/917755)).

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

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung bei der Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Bugs, der während des Testens der Benutzeroberfläche auftrat, haben wir entschieden, die Bereitstellung dieser API zu verschieben, während Diskussionen über mögliche Änderungen der API geführt werden. Die Arbeit ist im Gange. (Weitere Details finden Sie unter [Firefox Bug 1318984](https://bugzil.la/1318984)).

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

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website. Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Präferenz auf dem Desktop (sofern nicht unten angegeben).

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

Die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) ermöglicht es, ein Gerät auf eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt und durch die Vorschriften der Vor-Sperrung im Browser erlaubt ist. In der Regel ist die Ausrichtungssperre nur auf mobilen Geräten zulässig, wenn das Dokument im Vollbildmodus angezeigt wird. Weitere Details finden Sie unter [Firefox Bug 1697647](https://bugzil.la/1697647).

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

### Priorisierte Aufgabenplanungs-API

Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit zur Priorisierung aller Aufgaben einer Anwendung, unabhängig davon, ob sie im Code des Website-Entwicklers oder in Bibliotheken und Frameworks von Drittanbietern definiert sind.

Diese Funktion ist nur in Firefox Nightly ab Firefox 101 aktiviert. Es besteht keine Präferenz, um sie in anderen Releases zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction)-Eigenschaft standardmäßig auf Windows-Systemen und im Nightly-Release auf true gesetzt ([Firefox Bug 1794475](https://bugzil.la/1794475)).

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
      <td>Windows only</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.webnotifications.requireinteraction.enabled</code></td>
    </tr>
  </tbody>
</table>

## Sicherheit und Datenschutz

### Blockieren von Klartextanfragen von Flash auf verschlüsselten Seiten

Um Man-in-the-Middle (MitM)-Angriffe durch Flash-Inhalte auf verschlüsselten Seiten zu vermindern, wurde eine Präferenz hinzugefügt, um `OBJECT_SUBREQUEST`s als aktive Inhalte zu behandeln. Weitere Details finden Sie unter [Firefox Bug 1190623](https://bugzil.la/1190623).

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

### Markierung unsicherer Seiten

Diese beiden Präferenzen fügen ein "Nicht sicher"-Textlabel in der Adressleiste neben dem traditionellen Schloss-Symbol hinzu, wenn eine Seite unsicher geladen wird (d. h. mit {{Glossary("HTTP", "HTTP")}} statt {{Glossary("HTTPS", "HTTPS")}}). Weitere Details finden Sie unter [Firefox Bug 1335970](https://bugzil.la/1335970).

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
        <code>security.insecure_connection_text.enabled</code> für normalen Modus;
        <code>security.insecure_connection_text.pbmode.enabled</code> für privaten Modus.
      </td>
    </tr>
  </tbody>
</table>

### Berechtigungspolitik / Feature-Policy

Die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) ermöglicht es Webentwicklern, das Verhalten bestimmter Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und zu ändern. Sie ist der CSP ähnlich, kontrolliert jedoch Funktionen anstelle von Sicherheitsverhalten. Diese wird in Firefox als **Feature Policy** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut in `<iframe>`-Elementen festgelegt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

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

### Unterstützung der Berechtigungs-API für Mikrofon und Kamera

Die [Berechtigungs-API](/de/docs/Web/API/Permissions_API) unterstützt nun die Berechtigungen `microphone` und `camera`, wodurch eine Webseite [abfragen](/de/docs/Web/API/Permissions/query) kann, ob der Zugriff auf die entsprechende Hardware gewährt, abgelehnt oder noch genehmigt werden muss ([Firefox Bug 1609427](https://bugzil.la/1609427), [Firefox Bug 1915222](https://bugzil.la/1915222)).

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

### Clear-Site-Data "cache"-Direktive

Die HTTP-Antwort-Header-Direktive [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data) `cache` löscht den Browsercache für die anfordernde Website.

> [!NOTE]
> Dies war ursprünglich standardmäßig aktiviert, wurde aber in Version 94 hinter einer Präferenz platziert ([Firefox Bug 1729291](https://bugzil.la/1729291)).

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

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Anzeigen-Zuordnung mit dem neuen `navigator.privateAttribution`-Objekt mit den Methoden `saveImpression()` und `measureConversion()`. Weitere Informationen zur PPA finden Sie [im Erklärer](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Websites über [Origin Trials](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

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

Der HTTP [`Accept`](/de/docs/Web/HTTP/Headers/Accept)-Header in [Standardanforderungen und Bilderanforderungen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um die Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

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

### SameSite=Lax als Standard

[`SameSite`-Cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungseite navigiert, nicht bei siteübergreifenden Unteranfragen zum Laden von Bildern oder Frames auf einer Drittanbieterseite usw. Weitere Details finden Sie unter [Firefox Bug 1617609](https://bugzil.la/1617609).

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

### Access-Control-Allow-Headers-Wildcard deckt nicht Authorization ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Vorabanforderung")}}, der angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen. Die Antwortdirektive kann ein Wildcard (`*`) enthalten, das angibt, dass die endgültige Anfrage alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig enthält Firefox den `Authorization`-Header in der endgültigen Anforderung, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde. Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einschließt. Weitere Details finden Sie unter [Firefox Bug 1687364](https://bugzil.la/1687364).

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

## Developer-Tools

Die Entwickler-Tools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly- und Developer Edition-Kanälen, bevor wir sie in den Beta- und Release-Kanal überführen. Die untenstehenden Funktionen sind die derzeitigen experimentellen Entwickler-Tool-Features.

### Ausführungskontext-Selektor

Diese Funktion zeigt eine Schaltfläche auf der Befehlszeile der Konsole an, die es Ihnen ermöglicht, den Kontext zu ändern, in dem der eingegebene Ausdruck ausgeführt wird. (Weitere Details finden Sie unter [Firefox Bug 1605154](https://bugzil.la/1605154) und [Firefox Bug 1605153](https://bugzil.la/1605153)).

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

### Server-sent events im Netzwerkmonitor

Der Netzwerkmonitor zeigt Informationen für [server-sent](/de/docs/Web/API/Server-sent_events) Ereignisse an. (Weitere Details finden Sie unter [Firefox Bug 1405706](https://bugzil.la/1405706)).

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

Die CSS-Eigenschaftsansicht kann Browser-Kompatibilitäts-Tooltips neben allen CSS-Eigenschaften anzeigen, die bekannte Probleme aufweisen. Weitere Informationen finden Sie unter: [Untersuchen und Bearbeiten von HTML > Browser-Kompatibilitäts-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#browser-compat-warnings).

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

- [Firefox Entwickler-Release-Notes](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
