---
title: Experimentelle Funktionen in Firefox
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 0754a2ff8711d82f69656722c6ccfef54403d308
---

{{FirefoxSidebar}}

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich solcher für vorgeschlagene oder fortschrittliche Webplattform-Standards, zusammen mit Informationen zu den Builds, in denen sie vorhanden sind, ob sie "standardmäßig" aktiviert sind oder nicht, und welche _Einstellung_ zur Aktivierung oder Deaktivierung verwendet werden kann. Dies ermöglicht es Ihnen, die Funktionen zu testen, bevor sie veröffentlicht werden.

Neue Funktionen erscheinen zuerst im [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) Build, wo sie oft standardmäßig aktiviert sind. Später verbreiten sie sich auf die [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) und schließlich auf den Release-Build. Nachdem eine Funktion in einem Release-Build standardmäßig aktiviert wurde, wird sie nicht mehr als experimentell angesehen und sollte aus dem Thema entfernt werden.

Experimentelle Funktionen können mithilfe des [Firefox Konfigurations-Editors](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) (geben Sie `about:config` in die Firefox-Adressleiste ein) durch Ändern der unten aufgeführten zugehörigen _Einstellung_ aktiviert oder deaktiviert werden.

> [!NOTE]
> Für Redakteure – wenn Sie Funktionen zu diesen Tabellen hinzufügen, versuchen Sie bitte, einen Link zu dem oder den relevanten Fehlern mit `[Firefox bug <number>](https://bugzil.la/<number>)` aufzunehmen.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol hat, sobald jemand damit beginnt, darin zu tippen, um andere Browserimplementierungen zu entsprechen. (Siehe [Firefox bug 558594](https://bugzil.la/558594) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.forms.reveal-password-button.enabled</code></td>
    </tr>
  </tbody>
</table>

### Nur-Text-Modus für contenteditable

Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jede Formatierung im eingefügten Text wird automatisch entfernt. (Siehe [Firefox bug 1922723](https://bugzil.la/1922723) für weitere Details.)

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

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc), außer _tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formularumbruch_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie unerwartet sind. (Siehe [Firefox bug 1099557](https://bugzil.la/1099557) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2">
        <code>layout.css.control-characters.enabled</code> oder
        <code>layout.css.control-characters.visible</code>
      </td>
    </tr>
  </tbody>
</table>

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, festzulegen, wie herabgesetzte, erhobene und abgesenkte Anfangsbuchstaben angezeigt werden. (Siehe [Firefox bug 1223880](https://bugzil.la/1223880) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.initial-letter.enabled</code></td>
    </tr>
  </tbody>
</table>

### `from` Schlüsselwort für relative Farben

Das Schlüsselwort `from` wird jetzt als gültige CSS-Syntax geparst, wenn die Einstellung `layout.css.relative-color-syntax.enabled` auf `true` gesetzt ist. Obwohl dieses Schlüsselwort derzeit keine Wirkung hat, führt es bei der Verwendung an gültigen Stellen in CSS-Farbfunktionen keine Syntaxfehler mehr herbei und unterstützt damit die laufende Arbeit an [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors). Siehe [Firefox bug 1889133](https://bugzil.la/1889133) für weitere Details.

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

Support für die Verwendung einer einzelnen {{cssxref("number")}} als {{cssxref("ratio")}} bei der Spezifizierung des Seitenverhältnisses für eine [media query](/de/docs/Web/CSS/CSS_media_queries). (Siehe [Firefox bug 1565562](https://bugzil.la/1565562) für weitere Details.)

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
      <th>Version hinzugefügt</th>
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

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion, wie sie sich auf {{cssxref("width")}} und andere Größeneigenschaften anwenden lässt. Diese Funktion wird bereits gut für die CSS Grid Layout-Spurgrößen unterstützt. (Siehe [Firefox bug 1312588](https://bugzil.la/1312588) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.fit-content-function.enabled</code></td>
    </tr>
  </tbody>
</table>

### Scroll-getriebene Animationen

Früher als "scroll-gekoppelte Animationen" bezeichnet, hängt eine scroll-getriebene Animation von der Scrollposition eines Scrollbalkens ab, anstatt von Zeit oder einer anderen Dimension. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzbefehleigenschaft) ermöglichen Ihnen, festzulegen, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scroll-getriebene Animation verwendet werden kann. Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) durch Setzen der {{cssxref('animation-timeline')}} Eigenschaft auf den Namen, der mit `scroll-timeline-name` definiert wurde, verknüpft werden.

Wenn Sie die {{cssxref('scroll-timeline')}} Kurzbefehleigenschaft verwenden, muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Lang- und Kurzbefehleigenschaften sind beide hinter der Präferenz verfügbar.

Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) Funktionalnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem Vorfahrenelement für die Zeitleiste verwendet wird.

Für weitere Informationen sehen Sie [Firefox bug 1807685](https://bugzil.la/1807685), [Firefox bug 1804573](https://bugzil.la/1804573), [Firefox bug 1809005](https://bugzil.la/1809005), [Firefox bug 1676791](https://bugzil.la/1676791), [Firefox bug 1754897](https://bugzil.la/1754897) und [Firefox bug 1737918](https://bugzil.la/1737918).

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

### @scope at-Regel

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, bestimmte Kindelemente auszuwählen, ohne den Spezifitätsgrad der CSS-Selektoren übermäßig zu erhöhen ([Firefox bug 1886441](https://bugzil.la/1886441)).

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
      <td colspan="2"><code>layout.css.at-scope.enabled</code></td>
    </tr>
  </tbody>
</table>

### @font-face src Feature-Prüfung

Der `@font-face` [`src` Deskriptor](/de/docs/Web/CSS/@font-face/src) unterstützt jetzt die `tech()` Funktion, die das Herunterladen einer Schriftartressource je nachdem, ob der Benutzer-Agent ein bestimmtes Schriftartenfeature oder eine bestimmte Technologie unterstützt, ermöglicht. Siehe [Firefox bug 1715546](https://bugzil.la/1715546) für weitere Details.

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

Die CSS [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) Eigenschaft ermöglicht es Ihnen, einen Standarddarstellungsstil zum Anzeigen von Emojis festzulegen. Siehe ([Firefox bug 1461589](https://bugzil.la/1461589)) für weitere Details.

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.font-variant-emoji.enabled</code></td>
    </tr>
  </tbody>
</table>

### page-orientation Deskriptor

Der **`page-orientation`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@page")}} At-Regel steuert die Drehung einer gedruckten Seite. Er behandelt den Fluss von Inhalten über Seiten hinweg, wenn die Ausrichtung einer Seite geändert wird. Dieses Verhalten unterscheidet sich vom [`size`](/de/docs/Web/CSS/@page/size) Deskriptor, indem ein Benutzer die Richtung definieren kann, in der die Seite gedreht wird. Siehe ([Firefox bug 1673987](https://bugzil.la/1673987)) für weitere Details.

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

Das CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media-Feature ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder transluzenten Schichteffekten auf ihrem Gerät zu minimieren. Siehe ([Firefox bug 1736914](https://bugzil.la/1736914)) für weitere Details.

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.prefers-reduced-transparency.enabled</code></td>
    </tr>
  </tbody>
</table>

### inverted-colors Media-Feature

Das CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Media-Feature ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. Siehe ([Firefox bug 1794628](https://bugzil.la/1794628)) für weitere Details.

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.inverted-colors.enabled</code></td>
    </tr>
  </tbody>
</table>

### Benannte view Fortschrittszeiten-Eigenschaft

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft erlaubt es Ihnen, einem bestimmten Element einen Namen zu geben, indem Sie feststellen, dass das Vorfahren-Scroller-Element die Quelle einer view Fortschritts-Zeitlinie ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugeordnete Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt wird. Siehe ([Firefox bug 1737920](https://bugzil.la/1737920)) für weitere Details.

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### Anonyme view Fortschrittszeiten Funktion

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion erlaubt es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine view Fortschritts-Zeitlinie ist, die das Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt wird. Die Funktion definiert die Achse des übergeordneten Elements, die die Zeitleiste bereitstellt, zusammen mit dem Einsatz innerhalb des sichtbaren Bereichs, an dem die Animation startet und beginnt. Siehe ([Firefox bug 1808410](https://bugzil.la/1808410)) für weitere Details.

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### zoom Eigenschaft

Die nicht standardisierte CSS {{cssxref("zoom")}} Eigenschaft ist in der Nightly-Version aktiviert und ermöglicht es Ihnen, ein Element ähnlich wie die {{cssxref("transform")}} Eigenschaft zu vergrößern, aber sie beeinflusst die Layoutgröße des Elements. Siehe ([Firefox bug 1855763](https://bugzil.la/1855763) und [Firefox bug 390936](https://bugzil.la/390936)) für weitere Details.

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

Um die Kompatibilität mit diesen Änderungen sicherzustellen, sind die [Vendor-spezifischen transform Eigenschaften](#vendor-spezifische_transform_eigenschaften) und die [Vendor-spezifischen transition Eigenschaften](#vendor-spezifische_übergangseigenschaften) in der Nightly-Version deaktiviert. Diese Änderungen werden in den folgenden Abschnitten beschrieben.

### text-wrap: balance & stable Werte

Die [`text-wrap`](/de/docs/Web/CSS/text-wrap) CSS-Eigenschaftswerte `balance` und `stable` ermöglichen es, das Layout von kurzen Inhalten auf eine ausgeglichene Weise umzubrechen und verhindern, dass bearbeitbare Inhalte neu arrangiert werden, während der Benutzer diese bearbeitet. (Siehe [Firefox bug 1731541](https://bugzil.la/1731541) für weitere Details.)

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

### Vendor-spezifische transform Eigenschaften

Die `-moz-` präfixierten [CSS transform](/de/docs/Web/CSS/CSS_transforms) Eigenschaften wurden in der Nightly-Version durch die Einstellung der Präferenz `layout.css.prefixes.transforms` auf `false` deaktiviert. ([Firefox bug 1855763](https://bugzil.la/1855763)). Die spezifisch deaktivierten Eigenschaften sind:

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

### Vendor-spezifische Übergangseigenschaften

Die `-moz-` präfixierten [CSS Übergänge](/de/docs/Web/CSS/CSS_transitions) Eigenschaften wurden in der Nightly-Version durch die Einstellung der Präferenz `layout.css.prefixes.transitions` auf `false` deaktiviert. ([Firefox bug 1855763](https://bugzil.la/1855763)). Die spezifisch deaktivierten Eigenschaften sind:

- `-moz-transition`
- `-moz-transition-delay`
- `-moz-transition-duration`
- `-moz-transition-property`
- `-moz-transition-timing-function`

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

### UA-Stile für `<h1>` verschachtelt in Gliederungselementen

Die `<h1>` Überschrift wird bei der Verschachtelung in [Gliederungselementen](/de/docs/Web/HTML/Content_categories#sectioning_content) wie `<article>`, `<aside>`, `<nav>` und `<section>` jetzt nicht mehr verkleinert. Die UA-Stile für `<h1>` verschachtelt in Gliederungselementen sind nicht mehr relevant, da der Umrissalgorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox bug 1883896](https://bugzil.la/1883896)).

> [!NOTE]
> Die Präferenz für diese Funktion ist umgekehrt: sie ist in der Nightly-Version auf `false` gesetzt, was das UA-Styling für Überschriften entfernt, die in Gliederungselementen verschachtelt sind. In allen anderen Kanälen ist sie auf `true` gesetzt, was das bestehende UA-Styling für die verschachtelten Überschriften beibehält.

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
      <th>Präferenzname</th>
      <td colspan="2">
        <code>layout.css.h1-in-section-ua-styles.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### `shape()` Funktion

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften mithilfe von einem oder mehreren "Formbefehlen" zu definieren. Diese Befehle ähneln sehr den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands). Die `shape()` Funktion ähnelt in gewisser Hinsicht der `{{cssxref("basic-shape/path","path()")}}` Funktion, aber im Gegensatz zu `path()`, das die [SVG-Pfad](/de/docs/Web/SVG/Element/path) Syntax verwendet, nutzt `shape()` die standardmäßige CSS-Syntax. Dies ermöglicht es Ihnen, leicht Formen zu erstellen und zu bearbeiten und auch die Verwendung von CSS-Mathematikfunktionen zu erlauben. Für weitere Details siehe [Firefox bug 1823463](https://bugzil.la/1823463) für den Support der `shape()` Funktion in `clip-path`, [Firefox bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path`, und [Firefox bug 1884425](https://bugzil.la/1884425) für ihre Interpolationsunterstützung.

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
      <td colspan="2"><code>layout.css.basic-shape-shape.enabled</code></td>
    </tr>
  </tbody>
</table>

### `@starting-style` At-Regel

Die CSS [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel ermöglicht es Ihnen, die Ausgangsstile eines Elements für einen CSS-Übergang festzulegen, wenn das Element keinen Standardinitialstil hat. Dies ist besonders nützlich für Elemente, die beim ersten Rendern nicht sichtbare Stile haben wie [`popover`](/de/docs/Web/HTML/Global_attributes/popover) oder ['dialog'](/de/docs/Web/HTML/Element/dialog). Es unterstützt noch nicht das Animieren von `display: none`. Für weitere Details, siehe [Firefox bug 1834876](https://bugzil.la/1834876) und [Firefox bug 1834877](https://bugzil.la/1834877).

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.starting-style-at-rules.enabled</code></td>
    </tr>
  </tbody>
</table>

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt nun den angegebenen Abstand zwischen den Buchstaben gleichmäßig auf beide Seiten jedes Zeichens auf. Dies ist im Gegensatz zum bisherigen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann die Textabstände verbessern, insbesondere in gemischt-direktionalem Text [Firefox bug 1891446](https://bugzil.la/1891446).

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

### `calc()` Farbkanalunterstützung in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen, wodurch Sie Änderungen an Farben in verschiedenen Farbräumen oder bei Verwendung unterschiedlicher Funktionsnotierungen korrekt berechnen können [Firefox bug 1889561](https://bugzil.la/1889561).

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.relative-color-syntax.enabled</code></td>
    </tr>
  </tbody>
</table>

### CSS Ankerpositionierung

Das [CSS Ankerpositionierungsmodell](/de/docs/Web/CSS/CSS_anchor_positioning) definiert eine Reihe von Funktionen, die es ermöglichen, Elemente als Ankerelemente zu definieren, und andere Elemente relativ zu Ankerelementen zu positionieren. Dies erlaubt es beispielsweise, Tooltips neben zugehörigen Inhalten anzuzeigen, während sie durch das Ansichtsfenster scrollen, sich nach Bedarf bewegen, wenn sie das Ansichtsfenster überlaufen würden, und zu verschwinden, wenn der Anker vom Bildschirm verschwindet. Die Funktionen werden schrittweise hinter einer Präferenz ausgerollt ([Firefox bug 1838746](https://bugzil.la/1838746)).

Die implementierten Teile beinhalten:

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.anchor-positioning.enabled</code></td>
    </tr>
  </tbody>
</table>

## SVG

### SVGPathSeg APIs

Die SVGPathSeg APIs werden entfernt und sind hinter einer Präferenz platziert. Dazu gehören: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/de/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`. (Siehe [Firefox bug 1388931](https://bugzil.la/1388931) für weitere Details.)

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

### Promise.try()

{{jsxref("Promise.try()")}} ist eine Komfortmethode, die einen Rückruf jeglicher Art (gibt zurück oder löst aus, synchron oder asynchron) nimmt und das Ergebnis in ein {{jsxref("Promise")}} einwickelt, so dass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um es zu handhaben ([Firefox bug 1905364](https://bugzil.la/1905364)).

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
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <th>Präferenzname</th>
      <td colspan="2"><code>javascript.options.experimental.promise_try</code></td>
    </tr>
  </tbody>
</table>

### JSON.parse mit Quelle

Der [`JSON.parse` source text access proposal](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von [`JSON.parse`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse), um Funktionen bereitzustellen, die Probleme im Zusammenhang mit dem Verlust von Präzision beim Konvertieren von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript Werten und JSON-Text zu mildern. ([Firefox bug 1913085](https://bugzil.la/1913085), [Firefox bug 1925334](https://bugzil.la/1925334)).

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

Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}} basierende Methode zur Verwaltung von Cookies, die den Event-Loop nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher den [Servicearbeitern](/de/docs/Web/API/Service_Worker_API) zur Verfügung gestellt werden). Ein Teil der Cookie Store API wurde implementiert ([Firefox Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

- Die [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle, jedoch ohne `partitioned` in Rückgabewerten.
- Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) Schnittstelle, ohne `partitioned` Eigenschaften.
- Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) Eigenschaft.
- Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) Eigenschaft.

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
      <th>Nachtlich</th>
      <td>132</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>dom.cookieStore.enabled</code></td>
    </tr>
  </tbody>
</table>

### Fetch `keepalive`

Die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode hat eine [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.

Dies ermöglicht es, eine Fetch-Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu verwenden, wenn Analysen am Ende einer Sitzung gesendet werden, was einige Vorteile bietet (Sie können HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die {{jsxref("Promise")}} Erfüllung zugreifen). Es ist auch in [Servicearbeitern](/de/docs/Web/API/Service_Worker_API) verfügbar.

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
      <th>Nachtlich</th>
      <td>132</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>132</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>132</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>dom.fetchKeepalive.enabled</code></td>
    </tr>
  </tbody>
</table>

### CloseWatcher Schnittstelle

Integrierte Webkomponenten mit "offen" und "geschlossen" Semantik wie modale Dialoge und Popovers können mit gerätenativen Mechanismen geschlossen werden. Beispielsweise können Sie auf Android einen Dialog mit der Zurück-Taste schließen. Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, UI-Komponenten wie benutzerdefinierte Seitenleisten zu implementieren, die ähnlich mit nativen Mechanismen geschlossen werden können. ([Firefox Bug 1888729](https://bugzil.la/1888729)).

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
      <th>Nachtlich</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>132</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>132</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>132</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>dom.closewatcher.enabled</code></td>
    </tr>
  </tbody>
</table>

### Grafik: Canvas, WebGL und WebGPU

#### Treffbereiche

Ob die Mauskoodinaten in einem bestimmten Bereich auf der Leinwand liegen, ist ein häufiges Problem zu lösen. Die Treffbereich-API ermöglicht es Ihnen, einen Bereich Ihrer Leinwand zu definieren und bietet eine weitere Möglichkeit, interaktive Inhalte auf einer Leinwand für Zugänglichkeitswerkzeuge verfügbar zu machen.

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
      <th>Nachtlich</th>
      <td>30</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>30</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>30</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>30</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>canvas.hitregions.enabled</code></td>
    </tr>
  </tbody>
</table>

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle derzeit in "Entwurf"-Status befindlichen WebGL-Erweiterungen, die getestet werden, zur Verwendung aktiviert. Derzeit gibt es keine von Firefox getesteten WebGL-Erweiterungen.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene, um Berechnungen und Grafikrenerierungen mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers durchzuführen. Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt mit dieser API.

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
      <th>Nachtlich</th>
      <td>113</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>73</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>73</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>73</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>dom.webgpu.enabled</code></td>
    </tr>
  </tbody>
</table>

### Reporting API Unterstützung für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt jetzt das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Verstößen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können jetzt einen `type`-Wert von `"csp-violation"` und eine `body`-Eigenschaft haben, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält. Dadurch können CSP-Verstöße innerhalb einer Webseite gemeldet werden.

CSP-Verstoßberichte können auch an entfernte Endpunkte gesendet werden, die in der CSP {{CSP("report-to")}} Direktive namentlich aufgeführt sind - die Endpunktenamen und entsprechenden URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP Antwort-Headern definiert sein. Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report) Objekts, mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, bei dem die CSP {{CSP("report-uri")}} Direktive verwendet wird, um die URL des Berichtsendpunkts festzulegen, und hat ein [CSP-spezifisches JSON-Verstoßbericht-Format](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri#violation_report_syntax). ([Firefox Bug 1391243](https://bugzil.la/1391243)).

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
      <th>Nachtlich</th>
      <td>130</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>130</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>130</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>130</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>dom.reporting.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) für das Hinzufügen und Entfernen von Mediapufferquellen zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie in [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617).

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
      <th>Nachtlich</th>
      <td>62</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>62</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>62</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>62</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>media.mediasource.experimental.enabled</code></td>
    </tr>
  </tbody>
</table>

#### AVIF-Konformitätsstrenge

Die Einstellung `image.avif.compliance_strictness` kann verwendet werden, um die _Striktheit_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) Bildern angewendet wird. Dadurch können Firefox-Benutzer Bilder anzeigen, die auf einigen anderen Browsern angezeigt werden, selbst wenn sie nicht strikt konform sind.

Erlaubte Werte sind:

- `0`: Akzeptiert Bilder mit Spezifikationsverstößen in beiden Empfehlungen ("sollte" Sprache) und Anforderungen ("muss" Sprache), sofern sie sicher oder eindeutig interpretiert werden können.
- `1` (Standard): Verstößt nicht gegen Anforderungen, erlaubt aber Verstöße gegen Empfehlungen.
- `2`: Streng. Verstößt nicht gegen Anforderungen oder Empfehlungen.

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Hinzugefügte Version</th>
      <th>Standardwert</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nachtlich</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>image.avif.compliance_strictness</code></td>
    </tr>
  </tbody>
</table>

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Weitere Details finden Sie in [Firefox Bug 1539075](https://bugzil.la/1539075).

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in den Nightly-Builds verfügbar ist (unabhängig davon, ob die Einstellung gesetzt ist).

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
      <th>Nachtlich</th>
      <td>90</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>image.jxl.enabled</code></td>
    </tr>
  </tbody>
</table>

### OpenFont COLRv1 Schriften

Diese Funktion bietet Unterstützung für die [OpenFont COLRv1 Schriften-Spezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/). Dies ermöglicht das Laden von kompressionsfreundlichen Farbvektorschriften mit Verläufen, Komposition und Überblendung mit der CSS [`@font-face`](/de/docs/Web/CSS/@font-face) Regel oder der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API). Weitere Details finden Sie in [Firefox Bug 1740530](https://bugzil.la/1740530).

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
      <th>Nachtlich</th>
      <td>105</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>105</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>105</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>105</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>gfx.font_rendering.colr_v1.enabled</code></td>
    </tr>
  </tbody>
</table>

### CSS Custom Highlight API

Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bietet einen Mechanismus zum Styling beliebiger Textbereiche in einem Dokument (allgemein das Verhalten anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}}). Die Bereiche werden in JavaScript mit [`Range`](/de/docs/Web/API/Range) Instanzen definiert, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind und dann mit einem Namen mithilfe von [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registriert werden. Das CSS [`::highlight`](/de/docs/Web/CSS/::highlight) Pseudoelement wird verwendet, um Stile auf ein registriertes Highlight anzuwenden. Weitere Details finden Sie in [Firefox Bug 1703961](https://bugzil.la/1703961).

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
      <th>Nachtlich</th>
      <td>117</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>117</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>117</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>117</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>dom.customHighlightAPI.enabled</code></td>
    </tr>
  </tbody>
</table>

### Servicearbeiten

#### Vorladen von Servicearbeitsressourcen bei Navigation

Die [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) Schnittstelle kann verwendet werden, um das Vorladen von Ressourcen bei der Navigation zu einer Seite zu aktivieren. Das Vorladen erfolgt parallel zur Arbeitserstellung, wodurch die Gesamtzeit vom Start der Navigation bis die Ressourcen abgerufen sind, reduziert wird.

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
      <th>Nachtlich</th>
      <td>99</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>dom.serviceWorkers.navigationPreload.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung. Sie ist in allen Builds standardmäßig deaktiviert [Firefox Bug 1750902](https://bugzil.la/1750902).

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
      <th>Nachtlich</th>
      <td>98</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>98</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>98</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>98</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>dom.vr.enabled</code></td>
    </tr>
  </tbody>
</table>

### HTML DOM API

#### Selections über die Grenze des Shadow DOM hinweg

Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange) Objekten, die den aktuellen ausgewählten Bereich oder Bereiche darstellen, zu erhalten. Anders als [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) kann diese Methode Bereiche mit Anker- oder Fokusnoten innerhalb eines Shadow DOMs zurückgeben, aber nur, wenn ihr die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte, die diese Knoten enthalten, übergeben werden. Andernfalls wird ein Bereich zurückgegeben, der neu geschachtelt wurde, um den Knoten des Host-Shadow-Roots, der den Knoten enthält, einzubeziehen. Die `Selection` Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls modifiziert, um Knoten innerhalb eines Shadow Roots zu akzeptieren.

Benutzerselektion über Maus, Tastatur usw. kann überall im Dokument beginnen und enden, auch innerhalb offener oder geschlossener Shadow Trees. ([Firefox Bug 1867058](https://bugzil.la/1867058)).

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
      <th>Nachtlich</th>
      <td>126</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>126</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>126</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>126</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>dom.shadowdom.selection_across_boundary.enabled</code></td>
    </tr>
  </tbody>
</table>

#### HTMLMediaElement Methode: setSinkId()

[`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) ermöglicht es Ihnen, die Sink-ID eines Audioausgabe-Geräts auf einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu setzen, wodurch geändert wird, wo der Ton wiedergegeben wird. Weitere Details finden Sie in [Firefox Bug 934425](https://bugzil.la/934425).

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
      <th>Nachtlich</th>
      <td>64</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>64</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>64</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>64</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>media.setsinkid.enabled</code></td>
    </tr>
  </tbody>
</table>

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Die Aktivierung dieser Funktion fügt den HTML-Media-Elementen die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) hinzu. Da Firefox derzeit jedoch keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle dieser Eigenschaften nicht, weshalb sie standardmäßig deaktiviert sind. Weitere Details finden Sie in [Firefox Bug 1057233](https://bugzil.la/1057233).

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
      <th>Nachtlich</th>
      <td>33</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>33</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>33</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>33</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>media.track.enabled</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` ordnen den gegebenen Punkt, das Rechteck, oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, einem anderen Knoten zu. (Siehe [Firefox Bug 918189](https://bugzil.la/918189) für mehr Details.)

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
      <th>Nachtlich</th>
      <td>31</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>31</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>31</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>31</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.convertFromNode.enable</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Knoten oder Ansichtsfenster zurück. (Siehe [Firefox Bug 917755](https://bugzil.la/917755) für mehr Details.)

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
      <th>Nachtlich</th>
      <td>31</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>31</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>31</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>31</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>layout.css.getBoxQuads.enabled</code></td>
    </tr>
  </tbody>
</table>

### Payment Request API

#### Hauptzeilenverwaltung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung zur Bearbeitung webbasierten Zahlungstransaktionen innerhalb von Web-Inhalten oder Apps. Aufgrund eines Fehlers, der während des Tests der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während Diskussionen über potenzielle Änderungen an der API stattfinden. Die Arbeit wird fortgesetzt. (Siehe [Firefox Bug 1318984](https://bugzil.la/1318984) für mehr Details.)

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
      <th>Nachtlich</th>
      <td>55</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>55</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>55</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>55</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2">
        <code>dom.payments.request.enabled</code> und<br /><code
          >dom.payments.request.supportedRegions</code
        >
      </td>
    </tr>
  </tbody>
</table>

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website. Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Einstellung auf dem Desktop (es sei denn, unten angegeben).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Geänderte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nachtlich</th>
      <td>71</td>
      <td>Nein (Standard). Ja (Windows ab Version 92)</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>71</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>71</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>71</td>
      <td>Nein (Desktop). Ja (Android).</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>dom.webshare.enabled</code></td>
    </tr>
  </tbody>
</table>

### Screen Orientation API

#### ScreenOrientation.lock()

Die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) ermöglicht es, ein Gerät in einer bestimmten Ausrichtung zu sperren, wenn dies vom Gerät unterstützt wird und die Browsereinstellungen dies erlauben. Das Sperren der Ausrichtung ist normalerweise nur auf Mobilgeräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird. Weitere Details finden Sie in [Firefox Bug 1697647](https://bugzil.la/1697647).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Geänderte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nachtlich</th>
      <td>111</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>97</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>dom.screenorientation.allow-lock</code></td>
    </tr>
  </tbody>
</table>

### Priorisierte Task-Scheduling API

Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle zur Anwendung gehörenden Aufgaben zu priorisieren, unabhängig davon, ob sie im Code des Webseiten-Entwicklers oder in Drittanbieter-Bibliotheken und Frameworks definiert sind.

Diese Funktion ist in Firefox Nightly (nur) ab Firefox 101 aktiviert. Es wird keine Einstellung bereitgestellt, die es ermöglicht, es in anderen Veröffentlichungen zu aktivieren.

### Notifications API

Benachrichtigungen haben standardmäßig die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft auf Windows-Systemen und in der Nightly-Version auf true gesetzt ([Firefox Bug 1794475](https://bugzil.la/1794475)).

<table>
  <thead>
    <tr>
      <th>Veröffentlichungskanal</th>
      <th>Geänderte Version</th>
      <th>Standardmäßig aktiviert?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nachtlich</th>
      <td>117</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>117</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>117</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>117</td>
      <td>Nur Windows</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>dom.webnotifications.requireinteraction.enabled</code></td>
    </tr>
  </tbody>
</table>

## Sicherheit und Privatsphäre

### Blockieren von Klartextanfragen von Flash auf verschlüsselten Seiten

Um Man-in-the-Middle (MitM)-Angriffe zu mindern, die durch Flash-Inhalte auf verschlüsselten Seiten verursacht werden, wurde eine Einstellung hinzugefügt, um `OBJECT_SUBREQUEST`s als aktive Inhalte zu behandeln. Weitere Details finden Sie in [Firefox Bug 1190623](https://bugzil.la/1190623).

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
      <th>Nachtlich</th>
      <td>59</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>59</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>59</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>59</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2">
        <code>security.mixed_content.block_object_subrequest</code>
      </td>
    </tr>
  </tbody>
</table>

### Beschriftung unsicherer Seiten

Diese beiden Einstellungen fügen beim Laden einer Seite ohne Sicherheit (das heißt, durch Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}) ein "Nicht sicher"-Textlabel in der Adressleiste neben dem traditionellen Schlosssymbol hinzu. Weitere Details finden Sie in [Firefox Bug 1335970](https://bugzil.la/1335970).

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
      <th>Nachtlich</th>
      <td>60</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>60</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>60</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>60</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2">
        <code>security.insecure_connection_text.enabled</code> für normalen
        Browsing-Modus;
        <code>security.insecure_connection_text.pbmode.enabled</code> für
        privaten Browsing-Modus
      </td>
    </tr>
  </tbody>
</table>

### Berechtigungsrichtlinie / Feature-Politik

[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und deren Verhalten zu ändern. Es ist ähnlich wie CSP, kontrolliert aber Funktionen anstelle von Sicherheitsverhalten. Dies ist in Firefox als **Feature-Politik** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Element/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

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
      <th>Nachtlich</th>
      <td>65</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>65</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>65</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>65</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2">
        <code>dom.security.featurePolicy.header.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Berechtigungen API-Unterstützung für Mikrofon und Kamera

Die [Berechtigungen API](/de/docs/Web/API/Permissions_API) Berechtigungen für `microphone` und `camera` werden unterstützt, sodass eine Webseite [abfragen](/de/docs/Web/API/Permissions/query) kann, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch die Benutzerzulassung erforderlich ist ([Firefox Bug 1609427](https://bugzil.la/1609427), [Firefox Bug 1915222](https://bugzil.la/1915222)).

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
      <th>Nachtlich</th>
      <td>131</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>131</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>131</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>131</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2">
        <code>permissions.media.query.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Clear-Site-Data "cache" Direktive

Die [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data) HTTP-Antwortheader `cache` Direktive leert den Browser-Cache für die anfordernde Webseite.

> [!NOTE]
> Dies wurde ursprünglich standardmäßig aktiviert, aber in Version 94 hinter einer Einstellung platziert ([Firefox Bug 1729291](https://bugzil.la/1729291)).

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
      <th>Nachtlich</th>
      <td>63</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>63</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>63</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>63</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2">
        <code>privacy.clearsitedata.cache.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Privacy Preserving Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für die Anzeigenattribution mit dem neuen `navigator.privateAttribution` Objekt mit `saveImpression()` und `measureConversion()` Methoden. Lesen Sie mehr über PPA [in der Erklärung](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

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
      <th>Nachtlich</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2">
        <code>dom.origin-trials.private-attribution.state</code>
      </td>
    </tr>
  </tbody>
</table>

## HTTP

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

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
      <th>Nachtlich</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>128</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2">
        <code>image.jxl.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer auf die Ursprungsseite navigiert, nicht für anforderungsübergreifende Subanfragen, um Bilder oder Frames in eine Drittanbieterseite zu laden. Weitere Details finden Sie in [Firefox Bug 1617609](https://bugzil.la/1617609).

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
      <th>Nachtlich</th>
      <td>69</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>69</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>69</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>69</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>network.cookie.sameSite.laxByDefault</code></td>
    </tr>
  </tbody>
</table>

### Access-Control-Allow-Headers Wildcard deckt nicht Authorization ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Vorab-Anfrage")}}, die angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen. Die Antwortdirektive kann ein Wildcard (`*`) enthalten, was darauf hinweist, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten kann.

Standardmäßig enthält Firefox den `Authorization` Header in der endgültigen Anfrage nach Erhalt einer Antwort mit `Access-Control-Allow-Headers: *`. Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einschließt. Weitere Details finden Sie in [Firefox Bug 1687364](https://bugzil.la/1687364).

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
      <th>Nachtlich</th>
      <td>115</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>115</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>115</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>115</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>network.cors_preflight.authorization_covered_by_wildcard</code></td>
    </tr>
  </tbody>
</table>

## Entwicklertools

Mozillas Entwicklertools entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly- und Developer Edition-Kanälen, bevor wir sie in Beta und Veröffentlichung weiterleiten lassen. Die folgenden Funktionen sind die aktuellen experimentellen Entwicklertoolfunktionen.

### Ausführungskontext-Selektor

Diese Funktion zeigt eine Schaltfläche auf der Konsolenbefehlszeile an, mit der Sie den Kontext ändern können, in dem der Ausdruck, den Sie eingeben, ausgeführt wird. (Siehe [Firefox Bug 1605154](https://bugzil.la/1605154) und [Firefox Bug 1605153](https://bugzil.la/1605153) für mehr Details.)

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
      <th>Nachtlich</th>
      <td>75</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>75</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>75</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>75</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2"><code>devtools.webconsole.input.context</code></td>
    </tr>
  </tbody>
</table>

### Unterstützung für mobile Gesten im Responsive Design Mode

Mausgesten werden verwendet, um mobile Gesten wie Wischen/Scrollen, Doppel-Tippen, Pinch-Zooming und langes Drücken zum Auswählen/Öffnen des Kontextmenüs zu simulieren. (Siehe [Firefox Bug 1621781](https://bugzil.la/1621781), [Firefox Bug 1245183](https://bugzil.la/1245183) und [Firefox Bug 1401304](https://bugzil.la/1401304) für mehr Details.)

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
      <th>Nachtlich</th>
      <td>76<sup>[1]</sup></td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>76<sup>[1]</sup></td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>76<sup>[1]</sup></td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>76<sup>[1]</sup></td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2">n/v</td>
    </tr>
  </tbody>
</table>

\[1] Unterstützung für Zooms mittels Doppel-Tipp Geste wurde in Firefox 76 hinzugefügt. Die anderen Gesten wurden für Firefox 79 hinzugefügt.

### Server-sent Ereignisse im Netzwerkmonitor

Der Netzwerkmonitor zeigt Informationen für [vom Server gesendete](/de/docs/Web/API/Server-sent_events) Ereignisse an. (Siehe [Firefox Bug 1405706](https://bugzil.la/1405706) für mehr Details.)

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
      <th>Nachtlich</th>
      <td>80</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>80</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>80</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>80</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2">
        <code>devtools.netmonitor.features.serverSentEvents</code>
      </td>
    </tr>
  </tbody>
</table>

### CSS Browser-Kompatibilitäts-Tooltips

Die CSS-Regelansicht kann neben CSS-Eigenschaften, die bekannte Probleme haben, Browser-Kompatibilitäts-Tooltips anzeigen. Für weitere Informationen siehe: [Untersuchen und Bearbeiten von HTML > Browser-Kompatibilitätswarnungen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#browser-compat-warnings).

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
      <th>Nachtlich</th>
      <td>81</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>81</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>81</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>81</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2">
        <code
          >devtools.inspector.ruleview.inline-compatibility-warning.enabled</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Benutzeroberfläche

### Desktop-Zooming

Diese Funktion ermöglicht es Ihnen, reibungsloses Pinch-Zooming auf Desktop-Computern zu aktivieren, ohne dass Layout-Neuladen erforderlich ist, genau wie bei Mobilgeräten. (Siehe [Firefox Bug 1245183](https://bugzil.la/1245183) und [Firefox Bug 1620055](https://bugzil.la/1620055) für mehr Details.)

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
      <th>Nachtlich</th>
      <td>42</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Entwickler-Edition</th>
      <td>42</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>42</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Veröffentlichung</th>
      <td>42</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Einstellungsname</th>
      <td colspan="2">
        <code>apz.allow_zooming</code> und (auf Windows)
        <code>apz.windows.use_direct_manipulation</code>
      </td>
    </tr>
  </tbody>
</table>

## Siehe auch

- [Firefox Entwickler-Version Release Notes](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
