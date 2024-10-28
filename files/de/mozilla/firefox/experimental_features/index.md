---
title: Experimentelle Funktionen in Firefox
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: fc594f0be75a7dd74beec04ab71c59a447a00987
---

{{FirefoxSidebar}}

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, einschließlich derjenigen für vorgeschlagene oder hochmoderne Web-Plattformstandards, sowie Informationen zu den Builds, in denen sie vorhanden sind, ob sie "standardmäßig" aktiviert sind oder nicht, und welche _Präferenz_ verwendet werden kann, um sie zu aktivieren oder zu deaktivieren. Auf diese Weise können Sie die Funktionen testen, bevor sie veröffentlicht werden.

Neue Funktionen erscheinen zuerst im [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) Build, wo sie häufig standardmäßig aktiviert sind. Sie verbreiten sich später in die [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) und schließlich in den Release-Build. Nachdem eine Funktion in einem Release-Build standardmäßig aktiviert ist, gilt sie nicht mehr als experimentell und sollte aus dem Thema entfernt werden.

Experimentelle Funktionen können durch den [Firefox Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) (geben Sie `about:config` in die Firefox-Adressleiste ein) durch Änderung der unten aufgeführten _Präferenz_ aktiviert oder deaktiviert werden.

> [!NOTE]
> Für Editoren - Wenn Sie Funktionen zu diesen Tabellen hinzufügen, versuchen Sie bitte, einen Link zu dem oder den relevanten Bugs mit `[Firefox bug <Nummer>](https://bugzil.la/<Nummer>)` einzufügen.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol hat, sobald jemand darin zu tippen beginnt, um andere Browserimplementierungen anzupassen. (Für weitere Details siehe [Firefox bug 558594](https://bugzil.la/558594)).

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

### Passwortanzeige umschalten

HTML-Passworteingabefelder ([`<input type="password">`](/de/docs/Web/HTML/Element/input/password)) beinhalten ein "Augensymbol", das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox bug 502258](https://bugzil.la/502258)).

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

## CSS

### Hex-Boxen zur Anzeige von Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formfeed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie nicht erwartet werden. (Für weitere Details siehe [Firefox bug 1099557](https://bugzil.la/1099557)).

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

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS-Inline-Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, festzulegen, wie abgesenkte, angehobene und vertiefte Initialen angezeigt werden. (Für weitere Details siehe [Firefox bug 1223880](https://bugzil.la/1223880)).

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

Das `from` Schlüsselwort wird jetzt als gültige CSS-Syntax geparst, wenn die Präferenz `layout.css.relative-color-syntax.enabled` auf `true` gesetzt ist. Obwohl dieses Schlüsselwort derzeit keine Auswirkungen hat, wird es keine Syntaxfehler erzeugen, wenn es an gültigen Stellen in CSS-Farb-Funktionen verwendet wird, was die laufende Arbeit an [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) unterstützt. (Für weitere Details siehe [Firefox bug 1889133](https://bugzil.la/1889133)).

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

Unterstützung für die Verwendung einer einzelnen {{cssxref("number")}} als {{cssxref("ratio")}}, wenn das Seitenverhältnis für eine [Media Query](/de/docs/Web/CSS/CSS_media_queries) angegeben wird. (Für weitere Details siehe [Firefox bug 1565562](https://bugzil.la/1565562)).

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

Die {{cssxref("backdrop-filter")}} Eigenschaft wendet Filtereffekte auf den Bereich hinter einem Element an. (Für weitere Details siehe [Firefox bug 1178765](https://bugzil.la/1178765)).

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

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion, wie sie auf {{cssxref("width")}} und andere Größenbestimmungs-Eigenschaften angewendet wird. Diese Funktion wird bereits gut für die Größenbestimmung von CSS-Grid-Layout-Spuren unterstützt. (Für weitere Details siehe [Firefox bug 1312588](https://bugzil.la/1312588)).

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

### Scroll-gesteuerte Animationen

Früher "scroll-verknüpfte Animationen" genannt, hängt eine scroll-gesteuerte Animation von der Scrollposition eines Scrollbalkens ab, anstatt von der Zeit oder einer anderen Dimension. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft) ermöglichen Ihnen, anzugeben, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann. Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) durch Setzen der {{cssxref('animation-timeline')}} Eigenschaft auf den über `scroll-timeline-name` definierten Namenwert verknüpft werden.

Wenn Sie die {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft verwenden, muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Langform- und Kurzformeigenschaften sind beide hinter der Präferenz verfügbar.

Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) Funktionsnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scroll-Leiste in einem Vorfahren-Element für die Zeitleiste verwendet wird.

Für weitere Informationen siehe [Firefox bug 1807685](https://bugzil.la/1807685), [Firefox bug 1804573](https://bugzil.la/1804573), [Firefox bug 1809005](https://bugzil.la/1809005), [Firefox bug 1676791](https://bugzil.la/1676791), [Firefox bug 1754897](https://bugzil.la/1754897), und [Firefox bug 1737918](https://bugzil.la/1737918).

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

### @scope Regel

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [at-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, bestimmte Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren übermäßig zu erhöhen ([Firefox bug 1886441](https://bugzil.la/1886441)).

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

### @font-face src Feature-Check

Der `@font-face` [`src` Deskriptor](/de/docs/Web/CSS/@font-face/src) unterstützt jetzt die `tech()` Funktion, die es ermöglicht, ob eine Schriftart-Ressource basierend darauf heruntergeladen wird, ob der Benutzeragent eine bestimmte Schriftart-Eigenschaft oder -Technologie unterstützt. Weitere Details finden Sie in [Firefox bug 1715546](https://bugzil.la/1715546).

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

Die CSS [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) Eigenschaft ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen. Weitere Details finden Sie in ([Firefox bug 1461589](https://bugzil.la/1461589)).

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

Der **`page-orientation`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@page")}} At-Regel steuert die Rotation einer gedruckten Seite. Sie steuert den Fluss des Inhalts über Seiten hinweg, wenn die Ausrichtung einer Seite geändert wird. Dieses Verhalten unterscheidet sich vom [`size`](/de/docs/Web/CSS/@page/size) Deskriptor darin, dass ein Benutzer die Richtung festlegen kann, in die die Seite gedreht wird. Weitere Details finden Sie in ([Firefox bug 1673987](https://bugzil.la/1673987)).

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

### prefers-reduced-transparency Medienfunktion

Die CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienfunktion ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge der transparenten oder durchscheinenden Schichteffekte auf ihrem Gerät zu minimieren. Weitere Details finden Sie in ([Firefox bug 1736914](https://bugzil.la/1736914)).

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

### inverted-colors Medienfunktion

Die CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Medienfunktion ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. Weitere Details finden Sie in ([Firefox bug 1794628](https://bugzil.la/1794628)).

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

### Benannte Ansicht Fortschritts-Zeitlinien Eigenschaft

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass sein Vorfahren-Scroller-Element die Quelle einer Ansichts-Fortschritt-Zeitlinie ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt. Weitere Details finden Sie in ([Firefox bug 1737920](https://bugzil.la/1737920)).

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

### Anonyme Ansicht Fortschritts-Zeitlinienfunktion

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine Ansichts-Fortschritts-Zeitlinie ist, die das Element animieren wird, während es sich durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt. Die Funktion definiert die Achse des Eltern-Elements, die die Zeitleiste bereitstellt, zusammen mit dem Einsatz innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und endet. Weitere Details finden Sie in ([Firefox bug 1808410](https://bugzil.la/1808410)).

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

Die nicht standardisierte CSS {{cssxref("zoom")}} Eigenschaft ist in der Nightly-Version aktiviert und ermöglicht es Ihnen, ein Element ähnlich der {{cssxref("transform")}} Eigenschaft zu vergrößern, aber sie beeinflusst die Layout-Größe des Elements. Weitere Details finden Sie in ([Firefox bug 1855763](https://bugzil.la/1855763) und [Firefox bug 390936](https://bugzil.la/390936)).

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

Um die Kompatibilität mit diesen Änderungen sicherzustellen, sind die [Vendor-präfixierten Transformations-Eigenschaften](#vendor-präfixierte_transformations-eigenschaften) und die [Vendor-präfixierten Übergangs-Eigenschaften](#vendor-präfixierte_übergangs-eigenschaften) in der Nightly-Version deaktiviert. Diese Änderungen werden in den folgenden Abschnitten beschrieben.

### text-wrap: balance & stable Werte

Die [`text-wrap`](/de/docs/Web/CSS/text-wrap) CSS-Eigenschaftswerte `balance` und `stable` ermöglichen es, das Layout von kurzen Inhalten auf ausgewogene Weise zu umbrechen und für bearbeitbare Inhalte das Umbruchverhalten beizubehalten, während der Benutzer es bearbeitet. (Für weitere Details siehe [Firefox bug 1731541](https://bugzil.la/1731541)).

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

### Vendor-präfixierte Transformations-Eigenschaften

Die mit `-moz-` präfixierten [CSS-Transformations](/de/docs/Web/CSS/CSS_transforms) Eigenschaften wurden in der Nightly-Version deaktiviert, indem die Präferenz `layout.css.prefixes.transforms` auf `false` gesetzt wurde. ([Firefox bug 1855763](https://bugzil.la/1855763)).
Die deaktivierten Eigenschaften sind:

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

### Vendor-präfixierte Übergangs-Eigenschaften

Die mit `-moz-` präfixierten [CSS-Übergangs](/de/docs/Web/CSS/CSS_transitions) Eigenschaften wurden in der Nightly-Version deaktiviert, indem die Präferenz `layout.css.prefixes.transitions` auf `false` gesetzt wurde. ([Firefox bug 1855763](https://bugzil.la/1855763)).
Die deaktivierten Eigenschaften sind:

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

### UA-Stile für `<h1>` innerhalb von Abschnittselementen

Die `<h1>` Überschrift verkleinert sich nicht mehr, wenn sie innerhalb von [Abschnittselementen](/de/docs/Web/HTML/Content_categories#sectioning_content) wie `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` innerhalb von Abschnittselementen sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt](https://github.com/whatwg/html/pull/7829) wurde. ([Firefox bug 1883896](https://bugzil.la/1883896)).

> [!NOTE]
> Die Präferenz für diese Funktion arbeitet umgekehrt: Sie ist im Nightly-Build auf `false` gesetzt, was die UA-Stile für Überschriften in Abschnittselementen entfernt. Sie ist in allen anderen Kanälen auf `true` gesetzt, was die bestehenden UA-Stile für die verschachtelten Überschriften beibehält.

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

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften unter Verwendung eines oder mehrerer "Form-Befehle" zu definieren. Diese Befehle ähneln sehr den [SVG-Pfad-Befehlen](/de/docs/Web/SVG/Attribute/d#path_commands). Die `shape()` Funktion ähnelt in gewisser Hinsicht der `{{cssxref("basic-shape/path","path()")}}` Funktion, aber im Gegensatz zu `path()`, die die [SVG-Pfad](/de/docs/Web/SVG/Element/path) Syntax verwendet, verwendet `shape()` die Standard-CSS-Syntax. Dies ermöglicht es Ihnen, leicht Formen zu erstellen und zu bearbeiten und auch CSS-Mathematik-Funktionen zu verwenden. Für weitere Details siehe [Firefox bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path`, und [Firefox bug 1884425](https://bugzil.la/1884425) für ihre Unterstützung bei der Interpolation.

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

Die CSS [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel ermöglicht es Ihnen, die Anfangsstile eines Elements für einen CSS-Übergang festzulegen, wenn das Element keinen standardmäßigen Anfangsstil hat. Dies ist besonders nützlich für Elemente, die beim ersten Rendern der Seite nicht sichtbar sind, wie [`popover`](/de/docs/Web/HTML/Global_attributes/popover) oder ['dialog'](/de/docs/Web/HTML/Element/dialog). Unterstützt derzeit noch nicht das Animieren von `display: none`. Weitere Details finden Sie in [Firefox bug 1834876](https://bugzil.la/1834876) und [Firefox bug 1834877](https://bugzil.la/1834877).

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

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt nun den angegebenen Buchstabenabstand gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich von der aktuellen Verhaltensweise, bei der der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann die Textabstände verbessern, insbesondere in gemischt-direktionalem Text [Firefox bug 1891446](https://bugzil.la/1891446).

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

### `calc()` Unterstützung für Farbkanäle in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen, was es Ihnen ermöglicht, Änderungen an Farben in verschiedenen Farbräumen oder bei der Verwendung verschiedener funktionaler Notationen korrekt zu berechnen [Firefox bug 1889561](https://bugzil.la/1889561).

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

Das [CSS Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definiert eine Reihe von Funktionen, die es ermöglichen, Elemente als Ankerelemente zu definieren und andere Elemente relativ zu Ankerelementen zu positionieren. Dies ermöglicht es beispielsweise, Tooltips neben zugehörigen Inhalten anzuzeigen, während sie durch den Viewport scrollen, sich bei Bedarf bewegen, wenn sie den Viewport überschreiten würden, und verschwinden, wenn der Anker den Bildschirm verlässt. Das Set von Funktionen wird schrittweise hinter einer Präferenz ausgerollt ([Firefox bug 1838746](https://bugzil.la/1838746)).

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
      <th>Präferenzname</th>
      <td colspan="2"><code>layout.css.anchor-positioning.enabled</code></td>
    </tr>
  </tbody>
</table>

## SVG

### SVGPathSeg APIs

Die SVGPathSeg APIs werden zurückgezogen und hinter einer Präferenz platziert. Dies umfasst: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/de/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`. (Für weitere Details siehe [Firefox bug 1388931](https://bugzil.la/1388931)).

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

{{jsxref("Promise.try()")}} ist eine Bequemlichkeitsmethode, die einen Rückruffunktions beliebiger Art akzeptiert (gibt entweder zurück oder wirft Fehler, synchron oder asynchron) und ihr Ergebnis in einem {{jsxref("Promise")}} kapselt, sodass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um damit umzugehen ([Firefox bug 1905364](https://bugzil.la/1905364)).

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

## APIs

### Cookie Store API

Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}} basierende Methode zur Verwaltung von Cookies, die die Ereignisschleife nicht blockiert und nicht auf das [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher den [Service Workers](/de/docs/Web/API/Service_Worker_API) zur Verfügung gestellt werden). Ein Teilbereich der Cookie Store API wurde implementiert ([Firefox Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

- Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface, jedoch ohne `partitioned` in den Rückgabewerten.
- Das [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Interface, ohne `partitioned`-Eigenschaften.
- Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore)-Eigenschaft.
- Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore)-Eigenschaft.

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>dom.cookieStore.enabled</code></td>
    </tr>
  </tbody>
</table>

### Fetch `keepalive`

Die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode hat eine [`keepalive`](/de/docs/Web/API/RequestInit#keepalive)-Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.

Dies ermöglicht es, dass eine Fetch-Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) verwendet werden kann, um Analysen am Ende einer Sitzung zu senden, was einige Vorteile hat (Sie können HTTP-Methoden verwenden, die nicht [`POST`](/de/docs/Web/HTTP/Methods/POST) sind, Anforderungseigenschaften anpassen und auf die Serverantwort über die Auflösung des Fetch {{jsxref("Promise")}} zugreifen). Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

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
      <td>Ja</td>
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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>dom.fetchKeepalive.enabled</code></td>
    </tr>
  </tbody>
</table>

### CloseWatcher Interface

Eingebaute Webkomponenten mit "öffnen" und "schließen" Semantiken, wie modale Dialoge und Popover, können durch gerätenative Mechanismen geschlossen werden. Auf Android kann man beispielsweise einen Dialog durch die Rücktaste schließen. Das [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Interface erlaubt es Entwicklern, UI-Komponenten zu implementieren, wie beispielsweise benutzerdefinierte Seitenleisten, die ebenfalls durch native Mechanismen geschlossen werden können. ([Firefox Bug 1888729](https://bugzil.la/1888729)).

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>dom.closewatcher.enabled</code></td>
    </tr>
  </tbody>
</table>

### Grafik: Canvas, WebGL und WebGPU

#### Trefferzonen

Ob die Mauskoordinaten innerhalb eines bestimmten Bereichs auf dem `canvas` sind, ist oft ein zu lösendes Problem. Die Hit-Region-API erlaubt es, einen Bereich Ihres `canvas` zu definieren und bietet eine weitere Möglichkeit, interaktiven Inhalt auf einem `canvas` für Barrierefreiheitstools verfügbar zu machen.

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>canvas.hitregions.enabled</code></td>
    </tr>
  </tbody>
</table>

#### WebGL: Entwürfe von Erweiterungen

Wenn diese Einstellung aktiviert ist, werden alle WebGL-Erweiterungen, die derzeit im "Entwurfs"-Status sind und getestet werden, zur Nutzung freigegeben. Derzeit werden von Firefox keine WebGL-Erweiterungen getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet eine niedrigstufige Unterstützung für die Durchführung von Berechnungen und Grafikdarstellungen mithilfe der [Grafikprozessor-Einheit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>dom.webgpu.enabled</code></td>
    </tr>
  </tbody>
</table>

### Reporting API Unterstützung für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt jetzt das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Verstößen.

Instanzen von [`Report`](/de/docs/Web/API/Report), die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können nun einen `type`-Wert von `"csp-violation"` und eine `body`-Eigenschaft enthalten, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält. Dies ermöglicht es, CSP-Verstöße innerhalb einer Webseite zu melden.

CSP-Verstoßberichte können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}}-Direktive benannt sind — Endpunktsnamen und die entsprechenden URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}}- oder {{httpheader('Report-To')}}-HTTP-Antwort-Headern definiert werden. Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report)-Objekts mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen, CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, der das CSP {{CSP("report-uri")}}-Direktiv nutzt, um die URL des Meldeendpunkts festzulegen, und ein [CSP-spezifisches JSON-Format für Verstoßberichte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat. ([Firefox Bug 1391243](https://bugzil.la/1391243)).

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>dom.reporting.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebRTC und Medien

Die folgenden experimentellen Funktionen schließen diejenigen ein, die in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medientransportpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle hinzu. Siehe [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617) für weitere Informationen.

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>media.mediasource.experimental.enabled</code></td>
    </tr>
  </tbody>
</table>

#### AVIF-Konformitätsstrenge

Die `image.avif.compliance_strictness`-Einstellung kann genutzt werden, um die _Strenge_ zu kontrollieren, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image)-Bildern angewandt wird. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

Erlaubte Werte sind:

- `0`: Akzeptiere Bilder mit Spezifikationsverletzungen in sowohl Empfehlungen ("should"-Sprache) als auch Anforderungen ("shall"-Sprache), sofern sie sicher oder eindeutig interpretiert werden können.
- `1` (Standard): Verweigere Verletzungen von Anforderungen, aber erlaube Verletzungen von Empfehlungen.
- `2`: Streng. Verweigere alle Verletzungen in Anforderungen oder Empfehlungen.

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>image.avif.compliance_strictness</code></td>
    </tr>
  </tbody>
</table>

#### Unterstützung für JPEG XL

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/)-Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Einstellung gesetzt ist).

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>image.jxl.enabled</code></td>
    </tr>
  </tbody>
</table>

### OpenFont COLRv1 Schriftarten

Diese Funktion bietet Unterstützung für die [OpenFont COLRv1 Schriftartenspezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/). Dies ermöglicht es, kompressionsfreundliche Farbschriftarten mit Verläufen, Kompositionen und Mischungen mit der CSS [`@font-face`](/de/docs/Web/CSS/@font-face)-Anweisung oder der [CSS Schriftart-Lade-API](/de/docs/Web/API/CSS_Font_Loading_API) zu laden. Siehe [Firefox Bug 1740530](https://bugzil.la/1740530) für weitere Details.

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>gfx.font_rendering.colr_v1.enabled</code></td>
    </tr>
  </tbody>
</table>

### CSS Custom Highlight API

Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bietet einen Mechanismus zum Gestalten beliebiger Textbereiche in einem Dokument (verallgemeinert das Verhalten anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}). Die Bereiche werden in JavaScript mithilfe von [`Range`](/de/docs/Web/API/Range)-Instanzen definiert, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert und dann mit einem Namen mit [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registriert werden. Das CSS-[`::highlight`](/de/docs/Web/CSS/::highlight)-Pseudoelement wird verwendet, um Stile auf ein registriertes Highlight anzuwenden. Siehe [Firefox Bug 1703961](https://bugzil.la/1703961) für weitere Details.

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>dom.customHighlightAPI.enabled</code></td>
    </tr>
  </tbody>
</table>

### Service Workers

#### Vorausladen von Service Worker-Ressourcen bei der Navigation

Die [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)-Schnittstelle kann verwendet werden, um das Vorausladen von Ressourcen beim Navigieren zu einer Seite zu ermöglichen. Das Vorausladen erfolgt parallel zum Hochfahren des Workers und verkürzt die Gesamtzeit von Beginn der Navigation bis zum Abrufen der Ressourcen.

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
      <td>99</td>
      <td>ja</td>
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
      <th>Name der Einstellung</th>
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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>dom.vr.enabled</code></td>
    </tr>
  </tbody>
</table>

### HTML DOM API

#### Selektionen, die Schatten-DOM-Grenzen überschreiten

Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zu erhalten, die den aktuell ausgewählten Bereich oder die Bereiche darstellen. Im Gegensatz zu [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) kann diese Methode Bereiche mit Anker- oder Fokus-Knoten innerhalb eines Schatten-DOM zurückgeben, jedoch nur, wenn ihr die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte übergeben werden, die diese Knoten enthalten. Andernfalls gibt sie einen Bereich zurück, der neu festgelegt wurde, um den Host-Knoten der Schattenwurzel einzuschließen, die den Knoten enthält. Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls so geändert, dass sie Knoten innerhalb einer Schattenwurzel akzeptieren.

Benutzerauswahl über Maus, Tastatur usw. kann überall im Dokument beginnen und enden, einschließlich in offenen oder geschlossenen Schattenbäumen. ([Firefox Bug 1867058](https://bugzil.la/1867058)).

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>dom.shadowdom.selection_across_boundary.enabled</code></td>
    </tr>
  </tbody>
</table>

#### HTMLMediaElement Methode: setSinkId()

[`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) erlaubt es Ihnen, die `sink ID` eines Audioausgabegeräts auf einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) festzulegen und dadurch zu ändern, wo das Audio ausgegeben wird. Siehe [Firefox Bug 934425](https://bugzil.la/934425) für weitere Details.

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>media.setsinkid.enabled</code></td>
    </tr>
  </tbody>
</table>

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert ist, werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox derzeit jedoch nicht mehrere Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, daher sind sie beide standardmäßig deaktiviert. Siehe [Firefox Bug 1057233](https://bugzil.la/1057233) für weitere Details.

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>media.track.enabled</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` konvertieren den gegebenen Punkt, das Rechteck oder das Vierfach aus dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox Bug 918189](https://bugzil.la/918189) für weitere Details.)

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>layout.css.convertFromNode.enable</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Knoten oder Viewport zurück. (Siehe [Firefox Bug 917755](https://bugzil.la/917755) für weitere Details.)

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>layout.css.getBoxQuads.enabled</code></td>
    </tr>
  </tbody>
</table>

### Payment Request API

#### Primäres Zahlungsmanagement

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der beim Testen der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, die Einführung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API geführt werden. Die Arbeit läuft weiter. (Siehe [Firefox Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

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
      <th>Name der Einstellung</th>
      <td colspan="2">
        <code>dom.payments.request.enabled</code> und<br /><code
          >dom.payments.request.supportedRegions</code
        >
      </td>
    </tr>
  </tbody>
</table>

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website. Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Einstellung auf dem Desktop (sofern unten nicht anders angegeben).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Geänderte Version</th>
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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>dom.webshare.enabled</code></td>
    </tr>
  </tbody>
</table>

### Screen Orientation API

#### ScreenOrientation.lock()

Die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)-Methode erlaubt es, ein Gerät auf eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt und von den Anforderungen der Browsersperre erlaubt ist. Üblicherweise ist das Sperren der Ausrichtung nur auf mobilen Geräten möglich, wenn das Dokument im Vollbildmodus angezeigt wird. Siehe [Firefox Bug 1697647](https://bugzil.la/1697647) für weitere Details.

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Geänderte Version</th>
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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>dom.screenorientation.allow-lock</code></td>
    </tr>
  </tbody>
</table>

### Prioritized Task Scheduling API

Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, allen Aufgaben einer Anwendung Priorität zu geben, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.

Dies ist im Firefox Nightly (nur) ab Firefox 101 aktiviert. Es gibt keine Einstellung, um es in anderen Versionen zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction)-Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf wahr gesetzt ([Firefox Bug 1794475](https://bugzil.la/1794475)).

<table>
  <thead>
    <tr>
      <th>Release-Kanal</th>
      <th>Geänderte Version</th>
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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>dom.webnotifications.requireinteraction.enabled</code></td>
    </tr>
  </tbody>
</table>

## Sicherheit und Datenschutz

### Blockieren von unverschlüsselten Anfragen von Flash auf verschlüsselten Seiten

Um Man-in-the-Middle (MitM)-Angriffe zu reduzieren, die durch Flash-Inhalte auf verschlüsselten Seiten verursacht werden, wurde eine Einstellung hinzugefügt, um `OBJECT_SUBREQUEST`s als aktive Inhalte zu behandeln. Siehe [Firefox Bug 1190623](https://bugzil.la/1190623) für weitere Details.

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
      <th>Name der Einstellung</th>
      <td colspan="2">
        <code>security.mixed_content.block_object_subrequest</code>
      </td>
    </tr>
  </tbody>
</table>

### Kennzeichnung unsicherer Seiten

Diese beiden Einstellungen fügen einen "Nicht sicher"-Text in die Adressleiste neben dem traditionellen Schloss-Symbol hinzu, wenn eine Seite unsicher geladen wird (das heißt, {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}} verwendet wird). Siehe [Firefox Bug 1335970](https://bugzil.la/1335970) für weitere Details.

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
      <th>Name der Einstellung</th>
      <td colspan="2">
        <code>security.insecure_connection_text.enabled</code> für normalen
        Browsingmodus;
        <code>security.insecure_connection_text.pbmode.enabled</code> für
        privaten Browsingmodus
      </td>
    </tr>
  </tbody>
</table>

### Permissions Policy / Feature policy

[Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und zu ändern. Es ist ähnlich der CSP, steuert jedoch Funktionen anstelle von Sicherheitsverhalten.
Dies wird in Firefox als **Feature Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Element/iframe#allow) Attribut auf `<iframe>`-Elementen gesetzt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

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
      <th>Name der Einstellung</th>
      <td colspan="2">
        <code>dom.security.featurePolicy.header.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Unterstützung der Berechtigungs-API für Mikrofon und Kamera

Die [Berechtigungs-API](/de/docs/Web/API/Permissions_API) Berechtigungen `microphone` und `camera` werden unterstützt, sodass eine Webseite [abfragen](/de/docs/Web/API/Permissions/query) kann, ob Zugriff auf die entsprechende Hardware gewährt, abgelehnt oder weiterhin die Zustimmung des Benutzers erfordert ([Firefox Bug 1609427](https://bugzil.la/1609427), [Firefox Bug 1915222](https://bugzil.la/1915222)).

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
      <th>Name der Einstellung</th>
      <td colspan="2">
        <code>permissions.media.query.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Clear-Site-Data "cache"-Direktiv

Das [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data) HTTP-Antwort-Header `cache`-Direktiv löscht den Browser-Cache für die anfordernde Website.

> [!NOTE]
> Dies war ursprünglich standardmäßig aktiviert, wurde aber in Version 94 hinter einer Einstellung platziert ([Firefox Bug 1729291](https://bugzil.la/1729291)).

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
      <th>Name der Einstellung</th>
      <td colspan="2">
        <code>privacy.clearsitedata.cache.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung zur Anzeigenzuordnung mittels des neuen Objekts `navigator.privateAttribution` mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im Erklärer](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Websites über [Origin-Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

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
      <th>Name der Einstellung</th>
      <td colspan="2">
        <code>dom.origin-trials.private-attribution.state</code>
      </td>
    </tr>
  </tbody>
</table>

## HTTP

### Accept-Header mit MIME-Typ image/jxl

Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Headers/Accept) kann in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) über eine Einstellung konfiguriert werden, um Unterstützung für den MIME-Typ `image/jxl` anzuzeigen.

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
      <th>Name der Einstellung</th>
      <td colspan="2">
        <code>image.jxl.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### SameSite=Lax standardmäßig

[`SameSite`-Cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungs-Website navigiert, nicht jedoch für Cross-Site-Subrequests zum Laden von Bildern oder Frames auf einer Drittanbieter-Website usw. Für weitere Details siehe [Firefox Bug 1617609](https://bugzil.la/1617609).

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>network.cookie.sameSite.laxByDefault</code></td>
    </tr>
  </tbody>
</table>

### Access-Control-Allow-Headers Wildcard umfasst nicht Autorisierung

Der Header [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, der anzeigt, welche Anforderungs-Header in die endgültige Anfrage aufgenommen werden können. Die Antwortanweisung kann ein Wildcard (`*`) enthalten, das angibt, dass die endgültige Anforderung alle Header außer dem `Authorization`-Header enthalten kann.

Standardmäßig schließt Firefox den `Authorization`-Header in die endgültige Anfrage ein, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde. Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einbezieht. Weitere Details finden Sie unter [Firefox Bug 1687364](https://bugzil.la/1687364).

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>network.cors_preflight.authorization_covered_by_wildcard</code></td>
    </tr>
  </tbody>
</table>

## Entwickler-Tools

Die Entwickler-Tools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor sie zur Beta und Release gelangen. Die unten stehenden Funktionen sind der aktuelle Stand der experimentellen Funktionen der Entwickler-Tools.

### Ausführungskontextwähler

Diese Funktion zeigt eine Schaltfläche auf der Eingabezeile der Konsole an, mit der Sie den Kontext ändern können, in dem der eingegebene Ausdruck ausgeführt wird. (Siehe [Firefox Bug 1605154](https://bugzil.la/1605154) und [Firefox Bug 1605153](https://bugzil.la/1605153) für weitere Details.)

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
      <th>Name der Einstellung</th>
      <td colspan="2"><code>devtools.webconsole.input.context</code></td>
    </tr>
  </tbody>
</table>

### Unterstützung mobiler Gesten im responsiven Design-Modus

Mausgesten werden verwendet, um mobile Gesten wie Wischen/Scrollen, Doppeltippen und Pinch-Zoomen sowie langes Drücken zum Auswählen/Öffnen des Kontextmenüs zu simulieren. (Siehe [Firefox Bug 1621781](https://bugzil.la/1621781), [Firefox Bug 1245183](https://bugzil.la/1245183) und [Firefox Bug 1401304](https://bugzil.la/1401304) für weitere Details.)

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
      <td>76<sup>[1]</sup></td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>76<sup>[1]</sup></td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>76<sup>[1]</sup></td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>76<sup>[1]</sup></td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Name der Einstellung</th>
      <td colspan="2">n/a</td>
    </tr>
  </tbody>
</table>

\[1] Unterstützung für das Zoomen mit der Doppeltipp-Geste wurde in Firefox 76 hinzugefügt. Die anderen Gesten wurden für Firefox 79 hinzugefügt.

### Server-gesendete Ereignisse im Netzwerkmonitor

Der Netzwerkmonitor zeigt Informationen zu [servergesendeten](/de/docs/Web/API/Server-sent_events) Ereignissen an. (Siehe [Firefox Bug 1405706](https://bugzil.la/1405706) für weitere Details.)

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
      <th>Name der Einstellung</th>
      <td colspan="2">
        <code>devtools.netmonitor.features.serverSentEvents</code>
      </td>
    </tr>
  </tbody>
</table>

### CSS-Browser-Kompatibilitätstooltipps

Die CSS-Regelansicht kann Tooltips zur Browser-Kompatibilität neben beliebigen CSS-Eigenschaften anzeigen, bei denen bekannte Probleme bestehen. Weitere Informationen finden Sie unter: [Überprüfen und Bearbeiten von HTML > Browser-Kompatibilitätswarnungen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#browser-compat-warnings).

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
      <th>Name der Einstellung</th>
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

Diese Funktion ermöglicht es, sanftes Pinch-Zoomen auf Desktop-Computern ohne erforderliche Layout-Neuberechnungen zu ermöglichen, genau wie es mobile Geräte tun. (Siehe [Firefox Bug 1245183](https://bugzil.la/1245183) und [Firefox Bug 1620055](https://bugzil.la/1620055) für weitere Details.)

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
      <td>42</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>42</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>42</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>42</td>
      <td>Nein</td>
    </tr>
    <tr>
      <th>Name der Einstellung</th>
      <td colspan="2">
        <code>apz.allow_zooming</code> und (auf Windows)
        <code>apz.windows.use_direct_manipulation</code>
      </td>
    </tr>
  </tbody>
</table>

## Siehe auch

- [Firefox Entwickler-Veröffentlichungsnotizen](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
