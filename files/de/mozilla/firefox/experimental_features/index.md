---
title: Experimentelle Funktionen in Firefox
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{FirefoxSidebar}}

Diese Seite listet experimentelle und teilweise implementierte Funktionen in Firefox auf, einschließlich solcher für vorgeschlagene oder hochmoderne Webplattform-Standards, mit Informationen darüber, in welchen Builds sie vorhanden sind, ob sie "standardmäßig" aktiviert sind und welche _Einstellungen_ verwendet werden können, um sie zu aktivieren oder zu deaktivieren.  
Dies ermöglicht es Ihnen, Funktionen vor ihrer Veröffentlichung zu testen.

Neue Funktionen erscheinen zuerst im [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) Build, wo sie häufig standardmäßig aktiviert sind.  
Später gelangen sie in die [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) und schließlich in den Release-Build.  
Wenn eine Funktion standardmäßig in einem Release-Build aktiviert wird, gilt sie nicht mehr als experimentell und sollte aus diesem Thema entfernt werden.

Experimentelle Funktionen können mithilfe des [Firefox Konfigurationseditors](https://support.mozilla.org/de/kb/about-config-editor-firefox) (geben Sie `about:config` in die Adressleiste von Firefox ein) durch Modifikation der zugehörigen _Einstellung_ aktiviert oder deaktiviert werden.

> [!NOTE]
> Für Redakteure - Beim Hinzufügen von Funktionen zu diesen Tabellen versuchen Sie bitte, einen Link zum entsprechenden Bug oder den Bugs mit `[Firefox bug <number>](https://bugzil.la/<number>)` bereitzustellen.

## HTML

### Autokorrektur in editierbaren Textelementen

Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) (und die entsprechende [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect)-Eigenschaft) ermöglichen Autokorrektur in editierbaren Textelementen, einschließlich der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) ([Firefox bug 1725806](https://bugzil.la/1725806)).

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

Das Layout für `input type="search"` wurde aktualisiert. Dadurch enthält ein Suchfeld ein Löschsymbol, sobald jemand beginnt, in das Feld einzutippen, um andere Browser-Implementierungen anzugleichen. (Siehe [Firefox bug 558594](https://bugzil.la/558594) für weitere Details.)

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

HTML-Passworteingabefelder ([`<input type="password">`](/de/docs/Web/HTML/Element/input/password)) beinhalten ein "Augen"-Symbol, das umgeschaltet werden kann, um das Passwort anzuzeigen oder zu verbergen ([Firefox bug 502258](https://bugzil.la/502258)).

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

Der `plaintext-only`-Wert des globalen Attributes [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element editierbar ist; reichhaltige Textformatierung ist deaktiviert, und jegliche Formatierung von eingefügtem Text wird automatisch entfernt. (Siehe [Firefox bug 1922723](https://bugzil.la/1922723) für mehr Details.)

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
      <td>135</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>135</td>
      <td>Ja</td>
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

Dieses Feature stellt Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formfeed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box dar, wenn sie unerwartet auftreten. (Siehe [Firefox bug 1099557](https://bugzil.la/1099557) für weitere Details.)

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
        <code>layout.css.control-characters.visible</code>
      </td>
    </tr>
  </tbody>
</table>

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft gehört zur [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es, festzulegen, wie herabhängende, hervorgehobene und vertiefte Initialbuchstaben angezeigt werden. (Siehe [Firefox bug 1223880](https://bugzil.la/1223880) für weitere Details.)

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

...

(Der verbleibende Inhalt wird auf dieselbe Weise weitergeführt.)

## APIs

### CloseWatcher-Schnittstelle

Eingebaute Webkomponenten mit "open"- und "close"-Semantik, wie modale Dialoge und Popovers, können mithilfe von gerätenativen Mechanismen geschlossen werden. Zum Beispiel können Sie unter Android einen Dialog mit der Zurück-Taste schließen. Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle ermöglicht Entwicklern die Implementierung von UI-Komponenten, wie benutzerdefinierte Seitenleisten, die ebenfalls mit nativen Mechanismen geschlossen werden können. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

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
      <th>Preference-Name</th>
      <td colspan="2"><code>dom.closewatcher.enabled</code></td>
    </tr>
  </tbody>
</table>

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe genutzt werden könnten, nur mit geprüften oder bereinigten Daten aufgerufen werden können.

> [!NOTE]
> Zum Zeitpunkt der Erstellung dieses Dokuments wurde nicht genügend von der API implementiert, um eine effektive Testbarkeit zu gewährleisten. Diese Anmerkung wird entfernt, sobald sie bereit ist.

Folgende Teilmengen der API wurden implementiert:

- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory):
  - [`getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType) und [`getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType) ([Firefox-Bug 1917783](https://bugzil.la/1917783), [Firefox-Bug 1917784](https://bugzil.la/1917784)).
- Die Methoden [`write()`](/de/docs/Web/API/Document/write) und [`writeln()`](/de/docs/Web/API/Document/writeln) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle akzeptieren nun [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte als Parameter zusätzlich zu Strings. ([Firefox-Bug 1906301](https://bugzil.la/1906301)).
- Die Eigenschaften [`text`](/de/docs/Web/API/HTMLScriptElement/text), [`innerText`](/de/docs/Web/API/HTMLScriptElement/innerText) und [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle akzeptieren nun [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte, während [`src`](/de/docs/Web/API/HTMLScriptElement/src) [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Werte akzeptiert. ([Firefox-Bug 1905706](https://bugzil.la/1905706)).
- Die Methoden [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) können mit einem [`TrustedScript`](/de/docs/Web/API/TrustedScript) aufgerufen werden. ([Firefox-Bug 1931290](https://bugzil.la/1931290)).
- Die globale Eigenschaft [`trustedTypes`](/de/docs/Web/API/Window/trustedTypes) ist verfügbar, um auf die Trusted Types API zuzugreifen.
- Die Eigenschaften [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) können mit [trusted types](/de/docs/Web/API/Trusted_Types_API) aufgerufen werden.

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
      <td colspan="2"><code>dom.security.trusted_types.enabled</code></td>
    </tr>
  </tbody>
</table>

...
