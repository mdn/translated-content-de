---
title: Experimentelle Funktionen in Firefox
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{FirefoxSidebar}}

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich jener für vorgeschlagene oder fortschrittliche Webplattform-Standards. Sie enthält Informationen darüber, in welchen Builds diese Funktionen vorhanden sind, ob sie "standardmäßig" aktiviert sind oder nicht, und welche _Präferenz_ zur Aktivierung oder Deaktivierung genutzt werden kann.
Damit können Sie die Funktionen testen, bevor sie veröffentlicht werden.

Neue Funktionen erscheinen zuerst im [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) Build, wo sie häufig standardmäßig aktiviert sind.
Später verbreiten sie sich in die [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) und schließlich in den Release Build.
Sobald eine Funktion standardmäßig in einem Release Build aktiviert ist, wird sie nicht mehr als experimentell betrachtet und sollte aus dem Thema entfernt werden.

Experimentelle Funktionen können über den [Firefox Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) (geben Sie `about:config` in die Firefox Adressleiste ein) durch Änderung der unten aufgeführten _Präferenz_ ein- oder ausgeschaltet werden.

> [!NOTE]
> Für Editoren: Wenn Sie Funktionen zu diesen Tabellen hinzufügen, versuchen Sie bitte, einen Link zu dem oder den relevanten Bugs mittels `[Firefox bug <number>](https://bugzil.la/<number>)` zu inkludieren.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies bewirkt, dass ein Suchfeld ein Löschen-Symbol hat, sobald jemand anfängt zu tippen, um den Implementierungen anderer Browser zu entsprechen. (Siehe [Firefox Bug 558594](https://bugzil.la/558594) für weitere Details.)

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

HTML-Passworteingabefelder ([`<input type="password">`](/de/docs/Web/HTML/Element/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox Bug 502258](https://bugzil.la/502258)).

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

### Hex-Felder zur Anzeige von Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc), außer _Tab_ (`U+0009`), _Zeilenvorschub_ (`U+000A`), _Formfeed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`), als Hex-Feld, wenn sie unerwartet sind. (Siehe [Firefox Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

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

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/)-Spezifikation und ermöglicht es Ihnen anzugeben, wie fallende, hervorgehobene und abgesenkte Anfangsbuchstaben angezeigt werden. (Siehe [Firefox Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

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

Das `from` Schlüsselwort wird nun als gültige CSS-Syntax geparst, wenn die `layout.css.relative-color-syntax.enabled` Präferenz auf `true` gesetzt ist.
Obwohl dieses Schlüsselwort derzeit keine Auswirkungen hat, wird es bei Verwendung an gültigen Stellen in CSS-Farb-Funktionen keine Syntaxfehler erzeugen, wodurch die laufende Arbeit an [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) unterstützt wird.
Siehe [Firefox Bug 1889133](https://bugzil.la/1889133) für weitere Details.

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

Unterstützung für die Verwendung einer einzelnen {{cssxref("number")}} als {{cssxref("ratio")}} bei der Angabe des Seitenverhältnisses für eine [Media Query](/de/docs/Web/CSS/CSS_media_queries). (Siehe [Firefox Bug 1565562](https://bugzil.la/1565562) für weitere Details.)

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

Die {{cssxref("backdrop-filter")}} Eigenschaft wendet Filtereffekte auf die Fläche hinter einem Element an. (Siehe [Firefox Bug 1178765](https://bugzil.la/1178765) für weitere Details.)

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

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion, wie sie auf {{cssxref("width")}} und andere Größen-Eigenschaften angewendet wird. Diese Funktion wird bereits gut unterstützt für die Größenbestimmung von CSS Grid Layout Tracks. (Siehe [Firefox Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

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

Früher "Scroll-verknüpfte Animationen" genannt, basiert eine scrollgesteuerte Animation auf der Scrollposition eines Rollbalkens statt auf Zeit oder einer anderen Dimension.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) erlauben es Ihnen zu spezifizieren, dass ein bestimmter Rollbalken in einem bestimmten benannten Container als Quelle für eine scrollgesteuerte Animation genutzt werden kann.
Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) verbunden werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namen gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Bei der Nutzung der {{cssxref('scroll-timeline')}} Kurzschreibweise muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Langhand- und Kurzschreib-Eigenschaften sind beide hinter der Präferenz verfügbar.

Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) Funktionsnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Rollbalkenachse in einem Vorfahrenelement für die Zeitleiste verwendet wird.

Für weitere Informationen siehe [Firefox Bug 1807685](https://bugzil.la/1807685), [Firefox Bug 1804573](https://bugzil.la/1804573), [Firefox Bug 1809005](https://bugzil.la/1809005), [Firefox Bug 1676791](https://bugzil.la/1676791), [Firefox Bug 1754897](https://bugzil.la/1754897) und [Firefox Bug 1737918](https://bugzil.la/1737918).

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

### @scope at-rule

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, spezifische Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren zu stark erhöhen zu müssen ([Firefox Bug 1886441](https://bugzil.la/1886441)).

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
      <td colspan="2"><code>layout.css.at-scope.enabled</code></td>
    </tr>
  </tbody>
</table>

### @font-face src Feature-Überprüfung

Der `@font-face` [`src` Deskriptor](/de/docs/Web/CSS/@font-face/src) unterstützt jetzt die `tech()` Funktion, die es ermöglicht, zu entscheiden, ob eine Schriftart-Ressource heruntergeladen wird, basierend darauf, ob der User-Agent ein bestimmtes Schriftart-Feature oder eine bestimmte Technologie unterstützt.
Siehe [Firefox Bug 1715546](https://bugzil.la/1715546) für weitere Details.

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

Die CSS [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) Eigenschaft ermöglicht es Ihnen, einen standardmäßigen Präsentationsstil für die Darstellung von Emojis festzulegen.
Siehe ([Firefox Bug 1461589](https://bugzil.la/1461589)) für weitere Details.

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

Der **`page-orientation`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@page")}} at-rule steuert die Drehung einer gedruckten Seite. Er verwaltet den Fluss des Inhalts über die Seiten, wenn die Ausrichtung einer Seite geändert wird. Dieses Verhalten unterscheidet sich von dem des [`size`](/de/docs/Web/CSS/@page/size) Deskriptors darin, dass ein Benutzer die Richtung festlegen kann, in der die Seite gedreht wird.
Siehe ([Firefox Bug 1673987](https://bugzil.la/1673987)) für weitere Details.

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

### prefers-reduced-transparency Media Feature

Das CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media Feature ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, die die Menge an transparenten oder durchscheinenden Schichteffekten auf ihrem Gerät minimiert.
Siehe ([Firefox Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

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

### inverted-colors Media Feature

Das CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Media Feature ermöglicht es Ihnen zu erkennen, ob ein User-Agent oder das zugrunde liegende Betriebssystem die Farben invertiert.
Siehe ([Firefox Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

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

### Benannte Ansichtsfortschritts-Zeitleisten Eigenschaft

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der identifiziert, dass sein übergeordnetes Scrollerelement die Quelle einer Ansichtsfortschritts-Zeitleiste ist.
Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt.
Siehe ([Firefox Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

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

### Anonyme Ansichtsfortschritts-Zeitleisten Funktion

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion ermöglicht es Ihnen anzugeben, dass die `animation-timeline` für ein Element eine Ansichtsfortschritts-Zeitleiste ist, die das Element animieren wird, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt.
Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitleiste liefert, sowie die Einfügung innerhalb des sichtbaren Bereichs, an der die Animation beginnt und endet.
Siehe ([Firefox Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

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

Die nicht standardmäßige CSS {{cssxref("zoom")}} Eigenschaft ist in der Nightly-Version aktiviert und ermöglicht es Ihnen, ein Element ähnlich wie die {{cssxref("transform")}} Eigenschaft zu vergrößern, aber es beeinflusst die Layoutgröße des Elements.
Siehe ([Firefox Bug 1855763](https://bugzil.la/1855763) und [Firefox Bug 390936](https://bugzil.la/390936)) für weitere Details.

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

Um die Kompatibilität mit diesen Änderungen zu gewährleisten, sind die [Vendor-prefixed transform properties](#vendor-prefixed_transform_eigenschaften) und die [Vendor-prefixed transition properties](#vendor-prefixed_transition_eigenschaften) in der Nightly-Version deaktiviert.
Diese Änderungen sind in den folgenden Abschnitten beschrieben.

### text-wrap: balance & stable Werte

Die [`text-wrap`](/de/docs/Web/CSS/text-wrap) CSS-Eigenschaftswerte `balance` und `stable` ermöglichen es, dass das Layout von kurzem Inhalt auf ausgewogene Weise umbrochen wird und dass änderbarer Inhalt nicht neu umbrochen wird, während der Benutzer ihn bearbeitet.
(Siehe [Firefox Bug 1731541](https://bugzil.la/1731541) für weitere Details.)

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

### Vendor-prefixed transform Eigenschaften

Die `-moz-`-präfixierten [CSS transform](/de/docs/Web/CSS/CSS_transforms) Eigenschaften wurden in der Nightly-Version deaktiviert, indem die `layout.css.prefixes.transforms` Präferenz auf `false` gesetzt wurde. ([Firefox Bug 1855763](https://bugzil.la/1855763)).
Speziell deaktiviert wurden folgende Eigenschaften:

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

### Vendor-prefixed transition Eigenschaften

Die `-moz-`-präfixierten [CSS transitions](/de/docs/Web/CSS/CSS_transitions) Eigenschaften wurden in der Nightly-Version deaktiviert, indem die `layout.css.prefixes.transitions` Präferenz auf `false` gesetzt wurde. ([Firefox Bug 1855763](https://bugzil.la/1855763)).
Speziell deaktiviert wurden folgende Eigenschaften:

- `-moz-transition`
- `-moz-transition-delay`
- `-moz-transition-duration`
- `-moz-transition-property`
- `-moz-transition-timing-function`

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

### UA-Stile für `<h1>`, verschachtelt in Gliederungselementen

Die `<h1>`-Überschrift wird nicht mehr in der Schriftgröße verkleinert, wenn sie innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Content_categories#sectioning_content) wie `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, verschachtelt in Gliederungselementen, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

> [!NOTE]
> Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist auf `false` im Nightly-Build gesetzt, was die UA-Stildefinitionen für verschachtelte Überschriften entfernt. Sie ist auf `true` in allen anderen Kanälen gesetzt, was die bestehenden UA-Stildefinitionen für die verschachtelten Überschriften beibehält.

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

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften mit Hilfe von einem oder mehreren "Formbefehlen" zu definieren. Diese Befehle sind den [SVG Pfadbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ähnelt in einigen Aspekten der `{{cssxref("basic-shape/path","path()")}}` Funktion, aber im Gegensatz zu `path()`, die die [SVG Pfad](/de/docs/Web/SVG/Element/path) Syntax verwendet, nutzt `shape()` die standardmäßige CSS-Syntax. Dies ermöglicht es Ihnen, leicht Formen zu erstellen und zu bearbeiten und auch CSS-Mathematikfunktionen zu verwenden.
Für weitere Details siehe [Firefox Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()`-Funktion in `clip-path`, [Firefox Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path` und [Firefox Bug 1884425](https://bugzil.la/1884425) für die Unterstützung der Interpolation.

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
      <td colspan="2"><code>layout.css.basic-shape-shape.enabled</code></td>
    </tr>
  </tbody>
</table>

### `@starting-style` at-rule

Die CSS [`@starting-style`](/de/docs/Web/CSS/@starting-style) at-rule ermöglicht es Ihnen, die Startstile eines Elements für eine CSS-Übergang festzulegen, wenn das Element keinen standardmäßigen Initialstil hat. Dies ist besonders nützlich für Elemente, die beim ersten Rendern aus dem Sichtfeld versteckt sind wie [`popover`](/de/docs/Web/HTML/Global_attributes/popover) oder ['dialog'](/de/docs/Web/HTML/Element/dialog). Unterstützt noch nicht das Animieren von `display: none`. Für mehr Details siehe [Firefox Bug 1834876](https://bugzil.la/1834876) und [Firefox Bug 1834877](https://bugzil.la/1834877).

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

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt die spezifizierte Buchstabenzwischenraum gleichmäßig auf beiden Seiten jedes Zeichens auf. Das unterscheidet sich von dem aktuellen Verhalten, bei dem der Abstand vorwiegend zu einer Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei gemischtrichtiger Text [Firefox Bug 1891446](https://bugzil.la/1891446).

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

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen und ermöglicht es Ihnen, Änderungen an Farben in verschiedenen Farbräumen oder während der Verwendung verschiedener funktionaler Notationen richtig zu berechnen [Firefox Bug 1889561](https://bugzil.la/1889561).

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

Das Modul [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) definiert eine Reihe von Funktionen, die es ermöglichen, Elemente als Ankerelemente zu definieren und andere Elemente relativ zu Ankerelementen zu positionieren.
Dieser Ansatz ermöglicht es beispielsweise, dass Tooltips zusammen mit dem zugehörigen Inhalt angezeigt werden, während es durch das Ansichtsfenster scrollt, und bewegt sich nach Bedarf, wenn es aus dem Ansichtsfenster herausfließen würde, und verschwindet, wenn der Anker vom Bildschirm verschiebt.
Die Funktionalitäten werden schrittweise hinter einer Präferenz eingeführt ([Firefox Bug 1838746](https://bugzil.la/1838746)).

Zu den implementierten Teilen gehören:

- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) und [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131).

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

Die SVGPathSeg APIs werden entfernt und wurden hinter einer Präferenz platziert.
Dies beinhaltet: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/de/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`.
(Siehe [Firefox Bug 1388931](https://bugzil.la/1388931) für weitere Details.)

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

{{jsxref("Promise.try()")}} ist eine praktische Methode, die einen beliebigen Callback (der zurückgibt oder eine Ausnahme wirft, synchron oder asynchron) annimmt und dessen Ergebnis in einem {{jsxref("Promise")}} umschließt, sodass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um es zu handhaben ([Firefox Bug 1905364](https://bugzil.la/1905364)).

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

### Reguläre Ausdruck (?ims-ims:...) Modifikatoren

Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) regulären Ausdruckmodifikatoren ermöglichen es Ihnen, Änderungen nur in einem bestimmten Teil eines Regex-Musters vorzunehmen.

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
      <td>131</td>
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
      <td colspan="2"><code>javascript.options.experimental.regexp_modifiers</code></td>
    </tr>
  </tbody>
</table>

## APIs

### Cookie Store API

Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{jsxref("Promise")}}-basierte Methode zum Verwalten von Cookies, die die Ereignisschleife nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ein Teil der Cookie Store API wurde implementiert ([Firefox Bug 1800882](https://bugzil.la/1800882)). Dies schließt ein:

- Die [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle, aber `partitioned` ist nicht in den Rückgabewerten enthalten.
- Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) Schnittstelle, ohne `partitioned` Eigenschaften.
- Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) Eigenschaft.
- Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) Eigenschaft.

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

### Fetch `keepalive`

Die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode hat eine [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.

Dies ermöglicht, dass eine Fetch-Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) fungiert, wenn am Ende einer Sitzung Analysedaten gesendet werden sollen, was einige Vorteile hat (Sie können HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Fetch {{jsxref("Promise")}} Erfüllung zugreifen). Sie ist auch in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar.

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
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.fetchKeepalive.enabled</code></td>
    </tr>
  </tbody>
</table>

### Grafik: Canvas, WebGL, und WebGPU

#### Anfordern von Video-Frame-Rückrufen

Die Methode [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle registriert eine Rückruffunktion, die ausgeführt wird, wenn ein neuer Videoframe an den Kompositor gesendet wird. Entwickler können dies nutzen, um Operationen an jedem Videoframe durchzuführen, was effizienteres Malen auf eine Leinwand, Videoanalyse, Synchronisierung mit externen Audioquellen und so weiter ermöglicht. Die Methode gibt ein Rückruf-Handle zurück, das an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden kann, um den ausstehenden Rückrufauftrag abzubrechen. ([Firefox Bug 1800882](https://bugzil.la/1800882)).

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
      <td>Ja</td>
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
      <td colspan="2"><code>media.rvfc.enabled</code></td>
    </tr>
  </tbody>
</table>

#### Trefferregionen

Ob sich die Mauskoordinaten innerhalb eines bestimmten Bereichs auf der Leinwand befinden, ist ein häufig zu lösendes Problem. Das Trefferregionen-API ermöglicht es Ihnen, einen Bereich Ihrer Leinwand zu definieren und bietet eine weitere Möglichkeit, interaktive Inhalte auf einer Leinwand An Werkzeugen für die Barrierefreiheit zugänglich zu machen.

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

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich aktuell im "Entwurfs"-Status befinden und getestet werden, zur Nutzung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet niedrigstufige Unterstützung für die Durchführung von Berechnungen und die Grafikwiedergabe mithilfe des [Graphikprozessors](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

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

Die [Reporting API](/de/docs/Web/API/Reporting_API) hat nun Unterstützung zur Meldung von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Verletzungen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können nun einen `type` Wert von `"csp-violation"` haben und eine `body` Eigenschaft, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält.
Dies ermöglicht es, CSP-Verletzungen innerhalb einer Webseite zu melden.

CSP-Verletzungsberichte können auch an Remote-Endpunkte geschickt werden, die namentlich in der CSP-{{CSP("report-to")}} Direktive angegeben sind – Endpunktenamen und entsprechende URLs müssen zunächst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwort-Headern definiert werden.
Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report)-Objekts, mit einer `body` Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verletzungsbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verletzungsberichten, der die CSP-{{CSP("report-uri")}} Direktive verwendet, um die URL des Berichts-Endpunkts festzulegen, und ein [CSP-spezifisches JSON-Verletzungsberichtsformat](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat.
([Firefox Bug 1391243](https://bugzil.la/1391243)).

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

Die folgenden experimentellen Funktionen umfassen diejenigen, die im [WebRTC-API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### Asynchrone SourceBuffer-Methoden zum Hinzufügen und Entfernen

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellen-Puffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle hinzu. Siehe [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617) für weitere Informationen.

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

Die `image.avif.compliance_strictness`-Präferenz kann verwendet werden, um die _Strenge_ zu steuern, die bei der Verarbeitung von [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image)-Bildern angewendet wird.
Dies ermöglicht es Firefox-Nutzern, Bilder anzuzeigen, die in anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

Erlaubte Werte sind:

- `0`: Akzeptiere Bilder mit Verstößen gegen Empfehlungen (Sprache "sollte") und Anforderungen (Sprache "muss"), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
- `1` (Standard): Lehne Verstöße gegen Anforderungen ab, erlaube jedoch Verstöße gegen Empfehlungen.
- `2`: Streng. Lehne alle Verstöße gegen Anforderungen oder Empfehlungen ab.

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

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/)-Bilder, wenn diese Funktion aktiviert ist.
Siehe [Firefox Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

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

Diese Funktion bietet Unterstützung für die [OpenFont COLRv1-Schriftenspezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/).
Dies ermöglicht das Laden von kompressionsfreundlichen, farbigen Vektorschriften mit Farbverläufen, Komposition und Mischen mit der CSS-Regel [`@font-face`](/de/docs/Web/CSS/@font-face) oder der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API).
Siehe [Firefox Bug 1740530](https://bugzil.la/1740530) für weitere Details.

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

Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bietet einen Mechanismus zum Styling beliebiger Textbereiche in einem Dokument (allgemeinere Funktionalität als andere Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}}).
Die Bereiche werden in JavaScript unter Verwendung von [`Range`](/de/docs/Web/API/Range)-Instanzen, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind, definiert und dann mit einem Namen über [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registriert.
Das CSS-Pseudoelement [`::highlight`](/de/docs/Web/CSS/::highlight) wird verwendet, um Stile auf ein registriertes Highlight anzuwenden.
Siehe [Firefox Bug 1703961](https://bugzil.la/1703961) für weitere Details.

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

### Service Workers

#### Vorladen von Service Worker-Ressourcen bei der Navigation

Die [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)-Schnittstelle kann verwendet werden, um das Vorladen von Ressourcen beim Navigieren zu einer Seite zu aktivieren.
Das Vorladen erfolgt parallel zum Start des Workers und reduziert die Gesamtzeit vom Beginn der Navigation bis zum Abrufen der Ressourcen.

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

### WebVR-API

#### WebVR-API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung.
Sie ist standardmäßig in allen Builds deaktiviert [Firefox Bug 1750902](https://bugzil.la/1750902).

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

#### Selektionen über Schatten-DOM-Grenzen hinweg

Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zu erhalten, die den aktuell ausgewählten Bereich oder Bereiche darstellen.
Im Gegensatz zu [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) kann diese Methode Bereiche mit Anker- oder Fokus-Knoten innerhalb eines Schatten-DOMs zurückgeben, aber nur, wenn ihr die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte übergeben werden, die diese Knoten enthalten.
Andernfalls wird sie einen Bereich zurückgeben, der neu fokussiert wurde, um den Host-Knoten der Schattenwurzel einzuschließen, die den Knoten enthält.
Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls so geändert, dass sie Knoten innerhalb einer Schattenwurzel akzeptieren.

Benutzerauswahl durch Maus, Tastatur und so weiter kann überall im Dokument beginnen und enden, einschließlich innerhalb offener oder geschlossener Schattierbäume.
([Firefox Bug 1867058](https://bugzil.la/1867058)).

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

[`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) ermöglicht es Ihnen, die Sink-ID eines Audioausgabegeräts auf einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) festzulegen und damit zu ändern, wo die Audioausgabe erfolgt. Siehe [Firefox Bug 934425](https://bugzil.la/934425) für weitere Details.

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

Durch das Aktivieren dieser Funktion werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht und sind daher standardmäßig deaktiviert. Siehe [Firefox Bug 1057233](https://bugzil.la/1057233) für weitere Details.

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

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` übertragen den gegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox Bug 918189](https://bugzil.la/918189) für weitere Details.)

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

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Knoten oder Viewport zurück. (Siehe [Firefox Bug 917755](https://bugzil.la/917755) für weitere Details.)

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

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von web-basierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der beim Testen der Benutzeroberfläche auftrat, haben wir beschlossen, den Versand dieser API zu verschieben, während über potenzielle Änderungen der API diskutiert wird. Die Arbeit läuft noch. (Siehe [Firefox Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

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

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website.
Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Präferenz auf dem Desktop (es sei denn, unten angegeben).

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
      <td>Nein (standardmäßig). Ja (Windows ab Version 92)</td>
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

Die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) erlaubt es, ein Gerät in eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt und von den Sperrvoraussetzungen des Browsers erlaubt wird.
Normalerweise ist das Sperren der Ausrichtung nur auf Mobilgeräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird.
Siehe [Firefox Bug 1697647](https://bugzil.la/1697647) für weitere Details.

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

### Priorisierte Task Scheduling API

Die [Priorisierungs-Task-Scheduling-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle zu einer Anwendung gehörenden Aufgaben zu priorisieren, unabhängig davon, ob sie im Code eines Webseitenentwicklers oder in Drittanbieterbibliotheken und -frameworks definiert sind.

Dies ist ab Firefox 101 in Firefox Nightly (nur) aktiviert.
Es gibt keine Präferenz, die es ermöglicht, es in anderen Releases zu aktivieren.

### Notifications API

Benachrichtigungen haben die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) standardmäßig auf Windows-Systemen und in der Nightly-Version gesetzt ([Firefox Bug 1794475](https://bugzil.la/1794475)).

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

Um MitM-Angriffe (Man-in-the-Middle) zu mildern, die durch Flash-Inhalte auf verschlüsselten Seiten verursacht werden, wurde eine Präferenz hinzugefügt, um `OBJECT_SUBREQUEST`s als aktiven Inhalt zu behandeln. Siehe [Firefox Bug 1190623](https://bugzil.la/1190623) für weitere Details.

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

### Kennzeichnung unsicherer Seiten

Diese beiden Präferenzen fügen ein "Nicht sicher" Textlabel in der Adressleiste hinzu, neben dem traditionellen Schlosssymbol, wenn eine Seite unsicher geladen wird (d. h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstatt von {{Glossary("HTTPS", "HTTPS")}}). Siehe [Firefox Bug 1335970](https://bugzil.la/1335970) für weitere Details.

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
        <code>security.insecure_connection_text.enabled</code> für normales
        Surfen;
        <code>security.insecure_connection_text.pbmode.enabled</code> für
        den privaten Modus
      </td>
    </tr>
  </tbody>
</table>

### Permissions Policy / Feature Policy

Mit [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) können Webentwickler bestimmte Funktionen und APIs im Browser selektiv aktivieren, deaktivieren oder das Verhalten ändern. Es ist ähnlich wie CSP, kontrolliert aber Funktionen anstelle von Sicherheitsverhalten.
Dies wurde in Firefox als **Feature Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien auch dann durch das [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut auf `<iframe>`-Elementen gesetzt werden können, wenn die Benutzerpräferenz nicht gesetzt ist.

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

### Unterstützung der Permissions API für Mikrofon und Kamera

Die Berechtigungen `microphone` und `camera` der [Permissions API](/de/docs/Web/API/Permissions_API) werden unterstützt, sodass eine Webseite [abfragen](/de/docs/Web/API/Permissions/query) kann, ob der Zugriff auf die entsprechende Hardware gewährt, abgelehnt oder noch die Zustimmung des Benutzers erfordert wurde ([Firefox Bug 1609427](https://bugzil.la/1609427), [Firefox Bug 1915222](https://bugzil.la/1915222)).

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

Die `cache`-Direktive des [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data)-HTTP-Response-Headers löscht den Browser-Cache für die anfragende Website.

> [!NOTE]
> Dies wurde ursprünglich standardmäßig aktiviert, aber in Version 94 hinter einer Präferenz platziert ([Firefox Bug 1729291](https://bugzil.la/1729291)).

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

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Anzeigenattribution unter Verwendung des neuen `navigator.privateAttribution` Objekts mit `saveImpression()` und `measureConversion()` Methoden. Weitere Informationen zur PPA finden Sie [im Erklärer](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann über [Herkunftsversuch](https://wiki.mozilla.org/Origin_Trials) für Websites oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

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

Der HTTP-[`Accept`](/de/docs/Web/HTTP/Headers/Accept)-Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

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

[`SameSite`-Cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht für standortübergreifende Unteranfragen zum Laden von Bildern oder Frames auf einer Drittanbieter-Website und so weiter.
Für weitere Details siehe [Firefox Bug 1617609](https://bugzil.la/1617609).

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

### Access-Control-Allow-Headers-Wildcard deckt Authorization nicht ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, der anzeigt, welche Anforderungsheader in die endgültige Anforderung aufgenommen werden können.
Die Antwortdirektive kann ein Wildcard (`*`) enthalten, der anzeigt, dass die Endanforderung alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig enthält Firefox den `Authorization`-Header in der Endanforderung, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat.
Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einschließt.
Für weitere Details siehe [Firefox Bug 1687364](https://bugzil.la/1687364).

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

## Entwickler-Tools

Die Entwickler-Tools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly- und Developer Edition-Kanälen, bevor sie die Beta- und Release-Phasen erreichen. Die untenstehenden Funktionen sind die aktuellen experimentellen Funktionen der Entwickler-Tools.

### Ausführungskontext-Auswahl

Diese Funktion zeigt einen Button an der Befehlszeile der Konsole an, der es Ihnen ermöglicht, den Kontext zu ändern, in dem der Ausdruck ausgeführt wird, den Sie eingeben. (Siehe [Firefox Bug 1605154](https://bugzil.la/1605154) und [Firefox Bug 1605153](https://bugzil.la/1605153) für weitere Details.)

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

### Unterstützung für mobile Gesten im Responsive Design Mode

Mausgesten werden verwendet, um mobile Gesten wie Wischen/Scrollen, Doppel-Tippen und Pinch-Zooming sowie langes Drücken zum Auswählen/Öffnen des Kontextmenüs zu simulieren. (Siehe [Firefox Bug 1621781](https://bugzil.la/1621781), [Firefox Bug 1245183](https://bugzil.la/1245183) und [Firefox Bug 1401304](https://bugzil.la/1401304) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2">n/a</td>
    </tr>
  </tbody>
</table>

\[1] Unterstützung für das Zoomen mit der Doppel-Tipp-Geste wurde in Firefox 76 hinzugefügt. Die anderen Gesten wurden in Firefox 79 hinzugefügt.

### Server-gesendete Ereignisse im Netzwerkmonitor

Der Netzwerkmonitor zeigt Informationen für [servergesendete](/de/docs/Web/API/Server-sent_events) Ereignisse an. (Siehe [Firefox Bug 1405706](https://bugzil.la/1405706) für weitere Details.)

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

Die CSS-Regeln-Ansicht kann Browser-Kompatibilitäts-Tooltips neben allen CSS-Eigenschaften anzeigen, die bekannte Probleme haben. Weitere Informationen finden Sie unter: [Untersuchen und Bearbeiten von HTML > Browserkompatibilitätswarnungen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#browser-compat-warnings).

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

## Benutzeroberfläche

### Desktop-Zoom-Funktionalität

Diese Funktion ermöglicht es, gleichmäßiges Pinch-Zooming auf Desktop-Computern zu aktivieren, ohne dass Layout-Neuberechnungen erforderlich sind, ebenso wie bei mobilen Geräten. (Siehe [Firefox Bug 1245183](https://bugzil.la/1245183) und [Firefox Bug 1620055](https://bugzil.la/1620055) für weitere Details.)

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
      <th>Präferenzname</th>
      <td colspan="2">
        <code>apz.allow_zooming</code> und (auf Windows)
        <code>apz.windows.use_direct_manipulation</code>
      </td>
    </tr>
  </tbody>
</table>

## Siehe auch

- [Release-Notes für Firefox-Entwickler](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
