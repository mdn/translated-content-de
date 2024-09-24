---
title: Experimentelle Funktionen in Firefox
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 12d435505853b709d2d0e2d896023e6802669eff
---

{{FirefoxSidebar}}

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, einschließlich solcher für vorgeschlagene oder fortschrittliche Webplattform-Standards, zusammen mit Informationen zu den Builds, in denen sie vorhanden sind, ob sie "standardmäßig" aktiviert sind oder nicht, und welche _Präferenz_ verwendet werden kann, um sie zu aktivieren oder zu deaktivieren. Dies ermöglicht Ihnen, die Funktionen zu testen, bevor sie veröffentlicht werden.

Neue Funktionen erscheinen zuerst im [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) Build, wo sie oft standardmäßig aktiviert sind. Später propagieren sie weiter zur [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) und schließlich zum Release-Build. Nachdem eine Funktion standardmäßig in einem Release-Build aktiviert wurde, gilt sie nicht mehr als experimentell und sollte aus dem Thema entfernt werden.

Experimentelle Funktionen können mit dem [Firefox-Konfigurations-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) (geben Sie `about:config` in die Firefox-Adressleiste ein) aktiviert oder deaktiviert werden, indem Sie die unten aufgeführte zugehörige _Präferenz_ ändern.

> [!NOTE]
> Für Editoren - wenn Sie Funktionen zu diesen Tabellen hinzufügen, versuchen Sie bitte, einen Link zum relevanten Bug oder Bugs einzuschließen, indem Sie `[Firefox bug <number>](https://bugzil.la/<number>)` verwenden.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies bewirkt, dass ein Suchfeld ein Löschsymbol hat, sobald jemand darin zu tippen beginnt, um es anderen Browserimplementierungen anzugleichen. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

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

### Passwortanzeige umschalten

HTML-Passworteingabefelder ([`<input type="password">`](/de/docs/Web/HTML/Element/input/password)) beinhalten ein "Augen"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

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

### Hex-Boxen zur Anzeige von Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formfeed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als eine Hexbox, wenn sie nicht erwartet werden. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

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

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/)-Spezifikation und erlaubt es Ihnen, anzugeben, wie hängende, erhobene und abgesenkte Anfänge von Buchstaben angezeigt werden. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

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

Das `from` Schlüsselwort wird jetzt als gültige CSS-Syntax geparst, wenn die Präferenz `layout.css.relative-color-syntax.enabled` auf `true` gesetzt ist. Obwohl dieses Schlüsselwort derzeit keine Wirkung hat, erzeugt es keine Syntaxfehler, wenn es an gültigen Stellen in CSS-Farb-Funktionen verwendet wird, wodurch die fortlaufende Arbeit an [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) unterstützt wird. Siehe [Firefox-Bug 1889133](https://bugzil.la/1889133) für weitere Details.

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

### Einzelne Zahlen als Seitenverhältnis in Medienabfragen

Unterstützung für die Verwendung einer einzelnen {{cssxref("number")}} als {{cssxref("ratio")}}, wenn das Seitenverhältnis für eine [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) angegeben wird. (Siehe [Firefox-Bug 1565562](https://bugzil.la/1565562) für weitere Details.)

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

Die {{cssxref("backdrop-filter")}}-Eigenschaft wendet Filtereffekte auf den Bereich hinter einem Element an. (Siehe [Firefox-Bug 1178765](https://bugzil.la/1178765) für weitere Details.)

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

Die {{cssxref("fit-content_function", "fit-content()")}}-Funktion wie sie auf {{cssxref("width")}} und andere Größen-Eigenschaften angewendet wird. Diese Funktion wird bereits gut für CSS-Grid-Layout-Spurgrößen unterstützt. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

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

### Scroll-abhängige Animationen

Früher als "Scroll-verknüpfte Animationen" bezeichnet, hängt eine scroll-abhängige Animation von der Scrollposition eines Scrollbalkens ab, anstatt von Zeit oder einer anderen Dimension. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) erlauben es Ihnen, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scroll-abhängige Animation verwendet werden kann. Die Scroll-Zeitachse kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) verknüpft werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namenswert gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Bei Verwendung der {{cssxref('scroll-timeline')}} Kurzschreibweise müssen die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Lang- und Kurzschreibweise sind beide hinter der Präferenz verfügbar.

Alternativ können Sie mit der funktionalen Notation [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) und {{cssxref('animation-timeline')}} angeben, dass eine Scrollbalkenachse in einem übergeordneten Element für die Zeitachse verwendet wird.

Für weitere Informationen siehe [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

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

### @scope At-Regel

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, spezifische Kindelemente auszuwählen, ohne dass Sie die Spezifität von CSS-Selektoren übermäßig erhöhen müssen ([Firefox-Bug 1886441](https://bugzil.la/1886441)).

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

Der `@font-face` [`src`-Deskriptor](/de/docs/Web/CSS/@font-face/src) unterstützt jetzt die `tech()`-Funktion und ermöglicht das Fallback, ob eine Schriftartressource heruntergeladen wird, basierend darauf, ob der User-Agent eine bestimmte Schrifteigenschaft oder -technologie unterstützt. Siehe [Firefox-Bug 1715546](https://bugzil.la/1715546) für mehr Details.

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

Die CSS [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) Eigenschaft ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen. Siehe ([Firefox-Bug 1461589](https://bugzil.la/1461589)) für mehr Details.

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

Der **`page-orientation`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@page")}} At-Regel steuert die Rotation einer gedruckten Seite. Es behandelt den Fluss des Inhalts über Seiten hinweg, wenn sich die Ausrichtung einer Seite ändert. Dieses Verhalten unterscheidet sich vom [`size`](/de/docs/Web/CSS/@page/size) Deskriptor, indem ein Benutzer die Richtung definieren kann, in der die Seite gedreht werden soll. Siehe ([Firefox-Bug 1673987](https://bugzil.la/1673987)) für weitere Details.

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

### prefers-reduced-transparency Medienmerkmal

Das CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienmerkmal lässt Sie erkennen, ob ein Benutzer die Einstellung aktiviert hat, die Menge an transparenten oder durchscheinenden Schichteffekten auf ihrem Gerät zu minimieren. Siehe ([Firefox-Bug 1736914](https://bugzil.la/1736914)). für weitere Details.

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

### inverted-colors Medienmerkmal

Das CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Medienmerkmal lässt Sie erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben umkehrt. Siehe ([Firefox-Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

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

### Benannte Ansicht Fortschritts-Zeitachsen-Eigenschaft

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben und zu identifizieren, dass dessen übergeordneter Scroller das Elemente die Quelle einer Fortschritts-Zeitachse der Ansicht ist. Der Name kann dann der `animation-timeline` zugeordnet werden, welche dann das verbundene Element animiert, während es durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt wird. Siehe ([Firefox-Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

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

### Anonyme Ansichten Fortschritts-Zeitachsen-Funktion

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion lässt Sie angeben, dass die `animation-timeline` für ein Element eine Fortschritts-Zeitachse der Ansicht ist, welche das Element animiert, während es durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt wird. Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitachse bereitstellt, zusammen mit dem Inset innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und endet. Siehe ([Firefox-Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

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

Die nicht standardisierte CSS {{cssxref("zoom")}}-Eigenschaft ist im Nightly-Release aktiviert und lässt Sie ein Element ähnlich wie die {{cssxref("transform")}} Eigenschaft vergrößern, aber sie beeinflusst die Layoutgröße des Elements. Siehe ([Firefox-Bug 1855763](https://bugzil.la/1855763) und [Firefox-Bug 390936](https://bugzil.la/390936)) für mehr Details.

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

Um die Kompatibilität mit diesen Änderungen sicherzustellen, sind die [Vendor-präfixierten Transform-Eigenschaften](#vendor-präfixierte_transform-eigenschaften) und die [Vendor-präfixierten Übergangseigenschaften](#vendor-präfixierte_übergangseigenschaften) im Nightly-Release deaktiviert. Diese Änderungen werden in den folgenden Abschnitten beschrieben.

### text-wrap: balance & stabile Werte

Die Werte `balance` und `stable` der [`text-wrap`](/de/docs/Web/CSS/text-wrap) CSS-Eigenschaft erlauben das Layout von kurzem Inhalt, in einer ausgewogenen Art und Weise umbrochen zu werden, und für bearbeitbare Inhalte während der Bearbeitung nicht neu zu fließen. (Siehe [Firefox-Bug 1731541](https://bugzil.la/1731541) für mehr Details.)

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

### Vendor-präfixierte Transform-Eigenschaften

Die mit `-moz-` präfixierten [CSS Transform](/de/docs/Web/CSS/CSS_transforms) Eigenschaften sind im Nightly-Release deaktiviert, indem die Präferenz `layout.css.prefixes.transforms` auf `false` gesetzt wird. ([Firefox-Bug 1855763](https://bugzil.la/1855763)). Konkret sind die deaktivierten Eigenschaften:

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

### Vendor-präfixierte Übergangseigenschaften

Die mit `-moz-` präfixierten [CSS Übergänge](/de/docs/Web/CSS/CSS_transitions) Eigenschaften sind im Nightly-Release deaktiviert, indem die Präferenz `layout.css.prefixes.transitions` auf `false` gesetzt wird. ([Firefox-Bug 1855763](https://bugzil.la/1855763)). Konkret sind die deaktivierten Eigenschaften:

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

### UA-Stile für `<h1>` im verschachtelten Abschnittselementen

Das `<h1>` Heading wird jetzt nicht mehr verkleinert, wenn es innerhalb von [Abschnittselementen](/de/docs/Web/HTML/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` im verschachtelten Abschnittselement sind nicht mehr relevant, da der Outline-Algorithmus [entfernt wurde](https://github.com/whatwg/html/pull/7829) aus der HTML-Spezifikation. ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

> [!NOTE]
> Die Präferenz für dieses Feature funktioniert umgekehrt: Sie wird im Nightly-Build auf `false` gesetzt, was die UA-Styling für Headings in verschachtelten Elemente entfernt. Sie wird in allen anderen Kanälen auf `true` gesetzt, was das bestehende UA-Styling für die verschachtelten Headings beibehält.

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

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, der Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften zu definieren, indem eine oder mehrere "Formkommandos" verwendet werden. Diese Kommandos sind den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ist in gewisser Hinsicht ähnlich der `{{cssxref("basic-shape/path","path()")}}` Funktion, jedoch verwendet `path()` die [SVG-Pfad](/de/docs/Web/SVG/Element/path) Syntax, während `shape()` die Standard-CSS-Syntax verwendet. Dies ermöglicht es Ihnen, Formen leicht zu erstellen und zu bearbeiten und ermöglicht auch die Nutzung von CSS-Mathematikfunktionen. Für weitere Details siehe [Firefox-Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path` und [Firefox-Bug 1884425](https://bugzil.la/1884425) für dessen Interpolations-Unterstützung.

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

### `@starting-style` At-Regel

Die CSS [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel ermöglicht es Ihnen, die Startstile eines Elements für eine CSS-Übergang festzulegen, wenn das Element keinen Standardanfangsstil hat. Dies ist besonders nützlich für Elemente, die beim ersten Rendern unsichtbar sind, wie [`popover`](/de/docs/Web/HTML/Global_attributes/popover) oder ['dialog'](/de/docs/Web/HTML/Element/dialog). Unterstützt noch nicht die Animation von `display: none`. Für weitere Details siehe [Firefox-Bug 1834876](https://bugzil.la/1834876) und [Firefox-Bug 1834877](https://bugzil.la/1834877).

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

### Symmetrische `letter-spacing`

Die CSS {{cssxref("letter-spacing")}}-Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich von dem aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann die Textabstände besonders in gemischten Richtungen verbessern [Firefox-Bug 1891446](https://bugzil.la/1891446).

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

### `calc()` Farbkanal-Unterstützung in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen, sodass Sie Änderungen an Farben in verschiedenen Farbräumen korrekt berechnen können oder während Sie verschiedene funktionale Notationen verwenden [Firefox-Bug 1889561](https://bugzil.la/1889561).

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

### CSS-Anker-Positionierung

Das [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definiert eine Reihe von Funktionen, die es ermöglichen, Elemente als Ankerelemente zu definieren, und um andere Elemente relativ zu diesen Ankerelementen zu positionieren. Dies ermöglicht es beispielsweise, Tooltips zusammen mit den assoziierten Inhalten anzuzeigen, während diese durch das Viewport scollen, sich bei Bedarf bewegen, wenn es das Viewport überschreiten würde, und verschwinden, wenn der Anker aus dem Bildschirm verschwindet. Die Funktionalitäten werden schrittweise hinter einer Präferenz ausgerollt ([Firefox-Bug 1889561](https://bugzil.la/1889561)).

Die implementierten Teile umfassen:

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

### SVGPathSeg-APIs

Die SVGPathSeg-APIs werden entfernt und hinter einer Präferenz platziert. Dies schließt ein: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/de/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`. (Siehe [Firefox-Bug 1388931](https://bugzil.la/1388931) für mehr Details.)

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

### Reguläre Ausdrücke (?ims-ims:...) Modifikatoren

Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Modifikatoren für reguläre Ausdrücke erlauben es Ihnen, Änderungen vorzunehmen, die nur in einem bestimmten Teil eines regulären Ausdrucksmusters wirken.

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

### Grafik: Canvas, WebGL und WebGPU

#### Anfrage von Videoframe-Rückrufen

Die Methode {{domxref('HTMLVideoElement/requestVideoFrameCallback','requestVideoFrameCallback()')}} des {{domxref('HTMLVideoElement')}} Schnittstelle registriert eine Rückruffunktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Entwickler können dies nutzen, um Operationen auf jedem Videoframe durchzuführen, was effizienter auf eine Leinwand gemalt werden kann, Videoanalysen ermöglicht, mit externen Audioquellen synchronisiert wird und so weiter. Die Methode gibt einen Rückrufhandle zurück, der an {{domxref('HTMLVideoElement.cancelVideoFrameCallback()')}} übergeben werden kann, um das ausstehende Rückrufanforderung zu stornieren. ([Firefox-Bug 1800882](https://bugzil.la/1800882)).

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

Ob sich die Mauskoordinaten in einem bestimmten Bereich auf der Leinwand befinden, ist ein gängiges Problem zu lösen. Das Trefferregionen-API ermöglicht es Ihnen, einen Bereich Ihrer Leinwand zu definieren und bietet eine weitere Möglichkeit, interaktive Inhalte auf einer Leinwand für Barrierefreiheitswerkzeuge zu exponieren.

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

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurfs"-Status befinden und getestet werden, zur Verwendung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU-API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Durchführung von Berechnungen und Grafikrendering mithilfe der [Graphic Processing Unit](https://de.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unsere Fortschritte bei dieser API.

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

### Unterstützung der Reporting-API für CSP-Verstöße

Die [Reporting-API](/de/docs/Web/API/Reporting_API) unterstützt jetzt das Berichten von Verstößen gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP).

{{domxref('Report')}}-Instanzen, die von der {{domxref('ReportingObserver')}} Schnittstelle zurückgegeben werden, können jetzt einen `type`-Wert von `"csp-violation"` haben und eine `body`-Eigenschaft, die eine Instanz der {{domxref('CSPViolationReportBody')}} Schnittstelle enthält. Dadurch können CSP-Verstöße innerhalb einer Webseite gemeldet werden.

CSP-Verstoßberichte können auch an entfernte Endpunkte gesendet werden, die namentlich in der CSP {{CSP("report-to")}} Direktive angegeben sind — Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheadern definiert werden. Der Bericht ist eine Serialisierung des oben beschriebenen {{domxref('Report')}}-Objekts mit einer `body`-Eigenschaft, die eine Serialisierung einer {{domxref('CSPViolationReportBody')}}-Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, der die CSP {{CSP("report-uri")}} Direktive verwendet, um die URL des Reporting-Endpunkts festzulegen und ein [CSP-spezifisches JSON Verstoberichtformat](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat. ([Firefox-Bug 1391243](https://bugzil.la/1391243)).

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

Die folgenden experimentellen Funktionen umfassen solche, die in der [WebRTC-API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### Asynchrones SourceBuffer Hinzufügen und Entfernen

Dies fügt die versprechensbasierten Methoden {{domxref("SourceBuffer.appendBufferAsync", "appendBufferAsync()")}} und {{domxref("SourceBuffer.removeAsync", "removeAsync()")}} zum Hinzufügen und Entfernen von Mediapufferquellen zur {{domxref("SourceBuffer")}} Schnittstelle hinzu. Siehe [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617) für weitere Informationen.

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

#### AVIF-Konformitätsstriktheit

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Striktheit_ bei der Verarbeitung von [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) Bildern zu steuern. Dies ermöglicht es Firefox-Nutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

Erlaubte Werte sind:

- `0`: Akzeptieren Sie Bilder mit Verletzungen von Spezifikationen sowohl in Empfehlungen ("sollte" Sprache) als auch in Anforderungen ("muss" Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
- `1` (Standard): Verweigern Sie Verstöße gegen Anforderungen, aber erlauben Sie Verstöße gegen Empfehlungen.
- `2`: Strikt. Verweigern Sie Verstöße in Anforderungen oder Empfehlungen.

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

#### Unterstützung für JPEG XL

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox-Bug 1539075](https://bugzil.la/1539075) für mehr Details.

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

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

### OpenFont COLRv1-Schriftarten

Diese Funktion bietet Unterstützung für die [OpenFont COLRv1 Schriftartenspezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/). Dies ermöglicht compression-freundliche Farbvektorschriftarten mit Verläufen, Zusammensetzung und Mischen, die mit der CSS [`@font-face`](/de/docs/Web/CSS/@font-face) Regel oder der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) geladen werden. Siehe [Firefox-Bug 1740530](https://bugzil.la/1740530) für mehr Details.

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

Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bietet einen Mechanismus zum Gestalten beliebiger Textbereiche in einem Dokument (verallgemeinert das Verhalten anderer Hervorhebungs-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}}). Die Bereiche werden in JavaScript unter Verwendung von [`Range`](/de/docs/Web/API/Range)-Instanzen definiert, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind, und werden dann mit einem Namen unter Verwendung von [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registriert. Das CSS [`::highlight`](/de/docs/Web/CSS/::highlight) Pseudoelement wird verwendet, um Stile auf eine registrierte Hervorhebung anzuwenden. Siehe [Firefox-Bug 1703961](https://bugzil.la/1703961) für mehr Details.

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

### Service Workers

#### Preloading von Service Worker Ressourcen bei Navigation

Die {{domxref("NavigationPreloadManager")}} Schnittstelle kann verwendet werden, um das Preloading von Ressourcen bei der Navigation zu aktivieren. Das Preloading erfolgt parallel zum Arbeitsstart, wodurch die Gesamtzeit von der Navigation bis zur Ressourcenabrufnung verkürzt wird.

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
      <th>Präferenzname</th>
      <td colspan="2"><code>dom.serviceWorkers.navigationPreload.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung. Sie ist standardmäßig auf allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

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

#### Selektionen über Schatten-DOM-Grenzen

Die Methode {{domxref("Selection.getComposedRanges()")}} kann verwendet werden, um ein Array von {{domxref("StaticRange")}}-Objekten zu erhalten, die den aktuellen ausgewählten Bereich oder Bereiche repräsentieren. Im Gegensatz zu {{domxref("Selection.getRangeAt()")}} kann diese Methode Bereiche mit Anker- oder Fokus-Nodes innerhalb eines Schatten-DOMs zurückgeben, jedoch nur, wenn sie die {{domxref("ShadowRoot")}}-Objekte enthält, die diese Nodes enthalten. Andernfalls wird sie einen Bereich zurückgeben, der neu festgelegt wurde, um den Host-Node des Schatten-DOMs zu umfassen, der den Node enthält. Die `Selection`-Methoden {{domxref("Selection.setBaseAndExtent()","setBaseAndExtent()")}}, {{domxref("Selection.collapse()","collapse()")}}, und {{domxref("Selection.extend()","extend()")}} wurden ebenfalls geändert, um Nodes innerhalb einer Schattenwurzel zu akzeptieren.

Benutzerauswahl über Maus, Tastatur und so weiter, kann überall im Dokument beginnen und enden, einschließlich in geöffneten oder geschlossenen Schattentrees. ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

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

#### HTMLMediaElement Methode: setSinkId()

{{domxref("HTMLMediaElement.setSinkId()")}} erlaubt es Ihnen, die Sink-ID eines Audioausgabegeräts auf einem {{domxref("HTMLMediaElement")}} zu setzen und dadurch zu ändern, wo der Ton ausgegeben wird. Siehe [Firefox-Bug 934425](https://bugzil.la/934425) für mehr Details.

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

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert ist, werden den HTML-Medienelementen die {{domxref("HTMLMediaElement.audioTracks")}} und {{domxref("HTMLMediaElement.videoTracks")}} Eigenschaften hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videotracks hat, funktionieren die meisten gängigen Anwendungsfälle für diese Eigenschaften nicht, sodass sie standardmäßig nicht aktiviert sind. Siehe [Firefox-Bug 1057233](https://bugzil.la/1057233) für mehr Details.

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
